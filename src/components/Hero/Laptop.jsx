import React, { useLayoutEffect, useMemo, useRef } from 'react';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

const KEY_ROWS = 5;
const KEY_COLS = 13;
const KEYBOARD_WIDTH = 0.6;
const KEYBOARD_DEPTH = 0.24;
const KEY_GAP = 0.005;
const KEY_WIDTH = (KEYBOARD_WIDTH - (KEY_COLS - 1) * KEY_GAP) / KEY_COLS;
const KEY_DEPTH = (KEYBOARD_DEPTH - (KEY_ROWS - 1) * KEY_GAP) / KEY_ROWS;
const SPACEBAR_ROW = KEY_ROWS - 1;
const SPACEBAR_COLS = 5;
const SPACEBAR_START_COL = Math.floor((KEY_COLS - SPACEBAR_COLS) / 2);

const Keyboard = ({ position }) => {
  const meshRef = useRef();

  const keyPositions = useMemo(() => {
    const positions = [];
    for (let row = 0; row < KEY_ROWS; row += 1) {
      for (let col = 0; col < KEY_COLS; col += 1) {
        const isSpacebarSlot =
          row === SPACEBAR_ROW && col >= SPACEBAR_START_COL && col < SPACEBAR_START_COL + SPACEBAR_COLS;
        if (isSpacebarSlot) continue;
        const x = (col - (KEY_COLS - 1) / 2) * (KEY_WIDTH + KEY_GAP);
        const z = (row - (KEY_ROWS - 1) / 2) * (KEY_DEPTH + KEY_GAP);
        positions.push([x, z]);
      }
    }
    return positions;
  }, []);

  useLayoutEffect(() => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    keyPositions.forEach(([x, z], i) => {
      dummy.position.set(x, 0, z);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [keyPositions]);

  const spacebarWidth = SPACEBAR_COLS * KEY_WIDTH + (SPACEBAR_COLS - 1) * KEY_GAP;
  const spacebarZ = (SPACEBAR_ROW - (KEY_ROWS - 1) / 2) * (KEY_DEPTH + KEY_GAP);

  return (
    <group position={position}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, keyPositions.length]} castShadow>
        <boxGeometry args={[KEY_WIDTH, 0.006, KEY_DEPTH]} />
        <meshStandardMaterial color="#111318" roughness={0.55} metalness={0.05} />
      </instancedMesh>
      <mesh position={[0, 0, spacebarZ]} castShadow>
        <boxGeometry args={[spacebarWidth, 0.006, KEY_DEPTH]} />
        <meshStandardMaterial color="#111318" roughness={0.55} metalness={0.05} />
      </mesh>
    </group>
  );
};

// --- screen chrome texture (structural shapes/colors only — no text baked
// in; all text is rendered as real SDF vector text via drei's <Text> so it
// stays crisp regardless of how small the physical screen renders on
// screen, matching the fix used for the floating skill cards) ---
const W = 480;
const H = 300;
const BEZEL = 16;
const SCALE = 4;
const BAR_HEIGHT = 26;
const SIDEBAR_WIDTH = 108;

const buildScreenChromeTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = W * SCALE;
  canvas.height = H * SCALE;
  const ctx = canvas.getContext('2d');
  ctx.scale(SCALE, SCALE);
  ctx.clearRect(0, 0, W, H);

  // black bezel — rounded corners, transparent outside so the white
  // panel behind shows through with a matching rounded corner
  const outerRadius = 20;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(0, 0, W, H, outerRadius);
  } else {
    ctx.beginPath();
    ctx.moveTo(outerRadius, 0);
    ctx.arcTo(W, 0, W, H, outerRadius);
    ctx.arcTo(W, H, 0, H, outerRadius);
    ctx.arcTo(0, H, 0, 0, outerRadius);
    ctx.arcTo(0, 0, W, 0, outerRadius);
    ctx.closePath();
  }
  ctx.fillStyle = '#000000';
  ctx.fill();

  const cx = BEZEL;
  const cy = BEZEL;
  const cw = W - BEZEL * 2;
  const ch = H - BEZEL * 2;

  // editor background
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(cx, cy, cw, ch);

  // title bar
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(cx, cy, cw, BAR_HEIGHT);

  ['#f87171', '#fbbf24', '#34d399'].forEach((color, i) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(cx + 14 + i * 14, cy + BAR_HEIGHT / 2, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  // sidebar panel
  ctx.fillStyle = '#111827';
  ctx.fillRect(cx, cy + BAR_HEIGHT, SIDEBAR_WIDTH, ch - BAR_HEIGHT);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.generateMipmaps = false;
  texture.minFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  return texture;
};

const PLANE_W = 0.715;
const PLANE_H = 0.455;
const PLANE_CENTER_Y = 0.23;

// canvas pixel -> local screen-space world position
const toWorld = (px, py) => [
  (px / W - 0.5) * PLANE_W,
  PLANE_CENTER_Y + (0.5 - py / H) * PLANE_H,
];

const FONT_SIZE_CODE = (12 / H) * PLANE_H;
const FONT_SIZE_SMALL = (11 / H) * PLANE_H;
const TEXT_Z = 0.03;

const FOLDERS = ['src', 'components', 'pages', 'hooks', 'lib', 'styles'];

const CODE_LINES = [
  ['const developer = {', '#93c5fd'],
  ['  name: "Shivam",', '#86efac'],
  ['  role: "Full Stack Dev",', '#86efac'],
  ['  skills: [', '#93c5fd'],
  ['    "React",', '#86efac'],
  ['    "Node.js",', '#86efac'],
  ['    "Next.js",', '#86efac'],
  ['    "TypeScript"', '#86efac'],
  ['  ]', '#e2e8f0'],
  ['}', '#e2e8f0'],
];

const CodeLine = ({ text, color, px, py }) => {
  const [worldX, worldY] = toWorld(px, py);
  return (
    <Text position={[worldX, worldY, TEXT_Z]} fontSize={FONT_SIZE_CODE} color={color} anchorX="left" anchorY="middle" renderOrder={2} depthTest={false}>
      {text}
    </Text>
  );
};

const ScreenContent = () => {
  const codeStartPx = BEZEL + SIDEBAR_WIDTH + 16;
  let py = BEZEL + BAR_HEIGHT + 24;
  const lineHeightPx = 18;

  const codeLineEls = CODE_LINES.map(([text, color], i) => {
    const el = <CodeLine key={i} text={text} color={color} px={codeStartPx} py={py} />;
    py += lineHeightPx;
    return el;
  });

  const commentPy = py + lineHeightPx * 0.6;
  const [titleX, titleY] = toWorld(BEZEL + 60, BEZEL + BAR_HEIGHT / 2 + 4);
  const [commentX, commentY] = toWorld(codeStartPx, commentPy);

  let folderPy = BEZEL + BAR_HEIGHT + 22;
  const folderEls = FOLDERS.map((name) => {
    const [markerX, markerY] = toWorld(BEZEL + 12, folderPy);
    const [labelX, labelY] = toWorld(BEZEL + 24, folderPy);
    const el = (
      <group key={name}>
        <Text position={[markerX, markerY, TEXT_Z]} fontSize={FONT_SIZE_SMALL} color="#64748b" anchorX="left" anchorY="middle" renderOrder={2} depthTest={false}>
          {'▸'}
        </Text>
        <Text position={[labelX, labelY, TEXT_Z]} fontSize={FONT_SIZE_SMALL} color="#94a3b8" anchorX="left" anchorY="middle" renderOrder={2} depthTest={false}>
          {name}
        </Text>
      </group>
    );
    folderPy += 20;
    return el;
  });

  return (
    <group>
      <Text position={[titleX, titleY, TEXT_Z]} fontSize={FONT_SIZE_SMALL} color="#cbd5e1" anchorX="left" anchorY="middle" renderOrder={2} depthTest={false}>
        portfolio.js
      </Text>
      {folderEls}
      {codeLineEls}
      <Text position={[commentX, commentY, TEXT_Z]} fontSize={FONT_SIZE_CODE} color="#64748b" anchorX="left" anchorY="middle" renderOrder={2} depthTest={false}>
        {'// Build. Learn. Grow.'}
      </Text>
    </group>
  );
};

const Laptop = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  const texture = useMemo(() => buildScreenChromeTexture(), []);

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* base / keyboard deck */}
      <RoundedBox args={[0.72, 0.04, 0.5]} radius={0.02} smoothness={2} position={[0, 0.02, 0]} castShadow>
        <meshStandardMaterial color="#dbe3ee" roughness={0.6} metalness={0.1} />
      </RoundedBox>
      {/* recessed deck well behind the keys */}
      <mesh position={[0, 0.043, -0.05]}>
        <boxGeometry args={[0.64, 0.004, 0.3]} />
        <meshStandardMaterial color="#c7d0de" roughness={0.8} />
      </mesh>

      <Keyboard position={[0, 0.047, -0.06]} />

      {/* trackpad */}
      <RoundedBox args={[0.2, 0.004, 0.11]} radius={0.0018} smoothness={2} position={[0, 0.043, 0.17]}>
        <meshStandardMaterial color="#c7d0de" roughness={0.4} metalness={0.1} />
      </RoundedBox>

      {/* hinged screen */}
      <group position={[0, 0.04, -0.24]} rotation={[-0.349, 0, 0]}>
        <RoundedBox args={[0.72, 0.46, 0.02]} radius={0.02} smoothness={2} position={[0, 0.23, 0]} castShadow>
          <meshStandardMaterial color="#e8edf5" roughness={0.5} metalness={0.1} />
        </RoundedBox>
        <mesh position={[0, 0.23, 0.016]} renderOrder={1}>
          <planeGeometry args={[0.715, 0.455]} />
          <meshBasicMaterial map={texture} transparent toneMapped={false} side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
        <ScreenContent />
      </group>
    </group>
  );
};

export default Laptop;
