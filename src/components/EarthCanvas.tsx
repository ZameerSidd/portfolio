import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Earth = () => {
  // Using a placeholder for the 3D model since we don't have the actual GLTF file
  // In a real implementation, you would have the planet/scene.gltf file
  
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial 
        color="#1e40af"
        wireframe={false}
        transparent={true}
        opacity={0.8}
      />
      {/* Add some orbital rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.05, 8, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[4, 0.03, 8, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.4} />
      </mesh>
    </mesh>
  );
};

const EarthCanvas: React.FC = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;