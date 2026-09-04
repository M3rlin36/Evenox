'use strict';
/* ============================================================
   ONGLET CALENDRIER — le plan de travail.

   mauve = relance sur un dossier en cours   → ouvre la fiche
   vert  = contrat de l'an dernier à réveiller → ouvre le client

   Les événements ont été retirés le 14 août 2026 : le calendrier
   montrait 48 événements (dont 17 déjà gagnés) contre 3 relances.
   On y voyait surtout du travail déjà fait.

   Chaque point est cliquable individuellement. Avant, seule la
   CASE du jour l'était, et seulement quand elle ne portait qu'un
   seul dossier — sur un jour chargé, il n'y avait aucun moyen
   d'ouvrir le troisième client.
   ============================================================ */

App.calendrier = (function () {

  var mois = new Date().getMonth();
  var annee = new Date().getFullYear();
  var jours = {};
  var decales = 0;

  function cleMois() {
    return annee + '-' + String(mois + 1).padStart(2, '0');
  }

  function charger() {
    var grille = document.getElementById('cal-grid');
    grille.innerHTML = '<div class="chargement" style="grid-column:1/-1">Chargement du mois…</div>';

    return App.api('/api/calendrier?mois=' + cleMois())
      .then(function (d) { jours = d.jours; decales = d.decales || 0; dessiner(); })
      .catch(function (err) {
        grille.innerHTML = '';
        var boite = document.createElement('div');
        boite.style.gridColumn = '1/-1';
        grille.appendChild(boite);
        App.erreurVue(boite, err, charger);
        App.erreur(err, charger);
      });
  }

  /** Le libellé d'un point, court mais sans ambiguïté. */
  function etiquette(p) {
    if (p.genre === 'an') {
      return p.titre + (p.annee_passee ? ' · ' + p.annee_passee : '');
    }
    return p.titre + (p.montant ? ' · ' + App.argentBrut(p.montant) : '');
  }

  /** L'infobulle : tout ce qu'on veut savoir sans cliquer. */
  function infobulle(p) {
    var l = [p.titre];
    if (p.entreprise) l.push(p.entreprise);
    if (p.genre === 'an') {
      l.push('Contrat de ' + (p.annee_passee || 'l\'an dernier') +
        (p.montant ? ' — ' + App.argentBrut(p.montant) : ''));
      if (p.date_evenement) l.push('Événement du ' + App.dateLongue(p.date_evenement));
      l.push('Cliquer pour voir ce qu\'il avait commandé');
    } else {
      if (p.montant) l.push(App.argentBrut(p.montant));
      if (p.quoi) l.push(p.quoi);
      if (p.date_evenement) l.push('Événement du ' + App.dateLongue(p.date_evenement));
      l.push('Cliquer pour ouvrir le dossier');
    }
    if (p.decale_de) l.push('Déplacé depuis le ' + App.dateLongue(p.decale_de) + ' (fin de semaine)');
    return l.join('\n');
  }

  function dessiner() {
    document.getElementById('cal-mois').textContent = App.moisNom(mois) + ' ' + annee;

    var premier = new Date(annee, mois, 1).getDay();   // 0 = dimanche
    var decalage = (premier + 6) % 7;                   // grille lundi → dimanche
    var nb = new Date(annee, mois + 1, 0).getDate();

    var auj = new Date();
    var memeMois = (auj.getMonth() === mois && auj.getFullYear() === annee);

    var html = ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim']
      .map(function (j, i) {
        return '<div class="jn' + (i > 4 ? ' fds' : '') + '">' + j + '</div>';
      }).join('');

    for (var i = 0; i < decalage; i++) html += '<div class="j vide"></div>';

    for (var d = 1; d <= nb; d++) {
      var cle = annee + '-' + String(mois + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
      var points = jours[cle] || [];
      var estAuj = (memeMois && d === auj.getDate()) ? ' auj' : '';
      // La fin de semaine est grisée : on n'y planifie rien, autant que
      // ça se voie d'un coup d'œil.
      var jsem = new Date(annee, mois, d).getDay();
      var estFds = (jsem === 0 || jsem === 6) ? ' fds' : '';

      html += '<div class="j' + estAuj + estFds + '" data-jour="' + cle + '">' +
        '<span class="d">' + d + '</span>' +
        points.slice(0, 3).map(function (p, idx) {
          return '<button type="button" class="pt ' + p.genre + '" ' +
            'data-point="' + cle + ':' + idx + '" ' +
            'title="' + App.h(infobulle(p)) + '">' +
            App.h(etiquette(p)) + '</button>';
        }).join('') +
        (points.length > 3
          ? '<button type="button" class="pt pl" data-plus="' + cle + '">+' +
            (points.length - 3) + ' autre' + (points.length - 3 > 1 ? 's' : '') + '</button>'
          : '') +
        '</div>';
    }

    document.getElementById('cal-grid').innerHTML = html;

    var note = document.getElementById('cal-decales');
    if (note) {
      note.textContent = decales
        ? decales + ' relance' + (decales > 1 ? 's' : '') + ' déplacée' +
          (decales > 1 ? 's' : '') + ' hors fin de semaine.'
        : '';
    }
  }

  /** Ouvre ce qu'il faut selon le genre du point. */
  function ouvrirPoint(p) {
    if (!p) return;
    if (p.genre === 'an') {
      // Relance annuelle : il n'y a pas de dossier ouvert, seulement un
      // client et son contrat de l'an dernier.
      App.client.ouvrir(p.id);
      return;
    }
    App.fiche.ouvrir(p.id);
  }

  function brancher() {
    document.getElementById('cal-prec').addEventListener('click', function () {
      mois--; if (mois < 0) { mois = 11; annee--; }
      charger();
    });
    document.getElementById('cal-suiv').addEventListener('click', function () {
      mois++; if (mois > 11) { mois = 0; annee++; }
      charger();
    });
    document.getElementById('cal-auj').addEventListener('click', function () {
      var n = new Date(); mois = n.getMonth(); annee = n.getFullYear();
      charger();
    });

    var etaler = document.getElementById('cal-etaler');
    if (etaler) {
      etaler.addEventListener('click', function () {
        etaler.disabled = true;
        // On simule d'abord : on ne redate pas 34 dossiers sans avoir dit
        // ce qu'on allait faire.
        App.api('/api/calendrier/etaler', { methode: 'POST', corps: { simulation: true } })
          .then(function (apercu) {
            etaler.disabled = false;
            if (!apercu.places) { App.toast(apercu.message); return; }
            App.confirmer(
              'Répartir les suivis',
              apercu.message + ' Les dossiers qui ont déjà une date ne bougent pas.',
              function () {
                App.api('/api/calendrier/etaler', { methode: 'POST', corps: {} })
                  .then(function (r) { App.toast(r.message); charger(); })
                  .catch(function (err) { App.erreur(err); App.toast('Rien n\'a changé — ' + err.message); });
              }
            );
          })
          .catch(function (err) { etaler.disabled = false; App.erreur(err); });
      });
    }

    document.getElementById('cal-grid').addEventListener('click', function (e) {
      var pt = e.target.closest('[data-point]');
      if (pt) {
        var parts = pt.dataset.point.split(':');
        ouvrirPoint((jours[parts[0]] || [])[Number(parts[1])]);
        return;
      }

      // « +N autres » : on montre la liste complète du jour plutôt que
      // d'ouvrir au hasard.
      var plus = e.target.closest('[data-plus]');
      if (plus) { App.calendrier.ouvrirJour(plus.dataset.plus); return; }

      var cellule = e.target.closest('[data-jour]');
      if (!cellule) return;
      var points = jours[cellule.dataset.jour] || [];
      if (!points.length) {
        App.toast(App.dateLongue(cellule.dataset.jour) + ' — rien de prévu');
        return;
      }
      App.calendrier.ouvrirJour(cellule.dataset.jour);
    });
  }

  /** La liste complète d'un jour, dans la fenêtre modale. */
  function ouvrirJour(cle) {
    var points = jours[cle] || [];
    if (!points.length) return;
    if (points.length === 1) { ouvrirPoint(points[0]); return; }

    var html = points.map(function (p, i) {
      return '<button class="motif" type="button" data-jour-point="' + cle + ':' + i + '">' +
        '<b>' + App.h(p.titre) + (p.entreprise ? ' — ' + App.h(p.entreprise) : '') + '</b>' +
        '<i>' + (p.genre === 'an'
          ? 'Contrat de ' + App.h(p.annee_passee || 'l\'an dernier') +
            (p.montant ? ' · ' + App.h(App.argentBrut(p.montant)) : '')
          : 'Relance' + (p.montant ? ' · ' + App.h(App.argentBrut(p.montant)) : '') +
            (p.quoi ? ' · ' + App.h(p.quoi) : '')) +
        '</i></button>';
    }).join('');

    App.ouvrirListe(App.dateLongue(cle), points.length + ' à faire', html, function (cible) {
      var parts = cible.dataset.jourPoint.split(':');
      ouvrirPoint((jours[parts[0]] || [])[Number(parts[1])]);
    }, '[data-jour-point]');
  }

  return { charger: charger, brancher: brancher, ouvrirJour: ouvrirJour };
})();
