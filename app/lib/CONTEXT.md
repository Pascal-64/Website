# lib/

Utility-Funktionen und Hilfsbibliotheken.

## github.ts

Fetcht GitHub-Repositories und README-Inhalte von der GitHub API.

**Exports:**
- `fetchRepos(count?)` — holt die neuesten Repos von `Pascal-64`, sortiert nach `pushed_at`
- `fetchRepoReadme(repoName)` — holt README und gibt ersten sinnvollen Absatz zurück
- `formatRepoDate(iso)` — ISO-Datum → `YYYY.MM.DD`
- Interface `GitHubRepo`

**Wichtig:**
- Nutzt `next: { revalidate: 3600 }` (ISR, 1h Cache)
- Optionaler `GITHUB_TOKEN` via `.env` für höhere Rate-Limits
- Bei API-Fehler: leeres Array / null — keine Crashes
- Wird in `dev-notes/page.tsx` und `wiki/page.tsx` (für Kategorie-Items) genutzt

## Neue Utilities
Weitere Hilfsfunktionen hier ablegen. Keine React-Komponenten, nur reine TS-Logik.
