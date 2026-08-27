---
tags: [curso, diseno, pedidos-de-imagen]
sources: "Generado por Claude a partir de docs/index.html (tratamiento de GitHub Pages, 2026-08-26; actualizado el mismo día dos veces más: rediseño de paleta a Índigo profundo + coral, y luego eliminación de todo gradiente del sitio)"
---

# Pedidos de Imagen — Sitio (docs/)

**Estado: ✅ completado 2026-08-26.** Antigravity entregó `favicon.svg` y `header-mark.svg` ya
recoloreados a Índigo profundo + coral y sin gradientes, integró el `header-mark.svg` directamente
en `docs/index.html` (quitó la tarjeta `.img-request` y los comentarios de marcador él mismo) y
marcó su propio checklist como cumplido. Claude verificó de nuevo por su cuenta (paleta exacta,
cero `gradient()`, `viewBox`, `role`/`aria-label`, balance de tags) antes de darlo por bueno. Este
documento se conserva como referencia histórica del proceso y como plantilla para el próximo
pedido de imagen de este sitio (ej. cuando se publique el primer Tema y haga falta una pieza nueva).

**Actualización 2026-08-27 — nuevo pedido pendiente (img-docs-03).** Navas pidió un banner tipo
hero para el sitio publicado (confirmado explícitamente: imagen grande debajo del header, no una
franja de aviso ni algo dentro de un módulo). Se agregó el brief más abajo y un marcador
`.img-request` en `docs/index.html` (sección `.hero-banner`, entre `</header>` y `<main>`) para que
Antigravity/Codex lo reemplace igual que se hizo con los dos pedidos anteriores. img-docs-01 y
img-docs-02 siguen completados y no requieren nada nuevo.

Este documento es para **Antigravity o Codex** (u otro agente de código con capacidad de generar
gráficos/ilustraciones), no para Claude. Corrige un error del pase anterior: el favicon y la
ilustración del header del sitio de GitHub Pages los construyó Claude directamente en vez de
pedirlos como brief — igual que ya se corrigió para las ilustraciones de contenido en el vault de
Contabilidad Financiera, este tipo de gráfico también debe salir de aquí, no de Claude.

**Actualización 2026-08-26 (paleta):** el sitio cambió de paleta por completo (de "azul pizarra"
sobre fondo claro a "Índigo profundo + coral" sobre fondo **oscuro**). Si ya tenías un brief
anterior de este archivo en caché, descártalo — los valores hexadecimales y el fondo de
referencia son distintos.

**Actualización 2026-08-26 (sin gradientes):** más tarde el mismo día se quitó *todo* gradiente
del sitio — el header ya no tiene los dos resplandores radiales de CSS que se mencionaban en
briefs anteriores de este documento; ahora es un fondo plano `#10172D`, sin ningún wash de color.
Esto cambia el encargo del header-mark (`img-docs-02`, más abajo): ya no es un complemento de un
efecto que pone el CSS, es la única fuente de interés visual en esa zona además de la tipografía
— puede (y debe) tener algo más de presencia que antes. La misma regla de "cero gradientes" aplica
también adentro de los SVG que entregues: nada de `<linearGradient>`/`<radialGradient>` como
relleno, usar capas de trazos con opacidad distinta en su lugar (como ya hiciste en la versión
anterior de `header-mark.svg` — esa técnica sigue siendo la correcta, solo hay que recolorearla).

## Antes de empezar — mismas reglas que en Contabilidad Financiera

1. **Formato: SVG de código, no imágenes rasterizadas (PNG/JPG).** `02 Curso/Sistema de Diseño
   HTML.md` prohíbe imágenes externas — todo visual es SVG inline. Entregar el código `<svg>`
   completo, no un archivo binario.
2. **Sin emoji como ícono estructural** — construir con `<path>`/`<circle>`/`<rect>`, estilo outline.
3. **Solo la paleta de este curso** (ver abajo) — nunca la paleta ámbar/oscura de Contabilidad
   Financiera ni la de FPEN; aunque ambas identidades ahora son oscuras, los hex son distintos y
   no deben mezclarse.
