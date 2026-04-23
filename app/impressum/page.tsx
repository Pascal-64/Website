import Link from "next/link";
import { TopNavBar } from "../components/TopNavBar";
import { SiteFooter } from "../components/SiteFooter";

const SECTIONS = [
  {
    code: "§ 5 TMG",
    title: "Angaben gemäß § 5 TMG",
    body: (
      <p className="text-on-surface">
        Pascal Peters
        <br />
        Auf dem Brennen 15
        <br />
        58730, Fröndenberg/Ruhr
        <br />
        Deutschland
      </p>
    ),
  },
  {
    code: "Contact",
    title: "Kontakt",
    body: (
      <p>
        E-Mail:{" "}
        <a
          href="mailto:contact@pascalpeters.info"
          className="text-secondary hover:underline"
        >
          contact@pascalpeters.info
        </a>
      </p>
    ),
  },
  {
    code: "§ 55 RStV",
    title: "Verantwortlich für den Inhalt",
    body: <p className="text-on-surface">Pascal Peters (Anschrift wie oben)</p>,
  },
  {
    code: "Disclaimer",
    title: "Haftungsausschluss",
    body: (
      <p>
        Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
        Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
        Verweise und Links auf externe Webseiten Dritter liegen außerhalb unseres
        Verantwortungsbereichs.
      </p>
    ),
  },
  {
    code: "Copyright",
    title: "Urheberrecht",
    body: (
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke unterliegen dem deutschen
        Urheberrecht. Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des
        Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors.
      </p>
    ),
  },
];

export default function ImpressumPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase mb-4">
              Legal Notice
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-on-surface mb-6">
              Impressum
            </h1>
            <p className="text-on-surface-variant leading-relaxed">
              Pflichtangaben nach § 5 TMG und § 55 Abs. 2 RStV.
            </p>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-3xl mx-auto space-y-1">
            {SECTIONS.map((section) => (
              <article
                key={section.title}
                className="p-8 bg-surface-container-low border-l-2 border-primary/40"
              >
                <div className="flex items-baseline justify-between mb-4 gap-4">
                  <h2 className="font-headline text-lg font-bold text-on-surface">
                    {section.title}
                  </h2>
                  <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase shrink-0">
                    {section.code}
                  </span>
                </div>
                <div className="text-sm text-on-surface-variant leading-relaxed">
                  {section.body}
                </div>
              </article>
            ))}

            <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <Link
                href="/"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline"
              >
                ← Zurück zur Startseite
              </Link>
              <Link
                href="/datenschutz"
                className="font-headline text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase hover:text-on-surface transition-colors"
              >
                → Datenschutzerklärung
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
