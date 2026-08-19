#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Génère releve/POLICE.md, releve/PROMESSES.md et releve/README.md à partir de resultats.json."""
import json
import os
import re
from collections import Counter

from analyse import PROMESSES as EXPRESSIONS, VOISINES as EXPRESSIONS_VOISINES

SORTIE = "/workspace/releve"
DATE = "19 août 2026"
ORDRE_FORMES = [
    "variable CSS --font-display",
    "lien fonts.googleapis.com",
    "déclaration font-family",
    "attribut style d'un <span>",
    "attribut Divi inline_fonts",
]


FAMILLES = [
    ("variable CSS --font-display", lambda f: f == "variable CSS --font-display"),
    ("lien fonts.googleapis.com", lambda f: f.startswith("lien fonts.googleapis.com")),
    ("déclaration font-family", lambda f: f.startswith("déclaration font-family")),
    ("attribut style d'un <span>", lambda f: f == "attribut style d'un <span>"),
    ("attribut Divi inline_fonts", lambda f: f == "attribut Divi inline_fonts"),
    ("commentaire CSS ou HTML (mention, pas de règle appliquée)",
     lambda f: f.startswith("commentaire")),
]


def famille(f):
    for nom, test in FAMILLES:
        if test(f):
            return nom
    return "autre"


def est_question(lieu):
    return lieu.startswith("question") or "— question" in lieu


def md_forme(f):
    """Les noms de balises doivent passer en code, sinon Markdown les avale."""
    return re.sub(r"<(\w+)>", r"`<\1>`", f)


def echappe(s):
    return s.replace("|", "\\|").replace("\n", " ").strip()


def charge():
    resultats = json.load(open("resultats.json", encoding="utf-8"))
    journal = {}
    for nom in ("http_a.log", "http_b.log", "http_c.log", "pages/_http.log"):
        if os.path.exists(nom):
            for ligne in open(nom, encoding="utf-8"):
                bouts = ligne.rstrip("\n").split("\t")
                if len(bouts) == 3 and bouts[0] != "STOP":
                    journal[bouts[2]] = int(bouts[0])
    journal.setdefault("https://evenox.ca/", 200)
    return resultats, journal


def cle_url(u):
    return u.replace("https://evenox.ca/", "")


