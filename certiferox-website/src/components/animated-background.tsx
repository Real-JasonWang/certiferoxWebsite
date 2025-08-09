'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    const particles: any[] = [];
    const particleCount = Math.floor(width / 40);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: gsap.utils.random(-0.3, 0.3),
        vy: gsap.utils.random(-0.3, 0.3),
        radius: gsap.utils.random(1, 2),
      });
    }

    const mouse = { x: -9999, y: -9999 };

    const mouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', mouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(255, 102, 0, 0.15)';
      ctx.fillStyle = 'rgba(255, 102, 0, 0.4)';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        const distToMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (distToMouse < 250) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.lineWidth = 0.3;
          ctx.stroke();
        }

        particles.forEach((p2) => {
          if (p === p2) return;
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = 0.1;
            ctx.stroke();
          }
        });
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);

    return () => {
        window.removeEventListener('mousemove', mouseMove);
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-50" />;
};

export default AnimatedBackground;
