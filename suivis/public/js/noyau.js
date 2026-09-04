'use strict';
/* ============================================================
   NOYAU — ce dont toutes les vues ont besoin.

   · l'appel à l'API, avec ses erreurs VISIBLES à l'écran
   · le toast et ses 5 secondes pour annuler
   · le formatage québécois de l'argent et des dates
   · l'échappement HTML — les noms de clients viennent de la base,
     ils ne doivent jamais pouvoir injecter du code dans la page
   ============================================================ */

var App = window.App = {
  etat: {
    utilisateur: null,
    equipe: [],
    vue: 'jour',
    recherche: '',
  },
};

/* ── Échappement ─────────────────────────────────────────── */
App.h = function (valeur) {
  if (valeur === null || valeur === undefined) return '';
  return String(valeur)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

/* ── Formatage ───────────────────────────────────────────── */
var FMT_ARGENT = new Intl.NumberFormat('fr-CA', {
  style: 'currency', currency: 'CAD', minimumFractionDigits: 2, maximumFractionDigits: 2,
});
var FMT_ARGENT_ROND = new Intl.NumberFormat('fr-CA', {
  style: 'currency', currency: 'CAD', minimumFractionDigits: 0, maximumFractionDigits: 0,
});

/** 0 $ n'existe pas chez Évenox : c'est « non chiffré ». Un montant
 *  absent n'est pas un dossier sans valeur, c'est un prix jamais envoyé. */
App.argent = function (n, rond) {
  var v = Number(n) || 0;
  if (v === 0) return 'non chiffré';
  return (rond ? FMT_ARGENT_ROND : FMT_ARGENT).format(v);
};

App.argentBrut = function (n) {
  return FMT_ARGENT_ROND.format(Number(n) || 0);
};

var MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
var MOIS_COURT = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin',
  'juill.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

/**
 * Découpe une date en [année, mois, jour] SANS passer par new Date()
 * quand c'est une date pure : '2026-08-15' lu par new Date() serait
 * interprété en UTC et reculerait d'une journée au Québec.
 * Un horodatage complet, lui, doit bien être ramené à l'heure locale.
 */
function morceauxDate(valeur) {
  var s = String(valeur);
  if (s.indexOf('T') !== -1 || s.indexOf(' ') !== -1) {
    var d = new Date(s);
    if (isNaN(d)) return null;
    return [d.getFullYear(), d.getMonth() + 1, d.getDate()];
  }
  var p = s.slice(0, 10).split('-');
  if (p.length !== 3) return null;
  return [Number(p[0]), Number(p[1]), Number(p[2])];
}

/** '2026-08-15' → '15 août' */
App.dateCourte = function (iso) {
  if (!iso) return '';
  var m = morceauxDate(iso);
  if (!m) return String(iso);
  return m[2] + ' ' + MOIS_COURT[m[1] - 1];
};

/** '2026-08-15' → '15 août 2026' */
App.dateLongue = function (iso) {
  if (!iso) return '';
  var m = morceauxDate(iso);
  if (!m) return String(iso);
  return m[2] + ' ' + MOIS[m[1] - 1] + ' ' + m[0];
};

App.moisNom = function (index) { return MOIS[index]; };

/** Heure d'un horodatage, format québécois : « 16 h 12 ». */
App.heure = function (iso) {
  if (!iso) return '';
  var d = new Date(iso);
  if (isNaN(d)) return '';
  return d.getHours() + ' h ' + String(d.getMinutes()).padStart(2, '0');
};

/* ── Appels API ──────────────────────────────────────────── */

/**
 * Rend un chemin d'API relatif à la page courante.
 *
 * L'application vit à deux endroits : à la racine sur le poste
 * (http://localhost:3000/) et sous un préfixe sur le serveur
 * (https://evenoxpos.cloud/suivis/). Un appel vers « /api/suivis » part
 * alors à la racine du domaine, où c'est le POS qui répond — il renvoie
 * une redirection vers son propre écran de connexion, et l'application
 * paraît vide sans qu'aucune erreur ne s'affiche.
 *
 * En relatif, « api/suivis » se résout contre la page courante et tombe
 * juste dans les deux cas. Les vues continuent d'écrire « /api/… », c'est
 * ici qu'on retire la barre — un seul endroit à ne pas oublier.
 */
function cheminRelatif(chemin) {
  return String(chemin || '').replace(/^\/+/, '');
}

/**
 * Un seul chemin pour parler au serveur. Toute erreur remonte ici, et
 * toute erreur remontée ici finit par s'afficher. Le silence n'existe pas.
 */
App.api = function (chemin, options) {
  options = options || {};
  var config = {
    method: options.methode || 'GET',
    headers: { 'Accept': 'application/json' },
    credentials: 'same-origin',
  };
  if (options.corps !== undefined) {
    config.headers['Content-Type'] = 'application/json';
    config.body = JSON.stringify(options.corps);
  }

  return fetch(cheminRelatif(chemin), config)
    .then(function (r) {
      if (r.status === 401) {
        window.location.href = 'connexion.html';
        throw new Error('Session expirée');
      }
      return r.text().then(function (texte) {
        var corps = null;
        try { corps = texte ? JSON.parse(texte) : null; } catch (e) { corps = null; }
        if (!r.ok) {
          var msg = (corps && corps.erreur) ||
            'Le serveur a répondu ' + r.status + '. Rien n\'a été modifié.';
          var err = new Error(msg);
          err.statut = r.status;
          throw err;
        }
        App.cacherBandeau();
        return corps;
      });
    })
    .catch(function (err) {
      if (err.message === 'Session expirée') throw err;
      if (!err.statut) {
        // Pas de réponse du tout : réseau coupé, VPS éteint, proxy en panne.
        err.reseau = true;
        err.message = navigator.onLine
          ? 'Le serveur ne répond pas. Rien n\'a été modifié.'
          : 'Vous êtes hors ligne. Les données affichées datent de votre dernière visite.';
      }
      throw err;
    });
};

/* ── Bandeau d'erreur ────────────────────────────────────── */
/* Les éléments sont résolus d'un seul bloc : si on n'en prenait qu'un
   au passage, le suivant resterait nul et le bandeau planterait au
   moment précis où on a besoin de lui. */
var bandeau = null;

function elementsBandeau() {
  if (!bandeau) {
    bandeau = {
      boite: document.getElementById('bandeau'),
      texte: document.getElementById('bandeau-txt'),
      reessayer: document.getElementById('bandeau-reessayer'),
    };
  }
  return bandeau.boite ? bandeau : null;
}

App.montrerBandeau = function (texte, reessai, horsLigne) {
  var el = elementsBandeau();
  if (!el) return;
  el.texte.textContent = texte;
  if (el.reessayer) el.reessayer.style.display = reessai ? '' : 'none';
  el.boite.classList.toggle('hors-ligne', Boolean(horsLigne));
  el.boite.classList.add('on');
  document.body.classList.add('bandeau-ouvert');
};

App.cacherBandeau = function () {
  var el = elementsBandeau();
  if (!el) return;
  el.boite.classList.remove('on');
  document.body.classList.remove('bandeau-ouvert');
};

/** Point d'entrée unique pour montrer une erreur. */
App.erreur = function (err, reessai) {
  console.error(err);
  App.montrerBandeau(err.message || 'Erreur inattendue.', reessai, !navigator.onLine);
};

/** Remplit un conteneur avec un état d'erreur + bouton Réessayer.
 *  Une vue ne reste jamais vide sans explication. */
App.erreurVue = function (conteneur, err, reessai) {
  conteneur.className = '';
  conteneur.innerHTML =
    '<div class="erreur-vue"><h3>Impossible de charger cette vue</h3>' +
    '<p>' + App.h(err.message || 'Erreur inattendue.') + '</p>' +
    '<button class="btn p" type="button" data-reessayer="1">Réessayer</button></div>';
  var btn = conteneur.querySelector('[data-reessayer]');
  if (btn && reessai) btn.addEventListener('click', reessai);
};

App.chargement = function (conteneur, texte) {
  conteneur.className = 'chargement';
  conteneur.textContent = texte || 'Chargement…';
};

/* ── Toast et annulation ─────────────────────────────────── */
var toast = null, toastTxt = null, toastBtn = null, minuteurToast = null;
var actionAnnuler = null;

/**
 * Décision du 13 août : on agit tout de suite, et on donne 5 secondes
 * pour annuler. Les fausses manœuvres sont rares, les confirmations
 * sont quotidiennes.
 */
App.toast = function (texte, annuler) {
  if (!toast) {
    toast = document.getElementById('toast');
    toastTxt = document.getElementById('toast-txt');
    toastBtn = document.getElementById('toast-annuler');
  }
  toastTxt.textContent = texte;
  actionAnnuler = annuler || null;
  toastBtn.style.display = annuler ? '' : 'none';
  toast.classList.add('on');
  clearTimeout(minuteurToast);
  minuteurToast = setTimeout(function () {
    toast.classList.remove('on');
    actionAnnuler = null;
  }, 5000);
};

App.cacherToast = function () {
  if (!toast) toast = document.getElementById('toast');
  if (toast) toast.classList.remove('on');
  clearTimeout(minuteurToast);
  actionAnnuler = null;
};

App.brancherToast = function () {
  var btn = document.getElementById('toast-annuler');
  btn.addEventListener('click', function () {
    var action = actionAnnuler;
    App.cacherToast();
    if (action) action();
  });
};

/**
 * Annulation côté serveur. Le dossier reprend exactement l'état qu'il
 * avait, et la ligne du journal disparaît.
 */
App.annulerAction = function (annulationId, apres) {
  return App.api('/api/dossier/annuler', {
    methode: 'POST',
    corps: { annulation_id: annulationId },
  })
    .then(function (r) {
      App.toast(r.message || 'Annulé.');
      if (apres) apres();
    })
    .catch(function (err) { App.erreur(err); });
};

/* ── Fenêtres ────────────────────────────────────────────── */
App.ouvrirModal = function (id) {
  document.getElementById(id).classList.add('on');
};
App.fermerModal = function (id) {
  document.getElementById(id).classList.remove('on');
};

/** Confirmation avant action — réservée aux gestes irréversibles côté
 *  client (Booqable envoie un courriel, l'inventaire se bloque). */
App.confirmer = function (titre, texte, quandOui) {
  document.getElementById('cf-titre').textContent = titre;
  document.getElementById('cf-texte').innerHTML = texte;
  var oui = document.getElementById('cf-oui');
  var neuf = oui.cloneNode(true);
  oui.parentNode.replaceChild(neuf, oui);
  neuf.addEventListener('click', function () {
    App.fermerModal('modal-confirme');
    quandOui();
  });
  App.ouvrirModal('modal-confirme');
};

/**
 * Une liste de choix dans une fenêtre — « qui rappeler ce jour-là ».
 * Réutilise la fenêtre des motifs : même apparence, mêmes gestes.
 */
App.ouvrirListe = function (titre, sousTitre, html, quandChoisi, selecteur) {
  var fen = document.getElementById('modal-liste');
  document.getElementById('li-titre').textContent = titre;
  document.getElementById('li-texte').textContent = sousTitre || '';
  var corps = document.getElementById('li-corps');
  corps.innerHTML = html;

  // On remplace le conteneur pour repartir sans les écouteurs précédents :
  // sans ça, rouvrir la liste déclencherait aussi les choix d'avant.
  var neuf = corps.cloneNode(true);
  corps.parentNode.replaceChild(neuf, corps);
  neuf.id = 'li-corps';
  neuf.addEventListener('click', function (e) {
    var cible = e.target.closest(selecteur);
    if (!cible) return;
    App.fermerModal('modal-liste');
    quandChoisi(cible);
  });

  App.ouvrirModal('modal-liste');
  return fen;
};

/**
 * Copie dans le presse-papiers, avec repli sur l'ancienne méthode.
 * navigator.clipboard n'existe qu'en contexte sécurisé : présent sur
 * evenoxpos.cloud (HTTPS) et sur localhost, absent partout ailleurs.
 */
App.copier = function (texte) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(texte);
  }
  return new Promise(function (resoudre, rejeter) {
    var z = document.createElement('textarea');
    z.value = texte;
    z.setAttribute('readonly', '');
    z.style.position = 'fixed';
    z.style.opacity = '0';
    document.body.appendChild(z);
    z.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (_) { ok = false; }
    document.body.removeChild(z);
    ok ? resoudre() : rejeter(new Error('copie refusée'));
  });
};

/* ── Divers ──────────────────────────────────────────────── */

/** Retarde un enregistrement continu (zone de note). */
App.attendre = function (fn, delai) {
  var minuteur = null;
  return function () {
    var args = arguments, self = this;
    clearTimeout(minuteur);
    minuteur = setTimeout(function () { fn.apply(self, args); }, delai);
  };
};

/** Initiales pour la pastille du rail. */
App.initiales = function (nom) {
  return String(nom || '?')
    .split(/\s+/).slice(0, 2)
    .map(function (m) { return m.charAt(0).toUpperCase(); })
    .join('');
};

/** Lien Gmail vers un fil existant — sur cellulaire comme sur poste. */
App.lienGmail = function (threadId, courriel) {
  if (threadId) return 'https://mail.google.com/mail/u/0/#all/' + encodeURIComponent(threadId);
  if (courriel) return 'https://mail.google.com/mail/u/0/#search/' + encodeURIComponent(courriel);
  return null;
};
