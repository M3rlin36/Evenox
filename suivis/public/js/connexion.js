'use strict';
/* Écran de connexion : un seul champ, le code. Il identifie ET authentifie —
   c'est le serveur qui retrouve à qui il appartient. Rien n'est gardé côté
   navigateur, et le champ est vidé après chaque échec. */

(function () {
  var form = document.getElementById('form-cx');
  var btn = document.getElementById('cx-btn');
  var err = document.getElementById('cx-err');
  var champ = document.getElementById('code');
  var envoiEnCours = false;

  function montrerErreur(texte) {
    err.textContent = texte;
    err.classList.add('on');
  }

  function rendreLaMain() {
    envoiEnCours = false;
    btn.disabled = false;
    btn.textContent = 'Entrer';
    champ.value = '';
    champ.focus();
  }

  // Le champ n'accepte que des chiffres. Sur téléphone, un clavier
  // alphanumérique laisserait passer un espace invisible qui ferait
  // échouer la connexion sans que personne comprenne pourquoi.
  champ.addEventListener('input', function () {
    var propre = champ.value.replace(/\D+/g, '');
    if (propre !== champ.value) champ.value = propre;
    if (err.classList.contains('on')) err.classList.remove('on');
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (envoiEnCours) return;

    var code = champ.value.replace(/\D+/g, '');
    if (!code) {
      montrerErreur('Entrez votre code.');
      champ.focus();
      return;
    }

    envoiEnCours = true;
    err.classList.remove('on');
    btn.disabled = true;
    btn.textContent = 'Un instant…';

    fetch('api/connexion-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({ code: code }),
    })
      .then(function (r) {
        return r.json()
          .catch(function () { return {}; })
          .then(function (corps) { return { ok: r.ok, statut: r.status, corps: corps }; });
      })
      .then(function (res) {
        if (res.ok) {
          window.location.href = './';
          return;
        }
        // 429 = freinage. On le dit tel quel : « code incorrect » ferait
        // croire à une faute de frappe et donnerait envie de réessayer,
        // ce qui ne ferait qu'allonger le blocage.
        montrerErreur(res.corps.erreur || 'Connexion refusée.');
        rendreLaMain();
      })
      .catch(function () {
        montrerErreur('Le serveur ne répond pas. Vérifiez votre connexion et réessayez.');
        rendreLaMain();
      });
  });

  champ.focus();
})();
