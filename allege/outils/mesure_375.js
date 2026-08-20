// Mesure une page d'evenox.ca a 375 px de large, dans un vrai navigateur.
//
// Repond a une seule question : qu'est-ce qui tient dans le premier ecran d'un
// telephone, et qu'est-ce qui est coupe ou recouvert. Les recouvrements sont
// verifies par document.elementFromPoint, jamais deduits du CSS.
//
// Lecture seule : une seule visite, aucune ecriture. Devant un 403, on s'arrete.
//
// La page est parcourue de haut en bas avant la mesure : sans ce parcours, les
// blocs a animation d'apparition se mesurent en pleine translation et paraissent
// desalignes de quelques dizaines de pixels. On mesure au repos.
//
//     node mesure_375.js https://evenox.ca/une-page/ [selecteurs,separes,par,virgules]
//
// Dependance : puppeteer-core (npm install puppeteer-core), et un Chrome installe.

const puppeteer = require('puppeteer-core');

const CHROME = process.env.CHROME || '/usr/local/bin/google-chrome';
const W = 375, H = 667;   // iPhone SE, le plus petit ecran courant

(async () => {
  const url = process.argv[2];
  if (!url) { console.error('usage: node mesure_375.js <url> [selecteurs]'); process.exit(1); }
  const reperes = (process.argv[3] || '').split(',').map(s => s.trim()).filter(Boolean);

  const browser = await puppeteer.launch({
    executablePath: CHROME, headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars', '--font-render-hinting=none'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: W, height: H, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) ' +
    'AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1');
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'fr-CA,fr;q=0.9' });

  const resp = await page.goto(url, { waitUntil: 'networkidle2', timeout: 90000 });
  console.log('HTTP', resp.status(), url);
  if (resp.status() === 403) { console.error('403 : on s\'arrete, on ne reessaie pas.'); await browser.close(); process.exit(2); }
  if (resp.status() !== 200) { await browser.close(); process.exit(3); }
  await new Promise(r => setTimeout(r, 3500));

  // parcours complet, pour declencher les animations d'apparition
  const hauteur = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < hauteur; y += 400) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await new Promise(r => setTimeout(r, 120));
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 2000));

  const d = await page.evaluate((W, H, reperes) => {
    const out = { hauteur: document.documentElement.scrollHeight,
                  largeurDefilement: document.documentElement.scrollWidth,
                  premierEcran: [], prix: [], debordements: [], reperes: {} };
    const visible = el => {
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden' || parseFloat(s.opacity) < 0.05) return false;
      const r = el.getBoundingClientRect();
      return r.width > 1 && r.height > 1;
    };
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n; const vus = new Set();
    while ((n = walker.nextNode())) {
      const t = n.textContent.replace(/\s+/g, ' ').trim();
      if (!t) continue;
      const el = n.parentElement;
      if (!el || !visible(el)) continue;
      const r = el.getBoundingClientRect();
      const haut = Math.round(r.top + scrollY);
      // tout prix, ou qu'il soit dans la page
      if (/\d[\d\s,.]*\$|\$\s?\d/.test(t) && !vus.has(t + haut)) {
        vus.add(t + haut);
        const s = getComputedStyle(el);
        out.prix.push({ t: t.slice(0, 90), haut, taille: s.fontSize, graisse: s.fontWeight });
      }
      // texte du premier ecran, et ce qui le recouvre
      if (r.top < H && r.bottom > 0 && r.left < W && r.right > 0) {
        const cx = Math.min(Math.max((r.left + r.right) / 2, 2), W - 2);
        const cy = Math.min(Math.max((r.top + r.bottom) / 2, 2), H - 2);
        const dessus = document.elementFromPoint(cx, cy);
        out.premierEcran.push({ t: t.slice(0, 90), de: Math.round(r.top), a: Math.round(r.bottom),
          entier: r.bottom <= H,
          recouvertPar: (dessus === el || el.contains(dessus) || (dessus && dessus.contains(el)))
            ? null : (dessus ? (dessus.tagName + '.' + (dessus.className || '').toString().slice(0, 40)) : '?') });
      }
    }
    // ce qui sort de l'ecran par la droite ou la gauche
    document.querySelectorAll('*').forEach(el => {
      if (!visible(el)) return;
      const r = el.getBoundingClientRect();
      if (r.width < 4 || r.height < 4) return;
      if (r.right > W + 1 || r.left < -1)
        out.debordements.push({ tag: el.tagName, cls: (el.className || '').toString().slice(0, 45),
          gauche: Math.round(r.left), droite: Math.round(r.right),
          horsEcran: Math.round(Math.max(0, r.right - W) + Math.max(0, -r.left)),
          t: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 45) });
    });
    // boites demandees en argument : hauteur imposee contre hauteur du contenu
    for (const sel of reperes) {
      const el = document.querySelector(sel);
      if (!el) { out.reperes[sel] = null; continue; }
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      const enfants = [...el.children].map(c => c.getBoundingClientRect());
      out.reperes[sel] = {
        boite: { de: Math.round(r.top + scrollY), a: Math.round(r.bottom + scrollY) },
        contenu: enfants.length ? { de: Math.round(Math.min(...enfants.map(c => c.top)) + scrollY),
                                    a: Math.round(Math.max(...enfants.map(c => c.bottom)) + scrollY) } : null,
        style: `${s.display} ${s.flexDirection} justify:${s.justifyContent} overflow:${s.overflow} minH:${s.minHeight}`,
      };
    }
    return out;
  }, W, H, reperes);

  console.log(`hauteur ${d.hauteur} px = ${(d.hauteur / H).toFixed(1)} ecrans · ` +
              `largeur de defilement ${d.largeurDefilement} (ecran ${W})`);
  console.log('\n--- premier ecran ---');
  d.premierEcran.forEach(x => console.log(
    `${x.de}..${x.a} ${x.entier ? 'entier' : 'coupe '} ${x.recouvertPar ? 'RECOUVERT PAR ' + x.recouvertPar : ''} | ${x.t}`));
  console.log('\n--- tous les prix de la page ---');
  d.prix.forEach(x => console.log(`${x.haut} px [${x.taille} ${x.graisse}] ${x.t}`));
  console.log(`\n--- hors ecran a droite ou a gauche : ${d.debordements.length} ---`);
  d.debordements.forEach(x => console.log(`${x.tag}.${x.cls} ${x.gauche}..${x.droite} (${x.horsEcran} px hors ecran) | ${x.t}`));
  if (reperes.length) { console.log('\n--- boites demandees ---'); console.log(JSON.stringify(d.reperes, null, 1)); }

  await page.screenshot({ path: 'premier_ecran_375.png', clip: { x: 0, y: 0, width: W, height: H } });
  console.log('\ncapture : premier_ecran_375.png');
  await browser.close();
})();
