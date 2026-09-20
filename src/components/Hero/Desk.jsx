import React, { useMemo } from 'react';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

const Plant = ({ position }) => (
  <group position={position}>
    <mesh position={[0, 0.08, 0]} castShadow>
      <cylinderGeometry args={[0.07, 0.06, 0.14, 16]} />
      <meshStandardMaterial color="#ffffff" roughness={0.5} />
    </mesh>
    {[0, 1, 2, 3, 4].map((i) => (
      <mesh
        key={i}
        position={[Math.cos((i / 5) * Math.PI * 2) * 0.04, 0.2 + i * 0.015, Math.sin((i / 5) * Math.PI * 2) * 0.04]}
        rotation={[0, i, Math.PI / 6]}
        castShadow
      >
        <coneGeometry args={[0.035, 0.16, 8]} />
        <meshStandardMaterial color="#6fae7c" roughness={0.8} />
      </mesh>
    ))}
  </group>
);

const Mug = ({ position }) => (
  <group position={position}>
    <mesh castShadow>
      <cylinderGeometry args={[0.045, 0.04, 0.08, 16]} />
      <meshStandardMaterial color="#ffffff" roughness={0.4} />
    </mesh>
    <mesh position={[0, 0.041, 0]}>
      <cylinderGeometry args={[0.001, 0.045, 0.005, 16]} />
      <meshStandardMaterial color="#3b2a20" roughness={0.6} />
    </mesh>
    <mesh position={[0.055, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[0.025, 0.008, 8, 16]} />
      <meshStandardMaterial color="#ffffff" roughness={0.4} />
    </mesh>
  </group>
);

const makeLabelTexture = (text, bg) => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 48;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 26px sans-serif';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 14, canvas.height / 2 + 1);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
};

const BOOK_DATA = [
  { text: 'React', color: '#38bdf8' },
  { text: 'Node.js', color: '#4ade80' },
  { text: 'Next.js', color: '#1f2937' },
  { text: 'TypeScript', color: '#3b82f6' },
];

const Book = ({ text, color, position, rotation }) => {
  const texture = useMemo(() => makeLabelTexture(text, color), [text, color]);
  return (
    <group position={position} rotation={rotation}>
      <RoundedBox args={[0.045, 0.22, 0.15]} radius={0.008} smoothness={2} castShadow>
        <meshStandardMaterial color={color} roughness={0.7} />
      </RoundedBox>
      <mesh position={[0.023, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[0.148, 0.05]} />
        <meshBasicMaterial map={texture} toneMapped={false} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

const Books = ({ position }) => (
  <group position={position}>
    {BOOK_DATA.map((book, i) => (
      <Book
        key={book.text}
        text={book.text}
        color={book.color}
        position={[i * 0.052, 0.11 + (i % 2) * 0.012, 0]}
        rotation={[0, 0, (i - 1.5) * 0.04]}
      />
    ))}
  </group>
);

export { Plant, Mug, Books };
