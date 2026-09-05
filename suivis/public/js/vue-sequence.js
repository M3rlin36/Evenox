'use strict';
/* ============================================================
   ONGLET SÉQUENCE — l'écran de validation.

   Comportements validés, à ne pas défaire :
   · cases à cocher UNE PAR UNE
   · le bouton de démarrage reste désactivé tant que rien n'est coché
   · bouton « M'envoyer un test » vers evenox.ca@gmail.com
   · liste des exclus AVEC leur raison
   ============================================================ */

App.sequence = (function () {

  var donnees = null;

  function charger() {
    var corps = document.getElementById('seq-corps');
    App.chargement(corps, 'Chargement de la séquence…');

    return App.api('/api/sequence')
      .then(function (d) {
        donnees = d;
        dessiner();
        App.majBadgeSequence(d.mode);
      })
      .catch(function (err) {
        App.erreurVue(corps, err, charger);
        App.erreur(err, charger);
      });
  }

  function dessiner() {
    var corps = document.getElementById('seq-corps');
    corps.className = '';
    var d = donnees;
    var enMarche = d.mode !== 'off';

    var html = '';

    html += '<div class="pourquoi"><b>Comment ça marche, en une phrase.</b> ' +
      'Quand une soumission part et que le client ne répond pas, le système ' +
      '<b>prépare</b> les relances aux jours 2, 4, 7, 14, 21 et 30. ' +
      'Rien n\'arrive dans la boîte du client tant que tu n\'as pas coché ' +
      'les noms et lancé la phase brouillons. Un « oui », un dépôt ou le label ' +
      'Pause-Auto arrête tout pour ce dossier.</div>';

    html += '<div class="seq-etapes">' +
      [['j2', 'J+2', 'Premier suivi'], ['j4', 'J+4', 'Rappel'],
       ['j7', 'J+7', 'Appel d\'abord'], ['j14', 'J+14', 'Dernier mail'],
       ['j21', 'J+21', 'Pause'], ['j30', 'J+30', 'On arrête']].map(function (e, i) {
        return '<button class="seq-e' + (i === 2 ? ' fort' : '') + '" type="button" data-apercu-gab="' + e[0] + '">' +
          '<b>' + e[1] + '</b><i>' + e[2] + '</i></button>';
      }).join('') + '</div>';
    html += '<div class="seq-apercu" id="seq-apercu" hidden></div>';

    // ── L'avertissement de tête ──
    if (!enMarche) {
      html += '<div class="stop"><b class="t">La séquence est arrêtée. Aucun courriel ne part.</b>' +
        '<p>Rien ne s\'envoie tant que vous n\'avez pas validé la liste ci-dessous <b>une par une</b>. ' +
        'Et même après validation, la <b>phase 1 ne produit que des brouillons</b> pendant 2 semaines — ' +
        'vous les relisez dans Gmail avant qu\'ils partent. L\'envoi automatique ne s\'active ' +
        'qu\'ensuite, et seulement si vous jugez les brouillons bons.</p></div>';
    } else if (d.mode === 'brouillons') {
      html += '<div class="stop"><b class="t">Phase 1 — brouillons seulement.</b>' +
        '<p>Les relances sont préparées dans Gmail mais <b>ne partent pas toutes seules</b>. ' +
        'Relisez-les. L\'envoi automatique ne s\'active qu\'après votre jugement.</p></div>';
    } else {
      html += '<div class="alerte"><b class="t">Envoi automatique actif</b>' +
        '<p>Les relances partent seules, dans les garde-fous ci-dessous. ' +
        'Le bouton <b>Tout arrêter</b> coupe tout immédiatement.</p></div>';
    }

    // ── Destinataires à valider ──
    html += '<div class="vh"><h3>Destinataires à valider</h3>' +
      '<span class="cpt" id="v-cpt">0 sur ' + d.candidats.length + ' cochés</span>' +
      (d.candidats.length ? '<button class="tout" type="button" id="v-tout">Tout cocher</button>' : '') +
      '</div>';

    if (!d.candidats.length) {
      html += '<div class="vide"><b>Aucun dossier n\'est envoyable en ce moment.</b>' +
        'Tous les dossiers ouverts sont exclus pour une des raisons listées plus bas.</div>';
    } else {
      html += '<div id="v-liste">' + d.candidats.map(candidat).join('') + '</div>';
    }

    // ── Exclus automatiquement ──
    html += '<div class="vh"><h3>Exclus automatiquement</h3>' +
      '<span class="cpt">' + d.nb_exclus + ' dossier' + (d.nb_exclus > 1 ? 's' : '') +
      ' — aucun courriel ne leur sera envoyé</span></div>';

    if (!d.exclus.length) {
      html += '<div class="vide">Aucune exclusion.</div>';
    } else {
      html += d.exclus.map(function (e) {
        return '<div class="ex"><div class="n">' + App.h(e.nom) +
          (e.detail && e.detail !== e.raison ? '<i>' + App.h(e.detail) + '</i>' : '') + '</div>' +
          '<div class="r' + (e.bonne_nouvelle ? ' g' : '') + '">' + App.h(e.raison) + '</div></div>';
      }).join('');
    }

    // ── Le lancement ──
    html += '<div class="lance">' +
      '<div class="x"><b>Avant de démarrer :</b> ouvrez chaque nom pour relire le dossier exact. ' +
      'Un envoi à la mauvaise personne coûte plus cher qu\'une semaine de retard.</div>' +
      '<button class="btn" type="button" id="btn-test">M\'envoyer un test</button>' +
      (enMarche
        ? '<button class="btn danger lg" type="button" id="btn-arret">Tout arrêter</button>'
        : '') +
      '<button class="btn p lg" type="button" id="btn-lance" disabled>Démarrer en brouillons</button>' +
      '</div>';

    // ── Les garde-fous permanents ──
    html += '<div class="note"><b>Garde-fous permanents</b>, actifs même après le démarrage :<br>' +
      '· Une réponse du client arrête sa séquence immédiatement<br>' +
      '· Un dépôt encaissé sort le dossier de la séquence<br>' +
      '· Label Gmail <b>Pause-Auto</b> sur un fil = l\'automatisation n\'y touche plus jamais<br>' +
      '· Maximum <b>' + d.garde_fous.max_par_jour + ' envois par jour</b>, au-delà tout passe en brouillon<br>' +
      '· Aucun envoi la fin de semaine ni en dehors de 8 h-18 h<br>' +
      '· Au-dessus de <b>' + App.argentBrut(d.garde_fous.seuil_approbation) + '</b>, la relance attend votre approbation<br>' +
      '· Lien de désabonnement obligatoire sur chaque courriel (LCAP)<br>' +
      '· Le test part à <b>' + App.h(d.compte_test || 'votre boîte') + '</b> — aucun client touché</div>';

    if (d.courriels && d.courriels.length) {
      html += '<div class="vh"><h3>Courriels préparés</h3>' +
        '<span class="cpt">' + d.courriels.length + ' dans cette session</span></div>';
      html += '<div class="seq-mails">' + d.courriels.map(function (c) {
        return '<div class="seq-mail" data-lire-mail="' + App.h(c.id) + '">' +
          '<b>' + App.h(c.etape) + ' · ' + App.h(c.nom || '') + '</b>' +
          '<i>' + App.h(c.mode === 'envoi' ? 'Envoyé à ' + c.destinataire : 'Brouillon — ' + (c.destinataire_prevu || c.destinataire)) +
          ' · ' + App.h(c.sujet) + '</i></div>';
      }).join('') + '</div>';
    }

    corps.innerHTML = html;
    majCompte();
  }

  function montrerApercu(titre, sujet, texte, meta) {
    var box = document.getElementById('seq-apercu');
    if (!box) return;
    box.hidden = false;
    box.innerHTML = '<div class="seq-ap-k">' + App.h(titre || 'Aperçu') +
      (meta ? ' <span>' + App.h(meta) + '</span>' : '') + '</div>' +
      '<div class="seq-ap-s">' + App.h(sujet || '') + '</div>' +
      '<pre>' + App.h(texte || '') + '</pre>';
    box.scrollIntoView({ block: 'nearest' });
  }

  function candidat(c) {
    return '<label class="vr off" data-vr="' + App.h(c.id) + '">' +
      '<input type="checkbox" data-cocher="' + App.h(c.id) + '">' +
      '<span class="n">' + App.h(c.nom) +
        '<i>' + App.h(c.contexte) + ' · ' + App.h(c.courriel) + '</i></span>' +
      '<span class="e">' + App.h(c.gabarit_etape || c.relance_courte) +
        '<i>' + App.h(c.gabarit_titre || '') +
        (c.montant ? ' · ' + App.h(App.argent(c.montant)) : '') +
        (c.appel_dabord ? ' · appel d\'abord' : '') +
        (c.approbation_requise && !c.appel_dabord ? ' · à approuver' : '') +
        '</i></span></label>';
  }

  function majCompte() {
    var boites = document.querySelectorAll('[data-cocher]');
    var n = 0;
    boites.forEach(function (cb) { if (cb.checked) n++; });

    var cpt = document.getElementById('v-cpt');
    if (cpt) cpt.textContent = n + ' sur ' + boites.length + ' cochés';

    var btn = document.getElementById('btn-lance');
    if (btn) btn.disabled = (n === 0);
  }

  function idsCoches() {
    var ids = [];
    document.querySelectorAll('[data-cocher]').forEach(function (cb) {
      if (cb.checked) ids.push(cb.dataset.cocher);
    });
    return ids;
  }

  function brancher() {
    var zone = document.getElementById('seq');

    zone.addEventListener('change', function (e) {
      var cb = e.target.closest('[data-cocher]');
      if (!cb) return;
      var ligne = zone.querySelector('[data-vr="' + CSS.escape(cb.dataset.cocher) + '"]');
      if (ligne) ligne.classList.toggle('off', !cb.checked);
      majCompte();
    });

    zone.addEventListener('click', function (e) {
      var cible;

      cible = e.target.closest('#v-tout');
      if (cible) {
        var boites = document.querySelectorAll('[data-cocher]');
        var cocher = idsCoches().length < boites.length;
        boites.forEach(function (cb) {
          cb.checked = cocher;
          var l = zone.querySelector('[data-vr="' + CSS.escape(cb.dataset.cocher) + '"]');
          if (l) l.classList.toggle('off', !cocher);
        });
        majCompte();
        return;
      }

      cible = e.target.closest('[data-apercu-gab]');
      if (cible) {
        var gid = cible.dataset.apercuGab;
        var ids = idsCoches();
        var dossier = ids[0] || (donnees.candidats[0] && donnees.candidats[0].id) || '';
        App.api('/api/gabarits/' + encodeURIComponent(gid) + '/apercu' +
          (dossier ? '?dossier=' + encodeURIComponent(dossier) : ''))
          .then(function (r) {
            montrerApercu(r.courriel.etape + ' — ' + r.courriel.titre, r.courriel.sujet,
              r.courriel.texte, r.dossier.nom + ' · destinataire prévu ' + r.dossier.courriel);
          })
          .catch(function (err) { App.erreur(err); App.toast('Aperçu indisponible'); });
        return;
      }

      cible = e.target.closest('[data-lire-mail]');
      if (cible) {
        var mail = (donnees.courriels || []).filter(function (c) {
          return c.id === cible.dataset.lireMail;
        })[0];
        if (mail) {
          montrerApercu(mail.etape + ' — ' + mail.nom, mail.sujet, mail.texte,
            mail.mode === 'envoi' ? 'Envoyé à ' + mail.destinataire : 'Brouillon');
        }
        return;
      }

      cible = e.target.closest('#btn-test');
      if (cible) {
        cible.disabled = true;
        cible.textContent = 'Envoi du test…';
        App.api('/api/sequence/test', { methode: 'POST', corps: { ids: idsCoches() } })
          .then(function (r) {
            App.toast(r.message);
            return charger().then(function () {
              if (r.courriel) {
                montrerApercu('Test envoyé — ' + r.courriel.etape, r.courriel.sujet,
                  r.courriel.texte, 'à ' + r.courriel.destinataire);
              }
            });
          })
          .catch(function (err) { App.erreur(err); App.toast('Test non envoyé — ' + err.message); });
        return;
      }

      cible = e.target.closest('#btn-lance');
      if (cible) { demarrer(cible); return; }

      cible = e.target.closest('#btn-arret');
      if (cible) {
        App.confirmer(
          'Tout arrêter ?',
          'Toutes les séquences en cours s\'arrêtent immédiatement et ' +
          'l\'écran repasse à <b>Off</b>. Aucun courriel ne partira plus.',
          function () {
            App.api('/api/sequence/arreter', { methode: 'POST' })
              .then(function (r) { App.toast(r.message); charger(); App.rafraichirEtat(); })
              .catch(function (err) { App.erreur(err); });
          }
        );
        return;
      }
    });
  }

  function demarrer(bouton) {
    var ids = idsCoches();
    if (!ids.length) return;

    App.confirmer(
      'Démarrer en brouillons ?',
      '<b>' + ids.length + ' dossier' + (ids.length > 1 ? 's' : '') + '</b> ' +
      (ids.length > 1 ? 'entrent' : 'entre') + ' en phase 1.<br><br>' +
      'Les relances seront préparées comme <b>brouillons dans Gmail</b> et ' +
      '<b>ne partiront pas toutes seules</b>. Vous les relisez avant tout envoi.',
      function () {
        bouton.disabled = true;
        bouton.textContent = 'Démarrage…';
        App.api('/api/sequence/demarrer', { methode: 'POST', corps: { ids: ids } })
          .then(function (r) {
            App.toast(r.message);
            if (r.refuses && r.refuses.length) {
              App.montrerBandeau(
                r.refuses.length + ' dossier(s) refusé(s) par les garde-fous : ' +
                r.refuses.map(function (x) { return x.nom + ' (' + x.raison + ')'; }).join(', ')
              );
            }
            charger();
            App.rafraichirEtat();
          })
          .catch(function (err) {
            bouton.disabled = false;
            bouton.textContent = 'Démarrer en brouillons';
            App.erreur(err);
            App.toast('Rien n\'est parti — ' + err.message);
          });
      }
    );
  }

  return { charger: charger, brancher: brancher };
})();
