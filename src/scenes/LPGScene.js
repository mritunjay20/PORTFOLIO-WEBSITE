import * as THREE from 'three';

/**
 * 3D LPG Gas Safety System Scene
 * 3D Cylinder model, MQ-2 gas sensor unit, simulated PPM concentration slider,
 * tri-state alert lighting (Safe / Warning / Hazard), rotating exhaust fan, and safety sequence.
 */
export function initLPGScene(container) {
  container.innerHTML = `
    <div class="lpg-container">
      <div class="lpg-hud-header">
        <div class="lpg-badge">
          <span class="hud-blink-dot orange" id="lpg-status-dot"></span>
          <span id="lpg-status-title">MQ-2 SENSOR ACTIVE • GAS MONITORING</span>
        </div>
        <div class="lpg-safety-state" id="lpg-state-pill">
          STATE: NORMAL (SAFE)
        </div>
      </div>

      <div class="lpg-viewport-wrapper">
        <canvas id="lpg-canvas"></canvas>
        <div class="lpg-telemetry-hud">
          <div class="lpg-hud-row">
            <span>GAS CONCENTRATION:</span>
            <strong id="lpg-ppm-text">85 PPM</strong>
          </div>
          <div class="lpg-hud-row">
            <span>THRESHOLD 1 (WARNING):</span>
            <span>250 PPM</span>
          </div>
          <div class="lpg-hud-row">
            <span>THRESHOLD 2 (HAZARD):</span>
            <span>450 PPM</span>
          </div>
          <div class="lpg-hud-row">
            <span>EXHAUST VENTILATION:</span>
            <strong id="lpg-fan-status">OFF (STANDBY)</strong>
          </div>
          <div class="lpg-hud-row">
            <span>GAS VALVE SOLENOID:</span>
            <strong id="lpg-valve-status" class="safe">OPEN (SUPPLY ON)</strong>
          </div>
        </div>
      </div>

      <div class="lpg-slider-dock">
        <label for="lpg-ppm-slider">Simulate Hydrocarbon Vapor Concentration (PPM):</label>
        <div class="slider-row">
          <input type="range" id="lpg-ppm-slider" min="30" max="800" value="85" />
          <button class="hud-pill-btn" id="lpg-test-leak-btn">Trigger Simulated Leak</button>
        </div>
        <div class="lpg-state-indicators">
          <span class="indicator-safe">0-250 PPM: Safe</span>
          <span class="indicator-warn">250-450 PPM: Warning Alert</span>
          <span class="indicator-hazard">450+ PPM: Emergency Containment</span>
        </div>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#lpg-canvas');
  const ppmText = container.querySelector('#lpg-ppm-text');
  const statePill = container.querySelector('#lpg-state-pill');
  const fanStatus = container.querySelector('#lpg-fan-status');
  const valveStatus = container.querySelector('#lpg-valve-status');
  const ppmSlider = container.querySelector('#lpg-ppm-slider');
  const testLeakBtn = container.querySelector('#lpg-test-leak-btn');
  const statusDot = container.querySelector('#lpg-status-dot');

  let ppm = 85;
  let fanSpeed = 0;
  let targetFanSpeed = 0;
  let animId = null;

  // 3D Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x05060b);

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 1.2, 5.8);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

  // Lights
  const ambient = new THREE.AmbientLight(0x7c8ba1, 1.2);
  scene.add(ambient);

  const dirLight = new THREE.DirectionalLight(0xfff0dd, 2.5);
  dirLight.position.set(3, 6, 4);
  scene.add(dirLight);

  const alarmLight = new THREE.PointLight(0x10b981, 4, 8);
  alarmLight.position.set(0, 2.2, 1.5);
  scene.add(alarmLight);

  const cylinderGroup = new THREE.Group();
  scene.add(cylinderGroup);

  // Model: LPG Red/Orange Cylinder
  const cylMat = new THREE.MeshStandardMaterial({
    color: 0xc2410c, // Industrial rust orange/red
    metalness: 0.35,
    roughness: 0.4
  });

  // Main tank body
  const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 1.8, 32), cylMat);
  cylinderGroup.add(tank);

  // Top and bottom domes
  const domeMat = cylMat;
  const topDome = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), domeMat);
  topDome.position.y = 0.9;
  cylinderGroup.add(topDome);

  const botDome = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), domeMat);
  botDome.position.y = -0.9;
  cylinderGroup.add(botDome);

  // Base stand ring
  const standRing = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 0.25, 32, 1, true), new THREE.MeshStandardMaterial({ color: 0x1f2937 }));
  standRing.position.y = -1.1;
  cylinderGroup.add(standRing);

  // Top Collar Guard
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.38, 24, 1, true), cylMat);
  collar.position.y = 1.35;
  cylinderGroup.add(collar);

  // Valve Nozzle (Brass)
  const brassMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.8, roughness: 0.2 });
  const valve = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.35, 16), brassMat);
  valve.position.y = 1.25;
  cylinderGroup.add(valve);

  // MQ-2 Sensor Pod attached to side
  const sensorGroup = new THREE.Group();
  sensorGroup.position.set(0.9, -0.2, 0.4);
  cylinderGroup.add(sensorGroup);

  const sensorPcb = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.55, 0.1), new THREE.MeshStandardMaterial({ color: 0x064e3b }));
  sensorGroup.add(sensorPcb);

  const sensorCoil = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.16, 16), new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.7 }));
  sensorCoil.rotation.x = Math.PI / 2;
  sensorCoil.position.z = 0.08;
  sensorGroup.add(sensorCoil);

  // Exhaust Fan model in background
  const fanGroup = new THREE.Group();
  fanGroup.position.set(-1.8, 0.8, -1.2);
  scene.add(fanGroup);

  const fanHousing = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.2, 24), new THREE.MeshStandardMaterial({ color: 0x1e293b }));
  fanHousing.rotation.x = Math.PI / 2;
  fanGroup.add(fanHousing);

  const fanBlades = new THREE.Group();
  fanGroup.add(fanBlades);
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.48, 0.02), new THREE.MeshStandardMaterial({ color: 0x94a3b8 }));
    blade.rotation.z = (i * Math.PI) / 2;
    blade.position.y = 0.2;
    fanBlades.add(blade);
  }

  // Update logic
  function updatePPM(val) {
    ppm = val;
    ppmText.textContent = `${ppm} PPM`;
    ppmSlider.value = ppm;

    if (ppm < 250) {
      // Safe
      statePill.textContent = 'STATE: NORMAL (SAFE)';
      statePill.className = 'lpg-safety-state safe';
      fanStatus.textContent = 'OFF (STANDBY)';
      valveStatus.textContent = 'OPEN (SUPPLY ON)';
      valveStatus.className = 'safe';
      targetFanSpeed = 0;
      alarmLight.color.setHex(0x10b981);
      statusDot.className = 'hud-blink-dot green';
    } else if (ppm < 450) {
      // Warning
      statePill.textContent = 'STATE: WARNING THRESHOLD';
      statePill.className = 'lpg-safety-state warning';
      fanStatus.textContent = 'LOW SPEED (EVACUATION)';
      valveStatus.textContent = 'OPEN (MONITORING)';
      valveStatus.className = 'warning';
      targetFanSpeed = 0.1;
      alarmLight.color.setHex(0xf59e0b);
      statusDot.className = 'hud-blink-dot orange';
    } else {
      // Emergency Hazard
      statePill.textContent = 'STATE: EMERGENCY HAZARD!';
      statePill.className = 'lpg-safety-state hazard';
      fanStatus.textContent = 'MAX SPEED ACTIVE (EXHAUST)';
      valveStatus.textContent = 'EMERGENCY SHUTOFF (CLOSED)';
      valveStatus.className = 'danger';
      targetFanSpeed = 0.45;
      alarmLight.color.setHex(0xef4444);
      statusDot.className = 'hud-blink-dot red';
    }
  }

  ppmSlider.addEventListener('input', (e) => {
    updatePPM(parseInt(e.target.value, 10));
  });

  testLeakBtn.addEventListener('click', () => {
    updatePPM(580);
    setTimeout(() => { updatePPM(110); }, 5000);
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

  // Pointer drag for cylinder
  let isDown = false, px = 0;
  canvas.addEventListener('pointerdown', (e) => { isDown = true; px = e.clientX; });
  window.addEventListener('pointermove', (e) => {
    if (isDown) {
      cylinderGroup.rotation.y += (e.clientX - px) * 0.01;
      px = e.clientX;
    }
  });
  window.addEventListener('pointerup', () => { isDown = false; });

  const clock = new THREE.Clock();

  function animate() {
    animId = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    if (!isDown) {
      cylinderGroup.rotation.y += 0.005;
    }

    fanSpeed = THREE.MathUtils.lerp(fanSpeed, targetFanSpeed, 0.05);
    fanBlades.rotation.z += fanSpeed;

    if (ppm >= 450) {
      alarmLight.intensity = Math.sin(elapsed * 12) * 5 + 6;
    } else {
      alarmLight.intensity = 3;
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
