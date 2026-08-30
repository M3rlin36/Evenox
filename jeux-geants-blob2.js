(function(){
  'use strict';

  /* Navigation de l'assistant, ajoutee par patch_landing_wizard.py.
     Ce script ne touche a rien du moteur : il ne fait qu'afficher une etape
     a la fois et tenir la barre de progression a jour. Les identifiants et
     les classes d'origine sont intacts, donc le moteur continue de se lier
     exactement comme avant. */

  var P = 'jx';
  function $(id){ return document.getElementById(id); }

  var cadre = $(P + 'Cadre');
  if (!cadre) { return; }
  var etapes = Array.prototype.slice.call(cadre.querySelectorAll('.' + P + '-etape'));
  if (etapes.length < 2) { return; }

  var barre = $(P + 'Barre'), nav = $(P + 'Nav'), suiv = $(P + 'Suiv');
  var elInv = $(P + 'Inv');
  /* Surtout pas « i » : le moteur et les boucles for l'utilisent partout, et
     var etant hoiste a la fonction, un i local masquerait le notre. */
  var pas = [], pasCourant = 0, vu = 0;

  function nomEtape(k){ return etapes[k].getAttribute('data-nom') || ('Étape ' + (k + 1)); }

  function invites(){
    if (!elInv) { return 0; }
    return Math.max(0, parseInt(elInv.value, 10) || 0);
  }

  /* Le compteur rappelle le nombre d'invites a chaque ecran. Sans ca, des la
     deuxieme etape on ne sait plus ce qu'on a saisi — et c'est pourtant la
     donnee qui commande les conseils de quantite. */
  function ecrireCompte(){
    var t = 'Étape ' + (pasCourant + 1) + ' sur ' + etapes.length + ' · ' + nomEtape(pasCourant);
    var n = invites();
    if (n > 0) { t += ' · ' + n + (n > 1 ? ' invités' : ' invité'); }
    $(P + 'Compte').textContent = t;
  }

  etapes.forEach(function(el, k){
    var b = document.createElement('button');
    b.type = 'button';
    b.className = P + '-wiz-pas';
    b.innerHTML = '<i></i><em></em>';
    b.querySelector('em').textContent = nomEtape(k);
    /* On ne laisse sauter qu'en arriere : l'ordre des questions est le seul
       apport de l'assistant, le casser le viderait de son sens. */
    b.addEventListener('click', function(){ if (k <= vu) { montre(k); } });
    barre.appendChild(b);
    pas.push(b);
  });

  function remonter(){
    var h = cadre.getBoundingClientRect().top + window.scrollY - 90;
    if (window.scrollY > h) { window.scrollTo({ top: h, behavior: 'smooth' }); }
  }

  function montre(n){
    pasCourant = Math.max(0, Math.min(etapes.length - 1, n));
    if (pasCourant > vu) { vu = pasCourant; }
    etapes.forEach(function(el, k){ el.classList.toggle(P + '-wiz-on', k === pasCourant); });
    pas.forEach(function(b, k){
      b.classList.toggle(P + '-actif', k === pasCourant);
      b.classList.toggle(P + '-fait', k <= vu);
    });
    nav.classList.toggle(P + '-wiz-debut', pasCourant === 0);
    suiv.textContent = (pasCourant === etapes.length - 1) ? 'Voir mon prix' : 'Continuer';
    ecrireCompte();
  }

  function terminer(){
    cadre.classList.add(P + '-wiz-fini');
    remonter();
  }

  suiv.addEventListener('click', function(){
    if (pasCourant < etapes.length - 1) { montre(pasCourant + 1); remonter(); return; }
    terminer();
  });
  $(P + 'Prec').addEventListener('click', function(){ montre(pasCourant - 1); remonter(); });
  $(P + 'Retour').addEventListener('click', function(){
    cadre.classList.remove(P + '-wiz-fini');
    montre(etapes.length - 1);
    remonter();
  });

  /* Le compteur suit la saisie au clavier comme les boutons + et -, qui sont
     geres par le moteur : on se contente d'ecouter le clic et de relire. */
  if (elInv) { elInv.addEventListener('input', ecrireCompte); }
  ['Moins', 'Plus'].forEach(function(suffixe){
    var b = $(P + suffixe);
    if (b) { b.addEventListener('click', function(){ window.setTimeout(ecrireCompte, 0); }); }
  });

  /* Un bouton [data-evx-form] ailleurs dans la page ouvre le formulaire, qui
     vit dans le panier : il faut donc que l'assistant soit termine, sinon le
     panier reste cache et le clic ne montre rien. */
  document.addEventListener('click', function(e){
    var a = e.target.closest ? e.target.closest('[data-evx-form]') : null;
    if (a) { cadre.classList.add(P + '-wiz-fini'); }
  });

  montre(0);
})();