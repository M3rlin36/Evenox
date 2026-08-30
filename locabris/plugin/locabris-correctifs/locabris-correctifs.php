<?php
/**
 * Plugin Name: Locabris Correctifs
 * Description: Modules corrigés + Yoast vente + 301 slugs, sans changer le branding Divi.
 * Version: 1.1.3
 * Author: Evenox
 */

if (!defined('ABSPATH')) {
    exit;
}

define('LOCABRIS_FIX_DIR', plugin_dir_path(__FILE__));
define('LOCABRIS_FIX_URL', plugin_dir_url(__FILE__));
define('LOCABRIS_FIX_VER', '1.1.3');

function locabris_fix_page_slug()
{
    if (is_page('soumission-location-tempo')) {
        return 'soumission';
    }
    if (is_page('contact')) {
        return 'contact';
    }
    if (is_page('politique-confidentialite')) {
        return 'privacy';
    }
    return '';
}

function locabris_fix_module($name)
{
    $map = array(
        'soumission' => 'soumission.html',
        'contact'    => 'contact.html',
        'privacy'    => 'privacy.html',
    );
    if (!isset($map[$name])) {
        return '';
    }
    $path = LOCABRIS_FIX_DIR . 'modules/' . $map[$name];
    if (!is_readable($path)) {
        return '';
    }
    return file_get_contents($path);
}

function locabris_fix_clean_title($title)
{
    $title = preg_replace('/Abris d[\'’]auto hivernale/i', 'Abri hivernal', $title);
    $title = preg_replace('/Abris Hivernale/i', 'Abri hivernal', $title);
    $title = preg_replace('/Abri Hivernale/i', 'Abri hivernal', $title);
    $title = preg_replace('/\s+en location/i', '', $title);
    $title = preg_replace('/\s+-?\s*copie\s*$/i', '', $title);
    return trim($title);
}

function locabris_fix_dims($text)
{
    if (preg_match('/(\d+)\s*x\s*(\d+)/i', $text, $m)) {
        return array($m[1], $m[2]);
    }
    return array('', '');
}

function locabris_fix_product_html()
{
    if (!function_exists('wc_get_product')) {
        return '';
    }
    $product = wc_get_product(get_the_ID());
    if (!$product) {
        return '';
    }
    $img = get_the_post_thumbnail_url(get_the_ID(), 'large');
    if (!$img) {
        $img = 'https://locabris.ca/wp-content/uploads/2026/08/locabris-img-3214.jpg';
    }
    $title = locabris_fix_clean_title(get_the_title());
    $price = $product->get_price_html();
    $soum  = home_url('/soumission-location-tempo/');
    $cart  = do_shortcode('[add_to_cart id="' . (int) $product->get_id() . '" show_price="false" style=""]');

    return '<div class="loca-fiche" style="font-family:Raleway,sans-serif;color:#121212;max-width:1080px;margin:0 auto;padding:40px clamp(17px,2.3vw,31px) 72px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:40px;align-items:start">'
        . '<div><img src="' . esc_url($img) . '" alt="' . esc_attr($title) . '" style="width:100%;aspect-ratio:1.15;object-fit:cover;display:block"></div>'
        . '<div style="display:flex;flex-direction:column;gap:16px;min-width:0">'
        . '<div style="font-weight:700;font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#1088B5">Abri usagé vérifié</div>'
        . '<h1 style="font-weight:800;font-size:clamp(26px,3vw,34px);line-height:1.12;letter-spacing:-0.02em;margin:0">' . esc_html($title) . '</h1>'
        . '<div style="font-weight:800;font-size:28px;color:#0E2C4F">' . wp_kses_post($price) . '</div>'
        . '<p style="font-weight:600;font-size:16px;line-height:1.7;color:#5A6B75;margin:0">Usagé, condition 8 sur 10 : structure, toile, ancrages et quincaillerie vérifiés pièce par pièce.</p>'
        . '<div style="font-weight:800;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#0E2C4F;margin-top:8px">Ce qui est inclus</div>'
        . '<ul style="font-weight:600;font-size:15px;line-height:1.7;color:#5A6B75;padding-left:20px;margin:0">'
        . '<li>Livraison à la date convenue</li><li>Montage vérifié sur place</li><li>Ancrage adapté à votre surface</li><li>Format validé par un conseiller</li>'
        . '</ul>'
        . '<p style="font-weight:600;font-size:14px;line-height:1.6;color:#7A8B95;margin:0">Installation 200 $ (simple) / 300 $ (double) dans un rayon de 20 km de Sainte-Thérèse. Taxes en sus. Quantités limitées.</p>'
        . '<a href="' . esc_url($soum) . '" style="background:#1088B5;color:#FFFFFF;padding:18px 28px;border-radius:8px;font-weight:800;font-size:16px;text-align:center;text-decoration:none">Demander une soumission</a>'
        . '<div class="loca-woo-cart">' . $cart . '</div>'
        . '</div></div>';
}

