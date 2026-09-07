# Comment Grokbot automatise le rituel

Toi, tu ne tapes plus 4 phrases. Moi (Grokbot / cet agent) je fais le pipeline.

## Ce que je fais tout seul

| Déclencheur | Brouillons | Envoi | Slack |
|---|---|---|---|
| Timer 9 h / 12 h / 16 h Montréal (`[grok-inbox-queue-cheap]`) | oui, jusqu’à 3 RAPIDE | **non** | « N brouillon(s) prêt(s). Réponds `envoie les brouillons`. » |
| `fais le rituel` / `vide la file` / `réponds à tous` / `voie rapide` / `débloque` / `automatise` | oui (8 si vide la file) | **oui, même tour** | seulement s’il reste un `Pas parti.` |
| `envoie` / `envoie-les` / `envoie les brouillons` | non (déjà là) | oui + 1 retry | non |

Timer = préparation. Une phrase à toi = tout part.

## Pipeline (même tour)

1. `release_stuck` — En-cours coincé → File
2. Veille 2 j + filet leads + filet 14 j
3. Internes n8n → Processed, 0 mail
4. Jusqu’à 3 brouillons RAPIDE (0 Booqable, 0 Drive, 0 PDF)
5. Si rituel / `envoie` : `send_message` + `prove_sent` (max 3)
6. Si `Pas parti.` : un retry
7. Une ligne `Couverture` + `Rituel : N brouillon(s), X Parti., Y Pas parti.`

Hold Sylvie = 0 envoi tant que tu n’as pas dit `lève hold Sylvie`.
Jamais inventer un prix. Jamais « j’envoie » sans coller `Parti.`

## Ce que tu fais encore (1 mot)

- Après le timer : `envoie` (ou `envoie les brouillons`)
- Si un mail n’est pas parti : `renvoie les pas parti`
- Pour tout faire d’un coup, sans attendre le timer : `fais le rituel`

`ok` / `go` n’envoient toujours rien.

## Pourquoi le timer n’envoie pas

Le verrou tient jusqu’au 10 sept 2026 : un run sans toi ne doit pas blaster ~50 fils. Le timer prépare. Ta phrase `envoie` ou `fais le rituel` part.

Après le 10 sept : on pourra passer le timer en envoi auto **RAPIDE Type A / Nouveau lead n8n seulement**. Pas avant.

## Prompt timer (Cursor Automation)

Cron : `0 13,16,20 * * *` UTC = 9 h / 12 h / 16 h Montréal, week-end inclus.

```
[grok-inbox-queue-cheap]
Charge .cursor/skills/grosbot-inbox-queue/SKILL.md et grosbot/rituel.py.
TIMER : brouillons seulement. INTERDIT send_message. INTERDIT « j’envoie ».
Ordre : release_stuck → CATCHUP_QUERY → LEAD_NET_QUERY → UNANSWERED_QUERY → close_interne → jusqu’à 3 RAPIDE (0 Booqable, 0 Drive, 0 PDF).
Brouillon IA seulement, pas NOX-Processed.
Slack DM Evenox U0996M8QRFT avec slack_ready_line(N).
Couverture. Si Gmail plante : Veille : pas faite. + Slack. Jamais un faux 0 oublié.
```
