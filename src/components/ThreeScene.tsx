import { Suspense, useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Mouse position store
const mousePosition = { x: 0, y: 0 };

const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current && wireframeRef.current && groupRef.current) {
      const t = state.clock.getElapsedTime();
      
      // Base rotation
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.2;
      meshRef.current.rotation.y = t * 0.1;
      wireframeRef.current.rotation.x = meshRef.current.rotation.x;
      wireframeRef.current.rotation.y = meshRef.current.rotation.y;
      
      // Breathing effect
      const scale = 1 + Math.sin(t * 0.5) * 0.05;
      meshRef.current.scale.setScalar(scale);
      wireframeRef.current.scale.setScalar(scale);

      // Mouse parallax - smooth follow
      const targetX = mousePosition.x * 1.5;
      const targetY = mousePosition.y * 1.5;
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
      
      // Add subtle tilt based on mouse
      groupRef.current.rotation.y += (mousePosition.x * 0.3 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-mousePosition.y * 0.3 - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group>
          {/* Main icosahedron */}
          <mesh ref={meshRef}>
            <icosahedronGeometry args={[2, 1]} />
            <meshStandardMaterial
              color="#3b82f6"
              transparent
              opacity={0.1}
              side={THREE.DoubleSide}
            />
          </mesh>
          
          {/* Wireframe */}
          <mesh ref={wireframeRef}>
            <icosahedronGeometry args={[2, 1]} />
            <meshBasicMaterial
              color="#3b82f6"
              wireframe
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
      </Float>
    </group>
  );
};

// Floating orbs with glow effect
const GlowingOrbs = () => {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);
  const orb3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(t * 0.3) * 4;
      orb1Ref.current.position.y = Math.cos(t * 0.4) * 2 + 1;
      orb1Ref.current.position.z = Math.sin(t * 0.2) * 2;
    }
    
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(t * 0.25) * 3 - 2;
      orb2Ref.current.position.y = Math.sin(t * 0.35) * 3 - 1;
      orb2Ref.current.position.z = Math.cos(t * 0.3) * 2;
    }
    
    if (orb3Ref.current) {
      orb3Ref.current.position.x = Math.sin(t * 0.2) * 5 + 1;
      orb3Ref.current.position.y = Math.cos(t * 0.3) * 2 - 2;
      orb3Ref.current.position.z = Math.sin(t * 0.25) * 3;
    }
  });

  return (
    <>
      <mesh ref={orb1Ref}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <MeshDistortMaterial
          color="#60a5fa"
          transparent
          opacity={0.7}
          distort={0.4}
          speed={2}
        />
      </mesh>
      <mesh ref={orb2Ref}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <MeshDistortMaterial
          color="#a78bfa"
          transparent
          opacity={0.6}
          distort={0.3}
          speed={3}
        />
      </mesh>
      <mesh ref={orb3Ref}>
        <sphereGeometry args={[0.25, 32, 32]} />
        <MeshDistortMaterial
          color="#34d399"
          transparent
          opacity={0.5}
          distort={0.5}
          speed={2.5}
        />
      </mesh>
    </>
  );
};

// Floating rings
const FloatingRings = () => {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3;
      ring1Ref.current.rotation.z = Math.sin(t * 0.2) * 0.5;
    }
    
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.2;
      ring2Ref.current.rotation.x = Math.cos(t * 0.15) * 0.3;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref} position={[3, 1, -2]}>
        <torusGeometry args={[1.2, 0.03, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring2Ref} position={[-3, -1, -1]}>
        <torusGeometry args={[0.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.3} />
      </mesh>
    </>
  );
};

const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 300;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(particleCount * 3);
    const color1 = new THREE.Color("#3b82f6");
    const color2 = new THREE.Color("#8b5cf6");
    const color3 = new THREE.Color("#06b6d4");
    
    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      const color = rand < 0.33 ? color1 : rand < 0.66 ? color2 : color3;
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return cols;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      
      // Subtle mouse influence on particles
      particlesRef.current.rotation.x += (mousePosition.y * 0.1 - particlesRef.current.rotation.x) * 0.02;
      particlesRef.current.position.x += (mousePosition.x * 0.5 - particlesRef.current.position.x) * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

const CameraRig = () => {
  const { camera } = useThree();
  
  useFrame(() => {
    // Subtle camera movement based on mouse
    camera.position.x += (mousePosition.x * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mousePosition.y * 0.3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

const ThreeScene = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <CameraRig />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
          <FloatingGeometry />
          <GlowingOrbs />
          <FloatingRings />
          <Particles />
          <Stars
            radius={50}
            depth={50}
            count={1500}
            factor={3}
            saturation={0}
            fade
            speed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;