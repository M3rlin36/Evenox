# Brief pigiste — Tracking Google Ads + bannière Loi 25 (évenox.ca)

*À copier dans un courriel ou une offre de mandat (Upwork, Malt, réseau). Le détail technique pas à pas, en anglais, est dans `GUIDE-TRACKING-LOI25.md`, section B : plan de 5 jours, extraits de code et liste de vérification.*

---

## Courriel prêt à envoyer

**Objet :** Mandat court — tracking Google Ads + bannière Loi 25 (WordPress/Divi), à livrer d'ici le 13 octobre

> Bonjour {{prénom}},
>
> Je lance des campagnes Google Ads pour Évenox (location événementielle, evenox.ca) le 14 octobre. J'ai besoin d'un mandat court et précis sur WordPress/Divi + Google Tag Manager, à livrer **au plus tard le mardi 13 octobre**.
>
> **Le mandat (5 livrables) :**
> 1. Nettoyer les balises : un seul compte Google Ads et une seule propriété GA4 (je te dis lesquels), un seul conteneur GTM, retrait du pixel OpenAI.
> 2. Installer une bannière de consentement conforme à la Loi 25 (CookieYes ou Complianz), en français, avec boutons « Accepter » et « Refuser » de même apparence, et le mode consentement Google en **basic**.
> 3. Créer la conversion Google Ads « Demande de soumission » sur l'envoi réussi du formulaire, avec conversions avancées pour les prospects et champs cachés GCLID, GBRAID et WBRAID remplis après consentement.
> 4. Activer le suivi des appels depuis les annonces (numéro de transfert Google, appels de 60 s et plus) et les clics sur le numéro en conversion secondaire.
> 5. Remplacer le formulaire de soumission par un formulaire en 4 étapes (spécification fournie) avec reCAPTCHA v3.
>
> Spécifications complètes, extraits de code et liste de vérification : en pièce jointe.
>
> **Ton budget-temps estimé :** 15 à 20 heures. Peux-tu me confirmer ta disponibilité, ton taux horaire et une date de livraison ? Les accès (WordPress admin, GTM, Google Ads, GA4) sont donnés le jour 1, sans partage de mot de passe : par invitation à ton adresse.
>
> Merci !
> Alexandre — Évenox

**Pièces jointes à envoyer :** `GUIDE-TRACKING-LOI25.md` (section B et E), `pages/formulaire-soumission.md`.

---

## Critères d'acceptation (tu ne paies qu'une fois tout coché)

- [ ] Le code source du site ne contient qu'**un** ID Google Ads (AW-…), **un** ID GA4 (G-…) et **un** conteneur GTM. Aucun pixel OpenAI.
- [ ] Ouvrir le site en navigation privée : la bannière s'affiche en français. Avec « Refuser », aucune balise Google Ads ni GA4 ne se déclenche (Tag Assistant).
- [ ] Avec « Accepter », ouvrir `evenox.ca/forfaits-corporatif/?gclid=TEST123` puis envoyer le formulaire : le lead arrive avec **gclid = TEST123** dans le courriel ou dans Notion.
- [ ] Dans Google Ads, Objectifs > Conversions : « Demande de soumission » est **principale**, comptage « Une seule », et un faux lead apparaît dans les 24 h (état « Enregistrement des conversions »).
- [ ] « Appels depuis les annonces (60 s et plus) » est principale ; toutes les autres actions de conversion, y compris celles de l'ancien compte, sont **secondaires**.
- [ ] Le formulaire en 4 étapes fonctionne sur mobile ; l'adresse de la salle est facultative ; le budget est obligatoire.
- [ ] Un document d'une page liste ce qui a été installé, où, et comment le tester.

---

## Ce que je fournis au pigiste le jour 1

| Élément | Comment |
|---|---|
| Choix du compte Google Ads et du GA4 à garder | Décision D2 (ou moi après lecture des données) |
| Accès WordPress admin | Invitation à son adresse |
| Accès GTM, Google Ads (standard), GA4 (éditeur) | Invitations |
| Texte de la bannière et de la politique de confidentialité | Modèle CookieYes/Complianz + nom du responsable des renseignements personnels |
| Spécification du formulaire | `pages/formulaire-soumission.md` |
