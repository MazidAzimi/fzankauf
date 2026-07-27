---
name: fzankauf.de
description: Nutzfahrzeug-Ankauf der Euro-Truck-Handel GmbH – industrielles Hell-Layout, Source als Superfamily (Adobe)
colors:
  frachtbrief-marine: "#0d2137"
  stempelorange: "#f3580a"
  stempelorange-tief: "#d4440a"
  quittungsgruen: "#16a34a"
  papier: "#faf8f5"
  papier-getont: "#f3f1ed"
  papier-getont-hover: "#e8e5df"
  reinweiss: "#ffffff"
  schriftgrau: "#374151"
  schriftgrau-gedaempft: "#5b626e"
  linie: "#dcd9d3"
  linie-leicht: "#eae7e2"
typography:
  display:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.4rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "'Source Serif 4', Georgia, serif"
    fontSize: "clamp(1.9rem, 4.5vw, 3.1rem)"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Source Sans 3', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.04em"
  body:
    fontFamily: "'Source Sans 3', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Source Sans 3', 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  sm: "1px"
  md: "2px"
spacing:
  content-max: "1120px"
  content-narrow: "780px"
  gutter: "1.5rem"
  section-gap: "clamp(4rem, 10vw, 7rem)"
  card-padding: "2.5rem 2rem"
components:
  button-primary:
    backgroundColor: "{colors.stempelorange}"
    textColor: "{colors.reinweiss}"
    typography: "{typography.title}"
    rounded: "0"
    padding: "0.9rem 2.2rem"
  button-primary-hover:
    backgroundColor: "{colors.stempelorange-tief}"
    textColor: "{colors.reinweiss}"
  card:
    backgroundColor: "{colors.reinweiss}"
    textColor: "{colors.schriftgrau}"
    rounded: "{rounded.md}"
    padding: "2.5rem 2rem"
  input:
    backgroundColor: "{colors.papier}"
    textColor: "{colors.schriftgrau}"
    rounded: "{rounded.md}"
    padding: "0.8rem 1rem"
  eyebrow:
    textColor: "{colors.stempelorange}"
    typography: "{typography.label}"
---

# Design System: fzankauf.de

## Overview

**Creative North Star: "Der Frachtbrief"**

Ein Frachtbrief ist kein Werbemittel. Er ist ein verbindliches Dokument: sachlich gesetzt, gestempelt, ohne Zierrat — und genau deshalb glaubt man ihm. Diese Seite verkauft ein Versprechen, das dieselbe Qualität braucht: ein Preis, der gilt. Also sieht sie aus wie ein Papier, das jemand unterschrieben hat, nicht wie eine Anzeige, die jemand geschaltet hat.

Praktisch heißt das: warmes Off-White als Papierfläche, harte 2px-Kanten statt weicher Radien, Linien statt Schatten, und ein einziger kräftiger Akzent, der wie ein Stempel gesetzt wird — sparsam, an der Stelle, die zählt. Die Überschriften sind gesetzt wie Vertragssätze (Serife, gemischte Schreibung, lesbar), die Beschriftungen wie Formularfelder (Versalien, schmal, gesperrt). Der Unterschied zwischen diesen beiden Stimmen ist das tragende Gestaltungsmittel des Systems.

Ausdrücklich abgelehnt (aus PRODUCT.md, bestätigt): der billige Schrottankauf-Look mit grellen Bannern und „Bestpreis garantiert!!!", der gesichtslose Konzern-Auftritt, das generische SaaS-Template mit Lila-Gradienten, und die überladene Werbeseite mit Pop-ups und Countdown-Timern.

**Key Characteristics:**
- Papierfarbenes Hell-Layout (`#faf8f5`), nie Dark Mode
- Zwei Schriftstimmen mit klarer Rollentrennung: Serife spricht, Versalie beschriftet
- Nahezu radiuslos (2px) — Kanten statt Rundungen
- Flach im Ruhezustand; Tiefe entsteht durch Farbton-Schichtung, nicht durch Schatten
- Ein Akzent, sparsam gesetzt: Stempelorange auf ≤10% der Fläche
- Die gekappte Button-Ecke als wiederkehrende Signatur

## Colors

Eine Papier-Palette mit genau einem Signalton: warme Neutraltöne tragen die Fläche, Marine trägt die Schrift, Orange trägt die Handlung.

