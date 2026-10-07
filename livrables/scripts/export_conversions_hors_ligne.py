#!/usr/bin/env python3
"""Export Notion (Leads & Réservations) -> fichier d'import Google Ads
« conversions hors ligne à partir de clics » (Lead qualifié / Réservation).

Bibliothèque standard seulement (Python 3.9+).

Usage :
    python3 export_conversions_hors_ligne.py EXPORT_NOTION.csv
        [--depuis AAAA-MM-JJ]            # défaut : il y a 7 jours
        [--sortie DOSSIER]               # défaut : /home/user/Evenox/donnees/imports-google-ads/
        [--valeurs A=300,B=150,C=50]     # valeur d'un « Lead qualifié » selon le score
        [--panier-moyen 1472]            # valeur d'une « Réservation » sans montant
        [--coordonnees aucune|brut|sha256]  # ajoute E-mail / téléphone (conversions
                                         # améliorées pour les leads) — défaut : aucune
        [--consentement]                 # ajoute la colonne « Ad User Data » = Granted
        [--aujourdhui AAAA-MM-JJ]        # pour les tests

Fichiers produits (dans --sortie) :
    conversions_google_ads_AAAA-MM-JJ.csv        modèle Google Ads (GCLID)
    conversions_google_ads_braid_AAAA-MM-JJ.csv  seulement s'il y a des GBRAID/WBRAID sans GCLID
    resume_conversions_AAAA-MM-JJ.txt            résumé en français

Format Google Ads (modèle « clics », import manuel Outils > Conversions > Importations,
accepté aussi dans le Gestionnaire de données / Data Manager) :
    Parameters:TimeZone=America/Toronto
    Google Click ID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency
    Cj0KCQ...,Lead qualifié,2026-10-02 14:30:00-0400,150,CAD
"""
from __future__ import annotations

import argparse
import csv
import hashlib
import re
import sys
import unicodedata
from datetime import date, datetime, time, timedelta, timezone
from pathlib import Path

# --------------------------------------------------------------------------- réglages
FUSEAU = "America/Toronto"
DEVISE = "CAD"
CONV_LEAD = "Lead qualifié"          # doit être IDENTIQUE au nom dans Google Ads
CONV_RESA = "Réservation"            # idem
VALEURS_SCORE_DEFAUT = {"A": 300.0, "B": 150.0, "C": 50.0}
PANIER_MOYEN_DEFAUT = 1472.0
FENETRE_JOURS = 90                   # durée de vie max d'un GCLID / fenêtre de conversion
ALERTE_JOURS = 80                    # « dernière chance » avant d'atteindre 90 jours
ETATS_RESA = ("dépôt payé", "réservé / confirmé")
SORTIE_DEFAUT = Path("/home/user/Evenox/donnees/imports-google-ads/")

# Noms de colonnes Notion acceptés (comparaison sans accents ni casse).
ALIAS = {
    "client": ["Client", "Nom"],
    "gclid": ["GCLID", "Google Click ID", "gclid"],
    "gbraid": ["GBRAID", "gbraid"],
    "wbraid": ["WBRAID", "wbraid"],
    "email": ["E-mail", "Email", "Courriel"],
    "tel": ["Téléphone", "Telephone", "Phone"],
    "source": ["Source"],
    "etat": ["État", "Etat", "Statut"],
    "score": ["Score"],
    "montant": ["Montant du contrat", "Montant", "Montant contrat"],
    "date_resa": ["Date réservation", "Date de réservation"],
    "date_contact": ["Date dernier contact", "Dernier contact"],
    "cree": ["createdTime", "Created time", "Created", "Date de création",
             "Heure de création", "Créé le", "Création"],
}

