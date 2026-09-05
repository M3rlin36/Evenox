'use strict';
/* ============================================================
   ONGLET CLIENTS — la base complète, triable par colonne.

   Règle de tri validée : « non chiffré » se trie comme la plus
   petite VALEUR, jamais comme du texte. On trie donc sur les
   nombres envoyés par l'API (attribut data-v), pas sur ce qui est
   affiché dans la cellule.
   ============================================================ */

App.clients = (function () {

  var donnees = null;
  var filtre = 'tous';
  var sens = {};

  var COLONNES = [
    { titre: 'Client', type: 'texte' },
    { titre: 'Type', type: 'texte' },
    { titre: 'Tier', type: 'texte' },
    { titre: 'Dossiers', type: 'nombre' },
    { titre: 'Valeur', type: 'nombre' },
    { titre: 'Encaissé', type: 'nombre' },
    { titre: 'Dernier', type: 'nombre' },
    { titre: 'Statut', type: 'texte' },
  ];

  function charger() {
    var corps = document.getElementById('base-corps');
    App.chargement(corps, 'Chargement de la base clients…');

    return App.api('/api/clients')
      .then(function (d) { donnees = d; dessiner(); })
      .catch(function (err) {
        App.erreurVue(corps, err, charger);
        App.erreur(err, charger);
      });
  }

  function dessiner() {
    document.getElementById('base-chips').innerHTML = [
      { cle: 'tous', libelle: 'Tous' },
      { cle: 'recurrents', libelle: 'Récurrents' },
      { cle: 'corporatif', libelle: 'Corporatif' },
      { cle: 'municipal', libelle: 'Municipal' },
      { cle: 'prive', libelle: 'Privé' },
      { cle: 'jamais_gagne', libelle: 'Jamais gagné' },
      { cle: 'desabonnes', libelle: 'Désabonnés' },
    ].map(function (c) {
      return '<button class="chip' + (filtre === c.cle ? ' on' : '') + '" type="button" ' +
        'data-chip-base="' + App.h(c.cle) + '">' + App.h(c.libelle) + '</button>';
    }).join('');

    var corps = document.getElementById('base-corps');
    corps.className = '';

    if (!donnees.clients.length) {
      corps.innerHTML = '<div class="vide"><b>La base clients est vide.</b>' +
        'Elle se remplit avec la synchronisation Booqable et le backfill 2022-2026.</div>';
      return;
    }

    var entete = COLONNES.map(function (c, i) {
      return '<th' + (c.type === 'nombre' ? ' class="num"' : '') +
        ' data-trier="' + i + '">' + App.h(c.titre) + '</th>';
    }).join('');

    corps.innerHTML =
      '<div class="tw"><table id="db"><thead><tr>' + entete + '</tr></thead>' +
      '<tbody>' + donnees.clients.map(rangee).join('') + '</tbody></table></div>' +
      '<div class="note"><b>' + donnees.total + ' client' + (donnees.total > 1 ? 's' : '') +
      '</b> dans la base, avec tout leur historique. C\'est la mémoire longue : ' +
      'elle sert aux relances annuelles et aux reprises de contrats.<br>' +
      'Cliquez une colonne pour trier — « non chiffré » compte comme la plus petite valeur.</div>';

    appliquerFiltre();
  }

  function rangee(c) {
    var dernier = c.dernier ? String(c.dernier).replace(/-/g, '') : '0';
    return '<tr data-client="' + App.h(c.id) + '"' +
      (c.dossier_recent ? ' data-dossier="' + App.h(c.dossier_recent) + '"' : '') +
      ' data-type="' + App.h(c.type || '') + '"' +
      ' data-recurrent="' + (c.recurrent ? '1' : '0') + '"' +
      ' data-jamais="' + (c.jamais_gagne ? '1' : '0') + '"' +
      ' data-desab="' + (c.desabonne ? '1' : '0') + '">' +
      '<td class="cli" data-v="0">' + App.h(c.nom) +
        (c.entreprise ? '<i>' + App.h(c.entreprise) + '</i>' : '') + '</td>' +
      '<td data-v="0">' + App.h(c.type || '—') + '</td>' +
      '<td data-v="0">' + (c.tier ? '<span class="tr2 ' + App.h(c.tier) + '">' + App.h(c.tier) + '</span>' : '—') + '</td>' +
      '<td class="num" data-v="' + c.nb_dossiers + '">' + c.nb_dossiers + '</td>' +
      '<td class="num' + (c.valeur ? '' : ' z') + '" data-v="' + c.valeur + '">' +
        App.h(c.valeur ? App.argentBrut(c.valeur) : 'non chiffré') + '</td>' +
      '<td class="num ' + (c.encaisse ? 'gg' : 'z') + '" data-v="' + c.encaisse + '">' +
        App.h(App.argentBrut(c.encaisse)) + '</td>' +
      '<td data-v="' + dernier + '">' + App.h(c.dernier ? App.dateCourte(c.dernier) : '—') + '</td>' +
      '<td data-v="0">' + App.h(c.statut || '—') +
        (c.desabonne ? ' · désabonné' : '') + '</td>' +
      '</tr>';
  }

  function appliquerFiltre() {
    document.querySelectorAll('#db tbody tr').forEach(function (tr) {
      var garde;
      switch (filtre) {
        case 'tous': garde = true; break;
        case 'recurrents': garde = tr.dataset.recurrent === '1'; break;
        case 'jamais_gagne': garde = tr.dataset.jamais === '1'; break;
        case 'desabonnes': garde = tr.dataset.desab === '1'; break;
        default: garde = tr.dataset.type === filtre;
      }
      tr.classList.toggle('hide', !garde);
    });
  }

  /** Tri par colonne. Les nombres viennent de data-v : « non chiffré »
   *  vaut 0 et se range donc bien avec les autres montants. */
  function trier(col) {
    var tbody = document.querySelector('#db tbody');
    var lignes = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
    var desc = !sens[col];
    sens = {};
    sens[col] = desc;

    var numerique = COLONNES[col].type === 'nombre';

    lignes.sort(function (a, b) {
      if (numerique) {
        var va = Number(a.children[col].dataset.v);
        var vb = Number(b.children[col].dataset.v);
        if (!isFinite(va)) va = -Infinity;
        if (!isFinite(vb)) vb = -Infinity;
        return desc ? vb - va : va - vb;
      }
      var ta = a.children[col].textContent.trim();
      var tb = b.children[col].textContent.trim();
      return desc ? tb.localeCompare(ta, 'fr-CA') : ta.localeCompare(tb, 'fr-CA');
    });

    lignes.forEach(function (tr) { tbody.appendChild(tr); });
  }

  function brancher() {
    document.getElementById('base').addEventListener('click', function (e) {
      var chip = e.target.closest('[data-chip-base]');
      if (chip) {
        filtre = chip.dataset.chipBase;
        document.querySelectorAll('[data-chip-base]').forEach(function (c) {
          c.classList.toggle('on', c === chip);
        });
        appliquerFiltre();
        return;
      }

      var th = e.target.closest('[data-trier]');
      if (th) { trier(Number(th.dataset.trier)); return; }

      var tr = e.target.closest('tr[data-client]');
      if (tr) {
        // L'onglet Clients est la mémoire de la personne : on ouvre
        // toujours la fiche client (contrats + interactions). Un dossier
        // ouvert se clique ensuite depuis cette fiche.
        App.client.ouvrir(tr.dataset.client);
      }
    });
  }

  return { charger: charger, brancher: brancher };
})();
