# Voie rapide Grokbot

Gagne sur `process.md` section E. Ne pas attendre le PDF. Ne pas relire Drive à chaque run.

Grokbot était lent parce qu’il ouvrait Booqable + Drive + Pipeline avant de montrer un brouillon Gmail. La plupart des fils Evenox ont déjà un devis n8n.

## Voies (headers only, défaut RAPIDE)

| Voie | Signal | Action |
|---|---|---|
| **RAPIDE** | `Nouveau lead` · `Brouillon IA` · lien `booqable.com` · WeddingWire · webshop · dépôt / horaire / visite | 0 clic Booqable. Brouillon Gmail **avant** le PDF. `[PRIX À CONFIRMER]` OK. |
| **LENT** | Items clairs + date + **pas** de n° devis | STOCK seulement ici, **en parallèle**, jamais bloquant. Cloud : pas de `BOOQABLE_API_TOKEN` → une ligne à Alex, ne pas ouvrir Booqable. |
| **INTERNE** | `Nouvelle soumission` / `Devis abandonne` | `close_interne` : `NOX-Processed`, retirer File + En-cours. 0 mail. Pas Skip. Pas `Brouillon IA`. |

## Caps

- 3 brouillons **RAPIDE** / run
- 1 **LENT** / run
- 1 `Grok-En-cours` à la fois (claim → brouillon → close → next)
- Courriel + STOCK en parallèle = OK
- Jamais les 11 travailleurs
- Jamais inventer un prix
- Timer = brouillon, 0 envoi. Toi = `envoie`. Devis seulement s’il est déjà dans le fil.

## Reçu (brouillon ≠ parti)

`finish(drafted=True)` n’écrit plus `NOX-Processed`. Le client n’a rien reçu tant qu’il n’y a pas `Grok-Envoyé` + `Parti.`

File : `SEND_QUERY` = `label:Brouillon IA -label:Grok-Envoyé`. Jusqu’à 3 envois / run si rituel / `envoie`. Timer = 0 envoi + Slack.

Une ligne chaque run : `Couverture : N sans brouillon + M brouillon(s) pas reçu(s).`

Drive : [voie-rapide.md](https://drive.google.com/file/d/1vW_bnLRqZr2i6NaW4eO-6_mvLv6gZk1q/view) · [prompt-cerveau-v4.md](https://drive.google.com/file/d/1q47U7HR7gHg-MV3T7nmgvxUU5TZ9IGmt/view) · [auto-rituel.md](https://drive.google.com/file/d/1If264hIuC5wTn87oIrj_rT3UGLaN3Hdf/view)

## Interdits (vitesse)

- Relire `process.md` / `entreprise.md` / `regles.md` à chaque run
- Attendre le PDF avant le brouillon
- Ouvrir Booqable sur un lead n8n
- 1 seul brouillon / run (c’est l’ancien cap)

Code : `grosbot/lane.py`, `claim_next(..., already_slow_this_run=)`.
