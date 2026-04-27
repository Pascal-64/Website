'use client';

import { useRef, useState, useEffect } from 'react';

function useReveal(threshold = 0.2) {
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

const TIMELINE = [
  {
    title: "POS Software & Onlineshop",
    level: "2025 – heute",
    body: "KiK Textilien und Non-Food GmbH.",
    tags: ["Administrator", "Testing", "SQL"],
  },
  {
    title: "Fachinformatiker für Anwendungsentwicklung",
    level: "Sep – Dez 2024",
    body: "Christliches Klinikum Unna gGmbH",
    tags: ["3rd Lvl Support", "Java", "Backend"],
  },
  {
    title: "Auszubildender Fachinformatiker Anwendungsentwicklung",
    level: "2021 – Jun 2024",
    body: "Finanz Informatik GmbH & Co. KG.",
    tags: ["Java", "JUnit", "Backend", "Spring Boot", "Mockito"],
  },
];

function TimelineEntry({ entry, isLast, index }: {
  entry: typeof TIMELINE[0];
  isLast: boolean;
  index: number;
}) {
  const [ref, visible] = useReveal(0.2);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative flex items-start min-w-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ${index * 100}ms, transform 0.6s ${index * 100}ms`,
      }}
    >
      {/* #4 vertical connector line */}
      {!isLast && (
        <div className="absolute left-[7px] top-4 bottom-[-96px] w-[2px] bg-secondary/15" />
      )}

      {/* #5 timeline dot with pulse ring */}
      <div
        className="relative z-10 w-4 h-4 rounded-full bg-secondary border-4 border-surface mt-2 mr-10 shrink-0"
        style={{ boxShadow: '0 0 12px rgba(76,214,251,0.5)' }}
      >
        <div
          className="absolute rounded-full border border-secondary/30"
          style={{
            inset: -4,
            animation: 'revealPulse 2s ease infinite',
          }}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4 mb-4 min-w-0">
          <h3 className="font-headline text-xl sm:text-2xl font-bold text-on-surface flex-1 min-w-0">
            {entry.title}
          </h3>
          <span className="hidden md:block text-[14px] font-mono tracking-widest text-on-surface-variant/40 uppercase shrink-0 pt-1 whitespace-nowrap">
            {entry.level}
          </span>
        </div>
        <p className="text-on-surface-variant leading-relaxed mb-6 max-w-2xl">
          {entry.body}
        </p>
        <div className="flex flex-wrap gap-2 max-w-full min-w-0">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex px-2.5 sm:px-3 py-1 bg-secondary/5 border border-secondary/20 text-[8px] sm:text-[9px] font-bold text-secondary rounded-sm uppercase tracking-widest"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const [headingRef, headingVisible] = useReveal(0.3);

  return (
    <section id="experience" className="relative py-32 px-10 bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <h2
          ref={headingRef as React.RefObject<HTMLHeadingElement>}
          className="font-headline text-center text-4xl font-bold tracking-tight text-on-surface mb-24"
          style={{
            opacity: headingVisible ? 1 : 0,
            transition: 'opacity 0.6s',
          }}
        >
          Profil
        </h2>
        <div className="space-y-24 max-w-5xl mx-auto">
          {TIMELINE.map((entry, index) => (
            <TimelineEntry
              key={entry.title}
              entry={entry}
              isLast={index === TIMELINE.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
