import Link from "next/link";
import { TopNavBar } from "../../components/TopNavBar";
import { SiteFooter } from "../../components/SiteFooter";
import { AnimatedSection } from "../../components/AnimatedSection";

const FEATURES = [
  {
    title: "Obsidian als Wissensbasis",
    body: "Alle Inhalte werden in Obsidian als Markdown-Dateien gepflegt. Verlinkungen, Tags und Ordnerstruktur bleiben erhalten und werden direkt in die Website übertragen.",
  },
  {
    title: "Quartz Static Site Generator",
    body: "Quartz wandelt den Obsidian-Vault automatisch in eine vollständig statische Website um — schnell, ohne Server, ohne Datenbank.",
  },
  {
    title: "Graph-Ansicht & Verlinkung",
    body: "Interaktive Graph-Ansicht visualisiert Verbindungen zwischen Notizen. Bidirektionale Links machen Zusammenhänge zwischen Themen auf einen Blick sichtbar.",
  },
  {
    title: "Volltextsuche & Navigation",
    body: "Eingebaute Volltextsuche und verschachtelte Sidebar-Navigation ermöglichen schnelles Auffinden von Inhalten ohne externe Abhängigkeiten.",
  },
  {
    title: "Täglicher Gap-Agent",
    body: "Ein automatisierter Agent prüft täglich den gesamten Vault auf inhaltliche Lücken, fehlende Verlinkungen und undokumentierte Bereiche. Ergebnisse werden strukturiert unter Tools/wiki-gaps festgehalten.",
  },
];

const TECH = ["Obsidian", "Quartz", "Markdown", "Static Site", "Git"];

export default function QuartzWikiPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center gap-6 mb-6 animate-fade-up-1">
              <span className="inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase">
                Project
              </span>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                2026.03
              </span>
            </div>
            <div className="flex items-start justify-between gap-6 mb-6 animate-fade-up-1">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 flex items-center justify-center bg-tertiary-container text-tertiary rounded-sm shrink-0 mt-1">
                  <span className="material-symbols-outlined text-2xl">auto_stories</span>
                </div>
                <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none">
                  Quartz Wiki
                </h1>
              </div>
              <a
                href="https://github.com/Pascal-64/quartz-wiki"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-surface-container-high border border-outline-variant/30 hover:bg-surface-container-highest hover:border-tertiary/40 hover:-translate-y-[2px] transition-all group shrink-0 mt-1"
              >
                <svg className="w-5 h-5 text-on-surface group-hover:text-tertiary transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span className="font-headline text-xs font-bold tracking-[0.15em] text-on-surface group-hover:text-tertiary transition-colors uppercase">
                  GitHub Repository
                </span>
              </a>
            </div>
            <p className="animate-fade-up-2 text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Persönliche Wissensdatenbank auf Basis von Obsidian und Quartz — strukturierte Markdown-Notizen,
              automatisch als statische Website publiziert mit Graph-Ansicht, Volltextsuche und verschachtelter Navigation.
            </p>
            <div className="flex flex-wrap gap-2 mt-8 animate-fade-up-2">
              {TECH.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-tertiary/5 border border-tertiary/20 text-[9px] font-bold text-tertiary rounded-sm uppercase tracking-widest"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-10 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <AnimatedSection className="flex items-baseline justify-between mb-6">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase">
                Live Preview
              </h2>
              <a
                href="https://website-wiki-quartz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-label text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-tertiary transition-colors"
              >
                <span className="material-symbols-outlined text-sm">open_in_new</span>
                website-wiki-quartz.vercel.app
              </a>
            </AnimatedSection>
            <AnimatedSection delay={80} className="bg-surface-container-low border-l-2 border-tertiary/40 p-2">
              <div className="relative w-full overflow-hidden rounded-sm" style={{ height: "680px" }}>
                <iframe
                  src="https://website-wiki-quartz.vercel.app/"
                  title="Quartz Wiki Live Preview"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <AnimatedSection className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase">
                Features
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                {FEATURES.length} modules
              </span>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {FEATURES.map((f, i) => (
                <AnimatedSection
                  key={f.title}
                  delay={i * 80}
                  className="p-8 bg-surface-container-low border-l-2 border-tertiary/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default"
                >
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{f.body}</p>
                </AnimatedSection>
              ))}
            </div>
            <div className="mt-12">
              <Link
                href="/#projects"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline hover:-translate-y-[1px] transition-transform inline-block"
              >
                ← Zurück zu den Projekten
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
