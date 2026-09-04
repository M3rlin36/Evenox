'use strict';
/* ============================================================
   Serveur de démo — mêmes routes que evenoxpos.cloud/suivis/.

   Ce n'est PAS la production. La production (Express + nginx +
   Booqable + Gmail) vit uniquement sur le VPS Hostinger. Ici on
   sert le frontend et un état en mémoire pour développer et
   tester sans jeton Booqable ni code d'équipe réel.

   Déploiement VPS : copier public/js et public/css par-dessus
   les fichiers existants. Les nouveaux champs (alerte,
   prochaine_action, prochaine_relance, pipeline, interactions)
   sont optionnels — l'UI se dégrade si l'API ne les envoie pas.
   ============================================================ */

var express = require('express');
var path = require('path');
var crypto = require('crypto');
var fixtures = require('./fixtures');

var PORT = Number(process.env.PORT) || 3000;
var DEMO_CODE = String(process.env.DEMO_CODE || '1111');
var COOKIE = 'evenox_demo';

var etat = fixtures.etatInitial();
var sessions = Object.create(null);
var echecs = Object.create(null);

function aujourdHui() {
  return fixtures.isoJour(0);
}

function cookieSession(req) {
  var raw = String(req.headers.cookie || '');
  var m = raw.match(new RegExp('(?:^|; )' + COOKIE + '=([^;]+)'));
  return m ? decodeURIComponent(m[1]) : '';
}

function utilisateur(req) {
  var sid = cookieSession(req);
  return sid && sessions[sid] ? sessions[sid] : null;
}

function exigerSession(req, res, next) {
  if (!utilisateur(req)) {
    res.status(401).json({ erreur: 'Session expirée' });
    return;
  }
  next();
}

function json(req, res, next) {
  if (req.method === 'GET' || req.method === 'HEAD') return next();
  var ct = String(req.headers['content-type'] || '');
  if (ct.indexOf('application/json') === -1) return next();
  var morceaux = [];
  req.on('data', function (c) { morceaux.push(c); });
  req.on('end', function () {
    var brut = Buffer.concat(morceaux).toString('utf8');
    try { req.body = brut ? JSON.parse(brut) : {}; }
    catch (e) { req.body = {}; }
    next();
  });
}

function setCookie(res, sid) {
  res.setHeader('Set-Cookie', COOKIE + '=' + encodeURIComponent(sid) +
    '; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400');
}

function clearCookie(res) {
  res.setHeader('Set-Cookie', COOKIE + '=; Path=/; HttpOnly; Max-Age=0');
}

function clientDe(id) { return etat.clients[id] || null; }
function dossierDe(id) { return etat.dossiers[id] || null; }

function dossiersDuClient(clientId) {
  return Object.keys(etat.dossiers).map(function (k) { return etat.dossiers[k]; })
    .filter(function (d) { return d.client_id === clientId; });
}

function argentPaye(d) {
  return Number(d.montant_paye || 0) + Number(d.depot_paye || 0);
}

function paiement(d) {
  var total = Number(d.montant) || 0;
  var encaisse = argentPaye(d);
  var solde = Math.max(0, total - encaisse);
  var pct = total ? Math.round((encaisse / total) * 100) : 0;
  return { total: total, encaisse: encaisse, solde: solde, pct: pct };
}

function badgePipeline(d) {
  if (d.pipeline === 'renouvellement') return { t: 'Renouvellement', r: false };
  if (d.pipeline === 'post_evenement') return { t: 'Post-événement +7', r: false };
  if (d.alerte === 'Relance échue') return { t: 'Relance échue', r: true };
  if (d.alerte === 'Sans prochaine action') return { t: 'Sans action', r: true };
  if (d.tier === 'HOT') return { t: 'HOT', r: false };
  return null;
}

function cartePipeline(d) {
  return {
    id: d.id,
    nom: d.nom,
    entreprise: d.entreprise,
    date_evenement: d.date_evenement,
    montant: d.montant,
    tier: d.tier,
    type: d.type,
    badge: badgePipeline(d),
    alerte: d.alerte || '',
    prochaine_action: d.prochaine_action || '',
    prochaine_relance: d.prochaine_relance || '',
    pipeline: d.pipeline || 'ventes',
  };
}

