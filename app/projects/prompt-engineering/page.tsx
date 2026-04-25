import Link from "next/link";
import { TopNavBar } from "../../components/TopNavBar";
import { SiteFooter } from "../../components/SiteFooter";
import { AnimatedSection } from "../../components/AnimatedSection";

const FEATURES = [
  {
    title: "Reproduzierbare Ergebnisse",
    body: "Durch klare Prompt-Strukturen und definierte Ausgabeformate lassen sich Modell-Antworten zuverlässig reproduzieren — unabhängig von Session oder Kontext.",
  },
  {
    title: "Techniken & Muster",
    body: "Systematische Sammlung von Prompt-Techniken: Zero-Shot, Few-Shot, Chain-of-Thought, Step-by-Step Force und weitere strukturierte Ansätze für komplexe Aufgaben.",
  },
  {
    title: "Modellverhalten steuern",
    body: "Gezielte Formulierungen und Constraints steuern Ton, Länge, Format und Detailtiefe der Antworten. Modell-Verhalten wird planbar statt zufällig.",
  },
  {
    title: "Konkrete Anwendungsfälle",
    body: "Erprobte Prompt-Templates für Code-Review, Dokumentation, Analyse, Klassifikation und automatisierte Workflows — direkt einsetzbar.",
  },
];

const TECH = ["Prompt Engineering", "Zero-Shot", "Few-Shot", "Chain of Thought", "LLMs", "Ollama"];

export default function PromptEngineeringProjectPage() {
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
                2026.01
              </span>
            </div>
            <div className="flex items-start gap-6 mb-6 animate-fade-up-1">
              <div className="w-14 h-14 flex items-center justify-center bg-secondary-container text-on-secondary rounded-sm shrink-0 mt-1">
                <span className="material-symbols-outlined text-2xl">settings_suggest</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none">
                Prompt&#8209;Engineering
              </h1>
            </div>
            <p className="animate-fade-up-2 text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Konzeption und Optimierung von Prompts für reproduzierbare Ergebnisse. Klare Strukturen,
              definierte Abläufe und gezielte Steuerung von Modellverhalten für konkrete Anwendungsfälle.
            </p>
            <div className="flex flex-wrap gap-2 mt-8 animate-fade-up-2">
              {TECH.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-secondary/5 border border-secondary/20 text-[9px] font-bold text-secondary rounded-sm uppercase tracking-widest"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-10 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <AnimatedSection className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Schwerpunkte
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
                  className="p-8 bg-surface-container-low border-l-2 border-secondary/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default"
                >
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{f.body}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <AnimatedSection className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Wiki-Einträge
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                Knowledge Base
              </span>
            </AnimatedSection>
            <AnimatedSection delay={80} className="divide-y divide-outline-variant/10 bg-surface-container-low">
              <Link
                href="/wiki/prompt-engineering"
                className="flex items-center justify-between p-6 hover:bg-surface-container transition-colors"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase w-24">
                    WIKI.0031
                  </span>
                  <span className="font-headline font-medium text-on-surface">Prompt Engineering</span>
                </div>
                <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/40 uppercase">
                  2026.03.20
                </span>
              </Link>
            </AnimatedSection>
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
