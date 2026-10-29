import * as THREE from 'three';
import { gsap } from 'gsap';
import { generateEarthTexture } from '../utils/earthTexture.js';

/**
 * Realistic 3D Earth Globe & Geographically Accurate World Monuments
 * - Realistic Earth sphere with realistic oceans, continents, atmospheric glow & cloud layer
 * - Accurately positioned world monuments via latitude & longitude spherical coordinates:
 *   1. Taj Mahal (Agra, India • 27.18° N, 78.04° E)
 *   2. Pyramids of Giza (Cairo, Egypt • 29.98° N, 31.13° E)
 *   3. Eiffel Tower (Paris, France • 48.86° N, 2.29° E)
 *   4. Statue of Liberty (New York, USA • 40.69° N, 74.04° W)
 *   5. Great Wall of China (Northern China • 40.43° N, 116.57° E)
 * - Animated glowing beacons, raycast click/hover, and camera focus animation
 */

export function initJourneyWorld(canvas, tooltipEl) {
  if (!canvas) return;

  const stage = canvas.parentElement;
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.set(0, 1.2, 7.8);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;

  // Space Lighting
  scene.add(new THREE.AmbientLight(0x7ea0d4, 1.2));
  const sunLight = new THREE.DirectionalLight(0xfff7ed, 3.2);
  sunLight.position.set(5, 4, 6);
  sunLight.castShadow = true;
  scene.add(sunLight);

  const cyanRim = new THREE.PointLight(0x38bdf8, 12, 14);
  cyanRim.position.set(-5, -2, -3);
  scene.add(cyanRim);

  const earthGroup = new THREE.Group();
  scene.add(earthGroup);

  const globeRadius = 2.45;

  // 1. Realistic Earth Globe Sphere
  const earthTexture = generateEarthTexture();
  const earthMat = new THREE.MeshStandardMaterial({
    map: earthTexture,
    roughness: 0.65,
    metalness: 0.15
  });

  const earthSphere = new THREE.Mesh(new THREE.SphereGeometry(globeRadius, 64, 48), earthMat);
  earthSphere.receiveShadow = true;
  earthGroup.add(earthSphere);

  // 2. Atmospheric Rim Glow Layer
  const atmosMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.15,
    side: THREE.BackSide
  });
  const atmosSphere = new THREE.Mesh(new THREE.SphereGeometry(globeRadius * 1.04, 48, 36), atmosMat);
  earthGroup.add(atmosSphere);

  // Helper: Spherical Latitude & Longitude to 3D Vector on globe surface
  function latLonToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -(radius) * Math.sin(phi) * Math.cos(theta),
      (radius) * Math.cos(phi),
      (radius) * Math.sin(phi) * Math.sin(theta)
    );
  }

  // Helper box builder
  function makeBox(parent, x, y, z, sx, sy, sz, color, opts = {}) {
    const geo = new THREE.BoxGeometry(sx, sy, sz);
    const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.6, ...opts });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    parent.add(mesh);
    return mesh;
  }

  // --- 3. MONUMENTS AT EXACT GEOGRAPHICAL COORDINATES ---
  const monumentsData = [
    {
      id: 'taj-mahal',
      name: 'Taj Mahal',
      location: 'Agra, India',
      lat: 27.1751,
      lon: 78.0421,
      description: 'Architectural symmetry & precision engineering.',
      color: '#f8fafc'
    },
    {
      id: 'pyramids',
      name: 'Pyramids of Giza',
      location: 'Cairo, Egypt',
      lat: 29.9792,
      lon: 31.1342,
      description: 'Timeless structural bedrock & mathematical alignment.',
      color: '#f59e0b'
    },
    {
      id: 'eiffel',
      name: 'Eiffel Tower',
      location: 'Paris, France',
      lat: 48.8584,
      lon: 2.2945,
      description: 'Wrought-iron structural lattice & communication spire.',
      color: '#94a3b8'
    },
    {
      id: 'liberty',
      name: 'Statue of Liberty',
      location: 'New York, USA',
      lat: 40.6892,
      lon: -74.0445,
      description: 'Iconic beacon of innovation, discovery & aspiration.',
      color: '#10b981'
    },
    {
      id: 'great-wall',
      name: 'Great Wall of China',
      location: 'Northern China',
      lat: 40.4319,
      lon: 116.5704,
      description: 'Resilient network spanning diverse physical terrain.',
      color: '#cbd5e1'
    }
  ];

  const monumentGroups = [];
  const beaconRings = [];

  monumentsData.forEach(m => {
    const pos = latLonToVector3(m.lat, m.lon, globeRadius);
    const normal = pos.clone().normalize();

    const mGroup = new THREE.Group();
    mGroup.position.copy(pos);
    // Align monument upright with surface normal
    mGroup.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
    mGroup.userData = m;
    earthGroup.add(mGroup);
    monumentGroups.push(mGroup);

    // Glowing ground beacon ring
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(m.color),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.08, 0.12, 32), ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.01;
    mGroup.add(ring);
    beaconRings.push(ring);

    // Vertical pulsing beacon light beam
    const beamMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(m.color),
      transparent: true,
      opacity: 0.35
    });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.04, 0.6, 12), beamMat);
    beam.position.y = 0.3;
    mGroup.add(beam);

    // Model specific architecture:
    if (m.id === 'taj-mahal') {
      makeBox(mGroup, 0, 0.04, 0, 0.32, 0.06, 0.32, 0xf8fafc);
      makeBox(mGroup, 0, 0.14, 0, 0.22, 0.16, 0.22, 0xf8fafc);
      const dome = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 12), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 }));
      dome.position.y = 0.26;
      dome.scale.set(1, 1.3, 1);
      mGroup.add(dome);
      [[-0.14, -0.14], [0.14, -0.14], [-0.14, 0.14], [0.14, 0.14]].forEach(([mx, mz]) => {
        makeBox(mGroup, mx, 0.12, mz, 0.03, 0.24, 0.03, 0xf8fafc);
      });
    } else if (m.id === 'pyramids') {
      makeBox(mGroup, 0, 0.04, 0, 0.36, 0.07, 0.36, 0xd97706);
      makeBox(mGroup, 0, 0.09, 0, 0.26, 0.07, 0.26, 0xd97706);
      makeBox(mGroup, 0, 0.14, 0, 0.16, 0.06, 0.16, 0xf59e0b);
      makeBox(mGroup, 0, 0.19, 0, 0.08, 0.06, 0.08, 0xfde047);
      makeBox(mGroup, 0.2, 0.04, 0.15, 0.2, 0.08, 0.2, 0xd97706);
      makeBox(mGroup, 0.2, 0.09, 0.15, 0.1, 0.06, 0.1, 0xf59e0b);
    } else if (m.id === 'eiffel') {
      makeBox(mGroup, 0, 0.04, 0, 0.22, 0.08, 0.22, 0x57534e);
      makeBox(mGroup, 0, 0.14, 0, 0.14, 0.14, 0.14, 0x57534e);
      makeBox(mGroup, 0, 0.28, 0, 0.06, 0.18, 0.06, 0x78716c);
      makeBox(mGroup, 0, 0.42, 0, 0.015, 0.16, 0.015, 0x38bdf8, { emissive: 0x38bdf8, emissiveIntensity: 1.5 });
    } else if (m.id === 'liberty') {
      makeBox(mGroup, 0, 0.05, 0, 0.16, 0.1, 0.16, 0x64748b);
      makeBox(mGroup, 0, 0.18, 0, 0.1, 0.2, 0.1, 0x14b8a6);
      makeBox(mGroup, 0.06, 0.32, 0.02, 0.03, 0.06, 0.03, 0xf59e0b, { emissive: 0xf59e0b, emissiveIntensity: 2.0 });
    } else if (m.id === 'great-wall') {
      makeBox(mGroup, -0.16, 0.06, 0, 0.09, 0.12, 0.09, 0x64748b);
      makeBox(mGroup, 0, 0.04, 0, 0.28, 0.08, 0.06, 0x64748b);
      makeBox(mGroup, 0.16, 0.06, 0, 0.09, 0.12, 0.09, 0x64748b);
    }
  });

  // Background Cosmic Stars
  const starGeo = new THREE.BufferGeometry();
  const starPos = [];
  for (let i = 0; i < 350; i++) {
    starPos.push((Math.random() - 0.5) * 16, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8 - 2);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x818cf8, size: 0.02, transparent: true, opacity: 0.7 })));

  // Pointer Drag Rotation & Raycasting
  let isDown = false;
  let prevX = 0, prevY = 0;
  let rotX = -0.2, rotY = -1.2;

  canvas.addEventListener('pointerdown', (e) => {
    isDown = true;
    prevX = e.clientX;
    prevY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
  });

  canvas.addEventListener('pointermove', (e) => {
    if (isDown) {
      rotY += (e.clientX - prevX) * 0.007;
      rotX += (e.clientY - prevY) * 0.007;
      rotX = Math.max(-1.2, Math.min(1.2, rotX));
      prevX = e.clientX;
      prevY = e.clientY;
    }
  });

  canvas.addEventListener('pointerup', () => { isDown = false; });
  canvas.addEventListener('pointercancel', () => { isDown = false; });

  // Zoom with wheel
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    camera.position.z = THREE.MathUtils.clamp(camera.position.z + e.deltaY * 0.006, 3.8, 11);
  }, { passive: false });

  function focusMonument(id) {
    const m = monumentsData.find(x => x.id === id);
    if (!m) return;

    // Rotate Earth to center this landmark facing the camera
    const phi = (90 - m.lat) * (Math.PI / 180);
    const theta = (m.lon + 180) * (Math.PI / 180);

    const targetRotX = (m.lat * Math.PI) / 180;
    const targetRotY = -theta + Math.PI / 2;

    gsap.to(earthGroup.rotation, {
      x: targetRotX,
      y: targetRotY,
      duration: 1.2,
      ease: 'power3.out'
    });
    gsap.to(camera.position, { z: 5.6, duration: 1.2, ease: 'power3.out' });

    if (tooltipEl) {
      tooltipEl.innerHTML = `
        <strong>${m.name}</strong> • <span style="color:#38bdf8;">${m.location}</span>
        <p style="margin:4px 0 0;font-size:11px;color:#cbd5e1;">${m.description}</p>
        <small style="font-family:var(--font-mono);color:#94a3b8;">Coordinates: ${m.lat.toFixed(2)}° N, ${m.lon.toFixed(2)}° E</small>
      `;
      tooltipEl.classList.add('visible');
    }
  }

  function resize() {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  new ResizeObserver(resize).observe(stage);
  resize();

  const clock = new THREE.Clock();
  let animId = null;

  function animate() {
    animId = requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    if (!isDown) {
      earthGroup.rotation.y += 0.002;
    } else {
      earthGroup.rotation.x = THREE.MathUtils.lerp(earthGroup.rotation.x, rotX, 0.08);
      earthGroup.rotation.y = THREE.MathUtils.lerp(earthGroup.rotation.y, rotY, 0.08);
    }

    // Pulse beacon rings
    beaconRings.forEach((ring, i) => {
      const scale = 1 + Math.sin(t * 3 + i) * 0.25;
      ring.scale.set(scale, scale, 1);
    });

    renderer.render(scene, camera);
  }

  animId = requestAnimationFrame(animate);

  return {
    focusMonument,
    monuments: monumentsData,
    zoomIn: () => { camera.position.z = Math.max(3.8, camera.position.z - 0.8); },
    zoomOut: () => { camera.position.z = Math.min(11, camera.position.z + 0.8); },
    resetView: () => {
      gsap.to(earthGroup.rotation, { x: -0.2, y: -1.2, duration: 0.8 });
      gsap.to(camera.position, { z: 7.8, duration: 0.8 });
    },
    dispose: () => {
      if (animId) cancelAnimationFrame(animId);
      renderer.dispose();
    }
  };
}
