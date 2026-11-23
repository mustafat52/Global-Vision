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
(function(){
var RS='.sec h2,.grp,.ab h2,.st>div,.cg a,.bi,.sc,.rw,.card,.ac,.lg a,.pp>*,.th img,.chips,.tb,.nt';
function cu(b){var t=b.textContent,n=parseInt(t,10);if(!n||String(n)!==t)return;var s=null;function f(ts){if(!s)s=ts;var p=Math.min((ts-s)/1100,1);b.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f);else b.textContent=t}requestAnimationFrame(f)}
window.reveal=function(){
 if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
 var io=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;var e=x.target;e.classList.add('in');io.unobserve(e);var b=e.querySelector&&e.querySelector('.st b');if(e.matches('.st>div')){b=e.querySelector('b');if(b)cu(b)}setTimeout(function(){e.style.transitionDelay=''},1200)})},{threshold:.08,rootMargin:'0px 0px -6% 0px'});
 document.querySelectorAll(RS).forEach(function(e){if(e.dataset.rv||e.closest('.live'))return;e.dataset.rv=1;var i=Array.prototype.indexOf.call(e.parentNode.children,e);e.style.transitionDelay=Math.min(i,8)*60+'ms';e.classList.add('rv');io.observe(e)})};
window.reveal();
var h=document.querySelector('header');if(h)addEventListener('scroll',function(){h.classList.toggle('sh',scrollY>6)},{passive:true});
})();