#!/usr/bin/env python3
"""Depouillement du releve : ce que Google recoit de chaque page de l'echantillon.

Ne mesure que ce qui est reellement present dans la reponse du serveur (et, pour
le prix affiche des fiches produits, dans le rendu navigateur enregistre par
rendu.py). Tout ce qui n'a pas pu etre mesure reste a None et sera ecrit
« non etabli » dans le rapport.
"""
import json
import re
import sys

sys.path.insert(0, "/workspace/outils")
from bs4 import BeautifulSoup  # noqa: E402

from collecte import lire  # noqa: E402

RENDU = "/tmp/evenox_cache/rendu.jsonl"

# --- pieges connus -----------------------------------------------------------
MOTIF_MIRABEL = re.compile(r"mirabel", re.I)
MOTIF_LIVRAISON_GRATUITE = re.compile(
    r"livraison\s+(?:et\s+\w+\s+)?(?:est\s+|sont\s+)?"
    r"(?:gratuite?s?|offerte?s?|incluse?s?|comprise?s?|sans\s+frais)"
    r"|(?:gratuit|offert|inclus|compris)e?s?\s+(?:la\s+)?livraison"
    r"|livraison\s*:\s*(?:gratuite|offerte|incluse|0\s*\$)"
    r"|frais\s+de\s+livraison\s+(?:offerts?|gratuits?|inclus)",
    re.I)


def texte_visible(html):
    s = BeautifulSoup(html, "lxml")
    for tag in s(["script", "style", "noscript", "title"]):
        tag.decompose()
    return re.sub(r"\s+", " ", s.get_text(" ", strip=True))


def normaliser_url(u):
    if not u:
        return None
    u = u.strip()
    u = re.sub(r"^http://", "https://", u)
    return u.rstrip("/") or "https://evenox.ca"


def prix_en_nombre(txt):
    """'50,00 $' / '$20.00' / '20.00' -> 20.0. Renvoie None si illisible."""
    if txt is None:
        return None
    m = re.search(r"(\d[\d\s\u00a0]*(?:[.,]\d{1,2})?)", str(txt))
    if not m:
        return None
    brut = m.group(1).replace(" ", "").replace("\u00a0", "").replace(",", ".")
    try:
        return round(float(brut), 2)
    except ValueError:
        return None


def montant_avec_devise(txt):
    """Premier montant SUIVI d'un symbole monetaire : « 10 pi : 60,00 $ » -> 60.0.

    Sans cette exigence, un nombre de mesure (« 10 pi ») serait pris pour un prix.
    """
    if not txt:
        return None
    m = re.search(r"(\d[\d\s\u00a0]*(?:[.,]\d{1,2})?)\s*(?:\$|CAD)", txt)
    if not m:
        return None
    return prix_en_nombre(m.group(1))


def charger_rendus():
    rendus = {}
    try:
        with open(RENDU) as f:
            for l in f:
                d = json.loads(l)
                rendus[d["url"]] = d
    except FileNotFoundError:
        pass
    return rendus


def prix_jsonld(blocs):
    """Renvoie (prix, devise) du premier noeud Product/Offer trouve."""
    def creuser(n):
        if isinstance(n, dict):
            if n.get("@type") in ("Offer", "AggregateOffer") and "price" in n:
                return n.get("price"), n.get("priceCurrency")
            if n.get("@type") in ("Offer", "AggregateOffer") and "lowPrice" in n:
                return n.get("lowPrice"), n.get("priceCurrency")
            for v in n.values():
                r = creuser(v)
                if r:
                    return r
        elif isinstance(n, list):
            for v in n:
                r = creuser(v)
                if r:
                    return r
        return None
    for b in blocs:
        r = creuser(b)
        if r:
            return r
    return (None, None)


def types_jsonld(blocs):
    types = []

    def creuser(n):
        if isinstance(n, dict):
            t = n.get("@type")
            if isinstance(t, str):
                types.append(t)
            elif isinstance(t, list):
                types.extend(t)
            for v in n.values():
                creuser(v)
        elif isinstance(n, list):
            for v in n:
                creuser(v)
    for b in blocs:
        creuser(b)
    return types


