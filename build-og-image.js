// Baut das Open-Graph-Vorschaubild (1200x630) als scharfe Grafik via sharp.
// Aufruf:  node build-og-image.js
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const dir = __dirname;
const icon = fs.readFileSync(path.join(dir, "assets/logos/fzankauf-icon.png")).toString("base64");
const iconUri = "data:image/png;base64," + icon;

const NAVY = "#0d2137";
const ORANGE = "#f3580a";
const BG = "#faf8f5";
const MUTED = "#5b6b7a";
const FONT = "Segoe UI, Arial, sans-serif";

function check(cx, cy) {
  return `<circle cx="${cx}" cy="${cy}" r="16" fill="${ORANGE}"/>` +
    `<path d="M ${cx-7} ${cy} L ${cx-2} ${cy+6} L ${cx+8} ${cy-6}" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`;
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const bullets = [
  "Kostenlose Besichtigung vor Ort",
  "Bundesweit & Sofortzahlung",
  "Familienunternehmen seit 1998",
];
const bulletSvg = bullets.map((t, i) => {
  const y = 432 + i * 58;
  return check(90, y - 6) + `<text x="118" y="${y}" font-family="${FONT}" font-size="28" font-weight="500" fill="${NAVY}">${esc(t)}</text>`;
}).join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${BG}"/>
  <rect x="0" y="0" width="14" height="630" fill="${ORANGE}"/>
  <rect x="770" y="0" width="430" height="630" fill="${NAVY}"/>

  <image href="${iconUri}" x="72" y="52" width="68" height="68"/>
  <text x="152" y="103" font-family="${FONT}" font-size="42" font-weight="700" fill="${NAVY}">FZAnkauf</text>

  <text x="72" y="238" font-family="${FONT}" font-size="54" font-weight="800" fill="${NAVY}">LKW, Transporter &amp;</text>
  <text x="72" y="302" font-family="${FONT}" font-size="54" font-weight="800" fill="${NAVY}">Baumaschinen verkaufen</text>

  <text x="74" y="356" font-family="${FONT}" font-size="26" font-weight="600" fill="${ORANGE}">Auch defekt &amp; ohne TÜV · Angebot in 24 Stunden</text>

  ${bulletSvg}

  <text x="72" y="588" font-family="${FONT}" font-size="30" font-weight="700" fill="${NAVY}">fzankauf.de</text>
  <text x="244" y="588" font-family="${FONT}" font-size="24" font-weight="400" fill="${MUTED}">· +49 155 10117300</text>

  <image href="${iconUri}" x="815" y="150" width="340" height="340"/>
  <rect x="930" y="520" width="110" height="3" fill="${ORANGE}"/>
  <text x="985" y="560" text-anchor="middle" font-family="${FONT}" font-size="28" font-weight="600" fill="#ffffff" letter-spacing="4">SEIT 1998</text>
</svg>`;

sharp(Buffer.from(svg))
  .jpeg({ quality: 90 })
  .toFile(path.join(dir, "og-image.jpg"))
  .then((info) => console.log("OG-Bild erstellt: og-image.jpg", info.width + "x" + info.height, Math.round(info.size / 1024) + " KB"))
  .catch((e) => { console.error("FEHLER:", e.message); process.exit(1); });
