# Suivi des leads — procédure de réponse rapide (SOP)

> Objectif : **contacter chaque lead qualifié en moins de 5 minutes** (15 minutes au maximum pendant les heures d'ouverture), le qualifier en 5 minutes et conclure vite les bons dossiers. Les petits dossiers sont redirigés vers la boutique, poliment.
> Pourquoi : un lead joint en 5 minutes plutôt qu'en 30 a environ 21 fois plus de chances d'être qualifié (MIT/InsideSales). Jusqu'à 50 % des réservations de mariage vont au premier fournisseur qui répond (WeddingPro). 93 % des leads convertis sont joints au plus tard à la 6e tentative (Velocify).

Variables : `{{PRENOM}}`, `{{DATE}}`, `{{VILLE}}`, `{{NB}}` (invités), `{{TYPE}}` (party de bureau, mariage…), `{{CONSEILLER}}` (prénom du vendeur), `{{CALENDLY}}` (lien de réservation d'appel), `{{BOUTIQUE}}` = https://evenox.booqableshop.com, `{{TEL}}` = 514-559-1893, `{{COURRIEL}}` = info@evenox.ca.

---

## 1. Rôles et horaire de garde

| Rôle | Qui | Responsabilité |
|---|---|---|
| Personne de garde (« téléphone rouge ») | Alexandre Séguin, ou la personne désignée pour la semaine | Reçoit les alertes texto des routes A et B. Appelle en moins de 5 minutes. |
| Relève | 2e personne | Si la personne de garde n'a pas appelé dans les 10 minutes, l'alerte est renvoyée à la relève (automatisation Make). |
| Responsable du CRM | La personne de garde | Met à jour l'étape du pipeline **immédiatement après chaque contact**. |

**Heures de garde :** lundi au vendredi de 8 h 30 à 20 h, samedi de 9 h à 17 h. En dehors de ces heures, le texto automatique annonce un appel le lendemain dès 9 h et offre le lien Calendly.

**Règle d'or :** un lead A ou B passe avant tout le reste, sauf une installation en cours.

---

## 2. Réponses automatiques instantanées (T+0, envoyées par le système)

### 2.1 Route A (appel prioritaire) — texto
> Bonjour {{PRENOM}}, ici {{CONSEILLER}} d'Évenox. Bien reçu votre demande pour votre {{TYPE}} du {{DATE}} à {{VILLE}} ({{NB}} invités). Je vous appelle dans les prochaines minutes au numéro {{TEL}}. Vous préférez choisir le moment? {{CALENDLY}}

**Hors heures :**
> Bonjour {{PRENOM}}, ici {{CONSEILLER}} d'Évenox. Bien reçu votre demande pour le {{DATE}} à {{VILLE}}. Je vous appelle demain dès 9 h, ou choisissez votre moment ici : {{CALENDLY}}. Votre date est notée en priorité.

### 2.2 Route A — courriel
**Objet :** Votre {{TYPE}} du {{DATE}} : je vous appelle dans quelques minutes

> Bonjour {{PRENOM}},
>
> Merci pour votre demande. Voici ce que j'ai noté :
> - Événement : {{TYPE}}, le {{DATE}}
> - Lieu : {{VILLE}}
> - Invités : {{NB}}
>
> Je vous appelle dans les prochaines minutes pour valider deux ou trois détails (accès au lieu, horaire d'installation). Ensuite, vous recevez votre proposition écrite avec 3 options.
>
> Vous préférez choisir le moment de l'appel? Réservez 15 minutes ici : {{CALENDLY}}
>
> À tout de suite,
> {{CONSEILLER}}
> Évenox inc. · 215, boul. René-A.-Robert, local 100, Sainte-Thérèse (Québec) J7E 4L1 · {{TEL}} · {{COURRIEL}}

### 2.3 Route B (soumission en 24 h) — texto
> Bonjour {{PRENOM}}, ici {{CONSEILLER}} d'Évenox. Bien reçu votre demande pour le {{DATE}} à {{VILLE}}. Votre soumission détaillée arrive d'ici 24 h. Une question rapide d'ici là : le lieu est-il à l'intérieur ou à l'extérieur?

### 2.4 Route B — courriel
**Objet :** Votre soumission Évenox pour le {{DATE}} : d'ici 24 h

> Bonjour {{PRENOM}},
>
> Merci! Je prépare votre soumission pour votre {{TYPE}} du {{DATE}} à {{VILLE}} ({{NB}} invités). Vous la recevrez d'ici 24 h, avec 3 options et des photos d'événements semblables.
>
> Pour vous proposer le bon forfait, pouvez-vous me répondre en une ligne : **quelle ambiance voulez-vous créer?** (ex. chic et élégante, festive, à l'image de l'entreprise)
>
> Vous voulez en parler de vive voix? {{CALENDLY}}
>
> {{CONSEILLER}} · Évenox · {{TEL}}
> *Vous recevez ce courriel parce que vous avez demandé une soumission. Pour ne plus recevoir de messages de notre part, répondez « désabonner ».*

### 2.5 Route C (budget de moins de 600 $, ou de moins de 1 000 $ pour un événement corporatif : boutique) — courriel seulement, pas de texto
**Objet :** Votre projet du {{DATE}} : la façon la plus simple de réserver

> Bonjour {{PRENOM}},
>
> Merci pour votre demande! Pour un projet comme le vôtre, notre **boutique en ligne** est la façon la plus rapide et la plus économique de réserver :
> - les prix et la disponibilité de votre date s'affichent en direct ;
> - le ramassage à notre entrepôt de Sainte-Thérèse est gratuit, sans minimum ;
> - la livraison est offerte dès 200 $ de location. **[À CONFIRMER : la page /livraison/ indique 100 $ pour les 10 premiers km, puis 7 $/km. Retirer cette ligne si la boutique n'offre pas la livraison gratuite dès 200 $.]**
>
> 👉 {{BOUTIQUE}}?utm_source=courriel&utm_medium=email&utm_campaign=route_c
>
> Les plus populaires pour un {{TYPE}} : [Suggestion 1], [Suggestion 2], [Suggestion 3].
>
> Une question? Répondez simplement à ce courriel.
>
> L'équipe Évenox · {{TEL}}
> *Pour ne plus recevoir de messages de notre part, répondez « désabonner ».*

### 2.6 Appel manqué entrant — texto automatique en moins de 60 secondes
> Bonjour, ici Évenox. Désolé d'avoir manqué votre appel : nous sommes probablement sur une installation. On vous rappelle très vite. Pour aller plus vite, écrivez-nous ici la date et le type de votre événement.

---

## 3. L'appel de 5 minutes (script de qualification en 6 étapes)

**Avant de composer (30 secondes) :** ouvrir la fiche dans le CRM et lire le type, la date, la ville, le nombre d'invités, le budget, le rôle et le pointage. Vérifier la disponibilité de la date dans Booqable (photobooth avec préposé : un seul par soir).

**Ouverture :**
> « Bonjour {{PRENOM}}, c'est {{CONSEILLER}} d'Évenox, vous venez de nous écrire pour votre {{TYPE}} du {{DATE}}. Vous avez 5 minutes? Je veux juste m'assurer de vous proposer la bonne chose. »

*(Si ce n'est pas le bon moment : « Pas de souci. Je vous rappelle à quelle heure aujourd'hui? » Noter l'heure dans le CRM et créer un rappel.)*

### Étape 1 — Confirmer l'événement et le lieu
> « Donc c'est le {{DATE}}, à {{VILLE}}. C'est à l'intérieur ou à l'extérieur? Dans vos bureaux, une salle ou un domaine? »
> « Pour l'accès : y a-t-il un quai de livraison, un ascenseur, des marches? À quelle heure peut-on commencer à installer? »

### Étape 2 — Invités et format
> « Vous attendez combien de personnes, à peu près? Ce sera plutôt un cocktail debout, un souper assis ou une soirée avec remise de prix? »

### Étape 3 — La vision
> « Quand vos invités vont entrer dans la salle, qu'est-ce que vous voulez qu'ils se disent? »
> (Écouter. Noter 2 ou 3 mots-clés : « chic », « à nos couleurs », « que les gens bougent », « photo de groupe ».)

### Étape 4 — Budget (ancrage)
- **Corporatif :** « Pour un {{TYPE}} de {{NB}} personnes, nos clients choisissent en général entre notre Party de bureau à 1 995 $ et notre Gala Signature à 2 495 $. Est-ce que c'est dans votre ordre de grandeur? »
- **Mariage :** « Pour un mariage de {{NB}} invités, la plupart des couples prennent la Soirée Signature à 1 449 $ ou le Mariage Signature à 1 899 $. Ça rejoint ce que vous aviez en tête? »
- Si la réponse est « moins » : « Parfait. Quel montant vous mettrait à l'aise? » Proposer la version réduite (5 à 7 à 1 195 $, Décor WOW à 899 $, photobooth seul dès 599 $). Si le montant est sous 600 $, appliquer la section 6 (redirection vers la boutique).

### Étape 5 — Décision et échéance
> « Qui d'autre participe à la décision : un comité, les RH, votre conjoint? »
> « Vous aimeriez avoir tout confirmé pour quand? »
> **Corporatif :** « Vous fonctionnez par bon de commande? Nous offrons le net 30 sur approbation de crédit. »

### Étape 6 — Prochaine étape ferme
> « Voici ce que je vous propose : je vous envoie aujourd'hui, avant [heure], 3 options avec photos et prix fermes. Et on se reparle 15 minutes [jour, heure] pour choisir. Ça vous va? »
> Envoyer **l'invitation d'agenda pendant l'appel**.
> Si la personne est prête : « Je peux bloquer votre date tout de suite avec un dépôt de 20 % (ou sur bon de commande). Le lien de paiement arrive par texto dans 1 minute. »

**Après l'appel (2 minutes) :** dans le CRM, passer à l'étape « Qualifié », noter le budget confirmé, la vision et le décideur, et programmer la tâche « Envoyer la proposition » (échéance : aujourd'hui).

### Si l'appel ne répond pas
1. Laisser ce message vocal (20 secondes) :
   > « Bonjour {{PRENOM}}, {{CONSEILLER}} d'Évenox, pour votre {{TYPE}} du {{DATE}}. J'ai vérifié : votre date est encore libre. Je vous texte mon numéro direct. Au plaisir! »
2. Texto immédiat :
   > {{PRENOM}}, je viens d'essayer de vous joindre pour le {{DATE}}. Votre date est encore libre de notre côté. Quel moment vous convient pour 5 minutes aujourd'hui? Ou réservez ici : {{CALENDLY}}
3. Nouvelle tentative d'appel à T+1 h, puis à T+4 h (le même jour).

---

## 4. La proposition (T+2 h au plus tard, le jour même)

**Format :** courriel de moins de 200 mots + PDF ou lien Booqable de 1 page avec **3 options** (bonne, meilleure, complète). L'option du milieu est recommandée.

**Objet :** {{PRENOM}}, vos 3 options pour le {{DATE}}

> Bonjour {{PRENOM}},
>
> Merci pour notre échange. Comme convenu, voici 3 options pour votre {{TYPE}} du {{DATE}} à {{VILLE}} ({{NB}} invités) :
>
> 1. **[Option 1]** : [prix] $ — [1 ligne]
> 2. **[Option 2] ★ notre recommandation** : [prix] $ — [1 ligne liée à la vision : « pour la photo de groupe que vous vouliez »]
> 3. **[Option 3]** : [prix] $ — [1 ligne]
>
> Inclus dans les 3 : installation, tests avant l'arrivée des invités et démontage. [Livraison selon la politique en vigueur.]
> Prix avant taxes, valides 7 jours.
>
> Pour bloquer la date : dépôt de 20 % [lien de paiement], ou bon de commande (net 30, entreprises).
> Photos d'un événement semblable : [lien vers la galerie]
>
> Quelle option vous parle le plus?
>
> {{CONSEILLER}} · {{TEL}}

---

## 5. Cadence de relance (si aucun dépôt)

Arrêter la cadence dès que la personne répond, réserve ou demande d'arrêter. Chaque message se termine par **une seule question**.

| Jour | Canal | Message exact |
|---|---|---|
| **J0** | Appel + texto + courriel | Sections 2 à 4 ci-dessus |
| **J1** | Texto | « Bonjour {{PRENOM}}, avez-vous pu regarder les 3 options pour le {{DATE}}? Une question rapide : laquelle se rapproche le plus de ce que vous imaginiez? — {{CONSEILLER}}, Évenox » |
| **J3** | Appel, puis courriel si pas de réponse | **Courriel — Objet :** « Ce qu'on a fait pour [type de client semblable] » <br> « Bonjour {{PRENOM}}, pour vous donner une idée concrète, voici [l'événement de X / un mariage à Y] que nous avons monté le mois dernier : [lien vers 3 photos]. [1 phrase de résultat ou un vrai avis client.] Votre date du {{DATE}} est encore libre de notre côté. Voulez-vous que je la retienne pendant que vous finalisez? — {{CONSEILLER}} » |
| **J5 à J7** | Courriel + texto | **Courriel — Objet :** « Je retiens votre date jusqu'au [J+3] » <br> « Bonjour {{PRENOM}}, une autre demande est entrée pour le {{DATE}}. Comme vous étiez là avant, je retiens la date pour vous jusqu'au [date], 17 h. Après, je dois la libérer. Pour la confirmer : [lien de dépôt] ou un simple « oui » en réponse. Voulez-vous que je la garde? » <br> ⚠️ **N'envoyer que si c'est vrai** (autre demande réelle ou capacité vraiment limitée). Sinon : « Les [samedis/jeudis] de [mois] partent vite. Voulez-vous que je retienne la vôtre jusqu'au [date]? » <br> **Texto (le même jour) :** « {{PRENOM}}, je vous ai écrit : je retiens le {{DATE}} pour vous jusqu'au [date]. Je la garde? » |
| **J14** | Courriel | **Objet :** « Je ferme votre dossier? » <br> « Bonjour {{PRENOM}}, je n'ai pas eu de nouvelles et je ne veux pas vous encombrer. Je ferme votre dossier pour le {{DATE}}, sauf si vous me dites le contraire. Si vos plans ont changé (date, budget, nombre d'invités), répondez simplement avec le changement et je vous ajuste une proposition dans la journée. Dois-je fermer le dossier? » |
| **J30** | Courriel | **Objet :** « Votre {{TYPE}} : petite vérification » <br> « Bonjour {{PRENOM}}, votre {{TYPE}} approche. Si vous êtes toujours à la recherche d'un décor, d'un photobooth ou de jeux, il reste quelques disponibilités autour du {{DATE}}. Pour un projet plus petit, notre boutique en ligne est ouverte 24 h sur 24 : {{BOUTIQUE}}. Voulez-vous que je vérifie votre date une dernière fois? » <br> Puis passer à l'étape « Perdu – sans réponse ». Si `consent_marketing` = oui, ajouter le contact à l'infolettre saisonnière. |

**Tous les courriels de relance (J3 à J30) se terminent par cette signature :**
> {{CONSEILLER}} · Évenox inc. · 215, boul. René-A.-Robert, local 100, Sainte-Thérèse (Québec) J7E 4L1 · {{TEL}}
> *Pour ne plus recevoir de messages d'Évenox, répondez « désabonner ».*

**Textos de relance :** ajouter « Répondez ARRÊT pour ne plus recevoir de textos. » au premier texto de relance (J1). Respecter tout « ARRÊT » ou « STOP » immédiatement.

---

## 6. Réponses aux objections

### « C'est trop cher. »
1. **Valider :** « Je comprends, c'est un investissement. »
2. **Clarifier :** « Quand vous dites trop cher, c'est par rapport à votre budget ou à une autre soumission? »
3. Si c'est **le budget** : « Quel montant vous mettrait à l'aise? Je peux retirer [élément] et garder ce qui fait l'effet wow, par exemple les lettres lumineuses et le mur floral. Le 5 à 7 d'équipe à 1 195 $ garde l'essentiel. » (Mariage : Décor WOW à 899 $.)
4. Si c'est **une autre soumission** : « Est-ce que la livraison, l'installation, le démontage et le préposé sont inclus dans l'autre prix? Chez nous, c'est un prix fixe : pas de frais d'installation à 50 $ de l'heure ni de surprise sur la facture. **[LIVRAISON : à dire seulement après la décision du propriétaire sur la livraison et l'installation, correctifs-urgents.md n° 1 ; sinon, préciser les frais de livraison selon la distance.]** Voulez-vous qu'on compare ligne par ligne? »
5. **Ne jamais baisser le prix sans retirer quelque chose.** Une seule concession possible : un ajout offert (ex. 1 heure de photobooth supplémentaire) **si le dépôt est fait dans les 48 h**.

### « Je compare avec d'autres fournisseurs. »
> « Vous avez raison de comparer. Pour vous aider, voici les 4 questions à poser à chacun :
> 1. Le prix comprend-il la livraison, l'installation ET le démontage?
> 2. Le photobooth vient-il avec un préposé pendant toute la soirée?
> 3. Que se passe-t-il si un équipement brise pendant l'événement?
> 4. Pouvez-vous facturer par bon de commande? (corporatif)
> Chez nous, la réponse est oui aux 4 **[LIVRAISON : la question 1 dépend de la décision sur la livraison, correctifs-urgents.md n° 1]**. Je vous les envoie par écrit? Et quand pensez-vous avoir fait votre choix? »

Ensuite, programmer une relance la veille de la date de décision annoncée.

### « Je vais y penser. »
> « Bien sûr. Pour que je vous aide à y penser : qu'est-ce qui vous fait hésiter? Le prix, le choix du forfait, ou l'approbation de quelqu'un d'autre? »
- **Approbation interne :** « Voulez-vous que je vous prépare un résumé d'une page à transmettre à votre [gestionnaire, comité]? »
- **Choix du forfait :** « Si c'était à refaire pour moi, avec {{NB}} invités, je prendrais [option du milieu] pour [raison liée à la vision]. »
- **Rien de précis :** « Parfait. Je vous réécris [jour] ; d'ici là, votre date reste libre, mais je ne peux pas la bloquer sans dépôt. »

### « Il faut que ça passe par notre comité ou nos achats. » (corporatif)
> « Aucun problème. Je vous envoie la soumission au nom de l'entreprise, avec notre NEQ et nos numéros de TPS et de TVQ. On accepte le bon de commande et le net 30. Quelle est la date de votre prochaine réunion? Je vous relance le lendemain. »

---

## 7. Disqualifier poliment et rediriger vers la boutique

**Critères de disqualification :** budget de moins de 600 $ pour un service avec installation · plus de 40 km et petit budget · date déjà prise (photobooth) · demande hors catalogue (traiteur, alcool, DJ seul) · seulement 10 chaises.

**Au téléphone :**
> « Merci de m'avoir expliqué votre projet. Honnêtement, pour [10 tables et chaises / un petit anniversaire], notre service clé en main serait trop pour vous. Vous paieriez une installation dont vous n'avez pas besoin. Notre boutique en ligne est faite exactement pour ça : prix affichés et ramassage gratuit à Sainte-Thérèse [et livraison offerte dès 200 $ : À CONFIRMER, voir 2.5]. Je vous texte le lien tout de suite. Et si votre projet grossit, vous avez mon numéro. »

**Par texto :**
> Merci {{PRENOM}}! Comme promis, la boutique : {{BOUTIQUE}}?utm_source=sms&utm_medium=disqualif. Ramassage gratuit à Sainte-Thérèse [, livraison dès 200 $ de location : À CONFIRMER]. Bonne fête!

**Date non disponible :**
> « Malheureusement, notre photobooth avec préposé est déjà réservé le {{DATE}}. Je peux vous offrir [le Décor WOW sans photobooth / une autre date]. Sinon, je vous recommande de réserver rapidement ailleurs : les dates partent vite. »

**Au CRM :** étape « Disqualifié », avec la raison (budget, zone, date, hors catalogue). Ne pas déclencher de conversion « gagné ».

---

## 8. Après l'événement (avis et références)

| Moment | Canal | Message |
|---|---|---|
| Lendemain, 10 h | Texto | « Bonjour {{PRENOM}}, merci d'avoir choisi Évenox pour votre {{TYPE}}! Si tout s'est bien passé, un avis Google de 30 secondes nous aide énormément : [lien court de l'avis]. Si quelque chose n'était pas parfait, dites-le-moi directement. » |
| J+3 (si pas d'avis) | Courriel | Le même message + les photos de l'événement (galerie) + le lien WeddingWire (mariage) ou le lien Yelp (corporatif). |
| J+300 (corporatif) | Courriel | « Votre party de l'an dernier : on remet ça? Je peux retenir la même date cette année. » |

Ne jamais offrir de compensation contre un avis, ni filtrer les clients insatisfaits avant de leur demander un avis (règles de Google). Demander à tous les clients.

---

## 9. Notes LCAP (loi canadienne anti-pourriel) et Loi 25

- **Réponse à une demande :** le premier courriel ou texto qui répond directement à une demande de soumission est permis sans consentement additionnel. Une soumission demandée par la personne est aussi permise, mais doit **identifier l'expéditeur** (Évenox inc., adresse, téléphone) et offrir un **moyen de désabonnement** fonctionnel.
- **Consentement tacite :** une demande de renseignements ou de soumission crée un consentement tacite de **6 mois** à compter de la demande. Un achat (contrat ou dépôt) crée une relation d'affaires et un consentement tacite de **2 ans**. Toute la cadence (J0 à J30) et la relance J+300 d'un client ayant acheté respectent ces délais.
- **Infolettre et promotions générales :** seulement avec le **consentement exprès** (case `consent_marketing` cochée), ou pendant les périodes de consentement tacite ci-dessus.
- **Désabonnement :** traiter toute demande en moins de 10 jours ouvrables (cible : 48 h). Le marquer dans le CRM (`desabonne = oui`) et le respecter partout (courriel, texto, audiences publicitaires).
- **Textos :** mêmes règles que le courriel (un message électronique commercial). Inclure l'identification « Évenox » et « Répondez ARRÊT » au premier message commercial.
- **Preuve :** conserver dans le CRM la date de la demande, la source et l'état des consentements. En cas de plainte, c'est à Évenox de prouver le consentement.
- **Loi 25 :** n'utiliser les coordonnées que pour répondre à la demande et pour les fins consenties. Supprimer ou anonymiser les leads perdus sans relation d'affaires après **24 mois** (règle interne à inscrire dans la politique de confidentialité).

> Ces notes ne constituent pas un avis juridique. Les faire valider en même temps que le texte des consentements du formulaire.

---

## 10. Indicateurs de cette procédure (revue chaque lundi)

| Indicateur | Cible |
|---|---|
| Délai médian entre l'envoi du formulaire et le premier appel (routes A et B, heures d'ouverture) | 5 minutes au maximum |
| % des leads A et B joints de vive voix en moins de 24 h | 70 % ou plus |
| % des leads A et B ayant reçu une proposition le jour même | 90 % ou plus |
| Taux proposition → dépôt | Corporatif : 25 % ou plus · Mariage : 20 % ou plus |
| Délai médian entre le lead et le dépôt | Moins de 7 jours |
| Avis Google obtenus / événements livrés | 40 % ou plus |
