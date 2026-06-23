"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PaintedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.id = "three-canvas";
    container.appendChild(renderer.domElement);

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform vec2 uResolution;
      varying vec2 vUv;

      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * smoothNoise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = vUv;
        vec2 mouse = uMouse / uResolution;
        float dist = distance(uv, mouse);
        float ripple = sin(dist * 18.0 - uTime * 1.5) * exp(-dist * 3.5) * 0.15;

        vec2 brush = uv + vec2(ripple, ripple * 0.6);
        float n = fbm(brush * 3.5 + uTime * 0.08);
        float n2 = fbm(brush * 6.0 - uTime * 0.05 + mouse * 0.5);

        vec3 teal = vec3(0.051, 0.490, 0.447);
        vec3 mint = vec3(0.851, 0.929, 0.914);
        vec3 cream = vec3(0.957, 0.969, 0.961);

        vec3 color = mix(cream, mint, n);
        color = mix(color, teal, n2 * 0.35);
        color += vec3(ripple * 0.4);

        float alpha = 0.22 + n * 0.12;
        gl_FragColor = vec4(color, alpha);
      }
    `;

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const targetMouse = new THREE.Vector2(
      window.innerWidth * 0.5,
      window.innerHeight * 0.5
    );
    const currentMouse = targetMouse.clone();

    const onMouseMove = (e: MouseEvent) => {
      targetMouse.set(e.clientX, window.innerHeight - e.clientY);
    };

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    let frameId = 0;
    const animate = (time: number) => {
      frameId = requestAnimationFrame(animate);
      currentMouse.lerp(targetMouse, 0.06);
      uniforms.uMouse.value.copy(currentMouse);
      uniforms.uTime.value = time * 0.001;
      renderer.render(scene, camera);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" />;
}