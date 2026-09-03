---
name: evenox-suivi
description: Suivi Évenox ultra-simple. À utiliser pour le courriel du matin, les relances, stop/go d’une séquence, une réponse client, ou la page Aujourd hui.
---

# Suivi Évenox

Alexandre ouvre **une page** et reçoit **un courriel**. Rien d’autre.

## Sources

1. Notion **Suivis** — `collection://e5929c01-4c1d-4f5f-8741-ec76e89034af`
2. Notion **Pipeline Evenox** — `collection://6dee44fa-5d02-413c-9adc-0d5a1d295ae2`
3. Page **Aujourd hui** — https://app.notion.com/p/3d031d285ea681309e1afbc591262304
4. Skill Notion — https://app.notion.com/p/3d031d285ea6811c8b23d5f673c0c231
5. Guide de marque — https://app.notion.com/p/30731d285ea681d4b5eec02570245e8c
6. Gmail `evenox.ca@gmail.com`
7. Vault `obsidian/`

## Branding

- Violet `#5E17EB`, fond `#FAF9FF`, texte `#2B2242`
- Logo : https://evenox.ca/wp-content/uploads/2025/01/Creation-sans-titre-13.png
- Ton : premium, accessible, une seule question. Interdit : cheap, promo, discount

## Répondre (4 mots, pas de numéros)

- **OUI** — envoyer les relances du jour
- **NON** — n’envoyer rien
- **sauf [nom]** — tout sauf cette personne
- **stop [nom]** — arrêter cette personne
- **go [nom]** — reprendre

## Règles dures

- Jusqu’au **10 septembre 2026** : aucun envoi client sans **OUI**.
- À partir du **11 septembre 2026** : envoyer le gabarit, noter Envoyé.
- Client répond → Séquence `Pause`, Étape `Répondu`, Type `Réponse client`, lien Gmail.
- J+7 = **appel** dans le courriel du matin. Jamais avant 7 jours.
- Devis < 800 $ : relance courriel seule (sauf l’appel J+7).
- **Perdu** (SP Canada, Juliana Garcia, ou si Alexandre le dit) → Statut Perdu, Type Perdu, Séquence Stop. Ne plus écrire.
- **An passé** : clients 2025 déjà servis. Même règle OUI avant d’écrire.
- Grosses factures : toujours remplir **Contexte**.
- Après un envoi réel seulement : `Prochaine relance` + `Étape suivi` + fichier `obsidian/Clients/`.

## Courriel du matin

À `evenox.ca@gmail.com`. HTML branding violet + logo.

Objet : `[SUIVI] AAAA-MM-JJ`

1. Quoi faire (1 phrase)
2. Aujourd hui / Demain
3. Grosses factures + contexte
4. An passé (si à valider)
5. Appels J+7
6. Réponses clients (lien Gmail)

Fin : `Réponds OUI, NON, sauf [nom] ou stop [nom].`

## Gabarits

- `obsidian/Gabarits/relance-j2.md`
- `obsidian/Gabarits/relance-j4.md`
- `obsidian/Gabarits/appel-j7.md`
