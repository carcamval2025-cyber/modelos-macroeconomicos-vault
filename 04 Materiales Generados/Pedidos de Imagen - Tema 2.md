---
tags: [curso, diseno, pedidos-de-imagen]
sources: "Generado por Claude y enriquecido exhaustivamente por Antigravity al estándar estético de Tema 1 con cero solapamiento de textos (2026-09-10)"
---

# Pedidos de Imagen — Tema 2 (Modelo IS-LM)

Este documento registra la suite completa de ilustraciones técnicas y diagramas SVG de alta precisión desarrollados para el **Tema 2: Modelo IS-LM**, integrados en `docs/tema-02/index.html` y `04 Materiales Generados/repaso-control1-tema2-islm.html`.

## Resumen de Estado de la Suite Visual

| ID | Nombre | Archivo Asset | Estado |
|---|---|---|---|
| `img-t2-banner` | Banner panorámico de ambientación | `docs/tema-02/assets/banner-tema2.svg` | ✅ Completado |
| `img-t2-01` | La curva IS y su desplazamiento (Fig. 5-3 / 5-4) | `docs/tema-02/assets/diagrama-curva-is.svg` | ✅ Completado |
| `img-t2-04` | Derivación de la curva IS a partir de Z=Y (Fig. 5-1 / 5-2) | `docs/tema-02/assets/diagrama-derivacion-is.svg` | ✅ Completado |
| `img-t2-02` | La curva LM moderna horizontal (Fig. 5-5) | `docs/tema-02/assets/diagrama-curva-lm.svg` | ✅ Completado |
| `img-t2-03` | Equilibrio conjunto IS-LM en nodo A (Fig. 5-6) | `docs/tema-02/assets/diagrama-equilibrio-islm.svg` | ✅ Completado |
| `img-t2-05` | Protocolo Blanchard: Choque Fiscal vs Monetario (Fig. 5-7 / 5-8) | `docs/tema-02/assets/diagrama-politicas-blanchard.svg` | ✅ Completado |
| `img-t2-06` | Ejercicio 1: Choque de inversión y cadena de efectos (Fig. 5-9) | `docs/tema-02/assets/diagrama-ejercicio1-inversion.svg` | ✅ Completado |

---

## Especificaciones Técnicas y Reglas del Sistema de Diseño (Estándar Tema 1)

