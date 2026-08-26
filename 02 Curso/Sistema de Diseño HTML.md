---
tags: [curso, diseno, html]
---

# Sistema de Diseño — Materiales HTML

Aplica a Guías, Actividades y Repasos en HTML (no a Tarea/Control/Pauta, que se producen en Word o PDF).

## Tipografía

- **Inter** (Google Fonts) — pesos 400 y 600 — texto general.
- **JetBrains Mono** (Google Fonts) — peso 500 — ecuaciones, notación y variables (ej. `Y = C + I + G + X − M`).

## Paleta

| Color | Hex | Uso |
|---|---|---|
| Azul pizarra | `#1E3A5F` | Encabezados, acentos principales, ejes de curvas (IS, LM, Phillips, Solow), barras de progreso |
| Azul medio | `#3A6EA5` | Hover, bordes activos, badges, curva secundaria |
| Celeste neblina | `#E8F1F8` | Fondos de íconos, retroalimentación correcta |
| Hueso | `#F6F4EF` | Texto sobre fondos oscuros, fondo general de página |
| Terracota alerta | `#B84A3E` (fondo `#FBEDEA`) | Errores, respuestas incorrectas |

*(Identidad distinta a la de Macro I —verde—, para diferenciar visualmente ambos cursos. Ajustable si Navas prefiere volver al verde para mantener una sola identidad entre cursos.)*

## Layout — siempre incluir

- Encabezado con nombre del curso, tema y semana.
- Paneles de métricas o progreso visible.
- Tarjetas con íconos SVG (nunca emoji).
- Retroalimentación con borde completo + tinte de fondo del color correspondiente (no una franja de 4px solo en el borde izquierdo — decisión de Navas del 2026-08-26, para unificar criterio con Contabilidad Financiera; ver [[Errores Comunes a Evitar]]).
- Diagramas de modelos (IS-LM, Phillips, Solow) como SVG con ejes rotulados y la paleta definida — nunca imágenes externas ni capturas del libro.

## Reglas técnicas

- Sin `<form>` HTML — usar eventos JS.
- Sin gradientes, sombras decorativas ni colores fuera de la paleta.
- Compatible con apertura directa en navegador, sin servidor.
- Responsive para pantalla de computadora.

Ver [[Lecciones Aprendidas]] por ajustes de diseño que hayan surgido de retroalimentación real (por ejemplo, si algún diagrama SVG resultó confuso o un color no se leyó bien).


## Checklist de curación (anti-AI-slop)

- [ ] Ningún elemento usa franja de acento de 4px solo en el borde izquierdo —
  borde completo + tinte en su lugar.
- [ ] Elementos interactivos (tabs, acordeón, quiz) con `role`/`tabindex`/`aria-*`
  y respuesta a teclado, no solo a clic.
- [ ] Estado `:focus-visible` visible.
- [ ] Bloque `@media (prefers-reduced-motion: reduce)` si hay animaciones.
- [ ] Contraste WCAG AA verificado, no asumido.
- [ ] Cero librerías JS externas, cero emojis funcionales.
- [ ] Abre y funciona directo en el navegador, sin servidor.
