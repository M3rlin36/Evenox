'use strict';
/* Gabarits de courriel Évenox — français du Québec, vous, court.
   Les {{jetons}} viennent UNIQUEMENT du dossier. On n'invente
   ni prix, ni date, ni ligne de matériel. Si le champ manque,
   la phrase qui en dépend disparaît. */

var COMPTE_TEST = 'evenox.ca@gmail.com';

var SIGNATURE_LIGNES = [
  'Alexandre Séguin',
  'Directeur du Service à la Clientèle',
  '215 Bd René-A.-Robert, Sainte-Thérèse, QC J7E 4L1',
  '514-559-1893',
  'www.evenox.ca',
];

var PIED_LCAP =
  'Evenox · 215 Bd René-A.-Robert, Sainte-Thérèse, QC J7E 4L1\n' +
  'Pour ne plus recevoir ces relances, répondez STOP à evenox.ca@gmail.com.';

var MOIS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

var CATALOGUE = {
  j2: {
    id: 'j2',
    etape: 'J+2',
    titre: 'Premier suivi',
    envoie: true,
    sujet: 'Votre soumission Evenox{{suffixe_numero}}',
    texte:
      'Bonjour {{prenom}},\n\n' +
      'Je voulais m\'assurer que vous avez bien reçu la soumission{{pour_evenement}}.\n\n' +
      '{{ligne_montant}}' +
      'Dites-moi simplement si ça convient, ou si on ajuste.\n\n' +
      'Au plaisir,\n',
  },
  j4: {
    id: 'j4',
    etape: 'J+4',
    titre: 'Rappel',
    envoie: true,
    sujet: 'Rappel — soumission Evenox{{suffixe_numero}}',
    texte:
      'Bonjour {{prenom}},\n\n' +
      'Un petit rappel : la soumission{{pour_evenement}} est toujours bonne de notre côté.\n\n' +
      'Si la date ou le matériel a changé, répondez-moi et on ajuste. Sinon, un oui suffit pour bloquer.\n\n' +
      'Au plaisir,\n',
  },
  j7: {
    id: 'j7',
    etape: 'J+7',
    titre: 'Appel d\'abord',
    envoie: true,
    appel_dabord: true,
    sujet: 'Je vous appelle — soumission Evenox{{suffixe_numero}}',
    texte:
      'Bonjour {{prenom}},\n\n' +
      'Je vous appelle aujourd\'hui au sujet de la soumission{{pour_evenement}}. ' +
      'Si je ne vous joins pas, répondez simplement à ce courriel — oui, non, ou on en parle.\n\n' +
      'Au plaisir,\n',
  },
  j14: {
    id: 'j14',
    etape: 'J+14',
    titre: 'Dernier courriel',
    envoie: true,
    sujet: 'Dernier suivi — soumission Evenox{{suffixe_numero}}',
    texte:
      'Bonjour {{prenom}},\n\n' +
      'Dernier suivi de notre côté{{pour_evenement}}. ' +
      'Si le projet est reporté ou annulé, aucun problème — un mot suffit et on arrête les relances.\n\n' +
      'Si vous voulez toujours y aller, on est là.\n\n' +
      'Au plaisir,\n',
  },
  j21: {
    id: 'j21',
    etape: 'J+21',
    titre: 'Pause — pas de courriel client',
    envoie: false,
    sujet: 'Pause séquence — {{nom}}',
    texte:
      'Note interne : pause J+21 pour {{nom}}{{pour_evenement}}. Aucun courriel client.',
  },
  j30: {
    id: 'j30',
    etape: 'J+30',
    titre: 'On arrête — pas de courriel client',
    envoie: false,
    sujet: 'Fin de séquence — {{nom}}',
    texte:
      'Note interne : fin J+30 pour {{nom}}{{pour_evenement}}. Aucun courriel client.',
  },
  contrat: {
    id: 'contrat',
    etape: 'Contrat',
    titre: 'Suite — contrat',
    envoie: true,
    sujet: 'Suite — contrat Evenox{{suffixe_numero}}',
    texte:
      'Bonjour {{prenom}},\n\n' +
      'Voici la suite : on prépare le contrat dès que vous confirmez.\n\n' +
      '{{ligne_montant}}' +
      'Répondez oui et je vous l\'envoie.\n\n' +
      'Au plaisir,\n',
  },
  reponse: {
    id: 'reponse',
    etape: 'Réponse',
    titre: 'Réponse pré-écrite',
    envoie: true,
    sujet: '{{sujet_reponse}}',
    texte:
      'Bonjour {{prenom}},\n\n' +
      'Merci pour votre message.\n\n' +
      '{{accroche}}' +
      'Dites-moi comment vous voulez qu\'on avance.\n\n' +
      'Au plaisir,\n',
  },
  devis: {
    id: 'devis',
    etape: 'Devis',
    titre: 'Envoi de soumission',
    envoie: true,
    sujet: 'Votre devis Evenox{{suffixe_numero}}',
    texte:
      'Bonjour {{prenom}},\n\n' +
      'Voici la soumission{{pour_evenement}}.\n\n' +
      '{{ligne_montant}}' +
      'Si quelque chose ne colle pas, répondez-moi et on ajuste.\n\n' +
      'Au plaisir,\n',
  },
  an_passe: {
    id: 'an_passe',
    etape: 'An passé',
    titre: 'Réveil année précédente',
    envoie: true,
    sujet: 'Même date cette année ? — Evenox',
    texte:
      'Bonjour {{prenom}},\n\n' +
      'L\'an dernier, on s\'occupait de votre événement{{pour_evenement_annee}}. ' +
      'Si vous prévoyez la même période cette année, on peut bloquer le matériel dès maintenant.\n\n' +
      'Aucun engagement — juste pour éviter de manquer la date.\n\n' +
      'Au plaisir,\n',
  },
  prospection: {
    id: 'prospection',
    etape: 'Prospection',
    titre: 'Premier contact',
    envoie: true,
    sujet: 'Evenox — pour bien vous répondre',
    texte:
      'Bonjour {{prenom}},\n\n' +
      'Merci de votre intérêt pour Evenox. Pour vous préparer une soumission juste, ' +
      'j\'ai besoin de la date, du lieu et d\'une idée du matériel.\n\n' +
      'Répondez à ce courriel ou joignez-moi au 514-559-1893.\n\n' +
      'Au plaisir,\n',
  },
  post_evenement: {
    id: 'post_evenement',
    etape: 'J+7 post',
    titre: 'Merci post-événement',
    envoie: true,
    sujet: 'Merci — Evenox{{pour_evenement}}',
    texte:
      'Bonjour {{prenom}},\n\n' +
      'Merci encore{{pour_evenement}}. De notre côté, tout s\'est bien passé.\n\n' +
      'Si vous voulez réserver la même période l\'an prochain, un mot suffit.\n\n' +
      'Au plaisir,\n',
  },
};

