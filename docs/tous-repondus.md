# Toutes les courriels vont être répondues

Drive : [tous-repondus.md](https://drive.google.com/file/d/1mwGgBLu98v-IDdJEiziAds8iBjl_BrkN/view)

Un courriel client n’est clos que s’il a **un brouillon**, un **`Parti.`**, ou **skip**. Pas parce que le chat dit « c’est bon ».

## Trois trous

| Trou | Requête | Action |
|---|---|---|
| Pas étiqueté | `UNANSWERED_QUERY` (inbox 14 j) | `classify` → `Grok-File` ou `NOX-Spam` |
| Sans brouillon | `QUEUE_QUERY` | claim + brouillon RAPIDE |
| Pas reçu | `SEND_QUERY` | `envoie` / `envoie les brouillons` |

## Sweep (3×/jour, week-end inclus)

1. Veille 2 j
2. Filet leads 14 j
3. Filet **tous** courriels 14 j (max 20 en-têtes)
4. Finir En-cours
5. Internes n8n → `close_interne`
6. Jusqu’à 3 RAPIDE (ou 8 si `réponds à tous`)
7. Envois si mot magique
8. `Couverture : …`. Trous restants = **pas fini**. Prochain timer (9 h / 12 h / 16 h Montréal).

`QUEUE VIDE` seulement si les trois trous = 0.

## Mots

- `réponds à tous` / `vide la file` — rédiger jusqu’à 8 dossiers ce run
- `envoie les brouillons` — les clients reçoivent

Verrou jusqu’au 10 sept 2026 : rien ne part sans `envoie`.
