import * as THREE from 'three';

/**
 * 3D NFC Smart Card Scene
 * 3D Holographic card with metallic sheen, tap-to-scan physics,
 * expanding electromagnetic flux waves, and decoded RFID payload readout.
 */
export function initNFCScene(container) {
  container.innerHTML = `
    <div class="nfc-container">
      <div class="nfc-hud-header">
        <div class="nfc-badge">
          <span class="hud-blink-dot cyan"></span>
          <span>13.56 MHz HF RFID • INDUCTIVE COUPLING</span>
        </div>
        <div class="nfc-status-pill" id="nfc-status-pill">
          READER: IDLE (WAITING FOR CARD)
        </div>
      </div>

      <div class="nfc-viewport-wrapper">
        <canvas id="nfc-canvas"></canvas>
        <div class="nfc-payload-card" id="nfc-payload-card">
          <div class="payload-header">
            <span>MIFARE CLASSIC 1K • ISO/IEC 14443A</span>
            <span class="payload-tag">VERIFIED</span>
          </div>
          <div class="payload-body">
            <div class="payload-row">
              <span>CARD UID:</span>
              <strong id="nfc-uid-text">0x4A 0x9B 0x1F 0x82</strong>
            </div>
            <div class="payload-row">
              <span>HOLDER NAME:</span>
              <strong>Mritunjay Saini</strong>
            </div>
            <div class="payload-row">
              <span>STATUS:</span>
              <strong class="safe">ACCESS GRANTED • CLASS 10 LAB</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="nfc-controls-dock">
        <button class="btn primary small" id="nfc-tap-btn">Tap Card to Reader Pad</button>
        <button class="btn ghost small" id="nfc-flip-btn">Flip Card (Front / Back)</button>
        <p class="nfc-disclaimer">
          ⚡ <strong>Physical Principle:</strong> High frequency 13.56MHz electromagnetic resonance delivers both power and data to passive smart cards without any battery.
        </p>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#nfc-canvas');
  const tapBtn = container.querySelector('#nfc-tap-btn');
  const flipBtn = container.querySelector('#nfc-flip-btn');
  const statusPill = container.querySelector('#nfc-status-pill');
  const payloadCard = container.querySelector('#nfc-payload-card');

  let animId = null;

  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x050711);

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(0, 1.4, 5.2);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

  // Lights
  scene.add(new THREE.AmbientLight(0x7ca4d9, 1.4));
  const light = new THREE.DirectionalLight(0xffffff, 2.5);
  light.position.set(2, 5, 4);
  scene.add(light);

  const violetRim = new THREE.PointLight(0xa855f7, 3, 10);
  violetRim.position.set(-3, 2, -1);
  scene.add(violetRim);

  // 1. NFC Reader Terminal Pad Base
  const readerGroup = new THREE.Group();
  readerGroup.position.set(0, -1.2, 0);
  scene.add(readerGroup);

  const readerPad = new THREE.Mesh(
    new THREE.BoxGeometry(3.0, 0.22, 2.2),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5, metalness: 0.6 })
  );
  readerGroup.add(readerPad);

  // Glowing antenna coil ring
  const coilRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.8, 0.025, 8, 48),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7 })
  );
  coilRing.rotation.x = Math.PI / 2;
  coilRing.position.y = 0.12;
  readerGroup.add(coilRing);

  // 2. 3D Smart Card (Standard ISO 85.6mm x 53.98mm ratio)
  const cardGroup = new THREE.Group();
  cardGroup.position.set(0, 0.5, 0);
  scene.add(cardGroup);

  const cardMat = new THREE.MeshPhysicalMaterial({
    color: 0x09090b,
    metalness: 0.4,
    roughness: 0.2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1
  });

  const cardMesh = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.5, 0.04), cardMat);
  cardGroup.add(cardMesh);

  // Gold metallic contact chip
  const chipMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.2 });
  const chip = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.35, 0.05), chipMat);
  chip.position.set(-0.65, 0.15, 0.02);
  cardGroup.add(chip);

  // Card branding stripe
  const stripeMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6 });
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(2.36, 0.2, 0.042), stripeMat);
  stripe.position.set(0, -0.4, 0.02);
  cardGroup.add(stripe);

  // Electromagnetic flux ring indicator
  const fluxWave = new THREE.Mesh(
    new THREE.RingGeometry(0.2, 0.35, 32),
    new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0, side: THREE.DoubleSide })
  );
  fluxWave.rotation.x = -Math.PI / 2;
  fluxWave.position.set(0, -1.05, 0);
  scene.add(fluxWave);

  // Interactions
  let isTapping = false;
  let targetCardY = 0.5;
  let targetCardRotX = 0;
  let targetCardRotY = 0;
  let isFlipped = false;

  tapBtn.addEventListener('click', () => {
    if (isTapping) return;
    isTapping = true;
    statusPill.textContent = 'READER: CARD DETECTED • INDUCTION ACTIVE';
    statusPill.className = 'nfc-status-pill active';

    // Move down towards reader
    targetCardY = -0.95;
    targetCardRotX = 0.4;

    setTimeout(() => {
      // Trigger flux ring expansion
      fluxWave.scale.set(1, 1, 1);
      fluxWave.material.opacity = 0.9;

      statusPill.textContent = 'READER: UID VERIFIED • ACCESS GRANTED';
      statusPill.className = 'nfc-status-pill verified';
      payloadCard.classList.add('visible');

      setTimeout(() => {
        // Return back up
        targetCardY = 0.5;
        targetCardRotX = 0;
        isTapping = false;
      }, 1800);
    }, 600);
  });

  flipBtn.addEventListener('click', () => {
    isFlipped = !isFlipped;
    targetCardRotY = isFlipped ? Math.PI : 0;
  });

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = rect.width;
    const h = Math.max(340, rect.height || 420);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  resize();
  window.addEventListener('resize', resize);

  const clock = new THREE.Clock();

  function animate() {
    animId = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    // Smooth card movement
    cardGroup.position.y = THREE.MathUtils.lerp(cardGroup.position.y, targetCardY + Math.sin(elapsed * 2) * 0.05, 0.08);
    cardGroup.rotation.x = THREE.MathUtils.lerp(cardGroup.rotation.x, targetCardRotX, 0.08);
    cardGroup.rotation.y = THREE.MathUtils.lerp(cardGroup.rotation.y, targetCardRotY + Math.sin(elapsed) * 0.08, 0.08);

    // Expand flux wave
    if (fluxWave.material.opacity > 0.01) {
      fluxWave.scale.x += 0.08;
      fluxWave.scale.y += 0.08;
      fluxWave.material.opacity = THREE.MathUtils.lerp(fluxWave.material.opacity, 0, 0.04);
    }

    renderer.render(scene, camera);
  }

  animId = requestAnimationFrame(animate);

  return {
    dispose: () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      renderer.dispose();
    }
  };
}
