# Suivis Évenox

Le pipeline custom qui tourne en production à [evenoxpos.cloud/suivis/](https://evenoxpos.cloud/suivis/).

Le code source du VPS (Express + Booqable + Gmail) n’est **pas** dans ce dépôt. Ici : le frontend tel qu’il est servi, plus un serveur de démo pour développer sans jeton Booqable.

## Les 3 files (matin)

1. **Soumissions** — prix déjà envoyé ou à envoyer
2. **An passé** — contrats de l’an dernier + merci J+7
3. **Prospection** — premier contact, pas encore de soumission

Calendrier : **aujourd’hui**, puis la **semaine**, le mois seulement si on le demande.  
**À faire avancer** : bloqués → en retard → aujourd’hui → ils répondent → closer.  
**Fait aujourd’hui** = cahier (qui a touché quoi). **Relances auto** = J+2 à J+30 en brouillons.

## Ce qui a été ajouté sur le frontend

Sans casser les colonnes déjà servies par le VPS (`new` / `quoted` / `won` / `lost`) :

- Colonnes **En relance**, **Négociation**, **Reportés**
- Filtres **Sans prochaine action**, **Relance échue**, **Renouvellement**, **Post-événement**
- Chaque carte montre la prochaine action et sa date (badge rouge si elle manque ou si elle est échue)
- Fiche dossier : bloc « Prochaine action »
- Fiche client : **timeline d’interactions** (tous dossiers). L’onglet Clients ouvre toujours cette fiche
- Relance annuelle : cliquer la ligne ouvre la fiche client

Les champs API `alerte`, `prochaine_action`, `prochaine_relance`, `pipeline`, `interactions` sont optionnels. Si le VPS ne les envoie pas encore, l’UI reste utilisable.

## Démo locale

```bash
cd suivis
npm install
npm start
```

Ouvrir http://localhost:3000/ — code **`1111`**.

Les gabarits J+2…J+30, réponse, an passé et prospection sont branchés sur Relances auto et sur « Réponse pré-écrite ».  
**M’envoyer un test** part seulement à `evenox.ca@gmail.com`. **Démarrer en brouillons** prépare les courriels — aucun client n’est écrit avant le 10 septembre 2026. Sans jeton Gmail (`GMAIL_REFRESH_TOKEN` + client id/secret), les courriels restent dans `data/courriels.json` et s’affichent dans l’écran Relances auto.

```bash
npm test
```

## Déploiement sur le VPS

Copier `public/js/*.js` et `public/css/app.css` par-dessus les fichiers déjà servis sous `/suivis/`. Ne pas déployer `server.js` : c’est uniquement la démo locale.

Côté API production, ajouter quand c’est prêt :

| Champ | Où | Valeurs |
| --- | --- | --- |
| `pipeline` | carte + dossier | `ventes` · `renouvellement` · `post_evenement` |
| `prochaine_action` | carte + dossier | texte libre déjà saisi, jamais inventé |
| `prochaine_relance` | carte + dossier | date ISO déjà saisie |
| `alerte` | carte + dossier | `Sans prochaine action` · `Relance échue` |
| `filtres.*` | `GET /api/pipeline` | compteurs pour les chips |
| `interactions` | `GET /api/client/:id` | `{ date, type, titre, detail, par, dossier_id }` |

Règle déjà en vigueur : **aucun courriel client sans OUI jusqu’au 10 sept. 2026**.