def police(resultats):
    lignes = []
    total_occ = 0
    formes_globales = Counter()
    for r in sorted(resultats, key=lambda x: cle_url(x["url"])):
        if not r["luckiest_total"]:
            continue
        total_occ += r["luckiest_total"]
        formes = r["luckiest_formes"]
        for f, n in formes.items():
            formes_globales[famille(f)] += n
        rang = {nom: i for i, (nom, _) in enumerate(FAMILLES)}
        ordre = sorted(formes, key=lambda f: (rang.get(famille(f), 99), f))
        desc = " ; ".join("%s (%d)" % (md_forme(f), formes[f]) for f in ordre)
        lignes.append("| %s | %d | %s |" % (r["url"], r["luckiest_total"], desc))

    touchees = len(lignes)
    saines = len(resultats) - touchees
    txt = []
    txt.append("# Relevé — police « Luckiest Guy »")
    txt.append("")
    txt.append("Relevé du %s, sur le HTML **servi** par evenox.ca (pages publiques, sans exécution de JavaScript)." % DATE)
    txt.append("")
    txt.append("Comptage : occurrences de la chaîne `Luckiest Guy` dans la source, sous toutes ses écritures")
    txt.append("(`Luckiest Guy`, `Luckiest+Guy` dans une URL Google Fonts, `Luckiest%20Guy`).")
    txt.append("Chaque occurrence est rattachée à une seule forme, selon l'ordre de priorité indiqué en bas de page.")
    txt.append("")
    txt.append("- Pages lues : **%d**" % len(resultats))
    txt.append("- Pages où « Luckiest Guy » est présent : **%d**" % touchees)
    txt.append("- Pages lues sans aucune occurrence : **%d**" % saines)
    txt.append("- Occurrences relevées au total : **%d**" % total_occ)
    txt.append("")
    txt.append("Répartition des occurrences par forme :")
    txt.append("")
    txt.append("| Forme | Occurrences | Pages concernées |")
    txt.append("| --- | ---: | ---: |")
    for nom, _ in FAMILLES:
        if nom not in formes_globales:
            continue
        pages_f = sum(1 for r in resultats if any(famille(f) == nom for f in r["luckiest_formes"]))
        txt.append("| %s | %d | %d |" % (md_forme(nom), formes_globales[nom], pages_f))
    if "autre" in formes_globales:
        txt.append("| autre (non rattachée) | %d | %d |" % (
            formes_globales["autre"],
            sum(1 for r in resultats if any(famille(f) == "autre" for f in r["luckiest_formes"])),
        ))
    txt.append("")
    txt.append("Formes de la liste de contrôle qui n'ont **pas** été rencontrées : %s." % (
        ", ".join("`%s`" % f for f in ORDRE_FORMES if f not in formes_globales) or "aucune"))
    txt.append("")
    txt.append("## Détail par adresse")
    txt.append("")
    txt.append("| Adresse | Occurrences | Formes trouvées |")
    txt.append("| --- | ---: | --- |")
    txt.extend(lignes)
    txt.append("")
    txt.append("## Méthode de rattachement")
    txt.append("")
    txt.append("Une occurrence est classée dans la première forme qui la contient, dans cet ordre :")
    txt.append("")
    txt.append("1. URL `fonts.googleapis.com` (ex. `…/css2?family=Luckiest+Guy&…`) ;")
    txt.append("2. attribut Divi `inline_fonts=\"…\"` ;")
    txt.append("3. déclaration de la variable CSS `--font-display: 'Luckiest Guy', cursive;` ;")
    txt.append("4. attribut `style=\"…\"` porté par un `<span>` ;")
    txt.append("5. déclaration `font-family: 'Luckiest Guy', …` (bloc `<style>` ou attribut `style` d'une autre balise).")
    txt.append("")
    txt.append("Une occurrence qui tomberait hors de ces cinq cas serait notée `bloc <style> (autre)` ou `autre` ;")
    txt.append("le tableau de répartition ci-dessus montre si ce cas s'est présenté.")
    txt.append("")
    txt.append("## Un exemple par forme, tel qu'il est servi")
    txt.append("")
    vus = {}
    for r in sorted(resultats, key=lambda x: cle_url(x["url"])):
        for f, extrait in r.get("luckiest_exemples", {}).items():
            vus.setdefault(f, (r["url"], extrait))
    rang = {nom: i for i, (nom, _) in enumerate(FAMILLES)}
    for f, (url, extrait) in sorted(vus.items(), key=lambda kv: (rang.get(famille(kv[0]), 99), kv[0])):
        txt.append("**%s** — %s" % (md_forme(f), url))
        txt.append("")
        txt.append("```")
        txt.append(extrait)
        txt.append("```")
        txt.append("")
    txt.append("## Pages lues sans aucune occurrence (%d)" % saines)
    txt.append("")
    txt.append("<details><summary>Voir la liste</summary>")
    txt.append("")
    for r in sorted(resultats, key=lambda x: cle_url(x["url"])):
        if not r["luckiest_total"]:
            txt.append("- %s" % r["url"])
    txt.append("")
    txt.append("</details>")
    return "\n".join(txt) + "\n"


TARIF = ("Tarif réel de livraison chez Évenox : 100 $ pour les 10 premiers kilomètres, "
         "puis 7 $ du kilomètre jusqu'à 40 km ; au-delà, soumission sur mesure.")

# Contexte à connaître pour lire certaines lignes du tableau, sans l'interpréter.
REMARQUES = {
    "https://evenox.ca/2476-2/": (
        "page « Politique d'annulation ». Le « Dans ce cas » de la phrase relevée renvoie à la phrase "
        "précédente : « les réservations de jeux gonflables peuvent être annulées par notre équipe si "
        "les conditions météorologiques sont défavorables (pluie, vents forts, etc.) ». Le report sans "
        "frais y est donc présenté comme une suite d'une annulation décidée par Évenox, « sous réserve "
        "de disponibilité »."
    ),
}


