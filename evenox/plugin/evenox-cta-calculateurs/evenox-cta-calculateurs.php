<?php
/**
 * Plugin Name: Evenox CTA Calculateurs
 * Description: Sur chaque catalogue « Monte ton forfait », le bouton pointe vers le calculateur de cette catégorie — plus vers les tables et chaises par défaut.
 * Version: 1.0.0
 * Author: Evenox
 */

if (!defined('ABSPATH')) {
    exit;
}

define('EVENOX_CTA_CALC_VER', '1.0.0');
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
    if ($slug === '' || !isset($map[$slug])) {
        return '';
    }
    $target = $map[$slug];
    if ($target === '' || $target[0] === '#') {
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
        $html,
        1
    );
    if (!is_string($rewritten)) {
        return $html;
    }
    return $rewritten;
}

add_filter('the_content', function ($content) {
    $target = evenox_cta_calc_target();
    if ($target === '') {
        return $content;
    }
    return evenox_cta_calc_rewrite_html($content, $target);
}, 20);

add_action('wp_footer', function () {
    $target = evenox_cta_calc_target();
    if ($target === '') {
        return;
    }
    $js_target = wp_json_encode($target);
    echo '<script id="evenox-cta-calculateurs">';
    echo '(function(){';
    echo 'var t=' . $js_target . ';';
    echo 'if(!t)return;';
    echo 'var links=document.querySelectorAll("a.evx-fin-1");';
    echo 'for(var i=0;i<links.length;i++){links[i].setAttribute("href",t);}';
    echo '})();';
    echo '</script>' . "\n";
}, 99);
