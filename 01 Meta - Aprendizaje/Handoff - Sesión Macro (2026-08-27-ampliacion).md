---
tags: [meta, handoff]
fecha: 2026-08-27
autor: "Antigravity"
destinatario: "Claude / Sesión de Modelos Macroeconómicos"
tema: 1
---

# Handoff para Claude — Ampliación Exhaustiva del Tema 1 (2026-08-27)

Esta nota documenta el trabajo de enriquecimiento teórico, matemático, visual y metodológico realizado sobre el **Tema 1 (Repaso de Macro I)**, tras la solicitud explícita de Navas de convertir esta guía en un material de estudio autosuficiente de nivel universitario avanzado.

## 1. Qué se realizó y verificó

### A. Ampliación Teórica y Pedagógica (Blanchard Cap. 4 completo + Sala i Martín)
1. **Módulo 01 · Alcance y Fuentes:**
   - Se incorporó una cápsula analítica completa sobre el **Capítulo Amarillo de Xavier Sala i Martín (*Economía en Colores*)**, abordando la evolución del dinero (trueque $\to$ dinero mercancía $\to$ patrón oro $\to$ dinero fiduciario), la naturaleza del dinero como convención social fiduciaria basada en la confianza, el monopolio de emisión y el riesgo de hiperinflación por abuso de señoreaje.
2. **Módulo 02 · Demanda de Dinero y OMA (4-1 y 4-2):**
   - Derivación rigurosa de la demanda de dinero $M^d = \$Y L(i)$ a partir de la teoría de portafolio (dinero vs bonos).
   - Relación matemática hiperbólica del precio del bono cupón cero: $P_B = \frac{100}{1+i} \iff i = \frac{100 - P_B}{P_B}$.
   - Mecánica operativa de las Operaciones de Mercado Abierto (OMA expansivas vs contractivas).
   - Cobertura del recuadro *"¿Quién tiene el efectivo en dólares?"*.
3. **Módulo 03 · Bancos Comerciales, Dinero Central y Multiplicador (4-3):**
   - Intermediación financiera, estructura de balance y las 3 razones estructurales para retener reservas.
   - Derivación formal del **caso general con efectivo y depósitos**:
     $$CU^d = c M^d, \quad D^d = (1-c) M^d, \quad R^d = \theta(1-c) M^d \implies H^d = [c + \theta(1-c)] \$Y L(i)$$
   - Deducción del **Multiplicador Monetario**: $M = \frac{1}{c + \theta(1-c)} H > 1$.
   - Mercado de fondos federales, tasa de fondos federales y transición al *floor system* moderno con remuneración sobre reservas (IOR).
   - Cobertura del recuadro *"¿Reemplazarán los bitcoins al dólar?"* (análisis de límites económicos, técnicos y políticos).
4. **Módulo 04 · La Trampa de Liquidez y el Límite Inferior Cero (4-4):**
   - Fundamentos del Zero Lower Bound ($ZLB$) y tramo perfectamente horizontal de la demanda de dinero a $i=0$.
   - Evidencia empírica de EE. UU. 2008–2016: compras masivas de bonos por la Fed (QE), crecimiento de depósitos de $\$620\text{B} \to \$1,700\text{B}$ y explosión de reservas de $\$10\text{B} \to \$2,500\text{B}$ (250x) sin modificación de la tasa de interés ($i=0$).
5. **Módulo 05 · Síntesis y Glosario:**
   - Glosario formal de 10 variables ($\theta, c, H, H^d, i, \$Y, P_B, L(i), M^d, mm$) y resumen ejecutivo para exámenes.
6. **Módulo 06 · Quiz Interactivo de Opción Múltiple (10 Preguntas):**
   - 10 preguntas y ejercicios interactivos con 4 opciones (A, B, C, D): 6 conceptuales profundas + 4 ejercicios numéricos resueltos, con retroalimentación inmediata (verde/rojo), score tracker, barra de progreso y desarrollo matemático paso a paso.

---

### B. Suite Completa de Ilustraciones Vectoriales SVG (7 piezas)
Todas las piezas cumplen con la regla de **cero funciones `gradient()`**, paleta estricta Índigo profundo + Coral, estilo outline y tipografía Inter / JetBrains Mono / Fraunces:
1. `docs/tema-01/assets/banner-tema1.svg` (img-t1-01: Banner panorámico de ambientación)
2. `docs/tema-01/assets/diagrama-balance.svg` (img-t1-02: Balance del banco comercial y banco central)
3. `docs/tema-01/assets/diagrama-equilibrio.svg` (img-t1-03: Equilibrio en mercado de dinero central $H$)
4. `docs/tema-01/assets/diagrama-trampa.svg` (img-t1-04: Demanda de dinero y trampa de liquidez en $i=0$)
5. `docs/tema-01/assets/diagrama-bonos-oma.svg` (img-t1-05: Curva precio del bono $P_B$ vs tasa $i$ y flujo OMA)
6. `docs/tema-01/assets/diagrama-multiplicador.svg` (img-t1-06: Árbol de decisiones del multiplicador monetario y $H^d$)
7. `docs/tema-01/assets/diagrama-trampa-evidencia.svg` (img-t1-07: Evidencia empírica de depósitos y reservas en la Fed 2008–2016)

---

### C. Estado del Layout y Publicación
- El contenedor de lectura (`main` y `header .wrap`) está calibrado en **`max-width: 1100px`**, ofreciendo un balance perfecto entre legibilidad tipográfica y aprovechamiento del espacio horizontal en pantallas modernas.
- La guía está publicada y desplegada en producción en GitHub Pages: `docs/tema-01/index.html`.
- Ficha de material actualizada en `04 Materiales Generados/Guía Tema 1 - Repaso de Macro I.md`.
- Registro de piezas visuales actualizado en `04 Materiales Generados/Pedidos de Imagen - Tema 1.md`.

---

### D. Decisión de Diseño Permanente — Textura Reticular Técnica de Fondo
- Se eliminó la sensación de plano uniforme del fondo oscuro mediante una **cuadrícula reticular técnica SVG de 48px** con trazos `#2A324A` (opacidad 0.35) y micro-nodos `#667FDA` (opacidad 0.4) con `background-attachment: fixed`.
- Esta decisión quedó formalizada en `02 Curso/Sistema de Diseño HTML.md` y aplicada a `docs/index.html` y `docs/tema-01/index.html` como estándar para todo el vault.
