---
tags: [curso, diseno, pedidos-de-imagen]
sources: "Generado por Claude (Cowork) y enriquecido integralmente por Antigravity tras sesión de /grill-me y resolución de solapamientos (2026-09-16), siguiendo el protocolo de Sistema de Diseño HTML.md"
---

# Pedidos de Imagen — Tema 4 (IS-LM + Apertura Comercial/Financiera)

Este documento registra la suite completa de ilustraciones técnicas y diagramas SVG de alta precisión desarrollados para el **Tema 4**, integrados en `docs/tema-04/` y en `04 Materiales Generados/` (con réplicas modulares en `docs/tema-04/assets/`).

## Resumen de Estado de la Suite Visual (9 Diagramas Técnicos)

| ID | Nombre | Archivo Asset | Ubicación HTML | Estado |
|---|---|---|---|---|
| `img-t4-banner` | Banner panorámico: flujos duales de economía abierta (1600×320) | `docs/tema-04/assets/banner-tema4.svg` | `index.html`, Hero | ✅ Ajustado sin colisiones |
| `img-t4-01` | Tipo de cambio real ($\varepsilon = EP/P^*$) — dos bloques con iconografía técnica (760×340) | `docs/tema-04/assets/diagrama-tipo-cambio-real.svg` | `index.html`, Módulo 02 | ✅ Ajustado sin colisiones |
| `img-t4-02` | Arbitraje y paridad de tasas (UIP) — flujo bifurcado ($ y £) y ecuaciones (800×360) | `docs/tema-04/assets/diagrama-paridad-tasas.svg` | `index.html`, Módulo 03 | ✅ Ajustado sin colisiones |
| `img-t4-03` | Balanza de pagos — doble balanza acoplada (CC vs CF) con datos Blanchard (820×380) | `docs/tema-04/assets/diagrama-balanza-pagos.svg` | `index.html`, Módulo 04 | ✅ Ajustado sin colisiones |
| `img-t4-04` | Comparador de retornos esperados y arbitraje — Problema 2 Control 2 (800×350) | `docs/tema-04/assets/diagrama-arbitraje-problema2.svg` | `repaso-control2-tema4-apertura.html`, Módulo 05 | ✅ Ajustado sin colisiones |
| `img-t4-05` | Determinantes y dinámica del TCR — canales nominal, inflación y comercial (820×370) | `docs/tema-04/assets/diagrama-dinamica-tipo-cambio.svg` | `actividad-tema4-apertura.html`, Módulo 01 | ✅ Creado e Integrado |
| `img-t4-06` | Regla de decisión de arbitraje UIP — tres escenarios de expectativas (820×370) | `docs/tema-04/assets/diagrama-regla-uip.svg` | `actividad-tema4-apertura.html`, Módulo 02 | ✅ Creado e Integrado |
| `img-t4-07` | Tríptico de identidades fundamentales — TCR, UIP y Balanza de Pagos (820×370) | `docs/tema-04/assets/diagrama-mapa-identidades.svg` | `repaso-control2-tema4-apertura.html`, Módulo 02 | ✅ Creado e Integrado |
| `img-t4-08` | Dinámica de apreciación real con tipo de cambio nominal fijo — Problema 3 (800×350) | `docs/tema-04/assets/diagrama-inflacion-tipo-cambio.svg` | `repaso-control2-tema4-apertura.html`, Módulo 06 | ✅ Creado e Integrado |

---

## Especificaciones Técnicas y Reglas del Sistema de Diseño (Estándar Tema 1 y 2)

1. **Formato:** SVG vectorial puro en código, embebido inline en los HTMLs para renderizado instantáneo y guardado como asset individual en `docs/tema-04/assets/`.
2. **Paleta estricta Índigo profundo + Coral (tema oscuro):**
   - Fondo general: `#080C1C`
   - Superficie elevada (Cards): `#10172D`
   - Superficie 2: `#1B223C`
   - Bordes: `#2A324A`
   - Texto principal: `#EFF2F9`
   - Texto secundario: `#A3AABE`
   - Índigo medio (activo foráneo, CF, curvas secundarias): `#667FDA`
   - Coral (activo doméstico, CC, énfasis, curvas principales): `#FF6F4A`
   - Coral claro (tipo de cambio, conectores de arbitraje): `#FFB188`
   - Éxito / positivo: `#55C975`
   - Peligro / negativo: `#FB5668`
3. **Cero funciones `gradient()`:** Volumen y jerarquía generados mediante capas superpuestas de opacidad tenue (`0.06` a `0.25`), dobles trazos y retícula punteada.
4. **Protección absoluta contra solapamiento de textos:**
   - Cajas ensanchadas a 800–820px con anchos internos holgados (320–355px por tarjeta).
   - Pastillas protectoras (`<rect rx="4" fill="#10172D">` o `#1B223C`) con `text-anchor="middle"` o coordenadas $x$ estrictamente separadas de los valores tabulares numéricos.
   - Multilíneas con saltos claros de línea ($12$ a $15\text{px}$) en lugar de frases apretadas en una sola línea horizontal.
5. **Nodos concéntricos de alto contraste:** Doble o triple anillo con núcleo sólido (`r=3` a `4px`).
6. **Tipografía técnica:** `Inter` (rótulos pedagógicos), `JetBrains Mono` (fórmulas, variables, tasas y cifras monetarias).
7. **Accesibilidad:** `role="img"` con `<title>` y `<desc>` exhaustivos en cada elemento `<svg>`.
8. Sin elementos `<image>` externos ni emojis como íconos estructurales (todos los símbolos monetarios y edificios son vectores SVG puros).

