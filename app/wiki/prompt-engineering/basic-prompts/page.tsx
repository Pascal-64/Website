import Link from "next/link";
import { TopNavBar } from "../../../components/TopNavBar";
import { SiteFooter } from "../../../components/SiteFooter";
import { AnimatedSection } from "../../../components/AnimatedSection";

export default function BasicPromptsPage() {
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
              Basic-Prompts
            </h1>
            <p className="animate-fade-up-2 text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Einfache, direkte Eingaben an ein KI-Modell. Gut für klar begrenzte Aufgaben —
              mit dem richtigen Aufbau deutlich wirkungsvoller als eine einfache Frage.
            </p>
          </div>
        </section>

        <section className="px-10 pb-20">
          <div className="max-w-screen-xl mx-auto space-y-1">
            <AnimatedSection delay={0} className="p-8 bg-surface-container-low border-l-2 border-primary/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default">
              <h2 className="font-headline text-lg font-bold text-on-surface mb-3">Was ist ein Basic-Prompt?</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Basic-Prompts bestehen meist aus einer klaren Aufgabe ohne viele Zusatzregeln oder Beispiele.
                Sie funktionieren gut, wenn die Aufgabe eindeutig ist und wenig Kontext benötigt.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={80} className="p-8 bg-surface-container-low border-l-2 border-primary/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default">
              <h2 className="font-headline text-lg font-bold text-on-surface mb-3">Beispiel: Einfach</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                Dieser Prompt ist kurz und verständlich, lässt aber viele wichtige Punkte offen.
                Das Modell kennt nicht die Art des Dokuments, die gewünschte Länge, die Zielgruppe,
                den Schwerpunkt oder das Ausgabeformat.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-sm">
                <code className="text-sm text-secondary font-mono">Fasse dieses Dokument zusammen.</code>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={160} className="p-8 bg-surface-container-low border-l-2 border-secondary/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default">
              <h2 className="font-headline text-lg font-bold text-on-surface mb-3">Beispiel: Verbessert</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                Dieser Prompt enthält Dokumenttyp, Thema, Ausgabeformat, Zielgruppe und Fokus —
                das Modell kann deutlich präziser antworten.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-sm">
                <code className="text-sm text-secondary font-mono leading-relaxed">
                  Fasse diese 10-seitige wissenschaftliche Arbeit über erneuerbare Energien in 5 Stichpunkten
                  zusammen und konzentriere dich dabei auf die wichtigsten Erkenntnisse und Auswirkungen
                  für politische Entscheidungsträger.
                </code>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={240} className="p-8 bg-surface-container-low border-l-2 border-tertiary/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default">
              <h2 className="font-headline text-lg font-bold text-on-surface mb-3">Struktur eines guten Basic-Prompts</h2>
              <div className="space-y-3">
                <div className="bg-surface-container-lowest p-3 rounded-sm">
                  <code className="text-xs text-on-surface-variant/70 font-mono">Minimum: Aufgabe + Kontext + Ausgabeformat</code>
                </div>
                <div className="bg-surface-container-lowest p-3 rounded-sm">
                  <code className="text-xs text-secondary font-mono">Besser: Aufgabe + Kontext + Zielgruppe + Fokus + Ausgabeformat</code>
                </div>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed mt-4">
                Beispiel: <span className="text-on-surface font-medium">Erkläre neuronale Netzwerke für Einsteiger in 5 kurzen Abschnitten mit Fokus auf praktische Anwendungen.</span>
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <AnimatedSection delay={320} className="p-8 bg-surface-container-low border-l-2 border-tertiary/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default">
                <h2 className="font-headline text-lg font-bold text-on-surface mb-3">Vorteile</h2>
                <ul className="space-y-2">
                  {["Schnell formuliert", "Leicht verständlich", "Gut für einfache Aufgaben", "Ideal für erste Entwürfe", "Nützlich bei klar begrenzten Fragen"].map((v) => (
                    <li key={v} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-tertiary" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={400} className="p-8 bg-surface-container-low border-l-2 border-outline/40 hover:bg-surface-container hover:-translate-y-[2px] transition-all cursor-default">
                <h2 className="font-headline text-lg font-bold text-on-surface mb-3">Grenzen</h2>
                <ul className="space-y-2">
                  {["Mehrere Bedingungen gleichzeitig", "Exakt strukturiertes Ergebnis", "Komplexe Analysen", "Kontrollierte Zwischenschritte", "Reproduzierbare Ausgaben"].map((v) => (
                    <li key={v} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-outline" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <Link
                href="/wiki/prompt-engineering"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline hover:-translate-y-[1px] transition-transform inline-block"
              >
                ← Prompt Engineering
              </Link>
              <Link
                href="/wiki/prompt-engineering/step-by-step-force"
                className="font-headline text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase hover:text-on-surface transition-colors inline-block"
              >
                → Step by Step Force
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
