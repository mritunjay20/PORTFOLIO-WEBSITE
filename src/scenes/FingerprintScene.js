/**
 * Fingerprint Recognition Concept Scene
 * Detailed procedural friction ridge pattern on Canvas 2D,
 * glowing laser scanline sweep, minutiae point detection circles,
 * match verification HUD, and biometric privacy architecture.
 */
export function initFingerprintScene(container) {
  container.innerHTML = `
    <div class="fingerprint-container">
      <div class="fingerprint-hud-header">
        <div class="fingerprint-badge">
          <span class="hud-blink-dot cyan" id="fp-hud-dot"></span>
          <span>OPTICAL PRISM SCANNER • 500 DPI MINUTIAE</span>
        </div>
        <div class="fingerprint-match-status" id="fp-status-pill">
          STATUS: READY FOR ENROLLMENT / SCAN
        </div>
      </div>

      <div class="fingerprint-viewport-wrapper">
        <canvas id="fingerprint-canvas"></canvas>
        <div class="fingerprint-telemetry-hud">
          <div class="fp-telemetry-card">
            <span>EXTRACTION ALGORITHM:</span>
            <strong>Bifurcation & Ridge-Ending Extraction</strong>
          </div>
          <div class="fp-telemetry-card">
            <span>EXTRACTED MINUTIAE:</span>
            <strong id="fp-minutiae-count">42 Feature Points</strong>
          </div>
          <div class="fp-telemetry-card">
            <span>MATCH SCORE:</span>
            <strong id="fp-score-val" class="safe">96.8% (VERIFIED)</strong>
          </div>
          <div class="fp-telemetry-card">
            <span>FALSE ACCEPTANCE RATE (FAR):</span>
            <span>&lt; 0.001% (Local Hash)</span>
          </div>
        </div>
      </div>

      <div class="fingerprint-controls-dock">
        <button class="btn primary small" id="fp-scan-btn">Trigger Laser Sweep Scan</button>
        <button class="btn ghost small" id="fp-toggle-minutiae">Toggle Minutiae Points: ON</button>
        <p class="fp-disclaimer">
          🔒 <strong>Biometric Security:</strong> Optical scanners convert friction ridges into one-way mathematical feature vectors. Raw fingerprint images are never permanently stored.
        </p>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#fingerprint-canvas');
  const ctx = canvas.getContext('2d');
  const scanBtn = container.querySelector('#fp-scan-btn');
  const toggleMinutiaeBtn = container.querySelector('#fp-toggle-minutiae');
  const statusPill = container.querySelector('#fp-status-pill');
  const scoreVal = container.querySelector('#fp-score-val');
  const hudDot = container.querySelector('#fp-hud-dot');

  let width = 0, height = 0;
  let scanProgress = 0; // 0 to 1
  let isScanning = false;
  let showMinutiae = true;
  let animId = null;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = Math.max(340, rect.height || 400);
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  resize();
  window.addEventListener('resize', resize);

  // Pre-generate procedural minutiae points
  const minutiaePoints = [];
  for (let i = 0; i < 42; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * 85 + 15;
    minutiaePoints.push({
      xOffset: Math.cos(angle) * r * 0.8,
      yOffset: Math.sin(angle) * r * 1.3,
      type: Math.random() > 0.5 ? 'Bifurcation' : 'Ridge Ending',
      detected: false
    });
  }

  scanBtn.addEventListener('click', () => {
    isScanning = true;
    scanProgress = 0;
    minutiaePoints.forEach(p => p.detected = false);
    statusPill.textContent = 'SCANNING: EXTRACTING FRICTION RIDGES...';
    statusPill.className = 'fingerprint-match-status scanning';
    hudDot.className = 'hud-blink-dot cyan';
  });

  toggleMinutiaeBtn.addEventListener('click', () => {
    showMinutiae = !showMinutiae;
    toggleMinutiaeBtn.textContent = `Toggle Minutiae Points: ${showMinutiae ? 'ON' : 'OFF'}`;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;

    // 1. Draw glowing background grid
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)';
    ctx.lineWidth = 1;
    const gridSize = 24;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 2. Draw Fingerprint Friction Ridges (Concentric Elliptical Arches)
    const ridgeCount = 26;
    for (let i = 1; i <= ridgeCount; i++) {
      const rx = i * 4.8;
      const ry = i * 7.6;

      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 1.8;
      ctx.shadowColor = '#0284c7';
      ctx.shadowBlur = 6;

      ctx.beginPath();
      // Use slightly distorted bezier / arcs to look like real fingerprint loops
      ctx.ellipse(centerX, centerY - 10, rx, ry, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // 3. Scan Laser Line
    if (isScanning) {
      scanProgress += 0.008;
      if (scanProgress > 1.0) {
        isScanning = false;
        statusPill.textContent = 'STATUS: MATCH VERIFIED (ID: 001)';
        statusPill.className = 'fingerprint-match-status verified';
        scoreVal.textContent = '98.9% (VERIFIED)';
        scoreVal.className = 'safe';
        hudDot.className = 'hud-blink-dot green';
      }

      const scanY = (centerY - 170) + (scanProgress * 340);

      // Glowing laser line
      const grad = ctx.createLinearGradient(centerX - 150, scanY, centerX + 150, scanY);
      grad.addColorStop(0, 'transparent');
      grad.addColorStop(0.5, '#38bdf8');
      grad.addColorStop(1, 'transparent');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 3;
      ctx.shadowColor = '#38bdf8';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.moveTo(centerX - 150, scanY);
      ctx.lineTo(centerX + 150, scanY);
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Check minutiae points crossed by laser
      minutiaePoints.forEach(p => {
        const py = centerY + p.yOffset;
        if (scanY >= py) {
          p.detected = true;
        }
      });
    }

    // 4. Draw Minutiae Points
    if (showMinutiae) {
      minutiaePoints.forEach(p => {
        const px = centerX + p.xOffset;
        const py = centerY + p.yOffset;

        if (p.detected || !isScanning) {
          ctx.strokeStyle = '#f59e0b'; // Amber yellow
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(px, py, 4.5, 0, Math.PI * 2);
          ctx.stroke();

          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(px, py, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }

    animId = requestAnimationFrame(draw);
  }

  animId = requestAnimationFrame(draw);

  return {
    dispose: () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    }
  };
}
