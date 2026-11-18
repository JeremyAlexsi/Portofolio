import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FloatingMesh } from './FloatingMesh';
import { Particles } from './Particles';

export const HeroCanvas: React.FC = () => {
  const pointer = useRef({ x: 0, y: 0 });
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      // Pada layar desktop (>= 1024px), geser animasi ke kanan (X = 1.7) agar porsinya seimbang 50:50 dengan teks di kiri
      if (window.innerWidth >= 1024) {
        setOffsetX(1.65);
      } else {
        setOffsetX(0);
      }
    };

    handleResize();
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="w-full h-full"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6.8]} fov={36} />
        
        {/* Soft Ambient Diffuse Light (Shadowless & Non-Glossy) */}
        <ambientLight intensity={1.2} />
        
        {/* Soft Directional Lights for Gentle Pastel Glow */}
        <directionalLight position={[0, 6, 4]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[5, 3, 3]} intensity={1.8} color="#38bdf8" />
        <directionalLight position={[-5, -2, 2]} intensity={1.5} color="#c084fc" />
        <directionalLight position={[2, -4, 3]} intensity={1.8} color="#fb923c" />

        <Suspense fallback={null}>
          <FloatingMesh pointer={pointer} offsetX={offsetX} />
          <Particles count={450} pointer={pointer} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};
