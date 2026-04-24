varying vec2 vUv;
varying float vElevation;

uniform float uTime;
uniform float uFrequency;
uniform float uAmplitude;

void main() {
  vUv = uv;
  
  vec3 pos = position;
  
  float elevation = sin(pos.x * uFrequency + uTime * 0.5) * uAmplitude;
  elevation += sin(pos.y * uFrequency * 0.8 + uTime * 0.3) * uAmplitude * 0.5;
  elevation += sin((pos.x + pos.y) * uFrequency * 0.5 + uTime * 0.7) * uAmplitude * 0.3;
  
  pos.z += elevation;
  vElevation = elevation;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
