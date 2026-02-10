import { useEffect, useRef } from "react";

const FloatingOrbs = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.offsetWidth;
      height = parent.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const orbs = Array.from({ length: 10 }, (_, i) => ({
      x: Math.random() * 1.4 - 0.2,
      y: Math.random() * 1.4 - 0.2,
      r: 0.15 + Math.random() * 0.25,
      vx: (Math.random() - 0.5) * 0.0004,
      vy: (Math.random() - 0.5) * 0.0003,
      hue: 185 + Math.random() * 30,
      sat: 70 + Math.random() * 20,
      alpha: 0.12 + Math.random() * 0.1,
      pulseSpeed: 0.005 + Math.random() * 0.01,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      for (const orb of orbs) {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -0.3) orb.x = 1.3;
        if (orb.x > 1.3) orb.x = -0.3;
        if (orb.y < -0.3) orb.y = 1.3;
        if (orb.y > 1.3) orb.y = -0.3;

        const pulse = 1 + Math.sin(time * orb.pulseSpeed + orb.pulseOffset) * 0.15;
        const px = orb.x * width;
        const py = orb.y * height;
        const pr = orb.r * Math.min(width, height) * pulse;
        const currentAlpha = orb.alpha * (0.85 + Math.sin(time * orb.pulseSpeed * 0.7 + orb.pulseOffset) * 0.15);

        const gradient = ctx.createRadialGradient(px, py, 0, px, py, pr);
        gradient.addColorStop(0, `hsla(${orb.hue}, ${orb.sat}%, 55%, ${currentAlpha})`);
        gradient.addColorStop(0.4, `hsla(${orb.hue}, ${orb.sat}%, 45%, ${currentAlpha * 0.6})`);
        gradient.addColorStop(1, `hsla(${orb.hue}, ${orb.sat}%, 35%, 0)`);
        ctx.beginPath();
        ctx.arc(px, py, pr, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
};

export default FloatingOrbs;
