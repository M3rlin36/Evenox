'use strict';

const fs = require('fs');
const path = require('path');
const { ROOT, extraireSources, fusionner } = require('./lib-catalogue');

const cataloguePath = path.join(ROOT, 'catalogue.json');
if (!fs.existsSync(cataloguePath)) {
  console.error('catalogue.json introuvable. Lancer d\'abord : node scripts/extraire-catalogue.js');
  process.exit(1);
}

const catalogue = JSON.parse(fs.readFileSync(cataloguePath, 'utf8'));
const { observations, absents } = extraireSources();
const extraits = fusionner(observations);

const erreurs = [];

const extraitsById = new Map(extraits.map((p) => [p.id, p]));
const catalogueById = new Map((catalogue.produits || []).map((p) => [p.id, p]));

for (const p of catalogue.produits || []) {
  const fresh = extraitsById.get(p.id);
  if (!fresh) {
    erreurs.push(`catalogue id ${p.id} : plus aucune observation dans les sources`);
    continue;
  }
  const oldKeys = new Set(p.sources.map((s) => `${s.fichier}:${s.ligne}:${s.prix}`));
  const newKeys = new Set(fresh.sources.map((s) => `${s.fichier}:${s.ligne}:${s.prix}`));
  for (const s of fresh.sources) {
    const key = `${s.fichier}:${s.ligne}:${s.prix}`;
    if (!oldKeys.has(key)) {
      const sameLine = p.sources.find((x) => x.fichier === s.fichier && x.ligne === s.ligne);
      if (sameLine && sameLine.prix !== s.prix) {
        erreurs.push(
          `${p.id} a dérivé : ${s.fichier} L${s.ligne} était ${sameLine.prix} $, lu ${s.prix} $`
        );
      } else if (!sameLine) {
        erreurs.push(`${p.id} : nouvelle observation ${s.fichier} L${s.ligne} = ${s.prix} $`);
      }
    }
  }
  for (const s of p.sources) {
    const key = `${s.fichier}:${s.ligne}:${s.prix}`;
    if (!newKeys.has(key)) {
      const sameLine = fresh.sources.find((x) => x.fichier === s.fichier && x.ligne === s.ligne);
      if (sameLine && sameLine.prix !== s.prix) {
        erreurs.push(
          `${p.id} a dérivé : ${s.fichier} L${s.ligne} catalogue ${s.prix} $, source ${sameLine.prix} $`
        );
      }
    }
  }
  if (p.prix !== fresh.prix) {
    erreurs.push(`${p.id} : catalogue.prix=${p.prix} mais sources actuelles → ${fresh.prix}`);
  }
}

for (const p of extraits) {
  if (!catalogueById.has(p.id)) {
    erreurs.push(`nouveau produit non catalogué : ${p.id} (${p.nom})`);
  }
}

const attendusAbsents = ['assistant-evenement/ev-widget.js', 'calculateur-fete.html'];
for (const a of attendusAbsents) {
  if (!absents.includes(a) && !fs.existsSync(path.join(ROOT, a))) {
    /* ok if now present */
  }
}

if (erreurs.length) {
  console.error(`ÉCHEC : ${erreurs.length} écart(s) entre catalogue.json et les sources\n`);
  for (const e of erreurs) console.error(' -', e);
  process.exit(1);
}

console.log(
  `OK : ${catalogue.produits.length} produits, ${observations.length} observations, sources alignées.`
);
if (absents.length) console.log('Sources toujours absentes :', absents.join(', '));
process.exit(0);
