---
name: weekly-unreplied-digest
description: Filet Gmail 7 jours. Courriels non répondus, brouillons Grok, digest hebdo à Alexandre. Timer lundi 9h Montréal.
---

# Digest hebdo — courriels non répondus

Alexandre : scan **7 derniers jours**, sans lui. Chaque courriel client non répondu + une réponse déjà prête dans Grok. Digest envoyé à `evenox.ca@gmail.com`. **Jamais** d’envoi client sans le mot **envoie**.

Complète Grokbot (veille `newer_than:2d`). Ici = filet 7 jours, pagination, un digest, brouillons.

## Quand

- Lundi 9h Montréal (`0 13 * * 1` UTC). Timer `weekly-unreplied-digest`.
- Si Alexandre dit « courriels non répondus », « 7 derniers jours », « digest Grok ».

## Requêtes (jamais `is:unread`)

Voir `grosbot.queries` : `WEEKLY_INBOX_QUERY`, `WEEKLY_LEAD_QUERY`, `WEEKLY_DRAFT_QUERY`, `QUEUE_QUERY`.

Paginer `search_threads` (pageSize 50) jusqu’à plus de `nextPageToken`.

## Ordre

1. Inbox 7 j. Headers. `grosbot.classify`. IGNORE = bruit.
2. `get_thread` PLAIN_TEXT seulement si QUEUE / déjà File / lead site.
3. `grosbot.weekly.bucket_thread` :
   - `CLIENT_WAITING` = dernier message live = le client.
   - `LEAD_NO_FIRST_MAIL` = wordpress / WeddingWire / Booqable, pas de SENT Evenox.
   - `WAITING_ON_CLIENT` = dernier message = SENT Evenox. Digest section 3, pas un nouveau brouillon.
4. Grouper les clones (lead + soumission + devis abandonné) par courriel client. Un dossier = un client.
5. `list_drafts` 7 j. Si un brouillon client existe déjà (`Brouillon IA`) : le montrer, **pas un 2e**. Escalade / HOLD / INTERNE = pas prêt à envoyer.
6. Manquant : créer **un** brouillon Grok par client. `to` = le client, jamais wordpress. Dual-write `Grok-File` + `NOX-À-traiter`. `Brouillon IA`. Laisser unread.
7. Pas de prix inventé. `[PRIX À CONFIRMER]` + note Alex sous le texte si Booqable manque.
8. `send_message` du digest **à** `evenox.ca@gmail.com` seulement. Sujet : `[GROK] Non répondus 7 jours — N dossier(s)`. Coller les réponses prêtes.
9. Gmail plante → digest `Grok n'a pas pu lire Gmail. Pas un 0.` Slack DM Evenox. Jamais un faux 0.

## Verrou

Dimanche / jusqu’au 10 sept 2026 : brouillons seulement. Digest interne = OK. Client = uniquement si Alexandre écrit **envoie**.
