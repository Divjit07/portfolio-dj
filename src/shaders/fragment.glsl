varying vec2 vUv;
varying float vElevation;

uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uOpacity;

void main() {
  float mixStrength = (vElevation + 0.1) * 2.0;
  mixStrength = clamp(mixStrength, 0.0, 1.0);
  
  vec3 color = mix(uColorA, uColorB, mixStrength);
  
  float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
  color += noise * 0.02;
  
  float vignette = 1.0 - length(vUv - 0.5) * 0.8;
  color *= vignette;
  
  gl_FragColor = vec4(color, uOpacity);
}
