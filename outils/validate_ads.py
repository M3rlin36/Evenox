# -*- coding: utf-8 -*-
"""Validate Evenox ad copy limits (Google Ads CSVs + ChatGPT ads CSV + Meta)."""
import csv, os, re, sys
from collections import Counter, defaultdict

G = "/home/user/Evenox/campagnes/google-ads"
CG = "/home/user/Evenox/campagnes/chatgpt-ads/ads.csv"
FORBIDDEN = re.compile(r"\b(premium|devis|quote|cheap)\b", re.I)
errors, warnings, stats = [], [], []

def read(p):
    with open(p, encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))

def chk(label, text, limit, where):
    n = len(text)
    if n > limit:
        errors.append(f"{where}: {label} {n}>{limit}: {text!r}")
    return n

CLAIMS = re.compile(r"\binclus|\bcompris\b|gratuit|mariage[^.]{0,20}(599|999)", re.I)
def forbid(text, where, allow_kw=False):
    if CLAIMS.search(text):
        errors.append(f"{where}: unverified inclusion/price claim in {text!r}")
    if FORBIDDEN.search(text) and not allow_kw:
        errors.append(f"{where}: forbidden word in {text!r}")
    if "!" in text:
        warnings.append(f"{where}: exclamation mark in {text!r}")

# ---- RSA
rsa = read(os.path.join(G, "rsa_ads.csv"))
maxh = maxd = 0
for r in rsa:
    w = f"RSA[{r['Ad Group']}]"
    hs = [r[f"Headline {i}"] for i in range(1, 16) if r.get(f"Headline {i}")]
    ds = [r[f"Description {i}"] for i in range(1, 5) if r.get(f"Description {i}")]
    if len(hs) != 15: errors.append(f"{w}: {len(hs)} headlines (need 15)")
    if len(ds) != 4: errors.append(f"{w}: {len(ds)} descriptions (need 4)")
    dup = [h for h, c in Counter(h.lower() for h in hs).items() if c > 1]
    if dup: errors.append(f"{w}: duplicate headlines {dup}")
    for h in hs:
        maxh = max(maxh, chk("headline", h, 30, w)); forbid(h, w)
    for d in ds:
        maxd = max(maxd, chk("description", d, 90, w)); forbid(d, w)
    chk("Path 1", r["Path 1"], 15, w); chk("Path 2", r["Path 2"], 15, w)
    if not r["Final URL"].startswith("https://evenox.ca/"):
        errors.append(f"{w}: bad final URL {r['Final URL']}")
stats.append(f"RSA: {len(rsa)} ads, longest headline {maxh}/30, longest description {maxd}/90")

# ---- keywords
kws = read(os.path.join(G, "keywords.csv"))
per = defaultdict(int)
for k in kws:
    per[(k["Campaign"], k["Ad Group"])] += 1
    if len(k["Keyword"]) > 80: errors.append(f"keyword too long: {k['Keyword']}")
    if len(k["Keyword"].split()) > 10: errors.append(f"keyword >10 words: {k['Keyword']}")
for key, n in per.items():
    if not 10 <= n <= 20:
        errors.append(f"{key}: {n} keywords (need 10-20)")
stats.append(f"Keywords: {len(kws)} across {len(per)} ad groups (min {min(per.values())}, max {max(per.values())})")
ag_rsa = {(r["Campaign"], r["Ad Group"]) for r in rsa}
for key in per:
    if key not in ag_rsa: errors.append(f"{key}: no RSA")

# ---- negatives
neg = read(os.path.join(G, "negatives.csv"))
shared = read(os.path.join(G, "negatives_shared_list.csv"))
allneg = [n["Keyword"] for n in neg] + [n["Keyword"] for n in shared]
d = [k for k, c in Counter((n["Campaign"], n["Keyword"]) for n in neg).items() if c > 1]
if d: errors.append(f"duplicate campaign negatives {d}")
d = [k for k, c in Counter(n["Keyword"] for n in shared).items() if c > 1]
if d: errors.append(f"duplicate shared negatives {d}")
stats.append(f"Negatives: {len(shared)} in shared list + {len(neg)} campaign-level = {len(allneg)}")
# conflicts: a negative that blocks a positive keyword in the same campaign
sharedset = {n["Keyword"].lower() for n in shared}
campneg = defaultdict(set)
for n in neg: campneg[n["Campaign"]].add(n["Keyword"].lower())
def blocks(negkw, query):
    return re.search(r"(^|\s)" + re.escape(negkw) + r"($|\s)", query) is not None
for k in kws:
    q = k["Keyword"].lower()
    for nk in sharedset | campneg[k["Campaign"]]:
        if blocks(nk, q):
            errors.append(f"CONFLICT: negative {nk!r} blocks keyword {q!r} in {k['Campaign']}")

# ---- assets
for r in read(os.path.join(G, "assets_sitelinks.csv")):
    w = f"Sitelink[{r['Campaign']}]"
    chk("link text", r["Link Text"], 25, w); chk("desc1", r["Description Line 1"], 35, w)
    chk("desc2", r["Description Line 2"], 35, w); forbid(r["Link Text"], w)
for r in read(os.path.join(G, "assets_sitelinks.csv")):
    forbid(r["Description Line 1"] + " " + r["Description Line 2"], "Sitelink desc")
for r in read(os.path.join(G, "assets_callouts.csv")):
    chk("callout", r["Callout text"], 25, f"Callout[{r['Campaign']}]"); forbid(r["Callout text"], "Callout")
for r in read(os.path.join(G, "assets_structured_snippets.csv")):
    vals = r["Snippet Values"].split(";")
    if len(vals) < 3: errors.append(f"snippet <3 values {r}")
    for v in vals: chk("snippet value", v, 25, f"Snippet[{r['Campaign']}]")
stats.append("Assets: sitelinks (25/35/35), callouts (25), snippets (25) checked")

# ---- ChatGPT ads
if os.path.exists(CG):
    cg = read(CG)
    mt = md = 0
    for r in cg:
        w = f"ChatGPT[{r['Ad group']} v{r['Variant']}]"
        mt = max(mt, chk("title", r["Title"], 50, w)); md = max(md, chk("description", r["Description"], 100, w))
        forbid(r["Title"] + " " + r["Description"], w)
    stats.append(f"ChatGPT: {len(cg)} ads, longest title {mt}/50, longest description {md}/100")

# ---- Meta / markdown forbidden-word scan
for root in ("/home/user/Evenox/campagnes/meta-ads", "/home/user/Evenox/campagnes/chatgpt-ads"):
    for fn in os.listdir(root):
        if fn.endswith(".md"):
            for i, line in enumerate(open(os.path.join(root, fn), encoding="utf-8"), 1):
                if re.search(r"\bdevis\b", line, re.I) and "jamais" not in line.lower():
                    errors.append(f"{fn}:{i} uses 'devis'")
                if re.search(r"\bpremium\b", line, re.I) and "premium" not in line.lower().split("«")[0][:0]:
                    # premium allowed only inside explicit 'never use' notes
                    if "jamais" not in line.lower() and "never" not in line.lower():
                        errors.append(f"{fn}:{i} uses 'premium'")

print("\n".join(stats))
print(f"\nWARNINGS ({len(warnings)})"); print("\n".join(warnings))
print(f"\nERRORS ({len(errors)})"); print("\n".join(errors))
sys.exit(1 if errors else 0)