function listePipeline() {
  var colonnesOrdre = ['new', 'quoted', 'following_up', 'negotiating', 'won', 'lost', 'deferred'];
  var par = {};
  colonnesOrdre.forEach(function (s) { par[s] = []; });
  var nonChiffres = 0;
  var hot = 0, sans = 0, echue = 0, renouv = 0, post = 0;

  Object.keys(etat.dossiers).forEach(function (k) {
    var d = etat.dossiers[k];
    if (!par[d.statut]) par[d.statut] = [];
    par[d.statut].push(d);
    if (!d.montant) nonChiffres++;
    if (d.tier === 'HOT') hot++;
    if (d.alerte === 'Sans prochaine action') sans++;
    if (d.alerte === 'Relance échue') echue++;
    if (d.pipeline === 'renouvellement') renouv++;
    if (d.pipeline === 'post_evenement') post++;
  });

  var colonnes = colonnesOrdre.filter(function (s) { return (par[s] || []).length; }).map(function (s) {
    var cartes = par[s].map(cartePipeline);
    var valeur = par[s].reduce(function (acc, d) { return acc + (Number(d.montant) || 0); }, 0);
    return {
      statut: s,
      nb: cartes.length,
      valeur: valeur,
      cartes: cartes,
      reste: 0,
      reste_note: '',
      reste_valeur: 0,
    };
  });

  return {
    colonnes: colonnes,
    non_chiffres: nonChiffres,
    filtres: {
      hot: hot,
      sans_action: sans,
      relance_echue: echue,
      renouvellement: renouv,
      post_evenement: post,
    },
  };
}

function uiSuivi(d) {
  var tag = { t: 'À faire', c: '' };
  var bordure = '';
  var pourquoi = d.prochaine_action || 'Aucune prochaine action datée.';
  var sous = (d.entreprise || d.nom) +
    (d.date_evenement ? ' · événement le ' + d.date_evenement : '');
  var gestes = ['appel', 'fait'];

  if (d.pipeline === 'prospection') {
    tag = { t: 'Prospect', c: 'p' };
    gestes = ['appel', 'devis', 'fait'];
  } else if (d.alerte === 'Relance échue') {
    tag = { t: 'Relance échue', c: 'u' };
    bordure = 'hot';
    gestes = ['appel', 'repondre', 'fait'];
  } else if (d.alerte === 'Sans prochaine action') {
    tag = { t: 'Sans action', c: 'u' };
    gestes = ['appel', 'devis', 'fait'];
  } else if (d.statut === 'quoted' && d.montant >= 2000) {
    tag = { t: 'À approuver', c: '' };
    gestes = ['approuver', 'appel', 'fait'];
  } else if (d.statut === 'negotiating') {
    tag = { t: 'Contrat', c: '' };
    gestes = ['contrat', 'appel', 'fait'];
  } else if (d.pipeline === 'post_evenement') {
    tag = { t: 'J+7', c: '' };
    gestes = ['appel', 'fait'];
  }

  return {
    id: d.id,
    client: d.nom,
    entreprise: d.entreprise,
    montant: d.montant,
    notes: d.notes,
    ui_gestes: gestes,
    ui_bordure: bordure,
    ui_tag: tag,
    ui_pourquoi: pourquoi,
    ui_sous_titre: sous,
    section: sectionDe(d),
  };
}

function sectionDe(d) {
  if (d.pipeline === 'prospection') return 'prospection';
  if (d.pipeline === 'post_evenement') return 'an';
  return 'soumission';
}

function fileDuJour() {
  return Object.keys(etat.dossiers).map(function (k) { return etat.dossiers[k]; })
    .filter(function (d) {
      if (d.statut === 'lost' || d.statut === 'deferred') return false;
      if (d.pipeline === 'post_evenement') return true;
      if (d.pipeline === 'prospection') return true;
      if (d.alerte === 'Relance échue' || d.alerte === 'Sans prochaine action') return true;
      if (d.prochaine_relance && d.prochaine_relance <= aujourdHui()) return true;
      return false;
    });
}

function dossiersParSection(sec) {
  return fileDuJour().filter(function (d) { return sectionDe(d) === sec; });
}

function alertesBooqable() {
  return Object.keys(etat.dossiers).map(function (k) { return etat.dossiers[k]; })
    .filter(function (d) {
      return d.booqable_status === 'draft' && argentPaye(d) > 0;
    })
    .map(function (d) {
      return { id: d.id, client: d.nom, booqable_number: d.booqable_number };
    });
}

