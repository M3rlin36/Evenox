'use strict';
/* ============================================================
   À FAIRE AVANCER — pas un kanban de statuts.
   Cinq seaux dans l'ordre où on débloque : bloqués, en retard,
   à moi aujourd'hui, ils doivent répondre, prêts à closer.
   Gagné / perdu n'avancent plus : ils ne sont pas ici.
   ============================================================ */

App.pipeline = (function () {

  var donnees = null;
  var CONCLU = { won: true, lost: true, deferred: true };

  function charger() {
    var corps = document.getElementById('pipe-corps');
    App.chargement(corps, 'Chargement…');

    return App.api('/api/pipeline')
      .then(function (d) { donnees = d; dessiner(); })
      .catch(function (err) {
        App.erreurVue(corps, err, charger);
        App.erreur(err, charger);
      });
  }

  function toutesCartes() {
    var out = [];
    (donnees.colonnes || []).forEach(function (col) {
      (col.cartes || []).forEach(function (c) {
        var x = Object.assign({}, c);
        x._statut = col.statut;
        out.push(x);
      });
    });
    return out;
  }

  function auj() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') +
      '-' + String(d.getDate()).padStart(2, '0');
  }

  function seaux() {
    var actifs = toutesCartes().filter(function (c) { return !CONCLU[c._statut]; });
    var aujourd = auj();
    var pris = {};

    function prendre(pred) {
      var lot = [];
      actifs.forEach(function (c) {
        if (pris[c.id]) return;
        if (pred(c)) { pris[c.id] = true; lot.push(c); }
      });
      return lot;
    }

    return [
      {
        id: 'bloques', titre: 'Bloqués',
        sous: 'Sans prochaine action — datez un geste, sinon le dossier disparaît.',
        classe: 'lost',
        cartes: prendre(function (c) { return c.alerte === 'Sans prochaine action'; }),
      },
      {
        id: 'retard', titre: 'En retard',
        sous: 'La relance prévue est passée. C\'est ça, ce matin.',
        classe: 'lost',
        cartes: prendre(function (c) { return c.alerte === 'Relance échue'; }),
      },
      {
        id: 'aujourdhui', titre: 'À moi aujourd\'hui',
        sous: 'La date de relance est aujourd\'hui ou avant.',
        classe: 'quo',
        cartes: prendre(function (c) {
          return c.prochaine_relance && c.prochaine_relance <= aujourd;
        }),
      },
      {
        id: 'attendent', titre: 'Ils doivent répondre',
        sous: 'On a bougé. La balle est de leur côté — on n\'écrit pas par-dessus.',
        classe: '',
        cartes: prendre(function (c) {
          return c.prochaine_relance && c.prochaine_relance > aujourd;
        }),
      },
      {
        id: 'closer', titre: 'Prêts à closer',
        sous: 'Négociation ou contrat — un oui ou un motif, pas une 4e relance.',
        classe: 'quo',
        cartes: prendre(function (c) {
          return c._statut === 'negotiating' || (c.prochaine_action || '').indexOf('contrat') !== -1;
        }),
      },
    ];
  }

  function dessiner() {
    var chips = document.getElementById('pipe-chips');
    if (chips) chips.innerHTML = '';

    var corps = document.getElementById('pipe-corps');
    corps.className = '';

    var html = '<div class="pourquoi"><b>Avancer, pas classer.</b> ' +
      'On ne range pas les dossiers par statut. On les range par ' +
      '<b>ce qui les bloque</b>. De gauche à droite : ce qui n\'a pas de prochain ' +
      'geste, ce qui est en retard, ce qui est à toi aujourd\'hui, ' +
      'ceux qui doivent répondre, ceux qu\'il faut closer. ' +
      'Gagné et perdu ne sont plus ici — ils sont dans Closing.</div>';

    var cols = seaux();
    var total = cols.reduce(function (n, s) { return n + s.cartes.length; }, 0);
    if (!total) {
      html += '<div class="vide"><b>Rien à faire avancer.</b>' +
        'Les dossiers ouverts ont tous une prochaine action dans le futur.</div>';
      corps.innerHTML = html;
      return;
    }

    html += '<div class="board avanc">' + cols.map(colonne).join('') + '</div>';
    html += '<div class="note">Un dossier n\'apparaît que dans <b>un</b> seau — ' +
      'le plus bloquant. Clique la carte pour ouvrir la fiche.</div>';
    corps.innerHTML = html;
  }

  function colonne(col) {
    var cartes = col.cartes.map(function (c) {
      var alerte = c.alerte || '';
      var prochaine = c.prochaine_action
        ? '<span class="mt' + (alerte ? ' r' : '') + '">' + App.h(c.prochaine_action) +
          (c.prochaine_relance ? ' · ' + App.h(App.dateCourte(c.prochaine_relance)) : '') +
          '</span>'
        : (alerte ? '<span class="mt r">' + App.h(alerte) + '</span>' : '');
      return '<div class="mini" data-fiche-pipe="' + App.h(c.id) + '">' +
        '<div class="n">' + App.h(c.nom) + '</div>' +
        (c.entreprise ? '<div class="o">' + App.h(c.entreprise) + '</div>' : '') +
        '<div class="m"><span>' + App.h(c.date_evenement ? App.dateCourte(c.date_evenement) : 'sans date') +
        '</span><span class="v">' + App.h(c.montant ? App.argentBrut(c.montant) : '—') + '</span></div>' +
        prochaine +
        '<button type="button" class="mini-closer" data-closer="' + App.h(c.id) +
          '" title="Classer">Classer</button>' +
        '</div>';
    }).join('');

    return '<div class="col ' + col.classe + '">' +
      '<div class="col-h"><span class="n">' + App.h(col.titre) + '</span>' +
      '<span class="c">' + col.cartes.length + '</span></div>' +
      '<div class="col-sous">' + App.h(col.sous) + '</div>' +
      (cartes || '<div class="cal-vide">Rien ici</div>') +
      '</div>';
  }

  function brancher() {
    document.getElementById('pipe').addEventListener('click', function (e) {
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
