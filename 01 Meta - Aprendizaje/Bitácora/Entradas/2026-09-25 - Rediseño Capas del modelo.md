---
tags: [meta, bitacora, entrada]
fecha: 2026-09-25
tema: "1 a 4 (todo el sitio)"
material: "Sitio docs/ completo (portada + 8 páginas de Tema) + docs/assets/guia.css + docs/assets/guia.js + 02 Curso/Sistema de Diseño HTML.md + AGENTS.md"
funciono: "Método por pasos con confirmación en cada uno: diagnóstico (lista de lo genérico y lo que se conserva), entrevista de 4 preguntas con opciones concretas, 3 prototipos distintos en composición, navegación y color (A Mesa de montaje, B La ecuación, C Capas del modelo) con capturas a 1280 y 390 px y logo sobre 3 fondos + favicon a 64/32/16, brief corto y 'confirmo' antes de construir. Navas eligió C. La idea central (cada Tema es una capa del mismo modelo) organiza portada, navegación, color y logo; el color siempre significa una variable (Y, IS, x, sector externo, i/LM). Todo el CSS pasó a un solo archivo compartido y el comportamiento común a guia.js. Verificación automática con Playwright: 83 comprobaciones (sin scroll horizontal a 390 y 1280 en claro y oscuro, sin errores JS, contraste AA de todo el texto, cada interacción nueva probada con teclado, movimiento reducido, transparencia reducida y contenido visible sin JavaScript)."
fallo: "1) Azeret Mono es más ancha que JetBrains Mono: las etiquetas de los SVG heredados se salían de sus recuadros; se resolvió componiendo el texto de las láminas en Archivo condensada (88%) sin tocar geometría. 2) La clase .marca del logo chocó con .opcion .marca de la actividad del Tema 4 y deformó los radios; se renombró a .cab-marca. 3) Un título dentro de la lámina oscura del Tema 3 tenía color en línea y quedaba oscuro sobre oscuro en tema claro; lo detectó la auditoría de contraste. 4) El rojo IS sobre el gris de 2.º nivel de las láminas daba 4.46:1; se oscureció ese gris a #202124."
accion: "Al cambiar la fuente de un sistema, revisar primero todos los SVG con texto (miden los recuadros para la fuente anterior). Prefijar las clases de piezas globales (cab-, panel-, pl-, pr-) para no chocar con clases de contenido. Mantener la auditoría de contraste automática (verificar.js en la sesión) como paso fijo antes de cada push; atrapa lo que la revisión visual no ve."
---

# Rediseño "Capas del modelo" (2026-09-25)

Pedido de Navas: rediseñar la guía con personalidad propia y reconocible, sin parecer
variación de otra guía suya ni diseño hecho por IA, usando la skill `impeccable` y un método
por pasos con confirmación. Ver [[Sistema de Diseño HTML]] para el sistema resultante.

## Decisiones de Navas (entrevista)

- Metáfora: **el modelo que se arma**: cada Tema agrega una pieza al mismo modelo.
- Color: **color = variable** (Y, i, IS, x, ε…), sin fondo crema.
- Tipografía: **Archivo** (eje de ancho) + **Azeret Mono**.
- Interacciones nuevas: predice antes de ver, variables vivas, índice como diagrama de
  equilibrio, progreso guardado.
- Dirección elegida entre 3 prototipos: **C · Capas del modelo**.
- Tema 6 se llama **IS-LM-PC** (el índice anterior decía "Oferta Agregada y Demanda Agregada",
  en contradicción con el Cronograma).
- Autorizó reemplazar los guiones largos (—) del contenido por puntuación equivalente.

## Qué cambió

- `docs/assets/guia.css` y `docs/assets/guia.js`: nuevos, compartidos por las 9 páginas; se
  eliminó el `<style>` propio de cada página (cada una tenía 120 a 330 líneas divergentes).
- Fuentes propias en `docs/assets/fonts/` (licencia OFL incluida); ya no se cargan de Google.
- Portada: pila de capas por Tema (color sólido de su variable) que enciende o apaga su pieza
  en el diagrama del modelo, próxima evaluación calculada desde el cronograma, progreso por Tema.
- Páginas de Tema: cabecera en banda del color del Tema, títulos de módulo en banda, índice
  en panel con una curva donde el punto es la posición de lectura (en celular, botón plegable).
- Tema 2: módulo nuevo "Predice antes de ver" con los 6 choques del simulador (mismo contenido
  y explicaciones; la dirección de cada curva se derivó de las curvas que dibuja el simulador).
- Diagramas SVG: colores pasados a la paleta nueva por tabla de equivalencias; se mantienen
  como láminas oscuras en ambos temas. Geometría y etiquetas sin cambios.
- Se retiraron de la vista los banners decorativos y el dibujo del encabezado (archivos
  conservados en `assets/`); el pedido `img-docs-03` quedó cancelado.
- 158 guiones largos del contenido reemplazados uno por uno por coma, dos puntos, punto y coma,
  punto o paréntesis según el sentido.
- Corregidos dos enlaces rotos que ya existían (`guia-tema4-apertura.html` en el Tema 4).

## Qué no se pudo probar

- Lectores de pantalla reales (se verificó estructura, roles, `aria-*` y foco, no la
  experiencia auditiva).
- Safari y Firefox (solo Chromium en esta sesión).
- `prefers-reduced-transparency` solo se emuló por CDP en Chromium.

## Seguimiento 2026-10-01

- Fusionado en `main` y publicado en GitHub Pages.
- Navas reportó que no encontraba cómo entrar a los repasos. Causa: la página del Tema 2 no
  enlazaba a su simulador ni a su simulacro, y en la portada los repasos solo estaban en la lista
  final. Se agregó la navegación de materiales por Tema en todas las cabeceras y accesos directos
  en cada capa de la portada. Lección: cada material publicado debe ser alcanzable desde la
  portada en un clic y desde cualquier página de su Tema.
- Navas pidió más movimiento: se agregaron animaciones con propósito (ver "Movimiento" en
  `02 Curso/Sistema de Diseño HTML.md`). Verificación Playwright ampliada a 99 comprobaciones,
  incluida la ausencia total de animaciones con movimiento reducido.

## Parcial al diseño nuevo (2026-10-01)

- Navas subió el paquete del parcial (5 páginas) con el diseño anterior y pidió migrarlo. Se pasó a
  `guia.css`/`guia.js` con la capa integradora `parcial`, el script repetido en las 5 páginas se
  llevó a `parcial-t1-t4/parcial.js` (con progreso guardado y el examen `inert` antes de comenzar)
  y se agregó el bloque del parcial en la portada. La cuenta regresiva ahora reconoce la semana de
  parciales en curso. Se amplió el lienzo de una figura que ya venía cortada (sin mover geometría).
- Verificación Playwright: 139 comprobaciones, incluidas las interacciones del parcial con teclado.
- Lección: el material que llega de otra sesión puede venir con el diseño anterior; el prompt
  `Prompt - Material nuevo con diseño Capas del modelo.md` existe para evitarlo.

## Ver también

[[Errores Comunes a Evitar]] · [[Patrones que Funcionan Bien]] · `AGENTS.md`
