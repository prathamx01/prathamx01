import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, Torus, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = ({ position, color, speed, distort }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed;
      
      // Gentle mouse parallax
      const { x, y } = state.pointer;
      meshRef.current.position.x += (x * 2 - meshRef.current.position.x) * 0.02;
      meshRef.current.position.y += (y * 2 - meshRef.current.position.y) * 0.02;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron args={[1, 0]} position={position} scale={1.5} ref={meshRef}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.9}
          wireframe={false}
        />
      </Icosahedron>
    </Float>
  );
};

const OrbitingRing = () => {
    const ringRef = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if(ringRef.current) {
            ringRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.5;
            ringRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
        }
    });
    return (
        <Torus args={[4.5, 0.02, 16, 100]} ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
             <meshStandardMaterial color="#FACC15" emissive="#FACC15" emissiveIntensity={2} toneMapped={false} />
        </Torus>
    )
}

const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 2]}>
        <fog attach="fog" args={['#050505', 5, 15]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} color="#FACC15" intensity={5} distance={20} />
        
        <AnimatedShape position={[0, 0, 0]} color="#FACC15" speed={1.5} distort={0.6} />
        <AnimatedShape position={[-4, 2, -5]} color="#333" speed={2} distort={0.3} />
        <AnimatedShape position={[4, -2, -3]} color="#222" speed={1} distort={0.4} />
        
        <OrbitingRing />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(250,204,21,0.03),transparent_70%)] pointer-events-none" />
    </div>
  );
};

export default Hero3D;