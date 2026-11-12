/* ===== SETTINGS: paste your Formspree form address here (see README). Leave empty to use email instead. ===== */
window.TDL={formEndpoint:""};
;
(function(){var D=[{"t": "Garden Villa Living Room", "g": [{"s": "images/living-1.jpg", "a": "Villa living room with floor-to-ceiling windows, linen drapery and a glass coffee table"}]}, {"t": "Neoclassical Master Bedroom", "g": [{"s": "images/bedroom-1.jpg", "a": "Master bedroom with panelled walls, a wingback bed and balcony doors"}, {"s": "images/bedroom-2.jpg", "a": "Upholstered headboard, bedside table and brass lamp"}, {"s": "images/bedroom-3.jpg", "a": "Balcony doors, layered drapery and a chaise"}, {"s": "images/bedroom-4.jpg", "a": "Black chandelier in a recessed ceiling"}, {"s": "images/bedroom-5.jpg", "a": "Bed, upholstered bench and patterned rug"}]}, {"t": "Villa Majlis", "g": [{"s": "images/majlis-1.jpg", "a": "Majlis with grey sofas, layered drapery and a crystal chandelier"}, {"s": "images/majlis-2.jpg", "a": "Floor lamp and sofa beside gold drapery"}, {"s": "images/majlis-3.jpg", "a": "Sofa seating area with marble floor inlay"}, {"s": "images/majlis-4.jpg", "a": "Crystal chandelier above the curtains"}, {"s": "images/majlis-5.jpg", "a": "Oval coffee table with candle cloches"}]}, {"t": "Timber Feature Wall Living Room", "g": [{"s": "images/wood-1.jpg", "a": "Living room with a timber feature wall and lit shelving"}, {"s": "images/wood-2.jpg", "a": "Armchairs, bench and coffee table"}]}, {"t": "Serene Master Bedroom", "g": [{"s": "images/project-p01.jpg", "a": "Master bedroom with a cream bench, panelled headboard wall and sheer curtains"}]}, {"t": "Arched Window Living Room", "g": [{"s": "images/project-p02.jpg", "a": "Living room with arched garden windows, a cream sectional and a sculpted rug"}]}, {"t": "Upholstered Wall Bedroom", "g": [{"s": "images/project-p03.jpg", "a": "Bedroom with a channel-tufted headboard and upholstered wall panels"}]}, {"t": "Curved Sofa Majlis", "g": [{"s": "images/project-p04.jpg", "a": "Majlis with curved sofas, blush armchairs and a double-ring chandelier"}]}, {"t": "Traditional Contemporary Sitting Area", "g": [{"s": "images/project-p05.jpg", "a": "Lounge with rattan armchairs, a mustard sofa and lantern pendants"}]}, {"t": "Master Suite with Sitting Area", "g": [{"s": "images/project-p06.jpg", "a": "Master suite with a sofa at the foot of the bed and full-height wardrobes"}]}, {"t": "Stone Bathroom", "g": [{"s": "images/project-p07.jpg", "a": "Bathroom with stone-effect tiles, a backlit mirror and a marble vanity"}]}, {"t": "Formal Living Room", "g": [{"s": "images/project-p08.jpg", "a": "Formal living room with panelled walls, two chandeliers and square coffee tables"}]}, {"t": "Skyline Apartment", "g": [{"s": "images/project-p09.jpg", "a": "Apartment living and dining area with floor-to-ceiling windows and city views"}]}, {"t": "Arched Bedroom Suite", "g": [{"s": "images/project-p10.jpg", "a": "Bedroom with tall wardrobes, a wide upholstered bed and an arched doorway"}]}, {"t": "Marble Feature Wall Lounge", "g": [{"s": "images/project-p11.jpg", "a": "Lounge with a marble media wall, slatted panelling and two white sofas"}]}, {"t": "Sectional Living and Dining", "g": [{"s": "images/project-p12.jpg", "a": "Living and dining space with a large sectional, tall drapery and black chandeliers"}]}];
var sec=document.getElementById("projects"),pk=sec.querySelector(".pk"),cs=[].slice.call(pk.children),cnt=sec.querySelector(".pcnt");
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth",cur=0,tk;
function center(i,b){var c=cs[i];pk.scrollTo({left:c.offsetLeft-(pk.clientWidth-c.offsetWidth)/2,behavior:b||rm})}
function mark(){var mid=pk.scrollLeft+pk.clientWidth/2,best=0,bd=1e9;cs.forEach(function(c,i){var d=Math.abs(c.offsetLeft+c.offsetWidth/2-mid);if(d<bd){bd=d;best=i}});
if(best!==cur||!cs[best].classList.contains("on")){cur=best;cs.forEach(function(c,i){c.classList.toggle("on",i===best)});cnt.textContent=(best+1)+" / "+cs.length}}
pk.addEventListener("scroll",function(){cancelAnimationFrame(tk);tk=requestAnimationFrame(mark)},{passive:true});
function go(d){var n=cur+d;if(n<0)n=cs.length-1;if(n>=cs.length)n=0;center(n)}
sec.querySelector(".pp").onclick=function(){go(-1)};sec.querySelector(".pnx").onclick=function(){go(1)};
window.addEventListener("resize",function(){center(cur,"auto")});
center(0,"auto");
var lb=sec.querySelector(".lb"),im=lb.querySelector(".lbi"),th=lb.querySelector(".lbth"),pi=0,gi=0,op=null,x0=0;
function show(n){var g=D[pi].g;gi=(n+g.length)%g.length;im.src=g[gi].s;im.alt=g[gi].a;lb.querySelector(".lbc").textContent=g.length>1?(gi+1)+" / "+g.length:"";
[].forEach.call(th.children,function(b,k){b.classList.toggle("on",k===gi);if(k===gi)b.setAttribute("aria-current","true");else b.removeAttribute("aria-current")})}
function open(i,el){pi=i;op=el;var g=D[i].g;lb.querySelector(".lbt").textContent=D[i].t;
th.innerHTML="";g.forEach(function(p,k){var b=document.createElement("button");b.type="button";b.className="tb";b.setAttribute("aria-label","Photo "+(k+1));var t=document.createElement("img");t.src=p.s;t.alt="";b.appendChild(t);b.onclick=function(){show(k)};th.appendChild(b)});
lb.classList.toggle("one",g.length<2);show(0);if(lb.showModal)lb.showModal();else lb.setAttribute("open","");document.documentElement.style.overflow="hidden"}
function close(){if(lb.close)lb.close();else lb.removeAttribute("open")}
lb.addEventListener("close",function(){document.documentElement.style.overflow="";if(op)op.focus()});
cs.forEach(function(c,i){c.addEventListener("click",function(){open(i,c)})});
lb.querySelector(".lbx").onclick=close;lb.querySelector(".lp").onclick=function(){show(gi-1)};lb.querySelector(".ln").onclick=function(){show(gi+1)};
lb.querySelector(".lbm").addEventListener("click",function(e){if(e.target===this)close()});
lb.addEventListener("keydown",function(e){if(D[pi].g.length<2)return;if(e.key==="ArrowLeft"){show(gi-1)}else if(e.key==="ArrowRight"){show(gi+1)}});
lb.addEventListener("touchstart",function(e){x0=e.touches[0].clientX},{passive:true});
lb.addEventListener("touchend",function(e){var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>50&&D[pi].g.length>1){show(dx<0?gi+1:gi-1)}});
})();
;
(function(){var v=document.getElementById("hv");v.src="video/hero.mp4";if(matchMedia("(prefers-reduced-motion:reduce)").matches){v.removeAttribute("autoplay");v.pause()}})();
;
(function(){var r=document.querySelector('.sv'),t=r.querySelector('.st');
function step(){var c=t.querySelector('.sc');return c.offsetWidth+parseFloat(getComputedStyle(t).columnGap||0)}
function mv(d){var end=t.scrollLeft+t.clientWidth>=t.scrollWidth-4,st=t.scrollLeft<=4;var rm=matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth';
if(d>0&&end)t.scrollTo({left:0,behavior:rm});else if(d<0&&st)t.scrollTo({left:t.scrollWidth,behavior:rm});else t.scrollBy({left:d*step(),behavior:rm})}
r.querySelector('.sp').onclick=function(){mv(-1)};r.querySelector('.sn').onclick=function(){mv(1)};
t.querySelectorAll('.sc').forEach(function(a){a.addEventListener('click',function(){var m=document.querySelector('#enq textarea');if(m&&(!m.value||m.dataset.auto)){m.value='I’m interested in: '+a.dataset.s+'.';m.dataset.auto='1'}})})})();
;
(function(){
var seed=[{q:"They truly understood what we envisioned.",t:"Working with The Design Loft was such a wonderful experience. The team took the time to understand our preferences and transformed our ideas into a beautiful space that feels uniquely ours. Every detail was thoughtfully considered.",n:"",r:5}];
var live=[],tr=document.getElementById('rvt'),dots=document.getElementById('rvd'),P=document.querySelector('.rvp'),N=document.querySelector('.rvn');
function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
function stars(n){var s=el('div','rst');s.setAttribute('role','img');s.setAttribute('aria-label',n+' out of 5 stars');for(var k=1;k<=5;k++){s.appendChild(el('span',k<=n?'on':'off','\u2605'))}return s}
function all(){return seed.concat(live)}
function cur(){var w=tr.clientWidth||1;return Math.round(tr.scrollLeft/w)}
function go(i){var n=all().length;i=Math.max(0,Math.min(n-1,i));tr.scrollTo({left:i*tr.clientWidth,behavior:'smooth'})}
function sync(){var n=all().length,i=cur();P.disabled=i<=0;N.disabled=i>=n-1;var d=dots.children;for(var k=0;k<d.length;k++)d[k].className=k===i?'on':''}
function render(){
 var keep=cur(),items=all();tr.textContent='';dots.textContent='';
 items.forEach(function(it){var f=el('figure','rs');f.appendChild(stars(it.r));if(it.q)f.appendChild(el('p','ql','\u201C'+it.q+'\u201D'));f.appendChild(el('p','qt',it.t));if(it.n)f.appendChild(el('p','qn','\u2014 '+it.n));tr.appendChild(f);dots.appendChild(el('span'))});
 var multi=items.length>1;P.hidden=N.hidden=!multi;dots.hidden=!multi;
 tr.style.scrollBehavior='auto';tr.scrollLeft=Math.min(keep,items.length-1)*tr.clientWidth;tr.style.scrollBehavior='';sync()}
P.addEventListener('click',function(){go(cur()-1)});N.addEventListener('click',function(){go(cur()+1)});
tr.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'){e.preventDefault();go(cur()-1)}if(e.key==='ArrowRight'){e.preventDefault();go(cur()+1)}});
var tm;tr.addEventListener('scroll',function(){clearTimeout(tm);tm=setTimeout(sync,60)});
window.addEventListener('resize',function(){tr.style.scrollBehavior='auto';tr.scrollLeft=cur()*tr.clientWidth;tr.style.scrollBehavior=''});
render();
try{fetch('reviews.json',{cache:'no-cache'}).then(function(r){return r.ok?r.json():[]}).then(function(a){
 if(!Array.isArray(a))return;live=[];a.forEach(function(x){var txt=typeof x.text==='string'?x.text.trim().slice(0,1000):'';var r=Math.round(Number(x.rating));if(!txt||!(r>=1&&r<=5))return;live.push({t:txt,n:typeof x.name==='string'?x.name.trim().slice(0,60):'',r:r})});render()}).catch(function(){})}catch(e){}
})();
;
function tdlSend(subject,fields,mailBody,ok,fail){
 var ep=(window.TDL&&TDL.formEndpoint)||'';
 if(!ep){location.href='mailto:hello@thedesignloft.ae?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(mailBody);return}
 fields._subject=subject;
 fetch(ep,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(fields)})
  .then(function(r){if(!r.ok)throw 0;ok()}).catch(fail)}
