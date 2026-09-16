import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check device capability
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 60 : 120;
    const maxDistance = isMobile ? 80 : 110;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      1,
      1000
    );
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particles Data
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color('#00e5ff');
    const violetColor = new THREE.Color('#8b5cf6');
    const blueColor = new THREE.Color('#3b82f6');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 550;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 450;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

      velocities.push({
        x: (Math.random() - 0.5) * 0.45,
        y: (Math.random() - 0.5) * 0.45,
        z: (Math.random() - 0.5) * 0.25,
      });

      // Palette mix: cyan, electric violet, deep blue
      const mixRatio = Math.random();
      const col = mixRatio < 0.5 
        ? cyanColor.clone().lerp(violetColor, mixRatio * 2) 
        : violetColor.clone().lerp(blueColor, (mixRatio - 0.5) * 2);

      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture circle
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(0, 229, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
    }
    const texture = new THREE.CanvasTexture(canvas);

    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 3.5 : 4.5,
      map: texture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.75,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Line segments for connections
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    const lineColors = new Float32Array(particleCount * particleCount * 6);
    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );
    linesGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.35,
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // Floating 3D Geometric Objects (Subtle Wireframe Polyhedra)
    const polyGeometry1 = new THREE.IcosahedronGeometry(28, 1);
    const polyMaterial1 = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const polyMesh1 = new THREE.Mesh(polyGeometry1, polyMaterial1);
    polyMesh1.position.set(-180, 80, -50);
    scene.add(polyMesh1);

    const polyGeometry2 = new THREE.OctahedronGeometry(20, 0);
    const polyMaterial2 = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });
    const polyMesh2 = new THREE.Mesh(polyGeometry2, polyMaterial2);
    polyMesh2.position.set(200, -90, -40);
    scene.add(polyMesh2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const halfWidth = window.innerWidth / 2;
      const halfHeight = window.innerHeight / 2;
      targetX = (e.clientX - halfWidth) * 0.08;
      targetY = (e.clientY - halfHeight) * 0.08;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // ResizeObserver for canvas fluidity
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      particlesMesh.rotation.y += 0.0007;
      particlesMesh.rotation.x = mouseY * 0.0004;
      particlesMesh.position.x = mouseX * 0.4;
      particlesMesh.position.y = -mouseY * 0.4;

      polyMesh1.rotation.x += 0.003;
      polyMesh1.rotation.y += 0.004;
      polyMesh2.rotation.x -= 0.004;
      polyMesh2.rotation.y += 0.005;

      // Update particle positions and line connections
      const posAttr = particlesGeometry.attributes.position as THREE.BufferAttribute;
      const currentPos = posAttr.array as Float32Array;

      let lineVertexIndex = 0;
      let lineCount = 0;

      for (let i = 0; i < particleCount; i++) {
        // Apply velocity
        currentPos[i * 3] += velocities[i].x;
        currentPos[i * 3 + 1] += velocities[i].y;
        currentPos[i * 3 + 2] += velocities[i].z;

        // Bounce boundaries
        if (Math.abs(currentPos[i * 3]) > 280) velocities[i].x *= -1;
        if (Math.abs(currentPos[i * 3 + 1]) > 220) velocities[i].y *= -1;
        if (Math.abs(currentPos[i * 3 + 2]) > 100) velocities[i].z *= -1;

        // Form connections with nearby particles
        for (let j = i + 1; j < particleCount; j++) {
          const dx = currentPos[i * 3] - currentPos[j * 3];
          const dy = currentPos[i * 3 + 1] - currentPos[j * 3 + 1];
          const dz = currentPos[i * 3 + 2] - currentPos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const alpha = 1.0 - dist / maxDistance;

            linePositions[lineVertexIndex] = currentPos[i * 3];
            linePositions[lineVertexIndex + 1] = currentPos[i * 3 + 1];
            linePositions[lineVertexIndex + 2] = currentPos[i * 3 + 2];

            linePositions[lineVertexIndex + 3] = currentPos[j * 3];
            linePositions[lineVertexIndex + 4] = currentPos[j * 3 + 1];
            linePositions[lineVertexIndex + 5] = currentPos[j * 3 + 2];

            // Subtle gradient line color
            const r = 0.1 + alpha * 0.4;
            const g = 0.5 * alpha;
            const b = 0.9 * alpha;

            lineColors[lineVertexIndex] = r;
            lineColors[lineVertexIndex + 1] = g;
            lineColors[lineVertexIndex + 2] = b;
            lineColors[lineVertexIndex + 3] = r;
            lineColors[lineVertexIndex + 4] = g;
            lineColors[lineVertexIndex + 5] = b;

            lineVertexIndex += 6;
            lineCount++;
          }
        }
      }

      posAttr.needsUpdate = true;

      linesGeometry.setDrawRange(0, lineCount * 2);
      (linesGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      (linesGeometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      polyGeometry1.dispose();
      polyMaterial1.dispose();
      polyGeometry2.dispose();
      polyMaterial2.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="canvas-3d-container"
      ref={containerRef}
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#050711]"
      aria-hidden="true"
    >
      {/* Ambient Cybernetic Gradient Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#050711]/60 to-[#050711] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
    </div>
  );
};
