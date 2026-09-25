---
tags: [curso, diseno, html]
---

# Sistema de Diseño: Materiales HTML

Aplica a Guías, Actividades y Repasos en HTML (no a Tarea/Control/Pauta, que se producen en Word
o PDF) y al sitio publicado en `docs/` (ver `AGENTS.md`, sección GitHub Pages).

**Dirección vigente desde 2026-09-25: "Capas del modelo".** Reemplaza por completo la identidad
Índigo profundo + coral (2026-08-26), su estructura de "bandejas y nichos", el doble bisel y la
entrada al hacer scroll. Se eligió con Navas en un proceso por pasos (diagnóstico, entrevista,
3 prototipos, brief confirmado); registro en
`01 Meta - Aprendizaje/Bitácora/Entradas/2026-09-25 - Rediseño Capas del modelo.md`.

## Idea central

**Cada Tema es una capa del mismo modelo.** El curso arma un solo modelo pieza por pieza:
Tema 1 pone el plano (i, Y) y la tasa del banco central, Tema 2 la IS y la LM, Tema 3 la prima de
riesgo x, Tema 4 la paridad de tasas con el exterior. Esa idea se ve en:

- **Portada:** una pila de capas, una por Tema, en el color sólido de su variable. Cada capa
  enciende o apaga su pieza en el diagrama del modelo, que dibuja `guia.js` (sin cifras
  inventadas: la geometría es cualitativa). Los Temas sin publicar aparecen como capas vacías.
- **Navegación:** en cada página, el índice es un panel con una curva IS donde cada sección es un
  punto y el punto grande es la posición de lectura. Flechas del teclado recorren el índice. En
  pantallas angostas se pliega en un botón que muestra el mismo mini diagrama.
- **Color:** siempre significa una variable (tabla abajo). La cabecera y los títulos de módulo
  de cada Tema van en banda del color de su capa.
- **Logo:** cuatro barras que bajan como una IS, una por Tema publicado, en los colores de las
  capas (`docs/assets/favicon.svg`; en la cabecera va en línea).

## Archivos compartidos (no escribir CSS suelto por página)

- `docs/assets/guia.css`: tokens, tema claro y oscuro, todos los componentes.
- `docs/assets/guia.js`: tema claro/oscuro, índice-diagrama, variables vivas, diagrama del
  modelo, "predice antes de ver", progreso guardado y fechas de evaluación del cronograma.
- `docs/assets/fonts/`: Archivo y Azeret Mono (woff2 + licencias OFL). No se usa Google Fonts.

Cada página solo lleva su HTML, el atributo `data-k` en `<html>` (capa del Tema) y el JavaScript
de su contenido (datos de un quiz, escenarios de un simulador, cálculos). Esqueleto de una página
de Tema: ver cualquiera de `docs/tema-0N/index.html` (cabecera `.cab` con `.cab-barra` y
`.cab-banda`, `<div class="pagina">` con `<main id="contenido">` y `<nav class="panel" data-nav-eq>`).

## Color: cada color es una variable

| Variable | Capa (banda, igual en claro y oscuro; texto `#140C00`) | Texto/trazo en oscuro | Texto/trazo en claro | Lámina (SVG) |
|---|---|---|---|---|
| Y, mercado de bienes (Tema 1) | `#F0B429` | `#F0B429` | `#855B00` | `#F0B429` |
| IS (Tema 2) | `#F2552C` | `#F2552C` | `#B8330F` | `#F2552C` (IS desplazada: `#FF9B7D`) |
| x, prima de riesgo (Tema 3) | `#C65BD6` | `#D27AE0` | `#8E2FA3` | `#D27AE0` |
| ε, E, i*, UIP: sector externo (Tema 4) | `#22B8A0` | `#22B8A0` | `#08735F` | `#22B8A0` |
| i y LM: tasa del banco central | `#3D8BFD` | `#5C9DFF` | `#1F5FD1` | `#5C9DFF` |

Neutros y semánticos:

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--bg` | `#F4F5F6` | `#101112` | Fondo (gris sin tinte; nunca crema) |
| `--s1` | `#FFFFFF` | `#1A1B1D` | Superficies de contenido |
| `--s2` | `#E9EBEE` | `#202124` | Segundo nivel, hover |
| `--linea` | `#C9CCD1` | `#3A3C41` | Divisiones |
| `--tinta` | `#111214` | `#F2F2F0` | Texto, bordes de 2 px de controles |
| `--tenue` | `#4D5157` | `#A9ABAE` | Texto secundario |
| `--ok` | `#1A7F3C` | `#55C975` | Respuesta correcta |
| `--mal` | `#C0263A` | `#FF7382` | Respuesta incorrecta |
| `--lamina` | `#1A1B1D` | `#1A1B1D` | Fondo fijo de los diagramas SVG heredados |

