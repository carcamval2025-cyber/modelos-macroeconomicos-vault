---
tags: [curso, diseno, pedidos-de-imagen]
sources: "Generado por Claude y ampliado por Antigravity tras la sesión de enriquecimiento exhaustivo de contenido y diagramas (2026-08-27)"
---

# Pedidos de Imagen — Tema 1 (Repaso de Macro I)

Este documento registra la suite completa de piezas visuales e ilustraciones técnicas SVG desarrolladas para el **Tema 1: Repaso de Macro I**.

## Resumen de Estado de la Suite Visual

| ID | Nombre | Archivo Asset | Estado |
|---|---|---|---|
| `img-t1-01` | Banner panorámico de ambientación | `docs/tema-01/assets/banner-tema1.svg` | ✅ Completado |
| `img-t1-02` | Balance del banco y del banco central (Fig. 4-6) | `docs/tema-01/assets/diagrama-balance.svg` | ✅ Completado |
| `img-t1-03` | Equilibrio en mercado de dinero central (Fig. 4-7) | `docs/tema-01/assets/diagrama-equilibrio.svg` | ✅ Completado |
| `img-t1-04` | Demanda de dinero y trampa de liquidez (Fig. 4-8) | `docs/tema-01/assets/diagrama-trampa.svg` | ✅ Completado |
| `img-t1-05` | Relación precio-tasa y mecánica OMA (Fig. 4-5) | `docs/tema-01/assets/diagrama-bonos-oma.svg` | ✅ Completado |
| `img-t1-06` | Árbol del multiplicador y demanda agregada de H | `docs/tema-01/assets/diagrama-multiplicador.svg` | ✅ Completado |
| `img-t1-07` | Evidencia empírica de reservas Fed 2008–2016 | `docs/tema-01/assets/diagrama-trampa-evidencia.svg` | ✅ Completado |

---

## Especificaciones Técnicas y Reglas del Sistema de Diseño

1. **Formato:** SVG vectorial puro en código (sin archivos rasterizados PNG/JPG).
2. **Paleta estricta Índigo profundo + Coral (Tema Oscuro):**
   - Fondo general: `#080C1C`
   - Superficie elevada (Cards): `#10172D`
   - Superficie 2: `#1B223C`
   - Bordes: `#2A324A`
   - Texto principal: `#EFF2F9`
   - Texto secundario: `#A3AABE`
   - Índigo medio (curvas y acentos secundarios): `#667FDA`
   - Coral (curvas principales y énfasis): `#FF6F4A`
   - Coral claro (etiquetas y contrastes): `#FFB188`
   - Verde éxito: `#55C975`
3. **Cero funciones `gradient()`:** Todo sombreado y profundidad se genera mediante colores planos, capas superpuestas de opacidad tenue (`0.05` a `0.20`) y patrones de rejilla punteada/discontinua.
4. **Tipografía:** `Fraunces` (títulos), `Inter` (texto), `JetBrains Mono` (fórmulas, ejes, coordenadas y variables).
5. **Accesibilidad:** `role="img"` con `<title>` y `<desc>` exhaustivos en cada elemento `<svg>`.

---

## Detalles de los Diagramas Incorporados

### img-t1-05 — Mecánica de Bonos y OMA (`diagrama-bonos-oma.svg`)
- **Panel izquierdo:** Gráfico de la curva hiperbólica $P_B = \frac{100}{1+i}$, destacando puntos de calibración reales ($P_B = \$95.2 \implies i = 5\%$, $P_B = \$90.9 \implies i = 10\%$).
- **Panel derecho:** Flujo algorítmico de la política monetaria expansiva ($BC \text{ compra bonos} \to \text{Demanda } \uparrow \to P_B \uparrow \to i \downarrow$).

### img-t1-06 — Árbol del Multiplicador Monetario (`diagrama-multiplicador.svg`)
- Desglose formal de la demanda agregada $M^d$:
  - Rama Efectivo: $CU^d = c \cdot M^d$.
  - Rama Depósitos: $D^d = (1-c) \cdot M^d$.
  - Rama Reservas bancarias: $R^d = \theta(1-c) \cdot M^d$.
- Convergencia en $H^d = [c + \theta(1-c)]M^d$ y deducción del multiplicador $M = \frac{1}{c + \theta(1-c)} H$.

### img-t1-07 — Evidencia Empírica de Reservas Fed (`diagrama-trampa-evidencia.svg`)
- **Panel izquierdo:** Trayectoria de la tasa de fondos federales cayendo de $5.25\%$ a $0\%$ en 2008 y manteniéndose en el ZLB hasta 2016.
- **Panel derecho:** Crecimiento vertical de las reservas bancarias custodiadas en la Fed de $\$10\text{B}$ en 2008 a $\$2,500\text{B}$ en 2015 ($250\times$).
