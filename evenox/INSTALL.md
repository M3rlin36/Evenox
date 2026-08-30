# Déployer le formulaire tables et chaises

Evenox n’est pas dans ce dépôt : le site live est WordPress / Divi sur [evenox.ca](https://evenox.ca). Ce dossier livre un plugin à coller par-dessus.

## Déjà en ligne

Le plugin **Evenox Formulaire** 1.1.1 n’injecte **que** dans un hôte `#evx-plan` déjà présent. Sans cet hôte, la page Divi (hero, kit, photos, FAQ) reste intacte. Le calculateur d’origine est déjà une question à la fois.

Les versions 1.0.1 / 1.1.0 remplaçaient tout `et_builder_inner_content`. Ne pas les réinstaller.

Pour une mise à jour : re-téléverser le zip (écraser) puis vider LiteSpeed.

## Voie rapide

1. Générer le zip : `evenox/plugin/pack.sh`
2. WordPress → Extensions → Ajouter → Téléverser `plugin/evenox-formulaire.zip`
3. Si le plugin existe déjà : remplacer / écraser.
4. Activer **Evenox Formulaire**.
5. Vider le cache LiteSpeed (Purge All).
6. Ouvrir https://evenox.ca/location-tables-chaises/

Le header, le footer, le hero et les sections Divi restent. Le plugin ne touche pas `#main-content .et_builder_inner_content`.

## Hôte optionnel

Pour coller le wizard du module à un endroit précis, ajouter dans un module Code Divi :

```html
<div id="evx-plan" data-evenox-host="1"></div>
```

Sans ce bloc, le plugin ne change rien.

## Envoi des soumissions

Le formulaire d’origine réutilise le pipeline déjà en place :

- `admin-ajax.php` action `evx_soumission`
- nonce `window.evx_nonce` (fourni par le site)
- courriel vers evenox.ca@gmail.com

Aucun nouveau webhook Zapier.

En preview locale (`evenox/preview/`), `window.EVENOX_PREVIEW=true` : aucun envoi.

## Rollback

Désactiver le plugin. La page Divi d’origine reste (c’est déjà le cas en 1.1.1).

## Test après activation

1. L’URL montre le hero Evenox, les photos, le kit, les forfaits — pas un wizard plein écran.
2. Un seul formulaire (celui de la page). Une question à la fois via le KIT WIZARD d’origine.
3. 48 invités → Livraison → J7E → chaise blanche → table 60 po → nappe blanche.
4. Couleurs : violet Évenox `#5E17EB`, pas le bleu Locabris.
