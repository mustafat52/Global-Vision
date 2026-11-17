(function(){var G='';/* paste your Google Analytics ID here, e.g. G-XXXXXXXXXX */
if(G){var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id='+G;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',G)}
document.addEventListener('click',function(e){var a=e.target.closest('a[href]');if(!a||!window.gtag)return;var h=a.getAttribute('href'),t=h.indexOf('wa.me')>-1?'whatsapp_click':h.indexOf('tel:')==0?'call_click':h.indexOf('mailto:')==0?'email_click':'';if(t)gtag('event',t,{page:location.pathname+location.hash,link:h.slice(0,120)})});
var Q=[];try{Q=JSON.parse(localStorage.gvq||'[]')}catch(e){}
function cnt(){var c=document.getElementById('qc');if(c)c.textContent=Q.length}
function paint(b){var on=Q.indexOf(+b.dataset.q)>-1;b.textContent=on?'Remove from enquiry':'Add to enquiry';b.classList.toggle('ol',on)}
document.querySelectorAll('[data-static]').forEach(paint);cnt();
document.addEventListener('click',function(e){var b=e.target.closest('[data-static]');if(!b)return;var k=+b.dataset.q;Q=Q.indexOf(k)>-1?Q.filter(function(x){return x!==k}):Q.concat([k]);try{localStorage.gvq=JSON.stringify(Q)}catch(x){}paint(b);cnt()});
window.gs=function(f){var v=f.q.value.trim();if(v)location.href=(document.documentElement.getAttribute('data-root')||'')+'index.html#/search/'+encodeURIComponent(v);return false};
})();
