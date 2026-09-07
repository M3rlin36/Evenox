# n8n — contrat d’événements (pas le graphe)

Pas d’API n8n ici : contrat seulement. Jamais `send`. Booqable n’est pas dans ce hook.

1. **Trigger** — Gmail `evenox.ca@gmail.com` : nouveau message inbox **ou** label `Grok/A traiter`. Ignorer `Nouvelle soumission` / `Devis abandonné` (0 mail client).
2. **Anti-doublon** — même `threadId` déjà labelé `Grok/Brouillon` ou brouillon vivant → stop.
3. **Appel Grok (1 passe)** — entrée : `GROK.md` + `PROCESSUS.md` + schéma `extraction.json` + corps du **HAUT** + noms/textes PJ. Consigne : remplir une instance, stop dès qu’on peut répondre.
4. **Sortie** — un JSON conforme à `extraction.json` (action, trous, destinataire, cc, texte, `devis.oui`).
5. **Gmail** — `action` ∈ {`devis_auto`,`questions_sans_prix`,`appel`,`questions_ecrites_municipal`} → `create_draft` (À/Cc/texte du JSON, `replyToMessageId` = haut). **Jamais send.** Label `Grok/Brouillon`.
6. **Hold / silence** — `action` = `hold` ou `silence` → 0 brouillon, label interne seulement.
7. **Booqable plus tard** — si `action=devis_auto` **et** Alexandre a tapé **`crée`** (hors n8n, dans le chat Grok) → alors seulement créer le devis. Ce hook ne crée rien.
8. **Envoi** — seulement quand Alexandre tape **`envoie`** sur ce texte (Grok `send_message` + `draftId`). n8n ne send pas.
9. **Municipal** — JSON : À = approvisionnement, Cc = émetteur, `devis.oui=false` tant que OIQ n’est pas tranché / produit disqualifié.
10. **Échec** — JSON invalide ou `invente` fuité dans `brouillon.texte` → pas de brouillon, ping Alexandre.
