<?php
/**
 * Plugin Name: Evenox Formulaire
 * Description: Calculateur tables et chaises, une question à la fois. Remplace le formulaire de /location-tables-chaises/ sans changer le header Divi.
 * Version: 1.0.0
 * Author: Evenox
 */

if (!defined('ABSPATH')) {
    exit;
}

define('EVENOX_FORM_DIR', plugin_dir_path(__FILE__));
define('EVENOX_FORM_VER', '1.0.0');

function evenox_form_is_tables_page()
{
    return is_page('location-tables-chaises');
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
    echo '<style id="evenox-formulaire">.evenox-form-tables .tc-calc{visibility:hidden}</style>';
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
    document.addEventListener("DOMContentLoaded",function(){
      var src=document.getElementById("evenox-form-src");
      if(!src)return;
      var html=src.value;
      var box=document.createElement("div");
      box.innerHTML=html;
      var old=document.querySelector("#calculateur")
        ||document.querySelector(".tc-calc")
        ||document.querySelector("#main-content .et_builder_inner_content")
        ||document.querySelector("#main-content");
      if(!old){
        src.parentNode.insertBefore(box,src);
        evenoxRunScripts(box);
        src.remove();
        return;
      }
      old.innerHTML="";
      old.appendChild(box);
      old.style.visibility="visible";
      evenoxRunScripts(box);
      src.remove();
    });
    function evenoxRunScripts(box){
      var list=box.querySelectorAll("script");
      for(var i=0;i<list.length;i++){
        var old=list[i];
        var s=document.createElement("script");
        s.textContent=old.textContent;
        old.parentNode.replaceChild(s,old);
      }
    }
    </script>';
}, 5);
