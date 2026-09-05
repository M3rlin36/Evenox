# File d'attente courriels Grokbot (Nate Herk)

Vidéo : [Nate Herk — Grokbot](https://www.youtube.com/watch?v=4hKJ9X6rGFo)

L’agent s’appelle **Grokbot** / **Grok**. Les libellés Gmail de file sont `Grok-File`, `Grok-En-cours`, `Grok-Skip`, `Grok-Livraison`, `Grok-Acompte`, `Grok-Envoyé` (renommés depuis GROS-* le 4 sept 2026 ; IDs inchangés).

Nate ne nettoie pas 5 200 unread. Il étiquette le courriel client, il ne draft que l’urgence, il n’envoie rien tant qu’il n’a pas dit send, et un check vide = no actions. Même chose ici, sur Evenox.

Skill Notion : [File d’attente courriels Grokbot](https://app.notion.com/p/3d131d285ea681ce8dcece11dba1889c)
Cerveau : [répondre aux courriels](https://app.notion.com/p/3d131d285ea681bc9cb4e1756d622fb2)
Drive : `file-attente.md` dans [Obsidian — Contexte agents](https://drive.google.com/drive/folders/155w3hoR-tyERqLAHwcoDQ5Yzq0fsbWbe) — [fichier](https://drive.google.com/file/d/1137MlVLRqS6cBXEelNuWxouu6dqOn4HZ/view)
Drive process : `process.md` — [fichier](https://drive.google.com/file/d/10TG2m5s7ghPaDOS5cVBKQCaNXpCXIjSk/view) (Grokbot / Patron Evenox ; libellé Gmail `Grok-File`)

## Ce que Nate a dit (courriels seulement)

1. Un agent inbox dédié. Grokbot / Cerveau = cet agent. n8n reste le canal devis Booqable.
2. Ne pas nettoyer le vieux tas unread (~20k). La valeur = le prochain urgent ne reste pas assis.
3. Six types client : Emergency, Needs you, Quote, Schedule, Billing, Ignore.
4. Trois habitudes : watch du **nouveau** courrier pour l’urgent ; le reste attend une liste weekday courte ; draft les réponses faciles à partir des docs.
5. Brouillons jusqu’à confiance. Chez Evenox : jamais `send_message` sans le mot **envoie** (verrou jusqu’au 10 sept 2026).
6. Laisser unread. L’humain voit encore le fil.
7. Check vide = « no actions » / `QUEUE VIDE`. Stop.
8. Feedback loop (bike method) : corriger un mauvais libellé, mettre à jour le skill.
9. Rapport vendredi = comptes de libellés, pas un scan de 20k fils (`list_labels`).
10. Pas de boucle 15/30 min sur toute l’inbox. Nate le faisait pour des urgences HVAC. Evenox = sweep cheap 3×/jour. Urgent = `URGENT_QUERY` newer_than:2d.

## Mapping Nate → Evenox

| Nate | Evenox | ID |
|---|---|---|
| Emergency | `NOX-URGENT` | `Label_15` |
| Needs you (file) | `Grok-File` + `NOX-À-traiter` (dual-write) | `Label_19` + `Label_22` |
| Quote | `Soumission` | `Label_2` |
| Schedule | `Grok-Livraison` | `Label_24` |
| Billing | `Grok-Acompte` | `Label_25` |
| Ignore | `NOX-Spam` | `Label_4` |
| In progress | `Grok-En-cours` + `NOX-En-cours` | `Label_20` + `Label_23` |
| Done | `NOX-Processed` | `Label_5` |
| Draft waiting | `Brouillon IA` | `Label_17` |
| Sent (proved) | `Grok-Envoyé` | `Label_26` |

Les synonymes Grok/NOX restent. Chaque mutation de file écrit **les deux**. Canon file = libellé `Grok-File`. Canon agent = Grokbot. Pas de GROS dans les libellés Gmail.

## Règle d'or

1. Étiqueter **avant** de dire « je vais répondre ».
2. Un run = **un** dossier. Urgent / acompte avant un nouveau lead.
3. File vide = une recherche, `QUEUE VIDE`, **stop**.
4. MCP `search_threads` : `label:Grok-File` (nom), pas `label:Label_19`.
5. Ne jamais marquer lu.
6. Jamais « j’envoie ». Preuve = coller le mail (`Parti.` + À + Objet + texte). Sinon `Pas parti. Le brouillon est encore là.` Pas d’ID. Pas aller dans Gmail.
7. Matin : **veille**. Catch-up `newer_than:2d` même si File n’est pas vide. Filet leads (site + WeddingWire) à part. Une ligne `Veille : 0 oublié.` / `N rattrapé(s).` / `Veille : pas faite.` si Gmail plante (jamais un faux 0).

## Requêtes cheap

```
{label:Grok-File label:NOX-À-traiter} -label:NOX-Processed -label:Grok-En-cours -label:NOX-En-cours
{label:Grok-En-cours label:NOX-En-cours} -label:NOX-Processed
in:inbox label:NOX-URGENT newer_than:2d -label:NOX-Processed -label:NOX-Spam
in:inbox -label:NOX-Processed -label:NOX-Spam -label:Grok-File -label:NOX-À-traiter newer_than:2d
in:inbox newer_than:14d (wordpress/vente Nouveau lead|Nouvelle soumission|Devis abandonne OR weddingwire) -label:Grok-File
```

Découverte = sujet + expéditeur. Corps seulement après claim.

## Filtres Gmail (MCP 403)

`create_filter` / `list_filters` = 403 sur cet agent. Recettes dans `grosbot/filters.py`. À coller dans Gmail → Paramètres → Filtres :

- `from:(notifications@alarm.com)` → `NOX-Spam`, Skip Inbox
- `from:(notifications@github.com)` → `NOX-Spam`, Skip Inbox
- `from:(promo@promo.timhortons.ca)` → `NOX-Spam`, Skip Inbox
- `from:(wordpress@evenox.ca) subject:(Nouveau lead)` → `Grok-File` + `Soumission` (rester inbox)
- `from:(support@weddingwire.ca) subject:(New Lead)` → `Grok-File` + `Soumission` (rester inbox)

## Coût

Cher = 20k unread, 15 fils ouverts, 8 brouillons, tout oublier.

Pas cher = 1 recherche file. Vide → stop. Plein → 1 dossier. Rapport = `list_labels`.

n8n « Évenox — Canal courriel » crée déjà des devis / brouillons. Si `Brouillon IA` est déjà là : montrer le brouillon vivant, ne pas dupliquer.