def promesses(resultats):
    lignes = []
    pages_touchees = set()
    par_formulation = Counter()
    for r in sorted(resultats, key=lambda x: cle_url(x["url"])):
        for p in r["promesses"]:
            if est_question(p["emplacement"]):
                continue  # formulation interrogative : traitée en annexe
            pages_touchees.add(r["url"])
            par_formulation[p["formulation"]] += 1
            lignes.append(
                "| %s | « %s » | %s | %s |" % (
                    r["url"], echappe(p["phrase"]), md_forme(echappe(p["emplacement"])), p["formulation"])
            )

    txt = []
    txt.append("# Relevé — promesses de livraison interdites")
    txt.append("")
    txt.append("Relevé du %s, sur le HTML **servi** par evenox.ca (pages publiques, sans exécution de JavaScript)." % DATE)
    txt.append("")
    txt.append(TARIF)
    txt.append("")
    txt.append("Formulations recherchées : « livraison incluse », « livraison gratuite », « montage compris »,")
    txt.append("« annulation gratuite 7 jours », « report sans frais en cas de pluie »,")
    txt.append("« remplacement pendant l'événement » — avec leurs variantes d'accord et d'ordre des mots.")
    txt.append("Les expressions exactes qui ont servi à la recherche sont données à la fin, section « Méthode ».")
    txt.append("")
    txt.append("- Pages lues : **%d**" % len(resultats))
    txt.append("- Pages portant au moins une de ces formulations sous forme **affirmative** : **%d**" % len(pages_touchees))
    txt.append("- Relevés affirmatifs au total : **%d**" % len(lignes))
    txt.append("")
    if par_formulation:
        txt.append("| Formulation | Relevés |")
        txt.append("| --- | ---: |")
        for f, n in sorted(par_formulation.items(), key=lambda x: -x[1]):
            txt.append("| %s | %d |" % (f, n))
        txt.append("")
    txt.append("## Relevés")
    txt.append("")
    if lignes:
        txt.append("| Adresse | Phrase exacte | Où elle se trouve | Formulation |")
        txt.append("| --- | --- | --- | --- |")
        txt.extend(lignes)
    else:
        txt.append("Aucune formulation affirmative relevée sur les pages lues.")
    txt.append("")
    notes = [
        (u, n) for u, n in REMARQUES.items()
        if any(u == r["url"] for r in resultats)
    ]
    if notes:
        txt.append("### Remarques sur certaines lignes")
        txt.append("")
        for u, n in sorted(notes):
            txt.append("- **%s** — %s" % (u, n))
        txt.append("")

    # Annexe 1 : questions de FAQ
    annexe = []
    vues = set()
    for r in sorted(resultats, key=lambda x: cle_url(x["url"])):
        for p in r["promesses"] + r["voisines"]:
            if not est_question(p["emplacement"]):
                continue
            cle = (r["url"], p["phrase"])
            if cle in vues:
                continue
            vues.add(cle)
            annexe.append((r["url"], p["phrase"], p.get("reponse", "")))
    txt.append("## Annexe 1 — titres de FAQ interrogatifs (écartés du tableau)")
    txt.append("")
    txt.append("Ces pages posent la question « Livraison et installation incluses ? » (ou une variante) en titre")
    txt.append("d'accordéon. Ce n'est pas une affirmation : la réponse qui suit est reproduite telle quelle ci-dessous,")
    txt.append("ce qui permet de vérifier ce qui est réellement annoncé. Elles ne figurent donc pas au tableau principal.")
    txt.append("")
    if annexe:
        reponses = Counter(a[2] for a in annexe)
        txt.append("| Adresse | Titre (question) | Réponse servie sur la page |")
        txt.append("| --- | --- | --- |")
        for url, q, rep in annexe:
            txt.append("| %s | « %s » | « %s » |" % (url, echappe(q), echappe(rep) if rep else "*(réponse non isolée)*"))
        txt.append("")
        txt.append("Réponses distinctes rencontrées : **%d**." % len(reponses))
    else:
        txt.append("Aucun.")
    txt.append("")

    # Annexe 2 : formulations voisines
    txt.append("## Annexe 2 — formulations voisines (mots différents, même portée)")
    txt.append("")
    txt.append("Ces phrases ne reprennent pas mot pour mot les six formulations interdites — elles emploient")
    txt.append("« installation », « ramassage » ou « support » plutôt que « livraison » ou « montage ».")
    txt.append("Elles sont relevées sans être assimilées aux six : c'est à Évenox de trancher.")
    txt.append("")
    groupes = {}
    for r in sorted(resultats, key=lambda x: cle_url(x["url"])):
        for p in r["voisines"]:
            if est_question(p["emplacement"]):
                continue
            cle = (p["formulation"], p["phrase"])
            g = groupes.setdefault(cle, {"pages": set(), "lieux": set()})
            g["pages"].add(r["url"])
            g["lieux"].add(p["emplacement"])
    if groupes:
        total_v = sum(len(g["pages"]) for g in groupes.values())
        txt.append("**%d** phrases distinctes, sur **%d** pages au total. Les adresses page par page")
        txt[-1] = txt[-1] % (len(groupes), len({u for g in groupes.values() for u in g["pages"]}))
        txt.append("sont listées après le tableau.")
        txt.append("")
        txt.append("| Formulation voisine | Phrase exacte | Où elle se trouve | Pages |")
        txt.append("| --- | --- | --- | ---: |")
        for (f, ph), g in sorted(groupes.items(), key=lambda kv: (-len(kv[1]["pages"]), kv[0])):
            txt.append("| %s | « %s » | %s | %d |" % (
                f, echappe(ph), md_forme(echappe(" ; ".join(sorted(g["lieux"])))), len(g["pages"])))
        txt.append("")
        txt.append("<details><summary>Adresses, phrase par phrase</summary>")
        txt.append("")
        for (f, ph), g in sorted(groupes.items(), key=lambda kv: (-len(kv[1]["pages"]), kv[0])):
            txt.append("- « %s » (%s) :" % (ph, f))
            for u in sorted(g["pages"]):
                txt.append("  - %s" % u)
        txt.append("")
        txt.append("</details>")
        txt.append("")
        txt.append("Note : la phrase la plus fréquente de cette annexe, « L'installation est incluse uniquement")
        txt.append("dans certains forfaits », restreint la portée au lieu de promettre. Elle est listée parce que")
        txt.append("l'expression de recherche l'attrape, pas parce qu'elle affirme quelque chose de faux.")
    else:
        txt.append("Aucune.")
    txt.append("")
    txt.append("## Méthode")
    txt.append("")
    txt.append("Le texte est cherché à trois endroits du HTML servi : les blocs `application/ld+json`,")
    txt.append("les balises `<meta>` (attribut `content`), et le texte visible reconstitué avec un analyseur")
    txt.append("HTML après retrait de `<script>`, `<style>` et `<noscript>` (plus les attributs `alt` et `title`).")
    txt.append("Avant la comparaison, le texte est mis en minuscules, débarrassé de ses accents et de ses")
    txt.append("espaces multiples ; la phrase citée dans le tableau est reprise telle quelle sur la page.")
    txt.append("")
    txt.append("Un titre interrogatif (« Livraison et installation incluses ? ») n'est pas compté comme une")
    txt.append("affirmation : ces lignes sont renvoyées en annexe 1 avec la réponse servie sous le titre.")
    txt.append("")
    txt.append("Expressions cherchées pour les six formulations interdites :")
    txt.append("")
    txt.append("| Formulation | Expression régulière |")
    txt.append("| --- | --- |")
    for nom, rx in EXPRESSIONS:
        txt.append("| %s | `%s` |" % (nom, rx.replace("|", "\\|")))
    txt.append("")
    txt.append("Expressions cherchées pour les formulations voisines de l'annexe 2 :")
    txt.append("")
    txt.append("| Formulation voisine | Expression régulière |")
    txt.append("| --- | --- |")
    for nom, rx in EXPRESSIONS_VOISINES:
        txt.append("| %s | `%s` |" % (nom, rx.replace("|", "\\|")))
    txt.append("")
    txt.append("La formulation « report sans frais en cas de pluie » n'est retenue que si « pluie » ou")
    txt.append("« intempérie » figure dans les 120 caractères qui entourent la correspondance.")
    txt.append("")
    trouvees = {p["formulation"] for r in resultats for p in r["promesses"]}
    absentes = [n for n, _ in EXPRESSIONS if n not in trouvees]
    vues = sorted(set(absentes), key=absentes.index)
    if vues:
        txt.append("Sans correspondance sur les %d pages lues : %s." % (
            len(resultats), ", ".join("« %s »" % n for n in vues)))
    else:
        txt.append("Les six formulations ont toutes au moins une correspondance.")
    return "\n".join(txt) + "\n"