add_filter('wp_get_attachment_image_attributes', function ($attr, $attachment = null, $size = null) {
    if (isset($attr['alt'])) {
        $attr['alt'] = locabris_fix_clean_title($attr['alt']);
    }
    return $attr;
}, 20, 3);

add_filter('the_title', function ($title, $post_id = 0) {
    if (is_admin()) {
        return $title;
    }
    $post = $post_id ? get_post($post_id) : null;
    if ($post && $post->post_type === 'product') {
        return locabris_fix_clean_title($title);
    }
    if ($post && $post->post_name === 'cart') {
        return 'Panier';
    }
    if ($post && $post->post_name === 'checkout') {
        return 'Commande';
    }
    if ($post && $post->post_name === 'payment-failed') {
        return 'Paiement échoué';
    }
    if ($post && $post->post_name === 'payment-confirmation') {
        return 'Paiement confirmé';
    }
    if ($post && in_array($post->post_name, array('418-2', 'accessoires'), true)) {
        return 'Accessoires pour abri hivernal';
    }
    return $title;
}, 20, 2);

add_filter('body_class', function ($classes) {
    if (locabris_fix_page_slug() || (function_exists('is_shop') && is_shop()) || (function_exists('is_product') && is_product())) {
        $classes[] = 'locabris-fix';
    }
    return $classes;
});

add_action('wp_head', function () {
    $css = '.locabris-fix #main-content .et_builder_inner_content{visibility:hidden}'
        . '.woocommerce-page .page-description .et_pb_code{display:none!important}'
        . '.locabris-fix.single-product .summary.entry-summary:empty{display:none}'
        . '.loca-fiche .loca-woo-cart .button{background:#0E2C4F;color:#fff;font-family:Raleway,sans-serif;font-weight:800;border:0;border-radius:8px;padding:14px 22px}';
    $footer = LOCABRIS_FIX_DIR . 'modules/shop-footer.css';
    if (is_readable($footer)) {
        $css .= file_get_contents($footer);
    }
    if (is_front_page()) {
        $css .= '.home div[style*="background: #0E2C4F"][style*="aspect-ratio: 1"],'
            . '.home div:has(> div[style*="background: #0E2C4F"][style*="aspect-ratio: 1"])'
            . '{display:none!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}';
    }
    echo '<style id="locabris-correctifs">' . $css . '</style>';
}, 20);

function locabris_fix_strip_home_navy_tile($html)
{
    if (!is_string($html) || $html === '') {
        return $html;
    }
    $mark = '18 à 20 pieds';
    $pos  = strpos($html, $mark);
    if ($pos === false) {
        $pos = strpos($html, '18 &agrave; 20 pieds');
    }
    if ($pos === false) {
        return $html;
    }
    $open  = '<div style="display: flex; flex-direction: column; gap: 14px; min-width: 0;">';
    $head  = substr($html, 0, $pos);
    $start = strrpos($head, $open);
    if ($start === false) {
        return $html;
    }
    $svg = strpos($html, '</svg>', $pos);
    if ($svg === false) {
        return $html;
    }
    $end = strpos($html, '</div></div>', $svg);
    if ($end === false) {
        return $html;
    }
    return substr($html, 0, $start) . substr($html, $end + 12);
}

function locabris_fix_maybe_strip_home_navy_tile($html)
{
    if (function_exists('is_front_page') && !is_front_page()) {
        return $html;
    }
    return locabris_fix_strip_home_navy_tile($html);
}

add_filter('the_content', 'locabris_fix_maybe_strip_home_navy_tile', 9999);
add_filter('et_builder_render_layout', 'locabris_fix_maybe_strip_home_navy_tile', 9999);
add_filter('litespeed_buffer_after', 'locabris_fix_maybe_strip_home_navy_tile', 20);

add_action('wp', function () {
    if (!is_front_page()) {
        return;
    }
    ob_start('locabris_fix_strip_home_navy_tile');
}, 1);

