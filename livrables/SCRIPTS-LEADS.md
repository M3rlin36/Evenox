# Évenox — Scripts de traitement des leads Google Ads

*But : transformer chaque clic payé en contrat, et apprendre à Google quels leads valent quelque chose. La publicité ne fait qu'amplifier ta vitesse de réponse : un lead rappelé en moins d'une heure se conclut beaucoup plus souvent qu'un lead rappelé le lendemain.*

---

## 1. Règle d'or : moins de 2 heures ouvrables

| Moment où le lead arrive | Action | Délai |
|---|---|---|
| Lundi au vendredi, 8 h à 18 h | Appel (script section 3) | **Moins de 2 h** |
| Soir et fin de semaine | Courriel automatique (section 2), puis appel le prochain jour ouvrable avant 10 h | 5 min / avant 10 h |
| Lead A (corporatif, budget de 1 500 $ et plus, date dans moins de 60 jours) | Appel même hors heures si possible ; sinon texto | Moins de 1 h |

---

## 2. Courriel automatique (envoyé dans les 5 minutes)

**Objet :** Votre demande Évenox est bien reçue — {{type_evenement}} du {{date}}

> Bonjour {{prénom}},
>
> Merci pour votre demande. Votre événement du {{date}} est bien noté.
>
> Un conseiller Évenox vous appelle d'ici {{délai : 2 heures ouvrables / demain avant 10 h}} pour valider trois choses : le lieu, le nombre d'invités et l'ambiance souhaitée. Vous recevrez ensuite une soumission détaillée, livraison, installation et reprise incluses.
>
> En attendant, voici quelques réalisations récentes : {{lien /realisations}}
>
> Les dates des vendredis de décembre se réservent vite. Si votre date est ferme, répondez simplement « Je réserve » à ce courriel et nous la bloquons pendant 48 h.
>
> Au plaisir,
> {{prénom conseiller}} — Évenox
> {{téléphone}} · evenox.ca

---

## 3. Script d'appel de qualification (5 à 7 minutes)

**Ouverture**
> « Bonjour {{prénom}}, c'est {{ton prénom}} d'Évenox. Vous nous avez écrit pour votre {{événement}} du {{date}}. Vous avez deux minutes pour que je vous prépare la bonne soumission ? »

**Les 5 questions (dans cet ordre)**
1. « C'est pour quel type d'événement, et combien d'invités environ ? »
2. « Où aura-t-il lieu ? Salle, bureau ou extérieur ? » (Hors zone → section 5.)
3. « Quelle ambiance voulez-vous créer ? Plutôt lounge chic, cocktail, gala ? » (On vend une ambiance, pas des chaises.)
4. « Avez-vous déjà une idée du budget pour le décor et l'animation ? » Si la personne hésite : « Nos forfaits ambiance clés en main vont de {{prix bas}} à {{prix haut}}. Où vous situez-vous ? »
5. « Qui d'autre participe à la décision, et pour quand voulez-vous la confirmer ? »

**Classement immédiat (à inscrire dans Notion)**

| Score | Critères | Suite |
|---|---|---|
| **A** | Budget de 1 500 $ et plus, date confirmée, décideur au bout du fil | Soumission **le jour même** et rappel le lendemain |
| **B** | Budget de 600 à 1 500 $, ou décision dans plus de 30 jours | Soumission en moins de 24 h et séquence de relance |
| **C** | Budget de moins de 600 $, ou articles à l'unité | Rediriger vers le configurateur en ligne (prix affichés, autonome) |
| **D** | Hors zone, emploi, spam, vendeur | Fermer poliment ; statut **Perdu** et motif |

