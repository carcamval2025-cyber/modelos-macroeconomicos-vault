---
tags: [curso, diseno, pedidos-de-imagen]
sources: "Generado por Claude a partir de docs/tema-01/index.html tras restyling al sistema Índigo profundo + coral (2026-08-27)"
---

# Pedidos de Imagen — Tema 1 (Repaso de Macro I)

Este documento es para **Antigravity o Codex** (u otro agente de código con capacidad de generar
gráficos/ilustraciones), no para Claude — misma lógica que `docs/Pedidos de Imagen - Sitio.md`.
Los diagramas de contenido de esta guía (balance del banco, equilibrio del mercado de dinero del
banco central, trampa de liquidez) **no están aquí**: esos los construye Claude directamente porque
dependen de datos y ejes reales de Blanchard, y ya están hechos y recoloreados a la paleta actual.
Lo que sí se pide aquí es la pieza de **identidad visual/ambientación** del Tema, igual que el
`hero-banner.svg` del sitio.

## Antes de empezar — mismas reglas de siempre

1. **Formato: SVG de código, no imágenes rasterizadas (PNG/JPG).**
2. **Sin emoji como ícono estructural** — construir con `<path>`/`<circle>`/`<rect>`, estilo outline.
3. **Solo la paleta de este curso** (ver abajo) — nunca la de Contabilidad Financiera ni la de FPEN.
4. `viewBox` responsive y `role="img"` + `aria-label` descriptivo.
5. **Cero funciones `gradient()`** (`linear-gradient`, `radial-gradient`, `repeating-*-gradient`, y
   su equivalente en SVG `<linearGradient>`/`<radialGradient>` como `fill`) — todo relleno es color
   plano; profundidad con capas de trazos a distinta opacidad.
6. Nada de sombras anchas (≥16px blur) combinadas con borde de 1px, ni `border-radius` mayor a 16px.

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
Error:              #FB5668   (no aplica a este pedido)
```

Tipografía si el SVG lleva texto: **Fraunces** (títulos), **Inter** (400/600) o **JetBrains Mono**
(500) — nunca otra fuente.

## Cómo entregar

Devolver un bloque `<svg>...</svg>` completo. Guardar el archivo `.svg` en `docs/tema-01/assets/`
(crear la carpeta si no existe). Al recibirlo, Claude quita la tarjeta `.img-request` de
`docs/tema-01/index.html` y la reemplaza por el SVG entregado.

---

## img-t1-01 — Banner de ambientación del Tema 1

**Ubicación:** justo debajo del header, antes del módulo "01 · Alcance", en
`docs/tema-01/index.html`. Ahora mismo hay una tarjeta `.img-request` de marcador ahí (`id="img-t1-01"`).

**Propósito:** dar a la página de este Tema la misma riqueza visual que ya tiene la portada del
sitio (`docs/index.html`, con su `hero-banner.svg`), sin repetir exactamente la misma composición —
esta es la página de un Tema específico, no la portada.

**Contenido sugerido:** una composición abstracta relacionada con el contenido del Tema 1 (bancos,
reservas, dinero del banco central, la trampa de liquidez) — por ejemplo, trazos que evoquen un
balance de banco simplificado, o una curva de demanda de dinero que se aplana (referencia visual a
la trampa de liquidez), sin convertirse en un diagrama técnico con ejes rotulados y cifras (eso ya
lo cubren los 3 diagramas de contenido que Claude construyó dentro de la guía). Es una pieza de
marca/ambientación, igual que el `hero-banner.svg` del sitio — no un gráfico de datos.

**Estilo:** trazos en `#FF6F4A` (coral) y/o `#667FDA` (índigo medio) sobre fondo plano `#080C1C` o
`#10172D` — sin `<linearGradient>`/`<radialGradient>` como relleno, solo capas de trazos a distinta
opacidad (0.3–0.9) para dar profundidad.

**Dimensiones:** franja horizontal ancha y baja, `viewBox="0 0 1600 320"` o similar (ancho:alto ≈
4:1 o 5:1) — igual proporción que `docs/assets/hero-banner.svg`, nunca una imagen alta/vertical.
Debe verse bien tanto muy ancho (escritorio) como angosto (móvil), recortándose por los lados sin
perder la composición.

**Archivo:** `docs/tema-01/assets/banner-tema1.svg` (nuevo).

**Integración:** Claude reemplaza la tarjeta `.img-request#img-t1-01` completa por
`<section class="hero-banner"><svg>...</svg></section>` (misma clase `.hero-banner` ya definida en
el CSS del sitio: `width:100%; height:auto; display:block;`, sin `max-width`).

### Checklist antes de entregar (img-t1-01)

- [ ] Es un bloque `<svg>` de código, no un PNG/JPG adjunto.
- [ ] Usa únicamente los colores hexadecimales de la paleta de arriba.
- [ ] Usa únicamente Fraunces/Inter/JetBrains Mono si lleva texto (lo más probable es que no lleve).
- [ ] `viewBox` ancho y bajo (≈4:1 o 5:1), pensado para ancho completo de pantalla.
- [ ] Cero funciones `gradient()` en cualquier parte.
- [ ] Ninguna sombra ancha + borde combinados, ni `border-radius` mayor a 16px.
- [ ] No se ve como un diagrama técnico con ejes/cifras — es pieza de marca, no un gráfico de datos.
- [ ] `role="img"` + `aria-label` descriptivo.

---

## Ver también

`docs/tema-01/index.html` (la tarjeta `.img-request` está marcada con `id="img-t1-01"`) ·
`docs/Pedidos de Imagen - Sitio.md` (mismo protocolo, para el sitio general) ·
`02 Curso/Sistema de Diseño HTML.md` · `AGENTS.md`
