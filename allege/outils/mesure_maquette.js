// Mesure une maquette locale a 375 px, hors reseau evenox.ca.
//
// Sert a repondre honnetement a la question « qu'est-ce qui tiendrait dans le
// premier ecran apres la coupe ». La maquette doit etre montee avec la feuille de
// style de la page reelle (les blocs <style> de son HTML), sinon la mesure ne veut
// rien dire. Ce n'est pas une mise en page proposee : c'est une mesure.
//
//     node mesure_maquette.js /chemin/maquette.html [autre.html ...]
//
// Dependance : puppeteer-core, et un Chrome installe.

const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME = process.env.CHROME || '/usr/local/bin/google-chrome';
const W = 375, H = 667;

(async () => {
  const fichiers = process.argv.slice(2);
  if (!fichiers.length) { console.error('usage: node mesure_maquette.js <maquette.html ...>'); process.exit(1); }
  const browser = await puppeteer.launch({
    executablePath: CHROME, headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars', '--font-render-hinting=none'],
  });
  for (const f of fichiers) {
    const page = await browser.newPage();
    await page.setViewport({ width: W, height: H, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    await page.goto('file://' + path.resolve(f), { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 2500));
    const d = await page.evaluate((W, H) => {
      const out = { hauteur: document.documentElement.scrollHeight, premierEcran: [], prix: [] };
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let n; const vus = new Set();
      while ((n = walker.nextNode())) {
        const t = n.textContent.replace(/\s+/g, ' ').trim();
        if (!t || vus.has(t)) continue;
        const el = n.parentElement; if (!el) continue;
        const s = getComputedStyle(el);
        if (s.display === 'none' || s.visibility === 'hidden' || parseFloat(s.opacity) < 0.05) continue;
        const r = el.getBoundingClientRect();
        if (r.width < 1 || r.height < 1) continue;
        vus.add(t);
        if (/\d[\d\s,.]*\$/.test(t)) out.prix.push({ t: t.slice(0, 80), haut: Math.round(r.top + scrollY) });
        if (r.top >= H || r.bottom <= 0) continue;
        const cx = Math.min(Math.max((r.left + r.right) / 2, 2), W - 2);
        const cy = Math.min(Math.max((r.top + r.bottom) / 2, 2), H - 2);
        const dessus = document.elementFromPoint(cx, cy);
        out.premierEcran.push({ t: t.slice(0, 80), de: Math.round(r.top), a: Math.round(r.bottom),
          entier: r.bottom <= H,
          recouvert: !(dessus === el || el.contains(dessus) || (dessus && dessus.contains(el))) });
      }
      return out;
    }, W, H);
    console.log('='.repeat(20), f, '| hauteur', d.hauteur, 'px =', (d.hauteur / H).toFixed(1), 'ecrans');
    d.premierEcran.forEach(x => console.log(
      `${x.de}..${x.a} ${x.entier ? 'entier' : 'coupe '} ${x.recouvert ? 'RECOUVERT' : ''} | ${x.t}`));
    console.log('--- prix ---');
    d.prix.forEach(x => console.log(`${x.haut} px | ${x.t}`));
    const sortie = path.basename(f).replace(/\.html?$/, '') + '_375.png';
    await page.screenshot({ path: sortie, clip: { x: 0, y: 0, width: W, height: H } });
    console.log('capture :', sortie);
    await page.close();
  }
  await browser.close();
})();
