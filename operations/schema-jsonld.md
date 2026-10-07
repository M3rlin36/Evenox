# Schéma JSON-LD — blocs prêts à coller (evenox.ca)

> Pour le webmestre (WEB). Correspond au correctif n° 14 de correctifs-urgents.md et au jour 21 de geo-chatgpt.md.
> Chaque bloc se colle **tel quel** dans un module **Code** de Divi (en haut de la page visée) ou, pour le bloc global, dans Divi → Options du thème → Intégration → `<head>`. Remplacer seulement les valeurs entre crochets `[...]`.
> Tous les faits viennent de recherche/factcheck.md (prix vérifiés le 7 oct. 2026 sur evenox.ca) et des pages d'atterrissage. **Un fait du schéma doit toujours être identique au texte visible de la page et à la fiche Google** : sinon, Google l'ignore et les assistants IA perdent confiance.

---

## 0. Avant de coller

| # | Action | Détail |
|---|---|---|
| 1 | **`<html lang="fr-CA">`** | WordPress → Réglages → Général → Langue du site = **Français du Canada**. Vérifier dans le code source : `<html lang="fr-CA">` (et non `fr-FR`). Balise Open Graph `og:locale` = `fr_CA` (Yoast). |
| 2 | Éviter les doublons | Yoast (ou Rank Math) génère déjà un schéma `Organization` / `WebSite`. Dans Yoast → Apparence de la recherche → Représentation du site : choisir **Organisation**, nom « Évenox », logo. Le bloc `LocalBusiness` ci-dessous utilise `"@id": "https://evenox.ca/#entreprise"` : garder **un seul** bloc LocalBusiness pour tout le site (pas une copie par page). Si une extension de « SEO local » en ajoute un autre, la désactiver. |
| 3 | `inLanguage` | Partout `"fr-CA"` (rechercher et remplacer `fr-FR` dans le schéma Yoast personnalisé, s'il existe). |
| 4 | Courriel | Utiliser `info@evenox.ca` **seulement après** la migration hors Gmail (correctifs-urgents.md, n° 4). D'ici là, retirer la ligne `"email"` plutôt que d'y mettre l'adresse Gmail. |
| 5 | Valider | Après chaque collage : [Test des résultats enrichis](https://search.google.com/test/rich-results) **et** [validator.schema.org](https://validator.schema.org/). Zéro erreur ; les avertissements « champ facultatif manquant » sont acceptables. |
| 6 | Pages noindex | Le schéma placé sur une page `noindex` (`/corporatif/...`, `/mariage/...`, `/evenement-prive/`) n'est pas utilisé par Google. Mettre les blocs FAQPage et Service sur les **pages indexées** équivalentes (voir le tableau de la section 7). |

---

## 1. LocalBusiness (global, une seule fois, dans le `<head>` de tout le site)

Valeurs à remplir :
- `[LATITUDE]`, `[LONGITUDE]` : clic droit sur l'épingle de la fiche Google Maps → copier les coordonnées (5 décimales, ex. `45.6xxxx`, `-73.8xxxx`).
- Horaire : proposé dans landing-corporatif.md (lun.–ven. 9 h–18 h, sam. 9 h–13 h) **[à confirmer]**. Doit être identique à la fiche Google.
- `sameAs` : seulement des URL **qui existent** et qui montrent le même nom, la même adresse et le même téléphone. Retirer une ligne tant que la fiche n'est pas créée ou corrigée (WeddingWire : adresse encore à « Laval »).
- `[URL_FICHE_GOOGLE]` : fiche Google → Partager → copier le lien (format `https://maps.google.com/?cid=...` de préférence au lien court).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EventPlanner"],
  "@id": "https://evenox.ca/#entreprise",
  "name": "Évenox",
  "legalName": "Évenox inc.",
  "alternateName": ["Evenox", "Évenox location événementielle"],
  "description": "Location d'équipement événementiel clé en main à Sainte-Thérèse : forfaits à prix affichés pour les événements d'entreprise (5 à 7, party de bureau, gala) et les mariages (décor et cabine photo avec préposé), livrés, installés et démontés par l'équipe Évenox, sur la Rive-Nord, à Laval et à Montréal.",
  "url": "https://evenox.ca/",
  "logo": "https://evenox.ca/[CHEMIN_DU_LOGO].png",
  "image": [
    "https://evenox.ca/[PHOTO_CORPORATIF].webp",
    "https://evenox.ca/[PHOTO_MARIAGE].webp"
  ],
  "telephone": "+1-514-559-1893",
  "email": "info@evenox.ca",
  "priceRange": "$$",
  "currenciesAccepted": "CAD",
  "paymentAccepted": "Carte de crédit, virement Interac, chèque, comptant, bon de commande",
  "foundingDate": "2022",
  "founder": {
    "@type": "Person",
    "name": "Alexandre Séguin"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "215, boul. René-A.-Robert, local 100",
    "addressLocality": "Sainte-Thérèse",
    "addressRegion": "QC",
    "postalCode": "J7E 4L1",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[LATITUDE]",
    "longitude": "[LONGITUDE]"
  },
  "hasMap": "[URL_FICHE_GOOGLE]",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "[09:00]",
      "closes": "[18:00]"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "[09:00]",
      "closes": "[13:00]"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Sainte-Thérèse" },
    { "@type": "City", "name": "Blainville" },
    { "@type": "City", "name": "Boisbriand" },
    { "@type": "City", "name": "Rosemère" },
    { "@type": "City", "name": "Lorraine" },
    { "@type": "City", "name": "Bois-des-Filion" },
    { "@type": "City", "name": "Mirabel" },
    { "@type": "City", "name": "Saint-Eustache" },
    { "@type": "City", "name": "Deux-Montagnes" },
    { "@type": "City", "name": "Terrebonne" },
    { "@type": "City", "name": "Saint-Jérôme" },
    { "@type": "City", "name": "Laval" },
    { "@type": "City", "name": "Montréal" }
  ],
  "knowsAbout": [
    "party de bureau",
    "party des Fêtes d'entreprise",
    "gala corporatif",
    "consolidation d'équipe",
    "décor de mariage",
    "cabine photo avec préposé",
    "cabine vidéo 360",
    "lettres lumineuses géantes",
    "location de chapiteaux"
  ],
  "sameAs": [
    "[URL_FICHE_GOOGLE]",
    "https://www.facebook.com/[PAGE_ENTREPRISE_EVENOX]",
    "https://www.instagram.com/[COMPTE_EVENOX]",
    "https://www.yelp.ca/biz/[FICHE_YELP]",
    "https://www.weddingwire.ca/[FICHE_WEDDINGWIRE]",
    "https://www.bing.com/maps?[FICHE_BING_PLACES]",
    "https://evenox.booqableshop.com/"
  ],
  "inLanguage": "fr-CA"
}
</script>
```

> **Ne pas** mettre l'URL du profil Facebook **personnel** (`facebook.com/people/...`) dans `sameAs` : seulement la Page d'entreprise (correctifs-urgents.md, n° 12).
> `areaServed` : si la politique « livraison incluse dans un rayon de 40 km » est adoptée, on peut ajouter `{ "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": "[LATITUDE]", "longitude": "[LONGITUDE]" }, "geoRadius": "40000" }` à la liste. Ne pas l'ajouter avant la décision [LIVRAISON].

---

## 2. Service + Offer — forfaits corporatifs

Coller sur la page **indexée** des forfaits corporatifs (`/forfaits-corporatif/` ou `/party-bureau-corporatif/`). Prix vérifiés (factcheck.md, 12a), avant taxes.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://evenox.ca/forfaits-corporatif/#service",
  "name": "Événements d'entreprise clé en main",
  "serviceType": "Location d'équipement événementiel clé en main pour entreprises",
  "description": "Décor, jeux géants, cabine photo avec préposé : un seul fournisseur, une seule facture. Installation et démontage par l'équipe Évenox.",
  "provider": { "@id": "https://evenox.ca/#entreprise" },
  "areaServed": ["Rive-Nord de Montréal", "Laval", "Montréal"],
  "inLanguage": "fr-CA",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Forfaits corporatifs",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "5 à 7 d'équipe",
        "description": "Pour 20 à 60 personnes, au bureau : 5 jeux géants en mini tournoi, lettres lumineuses (jusqu'à 5 caractères), installation pendant les heures de bureau, tableau de tournoi à vos couleurs.",
        "price": "1195.00",
        "priceCurrency": "CAD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1195.00",
          "priceCurrency": "CAD",
          "valueAddedTaxIncluded": false
        },
        "availability": "https://schema.org/InStock",
        "url": "https://evenox.ca/forfait-5-a-7-equipe/",
        "seller": { "@id": "https://evenox.ca/#entreprise" }
      },
      {
        "@type": "Offer",
        "name": "Party de bureau",
        "description": "Le party des Fêtes complet, de 40 à 120 personnes : lettres lumineuses (jusqu'à 8 caractères), mur floral, 5 jeux géants, machine à maïs soufflé (75 portions) à votre image, 2 moments d'étincelles froides, coordination avec l'immeuble.",
        "price": "1995.00",
        "priceCurrency": "CAD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1995.00",
          "priceCurrency": "CAD",
          "valueAddedTaxIncluded": false
        },
        "availability": "https://schema.org/InStock",
        "url": "https://evenox.ca/forfait-party-de-bureau/",
        "seller": { "@id": "https://evenox.ca/#entreprise" }
      },
      {
        "@type": "Offer",
        "name": "Gala Signature",
        "description": "Gala, remise de prix ou party de Noël, de 75 à 150 personnes : tout le forfait Party de bureau, cabine photo haut de gamme avec préposé et photos illimitées, galerie livrée le lendemain, facturation nette 30 jours.",
        "price": "2495.00",
        "priceCurrency": "CAD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "2495.00",
          "priceCurrency": "CAD",
          "valueAddedTaxIncluded": false
        },
        "availability": "https://schema.org/InStock",
        "url": "https://evenox.ca/[URL_FORFAIT_GALA_SIGNATURE]/",
        "seller": { "@id": "https://evenox.ca/#entreprise" }
      }
    ]
  }
}
</script>
```

