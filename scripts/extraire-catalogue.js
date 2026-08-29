'use strict';

const fs = require('fs');
const path = require('path');
const { ROOT, extraireSources, fusionner, conflits } = require('./lib-catalogue');

const { observations, absents } = extraireSources();
const produits = fusionner(observations);
const liste = conflits(produits);

const catalogue = {
  genereLe: new Date().toISOString().slice(0, 10),
  note: 'prix = null quand les sources divergent. Aucun conflit n\'est tranché.',
  sourcesAbsentes: absents,
  produits,
};

fs.writeFileSync(
  path.join(ROOT, 'catalogue.json'),
  JSON.stringify(catalogue, null, 2) + '\n',
  'utf8'
);

function mdSource(s) {
  return `\`${s.fichier}\` L${s.ligne} → **${s.prix} $**`;
}

const knownIds = new Set([
  'connect-4-geant',
  'express-72h-50',
  'forfait-reception',
  'seuil-livraison-incluse',
]);

let md = '';
md += '# Rapport de conflits — prix Évenox\n\n';
md += `Généré le ${catalogue.genereLe}. Aucun conflit n'est tranché : c'est une décision d'affaires (§6 du brief).\n\n`;
md += '## Couverture\n\n';
md += `| | |\n|---|---|\n`;
md += `| Observations lues | ${observations.length} |\n`;
md += `| Produits fusionnés | ${produits.length} |\n`;
md += `| Produits à prix unique | ${produits.filter((p) => p.prix != null).length} |\n`;
md += `| Produits en conflit (même id, prix différents) | ${liste.length} |\n`;
md += `| Assistant jeux (catégorie) | ${produits.filter((p) => p.categorie === 'assistant-jeux' || p.sources.some((s) => s.fichier.includes('jw-widget'))).length} |\n`;

if (absents.length) {
  md += '\n## Sources absentes de ce clone\n\n';
  md += "Relu en GET sur evenox.ca : `/assistant-evenement/`, `/calcule-ton-evenement/`, `/calculateur-fete/`, `/calculateur/`, `/calculer-mon-evenement/` → **404**. Rien n'a été inventé.\n\n";
  for (const a of absents) md += `- \`${a}\`\n`;
}

md += '\n## Conflits de prix (même identifiant)\n\n';
md += 'Triés par écart en $ décroissant.\n\n';
if (!liste.length) {
  md += '_Aucun id partagé avec deux prix distincts._\n';
} else {
  liste.forEach((c, i) => {
    md += `### ${i + 1}. ${c.nom} (\`${c.id}\`) — écart ${c.ecart} $\n\n`;
    for (const s of c.sources) md += `- ${mdSource(s)}\n`;
    md += '\n';
  });
}

md += '## Les 3 conflits déjà nommés dans le brief\n\n';
md += '### 1. Connect 4 géant — 80 $ vs 60 $\n\n';
md += 'Décision ouverte (§6). Ne pas publier un seul prix tant que ce n\'est pas tranché.\n\n';
const c4 = produits.find((p) => p.id === 'connect-4-geant');
if (c4) {
  for (const s of c4.sources) md += `- ${mdSource(s)}\n`;
} else {
  md += '- _id `connect-4-geant` non trouvé après extraction — à vérifier._\n';
}

md += '\n### 2. Express 72 h (210 $ / 50 pers) vs Réception (649 $ / 48 pers)\n\n';
md += "Ce ne sont pas le même id : deux offres de capacité voisine, prix très différents. Le brief les signale comme conflit d'affaires, pas comme une dérive de catalogue.\n\n";
const ex = produits.find((p) => p.id === 'express-72h-50');
const rec = produits.find((p) => p.id === 'forfait-reception');
if (ex) for (const s of ex.sources) md += `- Express 50 pers — ${mdSource(s)}\n`;
if (rec) for (const s of rec.sources) md += `- Réception 48 pers — ${mdSource(s)}\n`;
md += '\nÉcart : **439 $** pour ~50 places. Non tranché.\n';

md += '\n### 3. Seuil de livraison incluse — 449 $ vs 500 $\n\n';
md += 'Les deux montants apparaissent (forfait mobilier dès 449 $ vs widget secteur « dès 500 $ »). Même page métier, deux règles. Non tranché.\n\n';
const seuils = produits.filter((p) => p.id.startsWith('seuil-livraison-incluse'));
for (const p of seuils) {
  for (const s of p.sources) md += `- ${p.id} — ${mdSource(s)}\n`;
}

md += '\n## Autres écarts utiles (pas le même id)\n\n';
md += 'Commentaire interne du kit wizard : « 115 exemplaires en stock » pour la table 6 pi, alors que `STOCK.rect6` vaut **105**. Le catalogue retient 105 (la constante), et note le commentaire comme écart documentaire — pas un second prix.\n\n';
md += '`expressActif: false` est cité dans le brief pour `calculateur-fete.html`, fichier absent de ce clone. Rien à extraire.\n';

md += '\n## Décisions en attente (rappel §6)\n\n';
md += '1. Zones Montréal / Longueuil / Brossard / Gatineau — transport sur mesure, jamais un ajustement inventé.\n';
md += '2. Seuil 449 $ ou 500 $.\n';
md += '3. Destination des leads — hors chantier 1.\n';
md += '4. Tous les conflits de ce rapport, y compris Connect 4 et Express vs Réception.\n';

fs.writeFileSync(path.join(ROOT, 'RAPPORT-CONFLITS.md'), md, 'utf8');

console.log(`catalogue.json : ${produits.length} produits, ${liste.length} conflits, ${absents.length} sources absentes`);
console.log('ids connus présents :', [...knownIds].filter((id) => produits.some((p) => p.id === id || p.id.startsWith(id))).join(', '));
