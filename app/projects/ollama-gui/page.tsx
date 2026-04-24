import Link from "next/link";
import Image from "next/image";
import { TopNavBar } from "../../components/TopNavBar";
import { SiteFooter } from "../../components/SiteFooter";

const FEATURES = [
  {
    title: "Flexible Profile & Modi",
    body: "Konfigurierbare Profile für verschiedene Anwendungsfälle und Modi ermöglichen einen flexiblen Einsatz unterschiedlicher Modelle und Parameter ohne manuelle Neukonfiguration.",
  },
  {
    title: "Token-Tracking",
    body: "Integriertes Token-Tracking gibt Einblick in den Ressourcenverbrauch pro Session und hilft bei der Optimierung von Prompt-Kosten und Modellauslastung.",
  },
  {
    title: "Strukturierte Profilverwaltung",
    body: "Gespeicherte Konfigurationsprofile lassen sich jederzeit laden, anpassen und exportieren. Schnelles Wechseln zwischen Setups ohne Datenverlust.",
  },
  {
    title: "Erweiterte Analyse",
    body: "Erweiterte Funktionen zur Steuerung, Ausführung und Auswertung von Modell-Antworten — direkt in der Oberfläche, ohne externe Tools.",
  },
];

const TECH = ["Python", "Streamlit", "Ollama", "REST API", "Local AI"];

export default function OllamaGuiPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center gap-6 mb-6">
              <span className="inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase">
                Project
              </span>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                2026.04
              </span>
            </div>
            <div className="flex items-start gap-6 mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-primary-container text-primary rounded-sm shrink-0 mt-1">
                <span className="material-symbols-outlined text-2xl">query_stats</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none">
                Ollama GUI
              </h1>
            </div>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Streamlit-Oberfläche für lokale Ollama-Modelle mit flexiblen Profilen und Modi, integriertem
              Token-Tracking, strukturierter Profilverwaltung sowie erweiterten Funktionen zur Steuerung,
              Ausführung und Analyse.
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
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
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Preview
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                Screenshot
              </span>
            </div>
            <div className="bg-surface-container-low border-l-2 border-primary/40 p-2">
              <div className="relative w-full overflow-hidden rounded-sm">
                <Image
                  src="/OllamaGUI.png"
                  alt="Ollama GUI Screenshot"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Features
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                {FEATURES.length} modules
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="p-8 bg-surface-container-low border-l-2 border-primary/40"
                >
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-3">
                    {f.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Link
                href="/#projects"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline"
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
