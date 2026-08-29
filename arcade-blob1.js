(function(){
  'use strict';

  /* =========================================================
     MOTEUR V8, genere par build_landing_v8.py
     NE PAS EDITER DANS data/ : editer le gabarit dans tools/.

     Livraison : 100 $ de base couvrant 10 km, puis 7 $/km
                 jusqu'a 40 km. Au-dela et centre-ville de
                 Montreal : sur devis. Ramassage toujours gratuit.
     Envoi     : action WordPress « evx_soumission » (admin-ajax),
                 la meme que le formulaire de /contact/.

     Tout ce fichier reste en ASCII pur : une plage accentuee
     ecrite en clair dans une regex casse le script si la page
     est servie avec le mauvais encodage.
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

  var PRODUITS = [
    { id:'machine-arcade-pacman', nom:'Arcade Pacman', prix:100, groupe:'bornes' },
    { id:'jeux-arcade-multijeux-100-jeux', nom:'Jeux Arcade Multijeux (100+ Jeux)', prix:140, groupe:'bornes' },
    { id:'jeu-de-skeeball-arcade-9-pieds', nom:'Jeu de Skeeball Arcade (9 pieds)', prix:150, groupe:'bornes' },
    { id:'jeu-arcade-pac-man', nom:'Jeu Arcade Pac Man', prix:100.0, groupe:'bornes' },
    { id:'joystick-pac-man', nom:'Joystick Pac Man', prix:40.0, groupe:'bornes' },
    { id:'machine-arcade1up-big-buck-hunter-mossy-oak-deluxe', nom:'Machine Arcade1Up Big Buck Hunter Mossy Oak Deluxe', prix:140.0, groupe:'bornes' },
    { id:'machine-arcade1up-le-jeu-d-arcade-de-luxe-fast-the-furious', nom:'Machine ARCADE1UP Le jeu d\'arcade de luxe Fast & The Furious', prix:140.0, groupe:'bornes' },
    { id:'machine-d-arcade1up-mortal-kombat-ii', nom:'Machine d\'Arcade1up Mortal Kombat II', prix:140.0, groupe:'bornes' },
    { id:'table-de-ping-pong', nom:'Table de Ping Pong', prix:50, groupe:'tables' },
    { id:'table-de-billard-portable', nom:'Table de Billard Portable', prix:50, groupe:'tables' },
    { id:'table-beer-pong', nom:'Table Beer Pong', prix:50, groupe:'tables' },
    { id:'table-de-poker-8-places-location', nom:'Table de Poker (8 places)', prix:70, groupe:'tables' },
    { id:'jetons-de-poker-professionnels-loc', nom:'Jetons de poker professionnels', prix:20, groupe:'tables' },
    { id:'table-air-hockey-en-location', nom:'Table Air Hockey en Location', prix:120, groupe:'tables' },
    { id:'table-de-baby-foot-residentiel', nom:'Table de Baby Foot Résidentiel', prix:120, groupe:'tables' },
    { id:'table-de-missisipi', nom:'Table de Missisipi', prix:120, groupe:'tables' },
    { id:'chips-de-poker-profesionnel', nom:'Chips de poker profesionnel', prix:20.0, groupe:'tables' },
    { id:'set-boule-de-billard', nom:'Set Boule de Billard', prix:20.0, groupe:'tables' },
    { id:'table-de-billard-de-golf', nom:'Table de Billard de Golf', prix:200.0, groupe:'tables' },
    { id:'table-de-baby-foot-commerciale', nom:'Table de Baby Foot Commerciale', prix:160, groupe:'tables' },
    { id:'nintendo-switch-location', nom:'Nintendo Switch', prix:60, groupe:'consoles' },
    { id:'jeux-mario-kart-nintendo-switch-lo', nom:'Jeux Mario Kart Nintendo Switch', prix:25, groupe:'consoles' },
    { id:'meta-quest-oculus', nom:'Meta Quest Oculus', prix:80.0, groupe:'consoles' }
  ];

  var $ = function(id){ return document.getElementById(id); };
  var elInv = $('jaInv'), elCP = $('jaCP'), elVille = $('jaVille');
  if (!elInv) return;

  var panier = {};            /* id -> quantite */
  var etat = { invites: 0, mode: 'livraison', ville: null, cpConnu: false,
               surDevis: false, sousTotal: 0, livraison: 0 };

  /* Montant en dollars, format quebecois : espace pour les milliers,
     virgule pour les cents.

     L'ancienne version faisait Math.round() : un napkin a 1,50 $
     s'affichait « 2 $ » dans le panier. Depuis qu'on offre tout
     l'inventaire, le catalogue contient des articles a 1,50 $, 2,50 $,
     3,55 $ et 6,55 $, arrondir n'est plus anodin. Meme fonction que la
     page tables-chaises, qui l'avait deja juste. */
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
    /* Arrondi au dollar. Les kilometres sont des distances routieres
       reelles, donc decimaux (31,8 km) : sans arrondi la livraison sort a
       « 252,60 $ », ce qui donne un faux air de precision a un tarif
       qu'on annonce comme approximatif. */
    return Math.round(LIV_BASE + LIV_PAR_KM * (km - LIV_KM_INCLUS));
  }

  function lookupZone(raw){
    var fsa = (raw || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3);
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

  function render(){
    $('jaCart').classList.remove('ja-show-offre');

    var inv = parseInt(elInv.value, 10);
    if (isNaN(inv) || inv < 1) inv = 1;
    if (inv > 2000) inv = 2000;
    etat.invites = inv;

    var lignes = lignesPanier();
    var sousTotal = 0;
    lignes.forEach(function(l){ sousTotal += l.montant; });
    etat.sousTotal = sousTotal;

    var ul = $('jaPanier');
    if (!lignes.length) {
      ul.innerHTML = '<li class="ja-vide"><span>Choisis au moins un article</span><span></span></li>';
    } else {
      ul.innerHTML = lignes.map(function(l){
        return '<li><span>' + l.q + ' × ' + l.nom + '</span><span>' + money(l.montant) + '</span></li>';
      }).join('');
    }
    $('jaSousTotal').textContent = lignes.length ? money(sousTotal) : '-';
    $('jaCta').disabled = !lignes.length;

    var zone = lookupZone(elCP.value);
    etat.cpConnu = (zone !== null);
    etat.ville = (zone && zone !== 'UNKNOWN') ? zone[0] : null;
    etat.surDevis = false;
    etat.livraison = 0;

    if (zone === null) { elVille.textContent = 'En attente'; elVille.classList.add('ja-inconnu'); }
    else if (zone === 'UNKNOWN') { elVille.textContent = 'Secteur à confirmer'; elVille.classList.add('ja-inconnu'); }
    else { elVille.textContent = zone[0]; elVille.classList.remove('ja-inconnu'); }

    var ligneLiv = $('jaLigneLiv');
    ligneLiv.classList.remove('ja-free');

    if (!lignes.length) {
      $('jaLiv').textContent = '-';
      $('jaTotal').textContent = '-';
      $('jaNote').textContent = 'Sélectionne tes articles pour voir ton prix. Prix avant taxes.';
      return;
    }

    if (etat.mode === 'ramassage') {
      ligneLiv.classList.add('ja-free');
      $('jaLiv').textContent = 'Gratuit';
      $('jaTotal').textContent = money(sousTotal);
      $('jaNote').textContent = 'Ramassage à Sainte-Thérèse, sans frais. Prévois un véhicule assez grand. Prix avant taxes.';
      return;
    }

    if (zone === null) {
      $('jaLiv').textContent = '-';
      $('jaTotal').textContent = money(sousTotal) + ' +';
      $('jaNote').textContent = 'Entre ton code postal pour ajouter la livraison au total. Prix avant taxes.';
      return;
    }

    var km = (zone === 'UNKNOWN') ? null : zone[1];
    var liv = (zone === 'UNKNOWN') ? null : livraisonPour(km);

    if (liv === null) {
      etat.surDevis = true;
      $('jaLiv').textContent = 'Sur devis';
      $('jaTotal').textContent = money(sousTotal) + ' +';
      $('jaNote').textContent = (zone === 'UNKNOWN')
        ? 'On ne connaît pas encore ce secteur par cœur. On te confirme la livraison en 24 h. Prix avant taxes.'
        : 'Ce secteur demande un camion dédié. On te confirme la livraison en 24 h. Prix avant taxes.';
      return;
    }

    etat.livraison = liv;
    $('jaLiv').textContent = money(liv);
    $('jaTotal').textContent = money(sousTotal + liv);
    $('jaNote').textContent = 'Livraison, installation et reprise comprises. Prix avant taxes.';
  }

  /* ---------- Panneau « c'est trop cher » ----------
     Regle Alexandre, 11 aout 2026 : ce panneau n'annonce AUCUN
     pourcentage. Il explique ce qui fait bouger le prix, puis demande
     le budget. La version precedente promettait « route du vendredi,
     -45 % sur la livraison » dans tous les secteurs, une offre qui
     n'existait pas. Ne pas y remettre de chiffre sans son accord.     */
  function afficherOffre(){
    var ville = etat.ville, liv = etat.livraison;
    var eyebrow = $('jaOffreEyebrow'), titre = $('jaOffreTitre'), texte = $('jaOffreTexte');
    var liste = $('jaOffreListe'), cta = $('jaOffreCta');
    var ctx = '&invites=' + etat.invites + (ville ? '&secteur=' + encodeURIComponent(ville) : '');

    if (etat.mode === 'livraison' && !etat.cpConnu) {
      eyebrow.textContent = 'On peut souvent faire mieux';
      titre.textContent = 'Dis-nous où tu es';
      texte.textContent = 'La livraison est ce qui bouge le plus dans le prix, et elle se calcule sur la distance réelle depuis Sainte-Thérèse. Ton code postal, et on te donne le vrai total.';
      liste.innerHTML =
        '<li>100 $ de base, qui couvre les 10 premiers kilomètres</li>' +
        '<li>Au-delà de 40 km, on chiffre au cas par cas</li>' +
        '<li>Ramassage en boutique toujours gratuit</li>';
      cta.textContent = 'Parler à quelqu\'un';
      cta.href = 'tel:5145591893';
      $('jaCart').classList.add('ja-show-offre');
      elCP.focus();
      return;
    }

    if (etat.surDevis) {
      eyebrow.textContent = ville ? 'Offre pour ' + ville : 'Offre de secteur';
      titre.textContent = 'Donne-nous ton budget, on bâtit autour';
      texte.textContent = 'Ton secteur demande un déplacement dédié, c\'est ce qui fait monter le prix. On ne met pas de tarif automatique dessus : on le chiffre à la main. Donne-nous ton budget et ta date, on bâtit autour.';
      liste.innerHTML =
        '<li>Ton secteur est chiffré au cas par cas, pas à la grille</li>' +
        '<li>On ajuste la sélection pour tomber sur ton chiffre</li>' +
        '<li>Réponse en 24 heures, sans engagement</li>';
      cta.textContent = 'Donner mon budget';
      cta.href = 'https://evenox.ca/contact/?offre=budget' + ctx;
      $('jaCart').classList.add('ja-show-offre');
      return;
    }

    if (liv > 0) {
      eyebrow.textContent = ville ? 'Offre pour ' + ville : 'Offre de secteur';
      titre.textContent = 'Donne-nous ton budget, on bâtit autour';
      texte.textContent = 'La livraison est ce qui bouge le plus dans le prix : ' +
        money(LIV_BASE) + ' couvrent les ' + LIV_KM_INCLUS + ' premiers kilomètres, ' +
        'et on compte la distance réelle après. Le reste, c\'est la sélection, ' +
        'et elle, elle s\'ajuste.';
      liste.innerHTML =
        '<li>Ramassage en boutique à Sainte-Thérèse : la livraison tombe à zéro</li>' +
        '<li>Un article de moins, c\'est son prix en moins</li>' +
        '<li>Donne-nous ton budget et ta date, on propose la combinaison qui rentre</li>';
      cta.textContent = 'Donner mon budget';
      cta.href = 'https://evenox.ca/contact/?offre=budget' + ctx;
      $('jaCart').classList.add('ja-show-offre');
      return;
    }

    eyebrow.textContent = ville ? 'Offre pour ' + ville : 'On peut ajuster';
    titre.textContent = 'On peut descendre le prix autrement';
    texte.textContent = 'Tu es en ramassage gratuit, il n\'y a rien à couper du côté de la livraison. La sélection, elle, s\'ajuste.';
    liste.innerHTML =
      '<li>Un article de moins, c\'est son prix en moins</li>' +
      '<li>On remplace par un modèle équivalent moins cher</li>' +
      '<li>Donne-nous ton budget, on propose la combinaison qui rentre</li>';
    cta.textContent = 'Donner mon budget';
    cta.href = 'https://evenox.ca/contact/?offre=budget' + ctx;
    $('jaCart').classList.add('ja-show-offre');
  }

  /* ---------- Envoi ---------- */
  var LN = String.fromCharCode(10);

  function resume(){
    var t = [];
    t.push('Configurateur jeux d\'arcade'.toUpperCase());
    t.push('');
    t.push('Combien d\'invités : ' + etat.invites);
    t.push('Secteur : ' + (etat.ville || 'non précisé') +
           (elCP.value ? ' (' + elCP.value.toUpperCase().trim() + ')' : ''));
    t.push('Mode : ' + (etat.mode === 'ramassage' ? 'ramassage en boutique' : 'livraison'));
    t.push('');
    t.push('SELECTION :');
    var lignes = lignesPanier();
    if (lignes.length) {
      lignes.forEach(function(l){ t.push('  - ' + l.q + ' x ' + l.nom + ' = ' + money(l.montant)); });
    } else { t.push('  (aucun article)'); }
    t.push('');
    t.push('Sous-total : ' + money(etat.sousTotal));
    t.push('Livraison : ' + $('jaLiv').textContent);
    t.push('TOTAL ESTIME : ' + $('jaTotal').textContent);
    return t.join(LN);
  }

  function remplirRecap(){
    var lignes = lignesPanier(), h = '';
    h = lignes.map(function(l){ return l.q + ' &times; ' + l.nom + ' , <b>' + money(l.montant) + '</b>'; }).join('<br>');
    h += '<br>Livraison , <b>' + $('jaLiv').textContent + '</b>';
    h += '<br>Total estim&eacute; , <b>' + $('jaTotal').textContent + '</b>';
    if (etat.ville) h += '<br>Secteur , <b>' + etat.ville + '</b>';
    $('jaRecap').innerHTML = h;
  }

  function msg(txt){
    var m = $('jaMsg');
    m.textContent = txt;
    m.className = 'ja-msg ja-on ja-fail';
  }

  function ouvrirFormulaire(){
    if (!lignesPanier().length) return;
    remplirRecap();
    $('jaMsg').className = 'ja-msg';
    $('jaCart').classList.remove('ja-show-offre');
    $('jaCart').classList.add('ja-show-form');
    $('jaNom').focus();
  }

  function courrielValide(v){ return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v); }

  $('jaCta').addEventListener('click', ouvrirFormulaire);
  $('jaOffreCta').addEventListener('click', function(e){
    if ((this.getAttribute('href') || '').indexOf('tel:') === 0) return;
    e.preventDefault();
    ouvrirFormulaire();
  });
  $('jaFormBack').addEventListener('click', function(){ $('jaCart').classList.remove('ja-show-form'); });
  $('jaNo').addEventListener('click', afficherOffre);
  $('jaOffreBack').addEventListener('click', function(){ $('jaCart').classList.remove('ja-show-offre'); });

  $('jaForm').addEventListener('submit', function(e){
    e.preventDefault();
    var nom = $('jaNom').value.trim(), email = $('jaEmail').value.trim();
    $('jaNom').parentElement.classList.toggle('ja-err', !nom);
    $('jaEmail').parentElement.classList.toggle('ja-err', !courrielValide(email));
    if (!nom || !courrielValide(email)) {
      msg('Il nous faut au moins ton nom et un courriel valide pour te répondre.');
      return;
    }
    var bouton = $('jaSend');
    bouton.disabled = true;
    bouton.textContent = 'Envoi en cours...';
    $('jaMsg').className = 'ja-msg';

    var details = resume();
    var extra = $('jaNote2').value.trim();
    if (extra) details += LN + LN + 'MESSAGE DU CLIENT :' + LN + extra;

    var fd = new FormData();
    fd.append('action', 'evx_soumission');
    fd.append('evx_nonce', window.evx_nonce || '');
    fd.append('nom_complet', nom);
    fd.append('email', email);
    fd.append('telephone', $('jaTel').value.trim());
    fd.append('date_event', $('jaDate').value);
    fd.append('details', details);
    fd.append('service', 'Configurateur jeux d\'arcade');
    fd.append('page_url', window.location.href);
    fd.append('referrer', document.referrer || 'direct');
    fd.append('device', window.innerWidth <= 600 ? 'mobile' : (window.innerWidth <= 960 ? 'tablet' : 'desktop'));
    fd.append('timestamp', new Date().toISOString());

    /* Panier lisible par machine : c'est CE champ que le pont Booqable
       consomme (configurateur_vers_booqable.py). Le champ "details"
       reste du texte pour l'humain et ne doit jamais etre reparse. */
    fd.append('panier_json', JSON.stringify({
      page:    'jeux-arcade',
      items:   panier,
      mode:    etat.mode,
      cp:      (elCP.value || '').toUpperCase().trim(),
      ville:   etat.ville || '',
      invites: etat.invites
    }));

    fetch(window.evx_ajax || '/wp-admin/admin-ajax.php',
          { method:'POST', body:fd, credentials:'same-origin' })
      .then(function(r){ return r.json(); })
      .then(function(d){
        if (d && d.success) { window.location.href = '/merci'; }
        else { throw new Error('refus serveur'); }
      })
      .catch(function(){
        bouton.disabled = false;
        bouton.textContent = 'Envoyer ma demande';
        msg('L\'envoi n\'a pas passé. Appelle-nous au 514-559-1893, on prend ta demande tout de suite.');
      });
  });

  /* ---------- Quantites ----------
     Une seule fonction fait autorite sur la quantite, parce que deux
     endroits l'affichent : la ligne du selecteur et la visionneuse. Si
     les deux ecrivaient chacun de leur cote, ouvrir la visionneuse apres
     avoir clique « + » dans la liste montrerait un chiffre perime.      */
  function majQte(id, q){
    panier[id] = q;
    var ligne = document.querySelector('.ja-page .ja-item[data-id="' + id + '"]');
    if (ligne) {
      ligne.querySelector('.ja-qval').textContent = q;
      ligne.classList.toggle('ja-actif', q > 0);
    }
    if (visioId === id) $('jaVisioQte').textContent = q;
    render();
  }

  function changerQte(id, d){
    var q = (panier[id] || 0) + d;
    if (q < 0) q = 0;
    if (q > 40) q = 40;
    majQte(id, q);
  }

  /* ---------- Visionneuse produit ---------- */
  var visio = $('jaVisio'), visioId = null;

  function ouvrirVisio(id){
    var p = produit(id);
    if (!p) return;
    var ligne = document.querySelector('.ja-page .ja-item[data-id="' + id + '"]');
    var img = ligne ? ligne.querySelector('img') : null;
    var note = ligne ? ligne.querySelector('.ja-item-note') : null;
    /* Tous les produits Booqable n'ont pas de photo. Ouvrir une
       visionneuse vide serait pire que ne rien ouvrir. */
    if (!img) return;
    visioId = id;
    $('jaVisioImg').setAttribute('src', img ? img.getAttribute('src') : '');
    $('jaVisioImg').setAttribute('alt', p.nom);
    $('jaVisioNom').textContent = p.nom;
    $('jaVisioNote').textContent = note ? note.textContent : '';
    $('jaVisioPrix').textContent = p.prix + ' $';
    $('jaVisioQte').textContent = panier[id] || 0;
    visio.hidden = false;
    document.body.style.overflow = 'hidden';
    $('jaVisioX').focus();
  }

  function fermerVisio(){
    visio.hidden = true;
    visioId = null;
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.ja-page .ja-item-img').forEach(function(v){
    v.addEventListener('click', function(){
      var ligne = this.closest('.ja-item');
      if (ligne) ouvrirVisio(ligne.getAttribute('data-id'));
    });
  });
  $('jaVisioX').addEventListener('click', fermerVisio);
  $('jaVisioFond').addEventListener('click', fermerVisio);
  $('jaVisioMoins').addEventListener('click', function(){ if (visioId) changerQte(visioId, -1); });
  $('jaVisioPlus').addEventListener('click', function(){ if (visioId) changerQte(visioId, 1); });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !visio.hidden) fermerVisio();
  });

  /* ---------- Entrees ---------- */
  document.querySelectorAll('.ja-page .ja-item .ja-qbtn').forEach(function(b){
    b.addEventListener('click', function(){
      var ligne = this.closest('.ja-item');
      changerQte(ligne.getAttribute('data-id'), parseInt(this.getAttribute('data-d'), 10));
    });
  });

  document.querySelectorAll('.ja-page .ja-mode').forEach(function(b){
    b.addEventListener('click', function(){
      etat.mode = this.getAttribute('data-mode');
      document.querySelectorAll('.ja-page .ja-mode').forEach(function(x){ x.classList.remove('ja-on'); });
      this.classList.add('ja-on');
      $('jaEtapeCP').classList.toggle('ja-cache', etat.mode === 'ramassage');
      render();
    });
  });

  $('jaMoins').addEventListener('click', function(){
    elInv.value = Math.max(1, (parseInt(elInv.value, 10) || 1) - 5); render();
  });
  $('jaPlus').addEventListener('click', function(){
    elInv.value = Math.min(2000, (parseInt(elInv.value, 10) || 0) + 5); render();
  });
  elInv.addEventListener('input', render);
  elCP.addEventListener('input', render);

  /* FAQ */
  document.querySelectorAll('.ja-page .faq-question').forEach(function(btn){
    btn.addEventListener('click', function(){
      var wasOpen = this.classList.contains('open');
      document.querySelectorAll('.ja-page .faq-question.open').forEach(function(b){
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
     Injecte par JS car WordPress strip les <script> du contenu de page.
     Google lit le DOM rendu, donc c'est pris en compte. */
  try {
    var faqLd = [];
    document.querySelectorAll('.ja-page .faq-question').forEach(function(b){
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

  /* CTA flottant */
  var fc = $('jaFloat');
  if (fc) {
    window.addEventListener('scroll', function(){
      if (window.pageYOffset > 500) fc.classList.add('visible');
      else fc.classList.remove('visible');
    });
  }

  render();
})();