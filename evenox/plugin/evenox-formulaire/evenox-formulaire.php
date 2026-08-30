<?php
/**
 * Plugin Name: Evenox Formulaire
 * Description: Calculateur tables et chaises, une question à la fois. Remplace le contenu de /location-tables-chaises/ (hero et ancien kit compris).
 * Version: 1.2.0
 * Author: Evenox
 */

if (!defined('ABSPATH')) {
    exit;
}

define('EVENOX_FORM_DIR', plugin_dir_path(__FILE__));
define('EVENOX_FORM_VER', '1.2.0');

function evenox_form_is_tables_page()
{
    if (is_page('location-tables-chaises')) {
        return true;
    }
    if (is_page(6569)) {
        return true;
    }
    $uri = isset($_SERVER['REQUEST_URI']) ? (string) $_SERVER['REQUEST_URI'] : '';
    return (bool) preg_match('#/location-tables-chaises(/|\?|$)#', $uri);
}

function evenox_form_module()
{
    $path = EVENOX_FORM_DIR . 'modules/tables-chaises.html';
    if (!is_readable($path)) {
        return '';
    }
    return file_get_contents($path);
}

add_filter('body_class', function ($classes) {
    if (evenox_form_is_tables_page()) {
        $classes[] = 'evenox-form-tables';
    }
    return $classes;
});

add_action('wp_head', function () {
    if (!evenox_form_is_tables_page()) {
        return;
    }
    echo '<style id="evenox-formulaire">'
        . '.evenox-form-tables #main-content .et_builder_inner_content{visibility:hidden}'
        . '.evenox-form-tables .tc-page,.evenox-form-tables .tc-hero,.evenox-form-tables .tc-calc,.evenox-form-tables #tcFloatingCta,.evenox-form-tables .floating-cta{visibility:hidden}'
        . '</style>';
}, 20);

add_action('wp_footer', function () {
    if (!evenox_form_is_tables_page()) {
        return;
    }
    $html = evenox_form_module();
    if ($html === '') {
        return;
    }
    echo '<textarea id="evenox-form-src" hidden>' . htmlspecialchars($html, ENT_QUOTES, 'UTF-8') . '</textarea>';
    echo '<script>
    (function(){
      function evenoxRunScripts(box){
        var list=box.querySelectorAll("script");
        for(var i=0;i<list.length;i++){
          var old=list[i];
          var s=document.createElement("script");
          s.textContent=old.textContent;
          old.parentNode.replaceChild(s,old);
        }
      }
      function evenoxInject(){
        var src=document.getElementById("evenox-form-src");
        if(!src||src.getAttribute("data-done"))return;
        src.setAttribute("data-done","1");
        var html=src.value;
        var main=document.querySelector("#main-content .et_builder_inner_content")
          ||document.querySelector("#main-content .entry-content")
          ||document.querySelector("#main-content");
        if(!main){
          var box=document.createElement("div");
          box.innerHTML=html;
          src.parentNode.insertBefore(box,src);
          evenoxRunScripts(box);
          src.remove();
          return;
        }
        main.innerHTML=html;
        main.style.visibility="visible";
        evenoxRunScripts(main);
        src.remove();
        var cta=document.getElementById("tcFloatingCta");
        if(cta)cta.remove();
        document.querySelectorAll(".floating-cta").forEach(function(n){n.remove();});
      }
      if(document.readyState==="loading"){
        document.addEventListener("DOMContentLoaded",evenoxInject);
      }else{
        evenoxInject();
      }
    })();
    </script>';
}, 5);
