---
tags: [inicio, indice]
---

# Vault — Modelos Macroeconómicos (Macro II, ESEN 2026)

Este vault es la memoria persistente del curso **Modelos Macroeconómicos** (Luis Morera, ESEN, Tercer Ciclo 2026), pensado para usarse junto con el Proyecto de Claude del mismo nombre.

> [!info] ¿Usas Antigravity, Codex u otro agente que no sea Claude?
> Este vault también tiene [`AGENTS.md`](AGENTS.md) en la raíz — la misma orientación que esta nota, pero en markdown plano sin wikilinks ni Dataview, para que cualquier agente de IA la lea sin depender de plugins de Obsidian.

## ¿Para qué sirve?

Dos cosas que el chat de Claude por sí solo no resuelve bien:

1. **Seguimiento del curso**: cronograma, temas, alcance cubierto en clase y qué materiales ya se generaron para cada uno.
2. **Aprendizaje conjunto**: una bitácora donde queda registrado qué funcionó bien y qué no en los materiales generados (guías, actividades, tareas, controles), para que tanto Navas como Claude vayan ajustando el enfoque con el tiempo — en lugar de repetir los mismos errores sesión tras sesión.

## Cómo se usa con Claude

- Esta carpeta vive dentro de "Modelos Macréconomicos", que está conectada a las sesiones de Claude (Cowork). Cuando la carpeta esté conectada, Claude puede leer y actualizar estas notas directamente.
- **Antes de generar un material nuevo**, Claude debería revisar [[Lecciones Aprendidas]] y la nota del [[03 Temas|Tema]] correspondiente.
- **Después de que Navas dé retroalimentación** sobre un material (o califique cómo salió un control/tarea), se agrega una entrada en [[Bitácora de Retroalimentación]]. Si el patrón se repite o es importante, se resume como regla en [[Lecciones Aprendidas]].
- Si la carpeta no está conectada en una sesión, Navas puede pegar o resumir las notas relevantes directamente en el chat.

## Estructura

- **[[01 Meta - Aprendizaje]]** — cómo trabajamos juntos: protocolo de solicitud, bitácora de retroalimentación, lecciones aprendidas.
- **[[02 Curso]]** — cronograma, sistema de evaluación, fuentes/bibliografía, sistema de diseño HTML.
- **[[03 Temas]]** — una nota por cada uno de los 7 temas del curso (mapeo a capítulos de Blanchard, alcance cubierto, materiales generados).
- **[[04 Materiales Generados]]** — índice cronológico de todo lo producido (guías, actividades, repasos, tareas, controles).

## Reglas de fondo (heredadas del Proyecto de Claude)

- No se produce material de evaluación de un tema que aún no se ha impartido según el cronograma.
- El contenido nunca excede el ALCANCE declarado en la solicitud, aunque pertenezca al mismo tema.
- Solo se usan cifras y ejemplos que aparecen en los PDFs del curso (Programa, Cronograma, Blanchard, Sala i Martín).
- Tarea/Control/Pauta son siempre borradores para revisión del profesor, nunca material final para estudiantes.

La versión completa y autoritativa de estas reglas vive en las instrucciones del Proyecto de Claude — este vault las resume para consulta rápida, no las reemplaza.


## Complementos de Obsidian usados aquí

- **Dataview** — arma solas las tablas del índice de materiales y de cada nota de Tema, a partir del frontmatter de cada nota de material.
- **Folder Notes** — las carpetas principales (Meta, Curso, Temas, Materiales Generados) tienen una nota-resumen con el mismo nombre que la carpeta; al hacer clic en la carpeta se abre esa nota en vez de solo desplegarla.
- **Homepage** — opcional: en Configuración → Community plugins → Homepage, elegir esta nota (`00 Inicio`) para que se abra automáticamente al iniciar Obsidian.
- **Banners / Iconize** — cosméticos y opcionales; no se configuraron automáticamente porque requieren elegir imágenes o íconos a mano desde Obsidian.
