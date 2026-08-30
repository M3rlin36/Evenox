(function(){
  'use strict';

  /* =========================================================
     MOTEUR CHAPITEAUX, genere par build_chapiteaux.py
     NE PAS EDITER ICI : editer le gabarit dans tools/.

     Livraison : meme grille que les autres landings, 100 $ de
                 base couvrant 10 km, puis 7 $/km jusqu'a 40 km.
     Envoi     : action WordPress evx_soumission (admin-ajax),
                 la meme que le formulaire de /contact/.
     Devis     : au-dela de SEUIL_DEVIS personnes, la page cesse
                 d'afficher un prix. Ancrage, permis et visite de
                 site rendent tout chiffre automatique malhonnete.
  ========================================================= */

  var LIV_BASE = 100, LIV_KM_INCLUS = 10, LIV_PAR_KM = 7, LIV_KM_MAX = 40;
  var SEUIL_DEVIS = 90;
  var BONUS_DEBOUT = 1.4;   /* un cocktail debout tient 40 % de plus */
  var LN = String.fromCharCode(10);

  var ZONES = {
    'J7A':['Rosemère',2.7],'J7E':['Sainte-Thérèse',2.7],'J7B':['Blainville',5.3],
    'H7L':['Laval (Sainte-Rose)',6.1],'J7G':['Boisbriand',6.4],'J6Z':['Lorraine',7.4],
    'J7H':['Boisbriand',7.6],'J7C':['Blainville',8.6],'J7P':['Saint-Eustache',9.8],
    'J6Y':['Terrebonne',10.1],'H7H':['Laval (Auteuil)',10.3],'H7P':['Laval (Fabreville)',12.1],
    'H7K':['Laval (Auteuil)',13.1],'H7T':['Laval (Chomedey)',14.3],'H7R':['Laval (Fabreville)',14.4],
    'H7J':['Laval (Saint-François)',14.5],'H7E':['Laval (Duvernay)',15.0],'J6X':['Terrebonne',15.1],
    'J7R':['Saint-Eustache',15.2],'H7S':['Laval (Chomedey)',15.6],'J7J':['Mirabel',15.7],
    'H7X':['Laval (Sainte-Dorothée)',17.9],'H7V':['Laval (Chomedey)',18.4],'H7M':['Laval (Vimont)',18.7],
    'H7W':['Laval (Chomedey)',19.2],'H7G':['Laval (Pont-Viau)',19.4],'J7L':['Mascouche',19.5],
    'H7Y':['Laval (Sainte-Dorothée)',19.7],'H7N':['Laval (Laval-des-Rapides)',19.9],'H4J':['Montréal (Ahuntsic-Cartierville)',20.5],
    'H3M':['Montréal (Ahuntsic-Cartierville)',20.9],'H2B':['Montréal (Ahuntsic-Cartierville)',21.4],'H2C':['Montréal (Ahuntsic-Cartierville)',21.4],
    'H7C':['Laval (Saint-Vincent-de-Paul)',21.8],'H1H':['Montréal (Montréal-Nord)',22.1],'J6W':['Terrebonne',22.4],
    'H2M':['Montréal (Ahuntsic-Cartierville)',23.4],'H4N':['Montréal (Saint-Laurent)',23.4],'H4S':['Montréal (Saint-Laurent)',23.8],
    'H1G':['Montréal (Montréal-Nord)',24.1],'H1Z':['Montréal (Villeray)',24.1],'H4K':['Montréal (Ahuntsic-Cartierville)',24.1],
    'H7B':['Laval (Saint-François)',24.2],'H2E':['Montréal (Villeray)',24.5],'H4L':['Montréal (Saint-Laurent)',24.7],
    'H3L':['Montréal (Ahuntsic-Cartierville)',24.9],'H9C':['Montréal (L\'Île-Bizard)',25.3],'H8Y':['Montréal (Pierrefonds-Roxboro)',25.4],
    'H1R':['Montréal (Saint-Léonard)',25.5],'H3N':['Montréal (Villeray)',26.0],'H1P':['Montréal (Saint-Léonard)',26.4],
    'H2G':['Montréal (Rosemont)',26.5],'J7Z':['Saint-Jérôme',26.5],'H2P':['Montréal (Villeray)',26.6],
    'H2N':['Montréal (Ahuntsic-Cartierville)',26.8],'H2R':['Montréal (Villeray)',27.5],'H4R':['Montréal (Saint-Laurent)',27.6],
    'H7A':['Laval (Saint-François)',27.6],'H4M':['Montréal (Saint-Laurent)',27.8],'H9B':['Dollard-des-Ormeaux',27.8],
    'H4T':['Montréal (Saint-Laurent)',28.2],'H8Z':['Montréal (Pierrefonds-Roxboro)',28.2],'H9E':['Montréal (L\'Île-Bizard)',28.5],
    'J7M':['Terrebonne',28.6],'J7K':['Mascouche',28.7],'H2S':['Montréal (Rosemont)',29.1],
    'J0N':['Oka',29.2],'H4P':['Mont-Royal',29.3],'J7Y':['Saint-Jérôme',29.4],
    'H1E':['Montréal (Rivière-des-Prairies)',29.5],'H9P':['Dorval',30.0],'H2A':['Montréal (Villeray)',30.1],
    'J6V':['Terrebonne',30.5],'H8T':['Montréal (Lachine)',30.9],'H9A':['Dollard-des-Ormeaux',31.4],
    'H9G':['Dollard-des-Ormeaux',31.4],'H1J':['Montréal (Anjou)',31.5],'H8S':['Montréal (Lachine)',31.5],
    'J7N':['Mirabel',31.8],'H9S':['Dorval',32.0],'H9R':['Pointe-Claire',32.1],
    'H1Y':['Montréal (Rosemont)',32.3],'H5B':['Montréal (Ville-Marie)',32.3],'H4A':['Montréal (Côte-des-Neiges)',32.5],
    'J5L':['Saint-Jérôme',32.5],'H1S':['Montréal (Saint-Léonard)',32.7],'H4W':['Côte-Saint-Luc',32.7],
    'H4V':['Montréal (Côte-des-Neiges)',32.8],'H1X':['Montréal (Rosemont)',33.1],'H1T':['Montréal (Rosemont)',33.3],
    'H9J':['Kirkland',33.5],'H1K':['Montréal (Anjou)',33.9],'J5M':['Saint-Lin',34.1],
    'H9H':['Kirkland',34.2],'H1M':['Montréal (Mercier)',34.4],'J4K':['Longueuil',34.5],
    'H4B':['Montréal (Côte-des-Neiges)',34.6],'J5J':['Sainte-Sophie',34.6],'H4X':['Montréal-Ouest',34.8],
    'H4C':['Montréal (Le Sud-Ouest)',34.9],'J4P':['Saint-Lambert',35.0],'J4H':['Longueuil',35.2],
    'H1W':['Montréal (Mercier)',35.9],'H1N':['Montréal (Mercier)',36.0],'H8N':['Montréal (LaSalle)',36.1],
    'H9W':['Beaconsfield',36.1],'J5Z':['Repentigny',36.1],'J5K':['Saint-Colomban',36.2],
    'H0M':['Montréal (Rivière-des-Prairies)',36.3],'H4G':['Montréal (Verdun)',36.3],'H1V':['Montréal (Mercier)',36.5],
    'J6A':['Repentigny',36.5],'H1L':['Montréal (Mercier)',36.6],'H4H':['Montréal (Verdun)',37.4],
    'H5A':['Montréal (Ville-Marie)',37.6],'H4E':['Montréal (Le Sud-Ouest)',38.2],'H4Z':['Montréal (Ville-Marie)',38.6],
    'J5Y':['Repentigny',39.5],'H9K':['Montréal (Pierrefonds-Roxboro)',39.7],'H8R':['Kahnawà:ke',39.8],
    'H8P':['LaSalle',40.0],'H1A':['Montréal (Rivière-des-Prairies)',null],'H1B':['Montréal-Est',null],
    'H1C':['Montréal (Rivière-des-Prairies)',null],'H2H':['Montréal (Le Plateau-Mont-Royal)',null],'H2J':['Montréal (Le Plateau-Mont-Royal)',null],
    'H2K':['Montréal (Ville-Marie)',null],'H2L':['Montréal (Ville-Marie)',null],'H2T':['Montréal (Le Plateau-Mont-Royal)',null],
    'H2V':['Montréal (Outremont)',null],'H2W':['Montréal (Le Plateau-Mont-Royal)',null],'H2X':['Montréal (Ville-Marie)',null],
    'H2Y':['Montréal (Ville-Marie)',null],'H2Z':['Montréal (Ville-Marie)',null],'H3A':['Montréal (Ville-Marie)',null],
    'H3B':['Montréal (Ville-Marie)',null],'H3C':['Montréal (Ville-Marie)',null],'H3E':['Montréal (Verdun)',null],
    'H3G':['Montréal (Ville-Marie)',null],'H3H':['Montréal (Ville-Marie)',null],'H3J':['Montréal (Le Sud-Ouest)',null],
    'H3K':['Montréal (Le Sud-Ouest)',null],'H3P':['Mont-Royal',null],'H3R':['Mont-Royal',null],
    'H3S':['Montréal (Côte-des-Neiges)',null],'H3T':['Montréal (Côte-des-Neiges)',null],'H3V':['Montréal (Côte-des-Neiges)',null],
    'H3W':['Montréal (Côte-des-Neiges)',null],'H3X':['Hampstead',null],'H3Y':['Westmount',null],
    'H3Z':['Westmount',null],'H9X':['Sainte-Anne-de-Bellevue',null],'J0H':['Bois-Francs-Sud (Saint-Nazaire-D\'Acton)',null],
    'J0J':['Montérégie-Est (Bedford)',null],'J0L':['Montérégie-Nord (Saint-Antoine-Sur-Richelieu)',null],'J0P':['Vaudreuil-Soulanges (Coteau-du-Lac)',null],
    'J0R':['Lanaudière-Sud (Prévost)',null],'J0S':['Montérégie-Ouest (Saint-Anicet)',null],'J2N':['Farnham',null],
    'J2R':['Saint-Hyacinthe',null],'J2S':['Saint-Hyacinthe',null],'J2T':['Saint-Hyacinthe',null],
    'J2W':['Saint-Luc',null],'J2X':['Saint-Jean-sur-Richelieu',null],'J2Y':['Saint-Jean-sur-Richelieu',null],
    'J3A':['Saint-Jean-sur-Richelieu',null],'J3B':['Saint-Jean-sur-Richelieu',null],'J3E':['Sainte-Julie',null],
    'J3G':['Beloeil',null],'J3H':['Beloeil',null],'J3L':['Chambly',null],
    'J3M':['Marieville',null],'J3N':['Saint-Basile-Le-Grand',null],'J3R':['Sorel',null],
    'J3V':['Saint-Bruno',null],'J3X':['Varennes',null],'J3Y':['Saint-Hubert',null],
    'J3Z':['Saint-Hubert',null],'J4B':['Boucherville',null],'J4G':['Longueuil',null],
    'J4J':['Longueuil',null],'J4L':['Longueuil',null],'J4M':['Longueuil',null],
    'J4N':['Longueuil',null],'J4R':['Saint-Lambert',null],'J4S':['Saint-Lambert',null],
    'J4T':['Saint-Hubert',null],'J4V':['Greenfield Park',null],'J4W':['Brossard',null],
    'J4X':['Brossard',null],'J4Y':['Brossard',null],'J4Z':['Brossard',null],
    'J5A':['Saint-Constant',null],'J5B':['Delson',null],'J5C':['Sainte-Catherine',null],
    'J5R':['La Prairie',null],'J5T':['Lavaltrie',null],'J5W':['L\'Assomption',null],
    'J5X':['L\'Épiphanie',null],'J6E':['Joliette',null],'J6J':['Châteauguay',null],
    'J6K':['Châteauguay',null],'J6N':['Beauharnois',null],'J6R':['Mercier',null],
    'J6S':['Salaberry-de-Valleyfield',null],'J6T':['Salaberry-de-Valleyfield',null],'J7T':['Vaudreuil-Dorion',null],
    'J7V':['Vaudreuil-Dorion',null],'J7W':['Pincourt',null],'J7X':['Valleyfield',null],
    'J8A':['Saint-Hippolyte',null],'J8B':['Sainte-Adèle',null],'J8C':['Sainte-Agathe-Des-Monts',null],
    'J8G':['Chatham',null],'J8H':['Lachute',null]
  };
  var CHAPITEAUX = [{"id": "marq-10x10", "nom": "Marquise 10' × 10'", "cap": 10, "prix": 275, "popup": false}, {"id": "marq-10x15", "nom": "Marquise 10' × 15'", "cap": 15, "prix": 350, "popup": false}, {"id": "marq-10x20", "nom": "Marquise 10' × 20'", "cap": 20, "prix": 400, "popup": false}, {"id": "marq-15x15", "nom": "Marquise 15' × 15'", "cap": 20, "prix": 400, "popup": false}, {"id": "marq-15x20", "nom": "Marquise 15' × 20'", "cap": 30, "prix": 450, "popup": false}, {"id": "marq-20x20", "nom": "Marquise 20' × 20'", "cap": 40, "prix": 500, "popup": false}, {"id": "marq-15x30", "nom": "Marquise 15' × 30'", "cap": 50, "prix": 650, "popup": false}, {"id": "marq-20x30", "nom": "Marquise 20' × 30'", "cap": 60, "prix": 700, "popup": false}, {"id": "marq-20x40", "nom": "Marquise 20' × 40'", "cap": 80, "prix": 800, "popup": false}, {"id": "marq-30x30", "nom": "Marquise 30' × 30'", "cap": 90, "prix": 1000, "popup": false}];
  var OPTIONS = [{"id": "mur-lateral", "nom": "Mur latéral", "prix": 10}, {"id": "poids-support", "nom": "Poids de support (lot de 4)", "prix": 10}, {"id": "baril", "nom": "Baril d'ancrage", "prix": 35}, {"id": "extincteur", "nom": "Extincteur", "prix": 25}, {"id": "plancher", "nom": "Panneau de plancher 4' × 8'", "prix": 100}, {"id": "guirlande", "nom": "Guirlande lumineuse 50 pi", "prix": 50}, {"id": "chauffage", "nom": "Chauffe-terrasse au propane", "prix": 100}, {"id": "chauffage-pyr", "nom": "Chauffe-terrasse pyramide", "prix": 120}, {"id": "son", "nom": "Système de son Bluetooth", "prix": 120}, {"id": "bar", "nom": "Bar courbé à DEL", "prix": 150}, {"id": "bbq", "nom": "BBQ", "prix": 160}, {"id": "chaise-pliante-blanche", "nom": "Chaise pliante blanche", "prix": 3}, {"id": "chaise-pliante-brune", "nom": "Chaise pliante brune", "prix": 2}, {"id": "chaise-rembourree", "nom": "Chaise rembourrée", "prix": 4}, {"id": "chaise-martha", "nom": "Chaise Martha, résine blanche", "prix": 5}, {"id": "chaise-chiavari-blanche", "nom": "Chaise Chiavari blanche", "prix": 8}, {"id": "chaise-chiavari-transparente", "nom": "Chaise Chiavari transparente", "prix": 8}, {"id": "table-ronde-60", "nom": "Table ronde 60 po", "prix": 15}, {"id": "table-ronde-48", "nom": "Table ronde 48 po", "prix": 15}, {"id": "table-rect-8", "nom": "Table rectangulaire 8 pi", "prix": 15}, {"id": "table-rect-6", "nom": "Table rectangulaire 6 pi", "prix": 10}, {"id": "nappe-rect", "nom": "Nappe rectangulaire", "prix": 8}, {"id": "nappe-ronde", "nom": "Nappe ronde 120 po", "prix": 10}];

  var etat = { format: null, debout: false, mode: 'livraison', ville: '', km: null };
  var options = {};

  function $(id){ return document.getElementById(id); }
  function money(n){
    return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' $';
  }
  function parFormat(id){
    for (var i = 0; i < CHAPITEAUX.length; i++) {
      if (CHAPITEAUX[i].id === id) { return CHAPITEAUX[i]; }
    }
    return null;
  }
  function parOption(id){
    for (var i = 0; i < OPTIONS.length; i++) {
      if (OPTIONS[i].id === id) { return OPTIONS[i]; }
    }
    return null;
  }

  var elInv = $('chInv'), elCP = $('chCP'), cadre = $('chCadre');

  function invites(){ return Math.max(1, parseInt(elInv.value, 10) || 1); }
  function capaciteUtile(f){
    return etat.debout ? Math.floor(f.cap * BONUS_DEBOUT) : f.cap;
  }

  /* Le plus petit format qui suffit. Rend null si personne ne suffit :
     c'est le signal du passage au devis. */
  function suggestion(){
    var n = invites(), gagnant = null;
    for (var i = 0; i < CHAPITEAUX.length; i++) {
      var f = CHAPITEAUX[i];
      if (f.transparent) { continue; }   /* le transparent est un choix, pas un defaut */
      if (capaciteUtile(f) >= n) {
        if (!gagnant || f.prix < gagnant.prix) { gagnant = f; }
      }
    }
    return gagnant;
  }

  /* Trois reponses distinctes, et elles ne s'affichent pas pareil :
       un nombre    -> le prix de livraison,
       null         -> secteur connu mais hors grille : sur devis,
       undefined    -> rien de saisi encore : on n'annonce rien du tout.
     Confondre les deux derniers faisait afficher « Sur devis » a l'ouverture
     de la page, avant meme que le visiteur ait tape quoi que ce soit. */
  function livraison(){
    if (etat.mode === 'ramassage') { return 0; }
    var cp = (elCP.value || '').toUpperCase().replace(/\s+/g, '').slice(0, 3);
    if (cp.length < 3) { etat.ville = ''; etat.km = null; return undefined; }
    var z = ZONES[cp];
    if (!z) { etat.ville = ''; etat.km = null; return undefined; }
    etat.ville = z[0];
    etat.km = z[1];
    if (z[1] === null || z[1] > LIV_KM_MAX) { return null; }
    if (z[1] <= LIV_KM_INCLUS) { return LIV_BASE; }
    /* Exactement la formule des pages jeux et decoration : on arrondit le
       TOTAL au dollar, pas les kilometres. Arrondir les km d'abord donnait
       107 $ a Terrebonne la ou les autres pages annoncent 101 $ — la meme
       adresse ne peut pas avoir deux prix de livraison selon la page. */
    return Math.round(LIV_BASE + LIV_PAR_KM * (z[1] - LIV_KM_INCLUS));
  }

  function lignes(){
    var out = [];
    if (etat.format) {
      var f = parFormat(etat.format);
      if (f) { out.push({ nom: f.nom, q: 1, montant: f.prix }); }
    }
    for (var id in options) {
      if (options[id] > 0) {
        var o = parOption(id);
        if (o) { out.push({ nom: o.nom, q: options[id], montant: o.prix * options[id] }); }
      }
    }
    return out;
  }

  /* ---------- Rendu ---------- */

  function render(){
    var n = invites();
    var sug = suggestion();
    var trop = !sug;

    /* Le compteur d'etape rappelle le nombre d'invites a chaque ecran.
       Sans ca, des l'etape 2 on ne sait plus ce qu'on a saisi — et c'est
       pourtant la donnee qui commande tout le reste de l'assistant.
       Il s'ecrit ici plutot que dans montre() pour suivre aussi les
       changements tapes au clavier dans le champ. */
    if (etapes) {
      $('chCompte').textContent = 'Étape ' + (pasCourant + 1) + ' sur ' + etapes.length
        + ' · ' + nomEtape(pasCourant)
        + ' · ' + n + (n > 1 ? ' invités' : ' invité')
        + (etat.debout ? ', debout' : '');
    }

    /* Le visiteur peut revenir en arriere et monter son nombre d'invites
       apres avoir choisi. Le format retenu doit alors sauter, sinon on
       vendrait un chapiteau trop petit sans jamais le dire. */
    if (etat.format) {
      var dejaPris = parFormat(etat.format);
      if (dejaPris && capaciteUtile(dejaPris) < n) { etat.format = null; }
    }


    /* Marquage et filtrage de la liste : on masque tout ce qui est trop petit.
       C'est la raison d'etre de l'assistant — demander le nombre d'invites
       AVANT le format permet de ne plus montrer que ce qui tient debout. */
    document.querySelectorAll('.ch-page .ch-item[data-format]').forEach(function(el){
      var id = el.getAttribute('data-format');
      var fmt = parFormat(id);
      el.classList.toggle('ch-hors-taille', capaciteUtile(fmt) < n);
      el.classList.toggle('ch-pris', etat.format === id);
      el.classList.toggle('ch-suggere', !!sug && sug.id === id && etat.format !== id);
      var b = el.querySelector('.ch-choisir');
      if (b) { b.textContent = (etat.format === id) ? 'Choisi' : 'Choisir'; }
      var cap = el.querySelector('.ch-cap-val');
      if (cap) { cap.textContent = capaciteUtile(fmt); }
    });

    /* Un groupe dont tous les formats sont masques ne doit pas laisser son
       titre orphelin au-dessus du vide. */
    document.querySelectorAll('.ch-page .ch-groupe').forEach(function(g){
      var total = g.querySelectorAll('.ch-item[data-format]').length;
      if (!total) { return; }
      var visibles = g.querySelectorAll('.ch-item[data-format]:not(.ch-hors-taille)').length;
      g.classList.toggle('ch-vide', visibles === 0);
    });

    cadre.classList.toggle('ch-mode-devis', trop);

    var assise = etat.debout ? 'debout' : 'assis à table';
    var note = $('chFiltreNote');
    if (trop) {
      note.textContent = 'Aucun de nos formats en libre-service ne suffit pour ' + n
        + ' invités. On passe aux grandes structures.';
    } else {
      note.textContent = 'On ne montre que les formats assez grands pour ' + n + ' invités '
        + assise + '. Le contour vert est notre recommandation : le plus petit qui suffit.';
    }

    /* Etape mobilier : on a deja le nombre d'invites, autant s'en servir pour
       eviter au visiteur de compter ses tables a la main. Une ronde de 60 po
       assoit 8 personnes. */
    var cm = $('chConseilMobilier');
    if (cm) {
      var tables = Math.ceil(n / 8);
      cm.textContent = 'Pour ' + n + (n > 1 ? ' invités' : ' invité') + ', compte environ '
        + n + (n > 1 ? ' chaises' : ' chaise') + ' et ' + tables
        + (tables > 1 ? ' tables rondes de 60 po' : ' table ronde de 60 po')
        + ' — une ronde de 60 po assoit 8 personnes.';
    }

    var conseil = $('chConseil');
    if (trop) {
      conseil.textContent = 'Au-delà de ' + SEUIL_DEVIS + ' personnes, on passe aux tentes à pôle '
        + 'et à structure — jusqu\'à 1 200 invités.';
    } else if (etat.debout) {
      conseil.textContent = 'Debout en cocktail, un chapiteau prend environ 40 % d\'invités de plus '
        + 'qu\'avec des tables.';
    } else {
      conseil.textContent = 'Assis à table, compte une marquise 20\' x 20\' pour 40 personnes.';
    }

    var liv = livraison();
    $('chVille').textContent = etat.ville || 'En attente';
    $('chVille').className = 'ch-ville' + (etat.ville ? '' : ' ch-inconnu');

    var l = lignes(), sous = 0, html = '';
    for (var i = 0; i < l.length; i++) {
      sous += l[i].montant;
      html += '<li><span>' + (l[i].q > 1 ? l[i].q + ' x ' : '') + l[i].nom
           + '</span><strong>' + money(l[i].montant) + '</strong></li>';
    }
    $('chPanier').innerHTML = html;
    etat.sousTotal = sous;

    $('chSousTotal').textContent = sous ? money(sous) : '-';
    if (etat.mode === 'ramassage')      { $('chLiv').textContent = 'Gratuit'; }
    else if (liv === undefined)         { $('chLiv').textContent = '-'; }
    else if (liv === null)              { $('chLiv').textContent = 'Sur devis'; }
    else                                { $('chLiv').textContent = money(liv); }

    if (!sous)                          { $('chTotal').textContent = '-'; }
    else if (typeof liv === 'number')   { $('chTotal').textContent = money(sous + liv); }
    else                                { $('chTotal').textContent = money(sous) + ' +'; }

    /* Le bouton n'est jamais desactive : il mene au formulaire, qui est une
       section a part entiere. Un visiteur sans idee du format doit pouvoir
       ecrire — c'est justement lui qui a le plus besoin de nous. */
    var cta = $('chCta');
    cta.disabled = false;
    var pourN = ' · ' + n + (n > 1 ? ' invités' : ' invité');
    if (trop) {
      $('chResTitre').textContent = 'Ta demande' + pourN;
      cta.textContent = 'Demander mon devis';
      $('chNote').textContent = 'On revient en 24 heures avec un prix ferme.';
    } else if (etat.format) {
      $('chResTitre').textContent = 'Ton chapiteau' + pourN;
      cta.textContent = 'Ça m\'intéresse';
      $('chNote').textContent = 'Prix avant taxes. Rien n\'est réservé tant que tu n\'as pas confirmé.';
    } else {
      $('chResTitre').textContent = 'Ta demande' + pourN;
      cta.textContent = 'Écris-nous';
      $('chNote').textContent = 'Tu n\'as pas choisi de format — écris-nous, on t\'aide à trouver.';
    }
  }

  /* ---------- Recapitulatif et envoi ---------- */

  function resume(){
    var t = [];
    t.push('CONFIGURATION CHAPITEAU');
    t.push('Invites : ' + invites() + (etat.debout ? ' (debout, cocktail)' : ' (assis a table)'));
    t.push('Mode : ' + (etat.mode === 'ramassage' ? 'Ramassage en boutique' : 'Livraison'));
    if (etat.ville) { t.push('Secteur : ' + etat.ville + (etat.km ? ' (' + etat.km + ' km)' : '')); }
    t.push('');
    if (!suggestion()) {
      t.push('AU-DELA DE ' + SEUIL_DEVIS + ' PERSONNES — DEVIS A PRODUIRE');
      t.push('Tente a pole ou a structure. Verifier ancrage, permis et acces au site.');
    } else {
      t.push('SELECTION :');
      var l = lignes();
      if (l.length) {
        for (var i = 0; i < l.length; i++) {
          t.push('  - ' + l[i].q + ' x ' + l[i].nom + ' = ' + money(l[i].montant));
        }
      } else { t.push('  (aucun format choisi)'); }
      t.push('');
      t.push('Sous-total : ' + $('chSousTotal').textContent);
      t.push('Livraison : ' + $('chLiv').textContent);
      t.push('TOTAL ESTIME : ' + $('chTotal').textContent);
    }
    return t.join(LN);
  }

  function remplirRecap(){
    var h = '';
    if (!suggestion()) {
      h = '<b>' + invites() + ' invit&eacute;s</b> , au-del&agrave; de notre grille en ligne'
        + '<br>On te revient avec un prix ferme en 24 heures.';
    } else {
      var l = lignes();
      /* Rien de configure : on laisse le bloc vide, le CSS :empty l'efface.
         Un filet mauve flottant au-dessus d'un « aucun format choisi » ne
         dit rien de plus que le formulaire vide juste en dessous. */
      if (!l.length) { $('chRecap').innerHTML = ''; return; }
      h = l.map(function(x){
        return (x.q > 1 ? x.q + ' &times; ' : '') + x.nom + ' , <b>' + money(x.montant) + '</b>';
      }).join('<br>');
      h += '<br>Livraison , <b>' + $('chLiv').textContent + '</b>';
      h += '<br>Total estim&eacute; , <b>' + $('chTotal').textContent + '</b>';
    }
    if (etat.ville) { h += '<br>Secteur , <b>' + etat.ville + '</b>'; }
    $('chRecap').innerHTML = h;
  }

  /* Un champ facultatif peut avoir ete retire du formulaire : on lit sans casser. */
  function champ(id){ var e = document.getElementById(id); return e ? e.value : ''; }

  function msg(txt, ok){
    var m = $('chMsg');
    m.textContent = txt;
    m.className = 'ch-msg ch-on ' + (ok ? 'ch-ok' : 'ch-fail');
  }

  /* Le formulaire n'est plus cache dans le panier : il a sa section, toujours
     visible. « Ouvrir » revient donc a remplir le recapitulatif et a y amener
     le visiteur. On ne met pas le focus tout de suite : sur mobile, focus()
     ouvre le clavier et coupe le defilement en cours. */
  function ouvrirFormulaire(motif){
    if (typeof motif !== 'string') { motif = ''; }
    remplirRecap();
    $('chMsg').className = 'ch-msg';
    var note = $('chNote2');
    if (note && motif && !note.value.trim()) { note.value = motif; }
    var section = document.getElementById('soumission');
    if (section) { section.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    window.setTimeout(function(){ $('chNom').focus({ preventScroll: true }); }, 450);
  }
  window.evxOuvrirFormulaire = ouvrirFormulaire;

  document.addEventListener('click', function(e){
    var a = e.target.closest ? e.target.closest('[data-evx-form]') : null;
    if (!a) { return; }
    e.preventDefault();
    ouvrirFormulaire(a.getAttribute('data-evx-form'));
  });

  function courrielValide(v){ return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v); }

  $('chCta').addEventListener('click', function(){ ouvrirFormulaire(); });

  $('chForm').addEventListener('submit', function(e){
    e.preventDefault();
    var nom = $('chNom').value.trim(), email = $('chEmail').value.trim();
    $('chNom').parentElement.classList.toggle('ch-err', !nom);
    $('chEmail').parentElement.classList.toggle('ch-err', !courrielValide(email));
    if (!nom || !courrielValide(email)) {
      msg('Il nous faut au moins ton nom et un courriel valide pour te répondre.');
      return;
    }
    var bouton = $('chSend');
    bouton.disabled = true;
    bouton.textContent = 'Envoi en cours...';
    $('chMsg').className = 'ch-msg';

    var details = resume();
    var extra = champ('chNote2').trim();
    if (extra) { details += LN + LN + 'MESSAGE DU CLIENT :' + LN + extra; }

    var fd = new FormData();
    fd.append('action', 'evx_soumission');
    fd.append('evx_nonce', window.evx_nonce || '');
    fd.append('nom_complet', nom);
    fd.append('email', email);
    fd.append('telephone', champ('chTel').trim());
    fd.append('date_event', champ('chDate'));
    fd.append('details', details);
    fd.append('service', suggestion() ? 'Configurateur chapiteaux' : 'Chapiteaux - devis grande structure');
    fd.append('page_url', window.location.href);
    fd.append('referrer', document.referrer || 'direct');
    fd.append('device', window.innerWidth <= 600 ? 'mobile' : (window.innerWidth <= 960 ? 'tablet' : 'desktop'));
    fd.append('timestamp', new Date().toISOString());
    fd.append('panier_json', JSON.stringify({
      page:    'chapiteaux',
      format:  etat.format,
      options: options,
      mode:    etat.mode,
      cp:      (elCP.value || '').toUpperCase().trim(),
      ville:   etat.ville || '',
      invites: invites(),
      debout:  etat.debout,
      devis:   !suggestion()
    }));

    fetch(window.evx_ajax || '/wp-admin/admin-ajax.php',
          { method: 'POST', body: fd, credentials: 'same-origin' })
      .then(function(r){ return r.json(); })
      .then(function(d){
        if (d && d.success) { window.location.href = '/merci'; }
        else { throw new Error('refus serveur'); }
      })
      .catch(function(){
        bouton.disabled = false;
        bouton.textContent = 'Recevoir ma soumission';
        msg('L\'envoi n\'a pas passé. Réessaie dans un instant, ou écris-nous par la page contact.');
      });
  });

  /* ---------- Entrees ---------- */

  document.querySelectorAll('.ch-page .ch-choisir').forEach(function(b){
    b.addEventListener('click', function(){
      var id = this.closest('.ch-item').getAttribute('data-format');
      etat.format = (etat.format === id) ? null : id;
      render();
    });
  });

  document.querySelectorAll('.ch-page .ch-item[data-option] .ch-qbtn').forEach(function(b){
    b.addEventListener('click', function(){
      var ligne = this.closest('.ch-item');
      var id = ligne.getAttribute('data-option');
      var d = parseInt(this.getAttribute('data-d'), 10);
      options[id] = Math.max(0, Math.min(99, (options[id] || 0) + d));
      ligne.querySelector('.ch-qval').textContent = options[id];
      ligne.classList.toggle('ch-pris', options[id] > 0);
      render();
    });
  });

  /* Attention au selecteur : les boutons « assis / debout » portent eux aussi
     la classe .ch-mode pour heriter du style. Cibler .ch-mode tout court
     ferait basculer etat.mode a null au premier clic sur l'assise. On exige
     donc l'attribut data-mode, que seuls les boutons de livraison portent. */
  document.querySelectorAll('.ch-page .ch-mode[data-mode]').forEach(function(b){
    b.addEventListener('click', function(){
      if (this.disabled) { return; }
      etat.mode = this.getAttribute('data-mode');
      document.querySelectorAll('.ch-page .ch-mode[data-mode]').forEach(function(x){
        x.classList.remove('ch-on');
      });
      this.classList.add('ch-on');
      render();
    });
  });

  document.querySelectorAll('.ch-page .ch-assise').forEach(function(b){
    b.addEventListener('click', function(){
      etat.debout = this.getAttribute('data-assise') === 'debout';
      document.querySelectorAll('.ch-page .ch-assise').forEach(function(x){ x.classList.remove('ch-on'); });
      this.classList.add('ch-on');
      render();
    });
  });

  $('chMoins').addEventListener('click', function(){
    elInv.value = Math.max(1, invites() - 5); render();
  });
  $('chPlus').addEventListener('click', function(){
    elInv.value = Math.min(2000, invites() + 5); render();
  });
  elInv.addEventListener('input', render);
  elCP.addEventListener('input', render);

  /* Les forfaits ouvrent le formulaire avec leur nom deja inscrit. */
  document.querySelectorAll('.ch-page .ch-card-cta').forEach(function(b){
    b.addEventListener('click', function(){
      ouvrirFormulaire('Forfait ' + this.getAttribute('data-forfait'));
    });
  });

  /* FAQ */
  document.querySelectorAll('.ch-page .faq-question').forEach(function(btn){
    btn.addEventListener('click', function(){
      var ouvert = this.classList.contains('open');
      document.querySelectorAll('.ch-page .faq-question.open').forEach(function(b){
        b.classList.remove('open');
        b.parentElement.querySelector('.faq-answer').style.maxHeight = null;
      });
      if (!ouvert) {
        this.classList.add('open');
        var a = this.parentElement.querySelector('.faq-answer');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* JSON-LD FAQPage : WordPress strip les <script> du contenu de page, donc
     on l'injecte depuis le DOM rendu. Google lit le rendu. */
  try {
    var ld = [];
    document.querySelectorAll('.ch-page .faq-question').forEach(function(b){
      var q = b.textContent.replace(/\s+/g, ' ').trim();
      var a = b.parentElement.querySelector('.faq-answer p');
      if (q && a) {
        ld.push({ '@type': 'Question', 'name': q, 'acceptedAnswer':
                { '@type': 'Answer', 'text': a.textContent.replace(/\s+/g, ' ').trim() } });
      }
    });
    if (ld.length) {
      var el = document.createElement('script');
      el.type = 'application/ld+json';
      el.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': ld });
      document.head.appendChild(el);
    }
  } catch (e) {}

  /* ---------- L'assistant : une etape a la fois ----------
     La barre de progression se construit depuis le DOM plutot que depuis une
     liste en dur : ajouter ou retirer une .ch-etape dans le gabarit suffit,
     le compteur et les pas suivent. */
  var etapes = Array.prototype.slice.call(
    document.querySelectorAll('.ch-page .ch-etapes .ch-etape'));
  var barre = $('chBarre'), nav = $('chNav'), suiv = $('chSuiv');
  /* Surtout pas « i » : render() declare son propre `var i` dans une boucle
     for, et var etant hoiste a la fonction, cet i local masque le notre des
     la premiere ligne de render(). L'assistant tombait alors sur
     etapes[undefined] et tout le rendu s'arretait la — compteur vide,
     conseil vide, prix jamais calcule. */
  var pas = [], pasCourant = 0, vu = 0;

  function nomEtape(k){ return etapes[k].getAttribute('data-nom') || ('Étape ' + (k + 1)); }

  etapes.forEach(function(el, k){
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'ch-wiz-pas';
    b.innerHTML = '<i></i><em></em>';
    b.querySelector('em').textContent = nomEtape(k);
    /* On ne laisse sauter qu'en arriere : afficher la liste des formats avant
       de connaitre le nombre d'invites, c'est exactement le defaut que cet
       assistant corrige. */
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
    etapes.forEach(function(el, k){ el.classList.toggle('ch-wiz-on', k === pasCourant); });
    pas.forEach(function(b, k){
      b.classList.toggle('ch-actif', k === pasCourant);
      b.classList.toggle('ch-fait', k <= vu);
    });
    nav.classList.toggle('ch-wiz-debut', pasCourant === 0);
    suiv.textContent = (pasCourant === etapes.length - 1) ? 'Voir mon prix' : 'Continuer';
    render();   /* render() ecrit le compteur : il connait le nombre d'invites */
  }

  suiv.addEventListener('click', function(){
    if (pasCourant < etapes.length - 1) { montre(pasCourant + 1); remonter(); return; }
    cadre.classList.add('ch-wiz-fini');
    remonter();
  });
  $('chPrec').addEventListener('click', function(){ montre(pasCourant - 1); remonter(); });
  $('chRetour').addEventListener('click', function(){
    cadre.classList.remove('ch-wiz-fini');
    montre(etapes.length - 1);
    remonter();
  });

  montre(0);
})();