### Primary
- **Stempelorange** (`#f3580a`): Der einzige Signalton. Trägt jeden Primär-CTA, den Kicker über jeder Sektion, den Fokus-Ring in Formularen und die Hover-Farbe auf Links. Nie als große Fläche, nie als Hintergrund für Fließtext.
- **Stempelorange Tief** (`#d4440a`): Ausschließlich Hover- und Aktiv-Zustand des Primär-CTA.

### Secondary
- **Frachtbrief-Marine** (`#0d2137`): Alle Überschriften, der Footer und dunkle Flächen. Die Autoritätsfarbe des Systems — sie sagt „eingetragenes Unternehmen", nicht „Angebot".

### Tertiary
- **Quittungsgrün** (`#16a34a`): Nur für die Icons der Trust-Zeile unter dem CTA. Es färbt Belege, nie Handlungen — kein CTA, kein Link, keine Fläche.

### Neutral
- **Papier** (`#faf8f5`): Seitenhintergrund und Formularfeld-Füllung. Warmes Off-White, nie Reinweiß.
- **Papier Getönt** (`#f3f1ed`): Abgesetzte Sektionen und FAQ-Zeilen — die zweite Schicht.
- **Papier Getönt Hover** (`#e8e5df`): Hover auf getönten Flächen.
- **Reinweiß** (`#ffffff`): Karten und Formular. Die oberste Schicht — Weiß bedeutet hier „hervorgehoben", nicht „Standard".
- **Schriftgrau** (`#374151`): Fließtext.
- **Schriftgrau Gedämpft** (`#5b626e`): Metatext und Labels. Bewusst auf ≥4,5:1 gegen Weiß angehoben.
- **Linie** (`#dcd9d3`) und **Linie Leicht** (`#eae7e2`): Trennlinien und Feldränder.

### Named Rules
**Die Stempel-Regel.** Stempelorange erscheint auf höchstens 10% einer Bildschirmfläche und immer als Handlung oder Hinweis — nie als Dekoration. Wer zwei orange Flächen nebeneinander sieht, hat eine zu viel gesetzt.

**Die Drei-Schichten-Regel.** Es gibt genau drei Flächenhelligkeiten: Papier (Seite), Papier Getönt (Sektion), Reinweiß (Karte). Eine vierte Zwischenstufe zu erfinden zerstört die Ablesbarkeit der Hierarchie.

## Typography

**Alle Schnitte aus einer Superfamily: Source (Adobe).** Selbst gehostet in `assets/fonts/` (202 KB, latin + latin-ext) — kein Google-CDN, schon aus Datenschutzgründen.

**Display Font:** Source Serif 4, Gewicht 600 (Fallback: Georgia, serif)
**Body Font:** Source Sans 3 (Fallback: 'Segoe UI', system-ui) — Gewichte 400, 600 und 700
**Label Font:** Source Sans 3, Gewicht 600 — Versalien, erzwungen per `text-transform`. Source hat **keinen Condensed-Schnitt**; die Versalien laufen deshalb normalbreit und tragen die industrielle Kante über Gewicht und Laufweite statt über schmale Formen.
**Mono:** Source Code Pro — nur für die Reassurance-Zeile unter dem CTA

**Character:** Eine Serife, die spricht, und eine Versalienschrift, die beschriftet. Source Serif gibt den Aussagen Gewicht ohne Lautstärke; Source Sans in Versalien gibt den Bedienelementen die technische Kante. Die Spannung zwischen beiden ist der Charakter des Systems — keine der beiden funktioniert hier allein.

### Hierarchy
- **Display** (Source Serif 4, 600, `clamp(2.5rem, 6vw, 4.4rem)`, LH 1.06): Nur die H1 im Hero. Kursiv gesetzte Teilphrasen in Stempelorange sind das erlaubte Ausdrucksmittel.
- **Headline** (Source Serif 4, 600, `clamp(1.9rem, 4.5vw, 3.1rem)`, LH 1.14): Sektions-H2, zentriert.
- **Title** (Source Sans 3, 600, `1.3rem`, LS 0.04em, VERSALIEN): Kartentitel, H3, H4.
- **Body** (Source Sans 3, 400, `1rem`, LH 1.6): Fließtext. Lesespalte über `--content-narrow` (780px) begrenzt.
- **Label** (Source Sans 3, 600, `0.78rem`, LS 0.2em, VERSALIEN, Stempelorange): Der Kicker über jeder Sektion.

