import Link from "next/link";
import { TopNavBar } from "../components/TopNavBar";
import { SiteFooter } from "../components/SiteFooter";

const CATEGORIES = [
  {
    icon: "terminal",
    title: "Dev Notes",
    count: "12",
    accent: "border-tertiary",
    items: [
      "Spring Boot Quickstart",
      "JUnit Testing Patterns",
      "Ollama Projekte",
    ],
  },
  {
    icon: "account_tree",
    title: "Workflow",
    count: "8",
    accent: "border-secondary-container",
    items: [
      "Tools",
      "Plan",
      "Execute",
    ],
  },
  {
    icon: "storage",
    title: "Datenbanken",
    count: "6",
    accent: "border-outline",
    items: [
      "SQL Performance Tuning",
      "assaa",
      "aasass",
    ],
  },
  {
    icon: "smart_toy",
    title: "AI / LLM",
    count: "4",
    accent: "border-primary",
    items: [
      "Ollama Setup",
      "Prompt Engineering Notes",
      "Tool-Use Patterns",
    ],
  },
];

const RECENT = [
  { code: "DEV.0042", title: "Spring Boot: Graceful Shutdown", date: "2026.04.18" },
  { code: "POS.0031", title: "TSE-Ausfall Handling", date: "2026.04.12" },
  { code: "DB.0019", title: "Indexing Strategien für Buchungsdaten", date: "2026.04.05" },
  { code: "AI.0008", title: "Ollama mit eigenem Modell", date: "2026.03.28" },
];

export default function WikiPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <span className="inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase mb-4">
              Knowledge Base
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6">
              Wiki
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Sammlung an Erfahrungen, Lernmaterial, Notizen und technischen Referenzen
            </p>
          </div>
        </section>

        <section className="px-10 pb-24">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Kategorien
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                {CATEGORIES.length} sections
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {CATEGORIES.map((cat) => (
                <article
                  key={cat.title}
                  className={`p-10 bg-surface-container-low border-l-2 ${cat.accent} hover:bg-surface-container transition-all`}
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary-container/30 text-primary rounded-sm">
                      <span className="material-symbols-outlined">{cat.icon}</span>
                    </div>
                    <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                      {cat.count} entries
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-6">
                    {cat.title}
                  </h3>
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-on-surface-variant"
                      >
                        <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Zuletzt hinzugefügt
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                Latest_Entries
              </span>
            </div>
            <div className="divide-y divide-outline-variant/10 bg-surface-container-low">
              {RECENT.map((entry) => (
                <div
                  key={entry.code}
                  className="flex items-center justify-between p-6 hover:bg-surface-container transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase w-20">
                      {entry.code}
                    </span>
                    <span className="font-headline font-medium text-on-surface">
                      {entry.title}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/40 uppercase">
                    {entry.date}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline"
              >
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
