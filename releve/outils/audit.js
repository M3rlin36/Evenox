/*
 * Deuxieme passage : verification. On ne se contente plus de constater qu'il ne
 * se passe rien, on prouve que le clic a bien atteint le bouton.
 *
 * Pour chaque bouton : on pose un ecouteur en phase de capture sur le
 * declencheur lui-meme (shadow DOM compris), on releve ce qui se trouve
 * reellement sous le curseur au point vise (test d'impact traversant les
 * shadow roots), on clique, puis on lit si l'evenement a ete recu.
 *
 * Pages sans bouton : on releve ce que la source contient malgre tout
 * (marqueurs booqable, elements a UUID, formulaire WooCommerce).
 *
 * Lecture seule. Meme file d'attente : une requete evenox.ca a la fois.
 */
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME = '/usr/local/bin/google-chrome';
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
const ECART_MS = 1200, ATTENTE_HYDRATATION = 10000, ATTENTE_APRES_CLIC = 7000;

const urls = fs.readFileSync(process.argv[2], 'utf8').split('\n').map(s => s.trim()).filter(Boolean);
const sortie = process.argv[3];
fs.mkdirSync(sortie, { recursive: true });

let dernier = 0, chaine = Promise.resolve(), nbHote = 0;
const fileHote = t => (chaine = chaine.then(async () => {
  const d = Date.now() - dernier;
  if (d < ECART_MS) await new Promise(r => setTimeout(r, ECART_MS - d));
  dernier = Date.now(); nbHote++;
  try { await t(); } catch {}
}));
const dors = ms => new Promise(r => setTimeout(r, ms));
const estHote = u => { try { return new URL(u).hostname.endsWith('evenox.ca'); } catch { return false; } };

const PRELUDE = `
window.__evx = {
  conteneurs() {
    const l = [];
    document.querySelectorAll('.booqable-product-button').forEach(e => l.push({ el: e, genre: 'embed herite (div.booqable-product-button)' }));
    document.querySelectorAll('bq-product-button, bq-add-to-cart, bq-product-add-to-cart').forEach(e => l.push({ el: e, genre: 'composant ' + e.tagName.toLowerCase() }));
    return l;
  },
  declencheur(el) {
    const r = el.shadowRoot || el;
    for (const s of ['button.bq-button', 'input.bq-button', '.bq-button', 'button[type=submit]', 'input[type=submit]']) {
      const c = r.querySelector(s); if (c) return c;
    }
    const t = Array.from(r.querySelectorAll('button, [role=button], a.button')).filter(c => !c.disabled);
    return t.sort((a, b) => b.getBoundingClientRect().width - a.getBoundingClientRect().width)[0] || null;
  },
  selecteur(el) { const r = el.shadowRoot || el; return r.querySelector('select.bq-variation') || r.querySelector('select'); },
  // test d'impact traversant les shadow roots
  souslePoint(x, y) {
    const pile = [];
    let el = document.elementFromPoint(x, y);
    while (el) {
      pile.push({ balise: el.tagName.toLowerCase(), classe: (el.className || '').toString().slice(0, 90), id: el.id || null });
      if (el.shadowRoot) { const s = el.shadowRoot.elementFromPoint(x, y); if (s && s !== el) { el = s; continue; } }
      break;
    }
    return pile;
  },
};
`;

const PANIER = `(async () => {
  const id = localStorage.getItem('bqCartId');
  const base = 'https://evenox.booqableshop.com/api/1/cart?source=store&provider=wordpress';
  try {
    const r = await fetch(id ? base + '&id=' + encodeURIComponent(id) : base, { credentials: 'omit', headers: { Accept: 'application/json' } });
    const j = await r.json(); const c = j.cart || {};
    return { cart_id: c.id || id || null, statut_http: r.status, nb_lignes: (c.items || c.lines || []).length, total_cents: c.grand_total_in_cents ?? null };
  } catch (e) { return { erreur: String(e).slice(0, 200), cart_id: id }; }
})()`;

