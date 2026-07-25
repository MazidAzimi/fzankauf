---
target: lkw-ankauf/ (repräsentativ)
total_score: 32
p0_count: 0
p1_count: 2
timestamp: 2026-06-29T15-20-21Z
slug: lkw-ankauf-index-html
---
# Critique: /lkw-ankauf/ (repräsentativ für alle 6 Kategorie-Seiten)

## Design Health Score: 32/40 (Gut)

| # | Heuristik | Score | Kernproblem |
|---|-----------|-------|-------------|
| 1 | Visibility of System Status | 3 | kein On-Page-Erfolgsstatus (Formspree-Redirect) |
| 2 | Match System / Real World | 4 | klares, ehrliches Deutsch |
| 3 | User Control & Freedom | 3 | Breadcrumb + Dropdown + Telefon-Alternative |
| 4 | Consistency & Standards | 4 | geteiltes System, durchgehend konsistent |
| 5 | Error Prevention | 3 | E-Mail-ODER-Telefon, Dateigröße, Pflicht-Checkbox |
| 6 | Recognition Rather Than Recall | 3 | beschriftete Nav, Dropdown |
| 7 | Flexibility & Efficiency | 3 | Formular ODER Anruf |
| 8 | Aesthetic & Minimalist | 3 | zwei identische 6er-Kartengrids + Eyebrow-Kadenz |
| 9 | Error Recovery | 3 | klare Fehlermeldung, minimal |
| 10 | Help & Documentation | 3 | FAQ + Telefon + Datenschutz |

## Anti-Patterns Verdict
Nicht offensichtlich KI, aber zwei Gerüst-Muster: Eyebrow über jeder Sektion (5x) und zwei identische 6er-Icon-Karten-Grids. detect.mjs: 0 Findings. Browser-Overlay nicht verfügbar (Renderer defekt, innerWidth 0).

## What's Working
1. Ehrliche Vertrauens-Architektur (konkrete Belege statt Superlative).
2. Reibungsarmes Formular (Fahrzeugtyp vorausgewählt, E-Mail ODER Telefon, Baujahr optional).
3. Konsistenz über 6 Seiten mit eigenem SEO-Kopf je Seite.

## Priority Issues
- [P1] Inhalt per JS auf opacity:0 versteckt, kein sichtbarer Default, keine prefers-reduced-motion-Alternative. Fix: Reveal als Progressive Enhancement, Inhalt default sichtbar, reduced-motion-Regel. Befehl: /impeccable animate
- [P1/P2] Eyebrow über jeder Sektion (KI-Grammatik). Site-weites System. Fix: Kadenz brechen. Befehl: /impeccable typeset
- [P2] Zwei identische 6er-Karten-Grids hintereinander. Fix: ein Grid strukturell differenzieren (Tag/Chip-Liste). Befehl: /impeccable layout
- [P2] Platzhalter-/Muted-Kontrast prüfen (<4,5:1?). Befehl: /impeccable audit

## Persona Red Flags
- Jordan: "Marke & Modell" Pflicht -> unsicherer Verkäufer bricht ab.
- Casey: kein State-Erhalt; bei langsamem JS leere Sektionen.
- Riley: JS aus -> blanke Seite; Formspree-Default statt gebrandeter Danke-Seite.

## Minor Observations
- Alle 6 Seiten teilen 3 generische Hero-Bilder.
- Lora auf Reflex-Reject-Liste, aber bewusste Identität -> kein Fix.
- Kein On-Page-Erfolgsfeedback nach Absenden.
