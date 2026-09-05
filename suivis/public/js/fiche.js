'use strict';
/* ============================================================
   FICHE LATÉRALE — ouvrable depuis n'importe quel onglet.

   Huit blocs, dans l'ordre validé :
   ce que le client veut · la discussion · déjà fait · infos manquantes ·
   matériel · reste à payer · raccourcis · historique.
   ============================================================ */

App.fiche = (function () {

  var courant = null;
  var toutLeFil = false;
  // La dernière réponse du serveur, gardée telle quelle : c'est elle qui
  // sert à composer le dossier texte pour Grok, sans refaire un appel.
  var donnees = null;

  function ouvrir(id) {
    courant = id;
    toutLeFil = false;

    document.getElementById('voile').classList.add('on');
    document.getElementById('fiche').classList.add('on');
    document.getElementById('f-nom').textContent = 'Chargement…';
    document.getElementById('f-org').textContent = '';
    document.getElementById('f-mnt').textContent = '';
    document.getElementById('f-corps').innerHTML =
      '<div class="chargement">Ouverture du dossier…</div>';

    return App.api('/api/dossier/' + encodeURIComponent(id))
      .then(dessiner)
      .catch(function (err) {
        document.getElementById('f-nom').textContent = 'Dossier indisponible';
        var corps = document.getElementById('f-corps');
        App.erreurVue(corps, err, function () { ouvrir(id); });
      });
  }

  function fermer() {
    document.getElementById('voile').classList.remove('on');
    document.getElementById('fiche').classList.remove('on');
    courant = null;
  }

  function dessiner(d) {
    donnees = d;
    var dos = d.dossier;

    document.getElementById('f-nom').textContent = dos.nom;
    document.getElementById('f-org').textContent =
      dos.entreprise || [dos.statut, dos.tier].filter(Boolean).join(' · ');
    document.getElementById('f-mnt').textContent = App.argent(dos.montant);

    var html = '';

    // ── Avertir sans bloquer : 2 000 $ et plus ──
    if (dos.montant >= 2000) {
      html += '<div class="gros"><b>Plus de 2 000 $ — appelez d\'abord.</b> ' +
        'Sur cette tranche, six dossiers sur six ont été perdus. ' +
        'Le courriel transporte l\'information, le téléphone ferme.</div>';
    }
    if (dos.desabonne) {
      html += '<div class="gros"><b>Client désabonné (LCAP).</b> ' +
        'Aucun courriel automatisé ne peut lui être envoyé. Vous pouvez ' +
        'toujours lui écrire ou l\'appeler personnellement.</div>';
    }
    if (dos.courriel_invalide) {
      html += '<div class="gros"><b>Adresse courriel invalide</b> — les envois ' +
        'précédents ont rebondi. Rien ne lui arrive par courriel.</div>';
    }
    if (dos.pause_auto) {
      html += '<div class="gros"><b>Label Gmail Pause-Auto.</b> ' +
        'L\'automatisation ne touche plus jamais ce fil.</div>';
    }

    // ── Prochaine action — ce qui manque le plus souvent dans le pipeline ──
    if (dos.prochaine_action || dos.alerte) {
      html += '<div class="bloc"><div class="bloc-t">Prochaine action</div>' +
        '<div class="mat-r"><span class="p">' +
        App.h(dos.prochaine_action || dos.alerte) + '</span><span class="v">' +
        App.h(dos.prochaine_relance ? App.dateLongue(dos.prochaine_relance) : 'à dater') +
        '</span></div>';
      if (dos.pipeline === 'renouvellement') {
        html += '<div class="rappel">Renouvellement — même client, année suivante. ' +
          'Le délai de relance est celui de <b>ce</b> client, pas une règle générale.</div>';
      } else if (dos.pipeline === 'post_evenement') {
        html += '<div class="rappel">Suivi post-événement (J+7) — merci, avis, ' +
          'et prise de date pour l\'an prochain.</div>';
      } else if (dos.alerte === 'Sans prochaine action') {
        html += '<div class="rappel">Aucune prochaine action n\'est datée. ' +
          'Sans ça le dossier disparaît de la liste du matin.</div>';
      } else if (dos.alerte === 'Relance échue') {
        html += '<div class="rappel">La relance prévue est échue. C\'est ' +
          'elle qui devrait être en tête de la liste du jour.</div>';
      }
      html += '</div>';
    }

    // ── Ce que le client veut ──
    html += '<div class="bloc"><div class="bloc-t">Ce que le client veut</div><ul class="veut">' +
      d.veut.map(function (v) { return '<li>' + v + '</li>'; }).join('') +
      '</ul></div>';

    // ── Discussion ──
    html += blocDiscussion(d);

    // ── Déjà fait ──
    var faits = d.adm.filter(function (e) { return e[1]; }).length;
    html += '<div class="bloc"><div class="bloc-t">Déjà fait — ' + faits +
      ' étape' + (faits > 1 ? 's' : '') + ' sur ' + d.adm.length + '</div>' +
      d.adm.map(function (e) {
        return '<div class="etape ' + (e[1] ? 'ok' : 'no') + '"><span class="puce">&#10003;</span>' +
          App.h(e[0]) + '<span class="qd">' +
          App.h(e[2] ? App.dateCourte(e[2]) : (e[1] ? 'fait' : 'à faire')) + '</span></div>';
      }).join('') + '</div>';

    // ── Infos au dossier ──
    var mq = d.infos.manquantes;
    html += '<div class="bloc"><div class="bloc-t">Infos au dossier — ' +
      (mq.length ? mq.length + ' manquante' + (mq.length > 1 ? 's' : '') : 'complètes') + '</div>' +
      mq.map(function (m) { return '<span class="mq">' + App.h(m) + '</span>'; }).join('') +
      d.infos.presentes.map(function (m) { return '<span class="mq ok">' + App.h(m) + '</span>'; }).join('') +
      '</div>';

    // ── Matériel ──
    // Les lignes viennent de Booqable, rafraîchies à l'ouverture de la
    // fiche. La livraison en fait partie : chez Booqable c'est une ligne
    // de commande, pas une case à cocher.
    html += '<div class="bloc"><div class="bloc-t">Matériel réservé</div>';
    if (d.materiel_avertissement) {
      html += '<div class="mat-avert">' + App.h(d.materiel_avertissement) + '</div>';
    }
    if (d.materiel.length) {
      html += d.materiel.map(function (m) {
        return '<div class="mat-r"><span class="p">' +
          (m.quantite ? '<span class="q">' + App.h(m.quantite) + '</span>' : '') +
          App.h(m.produit) + '</span><span class="v">' +
          App.h(m.montant ? App.argent(m.montant) : '—') + '</span></div>';
      }).join('');

      // Dire la livraison explicitement : c'est la première question qu'on
      // se pose avant d'écrire, et la chercher dans la liste fait perdre
      // du temps à chaque dossier.
      if (d.livraison && d.livraison.incluse === true) {
        html += '<div class="liv oui">Livraison incluse' +
          (d.livraison.montant ? ' — ' + App.h(App.argent(d.livraison.montant)) : '') + '</div>';
      } else if (d.livraison && d.livraison.incluse === false) {
        html += '<div class="liv non">Aucune livraison dans la commande — le client ramasse.</div>';
      }
    } else if (dos.booqable_orders && dos.booqable_orders.length) {
      // Aucun prix inventé : si les lignes ne sont pas synchronisées,
      // on renvoie vers Booqable plutôt que d'afficher une estimation.
      html += '<div class="mat-r"><span class="p">Détail dans Booqable</span>' +
        '<span class="v">' + App.h(dos.booqable_number || dos.booqable_orders.join(', ')) + '</span></div>';
    } else {
      html += '<div class="mat-r"><span class="p">Aucune commande Booqable rattachée</span>' +
        '<span class="v">—</span></div>';
    }
    if (dos.booqable_orders && dos.booqable_orders.length) {
      html += '<button class="plus" type="button" data-resync="' + App.h(dos.id) + '">' +
        'Recharger depuis Booqable</button>';
    }
    html += '</div>';

    // ── Reste à payer ──
    html += '<div class="bloc"><div class="bloc-t">Reste à payer</div>' +
      '<div class="pay-r"><span class="l">Total</span><span class="v">' +
        App.h(App.argent(d.paiement.total)) + '</span></div>' +
      '<div class="pay-r"><span class="l">Encaissé</span><span class="v">' +
        App.h(App.argentBrut(d.paiement.encaisse)) + '</span></div>' +
      '<div class="pay-bar"><div style="width:' + d.paiement.pct + '%"></div></div>' +
      '<div class="pay-r tot"><span class="l">Solde dû</span><span class="v">' +
        App.h(d.paiement.total > 0 ? App.argent(d.paiement.solde) : '—') + '</span></div>' +
      '<div style="font-size:.8rem;color:var(--faint);margin-top:7px">' +
        App.h(noteDePaiement(dos, d.paiement)) + '</div></div>';

    // ── Assignation ──
    html += '<div class="bloc"><div class="bloc-t">Assigné à</div><div class="assign">' +
      '<select data-assigner="' + App.h(dos.id) + '">' +
      '<option value="">Personne</option>' +
      App.etat.equipe.map(function (u) {
        return '<option value="' + App.h(u.nom) + '"' +
          (u.nom === dos.assigne_a ? ' selected' : '') + '>' + App.h(u.nom) + '</option>';
      }).join('') +
      '</select></div></div>';

    // ── Raccourcis ──
    html += blocRaccourcis(dos);

    // ── Historique ──
    if (d.historique.length || d.contrats_passes.length) {
      html += '<div class="bloc"><div class="bloc-t">Historique</div>' +
        d.historique.map(function (h) {
          return '<div class="hist-r"><span class="hist-d">' +
            App.h(App.dateCourte(h.cree_le)) + '</span><span class="hist-x">' +
            App.h(h.resume) + (h.par && h.par !== 'auto' ? ' <b>· ' + App.h(h.par) + '</b>' : '') +
            '</span></div>';
        }).join('') +
        d.contrats_passes.map(function (c) {
          return '<div class="hist-r"><span class="hist-d">' + App.h(c.annee) +
            '</span><span class="hist-x">Contrat du ' + App.h(App.dateCourte(c.date_evenement)) +
            ' — <b>' + App.h(App.argent(c.montant)) + '</b></span></div>';
        }).join('') +
        '</div>';
    }

    document.getElementById('f-corps').innerHTML = html;

    // Remplir la barre d'action collante (hors #f-corps, mais dans #fiche).
    var barre = document.getElementById('fiche-bar');
    if (barre) { barre.innerHTML = barreCollante(dos); barre.hidden = !barre.innerHTML; }
  }

  function noteDePaiement(dos, pay) {
    if (pay.total === 0) return 'Aucun prix n\'a jamais été cité sur ce dossier.';
    if (pay.encaisse === 0) return 'Dépôt de 20 % attendu — rien n\'est bloqué avant.';
    if (pay.solde === 0) return 'Payé au complet.';
    return 'Solde payable avant la remise du matériel.';
  }

  function blocDiscussion(d) {
    var msgs = d.discussion.map(function (m) {
      return {
        classe: m.direction === 'entrant' ? 'cli' : 'moi',
        qui: m.direction === 'entrant' ? 'Client' : (m.automatique ? 'Évenox (auto)' : 'Évenox'),
        quand: App.dateCourte(m.envoye_le),
        texte: (m.corps || m.sujet || '').slice(0, 900),
      };
    });

    // Ligne « système » : le silence est une information, pas un vide.
    if (d.dossier.attend_qui === 'evenox') {
      msgs.push({
        classe: 'rien',
        qui: 'Système',
        quand: '',
        texte: 'Le client attend VOTRE réponse' +
          (d.dossier.dernier_contact_le ? ' depuis le ' + App.dateLongue(d.dossier.dernier_contact_le) : '') + '.',
      });
    } else if (!msgs.length) {
      msgs.push({
        classe: 'rien', qui: 'Système', quand: '',
        texte: 'Aucun échange enregistré pour ce dossier.',
      });
    }

    var visibles = toutLeFil ? msgs : msgs.slice(-3);

    return '<div class="bloc"><div class="bloc-t">Discussion — ' + msgs.length +
      ' échange' + (msgs.length > 1 ? 's' : '') + '</div><div id="fil">' +
      visibles.map(function (m) {
        return '<div class="msg ' + m.classe + '"><div class="qui">' + App.h(m.qui) +
          '<span class="d">' + App.h(m.quand) + '</span></div>' + App.h(m.texte) + '</div>';
      }).join('') + '</div>' +
      (!toutLeFil && msgs.length > 3
        ? '<button class="plus" type="button" data-tout-le-fil="1">Voir les ' + msgs.length + ' échanges</button>'
        : '') +
      '</div>';
  }

  // Barre d'action collante : les 3 gestes les plus frequents, toujours
  // visibles en bas de la fiche pendant qu'on fait defiler.
  function barreCollante(dos) {
    var lienFil = App.lienGmail(dos.gmail_thread_id, dos.courriel);
    var b = [];
    if (dos.telephone) {
      b.push('<a class="fbtn p" href="tel:' + App.h(dos.telephone.replace(/[^0-9+]/g, '')) + '">Appeler</a>');
    }
    if (lienFil) {
      b.push('<a class="fbtn" href="' + App.h(lienFil) + '" target="_blank" rel="noopener">Ouvrir le fil</a>');
    }
    b.push('<button class="fbtn" type="button" data-brouillon="' + App.h(dos.id) + '">Réponse</button>');
    return b.join('');
  }

  function blocRaccourcis(dos) {
    var lienFil = App.lienGmail(dos.gmail_thread_id, dos.courriel);
    var boutons = [];

    if (dos.telephone) {
      boutons.push('<a class="rc" href="tel:' + App.h(dos.telephone.replace(/[^0-9+]/g, '')) + '">' +
        '<b>Appeler</b><i>' + App.h(dos.telephone) + '</i></a>');
    }
    if (lienFil) {
      boutons.push('<a class="rc" href="' + App.h(lienFil) + '" target="_blank" rel="noopener">' +
        '<b>Ouvrir le fil</b><i>Tous les courriels dans Gmail</i></a>');
    }
    boutons.push('<button class="rc" type="button" data-brouillon="' + App.h(dos.id) + '">' +
      '<b>Réponse pré-écrite</b><i>Brouillon Gmail, rien ne part</i></button>');
    if (dos.booqable_status === 'draft' &&
        (dos.montant_paye > 0 || dos.depot_paye > 0)) {
      boutons.push('<button class="rc" type="button" data-reserver-fiche="' + App.h(dos.id) + '" ' +
        'data-nom="' + App.h(dos.nom) + '" data-num="' + App.h(dos.booqable_number || '') + '">' +
        '<b>Passer en réservée</b><i>Bloque l\'inventaire — confirmation</i></button>');
    }
    // « Préparer pour Grok » — met un dossier lisible sur le presse-papiers.
    // Volontairement une COPIE et non un envoi : Grok n'a pas d'API
    // branchable ici, et un presse-papiers marche avec n'importe quelle IA,
    // sans clé, sans dépendance, sans qu'aucune donnée client parte vers un
    // service qu'on n'a pas choisi. C'est vous qui collez, donc vous voyez
    // exactement ce qui sort.
    boutons.push('<button class="rc" type="button" data-grok="' + App.h(dos.id) + '">' +
      '<b>Préparer pour Grok</b><i>Copie le dossier, prêt à coller</i></button>');

    boutons.push('<button class="rc" type="button" data-fermer-dossier="' + App.h(dos.id) + '">' +
      '<b>Classer le dossier</b><i>Choisir le motif de fermeture</i></button>');

    return '<div class="bloc"><div class="bloc-t">Raccourcis</div><div class="racc">' +
      boutons.join('') + '</div></div>';
  }

  /* ── Le dossier en texte, pour Grok ─────────────────────────
     Ce que l'IA reçoit détermine ce qu'elle écrit. Trois principes :

       · du FAIT, pas de l'interprétation. On donne les dates, les
         montants, ce qui a été dit — pas « le client semble hésitant ».
       · ce qui MANQUE est dit explicitement. Sans ça, l'IA invente une
         liste de matériel ou un prix, et vous l'envoyez sans le voir.
       · aucune consigne de ton imposée : c'est vous qui direz à Grok
         quoi en faire. Le bouton prépare la matière, pas le message.

     On enlève le HTML des champs `veut` : ils portent des <b> pour
     l'affichage, qui n'ont rien à faire dans un texte à coller. */
  function sansBalises(s) {
    return String(s == null ? '' : s)
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .trim();
  }

  function dossierEnTexte(d) {
    var dos = d.dossier, L = [];
    var ligne = function (t) { L.push(t); };

    ligne('DOSSIER CLIENT — ÉVENOX (location d\'équipement, Sainte-Thérèse)');
    ligne('');
    ligne('Client : ' + dos.nom + (dos.entreprise ? '  (' + dos.entreprise + ')' : ''));
    if (dos.courriel)  ligne('Courriel : ' + dos.courriel);
    if (dos.telephone) ligne('Téléphone : ' + dos.telephone);
    if (dos.date_evenement) ligne('Date de l\'événement : ' + dos.date_evenement);
    if (dos.lieu)      ligne('Lieu : ' + dos.lieu);
    if (dos.nb_invites) ligne('Nombre d\'invités : ' + dos.nb_invites);
    ligne('Statut du dossier : ' + (dos.statut || 'inconnu'));
    ligne('');

    ligne('CE QU\'IL DEMANDE');
    // La ligne « Détail du matériel dans Booqable : <uuid> » est un renvoi
    // pour l'écran, pas une information. Dans un texte destiné à une IA,
    // elle n'apporte qu'un identifiant illisible — et elle contredit la
    // section MATÉRIEL, qui dit justement qu'on ne connaît pas les articles.
    var demandes = (d.veut || []).map(sansBalises)
      .filter(function (v) { return v && v.indexOf('Détail du matériel dans Booqable') === -1; });
    if (demandes.length) demandes.forEach(function (v) { ligne('  - ' + v); });
    else ligne('  (rien de noté)');
    ligne('');

    ligne('CE QU\'IL A COMMANDÉ');
    if (d.materiel && d.materiel.length) {
      d.materiel.forEach(function (m) {
        ligne('  - ' + (m.quantite ? Number(m.quantite) + ' × ' : '') + m.produit +
          (m.montant ? '  —  ' + Number(m.montant).toFixed(2) + ' $' : ''));
      });
      ligne('');
      if (d.livraison && d.livraison.incluse === true) {
        ligne('  LIVRAISON : incluse dans la commande' +
          (d.livraison.montant ? ' (' + Number(d.livraison.montant).toFixed(2) + ' $)' : '') + '.');
      } else if (d.livraison && d.livraison.incluse === false) {
        ligne('  LIVRAISON : AUCUNE dans la commande — le client vient chercher');
        ligne('  et rapporter le matériel lui-même.');
      }
    } else {
      // Dire le trou plutôt que laisser l'IA le combler.
      ligne('  Le détail des articles n\'est PAS disponible dans cette fiche.');
      ligne('  N\'invente aucun article, aucune quantité, et ne dis rien');
      ligne('  sur la livraison — on ne sait pas si elle est incluse.');
    }
    ligne('');

    if (d.paiement) {
      ligne('ARGENT');
      ligne('  Total soumis : ' + Number(d.paiement.total || 0).toFixed(2) + ' $');
      ligne('  Déjà encaissé : ' + Number(d.paiement.encaisse || 0).toFixed(2) + ' $');
      ligne('  Reste à payer : ' + Number(d.paiement.solde || 0).toFixed(2) + ' $');
      ligne('');
    }

    ligne('LA DISCUSSION JUSQU\'ICI');
    if (d.discussion && d.discussion.length) {
      d.discussion.forEach(function (m) {
        var qui = m.direction === 'entrant' ? 'LUI' : 'NOUS';
        var quand = m.envoye_le ? String(m.envoye_le).slice(0, 10) : '';
        ligne('  [' + quand + '] ' + qui + (m.automatique ? ' (automatique)' : '') + ' : ' +
          sansBalises(m.sujet ? m.sujet + ' — ' + (m.corps || '') : (m.corps || '')).slice(0, 600));
      });
    } else {
      ligne('  Aucun échange enregistré.');
    }
    ligne('');

    // `adm` est un tableau de triplets [libellé, fait, quand] — c'est la
    // forme que le serveur renvoie, pas des objets.
    ligne('OÙ EN EST LE DOSSIER');
    if (d.adm && d.adm.length) {
      d.adm.forEach(function (e) {
        ligne('  ' + (e[1] ? '[fait]' : '[pas fait]') + ' ' + e[0] +
          (e[2] ? '  (' + String(e[2]).slice(0, 10) + ')' : ''));
      });
    } else {
      ligne('  (rien de noté)');
    }
    ligne('');

    if (d.historique && d.historique.length) {
      ligne('DERNIÈRES ACTIONS');
      d.historique.slice(0, 8).forEach(function (h) {
        ligne('  - ' + String(h.cree_le || '').slice(0, 10) + ' : ' + sansBalises(h.resume || ''));
      });
      ligne('');
    }

    if (d.infos && d.infos.manquantes && d.infos.manquantes.length) {
      ligne('INFORMATIONS QU\'ON N\'A PAS ENCORE');
      d.infos.manquantes.forEach(function (m) { ligne('  - ' + m); });
      ligne('');
    }

    if (d.contrats_passes && d.contrats_passes.length) {
      ligne('IL A DÉJÀ LOUÉ CHEZ NOUS');
      d.contrats_passes.forEach(function (c) {
        ligne('  - ' + c.annee + ' : ' + Number(c.montant || 0).toFixed(2) + ' $' +
          (c.date_evenement ? '  (événement du ' + String(c.date_evenement).slice(0, 10) + ')' : ''));
      });
      ligne('');
    }

    if (dos.notes) { ligne('MES NOTES'); ligne('  ' + sansBalises(dos.notes)); ligne(''); }

    ligne('---');
    ligne('Écris-moi un courriel à ce client. Réponds en français du Québec,');
    ligne('ton direct et chaleureux, sans jargon. N\'invente aucun prix, aucune');
    ligne('date et aucun article qui ne figure pas ci-dessus — si une');
    ligne('information manque, laisse un [À COMPLÉTER] visible.');

    return L.join('\n');
  }

  /* ── Branchements ───────────────────────────────────────── */
  function brancher() {
    document.getElementById('fiche-fermer').addEventListener('click', fermer);
    document.getElementById('voile').addEventListener('click', fermer);

    document.getElementById('fiche').addEventListener('click', function (e) {
      var cible;

      cible = e.target.closest('[data-tout-le-fil]');
      if (cible) {
        toutLeFil = true;
        ouvrir(courant);
        return;
      }

      cible = e.target.closest('[data-brouillon]');
      if (cible) {
        cible.disabled = true;
        App.api('/api/dossier/' + encodeURIComponent(cible.dataset.brouillon) + '/brouillon', {
          methode: 'POST',
        })
          .then(function (r) {
            App.toast(r.message);
            cible.disabled = false;
            if (r.courriel && r.courriel.texte) {
              var zone = document.getElementById('f-apercu-mail');
              if (!zone) {
                zone = document.createElement('div');
                zone.id = 'f-apercu-mail';
                zone.className = 'seq-apercu';
                var corpsF = document.getElementById('f-corps');
                if (corpsF) corpsF.insertBefore(zone, corpsF.firstChild);
              }
              zone.hidden = false;
              zone.innerHTML = '<div class="seq-ap-k">Brouillon ' + App.h(r.courriel.etape) +
                ' — rien n\'est parti</div>' +
                '<div class="seq-ap-s">' + App.h(r.courriel.sujet) + '</div>' +
                '<pre>' + App.h(r.courriel.texte) + '</pre>';
              zone.scrollIntoView({ block: 'nearest' });
            }
          })
          .catch(function (err) {
            cible.disabled = false;
            App.erreur(err);
            App.toast('Aucun brouillon créé — ' + err.message);
          });
        return;
      }

      cible = e.target.closest('[data-reserver-fiche]');
      if (cible) {
        var id = cible.dataset.reserverFiche;
        App.confirmer(
          'Passer la commande en réservée ?',
          'Cette action <b>envoie un courriel automatique au client</b> et ' +
          '<b>bloque l\'inventaire</b> pour la date.<br><br>Dossier : <b>' +
          App.h(cible.dataset.nom) + '</b>' +
          (cible.dataset.num ? ' · commande ' + App.h(cible.dataset.num) : ''),
          function () {
            App.api('/api/dossier/' + encodeURIComponent(id) + '/reserver', {
              methode: 'POST', corps: { confirme: true },
            })
              .then(function (r) { App.toast(r.message); ouvrir(id); App.rafraichirEtat(); })
              .catch(function (err) { App.erreur(err); App.toast('Commande inchangée — ' + err.message); });
          }
        );
        return;
      }

      cible = e.target.closest('[data-resync]');
      if (cible) {
        cible.disabled = true;
        cible.textContent = 'Lecture de Booqable…';
        App.api('/api/dossier/' + encodeURIComponent(cible.dataset.resync) + '/materiel', {
          methode: 'POST',
        })
          .then(function (r) { App.toast(r.message); ouvrir(courant); })
          .catch(function (err) {
            App.erreur(err);
            App.toast('Articles inchangés — ' + err.message);
            cible.disabled = false;
            cible.textContent = 'Recharger depuis Booqable';
          });
        return;
      }

      cible = e.target.closest('[data-grok]');
      if (cible) {
        if (!donnees) { App.toast('Dossier pas encore chargé.'); return; }
        var texte = dossierEnTexte(donnees);
        App.copier(texte)
          .then(function () {
            App.toast('Dossier copié — collez-le dans Grok.');
          })
          .catch(function () {
            // navigator.clipboard échoue hors HTTPS et quand l'onglet n'a
            // pas le focus. On ne laisse pas l'utilisateur devant un bouton
            // muet : on lui montre le texte, à lui de le sélectionner.
            App.toast('Copie refusée par le navigateur — le texte s\'affiche.');
            var f = document.createElement('textarea');
            f.className = 'grok-repli';
            f.readOnly = true;
            f.value = texte;
            var bloc = document.createElement('div');
            bloc.className = 'bloc';
            bloc.innerHTML = '<div class="bloc-t">À copier pour Grok</div>';
            bloc.appendChild(f);
            document.getElementById('f-corps').prepend(bloc);
            f.focus(); f.select();
          });
        return;
      }

      cible = e.target.closest('[data-fermer-dossier]');
      if (cible) {
        var idF = cible.dataset.fermerDossier;
        App.ouvrirMotifs(idF, function (dossierId, motif) {
          App.api('/api/dossier/' + encodeURIComponent(dossierId) + '/fermer', {
            methode: 'POST', corps: { motif: motif },
          })
            .then(function (r) {
              App.toast(r.message, r.annulation_id
                ? function () { App.annulerAction(r.annulation_id, function () { ouvrir(dossierId); }); }
                : null);
              fermer();
              App.rechargerVueCourante();
            })
            .catch(function (err) { App.erreur(err); App.toast('Dossier inchangé — ' + err.message); });
        });
        return;
      }
    });

    document.getElementById('f-corps').addEventListener('change', function (e) {
      var sel = e.target.closest('[data-assigner]');
      if (!sel) return;
      App.api('/api/dossier/' + encodeURIComponent(sel.dataset.assigner) + '/assigner', {
        methode: 'PUT', corps: { utilisateur: sel.value },
      })
        .then(function (r) { App.toast(r.message); })
        .catch(function (err) { App.erreur(err); App.toast('Assignation inchangée — ' + err.message); });
    });
  }

  // dossierEnTexte est exposé pour pouvoir le vérifier contre de vraies
  // fiches sans passer par le navigateur — c'est ce texte que l'IA lit,
  // une erreur dedans se retrouverait dans un courriel à un client.
  return {
    ouvrir: ouvrir, fermer: fermer, brancher: brancher,
    dossierEnTexte: dossierEnTexte,
  };
})();
