# AGENTS.md — Vault Modelos Macroeconómicos

Este archivo es el punto de entrada agnóstico de herramienta: cualquier agente de IA
(Claude, Antigravity, Codex, Cursor, Aider, etc.) que abra esta carpeta debe leerlo
primero. A diferencia de `00 Inicio/00 Inicio.md` (pensado para Obsidian: usa
`[[wikilinks]]` y bloques Dataview que solo se renderizan con esos plugins), este
documento usa únicamente markdown plano y rutas de archivo relativas, para que
funcione igual sin Obsidian.

## Handoff del 2026-08-26 — resuelto 2026-08-27

Nota completa en `01 Meta - Aprendizaje/Handoff - Sesión Macro (2026-08-26).md` (la dejó una
sesión de Claude que trabajó aquí por error, adjunta al Project de Contabilidad Financiera).
Los dos pedidos pendientes de Navas ya se resolvieron:

- **"Se ve aplastada"** → confirmado con Navas: espaciado general, los nichos de los 7 Temas, y
  el header/hero. Corregido directamente en `docs/index.html` (más padding en header, más
  separación entre módulos, más padding interno en cada nicho) — sin tocar la paleta ni la
  estructura modular.
- **"Banner"** → confirmado con Navas: imagen grande tipo hero debajo del header. Se agregó la
  sección `.hero-banner` en `docs/index.html` con un marcador `.img-request`, y el brief
  `img-docs-03` en `docs/Pedidos de Imagen - Sitio.md` — pendiente de que Antigravity/Codex
  entregue el SVG (Claude no construye ilustraciones de marca directamente, ver protocolo abajo).

## Qué es esto

Base de conocimiento persistente para **Modelos Macroeconómicos** (Macro II, ESEN,
Tercer Ciclo 2026, catedrático Luis Morera). Estudiante: Carlos Navas.

**Las instrucciones maestras completas del curso viven en un Claude Project separado
("Modelos Macroeconómicos"), no en este repositorio.** Este vault es la memoria de
largo plazo alrededor de ese trabajo: seguimiento del curso semana a semana y
bitácora de qué funcionó y qué no en cada material generado. Un agente sin acceso a
ese Project no puede leer las instrucciones maestras directamente — las reglas que sí
importan para no romper nada están resumidas más abajo y en `02 Curso/`. Ante
cualquier duda, es mejor preguntar al usuario que inventar contenido o asumir alcance.

## Reglas que nunca se rompen (heredadas del Claude Project)

1. **Regla crítica de alcance**: nunca producir material de evaluación (Tarea,
   Control, Pauta) sobre un tema que todavía no se ha impartido según
   `02 Curso/Cronograma.md`. Si una semana no tiene un Tema nuevo asignado, se asume
   continuación del tema de la semana anterior — salvo que el usuario indique
   explícitamente hasta dónde llegó la clase (campo ALCANCE, ver más abajo).
2. **El contenido nunca debe exceder el ALCANCE declarado**, aunque pertenezca al
   mismo tema — no adelantar subtemas todavía no vistos en clase.
3. **Jerarquía de fuentes, en este orden**: (1) Programa y Cronograma del curso —
   máxima autoridad sobre alcance, fechas y ponderaciones; (2) Blanchard,
   *Macroeconomics* 9e; (3) Sala i Martín, *Economía en Colores* (capítulo amarillo,
   solo para repaso del Tema 1); (4) cualquier otro PDF futuro, una vez confirmado por
   el profesor. Mapa Tema→Capítulo en `02 Curso/Fuentes y Bibliografía.md`.
4. **Nunca inventar series de datos, tasas o cifras "representativas".** Usar
   únicamente cifras y ejemplos que aparezcan explícitamente en los PDFs del proyecto.
   El Salvador puede usarse como contexto solo si el dato real aparece en las fuentes
   cargadas; si no hay un dato real disponible, usar los ejemplos y economías
   hipotéticas del propio Blanchard.
5. **Tarea, Control y Pauta son siempre borradores de trabajo para el profesor** —
   deben revisarse y ajustarse antes de publicarse o imprimirse, y nunca se entregan a
   los estudiantes como material generado por IA. El Programa del curso prohíbe
   explícitamente el uso de IA por parte de los estudiantes durante tareas y pruebas.
   Guía HTML / Actividad HTML / Repaso sí son para consumo directo del estudiante
   (Navas) y siguen un flujo distinto al de Tarea/Control/Pauta.
6. Antes de generar cualquier material, exigir el formato de solicitud completo (ver
   `01 Meta - Aprendizaje/Protocolo de Sesión.md`) y preguntar si algo falta o es
   ambiguo — nunca asumir SEMANA, TEMA, ALCANCE o TIPO.

## Formato de solicitud requerido antes de generar cualquier material

Ver `01 Meta - Aprendizaje/Protocolo de Sesión.md` para el detalle completo, pero en
resumen cada solicitud debe declarar:

