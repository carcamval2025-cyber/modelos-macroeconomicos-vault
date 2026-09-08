---
tags: [curso, diseno, pedidos-de-imagen]
sources: "Generado por Claude — geometría y datos verificados contra Blanchard cap. 5, pendiente de pulido visual por Antigravity/Codex"
---

# Pedidos de Imagen — Tema 2 (Modelo IS-LM)

Este documento registra la suite de diagramas de modelo pendientes para el **Tema 2: Modelo IS-LM**, usados en `04 Materiales Generados/repaso-control1-tema2-islm.html`. Siguiendo el protocolo vigente (`02 Curso/Sistema de Diseño HTML.md`, sección "Protocolo — pedir ilustraciones a otro agente"), Claude ya construyó la geometría y los datos exactos de cada SVG (ejes, curvas, puntos de equilibrio, etiquetas — verificados contra Blanchard cap. 5) como línea base. Antigravity/Codex debe hacer **solo el pulido visual** (acabado, sombreado, iconografía, textura) **sin mover geometría ni cambiar valores/etiquetas**.

## Resumen de estado

| ID | Nombre | Archivo destino sugerido | Estado |
|---|---|---|---|
| `img-t2-01` | La curva IS (derivación y desplazamiento) | `docs/tema-02/assets/diagrama-curva-is.svg` | ✅ Completado e integrado |
| `img-t2-02` | La curva LM (horizontal, y su desplazamiento) | `docs/tema-02/assets/diagrama-curva-lm.svg` | ✅ Completado e integrado |
| `img-t2-03` | Equilibrio conjunto IS-LM y efectos de política | `docs/tema-02/assets/diagrama-equilibrio-islm.svg` | ✅ Completado e integrado |

---

## Especificaciones técnicas y reglas del sistema de diseño (no negociables)

1. **Formato:** SVG vectorial puro en código, nunca PNG/JPG.
2. **Paleta estricta Índigo profundo + Coral (tema oscuro)** — únicos colores permitidos:
   - Fondo general: `#080C1C` · Superficie elevada: `#10172D` · Superficie 2: `#1B223C`
   - Bordes: `#2A324A` · Texto principal: `#EFF2F9` · Texto secundario: `#A3AABE`
   - Índigo medio (curva/eje secundario — LM): `#667FDA`
   - Coral (curva/eje principal — IS, énfasis): `#FF6F4A` · Coral claro (etiquetas, variantes): `#FFB188`
   - Éxito: `#55C975` · Error: `#FB5668`
3. **Cero funciones `gradient()`** — todo sombreado con color plano, capas de opacidad tenue (0.05–0.20) y líneas discontinuas.
4. **Tipografía:** `Fraunces` (si hay títulos), `Inter` (texto), `JetBrains Mono` (ejes, variables, coordenadas — ya usado en los `<text>` de la línea base).
5. **Accesibilidad:** mantener `role="img"`, `<title>` y `<desc>` de cada SVG (ya incluidos en la línea base).
6. **Qué NO se puede tocar:** la posición de curvas y puntos, los valores/etiquetas de los ejes, ni el texto de `<title>`/`<desc>`. Sí se puede mejorar: grosor y textura de trazos, sombreado sutil de fondo entre curvas, iconografía decorativa adicional (siempre SVG, sin emoji), acabado general.
7. **Verificación sin `git`:** al entregar, `device_stage_files` del SVG final para revisión, confirmar cero placeholders restantes, tags balanceados y paleta respetada antes de integrarlo (reemplazando la tarjeta `.img-request` correspondiente en el HTML).

---

## img-t2-01 — La curva IS (derivación y desplazamiento)

**Ubicación:** Módulo 02 (`#curva-is`) de `repaso-control1-tema2-islm.html`, reemplazando la tarjeta `.img-request` con badge `img-t2-01`.
**Propósito:** mostrar que la curva IS tiene pendiente negativa (a mayor i, menor Y de equilibrio) y que se desplaza a la izquierda ante una caída de la inversión autónoma, una caída del gasto público o un alza de impuestos.
**Contenido:** eje vertical i, eje horizontal Y; curva IS (coral, sólida) bajando de izquierda a derecha; dos puntos A y A' sobre ella con líneas guía punteadas a los ejes; una curva IS' (coral claro, punteada) desplazada a la izquierda con una flecha y etiqueta del choque que la desplaza.
**viewBox:** `0 0 460 270`.
**Alt text / aria-label:** "La curva IS: pendiente negativa, con ejemplo de desplazamiento a la izquierda por una caída de la inversión autónoma, el gasto público o un alza de impuestos."