Reglas de color:

- Nunca usar un color de variable como decoración. Una nota importante del Tema va en el color
  de su capa (`--c-k`); las demás notas son neutras (borde `--tinta`).
- Los tintes de fondo se hacen con `color-mix()` sobre `--s1` (sólidos, sin transparencia).
- Contraste verificado con auditoría automática de todo el texto visible en ambos temas:
  todo par usado ≥4.5:1 (texto chico) y ≥3:1 (texto grande). Colores de lámina ≥4.68:1 sobre
  `#202124` y ≥5:1 sobre `#1A1B1D`.
- Los diagramas SVG heredados son **láminas oscuras en ambos temas**: su fondo está dentro del
  dibujo. Su texto se compone en Archivo condensada (88 %) desde `guia.css` porque sus recuadros
  se midieron para una mono más angosta.

## Tipografía

- **Archivo** (variable, ejes de ancho 62–125 % y peso): títulos en ancho 75 % y peso 850
  (`h1`, `h2`, bandas); texto en ancho normal. Un solo sistema tipográfico con contraste por
  ancho y peso, no por mezcla de familias.
- **Azeret Mono**: solo ecuaciones, variables y cifras (`.ecuacion`, `code`, marcadores).
- Retiradas: Fraunces, Inter y JetBrains Mono.
- Sin mayúsculas diminutas con tracking en etiquetas; las etiquetas son negritas en tamaño
  normal. Sin guiones largos (—) en textos: se usa coma, dos puntos, punto y coma o paréntesis.

## Interacciones

- **Capas (portada):** botón por Tema con `aria-pressed`; el estado se anuncia en una región
  `aria-live`.
- **Índice-diagrama:** `nav[data-nav-eq]` con lista real de enlaces; flechas, Inicio y Fin
  recorren; en celular el botón abre, lleva el foco a la sección actual y Escape cierra.
- **Variables vivas:** en ecuaciones, `<span class="v" data-var="i"><span>i</span></span>`
  (valores: `Y`, `i`, `IS`, `x`, `ext`). Con cursor o foco (Tab) se marca esa variable en todas
  las ecuaciones, el texto marcado y los diagramas que dibuja `guia.js`. En prosa, sin el
  `<span>` interior.
- **Predice antes de ver:** `<div data-predice="id">` + `MM.ESCENARIOS[id] = {tema, pagina,
  titulo, enunciado, is, lm, paso}` en el script de la página. Primero se elige qué hace cada
  curva, luego se compara con la respuesta en el diagrama.
- **Progreso guardado:** cada página registra su total con `MM.progreso.registrar(tema, pagina,
  total)` y marca cada respuesta con `MM.progreso.marcar(tema, pagina, id, ok)`. La portada solo
  muestra lo que se guardó en ese navegador (localStorage, con respaldo en memoria).
- **Próxima evaluación:** calculada con las fechas de `MM.EVALUACIONES` (copiadas del
  Cronograma). Si el Cronograma cambia, actualizar ahí.

## Reglas técnicas

- Sin `<form>`; eventos JS. HTML/CSS/JS plano, sin build ni librerías externas; abre directo
  desde el disco.
- Sin `gradient()`, sin bordes laterales de color, sin sombra difusa con borde de 1 px, sin
  vidrio (`backdrop-filter`), sin esquinas redondeadas en tarjetas (0 a 4 px), sin tarjetas
  idénticas repetidas como recurso por defecto.
- Contenido siempre visible sin JavaScript; ninguna animación oculta contenido.
- `prefers-reduced-motion`, `prefers-reduced-transparency`, `forced-colors` y `:focus-visible`
  cubiertos en `guia.css`. Desplazamientos por JS usan `MM.irA()` (respeta movimiento reducido).
- Responsive: sin scroll horizontal a 390 px; tablas anchas se desplazan dentro de su marco.

## Checklist antes de publicar

- [ ] La página enlaza `guia.css` y `guia.js`; no tiene `<style>` propio.
- [ ] `data-k` correcto en `<html>`; el índice del panel apunta a ids existentes.
- [ ] Ecuaciones clave con variables vivas.
- [ ] Autoevaluaciones registradas en el progreso guardado.
- [ ] Sin ids duplicados, anclas rotas ni SVG mal formados.
- [ ] Playwright: sin scroll horizontal a 390 y 1280, sin errores JS, contraste AA en claro y
  oscuro, cada interacción probada con teclado, navegador cerrado al final.

