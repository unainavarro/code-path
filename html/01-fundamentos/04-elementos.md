<h1 align='center'>Elementos</h1>

<h2>📑 Contenido</h2>

- [Elementos](#elementos)
- [¿Qué son los Elementos en HTML?](#qué-son-los-elementos-en-html)
- [Anatomía de un Elemento](#anatomía-de-un-elemento)
  - [Partes del elemento](#partes-del-elemento)
  - [Excepciones de cierre](#excepciones-de-cierre)
- [Elementos remplazados y No remplazados](#elementos-remplazados-y-no-remplazados)
  - [Elementos reemplazados](#elementos-reemplazados)
  - [Elementos No reemplazados](#elementos-no-reemplazados)

## Elementos

En este capítulo, profundizaremos en los elementos en HTML, que son las piezas fundamentales que construyen la estructura de cualquier página web. Aprenderás qué son exactamente los elementos, cómo se componen y cuáles son sus partes principales. Además, exploraremos las excepciones de cierre que existen en algunos elementos y la distinción entre elementos reemplazados y no reemplazados, conceptos clave para entender cómo los navegadores muestran contenido. Este conocimiento es esencial para dominar la creación y manipulación de documentos HTML.

## ¿Qué son los Elementos en HTML?

Los elementos HTML son los componentes básicos que se utilizan para crear páginas web. Estos elementos son etiquetas o marcas que se insertan en el código fuente de una página web para definir la estructura y el contenido de la página. Los elementos HTML proporcionan instrucciones al navegador web sobre cómo debe renderizar y mostrar la página al usuario.

## Anatomía de un Elemento

La mayoría de elementos en un HTML están formados por una etiqueta de apertura, unos atributos, el contenido y una etiqueta de cierre.

```html
<!-- La etiqueta <p></p> que se utiliza para inserta párrafos. -->
<p class="texto">Contenido</p>
```

### Partes del elemento

- Etiqueta de apertura: `<p>`
- Atributos: `<class=”texto”>`
- Contenido: `Contenido dentro de las etiquetas. Este contenido se mostrará directamente en la web.`
- Etiqueta de cierre: `</p>`

### Excepciones de cierre

Los elementos HTML que no usan etiqueta de cierre se llaman **elementos vacíos** o elementos **auto-cerrados**. Estos elementos pueden tener un `/` al final de la etiqueta, pero a partir de HTML5 ya no es necesario. Estos elementos no contienen contenido interno.

Algunos ejemplos son: `<br>,<hr>,<img>,<input>`.

## Elementos remplazados y No remplazados

En HTML, los elementos se dividen en elementos reemplazados y elementos no reemplazados, dependiendo de cómo el navegador procesa y muestra el contenido de esos elementos.

Un ejemplo claro es la etiqueta `<img>`. Cuando usas `<img>` en tu código HTML, estás insertando una imagen en tu página web, pero el contenido de esa imagen se carga desde un archivo de imagen externo. La etiqueta `<img>` es un elemento reemplazado porque su apariencia y contenido real están determinados por la imagen que se carga, no por el HTML o el CSS.

Por otro lado, un elemento como `<p>` es no reemplazado, ya que el contenido de texto dentro de la etiqueta `<p>` se muestra directamente en la página web y puede ser estilizado mediante CSS.

### Elementos reemplazados

Los elementos reemplazados son aquellos cuyo contenido es generado por el navegador en función de un recurso externo o un valor que no proviene directamente del código HTML. En lugar de mostrar el contenido del elemento como texto u otros elementos anidados, el navegador reemplaza el contenido con un recurso como una imagen, un video o un campo de entrada.

- Estos elementos requieren recursos externos para su visualización, como imágenes, videos, audio, objetos incrustados, etc.
- La representación y el aspecto de estos elementos están fuera del control directo de CSS y HTML; en cambio, dependen de los navegadores y plugins externos.
- Los elementos reemplazados se insertan en la página web a través de etiquetas HTML, pero su contenido real se carga desde fuentes externas.
- Ejemplos de elementos reemplazados incluyen `<img>, <video>, <audio>, <iframe>, <object>`, entre otros.

### Elementos No reemplazados

Los elementos no reemplazados son aquellos que directamente representan su contenido dentro del documento. El navegador procesa y muestra el contenido de estos elementos tal cual aparece en el código HTML. La mayoría de las etiquetas comunes, como las que contienen texto o estructuran el contenido, son elementos no reemplazados.

- Estos elementos permiten mostrar contenido directamente en el navegador sin necesidad de cargar recursos externos adicionales.
- El contenido de estos elementos es controlado por el propio HTML y CSS.
- Ejemplos de elementos no reemplazados incluyen `<p>, <div>, <span>, <h1>, <ul>, <ol>, <li>, <a>, <form>`, entre otros.
- Para estos elementos, el contenido dentro de las etiquetas se renderiza directamente en la página web y puede ser modificado y estilizado utilizando CSS.
