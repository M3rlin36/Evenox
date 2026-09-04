---
name: grosbot-inbox-queue
description: File Grokbot / Cerveau selon Nate Herk. Courriels, Grokbot, Dispatch inbox, ou quand Alexandre dit que Grokbot oublie des mails.
---

# Grokbot — ne pas oublier un courriel (Nate Herk)

Vidéo : https://www.youtube.com/watch?v=4hKJ9X6rGFo

Nom canon : **Grokbot**. Le libellé Gmail reste `GROS-File` (déjà créé).

Grokbot n’a **pas** de mémoire. La file, c’est Gmail. Nate : étiqueter, un à la fois, drafts jusqu’à « envoie », ne pas nettoyer 20k unread.

## Mapping Nate → Evenox

- Emergency → `NOX-URGENT`
- Needs you → `GROS-File` + `NOX-À-traiter` (toujours les deux)
- Quote → `Soumission`
- Schedule → `GROS-Livraison`
- Billing → `GROS-Acompte`
- Ignore → `NOX-Spam`

## Pourquoi il oubliait

- Scan de `is:unread` (~20 000 fils). Tokens sur Alarm.com / pubs.
- Il listait 5 dossiers dans le chat, puis le contexte les écrasait.
- Dispatch disait « exactement 3 brouillons » : le 4e disparaissait.
- Rien n’était étiqueté **avant** de dire « je m’en occupe ».
- GROS-File et `NOX-À-traiter` n’étaient pas écrits ensemble.

## Règle d’or

**Étiqueter avant de promettre.** Dual-write `GROS-File` **et** `NOX-À-traiter`. Laisser unread. Un run = un dossier. Urgent / acompte avant un nouveau lead.

## Requêtes autorisées (noms Gmail, pas Label_19)

1. File : `{label:GROS-File label:NOX-À-traiter} -label:NOX-Processed -label:GROS-En-cours -label:NOX-En-cours`
2. En cours : `{label:GROS-En-cours label:NOX-En-cours} -label:NOX-Processed`
3. Urgent Nate (nouveau seulement) : `in:inbox label:NOX-URGENT newer_than:2d -label:NOX-Processed -label:NOX-Spam`
4. Triage (max 8) : `in:inbox newer_than:2d -label:NOX-Processed -label:NOX-Spam -label:GROS-File -label:NOX-À-traiter`
5. Leads site : `from:wordpress@evenox.ca newer_than:14d` (sujets Nouveau lead / Nouvelle soumission)

**Interdit :** `is:unread` seul. **Interdit :** relire l’inbox entière. **Interdit :** boucle 15/30 min. Sweep cheap 3×/jour. File vide = `QUEUE VIDE` et stop.

`search_threads` MCP matche le **nom** du libellé (`GROS-File`), pas `label:Label_19`.

## Run (ordre Nate)

1. S’il reste un `GROS-En-cours` / `NOX-En-cours` : **finir celui-là**.
2. Urgent query. S’il y a un `NOX-URGENT` non processed : c’est le dossier.
3. Triage cheap (en-têtes, `grosbot.classify`) → file + type Nate, ou `NOX-Spam`. Max 8. Ne pas marquer lu.
4. `claim_next` : 1 fil. Dual-write En-cours, retirer File + alias.
5. Lire **tout** ce fil. Un message Alexandre = un dossier (Nom / Date / Client veut / Fait / Action).
6. Brouillon seulement. Jamais d’envoi sans **envoie**. Si `Brouillon IA` existe déjà : montrer celui-là, pas un 2e.
7. Fermer : `NOX-Processed` + `Brouillon IA` (ou `GROS-Skip` + `NOX-Processed`). Retirer File **et** En-cours (les deux synonymes).
8. S’il reste de la file : une ligne « file : N restants ». Stop.

## Coût

- Filtres Gmail (Alarm.com → `NOX-Spam`, Skip Inbox) = gratuit. MCP `create_filter` = 403 : recettes dans `grosbot/filters.py`.
- Triage = règles, pas un LLM.
- 1 brouillon / run. Le reste attend dans `GROS-File` (0 token).
- Rapport vendredi = `list_labels` (`grosbot.report`), jamais un scan de fils.
- Sweep cheap 3×/jour (`0 13,16,20 * * 1-5` UTC = 9h/12h/16h Montréal).

## n8n

Le flux « Évenox — Canal courriel » crée déjà devis Booqable + brouillons. Grokbot **complète** la file, il ne reconstruit pas n8n.