def prix_editorial(html):
    """Prix ecrit noir sur blanc dans le contenu redactionnel de la fiche.

    Deux sources, dans l'ordre : la ligne « Tarif ... » du corps de page, puis
    la balise <title> surnumeraire inseree dans le corps par le module de code,
    qui recapitule les tarifs. Renvoie (montant, extrait) ou (None, None).
    """
    txt = texte_visible(html)
    m = re.search(r"Tarif\s+(.{0,140})", txt)
    if m:
        extrait = m.group(1)
        p = montant_avec_devise(extrait)
        if p is not None:
            return p, "Tarif " + extrait[:90].strip()
    s = BeautifulSoup(html, "lxml")
    titres = s.find_all("title")
    if len(titres) > 1:
        t2 = titres[1].get_text(strip=True)
        p = montant_avec_devise(t2)
        if p is not None:
            return p, t2
    return None, None


def analyser(famille, url):
    code, html = lire(url)
    f = {"famille": famille, "url": url, "code": code}
    s = BeautifulSoup(html, "lxml")

    # 1. titre
    tous_titres = s.find_all("title")
    t_head = s.head.find("title") if s.head else None
    titre = t_head.get_text() if t_head else None
    f["titre"] = titre
    f["titre_len"] = len(titre) if titre is not None else None
    f["titre_vide"] = (titre is not None and titre.strip() == "")
    f["nb_balises_title"] = len(tous_titres)
    f["titre_corps"] = (tous_titres[1].get_text()
                        if len(tous_titres) > 1 else None)

    # 2. description meta
    md = s.find("meta", attrs={"name": re.compile(r"^description$", re.I)})
    desc = md.get("content") if md and md.has_attr("content") else None
    f["desc"] = desc
    f["desc_len"] = len(desc) if desc is not None else None

    # 4. canonique
    can = s.find("link", rel=lambda v: v and "canonical" in
                 (v if isinstance(v, list) else [v]))
    can_href = can.get("href") if can else None
    f["canonique"] = can_href
    f["canonique_auto"] = (normaliser_url(can_href) == normaliser_url(url)
                           if can_href else None)

    # 5. JSON-LD
    blocs, erreurs = [], []
    for sc in s.find_all("script", type=re.compile(r"application/ld\+json", re.I)):
        brut = sc.string or sc.get_text()
        try:
            blocs.append(json.loads(brut))
        except Exception as exc:  # noqa: BLE001
            erreurs.append(str(exc)[:120])
    f["jsonld_nb"] = len(blocs) + len(erreurs)
    f["jsonld_erreurs"] = erreurs
    f["jsonld_types"] = sorted(set(types_jsonld(blocs)))
    p, dev = prix_jsonld(blocs)
    f["jsonld_prix"] = prix_en_nombre(p)
    f["jsonld_devise"] = dev

    # 6. h1
    h1s = [h.get_text(" ", strip=True) for h in s.find_all("h1")]
    f["h1"] = h1s
    f["h1_nb"] = len(h1s)

    # pieges
    txt = texte_visible(html)
    f["mirabel_desc"] = bool(desc and MOTIF_MIRABEL.search(desc))
    f["mirabel_titre"] = bool(titre and MOTIF_MIRABEL.search(titre))
    f["mirabel_corps"] = len(MOTIF_MIRABEL.findall(txt))
    m = MOTIF_LIVRAISON_GRATUITE.search(desc or "")
    f["livr_gratuite_desc"] = m.group(0) if m else None
    trouves = MOTIF_LIVRAISON_GRATUITE.findall(txt)
    f["livr_gratuite_corps_nb"] = len(trouves)
    f["livr_gratuite_corps_extraits"] = [
        txt[max(0, mm.start() - 70):mm.end() + 70]
        for mm in list(MOTIF_LIVRAISON_GRATUITE.finditer(txt))[:3]]

    # prix
    pe, extrait = prix_editorial(html)
    f["prix_editorial"] = pe
    f["prix_editorial_extrait"] = extrait
    return f


def main():
    rendus = charger_rendus()
    lignes = [l.rstrip("\n").split("\t") for l in open("/tmp/echantillon.tsv") if l.strip()]
    fiches = []
    for famille, url in lignes:
        f = analyser(famille, url)
        r = rendus.get(url, {})
        f["prix_widget_txt"] = r.get("prix_widget")
        f["prix_widget"] = prix_en_nombre(r.get("prix_widget"))
        f["duree_widget"] = r.get("duree_widget")
        f["widget_present"] = r.get("widget_present")
        fiches.append(f)
    with open("/tmp/evenox_cache/analyse.json", "w") as fh:
        json.dump(fiches, fh, ensure_ascii=False, indent=1)
    print(f"{len(fiches)} fiches analysees -> /tmp/evenox_cache/analyse.json")


if __name__ == "__main__":
    main()
