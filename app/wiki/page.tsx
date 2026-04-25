import Link from "next/link";
import { TopNavBar } from "../components/TopNavBar";
import { SiteFooter } from "../components/SiteFooter";
import { AnimatedSection } from "../components/AnimatedSection";

const CATEGORIES = [
  {
    icon: "terminal",
    title: "Dev Notes",
    count: "12",
    accent: "border-tertiary",
    href: "/wiki/dev-notes",
    items: [
      "Ollama Projekte",
      "JUnit Testing Patterns",
      "Web Projekte",
    ],
  },
  {
    icon: "account_tree",
    title: "Workflow",
    count: "8",
    accent: "border-secondary-container",
    href: "/wiki/workflow",
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
    href: "/wiki/datenbanken",
    items: [
      "SQL Performance Tuning",
      "Backup & Recovery",
      "NoSQL vs SQL",
    ],
  },
  {
    icon: "smart_toy",
    title: "AI / LLM",
    count: "4",
    accent: "border-primary",
    href: "/wiki/ai-llm",
    items: [
      "Ollama Setup",
      "Prompt Engineering Notes",
      "Tool-Use Patterns",
    ],
  },
];

const RECENT = [
  { code: "DEV.0042", title: "Obsidian Vault Wiki", date: "2026.04", href: "/wiki/obsidian-vault-wiki" },
  { code: "WIKI.0031", title: "Ollama GUI Projekt", date: "2026.04", href: "/wiki/ollama-gui-projekt" },
  { code: "WIKI.0030", title: "Prompt Engineering", date: "2026.03", href: "/wiki/prompt-engineering" },
  { code: "WIKI.0029", title: "Lokale Ollama Modelle als Agents", date: "2026.03", href: "/wiki/lokale-ollama-modelle-als-agents" },
];

export default function WikiPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <span className="animate-fade-up-1 inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase mb-4">
              Knowledge Base
            </span>
            <h1 className="animate-fade-up-1 font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6">
              Wiki
            </h1>
            <p className="animate-fade-up-2 text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Sammlung an Erfahrungen, Lernmaterial, Notizen und technischen Referenzen
            </p>
          </div>
        </section>

        <section className="px-10 pb-24">
          <div className="max-w-screen-xl mx-auto">
            <AnimatedSection className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Projekte
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                {CATEGORIES.length} sections
              </span>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {CATEGORIES.map((cat, i) => (
                <AnimatedSection key={cat.title} delay={i * 80}>
                  <Link
                    href={cat.href}
                    className={`block p-10 bg-surface-container-low border-l-2 ${cat.accent} hover:bg-surface-container hover:-translate-y-[2px] transition-all`}
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
                Zuletzt hinzugefügt
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                Latest_Entries
              </span>
            </AnimatedSection>
            <AnimatedSection delay={80} className="divide-y divide-outline-variant/10 bg-surface-container-low">
              {RECENT.map((entry) => (
                <Link
                  key={entry.code}
                  href={entry.href}
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
                </Link>
              ))}
            </AnimatedSection>
            <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <Link
                href="/"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline hover:-translate-y-[1px] transition-transform inline-block"
              >
                ← Zurück zur Startseite
              </Link>
              <a
                href="https://website-wiki-quartz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-label text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors bg-surface-container-low px-4 py-2 rounded-sm border border-primary/10 hover:border-primary/30"
              >
                <span className="material-symbols-outlined text-base">open_in_new</span>
                Wiki_Quartz →
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
