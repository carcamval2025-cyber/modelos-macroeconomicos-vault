---
tags: [meta, bitacora, indice]
---

# Bitácora de Retroalimentación

Índice vivo de qué funcionó y qué no en cada material generado. Cada sesión agrega
**una nota nueva** en `Bitácora/Entradas/` (ver
[[Plantilla - Entrada de Bitácora]]) — esta tabla se arma sola con Dataview.

```dataview
TABLE tema AS "Tema", material AS "Material", funciono AS "Qué funcionó", fallo AS "Qué falló", accion AS "Ajuste"
FROM "01 Meta - Aprendizaje/Bitácora/Entradas"
WHERE fecha
SORT fecha DESC
```

_(Todavía no hay entradas.)_

Cuando el mismo tipo de error o acierto aparezca 2+ veces, resumirlo como regla en
[[Errores Comunes a Evitar]] o [[Patrones que Funcionan Bien]].
