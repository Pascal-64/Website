# wiki/

Wiki-Bereich mit Kategorien, Artikeln und "Zuletzt hinzugefügt"-Liste.

## Struktur

- `page.tsx` — Hauptseite `/wiki` (Kategorien + RECENT-Liste)
- `wikiIndex.ts` — zentrale Metadaten aller Wiki-Artikel
- `ai-llm/` — Kategorie-Seite AI/LLM (Einträge kommen aus wikiIndex)
- `dev-notes/` — Kategorie-Seite Dev Notes (lädt live von GitHub)
- `workflow/` — Kategorie-Seite Workflow (statische Topics)
- `datenbanken/` — Kategorie-Seite Datenbanken (statische Topics)
- `[slug]/` — Einzelne Artikel-Seiten (TSX)

## wikiIndex.ts — wichtigste Datei

Enthält `WIKI_PAGES` (alle Artikel-Metadaten) und `getPagesWithCodes()`.

```ts
// Neuen Artikel eintragen:
{ title: "...", date: "YYYY-MM-DD", href: "/wiki/slug", category: "ai-llm" }
```

**Regeln:**
- `date` immer ISO `YYYY-MM-DD` — nie Anzeige-Format speichern
- Für Anzeige `displayDate` erzeugen (nicht `date` überschreiben)
- Kategorie-Seiten (`ai-llm`, `workflow`, etc.) kommen **nicht** in `WIKI_PAGES`
- Codes werden automatisch generiert (älteste pro Kategorie = 0001)

## Kategorie-Präfixe

| Kategorie | Präfix |
|---|---|
| ai-llm | WIKI |
| dev-notes | DEV |
| workflow | FLOW |
| systeme | SYS |
| web | WEB |

## Neuen Artikel hinzufügen
1. `app/wiki/[slug]/page.tsx` anlegen
2. Eintrag in `wikiIndex.ts` → `WIKI_PAGES`
3. Falls neue Kategorie: Kategorie-Seite + Präfix in `CATEGORY_PREFIX` ergänzen

## Upgrade-Pfad (noch nicht umgesetzt)
Wenn Wiki stark wächst: `content/wiki/*.md` mit YAML-Frontmatter + automatisches Einlesen via `fs` + `gray-matter`.
