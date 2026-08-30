# Go — formulaire Evenox

**Statut : 2.0.0 restaure le chrome Evenox. Le plugin n’injecte plus que dans `#evx-plan` (30 août 2026).**

evenox.ca est un WordPress / Divi hors de ce dépôt. Le zip `plugin/evenox-formulaire.zip` est installé et activé. Cache LiteSpeed vidé.

`/location-tables-chaises/` réaffiche la page Divi d’origine :

- hero, photos, kit, forfaits, FAQ, header/footer Divi
- violet `#5E17EB`, Raleway
- le calculateur déjà en une question à la fois (`KIT WIZARD` dans la page)
- le plugin ne remplace plus `#calculateur`, `.tc-calc` ni `et_builder_inner_content`

1.1.0 / 1.2.0 (autre agent) avaient de nouveau  remplacé toute la page. 2.0.0 annule ça.

Webhook inchangé : `evx_soumission` → evenox.ca@gmail.com
