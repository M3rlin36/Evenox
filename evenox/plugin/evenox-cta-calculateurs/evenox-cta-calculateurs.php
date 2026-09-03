<?php
/**
 * Plugin Name: Evenox CTA Calculateurs
 * Description: Sur chaque catalogue « Monte ton forfait », le bouton pointe vers le calculateur de cette catégorie — plus vers les tables et chaises par défaut.
 * Version: 1.1.0
 * Author: Evenox
 */

if (!defined('ABSPATH')) {
    exit;
}

define('EVENOX_CTA_CALC_VER', '1.1.0');
define('EVENOX_CTA_CALC_DIR', plugin_dir_path(__FILE__));

/**
 * @return array<string,string> slug => chemin (absolu site ou ancre)
 */
function evenox_cta_calc_map()
{
    static $map = null;
    if ($map !== null) {
        return $map;
    }
    $path = EVENOX_CTA_CALC_DIR . 'mapping.json';
    if (!is_readable($path)) {
        $map = array();
        return $map;
    }
    $decoded = json_decode((string) file_get_contents($path), true);
    $map = is_array($decoded) ? $decoded : array();
    return $map;
}

/**
 * Repli si le slug n’est pas dans mapping.json (pages ville, nouveaux catalogues).
 * Plus spécifique d’abord. Ne renvoie tables/chaises que pour le mobilier / vaisselle.
 *
 * @return string chemin relatif ou ancre, sinon ''
 */
function evenox_cta_calc_infer($slug)
{
    $slug = strtolower((string) $slug);
    if ($slug === '') {
        return '';
    }

    $rules = array(
        'gonflable'            => '/location-jeux-gonflables/#configurateur',
        'jeux-exterieur'       => '/location-jeux-exterieurs/#assistant-jeux',
        'jeux-techno'          => '/location-arcade/#configurateur',
        'arcade'               => '/location-arcade/#configurateur',
        'friandise'            => '/machines-gourmandises/#configurateur',
        'confiserie'           => '/machines-gourmandises/#configurateur',
        'gourmandise'          => '/machines-gourmandises/#configurateur',
        'lettres-neon'         => '/lettres-lumineuses/#configurateur',
        'lettres-lumin'        => '/lettres-lumineuses/#configurateur',
        'chiffres-lumin'       => '/lettres-lumineuses/#configurateur',
        'ballon'               => '/decoration/#calculateur',
        'mur-decoratif'        => '/location-decoration-evenementielle/#configurateur',
        'decoration'           => '/location-decoration-evenementielle/#configurateur',
        'equipement-technique' => '/configurateur/',
        'jeux'                 => '/location-jeux-geants/#configurateur',
        'jeu'                  => '/location-jeux-geants/#configurateur',
        'table'                => '/location-tables-chaises/#calculateur',
        'chaise'               => '/location-tables-chaises/#calculateur',
        'ustensile'            => '/location-tables-chaises/#calculateur',
        'vaiselle'             => '/location-tables-chaises/#calculateur',
        'equipement'           => '/location-tables-chaises/#calculateur',
    );

    foreach ($rules as $needle => $target) {
        if (strpos($slug, $needle) !== false) {
            return $target;
        }
    }
    return '';
}

function evenox_cta_calc_slug()
{
    if (function_exists('is_page') && is_page()) {
        $slug = get_post_field('post_name', get_queried_object_id());
        if (is_string($slug) && $slug !== '') {
            return $slug;
        }
    }
    $uri = isset($_SERVER['REQUEST_URI']) ? (string) $_SERVER['REQUEST_URI'] : '';
    $path = parse_url($uri, PHP_URL_PATH);
    if (!is_string($path) || $path === '') {
        return '';
    }
    $path = trim($path, '/');
    if ($path === '') {
        return '';
    }
    $parts = explode('/', $path);
    return (string) end($parts);
}

function evenox_cta_calc_target($slug = null)
{
    if ($slug === null) {
        $slug = evenox_cta_calc_slug();
    }
    $map = evenox_cta_calc_map();
    $target = '';
    if ($slug !== '' && isset($map[$slug])) {
        $target = $map[$slug];
    } elseif ($slug !== '') {
        $target = evenox_cta_calc_infer($slug);
    }
    if ($target === '') {
        return '';
    }
    if ($target[0] === '#') {
        return $target;
    }
    if (preg_match('#^https?://#i', $target)) {
        return $target;
    }
    $hash = '';
    if (strpos($target, '#') !== false) {
        list($target, $frag) = explode('#', $target, 2);
        $hash = '#' . $frag;
    }
    $path = '/' . ltrim($target, '/');
    if (function_exists('home_url')) {
        return rtrim(home_url($path), '/') . ($path === '/' ? '/' : '') . $hash;
    }
    return $path . $hash;
}

function evenox_cta_calc_rewrite_html($html, $target)
{
    if ($html === '' || $target === '') {
        return $html;
    }
    $safe = htmlspecialchars($target, ENT_QUOTES, 'UTF-8');
    $rewritten = preg_replace(
        '/(<a\b[^>]*\bclass="[^"]*\bevx-fin-1\b[^"]*"[^>]*\bhref=")[^"]*(")/i',
        '$1' . $safe . '$2',
        $html
    );
    if (!is_string($rewritten)) {
        return $html;
    }
    return $rewritten;
}

function evenox_cta_calc_filter_content($content)
{
    $target = evenox_cta_calc_target();
    if ($target === '') {
        return $content;
    }
    return evenox_cta_calc_rewrite_html($content, $target);
}

add_filter('the_content', 'evenox_cta_calc_filter_content', 20);
add_filter('et_builder_render_layout', 'evenox_cta_calc_filter_content', 20);

add_action('wp_footer', function () {
    $target = evenox_cta_calc_target();
    if ($target === '') {
        return;
    }
    $js_target = function_exists('wp_json_encode') ? wp_json_encode($target) : json_encode($target);
    echo '<script id="evenox-cta-calculateurs">';
    echo '(function(){';
    echo 'var t=' . $js_target . ';';
    echo 'if(!t)return;';
    echo 'function fix(){var links=document.querySelectorAll("a.evx-fin-1");';
    echo 'for(var i=0;i<links.length;i++){links[i].setAttribute("href",t);}}';
    echo 'if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",fix);}';
    echo 'else{fix();}';
    echo '})();';
    echo '</script>' . "\n";
}, 99);
