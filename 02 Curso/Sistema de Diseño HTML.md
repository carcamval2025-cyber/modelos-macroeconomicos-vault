---
tags: [curso, diseno, html]
---

# Sistema de Diseño — Materiales HTML

Aplica a Guías, Actividades y Repasos en HTML (no a Tarea/Control/Pauta, que se producen en Word o PDF), y también al sitio publicado en `docs/` (ver `AGENTS.md`, sección GitHub Pages).

**Actualización 2026-08-26 (rediseño completo):** Navas pidió una pasada de diseño con
`/impeccable`, `/design-system`, `/design-critique` y `/frontend-design` porque la identidad
anterior (azul pizarra sobre fondo claro) se sentía "muy sosa". Se reemplazó por completo la
paleta y la tipografía — ver abajo. Esto aplica a **todo el sistema**: el sitio de `docs/` y
todo material nuevo de Guía/Actividad/Repaso a partir de esta fecha. Material ya entregado
antes de esta fecha no se retroactivea salvo que Navas lo pida explícitamente.

**Actualización 2026-08-26 (estructura modular):** en la misma sesión, Navas pidió además que el
sitio fuera "modular", señalando como referencia el sitio de un cliente de Velkor (proyecto
"Retablo"): un menú que funciona como mueble que se recorre, no una lista larga, con el
contenido dividido en "bandejas" numeradas que a su vez contienen "nichos". Se adaptó ese
principio (sin copiar el contenido ni la paleta del ejemplo, solo la lógica estructural) — ver
"Estructura modular" más abajo. `docs/index.html` ya sigue este patrón; es el layout de
referencia para cualquier página nueva de `docs/` o de un Tema.

**Actualización 2026-08-26 (sin gradientes + acabado premium):** tercera pasada el mismo día con
`/gpt-taste` y `/high-end-visual-design`. Navas pidió quitar el fondo con gradiente del header y
mejorar la dirección de diseño en general. Se aplicaron los principios de esas dos guías que son
compatibles con las reglas técnicas ya establecidas de este sitio (HTML plano, sin build, sin
librerías externas, sin imágenes externas, radios de tarjeta ≤16px, sin glassmorphism por
defecto): fondo del header ahora es un color plano (`--bg-elev`, sin ninguna función `gradient()`
en el CSS), componentes clave con arquitectura de "doble bisel" (marco exterior + núcleo interior,
ver abajo), y una entrada suave al hacer scroll en los módulos con `IntersectionObserver` que
nunca oculta contenido si JavaScript falla o tarda. **No se cambió la tipografía**: ambas guías
recomiendan evitar Inter en solitario, pero aquí Inter ya va emparejado con Fraunces (serif de
carácter) desde la pasada anterior — el problema real que esa regla evita (Inter solo, sin
contraste tipográfico) ya estaba resuelto, así que cambiar de fuente otra vez habría sido ruido
sin motivo. Tampoco se importó React/Tailwind/GSAP: esas guías asumen ese stack, pero este sitio
es HTML/CSS/JS plano a propósito (debe abrir sin servidor ni build) — se tradujeron los principios
de composición y acabado a CSS vanilla en vez de adoptar el stack completo.

## Tipografía

- **Fraunces** (Google Fonts, variable — ejes `ital`/`opsz`/`wght`, pesos 500–700) — títulos
  (`h1`–`h3`). Serif de carácter editorial, itálica reservada para dar énfasis puntual dentro
  de un título (ej. una palabra clave), no para cuerpos de texto completos.
- **Inter** (400/500/600/700) — texto general, cuerpo, componentes de UI.
- **JetBrains Mono** (500/600) — ecuaciones, notación y variables (ej. `Y = C + I + G + X − M`),
  metadatos técnicos (fechas, capítulos, badges de estado), y ejes/etiquetas de las curvas en
  los diagramas de modelos.

*(Antes: Inter + JetBrains Mono únicamente. Se agrega Fraunces para dar carácter tipográfico
— dos sans-serif similares sin contraste no es una pareja tipográfica real; serif + sans sí lo
es.)*

