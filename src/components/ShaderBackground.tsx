"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 43758.5453;
  return x - Math.floor(x);
}

const PARTICLE_COUNT = 600;

const particlePositions = (() => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    pos[i * 3] = (seededRandom(i * 3 + 1) - 0.5) * 12;
    pos[i * 3 + 1] = (seededRandom(i * 3 + 2) - 0.5) * 12;
    pos[i * 3 + 2] = (seededRandom(i * 3 + 3) - 0.5) * 6;
  }
  return pos;
})();

const particleColors = (() => {
  const col = new Float32Array(PARTICLE_COUNT * 3);
  const accent = new THREE.Color("#6C63FF");
  const teal = new THREE.Color("#00D4AA");
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const c = seededRandom(i * 7 + 42) > 0.5 ? accent : teal;
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  return col;
})();

function ShaderPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mouseTarget = useRef(new THREE.Vector2(0, 0));

  useFrame(({ clock, pointer }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      mouseTarget.current.lerp(
        new THREE.Vector2(pointer.x, pointer.y),
        0.03
      );
      materialRef.current.uniforms.uMouse.value.copy(mouseTarget.current);
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
      
      float elevation = sin(pos.x * uFrequency + uTime * 0.4) * uAmplitude;
      elevation += sin(pos.y * uFrequency * 0.7 + uTime * 0.25) * uAmplitude * 0.6;
      elevation += sin((pos.x + pos.y) * uFrequency * 0.4 + uTime * 0.6) * uAmplitude * 0.35;
      elevation += sin(length(pos.xy) * uFrequency * 0.3 + uTime * 0.3) * uAmplitude * 0.25;
      elevation += mouseInfluence * 0.15;
      
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
    uniform vec3 uColorC;
    uniform float uOpacity;

    void main() {
      float mixStrength = (vElevation + 0.12) * 3.5;
      mixStrength = clamp(mixStrength, 0.0, 1.0);
      
      vec3 color = mix(uColorA, uColorB, mixStrength);
      
      float radial = length(vUv - 0.5);
      color = mix(color, uColorC, smoothstep(0.2, 0.8, radial) * 0.3);
      
      vec3 accentColor = vec3(0.424, 0.388, 1.0);
      float accentMask = sin(vUv.x * 3.14159 + uTime * 0.2) * sin(vUv.y * 3.14159 + uTime * 0.15);
      color += accentColor * accentMask * 0.03;
      
      float scanline = sin(vUv.y * 600.0 + uTime * 0.5) * 0.015;
      color += scanline;
      
      float noise = fract(sin(dot(vUv * uTime * 0.01, vec2(12.9898, 78.233))) * 43758.5453);
      color += noise * 0.01;
      
      float vignette = 1.0 - radial * 0.7;
      color *= vignette;
      
      gl_FragColor = vec4(color, uOpacity);
    }
  `;

  return (
    <mesh rotation={[-Math.PI / 3, 0, 0]} position={[0, 0, -1]}>
      <planeGeometry args={[10, 10, 150, 150]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uFrequency: { value: 2.5 },
          uAmplitude: { value: 0.12 },
          uColorA: { value: new THREE.Color("#030308") },
          uColorB: { value: new THREE.Color("#0f0f2e") },
          uColorC: { value: new THREE.Color("#1a0a30") },
          uOpacity: { value: 0.85 },
          uMouse: { value: new THREE.Vector2(0, 0) },
        }}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.015;
      pointsRef.current.rotation.x =
        Math.sin(clock.getElapsedTime() * 0.008) * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlePositions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particleColors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        vertexColors
        transparent
        opacity={0.5}
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
        <ambientLight intensity={0.08} />
      </Canvas>
    </div>
  );
}
