# Design: Kategorie-Unterseiten für fzankauf.de

**Datum:** 2026-06-29
**Ziel:** SEO-optimierte Fahrzeug-Kategorie-Unterseiten für organischen Traffic. Start mit `/lkw-ankauf/` als Vorlage, danach Übertragung auf 5 weitere Kategorien.

## Entscheidungen

- **Vorgehen:** Erst `/lkw-ankauf/` komplett bauen, Feedback einholen, dann Muster auf die anderen 5 übertragen.
- **URL-Form:** Saubere Ordner (`/lkw-ankauf/index.html` → URL `https://fzankauf.de/lkw-ankauf/`).
- **Inhaltstiefe:** Generisch-glaubwürdig. Wahre, allgemeine Angaben (alle Hersteller, Zustände, Aufbauten). Keine erfundenen Zahlen/Referenzen. Bestehende Trust-Fakten wiederverwenden (seit 1998, 25+ Jahre, 1.000+ Fahrzeuge, Inhaber persönlich).

## Technik

- Eigener Ordner pro Kategorie, relative Pfade zu geteilten Assets: `../style.css`, `../script.js`, `../cookie-consent.{css,js}`, `../assets/...`. Kein CSS/JS-Duplikat → Design bleibt konsistent.
- Nav + Footer identisch zur Startseite. Logo-/Nav-Anker zeigen auf `../#...` (zurück zur Startseite). CTA-Anker auf seiteneigenen `#kontakt`.
- In `sitemap.xml` ergänzen.

## Seitenaufbau

1. **Hero** (schlank): H1 `LKW ankaufen – bundesweit, fair & schnell`, Subline, 3 Häkchen-Features, Primär-CTA → `#kontakt`.
2. **Intro-Fließtext** (~250–300 Wörter): alle Hersteller (MAN, Mercedes-Benz, Scania, Volvo, DAF, Iveco, Renault), alle Aufbauten (Sattelzug, Kipper, Pritsche, Koffer, Silo …), alle Zustände inkl. defekt / ohne TÜV / abgemeldet.
3. **„Diese LKW kaufen wir an"** — Grid mit Aufbau-Typen (Stil der bestehenden `fahrzeuge`-Cards).
4. **Vorteile** — LKW-spezifisch umformuliert (kompakt, KEIN 1:1-Kopieren der Startseite → kein Duplicate Content).
5. **Ablauf** — 3 Schritte, identisch zur Startseite.
6. **FAQ** — 4–5 LKW-spezifische Fragen („Was ist mein LKW noch wert?", „Kaufen Sie LKW mit Motorschaden?", „Holen Sie den LKW ab?" …).
7. **Kontaktformular** — gleiches Formspree-Formular, Fahrzeugtyp „LKW" vorausgewählt.
8. **Footer** — identisch.

## SEO-Kopf pro Seite

- Eigener `<title>`, `meta description`, `canonical` auf Unterseiten-URL.
- JSON-LD: `Service`-Node (LKW-Ankauf) + `BreadcrumbList` (Start › LKW-Ankauf) + eigene `FAQPage`.
- OG-Tags (Bild: bestehendes `og-image.jpg`).

## Halal / Copy-Constraints

- Deutsche Copy: leise/faktisch, keine Selbstanpreisung, keine lauten Superlative.
- Keine blasphemischen Begriffe (Halal-Konstante).

## Folge-Kategorien (nach LKW-Freigabe)

`/transporter-ankauf/`, `/baumaschinen-ankauf/`, `/anhaenger-ankauf/`, `/gabelstapler-ankauf/`, `/landmaschinen-ankauf/` — je nach Action-Plan-Tabelle (H1 + Keywords).
