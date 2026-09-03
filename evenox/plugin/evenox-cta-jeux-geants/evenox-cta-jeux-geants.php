<?php
/**
 * Plugin Name: Evenox CTA Jeux géants
 * Description: Sur /jeux-geants-interactifs/ seulement, « Monter mon forfait » ouvre le calculateur jeux géants (#configurateur), pas tables/chaises.
 * Version: 1.0.0
 * Author: Evenox
 * License: GPL-2.0-or-later
 */

if (!defined('ABSPATH')) {
    exit;
}

define('EVENOX_CTA_JG_VER', '1.0.0');
define('EVENOX_CTA_JG_SLUG', 'jeux-geants-interactifs');
define('EVENOX_CTA_JG_PAGE_ID', 79);
define('EVENOX_CTA_JG_OLD_PATH', '/location-tables-chaises/');
define('EVENOX_CTA_JG_NEW', 'https://evenox.ca/location-jeux-geants/#configurateur');

/**
 * Catalogue /jeux-geants-interactifs/ (page-id 79) seulement.
 * Ne touche pas /equipement/, /jeux-geants/ ni /location-tables-chaises/.
 */
function evenox_cta_jg_is_target_page()
{
    if (function_exists('is_page')) {
        if (is_page(EVENOX_CTA_JG_SLUG) || is_page(EVENOX_CTA_JG_PAGE_ID)) {
            return true;
        }
    }
    $uri = isset($_SERVER['REQUEST_URI']) ? (string) $_SERVER['REQUEST_URI'] : '';
    return (bool) preg_match('#/jeux-geants-interactifs(/|\?|$)#', $uri);
}

function evenox_cta_jg_href_is_tables($href)
{
    $href = html_entity_decode((string) $href, ENT_QUOTES, 'UTF-8');
    return (bool) preg_match('#location-tables-chaises(/|\?|#|$)#i', $href);
}

/**
 * Réécrit uniquement <a class="evx-fin-1"> qui pointe encore vers tables/chaises.
 */
function evenox_cta_jg_rewrite_html($html)
{
    if (!is_string($html) || $html === '') {
        return $html;
    }

    return preg_replace_callback(
        '#<a\b([^>]*\bclass="[^"]*\bevx-fin-1\b[^"]*"[^>]*)>#i',
        static function ($m) {
            $attrs = $m[1];
            if (!preg_match('#\bhref=("|\')([^"\']*)\1#i', $attrs, $hm)) {
                return $m[0];
            }
            if (!evenox_cta_jg_href_is_tables($hm[2])) {
                return $m[0];
            }
            $attrs = preg_replace(
                '#(\bhref=)("|\')([^"\']*)\2#i',
                '$1$2' . EVENOX_CTA_JG_NEW . '$2',
                $attrs,
                1
            );
            return '<a' . $attrs . '>';
        },
        $html
    );
}

add_filter('the_content', static function ($content) {
    if (!evenox_cta_jg_is_target_page()) {
        return $content;
    }
    return evenox_cta_jg_rewrite_html($content);
}, 99);

add_filter('et_builder_render_layout', static function ($content) {
    if (!evenox_cta_jg_is_target_page()) {
        return $content;
    }
    return evenox_cta_jg_rewrite_html($content);
}, 99);

add_action('wp_footer', static function () {
    if (!evenox_cta_jg_is_target_page()) {
        return;
    }
    $new = function_exists('esc_js') ? esc_js(EVENOX_CTA_JG_NEW) : EVENOX_CTA_JG_NEW;
    echo '<script id="evenox-cta-jeux-geants">'
        . '(function(){var NEW="' . $new . '";'
        . 'function fix(){var list=document.querySelectorAll("a.evx-fin-1");'
        . 'for(var i=0;i<list.length;i++){var a=list[i];'
        . 'var href=a.getAttribute("href")||"";'
        . 'if(/location-tables-chaises/i.test(href)){a.setAttribute("href",NEW);}}}'
        . 'if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",fix);}'
        . 'else{fix();}})();'
        . '</script>';
}, 5);
