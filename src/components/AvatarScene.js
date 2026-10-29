import * as THREE from 'three';
import { gsap } from 'gsap';
import { speakHello } from '../utils/speech.js';
import { openCameraModal } from '../utils/camera.js';
import { generateMinecraftTextures } from '../utils/minecraftSkin.js';

/**
 * Interactive 3D Minecraft Avatar
 * Directly implements the Minecraft character from Thumbnail 1:
 * - Expressive textured face (Normal, Smile, Serious, Happy)
 * - Black hoodie with neon green 'M' emblem on chest and back
 * - Neon green drawstrings and arm racing stripes
 * - Cargo pants and white/green sneakers
 * - Smooth cursor tracking for head and gaze
 * - Interactive raycast hotspots: Head, Eyes, Mouth, Hand, Chest
 */
export function initAvatarScene(canvas, tooltipEl) {
  if (!canvas) return;

  const stage = canvas.parentElement;
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 1.25, 8.4);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;

  // Cinematic Dark Lighting
  const hemiLight = new THREE.HemisphereLight(0xa5b4fc, 0x050712, 2.0);
  scene.add(hemiLight);

  const keyLight = new THREE.DirectionalLight(0x818cf8, 3.2);
  keyLight.position.set(3.5, 6, 5);
  keyLight.castShadow = true;
  scene.add(keyLight);

  const greenRim = new THREE.PointLight(0x00ff73, 20, 12);
  greenRim.position.set(-3.5, 2.0, 2.5);
  scene.add(greenRim);

  const blueRim = new THREE.PointLight(0x38bdf8, 14, 10);
  blueRim.position.set(3.5, -1.0, 1.5);
  scene.add(blueRim);

  const avatarRoot = new THREE.Group();
  scene.add(avatarRoot);

  // Generate Minecraft Skin Textures
  const skinTextures = generateMinecraftTextures();

  // Helper box creator with textured or solid materials
  function createBox(parent, x, y, z, sx, sy, sz, materials) {
    const geo = new THREE.BoxGeometry(sx, sy, sz);
    const mesh = new THREE.Mesh(geo, materials);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  // --- 1. HEAD & FACE ---
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.52, 0);
  avatarRoot.add(headGroup);

  // Material array for head cube: [right, left, top, bottom, front, back]
  const hairMat = new THREE.MeshStandardMaterial({
    map: skinTextures.hair,
    roughness: 0.8
  });
  const faceMat = new THREE.MeshStandardMaterial({
    map: skinTextures.faces.normal,
    roughness: 0.5
  });
  const neckMat = new THREE.MeshStandardMaterial({ color: 0xcfa07e, roughness: 0.6 });

  const headMaterials = [
    hairMat, // +X (right)
    hairMat, // -X (left)
    hairMat, // +Y (top)
    neckMat, // -Y (bottom)
    faceMat, // +Z (front face)
    hairMat  // -Z (back)
  ];

  const headMesh = createBox(headGroup, 0, 0.28, 0, 1.08, 1.08, 1.0, headMaterials);
  headMesh.userData = { hotspot: 'head', label: 'Head: Education & Qualifications' };

  // Expressions switcher
  let currentExpression = 'normal';
  function setExpression(expr) {
    if (skinTextures.faces[expr]) {
      currentExpression = expr;
      faceMat.map = skinTextures.faces[expr];
      faceMat.needsUpdate = true;
    }
  }

  // Wavy 3D hair blocks on top & sides for volumetric hair
  const hairBlockMat = new THREE.MeshStandardMaterial({ color: 0x17141b, roughness: 0.9 });
  const hairOffsets = [
    [-0.52, 0.74, 0.22, 0.28, 0.28, 0.28],
    [-0.28, 0.78, 0.36, 0.3, 0.26, 0.26],
    [-0.02, 0.76, 0.38, 0.32, 0.28, 0.26],
    [0.26, 0.75, 0.34, 0.3, 0.26, 0.26],
    [0.5, 0.70, 0.24, 0.28, 0.28, 0.28],
    [-0.46, 0.54, 0.35, 0.24, 0.24, 0.26],
    [-0.14, 0.60, 0.44, 0.26, 0.22, 0.22],
    [0.18, 0.59, 0.44, 0.26, 0.22, 0.22],
    [0.44, 0.53, 0.36, 0.24, 0.24, 0.26]
  ];
  hairOffsets.forEach(([x, y, z, sx, sy, sz]) => {
    createBox(headGroup, x, y, z, sx, sy, sz, hairBlockMat);
  });

  // Hotspot targets on face
  const eyeHotspot = createBox(headGroup, 0, 0.34, 0.52, 0.75, 0.24, 0.05, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }));
  eyeHotspot.userData = { hotspot: 'eyes', label: 'Eyes: Launch Camera Interface' };

  const mouthHotspot = createBox(headGroup, 0, 0.12, 0.52, 0.45, 0.18, 0.05, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 }));
  mouthHotspot.userData = { hotspot: 'mouth', label: 'Mouth: Speak "Hi, I am Mritunjay"' };

  // --- 2. TORSO (Black Hoodie with Green 'M' & Drawstrings) ---
  const chestGroup = new THREE.Group();
  chestGroup.position.set(0, -0.45, 0);
  avatarRoot.add(chestGroup);

  const hoodieMatDark = new THREE.MeshStandardMaterial({ color: 0x101217, roughness: 0.7 });
  const torsoFrontMat = new THREE.MeshStandardMaterial({ map: skinTextures.torsoFront, roughness: 0.6 });
  const torsoBackMat = new THREE.MeshStandardMaterial({ map: skinTextures.torsoBack, roughness: 0.6 });

  const torsoMaterials = [
    hoodieMatDark, // right
    hoodieMatDark, // left
    hoodieMatDark, // top
    hoodieMatDark, // bottom
    torsoFrontMat, // front (Hoodie + green 'M' logo + drawstrings)
    torsoBackMat   // back (large green 'M' logo)
  ];

  const torsoMesh = createBox(chestGroup, 0, 0, 0, 1.12, 1.18, 0.62, torsoMaterials);
  torsoMesh.userData = { hotspot: 'chest', label: 'Chest: View Contact & Socials' };

  // --- 3. ARMS (Black sleeves with vertical neon green racing stripes) ---
  // Left Arm
  const armL = new THREE.Group();
  armL.position.set(-0.82, -0.48, 0);
  armL.rotation.z = -0.12;
  avatarRoot.add(armL);

  const armMatOuter = new THREE.MeshStandardMaterial({ map: skinTextures.armOuter, roughness: 0.6 });
  const armMatInner = new THREE.MeshStandardMaterial({ map: skinTextures.armInner, roughness: 0.6 });

  const armLMaterials = [
    armMatInner, // right (+X, inner towards body)
    armMatOuter, // left (-X, outer with green stripe)
    hoodieMatDark, // top
    neckMat, // bottom (hand skin)
    armMatInner, // front
    armMatInner  // back
  ];
  createBox(armL, 0, 0, 0, 0.36, 1.08, 0.44, armLMaterials);

  // Right Arm (Interactive: Waves hello on click!)
  const armRGroup = new THREE.Group();
  armRGroup.position.set(0.82, 0.05, 0);
  avatarRoot.add(armRGroup);

  const armRMaterials = [
    armMatOuter, // right (+X, outer with green stripe)
    armMatInner, // left (-X, inner towards body)
    hoodieMatDark, // top
    neckMat, // bottom (hand skin)
    armMatInner, // front
    armMatInner  // back
  ];

  const armRSleeve = createBox(armRGroup, 0, -0.53, 0, 0.36, 1.08, 0.44, armRMaterials);
  armRSleeve.rotation.z = 0.12;
  armRSleeve.userData = { hotspot: 'hand', label: 'Right Hand: Wave Hello!' };

  // --- 4. LEGS & SNEAKERS ---
  const legFrontMat = new THREE.MeshStandardMaterial({ map: skinTextures.legFront, roughness: 0.8 });
  const legOuterMat = new THREE.MeshStandardMaterial({ map: skinTextures.legOuter, roughness: 0.8 });
  const pantsDark = new THREE.MeshStandardMaterial({ color: 0x111319, roughness: 0.8 });

  // Left Leg
  const legLMaterials = [
    pantsDark, legOuterMat, pantsDark, pantsDark, legFrontMat, pantsDark
  ];
  createBox(avatarRoot, -0.31, -1.42, 0, 0.44, 1.02, 0.46, legLMaterials);

  // Right Leg
  const legRMaterials = [
    legOuterMat, pantsDark, pantsDark, pantsDark, legFrontMat, pantsDark
  ];
  createBox(avatarRoot, 0.31, -1.42, 0, 0.44, 1.02, 0.46, legRMaterials);

  // Shoes: White sneakers with neon green sole
  const shoeMatFront = new THREE.MeshStandardMaterial({ map: skinTextures.shoeFront, roughness: 0.4 });
  const sneakerWhite = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
  const sneakerGreen = new THREE.MeshStandardMaterial({ color: 0x00ff73, roughness: 0.5 });

  const shoeMaterials = [
    sneakerWhite, sneakerWhite, sneakerWhite, sneakerGreen, shoeMatFront, sneakerWhite
  ];
  createBox(avatarRoot, -0.31, -1.94, 0.12, 0.48, 0.26, 0.62, shoeMaterials);
  createBox(avatarRoot, 0.31, -1.94, 0.12, 0.48, 0.26, 0.62, shoeMaterials);

  // --- 5. FLOATING PEDESTAL ISLAND WITH COBBLESTONE & GREEN CRYSTALS ---
  const islandGroup = new THREE.Group();
  scene.add(islandGroup);

  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4;
    const block = createBox(
      islandGroup,
      Math.cos(angle) * 1.25,
      -2.45 + Math.sin(i * 2) * 0.06,
      Math.sin(angle) * 0.72,
      0.82, 0.32, 0.72,
      new THREE.MeshStandardMaterial({ color: i % 2 === 0 ? 0x1e293b : 0x0f172a, roughness: 0.9 })
    );
    block.rotation.y = angle;
  }
  createBox(islandGroup, 0, -2.62, 0, 1.85, 0.32, 1.45, new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.9 }));

  // Glowing neon green Minecraft redstone/emerald crystals on island
  for (let i = 0; i < 7; i++) {
    const crystal = createBox(
      islandGroup,
      Math.sin(i * 2.4) * 1.35,
      -2.22 + (i % 2) * 0.18,
      Math.cos(i * 1.7) * 0.72,
      0.14, 0.24, 0.14,
      new THREE.MeshStandardMaterial({
        color: 0x00ff73,
        emissive: 0x00ff73,
        emissiveIntensity: 2.2
      })
    );
    crystal.rotation.y = i;
  }

  // Floating background ambient particles
  const starGeo = new THREE.BufferGeometry();
  const starPos = [];
  for (let i = 0; i < 240; i++) {
    starPos.push((Math.random() - 0.5) * 9, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 5 - 1);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x00ff73, size: 0.02, transparent: true, opacity: 0.6 })));

  // --- 6. RAYCASTING & HOTSPOT INTERACTIONS ---
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2(100, 100);
  const interactiveHotspots = [headMesh, eyeHotspot, mouthHotspot, torsoMesh, armRSleeve];

  function waveHand() {
    setExpression('happy');
    gsap.killTweensOf(armRGroup.rotation);
    gsap.to(armRGroup.rotation, {
      z: 4.15,
      x: 0.2,
      duration: 0.58,
      yoyo: true,
      repeat: 5,
      ease: 'sine.inOut',
      onComplete: () => {
        gsap.to(armRGroup.rotation, { z: 0, x: 0, duration: 0.4 });
        setTimeout(() => setExpression('normal'), 1200);
      }
    });
  }

  function handleAction(action) {
    if (action === 'head') {
      const eduCard = document.getElementById('education-card') || document.getElementById('about');
      if (eduCard) eduCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      showToast('Education Profile: Class 10 student developing coding & electronics builds.');
    } else if (action === 'eyes') {
      setExpression('serious');
      openCameraModal();
      setTimeout(() => setExpression('normal'), 4000);
    } else if (action === 'mouth') {
      setExpression('smile');
      speakHello(() => {
        setTimeout(() => setExpression('normal'), 2500);
      });
    } else if (action === 'hand') {
      waveHand();
      showToast('Mritunjay waves hello! 👋');
    } else if (action === 'chest') {
      const contactSec = document.getElementById('contact');
      if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
      showToast('Contact Section: Connect via GitHub, LinkedIn, or Email.');
    }
  }

  canvas.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  });

  canvas.addEventListener('pointerdown', () => {
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(interactiveHotspots, true);

    if (hits.length > 0) {
      let targetObj = hits[0].object;
      while (targetObj && !targetObj.userData?.hotspot && targetObj.parent) {
        targetObj = targetObj.parent;
      }
      if (targetObj && targetObj.userData?.hotspot) {
        handleAction(targetObj.userData.hotspot);
      }
    }
  });

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

    // Natural Head & Gaze cursor tracking with smooth lerp
    headGroup.rotation.y = THREE.MathUtils.lerp(headGroup.rotation.y, pointer.x * 0.48, 0.06);
    headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, -pointer.y * 0.22, 0.06);

    // Subtle breathing & idle float
    avatarRoot.position.y = Math.sin(t * 1.5) * 0.06;
    avatarRoot.rotation.y = THREE.MathUtils.lerp(avatarRoot.rotation.y, pointer.x * 0.08, 0.03);

    islandGroup.rotation.y = Math.sin(t * 0.4) * 0.05;

    // Hover tooltip
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(interactiveHotspots, true);

    if (hits.length > 0) {
      canvas.style.cursor = 'pointer';
      let obj = hits[0].object;
      while (obj && !obj.userData?.label && obj.parent) {
        obj = obj.parent;
      }
      if (tooltipEl && obj?.userData?.label) {
        tooltipEl.textContent = obj.userData.label;
        tooltipEl.classList.add('visible');
      }
    } else {
      canvas.style.cursor = 'default';
      if (tooltipEl) tooltipEl.classList.remove('visible');
    }

    renderer.render(scene, camera);
  }

  animId = requestAnimationFrame(animate);

  return {
    waveHand,
    handleAction,
    setExpression,
    dispose: () => {
      if (animId) cancelAnimationFrame(animId);
      renderer.dispose();
    }
  };
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}
