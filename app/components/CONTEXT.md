# components/

Geteilte UI-Komponenten für die gesamte Website.

## Komponenten-Übersicht

| Datei | Zweck |
|---|---|
| `TopNavBar.tsx` | Fixierte Glassmorphism-Navigation, blur-Hintergrund |
| `SiteFooter.tsx` | Footer mit Status-Indikator ("Available for Projects") |
| `HeroSection.tsx` | Einstiegsbereich mit 3D-Avatar, Name, CTA-Buttons |
| `AboutSection.tsx` | Persönlicher Abschnitt, Skills, Steckbrief |
| `ExperienceSection.tsx` | Timeline-artige Erfahrungsübersicht |
| `ProjectsSection.tsx` | Projekt-Karten auf der Startseite |
| `ContactSection.tsx` | Kontaktbereich mit Links/Icons |
| `AnimatedSection.tsx` | Wrapper für scroll-basierte Einblend-Animationen (nutzt `useReveal`) |
| `BubbleCanvas.tsx` | Animierter Hintergrund mit schwebenden Partikeln (Canvas) |
| `HeadModel.tsx` | 3D-Kopfmodell via Three.js/React Three Fiber, folgt Cursor |
| `TelemetrySection.tsx` | Technische Kennzahlen / Dashboard-Elemente |

## Wichtige Regeln
- `AnimatedSection` ist `'use client'` — wird für alle scroll-animierten Bereiche verwendet
- `HeadModel` ist `'use client'` und benötigt dynamischen Import mit `ssr: false`
- `BubbleCanvas` ist ebenfalls `'use client'`
- Kein direkter State in Server Components — alle interaktiven Teile in Client-Komponenten auslagern

## Design
- Farben ausschließlich über CSS-Variablen aus dem Design System (DESIGN.md)
- Keine festen Borders — Trennung über Hintergrundfarb-Wechsel (No-Line Rule)
- Hover-Effekte: `hover:bg-surface-container` + `hover:-translate-y-[2px]`
