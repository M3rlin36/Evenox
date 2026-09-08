'use strict';
/* ============================================================
   SERVICE WORKER — minimal, et volontairement prudent.

   Ce qu'il fait :
     · garde la coquille (HTML, CSS, JS, icônes) pour que l'app
       s'ouvre depuis l'écran d'accueil même dans un sous-sol
       sans réseau ;
     · sert la coquille quand la navigation échoue, plutôt qu'un
       écran blanc ou le dinosaure du navigateur.

   Ce qu'il ne fait PAS, et c'est délibéré :
     · il ne met JAMAIS /api/* en cache. Une liste de suivis
       périmée ferait rappeler un client qui a déjà payé. Hors
       ligne, l'app affiche un bandeau plutôt qu'une vieille liste.
     · il ne met jamais en cache une requête d'écriture.

   Pour forcer la mise à jour chez tout le monde : changer VERSION.

   ⚠ 13 août 2026 — la stratégie a changé, et voici pourquoi.
   L'ancienne version répondait « cache d'abord, réseau ensuite » pour
   les fichiers de la coquille. Conséquence : après un déploiement, le
   téléphone continuait d'afficher l'ANCIENNE interface, parfois pendant
   des jours, pendant que la nouvelle se rangeait sagement dans le cache
   pour « la prochaine fois ». Alexandre a vu exactement ça : l'interface
   refaite était en ligne, son téléphone lui rejouait la précédente.
   Maintenant c'est « réseau d'abord, cache en secours après 3 s » : une
   correction se voit tout de suite, et l'entrepôt sans réseau garde son
   application qui s'ouvre.
   ============================================================ */

// Le gabarit ci-dessous est remplacé à la volée par le serveur (voir
// index.js) par une empreinte du contenu réel de public/. Pas une
// coquetterie :
// tant que ce numéro était écrit à la main, il suffisait d'oublier de le
// changer après un déploiement pour que les téléphones continuent de
// servir l'ancienne interface depuis leur cache — sans aucun signe que
// quelque chose clochait. C'est arrivé deux fois les 13 et 14 août 2026.
// Maintenant, si un fichier change, l'empreinte change, et le cache est
// purgé. Personne n'a plus rien à penser.
var VERSION = 'evenox-suivis-2c5c644f1ec1';

// Au-delà de ce délai, on considère que le réseau ne répondra pas et on
// sert ce qu'on a. 3 s : assez pour une connexion lente, assez court pour
// ne pas donner l'impression que l'application est figée.
var DELAI_RESEAU = 3000;

var COQUILLE = [
  './',
  'index.html',
  'connexion.html',
  'manifest.json',
  'icone.svg',
  'icone-pleine.svg',
  'css/app.css',
  'js/noyau.js',
  'js/fiche.js',
  'js/vue-suivis.js',
  'js/vue-calendrier.js',
  'js/vue-journal.js',
  'js/vue-sequence.js',
  'js/vue-pipeline.js',
  'js/vue-closing.js',
  'js/vue-clients.js',
  'js/app.js',
  'js/connexion.js',
  'js/vue-client.js',
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSION)
      .then(function (cache) { return cache.addAll(COQUILLE); })
      // Un fichier absent ne doit pas empêcher l'installation.
      .catch(function (err) { console.warn('[sw] mise en cache partielle :', err); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (cles) {
        return Promise.all(cles.map(function (c) {
          if (c !== VERSION) return caches.delete(c);
        }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;

  // Jamais de cache sur autre chose qu'une lecture.
  if (req.method !== 'GET') return;

  var url = new URL(req.url);

  // Même origine seulement : les polices Google passent directement.
  if (url.origin !== self.location.origin) return;

  // L'API n'est JAMAIS mise en cache. Point.
  //
  // Le test portait sur « commence par /api/ ». Servie sous un préfixe
  // (/suivis/api/…), l'API n'était plus reconnue et se retrouvait mise
  // en cache — une liste de suivis périmée ferait rappeler un client qui
  // a déjà payé. On cherche donc le segment n'importe où dans le chemin.
  if (url.pathname.indexOf('/api/') !== -1) return;

  // Navigation : réseau d'abord, coquille en secours.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).catch(function () {
        return caches.match('index.html').then(function (r) {
          return r || caches.match('./');
        });
      })
    );
    return;
  }

  // Ressources statiques : RÉSEAU d'abord, cache en secours.
  //
  // L'ordre compte. « enCache || reseau » servait le vieux fichier dès
  // qu'il y en avait un en cache — c'est ce qui empêchait les mises à
  // jour d'arriver. Ici on tente le réseau, on range la réponse fraîche,
  // et on ne retombe sur le cache que si le réseau échoue ou traîne.
  e.respondWith(
    reseauDabord(req).catch(function () {
      return caches.match(req).then(function (enCache) {
        // Rien en cache non plus : on laisse remonter l'échec, le
        // navigateur affichera son erreur habituelle.
        if (!enCache) throw new Error('hors ligne et absent du cache');
        return enCache;
      });
    })
  );
});

/** Va chercher sur le réseau, met à jour le cache, abandonne après DELAI_RESEAU. */
function reseauDabord(req) {
  return new Promise(function (resoudre, rejeter) {
    var fini = false;
    var minuterie = setTimeout(function () {
      if (!fini) { fini = true; rejeter(new Error('réseau trop lent')); }
    }, DELAI_RESEAU);

    fetch(req).then(function (reponse) {
      clearTimeout(minuterie);
      if (fini) {
        // Trop tard pour la page, mais la réponse reste bonne à garder :
        // le prochain chargement partira d'un cache à jour.
        if (reponse && reponse.status === 200 && reponse.type === 'basic') {
          var tardive = reponse.clone();
          caches.open(VERSION).then(function (c) { c.put(req, tardive); });
        }
        return;
      }
      fini = true;
      if (reponse && reponse.status === 200 && reponse.type === 'basic') {
        var copie = reponse.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copie); });
      }
      resoudre(reponse);
    }).catch(function (err) {
      clearTimeout(minuterie);
      if (!fini) { fini = true; rejeter(err); }
    });
  });
}
