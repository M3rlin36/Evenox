# Évenox

Location événementielle — Laval / Rive-Nord / Montréal.

## Patron Evenox (Grokbot / Cerveau)

Décide. 3 directeurs (Ventes, Ops, Acquisition) dispatchent 11 travailleurs. **2 en parallèle OK (Courriel + STOCK). JAMAIS les 11.**

Kit : Booqable=STOCK (seul API/prix/PDF) ; Soumission=DEVIS (PDF Booqable seulement, 0 détail tapé) ; Livraisons=ROUTE ; Courriel=TRI (0 envoi) ; Relance=skill ; Ads=Google Ads ; SITE=evenox.ca.

Client demande un prix = devis Booqable dans le système (Pipeline Notion + stock). Timer = 0 envoi. Rituel / `envoie` = go. Brief lun–ven 9h. Alertes chaud → Twilio. Style ultra-court. Jamais `.env`.

Texte à coller dans Grokbot : `docs/patron-evenox.md`.

## Où vit le vrai système

Le repo est le code. L’opération vit dans Notion + Gmail + Drive.

- Hub : **Évenox Opérations Été 2026**
- Inbox ventes : `evenox.ca@gmail.com`
- Cerveau / Grokbot : Drive `Obsidian — Contexte agents` + page Notion Cerveau

## Grokbot — courriels (obligatoire)

Nom canon de l’agent : **Grokbot** / **Grok**. Libellés Gmail : `Grok-File`, `Grok-En-cours`, `Grok-Skip`, `Grok-Livraison`, `Grok-Acompte`, `Grok-Envoyé`. Jamais GROS.

Grokbot oublie les mails s’il les garde dans le chat. La file = libellés Gmail.

Charger `.cursor/skills/grosbot-inbox-queue/SKILL.md` pour tout courriel entrant, Grokbot, Dispatch inbox, ou « réponds à ça ».

Nate Herk ([vidéo Grokbot](https://www.youtube.com/watch?v=4hKJ9X6rGFo)) : étiqueter par type, ne pas nettoyer 20k unread, drafts jusqu’à **envoie**, check vide = stop.

- Dual-write `Grok-File` **et** `NOX-À-traiter` avant de promettre.
- Types Nate : `NOX-URGENT` / `Soumission` / `Grok-Livraison` / `Grok-Acompte` / `NOX-Spam`.
- Un En-cours à la fois. Jusqu’à **3 brouillons RAPIDE** + **1 LENT** par run. Urgent / acompte avant un nouveau lead.
- Courriel + STOCK en parallèle = OK. **Jamais attendre le PDF.**
- Brouillon **avant** le PDF. n8n / `Brouillon IA` / lien Booqable = RAPIDE, 0 clic Booqable. `[PRIX À CONFIRMER]` OK.
- Ne pas relire `process.md` / `entreprise.md` / `regles.md` à chaque run. `docs/voie-rapide.md` gagne.
- Cloud : pas de `BOOQABLE_API_TOKEN` → une ligne à Alex, ne pas ouvrir Booqable.
- Brouillon ≠ reçu. `NOX-Processed` seulement après `Parti.` / skip / interne. File `SEND_QUERY`.
- **Rituel auto** (`grosbot/rituel.py`) : `fais le rituel` / `vide la file` / `voie rapide` / `débloque` = débloque + brouillons + envoi + 1 retry **même tour**.
- Timer `[grok-inbox-queue-cheap]` : brouillons seulement + Slack `slack_ready_line`. **0 send_message**.
- Mots d’envoi seul : `envoie` / `envoie-les` / `envoie les brouillons` / `envoie tout`. `ok` / `go` = 0 envoi.
- Filet 14 j `UNANSWERED_QUERY`. Interdit `QUEUE VIDE` s’il reste un trou. Une ligne `Couverture : …`.
- MCP cherche `label:Grok-File` (nom), pas `label:Label_19`.
- Ne jamais scanner `is:unread`. File vide = `QUEUE VIDE`. Pas de boucle 15/30 min.
- Matin : routine **veille**. Catch-up `newer_than:2d` **même si File n’est pas vide**. Filet leads (site + WeddingWire) à part. Une ligne `Veille : 0 oublié.` / `N rattrapé(s).` / **`Veille : pas faite.`** si Gmail plante (jamais un faux 0). Slack DM Evenox.
- Laisser unread. Jamais d’envoi client sans rituel / **envoie**. Timer = 0 envoi.
- Jamais « j’envoie ». Après envoi : coller `Parti.` + À + Objet + le texte. Sinon `Pas parti. Le brouillon est encore là.` Pas d’ID.

Triage cheap : `python -m pytest grosbot/tests`.

## Règles agent

- Français, tutoiement avec Alexandre.
- Ton client : premium, jamais cheap / promo / discount.
- Ne pas inventer de prix.
- Ne pas committer de données clients (courriels, téléphones, montants de deals) dans git.
