(function(){
  'use strict';

  /* =========================================================
     CALCULATEUR DE JEUX GONFLABLES
     Meme squelette que chapiteaux / tables-chaises.
     Prix : extraits de gonflables-blob1.js (live). Aucun montant invente.
     Filtre anniversaire : garcon / fille / mixte (demande Alexandre).
     Prescription : le chateau le moins cher du theme. Pas de quantite inventee.
     Total masque tant que courriel, telephone et date ne sont pas partis.
     Aucun ET logique double : WordPress le transformerait.
     ========================================================= */

  var CATALOGUE = /*INJ_CATALOGUE*/;
  var ZONES     = /*INJ_ZONES*/;
  var SIMULE    = /*INJ_SIMULE*/;

  var LIV_BASE = 100, LIV_KM_INCLUS = 10, LIV_PAR_KM = 7, LIV_KM_MAX = 40;
  var MASQUE = '••• $';

  var TYPES = [
    { id:'anniversaire', nom:'Anniversaire', sous:'Fête d’enfants — on demande garçon, fille ou mixte' },
    { id:'ecole',        nom:'École ou camp', sous:'Kermesse, journée thématique' },
    { id:'corpo',        nom:'Corporatif / famille', sous:'Party de bureau, réunion de famille' },
    { id:'autre',        nom:'Autre événement', sous:'Fête de quartier, festival' }
  ];
  var GENRES = [
    { id:'garcon', nom:'Garçon', sous:'Spiderman, Pat Patrouille, Mario, Avengers…' },
    { id:'fille',  nom:'Fille', sous:'Princesses, Reine des Neiges, Licorne…' },
    { id:'mixte',  nom:'Mixte', sous:'On ouvre tout le catalogue' }
  ];
  var MODES = [
    { id:'livraison', nom:'On me livre et on monte', sous:'Livraison, montage, désinfection et reprise' },
    { id:'ramassage', nom:'Je viens le chercher', sous:'Sans frais à Sainte-Thérèse' }
  ];
  var NOMS_RAYON = {
    chateau: 'Les châteaux',
    sport: 'Sport et ados',
    extra: 'À ajouter'
  };

  var $ = function(id){ return document.getElementById(id); };
  if (!$('tcOptsJeux')) return;

  var etat = {
    invites: 12, type: 'anniversaire', theme: 'mixte',
    date: '', mode: 'livraison',
    panier: {}, ordre: [], raisons: {}, tout: false,
    ville: null, km: null, surDevis: false,
    livraison: 0, sousTotal: 0, totalReel: '—',
    porteOuverte: false, envoiEnCours: false
  };

  function money(n){
    var s = Math.round(n * 100) / 100;
    var t = (s % 1 === 0) ? String(s) : s.toFixed(2).replace('.', ',');
    return t.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' $';
  }
  function esc(s){
    var A = String.fromCharCode(38), L = String.fromCharCode(60), G = String.fromCharCode(62);
    return String(s).split(A).join(A + 'amp;').split(L).join(A + 'lt;').split(G).join(A + 'gt;');
  }
  function prod(id){
    for (var i = 0; i < CATALOGUE.length; i += 1) {
      if (CATALOGUE[i].id === id) return CATALOGUE[i];
    }
    return null;
  }
  function typeCourant(){
    for (var i = 0; i < TYPES.length; i += 1) {
      if (TYPES[i].id === etat.type) return TYPES[i];
    }
    return TYPES[0];
  }
  function lookupZone(brut){
    var fsa = (brut || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3);
    if (fsa.length < 3) return null;
    return ZONES[fsa] || 'UNKNOWN';
  }
  function livraisonPour(km){
    if (km === null) return null;
    if (km > LIV_KM_MAX) return null;
    if (km <= LIV_KM_INCLUS) return LIV_BASE;
    return Math.round(LIV_BASE + LIV_PAR_KM * (km - LIV_KM_INCLUS));
  }
  function lireInvites(){
    var n = parseInt($('tcGuests').value, 10);
    if (isNaN(n) || n < 1) n = 1;
    if (n > 200) n = 200;
    etat.invites = n;
    return n;
  }
  function themeVisible(p){
    if (etat.tout) return true;
    if (etat.theme === 'mixte') return true;
    if (p.theme === etat.theme) return true;
    if (p.theme === 'mixte') return true;
    return false;
  }
  function choisirChateau(){
    var cands = [];
    for (var i = 0; i < CATALOGUE.length; i += 1) {
      var p = CATALOGUE[i];
      if (p.role !== 'chateau') continue;
      if (etat.theme === 'mixte') {
        if (p.theme !== 'mixte') continue;
      } else {
        if (p.theme !== etat.theme) continue;
      }
      cands.push(p);
    }
    if (!cands.length) return null;
    cands.sort(function(a, b){
      if (a.prix !== b.prix) return a.prix - b.prix;
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });
    return cands[0];
  }

  function prescrire(){
    var n = lireInvites();
    var kit = [];
    var raisons = {};
    function ajouter(id, q, pourquoi){
      if (!prod(id)) return;
      if (q < 1) return;
      if (kit.indexOf(id) < 0) kit.push(id);
      etat.panier[id] = q;
      raisons[id] = pourquoi;
    }
    etat.panier = {};
    var m = choisirChateau();
    if (m) {
      var pour = 'Le château le moins cher de ce thème, prix catalogue. '
        + 'On n’invente pas un deuxième jeu selon le nombre d’enfants : tu l’ajoutes si tu en veux un.';
      if (etat.type === 'anniversaire') {
        pour = 'Anniversaire ' + etat.theme + ' : on ouvre avec ' + m.nom
          + '. Ajoute un deuxième château toi-même si le groupe est grand.';
      }
      ajouter(m.id, 1, pour);
    }
    etat.ordre = kit;
    etat.raisons = raisons;
    etat.invites = n;
  }

  function pastilles(hote, options, actuel, onPick){
    if (!hote) return;
    hote.innerHTML = '';
    options.forEach(function(o){
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tc-opt' + (o.id === actuel ? ' tc-on' : '');
      b.innerHTML = '<strong>' + o.nom + '</strong>' + (o.sous ? '<em>' + o.sous + '</em>' : '');
      b.addEventListener('click', function(){ onPick(o.id); });
      hote.appendChild(b);
    });
  }

  function carteHtml(p, q, pourquoi){
    var raison = pourquoi ? '<span class="jx-raison">' + esc(pourquoi) + '</span>' : '';
    var age = '';
    if (p.groupe === 'petits') age = ' · 3 à 7 ans';
    if (p.groupe === 'xl') age = ' · 5 à 12 ans';
    return '<article class="jx-carte' + (q ? ' jx-prise' : '') + '" data-id="' + p.id + '">'
      + '<span class="jx-photo jx-sans"></span>'
      + '<span class="jx-corps"><b>' + esc(p.nom) + '</b>'
      + '<span class="jx-prix">' + money(p.prix) + age + '</span>'
      + raison + '</span>'
      + '<div class="jx-qte">'
      + '<button type="button" class="tc-step-btn" data-act="moins" data-id="' + p.id + '" aria-label="Moins">−</button>'
      + '<span>' + q + '</span>'
      + '<button type="button" class="tc-step-btn" data-act="plus" data-id="' + p.id + '" aria-label="Plus">+</button>'
      + '</div></article>';
  }

  function phraseContexte(){
    var n = etat.invites;
    var t = typeCourant();
    var m = choisirChateau();
    var theme = etat.theme;
    return '<p class="jx-contexte">' + n + (n > 1 ? ' enfants' : ' enfant') + ', '
      + esc(t.nom.toLowerCase()) + ', thème <b>' + esc(theme) + '</b>'
      + (etat.date ? ', le ' + etat.date : '')
      + '. On ouvre avec <b>' + (m ? esc(m.nom) : 'ton choix') + '</b>'
      + ', montage et désinfection compris si on livre.</p>';
  }

  function peindreVitrine(){
    var hote = $('tcOptsJeux');
    if (!hote) return;
    var html = '<div class="jx-vitrine">' + phraseContexte();
    var roles = ['chateau', 'sport', 'extra'];
    var i, r, liste, cartes, p, q, montre, nb;
    for (i = 0; i < roles.length; i += 1) {
      r = roles[i];
      liste = [];
      for (var k = 0; k < CATALOGUE.length; k += 1) {
        if (CATALOGUE[k].role === r) liste.push(CATALOGUE[k]);
      }
      cartes = '';
      nb = 0;
      for (var j = 0; j < liste.length; j += 1) {
        p = liste[j];
        q = etat.panier[p.id] || 0;
        montre = etat.tout ? true : themeVisible(p);
        if (!etat.tout) {
          if (r !== 'chateau') {
            if (q < 1) montre = false;
          } else {
            if (!themeVisible(p)) montre = false;
          }
        }
        if (montre) {
          cartes += carteHtml(p, q, etat.raisons[p.id] || '');
          nb += 1;
        }
      }
      if (nb) {
        html += '<p class="jx-rayon">' + (NOMS_RAYON[r] || r) + '<em>' + nb + '</em></p>';
        html += '<div class="jx-grille">' + cartes + '</div>';
      }
    }
    html += '</div>';
    hote.innerHTML = html;
    var btns = hote.querySelectorAll('[data-act]');
    for (var b = 0; b < btns.length; b += 1) {
      btns[b].addEventListener('click', function(){
        var id = this.getAttribute('data-id');
        var act = this.getAttribute('data-act');
        var cur = etat.panier[id] || 0;
        var nxt = act === 'plus' ? cur + 1 : cur - 1;
        if (nxt < 0) nxt = 0;
        if (nxt > 8) nxt = 8;
        etat.panier[id] = nxt;
        reconstruireOrdre();
        rendre();
      });
    }
  }

  function reconstruireOrdre(){
    var ordre = [];
    for (var i = 0; i < CATALOGUE.length; i += 1) {
      var id = CATALOGUE[i].id;
      if ((etat.panier[id] || 0) > 0) ordre.push(id);
    }
    etat.ordre = ordre;
  }

  function rendre(){
    var n = lireInvites();
    $('tcResName').textContent = n + (n > 1 ? ' enfants' : ' enfant');
    if ($('tcSaisonTxt')) {
      $('tcSaisonTxt').textContent = etat.date ? etat.date : 'Choisis ta date';
    }
    var brut = ($('tcPostal').value || '').toUpperCase().trim();
    var zone = null;
    etat.ville = null; etat.km = null;
    if (etat.mode === 'livraison') {
      zone = lookupZone(brut);
      if (zone) {
        if (zone !== 'UNKNOWN') {
          etat.ville = zone[0];
          etat.km = zone[1];
          $('tcCityName').textContent = zone[0];
          $('tcCity').classList.remove('tc-unknown');
        } else {
          $('tcCityName').textContent = 'Secteur à confirmer';
          $('tcCity').classList.add('tc-unknown');
        }
      } else {
        $('tcCityName').textContent = 'En attente';
        $('tcCity').classList.add('tc-unknown');
      }
    } else {
      $('tcCityName').textContent = 'Ramassage';
      $('tcCity').classList.remove('tc-unknown');
    }

    peindreVitrine();

    var lignes = [];
    var sous = 0;
    for (var i = 0; i < etat.ordre.length; i += 1) {
      var id = etat.ordre[i], p = prod(id), q = etat.panier[id] || 0;
      if (!p) continue;
      if (q < 1) continue;
      var ligne = p.prix * q;
      sous += ligne;
      lignes.push({ txt: q + ' × ' + p.nom, prix: money(ligne) });
    }
    etat.sousTotal = sous;
    var ul = $('tcCart');
    ul.innerHTML = lignes.map(function(l){
      return '<li><span>' + esc(l.txt) + '</span><span>' + l.prix + '</span></li>';
    }).join('');

    var shipLine = $('tcResShipLine'), turnkey = $('tcTurnkey');
    turnkey.classList.remove('tc-on');
    $('tcTotalLbl').textContent = 'Total';
    etat.totalReel = '—';
    etat.surDevis = false;
    etat.livraison = 0;

    if (!lignes.length) {
      shipLine.classList.remove('tc-free');
      $('tcResShip').textContent = '—';
      $('tcResTotal').textContent = '—';
      $('tcResMob').textContent = '—';
      $('tcResNote').textContent = 'Choisis un jeu pour voir ton prix.';
      appliquerPorte(); majBoutonEnvoi();
      return;
    }
    $('tcResMob').textContent = money(etat.sousTotal);

    if (etat.mode === 'ramassage') {
      shipLine.classList.add('tc-free');
      $('tcResShip').textContent = 'Gratuit';
      $('tcResTotal').textContent = money(etat.sousTotal);
      etat.totalReel = $('tcResTotal').textContent;
      $('tcResNote').textContent = 'Ramassage à Sainte-Thérèse. Prix avant taxes. Prévois un véhicule assez grand.';
      appliquerPorte(); majBoutonEnvoi();
      return;
    }

    if (zone === null) {
      shipLine.classList.remove('tc-free');
      $('tcResShip').textContent = '—';
      $('tcResTotal').textContent = money(etat.sousTotal) + ' +';
      etat.totalReel = $('tcResTotal').textContent;
      $('tcResNote').textContent = 'Entre ton code postal pour ajouter la livraison au total. Prix avant taxes.';
      appliquerPorte(); majBoutonEnvoi();
      return;
    }
    var liv = livraisonPour(etat.km);
    if (liv === null) {
      etat.surDevis = true;
      $('tcResShip').textContent = 'Sur devis';
      $('tcResTotal').textContent = money(etat.sousTotal) + ' +';
      etat.totalReel = $('tcResTotal').textContent;
      $('tcResNote').textContent = (zone === 'UNKNOWN')
        ? 'On ne connaît pas encore ce secteur par cœur. On te confirme la livraison en 24 h. Prix avant taxes.'
        : 'Ce secteur demande un camion dédié. On te confirme la livraison en 24 h. Prix avant taxes.';
      appliquerPorte(); majBoutonEnvoi();
      return;
    }
    etat.livraison = liv;
    $('tcResShip').textContent = money(liv);
    $('tcResTotal').textContent = money(etat.sousTotal + liv);
    etat.totalReel = $('tcResTotal').textContent;
    $('tcResNote').textContent = 'Livraison, montage, désinfection et reprise compris. Prix avant taxes.';
    appliquerPorte(); majBoutonEnvoi();
  }

  function appliquerPorte(){
    if (etat.porteOuverte) return;
    var vide = !etat.ordre.length;
    var t = $('tcResTotal'), m = $('tcResMob');
    if (!vide) {
      if (t) t.textContent = MASQUE;
      if (m) m.textContent = MASQUE;
      var note = $('tcResNote');
      if (note) {
        note.textContent = 'Tes coordonnées et ta date, et ton total s’affiche ici même. '
          + 'On te l’envoie aussi par écrit, avec les disponibilités confirmées.';
      }
      var ul = $('tcCart');
      if (ul) {
        var lis = ul.querySelectorAll('li');
        for (var i = 0; i < lis.length; i += 1) {
          var sp = lis[i].querySelectorAll('span');
          if (sp.length > 1) {
            if (sp[1].textContent.replace(/\s/g, '')) { sp[1].textContent = MASQUE; }
          }
        }
      }
    }
    var caches = ['tcTurnkey', 'tcResNo', 'tcResCta'];
    for (var c = 0; c < caches.length; c += 1) {
      var e = $(caches[c]);
      if (e) e.style.display = 'none';
    }
    var bl = document.querySelector('.tc-res-lines');
    if (bl) bl.style.display = 'none';
    var bt = document.querySelector('.tc-res-total');
    if (bt) bt.style.display = 'none';
    var hote = document.querySelector('.tc-res-main');
    var form = $('tcSoumission'), msg = $('tcFormMsg');
    if (hote) {
      if (form) {
        if (form.parentElement !== hote) {
          if (msg) hote.appendChild(msg);
          hote.appendChild(form);
          poserChampDate(form);
          var envoi = $('tcFormSend');
          if (envoi) envoi.textContent = 'Afficher mon prix';
          var retour = $('tcFormBack');
          if (retour) retour.style.display = 'none';
          var recap = $('tcFormRecap');
          if (recap) recap.style.display = 'none';
        }
      }
    }
  }
  function rouvrirPanneau(){
    var ids = ['tcTurnkey', 'tcResNo', 'tcResCta'];
    for (var i = 0; i < ids.length; i += 1) {
      var e = $(ids[i]);
      if (e) e.style.display = '';
    }
    var l = document.querySelector('.tc-res-lines');
    if (l) l.style.display = '';
    var t = document.querySelector('.tc-res-total');
    if (t) t.style.display = '';
  }
  function poserChampDate(form){
    if ($('tcfDate')) return;
    var champ = document.createElement('div');
    champ.className = 'tc-field';
    var lbl = document.createElement('label');
    lbl.setAttribute('for', 'tcfDate');
    lbl.textContent = 'La date de ton événement';
    var inp = document.createElement('input');
    inp.type = 'date'; inp.id = 'tcfDate'; inp.required = true;
    var demain = new Date();
    demain.setDate(demain.getDate() + 1);
    inp.min = demain.toISOString().slice(0, 10);
    champ.appendChild(lbl); champ.appendChild(inp);
    var tel = $('tcfTel');
    if (tel) { form.insertBefore(champ, tel.parentElement); }
    else { form.insertBefore(champ, form.firstChild); }
    if (tel) tel.required = true;
  }
  function majBoutonEnvoi(){
    var b = $('tcFormSend');
    if (!b) return;
    var vide = !etat.ordre.length;
    b.disabled = vide;
    b.textContent = vide ? 'Choisis un jeu'
                         : (etat.porteOuverte ? 'Mettre ma soumission à jour' : 'Afficher mon prix');
  }
  function msgForm(txt, ok){
    var m = $('tcFormMsg');
    if (!m) return;
    m.textContent = txt;
    m.className = 'tc-form-msg tc-on ' + (ok ? 'tc-ok' : 'tc-fail');
  }
  function courrielValide(v){ return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v); }
  function resume(){
    var t = [], LN = String.fromCharCode(10);
    t.push('CALCULATEUR DE JEUX GONFLABLES');
    t.push(etat.invites + ' enfants, ' + etat.type + ', theme ' + etat.theme);
    t.push('');
    for (var i = 0; i < etat.ordre.length; i += 1) {
      var id = etat.ordre[i], p = prod(id), q = etat.panier[id];
      if (p) t.push('  - ' + q + ' x ' + p.nom + ' = ' + money(p.prix * q));
    }
    t.push('');
    t.push('Sous-total : ' + money(etat.sousTotal));
    t.push('Livraison : ' + (etat.livraison ? money(etat.livraison) : 'a confirmer'));
    t.push('TOTAL ESTIME : ' + etat.totalReel);
    if (etat.ville) t.push('Secteur : ' + etat.ville);
    return t.join(LN);
  }

  function peindreTypes(){
    pastilles($('tcOptsTypes'), TYPES, etat.type, function(id){
      etat.type = id;
      peindreTypes();
      prescrire(); rendre();
    });
  }
  function peindreGenre(){
    pastilles($('tcOptsGenre'), GENRES, etat.theme, function(id){
      etat.theme = id;
      peindreGenre();
      prescrire(); rendre();
    });
  }
  function peindreMode(){
    pastilles($('tcOptsMode'), MODES, etat.mode, function(id){
      etat.mode = id;
      peindreMode();
      $('tcBoiteCP').classList.toggle('tc-on', id === 'livraison');
      prescrire(); rendre();
    });
  }
  peindreTypes();
  peindreGenre();
  peindreMode();

  $('tcDate').addEventListener('change', function(){ etat.date = this.value; rendre(); });
  $('tcDate').addEventListener('input', function(){ etat.date = this.value; rendre(); });
  (function(){
    var demain = new Date();
    demain.setDate(demain.getDate() + 1);
    $('tcDate').min = demain.toISOString().slice(0, 10);
  })();

  $('tcMinus').addEventListener('click', function(){
    $('tcGuests').value = Math.max(1, (parseInt($('tcGuests').value, 10) || 1) - 2);
    prescrire(); rendre();
  });
  $('tcPlus').addEventListener('click', function(){
    $('tcGuests').value = Math.min(200, (parseInt($('tcGuests').value, 10) || 0) + 2);
    prescrire(); rendre();
  });
  $('tcGuests').addEventListener('input', function(){ prescrire(); rendre(); });
  $('tcPostal').addEventListener('input', rendre);
  $('tcQteToggle').addEventListener('click', function(){
    etat.tout = !etat.tout;
    this.textContent = etat.tout ? 'Revenir à la sélection' : 'Voir tout l’inventaire';
    rendre();
  });
  $('tcResCta').addEventListener('click', function(){
    $('tcResult').classList.add('tc-show-form');
    $('tcfNom').focus();
  });
  $('tcFormBack').addEventListener('click', function(){
    $('tcResult').classList.remove('tc-show-form');
  });
  if ($('tcResNo')) {
    $('tcResNo').addEventListener('click', function(){
      $('tcResult').classList.add('tc-show-form');
      $('tcfNom').focus();
    });
  }

  $('tcSoumission').addEventListener('submit', function(e){
    e.preventDefault();
    if (etat.envoiEnCours) return;
    if (!etat.ordre.length) { msgForm('Choisis un jeu avant de nous écrire.', false); return; }
    var nom = $('tcfNom').value.trim(), email = $('tcfEmail').value.trim();
    var tel = $('tcfTel') ? $('tcfTel').value.trim() : '';
    var dat = $('tcfDate') ? $('tcfDate').value : '';
    if (!nom) { msgForm('Il nous faut ton nom pour préparer ta soumission.', false); $('tcfNom').focus(); return; }
    if (!courrielValide(email)) { msgForm('Il nous faut un courriel valide : c’est là que ta soumission s’en va.', false); $('tcfEmail').focus(); return; }
    if (tel.replace(/[^0-9]/g, '').length < 10) {
      msgForm('Il nous faut aussi ton numéro : c’est plus rapide au téléphone quand il reste une question.', false);
      $('tcfTel').focus(); return;
    }
    if (!dat) {
      msgForm('Donne-nous la date de ton événement : c’est elle qui nous dit ce qui est libre.', false);
      $('tcfDate').focus(); return;
    }
    var bouton = $('tcFormSend');
    etat.envoiEnCours = true;
    bouton.disabled = true;
    bouton.textContent = 'Envoi en cours...';

    function ouvrir(){
      etat.porteOuverte = true;
      etat.envoiEnCours = false;
      rouvrirPanneau();
      try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'evx_soumission_envoyee',
                                service: 'Calculateur jeux gonflables',
                                valeur: etat.totalReel });
      } catch (eDl) {}
      rendre();
      $('tcResult').classList.remove('tc-show-form');
      msgForm('C’est envoyé. Ton total est affiché, et tu reçois le détail par courriel '
            + 'avec les disponibilités confirmées.', true);
      $('tcResult').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (SIMULE) { ouvrir(); return; }

    var fd = new FormData();
    fd.append('action', 'evx_soumission');
    fd.append('evx_nonce', window.evx_nonce || '');
    fd.append('nom_complet', nom);
    fd.append('email', email);
    fd.append('telephone', tel);
    fd.append('date_event', dat);
    fd.append('details', resume());
    fd.append('service', 'Calculateur jeux gonflables');
    fd.append('page_url', window.location.href);
    fd.append('referrer', document.referrer || 'direct');
    fd.append('device', window.innerWidth <= 600 ? 'mobile' : (window.innerWidth <= 960 ? 'tablet' : 'desktop'));
    fd.append('timestamp', new Date().toISOString());
    fd.append('panier_json', JSON.stringify({
      page: 'jeux-gonflables', items: etat.panier, invites: etat.invites,
      type: etat.type, theme: etat.theme,
      cp: ($('tcPostal').value || '').toUpperCase().trim()
    }));
    fetch(window.evx_ajax || '/wp-admin/admin-ajax.php',
          { method:'POST', body:fd, credentials:'same-origin' })
      .then(function(r){ return r.json(); })
      .then(function(d){
        if (d) { if (d.success) { ouvrir(); return; } }
        throw new Error('refus serveur');
      })
      .catch(function(){
        etat.envoiEnCours = false;
        bouton.disabled = false;
        bouton.textContent = 'Afficher mon prix';
        msgForm('L’envoi n’a pas passé. Appelle-nous au 514-559-1893, on prend ta demande tout de suite.', false);
      });
  });

  window.EVX_JG = {
    prescrire: prescrire,
    choisirChateau: choisirChateau,
    prod: prod,
    etat: etat,
    money: money
  };

  prescrire();
  rendre();
})();
