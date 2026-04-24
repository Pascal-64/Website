# pascalpeters.dev

Persönliche Portfolio-Website von Pascal Peters — Softwareentwickler mit Fokus auf Backend, LLMs und Prompt Engineering.

Gebaut mit **Next.js 15** (App Router), **Tailwind CSS** und dem Design System **Structural Calm**.

---

## Stack

| Technologie | Zweck |
|---|---|
| Next.js 15 | Framework (App Router, Static Export) |
| Tailwind CSS v4 | Styling |
| Three.js / React Three Fiber | 3D-Kopfmodell in der Hero Section |
| Space Grotesk / Inter | Schriften (Headline / Body) |
| Material Symbols | Icons |

---

## Seitenstruktur

```
/                          → Startseite (Hero, Profil, Projekte, Kontakt)
/wiki                      → Wiki-Übersicht (Kategorien & letzte Einträge)
/wiki/dev-notes            → Kategorie: Dev Notes
/wiki/workflow             → Kategorie: Workflow
/wiki/datenbanken          → Kategorie: Datenbanken
/wiki/ai-llm               → Kategorie: AI / LLM
/wiki/obsidian-vault-wiki  → Eintrag: Obsidian Vault Wiki (inkl. Live-Preview)
/wiki/ollama-gui-projekt   → Eintrag: Ollama GUI Projekt
/wiki/lokale-ollama-modelle-als-agents → Eintrag: Lokale Ollama Modelle als Agents
/wiki/prompt-engineering               → Eintrag: Prompt Engineering (Index)
/wiki/prompt-engineering/basic-prompts
/wiki/prompt-engineering/step-by-step-force
/wiki/prompt-engineering/shot-prompts
/projects/ollama-gui       → Projektseite: Ollama GUI
/projects/llms             → Projektseite: LLMs
/projects/prompt-engineering → Projektseite: Prompt Engineering
/impressum                 → Impressum & Datenschutz
/datenschutz               → Datenschutzerklärung
```

---

## Design System

Das Projekt verwendet das Design System **Structural Calm** (Dokumentation in `DESIGN.md`).

Kernprinzipien:
- Dark Mode (`background: #111318`)
- Tiefenstaffelung über Surface-Tokens statt Borders
- Space Grotesk für Headlines, Inter für Body-Text
- Keine runden Ecken (max. `rounded-sm`) für strukturelle Elemente
- Akzentfarben: Primary `#a0cbf3` · Secondary `#4cd6fb` · Tertiary `#62dcaf`

---

## Verwandte Projekte

- **Wiki (Quartz):** [website-wiki-quartz.vercel.app](https://website-wiki-quartz.vercel.app/) — Obsidian Vault als statische Wiki-Site

---

## Local Development

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```
