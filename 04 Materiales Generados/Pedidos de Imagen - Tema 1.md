---
tags: [curso, diseno, pedidos-de-imagen]
sources: "Generado por Claude a partir de docs/tema-01/index.html tras restyling al sistema Índigo profundo + coral (2026-08-27); actualizado el mismo día para delegar también los diagramas de contenido"
---

# Pedidos de Imagen — Tema 1 (Repaso de Macro I)

Este documento es para **Antigravity o Codex** (u otro agente de código con capacidad de generar
gráficos/ilustraciones), no para Claude — misma lógica que `docs/Pedidos de Imagen - Sitio.md`.

**Actualización 2026-08-27:** Navas pidió explícitamente que, de ahora en adelante, **también los
diagramas de contenido** (los que tienen ejes, datos y geometría real de Blanchard) se pidan a
Antigravity/Codex en vez de que Claude los construya y pula a mano — se ve y se entiende mejor con
ejecución artística real, y ahorra tiempo/tokens de Claude. Esto reemplaza la regla anterior de este
documento (que decía que esos 3 diagramas "los construye Claude directamente"). Para no perder
precisión de datos, cada brief de diagrama de abajo **incluye el SVG exacto que Claude ya construyó
como línea base** — coordenadas, ejes, valores y etiquetas ya verificados contra Blanchard. La tarea
de Antigravity/Codex es **restylear/pulir visualmente ese SVG** (mejor acabado, más detalle,
sombreados, iconografía), **sin mover puntos de equilibrio, sin cambiar qué eje es cuál, y sin
alterar ninguna etiqueta o valor** — si algo no cuadra con el brief, preguntar antes de inventar.

## Antes de empezar — mismas reglas de siempre

1. **Formato: SVG de código, no imágenes rasterizadas (PNG/JPG).**
2. **Sin emoji como ícono estructural** — construir con `<path>`/`<circle>`/`<rect>`, estilo outline.
3. **Solo la paleta de este curso** (ver abajo) — nunca la de Contabilidad Financiera ni la de FPEN.
4. `viewBox` responsive y `role="img"` + `aria-label`/`<title>`/`<desc>` descriptivos.
5. **Cero funciones `gradient()`** (`linear-gradient`, `radial-gradient`, `repeating-*-gradient`, y
   su equivalente en SVG `<linearGradient>`/`<radialGradient>` como `fill`) — todo relleno es color
   plano; profundidad con capas de trazos/rellenos a distinta opacidad.
6. Nada de sombras anchas (≥16px blur) combinadas con borde de 1px, ni `border-radius` mayor a 16px.
7. **Para los diagramas de datos (img-t1-02, 03, 04): no alterar geometría/valores.** Se puede
   cambiar color, grosor, sombreado, tipografía de las etiquetas, añadir textura/detalle — pero los
   puntos de equilibrio, la forma de las curvas y qué representa cada eje deben quedar exactamente
   igual que en el SVG base que se entrega en cada brief.

## Paleta — usar exactamente estos valores hexadecimales (Índigo profundo + coral, tema oscuro)

```
Fondo general:      #080C1C   (bg — página completa)
Superficie elevada: #10172D   (bg-elev — header, cards)
Superficie 2:       #1B223C   (bg-elev2 — hover)
Borde:              #2A324A
Texto principal:    #EFF2F9
Texto secundario:   #A3AABE
Índigo medio:       #667FDA   (acento secundario)
Coral:              #FF6F4A   (acento principal)
Coral claro:        #FFB188   (enlaces, hover)
Éxito:              #55C975
Error:              #FB5668   (no aplica a estos pedidos)
```

Tipografía si el SVG lleva texto: **Fraunces** (títulos), **Inter** (400/600) o **JetBrains Mono**
(500, para ejes/ecuaciones/etiquetas técnicas) — nunca otra fuente.

## Cómo entregar

