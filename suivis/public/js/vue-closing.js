'use strict';
/* ============================================================
   ONGLET CLOSING — taux gagné / perdu par tranche, type et tier.
   Aucun constat n'est écrit en dur : les phrases viennent du
   serveur, fabriquées à partir des chiffres du moment.
   ============================================================ */

App.closing = (function () {

  function charger() {
    var corps = document.getElementById('clos-corps');
    App.chargement(corps, 'Chargement du closing…');

    return App.api('/api/closing')
      .then(dessiner)
      .catch(function (err) {
        App.erreurVue(corps, err, charger);
        App.erreur(err, charger);
      });
  }

  function dessiner(d) {
    var corps = document.getElementById('clos-corps');
    corps.className = '';

    if (!d.global.gagnes && !d.global.perdus) {
      corps.innerHTML = '<div class="vide"><b>Aucun dossier décidé pour l\'instant.</b>' +
        'Le taux de closing apparaîtra dès qu\'un dossier passera à gagné ou perdu.</div>';
      return;
    }

    var html = '';

    // ── Les deux moyennes ──
    html += '<div class="duo">' +
      '<div class="duo-c g"><div class="n">' + App.h(App.argentBrut(d.global.moyenne_gagne)) + '</div>' +
        '<div class="l">Dossier gagné moyen · ' + d.global.n_gagne + ' chiffrés</div></div>' +
      '<div class="duo-c r"><div class="n">' + App.h(App.argentBrut(d.global.moyenne_perdu)) + '</div>' +
        '<div class="l">Dossier perdu moyen · ' + d.global.n_perdu + ' chiffrés</div></div>' +
      '</div>';

    if (d.constats.moyennes) {
      html += '<div class="card"><div class="constat" style="margin-top:0">' +
        d.constats.moyennes + '</div></div>';
    }

    // ── Par tranche ──
    html += carte(
      'Taux de closing par tranche de montant',
      'La courbe la plus importante du tableau.',
      d.tranches, d.constats.tranches
    );

    // ── Par type ──
    html += carte(
      'Par type d\'événement',
      'Où va l\'argent, et où il se perd.',
      d.types, d.constats.types
    );

    // ── Par tier ──
    html += carte(
      'Par tier — est-ce que le scoring dit vrai ?',
      'La validation du système de pointage existant.',
      d.tiers, d.constats.tiers
    );

    html += '<div class="note">Calculé sur ' + d.fenetre.nb + ' dossiers décidés' +
      (d.fenetre.debut ? ', du ' + App.dateLongue(d.fenetre.debut) + ' au ' + App.dateLongue(d.fenetre.fin) : '') +
      '. Un mois n\'est pas une tendance.</div>';

    corps.innerHTML = html;
  }

  function carte(titre, sous, lignes, constat) {
    if (!lignes.length) return '';
    return '<div class="card"><h3>' + App.h(titre) + '</h3>' +
      '<div class="sub">' + App.h(sous) + '</div>' +
      lignes.map(barre).join('') +
      (constat ? '<div class="constat">' + constat + '</div>' : '') +
      '</div>';
  }

  function barre(l) {
    var classe = l.taux >= 70 ? ' g' : (l.taux < 50 ? ' r' : '');
    // Une barre à 0 % reste visible : un trait de 2 % dit « rien ne ferme ».
    var largeur = Math.max(l.taux, 2);
    var detailValeur = l.valeur_gagnee || l.valeur_perdue
      ? App.argentBrut(l.valeur_gagnee) + ' gagnés · ' + App.argentBrut(l.valeur_perdue) + ' perdus'
      : '';

    return '<div class="bar-r">' +
      '<div class="bar-l">' + App.h(l.libelle) +
        (detailValeur ? '<i>' + App.h(detailValeur) + '</i>' : '') + '</div>' +
      '<div class="bar-t"><div class="bar-f' + classe + '" style="width:' + largeur + '%"></div></div>' +
      '<div class="bar-v"><b' + (l.taux < 50 ? ' class="r"' : '') + '>' + l.taux + ' %</b> · ' +
        l.gagnes + 'W ' + l.perdus + 'L</div></div>';
  }

  return { charger: charger };
})();
