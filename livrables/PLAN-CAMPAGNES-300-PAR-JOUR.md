# Évenox — Plan Google Ads à 300 $/jour (v3)

*Version 3 du 7 octobre 2026. Le plan s'appuie sur environ 1 060 sources. Deux relectures critiques et une vérification en direct de chaque prix et de chaque promesse sur evenox.ca ont corrigé les versions précédentes. Les données de ton compte Google Ads ne sont pas encore intégrées : je n'ai pas encore l'accès.*

---

## 1. La décision en une phrase

On lance **3 campagnes Search en français**, toutes importées **en pause** :
- Marque
- Corporatif & Fêtes
- Événements privés

On les active seulement quand un faux lead apparaît dans Google Ads. Au départ, les enchères sont en **Max. clics avec un CPC plafonné**, et on passe en Max. conversions dès 15 conversions sur 30 jours. Les annonces affichent **les prix réels du site, relevés aujourd'hui**.

**À quoi s'attendre.** Le budget total est plafonné à 300 $/jour. Mais le volume de recherche pour tes services est petit au Québec, donc **Search dépensera probablement de 40 à 120 $/jour**, avec un sommet en novembre. Cela représente environ **15 à 50 leads par mois**. Le reste du budget sert aux leviers de la section 7, dans l'ordre, à mesure que le tracking prouve qu'il fonctionne. On ne force jamais la dépense avec de la requête large.

---

## 2. Les campagnes

| # | Campagne | Au lancement | Budget plafond/jour | CPC max. | Groupes d'annonces (URL) |
|---|---|---|---|---|---|
| 1 | **S-FR \| Marque** | À activer | 10 $ | 2,50 $ | Marque Évenox (accueil) |
| 2 | **S-FR \| Corporatif & Fêtes** | À activer | 170 $ | 4,00 $ | Fête de Noël d'entreprise (/forfaits-corporatif/) · Team building (/team-building-activitecorpo/) · Photobooth corporatif (/location-photobooth-montreal/) · Lettres lumineuses corporatif (/forfaits-corporatif/) |
| 3 | **S-FR \| Événements privés** | À activer | 120 $ | 3,00 $ | Lettres lumineuses · Lettres lumineuses mariage · Photobooth · Photobooth mariage · Vidéobooth 360 (/photobooth-360/) · Décor mariage (/forfaits-mariage/) |
| 4 | S-EN \| Corporate Montréal | Reste en pause | 30 $ | 5,00 $ | Holiday party · Photo booth · Marquee letters |