add_action('wp_footer', function () {
    if (!is_front_page()) {
        return;
    }
    echo '<script>
    document.addEventListener("DOMContentLoaded",function(){
      var nodes=document.querySelectorAll("div[style*=\\"background: #0E2C4F\\"][style*=\\"aspect-ratio: 1\\"]");
      for(var i=0;i<nodes.length;i++){
        var el=nodes[i];
        if(el.textContent.indexOf("18")===-1) continue;
        var wrap=el.parentElement;
        if(wrap){wrap.remove();}else{el.remove();}
      }
    });
    </script>';
}, 4);

add_action('wp_footer', function () {
    $slug = locabris_fix_page_slug();
    $html = '';
    if ($slug) {
        $html = locabris_fix_module($slug);
    } elseif (function_exists('is_product') && is_product()) {
        $html = locabris_fix_product_html();
    } elseif (function_exists('is_shop') && is_shop()) {
        $html = '<div style="max-width:1080px;margin:0 auto;padding:8px clamp(17px,2.3vw,31px) 0;font-family:Raleway,sans-serif;font-weight:600;font-size:16px;line-height:1.7;color:#5A6B75">Abris usagés vérifiés. Simple dès 250 $. Double dès 700 $. Installation 200 $ / 300 $ dans un rayon de 20 km.</div>';
    }
    if ($html === '') {
        return;
    }
    echo '<div id="locabris-correctifs-src" hidden>' . $html . '</div>';
    echo '<script>
    document.addEventListener("DOMContentLoaded",function(){
      var src=document.getElementById("locabris-correctifs-src");
      if(!src)return;
      var main=document.querySelector("#main-content .et_builder_inner_content")
        ||document.querySelector("#main-content .entry-content")
        ||document.querySelector("#main-content");
      if(!main){src.removeAttribute("hidden");return;}
      if(document.body.classList.contains("woocommerce-shop")){
        var desc=document.querySelector(".page-description");
        if(desc){desc.innerHTML=src.innerHTML;}
      }else{
        main.innerHTML=src.innerHTML;
      }
      main.style.visibility="visible";
      src.remove();
    });
    </script>';
    echo '<script>
    document.addEventListener("DOMContentLoaded",function(){
      var walk=function(n){
        if(n.nodeType===3){
          n.nodeValue=n.nodeValue
            .replace(/Accessoires Abri Hivernale/g,"Accessoires pour abri hivernal")
            .replace(/Abris Hivernale/g,"Abri hivernal")
            .replace(/Abri Hivernale/g,"Abri hivernal");
        }else if(n.nodeType===1 && !/^(SCRIPT|STYLE|TEXTAREA)$/.test(n.tagName)){
          for(var i=0;i<n.childNodes.length;i++) walk(n.childNodes[i]);
        }
      };
      walk(document.body);
    });
    </script>';
}, 5);

function locabris_fix_seo_title($title)
{
    if (is_front_page()) {
        return 'Le spécialiste de l\'abri d\'auto sur la Rive-Nord | Locabris';
    }
    if (is_page('soumission-location-tempo')) {
        return 'Soumission rapide — achat ou installation | Locabris';
    }
    if (is_page('contact')) {
        return 'Parlons de votre entrée | Locabris';
    }
    if (function_exists('is_shop') && is_shop()) {
        return 'Nos abris Tempo à vendre | Locabris';
    }
    if (is_page('location-abri-simple')) {
        return 'Abris simples usagés — 11 et 12 pieds | Locabris';
    }
    if (is_page('abri-double')) {
        return 'Abris d\'auto doubles à vendre — 16 à 20 pieds | Locabris';
    }
    if (is_page(array('418-2', 'accessoires'))) {
        return 'Accessoires pour abri hivernal | Locabris';
    }
    if (is_page('installation-abri-hivernale-laval-rive-nord')) {
        return 'On monte, on aligne, on ancre | Locabris';
    }
    if (is_page('location-abri-tempo-locabris')) {
        return 'Nous ne louons plus — on vend nos abris | Locabris';
    }
    if (is_page('vente-installation-abris-de-voiture-tempo-avec-livraison-locabris')) {
        return 'Un véhicule ou deux, protégés tout l\'hiver | Locabris';
    }
    if (is_page('faq')) {
        return 'Les questions qu\'on nous pose | Locabris';
    }
    if (is_page('regions-desservies')) {
        return 'Installation d\'abris d\'auto sur la Rive-Nord | Locabris';
    }
    if (function_exists('is_cart') && is_cart()) {
        return 'Panier | Locabris';
    }
    if (function_exists('is_checkout') && is_checkout()) {
        return 'Commande | Locabris';
    }
    if (is_page('payment-failed')) {
        return 'Paiement échoué | Locabris';
    }
    if (is_page('payment-confirmation')) {
        return 'Paiement confirmé | Locabris';
    }
    if (function_exists('is_product') && is_product()) {
        list($w, $l) = locabris_fix_dims(get_the_title() . ' ' . get_post_field('post_name', get_the_ID()));
        if ($w && $l) {
            return 'Abri hivernal ' . $w . ' x ' . $l . ' usagé à vendre | Locabris';
        }
        return locabris_fix_clean_title(get_the_title()) . ' | Locabris';
    }
    return $title;
}

function locabris_fix_seo_desc($desc)
{
    if (is_front_page()) {
        return 'Vente et installation d\'abris d\'auto usagés. Laval, Blainville, Mirabel et Rive-Nord. Réponse le jour même.';
    }
    if (is_page('soumission-location-tempo')) {
        return 'Demandez votre prix pour un abri usagé ou une installation. Un conseiller vous rappelle le jour même.';
    }
    if (is_page('contact')) {
        return 'Écrivez-nous pour un abri usagé ou une installation. Réponse le jour même. 438-439-0201.';
    }
    if (function_exists('is_shop') && is_shop()) {
        return 'Abris usagés vérifiés, dès 250 $. Simple, double longueur, double largeur.';
    }
    if (is_page('location-abri-simple')) {
        return 'Abris d\'auto simples usagés, 11 et 12 pieds. Vérifiés, prêts à poser. Dès 250 $.';
    }
    if (is_page('abri-double')) {
        return 'Abris doubles usagés, 16 à 20 pieds. Vente et installation, Rive-Nord.';
    }
    if (is_page(array('418-2', 'accessoires'))) {
        return 'Portes, ancrages et protecteurs de pavé pour votre abri.';
    }
    if (is_page('installation-abri-hivernale-laval-rive-nord')) {
        return 'Installation d\'abri d\'auto à Laval et sur la Rive-Nord. 200 $ simple, 300 $ double.';
    }
    if (is_page('location-abri-tempo-locabris')) {
        return 'Locabris ne loue plus. Abris usagés à vendre dès 250 $, installation sur la Rive-Nord.';
    }
    if (is_page('vente-installation-abris-de-voiture-tempo-avec-livraison-locabris')) {
        return 'Abris d\'auto usagés, un ou deux véhicules. Vente, livraison et installation, Rive-Nord.';
    }
    if (is_page('faq')) {
        return 'Prix, installation, formats et délais. Les réponses avant d\'écrire.';
    }
    if (is_page('regions-desservies')) {
        return 'Installation dans un rayon de 20 km de Sainte-Thérèse. Laval, Blainville, Mirabel, Rive-Nord.';
    }
    if (function_exists('is_product') && is_product()) {
        list($w, $l) = locabris_fix_dims(get_the_title() . ' ' . get_post_field('post_name', get_the_ID()));
        if ($w && $l) {
            return 'Abri d\'auto ' . $w . ' x ' . $l . ' usagé, condition 8/10. Vente et installation, Rive-Nord.';
        }
        return 'Abri d\'auto usagé, condition 8/10. Vente et installation, Rive-Nord.';
    }
    return $desc;
}

add_filter('wpseo_title', 'locabris_fix_seo_title', 20);
add_filter('pre_get_document_title', 'locabris_fix_seo_title', 20);
add_filter('wpseo_metadesc', 'locabris_fix_seo_desc', 20);

add_filter('woocommerce_checkout_redirect_empty_cart', '__return_false');

function locabris_fix_redirect_map()
{
    return array(
        'boutique' => '/shop/',
        'blog' => '/',
        'hello-world' => '/',
        '418-2' => '/accessoires/',
        'product/abris-hivernale-11-x-12-en-location' => '/product/abri-hivernal-11-x-12/',
        'product/abris-hivernale-11-x-8-en-location-copie' => '/product/abri-hivernal-11-x-8/',
        'product/abris-hivernale-20-x-16-en-location' => '/product/abri-hivernal-20-x-16/',
    );
}

add_action('template_redirect', function () {
    $path = isset($_SERVER['REQUEST_URI']) ? trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/') : '';
    $map  = locabris_fix_redirect_map();
    if (isset($map[$path])) {
        wp_redirect(home_url($map[$path]), 301);
        exit;
    }
}, 1);