1. **Formato:** SVG vectorial puro en código, embebido directamente en HTML con réplica en `docs/tema-02/assets/`.
2. **Paleta estricta Índigo profundo + Coral (Tema Oscuro):**
   - Fondo general: `#080C1C`
   - Superficie elevada (Cards): `#10172D`
   - Superficie 2: `#1B223C`
   - Bordes: `#2A324A`
   - Texto principal: `#EFF2F9`
   - Texto secundario / atenuado: `#A3AABE`
   - Índigo medio (curva LM, acentos secundarios): `#667FDA`
   - Coral (curva IS, énfasis): `#FF6F4A`
   - Coral claro (curva IS', etiquetas de desplazamiento): `#FFB188`
   - Verde éxito: `#55C975`
   - Rojo peligro / contracción: `#FB5668`
3. **Cero funciones `gradient()`:** Todo sombreado y volumen se genera mediante capas superpuestas de opacidad tenue (`0.06` a `0.15`), dobles trazos y retícula cartesiana punteada.
4. **Protección absoluta contra solapamiento de textos:** Cada número de eje, variable ($i, Y, i^*, Y^*$), nombre de curva ($IS, IS', LM, LM'$) y letra de nodo ($A, A', A''$) cuenta con una **pastilla protectora** (`<rect rx="3" fill="#10172D">` o `#1B223C`), garantizando cero cortes de línea y máxima legibilidad.
5. **Nodos de equilibrio concéntricos de alto contraste:** Doble anillo exterior con fondo `#10172D`, trazo `2.2px` a `2.5px` en `#EFF2F9` o color de curva, y núcleo interior sólido `r=3.5` a `4px`.
6. **Tipografía técnica:** `Inter` (títulos y etiquetas pedagógicas), `JetBrains Mono` (fórmulas, coordenadas, ejes y variables).
7. **Accesibilidad:** `role="img"` con `<title>` y `<desc>` exhaustivos en cada elemento `<svg>`.

---

## Detalles de los Diagramas Incorporados

### img-t2-01 — La Curva IS: Movimiento a lo Largo vs Desplazamiento (`diagrama-curva-is.svg`)
- **Panel izquierdo (1. Movimiento a lo largo):** Ejes $(Y, i)$, curva $IS$ fija única. Muestra el efecto de un cambio en la tasa de interés ($\Delta i \implies \downarrow I \implies \downarrow Y$), moviendo la economía del nodo $A$ al nodo $A'$ sobre la misma curva (la curva NO se mueve).
- **Panel derecho (2. Desplazamiento de la curva):** Ejes $(Y, i)$, tasa de interés fija $i^*$. Muestra cómo cambios en variables exógenas ($\downarrow G, \uparrow T$ o $\downarrow I_{aut}$) desplazan **toda** la curva hacia la izquierda a $IS'$, trasladando el equilibrio horizontalmente del nodo $A$ al nodo $B$.
- Tarjetas técnicas inferiores con las reglas canónicas de Blanchard y pastillas de protección de texto en todos los nodos y coordenadas.

### img-t2-04 — Derivación de la Curva IS a partir de $Z=Y$ (`diagrama-derivacion-is.svg`)
- **Panel superior:** Cruce keynesiano con recta de 45° ($Y=Z$) y curvas de demanda $ZZ(i)$ y $ZZ'(i')$. Muestra cómo un alza de la tasa de interés de $i$ a $i'$ contrae la inversión y desplaza la demanda hacia abajo, reduciendo el producto de $Y$ a $Y'$.
- **Panel inferior:** Espacio $(Y, i)$ alineado verticalmente donde las proyecciones ortogonales de $A$ y $A'$ trazan la curva $IS$ con pendiente negativa.

### img-t2-02 — La Curva LM Moderna (`diagrama-curva-lm.svg`)
- Recta horizontal en la tasa de interés de política monetaria fijada por el banco central ($i = i^*$).
- Recta $LM'$ desplazada hacia arriba ante una política monetaria restrictiva ($\uparrow i^*$).
- Proyecciones ortogonales, pastillas protectoras en todos los textos y zócalo de regla de política monetaria.

### img-t2-03 — Equilibrio Conjunto IS-LM (`diagrama-equilibrio-islm.svg`)
- Intersección simultánea de la curva $IS$ y la curva $LM$ en el nodo canónico $A(Y^*, i^*)$.
- Zonas de desequilibrio macroeconómico delimitadas pedagógicamente (exceso de demanda vs exceso de oferta de bienes).
- Alta definición visual con doble trazo y pastillas protectoras de coordenadas.

### img-t2-05 — Protocolo Blanchard de 3 Pasos (`diagrama-politicas-blanchard.svg`)
- **Panel izquierdo (Caso 1 - Choque Fiscal):** Desplazamiento de $IS \to IS'$ sobre la LM horizontal ($A \to A'$), ilustrando $\Delta Y < 0$ con $i^*$ constante y el desglose de los 3 pasos.
- **Panel derecho (Caso 2 - Choque Monetario):** Desplazamiento de $LM \to LM'$ sobre la curva IS ($A \to A'$), ilustrando $\Delta i^* < 0$, $\Delta Y > 0$ y el desglose de los 3 pasos.

### img-t2-06 — Ejercicio 1 Resuelto: Choque de Inversión (`diagrama-ejercicio1-inversion.svg`)
- **Panel izquierdo:** Gráfico $IS-LM$ mostrando la contracción de la inversión autónoma ($\downarrow I_{aut}$) y el nuevo equilibrio $A'$.
- **Panel derecho:** Matriz de las 10 variables macroeconómicas con etiquetas de estado (`[▼ DISMINUYÓ]`, `[▲ MEJORÓ]`, etc.) y explicación de la respuesta monetaria para mantener $i^*$.
