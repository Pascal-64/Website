'use client';

import Link from 'next/link';
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

const PROJECTS = [
  {
    icon: 'query_stats',
    iconBg: 'rgba(0,59,92,0.4)',
    iconColor: 'var(--color-primary)',
    date: '2026.04',
    title: 'Ollama GUI',
    body: 'Streamlit-Oberfläche für lokale Ollama-Modelle mit flexiblen Profilen und Modi, integriertem Token-Tracking, strukturierter Profilverwaltung sowie erweiterten Funktionen zur Steuerung, Ausführung und Analyse',
    href: '/projects/ollama-gui',
  },
  {
    icon: 'dashboard',
    iconBg: 'rgba(0,64,45,0.4)',
    iconColor: 'var(--color-tertiary)',
    date: '2026.03',
    title: "LLM's",
    body: 'Individuelle Anwendungen rund um den Einsatz von Large Language Models. Fokus auf lokale Verarbeitung, strukturierte Workflows und praxisnahe Integration in bestehende Systeme und Abläufe.',
    href: '/projects/llms',
  },
  {
    icon: 'settings_suggest',
    iconBg: 'rgba(0,178,214,0.12)',
    iconColor: 'var(--color-secondary)',
    date: '2026.01',
    title: 'Prompt-Engineering',
    body: 'Konzeption und Optimierung von Prompts für reproduzierbare Ergebnisse. Klare Strukturen, definierte Abläufe und gezielte Steuerung von Modellverhalten für konkrete Anwendungsfälle.',
    href: '/projects/prompt-engineering',
  },
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useReveal(0.1);

  return (
    <Link
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={project.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block relative overflow-hidden p-10 cursor-pointer"
      style={{
        background: hovered ? 'var(--color-surface-container-high)' : 'var(--color-surface-container-low)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'background 0.2s, transform 0.2s',
        opacity: visible ? 1 : 0,
        animation: visible ? `fadeUp 0.6s ease ${index * 120}ms forwards` : 'none',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {/* #8 shimmer on hover */}
      {hovered && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)',
            backgroundSize: '200% auto',
            animation: 'shimmer 0.8s linear',
          }}
        />
      )}

      <div className="flex justify-between items-start mb-12">
        {/* #9 icon rotation on hover */}
        <div
          style={{
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: project.iconBg,
            borderRadius: 'var(--radius-sm)',
            transition: 'transform 0.2s',
            transform: hovered ? 'scale(1.1) rotate(3deg)' : 'scale(1) rotate(0deg)',
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ color: project.iconColor }}
          >
            {project.icon}
          </span>
        </div>
        <span className="font-label text-[10px] tracking-widest text-on-surface-variant">
          {project.date}
        </span>
      </div>

      <h3 className="font-headline text-2xl font-bold mb-4">{project.title}</h3>
      <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">{project.body}</p>
      <span
        className="text-secondary font-headline font-bold text-xs tracking-widest uppercase"
        style={{ textDecoration: hovered ? 'underline' : 'none' }}
      >
        Details_
      </span>
    </Link>
  );
}

export function ProjectsSection() {
  const [headingRef, headingVisible] = useReveal(0.3);

  return (
    <section id="projects" className="bg-surface py-32 px-10">
      <div className="max-w-screen-xl mx-auto">
        <h2
          ref={headingRef as React.RefObject<HTMLHeadingElement>}
          className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-16"
          style={{ opacity: headingVisible ? 1 : 0, transition: 'opacity 0.6s' }}
        >
          Selected Projects
        </h2>
        {/* #7 staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
