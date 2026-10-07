// Tests Playwright du formulaire Évenox (hors dépôt). Exécution : node run.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const assert = require('assert/strict');
const { chromium } = require('/opt/node-tools/node_modules/playwright');

const SNIPPET = require('path').join(__dirname, '..', '..', 'site', 'formulaire-evenox.html');
const SHOT = '/home/user/Evenox/site/apercu-mobile.png';
const received = [];

function wrapper() {
  return `<!doctype html><html lang="fr-CA"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Test formulaire</title>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});</script>
</head><body style="margin:0;background:#efece6;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"><main style="padding:24px 16px">${fs.readFileSync(SNIPPET, 'utf8')}</main></body></html>`;
}

const server = http.createServer((req, res) => {
  const cors = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'POST, OPTIONS' };
  if (req.method === 'OPTIONS') { res.writeHead(204, cors); return res.end(); }
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', () => {
      if (req.url.startsWith('/api/fail')) { res.writeHead(500, cors); return res.end('{}'); }
      received.push({ url: req.url, contentType: req.headers['content-type'], body: JSON.parse(body) });
      res.writeHead(200, { ...cors, 'Content-Type': 'application/json' });
      res.end('{"ok":true}');
    });
    return;
  }
  if (req.url.startsWith('/merci-')) { res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); return res.end('<!doctype html><title>Merci</title><h1>MERCI</h1>'); }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(wrapper());
});

function daysFromNow(n) { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10).length && `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; }

let browser, BASE;
const results = [];

async function newPage(cfg, { width = 1100, height = 900 } = {}) {
  const context = await browser.newContext({ viewport: { width, height }, locale: 'fr-CA' });
  const page = await context.newPage();
  const events = [];
  await page.exposeFunction('__dlRecord', (e) => events.push(e));
  await page.addInitScript((c) => {
    window.EVENOX_FORM_CONFIG = c;
    window.dataLayer = [];
    const op = Array.prototype.push;
    window.dataLayer.push = function () {
      for (const a of arguments) {
        try {
          const copy = a && typeof a === 'object' && typeof a.length === 'number' ? Array.from(a) : JSON.parse(JSON.stringify(a));
          window.__dlRecord(copy);
        } catch (e) { /* ignore */ }
      }
      return op.apply(this, arguments);
    };
  }, cfg);
  page.on('pageerror', (e) => { throw new Error('Erreur JS dans la page : ' + e.message); });
  return { context, page, events };
}
const named = (events, name) => events.filter((e) => e && e.event === name);

async function pick(page, name, value) {
  const id = await page.locator(`input[name="${name}"][value="${value}"]`).getAttribute('id');
  await page.click(`label[for="${id}"]`);
}
async function next(page) { await page.click('#evxq-next'); }
async function stepIs(page, n) {
  await page.waitForFunction((k) => { const s = document.querySelector(`.evxq-step[data-step="${k}"]`); return s && !s.hidden; }, n);
}

async function walk(page, o) {
  if (o.type) await pick(page, 'type_evenement', o.type);
  await next(page); await stepIs(page, 2);
  if (o.date) await page.fill('#evxq-date_evenement', o.date); else await page.check('#evxq-date_flexible');
  await page.fill('#evxq-ville', o.ville);
  await pick(page, 'type_lieu', o.lieu || 'salle');
  await next(page); await stepIs(page, 3);
  await pick(page, 'nb_invites', o.invites);
  await pick(page, 'budget', o.budget);
  if (o.services) for (const s of o.services) await pick(page, 'services', s);
  await next(page); await stepIs(page, 4);
  await pick(page, 'type_client', o.client);
  if (o.entreprise) await page.fill('#evxq-entreprise', o.entreprise);
  await pick(page, 'role_decision', o.role || 'Je décide');
  await pick(page, 'echeance_decision', o.echeance || 'Cette semaine');
  await next(page); await stepIs(page, 5);
  await page.fill('#evxq-prenom', o.prenom || 'Julie');
  await page.fill('#evxq-nom', o.nom || 'Tremblay');
  await page.fill('#evxq-courriel', o.courriel || 'julie.tremblay@exemple.com');
  await page.type('#evxq-telephone', o.tel || '5145551234');
  if (o.consentMarketing) await page.check('#evxq-consent_marketing');
  if (o.consentMesure) await page.check('#evxq-consent_mesure');
}
const hidden = (page, k) => page.inputValue(`#evxq-hid-${k}`);