def lisez_moi(resultats, journal, non_lues, restant):
    lus = {r["url"] for r in resultats}
    codes = Counter(journal.values())
    txt = []
    txt.append("# Relevé Évenox — %s" % DATE)
    txt.append("")
    txt.append("Relevé de deux défauts sur les pages publiques d'evenox.ca :")
    txt.append("la survivance de la police « Luckiest Guy » (`POLICE.md`) et les promesses de livraison")
    txt.append("interdites (`PROMESSES.md`). Aucune modification n'a été faite sur le site : lecture seule,")
    txt.append("sans connexion à aucun compte.")
    txt.append("")
    txt.append("## Ce qui a été relevé")
    txt.append("")
    txt.append("- « Luckiest Guy » : **%d** occurrences sur **%d** pages (sur %d lues). Détail dans `POLICE.md`."
               % (OCCURRENCES_POLICE, PAGES_POLICE, len(resultats)))
    txt.append("- Promesses interdites, tournures affirmatives : **%d** relevés sur **%d** pages. Détail dans `PROMESSES.md`."
               % (RELEVES_PROMESSES, PAGES_PROMESSES))
    txt.append("- S'y ajoutent, en annexe de `PROMESSES.md` : **%d** titres de FAQ interrogatifs, dont la réponse"
               % TITRES_FAQ)
    txt.append("  servie sous le titre donne le tarif réel, et **%d** phrases voisines (relevées sur %d pages) qui" % (VOISINES_N, VOISINES_PAGES))
    txt.append("  emploient d'autres mots — « installation », « ramassage », « support » — et qu'il revient à Évenox de trancher.")
    txt.append("")
    txt.append("## Ce qui a été lu")
    txt.append("")
    txt.append("- Adresses publiques listées par `sitemap_index.xml` et les six sitemaps qu'il annonce : **%d**." % TOTAL_SITEMAP)
    txt.append("- Pages demandées : **%d**." % len(journal))
    txt.append("- Pages lues et analysées (réponse 200) : **%d**." % len(lus))
    txt.append("- Pages qui n'ont pas pu être lues : **%d**.%s" % (
        len(non_lues), "" if non_lues else " Aucune réponse 403, 404, 429 ni erreur réseau."))
    if non_lues:
        txt.append("")
        txt.append("| Adresse | Code |")
        txt.append("| --- | --- |")
        for u, c in sorted(non_lues.items()):
            txt.append("| %s | %s |" % (u, c))
    txt.append("")
    txt.append("Codes de réponse rencontrés : %s." % ", ".join("%s (%d)" % (k, v) for k, v in sorted(codes.items())))
    txt.append("")
    txt.append("## Ce qui n'est pas fini")
    txt.append("")
    if restant:
        txt.append("- Adresses du sitemap non demandées : **%d**." % len(restant))
    else:
        txt.append("- Toutes les adresses des sitemaps ont été demandées.")
    txt.extend([
        "- Le relevé porte sur le HTML servi tel quel. Ce qu'un script ajoute après le chargement",
        "  dans le navigateur n'est pas couvert : une occurrence de « Luckiest Guy » ou une promesse",
        "  injectée en JavaScript échapperait au comptage.",
        "- Les feuilles de style externes (fichiers `.css` du thème et des extensions) n'ont pas été",
        "  téléchargées ni analysées. Le comptage porte sur le HTML de la page : blocs `<style>`,",
        "  attributs `style`, attributs Divi et liens Google Fonts.",
        "- Les images, les PDF et les vidéos n'ont pas été examinés. Une promesse écrite dans un visuel",
        "  n'apparaîtrait pas ici.",
        "- Seul le domaine `evenox.ca` en français a été parcouru, à partir des sitemaps. Une page publique",
        "  absente des sitemaps n'a pas été vue.",
        "- La recherche des promesses repose sur des expressions régulières listées dans `PROMESSES.md`.",
        "  Une formulation qui dirait la même chose avec d'autres mots encore peut avoir été manquée :",
        "  le relevé donne un plancher, pas un compte définitif.",
        "",
        "## Comment refaire le relevé",
        "",
        "Les trois outils utilisés sont dans `outils/` : `fetch.sh` (collecte, une requête à la fois),",
        "`analyse.py` (comptage et repérage) et `rapport.py` (écriture des trois fichiers).",
        "S'y ajoutent `journal-http.log` (code de réponse et taille reçue, une ligne par adresse)",
        "et `resultats.json` (le relevé brut, page par page, dont sont tirés les deux tableaux).",
        "",
        "## Rythme de lecture",
        "",
        "- Une requête à la fois, jamais en parallèle, avec une pause de 2,5 secondes entre deux.",
        "- Le collecteur était réglé pour s'arrêter net à la première réponse 403 ou 429.",
        "",
        "## Ce qui n'a pas été fait, volontairement",
        "",
        "- Rien n'a été modifié sur evenox.ca.",
        "- Aucune connexion à un compte, aucun accès à l'administration.",
        "- Aucun prix, aucune distance et aucun délai n'ont été déduits ou reconstitués : les tableaux",
        "  ne citent que ce qui est écrit dans le HTML servi.",
    ])
    return "\n".join(txt) + "\n"