MOIS = {
    # anglais
    "january": 1, "february": 2, "march": 3, "april": 4, "may": 5, "june": 6,
    "july": 7, "august": 8, "september": 9, "october": 10, "november": 11, "december": 12,
    "jan": 1, "feb": 2, "mar": 3, "apr": 4, "jun": 6, "jul": 7, "aug": 8,
    "sep": 9, "sept": 9, "oct": 10, "nov": 11, "dec": 12,
    # français (sans accents, voir _sans_accents)
    "janvier": 1, "fevrier": 2, "mars": 3, "avril": 4, "mai": 5, "juin": 6,
    "juillet": 7, "aout": 8, "septembre": 9, "octobre": 10, "novembre": 11, "decembre": 12,
    "janv": 1, "fevr": 2, "fev": 2, "avr": 4, "juil": 7,
}


# --------------------------------------------------------------------------- outils
def _sans_accents(s: str) -> str:
    return "".join(c for c in unicodedata.normalize("NFD", s) if unicodedata.category(c) != "Mn")


def _cle(s: str) -> str:
    return re.sub(r"[^a-z0-9]", "", _sans_accents(s).lower())


def fuseau_toronto():
    """ZoneInfo si disponible, sinon règle nord-américaine (2e dim. mars -> 1er dim. nov.)."""
    try:
        from zoneinfo import ZoneInfo
        return ZoneInfo(FUSEAU)
    except Exception:  # pragma: no cover - environnement sans base tz
        return None


TZ = fuseau_toronto()


def localiser(dt: datetime) -> datetime:
    """Attache le fuseau America/Toronto (heure murale de Montréal)."""
    if TZ is not None:
        return dt.replace(tzinfo=TZ)

    def nieme_dimanche(annee, mois, n):
        d = date(annee, mois, 1)
        d += timedelta(days=(6 - d.weekday()) % 7)
        return d + timedelta(weeks=n - 1)

    debut = datetime.combine(nieme_dimanche(dt.year, 3, 2), time(2))
    fin = datetime.combine(nieme_dimanche(dt.year, 11, 1), time(2))
    decalage = -4 if debut <= dt < fin else -5
    return dt.replace(tzinfo=timezone(timedelta(hours=decalage)))


def format_google(dt: datetime) -> str:
    """« yyyy-MM-dd HH:mm:ss±hhmm », format accepté par le modèle Google Ads."""
    return dt.strftime("%Y-%m-%d %H:%M:%S%z")


def parse_date_notion(texte: str):
    """Retourne (datetime naïf, heure_connue) ou (None, False).

    Formats gérés : « October 7, 2026 2:30 PM », « Oct 7, 2026 », « 7 octobre 2026 14:30 »,
    « 7 octobre 2026 à 14 h 30 », « 2026/10/07 », « 2026/10/07 14:30 », « 2026-10-07T14:30 »,
    « 10/07/2026 2:30 PM » (US). Les plages « A → B » gardent la première date.
    """
    if not texte:
        return None, False
    s = texte.strip().split("→")[0].strip()
    s = s.split(" (")[0]                       # « (EDT) » etc.
    s_low = _sans_accents(s).lower().replace(",", " ").replace(".", " ")
    s_low = re.sub(r"\b(a|at|le)\b", " ", s_low)
    s_low = re.sub(r"(\d)\s*h\s*(\d{2})", r"\1:\2", s_low)   # 14 h 30 -> 14:30
    s_low = re.sub(r"(\d)\s*h\b", r"\1:00", s_low)             # 14 h -> 14:00
    s_low = re.sub(r"\s+", " ", s_low).strip()

    d = None
    reste = ""
    m = re.match(r"^(\d{4})[/-](\d{1,2})[/-](\d{1,2})(?:[ t](.*))?$", s_low)
    if m:
        d = date(int(m[1]), int(m[2]), int(m[3]))
        reste = m[4] or ""
    if d is None:
        m = re.match(r"^(\d{1,2})/(\d{1,2})/(\d{4})(?: (.*))?$", s_low)   # MM/JJ/AAAA (US)
        if m:
            d = date(int(m[3]), int(m[1]), int(m[2]))
            reste = m[4] or ""
    if d is None:
        m = re.match(r"^([a-z]+) (\d{1,2}) (\d{4})(?: (.*))?$", s_low)   # October 7 2026
        if m and m[1] in MOIS:
            d = date(int(m[3]), MOIS[m[1]], int(m[2]))
            reste = m[4] or ""
    if d is None:
        m = re.match(r"^(?:[a-z]+ )?(\d{1,2})(?:er)? ([a-z]+) (\d{4})(?: (.*))?$", s_low)  # 7 octobre 2026
        if m and m[2] in MOIS:
            d = date(int(m[3]), MOIS[m[2]], int(m[1]))
            reste = m[4] or ""
    if d is None:
        return None, False

    t = re.search(r"(\d{1,2}):(\d{2})(?::(\d{2}))?\s*(am|pm)?", reste)
    if not t:
        return datetime.combine(d, time(12, 0)), False
    h, mi, se = int(t[1]), int(t[2]), int(t[3] or 0)
    if t[4] == "pm" and h < 12:
        h += 12
    if t[4] == "am" and h == 12:
        h = 0
    return datetime.combine(d, time(h, mi, se)), True


