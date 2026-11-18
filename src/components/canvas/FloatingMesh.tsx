import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingMeshProps {
  pointer: React.MutableRefObject<{ x: number; y: number }>;
  offsetX?: number;
}

// Soft Illustrated 2D Code Tag: '< / >' (Matte, No Gloss)
const SoftLiveTag: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const t = 0.035;
  return (
    <group position={position} scale={[0.85, 0.85, 0.85]}>
      {/* < bracket */}
      <mesh position={[-0.38, 0.13, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.28, t, 0.015]} />
        <meshBasicMaterial color="#00f2fe" />
      </mesh>
      <mesh position={[-0.38, -0.13, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.28, t, 0.015]} />
        <meshBasicMaterial color="#00f2fe" />
      </mesh>
      {/* / slash */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[t, 0.52, 0.015]} />
        <meshBasicMaterial color="#ff5400" />
      </mesh>
      {/* > bracket */}
      <mesh position={[0.38, 0.13, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[0.28, t, 0.015]} />
        <meshBasicMaterial color="#a855f7" />
      </mesh>
      <mesh position={[0.38, -0.13, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.28, t, 0.015]} />
        <meshBasicMaterial color="#a855f7" />
      </mesh>
    </group>
  );
};

// Soft Illustrated 2D Curly Brace: '{' or '}' (Matte, No Gloss)
const SoftLiveBrace: React.FC<{ dir: 'left' | 'right'; color: string; position: [number, number, number] }> = ({
  dir,
  color,
  position
}) => {
  const s = dir === 'left' ? -1 : 1;
  const t = 0.035;
  const w = 0.18;
  const h = 0.4;

  return (
    <group position={position}>
      <mesh position={[s * (w / 2), h, 0]}>
        <boxGeometry args={[w, t, 0.015]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh position={[0, h / 2, 0]}>
        <boxGeometry args={[t, h, 0.015]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh position={[s * -(w * 0.4), 0, 0]}>
        <boxGeometry args={[w * 0.8, t, 0.015]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh position={[0, -h / 2, 0]}>
        <boxGeometry args={[t, h, 0.015]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh position={[s * (w / 2), -h, 0]}>
        <boxGeometry args={[w, t, 0.015]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
};

export const FloatingMesh: React.FC<FloatingMeshProps> = ({ pointer, offsetX = 0 }) => {
  const rootRef = useRef<THREE.Group>(null);
  const midLayerRef = useRef<THREE.Group>(null);
  const frontLayerRef = useRef<THREE.Group>(null);
  const waveBarsRef = useRef<THREE.Group>(null);
  const card1Ref = useRef<THREE.Mesh>(null);
  const card2Ref = useRef<THREE.Mesh>(null);
  const card3Ref = useRef<THREE.Mesh>(null);

  // Generate 14 animated audio/data telemetry wave bars
  const waveBarCount = 14;
  const waveIndices = useMemo(() => Array.from({ length: waveBarCount }, (_, i) => i), [waveBarCount]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // ── 1. LIVE 2D ORGANIC BREATHING & RIGGING PHYSICS ──
    if (rootRef.current) {
      // Subtle organic breathing cycle (Live2D expansion/contraction rhythm)
      const breathX = 1.0 + Math.sin(t * 1.6) * 0.015;
      const breathY = 1.0 + Math.sin(t * 1.6 + 0.3) * 0.02;
      rootRef.current.scale.set(breathX, breathY, 1.0);

      // Smooth idle hovering with dynamic horizontal offset
      rootRef.current.position.x = offsetX;
      rootRef.current.position.y = Math.sin(t * 1.2) * 0.07;

      // Soft Live2D mouse tracking swivel (matte 2D feel, subtle angle tracking)
      const targetRotX = -pointer.current.y * 0.12;
      const targetRotY = pointer.current.x * 0.15;
      const targetRotZ = pointer.current.x * -0.03;

      rootRef.current.rotation.x += (targetRotX - rootRef.current.rotation.x) * 0.06;
      rootRef.current.rotation.y += (targetRotY - rootRef.current.rotation.y) * 0.06;
      rootRef.current.rotation.z += (targetRotZ - rootRef.current.rotation.z) * 0.06;
    }

    // ── 2. LIVE 2D LAYERED PARALLAX SHIFT ──
    if (midLayerRef.current) {
      midLayerRef.current.position.x = pointer.current.x * 0.16;
      midLayerRef.current.position.y = pointer.current.y * 0.12;
    }
    if (frontLayerRef.current) {
      frontLayerRef.current.position.x = pointer.current.x * 0.32;
      frontLayerRef.current.position.y = pointer.current.y * 0.24;
    }

    // ── 3. LIVE UNDULATING DATA / LATENCY WAVE (ANIMATED IN REAL-TIME) ──
    if (waveBarsRef.current) {
      waveBarsRef.current.children.forEach((child, i) => {
        const wave = Math.sin(t * 3.5 + i * 0.45);
        const scale = 0.5 + Math.abs(wave) * 0.9;
        child.scale.y = scale;
      });
    }

    // ── 4. SOFT CARD PULSING (MATTE, NO GLOSS) ──
    if (card1Ref.current) {
      const mat = card1Ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.85 + Math.sin(t * 2.2) * 0.12;
    }
    if (card2Ref.current) {
      const mat = card2Ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.85 + Math.cos(t * 2.0) * 0.12;
    }
    if (card3Ref.current) {
      const mat = card3Ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.85 + Math.sin(t * 2.5 + 1) * 0.12;
    }
  });

  return (
    <group ref={rootRef} position={[0, 0, 0]}>
      {/* ── BACK LAYER: SOFT MATTE BROWSER WINDOW (LIVE 2D BASE) ── */}
      <group position={[0, 0, 0]}>
        {/* Soft Ambient Halo Aura (Matte & Dreamy) */}
        <mesh position={[0, 0, -0.06]}>
          <planeGeometry args={[5.2, 3.5]} />
          <meshBasicMaterial
            color="#00f2fe"
            transparent
            opacity={0.12}
          />
        </mesh>

        {/* Main Illustrated Browser Window (Cloud Matte White / Soft Slate) */}
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[4.6, 3.0]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.94}
          />
        </mesh>

        {/* Clean Soft Outline Stroke (No Harsh Borders) */}
        <mesh position={[0, 0, 0.005]}>
          <planeGeometry args={[4.64, 3.04]} />
          <meshBasicMaterial
            color="#00f2fe"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Window Top Header Strip (Soft Matte Header) */}
        <mesh position={[0, 1.25, 0.015]}>
          <planeGeometry args={[4.56, 0.44]} />
          <meshBasicMaterial color="#f1f5f9" />
        </mesh>

        {/* Mac Pastel Soft Dots (Flat Matte, No Gloss) */}
        <mesh position={[-2.05, 1.25, 0.025]}>
          <circleGeometry args={[0.065, 24]} />
          <meshBasicMaterial color="#f87171" />
        </mesh>
        <mesh position={[-1.86, 1.25, 0.025]}>
          <circleGeometry args={[0.065, 24]} />
          <meshBasicMaterial color="#fbbf24" />
        </mesh>
        <mesh position={[-1.67, 1.25, 0.025]}>
          <circleGeometry args={[0.065, 24]} />
          <meshBasicMaterial color="#34d399" />
        </mesh>

        {/* Browser URL Search Pill (Centered, Clean 2D) */}
        <mesh position={[0.15, 1.25, 0.02]}>
          <planeGeometry args={[2.3, 0.2]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[-0.85, 1.25, 0.03]}>
          <circleGeometry args={[0.035, 16]} />
          <meshBasicMaterial color="#00f2fe" />
        </mesh>
        <mesh position={[0.15, 1.25, 0.03]}>
          <planeGeometry args={[1.5, 0.04]} />
          <meshBasicMaterial color="#94a3b8" />
        </mesh>

        {/* Active Tab Pill in Header */}
        <mesh position={[1.85, 1.25, 0.025]}>
          <planeGeometry args={[0.55, 0.18]} />
          <meshBasicMaterial color="#ff5400" transparent opacity={0.2} />
        </mesh>
        <mesh position={[1.85, 1.25, 0.03]}>
          <planeGeometry args={[0.4, 0.05]} />
          <meshBasicMaterial color="#ff5400" />
        </mesh>

        {/* Mini Web Navbar inside Browser */}
        <mesh position={[0, 0.84, 0.015]}>
          <planeGeometry args={[4.2, 0.22]} />
          <meshBasicMaterial color="#f8fafc" />
        </mesh>
        <mesh position={[-1.8, 0.84, 0.025]}>
          <planeGeometry args={[0.22, 0.09]} />
          <meshBasicMaterial color="#ff5400" />
        </mesh>
        <mesh position={[1.4, 0.84, 0.025]}>
          <planeGeometry args={[0.3, 0.045]} />
          <meshBasicMaterial color="#cbd5e1" />
        </mesh>
        <mesh position={[1.8, 0.84, 0.025]}>
          <planeGeometry args={[0.3, 0.045]} />
          <meshBasicMaterial color="#00f2fe" />
        </mesh>

        {/* Hero Web Banner Area inside Browser */}
        <mesh position={[0, 0.44, 0.015]}>
          <planeGeometry args={[4.2, 0.46]} />
          <meshBasicMaterial color="#f8fafc" />
        </mesh>
        <mesh position={[0, 0.58, 0.025]}>
          <planeGeometry args={[4.1, 0.06]} />
          <meshBasicMaterial color="#00f2fe" />
        </mesh>
        <mesh position={[-0.8, 0.46, 0.025]}>
          <planeGeometry args={[1.9, 0.08]} />
          <meshBasicMaterial color="#1e293b" />
        </mesh>
        <mesh position={[-1.1, 0.34, 0.025]}>
          <planeGeometry args={[1.3, 0.045]} />
          <meshBasicMaterial color="#94a3b8" />
        </mesh>

        {/* ── LIVE UNDULATING DATA WAVE (ANIMATED SINE WAVE RIBBON) ── */}
        <group ref={waveBarsRef} position={[0, 0.02, 0.025]}>
          {waveIndices.map((i) => {
            const x = -1.8 + i * 0.28;
            const color = i % 3 === 0 ? '#ff5400' : i % 3 === 1 ? '#00f2fe' : '#a855f7';
            return (
              <mesh key={i} position={[x, 0, 0]}>
                <planeGeometry args={[0.14, 0.22]} />
                <meshBasicMaterial color={color} transparent opacity={0.8} />
              </mesh>
            );
          })}
        </group>

        {/* ── 3 SOFT COMPONENT CARDS (MATTE, NO GLOSS) ── */}
        {/* Card 1: Electric Orange Soft Illustrated Card */}
        <mesh ref={card1Ref} position={[-1.4, -0.48, 0.02]}>
          <planeGeometry args={[1.25, 0.68]} />
          <meshBasicMaterial color="#ff5400" transparent opacity={0.85} />
        </mesh>
        <mesh position={[-1.4, -0.32, 0.03]}>
          <planeGeometry args={[0.85, 0.06]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[-1.4, -0.48, 0.03]}>
          <planeGeometry args={[0.85, 0.14]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.65} />
        </mesh>

        {/* Card 2: Neon Cyan Soft Code Editor Card */}
        <mesh ref={card2Ref} position={[0, -0.48, 0.02]}>
          <planeGeometry args={[1.25, 0.68]} />
          <meshBasicMaterial color="#00f2fe" transparent opacity={0.85} />
        </mesh>
        <mesh position={[0, -0.32, 0.03]}>
          <planeGeometry args={[0.9, 0.05]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[-0.15, -0.44, 0.03]}>
          <planeGeometry args={[0.6, 0.04]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.7} />
        </mesh>
        <mesh position={[0.1, -0.54, 0.03]}>
          <planeGeometry args={[0.7, 0.04]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.7} />
        </mesh>

        {/* Card 3: Electric Purple Soft Telemetry Card */}
        <mesh ref={card3Ref} position={[1.4, -0.48, 0.02]}>
          <planeGeometry args={[1.25, 0.68]} />
          <meshBasicMaterial color="#a855f7" transparent opacity={0.85} />
        </mesh>
        <mesh position={[1.4, -0.32, 0.03]}>
          <planeGeometry args={[0.85, 0.06]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh position={[1.4, -0.48, 0.03]}>
          <planeGeometry args={[0.85, 0.16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.65} />
        </mesh>

        {/* Browser Footer Status Strip */}
        <mesh position={[0, -1.05, 0.015]}>
          <planeGeometry args={[4.2, 0.18]} />
          <meshBasicMaterial color="#f1f5f9" />
        </mesh>
        <mesh position={[-1.6, -1.05, 0.025]}>
          <circleGeometry args={[0.035, 16]} />
          <meshBasicMaterial color="#10b981" />
        </mesh>
        <mesh position={[-0.7, -1.05, 0.025]}>
          <planeGeometry args={[1.2, 0.04]} />
          <meshBasicMaterial color="#64748b" />
        </mesh>
      </group>

      {/* ── MID LAYER: FLOATING RESPONSIVE CARD (LIVE 2D PARALLAX Z: 0.18) ── */}
      <group ref={midLayerRef} position={[2.2, -0.25, 0.18]}>
        {/* Soft Mobile Frame Illustrated Card */}
        <mesh>
          <planeGeometry args={[1.0, 1.8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.92} />
        </mesh>
        <mesh position={[0, 0, 0.005]}>
          <planeGeometry args={[1.02, 1.82]} />
          <meshBasicMaterial color="#ff5400" wireframe transparent opacity={0.4} />
        </mesh>
        {/* Mobile Header */}
        <mesh position={[0, 0.76, 0.01]}>
          <planeGeometry args={[0.28, 0.03]} />
          <meshBasicMaterial color="#0f172a" />
        </mesh>
        <mesh position={[0, 0.5, 0.01]}>
          <planeGeometry args={[0.84, 0.32]} />
          <meshBasicMaterial color="#00f2fe" />
        </mesh>
        {/* Mobile Mini Cards */}
        <mesh position={[0, 0.16, 0.01]}>
          <planeGeometry args={[0.84, 0.24]} />
          <meshBasicMaterial color="#ff5400" />
        </mesh>
        <mesh position={[0, -0.22, 0.01]}>
          <planeGeometry args={[0.84, 0.36]} />
          <meshBasicMaterial color="#a855f7" />
        </mesh>
      </group>

      {/* ── FRONT LAYER: FLOATING SOFT ILLUSTRATED BADGES (LIVE 2D PARALLAX Z: 0.38) ── */}
      <group ref={frontLayerRef}>
        <Float speed={2.0} rotationIntensity={0.06} floatIntensity={0.4}>
          {/* Soft Illustrated '< / >' Code Tag (Cyan & Orange) */}
          <SoftLiveTag position={[-2.1, 1.25, 0.38]} />

          {/* Soft Illustrated '{ }' Curly Braces (Purple & Orange) */}
          <SoftLiveBrace dir="left" color="#ff5400" position={[-2.3, -0.65, 0.32]} />
          <SoftLiveBrace dir="right" color="#a855f7" position={[1.1, 1.4, 0.34]} />

          {/* Soft Floating Tech Pill: 'React + TS' */}
          <group position={[-1.85, 0.45, 0.35]}>
            <mesh>
              <planeGeometry args={[1.15, 0.26]} />
              <meshBasicMaterial color="#00f2fe" transparent opacity={0.9} />
            </mesh>
            <mesh position={[0, 0, 0.01]}>
              <planeGeometry args={[0.8, 0.06]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
          </group>

          {/* Soft Floating Telemetry Pill: '60 FPS Live' */}
          <group position={[1.75, -1.05, 0.35]}>
            <mesh>
              <planeGeometry args={[1.05, 0.26]} />
              <meshBasicMaterial color="#ff5400" transparent opacity={0.9} />
            </mesh>
            <mesh position={[0, 0, 0.01]}>
              <planeGeometry args={[0.7, 0.06]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
          </group>
        </Float>
      </group>
    </group>
  );
};
