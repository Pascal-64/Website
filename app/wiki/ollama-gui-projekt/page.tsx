import Link from "next/link";
import { TopNavBar } from "../../components/TopNavBar";
import { SiteFooter } from "../../components/SiteFooter";
import { AnimatedSection } from "../../components/AnimatedSection";
import { getPageCode } from "../wikiIndex";

const CODE = getPageCode("/wiki/ollama-gui-projekt");

const SECTIONS = [
  {
    title: "Motivation",
    body: "Ollama stellt lokale Sprachmodelle als REST-API bereit, bietet aber keine grafische Benutzeroberfläche. Ziel war eine einfache, konfigurierbare GUI, die verschiedene Modelle und Profile verwaltet und direkt im Browser bedienbar ist.",
  },
  {
    title: "Technologie",
    body: "Umgesetzt mit Streamlit als Frontend-Framework. Streamlit ermöglicht schnelle UI-Entwicklung in reinem Python ohne separate Frontend-Kenntnisse. Die Kommunikation mit Ollama läuft über dessen REST-API.",
  },
  {
    title: "Profile & Konfiguration",
    body: "Jedes Profil speichert Modell, System-Prompt, Temperatur und maximale Token-Anzahl. Profile lassen sich zur Laufzeit wechseln. Konfigurationen werden als JSON lokal gespeichert.",
  },
  {
    title: "Token-Tracking",
    body: "Jede Anfrage wird mit Input- und Output-Token protokolliert. Eine Session-Übersicht zeigt den kumulierten Verbrauch. Das hilft beim Vergleich von Modellen und beim Optimieren von Prompts auf Effizienz.",
  },
];

export default function OllamaGuiProjektPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center gap-6 mb-6 animate-fade-up-1">
              <span className="inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase">
                Wiki / AI & LLM
              </span>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                {CODE}
              </span>
            </div>
            <div className="flex items-start justify-between gap-6 mb-6 animate-fade-up-1">
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none">
                Ollama GUI Projekt
              </h1>
              <a
                href="https://github.com/Pascal-64/Ollama-GUI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-surface-container-high border border-outline-variant/30 hover:bg-surface-container-highest hover:border-secondary/40 hover:-translate-y-[2px] transition-all group shrink-0 mt-1"
              >
                <svg className="w-5 h-5 text-on-surface group-hover:text-secondary transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span className="font-headline text-xs font-bold tracking-[0.15em] text-on-surface group-hover:text-secondary transition-colors uppercase">
                  GitHub
                </span>
              </a>
            </div>
            <p className="animate-fade-up-2 text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Entwicklung einer Streamlit-Oberfläche für Ollama — von der Motivation über die
              Umsetzung bis zum fertigen Profil- und Token-Tracking-System.
            </p>
            <div className="mt-4 animate-fade-up-2 font-mono text-[10px] tracking-widest text-on-surface-variant/40 uppercase">
              2026.04.05
            </div>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <AnimatedSection className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Inhalt
              </h2>
            </AnimatedSection>
            <div className="space-y-1">
              {SECTIONS.map((s, i) => (
                <AnimatedSection
                  key={s.title}
                  delay={i * 80}
                  className="p-8 bg-surface-container-low border-l-2 border-primary/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default"
                >
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-3">{s.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{s.body}</p>
                </AnimatedSection>
              ))}
            </div>
            <div className="mt-12 flex flex-col md:flex-row gap-6">
              <Link
                href="/wiki/ai-llm"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline hover:-translate-y-[1px] transition-transform inline-block"
              >
                ← AI / LLM
              </Link>
              <Link
                href="/projects/ollama-gui"
                className="font-headline text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase hover:text-on-surface transition-colors inline-block"
              >
                → Projekt-Seite
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
