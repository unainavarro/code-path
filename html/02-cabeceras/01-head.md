<h1 align="center">Head</h1>

<h2>📑 Contenido</h2>

- [¿Què hay en el Head?](#què-hay-en-el-head)
- [Orden de los elementos](#orden-de-los-elementos)

## ¿Què hay en el Head?

Dentro del elemento `<head>` se guardan la información y los metadatos que **no se muestran directamente en la página web.** Aunque estos datos no se muestren son fundamentales para el funcionamiento de la web.

**Elementos más comunes dentro del `<head>`:**

- `<meta>`: Establece un metadato específico en el documento actual.
- `<title>`: Indica el título de la página.
- `<link>`: Establece una relación del documento actual con otro externo.
- `<style>`: Crea estilos CSS que afectarán únicamente al documento actual.
- `<script>`: Indica un script a cargar o ejecutar en la página actual.
- `<noscript>`: Proporcionar contenido alternativo o instrucciones a los usuarios que tienen deshabilitado o no admiten JavaScript en sus navegadores.
- `<base>`: URL base de los enlaces (usado para gestionar rutas relativas).

## Orden de los elementos

El orden y la inclusión de estos elementos pueden variar según el proyecto y las necesidades específicas. Sin embargo, es importante que elementos críticos y las hojas de estilo se coloquen de manera que se carguen temprano en el proceso de carga de la página y sean fundamentales para la representación adecuada del contenido.

Orden "típico":

1. `<meta charset="UTF-8">`: Para garantizar que los caracteres se interpreten correctamente.
2. `<meta name="viewport"`: Para optimizar los sitios para móviles.
3. `<title>`: El titulo, importante para el SEO y la identificación de la página.
4. `<meta>`: Metainformación adicional.
5. `<link>`: Enlaces externos.
6. `<style>`: Estilos de CSS.
7. `<script>`: Archivos JavaScript.