Línea base (código SVG completo, geometría y datos ya verificados):

```svg
<svg viewBox="0 0 460 270" role="img" aria-labelledby="fig-is-title fig-is-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="fig-is-title">La curva IS</title>
  <desc id="fig-is-desc">Eje vertical i, eje horizontal Y. Curva IS en coral con pendiente negativa: a mayor tasa de interés, menor producto de equilibrio. Dos puntos A y A' sobre la curva ilustran que un aumento de i lleva a una disminución de Y a lo largo de la curva. Una curva IS' en coral claro, desplazada a la izquierda, ilustra el efecto de una caída en la inversión autónoma, el gasto público o un alza de impuestos.</desc>

  <!-- Fondo estructurado unificado -->
  <rect width="100%" height="100%" fill="#10172D"/>

  <!-- Proyecciones ortogonales a los ejes (solo entre puntos y ejes) -->
  <line x1="60" y1="90" x2="185" y2="90" stroke="#A3AABE" stroke-width="1" stroke-dasharray="3 3" opacity=".35"/>
  <line x1="185" y1="90" x2="185" y2="220" stroke="#A3AABE" stroke-width="1" stroke-dasharray="3 3" opacity=".35"/>
  <line x1="60" y1="170" x2="305" y2="170" stroke="#A3AABE" stroke-width="1" stroke-dasharray="3 3" opacity=".35"/>
  <line x1="305" y1="170" x2="305" y2="220" stroke="#A3AABE" stroke-width="1" stroke-dasharray="3 3" opacity=".35"/>

  <!-- Ejes cartesianos y flechas -->
  <line x1="60" y1="25" x2="60" y2="220" stroke="#A3AABE" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="60" y1="220" x2="425" y2="220" stroke="#A3AABE" stroke-width="1.4" stroke-linecap="round"/>
  <path d="M56 31L60 23L64 31" fill="none" stroke="#A3AABE" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M419 216L427 220L419 224" fill="none" stroke="#A3AABE" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Marcas de calibración en los ejes (ticks) -->
  <line x1="55" y1="90" x2="60" y2="90" stroke="#A3AABE" stroke-width="1.2"/>
  <line x1="55" y1="170" x2="60" y2="170" stroke="#A3AABE" stroke-width="1.2"/>
  <line x1="185" y1="220" x2="185" y2="225" stroke="#A3AABE" stroke-width="1.2"/>
  <line x1="305" y1="220" x2="305" y2="225" stroke="#A3AABE" stroke-width="1.2"/>

  <!-- Títulos de ejes -->
  <text x="48" y="27" text-anchor="end" font-family="Inter" font-weight="600" font-size="12" fill="#A3AABE">i</text>
  <text x="430" y="236" font-family="Inter" font-weight="600" font-size="12" fill="#A3AABE">Y</text>

  <!-- Coordenadas en los ejes: A inicial en (Y, i), tras subida de tasa A' en (Y', i') -->
  <text x="50" y="94" text-anchor="end" font-family="JetBrains Mono" font-size="11" fill="#EFF2F9">i&#8242;</text>
  <text x="50" y="174" text-anchor="end" font-family="JetBrains Mono" font-size="11" fill="#A3AABE">i</text>
  <text x="185" y="238" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#EFF2F9">Y&#8242;</text>
  <text x="305" y="238" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#A3AABE">Y</text>

  <!-- Curva IS desplazada (IS', contracción exógena por Δx = -45) -->
  <path d="M80 45 Q181.9 125, 317.9 205" fill="none" stroke="#FFB188" stroke-width="1.8" stroke-dasharray="6 4" opacity=".85"/>
  <text x="80" y="38" font-family="JetBrains Mono" font-weight="700" font-size="11.5" fill="#FFB188">IS&#8242;</text>

  <!-- Curva IS original -->
  <path d="M125 45 Q226.9 125, 362.9 205" fill="none" stroke="#FF6F4A" stroke-width="2.4" stroke-linecap="round"/>
  <text x="370" y="211" font-family="JetBrains Mono" font-weight="700" font-size="12" fill="#FF6F4A">IS</text>

  <!-- Ecuación teórica de la curva IS -->
  <text x="420" y="36" text-anchor="end" font-family="JetBrains Mono" font-size="9.5" fill="#A3AABE">IS: Y = C(Y&#8722;T) + I(Y, i) + G</text>

  <!-- Nodo A' (arriba-izquierda, tasa alta i', producto menor Y') -->
  <circle cx="185" cy="90" r="4.5" fill="#10172D" stroke="#EFF2F9" stroke-width="1.8"/>
  <circle cx="185" cy="90" r="2" fill="#FF6F4A"/>
  <text x="194" y="83" font-family="Inter" font-weight="800" font-size="12" fill="#EFF2F9">A&#8242;</text>

  <!-- Nodo A inicial (abajo-derecha, tasa inicial i, producto inicial Y) -->
  <circle cx="305" cy="170" r="4.5" fill="#10172D" stroke="#EFF2F9" stroke-width="1.8"/>
  <circle cx="305" cy="170" r="2" fill="#FF6F4A"/>
  <text x="316" y="174" font-family="Inter" font-weight="800" font-size="12" fill="#EFF2F9">A</text>

  <!-- Causalidad económica a lo largo de la curva (A -> A', paralela y a la derecha de IS) -->
  <path d="M288 152 Q269 135, 244 117" fill="none" stroke="#FF6F4A" stroke-width="1.4" stroke-dasharray="3 2"/>
  <path d="M251 119L244 117L247 124" fill="none" stroke="#FF6F4A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="272" y="132" font-family="Inter" font-size="9.5" fill="#FF6F4A" font-weight="600">si &#8593;i &#8594; &#8595;I &#8594; &#8595;Y</text>
  <text x="272" y="144" font-family="Inter" font-size="8" fill="#A3AABE">(movimiento a lo largo)</text>

  <!-- Desplazamiento exógeno de la curva IS (entre IS e IS', a la izquierda de IS) -->
  <line x1="235" y1="130" x2="204" y2="130" stroke="#FFB188" stroke-width="1.5" stroke-dasharray="3 2"/>
  <path d="M210 126L202 130L210 134" fill="none" stroke="#FFB188" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="132" y="126" text-anchor="middle" font-family="Inter" font-weight="700" font-size="10" fill="#FFB188">&#8592; Desplazamiento</text>
  <text x="132" y="139" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#A3AABE">&#8595;I aut, &#8595;G, &#8593;T</text>

  <!-- Resumen pedagógico inferior -->
  <text x="240" y="260" text-anchor="middle" font-family="Inter" font-size="8.5" fill="#A3AABE"><tspan fill="#EFF2F9" font-weight="600">&#916;i</tspan> mueve la econom&#237;a <tspan fill="#FF6F4A" font-weight="600">a lo largo</tspan> de la IS &#160;&#183;&#160; <tspan fill="#EFF2F9" font-weight="600">&#916;G, &#916;T, &#916;I aut</tspan> <tspan fill="#FFB188" font-weight="600">desplazan</tspan> toda la curva</text>
</svg>
```

