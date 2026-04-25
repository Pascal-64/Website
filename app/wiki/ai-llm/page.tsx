import Link from "next/link";
import { TopNavBar } from "../../components/TopNavBar";
import { SiteFooter } from "../../components/SiteFooter";
import { AnimatedSection } from "../../components/AnimatedSection";

const ENTRIES = [
  { code: "WIKI.0031", title: "Prompt Engineering", date: "2026.03.20", href: "/wiki/prompt-engineering" },
  { code: "WIKI.0030", title: "Ollama GUI Projekt", date: "2026.04.05", href: "/wiki/ollama-gui-projekt" },
  { code: "WIKI.0029", title: "Lokale Ollama Modelle als Agents", date: "2026.03.28", href: "/wiki/lokale-ollama-modelle-als-agents" },
];

const TOPICS = [
  "Ollama Setup",
  "Prompt Engineering Notes",
  "Tool-Use Patterns",
  "Lokale Modelle",
];

export default function AiLlmPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <span className="animate-fade-up-1 inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase mb-4">
              Wiki / Kategorie
            </span>
            <div className="flex items-start gap-6 mb-6 animate-fade-up-1">
              <div className="w-14 h-14 flex items-center justify-center bg-primary-container/30 text-primary rounded-sm shrink-0 mt-1">
                <span className="material-symbols-outlined text-2xl">smart_toy</span>
              </div>
              <div>
                <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-2">
                  AI / LLM
                </h1>
                <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                  4 entries
                </span>
              </div>
            </div>
            <p className="animate-fade-up-2 text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Erfahrungen, Setups und Techniken rund um den Einsatz von Large Language Models —
              lokal und produktionsnah.
            </p>
          </div>
        </section>

        <section className="px-10 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <AnimatedSection className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Einträge
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                Latest_First
              </span>
            </AnimatedSection>
            <AnimatedSection delay={80} className="divide-y divide-outline-variant/10 bg-surface-container-low">
              {ENTRIES.map((entry) => (
                <Link
                  key={entry.code}
                  href={entry.href}
                  className="flex items-center justify-between p-6 hover:bg-surface-container transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase w-20">
                      {entry.code}
                    </span>
                    <span className="font-headline font-medium text-on-surface">{entry.title}</span>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/40 uppercase">
                    {entry.date}
                  </span>
                </Link>
              ))}
            </AnimatedSection>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <AnimatedSection className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Themen
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                {TOPICS.length} topics
              </span>
            </AnimatedSection>
            <AnimatedSection delay={80} className="p-8 bg-surface-container-low border-l-2 border-primary">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {TOPICS.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <div className="mt-12">
              <Link
                href="/wiki"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline hover:-translate-y-[1px] transition-transform inline-block"
              >
                ← Zurück zum Wiki
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
