'use strict';
/* L'équipe : qui peut entrer. La personne ajoutée tape son propre code —
   il ne transite par personne d'autre et n'est jamais réaffiché. */

(function () {
  var form  = document.getElementById('form-eq');
  var btn   = document.getElementById('eq-btn');
  var err   = document.getElementById('cx-err');
  var okBox = document.getElementById('cx-ok');
  var liste = document.getElementById('eq-liste');
  var nom   = document.getElementById('eq-nom');
  var code  = document.getElementById('eq-code');
  var moi   = null;

  function erreur(t) { okBox.classList.remove('on'); err.textContent = t; err.classList.add('on'); }
  function succes(t) { err.classList.remove('on'); okBox.textContent = t; okBox.classList.add('on'); }

  code.addEventListener('input', function () {
    var propre = code.value.replace(/\D+/g, '');
    if (propre !== code.value) code.value = propre;
    err.classList.remove('on');
  });

  function json(url, options) {
    options = options || {};
    return fetch(url, {
      method: options.methode || 'GET',
      headers: options.corps
        ? { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        : { 'Accept': 'application/json' },
      credentials: 'same-origin',
      body: options.corps ? JSON.stringify(options.corps) : undefined,
    }).then(function (r) {
      // Session expirée : on renvoie à la connexion plutôt que d'afficher
      // une erreur incompréhensible.
      if (r.status === 401) { window.location.href = './'; throw new Error('401'); }
      return r.json().catch(function () { return {}; })
        .then(function (c) { if (!r.ok) throw new Error(c.erreur || 'Refusé.'); return c; });
    });
  }

  function dessiner(donnees) {
    moi = donnees.moi;
    if (!donnees.equipe.length) { liste.innerHTML = '<div class="vide">Personne pour l\'instant.</div>'; return; }
    liste.innerHTML = '';
    donnees.equipe.forEach(function (p) {
      var d = document.createElement('div');
      d.className = 'eq-r' + (p.actif ? '' : ' off');
      var vu = p.derniere_visite ? 'vu le ' + p.derniere_visite : 'jamais entré';
      d.innerHTML =
        '<div class="eq-n"><b></b><i></i></div>' +
        '<button type="button" class="btn sm"></button>';
      d.querySelector('b').textContent = p.nom + (p.identifiant === moi ? ' (vous)' : '');
      d.querySelector('i').textContent = p.actif ? vu : 'accès coupé';
      var b = d.querySelector('button');
      if (p.identifiant === moi) {
        b.remove();
      } else {
        b.textContent = p.actif ? 'Couper l\'accès' : 'Réactiver';
        if (p.actif) b.className = 'btn sm';
        b.addEventListener('click', function () {
          b.disabled = true;
          json('api/equipe/etat', { methode: 'POST', corps: { identifiant: p.identifiant, actif: !p.actif } })
            .then(function () { succes(p.nom + (p.actif ? ' n\'a plus accès.' : ' a de nouveau accès.')); charger(); })
            .catch(function (e) { erreur(e.message); b.disabled = false; });
        });
      }
      liste.appendChild(d);
    });
  }

  function charger() {
    json('api/equipe').then(dessiner).catch(function (e) {
      if (e.message !== '401') liste.innerHTML = '<div class="vide">Liste indisponible.</div>';
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var n = nom.value.trim();
    var c = code.value.replace(/\D+/g, '');
    if (!n) { erreur('Entrez le nom de la personne.'); nom.focus(); return; }
    if (c.length < 4) { erreur('Le code doit faire au moins 4 chiffres.'); code.focus(); return; }

    btn.disabled = true;
    btn.textContent = 'Ajout…';
    json('api/equipe', { methode: 'POST', corps: { nom: n, code: c } })
      .then(function (r) {
        succes(r.nom + ' peut maintenant entrer avec son code.');
        nom.value = '';
        code.value = '';
        charger();
      })
      .catch(function (ex) { if (ex.message !== '401') erreur(ex.message); })
      .then(function () { btn.disabled = false; btn.textContent = 'Ajouter'; });
  });

  charger();
})();
