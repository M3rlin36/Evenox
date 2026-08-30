(function (global) {
  'use strict';
  /*
    Décisions S6 du brief : constantes en tête, documentées.
    Ne pas trancher ici. Les drapeaux actifs sont à null / false
    pour garder le comportement jw et le catalogue tels quels.
    Après une décision d'affaires : changer UNE constante.
    Jamais un montant inventé pour Montréal, Longueuil, Brossard, Gatineau.
  */
  function minuscules(s) {
    return String(s || '').toLowerCase();
  }
  function estVilleSurMesure(nom) {
    var villes = EvxDecisions.villesSurMesure || [];
    var n = minuscules(nom);
    var i;
    for (i = 0; i < villes.length; i++) {
      if (n.indexOf(minuscules(villes[i])) !== -1) return true;
    }
    return false;
  }
  var EvxDecisions = {
    villesSurMesure: ['Montréal', 'Longueuil', 'Brossard', 'Gatineau'],
    ajustementSurMesure: null,
    forcerSurMesure: false,
    seuilLivraisonIncluseKit: 449,
    seuilLivraisonIncluseSecteur: 500,
    seuilLivraisonIncluseActif: null,
    destinationLeads: '',
    connect4Jx: 60,
    connect4Jw: 80,
    connect4Actif: null,
    plancherCommande: 300,
    appliquerPlancherCommande: false,
    estVilleSurMesure: estVilleSurMesure
  };
  global.EvxDecisions = EvxDecisions;
})(typeof window !== 'undefined' ? window : this);
