import * as THREE from 'three';
import { gsap } from 'gsap';

/**
 * 3D Interactive WebGL Heart Component (Three.js)
 * Replaces the 2D SVG heart with a fully 3D, volumetric,
 * glowing, beating faceted heart with orbiting particle rings.
 */
export function init3DHeart(canvas) {
  if (!canvas) return;

  const stage = canvas.parentElement;
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 5.8);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // Romantic Sci-Fi Lighting
  scene.add(new THREE.AmbientLight(0xec4899, 1.4));
  const dirLight = new THREE.DirectionalLight(0xfff0f5, 2.8);
  dirLight.position.set(2, 4, 4);
  scene.add(dirLight);

  const magentaRim = new THREE.PointLight(0xec4899, 16, 10);
  magentaRim.position.set(-3, 2, 2);
  scene.add(magentaRim);

  const cyanRim = new THREE.PointLight(0x38bdf8, 12, 10);
  cyanRim.position.set(3, -2, 1);
  scene.add(cyanRim);

  const heartGroup = new THREE.Group();
  scene.add(heartGroup);

  // 1. Construct 3D Volumetric Heart Geometry
  const x = 0, y = 0;
  const heartShape = new THREE.Shape();
  heartShape.moveTo(x + 0.25, y + 0.25);
  heartShape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.2, y, x, y);
  heartShape.bezierCurveTo(x - 0.3, y, x - 0.3, y + 0.35, x - 0.3, y + 0.35);
  heartShape.bezierCurveTo(x - 0.3, y + 0.55, x - 0.1, y + 0.77, x + 0.25, y + 0.95);
  heartShape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35);
  heartShape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y);
  heartShape.bezierCurveTo(x + 0.35, y, x + 0.25, y + 0.25, x + 0.25, y + 0.25);

  const extrudeSettings = {
    depth: 0.36,
    bevelEnabled: true,
    bevelSegments: 8,
    steps: 2,
    bevelSize: 0.14,
    bevelThickness: 0.14
  };

  const heartGeo = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  heartGeo.center();

  const heartMat = new THREE.MeshPhysicalMaterial({
    color: 0xec4899,
    emissive: 0x8b5cf6,
    emissiveIntensity: 0.45,
    metalness: 0.25,
    roughness: 0.002,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1
  });

  const heartMesh = new THREE.Mesh(heartGeo, heartMat);
  // Invert shape so pointed tip points down
  heartMesh.rotation.z = Math.PI;
  heartMesh.scale.set(1.5, 1.5, 1.5);
  heartGroup.add(heartMesh);

  // 2. Orbiting Glowing Particle Rings
  const ring1 = new THREE.Mesh(
    new THREE.TorusGeometry(1.65, 0.015, 8, 64),
    new THREE.MeshBasicMaterial({ color: 0xec4899, transparent: true, opacity: 0.6 })
  );
  ring1.rotation.x = Math.PI / 2.8;
  heartGroup.add(ring1);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(1.85, 0.015, 8, 64),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5 })
  );
  ring2.rotation.x = -Math.PI / 3.2;
  ring2.rotation.y = Math.PI / 4;
  heartGroup.add(ring2);

  // Floating Sparkle Particles around heart
  const sparkleGeo = new THREE.BufferGeometry();
  const sparklePos = [];
  for (let i = 0; i < 90; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * 1.5 + 0.8;
    sparklePos.push(
      Math.cos(angle) * r,
      (Math.random() - 0.5) * 2.2,
      Math.sin(angle) * r
    );
  }
  sparkleGeo.setAttribute('position', new THREE.Float32BufferAttribute(sparklePos, 3));
  const sparkleMat = new THREE.PointsMaterial({
    color: 0xf472b6,
    size: 0.035,
    transparent: true,
    opacity: 0.8
  });
  heartGroup.add(new THREE.Points(sparkleGeo, sparkleMat));

  // Pointer Interaction
  let mouseX = 0, mouseY = 0;
  let isHovered = false;

  canvas.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  });

  canvas.addEventListener('pointerenter', () => { isHovered = true; });
  canvas.addEventListener('pointerleave', () => {
    isHovered = false;
    mouseX = 0;
    mouseY = 0;
  });

  canvas.addEventListener('click', () => {
    // Quick burst pulse on click
    gsap.to(heartMesh.scale, {
      x: 1.85, y: 1.85, z: 1.85,
      duration: 0.12,
      yoyo: true,
      repeat: 3,
      ease: 'power2.out',
      onComplete: () => {
        heartMesh.scale.set(1.5, 1.5, 1.5);
      }
    });
  });

  function resize() {
    const w = stage.clientWidth;
    const h = Math.max(300, stage.clientHeight || 340);
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

    // Rhythmic double-beat heartbeat ("lub-dub")
    const beatRate = isHovered ? 6.0 : 3.2;
    const pulse1 = Math.pow(Math.max(0, Math.sin(t * beatRate)), 8) * 0.14;
    const pulse2 = Math.pow(Math.max(0, Math.sin(t * beatRate + 0.45)), 8) * 0.08;
    const scaleFactor = 1.0 + pulse1 + pulse2;

    heartMesh.scale.set(1.5 * scaleFactor, 1.5 * scaleFactor, 1.5 * scaleFactor);

    // Dynamic rotation & mouse tracking
    const targetRotY = mouseX * 0.6 + t * 0.35;
    const targetRotX = -mouseY * 0.4;
    heartGroup.rotation.y = THREE.MathUtils.lerp(heartGroup.rotation.y, targetRotY, 0.06);
    heartGroup.rotation.x = THREE.MathUtils.lerp(heartGroup.rotation.x, targetRotX, 0.06);

    ring1.rotation.z = t * 0.4;
    ring2.rotation.z = -t * 0.3;

    renderer.render(scene, camera);
  }

  animId = requestAnimationFrame(animate);

  return {
    dispose: () => {
      if (animId) cancelAnimationFrame(animId);
      renderer.dispose();
    }
  };
}
