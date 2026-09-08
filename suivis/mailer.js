'use strict';
/* Expédition des gabarits.
   · Test  → evenox.ca@gmail.com seulement, envoi réel si Gmail est branché.
   · Client → brouillon seulement jusqu'au 10 septembre 2026.
   Sans jeton Gmail, on enregistre le courriel en mémoire / sur disque
   pour que l'UI puisse le relire. Rien n'est inventé ici. */

var fs = require('fs');
var path = require('path');
var https = require('https');
var querystring = require('querystring');
var gabarits = require('./gabarits');

var COMPTE_TEST = gabarits.COMPTE_TEST;
var ENVOI_CLIENT_DES_LE = process.env.EVENOX_ENVOI_CLIENT_DES_LE || '2026-09-10';
var FROM = process.env.GMAIL_FROM || COMPTE_TEST;
function fichierStore() {
  return process.env.EVENOX_COURRIELS_FICHIER ||
    path.join(__dirname, 'data', 'courriels.json');
}

function aujourdHui() {
  var d = new Date();
  var m = d.getMonth() + 1;
  var j = d.getDate();
  return d.getFullYear() + '-' + (m < 10 ? '0' : '') + m + '-' + (j < 10 ? '0' : '') + j;
}

function normaliser(courriel) {
  return String(courriel || '').trim().toLowerCase();
}

function estCompteTest(courriel) {
  return normaliser(courriel) === COMPTE_TEST;
}

function envoiClientAutorise() {
  return aujourdHui() >= ENVOI_CLIENT_DES_LE;
}

function gmailConfigure() {
  return Boolean(process.env.GMAIL_ACCESS_TOKEN ||
    (process.env.GMAIL_REFRESH_TOKEN &&
      process.env.GMAIL_CLIENT_ID &&
      process.env.GMAIL_CLIENT_SECRET));
}

function refuserEnvoiClient(destinataire) {
  if (estCompteTest(destinataire)) return null;
  if (envoiClientAutorise()) return null;
  return 'Aucun envoi client avant le ' + ENVOI_CLIENT_DES_LE +
    '. Brouillon seulement.';
}

function nouveauId() {
  return 'mail-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
}

function lireStore() {
  try {
    var brut = fs.readFileSync(fichierStore(), 'utf8');
    var j = JSON.parse(brut);
    return Array.isArray(j) ? j : [];
  } catch (e) {
    return [];
  }
}

function ecrireStore(liste) {
  var dir = path.dirname(fichierStore());
  try { fs.mkdirSync(dir, { recursive: true }); } catch (e) { /* ignore */ }
  fs.writeFileSync(fichierStore(), JSON.stringify(liste, null, 2), 'utf8');
}

function enregistrer(entree) {
  var liste = lireStore();
  liste.unshift(entree);
  ecrireStore(liste);
  return entree;
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
        var err = new Error('Gmail HTTP ' + res.statusCode);
        err.detail = json;
        done(err);
        return;
      }
      done(null, json);
    });
  });
  req.on('error', done);
  if (corps) req.write(corps);
  req.end();
}

function jetonGmail(done) {
  if (process.env.GMAIL_ACCESS_TOKEN) {
    done(null, process.env.GMAIL_ACCESS_TOKEN);
    return;
  }
  var corps = querystring.stringify({
    client_id: process.env.GMAIL_CLIENT_ID,
    client_secret: process.env.GMAIL_CLIENT_SECRET,
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    grant_type: 'refresh_token',
  });
  httpsJson({
    hostname: 'oauth2.googleapis.com',
    path: '/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(corps),
    },
  }, corps, function (err, json) {
    if (err) return done(err);
    if (!json.access_token) return done(new Error('Jeton Gmail manquant'));
    done(null, json.access_token);
  });
}

