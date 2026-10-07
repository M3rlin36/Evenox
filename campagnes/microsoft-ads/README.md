# Microsoft Ads : import des campagnes Google (Evenox)

**Budget total : 20 $/jour (environ 600 $/mois).**

Ce canal sert à deux choses :

1. Capter la recherche Bing et Edge sur les postes de travail corporatifs, où Windows et Edge sont souvent imposés.
2. Ajuster les enchères à la hausse pour les profils LinkedIn des acheteurs d'événements.

## 1. Quelles campagnes importer

| Campagne Google | Importer ? | Budget Microsoft/jour | Raison |
|---|---|---|---|
| SRCH \| Corporatif \| FR | Oui | 14 $ | Le public Bing est surtout des PC de bureau, donc des employeurs. C'est là que le ciblage LinkedIn rapporte le plus |
| SRCH \| Mariage & privé haut de gamme \| FR | Oui | 4 $ | Faible volume. Garder seulement les groupes Déco, Chapiteau et Événement privé ; mettre les autres en veille si le budget est épuisé avant 15 h |
| SRCH \| Marque \| FR | Oui | 2 $ | CPC très bas. Protège la marque contre les concurrents |

Total : 20 $/jour. Ne pas dépasser avant 60 jours de données.

## 2. Procédure d'import

1. Microsoft Advertising > **Importer > Importer depuis Google Ads**. Connectez le compte Google, puis sélectionnez les 3 campagnes `SRCH | ...`.
2. Options d'import :
   - **Budgets :** ne pas importer tels quels. Après l'import, inscrire 14 $, 4 $ et 2 $ (les budgets Google sont 5 à 10 fois trop élevés pour Bing).
   - **Enchères :** importer telles quelles. « Maximiser les conversions » devient « Maximiser les conversions » de Microsoft. Si le compte n'a pas encore de conversions, commencer en **CPC amélioré** avec un CPC max de 3 $ (Corporatif), 2 $ (Mariage) et 1 $ (Marque). Passer à « Maximiser les conversions » après 15 conversions en 30 jours.
   - **Ciblage géographique :** importer. Vérifier ensuite l'option « Personnes **dans** vos zones ciblées », car l'import peut basculer vers « dans ou intéressées par ».
   - **Mots clés négatifs et listes partagées :** importer.
   - **Annonces RSA, liens annexes, accroches et extraits :** importer.
   - **Pages de destination :** importer. Ajouter un suffixe d'URL **par campagne**, selon la convention de `operations/tracking-setup.md` (section 7) : `utm_source=bing&utm_medium=cpc&utm_campaign=msft_corpo` (Corporatif), `msft_mariage` (Mariage) ou `msft_marque` (Marque), plus `&utm_term={keyword}`. Ne pas utiliser `{CampaignName}` : il produirait « SRCH | Corporatif | FR », avec espaces et barres verticales. Activer aussi l'auto-tagging MSCLKID.
   - **Import planifié :** **désactivé**. Les budgets et les ajustements LinkedIn sont propres à Microsoft et seraient écrasés.
3. **Langue :** vérifier que chaque groupe d'annonces est en **français**. Microsoft fixe la langue au niveau de l'annonce ou du groupe. Une annonce marquée anglais ne sert pas aux utilisateurs dont la langue est le français.
4. **Réseau :** choisir « Réseau de recherche Bing, AOL et Yahoo : **réseau détenu et exploité uniquement** » pour les 30 premiers jours. Exclure les **partenaires de syndication** et le **Microsoft Audience Network**, qui sont activés par défaut à l'import. Les réévaluer après 30 jours.
5. **Suivi :**
   - Installer la **balise UET** avec le mode de consentement : `uetq.push('consent','default',{ad_storage:'denied'})`, puis passer à `granted` après le consentement, conformément à la Loi 25.
   - Créer les objectifs suivants (mêmes noms que dans `operations/tracking-setup.md`, section 5) :
     - `lead_qualifie` (formulaire, routes A et B) : **principal**
     - `lead_tous` et `click_tel` : secondaires
     - Appel de 60 s et plus, via le suivi d'appels si disponible : secondaire
   - Importer les conversions hors ligne `depot_paye` (MSCLKID) chaque semaine.

## 3. Ciblage par profil LinkedIn (ajustements d'enchères)

