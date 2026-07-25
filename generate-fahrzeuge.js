// Generiert Fahrzeug-Illustrationen im FZAnkauf-Logo-Stil via Recraft V3 (Replicate).
// Token aus ../sprech-coach/.env.local (REPLICATE_API_TOKEN).
import fs from 'node:fs';
import path from 'node:path';

const envPath = path.resolve('../sprech-coach/.env.local');
const env = fs.readFileSync(envPath, 'utf8');
const token = (env.match(/REPLICATE_API_TOKEN=(.+)/) || [])[1]?.trim();
if (!token) { console.error('Kein REPLICATE_API_TOKEN gefunden'); process.exit(1); }

const outDir = path.resolve('assets/fahrzeuge-band');
fs.mkdirSync(outDir, { recursive: true });

// Gemeinsamer Stil-Anker, damit die Fahrzeuge als Set zusammenpassen.
const STYLE_BASE =
  'bold flat vector emblem illustration in the style of a vintage transport company logo, ' +
  'navy blue #0d2137 body with bright safety orange #f3580a accents, thick clean outlines, ' +
  'centered, isolated on a plain white background, ' +
  'no text, no lettering, no badge, no frame, simple and confident, industrial heritage look';
const VIEWS = {
  front: 'three-quarter front view facing left',
  side: 'side broadside profile view',
  rear: 'three-quarter rear view from behind, showing the back of the vehicle',
};

// Nur die noch fehlenden generieren (lkw existiert bereits). Per CLI-Arg ueberschreibbar.
const ALL = [
  { name: 'lkw',         subject: 'a modern European cab-over-engine semi truck tractor unit with a flat vertical front (like a Mercedes Actros, MAN or Scania), NOT an american long-hood truck, no long bonnet' },
  { name: 'transporter', subject: 'a delivery panel van / transporter (Mercedes Sprinter style)' },
  { name: 'bagger',      subject: 'a hydraulic crawler excavator (construction digger with boom, arm and bucket), the whole machine floating isolated with no ground, no soil pile, no dirt, no shadow platform' },
  { name: 'anhaenger',   subject: 'a standalone box semi-trailer seen from behind, showing its rear doors, rear bumper and rear triple-axle wheels, navy blue #0d2137 body with bright safety orange #f3580a accents, the sides and doors are blank and unbranded with no logo and no text, there is absolutely NO truck, NO cab and NO tractor unit, just the lone trailer, floating isolated with no ground, no shadow platform', view: 'rear' },
  { name: 'gabelstapler',subject: 'an unmanned parked forklift truck with nobody operating it, counterbalance type with a tall vertical mast and two forks, navy blue #0d2137 body with bright safety orange #f3580a accents and orange wheel rims, the empty operator seat is clearly visible and unoccupied, there is absolutely no driver, no operator, no person, no human and no figure in the seat or anywhere in the image, just the empty machine on its own, floating isolated with no ground, no pallet, no shadow platform' },
  { name: 'landmaschine',subject: 'a modern agricultural farm tractor with big rear wheels (like a John Deere or Fendt), no trailer, floating isolated with no ground, no field, no shadow platform' },
];
const only = process.argv.slice(2);
const vehicles = only.length ? ALL.filter(v => only.includes(v.name)) : ALL;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generate(v, attempt = 1) {
  const prompt = `${v.subject}, ${VIEWS[v.view] || VIEWS.front}, ${STYLE_BASE}`;
  console.log(`> ${v.name} (Versuch ${attempt}) ...`);
  const res = await fetch('https://api.replicate.com/v1/models/recraft-ai/recraft-v3/predictions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Prefer': 'wait',
    },
    body: JSON.stringify({
      input: { prompt, size: '1024x1024', style: 'digital_illustration' },
    }),
  });
  const data = await res.json();
  if (res.status === 429 && attempt <= 6) {
    const wait = (data.retry_after || 5) + 1;
    console.log(`  Rate-Limit, warte ${wait}s ...`);
    await sleep(wait * 1000);
    return generate(v, attempt + 1);
  }
  if (data.error || !data.output) {
    console.error(`  Fehler bei ${v.name}:`, data.error || JSON.stringify(data).slice(0, 300));
    return;
  }
  const url = Array.isArray(data.output) ? data.output[0] : data.output;
  const img = Buffer.from(await (await fetch(url)).arrayBuffer());
  const file = path.join(outDir, `${v.name}.webp`);
  fs.writeFileSync(file, img);
  console.log(`  gespeichert: ${file} (${(img.length / 1024).toFixed(0)} KB)`);
}

for (let i = 0; i < vehicles.length; i++) {
  await generate(vehicles[i]);
  if (i < vehicles.length - 1) await sleep(12000); // Rate-Limit (6/min, Burst 1)
}
console.log('fertig.');