if __name__ == "__main__":
    TOTAL_SITEMAP = sum(1 for _ in open("all_urls.txt", encoding="utf-8") if _.strip())
    resultats, journal = charge()
    OCCURRENCES_POLICE = sum(r["luckiest_total"] for r in resultats)
    PAGES_POLICE = sum(1 for r in resultats if r["luckiest_total"])
    affirmatifs = [(r["url"], p) for r in resultats for p in r["promesses"] if not est_question(p["emplacement"])]
    RELEVES_PROMESSES = len(affirmatifs)
    PAGES_PROMESSES = len({u for u, _ in affirmatifs})
    TITRES_FAQ = len({
        (r["url"], p["phrase"])
        for r in resultats for p in r["promesses"] + r["voisines"] if est_question(p["emplacement"])
    })
    paires_v = {(p["formulation"], p["phrase"]) for r in resultats for p in r["voisines"] if not est_question(p["emplacement"])}
    VOISINES_N = len(paires_v)
    VOISINES_PAGES = len({r["url"] for r in resultats for p in r["voisines"] if not est_question(p["emplacement"])})
    lus = {r["url"] for r in resultats}
    non_lues = {u: c for u, c in journal.items() if c != 200}
    demandees = set(journal)
    toutes = {l.strip() for l in open("all_urls.txt", encoding="utf-8") if l.strip()}
    restant = sorted(toutes - demandees - {"https://evenox.ca"})
    os.makedirs(SORTIE, exist_ok=True)
    open(os.path.join(SORTIE, "POLICE.md"), "w", encoding="utf-8").write(police(resultats))
    open(os.path.join(SORTIE, "PROMESSES.md"), "w", encoding="utf-8").write(promesses(resultats))
    open(os.path.join(SORTIE, "README.md"), "w", encoding="utf-8").write(
        lisez_moi(resultats, journal, non_lues, restant)
    )
    print("écrit dans", SORTIE)
