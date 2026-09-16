---
tags: [tema, tema-3]
semana: 3
capitulo_blanchard: "Cap. 6"
otras_lecturas: "—"
---

# Tema 3 — IS-LM + Temas Financieros

**Semana:** 3 (07–11 sep) · Ver [[Cronograma]]
**Capítulo Blanchard:** 6
**Hito:** Control 1 (lunes 07 sep)

## Subtemas cubiertos (ALCANCE real reportado por Navas)

- [x] Tasa nominal vs. tasa real (ecuación de Fisher, límite inferior cero ZLB).
- [x] Prima de riesgo ($x$) y tasa de endeudamiento ($r + x$).
- [x] Intermediarios financieros: balance, reservas de liquidez ($rl$), apalancamiento y fragilidad bancaria.
- [x] Modelo de estimación de margen financiero (`estima margen financiero.xlsx`):
  - Margen de Intermediación: $MI = D \cdot [i_a(1-rl)(1-p) - i_p]$.
  - Retorno sobre patrimonio: $ROE = MI / K$.
  - Tasa activa exigida: $i_a^{\text{exigida}}(p) = \frac{MI^*/D + i_p}{(1-rl)(1-p)}$.
  - Choques de encaje ($rl=20\%$), mora ($p=10\%$) y escala ($D=1000$).
- [x] Transmisión al modelo IS-LM ampliado: $Y = C(Y-T) + I(Y, r+x) + G$ y crisis financieras.

## Materiales generados para este tema

- [[guia-tema3-financiero.html|Guía y Laboratorio — Tema 3: IS-LM Ampliado y Margen Financiero]] (publicado en `docs/tema-03/index.html` con simulador interactivo en vivo).
- `estima margen financiero.xlsx` (modelo base en `04 Materiales Generados/` y `docs/tema-03/assets/`).

```dataview
TABLE tipo AS "Tipo", fecha AS "Fecha", archivo AS "Archivo", retro AS "Retroalimentación"
FROM "04 Materiales Generados"
WHERE tipo AND tema = 3
SORT fecha DESC
```

_(Se llena sola: cualquier nota nueva en [[04 Materiales Generados]] con `tema: 3` en su frontmatter aparece aquí automáticamente.)_

## Notas de retroalimentación específicas

_(Enlazar entradas relevantes de la [[Bitácora de Retroalimentación]].)_