**Prêt à importer** (`livrables/google-ads-editor/`, mode d'emploi dans `IMPORT-GOOGLE-ADS-EDITOR.md`) :
- 4 campagnes, 14 groupes d'annonces et 122 mots-clés (expression et exact).
- 14 annonces responsives de 15 titres et 4 descriptions chacune.
- 588 négatifs.
- 6 liens annexes et 8 accroches **propres à chaque campagne** (pas d'arguments corporatifs dans Événements privés).
- Toutes les URL se terminent par « / » : sans la barre oblique, WordPress redirige et **efface le GCLID** (vérifié).

Le script `scripts/build_google_ads.py` contrôle automatiquement :
- les limites de caractères ;
- les règles de marque : pas de %, ni de « à partir de », ni de « dès XX $ » ;
- les majuscules excessives ;
- que **chaque montant en $ existe sur le site** ;
- la barre oblique finale de chaque URL ;
- qu'aucun négatif ne bloque un mot-clé : **0 conflit**.

### Les prix dans les annonces (relevés sur evenox.ca le 7 octobre 2026)

| Offre | Prix | Page |
|---|---|---|
| 5 à 7 d'équipe / Party de Bureau / Gala Signature | 1 195 $ / 1 995 $ / 2 495 $ | /forfaits-corporatif/ |
| Décor WOW / Soirée Signature / Mariage Signature (« prix complet ») | 899 $ / 1 449 $ / 1 899 $ | /forfaits-mariage/ |
| Vidéobooth 360 Essentiel / Signature / Prestige | 799 $ / 1 099 $ / 1 499 $ | /photobooth-360/ |
| Photobooth Essentiel 2 h / Signature 3 h / Prestige 4 h | 599 $ / 799 $ / 999 $ | /location-photobooth-montreal |
| Duo Signature (photobooth et vidéobooth 360, 3 h) | 1 798 $ | /location-photobooth-montreal |
| Lettres : Célébration / Signature / Love / Oui | 380 $ / 500 $ / 240 $ / 210 $ | /lettres-lumineuses |
| Facturation nette 30 jours sur approbation, bon de commande | Accroches de la campagne Corporatif seulement | /faq/ |

**Si un prix change sur le site**, il suffit d'inscrire l'ancien et le nouveau dans `PRIX` en haut du script, puis de le relancer. Les annonces se régénèrent en une commande.

**Ce qui a été retiré des annonces**, parce que le site ne le confirme pas :
- « Québec et Lévis » ;
- « Surclassement offert », « Accessoire bonus » et « Livraison aux forfaits » ;
- les forfaits lounge (850 / 1 100 / 1 400 / 2 900 $), qui n'existent pas sur le site ;
- les noms Iconic et Legend ;
- « Photobooth avec préposé » à côté du Party de Bureau (seul le Gala Signature l'inclut) ;
- l'installation sur les lettres Love et Oui (seuls Célébration et Signature sont installés) ;
- les mots-clés « mur floral » (à 200 $, ils ne correspondent pas à un forfait de 899 $).

### Pourquoi la campagne EN reste en pause
L'article 58 de la Charte de la langue française exige que le français soit **nettement prédominant** dans la publicité commerciale. Une annonce 100 % anglaise au Québec est un risque : de 3 000 à 30 000 $ d'amende par infraction, chaque jour comptant comme une infraction distincte. Les pages anglaises du site sont aussi minces. Active cette campagne seulement après une validation juridique.

### Pourquoi Québec-Lévis n'est pas dans l'import
Ta livraison est tarifée jusqu'à 40 km de Sainte-Thérèse ; au-delà, c'est sur soumission (FAQ). Sans grille de transport pour Québec, on ne crée pas cette campagne.

---

## 3. Réglages à faire dans l'interface après l'import

| Réglage | Valeur | Pourquoi |
|---|---|---|
| Réseaux | Recherche Google seulement | Les partenaires et le Display amènent des leads de moindre qualité |
| Zone | **Rayon de 40 km autour de Sainte-Thérèse**, option **Présence** (« Personnes se trouvant dans vos zones ») | C'est ta zone de livraison réelle ; le réglage par défaut gaspille du budget hors zone |
| AI Max | **OFF** : correspondance des termes, personnalisation du texte et expansion d'URL | CPA +16 % en médiane (étude SMEC) ; risque de textes non conformes |
| Éléments créés automatiquement | **OFF** au niveau compte et campagne | Ils ont fait passer des campagnes vers AI Max en septembre ; tes anciennes annonces affichaient « Learn more \| » |
| Recommandations appliquées automatiquement | **Toutes OFF** | Évite les hausses de budget et le passage en requête large |
| Conversions principales | « Demande de soumission » + « Appels depuis les annonces (60 s et plus) » ; **toutes les autres en secondaire**, y compris celles de l'ancien compte | Un seul ensemble propre ; l'appel ne dépend pas des témoins |
| Calendrier | Annonces 24/7 ; élément d'appel seulement aux heures où quelqu'un répond | Un appel manqué est un lead perdu |
| Élément de lieu | Lier la fiche Google Business Profile | Note 4,8/5 et adresse dans l'annonce |
| Éléments de prix | Forfaits corporatifs, photobooth et lettres, **qualificatif : aucun** | Filtrer les petits budgets sans « à partir de » |

---

## 4. Avant d'activer : les bloquants

| # | Bloquant | Qui | Délai |
|---|---|---|---|
| 1 | **Choisir UN compte Google Ads** (AW-16529262834 ou AW-16776285171) et UN GA4 ; retirer l'autre balise | Toi (ou moi avec l'accès) | Jour 1 |
| 2 | **Bannière Loi 25** : CookieYes ou Complianz, en français, boutons Accepter et Refuser de même apparence, mode consentement en basic. Retirer le pixel OpenAI. Voir `GUIDE-TRACKING-LOI25.md` | Pigiste | Jours 1 et 2 |
| 3 | **Conversion « Demande de soumission »** : GTM, envoi réussi, comptage « Une seule », principale, conversions avancées ON, champs cachés GCLID, GBRAID et WBRAID. **Test : 1 faux lead visible dans Google Ads** | Pigiste | Jours 1 à 3 |
| 4 | **Conversion « Appels depuis les annonces »** (60 s et plus), avec un élément d'appel | Pigiste | Jour 3 |
| 5 | **Formulaire qui filtre** : type d'événement, date, ville, invités, budget par paliers ; adresse de salle facultative ; reCAPTCHA. Voir `pages/formulaire-soumission.md` | Pigiste | Jours 2 à 4 |
| 6 | **Retirer « dès 70 $ », « Dès 599 $ » et « À partir de »** des titres et des pages du site (/lettres-lumineuses, /location-photobooth-montreal, /mariage, /forfaits-mariage, /forfaits-photobooth, /nos-forfaits-tout-inclus, /team-building-activitecorpo), ainsi que de WeddingWire. Harmoniser aussi la livraison (la page mariage parle de « prix complet », les autres de « livraison en sus ») et le vidéobooth 360 (« Découverte 599 $ » sur /location-photobooth-montreal, absent de /photobooth-360/ qui commence à 799 $) | Toi | Jour 2 |
| 7 | **Réponse en moins de 2 h ouvrables** et statut noté dans Notion. Voir `SCRIPTS-LEADS.md` | Toi | Dès l'activation |

**Activation visée : mercredi 14 octobre** (lundi 12 octobre, c'est l'Action de grâce). Chaque semaine de retard coûte une part de la fenêtre des fêtes d'entreprise : les recherches « party de bureau » atteignent leur sommet en novembre et décembre.

**Dans les 30 jours, sans bloquer le lancement :**
- Pages dédiées, à partir de `pages/page-fete-noel-entreprise.md` et `pages/page-lettres-lumineuses.md`.
- Import hebdomadaire des leads qualifiés et des réservations.
- Validation juridique de la campagne anglaise.

---

## 5. Enchères : le chemin

| Étape | Déclencheur | Stratégie |
|---|---|---|
| Lancement | Activation | **Max. clics**, CPC max. 4 $ (Corporatif), 3 $ (Privés), 2,50 $ (Marque) |
| Apprentissage | 15 conversions ou plus sur 30 jours dans une campagne | **Max. conversions**, sans cible |
| Efficacité | 30 conversions ou plus sur 30 jours | **CPA cible** = CPA des 30 derniers jours + 10 %, puis -10 % toutes les 2 à 3 semaines |
| Qualité | 15 leads qualifiés ou plus par mois importés avec GCLID | « Lead qualifié » devient la conversion principale ; le formulaire passe en secondaire |
| Valeur | 30 conversions avec valeur ou plus sur 30 jours | Max. valeur de conversion, puis ROAS cible |

**Pourquoi pas Max. conversions dès le jour 1 :**
- Il n'y a aucun historique fiable de conversions.
- Le mode consentement basic cache une partie des leads.
- L'inventaire de recherche est petit. Max. conversions monterait les enchères pour dépenser le budget.

**Coupe-circuit :** si le CPC dépasse 2 fois la référence pendant 7 jours, ou si un lead qualifié coûte plus de 150 $ pendant 14 jours, on revient à l'étape précédente.

---

## 6. Routine des 30 premiers jours

| Quand | Action | Durée |
|---|---|---|
| Chaque jour (semaines 1 et 2) | Rapport « Termes de recherche » : tout terme hors sujet devient un négatif d'expression | 10 min |
| Chaque jour | Rappeler chaque lead en moins de 2 h ; statut et source dans Notion | — |
| Lundi | Coût, clics, CPC, conversions par campagne ; part d'impressions perdue (budget et classement) | 15 min |
| Vendredi | Exporter les leads A, B et C qui ont un GCLID, puis les importer comme « Lead qualifié » | 10 min |
| Lundi | Vérifier que les prix du site n'ont pas changé (ce sont des « prix de lancement ») ; sinon, mettre à jour `PRIX` et régénérer | 5 min |
| Jour 30 | Bilan : coût par lead qualifié et par contrat ; je recalcule les cibles | 1 h avec moi |

---

## 7. Où va le reste du budget (dans l'ordre, seulement si les conditions sont remplies)

| Levier | Condition | Budget | Règle d'arrêt |
|---|---|---|---|
| 1. Hausse des CPC max. sur les mots-clés rentables | Part d'impressions perdue (classement) > 30 % et CPA dans la cible | +20 %/semaine | CPA +25 % |
| 2. Demand Gen en prospection (segments basés sur des recherches Google : « party de bureau », « mariage 2027 ») | Conversions vérifiées depuis 3 semaines | 40 à 60 $/jour | 0 lead qualifié après 1 500 $ |
| 3. Microsoft Ads (import de la campagne Google) | Après 30 jours de Search stable | 15 à 20 $/jour | CPA > 1,5 fois Google |
| 4. Demand Gen remarketing (visiteurs du site) | Bannière Loi 25 en ligne depuis 3 semaines et au moins 100 visiteurs consentants. La liste clients ne sert qu'en exclusion tant que le compte n'a pas dépensé plus de 50 000 $ US au total (règle de Google), et son envoi demande un avis juridique (Loi 25) | 20 à 40 $/jour | 0 lead qualifié après 1 000 $ |
| 5. Réserve pour janvier à mars (saison des réservations de mariages) | — | Le non-dépensé | — |

---

Le détail des leviers 2 à 4 (audiences, textes, visuels, réglages, étapes) est dans `LEVIERS-DEMAND-GEN-MICROSOFT.md`.

## 8. Calendrier des plafonds (la dépense réelle suivra la demande)

| Période | Marque | Corporatif | Privés | Total plafond |
|---|---|---|---|---|
| 14 oct. au 15 déc. | 10 | 170 | 120 | 300 |
| 16 déc. au 4 janv. | 10 | 60 | 160 | 230 |
| 5 janv. au 31 mars | 10 | 90 | 200 | 300 |
| Avr. à août 2027 | 10 | 110 | 180 | 300 |
| Dès le 15 août 2027 | 10 | +20 %/semaine | — | Relance de la saison des fêtes |

Le corporatif reste au maximum jusqu'au 15 décembre, puisque c'est le sommet des recherches « party de noël ». Ensuite, la place va aux mariages : en janvier, on réserve l'été. On réduit sans couper : une campagne coupée met environ 23 jours à repartir, contre 4 si on l'a seulement réduite.

---

## 9. Ce qu'on n'active pas (et quand on le fera)

| Outil | Pourquoi pas maintenant | Condition |
|---|---|---|
| Performance Max | En génération de leads, Search bat PMax sur le taux de conversion dans 84 % des cas (Adalysis, déc. 2024) ; sans données de ventes, PMax attire du spam | ≥ 50 conversions/mois, import des leads qualifiés depuis 30 jours ou plus, exclusion de marque, expansion d'URL OFF |
| Requête large et AI Max | Petit compte local ; CPA +16 % en médiane | Test 50/50 en janvier, conservé si CPA ≤ +10 % |
| Mobilier lounge | Aucune page ni aucun forfait lounge sur le site | Quand une page lounge avec prix existera |
| Chapiteaux | Hors saison (0 recherche d'octobre à décembre) | Campagne printanière en mars, à partir de ta grille 300 à 1 000 $ |
| Annonces Appel seulement | Google les arrête en février 2027 | Jamais : éléments d'appel à la place |

---

## 10. Ce que j'attends de toi (dans l'ordre)

1. **L'accès au compte Google Ads**, par Supermetrics ou par exports depuis le 1er janvier 2024. Je tranche quel compte garder et je remplace les estimations par tes vrais volumes.
2. **Le feu vert pour les prix du site** utilisés dans les annonces (section 2). S'ils vont changer, dis-le-moi et je régénère.
3. **Qui fait le tracking et la bannière** : toi ou un pigiste.
4. **L'activation visée le 14 octobre.**