Paramètre : Groupe d'annonces ou campagne > **Audiences > Profil LinkedIn**. Mode **« Enchère seulement » (Bid only)**, jamais « Cibler et enchérir », sinon le volume s'effondre.
S'applique aux campagnes **Corporatif** (principal) et **Marque**. Ne s'applique pas à Mariage, puisque ces clients sont des particuliers.

### Fonction (Job function)

| Fonction LinkedIn | Ajustement | Persona Evenox |
|---|---|---|
| Ressources humaines (Human Resources) | **+50 %** | Responsable RH, culture et rétention : party des Fêtes, 5 à 7 |
| Administration (Administrative) | **+50 %** | Adjointe de direction, office manager : organisateur réel du party de bureau |
| Marketing | **+35 %** | Lancement, activation de marque, gala |
| Médias et communication (Media and Communication) | **+35 %** | Événements corporatifs et relations publiques |
| Ventes (Sales) | +15 % | Événements clients, activations |
| Opérations (Operations) | +10 % | Gestion des installations, bureaux |
| Éducation, Recherche, Militaire | −30 % | Faible valeur ou appels d'offres |

> LinkedIn n'a pas de fonction « Événements ». Les planificateurs d'événements sont classés surtout sous *Marketing*, *Media and Communication* ou *Administrative*. Les ajustements ci-dessus les couvrent.

### Secteur de l'entreprise (Company industry)

| Secteur | Ajustement |
|---|---|
| Services financiers, banques, assurances | **+40 %** (profil des clients actuels RBC, Desjardins) |
| Comptabilité, services-conseils, droit | **+40 %** (profil PwC) |
| Technologies de l'information, logiciels | +25 % |
| Pharmaceutique, santé (côté corporatif) | +20 % |
| Commerce de détail, biens de consommation | +20 % (activations) |
| Construction, immobilier | +15 % |

### Taille d'entreprise (Company size)

| Taille | Ajustement |
|---|---|
| 201 à 10 000+ employés | **+30 %** |
| 51 à 200 | +15 % |
| 1 à 10 | −20 % (souvent des particuliers ou de petits budgets) |

> Les ajustements se cumulent. Plafonnez le CPC effectif en vérifiant le rapport par public après 14 jours, et réduisez de moitié tout ajustement dont le CPA dépasse 1,5 fois la moyenne.

## 4. Copilot

- Les annonces Microsoft peuvent s'afficher **dans les réponses de Microsoft Copilot** (Bing Chat et Edge). Ces annonces passent par les mêmes enchères CPC que les campagnes Search importées : il n'y a ni campagne ni ciblage distinct. Microsoft rapporte un CTR de +73 % et une conversion de +16 % sur Copilot (chiffres de Microsoft, nov. 2024 à mai 2025, non vérifiés de façon indépendante).
- Au Canada, la diffusion dans Copilot est **active** : toutes les campagnes admissibles y sont inscrites automatiquement, sans possibilité de s'en retirer (Microsoft Learn, voir recherche/factcheck.md n° 8a). Microsoft ne fournit pas de rapport Copilot distinct. À faire :
  - **ajouter une composante de logo** (ou accepter le logo automatique de l'entreprise) : sans logo, les annonces Search ne sont pas admissibles à Copilot ;
  - les RSA doivent avoir des titres autonomes et des liens annexes complets, car Copilot réutilise les composants d'annonce ;
  - les pages de destination doivent être indexées dans **Bing Webmaster Tools** (IndexNow), et l'entreprise inscrite dans **Bing Places**. Copilot et ChatGPT s'appuient sur l'index Bing ;
  - juger Copilot avec les résultats globaux de la campagne (leads qualifiés dans le CRM) : les segments « Réseau » ou « Placement » ne l'isolent pas de façon fiable.
- N'activez pas « Performance Max » de Microsoft pour l'instant. À 20 $/jour, le budget est trop faible pour l'apprentissage.

## 5. Règles d'optimisation

- **Jour 14 :**
  - ajouter les négatifs tirés du rapport des termes de recherche (Bing élargit davantage que Google) ;
  - exclure les sites de syndication s'ils ont été activés.
- **Jour 30 :**
  - si le CPA Corporatif Microsoft est inférieur ou égal à 0,8 fois le CPA Google, retirer 5 $/jour du Mariage Microsoft et les ajouter au Corporatif Microsoft ;
  - si aucune soumission qualifiée n'est arrivée après 600 $ dépensés, réduire à la campagne Marque seulement.
