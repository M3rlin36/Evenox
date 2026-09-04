# Évenox

Location événementielle — Laval / Rive-Nord / Montréal.

## Patron Evenox (Grokbot / Cerveau)

Décide. 3 directeurs (Ventes, Ops, Acquisition) dispatchent 11 travailleurs. **JAMAIS les 11 en parallèle.**

Kit : Booqable=STOCK (seul API/prix/PDF) ; Soumission=DEVIS (PDF Booqable seulement, 0 détail tapé) ; Livraisons=ROUTE ; Courriel=TRI (0 envoi) ; Relance=skill ; Ads=Google Ads ; SITE=evenox.ca.

Client demande un prix = devis Booqable dans le système (Pipeline Notion + stock). Tout envoi = go Alexandre (`envoie`). Brief lun–ven 9h. Alertes chaud → Twilio. Style ultra-court. Jamais `.env`.

Texte à coller dans Grokbot : `docs/patron-evenox.md`.

## Où vit le vrai système

Le repo est le code. L’opération vit dans Notion + Gmail + Drive.

- Hub : **Évenox Opérations Été 2026**
- Inbox ventes : `evenox.ca@gmail.com`
- Cerveau / Grokbot : Drive `Obsidian — Contexte agents` + page Notion Cerveau

## Grokbot — courriels (obligatoire)

Nom canon de l’agent : **Grokbot** / **Grok**. Libellés Gmail : `Grok-File`, `Grok-En-cours`, `Grok-Skip`, `Grok-Livraison`, `Grok-Acompte`. Jamais GROS.

Grokbot oublie les mails s’il les garde dans le chat. La file = libellés Gmail.

Charger `.cursor/skills/grosbot-inbox-queue/SKILL.md` pour tout courriel entrant, Grokbot, Dispatch inbox, ou « réponds à ça ».

Nate Herk ([vidéo Grokbot](https://www.youtube.com/watch?v=4hKJ9X6rGFo)) : étiqueter par type, ne pas nettoyer 20k unread, drafts jusqu’à **envoie**, check vide = stop.

- Dual-write `Grok-File` **et** `NOX-À-traiter` avant de promettre.
- Types Nate : `NOX-URGENT` / `Soumission` / `Grok-Livraison` / `Grok-Acompte` / `NOX-Spam`.
- 1 dossier à la fois (`Grok-En-cours` + `NOX-En-cours`). Urgent / acompte avant un nouveau lead.
- MCP cherche `label:Grok-File` (nom), pas `label:Label_19`.
- Ne jamais scanner `is:unread`. File vide = `QUEUE VIDE`. Pas de boucle 15/30 min.
- Laisser unread. Jamais d’envoi client sans le mot **envoie** d’Alexandre.

Triage cheap : `python -m pytest grosbot/tests`.

## Règles agent

- Français, tutoiement avec Alexandre.
- Ton client : premium, jamais cheap / promo / discount.
- Ne pas inventer de prix.
- Ne pas committer de données clients (courriels, téléphones, montants de deals) dans git.
