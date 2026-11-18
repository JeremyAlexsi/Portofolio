import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}

export const Particles: React.FC<ParticlesProps> = ({ count = 450, pointer }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    // Soft pastel contrast palette
    const cyan = new THREE.Color('#38bdf8');   // Soft Sky Cyan
    const orange = new THREE.Color('#fb923c'); // Soft Coral Orange
    const purple = new THREE.Color('#c084fc'); // Soft Lilac Purple
    const white = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      // Disperse softly around the web canvas space
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;

      const rand = Math.random();
      const chosen = rand > 0.65 ? cyan : rand > 0.4 ? orange : rand > 0.15 ? purple : white;
      col[i * 3] = chosen.r;
      col[i * 3 + 1] = chosen.g;
      col[i * 3 + 2] = chosen.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();

    // Soft serene ambient drift with subtle mouse influence
    pointsRef.current.rotation.y = t * 0.015 + pointer.current.x * 0.1;
    pointsRef.current.rotation.x = t * 0.008 - pointer.current.y * 0.08;
    pointsRef.current.position.y = Math.sin(t * 0.4) * 0.06;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.075}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
};
