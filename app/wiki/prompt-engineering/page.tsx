import Link from "next/link";
import { TopNavBar } from "../../components/TopNavBar";
import { SiteFooter } from "../../components/SiteFooter";
import { AnimatedSection } from "../../components/AnimatedSection";

const SUBPAGES = [
  {
    href: "/wiki/prompt-engineering/basic-prompts",
    title: "Basic-Prompts",
    body: "Einfache, direkte Eingaben für klar begrenzte Aufgaben. Aufbau, Struktur und Grenzen.",
    accent: "border-primary/40",
  },
  {
    href: "/wiki/prompt-engineering/step-by-step-force",
    title: "Step by Step Force",
    body: "Schrittweise Bearbeitung komplexer Aufgaben für nachvollziehbare und vollständige Ergebnisse.",
    accent: "border-secondary/40",
  },
  {
    href: "/wiki/prompt-engineering/shot-prompts",
    title: "Shot-Prompts",
    body: "Zero-Shot, One-Shot und Few-Shot: Wie Beispiele die Qualität und Konsistenz steuern.",
    accent: "border-tertiary/40",
  },
];

const USECASES = [
  "Zusammenfassungen",
  "Textüberarbeitung",
  "Code-Erstellung",
  "Fehleranalyse",
  "Recherchevorbereitung",
  "Klassifikation",
  "Entscheidungsunterstützung",
  "Dokumentation",
  "Lernunterlagen",
  "Automatisierte Workflows",
];

export default function PromptEngineeringWikiPage() {
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
                WIKI.0031
              </span>
            </div>
            <h1 className="animate-fade-up-1 font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6">
              Prompt Engineering
            </h1>
            <p className="animate-fade-up-2 text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Prompt Engineering beschreibt die gezielte Formulierung von Eingaben für KI-Modelle,
              damit diese verlässliche, strukturierte und brauchbare Ergebnisse liefern.
            </p>
            <div className="mt-4 animate-fade-up-2 font-mono text-[10px] tracking-widest text-on-surface-variant/40 uppercase">
              2026.03.20
            </div>
          </div>
        </section>

        <section className="px-10 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <AnimatedSection className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Grundprinzip
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={80} className="p-8 bg-surface-container-low border-l-2 border-primary/40">
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Ein Prompt ist nicht nur eine einfache Frage. Ein guter Prompt enthält Kontext, Ziel,
                Rolle, Einschränkungen und ein gewünschtes Ausgabeformat. Dadurch versteht das Modell
                besser, was erwartet wird und wie die Antwort aufgebaut sein soll.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Je genauer Aufgabe, Kontext und Ausgabeformat beschrieben sind, desto besser kann ein
                Modell nutzbare Ergebnisse liefern.
              </p>
              <div className="mt-6">
                <p className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase mb-4">
                  Ein guter Prompt beantwortet:
                </p>
                <ul className="space-y-2">
                  {[
                    "Was ist die Aufgabe?",
                    "Für wen ist die Antwort gedacht?",
                    "Welche Informationen sind wichtig?",
                    "Was soll ignoriert werden?",
                    "In welchem Format soll die Antwort ausgegeben werden?",
                    "Wie ausführlich soll die Antwort sein?",
                    "Gibt es Beispiele oder feste Regeln?",
                  ].map((q) => (
                    <li key={q} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-secondary" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-10 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <AnimatedSection className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Techniken
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                {SUBPAGES.length} articles
              </span>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {SUBPAGES.map((p, i) => (
                <AnimatedSection key={p.title} delay={i * 80}>
                  <Link
                    href={p.href}
                    className={`block p-8 bg-surface-container-low border-l-2 ${p.accent} hover:bg-surface-container hover:-translate-y-[2px] transition-all`}
                  >
                    <h3 className="font-headline text-lg font-bold text-on-surface mb-3">{p.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{p.body}</p>
                    <span className="font-headline text-xs font-bold tracking-widest text-secondary uppercase hover:underline">
                      Lesen_
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <AnimatedSection className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Typische Einsatzbereiche
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={80} className="p-8 bg-surface-container-low border-l-2 border-tertiary/40">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {USECASES.map((u) => (
                  <li key={u} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-tertiary" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <div className="mt-12 flex flex-col md:flex-row gap-6">
              <Link
                href="/wiki/ai-llm"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline hover:-translate-y-[1px] transition-transform inline-block"
              >
                ← AI / LLM
              </Link>
              <Link
                href="/projects/prompt-engineering"
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
