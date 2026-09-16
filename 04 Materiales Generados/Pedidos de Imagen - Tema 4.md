---
tags: [curso, diseno, pedidos-de-imagen]
sources: "Generado por Claude (Cowork) — geometría/datos base entregados junto con el material, siguiendo el protocolo de brief de AGENTS.md / Sistema de Diseño HTML.md (2026-09-16)"
---

# Pedidos de Imagen — Tema 4 (IS-LM + Apertura Comercial/Financiera)

Este documento registra los diagramas de modelo con datos reales desarrollados para el **Tema 4**, integrados en `docs/tema-04/index.html` y en `04 Materiales Generados/guia-tema4-apertura.html`. Siguiendo la actualización del 2026-08-27 del protocolo (`02 Curso/Sistema de Diseño HTML.md`), Claude construyó la geometría/datos exactos de cada SVG (ejes, nodos, etiquetas, cifras verificadas contra Blanchard cap. 17) y los dejó **integrados y funcionales** en el material — el pulido visual (acabado, sombreado, iconografía) que normalmente haría Antigravity/Codex queda como mejora opcional, no bloqueante: los diagramas ya son correctos y legibles tal como están.

## Resumen de estado

| ID | Nombre | Archivo / ubicación | Estado |
|---|---|---|---|
| `img-t4-01` | Tipo de cambio real (ε = EP/P*) — diagrama de dos bloques con conversión | `guia-tema4-apertura.html`, módulo 02 | ✅ Base entregada por Claude — pulido visual pendiente (opcional) |
| `img-t4-02` | Arbitraje y paridad de tasas de interés — dos rutas de inversión | `guia-tema4-apertura.html`, módulo 03 | ✅ Base entregada por Claude — pulido visual pendiente (opcional) |

No se generaron piezas de identidad/ambientación nuevas para este Tema (favicon, banner hero) — el header reutiliza el patrón de marca abstracta ya establecido en Tema 1/Tema 2, con un nuevo `header-mark` de dos círculos conectados (economía doméstica/extranjera) coherente con el tema de apertura.

---

## Especificaciones técnicas y reglas del sistema de diseño (heredadas, sin cambios)

1. **Formato:** SVG vectorial en código, embebido inline en el HTML.
2. **Paleta estricta Índigo profundo + Coral (tema oscuro):** `#080C1C` fondo, `#10172D`/`#1B223C` superficies, `#2A324A` bordes, `#EFF2F9` texto, `#A3AABE` texto secundario, `#667FDA` índigo medio, `#FF6F4A` coral, `#FFB188` coral claro, `#55C975` éxito, `#FB5668` peligro.
3. **Cero funciones `gradient()`.**
4. **Tipografía técnica:** Inter (rótulos), JetBrains Mono (fórmulas, variables, ejes).
5. **Accesibilidad:** `role="img"` con `<title>` y `<desc>` en cada `<svg>`.
6. Solo colores hexadecimales de la paleta; sin `<image>`/`xlink:href` externos; sin emoji como ícono estructural.

## Detalle de los diagramas

### img-t4-01 — Tipo de cambio real (ε = EP/P*)
- **Geometría base (resuelta por Claude):** dos bloques rectangulares representando la economía doméstica (borde índigo, precio P) y la economía extranjera (borde coral, precio P*), conectados por una flecha de conversión etiquetada "tipo de cambio E", con un nodo circular central ε = EP/P* conectado a ambos bloques por líneas punteadas.
- **Fuente del contenido:** Blanchard, cap. 17, secc. 17-1 — no incluye cifras reales, es un diagrama conceptual de la fórmula (símbolos, no datos numéricos), por lo que no aplica la regla de "cifras verificadas".
- **Oportunidad de pulido (opcional, no bloqueante):** iconografía más ilustrativa para cada bloque de economía (ej. silueta de edificios/bienes), textura de fondo sutil dentro de cada bloque, posible micro-animación de la flecha de conversión al hacer scroll (respetando `prefers-reduced-motion`).

### img-t4-02 — Arbitraje y paridad de tasas de interés
- **Geometría base (resuelta por Claude):** nodo inicial "1 USD hoy" con dos rutas divergentes — ruta superior (bono doméstico, tasa i, llega directo a "(1+i) USD") y ruta inferior (conversión a libras al tipo E_t, bono extranjero a tasa i*, resultado en libras, reconversión punteada a dólares al tipo esperado E^e_t+1) — con la ecuación de arbitraje (17.2) en una franja inferior.
- **Fuente del contenido:** Blanchard, cap. 17, secc. 17-2, ecuación (17.2) — diagrama conceptual del razonamiento de arbitraje que el propio texto describe en prosa; los símbolos (i, i*, E_t, E^e_t+1) son exactamente los de la ecuación, sin cifras numéricas inventadas.
- **Oportunidad de pulido (opcional, no bloqueante):** distinguir visualmente con más fuerza las dos "monedas" (dólar/libra) en cada tramo de la ruta inferior, quizás con pequeños íconos de moneda vectoriales propios (nunca emoji), y suavizar el cruce de las dos rutas para que se lean como un solo flujo bifurcado desde el nodo inicial.

## Verificación aplicada (sin usar `git`)

- Los 3 archivos HTML del Tema 4 (`guia-tema4-apertura.html`, `actividad-tema4-apertura.html`, `repaso-control2-tema4-apertura.html`) se verificaron por script: conteo de apertura/cierre balanceado de `<svg>`, `<div>`, `<section>`, `<table>`, `<tr>`/`<td>`/`<th>`, `<dl>`/`<dt>`/`<dd>` y `<button>`; ausencia de `gradient(` y de `<form`.
- Cifras de la Tabla 17-3 (Guía, módulo 04) verificadas contra el texto extraído del PDF de Blanchard cargado en el Project (exports 4,424 / imports 5,396 / trade balance −972 / net income −21 / current account −993 / financial account 804 / statistical discrepancy −189).
- Pendiente: `device_stage_files` de los 3 HTML + este documento para verificación visual directa por Navas, y registro en la bitácora tras su retroalimentación.

## Ver también

`04 Materiales Generados/guia-tema4-apertura.html` · `04 Materiales Generados/actividad-tema4-apertura.html` · `04 Materiales Generados/repaso-control2-tema4-apertura.html` · `02 Curso/Sistema de Diseño HTML.md` · `AGENTS.md`
