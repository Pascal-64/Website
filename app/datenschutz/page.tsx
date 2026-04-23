import Link from "next/link";
import { TopNavBar } from "../components/TopNavBar";
import { SiteFooter } from "../components/SiteFooter";

const SECTIONS = [
  {
    code: "01",
    title: "Allgemeines",
    body: (
      <p>
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln diese
        vertraulich sowie entsprechend der gesetzlichen Datenschutzvorschriften und
        dieser Datenschutzerklärung.
      </p>
    ),
  },
  {
    code: "02",
    title: "Verantwortlicher",
    body: (
      <p className="text-on-surface">
        Pascal Peters
        <br />
        58730, Fröndenberg/Ruhr
        <br />
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
    code: "03",
    title: "Server-Logfiles",
    body: (
      <p>
        Der Provider dieser Seite erhebt automatisch Informationen in sogenannten
        Server-Logfiles, die Ihr Browser an uns übermittelt. Dies sind: Browsertyp,
        Betriebssystem, Referrer-URL, Hostname, Uhrzeit und IP-Adresse. Diese Daten
        werden nicht mit anderen Datenquellen zusammengeführt.
      </p>
    ),
  },
  {
    code: "04",
    title: "Cookies",
    body: (
      <p>
        Diese Website verwendet ausschließlich technisch notwendige Cookies. Es findet
        kein Tracking durch Dritte und keine Analyse zu Marketingzwecken statt.
      </p>
    ),
  },
  {
    code: "05",
    title: "Externe Dienste",
    body: (
      <p>
        Verlinkte externe Dienste (z. B. LinkedIn, GitHub) werden erst nach expliziter
        Interaktion aufgerufen. Beim Besuch dieser Seiten gelten die dortigen
        Datenschutzbestimmungen.
      </p>
    ),
  },
  {
    code: "06",
    title: "Ihre Rechte",
    body: (
      <p>
        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder
        Einschränkung der Verarbeitung Ihrer gespeicherten personenbezogenen Daten sowie
        ein Widerspruchsrecht gegen die Verarbeitung und ein Recht auf
        Datenübertragbarkeit.
      </p>
    ),
  },
  {
    code: "07",
    title: "Stand",
    body: <p>Diese Datenschutzerklärung wurde zuletzt aktualisiert: April 2026.</p>,
  },
];

export default function DatenschutzPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase mb-4">
              Privacy Policy
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter text-on-surface mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-on-surface-variant leading-relaxed">
              Transparenz zu Daten, Zwecken und Rechten — gemäß DSGVO.
            </p>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-3xl mx-auto space-y-1">
            {SECTIONS.map((section) => (
              <article
                key={section.code}
                className="p-8 bg-surface-container-low border-l-2 border-tertiary/40"
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
                ←Zurück zur Startseite
              </Link>
              <Link
                href="/impressum"
                className="font-headline text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase hover:text-on-surface transition-colors"
              >
               Impressum→
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
