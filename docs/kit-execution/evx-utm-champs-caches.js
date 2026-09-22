/* EVX-UTM-CAPTURE — à coller dans Divi > Options du thème > Intégrations > <head> (ou via la balise GTM "EVX - UTM vers cookie + champs caches").
   Rôle: lit utm_*, gclid, fbclid, ttclid dans l'URL → cookie first-party 90 j → les ajoute au FormData de ef-form (nom des champs: utm_source, utm_medium, utm_campaign, utm_content, utm_term, fbclid, page_origine, produit)
   + pousse l'événement evx_form_start au premier focus (pour Meta FormStart). Compatible avec EVX-GCLID-CAPTURE déjà en place. */
(function(){
  if(window.evxUtmCapture) return; window.evxUtmCapture=1;
  var CLES=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid','ttclid'];
  var DUREE=7776000, PRE='evx_';
  function cookie(n){var m=document.cookie.match(new RegExp('(?:^|; )'+n+'=([^;]*)'));return m?decodeURIComponent(m[1]):'';}
  function pose(n,v){document.cookie=n+'='+encodeURIComponent(v)+'; path=/; max-age='+DUREE+'; SameSite=Lax; Secure';}
  function propre(v){v=String(v||'').trim().slice(0,200);return /^[\w\-\.\s%|:]{1,200}$/.test(v)?v:'';}
  try{
    var p=new URLSearchParams(location.search), neuf=false;
    CLES.forEach(function(k){var v=propre(p.get(k)); if(v){ if(k==='utm_source') neuf=true; pose(PRE+k,v);} });
    if(neuf){ pose(PRE+'page_origine',location.pathname); }
    if(!cookie(PRE+'page_origine')) pose(PRE+'page_origine',location.pathname);
    /* trafic interne: ouvrir une fois https://evenox.ca/?evx_interne=1 sur chaque appareil de l'équipe */
    if(p.get('evx_interne')==='1') pose('evx_interne','1');
  }catch(e){}
  function produitDepuisPage(){
    var m=(cookie(PRE+'page_origine')||location.pathname).replace(/^\/+|\/+$/g,'');
    var map=[['chaise','chaises'],['table','tables'],['gonflable','jeux-gonflables'],['jeux','jeux'],['lettres','lettres-lumineuses'],['mur-decoratif','mur-fleurs'],['photobooth','photobooth'],['friandises','confiserie'],['party-bureau','party-bureau'],['conference','conference']];
    for(var i=0;i<map.length;i++){ if(m.indexOf(map[i][0])>-1) return map[i][1]; }
    return m||'accueil';
  }
  function valeurs(){
    var o={};
    CLES.forEach(function(k){ o[k]=cookie(PRE+k); });
    o.page_origine=cookie(PRE+'page_origine'); o.produit=produitDepuisPage();
    if(!o.utm_source){ var r=document.referrer||''; o.utm_source = r ? (r.indexOf(location.host)>-1?'':r.replace(/^https?:\/\//,'').split('/')[0]) : 'direct'; if(!o.utm_source) o.utm_source='interne'; }
    if(cookie('__evx_gclid')||cookie('_gcl_aw')){ o.utm_source=o.utm_source==='direct'?'google':o.utm_source; o.utm_medium=o.utm_medium||'cpc'; }
    return o;
  }
  /* 1) champs cachés dans tous les <form> (couvre les futurs formulaires) */
  function depose(){
    var v=valeurs(); var forms=document.getElementsByTagName('form');
    for(var f=0;f<forms.length;f++){ for(var k in v){ if(!v[k]) continue; var el=forms[f].querySelector('input[name="'+k+'"]'); if(!el){ el=document.createElement('input'); el.type='hidden'; el.name=k; forms[f].appendChild(el);} if(!el.value) el.value=v[k]; } }
  }
  /* 2) enrichit le FormData envoyé par ef-form (action evx_soumission) → les valeurs arrivent dans le courriel/Sheet */
  var _fetch=window.fetch;
  window.fetch=function(url,opt){
    try{ if(opt&&opt.body&&typeof FormData!=='undefined'&&opt.body instanceof FormData&&String(opt.body.get('action')||'')==='evx_soumission'){ var v=valeurs(); for(var k in v){ if(v[k]&&!opt.body.get(k)) opt.body.append(k,v[k]); } var det=opt.body.get('details')||''; opt.body.set('details',det+'\n\n[source: '+(v.utm_source||'')+' | campagne: '+(v.utm_campaign||'')+' | produit: '+v.produit+' | page: '+v.page_origine+']'); } }catch(e){}
    return _fetch.apply(this,arguments);
  };
  /* 3) premier focus = FormStart */
  var start=false;
  document.addEventListener('focusin',function(e){ if(start) return; var f=e.target&&e.target.closest?e.target.closest('form'):null; if(!f) return; start=true; window.dataLayer=window.dataLayer||[]; window.dataLayer.push({event:'evx_form_start',form_id:f.id||''}); },true);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',depose); else depose();
})();