function encoderMime(from, to, sujet, texte, html) {
  var frontier = 'evenox_' + Date.now().toString(36);
  var lignes = [
    'From: Evenox <' + from + '>',
    'To: ' + to,
    'Subject: =?UTF-8?B?' + Buffer.from(sujet, 'utf8').toString('base64') + '?=',
    'MIME-Version: 1.0',
    'Content-Type: multipart/alternative; boundary="' + frontier + '"',
    '',
    '--' + frontier,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    Buffer.from(texte, 'utf8').toString('base64'),
    '--' + frontier,
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    Buffer.from(html || '', 'utf8').toString('base64'),
    '--' + frontier + '--',
    '',
  ];
  return Buffer.from(lignes.join('\r\n'), 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function appelGmail(jeton, methode, chemin, corpsObj, done) {
  var corps = corpsObj ? JSON.stringify(corpsObj) : '';
  httpsJson({
    hostname: 'gmail.googleapis.com',
    path: chemin,
    method: methode,
    headers: {
      Authorization: 'Bearer ' + jeton,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(corps),
    },
  }, corps, done);
}

function pousserGmail(entree, done) {
  if (!gmailConfigure()) {
    entree.transport = 'local';
    done(null, entree);
    return;
  }
  jetonGmail(function (err, jeton) {
    if (err) {
      entree.transport = 'local';
      entree.transport_erreur = err.message;
      done(null, entree);
      return;
    }
    var raw = encoderMime(FROM, entree.destinataire, entree.sujet, entree.texte, entree.html);
    if (entree.mode === 'envoi') {
      appelGmail(jeton, 'POST', '/gmail/v1/users/me/messages/send', { raw: raw }, function (e, r) {
        if (e) {
          entree.transport = 'local';
          entree.transport_erreur = e.message;
          done(null, entree);
          return;
        }
        entree.transport = 'gmail';
        entree.gmail_id = r.id;
        entree.gmail_thread_id = r.threadId;
        done(null, entree);
      });
      return;
    }
    appelGmail(jeton, 'POST', '/gmail/v1/users/me/drafts', { message: { raw: raw } }, function (e, r) {
      if (e) {
        entree.transport = 'local';
        entree.transport_erreur = e.message;
        done(null, entree);
        return;
      }
      entree.transport = 'gmail';
      entree.gmail_draft_id = r.id;
      entree.gmail_id = r.message && r.message.id;
      entree.gmail_thread_id = r.message && r.message.threadId;
      done(null, entree);
    });
  });
}

function preparer(rendu, opts) {
  opts = opts || {};
  var destPrevu = normaliser(rendu.destinataire_prevu);
  var mode = opts.mode || 'brouillon';
  var destinataire = destPrevu;

  if (mode === 'envoi') {
    var blocage = refuserEnvoiClient(destinataire);
    if (blocage) {
      return { erreur: blocage, code: 'envoi_client_bloque' };
    }
  }

  if (opts.forcer_test || mode === 'test') {
    mode = 'envoi';
    destinataire = COMPTE_TEST;
  }

  if (!rendu.envoie && mode === 'envoi') {
    mode = 'interne';
    destinataire = COMPTE_TEST;
  }

  if (mode === 'envoi' && !estCompteTest(destinataire) && !envoiClientAutorise()) {
    return { erreur: refuserEnvoiClient(destinataire), code: 'envoi_client_bloque' };
  }

  if (!destinataire && mode !== 'interne') {
    return { erreur: 'Aucun courriel sur ce dossier.', code: 'sans_courriel' };
  }

  return {
    id: nouveauId(),
    cree_le: new Date().toISOString(),
    mode: mode,
    gabarit: rendu.gabarit,
    etape: rendu.etape,
    titre: rendu.titre,
    dossier_id: opts.dossier_id || '',
    nom: opts.nom || '',
    destinataire: destinataire,
    destinataire_prevu: destPrevu,
    sujet: rendu.sujet,
    texte: rendu.texte,
    html: rendu.html,
    appel_dabord: rendu.appel_dabord,
    transport: 'en_attente',
  };
}

function expedier(rendu, opts, done) {
  if (typeof opts === 'function') { done = opts; opts = {}; }
  var entree = preparer(rendu, opts || {});
  if (entree.erreur) {
    var err = new Error(entree.erreur);
    err.code = entree.code;
    done(err);
    return;
  }
  if (entree.mode === 'interne') {
    entree.transport = 'interne';
    enregistrer(entree);
    done(null, entree);
    return;
  }
  pousserGmail(entree, function (e, complete) {
    var final = complete || entree;
    enregistrer(final);
    done(e, final);
  });
}

module.exports = {
  COMPTE_TEST: COMPTE_TEST,
  ENVOI_CLIENT_DES_LE: ENVOI_CLIENT_DES_LE,
  aujourdHui: aujourdHui,
  estCompteTest: estCompteTest,
  envoiClientAutorise: envoiClientAutorise,
  gmailConfigure: gmailConfigure,
  refuserEnvoiClient: refuserEnvoiClient,
  preparer: preparer,
  expedier: expedier,
  lireStore: lireStore,
  fichierStore: fichierStore,
};