Devolver un bloque `<svg>...</svg>` completo por cada ID. Guardar el archivo `.svg` en
`docs/tema-01/assets/` (ya existe, contiene `banner-tema1.svg`). Al recibirlo, Claude reemplaza el
`<svg>` correspondiente dentro de su `<figure><div class="diagrama">...</div></figure>` en
`docs/tema-01/index.html` por el entregado, y verifica el checklist antes de integrar.

---

## img-t1-01 — Banner de ambientación del Tema 1

**Estado: ✅ completado 2026-08-27.** Antigravity entregó `docs/tema-01/assets/banner-tema1.svg` —
verificado (SVG de código, paleta exacta, sin gradientes, `viewBox="0 0 1600 320"`, `role="img"` +
`aria-label`, no se ve como diagrama de datos) e integrado en `docs/tema-01/index.html` reemplazando
la tarjeta `.img-request`.

---

## img-t1-02 — Balance del banco y del banco central (Blanchard, Fig. 4-6)

**Ubicación:** primer `<figure>` del módulo "03 · 4-3 — El papel de los bancos", dentro de
`<div class="diagrama">`.

**Qué representa (no cambiar):** dos balances contables lado a lado. El del **Banco**: activos
(Reservas, Préstamos, Bonos) y pasivo (Depósitos a la vista). El del **Banco Central**: activo
(Bonos) y pasivo (Dinero del banco central, H = Reservas + Efectivo). Una conexión visual indica que
las reservas del banco son parte de H.

**Línea base de precisión (SVG actual, `viewBox="0 0 520 210"`) — restylear a partir de esto, sin
mover cajas, textos ni cambiar qué dato va en cada casilla:**

```svg
<svg viewBox="0 0 520 210" role="img" aria-labelledby="fig1-title fig1-desc">
  <title id="fig1-title">Balance del banco y del banco central</title>
  <desc id="fig1-desc">Dos balances lado a lado: el del banco, con reservas, préstamos y bonos como activos y depósitos a la vista como pasivo; y el del banco central, con bonos como activo y dinero del banco central (reservas + efectivo) como pasivo. Una línea punteada conecta las reservas del banco con el dinero del banco central, mostrando que las reservas son parte de H.</desc>
  <rect x="10" y="10" width="230" height="170" rx="10" fill="#1B223C" stroke="#2A324A" stroke-width="1.5"/>
  <rect x="11" y="43" width="113.5" height="136" fill="#667FDA" opacity=".05"/>
  <rect x="124.5" y="43" width="114.5" height="136" fill="#FF6F4A" opacity=".05"/>
  <svg x="16" y="16" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#667FDA" stroke-width="2" opacity=".9">
    <path d="M3 10l9-6 9 6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 10v9M9 10v9M15 10v9M20 10v9" stroke-linecap="round"/>
    <path d="M2 21h20" stroke-linecap="round"/>
  </svg>
  <text x="135" y="32" text-anchor="middle" font-family="Inter" font-weight="600" font-size="14" fill="#EFF2F9">Banco</text>
  <line x1="125" y1="42" x2="125" y2="170" stroke="#2A324A"/>
  <text x="65" y="58" text-anchor="middle" font-family="Inter" font-size="11" fill="#A3AABE">Activos</text>
  <text x="185" y="58" text-anchor="middle" font-family="Inter" font-size="11" fill="#A3AABE">Pasivos</text>
  <text x="65" y="80" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#EFF2F9">Reservas</text>
  <text x="65" y="100" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#EFF2F9">Préstamos</text>
  <text x="65" y="120" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#EFF2F9">Bonos</text>
  <text x="185" y="80" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#EFF2F9">Depósitos a</text>
  <text x="185" y="94" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#EFF2F9">la vista</text>
  <rect x="270" y="10" width="240" height="170" rx="10" fill="#1B223C" stroke="#2A324A" stroke-width="1.5"/>
  <rect x="271" y="43" width="118.5" height="136" fill="#667FDA" opacity=".05"/>
  <rect x="389.5" y="43" width="119.5" height="136" fill="#FF6F4A" opacity=".05"/>
  <svg x="276" y="16" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FF6F4A" stroke-width="2" opacity=".9">
    <path d="M3 10l9-6 9 6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 10v9M9 10v9M15 10v9M20 10v9" stroke-linecap="round"/>
    <path d="M2 21h20" stroke-linecap="round"/>
  </svg>
  <text x="400" y="32" text-anchor="middle" font-family="Inter" font-weight="600" font-size="14" fill="#EFF2F9">Banco Central</text>
  <line x1="390" y1="42" x2="390" y2="170" stroke="#2A324A"/>
  <text x="330" y="58" text-anchor="middle" font-family="Inter" font-size="11" fill="#A3AABE">Activos</text>
  <text x="450" y="58" text-anchor="middle" font-family="Inter" font-size="11" fill="#A3AABE">Pasivos</text>
  <text x="330" y="90" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#EFF2F9">Bonos</text>
  <text x="450" y="80" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#EFF2F9">Dinero del</text>
  <text x="450" y="94" text-anchor="middle" font-family="JetBrains Mono" font-size="11" fill="#EFF2F9">banco central (H)</text>
  <text x="450" y="112" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#A3AABE">= Reservas + Efectivo</text>
  <path d="M100 80C230 80 320 80 405 82" fill="none" stroke="#FF6F4A" stroke-width="1.5" stroke-dasharray="3 3" opacity=".65"/>
  <path d="M396 78L405 82L396 87" fill="none" stroke="#FF6F4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>
  <rect x="150" y="190" width="220" height="18" rx="6" fill="#10172D" stroke="#2A324A"/>
  <text x="260" y="202.5" text-anchor="middle" font-family="JetBrains Mono" font-size="9.5" fill="#FF6F4A">las reservas del banco son parte de H</text>
</svg>
```

