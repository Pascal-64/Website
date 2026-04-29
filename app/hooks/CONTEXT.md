# hooks/

Client-seitige React Hooks.

## useReveal.ts

IntersectionObserver-Hook für scroll-basierte Einblend-Animationen.

```ts
const [ref, visible] = useReveal(threshold?);
```

- Gibt `ref` (auf Element setzen) und `visible` (boolean) zurück
- Feuert einmalig wenn Element in den Viewport kommt, dann `disconnect()`
- Default threshold: `0.15`
- Wird intern von `AnimatedSection` genutzt — direkte Verwendung selten nötig

## Neue Hooks
Weitere Hooks hier ablegen. Nur `'use client'`-kompatible Hooks — kein Server-Side-Code.
