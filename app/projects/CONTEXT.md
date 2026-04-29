# projects/

Projektübersicht und einzelne Projekt-Detailseiten.

## Struktur

- `page.tsx` — Übersichtsseite `/projects` mit allen Projektkarten
- `ollama-gui/page.tsx` — Detailseite Ollama GUI
- `quartz-wiki/page.tsx` — Detailseite Quartz Wiki
- `prompt-engineering/page.tsx` — Detailseite Prompt Engineering
- `llms/page.tsx` — Detailseite LLMs

## Übersichtsseite (`page.tsx`)

Projekte sind als statisches `PROJECTS`-Array definiert mit:
- `index` (01, 02, ...), `icon`, `iconColor`, `iconBg`, `accentStyle`, `accentClass`
- `date` (YYYY.MM), `label`, `title`, `body`, `tech[]`, `href`, `image`

Karten-Layout: horizontales Split mit Bild rechts auf Desktop, gestapelt auf Mobile.

## Design-Regeln
- Hover: Karte wechselt zu `surface-container-high`, linke Akzentlinie (`border-l-2`) erscheint in jeweiliger Akzentfarbe
- Bilder: `/public/` Ordner, via `next/image`, festes Seitenverhältnis
- Tech-Tags: `rounded-full`, `tertiary-container` Hintergrund

## Neue Projekte hinzufügen
1. Eintrag ins `PROJECTS`-Array in `page.tsx`
2. Neuen Ordner `projects/[slug]/page.tsx` für Detailseite anlegen
