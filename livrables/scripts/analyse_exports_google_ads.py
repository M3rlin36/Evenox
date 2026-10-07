# -*- coding: utf-8 -*-
"""Analyseur des exports de rapports Google Ads — Évenox.

MODE D'EMPLOI (en français)
===========================
1. Dans Google Ads, exporte les rapports décrits dans
   /home/user/Evenox/donnees/exports-google-ads/README.md, pour les DEUX comptes
   (AW-16529262834 et AW-16776285171), période du 1er janvier 2024 à aujourd'hui,
   segmentés par mois quand c'est possible.
2. Dépose les fichiers (CSV, « CSV Excel » UTF-16, TSV ou .xlsx) dans
   /home/user/Evenox/donnees/exports-google-ads/
   Idéalement un sous-dossier par compte, nommé avec l'identifiant :
       exports-google-ads/AW-16529262834/...
       exports-google-ads/AW-16776285171/...
   (ou mets « AW-16529262834 » dans le nom du fichier). Si le rapport contient
   une colonne « Compte » / « ID client » à plusieurs valeurs, elle est utilisée.
3. Lance :
       python3 -I /home/user/Evenox/livrables/scripts/analyse_exports_google_ads.py
   Options utiles :
       --input  DOSSIER     dossier des exports (défaut : donnees/exports-google-ads/)
       --output FICHIER.md  rapport (défaut : livrables/AUDIT-COMPTE-GOOGLE-ADS.md)
       --csv    FICHIER.csv négatifs suggérés (défaut : à côté du rapport,
                            negatifs_suggeres_google_ads.csv)
       --alias "123-456-7890=AW-16529262834"  renomme un compte (répétable)
       --today  2026-10-07  date de référence pour la récence
       --zone-km 40         rayon de la zone desservie autour de Sainte-Thérèse
4. Lis AUDIT-COMPTE-GOOGLE-ADS.md. La section « Fichiers lus » dit quel type de
   rapport a été reconnu pour chaque fichier ; si un fichier est « ignoré »,
   vérifie qu'il contient bien les colonnes demandées dans le README.

Ce que le script gère : encodage UTF-16 (tabulations) ou UTF-8 (virgules ou
points-virgules), lignes de titre avant l'en-tête, en-têtes FR ou EN, « -- »
pour les valeurs nulles, lignes de totaux en bas, nombres « 1 234,56 $ » ou
« CA$1,234.56 », mois « janv. 2024 » / « January 2024 » / « 2024-01-01 ».

Types reconnus automatiquement (selon les colonnes) : campagnes (par mois si
segmenté), termes de recherche, mots clés, annonces, actions de conversion,
zones géographiques, jour de la semaine / heure de la journée.

Dépendances : Python 3 + pandas (pip install pandas openpyxl).
"""
import argparse
import calendar
import csv
import io
import math
import os
import re
import sys
import unicodedata
from collections import defaultdict
from datetime import date, datetime

try:
    import pandas as pd
except ImportError:  # pragma: no cover
    sys.exit("pandas est requis : pip install pandas openpyxl")

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
DEFAULT_INPUT = os.path.join(ROOT, "donnees", "exports-google-ads")
DEFAULT_OUTPUT = os.path.join(ROOT, "livrables", "AUDIT-COMPTE-GOOGLE-ADS.md")
DEFAULT_KEYWORDS = os.path.join(ROOT, "livrables", "google-ads-editor", "3_mots_cles.csv")
DEFAULT_NEGATIVES = os.path.join(ROOT, "livrables", "google-ads-editor", "5_mots_cles_negatifs.csv")
KNOWN_ACCOUNTS = ["AW-16529262834", "AW-16776285171"]
BASE = (45.6390, -73.8280)  # entrepôt de Sainte-Thérèse
BRAND_RE = re.compile(r"\b(e|é)venox\b")

# ----------------------------------------------------------------- utilitaires


def strip_accents(s):
    return "".join(c for c in unicodedata.normalize("NFKD", s) if not unicodedata.combining(c))


