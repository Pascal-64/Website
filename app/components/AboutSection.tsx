'use client';

import { useRef, useState, useEffect } from 'react';

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
    icon: 'point_of_sale',
    title: 'POS Systeme',
    body: ['Fiskal- & Länderanforderungen', 'Kassensysteme Tagesgeschäft', 'Deployment & Rollouts'],
    accentClass: 'border-l-secondary-container',
    accentStyle: 'var(--color-secondary-container)',
    iconClass: 'text-secondary',
  },
  {
    icon: 'terminal',
    title: 'Backend',
    body: ['Java', 'Spring Boot', 'Fehlerhandling & Stabilität'],
    accentStyle: 'var(--color-tertiary)',
    iconClass: 'text-tertiary',
    id: 'automation',
  },
  {
    icon: 'analytics',
    title: 'Datenbanken',
    body: ['Schnittstellen SAP', 'SQL', 'Buchungsdaten'],
    accentStyle: 'var(--color-outline)',
    iconClass: 'text-outline',
  },
  {
    icon: 'api',
    title: 'API',
    body: ['REST API Integration', 'POS ↔ Backend', 'Monitoring & Logging von Schnittstellen'],
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
        background: hovered ? 'var(--color-surface-container)' : 'var(--color-surface-container-low)',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'background 0.2s, transform 0.2s',
        opacity: visible ? 1 : 0,
        animation: visible ? `fadeUp 0.5s ease ${index * 80}ms forwards` : 'none',
      }}
      className="p-8"
    >
      {/* #12 icon scale on hover */}
      <span
        className={`material-symbols-outlined ${item.iconClass} mb-4 block`}
        style={{
          transition: 'transform 0.2s',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
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
    <section id="systems" className="relative py-32 px-10 bg-surface">
      {/* #11 scroll-reveal wrapper */}
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="max-w-screen-xl mx-auto"
        style={{ opacity: sectionVisible ? 1 : 0, transition: 'opacity 0.6s' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase mb-8">
              Überblick
            </h2>
            <div className="text-4xl font-headline font-medium text-on-surface leading-tight mb-6">
              Build. Fix. Improve
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Backend-Entwicklung, API-Integration und POS-Systeme — mit Fokus auf Stabilität, Performance und saubere Architektur.
            </p>
          </div>
          {/* #13 card lift + #12 icon scale applied in CapabilityCard */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-1">
            {CAPABILITIES.map((item, i) => (
              <CapabilityCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
