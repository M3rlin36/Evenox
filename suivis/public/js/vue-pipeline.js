'use strict';
/* ============================================================
   ONGLET PIPELINE — les dossiers actifs par statut.
   Cliquer une carte ouvre la fiche : ce que le client veut, la
   discussion complète, et tout ce qui a déjà été fait.
   ============================================================ */

App.pipeline = (function () {

  var donnees = null;
  var filtre = 'tous';

  var CLASSE_COL = {
    won: 'won', quoted: 'quo', lost: 'lost',
    following_up: 'quo', negotiating: 'quo', deferred: 'lost',
  };
  // Les statuts viennent de la base en anglais ; on les affiche en francais.
  // En relance / Négociation / Reporté s'ajoutent à Nouveaux / Soumis / Gagnés / Perdus
  // sans casser les colonnes déjà servies par le VPS.
  var LIBELLE_COL = {
    new: 'Nouveaux',
    quoted: 'Soumis',
    following_up: 'En relance',
    negotiating: 'Négociation',
    won: 'Gagnés',
    lost: 'Perdus',
    deferred: 'Reportés',
  };
  var CONCLU = { won: true, lost: true, deferred: true };

  function charger() {
    var corps = document.getElementById('pipe-corps');
    App.chargement(corps, 'Chargement du pipeline…');

    return App.api('/api/pipeline')
      .then(function (d) { donnees = d; dessiner(); })
      .catch(function (err) {
        App.erreurVue(corps, err, charger);
        App.erreur(err, charger);
      });
  }

  function dessiner() {
    var d = donnees;

    // Filtres — mêmes chips que la maquette, comptés sur les vraies données.
    var f = d.filtres || {};
    document.getElementById('pipe-chips').innerHTML = [
      { cle: 'tous', libelle: 'Tous' },
      { cle: 'HOT', libelle: 'HOT (' + (f.hot || 0) + ')' },
      { cle: 'sans_action', libelle: 'Sans prochaine action (' + (f.sans_action || 0) + ')' },
      { cle: 'relance_echue', libelle: 'Relance échue (' + (f.relance_echue || 0) + ')' },
      { cle: 'renouvellement', libelle: 'Renouvellement (' + (f.renouvellement || 0) + ')' },
      { cle: 'post_evenement', libelle: 'Post-événement (' + (f.post_evenement || 0) + ')' },
      { cle: 'corporatif', libelle: 'Corporatif' },
      { cle: 'municipal', libelle: 'Municipal' },
      { cle: 'prive', libelle: 'Privé' },
      { cle: 'mariage', libelle: 'Mariage' },
    ].map(function (c) {
      return '<button class="chip' + (filtre === c.cle ? ' on' : '') + '" type="button" ' +
        'data-chip-pipe="' + App.h(c.cle) + '">' + App.h(c.libelle) + '</button>';
    }).join('');

    var corps = document.getElementById('pipe-corps');
    corps.className = '';

    if (!d.colonnes.length) {
      corps.innerHTML = '<div class="vide"><b>Aucun dossier actif.</b>' +
        'Les événements passés ne sont pas affichés ici — ils vivent dans Closing et Clients.</div>';
      return;
    }

    var html = '<div class="board">' + d.colonnes.map(colonne).join('') + '</div>';

    html += '<div class="note"><b>Cliquez une carte</b> pour ouvrir la fiche : ' +
      'ce que le client veut, la discussion complète, et tout ce qui a déjà été fait.<br>' +
      '<b>' + d.non_chiffres + ' dossier' + (d.non_chiffres > 1 ? 's portent' : ' porte') +
      ' une valeur de 0 $</b> — non chiffrés, pas sans valeur.<br>' +
      'Les événements déjà passés sont exclus du pipeline.</div>';

    corps.innerHTML = html;
    appliquerFiltre();
  }

  function colonne(col) {
    var fermable = !CONCLU[col.statut];
    var cartes = col.cartes.map(function (c) {
      var alerte = c.alerte || '';
      var prochaine = c.prochaine_action
        ? '<span class="mt' + (alerte === 'Relance échue' || alerte === 'Sans prochaine action' ? ' r' : '') + '">' +
          App.h(c.prochaine_action) +
          (c.prochaine_relance ? ' · ' + App.h(App.dateCourte(c.prochaine_relance)) : '') +
          '</span>'
        : (alerte === 'Sans prochaine action'
          ? '<span class="mt r">Sans prochaine action</span>'
          : '');
      return '<div class="mini" data-fiche-pipe="' + App.h(c.id) + '" ' +
        'data-tier="' + App.h(c.tier || '') + '" data-type="' + App.h(c.type || '') + '" ' +
        'data-alerte="' + App.h(alerte) + '" data-pipeline="' + App.h(c.pipeline || 'ventes') + '">' +
        '<div class="n">' + App.h(c.nom) + '</div>' +
        (c.entreprise ? '<div class="o">' + App.h(c.entreprise) + '</div>' : '') +
        '<div class="m"><span>' + App.h(c.date_evenement ? App.dateCourte(c.date_evenement) : 'sans date') +
        '</span><span class="v">' + App.h(c.montant ? App.argentBrut(c.montant) : '—') + '</span></div>' +
        prochaine +
        (c.badge ? '<span class="mt' + (c.badge.r ? ' r' : '') + '">' + App.h(c.badge.t) + '</span>' : '') +
        // « Closer » — conclure sans avoir à ouvrir la fiche. C'est le geste
        // le plus fréquent du pipeline ; il demandait trois clics.
        (fermable
          ? '<button type="button" class="mini-closer" data-closer="' + App.h(c.id) +
            '" title="Conclure ce dossier">Closer</button>'
          : '') +
        '</div>';
    }).join('');

    var reste = col.reste
      ? '<div class="mini dim" data-reste="1"><div class="n">+ ' + col.reste + ' dossier' +
        (col.reste > 1 ? 's' : '') + '</div><div class="m"><span>' + App.h(col.reste_note) +
        '</span><span class="v">' + App.h(col.reste_valeur ? App.argentBrut(col.reste_valeur) : '—') +
        '</span></div></div>'
      : '';

    return '<div class="col ' + (CLASSE_COL[col.statut] || '') + '">' +
      '<div class="col-h"><span class="n">' + App.h(LIBELLE_COL[col.statut] || col.statut) + '</span>' +
      '<span class="c">' + col.nb + '</span>' +
      '<span class="s">' + App.h(col.valeur ? App.argentBrut(col.valeur) : '—') + '</span></div>' +
      cartes + reste + '</div>';
  }

  function appliquerFiltre() {
    document.querySelectorAll('#pipe .mini').forEach(function (el) {
      if (el.dataset.reste) {
        // La carte de repli n'a pas de sens quand un filtre est actif.
        el.classList.toggle('hide', filtre !== 'tous');
        return;
      }
      var garde = filtre === 'tous' ||
        el.dataset.tier === filtre ||
        el.dataset.type === filtre ||
        (filtre === 'sans_action' && el.dataset.alerte === 'Sans prochaine action') ||
        (filtre === 'relance_echue' && el.dataset.alerte === 'Relance échue') ||
        (filtre === 'renouvellement' && el.dataset.pipeline === 'renouvellement') ||
        (filtre === 'post_evenement' && el.dataset.pipeline === 'post_evenement');
      el.classList.toggle('hide', !garde);
    });
  }

  function brancher() {
    document.getElementById('pipe').addEventListener('click', function (e) {
      var chip = e.target.closest('[data-chip-pipe]');
      if (chip) {
        filtre = chip.dataset.chipPipe;
        document.querySelectorAll('[data-chip-pipe]').forEach(function (c) {
          c.classList.toggle('on', c === chip);
        });
        appliquerFiltre();
        return;
      }
      // Le bouton Closer est DANS la carte : sans ce test avant, le clic
      // remonterait et ouvrirait la fiche par-dessus la fenêtre des motifs.
      var closer = e.target.closest('[data-closer]');
      if (closer) {
        e.stopPropagation();
        App.ouvrirMotifs(closer.dataset.closer, function (dossierId, motif) {
          App.api('/api/dossier/' + encodeURIComponent(dossierId) + '/fermer', {
            methode: 'POST', corps: { motif: motif },
          })
            .then(function (r) {
              App.toast(r.message, r.annulation_id
                ? function () { App.annulerAction(r.annulation_id, charger); }
                : null);
              charger();
            })
            .catch(function (err) { App.erreur(err); App.toast('Dossier inchangé — ' + err.message); });
        });
        return;
      }

      var carte = e.target.closest('[data-fiche-pipe]');
      if (carte) App.fiche.ouvrir(carte.dataset.fichePipe);
    });
  }

  return { charger: charger, brancher: brancher };
})();
