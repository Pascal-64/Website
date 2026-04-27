'use client';

import { useEffect, useRef } from 'react';

const TERMS = [
  'API', 'Java', 'SQL', 'LLM', 'REST', 'Spring', 'Ollama',
  'JSON', 'SAP', 'POS', 'JVM', 'HTTP', 'JDBC', 'OAuth',
  'Git', 'CI/CD', 'Docker', 'Linux', 'Bash', 'Log',
  'AI', 'RAG', 'CLI', 'XML', 'SOAP', 'JPA', 'MVP',
];

const PALETTE: [number, number, number][] = [
  [160, 203, 243],
  [76,  214, 251],
  [98,  220, 175],
  [130, 180, 220],
];

interface Bubble {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  baseOpacity: number;
  r: number;
  g: number;
  b: number;
  phase: number;
  label: string;
}

function spawn(w: number, h: number, isMobile: boolean, startY?: number): Bubble {
  const label = TERMS[Math.floor(Math.random() * TERMS.length)];
  const minR = isMobile ? 18 : 24;
  const maxR = isMobile ? 48 : 70;
  const radius = Math.min(
    Math.max(label.length * (isMobile ? 4 : 5.5) + 10, minR) + Math.random() * 10,
    maxR
  );
  const [r, g, b] = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  // Clamp x so bubbles never spawn off-screen
  const x = radius + Math.random() * Math.max(0, w - 2 * radius);
  return {
    x,
    y: startY ?? h + radius,
    radius,
    vx: (Math.random() - 0.5) * 0.12,
    vy: -(Math.random() * 0.18 + 0.05),
    baseOpacity: isMobile
      ? Math.random() * 0.14 + 0.04
      : Math.random() * 0.22 + 0.06,
    r, g, b,
    phase: Math.random() * Math.PI * 2,
    label,
  };
}

export function BubbleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let bubbles: Bubble[] = [];

    const isMobile = () => canvas.clientWidth < 640;

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      // Clamp existing bubbles into new bounds
      const { width, height } = canvas;
      bubbles.forEach(b => {
        b.x = Math.min(Math.max(b.x, b.radius), width - b.radius);
        b.y = Math.min(Math.max(b.y, -b.radius), height + b.radius);
      });
    };

    const init = () => {
      resize();
      const mobile = isMobile();
      const count = mobile ? 14 : 38;
      bubbles = Array.from({ length: count }, () =>
        spawn(canvas.width, canvas.height, mobile, Math.random() * canvas.height)
      );
    };

    const tick = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const t = Date.now() * 0.001;
      const mobile = isMobile();

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        b.x += b.vx + Math.sin(t * 0.4 + b.phase) * 0.12;
        b.y += b.vy;

        // Clamp x so bubbles never go off-screen
        b.x = Math.min(Math.max(b.x, b.radius), width - b.radius);

        if (b.y + b.radius < 0) {
          bubbles[i] = spawn(width, height, mobile);
          continue;
        }

        const { r, g, b: bl, baseOpacity: a, radius, x, y, label } = b;
        const col = `${r},${g},${bl}`;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${col},${a})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();

        const grad = ctx.createRadialGradient(
          x - radius * 0.28, y - radius * 0.28, 0,
          x, y, radius
        );
        grad.addColorStop(0, `rgba(${col},${a * 0.5})`);
        grad.addColorStop(1, `rgba(${col},0)`);
        ctx.fillStyle = grad;
        ctx.fill();

        const fontSize = Math.max(8, Math.min(radius * 0.42, mobile ? 11 : 14));
        ctx.font = `600 ${fontSize}px 'Space Grotesk', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = `rgba(${col},${Math.min(a * 2.2, 0.45)})`;
        ctx.fillText(label, x, y);
      }

      rafId = requestAnimationFrame(tick);
    };

    init();
    tick();

    const ro = new ResizeObserver(() => {
      const prevMobile = bubbles.length === 14;
      const nowMobile = isMobile();
      if (prevMobile !== nowMobile) {
        // Viewport category changed — reinitialise bubbles
        init();
      } else {
        resize();
      }
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full block"
    />
  );
}
