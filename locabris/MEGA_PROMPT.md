# Méga-prompt Locabris — exécuter tel quel

Tu livres des modules HTML/CSS/JS à coller dans des modules Code Divi. Tu copies le branding déjà en place. Tu ne redesignes pas.

## Contexte

Locabris (locabris.ca) vend et installe des abris d’auto usagés sur la Rive-Nord. Plus de location. WordPress + Divi 4.27 + WooCommerce. Les pages cassées sont des modules Code custom. L’envoi part vers :

`https://hooks.zapier.com/hooks/catch/16509085/udt0i4j/`

Garde ce webhook. Change seulement le payload.

## Branding (obligatoire)

```
Navy #0E2C4F | Bleu #1088B5 | Glace #D9EDF7 #E7F3F8
Texte #121212 #35454E #5A6B75 #7A8B95 #9BAAB3
Bordure #E6EBEF #D7E0E6 | Champ #FBFCFD
Radius carte 0 (soumission) ou 12px (contact)
Radius bouton 8px | Radius CTA accueil 4px
Police Raleway
Eyebrow 11px / 700 / uppercase / letter-spacing .22–.26em
Titre 800 / letter-spacing -0.02em
Hover cartes : bordure #1088B5 (classe .lx3)
Hover CTA : fond #0E2C4F (classe .lx4)
Sélection : outline 2px #1088B5 offset -2px (.loca-on)
```

Images existantes seulement (`locabris-img-*.jpg`, logo ours).

## 1. Soumission (`/soumission-location-tempo/`)

Remplace le module Code actuel.

Wizard à 2 étapes, une seule visible à la fois.

**Étape 1 — Choix**
- Eyebrow `Soumission rapide`
- Sous-titre `Choisissez ce dont vous avez besoin. Un conseiller vous rappelle le jour même.`
- Carte Achat : `Je veux acheter un abri` · `Abris usagés vérifiés, dès 250 $. Avec ou sans installation.` · `Choisir un abri →`
- Carte Installation : `J'ai déjà mon abri` · `Montage et ancrage seulement : 200 $ pour un simple, 300 $ pour un double.` · `Réserver ma date →`
- Ces cartes NE sont PAS des liens. Elles ouvrent l’étape 2.

**Étape 2a — Achat**
- Lien `← Changer de demande` (retour étape 1)
- `L'abri qui vous intéresse` : Abri simple (11 et 12 pi · dès 250 $) · Double longueur (jusqu’à 32 pi · sur demande) · Double largeur (18 et 20 pi · dès 700 $)
- `Avec installation ?` : Oui, installez-le (200 $ simple · 300 $ double) · Non, livraison seule
- Champs : Nom et prénom · Numéro de téléphone · Adresse de livraison (ville et code postal) · Précisions facultatif
- CTA `Recevoir mon prix`
- Microcopie `Aucun engagement. Vos coordonnées servent uniquement à vous rappeler.`

**Étape 2b — Installation**
- Même retour
- `Votre abri` : Simple (Montage 200 $) · Double (Montage 300 $) · Je ne sais pas
- Champs : Nom et prénom · Numéro de téléphone · Adresse d’installation · Précisions facultatif
- CTA `Réserver mon montage`
- Microcopie `Installation dans un rayon de 20 km de notre entrepôt de Sainte-Thérèse.`

**Succès** (caché jusqu’à envoi OK)
- `Merci, votre demande est reçue.`
- `Un conseiller vous appelle d'ici la fin de la journée · 438-439-0201`
- Masquer les étapes. Scroll top.

**JS — règles dures**
- Un seul choix actif par groupe (`.loca-on` + `data-value`).
- Payload propre. INTERDIT : `innerText.split("").join(" ")`.
- Envoyer : `{ source, parcours, abri, installation, nom, tel, adresse, precisions }`.
- `source` = `soumission-rapide`.
- Bloquer si nom, tel, adresse ou choix manquants. Erreur inline navy, pas `alert()`.
- Tel : au moins 10 chiffres.
- `fetch` + `response.ok`. Sinon le bouton redevient `Réessayer`.
- Ne pas afficher le merci si l’envoi échoue.