def parse_montant(texte: str):
    """« $1,472.00 », « 1 472 $ », « 1472,50 », « 2 000,00 $ CA » -> float ou None."""
    if not texte:
        return None
    s = texte.replace(" ", " ").replace(" ", " ")
    s = re.sub(r"[^\d,.\- ]", "", s).strip().replace(" ", "")
    if not s:
        return None
    if "," in s and "." in s:          # 1,472.50 (EN)
        s = s.replace(",", "")
    elif "," in s:
        ent, _, dec = s.rpartition(",")
        s = f"{ent}.{dec}" if len(dec) in (1, 2) else s.replace(",", "")
    try:
        return float(s)
    except ValueError:
        return None


def multi(texte: str):
    return [p.strip() for p in (texte or "").split(",") if p.strip()]


def id_valide(v: str) -> bool:
    return bool(re.fullmatch(r"[A-Za-z0-9_\-]{12,}", v))


def norm_email(e: str) -> str:
    e = e.strip().lower()
    return e if re.fullmatch(r"[^@\s]+@[^@\s]+\.[^@\s]+", e) else ""


def norm_tel(t: str) -> str:
    """E.164 ; numéros nord-américains à 10 chiffres -> +1."""
    chiffres = re.sub(r"\D", "", t or "")
    if len(chiffres) == 10:
        return "+1" + chiffres
    if len(chiffres) == 11 and chiffres.startswith("1"):
        return "+" + chiffres
    return ("+" + chiffres) if len(chiffres) > 11 else ""


def sha256(v: str) -> str:
    return hashlib.sha256(v.encode("utf-8")).hexdigest() if v else ""


def fmt_valeur(v: float) -> str:
    return f"{v:.2f}".rstrip("0").rstrip(".")


def fmt_argent(v: float) -> str:
    return f"{v:,.0f}".replace(",", " ") + " $"


# --------------------------------------------------------------------------- lecture
def lire_export(chemin: Path):
    with chemin.open(encoding="utf-8-sig", newline="") as f:
        lecteur = csv.DictReader(f)
        entetes = lecteur.fieldnames or []
        lignes = list(lecteur)
    par_cle = {_cle(h): h for h in entetes}
    carte = {}
    for champ, noms in ALIAS.items():
        for n in noms:
            if _cle(n) in par_cle:
                carte[champ] = par_cle[_cle(n)]
                break
    return lignes, carte, entetes


