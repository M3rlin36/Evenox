---
name: grosbot-inbox-queue
description: File Grosbot / Cerveau. À utiliser pour les courriels entrants, Grok Bot, Dispatch inbox, ou quand Alexandre dit que Grosbot oublie des mails.
---

# Grosbot — ne pas oublier un courriel

Grosbot (Cerveau / Dispatch / Grok) n’a **pas** de mémoire. La file, c’est Gmail.

## Pourquoi il oubliait

- Scan de `is:unread` (~20 000 fils). Tokens brûlés sur Alarm.com / pubs.
- Il listait 5 dossiers dans le chat, puis le contexte les écrasait.
- Dispatch disait « exactement 3 brouillons » : le 4e disparaissait.
- Rien n’était étiqueté **avant** de dire « je m’en occupe ».

## Règle d’or

**Étiqueter avant de promettre.** Si tu dis que tu vas répondre à un fil, `GROS-File` (alias `NOX-À-traiter`) est déjà dessus. Sinon tu l’as déjà oublié.

## Libellés (evenox.ca@gmail.com)

| Libellé | Rôle |
|---|---|
| `GROS-File` (`Label_19`) | Promis / à traiter. Liste canonique. |
| `NOX-À-traiter` (`Label_22`) | Synonyme de `GROS-File`. Les deux comptent. |
| `GROS-En-cours` / `NOX-En-cours` | Ce run, ce dossier. Max 1. |
| `GROS-Skip` | Vu, on n’écrit pas (hold, perdu, acompte payé). |
| `NOX-Processed` | Brouillon fait **ou** skip fermé. Ne plus rescanner. |
| `NOX-Spam` | Alarm.com, pubs, GitHub, newsletters. |
| `Brouillon IA` | Brouillon montré à Alexandre, en attente de **envoie**. |

## Requêtes autorisées

1. File : `{label:GROS-File label:NOX-À-traiter} -label:NOX-Processed`
2. En cours : `{label:GROS-En-cours label:NOX-En-cours} -label:NOX-Processed`
3. Triage (max 8) : `in:inbox newer_than:3d -label:NOX-Processed -label:NOX-Spam -label:GROS-File -label:NOX-À-traiter`
4. Leads site : `from:wordpress@evenox.ca newer_than:14d` (sujets Nouveau lead / Nouvelle soumission)

**Interdit :** `is:unread` seul. **Interdit :** relire l’inbox entière. **Interdit :** un agent Cloud en boucle serrée (toutes les 15 min). Un sweep cheap 3×/jour (file vide = stop immédiat) est OK.

## Run (ordre)

1. S’il reste un `GROS-En-cours` : **finir celui-là**. Pas de nouveau dossier.
2. Triage cheap (en-têtes seulement, module `grosbot.classify`) → `GROS-File` ou `NOX-Spam`. Max 8.
3. `claim_next` : 1 fil. Passer `GROS-File` → `GROS-En-cours`.
4. Lire **tout** ce fil. Un message Alexandre = un dossier (Nom / Date / Client veut / Fait / Action).
5. Brouillon seulement. Jamais d’envoi sans **envoie**.
6. Fermer : `NOX-Processed` + `Brouillon IA` (ou `GROS-Skip` + `NOX-Processed`).
7. S’il reste des `GROS-File` : une ligne « file : N restants ». Stop. Le prochain run les prend.

## Coût

- Filtres Gmail (Alarm.com → `NOX-Spam`) = gratuit, automatique.
- Triage = règles, pas un LLM.
- 1 brouillon / run. Le reste attend dans `GROS-File` (0 token).
- Sweep cheap 3×/jour (`0 13,16,20 * * 1-5` UTC = 9h/12h/16h Montréal). File vide = `QUEUE VIDE` et stop. Pas de boucle 15 min.

## n8n

Le flux « Évenox — Canal courriel » crée déjà devis Booqable + brouillons. Grosbot **complète** la file, il ne reconstruit pas n8n.
