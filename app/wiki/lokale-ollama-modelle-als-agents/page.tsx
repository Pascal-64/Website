import Link from "next/link";
import { TopNavBar } from "../../components/TopNavBar";
import { SiteFooter } from "../../components/SiteFooter";

const SECTIONS = [
  {
    title: "Konzept: Modelle als Agents",
    body: "Lokale Ollama-Modelle lassen sich als Agents einsetzen, indem sie mit Tool-Use-Fähigkeiten ausgestattet werden. Das Modell entscheidet selbst, welche Tools es aufruft, um eine Aufgabe schrittweise zu lösen.",
  },
  {
    title: "Tool-Definitionen",
    body: "Tools werden als JSON-Schema-Definitionen an das Modell übergeben. Das Modell gibt strukturierte Tool-Calls zurück, die der Host-Code ausführt und deren Ergebnis wieder als Kontext einspeist.",
  },
  {
    title: "Modell-Auswahl",
    body: "Nicht jedes lokale Modell unterstützt Tool-Use zuverlässig. Llama 3.1, Mistral und Qwen2.5 zeigen gute Ergebnisse. Kleinere Modelle neigen dazu, das Tool-Format nicht korrekt einzuhalten.",
  },
  {
    title: "Praktische Grenzen",
    body: "Lokale Agents eignen sich für klar definierte, schrittweise Aufgaben mit wenigen Tools. Komplexe Multi-Step-Reasoning-Aufgaben mit vielen parallelen Tool-Calls überfordern kleinere Modelle schnell.",
  },
];

export default function LokaleOllamaModelleAlsAgentsPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center gap-6 mb-6">
              <span className="inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase">
                Wiki / AI & LLM
              </span>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                WIKI.0029
              </span>
            </div>
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-on-surface mb-6">
              Lokale Ollama Modelle als Agents
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Tool-Use mit lokalen Sprachmodellen: Konzept, Umsetzung, Modell-Auswahl und
              praktische Grenzen beim Einsatz als autonome Agents.
            </p>
            <div className="mt-4 font-mono text-[10px] tracking-widest text-on-surface-variant/40 uppercase">
              2026.03.28
            </div>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Inhalt
              </h2>
            </div>
            <div className="space-y-1">
              {SECTIONS.map((s) => (
                <div key={s.title} className="p-8 bg-surface-container-low border-l-2 border-primary/40">
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-3">{s.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col md:flex-row gap-6">
              <Link
                href="/wiki/ai-llm"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline"
              >
                ← AI / LLM
              </Link>
              <Link
                href="/wiki"
                className="font-headline text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase hover:text-on-surface transition-colors"
              >
                Wiki Übersicht
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