4. Cada SVG debe llevar `viewBox` responsive y `role="img"` + `aria-label` descriptivo (excepto el
   favicon, que por convención de navegador no lleva esos atributos).
5. **Cero funciones `gradient()` de cualquier tipo** (`linear-gradient`, `radial-gradient`,
   `repeating-*-gradient`, y su equivalente en SVG: `<linearGradient>`/`<radialGradient>` como
   `fill`) — regla explícita y estricta del sitio desde el 2026-08-26, no solo evitar el patrón de
   rayas repetidas. Todo relleno es color plano; la profundidad se logra con capas de trazos a
   distinta opacidad, no con degradados.
6. **Nada de sombras anchas (≥16px blur) combinadas con borde de 1px, ni `border-radius` mayor a
   16px** — defectos de estilo ya identificados y corregidos en el sitio; no reintroducirlos.

## Paleta — usar exactamente estos valores hexadecimales (Índigo profundo + coral, tema oscuro)

```
Fondo general:     #080C1C   (bg — página completa)
Superficie elevada:#10172D   (bg-elev — header, cards)
Superficie 2:      #1B223C   (bg-elev2 — hover)
Borde:             #2A324A
Texto principal:   #EFF2F9
Texto secundario:  #A3AABE
Índigo medio:      #667FDA   (acento secundario)
Coral:             #FF6F4A   (acento principal)
Coral claro:       #FFB188   (enlaces, hover)
Éxito:             #55C975
Error:             #FB5668   (no aplica a estos 2 pedidos)
```

Tipografía si el SVG lleva texto: **Fraunces** (títulos), **Inter** (400/600) o **JetBrains Mono**
(500) — nunca otra fuente. **El fondo del sitio ahora es oscuro** (`#080C1C`/`#10172D`), lo mismo
que Contabilidad Financiera (aunque con hex distintos) — diseñar ambas piezas para verse bien
sobre fondo oscuro, con el coral o el índigo medio como trazo de contraste.

## Cómo entregar

Devolver un bloque `<svg>...</svg>` completo por cada ID. Guardar el archivo `.svg` con el nombre
sugerido en `docs/assets/`. La integración en `docs/index.html` es: para el favicon, reemplazar el
archivo `docs/assets/favicon.svg` existente (mismo nombre, se sobreescribe); para el header, quitar
el comentario `<!-- Ilustración/marca decorativa del header: pedido de imagen... -->` e insertar el
SVG ahí, y quitar la tarjeta `.img-request` completa de `docs/index.html` una vez integradas ambas.

---

## img-docs-01 — Favicon del sitio

**Ubicación:** `<link rel="icon">` en el `<head>` de `docs/index.html`, archivo `docs/assets/favicon.svg`.

**Propósito:** ícono de pestaña del navegador para el sitio del curso.

**Contenido sugerido:** un símbolo simple y reconocible a tamaño de pestaña (16-32px) que evoque
macroeconomía sin depender de texto — por ejemplo dos curvas cruzándose (referencia visual a IS-LM,
el primer modelo grande del curso) o una "M" geométrica minimalista. Debe leerse bien incluso muy
pequeño: pocos elementos, trazos gruesos, alto contraste.

**Estilo:** fondo `#10172D` (superficie elevada) de esquinas redondeadas, trazo/figura en `#FF6F4A`
(coral) o `#EFF2F9` (texto claro) para contraste. Sin degradados — ni `<linearGradient>` ni
`<radialGradient>` como relleno, color plano únicamente. Si se usan dos curvas cruzándose, una en
coral y otra en índigo medio (`#667FDA`) refuerza la identidad de dos curvas del modelo IS-LM.

**Dimensiones:** `viewBox="0 0 32 32"`.