(function(){
var f=document.getElementById('fbf'),note=document.getElementById('fbn'),btn=f.querySelector('.fbb'),busy=false;
if(window.TDL&&TDL.formEndpoint)note.textContent='Thank you for sharing. Approved feedback will appear under \u201CThe Client Perspective\u201D.';
f.addEventListener('submit',function(ev){
 ev.preventDefault();if(busy)return;
 var c=f.querySelector('input[name=r]:checked'),name=f.n.value.trim().slice(0,60),msg=f.m.value.trim().slice(0,1000);
 if(!name||!msg||!c)return;
 busy=true;btn.disabled=true;
 tdlSend('Client feedback',{name:name,rating:c.value+' / 5',message:msg},'Name: '+name+'\nRating: '+c.value+' / 5\n\n'+msg,
  function(){f.reset();note.textContent='Thank you! Your feedback has been received and will appear once approved.';busy=false;btn.disabled=false},
  function(){note.textContent='We could not send your feedback just now. Please try again, or email hello@thedesignloft.ae.';busy=false;btn.disabled=false});
 if(!(window.TDL&&TDL.formEndpoint)){busy=false;btn.disabled=false}
});
})();
;
(function(){var f=document.getElementById('enq');var s=f.querySelector('[type=submit],button');
f.addEventListener('submit',function(ev){ev.preventDefault();var b='Name: '+f.n.value+'\nEmail: '+f.e.value+'\nProperty: '+f.t.value+'\n\n'+f.m.value;
 tdlSend('Consultation enquiry',{name:f.n.value,email:f.e.value,property:f.t.value,message:f.m.value},b,
  function(){f.reset();var n=document.createElement('p');n.setAttribute('role','status');n.textContent='Thank you! We have received your message and will be in touch shortly.';f.appendChild(n)},
  function(){var n=document.createElement('p');n.setAttribute('role','status');n.textContent='We could not send your message. Please email hello@thedesignloft.ae.';f.appendChild(n)})})})();
