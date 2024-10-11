<h1 align='center'>Enlaces para Descargas</h1>

<h2>📑 Contenido</h2>

- [Enlaces para Descargas](#enlaces-para-descargas)

## Enlaces para Descargas

Haciendo uso del atributo **download** podemos descargar archivos del servidor de forma automática.

```html
<!-- Ejemplo enlace para descargar Navegador-Firefox -->

<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=es-MX"
  download="firefox-latest-64bit-installer.exe"
>
  Descarga la última versión de Firefox para Windows (64 bits) (Español, es-MX)
</a>

<!-- Ejemplo de enlace de descarga PDF interno-->
<a href="documento.pdf" download>Descargar documento PDF</a>
```

> [!TIP]
>
> Se puede descargar una imagen si la anidamos con un enlace y la propiedad download(Las imágenes tienen que estar en tu dominio).
>
> ```html
> <a download href="img/imagen.jpg">
>   <img src="img/imagen.jpg" alt="Imagen de prueba" />
> </a>
> ```
>
> Al hacer click en la imagen se descargara o te pedirá donde guardarla.