async function test(name, fn) {
  try { await fn(); results.push(['OK  ', name]); }
  catch (e) { results.push(['FAIL', name + '\n      ' + (e.stack || e.message).split('\n').slice(0, 4).join('\n      ')]); }
}

(async () => {
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  BASE = `http://localhost:${server.address().port}`;
  try {
    browser = await chromium.launch();
  } catch (e) {
    browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  }
  const API = `${BASE}/api/lead`;

  await test('Route A : corporatif ?forfait=gala, UTM + gclid en champs cachés, consentement refusé', async () => {
    received.length = 0;
    const { context, page, events } = await newPage({ endpoint: API, redirect: false });
    await page.goto(`${BASE}/soumission/?utm_source=google&utm_medium=cpc&utm_campaign=gads_corpo_fetes&utm_content=rsa_prixfixe_v1&utm_term=party+de+bureau&gclid=TEST123&gbraid=GB1&msclkid=MS1&oppref=OP1&forfait=gala&v=h2`);
    assert.equal(await page.isChecked('input[name=type_evenement][value=corpo_gala]'), true, 'gala présélectionné');
    assert.match(await page.textContent('#evxq-forfait'), /Forfait choisi\s:\sGala Signature \(2\s495\s\$\)/);
    assert.equal(await page.isChecked('#evxq-consent_marketing'), false);
    assert.equal(await page.isChecked('#evxq-consent_mesure'), false);
    assert.equal(await hidden(page, 'utm_source'), 'google');
    assert.equal(await hidden(page, 'utm_medium'), 'cpc');
    assert.equal(await hidden(page, 'utm_campaign'), 'gads_corpo_fetes');
    assert.equal(await hidden(page, 'utm_content'), 'rsa_prixfixe_v1');
    assert.equal(await hidden(page, 'utm_term'), 'party de bureau');
    assert.equal(await hidden(page, 'gclid'), 'TEST123');
    assert.equal(await hidden(page, 'gbraid'), 'GB1');
    assert.equal(await hidden(page, 'msclkid'), 'MS1');
    assert.equal(await hidden(page, 'oppref'), 'OP1');
    assert.equal(await hidden(page, 'landing_page'), '/soumission/');
    assert.equal(await hidden(page, 'forfait_presel'), 'gala');
    assert.equal(await hidden(page, 'variante_hero'), 'h2');
    const eid = await hidden(page, 'event_id');
    assert.match(eid, /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    await context.addCookies([{ name: '_fbp', value: 'fb.1.123.456', url: BASE }]);
    await walk(page, { date: daysFromNow(30), ville: 'laval', invites: '75_149', budget: '2500_4999', client: 'entreprise', entreprise: 'Acme inc.', services: ['Chapiteau'] });
    assert.equal(await page.inputValue('#evxq-telephone'), '(514) 555-1234', 'masque téléphone');
    assert.equal((await page.textContent('#evxq-next')).trim(), 'Recevoir ma proposition');
    await next(page);
    await page.waitForSelector('#evxq-thanks[data-route="A"]');
    assert.match(await page.textContent('#evxq-thanks'), /15 prochaines minutes|demain dès 9 h/);
    assert.equal(await hidden(page, 'route'), 'A');
    assert.equal(await hidden(page, 'lead_score'), String(30 + 20 + 12 + 10 + 10 + 5));
    assert.deepEqual(JSON.parse(await hidden(page, 'consent_state')), { ad_storage: 'denied', analytics_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    assert.equal(named(events, 'form_start').length, 1, 'form_start une seule fois');
    assert.deepEqual(named(events, 'form_step').map((e) => e.step), [1, 2, 3, 4, 5]);
    const ls = named(events, 'lead_submit');
    assert.equal(ls.length, 1);
    assert.equal(ls[0].lead_route, 'A'); assert.equal(ls[0].lead_qualifie, true); assert.equal(ls[0].lead_value, 400);
    assert.equal(ls[0].currency, 'CAD'); assert.equal(ls[0].event_type, 'corpo_gala'); assert.equal(ls[0].budget_band, '2500_4999');
    assert.equal(ls[0].event_id, eid);
    assert.equal('user_data' in ls[0], false, 'pas de user_data sans consent_mesure');
    assert.equal(received.length, 1);
    const b = received[0].body;
    assert.equal(received[0].contentType, 'application/json');
    assert.equal(b.route, 'A'); assert.equal(b.event_id, eid); assert.equal(b.gclid, 'TEST123'); assert.equal(b.utm_campaign, 'gads_corpo_fetes');
    assert.equal(b.ville, 'Laval', 'ville normalisée'); assert.equal(b.telephone, '+15145551234'); assert.equal(b.entreprise, 'Acme inc.');
    assert.equal(b.consent_marketing, 'non'); assert.equal(b.consent_mesure, 'non'); assert.equal(b.consent_version, 'v2026-10');
    assert.equal(b.fbp, '', '_fbp non lu sans ad_storage');
    assert.equal(b.etape, 'Nouveau'); assert.equal(b.lead_value, 400);
    const cookies = await context.cookies();
    assert.equal(cookies.some((c) => c.name === 'evx_attr'), false, 'aucun témoin evx_attr sans consentement');
    await context.close();
  });

  await test('Route B : mariage ?type=mariage, persistance first-touch, consentement accordé + consent_mesure', async () => {
    received.length = 0;
    const { context, page, events } = await newPage({ endpoint: API, redirect: false });
    await page.goto(`${BASE}/mariage/?utm_source=meta&utm_medium=paid_social&utm_campaign=meta_mariage_deco&fbclid=FB777`);
    await page.goto(`${BASE}/soumission/?type=mariage`);
    assert.equal(await hidden(page, 'utm_source'), 'meta', 'UTM conservé dans sessionStorage');
    assert.equal(await hidden(page, 'fbclid'), 'FB777');
    assert.equal(await hidden(page, 'landing_page'), '/mariage/', 'page d\'arrivée = premier contact');
    assert.equal(await page.isChecked('input[name=type_evenement][value=mariage]'), true);
    await context.addCookies([{ name: '_fbp', value: 'fb.1.999.888', url: BASE }]);
    await page.evaluate(() => gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted', analytics_storage: 'granted' }));
    await walk(page, { date: daysFromNow(200), ville: 'Mirabel', invites: '75_149', budget: '1000_2499', client: 'particulier', courriel: 'Couple.Heureux@Exemple.com', consentMesure: true, consentMarketing: true });
    assert.equal(await page.isVisible('#evxq-f-entreprise'), false, 'champ entreprise masqué pour un particulier');
    assert.equal((await page.textContent('#evxq-next')).trim(), 'Vérifier ma date');
    await next(page);
    await page.waitForSelector('#evxq-thanks[data-route="B"]');
    assert.match(await page.textContent('#evxq-thanks'), /Votre soumission arrive d'ici 24 h/);
    const ls = named(events, 'lead_submit');
    assert.equal(ls.length, 1); assert.equal(ls[0].lead_route, 'B'); assert.equal(ls[0].lead_qualifie, true); assert.equal(ls[0].lead_value, 150);
    assert.deepEqual(ls[0].user_data, { email: 'couple.heureux@exemple.com', phone_number: '+15145551234' });
    const b = received[0].body;
    assert.equal(b.consent_mesure, 'oui'); assert.equal(b.consent_marketing, 'oui');
    assert.equal(b.consent_state.ad_storage, 'granted'); assert.equal(b.fbp, 'fb.1.999.888');
    assert.equal(b.utm_source, 'meta'); assert.equal(b.landing_page, '/mariage/'); assert.equal(b.fbclid, 'FB777');
    assert.equal(b.date_flexible, 'non');
    const cookies = await context.cookies();
    const attr = cookies.find((c) => c.name === 'evx_attr');
    assert.ok(attr, 'témoin evx_attr créé après consentement');
    assert.equal(JSON.parse(decodeURIComponent(attr.value)).fbclid, 'FB777');
    assert.ok(attr.expires - Date.now() / 1000 > 89 * 86400, 'témoin de 90 jours');
    await context.close();
  });

  await test('Route C : entreprise 600–999 $ (5 à 7) → boutique, redirection vers /merci-boutique/', async () => {
    received.length = 0;
    const { context, page, events } = await newPage({ endpoint: API, redirect: true, delaiRedirection: 300 });
    await page.goto(`${BASE}/corporatif/#soumission?forfait=5a7`);
    await page.waitForFunction(() => document.querySelector('input[name=type_evenement][value=corpo_5a7]').checked);
    await walk(page, { date: daysFromNow(5), ville: 'Blainville', invites: '30_74', budget: '600_999', client: 'entreprise', entreprise: 'PME inc.', lieu: 'bureaux' });
    await Promise.all([page.waitForURL('**/merci-boutique/'), next(page)]);
    const ls = named(events, 'lead_submit');
    assert.equal(ls.length, 1); assert.equal(ls[0].lead_route, 'C'); assert.equal(ls[0].lead_qualifie, false); assert.equal(ls[0].lead_value, 0);
    const b = received[0].body;
    assert.equal(b.route, 'C'); assert.equal(b.etape, 'Disqualifié'); assert.equal(b.forfait_presel, '5a7');
    assert.equal(b.date_rapprochee, 'oui'); assert.equal(b.appel_obligatoire, 'non', 'pas d\'appel forcé en C');
    const merci = JSON.parse(await page.evaluate(() => sessionStorage.getItem('evx_merci')));
    assert.equal(merci.route, 'C'); assert.match(merci.boutique, /utm_source=formulaire&utm_medium=referral&utm_campaign=route_c/);
    await context.close();
  });

  await test('Route C (sur place) : lien boutique + mention bon de commande', async () => {
    const { context, page } = await newPage({ endpoint: API, redirect: false });
    await page.goto(`${BASE}/soumission/`);
    await pick(page, 'type_evenement', 'corpo_party');
    await walk(page, { date: daysFromNow(40), ville: 'Rosemère', invites: 'lt30', budget: 'lt600', client: 'entreprise', entreprise: 'Mini inc.' });
    await next(page);
    await page.waitForSelector('#evxq-thanks[data-route="C"]');
    const href = await page.getAttribute('#evxq-thanks a.evxq-btn', 'href');
    assert.equal(href, 'https://evenox.booqableshop.com/?utm_source=formulaire&utm_medium=referral&utm_campaign=route_c');
    assert.match(await page.textContent('#evxq-thanks'), /bon de commande/);
    await context.close();
  });

  await test('Route D : hors zone (plus de 40 km) avec 1 000–2 499 $ → priorité sur B', async () => {
    received.length = 0;
    const { context, page, events } = await newPage({ endpoint: API, redirect: false });
    await page.goto(`${BASE}/soumission/?type=prive`);
    await walk(page, { ville: 'Autre (plus de 40 km)', invites: '30_74', budget: '1000_2499', client: 'particulier', lieu: 'domicile' });
    assert.equal((await page.textContent('#evxq-next')).trim(), 'Recevoir ma soumission');
    await next(page);
    await page.waitForSelector('#evxq-thanks[data-route="D"]');
    assert.match(await page.textContent('#evxq-thanks'), /hors de notre zone/);
    assert.match(await page.getAttribute('#evxq-thanks a.evxq-btn', 'href'), /utm_campaign=route_d/);
    const ls = named(events, 'lead_submit');
    assert.equal(ls[0].lead_route, 'D'); assert.equal(ls[0].lead_qualifie, false); assert.equal(ls[0].lead_value, 0);
    const b = received[0].body;
    assert.equal(b.route, 'D'); assert.equal(b.raison_perte, 'Disqualifié – hors zone'); assert.equal(b.date_flexible, 'oui'); assert.equal(b.date_evenement, '');
    await context.close();
  });

  await test('Matrice de routage (ordre de priorité de la spec)', async () => {
    const { context, page } = await newPage({ endpoint: API });
    await page.goto(`${BASE}/soumission/`);
    const cases = [
      [{ ville: 'Autre (plus de 40 km)', budget: 'lt600', type_evenement: 'mariage', type_client: 'particulier' }, 'D'],
      [{ ville: 'Autre (plus de 40 km)', budget: '2500_4999', type_evenement: 'corpo_gala', type_client: 'entreprise' }, 'A'],
      [{ ville: 'Autre (plus de 40 km)', budget: 'inconnu', type_evenement: 'prive', type_client: 'particulier', nb_invites: 'lt30' }, 'B'],
      [{ ville: 'Laval', budget: 'lt600', type_evenement: 'mariage', type_client: 'particulier' }, 'C'],
      [{ ville: 'Laval', budget: '600_999', type_evenement: 'muni_ecole', type_client: 'organisme' }, 'C'],
      [{ ville: 'Laval', budget: '600_999', type_evenement: 'prive', type_client: 'particulier' }, 'B'],
      [{ ville: 'Laval', budget: '600_999', type_evenement: 'mariage', type_client: 'agence' }, 'A'],
      [{ ville: 'Laval', budget: '1000_2499', type_evenement: 'corpo_party', type_client: 'entreprise' }, 'A'],
      [{ ville: 'Laval', budget: '1000_2499', type_evenement: 'mariage', type_client: 'particulier' }, 'B'],
      [{ ville: 'Laval', budget: '5000p', type_evenement: 'prive', type_client: 'particulier' }, 'A'],
      [{ ville: 'Laval', budget: 'inconnu', type_evenement: 'mariage', type_client: 'particulier', nb_invites: '150p' }, 'A'],
      [{ ville: 'Laval', budget: 'inconnu', type_evenement: 'mariage', type_client: 'particulier', nb_invites: '30_74' }, 'B'],
      [{ ville: 'Laval', budget: 'inconnu', type_evenement: 'corpo_5a7', type_client: 'organisme', nb_invites: 'lt30' }, 'A']
    ];
    for (const [d, want] of cases) {
      const got = await page.evaluate((x) => window.EvenoxForm.computeRoute(x), d);
      assert.equal(got, want, JSON.stringify(d));
    }
    await context.close();
  });

  await test('Point de terminaison vide : message de repli, aucun lead_submit', async () => {
    const { context, page, events } = await newPage({ endpoint: '', redirect: true });
    await page.goto(`${BASE}/soumission/?type=corpo`);
    await walk(page, { date: daysFromNow(20), ville: 'Laval', invites: '150p', budget: '5000p', client: 'entreprise', entreprise: 'X' });
    await next(page);
    await page.waitForSelector('#evxq-msg .evxq-msg');
    assert.match(await page.textContent('#evxq-msg'), /pas encore relié/);
    assert.match(await page.textContent('#evxq-msg'), /514-559-1893/);
    assert.equal(named(events, 'lead_submit').length, 0);
    assert.equal(await page.isVisible('#evxq-form'), true);
    assert.equal(page.url().includes('/merci-'), false);
    await context.close();
  });

  await test('Échec serveur (500) : message d\'erreur, réessai possible, aucun lead_submit', async () => {
    const { context, page, events } = await newPage({ endpoint: `${BASE}/api/fail`, redirect: false });
    await page.goto(`${BASE}/soumission/?type=mariage`);
    await walk(page, { date: daysFromNow(90), ville: 'Laval', invites: '75_149', budget: '1000_2499', client: 'particulier' });
    await next(page);
    await page.waitForSelector('#evxq-msg .evxq-msg');
    assert.match(await page.textContent('#evxq-msg'), /L'envoi n'a pas fonctionné/);
    assert.equal(await page.isEnabled('#evxq-next'), true);
    assert.equal(named(events, 'lead_submit').length, 0);
    await context.close();
  });

  await test('Validation et accessibilité : erreurs annoncées, aria-invalid, focus, clavier, date passée, faute de courriel', async () => {
    const { context, page, events } = await newPage({ endpoint: API, redirect: false });
    await page.goto(`${BASE}/soumission/`);
    assert.equal(named(events, 'form_start').length, 0, 'pas de form_start avant une réponse');
    await next(page);
    assert.equal(await page.isVisible('#evxq-alert'), true);
    assert.equal(await page.getAttribute('#evxq-alert', 'role'), 'alert');
    assert.equal(await page.getAttribute('#evxq-type_evenement-0', 'aria-invalid'), 'true');
    assert.match(await page.getAttribute('#evxq-type_evenement-0', 'aria-describedby'), /evxq-type_evenement-err/);
    assert.equal(await page.evaluate(() => document.activeElement.id), 'evxq-type_evenement-0', 'focus sur le premier champ en erreur');
    // Clavier : flèche droite dans le groupe de cartes, puis Tab jusqu'à « Suivant » et Entrée.
    await page.keyboard.press('ArrowRight');
    assert.equal(await page.isChecked('#evxq-type_evenement-1'), true, 'flèches = choix natif');
    assert.equal(await page.isVisible('#evxq-alert'), false, 'erreur effacée après correction');
    await page.focus('#evxq-next');
    await page.keyboard.press('Enter');
    await stepIs(page, 2);
    assert.equal(await page.evaluate(() => document.activeElement.id), 'evxq-h-2', 'focus sur le titre de l\'étape');
    assert.match(await page.textContent('#evxq-progress-txt'), /Étape 2 de 5/);
    const d = new Date(); d.setDate(d.getDate() - 3);
    await page.fill('#evxq-date_evenement', `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`);
    await page.fill('#evxq-ville', 'Paris');
    await next(page);
    assert.match(await page.textContent('#evxq-date_evenement-err'), /passée/);
    assert.match(await page.textContent('#evxq-ville-err'), /liste/);
    assert.match(await page.textContent('#evxq-alert'), /3 champs/);
    await page.fill('#evxq-date_evenement', daysFromNow(3));
    assert.equal(await page.isVisible('#evxq-date-note'), true, 'avis date rapprochée');
    assert.match(await page.textContent('#evxq-date-note'), /Date rapprochée/);
    // Retour arrière conserve les réponses
    await page.click('#evxq-prev'); await stepIs(page, 1);
    assert.equal(await page.isChecked('#evxq-type_evenement-1'), true);
    await next(page); await stepIs(page, 2);
    await page.fill('#evxq-ville', 'montreal centre-ville');
    await pick(page, 'type_lieu', 'inconnu');
    await next(page); await stepIs(page, 3);
    assert.match(await page.textContent('#evxq-budget-hint'), /1\s195\s\$ à 2\s495\s\$/);
    await pick(page, 'nb_invites', 'lt30'); await pick(page, 'budget', 'inconnu'); await next(page); await stepIs(page, 4);
    await pick(page, 'type_client', 'organisme');
    assert.equal(await page.isVisible('#evxq-f-entreprise'), true);
    await pick(page, 'role_decision', 'Je décide'); await pick(page, 'echeance_decision', "Plus tard / je m'informe");
    await next(page);
    assert.match(await page.textContent('#evxq-entreprise-err'), /nom de l'entreprise/);
    await page.fill('#evxq-entreprise', 'Ville de Test'); await next(page); await stepIs(page, 5);
    assert.equal(await page.isChecked('input[name=canal_prefere][value=appel]'), true, 'Appel par défaut');
    assert.equal(await page.isVisible('#evxq-legal'), true, 'avis Loi 25 visible');
    await page.fill('#evxq-prenom', 'Marc'); await page.fill('#evxq-nom', 'Roy');
    await page.fill('#evxq-courriel', 'marc@gmial.com'); await page.press('#evxq-courriel', 'Tab');
    assert.match(await page.textContent('#evxq-suggest'), /marc@gmail\.com/);
    await page.click('#evxq-suggest-btn');
    assert.equal(await page.inputValue('#evxq-courriel'), 'marc@gmail.com');
    await page.fill('#evxq-telephone', '555');
    await next(page);
    assert.match(await page.textContent('#evxq-telephone-err'), /10 chiffres/);
    await page.fill('#evxq-telephone', '');
    await page.type('#evxq-telephone', '1 450 555 9876');
    assert.equal(await page.inputValue('#evxq-telephone'), '(450) 555-9876');
    received.length = 0;
    await next(page);
    await page.waitForSelector('#evxq-thanks[data-route="A"]');
    assert.equal(received[0].body.temperature, 'Tiède', 'route A + plus tard = Tiède');
    assert.equal(received[0].body.ville, 'Montréal – centre-ville');
    assert.equal(received[0].body.courriel, 'marc@gmail.com');
    assert.equal(await page.evaluate(() => document.activeElement.id), 'evxq-thanks-h');
    await context.close();
  });

  await test('Pot de miel : un robot ne déclenche ni envoi ni conversion', async () => {
    received.length = 0;
    const { context, page, events } = await newPage({ endpoint: API, redirect: false });
    await page.goto(`${BASE}/soumission/?type=mariage`);
    await walk(page, { date: daysFromNow(60), ville: 'Laval', invites: '30_74', budget: '1000_2499', client: 'particulier' });
    await page.evaluate(() => { document.getElementById('evxq-site_web').value = 'spam'; });
    await next(page);
    await page.waitForSelector('#evxq-thanks:not([hidden])');
    assert.equal(received.length, 0); assert.equal(named(events, 'lead_submit').length, 0);
    await context.close();
  });

  await test('Content-Type text/plain (option Zapier) : corps JSON valide', async () => {
    received.length = 0;
    const { context, page } = await newPage({ endpoint: API, redirect: false, contentType: 'text/plain' });
    await page.goto(`${BASE}/soumission/?type=mariage`);
    await walk(page, { date: daysFromNow(60), ville: 'Laval', invites: '30_74', budget: '1000_2499', client: 'particulier' });
    await next(page);
    await page.waitForSelector('#evxq-thanks[data-route="B"]');
    assert.match(received[0].contentType, /^text\/plain/); assert.equal(received[0].body.route, 'B');
    await context.close();
  });

  await test('Mobile 400 px : pas de défilement horizontal, 6 cartes visibles, capture', async () => {
    const { context, page } = await newPage({ endpoint: API }, { width: 400, height: 860 });
    await page.goto(`${BASE}/soumission/?forfait=party`);
    const sw = await page.evaluate(() => document.documentElement.scrollWidth);
    assert.ok(sw <= 400, 'scrollWidth ' + sw);
    const lastCard = await page.locator('label[for="evxq-type_evenement-5"]').boundingBox();
    assert.ok(lastCard.y + lastCard.height < 860, '6e carte visible sans défilement');
    await page.screenshot({ path: SHOT, fullPage: true });
    await context.close();
  });

  await browser.close();
  server.close();
  for (const [s, n] of results) console.log(`${s} ${n}`);
  const fails = results.filter((r) => r[0] === 'FAIL').length;
  console.log(`\n${results.length - fails}/${results.length} réussis`);
  process.exit(fails ? 1 : 0);
})();
