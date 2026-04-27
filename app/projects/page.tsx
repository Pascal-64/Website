import Image from "next/image";
import Link from "next/link";
import { TopNavBar } from "../components/TopNavBar";
import { SiteFooter } from "../components/SiteFooter";
import { AnimatedSection } from "../components/AnimatedSection";

const PROJECTS = [
  {
    index: '01',
    icon: 'query_stats',
    iconColor: 'var(--color-primary)',
    iconBg: 'rgba(0,59,92,0.4)',
    accentStyle: 'var(--color-primary)',
    accentClass: 'border-primary',
    date: '2026.04',
    label: 'Local AI',
    title: 'Ollama GUI',
    body: 'Streamlit-Oberfläche für lokale Ollama-Modelle mit flexiblen Profilen und Modi, integriertem Token-Tracking, strukturierter Profilverwaltung sowie erweiterten Funktionen zur Steuerung, Ausführung und Analyse.',
    tech: ['Python', 'Streamlit', 'Ollama', 'REST API', 'Local AI'],
    href: '/projects/ollama-gui',
    image: '/OllamaGUI.png',
  },
  {
    index: '02',
    icon: 'auto_stories',
    iconColor: 'var(--color-tertiary)',
    iconBg: 'rgba(0,64,45,0.4)',
    accentStyle: 'var(--color-tertiary)',
    accentClass: 'border-tertiary',
    date: '2026.03',
    label: 'Knowledge System',
    title: 'Quartz Wiki',
    body: 'Persönliche Wissensdatenbank auf Basis von Obsidian und Quartz — strukturierte Markdown-Notizen, automatisch als statische Website publiziert mit Graph-Ansicht, Volltextsuche und verschachtelter Navigation.',
    tech: ['Obsidian', 'Quartz', 'Markdown', 'Static Site', 'Git'],
    href: '/projects/quartz-wiki',
    image: '/QuartzWiki.png',
  },
  {
    index: '03',
    icon: 'settings_suggest',
    iconColor: 'var(--color-secondary)',
    iconBg: 'rgba(0,178,214,0.12)',
    accentStyle: 'var(--color-secondary)',
    accentClass: 'border-secondary',
    date: '2026.01',
    label: 'AI Tooling',
    title: 'Prompt-Engineering',
    body: 'Konzeption und Optimierung von Prompts für reproduzierbare Ergebnisse. Klare Strukturen, definierte Abläufe und gezielte Steuerung von Modellverhalten für konkrete Anwendungsfälle.',
    tech: ['LLM', 'Claude', 'Ollama', 'Markdown', 'Prompt Design'],
    href: '/projects/prompt-engineering',
    image: '/PromptEngineering.png',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">

        {/* Hero */}
        <section className="px-10 pt-48 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <span className="animate-fade-up-1 inline-block font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-4">
              Selected Work
            </span>
            <div className="flex items-end justify-between gap-6">
              <h1 className="animate-fade-up-1 font-headline text-5xl md:text-8xl font-bold tracking-tighter text-on-surface leading-none">
                Projekte
              </h1>
              <span className="animate-fade-up-2 font-mono text-[10px] tracking-widest text-on-surface-variant/40 uppercase mb-3">
                {PROJECTS.length} projects
              </span>
            </div>
          </div>
        </section>

        {/* Project list */}
        <section className="pb-40">
          <div className="max-w-screen-xl mx-auto space-y-2 px-10">
            {PROJECTS.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 100}>
                <Link
                  href={p.href}
                  className={`group block bg-surface-container-low border-l-2 ${p.accentClass} hover:bg-surface-container transition-colors duration-300`}
                >
                  {/* Top meta bar */}
                  <div className="flex items-center justify-between px-10 pt-8 pb-6 border-b border-outline-variant/10">
                    <div className="flex items-center gap-6">
                      <span
                        className="font-mono text-xs tracking-widest text-on-surface-variant/40"
                      >
                        {p.index}
                      </span>
                      <span
                        className="font-headline text-[10px] font-bold tracking-[0.2em] uppercase"
                        style={{ color: p.accentStyle }}
                      >
                        {p.label}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/40 uppercase">
                      {p.date}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

                    {/* Info column */}
                    <div className="lg:col-span-4 px-10 py-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className="w-12 h-12 flex items-center justify-center rounded-sm shrink-0"
                            style={{ background: p.iconBg }}
                          >
                            <span
                              className="material-symbols-outlined"
                              style={{ color: p.iconColor }}
                            >
                              {p.icon}
                            </span>
                          </div>
                          <h2 className="font-headline text-3xl font-bold text-on-surface tracking-tight">
                            {p.title}
                          </h2>
                        </div>
                        <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                          {p.body}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded-sm"
                              style={{
                                background: `color-mix(in srgb, ${p.accentStyle} 8%, transparent)`,
                                border: `1px solid color-mix(in srgb, ${p.accentStyle} 25%, transparent)`,
                                color: p.accentStyle,
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-10">
                        <span
                          className="font-headline text-xs font-bold tracking-widest uppercase group-hover:underline transition-all"
                          style={{ color: p.accentStyle }}
                        >
                          Details →
                        </span>
                      </div>
                    </div>

                    {/* Image column */}
                    <div className="lg:col-span-8 relative overflow-hidden" style={{ minHeight: '360px' }}>
                      <Image
                        src={p.image}
                        alt={`${p.title} Screenshot`}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                      />
                      {/* left fade into info column */}
                      <div
                        className="absolute inset-y-0 left-0 w-24 pointer-events-none"
                        style={{
                          background: 'linear-gradient(to right, var(--color-surface-container-low), transparent)',
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Footer nav */}
        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <Link
              href="/"
              className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline hover:-translate-y-[1px] transition-transform inline-block"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
