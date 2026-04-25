'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const HeadModel = dynamic(
  () => import('./HeadModel').then((m) => ({ default: m.HeadModel })),
  { ssr: false }
);

const TYPING_LINES = ['Softwareentwickler Backend', 'LLMs | Machine Learning | APIs'];
const FULL_TEXT = TYPING_LINES.join('\n');
const TYPING_SPEED = 35;
const TYPING_DELAY = 400;

function TypingText() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(FULL_TEXT.slice(0, ++i));
        if (i >= FULL_TEXT.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, TYPING_SPEED);
      return () => clearInterval(interval);
    }, TYPING_DELAY);

    return () => clearTimeout(startTimer);
  }, []);

  return (
    <span style={{ whiteSpace: 'pre-line' }}>
      {displayed}
      {!done && (
        <span style={{ animation: 'blink 0.8s step-end infinite' }}>▌</span>
      )}
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative px-10 pt-48 pb-40 overflow-hidden bg-surface">
      <div className="absolute inset-0 z-0 opacity-80">
        <img
          alt=""
          aria-hidden
          className="w-full h-full object-cover saturate-150 contrast-125"
          src="/background.webp"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-transparent to-surface" />
      </div>

      <div className="relative z-20 max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-20 mb-12">
          <div className="flex-1">
            {/* #2 fade-up heading */}
            <h1 className="animate-fade-up-1 font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface leading-tight mb-5">
              Pascal Peters
            </h1>

            {/* #1 typing subtitle + #2 fade-up */}
            <p className="animate-fade-up-2 text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed mb-10">
              <TypingText />
            </p>

            <div className="animate-fade-up-3 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-primary text-on-primary px-8 py-4 font-headline font-bold uppercase text-sm tracking-widest rounded-sm hover:brightness-110 hover:scale-[1.03] active:scale-95 transition-all"
              >
                Projekte ansehen
              </a>
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-md" style={{ animation: 'borderPulse 3s ease infinite' }} />
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <HeadModel />
            </div>
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-2 bg-background/80 backdrop-blur-md px-3 py-1 border border-primary/20 rounded-full">
                <span className="flex h-1.5 w-1.5 rounded-full bg-secondary" />
                <span className="text-[8px] font-mono font-bold tracking-tighter text-on-surface/60 uppercase">
                  Verified_Admin
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* #3 scroll indicator */}
        <div className="flex items-center gap-3 mt-4" style={{ opacity: 0.4 }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, var(--color-secondary))' }} />
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-on-surface-variant">scroll</span>
        </div>
      </div>
    </section>
  );
}