# --------------------------------------------------------------------------- cœur
def traiter(lignes, carte, depuis: date, aujourdhui: date, valeurs_score, panier_moyen):
    maintenant = localiser(datetime.combine(aujourdhui, time(23, 59)))
    if aujourdhui == date.today():
        maintenant = min(maintenant, datetime.now(timezone.utc).astimezone(maintenant.tzinfo))
    limite_clic = aujourdhui - timedelta(days=FENETRE_JOURS)

    conversions = []            # dicts
    ignores = []                # (client, raison)
    alertes = []                # (client, message)
    vus = set()

    def val(row, champ):
        col = carte.get(champ)
        return (row.get(col) or "").strip() if col else ""

    for i, row in enumerate(lignes, start=2):
        client = val(row, "client") or f"(ligne {i} sans nom)"
        gclid, gbraid, wbraid = val(row, "gclid"), val(row, "gbraid"), val(row, "wbraid")
        sources = multi(val(row, "source"))
        etats = [_sans_accents(e).lower() for e in multi(val(row, "etat"))]
        score = (val(row, "score")[:1] or "").upper()

        id_type, id_val = None, ""
        for t, v in (("gclid", gclid), ("gbraid", gbraid), ("wbraid", wbraid)):
            if v:
                id_type, id_val = t, v
                break
        if not id_val:
            raison = "aucun GCLID / GBRAID / WBRAID"
            if "google ads" in [s.lower() for s in sources]:
                raison += " (Source = Google Ads : vérifier le champ caché du formulaire)"
            ignores.append((client, raison))
            continue
        if not id_valide(id_val):
            ignores.append((client, f"{id_type.upper()} invalide « {id_val[:30]} »"))
            continue

        cree, _ = parse_date_notion(val(row, "cree"))
        if cree is None:
            alertes.append((client, "date de création illisible : fenêtre de 90 jours non vérifiée"))
        else:
            age = (aujourdhui - cree.date()).days
            if cree.date() < limite_clic:
                ignores.append((client, f"clic trop ancien (lead créé il y a {age} jours > {FENETRE_JOURS}) — Google le refuserait"))
                continue
            if age >= ALERTE_JOURS:
                alertes.append((client, f"lead créé il y a {age} jours : dernière semaine possible pour l'importer"))

        contact, contact_heure = parse_date_notion(val(row, "date_contact"))
        resa, resa_heure = parse_date_notion(val(row, "date_resa"))
        cree_heure = cree is not None

        candidats = []
        # ---- Lead qualifié
        if score in valeurs_score:
            quand = contact or cree
            source_date = "Date dernier contact" if contact else "createdTime"
            heure = contact_heure if contact else cree_heure
            candidats.append((CONV_LEAD, quand, heure, valeurs_score[score], f"score {score}", source_date, False))
        elif score == "D":
            raison_lead = "score D (non qualifié)"
        elif not score:
            raison_lead = "score vide"
        else:
            raison_lead = f"score inconnu « {val(row, 'score')} »"

        # ---- Réservation
        est_resa = any(_sans_accents(x) in e for x in ETATS_RESA for e in etats)
        if est_resa:
            quand = resa or contact or cree
            source_date = ("Date réservation" if resa else
                           "Date dernier contact" if contact else "createdTime")
            montant = parse_montant(val(row, "montant"))
            estime = montant is None or montant <= 0
            heure = resa_heure if resa else (contact_heure if contact else cree_heure)
            candidats.append((CONV_RESA, quand, heure, panier_moyen if estime else montant,
                              "montant estimé (panier moyen)" if estime else "montant du contrat",
                              source_date, estime))

        if not candidats:
            ignores.append((client, raison_lead + ", pas de dépôt payé / réservation"))
            continue

        for nom, quand, heure, valeur, note, source_date, estime in candidats:
            if quand is None:
                ignores.append((client, f"{nom} : aucune date utilisable"))
                continue
            if quand.date() < depuis:
                ignores.append((client, f"{nom} : déjà traité (date {quand.date()} avant le {depuis})"))
                continue
            dt = localiser(quand)
            # La conversion doit suivre le clic (≈ création du lead) et ne pas être future.
            if cree is not None and dt < localiser(cree):
                dt = localiser(cree) + timedelta(minutes=1)
                if heure:   # date seule (midi par défaut) le jour du clic : correction silencieuse
                    alertes.append((client, f"{nom} : date antérieure au lead, remplacée par création + 1 min"))
            if dt > maintenant and not heure and quand.date() == aujourdhui:
                dt = maintenant - timedelta(minutes=5)   # date du jour sans heure : « maintenant »
            if dt > maintenant:
                ignores.append((client, f"{nom} : date dans le futur ({quand.date()})"))
                continue
            cle = (id_val, nom)
            if cle in vus:
                ignores.append((client, f"{nom} : doublon (même {id_type.upper()} + même conversion)"))
                continue
            vus.add(cle)
            if estime:
                alertes.append((client, f"Réservation sans « Montant du contrat » : {fmt_argent(valeur)} (panier moyen) utilisé"))
            conversions.append({
                "client": client, "id_type": id_type, "gclid": gclid, "gbraid": gbraid,
                "wbraid": wbraid, "nom": nom, "temps": format_google(dt),
                "valeur": valeur, "note": note, "source_date": source_date,
                "email": val(row, "email"), "tel": val(row, "tel"),
            })
    return conversions, ignores, alertes


