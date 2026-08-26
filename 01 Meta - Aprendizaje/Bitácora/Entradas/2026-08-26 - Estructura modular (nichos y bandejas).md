---
tags: [meta, bitacora, entrada]
fecha: 2026-08-26
tema: —
material: "docs/index.html + 02 Curso/Sistema de Diseño HTML.md + AGENTS.md (estructura modular, segunda pasada del mismo día)"
funciono: "Navas pidió 'hazlo modular' señalando como referencia el sitio de un cliente de Velkor (proyecto Retablo): un menú tipo mueble, contenido en 'bandejas' numeradas con 'nichos' adentro. Se investigó la referencia con WebFetch antes de tocar código (layout, no contenido ni paleta). Se tradujo a la identidad del curso: 3 módulos numerados (Sitio/Ruta del curso/Recursos) con nav de anclas tipo control físico, y los 7 Temas pasaron de timeline vertical a una cuadrícula de 'nichos' con bordes compartidos entre celdas (fondo del contenedor = --border + gap:1px) en vez de tarjetas sueltas con gap y sombra cada una. Se documentó el patrón en el sistema de diseño como principio reutilizable ('Estructura modular'), no solo como retoque puntual del índice, incluyendo la regla de cuándo un número es real (navegación o secuencia genuina) vs. decorativo."
fallo: "Ninguno relevante en esta pasada — se verificó de nuevo balance de tags, ausencia de patrones prohibidos y contraste antes de entregar."
accion: "Cuando Navas dé una referencia visual externa (sitio, cliente, ejemplo), usar WebFetch para extraer el principio estructural antes de proponer nada — no asumir qué significa 'modular' u otro término de diseño sin verificarlo contra el ejemplo real."
---

# Estructura modular — segunda pasada de diseño (2026-08-26)

## Qué cambió

- El índice de `docs/index.html` pasó de timeline vertical a **estructura modular tipo
  "bandeja"**: 3 módulos numerados (01 Sitio, 02 Ruta del curso, 03 Recursos) con folio en
  Fraunces itálica y un menú corto de anclas arriba, estilo "mueble que se recorre".
- Los 7 Temas ahora son una **cuadrícula de nichos con bordes compartidos** (un solo mueble
  dividido, no tarjetas sueltas) — técnica: contenedor con `background:var(--border)` y `gap:1px`,
  cada nicho con su propio fondo.
- La nota de pedido de imagen (`.img-request`) se dejó deliberadamente **fuera** del sistema de
  numeración de módulos: es proceso interno, no contenido del curso.

## Qué se documentó

`02 Curso/Sistema de Diseño HTML.md` ahora tiene una sección "Estructura modular" que explica el
patrón módulo/nicho como layout de referencia para cualquier página nueva de `docs/` o de un Tema,
con la regla explícita de cuándo un número de sección es válido (navegación real o secuencia real)
para no caer en numeración decorativa. `AGENTS.md` tiene el resumen corto con el mismo pointer.

## Ver también

[[Errores Comunes a Evitar]] · `02 Curso/Sistema de Diseño HTML.md` · [[2026-08-26 - Rediseño de identidad visual (Índigo profundo + coral)]]
