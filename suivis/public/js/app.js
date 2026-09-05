'use strict';
/* ============================================================
   DÉMARRAGE ET NAVIGATION.

   Coquille d'application : rail à gauche, barre d'outils compacte,
   contenu dense. Sur cellulaire le rail devient une barre d'onglets
   en bas — c'est la CSS qui s'en charge, pas ce fichier.
   ============================================================ */

(function () {

  var TITRES = {
    jour: ['Soumissions <em>en cours</em>', true],
    an: ['An passé <em>— à réveiller</em>', false],
    prosp: ['Prospection <em>— premier contact</em>', false],
    cal: ['Cette semaine', false],
    fait: ['Fait <em>aujourd\'hui</em>', false],
    seq: ['Relances <em>automatiques</em>', false],
    pipe: ['À faire <em>avancer</em>', false],
    clos: ['Closing', false],
    base: ['Clients', false],
  };

  var VUES = {
    jour: App.suivis,
    an: { charger: function () { return App.suivis.chargerSection('an'); } },
    prosp: { charger: function () { return App.suivis.chargerSection('prospection'); } },
    cal: App.calendrier,
    fait: App.journal,
    seq: App.sequence,
    pipe: App.pipeline,
    clos: App.closing,
    base: App.clients,
  };

  var chargees = {};

  /* ── Navigation ─────────────────────────────────────────── */
  function aller(vue) {
    App.etat.vue = vue;

    document.querySelectorAll('.nav-i').forEach(function (b) {
      b.classList.toggle('on', b.dataset.vue === vue);
    });
    document.querySelectorAll('.view').forEach(function (v) {
      v.classList.toggle('on', v.id === vue);
    });

    document.getElementById('t-titre').innerHTML = TITRES[vue][0];
    var surJour = TITRES[vue][1];
    document.getElementById('t-stats').style.display = surJour ? 'flex' : 'none';
    document.querySelector('.prog-mini').style.display = surJour ? 'flex' : 'none';
    document.getElementById('scroll').scrollTop = 0;

    // Les onglets se chargent au premier affichage, puis se rafraîchissent
    // à la demande : on ne recharge pas la base clients à chaque clic.
    if (!chargees[vue]) {
      chargees[vue] = true;
      VUES[vue].charger();
    }
  }

  App.rechargerVueCourante = function () {
    var vue = App.etat.vue;
    if (VUES[vue]) VUES[vue].charger();
  };

  /* ── Compteurs du rail et de la barre du haut ───────────── */
  App.majCompteurs = function (d) {
    var c = d.compteurs || {};
    document.getElementById('n-jour').textContent = c.n_soumissions != null ? c.n_soumissions : c.total_file;
    var nAn = document.getElementById('n-an');
    if (nAn) nAn.textContent = c.n_an_passe != null ? c.n_an_passe : '—';
    var nP = document.getElementById('n-prosp');
    if (nP) nP.textContent = c.n_prospection != null ? c.n_prospection : '—';

    var stats = [];
    stats.push('<span class="ts"><b>' + App.h(App.argentBrut(d.compteurs.en_jeu)) + '</b> en jeu</span>');
    if (d.compteurs.attendent) {
      stats.push('<span class="ts"><b class="r">' + d.compteurs.attendent + '</b> client' +
        (d.compteurs.attendent > 1 ? 's attendent' : ' attend') + '</span>');
    }
    if (d.compteurs.evenements_48h) {
      stats.push('<span class="ts"><b class="r">' + d.compteurs.evenements_48h + '</b> événement' +
        (d.compteurs.evenements_48h > 1 ? 's' : '') + ' dans 48 h</span>');
    }
    if (d.compteurs.a_approuver) {
      stats.push('<span class="ts"><b>' + d.compteurs.a_approuver + '</b> à approuver</span>');
    }
    document.getElementById('t-stats').innerHTML = stats.join('');
  };

  App.majBadgeSequence = function (mode) {
    var badge = document.getElementById('n-seq');
    var libelle = { off: 'Off', brouillons: 'Brouillons', envoi: 'Actif' };
    badge.textContent = libelle[mode] || 'Off';
    // 'off' est un etat VOULU, pas une alarme : gris neutre, jamais rouge.
    badge.classList.remove('alerte');
  };

  App.rafraichirEtat = function () {
    return App.api('/api/etat')
      .then(function (e) {
        document.getElementById('n-pipe').textContent = e.a_avancer != null ? e.a_avancer : e.dossiers_actifs;
        document.getElementById('n-base').textContent = e.nb_clients;
        if (e.n_soumissions != null) document.getElementById('n-jour').textContent = e.n_soumissions;
        if (e.n_an_passe != null && document.getElementById('n-an')) {
          document.getElementById('n-an').textContent = e.n_an_passe;
        }
        if (e.n_prospection != null && document.getElementById('n-prosp')) {
          document.getElementById('n-prosp').textContent = e.n_prospection;
        }
        App.majBadgeSequence(e.sequence_mode);

        var synchro = document.getElementById('etat-synchro');
        var okB = e.synchro.booqable_ok, okG = e.synchro.gmail_ok;
        synchro.innerHTML =
          '<span class="' + (okB && okG ? 'pt-v' : 'pt-r') + '"></span> ' +
          (okB && okG
            ? 'Booqable · Gmail synchronisés'
            : (!okB && !okG ? 'Aucune synchro récente'
              : (!okB ? 'Booqable : aucune synchro récente' : 'Gmail : rien reçu récemment')));

        var alerte = document.getElementById('etat-alerte');
        if (e.payees_non_reservees > 0) {
          alerte.hidden = false;
          alerte.innerHTML = '<span class="pt-r"></span> ' + e.payees_non_reservees +
            ' payée' + (e.payees_non_reservees > 1 ? 's' : '') + ' non réservée' +
            (e.payees_non_reservees > 1 ? 's' : '');
        } else {
          alerte.hidden = true;
        }
      })
      .catch(function () {
        // L'état du rail n'est pas critique : on n'ouvre pas un bandeau
        // rouge pour ça, le reste de l'app continue de fonctionner.
        document.getElementById('etat-synchro').innerHTML =
          '<span class="pt-r"></span> État du système indisponible';
      });
  };

  /* ── Fenêtre des 7 motifs ───────────────────────────────── */
  var dossierAFermer = null;
  var quandFerme = null;

  App.ouvrirMotifs = function (dossierId, rappel) {
    dossierAFermer = dossierId;
    quandFerme = rappel;
    App.ouvrirModal('modal-motifs');
  };

  function brancherMotifs() {
    document.getElementById('modal-motifs').addEventListener('click', function (e) {
      var btn = e.target.closest('[data-motif]');
      if (!btn) return;
      App.fermerModal('modal-motifs');
      if (dossierAFermer && quandFerme) quandFerme(dossierAFermer, btn.dataset.motif);
      dossierAFermer = null;
      quandFerme = null;
    });
  }

  /* ── Recherche instantanée ──────────────────────────────── */
  var chercherServeur = App.attendre(function (terme) {
    var boite = document.getElementById('recherche-globale');
    if (terme.length < 2) { boite.innerHTML = ''; return; }

    App.api('/api/recherche?q=' + encodeURIComponent(terme))
      .then(function (r) {
        if (!r.dossiers.length && !r.clients.length) {
          boite.innerHTML = '<div class="trouve"><b class="t">Recherche « ' + App.h(terme) +
            ' »</b><div class="trouve-r">Aucun dossier ni client trouvé.</div></div>';
          return;
        }
        boite.innerHTML = '<div class="trouve"><b class="t">Recherche « ' + App.h(terme) +
          ' » — ' + r.dossiers.length + ' dossier' + (r.dossiers.length > 1 ? 's' : '') + '</b>' +
          r.dossiers.slice(0, 8).map(function (d) {
            return '<div class="trouve-r" data-fiche-recherche="' + App.h(d.id) + '">' +
              '<span>' + App.h(d.nom) + (d.entreprise ? ' · ' + App.h(d.entreprise) : '') + '</span>' +
              '<span class="v">' + App.h(App.argent(d.montant)) + '</span></div>';
          }).join('') + '</div>';
      })
      .catch(function () {
        boite.innerHTML = '<div class="trouve"><b class="t">Recherche</b>' +
          '<div class="trouve-r">Recherche indisponible — le serveur ne répond pas.</div></div>';
      });
  }, 320);

  function brancherRecherche() {
    var champ = document.getElementById('q');

    champ.addEventListener('input', function () {
      var terme = champ.value.toLowerCase().trim();
      App.etat.recherche = terme;

      // Filtrage instantané des trois vues déjà chargées — aucun aller-retour.
      document.querySelectorAll('.row, .mini, #db tbody tr').forEach(function (el) {
        el.classList.toggle('hide', terme !== '' &&
          el.textContent.toLowerCase().indexOf(terme) === -1);
      });

      chercherServeur(terme);
    });

    document.getElementById('recherche-globale').addEventListener('click', function (e) {
      var cible = e.target.closest('[data-fiche-recherche]');
      if (cible) App.fiche.ouvrir(cible.dataset.ficheRecherche);
    });

    // Raccourci « / » — sauf quand on écrit déjà quelque part.
    document.addEventListener('keydown', function (e) {
      var actif = document.activeElement;
      var enTrainDEcrire = actif &&
        (actif.tagName === 'TEXTAREA' || actif.tagName === 'INPUT' || actif.isContentEditable);

      if (e.key === '/' && !enTrainDEcrire) {
        e.preventDefault();
        champ.focus();
      }
      if (e.key === 'Escape') {
        App.fiche.fermer();
        App.fermerModal('modal-motifs');
        App.fermerModal('modal-confirme');
        if (actif === champ) champ.blur();
      }
    });
  }

  /* ── Réseau ─────────────────────────────────────────────── */
  function brancherReseau() {
    window.addEventListener('offline', function () {
      App.montrerBandeau(
        'Vous êtes hors ligne. Les données affichées datent de votre dernière visite — ' +
        'aucun geste ne sera enregistré tant que la connexion n\'est pas revenue.',
        null, true
      );
    });
    window.addEventListener('online', function () {
      App.cacherBandeau();
      App.rechargerVueCourante();
      App.rafraichirEtat();
    });

    document.getElementById('bandeau-fermer').addEventListener('click', App.cacherBandeau);
    document.getElementById('bandeau-reessayer').addEventListener('click', function () {
      App.cacherBandeau();
      App.rechargerVueCourante();
      App.rafraichirEtat();
    });
  }

  /* ── Fenêtres : fermeture ───────────────────────────────── */
  function brancherModals() {
    document.querySelectorAll('[data-fermer-modal]').forEach(function (b) {
      b.addEventListener('click', function () { App.fermerModal(b.dataset.fermerModal); });
    });
    // Cliquer le voile ferme la fenêtre, jamais le contenu.
    document.querySelectorAll('.modal').forEach(function (m) {
      m.addEventListener('click', function (e) {
        if (e.target === m) m.classList.remove('on');
      });
    });
  }

  /* ── Démarrage ──────────────────────────────────────────── */
  function demarrer() {
    App.brancherToast();
    App.fiche.brancher();
    App.client.brancher();
    App.suivis.brancher();
    App.calendrier.brancher();
    App.journal.brancher();
    App.sequence.brancher();
    App.pipeline.brancher();
    App.clients.brancher();
    brancherMotifs();
    brancherRecherche();
    brancherReseau();
    brancherModals();

    document.querySelectorAll('.nav-i').forEach(function (b) {
      b.addEventListener('click', function () { aller(b.dataset.vue); });
    });

    document.getElementById('deconnexion').addEventListener('click', function () {
      App.api('/api/deconnexion', { methode: 'POST' })
        .then(function () { window.location.href = 'connexion.html'; })
        .catch(function () { window.location.href = 'connexion.html'; });
    });

    // Qui est connecté ? L'équipe sert au menu d'assignation.
    App.api('/api/moi')
      .then(function (r) {
        App.etat.utilisateur = r.utilisateur;
        App.etat.equipe = r.equipe || [];
        document.getElementById('moi-nom').textContent = r.utilisateur.nom;
        document.getElementById('moi-initiales').textContent = App.initiales(r.utilisateur.nom);
      })
      .catch(function () {
        document.getElementById('moi-nom').textContent = 'Session inconnue';
      });

    chargees.jour = true;
    App.suivis.charger();
    App.rafraichirEtat();

    // Le rail se remet à jour tout seul : le matin, la liste bouge sans
    // qu'on recharge la page.
    setInterval(function () {
      if (document.visibilityState === 'visible') App.rafraichirEtat();
    }, 120000);
  }

  /* ── Service worker (installation sur l'écran d'accueil) ── */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function (err) {
        console.warn('Service worker non enregistré :', err.message);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', demarrer);
  } else {
    demarrer();
  }
})();
