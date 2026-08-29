(function (global) {
  'use strict';
  /*
    Module d'envoi des leads (vanilla, inlinable par scripts/build.js).
    DÉCISION §6 — destination des leads (Mailchimp / CRM / courriel) :
    ne pas coder en dur. Brancher via window.evx_ajax ou EVX_WEBHOOK_URL.
    File localStorage si le réseau lâche ; retry au chargement.
    mailto: en dernier recours seulement (stockage impossible, ou 3 échecs).
    Payloads de test : marqueur TEST si window.evx_test.
  */
  var EVX_WEBHOOK_URL = '';
  var CLE_FILE = 'evx_file_leads';
  var MAX_TENTATIVES = 3;

  function urlWebhook() {
    if (global.evx_ajax) return global.evx_ajax;
    if (EVX_WEBHOOK_URL) return EVX_WEBHOOK_URL;
    return '/wp-admin/admin-ajax.php';
  }

  function lireFile() {
    try {
      var brut = global.localStorage.getItem(CLE_FILE);
      if (!brut) return [];
      var arr = JSON.parse(brut);
      if (Object.prototype.toString.call(arr) !== '[object Array]') return [];
      return arr;
    } catch (e) {
      return [];
    }
  }

  function ecrireFile(arr) {
    try {
      global.localStorage.setItem(CLE_FILE, JSON.stringify(arr));
      return true;
    } catch (e) {
      return false;
    }
  }

  function hashLead(champs) {
    return JSON.stringify([
      champs.nom_complet,
      champs.email,
      champs.telephone,
      champs.date_event,
      champs.details,
      champs.service
    ]);
  }

  function versFormData(champs) {
    var fd = new FormData();
    fd.append('action', champs.action || 'evx_soumission');
    fd.append('evx_nonce', champs.evx_nonce || global.evx_nonce || '');
    fd.append('nom_complet', champs.nom_complet || '');
    fd.append('email', champs.email || '');
    fd.append('telephone', champs.telephone || '');
    fd.append('date_event', champs.date_event || '');
    fd.append('details', champs.details || '');
    fd.append('service', champs.service || '');
    fd.append('page_url', champs.page_url || '');
    fd.append('referrer', champs.referrer || 'direct');
    fd.append('device', champs.device || '');
    fd.append('timestamp', champs.timestamp || new Date().toISOString());
    if (global.evx_test) {
      fd.append('marqueur', 'TEST');
      fd.append('test', 'TEST');
      fd.append('evx_test', 'TEST');
    }
    return fd;
  }

  function poster(champs) {
    return fetch(urlWebhook(), {
      method: 'POST',
      body: versFormData(champs),
      credentials: 'same-origin'
    }).then(function (r) {
      return r.json();
    }).then(function (d) {
      if (d) {
        if (d.success) return true;
      }
      throw new Error('refus');
    });
  }

  function mailtoRepli(champs) {
    var sep = String.fromCharCode(38);
    var sujet = encodeURIComponent('[Evenox] Soumission (repli)');
    var corps = encodeURIComponent(champs.details || '');
    var href = 'mailto:evenox.ca@gmail.com?subject=' + sujet + sep + 'body=' + corps;
    try {
      if (global.location) global.location.href = href;
    } catch (e) {}
  }

  function retirer(hash) {
    var reste = lireFile().filter(function (it) {
      return it.hash !== hash;
    });
    ecrireFile(reste);
  }

  function enqueue(hash, champs) {
    var file = lireFile();
    var i;
    for (i = 0; i < file.length; i++) {
      if (file[i].hash === hash) return file;
    }
    file.push({
      hash: hash,
      champs: champs,
      tentatives: 0,
      mailtoFait: false,
      cree: new Date().toISOString()
    });
    if (!ecrireFile(file)) return null;
    return file;
  }

  function envoyer(opts) {
    opts = opts || {};
    var champs = opts.lead || opts;
    var hash = opts.hash || champs.hash || hashLead(champs);
    if (global.evx_test) champs.marqueur = 'TEST';
    poster(champs)
      .then(function () {
        retirer(hash);
        if (opts.onOk) opts.onOk();
      })
      .catch(function () {
        var file = enqueue(hash, champs);
        if (!file) {
          mailtoRepli(champs);
          if (opts.onEchec) opts.onEchec({ mailto: true });
          return;
        }
        if (opts.onEchec) opts.onEchec({ file: true });
      });
  }

  function rejouer() {
    var file = lireFile();
    if (!file.length) return;
    file.forEach(function (it) {
      var champs = it.champs || it.lead || {};
      if (it.tentatives >= MAX_TENTATIVES) {
        if (!it.mailtoFait) {
          it.mailtoFait = true;
          ecrireFile(file);
          mailtoRepli(champs);
        }
        return;
      }
      it.tentatives += 1;
      ecrireFile(file);
      poster(champs)
        .then(function () {
          retirer(it.hash);
        })
        .catch(function () {});
    });
  }

  if (global.document) {
    if (global.document.readyState === 'loading') {
      global.document.addEventListener('DOMContentLoaded', rejouer);
    } else {
      rejouer();
    }
  }

  var api = {
    envoyer: envoyer,
    rejouer: rejouer,
    hashLead: hashLead,
    lireFile: lireFile,
    CLE_FILE: CLE_FILE
  };
  global.EvxEnvoi = api;
  global.evxEnvoi = api;
})(typeof window !== 'undefined' ? window : this);
