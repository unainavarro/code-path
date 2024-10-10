<h1 align='center'>Acrónimos y Entidades</h1>

<h2>📑 Contenido</h2>

- [Acrónimos y Entidades](#acrónimos-y-entidades)
- [Acrónimos](#acrónimos)
- [Entidades](#entidades)

## Acrónimos y Entidades

En el desarrollo de contenido web, los acrónimos y las entidades desempeñan un papel importante para transmitir información de manera concisa y precisa. En este capítulo, abordaremos cómo HTML gestiona estos dos aspectos y cómo puedes utilizarlos correctamente para enriquecer tus páginas web.

Los acrónimos y las abreviaturas, por un lado, son formas reducidas de términos más largos y deben ser interpretadas correctamente por los usuarios y las tecnologías de asistencia. Por otro lado, las entidades son representaciones de caracteres especiales que no pueden o no deben ser escritos directamente en el código HTML. Entender cómo y cuándo utilizar estas herramientas es clave para crear contenido accesible y bien estructurado.

## Acrónimos

La etiqueta `<abbr>` se utiliza para definir una abreviatura o acrónimo. Esta etiqueta ayuda a los motores de búsqueda y a los navegadores a identificar el significado completo de una abreviatura o acrónimo y proporciona información adicional a los usuarios cuando pasan el cursor sobre la abreviatura. La etiqueta `<abbr>` se coloca generalmente alrededor del texto abreviado y se utiliza en combinación con el atributo `title` para proporcionar la expansión o descripción completa de la abreviatura.

Debe usarse siempre que un acrónimo o abreviatura aparezca por primera vez en una página o documento para asegurar que todos los usuarios puedan entender su significado. Esto es especialmente útil para lectores de pantalla y motores de búsqueda, ya que mejora la accesibilidad y la semántica del contenido.

```html
<!-- HTML -->
<p>
  <abbr title="Hypertext Markup Language">HTML</abbr> es un lenguaje de marcado
  utilizado para crear contenido en la web.
</p>
```

> [!TIP]
>
> Si lo que quieres es marcar el término que se quiere definir se puede utilizar
> la etiqueta `<dfn>` <br>
>
> Ejemplo: <br>
> El `<dfn>`HTML`</dfn>` es un lenguaje de marcado para hipertextos.

## Entidades

Las entidades(Entities) son secuencias de caracteres especiales que se utilizan en documentos HTML para representar caracteres que tienen significados especiales o que no se pueden mostrar directamente en el código fuente de HTML debido a su uso como marcas de código o símbolos reservados. Las entidades HTML permiten mostrar estos caracteres de manera correcta y segura en una página web. Cada entidad HTML está compuesta por un símbolo &, seguido de un nombre o número de referencia, y finalizada con un punto y coma ;.

**Ejemplos de entidades comunes:**

- `&lt;`: Representa el signo menor que <.
- `&gt;`: Representa el signo mayor que >.
- `&amp;`: Representa el símbolo de ampersand &.
- `&quot;`: Representa las comillas dobles " en texto.
- `&apos;`: Representa una comilla simple ' en texto.
- `&nbsp;`: Representa un espacio en blanco no rompible (non-breaking space), que evita que el navegador coloque un salto de línea o espacio en blanco adicional.
- `&copy;`: Representa el símbolo de derechos de autor ©.
- `&reg;`: Representa el símbolo de marca registrada ®.

```HTML
<!-- Ejemplo -->
<p>Este es un ejemplo de uso de &lt;strong&gt;etiquetas HTML&lt;/strong&gt;.</p>
<p>&copy; 2023 Mi Empresa, Inc.</p>
<p>&euro; 100.00</p>
```
