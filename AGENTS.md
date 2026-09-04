# Évenox

Location événementielle — Laval / Rive-Nord / Montréal.

## Où vit le vrai système

Le repo est le code. L’opération vit dans Notion + Gmail + Drive.

- Hub : **Évenox Opérations Été 2026**
- Inbox ventes : `evenox.ca@gmail.com`
- Cerveau / Grosbot : Drive `Obsidian — Contexte agents` + page Notion Cerveau

## Grosbot — courriels (obligatoire)

Grosbot oublie les mails s’il les garde dans le chat. La file = libellés Gmail.

Charger `.cursor/skills/grosbot-inbox-queue/SKILL.md` pour tout courriel entrant, Grok, Dispatch inbox, ou « réponds à ça ».

- Étiqueter `GROS-File` (ou `NOX-À-traiter`) **avant** de dire qu’on s’en occupe.
- 1 dossier à la fois (`GROS-En-cours` / `NOX-En-cours`). Max 1 brouillon par run.
- Ne jamais scanner `is:unread` (20k+ fils). File : `{label:GROS-File label:NOX-À-traiter}`.
- Sweep cheap 3×/jour OK. File vide = `QUEUE VIDE` et stop. Pas de boucle 15 min.
- Jamais d’envoi client sans le mot **envoie** d’Alexandre.

Triage cheap : `python -m pytest grosbot/tests`.

## Règles agent

- Français, tutoiement avec Alexandre.
- Ton client : premium, jamais cheap / promo / discount.
- Ne pas inventer de prix.
- Ne pas committer de données clients (courriels, téléphones, montants de deals) dans git.
