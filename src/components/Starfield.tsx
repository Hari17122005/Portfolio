import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    
    // Mouse interaction tracking
    let mouseX = -1;
    let mouseY = -1;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 8000); // Dynamic density
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.5, // Faster drift
          vy: (Math.random() - 0.5) * 0.5,
          alpha: Math.random() * 0.5 + 0.3, // Baseline alpha
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const connectionDistance = 150;
      const mouseConnectionDistance = 200;

      // Draw and update stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move star
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Parallax effect towards mouse
        let displayX = star.x;
        let displayY = star.y;
        
        let mouseDist = Infinity;
        if (mouseX !== -1 && mouseY !== -1) {
          const dx = mouseX - star.x;
          const dy = mouseY - star.y;
          mouseDist = Math.sqrt(dx * dx + dy * dy);
          
          if (mouseDist < mouseConnectionDistance) {
            // Subtle pull towards mouse
            displayX += dx * 0.05;
            displayY += dy * 0.05;
          }
        }

        ctx.beginPath();
        ctx.arc(displayX, displayY, star.radius, 0, Math.PI * 2);
        
        // Brighter near mouse
        const currentAlpha = mouseDist < mouseConnectionDistance 
          ? Math.min(star.alpha + (1 - mouseDist / mouseConnectionDistance) * 0.5, 1) 
          : star.alpha;
          
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.fill();

        // Draw connections between stars near mouse
        if (mouseDist < mouseConnectionDistance) {
          for (let j = i + 1; j < stars.length; j++) {
            const otherStar = stars[j];
            const dx2 = otherStar.x - star.x;
            const dy2 = otherStar.y - star.y;
            const distBetweenStars = Math.sqrt(dx2 * dx2 + dy2 * dy2);

            const otherMouseDist = Math.sqrt(Math.pow(mouseX - otherStar.x, 2) + Math.pow(mouseY - otherStar.y, 2));

            if (distBetweenStars < connectionDistance && otherMouseDist < mouseConnectionDistance) {
              ctx.beginPath();
              ctx.moveTo(displayX, displayY);
              
              // Apply same parallax offset to the other point for the line
              let otherDisplayX = otherStar.x;
              let otherDisplayY = otherStar.y;
              if (mouseX !== -1 && mouseY !== -1) {
                  const mdx = mouseX - otherStar.x;
                  const mdy = mouseY - otherStar.y;
                  otherDisplayX += mdx * 0.05;
                  otherDisplayY += mdy * 0.05;
              }

              ctx.lineTo(otherDisplayX, otherDisplayY);
              
              const lineAlpha = (1 - distBetweenStars / connectionDistance) * 
                                (1 - mouseDist / mouseConnectionDistance) * 0.4;
              ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`; // Violet tint
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawStars);
    };

    window.addEventListener('resize', resizeCanvas);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouseX = -1;
      mouseY = -1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    resizeCanvas();
    drawStars();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 bg-slate-950"
      style={{ willChange: 'transform' }}
    />
  );
}
