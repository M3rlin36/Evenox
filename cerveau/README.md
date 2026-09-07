# Cerveau Evenox — courriels

Outil de rédaction pour Alexandre (Grok / Grokbot / agent / humain).  
Un courriel client = un dossier. Analyse visible ici d’abord. Rien ne part sans fil Gmail réel + « envoie » d’Alexandre.

**Démarrage Grok :** coller [`GROK.md`](GROK.md) + suivre [`PROCESSUS.md`](PROCESSUS.md). Remplir [`extraction.json`](extraction.json). Chemin le plus rapide = section du même nom dans `GROK.md`, juste après Posture.

## Plus vite

1. Une passe HAUT (De/À/signature + demande). Compter les trous. **Stop dès que tu peux répondre.**
2. 0 trou → devis + mail en parallèle. 1–2 → gabarit questions, mail **avant** Booqable. 3+ → **1 phrase** + appel, pas 9 questions.
3. Municipal + PJ interdit contact → 1 mail **À approvisionnement**, **Cc émetteur**. OIQ interne en même temps. Pas DSC. Pas de promesse si disqualifié.
4. Ne pas bloquer le brouillon : tout Obsidian, catalogue, 10 Gmail, bas du fil, devis « au cas où ».
5. Templates : coller, crochets, stop. Déjà répondu / brouillon vivant = ne pas recommencer.

## En 30 secondes

1. Lis le fil de **HAUT en BAS**. Haut = demande active (à traiter, à chiffrer). Bas = historique périmé.
2. Extraire **De / À / signature** avant de conclure « pas d’email ».
3. Compte les trous (10 s). Checklist : **SKIP** si 3+ — haut de `checklist-dossier.md`. Pas 21 cases avant le mail.
4. Coche les **drapeaux** qui sautent aux yeux. Note : **lu / déduit / inventé**. Inventé = jamais mail ni Booqable.
5. Copie le gabarit dans `gabarits-reponses.md`. Remplace les `[CROCHETS]`. Stop. Pas de réécriture.
6. Montre le brouillon ici. Prix = devis Booqable seulement. **Aucun prix dans un mail de questions.** Brouillon n’attend pas Booqable s’il n’y a pas de devis à faire.

## Arbre

| Trous | Action |
| --- | --- |
| **0** — date+jour OK, lieu/accès tenables, format+quantités cohérents, fenêtre livr.→cueillette, pas de contradiction | Devis automatique. Analyse ici. Attendre `crée` / `envoie`. Devis + mail **en parallèle**. |
| **1–2** | Questions, **sans prix**. Banque : `questions-predeterminees.md`. Mail **avant** Booqable. |
| **3+** ou contradiction terrain | **1 phrase** + appel **514-559-1893**. Pas 9 questions. |
| Municipal + pièce jointe | Questions **écrites à l’approvisionnement**, Cc l’émetteur. Pas d’appel / pas de mail À loisirs si rejet. Décision produit vs OIQ **avant** d’envoyer. |

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

- `GROK.md` — **prompt unique à coller dans Grok**. Exécute `PROCESSUS.md` + `extraction.json` à chaque mail. **Chemin le plus rapide** = juste après Posture.
- `PROCESSUS.md` — SOP minute par minute, cases à cocher, qui fait quoi.
- `extraction.json` — contrat machine (schéma + squelette). Grok remplit une instance par dossier.
- `n8n-hooks.md` — contrat d’événements (Gmail → Grok → brouillon, jamais send).
- `questions-predeterminees.md` — banque, 1 question vs appel.
- `gabarits-reponses.md` — textes à coller + exemples remplis.
- `checklist-dossier.md` — ordre de traitement. **SKIP** si 3+ trous.
- `regles.md` — toujours / jamais / drapeaux. Brouillon client n’attend pas Booqable s’il n’y a pas de devis à faire.
