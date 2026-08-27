---
tags: [material]
tipo: "Guía HTML"
tema: 1
semana: 1
fecha: 2026-08-26
archivo: "guia-tema1-repaso-macro1.html"
retro: "completado"
publicado_docs: "docs/tema-01/index.html"
fecha_publicacion: 2026-08-27
actualizacion_mayor: 2026-08-27
---

# Guía HTML — Tema 1: Repaso de Macro I (Versión Exhaustiva)

**Objetivo:** Proporcionar un material de estudio autosuficiente y de alto rigor técnico para el Tema 1 (Mercado de dinero, intermediación bancaria, multiplicador monetario y trampa de liquidez), cubriendo el 100% de Blanchard Cap. 4 y la lectura complementaria de Sala i Martín (Capítulo Amarillo).

## Alcance Cubierto y Estructura Modular

1. **Módulo 01 · Alcance y Fuentes:**
   - Delimitación temática del curso y repaso de macroeconomía básica.
   - Cápsula dedicada y rigurosa sobre el **Capítulo Amarillo** de *Economía en Colores* (Xavier Sala i Martín): evolución histórica del dinero (trueque $\to$ dinero mercancía $\to$ patrón oro $\to$ dinero fiduciario), el dinero como convención social fiduciaria basada en la confianza, monopolio de emisión, señoreaje y causas institucionales de la hiperinflación.

2. **Módulo 02 · Demanda de Dinero, Precios de Bonos y OMA (4-1 y 4-2):**
   - Teoría de portafolio y costo de oportunidad de la liquidez: derivación de $M^d = \$Y \cdot L(i)$.
   - Relación matemática y gráfica inversa entre el precio del bono cupón cero y la tasa de interés: $i = \frac{100 - P_B}{P_B} \iff P_B = \frac{100}{1+i}$.
   - Mecanismo de transmisión paso a paso de las Operaciones de Mercado Abierto (OMA expansivas vs contractivas).
   - **Figura 4-5:** Diagrama vectorial de la relación precio-tasa y flujo de OMA (`docs/tema-01/assets/diagrama-bonos-oma.svg`).
   - Recuadro Blanchard: *"¿Quién tiene todo el efectivo en dólares?"* (tenencia extranjera de billetes de $100 y economía informal).

3. **Módulo 03 · Bancos Comerciales, Dinero Central y Multiplicador (4-3):**
   - Función económica de los intermediarios financieros y estructura de balance (Activos: Reservas, Préstamos ~70%, Bonos ~30%; Pasivos: Depósitos a la vista).
   - Las 3 razones estructurales para mantener reservas (descalce de flujos, compensación interbancaria, encaje legal $\theta$).
   - **Figura 4-6:** Balance del banco comercial y del banco central (`docs/tema-01/assets/diagrama-balance.svg`).
   - Derivación formal de la demanda agregada de dinero central en el caso general con efectivo ($c$) y depósitos ($1-c$):
     $$CU^d = c M^d, \quad D^d = (1-c) M^d, \quad R^d = \theta(1-c) M^d$$
     $$H^d = [c + \theta(1-c)] \$Y L(i)$$
   - **Figura 4-6B:** Diagrama de árbol de flujos del multiplicador monetario y agregación de $H^d$ (`docs/tema-01/assets/diagrama-multiplicador.svg`).
   - Deducción del Multiplicador Monetario: $M = \frac{1}{c + \theta(1-c)} H > 1$.
   - **Figura 4-7:** Equilibrio en el mercado de dinero del banco central con desplazamientos de oferta (`docs/tema-01/assets/diagrama-equilibrio.svg`).
   - Recuadros: Mercado de fondos federales (Fed Funds / transición al *floor system* e Interest on Reserves) y análisis crítico de Bitcoin frente al dinero soberano.

4. **Módulo 04 · La Trampa de Liquidez y el Límite Inferior Cero (4-4):**
   - Fundamentos del Zero Lower Bound ($ZLB$): por qué la tasa nominal no puede caer por debajo de cero (opción de atesorar efectivo a rendimiento $0\%$).
   - Sustitución perfecta entre dinero y bonos a tasa cero y tramo perfectamente horizontal de la demanda de dinero.
   - **Figura 4-8:** Demanda y oferta de dinero en la trampa de liquidez (`docs/tema-01/assets/diagrama-trampa.svg`).
   - **Figura 4-8B:** Evidencia empírica de EE. UU. 2008–2016 (`docs/tema-01/assets/diagrama-trampa-evidencia.svg`).
   - Recuadro empírico: Expansión cuantitativa (QE), crecimiento de depósitos de $\$620\text{B} \to \$1,700\text{B}$ y explosión de reservas bancarias de $\$10\text{B} \to \$2,500\text{B}$ (250x) sin modificación de la tasa de interés ($i=0$).

5. **Módulo 05 · Síntesis y Glosario:**
   - Glosario de 10 variables y parámetros macroeconómicos ($\theta, c, H, H^d, i, \$Y, P_B, L(i), M^d, mm$).
   - Resumen de conceptos esenciales para evaluaciones.

6. **Módulo 06 · Autoevaluación Intensiva (10 Preguntas y Ejercicios):**
   - 6 preguntas conceptuales avanzadas tipo examen de cátedra con respuestas razonadas.
   - 4 problemas numéricos y empíricos completos con resolución algebraica paso a paso (cálculo de $i$ a partir de $P_B$, cálculo de equilibrio $H=H^d$, cálculo del multiplicador con $c$ y $\theta$, y análisis empírico de exceso de reservas en el ZLB).

---

## Suite de Diagramas Técnicos SVG

Todos los diagramas fueron construidos en código SVG vectorial puro bajo las reglas estrictas del sistema de diseño (Índigo profundo `#080C1C`/`#10172D`, Coral `#FF6F4A`/`#FFB188`, Índigo medio `#667FDA`, Verde `#55C975`, cero funciones `gradient()` y tipografía Inter/JetBrains Mono/Fraunces):

1. `docs/tema-01/assets/banner-tema1.svg` (img-t1-01: Banner panorámico 1600x320)
2. `docs/tema-01/assets/diagrama-balance.svg` (img-t1-02: Balance del banco comercial y banco central)
3. `docs/tema-01/assets/diagrama-equilibrio.svg` (img-t1-03: Equilibrio en el mercado de dinero central $H$)
4. `docs/tema-01/assets/diagrama-trampa.svg` (img-t1-04: Demanda de dinero y trampa de liquidez en $i=0$)
5. `docs/tema-01/assets/diagrama-bonos-oma.svg` (img-t1-05: Curva precio del bono $P_B$ vs tasa $i$ y flujo OMA)
6. `docs/tema-01/assets/diagrama-multiplicador.svg` (img-t1-06: Árbol de decisiones del multiplicador monetario y $H^d$)
7. `docs/tema-01/assets/diagrama-trampa-evidencia.svg` (img-t1-07: Evidencia empírica de depósitos y reservas en la Fed 2008–2016)

---

## Verificación de Integración
- Archivo publicado: `docs/tema-01/index.html` (ancho ampliado a `1100px`, totalmente responsive, validado con cero errores de contraste WCAG AA y cero gradientes).
