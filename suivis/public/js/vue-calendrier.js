'use strict';
/* ============================================================
   SEMAINE — aujourd'hui d'abord, puis les 5 jours, le mois
   seulement si on le demande. Le mois entier n'aide pas le matin.
   ============================================================ */

App.calendrier = (function () {

  var vue = 'jour';
  var curseur = new Date();
  curseur.setHours(12, 0, 0, 0);
  var jours = {};
  var decales = 0;
  var moisCharges = {};

  function pad(n) { return String(n).padStart(2, '0'); }
  function iso(d) {
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  function debutSemaine(d) {
    var x = new Date(d);
    var dec = (x.getDay() + 6) % 7;
    x.setDate(x.getDate() - dec);
    x.setHours(12, 0, 0, 0);
    return x;
  }
  function cleMois(d) {
    return d.getFullYear() + '-' + pad(d.getMonth() + 1);
  }

  function charger() {
    var corps = document.getElementById('cal-corps');
    if (corps) App.chargement(corps, 'Chargement…');
    return chargerMoisAutour().then(dessiner).catch(function (err) {
      if (corps) App.erreurVue(corps, err, charger);
      App.erreur(err, charger);
    });
  }

  function chargerMoisAutour() {
    var aCharger = [cleMois(curseur)];
    var lun = debutSemaine(curseur);
    var dim = new Date(lun);
    dim.setDate(lun.getDate() + 6);
    var m2 = cleMois(lun);
    var m3 = cleMois(dim);
    if (aCharger.indexOf(m2) === -1) aCharger.push(m2);
    if (aCharger.indexOf(m3) === -1) aCharger.push(m3);

    var manquants = aCharger.filter(function (m) { return !moisCharges[m]; });
    if (!manquants.length) return Promise.resolve();

    return Promise.all(manquants.map(function (m) {
      return App.api('/api/calendrier?mois=' + m).then(function (d) {
        moisCharges[m] = true;
        Object.keys(d.jours || {}).forEach(function (k) { jours[k] = d.jours[k]; });
        decales += d.decales || 0;
      });
    }));
  }

  function etiquette(p) {
    if (p.genre === 'an') return p.titre + (p.annee_passee ? ' · ' + p.annee_passee : '');
    return p.titre + (p.montant ? ' · ' + App.argentBrut(p.montant) : '');
  }

  function sousTitre(p) {
    if (p.genre === 'an') {
      return 'An passé' + (p.montant ? ' — ' + App.argentBrut(p.montant) : '') +
        (p.date_evenement ? ' · événement le ' + App.dateLongue(p.date_evenement) : '');
    }
    return (p.quoi || 'Relance') + (p.montant ? ' · ' + App.argentBrut(p.montant) : '');
  }

  function dessiner() {
    document.querySelectorAll('[data-cal-vue]').forEach(function (b) {
      b.classList.toggle('on', b.dataset.calVue === vue);
    });

    var note = document.getElementById('cal-decales');
    if (note) {
      note.textContent = decales
        ? decales + ' relance' + (decales > 1 ? 's' : '') + ' déplacée' +
          (decales > 1 ? 's' : '') + ' hors fin de semaine.'
        : '';
    }

    if (vue === 'semaine') dessinerSemaine();
    else if (vue === 'mois') dessinerMois();
    else dessinerJour();
  }

  function lignePoint(p, cle, idx) {
    return '<button type="button" class="cal-ligne ' + App.h(p.genre || 'rl') + '" ' +
      'data-point="' + App.h(cle) + ':' + idx + '">' +
      '<b>' + App.h(p.titre) + (p.entreprise ? ' <i>' + App.h(p.entreprise) + '</i>' : '') + '</b>' +
      '<span>' + App.h(sousTitre(p)) + '</span></button>';
  }

  function dessinerJour() {
    var cle = iso(curseur);
    document.getElementById('cal-titre').textContent = App.dateLongue(cle);
    var points = jours[cle] || [];
    var html = '';
    if (!points.length) {
      html = '<div class="vide"><b>Rien de prévu ce jour-là.</b>' +
        'Passe à la semaine pour voir ce qui s\'en vient.</div>';
    } else {
      html = '<div class="cal-jour">' + points.map(function (p, i) {
        return lignePoint(p, cle, i);
      }).join('') + '</div>';
    }
    document.getElementById('cal-corps').innerHTML = html;
  }

  function dessinerSemaine() {
    var lun = debutSemaine(curseur);
    var dim = new Date(lun);
    dim.setDate(lun.getDate() + 4);
    document.getElementById('cal-titre').textContent =
      App.dateCourte(iso(lun)) + ' → ' + App.dateCourte(iso(dim));

    var auj = iso(new Date());
    var html = '<div class="cal-sem">';
    for (var i = 0; i < 5; i++) {
      var d = new Date(lun);
      d.setDate(lun.getDate() + i);
      var cle = iso(d);
      var points = jours[cle] || [];
      var noms = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
      html += '<div class="cal-col' + (cle === auj ? ' auj' : '') + '">' +
        '<div class="cal-col-h"><b>' + noms[i] + '</b><span>' + d.getDate() + '</span></div>';
      if (!points.length) {
        html += '<div class="cal-vide">—</div>';
      } else {
        html += points.map(function (p, idx) {
          return lignePoint(p, cle, idx);
        }).join('');
      }
      html += '</div>';
    }
    html += '</div>';
    document.getElementById('cal-corps').innerHTML = html;
  }

  function dessinerMois() {
    var mois = curseur.getMonth();
    var annee = curseur.getFullYear();
    document.getElementById('cal-titre').textContent = App.moisNom(mois) + ' ' + annee;

    var premier = new Date(annee, mois, 1).getDay();
    var decalage = (premier + 6) % 7;
    var nb = new Date(annee, mois + 1, 0).getDate();
    var auj = new Date();
    var memeMois = auj.getMonth() === mois && auj.getFullYear() === annee;

    var html = '<div class="grid" id="cal-grid">';
    html += ['lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim']
      .map(function (j, i) {
        return '<div class="jn' + (i > 4 ? ' fds' : '') + '">' + j + '</div>';
      }).join('');
    for (var i = 0; i < decalage; i++) html += '<div class="j vide"></div>';
    for (var d = 1; d <= nb; d++) {
      var cle = annee + '-' + pad(mois + 1) + '-' + pad(d);
      var points = jours[cle] || [];
      var estAuj = (memeMois && d === auj.getDate()) ? ' auj' : '';
      var jsem = new Date(annee, mois, d).getDay();
      var estFds = (jsem === 0 || jsem === 6) ? ' fds' : '';
      html += '<div class="j' + estAuj + estFds + '" data-jour="' + cle + '">' +
        '<span class="d">' + d + '</span>' +
        points.slice(0, 3).map(function (p, idx) {
          return '<button type="button" class="pt ' + p.genre + '" data-point="' +
            cle + ':' + idx + '">' + App.h(etiquette(p)) + '</button>';
        }).join('') +
        (points.length > 3
          ? '<button type="button" class="pt pl" data-plus="' + cle + '">+' +
            (points.length - 3) + '</button>'
          : '') +
        '</div>';
    }
    html += '</div>';
    document.getElementById('cal-corps').innerHTML = html;
  }

  function ouvrirPoint(p) {
    if (!p) return;
    if (p.genre === 'an') { App.client.ouvrir(p.id); return; }
    App.fiche.ouvrir(p.id);
  }

  function avancer(n) {
    if (vue === 'semaine') curseur.setDate(curseur.getDate() + (7 * n));
    else if (vue === 'mois') curseur.setMonth(curseur.getMonth() + n);
    else curseur.setDate(curseur.getDate() + n);
    charger();
  }

  function brancher() {
    document.getElementById('cal-prec').addEventListener('click', function () { avancer(-1); });
    document.getElementById('cal-suiv').addEventListener('click', function () { avancer(1); });
    document.getElementById('cal-auj').addEventListener('click', function () {
      curseur = new Date();
      curseur.setHours(12, 0, 0, 0);
      charger();
    });

    document.getElementById('cal').addEventListener('click', function (e) {
      var mode = e.target.closest('[data-cal-vue]');
      if (mode) {
        vue = mode.dataset.calVue;
        charger();
        return;
      }
      var pt = e.target.closest('[data-point]');
      if (pt) {
        var parts = pt.dataset.point.split(':');
        ouvrirPoint((jours[parts[0]] || [])[Number(parts[1])]);
        return;
      }
      var plus = e.target.closest('[data-plus]');
      if (plus) { App.calendrier.ouvrirJour(plus.dataset.plus); return; }
      var cellule = e.target.closest('[data-jour]');
      if (cellule) {
        var cle = cellule.dataset.jour;
        if (!(jours[cle] || []).length) {
          App.toast(App.dateLongue(cle) + ' — rien de prévu');
          return;
        }
        curseur = new Date(cle + 'T12:00:00');
        vue = 'jour';
        dessiner();
      }
    });
  }

  function ouvrirJour(cle) {
    var points = jours[cle] || [];
    if (!points.length) return;
    if (points.length === 1) { ouvrirPoint(points[0]); return; }
    var html = points.map(function (p, i) {
      return '<button class="motif" type="button" data-jour-point="' + cle + ':' + i + '">' +
        '<b>' + App.h(p.titre) + (p.entreprise ? ' — ' + App.h(p.entreprise) : '') + '</b>' +
        '<i>' + App.h(sousTitre(p)) + '</i></button>';
    }).join('');
    App.ouvrirListe(App.dateLongue(cle), points.length + ' à faire', html, function (cible) {
      var parts = cible.dataset.jourPoint.split(':');
      ouvrirPoint((jours[parts[0]] || [])[Number(parts[1])]);
    }, '[data-jour-point]');
  }

  return { charger: charger, brancher: brancher, ouvrirJour: ouvrirJour };
})();
