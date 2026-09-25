/* =====================================================================
   Guía de Modelos Macroeconómicos · comportamiento compartido
   - tema claro/oscuro          [data-btn-tema]
   - índice como diagrama       nav[data-nav-eq]
   - variables vivas            .v[data-var] dentro de ecuaciones
   - diagrama del modelo        MM.plano(svg, {capas:[...]})
   - predice antes de ver       [data-predice] + MM.ESCENARIOS
   - progreso guardado          MM.progreso (localStorage, con respaldo en memoria)
   Todo lo que se muestra como cifra se calcula aquí o en el script de cada página.
   ===================================================================== */
(function () {
  'use strict';
  var MM = (window.MM = window.MM || {});
  var NS = 'http://www.w3.org/2000/svg';
  var reducido = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function cada(sel, fn, raiz) { [].forEach.call((raiz || document).querySelectorAll(sel), fn); }

  /* ---------- Fechas de evaluación (02 Curso/Cronograma.md) ---------- */
  MM.EVALUACIONES = [
    { f: '2026-09-07', nombre: 'Control 1' },
    { f: '2026-09-14', nombre: 'Control 2' },
    { f: '2026-09-28', nombre: 'Semana de parciales', semana: true },
    { f: '2026-10-19', nombre: 'Control 3' },
    { f: '2026-10-26', nombre: 'Control 4' },
    { f: '2026-11-09', nombre: 'Semana del examen final', semana: true }
  ];
  var MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  var DIAS = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];

  MM.proxima = function (hoy) {
    hoy = hoy || new Date();
    var h = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
    for (var k = 0; k < MM.EVALUACIONES.length; k++) {
      var e = MM.EVALUACIONES[k], p = e.f.split('-');
      var d = new Date(+p[0], +p[1] - 1, +p[2]);
      if (d >= h) {
        return {
          nombre: e.nombre, semana: !!e.semana, dias: Math.round((d - h) / 864e5),
          fecha: DIAS[d.getDay()] + ' ' + d.getDate() + ' ' + MESES[d.getMonth()]
        };
      }
    }
    return null;
  };
  MM.textoProxima = function () {
    var p = MM.proxima();
    if (!p) return 'No quedan evaluaciones en el cronograma.';
    var cuando = p.dias === 0 ? 'es hoy' : p.dias === 1 ? 'falta 1 día' : 'faltan ' + p.dias + ' días';
    return 'Próxima evaluación: ' + p.nombre + (p.semana ? ', empieza el ' : ', ') + p.fecha + '. ' + cuando.charAt(0).toUpperCase() + cuando.slice(1) + '.';
  };

  /* ---------- Progreso guardado ----------
     aciertos: { t2: { 'guia:fiscal-exp': true, ... } }
     totales:  { t2: { guia: 8, simulador: 8 } }  (cada página registra su propio total) */
  var memoria = { aciertos: {}, totales: {} };
  function leer() {
    try {
      var d = JSON.parse(localStorage.getItem('mm-progreso') || 'null');
      if (d && d.aciertos && d.totales) return d;
    } catch (e) { /* almacenamiento bloqueado: se usa memoria */ }
    return memoria;
  }
  function guardar(d) {
    memoria = d;
    try { localStorage.setItem('mm-progreso', JSON.stringify(d)); } catch (e) { /* queda en memoria */ }
    document.dispatchEvent(new CustomEvent('mm:progreso'));
  }
  MM.progreso = {
    registrar: function (tema, pagina, total) {
      var d = leer(), t = 't' + tema;
      d.totales[t] = d.totales[t] || {};
      if (d.totales[t][pagina] === total) return;
      d.totales[t][pagina] = total;
      guardar(d);
    },
    marcar: function (tema, pagina, id, ok) {
      var d = leer(), t = 't' + tema;
      d.aciertos[t] = d.aciertos[t] || {};
      d.aciertos[t][pagina + ':' + id] = !!ok;
      guardar(d);
    },
    limpiar: function (tema, pagina) {
      var d = leer(), a = d.aciertos['t' + tema] || {};
      Object.keys(a).forEach(function (k) { if (k.indexOf(pagina + ':') === 0) delete a[k]; });
      guardar(d);
    },
    resumen: function (tema) {
      var d = leer(), a = d.aciertos['t' + tema] || {}, tt = d.totales['t' + tema] || {};
      var aciertos = Object.keys(a).filter(function (k) { return a[k]; }).length;
      var total = Object.keys(tt).reduce(function (s, k) { return s + tt[k]; }, 0);
      return { aciertos: aciertos, total: total };
    }
  };

  MM.pintarProgreso = function () {
    cada('[data-progreso]', function (e) {
      var r = MM.progreso.resumen(+e.getAttribute('data-progreso'));
      var num = e.querySelector('.pg-num'), barra = e.querySelector('.pg-barra i');
      var texto = r.total ? r.aciertos + ' de ' + r.total + ' aciertos guardados' : 'Sin aciertos guardados todavía';
      if (num) num.textContent = texto;
      if (barra) barra.style.width = r.total ? Math.round(Math.min(1, r.aciertos / r.total) * 100) + '%' : '0%';
    });
    cada('[data-proxima]', function (e) { e.textContent = MM.textoProxima(); });
  };
  document.addEventListener('mm:progreso', function () { MM.pintarProgreso(); });

  /* ---------- SVG ---------- */
  function el(tag, attrs, padre) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (padre) padre.appendChild(n);
    return n;
  }
  function txt(s, attrs, padre) { var t = el('text', attrs, padre); t.textContent = s; return t; }
  var cuenta = 0;
  function svgId(svg) { if (!svg.id) svg.id = 'mm-svg-' + (++cuenta); return svg.id; }

  /* Geometría cualitativa del modelo, sin cifras en los ejes: IS  i = a − s·Y ;  LM  i = ī */
  MM.MODELO = { a: 0.92, s: 0.9, ibar: 0.4, x: 0.18, choque: 0.2 };
  MM.eqY = function (a, ibar) { return (a - ibar) / MM.MODELO.s; };
  function marco(o) {
    var p = o.pad;
    return {
      X: function (y) { return p.l + y * (o.w - p.l - p.r); },
      Yc: function (i) { return o.h - p.b - i * (o.h - p.t - p.b); }
    };
  }
  function lineaIS(g, f, a, attrs) {
    var s = MM.MODELO.s;
    var y0 = Math.max(0.02, (a - 0.98) / s), y1 = Math.min(0.98, (a - 0.03) / s);
    var d = el('line', { x1: f.X(y0), y1: f.Yc(a - s * y0), x2: f.X(y1), y2: f.Yc(a - s * y1) }, g);
    for (var k in attrs) d.setAttribute(k, attrs[k]);
    return d;
  }
  function ejes(g, f, o, dy) {
    el('line', { x1: f.X(0), y1: f.Yc(0), x2: f.X(0), y2: f.Yc(1.02), class: 'pl-eje', 'data-var': 'i' }, g);
    el('line', { x1: f.X(0), y1: f.Yc(0), x2: f.X(1.02), y2: f.Yc(0), class: 'pl-eje', 'data-var': 'Y' }, g);
    txt('i', { x: f.X(0) - 12, y: f.Yc(1) + 6, class: 'pl-lbl pl-lbl-eje', 'data-var': 'i', 'text-anchor': 'end' }, g);
    txt('Y', { x: f.X(1), y: f.Yc(0) + dy, class: 'pl-lbl pl-lbl-eje', 'data-var': 'Y', 'text-anchor': 'end' }, g);
  }

  /* El modelo que se arma: cada capa es la pieza que aporta un Tema */
  MM.plano = function (svg, o) {
    o = o || {};
    o.w = o.w || 600; o.h = o.h || 440;
    o.pad = o.pad || { l: 56, r: 28, t: 28, b: 44 };
    svg.setAttribute('viewBox', '0 0 ' + o.w + ' ' + o.h);
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var f = marco(o), M = MM.MODELO;
    var yA = MM.eqY(M.a, M.ibar), yA2 = MM.eqY(M.a - M.x, M.ibar);

    // Tema 1: plano (i, Y) y la tasa que fija el banco central
    var g1 = el('g', { 'data-capa': '1' }, svg);
    ejes(g1, f, o, 32);
    el('line', { x1: f.X(0), y1: f.Yc(M.ibar), x2: f.X(0.98), y2: f.Yc(M.ibar), class: 'pl-guia', 'data-var': 'i' }, g1);
    txt('ī', { x: f.X(0) - 12, y: f.Yc(M.ibar) + 6, class: 'pl-lbl', 'data-var': 'i', 'text-anchor': 'end' }, g1);

    // Tema 2: IS, LM y equilibrio A
    var g2 = el('g', { 'data-capa': '2' }, svg);
    el('line', { x1: f.X(yA), y1: f.Yc(M.ibar), x2: f.X(yA), y2: f.Yc(0), class: 'pl-proy', 'data-var': 'Y' }, g2);
    el('line', { x1: f.X(0), y1: f.Yc(M.ibar), x2: f.X(0.98), y2: f.Yc(M.ibar), class: 'pl-lm', 'data-var': 'i LM' }, g2);
    lineaIS(g2, f, M.a, { class: 'pl-is', 'data-var': 'IS' });
    txt('LM', { x: f.X(0.98), y: f.Yc(M.ibar) - 12, class: 'pl-lbl pl-lbl-lm', 'data-var': 'i LM', 'text-anchor': 'end' }, g2);
    txt('IS', { x: f.X((M.a - 0.12) / M.s) + 12, y: f.Yc(0.12) + 4, class: 'pl-lbl pl-lbl-is', 'data-var': 'IS' }, g2);
    el('circle', { cx: f.X(yA), cy: f.Yc(M.ibar), r: 7, class: 'pl-eq' }, g2);
    txt('A', { x: f.X(yA) + 12, y: f.Yc(M.ibar) - 12, class: 'pl-lbl' }, g2);
    txt('Y*', { x: f.X(yA), y: f.Yc(0) + 32, class: 'pl-lbl', 'data-var': 'Y', 'text-anchor': 'middle' }, g2);

    // Tema 3: la prima de riesgo x desplaza la IS a la izquierda
    var g3 = el('g', { 'data-capa': '3' }, svg);
    lineaIS(g3, f, M.a - M.x, { class: 'pl-is2', 'data-var': 'x IS' });
    var iy = 0.72, xa = f.X((M.a - iy) / M.s), xb = f.X((M.a - M.x - iy) / M.s);
    el('line', { x1: xa - 6, y1: f.Yc(iy), x2: xb + 10, y2: f.Yc(iy), class: 'pl-flecha', 'data-var': 'x', 'marker-end': 'url(#' + svgId(svg) + '-m)' }, g3);
    txt('↑x', { x: (xa + xb) / 2, y: f.Yc(iy) - 12, class: 'pl-lbl pl-lbl-x', 'data-var': 'x', 'text-anchor': 'middle' }, g3);
    el('circle', { cx: f.X(yA2), cy: f.Yc(M.ibar), r: 5, class: 'pl-eq2', 'data-var': 'x' }, g3);
    txt('A′', { x: f.X(yA2) - 10, y: f.Yc(M.ibar) + 22, class: 'pl-lbl', 'data-var': 'x', 'text-anchor': 'end' }, g3);

    // Tema 4: la paridad de tasas liga la tasa doméstica con la externa
    var g4 = el('g', { 'data-capa': '4' }, svg);
    txt('↔ i*', { x: f.X(0) + 8, y: f.Yc(M.ibar) - 12, class: 'pl-lbl pl-lbl-ext', 'data-var': 'ext' }, g4);

    var defs = el('defs', {}, svg);
    var m = el('marker', { id: svgId(svg) + '-m', viewBox: '0 0 10 10', refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: 'auto-start-reverse' }, defs);
    el('path', { d: 'M0 0L10 5L0 10z', class: 'pl-punta' }, m);
    MM.capas(svg, o.capas || [1, 2, 3, 4]);
    return svg;
  };
  MM.capas = function (svg, capas) {
    cada('[data-capa]', function (g) {
      var on = capas.indexOf(+g.getAttribute('data-capa')) > -1;
      g.setAttribute('visibility', on ? 'visible' : 'hidden');
    }, svg);
  };

  /* ---------- Predice antes de ver ----------
     Cada escenario: { tema, pagina, titulo, enunciado, is:'izquierda|igual|derecha', lm:'baja|igual|sube', paso } */
  MM.ESCENARIOS = MM.ESCENARIOS || {};
  var OPC = {
    is: [['izquierda', 'A la izquierda'], ['igual', 'No se mueve'], ['derecha', 'A la derecha']],
    lm: [['baja', 'Baja'], ['igual', 'No se mueve'], ['sube', 'Sube']]
  };
  MM.predice = function (raiz) {
    var id = raiz.getAttribute('data-predice'), esc = MM.ESCENARIOS[id];
    if (!esc) return;
    var elec = { is: null, lm: null };
    var h = '<p class="pr-enunciado">' + esc.enunciado + '</p><div class="pr-cuerpo"><div class="pr-controles">';
    ['is', 'lm'].forEach(function (c) {
      var nombre = c === 'is' ? 'IS' : 'LM';
      h += '<div class="pr-grupo" role="group" aria-label="¿Qué hace la curva ' + nombre + '?">' +
        '<span class="pr-pregunta" data-var="' + (c === 'is' ? 'IS' : 'i LM') + '">¿Y la ' + nombre + '?</span><div class="pr-opciones">';
      OPC[c].forEach(function (op) {
        h += '<button type="button" class="pr-op" data-c="' + c + '" data-v="' + op[0] + '" aria-pressed="false">' + op[1] + '</button>';
      });
      h += '</div></div>';
    });
    h += '<button type="button" class="pr-comprobar" disabled>Comprobar mi predicción</button></div>' +
      '<svg class="pr-plano plano" role="img" aria-label="Diagrama IS-LM del escenario. Se redibuja con tu predicción y, al comprobar, con la respuesta correcta."></svg></div>' +
      '<div class="pr-resultado" aria-live="polite"></div>';
    raiz.innerHTML = h;
    var svg = raiz.querySelector('svg'), ok = raiz.querySelector('.pr-comprobar'), res = raiz.querySelector('.pr-resultado');
    dibujarPrediccion(svg, null, null);
    cada('.pr-op', function (b) {
      b.addEventListener('click', function () {
        var c = b.getAttribute('data-c');
        elec[c] = b.getAttribute('data-v');
        cada('.pr-op[data-c="' + c + '"]', function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); }, raiz);
        ok.disabled = !(elec.is && elec.lm);
        res.innerHTML = '';
        dibujarPrediccion(svg, elec, null);
      });
    }, raiz);
    ok.addEventListener('click', function () {
      var bienIs = elec.is === esc.is, bienLm = elec.lm === esc.lm, bien = bienIs && bienLm;
      var falla = [];
      if (!bienIs) falla.push('la IS');
      if (!bienLm) falla.push('la LM');
      dibujarPrediccion(svg, elec, esc);
      res.innerHTML = '<p class="pr-veredicto ' + (bien ? 'pr-bien' : 'pr-mal') + '">' +
        (bien ? '✓ Correcto: acertaste las dos curvas.' : '✗ Revisa ' + falla.join(' y ') + '.') + '</p>' +
        '<p>' + esc.paso + '</p><p class="pr-leyenda">Línea punteada: tu predicción. Línea continua: la respuesta.</p>';
      MM.progreso.marcar(esc.tema, esc.pagina, id, bien);
    });
  };
  function dibujarPrediccion(svg, elec, esc) {
    var o = { w: 420, h: 300, pad: { l: 40, r: 20, t: 20, b: 34 } };
    svg.setAttribute('viewBox', '0 0 ' + o.w + ' ' + o.h);
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var f = marco(o), M = MM.MODELO, d = M.choque;
    var dA = { izquierda: -d, igual: 0, derecha: d }, dI = { baja: -d * 0.8, igual: 0, sube: d * 0.8 };
    ejes(svg, f, o, 26);
    el('line', { x1: f.X(0), y1: f.Yc(M.ibar), x2: f.X(0.98), y2: f.Yc(M.ibar), class: 'pl-base' }, svg);
    lineaIS(svg, f, M.a, { class: 'pl-base' });
    el('circle', { cx: f.X(MM.eqY(M.a, M.ibar)), cy: f.Yc(M.ibar), r: 5, class: 'pl-eq-base' }, svg);
    if (elec) {
      if (elec.lm && elec.lm !== 'igual') {
        var yl = M.ibar + dI[elec.lm];
        el('line', { x1: f.X(0), y1: f.Yc(yl), x2: f.X(0.98), y2: f.Yc(yl), class: 'pl-lm pl-tuya', 'data-var': 'i LM' }, svg);
      }
      if (elec.is && elec.is !== 'igual') lineaIS(svg, f, M.a + dA[elec.is], { class: 'pl-is pl-tuya', 'data-var': 'IS' });
    }
    if (esc) {
      var ib = M.ibar + dI[esc.lm], a = M.a + dA[esc.is];
      el('line', { x1: f.X(0), y1: f.Yc(ib), x2: f.X(0.98), y2: f.Yc(ib), class: 'pl-lm', 'data-var': 'i LM' }, svg);
      lineaIS(svg, f, a, { class: 'pl-is', 'data-var': 'IS' });
      el('circle', { cx: f.X(MM.eqY(a, ib)), cy: f.Yc(ib), r: 7, class: 'pl-eq' }, svg);
    }
  }

  /* ---------- Variables vivas ---------- */
  MM.vivas = function () {
    var raiz = document.documentElement, primera = null;
    function on(v) {
      raiz.classList.add('vivo');
      cada('[data-var]', function (e) {
        e.classList.toggle('es-viva', e.getAttribute('data-var').split(' ').indexOf(v) > -1);
      });
    }
    function off() {
      raiz.classList.remove('vivo');
      cada('.es-viva', function (e) { e.classList.remove('es-viva'); });
    }
    cada('.v[data-var]', function (t) {
      var enEcuacion = t.closest('.ecuacion, .ecuacion-body, .ec');
      if (enEcuacion) {
        t.tabIndex = 0;
        if (!t.title) t.title = NOMBRES[t.getAttribute('data-var').split(' ')[0]] || '';
        if (!primera) primera = enEcuacion;
      }
      var v = t.getAttribute('data-var').split(' ')[0];
      t.addEventListener('mouseenter', function () { on(v); });
      t.addEventListener('mouseleave', off);
      t.addEventListener('focus', function () { on(v); });
      t.addEventListener('blur', off);
    });
    // una sola indicación por página, junto a la primera ecuación con variables vivas
    if (primera && !primera.querySelector('.ec-nota')) {
      var nota = document.createElement('span');
      nota.className = 'ec-nota';
      nota.textContent = 'Pasa el cursor o el foco (Tab) por una variable de color: se marca en todas las ecuaciones y diagramas de la página.';
      primera.appendChild(nota);
    }
  };
  var NOMBRES = { Y: 'producto', i: 'tasa de interés', IS: 'curva IS', x: 'prima de riesgo', ext: 'sector externo' };

  /* ---------- Índice como diagrama: el punto es la posición de lectura ---------- */
  MM.navEq = function (nav) {
    var svg = nav.querySelector('.panel-svg');
    var enlaces = [].slice.call(nav.querySelectorAll('.panel-lista a[href^="#"]'));
    var secciones = enlaces.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
    var n = enlaces.length;
    if (!svg || !n) return;
    var o = { w: 220, h: 150, pad: { l: 14, r: 12, t: 12, b: 14 } };
    svg.setAttribute('viewBox', '0 0 ' + o.w + ' ' + o.h);
    var f = marco(o), M = MM.MODELO;
    var y0 = (M.a - 0.95) / M.s, y1 = (M.a - 0.05) / M.s;
    function pos(t) { var y = y0 + (y1 - y0) * t; return [f.X(y), f.Yc(M.a - M.s * y)]; }
    el('line', { x1: f.X(0), y1: f.Yc(0), x2: f.X(0), y2: f.Yc(1), class: 'pl-eje' }, svg);
    el('line', { x1: f.X(0), y1: f.Yc(0), x2: f.X(1), y2: f.Yc(0), class: 'pl-eje' }, svg);
    var a0 = pos(0), a1 = pos(1);
    el('line', { x1: a0[0], y1: a0[1], x2: a1[0], y2: a1[1], class: 'pl-is' }, svg);
    var marcas = enlaces.map(function (a, k) {
      var p = pos(n === 1 ? 0.5 : k / (n - 1));
      var c = el('circle', { cx: p[0], cy: p[1], r: 4.5, class: 'nv-marca' }, svg);
      txt(String(k + 1), { x: p[0] + 8, y: p[1] - 7, class: 'nv-num' }, svg);
      return c;
    });
    var gy = el('line', { class: 'pl-proy' }, svg), gx = el('line', { class: 'pl-proy' }, svg);
    var punto = el('circle', { cx: a0[0], cy: a0[1], r: 7, class: 'pl-eq nv-punto' }, svg);
    var mini = nav.querySelector('.panel-boton svg'), actual = nav.querySelector('[data-nav-actual]');
    if (mini) mini.setAttribute('viewBox', svg.getAttribute('viewBox'));

    function actualizar() {
      var corte = window.innerHeight * 0.35, idx = 0, frac = 0;
      for (var k = 0; k < n; k++) {
        if (!secciones[k]) continue;
        var r = secciones[k].getBoundingClientRect();
        if (r.top <= corte) { idx = k; frac = r.height ? Math.min(1, Math.max(0, (corte - r.top) / r.height)) : 0; }
      }
      var t = n === 1 ? 0.5 : Math.min(1, (idx + (idx < n - 1 ? frac : 0)) / (n - 1));
      var p = pos(t);
      punto.setAttribute('cx', p[0]); punto.setAttribute('cy', p[1]);
      gy.setAttribute('x1', f.X(0)); gy.setAttribute('y1', p[1]); gy.setAttribute('x2', p[0]); gy.setAttribute('y2', p[1]);
      gx.setAttribute('x1', p[0]); gx.setAttribute('y1', p[1]); gx.setAttribute('x2', p[0]); gx.setAttribute('y2', f.Yc(0));
      enlaces.forEach(function (a, k) {
        if (k === idx) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
        marcas[k].classList.toggle('nv-activa', k === idx);
      });
      if (actual) actual.textContent = (idx + 1) + '. ' + enlaces[idx].textContent;
      if (mini) mini.innerHTML = svg.innerHTML;
    }
    var pendiente = false;
    window.addEventListener('scroll', function () {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(function () { pendiente = false; actualizar(); });
    }, { passive: true });
    window.addEventListener('resize', actualizar);
    actualizar();

    // flechas del teclado: recorren el índice como puntos sobre la curva
    nav.addEventListener('keydown', function (e) {
      var k = enlaces.indexOf(document.activeElement);
      if (k < 0) {
        if (e.key === 'Escape' && nav.classList.contains('abierto')) cerrar(true);
        return;
      }
      var paso = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
      if (e.key === 'Home') paso = -k;
      if (e.key === 'End') paso = n - 1 - k;
      if (e.key === 'Escape' && nav.classList.contains('abierto')) { cerrar(true); return; }
      if (paso === undefined) return;
      e.preventDefault();
      enlaces[Math.max(0, Math.min(n - 1, k + paso))].focus();
    });
    enlaces.forEach(function (a, k) {
      function marcar(on) { marcas[k].classList.toggle('nv-hover', on); }
      a.addEventListener('mouseenter', function () { marcar(true); });
      a.addEventListener('mouseleave', function () { marcar(false); });
      a.addEventListener('focus', function () { marcar(true); });
      a.addEventListener('blur', function () { marcar(false); });
      a.addEventListener('click', function () { cerrar(false); });
    });

    // en pantallas angostas el panel es un botón que se despliega
    var boton = nav.querySelector('.panel-boton');
    function cerrar(devolverFoco) {
      nav.classList.remove('abierto');
      if (boton) boton.setAttribute('aria-expanded', 'false');
      if (devolverFoco && boton) boton.focus();
    }
    if (boton) boton.addEventListener('click', function () {
      var ab = nav.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', ab ? 'true' : 'false');
      if (ab) enlaces[Math.max(0, enlaces.findIndex(function (a) { return a.hasAttribute('aria-current'); }))].focus();
    });
    document.body.classList.add('con-panel');
  };

  /* ---------- Tema claro / oscuro ---------- */
  MM.botonTema = function (btn) {
    var raiz = document.documentElement;
    function actual() {
      return raiz.getAttribute('data-theme') ||
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    function pintar() {
      var oscuro = actual() === 'dark';
      btn.textContent = oscuro ? 'Tema claro' : 'Tema oscuro';
      btn.setAttribute('aria-label', oscuro ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
    }
    btn.addEventListener('click', function () {
      var t = actual() === 'dark' ? 'light' : 'dark';
      raiz.setAttribute('data-theme', t);
      try { localStorage.setItem('mm-tema', t); } catch (e) { /* solo en esta visita */ }
      pintar();
    });
    pintar();
  };

  /* desplazamiento respetando prefers-reduced-motion */
  MM.irA = function (el) { if (el) el.scrollIntoView({ behavior: reducido ? 'auto' : 'smooth', block: 'start' }); };

  function iniciar() {
    cada('[data-btn-tema]', MM.botonTema);
    cada('nav[data-nav-eq]', MM.navEq);
    cada('[data-predice]', MM.predice);
    MM.vivas();
    MM.pintarProgreso();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
