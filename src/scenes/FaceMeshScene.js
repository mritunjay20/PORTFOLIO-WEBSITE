import * as THREE from 'three';

/**
 * 3D Face & Landmark Tracker Scene
 * Rotating 3D human head geometry, wireframe triangulation,
 * glowing facial landmark point cloud, and real-time telemetry HUD.
 */
export function initFaceMeshScene(container) {
  container.innerHTML = `
    <div class="face-container">
      <div class="face-hud-header">
        <div class="face-badge">
          <span class="hud-blink-dot purple"></span>
          <span>3D FACIAL GEOMETRY • 468 LANDMARK MESH</span>
        </div>
        <div class="face-mode-controls">
          <button class="hud-pill-btn active" id="face-wireframe-toggle">Mode: Triangulation</button>
          <button class="hud-pill-btn" id="face-pointcloud-toggle">Landmark Nodes: ON</button>
        </div>
      </div>

      <div class="face-viewport-wrapper">
        <canvas id="face-canvas"></canvas>
        <div class="face-telemetry-hud">
          <div class="face-hud-row">
            <span>POSE ESTIMATION:</span>
            <strong id="face-pitch-val">PITCH: 0.0° • YAW: 0.0°</strong>
          </div>
          <div class="face-hud-row">
            <span>KEYPOINT DENSITY:</span>
            <span>468 Topological Vertices</span>
          </div>
          <div class="face-hud-row">
            <span>DEPTH RECONSTRUCTION:</span>
            <span class="safe">Monocular Depth (Active)</span>
          </div>
          <div class="face-hud-row">
            <span>LATENCY:</span>
            <span>8.4 ms (WebGL Accelerated)</span>
          </div>
        </div>
      </div>

      <div class="face-controls-dock">
        <span class="dock-hint">Interact: Move cursor or drag across viewport to dynamically steer facial pose tracking.</span>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#face-canvas');
  const pitchVal = container.querySelector('#face-pitch-val');
  const wireframeToggle = container.querySelector('#face-wireframe-toggle');
  const pointcloudToggle = container.querySelector('#face-pointcloud-toggle');

  let animId = null;

  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x05060d);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 5.2);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

  // Lights
  scene.add(new THREE.AmbientLight(0x818cf8, 1.2));
  const frontLight = new THREE.DirectionalLight(0xc084fc, 2.5);
  frontLight.position.set(0, 3, 5);
  scene.add(frontLight);

  const cyanRim = new THREE.PointLight(0x38bdf8, 3, 10);
  cyanRim.position.set(-3, -2, 2);
  scene.add(cyanRim);

  const headGroup = new THREE.Group();
  scene.add(headGroup);

  // 1. Procedural 3D Head Mesh (Icosahedron deformed into anatomical head proportions)
  const baseGeo = new THREE.IcosahedronGeometry(1.6, 4);
  const pos = baseGeo.attributes.position;

  // Sculpt vertices to match face/jaw/cranial taper
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    let z = pos.getZ(i);

    // Taper chin
    if (y < -0.4) {
      x *= (1 + y * 0.35);
      z *= (1 + y * 0.2);
    }
    // Deepen eye sockets and nasal bridge
    if (z > 0.8 && y > 0 && y < 0.6) {
      if (Math.abs(x) < 0.22) {
        z += 0.35; // Nose bridge protrusion
      } else if (Math.abs(x) < 0.7) {
        z -= 0.15; // Eye orbit depression
      }
    }

    pos.setXYZ(i, x, y, z);
  }
  baseGeo.computeVertexNormals();

  // Solid dark inner core
  const innerMat = new THREE.MeshStandardMaterial({
    color: 0x090a14,
    roughness: 0.8,
    metalness: 0.2
  });
  const innerMesh = new THREE.Mesh(baseGeo, innerMat);
  headGroup.add(innerMesh);

  // Wireframe glowing exoskeleton
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xa855f7,
    wireframe: true,
    transparent: true,
    opacity: 0.65
  });
  const wireMesh = new THREE.Mesh(baseGeo, wireMat);
  headGroup.add(wireMesh);

  // Landmark Point Cloud
  const pointMat = new THREE.PointsMaterial({
    color: 0x38bdf8,
    size: 0.055,
    transparent: true,
    opacity: 0.85
  });
  const pointCloud = new THREE.Points(baseGeo, pointMat);
  headGroup.add(pointCloud);

  // Toggles
  let isWireframeOnly = false;
  wireframeToggle.addEventListener('click', () => {
    isWireframeOnly = !isWireframeOnly;
    innerMesh.visible = !isWireframeOnly;
    wireframeToggle.classList.toggle('active', !isWireframeOnly);
  });

  let showPoints = true;
  pointcloudToggle.addEventListener('click', () => {
    showPoints = !showPoints;
    pointCloud.visible = showPoints;
    pointcloudToggle.classList.toggle('active', showPoints);
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

  // Cursor tracking for face pose
  let mouseX = 0, mouseY = 0;
  canvas.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  });

  const clock = new THREE.Clock();

  function animate() {
    animId = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    const targetRotY = mouseX * 0.75 + Math.sin(elapsed * 0.5) * 0.1;
    const targetRotX = -mouseY * 0.5;

    headGroup.rotation.y = THREE.MathUtils.lerp(headGroup.rotation.y, targetRotY, 0.06);
    headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, targetRotX, 0.06);

    const degPitch = (headGroup.rotation.x * (180 / Math.PI)).toFixed(1);
    const degYaw = (headGroup.rotation.y * (180 / Math.PI)).toFixed(1);
    pitchVal.textContent = `PITCH: ${degPitch}° • YAW: ${degYaw}°`;

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
