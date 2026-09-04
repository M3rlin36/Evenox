# File d'attente courriels Grokbot (Nate Herk)

Vidéo : [Nate Herk — Grokbot](https://www.youtube.com/watch?v=4hKJ9X6rGFo)

L’agent s’appelle **Grokbot**. Le libellé Gmail reste `GROS-File` (déjà créé — on ne le renomme pas).

Nate ne nettoie pas 5 200 unread. Il étiquette le courriel client, il ne draft que l’urgence, il n’envoie rien tant qu’il n’a pas dit send, et un check vide = no actions. Même chose ici, sur Evenox.

Skill Notion : [File d’attente courriels Grokbot](https://app.notion.com/p/3d131d285ea681ce8dcece11dba1889c)
Cerveau : [répondre aux courriels](https://app.notion.com/p/3d131d285ea681bc9cb4e1756d622fb2)
Drive : `file-attente.md` dans [Obsidian — Contexte agents](https://drive.google.com/drive/folders/155w3hoR-tyERqLAHwcoDQ5Yzq0fsbWbe) — [fichier](https://drive.google.com/file/d/1cp8Nme5jv789FlG-ksyIJ3_vXwlqVDL6/view)

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
| Needs you (file) | `GROS-File` + `NOX-À-traiter` (dual-write) | `Label_19` + `Label_22` |
| Quote | `Soumission` | `Label_2` |
| Schedule | `GROS-Livraison` | `Label_24` |
| Billing | `GROS-Acompte` | `Label_25` |
| Ignore | `NOX-Spam` | `Label_4` |
| In progress | `GROS-En-cours` + `NOX-En-cours` | `Label_20` + `Label_23` |
| Done | `NOX-Processed` | `Label_5` |
| Draft waiting | `Brouillon IA` | `Label_17` |

Les synonymes GROS/NOX restent. Chaque mutation de file écrit **les deux**. Canon file = libellé `GROS-File`. Canon agent = Grokbot.

## Règle d'or

1. Étiqueter **avant** de dire « je vais répondre ».
2. Un run = **un** dossier. Urgent / acompte avant un nouveau lead.
3. File vide = une recherche, `QUEUE VIDE`, **stop**.
4. MCP `search_threads` : `label:GROS-File` (nom), pas `label:Label_19`.
5. Ne jamais marquer lu.

## Requêtes cheap

```
{label:GROS-File label:NOX-À-traiter} -label:NOX-Processed -label:GROS-En-cours -label:NOX-En-cours
{label:GROS-En-cours label:NOX-En-cours} -label:NOX-Processed
in:inbox label:NOX-URGENT newer_than:2d -label:NOX-Processed -label:NOX-Spam
in:inbox -label:NOX-Processed -label:NOX-Spam -label:GROS-File -label:NOX-À-traiter newer_than:2d
```

Découverte = sujet + expéditeur. Corps seulement après claim.

## Filtres Gmail (MCP 403)

`create_filter` / `list_filters` = 403 sur cet agent. Recettes dans `grosbot/filters.py`. À coller dans Gmail → Paramètres → Filtres :

- `from:(notifications@alarm.com)` → `NOX-Spam`, Skip Inbox
- `from:(notifications@github.com)` → `NOX-Spam`, Skip Inbox
- `from:(promo@promo.timhortons.ca)` → `NOX-Spam`, Skip Inbox
- `from:(wordpress@evenox.ca) subject:(Nouveau lead)` → `GROS-File` + `Soumission` (rester inbox)

## Coût

Cher = 20k unread, 15 fils ouverts, 8 brouillons, tout oublier.

Pas cher = 1 recherche file. Vide → stop. Plein → 1 dossier. Rapport = `list_labels`.

n8n « Évenox — Canal courriel » crée déjà des devis / brouillons. Si `Brouillon IA` est déjà là : montrer le brouillon vivant, ne pas dupliquer.