---

## img-t2-02 — La curva LM (horizontal, y su desplazamiento)

**Ubicación:** Módulo 03 (`#curva-lm`), reemplazando la tarjeta `.img-request` con badge `img-t2-02`.
**Propósito:** mostrar que la LM es horizontal a la tasa que fija el banco central, y que una política monetaria restrictiva la sube.
**Contenido:** eje vertical i, eje horizontal Y; línea LM horizontal (índigo, sólida) a la altura i*; línea LM' horizontal (índigo, punteada) más arriba, con flecha y etiqueta "política monetaria restrictiva".
**viewBox:** `0 0 460 230`.
**Alt text / aria-label:** "La curva LM: horizontal a la tasa fijada por el banco central, con ejemplo de desplazamiento hacia arriba por una política monetaria restrictiva."

Línea base (código SVG completo):

```svg
<svg viewBox="0 0 460 230" role="img" aria-labelledby="fig-lm-title fig-lm-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="fig-lm-title">La curva LM</title>
  <desc id="fig-lm-desc">Eje vertical i, eje horizontal Y. La curva LM es una línea horizontal en índigo, a la altura de la tasa de interés fijada por el banco central — no depende del nivel de producto. Una línea LM' punteada, más arriba, ilustra una política monetaria restrictiva que sube la tasa objetivo.</desc>

  <!-- Fondo estructurado unificado -->
  <rect width="100%" height="100%" fill="#10172D"/>

  <!-- Ejes cartesianos y flechas -->
  <line x1="60" y1="20" x2="60" y2="200" stroke="#A3AABE" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="60" y1="200" x2="425" y2="200" stroke="#A3AABE" stroke-width="1.4" stroke-linecap="round"/>
  <path d="M56 26L60 18L64 26" fill="none" stroke="#A3AABE" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M419 196L427 200L419 204" fill="none" stroke="#A3AABE" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Marcas de calibración en los ejes -->
  <line x1="55" y1="80" x2="60" y2="80" stroke="#A3AABE" stroke-width="1.2"/>
  <line x1="55" y1="130" x2="60" y2="130" stroke="#A3AABE" stroke-width="1.2"/>
  <line x1="240" y1="200" x2="240" y2="205" stroke="#A3AABE" stroke-width="1.2"/>

  <!-- Títulos de ejes -->
  <text x="48" y="24" text-anchor="end" font-family="Inter" font-weight="600" font-size="12" fill="#A3AABE">i</text>
  <text x="430" y="215" font-family="Inter" font-weight="600" font-size="12" fill="#A3AABE">Y</text>

  <!-- Coordenadas en los ejes -->
  <text x="50" y="84" text-anchor="end" font-family="JetBrains Mono" font-size="11" fill="#667FDA">i*&#8242;</text>
  <text x="50" y="134" text-anchor="end" font-family="JetBrains Mono" font-size="11" fill="#EFF2F9">i*</text>
  <text x="240" y="215" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#A3AABE">Y</text>

  <!-- Ecuación de la curva LM en la esquina superior izquierda -->
  <text x="80" y="36" font-family="JetBrains Mono" font-size="9.5" fill="#667FDA">LM: i = i* (horizontal)</text>

  <!-- Proyección ortogonal de referencia para el producto Y -->
  <line x1="240" y1="130" x2="240" y2="200" stroke="#A3AABE" stroke-width="1" stroke-dasharray="3 3" opacity=".35"/>

  <!-- Curva LM original (horizontal a la tasa i*) -->
  <line x1="75" y1="130" x2="405" y2="130" stroke="#667FDA" stroke-width="2.2" stroke-linecap="round"/>
  <text x="410" y="126" font-family="JetBrains Mono" font-weight="700" font-size="12" fill="#667FDA">LM</text>

  <!-- Curva LM' desplazada (política restrictiva a tasa i*') -->
  <line x1="75" y1="80" x2="405" y2="80" stroke="#667FDA" stroke-width="1.8" stroke-dasharray="6 4" opacity=".8"/>
  <text x="410" y="76" font-family="JetBrains Mono" font-weight="600" font-size="11" fill="#667FDA" opacity=".85">LM&#8242;</text>

  <!-- Vector de desplazamiento vertical hacia arriba (alza de tasa) -->
  <line x1="250" y1="120" x2="250" y2="92" stroke="#FFB188" stroke-width="1.5" stroke-dasharray="3 2"/>
  <path d="M246 98L250 91L254 98" fill="none" stroke="#FFB188" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Etiqueta de política monetaria restrictiva -->
  <text x="264" y="108" font-family="Inter" font-weight="600" font-size="9.5" fill="#FFB188">pol&#237;tica monetaria restrictiva</text>

  <!-- Nodo de referencia sobre LM -->
  <circle cx="240" cy="130" r="4.5" fill="#10172D" stroke="#EFF2F9" stroke-width="1.8"/>
  <circle cx="240" cy="130" r="2" fill="#667FDA"/>

  <!-- Resumen pedagógico inferior -->
  <text x="240" y="180" text-anchor="middle" font-family="Inter" font-size="8.5" fill="#A3AABE">para cualquier <tspan fill="#EFF2F9" font-weight="600">Y</tspan>, la <tspan fill="#667FDA" font-weight="600">LM</tspan> se mantiene en la tasa que fija el banco central</text>
</svg>
```

