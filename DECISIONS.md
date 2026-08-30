# Décisions §6 — paramétrables, non tranchées

Brief : *« Rends-les paramétrables (une constante en tête de fichier,
documentée), jamais codées en dur. »*

Les constantes vivent dans `lib/evx-decisions.js` (inliné par `build.js`
et `build-test-local.js` devant le widget). **Aucun drapeau actif n’est
posé ici.** Changer une constante = décision d’affaires, pas un agent.

| # | Sujet | Constantes | Valeur actuelle (ne pas « choisir ») |
|---|---|---|---|
| 6.1 | Montréal, Longueuil, Brossard, Gatineau | `villesSurMesure`, `ajustementSurMesure` (`null`), `forcerSurMesure` (`false`) | Table `ZONES` de `jw-widget.js` inchangée. J4W Brossard = déjà sur devis (km `null`). J4K Longueuil = encore chiffré par km. Gatineau absent de la table = « secteur à confirmer ». **Aucun $ inventé.** `forcerSurMesure: true` forcerait « Sur devis » pour ces villes, toujours sans montant. |
| 6.2 | Seuil livraison incluse | `seuilLivraisonIncluseKit` **449**, `seuilLivraisonIncluseSecteur` **500**, `seuilLivraisonIncluseActif` **`null`** | Les deux sources restent dans `catalogue.json`. Ne pas écrire 449 ou 500 comme seul seuil. |
| 6.3 | Destination des leads | `destinationLeads` **`''`** | Filet `lib/evx-envoi.js` + `WEBHOOK.md`. Brancher Mailchimp / CRM / courriel ailleurs. |
| 6.4 | Conflits de prix | `connect4Jx` **60**, `connect4Jw` **80**, `connect4Actif` **`null`** | jw affiche encore **80 $** (sa source). `jx` reste **60 $**. Express vs Réception : ids différents, voir `RAPPORT-CONFLITS.md`. |

Hors §6, cité au brief §3 : `plancherCommande` **300** avec
`appliquerPlancherCommande: false`. Le widget jw n’applique pas ce
plancher aujourd’hui (formule livraison seulement). Ne pas l’activer
sans arbitrage : ça changerait les totaux des petits paniers.

Quand `assistant-evenement/` arrivera (`DROP-IN.md`), le même objet
`window.EvxDecisions` sera déjà dans le payload.