function relancesAnnuelles() {
  var an = etat.clients['cli-an'];
  if (!an) return [];
  var ct = (etat.contrats['cli-an'] || [])[0];
  return [{
    client_id: an.id,
    client: an.nom,
    entreprise: an.entreprise,
    date_an_dernier: ct ? ct.date_evenement : '2025-12-12',
    delai_reservation_j: 96,
    montant_an_dernier: ct ? ct.montant : 1640,
  }];
}

function ficheDossier(id) {
  var d = dossierDe(id);
  if (!d) return null;
  var pay = paiement(d);
  var mat = etat.materiel[id] || [];
  var disc = etat.discussion[id] || [];
  var hist = etat.journal.filter(function (j) { return j.dossier_id === id; })
    .map(function (j) { return { cree_le: j.cree_le, resume: j.resume, par: j.par }; });
  var contrats = etat.contrats[d.client_id] || [];
  var adm = [
    ['Premier contact', Boolean(d.dernier_contact_le), d.dernier_contact_le],
    ['Soumission envoyée', d.statut !== 'new', d.statut === 'new' ? '' : '2026-08-28'],
    ['Relance', Boolean(d.prochaine_relance), d.prochaine_relance || ''],
    ['Dépôt reçu', pay.encaisse > 0, pay.encaisse > 0 ? d.dernier_contact_le : ''],
    ['Réservé dans Booqable', d.booqable_status === 'reserved' || d.booqable_status === 'completed', ''],
  ];
  var presentes = [];
  var manquantes = [];
  (d.date_evenement ? presentes : manquantes).push('Date d\'événement');
  (d.telephone ? presentes : manquantes).push('Téléphone');
  (d.courriel ? presentes : manquantes).push('Courriel');
  (d.montant ? presentes : manquantes).push('Montant');
  (d.prochaine_action ? presentes : manquantes).push('Prochaine action');

  var veut = [];
  if (d.notes) veut.push(d.notes);
  if (mat.length) {
    veut.push(mat.map(function (m) {
      return (m.quantite ? m.quantite + '× ' : '') + m.produit;
    }).join(', '));
  }
  if (!veut.length) veut.push('Besoin pas encore précisé — ouvrir le fil ou appeler.');

  return {
    dossier: d,
    veut: veut,
    discussion: disc,
    adm: adm,
    infos: { presentes: presentes, manquantes: manquantes },
    materiel: mat,
    materiel_avertissement: '',
    livraison: mat.length ? { incluse: true, montant: 0 } : null,
    paiement: pay,
    historique: hist,
    contrats_passes: contrats,
  };
}

function ficheClient(id) {
  var c = clientDe(id);
  if (!c) return null;
  var contrats = etat.contrats[id] || [];
  var dossiers = dossiersDuClient(id).map(function (d) {
    return {
      id: d.id, statut: d.statut, lead_id: d.lead_id,
      montant: d.montant, date_evenement: d.date_evenement,
    };
  });
  var total = contrats.reduce(function (a, ct) { return a + (Number(ct.montant) || 0); }, 0);
  var annuelle = null;
  if (id === 'cli-an' && contrats[0]) {
    annuelle = {
      date_probable: '2026-12-12',
      montant_an_dernier: contrats[0].montant,
      annee_precedente: '2025',
    };
  }
  return {
    client: c,
    resume: { nb_contrats: contrats.length, total_historique: total },
    annuelle: annuelle,
    contrats: contrats,
    dossiers: dossiers,
    interactions: etat.interactions[id] || [],
  };
}

function journaliser(par, resume, dossier) {
  etat.journal.unshift({
    cree_le: new Date().toISOString(),
    par: par,
    resume: resume,
    detail: dossier ? dossier.nom : '',
    lead_id: dossier ? dossier.lead_id : '',
    dossier_id: dossier ? dossier.id : '',
    client: dossier ? dossier.nom : '',
  });
}

function garderAnnulation(action) {
  var id = crypto.randomBytes(8).toString('hex');
  etat.annulations[id] = action;
  return id;
}

