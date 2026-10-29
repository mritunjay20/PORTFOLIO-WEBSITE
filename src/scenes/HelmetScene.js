import * as THREE from 'three';

/**
 * Smart Helmet Detection Scene
 * 3D motorcycle / helmet model, computer vision bounding box tracker,
 * confidence score calculation, and vehicle ignition interlock relay simulation.
 */
export function initHelmetScene(container) {
  container.innerHTML = `
    <div class="helmet-container">
      <div class="helmet-hud-header">
        <div class="helmet-badge">
          <span class="hud-blink-dot cyan" id="helmet-hud-dot"></span>
          <span>CV VISION PIPELINE • SAFETY INTERLOCK RELAY</span>
        </div>
        <div class="helmet-relay-status" id="helmet-relay-pill">
          IGNITION: LOCKED (NO HELMET)
        </div>
      </div>

      <div class="helmet-viewport-wrapper">
        <canvas id="helmet-canvas"></canvas>
        <div class="cv-bounding-box" id="helmet-bbox">
          <div class="cv-tag">
            <span id="cv-class-label">CLASS: HELMET</span>
            <span id="cv-conf-label">CONF: 98.4%</span>
          </div>
          <div class="cv-bracket top-left"></div>
          <div class="cv-bracket top-right"></div>
          <div class="cv-bracket bottom-left"></div>
          <div class="cv-bracket bottom-right"></div>
        </div>

        <div class="helmet-telemetry-hud">
          <div class="helmet-telemetry-card">
            <span>VISION MODEL:</span>
            <strong>YOLO-v8n (Headgear Classifier)</strong>
          </div>
          <div class="helmet-telemetry-card">
            <span>INFERENCE TIME:</span>
            <strong>14.2 ms / Frame</strong>
          </div>
          <div class="helmet-telemetry-card">
            <span>IGNITION SOLENOID:</span>
            <strong id="helmet-solenoid-status" class="locked">DE-ENERGIZED (OPEN)</strong>
          </div>
        </div>
      </div>

      <div class="helmet-controls-dock">
        <div class="dock-actions">
          <button class="btn primary small" id="helmet-toggle-btn">Toggle Rider Helmet: WEAR HELMET</button>
          <button class="btn ghost small" id="helmet-ignition-btn">Simulate Ignition Key Press</button>
        </div>
        <p class="helmet-disclaimer">
          ⚠️ <strong>Interlock Logic:</strong> The motorcycle electric starter motor relay only energizes when a certified helmet is detected with &gt; 90% model confidence.
        </p>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#helmet-canvas');
  const bbox = container.querySelector('#helmet-bbox');
  const classLabel = container.querySelector('#cv-class-label');
  const confLabel = container.querySelector('#cv-conf-label');
  const relayPill = container.querySelector('#helmet-relay-pill');
  const solenoidStatus = container.querySelector('#helmet-solenoid-status');
  const toggleBtn = container.querySelector('#helmet-toggle-btn');
  const ignitionBtn = container.querySelector('#helmet-ignition-btn');
  const hudDot = container.querySelector('#helmet-hud-dot');

  let hasHelmet = false;
  let animId = null;

  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x05070e);

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(0, 1.2, 5.5);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

  // Lights
  scene.add(new THREE.AmbientLight(0x7da4d4, 1.3));
  const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
  dirLight.position.set(4, 5, 4);
  scene.add(dirLight);

  const neonRim = new THREE.PointLight(0x38bdf8, 3, 10);
  neonRim.position.set(-3, 2, -2);
  scene.add(neonRim);

  const sceneGroup = new THREE.Group();
  scene.add(sceneGroup);

  // Procedural Motorcycle & Rider Base
  // 1. Rider Head / Neck
  const skinMat = new THREE.MeshStandardMaterial({ color: 0xcaa182, roughness: 0.6 });
  const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.55, 32, 24), skinMat);
  headMesh.position.set(0, 0.6, 0);
  sceneGroup.add(headMesh);

  // Hair
  const hairMat = new THREE.MeshStandardMaterial({ color: 0x17151b, roughness: 0.9 });
  const hairMesh = new THREE.Mesh(new THREE.SphereGeometry(0.58, 24, 16, 0, Math.PI * 2, 0, Math.PI / 1.7), hairMat);
  hairMesh.position.set(0, 0.65, 0);
  sceneGroup.add(hairMesh);

  // Torso / Jacket
  const jacketMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.7 });
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.6, 1.2, 24), jacketMat);
  torso.position.set(0, -0.6, 0);
  sceneGroup.add(torso);

  // 2. Helmet (which can be toggled visible/invisible or positioned over head)
  const helmetGroup = new THREE.Group();
  helmetGroup.position.set(0, 0.65, 0);
  sceneGroup.add(helmetGroup);

  const helmetShellMat = new THREE.MeshStandardMaterial({
    color: 0x0284c7, // Glossy aero cyan/blue
    metalness: 0.5,
    roughness: 0.2
  });
  const helmetShell = new THREE.Mesh(new THREE.SphereGeometry(0.68, 32, 24), helmetShellMat);
  helmetGroup.add(helmetShell);

  // Visor (tinted black with reflection)
  const visorMat = new THREE.MeshStandardMaterial({
    color: 0x09090b,
    metalness: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.85
  });
  const visor = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 16, Math.PI * 0.7, Math.PI * 0.6, Math.PI * 0.25, Math.PI * 0.45), visorMat);
  helmetGroup.add(visor);

  // Handlebars / Motorcycle windshield hint
  const shieldMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35, roughness: 0.1 });
  const shield = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.9, 0.05), shieldMat);
  shield.position.set(0, -0.2, 1.2);
  shield.rotation.x = -0.3;
  sceneGroup.add(shield);

  // Update Helmet State
  function setHelmetState(wear) {
    hasHelmet = wear;
    helmetGroup.visible = hasHelmet;

    if (hasHelmet) {
      toggleBtn.textContent = 'Toggle Rider: REMOVE HELMET';
      bbox.classList.add('visible');
      classLabel.textContent = 'CLASS: APPROVED HELMET';
      confLabel.textContent = 'CONF: 98.6%';
      relayPill.textContent = 'IGNITION: READY (INTERLOCK CLOSED)';
      relayPill.className = 'helmet-relay-status ready';
      solenoidStatus.textContent = 'ENERGIZED (CLOSED)';
      solenoidStatus.className = 'ready';
      hudDot.className = 'hud-blink-dot green';
    } else {
      toggleBtn.textContent = 'Toggle Rider: WEAR HELMET';
      bbox.classList.remove('visible');
      classLabel.textContent = 'CLASS: NO HELMET';
      confLabel.textContent = 'CONF: 94.1%';
      relayPill.textContent = 'IGNITION: LOCKED (NO HELMET)';
      relayPill.className = 'helmet-relay-status locked';
      solenoidStatus.textContent = 'DE-ENERGIZED (OPEN)';
      solenoidStatus.className = 'locked';
      hudDot.className = 'hud-blink-dot red';
    }
  }

  setHelmetState(false);

  toggleBtn.addEventListener('click', () => {
    setHelmetState(!hasHelmet);
  });

  ignitionBtn.addEventListener('click', () => {
    if (hasHelmet) {
      alert('✓ Ignition Sequence Initiated! Relay clicked closed. Engine started safely.');
    } else {
      alert('❌ Ignition Blocked! Helmet not detected. Wear a protective helmet to start engine.');
    }
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

  // Pointer drag for viewing angle
  let isDown = false, px = 0;
  canvas.addEventListener('pointerdown', (e) => { isDown = true; px = e.clientX; });
  window.addEventListener('pointermove', (e) => {
    if (isDown) {
      sceneGroup.rotation.y += (e.clientX - px) * 0.008;
      px = e.clientX;
    }
  });
  window.addEventListener('pointerup', () => { isDown = false; });

  const clock = new THREE.Clock();

  function animate() {
    animId = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    if (!isDown) {
      sceneGroup.rotation.y = Math.sin(elapsed * 0.6) * 0.15;
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
