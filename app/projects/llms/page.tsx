import Link from "next/link";
import { TopNavBar } from "../../components/TopNavBar";
import { SiteFooter } from "../../components/SiteFooter";
import { AnimatedSection } from "../../components/AnimatedSection";

const FEATURES = [
  {
    title: "Lokale Verarbeitung",
    body: "Alle Modelle laufen lokal ohne externe API-Abhängigkeiten. Vollständige Kontrolle über Daten, Latenz und Ressourcen — keine Cloud-Bindung.",
  },
  {
    title: "Strukturierte Workflows",
    body: "Definierte Abläufe für wiederkehrende LLM-Aufgaben: Eingabe normalisieren, Modell auswählen, Ausgabe strukturieren und weiterverarbeiten.",
  },
  {
    title: "System-Integration",
    body: "Praxisnahe Integration in bestehende Systeme und Abläufe. Schnittstellen zu internen Tools, Datenbanken und Automatisierungs-Pipelines.",
  },
  {
    title: "Modular & Erweiterbar",
    body: "Jede Anwendung ist als eigenständiges Modul aufgebaut. Neue Modelle oder Anwendungsfälle lassen sich ohne Eingriff in bestehende Logik hinzufügen.",
  },
];

const TECH = ["Python", "Ollama", "LangChain", "REST APIs", "Local LLMs", "Automation"];

export default function LlmsPage() {
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
            <div className="flex items-start gap-6 mb-6 animate-fade-up-1">
              <div className="w-14 h-14 flex items-center justify-center bg-tertiary-container text-tertiary rounded-sm shrink-0 mt-1">
                <span className="material-symbols-outlined text-2xl">dashboard</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none">
                LLM&apos;s
              </h1>
            </div>
            <p className="animate-fade-up-2 text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Individuelle Anwendungen rund um den Einsatz von Large Language Models. Fokus auf lokale
              Verarbeitung, strukturierte Workflows und praxisnahe Integration in bestehende Systeme
              und Abläufe.
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

        <section className="px-10 pb-32">
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
