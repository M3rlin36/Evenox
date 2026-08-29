# Endpoint des leads Évenox

Le filet (`lib/evx-envoi.js`) est en place : file `localStorage`, réessai au
chargement, `mailto:` en **dernier recours**.  
**La destination des leads n’est pas tranchée (§6.3).** On ne crée aucun compte
Zapier / Make / Mailchimp ici.

Widgets concernés : assistant-jeux (jw) aujourd’hui. `assistant-evenement` et
`calculateur-fete.html` sont absents (3 passes : `RAPPORT-RECHERCHE.md`).
Le même module les branchera quand ils arriveront — `DROP-IN.md`.
Ne pas inventer ces widgets. Destination §6.3 toujours ouverte.

## Champs envoyés (POST, `multipart/form-data` ou JSON)

| Champ | Rôle |
|---|---|
| `action` | `evx_soumission` (hook WordPress admin-ajax actuel) |
| `evx_nonce` | nonce WP si présent, sinon vide |
| `nom_complet` | nom saisi |
| `email` | courriel |
| `telephone` | facultatif |
| `date_event` | facultatif |
| `details` | résumé texte (sélection, totaux, formule) |
| `service` | ex. `Assistant jeux (landing extérieurs)` |
| `page_url` | URL de la page |
| `referrer` | referrer ou `direct` |
| `device` | `mobile` / `tablet` / `desktop` |
| `timestamp` | ISO-8601 |
| `evx_test` / `marqueur` | `TEST` seulement sur le harnais local |

## Exemple JSON

```json
{
  "action": "evx_soumission",
  "evx_nonce": "",
  "nom_complet": "Alex Test",
  "email": "test@evenox.test",
  "telephone": "514-555-1234",
  "date_event": "2026-09-12",
  "details": "ASSISTANT JEUX …\nTOTAL ESTIMÉ : 340 $",
  "service": "Assistant jeux (landing extérieurs)",
  "page_url": "https://evenox.ca/location-jeux-exterieurs/",
  "referrer": "direct",
  "device": "desktop",
  "timestamp": "2026-08-29T20:00:00.000Z"
}
```

Aujourd’hui le widget poste vers `window.evx_ajax` ou
`/wp-admin/admin-ajax.php` (même action que /contact/). En test local : stub
`evenox.test`, payloads marqués `TEST`.

## Recette A — Zapier ou Make (ne pas créer le compte ici)

1. Créer un *Catch Hook* / *Custom webhook* : tu obtiens une URL HTTPS.
2. Pointer `window.evx_ajax` (ou un petit proxy WP) vers cette URL.
   Accepter `multipart/form-data` **ou** JSON (les mêmes champs).
3. Branche au choix (décision §6.3) :
   - Mailchimp : ajouter / mettre à jour un contact (`email`, tag `soumission`).
   - Courriel : envoyer `details` à `evenox.ca@gmail.com`.
   - Les deux.
4. Répondre `{ "success": true }` en JSON. Tout autre corps = échec → file.

## Recette B — petit endpoint maison

```text
POST /leads
Content-Type: application/json
→ 200 { "success": true }
→ 4xx/5xx = réessai (file localStorage)
```

Valider `email`, stocker la ligne (table ou fichier), envoyer un courriel
interne. Pas d’auth publique : secret en en-tête ou restriction d’origine.

## Filet (déjà dans le widget)

1. POST vers l’URL configurée.
2. Échec → entrée dans `localStorage['evx_file_leads']`, réessai au prochain
   chargement (max 3).
3. Après 3 échecs → `mailto:evenox.ca@gmail.com` (dernier recours).

Sans décision §6.3, le filet évite de perdre le lead ; il ne choisit pas
Mailchimp, un CRM ou le courriel simple.
