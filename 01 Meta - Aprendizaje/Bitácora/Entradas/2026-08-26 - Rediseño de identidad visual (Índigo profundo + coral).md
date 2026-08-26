---
tags: [meta, bitacora, entrada]
fecha: 2026-08-26
tema: —
material: "Sitio docs/index.html + 02 Curso/Sistema de Diseño HTML.md + AGENTS.md + docs/Pedidos de Imagen - Sitio.md (rediseño de identidad visual completo, no material de un Tema específico)"
funciono: "Navas pidió una pasada de diseño con /impeccable /design-system /design-critique /frontend-design porque la paleta 'azul pizarra' sobre fondo claro se sentía sosa, y pidió un color distinto. Se confirmó el alcance con dos preguntas (todo el sistema de diseño, no solo el índice; dirección de color Índigo profundo + coral) antes de tocar nada. Se calculó la nueva paleta con conversión OKLCH→sRGB y se verificó contraste WCAG en Python antes de escribir CSS (todos los pares texto/fondo usados quedaron ≥6:1, la mayoría >10:1). Se reemplazó la grilla de tarjetas idénticas del índice por una timeline vertical numerada, justificada porque los 7 Temas sí son una secuencia real del cronograma. Se verificó estructuralmente el HTML final (tags balanceados, cero repeating-linear-gradient, paleta sin residuos de los hex antiguos, 7 items de TEMAS, focus-visible y prefers-reduced-motion presentes) antes de entregarlo."
fallo: "Al construir la v2 del índice no se revisó primero si Antigravity ya había entregado assets (favicon.svg y header-mark.svg) desde el pase anterior — sí los había entregado, integrados en el index.html del dispositivo, pero en la paleta vieja. Se descubrió a tiempo (staging + lectura antes de sobrescribir), pero el pedido de imagen inicial (v2, primer borrador) decía incorrectamente que el favicon era 'un marcador temporal de Claude' cuando en realidad ya era una pieza real de Antigravity que solo necesitaba recolorearse — se corrigió el texto antes de entregar, pero fue un descuido evitable: siempre hacer device_list_dir + leer el contenido actual de docs/assets/ antes de reescribir un pedido de imagen sobre un tema que ya se había pedido antes."
accion: "Antes de reabrir cualquier 'Pedidos de Imagen - *.md' para un contexto donde ya se pidió algo antes, primero listar y leer los archivos de assets/ actuales en el dispositivo (no asumir que siguen siendo el marcador temporal original) para describir correctamente el estado real en el nuevo brief. Mantener esta regla también para Contabilidad Financiera y cualquier vault futuro con el mismo protocolo."
---

# Rediseño de identidad visual — Modelos Macroeconómicos (2026-08-26)

## Qué cambió

- **Paleta**: de "azul pizarra" (`#1E3A5F`/`#3A6EA5`/`#E8F1F8`/`#F6F4EF`/`#B84A3E`) sobre fondo
  claro, a **Índigo profundo + coral** sobre fondo oscuro (`#080C1C`/`#10172D`/`#1B223C`/`#2A324A`
  como neutros, `#667FDA` índigo medio, `#FF6F4A`/`#FFB188` coral, `#55C975` éxito, `#FB5668`
  error). Detalle completo y justificación de contraste en `02 Curso/Sistema de Diseño HTML.md`.
- **Tipografía**: se agregó **Fraunces** (serif de display) a la pareja Inter + JetBrains Mono,
  para tener un verdadero contraste tipográfico en títulos en vez de dos variantes de sans-serif.
- **Layout del índice** (`docs/index.html`): la grilla de 7 tarjetas idénticas se reemplazó por una
  timeline vertical numerada con nodo circular y línea conectora — los 7 Temas son una secuencia
  real del cronograma, así que el tratamiento numerado está justificado (a diferencia de usar
  números "01/02/03" como decoración en secciones que no son una secuencia).
- Se corrigieron de paso dos defectos de estilo que las guías de `/impeccable` marcan como
  "codex-specific": ninguna tarjeta combina ya borde de 1px + sombra ancha, y no queda ningún
  `repeating-linear-gradient` de fondo en el `.img-request`.

## Qué se actualizó

1. `docs/index.html` — reconstruido completo con la nueva paleta/tipografía/layout.
2. `02 Curso/Sistema de Diseño HTML.md` — paleta y tipografía actualizadas para todo material
   futuro de Guía/Actividad/Repaso (no solo el sitio), checklist de curación ampliada.
3. `AGENTS.md` — resumen de paleta/tipografía actualizado para que cualquier agente que abra el
   vault vea la identidad correcta de inmediato.
4. `docs/Pedidos de Imagen - Sitio.md` — brief de favicon y marca de header rehechos con los
   nuevos valores hexadecimales (los dos ya habían sido entregados por Antigravity en la paleta
   vieja; se pide recolorearlos, no rehacerlos desde cero).

## Pendiente

- Antigravity/Codex debe recolorear `favicon.svg` y `header-mark.svg` según el nuevo brief.
- Ningún material de Tema (Guía/Actividad/Repaso) existe todavía, así que no hay nada más que
  retroactivear a la nueva paleta por ahora — el primer material que se genere ya debe nacer con
  Índigo profundo + coral.

## Ver también

[[Errores Comunes a Evitar]] · [[Patrones que Funcionan Bien]] · `02 Curso/Sistema de Diseño HTML.md` · `docs/Pedidos de Imagen - Sitio.md`