function api(app) {
  app.use(json);

  app.post('/api/connexion-code', function (req, res) {
    var ip = req.ip || 'local';
    echecs[ip] = echecs[ip] || 0;
    if (echecs[ip] >= 8) {
      res.status(429).json({ erreur: 'Trop d\'essais. Réessayez plus tard.' });
      return;
    }
    var code = String((req.body && req.body.code) || '').replace(/\D+/g, '');
    if (code !== DEMO_CODE) {
      echecs[ip]++;
      res.status(403).json({ erreur: 'Code incorrect.' });
      return;
    }
    echecs[ip] = 0;
    var sid = crypto.randomBytes(16).toString('hex');
    sessions[sid] = etat.equipe[0];
    setCookie(res, sid);
    res.json({ ok: true, nom: etat.equipe[0].nom });
  });

  app.post('/api/deconnexion', function (req, res) {
    var sid = cookieSession(req);
    if (sid) delete sessions[sid];
    clearCookie(res);
    res.json({ ok: true });
  });

  app.get('/api/moi', exigerSession, function (req, res) {
    res.json({
      utilisateur: utilisateur(req),
      equipe: etat.equipe.map(function (u) { return { nom: u.nom, identifiant: u.identifiant }; }),
    });
  });

  app.get('/api/etat', exigerSession, function (req, res) {
    var actifs = Object.keys(etat.dossiers).filter(function (k) {
      var s = etat.dossiers[k].statut;
      return s !== 'lost' && s !== 'won' && s !== 'deferred';
    }).length;
    var nSoum = dossiersParSection('soumission').length;
    var nAn = dossiersParSection('an').length + relancesAnnuelles().length;
    var nProsp = dossiersParSection('prospection').length;
    var aAvancer = Object.keys(etat.dossiers).filter(function (k) {
      var d = etat.dossiers[k];
      if (d.statut === 'lost' || d.statut === 'won' || d.statut === 'deferred') return false;
      return d.alerte === 'Sans prochaine action' || d.alerte === 'Relance échue' ||
        (d.prochaine_relance && d.prochaine_relance <= aujourdHui());
    }).length;
    res.json({
      dossiers_actifs: actifs,
      a_avancer: aAvancer,
      n_soumissions: nSoum,
      n_an_passe: nAn,
      n_prospection: nProsp,
      nb_clients: Object.keys(etat.clients).length,
      sequence_mode: etat.sequenceMode,
      synchro: { booqable_ok: true, gmail_ok: true },
      payees_non_reservees: alertesBooqable().length,
    });
  });

  app.get('/api/suivis', exigerSession, function (req, res) {
    var soum = dossiersParSection('soumission').map(uiSuivi);
    var prosp = dossiersParSection('prospection').map(uiSuivi);
    var post = dossiersParSection('an').map(uiSuivi);
    var seq = Object.keys(etat.dossiers).filter(function (k) {
      return etat.dossiers[k].statut === 'following_up';
    }).length;
    var attendent = dossiersParSection('soumission').filter(function (d) { return d.attend_qui === 'evenox'; }).length;
    var enJeu = dossiersParSection('soumission').reduce(function (a, d) { return a + (Number(d.montant) || 0); }, 0);
    res.json({
      liste: soum,
      prospection: prosp,
      post_evenement: post,
      alertes_booqable: alertesBooqable(),
      relances_annuelles: relancesAnnuelles(),
      progression: { traites: 0, total: soum.length },
      compteurs: {
        total_file: soum.length,
        n_soumissions: soum.length,
        n_an_passe: post.length + relancesAnnuelles().length,
        n_prospection: prosp.length,
        en_jeu: enJeu,
        attendent: attendent,
        evenements_48h: dossiersParSection('soumission').filter(function (d) {
          return d.date_evenement && d.date_evenement <= fixtures.isoJour(2) &&
            d.date_evenement >= aujourdHui();
        }).length,
        a_approuver: dossiersParSection('soumission').filter(function (d) { return d.montant >= 2000 && !d.depot_paye; }).length,
        en_sequence: seq,
      },
      seuils: { max_par_jour: 8 },
    });
  });

  app.post('/api/suivis/reveiller/:clientId', exigerSession, function (req, res) {
    var c = clientDe(req.params.clientId);
    if (!c) { res.status(404).json({ erreur: 'Client introuvable.' }); return; }
    var nid = 'dos-reveil-' + req.params.clientId;
    etat.dossiers[nid] = {
      id: nid, client_id: c.id, lead_id: 'REVEIL-2026',
      nom: c.nom, entreprise: c.entreprise, statut: 'quoted', tier: c.tier, type: c.type,
      montant: 0, montant_paye: 0, depot_paye: 0, date_evenement: '',
      prochaine_action: 'Relire la soumission reprise', prochaine_relance: aujourdHui(),
      alerte: '', pipeline: 'renouvellement',
      courriel: c.courriel, telephone: c.telephone, assigne_a: 'Alexandre', notes: '',
      desabonne: false, courriel_invalide: false, pause_auto: false,
      attend_qui: 'evenox', dernier_contact_le: aujourdHui(),
      gmail_thread_id: '', booqable_orders: [], booqable_number: '', booqable_status: 'draft',
    };
    journaliser('Alexandre', 'Soumission reprise en brouillon — ' + c.nom, etat.dossiers[nid]);
    res.json({ message: c.nom + ' — soumission reprise en brouillon (démo, rien n\'est parti).' });
  });

  app.get('/api/dossier/:id', exigerSession, function (req, res) {
    var f = ficheDossier(req.params.id);
    if (!f) { res.status(404).json({ erreur: 'Dossier introuvable.' }); return; }
    res.json(f);
  });

  app.post('/api/dossier/:id/geste', exigerSession, function (req, res) {
    var d = dossierDe(req.params.id);
    if (!d) { res.status(404).json({ erreur: 'Dossier introuvable.' }); return; }
    var geste = (req.body && req.body.geste) || 'fait';
    var avant = { prochaine_relance: d.prochaine_relance, alerte: d.alerte, prochaine_action: d.prochaine_action };
    d.alerte = '';
    d.prochaine_action = 'Suivi fait (' + geste + ')';
    d.prochaine_relance = fixtures.isoJour(3);
    journaliser(utilisateur(req).nom, 'Geste « ' + geste + ' »', d);
    var aid = garderAnnulation(function () {
      d.prochaine_relance = avant.prochaine_relance;
      d.alerte = avant.alerte;
      d.prochaine_action = avant.prochaine_action;
    });
    res.json({ message: 'Geste enregistré (démo).', annulation_id: aid });
  });

  app.post('/api/dossier/:id/reporter', exigerSession, function (req, res) {
    var d = dossierDe(req.params.id);
    if (!d) { res.status(404).json({ erreur: 'Dossier introuvable.' }); return; }
    var delai = (req.body && req.body.delai) || 'demain';
    var jours = delai === '3jours' ? 3 : 1;
    if (delai === 'lundi') {
      var n = new Date();
      var add = (8 - n.getDay()) % 7;
      if (add === 0) add = 7;
      jours = add;
    }
    var avant = d.prochaine_relance;
    d.prochaine_relance = fixtures.isoJour(jours);
    d.alerte = '';
    journaliser(utilisateur(req).nom, 'Reporté (' + delai + ')', d);
    var aid = garderAnnulation(function () { d.prochaine_relance = avant; });
    res.json({ message: 'Reporté au ' + d.prochaine_relance + '.', annulation_id: aid });
  });

  app.put('/api/dossier/:id/note', exigerSession, function (req, res) {
    var d = dossierDe(req.params.id);
    if (!d) { res.status(404).json({ erreur: 'Dossier introuvable.' }); return; }
    d.notes = String((req.body && req.body.note) || '');
    res.json({ rempli: d.notes.trim() !== '' });
  });

  app.post('/api/dossier/:id/fermer', exigerSession, function (req, res) {
    var d = dossierDe(req.params.id);
    if (!d) { res.status(404).json({ erreur: 'Dossier introuvable.' }); return; }
    var motif = (req.body && req.body.motif) || 'non_reponse';
    var avant = { statut: d.statut, motif_fermeture: d.motif_fermeture };
    d.statut = motif === 'timing' ? 'deferred' : 'lost';
    d.motif_fermeture = motif;
    d.alerte = '';
    journaliser(utilisateur(req).nom, 'Dossier classé (' + motif + ')', d);
    var aid = garderAnnulation(function () {
      d.statut = avant.statut;
      d.motif_fermeture = avant.motif_fermeture;
    });
    res.json({ message: 'Dossier classé (démo).', annulation_id: aid });
  });

  app.post('/api/dossier/annuler', exigerSession, function (req, res) {
    var id = req.body && req.body.annulation_id;
    var fn = id && etat.annulations[id];
    if (!fn) { res.status(404).json({ erreur: 'Annulation expirée.' }); return; }
    fn();
    delete etat.annulations[id];
    res.json({ message: 'Annulé — le dossier a repris son état.' });
  });

  app.post('/api/dossier/:id/reserver', exigerSession, function (req, res) {
    var d = dossierDe(req.params.id);
    if (!d) { res.status(404).json({ erreur: 'Dossier introuvable.' }); return; }
    if (!(req.body && req.body.confirme)) {
      res.status(400).json({ erreur: 'Confirmation requise.' }); return;
    }
    d.booqable_status = 'reserved';
    d.statut = 'won';
    journaliser(utilisateur(req).nom, 'Passé en réservée (démo, aucun courriel)', d);
    res.json({ message: 'Commande passée en réservée — démo locale, aucun courriel envoyé.' });
  });

  app.post('/api/dossier/:id/brouillon', exigerSession, function (req, res) {
    res.json({ message: 'Brouillon simulé — rien n\'est parti (démo locale).' });
  });

  app.post('/api/dossier/:id/materiel', exigerSession, function (req, res) {
    var f = ficheDossier(req.params.id);
    if (!f) { res.status(404).json({ erreur: 'Dossier introuvable.' }); return; }
    res.json(f);
  });

  app.post('/api/dossier/:id/assigner', exigerSession, function (req, res) {
    var d = dossierDe(req.params.id);
    if (!d) { res.status(404).json({ erreur: 'Dossier introuvable.' }); return; }
    d.assigne_a = String((req.body && req.body.nom) || '');
    res.json({ message: d.assigne_a ? ('Assigné à ' + d.assigne_a) : 'Plus personne d\'assigné.' });
  });

  app.get('/api/sequence', exigerSession, function (req, res) {
    var candidats = etat.sequenceCandidats.map(function (id) {
      var d = dossierDe(id);
      return {
        id: d.id, nom: d.nom, courriel: d.courriel, montant: d.montant,
        contexte: (d.entreprise || d.type) + ' · ' + (d.date_evenement || 'sans date'),
        relance_courte: d.prochaine_action || 'J+2',
        appel_dabord: d.montant >= 2000,
        approbation_requise: d.montant >= 2000,
      };
    }).filter(Boolean);
    var exclus = Object.keys(etat.dossiers).map(function (k) { return etat.dossiers[k]; })
      .filter(function (d) { return etat.sequenceCandidats.indexOf(d.id) === -1; })
      .map(function (d) {
        var raison = d.statut === 'lost' ? 'Dossier perdu — ne pas écrire'
          : (d.depot_paye ? 'Dépôt encaissé' : (d.desabonne ? 'Désabonné LCAP' : 'Pas encore éligible'));
        return { nom: d.nom, raison: raison, detail: d.lead_id, bonne_nouvelle: Boolean(d.depot_paye) };
      });
    res.json({
      mode: etat.sequenceMode,
      candidats: candidats,
      exclus: exclus,
      nb_exclus: exclus.length,
      garde_fous: { max_par_jour: 8, seuil_approbation: 2000 },
      compte_test: 'evenox.ca@gmail.com',
    });
  });

  app.post('/api/sequence/test', exigerSession, function (req, res) {
    res.json({ message: 'Test simulé vers evenox.ca@gmail.com — aucun client touché.' });
  });

  app.post('/api/sequence/demarrer', exigerSession, function (req, res) {
    etat.sequenceMode = 'brouillons';
    res.json({ message: 'Phase 1 démarrée en brouillons (démo).', refuses: [] });
  });

  app.post('/api/sequence/arreter', exigerSession, function (req, res) {
    etat.sequenceMode = 'off';
    res.json({ message: 'Séquence arrêtée. Aucun courriel ne part.' });
  });

  app.get('/api/journal', exigerSession, function (req, res) {
    var lignes = etat.journal;
    res.json({
      kpis: {
        automatiques: lignes.filter(function (l) { return l.par === 'auto'; }).length,
        humaines: lignes.filter(function (l) { return l.par !== 'auto'; }).length,
        valeur: 4280,
      },
      lignes: lignes,
    });
  });

  app.get('/api/calendrier', exigerSession, function (req, res) {
    var mois = String(req.query.mois || aujourdHui().slice(0, 7));
    var jours = {};
    function push(cle, point) {
      if (cle.slice(0, 7) !== mois) return;
      jours[cle] = jours[cle] || [];
      jours[cle].push(point);
    }
    Object.keys(etat.dossiers).forEach(function (k) {
      var d = etat.dossiers[k];
      if (d.statut === 'lost' || d.statut === 'won' && d.pipeline !== 'post_evenement') return;
      if (!d.prochaine_relance) return;
      push(d.prochaine_relance, {
        id: d.id, genre: 'rl', titre: d.nom, entreprise: d.entreprise,
        montant: d.montant, quoi: d.prochaine_action, date_evenement: d.date_evenement,
      });
    });
    var an = relancesAnnuelles()[0];
    if (an) {
      push('2026-09-08', {
        id: an.client_id, genre: 'an', titre: an.client, entreprise: an.entreprise,
        montant: an.montant_an_dernier, annee_passee: '2025',
        date_evenement: an.date_an_dernier,
      });
    }
    res.json({ jours: jours, decales: 1 });
  });

  app.post('/api/calendrier/etaler', exigerSession, function (req, res) {
    var simulation = req.body && req.body.simulation;
    res.json({
      places: 3,
      message: simulation
        ? '3 suivis sans date seraient répartis sur les 5 prochains jours ouvrables.'
        : '3 suivis répartis (démo — les dates déjà posées n\'ont pas bougé).',
    });
  });

  app.get('/api/pipeline', exigerSession, function (req, res) {
    res.json(listePipeline());
  });

  app.get('/api/closing', exigerSession, function (req, res) {
    var tous = Object.keys(etat.dossiers).map(function (k) { return etat.dossiers[k]; });
    var gagnes = tous.filter(function (d) { return d.statut === 'won'; });
    var perdus = tous.filter(function (d) { return d.statut === 'lost'; });
    function moy(arr) {
      var ch = arr.filter(function (d) { return d.montant > 0; });
      if (!ch.length) return 0;
      return Math.round(ch.reduce(function (a, d) { return a + d.montant; }, 0) / ch.length);
    }
    function ligne(libelle, pred) {
      var g = gagnes.filter(pred), p = perdus.filter(pred);
      var t = g.length + p.length;
      return {
        libelle: libelle,
        taux: t ? Math.round((g.length / t) * 100) : 0,
        gagnes: g.length, perdus: p.length,
        valeur_gagnee: g.reduce(function (a, d) { return a + (d.montant || 0); }, 0),
        valeur_perdue: p.reduce(function (a, d) { return a + (d.montant || 0); }, 0),
      };
    }
    res.json({
      global: {
        gagnes: gagnes.length, perdus: perdus.length,
        moyenne_gagne: moy(gagnes), moyenne_perdu: moy(perdus),
        n_gagne: gagnes.filter(function (d) { return d.montant; }).length,
        n_perdu: perdus.filter(function (d) { return d.montant; }).length,
      },
      constats: {
        moyennes: 'Les dossiers gagnés sont plus petits que les perdus — ' +
          'au-dessus de 2&nbsp;000&nbsp;$, le téléphone ferme, pas le courriel.',
        tranches: 'La tranche 2 000 $ et plus tire le taux vers le bas.',
        types: 'Le municipal et le corporatif récurrent ferment. Le one-shot cher se perd.',
        tiers: 'HOT gagne, COLD perd — le scoring dit vrai sur cet échantillon.',
      },
      tranches: [
        ligne('Moins de 2 000 $', function (d) { return d.montant > 0 && d.montant < 2000; }),
        ligne('2 000 $ et plus', function (d) { return d.montant >= 2000; }),
      ],
      types: [
        ligne('Corporatif', function (d) { return d.type === 'corporatif'; }),
        ligne('Municipal', function (d) { return d.type === 'municipal'; }),
        ligne('Mariage / privé', function (d) { return d.type === 'mariage' || d.type === 'prive'; }),
      ],
      tiers: [
        ligne('HOT', function (d) { return d.tier === 'HOT'; }),
        ligne('WARM', function (d) { return d.tier === 'WARM'; }),
        ligne('COLD', function (d) { return d.tier === 'COLD'; }),
      ],
      fenetre: { nb: gagnes.length + perdus.length, debut: '2026-06-01', fin: aujourdHui() },
    });
  });

  app.get('/api/clients', exigerSession, function (req, res) {
    var liste = Object.keys(etat.clients).map(function (k) {
      var c = etat.clients[k];
      var ds = dossiersDuClient(c.id);
      var recent = ds.filter(function (d) { return d.statut !== 'lost' && d.statut !== 'deferred'; })[0];
      var valeur = ds.reduce(function (a, d) { return a + (Number(d.montant) || 0); }, 0);
      var encaisse = ds.reduce(function (a, d) { return a + argentPaye(d); }, 0);
      var dates = ds.map(function (d) { return d.date_evenement; }).filter(Boolean).sort();
      return {
        id: c.id, nom: c.nom, entreprise: c.entreprise, type: c.type, tier: c.tier,
        nb_dossiers: ds.length, valeur: valeur, encaisse: encaisse,
        dernier: dates.length ? dates[dates.length - 1] : '',
        statut: c.statut, desabonne: c.desabonne, recurrent: c.recurrent,
        jamais_gagne: c.jamais_gagne, dossier_recent: recent ? recent.id : '',
      };
    });
    res.json({ clients: liste, total: liste.length });
  });

  app.get('/api/client/:id', exigerSession, function (req, res) {
    var f = ficheClient(req.params.id);
    if (!f) { res.status(404).json({ erreur: 'Client introuvable.' }); return; }
    res.json(f);
  });

  app.get('/api/recherche', exigerSession, function (req, res) {
    var q = String(req.query.q || '').toLowerCase();
    var dossiers = Object.keys(etat.dossiers).map(function (k) { return etat.dossiers[k]; })
      .filter(function (d) {
        return (d.nom + ' ' + d.entreprise + ' ' + d.lead_id).toLowerCase().indexOf(q) !== -1;
      })
      .map(function (d) { return { id: d.id, nom: d.nom, entreprise: d.entreprise, montant: d.montant }; });
    var clients = Object.keys(etat.clients).map(function (k) { return etat.clients[k]; })
      .filter(function (c) {
        return (c.nom + ' ' + c.entreprise).toLowerCase().indexOf(q) !== -1;
      })
      .map(function (c) { return { id: c.id, nom: c.nom, entreprise: c.entreprise }; });
    res.json({ dossiers: dossiers, clients: clients });
  });

  app.get('/api/equipe', exigerSession, function (req, res) {
    res.json({
      moi: utilisateur(req).identifiant,
      equipe: etat.equipe.map(function (u) {
        return {
          identifiant: u.identifiant, nom: u.nom, actif: u.actif,
          derniere_visite: u.derniere_visite,
        };
      }),
    });
  });

  app.post('/api/equipe', exigerSession, function (req, res) {
    var nom = String((req.body && req.body.nom) || '').trim();
    var code = String((req.body && req.body.code) || '').replace(/\D+/g, '');
    if (!nom || code.length < 4) {
      res.status(400).json({ erreur: 'Nom et code (4 chiffres min.) requis.' }); return;
    }
    var identifiant = nom.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'membre';
    etat.equipe.push({ identifiant: identifiant, nom: nom, actif: true, derniere_visite: '' });
    res.json({ nom: nom });
  });

  app.post('/api/equipe/etat', exigerSession, function (req, res) {
    var id = req.body && req.body.identifiant;
    var u = etat.equipe.filter(function (x) { return x.identifiant === id; })[0];
    if (!u) { res.status(404).json({ erreur: 'Personne introuvable.' }); return; }
    u.actif = Boolean(req.body && req.body.actif);
    res.json({ ok: true });
  });
}

function creerApp() {
  var app = express();
  app.disable('x-powered-by');
  api(app);

  var publicDir = path.join(__dirname, 'public');
  app.use(express.static(publicDir));
  app.use('/suivis', express.static(publicDir));

  function page(fichier) {
    return function (req, res) {
      res.sendFile(path.join(publicDir, fichier));
    };
  }
  app.get(['/equipe', '/suivis/equipe'], page('equipe.html'));
  app.get(['/connexion', '/suivis/connexion'], page('connexion.html'));
  app.get(['/', '/suivis', '/suivis/'], page('index.html'));

  return app;
}

if (require.main === module) {
  var app = creerApp();
  app.listen(PORT, '0.0.0.0', function () {
    console.log('Suivis démo : http://localhost:' + PORT + '/');
    console.log('Code de démo : ' + DEMO_CODE + '  (aucun courriel ne part)');
  });
}

module.exports = { creerApp: creerApp, reset: function () { etat = fixtures.etatInitial(); sessions = Object.create(null); } };