**Fermeture A et B**
> « Parfait. Je vous envoie la soumission {{aujourd'hui / demain matin}}. Si elle vous convient, un dépôt de 20 % bloque la date ; pour les entreprises, on peut facturer à 30 jours. Ça vous va ? »

---

## 4. Pas de réponse : message vocal et texto

**Message vocal (20 secondes)**
> « Bonjour {{prénom}}, {{ton prénom}} d'Évenox, pour votre {{événement}} du {{date}}. Je vous texte mon numéro direct ; rappelez-moi quand ça vous arrange, et je vous prépare votre soumission en 24 h. Bonne journée ! »

**Texto (envoyé tout de suite après)**
> Bonjour {{prénom}}, ici {{ton prénom}} d'Évenox pour votre {{événement}} du {{date}}. Quel moment vous convient pour un appel de 5 minutes ? Sinon, répondez ici avec votre nombre d'invités et votre lieu, et je vous envoie la soumission.

---

## 5. Hors zone ou petit budget (rester premium)

> « Merci de penser à nous. Pour {{raison : cette distance / ce format}}, on ne serait pas la meilleure option pour vous, et je préfère vous le dire tout de suite. Si vous organisez un événement d'entreprise ou un mariage dans la région de Montréal, Laval ou de la Rive-Nord, on sera là. »

*(Ne jamais baisser le prix pour garder un petit lead. Le positionnement premium se protège à l'appel.)*

---

## 6. Relances après la soumission

| Jour | Canal | Message |
|---|---|---|
| J+1 | Appel | « Avez-vous pu regarder la soumission ? Une question sur un élément ? » |
| J+3 | Courriel | 2 photos d'un événement semblable et une phrase : « Voici ce que ça donne en vrai. » |
| J+7 | Appel ou texto | « Votre date du {{date}} est encore libre. Je peux la bloquer 48 h sans engagement. » |
| J+14 | Courriel final | « Je ferme votre dossier pour l'instant. Si votre projet revient, répondez à ce courriel et je reprends où on était. » |

Après J+14 sans réponse : statut **Perdu**, motif « Sans réponse ». Le lead entre dans la liste de réactivation.

---

## 7. Objections fréquentes

| Objection | Réponse |
|---|---|
| « C'est plus cher qu'ailleurs. » | « Ailleurs, on vous livre du matériel. Nous, on livre l'ambiance : livraison, installation, reprise, et un conseiller du début à la fin. Vous comparez quel forfait ? Je vous montre la différence ligne par ligne. » |
| « Je compare des soumissions. » | « Très bien. Qu'est-ce qui va faire pencher votre décision : le prix, le style ou la tranquillité d'esprit ? » |
| « Je vous reviens. » | « Parfait. Qu'est-ce qui doit se passer de votre côté pour décider ? Je vous rappelle le {{date}} ? » |
| « Le budget n'est pas approuvé. » | « Je vous fais une version à {{palier inférieur}} et une version complète, pour que vous ayez les deux en main lors de votre réunion. » |

---

## 8. Notion : ce qui doit être rempli à chaque lead (non négociable)

| Champ | Valeurs | Pourquoi |
|---|---|---|
| **Source** | Google Ads / Formulaire site / Référence / Téléphone / Autre | Savoir ce que rapporte chaque dollar de publicité |
| **Campagne** (nouveau) | Corporatif / Produits / Mariage / Marque | Savoir quelle campagne rapporte |
| **GCLID** (nouveau) | Copié du formulaire (champ caché) | Renvoyer le résultat à Google |
| **Score** (nouveau) | A / B / C / D | Lead qualifié = A, B ou C |
| **État** | Nouveau → Appel fait → Soumission envoyée → Dépôt payé / Perdu | Calculer le taux de conclusion |
| **Montant du contrat** (nouveau) | $ | Calculer le rendement réel de la publicité |
| **Motif de perte** (nouveau) | Prix / Date prise / Sans réponse / Hors zone / Concurrent | Corriger les annonces et les négatifs |

**Chaque vendredi (10 min) :** exporter les leads de la semaine qui ont un GCLID et un score A, B ou C, puis les importer dans Google Ads comme « Lead qualifié ». Les dépôts payés sont importés comme « Réservation », avec le montant. Après 3 semaines manuelles, on automatise avec Zapier (voir `GUIDE-TRACKING-LOI25.md`).