## Historial

- 2026-08-26 a 2026-09-24: Índigo profundo + coral (oscuro), Fraunces + Inter + JetBrains Mono,
  bandejas y nichos, doble bisel, entrada al hacer scroll, cuadrícula de fondo (2026-08-27).
- Antes de 2026-08-26: azul pizarra sobre fondo claro.

## Protocolo — pedir ilustraciones a otro agente (Antigravity/Codex)

Establecido 2026-08-26 (primero se aplicó, sin documentarlo, a Contabilidad Financiera; luego a
favicon/marca del sitio de este vault tras corrección de Navas). Repetir en toda pieza visual
futura, incluidos ahora los diagramas de modelos (ver actualización de abajo).

**Actualización 2026-08-27 — los diagramas de modelos también se delegan:** Navas pidió
explícitamente que los diagramas de modelos con ejes y datos reales (IS-LM, Phillips, Solow,
balances, cualquier gráfico basado en valores de Blanchard) dejen de ser una excepción — se ven y
se entienden mejor con ejecución artística real, y construirlos a mano le cuesta tiempo/tokens a
Claude sin necesidad. Regla nueva: **Claude sigue construyendo la geometría/datos exactos en un SVG
base** (ejes, curvas, puntos de equilibrio, etiquetas — la parte que depende de la fuente
verificada), y ese SVG base se entrega como parte del brief a Antigravity/Codex, quien solo hace el
**pulido visual** (acabado, sombreado, iconografía, textura) sin mover geometría ni cambiar
valores/etiquetas. Esto reemplaza la distinción anterior de este documento (que decía que Claude
construye los diagramas de datos "directamente", sin pasar por un brief) — ver `docs/Pedidos de
Imagen - Sitio.md` y `04 Materiales Generados/Pedidos de Imagen - Tema 1.md` (img-t1-02/03/04) como
ejemplo del formato de brief con línea base incluida.

**Qué sigue sin delegarse:** la geometría/datos en sí (Claude calcula y ubica curvas, puntos y
ejes a partir de las fuentes verificadas) y cualquier corrección posterior a esos datos si
Antigravity/Codex se desvía sin querer del SVG base — eso Claude lo revisa y corrige antes de
integrar, nunca lo deja pasar sin verificar contra el checklist.

**Identidad visual/ambientación (favicon, marca/logo, banners de header, escenas editoriales):**
sigue igual que antes de la actualización — se delega por completo, sin línea base de datos porque
no representan un dato real.

**Cómo estructurar el pedido:**
1. Dejar en el HTML una tarjeta placeholder `.img-request` (borde punteado gris, integrada al
   sistema de diseño de este curso — no un hueco roto) con un `ID` único (`img-docs-0X` para
   piezas del sitio, `img-t[N]-0X` para piezas de un Tema).
2. Crear un archivo `Pedidos de Imagen - [contexto].md` (ej. `docs/Pedidos de Imagen - Sitio.md`)
   con las reglas no negociables una sola vez, y un brief por imagen: ubicación exacta, propósito,
   contenido sugerido, estilo, `viewBox`, alt text, archivo destino.

**Reglas no negociables (repetirlas siempre, un agente nuevo no las hereda por defecto):**
- SVG de código completo, nunca PNG/JPG.
- Solo los colores hexadecimales de la paleta de arriba ("Capas del modelo"; en láminas oscuras, la columna "lámina").
- Si el SVG lleva texto: Archivo (etiquetas) o Azeret Mono (variables y cifras). Medir los recuadros con la fuente real: Azeret es más ancha que la mono anterior.
- Sin emoji como ícono estructural.
- `viewBox` responsive y `role="img"` + `aria-label` (salvo el favicon).

**Verificación sin usar `git`:** `device_stage_files` de los archivos modificados, script de
verificación estructural (cero placeholders restantes, tags balanceados, paleta respetada, sin
`<image>`/`xlink:href` externos), registrar el resultado en la bitácora correspondiente. Esta sesión
de Cowork nunca ejecuta `git` vía el puente de archivos — Navas hace el commit/push él mismo.

## Ver también

[[Errores Comunes a Evitar]] · [[Lecciones Aprendidas]] · `AGENTS.md` · `docs/Pedidos de Imagen - Sitio.md`