### Named Rules
**Die Rollentrennungs-Regel.** Serife spricht, Versalie beschriftet. Source Serif trägt H1 und H2 — die Sätze, die überzeugen sollen. Source Sans in Versalien trägt Buttons, Kartentitel und Nav und wird nie zu Fließtext oder Hero-Headline.

*Geprüft und verworfen (2026-07-25):* Eine versalien-geführte Hero-Überschrift wurde gebaut und gemessen — einzeilig in Versalien (Titel wächst um ~100px, bricht auf drei Zeilen) und zweizeilig mit Lora-Kursiv-Versprechen (mobil kompakter, 116px statt 170px). Beide wurden verworfen: die Serifen-Überschrift trägt die Marke besser. Nicht erneut vorschlagen ohne neuen Anlass.

**Die Zwei-Zeilen-Regel für Kartentitel.** Kartentitel erscheinen in Versalien und dürfen **26 Zeichen** nicht überschreiten. In der schmalsten Spalte (227 px) trägt ein Titel bei Source Sans 3 in Versalien rund 17 Zeichen pro Zeile — längere Titel laufen zweizeilig, und das ist in Ordnung: das Raster gleicht die Kartenhöhen an (gemessene Abweichung ≤ 23 px). Drei Zeilen sind es nicht. Gemessen bei 1,3 rem: 26 Zeichen brauchen 316 px, ab etwa 34 Zeichen entstünde eine dritte Zeile. *(Die frühere Fassung verlangte eine Zeile — das galt für Bebas Neue, das deutlich schmaler baut.)*

**Die Keine-Kommas-Regel.** Versalien-Überschriften enthalten keine Kommas und keine Verbsätze. `ROST MINDERT DEN PREIS, NICHT DIE CHANCE` ist Geschrei; `AUCH MIT ROST` ist eine Beschriftung.

## Layout

Einspaltiges Dokument mit zentriertem Container: `--content-max` 1120px, Lesetexte auf `--content-narrow` 780px, Seitenabstand 1.5rem. Sektionen werden durch `--section-gap` (`clamp(4rem, 10vw, 7rem)`) getrennt, nicht durch Rahmen.

Wiederkehrendes Sektionsmuster: Kicker (Versalien, orange) → H2 (Serife, zentriert) → Subline → Inhalt. Karten stehen in einem dreispaltigen Raster, das bei 900px auf zwei und bei 640px auf eine Spalte fällt.

Breakpoints: 1149px (Nav-Brotkrume aus), 900px (Raster), 640px, 600px (Mobil-Overlay-Navigation), 480px. Die Navigation ist `position: fixed` und wechselt ab 60px Scroll in einen `--scrolled`-Zustand mit Hintergrund und Trennlinie.

Zielgruppe ist überwiegend mobil und nicht tech-affin: Touch-Ziele großzügig, Beschriftungen ausgeschrieben, Schriftgrößen nicht unter 0.78rem.

## Elevation & Depth

Das System ist **flach im Ruhezustand**. Tiefe entsteht durch Farbton-Schichtung (Papier → Papier Getönt → Reinweiß) und durch Haarlinien, nicht durch Schatten. Schatten sind eine Antwort auf Handlung, kein Dauerzustand.

### Shadow Vocabulary
- **Karten-Hauch** (`0 2px 16px rgba(0,0,0,0.06)`): Sehr zurückhaltend, nur wo eine Karte sich vom Papier lösen muss.
- **Gehoben** (`0 8px 40px rgba(0,0,0,0.10)`): Overlays und das Nav-Dropdown.
- **Orange-Abdruck** (`0 8px 30px rgba(243,88,10,0.25)`): Ausschließlich Hover auf dem Primär-CTA.
- **Fokus-Ring** (`0 0 0 3px rgba(243,88,10,0.08)`): Formularfelder im Fokus, zusammen mit orangem Rand.

### Named Rules
**Die Sichtbarer-Fokus-Regel.** Jedes anklickbare Element trägt einen Fokus-Ring in Stempelorange (`:focus-visible`, 2px, 3px Abstand). Wo `clip-path` im Spiel ist, liegt der Ring innen — außen würde er weggeschnitten. Kein Element verlässt sich auf das Browser-Standard-Outline.