**Archivo:** `docs/assets/favicon.svg` (reemplaza la versión que ya entregaste antes — la lógica de
las dos curvas cruzadas con el punto de intersección funcionó bien, solo hay que recolorearla a
Índigo profundo + coral en vez de azul pizarra).

---

## img-docs-02 — Marca/ilustración decorativa del header

**Ubicación:** dentro de `<header>`, como elemento decorativo detrás o junto al título "Modelos
Macroeconómicos" en `docs/index.html`. Reemplaza el comentario que dice "Ilustración/marca
decorativa del header: pedido de imagen".

**Propósito pedagógico/de marca:** dar identidad visual al sitio sin depender de una foto ni de un
logo institucional — algo que un estudiante de macro reconozca de un vistazo (curvas de un modelo,
no un ícono genérico de "educación" o "gráfica de barras" de stock).

**Contenido sugerido:** una composición abstracta con 2-3 curvas o líneas al estilo de un diagrama
IS-LM o de oferta/demanda agregada (ejes implícitos, sin necesidad de rotularlos como en los
diagramas de contenido), lo bastante sutil para no competir con el título en texto. Puede incluir un
punto de equilibrio marcado. Evitar que se vea como un gráfico de datos real (no es un diagrama
técnico con cifras) — es una pieza de marca/ambientación.

**Importante — el header ahora es plano:** ya no hay resplandores de CSS detrás del título (se
quitaron todos los gradientes del sitio); esta ilustración es la única fuente de interés visual en
el header aparte de la tipografía. Puede tener un poco más de presencia/contraste que en el brief
anterior — no tiene que competir con un efecto de fondo que ya no existe, solo con el propio texto
del título.

**Estilo:** trazos en `#FF6F4A` (coral) y/o `#667FDA` (índigo medio) sobre el fondo plano `#10172D`
del header — sin `<linearGradient>`/`<radialGradient>` como relleno, solo capas de trazos a
distinta opacidad (0.3–0.7) para dar profundidad, sin distraer del texto del título, que debe
seguir siendo completamente legible (el título usa Fraunces en `#EFF2F9` con la palabra
"Macroeconómicos" en cursiva coral).

**Dimensiones:** `viewBox` proporción amplia y baja, ej. `0 0 400 280`, pensado para posicionarse a
la derecha del header (`position:absolute`) sin invadir el texto de la izquierda (el header actual
centra el contenido en un `max-width:660px`, así que hay espacio a los costados en pantallas anchas).

**Archivo:** `docs/assets/header-mark.svg` (reemplaza la versión ya entregada — la composición de
curvas con ejes punteados y puntos de equilibrio también funcionó bien; solo recolorear a
`#FF6F4A`/`#667FDA` en vez de `#3A6EA5`/`#1E3A5F`, y quitar la referencia visual a `#E8F1F8`).

---

## Checklist antes de entregar

- [x] Es un bloque `<svg>` de código, no un PNG/JPG adjunto.
- [x] Usa únicamente los colores hexadecimales de la paleta Índigo profundo + coral de arriba.
- [x] Usa únicamente Fraunces/Inter/JetBrains Mono si lleva texto.
- [x] El favicon se lee bien a tamaño de pestaña (16px); pocos elementos, trazos gruesos.
- [x] La marca del header no compite visualmente con el título ni baja su legibilidad.
- [x] `viewBox` responsive en ambos.
- [x] Cero funciones `gradient()` en cualquier parte (CSS o `<linearGradient>`/`<radialGradient>`
  dentro del SVG) — solo color plano y capas de trazos con opacidad.
- [x] Ninguna sombra ancha + borde combinados, ni radios >16px.

---

## img-docs-03 — Banner hero del sitio (pendiente, pedido 2026-08-27)

**Ubicación:** sección `.hero-banner` en `docs/index.html`, entre `</header>` y `<main>` —
ahora mismo contiene una tarjeta `.img-request` de marcador. Reemplazar **toda la sección**
`<section class="hero-banner">...</section>` (incluida la tarjeta) por el markup final con el SVG.

