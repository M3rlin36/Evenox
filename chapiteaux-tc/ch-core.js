(function(){
  'use strict';

  /* =========================================================
     CALCULATEUR DE CHAPITEAUX
     Meme squelette et memes classes que /location-tables-chaises/.
     Prix : jamais inventes. 10x10 = 300 $ (systeme). Bar DEL absent.
     Bar portatif 120 $. Ancrage au sol, pas de poids.
     Total masque tant que courriel, telephone et date ne sont pas partis.
     Aucun ET logique double : WordPress le transformerait.
     ========================================================= */

  var CATALOGUE = /*INJ_CATALOGUE*/;
  var ZONES     = /*INJ_ZONES*/;
  var SIMULE    = /*INJ_SIMULE*/;

  var LIV_BASE = 100, LIV_KM_INCLUS = 10, LIV_PAR_KM = 7, LIV_KM_MAX = 40;
  var MIN_COMMANDE = 300;
  var SEUIL_DEVIS = 90;
  var BONUS_DEBOUT = 1.4;
  var MASQUE = '••• $';

  var TYPES = [
    { id:'enfants', nom:'Fête d’enfants', sous:'Anniversaire, fête familiale', assis:false, elegance:1 },
    { id:'corpo',   nom:'Événement corporatif', sous:'5 à 7, party de bureau', assis:false, elegance:2 },
    { id:'mariage', nom:'Mariage ou réception', sous:'Cocktail, souper, baby shower', assis:true, elegance:3 },
    { id:'ecole',   nom:'École ou municipalité', sous:'Kermesse, festival', assis:false, elegance:1 },
    { id:'autre',   nom:'Autre événement', sous:'Fête de quartier, party privé', assis:true, elegance:2 }
  ];
  var SERVICES = [
    { id:'assis', nom:'Assis à table', sous:'Souper, cérémonie, banquet — 10 pi² / pers.' },
    { id:'debout', nom:'Debout / cocktail', sous:'5 à 7, vin d’honneur — le même abri tient 40 % de plus' }
  ];
  var MODES = [
    { id:'livraison', nom:'On me livre et on monte', sous:'Livraison, montage et reprise' },
    { id:'ramassage', nom:'Je viens le chercher', sous:'Sans frais à Sainte-Thérèse, petits formats seulement' }
  ];
  var LOTS = {
    brune:       { base: 2, lots: [ {n:50, p:1.75}, {n:100, p:1.50} ] },
    blanche:     { base: 3, lots: [ {n:40, p:2.75}, {n:60, p:2.50}, {n:100, p:2.25} ] },
    rembourree:  { base: 4, lots: [ {n:40, p:3.50}, {n:70, p:3.00} ] },
    martha:      { base: 5, lots: [ {n:40, p:4.50}, {n:60, p:4.00} ] },
    chiavari_bl: { base: 8, lots: [ {n:50, p:7.50}, {n:100, p:7.00} ] },
    rect6:       { base: 10, lots: [ {n:20, p:9}, {n:40, p:8} ] }
  };
  var NOMS_RAYON = {
    marquises: 'Les formats de marquise',
    options: 'Confort et ambiance',
    mobilier: 'Tables, chaises et nappes'
  };

  var $ = function(id){ return document.getElementById(id); };
  if (!$('tcOptsJeux')) return;

  var etat = {
    invites: 40, type: 'mariage', service: 'assis',
    date: '', mode: 'livraison',
    panier: {}, ordre: [], raisons: {}, tout: false,
    ville: null, km: null, surDevis: false, visite: false,
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
    return TYPES[2];
  }
  function estAssis(){
    if (etat.service === 'debout') return false;
    return true;
  }
  function tarifUnite(p, q){
    if (!p) return 0;
    if (!p.lot) return p.prix;
    var d = LOTS[p.lot];
    if (!d) return p.prix;
    var prix = d.base;
    for (var i = 0; i < d.lots.length; i += 1) {
      if (q >= d.lots[i].n) {
        if (d.lots[i].p < prix) { prix = d.lots[i].p; }
        else if (prix === d.base) { prix = d.lots[i].p; }
      }
    }
    return prix;
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
    if (n > 250) n = 250;
    etat.invites = n;
    return n;
  }
  function besoinPlaces(){
    var n = lireInvites();
    if (estAssis()) return n;
    return Math.ceil(n / BONUS_DEBOUT);
  }
  function formats(){
    var out = [];
    for (var i = 0; i < CATALOGUE.length; i += 1) {
      if (CATALOGUE[i].groupe === 'marquises') out.push(CATALOGUE[i]);
    }
    out.sort(function(a, b){ return a.cap - b.cap; });
    return out;
  }
  function choisirMarquise(){
    var besoin = besoinPlaces();
    var liste = formats();
    for (var i = 0; i < liste.length; i += 1) {
      if (besoin <= liste[i].cap) return liste[i];
    }
    return liste[liste.length - 1];
  }

  function prescrire(){
    var n = lireInvites();
    var t = typeCourant();
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
    etat.visite = false;
    var m = choisirMarquise();
    var explication = estAssis()
      ? 'Assis à table, il faut compter environ 10 pi² par personne. Ce format couvre tes ' + n + ' invités. Le montage est compris.'
      : 'Debout en cocktail, un chapiteau tient environ 40 % de plus qu’assis : ce format suffit pour ' + n + ' personnes. Le montage est compris.';
    ajouter(m.id, 1, explication + ' On l’ancre au sol : pas de poids à louer.');
    if (n > SEUIL_DEVIS) {
      etat.visite = true;
      raisons[m.id] = explication + ' Au-delà de ' + SEUIL_DEVIS + ' personnes, on combine parfois plusieurs marquises : visite de site, total indicatif.';
    }

    if (t.id === 'mariage') {
      ajouter('guirlande', 2, 'Deux longueurs transforment un chapiteau blanc en salle de réception une fois le soleil couché.');
      ajouter('son', 1, 'Un système autonome pour la cérémonie et le cocktail, sans dépendre du DJ.');
    }
    if (t.id === 'corpo') {
      ajouter('guirlande', 2, 'Un 5 à 7 finit toujours après le coucher du soleil.');
      ajouter('bar-portatif', 1, 'Celui-là existe : 120 $. Le bar courbé à DEL n’est plus au catalogue.');
    }

    var chaise = 'chaise-pliante-blanche';
    if (t.elegance === 1) { chaise = 'chaise-pliante-brune'; }
    if (t.elegance === 3) { chaise = 'chaise-chiavari-blanche'; }
    ajouter(chaise, n, 'Une chaise par personne, même en cocktail : il y en a toujours qui veulent s’asseoir.');

    var table = 'table-rect-6';
    var places = 8;
    if (estAssis()) {
      if (t.elegance === 3) { table = 'table-ronde-60'; }
    }
    var service = Math.max(1, Math.ceil(n / 25));
    var assises = estAssis() ? n : Math.ceil(n * 0.6);
    var nbTables = Math.ceil(assises / places) + service;
    ajouter(table, nbTables, 'Dont ' + service + ' de service pour le buffet et les boissons : ce sont celles qu’on oublie toujours.');
    var nappe = (table === 'table-ronde-60') ? 'nappe-ronde' : 'nappe-rect';
    ajouter(nappe, nbTables, 'Une par table. Sous un chapiteau blanc, c’est la nappe qui fait la salle.');

    etat.ordre = kit;
    etat.raisons = raisons;
  }

  function pastilles(hote, options, actuel, onPick, sousFn){
    if (!hote) return;
    hote.innerHTML = '';
    options.forEach(function(o){
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tc-opt' + (o.id === actuel ? ' tc-on' : '');
      b.innerHTML = '<strong>' + o.nom + '</strong>'
        + (sousFn ? '<em>' + sousFn(o) + '</em>' : (o.sous ? '<em>' + o.sous + '</em>' : ''));
      b.addEventListener('click', function(){ onPick(o.id); });
      hote.appendChild(b);
    });
  }

  function carteHtml(p, q, pourquoi){
    var photo = p.img
      ? '<span class="jx-photo"><img src="' + p.img + '" alt="" width="460" height="345" loading="lazy"></span>'
      : '<span class="jx-photo jx-sans"></span>';
    var unite = tarifUnite(p, q);
    var raison = pourquoi ? '<span class="jx-raison">' + esc(pourquoi) + '</span>' : '';
    var cap = p.cap ? ' · ' + p.cap + ' pers. assises' : '';
    return '<article class="jx-carte' + (q ? ' jx-prise' : '') + '" data-id="' + p.id + '">'
      + photo
      + '<span class="jx-corps"><b>' + esc(p.nom) + '</b>'
      + '<span class="jx-prix">' + money(unite) + cap + '</span>'
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
    var service = estAssis() ? 'assis à table' : 'debout en cocktail';
    var besoin = besoinPlaces();
    var m = choisirMarquise();
    return '<p class="jx-contexte">' + n + ' personnes, ' + service + ', '
      + esc(t.nom.toLowerCase())
      + (etat.date ? ', le ' + etat.date : '')
      + '. On dimensionne pour <b>' + besoin + ' places</b> : '
      + '<b>' + esc(m.nom) + '</b>, montage compris.</p>';
  }

  function peindreVitrine(){
    var hote = $('tcOptsJeux');
    if (!hote) return;
    var html = '<div class="jx-vitrine">' + phraseContexte();
    var groupes = ['marquises', 'options', 'mobilier'];
    var i, g, liste, cartes, p, q, montre;
    for (i = 0; i < groupes.length; i += 1) {
      g = groupes[i];
      liste = [];
      for (var k = 0; k < CATALOGUE.length; k += 1) {
        if (CATALOGUE[k].groupe === g) liste.push(CATALOGUE[k]);
      }
      cartes = '';
      var nb = 0;
      for (var j = 0; j < liste.length; j += 1) {
        p = liste[j];
        q = etat.panier[p.id] || 0;
        montre = etat.tout ? true : (q > 0);
        if (g === 'marquises') {
          if (!etat.tout) {
            montre = (p.id === (etat.ordre[0] || ''));
            if (!montre) {
              if (q > 0) montre = true;
            }
          }
        }
        if (montre) {
          cartes += carteHtml(p, q, etat.raisons[p.id] || '');
          nb += 1;
        }
      }
      if (nb) {
        html += '<p class="jx-rayon">' + (NOMS_RAYON[g] || g) + '<em>' + nb + '</em></p>';
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
        var pr = prod(id);
        if (pr) { if (pr.groupe === 'marquises') {
          if (act === 'plus') {
            etat.panier[id] = 1;
            for (var x = 0; x < CATALOGUE.length; x += 1) {
              if (CATALOGUE[x].groupe === 'marquises') {
                if (CATALOGUE[x].id !== id) { etat.panier[CATALOGUE[x].id] = 0; }
              }
            }
          } else {
            etat.panier[id] = 0;
          }
        } else {
          etat.panier[id] = nxt;
        } }
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
    $('tcResName').textContent = n + (n > 1 ? ' personnes' : ' personne');
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
      var u = tarifUnite(p, q);
      var ligne = u * q;
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
    $('tcTotalLbl').textContent = etat.visite ? 'Total indicatif' : 'Total';
    etat.totalReel = '—';
    etat.surDevis = false;
    etat.livraison = 0;

    if (!lignes.length) {
      shipLine.classList.remove('tc-free');
      $('tcResShip').textContent = '—';
      $('tcResTotal').textContent = '—';
      $('tcResMob').textContent = '—';
      $('tcResNote').textContent = 'Choisis un chapiteau pour voir ton prix.';
      appliquerPorte(); majBoutonEnvoi();
      return;
    }
    $('tcResMob').textContent = money(etat.sousTotal);

    if (etat.mode === 'ramassage') {
      shipLine.classList.add('tc-free');
      $('tcResShip').textContent = 'Gratuit';
      $('tcResTotal').textContent = money(etat.sousTotal) + (etat.visite ? ' +' : '');
      etat.totalReel = $('tcResTotal').textContent;
      $('tcResNote').textContent = etat.visite
        ? 'Visite de site requise au-delà de 90 personnes. Prix avant taxes, montage compris dans la marquise.'
        : 'Ramassage à Sainte-Thérèse. Prix avant taxes. Le montage du chapiteau est compris si on livre.';
      appliquerPorte(); majBoutonEnvoi();
      return;
    }

    if (etat.sousTotal < MIN_COMMANDE) {
      shipLine.classList.add('tc-free');
      $('tcResShip').textContent = 'Gratuit';
      $('tcResTotal').textContent = money(etat.sousTotal);
      etat.totalReel = $('tcResTotal').textContent;
      $('tcResNote').textContent = 'On livre à partir de ' + money(MIN_COMMANDE)
        + ' de matériel. En dessous, c’est le ramassage. Prix avant taxes.';
      appliquerPorte(); majBoutonEnvoi();
      return;
    }
    shipLine.classList.remove('tc-free');
    if (zone === null) {
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
    $('tcResTotal').textContent = money(etat.sousTotal + liv) + (etat.visite ? ' +' : '');
    etat.totalReel = $('tcResTotal').textContent;
    $('tcResNote').textContent = etat.visite
      ? 'Livraison et montage compris. Au-delà de 90 personnes, visite de site : total indicatif. Prix avant taxes.'
      : 'Livraison, montage et reprise compris. Le montage de la marquise est dans son prix. Prix avant taxes.';
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
    b.textContent = vide ? 'Choisis un chapiteau'
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
    t.push('CALCULATEUR DE CHAPITEAUX');
    t.push(etat.invites + ' personnes, ' + etat.type + ', ' + (estAssis() ? 'assis' : 'debout'));
    t.push('');
    for (var i = 0; i < etat.ordre.length; i += 1) {
      var id = etat.ordre[i], p = prod(id), q = etat.panier[id];
      if (p) t.push('  - ' + q + ' x ' + p.nom + ' = ' + money(tarifUnite(p, q) * q));
    }
    t.push('');
    t.push('Sous-total : ' + money(etat.sousTotal));
    t.push('Livraison : ' + (etat.livraison ? money(etat.livraison) : 'a confirmer'));
    t.push('TOTAL ESTIME : ' + etat.totalReel);
    if (etat.ville) t.push('Secteur : ' + etat.ville);
    if (etat.visite) t.push('VISITE DE SITE : plus de ' + SEUIL_DEVIS + ' personnes');
    return t.join(LN);
  }

  function sousTitre(o){ return o.sous; }
  function peindreTypes(){
    pastilles($('tcOptsTypes'), TYPES, etat.type, function(id){
      etat.type = id;
      peindreTypes();
      prescrire(); rendre();
    }, sousTitre);
  }
  function peindreService(){
    pastilles($('tcOptsService'), SERVICES, etat.service, function(id){
      etat.service = id;
      peindreService();
      prescrire(); rendre();
    }, sousTitre);
  }
  function peindreMode(){
    pastilles($('tcOptsMode'), MODES, etat.mode, function(id){
      etat.mode = id;
      peindreMode();
      $('tcBoiteCP').classList.toggle('tc-on', id === 'livraison');
      prescrire(); rendre();
    }, sousTitre);
  }
  peindreTypes();
  peindreService();
  peindreMode();

  $('tcDate').addEventListener('change', function(){ etat.date = this.value; rendre(); });
  $('tcDate').addEventListener('input', function(){ etat.date = this.value; rendre(); });
  (function(){
    var demain = new Date();
    demain.setDate(demain.getDate() + 1);
    $('tcDate').min = demain.toISOString().slice(0, 10);
  })();

  $('tcMinus').addEventListener('click', function(){
    $('tcGuests').value = Math.max(1, (parseInt($('tcGuests').value, 10) || 1) - 5);
    prescrire(); rendre();
  });
  $('tcPlus').addEventListener('click', function(){
    $('tcGuests').value = Math.min(250, (parseInt($('tcGuests').value, 10) || 0) + 5);
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
    if (!etat.ordre.length) { msgForm('Choisis un chapiteau avant de nous écrire.', false); return; }
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
                                service: 'Calculateur chapiteaux',
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
    fd.append('service', 'Calculateur chapiteaux');
    fd.append('page_url', window.location.href);
    fd.append('referrer', document.referrer || 'direct');
    fd.append('device', window.innerWidth <= 600 ? 'mobile' : (window.innerWidth <= 960 ? 'tablet' : 'desktop'));
    fd.append('timestamp', new Date().toISOString());
    fd.append('panier_json', JSON.stringify({
      page: 'chapiteaux', items: etat.panier, invites: etat.invites,
      type: etat.type, service: etat.service,
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

  window.EVX_CH = {
    prescrire: prescrire,
    lireInvites: lireInvites,
    besoinPlaces: besoinPlaces,
    choisirMarquise: choisirMarquise,
    tarifUnite: tarifUnite,
    prod: prod,
    etat: etat,
    money: money
  };

  prescrire();
  rendre();
})();
