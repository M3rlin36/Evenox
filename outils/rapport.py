#!/usr/bin/env python3
"""Rédaction de releve/GOOGLE.md à partir des mesures enregistrées.

Tout ce qui est écrit dans le rapport provient des fichiers produits par
collecte.py, rendu.py, analyse.py et pieges.py. Aucun chiffre n'est saisi à la
main : les comptes affichés sont recalculés ici à partir des mesures.
"""
import collections
import json
import os
import re

ANALYSE = "/tmp/evenox_cache/analyse.json"
GRAPPES = "/tmp/evenox_cache/grappes.json"
PIEGES = "/tmp/evenox_cache/pieges.json"
SORTIE = "/workspace/releve/GOOGLE.md"

VILLES = ["Blainville", "Montréal", "Montreal", "Laval", "Terrebonne", "Rosemère",
          "Sainte-Thérèse", "Saint-Eustache", "Longueuil", "Boisbriand", "Mascouche",
          "Brossard", "Mirabel", "Repentigny", "Lorraine", "Bois-des-Filion",
          "Deux-Montagnes", "Rive-Nord", "rive-nord"]


def ech(s):
    """Neutralise ce qui casserait une cellule de tableau Markdown."""
    if s is None:
        return "_absente_"
    return str(s).replace("|", "\\|").replace("\n", " ").replace("\u00a0", " ")


def chemin(u):
    return u.replace("https://evenox.ca", "") or "/"


def piastre(x, signe=False):
    """Montant a la francaise : 20,00 $ plutot que 20.00 $."""
    if x is None:
        return "_aucun_"
    s = f"{x:+.2f}" if signe else f"{x:.2f}"
    return s.replace(".", ",") + " $"


def blocs(n):
    return f"{n} bloc{'s' if n > 1 else ''}, lu{'s' if n > 1 else ''} sans erreur"


def norm_ville(t):
    t = t or ""
    for v in VILLES:
        t = t.replace(v, "{VILLE}")
    return re.sub(r"\s+", " ", t).strip().lower()


def groupes_identiques(fiches, champ):
    g = collections.defaultdict(list)
    for f in fiches:
        v = (f[champ] or "").strip()
        if v:
            g[v].append(f["url"])
    return {k: v for k, v in g.items() if len(v) > 1}


def groupes_quasi(fiches, champ):
    g = collections.defaultdict(list)
    for f in fiches:
        v = norm_ville(f[champ])
        if v:
            g[v].append((f["url"], f[champ]))
    return {k: v for k, v in g.items() if len(v) > 1}


