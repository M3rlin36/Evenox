# Déposer les sources manquantes

Les chantiers 1–5 sont en place pour **jw** (assistant jeux).
`assistant-evenement/` et `calculateur-fete.html` ne sont **pas** sur evenox.ca
(404, voir `RAPPORT-RECHERCHE.md`). Ils sont sur le PC :
`C:\Users\Admin\Evenox`.

Ne pas inventer ces fichiers. Ne pas changer un prix dans `jw-widget.js`.
Ne pas trancher §6.

## 1. Copier tel quel

Depuis `C:\Users\Admin\Evenox` vers la racine de ce dépôt :

```
assistant-evenement/ev-widget.js
assistant-evenement/ev-widget.css
assistant-evenement/ev-widget.html
assistant-evenement/payload.txt          # 49 289 car. (référence)
assistant-evenement/test-local.html      # optionnel — le script le régénère
calculateur-fete.html
```

Si tu as aussi `calculateur-secteur-v2.html`, le poser à la racine
(pas requis pour le catalogue persona).

## 2. Une commande

```bash
npm run integrer
```

Équivalent : `node scripts/integrer-sources.js`.

Elle refuse d’inventer ce qui manque. Si les fichiers sont là, elle enchaîne :

```bash
node scripts/extraire-catalogue.js
node scripts/verifier-catalogue.js
node scripts/build.js assistant-evenement --assert-length=49289
node scripts/lint-payload.js assistant-evenement --assert-length=49289
node scripts/build-test-local.js
npx playwright test
```

Attendu après un dépôt complet :

- `catalogue.json` : catégorie assistant-evenement ~95 produits, calculateur fête > 0
- `assistant-evenement/payload.txt` : **49289** caractères, identique à la référence
- tests 1–5 (ev) : encore `skip` tant que les scénarios n’ont pas les vrais sélecteurs DOM — les écrire alors, ne pas les inventer avant
- a11y ev / calculateur : même chose (axe + 375 px) une fois `test-local.html` ev généré

## 3. Filet des leads

`lib/evx-envoi.js` s’inline déjà dans jw. Le build ev le prendra aussi.
`calculateur-fete.html` : pointer `CONFIG.webhookUrl` / `window.evx_ajax`
vers le même filet — **destination toujours §6.3**, voir `WEBHOOK.md`.

## 4. Toujours ouvert (§6)

1. Zones Montréal / Longueuil / Brossard / Gatineau — transport sur mesure.
2. Seuil livraison incluse : 449 $ ou 500 $.
3. Destination des leads.
4. Conflits de prix (Connect 4 80/60, Express vs Réception).
