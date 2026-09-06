'use strict';
/* Cahier du 6 septembre 2026 — uniquement des faits déjà écrits
   dans le [SUIVI] et dans Gmail. Aucune date, aucun prix, aucun
   courriel inventé. La séquence lit ce livre ; elle n'invente pas. */

var JOUR = '2026-09-06';

var dossiers = [
  {
    id: 'melanie-little',
    nom: 'Mélanie Little',
    entreprise: 'Académie Ste-Thérèse',
    courriel: '',
    telephone: '514-913-0509',
    date_evenement: '2026-09-26',
    montant: 0,
    depot_paye: 0,
    montant_paye: 0,
    statut: 'new',
    pipeline: 'prospection',
    devis_envoye: false,
    client_a_ecrit: false,
    prochaine_action: 'Appeler',
    booqable_number: '',
    sujet_dis: 'Devis 26 septembre — Ste-Thérèse',
    dis: 'Allô Mélanie, Alexandre d\'Évenox. J\'ai votre demande pour le 26 septembre à l\'Académie Ste-Thérèse. Je vous envoie le devis ce matin — le dépôt garde la date.',
    exclusion: 'Appel d\'abord — pas encore de devis, pas de courriel',
  },
  {
    id: 'dahlia-1826',
    nom: 'Dahlia',
    entreprise: '',
    courriel: 'dahlia.jamal@gmail.com',
    telephone: '',
    date_evenement: '2026-09-13',
    montant: 1082,
    depot_paye: 0,
    montant_paye: 0,
    statut: 'negotiating',
    pipeline: 'ventes',
    devis_envoye: true,
    client_a_ecrit: true,
    prochaine_action: 'Oui ou non pour 500 $ TTC',
    booqable_number: '1826',
    exclusion: 'Elle a écrit — pas une relance auto',
  },
  {
    id: 'joelle-radio-canada',
    nom: 'Joëlle Des Rosiers',
    entreprise: 'Radio-Canada',
    courriel: '',
    telephone: '438-342-8309',
    date_evenement: '2026-09-21',
    montant: 0,
    depot_paye: 0,
    montant_paye: 0,
    statut: 'new',
    pipeline: 'prospection',
    devis_envoye: false,
    client_a_ecrit: false,
    prochaine_action: 'Appeler',
    booqable_number: '',
    sujet_dis: 'Devis 21 septembre — Radio-Canada',
    dis: 'Allô Joëlle, Alexandre d\'Évenox. J\'ai votre demande pour le 21 septembre à Radio-Canada. Je vous envoie le devis ce matin — le dépôt garde la date.',
    exclusion: 'Appel d\'abord — pas encore de devis, pas de courriel',
  },
  {
    id: 'vincent-1836',
    nom: 'Vincent Collin',
    entreprise: 'Repentigny',
    courriel: 'vincentcollin2001@hotmail.com',
    telephone: '438-498-9639',
    date_evenement: '2026-09-23',
    montant: 0,
    depot_paye: 0,
    montant_paye: 0,
    statut: 'new',
    pipeline: 'prospection',
    devis_envoye: false,
    client_a_ecrit: false,
    prochaine_action: 'Appeler',
    booqable_number: '1836',
    exclusion: 'Appel d\'abord — devis pas encore parti au client',
  },
  {
    id: 'emilie-1758',
    nom: 'Emilie Brien',
    entreprise: 'Festipod',
    courriel: '',
    telephone: '',
    date_evenement: '2026-09-17',
    montant: 0,
    depot_paye: 0,
    montant_paye: 0,
    statut: 'quoted',
    pipeline: 'ventes',
    devis_envoye: false,
    client_a_ecrit: true,
    prochaine_action: 'Dis tes heures',
    booqable_number: '1758',
    exclusion: 'Elle a écrit — heures à confirmer, pas une relance auto',
  },
  {
    id: 'justine-1759',
    nom: 'Justine Theriault',
    entreprise: 'Empreinte',
    courriel: '',
    telephone: '',
    date_evenement: '2026-12-01',
    montant: 0,
    depot_paye: 0,
    montant_paye: 0,
    statut: 'new',
    pipeline: 'ventes',
    devis_envoye: false,
    client_a_ecrit: false,
    prochaine_action: 'Envoyer les 2 estimés',
    booqable_number: '1759',
    exclusion: 'Estimés pas encore envoyés — pas une relance',
  },
  {
    id: 'annie-1822',
    nom: 'Annie Paquette',
    entreprise: 'MindCore',
    courriel: 'apaquette@mindcoretech.com',
    telephone: '',
    date_evenement: '2026-12-05',
    montant: 0,
    depot_paye: 0,
    montant_paye: 0,
    statut: 'negotiating',
    pipeline: 'ventes',
    devis_envoye: true,
    client_a_ecrit: true,
    prochaine_action: 'Oui ou non pour le 5 déc',
    booqable_number: '1822',
    exclusion: 'Elle a écrit — lien de dépôt déjà envoyé',
  },
  {
    id: 'mathieu-1562',
    nom: 'Mathieu Lacroix',
    entreprise: '',
    courriel: '',
    telephone: '',
    date_evenement: '',
    montant: 0,
    depot_paye: 300,
    montant_paye: 300,
    statut: 'won',
    pipeline: 'ventes',
    devis_envoye: true,
    client_a_ecrit: false,
    prochaine_action: '',
    booqable_number: '1562',
    exclusion: 'Dépôt encaissé — on n\'écrit pas',
  },
  {
    id: 'chana',
    nom: 'Chana',
    entreprise: '',
    courriel: '',
    telephone: '',
    date_evenement: '2026-10-08',
    montant: 0,
    depot_paye: 0,
    montant_paye: 0,
    statut: 'following_up',
    pipeline: 'ventes',
    devis_envoye: true,
    client_a_ecrit: false,
    prochaine_action: 'On attend',
    booqable_number: '',
    exclusion: 'Tu lui as écrit le 3 sept — on attend',
  },
  {
    id: 'catherine',
    nom: 'Catherine',
    entreprise: '',
    courriel: '',
    telephone: '',
    date_evenement: '',
    montant: 0,
    depot_paye: 0,
    montant_paye: 0,
    statut: 'following_up',
    pipeline: 'ventes',
    devis_envoye: true,
    client_a_ecrit: true,
    prochaine_action: 'On attend',
    booqable_number: '',
    exclusion: 'Elle confirme — on attend',
  },
  {
    id: 'sp-canada',
    nom: 'SP Canada',
    entreprise: 'SP Canada',
    courriel: '',
    telephone: '',
    date_evenement: '',
    montant: 0,
    depot_paye: 0,
    montant_paye: 0,
    statut: 'lost',
    pipeline: 'ventes',
    devis_envoye: true,
    client_a_ecrit: false,
    prochaine_action: '',
    booqable_number: '',
    exclusion: 'Dossier perdu — ne pas écrire',
  },
  {
    id: 'juliana',
    nom: 'Juliana',
    entreprise: '',
    courriel: '',
    telephone: '',
    date_evenement: '',
    montant: 0,
    depot_paye: 0,
    montant_paye: 0,
    statut: 'lost',
    pipeline: 'ventes',
    devis_envoye: false,
    client_a_ecrit: false,
    prochaine_action: '',
    booqable_number: '',
    exclusion: 'Dossier perdu — ne pas écrire',
  },
];