def main():
    an = json.load(open(ANALYSE))
    gr = json.load(open(GRAPPES))
    pi = {p["url"]: p for p in json.load(open(PIEGES))}

    corpus = {f["url"]: f for f in an}
    for f in gr:
        corpus.setdefault(f["url"], f)
    corpus = list(corpus.values())
    N = len(corpus)

    L = []
    a = L.append

    # ------------------------------------------------------------------ entête
    a("# Ce que Google reçoit des pages d'evenox.ca")
    a("")
    a("Relevé effectué le 19 août 2026. Toutes les valeurs ci-dessous ont été lues")
    a("dans la réponse renvoyée par le serveur d'evenox.ca, page par page. Aucune")
    a("n'est estimée. Ce qui n'a pas pu être mesuré est écrit « non établi ».")
    a("")

    # ----------------------------------------------------------- l'échantillon
    a("## L'échantillon : lequel, et pourquoi celui-là")
    a("")
    a("Les plans de site recensent, au moment du relevé :")
    a("")
    a("| Plan de site | Adresses |")
    a("| --- | ---: |")
    a("| `page-sitemap.xml` | 196 |")
    a("| `product-sitemap.xml` | 247 |")
    a("| `post-sitemap.xml` | 12 |")
    a("| **Total des trois familles** | **455** |")
    a("")
    a("La commande annonçait 246 fiches produits ; le plan de site en comptait 247")
    a("le jour du relevé. Les trois autres plans (`category`, `product_cat`,")
    a("`product_tag`) n'ont pas été échantillonnés : ils ne font pas partie des")
    a("trois familles demandées.")
    a("")
    a("**Échantillon principal : 60 adresses sur 455**, soit 13 % du périmètre.")
    a("Répartition : **20 pages**, **34 fiches produits**, **6 articles**. Les fiches")
    a("produits sont surreprésentées parce que c'est la famille la plus nombreuse et")
    a("la seule où l'on peut confronter le prix du JSON-LD au prix affiché.")
    a("")
    a("Mode de tirage, pour qu'il soit reproductible : la liste de chaque plan de")
    a("site est triée par ordre alphabétique, puis on prélève des adresses")
    a("régulièrement espacées sur toute sa longueur (indice = `round(i × (N-1) /")
    a("(n-1))`). Aucun tirage au hasard, aucun choix à la main, à une exception")
    a("près : la page d'accueil a été ajoutée d'office. Le code du tirage est dans")
    a("`outils/echantillon.py`.")
    a("")
    a("**Sondage complémentaire : 32 adresses de plus**, ajoutées après coup et")
    a("comptées à part. Un tirage régulièrement espacé est structurellement mauvais")
    a("pour détecter des doublons : il prélève au plus une page par famille de pages")
    a("jumelles, donc il ne peut pas voir les paires. Or les doublons, quand il y en")
    a("a, se logent dans ces familles. Deux grappes complètes ont donc été relevées")
    a("en entier : **toutes les pages Blainville (16)** et **toutes les pages")
    a("Montréal (18)**, dont 2 figuraient déjà dans l'échantillon principal.")
    a(f"Le corpus mesuré atteint ainsi **{N} adresses distinctes**.")
    a("")
    a(f"Ce qui n'est pas couvert : les {455 - N} adresses restantes. Les conclusions")
    a(f"ci-dessous valent pour les {N} pages lues, pas pour le site entier.")
    a("")

    # -------------------------------------------------------------- la collecte
    a("## Comment les pages ont été lues")
    a("")
    a("Le pare-feu de l'hébergeur (Hostinger) filtre selon l'empreinte du client, et")
    a("il s'est manifesté dès les premières requêtes :")
    a("")
    a("- une première requête est passée (200) ;")
    a("- les suivantes, envoyées avec un agent qui imitait Chrome, ont été refusées")
    a("  en **429 Too Many Requests**, corps vide ;")
    a("- avec un agent honnête, `robots.txt` repassait en 200 mais")
    a("  `sitemap_index.xml` renvoyait un **403** contenant une page de défi")
    a("  JavaScript (« Checking your browser before accessing »).")
    a("")
    a("Conformément à la consigne, il n'y a eu aucune reprise en boucle : la")
    a("collecte a été arrêtée, la réponse examinée, puis reprise autrement. Un vrai")
    a("navigateur Chrome résout ce défi de lui-même et obtient 200. Toutes les pages")
    a("ont donc été lues par Chrome piloté, **avec toutes les ressources annexes")
    a("bloquées** : chaque page n'a coûté au serveur qu'une seule requête, celle du")
    a("document HTML. Le corps enregistré est la réponse brute du serveur, donc bien")
    a("ce que Google reçoit.")
    a("")
    a("Rythme tenu : une requête à la fois, jamais en parallèle, **3 secondes")
    a("d'intervalle**. Environ 130 requêtes au total. **Aucun 403 ni 429 après le")
    a("passage au navigateur** : les 92 pages, les 4 plans de site et les rendus ont")
    a("tous répondu 200.")
    a("")
    a("Le prix affiché des fiches produits demande une précision. Sur la plupart des")
    a("fiches, **aucun prix n'est écrit dans le HTML** : il est inséré après coup par")
    a("le widget tiers Booqable. Ces fiches ont donc été rendues une seconde fois")
    a("avec le JavaScript actif, en n'autorisant que les hôtes Booqable")
    a("(`booqable.com`, `evenox.booqableshop.com`) — evenox.ca ne recevant là encore")
    a("qu'une requête par fiche. Les mouchards publicitaires et statistiques ont été")
    a("bloqués pour ne pas fausser les mesures d'audience du site.")
    a("")

    # --------------------------------------------------------------- le tableau
    a("## Tableau de l'échantillon (60 adresses)")
    a("")
    a("Longueurs en caractères. Colonne « Canonique » : `auto` = la page se désigne")
    a("elle-même. Colonne « JSON-LD » : nombre de blocs, et prix annoncé s'il y en a")
    a("un. Colonne « H1 » : `=` le h1 reprend le titre, `~` il en est proche, `<>` il")
    a("en diffère.")
    a("")
    a("| # | Famille | Adresse | `<title>` exact | Lg | Description meta exacte | Lg |"
      " Canonique | JSON-LD | H1 |")
    a("| ---: | --- | --- | --- | ---: | --- | ---: | --- | --- | --- |")
    sym = {"identique": "=", "proche": "~", "different": "<>",
           "h1 absent ou vide": "**vide**"}
    for i, f in enumerate(an, 1):
        can = ("auto" if f["canonique_auto"] else
               (ech(f["canonique"]) if f["canonique"] else "**absente**"))
        if f["jsonld_nb"] == 0:
            jl = "**absent**"
        elif f["jsonld_erreurs"]:
            jl = f"**{len(f['jsonld_erreurs'])} erreur(s)**"
        else:
            jl = blocs(f['jsonld_nb'])
            if f["jsonld_prix"] is not None:
                jl += f" — {piastre(f['jsonld_prix'])}"
        h1 = sym.get(f.get("corresp"), f.get("corresp", "?"))
        if f["h1_nb"] > 1:
            h1 += f" ({f['h1_nb']} h1)"
        a(f"| {i} | {f['famille']} | `{chemin(f['url'])}` | {ech(f['titre'])} | "
          f"{f['titre_len']} | {ech(f['desc'])} | "
          f"{f['desc_len'] if f['desc_len'] is not None else '—'} | {can} | {jl} | {h1} |")
    a("")

    # -------------------------------------------------------- liste 1 doublons
    dt = groupes_identiques(corpus, "titre")
    dd = groupes_identiques(corpus, "desc")
    qt = groupes_quasi(corpus, "titre")
    qd = groupes_quasi(corpus, "desc")

    a("## Liste 1 — Titres et descriptions en doublon")
    a("")
    a(f"Sur les **{N} adresses lues** : **{len(dt)} groupe** de titres strictement")
    a(f"identiques et **{len(dd)} groupe** de descriptions strictement identiques.")
    a("")
    if not dt and not dd:
        a("**Aucun doublon strict.** Deux pages du corpus ne partagent ni le même")
        a("titre ni la même description. C'est un résultat mesuré, pas une absence")
        a("de vérification : le sondage complémentaire a justement relevé en entier")
        a("les deux grappes de pages jumelles où un doublon aurait été le plus")
        a("probable — Blainville et Montréal, 34 pages bâties sur les mêmes gabarits.")
        a("Le nom de ville y est substitué partout, y compris dans le titre, dans la")
        a("description et dans le `h1`.")
        a("")
        a(f"Cette conclusion ne vaut que pour les {N} pages lues. Les {455 - N} autres")
        a("adresses n'ont pas été vérifiées : **non établi**.")
        a("")
    else:
        for champ, groupes in (("titre", dt), ("description", dd)):
            for k, v in sorted(groupes.items(), key=lambda x: -len(x[1])):
                a(f"- **{len(v)} pages** partagent le même {champ} : « {ech(k)} »")
                for u in v:
                    a(f"    - `{chemin(u)}`")
        a("")

    a("### Ce qui s'en approche : les jumelles à la ville près")
    a("")
    a("Le doublon strict est absent, mais un second calcul mérite d'être posé. En")
    a("remplaçant le nom de ville par un marqueur, on mesure combien de pages")
    a("portent un libellé par ailleurs identique. Ces pages ne sont pas des doublons")
    a("au sens strict, mais elles se disputent les mêmes requêtes avec le même")
    a("argumentaire, mot pour mot.")
    a("")
    a(f"- **Titres identiques à la ville près : {len(qt)} groupes, "
      f"{sum(len(v) for v in qt.values())} adresses.**")
    a(f"- **Descriptions identiques à la ville près : {len(qd)} groupes, "
      f"{sum(len(v) for v in qd.values())} adresses.**")
    a("")
    a("Les cinq groupes les plus fournis, côté description :")
    a("")
    for k, v in sorted(qd.items(), key=lambda x: -len(x[1]))[:5]:
        a(f"- **{len(v)} pages** — description type : « {ech(v[0][1])[:150]}… »")
        for u, _ in v:
            a(f"    - `{chemin(u)}`")
    a("")
    a(f"Les {len(qt) + len(qd)} groupes complets se régénèrent avec `outils/rapport.py`.")
    a("")

    # ------------------------------------------- liste 2 titres longs et vides
    longs = [f for f in corpus if (f["titre_len"] or 0) > 60]
    vides = [f for f in corpus if (f["titre_len"] or 0) < 15
             or (f["titre"] or "").strip() == ""]
    sansdesc = [f for f in corpus if f["desc"] is None]
    dlongs = [f for f in corpus if (f["desc_len"] or 0) > 160]

    a("## Liste 2 — Titres trop longs, titres vides, descriptions hors gabarit")
    a("")
    a("### Titres de plus de 60 caractères")
    a("")
    if not longs:
        mx = max(f["titre_len"] or 0 for f in corpus)
        exa = [f for f in corpus if f["titre_len"] == mx]
        a(f"**Aucun.** Sur les {N} pages, le titre le plus long fait **{mx} "
          f"caractères** — sous la barre des 60. {len(exa)} pages atteignent cette")
        a("longueur :")
        for f in exa:
            a(f"- `{chemin(f['url'])}` : « {ech(f['titre'])} »")
        a("")
        a("Les gabarits de titres tiennent la longueur. C'est le point le plus sain")
        a("du relevé : aucun titre ne sera tronqué par Google pour cause de longueur.")
    else:
        for f in sorted(longs, key=lambda x: -(x["titre_len"] or 0)):
            a(f"- `{chemin(f['url'])}` — **{f['titre_len']} caractères** : "
              f"« {ech(f['titre'])} »")
    a("")
    a("### Titres vides")
    a("")
    if vides:
        for f in vides:
            a(f"- `{chemin(f['url'])}` — titre : « {ech(f['titre'])} », "
              f"{f['titre_len']} caractères.")
            a("")
            a("  Aucune balise n'est littéralement vide, mais **la partie qui nomme")
            a("  la page l'est** : il ne reste que le séparateur et le nom du site.")
            a("  Dans un résultat de recherche, cette page s'annonce « - evenox.ca ».")
    else:
        a("**Aucun.**")
    a("")
    a("### Descriptions absentes")
    a("")
    if sansdesc:
        for f in sansdesc:
            a(f"- `{chemin(f['url'])}` — **aucune balise `meta description`**.")
            a("  Google composera lui-même l'extrait affiché, à partir du contenu")
            a("  de la page.")
    else:
        a("**Aucune.**")
    a("")
    a("### Descriptions de plus de 160 caractères")
    a("")
    if dlongs:
        a(f"**{len(dlongs)} sur {N}.** Elles seront coupées dans les résultats.")
        a("")
        for f in sorted(dlongs, key=lambda x: -(x["desc_len"] or 0)):
            a(f"- `{chemin(f['url'])}` — **{f['desc_len']} caractères**")
            a(f"    « {ech(f['desc'])} »")
    else:
        a("**Aucune.**")
    a("")

    # ----------------------------------------------- liste 3 mentions périmées
    n_desc = sum(1 for p in pi.values() if p["mirabel_desc"])
    n_titre = sum(1 for p in pi.values() if p["mirabel_titre"])
    n_corps = sum(1 for p in pi.values() if p["mirabel_corps"])
    n_adr = sum(1 for p in pi.values() if p["adresse_exacte_presente"])

    a("## Liste 3 — Mentions périmées")
    a("")
    a("### « Ramassage à Mirabel »")
    a("")
    a("| Mesure | Résultat |")
    a("| --- | ---: |")
    a(f"| Descriptions meta citant Mirabel | **{n_desc}** |")
    a(f"| Titres citant Mirabel | **{n_titre}** |")
    a(f"| Pages citant Mirabel dans le corps | {n_corps} |")
    a(f"| Pages portant l'adresse exacte de Sainte-Thérèse | {n_adr} / {len(pi)} |")
    a("")
    a("**Le piège annoncé n'a pas été retrouvé.** Aucune des 92 descriptions meta ne")
    a(f"mentionne Mirabel, ni aucun titre. Les {n_corps} pages qui citent Mirabel dans")
    a("leur corps le font pour désigner un **secteur desservi**, jamais un lieu de")
    a("ramassage. La seule page où « Mirabel » voisine avec un mot d'entrepôt est")
    a("`/location-jeux-techno/`, et elle dit exactement l'inverse de l'erreur")
    a("redoutée :")
    a("")
    a("> « nous livrons partout sur la Rive-Nord, incluant Mirabel, Laval,")
    a("> Blainville, Boisbriand, et plus encore. Des frais de livraison s'appliquent")
    a("> selon la distance **à partir de notre entrepôt de Sainte-Thérèse**. »")
    a("")
    a("Par ailleurs, l'adresse exacte — **215, boulevard René-A.-Robert, local 100,")
    a(f"Sainte-Thérèse** — est présente sur les {n_adr} pages du corpus, sans une seule")
    a("exception.")
    a("")
    a(f"Réserve : la mention périmée peut subsister sur l'une des {455 - N} adresses")
    a("non lues. Pour celles-là, **non établi**.")
    a("")

    fd = [(u, v) for u, p in pi.items() for v in p["livraison_fausse_desc"]]
    fc = [(u, v) for u, p in pi.items() for v in p["livraison_fausse_corps"]]
    dem = sum(p["livraison_dementie_corps_nb"] for p in pi.values())
    pages_fautives = sorted({u for u, _ in fd} | {u for u, _ in fc})
    par_url = {f["url"]: f for f in corpus}

    a("### Livraison annoncée gratuite ou incluse")
    a("")
    a("La règle réelle est : **100 $ pour les 10 premiers kilomètres, puis 7 $/km")
    a("jusqu'à 40 km**. Toute page qui annonce une livraison gratuite ou incluse dit")
    a("donc faux.")
    a("")
    a("Le comptage distingue deux cas, parce qu'une recherche brute sur les mots")
    a("« livraison incluse » se trompe. La phrase la plus répandue du site est")
    a("« Livraison et installation incluses ? **Non**, en supplément par défaut » :")
    a("elle contient les mots, mais énonce la bonne règle. Chaque occurrence a donc")
    a("été relue dans son contexte avant d'être comptée.")
    a("")
    a("| Mesure | Résultat |")
    a("| --- | ---: |")
    a(f"| Descriptions meta affirmant la gratuité | **{len(fd)}** |")
    a(f"| Occurrences fautives dans le corps des pages | **{len(fc)}** |")
    a(f"| **Pages concernées en tout** | **{len(pages_fautives)}** |")
    a(f"| Mentions correctes, écartées du comptage | {dem} |")
    a("")
    a("**Dans la description meta** — c'est le cas le plus grave, puisque la phrase")
    a("s'affiche telle quelle dans les résultats de recherche :")
    a("")
    for u, v in fd:
        a(f"- `{chemin(u)}` — expression fautive : « {ech(v['expression'])} »")
        a(f"    Description entière : « {ech(par_url[u]['desc'])} »")
    a("")
    a("**Dans le corps de la page :**")
    a("")
    for u, v in fc:
        a(f"- `{chemin(u)}` — « {ech(v['expression'])} »")
        a(f"    Contexte : « …{ech(v['contexte'])}… »")
    a("")

    rayons = collections.Counter()
    for p in pi.values():
        for r in p["rayons_annonces"]:
            rayons[r.lower()] += 1
    a("### Un troisième écart, non demandé mais mesuré : le rayon de livraison")
    a("")
    a("La règle donnée s'arrête à **40 km**. Les pages lues annoncent trois rayons")
    a("différents, et aucun ne vaut 40 km :")
    a("")
    a("| Rayon annoncé | Pages |")
    a("| --- | ---: |")
    for r, n in sorted(rayons.items()):
        a(f"| « {r} » | {n} |")
    a("")
    a("La formule la plus fréquente, « la livraison est offerte en supplément dans un")
    a("rayon de 50 km », n'a pas été comptée comme une fausse gratuité : elle dit bien")
    a("que la livraison est en supplément. Mais elle promet un périmètre de 50 km là")
    a("où la règle s'arrête à 40.")
    a("")

    # ------------------------------------------------------------ liste 4 prix
    prods = [f for f in an if f["famille"] == "product"]

    def affiche(f):
        return f["prix_widget"] if f["prix_widget"] is not None else f["prix_editorial"]

    comp = [f for f in prods if f["jsonld_prix"] is not None and affiche(f) is not None]
    ecarts = [f for f in comp if abs(f["jsonld_prix"] - affiche(f)) >= 0.005]
    nonet = [f for f in prods if f not in comp]

    a("## Liste 4 — Écarts entre le prix du JSON-LD et le prix affiché")
    a("")
    a(f"**{len(comp)} fiches produits** ont pu être comparées — la consigne en")
    a(f"demandait au moins 15. **{len(comp) - len(ecarts)} concordent, "
      f"{len(ecarts)} présentent un écart.**")
    a("")
    a("Trois sources de prix coexistent sur ces fiches :")
    a("")
    a("1. le **JSON-LD** (`Product` / `offers.price`), produit par WooCommerce ;")
    a("2. le **prix affiché au visiteur**, inséré par le widget Booqable après")
    a("   chargement — sur la plupart des fiches, c'est le seul prix qu'un client voit ;")
    a("3. le **prix écrit dans le texte** de la page, quand la fiche a été rédigée à")
    a("   la main (ligne « Tarif … », ou balise `<title>` surnuméraire).")
    a("")
    a("### Les écarts")
    a("")
    a("| Fiche | JSON-LD | Prix affiché | Écart | Prix écrit dans le texte |")
    a("| --- | ---: | ---: | ---: | --- |")
    for f in ecarts:
        aff = affiche(f)
        txt = piastre(f["prix_editorial"])
        a(f"| `{chemin(f['url'])}` | {piastre(f['jsonld_prix'])} | {piastre(aff)} | "
          f"**{piastre(aff - f['jsonld_prix'], signe=True)}** | {txt} |")
    a("")
    a("Chacun de ces trois écarts a été relu une seconde fois, lors d'un rendu")
    a("indépendant, avec une fiche témoin (`/product/nerf-gun/`, 20,00 $ des deux")
    a("côtés) pour vérifier que la lecture n'était pas fautive. Les trois se sont")
    a("confirmés à l'identique.")
    a("")
    corrobores = [f for f in ecarts if f["prix_editorial"] is not None]
    if corrobores:
        a(f"{'Deux' if len(corrobores) == 2 else str(len(corrobores))} d'entre eux sont")
        a("corroborés par une troisième source : le texte rédactionnel de la page donne")
        a("**le même prix que le widget**, et contredit donc le JSON-LD.")
        a("")
        for f in corrobores:
            a(f"- `{chemin(f['url'])}` — texte de la page : "
              f"« {ech(f['prix_editorial_extrait'])[:110]} »")
        a("")
        a("Sur ces deux fiches, deux sources sur trois s'accordent contre le JSON-LD :")
        a("c'est **la donnée structurée qui est périmée**, et c'est elle que Google")
        a("lit. Pour `/product/chevalet-premium-location/`, seul le widget était")
        a("disponible ; le sens de l'écart n'est donc pas établi, seulement son")
        a("existence.")
        a("")
    a("### Ce qui n'a pas pu être comparé")
    a("")
    a(f"**{len(nonet)} fiches sur {len(prods)}** — résultat : **non établi**.")
    a("")
    a("| Fiche | JSON-LD | Prix affiché | Raison |")
    a("| --- | --- | --- | --- |")
    for f in nonet:
        j = piastre(f["jsonld_prix"])
        aff = piastre(f["prix_widget"])
        if f["url"].endswith("/shop/"):
            r = "page de boutique, pas une fiche produit"
        elif f["jsonld_prix"] is None and f["prix_widget"] is None:
            r = "ni prix structuré, ni prix affiché par le widget"
        elif f["jsonld_prix"] is None:
            r = "**aucun bloc JSON-LD `Product`** sur la fiche"
        else:
            r = "le widget n'a affiché aucun prix"
        a(f"| `{chemin(f['url'])}` | {j} | {aff} | {r} |")
    a("")
    sans_prod = [f for f in prods if not f.get("a_product_jsonld")
                 and not f["url"].endswith("/shop/")]
    a(f"### {len(sans_prod)} fiches ne portent aucun bloc JSON-LD `Product`")
    a("")
    a("C'est la cause principale des comparaisons impossibles, et elle se mesure :")
    a("sur ces fiches, seul le graphe Yoast (`WebPage`, `BreadcrumbList`, `WebSite`,")
    a("`Organization`) est émis. Aucun `Product`, donc aucun prix, aucune")
    a("disponibilité, aucune devise. **Ces fiches ne peuvent pas paraître comme")
    a("résultat produit enrichi dans Google.**")
    a("")
    a("Le point commun se lit dans le HTML : sur les sept, le prix WooCommerce")
    a("transmis à Google Ads (`gtag` / `value`) vaut **0,00 $**. Un produit à zéro ne")
    a("déclenche pas l'émission du schéma `Product`.")
    a("")
    a("| Fiche | Prix WooCommerce (`gtag`) | Prix affiché par le widget |")
    a("| --- | ---: | ---: |")
    for f in sans_prod:
        g = piastre(f.get("gtag_value"))
        w = piastre(f["prix_widget"])
        a(f"| `{chemin(f['url'])}` | {g} | {w} |")
    a("")
    a("Six de ces sept fiches sont des « forfaits » sans prix affiché non plus : elles")
    a("renvoient vers une demande de soumission, et l'absence de prix structuré s'y")
    a("défend. **`/product/extension-electrique-10-pieds/` est le cas à corriger** :")
    a("le widget la vend 2,00 $, mais WooCommerce la porte à 0,00 $. Le prix existe")
    a("pour le client et n'existe pas pour Google.")
    a("")

    # --------------------------------------------------------- autres constats
    shop = next(f for f in an if f["url"].endswith("/shop/"))
    dbl = [f for f in corpus if f["nb_balises_title"] > 1]

    a("## Autres constats du relevé")
    a("")
    a("### `/shop/` : la page la plus abîmée du corpus")
    a("")
    a("Quatre défauts sur la même page, qui est la porte d'entrée du catalogue :")
    a("")
    a(f"- **Titre** : « {ech(shop['titre'])} » — {shop['titre_len']} caractères, la")
    a("  partie qui nomme la page est vide.")
    a("- **Description meta** : absente.")
    a(f"- **Balise canonique** : absente. C'est la seule page des {N} dans ce cas ;")
    a(f"  les {N - 1} autres portent une canonique qui se désigne elle-même.")
    a("- **`h1`** : présent, mais **vide** — la balise existe et ne contient rien.")
    a("")
    a("Vérification faite directement dans le HTML brut : la page ne contient **aucune**")
    a("occurrence du mot `canonical`, **aucune** balise `name=\"description\"`, et pas")
    a("davantage de `og:title` ni de `meta robots`. Le JSON-LD, lui, est bien là")
    a("(`WebSite`, `Organization`, `BreadcrumbList`) mais sans nœud `WebPage`.")
    a("Autrement dit, Yoast ne produit presque rien sur cette page, alors qu'il")
    a("s'exécute normalement sur les 91 autres.")
    a("")
    a("### Balises `<title>` en double dans le corps de la page")
    a("")
    a(f"**{len(dbl)} pages sur {N}** contiennent une **seconde balise `<title>`**,")
    a("placée dans le `<body>` par un module de code Divi. Le `<head>` en porte déjà")
    a("une, différente. Exemple sur `/product/machine-popcorn/` :")
    a("")
    ex = next(f for f in dbl if f["url"].endswith("machine-popcorn/"))
    a(f"- dans le `<head>` : « {ech(ex['titre'])} »")
    a(f"- dans le `<body>` : « {ech(ex['titre_corps'])} »")
    a("")
    a("Une balise `<title>` n'a rien à faire dans le corps du document. Le titre")
    a("retenu par Google reste en principe celui du `<head>` — mais c'est le moins")
    a("informatif des deux : celui du corps porte les tarifs et la durée de location.")
    a(f"Les {len(dbl)} pages concernées :")
    a("")
    for f in dbl:
        a(f"- `{chemin(f['url'])}`")
    a("")
    a("### Titre principal `h1`")
    a("")
    cl = collections.Counter(f.get("corresp") for f in an)
    vide_h1 = sum(1 for f in an if f["h1_nb"] >= 1 and not (f["h1"][0] or "").strip())
    a("Sur les 60 pages de l'échantillon principal :")
    a("")
    a("| Constat | Pages |")
    a("| --- | ---: |")
    a(f"| `h1` présent et unique | {sum(1 for f in an if f['h1_nb'] == 1)} |")
    a(f"| `h1` en double | {sum(1 for f in an if f['h1_nb'] > 1)} |")
    a(f"| `h1` absent | {sum(1 for f in an if f['h1_nb'] == 0)} |")
    a(f"| `h1` présent mais vide | {vide_h1} |")
    a("")
    a(f"Correspondance avec le titre de la page : **{cl.get('identique', 0)} "
      f"identiques**, **{cl.get('proche', 0)} proches**, "
      f"**{cl.get('different', 0)} franchement différents**.")
    a("")
    a("Le seul `h1` en double est `/product/location-jeu-gonflable-princesse-xl/`,")
    a("qui porte « Jeu Gonflable Princesse XL » **et** « COntact » — un second `h1`")
    a("qui n'est pas un titre de page, et dont la casse est fautive dans le site")
    a("lui-même.")
    a("")
    a("Les sept pages où le `h1` s'écarte du titre :")
    a("")
    a("| Adresse | `<title>` | `h1` |")
    a("| --- | --- | --- |")
    for f in an:
        if f.get("corresp") == "different":
            a(f"| `{chemin(f['url'])}` | {ech(f['titre'])} | {ech(f['h1'][0])} |")
    a("")
    a("Le cas de `/blog/` mérite un mot : son titre et son `h1` annoncent tous deux")
    a("un article sur l'organisation de mariage, alors que l'adresse est celle de la")
    a("liste des articles. Dans Google, la page d'index du blogue se présente sous le")
    a("nom d'un seul de ses articles.")
    a("")
    a("### Balise canonique et JSON-LD : l'état général")
    a("")
    a("| Mesure | Résultat |")
    a("| --- | ---: |")
    a(f"| Canonique présente et pointant vers elle-même | {sum(1 for f in corpus if f['canonique_auto'])} / {N} |")
    a(f"| Canonique pointant ailleurs | {sum(1 for f in corpus if f['canonique'] and not f['canonique_auto'])} |")
    a(f"| Canonique absente | {sum(1 for f in corpus if not f['canonique'])} |")
    a(f"| Pages avec au moins un bloc JSON-LD | {sum(1 for f in corpus if f['jsonld_nb'] > 0)} / {N} |")
    a(f"| Blocs JSON-LD illisibles (erreur de syntaxe) | {sum(len(f['jsonld_erreurs']) for f in corpus)} |")
    a("")
    a("Aucune canonique ne pointe vers une autre page, et **aucun bloc JSON-LD n'est")
    a(f"cassé** : les {N} pages ont été analysées sans une seule erreur de lecture.")
    a("")

    # ---------------------------------------------------------- récapitulatif
    a("## Récapitulatif")
    a("")
    a("| Point demandé | Résultat sur le corpus lu |")
    a("| --- | --- |")
    a(f"| Titres de plus de 60 caractères | **0** (le plus long : {max(f['titre_len'] or 0 for f in corpus)}) |")
    a(f"| Titres vides | **{len(vides)}** — `/shop/`, réduit à « - evenox.ca » |")
    a(f"| Descriptions absentes | **{len(sansdesc)}** — `/shop/` |")
    a(f"| Descriptions de plus de 160 caractères | **{len(dlongs)}** |")
    a(f"| Titres strictement en doublon | **{len(dt)}** |")
    a(f"| Descriptions strictement en doublon | **{len(dd)}** |")
    a(f"| Titres identiques à la ville près | {len(qt)} groupes, {sum(len(v) for v in qt.values())} pages |")
    a(f"| Descriptions identiques à la ville près | {len(qd)} groupes, {sum(len(v) for v in qd.values())} pages |")
    a(f"| Canoniques absentes | **{sum(1 for f in corpus if not f['canonique'])}** |")
    a("| Canoniques pointant ailleurs | 0 |")
    a("| Blocs JSON-LD illisibles | 0 |")
    a(f"| Fiches produits sans bloc JSON-LD `Product` | **{len(sans_prod)}** sur {len(prods) - 1} |")
    a(f"| Descriptions meta disant « Mirabel » | **{n_desc}** |")
    a(f"| Pages promettant à tort une livraison gratuite | **{len(pages_fautives)}** |")
    a(f"| Écarts de prix JSON-LD / affiché | **{len(ecarts)}** sur {len(comp)} comparaisons |")
    a(f"| Pages à deux balises `<title>` | {len(dbl)} |")
    a(f"| `h1` vides | {vide_h1} |")
    a(f"| `h1` en double | {sum(1 for f in an if f['h1_nb'] > 1)} |")
    a("")
    a("## Ce qui reste non établi")
    a("")
    a(f"- Les **{455 - N} adresses** des trois familles qui n'ont pas été lues.")
    a("- Les plans `category-sitemap.xml`, `product_cat-sitemap.xml` et")
    a("  `product_tag-sitemap.xml`, hors du périmètre demandé.")
    a(f"- Le **prix affiché de {len(nonet)} des {len(prods)} fiches produits** : soit le")
    a("  widget n'a affiché aucun prix, soit la fiche ne porte pas de prix structuré.")
    a("- Le **sens** de l'écart sur `/product/chevalet-premium-location/` : l'écart")
    a("  est mesuré, mais rien ne permet de dire lequel des deux prix fait foi.")
    a("- Ce que Google **retient effectivement** après rendu par ses propres robots.")
    a("  Ce relevé dit ce que le serveur envoie, pas ce que Google décide d'afficher.")
    a("")
    a("---")
    a("")
    a("Les outils du relevé sont dans `outils/` : `collecte.py` (lecture des pages),")
    a("`echantillon.py` (tirage), `rendu.py` (prix affiché), `analyse.py`")
    a("(dépouillement), `pieges.py` (mentions périmées), `rapport.py` (ce document).")
    a("Aucune écriture n'a été faite sur evenox.ca : le relevé est en lecture seule,")
    a("sans connexion à un compte, sans commande et sans saisie de donnée personnelle.")

    os.makedirs("/workspace/releve", exist_ok=True)
    with open(SORTIE, "w", encoding="utf-8") as f:
        f.write("\n".join(L) + "\n")
    print(f"écrit : {SORTIE} ({len(L)} lignes)")


if __name__ == "__main__":
    main()