(async () => {
  const nav = await puppeteer.launch({ executablePath: CHROME, headless: 'shell', args: ['--no-sandbox', '--disable-dev-shm-usage', '--window-size=1440,1200'] });
  let arret = null;
  const journal = [];

  for (let n = 0; n < urls.length; n++) {
    const url = urls[n], slug = url.replace(/\/$/, '').split('/').pop();
    const fiche = { url, slug, statut_document: null, boutons: [], clics: [], absence: null, console: [], erreurs_page: [], reseau_booqable: [], note: null };
    console.error(`[${n + 1}/${urls.length}] ${slug}`);

    const page = await nav.newPage();
    await page.setViewport({ width: 1440, height: 1200 });
    await page.setUserAgent(UA);
    await page.evaluateOnNewDocument(PRELUDE);
    await page.setRequestInterception(true);
    let fen = null;

    page.on('request', req => {
      const u = req.url(), t = req.resourceType();
      if (fen && ['xhr', 'fetch'].includes(t)) fen.requetes.push({ methode: req.method(), url: u.slice(0, 250) });
      if (['image', 'media', 'font'].includes(t)) return req.abort().catch(() => {});
      if (estHote(u)) fileHote(() => req.continue()); else req.continue().catch(() => {});
    });
    page.on('console', m => {
      if (!['error', 'warning'].includes(m.type())) return;
      let src = ''; try { src = (m.location() || {}).url || ''; } catch {}
      const e = { type: m.type(), texte: m.text().slice(0, 600), source: src.slice(0, 200) };
      if (/ERR_FAILED|ERR_BLOCKED/.test(e.texte) && /\.(png|jpe?g|webp|gif|svg|ttf|woff2?)/i.test(e.source)) return;
      fiche.console.push(e); if (fen) fen.console.push(e);
    });
    page.on('pageerror', err => { const e = { texte: String(err).slice(0, 600) }; fiche.erreurs_page.push(e); if (fen) fen.erreurs_page.push(e); });
    page.on('response', async res => {
      const u = res.url();
      if (!/booqable/i.test(u) || /\.(js|css|png|jpe?g|svg|woff2?)($|\?)/i.test(u)) return;
      const e = { methode: res.request().method(), statut: res.status(), url: u.slice(0, 300) };
      try { const ct = res.headers()['content-type'] || ''; if (/json|text/.test(ct)) e.corps = (await res.text()).slice(0, 900); } catch {}
      const pd = res.request().postData(); if (pd) e.corps_envoye = pd.slice(0, 500);
      fiche.reseau_booqable.push(e); if (fen) fen.reponses.push(e);
    });

    try {
      const rep = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 300000 });
      fiche.statut_document = rep ? rep.status() : null;
      if (fiche.statut_document === 403) { fiche.note = 'HTTP 403 : arret.'; arret = url; journal.push(fiche); await page.close().catch(() => {}); break; }
      await dors(ATTENTE_HYDRATATION);
      fiche.titre = await page.title();

      fiche.boutons = await page.evaluate(`(() => {
        const uuidRe = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return window.__evx.conteneurs().map((c, i) => {
          const el = c.el, a = {}; for (const at of el.attributes) a[at.name] = at.value;
          const clic = window.__evx.declencheur(el), sel = window.__evx.selecteur(el);
          const ident = a['data-id'] || a['product-id'] || a['data-product-id'] || a['data-evx-uuid'] || null;
          const r = clic ? clic.getBoundingClientRect() : null;
          return { index: i, genre: c.genre, attributs: a, identifiant: ident,
            identifiant_est_uuid: !!(ident && uuidRe.test(ident)), initialise: el.hasAttribute('initialized'),
            bouton_rendu: !!clic, texte_bouton: clic ? (clic.innerText || clic.textContent || clic.value || '').trim().slice(0,150) : null,
            bouton_desactive: clic ? !!clic.disabled : null, dans_shadow_dom: !!(el.shadowRoot && clic && el.shadowRoot.contains(clic)),
            rect_bouton: r ? { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) } : null,
            selecteur_variantes: !!sel, nb_options_variantes: sel ? sel.options.length : 0,
            options_variantes: sel ? Array.from(sel.options).map(o => o.text.trim()).slice(0, 40) : null,
            html_hote: el.outerHTML.slice(0, 350) };
        });
      })()`);

      for (const b of fiche.boutons) {
        if (!b.identifiant) continue;
        b.resolution_catalogue = await page.evaluate(async id => {
          const u = 'https://evenox.booqableshop.com/api/boomerang/items/' + encodeURIComponent(id);
          try { const r = await fetch(u, { credentials: 'omit', headers: { Accept: 'application/json' } }); return { url: u, statut: r.status, corps: (await r.text()).slice(0, 300) }; }
          catch (e) { return { url: u, erreur: String(e).slice(0, 150) }; }
        }, b.identifiant);
      }

      if (!fiche.boutons.length) {
        fiche.absence = await page.evaluate(() => {
          const h = document.documentElement.outerHTML;
          const compte = s => (h.match(new RegExp(s, 'gi')) || []).length;
          return {
            source_contient_embed: compte('booqable-product-button'),
            source_contient_composant: compte('bq-product-button'),
            elements_bq: Array.from(document.querySelectorAll('*')).filter(e => e.tagName.toLowerCase().startsWith('bq-')).map(e => e.tagName.toLowerCase() + (e.getAttribute('product-id') ? '[' + e.getAttribute('product-id') + ']' : '')).slice(0, 20),
            elements_uuid: Array.from(document.querySelectorAll('[data-evx-uuid],[product-id],[data-product-id],[data-id]')).map(e => e.tagName.toLowerCase() + ' ' + (e.getAttribute('data-evx-uuid') || e.getAttribute('product-id') || e.getAttribute('data-product-id') || e.getAttribute('data-id'))).slice(0, 25),
            formulaire_woocommerce: document.querySelectorAll('form.cart, button.single_add_to_cart_button').length,
            texte_panier_visible: Array.from(document.querySelectorAll('a,button')).map(e => (e.innerText || '').trim()).filter(t => /panier|ajouter/i.test(t)).slice(0, 10),
            classes_booqable: Array.from(document.querySelectorAll('[class*=booqable]')).map(e => (e.className || '').toString().slice(0, 60)).slice(0, 15),
          };
        });
      }

      fiche.panier_avant = await page.evaluate(PANIER);
      console.error(`    statut=${fiche.statut_document} boutons=${fiche.boutons.length} panier=${fiche.panier_avant.nb_lignes} req=${nbHote}`);

      for (const b of fiche.boutons) {
        const clic = { index: b.index, identifiant: b.identifiant, texte_bouton: b.texte_bouton, effectue: false, variante_choisie: null };
        if (!b.bouton_rendu) { clic.raison_non_clic = 'aucun declencheur cliquable rendu'; fiche.clics.push(clic); continue; }
        const avant = await page.evaluate(PANIER);
        clic.panier_avant = avant;

        if (b.selecteur_variantes && b.nb_options_variantes > 1) {
          clic.variante_choisie = await page.evaluate(i => {
            const el = window.__evx.conteneurs()[i].el, sel = window.__evx.selecteur(el);
            const o = Array.from(sel.options).find(o => o.value && !/s[eé]lectionn|choisis|choose|select/i.test(o.text));
            if (!o) return null;
            sel.value = o.value;
            sel.dispatchEvent(new Event('input', { bubbles: true })); sel.dispatchEvent(new Event('change', { bubbles: true }));
            return { texte: o.text.trim(), valeur: o.value };
          }, b.index);
          await dors(2500);
        }

        // on arme le temoin de reception sur le declencheur lui-meme
        const prep = await page.evaluate(i => {
          const el = window.__evx.conteneurs()[i].el;
          el.scrollIntoView({ block: 'center' });
          const c = window.__evx.declencheur(el);
          if (!c) return null;
          window.__evxTemoin = { clic: 0, pointerdown: 0, cible: null };
          const h = ev => { window.__evxTemoin[ev.type]++; window.__evxTemoin.cible = (ev.target && ev.target.tagName || '').toLowerCase(); };
          c.addEventListener('click', h, true);
          c.addEventListener('pointerdown', h, true);
          const r = c.getBoundingClientRect();
          const x = Math.round(r.x + r.width / 2), y = Math.round(r.y + r.height / 2);
          return { x, y, w: Math.round(r.width), h: Math.round(r.height), texte: (c.innerText || c.textContent || '').trim().slice(0, 80), sous_le_point: window.__evx.souslePoint(x, y) };
        }, b.index);
        clic.cible = prep;

        fen = { console: [], erreurs_page: [], reponses: [], requetes: [] };
        try {
          if (!prep) clic.raison_non_clic = 'declencheur introuvable';
          else if (prep.y < 0 || prep.y > 1200 || prep.w < 1) clic.raison_non_clic = 'hors fenetre: ' + JSON.stringify(prep);
          else {
            await page.mouse.move(prep.x, prep.y);
            await page.mouse.click(prep.x, prep.y);
            clic.effectue = true;
            await dors(ATTENTE_APRES_CLIC);
          }
        } catch (e) { clic.erreur_technique = String(e).slice(0, 250); }
        clic.temoin = await page.evaluate(() => window.__evxTemoin || null);
        clic.observe = fen; fen = null;
        clic.panier_apres = await page.evaluate(PANIER);
        clic.etat_conteneur_apres = await page.evaluate(i => {
          const el = window.__evx.conteneurs()[i].el; if (!el) return null;
          const r = el.shadowRoot || el;
          return { texte: ((el.innerText || '') + ' ' + (el.shadowRoot ? el.shadowRoot.textContent : '')).trim().slice(0, 300),
                   erreurs: Array.from(r.querySelectorAll('[class*=error],[role=alert]')).map(e => (e.innerText || e.textContent || '').trim()).filter(Boolean).slice(0, 4) };
        }, b.index);
        fiche.clics.push(clic);
      }
    } catch (e) { fiche.note = 'echec: ' + String(e).slice(0, 300); console.error('    ERREUR ' + fiche.note); }

    await page.close().catch(() => {});
    journal.push(fiche);
    fs.writeFileSync(path.join(sortie, `${String(n + 1).padStart(2, '0')}-${slug}.json`), JSON.stringify(fiche, null, 1));
    await dors(2500);
  }
  await nav.close();
  fs.writeFileSync(path.join(sortie, '_journal.json'), JSON.stringify({ arret, pages: journal.length, requetes_hote: nbHote }, null, 1));
  console.error(`Termine. pages=${journal.length} req_hote=${nbHote} arret=${arret}`);
})();
