'use strict';
/* Branche Grok (xAI) sur un dossier ou un client Evenox.
   Grok propose. Il n'envoie rien. Il n'invente ni prix, ni date,
   ni ligne de matériel. Sans XAI_API_KEY, l'appel est refusé. */

var https = require('https');

var MODELE = process.env.GROK_MODEL || 'grok-4-fast';
var HOTE = 'api.x.ai';

var SYSTEME =
  'Tu aides Alexandre (Évenox, location d\'équipement à Sainte-Thérèse, QC).\n' +
  'Réponds UNIQUEMENT en JSON, sans markdown, avec les clés :\n' +
  '  prochaine (une phrase : le prochain geste humain),\n' +
  '  sujet (objet du courriel proposé),\n' +
  '  corps (courriel en français du Québec, vous, court, chaleureux),\n' +
  '  avertissements (tableau de trous : info manquante).\n' +
  'Règles dures :\n' +
  '- N\'invente aucun prix, aucune date, aucun article.\n' +
  '- Si ça manque, écris [À COMPLÉTER] et ajoute un avertissement.\n' +
  '- N\'envoie rien. C\'est une suggestion à relire.\n' +
  '- Un « oui », un dépôt ou un dossier perdu : ne propose pas d\'écrire.\n' +
  '- Signature : Alexandre Séguin, Directeur du Service à la Clientèle.';

function configure() {
  return Boolean(process.env.XAI_API_KEY) || process.env.GROK_STUB === '1';
}

function modele() {
  return process.env.GROK_STUB === '1' ? 'grok-stub' : MODELE;
}

function texteDossier(f) {
  var dos = f.dossier;
  var L = [];
  L.push('DOSSIER CLIENT — ÉVENOX');
  L.push('Client : ' + dos.nom + (dos.entreprise ? ' (' + dos.entreprise + ')' : ''));
  if (dos.courriel) L.push('Courriel : ' + dos.courriel);
  if (dos.telephone) L.push('Téléphone : ' + dos.telephone);
  if (dos.date_evenement) L.push('Date événement : ' + dos.date_evenement);
  L.push('Statut : ' + (dos.statut || 'inconnu'));
  if (dos.prochaine_action) L.push('Prochaine action déjà notée : ' + dos.prochaine_action);
  if (dos.notes) L.push('Notes : ' + dos.notes);
  L.push('');
  L.push('MATÉRIEL');
  if (f.materiel && f.materiel.length) {
    f.materiel.forEach(function (m) {
      L.push('- ' + (m.quantite ? m.quantite + ' × ' : '') + m.produit +
        (m.montant ? ' — ' + m.montant + ' $' : ''));
    });
  } else {
    L.push('Détail inconnu. N\'invente aucun article.');
  }
  if (f.paiement) {
    L.push('ARGENT : total ' + (f.paiement.total || 0) +
      ' $ · encaissé ' + (f.paiement.encaisse || 0) +
      ' $ · solde ' + (f.paiement.solde || 0) + ' $');
  }
  L.push('DISCUSSION');
  if (f.discussion && f.discussion.length) {
    f.discussion.forEach(function (m) {
      L.push('[' + String(m.envoye_le || '').slice(0, 10) + '] ' +
        (m.direction === 'entrant' ? 'LUI' : 'NOUS') + ' : ' +
        String(m.sujet || '') + ' — ' + String(m.corps || '').slice(0, 400));
    });
  } else {
    L.push('Aucun échange enregistré.');
  }
  if (f.infos && f.infos.manquantes && f.infos.manquantes.length) {
    L.push('MANQUE : ' + f.infos.manquantes.join(', '));
  }
  return L.join('\n');
}