**Propósito:** Navas pidió explícitamente un banner para el sitio publicado; al preguntarle qué
tipo, confirmó: una **imagen grande tipo hero**, debajo del header actual, a modo de portada visual
del sitio — no una franja de aviso angosta ni algo metido dentro de un módulo existente.

**Contenido sugerido:** una composición más amplia y horizontal que la del `header-mark.svg`
(que es pequeña y vive detrás del título) — pensada para ocupar una franja de ancho completo por sí
sola. Puede ampliar la misma idea visual del header (curvas de un modelo macro, puntos de
equilibrio) a mayor escala y con más presencia, o proponer una composición distinta que funcione a
lo ancho de toda la pantalla — evitar que se vea como una repetición recortada del `header-mark`
existente. Sigue sin ser un diagrama técnico con ejes rotulados ni cifras (eso son los diagramas de
contenido de cada Guía, que Claude construye directamente) — es una pieza de marca/ambientación.

**Estilo:** mismas reglas que img-docs-01 y img-docs-02 — SVG de código (no PNG/JPG), solo la
paleta Índigo profundo + coral de este documento, cero funciones `gradient()` en cualquier parte
(ni CSS ni `<linearGradient>`/`<radialGradient>` como `fill` dentro del SVG) — profundidad con capas
de trazos a distinta opacidad. Si lleva texto, solo Fraunces/Inter/JetBrains Mono. Debe verse bien
sobre el fondo plano `#080C1C`/`#10172D` del sitio.

**Dimensiones — distinción importante:** esto es un banner que se extiende **a lo ancho, no a lo
largo**. Es una franja horizontal de proporción muy ancha y baja — `viewBox="0 0 1600 320"` o
similar (ancho:alto ≈ 4:1 o 5:1) — nunca una imagen alta/vertical. A diferencia de
`header-mark.svg` (pequeña, vive detrás del título, se recorta en una esquina), este SVG ocupa el
100% del ancho de la pantalla dentro de `.hero-banner` y debe verse bien tanto muy ancho (desktop)
como angosto (móvil) sin perder su franja horizontal — el contenido interno debe poder recortarse
por los lados en pantallas angostas sin que la composición dependa de ver los bordes completos.

**Archivo:** `docs/assets/hero-banner.svg` (nuevo — no reemplaza ningún archivo existente).

**Integración:** al recibir el SVG, quitar la tarjeta `.img-request` completa de `docs/index.html`
dentro de `<section class="hero-banner">` y poner el `<svg>` entregado en su lugar, con
`width:100%; height:auto; display:block;` y **sin** `max-width` — debe llenar el ancho completo de
la sección, que ya no tiene límite de 700px (a diferencia de `<main>`). Conservar
`<section class="hero-banner">` como contenedor. La clase CSS `.img-request` y su badge pueden
quedarse en el `<style>` sin usarse (ya sirvieron de plantilla para dos pedidos anteriores) o
quitarse si Antigravity/Codex prefiere limpiar el archivo — no es obligatorio.

### Checklist antes de entregar (img-docs-03)

- [ ] Es un bloque `<svg>` de código, no un PNG/JPG adjunto.
- [ ] Usa únicamente los colores hexadecimales de la paleta Índigo profundo + coral de arriba.
- [ ] Usa únicamente Fraunces/Inter/JetBrains Mono si lleva texto.
- [ ] `viewBox` ancho y bajo, pensado para ancho completo de pantalla, no para una esquina.
- [ ] Cero funciones `gradient()` en cualquier parte — solo color plano y capas de trazos con opacidad.
- [ ] Ninguna sombra ancha + borde combinados, ni `border-radius` mayor a 16px.
- [ ] No se ve como un diagrama técnico con ejes/cifras — es pieza de marca, no un gráfico de datos.

---

## Ver también

`docs/index.html` (los 2 pedidos están marcados ahí con comentarios y una tarjeta de borde
punteado coral) · `02 Curso/Sistema de Diseño HTML.md` · `AGENTS.md`
