<?php
/**
 * Plugin Name: Evenox Formulaire
 * Description: N'injecte le calculateur que dans #evx-plan. Ne remplace jamais le hero, les photos ni le contenu Divi.
 * Version: 2.0.0
 * Author: Evenox
 */

if (!defined('ABSPATH')) {
    exit;
}

define('EVENOX_FORM_DIR', plugin_dir_path(__FILE__));
define('EVENOX_FORM_VER', '2.0.0');

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

/*
 * 1.0.1 / 1.1.0 cachaient tout le builder Divi puis y collaient le wizard :
 * hero, kit, photos et FAQ disparaissaient.
 * 1.1.1 n'injecte que dans un hôte #evx-plan déjà présent. Sans cet
 * hôte, la page Divi d'origine (déjà en une question à la fois via
 * KIT WIZARD) reste intacte.
 */
add_action('wp_head', function () {
    if (!evenox_form_is_tables_page()) {
        return;
    }
    echo '<style id="evenox-formulaire">'
        . '#evx-plan[data-evenox-host]{min-height:0}'
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
      function evenoxFindSlot(){
        var hosts=document.querySelectorAll("#evx-plan");
        for(var i=0;i<hosts.length;i++){
          var el=hosts[i];
          if(el.getAttribute("data-evenox-host")==="1")return el;
          if(el.querySelector(".evx-step"))continue;
          if((el.textContent||"").trim()===""&&el.children.length===0)return el;
        }
        return null;
      }
      function evenoxInject(){
        var src=document.getElementById("evenox-form-src");
        if(!src||src.getAttribute("data-done"))return;
        src.setAttribute("data-done","1");
        var slot=evenoxFindSlot();
        if(!slot){
          src.remove();
          return;
        }
        var html=src.value;
        var box=document.createElement("div");
        box.innerHTML=html;
        slot.innerHTML="";
        while(box.firstChild)slot.appendChild(box.firstChild);
        evenoxRunScripts(slot);
        src.remove();
      }
      if(document.readyState==="loading"){
        document.addEventListener("DOMContentLoaded",evenoxInject);
      }else{
        evenoxInject();
      }
    })();
    </script>';
}, 5);
