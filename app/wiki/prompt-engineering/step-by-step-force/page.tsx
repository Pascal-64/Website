import Link from "next/link";
import { TopNavBar } from "../../../components/TopNavBar";
import { SiteFooter } from "../../../components/SiteFooter";
import { AnimatedSection } from "../../../components/AnimatedSection";

const USECASES = [
  "Komplexe Analysen",
  "Technische Erklärungen",
  "Code-Debugging",
  "Planung",
  "Entscheidungsfindung",
  "Dokumentenanalysen",
  "Aufgaben mit mehreren Bedingungen",
];

const ADVANTAGES = [
  "Nachvollziehbarkeit",
  "Vollständigkeit",
  "Struktur",
  "Qualität der Zwischenschritte",
  "Konsistenz bei komplexen Aufgaben",
];

const PHRASES = [
  "Gehe Schritt für Schritt vor.",
  "Bearbeite die Aufgabe in klar getrennten Schritten.",
  "Prüfe zuerst die Ausgangslage, dann die Ursachen und erst danach die Lösung.",
  "Erstelle zuerst eine Analyse, danach konkrete Maßnahmen.",
];

export default function StepByStepForcePage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center gap-6 mb-6 animate-fade-up-1">
              <span className="inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase">
                Wiki / Prompt Engineering
              </span>
            </div>
            <h1 className="animate-fade-up-1 font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6">
              Step by Step Force
            </h1>
            <p className="animate-fade-up-2 text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Eine Prompt-Technik, bei der das Modell gezielt angewiesen wird, eine Aufgabe
              schrittweise zu bearbeiten — für nachvollziehbare und vollständige Ergebnisse.
            </p>
          </div>
        </section>

        <section className="px-10 pb-20">
          <div className="max-w-screen-xl mx-auto space-y-1">
            <AnimatedSection delay={0} className="p-8 bg-surface-container-low border-l-2 border-secondary/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default">
              <h2 className="font-headline text-lg font-bold text-on-surface mb-3">Grundidee</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                Statt nur das Endergebnis zu verlangen, wird das Modell angewiesen, einzelne
                Arbeitsschritte nacheinander zu berücksichtigen. Das verhindert, dass das Modell
                wichtige Zwischenschritte überspringt oder schlecht begründete Antworten liefert.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-sm">
                <code className="text-sm text-secondary font-mono">
                  Gehe diese Aufgabe Schritt für Schritt an und überspringe keinen Schritt.
                </code>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={80} className="p-8 bg-surface-container-low border-l-2 border-secondary/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default">
              <h2 className="font-headline text-lg font-bold text-on-surface mb-3">Beispiel-Prompt</h2>
              <div className="bg-surface-container-lowest p-4 rounded-sm mb-4">
                <code className="text-sm text-secondary font-mono leading-relaxed whitespace-pre-line">
                  {`Fasse diese 10-seitige wissenschaftliche Arbeit über erneuerbare Energien\nin 5 Stichpunkten zusammen und konzentriere dich dabei auf die wichtigsten\nErkenntnisse und Auswirkungen für politische Entscheidungsträger.\n\nGehe diese Aufgabe Schritt für Schritt an und überspringe keinen Schritt.`}
                </code>
              </div>
              <p className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">
                Erwarteter Ablauf:
              </p>
              <ul className="space-y-2">
                {[
                  "Schritt 1: Identifiziere die wichtigsten Erkenntnisse aus der Arbeit.",
                  "Schritt 2: Erkläre, wie sich diese Erkenntnisse auf die Politik im Bereich erneuerbarer Energien auswirken.",
                  "Schritt 3: Schreibe eine Zusammenfassung in 5 Stichpunkten, wobei jeder Punkt eine Erkenntnis und deren politische Auswirkung behandelt.",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-secondary" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <AnimatedSection delay={160} className="p-8 bg-surface-container-low border-l-2 border-tertiary/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default">
                <h2 className="font-headline text-lg font-bold text-on-surface mb-3">Wann sinnvoll</h2>
                <ul className="space-y-2">
                  {USECASES.map((u) => (
                    <li key={u} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-tertiary" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={240} className="p-8 bg-surface-container-low border-l-2 border-primary/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default">
                <h2 className="font-headline text-lg font-bold text-on-surface mb-3">Vorteile</h2>
                <ul className="space-y-2">
                  {ADVANTAGES.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={320} className="p-8 bg-surface-container-low border-l-2 border-secondary/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default">
              <h2 className="font-headline text-lg font-bold text-on-surface mb-4">Bewährte Formulierungen</h2>
              <div className="space-y-2">
                {PHRASES.map((p) => (
                  <div key={p} className="bg-surface-container-lowest p-3 rounded-sm">
                    <code className="text-sm text-secondary font-mono">{p}</code>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <Link
                href="/wiki/prompt-engineering/basic-prompts"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline hover:-translate-y-[1px] transition-transform inline-block"
              >
                ← Basic-Prompts
              </Link>
              <Link
                href="/wiki/prompt-engineering/shot-prompts"
                className="font-headline text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase hover:text-on-surface transition-colors inline-block"
              >
                → Shot-Prompts
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
