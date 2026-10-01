# AGENTS.md — Vault Modelos Macroeconómicos

Este archivo es el punto de entrada agnóstico de herramienta: cualquier agente de IA
(Claude, Antigravity, Codex, Cursor, Aider, etc.) que abra esta carpeta debe leerlo
primero. A diferencia de `00 Inicio/00 Inicio.md` (pensado para Obsidian: usa
`[[wikilinks]]` y bloques Dataview que solo se renderizan con esos plugins), este
documento usa únicamente markdown plano y rutas de archivo relativas, para que
funcione igual sin Obsidian.

## Handoff del 2026-08-26 — resuelto 2026-08-27 (superado el 2026-09-25)

El rediseño "Capas del modelo" del 2026-09-25 reemplazó el layout de nichos y dejó de mostrar el
`.hero-banner` (el archivo `docs/assets/hero-banner.svg` se conserva). Lo de abajo queda como
historial.

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

## Sistema de diseño HTML (solo para Guía / Actividad / Repaso; no aplica a Tarea/Control/Pauta, que son Word/PDF)

**Vigente desde 2026-09-25: dirección "Capas del modelo"** (leer esto, no una versión en caché).
Reemplaza la identidad Índigo profundo + coral del 2026-08-26. Detalle completo, tokens y
checklist en `02 Curso/Sistema de Diseño HTML.md`; registro del proceso en
`01 Meta - Aprendizaje/Bitácora/Entradas/2026-09-25 - Rediseño Capas del modelo.md`.

- **Idea central:** cada Tema es una capa del mismo modelo (Tema 1 plano (i, Y) y tasa del banco
  central, Tema 2 IS y LM, Tema 3 prima x, Tema 4 paridad con el exterior). La portada apila las
  capas y cada una enciende su pieza en el diagrama del modelo.
- **Color = variable:** Y `#F0B429`, IS `#F2552C`, x `#C65BD6`, sector externo (ε, E, i*)
  `#22B8A0`, i y LM `#3D8BFD` como bandas; variantes de texto por tema claro/oscuro en el
  documento de diseño. Fondo gris sin tinte (`#F4F5F6` claro, `#101112` oscuro), nunca crema.
  Tema claro y oscuro, según el sistema o el botón de la cabecera.
- **Tipografía:** Archivo (títulos en ancho 75 %, peso 850) + Azeret Mono (ecuaciones y cifras),
  servidas desde `docs/assets/fonts/`.
- **Archivos compartidos:** todo el estilo vive en `docs/assets/guia.css` y el comportamiento
  común en `docs/assets/guia.js`. Ninguna página lleva `<style>` propio.
- **Interacciones:** índice como diagrama (punto = posición de lectura, flechas del teclado),
  variables vivas en ecuaciones, "predice antes de ver" (Tema 2), progreso guardado en el
  navegador que la portada suma por Tema, próxima evaluación calculada desde el cronograma.
- **Diagramas SVG heredados:** láminas oscuras en ambos temas, recoloreadas por tabla de
  equivalencias sin mover geometría ni etiquetas.
- **Prompt para material nuevo:** `01 Meta - Aprendizaje/Prompt - Material nuevo con diseño Capas del
  modelo.md` (esqueleto, componentes, interacciones y checklist de publicación).
- **Accesos y movimiento (2026-10-01):** cada página de Tema enlaza todos los materiales de su
  Tema en la cabecera (`nav.cab-mats`); la portada los muestra en cada capa. Animaciones con
  propósito (el modelo se dibuja pieza por pieza, el equilibrio viaja en las predicciones), todas
  desactivadas con movimiento reducido y sin ocultar contenido.

Reglas técnicas: sin `<form>` (usar eventos JS), sin gradientes, sin bordes laterales de color,
sin sombras decorativas ni vidrio, sin guiones largos (—) en los textos, contenido visible sin
JavaScript, debe abrir directo en navegador sin servidor, responsive desde 390 px, diagramas de
modelos siempre como SVG inline etiquetado, nunca imágenes externas ni capturas de libro.

**Pedidos de imagen a otro agente (Antigravity/Codex)**: `02 Curso/Sistema de Diseño HTML.md`
tiene la sección "Protocolo: pedir ilustraciones a otro agente"; las reglas de color y fuente de
ese protocolo ya usan la paleta "Capas del modelo".

## GitHub Pages (`docs/`) — establecido 2026-08-26

El repo ya es público, así que Pages funciona directo: en GitHub, Settings → Pages →
"Deploy from a branch" → rama `main`, carpeta `/docs` (si aún no está activado,
activarlo ahí una sola vez).

`docs/index.html` es la portada: una capa por cada uno de los 7 Temas (nombre, capítulo de
Blanchard, semana, pieza del modelo, progreso guardado). Los Temas sin publicar aparecen como
capas vacías con borde punteado y sin enlace.

**Convención para agregar una página cuando se genere el primer material real de un
Tema** (Guía HTML / Actividad HTML / Repaso — nunca Tarea/Control/Pauta, ver regla 5
de arriba):
1. Publicar el HTML del material en `docs/tema-0N/index.html` (mismo contenido que se
   entrega al usuario, sin cambios de fondo), con el esqueleto de las otras páginas de Tema:
   `../assets/guia.css`, `../assets/guia.js`, `data-k` en `<html>`, cabecera `.cab` e índice
   `nav.panel[data-nav-eq]`. Sin `<style>` propio.
2. En `docs/index.html`, dentro del arreglo `TEMAS` del `<script>`, cambiar
   `disponible:false` a `disponible:true` para ese Tema y darle `k` (variable de su capa) y
   `pieza`. La capa se activa sola; si el Tema aporta una pieza nueva al diagrama, agregarla
   como capa en `MM.plano` de `guia.js`.
3. Registrar la publicación en `04 Materiales Generados/` como con cualquier entrega.

**Regla que no se negocia sobre este sitio**: `docs/` es público en internet. Nunca
publicar ahí una Tarea, un Control o su Pauta, ni borradores dirigidos al profesor —
esas rutas de trabajo terminan en Word/PDF entregado directamente a Navas o al
profesor, jamás en `docs/`.

Diseño de la portada y de las páginas: dirección "Capas del modelo" (ver sección de sistema de
diseño arriba y `02 Curso/Sistema de Diseño HTML.md`).

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
- `docs/index.html`: sitio publicado en GitHub Pages; estilos y comportamiento compartidos en
  `docs/assets/guia.css` y `docs/assets/guia.js`.
