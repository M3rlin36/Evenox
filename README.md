# Evenox

Location événementielle.

Le site et les agents Cursor vivent ici. L’opération (Pipeline, Cerveau / Grokbot, relances) vit dans Notion + Gmail.

Grokbot / Cerveau = **Patron Evenox**. 3 directeurs dispatchent 11 travailleurs. Jamais 11 en parallèle. Description : `docs/patron-evenox.md`.

## Grokbot — file courriels

Grokbot (Cerveau / Patron Evenox) ne doit plus « se souvenir » des mails dans le chat. La file est dans Gmail, calquée sur Nate Herk ([vidéo](https://www.youtube.com/watch?v=4hKJ9X6rGFo)) : libellé `Grok-File` + `NOX-À-traiter` → `Grok-En-cours` → `NOX-Processed`, types `NOX-URGENT` / `Soumission` / `Grok-Livraison` / `Grok-Acompte`. L’agent est Grok / Grokbot ; les libellés Gmail disent Grok, jamais GROS.

Voir `grosbot/` et `.cursor/skills/grosbot-inbox-queue/SKILL.md`.