function dateFr(iso) {
  if (!iso || !/^\d{4}-\d{2}-\d{2}/.test(String(iso))) return '';
  var p = String(iso).slice(0, 10).split('-');
  var j = Number(p[2]);
  var m = Number(p[1]);
  if (!j || !m || m < 1 || m > 12) return '';
  return j + ' ' + MOIS[m - 1] + ' ' + p[0];
}

function argent(n) {
  var v = Number(n);
  if (!v) return '';
  return v.toLocaleString('fr-CA', { style: 'currency', currency: 'CAD' });
}

function prenomDe(nom) {
  var n = String(nom || '').trim();
  if (!n) return '';
  if (/^(famille|service|comité|comite|direction|ville|groupe)\b/i.test(n)) return n;
  if (/\bet\b/i.test(n)) return n;
  return n.split(/\s+/)[0];
}

function remplir(modele, vars) {
  var texte = String(modele || '').replace(/\{\{\s*([a-z0-9_]+)\s*\}\}/g, function (_, cle) {
    var v = vars[cle];
    return v == null ? '' : String(v);
  });
  texte = texte.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  return texte;
}

function variables(dossier, extra) {
  extra = extra || {};
  var dateEv = dateFr(dossier.date_evenement);
  var dateAn = dateFr(extra.date_an_dernier || dossier.date_an_dernier);
  var montant = argent(dossier.montant);
  var numero = String(dossier.booqable_number || '').trim();
  var sujetIn = String(extra.sujet_entrant || '').trim();
  var vars = {
    prenom: prenomDe(dossier.nom) || 'bonjour',
    nom: dossier.nom || '',
    entreprise: dossier.entreprise || '',
    date_evenement: dateEv,
    pour_evenement: dateEv ? ' pour le ' + dateEv : '',
    pour_evenement_annee: dateAn ? ' du ' + dateAn : (dateEv ? ' du ' + dateEv : ''),
    montant: montant,
    ligne_montant: montant ? 'Le total indiqué est de ' + montant + '.\n\n' : '',
    numero: numero,
    suffixe_numero: numero ? ' — ' + numero : '',
    telephone: dossier.telephone || '',
    sujet_reponse: sujetIn
      ? (sujetIn.indexOf('Re:') === 0 ? sujetIn : 'Re: ' + sujetIn)
      : 'Re: votre message',
    accroche: extra.accroche
      || (dossier.notes ? 'C\'est noté.\n\n' : ''),
  };
  return vars;
}

