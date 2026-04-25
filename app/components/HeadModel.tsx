'use client';

import { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Center } from '@react-three/drei';
import * as THREE from 'three';

const mouse = { x: 0, y: 0 };

const MAX_Y = Math.PI / 4;  // max left/right rotation (45°)
const MAX_X = Math.PI / 6;  // max up/down rotation (30°)
const SENSITIVITY_Y = 0.4;  // how much cursor position maps to rotation
const SENSITIVITY_X = 0.2;
const LERP = 0.05;          // smoothness (lower = smoother/slower)

function Model() {
  const { scene } = useGLTF('/3DHead.glb');
  const ref = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (!ref.current) return;

    const rawX = mouse.x * SENSITIVITY_Y;
    const rawY = mouse.y * SENSITIVITY_X;

    target.current.x += (THREE.MathUtils.clamp(rawX, -MAX_Y, MAX_Y) - target.current.x) * LERP;
    target.current.y += (THREE.MathUtils.clamp(rawY, -MAX_X, MAX_X) - target.current.y) * LERP;

    ref.current.rotation.y = target.current.x;
    ref.current.rotation.x = -target.current.y;
  });

  return (
    <group ref={ref}>
      <Center>
        <primitive object={scene} scale={1.18} />
      </Center>
    </group>
  );
}

export function HeadModel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 30 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 4, 2]} intensity={1.2} color="#a0cbf3" />
        <directionalLight position={[-2, 1, -1]} intensity={0.3} color="#4cd6fb" />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
