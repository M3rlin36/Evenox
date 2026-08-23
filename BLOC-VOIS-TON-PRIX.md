# Bloc « Vois ton prix » — version claire

CSS à coller à la place de la feuille actuelle, sous les mêmes classes.
Le HTML des 161 pages n’a pas à changer, sauf la phrase corrigée plus bas.

À coller tel quel dans un bloc `<style>` WordPress. Pas les fences Markdown.
Aucune ligne vide dans le bloc : wpautop le couperait en deux.

---

## 1. CSS complet

```html
<style>
/* Le wrapper n'impose pas la largeur : 20 px de chaque côté, pour le téléphone. */
.evx-go-wrap{box-sizing:border-box;width:100%;margin:0;padding-left:20px;padding-right:20px;text-align:center}
/* Le panneau lui-même est bridé à 720 px, centré, fond blanc, cadre et ombre. */
.evx-go{box-sizing:border-box;display:block;width:100%;max-width:720px;margin:44px auto;padding:40px 32px;background:#fff;background-image:none;color:#1a1a1a;border:1px solid #e8e8e8;border-radius:18px;box-shadow:0 10px 28px rgba(17,17,17,.07);text-align:center}
/* Surtitre en gris, jamais en mauve. */
.evx-go .evx-go-eyebrow{display:inline-block;margin:0 0 14px;color:#4a4a4a;font-size:12px;font-weight:600;letter-spacing:.14em;text-transform:uppercase}
/* Titre sombre, pour contrer un h2 resté blanc. */
.evx-go h2{margin:0 0 12px !important;padding:0 !important;color:#1a1a1a !important;font-size:1.6rem !important;font-weight:800 !important;line-height:1.25 !important}
/* Paragraphe sombre, largeur de lecture limitée, jamais mauve. */
.evx-go p{max-width:34rem;margin:0 auto 24px !important;color:#333 !important;font-size:1rem !important;line-height:1.6 !important}
/* Le paragraphe du bouton ne doit pas ajouter un second trou sous le geste. */
.evx-go p:has(.evx-go-btn),.evx-go p:last-child{margin-bottom:0 !important}
/* Le mauve #5E17EB ne revient que sur le bouton, plein, texte blanc. */
.evx-go .evx-go-btn{display:inline-block;box-sizing:border-box;min-height:49px;padding:15px 34px;background:#5E17EB;background-image:none;color:#fff !important;font-weight:700;font-size:.98rem;line-height:1.2;border:0;border-radius:99px;text-decoration:none !important;box-shadow:none}
/* Survol : même mauve, un peu plus sombre, sans second hex. */
.evx-go .evx-go-btn:hover,.evx-go .evx-go-btn:focus{background:#5E17EB;color:#fff !important;filter:brightness(.92)}
.evx-go .evx-go-btn:focus-visible{outline:2px solid #1a1a1a;outline-offset:3px}
@media (max-width:720px){
/* Sur téléphone, on resserre le padding sans perdre le cadre. */
.evx-go{margin:32px auto;padding:28px 20px}
.evx-go h2{font-size:1.3rem !important}
.evx-go .evx-go-btn{min-height:49px;padding:14px 28px}
}
</style>
```

---

## 2. HTML de référence

Le CSS se substitue sans toucher au HTML. Si vous recollez le bloc, voici la
structure propre, avec la phrase corrigée. Aucune ligne vide à l’intérieur.

Le surtitre, le libellé du bouton et son adresse restent ceux déjà posés sur
chaque page. Je ne les invente pas. Remplacez `@@SURTITRE@@`, `@@HREF@@` et
`@@BOUTON@@` par les valeurs déjà en place.

```html
<div class="evx-go-wrap">
<div class="evx-go">
<span class="evx-go-eyebrow">@@SURTITRE@@</span>
<h2>Vois ton prix total en deux minutes</h2>
<p>Tu obtiens ton total en deux minutes, sans formulaire et sans attendre de rappel.</p>
<p><a class="evx-go-btn" href="@@HREF@@">@@BOUTON@@</a></p>
</div>
</div>
```

Phrase écartée, interdite : « Tu obtiens ton total livré, placé et ramassé,
sans formulaire et sans attendre de rappel. » Ne jamais la recoller.

---

## 3. Pourquoi ces choix

**Fond blanc, sans dégradé.** Sur `/location-chaises/`, le panneau sombre
arrive juste après un hero déjà sombre, séparé par une mince bande blanche.
Deux aplats foncés se cognent. Un fond blanc coupe net et laisse le hero
seul dans le sombre.

**Aucun mauve en texte.** Alexandre l’a tranché le 22 août, sur un autre
bloc : le mauve en aplat de texte ne lui plaît pas. Titre, surtitre et
paragraphe restent gris ou presque noirs.

**Cadre très clair et ombre douce.** Sans couleur de fond, le bloc doit
quand même se détacher de la page. Un trait `#e8e8e8` et une ombre légère
suffisent. Pas d’aplat, pas de liseré mauve.

**Tout centré, bride à 720 px.** À 1 040 px, le panneau pleine largeur
écrase ce qui l’entoure. C’est `.evx-go` qui plafonne à 720 px, pas le
wrapper. Le padding de 20 px sur `.evx-go-wrap` empêche le cadre de
coller aux bords sur téléphone.

**Mauve seulement sur le bouton.** `#5E17EB` reste l’appel à l’action,
plein, texte blanc. C’est le seul point saturé. Le survol assombrit par
`brightness`, sans inventer un second hex.

**Mobile.** Sous 720 px, le padding baisse, le titre aussi. Le bouton
garde 49 px de haut, déjà la cible du pouce ailleurs sur le site.

**Mêmes classes.** `.evx-go`, `.evx-go-wrap`, `.evx-go-eyebrow`,
`.evx-go-btn`. La feuille se substitue. On ne rouvre pas 161 HTML pour
le style.

**Phrase du total.** « Livré, placé et ramassé » promet un montage et une
livraison compris. Ce n’est pas le cas. La version corrigée dit seulement
le délai de calcul, déjà dans le titre.

---

## Ce que je n'ai pas pu faire

Je n’ai pas accès au site. Je n’ai ouvert ni WordPress, ni Booqable, ni
une page. Je n’ai pas vérifié `/location-chaises/`, ni les 161 pages.

Je n’ai pas collé la feuille. La pose se fait ailleurs.

Je n’ai pas vu le HTML réel du bloc aujourd’hui. Le gabarit reprend les
quatre classes données, le titre déjà relevé dans ce dépôt
(`allege/vente/location-chaises.md`, 19 août), et la phrase corrigée de
ce brief. Surtitre, libellé et adresse du bouton : non relevés ici.

Je n’ai pas vu le CSS de l’autre bloc du 22 août. J’ai repris la
direction dictée (fond blanc, cadre, 720 px, mauve au bouton seulement),
pas une feuille copiée.

Je n’ai pas inventé de prix, de délai, de zone, de mesure ni de garantie.
Le bouton ne promet ni livraison, ni montage.

Si une règle plus spécifique, ou un `!important` du thème, recolore encore
un `h2` ou un lien, cette feuille peut perdre. Je n’ai pas vu la feuille
déjà collée dans WordPress.