**Qué mejorar:** más textura/detalle en las "cajas" del balance (que se vean como fichas físicas, no
rectángulos planos), mejor jerarquía tipográfica, quizás pequeños montos relativos representados como
barras/áreas proporcionales dentro de cada línea (sin inventar cifras — Blanchard no da números para
este balance, así que las proporciones deben ser ilustrativas, no pretender ser datos reales).

**Archivo:** `docs/tema-01/assets/diagrama-balance.svg`.

---

## img-t1-03 — Equilibrio en el mercado de dinero del banco central (Blanchard, Fig. 4-7)

**Ubicación:** segundo `<figure>` del módulo "03 · 4-3", dentro de `<div class="diagrama">`.

**Qué representa (no cambiar):** eje horizontal H, eje vertical i. Curva de demanda H&#0100;
(pendiente negativa, en coral). Dos ofertas verticales en índigo (H y H&#8242;, esta última a la
derecha). Equilibrio en A (intersección con H) y A&#8242; (intersección con H&#8242;, más abajo) —
un aumento de H baja i (ecuación 4.6).

**Línea base de precisión (SVG actual, `viewBox="0 0 460 270"`) — restylear sin mover A, A&#8242;,
ni cambiar la pendiente/forma de la curva de demanda:**

```svg
<svg viewBox="0 0 460 270" role="img" aria-labelledby="fig2-title fig2-desc">
  <title id="fig2-title">Equilibrio en el mercado de dinero del banco central</title>
  <desc id="fig2-desc">Eje horizontal H (dinero del banco central), eje vertical i (tasa de interés). Curva de demanda H-d con pendiente negativa en coral. Dos líneas de oferta verticales en índigo: la oferta original en H y una oferta mayor en H' tras una operación de mercado abierto. El equilibrio se mueve del punto A al punto A', con una tasa de interés menor, mostrando que un aumento de H baja i.</desc>
  <path d="M60 70H420M60 165H420" fill="none" stroke="#2A324A" stroke-width="1" stroke-dasharray="4 5" opacity=".3"/>
  <path d="M140 20V220M320 20V220" fill="none" stroke="#2A324A" stroke-width="1" stroke-dasharray="3 5" opacity=".25"/>
  <line x1="60" y1="20" x2="60" y2="220" stroke="#A3AABE" stroke-width="1.5"/>
  <line x1="60" y1="220" x2="420" y2="220" stroke="#A3AABE" stroke-width="1.5"/>
  <path d="M60 70H66M60 112H66M60 165H66" fill="none" stroke="#A3AABE" stroke-width="1" opacity=".5"/>
  <path d="M140 220V226M240 220V226M320 220V226" fill="none" stroke="#A3AABE" stroke-width="1" opacity=".5"/>
  <text x="30" y="24" font-family="Inter" font-size="12" fill="#A3AABE">i</text>
  <text x="410" y="240" font-family="Inter" font-size="12" fill="#A3AABE">H</text>
  <path d="M240 20V220L320 220V112Z" fill="#667FDA" opacity=".05"/>
  <line x1="240" y1="20" x2="240" y2="220" stroke="#667FDA" stroke-width="2.2"/>
  <text x="200" y="35" font-family="JetBrains Mono" font-size="11" fill="#667FDA">Oferta H</text>
  <line x1="320" y1="20" x2="320" y2="220" stroke="#667FDA" stroke-width="2.2" stroke-dasharray="6 4" opacity=".85"/>
  <text x="326" y="35" font-family="JetBrains Mono" font-size="11" fill="#667FDA">Oferta H&#8242;</text>
  <path d="M 90 40 Q 200 110 380 200" fill="none" stroke="#FF6F4A" stroke-width="2.5" stroke-linecap="round"/>
  <text x="300" y="195" font-family="JetBrains Mono" font-size="11" fill="#FF6F4A">Demanda H<tspan baseline-shift="sub" font-size="8">d</tspan></text>
  <line x1="60" y1="112" x2="240" y2="112" stroke="#2A324A" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="240" y1="112" x2="240" y2="220" stroke="#2A324A" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="60" y1="165" x2="320" y2="165" stroke="#2A324A" stroke-width="1" stroke-dasharray="4 3"/>
  <line x1="320" y1="165" x2="320" y2="220" stroke="#2A324A" stroke-width="1" stroke-dasharray="4 3"/>
  <path d="M255 122C270 132 285 142 300 152" fill="none" stroke="#FFB188" stroke-width="1.6" stroke-dasharray="2 3" opacity=".8"/>
  <path d="M292 148L300 152L294 143" fill="none" stroke="#FFB188" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>
  <circle cx="240" cy="112" r="9" fill="#10172D" stroke="#EFF2F9" stroke-width="2.5"/>
  <circle cx="240" cy="112" r="3.5" fill="#FF6F4A"/>
  <text x="250" y="108" font-family="Inter" font-weight="600" font-size="12" fill="#EFF2F9">A</text>
  <circle cx="320" cy="165" r="8" fill="#10172D" stroke="#FFB188" stroke-width="2.2" opacity=".95"/>
  <circle cx="320" cy="165" r="3" fill="#FF6F4A" opacity=".95"/>
  <text x="330" y="162" font-family="Inter" font-weight="600" font-size="12" fill="#EFF2F9">A&#8242;</text>
  <text x="20" y="116" font-family="JetBrains Mono" font-size="11" fill="#A3AABE">i</text>
  <text x="20" y="169" font-family="JetBrains Mono" font-size="11" fill="#A3AABE">i&#8242;</text>
  <text x="230" y="238" font-family="JetBrains Mono" font-size="11" fill="#A3AABE">H</text>
  <text x="310" y="238" font-family="JetBrains Mono" font-size="11" fill="#A3AABE">H&#8242;</text>
  <rect x="72" y="140" width="148" height="24" rx="6" fill="#10172D" stroke="#2A324A"/>
  <text x="146" y="156" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#A3AABE">H&#8593; &#8658; i&#8595; (ec. 4.6)</text>
</svg>
```

