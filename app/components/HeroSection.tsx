'use client';

import dynamic from 'next/dynamic';

const HeadModel = dynamic(
  () => import('./HeadModel').then((m) => ({ default: m.HeadModel })),
  { ssr: false }
);

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
            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface leading-tight mb-5">
              Pascal Peters
            </h1>
             <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed mb-1">
              Softwareentwickler Backend
             </p>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed mb-10">
              LLMs
              <span className="text-primary opacity-50"> | </span>
              Machine Learning
              <span className="text-primary opacity-50"> | </span>
              APIs
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-primary text-on-primary px-8 py-4 font-headline font-bold uppercase text-sm tracking-widest rounded-sm hover:brightness-110 active:scale-95 transition-all"
              >
                Projekte ansehen
              </a>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-md" />
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
      </div>
    </section>
  );
}
