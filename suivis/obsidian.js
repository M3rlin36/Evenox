'use strict';
/* Écrit le cahier et les fiches dossier en Markdown Obsidian.
   Source = uniquement ce qui est déjà dans l'état. Aucun prix,
   aucune date, aucune prochaine action inventés. */

var fs = require('fs');
var path = require('path');

var DEFAUT = path.join(__dirname, 'vault');

function racine() {
  return process.env.OBSIDIAN_VAULT || DEFAUT;
}

function configure() {
  return process.env.OBSIDIAN_OFF !== '1';
}

function slugFichier(nom) {
  return String(nom || 'sans-nom')
    .replace(/[\\/:*?"<>|]/g, '')
    .replace(/\s+/g, ' ')
    .trim() || 'sans-nom';
}

function wikilien(nom) {
  return '[[' + slugFichier(nom) + ']]';
}

function ligneSi(libelle, valeur) {
  if (valeur === null || valeur === undefined) return '';
  var t = String(valeur).trim();
  if (!t) return '';
  return '- **' + libelle + '** : ' + t + '\n';
}

function noteDossier(d) {
  var corps = '';
  corps += '---\n';
  corps += 'type: dossier\n';
  corps += 'id: ' + (d.id || '') + '\n';
  if (d.date_evenement) corps += 'date_evenement: ' + d.date_evenement + '\n';
  corps += 'source: suivis\n';
  corps += '---\n\n';
  corps += '# ' + (d.nom || 'Dossier') + '\n\n';
  corps += ligneSi('Entreprise', d.entreprise);
  corps += ligneSi('Téléphone', d.telephone);
  corps += ligneSi('Courriel', d.courriel);
  corps += ligneSi('Date événement', d.date_evenement);
  corps += ligneSi('Statut', d.statut);
  corps += ligneSi('File', d.pipeline);
  corps += ligneSi('Prochaine action déjà notée', d.prochaine_action);
  corps += ligneSi('N° Booqable', d.booqable_number);
  if (d.montant) corps += ligneSi('Montant déjà au dossier', d.montant + ' $');
  if (d.exclusion) corps += ligneSi('Hors relance auto', d.exclusion);
  if (d.notes) {
    corps += '\n## Notes déjà au dossier\n\n' + String(d.notes) + '\n';
  }
  corps += '\nRien n’est inventé ici. Relire le dossier sur [evenoxpos.cloud/suivis](https://evenoxpos.cloud/suivis/).\n';
  return corps;
}

function noteCahier(opts) {
  opts = opts || {};
  var jour = opts.jour || '';
  var dossiers = opts.dossiers || [];
  var lignesJournal = opts.journal || [];
  var L = [];
  L.push('---');
  L.push('type: cahier');
  L.push('jour: ' + jour);
  L.push('source: suivis');
  L.push('---');
  L.push('');
  L.push('# Cahier ' + jour);
  L.push('');
  L.push('Aucun courriel client depuis cette note.');
  L.push('');
  L.push('## Dossiers');
  L.push('');
  if (!dossiers.length) {
    L.push('_Aucun dossier dans l’état._');
  } else {
    dossiers.forEach(function (d) {
      var extra = [];
      if (d.date_evenement) extra.push(d.date_evenement);
      if (d.prochaine_action) extra.push(d.prochaine_action);
      L.push('- ' + wikilien(d.nom) + (extra.length ? ' — ' + extra.join(' · ') : ''));
    });
  }
  L.push('');
  L.push('## Fait aujourd’hui');
  L.push('');
  if (!lignesJournal.length) {
    L.push('_Rien de consigné._');
  } else {
    lignesJournal.forEach(function (l) {
      var qui = l.par === 'auto' ? 'Auto' : (l.par || '');
      L.push('- ' + (l.resume || '') + (qui ? ' — ' + qui : ''));
    });
  }
  L.push('');
  return L.join('\n');
}

function noteIndex(opts) {
  opts = opts || {};
  var jour = opts.jour || '';
  var dossiers = opts.dossiers || [];
  var L = [];
  L.push('---');
  L.push('type: index');
  L.push('source: suivis');
  L.push('---');
  L.push('');
  L.push('# Suivis Évenox');
  L.push('');
  L.push('Vault branché sur le pipeline [evenoxpos.cloud/suivis](https://evenoxpos.cloud/suivis/).');
  L.push('');
  if (jour) L.push('- Cahier du jour : [[Cahier-' + jour + ']]');
  L.push('');
  L.push('## Dossiers');
  L.push('');
  dossiers.forEach(function (d) {
    L.push('- ' + wikilien(d.nom));
  });
  L.push('');
  return L.join('\n');
}

function ecrire(relatif, contenu) {
  var dest = path.join(racine(), relatif);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, contenu, 'utf8');
  return dest;
}

function exporter(opts) {
  opts = opts || {};
  if (!configure()) {
    var err = new Error('Obsidian est coupé (OBSIDIAN_OFF=1).');
    err.code = 'obsidian_off';
    throw err;
  }
  var jour = opts.jour || '';
  var dossiers = opts.dossiers || [];
  var fichiers = [];
  fichiers.push({
    relatif: 'Suivis/Index.md',
    chemin: ecrire('Suivis/Index.md', noteIndex({ jour: jour, dossiers: dossiers })),
  });
  if (jour) {
    fichiers.push({
      relatif: 'Suivis/Cahier-' + jour + '.md',
      chemin: ecrire('Suivis/Cahier-' + jour + '.md', noteCahier(opts)),
    });
  }
  dossiers.forEach(function (d) {
    var nom = slugFichier(d.nom);
    fichiers.push({
      relatif: 'Suivis/Dossiers/' + nom + '.md',
      chemin: ecrire('Suivis/Dossiers/' + nom + '.md', noteDossier(d)),
    });
  });
  return {
    vault: racine(),
    n: fichiers.length,
    fichiers: fichiers,
  };
}

module.exports = {
  racine: racine,
  configure: configure,
  slugFichier: slugFichier,
  noteDossier: noteDossier,
  noteCahier: noteCahier,
  noteIndex: noteIndex,
  ecrire: ecrire,
  exporter: exporter,
};