> Vérifier les URL de chaque forfait (`/forfait-5-a-7-equipe/`, `/forfait-party-de-bureau/` relevées le 7 oct. 2026 ; l'URL exacte du Gala Signature est à copier depuis le site). Si le site affiche « popcorn », écrire la même chose dans la description (le schéma doit refléter la page) ; l'OQLF recommande « maïs soufflé ».
> « Facturation nette 30 jours » : retirer de la description du Gala Signature si la promesse n'est pas confirmée (COMPTE-RENDU, 5 bis, point 5). Même règle pour les réponses FAQ « bon de commande sans dépôt, net 30 » et « nous le remplaçons ou nous remboursons la portion » (garantie de bris) plus bas : le schéma doit reprendre mot pour mot la FAQ visible, et une promesse non confirmée est retirée des deux.

---

## 3. Service + Offer — forfaits mariage et cabine photo

Coller sur la page **indexée** `/forfaits-mariage/` (et le bloc cabine photo sur `/mariage/` une fois corrigée : correctifs-urgents.md, n° 8). Prix vérifiés (factcheck.md, 12b et 12c).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://evenox.ca/forfaits-mariage/#service",
  "name": "Décor de mariage clé en main",
  "serviceType": "Location de décor et de cabine photo pour mariages",
  "description": "Lettres lumineuses géantes, mur floral, étincelles froides et cabine photo avec préposé, installés le jour J et repris par l'équipe Évenox.",
  "provider": { "@id": "https://evenox.ca/#entreprise" },
  "areaServed": ["Rive-Nord de Montréal", "Laval", "Montréal", "Basses-Laurentides"],
  "inLanguage": "fr-CA",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Forfaits mariage",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Décor WOW",
        "description": "5 lettres lumineuses géantes, mur floral, 1 moment d'étincelles froides, installation et démontage, vidéo au ralenti et galerie photo par code QR.",
        "price": "899.00",
        "priceCurrency": "CAD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "899.00",
          "priceCurrency": "CAD",
          "valueAddedTaxIncluded": false
        },
        "availability": "https://schema.org/InStock",
        "url": "https://evenox.ca/forfait-decor-wow/",
        "seller": { "@id": "https://evenox.ca/#entreprise" }
      },
      {
        "@type": "Offer",
        "name": "Soirée Signature",
        "description": "Tout le Décor WOW, cabine photo haut de gamme avec préposé, photos illimitées et impressions sur place, gabarit photo personnalisé, album numérique.",
        "price": "1449.00",
        "priceCurrency": "CAD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1449.00",
          "priceCurrency": "CAD",
          "valueAddedTaxIncluded": false
        },
        "availability": "https://schema.org/InStock",
        "url": "https://evenox.ca/[URL_FORFAIT_SOIREE_SIGNATURE]/",
        "seller": { "@id": "https://evenox.ca/#entreprise" }
      },
      {
        "@type": "Offer",
        "name": "Mariage Signature",
        "description": "Lettres lumineuses et initiales des mariés, mur floral, 2 moments d'étincelles froides, cabine photo haut de gamme avec préposé et photos illimitées, coordination avec la salle de réception.",
        "price": "1899.00",
        "priceCurrency": "CAD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1899.00",
          "priceCurrency": "CAD",
          "valueAddedTaxIncluded": false
        },
        "availability": "https://schema.org/InStock",
        "url": "https://evenox.ca/[URL_FORFAIT_MARIAGE_SIGNATURE]/",
        "seller": { "@id": "https://evenox.ca/#entreprise" }
      }
    ]
  }
}
</script>
```

**Cabine photo (prix « à partir de »)** — à coller sur la page de la cabine photo (ou `/mariage/` corrigée) :

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://evenox.ca/mariage/#cabine-photo",
  "name": "Cabine photo avec préposé",
  "serviceType": "Location de cabine photo avec préposé",
  "provider": { "@id": "https://evenox.ca/#entreprise" },
  "areaServed": ["Rive-Nord de Montréal", "Laval", "Montréal"],
  "inLanguage": "fr-CA",
  "offers": [
    {
      "@type": "Offer",
      "name": "Cabine photo classique avec préposé",
      "priceCurrency": "CAD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "599.00",
        "priceCurrency": "CAD",
        "valueAddedTaxIncluded": false
      },
      "availability": "https://schema.org/InStock",
      "seller": { "@id": "https://evenox.ca/#entreprise" }
    },
    {
      "@type": "Offer",
      "name": "Cabine photo miroir avec préposé (4 h)",
      "priceCurrency": "CAD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "999.00",
        "priceCurrency": "CAD",
        "valueAddedTaxIncluded": false
      },
      "availability": "https://schema.org/InStock",
      "seller": { "@id": "https://evenox.ca/#entreprise" }
    }
  ]
}
</script>
```

