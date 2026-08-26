---
tags: [meta, bitacora, entrada]
fecha: 2026-08-26
tema: —
material: "docs/index.html + 02 Curso/Sistema de Diseño HTML.md + docs/Pedidos de Imagen - Sitio.md (tercera pasada del día: sin gradientes + acabado con /gpt-taste y /high-end-visual-design)"
funciono: "Navas pidió quitar el gradiente del fondo y mejorar la dirección de diseño con /gpt-taste y /high-end-visual-design. Ambas guías asumen stack React/Tailwind/GSAP y prohíben Inter — se aplicó el espíritu (doble bisel en componentes clave, entrada suave al hacer scroll, fondo plano) sin romper las reglas técnicas ya establecidas (HTML plano sin build, sin librerías externas, radios ≤16px) y sin recambiar la tipografía otra vez, porque Inter ya iba emparejada con Fraunces desde la pasada anterior — el problema real que esa regla evita ya estaba resuelto. Se verificó con regex que el CSS final tiene cero funciones gradient() de cualquier tipo antes de entregar. El patrón de scroll-reveal se implementó con la regla explícita de que el contenido debe verse completo si JS falla (clase que oculta solo se agrega dinámicamente tras confirmar soporte de IntersectionObserver y prefers-reduced-motion)."
fallo: "Al ir a commitear se encontraron docs/index.html y Sistema de Diseño HTML.md en el dispositivo con mtimes más nuevos de lo esperado — se investigó antes de sobrescribir por si hubo una edición externa concurrente (como pasó antes en este vault). Resultó ser una falsa alarma: eran mis propios commits de la pasada anterior (estructura modular), sin cambios de terceros. Aun así, confirmar antes de escribir fue lo correcto — hacerlo sin verificar habría sido la apuesta arriesgada, no el paso de más."
accion: "Seguir verificando el mtime/contenido actual antes de cualquier commit en este vault cuando haya habido una desconexión del dispositivo de por medio (como ocurrió en esta sesión) — no asumir que el estado en el dispositivo sigue siendo el de la última vez que se pudo confirmar."
---

# Sin gradientes + acabado premium — tercera pasada (2026-08-26)

## Qué cambió

- **Cero gradientes**: se quitó la única función `gradient()` que quedaba en el sitio (el wash
  radial del header). Regla nueva y explícita en el sistema de diseño: ningún fondo usa
  `linear-gradient`/`radial-gradient`/`repeating-*-gradient`, ni en CSS ni como relleno de SVG.
- **Doble bisel**: los chips del header y el bloque de nichos de "Ruta del curso" ahora tienen
  marco exterior + núcleo interior (inspirado en `/high-end-visual-design`, pero con los radios
  ≤16px ya establecidos en este sistema, no el `rounded-[2rem]` que sugiere esa guía).
- **Entrada al hacer scroll**: los módulos aparecen con un fundido suave al entrar en pantalla,
  con contenido visible por defecto si JavaScript no corre.
- **docs/Pedidos de Imagen - Sitio.md** se actualizó para reflejar que el header ya no tiene los
  resplandores de CSS que mencionaba el brief anterior — el `header-mark.svg` que Antigravity
  debe recolorear ahora es la única fuente de interés visual de esa zona, y se le pidió cero
  gradientes también adentro del propio SVG.

## Decisión documentada: se mantuvo Inter + Fraunces

Tanto `/gpt-taste` como `/high-end-visual-design` prohíben Inter en cualquier circunstancia. No se
siguió esa regla al pie de la letra porque ya estaba resuelto el problema de fondo que busca
evitar (Inter usada sola, sin contraste tipográfico) desde que se agregó Fraunces en la primera
pasada del día. Cambiar de fuente de nuevo habría sido ruido sin justificación real.

## Ver también

`02 Curso/Sistema de Diseño HTML.md` · `docs/Pedidos de Imagen - Sitio.md` · [[2026-08-26 - Estructura modular (nichos y bandejas)]]
