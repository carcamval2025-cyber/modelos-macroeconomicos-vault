# AGENTS.md — Vault Modelos Macroeconómicos

Este archivo es el punto de entrada agnóstico de herramienta: cualquier agente de IA
(Claude, Antigravity, Codex, Cursor, Aider, etc.) que abra esta carpeta debe leerlo
primero. A diferencia de `00 Inicio/00 Inicio.md` (pensado para Obsidian: usa
`[[wikilinks]]` y bloques Dataview que solo se renderizan con esos plugins), este
documento usa únicamente markdown plano y rutas de archivo relativas, para que
funcione igual sin Obsidian.

## Qué es esto

Base de conocimiento persistente para **Modelos Macroeconómicos** (Macro II, ESEN,
Tercer Ciclo 2026, catedrático Luis Morera). Estudiante: Carlos Navas.

**Las instrucciones maestras completas del curso viven en un Claude Project separado
("Modelos Macroeconómicos"), no en este repositorio.** Este vault es la memoria de
largo plazo alrededor de ese trabajo: seguimiento del curso semana a semana y
bitácora de qué funcionó y qué no en cada material generado. Un agente sin acceso a
ese Project no puede leer las instrucciones maestras directamente — las reglas que sí
importan para no romper nada están resumidas más abajo y en `02 Curso/`. Ante
cualquier duda, es mejor preguntar al usuario que inventar contenido o asumir alcance.

## Reglas que nunca se rompen (heredadas del Claude Project)

1. **Regla crítica de alcance**: nunca producir material de evaluación (Tarea,
   Control, Pauta) sobre un tema que todavía no se ha impartido según
   `02 Curso/Cronograma.md`. Si una semana no tiene un Tema nuevo asignado, se asume
   continuación del tema de la semana anterior — salvo que el usuario indique
   explícitamente hasta dónde llegó la clase (campo ALCANCE, ver más abajo).
2. **El contenido nunca debe exceder el ALCANCE declarado**, aunque pertenezca al
   mismo tema — no adelantar subtemas todavía no vistos en clase.
3. **Jerarquía de fuentes, en este orden**: (1) Programa y Cronograma del curso —
   máxima autoridad sobre alcance, fechas y ponderaciones; (2) Blanchard,
   *Macroeconomics* 9e; (3) Sala i Martín, *Economía en Colores* (capítulo amarillo,
   solo para repaso del Tema 1); (4) cualquier otro PDF futuro, una vez confirmado por
   el profesor. Mapa Tema→Capítulo en `02 Curso/Fuentes y Bibliografía.md`.
4. **Nunca inventar series de datos, tasas o cifras "representativas".** Usar
   únicamente cifras y ejemplos que aparezcan explícitamente en los PDFs del proyecto.
   El Salvador puede usarse como contexto solo si el dato real aparece en las fuentes
   cargadas; si no hay un dato real disponible, usar los ejemplos y economías
   hipotéticas del propio Blanchard.
5. **Tarea, Control y Pauta son siempre borradores de trabajo para el profesor** —
   deben revisarse y ajustarse antes de publicarse o imprimirse, y nunca se entregan a
   los estudiantes como material generado por IA. El Programa del curso prohíbe
   explícitamente el uso de IA por parte de los estudiantes durante tareas y pruebas.
   Guía HTML / Actividad HTML / Repaso sí son para consumo directo del estudiante
   (Navas) y siguen un flujo distinto al de Tarea/Control/Pauta.
6. Antes de generar cualquier material, exigir el formato de solicitud completo (ver
   `01 Meta - Aprendizaje/Protocolo de Sesión.md`) y preguntar si algo falta o es
   ambiguo — nunca asumir SEMANA, TEMA, ALCANCE o TIPO.

## Formato de solicitud requerido antes de generar cualquier material

Ver `01 Meta - Aprendizaje/Protocolo de Sesión.md` para el detalle completo, pero en
resumen cada solicitud debe declarar:

```
SEMANA:   [número según cronograma]
TEMA:     [nombre del tema, según el mapa Tema→Capítulo]
SUBTEMA:  [sección específica dentro del tema]
TIPO:     [Guía HTML / Actividad HTML / Repaso / Tarea / Control / Pauta]
FORMATO:  [HTML / Word / PDF — si se omite, se asume el formato por defecto]
OBJETIVO: [qué debe poder hacer el estudiante —o el profesor, si es Tarea/Control/Pauta]
ALCANCE:  [qué clases de la semana ya se impartieron y hasta dónde llegó el contenido]
RESTRICCIONES: [extensión, nivel, etc. — si aplica, sino omitir]
```

## Estructura de carpetas

- `00 Inicio/` — nota índice del vault (`00 Inicio.md`); `Inicio.md` es un stub que
  redirige ahí (no borrado porque el puente de archivos no tiene permiso de borrar en
  esta carpeta).
