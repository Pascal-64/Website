import Link from "next/link";
import { TopNavBar } from "../../components/TopNavBar";
import { SiteFooter } from "../../components/SiteFooter";

const TOPICS = [
  "Tools",
  "Plan",
  "Execute",
  "Aufgabenpriorisierung",
  "Projektstruktur",
  "Ticketsysteme",
  "Code Review Prozess",
  "Release-Vorbereitung",
];

export default function WorkflowPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <span className="inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase mb-4">
              Wiki / Kategorie
            </span>
            <div className="flex items-start gap-6 mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-primary-container/30 text-secondary-container rounded-sm shrink-0 mt-1">
                <span className="material-symbols-outlined text-2xl">account_tree</span>
              </div>
              <div>
                <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-2">
                  Workflow
                </h1>
                <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                  8 entries
                </span>
              </div>
            </div>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Prozesse, Strukturen und Tools für effizientes Arbeiten. Von der Planung über die
              Ausführung bis zum abgeschlossenen Ergebnis.
            </p>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Themen
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                {TOPICS.length} topics
              </span>
            </div>
            <div className="p-8 bg-surface-container-low border-l-2 border-secondary-container">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {TOPICS.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-secondary" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12">
              <Link
                href="/wiki"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline"
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
