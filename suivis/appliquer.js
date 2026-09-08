'use strict';
/* Applique la séquence au cahier réel du jour.
   N'envoie aucun courriel client. Produit un bilan + les textes
   « Dis » déjà écrits (brouillons internes vers evenox.ca). */

var fs = require('fs');
var path = require('path');
var gabarits = require('./gabarits');
var mailer = require('./mailer');
var livre = require('./livre-du-jour');

function scriptsDis() {
  return livre.dossiers.filter(function (d) {
    return d.dis && d.sujet_dis;
  }).map(function (d) {
    var rendu = gabarits.rendre(d, { gabarit: 'dis' });
    var prep = mailer.preparer(rendu, {
      mode: 'brouillon',
      dossier_id: d.id,
      nom: d.nom,
    });
    return {
      nom: d.nom,
      telephone: d.telephone || '',
      destinataire_prevu: d.courriel || '(pas de courriel — appel / texto)',
      sujet: rendu.sujet,
      texte: rendu.texte,
      mode: prep.mode || 'brouillon',
      destinataire_brouillon: mailer.COMPTE_TEST,
    };
  });
}

function rapport() {
  var b = livre.bilan();
  var scripts = scriptsDis();
  return {
    jour: b.jour,
    dimanche: b.dimanche,
    envoi_client: false,
    compte_test: mailer.COMPTE_TEST,
    candidats_sequence: b.candidats,
    exclus: b.exclus,
    scripts_dis: scripts,
    verdict: b.candidats.length
      ? b.candidats.length + ' dossier(s) prêts en brouillon — rien n\'est parti.'
      : 'Aucun dossier n\'entre en séquence aujourd\'hui. Aucun courriel client.',
  };
}

function ecrire(r) {
  var dir = path.join(__dirname, 'data');
  try { fs.mkdirSync(dir, { recursive: true }); } catch (e) { /* ignore */ }
  var fichier = path.join(dir, 'application-' + r.jour + '.json');
  fs.writeFileSync(fichier, JSON.stringify(r, null, 2), 'utf8');
  return fichier;
}

function texteRapport(r) {
  var lignes = [];
  lignes.push('Évenox — séquence appliquée au cahier du ' + r.jour);
  lignes.push('');
  lignes.push(r.verdict);
  lignes.push('Dimanche : brouillons seulement. Envoi client : bloqué jusqu\'au 10 septembre.');
  lignes.push('');
  lignes.push('DESTINATAIRES SÉQUENCE');
  if (!r.candidats_sequence.length) {
    lignes.push('Aucun. La relance J+2…J+30 n\'a personne à écrire.');
  } else {
    r.candidats_sequence.forEach(function (c) {
      lignes.push('· ' + c.nom + ' — ' + (c.courriel || 'sans courriel'));
    });
  }
  lignes.push('');
  lignes.push('EXCLUS (aucun courriel)');
  r.exclus.forEach(function (e) {
    lignes.push('· ' + e.nom + ' — ' + e.raison);
  });
  lignes.push('');
  lignes.push('PHRASES « DIS » (brouillons internes, à evenox.ca@gmail.com)');
  if (!r.scripts_dis.length) {
    lignes.push('Aucune.');
  } else {
    r.scripts_dis.forEach(function (s) {
      lignes.push('— ' + s.nom + (s.telephone ? ' · ' + s.telephone : ''));
      lignes.push('  Objet : ' + s.sujet);
      lignes.push('  Destinataire prévu : ' + s.destinataire_prevu);
    });
  }
  lignes.push('');
  lignes.push('Aucun client n\'a reçu ce courriel.');
  return lignes.join('\n');
}

if (require.main === module) {
  var r = rapport();
  var f = ecrire(r);
  console.log(texteRapport(r));
  console.log('\nÉcrit : ' + f);
}

module.exports = {
  rapport: rapport,
  ecrire: ecrire,
  texteRapport: texteRapport,
  scriptsDis: scriptsDis,
};
