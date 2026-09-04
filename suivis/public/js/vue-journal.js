'use strict';
/* ============================================================
   ONGLET JOURNAL — ce qui s'est passé aujourd'hui.
   Mauve pour l'automatique, vert pour l'humain. Le nom de la
   personne apparaît : deux comptes séparés, deux responsabilités.
   ============================================================ */

App.journal = (function () {

  var jour = null;   // null = aujourd'hui

  function charger() {
    var corps = document.getElementById('fait-corps');
    App.chargement(corps, 'Chargement du journal…');

    return App.api('/api/journal' + (jour ? '?jour=' + jour : ''))
      .then(function (d) { dessiner(d); })
      .catch(function (err) {
        App.erreurVue(corps, err, charger);
        App.erreur(err, charger);
      });
  }

  function dessiner(d) {
    var corps = document.getElementById('fait-corps');
    corps.className = '';

    var html =
      '<div class="kpis">' +
      '<div class="kpi"><div class="n">' + d.kpis.automatiques + '</div>' +
        '<div class="l">Actions automatiques</div></div>' +
      '<div class="kpi g"><div class="n">' + d.kpis.humaines + '</div>' +
        '<div class="l">Actions faites par l\'équipe</div></div>' +
      '<div class="kpi"><div class="n">' + App.h(App.argentBrut(d.kpis.valeur)) + '</div>' +
        '<div class="l">Valeur débloquée</div></div>' +
      '</div>';

    if (!d.lignes.length) {
      html += '<div class="vide"><b>Rien de consigné pour cette journée.</b>' +
        'Les gestes posés dans l\'application et les actions de n8n apparaissent ici en temps réel.</div>';
    } else {
      html += '<div class="log">' + d.lignes.map(ligne).join('') + '</div>';
    }

    html += '<div class="note">Le journal garde <b>qui a fait quoi</b> : ' +
      'les actions automatiques de n8n en mauve, celles de l\'équipe en vert.</div>';

    corps.innerHTML = html;
  }

  function ligne(l) {
    var auto = (l.par === 'auto');
    return '<div class="ev ' + (auto ? 'a' : 'm') + '"' +
      (l.dossier_id ? ' data-fiche-journal="' + App.h(l.dossier_id) + '" style="cursor:pointer"' : '') + '>' +
      '<div class="ev-t">' + App.h(App.heure(l.cree_le)) +
        '<span class="who ' + (auto ? 'a' : 'm') + '">' + App.h(auto ? 'Auto' : l.par) + '</span></div>' +
      '<div class="ev-x">' + App.h(l.resume) + '</div>' +
      (l.detail || l.client
        ? '<div class="ev-s">' + App.h([l.detail, l.lead_id].filter(Boolean).join(' · ')) + '</div>'
        : '') +
      '</div>';
  }

  function brancher() {
    document.getElementById('fait').addEventListener('click', function (e) {
      var cible = e.target.closest('[data-fiche-journal]');
      if (cible) App.fiche.ouvrir(cible.dataset.ficheJournal);
    });
  }

  return { charger: charger, brancher: brancher };
})();
