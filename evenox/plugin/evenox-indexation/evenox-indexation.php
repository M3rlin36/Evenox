<?php
/**
 * Plugin Name: Evenox Indexation
 * Description: Correctifs SEO / indexation Google : shop, blog→blogue, 404 connus, soft 404 /3561-2/, doubles balises title Divi.
 * Version: 1.0.0
 * Author: Évenox
 * Requires at least: 6.0
 */

if (!defined('ABSPATH')) {
    exit;
}

define('EVENOX_INDEXATION_VER', '1.0.0');

/**
 * Redirections 301 des URLs mortes ou doublons d'index.
 */
function evenox_indexation_redirects()
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }

    $request = isset($_SERVER['REQUEST_URI']) ? (string) $_SERVER['REQUEST_URI'] : '';
    $path = strtolower(rtrim((string) parse_url($request, PHP_URL_PATH), '/'));

    $map = array(
        '/blog' => '/blogue/',
        '/2476-2' => '/politique-annulation/',
        '/politique-dannulation' => '/politique-annulation/',
        '/politique-d-annulation' => '/politique-annulation/',
        '/cart' => '/shop/',
        '/checkout' => '/shop/',
        '/my-account' => '/shop/',
        '/wishlist' => '/shop/',
        '/page' => '/',
    );

    if (!isset($map[$path])) {
        return;
    }

    $target = home_url($map[$path]);
    wp_safe_redirect($target, 301);
    exit;
}
add_action('template_redirect', 'evenox_indexation_redirects', 1);

/**
 * Soft 404 /3561-2/ : noindex + follow.
 *
 * @param string $robots
 * @return string
 */
function evenox_indexation_robots($robots)
{
    if (evenox_indexation_is_orphan_3561()) {
        return 'noindex, follow';
    }
    return $robots;
}
add_filter('wpseo_robots', 'evenox_indexation_robots');
add_filter('wp_robots', static function ($robots) {
    if (evenox_indexation_is_orphan_3561()) {
        $robots['noindex'] = true;
        unset($robots['index']);
    }
    return $robots;
});

/**
 * Retirer /3561-2/ du sitemap Yoast.
 *
 * @param bool    $exclude
 * @param string  $url
 * @return bool
 */
function evenox_indexation_exclude_sitemap($exclude, $url)
{
    if (is_string($url) && strpos($url, '/3561-2') !== false) {
        return true;
    }
    return $exclude;
}
add_filter('wpseo_sitemap_exclude_post', static function ($exclude, $post) {
    if ($post instanceof WP_Post && (int) $post->ID === evenox_indexation_orphan_id()) {
        return true;
    }
    // Fallback slug.
    if ($post instanceof WP_Post && $post->post_name === '3561-2') {
        return true;
    }
    return $exclude;
}, 10, 2);

add_filter('wpseo_exclude_from_sitemap_by_post_ids', static function ($ids) {
    if (!is_array($ids)) {
        $ids = array();
    }
    $id = evenox_indexation_orphan_id();
    if ($id > 0) {
        $ids[] = $id;
    }
    return array_values(array_unique(array_map('intval', $ids)));
});

/**
 * @return int
 */
function evenox_indexation_orphan_id()
{
    static $id = null;
    if ($id !== null) {
        return $id;
    }
    $page = get_page_by_path('3561-2');
    $id = ($page instanceof WP_Post) ? (int) $page->ID : 0;
    return $id;
}

/**
 * @return bool
 */
function evenox_indexation_is_orphan_3561()
{
    if (is_page('3561-2')) {
        return true;
    }
    $id = evenox_indexation_orphan_id();
    return $id > 0 && is_page($id);
}

/**
 * SEO de la page boutique WooCommerce.
 *
 * @param string $title
 * @return string
 */
function evenox_indexation_shop_title($title)
{
    if (!evenox_indexation_is_shop()) {
        return $title;
    }
    return 'Location de matériel événementiel | Catalogue Évenox';
}
add_filter('wpseo_title', 'evenox_indexation_shop_title', 20);
add_filter('pre_get_document_title', static function ($title) {
    if (evenox_indexation_is_shop()) {
        return 'Location de matériel événementiel | Catalogue Évenox';
    }
    return $title;
}, 20);

/**
 * @param string $desc
 * @return string
 */
function evenox_indexation_shop_desc($desc)
{
    if (!evenox_indexation_is_shop()) {
        return $desc;
    }
    return 'Parcourez le catalogue Évenox : tables, chaises, jeux, décoration, photobooth et gourmandises. Location clé en main sur la Rive-Nord, à Laval et Montréal.';
}
add_filter('wpseo_metadesc', 'evenox_indexation_shop_desc', 20);

/**
 * @param string $canonical
 * @return string
 */
function evenox_indexation_shop_canonical($canonical)
{
    if (!evenox_indexation_is_shop()) {
        return $canonical;
    }
    return home_url('/shop/');
}
add_filter('wpseo_canonical', 'evenox_indexation_shop_canonical', 20);

/**
 * @return bool
 */
function evenox_indexation_is_shop()
{
    return function_exists('is_shop') && is_shop();
}

/**
 * H1 vide sur /shop/ : injecte un titre accessible si le thème n'en fournit pas.
 */
function evenox_indexation_shop_h1_fix()
{
    if (!evenox_indexation_is_shop()) {
        return;
    }
    echo '<h1 class="evenox-indexation-shop-h1" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;">Catalogue de location Évenox</h1>';
}
add_action('woocommerce_before_main_content', 'evenox_indexation_shop_h1_fix', 5);

/**
 * Supprime les <title> injectés dans le <body> par Divi (garde celui du <head>).
 *
 * @param string $html
 * @return string
 */
function evenox_indexation_strip_body_titles($html)
{
    if (!is_string($html) || $html === '' || stripos($html, '<body') === false) {
        return $html;
    }

    $parts = preg_split('/(<body\b[^>]*>)/i', $html, 2, PREG_SPLIT_DELIM_CAPTURE);
    if (!is_array($parts) || count($parts) < 3) {
        return $html;
    }

    $head = $parts[0] . $parts[1];
    $body = $parts[2];
    $body = preg_replace('/<title\b[^>]*>[\s\S]*?<\/title>/i', '', $body, -1, $count);
    if ($count) {
        return $head . $body;
    }
    return $html;
}

/**
 * Buffer de sortie pour retirer les title du body.
 */
function evenox_indexation_buffer_start()
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }
    ob_start('evenox_indexation_strip_body_titles');
}
add_action('template_redirect', 'evenox_indexation_buffer_start', 0);

function evenox_indexation_buffer_end()
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return;
    }
    if (ob_get_level() > 0) {
        ob_end_flush();
    }
}
add_action('shutdown', 'evenox_indexation_buffer_end', 0);
