'use client';

import { useEffect, useRef } from 'react';

const TERMS = [
  'API', 'Java', 'SQL', 'LLM', 'REST', 'Spring', 'Ollama',
  'JSON', 'SAP', 'POS', 'JVM', 'HTTP', 'JDBC', 'OAuth',
  'Git', 'CI/CD', 'Docker', 'Linux', 'Bash', 'Log',
  'AI', 'RAG', 'CLI', 'XML', 'SOAP', 'JPA', 'MVP',
];

const PALETTE: [number, number, number][] = [
  [160, 203, 243], // primary
  [76,  214, 251], // secondary
  [98,  220, 175], // tertiary
  [130, 180, 220], // muted primary
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

function spawn(w: number, h: number, startY?: number): Bubble {
  const label = TERMS[Math.floor(Math.random() * TERMS.length)];
  const radius = Math.max(label.length * 5.5 + 12, 28) + Math.random() * 10;
  const [r, g, b] = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  return {
    x: Math.random() * w,
    y: startY ?? h + radius,
    radius,
    vx: (Math.random() - 0.5) * 0.15,
    vy: -(Math.random() * 0.18 + 0.05),
    baseOpacity: Math.random() * 0.22 + 0.06,
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

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const init = () => {
      resize();
      bubbles = Array.from({ length: 38 }, () =>
        spawn(canvas.width, canvas.height, Math.random() * canvas.height)
      );
    };

    const tick = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const t = Date.now() * 0.001;

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        b.x += b.vx + Math.sin(t * 0.4 + b.phase) * 0.12;
        b.y += b.vy;

        if (b.y + b.radius < 0) {
          bubbles[i] = spawn(width, height);
          continue;
        }

        const { r, g, bl: _bl, baseOpacity: a, radius, x, y, label } = {
          ...b,
          bl: b.b,
        };
        const col = `${b.r},${b.g},${b.b}`;

        // circle stroke
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${col},${a})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();

        // inner radial fill
        const grad = ctx.createRadialGradient(
          x - radius * 0.28, y - radius * 0.28, 0,
          x, y, radius
        );
        grad.addColorStop(0, `rgba(${col},${a * 0.5})`);
        grad.addColorStop(1, `rgba(${col},0)`);
        ctx.fillStyle = grad;
        ctx.fill();

        // label text
        const fontSize = Math.max(9, Math.min(radius * 0.45, 14));
        ctx.font = `600 ${fontSize}px 'Space Grotesk', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = `rgba(${col},${Math.min(a * 2.2, 0.55)})`;
        ctx.fillText(label, x, y);
      }

      rafId = requestAnimationFrame(tick);
    };

    init();
    tick();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
}