- `01 Meta - Aprendizaje/` — `Protocolo de Sesión.md` (formato de solicitud y
  checklist previo a generar), `Bitácora de Retroalimentación.md` (índice Dataview
  sobre `Bitácora/Entradas/`, una nota por sesión — ver
  `Bitácora/Plantilla - Entrada de Bitácora.md`), `Errores Comunes a Evitar.md` y
  `Patrones que Funcionan Bien.md` (reemplazan a `Lecciones Aprendidas.md`, que ahora
  es un stub que redirige ahí), `Feedback de Navas.md` (preferencias transversales
  expresadas directamente por el estudiante, distinto de la bitácora por material).
- `02 Curso/` — `Cronograma.md` (calendario oficial de 12 semanas con Tareas,
  Controles y Parciales), `Sistema de Evaluación.md` (ponderación: Tareas 10%,
  Controles 20%, Parcial 35%, Final 35%), `Fuentes y Bibliografía.md` (jerarquía de
  fuentes y mapa Tema→Capítulo), `Sistema de Diseño HTML.md` (paleta y componentes
  para Guía/Actividad/Repaso — ver nota abajo).
- `03 Temas/` — una nota por tema (Tema 1 … Tema 7), cada uno ligado a su semana y
  capítulo correspondiente.
- `04 Materiales Generados/` — `04 Materiales Generados.md` (índice, actualmente sin
  materiales generados) e `Índice de Materiales.md` (stub redirigido, mismo motivo de
  no-borrado que en `00 Inicio/`).
- `_Plantilla de Material.md` — plantilla para registrar un material nuevo en
  `04 Materiales Generados/`.
- `README.md` — una línea, identificación del repositorio.

## Sistema de diseño HTML (solo para Guía / Actividad / Repaso — no aplica a Tarea/Control/Pauta, que son Word/PDF)

Tipografía: Inter (400/600) + JetBrains Mono (500, para ecuaciones como
`Y = C + I + G + X − M`). Paleta: `#1E3A5F` azul pizarra (headers, acentos, ejes de
curvas IS-LM/Phillips/Solow, barras de progreso), `#3A6EA5` azul medio (hover/bordes
activos/badges/curva secundaria), `#E8F1F8` celeste neblina (fondos de íconos,
retroalimentación correcta), `#F6F4EF` hueso (texto sobre fondo oscuro / fondo general
de página), `#B84A3E` sobre `#FBEDEA` terracota alerta (errores, respuestas
incorrectas). Esta identidad es intencionalmente distinta a la de Macro I (verde), tal
como está documentado en `02 Curso/Sistema de Diseño HTML.md` — ajustable solo si
Navas lo pide.

**Nota para el agente**: el 2026-08-26 Navas confirmó unificar el criterio con
Contabilidad Financiera — `02 Curso/Sistema de Diseño HTML.md` ya usa borde completo +
tinte de fondo en vez de la franja de 4px en el borde izquierdo. Ver el checklist de
curación anti-AI-slop al final de ese mismo documento antes de dar un HTML por
terminado.

Reglas técnicas: sin `<form>` (usar eventos JS), sin gradientes/sombras
decorativas/colores fuera de paleta, debe abrir directo en navegador sin servidor,
responsive para escritorio, diagramas de modelos (IS-LM, Phillips, Solow) siempre como
SVG inline etiquetado, nunca imágenes externas ni capturas de libro.

## Cómo trabajar aquí

1. Antes de generar material: revisar `01 Meta - Aprendizaje/Lecciones Aprendidas.md`
   y la nota del Tema correspondiente en `03 Temas/`.
2. Exigir el formato de solicitud completo (ver arriba) antes de generar nada; si
   falta un campo o hay ambigüedad de alcance, preguntar al usuario.
3. Verificar que el tema ya se haya impartido según `02 Curso/Cronograma.md` antes de
   producir cualquier material de evaluación.
4. Después de generar: registrar el resultado en `04 Materiales Generados/` (usando
   `_Plantilla de Material.md`) y, tras recibir retroalimentación, añadir una entrada
   en `01 Meta - Aprendizaje/Bitácora de Retroalimentación.md`; promover patrones
   repetidos a `Lecciones Aprendidas.md`.
5. Si el material es Tarea, Control o Pauta: recordar que es un borrador para el
   profesor, nunca material final para los estudiantes.

## Ver también (rutas de archivo, no wikilinks)

- `00 Inicio/00 Inicio.md` — mapa del vault pensado para Obsidian (con Dataview).
- `01 Meta - Aprendizaje/Protocolo de Sesión.md`
- `02 Curso/Cronograma.md`
- `02 Curso/Fuentes y Bibliografía.md`
- `02 Curso/Sistema de Diseño HTML.md`