Pied de page du module : téléphone, courriel, zone 20 km. Identique à l’actuel.

## 2. Contact (`/contact/`)

Garde le hero (photo `locabris-img-5536.jpg`, titre `Parlons de votre entrée`).

Grille à 2 colonnes seulement :
1. Formulaire `Écrivez-nous` (nom, tel, courriel facultatif, ville facultatif, message)
2. Carte navy (téléphone, courriel, Facebook) + heures + secteur

INTERDIT : la 3e colonne « Message envoyé » visible au chargement.

`#ctc-ok` en `display:none` par défaut. Après succès : afficher `#ctc-ok`, cacher le formulaire, scroll top.

Placeholders plus pâles (`#9BAAB3`) pour ne pas ressembler à des champs remplis.

Même webhook, `source: page-contact`. Nom + tel obligatoires.

## 3. Boutique (`/shop/`)

Le CSS footer actuellement dumpé en texte doit aller dans un vrai `<style>`. Description boutique :

`Abris usagés vérifiés. Simple dès 250 $. Double dès 700 $. Installation 200 $ / 300 $ dans un rayon de 20 km.`

## 4. Fiche abri (gabarit Divi produit)

Plus de `.summary` vide. Module Code :

- Photo produit à gauche (image WP du produit, ou `locabris-img-3214.jpg` en repli)
- Titre `Abri hivernal {format} usagé`
- Prix Woo visible
- Condition 8 sur 10, une phrase
- Liste `Ce qui est inclus` : livraison, montage, ancrage, format validé
- Pose 200 $ simple / 300 $ double, 20 km, taxes en sus
- CTA principal `Demander une soumission` → `/soumission-location-tempo/`
- CTA secondaire : shortcode Woo `[add_to_cart]` seulement si le prix s’affiche

Interdit : « en location », « Abris Hivernale ».

## 5. Politique (`/politique-confidentialite/`)

Page avec contenu. Voix Locabris. Loi 25.

Qui (Locabris, Sainte-Thérèse) · quoi (nom, tel, courriel, adresse, message) · pourquoi (rappel, soumission) · Zapier comme sous-traitant · conservation saison + suivi · droits d’accès / correction / suppression au 438-439-0201 ou locabris.ca@gmail.com · cookies WP / GA / GTM · pas de vente de listes.

## 6. Yoast + slugs (texte exact)

| Page | Title | Meta |
|---|---|---|
| Accueil | Le spécialiste de l'abri d'auto sur la Rive-Nord \| Locabris | Vente et installation d'abris d'auto usagés. Laval, Blainville, Mirabel et Rive-Nord. Réponse le jour même. |
| Soumission | Soumission rapide — achat ou installation \| Locabris | Demandez votre prix pour un abri usagé ou une installation. Un conseiller vous rappelle le jour même. |
| Contact | Parlons de votre entrée \| Locabris | Écrivez-nous pour un abri usagé ou une installation. Réponse le jour même. 438-439-0201. |
| Boutique | Nos abris Tempo à vendre \| Locabris | Abris usagés vérifiés, dès 250 $. Simple, double longueur, double largeur. |
| Location simple | Abris simples usagés — 11 et 12 pieds \| Locabris | Abris d'auto simples usagés, 11 et 12 pieds. Vérifiés, prêts à poser. Dès 250 $. |
| Produits | Abri hivernal {L} x {l} usagé à vendre \| Locabris | Abri d'auto {L} x {l} usagé, condition 8/10. Vente et installation, Rive-Nord. |

Redirections 301 : `/boutique/` → `/shop/` · `/blog/` → `/`.

Slugs produits `en-location` et `-copie` : renommer quand possible, garder une 301.

## Contraintes

- HTML/CSS/JS vanilla, prêt pour module Code Divi.
- Autonome : pas de build, pas de framework.
- Mobile 375px : cartes empilées, CTA 44px min, pas de bouton flottant à recréer.
- Français Québec, « abri hivernal », prix avec espace avant $.
- Ne pas envoyer de fausse soumission pendant les tests preview (mock fetch).