;
(function(){var WA="971529720933",MSG="Hello The Design Loft, I would like to discuss my project.";
if(!WA)return;var u="https://wa.me/"+WA.replace(/\D/g,"")+"?text="+encodeURIComponent(MSG);
var ic='<svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16.04 3C9.4 3 4 8.4 4 15.03c0 2.12.55 4.18 1.6 6L4 29l8.17-1.57a12 12 0 0 0 3.87.64C22.67 28.07 28 22.67 28 16.04 28 9.4 22.67 3 16.04 3zm0 22.1c-1.2 0-2.37-.32-3.4-.93l-.5-.3-4.85.93.97-4.72-.32-.5a9.95 9.95 0 0 1-1.52-5.3c0-5.5 4.48-9.98 10-9.98 5.5 0 9.98 4.48 9.98 9.98 0 5.5-4.48 9.82-10.36 9.82zm5.47-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>';
var f=document.createElement("a");f.className="wa-fab";f.href=u;f.target="_blank";f.rel="noopener";f.setAttribute("aria-label","Chat with The Design Loft on WhatsApp");f.innerHTML=ic+'<span>WhatsApp</span>';document.body.appendChild(f);
var s=document.getElementById("waSlot");if(s){var b=document.createElement("a");b.className="wa-btn";b.href=u;b.target="_blank";b.rel="noopener";b.innerHTML=ic+'<span>Chat with us on WhatsApp</span>';s.appendChild(b)}})();
;
(function(){
if(matchMedia('(prefers-reduced-motion:reduce)').matches||!('IntersectionObserver' in window))return;
var sel='.story h2,.story .st-text p,.stats>div,.projects h2,.services h2,#process h2,#process li,#process .step,#process .pcta,.cp h2,.cp .rv,.fb h2,.fb .fs,.fbc form,.contact h2,.contact>p,.contact form,.talk h2,.tk>div,footer p';
var els=[].slice.call(document.querySelectorAll(sel));
els.forEach(function(e){e.classList.add('fx')});
var io=new IntersectionObserver(function(es){var n=0;es.forEach(function(x){if(x.isIntersecting){x.target.style.setProperty('--d',(Math.min(n++,5)*0.12)+'s');x.target.classList.add('fx-in');io.unobserve(x.target)}})},{threshold:.15,rootMargin:'0px 0px -6% 0px'});
els.forEach(function(e){io.observe(e)});
})();
