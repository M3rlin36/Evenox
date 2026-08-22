# CSS carrousel — Souvent loué avec + forfaits

À coller tel quel dans un bloc `<style>` WordPress. Pas les fences Markdown.
Aucune ligne vide dans le bloc : WordPress coupe la feuille à la première.

```css
/* Empêche la piste de rester un bandeau plus étroit que la page, calé à gauche. */
#evx-piste.evx-cpl,
#evx-forf-piste.evx-forfaits {
  --evx-jeu: clamp(0.75rem, 2vw, 1.25rem);
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: center;
  gap: var(--evx-jeu);
  width: 100%;
  max-width: 100%;
  margin-inline: auto;
}
/* Empêche une largeur min figée de faire déborder la carte une fois la piste en grille. */
#evx-piste.evx-cpl > .evx-cpl-vedette,
#evx-forf-piste.evx-forfaits > .evx-forfait {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 0;
}
/* Répartit deux cartes sur toute la largeur au lieu de les laisser petites avec un vide à droite. */
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(2):first-child),
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(2):first-child) {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-content: center;
  overflow-x: hidden;
  overflow-y: visible;
  white-space: normal;
}
/* Répartit trois cartes sur toute la largeur, le cas le plus fréquent des forfaits. */
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(3):first-child),
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(3):first-child) {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
  overflow-x: hidden;
  overflow-y: visible;
  white-space: normal;
}
/* Répartit quatre cartes sur toute la largeur, le maximum avant le mode défilement. */
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(4):first-child),
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(4):first-child) {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-content: center;
  overflow-x: hidden;
  overflow-y: visible;
  white-space: normal;
}
/* Annule une largeur ou un flex figés qui empêcheraient les colonnes 1fr de s'étirer. */
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(2):first-child) > .evx-cpl-vedette,
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(3):first-child) > .evx-cpl-vedette,
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(4):first-child) > .evx-cpl-vedette,
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(2):first-child) > .evx-forfait,
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(3):first-child) > .evx-forfait,
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(4):first-child) > .evx-forfait {
  flex: unset;
  width: auto;
  max-width: none;
  min-width: 0;
}
/* Centre une carte seule pour qu'elle ne parte pas à gauche. */
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(1):first-child),
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(1):first-child) {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  justify-items: center;
  overflow-x: hidden;
  overflow-y: visible;
}
/* Empêche une carte unique de s'étirer sur 1440 px. */
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(1):first-child) > .evx-cpl-vedette,
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(1):first-child) > .evx-forfait {
  width: min(100%, 20rem);
}
/* Rétablit le défilement horizontal dès qu'il y a cinq cartes. */
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(5)),
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(5)) {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-x: contain;
  scroll-snap-type: x proximity;
}
/* Centre le rang de cinq cartes et plus quand il tient encore ; les cales tombent à zéro dès que ça dépasse. */
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(5))::before,
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(5))::after,
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(5))::before,
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(5))::after {
  content: "";
  flex: 1 0 0;
}
/* Garde une largeur de carte lisible pour que le surplus défile, au lieu de tout compresser. */
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(5)) > .evx-cpl-vedette,
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(5)) > .evx-forfait {
  flex: 0 0 min(78vw, 20rem);
  width: min(78vw, 20rem);
  max-width: none;
  min-width: min(78vw, 20rem);
  scroll-snap-align: center;
}
/* Empêche un bloc interne à largeur fixe de déborder et de rouvrir un scroll à 375 px. */
#evx-piste.evx-cpl > .evx-cpl-vedette > *,
#evx-forf-piste.evx-forfaits > .evx-forfait > * {
  max-width: 100%;
}
/* Empêche une image à largeur fixe de laisser un trou dans une carte élargie. */
#evx-piste.evx-cpl > .evx-cpl-vedette img,
#evx-forf-piste.evx-forfaits > .evx-forfait img {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
@media (max-width: 47.99rem) {
/* À 375 px, trois colonnes écraseraient les cartes : on passe à deux. */
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(3):first-child),
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(3):first-child) {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
/* Centre la troisième carte sous la première rangée, plutôt que de la coller à gauche. */
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(3):first-child) > .evx-cpl-vedette:last-child,
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(3):first-child) > .evx-forfait:last-child {
  grid-column: 1 / -1;
  justify-self: center;
  width: calc((100% - var(--evx-jeu)) / 2);
}
/* À 375 px, quatre cartes en rangée seraient illisibles : on passe en grille 2×2. */
#evx-piste.evx-cpl:has(> .evx-cpl-vedette:nth-last-child(4):first-child),
#evx-forf-piste.evx-forfaits:has(> .evx-forfait:nth-last-child(4):first-child) {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
}
```

## Ce que je n'ai pas pu faire en CSS seul

Je n'ai pas accès au site. Je n'ai pas vu la feuille déjà collée dans WordPress. Si une règle plus spécifique, ou un `!important`, fixe encore la largeur des cartes, celle-ci va perdre.

Le compte `:has()` / `:nth-last-child` ne voit que les enfants éléments directs. Un wrapper de plus, un nœud vide ou une carte fantôme Booqable fausse le nombre.

Je ne peux pas enlever une marge ou un padding posé sur un parent hors `.evx-cpl` / `.evx-forfaits`. « Toute la largeur » = la largeur de ces deux blocs, pas celle de l'écran.

À 375 px, quatre cartes en une rangée seraient trop étroites. J'ai choisi une grille 2 × 2, et 2 + 1 centrée pour trois. Sans toucher au HTML, je ne peux pas choisir un empilement différent par page.

Les boutons précédent / suivant, les points, et le masquage de la barre de défilement demandent du HTML ou du JS.

J'ai forcé `img { width: 100%; }` et `max-width: 100%` sur les enfants directs. Un titre ou un prix Booqable plus profond dans l'arbre peut encore rester figé.

Une seule carte n'était pas dans la demande (2, 3 ou 4). Je la centre sans l'étirer sur 1440 px.

`:has()` est supporté par les navigateurs actuels. Pas par Internet Explorer.
