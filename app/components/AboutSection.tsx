'use client';

import { useRef, useState, useEffect } from 'react';
import { BubbleCanvas } from './BubbleCanvas';

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

const CAPABILITIES = [
  {
    icon: 'psychology',
    title: 'Local AI',
    body: ['Ollama ', 'Eigener Lokaler Agent', 'Prompt-Profile', 'Laufzeit- und Token-Metriken'],
    accentClass: 'border-l-secondary-container',
    accentStyle: 'var(--color-secondary-container)',
    iconClass: 'text-secondary',
  },
  {
    icon: 'hub',
    title: 'Knowledge Systems',
    body: ['LLM Wiki', 'Obsidian', 'Strukturierte Markdown-Basen', 'Machine Learning'],
    accentStyle: 'var(--color-tertiary)',
    iconClass: 'text-tertiary',
    id: 'automation',
  },
  {
    icon: 'web',
    title: 'Web Projects',
    body: ['Dashboard', 'Portfolio-Seite', 'Obsidian / Quartz', 'Ollama GUI'],
    accentStyle: 'var(--color-outline)',
    iconClass: 'text-outline',
  },
  {
    icon: 'auto_mode',
    title: 'Automation',
    body: ['Agent-Workflows', 'Gap-Filling-Pipeline', 'Build Automation', 'API-Integrationen'],
    accentStyle: 'var(--color-primary)',
    iconClass: 'text-primary',
  },
];

function CapabilityCard({ item, index }: { item: typeof CAPABILITIES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useReveal(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      id={item.id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderLeft: `2px solid ${item.accentStyle}`,
        background: hovered
          ? 'rgba(40, 42, 46, 0.55)'
          : 'rgba(26, 28, 32, 0.45)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'background 0.25s, transform 0.25s, backdrop-filter 0.25s',
        opacity: visible ? 1 : 0,
        animation: visible ? `fadeUp 0.5s ease ${index * 80}ms forwards` : 'none',
      }}
      className="p-8"
    >
      <span
        className={`material-symbols-outlined ${item.iconClass} mb-4 block`}
        style={{
          transition: 'transform 0.25s ease',
          transform: hovered ? 'translateX(-5px) scale(1.25)' : 'translateX(0) scale(1)',
        }}
      >
        {item.icon}
      </span>
      <h3 className="font-headline font-bold text-lg mb-2">{item.title}</h3>
      <ul className="text-sm text-on-surface-variant leading-relaxed space-y-1">
        {item.body.map((line) => (
          <li key={line} className="flex items-start gap-2">
            <span
              className={`mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-current ${item.iconClass}`}
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AboutSection() {
  const [sectionRef, sectionVisible] = useReveal(0.1);

  return (
    <section id="systems" className="relative w-full py-32 px-4 sm:px-6 md:px-10 bg-surface overflow-hidden">
      {/* Canvas background layer */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <BubbleCanvas />
      </div>

      {/* Top fade overlay — z-10 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '22%',
          background: 'linear-gradient(to bottom, var(--color-surface) 0%, transparent 100%)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom fade overlay — z-10 */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '22%',
          background: 'linear-gradient(to top, var(--color-surface) 0%, transparent 100%)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      {/* Content — z-20 */}
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="relative max-w-screen-xl mx-auto"
        style={{ opacity: sectionVisible ? 1 : 0, transition: 'opacity 0.6s', zIndex: 20 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase mb-8">
              About
            </h2>
            <div className="text-4xl font-headline font-medium text-on-surface leading-tight mb-6">
              Build. Fix . Optimize. Automate. Connect.
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Projekte rund um lokale KI, automatisierte Wissenssysteme und moderne Weboberflächen. Ollama-Workflows über Markdown-Wikis bis zu deploybaren Portfolio- und Dokumentationsseiten.
            </p>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CAPABILITIES.map((item, i) => (
              <CapabilityCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
