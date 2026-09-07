# Checklist de traitement — un courriel Evenox

Cocher dans l’ordre. Si une case bloquante est vide, on ne invente pas : question, appel, ou « je vous reviens ».

## A. Canal (avant de rédiger)

- [ ] Fil Gmail réel trouvé (`evenox.ca@gmail.com`), tout le fil lu.
- [ ] Dernier message utile = le client (pas un interne n8n, pas un vieux brouillon).
- [ ] Doublon : même **courriel + date + lieu** déjà ouvert ? Si oui, un seul dossier, un seul brouillon.
- [ ] Hold ? Dépôt déjà payé sans nouvelle question ? Hors territoire / spam ? → silence ou note interne, 0 mail.
- [ ] Pièces jointes ouvertes (devis, addenda, plans). Comparées au corps du courriel.

## B. Fiche (extraire, `?` si inconnu)

- [ ] Prénom / nom / organisme / qui facture
- [ ] Courriel / téléphone
- [ ] Date événement + **année** + jour de semaine (calendrier réel, ancré à la date du mail)
- [ ] Lieu + ville + accès camion
- [ ] Cueillette magasin **ou** livraison
- [ ] Format : cocktail / assis / cérémonie / marché / autre
- [ ] Quantités demandées
- [ ] Chapiteau / chauffage / électricité / gonflable / jeux
- [ ] N° Booqable + statut (brouillon / à approuver / envoyé / acompte)
- [ ] Budget mentionné ? Conditions NET / municipal / SEAO ?

## C. Calendrier

- [ ] Jour de semaine = date réelle.
- [ ] Année écrite par le client, ou demandée.
- [ ] « Passé / futur » jugé à la date **du courriel**, pas à maintenant.
- [ ] Si 3 jours sur place : dates de livraison et de cueillette nommées.

## D. Couche physique (obligatoire)

Cocher **connu** ou **à demander**. Trois « à demander » et plus → appel (gabarit A ou C), sauf interdit municipal.

| Point | Connu | À demander | Appel |
| --- | --- | --- | --- |
| Accès (camion, escalier, sous-sol, distance de portage) | [ ] | [ ] | |
| Dégagement (hauteur plafond, fils, arbres, 8 pi gonflable) | [ ] | [ ] | |
| Ancrage (gazon / asphalte / dalle / patinoire) | [ ] | [ ] | |
| Saison oct–avril (neige, gel, chauffage) | [ ] | [ ] | |
| Durée facturée livraison → cueillette | [ ] | [ ] | |
| Le lieu fournit déjà tables, chaises, permis, électricité | [ ] | [ ] | |

Pièges vus en test :

- Sous-sol + chapiteau (Cardin) = accès + hauteur + ancrage, pas un « oui » automatique.
- Chapiteau en décembre = saison + chauffage + électricité.
- Gonflable 8 pi intérieur = dégagement.
- « 3 jours » = 3 jours facturés, pas 1 jour de fête.
- Tables / permis du lieu = on ne les remet pas sur le devis sans le dire.

## E. Booqable

- [ ] Produits cherchés (catalogue / `lookup_products`). Aucun prix de tête.
- [ ] Stock à la date.
- [ ] Livraison : cueillette, 0–20 km, ou devis (> 40 km = devis). Saint-Donat = devis.
- [ ] Si prix demandés : devis système, 0 ligne tapée dans le mail.
- [ ] Lien dépôt = vrai lien Booqable seulement.

## F. Décision (une seule)

- [ ] **A** — trop incomplet → appel.
- [ ] **B** — assez complet → 2–3 questions max.
- [ ] **C** — contradictions terrain → faits + 1 question ou appel.
- [ ] **D** — municipal / PJ vs courriel → quel document gagne ; pas d’appel interdit.
- [ ] **E** — relance.
- [ ] **F** — devis déjà envoyé, on attend.

Si plus de 2 questions nécessaires **et** ce n’est pas un devis qui interdit le contact : gabarit A (appel).  
Si devis municipal interdit le contact émetteur : gabarit D, questions écrites seulement.

## G. Rédaction

- [ ] Gabarit copié, `[CROCHETS]` remplacés. Rien d’inventé laissé entre crochets vers le client (soit on sait, soit on enlève).
- [ ] Ouverture : premier = « J’espère que vous allez bien. » / suivi = direct.
- [ ] 0 à 3 questions. Zéro prix inventé.
- [ ] Signature DSC.
- [ ] Brouillon Gmail créé (réponse au bon fil). Un seul brouillon vivant.
- [ ] Montré à Alexandre : Nom / Date / Client veut / Fait / Action + le texte.
- [ ] Attendre **envoie**. `ok` / `go` / « fais la soumission » ≠ envoi.

## H. Après « envoie »

- [ ] Envoi du **texte montré**.
- [ ] Coller `Parti.` + À + Objet + corps. Sinon `Pas parti. Le brouillon est encore là.`
- [ ] PDF = canal Booqable, pas une PJ Gmail bricolée.
