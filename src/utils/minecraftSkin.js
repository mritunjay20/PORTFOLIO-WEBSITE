import * as THREE from 'three';

/**
 * Procedural Minecraft Skin Texture Generator
 * Faithfully reproduces the character sheet from Thumbnail 1:
 * - Expressive faces: Normal, Smile, Serious, Happy
 * - Black hoodie with neon green 'M' emblem on chest and back
 * - Neon green hoodie drawstrings
 * - Neon green racing stripes down the outer arms
 * - Cargo pants with neon green pocket accents
 * - White and neon green sneakers
 */

function createPixelCanvas(w, h, drawFn) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  // Disable image smoothing for authentic crisp Minecraft pixel aesthetic
  ctx.imageSmoothingEnabled = false;
  drawFn(ctx, w, h);

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function generateMinecraftTextures() {
  const skin = '#cfa07e';
  const skinShadow = '#b88a68';
  const hair = '#17141b';
  const hairHighlight = '#26222c';
  const hoodieBlack = '#101217';
  const hoodieDark = '#090a0d';
  const neonGreen = '#00ff73';
  const neonGreenGlow = '#4ade80';
  const white = '#f8fafc';
  const eyePupil = '#1b1720';

  // 1. Face Textures (Normal, Smile, Serious, Happy)
  function drawBaseFace(ctx, w, h) {
    // Fill skin base
    ctx.fillStyle = skin;
    ctx.fillRect(0, 0, w, h);

    // Hair fringe along the top (wavy blocky bangs)
    ctx.fillStyle = hair;
    ctx.fillRect(0, 0, w, 24);
    ctx.fillRect(0, 24, 16, 12);
    ctx.fillRect(16, 24, 18, 18);
    ctx.fillRect(34, 24, 24, 8);
    ctx.fillRect(58, 24, 20, 16);
    ctx.fillRect(78, 24, 18, 22);
    ctx.fillRect(96, 0, 32, 36);
    ctx.fillRect(112, 0, 16, 42);

    // Hair highlights
    ctx.fillStyle = hairHighlight;
    ctx.fillRect(20, 8, 30, 8);
    ctx.fillRect(70, 8, 30, 8);

    // Cheeks subtle blush
    ctx.fillStyle = skinShadow;
    ctx.fillRect(16, 80, 16, 8);
    ctx.fillRect(96, 80, 16, 8);
  }

  // Expression: Normal
  const faceNormal = createPixelCanvas(128, 128, (ctx, w, h) => {
    drawBaseFace(ctx, w, h);
    // Eyebrows
    ctx.fillStyle = hair;
    ctx.fillRect(24, 46, 26, 8);
    ctx.fillRect(78, 46, 26, 8);

    // Eyes: Left & Right
    // Sclera white
    ctx.fillStyle = white;
    ctx.fillRect(26, 56, 22, 16);
    ctx.fillRect(80, 56, 22, 16);
    // Pupils
    ctx.fillStyle = eyePupil;
    ctx.fillRect(32, 56, 14, 16);
    ctx.fillRect(82, 56, 14, 16);
    // Catchlight shine
    ctx.fillStyle = white;
    ctx.fillRect(40, 58, 5, 6);
    ctx.fillRect(90, 58, 5, 6);

    // Nose hint
    ctx.fillStyle = skinShadow;
    ctx.fillRect(60, 76, 8, 8);

    // Mouth: Neutral subtle line
    ctx.fillStyle = '#6b473e';
    ctx.fillRect(52, 94, 24, 5);
  });

  // Expression: Smile
  const faceSmile = createPixelCanvas(128, 128, (ctx, w, h) => {
    drawBaseFace(ctx, w, h);
    // Eyebrows slightly curved
    ctx.fillStyle = hair;
    ctx.fillRect(24, 44, 26, 8);
    ctx.fillRect(78, 44, 26, 8);

    // Eyes
    ctx.fillStyle = white;
    ctx.fillRect(26, 54, 22, 16);
    ctx.fillRect(80, 54, 22, 16);
    ctx.fillStyle = eyePupil;
    ctx.fillRect(32, 54, 14, 16);
    ctx.fillRect(82, 54, 14, 16);
    ctx.fillStyle = white;
    ctx.fillRect(40, 56, 5, 6);
    ctx.fillRect(90, 56, 5, 6);

    // Smiling mouth
    ctx.fillStyle = '#6b473e';
    ctx.fillRect(48, 92, 32, 8);
    ctx.fillStyle = white;
    ctx.fillRect(52, 94, 24, 4);
  });

  // Expression: Happy
  const faceHappy = createPixelCanvas(128, 128, (ctx, w, h) => {
    drawBaseFace(ctx, w, h);
    // Eyebrows up
    ctx.fillStyle = hair;
    ctx.fillRect(24, 40, 26, 8);
    ctx.fillRect(78, 40, 26, 8);

    // Curved squinting happy eyes (^ ^)
    ctx.fillStyle = hair;
    ctx.fillRect(26, 62, 24, 8);
    ctx.fillRect(34, 54, 12, 8);
    ctx.fillRect(78, 62, 24, 8);
    ctx.fillRect(82, 54, 12, 8);

    // Big happy open smile
    ctx.fillStyle = '#6b473e';
    ctx.fillRect(46, 88, 36, 14);
    ctx.fillStyle = white;
    ctx.fillRect(50, 90, 28, 6);
  });

  // Expression: Serious
  const faceSerious = createPixelCanvas(128, 128, (ctx, w, h) => {
    drawBaseFace(ctx, w, h);
    // Angled determined eyebrows
    ctx.fillStyle = hair;
    ctx.fillRect(24, 48, 28, 8);
    ctx.fillRect(76, 48, 28, 8);

    // Narrow eyes
    ctx.fillStyle = white;
    ctx.fillRect(26, 58, 22, 12);
    ctx.fillRect(80, 58, 22, 12);
    ctx.fillStyle = eyePupil;
    ctx.fillRect(34, 58, 12, 12);
    ctx.fillRect(82, 58, 12, 12);

    // Firm straight mouth
    ctx.fillStyle = '#6b473e';
    ctx.fillRect(50, 94, 28, 5);
  });

  // 2. Hair Texture (Sides, Top, Back)
  const hairTex = createPixelCanvas(128, 128, (ctx, w, h) => {
    ctx.fillStyle = hair;
    ctx.fillRect(0, 0, w, h);
    // Procedural curls and highlights
    ctx.fillStyle = hairHighlight;
    for (let y = 8; y < h; y += 24) {
      for (let x = 8; x < w; x += 32) {
        ctx.fillRect(x, y, 16, 12);
        ctx.fillRect(x + 8, y + 8, 12, 8);
      }
    }
  });

  // 3. Torso Front Texture (Black hoodie, neon green 'M' logo, drawstrings)
  const torsoFront = createPixelCanvas(128, 128, (ctx, w, h) => {
    ctx.fillStyle = hoodieBlack;
    ctx.fillRect(0, 0, w, h);

    // Hoodie collar / hood V-neck fold
    ctx.fillStyle = hoodieDark;
    ctx.beginPath();
    ctx.moveTo(34, 0);
    ctx.lineTo(64, 30);
    ctx.lineTo(94, 0);
    ctx.fill();

    // White shirt hint in throat
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(58, 4, 12, 10);

    // Neon green drawstrings hanging down
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(44, 26, 4, 34);
    ctx.fillRect(80, 26, 4, 34);
    // Neon green drawstring aglets
    ctx.fillStyle = neonGreen;
    ctx.fillRect(43, 60, 6, 12);
    ctx.fillRect(79, 60, 6, 12);

    // Iconic Neon Green 'M' Logo on Chest
    ctx.fillStyle = neonGreen;
    // Left vertical bar
    ctx.fillRect(46, 50, 7, 24);
    // Right vertical bar
    ctx.fillRect(75, 50, 7, 24);
    // Left diagonal
    ctx.fillRect(53, 56, 6, 8);
    // Right diagonal
    ctx.fillRect(69, 56, 6, 8);
    // Center peak
    ctx.fillRect(59, 62, 10, 8);

    // Kangaroo pouch pocket line
    ctx.strokeStyle = hoodieDark;
    ctx.lineWidth = 4;
    ctx.strokeRect(24, 88, 80, 36);

    // Hoodie ribbed bottom hem
    ctx.fillStyle = hoodieDark;
    ctx.fillRect(0, 116, w, 12);
  });

  // 4. Torso Back Texture (Black hoodie with large neon green 'M' logo)
  const torsoBack = createPixelCanvas(128, 128, (ctx, w, h) => {
    ctx.fillStyle = hoodieBlack;
    ctx.fillRect(0, 0, w, h);

    // Folded hood on back
    ctx.fillStyle = hoodieDark;
    ctx.fillRect(20, 4, 88, 30);
    ctx.fillRect(32, 34, 64, 8);

    // Large Neon Green 'M' on the Back
    ctx.fillStyle = neonGreen;
    // Left pillar
    ctx.fillRect(38, 52, 10, 36);
    // Right pillar
    ctx.fillRect(80, 52, 10, 36);
    // Diagonals
    ctx.fillRect(48, 60, 8, 12);
    ctx.fillRect(72, 60, 8, 12);
    // Center point
    ctx.fillRect(56, 70, 16, 10);

    // Bottom rib
    ctx.fillStyle = hoodieDark;
    ctx.fillRect(0, 116, w, 12);
  });

  // 5. Arm Texture (Black sleeve with prominent vertical neon green racing stripe)
  const armOuter = createPixelCanvas(64, 128, (ctx, w, h) => {
    ctx.fillStyle = hoodieBlack;
    ctx.fillRect(0, 0, w, h);

    // Neon green vertical racing stripe down the center of outer arm
    ctx.fillStyle = neonGreen;
    ctx.fillRect(26, 8, 12, 88);
    // Green joint cross accent (from character sheet)
    ctx.fillRect(16, 64, 32, 10);

    // Sleeve cuff
    ctx.fillStyle = hoodieDark;
    ctx.fillRect(0, 96, w, 10);

    // Hand skin
    ctx.fillStyle = skin;
    ctx.fillRect(0, 106, w, 22);
  });

  // Arm inner & sides (hoodie black)
  const armInner = createPixelCanvas(64, 128, (ctx, w, h) => {
    ctx.fillStyle = hoodieBlack;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = hoodieDark;
    ctx.fillRect(0, 96, w, 10);
    ctx.fillStyle = skin;
    ctx.fillRect(0, 106, w, 22);
  });

  // 6. Leg Texture (Black cargo pants with neon green strap/accent)
  const legFront = createPixelCanvas(64, 128, (ctx, w, h) => {
    ctx.fillStyle = '#111319';
    ctx.fillRect(0, 0, w, h);

    // Cargo pocket shadow
    ctx.fillStyle = '#090a0d';
    ctx.fillRect(10, 30, 44, 40);

    // Neon green tactical strap accent
    ctx.fillStyle = neonGreen;
    ctx.fillRect(10, 48, 44, 6);
  });

  const legOuter = createPixelCanvas(64, 128, (ctx, w, h) => {
    ctx.fillStyle = '#111319';
    ctx.fillRect(0, 0, w, h);

    // Outer side cargo pocket
    ctx.fillStyle = '#090a0d';
    ctx.fillRect(8, 26, 48, 46);

    // Neon green strap
    ctx.fillStyle = neonGreen;
    ctx.fillRect(8, 46, 48, 8);
    ctx.fillRect(40, 46, 12, 16);
  });

  // 7. Shoe Texture (White sneakers with neon green sole & accents)
  const shoeFront = createPixelCanvas(64, 64, (ctx, w, h) => {
    // Upper sneaker white
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, w, 44);

    // Laces & tongue detail
    ctx.fillStyle = '#111319';
    ctx.fillRect(20, 4, 24, 28);
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(22, 10, 20, 4);
    ctx.fillRect(22, 18, 20, 4);

    // Neon green side accent
    ctx.fillStyle = neonGreen;
    ctx.fillRect(4, 32, 12, 8);
    ctx.fillRect(48, 32, 12, 8);

    // White midsole
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(0, 44, w, 10);

    // Neon green outsole
    ctx.fillStyle = neonGreen;
    ctx.fillRect(0, 54, w, 10);
  });

  return {
    faces: {
      normal: faceNormal,
      smile: faceSmile,
      happy: faceHappy,
      serious: faceSerious
    },
    hair: hairTex,
    torsoFront,
    torsoBack,
    armOuter,
    armInner,
    legFront,
    legOuter,
    shoeFront
  };
}
