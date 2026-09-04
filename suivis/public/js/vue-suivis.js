'use strict';
/* ============================================================
   ONGLET SUIVIS — la liste priorisée du matin.

   Comportements validés, à ne pas défaire :
   · barre de progression « 3/8 »
   · écran « Terminé pour aujourd'hui » quand la liste est vide
   · Reporter propose Demain / 3 jours / Lundi, jamais un calendrier
   · 5 secondes pour annuler après chaque geste
   · bouton Note par dossier, mauve quand la note est remplie
   ============================================================ */

App.suivis = (function () {

  var donnees = null;
  var progression = { traites: 0, total: 0 };
  var section = 'soumission';

  var CORPS = {
    soumission: 'jour-corps',
    an: 'an-corps',
    prospection: 'prosp-corps',
  };

  var LIBELLES = {
    repondre: 'Répondre',
    approuver: 'Approuver',
    contrat: 'Envoyer le contrat',
    appel: 'Appeler',
    devis: 'Envoyer la soumission',
    montage: 'Envoyer le montage',
    fait: 'Fait',
  };

  /* ── Chargement ─────────────────────────────────────────── */
  function charger() { return chargerSection('soumission'); }

  function chargerSection(sec) {
    section = sec || 'soumission';
    var corps = document.getElementById(CORPS[section] || 'jour-corps');
    if (!donnees) App.chargement(corps, 'Chargement…');

    return App.api('/api/suivis')
      .then(function (d) {
        donnees = d;
        if (section === 'soumission') progression = d.progression || { traites: 0, total: 0 };
        dessiner();
        App.majCompteurs(d);
      })
      .catch(function (err) {
        App.erreurVue(corps, err, function () { chargerSection(section); });
        App.erreur(err, function () { chargerSection(section); });
      });
  }

  function soumissions() {
    var liste = donnees.liste || [];
    return liste.filter(function (x) {
      return (x.section || 'soumission') === 'soumission';
    });
  }

  function prospection() {
    if (donnees.prospection && donnees.prospection.length) return donnees.prospection;
    return (donnees.liste || []).filter(function (x) { return x.section === 'prospection'; });
  }

  function postEvenement() {
    if (donnees.post_evenement && donnees.post_evenement.length) return donnees.post_evenement;
    return (donnees.liste || []).filter(function (x) { return x.section === 'an'; });
  }

  /* ── Dessin ─────────────────────────────────────────────── */
  function dessiner() {
    if (section === 'an') { dessinerAn(); return; }
    if (section === 'prospection') { dessinerProsp(); return; }
    dessinerSoumissions();
  }

  function dessinerSoumissions() {
    var corps = document.getElementById('jour-corps');
    corps.className = '';
    var liste = soumissions();
    var html = '';

    html += '<div class="pourquoi"><b>File 1 — soumissions en cours.</b> ' +
      'Le client a déjà un prix, ou il en attend un. C\'est le travail du matin : ' +
      'appeler, relancer, envoyer le contrat. L\'an passé et la prospection sont à part.</div>';

    if (donnees.alertes_booqable && donnees.alertes_booqable.length) {
      html += blocAlerte(donnees.alertes_booqable);
    }

    html += '<div id="liste">' + (liste.length ? liste.map(ligne).join('') : '') + '</div>';

    html +=
      '<div class="fini' + (liste.length === 0 ? ' on' : '') + '" id="fini">' +
      '<h3>Terminé pour aujourd\'hui</h3><p id="fini-txt">' + texteFini() + '</p></div>';

    html +=
      '<div class="note">Les relances automatiques (J+2 à J+30) préparent des <b>brouillons</b> — ' +
      'elles n\'écrivent pas au client toutes seules. Un dépôt sort le dossier d\'ici.</div>';

    corps.innerHTML = html;
    majProgression();
  }

  function dessinerAn() {
    var corps = document.getElementById('an-corps');
    corps.className = '';
    var html = '<div class="pourquoi"><b>File 2 — l\'an passé.</b> ' +
      'Ceux qui ont loué l\'an dernier, au moment où <b>eux</b> réservent d\'habitude, ' +
      'plus le merci J+7 après un événement. Pas de soumission en cours ici.</div>';

    var post = postEvenement();
    if (post.length) {
      html += '<div class="vh"><h3>Après l\'événement — J+7</h3></div>';
      html += post.map(ligne).join('');
    }

    var annuelles = donnees.relances_annuelles || [];
    if (annuelles.length) html += blocAnDernier(annuelles);
    if (!post.length && !annuelles.length) {
      html += '<div class="vide"><b>Personne à réveiller aujourd\'hui.</b>' +
        'Les contrats de l\'an dernier apparaissent ici selon le délai de chaque client.</div>';
    }
    corps.innerHTML = html;
  }

  function dessinerProsp() {
    var corps = document.getElementById('prosp-corps');
    corps.className = '';
    var liste = prospection();
    var html = '<div class="pourquoi"><b>File 3 — prospection.</b> ' +
      'Premier contact, pas encore de soumission. On qualifie : date, lieu, budget. ' +
      'Dès qu\'un prix part, le dossier bascule dans Soumissions.</div>';
    if (!liste.length) {
      html += '<div class="vide"><b>Aucun prospect en attente.</b>' +
        'Un nouveau nom sans soumission atterrit ici.</div>';
    } else {
      html += liste.map(ligne).join('');
    }
    corps.innerHTML = html;
  }

  function blocAlerte(alertes) {
    var noms = alertes.slice(0, 4).map(function (a) {
      return '<b>' + App.h(a.client) + '</b>' + (a.booqable_number ? ' (' + App.h(a.booqable_number) + ')' : '');
    }).join(', ');

    return '<div class="alerte">' +
      '<b class="t">À corriger dans Booqable — pas un suivi client</b>' +
      '<p>' + alertes.length + ' dossier' + (alertes.length > 1 ? 's' : '') + ' <b>payé' +
      (alertes.length > 1 ? 's' : '') + '</b> dont la commande est restée en <b>brouillon</b> : ' +
      'l\'inventaire n\'est pas bloqué et la date peut être vendue deux fois. ' + noms +
      (alertes.length > 4 ? ' et ' + (alertes.length - 4) + ' autre' + (alertes.length - 4 > 1 ? 's' : '') : '') + '.</p>' +
      '<div class="row-a" style="justify-content:flex-start;margin-top:11px">' +
      alertes.slice(0, 4).map(function (a) {
        return '<button class="btn sm" type="button" data-reserver="' + App.h(a.id) + '" ' +
          'data-nom="' + App.h(a.client) + '" data-num="' + App.h(a.booqable_number || '') + '">' +
          'Passer ' + App.h(a.booqable_number || a.client) + ' en réservée</button>';
      }).join('') +
      '</div></div>';
  }

  function ligne(d) {
    var gestes = d.ui_gestes.map(function (g, i) {
      return '<button class="btn' + (i === 0 ? ' p' : '') + '" type="button" ' +
        'data-geste="' + App.h(g) + '" data-id="' + App.h(d.id) + '">' +
        App.h(LIBELLES[g] || g) + '</button>';
    }).join('');

    var reporter =
      '<button class="btn" type="button" data-reporter-ouvrir="' + App.h(d.id) + '">Reporter</button>' +
      '<div class="snooze" data-snooze="' + App.h(d.id) + '">' +
      '<button class="btn sm" type="button" data-reporter="demain" data-id="' + App.h(d.id) + '">Demain</button>' +
      '<button class="btn sm" type="button" data-reporter="3jours" data-id="' + App.h(d.id) + '">3 jours</button>' +
      '<button class="btn sm" type="button" data-reporter="lundi" data-id="' + App.h(d.id) + '">Lundi</button>' +
      '</div>';

    var aNote = Boolean(d.notes && d.notes.trim());

    return '<div class="row ' + App.h(d.ui_bordure) + '" data-ligne="' + App.h(d.id) + '">' +
      '<div class="row-main" data-fiche="' + App.h(d.id) + '">' +
        '<div class="row-t">' +
          '<span class="nom">' + App.h(d.client) + '</span>' +
          (d.entreprise ? '<span class="org">' + App.h(d.entreprise) + '</span>' : '') +
          '<span class="mnt">' + App.h(App.argent(d.montant, true)) + '</span>' +
          '<span class="tag ' + App.h(d.ui_tag.c) + '">' + App.h(d.ui_tag.t) + '</span>' +
        '</div>' +
        '<div class="row-n">' + d.ui_pourquoi + '</div>' +
        '<div class="row-s">' + App.h(d.ui_sous_titre) + '</div>' +
      '</div>' +
      '<div class="row-a">' + gestes + reporter +
        '<button class="btn btn-note' + (aNote ? ' plein' : '') + '" type="button" ' +
          'data-note="' + App.h(d.id) + '">Note</button>' +
        '<button class="btn" type="button" data-perdu="' + App.h(d.id) + '">Classer</button>' +
      '</div>' +
      '<div class="nz"><div class="nz-h"><b>Ma note</b><span>enregistrée automatiquement</span></div>' +
      '<textarea class="nz-ta" data-note-ta="' + App.h(d.id) + '" ' +
      'placeholder="Ce qu\'il faut retenir sur ce dossier…">' + App.h(d.notes || '') + '</textarea></div>' +
      '</div>';
  }

  function blocAnDernier(liste) {
    return '<div class="an" id="an-bloc">' +
      '<h3>Contrats de l\'an dernier à réveiller</h3>' +
      '<p>Relancés avec le <b>même préavis que l\'an passé pour ce client-là</b> — ' +
      'un party corpo se décide 4 mois d\'avance, une fête d\'enfant 3 semaines.</p>' +
      liste.map(function (r) {
        var detail = [
          r.entreprise || '',
          r.date_an_dernier ? App.dateCourte(r.date_an_dernier) : '',
          r.delai_reservation_j ? 'préavis de ' + r.delai_reservation_j + ' jours' : 'préavis inconnu',
        ].filter(Boolean).join(' · ');
        return '<div class="an-r" data-an="' + App.h(r.client_id) + '">' +
          '<div class="n">' + App.h(r.client) + '<i>' + App.h(detail) + '</i></div>' +
          '<div class="v">' + App.h(App.argent(r.montant_an_dernier)) + '</div>' +
          '<button class="btn p" type="button" data-reveiller="' + App.h(r.client_id) + '" ' +
          'data-nom="' + App.h(r.client) + '">Reprendre</button></div>';
      }).join('') +
      '</div>';
  }

  /* ── Progression ────────────────────────────────────────── */

  /** Le texte de l'écran de fin, recalculé à chaque geste : il doit dire
   *  le vrai nombre traité, pas celui du chargement de la page. */
  function texteFini() {
    var n = progression.traites;
    return (n > 0
      ? 'Les ' + n + ' dossier' + (n > 1 ? 's sont traités' : ' est traité') + '. '
      : 'Aucun suivi en attente. ') +
      (donnees.compteurs.en_sequence
        ? 'Les ' + donnees.compteurs.en_sequence + ' autres roulent en séquence automatique.<br>'
        : '<br>') +
      'Prochaine liste demain matin à 7 h.';
  }

  function majProgression() {
    var pf = document.getElementById('pf');
    var pt = document.getElementById('pt');
    if (!pf || !pt) return;
    var total = progression.total || 0;
    var pct = total ? (progression.traites / total) * 100 : 0;
    pf.style.width = pct + '%';
    pt.textContent = progression.traites + '/' + total;

    var fini = document.getElementById('fini');
    var liste = document.getElementById('liste');
    if (fini && liste) {
      var reste = liste.querySelectorAll('.row:not(.done)').length;
      fini.classList.toggle('on', reste === 0);
      var txt = document.getElementById('fini-txt');
      if (txt) txt.innerHTML = texteFini();
    }
  }

  /* ── Gestes ─────────────────────────────────────────────── */

  /** Fait disparaître la ligne, puis appelle le serveur. Si le serveur
   *  refuse, la ligne revient : on ne ment jamais sur ce qui est fait. */
  function traiter(id, appel, texteAttendu) {
    var ligneEl = document.querySelector('[data-ligne="' + CSS.escape(id) + '"]');
    if (!ligneEl || ligneEl.classList.contains('done')) return;

    ligneEl.classList.add('done');
    progression.traites += 1;
    majProgression();

    appel()
      .then(function (r) {
        App.toast(r.message || texteAttendu, r.annulation_id
          ? function () { annuler(r.annulation_id, ligneEl); }
          : null);
        App.rafraichirEtat();
      })
      .catch(function (err) {
        ligneEl.classList.remove('done');
        progression.traites -= 1;
        majProgression();
        App.erreur(err);
        App.toast('Rien n\'a été enregistré — ' + err.message);
      });
  }

  function annuler(annulationId, ligneEl) {
    App.annulerAction(annulationId, function () {
      if (ligneEl) ligneEl.classList.remove('done');
      progression.traites = Math.max(0, progression.traites - 1);
      majProgression();
      App.rafraichirEtat();
    });
  }

  /* ── Branchements (délégation : aucun onclick dans le HTML) ── */
  function brancher() {
    ['jour', 'an', 'prosp'].forEach(function (id) {
      var zone = document.getElementById(id);
      if (zone) zone.addEventListener('click', onClic);
    });

    var enregistrer = App.attendre(function (id, valeur, bouton) {
      App.api('/api/dossier/' + encodeURIComponent(id) + '/note', {
        methode: 'PUT', corps: { note: valeur },
      })
        .then(function (r) { bouton.classList.toggle('plein', r.rempli); })
        .catch(function (err) {
          App.erreur(err);
          App.toast('Note non enregistrée — ' + err.message);
        });
    }, 800);

    document.getElementById('scroll').addEventListener('input', function (e) {
      var ta = e.target.closest('[data-note-ta]');
      if (!ta) return;
      var bouton = ta.closest('.row').querySelector('.btn-note');
      bouton.classList.toggle('plein', ta.value.trim() !== '');
      enregistrer(ta.dataset.noteTa, ta.value, bouton);
    });
  }

  function onClic(e) {
    var zone = e.currentTarget;
    var cible;

      // Ouvrir la fiche
      cible = e.target.closest('[data-fiche]');
      if (cible) { App.fiche.ouvrir(cible.dataset.fiche); return; }

      // Un geste
      cible = e.target.closest('[data-geste]');
      if (cible) {
        var id = cible.dataset.id, geste = cible.dataset.geste;
        traiter(id, function () {
          return App.api('/api/dossier/' + encodeURIComponent(id) + '/geste', {
            methode: 'POST', corps: { geste: geste },
          });
        }, 'Traité');
        return;
      }

      // Reporter : on ouvre les trois délais, jamais un calendrier
      cible = e.target.closest('[data-reporter-ouvrir]');
      if (cible) {
        var boite = zone.querySelector('[data-snooze="' + CSS.escape(cible.dataset.reporterOuvrir) + '"]');
        boite.classList.toggle('open');
        cible.style.display = boite.classList.contains('open') ? 'none' : '';
        return;
      }

      cible = e.target.closest('[data-reporter]');
      if (cible) {
        var idR = cible.dataset.id, delai = cible.dataset.reporter;
        traiter(idR, function () {
          return App.api('/api/dossier/' + encodeURIComponent(idR) + '/reporter', {
            methode: 'POST', corps: { delai: delai },
          });
        }, 'Reporté');
        return;
      }

      // Note
      cible = e.target.closest('[data-note]');
      if (cible) {
        var ligneN = cible.closest('.row');
        var nz = ligneN.querySelector('.nz');
        nz.classList.toggle('on');
        if (nz.classList.contains('on')) nz.querySelector('.nz-ta').focus();
        return;
      }

      // Plus intéressé → la fenêtre des 7 motifs
      cible = e.target.closest('[data-perdu]');
      if (cible) { App.ouvrirMotifs(cible.dataset.perdu, onFerme); return; }

      // Reprendre un contrat de l'an dernier
      cible = e.target.closest('[data-reveiller]');
      if (cible) { reveiller(cible); return; }

      // Le reste de la ligne annuelle ouvre la fiche client
      // (ce qu'il avait pris, toutes les interactions).
      cible = e.target.closest('[data-an]');
      if (cible) { App.client.ouvrir(cible.dataset.an); return; }

      // Passer une commande payée en réservée — confirmation obligatoire
      cible = e.target.closest('[data-reserver]');
      if (cible) { reserver(cible); return; }
  }

  function onFerme(id, motif) {
    traiter(id, function () {
      return App.api('/api/dossier/' + encodeURIComponent(id) + '/fermer', {
        methode: 'POST', corps: { motif: motif },
      });
    }, 'Dossier fermé');
  }

  function reveiller(bouton) {
    var clientId = bouton.dataset.reveiller, nom = bouton.dataset.nom;
    var ligneEl = bouton.closest('.an-r');
    bouton.disabled = true;
    bouton.textContent = 'Un instant…';

    App.api('/api/suivis/reveiller/' + encodeURIComponent(clientId), { methode: 'POST' })
      .then(function (r) {
        ligneEl.style.transition = 'all .28s ease';
        ligneEl.style.opacity = '0';
        ligneEl.style.maxHeight = '0';
        ligneEl.style.padding = '0';
        setTimeout(function () {
          ligneEl.style.display = 'none';
          var bloc = document.getElementById('an-bloc');
          if (bloc && !bloc.querySelector('.an-r:not([style*="display: none"])')) {
            bloc.style.display = 'none';
          }
        }, 280);
        App.toast(r.message || nom + ' — soumission reprise en brouillon');
      })
      .catch(function (err) {
        bouton.disabled = false;
        bouton.textContent = 'Reprendre';
        App.erreur(err);
        App.toast('Rien n\'a été repris — ' + err.message);
      });
  }

  /** Le SEUL geste qui demande confirmation AVANT : la transition
   *  envoie un courriel au client et bloque l'inventaire. */
  function reserver(bouton) {
    var id = bouton.dataset.reserver;
    var nom = bouton.dataset.nom;
    var num = bouton.dataset.num;

    App.confirmer(
      'Passer la commande en réservée ?',
      'Cette action <b>envoie un courriel automatique au client</b> et ' +
      '<b>bloque l\'inventaire</b> pour la date. Elle peut révéler un conflit ' +
      'de disponibilité.<br><br>Dossier : <b>' + App.h(nom) + '</b>' +
      (num ? ' · commande ' + App.h(num) : ''),
      function () {
        bouton.disabled = true;
        App.api('/api/dossier/' + encodeURIComponent(id) + '/reserver', {
          methode: 'POST', corps: { confirme: true },
        })
          .then(function (r) {
            App.toast(r.message);
            charger();
            App.rafraichirEtat();
          })
          .catch(function (err) {
            bouton.disabled = false;
            App.erreur(err);
            App.toast('Commande inchangée — ' + err.message);
          });
      }
    );
  }

  return { charger: charger, chargerSection: chargerSection, brancher: brancher, onFerme: onFerme };
})();
