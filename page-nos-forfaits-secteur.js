(function(){
  var CITIES=[["Sainte-Thérèse","a"],["Blainville","a"],["Boisbriand","a"],["Rosemère","a"],["Lorraine","a"],["Bois-des-Filion","a"],["Mirabel (Saint-Janvier)","b"],["Saint-Eustache","b"],["Deux-Montagnes","b"],["Laval","b"],["Sainte-Anne-des-Plaines","b"],["Terrebonne","c"],["Ahuntsic","c"],["Montréal (nord)","c"],["Montréal-Nord","c"],["Saint-Joseph-du-Lac","c"],["Mascouche","c"],["Saint-Jérôme","c"],["Pointe-Calumet","c"],["Saint-Laurent","c"],["Mirabel (centre)","c"],["Oka","d"],["Saint-Lin–Laurentides","d"],["Repentigny","d"],["Prévost","d"],["Saint-Colomban","d"],["Montréal (centre-ville)","d"],["Montréal (est)","x"],["Saint-Sauveur","x"],["Brossard","x"],["L\'Assomption","x"],["Longueuil","x"],["Lachute","x"],["Sainte-Adèle","x"]];
  var ZONES={a:{km:"0-10 km",mob:"<b>&minus;100 $</b> sur les forfaits mobilier",bonus:true},
             b:{km:"10-20 km",mob:"<b>prix affich&eacute;</b> sur les forfaits mobilier (aucun ajustement)",bonus:true},
             c:{km:"20-30 km",mob:"<b>+100 $</b> sur les forfaits mobilier",bonus:false},
             d:{km:"30-40 km",mob:"<b>+200 $</b> sur les forfaits mobilier",bonus:false}};
  var input=document.getElementById('cityInput'),list=document.getElementById('cityList'),
      res=document.getElementById('sectResult'),bonus=document.getElementById('sectBonus'),cta=document.getElementById('sectCta');
  if(!input)return;
  var currentCity='',currentZone='';
  function norm(s){return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
  input.addEventListener('input',function(){
    var q=norm(input.value.trim());
    if(q.length<2){list.classList.remove('show');return;}
    var hits=CITIES.filter(function(c){return norm(c[0]).indexOf(q)!==-1;}).slice(0,8);
    if(!hits.length){list.innerHTML='<div class="city-item"><span>Ville non list&eacute;e &mdash; choisissez la plus proche ou envoyez votre demande</span></div>';list.classList.add('show');return;}
    list.innerHTML=hits.map(function(c){return '<div class="city-item" data-city="'+c[0]+'" data-zone="'+c[1]+'"><span>'+c[0]+'</span><small>'+ZONES[c[1]].km+'</small></div>';}).join('');
    list.classList.add('show');
  });
  list.addEventListener('click',function(e){
    var it=e.target.closest('.city-item');if(!it||!it.getAttribute('data-city'))return;
    currentCity=it.getAttribute('data-city');currentZone=it.getAttribute('data-zone');
    input.value=currentCity;list.classList.remove('show');
    var z=ZONES[currentZone];
    res.innerHTML='Votre secteur : <b>'+currentCity+'</b> ('+z.km+' de notre entrep&ocirc;t de Sainte-Th&eacute;r&egrave;se)<br>Mobilier : '+z.mob+'<br>Autres forfaits : <b>livraison incluse</b> d&egrave;s 500 $ de location.';
    res.classList.add('show');
    if(z.bonus){bonus.innerHTML='<b>Bonne nouvelle :</b> votre secteur est dans notre zone prioritaire &mdash; '+(currentZone==='a'?'vous &eacute;conomisez 100 $ sur le mobilier et ':'')+'votre livraison est incluse. Profitez-en pendant que votre date est libre.';bonus.classList.add('show');}
    else{bonus.classList.remove('show');}
    cta.classList.add('show');
    var sv=document.getElementById('sVille');if(sv)sv.value=currentCity;
  });
  document.addEventListener('click',function(e){if(!e.target.closest('.city-wrap'))list.classList.remove('show');});

  var overlay=document.getElementById('soumOverlay');
  document.getElementById('openSoum').addEventListener('click',function(){overlay.classList.add('open');document.body.style.overflow='hidden';});
  function closeM(){overlay.classList.remove('open');document.body.style.overflow='';}
  document.getElementById('soumClose').addEventListener('click',closeM);
  overlay.addEventListener('click',function(e){if(e.target===overlay)closeM();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeM();});

  document.getElementById('soumSend').addEventListener('click',function(){
    var nom=document.getElementById('sNom').value.trim(),
        email=document.getElementById('sEmail').value.trim(),
        tel=document.getElementById('sTel').value.trim(),
        date=document.getElementById('sDate').value,
        ville=document.getElementById('sVille').value.trim(),
        forfait=document.getElementById('sForfait').value,
        msg=document.getElementById('sMsg').value.trim(),
        err=document.getElementById('soumErr');
    if(!nom||(!email&&!tel)){err.style.display='block';return;}
    err.style.display='none';
    var data={nom:nom,email:email,tel:tel,date:date,adresse:ville,
      message:'[Soumission page forfaits] Forfait: '+(forfait||'non precise')+' | Secteur: '+(currentZone?ZONES[currentZone].km:'?')+(msg?' | '+msg:''),
      source:'page-forfaits-secteur',timestamp:new Date().toISOString()};
    try{window.dataLayer=window.dataLayer||[];if(!window.__evxAw){var evs=document.createElement('script');evs.src='https://www.googletagmanager.com/gtag/js?id=AW-16529262834';document.head.appendChild(evs);window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};window.gtag('js',new Date());window.gtag('config','AW-16529262834');window.__evxAw=1;}window.gtag('event','conversion',{send_to:'AW-16529262834/Nc-uCJjXz84cEPKR4sk9'});window.dataLayer.push({event:'conversion_lead',lead_source:(typeof SOURCE!=='undefined'?SOURCE:'page-forfaits')});}catch(evxErr){}try{fetch('https://n8n.srv1431153.hstgr.cloud/webhook/evenox-contact',{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(data).toString()});}catch(e){}
    document.getElementById('soumFormWrap').style.display='none';
    document.getElementById('soumOk').classList.add('show');
  });
})();