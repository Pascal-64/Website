import Link from "next/link";
import { TopNavBar } from "../../../components/TopNavBar";
import { SiteFooter } from "../../../components/SiteFooter";

export default function ShotPromptsPage() {
  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center gap-6 mb-6">
              <span className="inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase">
                Wiki / Prompt Engineering
              </span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-6">
              Shot-Prompts
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Zero-Shot, One-Shot und Few-Shot: Wie viele Beispiele einem Modell gegeben werden,
              bestimmt maßgeblich Qualität, Stil und Konsistenz der Ausgabe.
            </p>
          </div>
        </section>

        <section className="px-10 pb-20">
          <div className="max-w-screen-xl mx-auto space-y-1">

            <div className="p-8 bg-surface-container-low border-l-2 border-outline/40">
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="font-headline text-lg font-bold text-on-surface">Zero-Shot</h2>
                <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">0 Beispiele</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                Das Modell erhält keine Beispiele. Es bekommt nur die Aufgabe und soll direkt antworten.
                Geeignet für einfache, klare Aufgaben ohne Spezialformat.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-sm mb-3">
                <code className="text-sm text-secondary font-mono leading-relaxed whitespace-pre-line">
                  {`Klassifiziere den Ton dieses Satzes als positiv, negativ oder neutral:\n\nDas Produkt ist in Ordnung, aber ich hatte mehr erwartet.`}
                </code>
              </div>
              <div className="bg-surface-container-lowest p-3 rounded-sm">
                <code className="text-xs text-on-surface-variant/60 font-mono">→ Ausgabe: Neutral</code>
              </div>
              <div className="mt-4">
                <p className="font-headline text-xs font-bold tracking-[0.2em] text-on-surface-variant/50 uppercase mb-2">Grenzen</p>
                <ul className="space-y-1">
                  {["Gewünschtes Format sehr speziell", "Aufgabe ist mehrdeutig", "Beispiele zur Abgrenzung fehlen"].map((l) => (
                    <li key={l} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-outline" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-8 bg-surface-container-low border-l-2 border-secondary/40">
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="font-headline text-lg font-bold text-on-surface">One-Shot</h2>
                <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">1 Beispiel</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                Das Modell erhält ein einzelnes Beispiel, das Ausgabeformat, Stil oder Logik zeigt.
                Gut für klar abgrenzbare Kategorien.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-sm">
                <code className="text-sm text-secondary font-mono leading-relaxed whitespace-pre-line">
                  {`Beispiel:\nSatz: Der Service war hervorragend.\nTon: Positiv\n\nAufgabe:\nSatz: Das Produkt ist in Ordnung, aber ich hatte mehr erwartet.\nTon:`}
                </code>
              </div>
              <div className="bg-surface-container-lowest p-3 rounded-sm mt-2">
                <code className="text-xs text-on-surface-variant/60 font-mono">→ Ausgabe: Neutral</code>
              </div>
            </div>

            <div className="p-8 bg-surface-container-low border-l-2 border-primary/40">
              <div className="flex items-baseline justify-between mb-3">
                <h2 className="font-headline text-lg font-bold text-on-surface">Few-Shot</h2>
                <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">Mehrere Beispiele</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                Das Modell erhält mehrere Beispiele und erkennt dadurch Muster, Stil und Struktur.
                Deutlich zuverlässiger wenn Format, Stil oder Bewertungskriterien wichtig sind.
              </p>
              <div className="bg-surface-container-lowest p-4 rounded-sm mb-4">
                <code className="text-sm text-secondary font-mono leading-relaxed whitespace-pre-line">
                  {`Klassifiziere den Ton dieses Satzes als positiv, negativ oder neutral.\n\nBeispiele:\nSatz: Das Produkt ist in Ordnung, aber ich hatte mehr erwartet.\nTon: Neutral\n\nSatz: Ich war enttäuscht, es hätte mehr Funktionen haben müssen.\nTon: Negativ\n\nSatz: Der Service war angemessen, weder gut noch schlecht.\nTon: Neutral\n\nAufgabe:\nSatz: Das Produkt ist in Ordnung, aber ich hatte mehr erwartet.\nTon:`}
                </code>
              </div>
              <p className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase mb-3">
                Nützlich wenn:
              </p>
              <ul className="space-y-2">
                {["Ein bestimmter Stil eingehalten werden soll", "Kategorien klar abgegrenzt werden müssen", "Das Ausgabeformat exakt sein soll", "Konsistenz wichtig ist"].map((u) => (
                  <li key={u} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-surface-container-low border-l-2 border-tertiary/40">
              <h2 className="font-headline text-lg font-bold text-on-surface mb-6">Vergleich</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-outline-variant/10">
                      <th className="text-left font-headline text-xs tracking-widest text-on-surface-variant/50 uppercase pb-3 pr-8">Methode</th>
                      <th className="text-right font-headline text-xs tracking-widest text-on-surface-variant/50 uppercase pb-3 pr-8">Beispiele</th>
                      <th className="text-left font-headline text-xs tracking-widest text-on-surface-variant/50 uppercase pb-3">Geeignet für</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    {[
                      { method: "Zero-Shot", count: "0", use: "Einfache Aufgaben" },
                      { method: "One-Shot", count: "1", use: "Format zeigen" },
                      { method: "Few-Shot", count: "mehrere", use: "Muster, Stil und Konsistenz" },
                    ].map((row) => (
                      <tr key={row.method}>
                        <td className="py-3 pr-8 font-headline font-medium text-on-surface">{row.method}</td>
                        <td className="py-3 pr-8 text-right font-mono text-on-surface-variant/70">{row.count}</td>
                        <td className="py-3 text-on-surface-variant">{row.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <Link
                href="/wiki/prompt-engineering/step-by-step-force"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline"
              >
                ← Step by Step Force
              </Link>
              <Link
                href="/wiki/prompt-engineering"
                className="font-headline text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase hover:text-on-surface transition-colors"
              >
                Prompt Engineering Übersicht
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
