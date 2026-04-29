Frage:
wäre es eine überlegung wert wie bspw in meinem website projekt jz pro "großer" seite und logik bzw viel code ein eigenes .md file zu erstellen damit in weiteren sessions kontext vorhanden ist?

Plan:
Ja, das ist definitiv eine Überlegung wert. Für dein Website-Projekt sogar besonders, weil du viele Bereiche hast, die nicht nur „Text“ sind, sondern eigene Logik, Layout-Regeln und Designentscheidungen haben.

Der klassische Fehler wäre: alles nur im Code lassen und bei jeder neuen Session wieder erklären müssen. Besser ist eine kleine Projekt-Wissensschicht als Markdown.

Empfehlung

Lege pro größerem Bereich ein eigenes .md an, aber nicht für jede Kleinigkeit. Sinnvoll ist es bei Seiten/Features mit eigener Logik oder wiederkehrenden Problemen.

Beispielstruktur:

90_admin/
  context/
    website-overview.md
    wiki-page.md
    hero-avatar.md
    navigation-layout.md
    project-cards.md
    responsive-rules.md
    design-system.md
    deployment-vercel.md

Oder direkt näher am Code:

docs/
  website/
    overview.md
    wiki.md
    responsive-layout.md
    3d-avatar.md
    vercel-deployment.md

Ich würde für dein Projekt eher nehmen:

90_admin/context/

Warum? Weil Claude Code/Codex/Agents dann einen klaren Ort für Kontextdateien haben, ohne dass es mit normalen Website-Inhalten verwechselt wird.

Was pro Datei rein sollte

Nicht zu viel Fließtext. Eher kurze, harte Fakten:

# Wiki-Seite Kontext

## Zweck
Die Seite `/wiki` zeigt Kategorien, aktuelle Artikel und verlinkt auf einzelne Wiki-Seiten.

## Wichtige Dateien
- `app/wiki/page.tsx` — Hauptseite
- `app/wiki/wikiIndex.ts` — zentrale Metadaten für Wiki-Artikel
- `app/wiki/[slug]/page.tsx` — einzelne Artikel-Seiten

## Aktuelle Architektur
- Wiki-Artikel werden aktuell als TSX-Seiten gepflegt.
- Die Liste "Zuletzt hinzugefügt" wird aus `WIKI_PAGES` generiert.
- Kategorie-Seiten sind keine Artikel und stehen nicht in `WIKI_PAGES`.

## Regeln
- Keine Metadaten aus `page.tsx` importieren.
- Neue Artikel müssen in `wikiIndex.ts` eingetragen werden.
- `date` bleibt ISO `YYYY-MM-DD`.
- Für Anzeige `displayDate` erzeugen, nicht `date` überschreiben.

## Bekannte Probleme
- Bei vielen Artikeln wäre Markdown/Frontmatter langfristig besser.
- Aktuell ist manuelles Eintragen in `wikiIndex.ts` akzeptiert.

## Nächste mögliche Verbesserung
- `content/wiki/*.md` mit Frontmatter und automatischem Einlesen.
Welche Dateien ich konkret anlegen würde

Für dein Website-Projekt:

90_admin/context/website-overview.md

Zentrale Projektbeschreibung: Zweck, Tech-Stack, Deployment, Designrichtung.

90_admin/context/design-system.md

Farben, Typografie, Abstände, Kartenstil, Hover-Effekte, mobile Regeln.

90_admin/context/responsive-layout.md

Alle Mobile-Fixes: NavBar, Profilbereich, Bubble-Hintergrund, Ausblenden rechter Daten auf kleinen Screens.

90_admin/context/wiki-system.md

Alles zu /wiki, Kategorien, wikiIndex.ts, späterer Markdown-Upgrade-Pfad.

90_admin/context/hero-avatar-3d.md

3D Avatar, GLB/GLTF, Cursor-Following, Transparenz, Modellanzeige.

90_admin/context/projects-section.md

Projektkarten, Hover-Hintergründe, Texte, Kennzahlen, Bildseitenverhältnis.

90_admin/context/deployment-vercel.md

Vercel-Projekte, Links zwischen Website und Wiki, Routing, Domains.

Wichtig: keine Dokumentations-Hölle bauen

Nicht für jede Komponente eine eigene Datei. Das wird sonst unübersichtlich.

Schlechte Struktur:

Button.md
Card.md
SectionTitle.md
ImageHover.md
Container.md

Besser:

design-system.md
responsive-layout.md
projects-section.md
wiki-system.md

Also nach Bereich/Logik, nicht nach jeder Datei.

Noch besser: Startdatei für Agents

Lege zusätzlich eine zentrale Einstieg-Datei an:

90_admin/AGENT_CONTEXT.md

Inhalt:

# Agent Context

Dieses Projekt ist die persönliche Website/Portfolio-Seite.

## Vor jeder größeren Änderung lesen
- `90_admin/context/website-overview.md`
- `90_admin/context/design-system.md`
- `90_admin/context/responsive-layout.md`

## Bei Wiki-Aufgaben zusätzlich lesen
- `90_admin/context/wiki-system.md`

## Bei Avatar/3D-Aufgaben zusätzlich lesen
- `90_admin/context/hero-avatar-3d.md`

## Arbeitsregeln
- Keine großen Refactorings ohne Grund.
- Bestehendes Design beibehalten.
- Mobile Layouts immer prüfen.
- Änderungen klein und nachvollziehbar halten.
- Nach Änderung `npm run build` ausführen.

Das hilft Claude Code enorm, weil du nicht jedes Mal alle Dateien manuell erklären musst.

Fazit

Ja, machen.

Aber kompakt und gezielt:

90_admin/AGENT_CONTEXT.md
90_admin/context/website-overview.md
90_admin/context/design-system.md
90_admin/context/responsive-layout.md
90_admin/context/wiki-system.md
90_admin/context/hero-avatar-3d.md
90_admin/context/deployment-vercel.md

Das ist für zukünftige Sessions deutlich besser als jedes Mal neu zu erklären, warum bestimmte Layout-Fixes existieren oder wie /wiki gedacht ist.