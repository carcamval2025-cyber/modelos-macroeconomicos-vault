---
tags: [meta, protocolo]
---

# Protocolo de Sesión

Formato que debe traer (o que Claude debe pedir) cada solicitud de material, tal como lo define el Proyecto de Claude:

```
SEMANA: [número según cronograma]
TEMA: [nombre del tema, según el mapa Tema→Capítulo]
SUBTEMA: [sección específica dentro del tema]
TIPO: [Guía HTML / Actividad HTML / Repaso / Tarea / Control / Pauta]
FORMATO: [HTML / Word / PDF — si se omite, se asume el formato por defecto]
OBJETIVO: [qué debe poder hacer el estudiante —o el profesor, si es Tarea/Control/Pauta— al terminar]
ALCANCE: [qué clases de la semana ya se impartieron y hasta dónde llegó el contenido]
RESTRICCIONES: [extensión, nivel, etc. — si aplica, sino omitir]
```

## Checklist antes de entregar cualquier material

- [ ] La semana y el tema coinciden con el cronograma.
- [ ] El contenido no excede el ALCANCE declarado.
- [ ] Cada cifra o dato citado proviene de un PDF del proyecto.
- [ ] Se usó el formato correcto según el TIPO (HTML vs. Word/PDF).
- [ ] Si es HTML: paleta y tipografía correctas (ver [[Sistema de Diseño HTML]]), sin `<form>`, sin gradientes, funciona sin servidor.
- [ ] Se citó la fuente (capítulo/sección) al pie del material.
- [ ] Si es Tarea/Control: se incluyó (o se ofreció) una Pauta de corrección.

## Después de entregar un material

1. Preguntar o esperar la retroalimentación de Navas (¿sirvió tal cual? ¿hubo que corregir algo? ¿cómo reaccionaron los estudiantes si ya se usó en clase?).
2. Registrar una entrada en [[Bitácora de Retroalimentación]].
3. Si aplica, actualizar [[Lecciones Aprendidas]] con la regla general detrás del caso puntual.
4. Crear una nota nueva en [[04 Materiales Generados]] usando [[_Plantilla de Material]] — aparece sola en la tabla del índice y en la de su Tema.
