---
name: evenox-suivi
description: Suivi Évenox ultra-simple. À utiliser pour le courriel du matin, les relances, stop/go d’une séquence, une réponse client, ou la page Aujourd hui.
---

# Suivi Évenox

Alexandre ouvre **une page** et reçoit **un courriel**. Rien d’autre.

## Page et courriel

Une fiche par personne, une après l’autre. Pas de tableau. Pas crowded.

Chaque fiche :

- **Nom** (seul, lisible)
- **Date** de l’event ou du dernier mot
- **Ce qui s’est passé** (1 ligne)
- **À faire** — un verbe + un objet. Lead inbound avec téléphone : **appelle** d’abord, ensuite le devis. Si c’est un devis : « Le dépôt garde le [date]. » Elle a écrit un budget : **oui ou non** pour le montant + ce qu’elle garde. Tu as déjà dit non aux heures : **dis tes heures**, pas le devis refusé. Jamais « réponds à ce qu’elle a écrit ». Jamais « just checking in ».
- **Objet :** seulement si le prochain envoi est un premier devis — `Devis [date] — [lieu]`. Pas « Devis Evenox », pas « following up ».
- **Dis :** seulement si l’action est un appel — deux phrases (date, puis dépôt). Gabarit `appel-inbound.md`.
- **Si pas de réponse :** même message en **texto** + envoie le devis le matin même. Ne pas attendre un rappel.
- **Booqable** si une commande existe. Sinon : « Pas de commande Booqable ».
- Téléphone sur la fiche seulement si l’action est un appel.

Un seul lien Notion : la page [Aujourd hui](https://app.notion.com/p/3d031d285ea681309e1afbc591262304). Jamais un lien Pipeline par client.

En haut : **Qui doit bouger ?** puis **Commence par [nom]** — inbound du jour d’abord, ensuite la date la plus proche / le oui-non argent, pas un plus gros $ plus loin. Les 3 **ce matin**, un verbe chacun.

Sections, une fiche après l’autre :

- **C’est à toi — ce matin** — inbound 24 h, ou event dans les 3 semaines. Max 3 noms.
- **Après** — devis dus, event plus loin (décembre). Pas le premier regard.
- **Si tu dis OUI** — une relance, seulement les silencieux pas payés. Question : « je garde le [date] ? »
- **On attend** — eux doivent revenir
- **An passé** — « vous le refaites ? » seulement si **fenêtre** (saison dans 8–12 semaines) : une fiche. **trop tôt** = une ligne groupée, pas une fiche chacun.

Étiquettes enfant : **en premier** / **appelle** / **ce matin** / **après** / **c’est à toi** / **elle a écrit** / **pas payé** / **on attend** / **fenêtre** / **trop tôt**

Journal des ajouts : `obsidian/Journal-nuit.md`. Un ajout par passage. Pas de CRM.

Fin : Réponds **OUI**, **NON** ou **sauf [nom]**.

Ne jamais relancer quelqu’un qui a déjà écrit, déjà payé, ou à qui Alexandre doit encore quelque chose.

## Sources

1. Notion **Suivis** — `collection://e5929c01-4c1d-4f5f-8741-ec76e89034af`
2. Notion **Pipeline Evenox** — `collection://6dee44fa-5d02-413c-9adc-0d5a1d295ae2`
3. Page **Aujourd hui** — https://app.notion.com/p/3d031d285ea681309e1afbc591262304
4. Booqable — `https://evenox.booqable.com/orders/{id}` ou `?q={numéro}`
5. Gmail `evenox.ca@gmail.com`
6. Vault `obsidian/`

## Branding

- Violet `#5E17EB`, fond `#FAF9FF`, texte `#2B2242`
- Logo : https://evenox.ca/wp-content/uploads/2025/01/Creation-sans-titre-13.png
- Ton : premium, accessible. Interdit : cheap, promo, discount

## Répondre

- **OUI** — envoyer les relances du jour
- **NON** — n’envoyer rien
- **sauf [nom]** — tout sauf cette personne
- **stop [nom]** — arrêter cette personne
- **go [nom]** — reprendre

## Règles dures

- Jusqu’au **10 septembre 2026** : aucun envoi client sans **OUI**.
- À partir du **11 septembre 2026** : envoyer le gabarit, noter Envoyé.
- Deux portes (interne) : dépôt déjà fait = on n’écrit pas. Conversation récente = on n’écrit pas.
- J+7 = appel dans le courriel. Jamais avant 7 jours. Si OUI pour un J+7 : **appelle**, n’écris pas.
- Perdu (SP Canada, Juliana) : ne plus écrire, ne pas lister.
- An passé : déjà servi. Pas une relance, sauf **OUI** pour un nom.
- Après un envoi réel seulement : mettre à jour Pipeline + `obsidian/Clients/`.

## Courriel du matin

À `evenox.ca@gmail.com`. Même fiches que la page. Un bouton Notion : Aujourd hui.

Objet : `[SUIVI] AAAA-MM-JJ`

## Gabarits

- `obsidian/Gabarits/devis-premier.md` — premier envoi : une action, le dépôt garde la date
- `obsidian/Gabarits/appel-inbound.md` — lead du jour : deux phrases
- `obsidian/Gabarits/relance-j2.md`
- `obsidian/Gabarits/relance-j4.md`
- `obsidian/Gabarits/appel-j7.md`
