'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

const SOURCE_FILES = [
  'gonflables-blob1.js',
  'jeux-geants-blob1.js',
  'jeux-geants-blob2.js',
  'arcade-blob1.js',
  'chapiteaux-blob1.js',
  'kit-wizard-decoded.js',
  'assistant-jeux/jw-widget.js',
  'assistant-evenement/ev-widget.js',
  'calculateur-fete.html',
  'CURSOR-BRIEF.md',
  'page-nos-forfaits-secteur.js',
  'page-location-jeux-exterieurs-cartes.html',
];

const KIT_STOCK = {
  brune: 520,
  blanche: 200,
  rembourree: 158,
  martha: 72,
  chiavari_tr: 34,
  chiavari_bl: 120,
  rect6: 105,
  rect8: 15,
  ronde48: 7,
  ronde60: 10,
};

const CATEGORIE_PAR_FICHIER = {
  'gonflables-blob1.js': 'gonflables',
  'jeux-geants-blob1.js': 'jeux-geants',
  'jeux-geants-blob2.js': 'jeux-geants',
  'arcade-blob1.js': 'arcade',
  'chapiteaux-blob1.js': 'chapiteaux',
  'kit-wizard-decoded.js': 'mobilier',
  'assistant-jeux/jw-widget.js': 'assistant-jeux',
  'assistant-evenement/ev-widget.js': 'assistant-evenement',
  'calculateur-fete.html': 'calculateur-fete',
  'CURSOR-BRIEF.md': 'brief',
  'page-nos-forfaits-secteur.js': 'forfaits-secteur',
  'page-location-jeux-exterieurs-cartes.html': 'landing-jeux-exterieurs',
};

function readSource(rel) {
  const full = path.join(ROOT, rel);
  if (!fs.existsSync(full)) return null;
  return fs.readFileSync(full, 'utf8');
}

