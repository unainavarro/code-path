<h1 align='center'>Representación de Código y Comentarios en HTML</h1>

<h2>📑 Contenido</h2>

- [Representación de Código y Comentarios en HTML](#representación-de-código-y-comentarios-en-html)
- [`<code>` – Representación de Código en Línea](#code--representación-de-código-en-línea)
- [`<pre>` – Texto Preformateado](#pre--texto-preformateado)
- [`<kbd>` – Representación de Entrada del Teclado](#kbd--representación-de-entrada-del-teclado)
- [`<samp>` – Representación de Salida del Sistema](#samp--representación-de-salida-del-sistema)
- [Comentarios en HTML](#comentarios-en-html)

## Representación de Código y Comentarios en HTML

En el desarrollo web, es frecuente la necesidad de mostrar fragmentos de código o texto relacionado con comandos y scripts, así como agregar comentarios dentro del código HTML que no serán visibles para los usuarios finales. HTML proporciona varias etiquetas semánticas diseñadas para representar código en pantalla, permitiendo que se vea de forma clara y legible. Además, los comentarios en HTML ayudan a los desarrolladores a documentar su trabajo sin interferir con el contenido visible de la página.

En este capítulo, cubriremos etiquetas esenciales como `<code>, <pre>, <kbd>, <samp>`, y cómo utilizar comentarios.

## `<code>` – Representación de Código en Línea

La etiqueta `<code>` se utiliza para representar fragmentos de código dentro de un bloque de texto, generalmente en línea con otros elementos de la página. Aunque `<code>` no formatea automáticamente el texto de forma especial (como agregar saltos de línea o sangrías), los navegadores suelen mostrar el contenido en una fuente monoespaciada, lo que es adecuado para mostrar código.

```html
<p>
  El siguiente es un ejemplo de HTML:
  <code>&lt;div&gt;Hola Mundo&lt;/div&gt;</code>.
</p>
```

En este ejemplo, el fragmento de código `<div>`Hola Mundo`</div>` está incrustado dentro de un párrafo y es fácilmente identificable gracias a la etiqueta `<code>`.

## `<pre>` – Texto Preformateado

La etiqueta `<pre>` se utiliza para mostrar texto preformateado, lo que significa que todo el espaciado en blanco, saltos de línea y tabulaciones se mantendrán exactamente como se escriben en el código fuente. Es ideal para representar bloques de código o texto que requieren un formato específico.

```html
<pre>
function saludar() {
  console.log("Hola Mundo");
}
</pre>
```

Este bloque de código en JavaScript se mostrará en pantalla con el formato exacto que tiene en el HTML, respetando los saltos de línea y las sangrías, lo que facilita la lectura de fragmentos de código más largos.

## `<kbd>` – Representación de Entrada del Teclado

La etiqueta `<kbd>` se utiliza para representar entradas del teclado, es decir, los comandos o teclas que el usuario debe presionar en una interacción. El contenido dentro de `<kbd>` normalmente se muestra en una fuente monoespaciada y se utiliza para instrucciones relacionadas con el uso de software o interfaces.

```html
<p>Para guardar el archivo, presiona <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>
```

En este ejemplo, las combinaciones de teclas están representadas de manera clara utilizando `<kbd>`, lo que facilita la comprensión de la acción a realizar.

## `<samp>` – Representación de Salida del Sistema

La etiqueta `<samp>` se utiliza para representar la salida de un programa o sistema, como los mensajes que podrían mostrarse en una terminal o consola. Similar a `<code>` y `<kbd>`, `<samp>` generalmente utiliza una fuente monoespaciada para mostrar claramente los resultados.

```html
<p>El sistema respondió: <samp>Operación completada con éxito</samp>.</p>
```

Aquí, `<samp>` destaca el texto que representa la respuesta de un sistema, diferenciándolo del texto normal del documento.

## Comentarios en HTML

Los comentarios en HTML son fragmentos de texto que los desarrolladores pueden agregar al código para hacer anotaciones o explicaciones. Estos comentarios no se muestran en el navegador y son ignorados por el motor de renderizado, lo que los hace útiles para documentar el código o agregar notas temporales sin afectar la presentación final.

```html
<!-- Aquí comienza la sección de navegación -->
<nav>
  <ul>
    <li><a href="index.html">Inicio</a></li>
    <li><a href="contacto.html">Contacto</a></li>
  </ul>
</nav>
<!-- Fin de la sección de navegación -->
```

> [!TIP]
>
> Atajo de teclado para VisualStudioCode ==> **Ctrl+k+c**

Los comentarios pueden colocarse en cualquier lugar dentro del código HTML, y es una buena práctica utilizarlos para mejorar la legibilidad y facilitar la colaboración en proyectos con otros desarrolladores.
