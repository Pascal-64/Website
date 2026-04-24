import Link from "next/link";
import { TopNavBar } from "../../components/TopNavBar";
import { SiteFooter } from "../../components/SiteFooter";

const SECTIONS = [
  {
    title: "Überblick",
    body: "Obsidian als lokales Knowledge-Management-System. Alle Notizen liegen als Markdown-Dateien im Dateisystem — kein Cloud-Zwang, keine proprietären Formate. Vollständige Kontrolle über Struktur und Inhalt.",
  },
  {
    title: "Vault-Struktur",
    body: "Der Vault ist in thematische Ordner aufgeteilt: Themen, Projekte, Referenzen und ein Inbox-Ordner für unstrukturierte Notizen. Tags und interne Links verbinden Einträge über Ordnergrenzen hinweg.",
  },
  {
    title: "Plugins & Erweiterungen",
    body: "Dataview für datenbankähnliche Abfragen, Templater für wiederverwendbare Notizvorlagen und Obsidian Git für automatische Backups ins lokale Git-Repository.",
  },
  {
    title: "Workflow",
    body: "Neue Inhalte landen zuerst in der Inbox. Täglich werden Einträge bewertet, verschlagwortet und in die finale Struktur verschoben. Wöchentliche Überprüfung der offenen Links und verwaisten Notizen.",
  },
];

export default function ObsidianVaultWikiPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center gap-6 mb-6">
              <span className="inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase">
                Wiki / Dev Notes
              </span>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                DEV.0042
              </span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6">
              Obsidian Vault Wiki
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Aufbau und Struktur eines lokalen Wissens-Vaults mit Obsidian. Workflow, Plugins
              und Dateistruktur für nachhaltige Dokumentation. Alles visualisiert mit Quartz im Web
            </p>
            <div className="mt-4 font-mono text-[10px] tracking-widest text-on-surface-variant/40 uppercase">
              2026.04.18
            </div>
          </div>
        </section>

        <section className="px-10 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Inhalt
              </h2>
            </div>
            <div className="space-y-1">
              {SECTIONS.map((s) => (
                <div key={s.title} className="p-8 bg-surface-container-low border-l-2 border-tertiary/40">
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-3">{s.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-10 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Live Preview
              </h2>
              <a
                href="https://website-wiki-quartz.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-label text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-sm">open_in_new</span>
                website-wiki-quartz.vercel.app
              </a>
            </div>
            <div className="bg-surface-container-low border-l-2 border-tertiary/40 p-2">
              <div className="relative w-full overflow-hidden rounded-sm" style={{ height: "680px" }}>
                <iframe
                  src="https://website-wiki-quartz.vercel.app/"
                  title="Wiki Quartz Preview"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-col md:flex-row gap-6">
                <Link
                  href="/wiki/dev-notes"
                  className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline"
                >
                  ← Dev Notes
                </Link>
                <Link
                  href="/wiki"
                  className="font-headline text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase hover:text-on-surface transition-colors"
                >
                  Wiki Übersicht
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