function slugify(nom) {
  return String(nom)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const IDS_CHAISES_NAPPES = new Set([
  'blanche',
  'brune',
  'rembourree',
  'martha',
  'chiavari_tr',
  'chiavari_bl',
]);

function pasPour(id, nom) {
  const s = `${id} ${nom}`.toLowerCase();
  if (IDS_CHAISES_NAPPES.has(id) || /chaise|nappe/.test(s)) return 5;
  return 1;
}

function maxPour(id) {
  if (Object.prototype.hasOwnProperty.call(KIT_STOCK, id)) return KIT_STOCK[id];
  return null;
}

function categoriePour(fichier, id, nom, hint) {
  if (hint) return hint;
  const s = `${id} ${nom} ${fichier}`.toLowerCase();
  if (/marq-|chapiteau|marquise/.test(s)) return 'chapiteaux';
  if (/forfait|express/.test(s)) return 'forfaits';
  if (/seuil|livraison/.test(s)) return 'regle';
  if (/gonflable|bouncer|dunk|piscine/.test(s)) return 'gonflables';
  if (/arcade|pacman|skeeball|nintendo|oculus/.test(s)) return 'arcade';
  if (/geant|connect|jenga|twister|cornhole/.test(s)) return 'jeux-geants';
  if (/chaise|table|nappe|cocktail/.test(s)) return 'mobilier';
  return CATEGORIE_PAR_FICHIER[fichier] || 'autre';
}

function parseJsObjects(text, fichier) {
  const hits = [];
  const re =
    /\{\s*(?:id|max)\s*:\s*(?:'([^']+)'|"([^"]+)"|(\d+))\s*,([^{}]*?)prix\s*:\s*([0-9]+(?:\.[0-9]+)?)/g;
  let m;
  while ((m = re.exec(text))) {
    const rawId = m[1] || m[2] || (m[3] != null ? String(m[3]) : null);
    const inner = m[4] || '';
    const prix = Number(m[5]);
    const nomM = inner.match(/nom\s*:\s*(?:'((?:\\'|[^'])*)'|"((?:\\"|[^"])*)")/);
    if (!nomM) continue;
    const nom = (nomM[1] || nomM[2] || '').replace(/\\'/g, "'").replace(/\\"/g, '"');
    if (!nom) continue;
    if (prix === 0 && /aucune|pas besoin|non merci/i.test(nom)) continue;
    const id = rawId && !/^\d+$/.test(rawId) ? rawId : slugify(nom);
    const line = text.slice(0, m.index).split('\n').length;
    hits.push({ id, nom, prix, fichier, ligne: line });
  }
  return hits;
}

function parseJsonArrays(text, fichier) {
  const hits = [];
  const re = /\{\s*"id"\s*:\s*"([^"]+)"\s*,\s*"nom"\s*:\s*"([^"]+)"[\s\S]*?"prix"\s*:\s*([0-9]+(?:\.[0-9]+)?)/g;
  let m;
  while ((m = re.exec(text))) {
    const line = text.slice(0, m.index).split('\n').length;
    hits.push({ id: m[1], nom: m[2], prix: Number(m[3]), fichier, ligne: line });
  }
  return hits;
}

function parseKitNappes(text, fichier) {
  const hits = [];
  const re = /([a-z]+)\s*:\s*\{\s*nom\s*:\s*'([^']+)'\s*,\s*prix\s*:\s*([0-9]+(?:\.[0-9]+)?)/g;
  let m;
  while ((m = re.exec(text))) {
    if (fichier !== 'kit-wizard-decoded.js') continue;
    const line = text.slice(0, m.index).split('\n').length;
    hits.push({
      id: `nappe-${m[1]}`,
      nom: m[2],
      prix: Number(m[3]),
      fichier,
      ligne: line,
    });
  }
  const extras = [
    { id: 'table-cocktail', re: /var COCKTAIL = \{ nom:'([^']+)', prix:([0-9.]+)/ },
    { id: 'nappe-cocktail', re: /var NAPPE_COCKTAIL = \{ nom:'([^']+)', prix:([0-9.]+)/ },
  ];
  for (const extra of extras) {
    const em = extra.re.exec(text);
    if (!em) continue;
    hits.push({
      id: extra.id,
      nom: em[1],
      prix: Number(em[2]),
      fichier,
      ligne: text.slice(0, em.index).split('\n').length,
    });
  }
  return hits;
}

function parseLandingCards(text, fichier) {
  const hits = [];
  const re = /<h4>([^<]+)<\/h4>[\s\S]*?<div class="product-price">\s*([0-9]+(?:[.,][0-9]+)?)\s*\$/g;
  let m;
  while ((m = re.exec(text))) {
    const nom = m[1].trim();
    const prix = Number(m[2].replace(',', '.'));
    hits.push({
      id: slugify(nom),
      nom,
      prix,
      fichier,
      ligne: text.slice(0, m.index).split('\n').length,
    });
  }
  return hits;
}

function parseBrief(text, fichier) {
  const hits = [];
  const rows = [
    { id: 'forfait-essentiel', nom: 'Forfait Essentiel', prix: 449, needle: '| Essentiel | 449 $' },
    { id: 'forfait-reception', nom: 'Forfait Réception', prix: 649, needle: '| Réception | 649 $' },
    { id: 'forfait-grande-salle', nom: 'Forfait Grande Salle', prix: 849, needle: '| Grande Salle | 849 $' },
    { id: 'chaise-pliante-blanche', nom: 'Chaise pliante blanche', prix: 3, needle: 'chaise pliante blanche 3 $' },
    { id: 'chaise-haute-noire', nom: 'Chaise haute noire', prix: 8, needle: 'chaise haute noire 8 $' },
    { id: 'table-cocktail', nom: 'Table à cocktail', prix: 10, needle: 'table à cocktail 10 $' },
    { id: 'nappe-cocktail', nom: 'Nappe à cocktail', prix: 6, needle: 'nappe à cocktail 6 $' },
    { id: 'ronde60', nom: 'Table ronde 60 po', prix: 15, needle: 'table ronde 60 po 15 $' },
    { id: 'forfait-jeux-essentiel', nom: 'Forfait Jeux Essentiel', prix: 499, needle: 'Jeux Essentiel/Premium/Méga Fête 499/599/1099 $' },
    { id: 'forfait-jeux-premium', nom: 'Forfait Jeux Premium', prix: 599, needle: 'Jeux Essentiel/Premium/Méga Fête 499/599/1099 $' },
    { id: 'forfait-mega-fete', nom: 'Forfait Méga Fête', prix: 1099, needle: 'Jeux Essentiel/Premium/Méga Fête 499/599/1099 $' },
    { id: 'forfait-corpo-1195', nom: 'Forfait corpo 1195', prix: 1195, needle: 'corpo 1195/1995/2495 $' },
    { id: 'forfait-corpo-1995', nom: 'Forfait corpo 1995', prix: 1995, needle: 'corpo 1195/1995/2495 $' },
    { id: 'forfait-corpo-2495', nom: 'Forfait corpo 2495', prix: 2495, needle: 'corpo 1195/1995/2495 $' },
    { id: 'forfait-decor-wow', nom: 'Décor WOW', prix: 899, needle: 'Décor WOW 899 $' },
    { id: 'forfait-soiree-signature', nom: 'Soirée Signature', prix: 1449, needle: 'Soirée Signature 1449 $' },
    { id: 'forfait-photobooth-799', nom: 'Photobooth 799', prix: 799, needle: 'photobooth 799/1099 $' },
    { id: 'forfait-photobooth-1099', nom: 'Photobooth 1099', prix: 1099, needle: 'photobooth 799/1099 $' },
    { id: 'forfait-arcade', nom: 'Forfait arcade', prix: 299, needle: 'arcade 299 $' },
    { id: 'forfait-mobilier-649', nom: 'Forfait mobilier 649 (calculateur fête)', prix: 649, needle: 'mobilier 649/849/1049 $' },
    { id: 'forfait-mobilier-849', nom: 'Forfait mobilier 849 (calculateur fête)', prix: 849, needle: 'mobilier 649/849/1049 $' },
    { id: 'forfait-mobilier-1049', nom: 'Forfait mobilier 1049 (calculateur fête)', prix: 1049, needle: 'mobilier 649/849/1049 $' },
    { id: 'express-72h-20', nom: 'Express 72 h — 20 pers', prix: 90, needle: '90 $ / 20 pers' },
    { id: 'express-72h-50', nom: 'Express 72 h — 50 pers', prix: 210, needle: '210 $ / 50 pers' },
    { id: 'express-72h-100', nom: 'Express 72 h — 100 pers', prix: 420, needle: '420 $ / 100 pers' },
    { id: 'seuil-livraison-incluse', nom: 'Seuil de livraison incluse', prix: 449, needle: 'Seuil de livraison incluse : **449 $** à un endroit, **500 $**' },
    { id: 'seuil-livraison-incluse', nom: 'Seuil de livraison incluse', prix: 500, needle: '**500 $** dans le widget de secteur' },
  ];
  for (const row of rows) {
    const idx = text.indexOf(row.needle);
    if (idx < 0) continue;
    hits.push({
      id: row.id,
      nom: row.nom,
      prix: row.prix,
      fichier,
      ligne: text.slice(0, idx).split('\n').length,
    });
  }
  return hits;
}

function parseSecteur(text, fichier) {
  const hits = [];
  const m = text.match(/livraison incluse<\/b> d&egrave;s (500) \$ de location/);
  if (m) {
    hits.push({
      id: 'seuil-livraison-incluse',
      nom: 'Seuil de livraison incluse (autres forfaits)',
      prix: 500,
      fichier,
      ligne: text.slice(0, m.index).split('\n').length,
    });
  }
  return hits;
}

function parseKitSeuil449(text, fichier) {
  const hits = [];
  const re = /forfait à partir de (449) \$/g;
  let m;
  while ((m = re.exec(text))) {
    hits.push({
      id: 'seuil-livraison-incluse',
      nom: 'Seuil de livraison incluse (forfait)',
      prix: 449,
      fichier,
      ligne: text.slice(0, m.index).split('\n').length,
    });
  }
  return hits;
}

function extraireSources() {
  const absents = [];
  const observations = [];
  for (const rel of SOURCE_FILES) {
    const text = readSource(rel);
    if (text == null) {
      absents.push(rel);
      continue;
    }
    if (rel === 'CURSOR-BRIEF.md') {
      observations.push(...parseBrief(text, rel));
      continue;
    }
    if (rel === 'page-location-jeux-exterieurs-cartes.html') {
      observations.push(...parseLandingCards(text, rel));
      continue;
    }
    if (rel === 'page-nos-forfaits-secteur.js') {
      observations.push(...parseSecteur(text, rel));
      continue;
    }
    observations.push(...parseJsObjects(text, rel));
    observations.push(...parseJsonArrays(text, rel));
    if (rel === 'kit-wizard-decoded.js') {
      observations.push(...parseKitNappes(text, rel));
      observations.push(...parseKitSeuil449(text, rel));
    }
  }
  return { observations, absents };
}

function fusionner(observations) {
  const byId = new Map();
  for (const obs of observations) {
    if (!byId.has(obs.id)) byId.set(obs.id, []);
    byId.get(obs.id).push(obs);
  }
  const produits = [];
  for (const [id, srcs] of byId) {
    const uniques = [];
    const seen = new Set();
    for (const s of srcs) {
      const key = `${s.fichier}:${s.ligne}:${s.prix}`;
      if (seen.has(key)) continue;
      seen.add(key);
      uniques.push({ fichier: s.fichier, ligne: s.ligne, prix: s.prix });
    }
    const prixSet = [...new Set(uniques.map((s) => s.prix))];
    const nom = srcs[0].nom;
    produits.push({
      id,
      nom,
      categorie: categoriePour(srcs[0].fichier, id, nom),
      prix: prixSet.length === 1 ? prixSet[0] : null,
      unite: /seuil|livraison incluse/i.test(nom) ? 'seuil' : 'location',
      pas: pasPour(id, nom),
      max: maxPour(id),
      sources: uniques,
    });
  }
  produits.sort((a, b) => a.id.localeCompare(b.id, 'fr'));
  return produits;
}

function conflits(produits) {
  const liste = [];
  for (const p of produits) {
    const prixSet = [...new Set(p.sources.map((s) => s.prix))];
    if (prixSet.length < 2) continue;
    const ecart = Math.max(...prixSet) - Math.min(...prixSet);
    liste.push({ id: p.id, nom: p.nom, sources: p.sources, ecart });
  }
  liste.sort((a, b) => b.ecart - a.ecart || a.id.localeCompare(b.id, 'fr'));
  return liste;
}

module.exports = {
  ROOT,
  SOURCE_FILES,
  extraireSources,
  fusionner,
  conflits,
};
