# pascalpeters.dev

Persönliche Portfolio-Website von Pascal Peters — Softwareentwickler mit Fokus auf Local AI, Knowledge Systems, Web Projects und Automation.

Gebaut mit **Next.js 15** (App Router), **Tailwind CSS v4** und dem Design System **Structural Calm**.

---

## Stack

| Technologie | Zweck |
|---|---|
| Next.js 15 | Framework (App Router) |
| Tailwind CSS v4 | Styling |
| Three.js / React Three Fiber | 3D-Kopfmodell in der Hero Section |
| Space Grotesk / Inter | Schriften (Headline / Body) |
| Material Symbols | Icons |
| Canvas API | Animierter Bubble-Hintergrund (About Section) |

---

## Seitenstruktur

```
/                                              → Startseite
│  ├── HeroSection                             → Intro, 3D-Modell, Typing-Animation
│  ├── AboutSection                            → Capabilities-Cards mit Bubble-Canvas
│  ├── ExperienceSection                       → Timeline (Berufserfahrung)
│  ├── ProjectsSection                         → Selected Projects mit Hover-Hintergrund
│  └── ContactSection                          → Links + Shimmer-Headline
│
/projects                                      → Projektübersicht
/projects/ollama-gui                           → Ollama GUI (Streamlit, Local AI)
/projects/quartz-wiki                          → Quartz Wiki (Obsidian + Static Site)
/projects/prompt-engineering                   → Prompt Engineering
│
/wiki                                          → Wiki-Übersicht (Projekte + Kategorien)
/wiki/dev-notes                                → Kategorie: Dev Notes
/wiki/workflow                                 → Kategorie: Workflow
/wiki/datenbanken                              → Kategorie: Datenbanken
/wiki/ai-llm                                   → Kategorie: AI / LLM
/wiki/obsidian-vault-wiki                      → Eintrag: Obsidian Vault Wiki (Live-Preview)
/wiki/ollama-gui-projekt                       → Eintrag: Ollama GUI Projekt
/wiki/lokale-ollama-modelle-als-agents         → Eintrag: Lokale Ollama Modelle als Agents
/wiki/prompt-engineering                       → Eintrag: Prompt Engineering (Index)
/wiki/prompt-engineering/basic-prompts         → Basic Prompts
/wiki/prompt-engineering/step-by-step-force    → Step-by-Step Force
/wiki/prompt-engineering/shot-prompts          → Shot Prompts
│
/impressum                                     → Impressum
/datenschutz                                   → Datenschutzerklärung
```

---

## Komponenten

| Komponente | Beschreibung |
|---|---|
| `TopNavBar` | Fixed Glassmorphism-Navbar, responsiv (mobile: `left-4 right-4`) |
| `HeroSection` | Hero mit Background-Bild, 3D-Kopf, Typing-Animation |
| `AboutSection` | Capabilities-Cards über animiertem Bubble-Canvas-Hintergrund |
| `BubbleCanvas` | Canvas-Animation mit Tech-Begriff-Bubbles, mobile-responsiv |
| `ExperienceSection` | Berufliche Timeline mit Dot-Connector |
| `ProjectsSection` | Projektkarten mit hover-basiertem Hintergrundwechsel |
| `ContactSection` | Kontaktlinks, Shimmer-Loop-Animation auf Headline |
| `AnimatedSection` | Scroll-Reveal-Wrapper (IntersectionObserver) |
| `SiteFooter` | Footer mit System-Status-Indikator |

---

## Design System

Das Projekt verwendet das Design System **Structural Calm** (Details in `DESIGN.md`).

Kernprinzipien:
- Dark Mode (`background: #111318`)
- Tiefenstaffelung über Surface-Tokens statt Borders
- Space Grotesk für Headlines, Inter für Body-Text
- Keine runden Ecken (max. `rounded-sm`) für strukturelle Elemente
- Akzentfarben: Primary `#a0cbf3` · Secondary `#4cd6fb` · Tertiary `#62dcaf`
- Glassmorphism für schwebende Elemente (`backdrop-blur`, semi-transparente Backgrounds)

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