function evaluer(d) {
  if (d.statut === 'lost') {
    return { action: 'exclure', raison: d.exclusion || 'Dossier perdu — ne pas écrire' };
  }
  if (Number(d.depot_paye) > 0 || Number(d.montant_paye) > 0) {
    return { action: 'exclure', raison: d.exclusion || 'Dépôt encaissé' };
  }
  if (d.client_a_ecrit) {
    return { action: 'exclure', raison: d.exclusion || 'Le client a écrit — pas une relance auto' };
  }
  if (!d.devis_envoye) {
    return { action: 'exclure', raison: d.exclusion || 'Pas encore de devis parti' };
  }
  if (!d.courriel) {
    return { action: 'exclure', raison: d.exclusion || 'Pas de courriel' };
  }
  if (d.exclusion) {
    return { action: 'exclure', raison: d.exclusion };
  }
  return { action: 'candidat', raison: '' };
}

function bilan() {
  var candidats = [];
  var exclus = [];
  dossiers.forEach(function (d) {
    var ev = evaluer(d);
    var ligne = {
      id: d.id,
      nom: d.nom,
      courriel: d.courriel,
      date_evenement: d.date_evenement,
      booqable_number: d.booqable_number,
      prochaine_action: d.prochaine_action,
      action: ev.action,
      raison: ev.raison,
    };
    if (ev.action === 'candidat') candidats.push(ligne);
    else exclus.push(ligne);
  });
  return {
    jour: JOUR,
    dimanche: true,
    envoi_client: false,
    candidats: candidats,
    exclus: exclus,
  };
}

module.exports = {
  JOUR: JOUR,
  dossiers: dossiers,
  evaluer: evaluer,
  bilan: bilan,
};
