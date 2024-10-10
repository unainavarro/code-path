<h1 align='center'>Referencias</h1>

<h2>📑 Contenido</h2>

- [Referencias](#referencias)
- [`<address>` – Información de Contacto](#address--información-de-contacto)
- [`<blockquote>` – Citas en Bloque](#blockquote--citas-en-bloque)
- [`<q>` – Citas en Línea](#q--citas-en-línea)
- [`<cite>` – Referencias a Títulos de Obras](#cite--referencias-a-títulos-de-obras)
- [Atributo datetime – Fechas y Tiempos](#atributo-datetime--fechas-y-tiempos)
  - [`<time>` – Fechas y horas](#time--fechas-y-horas)
  - [`<del>` y `<ins>` – Cambios en el contenido con fecha](#del-y-ins--cambios-en-el-contenido-con-fecha)

## Referencias

En HTML, existen varias etiquetas diseñadas específicamente para mostrar referencias, citas o información relacionada con la autoría y la fecha de contenido. Estas etiquetas permiten que el texto refleje adecuadamente las fuentes, autores, fechas y contextos de manera semántica y estructurada. Utilizar correctamente estas etiquetas no solo mejora la presentación visual del contenido, sino que también facilita la comprensión y accesibilidad, tanto para los usuarios como para los motores de búsqueda.

En este capítulo, exploraremos etiquetas como `<address>, <blockquote>, <q>, <cite>`, y el atributo datetime, junto con otros elementos relevantes que pueden utilizarse para marcar referencias en HTML.

## `<address>` – Información de Contacto

La etiqueta `<address>` se utiliza para definir la información de contacto del autor o propietario de un documento o artículo. Generalmente, se usa para incluir direcciones de correo electrónico, números de teléfono o direcciones postales, y es común encontrarla en el pie de página de los sitios web.

```html
<address>
  Escritor: Juan Pérez<br />
  Email: <a href="mailto:juanperez@example.com">juanperez@example.com</a><br />
  Dirección: Calle Falsa 123, Ciudad Ejemplo
</address>
```

Es importante destacar que `<address>` está diseñado para información relacionada con el contacto de una persona o institución, y no debe usarse simplemente para cualquier dirección física que aparezca en el contenido.

## `<blockquote>` – Citas en Bloque

La etiqueta `<blockquote>` se utiliza para marcar citas largas o en bloque provenientes de otras fuentes. Esta etiqueta es un elemento de bloque, lo que significa que el navegador suele aplicarle márgenes para distinguirla visualmente del contenido circundante.

```html
<blockquote cite="https://www.ejemplo.com/articulo">
  "La web es una plataforma fundamental para la comunicación global."
</blockquote>
```

Además, el atributo `cite` permite especificar la fuente de la cita, proporcionando un valor URL que indica de dónde proviene el texto citado. Aunque el atributo no es visible en la página por defecto, es útil para la semántica del documento y puede ser aprovechado por tecnologías de asistencia.

## `<q>` – Citas en Línea

A diferencia de `<blockquote>`, la etiqueta `<q>` se utiliza para citas más cortas que aparecen dentro del flujo de texto. El contenido dentro de `<q>` generalmente se muestra entre comillas, aplicadas automáticamente por el navegador.

```html
<p>
  En su último discurso, el presidente dijo <q>es hora de actuar</q> para
  mejorar la economía.
</p>
```

El uso de `<q>` asegura que las citas breves dentro de los párrafos se presenten correctamente, con el formato adecuado y semánticamente relevante.

## `<cite>` – Referencias a Títulos de Obras

La etiqueta `<cite>` se utiliza para hacer referencia a títulos de obras como libros, películas, estudios o cualquier otro trabajo. A menudo se muestra en cursiva, aunque el navegador no obliga a un estilo particular.

```html
<p>Uno de mis libros favoritos es <cite>Dune</cite>.</p>
```

Es importante recordar que `<cite>` debe utilizarse para títulos de obras completas, no para citas de otros textos. También puede combinarse con otras etiquetas, como `<blockquote>`, para dar contexto a las fuentes de citas.

## Atributo datetime – Fechas y Tiempos

El atributo `datetime` se utiliza con las etiquetas `<time>` y `<del>` o `<ins>` para representar de manera precisa y legible por máquinas las fechas y horarios.

### `<time>` – Fechas y horas

La etiqueta `<time>` marca una fecha o una hora dentro del contenido. Con el atributo datetime, puedes proporcionar una versión exacta y legible por máquinas de la fecha u hora.

```html
<p>
  El evento se realizará el
  <time datetime="2024-11-20">20 de noviembre de 2024</time>.
</p>
```

Aquí, `<time>` permite que tanto los motores de búsqueda como las aplicaciones web comprendan exactamente cuándo se realizará el evento, lo que mejora la accesibilidad y el SEO.

### `<del>` y `<ins>` – Cambios en el contenido con fecha

Las etiquetas `<del>` y `<ins>` pueden utilizar el atributo `datetime` para registrar cuándo se eliminó o insertó contenido. Esto es útil para mantener un registro de cambios en documentos.

```html
<p>
  Este precio <del datetime="2023-01-01">$50</del> fue actualizado a
  <ins datetime="2023-02-01">$45</ins>.
</p>
```

El atributo `datetime` asegura que las fechas de los cambios sean claras y registradas adecuadamente.