---

## img-t2-03 — Equilibrio conjunto IS-LM y efectos de política

**Ubicación:** Módulo 04 (`#equilibrio`), reemplazando la tarjeta `.img-request` con badge `img-t2-03`.
**Propósito:** mostrar el equilibrio simultáneo en el punto A (intersección IS-LM) y, desde ahí, los dos efectos de política que cubre el módulo: una política fiscal expansiva (IS a la derecha, movimiento a lo largo de la LM) y una política monetaria restrictiva (LM hacia arriba, movimiento a lo largo de la IS).
**Contenido:** IS coral sólida, LM índigo sólida, cruzándose en A; IS' coral claro punteada (desplazada a la derecha) cruzando la LM original en "A-fiscal"; LM' índigo/gris punteada (desplazada arriba) cruzando la IS original en "A-monetaria"; flechas cortas de A hacia cada punto nuevo.
**viewBox:** `0 0 460 270`.
**Alt text / aria-label:** "Equilibrio conjunto de las curvas IS y LM en el punto A, con los efectos de una política fiscal expansiva y una política monetaria restrictiva desde ese equilibrio."

Línea base (código SVG completo):

```svg
<svg viewBox="0 0 460 270" role="img" aria-labelledby="fig-eq-title fig-eq-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="fig-eq-title">Equilibrio conjunto IS-LM y efectos de política</title>
  <desc id="fig-eq-desc">Eje vertical i, eje horizontal Y. La curva IS en coral y la línea LM horizontal en índigo se cruzan en el punto A, el equilibrio conjunto. Una curva IS' desplazada a la derecha, en coral claro, ilustra una política fiscal expansiva: el equilibrio se mueve a lo largo de la LM hasta A', con mayor Y y la misma i. Una línea LM' desplazada hacia arriba, en índigo punteado, ilustra una política monetaria restrictiva: el equilibrio se mueve a lo largo de la IS hasta A'', con menor Y y mayor i.</desc>

  <!-- Fondo estructurado unificado -->
  <rect width="100%" height="100%" fill="#10172D"/>

  <!-- Guías de política en cabecera (limpias y sin saturar) -->
  <text x="75" y="32" font-family="Inter" font-size="9" fill="#667FDA" font-weight="600">&#8593; Pol&#237;tica monetaria: <tspan font-family="JetBrains Mono" font-weight="400" fill="#A3AABE">&#8593;i* &#8594; LM&#8242; (&#8595;Y)</tspan></text>
  <text x="410" y="32" text-anchor="end" font-family="Inter" font-size="9" fill="#FFB188" font-weight="600">&#8594; Pol&#237;tica fiscal: <tspan font-family="JetBrains Mono" font-weight="400" fill="#A3AABE">&#8593;G, &#8595;T &#8594; IS&#8242; (&#8593;Y)</tspan></text>

  <!-- Proyecciones ortogonales a los ejes (solo entre puntos y ejes) -->
  <line x1="250" y1="140" x2="250" y2="225" stroke="#A3AABE" stroke-width="1" stroke-dasharray="3 3" opacity=".35"/>
  <line x1="60" y1="140" x2="250" y2="140" stroke="#A3AABE" stroke-width="1" stroke-dasharray="3 3" opacity=".25"/>
  <line x1="300" y1="140" x2="300" y2="225" stroke="#FFB188" stroke-width="1" stroke-dasharray="3 3" opacity=".35"/>
  <line x1="200" y1="100" x2="200" y2="225" stroke="#667FDA" stroke-width="1" stroke-dasharray="3 3" opacity=".35"/>
  <line x1="60" y1="100" x2="200" y2="100" stroke="#667FDA" stroke-width="1" stroke-dasharray="3 3" opacity=".25"/>

  <!-- Ejes cartesianos y flechas -->
  <line x1="60" y1="25" x2="60" y2="225" stroke="#A3AABE" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="60" y1="225" x2="425" y2="225" stroke="#A3AABE" stroke-width="1.4" stroke-linecap="round"/>
  <path d="M56 31L60 23L64 31" fill="none" stroke="#A3AABE" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M419 221L427 225L419 229" fill="none" stroke="#A3AABE" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Marcas de calibración en los ejes (ticks) -->
  <line x1="55" y1="100" x2="60" y2="100" stroke="#A3AABE" stroke-width="1.2"/>
  <line x1="55" y1="140" x2="60" y2="140" stroke="#A3AABE" stroke-width="1.2"/>
  <line x1="200" y1="225" x2="200" y2="230" stroke="#A3AABE" stroke-width="1.2"/>
  <line x1="250" y1="225" x2="250" y2="230" stroke="#A3AABE" stroke-width="1.2"/>
  <line x1="300" y1="225" x2="300" y2="230" stroke="#A3AABE" stroke-width="1.2"/>

  <!-- Títulos de ejes -->
  <text x="48" y="27" text-anchor="end" font-family="Inter" font-weight="600" font-size="12" fill="#A3AABE">i</text>
  <text x="428" y="240" font-family="Inter" font-weight="600" font-size="12" fill="#A3AABE">Y</text>

  <!-- Coordenadas en los ejes -->
  <text x="50" y="104" text-anchor="end" font-family="JetBrains Mono" font-size="11" fill="#667FDA">i*&#8242;</text>
  <text x="50" y="144" text-anchor="end" font-family="JetBrains Mono" font-size="11" fill="#A3AABE">i*</text>
  <text x="200" y="242" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#667FDA">Y&#8243;</text>
  <text x="250" y="242" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" font-size="11" fill="#EFF2F9">Y*</text>
  <text x="300" y="242" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#FFB188">Y&#8242;</text>

  <!-- Curva LM original -->
  <line x1="75" y1="140" x2="405" y2="140" stroke="#667FDA" stroke-width="2.2" stroke-linecap="round"/>
  <text x="410" y="136" font-family="JetBrains Mono" font-weight="700" font-size="12" fill="#667FDA">LM</text>

  <!-- Curva LM' desplazada (política monetaria restrictiva) -->
  <line x1="75" y1="100" x2="405" y2="100" stroke="#667FDA" stroke-width="1.8" stroke-dasharray="6 4" opacity=".8"/>
  <text x="410" y="96" font-family="JetBrains Mono" font-weight="600" font-size="11" fill="#667FDA" opacity=".85">LM&#8242;</text>

  <!-- Curva IS desplazada (IS', política fiscal expansiva por Δx = +50) -->
  <path d="M186 45 Q275.1 125, 387.5 205" fill="none" stroke="#FFB188" stroke-width="1.8" stroke-dasharray="6 4" opacity=".85"/>
  <text x="395" y="211" font-family="JetBrains Mono" font-weight="700" font-size="11.5" fill="#FFB188">IS&#8242;</text>

  <!-- Curva IS original -->
  <path d="M136 45 Q225.1 125, 337.5 205" fill="none" stroke="#FF6F4A" stroke-width="2.4" stroke-linecap="round"/>
  <text x="345" y="211" font-family="JetBrains Mono" font-weight="700" font-size="12" fill="#FF6F4A">IS</text>

  <!-- Flecha A -> A' (política fiscal sobre LM) -->
  <line x1="262" y1="134" x2="288" y2="134" stroke="#FFB188" stroke-width="1.4" stroke-dasharray="3 2"/>
  <path d="M282 131L288 134L282 137" fill="none" stroke="#FFB188" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Flecha A -> A'' (política monetaria sobre IS, paralela y desplazada) -->
  <line x1="238" y1="126" x2="214" y2="106" stroke="#667FDA" stroke-width="1.4" stroke-dasharray="3 2"/>
  <path d="M221 107L214 106L216 113" fill="none" stroke="#667FDA" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Nodo A (equilibrio conjunto inicial) -->
  <circle cx="250" cy="140" r="4.5" fill="#10172D" stroke="#EFF2F9" stroke-width="1.8"/>
  <circle cx="250" cy="140" r="2" fill="#FF6F4A"/>
  <text x="238" y="156" font-family="Inter" font-weight="800" font-size="13" fill="#EFF2F9">A</text>

  <!-- Nodo A' (equilibrio tras política fiscal) -->
  <circle cx="300" cy="140" r="4.5" fill="#10172D" stroke="#FFB188" stroke-width="1.8"/>
  <circle cx="300" cy="140" r="2" fill="#FFB188"/>
  <text x="312" y="122">
    <tspan font-family="Inter" font-weight="800" font-size="12" fill="#FFB188">A&#8242;</tspan>
    <tspan font-family="Inter" font-size="8.5" font-weight="500" fill="#A3AABE" dx="4">(fiscal)</tspan>
  </text>

  <!-- Nodo A'' (equilibrio tras política monetaria) -->
  <circle cx="200" cy="100" r="4.5" fill="#10172D" stroke="#667FDA" stroke-width="1.8"/>
  <circle cx="200" cy="100" r="2" fill="#667FDA"/>
  <text x="188" y="86" text-anchor="end">
    <tspan font-family="Inter" font-size="8.5" font-weight="500" fill="#A3AABE">(monetaria)</tspan>
    <tspan font-family="Inter" font-weight="800" font-size="12" fill="#667FDA" dx="3">A&#8243;</tspan>
  </text>

  <!-- Resumen pedagógico inferior -->
  <text x="240" y="260" text-anchor="middle" font-family="Inter" font-size="8.5" fill="#A3AABE">En <tspan fill="#EFF2F9" font-weight="600">A</tspan>, bienes y dinero en equilibrio &#160;&#183;&#160; <tspan fill="#FFB188" font-weight="600">Fiscal</tspan> mueve la econom&#237;a sobre la LM &#160;&#183;&#160; <tspan fill="#667FDA" font-weight="600">Monetaria</tspan> sobre la IS</text>
</svg>
```