```
SEMANA:   [número según cronograma]
TEMA:     [nombre del tema, según el mapa Tema→Capítulo]
SUBTEMA:  [sección específica dentro del tema]
TIPO:     [Guía HTML / Actividad HTML / Repaso / Tarea / Control / Pauta]
FORMATO:  [HTML / Word / PDF — si se omite, se asume el formato por defecto]
OBJETIVO: [qué debe poder hacer el estudiante —o el profesor, si es Tarea/Control/Pauta]
ALCANCE:  [qué clases de la semana ya se impartieron y hasta dónde llegó el contenido]
RESTRICCIONES: [extensión, nivel, etc. — si aplica, sino omitir]
```

## Estructura de carpetas

- `00 Inicio/` — nota índice del vault (`00 Inicio.md`); `Inicio.md` es un stub que
  redirige ahí (no borrado porque el puente de archivos no tiene permiso de borrar en
  esta carpeta).
- `01 Meta - Aprendizaje/` — `Protocolo de Sesión.md` (formato de solicitud y
  checklist previo a generar), `Bitácora de Retroalimentación.md` (registro de qué
  funcionó/falló en cada entrega — vacía por ahora), `Lecciones Aprendidas.md`
  (patrones promovidos desde la bitácora — vacía por ahora).
- `02 Curso/` — `Cronograma.md` (calendario oficial de 12 semanas con Tareas,
  Controles y Parciales), `Sistema de Evaluación.md` (ponderación: Tareas 10%,
  Controles 20%, Parcial 35%, Final 35%), `Fuentes y Bibliografía.md` (jerarquía de
  fuentes y mapa Tema→Capítulo), `Sistema de Diseño HTML.md` (paleta y componentes
  para Guía/Actividad/Repaso — ver nota abajo).
- `03 Temas/` — una nota por tema (Tema 1 … Tema 7), cada uno ligado a su semana y
  capítulo correspondiente.
- `04 Materiales Generados/` — `04 Materiales Generados.md` (índice, actualmente sin
  materiales generados) e `Índice de Materiales.md` (stub redirigido, mismo motivo de
  no-borrado que en `00 Inicio/`).
- `_Plantilla de Material.md` — plantilla para registrar un material nuevo en
  `04 Materiales Generados/`.
- `README.md` — una línea, identificación del repositorio.
- `docs/` — sitio estático publicado en GitHub Pages (índice único + una carpeta por
  Tema disponible, mismo patrón que los otros vaults del usuario). Repo:
  `github.com/carcamval2025-cyber/modelos-macroeconomicos-vault` (público desde
  2026-08-26), Pages sirve desde `main` / `docs`. Ver sección de Pages más abajo.

## Sistema de diseño HTML (solo para Guía / Actividad / Repaso — no aplica a Tarea/Control/Pauta, que son Word/PDF)

**Actualización 2026-08-26 (rediseño completo — leer esto, no una versión en caché):**
Navas pidió una pasada de diseño (`/impeccable` `/design-system` `/design-critique`
`/frontend-design`) porque la identidad anterior ("azul pizarra" sobre fondo claro) se
sentía sosa. Se reemplazó **toda la paleta y tipografía**, para el sitio de `docs/` y
para todo material nuevo de Guía/Actividad/Repaso — detalle completo en
`02 Curso/Sistema de Diseño HTML.md`.

Tipografía: **Fraunces** (títulos, serif de carácter) + **Inter** (400–700, cuerpo) +
**JetBrains Mono** (500/600, ecuaciones como `Y = C + I + G + X − M`, metadatos).

Paleta — **Índigo profundo + coral**, tema oscuro (antes era claro): `#080C1C` fondo
general, `#10172D`/`#1B223C` superficies elevadas, `#2A324A` bordes, `#EFF2F9` texto
principal, `#A3AABE` texto secundario, `#667FDA` índigo medio (acento secundario, curva
LM), `#FF6F4A` coral (acento principal, curva IS, énfasis), `#FFB188` coral claro
(enlaces), `#55C975` éxito/disponible, `#FB5668` error. Todos los pares texto/fondo
verificados en WCAG AA (≥6:1 en los casos usados). Esta identidad sigue siendo
intencionalmente distinta a la de Macro I (verde) y ahora también distinta a la propia
paleta clara anterior de este curso — ajustable solo si Navas lo pide.

El side-stripe de retroalimentación sigue siendo borde completo + tinte de fondo (no
franja de 4px en el borde izquierdo) — eso no cambió con el rediseño de color.

**Estructura modular ("bandejas"/"nichos")**: el mismo día, Navas pidió que el sitio fuera
modular, con el sitio de un cliente de Velkor ("Retablo") como referencia de layout — menú como
mueble que se recorre, contenido en módulos numerados que contienen "nichos" en cuadrícula con
bordes compartidos, en vez de secciones sueltas o grilla de tarjetas idénticas. `docs/index.html`
ya sigue este patrón (`02 Curso/Sistema de Diseño HTML.md`, sección "Estructura modular") — es el
layout de referencia para cualquier página nueva de `docs/` o de un Tema.

