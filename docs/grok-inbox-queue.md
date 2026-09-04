# File d'attente courriels Grok

Grok / Cerveau = **Patron Evenox**. Courriel = TRI (0 envoi). 3 directeurs dispatchent 11 travailleurs — **jamais les 11 en parallèle**. Description : `docs/patron-evenox.md`.

Grok oublie les courriels qu'il a dit « je vais répondre » parce que la liste vit dans le chat. Le chat n'est pas une file. **Gmail l'est.**

Skill Notion : [File d'attente courriels Grok](https://app.notion.com/p/3d131d285ea681ce8dcece11dba1889c)
Cerveau : [répondre aux courriels](https://app.notion.com/p/3d131d285ea681bc9cb4e1756d622fb2)
Drive : `file-attente.md` dans [Obsidian — Contexte agents](https://drive.google.com/drive/folders/155w3hoR-tyERqLAHwcoDQ5Yzq0fsbWbe)

## Règle d'or

1. Avant de dire « je vais répondre », étiqueter le fil `NOX-À-traiter`.
2. Un run = **un** dossier. Jamais « je fais les 8 après ».
3. File vide = une recherche, `QUEUE VIDE`, **stop**. Pas de Notion, pas de Booqable, pas de rapport.

## Libellés (`evenox.ca@gmail.com`)

| Libellé | ID | Rôle |
|---|---|---|
| `GROS-File` | `Label_19` | File canonique. |
| `NOX-À-traiter` | `Label_22` | Synonyme. Les deux comptent. |
| `GROS-En-cours` / `NOX-En-cours` | `Label_20` / `Label_23` | Claim. Un seul à la fois. |
| `GROS-Skip` | `Label_21` | Vu, on n'écrit pas. |
| `NOX-Processed` | `Label_5` | Terminé (brouillon, skip, ou ignoré). |
| `NOX-Spam` | `Label_4` | Alarm.com, pubs, newsletters. |
| `Brouillon IA` | `Label_17` | Un brouillon vivant existe. Ne pas en créer un 2e. |
| `NOX-URGENT` | `Label_15` | Client qui attend (réponse, lien d'acompte). |

## Requêtes cheap

Ne jamais rescanner les ~20k unread.

```
{label:GROS-File label:NOX-À-traiter} -label:NOX-Processed
{label:GROS-En-cours label:NOX-En-cours} -label:NOX-Processed
in:inbox -label:NOX-Processed -label:NOX-Spam -label:GROS-File -label:NOX-À-traiter newer_than:2d
```

Découverte = sujet + expéditeur seulement. Ouvrir le corps seulement après claim.

## Coût

Cher = relire 20k courriels, ouvrir 15 fils, rédiger 8 brouillons, tout oublier, recommencer.

Pas cher = 1 recherche file. Vide → stop. Plein → 1 dossier.

Jusqu'au 10 septembre 2026 : **brouillon seulement**. Jamais `send_message` sans le mot `envoie` d'Alexandre.

n8n « Évenox — Canal courriel » crée déjà des devis / brouillons. Si `Brouillon IA` est déjà là : montrer le brouillon vivant, ne pas dupliquer.

Dispatch matin = exactement 3 brouillons, **mais** les autres fils ventes du scan reçoivent `NOX-À-traiter` avant de s'arrêter.
