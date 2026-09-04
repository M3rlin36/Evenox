---
name: grosbot-inbox-queue
description: File Grokbot / Cerveau selon Nate Herk. Courriels, Grokbot, Dispatch inbox, ou quand Alexandre dit que Grokbot oublie des mails.
---

# Grokbot — ne pas oublier un courriel (Nate Herk)

Vidéo : https://www.youtube.com/watch?v=4hKJ9X6rGFo

Nom canon : **Grokbot** / **Grok**. Libellés Gmail : `Grok-File`, `Grok-En-cours`, `Grok-Skip`, `Grok-Livraison`, `Grok-Acompte`, `Grok-Envoyé`. Jamais GROS.

Grokbot n’a **pas** de mémoire. La file, c’est Gmail. Nate : étiqueter, un à la fois, drafts jusqu’à « envoie », ne pas nettoyer 20k unread.

## Mapping Nate → Evenox

- Emergency → `NOX-URGENT`
- Needs you → `Grok-File` + `NOX-À-traiter` (toujours les deux)
- Quote → `Soumission`
- Schedule → `Grok-Livraison`
- Billing → `Grok-Acompte`
- Ignore → `NOX-Spam`
- Envoyé (preuve) → `Grok-Envoyé`

## Pourquoi il oubliait

- Scan de `is:unread` (~20 000 fils). Tokens sur Alarm.com / pubs.
- Il listait 5 dossiers dans le chat, puis le contexte les écrasait.
- Dispatch disait « exactement 3 brouillons » : le 4e disparaissait.
- Rien n’était étiqueté **avant** de dire « je m’en occupe ».
- Grok-File et `NOX-À-traiter` n’étaient pas écrits ensemble.

## Règle d’or

**Étiqueter avant de promettre.** Dual-write `Grok-File` **et** `NOX-À-traiter`. Laisser unread. Un run = un dossier. Urgent / acompte avant un nouveau lead.

## Requêtes autorisées (noms Gmail, pas Label_19)

1. File : `{label:Grok-File label:NOX-À-traiter} -label:NOX-Processed -label:Grok-En-cours -label:NOX-En-cours`
2. En cours : `{label:Grok-En-cours label:NOX-En-cours} -label:NOX-Processed`
3. Urgent Nate (nouveau seulement) : `in:inbox label:NOX-URGENT newer_than:2d -label:NOX-Processed -label:NOX-Spam`
4. Triage (max 8) : `in:inbox newer_than:2d -label:NOX-Processed -label:NOX-Spam -label:Grok-File -label:NOX-À-traiter`
5. Leads site : `from:wordpress@evenox.ca newer_than:14d` (sujets Nouveau lead / Nouvelle soumission)

**Interdit :** `is:unread` seul. **Interdit :** relire l’inbox entière. **Interdit :** boucle 15/30 min. Sweep cheap 3×/jour. File vide = `QUEUE VIDE` et stop.

`search_threads` MCP matche le **nom** du libellé (`Grok-File`), pas `label:Label_19`.

## Run (ordre Nate)

1. S’il reste un `Grok-En-cours` / `NOX-En-cours` : **finir celui-là**.
2. Urgent query. S’il y a un `NOX-URGENT` non processed : c’est le dossier.
3. Triage cheap (en-têtes, `grosbot.classify`) → file + type Nate, ou `NOX-Spam`. Max 8. Ne pas marquer lu.
4. `claim_next` : 1 fil. Dual-write En-cours, retirer File + alias.
5. Lire **tout** ce fil. Un message Alexandre = un dossier (Nom / Date / Client veut / Fait / Action).
6. Brouillon seulement. Jamais d’envoi sans **envoie**. Si `Brouillon IA` existe déjà : montrer celui-là, pas un 2e.
7. Après `envoie` : `send_message` puis `get_thread` PLAIN_TEXT **même tour**. `prove_sent`.
   - Parti → coller `Parti.` + À + Objet + **le texte du mail**. C’est la preuve. Pas d’ID. Pas « va voir Gmail ».
   - Sinon → `Pas parti. Le brouillon est encore là.`
   - En silence : `Grok-Envoyé` seulement si Parti.
8. Fermer un brouillon (sans envoi) : `NOX-Processed` + `Brouillon IA`. Retirer File **et** En-cours.
9. S’il reste de la file : une ligne « file : N restants ». Stop.

## Coût

- Filtres Gmail (Alarm.com → `NOX-Spam`, Skip Inbox) = gratuit. MCP `create_filter` = 403 : recettes dans `grosbot/filters.py`.
- Triage = règles, pas un LLM.
- 1 brouillon / run. Le reste attend dans `Grok-File` (0 token).
- Rapport vendredi = `list_labels` (`grosbot.report`), jamais un scan de fils.
- Sweep cheap 3×/jour (`0 13,16,20 * * 1-5` UTC = 9h/12h/16h Montréal).

## n8n

Le flux « Évenox — Canal courriel » crée déjà devis Booqable + brouillons. Grokbot **complète** la file, il ne reconstruit pas n8n.

## Preuve (simple)

Alexandre doit voir **le mail**. Pas un ID. Pas aller dans Gmail.

```
Parti.
À : …
Objet : …

Bonjour …
```

Sinon : `Pas parti. Le brouillon est encore là.`
Interdit : « j’envoie », « c’est parti ». Un vieux SENT sur le fil ne compte pas.
