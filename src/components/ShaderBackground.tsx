"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uFrequency: { value: 3.0 },
      uAmplitude: { value: 0.15 },
      uColorA: { value: new THREE.Color("#050505") },
      uColorB: { value: new THREE.Color("#1a1a2e") },
      uOpacity: { value: 0.9 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useFrame(({ clock, pointer }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      materialRef.current.uniforms.uMouse.value.lerp(
        new THREE.Vector2(pointer.x, pointer.y),
        0.05
      );
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    varying float vElevation;
    uniform float uTime;
    uniform float uFrequency;
    uniform float uAmplitude;
    uniform vec2 uMouse;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      float mouseInfluence = smoothstep(1.5, 0.0, length(uv - (uMouse * 0.5 + 0.5)));
      
      float elevation = sin(pos.x * uFrequency + uTime * 0.5) * uAmplitude;
      elevation += sin(pos.y * uFrequency * 0.8 + uTime * 0.3) * uAmplitude * 0.5;
      elevation += sin((pos.x + pos.y) * uFrequency * 0.5 + uTime * 0.7) * uAmplitude * 0.3;
      elevation += mouseInfluence * 0.1;
      
      pos.z += elevation;
      vElevation = elevation;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    varying float vElevation;
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    uniform float uOpacity;

    void main() {
      float mixStrength = (vElevation + 0.15) * 3.0;
      mixStrength = clamp(mixStrength, 0.0, 1.0);
      
      vec3 color = mix(uColorA, uColorB, mixStrength);
      
      float scanline = sin(vUv.y * 800.0 + uTime) * 0.02;
      color += scanline;
      
      float noise = fract(sin(dot(vUv * uTime * 0.01, vec2(12.9898, 78.233))) * 43758.5453);
      color += noise * 0.015;
      
      float vignette = 1.0 - length(vUv - 0.5) * 0.6;
      color *= vignette;
      
      gl_FragColor = vec4(color, uOpacity);
    }
  `;

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, 0, -1]}>
      <planeGeometry args={[8, 8, 128, 128]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#444466"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function ShaderBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ShaderPlane />
        <FloatingParticles />
        <ambientLight intensity={0.1} />
      </Canvas>
    </div>
  );
}
