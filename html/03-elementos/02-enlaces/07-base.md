<h1 align='center'>Enlaces Base</h1>

<h2>📑 Contenido</h2>

- [Base](#base)

## Base

Si en tu web tienes varios enlaces que apuntan al mismo dominio mediante la etiqueta `<base>`, podemos optimizar y enlazar de manera más fácil la ruta del enlace.
**También se puede utilizar con imágenes**.

```html
<!-- Ejemplo base -->

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Base</title>
    <base
      href="https://es.wikipedia.org/wiki/Tabla_peri%C3%B3dica_de_los_elementos"
    />
  </head>
  <body>
    <h1>Tabla Periódica</h1>
    <a href="">Hidrógeno</a>
    <a href="">Litio</a>
    <a href="">Renio</a>
    <a href="">Molibdeno</a>
  </body>
</html>
```
