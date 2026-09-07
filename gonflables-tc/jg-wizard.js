/* UNE QUESTION A LA FOIS -- calculateur de jeux gonflables.
   Repris du wizard chapiteaux / tables-chaises.
   Aucun ET commercial double : WordPress le transformerait. */
(function () {
  var boite = document.querySelector('.tc-page .tc-calc-inputs');
  var cadre = document.querySelector('.tc-page .tc-calc-box');
  if (!boite) { return; }
  if (!cadre) { return; }
  var etapes = Array.prototype.slice.call(boite.querySelectorAll('.tc-calc-step'));
  if (etapes.length < 2) { return; }
  var noms = ['Combien', 'Quand', '&Eacute;v&eacute;nement', 'Gar&ccedil;on ou fille', 'Livraison', 'Les jeux'];
  var mots = [
    'C&rsquo;est le nombre d&rsquo;enfants qui nous dit si on reste sur un petit ch&acirc;teau ou si on ouvre les grands mod&egrave;les. Toi, tu choisis ensuite.',
    'La date nous dit ce qui est libre ce jour-l&agrave;. Livraison, montage et d&eacute;sinfection sont compris quand on livre.',
    'Un anniversaire et une kermesse ne se meublent pas pareil. Pour un anniversaire, la question suivante est gar&ccedil;on, fille ou mixte.',
    'Premier filtre d&rsquo;un anniversaire : on ouvre le catalogue du th&egrave;me. Mixte montre tout. Tu changes de jeu apr&egrave;s, le prix suit.',
    'Le ramassage est gratuit &agrave; Sainte-Th&eacute;r&egrave;se. Un gonflable, on le livre et on le monte presque toujours.',
    'On a mis devant le ch&acirc;teau le moins cher du th&egrave;me. Ajoute un deuxi&egrave;me jeu si tu veux : aucun nombre n&rsquo;est invent&eacute; pour toi.'
  ];
  cadre.classList.add('tc-wiz-plein');
  var barre = document.createElement('div');
  barre.className = 'tc-wiz-barre';
  var compteur = document.createElement('p');
  compteur.className = 'tc-wiz-compte';
  etapes.forEach(function (e, k) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'tc-wiz-pas';
    b.innerHTML = '<i></i><em>' + (noms[k] || ('&Eacute;tape ' + (k + 1))) + '</em>';
    b.addEventListener('click', function () { if (k <= vu) { montre(k); } });
    barre.appendChild(b);
    if (mots[k]) {
      var p = document.createElement('p');
      p.className = 'tc-wiz-intro';
      p.innerHTML = mots[k];
      var lbl = e.querySelector('.tc-calc-label');
      var apres = lbl ? lbl.nextSibling : null;
      if (apres) { e.insertBefore(p, apres); } else { e.appendChild(p); }
    }
  });
  boite.insertBefore(barre, etapes[0]);
  boite.insertBefore(compteur, etapes[0]);
  var nav = document.createElement('div');
  nav.className = 'tc-wiz-nav';
  var prec = document.createElement('button');
  prec.type = 'button'; prec.className = 'tc-wiz-prec'; prec.textContent = 'Retour';
  var suiv = document.createElement('button');
  suiv.type = 'button'; suiv.className = 'tc-wiz-suiv'; suiv.textContent = 'Continuer';
  nav.appendChild(prec); nav.appendChild(suiv);
  boite.appendChild(nav);
  boite.classList.add('tc-wiz');
  var res = cadre.querySelector('.tc-result');
  var fleche = document.createElement('button');
  fleche.type = 'button';
  fleche.className = 'tc-wiz-retour';
  fleche.innerHTML = '<span aria-hidden="true">&larr;</span> Modifier mes choix';
  fleche.addEventListener('click', function () {
    cadre.classList.remove('tc-wiz-fini');
    montre(etapes.length - 1);
    var h = cadre.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: h, behavior: 'smooth' });
  });
  if (res) { if (res.parentNode) { res.parentNode.insertBefore(fleche, res); } }
  var clos = document.createElement('p');
  clos.className = 'tc-wiz-clos';
  clos.innerHTML = '<b>Rien n&rsquo;est r&eacute;serv&eacute;</b> tant que tu n&rsquo;as pas confirm&eacute;. '
    + 'On v&eacute;rifie les disponibilit&eacute;s pour ta date et on te r&eacute;pond en 24&nbsp;heures.';
  if (res) { if (res.parentNode) { res.parentNode.appendChild(clos); } }
  var i = 0, vu = 0;
  var pas = Array.prototype.slice.call(barre.children);
  function montre(n) {
    i = Math.max(0, Math.min(etapes.length - 1, n));
    if (i > vu) { vu = i; }
    etapes.forEach(function (e, k) { e.classList.toggle('tc-wiz-on', k === i); });
    pas.forEach(function (b, k) {
      b.classList.toggle('tc-actif', k === i);
      b.classList.toggle('tc-fait', k <= vu);
    });
    nav.classList.toggle('tc-wiz-debut', i === 0);
    suiv.textContent = (i === etapes.length - 1) ? 'Voir ma s&eacute;lection' : 'Continuer';
    suiv.innerHTML = suiv.textContent;
    var champInv = document.getElementById('tcGuests');
    var n2 = champInv ? (parseInt(champInv.value, 10) || 0) : 0;
    compteur.innerHTML = '&Eacute;tape ' + (i + 1) + ' sur ' + etapes.length
      + ' &middot; ' + (noms[i] || '')
      + (n2 > 0 ? ' &middot; ' + n2 + (n2 > 1 ? ' enfants' : ' enfant') : '');
  }
  (function () {
    var ci = document.getElementById('tcGuests');
    if (ci) { ci.addEventListener('input', function () { montre(i); }); }
  })();
  suiv.addEventListener('click', function () {
    if (i < etapes.length - 1) {
      montre(i + 1);
      var h = cadre.getBoundingClientRect().top + window.scrollY - 90;
      if (window.scrollY > h) { window.scrollTo({ top: h, behavior: 'smooth' }); }
      return;
    }
    cadre.classList.add('tc-wiz-fini');
    var y = cadre.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });
  prec.addEventListener('click', function () { montre(i - 1); });
  montre(0);
})();
