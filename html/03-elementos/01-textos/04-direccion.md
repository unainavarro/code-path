<h1 align='center'>Dirección de texto</h1>

<h2>📑 Contenido</h2>

- [Dirección de texto](#dirección-de-texto)
- [Dirección de Texto en HTML](#dirección-de-texto-en-html)
- [La Etiqueta `<bdo>`](#la-etiqueta-bdo)
- [La Etiqueta `<bdi>`](#la-etiqueta-bdi)
- [Control de Dirección en Atributos Globales y CSS](#control-de-dirección-en-atributos-globales-y-css)
- [Uso del Atributo lang](#uso-del-atributo-lang)
- [Dirección de Texto en Listas y Tablas](#dirección-de-texto-en-listas-y-tablas)

## Dirección de texto

La dirección de texto en HTML es un aspecto fundamental para la correcta presentación y lectura del contenido en diferentes lenguas y contextos culturales. A menudo, cuando pensamos en la estructura y el formato del texto, consideramos aspectos como el tamaño, el color o el estilo, pero un detalle igualmente importante es la orientación del texto y la dirección de lectura. Algunos idiomas, como el árabe o el hebreo, se leen de derecha a izquierda (RTL), mientras que otros, como el inglés y el español, se leen de izquierda a derecha (LTR).

En este capítulo, aprenderás cómo utilizar las herramientas de HTML para especificar la dirección de texto y adaptar correctamente tu contenido para diferentes audiencias. Veremos las etiquetas y atributos clave que controlan esta funcionalidad y sus usos más comunes.

## Dirección de Texto en HTML

HTML ofrece el atributo dir para definir la dirección del texto en elementos específicos o en toda la página. Los valores que puede tomar son:

- **ltr:** (Left-To-Right) – Indica que el texto debe leerse de izquierda a derecha.
- **rtl:** (Right-To-Left) – Indica que el texto debe leerse de derecha a izquierda.
- **auto:** El navegador determina automáticamente la dirección del texto según el primer carácter con una orientación de lectura definida.

```html
<!-- Ejemplo con dir -->

<p dir="rtl">مرحبا بكم في موقعنا</p>
<!-- El texto se leerá de derecha a izquierda -->
<p dir="ltr">Welcome to our website</p>
<!-- El texto se leerá de izquierda a derecha -->
```

En el ejemplo anterior, el primer párrafo está configurado con `dir="rtl"`, lo que hace que el texto árabe se muestre de derecha a izquierda, mientras que el segundo párrafo sigue la dirección natural del texto en inglés con `dir="ltr"`.

## La Etiqueta `<bdo>`

La etiqueta `<bdo>` (Bidirectional Override) permite anular la dirección de texto predeterminada. Esto es útil para manejar casos donde un fragmento específico de texto debe mostrarse en una dirección distinta de la establecida para el resto de la página.

```html
<p>
  El nombre en árabe se muestra en dirección inversa: <bdo dir="rtl">اسم</bdo>
</p>
```

En este caso, la etiqueta `<bdo>` con el atributo dir="rtl" fuerza a que el texto dentro de ella se muestre de derecha a izquierda, incluso si la dirección de texto principal de la página es de izquierda a derecha.

## La Etiqueta `<bdi>`

La etiqueta `<bdi>` (Bidirectional Isolation) se utiliza para aislar texto con direcciones diferentes dentro de un mismo contexto. Esto es útil cuando se combinan nombres, direcciones o números en diferentes idiomas y es necesario que la dirección del texto no afecte la apariencia del contenido circundante.

```html
<p>
  El nombre del usuario es: <bdi dir="auto">مرحبا</bdi> y se muestra
  correctamente en el flujo del texto.
</p>
```

En este ejemplo, la etiqueta `<bdi>` con dir="auto" aísla el texto árabe para que se muestre con su dirección correcta dentro de un párrafo en español. Sin el aislamiento de `<bdi>`, la dirección de texto podría interferir con el orden de los elementos adyacentes.

## Control de Dirección en Atributos Globales y CSS

El atributo `dir` es un atributo global, lo que significa que se puede utilizar en prácticamente cualquier elemento HTML. Esto permite ajustar la dirección de texto a nivel de párrafo, secciones o incluso en palabras individuales dentro de un bloque de texto más grande.

Además, se puede utilizar CSS para gestionar la dirección de texto con la propiedad `direction` y la propiedad `text-align` para el alineado:

```html
<p style="direction: rtl; text-align: right;">مرحبا بكم في موقعنا</p>
```

En este ejemplo, la propiedad CSS `direction: rtl;` controla la dirección del texto, y `text-align: right;` alinea el texto a la derecha para que coincida visualmente con su orientación.

## Uso del Atributo lang

Aunque no controla directamente la dirección del texto, el atributo `lang` (lenguaje) se utiliza junto con `dir` para especificar el idioma del contenido. Definir el atributo `lang` ayuda a los navegadores y a las tecnologías de asistencia, como los lectores de pantalla, a interpretar correctamente la pronunciación y el formato del texto.

```html
<p lang="ar" dir="rtl">مرحبا بكم</p>
<p lang="en" dir="ltr">Welcome</p>
```

En este caso, se define el idioma del primer párrafo como árabe (`lang="ar"`) y la dirección de texto como RTL, mientras que el segundo párrafo está en inglés (`lang="en"`) con la dirección LTR predeterminada.

## Dirección de Texto en Listas y Tablas

Cuando trabajas con listas o tablas que combinan diferentes idiomas, el uso del atributo dir en elementos como `<li>` o `<td>` es fundamental para mantener la coherencia de la presentación. Al aplicar dir a las celdas de una tabla, por ejemplo, puedes controlar la dirección de cada dato, especialmente en tablas multilingües.

```html
<table>
  <tr>
    <td dir="rtl">اسم</td>
    <!-- Texto en árabe -->
    <td dir="ltr">Name</td>
    <!-- Texto en inglés -->
  </tr>
</table>
```

En este caso, cada celda se muestra con la dirección adecuada para su idioma, evitando confusiones visuales.
