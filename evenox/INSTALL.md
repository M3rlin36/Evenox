# Déployer le CTA jeux géants

Evenox n’est pas dans ce dépôt : le site live est WordPress / Divi sur [evenox.ca](https://evenox.ca). Ce dossier livre un plugin à coller par-dessus. **Sans activation WordPress, le lien live reste faux.**

## Problème

Sur [jeux-geants-interactifs](https://evenox.ca/jeux-geants-interactifs/), le bouton footer `evx-fin-1` « Monter mon forfait » pointe vers le calculateur **tables/chaises** :

```html
<a class="evx-fin-1" href="https://evenox.ca/location-tables-chaises/">Monter mon forfait</a>
```

Le calculateur jeux géants existe déjà : [location-jeux-geants/#configurateur](https://evenox.ca/location-jeux-geants/#configurateur) (« Choisis tes jeux, vois ton prix »). On ne crée pas de nouveau calculateur.

La page décoration fait déjà le bon geste : même CTA, `href="#calculateur"`, parce que le calculateur est sur la page.

## Voie rapide (plugin, recommandée)

1. Générer le zip : `evenox/plugin/pack.sh`
2. WordPress → Extensions → Ajouter → Téléverser `plugin/evenox-cta-jeux-geants.zip`
3. Activer **Evenox CTA Jeux géants**.
4. Vider le cache LiteSpeed (Purge All).
5. Ouvrir https://evenox.ca/jeux-geants-interactifs/ et cliquer **Monter mon forfait**.

Le plugin ne tourne que sur `/jeux-geants-interactifs/` (slug + page-id `79`). Il réécrit le HTML rendu et, en secours, le `href` en pied de page.

Après activation, le bouton doit ouvrir :

`https://evenox.ca/location-jeux-geants/#configurateur`

## Voie Divi (sans plugin)

Dans le module Code de `/jeux-geants-interactifs/`, remplacer uniquement le `href` de `evx-fin-1` :

```html
<a class="evx-fin-1" href="https://evenox.ca/location-jeux-geants/#configurateur">Monter mon forfait</a>
```

Le bloc complet est dans `snippets/evx-fin-jeux-geants.html`. Ne pas toucher `evx-fin-2` (téléphone).

Puis vider LiteSpeed.

## Hors de ce correctif

Même CTA erroné (tables/chaises) vu le 2026-09-03 sur :

- https://evenox.ca/equipement/ (page-id 295)
- https://evenox.ca/jeux-geants/ (page-id 10507)

Alexandre n’a demandé que `/jeux-geants-interactifs/`. Le plugin ne les modifie pas.

## Rollback

Désactiver le plugin, ou remettre `href="https://evenox.ca/location-tables-chaises/"` dans Divi. Vider LiteSpeed.

## Test après activation

1. https://evenox.ca/jeux-geants-interactifs/ → « Monter mon forfait » arrive sur le configurateur jeux (titre « Choisis tes jeux, vois ton prix »).
2. https://evenox.ca/location-tables-chaises/ inchangé.
3. https://evenox.ca/equipement/ inchangé (toujours l’ancien lien, volontairement).
