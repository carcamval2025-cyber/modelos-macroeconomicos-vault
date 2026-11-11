/* Parcial 2 · Temas 4 a 7: calificación de tablas de signos, verdadero/falso/incierto,
   opción múltiple, unir, problemas numéricos, preguntas cortas con pauta y simulacro
   cronometrado. Compartido por las páginas de docs/parcial-t4-t7/. Necesita ../assets/guia.js.
   Basado en docs/parcial-t1-t4/parcial.js; el progreso se guarda bajo la clave 'parcial2'. */
(function(){
'use strict';
var TEMA='parcial2';
function $(s,r){return (r||document).querySelector(s);} function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));}
var MODE=document.body.getAttribute('data-mode')||'live';
var PAGINA=(location.pathname.split('/').pop()||'index.html').replace('.html','');
var NOMBRE_VF={V:'VERDADERO',F:'FALSO',I:'INCIERTO'};
function items(){return $$('.q');}
function guardar(q){
  if(!window.MM||!MM.progreso) return;
  var k=items().indexOf(q); if(k<0) return;
  var e=parseFloat(q.getAttribute('data-earned')), p=parseFloat(q.getAttribute('data-pts')||'1');
  MM.progreso.marcar(TEMA, PAGINA, k, !isNaN(e) && e>=p-1e-9);
}
function redondear(x){return Math.round(x*10)/10;}
function recompute(){
  var tot=0, got=0, done=0, n=0;
  items().forEach(function(q){var p=parseFloat(q.getAttribute('data-pts')||'0'); tot+=p; n++; var e=q.getAttribute('data-earned'); if(e!==null){got+=parseFloat(e); done++;}});
  var g=$('#sc-got'), t=$('#sc-tot'), b=$('#sc-bar'), d=$('#sc-done'), nn=$('#sc-n');
  if(g) g.textContent=redondear(got); if(t) t.textContent=redondear(tot); if(d) d.textContent=done; if(nn) nn.textContent=n;
  if(b) b.style.width=(n? (100*done/n):0)+'%';
  return {got:got,tot:tot,done:done,n:n};
}
/* ---- tablas de signos ---- */
function gradeRow(row){
  var key=row.getAttribute('data-key'), sel=row.getAttribute('data-sel');
  var pts=parseFloat(row.getAttribute('data-pts')||'1'), ok=(sel===key);
  row.classList.remove('ok','bad'); row.classList.add(ok?'ok':'bad');
  row.setAttribute('data-earned', ok?pts:0); guardar(row);
  var w=$('.st-why',row); if(w){ w.innerHTML='<span class="k">'+(ok?'Correcto':'Clave: '+key)+'</span> · '+(row.getAttribute('data-why')||''); }
  $$('.opt',row).forEach(function(b){ if(!ok && b.getAttribute('data-v')===key) b.classList.add('is-key'); });
}
function recomputeRows(){
  $$('.st').forEach(function(st){
    var rows=$$('.st-row',st), sel=0;
    rows.forEach(function(r){ if(r.getAttribute('data-sel')) sel++; });
    var c=$('.st-count',st); if(c) c.textContent=sel+'/'+rows.length;
  });
}
/* ---- verdadero, falso o incierto ---- */
function gradeVF(box){
  var key=box.getAttribute('data-key'), sel=box.getAttribute('data-sel'); if(!sel) return;
  var pts=parseFloat(box.getAttribute('data-pts')||'1'), ok=(sel===key);
  box.classList.remove('ok','bad'); box.classList.add(ok?'ok':'bad'); box.setAttribute('data-earned', ok?pts:0); guardar(box);
  var j=$('.vf-just',box); if(j){ j.innerHTML='<span class="v">'+(ok?'Correcto. ':'Incorrecto. ')+'Es '+(NOMBRE_VF[key]||key)+'.</span> '+(box.getAttribute('data-why')||''); }
}
/* ---- opción múltiple ---- */
function gradeMC(box){
  var key=box.getAttribute('data-key'), sel=box.getAttribute('data-sel'); if(!sel) return;
  var pts=parseFloat(box.getAttribute('data-pts')||'1'), ok=(sel===key);
  box.classList.remove('ok','bad'); box.classList.add(ok?'ok':'bad'); box.setAttribute('data-earned', ok?pts:0); guardar(box);
  $$('.mc-opt',box).forEach(function(b){ if(b.getAttribute('data-v')===key) b.classList.add('is-key'); });
  var j=$('.mc-just',box); if(j){ j.innerHTML='<span class="v">'+(ok?'Correcto. ':'Incorrecto: la respuesta es '+key+'. ')+'</span>'+(box.getAttribute('data-why')||''); }
}
/* ---- unir ---- */
function gradeUnir(box){
  var filas=$$('.unir-row',box), bien=0;
  filas.forEach(function(f){
    var s=$('select',f), key=f.getAttribute('data-key'), ok=(s.value===key);
    f.classList.remove('ok','bad'); f.classList.add(ok?'ok':'bad'); if(ok) bien++;
    var fb=$('.unir-fb',f); if(fb) fb.innerHTML='<b>'+(ok?'Correcto':'Clave: '+key)+'.</b> '+(f.getAttribute('data-why')||'');
  });
  var pts=parseFloat(box.getAttribute('data-pts')||filas.length);
  var got=filas.length? pts*bien/filas.length : 0;
  box.classList.remove('ok','bad'); box.classList.add(bien===filas.length?'ok':'bad');
  box.setAttribute('data-earned', Math.round(got*100)/100); guardar(box);
  var r=$('.unir-res',box); if(r) r.textContent=bien+' de '+filas.length+' parejas correctas.';
}
/* ---- problemas numéricos y preguntas cortas ---- */
function parseNum(s){ if(s==null) return NaN; s=String(s).trim().replace('%','').replace(/\s/g,'').replace(',','.'); return parseFloat(s); }
function gradeNum(prob){
  var got=0;
  $$('.num-in',prob).forEach(function(inp){
    var ans=parseFloat(inp.getAttribute('data-ans')), tol=parseFloat(inp.getAttribute('data-tol')||'0.01'), p=parseFloat(inp.getAttribute('data-pts')||'1');
    var v=parseNum(inp.value), ok=!isNaN(v) && Math.abs(v-ans)<=tol;
    inp.classList.remove('ok','bad'); inp.classList.add(ok?'ok':'bad'); if(ok) got+=p;
    var fb=inp.closest('.sub').querySelector('.fb'); if(fb){ fb.className='fb show '+(ok?'okt':'bdt'); fb.textContent= ok? 'Correcto.' : ('Respuesta esperada: '+inp.getAttribute('data-show')); }
  });
  prob.setAttribute('data-earned',got); guardar(prob);
  var sol=$('details.sol',prob); if(sol && MODE==='live') sol.open=true;
}
function gradeOpen(prob){
  var got=0; $$('.rubric input[type=checkbox]',prob).forEach(function(c){ if(c.checked) got+=parseFloat(c.getAttribute('data-pts')); });
  prob.setAttribute('data-earned',got); guardar(prob);
}
function elegir(grupo,btn,clase){
  $$(clase,grupo).forEach(function(b){b.setAttribute('aria-checked', b===btn?'true':'false');});
  grupo.setAttribute('data-sel', btn.getAttribute('data-v'));
}
document.addEventListener('click',function(ev){
  var t=ev.target.closest('.opt');
  if(t){ var row=t.closest('.st-row'); if(!row||row.classList.contains('locked')) return;
    if(MODE==='live' && row.hasAttribute('data-earned')) return;
    elegir(row,t,'.opt'); if(MODE==='live') gradeRow(row);
    recomputeRows(); recompute(); return; }
  var v=ev.target.closest('.vf-btn');
  if(v){ var box=v.closest('.vf'); if(!box||box.classList.contains('locked')) return;
    if(MODE==='live' && box.hasAttribute('data-earned')) return;
    elegir(box,v,'.vf-btn'); if(MODE==='live') gradeVF(box); recompute(); return; }
  var m=ev.target.closest('.mc-opt');
  if(m){ var mb=m.closest('.mc'); if(!mb||mb.classList.contains('locked')) return;
    if(MODE==='live' && mb.hasAttribute('data-earned')) return;
    elegir(mb,m,'.mc-opt'); if(MODE==='live') gradeMC(mb); recompute(); return; }
  var u=ev.target.closest('[data-act="check-unir"]');
  if(u){ gradeUnir(u.closest('.unir')); recompute(); return; }
  var c=ev.target.closest('[data-act="check-num"]');
  if(c){ gradeNum(c.closest('.prob')); recompute(); return; }
  var r=ev.target.closest('[data-act="show-rubric"]');
  if(r){ var o=r.closest('.prob'); $('.rubric',o).classList.add('show'); r.style.display='none'; return; }
  var rb=ev.target.closest('.rubric input[type=checkbox]');
  if(rb){ gradeOpen(rb.closest('.prob')); recompute(); if(submitted) pintarResultado(false); return; }
  var ro=ev.target.closest('.reveal-one');
  if(ro){ ro.closest('.keyrow').classList.add('shown'); return; }
});
/* flechas dentro de cada grupo de opciones (radiogroup) */
document.addEventListener('keydown',function(e){
  if(['ArrowRight','ArrowDown','ArrowLeft','ArrowUp'].indexOf(e.key)<0) return;
  var b=e.target.closest('.opt,.vf-btn,.mc-opt'); if(!b) return;
  var hermanos=$$('[role="radio"]',b.parentNode), k=hermanos.indexOf(b); if(k<0) return;
  e.preventDefault(); var paso=(e.key==='ArrowRight'||e.key==='ArrowDown')?1:-1;
  hermanos[(k+paso+hermanos.length)%hermanos.length].focus();
});
$$('.num-in').forEach(function(i){ i.addEventListener('keydown',function(e){ if(e.key==='Enter' && MODE==='live'){ var b=i.closest('.prob').querySelector('[data-act="check-num"]'); if(b) b.click(); } }); });
/* resolución comentada: modo práctica */
var tog=$('#toggle-answers'); if(tog){ tog.addEventListener('click',function(){ document.body.classList.toggle('hide-answers'); var oculto=document.body.classList.contains('hide-answers'); tog.textContent=oculto?'Mostrar todas las respuestas':'Modo práctica: ocultar respuestas'; tog.setAttribute('aria-pressed', oculto?'true':'false'); $$('.keyrow.shown').forEach(function(k){k.classList.remove('shown');}); }); }
/* ---- simulacro ---- */
var timerId=null, remaining=0, started=false, submitted=false;
function fmt(s){var m=Math.floor(s/60), r=s%60; return (m<10?'0':'')+m+':'+(r<10?'0':'')+r;}
function tick(){ remaining--; var tm=$('#timer'); if(tm){tm.textContent=fmt(Math.max(remaining,0)); if(remaining<=300) tm.classList.add('low');} if(remaining<=0){ submitExam(true);} }
function startExam(){
  if(started) return; started=true; var sel=$('#dur'); remaining=parseInt(sel.value,10)*60; sel.disabled=true;
  var body=$('#exam-body'); body.classList.remove('locked'); body.inert=false; $('#exam-cover').hidden=true;
  $('#timer').textContent=fmt(remaining); timerId=setInterval(tick,1000); $('#btn-start').disabled=true; $('#btn-submit').disabled=false;
  MM.irA(body);
}
function submitExam(auto){
  if(submitted) return; submitted=true; if(timerId) clearInterval(timerId);
  $$('#exam-body .st-row').forEach(function(r){ if(!r.getAttribute('data-sel')) r.setAttribute('data-sel','sin respuesta'); gradeRow(r); r.classList.add('locked'); });
  $$('#exam-body .vf').forEach(function(b){ if(!b.getAttribute('data-sel')) b.setAttribute('data-sel','sin respuesta'); gradeVF(b); b.classList.add('locked'); });
  $$('#exam-body .mc').forEach(function(b){ if(!b.getAttribute('data-sel')) b.setAttribute('data-sel','sin respuesta'); gradeMC(b); b.classList.add('locked'); });
  $$('#exam-body .unir').forEach(function(b){ gradeUnir(b); $$('select',b).forEach(function(s){s.disabled=true;}); var bt=$('[data-act="check-unir"]',b); if(bt) bt.hidden=true; });
  $$('#exam-body .prob[data-kind="num"]').forEach(function(p){ gradeNum(p); var s=$('details.sol',p); if(s) s.open=true; });
  $$('#exam-body .prob[data-kind="open"]').forEach(function(p){ $('.rubric',p).classList.add('show'); var b=$('[data-act="show-rubric"]',p); if(b) b.style.display='none'; gradeOpen(p); });
  $('#btn-submit').disabled=true; showResult(auto);
}
function showResult(auto){
  var box=$('#result'); if(!box) return; box.classList.add('show');
  pintarResultado(auto); MM.irA(box);
}
function pintarResultado(auto){
  var html='', G=0, T=0;
  $$('#exam-body [data-parte]').forEach(function(sec){
    var got=0, tot=0;
    $$('.q',sec).forEach(function(q){ tot+=parseFloat(q.getAttribute('data-pts')||'0'); var e=q.getAttribute('data-earned'); if(e!==null) got+=parseFloat(e); });
    G+=got; T+=tot;
    html+='<div class="sect-score"><span>'+sec.getAttribute('data-parte')+'</span><span class="mono">'+redondear(got)+' / '+redondear(tot)+'</span></div>';
  });
  $('#res-sections').innerHTML=html; $('#res-total').textContent=redondear(G); $('#res-max').textContent=redondear(T);
  var pct=T?G/T:0;
  var msg= pct>=0.85?'Nivel muy sólido. Repasa solo los ítems que fallaste.':pct>=0.7?'Buen nivel. Revisa los ítems marcados y vuelve a la tabla maestra del Repaso integrador.':pct>=0.5?'Nivel intermedio. Repasa el Repaso integrador por Tema y las notas de cada ítem fallado.':'Todavía hay huecos: empieza por el Repaso integrador y la Resolución comentada, y repite el simulacro.';
  $('#res-msg').textContent=(auto?'Se acabó el tiempo. ':'')+msg; recompute();
}
var bs=$('#btn-start'); if(bs) bs.addEventListener('click',startExam);
var bsub=$('#btn-submit'); if(bsub){ bsub.disabled=true; bsub.addEventListener('click',function(){ if(window.confirm('¿Entregar el simulacro ahora?')) submitExam(false); }); }
var br=$('#btn-restart'); if(br) br.addEventListener('click',function(){ window.location.reload(); });
if(MODE==='exam'){ var eb=$('#exam-body'); if(eb){ eb.classList.add('locked'); eb.inert=true; } }
var rs=$('#btn-reset'); if(rs) rs.addEventListener('click',function(){ if(window.MM&&MM.progreso) MM.progreso.limpiar(TEMA,PAGINA); window.location.reload(); });
recomputeRows(); recompute();
if(window.MM&&MM.progreso&&items().length) MM.progreso.registrar(TEMA, PAGINA, items().length);
})();
