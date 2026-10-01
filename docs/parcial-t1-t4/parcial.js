/* Parcial · Temas 1 a 4: calificación de tablas de signos, verdadero o falso, problemas
   numéricos, preguntas cortas con pauta y simulacro cronometrado. Compartido por las 5 páginas
   de docs/parcial-t1-t4/ (antes iba repetido dentro de cada una). Necesita ../assets/guia.js. */
(function(){
'use strict';
var OPTS=['Aumenta','Se reduce','No cambia','No se puede saber'];
function $(s,r){return (r||document).querySelector(s);} function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));}
var MODE=document.body.getAttribute('data-mode')||'live';
var PAGINA=(location.pathname.split('/').pop()||'index.html').replace('.html','');
function guardar(q){
  if(!window.MM||!MM.progreso) return;
  var k=items().indexOf(q); if(k<0) return;
  var e=parseFloat(q.getAttribute('data-earned')), p=parseFloat(q.getAttribute('data-pts')||'1');
  MM.progreso.marcar('parcial', PAGINA, k, !isNaN(e) && e>=p);
}
/* ---- scoring ---- */
function items(){return $$('.q');}
function recompute(){
  var tot=0, got=0, done=0, n=0;
  items().forEach(function(q){var p=parseFloat(q.getAttribute('data-pts')||'0'); tot+=p; n++; var e=q.getAttribute('data-earned'); if(e!==null){got+=parseFloat(e); done++;}});
  var g=$('#sc-got'), t=$('#sc-tot'), b=$('#sc-bar'), d=$('#sc-done'), nn=$('#sc-n');
  if(g) g.textContent=(Math.round(got*10)/10); if(t) t.textContent=tot; if(d) d.textContent=done; if(nn) nn.textContent=n;
  if(b) b.style.width=(tot? (100*done/n):0)+'%';
  return {got:got,tot:tot,done:done,n:n};
}
window.__recompute=recompute;
/* ---- sign tables ---- */
function rowSelect(row,val){
  $$('.opt',row).forEach(function(b){b.setAttribute('aria-checked', b.getAttribute('data-v')===val?'true':'false');});
  row.setAttribute('data-sel',val);
}
function gradeRow(row, reveal){
  var key=row.getAttribute('data-key'), sel=row.getAttribute('data-sel');
  var pts=parseFloat(row.getAttribute('data-pts')||'1');
  var ok=(sel===key);
  row.classList.remove('ok','bad'); row.classList.add(ok?'ok':'bad');
  row.setAttribute('data-earned', ok?pts:0);
  guardar(row);
  var w=$('.st-why',row); if(w){ w.innerHTML='<span class="k">'+(ok?'Correcto':'Clave: '+key)+'</span> · '+ (row.getAttribute('data-why')||''); }
  $$('.opt',row).forEach(function(b){ if(!ok && b.getAttribute('data-v')===key) b.classList.add('is-key'); });
}
document.addEventListener('click',function(ev){
  var t=ev.target.closest('.opt');
  if(t){ var row=t.closest('.st-row'); if(!row||row.classList.contains('locked')) return;
    if(MODE==='live' && row.hasAttribute('data-earned')) return;
    rowSelect(row,t.getAttribute('data-v'));
    if(MODE==='live'){ gradeRow(row); }
    recomputeRows(); recompute(); return; }
  var v=ev.target.closest('.vf-btn');
  if(v){ var box=v.closest('.vf'); if(!box||box.classList.contains('locked')) return;
    if(MODE==='live' && box.hasAttribute('data-earned')) return;
    $$('.vf-btn',box).forEach(function(b){b.setAttribute('aria-checked', b===v?'true':'false');});
    box.setAttribute('data-sel', v.getAttribute('data-v'));
    if(MODE==='live'){ gradeVF(box); } recompute(); return; }
  var c=ev.target.closest('[data-act="check-num"]');
  if(c){ gradeNum(c.closest('.prob')); recompute(); return; }
  var r=ev.target.closest('[data-act="show-rubric"]');
  if(r){ var o=r.closest('.prob'); $('.rubric',o).classList.add('show'); r.style.display='none'; return; }
  var rb=ev.target.closest('.rubric input[type=checkbox]');
  if(rb){ gradeOpen(rb.closest('.prob')); recompute(); return; }
  var ro=ev.target.closest('.reveal-one');
  if(ro){ ro.closest('.keyrow').classList.add('shown'); return; }
});
function recomputeRows(){
  $$('.st').forEach(function(st){
    var rows=$$('.st-row',st), sel=0, ok=0, tot=0;
    rows.forEach(function(r){ tot++; if(r.getAttribute('data-sel')) sel++; if(r.classList.contains('ok')) ok++; });
    var c=$('.st-count',st); if(c) c.textContent=sel+'/'+tot;
    if(MODE==='live'){ var earned=0; rows.forEach(function(r){ if(r.hasAttribute('data-earned')) earned+=parseFloat(r.getAttribute('data-earned')); }); st.setAttribute('data-earned-sum',earned); }
  });
}
function gradeVF(box){
  var key=box.getAttribute('data-key'), sel=box.getAttribute('data-sel'); if(!sel) return;
  var pts=parseFloat(box.getAttribute('data-pts')||'1'); var ok=(sel===key);
  box.classList.remove('ok','bad'); box.classList.add(ok?'ok':'bad'); box.setAttribute('data-earned', ok?pts:0); guardar(box);
  var j=$('.vf-just',box); if(j){ j.innerHTML='<span class="v">'+(ok?'Correcto. ':'Incorrecto. ')+'Es '+(key==='V'?'VERDADERO':'FALSO')+'.</span> '+box.getAttribute('data-why'); }
}
function parseNum(s){ if(s==null) return NaN; s=String(s).trim().replace('%','').replace(/\s/g,'').replace(',','.'); return parseFloat(s); }
function gradeNum(prob){
  var got=0, tot=0, allsel=true;
  $$('.num-in',prob).forEach(function(inp){
    var ans=parseFloat(inp.getAttribute('data-ans')), tol=parseFloat(inp.getAttribute('data-tol')||'0.01'), p=parseFloat(inp.getAttribute('data-pts')||'1');
    tot+=p; var v=parseNum(inp.value); var ok=!isNaN(v) && Math.abs(v-ans)<=tol;
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
/* init */
$$('.num-in').forEach(function(i){ i.addEventListener('keydown',function(e){ if(e.key==='Enter' && MODE==='live'){ var b=i.closest('.prob').querySelector('[data-act="check-num"]'); if(b) b.click(); } }); });
/* sign table "q" wrappers: each row is a q (pts 1) */
/* hide-answers toggle (resolución) */
var tog=$('#toggle-answers'); if(tog){ tog.addEventListener('click',function(){ document.body.classList.toggle('hide-answers'); tog.textContent=document.body.classList.contains('hide-answers')?'Mostrar todas las respuestas':'Modo práctica: ocultar respuestas'; $$('.keyrow.shown').forEach(function(k){k.classList.remove('shown');}); $$('.vf.keyshow').forEach(function(k){}); }); }
$$('.vf[data-static]').forEach(function(b){b.classList.add('keyshow');});
/* ---- exam mode ---- */
var timerId=null, remaining=0, started=false, submitted=false;
function fmt(s){var m=Math.floor(s/60), r=s%60; return (m<10?'0':'')+m+':'+(r<10?'0':'')+r;}
function tick(){ remaining--; var tm=$('#timer'); if(tm){tm.textContent=fmt(Math.max(remaining,0)); if(remaining<=300) tm.classList.add('low');} if(remaining<=0){ submitExam(true);} }
function startExam(){
  if(started) return; started=true; var sel=$('#dur'); remaining=parseInt(sel.value,10)*60; sel.disabled=true;
  $('#exam-body').classList.remove('locked'); $('#exam-body').inert=false; $('#exam-cover').style.display='none';
  $('#timer').textContent=fmt(remaining); timerId=setInterval(tick,1000); $('#btn-start').disabled=true; $('#btn-submit').disabled=false;
  MM.irA($('#exam-body'));
}
function submitExam(auto){
  if(submitted) return; submitted=true; if(timerId) clearInterval(timerId);
  $$('#exam-body .st-row').forEach(function(r){ if(!r.getAttribute('data-sel')){ r.setAttribute('data-sel','sin respuesta'); } gradeRow(r); r.classList.add('locked'); });
  $$('#exam-body .vf').forEach(function(b){ if(!b.getAttribute('data-sel')){ b.setAttribute('data-sel','sin respuesta'); } gradeVF(b); b.classList.add('locked'); });
  $$('#exam-body .prob[data-kind="num"]').forEach(function(p){ gradeNum(p); var s=$('details.sol',p); if(s) s.open=true; });
  $$('#exam-body .prob[data-kind="open"]').forEach(function(p){ $('.rubric',p).classList.add('show'); var b=$('[data-act="show-rubric"]',p); if(b) b.style.display='none'; gradeOpen(p); });
  $('#btn-submit').disabled=true; showResult(auto);
}
function sectionScore(sel){ var got=0,tot=0; $$(sel).forEach(function(q){ tot+=parseFloat(q.getAttribute('data-pts')||'0'); var e=q.getAttribute('data-earned'); if(e!==null) got+=parseFloat(e); }); return [got,tot]; }
function showResult(auto){
  var box=$('#result'); if(!box) return; box.classList.add('show');
  var parts=[['Parte I · Tablas de signos','#exam-body .sec-I .q'],['Parte II · Verdadero o falso','#exam-body .sec-II .q'],['Parte III · Problemas numéricos','#exam-body .sec-III .q'],['Parte IV · Preguntas cortas (autocalificadas con pauta)','#exam-body .sec-IV .q']];
  var html='', G=0, T=0;
  parts.forEach(function(p){ var s=sectionScore(p[1]); G+=s[0]; T+=s[1]; html+='<div class="sect-score"><span>'+p[0]+'</span><span class="mono">'+(Math.round(s[0]*10)/10)+' / '+s[1]+'</span></div>'; });
  $('#res-sections').innerHTML=html; $('#res-total').textContent=Math.round(G*10)/10; $('#res-max').textContent=T;
  var pct=T?G/T:0; var msg= pct>=0.85?'Nivel muy sólido. Repasa solo los ítems que fallaste.':pct>=0.7?'Buen nivel. Revisa los ítems marcados y vuelve a intentar los que tengan "No se puede saber".':pct>=0.5?'Nivel intermedio. Repasa la tabla maestra de signos del Repaso integrador y las notas de cada ítem fallado.':'Todavía hay huecos: empieza por el Repaso integrador y la Resolución comentada, y repite el simulacro.';
  $('#res-msg').textContent=(auto?'Se acabó el tiempo. ':'')+msg; MM.irA(box); recompute();
}
var bs=$('#btn-start'); if(bs) bs.addEventListener('click',startExam);
var bsub=$('#btn-submit'); if(bsub){ bsub.disabled=true; bsub.addEventListener('click',function(){ if(window.confirm('¿Entregar el simulacro ahora?')) submitExam(false); }); }
var br=$('#btn-restart'); if(br) br.addEventListener('click',function(){ window.location.reload(); });
if(MODE==='exam'){ var eb=$('#exam-body'); if(eb){ eb.classList.add('locked'); eb.inert=true; } }
/* reset in live mode */
var rs=$('#btn-reset'); if(rs) rs.addEventListener('click',function(){ window.location.reload(); });
recompute();
if(window.MM&&MM.progreso&&items().length) MM.progreso.registrar('parcial', PAGINA, items().length);
})();
