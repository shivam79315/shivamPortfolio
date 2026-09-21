import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import Workspace from './Workspace';
import SkillCards from './SkillCards';

const DRAG_SENSITIVITY = 0.012;
const TILT_SENSITIVITY = 0.01;
const MAX_TILT = 0.3;

const CameraRig = () => {
  const { camera } = useThree();
  camera.lookAt(0, -0.05, 0);
  return null;
};

const ParallaxGroup = ({ pointerRef, parallaxEnabled, manualRotationRef, manualTiltRef, isDraggingRef, children }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (!groupRef.current) return;
    const targetY = (parallaxEnabled ? pointerRef.current.x * 0.14 : 0) + manualRotationRef.current;
    const targetX = (parallaxEnabled ? -pointerRef.current.y * 0.08 : 0) + manualTiltRef.current;
    const lerpFactor = isDraggingRef.current ? 0.35 : 0.06;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, lerpFactor);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, lerpFactor);
  });

  return <group ref={groupRef}>{children}</group>;
};

const HeroScene = ({ pointerRef, parallaxEnabled, reduceMotion, tier, onReady }) => {
  const manualRotationRef = useRef(0);
  const manualTiltRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0, rotation: 0, tilt: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event) => {
    isDraggingRef.current = true;
    dragStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      rotation: manualRotationRef.current,
      tilt: manualTiltRef.current,
    };
    setIsDragging(true);
  };

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!isDraggingRef.current) return;
      const deltaX = event.clientX - dragStartRef.current.x;
      const deltaY = event.clientY - dragStartRef.current.y;
      manualRotationRef.current = dragStartRef.current.rotation + deltaX * DRAG_SENSITIVITY;
      manualTiltRef.current = THREE.MathUtils.clamp(
        dragStartRef.current.tilt + deltaY * TILT_SENSITIVITY,
        -MAX_TILT,
        MAX_TILT
      );
    };
    const handlePointerUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      manualTiltRef.current = 0;
      setIsDragging(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, []);

  return (
    <div
      onPointerDown={handlePointerDown}
      style={{ width: '100%', height: '100%', touchAction: 'none', cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <Canvas
        shadows
        dpr={tier === 'desktop' ? [1, 3] : tier === 'mobile' ? [1, 1.5] : [1, 2]}
        camera={{ fov: 35, position: [2.6, 1.4, 5.4] }}
        onCreated={() => onReady?.()}
        gl={{ antialias: true }}
      >
        <CameraRig />
        <ambientLight intensity={1.2} />
        <hemisphereLight args={['#ffffff', '#dbeafe', 1.2]} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-left={-3.5}
          shadow-camera-right={3.5}
          shadow-camera-top={2.8}
          shadow-camera-bottom={-2.8}
          shadow-camera-near={1}
          shadow-camera-far={15}
          shadow-bias={-0.0001}
        />
        <directionalLight position={[-3, 2, -2]} intensity={0.3} color="#a9c6ff" />
        <directionalLight position={[0, 5, 1]} intensity={0.5} />

        <ParallaxGroup
          pointerRef={pointerRef}
          parallaxEnabled={parallaxEnabled}
          manualRotationRef={manualRotationRef}
          manualTiltRef={manualTiltRef}
          isDraggingRef={isDraggingRef}
        >
          <Workspace />
          <SkillCards />
        </ParallaxGroup>

        <ContactShadows
          position={[0, -0.565, 0]}
          opacity={0.35}
          blur={2.8}
          far={1.2}
          resolution={512}
          color="#64748b"
          scale={5}
        />
      </Canvas>
    </div>
  );
};

export default HeroScene;
