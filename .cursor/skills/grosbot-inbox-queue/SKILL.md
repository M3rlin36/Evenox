---
name: grosbot-inbox-queue
description: File Grokbot / Cerveau selon Nate Herk. Courriels, Grokbot, Dispatch inbox, ou quand Alexandre dit que Grokbot oublie des mails.
---

# Grokbot — 2 modes (simple)

**Seul** (timer 9 h / 12 h / 16 h) : étiquette + brouillon RAPIDE. Devis seulement si déjà dans le fil. Slack `N à valider. Dis envoie.` **0 envoi.**
**Toi** : `envoie` → ça part (`Parti.` / `Pas parti.`).

Alexandre ne surveille pas. Courriel entre → `decide_arrival` (brouillon ; devis si déjà dans le fil). 0 Booqable, 0 Drive, 0 PDF. `ok` / `go` = 0.

Vidéo Nate : https://www.youtube.com/watch?v=4hKJ9X6rGFo

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

**Étiqueter avant de promettre.** Dual-write `Grok-File` **et** `NOX-À-traiter`. Laisser unread. Un En-cours à la fois. Jusqu’à **3 voies RAPIDES** + **1 LENT** par run (claim → brouillon → close → next). Urgent / acompte avant un nouveau lead.

**Brouillon ≠ reçu.** `finish` n’écrit plus `NOX-Processed`. Reçu = `Grok-Envoyé` + `Parti.` Le client n’a rien tant que ce n’est pas SENT.

## Voie rapide (gagne sur process.md E)

Défaut **RAPIDE**. Ne pas relire `process.md` / `entreprise.md` / `regles.md` à chaque run.

- n8n `Nouveau lead` / `Brouillon IA` / lien `booqable.com` = RAPIDE. **0 clic Booqable.**
- Brouillon Gmail **avant** le PDF. `[PRIX À CONFIRMER]` OK. Jamais inventer un prix.
- STOCK seulement si items clairs **et** pas de n° devis, **en parallèle**, jamais bloquant.
- Cloud : pas de `BOOQABLE_API_TOKEN` → une ligne à Alex, ne pas ouvrir Booqable.
- Internes (`Nouvelle soumission` / `Devis abandonne`) : `close_interne` (Processed, 0 mail, pas Skip, pas Brouillon IA).
- Courriel + STOCK en parallèle = OK. Jamais les 11. Jamais attendre le PDF.

## Requêtes autorisées (noms Gmail, pas Label_19)

1. File : `{label:Grok-File label:NOX-À-traiter} -label:NOX-Processed -label:Grok-En-cours -label:NOX-En-cours`
2. En cours : `{label:Grok-En-cours label:NOX-En-cours} -label:NOX-Processed`
3. Urgent Nate (nouveau seulement) : `in:inbox label:NOX-URGENT newer_than:2d -label:NOX-Processed -label:NOX-Spam`
4. Triage / **veille** (max 8, **même si File n’est pas vide**) : `CATCHUP_QUERY` = inbox `newer_than:2d` sans File/Processed/Spam. En-têtes, `grosbot.classify` → File + type Nate, ou `NOX-Spam`.
5. **Filet leads** (toujours, à part) : `LEAD_NET_QUERY` = site + WeddingWire + webshop Booqable `newer_than:14d` **sans File**. Max 8. Ça rattrape un client caché derrière 8 pubs.
6. **Filet 14 j tous courriels** : `UNANSWERED_QUERY` (inbox 14 j sans File / Processed / Spam / Sent / Brouillon IA). Max 20 en-têtes. `classify` → File ou `NOX-Spam`. C’est le filet « toutes les courriels vont être répondues ».
7. Une ligne `Veille : 0 oublié.` / `Veille : N rattrapé(s). …` / **`Veille : pas faite.`** si Gmail plante. Jamais un faux `0 oublié`. Slack DM Evenox (`U0996M8QRFT`) si pas faite.
8. Leads site : `from:wordpress@evenox.ca newer_than:14d` (sujets Nouveau lead / Nouvelle soumission)

**Interdit :** `is:unread` seul. **Interdit :** relire l’inbox entière. **Interdit :** boucle 15/30 min. Sweep cheap 3×/jour **tous les jours** (week-end inclus). **Le matin : toujours la veille**, même si File est pleine.
**Interdit** de dire `QUEUE VIDE` s’il reste un trou : `UNANSWERED_QUERY` ou File sans brouillon ou `SEND_QUERY`. Seulement si `sweep_closed`.

`search_threads` MCP matche le **nom** du libellé (`Grok-File`), pas `label:Label_19`.