**Die Flach-im-Ruhezustand-Regel.** Eine Fläche wirft erst dann einen Schatten, wenn der Nutzer sie berührt, überfährt oder fokussiert. Wer einen Ruhe-Schatten setzt, muss begründen, warum die Farbton-Schichtung nicht reicht.

## Shapes

Nahezu radiuslos: 2px als Standard (`--radius`), 1px für Kleinstelemente. Das ist keine Abrundung, sondern eine gebrochene Kante — Blech, nicht Kunststoff.

Die Signatur des Systems ist die **gekappte Ecke** des Primär-Buttons: `clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)`. Die Form zitiert ein schräg abgeschnittenes Blechschild und ist das einzige Element, das von der Rechtwinkligkeit abweicht.

Ränder sind Haarlinien (1px) in `Linie`. Akzentränder verwenden `1px solid rgba(243, 88, 10, 0.35)`.

## Components

### Buttons
- **Character:** Werkzeug statt Interface — harte Kanten, klare Zustände, kein Schnickschnack.
- **Shape:** Kein Radius; stattdessen die gekappte Ecke (8px-Schräge links oben, rechts unten).
- **Primary:** Stempelorange auf Weiß, Source Sans 3 in **Gewicht 700** — als einziges Element der Seite; alle übrigen Versalien laufen auf 600. Laufweite 0.07em, unter 480px auf 0.04em zurückgenommen.
- **Tiefe:** `clip-path` beschneidet `box-shadow` — Tiefe kommt deshalb über `filter: drop-shadow()`, das der geschnittenen Silhouette folgt. Zwei Schatten mit verschiedenen Aufgaben: der erste ohne Weichzeichnung ist die Materialstärke des Blechs, der zweite mit Streuung der Wurf aufs Papier.
- **Zustände:** Ruhe 2px Stärke / 5–12px Wurf · Hover 4px / 12–22px und 2px angehoben · Gedrückt Stärke auf 0, 2px abgesenkt — das Schild sitzt auf.
- **Fokus:** ein außen liegendes `outline` würde ebenfalls weggeschnitten; der Ring liegt deshalb innen (`inset`, weiß mit dunkelorangem Rand).
- **Vollbreite (`btn--full`):** schmale Seitenpolsterung (0.75rem) — die Breite kommt vom Container, die 3.2rem aus `btn--large` wären dort nur Platzfresser.
- **Secondary:** Transparent mit Haarlinie, Text in Marine.

### Cards / Containers
- **Corner Style:** 2px.
- **Background:** Reinweiß auf getönten Sektionen; Innenabstand `2.5rem 2rem`.
- **Shadow Strategy:** Keiner im Ruhezustand (siehe Elevation).
- **Aufbau:** Icon (36×36, Strichstärke 2, `currentColor`) → H3 in Versalien → Absatz mit fettem Lead-Satz und anschließender Erläuterung.

### Inputs / Fields
- **Style:** Papier-Füllung, 1px Haarlinie, 2px Radius, Polsterung `0.8rem 1rem`, Source Sans 3 0.92rem.
- **Focus:** Rand wechselt auf Stempelorange, dazu der 3px-Fokus-Ring bei 8% Deckung. Kein Browser-Outline.

### Navigation
- **Style:** Fixiert, transparent über dem Hero, ab 60px Scroll mit Papier-Hintergrund und unterer Haarlinie.
- **Links:** Source Sans 3, Hover in Stempelorange.
- **Dropdown:** Weiße Fläche, 2px Radius, Gehoben-Schatten, geöffnet über `.open` (Klick) oder `:hover`. Escape und Außenklick schließen.
- **Mobil (≤600px):** Vollflächiges Marine-Overlay, Einträge in Source-Sans-Versalien zentriert, Untermenü klappt per `max-height` auf.

### Signature: Sprechende Icons statt Häkchen
Im Hero trägt jede Aussage ein Icon, das ihren Inhalt zeigt — nie ein generisches Häkchen. Die Chips über dem CTA: Ortsnadel für „Besichtigung vor Ort", LKW für „Abholung", Uhr für „Angebot in 24h", Karte für „Sofortzahlung". Die Trust-Zeile darunter: Person für den Inhaber, Haus für den Familienbetrieb, Aufwärtspfeil für die wachsende Zahl angekaufter Fahrzeuge.

