# Déployer le formulaire tables et chaises

Evenox n’est pas dans ce dépôt : le site live est WordPress / Divi sur [evenox.ca](https://evenox.ca). Ce dossier livre un plugin à coller par-dessus, comme Locabris.

## Déjà en ligne

Le plugin **Evenox Formulaire** 1.2.0 remplace tout le contenu de `/location-tables-chaises/` (hero + ancien kit compris). La première question apparaît tout de suite, sans défiler.

Pour une mise à jour : re-téléverser le zip (écraser) puis vider LiteSpeed.

## Voie rapide

1. Générer le zip : `evenox/plugin/pack.sh`
2. WordPress → Extensions → Ajouter → Téléverser `plugin/evenox-formulaire.zip`
3. Si le plugin existe déjà : remplacer / écraser.
4. Activer **Evenox Formulaire**.
5. Vider le cache LiteSpeed (Purge All).
6. Ouvrir https://evenox.ca/location-tables-chaises/

Le header et le footer Divi restent. Le plugin cache `#main-content .et_builder_inner_content` puis le remplace par le wizard. Pas d’append sous le hero.

## Envoi des soumissions

Le formulaire réutilise le pipeline déjà en place :

- `admin-ajax.php` action `evx_soumission`
- nonce `window.evx_nonce` (fourni par le site)
- courriel vers evenox.ca@gmail.com

Aucun nouveau webhook Zapier.

En preview locale (`evenox/preview/`), `window.EVENOX_PREVIEW=true` : aucun envoi.

## Rollback

Désactiver le plugin. L’ancienne page Divi (hero + kit) réapparaît.

## Test après activation

1. L’URL ouvre directement « Combien d'invités ? » — pas de hero, pas d’ancien kit au-dessus.
2. 48 invités → Livraison → J7E → chaise blanche → table 60 po → nappe blanche → 2 cocktail → champs vides = erreur inline. Pas de merci avant envoi.
3. Preview : le bouton « Recevoir ma soumission » affiche Merci sans appeler WordPress.
4. Couleurs : violet Évenox `#5E17EB`, pas le bleu Locabris.
