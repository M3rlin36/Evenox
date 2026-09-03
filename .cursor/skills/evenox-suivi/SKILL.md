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
5. Gmail `evenox.ca@gmail.com`
6. Vault `obsidian/` (même contenu, pour Obsidian)

## Règles dures

- Jusqu’au **10 septembre 2026** : aucun envoi client sans OK (réponse au courriel du matin).
- À partir du **11 septembre 2026** : envoyer le gabarit, noter Envoyé, avancer l’étape.
- Client répond → Séquence `Pause`, Étape `Répondu`, carte Type `Réponse client`, lien Gmail. Stop relance.
- `stop [n]` = Séquence Stop. `go [n]` = Séquence On, étape suivante.
- J+7 = **appel** dans le courriel du matin. Jamais avant 7 jours.
- Devis < 800 $ : relance courriel seule (sauf l’appel J+7).
- Ne pas inventer un prix. Ton premium, clé en main. Interdit : cheap, promo, discount.
- Après un envoi réel seulement : `Prochaine relance` + `Étape suivi` + fichier `obsidian/Clients/`.

## Courriel du matin

À `evenox.ca@gmail.com`.

Objet : `[SUIVI] AAAA-MM-JJ — X à valider · Y aujourd hui · Z demain`

1. Aujourd hui
2. Demain
3. Grosses factures (≥ 800 $)
4. Compteurs (On / envoyés / à faire / Pause)
5. Liste numérotée à valider
6. Appels J+7
7. Réponses clients (lien Gmail)

Fin : `Réponds : 1 3 7  ·  tout  ·  non 4  ·  stop 2  ·  go 5`

## Gabarits

- `obsidian/Gabarits/relance-j2.md`
- `obsidian/Gabarits/relance-j4.md`
- `obsidian/Gabarits/appel-j7.md`