**Pedidos de imagen a otro agente (Antigravity/Codex)**: `02 Curso/Sistema de Diseño
HTML.md` tiene ahora una sección "Protocolo — pedir ilustraciones a otro agente" —
úsala para cualquier pieza de identidad visual (favicon, marca del sitio,
ilustraciones decorativas). Los diagramas de modelos con datos (IS-LM, Phillips,
Solow) los sigue construyendo la sesión de Claude directamente, nunca se delegan.

Reglas técnicas: sin `<form>` (usar eventos JS), sin gradientes/sombras
decorativas/colores fuera de paleta, debe abrir directo en navegador sin servidor,
responsive para escritorio, diagramas de modelos (IS-LM, Phillips, Solow) siempre como
SVG inline etiquetado, nunca imágenes externas ni capturas de libro.

## GitHub Pages (`docs/`) — establecido 2026-08-26

El repo ya es público, así que Pages funciona directo: en GitHub, Settings → Pages →
"Deploy from a branch" → rama `main`, carpeta `/docs` (si aún no está activado,
activarlo ahí una sola vez).

`docs/index.html` es un índice único con una tarjeta por cada uno de los 7 Temas del
curso (nombre, capítulo de Blanchard, semana, estado). Como a la fecha de creación de
este sitio `04 Materiales Generados/` seguía vacío, las 7 tarjetas arrancan en estado
"Pendiente" y sin enlace — es un armazón (*scaffold*), no un sitio con contenido todavía.

**Convención para agregar una página cuando se genere el primer material real de un
Tema** (Guía HTML / Actividad HTML / Repaso — nunca Tarea/Control/Pauta, ver regla 5
de arriba):
1. Publicar el HTML del material en `docs/tema-0N/index.html` (mismo contenido que se
   entrega al usuario, sin cambios de fondo).
2. En `docs/index.html`, dentro del arreglo `TEMAS` del `<script>`, cambiar
   `disponible:false` a `disponible:true` para ese Tema — la tarjeta se activa sola.
3. Registrar la publicación en `04 Materiales Generados/` como con cualquier entrega.

**Regla que no se negocia sobre este sitio**: `docs/` es público en internet. Nunca
publicar ahí una Tarea, un Control o su Pauta, ni borradores dirigidos al profesor —
esas rutas de trabajo terminan en Word/PDF entregado directamente a Navas o al
profesor, jamás en `docs/`.

Diseño del índice: mismas tipografías y paleta Índigo profundo + coral de
`02 Curso/Sistema de Diseño HTML.md` (rediseño 2026-08-26) — ya no usa colores fuera de
la paleta documentada; el badge "Disponible" usa el token semántico `--success`
(`#55C975`) definido ahí mismo, no un verde ad-hoc como en la versión anterior. El
índice sigue la estructura modular ("bandejas"/"nichos") descrita más arriba: los 7
Temas viven como nichos en cuadrícula de bordes compartidos dentro del módulo "02 Ruta
del curso", no como timeline ni como grilla de tarjetas idénticas.

## Cómo trabajar aquí

1. Antes de generar material: revisar `01 Meta - Aprendizaje/Lecciones Aprendidas.md`
   y la nota del Tema correspondiente en `03 Temas/`.
2. Exigir el formato de solicitud completo (ver arriba) antes de generar nada; si
   falta un campo o hay ambigüedad de alcance, preguntar al usuario.
3. Verificar que el tema ya se haya impartido según `02 Curso/Cronograma.md` antes de
   producir cualquier material de evaluación.
4. Después de generar: registrar el resultado en `04 Materiales Generados/` (usando
   `_Plantilla de Material.md`) y, tras recibir retroalimentación, añadir una entrada
   en `01 Meta - Aprendizaje/Bitácora de Retroalimentación.md`; promover patrones
   repetidos a `Lecciones Aprendidas.md`.
5. Si el material es Tarea, Control o Pauta: recordar que es un borrador para el
   profesor, nunca material final para los estudiantes — nunca se publica en `docs/`.
6. Si el material es Guía/Actividad/Repaso: además de entregarlo a Navas, seguir la
   convención de la sección "GitHub Pages" de arriba para publicarlo en `docs/`.

## Ver también (rutas de archivo, no wikilinks)

- `00 Inicio/00 Inicio.md` — mapa del vault pensado para Obsidian (con Dataview).
- `01 Meta - Aprendizaje/Protocolo de Sesión.md`
- `02 Curso/Cronograma.md`
- `02 Curso/Fuentes y Bibliografía.md`
- `02 Curso/Sistema de Diseño HTML.md`
- `docs/index.html` — sitio publicado en GitHub Pages.
