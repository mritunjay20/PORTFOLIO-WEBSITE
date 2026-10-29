/**
 * Interactive Smart Radar System Scene (Canvas 2D HUD)
 * Replicates a scanning sonar/radar display with servo sweep,
 * range rings, coordinate grid, target blips, and telemetry readouts.
 */
export function initRadarScene(container) {
  container.innerHTML = `
    <div class="radar-container">
      <div class="radar-hud-bar">
        <div class="radar-status-badge">
          <span class="hud-blink-dot green"></span>
          <span id="radar-mode-text">RADAR SWEEP ACTIVE • 180° SERVO</span>
        </div>
        <div class="radar-hud-controls">
          <button class="hud-pill-btn" id="radar-daynight-toggle">Day / Night</button>
          <button class="hud-pill-btn active" id="radar-airland-toggle">Air / Ground</button>
          <button class="hud-pill-btn" id="radar-speed-toggle">Sweep: Normal</button>
        </div>
      </div>

      <div class="radar-display-wrapper">
        <canvas id="radar-canvas"></canvas>
        <div class="radar-overlay-hud">
          <div class="hud-telemetry-corner top-left">
            <span>SYS: HC-SR04 SONAR</span>
            <span>FREQ: 40.0 kHz</span>
            <span>MAX RNG: 40.0 cm</span>
          </div>
          <div class="hud-telemetry-corner top-right">
            <span>ANGLE: <strong id="hud-angle-val">90°</strong></span>
            <span>RANGE: <strong id="hud-dist-val">-- cm</strong></span>
            <span>TARGET: <strong id="hud-target-val">SEARCHING</strong></span>
          </div>
          <div class="hud-telemetry-corner bottom-left">
            <span>FRAME: LIVE SERIAL EMULATION</span>
            <span>BAUD: 9600 BPS</span>
          </div>
          <div class="hud-telemetry-corner bottom-right">
            <span>FOV: 0° — 180°</span>
            <span>ECHO LATENCY: 2.3 ms</span>
          </div>
        </div>
      </div>

      <div class="radar-control-panel">
        <div class="radar-slider-group">
          <label for="radar-manual-angle">Simulate Servo Angle (0° - 180°):</label>
          <input type="range" id="radar-manual-angle" min="0" max="180" value="90" />
        </div>
        <div class="radar-targets-list">
          <span>Active Targets:</span>
          <span class="target-tag">Target A: 48° @ 18cm</span>
          <span class="target-tag">Target B: 112° @ 29cm</span>
          <span class="target-tag">Target C: 154° @ 12cm</span>
        </div>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#radar-canvas');
  const ctx = canvas.getContext('2d');
  const hudAngle = container.querySelector('#hud-angle-val');
  const hudDist = container.querySelector('#hud-dist-val');
  const hudTarget = container.querySelector('#hud-target-val');
  const angleSlider = container.querySelector('#radar-manual-angle');
  const dayNightBtn = container.querySelector('#radar-daynight-toggle');
  const speedBtn = container.querySelector('#radar-speed-toggle');

  let width = 0, height = 0;
  let angle = 90;
  let direction = 1;
  let sweepSpeed = 0.8;
  let isNightMode = true;
  let isManualOverride = false;
  let animId = null;

  // Predefined simulated obstacle targets: [angleDeg, distanceCm]
  const targets = [
    { angle: 48, dist: 18, label: 'TGT-1', lastHit: 0 },
    { angle: 112, dist: 29, label: 'TGT-2', lastHit: 0 },
    { angle: 154, dist: 12, label: 'TGT-3', lastHit: 0 }
  ];

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = Math.max(340, rect.height || 380);
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  resize();
  window.addEventListener('resize', resize);

  dayNightBtn.addEventListener('click', () => {
    isNightMode = !isNightMode;
    dayNightBtn.classList.toggle('active', !isNightMode);
  });

  speedBtn.addEventListener('click', () => {
    if (sweepSpeed === 0.8) {
      sweepSpeed = 1.6;
      speedBtn.textContent = 'Sweep: Fast (2x)';
    } else {
      sweepSpeed = 0.8;
      speedBtn.textContent = 'Sweep: Normal (1x)';
    }
  });

  angleSlider.addEventListener('input', (e) => {
    isManualOverride = true;
    angle = parseFloat(e.target.value);
    setTimeout(() => { isManualOverride = false; }, 3000);
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height * 0.88;
    const maxRadius = Math.min(width * 0.45, height * 0.78);

    const primaryColor = isNightMode ? '#10b981' : '#38bdf8';
    const dimColor = isNightMode ? 'rgba(16, 185, 129, 0.18)' : 'rgba(56, 189, 248, 0.18)';
    const textCol = isNightMode ? '#34d399' : '#7dd3fc';

    // 1. Background glow
    const bgGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, maxRadius);
    bgGrad.addColorStop(0, isNightMode ? 'rgba(6, 78, 59, 0.35)' : 'rgba(12, 74, 110, 0.35)');
    bgGrad.addColorStop(0.85, 'rgba(4, 12, 22, 0.6)');
    bgGrad.addColorStop(1, 'rgba(2, 6, 12, 0.9)');
    ctx.fillStyle = bgGrad;
    ctx.beginPath();
    ctx.arc(centerX, centerY, maxRadius, Math.PI, 0, false);
    ctx.closePath();
    ctx.fill();

    // 2. Concentric Range Rings (10cm, 20cm, 30cm, 40cm)
    const ringSteps = [0.25, 0.5, 0.75, 1.0];
    const ringDistances = ['10 cm', '20 cm', '30 cm', '40 cm'];

    ringSteps.forEach((step, idx) => {
      const r = maxRadius * step;
      ctx.strokeStyle = dimColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, r, Math.PI, 0, false);
      ctx.stroke();

      // Range text labels
      ctx.fillStyle = textCol;
      ctx.font = '10px "DM Mono", monospace';
      ctx.fillText(ringDistances[idx], centerX + 8, centerY - r + 12);
    });

    // 3. Radial Angle Ray Lines (every 30°)
    for (let deg = 0; deg <= 180; deg += 30) {
      const rad = (180 - deg) * (Math.PI / 180);
      const x = centerX + Math.cos(rad) * maxRadius;
      const y = centerY - Math.sin(rad) * maxRadius;

      ctx.strokeStyle = deg === 90 ? 'rgba(255, 255, 255, 0.25)' : dimColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Degree label
      const lx = centerX + Math.cos(rad) * (maxRadius + 14);
      const ly = centerY - Math.sin(rad) * (maxRadius + 14);
      ctx.fillStyle = textCol;
      ctx.font = '9px "DM Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${deg}°`, lx, ly + 3);
    }

    // 4. Update Sweep Angle
    if (!isManualOverride) {
      angle += direction * sweepSpeed;
      if (angle >= 180) {
        angle = 180;
        direction = -1;
      } else if (angle <= 0) {
        angle = 0;
        direction = 1;
      }
      angleSlider.value = Math.round(angle);
    }

    hudAngle.textContent = `${Math.round(angle)}°`;

    // 5. Draw Target Blips and calculate detection
    let closestTarget = null;
    let closestDist = 999;
    const now = performance.now();

    targets.forEach(tgt => {
      const angleDiff = Math.abs(angle - tgt.angle);
      if (angleDiff < 4) {
        tgt.lastHit = now;
      }

      const timeSinceHit = now - tgt.lastHit;
      if (timeSinceHit < 2500) {
        const opacity = Math.max(0, 1 - (timeSinceHit / 2500));
        const rad = (180 - tgt.angle) * (Math.PI / 180);
        const r = (tgt.dist / 40) * maxRadius;
        const tx = centerX + Math.cos(rad) * r;
        const ty = centerY - Math.sin(rad) * r;

        // Glowing blip
        ctx.fillStyle = `rgba(239, 68, 68, ${opacity})`;
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(tx, ty, 5, 0, Math.PI * 2);
        ctx.fill();

        // Expanding alert ring
        const ringRadius = 5 + (timeSinceHit * 0.015);
        ctx.strokeStyle = `rgba(239, 68, 68, ${opacity * 0.6})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(tx, ty, ringRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Label
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.font = '9px "DM Mono", monospace';
        ctx.fillText(`${tgt.label} (${tgt.dist}cm)`, tx + 8, ty - 6);

        if (tgt.dist < closestDist) {
          closestDist = tgt.dist;
          closestTarget = tgt;
        }
      }
    });

    if (closestTarget) {
      hudDist.textContent = `${closestDist.toFixed(1)} cm`;
      hudTarget.textContent = `${closestTarget.label} @ ${closestTarget.angle}°`;
      hudTarget.style.color = '#ef4444';
    } else {
      hudDist.textContent = '-- cm';
      hudTarget.textContent = 'SCANNING...';
      hudTarget.style.color = textCol;
    }

    // 6. Draw Sweep Sector & Line
    const sweepRad = (180 - angle) * (Math.PI / 180);
    const sweepX = centerX + Math.cos(sweepRad) * maxRadius;
    const sweepY = centerY - Math.sin(sweepRad) * maxRadius;

    // Glowing sweep line
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = 2.5;
    ctx.shadowColor = primaryColor;
    ctx.shadowBlur = 16;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(sweepX, sweepY);
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Soft fading sweep wedge trail
    const trailSpan = direction > 0 ? 0.22 : -0.22;
    const trailGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, maxRadius);
    trailGrad.addColorStop(0, primaryColor);
    trailGrad.addColorStop(1, 'transparent');

    ctx.fillStyle = isNightMode ? 'rgba(16, 185, 129, 0.09)' : 'rgba(56, 189, 248, 0.09)';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, maxRadius, sweepRad + trailSpan, sweepRad, direction < 0);
    ctx.closePath();
    ctx.fill();

    // Pivot Origin Circle
    ctx.fillStyle = primaryColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 6, 0, Math.PI * 2);
    ctx.fill();

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
