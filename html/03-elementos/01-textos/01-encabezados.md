<h1 align='center'>Encabezados</h1>

<h2>📑 Contenido</h2>

- [Encabezados](#encabezados)
- [Niveles de encabezados](#niveles-de-encabezados)
- [Características y Uso de Cada Nivel de Encabezado](#características-y-uso-de-cada-nivel-de-encabezado)
  - [`<h1>` – Encabezado Principal](#h1--encabezado-principal)
- [`<h2>` – Subtítulos de Sección](#h2--subtítulos-de-sección)
- [`<h3>` – Subsecciones dentro de Secciones](#h3--subsecciones-dentro-de-secciones)
- [`<h4>` – Encabezados de Nivel 4](#h4--encabezados-de-nivel-4)
- [`<h5>` y `<h6>` – Niveles Menores](#h5-y-h6--niveles-menores)
- [Encabezados y SEO](#encabezados-y-seo)
- [Encabezados y Accesibilidad](#encabezados-y-accesibilidad)

## Encabezados

Los encabezados en HTML juegan un papel clave en la organización y jerarquía del contenido en una página web. Los encabezados no solo son importantes para estructurar visualmente el contenido, sino que también ayudan a los motores de búsqueda y a los lectores de pantalla a comprender mejor la importancia y el contexto de la información presentada. Este capítulo explora las etiquetas de encabezado desde `<h1>` hasta `<h6>`, detallando su uso, su impacto en la accesibilidad y su papel en la optimización para motores de búsqueda (SEO).

## Niveles de encabezados

En HTML, existen seis niveles de encabezados, representados por las etiquetas `<h1>` a `<h6>`. Cada nivel de encabezado tiene un peso y una importancia decreciente, con `<h1>` siendo el más importante y `<h6>` el menos importante.

- `<h1>` es el encabezado de nivel más alto y generalmente debe usarse para el título principal de la página o sección.
- `<h2>` a `<h6>` se utilizan para subsecciones y subniveles dentro del contenido, organizando la información jerárquicamente.

```html
<h1>Título Principal de la Página</h1>
<h2>Subtítulo o Sección Principal</h2>
<h3>Subsección dentro de la Sección</h3>
<h3>Otra Subsección</h3>
<h2>Otra Sección Principal</h2>
<h3>Subsección de la Segunda Sección</h3>
```

## Características y Uso de Cada Nivel de Encabezado

### `<h1>` – Encabezado Principal

- Representa el título más importante de la página o del contenido principal.
- Idealmente, solo debe haber un `<h1>` por página para indicar su tema central.
- Importante para SEO, ya que los motores de búsqueda lo utilizan para determinar el tema principal del contenido.

## `<h2>` – Subtítulos de Sección

- Se utiliza para dividir el contenido en secciones principales.
- Ayuda a organizar el contenido en bloques temáticos relacionados con el `<h1>`.

## `<h3>` – Subsecciones dentro de Secciones

- Se usa para dividir subsecciones bajo un `<h2>`.
- Ideal para contenido más detallado que sigue la estructura jerárquica de la página.

## `<h4>` – Encabezados de Nivel 4

- Menos utilizado en comparación con `<h1>` a `<h3>`, pero útil cuando se necesita más profundidad en la estructura.
- Perfecto para artículos técnicos o informes largos con múltiples subniveles.

## `<h5>` y `<h6>` – Niveles Menores

- Pueden ser útiles para dividir secciones altamente detalladas o en documentos extensos.
- Son menos comunes y su uso depende del nivel de complejidad del contenido.

## Encabezados y SEO

Los motores de búsqueda utilizan los encabezados para indexar el contenido y entender su estructura. Un uso adecuado de los encabezados, especialmente `<h1>`, mejora la optimización para motores de búsqueda (SEO). Para obtener el máximo beneficio:

- Utiliza solo un `<h1>` por página.
- Los `<h2>` deben marcar las secciones principales.
- Los encabezados siguientes, `<h3>` a `<h6>`, deben seguir una jerarquía lógica, estructurando el contenido claramente.

Esto facilita a los motores de búsqueda y a los usuarios identificar la información más relevante en una página.

## Encabezados y Accesibilidad

Los encabezados no solo organizan visualmente el contenido, sino que también mejoran la accesibilidad de una página web:

- Los lectores de pantalla dependen de los encabezados para ayudar a los usuarios con discapacidades visuales a navegar fácilmente por el contenido.
- Una estructura clara con encabezados jerárquicos permite que estos dispositivos muestren un "índice" del contenido, facilitando la navegación.

Usar correctamente `<h1>` a `<h6>` es fundamental para crear una web accesible.
