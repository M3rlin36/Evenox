#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Analyse du HTML servi par evenox.ca : police « Luckiest Guy » et promesses de livraison."""
import html as htmllib
import json
import os
import re
import sys
import unicodedata

from bs4 import BeautifulSoup, NavigableString

PAGES_DIR = sys.argv[1] if len(sys.argv) > 1 else "pages"

# ---------------------------------------------------------------- Luckiest Guy
RE_LG = re.compile(r"Luckiest(?:\s|\+|%20|&#43;|&nbsp;)+Guy", re.I)


def spans(pattern, html, flags=re.I | re.S):
    return [(m.start(), m.end()) for m in re.finditer(pattern, html, flags)]


def inside(pos, ranges):
    return any(a <= pos < b for a, b in ranges)


def formes_luckiest(html):
    """Retourne (nombre d'occurrences, {forme: compte}, {forme: extrait})."""
    style_blocks = spans(r"<style\b[^>]*>.*?</style>", html)
    gfonts = spans(r"https?://fonts\.googleapis\.com/[^\"'>\s)]*", html)
    gfonts += spans(r"//fonts\.googleapis\.com/[^\"'>\s)]*", html)
    inline_fonts = spans(r"inline_fonts\s*=\s*\"[^\"]*\"", html)
    inline_fonts += spans(r"inline_fonts\s*=\s*'[^']*'", html)
    # attributs style="..." et le nom de la balise qui les porte
    style_attrs = []
    for m in re.finditer(r"<([a-zA-Z][\w:-]*)\b[^>]*?style\s*=\s*(\"[^\"]*\"|'[^']*')", html, re.S):
        tag = m.group(1).lower()
        a = m.start(2)
        b = m.end(2)
        style_attrs.append((a, b, tag))
    # une valeur de déclaration CSS : tout sauf ; } " ', mais les chaînes
    # entre apostrophes ou guillemets sont admises telles quelles.
    VAL = r"(?:[^;}\"']|'[^']*'|\"[^\"]*\")*"
    # déclarations de la variable --font-display
    var_decls = spans(r"--font-display\s*:" + VAL, html)
    # déclarations font-family / font:
    ff_decls = spans(r"font-family\s*:" + VAL, html)
    ff_decls += spans(r"\bfont\s*:" + VAL, html)

    # commentaires : CSS /* … */ à l'intérieur des blocs <style>, et commentaires HTML
    commentaires = [(a, b) for a, b in spans(r"/\*.*?\*/", html) if inside(a, style_blocks)]
    commentaires += spans(r"<!--.*?-->", html)

    total = 0
    formes = {}
    exemples = {}

    def enveloppe(p, plages):
        for a, b in plages:
            if a <= p < b:
                return html[a:b]
        return ""

    for m in RE_LG.finditer(html):
        total += 1
        p = m.start()
        extrait = ""
        if inside(p, commentaires):
            f = "commentaire CSS ou HTML (mention, pas de règle appliquée)"
            extrait = enveloppe(p, commentaires)
        elif inside(p, gfonts):
            f = "lien fonts.googleapis.com"
            extrait = enveloppe(p, gfonts)
        elif inside(p, inline_fonts):
            f = "attribut Divi inline_fonts"
            extrait = enveloppe(p, inline_fonts)
        elif inside(p, var_decls):
            f = "variable CSS --font-display"
            extrait = enveloppe(p, var_decls) + ";"
        elif any(a <= p < b and tag == "span" for a, b, tag in style_attrs):
            f = "attribut style d'un <span>"
            extrait = "<span style=%s>" % next(html[a:b] for a, b, t in style_attrs if a <= p < b)
        elif inside(p, ff_decls):
            porteur = [t for a, b, t in style_attrs if a <= p < b]
            extrait = enveloppe(p, ff_decls) + ";"
            if porteur:
                f = "déclaration font-family (attribut style d'un <%s>)" % porteur[0]
            elif inside(p, style_blocks):
                f = "déclaration font-family (bloc <style>)"
            else:
                f = "déclaration font-family"
        elif any(a <= p < b for a, b, _ in style_attrs):
            tag = next(t for a, b, t in style_attrs if a <= p < b)
            f = "attribut style d'un <%s>" % tag
            extrait = next(html[a:b] for a, b, t in style_attrs if a <= p < b)
        elif inside(p, style_blocks):
            f = "bloc <style> (autre)"
        else:
            f = "autre"
        formes[f] = formes.get(f, 0) + 1
        if f not in exemples and extrait:
            propre = re.sub(r"\s+", " ", extrait).strip()
            exemples[f] = propre if len(propre) <= 300 else propre[:300] + " […]"
    return total, formes, exemples


