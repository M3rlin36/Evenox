'use strict';
/* Vérifie les routes du serveur de démo : session, pipeline (alertes,
   renouvellement, post-événement), fiche client (interactions). */

var http = require('http');
var assert = require('assert');
var serverMod = require('./server');

var app = serverMod.creerApp();
var srv = http.createServer(app);

function req(opts) {
  return new Promise(function (resolve, reject) {
    var headers = opts.headers || {};
    if (opts.cookie) headers.Cookie = opts.cookie;
    if (opts.body !== undefined) headers['Content-Type'] = 'application/json';
    var r = http.request({
      hostname: '127.0.0.1',
      port: opts.port,
      path: opts.path,
      method: opts.method || 'GET',
      headers: headers,
    }, function (res) {
      var chunks = [];
      res.on('data', function (c) { chunks.push(c); });
      res.on('end', function () {
        var texte = Buffer.concat(chunks).toString('utf8');
        var json = null;
        try { json = texte ? JSON.parse(texte) : null; } catch (e) { json = null; }
        resolve({ status: res.statusCode, json: json, texte: texte, headers: res.headers });
      });
    });
    r.on('error', reject);
    if (opts.body !== undefined) r.write(JSON.stringify(opts.body));
    r.end();
  });
}

function cookieDe(res) {
  var set = res.headers['set-cookie'];
  if (!set) return '';
  return String(Array.isArray(set) ? set[0] : set).split(';')[0];
}

srv.listen(0, '127.0.0.1', function () {
  var port = srv.address().port;
  var cookie = '';

  Promise.resolve()
    .then(function () { return req({ port: port, path: '/api/pipeline' }); })
    .then(function (r) {
      assert.strictEqual(r.status, 401, 'pipeline sans session → 401');
    })
    .then(function () {
      return req({ port: port, path: '/api/connexion-code', method: 'POST', body: { code: '0000' } });
    })
    .then(function (r) {
      assert.strictEqual(r.status, 403, 'mauvais code → 403');
    })
    .then(function () {
      return req({ port: port, path: '/api/connexion-code', method: 'POST', body: { code: '1111' } });
    })
    .then(function (r) {
      assert.strictEqual(r.status, 200, 'code démo → 200');
      cookie = cookieDe(r);
      assert.ok(cookie, 'cookie de session posé');
    })
    .then(function () { return req({ port: port, path: '/api/pipeline', cookie: cookie }); })
    .then(function (r) {
      assert.strictEqual(r.status, 200);
      var f = r.json.filtres;
      assert.ok(f.sans_action >= 1, 'filtre sans_action');
      assert.ok(f.relance_echue >= 1, 'filtre relance_echue');
      assert.ok(f.renouvellement >= 1, 'filtre renouvellement');
      assert.ok(f.post_evenement >= 1, 'filtre post_evenement');
      var statuts = r.json.colonnes.map(function (c) { return c.statut; });
      ['new', 'quoted', 'following_up', 'negotiating', 'won', 'lost', 'deferred']
        .forEach(function (s) {
          assert.ok(statuts.indexOf(s) !== -1, 'colonne ' + s);
        });
      var cartes = [];
      r.json.colonnes.forEach(function (c) { cartes = cartes.concat(c.cartes); });
      var techno = cartes.filter(function (c) { return c.id === 'dos-techno'; })[0];
      assert.ok(techno, 'carte TechnoNord');
      assert.strictEqual(techno.alerte, 'Relance échue');
      assert.ok(techno.prochaine_action, 'prochaine_action présente');
      var st = cartes.filter(function (c) { return c.id === 'dos-st'; })[0];
      assert.strictEqual(st.alerte, 'Sans prochaine action');
      var fest = cartes.filter(function (c) { return c.id === 'dos-festival'; })[0];
      assert.strictEqual(fest.pipeline, 'post_evenement');
    })
    .then(function () { return req({ port: port, path: '/api/client/cli-techno', cookie: cookie }); })
    .then(function (r) {
      assert.strictEqual(r.status, 200);
      assert.ok(r.json.interactions && r.json.interactions.length >= 2, 'timeline interactions');
      assert.ok(r.json.contrats.length >= 1, 'contrats année par année');
      var types = r.json.interactions.map(function (i) { return i.type; });
      assert.ok(types.indexOf('courriel') !== -1);
      assert.ok(types.indexOf('appel') !== -1);
    })
    .then(function () { return req({ port: port, path: '/api/dossier/dos-techno', cookie: cookie }); })
    .then(function (r) {
      assert.strictEqual(r.status, 200);
      assert.strictEqual(r.json.dossier.alerte, 'Relance échue');
      assert.ok(r.json.dossier.prochaine_action);
      assert.ok(r.json.discussion.length >= 1);
    })
    .then(function () { return req({ port: port, path: '/api/suivis', cookie: cookie }); })
    .then(function (r) {
      assert.strictEqual(r.status, 200);
      assert.ok(r.json.liste.length >= 1, 'soumissions');
      assert.ok(r.json.prospection && r.json.prospection.length >= 1, 'prospection');
      assert.ok(r.json.post_evenement && r.json.post_evenement.length >= 1, 'post-événement');
      assert.ok(r.json.relances_annuelles.length >= 1, 'relance annuelle');
      assert.ok(r.json.alertes_booqable.length >= 1, 'payé encore brouillon');
      assert.ok(r.json.liste.every(function (x) { return x.section === 'soumission'; }));
    })
    .then(function () { return req({ port: port, path: '/api/etat', cookie: cookie }); })
    .then(function (r) {
      assert.ok(r.json.n_soumissions >= 1);
      assert.ok(r.json.n_an_passe >= 1);
      assert.ok(r.json.n_prospection >= 1);
    })
    .then(function () { return req({ port: port, path: '/api/clients', cookie: cookie }); })
    .then(function (r) {
      assert.strictEqual(r.status, 200);
      assert.ok(r.json.total >= 6);
    })
    .then(function () {
      console.log('OK — 3 files, pipeline, fiche client, suivis.');
      srv.close();
      process.exit(0);
    })
    .catch(function (err) {
      console.error('ÉCHEC', err);
      srv.close();
      process.exit(1);
    });
});
