import React, { useMemo } from 'react';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import { icons } from '../../assets';
import { useIconTexture } from './useIconTexture';
import { createRoundedRectGeometry } from './roundedRectGeometry';

const CARDS = [
  { id: 'react', icon: icons.react, title: 'React', position: [-1.4, 1.15, 0.5] },
  { id: 'nextjs', icon: icons.nextjs, title: 'Next.js', position: [-0.35, 1.55, -0.7] },
  { id: 'node', icon: icons.node, title: 'Node.js', position: [0.75, 1.45, -1.1] },
  { id: 'ts', icon: icons.ts, title: 'TypeScript', position: [1.7, 1.1, -0.4] },
  { id: 'postgresql', icon: icons.postgresql, title: 'PostgreSQL', position: [1.9, 0.55, 0.7] },
  { id: 'docker', icon: icons.docker, title: 'Docker', position: [-1.75, 0.5, -0.2] },
];

const CARD_WIDTH = 0.56;
const CARD_HEIGHT = 0.4;

const CARD_RADIUS = 0.09;

const SkillCard = ({ icon, title, position }) => {
  const texture = useIconTexture(icon);

  const glowGeometry = useMemo(
    () => createRoundedRectGeometry(CARD_WIDTH + 0.05, CARD_HEIGHT + 0.05, CARD_RADIUS, 0.008),
    []
  );
  const cardGeometry = useMemo(
    () => createRoundedRectGeometry(CARD_WIDTH, CARD_HEIGHT, CARD_RADIUS, 0.015),
    []
  );

  return (
    <Float speed={1.1} rotationIntensity={0.35} floatIntensity={0.6} position={position}>
      <group>
        {/* soft outer glow, faking a frosted blur halo around the glass */}
        <mesh geometry={glowGeometry} position={[0, 0, -0.006]} renderOrder={0}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.18} toneMapped={false} depthWrite={false} />
        </mesh>

        <mesh geometry={cardGeometry} renderOrder={1}>
          <meshPhysicalMaterial
            color="#ffffff"
            transparent
            opacity={0.3}
            roughness={0.15}
            metalness={0}
            clearcoat={1}
            clearcoatRoughness={0.1}
            depthWrite={false}
          />
        </mesh>

        <mesh position={[0, 0.06, 0.009]} renderOrder={2}>
          <planeGeometry args={[0.2, 0.2]} />
          <meshBasicMaterial
            map={texture}
            transparent
            toneMapped={false}
            side={THREE.DoubleSide}
            depthWrite={false}
            depthTest={false}
          />
        </mesh>

        <Text
          position={[0, -0.1, 0.009]}
          fontSize={0.07}
          color="#1e293b"
          fontWeight={700}
          anchorX="center"
          anchorY="middle"
          renderOrder={3}
          depthTest={false}
          depthWrite={false}
        >
          {title}
        </Text>
      </group>
    </Float>
  );
};

const SkillCards = () => {
  return (
    <group>
      {CARDS.map((card) => (
        <SkillCard key={card.id} icon={card.icon} title={card.title} position={card.position} />
      ))}
    </group>
  );
};

export default SkillCards;
