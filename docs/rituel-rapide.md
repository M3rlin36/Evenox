# Rituel rapide — plusieurs mails, tous partis

C’est ça qui bloque d’habitude : Grokbot ouvre Booqable / Drive, ou il dit « j’envoie » sans `send_message`.

## Les 4 phrases (dans l’ordre)

1. `vide la file` — brouillons, **pas** de PDF
2. Si ça ouvre Booqable ou « je prépare le devis » → `voie rapide` ou `débloque`
3. `envoie les brouillons` — le mot exact, pas « ok » / « go » / « envoie-les »
4. Compte les `Parti.` Si un `Pas parti.` → `renvoie les pas parti`

Fini seulement si la ligne dit `Couverture : 0 trou` **et** autant de `Parti.` que de brouillons lus.

## Si ça bloque

| Symptôme | Tu dis |
|---|---|
| Il cherche un PDF / ouvre Booqable | `voie rapide` |
| Il reste coincé sur 1 dossier | `débloque` |
| Il relit Drive | `voie rapide` |

## Si ça n’envoie pas

| Symptôme | Tu fais |
|---|---|
| « j’envoie » sans coller le mail | `renvoie les pas parti` |
| `Pas parti. Le brouillon est encore là.` | `envoie [Prénom]` une fois |
| Tu as dit « ok » / « go » | Re-dis `envoie les brouillons` |

Sans le mot **envoie**, rien ne part. Un brouillon Gmail n’est pas un envoi.

## Avant (une fois)

Recoller [prompt-cerveau-v3.md](https://drive.google.com/file/d/1btj7lKht3ZOkFDFPYtEa7W5j3OIfpfbf/view) dans Grokbot. L’ancien prompt attend le PDF et s’arrête à 1 dossier.
