<?php
/**
 * Plugin Name: Evenox Formulaire
 * Description: Inerte. Ne remplace ni et_builder_inner_content, ni #calculateur, ni .tc-calc. La page Divi originale reste.
 * Version: 1.0.3-restore
 * Author: Evenox
 */

if (!defined('ABSPATH')) {
    exit;
}

/*
 * Restauration 30 août 2026.
 *
 * 1.0.0 / 1.0.1 remplaçaient #calculateur ou tout et_builder_inner_content
 * par un wizard Locabris. Alexandre n'a pas demandé ça : Evenox devait
 * rester la page Divi d'origine (hero, photos, kit, forfaits, FAQ).
 *
 * Ce fichier ne s'accroche à aucun hook front. Même réactivé, il ne
 * touche pas la page.
 */
