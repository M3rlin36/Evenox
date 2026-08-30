# Restaurer la page tables et chaises

Evenox n’est pas dans ce dépôt : le site live est WordPress / Divi sur [evenox.ca](https://evenox.ca).

## État voulu

https://evenox.ca/location-tables-chaises/ = **page Divi originale** :

- hero « Location de tables et chaises »
- photos
- kit « Monte ton kit, vois ton prix » (invités, livraison, chaises, tables, nappes, cocktail, estimation)
- forfaits Essentiel / Réception / Grande Salle
- FAQ

Le plugin **Evenox Formulaire** 1.0.3-restore est **inerte**. Il ne remplace plus `et_builder_inner_content`, `#calculateur` ni `.tc-calc`.

## Si un agent a réinstallé 1.0.0 / 1.0.1 / 1.0.2

1. WordPress → Extensions → **désactiver** Evenox Formulaire.
2. Ou téléverser ce zip (écraser) : le fichier PHP ne fait plus rien.
3. LiteSpeed → Purge All.
4. Ouvrir https://evenox.ca/location-tables-chaises/ : hero + photos + kit d’origine.

## Ne pas faire

- Ne pas réactiver une version qui injecte un wizard.
- Ne pas cacher `.et_builder_inner_content` ni `.tc-calc`.
- Ne pas transformer Evenox en site Locabris.

## Preview locale

`evenox/preview/` montre encore le module wizard pour référence. Ce n’est **pas** ce qui doit être en ligne sur evenox.ca.