> Le palier de 999 $ s'appelle « Premium » sur le site : le schéma utilise un nom descriptif en français. Renommer aussi le palier sur la page (Loi 96 ; google-ads/README.md, point 3b), sinon le schéma ne correspond plus au texte visible.
> **Cabine vidéo 360 : non incluse** tant que le prix d'entrée n'est pas harmonisé (599 $ ou 799 $ : correctifs-urgents.md, n° 8). L'ajouter ensuite sur le même modèle (`minPrice`).
> **Fête privée :** si le propriétaire confirme que les forfaits décor s'appliquent aux 40/50/60 ans, aucune nouvelle offre n'est nécessaire (mêmes forfaits) ; ajouter seulement « fête privée » dans `knowsAbout` du bloc LocalBusiness.

---

## 4. FAQPage — corporatif

Texte **identique** à la FAQ de landing-corporatif.md (section 9). À coller sur la page **indexée** qui affiche cette même FAQ (page pilier « Party de bureau clé en main », geo-chatgpt.md jours 15–16, ou `/party-bureau-corporatif/`), **pas** sur `/corporatif/` (noindex).

> Google n'affiche plus de résultats enrichis FAQ pour la plupart des sites commerciaux (depuis 2023), mais Bing et les assistants IA lisent ces données. Le bloc reste utile **à condition** que chaque question et réponse soit visible sur la page, mot pour mot.
> **[LIVRAISON]** La réponse 5 décrit la livraison payante actuelle (100 $ + 7 $/km). Si la politique « livraison incluse dans un rayon de 40 km » est adoptée, modifier la réponse 5 **et** la réponse 1 (« avant taxes et livraison ») ici et sur la page en même temps.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr-CA",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quel budget prévoir pour un party de bureau?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos forfaits corporatifs vont de 1 195 $ (5 à 7 d'équipe) à 2 495 $ (Gala Signature, de 75 à 150 personnes), avant taxes et livraison. Pour plus de 150 invités, un chapiteau ou plusieurs zones, nous préparons une proposition sur mesure. Nous vous proposons toujours 3 options à des niveaux de prix différents."
      }
    },
    {
      "@type": "Question",
      "name": "Acceptez-vous les bons de commande et la facturation à 30 jours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Sur approbation de crédit, nous confirmons votre événement par bon de commande, sans dépôt ni carte au dossier, avec une facturation nette 30 jours. Pour les autres clients, un dépôt de 20 % bloque la date."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps d'avance faut-il réserver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour les partys des Fêtes (fin novembre à mi-décembre), réservez dès que votre date est confirmée : les jeudis, vendredis et samedis de décembre partent en premier. Le reste de l'année, les fins de semaine partent de 3 à 4 semaines d'avance. Une demande de dernière minute? Appelez-nous, nous vérifions tout de suite."
      }
    },
    {
      "@type": "Question",
      "name": "Pouvez-vous installer pendant les heures de bureau sans déranger?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, c'est notre spécialité. Nous coordonnons le quai de livraison, l'ascenseur et les accès avec votre gestionnaire d'immeuble. Nous installons discrètement ou après 17 h, selon votre horaire."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle région desservez-vous?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La Rive-Nord (Sainte-Thérèse, Blainville, Boisbriand, Mirabel, Saint-Jérôme, Terrebonne…), Laval et Montréal. La livraison coûte 100 $ jusqu'à 10 km de notre entrepôt de Sainte-Thérèse, puis 7 $/km jusqu'à 40 km. Pour le centre-ville de Montréal, nous préparons un prix sur mesure."
      }
    },
    {
      "@type": "Question",
      "name": "Peut-on personnaliser les forfaits avec notre logo et nos couleurs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Lettres lumineuses avec le nom de l'entreprise, emballage de popcorn et gabarit de photo à votre image, choix des jeux, ajouts (machine à barbe à papa, cabine vidéo 360, heures de cabine photo supplémentaires). Les forfaits sont un point de départ."
      }
    },
    {
      "@type": "Question",
      "name": "Et si un équipement brise ou si quelque chose ne fonctionne pas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tout est installé et testé avant l'arrivée de vos invités. Si un équipement brise pendant l'événement, nous le remplaçons ou nous remboursons la portion. Votre conseiller reste joignable par cellulaire pendant toute la soirée."
      }
    },
    {
      "@type": "Question",
      "name": "Quelles sont les conditions d'annulation ou de report?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le report est gratuit tant que le matériel n'est pas chargé. En cas d'annulation 14 jours ou plus avant l'événement, votre dépôt est crédité pour 12 mois. À partir de 7 jours avant, la commande est finale. Les conditions complètes figurent dans notre politique d'annulation."
      }
    }
  ]
}
</script>
```

> La réponse 6 dit « popcorn » parce que la FAQ visible de landing-corporatif.md le dit. Si la page passe à « maïs soufflé » (recommandation OQLF), changer les deux en même temps.
> La réponse 8 dépend de la politique d'annulation, encore contradictoire sur le site (correctifs-urgents.md, n° 15). Mettre à jour après la décision.

---

## 5. FAQPage — mariage

Texte **identique** à la FAQ de landing-mariage.md (section 9). À coller sur `/forfaits-mariage/` ou sur la page pilier « Décor de mariage clé en main » (indexée) qui affiche la même FAQ, pas sur `/mariage/decoration/` (noindex).

> **[LIVRAISON]** La réponse 6 suit la politique **recommandée** (livraison incluse jusqu'à 40 km pour la Soirée Signature et le Mariage Signature). Ne publier ce bloc qu'une fois la politique adoptée ; sinon, remplacer la réponse 6 par le texte de livraison réellement affiché sur la page.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "fr-CA",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Combien coûte le décor de mariage avec Évenox?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trois forfaits à prix fixe : Décor WOW à 899 $ (lettres lumineuses, mur floral, étincelles froides), Soirée Signature à 1 449 $ (avec cabine photo et préposé) et Mariage Signature à 1 899 $ (initiales des mariés, 2 moments d'étincelles, cabine photo, coordination avec la salle). Les prix sont avant taxes. La cabine photo seule commence à 599 $. Pour le mobilier ou un chapiteau, nous préparons un forfait sur mesure."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps d'avance faut-il réserver?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour un samedi de juillet à octobre, la haute saison, réservez de 6 à 12 mois d'avance. Hors saison ou en semaine, quelques mois suffisent souvent. Comme nous offrons une seule cabine photo avec préposé par soir, la première demande confirmée obtient la date."
      }
    },
    {
      "@type": "Question",
      "name": "Comment fonctionne le dépôt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un dépôt de 20 % par carte de crédit bloque votre date. Le solde est payable à la réception du matériel, par carte, virement Interac, chèque ou comptant."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il si nous devons changer la date?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le report est gratuit tant que le matériel n'est pas chargé, selon la disponibilité. En cas d'annulation 14 jours ou plus avant, le dépôt est crédité pour 12 mois. À partir de 7 jours avant, la commande est finale."
      }
    },
    {
      "@type": "Question",
      "name": "Et s'il pleut le jour de notre mariage extérieur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous pouvons déplacer le montage ailleurs sur le même site (à l'intérieur ou sous chapiteau) sans frais, si vous nous prévenez plus de 24 h d'avance. En cas d'alerte météo d'Environnement Canada, le report est sans frais."
      }
    },
    {
      "@type": "Question",
      "name": "Livrez-vous à notre salle ou à notre domaine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nous desservons la Rive-Nord, Laval, Montréal et les Basses-Laurentides. La livraison est incluse dans un rayon de 40 km de Sainte-Thérèse pour la Soirée Signature et le Mariage Signature. Pour le Décor WOW, elle coûte 100 $ jusqu'à 10 km, puis 7 $/km. Au-delà de 40 km, nous faisons un prix sur mesure."
      }
    },
    {
      "@type": "Question",
      "name": "Pouvez-vous personnaliser le décor à nos couleurs et à nos initiales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui : initiales lumineuses (incluses dans le Mariage Signature), lettres supplémentaires à 70 $ chacune, gabarit photo avec vos prénoms et la date, choix du mot et des chaises. Nous en discutons pendant l'appel découverte."
      }
    },
    {
      "@type": "Question",
      "name": "Travaillez-vous avec notre planificatrice ou notre salle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Nous envoyons le plan d'installation et l'horaire à votre planificatrice et au gestionnaire de la salle, puis nous suivons le déroulement prévu."
      }
    }
  ]
}
</script>
```

