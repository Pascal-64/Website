import Link from "next/link";
import { TopNavBar } from "../../components/TopNavBar";
import { SiteFooter } from "../../components/SiteFooter";
import { AnimatedSection } from "../../components/AnimatedSection";

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
                WIKI.0030
              </span>
            </div>
            <h1 className="animate-fade-up-1 font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6">
              Ollama GUI Projekt
            </h1>
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