# ------------------------------------------------------------------ promesses
def norm_map(s):
    """Minuscules, sans accents, espaces fusionnés, avec la position d'origine de chaque
    caractère produit. Permet de citer la phrase telle qu'elle est écrite sur la page."""
    sortie = []
    index = []
    espace_precedent = False
    for i, ch in enumerate(s):
        if ch in "\u2019\u2018":
            base = "'"
        else:
            base = "".join(
                c for c in unicodedata.normalize("NFD", ch) if unicodedata.category(c) != "Mn"
            )
        base = base.lower()
        if base == "":
            continue
        if base.isspace():
            if espace_precedent:
                continue
            base = " "
            espace_precedent = True
        else:
            espace_precedent = False
        for c in base:
            sortie.append(c)
            index.append(i)
    return "".join(sortie), index


def norm(s):
    return norm_map(s)[0]


# Une énumération de services, sans chiffre ni symbole monétaire : « , installation et démontage ».
# Le refus des chiffres évite d'attraper « Livraison dès 100 $, installation … inclus », où c'est
# l'installation qui est incluse et non la livraison.
ITEM = r"(?:l['’]|la\s+|le\s+|les\s+|du\s+|des\s+|un\s+|une\s+)?[a-z'’]{3,20}"
LISTE = r"(?:\s*,\s*" + ITEM + r")*(?:\s+et\s+" + ITEM + r")?"
ALT_INCLUS = r"inclus|incluse|incluses|compris|comprise|comprises"
INCLUS = r"(?:%s)" % ALT_INCLUS

PROMESSES = [
    ("livraison incluse", r"\blivraisons?" + LISTE + r"\s+(?:est\s+|sont\s+)?" + INCLUS + r"\b"),
    ("livraison incluse", r"\b(?:inclus|incluse|incluses|comprend|comprenant)\s+(?:la\s+|le\s+)?livraison\b"),
    ("livraison gratuite", r"\blivraisons?\s+(?:est\s+)?(?:gratuite|gratuit|gratuites)\b"),
    ("livraison gratuite", r"\bgratuit[e]?\s+(?:la\s+)?livraison\b"),
    ("montage compris", r"\bmontages?" + LISTE + r"\s+(?:est\s+|sont\s+)?(?:" + ALT_INCLUS + r"|gratuit|gratuits)\b"),
    ("montage compris", r"\b(?:inclus|incluse|incluses|compris|comprise|comprises|comprend)\s+(?:le\s+)?montage\b"),
    ("annulation gratuite 7 jours", r"\bannulations?\s+(?:gratuite|gratuit|sans\s+frais)[^.!?]{0,60}?\b7\s*jours"),
    ("annulation gratuite 7 jours", r"\b7\s*jours[^.!?]{0,60}?\bannulations?\s+(?:gratuite|gratuit|sans\s+frais)"),
    ("report sans frais en cas de pluie", r"\breport[^.!?]{0,80}?sans\s+frais"),
    ("report sans frais en cas de pluie", r"\bsans\s+frais[^.!?]{0,60}?\breport"),
    ("report sans frais en cas de pluie", r"\breport(?:er|e)?[^.!?]{0,60}?(?:gratuit|gratuitement)"),
    ("remplacement pendant l'événement", r"\bremplacement[^.!?]{0,60}?pendant\s+l['\u2019]?\s?evenement"),
    ("remplacement pendant l'événement", r"\bremplac(?:ons|e|ement)[^.!?]{0,60}?(?:pendant|durant)\s+(?:l['\u2019]?\s?evenement|votre\s+evenement)"),
]
RE_PROMESSES = [(nom, re.compile(rx)) for nom, rx in PROMESSES]