**Qué mejorar:** curva de demanda con más peso/carácter (grosor variable, terminaciones más
trabajadas), el desplazamiento de la oferta podría llevar una flecha más expresiva, el sombreado del
área de expansión puede tener más profundidad (capas de opacidad, nunca gradiente).

**Archivo:** `docs/tema-01/assets/diagrama-equilibrio.svg`.

---

## img-t1-04 — Demanda de dinero, oferta de dinero y la trampa de liquidez (Blanchard, Fig. 4-8)

**Ubicación:** `<figure>` del módulo "04 · 4-4 — La trampa de liquidez", dentro de
`<div class="diagrama">`.

**Qué representa (no cambiar):** eje horizontal M, eje vertical i. Curva de demanda de dinero M&#0100;
que desciende y se vuelve horizontal en i=0 (zona sombreada = trampa de liquidez). Tres ofertas
verticales Ms, Ms&#8242;, Ms&#8242;&#8242; — las dos últimas caen dentro del tramo horizontal (puntos
B y C, ambos con i=0); A tiene i&gt;0.

**Línea base de precisión (SVG actual, `viewBox="0 0 460 280"`) — restylear sin mover A, B, C, ni
cambiar dónde empieza el tramo horizontal (el "kink" de la curva):**

```svg
<svg viewBox="0 0 460 280" role="img" aria-labelledby="fig3-title fig3-desc">
  <title id="fig3-title">Demanda de dinero, oferta de dinero y la trampa de liquidez</title>
  <desc id="fig3-desc">Eje horizontal M (dinero), eje vertical i. La curva de demanda de dinero, en coral, desciende y luego se vuelve horizontal en i=0 más allá de cierto punto — esa zona horizontal está sombreada y rotulada como la trampa de liquidez. Tres líneas verticales de oferta de dinero Ms, Ms' y Ms'', en índigo — las dos últimas intersectan la curva de demanda en su tramo horizontal, ambas con tasa de interés cero. Una flecha indica que la oferta de dinero sigue aumentando de Ms a Ms'' sin que la tasa de interés cambie.</desc>
  <rect x="220" y="190" width="180" height="30" fill="#667FDA" opacity=".07"/>
  <path d="M75 60H400M75 130H400" fill="none" stroke="#2A324A" stroke-width="1" stroke-dasharray="4 5" opacity=".3"/>
  <line x1="55" y1="20" x2="55" y2="220" stroke="#A3AABE" stroke-width="1.5"/>
  <line x1="55" y1="220" x2="420" y2="220" stroke="#A3AABE" stroke-width="1.5"/>
  <path d="M55 60H61M55 95H61M55 130H61" fill="none" stroke="#A3AABE" stroke-width="1" opacity=".5"/>
  <path d="M150 220V226M260 220V226M340 220V226" fill="none" stroke="#A3AABE" stroke-width="1" opacity=".5"/>
  <text x="28" y="24" font-family="Inter" font-size="12" fill="#A3AABE">i</text>
  <text x="408" y="240" font-family="Inter" font-size="12" fill="#A3AABE">M</text>
  <path d="M 90 30 C 150 90 190 160 220 190 L 400 190" fill="none" stroke="#FF6F4A" stroke-width="2.5" stroke-linecap="round"/>
  <text x="330" y="180" font-family="JetBrains Mono" font-size="11" fill="#FF6F4A">M<tspan baseline-shift="super" font-size="8">d</tspan></text>
  <line x1="150" y1="20" x2="150" y2="220" stroke="#667FDA" stroke-width="2.2"/>
  <line x1="260" y1="20" x2="260" y2="190" stroke="#667FDA" stroke-width="2.2"/>
  <line x1="340" y1="20" x2="340" y2="190" stroke="#667FDA" stroke-width="2.2"/>
  <text x="140" y="14" font-family="JetBrains Mono" font-size="10" fill="#667FDA">M<tspan baseline-shift="super" font-size="7">s</tspan></text>
  <text x="252" y="14" font-family="JetBrains Mono" font-size="10" fill="#667FDA">M<tspan baseline-shift="super" font-size="7">s'</tspan></text>
  <text x="332" y="14" font-family="JetBrains Mono" font-size="10" fill="#667FDA">M<tspan baseline-shift="super" font-size="7">s''</tspan></text>
  <path d="M155 30H335" fill="none" stroke="#FFB188" stroke-width="1.6" opacity=".75"/>
  <path d="M327 26L335 30L327 34" fill="none" stroke="#FFB188" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" opacity=".8"/>
  <text x="180" y="24" font-family="JetBrains Mono" font-size="9" fill="#FFB188">banco central sigue inyectando dinero</text>
  <circle cx="150" cy="95" r="7" fill="#10172D" stroke="#EFF2F9" stroke-width="2"/>
  <circle cx="150" cy="95" r="2.8" fill="#FF6F4A"/>
  <circle cx="260" cy="190" r="7" fill="#10172D" stroke="#EFF2F9" stroke-width="2"/>
  <circle cx="260" cy="190" r="2.8" fill="#FFB188"/>
  <circle cx="340" cy="190" r="7" fill="#10172D" stroke="#EFF2F9" stroke-width="2"/>
  <circle cx="340" cy="190" r="2.8" fill="#FFB188"/>
  <text x="160" y="90" font-family="Inter" font-weight="600" font-size="11" fill="#EFF2F9">A</text>
  <text x="270" y="185" font-family="Inter" font-weight="600" font-size="11" fill="#EFF2F9">B</text>
  <text x="350" y="185" font-family="Inter" font-weight="600" font-size="11" fill="#EFF2F9">C</text>
  <text x="160" y="108" font-family="JetBrains Mono" font-size="9" fill="#A3AABE">i &gt; 0</text>
  <line x1="55" y1="190" x2="220" y2="190" stroke="#2A324A" stroke-dasharray="4 3"/>
  <text x="20" y="194" font-family="JetBrains Mono" font-size="11" fill="#A3AABE">0</text>
  <text x="310" y="208" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#667FDA">trampa de liquidez (i = 0)</text>
</svg>
```