---

## 6. Article — étude de cas (`/realisations/[slug]/`)

Un bloc par étude de cas publiée (landing-realisations.md). Remplir **seulement** avec les faits de l'étude de cas.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[Type d'événement] pour [N] invités à [Ville]",
  "description": "[Résumé en 2 phrases de l'étude de cas]",
  "image": ["https://evenox.ca/[PHOTO_PRINCIPALE].webp"],
  "datePublished": "[AAAA-MM-JJ]",
  "dateModified": "[AAAA-MM-JJ]",
  "inLanguage": "fr-CA",
  "author": { "@type": "Person", "name": "Alexandre Séguin", "jobTitle": "Fondateur" },
  "publisher": { "@id": "https://evenox.ca/#entreprise" },
  "about": { "@id": "https://evenox.ca/forfaits-corporatif/#service" },
  "mainEntityOfPage": "https://evenox.ca/realisations/[slug]/"
}
</script>
```

> `about` : pointer vers `#service` corporatif ou `https://evenox.ca/forfaits-mariage/#service` selon le cas. Pas de `Review` ni de note dans ce bloc : une citation d'étude de cas n'est pas un avis noté.

---

## 7. AggregateRating — MODÈLE COMMENTÉ (ne pas activer sans vérification)

> ⚠️ **AVERTISSEMENT — lire avant d'activer**
> 1. **Les chiffres doivent correspondre exactement à la fiche Google réelle le jour de la publication** (note **et** nombre d'avis). Le site affiche aujourd'hui 4,8/5 sur 52 avis (et 4,9 ailleurs) : ces chiffres ne sont **pas vérifiés** sur Google (factcheck.md, 12e). Remplacer `[NOTE]` et `[N]` seulement après vérification sur la fiche, et mettre à jour à chaque changement (au moins une fois par mois).
> 2. **Règle de Google sur les avis « auto-proclamés » (self-serving reviews)** : depuis 2019, Google n'affiche **pas** d'étoiles pour le balisage `LocalBusiness` / `Organization` lorsque l'entreprise publie sur son propre site des avis sur elle-même, y compris des avis recopiés de Google ou intégrés par un widget. Ce bloc **ne donnera donc pas d'étoiles dans Google**. Son seul intérêt : renforcer la cohérence des faits pour Bing et les assistants IA.
> 3. Les avis comptés doivent être **visibles sur la page** où se trouve le bloc (widget d'avis Google ou citations réelles). Ne jamais compter des avis qui n'existent pas, ni additionner des avis de plusieurs plateformes sans le dire.
> 4. Un chiffre gonflé ou périmé = information trompeuse (LPC art. 219, Loi sur la concurrence) et risque d'action manuelle Google pour « données structurées trompeuses ».
> 5. Pour l'activer : retirer `<!--` et `-->`, puis **fusionner** `aggregateRating` dans le bloc LocalBusiness de la section 1 (ne pas créer un deuxième LocalBusiness).

```html
<!-- MODÈLE DÉSACTIVÉ — AggregateRating. Activer seulement après vérification de la fiche Google (voir l'avertissement).
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EventPlanner"],
  "@id": "https://evenox.ca/#entreprise",
  "name": "Évenox",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[NOTE, ex. 4.8]",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "[N]",
    "reviewCount": "[N]"
  }
}
</script>
-->
```

> En JSON-LD, la note s'écrit avec un **point** (`4.8`), même si la page affiche `4,8`.

---

## 8. Où coller quoi (récapitulatif)

| Page | Indexée? | Blocs |
|---|---|---|
| Toutes les pages (`<head>` global) | — | 1. LocalBusiness |
| `/forfaits-corporatif/` ou page pilier « Party de bureau clé en main » | Oui | 2. Service corporatif · 4. FAQPage corporatif (si la FAQ y est visible) |
| `/forfaits-mariage/` ou page pilier « Décor de mariage » | Oui | 3. Service mariage · 5. FAQPage mariage (si la FAQ y est visible) |
| `/mariage/` (après correction n° 8) | Oui | 3. Cabine photo |
| `/realisations/[slug]/` | Oui | 6. Article |
| `/corporatif/...`, `/mariage/...`, `/evenement-prive/` | Non (noindex) | Aucun bloc supplémentaire (le LocalBusiness global suffit) |
| `/soumission/` | Oui | Aucun bloc supplémentaire |

**Contrôle mensuel (5 min, ADJ ou WEB) :** la note et le nombre d'avis du schéma (si activé), de la fiche Google, de llms.txt et du bandeau de preuve des pages sont-ils identiques? Les prix du schéma sont-ils encore ceux du site?
