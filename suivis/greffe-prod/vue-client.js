'use strict';
/* ============================================================
   FICHE CLIENT — ouverte depuis une relance annuelle du calendrier.

   Une relance annuelle ne pointe pas vers un dossier : il n'existe
   pas encore. Elle pointe vers quelqu'un qui a loué l'an dernier.
   Ce panneau répond à la seule question qui compte avant d'appeler :
   « qu'est-ce qu'il avait pris ? »

   Il réutilise le panneau de la fiche dossier — même glissement,
   même en-tête, mêmes blocs. Deux panneaux différents pour deux
   choses proches auraient été une occasion de plus de se tromper.
   ============================================================ */

App.client = (function () {

  var courant = null;

  function ouvrir(id) {
    courant = id;

    document.getElementById('voile').classList.add('on');
    document.getElementById('fiche').classList.add('on');
    document.getElementById('f-nom').textContent = 'Chargement…';
    document.getElementById('f-org').textContent = '';
    document.getElementById('f-mnt').textContent = '';
    document.getElementById('f-corps').innerHTML =
      '<div class="chargement">Lecture des contrats passés…</div>';

    return App.api('/api/client/' + encodeURIComponent(id))
      .then(dessiner)
      .catch(function (err) {
        document.getElementById('f-nom').textContent = 'Client indisponible';
        var corps = document.getElementById('f-corps');
        App.erreurVue(corps, err, function () { ouvrir(id); });
      });
  }

  function dessiner(d) {
    var c = d.client;

    document.getElementById('f-nom').textContent = c.nom;
    document.getElementById('f-org').textContent =
      c.entreprise || (d.resume.nb_contrats + ' contrat' + (d.resume.nb_contrats > 1 ? 's' : '') + ' passé' + (d.resume.nb_contrats > 1 ? 's' : ''));
    document.getElementById('f-mnt').textContent = App.argent(d.resume.total_historique);

    var html = '';

    if (c.desabonne) {
      html += '<div class="gros"><b>Client désabonné (LCAP).</b> ' +
        'Aucun courriel automatisé. Vous pouvez toujours l\'appeler.</div>';
    }

    // ── Pourquoi on le relance maintenant ──
    if (d.annuelle) {
      html += '<div class="bloc"><div class="bloc-t">Pourquoi maintenant</div>' +
        '<div class="mat-r"><span class="p">Événement probable</span><span class="v">' +
        App.h(App.dateLongue(d.annuelle.date_probable)) + '</span></div>' +
        '<div class="mat-r"><span class="p">L\'an dernier</span><span class="v">' +
        App.h(App.argent(d.annuelle.montant_an_dernier)) + '</span></div>' +
        '<div class="rappel">Il avait réservé en <b>' + App.h(d.annuelle.annee_precedente) +
        '</b>. C\'est le délai de réservation de ce client-là qui fixe la date de relance, ' +
        'pas une règle générale.</div></div>';
    }

    // ── Comment le joindre ──
    html += '<div class="bloc"><div class="bloc-t">Le joindre</div><div class="racc">';
    if (c.telephone) {
      html += '<a class="rc" href="tel:' + App.h(c.telephone) + '"><b>Appeler</b><i>' +
        App.h(c.telephone) + '</i></a>';
    }
    if (c.courriel) {
      html += '<a class="rc" href="mailto:' + App.h(c.courriel) + '"><b>Écrire</b><i>' +
        App.h(c.courriel) + '</i></a>';
    }
    if (!c.telephone && !c.courriel) {
      html += '<div class="rc"><b>Aucune coordonnée</b><i>Ni téléphone ni courriel au dossier</i></div>';
    }
    html += '</div>';
    html += '<button class="rc" type="button" data-grok-client="' + App.h(c.id) + '" ' +
      'style="width:100%;margin-top:8px"><b>Demander à Grok</b>' +
      '<i>Propose le prochain geste — rien ne part</i></button>';
    html += '</div>';

    // ── Ce qu'il a loué, année par année ──
    html += '<div class="bloc"><div class="bloc-t">Ce qu\'il a loué</div>';
    if (!d.contrats.length) {
      html += '<div class="mat-r"><span class="p">Aucun contrat passé</span><span class="v">—</span></div>';
    } else {
      html += d.contrats.map(function (ct) {
        var lignes = (ct.produits && ct.produits.length)
          ? ct.produits.map(function (p) {
              return '<div class="hist-x">· ' + App.h(p) + '</div>';
            }).join('')
          : '<div class="hist-x" style="opacity:.65">Détail non disponible' +
            (ct.booqable_number ? ' (commande ' + App.h(ct.booqable_number) + ')' : '') + '</div>';

        return '<div class="an-bloc">' +
          '<div class="an-tete"><b>' + App.h(ct.annee) + '</b>' +
          '<span>' + App.h(App.dateLongue(ct.date_evenement)) + '</span>' +
          '<span class="v">' + App.h(App.argent(ct.montant)) + '</span></div>' +
          lignes + '</div>';
      }).join('');
    }
    html += '</div>';

    // ── Ses dossiers, s'il en a ──
    if (d.dossiers.length) {
      html += '<div class="bloc"><div class="bloc-t">Ses dossiers</div>' +
        d.dossiers.map(function (dd) {
          return '<div class="hist-r" data-fiche-client="' + App.h(dd.id) + '" style="cursor:pointer">' +
            '<span class="hist-d">' + App.h(dd.statut) + '</span>' +
            '<span class="hist-x">' + App.h(dd.lead_id) +
            (dd.montant ? ' — <b>' + App.h(App.argentBrut(dd.montant)) + '</b>' : '') +
            (dd.date_evenement ? ' · ' + App.h(App.dateCourte(dd.date_evenement)) : '') +
            '</span></div>';
        }).join('') + '</div>';
    }

    document.getElementById('f-corps').innerHTML = html;
    document.getElementById('f-corps').dataset.client = JSON.stringify({
      nom: c.nom, entreprise: c.entreprise, courriel: c.courriel,
      telephone: c.telephone, annuelle: d.annuelle, contrats: d.contrats,
      resume: d.resume,
    });
  }

  /** Le client en texte, pour Grok. Même esprit que la fiche dossier :
   *  des faits, et l'interdiction explicite d'inventer. */
  function clientEnTexte(x) {
    var L = [];
    L.push('CLIENT DE L\'AN DERNIER — ÉVENOX (location d\'équipement, Sainte-Thérèse)');
    L.push('');
    L.push('Client : ' + x.nom + (x.entreprise ? '  (' + x.entreprise + ')' : ''));
    if (x.courriel) L.push('Courriel : ' + x.courriel);
    if (x.telephone) L.push('Téléphone : ' + x.telephone);
    L.push('');
    if (x.annuelle) {
      L.push('POURQUOI ON LE RELANCE');
      L.push('  Il avait réservé en ' + x.annuelle.annee_precedente + '.');
      L.push('  Événement probable cette année : autour du ' + x.annuelle.date_probable + '.');
      L.push('  Montant de l\'an dernier : ' + Number(x.annuelle.montant_an_dernier || 0).toFixed(2) + ' $');
      L.push('');
    }
    L.push('CE QU\'IL AVAIT LOUÉ');
    if (x.contrats && x.contrats.length) {
      x.contrats.forEach(function (ct) {
        L.push('  ' + ct.annee + '  (événement du ' + String(ct.date_evenement).slice(0, 10) + ')  —  ' +
          Number(ct.montant || 0).toFixed(2) + ' $');
        if (ct.produits && ct.produits.length) {
          ct.produits.forEach(function (p) { L.push('      - ' + p); });
        } else {
          L.push('      (détail des articles non disponible)');
        }
      });
    } else {
      L.push('  Aucun contrat passé enregistré.');
    }
    L.push('');
    L.push('---');
    L.push('Écris-moi un courriel pour le relancer. Français du Québec, ton');
    L.push('direct et chaleureux. Appuie-toi sur ce qu\'il avait pris l\'an');
    L.push('dernier. N\'invente aucun prix, aucune date, aucun article qui ne');
    L.push('figure pas ci-dessus — laisse un [À COMPLÉTER] visible si besoin.');
    return L.join('\n');
  }

  function brancher() {
    document.getElementById('f-corps').addEventListener('click', function (e) {
      var d = e.target.closest('[data-fiche-client]');
      if (d) { App.fiche.ouvrir(d.dataset.ficheClient); return; }

      var g = e.target.closest('[data-grok-client]');
      if (g) {
        var idC = g.dataset.grokClient;
        var libC = g.querySelector('b');
        var avantC = libC ? libC.textContent : '';
        g.disabled = true;
        if (libC) libC.textContent = 'Grok lit la fiche…';
        App.api('/api/client/' + encodeURIComponent(idC) + '/grok', { methode: 'POST' })
          .then(function (r) {
            g.disabled = false;
            if (libC) libC.textContent = avantC;
            App.afficherSuggestionGrok(r);
            App.toast('Suggestion Grok — à relire, rien n\'est parti.');
          })
          .catch(function (err) {
            g.disabled = false;
            if (libC) libC.textContent = avantC;
            var brut = document.getElementById('f-corps').dataset.client;
            var texte = (err.corps && err.corps.texte) ||
              (brut ? clientEnTexte(JSON.parse(brut)) : '');
            if (err.statut === 503 && texte) {
              App.copier(texte)
                .then(function () { App.toast('Grok pas encore branché — fiche copiée.'); })
                .catch(function () { App.toast('Grok pas branché — copie refusée.'); });
              return;
            }
            App.erreur(err);
          });
      }
    });
  }

  return { ouvrir: ouvrir, brancher: brancher, clientEnTexte: clientEnTexte };
})();
