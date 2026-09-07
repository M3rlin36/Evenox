# Rituel — une phrase, tout part

Tu n’as plus à enchaîner 4 messages. Une phrase lance le pipeline.

## Toi

| Tu dis | Ce que je fais |
|---|---|
| `fais le rituel` | débloque + brouillons + envoi + retry + Couverture |
| `vide la file` | pareil, jusqu’à 8 claims |
| `voie rapide` / `débloque` | pareil (arrête Booqable / Drive) |
| `envoie` | envoie les `Brouillon IA` déjà là + 1 retry |

`ok` / `go` = rien.

## Le timer (sans toi)

3×/jour (9 h / 12 h / 16 h Montréal) : brouillons seulement. Slack : « N prêts. Réponds `envoie`. »
Le timer **n’envoie pas**.

## Si ça bloque encore

| Symptôme | Automatique | Toi si besoin |
|---|---|---|
| Booqable / Drive / PDF | `voie rapide` les coupe | `fais le rituel` |
| En-cours coincé | `release_stuck` au début | `débloque` |
| « j’envoie » sans coller le mail | interdit | `renvoie les pas parti` |
| `Pas parti.` | 1 retry dans le même tour | `envoie [Prénom]` |

Fini seulement si `Couverture : 0 trou` **et** autant de `Parti.` que de brouillons lus.

Avant (une fois) : recoller [prompt-cerveau.md](prompt-cerveau.md) dans Grokbot. L’ancien prompt attend le PDF et s’arrête à 1 dossier.