# Formulations voisines : même promesse, mots différents. Relevées à part,
# sans être assimilées aux six formulations interdites.
VOISINES = [
    ("installation / démontage compris", r"\b(?:installations?|d[eé]montages?|mise\s+en\s+place)\s+(?:et\s+\w+\s+)?(?:est\s+|sont\s+)?(?:compris|comprise|comprises|inclus|incluse|incluses)\b"),
    ("livraison offerte / sans frais", r"\blivraisons?\s+(?:offerte|offert|sans\s+frais)\b|\b(?:aucun|aucuns|sans|z[eé]ro|0\s*\$)\s+(?:de\s+)?frais\s+de\s+livraison\b"),
    ("annulation gratuite / sans frais (délai autre que 7 jours, ou non chiffré)", r"\bannul(?:er|ation|ations)\b[^.!?]{0,40}?\b(?:sans\s+frais|gratuite|gratuit|gratuitement|aucuns\s+frais)\b"),
    ("report / pluie sans frais", r"\b(?:pluie|intemp[eé]ries)\b[^.!?]{0,80}?\b(?:sans\s+frais|gratuit|gratuitement|rembours)"),
    ("report sans frais (sans mention de pluie)", r"\breport(?:er|e|ee)?\b[^.!?]{0,60}?\b(?:sans\s+frais|gratuit|gratuitement)\b"),
    ("remplacement garanti", r"\bremplacement\b[^.!?]{0,60}?\b(?:imm[eé]diat|garanti|sur\s+place|rapide)\b"),
]
RE_VOISINES = [(nom, re.compile(rx)) for nom, rx in VOISINES]

# variantes du report pluie qui exigent le mot pluie pour être retenues
RE_PLUIE = re.compile(r"pluie|intemperie|mauvais temps|meteo")


SEPARATEURS = ".!?•\n|"


def phrase_autour(texte, deb, fin):
    """Découpe la phrase qui contient la correspondance."""
    gauche = max(texte.rfind(c, 0, deb) for c in SEPARATEURS)
    gauche = gauche + 1 if gauche > 0 else 0
    droites = [i for i in (texte.find(c, fin) for c in SEPARATEURS) if i != -1]
    droite = min(droites) + 1 if droites else len(texte)
    coupe_g = coupe_d = False
    if droite - gauche > 260:
        if deb - 120 > gauche:
            gauche, coupe_g = deb - 120, True
        if fin + 140 < droite:
            droite, coupe_d = fin + 140, True
    if coupe_g:  # ne pas commencer au milieu d'un mot
        espace = texte.find(" ", gauche)
        if 0 <= espace < deb:
            gauche = espace + 1
    if coupe_d:
        espace = texte.rfind(" ", fin, droite)
        if espace > fin:
            droite = espace
    morceau = re.sub(r"\s+", " ", texte[gauche:droite]).strip(" –—-|")
    return ("… " if coupe_g else "") + morceau + (" …" if coupe_d else "")


def trouve(texte, jeu=None):
    """Renvoie [(nom_formulation, phrase_exacte)] pour un fragment de texte."""
    out = []
    vus = set()
    n, index = norm_map(texte)
    for nom, rx in (jeu if jeu is not None else RE_PROMESSES):
        for m in rx.finditer(n):
            if nom == "report sans frais en cas de pluie":
                fenetre = n[max(0, m.start() - 120):m.end() + 120]
                if not RE_PLUIE.search(fenetre):
                    continue
            if m.end() > len(index) or m.start() >= len(index):
                continue
            phrase = phrase_autour(texte, index[m.start()], index[m.end() - 1] + 1)
            cle = (nom, norm(phrase)[:140])
            if cle in vus:
                continue
            vus.add(cle)
            out.append((nom, phrase))
    return out


def contexte_element(el):
    """Où se trouve le texte : FAQ, texte visible…"""
    cur = el
    prof = 0
    while cur is not None and prof < 12:
        attrs = getattr(cur, "attrs", None)
        if attrs:
            jeton = " ".join(
                [" ".join(attrs.get("class", []))] + [str(attrs.get(k, "")) for k in ("id", "itemtype", "data-toggle")]
            ).lower()
            if "faq" in jeton or "question" in jeton or "accordion" in jeton or "accordeon" in jeton:
                return "réponse de FAQ"
            if "toggle" in jeton and "et_pb_toggle" in jeton:
                return "réponse de FAQ (accordéon Divi)"
        cur = cur.parent
        prof += 1
    return "texte visible"


