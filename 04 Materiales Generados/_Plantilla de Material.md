---
tags: [plantilla]
---

# Plantilla — nueva nota de material

Para que un material nuevo aparezca solo en el índice y en la nota de su Tema, crear una nota nueva dentro de esta misma carpeta ("04 Materiales Generados") con este frontmatter al inicio, completado:

```yaml
---
tags: [material]
tipo: "Guía HTML"          # Guía HTML / Actividad HTML / Repaso / Tarea / Control / Pauta
tema: 1                    # número de tema (1-7)
semana: 1                  # número de semana según el Cronograma
fecha: 2026-08-25          # fecha en que se generó
archivo: "nombre-del-archivo.html"   # nombre de archivo, o enlace si se publicó como Artifact
retro: "pendiente"         # pendiente / positiva / con ajustes — actualizar tras la retroalimentación de Navas
---
```

Debajo del frontmatter, describir brevemente el material (objetivo, alcance cubierto) y enlazar de vuelta a la nota del Tema correspondiente, por ejemplo: `Ver [[Tema 1 - Repaso de Macro I]]`.

Esta nota-plantilla no aparece en las tablas de Dataview porque no tiene los campos `tipo`/`tema` en su propio frontmatter (solo los muestra dentro de un bloque de código, como ejemplo).
