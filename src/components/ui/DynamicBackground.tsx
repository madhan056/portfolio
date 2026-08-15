import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Skip the animated canvas entirely when the user has asked for reduced
    // motion — it's purely decorative and never conveys information.
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isPaused = document.hidden;
    let drops: number[] = [];
    let fontSize = 14;
    let columns = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * canvas.height; // Random strting positions
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()<>{}[]/\\+=~';

    const draw = () => {
      // Deep graphite background with some opacity to leave trails
      ctx.fillStyle = 'rgba(18, 20, 23, 0.1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#10b981'; // Emerald primary color
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Very low opacity for professionalism/readability
        ctx.globalAlpha = 0.15; 
        
        // Add occasional bright leading characters
        if (Math.random() > 0.95) {
            ctx.fillStyle = '#34d399'; // Brighter emerald
            ctx.globalAlpha = 0.3;
        } else {
            ctx.fillStyle = '#10b981';
        }
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top if it goes off screen randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      ctx.globalAlpha = 1.0;
    };

    // Throttle animation speed
    let lastTime = 0;
    const animate = (time: number) => {
      if (!isPaused && time - lastTime > 50) {
        draw();
        lastTime = time;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Stop drawing while the tab isn't visible instead of burning CPU/battery
    // in the background indefinitely.
    const handleVisibilityChange = () => {
      isPaused = document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div className="fixed inset-0 z-0 pointer-events-none bg-background" />;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-background">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-[0.8]"
      />
    </div>
  );
};

export default DynamicBackground;
