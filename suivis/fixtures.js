'use strict';
/* Données de démo — mêmes formes que l'API de evenoxpos.cloud/suivis/.
   Aucune date n'est inventée au fil de l'eau : tout est figé ici.
   À remplacer par SQLite / Booqable / Gmail sur le VPS. */

function isoJour(offset) {
  var d = new Date();
  d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
}

function isoHeure(offsetJours, h, m) {
  var d = new Date();
  d.setHours(h || 10, m || 0, 0, 0);
  d.setDate(d.getDate() + offsetJours);
  return d.toISOString();
}

function etatInitial() {
  var auj = isoJour(0);
  var hier = isoJour(-1);
  var j2 = isoJour(2);
  var j7 = isoJour(7);

  var equipe = [
    { identifiant: 'alexandre', nom: 'Alexandre', actif: true, derniere_visite: auj },
    { identifiant: 'marie', nom: 'Marie', actif: true, derniere_visite: hier },
  ];

  var clients = {
    'cli-st': {
      id: 'cli-st', nom: 'Service des loisirs', entreprise: 'Ville de Sainte-Thérèse',
      telephone: '450 435-1954', courriel: 'loisirs@sainte-therese.ca',
      type: 'municipal', tier: 'HOT', desabonne: false, recurrent: true,
      jamais_gagne: false, statut: 'Actif',
    },
    'cli-techno': {
      id: 'cli-techno', nom: 'Nadia Fortin', entreprise: 'TechnoNord',
      telephone: '514 555-0188', courriel: 'nadia.fortin@technonord.example',
      type: 'corporatif', tier: 'HOT', desabonne: false, recurrent: true,
      jamais_gagne: false, statut: 'En relance',
    },
    'cli-marie': {
      id: 'cli-marie', nom: 'Camille et Olivier', entreprise: '',
      telephone: '438 555-0142', courriel: 'camille.olivier@example.com',
      type: 'mariage', tier: 'WARM', desabonne: false, recurrent: false,
      jamais_gagne: false, statut: 'Soumis',
    },
    'cli-bouchard': {
      id: 'cli-bouchard', nom: 'Famille Bouchard', entreprise: '',
      telephone: '450 555-0190', courriel: 'bouchard.fete@example.com',
      type: 'prive', tier: 'WARM', desabonne: false, recurrent: false,
      jamais_gagne: false, statut: 'Négociation',
    },
    'cli-corpo': {
      id: 'cli-corpo', nom: 'Jean-Philippe Roy', entreprise: 'Groupe Horizon',
      telephone: '514 555-0166', courriel: 'jp.roy@horizon.example',
      type: 'corporatif', tier: 'HOT', desabonne: false, recurrent: true,
      jamais_gagne: false, statut: 'Gagné',
    },
    'cli-sp': {
      id: 'cli-sp', nom: 'SP Canada', entreprise: 'SP Canada',
      telephone: '', courriel: 'events@spcanada.example',
      type: 'corporatif', tier: 'COLD', desabonne: false, recurrent: false,
      jamais_gagne: true, statut: 'Perdu',
    },
    'cli-juliana': {
      id: 'cli-juliana', nom: 'Juliana', entreprise: '',
      telephone: '514 555-0111', courriel: 'juliana@example.com',
      type: 'prive', tier: 'COLD', desabonne: false, recurrent: false,
      jamais_gagne: true, statut: 'Perdu',
    },
    'cli-festival': {
      id: 'cli-festival', nom: 'Comité Festival d\'été', entreprise: 'Festival d\'été Sainte-Thérèse',
      telephone: '450 555-0177', courriel: 'info@festivalst.example',
      type: 'municipal', tier: 'HOT', desabonne: false, recurrent: true,
      jamais_gagne: false, statut: 'Post-événement',
    },
    'cli-an': {
      id: 'cli-an', nom: 'Sophie Lavoie', entreprise: 'Clinique Dentaire Lavoie',
      telephone: '450 555-0133', courriel: 'sophie@cliniquelavoie.example',
      type: 'corporatif', tier: 'WARM', desabonne: false, recurrent: true,
      jamais_gagne: false, statut: 'À réveiller',
    },
    'cli-restau': {
      id: 'cli-restau', nom: 'Marc Pedneault', entreprise: 'Le Comptoir St-Joseph',
      telephone: '450 555-0128', courriel: 'marc@comptoirstjoseph.example',
      type: 'corporatif', tier: 'WARM', desabonne: false, recurrent: false,
      jamais_gagne: true, statut: 'Prospect',
    },
    'cli-ecole': {
      id: 'cli-ecole', nom: 'Direction', entreprise: 'École primaire des Mille-Fleurs',
      telephone: '450 555-0144', courriel: 'direction@millefleurs.example',
      type: 'municipal', tier: 'HOT', desabonne: false, recurrent: false,
      jamais_gagne: true, statut: 'Prospect',
    },
  };

  var dossiers = {
    'dos-st': {
      id: 'dos-st', client_id: 'cli-st', lead_id: 'ST-2026-Fête',
      nom: 'Service des loisirs', entreprise: 'Ville de Sainte-Thérèse',
      statut: 'new', tier: 'HOT', type: 'municipal',
      montant: 0, montant_paye: 0, depot_paye: 0,
      date_evenement: '2026-12-06',
      prochaine_action: '', prochaine_relance: '',
      alerte: 'Sans prochaine action', pipeline: 'ventes',
      courriel: clients['cli-st'].courriel, telephone: clients['cli-st'].telephone,
      assigne_a: 'Alexandre', notes: '',
      desabonne: false, courriel_invalide: false, pause_auto: false,
      attend_qui: 'evenox', dernier_contact_le: '2026-08-22',
      gmail_thread_id: '', booqable_orders: [], booqable_number: '',
      booqable_status: '',
    },
    'dos-techno': {
      id: 'dos-techno', client_id: 'cli-techno', lead_id: 'TN-2026-Party',
      nom: 'Nadia Fortin', entreprise: 'TechnoNord',
      statut: 'quoted', tier: 'HOT', type: 'corporatif',
      montant: 4280, montant_paye: 0, depot_paye: 0,
      date_evenement: '2026-11-14',
      prochaine_action: 'Appeler — J+7', prochaine_relance: hier,
      alerte: 'Relance échue', pipeline: 'ventes',
      courriel: clients['cli-techno'].courriel, telephone: clients['cli-techno'].telephone,
      assigne_a: 'Alexandre', notes: 'Elle a demandé le prix des tentes 20×40.',
      desabonne: false, courriel_invalide: false, pause_auto: false,
      attend_qui: 'client', dernier_contact_le: '2026-08-28',
      gmail_thread_id: 'thread-techno', booqable_orders: ['BQ-8841'],
      booqable_number: 'BQ-8841', booqable_status: 'draft',
    },
    'dos-marie': {
      id: 'dos-marie', client_id: 'cli-marie', lead_id: 'MAR-2026',
      nom: 'Camille et Olivier', entreprise: '',
      statut: 'following_up', tier: 'WARM', type: 'mariage',
      montant: 1860, montant_paye: 0, depot_paye: 0,
      date_evenement: '2026-10-17',
      prochaine_action: 'Courriel J+4', prochaine_relance: j2,
      alerte: '', pipeline: 'ventes',
      courriel: clients['cli-marie'].courriel, telephone: clients['cli-marie'].telephone,
      assigne_a: 'Marie', notes: '',
      desabonne: false, courriel_invalide: false, pause_auto: false,
      attend_qui: 'client', dernier_contact_le: '2026-09-01',
      gmail_thread_id: 'thread-marie', booqable_orders: ['BQ-9012'],
      booqable_number: 'BQ-9012', booqable_status: 'draft',
    },
    'dos-bouchard': {
      id: 'dos-bouchard', client_id: 'cli-bouchard', lead_id: 'BOU-2026',
      nom: 'Famille Bouchard', entreprise: '',
      statut: 'negotiating', tier: 'WARM', type: 'prive',
      montant: 940, montant_paye: 0, depot_paye: 0,
      date_evenement: '2026-09-26',
      prochaine_action: 'Envoyer le contrat', prochaine_relance: auj,
      alerte: '', pipeline: 'ventes',
      courriel: clients['cli-bouchard'].courriel, telephone: clients['cli-bouchard'].telephone,
      assigne_a: 'Marie', notes: 'Hésite entre 2 et 3 tables cocktail.',
      desabonne: false, courriel_invalide: false, pause_auto: false,
      attend_qui: 'evenox', dernier_contact_le: '2026-09-03',
      gmail_thread_id: 'thread-bouchard', booqable_orders: ['BQ-9104'],
      booqable_number: 'BQ-9104', booqable_status: 'draft',
    },
    'dos-corpo': {
      id: 'dos-corpo', client_id: 'cli-corpo', lead_id: 'HOR-2026',
      nom: 'Jean-Philippe Roy', entreprise: 'Groupe Horizon',
      statut: 'won', tier: 'HOT', type: 'corporatif',
      montant: 6120, montant_paye: 1224, depot_paye: 1224,
      date_evenement: '2026-10-09',
      prochaine_action: 'Confirmer le montage', prochaine_relance: j7,
      alerte: '', pipeline: 'renouvellement',
      courriel: clients['cli-corpo'].courriel, telephone: clients['cli-corpo'].telephone,
      assigne_a: 'Alexandre', notes: 'Même setup qu\'en 2025, plus 2 mange-debout.',
      desabonne: false, courriel_invalide: false, pause_auto: false,
      attend_qui: '', dernier_contact_le: '2026-08-15',
      gmail_thread_id: 'thread-corpo', booqable_orders: ['BQ-8720'],
      booqable_number: 'BQ-8720', booqable_status: 'reserved',
    },
    'dos-sp': {
      id: 'dos-sp', client_id: 'cli-sp', lead_id: 'SP-2026',
      nom: 'SP Canada', entreprise: 'SP Canada',
      statut: 'lost', tier: 'COLD', type: 'corporatif',
      montant: 7800, montant_paye: 0, depot_paye: 0,
      date_evenement: '2026-09-18',
      prochaine_action: '', prochaine_relance: '',
      alerte: '', pipeline: 'ventes',
      courriel: clients['cli-sp'].courriel, telephone: '',
      assigne_a: '', notes: 'Perdu — trop cher. Relance dans 1 an, pas avant.',
      desabonne: false, courriel_invalide: false, pause_auto: false,
      attend_qui: '', dernier_contact_le: '2026-07-20',
      gmail_thread_id: '', booqable_orders: [], booqable_number: '',
      booqable_status: '', motif_fermeture: 'prix',
    },
    'dos-juliana': {
      id: 'dos-juliana', client_id: 'cli-juliana', lead_id: 'JUL-2026',
      nom: 'Juliana', entreprise: '',
      statut: 'lost', tier: 'COLD', type: 'prive',
      montant: 520, montant_paye: 0, depot_paye: 0,
      date_evenement: '2026-08-30',
      prochaine_action: '', prochaine_relance: '',
      alerte: '', pipeline: 'ventes',
      courriel: clients['cli-juliana'].courriel, telephone: clients['cli-juliana'].telephone,
      assigne_a: '', notes: 'Perdu. Ne pas écrire.',
      desabonne: false, courriel_invalide: false, pause_auto: false,
      attend_qui: '', dernier_contact_le: '2026-08-10',
      gmail_thread_id: '', booqable_orders: [], booqable_number: '',
      booqable_status: '', motif_fermeture: 'non_reponse',
    },
    'dos-report': {
      id: 'dos-report', client_id: 'cli-bouchard', lead_id: 'BOU-2025-rep',
      nom: 'Famille Bouchard', entreprise: '',
      statut: 'deferred', tier: 'WARM', type: 'prive',
      montant: 680, montant_paye: 0, depot_paye: 0,
      date_evenement: '2027-06-12',
      prochaine_action: 'Relancer au printemps', prochaine_relance: '2027-03-02',
      alerte: '', pipeline: 'ventes',
      courriel: clients['cli-bouchard'].courriel, telephone: clients['cli-bouchard'].telephone,
      assigne_a: 'Marie', notes: 'Reporté — mauvais timing 2026.',
      desabonne: false, courriel_invalide: false, pause_auto: false,
      attend_qui: '', dernier_contact_le: '2026-06-02',
      gmail_thread_id: '', booqable_orders: [], booqable_number: '',
      booqable_status: '',
    },
    'dos-festival': {
      id: 'dos-festival', client_id: 'cli-festival', lead_id: 'FEST-2026',
      nom: 'Comité Festival d\'été', entreprise: 'Festival d\'été Sainte-Thérèse',
      statut: 'won', tier: 'HOT', type: 'municipal',
      montant: 9540, montant_paye: 9540, depot_paye: 1908,
      date_evenement: '2026-08-28',
      prochaine_action: 'Merci + prise de date 2027', prochaine_relance: auj,
      alerte: '', pipeline: 'post_evenement',
      courriel: clients['cli-festival'].courriel, telephone: clients['cli-festival'].telephone,
      assigne_a: 'Alexandre', notes: 'J+7 post-événement. Ils réservent toujours en novembre.',
      desabonne: false, courriel_invalide: false, pause_auto: false,
      attend_qui: 'evenox', dernier_contact_le: '2026-08-29',
      gmail_thread_id: 'thread-fest', booqable_orders: ['BQ-8501'],
      booqable_number: 'BQ-8501', booqable_status: 'completed',
    },
    'dos-paye-draft': {
      id: 'dos-paye-draft', client_id: 'cli-corpo', lead_id: 'HOR-DRAFT',
      nom: 'Jean-Philippe Roy', entreprise: 'Groupe Horizon',
      statut: 'quoted', tier: 'HOT', type: 'corporatif',
      montant: 2100, montant_paye: 420, depot_paye: 420,
      date_evenement: '2026-12-11',
      prochaine_action: 'Passer en réservée', prochaine_relance: auj,
      alerte: '', pipeline: 'ventes',
      courriel: clients['cli-corpo'].courriel, telephone: clients['cli-corpo'].telephone,
      assigne_a: 'Alexandre', notes: 'Payé, encore en brouillon Booqable.',
      desabonne: false, courriel_invalide: false, pause_auto: false,
      attend_qui: 'evenox', dernier_contact_le: auj,
      gmail_thread_id: 'thread-draft', booqable_orders: ['BQ-9400'],
      booqable_number: 'BQ-9400', booqable_status: 'draft',
    },
    'dos-restau': {
      id: 'dos-restau', client_id: 'cli-restau', lead_id: 'PRO-REST',
      nom: 'Marc Pedneault', entreprise: 'Le Comptoir St-Joseph',
      statut: 'new', tier: 'WARM', type: 'corporatif',
      montant: 0, montant_paye: 0, depot_paye: 0,
      date_evenement: '',
      prochaine_action: 'Qualifier — date et lieu', prochaine_relance: auj,
      alerte: '', pipeline: 'prospection',
      courriel: clients['cli-restau'].courriel, telephone: clients['cli-restau'].telephone,
      assigne_a: 'Alexandre', notes: 'A vu une tente chez un voisin. Pas de date encore.',
      desabonne: false, courriel_invalide: false, pause_auto: false,
      attend_qui: 'evenox', dernier_contact_le: auj,
      gmail_thread_id: '', booqable_orders: [], booqable_number: '',
      booqable_status: '',
    },
    'dos-ecole': {
      id: 'dos-ecole', client_id: 'cli-ecole', lead_id: 'PRO-ECOLE',
      nom: 'Direction', entreprise: 'École primaire des Mille-Fleurs',
      statut: 'new', tier: 'HOT', type: 'municipal',
      montant: 0, montant_paye: 0, depot_paye: 0,
      date_evenement: '2026-06-12',
      prochaine_action: 'Rappeler la direction', prochaine_relance: auj,
      alerte: '', pipeline: 'prospection',
      courriel: clients['cli-ecole'].courriel, telephone: clients['cli-ecole'].telephone,
      assigne_a: 'Marie', notes: 'Fête de fin d\'année. Budget à confirmer.',
      desabonne: false, courriel_invalide: false, pause_auto: false,
      attend_qui: 'evenox', dernier_contact_le: hier,
      gmail_thread_id: '', booqable_orders: [], booqable_number: '',
      booqable_status: '',
    },
  };

  var contrats = {
    'cli-st': [
      { annee: '2025', date_evenement: '2025-12-07', montant: 2840, booqable_number: 'BQ-6102',
        produits: ['Tente 20×40', '12 tables rondes', '96 chaises', 'Éclairage feston'] },
      { annee: '2024', date_evenement: '2024-12-08', montant: 2460, booqable_number: 'BQ-4410',
        produits: ['Tente 20×40', '10 tables rondes', '80 chaises'] },
    ],
    'cli-techno': [
      { annee: '2025', date_evenement: '2025-11-15', montant: 3920, booqable_number: 'BQ-5988',
        produits: ['2 tentes 20×40', 'Scène 12×16', '15 mange-debout'] },
    ],
    'cli-corpo': [
      { annee: '2025', date_evenement: '2025-10-10', montant: 5480, booqable_number: 'BQ-5721',
        produits: ['Tente 30×40', '20 tables', '160 chaises', 'Piste de danse'] },
      { annee: '2024', date_evenement: '2024-10-11', montant: 5010, booqable_number: 'BQ-3902',
        produits: ['Tente 30×40', '18 tables', '144 chaises'] },
    ],
    'cli-festival': [
      { annee: '2026', date_evenement: '2026-08-28', montant: 9540, booqable_number: 'BQ-8501',
        produits: ['4 tentes 20×40', 'Barrière', 'Scène', 'Éclairage'] },
      { annee: '2025', date_evenement: '2025-08-29', montant: 8820, booqable_number: 'BQ-5510',
        produits: ['4 tentes 20×40', 'Barrière', 'Scène'] },
    ],
    'cli-an': [
      { annee: '2025', date_evenement: '2025-12-12', montant: 1640, booqable_number: 'BQ-6208',
        produits: ['Tente 20×20', '8 tables', '64 chaises'] },
    ],
  };

  var interactions = {
    'cli-st': [
      { date: '2026-08-22', type: 'courriel', titre: 'Demande reçue — fête des employés',
        detail: 'Ils veulent la même tente qu\'en décembre 2025.', par: 'auto' },
      { date: '2025-12-07', type: 'contrat', titre: 'Contrat 2025 livré',
        detail: '2 840,00 $', par: '' },
      { date: '2024-12-08', type: 'contrat', titre: 'Contrat 2024 livré',
        detail: '2 460,00 $', par: '' },
    ],
    'cli-techno': [
      { date: '2026-08-28', type: 'courriel', titre: 'Soumission BQ-8841 envoyée',
        detail: '4 280,00 $ — tentes 20×40', par: 'Alexandre', dossier_id: 'dos-techno' },
      { date: '2026-08-26', type: 'appel', titre: 'Appel de qualification',
        detail: 'Party corpo 14 novembre, 180 personnes.', par: 'Alexandre', dossier_id: 'dos-techno' },
      { date: hier, type: 'relance', titre: 'Relance J+7 échue',
        detail: 'Aucun retour depuis le 28 août.', par: 'auto', dossier_id: 'dos-techno' },
    ],
    'cli-corpo': [
      { date: '2026-08-15', type: 'depot', titre: 'Dépôt 20 % encaissé',
        detail: '1 224,00 $', par: 'auto', dossier_id: 'dos-corpo' },
      { date: '2026-07-02', type: 'courriel', titre: 'Renouvellement 2026 confirmé',
        detail: 'Même date, +2 mange-debout.', par: 'Alexandre', dossier_id: 'dos-corpo' },
      { date: '2025-10-10', type: 'contrat', titre: 'Contrat 2025 livré',
        detail: '5 480,00 $', par: '' },
    ],
    'cli-festival': [
      { date: '2026-08-29', type: 'note', titre: 'Démontage sans incident',
        detail: 'Ils veulent bloquer 2027 en novembre.', par: 'Alexandre', dossier_id: 'dos-festival' },
      { date: '2026-08-28', type: 'contrat', titre: 'Festival 2026 livré',
        detail: '9 540,00 $', par: '', dossier_id: 'dos-festival' },
      { date: auj, type: 'relance', titre: 'Suivi post-événement J+7',
        detail: 'Merci + prise de date 2027.', par: '', dossier_id: 'dos-festival' },
    ],
    'cli-an': [
      { date: '2025-12-12', type: 'contrat', titre: 'Party des Fêtes 2025',
        detail: '1 640,00 $ — tente 20×20', par: '' },
    ],
  };

  var journal = [
    { cree_le: isoHeure(0, 8, 12), par: 'auto', resume: 'Séquence J+4 préparée (brouillon)',
      detail: 'Camille et Olivier', lead_id: 'MAR-2026', dossier_id: 'dos-marie', client: 'Camille et Olivier' },
    { cree_le: isoHeure(0, 9, 4), par: 'Alexandre', resume: 'Note ajoutée sur TechnoNord',
      detail: 'Prix des tentes 20×40', lead_id: 'TN-2026-Party', dossier_id: 'dos-techno', client: 'Nadia Fortin' },
  ];

  var discussion = {
    'dos-techno': [
      { direction: 'sortant', automatique: false, envoye_le: '2026-08-28T15:10:00',
        sujet: 'Soumission TechnoNord — 14 novembre',
        corps: 'Nadia, voici la soumission pour le party corpo du 14 novembre. Tentes 20×40, scène, mange-debout. Total 4 280 $.' },
      { direction: 'entrant', automatique: false, envoye_le: '2026-08-26T11:02:00',
        sujet: 'Party corpo novembre',
        corps: 'On est 180. On veut deux tentes et une petite scène. Vous livrez à Laval ?' },
    ],
    'dos-bouchard': [
      { direction: 'entrant', automatique: false, envoye_le: '2026-09-03T16:40:00',
        sujet: 'Tables cocktail',
        corps: 'On hésite encore entre 2 et 3 tables. Vous pouvez tenir jusqu\'à vendredi ?' },
    ],
    'dos-marie': [
      { direction: 'sortant', automatique: true, envoye_le: '2026-09-01T10:05:00',
        sujet: 'Votre soumission mariage — 17 octobre',
        corps: 'Camille, Olivier, la soumission est toujours bonne pour le 17 octobre.' },
    ],
    'dos-festival': [
      { direction: 'sortant', automatique: false, envoye_le: '2026-08-29T18:20:00',
        sujet: 'Merci — Festival d\'été',
        corps: 'Tout s\'est bien passé. On vous écrit la semaine prochaine pour 2027.' },
    ],
  };

  var materiel = {
    'dos-techno': [
      { quantite: 2, produit: 'Tente 20×40', montant: 2400 },
      { quantite: 1, produit: 'Scène 12×16', montant: 980 },
      { quantite: 15, produit: 'Mange-debout', montant: 900 },
    ],
    'dos-marie': [
      { quantite: 1, produit: 'Arche + drapé', montant: 420 },
      { quantite: 8, produit: 'Table ronde', montant: 640 },
      { quantite: 64, produit: 'Chaise Chiavari', montant: 800 },
    ],
    'dos-bouchard': [
      { quantite: 3, produit: 'Table cocktail', montant: 270 },
      { quantite: 1, produit: 'Tente 20×20', montant: 670 },
    ],
    'dos-corpo': [
      { quantite: 1, produit: 'Tente 30×40', montant: 2800 },
      { quantite: 20, produit: 'Table ronde', montant: 1600 },
      { quantite: 160, produit: 'Chaise', montant: 1280 },
      { quantite: 2, produit: 'Mange-debout', montant: 120 },
      { quantite: 1, produit: 'Piste de danse', montant: 320 },
    ],
    'dos-festival': [
      { quantite: 4, produit: 'Tente 20×40', montant: 4800 },
      { quantite: 1, produit: 'Scène', montant: 2100 },
      { quantite: 1, produit: 'Barrière / éclairage', montant: 2640 },
    ],
  };

  return {
    sequenceMode: 'off',
    equipe: equipe,
    clients: clients,
    dossiers: dossiers,
    contrats: contrats,
    interactions: interactions,
    journal: journal,
    discussion: discussion,
    materiel: materiel,
    notes: {},
    annulations: {},
    sequenceCandidats: ['dos-marie', 'dos-bouchard'],
  };
}

module.exports = { etatInitial: etatInitial, isoJour: isoJour, isoHeure: isoHeure };
