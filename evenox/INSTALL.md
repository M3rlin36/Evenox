# Déployer le formulaire tables et chaises

Evenox n’est pas dans ce dépôt : le site live est WordPress / Divi sur [evenox.ca](https://evenox.ca). Ce dossier livre un plugin à coller par-dessus, comme Locabris.

## Déjà en ligne

Le plugin **Evenox Formulaire** 1.0.0 est activé sur evenox.ca (août 2026). Ouvrir https://evenox.ca/location-tables-chaises/ et descendre au calculateur.

Pour une mise à jour : re-téléverser le zip (écraser) puis vider LiteSpeed.

## Voie rapide

1. Générer le zip : `evenox/plugin/pack.sh`
2. WordPress → Extensions → Ajouter → Téléverser `plugin/evenox-formulaire.zip`
3. Si le plugin existe déjà : remplacer / écraser.
4. Activer **Evenox Formulaire**.
5. Vider le cache LiteSpeed (ou l’équivalent).
6. Ouvrir https://evenox.ca/location-tables-chaises/

Le header et le footer Divi restent. Le plugin remplace seulement le bloc calculateur (`#calculateur` / `.tc-calc`).

Les forfaits, la galerie et la FAQ sous le formulaire restent en place.

## Envoi des soumissions

Le formulaire réutilise le pipeline déjà en place :

- `admin-ajax.php` action `evx_soumission`
- nonce `window.evx_nonce` (fourni par le site)
- courriel vers evenox.ca@gmail.com

Aucun nouveau webhook Zapier.

En preview locale (`evenox/preview/`), `window.EVENOX_PREVIEW=true` : aucun envoi.

## Rollback

Désactiver le plugin. L’ancien calculateur Divi réapparaît.

## Test après activation

1. 48 invités → Livraison → J7E → chaise blanche → table 60 po → nappe blanche → 2 cocktail → champs vides = erreur inline. Pas de merci avant envoi.
2. Preview : le bouton « Recevoir ma soumission » affiche Merci sans appeler WordPress.
3. Couleurs : violet Évenox `#5E17EB`, pas le bleu Locabris.
