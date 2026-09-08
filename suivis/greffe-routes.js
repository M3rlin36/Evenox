'use strict';
/* Greffe Grok + Obsidian sur le serveur de production, sans le remplacer.
   S’attache à `app` + `exigerSession` déjà en place.
   Relit les dossiers via les routes existantes (cookie de la session). */

var http = require('http');
var grok = require('./grok');
var obsidian = require('./obsidian');

function cheminApi(req, suffixe) {
  var base = String(req.baseUrl || '');
  if (base.indexOf('/suivis') === 0) return '/suivis/api' + suffixe;
  return '/api' + suffixe;
}

function interne(req, suffixe, done) {
  var port = req.socket && req.socket.localPort;
  if (!port) {
    done(new Error('Port local inconnu.'));
    return;
  }
  var opts = {
    hostname: '127.0.0.1',
    port: port,
    path: cheminApi(req, suffixe),
    method: 'GET',
    headers: {
      Cookie: req.headers.cookie || '',
      Accept: 'application/json',
    },
  };
  var r = http.request(opts, function (res) {
    var chunks = [];
    res.on('data', function (c) { chunks.push(c); });
    res.on('end', function () {
      var texte = Buffer.concat(chunks).toString('utf8');
      var json = null;
      try { json = texte ? JSON.parse(texte) : {}; } catch (e) {
        done(new Error('Réponse interne illisible.'));
        return;
      }
      if (res.statusCode >= 400) {
        done(new Error((json && json.erreur) || ('HTTP ' + res.statusCode)));
        return;
      }
      done(null, json);
    });
  });
  r.on('error', done);
  r.setTimeout(15000, function () {
    r.destroy();
    done(new Error('Lecture interne trop longue.'));
  });
  r.end();
}

function dossiersDepuisEtat(pipe, suivis) {
  var vus = {};
  var out = [];
  function push(d) {
    if (!d || !d.id || vus[d.id]) return;
    vus[d.id] = true;
    out.push(d);
  }
  (suivis && suivis.liste || []).forEach(function (s) {
    push({
      id: s.id,
      nom: s.client || s.nom,
      entreprise: s.entreprise,
      courriel: s.courriel,
      telephone: s.telephone,
      date_evenement: s.date_evenement,
      statut: s.statut,
      prochaine_action: s.prochaine_action,
      booqable_number: s.booqable_number,
      montant: s.montant,
      notes: s.notes,
    });
  });
  ((pipe && pipe.colonnes) || []).forEach(function (col) {
    (col.cartes || []).forEach(function (c) {
      push({
        id: c.id,
        nom: c.nom,
        entreprise: c.entreprise,
        date_evenement: c.date_evenement,
        statut: col.statut,
        prochaine_action: c.prochaine_action,
        montant: c.montant,
        lead_id: c.lead_id,
      });
    });
  });
  return out;
}

function greffer(app, exigerSession) {
  if (!app || typeof app.use !== 'function') {
    throw new Error('greffe-routes : app Express manquante.');
  }
  var garde = typeof exigerSession === 'function' ? exigerSession : function (req, res, next) { next(); };

  app.use(function (req, res, next) {
    var url = String(req.originalUrl || req.url || '');
    if (url.indexOf('/api/etat') === -1) { next(); return; }
    var json = res.json.bind(res);
    res.json = function (body) {
      if (body && body.synchro) {
        body.synchro.grok_ok = grok.configure();
        body.synchro.obsidian_ok = obsidian.configure();
      }
      return json(body);
    };
    next();
  });

  app.post('/api/obsidian/exporter', garde, function (req, res) {
    var jour = (req.body && req.body.jour) || new Date().toISOString().slice(0, 10);
    interne(req, '/journal', function (e1, journal) {
      interne(req, '/pipeline', function (e2, pipe) {
        interne(req, '/suivis', function (e3, suivis) {
          if (e2 && e3) {
            res.status(502).json({ erreur: 'Impossible de lire les dossiers : ' + (e2.message || e3.message) });
            return;
          }
          try {
            var dossiers = dossiersDepuisEtat(pipe, suivis);
            var resultat = obsidian.exporter({
              jour: (journal && journal.jour) || jour,
              dossiers: dossiers,
              journal: (journal && journal.lignes) || [],
            });
            res.json({
              message: resultat.n + ' notes écrites dans le vault. Rien n’est parti aux clients.',
              vault: resultat.vault,
              n: resultat.n,
              fichiers: resultat.fichiers.map(function (f) { return f.relatif; }),
            });
          } catch (err) {
            if (err.code === 'obsidian_off') {
              res.status(503).json({ erreur: err.message, code: 'obsidian_off' });
              return;
            }
            res.status(500).json({ erreur: String(err.message || err) });
          }
        });
      });
    });
  });

  app.post('/api/dossier/:id/grok', garde, function (req, res) {
    interne(req, '/dossier/' + encodeURIComponent(req.params.id), function (err, fiche) {
      if (err || !fiche || !fiche.dossier) {
        res.status(404).json({ erreur: (err && err.message) || 'Dossier introuvable.' });
        return;
      }
      grok.conseillerDossier(fiche, function (e, suggestion) {
        if (e && e.code === 'grok_non_configure') {
          res.status(503).json({
            erreur: e.message,
            code: 'grok_non_configure',
            texte: grok.texteDossier(fiche),
          });
          return;
        }
        if (e) {
          res.status(502).json({ erreur: String(e.message || e), code: 'grok_echec' });
          return;
        }
        res.json({
          suggestion: suggestion,
          modele: grok.modele(),
          stub: process.env.GROK_STUB === '1',
        });
      });
    });
  });

  app.post('/api/client/:id/grok', garde, function (req, res) {
    interne(req, '/client/' + encodeURIComponent(req.params.id), function (err, fiche) {
      if (err || !fiche || !fiche.client) {
        res.status(404).json({ erreur: (err && err.message) || 'Client introuvable.' });
        return;
      }
      grok.conseillerClient(fiche, function (e, suggestion) {
        if (e && e.code === 'grok_non_configure') {
          res.status(503).json({
            erreur: e.message,
            code: 'grok_non_configure',
            texte: grok.texteClient(fiche),
          });
          return;
        }
        if (e) {
          res.status(502).json({ erreur: String(e.message || e), code: 'grok_echec' });
          return;
        }
        res.json({
          suggestion: suggestion,
          modele: grok.modele(),
          stub: process.env.GROK_STUB === '1',
        });
      });
    });
  });
}

module.exports = greffer;
module.exports.dossiersDepuisEtat = dossiersDepuisEtat;
