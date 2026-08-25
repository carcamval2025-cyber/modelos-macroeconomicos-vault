---
tags: [materiales, indice]
aliases: ["Índice de Materiales"]
---

# Materiales Generados

Índice vivo de todo lo producido en el proyecto. Cada material es una nota individual dentro de esta carpeta (ver [[_Plantilla de Material]] para crear una nueva); estas tablas se arman solas con Dataview a partir del frontmatter de cada nota — no hay que llenarlas a mano.

## Todos los materiales

```dataview
TABLE tipo AS "Tipo", tema AS "Tema", semana AS "Semana", fecha AS "Fecha", archivo AS "Archivo", retro AS "Retroalimentación"
FROM "04 Materiales Generados"
WHERE tipo
SORT fecha DESC
```

## Pendientes de retroalimentación

```dataview
TABLE tipo AS "Tipo", tema AS "Tema", fecha AS "Fecha", archivo AS "Archivo"
FROM "04 Materiales Generados"
WHERE tipo AND retro = "pendiente"
SORT fecha DESC
```

Cuando Navas dé retroalimentación sobre un material, actualizar el campo `retro` en la nota de ese material (y registrar el detalle en [[Bitácora de Retroalimentación]]).