## Paleta — Índigo profundo + coral (tema oscuro)

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#080C1C` | Fondo general de página (tema oscuro, no claro como antes) |
| `--bg-elev` | `#10172D` | Superficies elevadas: headers, cards, tarjetas de contenido |
| `--bg-elev2` | `#1B223C` | Superficies aún más elevadas / estados hover |
| `--border` | `#2A324A` | Bordes sutiles entre superficies |
| `--text` | `#EFF2F9` | Texto principal sobre fondo oscuro |
| `--text-dim` | `#A3AABE` | Texto secundario, metadatos, subtítulos |
| `--indigo-mid` | `#667FDA` | Acento secundario — hover, links de metadatos, curva secundaria en diagramas (ej. LM) |
| `--coral` | `#FF6F4A` | Acento principal — énfasis en títulos, focos de atención, curva primaria en diagramas (ej. IS), badge de "atención" |
| `--coral-2` | `#FFB188` | Coral claro — enlaces de texto, hover suave sobre fondo oscuro |
| `--success` | `#55C975` | Respuestas correctas, estado "Disponible" |
| `--danger` | `#FB5668` | Errores, respuestas incorrectas |

Todos los pares texto/fondo relevantes fueron verificados contra WCAG AA (contraste ≥4.5:1
para texto normal): `--text` sobre `--bg` da 17.36:1, `--text-dim` sobre `--bg-elev` da 7.65:1,
`--coral` sobre `--bg-elev` da 6.45:1, `--coral-2` sobre `--bg` da 11.02:1 — ningún par usado
para texto legible baja de 6:1.

**Cómo aplicar tintes de estado sobre fondo oscuro:** a diferencia de la paleta anterior (fondos
pastel sólidos como `#E8F1F8`), aquí los tintes se logran con transparencia del color semántico
sobre `--bg-elev`: `rgba(85,201,117,0.12)` para fondo de "correcto"/"disponible",
`rgba(251,86,104,0.12)` para "incorrecto"/error, `rgba(255,111,74,0.06–0.1)` para cajas de
atención o pedidos de imagen. El texto del tinte usa el color semántico sólido (`--success`,
`--danger`, `--coral`), nunca blanco/negro genérico.

*(Identidad distinta a la de Macro I —verde— y también distinta a la paleta clara anterior de
este mismo curso. Ajustable solo si Navas lo pide explícitamente.)*

## Layout — siempre incluir

- Encabezado con nombre del curso, tema y semana, sobre `--bg-elev` **plano, sin ninguna función
  `gradient()`** (ni radial ni lineal) — la profundidad la dan la tipografía, el espaciado y el
  doble bisel de los componentes, no un wash de color de fondo.
- Paneles de métricas o progreso visible.
- Tarjetas con íconos SVG (nunca emoji).
- Retroalimentación con borde completo + tinte de fondo del color correspondiente (no una franja
  de 4px solo en el borde izquierdo — decisión de Navas del 2026-08-26, para unificar criterio
  con Contabilidad Financiera; ver [[Errores Comunes a Evitar]]).
- Diagramas de modelos (IS-LM, Phillips, Solow) como SVG con ejes rotulados: curva/eje principal
  en `--coral`, curva/eje secundario en `--indigo-mid`, sobre fondo `--bg-elev` — nunca imágenes
  externas ni capturas del libro.
- La página se organiza en **módulos numerados** (ver "Estructura modular" abajo) en vez de
  secciones sueltas sin jerarquía visible entre ellas.

## Estructura modular ("bandejas" y "nichos")

Patrón de layout adoptado 2026-08-26 para `docs/index.html` y layout de referencia para material
futuro. La idea: la página se recorre como un mueble con compartimentos rotulados, no como una
lista larga de secciones sin límites visibles.

- **Módulo** = una sección de primer nivel de la página (ej. "Sobre este sitio", "Ruta del curso",
  "Recursos"). Cada módulo lleva un folio numerado (`01`, `02`, `03`…) en Fraunces itálica,
  `color:var(--text-dim)` — discreto, nunca en `--coral` (el coral es para el título, no para el
  número; así el folio no compite con el énfasis real de la página). Separador `border-top` entre
  módulos, nunca decoración adicional.
