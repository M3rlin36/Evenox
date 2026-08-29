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
  md += `| Assistant persona (év) | ${produits.filter((p) => p.categorie === 'assistant-evenement' || p.sources.some((s) => s.fichier.includes('ev-widget'))).length} |\n`;
  md += `| Calculateur fête | ${produits.filter((p) => p.categorie === 'calculateur-fete' || p.sources.some((s) => s.fichier.includes('calculateur-fete'))).length} |\n`;

if (absents.length) {
  md += '\n## Sources absentes — recherche 2026-08-29 (2e passe)\n\n';
  md += 'Toujours **introuvables**. Rien n’a été inventé. Le vérificateur ignore ces chemins s’ils n’existent pas sur disque.\n\n';
  for (const a of absents) md += `- \`${a}\`\n`;
  md += '\n### Où on a cherché\n\n';
  md += '| Endroit | Résultat |\n|---|---|\n';
  md += '| Workspace `/workspace` et `/tmp` (caches live) | Aucun `ev-widget*` / `calculateur-fete*` |\n';
  md += '| Toutes les branches git (`git ls-tree -r` sur chaque ref) | Aucun de ces chemins n’a jamais été commité |\n';
  md += '| Drive (titres `ev-widget`, `calculateur-fete`, `assistant-evenement`, `payload`, `.js`/`.html` ; texte `expressActif` / `49289`) | 0 fichier source |\n';
  md += '| Gmail (pièces `filename:js`/`html`, sujets widget/calculateur, chaînes `expressActif` / `49289`) | 0 pièce jointe |\n';
  md += '| Notion (CURSOR-BRIEF, ev-widget, 49289, expressActif) | Pages opérationnelles seulement, pas le JS |\n';
  md += '| Slack public (`ev-widget`, `calculateur-fete`, `assistant-evenement`) | 0 message |\n';
  md += '| GitHub `M3rlin36` (code `ev-widget.js`, `expressActif`, `49289`) | Repo Evenox uniquement, fichiers absents |\n';
  md += '| Transcripts agents (`bc-7ed6825a`, `bc-99910cae`, `bc-69ba5bba`, `bc-f64e73f8`) | Le parent a déjà conclu 404 ; les autres n’ont jamais vu les fichiers |\n';
  md += '| Sitemap Yoast `page-sitemap.xml` (226 pages publiées) | Aucun slug `assistant-evenement` ni `calculateur*` |\n';
  md += '\n### GET publics evenox.ca (3 s entre requêtes ; stop 403/429 — aucun 403/429)\n\n';
  md += '1re passe (déjà documentée) : `/assistant-evenement/`, `/calcule-ton-evenement/`, `/calculateur-fete/`, `/calculateur/`, `/calculer-mon-evenement/` → **404**.\n\n';
  md += '2e passe : `/calculateur-de-fete/`, `/calculateur-evenement/`, `/calcule-ta-fete/`, `/assistant-persona/`, `/calculateur-secteur/`, `/calculateur-secteur-v2/` → **404**.\n\n';
  md += 'REST public `GET /wp-json/wp/v2/pages?search=assistant` : pages déjà extraites (`location-decoration-evenementielle`, `location-jeux-geants`, `location-jeux-exterieurs` 4839, `chapiteaux-structures-evenementielles`). Pas de slug `assistant-evenement` (la page prévue au §7 est draft / pas encore créée).\n\n';
  md += 'REST public `GET /wp-json/wp/v2/pages?search=calculateur` : `location-tables-chaises` 6569, `nos-forfaits-tout-inclus`, forfaits mobilier — déjà dans le catalogue. Pas de `calculateur-fete`.\n\n';
  md += '### Blocage\n\n';
  md += 'Les ~95 produits persona et la grille du calculateur de fête (dont `expressActif: false`) vivent seulement dans `C:\\Users\\Admin\\Evenox` chez Alexandre. Sans ces deux fichiers, le chantier 1 ne peut pas atteindre la couverture « ~95 persona ». Relancer l’extracteur dès qu’ils sont poussés ici.\n';
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