def analyse_promesses(html, jeu=None):
    resultats = []  # (formulation, phrase, emplacement)
    vus = set()
    trouve_j = lambda t: trouve(t, jeu)

    def ajoute(nom, phrase, lieu, contrepartie=""):
        cle = (nom, norm(phrase)[:120], lieu)
        if cle not in vus:
            vus.add(cle)
            resultats.append((nom, phrase, lieu, contrepartie))

    # 1) JSON-LD
    for m in re.finditer(r"<script[^>]*application/ld\+json[^>]*>(.*?)</script>", html, re.I | re.S):
        bloc = m.group(1)
        contient_faq = '"FAQPage"' in bloc or "acceptedAnswer" in bloc
        try:
            donnees = json.loads(bloc)
        except Exception:
            donnees = None
        if donnees is not None:
            faq = dict(collecte_faq(donnees))
            for chemin, valeur in parcours_json(donnees):
                valeur = htmllib.unescape(valeur)
                for nom, phrase in trouve_j(valeur):
                    lieu = libelle_jsonld(chemin)
                    rep = faq.get(norm(valeur), "") if lieu.startswith("JSON-LD — question") else ""
                    ajoute(nom, phrase, lieu, rep)
        else:
            for nom, phrase in trouve_j(bloc):
                ajoute(nom, phrase, "JSON-LD" + (" (FAQ)" if contient_faq else ""))

    # 2) balises meta
    for m in re.finditer(r"<meta\b[^>]*>", html, re.I):
        balise = m.group(0)
        nom_attr = re.search(r"(?:name|property)\s*=\s*[\"']([^\"']+)", balise, re.I)
        contenu = re.search(r"content\s*=\s*(\"([^\"]*)\"|'([^']*)')", balise, re.I)
        if not contenu:
            continue
        texte = contenu.group(2) if contenu.group(2) is not None else contenu.group(3)
        texte = htmllib.unescape(texte)
        for nom, phrase in trouve_j(texte):
            ajoute(nom, phrase, "balise meta %s" % (nom_attr.group(1) if nom_attr else "?"))

    # 3) texte visible / FAQ
    soupe = BeautifulSoup(html, "lxml")
    for balise in soupe(["script", "style", "noscript"]):
        balise.decompose()
    corps = soupe.body or soupe
    for el in blocs_feuilles(corps):
        texte = el.get_text(" ", strip=True)
        if len(texte) < 4:
            continue
        for nom, phrase in trouve_j(texte):
            lieu = emplacement_element(el, phrase)
            ajoute(nom, phrase, lieu, reponse_associee(el) if lieu.startswith("question") else "")
    # attributs porteurs de texte
    for balise in corps.find_all(attrs={"alt": True}):
        for nom, phrase in trouve_j(balise.get("alt", "")):
            ajoute(nom, phrase, "attribut alt d'image")
    for balise in corps.find_all(attrs={"title": True}):
        for nom, phrase in trouve_j(str(balise.get("title", ""))):
            ajoute(nom, phrase, "attribut title")
    return resultats


INLINE = {
    "a", "abbr", "b", "br", "em", "i", "mark", "small", "span", "strong",
    "sub", "sup", "u", "code", "time", "label", "wbr", "s", "del", "ins", "q",
}


def blocs_feuilles(racine):
    """Les éléments de plus bas niveau qui portent du texte (paragraphes, li, summary…)."""
    for el in racine.find_all(True):
        if el.name in INLINE:
            continue
        if any(getattr(enf, "name", None) and enf.name not in INLINE for enf in el.children):
            continue
        yield el


