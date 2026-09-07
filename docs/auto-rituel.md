# Système courriels — 2 modes

Drive : [auto-rituel.md](https://drive.google.com/file/d/1If264hIuC5wTn87oIrj_rT3UGLaN3Hdf/view) · [prompt-cerveau-v4.md](https://drive.google.com/file/d/1q47U7HR7gHg-MV3T7nmgvxUU5TZ9IGmt/view)

Toujours : courriel → brouillon → devis si déjà dans Booqable → tu valides (`envoie`).

## 1. Seul (timer 9 h / 12 h / 16 h)

Courriel entre → étiquette → brouillon RAPIDE (0 Booqable, 0 Drive, 0 PDF).
Devis seulement si le lien / le n° est **déjà** dans le fil (n8n). Sinon `[PRIX À CONFIRMER]`.
Slack : `N à valider. Dis envoie.`
**0 envoi.**

## Encore auto (sans toi)

- Courriel entre → `decide_arrival` : spam / interne / brouillon / brouillon+devis
- Devis seulement si le lien Booqable est déjà dans le fil (n8n). Sinon `[PRIX À CONFIRMER]`
- Internes n8n fermés, 0 mail
- Pubs (GitHub, Ads, Notion, Alarm) → Spam
- Slack : `N à valider. Dis envoie.`
- Timer 3×/jour. Tu ne regardes pas Gmail.

## 2. Toi

`envoie` → ça part. `Parti.` ou `Pas parti.` + 1 retry.

`ok` / `go` = rien. Hold Sylvie = rien.

## Prompt timer

```
[grok-inbox-queue-cheap]
WATCH. 0 send_message.
release_stuck → CATCHUP → LEAD_NET → UNANSWERED → close_interne → 3 RAPIDE.
Devis seulement si déjà dans le fil. Slack : N à valider. Dis envoie.
Gmail down → Veille : pas faite. + Slack. Jamais un faux 0.
```
