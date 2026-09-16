---
tags: [curso, diseno, pedidos-de-imagen]
sources: "Generado por Claude (Cowork) y enriquecido integralmente por Antigravity tras sesión de /grill-me (2026-09-16), siguiendo el protocolo de Sistema de Diseño HTML.md"
---

# Pedidos de Imagen — Tema 4 (IS-LM + Apertura Comercial/Financiera)

Este documento registra la suite completa de ilustraciones técnicas y diagramas SVG de alta precisión desarrollados para el **Tema 4**, integrados en `docs/tema-04/` y en `04 Materiales Generados/` (con réplicas modulares en `docs/tema-04/assets/`).

## Resumen de Estado de la Suite Visual

| ID | Nombre | Archivo Asset | Ubicación HTML | Estado |
|---|---|---|---|---|
| `img-t4-banner` | Banner panorámico: flujos duales de economía abierta (1600×320) | `docs/tema-04/assets/banner-tema4.svg` | `index.html`, Hero | ✅ Completado |
| `img-t4-01` | Tipo de cambio real (ε = EP/P*) — dos bloques con iconografía técnica | `docs/tema-04/assets/diagrama-tipo-cambio-real.svg` | `index.html`, Módulo 02 | ✅ Completado |
| `img-t4-02` | Arbitraje y paridad de tasas (UIP) — flujo bifurcado con insignias $ y £ | `docs/tema-04/assets/diagrama-paridad-tasas.svg` | `index.html`, Módulo 03 | ✅ Completado |
| `img-t4-03` | Balanza de pagos — doble balanza acoplada (CC deficitaria vs CF superavitaria) | `docs/tema-04/assets/diagrama-balanza-pagos.svg` | `index.html`, Módulo 04 | ✅ Completado |
| `img-t4-04` | Comparador de retornos esperados y arbitraje — Problema 2 de Control 2 | `docs/tema-04/assets/diagrama-arbitraje-problema2.svg` | `repaso-control2-tema4-apertura.html`, Módulo 05 | ✅ Completado |

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
4. **Protección absoluta contra solapamiento de textos:** Cada variable, rótulo y fórmula cuenta con una **pastilla protectora** (`<rect rx="4" fill="#10172D">` o `#1B223C`), garantizando cero cortes de línea y máxima legibilidad.
5. **Nodos concéntricos de alto contraste:** Doble o triple anillo con núcleo sólido (`r=3` a `4px`).
6. **Tipografía técnica:** `Inter` (rótulos pedagógicos), `JetBrains Mono` (fórmulas, variables, tasas y cifras monetarias).
7. **Accesibilidad:** `role="img"` con `<title>` y `<desc>` exhaustivos en cada elemento `<svg>`.
8. Sin elementos `<image>` externos ni emojis como íconos estructurales (todos los símbolos monetarios y edificios son vectores SVG puros).

---

## Detalle de los Diagramas

### img-t4-banner — Banner panorámico de ambientación (`banner-tema4.svg`)
- **Dimensiones:** `1600 × 320`.
- **Composición:** Dos polos económicos globales enfrentados (Economía Doméstica en `#667FDA` y Resto del Mundo en `#FF6F4A`) atravesados por haces interconectados de apertura: eje superior de comercio de bienes conectando con el nodo central $\varepsilon = EP/P^*$, y eje inferior de arbitraje financiero conectando con el nodo central de Paridad Descubierta de Tasas (UIP). Retícula cartesiana cyberpunk con marcas de escala y centro de Balanza de Pagos ($CC + CF \approx 0$).

