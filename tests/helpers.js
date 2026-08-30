'use strict';

const path = require('path');
const { pathToFileURL } = require('url');

const JW_HTML = path.resolve(__dirname, '../assistant-jeux/test-local.html');

function jwUrl(query) {
  const u = pathToFileURL(JW_HTML);
  if (query) u.search = query.startsWith('?') ? query : `?${query}`;
  return u.href;
}

const urlJw = jwUrl;

/**
 * Coupe toute requête non-file://. Les leads jw sont simulés dans test-local.html
 * (window.__evxFetches / evxSimulerReseau, marqueur TEST). Rien ne sort vers evenox.ca.
 */
async function couperReseau(page) {
  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.startsWith('file:') || url.startsWith('data:') || url.startsWith('blob:')) {
      return route.continue();
    }
    return route.abort('failed');
  });
}

const bloquerReseau = couperReseau;

async function ouvrirJw(page, query) {
  await couperReseau(page);
  await page.addInitScript(() => {
    try {
      var raw = localStorage.getItem('evx_file_leads');
      var fileEnCours = false;
      if (raw) {
        try {
          var arr = JSON.parse(raw);
          fileEnCours = arr && arr.length > 0;
        } catch (e2) {}
      }
      if (fileEnCours) {
        if (!sessionStorage.getItem('evx_mode')) sessionStorage.setItem('evx_mode', 'echec');
      } else if (!sessionStorage.getItem('evx_session_ouverte')) {
        localStorage.removeItem('evx_file_leads');
      }
    } catch (e) {}
  });
  await page.goto(jwUrl(query));
  await page.evaluate(() => {
    try { sessionStorage.setItem('evx_session_ouverte', '1'); } catch (e) {}
  });
  await page.locator('#jwBox').waitFor();
}

async function choisirCategorie(page, id) {
  await page.locator(`.jw-cat[data-cat="${id}"]`).click();
}

async function ongletCatalogue(page, nomVisible) {
  await page.locator('#jwTabs button, #jwTabs .jw-tab').filter({ hasText: nomVisible }).click();
}

const ongletCategorie = ongletCatalogue;

function itemProduit(page, nom) {
  return page.locator('.jw-item').filter({ hasText: nom }).first();
}

async function plusProduit(page, nom, n) {
  const fois = n == null ? 1 : n;
  const btn = itemProduit(page, nom).locator('button[aria-label^="Plus"]');
  for (let i = 0; i < fois; i++) await btn.click();
}

async function ajouterProduit(page, nom) {
  await plusProduit(page, nom, 1);
}

async function qteProduit(page, nom) {
  const txt = await itemProduit(page, nom).locator('.jw-qte span').innerText();
  return Number(String(txt).trim());
}

async function remplirCoordonnees(page, opts) {
  const o = opts || {};
  await page.locator('#jwNom').fill(o.nom || 'TEST Persona');
  await page.locator('#jwCourriel').fill(o.courriel || 'test@evenox.test');
  if (o.tel) await page.locator('#jwTel').fill(o.tel);
}

async function continuer(page) {
  await page.locator('#jwSuiv').click();
}

async function allerAuPrix(page, opts) {
  const o = opts || {};
  await page.locator('#jwSuiv').click();
  if (o.mode === 'ramassage') {
    await page.locator('#jwModeRam').click();
  } else {
    await page.locator('#jwModeLiv').click();
    if (o.cp) await page.locator('#jwCP').fill(o.cp);
  }
  await page.locator('#jwSuiv').click();
  await remplirCoordonnees(page, o);
  await page.locator('#jwSuiv').click();
  await page.locator('#jwStep-prix').waitFor();
}

function parseArgent(txt) {
  const n = String(txt)
    .replace(/\u00a0/g, ' ')
    .replace(/[^\d,.-]/g, '')
    .replace(/\s/g, '')
    .replace(',', '.');
  return Number(n);
}

async function fetches(page) {
  return page.evaluate(() => window.__evxFetches || []);
}

async function nbEnvois(page) {
  return page.evaluate(() => {
    if (window.__evxFetches && window.__evxFetches.length) return window.__evxFetches.length;
    if (window.evxSimulerReseau) return window.evxSimulerReseau.envois.length;
    return 0;
  });
}

module.exports = {
  jwUrl,
  urlJw,
  couperReseau,
  bloquerReseau,
  ouvrirJw,
  choisirCategorie,
  ongletCatalogue,
  ongletCategorie,
  plusProduit,
  ajouterProduit,
  qteProduit,
  remplirCoordonnees,
  continuer,
  allerAuPrix,
  parseArgent,
  fetches,
  nbEnvois,
};
