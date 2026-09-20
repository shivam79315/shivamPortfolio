import React, { useMemo } from 'react';
import * as THREE from 'three';

const WIDTH = 4.2;
const DEPTH = 3.0;
const CORNER_RADIUS = 0.5;

const BOTTOM_HEIGHT = 0.08;
const GLOW_HEIGHT = 0.05;
const TOP_HEIGHT = 0.08;

// A rounded-rectangle shape, extruded to a fixed thickness. Unlike drei's
// RoundedBox (whose corner radius is capped by the box's smallest
// dimension — the bug behind the earlier broken/blobby platform), this lets
// the footprint have large pill-like corners independent of how thin the
// slab is.
const createRoundedRectGeometry = (width, depth, radius, thickness) => {
  const w = width / 2;
  const d = depth / 2;
  const shape = new THREE.Shape();
  shape.moveTo(-w + radius, -d);
  shape.lineTo(w - radius, -d);
  shape.quadraticCurveTo(w, -d, w, -d + radius);
  shape.lineTo(w, d - radius);
  shape.quadraticCurveTo(w, d, w - radius, d);
  shape.lineTo(-w + radius, d);
  shape.quadraticCurveTo(-w, d, -w, d - radius);
  shape.lineTo(-w, -d + radius);
  shape.quadraticCurveTo(-w, -d, -w + radius, -d);

  return new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: false, curveSegments: 16 });
};

const Platform = () => {
  const bottomGeometry = useMemo(
    () => createRoundedRectGeometry(WIDTH, DEPTH, CORNER_RADIUS, BOTTOM_HEIGHT),
    []
  );
  const glowGeometry = useMemo(
    () => createRoundedRectGeometry(WIDTH, DEPTH, CORNER_RADIUS, GLOW_HEIGHT),
    []
  );
  const topGeometry = useMemo(
    () => createRoundedRectGeometry(WIDTH, DEPTH, CORNER_RADIUS, TOP_HEIGHT),
    []
  );

  return (
    <group position={[0, -0.56, 0]}>
      {/* bottom layer */}
      <mesh geometry={bottomGeometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.35} roughness={0.3} metalness={0} />
      </mesh>

      {/* thin glowing middle layer */}
      <mesh geometry={glowGeometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, BOTTOM_HEIGHT, 0]}>
        <meshStandardMaterial color="#7dd3fc" emissive="#38bdf8" emissiveIntensity={1.6} toneMapped={false} roughness={0.4} />
      </mesh>

      {/* soft blue light spill from the glowing rim */}
      <pointLight position={[0, BOTTOM_HEIGHT, 0]} color="#38bdf8" intensity={1.4} distance={2.6} decay={2} />

      {/* top layer */}
      <mesh
        geometry={topGeometry}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, BOTTOM_HEIGHT + GLOW_HEIGHT, 0]}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.35} roughness={0.3} metalness={0} />
      </mesh>

      {/* direct top-down light so the top face reads bright white */}
      <directionalLight position={[0, 3, 0.4]} color="#ffffff" intensity={1.6} />
    </group>
  );
};

export default Platform;
