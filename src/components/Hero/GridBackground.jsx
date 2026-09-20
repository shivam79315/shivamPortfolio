import React, { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  uniform vec2 uMouse;
  uniform vec2 uResolution;

  float roundedSquare(vec2 uv, float size, float radius) {
    vec2 d = abs(uv) - size;
    float outside = length(max(d, 0.0)) - radius;
    float inside = min(max(d.x, d.y), 0.0);
    return outside + inside;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;
    float shortSide = min(uResolution.x, uResolution.y);
    vec2 st = uv * uResolution / shortSide;
    vec2 mouseSt = uMouse * uResolution / shortSide;

    float cells = 34.0;
    vec2 grid = fract(st * cells) - 0.5;
    float cellDist = roundedSquare(grid, 0.28, 0.10);
    float square = smoothstep(0.02, -0.02, cellDist);

    float distToMouse = distance(st, mouseSt);
    float glow = smoothstep(0.38, 0.0, distToMouse);

    float edgeFade =
      smoothstep(0.0, 0.18, uv.x) * smoothstep(1.0, 0.82, uv.x) *
      smoothstep(0.0, 0.18, uv.y) * smoothstep(1.0, 0.82, uv.y);

    vec3 base = vec3(0.75, 0.83, 0.95);
    vec3 highlight = vec3(0.30, 0.52, 0.96);
    vec3 color = mix(base, highlight, glow);

    float alpha = square * (0.028 + glow * 0.22) * edgeFade;
    gl_FragColor = vec4(color, alpha);
  }
`;

const GridPlane = ({ targetRef, reduceMotion }) => {
  const materialRef = useRef();
  const smoothed = useRef(new THREE.Vector2(0.5, 0.5));
  const { size, gl } = useThree();

  const uniforms = useMemo(
    () => ({
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }),
    []
  );

  useFrame(() => {
    if (!materialRef.current) return;
    smoothed.current.lerp(targetRef.current, reduceMotion ? 1 : 0.07);
    materialRef.current.uniforms.uMouse.value.copy(smoothed.current);
    const pixelRatio = gl.getPixelRatio();
    materialRef.current.uniforms.uResolution.value.set(size.width * pixelRatio, size.height * pixelRatio);
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
};

const GridBackground = ({ reduceMotion }) => {
  const containerRef = useRef(null);
  const targetRef = useRef(new THREE.Vector2(0.5, 0.5));

  useEffect(() => {
    if (reduceMotion) return undefined;

    const handlePointerMove = (event) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      targetRef.current.set(
        (event.clientX - rect.left) / rect.width,
        1 - (event.clientY - rect.top) / rect.height
      );
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [reduceMotion]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <Canvas dpr={[1, 1.5]} gl={{ alpha: true, antialias: false }}>
        <GridPlane targetRef={targetRef} reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
};

export default GridBackground;