def reponse_associee(el):
    """Texte de la réponse qui suit une question de FAQ (<summary> d'un <details>)."""
    parent = el.parent
    if parent is not None and parent.name == "details":
        parts = [
            enf.get_text(" ", strip=True)
            for enf in parent.children
            if getattr(enf, "name", None) and enf is not el
        ]
        return re.sub(r"\s+", " ", " ".join(p for p in parts if p)).strip()
    suivant = el.find_next_sibling()
    return re.sub(r"\s+", " ", suivant.get_text(" ", strip=True)) if suivant else ""


def emplacement_element(el, phrase):
    ctx = contexte_element(el)
    if ctx.startswith("réponse de FAQ"):
        # <summary> = la question ; le reste du <details> = la réponse
        if el.name == "summary" or el.name in ("h2", "h3", "h4", "h5", "dt"):
            return "question de FAQ (formulation interrogative)"
        if phrase.rstrip().endswith("?"):
            return "question de FAQ (formulation interrogative)"
        return "réponse de FAQ"
    if phrase.rstrip().endswith("?") and el.name in ("summary", "h2", "h3", "h4", "h5", "dt"):
        return "titre interrogatif"
    if ctx == "texte visible":
        # question et réponse rassemblées dans un même bloc de texte
        entier = el.get_text(" ", strip=True)
        pos = entier.find(phrase[:40])
        if pos > 0 and "?" in entier[max(0, pos - 200):pos]:
            return "réponse de FAQ (question et réponse dans le même bloc de texte)"
    return ctx


def collecte_faq(obj):
    """Paires (question normalisée, réponse) trouvées dans un bloc JSON-LD FAQPage."""
    if isinstance(obj, dict):
        q = obj.get("name")
        r = obj.get("acceptedAnswer")
        if isinstance(q, str) and isinstance(r, dict) and isinstance(r.get("text"), str):
            yield norm(htmllib.unescape(q)), re.sub(r"\s+", " ", htmllib.unescape(r["text"])).strip()
        for v in obj.values():
            yield from collecte_faq(v)
    elif isinstance(obj, list):
        for v in obj:
            yield from collecte_faq(v)


def libelle_jsonld(chemin):
    if not chemin:
        return "JSON-LD"
    court = re.sub(r"\[\d+\]", "", chemin)
    if "acceptedAnswer" in chemin:
        return "JSON-LD — réponse de FAQ (%s)" % court
    if chemin.endswith(".name") and "mainEntity" in chemin:
        return "JSON-LD — question de FAQ (formulation interrogative)"
    return "JSON-LD (%s)" % court


def parcours_json(obj, chemin=""):
    if isinstance(obj, dict):
        for k, v in obj.items():
            yield from parcours_json(v, "%s.%s" % (chemin, k) if chemin else str(k))
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            yield from parcours_json(v, "%s[%d]" % (chemin, i))
    elif isinstance(obj, str):
        yield chemin, obj


# ----------------------------------------------------------------------- main
def main():
    sortie = []
    fichiers = sorted(f for f in os.listdir(PAGES_DIR) if f.endswith(".html"))
    for nom_fichier in fichiers:
        chemin = os.path.join(PAGES_DIR, nom_fichier)
        html = open(chemin, encoding="utf-8", errors="replace").read()
        slug = nom_fichier[:-5]
        url = "https://evenox.ca/" if slug == "__ACCUEIL__" else "https://evenox.ca/%s/" % slug.replace("__", "/")
        total, formes, exemples = formes_luckiest(html)
        promesses = analyse_promesses(html, RE_PROMESSES)
        voisines = analyse_promesses(html, RE_VOISINES)
        sortie.append(
            {
                "url": url,
                "fichier": nom_fichier,
                "octets": len(html),
                "luckiest_total": total,
                "luckiest_formes": formes,
                "luckiest_exemples": exemples,
                "promesses": [{"formulation": a, "phrase": b, "emplacement": c, "reponse": d} for a, b, c, d in promesses],
                "voisines": [{"formulation": a, "phrase": b, "emplacement": c, "reponse": d} for a, b, c, d in voisines],
            }
        )
    json.dump(sortie, open("resultats.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("pages analysées :", len(sortie))
    print("pages avec Luckiest Guy :", sum(1 for r in sortie if r["luckiest_total"]))
    print("pages avec promesse :", sum(1 for r in sortie if r["promesses"]))


if __name__ == "__main__":
    main()