### img-t4-01 — Tipo de cambio real ε = EP/P* (`diagrama-tipo-cambio-real.svg`)
- **Dimensiones:** `760 × 340`.
- **Geometría:** Dos bloques económicos estilizados con micro-iconografía técnica (silueta de fábrica/producción para economía doméstica y terminal portuaria para economía exterior). Puente superior con el tipo de cambio nominal $E$ convirtiendo $P$ a divisa extranjera ($E \cdot P$). Convergencia inferior mediante guías curvas punteadas hacia el nodo central concéntrico $\varepsilon = (E \cdot P) / P^*$.
- **Pie didáctico:** Pastillas técnicas para distinguir inequívocamente $\uparrow\varepsilon$ (Apreciación real: bienes locales más caros) vs $\downarrow\varepsilon$ (Depreciación real: bienes locales más baratos).

### img-t4-02 — Arbitraje y paridad de tasas de interés (`diagrama-paridad-tasas.svg`)
- **Dimensiones:** `780 × 350`.
- **Geometría:** Nodo inicial concéntrico "1 USD hoy ($t$)" con insignia vectorial `$ USD`. Dos rutas de inversión fluidas: ruta superior directa al bono doméstico ($(1+i)\text{ USD}$ en $t+1$), y ruta inferior en 3 etapas: conversión a divisa foránea ($E_t\text{ libras}$ con insignia `£ GBP`), compra de bono extranjero a tasa $i^*$, y reconversión esperada al tipo $E^e_{t+1}$.
- **Arbitraje:** Vínculo vertical `VS` y franja inferior destacada con la ecuación canónica (17.2) y su aproximación lineal $i \approx i^* - \% \Delta E^e$.

### img-t4-03 — Balanza de Pagos (`diagrama-balanza-pagos.svg`)
- **Dimensiones:** `780 × 370`.
- **Fuente de cifras verificadas:** Blanchard Tabla 17-3 (EE. UU. 2022).
- **Geometría:** Doble balanza de flujos acoplados:
  - Panel izquierdo (Cuenta Corriente): Exportaciones ($+$4,424B), Importaciones ($-$5,396B), Saldo comercial ($-$972B), Renta neta ($-$21B), dando Saldo CC **$-$993B**.
  - Conector central: Flecha de transferencia obligatoria "Exige deuda neta / financiamiento exterior".
  - Panel derecho (Cuenta Financiera): Entrada de capitales ($+$1,564B), Salida de capitales ($-$760B), Saldo CF **$+$804B**, Discrepancia estadística ($-$189B).
  - Franja inferior: Identidad contable fundamental $(-993) + 804 - 189 = 0$.

### img-t4-04 — Comparador de retornos esperados para Problema 2 (`diagrama-arbitraje-problema2.svg`)
- **Dimensiones:** `740 × 310`.
- **Aplicación:** Repaso Control 2 (Módulo 05, Problema 2 guiado).
- **Geometría:** Dos columnas comparativas que demuestran visualmente por qué $i^* = 16\%$:
  - Columna izquierda: Bono doméstico Economía X con tasa $i = 8.0\%$ directa.
  - Símbolo central de arbitraje e igualdad `$=$`.
  - Columna derecha: Bono extranjero con ganancia nominal $i^* = 16.0\%$ menos pérdida cambiaria esperada por depreciación $-8.0\% = 8.0\%$ neto, igualando el rendimiento local.
- **Franja inferior:** Fórmula despejada $i^* \approx i + \% \Delta E^e = 8\% + 8\% = 16\%$.

---

## Verificación Aplicada

- Conteo de apertura y cierre de etiquetas `<svg>`, `<g>`, `<rect>`, `<path>`, `<text>`, `<div>`, `<section>`, `<figure>` validado.
- Cero funciones `gradient()`.
- Cero etiquetas `<form>`.
- Tipografías e interlineados verificados conforme al sistema de diseño.
- Archivos en espejo (`docs/tema-04/` y `04 Materiales Generados/`) 100% sincronizados.

## Ver también

`docs/tema-04/assets/` · `04 Materiales Generados/guia-tema4-apertura.html` · `04 Materiales Generados/repaso-control2-tema4-apertura.html` · `02 Curso/Sistema de Diseño HTML.md` · `AGENTS.md`