function htmlDe(texte) {
  var blocs = String(texte).split(/\n\n+/);
  var corps = blocs.map(function (b) {
    return '<p>' + echapper(b).replace(/\n/g, '<br>') + '</p>';
  }).join('');
  return '<!DOCTYPE html><html lang="fr-CA"><head><meta charset="utf-8"></head>' +
    '<body style="margin:0;padding:0;background:#f6f4fb;font-family:Georgia,\'Times New Roman\',serif;">' +
    '<div style="max-width:560px;margin:24px auto;background:#fff;border:1px solid #e8e2f6;' +
    'border-top:4px solid #5E17EB;padding:28px 32px 24px;color:#1a1a2e;font-size:16px;line-height:1.55">' +
    corps +
    '</div></body></html>';
}

function echapper(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function choisir(dossier, opts) {
  opts = opts || {};
  if (opts.gabarit && CATALOGUE[opts.gabarit]) return CATALOGUE[opts.gabarit];
  if (opts.reponse) return CATALOGUE.reponse;
  var p = dossier.pipeline;
  if (p === 'prospection') return CATALOGUE.prospection;
  if (p === 'post_evenement') return CATALOGUE.post_evenement;
  if (p === 'renouvellement') return CATALOGUE.an_passe;
  var a = String(dossier.prochaine_action || '');
  if (/J\s*\+\s*30/i.test(a)) return CATALOGUE.j30;
  if (/J\s*\+\s*21/i.test(a)) return CATALOGUE.j21;
  if (/J\s*\+\s*14/i.test(a)) return CATALOGUE.j14;
  if (/J\s*\+\s*7/i.test(a) || /^appeler/i.test(a)) return CATALOGUE.j7;
  if (/J\s*\+\s*4/i.test(a)) return CATALOGUE.j4;
  if (/J\s*\+\s*2/i.test(a)) return CATALOGUE.j2;
  if (/contrat/i.test(a)) return CATALOGUE.contrat;
  if (dossier.statut === 'new' && !dossier.montant) return CATALOGUE.prospection;
  return CATALOGUE.j2;
}

function rendre(dossier, opts) {
  opts = opts || {};
  var gab = choisir(dossier, opts);
  var vars = variables(dossier, opts);
  var sujet = remplir(gab.sujet, vars) || ('Evenox — ' + (dossier.nom || 'suivi'));
  var texte = remplir(gab.texte, vars);
  if (gab.envoie) {
    texte = texte + '\n' + SIGNATURE_LIGNES.join('\n') + '\n\n—\n' + PIED_LCAP;
  }
  if (opts.bandeau_test) {
    sujet = '[TEST] ' + sujet;
    texte = 'Ceci est un test. Aucun client n\'a reçu ce courriel.\n' +
      'Destinataire prévu : ' + (dossier.courriel || '—') +
      ' · Gabarit ' + gab.etape + ' (' + gab.titre + ').\n\n' + texte;
  }
  return {
    gabarit: gab.id,
    etape: gab.etape,
    titre: gab.titre,
    envoie: gab.envoie,
    appel_dabord: Boolean(gab.appel_dabord),
    destinataire_prevu: dossier.courriel || '',
    sujet: sujet,
    texte: texte,
    html: gab.envoie ? htmlDe(texte) : '',
  };
}

function liste() {
  return Object.keys(CATALOGUE).map(function (k) {
    var g = CATALOGUE[k];
    return {
      id: g.id, etape: g.etape, titre: g.titre,
      envoie: g.envoie, appel_dabord: Boolean(g.appel_dabord),
    };
  });
}

module.exports = {
  COMPTE_TEST: COMPTE_TEST,
  CATALOGUE: CATALOGUE,
  SIGNATURE_LIGNES: SIGNATURE_LIGNES,
  dateFr: dateFr,
  prenomDe: prenomDe,
  choisir: choisir,
  rendre: rendre,
  liste: liste,
  variables: variables,
};
