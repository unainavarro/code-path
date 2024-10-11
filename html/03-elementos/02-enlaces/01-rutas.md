<h1 align='center'>Rutas</h1>

<h2>📑 Contenido</h2>

- [Rutas](#rutas)
- [¿Qué es una Ruta en HTML?](#qué-es-una-ruta-en-html)
- [Enlaces en HTML: La Etiqueta `<a>`](#enlaces-en-html-la-etiqueta-a)
- [Ruta Absoluta](#ruta-absoluta)
- [Ruta Relativa](#ruta-relativa)
  - [Ruta relativa al documento actual](#ruta-relativa-al-documento-actual)
  - [Ruta relativa al directorio raíz](#ruta-relativa-al-directorio-raíz)
- [Buenas Prácticas para Definir Rutas](#buenas-prácticas-para-definir-rutas)

## Rutas

En el desarrollo de sitios web, los enlaces juegan un papel fundamental al permitir que los usuarios naveguen entre diferentes páginas, recursos, o incluso sitios externos. HTML utiliza rutas para identificar la ubicación de un recurso y vincularlo mediante el elemento `<a>` o al cargar archivos, como imágenes, hojas de estilo y scripts.

Este capítulo explora cómo funcionan las rutas en HTML, su sintaxis y las diferencias entre rutas relativas y absolutas. También abordaremos las mejores prácticas para definir rutas correctamente y evitar errores que puedan afectar la funcionalidad de los enlaces en tu sitio web.

## ¿Qué es una Ruta en HTML?

Una ruta es la dirección que define la ubicación de un recurso, como una página web, un archivo CSS, una imagen o un script. Las rutas permiten al navegador saber dónde encontrar estos recursos, ya sea dentro del mismo servidor (rutas relativas) o en una ubicación externa (rutas absolutas).

## Enlaces en HTML: La Etiqueta `<a>`

La etiqueta `<a>` es la base para crear enlaces en HTML. Utiliza el atributo href para definir la ruta del recurso al que se quiere vincular. A continuación, veremos cómo definir diferentes tipos de rutas utilizando esta etiqueta.

```html
<a href="https://www.ejemplo.com">Visita nuestro sitio web</a>
```

En este caso, https://www.ejemplo.com es una ruta absoluta que lleva a un sitio web externo.

## Ruta Absoluta

Una ruta absoluta especifica una dirección completa (URL) que incluye el protocolo (como `http://` o `https://`), el dominio, y posiblemente una ruta completa hacia el recurso en el servidor. Las rutas absolutas se utilizan para enlazar recursos externos o cuando deseas asegurarte de que el enlace funcione sin importar desde qué página o directorio se acceda.

```html
<a href="https://www.ejemplo.com/recursos/imagen.png">Ver Imagen</a>
```

Este enlace llevará al usuario a la imagen ubicada en la URL especificada, sin importar desde qué parte del sitio se haga clic en el enlace.

## Ruta Relativa

Una ruta relativa se usa cuando el recurso al que se está enlazando está dentro del mismo servidor o sitio web. En lugar de especificar la URL completa, solo se proporciona la ruta desde la ubicación actual del archivo HTML. Existen dos formas comunes de rutas relativas:

- `Relativa al documento actual:` Define la ruta basada en la ubicación actual del archivo HTML.
- `Relativa al directorio raíz:` Define la ruta desde el directorio raíz del sitio web.

### Ruta relativa al documento actual

```html
<a href="articulos/tutorial.html">Leer el Tutorial</a>
```

En este caso, el navegador buscará el archivo tutorial.html dentro de la carpeta articulos, que debe estar en la misma ubicación que el archivo HTML actual.

### Ruta relativa al directorio raíz

```html
<a href="/imagenes/logo.png">Ver Logo</a>
```

Aquí, el navegador buscará el archivo logo.png en la carpeta imagenes ubicada en la raíz del sitio.

## Buenas Prácticas para Definir Rutas

- **Rutas Relativas frente a Absolutas:** Siempre que sea posible, utiliza rutas relativas para recursos dentro de tu propio sitio web. Esto facilita la portabilidad del sitio si se cambia de servidor o dominio.

- **Evitar Errores de Ruta:** Asegúrate de que la estructura de carpetas y archivos coincida con las rutas definidas en tu HTML. Un error común es definir una ruta incorrecta, lo que provoca enlaces rotos o imágenes que no se cargan.

- **Uso de / en Rutas Relativas:** Si quieres enlazar desde el directorio raíz de tu sitio web, comienza la ruta con una barra diagonal (/). De lo contrario, el navegador buscará el recurso en relación con la ubicación actual del archivo.

- **SEO y Rutas:** Para mejorar el SEO (optimización para motores de búsqueda), asegúrate de que tus enlaces sean coherentes y utilicen rutas amigables para los motores de búsqueda (URLs limpias y descriptivas).