- **Nav de módulos**: un menú corto de anclas (`#modulo-id`) arriba del primer módulo, con
  apariencia de control físico (fondo `--bg-elev`, radio 10px, padding interno) — no una barra de
  navegación genérica de sitio web.
- **Nicho** = una unidad de contenido repetible dentro de un módulo (ej. cada uno de los 7 Temas).
  Los nichos van en una cuadrícula (`grid-template-columns:repeat(auto-fit,minmax(...,1fr))`) con
  **bordes compartidos entre celdas** (técnica: fondo del contenedor = `--border`, `gap:1px`, cada
  celda con su propio `background`) — esto crea un solo mueble con divisiones, no tarjetas sueltas
  flotando con `gap` y sombra cada una (evita el cliché de "grilla de tarjetas idénticas").
- **Cuándo usar numeración real vs. decorativa**: los folios de módulo (01/02/03) son válidos aquí
  porque son el sistema de navegación real de la página (aparecen también en el menú de anclas),
  no una etiqueta puesta por costumbre. Dentro de un nicho, el número (ej. "01" de un Tema) sí es
  además secuencia cronológica real (orden del cronograma). Nunca agregar folios a elementos que
  no participan de ninguna de las dos lógicas (navegación real o secuencia real).
- **Qué queda fuera del sistema de módulos**: notas internas para otro agente (`.img-request`) no
  se numeran ni cuentan como módulo — son metadatos de proceso, no contenido del curso; se
  presentan con su propio estilo (borde punteado) para que se lean como algo aparte.

## Doble bisel (marco + núcleo)

Patrón adoptado 2026-08-26 (inspirado en `/high-end-visual-design`, adaptado a CSS plano y a los
radios ≤16px de este sistema — no se copió el `rounded-[2rem]` de esa guía, es demasiado grande
para esta identidad). Reemplaza la caja de un solo borde plano en componentes que lo ameriten
(no en todo — ver abajo).

- **Marco exterior** (`.bezel`): padding pequeño (4–5px), fondo casi imperceptible
  (`rgba(239,242,249,0.035)`), borde de 1px `--border`, radio ~15px.
- **Núcleo interior** (`.bezel-in`): el contenido real, fondo `--bg-elev`, radio ~11px (menor al
  del marco para que las curvas queden concéntricas), `overflow:hidden` si adentro hay una
  cuadrícula de bordes compartidos (nichos), sombra interior de 1px casi invisible
  (`inset 0 1px 0 rgba(239,242,249,0.05)`) para sugerir una superficie física, no solo un color.
- **Dónde usarlo**: componentes de contenido terminado y singulares en la página (ej. el bloque de
  nichos de "Ruta del curso"). **Dónde NO usarlo**: `.img-request` (debe leerse como incompleto/
  placeholder, por eso mantiene su borde punteado simple) ni elementos que se repiten muchas veces
  seguidas (aplicarlo a cada nicho individual, en vez de una sola vez al bloque completo, se vería
  recargado).
- Los chips del header (bibliografía, semanas, repositorio) usan la misma lógica a escala pequeña:
  marco tenue + relleno con fondo `--bg` y borde `--border`, en vez de una sola caja con un borde.

## Entrada al hacer scroll (segura por defecto)

Patrón adoptado 2026-08-26 para dar más vida a los módulos sin arriesgar contenido invisible.

- El contenido es visible por defecto en CSS (`.reveal` sin más, sin `opacity:0`). El JS agrega
  una clase (`.reveal-play`) **solo si** `IntersectionObserver` existe en el navegador y el
  usuario no pidió `prefers-reduced-motion: reduce` — únicamente esa combinación de clases oculta
  el contenido antes de animarlo. Si JavaScript falla, tarda, o el navegador no soporta la API, el
  contenido simplemente no se anima y se ve completo desde el primer render.
- Nunca ocultar contenido solo con CSS a la espera de que JS lo revele — esa es la causa más común
  de secciones que aparecen en blanco (JS que no corre a tiempo, un renderizador headless, una
  pestaña en segundo plano).
- Transición solo con `transform`/`opacity` (nunca propiedades de layout como `top`/`height`) y la
  curva ya establecida `--ease` — no introducir curvas nuevas sin motivo.

