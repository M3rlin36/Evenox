# Page d'atterrissage : Location de lettres lumineuses 4 pi

*Version du 7 octobre 2026. Copie finale en français du Québec, prête à intégrer dans Divi. Une seule page pour deux publics (entreprises et mariages), avec des blocs qui parlent à chacun.*

- **URL proposée :** `evenox.ca/location-lettres-lumineuses` (remplace `/configurateur` comme URL finale des groupes « Lettres lumineuses », « Lettres lumineuses corporatif » et « Lettres lumineuses mariage »).
- **Option :** deux ancres pour les deux groupes ciblés, `#entreprises` et `#mariages`, ou deux copies de la page plus tard si le volume le justifie (`/lettres-lumineuses-mariage`).
- **Mots-clés visés :** location lettres lumineuses, lettres géantes lumineuses, marquee letters location, lettres LOVE lumineuses, lettres lumineuses mariage, lettres lumineuses entreprise.
- **Annonces correspondantes :** titres épinglés « Location lettres lumineuses », « Lettres lumineuses 4 pi », « Lettres lumineuses mariage ».
- **Page de remerciement :** `evenox.ca/merci-lettres` (exclue de l'indexation).
- **Formulaire :** version Lettres du formulaire partagé (`formulaire-soumission.md`).

---

## Variables à remplacer avant la mise en ligne

Le configurateur actuel affiche « lettres dès 70 $ » : **à retirer**, car cela contredit le positionnement premium et la règle de marque. Les annonces n'affichent aucun prix de lettre pour l'instant ; une fois le prix choisi, l'ajouter aussi en titre d'annonce (ex. « Lettres 4 pi : 4 lettres X $ »).

| Variable | Contenu | Statut |
|---|---|---|
| `{{PRIX_LETTRE}}` | Prix d'une lettre ou d'un chiffre 4 pi à l'unité, livraison et installation selon seuil | À CONFIRMER |
| `{{PRIX_PACK_INITIALES}}` | Forfait « Initiales » (3 caractères, ex. A & B) | À CONFIRMER |
| `{{PRIX_PACK_LOVE}}` | Forfait « LOVE » ou mot de 4 caractères | À CONFIRMER |
| `{{PRIX_PACK_NOM}}` | Forfait « Votre nom en lumière » (jusqu'à `{{NB_LETTRES_PACK_NOM}}` caractères) | À CONFIRMER |
| `{{NB_LETTRES_PACK_NOM}}` | Nombre de caractères du forfait 3 | À CONFIRMER |
| `{{PRIX_LOUNGE}}` / `{{PRIX_PHOTOBOOTH_SIGNATURE}}` | Pour la ligne « Ajoutez un coin lounge ou un photobooth » | Grille unique à choisir (voir page Noël) |
| `{{HAUTEUR}}` | 4 pi (environ 122 cm) | Confirmé par le positionnement ; mesure exacte À CONFIRMER |
| `{{LARGEUR_LETTRE}}` | Largeur moyenne d'une lettre | À CONFIRMER |
| `{{ECLAIRAGE}}` | LED : ampoules apparentes style marquee ou LED intégrées ; blanc chaud ; gradation possible ? | À CONFIRMER |
| `{{NB_LETTRES_MAX}}` | Nombre maximal de caractères disponibles pour un même événement | À CONFIRMER |
| `{{CARACTERES_DISPONIBLES}}` | Alphabet complet ? Doublons de lettres ? Chiffres 0 à 9 ? Symboles « & » et cœur ? | À CONFIRMER |
| `{{LOGO_SUR_MESURE}}` | Reproduction d'un logo (pièce sur mesure, délai, coût) ou seulement les lettres du nom | À CONFIRMER |
| `{{ALIMENTATION}}` | Prise standard 120 V, nombre de prises, rallonges fournies | À CONFIRMER |
| `{{USAGE_EXTERIEUR}}` | Usage extérieur permis ? Sous abri seulement ? | À CONFIRMER |
| `{{POIDS_LETTRE}}` | Poids approximatif par lettre (accès, ascenseur, scène) | À CONFIRMER |
| `{{SEUIL_LIVRAISON_INCLUSE}}` | Montant au-delà duquel livraison, installation et reprise sont incluses | À harmoniser (site : 200 $ ou 300 $) |
| `{{SURCLASSEMENT_OFFERT}}` | Surclassement offert et sa condition (ex. 1 caractère supplémentaire offert avec le forfait « Votre nom en lumière ») | À définir |
| `{{ACCESSOIRE_BONUS}}` | Accessoire bonus (ex. symbole cœur ou « & » offert) | À définir |
| `{{DATE_LIMITE_INCITATIF}}` | Date de fin de l'incitatif | À définir |
| `{{DELAI_MIN_JOURS}}`, `{{TELEPHONE}}`, `{{HEURES_OUVRABLES}}`, `{{CONDITIONS_NET30}}`, `{{AVIS_1}}` à `{{AVIS_3}}`, `{{NOM_COORDONNATEUR}}` | Comme sur la page Noël | — |

Tous les prix s'affichent **avant taxes**, au format « 1 495 $ ».

---

## 1. SEO

**Titre SEO (44 caractères) :**
Location de lettres lumineuses 4 pi | Évenox

**Méta-description (150 caractères) :**
Lettres lumineuses géantes de 4 pi pour mariages et événements d'entreprise : initiales, LOVE, chiffres ou nom. Livrées et installées. Réponse en 2 h.

*(Longueurs vérifiées par script Python : voir la fin du document.)*

---

## 2. Section héros

**H1 :**
Location de lettres lumineuses 4 pi

**Sous-titre :**
Vos initiales, LOVE, le nom de votre entreprise ou l'année, en lettres géantes de 4 pi. Livrées, installées et reprises par notre équipe, pour un décor qui ressort sur toutes les photos.

**Bouton principal :**
Vérifier ma date

**3 puces :**
- Lettres et chiffres de 4 pi de haut, éclairage LED chaleureux
- Prix affiché par forfait, sans frais cachés
- Livraison, installation et reprise par notre équipe

**Ligne de preuve sous le bouton :**
★ 4,8/5 sur Google (52 avis) · Plus de 1 000 événements depuis 2022 · Réponse en moins de 2 h ouvrables

**Ligne d'urgence (bandeau, texte selon la saison) :**
- *D'octobre à novembre :* Fêtes de fin d'année : les vendredis de décembre (4, 11 et 18) sont les premières dates réservées. Vérifiez la vôtre.
- *De décembre à mai :* Mariages 2027 : les samedis d'été partent en premier. Vérifiez la disponibilité de votre date.

*(Phrases vraies sans chiffre inventé. Si une date est complète, le dire précisément ; sinon, ne rien ajouter.)*

**Visuel :** vraie photo Évenox, lettres allumées en situation, avec des personnes. Rotation possible : une photo de mariage (initiales ou LOVE) et une photo corporative (nom d'entreprise). Pas de carrousel automatique : une image fixe, la deuxième plus bas.

**Sélecteur de public (2 boutons secondaires, discrets, sous les puces) :**
Pour une entreprise ↓ · Pour un mariage ↓
*(Ancres `#entreprises` et `#mariages`. Ce ne sont pas des appels à l'action concurrents : ils font défiler la page.)*

---

## 3. Bande de confiance

**Version avec autorisations écrites :**
Ils ont mis leur nom en lumière avec nous
`[BLOC LOGOS : RBC · PwC · Desjardins · Polytechnique Montréal · Familiprix · Ville de Candiac — afficher seulement les logos autorisés par écrit]`

**Version de repli (par défaut) :**
Des entreprises de la finance, de l'éducation et du secteur public nous font confiance.

---

## 4. Section « 3 forfaits lettres lumineuses »

**H2 :** Trois forfaits, un prix clair
**Intro :** Chaque forfait comprend la livraison, l'installation, le branchement et la reprise des lettres par notre équipe.

### Forfait 1 : Initiales
**`{{PRIX_PACK_INITIALES}}` $**
*3 caractères de 4 pi*
- Vos initiales et un symbole, par exemple « A & J »
- Idéal pour un mariage, des fiançailles ou un point photo
- Livraison, installation et reprise

### Forfait 2 : LOVE *(étiquette : Le classique des mariages)*
**`{{PRIX_PACK_LOVE}}` $**
*4 caractères de 4 pi*
- LOVE, un mot de 4 lettres ou une année, comme « 2027 »
- Parfait derrière la table d'honneur ou sur la piste de danse
- Livraison, installation et reprise
- **Accessoire bonus offert : `{{ACCESSOIRE_BONUS}}`**

### Forfait 3 : Votre nom en lumière *(étiquette : Pour les entreprises)*
**`{{PRIX_PACK_NOM}}` $**
*Jusqu'à `{{NB_LETTRES_PACK_NOM}}` caractères de 4 pi*
- Le nom de votre entreprise, de votre marque ou de votre événement
- Galas, lancements, congrès, fêtes de fin d'année
- Livraison, installation et reprise
- **Surclassement offert : `{{SURCLASSEMENT_OFFERT}}`**

**Ligne sous les forfaits :**
Caractère supplémentaire : `{{PRIX_LETTRE}}` $. Prix avant taxes. Livraison, installation et reprise incluses pour toute commande de `{{SEUIL_LIVRAISON_INCLUSE}}` $ et plus dans notre zone principale. Offres valides pour les réservations confirmées avant le `{{DATE_LIMITE_INCITATIF}}`.

**Ligne de vente croisée :**
Complétez l'ambiance : coin lounge (`{{PRIX_LOUNGE}}` $) ou photobooth Signature (`{{PRIX_PHOTOBOOTH_SIGNATURE}}` $). Indiquez-le dans le formulaire ; nous l'ajouterons à votre soumission.

**Bouton :** Vérifier ma date

---

## 5. Caractéristiques techniques

**H2 :** Les lettres en détail

| Caractéristique | Détail |
|---|---|
| Hauteur | 4 pi (environ 122 cm) `{{À CONFIRMER : mesure exacte}}` |
| Largeur moyenne d'une lettre | `{{À CONFIRMER}}` |
| Éclairage | LED, blanc chaud `{{À CONFIRMER : ampoules apparentes ou LED intégrées, gradation}}` |
| Caractères offerts | `{{À CONFIRMER : alphabet complet, chiffres 0 à 9, « & », cœur}}` |
| Nombre maximal de caractères par événement | `{{À CONFIRMER}}` |
| Logo | `{{À CONFIRMER : pièce sur mesure ou lettres du nom seulement}}` |
| Alimentation | `{{À CONFIRMER : prise standard 120 V, nombre de prises}}` |
| Intérieur ou extérieur | `{{À CONFIRMER}}` |
| Poids approximatif | `{{À CONFIRMER}}` |
| Installation | Par notre équipe, avant l'arrivée de vos invités ; reprise après l'événement |

**Ligne sous le tableau :**
Une contrainte particulière (scène, escalier, salle patrimoniale) ? Précisez-la dans le formulaire : nous planifions l'installation avec votre lieu.

---

## 6. Deux publics, deux blocs

### Bloc entreprises (ancre `#entreprises`)
**H2 :** Votre marque en lumière
**Texte :** Un nom en lettres de 4 pi transforme une salle de congrès ou un hall de réception en décor de marque. Vos invités le photographient, le partagent, et votre événement se reconnaît au premier coup d'œil.
- Galas, lancements de produit, congrès, fêtes de fin d'année
- Facturation net 30 pour les entreprises
- Installation en semaine, en soirée ou tôt le matin, selon votre horaire

### Bloc mariages (ancre `#mariages`)
**H2 :** Vos initiales en lumière
**Texte :** Derrière la table d'honneur, à l'entrée ou sur la piste de danse, vos initiales ou LOVE en lettres de 4 pi signent votre décor et embellissent chacune de vos photos.
- Initiales, LOVE, MR & MRS, la date de votre mariage
- Installation avant la cérémonie, reprise après la soirée : vous n'avez rien à gérer
- Coordination directe avec votre salle

**Bouton (sous les deux blocs) :** Vérifier ma date

---

## 7. Galerie : idées d'utilisation (légendes)

**H2 :** Des idées pour votre événement

*(8 photos réelles Évenox, carrées, 800 px, WebP. Légendes exactes ci-dessous ; remplacer par les vraies réalisations disponibles. Ne pas présenter une photo comme celle d'un client précis sans son accord.)*

1. **Initiales de mariage** · « A & J » derrière la table d'honneur, pour des photos de couple inoubliables.
2. **LOVE sur la piste de danse** · Le classique qui illumine la première danse.
3. **MR & MRS** · Un point photo élégant dès l'entrée de la réception.
4. **Nom d'entreprise au gala** · Votre marque en grand, à côté de la scène.
5. **Lancement de produit** · Le nom du produit en lumière pour les photos des médias et des invités.
6. **Fête de fin d'année** · « NOËL » ou l'année à venir, au cœur de la réception des Fêtes.
7. **Anniversaire marquant** · « 50 » ou « 40 ans » en chiffres géants pour une fête qui se souvient.
8. **Finissants et remises de diplômes** · L'année de promotion en lumière, un décor de photo tout trouvé.

**Texte sous la galerie :**
Vous avez une autre idée ? Écrivez votre texte dans le formulaire : nous vérifions les caractères disponibles pour votre date.

---

## 8. Section « Comment ça marche »

**H2 :** Vos lettres en 4 étapes

1. **Vous écrivez votre texte**
   Initiales, mot, nom ou chiffres, avec votre date et votre ville : deux minutes en ligne.
2. **Nous vérifions les caractères disponibles**
   Un membre de notre équipe vous répond en moins de 2 h ouvrables et vous envoie une soumission détaillée en 24 h.
3. **Vous confirmez avec un dépôt de 20 %**
   Votre date et vos lettres sont réservées. Les entreprises admissibles paient le solde net 30.
4. **Nous livrons, installons et reprenons**
   Les lettres sont installées et allumées avant vos invités, puis reprises après l'événement.

**Bouton :** Vérifier ma date

---

## 9. Section preuve

**H2 :** Plus de 1 000 événements réalisés depuis 2022

**Chiffres :**
- **4,8/5** · note Google, 52 avis
- **1 000+** · événements réalisés depuis 2022
- **4 pi** · de hauteur, visibles de partout dans la salle

**Avis Google (3 cartes) :**
`[AVIS GOOGLE 1 : {{AVIS_1}} — texte mot pour mot, prénom et initiale, mois et année, lien. Priorité : un avis de mariage qui mentionne les lettres.]`
`[AVIS GOOGLE 2 : {{AVIS_2}} — priorité : un avis d'entreprise ou de gala.]`
`[AVIS GOOGLE 3 : {{AVIS_3}} — priorité : un avis qui mentionne l'installation ou la ponctualité.]`

Lien : Lire les 52 avis sur Google →

**Logos :** module global (version autorisée ou version de repli).

**Bloc coordonnateur :**
`[PHOTO {{NOM_COORDONNATEUR}}]`
« Je vérifie vos caractères, je confirme votre date et je reste votre contact jusqu'à l'installation. »
— `{{NOM_COORDONNATEUR}}`, coordination des événements, Évenox

---

## 10. Bloc « Ce n'est pas pour vous si… »

**H2 :** Nos lettres ne sont peut-être pas pour vous si…
- vous cherchez des lettres de table ou des lettres en carton : les nôtres mesurent 4 pi et sont installées par une équipe ;
- vous voulez venir chercher les lettres et les installer vous-mêmes : notre [boutique en ligne](https://evenox.booqableshop.com) propose la cueillette à Sainte-Thérèse pour d'autres articles ;
- vous cherchez le prix le plus bas : nous misons sur du matériel inspecté, une installation soignée et une équipe ponctuelle ;
- votre événement a lieu dans moins de `{{DELAI_MIN_JOURS}}` jours : appelez-nous au `{{TELEPHONE}}`, nous vérifierons ce qui reste possible.

**Conclusion :** Si vous voulez un décor qui impressionne, sans rien gérer, vous êtes au bon endroit.

---

## 11. FAQ

**H2 :** Questions fréquentes

**1. Combien de temps à l'avance devrions-nous réserver ?**
Pour un mariage un samedi d'été, réservez de 6 à 12 mois à l'avance : ce sont les dates les plus demandées. Pour un événement d'entreprise, 4 à 8 semaines suffisent généralement, sauf pour les vendredis de décembre, à réserver de 8 à 12 semaines d'avance.

**2. Quel est le délai minimum pour réserver ?**
Nous acceptons les réservations jusqu'à `{{DELAI_MIN_JOURS}}` jours avant l'événement, selon la disponibilité des caractères et de l'équipe. Pour une date plus rapprochée, appelez-nous au `{{TELEPHONE}}`.

**3. Pouvons-nous écrire n'importe quel mot ?**
Presque. Le nombre de chaque lettre est limité ; un mot avec plusieurs lettres identiques dépend de notre inventaire pour votre date. Écrivez votre texte dans le formulaire : nous vous confirmons la faisabilité en moins de 2 h ouvrables. `{{À CONFIRMER : caractères et symboles offerts, logo sur mesure}}`

**4. La livraison et l'installation sont-elles comprises ?**
Oui. Notre équipe livre, place, branche et allume les lettres avant l'arrivée de vos invités, puis revient les reprendre. Pour toute commande de `{{SEUIL_LIVRAISON_INCLUSE}}` $ et plus dans notre zone principale, la livraison, l'installation et la reprise sont incluses.

**5. Offrez-vous la facturation net 30 ?**
Oui, aux entreprises et aux organismes publics : la facture finale est payable dans les 30 jours suivant l'événement (`{{CONDITIONS_NET30}}`). Votre numéro de bon de commande peut figurer sur la soumission et la facture.

**6. Faut-il verser un dépôt ?**
Un dépôt de 20 % confirme votre réservation et bloque vos lettres pour votre date. Le solde est payable selon les modalités indiquées dans votre soumission.

**7. Que se passe-t-il si nous devons annuler ?**
Vos sommes versées ne sont pas perdues : elles sont converties en crédit valable 12 mois, utilisable pour un autre événement.

**8. Quelles régions desservez-vous ?**
Depuis Sainte-Thérèse, nous desservons Laval, Montréal, la Rive-Nord (de Saint-Eustache à Repentigny) et les Laurentides, de Saint-Jérôme à Mont-Tremblant. La Rive-Sud, Québec et Lévis sont desservies sur demande, avec des frais de transport indiqués clairement dans la soumission.

**9. Notre salle n'est pas encore choisie. Est-ce un problème ?**
Non. Nous installons dans les salles de réception, hôtels, vignobles, restaurants et bureaux. L'adresse est facultative dans le formulaire ; dès que votre lieu est confirmé, nous coordonnons avec lui l'accès, l'emplacement et les prises électriques.

**10. Les lettres peuvent-elles être installées à l'extérieur ?**
`{{À CONFIRMER : réponse selon l'usage extérieur permis (ex. « Oui, sous un chapiteau ou un abri, à l'abri de la pluie. »)}}`

---

## 12. Section formulaire et appel final (ancre `#soumission`)

**H2 :** Vérifiez la disponibilité de vos lettres
**Texte :** Écrivez votre texte, votre date et votre ville. Un membre de notre équipe vous répond en moins de 2 h ouvrables avec une soumission détaillée en 24 h.

`[FORMULAIRE 4 ÉTAPES — voir section 13]`

**À côté du formulaire :**
- ★ 4,8/5 sur Google (52 avis)
- Livraison, installation et reprise par notre équipe
- Annulation : crédit valable 12 mois
- Vous préférez parler à quelqu'un ? `{{TELEPHONE}}` (`{{HEURES_OUVRABLES}}`)

**Bandeau final :**
**H2 :** Votre nom mérite d'être vu.
**Texte :** Des lettres de 4 pi, installées pour vous, sur toutes les photos de la soirée.
**Bouton :** Vérifier ma date

---

## 13. Formulaire de soumission (version Lettres)

Spécification complète, validation, Loi 25, champs cachés et notation : `formulaire-soumission.md`.

**En-tête du formulaire :** Vérifiez vos lettres en 2 minutes

| Étape | Champs (libellés exacts) | Obligatoire | Préremplissage Lettres |
|---|---|---|---|
| 1. Votre événement | Type d'événement · Date de l'événement · Ville de l'événement | Les 3 | Aucun type présélectionné. Si l'utilisateur arrive par `#mariages` ou par le groupe Mariage (`utm_content` ou `?type=mariage`), présélectionner « Mariage » ; par `#entreprises` ou `?type=corpo`, présélectionner « Gala, lancement ou soirée corporative » |
| 2. Ce dont vous avez besoin | Nombre d'invités prévu · Services souhaités · **Texte de vos lettres lumineuses** · Votre lieu · Nom ou adresse du lieu | Invités, services, lieu ; le texte des lettres est **obligatoire sur cette page** | « Lettres lumineuses 4 pi » précoché ; champ texte visible d'emblée |
| 3. Votre projet | Budget prévu pour la location · Vous êtes… · Où en êtes-vous ? · Autre précision | Budget, rôle, échéancier | Texte d'ancrage : « Nos lettres lumineuses 4 pi : `{{PRIX_LETTRE}}` $ par caractère ; forfaits de `{{PRIX_PACK_INITIALES}}` $ à `{{PRIX_PACK_NOM}}` $. » |
| 4. Vos coordonnées | Prénom · Nom · Courriel · Téléphone · Entreprise ou organisation (si corporatif) · Langue de communication préférée · Comment avez-vous connu Évenox ? · 2 cases de consentement facultatives | Comme le formulaire partagé | — |

**Microcopie propre à cette page :**
- Champ « Texte de vos lettres lumineuses » : libellé « Quel texte souhaitez-vous ? », indication « Ex. : A & J, LOVE, 2027, le nom de votre entreprise. Maximum `{{NB_LETTRES_MAX}}` caractères. » Compteur de caractères en direct. Erreur : « Indiquez le texte souhaité, même approximatif. »
- Bouton final : **Recevoir ma soumission**
- Sous le bouton : « Aucun engagement. Aucun paiement demandé à cette étape. » puis l'avis Loi 25.

**Champ caché propre à cette page :** `variante_page = lettres-v1`. Ajouter `texte_lettres` (copie du champ 2.3) et `nb_caracteres` (calculé) dans la fiche Notion.

**Note sur la notation :** les lettres seules ont un panier plus petit que les forfaits ambiance. Une demande « Mariage, lettres seulement, 500 $ à 1 000 $ » obtient environ 60 points (score B) avec la grille partagée : c'est voulu. Revoir le seuil `{{BUDGET_PLANCHER}}` quand `{{PRIX_PACK_INITIALES}}` sera fixé (le plancher doit être sous le prix du plus petit forfait).

### Page de remerciement (`/merci-lettres`)

**H1 :** Merci, {{Prénom}}. Votre demande est bien reçue.

**Texte :**
Voici la suite :
1. **D'ici 2 h ouvrables**, un membre de notre équipe vous contacte pour confirmer que les caractères de « {{Texte des lettres}} » sont disponibles le {{Date}}.
2. **D'ici 24 h**, vous recevez votre soumission détaillée, avec le prix final avant taxes.
3. **Pour bloquer votre date**, un dépôt de 20 % suffit.

Vous avez reçu un courriel de confirmation. Il n'est pas là ? Vérifiez vos courriels indésirables ou écrivez-nous à `{{COURRIEL_SOUMISSION}}`.

**Bloc secondaire :**
**H2 :** Complétez votre décor
Un coin lounge ou un photobooth s'ajoute facilement à votre soumission : mentionnez-le lors de notre appel. → `[Voir nos réalisations]({{URL_PORTFOLIO}})`

### Courriel de confirmation

**De :** Évenox `<{{COURRIEL_SOUMISSION}}>`
**Objet :** Vos lettres lumineuses du {{Date}} : demande reçue
**Texte d'aperçu :** Nous vérifions vos caractères et vous répondons en moins de 2 h ouvrables.

> Bonjour {{Prénom}},
>
> Merci pour votre demande. Voici ce que nous avons noté :
>
> - Texte des lettres : « {{Texte des lettres}} » ({{Nombre de caractères}} caractères)
> - Événement : {{Type d'événement}}
> - Date : {{Date}}
> - Ville : {{Ville}}
>
> **La suite :** nous vérifions la disponibilité de chaque caractère pour votre date et un membre de notre équipe vous contacte en moins de 2 h ouvrables. Votre soumission détaillée suivra en 24 h.
>
> **Bon à savoir :**
> - Livraison, installation et reprise par notre équipe.
> - Un dépôt de 20 % suffit pour bloquer votre date.
> - En cas d'annulation, vos sommes versées deviennent un crédit valable 12 mois.
>
> Une précision à ajouter ? Répondez simplement à ce courriel.
>
> Au plaisir de mettre votre événement en lumière,
>
> {{NOM_COORDONNATEUR}}
> Évenox · Location événementielle clé en main
> {{TELEPHONE}} · evenox.ca · Sainte-Thérèse
>
> *Vous recevez ce courriel parce que vous avez demandé une soumission sur evenox.ca. [Politique de confidentialité]({{URL_POLITIQUE_CONFIDENTIALITE}})*

---

## 14. Notes de construction Divi

**Gabarit :** même gabarit « Page d'atterrissage » que la page Noël (en-tête minimal logo + téléphone, aucun menu, pied de page réduit).

| # | Section Divi | Rangée et colonnes | Modules | Notes |
|---|---|---|---|---|
| 0 | Bandeau d'urgence | 1 colonne | Texte (module global saisonnier) | Changer le texte au 1er décembre (version mariages). |
| 1 | Héros | 2 colonnes 1/2 + 1/2 ; photo sous le H1 sur mobile | Texte (H1 `h1`), Texte (sous-titre), Texte (puces), Bouton `#soumission`, Texte (preuve), 2 liens d'ancrage texte (`#entreprises`, `#mariages`) ; Image | Image LCP en WebP, moins de 200 Ko, sans chargement différé. |
| 2 | Confiance | 1 colonne | Module global logos ou texte de repli | Identique à la page Noël. |
| 3 | Forfaits | 3 colonnes égales ; forfait 2 en premier sur mobile | Tableau de prix (Pricing Tables) ou Blurb + Texte + Bouton ×3 ; Texte (conditions et vente croisée) | Boutons vers `#soumission?forfait=initiales|love|nom` pour préremplir l'étape 2. |
| 4 | Caractéristiques | 1 colonne, largeur 900 px | Texte (tableau HTML) | Tableau lisible sur mobile (2 colonnes, texte qui passe à la ligne). Retirer les mentions À CONFIRMER une fois validées : **ne jamais publier une cellule vide ou « À confirmer »**. |
| 5 | Deux publics | 2 colonnes 1/2 + 1/2, ID `entreprises` et `mariages` sur chaque colonne (ou deux rangées) | Image + Texte + liste par colonne ; Bouton centré dessous | Photo corporative à gauche, photo de mariage à droite. |
| 6 | Galerie | 4 colonnes × 2 rangées (2 × 4 sur mobile) | Galerie (Gallery) en grille, légendes affichées, ou Image + Texte ×8 | Images 800 × 800 px WebP, chargement différé, texte alternatif descriptif en français (ex. « Lettres lumineuses A & J derrière une table d'honneur de mariage »). |
| 7 | Étapes | 4 colonnes | Blurb numéroté ×4 ; Bouton | — |
| 8 | Preuve | 3 rangées | Compteurs ×3 ; Témoignage ×3 ou widget d'avis ; logos (global) | — |
| 9 | Filtre | 1 colonne, 800 px | Texte | — |
| 10 | FAQ | 1 colonne, 800 px | Bascule ×10, fermées | Questions en texte HTML réel. |
| 11 | Formulaire `#soumission` | 2 colonnes 3/5 + 2/5 | Extension de formulaire (4 étapes) ; garanties + photo coordonnateur | Version Lettres du formulaire (champ texte obligatoire, compteur). |
| 12 | Appel final | 1 colonne centrée | Texte + Bouton | Fond : photo de lettres allumées, assombrie. |
| — | Barre collante mobile | — | Bouton « Vérifier ma date » | Masquée quand la section 11 est visible. |

**Performance, suivi, indexation :** identiques à la page Noël (CSS critique, WebP, GTM derrière la bannière Loi 25, conversion sur l'envoi réussi, page merci en `noindex`).

**Configurateur :** garder `/configurateur` pour les clients qui veulent composer seuls, mais retirer la mention « lettres dès 70 $ » et aligner son prix sur `{{PRIX_LETTRE}}`. Les annonces pointent vers la nouvelle page, pas vers le configurateur.

**Après la mise en ligne :** remplacer l'URL finale des trois groupes « Lettres lumineuses » dans `4_annonces_rsa.csv` ; ajouter un titre d'annonce avec le prix exact d'un forfait (ex. « Forfait LOVE `{{PRIX_PACK_LOVE}}` $ ») pour filtrer les petits budgets avant le clic.

---

## Vérification des longueurs (Python, `len()`)

| Élément | Texte | Caractères | Limite |
|---|---|---|---|
| Titre SEO | Location de lettres lumineuses 4 pi \| Évenox | 44 | 60 |
| Méta-description | Lettres lumineuses géantes de 4 pi pour mariages et événements d'entreprise : initiales, LOVE, chiffres ou nom. Livrées et installées. Réponse en 2 h. | 150 | 155 |
