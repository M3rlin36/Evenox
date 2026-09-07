# Checklist de traitement — un courriel Evenox

Cocher dans l’ordre. Si une case bloquante est vide, on n’invente pas : question, appel, ou « je vous reviens ».  
Pas d’écriture Booqable / `/suivis/` / mail client sans `envoie` ou `crée` d’Alexandre. Analyse ici d’abord.

## A. Canal (avant de rédiger)

- [ ] Fil Gmail réel trouvé (`evenox.ca@gmail.com`), **tout le fil lu de HAUT en BAS**.
- [ ] **Haut** = demande active (à traiter, à chiffrer). **Bas** = historique périmé (ne pas chiffrer s’il y a une relance en haut).
- [ ] **De / À / signature extraits** — avant toute conclusion « pas d’email ».
- [ ] Dernier message utile en haut = le client (pas un interne n8n, pas un vieux brouillon).
- [ ] Doublon : même **courriel + date + lieu** déjà ouvert ? Si oui, un seul dossier, un seul brouillon.
- [ ] Hold ? Dépôt déjà payé sans nouvelle question ? Hors territoire / spam ? → silence ou note interne, 0 mail.
- [ ] Pièces jointes ouvertes (devis, addenda, plans). Comparées au corps du courriel.

## B. Fiche (extraire, `?` si inconnu)

Étiqueter chaque fait : **lu** / **déduit** / **inventé**. Inventé = stop, ne va nulle part.

- [ ] Prénom / nom / organisme / qui facture
- [ ] Courriel / téléphone (tél invalide → **DRAPEAU**)
- [ ] Date événement + **année** + jour de semaine (calendrier réel, ancré à la date du mail)
- [ ] Lieu + ville + accès camion
- [ ] Cueillette magasin **ou** livraison
- [ ] Format : cocktail / assis / cérémonie / marché / autre
- [ ] Quantités demandées (seulement ce que le client a **nommé**)
- [ ] Chapiteau / chauffage / électricité / gonflable / jeux — sans ajouter un modèle non écrit
- [ ] N° Booqable + statut (brouillon / à approuver / envoyé / acompte) — ne pas **créer** avant d’avoir compris
- [ ] Budget mentionné ? **Du haut ou du bas ?** Bas = périmé. Conditions NET / municipal / SEAO ?

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

## E. On sait ? (avant Booqable)

0 trou seulement si **tout** ceci est vrai :

- [ ] Date + jour calendrier OK
- [ ] Lieu / accès tenables
- [ ] Format + quantités cohérents
- [ ] Fenêtre livraison → cueillette claire
- [ ] Pas de contradiction terrain
- [ ] Portée = le **haut** du fil, pas un vieux bas

Sinon on ne crée pas le dossier / devis. On ne chiffre pas.

## F. Drapeaux

Cocher tout doute. Un seul suffit pour l’afficher à Alexandre.

- [ ] Tél invalide / manquant
- [ ] NET 60 · NET 30 sans OK
- [ ] 95 % / quasi-oui
- [ ] Changement d’entité / qui facture
- [ ] Sans dépôt · date proche
- [ ] Hold
- [ ] PJ ≠ courriel
- [ ] Année absente · jour ≠ calendrier
- [ ] Portée périmée / enveloppe du bas
- [ ] Produit que nous nommerions et pas le client
- [ ] Total sans ventilation
- [ ] Client **conteste** dépôt / NET / livraison gratuite

## G. Booqable (seulement après « on sait » + `crée` / `envoie`)

- [ ] Alexandre a dit `crée` ou `envoie` — sinon **stop**, analyse seulement.
- [ ] Produits cherchés (catalogue / `lookup_products`). Aucun prix de tête. Aucun produit non nommé par le client.
- [ ] Stock à la date.
- [ ] Livraison : cueillette, 0–20 km, ou devis (> 40 km = devis). Saint-Donat = devis.
- [ ] Si prix demandés : devis système, 0 ligne tapée dans le mail. **Ventilation obligatoire** avant tout total.
- [ ] Lien dépôt = vrai lien Booqable seulement. Dépôt 20 % / taxes = dossier **vrai**.

## H. Décision (une seule)

- [ ] **0** — 0 trou, on sait → devis automatique (analyse ici, attendre `crée`).
- [ ] **A** — 3+ trous → appel.
- [ ] **B** — 1–2 trous → questions **sans prix**.
- [ ] **C** — contradictions terrain → faits + 1 question ou appel.
- [ ] **D** — municipal / PJ vs courriel → quel document gagne ; pas d’appel interdit ; questions écrites.
- [ ] **E** — relance (le haut est une relance : ne pas rechiffrer le bas).
- [ ] **F** — devis déjà envoyé, on attend.
- [ ] **Contestation** — le client pousse sur dépôt / NET / livraison : question, pas récitation.

Si plus de 2 questions nécessaires **et** ce n’est pas un devis qui interdit le contact : gabarit A (appel).  
Si devis municipal interdit le contact émetteur : gabarit D, questions écrites seulement.

## I. Rédaction

- [ ] Gabarit copié, `[CROCHETS]` remplaçés. Rien d’inventé laissé entre crochets vers le client (soit on sait, soit on enlève).
- [ ] Ouverture : premier = « J’espère que vous allez bien. » / suivi = direct.
- [ ] 0 à 2 questions si gabarit B. Zéro prix. Zéro nom de produit non écrit par le client.
- [ ] Pas de « dans votre budget » / « sous X $ » repris d’un vieux mail.
- [ ] Signature DSC — brouillon seulement, pas d’envoi.
- [ ] Brouillon Gmail créé (réponse au bon fil) **seulement après** validation si Alexandre l’a demandé. Un seul brouillon vivant.
- [ ] Montré à Alexandre : Nom / Date / Client veut / Fait / Drapeaux / Lu–Déduit–Inventé / Action + le texte.
- [ ] Attendre **envoie**. `ok` / `go` / « fais la soumission » ≠ envoi.

## J. Après « envoie »

- [ ] Envoi du **texte montré**.
- [ ] Coller `Parti.` + À + Objet + corps. Sinon `Pas parti. Le brouillon est encore là.`
- [ ] PDF = canal Booqable, pas une PJ Gmail bricolée.
