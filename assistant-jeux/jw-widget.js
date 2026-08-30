
(function(){
  'use strict';
  /* =========================================================
     ASSISTANT JEUX - landing /location-jeux-exterieurs/
     28 aout 2026.
     Le prix total (livraison comprise) ne s'affiche qu'APRES
     les coordonnees : c'est le principe du widget. La demande
     part automatiquement (action WordPress evx_soumission, la
     meme que /contact/) au moment ou le prix se revele.
     REGLES D'ECRITURE de ce fichier : il vit en clair dans le
     contenu WordPress de la page. Jamais de ET commercial (ni
     double ni simple, ecrire l'echappement unicode 0026 dans
     une chaine s'il en faut un), jamais de double tiret. wpautop protege script
     et style, pas le HTML.
  ========================================================= */
  var LIV_BASE = 100, LIV_KM_INCLUS = 10, LIV_PAR_KM = 7, LIV_KM_MAX = 40;
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
  /* ---- Les trois catalogues (prix des configurateurs en ligne, 28 aout 2026) ---- */
  var CATEGORIES = [
    { id:'gonflables', nom:'Jeux gonflables', sous:'Livrés, montés, désinfectés' },
    { id:'arcade', nom:'Jeux d\'arcade', sous:'Bornes, tables de jeux, consoles' },
    { id:'exterieurs', nom:'Jeux extérieurs géants', sous:'Les classiques en format XL' }
  ];
  var GROUPES = {
    gonflables: [
      { id:'g-petits', nom:'Pour les petits (3 à 7 ans)' },
      { id:'g-xl', nom:'Les grands modèles (5 à 12 ans)' },
      { id:'g-sport', nom:'Sportifs et ados' },
      { id:'g-extra', nom:'À ajouter' }
    ],
    arcade: [
      { id:'a-bornes', nom:'Bornes d\'arcade' },
      { id:'a-tables', nom:'Tables de jeux' },
      { id:'a-consoles', nom:'Consoles' }
    ],
    exterieurs: [
      { id:'x-classiques', nom:'Les classiques géants' },
      { id:'x-adresse', nom:'Poches, précision, adresse' },
      { id:'x-animation', nom:'Animation et ambiance' }
    ]
  };
  var PRODUITS = [
    { id:'jeux-gonflable-moyen-bouncer', nom:'Moyen Bouncer', prix:120, g:'g-petits' },
    { id:'jeux-gonflable-forteresse', nom:'Forteresse', prix:100, g:'g-petits' },
    { id:'jeu-gonflable-mini-princesse', nom:'Princesses', prix:120, g:'g-petits' },
    { id:'jeu-gonflable-spiderman', nom:'Spiderman', prix:120, g:'g-petits' },
    { id:'jeux-gonflable-pat-patrouille-2', nom:'Pat Patrouille', prix:140, g:'g-petits' },
    { id:'piscine-a-balle-xl', nom:'Piscine à balles XL', prix:150, g:'g-petits' },
    { id:'jeu-gonflable-minions', nom:'Minions', prix:150, g:'g-xl' },
    { id:'jeu-gonflable-pat-patrouille-xl', nom:'Pat Patrouille XL', prix:150, g:'g-xl' },
    { id:'jeux-gonflable-avengers', nom:'Avengers', prix:180, g:'g-xl' },
    { id:'jeux-gonflable-parcours-dobstacle', nom:'Parcours d\'obstacle', prix:160, g:'g-xl' },
    { id:'jeux-gonflable-reine-des-neiges-co', nom:'Reine des Neiges XL', prix:180, g:'g-xl' },
    { id:'location-jeu-gonflable-princesse-x', nom:'Princesse XL', prix:180, g:'g-xl' },
    { id:'location-jeu-gonflable-licorne', nom:'Licorne', prix:200, g:'g-xl' },
    { id:'jeu-gonflable-spiderman-xl', nom:'Spiderman XL', prix:200, g:'g-xl' },
    { id:'location-jeu-gonflable-mario-bros', nom:'Mario Bros', prix:200, g:'g-xl' },
    { id:'location-jeu-gonflable-mickey-mous', nom:'Mickey Mouse', prix:280, g:'g-xl' },
    { id:'jeu-gonflable-palmiers', nom:'Palmiers', prix:180, g:'g-xl' },
    { id:'jeu-gonflable-reine-des-neiges', nom:'Reine des Neiges', prix:200, g:'g-xl' },
    { id:'jeux-gonflable-chateau-du-prince', nom:'Château du Prince', prix:100, g:'g-xl' },
    { id:'jeux-gonflable-chateau-multicolore', nom:'Château Multicolore', prix:120, g:'g-xl' },
    { id:'jeux-gonflable-flash-mcqueen', nom:'Flash McQueen', prix:100, g:'g-xl' },
    { id:'sucture-gonflable-bunker', nom:'Structure gonflable (Bunker)', prix:25, g:'g-xl' },
    { id:'soccer-dart-gonflable-geant', nom:'Soccer Dart gonflable géant', prix:60, g:'g-sport' },
    { id:'jeux-gonflable-terrain-de-basket', nom:'Terrain de basket', prix:100, g:'g-sport' },
    { id:'dunk-tank', nom:'Dunk Tank', prix:100, g:'g-sport' },
    { id:'laser-tag', nom:'Laser Tag', prix:120, g:'g-sport' },
    { id:'pouf-poire-gonflable', nom:'Pouf poire gonflable', prix:15, g:'g-extra' },
    { id:'divan-gonflable', nom:'Divan gonflable', prix:20, g:'g-extra' },
    { id:'ecran-gonflable-20-pieds', nom:'Écran gonflable 20 pieds', prix:60, g:'g-extra' },
    { id:'ecran-gonflable-16-pied', nom:'Écran gonflable 16 pieds', prix:50, g:'g-extra' },
    { id:'machine-arcade-pacman', nom:'Pac-Man (borne d\'arcade)', prix:100, g:'a-bornes' },
    { id:'jeux-arcade-multijeux-100-jeux', nom:'Borne multijeux (100+ jeux)', prix:140, g:'a-bornes' },
    { id:'jeu-de-skeeball-arcade-9-pieds', nom:'Skeeball arcade (9 pieds)', prix:150, g:'a-bornes' },
    { id:'machine-d-arcade1up-mortal-kombat-ii', nom:'Mortal Kombat II (Arcade1Up)', prix:140, g:'a-bornes' },
    { id:'machine-arcade1up-le-jeu-d-arcade-de-luxe-fast-the-furious', nom:'Fast ' + String.fromCharCode(38) + ' Furious (Arcade1Up)', prix:140, g:'a-bornes' },
    { id:'machine-arcade1up-big-buck-hunter-mossy-oak-deluxe', nom:'Big Buck Hunter Deluxe', prix:140, g:'a-bornes' },
    { id:'table-de-ping-pong', nom:'Table de ping-pong', prix:50, g:'a-tables' },
    { id:'table-de-billard-portable', nom:'Billard portable', prix:50, g:'a-tables' },
    { id:'table-beer-pong', nom:'Table beer pong (8 pi)', prix:50, g:'a-tables' },
    { id:'table-de-poker-8-places-location', nom:'Table de poker (8 places)', prix:70, g:'a-tables' },
    { id:'table-air-hockey-en-location', nom:'Air hockey', prix:120, g:'a-tables' },
    { id:'table-de-baby-foot-residentiel', nom:'Baby-foot résidentiel', prix:120, g:'a-tables' },
    { id:'table-de-baby-foot-commerciale', nom:'Baby-foot commercial', prix:160, g:'a-tables' },
    { id:'table-de-missisipi', nom:'Table de Mississippi', prix:120, g:'a-tables' },
    { id:'table-de-billard-de-golf', nom:'Billard de golf', prix:200, g:'a-tables' },
    { id:'nintendo-switch-location', nom:'Nintendo Switch', prix:60, g:'a-consoles' },
    { id:'jeux-mario-kart-nintendo-switch-lo', nom:'Jeu Mario Kart (Switch)', prix:25, g:'a-consoles' },
    { id:'meta-quest-oculus', nom:'Meta Quest (Oculus)', prix:80, g:'a-consoles' },
    { id:'connect-4-geant', nom:'Connect 4 géant', prix:80, g:'x-classiques' },
    { id:'croquet-geant', nom:'Croquet géant', prix:40, g:'x-classiques' },
    { id:'twister-geant', nom:'Twister géant', prix:120, g:'x-classiques' },
    { id:'guess-who-geant-regulier', nom:'Devine Tête géant', prix:150, g:'x-classiques' },
    { id:'jeux-dames-geant', nom:'Jeu de dames géant', prix:100, g:'x-classiques' },
    { id:'serpent-echelle-geant', nom:'Serpent et échelle géant', prix:25, g:'x-classiques' },
    { id:'tic-tac-toe-geant', nom:'Tic Tac Toe géant', prix:20, g:'x-classiques' },
    { id:'jeux-pichenettes', nom:'Jeu de pichenettes', prix:40, g:'x-classiques' },
    { id:'cornhole-jeu-de-poches', nom:'Cornhole (jeu de poches)', prix:40, g:'x-adresse' },
    { id:'table-beer-pong-ext', nom:'Beer pong (table 8 pi)', prix:50, g:'x-adresse' },
    { id:'jeu-pong-geant', nom:'Jeu Pong géant', prix:150, g:'x-adresse' },
    { id:'jeu-putterball', nom:'Putterball', prix:50, g:'x-adresse' },
    { id:'kan-jam', nom:'Kan Jam', prix:20, g:'x-adresse' },
    { id:'lancer-de-hache', nom:'Lancer de hache', prix:40, g:'x-adresse' },
    { id:'mississippi-shuffleboard', nom:'Mississippi (shuffleboard)', prix:120, g:'x-adresse' },
    { id:'tug-of-war', nom:'Tug of War (souque à la corde)', prix:20, g:'x-animation' },
    { id:'nerf-gun-combat-set', nom:'Nerf Gun (combat set)', prix:20, g:'x-animation' },
    { id:'jeux-de-parachute-location', nom:'Jeu de parachute', prix:40, g:'x-animation' },
    { id:'roue-de-chance', nom:'Roue de chance', prix:50, g:'x-animation' },
    { id:'machine-a-karaoke', nom:'Machine à karaoké', prix:60, g:'x-animation' },
    { id:'dunk-tank-ext', nom:'Dunk Tank', prix:100, g:'x-animation' },
    { id:'slip-and-slide', nom:'Slip and Slide', prix:50, g:'x-animation' }
  ];
  var $ = function(id){ return document.getElementById(id); };
  var racine = $('jwBox');
  if (!racine) return;
  var panier = {};   /* id produit -> quantite */
  var etat = {
    categorie: null, mode: 'livraison', ville: null, cpConnu: false,
    surDevis: false, sousTotal: 0, livraison: 0, envoiHash: '', envoiEnCours: false
  };
  function money(n){
    var s = Math.round(n * 100) / 100;
    var txt = (s % 1 === 0) ? String(s) : s.toFixed(2).replace('.', ',');
    return txt.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' $';
  }
  function produit(id){
    for (var i = 0; i < PRODUITS.length; i++) { if (PRODUITS[i].id === id) return PRODUITS[i]; }
    return null;
  }
  function livraisonPour(km){
    if (km === null || km > LIV_KM_MAX) return null;
    if (km <= LIV_KM_INCLUS) return LIV_BASE;
    return Math.round(LIV_BASE + LIV_PAR_KM * (km - LIV_KM_INCLUS));
  }
  function decisions(){
    if (typeof window !== 'undefined') {
      if (window.EvxDecisions) return window.EvxDecisions;
    }
    return {};
  }
  function nomDeZone(zone){
    if (!zone || zone === 'UNKNOWN') return '';
    return zone[0] || '';
  }
  function forcerTransportSurMesure(nom){
    var d = decisions();
    if (d.forcerSurMesure !== true) return false;
    if (typeof d.estVilleSurMesure === 'function') return d.estVilleSurMesure(nom);
    return false;
  }
  function lookupZone(brut){
    var fsa = (brut || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3);
    if (fsa.length < 3) return null;
    return ZONES[fsa] || 'UNKNOWN';
  }
  function lignesPanier(){
    var out = [];
    PRODUITS.forEach(function(p){
      var q = panier[p.id] || 0;
      if (q > 0) out.push({ nom: p.nom, q: q, montant: q * p.prix });
    });
    return out;
  }
  function nbArticles(){
    var n = 0;
    Object.keys(panier).forEach(function(k){ n += panier[k]; });
    return n;
  }
  /* ================= WIZARD ================= */
  var ETAPES = ['type', 'selection', 'livraison', 'coordonnees', 'prix'];
  var NOMS = ['Type', 'Sélection', 'Livraison', 'Coordonnées', 'Prix'];
  var iEtape = 0, vu = 0;
  function montre(n){
    iEtape = Math.max(0, Math.min(ETAPES.length - 1, n));
    if (iEtape > vu) vu = iEtape;
    ETAPES.forEach(function(nom, k){
      var el = $('jwStep-' + nom);
      if (el) el.classList.toggle('jw-on', k === iEtape);
    });
    var pas = document.querySelectorAll('#jwBarre .jw-pas');
    for (var k = 0; k < pas.length; k++) {
      pas[k].classList.toggle('jw-actif', k === iEtape);
      pas[k].classList.toggle('jw-fait', k <= vu);
      if (k === iEtape) pas[k].setAttribute('aria-current', 'step');
      else pas[k].removeAttribute('aria-current');
    }
    $('jwPrec').style.visibility = (iEtape === 0) ? 'hidden' : 'visible';
    var suiv = $('jwSuiv');
    suiv.style.display = (iEtape === ETAPES.length - 1) ? 'none' : '';
    suiv.textContent = (iEtape === ETAPES.length - 2) ? 'Voir mon prix' : 'Continuer';
    $('jwErr').textContent = '';
    if (ETAPES[iEtape] === 'prix') { revelerPrix(); }
    var boite = racine.getBoundingClientRect();
    if (boite.top < 0) racine.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function erreur(txt){
    var el = $('jwErr');
    el.textContent = txt;
    if (txt) el.focus();
  }
  function courrielValide(v){ return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v); }
  function peutAvancer(){
    var e = ETAPES[iEtape];
    if (e === 'type') {
      if (!etat.categorie) { erreur('Choisis un type de jeux pour continuer.'); return false; }
      return true;
    }
    if (e === 'selection') {
      if (!nbArticles()) { erreur('Ajoute au moins un jeu à ta sélection.'); return false; }
      return true;
    }
    if (e === 'coordonnees') {
      var nom = $('jwNom').value.trim(), courriel = $('jwCourriel').value.trim();
      $('jwChampNom').classList.toggle('jw-erreur', !nom);
      $('jwChampCourriel').classList.toggle('jw-erreur', !courrielValide(courriel));
      $('jwNom').setAttribute('aria-invalid', nom ? 'false' : 'true');
      $('jwCourriel').setAttribute('aria-invalid', courrielValide(courriel) ? 'false' : 'true');
      $('jwNom').setAttribute('aria-describedby', nom ? '' : 'jwErr');
      $('jwCourriel').setAttribute('aria-describedby', courrielValide(courriel) ? '' : 'jwErr');
      if (!nom) { erreur('Il nous faut ton nom pour préparer ta soumission.'); return false; }
      if (!courrielValide(courriel)) { erreur('Il nous faut un courriel valide pour t\'envoyer ta soumission.'); return false; }
      return true;
    }
    return true;
  }
  /* ================= ETAPE 1 : TYPE ================= */
  function choisirCategorie(id){
    etat.categorie = id;
    document.querySelectorAll('.jw-cat').forEach(function(c){
      c.classList.toggle('jw-on', c.getAttribute('data-cat') === id);
    });
    batirSelection();
    montre(1);
  }
  document.querySelectorAll('.jw-cat').forEach(function(c){
    c.addEventListener('click', function(ev){
      ev.preventDefault();
      choisirCategorie(this.getAttribute('data-cat'));
    });
  });
  /* ================= ETAPE 2 : SELECTION ================= */
  function batirSelection(){
    /* onglets de categories, pour piger dans plusieurs sans revenir en arriere */
    var tabs = $('jwTabs');
    tabs.innerHTML = '';
    tabs.setAttribute('role', 'tablist');
    tabs.setAttribute('aria-label', 'Catégories de jeux');
    CATEGORIES.forEach(function(c, idx){
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'jw-tab' + (c.id === etat.categorie ? ' jw-on' : '');
      b.id = 'jwTab-' + c.id;
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', c.id === etat.categorie ? 'true' : 'false');
      b.setAttribute('aria-controls', 'jwGroupes');
      b.tabIndex = c.id === etat.categorie ? 0 : -1;
      b.textContent = c.nom;
      b.addEventListener('click', function(){ etat.categorie = c.id; batirSelection(); });
      b.addEventListener('keydown', function(ev){
        var dir = 0;
        if (ev.key === 'ArrowRight' || ev.key === 'ArrowDown') dir = 1;
        if (ev.key === 'ArrowLeft' || ev.key === 'ArrowUp') dir = -1;
        if (!dir) return;
        ev.preventDefault();
        var next = (idx + dir + CATEGORIES.length) % CATEGORIES.length;
        etat.categorie = CATEGORIES[next].id;
        batirSelection();
        var focus = $('jwTab-' + etat.categorie);
        if (focus) focus.focus();
      });
      tabs.appendChild(b);
    });
    var hote = $('jwGroupes');
    hote.setAttribute('role', 'tabpanel');
    hote.setAttribute('aria-labelledby', 'jwTab-' + etat.categorie);
    hote.innerHTML = '';
    (GROUPES[etat.categorie] || []).forEach(function(gr){
      var titre = document.createElement('p');
      titre.className = 'jw-groupe-titre';
      titre.textContent = gr.nom;
      hote.appendChild(titre);
      var grille = document.createElement('div');
      grille.className = 'jw-grille';
      PRODUITS.forEach(function(p){
        if (p.g !== gr.id) return;
        var q = panier[p.id] || 0;
        var row = document.createElement('div');
        row.className = 'jw-item' + (q > 0 ? ' jw-choisi' : '');
        var inf = document.createElement('div');
        inf.className = 'jw-item-inf';
        var nomEl = document.createElement('span');
        nomEl.className = 'jw-item-nom';
        nomEl.textContent = p.nom;
        var prixEl = document.createElement('span');
        prixEl.className = 'jw-item-prix';
        prixEl.textContent = money(p.prix) + ' / jour';
        inf.appendChild(nomEl);
        inf.appendChild(prixEl);
        var ctl = document.createElement('div');
        ctl.className = 'jw-qte';
        var moins = document.createElement('button');
        moins.type = 'button'; moins.textContent = '−';
        moins.setAttribute('aria-label', 'Moins de ' + p.nom);
        var val = document.createElement('span');
        val.textContent = q;
        val.setAttribute('aria-live', 'polite');
        var plus = document.createElement('button');
        plus.type = 'button'; plus.textContent = '+';
        plus.setAttribute('aria-label', 'Plus de ' + p.nom);
        moins.addEventListener('click', function(){ majQte(p.id, -1); });
        plus.addEventListener('click', function(){ majQte(p.id, 1); });
        ctl.appendChild(moins); ctl.appendChild(val); ctl.appendChild(plus);
        row.appendChild(inf); row.appendChild(ctl);
        grille.appendChild(row);
      });
      hote.appendChild(grille);
    });
    majMini();
  }
  function majQte(id, d){
    var q = (panier[id] || 0) + d;
    if (q < 0) q = 0;
    if (q > 20) q = 20;
    if (q === 0) delete panier[id]; else panier[id] = q;
    batirSelection();
  }
  function majMini(){
    var n = nbArticles();
    var lignes = lignesPanier();
    var st = 0;
    lignes.forEach(function(l){ st += l.montant; });
    etat.sousTotal = st;
    $('jwMini').textContent = n
      ? (n + ' article' + (n > 1 ? 's' : '') + ' choisi' + (n > 1 ? 's' : '') + ' · tu verras ton total livré à la dernière étape')
      : 'Rien de choisi pour l\'instant';
  }
  /* ================= ETAPE 3 : LIVRAISON ================= */
  function majMode(m){
    etat.mode = m;
    $('jwModeLiv').classList.toggle('jw-on', m === 'livraison');
    $('jwModeRam').classList.toggle('jw-on', m === 'ramassage');
    $('jwModeLiv').setAttribute('aria-pressed', m === 'livraison' ? 'true' : 'false');
    $('jwModeRam').setAttribute('aria-pressed', m === 'ramassage' ? 'true' : 'false');
    $('jwPostalBloc').style.display = (m === 'ramassage') ? 'none' : '';
  }
  $('jwModeLiv').addEventListener('click', function(){ majMode('livraison'); });
  $('jwModeRam').addEventListener('click', function(){ majMode('ramassage'); });
  $('jwCP').addEventListener('input', function(){
    var zone = lookupZone(this.value);
    var badge = $('jwVille');
    if (zone === null) { badge.textContent = 'En attente'; badge.classList.add('jw-inconnu'); }
    else if (zone === 'UNKNOWN') { badge.textContent = 'Secteur à confirmer'; badge.classList.add('jw-inconnu'); }
    else { badge.textContent = zone[0]; badge.classList.remove('jw-inconnu'); }
  });
  /* ================= ETAPE 5 : PRIX + ENVOI ================= */
  function calculer(){
    var lignes = lignesPanier();
    var st = 0;
    lignes.forEach(function(l){ st += l.montant; });
    etat.sousTotal = st;
    etat.surDevis = false;
    etat.livraison = 0;
    etat.ville = null;
    etat.cpConnu = false;
    var livTxt, note;
    if (etat.mode === 'ramassage') {
      livTxt = 'Gratuit';
      note = 'Ramassage sans frais à notre entrepôt de Sainte-Thérèse. Prévois un véhicule assez grand. Prix avant taxes.';
      return { lignes: lignes, livTxt: livTxt, total: money(st), note: note };
    }
    var zone = lookupZone($('jwCP').value);
    etat.cpConnu = (zone !== null);
    etat.ville = (zone !== null) ? ((zone === 'UNKNOWN') ? null : zone[0]) : null;
    if (zone === null) {
      etat.surDevis = true;
      livTxt = 'À confirmer';
      note = 'Sans code postal, on ne peut pas chiffrer la livraison : on te la confirme en 24 h avec les disponibilités. Prix avant taxes.';
      return { lignes: lignes, livTxt: livTxt, total: money(st) + ' +', note: note };
    }
    var km = (zone === 'UNKNOWN') ? null : zone[1];
    if (forcerTransportSurMesure(nomDeZone(zone))) {
      etat.surDevis = true;
      livTxt = 'Sur devis';
      note = 'Ton secteur demande un transport sur mesure : on te confirme la livraison en 24 h. Aucun montant inventé. Prix avant taxes.';
      return { lignes: lignes, livTxt: livTxt, total: money(st) + ' +', note: note };
    }
    var liv = (zone === 'UNKNOWN') ? null : livraisonPour(km);
    if (liv === null) {
      etat.surDevis = true;
      livTxt = 'Sur devis';
      note = (zone === 'UNKNOWN')
        ? 'On ne connaît pas encore ce secteur par cœur : on te confirme la livraison en 24 h. Prix avant taxes.'
        : 'Ton secteur demande un camion dédié : on te confirme la livraison en 24 h. Prix avant taxes.';
      return { lignes: lignes, livTxt: livTxt, total: money(st) + ' +', note: note };
    }
    etat.livraison = liv;
    livTxt = money(liv);
    note = 'Livraison et reprise comprises. Prix avant taxes.';
    return { lignes: lignes, livTxt: livTxt, total: money(st + liv), note: note };
  }
  function resume(calc){
    var LN = String.fromCharCode(10);
    var t = [];
    t.push('ASSISTANT JEUX (landing jeux extérieurs)');
    t.push('');
    t.push('Nom : ' + $('jwNom').value.trim());
    t.push('Courriel : ' + $('jwCourriel').value.trim());
    if ($('jwTel').value.trim()) t.push('Téléphone : ' + $('jwTel').value.trim());
    if ($('jwDate').value) t.push('Date de l\'événement : ' + $('jwDate').value);
    t.push('Invités : ' + ($('jwInv').value || 'non précisé'));
    if (etat.mode === 'ramassage') {
      t.push('Formule : RAMASSAGE à l\'entrepôt (Sainte-Thérèse)');
    } else {
      t.push('Formule : livraison');
      t.push('Secteur : ' + (etat.ville || 'non précisé') +
             ($('jwCP').value ? ' (' + $('jwCP').value.toUpperCase().trim() + ')' : ''));
    }
    t.push('');
    t.push('SÉLECTION :');
    calc.lignes.forEach(function(l){ t.push('  - ' + l.q + ' x ' + l.nom + ' = ' + money(l.montant)); });
    t.push('');
    t.push('Sous-total : ' + money(etat.sousTotal));
    t.push('Livraison : ' + calc.livTxt);
    t.push('TOTAL ESTIMÉ : ' + calc.total);
    t.push('');
    t.push('Le client a vu ce prix à l\'écran. Demande envoyée automatiquement au moment où le prix s\'est affiché.');
    return t.join(LN);
  }
  function envoyer(calc){
    var hash = JSON.stringify([panier, etat.mode, $('jwCP').value, $('jwNom').value,
                               $('jwCourriel').value, $('jwTel').value, $('jwDate').value, $('jwInv').value]);
    if (hash === etat.envoiHash) return;   /* deja envoye tel quel */
    if (etat.envoiEnCours) return;
    etat.envoiEnCours = true;
    var statut = $('jwStatut');
    statut.className = 'jw-statut';
    statut.textContent = 'Ta demande part chez nous...';
    var largeur = window.innerWidth;
    var appareil = largeur <= 600 ? 'mobile' : (largeur <= 960 ? 'tablet' : 'desktop');
    EvxEnvoi.envoyer({
      hash: hash,
      lead: {
        action: 'evx_soumission',
        nom_complet: $('jwNom').value.trim(),
        email: $('jwCourriel').value.trim(),
        telephone: $('jwTel').value.trim(),
        date_event: $('jwDate').value,
        details: resume(calc),
        service: 'Assistant jeux (landing extérieurs)',
        page_url: window.location.href,
        referrer: document.referrer || 'direct',
        device: appareil,
        timestamp: new Date().toISOString()
      },
      onOk: function () {
        etat.envoiEnCours = false;
        etat.envoiHash = hash;
        statut.className = 'jw-statut jw-ok';
        statut.textContent = 'Ta demande est chez nous. On te confirme les disponibilités et le prix final en 24 h.';
      },
      onEchec: function (info) {
        etat.envoiEnCours = false;
        statut.className = 'jw-statut jw-echec';
        var mailto = false;
        if (info) { if (info.mailto) mailto = true; }
        statut.textContent = mailto
          ? 'L\'envoi n\'a pas passé. On t\'ouvre un courriel de secours, ou appelle au 514-559-1893.'
          : 'L\'envoi n\'a pas passé. On réessaiera. Appelle-nous au 514-559-1893 si ça urge.';
      }
    });
  }
  function revelerPrix(){
    var calc = calculer();
    var ul = $('jwRecap');
    ul.innerHTML = '';
    calc.lignes.forEach(function(l){
      var li = document.createElement('li');
      var a = document.createElement('span'); a.textContent = l.q + ' × ' + l.nom;
      var b = document.createElement('span'); b.textContent = money(l.montant);
      li.appendChild(a); li.appendChild(b);
      ul.appendChild(li);
    });
    $('jwSousTotal').textContent = money(etat.sousTotal);
    $('jwLiv').textContent = calc.livTxt;
    $('jwLivLbl').textContent = (etat.mode === 'ramassage') ? 'Ramassage à l\'entrepôt' : 'Livraison et reprise';
    $('jwTotal').textContent = calc.total;
    $('jwNote').textContent = calc.note;
    envoyer(calc);
  }
  /* ================= NAVIGATION ================= */
  $('jwSuiv').addEventListener('click', function(){
    if (!peutAvancer()) return;
    montre(iEtape + 1);
  });
  $('jwPrec').addEventListener('click', function(){ montre(iEtape - 1); });
  racine.addEventListener('keydown', function(ev){
    if (ev.key !== 'Escape') return;
    if (iEtape === 0) return;
    ev.preventDefault();
    montre(iEtape - 1);
  });
  $('jwModifier').addEventListener('click', function(){ montre(1); });
  /* barre de progression */
  (function(){
    var barre = $('jwBarre');
    NOMS.forEach(function(nom, k){
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'jw-pas';
      b.setAttribute('aria-label', 'Étape ' + nom);
      var i = document.createElement('i');
      i.setAttribute('aria-hidden', 'true');
      b.appendChild(i);
      var em = document.createElement('em'); em.textContent = nom; b.appendChild(em);
      b.addEventListener('click', function(){ if (k <= vu) montre(k); });
      barre.appendChild(b);
    });
  })();
  /* Sans JS, la section montre juste les trois cartes-liens : la barre de
     navigation ne se revele que quand l assistant est vivant. */
  $('jwNav').style.display = 'flex';
  /* ?jeux=gonflables|arcade|exterieurs preselectionne la categorie */
  (function(){
    var v = null;
    var mm = window.location.search.match(/jeux=([a-z]+)/);
    if (mm) v = mm[1];
    if (v === 'gonflables' || v === 'arcade' || v === 'exterieurs') {
      choisirCategorie(v);
      return;
    }
    montre(0);
  })();
})();
