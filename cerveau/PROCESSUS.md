# PROCESSUS — un courriel, une passe

SOP d’exécution. **Grok exécute ça à chaque mail**, avec `GROK.md` + une instance de `extraction.json`.  
Horloge = **Chemin le plus rapide** (`GROK.md`). Stop dès qu’on peut répondre au client.  
Rien ne part sans `envoie`. Rien n’est créé dans Booqable sans `crée`.

## Qui fait quoi

| Étape | Grok | Alexandre | Gmail | Booqable |
| --- | --- | --- | --- | --- |
| Réception | Cherche le fil (`search_threads` / `get_thread`, **HAUT seulement**) | Colle le mail ou dit « traite » | Source de vérité | — |
| Lecture + extraction | 1 passe HAUT. Remplit `extraction.json` (lu / déduit / inventé, drapeaux, trous, action) | Lit la note | — | — |
| Branche | Choisit **une** action. Rédige. `create_draft` (jamais `send_message`) | Relit le brouillon | Stocke le brouillon | — |
| 0 trou | Brouillon **mail de devis** (0 $ dans le mail) + payload devis prêt | Tape **`crée`** puis **`envoie`** | Envoie seulement après `envoie` | Crée le devis **après `crée`** |
| 1–2 trous | Brouillon questions **sans prix**. Stop. | Tape **`envoie`** | Envoie le mail de questions | Attend les réponses |
| 3+ / contradiction | Brouillon **1 phrase** + appel 514-559-1893 | Tape **`envoie`** (ou appelle lui-même) | Envoie la phrase | Rien |
| Municipal + PJ interdit | Brouillon **À = approvisionnement**, **Cc = émetteur**. Décision OIQ interne **maintenant**. | Tranche OIQ, puis **`envoie`**. **`crée`** seulement si le produit passe | Envoie après `envoie` | Plus tard, si `crée` |
| Hold / n8n interne / déjà répondu | 0 brouillon. Note interne. | « lève hold » si besoin | — | — |

`ok` / `go` / « fais la soumission » ≠ `envoie` et ≠ `crée`.

---

## Horloge — cases à cocher (1 passe)

Ne pas ouvrir Obsidian, le catalogue, 10 recherches Gmail, le bas du fil, ni Booqable « au cas où ».

### T+0 — réception

- [ ] Fil Gmail réel (`evenox.ca@gmail.com`) **ou** corps + PJ collés par Alexandre.
- [ ] Anti-doublon : `list_drafts` sur ce fil. Déjà répondu / brouillon vivant → **stop**, ne pas recommencer.
- [ ] Hold ? Dépôt déjà payé sans nouvelle question ? Interne n8n (`Nouvelle soumission`, `Devis abandonné`) ? → 0 mail.

### T+0–10 s — lecture HAUT

- [ ] **De / À / signature** extraits **avant** « pas d’email ».
- [ ] Haut = demande active (à traiter, à chiffrer). Bas = ne pas relire, ne pas chiffrer.
- [ ] PJ ouverte si elle change le destinataire ou disqualifie un produit (municipal). Sinon skip.

### T+10 s — extraction (contrat machine)

Remplir **une instance** de `extraction.json` (copie `examples[0]`, remplis, montre).

- [ ] `provenance.lu` / `deduit` / `invente` — inventé = jamais mail, jamais Booqable.
- [ ] `drapeaux` dès qu’un doute existe.
- [ ] `trous` + `nb_trous`. On sait (0 trou) seulement si : date+jour OK · lieu/accès tenables · format+quantités cohérents · fenêtre livr.→cueillette · pas de contradiction · portée = le **haut**.
- [ ] `action` = **une** valeur. `destinataire.a` / `cc`. `brouillon.texte`. `devis.oui`.

### T+10 s — une branche, puis stop

| `nb_trous` / cas | `action` | Grok fait tout de suite | Grok **ne fait pas** |
| --- | --- | --- | --- |
| **0** | `devis_auto` | Brouillon mail de devis (gabarit F si déjà parti). Prix **sur le devis seulement**. Payload Booqable prêt. | Envoyer. Créer Booqable avant `crée`. |
| **1–2** | `questions_sans_prix` | Gabarit B (ou C/G). Banque. Crochets. **0 $**. `create_draft`. | Booqable. Catalogue. Relire le bas. |
| **3+** ou contradiction | `appel` | Gabarit A ou C. **1 phrase** + 514-559-1893. `create_draft`. | Liste de 9 questions. Checklist 21 points. |
| Municipal + PJ interdit contact | `questions_ecrites_municipal` | Gabarit D2. **À approvisionnement, Cc émetteur**. Décision OIQ interne **en même temps**. | Promettre une soumission si produit disqualifié. Titre DSC. Mail À Karine/loisirs seuls. |

Municipal (même si 0 trou produit) : le devis gouverne budget/specs. Confirmation conseil = drapeau, pas un contrat.

### T+immédiat — brouillon Gmail

- [ ] Gabarit collé, `[CROCHETS]` remplacés. Pas de réécriture littéraire.
- [ ] Premier mail : « J’espère que vous allez bien. » Suivi : direct. Jamais « merci pour le résumé ».
- [ ] Signature : DSC (B2C) **ou** `Directeur du Service à la Clientèle` (ville / organisme / devis public).
- [ ] `create_draft` : `to` = `destinataire.a`, `cc` = `destinataire.cc`, `replyToMessageId` = message du haut. **Jamais `send_message` / `reply`.**
- [ ] Montrer à Alexandre : Nom / Date / Client veut / Fait / Drapeaux / Lu–Déduit–Inventé / Action + texte + JSON.

**STOP.** Attendre `envoie` et/ou `crée`.

---

## Après le mot d’Alexandre

### `envoie` (sur **ce** texte)

- [ ] Grok : `send_message` avec `draftId` du brouillon montré. Pas un autre texte.
- [ ] Preuve : `Parti.` + À + Objet + corps. Sinon `Pas parti. Le brouillon est encore là.`

### `crée` (0 trou, ou municipal **après** OIQ OK)

- [ ] Grok : créer le devis Booqable (produits **nommés par le client**, stock à la date, ventilation avant tout total).
- [ ] Lien dépôt = vrai URL Booqable. Dépôt 20 % / taxes = dossier **vrai**.
- [ ] Mail de devis : 0 ligne de prix tapée. Le PDF / lien porte les montants.

### Les deux (0 trou)

Parallèle seulement ici : `crée` (Booqable) + brouillon mail de devis, puis `envoie`.

---

## Interdits (ne jamais bloquer le brouillon)

- Tout Obsidian / tout le cerveau / catalogue complet
- 10 recherches Gmail
- Relire le bas du fil
- Devis Booqable « au cas où » alors qu’il y a des trous
- Attendre une 2e passe, une relecture, ou une checklist 21 points

Règles dures inchangées : `GROK.md` + `regles.md`.