# --------------------------------------------------------------------------- écriture
def ecrire_csv(chemin: Path, conversions, colonne_id, coordonnees, consentement):
    entete = list(colonne_id) + ["Conversion Name", "Conversion Time",
                                 "Conversion Value", "Conversion Currency"]
    if coordonnees != "aucune":
        entete += ["Email", "Phone Number"]
    if consentement:
        entete += ["Ad User Data"]
    with chemin.open("w", encoding="utf-8", newline="") as f:
        f.write(f"Parameters:TimeZone={FUSEAU}\r\n")
        w = csv.writer(f, lineterminator="\r\n")
        w.writerow(entete)
        for c in conversions:
            ligne = [c[k] for k in colonne_id.values()]
            ligne += [c["nom"], c["temps"], fmt_valeur(c["valeur"]), DEVISE]
            if coordonnees != "aucune":
                e, t = norm_email(c["email"]), norm_tel(c["tel"])
                ligne += [sha256(e), sha256(t)] if coordonnees == "sha256" else [e, t]
            if consentement:
                ligne += ["Granted"]
            w.writerow(ligne)


def ecrire_resume(chemin, source, depuis, aujourdhui, conversions, ignores, alertes, fichiers, carte, entetes):
    L = []
    L.append("ÉVENOX — Conversions hors ligne pour Google Ads")
    L.append("=" * 48)
    L.append(f"Généré le      : {aujourdhui.isoformat()}")
    L.append(f"Export Notion  : {source}")
    L.append(f"Période        : depuis le {depuis.isoformat()} (inclus)")
    L.append(f"Fuseau horaire : {FUSEAU} — devise {DEVISE}")
    L.append("")
    n_lead = sum(c["nom"] == CONV_LEAD for c in conversions)
    n_resa = sum(c["nom"] == CONV_RESA for c in conversions)
    v_lead = sum(c["valeur"] for c in conversions if c["nom"] == CONV_LEAD)
    v_resa = sum(c["valeur"] for c in conversions if c["nom"] == CONV_RESA)
    L.append(f"LIGNES EXPORTÉES : {len(conversions)}")
    L.append(f"  - {CONV_LEAD} : {n_lead}  (valeur {fmt_argent(v_lead)})")
    L.append(f"  - {CONV_RESA}   : {n_resa}  (valeur {fmt_argent(v_resa)})")
    for f in fichiers:
        L.append(f"  Fichier : {f}")
    L.append("")
    for c in conversions:
        L.append(f"  • {c['client']} — {c['nom']} — {fmt_valeur(c['valeur'])} $ — {c['temps']}"
                 f" ({c['note']} ; date : {c['source_date']} ; {c['id_type'].upper()})")
    L.append("")
    L.append(f"LIGNES IGNORÉES : {len(ignores)}")
    for client, raison in ignores:
        L.append(f"  • {client} : {raison}")
    L.append("")
    L.append(f"AVERTISSEMENTS : {len(alertes)}")
    for client, msg in alertes:
        L.append(f"  ! {client} : {msg}")
    manquantes = [c for c in ("gclid", "score", "montant", "cree", "etat") if c not in carte]
    if manquantes:
        L.append("")
        L.append("COLONNES NOTION INTROUVABLES : " + ", ".join(ALIAS[c][0] for c in manquantes))
        L.append("  Colonnes lues : " + " | ".join(entetes))
    L.append("")
    L.append("À FAIRE : Google Ads > Objectifs > Conversions > Importations > + > Importer un fichier")
    L.append("(ou Gestionnaire de données). Vérifier le rapport d'erreurs 24 h après l'import.")
    chemin.write_text("\n".join(L) + "\n", encoding="utf-8")