---

## Detalle de los Diagramas

### img-t4-banner — Banner panorámico de ambientación (`banner-tema4.svg`)
- **Dimensiones:** `1600 × 320`.
- **Mejora aplicada:** Pastillas de variables ensanchadas de 75px a 94px (eliminando desborde en `P* (Precios)` e `i* (Tasa)`) y caja central UIP ensanchada a 410px.

### img-t4-01 — Tipo de cambio real ε = EP/P* (`diagrama-tipo-cambio-real.svg`)
- **Dimensiones:** `760 × 340`.
- **Mejora aplicada:** Pastillas de lectura inferior `↑ε` y `↓ε` ensanchadas a 330px con textos centrados mediante `text-anchor="middle"`, garantizando 20px de margen respecto a los bordes.

### img-t4-02 — Arbitraje y paridad de tasas de interés (`diagrama-paridad-tasas.svg`)
- **Dimensiones:** `800 × 360`.
- **Mejora aplicada:** Ensanchamiento general del lienzo a 800px. Separación de la fórmula canónica de arbitraje respecto a su versión aproximada en dos pastillas inferiores independientes para evitar solapamiento.

### img-t4-03 — Balanza de Pagos (`diagrama-balanza-pagos.svg`)
- **Dimensiones:** `820 × 380`.
- **Fuente de cifras verificadas:** Blanchard Tabla 17-3 (EE. UU. 2022).
- **Mejora aplicada:** Lienzo ensanchado a 820px, tarjetas ensanchadas a 340px con filas internas de 304px. Textos de flujo financiero condensados a rótulos de 22 caracteres (`Entrada capital (activos US)` vs `+$1,564B`), eliminando la colisión de 60px que existía previamente.

### img-t4-04 — Comparador de retornos esperados para Problema 2 (`diagrama-arbitraje-problema2.svg`)
- **Dimensiones:** `800 × 350`.
- **Aplicación:** Repaso Control 2 (Módulo 05, Problema 2 guiado).
- **Mejora aplicada:** Ancho de tarjetas aumentado a 265px y 370px. Texto `¡Iguala al bono doméstico!` y `Sin pérdida cambiaria` reposicionados con separación vertical limpia de los números porcentuales.

### img-t4-05 — Dinámica y determinantes del TCR (`diagrama-dinamica-tipo-cambio.svg`)
- **Dimensiones:** `820 × 370`.
- **Aplicación:** Actividad de práctica (Módulo 01, Ítems 1-3).
- **Contenido:** Árbol de tres canales de transmisión de $\varepsilon = EP/P^*$: canal nominal ($\uparrow E \implies \uparrow\varepsilon$), canal diferencial inflacionario ($\uparrow P > \uparrow P^* \implies \uparrow\varepsilon$ con $E$ fijo) y canal comercial (cuotas y aranceles que restringen importaciones en el mercado de bienes sin cambiar la ecuación de $\varepsilon$).

### img-t4-06 — Regla de decisión de arbitraje UIP (`diagrama-regla-uip.svg`)
- **Dimensiones:** `820 × 370`.
- **Aplicación:** Actividad de práctica (Módulo 02, Ejercicios 1-3).
- **Contenido:** Comparador visual de tres estados para la regla $i \approx i^* - \%\Delta E^e$: depreciación esperada ($i < i^*$), paridad exacta ($i \approx i^*$) y apreciación esperada ($i > i^*$), destacando la alerta de signo para evitar errores al despejar.

### img-t4-07 — Tríptico de identidades fundamentales (`diagrama-mapa-identidades.svg`)
- **Dimensiones:** `820 × 370`.
- **Aplicación:** Repaso Control 2 (Módulo 02, Repaso teórico).
- **Contenido:** Tres columnas ejecutivas con las tres fórmulas maestras: Tipo de Cambio Real ($\varepsilon = EP/P^*$), Paridad Descubierta de Tasas ($1+i = (1+i^*)(E/E^e)$) y Balanza de Pagos ($CC + CF \approx 0$).

### img-t4-08 — Apreciación real con tipo de cambio fijo (`diagrama-inflacion-tipo-cambio.svg`)
- **Dimensiones:** `800 × 350`.
- **Aplicación:** Repaso Control 2 (Módulo 06, Problema 3).
- **Contenido:** Esquema de comparación temporal ($t=0$ a $t=1$) para la Economía X con $E=4.50$ fijo, mostrando cómo la inflación doméstica de $12\%$ frente a la foránea de $3\%$ hace subir el ratio $P/P^*$ a $1.0874$, impulsando el tipo de cambio real de $4.50$ a $4.89$ ($+8.7\%$), provocando sobrevaluación real y pérdida de competitividad.

---

## Verificación Aplicada

- Conteo de apertura y cierre de etiquetas `<svg>`, `<g>`, `<rect>`, `<path>`, `<text>`, `<div>`, `<section>`, `<figure>` validado vía parser XML de Python.
- Cero funciones `gradient()`.
- Cero etiquetas `<form>`.
- Tipografías e interlineados verificados conforme al sistema de diseño.
- Archivos en espejo (`docs/tema-04/` y `04 Materiales Generados/`) 100% sincronizados.

## Ver también

`docs/tema-04/assets/` · `04 Materiales Generados/guia-tema4-apertura.html` · `04 Materiales Generados/actividad-tema4-apertura.html` · `04 Materiales Generados/repaso-control2-tema4-apertura.html` · `02 Curso/Sistema de Diseño HTML.md` · `AGENTS.md`
