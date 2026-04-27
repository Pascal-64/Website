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

const LINKS = [
  { icon: 'mail', label: 'EMAIL', href: 'mailto:pascalpeters3001@gmail.com' },
  { icon: 'link', label: 'LINKEDIN', href: 'https://www.linkedin.com/in/pascal-peters-662a87218/' },
  { icon: 'code', label: 'GITHUB', href: 'https://github.com/Pascal-64/' },
];

function ContactLink({ link, index }: { link: typeof LINKS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useReveal(0.2);

  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3"
      style={{
        color: hovered ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
        textDecoration: 'none',
        transition: 'color 0.15s, transform 0.2s',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        opacity: visible ? 1 : 0,
        animation: visible ? `fadeUp 0.6s ease ${index * 100}ms forwards` : 'none',
      }}
    >
      <span className="material-symbols-outlined">{link.icon}</span>
      <span className="font-headline font-bold text-sm tracking-widest uppercase">
        {link.label}
      </span>
    </a>
  );
}

export function ContactSection() {
  const [headingRef, headingVisible] = useReveal(0.3);

  return (
    <section id="contact" className="py-32 px-10 bg-surface">
      <style>{`
        @keyframes text-shimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
      <div className="max-w-screen-xl mx-auto text-center">
        <h2
          ref={headingRef as React.RefObject<HTMLHeadingElement>}
          className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-12"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s, transform 0.7s',
          }}
        >
          Bereit für
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg, #00B4D8 0%, #00B4D8 30%, #a8eeff 50%, #00B4D8 70%, #00B4D8 100%)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              animation: 'text-shimmer 7s linear infinite',
            }}
          >
            Optimierungen?
          </span>
        </h2>
        {/* #14 staggered link reveal */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {LINKS.map((link, i) => (
            <ContactLink key={link.label} link={link} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
