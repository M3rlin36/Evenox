(function(){
  'use strict';

  /* =========================================================
     CALCULATEUR TABLES & CHAISES
     Forfaits  : /forfaits-tables-chaises/ (juillet 2026)
     Livraison : incluse 0-20 km · +100 $ 20-30 km · +200 $ 30-40 km
                 (BUSINESS/docs/politique-livraison.md)
     Un code postal inconnu tombe en « sur devis ». On n'invente
     jamais un prix pour un secteur qu'on n'a pas valide.
  ========================================================= */

  var FORFAITS = [
    { max: 24,  nom: 'Forfait Essentiel',    prix: 449,  chaises: 24,  tables: 4,  nappes: 4,  url: 'https://evenox.ca/forfait-mobilier-essentiel/' },
    { max: 48,  nom: 'Forfait Réception',    prix: 649,  chaises: 48,  tables: 8,  nappes: 8,  url: 'https://evenox.ca/forfait-mobilier-reception/' },
    { max: 72,  nom: 'Forfait Grande Salle', prix: 849,  chaises: 72,  tables: 12, nappes: 12, url: 'https://evenox.ca/forfait-mobilier-grande-salle/' }
  ];  /* Evenement 100 retire : sa page n existe plus (22 aout 2026) */

  /* FSA -> [ville, km depuis Sainte-Therese]. km null = secteur a deplacement dedie. */
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

  /* ---- Regles de livraison (Alexandre, 28 juillet 2026) ----
     A la carte : 100 $ de base couvrant 10 km, puis 7 $/km jusqu'a 40 km.
                  Minimum de commande 300 $. Au-dela de 40 km et au
                  centre-ville de Montreal : sur devis, jamais de calcul auto.
     Forfaits   : livraison incluse jusqu'a 20 km, +100 $ 20-30, +200 $ 30-40. */
  var LIV_BASE = 100, LIV_KM_INCLUS = 10, LIV_PAR_KM = 7, LIV_KM_MAX = 40;


  /* Supplement de livraison sur un forfait, selon la distance */
  function supplementForfait(km){
    if (km === null || km > LIV_KM_MAX) return null;   /* sur devis */
    if (km <= 20) return 0;
    if (km <= 30) return 100;
    return 200;
  }

  /* Livraison a l'unite : 100 $ jusqu'a 10 km, puis 7 $/km */
  function livraisonCarte(km){
    if (km === null || km > LIV_KM_MAX) return null;   /* sur devis */
    if (km <= LIV_KM_INCLUS) return LIV_BASE;
    /* Arrondi au dollar : les km sont des distances routieres reelles,
       donc decimales, sans ca la livraison sort a « 252,60 $ ». */
    return Math.round(LIV_BASE + LIV_PAR_KM * (km - LIV_KM_INCLUS));
  }
  var $ = function(id){ return document.getElementById(id); };
  var elGuests = $('tcGuests'), elPostal = $('tcPostal'), elCity = $('tcCity'), elCityName = $('tcCityName');
  if (!elGuests) return;

  /* Etat du dernier calcul, sert a personnaliser l'offre « c'est trop cher » */
  var etat = { forfait: null, surcharge: 0, ville: null, invites: 50,
               secteurSurDevis: false, grosEvenement: false, cpConnu: false };

  function fmt(n){ return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' $'; }

  function lookupZone(raw){
    var fsa = (raw || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3);
    if (fsa.length < 3) return null;
    return ZONES[fsa] || 'UNKNOWN';
  }

  /* ---- Catalogue du configurateur (prix Booqable, juillet 2026) ---- */
  var CHAISES = [
    { id:'aucune',     nom:'Pas besoin',      prix:0 },
    { id:'brune',      nom:'Pliante brune',   prix:2, img:'https://content.booqablecdn.com/uploads/b70819cfd19504bd0bd3dcf90d78efc0/photo/photo/d391c1d2-0631-4f26-9f24-5d6570c34f7a/large_1742813305-133602406798633-0001-7096/upload.jpg' },
    { id:'blanche',    nom:'Pliante blanche', prix:3, img:'https://content.booqablecdn.com/uploads/b70819cfd19504bd0bd3dcf90d78efc0/photo/photo/5cf723e1-2661-4393-bcdf-227b1b66960c/large_upload.jpg' },
    { id:'rembourree', nom:'Rembourrée',      prix:4, img:'https://content.booqablecdn.com/uploads/b70819cfd19504bd0bd3dcf90d78efc0/photo/photo/e440151e-dce5-4c4f-b272-834db483e1f3/large_upload.jpg' },
    { id:'martha',     nom:'Martha',          prix:5, img:'https://content.booqablecdn.com/uploads/b70819cfd19504bd0bd3dcf90d78efc0/photo/photo/9ceb2366-8150-4789-8bdf-da7ecc10ce18/large_1726580067-115153431876068-0001-5047/upload.jpg' },
    { id:'chiavari_tr', nom:'Chiavari transparente', prix:8, img:'https://content.booqablecdn.com/uploads/b70819cfd19504bd0bd3dcf90d78efc0/photo/photo/b62cde93-1868-468e-b90d-e2ffdb121bce/large_1747058824-165902395797123-0005-9089/upload.jpg' },
    { id:'chiavari_bl', nom:'Chiavari blanche',      prix:8, img:'https://content.booqablecdn.com/uploads/b70819cfd19504bd0bd3dcf90d78efc0/photo/photo/b62cde93-1868-468e-b90d-e2ffdb121bce/large_1747058824-165902395797123-0005-9089/upload.jpg' }
  ];
  var TABLES = [
    { id:'aucune',   nom:'Pas besoin',         prix:0,  places:0,  nappe:null },
    { id:'rect6',    nom:'Rectangulaire 6 pi', prix:10, places:8,  nappe:'rect', img:'https://content.booqablecdn.com/uploads/b70819cfd19504bd0bd3dcf90d78efc0/photo/photo/bb7473b6-6953-4b30-a7f8-85aa8edafdd9/large_upload.jpg' },
    { id:'rect8',    nom:'Rectangulaire 8 pi', prix:15, places:10, nappe:'rect', img:'https://content.booqablecdn.com/uploads/b70819cfd19504bd0bd3dcf90d78efc0/photo/photo/bb7473b6-6953-4b30-a7f8-85aa8edafdd9/large_upload.jpg' },
    { id:'ronde48',  nom:'Ronde 48 po',        prix:15, places:6,  nappe:'ronde', img:'https://content.booqablecdn.com/uploads/b70819cfd19504bd0bd3dcf90d78efc0/photo/photo/31d2c7a8-3afe-4583-ae10-ae4bdb7e24a4/large_1726583734-843570680248157-0022-5101/s-l1200.jpg' },
    { id:'ronde60',  nom:'Ronde 60 po',        prix:15, places:8,  nappe:'ronde', img:'https://content.booqablecdn.com/uploads/b70819cfd19504bd0bd3dcf90d78efc0/photo/photo/21c66349-e265-4374-8cd5-2db6de5fbc9a/large_table-banquet-pliante-ronde.jpg' }
  ];
  var NAPPES = { rect:{nom:'Nappe rectangulaire', prix:8}, ronde:{nom:'Nappe ronde 120 po', prix:10} };
  /* Les 3 seules couleurs en stock */
  var COULEURS = [
    { id:'aucune',    nom:'Non merci' },
    { id:'blanche',   nom:'Blanche' },
    { id:'noire',     nom:'Noire' },
    { id:'rouge',     nom:'Rouge' },
    { id:'bourgogne', nom:'Bourgogne' }
  ];
  /* Ce qu on a en stock, format par format. La bourgogne n existe qu en
     6 pieds ; le rouge n existe qu en six exemplaires. */
  var COULEURS_PAR_TABLE = {
    rect6:    ['aucune','blanche','noire','rouge','bourgogne'],
    rect8:    ['aucune','blanche','noire'],
    ronde48:  ['aucune','blanche','noire'],
    ronde60:  ['aucune','blanche','noire'],
    cocktail: ['aucune','blanche','noire','rouge']
  };
  var STOCK_COULEUR = { rouge: 6, bourgogne: 8 };
  function couleursDe(idTable){
    var l = COULEURS_PAR_TABLE[idTable] || ['aucune','blanche','noire'];
    return COULEURS.filter(function(c){ return l.indexOf(c.id) >= 0; });
  }
  function couleurValide(idTable, idCouleur){
    var l = COULEURS_PAR_TABLE[idTable] || ['aucune','blanche','noire'];
    return l.indexOf(idCouleur) >= 0 ? idCouleur : 'blanche';
  }


  /* ---- Lots de chaises (22 aout 2026). Prix par chaise. ---- */
  var LOTS = {
    brune:       { base: 2, lots: [ {n:50, p:1.75, url:'https://evenox.ca/lot-de-50-chaises-pliantes-brunes/'},
                                    {n:100, p:1.50, url:'https://evenox.ca/lot-de-100-chaises-pliantes-brunes/'} ] },
    blanche:     { base: 3, lots: [ {n:40, p:2.75, url:'https://evenox.ca/lot-de-40-chaises-pliantes-blanches/'},
                                    {n:60, p:2.50, url:'https://evenox.ca/lot-de-60-chaises-pliantes-blanches/'},
                                    {n:100, p:2.25, url:'https://evenox.ca/lot-de-100-chaises-pliantes-blanches/'} ] },
    rembourree:  { base: 4, lots: [ {n:40, p:3.50, url:'https://evenox.ca/lot-de-40-chaises-pliantes-noires-rembourrees/'},
                                    {n:70, p:3.00, url:'https://evenox.ca/lot-de-70-chaises-pliantes-noires-rembourrees/'} ] },
    martha:      { base: 5, lots: [ {n:40, p:4.50, url:'https://evenox.ca/lot-de-40-chaises-martha/'},
                                    {n:60, p:4.00, url:'https://evenox.ca/lot-de-60-chaises-martha/'} ] },
    chiavari_bl: { base: 8, lots: [ {n:50, p:7.50, url:'https://evenox.ca/lot-de-50-chaises-chiavari/'},
                                    {n:100, p:7.00, url:'https://evenox.ca/lot-de-100-chaises-chiavari/'} ] }
  };
  /* Le lot qui sert le client : celui qu il atteint deja, sinon le prochain
     s il n en est pas loin. On ne pousse jamais un lot hors de portee. */

  /* Escompte sur volume : le palier atteint decide du prix a la chaise.
     Les paliers sont ceux dictes par Alexandre le 22 aout 2026. */

  /* Escompte sur volume, cote tables. Seule la pliante 6 pi en a un :
     115 exemplaires en stock, contre 21 rondes 48 po et 10 rondes 60 po. */
  var LOTS_TABLES = {
    rect6: { base: 10, lots: [ {n:20, p:9}, {n:40, p:8} ] }
  };
  function tarifTable(idTable, q){
    var d = LOTS_TABLES[idTable];
    var r = { prix: null, base: null, palier: null, suivant: null };
    if (!d) { return r; }
    r.base = d.base; r.prix = d.base;
    d.lots.forEach(function(l){
      if (q >= l.n) {
        if (!r.palier) { r.palier = l; } else if (l.n > r.palier.n) { r.palier = l; }
      } else {
        if (!r.suivant) { r.suivant = l; } else if (l.n < r.suivant.n) { r.suivant = l; }
      }
    });
    if (r.palier) { r.prix = r.palier.p; }
    return r;
  }

  /* Ce qu on possede vraiment, releve dans Booqable le 22 aout 2026.
     On ne propose pas une quantite qu on ne peut pas livrer. */
  var STOCK = {
    brune: 520, blanche: 200, rembourree: 158, martha: 72,
    chiavari_tr: 34, chiavari_bl: 120,
    rect6: 105, rect8: 15, ronde48: 7, ronde60: 10
  };
  function majStock(idChaise, qCh, idTable, qTb, nomCh, nomTb){
    var res = document.querySelector('.tc-page .tc-result');
    if (!res) { return; }
    var boite = document.getElementById('tcStock');
    if (!boite) {
      boite = document.createElement('div');
      boite.id = 'tcStock';
      boite.className = 'tc-stock';
      var lignes = res.querySelector('.tc-res-lines');
      if (lignes) { lignes.parentNode.insertBefore(boite, lignes); }
      else { res.appendChild(boite); }
    }
    var manques = [];
    var sc = STOCK[idChaise];
    if (sc) { if (qCh > sc) { manques.push({ nom: nomCh, a: sc, veut: qCh }); } }
    var st = STOCK[idTable];
    if (st) { if (qTb > st) { manques.push({ nom: nomTb, a: st, veut: qTb }); } }
    if (!manques.length) { boite.classList.remove('tc-on'); boite.innerHTML = ''; return; }
    var h = '<p class="tc-stock-txt"><b>Au-del&agrave; de notre inventaire.</b></p>';
    manques.forEach(function(m){
      h += '<p class="tc-stock-ligne"><b>' + m.nom + '</b>&nbsp;: on en a ' + m.a
        + ', ton kit en demande ' + m.veut + '.</p>';
    });
    h += '<p class="tc-stock-suite">On peut compl&eacute;ter avec un autre mod&egrave;le. '
      + 'Demande ton prix ci-dessous et on te r&eacute;pond en 24&nbsp;heures.</p>';
    boite.innerHTML = h;
    boite.classList.add('tc-on');
  }
  function tarifChaise(idChaise, q){
    var d = LOTS[idChaise];
    var r = { prix: null, base: null, palier: null, suivant: null };
    if (!d) { return r; }
    r.base = d.base; r.prix = d.base;
    d.lots.forEach(function(l){
      if (q >= l.n) {
        if (!r.palier) { r.palier = l; }
        else if (l.n > r.palier.n) { r.palier = l; }
      } else {
        if (!r.suivant) { r.suivant = l; }
        else if (l.n < r.suivant.n) { r.suivant = l; }
      }
    });
    if (r.palier) { r.prix = r.palier.p; }
    return r;
  }
  function lotUtile(idChaise, q){
    var d = LOTS[idChaise];
    if (!d) { return null; }
    if (q <= 0) { return null; }
    var couvre = null, plusGros = null;
    d.lots.forEach(function(l){
      if (l.n >= q) { if (!couvre) { couvre = l; } else if (l.n < couvre.n) { couvre = l; } }
      if (!plusGros) { plusGros = l; } else if (l.n > plusGros.n) { plusGros = l; }
    });
    if (couvre) {
      if (q === couvre.n) { return { lot: couvre, base: d.base, q: q, atteint: true }; }
      if (q >= couvre.n * 0.7) { return { lot: couvre, base: d.base, q: q, atteint: false }; }
      return null;
    }
    if (plusGros) { return { lot: plusGros, base: d.base, q: q, atteint: true }; }
    return null;
  }


  /* Le client accepte un palier : on fige les quantites et on recalcule. */
  function accepterPalier(quoi, n){
    var q = quantites(parseInt(elGuests.value, 10) || 1);
    if (!choix.manuel) {
      choix.manuel = true;
      choix.qChaises = q.autoChaises;
      choix.qTables = q.autoTables;
    }
    if (quoi === 'chaises') { choix.qChaises = n; }
    if (quoi === 'tables') { choix.qTables = n; }
    batirQuantites();
    render();
  }
  /* Encart de l escompte. Il informe ET il agit : le palier suivant est un
     bouton qui met le panier a jour. Aucun lien vers l exterieur. */
  function ligneP(classe, html){
    var p = document.createElement('p');
    p.className = classe;
    p.innerHTML = html;
    return p;
  }
  function boutonPalier(txt, quoi, n){
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'tc-lot-go';
    b.innerHTML = txt;
    b.addEventListener('click', function(){ accepterPalier(quoi, n); });
    return b;
  }
  function majLot(idChaise, q){
    var res = document.querySelector('.tc-page .tc-result');
    if (!res) { return; }
    var boite = document.getElementById('tcLot');
    if (!boite) {
      boite = document.createElement('div');
      boite.id = 'tcLot';
      boite.className = 'tc-lot';
      var lignes = res.querySelector('.tc-res-lines');
      if (lignes) { lignes.parentNode.insertBefore(boite, lignes); }
      else { res.appendChild(boite); }
    }
    boite.innerHTML = '';
    var vide = true;
    var t = tarifChaise(idChaise, q);
    if (t.prix !== null) {
      if (q > 0) {
        if (t.palier) {
          boite.appendChild(ligneP('tc-lot-txt',
            '<b>Escompte sur volume appliqu&eacute;.</b> La chaise te revient &agrave; '
            + money(t.prix) + ' au lieu de ' + money(t.base) + ' &mdash; '
            + money((t.base - t.prix) * q) + ' de moins sur ta commande.'));
          vide = false;
        }
        if (t.suivant) {
          var manque = t.suivant.n - q;
          boite.appendChild(ligneP('tc-lot-suite',
            '&Agrave; <b>' + t.suivant.n + ' chaises</b>, elle tombe &agrave; '
            + money(t.suivant.p) + '. Il t&rsquo;en manque ' + manque + '.'));
          boite.appendChild(boutonPalier(
            'Passer &agrave; ' + t.suivant.n + ' chaises', 'chaises', t.suivant.n));
          vide = false;
        }
      }
    }
    var nbTb = etat.nbTables || 0;
    var tt = tarifTable(choix.table, nbTb);
    if (tt.prix !== null) {
      if (tt.palier) {
        boite.appendChild(ligneP('tc-lot-suite',
          '<b>Tables&nbsp;:</b> escompte appliqu&eacute;, ' + money(tt.prix)
          + ' la table au lieu de ' + money(tt.base) + '.'));
        vide = false;
      } else if (tt.suivant) {
        if (nbTb > 0) {
          boite.appendChild(ligneP('tc-lot-suite',
            '<b>Tables&nbsp;:</b> &agrave; ' + tt.suivant.n + ', elles tombent &agrave; '
            + money(tt.suivant.p) + ' chacune.'));
          boite.appendChild(boutonPalier(
            'Passer &agrave; ' + tt.suivant.n + ' tables', 'tables', tt.suivant.n));
          vide = false;
        }
      }
    }
    if (vide) { boite.classList.remove('tc-on'); boite.innerHTML = ''; return; }
    boite.classList.add('tc-on');
  }

  /* Minimum de materiel pour qu'on se deplace */
  var MIN_COMMANDE = 300;

  /* Choix courants, valeurs par defaut : un prix s'affiche sans rien toucher */
  var choix = {
    chaise:'blanche', table:'ronde60', nappe:'blanche',
    /* null = quantite calculee automatiquement ; un nombre = impose par le client */
    qChaises:null, qTables:null, manuel:false,
    /* Add-on independant : on peut avoir des rondes ET des cocktails */
    cocktail:0, nappeCocktail:'blanche',
    /* livraison ou ramassage a l entrepot (28 aout 2026) */
    mode:'livraison'
  };

  var COCKTAIL = { nom:'Table à cocktail', prix:10 };
  /* Nappe a cocktail : facturee a part, pas incluse.
     8 $ = aligne sur la nappe rectangulaire. Booqable l'a encore a 0 $, a corriger. */
  var NAPPE_COCKTAIL = { nom:'Nappe à cocktail', prix:6 };  /* 6,00 $ : le prix de Booqable, verifie le 22 aout 2026 */

  function money(n){
    var s = Math.round(n * 100) / 100;
    var txt = (s % 1 === 0) ? String(s) : s.toFixed(2).replace('.', ',');
    return txt.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' $';
  }

  function trouve(liste, id){
    for (var i = 0; i < liste.length; i++) { if (liste[i].id === id) return liste[i]; }
    return liste[0];
  }


  /* ---------- Visionneuse produit (11 aout 2026) ----------
     La pastille est deja un bouton qui choisit le modele. On ne peut pas
     y imbriquer un second bouton sans casser le clic de selection : la
     loupe arrete donc la propagation elle-meme.                        */
  var tcVisio = null;

  function tcConstruireVisio(){
    if (tcVisio) return tcVisio;
    var d = document.createElement('div');
    d.className = 'tc-visio';
    d.hidden = true;
    d.innerHTML =
      '<div class="tc-visio-fond"></div>' +
      '<figure class="tc-visio-boite" role="dialog" aria-modal="true">' +
        '<button type="button" class="tc-visio-x" aria-label="Fermer">&times;</button>' +
        '<img src="" alt="">' +
        '<figcaption><span class="tc-visio-nom"></span>' +
        '<span class="tc-visio-prix"></span></figcaption>' +
      '</figure>';
    (document.querySelector('.tc-page') || document.body).appendChild(d);
    d.querySelector('.tc-visio-x').addEventListener('click', tcFermerVisio);
    d.querySelector('.tc-visio-fond').addEventListener('click', tcFermerVisio);
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && tcVisio && !tcVisio.hidden) tcFermerVisio();
    });
    tcVisio = d;
    return d;
  }

  function tcOuvrirVisio(o, sousTitre){
    var d = tcConstruireVisio();
    d.querySelector('img').setAttribute('src', o.img);
    d.querySelector('img').setAttribute('alt', o.nom);
    d.querySelector('.tc-visio-nom').textContent = o.nom;
    d.querySelector('.tc-visio-prix').textContent = sousTitre || '';
    d.hidden = false;
    document.body.style.overflow = 'hidden';
    d.querySelector('.tc-visio-x').focus();
  }

  function tcFermerVisio(){
    if (!tcVisio) return;
    tcVisio.hidden = true;
    document.body.style.overflow = '';
  }

  /* ---- Pastilles de choix ---- */
  function batirOptions(){
    function rendre(hote, liste, actif, onPick, sousTitre){
      hote.innerHTML = '';
      liste.forEach(function(o){
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'tc-opt' + (o.id === actif ? ' tc-on' : '');
        var st = sousTitre(o);
        /* Photo Booqable si on en a une. « Pas besoin » et les tables
           rectangulaires n'en ont pas : la pastille reste en texte seul. */
        var vign = o.img
          ? '<span class="tc-opt-img"><img src="' + o.img + '" alt="" loading="lazy"></span>'
          : '';
        b.innerHTML = vign + o.nom + (st ? '<small>' + st + '</small>' : '');
        b.addEventListener('click', function(){ onPick(o.id); });
        if (o.img) {
          var loupe = document.createElement('button');
          loupe.type = 'button';
          loupe.className = 'tc-loupe';
          loupe.setAttribute('aria-label', 'Voir ' + o.nom + ' en grand');
          loupe.addEventListener('click', function(e){
            e.stopPropagation();        /* sinon on selectionne aussi le modele */
            e.preventDefault();
            tcOuvrirVisio(o, st);
          });
          b.appendChild(loupe);
        }
        hote.appendChild(b);
      });
    }
    rendre($('tcOptsChaises'), CHAISES, choix.chaise,
      function(id){ choix.chaise = id; majSelection(); },
      function(o){ return o.prix ? money(o.prix) + ' / ch.' : ''; });

    rendre($('tcOptsTables'), TABLES, choix.table,
      function(id){ choix.table = id; majSelection(); },
      function(o){ return o.places ? money(o.prix) + ' · ' + o.places + ' pl.' : ''; });

    var t = trouve(TABLES, choix.table);
    var hote = $('tcOptsNappes');
    hote.innerHTML = '';

    if (t.nappe !== 'rect' && t.nappe !== 'ronde') {
      hote.innerHTML = '<span class="tc-opt" style="border-style:dashed;cursor:default;">Choisis une table d\'abord</span>';
      return;
    }
    choix.nappe = couleurValide(choix.table, choix.nappe);
    couleursDe(choix.table).forEach(function(o){
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tc-opt' + (choix.nappe === o.id ? ' tc-on' : '');
      b.innerHTML = o.nom + (STOCK_COULEUR[o.id]
        ? '<small>' + STOCK_COULEUR[o.id] + ' en stock</small>' : '');
      b.addEventListener('click', function(){ choix.nappe = o.id; majSelection(); });
      hote.appendChild(b);
    });
  }

  /* ---- Panier ---- */
  /* Quantites suggerees, ou celles imposees par le client */
  function quantites(guests){
    var tb = trouve(TABLES, choix.table);
    var autoCh = guests;
    var autoTb = (tb.places > 0) ? Math.ceil(guests / tb.places) : 0;
    return {
      chaises: (choix.qChaises !== null) ? choix.qChaises : autoCh,
      tables:  (choix.qTables  !== null) ? choix.qTables  : autoTb,
      autoChaises: autoCh, autoTables: autoTb
    };
  }

  function batirPanier(guests){
    var ch = trouve(CHAISES, choix.chaise), tb = trouve(TABLES, choix.table);
    var q = quantites(guests);
    var lignes = [], total = 0;
    var nbCh = (ch.id === 'aucune') ? 0 : q.chaises;
    var nbTb = (tb.id === 'aucune') ? 0 : q.tables;

    if (nbCh > 0) {
      var tc = tarifChaise(ch.id, nbCh);
      var puCh = (tc.prix === null) ? ch.prix : tc.prix;
      var sc = puCh * nbCh;
      lignes.push({ txt: nbCh + ' × ' + ch.nom + (tc.palier ? ' à ' + money(puCh) : ''),
                    prix: money(sc) });
      total += sc;
    }
    if (nbTb > 0) {
      var tt = tarifTable(tb.id, nbTb);
      var puTb = (tt.prix === null) ? tb.prix : tt.prix;
      var st = puTb * nbTb;
      lignes.push({ txt: nbTb + ' × ' + tb.nom + (tt.palier ? ' à ' + money(puTb) : ''),
                    prix: money(st) });
      total += st;

      if (choix.nappe !== 'aucune' && NAPPES[tb.nappe]) {
        var np = NAPPES[tb.nappe], coul = trouve(COULEURS, choix.nappe);
        var sn = np.prix * nbTb;
        lignes.push({ txt: nbTb + ' × ' + np.nom + ' ' + coul.nom.toLowerCase(), prix: money(sn) });
        total += sn;
      }
    }
    if (choix.cocktail > 0) {
      var sco = COCKTAIL.prix * choix.cocktail;
      lignes.push({ txt: choix.cocktail + ' × ' + COCKTAIL.nom, prix: money(sco) });
      total += sco;

      if (choix.nappeCocktail !== 'aucune') {
        var cc = trouve(COULEURS, choix.nappeCocktail);
        var snc = NAPPE_COCKTAIL.prix * choix.cocktail;
        lignes.push({ txt: choix.cocktail + ' × ' + NAPPE_COCKTAIL.nom + ' ' + cc.nom.toLowerCase(),
                      prix: money(snc) });
        total += snc;
      }
    }
    return { lignes: lignes, total: total, nbTables: nbTb, nbChaises: nbCh,
             chaise: ch, table: tb, cocktail: choix.cocktail };
  }

  /* ---- Panneau « Modifier les quantités » ---- */
  function batirQuantites(){
    var boite = $('tcQte'), guests = parseInt(elGuests.value, 10) || 1;
    var q = quantites(guests);
    var ch = trouve(CHAISES, choix.chaise), tb = trouve(TABLES, choix.table);

    $('tcQteToggle').textContent = choix.manuel ? 'Revenir au calcul auto' : 'Modifier les quantités';
    boite.classList.toggle('tc-on', choix.manuel);
    if (!choix.manuel) return;

    var champs = '';
    if (ch.id !== 'aucune') {
      champs += '<label class="tc-qte-row"><span>Chaises</span>' +
        '<input type="number" min="0" max="2000" inputmode="numeric" id="tcQteCh" value="' + q.chaises + '"></label>';
    }
    if (tb.id !== 'aucune') {
      champs += '<label class="tc-qte-row"><span>Tables</span>' +
        '<input type="number" min="0" max="500" inputmode="numeric" id="tcQteTb" value="' + q.tables + '"></label>';
    }
    if (!champs) champs = '<p class="tc-qte-vide">Choisis d\'abord des chaises ou des tables.</p>';
    boite.innerHTML = champs +
      '<p class="tc-qte-note">Une nappe par table. Suggestion pour ' + guests + ' invités : ' +
      q.autoChaises + ' chaises, ' + q.autoTables + ' tables.</p>';

    if ($('tcQteCh')) {
      $('tcQteCh').addEventListener('input', function(){
        var v = parseInt(this.value, 10);
        choix.qChaises = isNaN(v) ? 0 : Math.max(0, Math.min(2000, v));
        render();
      });
    }
    if ($('tcQteTb')) {
      $('tcQteTb').addEventListener('input', function(){
        var v = parseInt(this.value, 10);
        choix.qTables = isNaN(v) ? 0 : Math.max(0, Math.min(500, v));
        render();
      });
    }
  }

  function render(){
    /* Toute modification des entrees ramene au prix, jamais a l'offre */
    $('tcResult').classList.remove('tc-show-offer');

    var guests = parseInt(elGuests.value, 10);
    if (isNaN(guests) || guests < 1) guests = 1;
    if (guests > 600) guests = 600;

    var zone = lookupZone(elPostal.value);
    etat.invites = guests;
    etat.ville = (zone && zone !== 'UNKNOWN') ? zone[0] : null;
    etat.cpConnu = (zone !== null);
    etat.grosEvenement = false;
    etat.secteurSurDevis = false;

    if (zone === null) { elCityName.textContent = 'En attente'; elCity.classList.add('tc-unknown'); }
    else if (zone === 'UNKNOWN') { elCityName.textContent = 'Secteur à confirmer'; elCity.classList.add('tc-unknown'); }
    else { elCityName.textContent = zone[0]; elCity.classList.remove('tc-unknown'); }
    etat.forfait = null;

    var panier = batirPanier(guests);
    etat.panier = panier;

    $('tcResName').textContent = guests + ' invité' + (guests > 1 ? 's' : '');
    etat.nbTables = panier.nbTables;
    majLot(panier.chaise.id, panier.nbChaises);
    majStock(panier.chaise.id, panier.nbChaises, panier.table.id,
             panier.nbTables, panier.chaise.nom, panier.table.nom);  /* avant tout retour anticipe */

    var ul = $('tcCart');
    if (!panier.lignes.length) {
      ul.innerHTML = '<li class="tc-cart-empty"><span>Choisis au moins des chaises ou des tables</span><span></span></li>';
    } else {
      ul.innerHTML = panier.lignes.map(function(l){
        return '<li><span>' + l.txt + '</span><span>' + l.prix + '</span></li>';
      }).join('');
    }
    $('tcResMob').textContent = panier.lignes.length ? money(panier.total) : '\u2014';

    var shipLine = $('tcResShipLine'), turnkey = $('tcTurnkey');
    var shipLbl = shipLine.querySelector('span');
    if (shipLbl) shipLbl.textContent = (choix.mode === 'ramassage') ? 'Ramassage à l\'entrepôt' : 'Livraison et ramassage';
    turnkey.classList.remove('tc-on');
    $('tcTotalLbl').textContent = 'Total';
    $('tcResCta').textContent = 'Ça m\'intéresse';
    $('tcTurnkeyCta').textContent = 'Voir le forfait clé en main';

    if (!panier.lignes.length) {
      shipLine.classList.remove('tc-free');
      $('tcResShip').textContent = '\u2014';
      $('tcResTotal').textContent = '\u2014';
      $('tcResNote').textContent = 'Sélectionne tes chaises, tes tables ou les deux pour voir ton prix.';
      return;
    }

    /* Ramassage choisi : la livraison tombe a zero, peu importe le montant */
    if (choix.mode === 'ramassage') {
      etat.surcharge = 0;
      shipLine.classList.add('tc-free');
      $('tcResShip').textContent = 'Gratuit';
      $('tcResTotal').textContent = money(panier.total);
      $('tcResNote').textContent = 'Ramassage gratuit à notre entrepôt de Sainte-Thérèse. Tu transportes, tu montes et tu rapportes toi-même. Prix avant taxes.';
      return;
    }

    /* Sous le minimum : ramassage en boutique */
    if (panier.total < MIN_COMMANDE) {
      etat.surcharge = 0;
      shipLine.classList.add('tc-free');
      if (shipLbl) shipLbl.textContent = 'Ramassage à l\'entrepôt';
      $('tcResShip').textContent = 'Gratuit';
      $('tcResTotal').textContent = money(panier.total);
      $('tcResNote').textContent = 'On livre à partir de ' + money(MIN_COMMANDE) +
        ' de matériel. En dessous, c\'est le ramassage gratuit à Sainte-Thérèse. Prix avant taxes.';
      return;
    }

    /* Pas encore de code postal */
    if (zone === null) {
      etat.surcharge = 0;
      shipLine.classList.remove('tc-free');
      $('tcResShip').textContent = '\u2014';
      $('tcResTotal').textContent = money(panier.total) + ' +';
      $('tcResNote').textContent = 'Entre ton code postal pour ajouter la livraison au total. Prix avant taxes.';
      return;
    }

    var km = (zone === 'UNKNOWN') ? null : zone[1];
    var liv = (zone === 'UNKNOWN') ? null : livraisonCarte(km);

    if (liv === null) {
      etat.surcharge = 0; etat.secteurSurDevis = true;
      shipLine.classList.remove('tc-free');
      $('tcResShip').textContent = 'Sur devis';
      $('tcResTotal').textContent = money(panier.total) + ' +';
      $('tcResNote').textContent = (zone === 'UNKNOWN')
        ? 'On ne connaît pas encore ce secteur par cœur. On te confirme la livraison en 24 h. Prix avant taxes.'
        : 'Ce secteur demande un camion dédié. On te confirme la livraison en 24 h. Prix avant taxes.';
      return;
    }

    etat.surcharge = liv;
    shipLine.classList.remove('tc-free');
    $('tcResShip').textContent = money(liv);
    $('tcResTotal').textContent = money(panier.total + liv);
    $('tcResNote').textContent = 'Prix approximatifs, ajustés selon la quantité. Livraison et ramassage compris, montage à ta charge. Avant taxes.';

    /* Comparaison cle en main : le forfait vend le MONTAGE, pas le mobilier */
    if (guests > 72) {
      etat.grosEvenement = true;
      $('tcTurnkeyText').innerHTML = 'À <b>' + guests + ' invités</b>, le prix à la place descend. On bâtit une soumission sur mesure plutôt que de te vendre un forfait du catalogue.';
      $('tcTurnkeyCta').href = '#';
      $('tcTurnkeyCta').setAttribute('data-evx-form',
        'Plus de 72 invités : on monte la quantité sur mesure.');
      $('tcTurnkeyCta').textContent = 'Obtenir ma soumission';
      turnkey.classList.add('tc-on');
      return;
    }

    if (panier.chaise.id !== 'aucune' && panier.table.id !== 'aucune') {
      var f = null;
      for (var i = 0; i < FORFAITS.length; i++) { if (guests <= FORFAITS[i].max) { f = FORFAITS[i]; break; } }
      if (f) {
        etat.forfait = f;
        var supp = supplementForfait(km);
        var totalF = f.prix + (supp === null ? 0 : supp);
        var ecart = totalF - (panier.total + liv);
        $('tcTurnkeyText').innerHTML = (ecart > 0)
          ? 'À ce prix-là, tu montes tout toi-même. Le <b>' + f.nom + '</b> revient à <b>' + money(totalF) +
            '</b> ' + money(ecart) + ' de plus, et on livre, on place selon ton plan de salle et on ramasse.'
          : 'Le <b>' + f.nom + '</b> revient à <b>' + money(totalF) +
            '</b>, livraison, placement et ramassage compris. Moins cher que ton panier, et tu ne touches à rien.';
        $('tcTurnkeyCta').href = f.url;
        turnkey.classList.add('tc-on');
      }
    }
  }


  /* =========================================================
     PANNEAU « NON, C'EST TROP CHER »
     On ne perd pas le visiteur : on lui sort le levier qui
     correspond a SA situation, sans rabais generalise.

     - Livraison chiffree a effacer      -> on explique d'ou vient
       le montant, puis on demande le budget (aucun pourcentage)
     - Deja au prix plancher             -> on demande son budget
       (regle Alexandre : demander le budget avant de chiffrer)
  ========================================================= */

  /* Une offre qui ne propose qu un appel perd le visiteur qui n appelle pas.
     On lui ajoute un second bouton qui ouvre le formulaire. */
  function ajusterOffre(){
    var cta = $('tcOfferCta');
    var b = document.getElementById('tcOfferAussi');
    if (!b) {
      b = document.createElement('button');
      b.type = 'button';
      b.id = 'tcOfferAussi';
      b.className = 'tc-offer-aussi';
      b.textContent = 'Laisse-moi ton numéro, on te rappelle';
      b.addEventListener('click', function(){
        remplirRecap();
        $('tcFormMsg').className = 'tc-form-msg';
        $('tcResult').classList.remove('tc-show-offer');
        $('tcResult').classList.add('tc-show-form');
        marquerRappel();
        $('tcfNom').focus();
      });
      if (cta.parentNode) { cta.parentNode.insertBefore(b, cta.nextSibling); }
    }
    var tel = (cta.getAttribute('href') || '').indexOf('tel:') === 0;
    b.style.display = tel ? 'inline-flex' : 'none';
  }
  /* Apres un refus, le telephone n est plus « facultatif » : c est le rappel. */
  function marquerRappel(){
    var t = $('tcfTel');
    if (!t) { return; }
    var l = t.parentElement ? t.parentElement.querySelector('label') : null;
    if (l) { l.innerHTML = 'Téléphone <small>on te rappelle</small>'; }
    var m = document.getElementById('tcfMsg');
    if (m) {
      if (!m.value.trim()) {
        m.value = 'Le prix affiché est trop élevé pour mon budget.';
      }
    }
  }
  function afficherOffre(){
    etat.refus = true;
    etat.offreTitre = null;
    var ville = etat.ville, liv = etat.surcharge, f = etat.forfait, panier = etat.panier;
    var eyebrow = $('tcOfferEyebrow'), titre = $('tcOfferTitle'), texte = $('tcOfferText');
    var deal = $('tcOfferDeal'), dealLbl = $('tcOfferDealLbl'), dealPrix = $('tcOfferDealPrice');
    var liste = $('tcOfferList'), cta = $('tcOfferCta');
    var ctx = '&invites=' + etat.invites + (ville ? '&secteur=' + encodeURIComponent(ville) : '');

    /* CAS 0, pas encore de code postal : c'est justement ce qu'on veut obtenir.
       En mode ramassage, il n'y a pas de livraison a chiffrer : on saute. */
    if (!etat.cpConnu && choix.mode !== 'ramassage') {
      eyebrow.textContent = 'On peut souvent faire mieux';
      titre.textContent = 'Dis-nous où tu es';
      texte.textContent = 'La livraison est ce qui bouge le plus dans le prix, et elle se calcule sur la distance réelle depuis Sainte-Thérèse. Entre ton code postal juste à côté et on te donne le vrai total.';
      deal.style.display = 'none';
      liste.innerHTML =
        '<li>100 $ de base, qui couvre les 10 premiers kilomètres</li>' +
        '<li>Au-delà de 40 km, on chiffre au cas par cas</li>' +
        '<li>Ramassage en boutique toujours gratuit</li>';
      cta.textContent = 'Parler à quelqu\'un';
      cta.href = 'tel:5145591893';
      etat.offreTitre = $('tcOfferTitle').textContent;
    ajusterOffre();
    $('tcResult').classList.add('tc-show-offer');
      elPostal.focus();
      return;
    }

    /* CAS 1, gros evenement : c'est la taille, pas le secteur */
    if (etat.grosEvenement) {
      eyebrow.textContent = ville ? 'Offre pour ' + ville : 'Gros événement';
      titre.textContent = 'À ce volume, le prix se négocie';
      texte.textContent = 'Au-dessus de 100 invités, on ne vend pas un forfait du catalogue. Le prix à la place descend avec la quantité. Donne-nous ton budget et ta date, on bâtit la formule autour de ton chiffre.';
      deal.style.display = 'none';
      liste.innerHTML =
        '<li>Prix à la place dégressif dès 100 invités</li>' +
        '<li>On ajuste les modèles de chaises pour tomber sur ton budget</li>' +
        '<li>Réponse en 24 heures, sans engagement</li>';
      cta.textContent = 'Donner mon budget';
      cta.href = '#';
      cta.setAttribute('data-evx-form', 'Plus de 72 invités : le prix à la place descend.');
      etat.offreTitre = $('tcOfferTitle').textContent;
    ajusterOffre();
    $('tcResult').classList.add('tc-show-offer');
      return;
    }

    /* CAS 2, secteur a deplacement dedie ou inconnu */
    if (etat.secteurSurDevis) {
      eyebrow.textContent = ville ? 'Offre pour ' + ville : 'Offre de secteur';
      titre.textContent = 'Donne-nous ton budget, on bâtit autour';
      texte.textContent = 'Ton secteur demande un déplacement dédié, c\'est ce qui fait monter le prix. On ne met pas de tarif automatique dessus : on le chiffre à la main. Donne-nous ton budget et ta date, on bâtit autour.';
      deal.style.display = 'none';
      liste.innerHTML =
        '<li>Ton secteur est chiffré au cas par cas, pas à la grille</li>' +
        '<li>On ajuste la quantité et les modèles pour tomber sur ton chiffre</li>' +
        '<li>Réponse en 24 heures, sans engagement</li>';
      cta.textContent = 'Donner mon budget';
      cta.href = 'https://evenox.ca/contact/?offre=budget' + ctx;
      etat.offreTitre = $('tcOfferTitle').textContent;
    ajusterOffre();
    $('tcResult').classList.add('tc-show-offer');
      return;
    }

    /* CAS 3 - il y a une livraison a chiffrer.
       On n'annonce AUCUN pourcentage : on explique d'ou vient le montant
       et on demande le budget. Voir l'en-tete de ce fichier. */
    if (liv > 0 && panier) {
      eyebrow.textContent = ville ? 'Offre pour ' + ville : 'Offre de secteur';
      titre.textContent = 'Donne-nous ton budget, on bâtit autour';
      texte.textContent = 'La livraison est ce qui bouge le plus dans le prix : '
        + '100 $ couvrent les 10 premiers kilomètres, et on compte la distance '
        + 'réelle après. Le panier, lui, s\'ajuste.';
      deal.style.display = 'none';
      liste.innerHTML =
        '<li>Ramassage en boutique à Sainte-Thérèse : la livraison tombe à zéro</li>' +
        '<li>Chaises pliantes brunes à 2 $ au lieu des blanches à 3 $</li>' +
        '<li>Donne-nous ton budget et ta date, on propose la combinaison qui rentre</li>';
      cta.textContent = 'Donner mon budget';
      cta.href = 'https://evenox.ca/contact/?offre=budget' + ctx;
      etat.offreTitre = $('tcOfferTitle').textContent;
    ajusterOffre();
    $('tcResult').classList.add('tc-show-offer');
      return;
    }

    /* CAS 4, rien a couper sur la livraison : on joue sur le contenu du panier */
    eyebrow.textContent = ville ? 'Offre pour ' + ville : 'On peut ajuster';
    titre.textContent = 'On peut descendre le prix autrement';
    texte.textContent = 'Il n\'y a rien à couper du côté de la livraison. Mais le panier, lui, s\'ajuste. Donne-nous ton budget et on monte la formule autour de ton chiffre.';
    deal.style.display = 'none';
    liste.innerHTML =
      '<li>Chaises pliantes brunes à 2 $ au lieu des blanches à 3 $</li>' +
      '<li>Tables rectangulaires 8 pi : 10 places par table au lieu de 8</li>' +
      '<li>Sans nappes, ou avec tes propres nappes</li>';
    cta.textContent = 'Donner mon budget';
    cta.href = 'https://evenox.ca/contact/?offre=budget' + ctx;
    etat.offreTitre = $('tcOfferTitle').textContent;
    ajusterOffre();
    $('tcResult').classList.add('tc-show-offer');
  }


  $('tcMinus').addEventListener('click', function(){
    elGuests.value = Math.max(1, (parseInt(elGuests.value, 10) || 1) - 5); render();
  });
  $('tcPlus').addEventListener('click', function(){
    elGuests.value = Math.min(600, (parseInt(elGuests.value, 10) || 0) + 5); render();
  });
  elGuests.addEventListener('input', render);
  elPostal.addEventListener('input', render);

  /* ---- Livraison ou ramassage (28 aout 2026) ----
     Deux cartes dans l etape Secteur. Le ramassage cache le code postal :
     il ne sert qu a chiffrer la livraison. */
  var elModeLiv = $('tcModeLiv'), elModeRam = $('tcModeRam'), elPostalRow = $('tcPostalRow');
  function majMode(m){
    choix.mode = m;
    if (elModeLiv) elModeLiv.classList.toggle('tc-on', m === 'livraison');
    if (elModeRam) elModeRam.classList.toggle('tc-on', m === 'ramassage');
    if (elPostalRow) elPostalRow.classList.toggle('tc-cache', m === 'ramassage');
    render();
  }
  if (elModeLiv) elModeLiv.addEventListener('click', function(){ majMode('livraison'); });
  if (elModeRam) elModeRam.addEventListener('click', function(){ majMode('ramassage'); });
  /* =========================================================
     ENVOI DE LA SOUMISSION
     Reutilise le pipeline WordPress deja en place et teste :
     action admin-ajax « evx_soumission » + window.evx_nonce,
     le meme que le formulaire de /contact/. Il livre a
     evenox.ca@gmail.com. Aucun nouveau backend a maintenir.
  ========================================================= */
  var LN = String.fromCharCode(10);

  /* Le texte que l'equipe va lire dans le courriel */
  function resumeSoumission(){
    var pa = etat.panier, t = [];
    t.push('CONFIGURATEUR TABLES ET CHAISES');
    t.push('');
    t.push('Invités : ' + etat.invites);
    if (choix.mode === 'ramassage') {
      t.push('Formule : RAMASSAGE à l\'entrepôt (Sainte-Thérèse)');
    } else {
      t.push('Formule : livraison');
      t.push('Secteur : ' + (etat.ville || 'non précisé') +
             (elPostal.value ? ' (' + elPostal.value.toUpperCase().trim() + ')' : ''));
    }
    t.push('');
    t.push('PANIER :');
    if (pa && pa.lignes.length) {
      pa.lignes.forEach(function(l){ t.push('  - ' + l.txt + ' = ' + l.prix); });
      t.push('');
      t.push('Mobilier : ' + money(pa.total));
      t.push((choix.mode === 'ramassage' ? 'Ramassage : ' : 'Livraison : ') + $('tcResShip').textContent);
      t.push('TOTAL ESTIMÉ : ' + $('tcResTotal').textContent);
    } else {
      t.push('  (aucun article sélectionné)');
    }
    if (choix.manuel) t.push('', 'NOTE : quantités ajustées à la main par le client.');
    if (etat.motif) {
      t.push('');
      t.push('MOTIF DE LA DEMANDE : ' + etat.motif);
    }
    if (etat.refus) {
      t.push('');
      t.push('*** LE CLIENT A REPONDU « Non, c\'est trop cher » ***');
      t.push('Offre qui lui a été montrée : ' + (etat.offreTitre || 'aucune'));
      t.push('À rappeler : le panier ci-dessus est ce qu\'il voulait.');
    }
    return t.join(LN);
  }

  /* Le recap montre au client, avant qu'il envoie */
  function remplirRecap(){
    var pa = etat.panier, html = '';
    if (pa && pa.lignes.length) {
      html = pa.lignes.map(function(l){ return l.txt + ' <b>' + l.prix + '</b>'; }).join('<br>');
      html += '<br>' + (choix.mode === 'ramassage' ? 'Ramassage' : 'Livraison') + ' <b>' + $('tcResShip').textContent + '</b>';
      html += '<br>Total estimé <b>' + $('tcResTotal').textContent + '</b>';
    } else {
      html = 'Aucun article sélectionné.';
    }
    if (choix.mode !== 'ramassage' && etat.ville) html += '<br>Secteur <b>' + etat.ville + '</b>';
    $('tcFormRecap').innerHTML = html;
  }


  /* Ouvre le formulaire deja present, avec le motif de la demande.
     Expose a la page : la bande des forfaits s en sert aussi. */
  function ouvrirFormulaire(motif){
    var cadre = document.querySelector('.tc-page .tc-calc-box');
    if (cadre) { cadre.classList.add('tc-wiz-fini'); }
    etat.motif = motif || null;
    remplirRecap();
    $('tcFormMsg').className = 'tc-form-msg';
    $('tcResult').classList.remove('tc-show-offer');
    $('tcResult').classList.add('tc-show-form');
    var m = $('tcfMsg');
    if (m) { if (!m.value.trim()) { m.value = motif || ''; } }
    $('tcResult').scrollIntoView({ behavior: 'smooth', block: 'center' });
    $('tcfNom').focus();
  }
  window.evxOuvrirFormulaire = ouvrirFormulaire;

  /* Un champ facultatif peut avoir ete retire du formulaire : on lit sans casser. */
  function champ(id){ var e = document.getElementById(id); return e ? e.value : ''; }
  function msgForm(txt, ok){
    var m = $('tcFormMsg');
    m.textContent = txt;
    m.className = 'tc-form-msg tc-on ' + (ok ? 'tc-ok' : 'tc-fail');
  }

  $('tcResCta').addEventListener('click', function(){
    if (!etat.panier || !etat.panier.lignes.length) { return; }
    remplirRecap();
    $('tcFormMsg').className = 'tc-form-msg';
    $('tcResult').classList.remove('tc-show-offer');
    $('tcResult').classList.add('tc-show-form');
    $('tcfNom').focus();
  });

  $('tcOfferCta').addEventListener('click', function(e){
    /* Les offres qui menent a un appel gardent leur lien telephonique */
    if ((this.getAttribute('href') || '').indexOf('tel:') === 0) return;
    e.preventDefault();
    remplirRecap();
    $('tcFormMsg').className = 'tc-form-msg';
    $('tcResult').classList.remove('tc-show-offer');
    $('tcResult').classList.add('tc-show-form');
    if (etat.refus) { marquerRappel(); }
    $('tcfNom').focus();
  });

  $('tcFormBack').addEventListener('click', function(){
    $('tcResult').classList.remove('tc-show-form');
  });

  function courrielValide(v){ return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v); }

  $('tcSoumission').addEventListener('submit', function(e){
    e.preventDefault();
    var nom = $('tcfNom').value.trim(), email = $('tcfEmail').value.trim();

    $('tcfNom').parentElement.classList.toggle('tc-err', !nom);
    $('tcfEmail').parentElement.classList.toggle('tc-err', !courrielValide(email));
    if (!nom || !courrielValide(email)) {
      msgForm('Il nous faut au moins ton nom et un courriel valide pour te répondre.', false);
      return;
    }

    var bouton = $('tcFormSend');
    bouton.disabled = true;
    bouton.textContent = 'Envoi en cours...';
    msgForm('', true);
    $('tcFormMsg').className = 'tc-form-msg';

    var details = resumeSoumission();
    var extra = champ('tcfMsg').trim();
    if (extra) details += LN + LN + 'MESSAGE DU CLIENT :' + LN + extra;

    var fd = new FormData();
    fd.append('action', 'evx_soumission');
    fd.append('evx_nonce', window.evx_nonce || '');
    fd.append('nom_complet', nom);
    fd.append('email', email);
    fd.append('telephone', champ('tcfTel').trim());
    fd.append('date_event', champ('tcfDate'));
    fd.append('details', details);
    fd.append('service', 'Configurateur tables et chaises');
    fd.append('page_url', window.location.href);
    fd.append('referrer', document.referrer || 'direct');
    fd.append('device', window.innerWidth <= 600 ? 'mobile' : (window.innerWidth <= 960 ? 'tablet' : 'desktop'));
    fd.append('timestamp', new Date().toISOString());

    fetch(window.evx_ajax || '/wp-admin/admin-ajax.php',
          { method:'POST', body:fd, credentials:'same-origin' })
      .then(function(r){ return r.json(); })
      .then(function(d){
        if (d && d.success) {
          /* La page /merci declenche la conversion Google Ads deja en place */
          window.location.href = '/merci';
        } else {
          throw new Error('refus serveur');
        }
      })
      .catch(function(){
        bouton.disabled = false;
        bouton.textContent = 'Envoyer ma demande';
        msgForm('L\'envoi n\'a pas passé. Appelle-nous au 514-559-1893, on prend ta demande tout de suite.', false);
      });
  });


  /* Tout ce qui porte data-evx-form ouvre le formulaire de la page. */
  document.addEventListener('click', function(e){
    var a = e.target.closest ? e.target.closest('[data-evx-form]') : null;
    if (!a) { return; }
    e.preventDefault();
    ouvrirFormulaire(a.getAttribute('data-evx-form'));
  });
  $('tcResNo').addEventListener('click', function(){
    afficherOffre();
  });
  $('tcOfferBack').addEventListener('click', function(){
    $('tcResult').classList.remove('tc-show-offer');
  });
  /* Une seule porte d'entree quand la selection change */
  function majSelection(){ batirOptions(); batirQuantites(); render(); }

  function batirNappeCocktail(){
    var boite = $('tcCockNappe'), hote = $('tcOptsCockNappe');
    boite.classList.toggle('tc-on', choix.cocktail > 0);
    if (choix.cocktail <= 0) return;
    hote.innerHTML = '';
    choix.nappeCocktail = couleurValide('cocktail', choix.nappeCocktail);
    couleursDe('cocktail').forEach(function(o){
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tc-opt' + (choix.nappeCocktail === o.id ? ' tc-on' : '');
      b.innerHTML = o.nom + (STOCK_COULEUR[o.id]
        ? '<small>' + STOCK_COULEUR[o.id] + ' en stock</small>' : '');
      b.addEventListener('click', function(){ choix.nappeCocktail = o.id; batirNappeCocktail(); render(); });
      hote.appendChild(b);
    });
  }

  function majCocktail(d){
    choix.cocktail = Math.max(0, Math.min(60, choix.cocktail + d));
    $('tcCockVal').textContent = choix.cocktail;
    batirNappeCocktail();
    render();
  }
  $('tcCockMinus').addEventListener('click', function(){ majCocktail(-1); });
  $('tcCockPlus').addEventListener('click', function(){ majCocktail(1); });

  $('tcQteToggle').addEventListener('click', function(){
    choix.manuel = !choix.manuel;
    if (choix.manuel) {
      /* On fige les quantites suggerees : a partir d'ici, c'est le client qui decide */
      var q = quantites(parseInt(elGuests.value, 10) || 1);
      choix.qChaises = q.autoChaises;
      choix.qTables  = q.autoTables;
    } else {
      choix.qChaises = null;
      choix.qTables  = null;
    }
    batirQuantites();
    render();
  });

  batirOptions();
  batirQuantites();
  batirNappeCocktail();
  render();

  /* =========================================================
     MINI-CALCULATEUR DE LIVRAISON A L'UNITE
     Montre le vrai cout de la livraison seule, puis compare
     avec le forfait, ou la livraison est deja incluse.
  ========================================================= */
  var livPostal = $('tcLivPostal');
  if (livPostal) {
    var livOut = $('tcLivOut'), livComp = $('tcLivCompare'), livCompTxt = $('tcLivCompareText');

    livPostal.addEventListener('input', function(){
      var zone = lookupZone(livPostal.value);

      if (zone === null) {
        livOut.innerHTML = 'Prix approximatif, ajusté selon la quantité';
        livComp.classList.remove('tc-on');
        return;
      }
      if (zone === 'UNKNOWN') {
        livOut.innerHTML = 'Secteur à confirmer <b>sur devis</b>';
        livCompTxt.innerHTML = 'On ne connaît pas encore ce secteur par cœur. Avec un <strong>forfait à partir de 449 $</strong>, la livraison, le placement et le ramassage sont compris tu n\'as pas de surprise à l\'autre bout.';
        livComp.classList.add('tc-on');
        return;
      }

      var km = zone[1], prix = livraisonCarte(km);

      if (prix === null) {
        livOut.innerHTML = zone[0] + ' <b>sur devis</b>';
        livCompTxt.innerHTML = 'Ton secteur demande un déplacement dédié, c\'est ce qui fait monter la livraison à l\'unité. Un <strong>forfait à partir de 449 $</strong> comprend la livraison, le placement et le ramassage.';
        livComp.classList.add('tc-on');
        return;
      }

      livOut.innerHTML = zone[0] + ', ' + km + ' km environ <b>' + fmt(prix) + '</b>';
      livCompTxt.innerHTML = 'Cette livraison te coûte <strong>' + fmt(prix) + '</strong> en plus du mobilier. ' +
        (supplementForfait(km) === 0
          ? 'Dans un forfait, elle est <strong>incluse</strong> : tu la sauves au complet.'
          : 'Dans un forfait, elle tombe à <strong>' + fmt(supplementForfait(km)) + '</strong>.') +
        ' Le forfait comprend aussi les nappes et le placement selon ton plan de salle.';
      livComp.classList.add('tc-on');
    });
  }

  /* FAQ */
  document.querySelectorAll('.tc-page .faq-question').forEach(function(btn){
    btn.addEventListener('click', function(){
      var wasOpen = this.classList.contains('open');
      document.querySelectorAll('.tc-page .faq-question.open').forEach(function(b){
        b.classList.remove('open');
        b.parentElement.querySelector('.faq-answer').style.maxHeight = null;
      });
      if (!wasOpen) {
        this.classList.add('open');
        var ans = this.parentElement.querySelector('.faq-answer');
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });


  /* JSON-LD FAQPage pour le SEO, construit depuis la FAQ affichee.
     Injecte par JS car WordPress strip les <script> du contenu de page. */
  try {
    var faqLd = [];
    document.querySelectorAll('.tc-page .faq-question').forEach(function(b){
      var q = b.textContent.replace(/\s+/g, ' ').trim();
      var a = b.parentElement.querySelector('.faq-answer p');
      if (q && a) faqLd.push({ '@type': 'Question', 'name': q,
        'acceptedAnswer': { '@type': 'Answer', 'text': a.textContent.replace(/\s+/g, ' ').trim() } });
    });
    if (faqLd.length) {
      var ldEl = document.createElement('script');
      ldEl.type = 'application/ld+json';
      ldEl.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': faqLd });
      document.head.appendChild(ldEl);
    }
  } catch (eLd) {}

  /* FLOATING CTA */
  var fc = $('tcFloatingCta');
  if (fc) {
    window.addEventListener('scroll', function(){
      if (window.pageYOffset > 500) fc.classList.add('visible');
      else fc.classList.remove('visible');
    });
  }
})();