**Qué mejorar:** la zona sombreada de "trampa de liquidez" puede tener más textura (p. ej. un patrón
de trazos finos en vez de un tinte plano uniforme, siempre sin gradiente), la curva puede tener un
trazo más expresivo en el quiebre, y los tres puntos A/B/C pueden diferenciarse mejor visualmente
(B y C ya están "atrapados" en i=0 — se puede reforzar esa idea con el estilo del nodo).

**Archivo:** `docs/tema-01/assets/diagrama-trampa.svg`.

---

## Checklist antes de entregar (img-t1-02, 03, 04)

- [ ] Es un bloque `<svg>` de código, no un PNG/JPG adjunto.
- [ ] Usa únicamente los colores hexadecimales de la paleta de arriba.
- [ ] Usa únicamente Fraunces/Inter/JetBrains Mono.
- [ ] Cero funciones `gradient()` en cualquier parte.
- [ ] Ninguna sombra ancha + borde combinados, ni `border-radius` mayor a 16px.
- [ ] `role="img"` + `<title>`/`<desc>` (o `aria-label`) descriptivos.
- [ ] **Ningún punto de equilibrio, curva o etiqueta se movió o cambió de valor** respecto a la
  línea base entregada arriba — solo cambió el acabado visual.

---

## Ver también

`docs/tema-01/index.html` (los 3 diagramas están cada uno dentro de su propio `<figure><div
class="diagrama">`) · `docs/Pedidos de Imagen - Sitio.md` (mismo protocolo, para el sitio general) ·
`02 Curso/Sistema de Diseño HTML.md` · `AGENTS.md`