function texteClient(f) {
  var c = f.client;
  var L = [];
  L.push('CLIENT — ÉVENOX (relance an passé ou fiche)');
  L.push('Client : ' + c.nom + (c.entreprise ? ' (' + c.entreprise + ')' : ''));
  if (c.courriel) L.push('Courriel : ' + c.courriel);
  if (c.telephone) L.push('Téléphone : ' + c.telephone);
  if (f.annuelle) {
    L.push('An passé : ' + f.annuelle.annee_precedente +
      ' · montant ' + f.annuelle.montant_an_dernier +
      ' $ · date probable ' + f.annuelle.date_probable);
  }
  if (f.contrats && f.contrats.length) {
    L.push('CONTRATS');
    f.contrats.forEach(function (ct) {
      L.push('- ' + ct.annee + ' · ' + ct.date_evenement + ' · ' + ct.montant + ' $' +
        (ct.produits && ct.produits.length ? ' · ' + ct.produits.join(', ') : ''));
    });
  } else {
    L.push('Aucun contrat passé. N\'invente rien.');
  }
  return L.join('\n');
}

function extraireJson(brut) {
  var t = String(brut || '').trim();
  var m = t.match(/\{[\s\S]*\}/);
  if (!m) return null;
  try { return JSON.parse(m[0]); } catch (e) { return null; }
}

function normaliser(obj, brut) {
  obj = obj || {};
  return {
    prochaine: String(obj.prochaine || '').trim() || 'Relire le dossier — Grok n\'a pas tranché.',
    sujet: String(obj.sujet || '').trim(),
    corps: String(obj.corps || '').trim() || String(brut || '').trim(),
    avertissements: Array.isArray(obj.avertissements) ? obj.avertissements : [],
  };
}

function stubPour(texte) {
  var nom = (texte.match(/Client : ([^\n(]+)/) || [, 'le client'])[1].trim();
  return {
    prochaine: 'Relire et décider — suggestion locale (Grok stub).',
    sujet: 'Evenox — suivi',
    corps: 'Bonjour ' + nom.split(/\s+/)[0] +
      ',\n\nJe reviens vers vous au sujet de votre dossier Evenox.\n\n' +
      'Dites-moi simplement comment vous voulez qu\'on avance.\n\n' +
      'Au plaisir,\nAlexandre Séguin\nDirecteur du Service à la Clientèle',
    avertissements: ['Réponse de test (GROK_STUB) — pas l\'API xAI.'],
  };
}

function httpsJson(opts, corps, done) {
  var req = https.request(opts, function (res) {
    var chunks = [];
    res.on('data', function (c) { chunks.push(c); });
    res.on('end', function () {
      var texte = Buffer.concat(chunks).toString('utf8');
      var json = null;
      try { json = texte ? JSON.parse(texte) : {}; } catch (e) { json = { raw: texte }; }
      if (res.statusCode >= 400) {
        var err = new Error('Grok HTTP ' + res.statusCode +
          (json.error && json.error.message ? ' — ' + json.error.message : ''));
        err.detail = json;
        done(err);
        return;
      }
      done(null, json);
    });
  });
  req.on('error', done);
  req.setTimeout(45000, function () {
    req.destroy();
    done(new Error('Grok n\'a pas répondu à temps.'));
  });
  if (corps) req.write(corps);
  req.end();
}

function appelerXai(texte, done) {
  if (process.env.GROK_STUB === '1') {
    done(null, stubPour(texte));
    return;
  }
  var cle = process.env.XAI_API_KEY;
  if (!cle) {
    var err = new Error('Grok n\'est pas branché. Ajoutez XAI_API_KEY (console.x.ai).');
    err.code = 'grok_non_configure';
    done(err);
    return;
  }
  var corps = JSON.stringify({
    model: MODELE,
    temperature: 0.3,
    messages: [
      { role: 'system', content: SYSTEME },
      { role: 'user', content: texte },
    ],
  });
  httpsJson({
    hostname: HOTE,
    path: '/v1/chat/completions',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + cle,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(corps),
    },
  }, corps, function (e, json) {
    if (e) { done(e); return; }
    var brut = json.choices && json.choices[0] && json.choices[0].message
      ? json.choices[0].message.content : '';
    done(null, normaliser(extraireJson(brut), brut));
  });
}

function conseillerDossier(fiche, done) {
  appelerXai(texteDossier(fiche), done);
}

function conseillerClient(fiche, done) {
  appelerXai(texteClient(fiche), done);
}

module.exports = {
  configure: configure,
  modele: modele,
  texteDossier: texteDossier,
  texteClient: texteClient,
  conseillerDossier: conseillerDossier,
  conseillerClient: conseillerClient,
  SYSTEME: SYSTEME,
};
