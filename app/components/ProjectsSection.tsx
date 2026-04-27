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
    bgImage: '/OllamaGUI.png',
  },
  {
    icon: 'auto_stories',
    iconBg: 'rgba(0,64,45,0.4)',
    iconColor: 'var(--color-tertiary)',
    date: '2026.03',
    title: 'Quartz Wiki',
    body: 'Persönliche Wissensdatenbank auf Basis von Obsidian und Quartz — strukturierte Markdown-Notizen, automatisch als statische Website publiziert mit Graph-Ansicht, Volltextsuche und verschachtelter Navigation.',
    href: '/projects/quartz-wiki',
    bgImage: '/QuartzWiki.png',
  },
  {
    icon: 'settings_suggest',
    iconBg: 'rgba(0,178,214,0.12)',
    iconColor: 'var(--color-secondary)',
    date: '2026.01',
    title: 'Prompt-Engineering',
    body: 'Konzeption und Optimierung von Prompts für reproduzierbare Ergebnisse. Klare Strukturen, definierte Abläufe und gezielte Steuerung von Modellverhalten für konkrete Anwendungsfälle.',
    href: '/projects/prompt-engineering',
    bgImage: '/PromptEngineering.png',
  },
];

function ProjectCard({
  project,
  index,
  onMouseEnter,
  onMouseLeave,
  isActive,
}: {
  project: typeof PROJECTS[0];
  index: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isActive: boolean;
}) {
  const [ref, visible] = useReveal(0.1);

  return (
    <Link
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={project.href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="group block relative overflow-hidden p-10 cursor-pointer"
      style={{
        background: isActive ? 'var(--color-surface-container-high)' : 'var(--color-surface-container-low)',
        transform: isActive ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'background 0.2s, transform 0.2s',
        opacity: visible ? 1 : 0,
        animation: visible ? `fadeUp 0.6s ease ${index * 120}ms forwards` : 'none',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {isActive && (
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
            transform: isActive ? 'scale(1.1) rotate(3deg)' : 'scale(1) rotate(0deg)',
          }}
        >
          <span className="material-symbols-outlined" style={{ color: project.iconColor }}>
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
        style={{ textDecoration: isActive ? 'underline' : 'none' }}
      >
        Details_
      </span>
    </Link>
  );
}

export function ProjectsSection() {
  const [headingRef, headingVisible] = useReveal(0.3);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative bg-surface py-32 px-10 overflow-hidden">
      {/* Per-project background image layers */}
      {PROJECTS.map((p, i) => (
        <div
          key={i}
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${p.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: activeIndex === i ? 0.28 : 0,
            transition: 'opacity 0.5s ease',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Dark overlay to keep cards readable */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(17,19,24,0.55)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto" style={{ zIndex: 2 }}>
        <h2
          ref={headingRef as React.RefObject<HTMLHeadingElement>}
          className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-16"
          style={{ opacity: headingVisible ? 1 : 0, transition: 'opacity 0.6s' }}
        >
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isActive={activeIndex === i}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