## Reglas técnicas

- Sin `<form>` HTML — usar eventos JS.
- **Sin ninguna función `gradient()` en fondos** (ni `linear-gradient`, ni `radial-gradient`, ni
  `repeating-*-gradient`) — regla explícita de Navas del 2026-08-26, más estricta que solo prohibir
  el patrón de rayas repetidas. Backgrounds siempre color plano de la paleta.
- Sin `box-shadow` ancho (≥16px de blur) combinado con borde de 1px en la misma tarjeta, sin
  `border-radius` mayor a 16px en tarjetas (los pills de badges/tags sí pueden ser completamente
  redondeados), sin colores fuera de la paleta, sin `backdrop-filter`/glassmorphism por defecto.
- Compatible con apertura directa en navegador, sin servidor, sin build, cero dependencias
  externas (nada de React/Tailwind/GSAP/librerías de íconos) — HTML/CSS/JS plano siempre.
- Responsive para pantalla de computadora.

Ver [[Lecciones Aprendidas]] por ajustes de diseño que hayan surgido de retroalimentación real
(por ejemplo, si algún diagrama SVG resultó confuso o un color no se leyó bien).


## Checklist de curación (anti-AI-slop)

- [ ] Ningún elemento usa franja de acento de 4px solo en el borde izquierdo —
  borde completo + tinte en su lugar.
- [ ] Ninguna tarjeta combina borde de 1px + sombra ancha (≥16px blur) a la vez.
- [ ] Ningún fondo usa ninguna función `gradient()` (lineal, radial o repetida).
- [ ] Si hay animación de entrada al hacer scroll, el contenido es visible por defecto en CSS y
  solo se oculta vía una clase que JS agrega tras confirmar soporte — nunca oculto de entrada.
- [ ] `border-radius` de tarjetas ≤16px (pills de badges exceptuados).
- [ ] Elementos interactivos (tabs, acordeón, quiz) con `role`/`tabindex`/`aria-*`
  y respuesta a teclado, no solo a clic.
- [ ] Estado `:focus-visible` visible.
- [ ] Bloque `@media (prefers-reduced-motion: reduce)` si hay animaciones.
- [ ] Contraste WCAG AA verificado, no asumido.
- [ ] Cero librerías JS externas, cero emojis funcionales.
- [ ] Abre y funciona directo en el navegador, sin servidor.
- [ ] Un solo "eyebrow" tipográfico como máximo por página, nunca uno por sección.
- [ ] Números de sección (01/02/03) solo si el contenido es una secuencia real.

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
1. Dejar en el HTML una tarjeta placeholder `.img-request` (borde punteado coral, integrada al
   sistema de diseño de este curso — no un hueco roto) con un `ID` único (`img-docs-0X` para
   piezas del sitio, `img-t[N]-0X` para piezas de un Tema).
2. Crear un archivo `Pedidos de Imagen - [contexto].md` (ej. `docs/Pedidos de Imagen - Sitio.md`)
   con las reglas no negociables una sola vez, y un brief por imagen: ubicación exacta, propósito,
   contenido sugerido, estilo, `viewBox`, alt text, archivo destino.

**Reglas no negociables (repetirlas siempre, un agente nuevo no las hereda por defecto):**
- SVG de código completo, nunca PNG/JPG.
- Solo los colores hexadecimales de la paleta de arriba (Índigo profundo + coral).
- Solo Fraunces/Inter/JetBrains Mono si el SVG lleva texto.
- Sin emoji como ícono estructural.
- `viewBox` responsive y `role="img"` + `aria-label` (salvo el favicon).

**Verificación sin usar `git`:** `device_stage_files` de los archivos modificados, script de
verificación estructural (cero placeholders restantes, tags balanceados, paleta respetada, sin
`<image>`/`xlink:href` externos), registrar el resultado en la bitácora correspondiente. Esta sesión
de Cowork nunca ejecuta `git` vía el puente de archivos — Navas hace el commit/push él mismo.

## Ver también

[[Errores Comunes a Evitar]] · [[Lecciones Aprendidas]] · `AGENTS.md` · `docs/Pedidos de Imagen - Sitio.md`