Dieselbe Aussage bekommt seitenweit dasselbe Motiv — der LKW in einem Chip ist derselbe wie in der Abholungs-Karte der Vorteile. Chips und Trust-Zeile laufen beide in der Headline-Schrift (Source Serif), weil sie Aussagen sind und keine Beschriftungen; Source Sans in Versalien bleibt Buttons und Kartentiteln vorbehalten.

Die Trust-Zeile ist bewusst kräftig gesetzt (0,95rem, Gewicht 600, Frachtbrief-Marine statt gedämpftem Grau): sie trägt die Belege, die den Familienbetrieb von einem Portal unterscheiden. Nur ihre Icons bleiben Quittungsgrün — Belege, keine Handlung.

### Signature: Der Kicker
Über jeder Sektion steht ein Wort in Versalien, 0.78rem, Laufweite 0.2em, in Stempelorange. Er ersetzt die Rahmung — die Sektion braucht keine Box, weil der Kicker sie eröffnet. *(Ausnahme: `/lkw-ankauf/` verzichtet bewusst darauf, nachdem eine Design-Kritik die Wiederholung über fünf Sektionen bemängelt hat. Die übrigen Seiten tragen ihn noch — eine offene Inkonsistenz.)*

### Signature: Das Fahrzeug-Band
Sechs freigestellte Silhouetten unter dem Hero, jede verlinkt auf ihre Kategorie-Seite. Der Auftritt ist der eine autorisierte Bewegungsmoment der Seite: jede Silhouette kommt zu groß und unscharf herein und fällt scharf auf ihren Platz — ein Stempel, der aufsetzt. Von links nach rechts, 65 ms Versatz, die Beschriftung folgt ihrem Bild um 90 ms. Gesamtdauer unter 700 ms, läuft genau einmal. Ohne JavaScript ist alles sofort sichtbar; `prefers-reduced-motion` schaltet die Bewegung ab.

### Beschriftungen der Handlungsflächen
Drei Rollen, drei Formulierungen, keine wiederholt die andere: Navigation „Fahrzeug bewerten", Hero und Mitte „Jetzt Angebot erhalten", Formular „Bewertung anfordern". Kein Stabreim, und „kostenlos" steht nur an einer Stelle — in der Zusicherung, nicht zusätzlich im Button.

## Do's and Don'ts

### Do:
- **Do** Überschriften in Source Serif setzen und Beschriftungen in Source-Sans-Versalien — die Rollentrennung ist das tragende Mittel.
- **Do** Versalien-Titel bei 26 Zeichen kappen und ohne Komma formulieren.
- **Do** Tiefe über die drei Papierschichten aufbauen, bevor du zu einem Schatten greifst.
- **Do** Stempelorange wie einen Stempel setzen: einmal pro Blickfeld, dort wo gehandelt wird.
- **Do** die gekappte Button-Ecke beibehalten — sie ist der wiedererkennbarste Zug des Systems.
- **Do** Belege statt Adjektive zeigen: Handelsregister, Jahreszahl, Stückzahl.

### Don't:
- **Don't** Radien über 2px vergeben. Weiche Ecken lesen sich als App, nicht als Werkzeug.
- **Don't** Stempelorange als Flächenhintergrund für Text verwenden.
- **Don't** eine vierte Flächenhelligkeit einführen.
- **Don't** Karten im Ruhezustand schweben lassen.
- **Don't** die Versalien-Auszeichnung für Fließtext oder Hero-Headlines einsetzen (siehe Rollentrennungs-Regel).
- **Don't** Superlative, Ausrufezeichen oder Garantie-Versprechen in Überschriften setzen — dorthin gehören Fakten.
- **Don't** Dark Mode oder Lila-Gradienten einführen; beides ist ausdrückliche Anti-Referenz.
- **Don't** `box-shadow` auf Elementen mit `clip-path` erwarten — er wird weggeschnitten; `filter: drop-shadow()` nehmen.
- **Don't** `transition: all` verwenden; es interpoliert auch `font-weight` und lässt Elemente auf dem Startwert hängen.
