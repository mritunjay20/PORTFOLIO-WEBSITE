import * as THREE from 'three';

/**
 * Procedural Realistic Earth Texture Generator
 * Creates realistic continental geography with oceans, landmasses,
 * mountain ranges, coastal shorelines, and night-side glowing cities.
 */
export function generateEarthTexture() {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Deep oceanic gradient base (midnight blue / navy)
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
  oceanGrad.addColorStop(0, '#020b18');
  oceanGrad.addColorStop(0.5, '#041328');
  oceanGrad.addColorStop(1, '#020b18');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle ocean bathymetry / trench currents
  ctx.fillStyle = '#06203d';
  for (let i = 0; i < 40; i++) {
    const ox = Math.random() * width;
    const oy = Math.random() * height;
    ctx.beginPath();
    ctx.arc(ox, oy, Math.random() * 80 + 30, 0, Math.PI * 2);
    ctx.fill();
  }

  // Draw Continents (Equirectangular projection)
  ctx.fillStyle = '#0d2818'; // Dark lush continent base
  ctx.strokeStyle = '#1b4d2e';
  ctx.lineWidth = 3;

  function toX(lon) { return ((lon + 180) / 360) * width; }
  function toY(lat) { return ((90 - lat) / 180) * height; }

  function drawContinent(points, fillColor = '#0f3820') {
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    points.forEach(([lon, lat], i) => {
      const x = toX(lon);
      const y = toY(lat);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  // 1. North America
  drawContinent([
    [-168, 66], [-140, 70], [-120, 72], [-80, 72], [-60, 60], [-55, 48],
    [-65, 44], [-75, 38], [-80, 26], [-82, 23], [-97, 20], [-105, 23],
    [-115, 30], [-124, 38], [-125, 50], [-135, 58], [-165, 60]
  ]);

  // 2. South America
  drawContinent([
    [-80, 10], [-74, 12], [-60, 8], [-50, -2], [-35, -6], [-38, -18],
    [-48, -28], [-56, -36], [-68, -54], [-75, -50], [-72, -35], [-80, -10]
  ]);

  // 3. Europe
  drawContinent([
    [-10, 36], [0, 42], [5, 44], [15, 40], [25, 38], [28, 42], [30, 46],
    [32, 55], [25, 62], [15, 60], [5, 52], [-4, 48], [-8, 44]
  ]);

  // British Isles
  drawContinent([[-5, 50], [1, 52], [0, 58], [-6, 58]]);

  // 4. Africa
  drawContinent([
    [-17, 15], [-12, 28], [-5, 36], [10, 37], [25, 32], [32, 31],
    [42, 12], [51, 10], [40, -5], [35, -20], [28, -34], [18, -34],
    [12, -18], [8, 4], [0, 6], [-14, 8]
  ]);

  // 5. Asia & India
  drawContinent([
    [32, 31], [40, 38], [50, 42], [60, 50], [80, 65], [110, 70],
    [140, 70], [170, 65], [145, 45], [130, 32], [120, 22], [108, 12],
    [100, 4], [90, 22], [80, 12], [76, 8], [72, 20], [68, 25],
    [58, 24], [48, 30]
  ]);

  // India Peninsular detail
  drawContinent([
    [68, 24], [73, 20], [77, 8], [80, 13], [88, 22], [85, 27], [72, 28]
  ], '#154a2b');

  // 6. Australia
  drawContinent([
    [114, -22], [122, -14], [135, -12], [148, -20], [152, -32],
    [145, -38], [130, -32], [116, -35]
  ]);

  // Glowing Night Cities (golden/cyan dots on major urban centers)
  const cities = [
    [78, 27], [77, 28], [72, 19], [80, 13], [88, 22], // India
    [31, 30], [30, 31], // Egypt / Cairo
    [2, 48], [-0.1, 51], [13, 52], [4, 52], // Europe / Paris / London
    [-74, 40], [-71, 42], [-87, 41], [-118, 34], [-122, 37], // US / NY / LA
    [116, 40], [121, 31], [114, 22], [139, 35] // China / Japan / Beijing
  ];

  cities.forEach(([lon, lat]) => {
    const cx = toX(lon);
    const cy = toY(lat);

    // City glow
    const grad = ctx.createRadialGradient(cx, cy, 1, cx, cy, 12);
    grad.addColorStop(0, '#ffd166');
    grad.addColorStop(0.4, '#38bdf8');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(cx, cy, 2, 0, Math.PI * 2);
    ctx.fill();
  });

  // Longitude and Latitude navigation grid lines
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
  ctx.lineWidth = 1;
  for (let lat = -60; lat <= 60; lat += 30) {
    const y = toY(lat);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  for (let lon = -150; lon <= 180; lon += 30) {
    const x = toX(lon);
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
