# Cerveau Evenox — courriels

Outil de rédaction pour Alexandre (Grok / Grokbot / agent / humain).  
Un courriel client = un dossier. Analyse visible ici d’abord. Rien ne part sans fil Gmail réel + « envoie » d’Alexandre.

**Grok :** coller / charger [`GROK.md`](GROK.md) — prompt unique.

## En 30 secondes

1. Lis le fil de **HAUT en BAS**. Haut = demande active (à traiter, à chiffrer). Bas = historique périmé.
2. Extraire **De / À / signature** avant de conclure « pas d’email ».
3. Ouvre `checklist-dossier.md`. Comprendre **avant** Booqable, `/suivis/`, ou un mail client.
4. Compte les trous (arbre ci-dessous). Coche les **drapeaux**.
5. Note interne : **lu / déduit / inventé**. Inventé = jamais dans le mail ni Booqable.
6. Copie le gabarit dans `gabarits-reponses.md`. Remplace les `[CROCHETS]`.
7. Montre le brouillon ici. Prix = devis Booqable seulement. **Aucun prix dans un mail de questions.**

## Arbre

| Trous | Action |
| --- | --- |
| **0** — date+jour OK, lieu/accès tenables, format+quantités cohérents, fenêtre livr.→cueillette, pas de contradiction | Devis automatique. Analyse ici. Attendre `crée` / `envoie`. |
| **1–2** | Questions, **sans prix**. Banque : `questions-predeterminees.md`. |
| **3+** ou contradiction terrain | Appel **514-559-1893**. |
| Municipal + pièce jointe | Questions **écrites**. Pas d’appel à l’émetteur si le document l’interdit. |

Pas d’écriture Booqable / suivis sans `envoie` ou `crée` d’Alexandre.

## Choix du gabarit

| Situation | Gabarit |
| --- | --- |
| 0 trou, on sait | Devis auto + F si déjà parti |
| Premier mail, trop de trous (Mélanie) | A — incomplet → appel |
| Premier mail 1–2 trous (Alpinea, 5 à 7) | B — questions sans prix |
| Suivi avec pièges terrain (Cardin) | C — contradictions |
| Devis / SEAO / PJ ≠ mailing (DT-2026-41) | D — municipal |
| Silence après notre mail | E — relance |
| Devis déjà parti | F — en attente |
| Client conteste dépôt / NET / livraison | Bloc contestation — question, pas récitation |

## Style (validé en tests)

- Premier courriel : après « Bonjour [Prénom], » → **« J’espère que vous allez bien. »** Jamais « merci pour le résumé ».
- Suivi : on entre dans le vif. Pas de merci.
- Peu de questions. Trop de points = appel **514-559-1893**.
- Faits et questions. Pas de négation (« on ne peut pas », « je ne peux pas envoyer »).
- Document municipal qui interdit de parler à l’émetteur : on n’offre pas d’appeler cette personne.
- Signature : voir `regles.md`.

## Règles à ne pas rater

- Ne jamais chiffrer le **bas** si une relance est en **haut**.
- Pas de dossier/devis Booqable avant d’avoir compris.
- Jamais de prix ferme si la portée est incertaine ou périmée. Pas de « sous 2 000 $ » / « dans votre budget » sur une vieille enveloppe.
- Ne pas nommer un produit que le client n’a pas nommé.
- Tout total a une **ventilation** (lignes). Sinon pas de total client.
- Client qui **conteste** une règle → question, pas récitation.
- Taxes / signature / dépôt 20 % : seulement au service d’un dossier **vrai**.

## Sources

| Source | Sert à |
| --- | --- |
| Gmail `evenox.ca@gmail.com` | Ce que le client a écrit. Mémoire du dossier. |
| Booqable | Prix, stock, n° devis, lien dépôt. Seule source officielle. |
| Calendrier réel | Date + jour de semaine. Sans année = on demande. |
| Ce dossier `/workspace/cerveau/` | Ton, questions, gabarits. `GROK.md` = prompt Grok. |

Gmail = brouillon interne sourcé. Jamais inventer. Jamais envoyer depuis ici.

## Tests dont ce cerveau est sorti

1. Alpinea / Johanne — 70 + 8 chaises, mariage, Saint-Donat → gabarit B.
2. Mélanie — party Noël incomplet → gabarit A.
3. 5 à 7 Blainville, 120 personnes → gabarit B + questions format.
4. Cardin / Laverdière — dimanche, sous-sol, chapiteau décembre, gonflables 8 pi, 3 jours, tables du lieu → gabarit C.
5. Marché de Noël municipal DT-2026-41 — courriel vs pièce jointe → gabarit D.

## Fichiers

- `GROK.md` — **prompt unique à coller dans Grok**.
- `questions-predeterminees.md` — banque, 1 question vs appel.
- `gabarits-reponses.md` — textes à coller + exemples remplis.
- `checklist-dossier.md` — ordre de traitement.
- `regles.md` — toujours / jamais / drapeaux.
