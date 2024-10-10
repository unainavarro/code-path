<h1 align='center'>Párrafos</h1>

<h2>📑 Contenido</h2>

- [Párrafos](#párrafos)
- [Etiqueta `<p>`](#etiqueta-p)
- [El uso de `<span>` en párrafos](#el-uso-de-span-en-párrafos)
- [Saltos de Línea: `<br>` y `<wbr>`](#saltos-de-línea-br-y-wbr)
  - [`<br>` – Salto de Línea](#br--salto-de-línea)
  - [`<wbr>` – Salto de Línea Oportuno](#wbr--salto-de-línea-oportuno)

## Párrafos

Los párrafos son uno de los elementos básicos y más utilizados en HTML, ya que permiten estructurar y organizar el texto de manera clara. A través de la etiqueta `<p>`, los párrafos dividen el contenido en bloques lógicos, facilitando la legibilidad y la presentación de la información. Además de los párrafos, en este capítulo veremos cómo los saltos de línea mediante las etiquetas `<br>` y `<wbr>` ofrecen mayor control sobre el formato del texto, así como la importancia de `<span>` para manipular segmentos específicos dentro de un párrafo sin afectar su estructura.

## Etiqueta `<p>`

La etiqueta `<p>` se utiliza para definir párrafos en HTML. Es un elemento en bloque que automáticamente genera espacio antes y después del texto, organizando así el contenido de forma visualmente accesible. Los saltos de línea( Con Enter <-| ) y el exceso de espacio en blanco o tab dentro de un párrafo no son visibles en el navegador

```html
<p>
  Este es un párrafo de ejemplo que divide el texto en bloques independientes.
</p>
<p>Este es otro párrafo, separado del anterior por un espacio automático.</p>
```

Cada párrafo se muestra en una línea nueva y el navegador suele añadir un margen inferior para separar visualmente el contenido.

## El uso de `<span>` en párrafos

La etiqueta `<span>` es un elemento en línea que se utiliza para aplicar estilos o manipular una parte específica del texto dentro de un párrafo o cualquier otro contenido en línea, sin afectar el resto de la estructura del párrafo.

```html
<p>
  Este es un <span style="color: red;">texto en rojo</span> dentro de un
  párrafo.
</p>
```

En este caso, `<span>` permite cambiar el color de una palabra o frase dentro de un párrafo sin alterar el flujo normal del texto. Esta etiqueta es especialmente útil cuando necesitas aplicar estilos específicos a partes pequeñas del texto, o cuando necesitas manipularlas mediante JavaScript.

## Saltos de Línea: `<br>` y `<wbr>`

Los saltos de línea son útiles cuando quieres interrumpir el texto en un punto específico sin comenzar un nuevo párrafo.

### `<br>` – Salto de Línea

La etiqueta `<br>` se utiliza para insertar un salto de línea forzado dentro del texto, pero sin romper el flujo del párrafo. A diferencia de `<p>`, que crea un nuevo bloque de texto, `<br>` solo cambia a la siguiente línea.

```html
<p>
  Este es un párrafo con un salto de línea.<br />Aquí continúa en la siguiente
  línea, pero sigue siendo el mismo párrafo.
</p>
```

Al insertar `<br>`, el navegador moverá el contenido a la línea siguiente sin generar espacios adicionales.

### `<wbr>` – Salto de Línea Oportuno

La etiqueta `<wbr>` (Word Break Opportunity) se utiliza para indicar al navegador dónde puede romper una palabra o frase larga si es necesario. Es útil para mantener un diseño responsivo sin forzar saltos de línea innecesarios, permitiendo que el navegador haga una ruptura solo si es necesario para ajustar el contenido.

```html
<p>
  Una palabra extremadamente larga com<wbr />plicada que puede necesitar un
  salto de línea.
</p>
```

En este caso, si la palabra "complicada" es demasiado larga para caber en una línea, el navegador puede romperla en "com-" y "plicada", pero solo si es necesario. Si no lo es, la palabra se muestra completa.