## Run (ordre Nate)

1. **Veille (toujours, même si File n’est pas vide)** : `CATCHUP_QUERY` (headers, max 8) → dual-write File ou Spam. En-tête le plus récent > 2 j = faux positif Gmail, skip. Dernier message = SENT Evenox → déjà répondu, ne pas File.
2. **Filet leads** : `LEAD_NET_QUERY` (headers, max 8). Dual-write File + `Soumission`. Site + WeddingWire + webshop. Ça ne dépend pas des 8 pubs du CATCHUP.
2b. **Filet 14 j** : `UNANSWERED_QUERY` (max 20). `classify` → File ou Spam. Dernier = SENT Evenox → ne pas File (`needs_reply`).
3. Si `search_threads` plante : **retry 1 fois**. Encore down → `Veille : pas faite.` + Slack DM Evenox. **Interdit** de dire `0 oublié`.
4. Une ligne `Veille : …`.
5. Toujours `release_stuck` sur un En-cours coincé, puis urgent / claim.
6. Urgent query. S’il y a un `NOX-URGENT` non processed : c’est le dossier.
7. Internes n8n (`Nouvelle soumission` / `Devis abandonne`) : `close_interne` (Processed, 0 mail).
8. `claim_next` : jusqu’à `draft_cap_this_run` (3, ou 8 si `réponds à tous` / `vide la file`). Dual-write En-cours, retirer File + alias.
9. Voie RAPIDE : lire le fil, **brouillon Gmail tout de suite**. 0 Drive. 0 Booqable. 0 PDF. Si n8n / `Brouillon IA` / lien Booqable déjà là : montrer ça.
10. Voie LENTE : brouillon avec `[PRIX À CONFIRMER]` **en parallèle** d’une ligne « Alex : crée le devis ». Interdit d’attendre le PDF.
11. Fermer le brouillon : `Brouillon IA` seulement. **Pas** `NOX-Processed`. Le client n’a rien reçu.
12. File `SEND_QUERY` seulement si `envoie` (`should_auto_send`). **Timer = 0 envoi.**
13. Après chaque envoi : `send_message` + `get_thread` **même tour**. `Parti.` + À + Objet + texte, ou `Pas parti.` + 1 retry.
14. Une ligne `rituel_line`. Timer : Slack `N à valider. Dis envoie.`

## 2 modes

Code : `grosbot/rituel.py`, `grosbot/intake.py`. Doc : `docs/auto-rituel.md`.

- Timer = watch. Brouillon. Devis si `has_ready_quote`. Slack. **0 send_message.**
- `envoie` = ça part. Le reste des mots (`vide la file`, etc.) marche encore, on ne les enseigne plus.
- `ok` / `go` = 0. Une question longue ≠ envoi.

## Si ça bloque

Arrêter Booqable/Drive/PDF tout seul. `release_stuck`. Jamais `update_draft`. « j’envoie » sans `Parti.` = échec.

## Coût

- Filtres Gmail (Alarm.com → `NOX-Spam`, Skip Inbox) = gratuit. MCP `create_filter` = 403 : recettes dans `grosbot/filters.py`.
- Triage = règles, pas un LLM.
- 3 brouillons RAPIDE / run + 1 LENT. Envois seulement après `envoie`. Timer = 0 envoi.
- Rapport vendredi = `list_labels` (`grosbot.report`), jamais un scan de fils.
- Sweep cheap 3×/jour **tous les jours** (`0 13,16,20 * * *` UTC = 9h/12h/16h Montréal). Veille + filet leads. Toujours, même si File n’est pas vide. Gmail down → `Veille : pas faite.` + Slack.

## n8n + doublons

Le flux « Évenox — Canal courriel » crée déjà devis Booqable + brouillons. Grokbot **complète** la file, il ne reconstruit pas n8n.

n8n n’écrit **pas** `Grok-File`. Filet + filtre Gmail `Nouveau lead` / WeddingWire = le trou.

1 personne = souvent 3 fils (`Nouveau lead` + `Nouvelle soumission` + `Devis abandonne`). **Un** mail client, sur le `Nouveau lead`. En claim : `NOX-Processed` sur les deux internes (même nom). 0 mail à `vente@`. `update_draft` casse le fil → `create_draft` + `replyToMessageId`.

## Situations (réponse)

Voir Cerveau. Extra après dépôt = accusé + stock réel, 0 prix tapé. Dernier = SENT Evenox → silence. Hold = 0 envoi. `Brouillon IA` déjà là = celui-là.

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
