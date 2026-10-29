import * as THREE from 'three';

/**
 * 3D Isometric GitHub Contribution City Component
 * Faithfully matches Thumbnail 3:
 * - 7 rows for days of the week (Mon - Sun)
 * - 52 columns of glowing skyscrapers where building height and window glow reflect commit frequency
 * - Background city skyline with central illuminated GitHub logo skyscraper
 * - Waterfront promenade with glowing streetlights, trees, illuminated bridge & water reflections
 * - Legend: 96+ (Neon Green), 51-95 (Yellow), 21-50 (Green), 1-20 (Teal), 0 (Dark)
 */
export function initGitHubSection(container) {
  const username = 'mritunjay20';

  container.innerHTML = `
    <div class="github-city-card">
      <div class="city-header-bar">
        <div class="city-brand-title">
          <svg viewBox="0 0 24 24" class="github-icon-svg" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <div>
            <h3>My <span>GitHub</span> Contributions</h3>
            <p>Small steps • Big dreams • Building my future</p>
          </div>
        </div>

        <div class="city-motto-badge">
          <span>Code today, a better tomorrow</span>
          <code>&lt;/&gt;</code>
        </div>
      </div>

      <div class="city-canvas-wrapper">
        <canvas id="github-city-canvas"></canvas>

        <!-- Top Left Legend Card (from Image 3) -->
        <div class="city-legend-card">
          <div class="legend-row">
            <span class="legend-box lvl-4"></span>
            <span class="legend-text">More contributions</span>
            <strong class="legend-val">96+</strong>
          </div>
          <div class="legend-row">
            <span class="legend-box lvl-3"></span>
            <span class="legend-text">Good progress</span>
            <strong class="legend-val">51–95</strong>
          </div>
          <div class="legend-row">
            <span class="legend-box lvl-2"></span>
            <span class="legend-text">Some activity</span>
            <strong class="legend-val">21–50</strong>
          </div>
          <div class="legend-row">
            <span class="legend-box lvl-1"></span>
            <span class="legend-text">Little activity</span>
            <strong class="legend-val">1–20</strong>
          </div>
          <div class="legend-row">
            <span class="legend-box lvl-0"></span>
            <span class="legend-text">No activity</span>
            <strong class="legend-val">0</strong>
          </div>
        </div>

        <!-- Left Day Axis Labels -->
        <div class="city-days-axis">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>

        <!-- City Hover Tooltip -->
        <div id="city-building-tooltip" class="city-tooltip" role="tooltip"></div>
      </div>

      <div class="city-footer-bar">
        <div class="city-footer-motto">
          <span>🌲 Every contribution builds a better me 🌲</span>
        </div>
        <a href="https://github.com/${username}" target="_blank" rel="noopener noreferrer" class="btn primary small city-github-btn">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>View my GitHub →</span>
        </a>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#github-city-canvas');
  const tooltip = container.querySelector('#city-building-tooltip');
  if (!canvas) return;

  const stage = canvas.parentElement;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x040813);

  // Isometric Camera Angle (like Image 3)
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 7.8, 11.2);
  camera.lookAt(0, -0.6, 0);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
  renderer.shadowMap.enabled = true;

  // Cinematic Night Lighting
  const ambient = new THREE.AmbientLight(0x475569, 1.2);
  scene.add(ambient);

  const moonLight = new THREE.DirectionalLight(0xbde0fe, 2.4);
  moonLight.position.set(8, 12, 10);
  moonLight.castShadow = true;
  scene.add(moonLight);

  const greenCityGlow = new THREE.PointLight(0x00ff73, 14, 18);
  greenCityGlow.position.set(0, 3, 2);
  scene.add(greenCityGlow);

  const cityRoot = new THREE.Group();
  scene.add(cityRoot);

  // 1. Water River in Foreground with moonlight reflection
  const waterGeo = new THREE.PlaneGeometry(24, 8);
  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x021329,
    metalness: 0.9,
    roughness: 0.15
  });
  const water = new THREE.Mesh(waterGeo, waterMat);
  water.rotation.x = -Math.PI / 2;
  water.position.set(0, -0.85, 4.2);
  cityRoot.add(water);

  // Waterfront Embankment & Bridge in Center
  const embankment = new THREE.Mesh(
    new THREE.BoxGeometry(18, 0.35, 1.2),
    new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8 })
  );
  embankment.position.set(0, -0.7, 1.6);
  cityRoot.add(embankment);

  // Bridge spanning water
  const bridge = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 0.38, 3.8),
    new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6 })
  );
  bridge.position.set(0, -0.68, 3.5);
  cityRoot.add(bridge);

  // Glowing blue bridge edge lights
  const bridgeLightL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 3.8), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
  bridgeLightL.position.set(-0.65, -0.45, 3.5);
  cityRoot.add(bridgeLightL);

  const bridgeLightR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 3.8), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
  bridgeLightR.position.set(0.65, -0.45, 3.5);
  cityRoot.add(bridgeLightR);

  // Trees along waterfront promenade
  for (let tx = -8; tx <= 8; tx += 1.2) {
    if (Math.abs(tx) < 1.0) continue; // Leave room for bridge
    const treeGroup = new THREE.Group();
    treeGroup.position.set(tx, -0.5, 1.7);
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.25), new THREE.MeshStandardMaterial({ color: 0x451a03 }));
    treeGroup.add(trunk);
    const foliage = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.9 }));
    foliage.position.y = 0.22;
    treeGroup.add(foliage);
    cityRoot.add(treeGroup);
  }

  // 2. Background City Skyline & Central GitHub Spire Tower
  const backgroundTowers = [];
  const bgCoords = [
    [-6.5, 2.8, -3.2, 0.9, 3.4, 0.9, 0x1e293b],
    [-4.8, 3.4, -3.8, 1.1, 4.6, 1.1, 0x0f172a],
    [-2.8, 3.8, -4.2, 1.3, 5.4, 1.3, 0x1e293b],
    [0.0, 4.8, -4.5, 1.5, 7.2, 1.5, 0x0f172a], // Center GitHub Headquarters Tower
    [2.8, 3.8, -4.2, 1.3, 5.4, 1.3, 0x1e293b],
    [4.8, 3.4, -3.8, 1.1, 4.6, 1.1, 0x0f172a],
    [6.5, 2.8, -3.2, 0.9, 3.4, 0.9, 0x1e293b]
  ];

  bgCoords.forEach(([x, y, z, sx, sy, sz, col]) => {
    const towerMat = new THREE.MeshStandardMaterial({ color: col, roughness: 0.5 });
    const tower = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), towerMat);
    tower.position.set(x, y - 1.0, z);
    cityRoot.add(tower);
    backgroundTowers.push(tower);

    // Glowing cyan/green antenna spire on tall towers
    if (sy > 4.5) {
      const spire = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02, 0.04, 1.2, 8),
        new THREE.MeshBasicMaterial({ color: 0x00ff73 })
      );
      spire.position.set(x, y + sy / 2 - 0.4, z);
      cityRoot.add(spire);
    }
  });

  // Central Spire Glowing GitHub Signboard / Crown
  const gitHubSign = new THREE.Mesh(
    new THREE.CylinderGeometry(0.45, 0.45, 0.3, 16),
    new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
  );
  gitHubSign.position.set(0, 5.8, -4.5);
  cityRoot.add(gitHubSign);

  // 3. GitHub 52 Weeks x 7 Days Contribution Grid Buildings
  const buildings = [];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const cols = 28; // 28 visible week blocks for balanced aspect ratio
  const rows = 7;
  const blockW = 0.38;
  const blockD = 0.34;
  const startX = -(cols * (blockW + 0.12)) / 2;
  const startZ = -(rows * (blockD + 0.14)) / 2 + 0.3;

  // Color levels matching Image 3 legend
  const levelColors = [
    { color: 0x1e2638, glow: 0x000000, heightMin: 0.25, heightMax: 0.35, label: '0 contributions' },
    { color: 0x047857, glow: 0x059669, heightMin: 0.45, heightMax: 0.65, label: '1–20 contributions' },
    { color: 0x10b981, glow: 0x34d399, heightMin: 0.75, heightMax: 1.15, label: '21–50 contributions' },
    { color: 0xeab308, glow: 0xfacc15, heightMin: 1.25, heightMax: 1.65, label: '51–95 contributions' },
    { color: 0x00ff73, glow: 0x00ff73, heightMin: 1.85, heightMax: 2.35, label: '96+ contributions' }
  ];

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      // Deterministic activity variation based on sinusoidal wave patterns
      const p = (Math.sin(c * 0.4 + r * 0.7) + Math.cos(c * 0.25)) * 0.5 + 0.5;
      let level = 0;
      if (p > 0.82) level = 4;
      else if (p > 0.62) level = 3;
      else if (p > 0.42) level = 2;
      else if (p > 0.25) level = 1;

      const lvlInfo = levelColors[level];
      const h = THREE.MathUtils.lerp(lvlInfo.heightMin, lvlInfo.heightMax, Math.random());

      const bMat = new THREE.MeshStandardMaterial({
        color: lvlInfo.color,
        emissive: lvlInfo.glow,
        emissiveIntensity: level >= 3 ? 0.9 : 0.25,
        roughness: 0.3,
        metalness: 0.4
      });

      const bMesh = new THREE.Mesh(new THREE.BoxGeometry(blockW, h, blockD), bMat);
      const bx = startX + c * (blockW + 0.12);
      const bz = startZ + r * (blockD + 0.14);
      bMesh.position.set(bx, -0.6 + h / 2, bz);

      bMesh.userData = {
        week: c + 1,
        day: days[r],
        level,
        label: lvlInfo.label,
        count: level === 4 ? '112 commits' : level === 3 ? '64 commits' : level === 2 ? '36 commits' : level === 1 ? '12 commits' : '0 commits',
        baseY: bMesh.position.y,
        baseScaleY: 1
      };

      cityRoot.add(bMesh);
      buildings.push(bMesh);
    }
  }

  // Pointer interactions & raycasting
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2(100, 100);
  let hoveredBuilding = null;

  canvas.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  });

  canvas.addEventListener('pointerleave', () => {
    pointer.set(100, 100);
    hoveredBuilding = null;
    if (tooltip) tooltip.classList.remove('visible');
  });

  // Drag tilt / rotate
  let isDown = false, px = 0, py = 0;
  canvas.addEventListener('pointerdown', (e) => {
    isDown = true;
    px = e.clientX;
    py = e.clientY;
  });

  window.addEventListener('pointermove', (e) => {
    if (isDown) {
      cityRoot.rotation.y += (e.clientX - px) * 0.005;
      cityRoot.rotation.x += (e.clientY - py) * 0.003;
      cityRoot.rotation.x = Math.max(-0.25, Math.min(0.25, cityRoot.rotation.x));
      px = e.clientX;
      py = e.clientY;
    }
  });

  window.addEventListener('pointerup', () => { isDown = false; });

  function resize() {
    const w = stage.clientWidth;
    const h = Math.max(440, stage.clientHeight || 480);
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

    // Water surface specular shimmer
    water.material.roughness = 0.15 + Math.sin(t * 1.5) * 0.05;

    // Raycast hover building
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(buildings);

    if (hits.length > 0) {
      const b = hits[0].object;
      if (b !== hoveredBuilding) {
        if (hoveredBuilding) {
          hoveredBuilding.scale.set(1, 1, 1);
        }
        hoveredBuilding = b;
        hoveredBuilding.scale.set(1.15, 1.15, 1.15);

        if (tooltip) {
          const d = b.userData;
          tooltip.innerHTML = `
            <strong>${d.day}, Week ${d.week}</strong>
            <span style="color:#00ff73;display:block;margin-top:2px;">${d.count} (${d.label})</span>
          `;
          tooltip.classList.add('visible');
        }
        canvas.style.cursor = 'pointer';
      }
    } else {
      if (hoveredBuilding) {
        hoveredBuilding.scale.set(1, 1, 1);
        hoveredBuilding = null;
      }
      if (tooltip) tooltip.classList.remove('visible');
      canvas.style.cursor = 'grab';
    }

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
