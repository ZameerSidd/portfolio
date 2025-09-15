import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Earth Component with enhanced visuals
const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  // Create Earth geometry and materials
  const earthGeometry = useMemo(() => new THREE.SphereGeometry(2, 64, 64), []);
  
  const earthMaterial = useMemo(() => {
    return new THREE.MeshPhongMaterial({
      map: null, // We'll use colors instead of textures
      color: new THREE.Color(0x2563eb), // Blue base
      shininess: 1,
      transparent: true,
      opacity: 0.9,
    });
  }, []);

  const atmosphereMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x64a9ff),
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    });
  }, []);

  const cloudsMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x87ceeb),
      transparent: true,
      opacity: 0.3,
    });
  }, []);

  // Animation
  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <group>
      {/* Earth */}
      <mesh ref={earthRef} geometry={earthGeometry} material={earthMaterial}>
        {/* Add some detail with wireframe overlay */}
        <meshBasicMaterial
          attach="material"
          color={0x1e40af}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh ref={atmosphereRef} geometry={earthGeometry} material={atmosphereMaterial} scale={[1.1, 1.1, 1.1]} />

      {/* Clouds */}
      <mesh ref={cloudsRef} geometry={earthGeometry} material={cloudsMaterial} scale={[1.05, 1.05, 1.05]} />

      {/* Orbital rings */}
      <group>
        {[...Array(3)].map((_, i) => (
          <mesh key={i} rotation={[Math.PI / 2 + i * 0.3, 0, 0]}>
            <torusGeometry args={[3 + i * 0.5, 0.02, 8, 100]} />
            <meshBasicMaterial 
              color={i === 0 ? 0x8b5cf6 : i === 1 ? 0x06b6d4 : 0x10b981} 
              transparent 
              opacity={0.6 - i * 0.15} 
            />
          </mesh>
        ))}
      </group>

      {/* Floating particles around Earth */}
      <group>
        {[...Array(20)].map((_, i) => (
          <Float key={i} speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <mesh
              position={[
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
              ]}
            >
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshBasicMaterial 
                color={Math.random() > 0.5 ? 0x8b5cf6 : 0x06b6d4} 
                transparent
                opacity={0.7}
              />
            </mesh>
          </Float>
        ))}
      </group>
    </group>
  );
};

// Satellite components
const Satellite = ({ position, color }: { position: [number, number, number]; color: number }) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[0.1, 0.1, 0.2]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh position={[0.15, 0, 0]}>
        <boxGeometry args={[0.3, 0.05, 0.01]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </mesh>
      <mesh position={[-0.15, 0, 0]}>
        <boxGeometry args={[0.3, 0.05, 0.01]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

// Main Earth Scene Component
const EarthScene: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            color={0xffffff}
            castShadow
          />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color={0x8b5cf6} />
          
          {/* Stars background */}
          <Stars 
            radius={300} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
          
          {/* Earth */}
          <Earth />
          
          {/* Satellites */}
          <Satellite position={[4, 2, 1]} color={0xff6b6b} />
          <Satellite position={[-3, -2, 2]} color={0x4ecdc4} />
          <Satellite position={[2, -3, -1]} color={0xffe66d} />
          
          {/* Orbit Controls */}
          <OrbitControls 
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI * 0.3}
            maxPolarAngle={Math.PI * 0.7}
          />
        </Suspense>
      </Canvas>
      
      {/* Overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Space dust particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default EarthScene;