def norm(s):
    """minuscules, sans accents, ponctuation -> espace."""
    if s is None:
        return ""
    s = strip_accents(str(s)).lower().replace("\u00a0", " ").replace("\u202f", " ")
    s = re.sub(r"[^a-z0-9%$]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def norm_term(s):
    """Normalisation d'un terme / mot clé (retire + [ ] " )."""
    s = str(s or "").replace("+", " ").replace("[", " ").replace("]", " ").replace('"', " ")
    return norm(s)


def orig_phrase(orig, phrase_n):
    """Retrouve dans le terme d'origine (avec accents) la séquence de mots qui correspond à phrase_n."""
    words = [w for w in re.split(r"[^\w%$]+", str(orig).lower().replace("\u00a0", " ")) if w]
    nw = [norm(w) for w in words]
    target = phrase_n.split()
    for i in range(len(nw) - len(target) + 1):
        if nw[i:i + len(target)] == target:
            return " ".join(words[i:i + len(target)])
    return phrase_n


def md(s):
    return str(s).replace("|", "\\|").replace("\n", " ")


def fmt_money(x, dec=2):
    if x is None or (isinstance(x, float) and math.isnan(x)):
        return "—"
    s = f"{x:,.{dec}f}".replace(",", "\u00a0").replace(".", ",")
    return s + "\u00a0$"


def fmt_int(x):
    if x is None or (isinstance(x, float) and math.isnan(x)):
        return "—"
    return f"{x:,.0f}".replace(",", "\u00a0")


def fmt_num(x, dec=1):
    if x is None or (isinstance(x, float) and math.isnan(x)):
        return "—"
    return f"{x:,.{dec}f}".replace(",", "\u00a0").replace(".", ",")


def fmt_pct(x, dec=1):
    if x is None or (isinstance(x, float) and math.isnan(x)):
        return "—"
    return fmt_num(100 * x, dec) + "\u00a0%"


def div(a, b):
    try:
        return a / b if b else float("nan")
    except Exception:
        return float("nan")


def table(headers, rows):
    out = ["| " + " | ".join(headers) + " |", "|" + "|".join("---" for _ in headers) + "|"]
    for r in rows:
        out.append("| " + " | ".join(md(c) for c in r) + " |")
    return "\n".join(out)


# ------------------------------------------------------- en-têtes FR / EN

ALIASES = {
    "account": ["compte", "account", "nom du compte", "account name", "nom de compte", "nom du client"],
    "customer_id": ["id client", "customer id", "id du client", "numero client", "id de compte", "account id"],
    "campaign": ["campagne", "campaign", "nom de la campagne", "campaign name"],
    "campaign_type": ["type de campagne", "campaign type"],
    "status": ["etat", "status", "statut", "etat de la campagne", "campaign state", "campaign status",
               "etat du suivi", "tracking status", "etat de l action de conversion"],
    "ad_group": ["groupe d annonces", "ad group", "nom du groupe d annonces", "ad group name"],
    "month": ["mois", "month"],
    "day": ["jour", "day", "date"],
    "week": ["semaine", "week", "semaine lun dim", "week mon sun"],
    "quarter": ["trimestre", "quarter"],
    "year": ["annee", "year"],
    "day_of_week": ["jour de la semaine", "day of week", "day of the week"],
    "hour": ["heure de la journee", "hour of day", "heure", "hour", "hour of the day"],
    "cost": ["cout", "cost", "depenses", "spend", "cout total"],
    "clicks": ["clics", "clicks"],
    "impressions": ["impr", "impressions"],
    "conversions": ["conversions", "conv"],
    "conv_value": ["valeur de conv", "conv value", "valeur de conversion", "conversion value",
                   "valeur conv", "valeur des conv", "total conv value", "valeur de conversions"],
    "all_conv": ["toutes les conv", "all conv", "toutes conv", "conv toutes", "all conversions",
                 "toutes les conversions"],
    "all_conv_value": ["valeur de toutes les conv", "all conv value", "valeur toutes les conv"],
    "ctr": ["ctr", "taux de clics"],
    "avg_cpc": ["cpc moy", "avg cpc", "cpc moyen", "average cpc"],
    "cost_per_conv": ["cout conv", "cost conv", "cout par conversion", "cost per conversion", "cpa"],
    "conv_rate": ["taux de conv", "conv rate", "taux de conversion", "conversion rate"],
    "search_term": ["terme de recherche", "search term", "requete de recherche", "search query",
                    "termes de recherche", "search terms", "requete"],
    "match_type": ["type de correspondance", "match type", "type de correspondance du terme de recherche",
                   "search term match type", "type de correspondance du mot cle", "keyword match type"],
    "added_excluded": ["ajoute exclu", "added excluded", "ajoute exclus"],
    "keyword": ["mot cle", "keyword", "mot cle du reseau de recherche", "search keyword", "mots cles",
                "keywords", "mot cle du reseau de recherche texte", "keyword text"],
    "quality_score": ["niveau de qualite", "quality score"],
    "conversion_action": ["action de conversion", "conversion action", "nom de l action de conversion",
                          "conversion action name", "conversion name", "nom de la conversion"],
    "conv_source": ["source", "origine", "conversion source", "source de conversion",
                    "origine de l action de conversion", "conversion action source"],
    "conv_category": ["categorie", "category", "categorie d action", "action category",
                      "categorie de l action de conversion", "conversion category",
                      "categorie de conversion", "conversion action category", "categorie de l action"],
    "conv_optimization": ["optimisation de l action", "action optimization", "optimisation",
                          "inclure dans conversions", "include in conversions",
                          "incluse dans conversions", "primary secondary", "objectif principal",
                          "action principale"],
    "location_type": ["type d emplacement", "location type", "type de lieu"],
    "ad_type": ["type d annonce", "ad type"],
    "ad_headline": ["titre 1", "headline 1", "annonce", "ad", "titre", "headline"],
    "final_url": ["url finale", "final url", "urls finales", "final urls"],
    "description": ["description 1", "description"],
    "currency": ["code de devise", "currency code", "devise", "currency"],
}
ALIAS_LOOKUP = {}
for canon, lst in ALIASES.items():
    for a in lst:
        ALIAS_LOOKUP.setdefault(norm(a), canon)

FR_HINTS = {"campagne", "cout", "clics", "mois", "terme de recherche", "mot cle", "compte",
            "groupe d annonces", "valeur de conv", "toutes les conv", "action de conversion", "jour",
            "type de correspondance", "taux de conv", "cpc moy", "heure de la journee"}
METRICS = {"cost", "clicks", "impressions", "conversions", "conv_value", "all_conv", "all_conv_value",
           "ctr", "avg_cpc", "cost_per_conv", "conv_rate", "quality_score"}


def map_header(h):
    n = norm(h)
    if not n:
        return None
    if n in ALIAS_LOOKUP:
        return ALIAS_LOOKUP[n]
    n2 = norm(re.sub(r"\(.*?\)", " ", str(h)))
    if n2 in ALIAS_LOOKUP and ALIAS_LOOKUP[n2] not in ("day",):
        # « Coût (CAD) », mais pas « Ville (emplacement de l'utilisateur) »
        if not re.search(r"emplacement|location", n):
            return ALIAS_LOOKUP[n2]
    # règles « contient » pour les rapports géographiques
    if re.search(r"\b(ville|city|municipalite)\b", n):
        return "geo_city"
    if re.search(r"\b(region|province|state)\b", n) and "campagne" not in n:
        return "geo_region"
    if re.search(r"\b(pays|country)\b", n):
        return "geo_country"
    if re.search(r"\b(distance|rayon|radius)\b", n):
        return "geo_distance"
    if re.search(r"\b(emplacement|location|lieu|zone geographique|geographic)\b", n) and "type" not in n:
        return "geo_location"
    if re.search(r"^(titre|headline) \d+$", n):
        return "ad_headline_n"
    if n.startswith("description"):
        return "description_n"
    return None


# ------------------------------------------------------- lecture des fichiers


def decode_bytes(raw):
    if raw[:2] in (b"\xff\xfe", b"\xfe\xff"):
        return raw.decode("utf-16"), "UTF-16"
    if raw[:3] == b"\xef\xbb\xbf":
        return raw.decode("utf-8-sig"), "UTF-8 (BOM)"
    head = raw[:2000]
    if head.count(b"\x00") > len(head) // 4:
        even_nuls = head[0::2].count(b"\x00")
        enc = "utf-16-be" if even_nuls > len(head) // 4 else "utf-16-le"
        return raw.decode(enc, errors="replace"), enc.upper()
    try:
        return raw.decode("utf-8"), "UTF-8"
    except UnicodeDecodeError:
        return raw.decode("cp1252", errors="replace"), "Windows-1252"


def split_line(line, delim):
    return next(csv.reader([line], delimiter=delim)) if line else []


def guess_delim(lines):
    sample = [l for l in lines[:20] if l.strip()]
    best, best_score = ",", -1
    for d in ("\t", ",", ";"):
        counts = [len(split_line(l, d)) for l in sample]
        score = max(counts) if counts else 0
        if score > best_score:
            best, best_score = d, score
    return best


def find_header(rows):
    for i, r in enumerate(rows[:20]):
        mapped = [map_header(c) for c in r]
        known = [m for m in mapped if m]
        if len(known) >= 2 and (any(m in METRICS for m in known) or len(known) >= 3):
            return i
    return None


def load_rows(path):
    """Retourne (rows: list[list[str]], encodage, delim)."""
    ext = os.path.splitext(path)[1].lower()
    if ext in (".xlsx", ".xls"):
        df = pd.read_excel(path, header=None, dtype=str)
        rows = [["" if (isinstance(v, float) and math.isnan(v)) or v is None else str(v) for v in r]
                for r in df.values.tolist()]
        return rows, "Excel", "xlsx"
    with open(path, "rb") as f:
        raw = f.read()
    text, enc = decode_bytes(raw)
    lines = text.splitlines()
    delim = guess_delim(lines)
    rows = list(csv.reader(io.StringIO("\n".join(lines)), delimiter=delim))
    return rows, enc, {"\t": "tabulation", ",": "virgule", ";": "point-virgule"}[delim]


def detect_decimal_comma(df, default):
    """Décide si la virgule est décimale en regardant les valeurs des colonnes de métriques."""
    comma = dot = 0
    for col in df.columns:
        if col.split("__")[0] not in METRICS:
            continue
        for v in df[col].astype(str).head(300):
            v = re.sub(r"[\s\u00a0\u202f$%]|CA|US", "", v)
            if re.search(r"\d,\d{1,2}$", v) and "." not in v:
                comma += 1
            elif re.search(r"\d\.\d{1,2}$", v):
                dot += 1
    if comma == dot:
        return default
    return comma > dot


def parse_num(x, decimal_comma):
    if x is None:
        return float("nan")
    s = str(x).strip()
    if s in ("", "--", "-", "—", "nan", "None", "N/A", "n/a", " --"):
        return float("nan")
    neg = s.startswith("(") and s.endswith(")")
    s = re.sub(r"(CA\$|US\$|CAD|USD|\$|€|%|\s|\u00a0|\u202f|<|>|\(|\))", "", s)
    if s.startswith("-"):
        neg, s = True, s[1:]
    if "," in s and "." in s:
        if s.rfind(",") > s.rfind("."):
            s = s.replace(".", "").replace(",", ".")
        else:
            s = s.replace(",", "")
    elif "," in s:
        if s.count(",") > 1 or (not decimal_comma and re.fullmatch(r"\d{1,3}(,\d{3})+", s)):
            s = s.replace(",", "")
        else:
            s = s.replace(",", ".")
    try:
        v = float(s)
    except ValueError:
        return float("nan")
    return -v if neg else v


FR_MONTHS = {"janv": 1, "janvier": 1, "jan": 1, "january": 1, "fevr": 2, "fevrier": 2, "fev": 2,
             "feb": 2, "february": 2, "mars": 3, "mar": 3, "march": 3, "avr": 4, "avril": 4, "apr": 4,
             "april": 4, "mai": 5, "may": 5, "juin": 6, "jun": 6, "june": 6, "juil": 7, "juillet": 7,
             "jul": 7, "july": 7, "aout": 8, "aug": 8, "august": 8, "sept": 9, "septembre": 9, "sep": 9,
             "september": 9, "oct": 10, "octobre": 10, "october": 10, "nov": 11, "novembre": 11,
             "november": 11, "dec": 12, "decembre": 12, "december": 12}


def parse_month(v):
    """-> 'YYYY-MM' ou None."""
    if v is None:
        return None
    s = str(v).strip()
    m = re.search(r"(\d{4})[-/.](\d{1,2})", s)
    if m and 1 <= int(m.group(2)) <= 12:
        return f"{m.group(1)}-{int(m.group(2)):02d}"
    m = re.search(r"(\d{1,2})[/.](\d{1,2})[/.](\d{4})", s)  # jj/mm/aaaa
    if m:
        mm = int(m.group(2)) if int(m.group(2)) <= 12 else int(m.group(1))
        return f"{m.group(3)}-{mm:02d}"
    n = norm(s)
    y = re.search(r"\b(20\d{2})\b", n)
    if y:
        for tok in n.split():
            if tok in FR_MONTHS:
                return f"{y.group(1)}-{FR_MONTHS[tok]:02d}"
    return None


DOW = {"lundi": 1, "monday": 1, "mardi": 2, "tuesday": 2, "mercredi": 3, "wednesday": 3, "jeudi": 4,
       "thursday": 4, "vendredi": 5, "friday": 5, "samedi": 6, "saturday": 6, "dimanche": 7, "sunday": 7}
DOW_FR = {1: "lundi", 2: "mardi", 3: "mercredi", 4: "jeudi", 5: "vendredi", 6: "samedi", 7: "dimanche"}


def classify(cols):
    c = set(cols)
    if "search_term" in c:
        return "search_terms"
    if "conversion_action" in c:
        return "conversion_actions"
    if c & {"geo_city", "geo_region", "geo_country", "geo_location", "geo_distance"} and c & METRICS:
        return "geo"
    if c & {"hour", "day_of_week"} and c & METRICS:
        return "time"
    if c & {"ad_type", "final_url", "ad_headline", "ad_headline_n"} and c & METRICS:
        return "ads"
    if "keyword" in c and c & METRICS:
        return "keywords"
    if c & {"campaign", "account", "customer_id", "month"} and c & METRICS:
        return "campaigns"
    return None


TYPE_FR = {"campaigns": "Campagnes", "search_terms": "Termes de recherche", "keywords": "Mots clés",
           "ads": "Annonces", "conversion_actions": "Actions de conversion", "geo": "Zones géographiques",
           "time": "Jour / heure"}


TOTAL_RE = re.compile(r"^\s*(total|totaux|totals?)\s*([:：].*)?$", re.I)


def read_export(path, input_dir, aliases):
    info = {"path": os.path.relpath(path, input_dir), "type": None, "rows": 0, "totals": 0,
            "warn": [], "enc": "", "delim": "", "lang": ""}
    try:
        rows, enc, delim = load_rows(path)
    except Exception as e:  # noqa
        info["warn"].append(f"lecture impossible : {e}")
        return None, info
    info["enc"], info["delim"] = enc, delim
    h = find_header(rows)
    if h is None:
        info["warn"].append("en-tête non reconnu (colonnes Google Ads absentes)")
        return None, info
    title = " ".join(" ".join(r) for r in rows[:h])
    header = rows[h]
    canon, seen = [], defaultdict(int)
    for col in header:
        m = map_header(col) or "x_" + norm(col)
        seen[m] += 1
        canon.append(m if seen[m] == 1 else f"{m}__{seen[m]}")
    fr = sum(1 for col in header if norm(col) in FR_HINTS or norm(re.sub(r"\(.*?\)", "", col)) in FR_HINTS)
    info["lang"] = "FR" if fr >= 1 else "EN"
    data = []
    for r in rows[h + 1:]:
        if not any(str(v).strip() for v in r):
            continue
        if any(TOTAL_RE.match(str(v)) for v in r[:4]):
            info["totals"] += 1
            continue
        r = list(r) + [""] * (len(header) - len(r))
        data.append(r[:len(header)])
    df = pd.DataFrame(data, columns=canon)
    dec_comma = detect_decimal_comma(df, info["lang"] == "FR")
    for col in df.columns:
        base = col.split("__")[0]
        if base in METRICS:
            df[col] = df[col].map(lambda v: parse_num(v, dec_comma))
    # mois
    if "month" in df.columns:
        df["period"] = df["month"].map(parse_month)
    elif "day" in df.columns:
        df["period"] = df["day"].map(parse_month)
    elif "week" in df.columns:
        df["period"] = df["week"].map(parse_month)
    else:
        df["period"] = None
    if "day" in df.columns:
        df["date"] = pd.to_datetime(df["day"], errors="coerce")
    # compte
    df["acct"] = resolve_account(df, path, input_dir, title, aliases)
    info["type"] = classify(canon)
    info["rows"] = len(df)
    info["accounts"] = sorted(df["acct"].unique().tolist()) if len(df) else []
    if info["type"] is None:
        info["warn"].append("type de rapport non reconnu")
    for k in ("cost", "clicks", "impressions"):
        if k not in df.columns and info["type"] not in ("conversion_actions",):
            info["warn"].append(f"colonne « {k} » absente")
    return df, info


def resolve_account(df, path, input_dir, title, aliases):
    rel = os.path.relpath(path, input_dir)
    aw = re.search(r"AW[-_ ]?(\d{9,12})", rel + " " + title, re.I)
    path_label = f"AW-{aw.group(1)}" if aw else None
    if not path_label:
        cid = re.search(r"\b(\d{3}-\d{3}-\d{4})\b", rel + " " + title)
        if cid:
            path_label = cid.group(1)
    if not path_label and os.sep in rel:
        path_label = rel.split(os.sep)[0]
    col = None
    for c in ("customer_id", "account"):
        if c in df.columns and df[c].astype(str).str.strip().ne("").any():
            col = c
            break
    if col and (df[col].nunique() > 1 or not path_label):
        s = df[col].astype(str).str.strip()
        if col == "customer_id" and "account" in df.columns:
            acc = df["account"].astype(str).str.strip()
            s = pd.Series([c if (c in aliases or not n) else f"{n} ({c})" for c, n in zip(s, acc)], index=df.index)
        out = s
    else:
        out = pd.Series([path_label or f"Compte inconnu ({os.path.basename(path)})"] * len(df), index=df.index)
    return out.map(lambda v: aliases.get(v, aliases.get(norm(v), v)))


# ------------------------------------------------------- listes Évenox


def read_editor_csv(path):
    if not os.path.exists(path):
        return []
    with open(path, "rb") as f:
        text, _ = decode_bytes(f.read())
    lines = text.splitlines()
    return list(csv.DictReader(io.StringIO("\n".join(lines)), delimiter=guess_delim(lines)))


def load_negative_lists(path):
    rows = read_editor_csv(path)
    by_term = defaultdict(set)
    camps = set()
    for r in rows:
        t, c = norm_term(r.get("Keyword", "")), r.get("Campaign", "")
        if t:
            by_term[t].add(c)
            camps.add(c)
            NEG_ORIG.setdefault(t, str(r.get("Keyword", "")).strip().lower())
    return by_term, camps


NEG_ORIG = {}


THEMES = [
    ("Emploi / recrutement", r"emplois?|jobs?|carrieres?|careers?|embauche|salaires?|stages?|recrutement|hiring|temps partiel|offres? d emploi"),
    ("Prix bas / gratuit", r"pas chere?s?|moins chere?|bon marche|aubaines?|rabais|soldes?|code promo|coupons?|gratuite?s?|liquidation|cheap|cheapest|free|discount|groupon|prix de gros|low cost"),
    ("Achat / occasion (pas de la location)", r"a vendre|acheter|achat|usagee?s?|d occasion|seconde main|kijiji|marketplace|lespac|for sale|buy|used|wholesale|fabricants?|grossistes?"),
    ("Bricolage / information", r"diy|faire soi meme|fait maison|comment faire|comment monter|bricolage|tutoriels?|pinterest|modeles?|gabarits?|a imprimer|c est quoi|definition|wikipedia|cours|formation|pdf|youtube|how to|templates?|printable|idees?|ideas?"),
    ("Jeux gonflables / enfants", r"gonflables?|bounce house|bouncy castle|enfants?|kids?|jeux pour"),
    ("Grandes surfaces / marques tierces", r"amazon|walmart|costco|canadian tire|ikea|dollarama|rona|home depot|jean coutu|party city|wish|temu"),
    ("Hors zone (villes éloignées)", r"quebec city|ville de quebec|sherbrooke|gatineau|ottawa|toronto|trois rivieres|drummondville|granby|saint hyacinthe|saguenay|levis|sainte foy|beauport|charlesbourg|longueuil|brossard|rive sud|france|paris|laval france|mayenne|rimouski"),
    ("Autres services (hors offre)", r"dj|traiteurs?|restaurants?|salles? a louer|location de salle|salles?|limousines?|photographes?|karting|bowling|quilles|escape|location auto|camions?|echafaudages?|tentes? de camping|camping|costumes?|deguisements?|robes?|photo passeport|passeport|abri d auto|abri tempo|carport|toile de remplacement"),
    ("Logiciel / numérique", r"apps?|applications?|logiciels?|virtuelle?s?|zoom|en ligne|telecharger|download|iphone|ipad|windows|mac|macbook|online"),
]
THEMES_RE = [(name, re.compile(r"\b(" + pat + r")\b")) for name, pat in THEMES]


def theme_of(term_n, with_token=False):
    for name, rx in THEMES_RE:
        m = rx.search(term_n)
        if m:
            return (name, m.group(1)) if with_token else name
    return ("Non classé (à juger)", "") if with_token else "Non classé (à juger)"


# ------------------------------------------------------- géographie

CITIES = {
    "sainte therese": (45.639, -73.828), "blainville": (45.670, -73.880), "boisbriand": (45.617, -73.839),
    "rosemere": (45.636, -73.800), "lorraine": (45.683, -73.783), "bois des filion": (45.667, -73.750),
    "sainte anne des plaines": (45.764, -73.811), "mirabel": (45.680, -74.030),
    "saint eustache": (45.565, -73.905), "deux montagnes": (45.540, -73.900),
    "sainte marthe sur le lac": (45.530, -73.940), "pointe calumet": (45.500, -73.970),
    "saint joseph du lac": (45.534, -74.000), "oka": (45.465, -74.089), "terrebonne": (45.700, -73.647),
    "mascouche": (45.750, -73.600), "saint jerome": (45.780, -74.004), "laval": (45.569, -73.724),
    "montreal": (45.502, -73.567), "repentigny": (45.742, -73.450), "charlemagne": (45.720, -73.485),
    "l assomption": (45.823, -73.429), "saint lin laurentides": (45.850, -73.763),
    "sainte sophie": (45.820, -73.900), "prevost": (45.870, -74.080), "saint colomban": (45.730, -74.130),
    "lachute": (45.650, -74.333), "saint sauveur": (45.896, -74.170), "sainte adele": (45.950, -74.130),
    "mont tremblant": (46.118, -74.596), "saint placide": (45.530, -74.200),
    "vaudreuil dorion": (45.400, -74.033), "pointe claire": (45.448, -73.817), "dorval": (45.450, -73.750),
    "kirkland": (45.450, -73.866), "beaconsfield": (45.433, -73.866),
    "dollard des ormeaux": (45.494, -73.824), "sainte anne de bellevue": (45.404, -73.948),
    "westmount": (45.483, -73.600), "mont royal": (45.516, -73.643), "cote saint luc": (45.465, -73.665),
    "longueuil": (45.531, -73.518), "brossard": (45.450, -73.466), "boucherville": (45.591, -73.436),
    "saint lambert": (45.500, -73.500), "la prairie": (45.416, -73.500), "chateauguay": (45.380, -73.750),
    "saint bruno de montarville": (45.533, -73.350), "varennes": (45.683, -73.433),
    "joliette": (46.017, -73.433), "saint jean sur richelieu": (45.307, -73.262), "granby": (45.400, -72.733),
    "saint hyacinthe": (45.630, -72.957), "sherbrooke": (45.400, -71.900), "drummondville": (45.883, -72.483),
    "trois rivieres": (46.350, -72.550), "quebec": (46.813, -71.208), "levis": (46.800, -71.180),
    "gatineau": (45.477, -75.701), "ottawa": (45.422, -75.697), "toronto": (43.653, -79.383),
    "saguenay": (48.428, -71.068), "rimouski": (48.449, -68.524), "salaberry de valleyfield": (45.250, -74.133),
    "hudson": (45.450, -74.150), "rigaud": (45.480, -74.300), "sainte julienne": (45.970, -73.720),
    "rawdon": (46.045, -73.716), "saint constant": (45.370, -73.570), "candiac": (45.380, -73.520),
    "sainte julie": (45.583, -73.333), "chambly": (45.450, -73.283), "beloeil": (45.567, -73.200),
    "mont saint hilaire": (45.562, -73.191), "lavaltrie": (45.883, -73.283), "paris": (48.857, 2.352),
    "saint laurent": (45.507, -73.676), "pierrefonds": (45.490, -73.850), "anjou": (45.605, -73.560),
    "montreal nord": (45.600, -73.633), "riviere des prairies": (45.650, -73.580),
    "pointe aux trembles": (45.650, -73.500), "lasalle": (45.430, -73.630), "lachine": (45.440, -73.690),
    "verdun": (45.458, -73.570), "saint leonard": (45.587, -73.597),
}
CITY_ALIASES = {"quebec city": "quebec", "ville de quebec": "quebec", "valleyfield": "salaberry de valleyfield",
                "st jerome": "saint jerome", "ste therese": "sainte therese", "st eustache": "saint eustache"}


def city_key(v):
    n = norm(str(v).split(",")[0])
    n = re.sub(r"^st ", "saint ", n)
    n = re.sub(r"^ste ", "sainte ", n)
    return CITY_ALIASES.get(n, n)


def haversine(a, b):
    r = 6371.0
    la1, lo1, la2, lo2 = map(math.radians, (a[0], a[1], b[0], b[1]))
    h = math.sin((la2 - la1) / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin((lo2 - lo1) / 2) ** 2
    return 2 * r * math.asin(math.sqrt(h))


# ------------------------------------------------------- agrégation


def num(df, col):
    return df[col].fillna(0) if col in df.columns else pd.Series(0.0, index=df.index)


def metrics(df):
    cost, clicks, impr = num(df, "cost").sum(), num(df, "clicks").sum(), num(df, "impressions").sum()
    conv = num(df, "conversions").sum()
    val = num(df, "conv_value").sum()
    return {"cost": cost, "clicks": clicks, "impr": impr, "conv": conv, "value": val,
            "cpc": div(cost, clicks), "cpa": div(cost, conv), "cvr": div(conv, clicks), "ctr": div(clicks, impr)}


def dedupe(frames, infos, kind, warnings):
    """Un seul fichier par (type, compte), sauf si les mois ne se chevauchent pas."""
    if not frames:
        return pd.DataFrame()
    by_acct = defaultdict(list)
    for df, inf in zip(frames, infos):
        for acct, sub in df.groupby("acct"):
            by_acct[acct].append((sub, inf))
    keep = []
    for acct, lst in by_acct.items():
        if len(lst) == 1:
            keep.append(lst[0][0])
            continue
        periods = [set(s["period"].dropna()) for s, _ in lst]
        disjoint = all(periods) and sum(len(p) for p in periods) == len(set().union(*periods))
        if disjoint:
            keep.extend(s for s, _ in lst)
            continue
        lst.sort(key=lambda t: (t[0]["period"].notna().any(), len(t[0])), reverse=True)
        keep.append(lst[0][0])
        warnings.append(f"{TYPE_FR[kind]} / {acct} : plusieurs fichiers qui se chevauchent ; seul "
                        f"« {lst[0][1]['path']} » est utilisé (ignorés : "
                        + ", ".join(f"« {i['path']} »" for _, i in lst[1:]) + ").")
    return pd.concat(keep, ignore_index=True)


# ------------------------------------------------------- programme principal


def main():
    ap = argparse.ArgumentParser(description="Audit des exports Google Ads (Évenox)")
    ap.add_argument("--input", default=DEFAULT_INPUT)
    ap.add_argument("--output", default=DEFAULT_OUTPUT)
    ap.add_argument("--csv", default=None)
    ap.add_argument("--keywords", default=DEFAULT_KEYWORDS)
    ap.add_argument("--negatives", default=DEFAULT_NEGATIVES)
    ap.add_argument("--today", default=None)
    ap.add_argument("--zone-km", type=float, default=40.0)
    ap.add_argument("--top", type=int, default=30)
    ap.add_argument("--alias", action="append", default=[], help="valeur=libellé (répétable)")
    a = ap.parse_args()

    today = datetime.strptime(a.today, "%Y-%m-%d").date() if a.today else date.today()
    aliases = {}
    for s in a.alias:
        if "=" in s:
            k, v = s.split("=", 1)
            aliases[k.strip()] = v.strip()
            aliases[norm(k)] = v.strip()
    csv_path = a.csv or os.path.join(os.path.dirname(os.path.abspath(a.output)), "negatifs_suggeres_google_ads.csv")

    if not os.path.isdir(a.input):
        sys.exit(f"Dossier introuvable : {a.input}")
    files = []
    for dp, _, fns in os.walk(a.input):
        for fn in sorted(fns):
            if fn.lower().endswith((".csv", ".tsv", ".txt", ".xlsx", ".xls")) and not fn.startswith((".", "~")):
                files.append(os.path.join(dp, fn))
    files.sort()
    if not files:
        sys.exit(f"Aucun export dans {a.input} — voir README.md de ce dossier.")

    by_type, infos_by_type, infos = defaultdict(list), defaultdict(list), []
    for p in files:
        df, inf = read_export(p, a.input, aliases)
        infos.append(inf)
        if df is not None and inf["type"]:
            by_type[inf["type"]].append(df)
            infos_by_type[inf["type"]].append(inf)
    warnings = []
    D = {k: dedupe(by_type[k], infos_by_type[k], k, warnings) for k in TYPE_FR}

    neg_terms, neg_camps = load_negative_lists(a.negatives)
    n_camps = max(len(neg_camps), 1)
    planned = read_editor_csv(a.keywords)

    L = []  # lignes du rapport
    w = L.append
    w("# Audit des comptes Google Ads — Évenox")
    w("")
    w(f"Généré le {today.isoformat()} par `livrables/scripts/analyse_exports_google_ads.py` "
      f"à partir de **{len(files)} fichier(s)** dans `{a.input}`. Comptes visés : "
      + ", ".join(KNOWN_ACCOUNTS) + ". Montants en $ CA, taxes exclues (comme dans Google Ads).")
    w("")

    # ---------- comptes
    acct_src = None
    for k in ("campaigns", "keywords", "search_terms", "geo"):
        if not D[k].empty and "cost" in D[k].columns:
            acct_src = k
            break
    accounts = {}
    if acct_src:
        src = D[acct_src]
        for acct, sub in src.groupby("acct"):
            m = metrics(sub)
            act = sub[(num(sub, "cost") > 0) | (num(sub, "impressions") > 0)]
            per = sorted(p for p in act["period"].dropna().unique())
            first = last = None
            if "date" in act.columns and act["date"].notna().any():
                first, last = act["date"].min().date(), act["date"].max().date()
            elif per:
                first = date(int(per[0][:4]), int(per[0][5:]), 1)
                y, mo = int(per[-1][:4]), int(per[-1][5:])
                last = date(y, mo, calendar.monthrange(y, mo)[1])
                last = min(last, today)
            m.update(first=first, last=last, months=len(per), periods=per,
                     campaigns=sub["campaign"].nunique() if "campaign" in sub.columns else None)
            accounts[acct] = m

    # conversions « qualifiées » (actions principales hors page vue)
    ca = D["conversion_actions"]
    PV_RE = re.compile(r"page ?view|pageview|page vue|vue de page|pages? vues?|visite|session|scroll|defilement|"
                       r"engag|first visit|user engagement|temps sur|time on|view item|vue de")
    PRIMARY_VALUES = {"principale", "primary", "oui", "yes", "true", "vrai", "inclus", "incluse", "principal"}
    BAD_STATUS = re.compile(r"inacti|non verif|unverified|no recent|aucune conversion recente|aucune conv|"
                            r"attention|erreur|error|misconfig|mal configur|desactiv|disabled|removed|supprim")
    ca_rows = []
    qual_by_acct = {}
    if not ca.empty:
        grp_cols = ["acct", "conversion_action"]
        extra = [c for c in ("conv_optimization", "conv_source", "conv_category", "status") if c in ca.columns]
        agg = {c: "first" for c in extra}
        for c in ("conversions", "all_conv", "conv_value", "all_conv_value", "cost"):
            if c in ca.columns:
                agg[c] = "sum"
        g = ca.groupby(grp_cols, dropna=False).agg(agg).reset_index()
        for _, r in g.iterrows():
            acct = r["acct"]
            name = str(r["conversion_action"])
            opt_raw = str(r.get("conv_optimization", "") or "")
            primary = None if "conv_optimization" not in g.columns else norm(opt_raw) in PRIMARY_VALUES or \
                norm(opt_raw).startswith(("principal", "primary"))
            conv = r.get("conversions", float("nan"))
            allc = r.get("all_conv", float("nan"))
            cat = str(r.get("conv_category", "") or "")
            status = str(r.get("status", "") or "")
            diag = []
            pv = bool(PV_RE.search(norm(name + " " + cat)))
            if pv:
                diag.append("type « page vue / engagement » : ne doit PAS être principale" if primary
                            else "type « page vue / engagement » (secondaire : OK)")
            spent = accounts.get(acct, {}).get("cost", 0) or 0
            if (pd.isna(conv) or conv == 0) and (pd.isna(allc) or allc == 0):
                if spent > 0:
                    diag.append(f"0 conversion alors que le compte a dépensé {fmt_money(spent, 0)} → balise brisée ou action inutile")
                else:
                    diag.append("0 conversion")
            if BAD_STATUS.search(norm(status)):
                diag.append(f"état « {status} »")
            ca_rows.append(dict(acct=acct, name=name, primary=primary, opt=opt_raw or "—",
                                source=str(r.get("conv_source", "") or "—"), cat=cat or "—", status=status or "—",
                                conv=conv, allc=allc, pv=pv, diag=diag))
        # doublons : 2 actions principales de même catégorie (ex. GA4 + balise Ads)
        bykey = defaultdict(list)
        for x in ca_rows:
            if x["primary"] and not x["pv"]:
                bykey[(x["acct"], norm(x["cat"]))].append(x)
        for (acct, cat), lst in bykey.items():
            if len(lst) > 1 and cat:
                for x in lst:
                    x["diag"].append(f"doublon possible : {len(lst)} actions principales « {x['cat']} » (double comptage)")
        for acct in {x["acct"] for x in ca_rows}:
            rows_a = [x for x in ca_rows if x["acct"] == acct]
            if any(x["primary"] is not None for x in rows_a):
                qual_by_acct[acct] = sum((0 if pd.isna(x["conv"]) else x["conv"])
                                         for x in rows_a if x["primary"] and not x["pv"])

    w("## 1. Comptes : chiffres clés et compte à garder")
    w("")
    if not accounts:
        w("_Aucun rapport avec des coûts n'a été trouvé. Exporter au minimum le rapport Campagnes "
          "segmenté par mois (voir README)._")
        w("")
    else:
        if acct_src != "campaigns":
            w(f"> ⚠️ Pas de rapport Campagnes : chiffres tirés du rapport « {TYPE_FR[acct_src]} » (peut être incomplet).")
            w("")
        hdr = ["Indicateur"] + list(accounts)
        rows = []
        A = accounts
        rows.append(["Dépenses totales"] + [fmt_money(A[x]["cost"]) for x in A])
        rows.append(["Impressions"] + [fmt_int(A[x]["impr"]) for x in A])
        rows.append(["Clics"] + [fmt_int(A[x]["clicks"]) for x in A])
        rows.append(["Conversions (colonne « Conversions »)"] + [fmt_num(A[x]["conv"]) for x in A])
        if qual_by_acct:
            rows.append(["Conv. principales hors « page vue » (selon rapport Actions)"] +
                        [fmt_num(qual_by_acct.get(x, float("nan"))) for x in A])
        rows.append(["Valeur de conv."] + [fmt_money(A[x]["value"]) for x in A])
        rows.append(["CPC moyen"] + [fmt_money(A[x]["cpc"]) for x in A])
        rows.append(["CPA (coût / conv.)"] + [fmt_money(A[x]["cpa"]) for x in A])
        rows.append(["Taux de conv. (conv. / clics)"] + [fmt_pct(A[x]["cvr"]) for x in A])
        rows.append(["CTR"] + [fmt_pct(A[x]["ctr"]) for x in A])
        rows.append(["Campagnes"] + [fmt_int(A[x]["campaigns"]) if A[x]["campaigns"] is not None else "—" for x in A])
        rows.append(["Première activité"] + [str(A[x]["first"] or "n. d. (exporter par mois)") for x in A])
        rows.append(["Dernière activité"] + [str(A[x]["last"] or "n. d. (exporter par mois)") for x in A])
        rows.append(["Mois avec dépenses"] + [str(A[x]["months"] or "n. d.") for x in A])
        w(table(hdr, rows))
        w("")
        # score
        mx_m = max((A[x]["months"] for x in A), default=0) or 0
        conv_basis = {x: (qual_by_acct[x] if x in qual_by_acct else A[x]["conv"]) for x in A}
        mx_c = max(conv_basis.values(), default=0) or 0
        mx_s = max((A[x]["cost"] for x in A), default=0) or 0
        scores = {}
        for x in A:
            hist = 25 * div(A[x]["months"], mx_m) if mx_m else 0
            convp = 30 * div(conv_basis[x], mx_c) if mx_c else 0
            if A[x]["last"]:
                days = (today - A[x]["last"]).days
                rec = 25 * max(0.0, min(1.0, 1 - (max(days, 30) - 30) / 335))
            else:
                days, rec = None, 0
            spp = 20 * div(A[x]["cost"], mx_s) if mx_s else 0
            scores[x] = dict(hist=hist or 0, conv=convp or 0, rec=rec, spend=spp or 0, days=days)
            scores[x]["total"] = sum(scores[x][k] for k in ("hist", "conv", "rec", "spend"))
        w("**Pointage « compte à garder »** (sur 100) :")
        w("")
        w("- Historique (25 pts) = 25 × mois avec dépenses ÷ mois du compte le plus ancien. Un compte avec "
          "historique garde ses données d'enchères et son niveau de confiance auprès de Google.")
        w("- Conversions enregistrées (30 pts) = 30 × conversions ÷ maximum des comptes"
          + (" (conversions principales hors « page vue » quand le rapport Actions est fourni)." if qual_by_acct else "."))
        w("- Récence (25 pts) = 25 si actif dans les 30 derniers jours, puis baisse linéaire jusqu'à 0 à 365 jours.")
        w("- Dépenses (20 pts) = 20 × dépenses ÷ maximum des comptes.")
        w("")
        w(table(["Compte", "Historique /25", "Conversions /30", "Récence /25", "Dépenses /20", "Total /100", "Jours depuis dernière activité"],
                [[x, fmt_num(s["hist"]), fmt_num(s["conv"]), fmt_num(s["rec"]), fmt_num(s["spend"]),
                  f"**{fmt_num(s['total'])}**", "—" if s["days"] is None else str(s["days"])]
                 for x, s in sorted(scores.items(), key=lambda t: -t[1]["total"])]))
        w("")
        ranked = sorted(scores, key=lambda x: -scores[x]["total"])
        keep = ranked[0]
        w(f"**Recommandation : compte à garder → {keep}** ({fmt_num(scores[keep]['total'])}/100).")
        if len(ranked) > 1:
            gap = scores[keep]["total"] - scores[ranked[1]]["total"]
            others = ", ".join(ranked[1:])
            w(f"Autre(s) compte(s) : {others} → mettre en pause toutes les campagnes, retirer la balise AW- "
              "du site (une seule balise Ads dans GTM), mais **ne pas supprimer** le compte (on garde l'historique "
              "et la facturation consultables).")
            if gap < 10:
                w(f"> ⚠️ Écart faible ({fmt_num(gap)} pts) : départager selon (1) le compte dont le propriétaire est "
                  "administrateur avec le courriel d'Évenox, (2) le suivi des conversions le plus propre (section 6), "
                  "(3) le mode de facturation actif.")
        if qual_by_acct and any(abs(qual_by_acct.get(x, 0) - A[x]["conv"]) > 0.5 for x in A if x in qual_by_acct):
            w("> ⚠️ Les conversions affichées par Google diffèrent des conversions principales réelles : une partie "
              "vient d'actions « page vue » ou secondaires mal classées (voir section 6).")
        w("")

    # ---------- mensuel
    w("## 2. Dépenses et conversions par mois (saisonnalité)")
    w("")
    msrc = None
    for k in ("campaigns", "keywords", "search_terms", "geo", "time"):
        if not D[k].empty and D[k]["period"].notna().any() and "cost" in D[k].columns:
            msrc = k
            break
    monthly_tot = None
    if not msrc:
        w("_Aucune donnée mensuelle : exporter le rapport Campagnes avec le segment « Mois »._")
        w("")
    else:
        if msrc != "campaigns":
            w(f"_Source : rapport « {TYPE_FR[msrc]} »._")
            w("")
        src = D[msrc][D[msrc]["period"].notna()].copy()
        for c in ("cost", "clicks", "conversions"):
            src[c] = num(src, c)
        piv = src.groupby(["period", "acct"])[["cost", "clicks", "conversions"]].sum().reset_index()
        accts = sorted(piv["acct"].unique())
        hdr = ["Mois"]
        for x in accts:
            hdr += [f"{x} coût", f"{x} conv."]
        hdr += ["Total coût", "Total clics", "Total conv.", "CPA"]
        rows = []
        monthly_tot = src.groupby("period")[["cost", "clicks", "conversions"]].sum()
        for p in sorted(piv["period"].unique()):
            r = [p]
            for x in accts:
                s = piv[(piv["period"] == p) & (piv["acct"] == x)]
                r += [fmt_money(s["cost"].sum(), 0) if len(s) else "—", fmt_num(s["conversions"].sum()) if len(s) else "—"]
            t = monthly_tot.loc[p]
            r += [fmt_money(t["cost"], 0), fmt_int(t["clicks"]), fmt_num(t["conversions"]), fmt_money(div(t["cost"], t["conversions"]), 0)]
            rows.append(r)
        w(table(hdr, rows))
        w("")
        mt = monthly_tot.copy()
        mt["moy"] = [int(p[5:]) for p in mt.index]
        season = mt.groupby("moy")[["cost", "conversions"]].mean()
        names = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
        w("**Moyenne par mois de l'année (toutes années confondues)** :")
        w("")
        w(table(["Mois", "Coût moyen", "Conv. moyennes", "CPA"],
                [[names[i - 1], fmt_money(season.loc[i, "cost"], 0), fmt_num(season.loc[i, "conversions"]),
                  fmt_money(div(season.loc[i, "cost"], season.loc[i, "conversions"]), 0)] for i in season.index]))
        w("")
        top_conv = season["conversions"].sort_values(ascending=False)
        top_conv = top_conv[top_conv > 0].head(3)
        if len(top_conv):
            w("Mois les plus forts en conversions : " + ", ".join(names[i - 1] for i in top_conv.index).rstrip(".") + ".")
            w("")

    # ---------- termes de recherche
    st = D["search_terms"]
    neg_rows, conv_terms = [], pd.DataFrame()
    agg_st = pd.DataFrame()
    if not st.empty:
        s2 = st.copy()
        s2["term_n"] = s2["search_term"].map(norm_term)
        s2 = s2[s2["term_n"] != ""]
        for c in ("cost", "clicks", "impressions", "conversions", "conv_value"):
            s2[c] = num(s2, c)
        agg_st = s2.groupby("term_n").agg(
            term=("search_term", "first"), cost=("cost", "sum"), clicks=("clicks", "sum"),
            impr=("impressions", "sum"), conv=("conversions", "sum"), value=("conv_value", "sum"),
            accts=("acct", lambda v: ", ".join(sorted(set(v)))),
            camps=("campaign", lambda v: ", ".join(sorted(set(map(str, v))))[:80]) if "campaign" in s2.columns
            else ("acct", lambda v: ""),
        ).reset_index()

    planned_n = sorted({norm_term(r.get("Keyword", "")) for r in planned if r.get("Keyword")})
    planned_rx = {k: re.compile(r"\b" + re.escape(k) + r"\b") for k in planned_n}

    def neg_match(term_n):
        hits = []
        for t, camps in neg_terms.items():
            if t and re.search(r"\b" + re.escape(t) + r"\b", term_n):
                hits.append((t, camps))
        if not hits:
            return "", "", []
        hits.sort(key=lambda h: -len(h[0]))
        common = [t for t, c in hits if len(c) >= n_camps]
        if common:
            return "Oui", "liste commune : " + ", ".join(f"« {t} »" for t in common[:3]), common
        t, c = hits[0]
        return "Partiel", f"« {t} » négatif seulement dans " + ", ".join(sorted(c)), []

    w(f"## 3. Termes de recherche coûteux sans conversion → négatifs suggérés (top {a.top})")
    w("")
    if agg_st.empty:
        w("_Aucun rapport Termes de recherche trouvé._")
        w("")
    else:
        z = agg_st[(agg_st["conv"] == 0) & (agg_st["cost"] > 0)].sort_values("cost", ascending=False)
        wasted = z["cost"].sum()
        w(f"{len(z)} termes ont coûté de l'argent sans aucune conversion, pour **{fmt_money(wasted)}** "
          f"({fmt_pct(div(wasted, agg_st['cost'].sum()))} des dépenses des termes de recherche).")
        w("Suggestion : négatif en **expression** (phrase) dans une liste partagée. Les termes de marque "
          "(Évenox) ne sont jamais suggérés. Le négatif suggéré est la racine (mot de la liste Évenox ou du thème) "
          "plutôt que le terme complet ; lire la colonne Note avant d'exclure.")
        w("")
        for _, r in z.iterrows():
            tn = r["term_n"]
            if BRAND_RE.search(tn) or "evenox" in tn:
                continue
            flag, why, roots = neg_match(tn)
            th, th_tok = theme_of(tn, with_token=True)
            near = [k for k, rx in planned_rx.items() if rx.search(tn)]
            is_planned = tn in planned_n
            if is_planned:
                sugg = ""
            elif roots:
                sugg = roots[0]
            elif th_tok:
                sugg = th_tok
            else:
                sugg = tn
            sugg_txt = NEG_ORIG.get(sugg) if roots else orig_phrase(r["term"], sugg) if sugg else ""
            blocks = [k for k in planned_n if sugg and re.search(r"\b" + re.escape(sugg) + r"\b", k)] if sugg else []
            note = []
            if is_planned:
                note.append("= mot clé prévu : ne pas exclure, revoir annonce / page / enchère")
            elif near:
                note.append(f"contient le mot clé prévu « {near[0]} »")
            if blocks:
                note.append(f"⚠️ ce négatif bloquerait « {blocks[0]} » : l'ajouter seulement aux campagnes concernées")
            neg_rows.append(dict(term=r["term"], term_n=tn, theme=th, cost=r["cost"], clicks=r["clicks"],
                                 impr=r["impr"], accts=r["accts"], camps=r["camps"], flag=flag, why=why,
                                 near=near[0] if near else "", sugg=sugg, sugg_txt=sugg_txt or sugg, note="; ".join(note),
                                 planned=is_planned, blocks=bool(blocks)))
        top = neg_rows[:a.top]
        by_theme = defaultdict(list)
        for x in top:
            by_theme[x["theme"]].append(x)
        for th in sorted(by_theme, key=lambda t: -sum(x["cost"] for x in by_theme[t])):
            lst = by_theme[th]
            w(f"### {th} — {fmt_money(sum(x['cost'] for x in lst))}")
            w("")
            w(table(["Terme de recherche", "Coût", "Clics", "Impr.", "Compte(s)", "Liste négative Évenox", "Négatif suggéré", "Note"],
                    [[x["term"], fmt_money(x["cost"]), fmt_int(x["clicks"]), fmt_int(x["impr"]), x["accts"],
                      (x["flag"] + " — " + x["why"]) if x["flag"] else "Non",
                      f"\"{x['sugg_txt']}\"" if x["sugg"] else "—",
                      x["note"]] for x in lst]))
            w("")
        flagged = [x for x in neg_rows if x["flag"] == "Oui"]
        if flagged:
            w(f"> {len(flagged)} terme(s) ({fmt_money(sum(x['cost'] for x in flagged))}) auraient déjà été bloqués par la "
              "liste commune de négatifs prévue dans `5_mots_cles_negatifs.csv` → l'importer en priorité.")
            w("")

    # CSV des négatifs
    os.makedirs(os.path.dirname(os.path.abspath(csv_path)), exist_ok=True)
    with open(csv_path, "w", encoding="utf-8-sig", newline="") as f:
        cw = csv.writer(f)
        cw.writerow(["Mot clé négatif", "Type de correspondance", "Thème", "Coût", "Clics", "Impr.", "Compte(s)",
                     "Campagne(s)", "Déjà dans liste Évenox", "Détail", "Note", "Terme d'origine"])
        done = set()
        for x in neg_rows:
            if x["planned"] or not x["sugg"]:
                continue
            key = x["sugg"]
            if key in done:
                continue
            done.add(key)
            same = [y for y in neg_rows if y["sugg"] == key]
            cw.writerow([x["sugg_txt"], "Expression", x["theme"], f"{sum(y['cost'] for y in same):.2f}",
                         int(sum(y["clicks"] for y in same)), int(sum(y["impr"] for y in same)),
                         x["accts"], x["camps"], x["flag"] or "Non", x["why"], x["note"],
                         " / ".join(y["term"] for y in same)[:300]])
        n_csv = len(done)

    # ---------- termes qui convertissent
    w("## 4. Termes de recherche qui convertissent → mots clés candidats")
    w("")
    cands = []
    if agg_st.empty:
        w("_Aucun rapport Termes de recherche trouvé._")
        w("")
    else:
        cv = agg_st[agg_st["conv"] > 0].sort_values(["conv", "cost"], ascending=[False, True]).head(30)
        if cv.empty:
            w("_Aucun terme de recherche avec conversion — vérifier le suivi des conversions (section 6)._")
            w("")
        else:
            rows = []
            for _, r in cv.iterrows():
                tn = r["term_n"]
                exact = tn in planned_n
                cont = [k for k, rx in planned_rx.items() if rx.search(tn)]
                if exact:
                    status = "déjà prévu (identique)"
                elif cont:
                    status = f"couvert par « {cont[0]} » (expression)"
                else:
                    status = "**à ajouter**"
                    cands.append(r)
                sugg = "Exact" if r["conv"] >= 3 else "Expression"
                rows.append([r["term"], fmt_num(r["conv"]), fmt_money(r["cost"]), fmt_money(div(r["cost"], r["conv"])),
                             fmt_pct(div(r["conv"], r["clicks"])), r["accts"], status, sugg])
            w(table(["Terme", "Conv.", "Coût", "CPA", "Taux conv.", "Compte(s)", "Plan actuel", "Correspondance suggérée"], rows))
            w("")
            w(f"{len(cands)} terme(s) qui convertissent ne sont couverts par aucun mot clé du plan → les ajouter au "
              "groupe d'annonces le plus proche.")
            w("")

    # ---------- mots clés prévus
    w("## 5. Mots clés prévus : CPC réels et volumes observés")
    w("")
    kw_stats = []
    if not planned:
        w(f"_Liste de mots clés introuvable : {a.keywords}_")
        w("")
    elif agg_st.empty:
        w("_Aucun rapport Termes de recherche : impossible de mesurer les mots clés prévus._")
        w("")
    else:
        w("Méthode : pour chaque mot clé de `3_mots_cles.csv`, on additionne les termes de recherche historiques "
          "qui le **contiennent** (sans accents, mots entiers). C'est une estimation de la demande réelle déjà "
          "achetée par les anciens comptes, pas une prévision de Google.")
        w("")
        meta = {}
        for r in planned:
            k = norm_term(r.get("Keyword", ""))
            if k and k not in meta:
                meta[k] = (r.get("Keyword", ""), r.get("Campaign", ""), r.get("Criterion Type", ""))
        terms = agg_st.to_dict("records")
        for k in planned_n:
            rx = planned_rx[k]
            hit = [t for t in terms if rx.search(t["term_n"])]
            cost = sum(t["cost"] for t in hit)
            clicks = sum(t["clicks"] for t in hit)
            impr = sum(t["impr"] for t in hit)
            conv = sum(t["conv"] for t in hit)
            topt = max(hit, key=lambda t: t["impr"])["term"] if hit else ""
            kw_stats.append(dict(k=meta[k][0], camp=meta[k][1], n=len(hit), cost=cost, clicks=clicks, impr=impr,
                                 conv=conv, cpc=div(cost, clicks), cpa=div(cost, conv), top=topt))
        withd = sorted([x for x in kw_stats if x["n"]], key=lambda x: -x["impr"])
        none = [x for x in kw_stats if not x["n"]]
        w(table(["Mot clé prévu", "Campagne", "Termes", "Impr.", "Clics", "Coût", "CPC réel", "Conv.", "CPA", "Terme le plus fréquent"],
                [[x["k"], x["camp"], x["n"], fmt_int(x["impr"]), fmt_int(x["clicks"]), fmt_money(x["cost"]),
                  fmt_money(x["cpc"]), fmt_num(x["conv"]), fmt_money(x["cpa"], 0), x["top"]] for x in withd]))
        w("")
        if none:
            w(f"**{len(none)} mot(s) clé(s) prévu(s) sans aucune donnée historique** (jamais déclenchés ou volume "
              "trop faible) : " + ", ".join(f"« {x['k']} »" for x in none) + ".")
            w("")
        tot_c = sum(x["cost"] for x in withd)
        if withd:
            cpcs = [x["cpc"] for x in withd if not math.isnan(x["cpc"])]
            if cpcs:
                med = sorted(cpcs)[len(cpcs) // 2]
                w(f"CPC réel médian des mots clés prévus : **{fmt_money(med)}** ; à utiliser comme point de départ "
                  "pour les plafonds de CPC et la prévision de clics du budget.")
                w("")
        kw = D["keywords"]
        if not kw.empty and "keyword" in kw.columns:
            k2 = kw.copy()
            k2["kn"] = k2["keyword"].map(norm_term)
            for c in ("cost", "clicks", "impressions", "conversions"):
                k2[c] = num(k2, c)
            g = k2[k2["kn"].isin(planned_n)].groupby("kn")[["impressions", "clicks", "cost", "conversions"]].sum()
            if len(g):
                w("**Mots clés prévus déjà achetés tels quels (rapport Mots clés)** :")
                w("")
                w(table(["Mot clé", "Impr.", "Clics", "Coût", "CPC réel", "Conv."],
                        [[k, fmt_int(r["impressions"]), fmt_int(r["clicks"]), fmt_money(r["cost"]),
                          fmt_money(div(r["cost"], r["clicks"])), fmt_num(r["conversions"])]
                         for k, r in g.sort_values("impressions", ascending=False).iterrows()]))
                w("")

    # ---------- actions de conversion
    w("## 6. Inventaire des actions de conversion")
    w("")
    broken = []
    if not ca_rows:
        w("_Aucun rapport Actions de conversion trouvé (Objectifs > Conversions > Résumé > Télécharger)._")
        w("")
    else:
        if all(x["primary"] is None for x in ca_rows):
            w("> ⚠️ La colonne « Optimisation de l'action » (Principale / Secondaire) est absente : l'ajouter à l'export.")
            w("")
        w(table(["Compte", "Action", "Principale ?", "Source", "Catégorie", "État", "Conv.", "Toutes conv.", "Diagnostic"],
                [[x["acct"], x["name"], "Oui" if x["primary"] else ("Non" if x["primary"] is False else "?"),
                  x["source"], x["cat"], x["status"], fmt_num(x["conv"]), fmt_num(x["allc"]),
                  "; ".join(x["diag"]) or "OK"] for x in sorted(ca_rows, key=lambda x: (x["acct"], not x["primary"], x["name"]))]))
        w("")
        broken = [x for x in ca_rows if (x["primary"] and x["pv"]) or any("0 conversion alors" in d or "état" in d or "doublon" in d for d in x["diag"])]
        prim = [x for x in ca_rows if x["primary"]]
        w(f"Actions principales : {len(prim)} ; à corriger : **{len(broken)}**. Règle cible : une seule action "
          "principale par vrai lead (soumission envoyée, appel ≥ 60 s, achat Booqable) ; tout le reste en secondaire.")
        w("")

    # ---------- géo
    w(f"## 7. Dépenses hors de la zone de {a.zone_km:.0f} km (Sainte-Thérèse)")
    w("")
    geo = D["geo"]
    geo_waste = 0.0
    geo_out = []
    if geo.empty:
        w("_Aucun rapport géographique trouvé (Campagnes > Emplacements > « Emplacements correspondants » ou "
          "« Emplacement de l'utilisateur »)._")
        w("")
    else:
        g2 = geo.copy()
        for c in ("cost", "clicks", "impressions", "conversions"):
            g2[c] = num(g2, c)
        loc_col = next((c for c in ("geo_city", "geo_location", "geo_region", "geo_country", "geo_distance") if c in g2.columns), None)
        g2["loc"] = g2[loc_col].astype(str)
        gg = g2.groupby("loc")[["cost", "clicks", "impressions", "conversions"]].sum().reset_index()
        res = []
        for _, r in gg.iterrows():
            loc = r["loc"]
            dist, status = None, "Inconnue (à vérifier)"
            if loc_col == "geo_distance":
                nums = [float(n) for n in re.findall(r"\d+(?:[.,]\d+)?", loc.replace(",", "."))]
                if nums:
                    dist = min(nums)
                    status = "Hors zone" if dist >= a.zone_km else "Dans la zone"
            elif loc_col in ("geo_city", "geo_location"):
                key = city_key(loc)
                if key in CITIES:
                    dist = haversine(BASE, CITIES[key])
                    status = ("Dans la zone" if dist <= a.zone_km - 5 else
                              "Limite (vérifier trajet réel)" if dist <= a.zone_km + 5 else "Hors zone")
                elif re.search(r"\b(ontario|france|etats unis|united states|usa)\b", norm(loc)):
                    status = "Hors zone"
            elif loc_col in ("geo_region", "geo_country"):
                status = "Région (non jugée)" if re.search(r"quebec|canada", norm(loc)) else "Hors zone"
            res.append(dict(loc=loc, dist=dist, status=status, **{k: r[k] for k in ("cost", "clicks", "impressions", "conversions")}))
        tot = sum(x["cost"] for x in res)
        out = [x for x in res if x["status"] == "Hors zone"]
        unk = [x for x in res if x["status"].startswith("Inconnue")]
        lim = [x for x in res if x["status"].startswith("Limite")]
        geo_waste = sum(x["cost"] for x in out)
        geo_out = out
        w(f"Distance à vol d'oiseau depuis l'entrepôt (la route est plus longue). Total géo : {fmt_money(tot)}.")
        w("")
        w(table(["Statut", "Lieux", "Coût", "% du coût", "Conv."],
                [[n, len(l), fmt_money(sum(x["cost"] for x in l)), fmt_pct(div(sum(x["cost"] for x in l), tot)),
                  fmt_num(sum(x["conversions"] for x in l))]
                 for n, l in (("Dans la zone", [x for x in res if x["status"] == "Dans la zone"]), ("Limite", lim),
                              ("Hors zone", out), ("Inconnue", unk),
                              ("Région (non jugée)", [x for x in res if x["status"].startswith("Région")]))]))
        w("")
        show = sorted(out + lim + unk, key=lambda x: -x["cost"])[:25]
        if show:
            w(table(["Lieu", "Distance (km)", "Statut", "Coût", "Clics", "Conv."],
                    [[x["loc"], "—" if x["dist"] is None else fmt_num(x["dist"], 0), x["status"], fmt_money(x["cost"]),
                      fmt_int(x["clicks"]), fmt_num(x["conversions"])] for x in show]))
            w("")
        if "location_type" in g2.columns:
            w("Types d'emplacement présents : " + ", ".join(sorted(set(map(str, g2["location_type"].unique())))) + ".")
            w("")

    # ---------- annexes jour/heure et annonces
    tm = D["time"]
    dead_hours = []
    if not tm.empty:
        w("## Annexe A. Jour de la semaine / heure")
        w("")
        t2 = tm.copy()
        for c in ("cost", "clicks", "conversions"):
            t2[c] = num(t2, c)
        if "day_of_week" in t2.columns:
            t2["dow"] = t2["day_of_week"].map(lambda v: DOW.get(norm(v), 9))
            g = t2.groupby("dow")[["cost", "clicks", "conversions"]].sum()
            w(table(["Jour", "Coût", "Clics", "Conv.", "CPA"],
                    [[DOW_FR.get(i, "?"), fmt_money(r["cost"]), fmt_int(r["clicks"]), fmt_num(r["conversions"]),
                      fmt_money(div(r["cost"], r["conversions"]))] for i, r in g.iterrows()]))
            w("")
        if "hour" in t2.columns:
            t2["h"] = t2["hour"].map(lambda v: int(parse_num(v, False)) if not math.isnan(parse_num(v, False)) else -1)
            g = t2.groupby("h")[["cost", "clicks", "conversions"]].sum()
            w(table(["Heure", "Coût", "Clics", "Conv.", "CPA"],
                    [[f"{i} h", fmt_money(r["cost"]), fmt_int(r["clicks"]), fmt_num(r["conversions"]),
                      fmt_money(div(r["cost"], r["conversions"]))] for i, r in g.iterrows()]))
            w("")
            totc = g["cost"].sum()
            dead_hours = [i for i, r in g.iterrows() if r["conversions"] == 0 and r["cost"] > 0.03 * totc]
    ads = D["ads"]
    if not ads.empty:
        w("## Annexe B. Annonces les plus coûteuses")
        w("")
        a2 = ads.copy()
        for c in ("cost", "clicks", "impressions", "conversions"):
            a2[c] = num(a2, c)
        hcol = next((c for c in a2.columns if c.startswith("ad_headline")), None)
        a2 = a2.sort_values("cost", ascending=False).head(10)
        w(table(["Compte", "Campagne", "Annonce / titre", "Type", "Coût", "CTR", "Conv.", "CPA"],
                [[r["acct"], r.get("campaign", "—"), (str(r[hcol])[:60] if hcol else "—"), r.get("ad_type", "—"),
                  fmt_money(r["cost"]), fmt_pct(div(r["clicks"], r["impressions"])), fmt_num(r["conversions"]),
                  fmt_money(div(r["cost"], r["conversions"]))] for _, r in a2.iterrows()]))
        w("")

    # ---------- actions prioritaires
    w("## 8. Dix actions prioritaires")
    w("")
    acts = []
    if accounts:
        keep = max(scores, key=lambda x: scores[x]["total"])
        acts.append(f"**Garder {keep}** comme compte unique ; mettre l'autre compte en pause (sans le supprimer) et "
                    "n'avoir qu'une balise AW- dans GTM.")
    if broken:
        acts.append(f"**Corriger {len(broken)} action(s) de conversion** (section 6) : passer les actions « page vue » / "
                    "engagement en secondaire, supprimer les doublons, réparer ou retirer les actions à 0 conversion.")
    if neg_rows:
        top_cost = sum(x["cost"] for x in neg_rows[:a.top])
        acts.append(f"**Importer les négatifs** : créer une liste partagée à partir de `{os.path.basename(csv_path)}` "
                    f"({n_csv} négatifs issus de {len(neg_rows)} termes ; top {min(a.top, len(neg_rows))} = {fmt_money(top_cost)} sans conversion), "
                    "en plus de la liste commune de `5_mots_cles_negatifs.csv`.")
    if geo_waste > 0:
        acts.append(f"**Restreindre la zone** : {fmt_money(geo_waste)} dépensés hors des {a.zone_km:.0f} km. Ciblage rayon "
                    f"{a.zone_km:.0f} km autour de Sainte-Thérèse, option « Présence » seulement, exclure les villes "
                    "hors zone qui reviennent ("
                    + ", ".join(x["loc"] for x in sorted(geo_out, key=lambda x: -x["cost"])[:4]) + ").")
    if cands:
        acts.append(f"**Ajouter {len(cands)} mot(s) clé(s) gagnant(s)** absents du plan (section 4), ex. "
                    + ", ".join(f"« {r['term']} »" for r in cands[:3]) + ".")
    if kw_stats:
        none = [x for x in kw_stats if not x["n"]]
        if none:
            acts.append(f"**Revoir {len(none)} mot(s) clé(s) prévu(s) sans historique** : les garder en expression, "
                        "mais ne pas leur réserver de budget avant d'avoir 2 semaines de données.")
        exp = sorted([x for x in kw_stats if x["n"] and not math.isnan(x["cpc"])], key=lambda x: -x["cpc"])[:3]
        if exp:
            acts.append("**Prévoir les CPC chers** : " + ", ".join(f"« {x['k']} » ({fmt_money(x['cpc'])})" for x in exp)
                        + " ; fixer un plafond de CPC (Maximiser les clics) ou isoler en campagne dédiée.")
    if monthly_tot is not None and len(monthly_tot) >= 6:
        mt = monthly_tot.copy()
        mt["moy"] = [int(p[5:]) for p in mt.index]
        s = mt.groupby("moy")["conversions"].mean().sort_values(ascending=False)
        names = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
        if s.max() > 0:
            acts.append("**Caler le budget sur la saisonnalité** : concentrer les hausses sur "
                        + ", ".join(names[i - 1] for i in s.head(3).index)
                        + " (meilleurs mois historiques) et lancer les campagnes 3 à 4 semaines avant.")
    if dead_hours:
        acts.append("**Baisser les enchères** (−30 %) sur les heures qui dépensent sans convertir : "
                    + ", ".join(f"{h} h" for h in dead_hours[:6]) + ".")
    generic = [
        "**Conversions améliorées + import hors ligne** des leads qualifiés (GCLID), pour que l'algorithme apprenne "
        "sur les vrais contrats (voir GUIDE-TRACKING-LOI25.md).",
        "**Vérifier le marquage automatique**, le fuseau America/Toronto et la devise CAD du compte gardé.",
        "**Associer GA4 au compte gardé** et importer seulement les événements utiles en secondaire.",
        "**Relancer ce script chaque mois** avec les nouveaux exports pour suivre les négatifs et le CPA.",
        "**Exporter les rapports manquants** listés dans « Fichiers lus » pour compléter l'audit.",
    ]
    for g in generic:
        if len(acts) >= 10:
            break
        acts.append(g)
    for i, x in enumerate(acts[:10], 1):
        w(f"{i}. {x}")
    w("")

    # ---------- fichiers lus
    w("## Fichiers lus")
    w("")
    w(table(["Fichier", "Type détecté", "Compte(s)", "Lignes", "Totaux retirés", "Encodage / séparateur", "Langue", "Remarques"],
            [[i["path"], TYPE_FR.get(i["type"], "ignoré"), ", ".join(i.get("accounts", []))[:60], i["rows"], i["totals"],
              f"{i['enc']} / {i['delim']}", i["lang"], "; ".join(i["warn"]) or "—"] for i in infos]))
    w("")
    missing = [TYPE_FR[k] for k in TYPE_FR if D[k].empty]
    if missing:
        w("Rapports absents : " + ", ".join(missing) + ".")
        w("")
    for x in warnings:
        w(f"- ⚠️ {x}")
    if warnings:
        w("")
    seen_accts = {x for i in infos for x in i.get("accounts", [])}
    miss_acc = [x for x in KNOWN_ACCOUNTS if x not in seen_accts]
    if miss_acc and seen_accts:
        w("> Comptes attendus non reconnus dans les fichiers : " + ", ".join(miss_acc)
          + ". Ranger les exports dans un sous-dossier nommé avec l'identifiant AW- ou utiliser `--alias`.")
        w("")
    w(f"Négatifs suggérés (CSV) : `{csv_path}`")
    w("")

    os.makedirs(os.path.dirname(os.path.abspath(a.output)), exist_ok=True)
    with open(a.output, "w", encoding="utf-8") as f:
        f.write("\n".join(L))
    print(f"Rapport : {a.output}")
    print(f"Négatifs : {csv_path} ({n_csv} négatifs)")
    for i in infos:
        print(f"  - {i['path']}: {TYPE_FR.get(i['type'], 'ignoré')} | {', '.join(i.get('accounts', []))} | "
              f"{i['rows']} lignes | {'; '.join(i['warn']) or 'ok'}")


if __name__ == "__main__":
    main()