# --------------------------------------------------------------------------- main
def parse_valeurs(texte: str):
    out = {}
    for morceau in texte.split(","):
        k, _, v = morceau.partition("=")
        if k.strip() and v.strip():
            out[k.strip().upper()[:1]] = float(v.replace("$", "").strip())
    return out


def main(argv=None):
    p = argparse.ArgumentParser(description="Export Notion -> import Google Ads (conversions hors ligne).")
    p.add_argument("export", type=Path, help="CSV exporté de Notion")
    p.add_argument("--depuis", type=date.fromisoformat, help="AAAA-MM-JJ (défaut : il y a 7 jours)")
    p.add_argument("--sortie", type=Path, default=SORTIE_DEFAUT)
    p.add_argument("--valeurs", default="A=300,B=150,C=50", help="valeurs Lead qualifié par score")
    p.add_argument("--panier-moyen", type=float, default=PANIER_MOYEN_DEFAUT)
    p.add_argument("--coordonnees", choices=["aucune", "brut", "sha256"], default="aucune")
    p.add_argument("--consentement", action="store_true")
    p.add_argument("--aujourdhui", type=date.fromisoformat, default=date.today())
    a = p.parse_args(argv)

    if not a.export.is_file():
        sys.exit(f"Fichier introuvable : {a.export}")
    depuis = a.depuis or (a.aujourdhui - timedelta(days=7))
    lignes, carte, entetes = lire_export(a.export)
    if "gclid" not in carte and "gbraid" not in carte and "wbraid" not in carte:
        print("ATTENTION : aucune colonne GCLID/GBRAID/WBRAID dans l'export.", file=sys.stderr)

    conv, ignores, alertes = traiter(lignes, carte, depuis, a.aujourdhui,
                                     parse_valeurs(a.valeurs), a.panier_moyen)

    a.sortie.mkdir(parents=True, exist_ok=True)
    jour = a.aujourdhui.isoformat()
    fichiers = []
    avec_gclid = [c for c in conv if c["id_type"] == "gclid"]
    braid = [c for c in conv if c["id_type"] != "gclid"]
    f1 = a.sortie / f"conversions_google_ads_{jour}.csv"
    ecrire_csv(f1, avec_gclid, {"Google Click ID": "gclid"}, a.coordonnees, a.consentement)
    fichiers.append(f1)
    if braid:
        f2 = a.sortie / f"conversions_google_ads_braid_{jour}.csv"
        ecrire_csv(f2, braid, {"GBRAID": "gbraid", "WBRAID": "wbraid"}, a.coordonnees, a.consentement)
        fichiers.append(f2)
    resume = a.sortie / f"resume_conversions_{jour}.txt"
    ecrire_resume(resume, a.export, depuis, a.aujourdhui, conv, ignores, alertes, fichiers, carte, entetes)

    print(f"{len(conv)} conversion(s) exportée(s), {len(ignores)} ignorée(s), {len(alertes)} avertissement(s).")
    for f in fichiers + [resume]:
        print(f"  -> {f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
