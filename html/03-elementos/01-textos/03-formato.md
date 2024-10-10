<h1 align='center'>Formato y Enriquecimiento del Texto</h1>

<h2>📑 Contenido</h2>

- [Formato y Enriquecimiento del Texto](#formato-y-enriquecimiento-del-texto)
- [`<em>` – Énfasis](#em--énfasis)
- [`<strong>` – Importancia](#strong--importancia)
- [`<mark>` – Resaltado](#mark--resaltado)
- [`<i>` – Texto en Cursiva](#i--texto-en-cursiva)
- [`<b>` – Negrita](#b--negrita)
- [`<u>` – Subrayado](#u--subrayado)
- [`<del>` – Texto Eliminado](#del--texto-eliminado)
- [`<ins>` – Texto Insertado](#ins--texto-insertado)
- [`<small>` – Texto en tamaño reducido](#small--texto-en-tamaño-reducido)
- [`<sub>` y `<sup>` – Subíndice y Superíndice](#sub-y-sup--subíndice-y-superíndice)
- [`<span>` – Contenedor en Línea](#span--contenedor-en-línea)

## Formato y Enriquecimiento del Texto

El texto es uno de los componentes principales en cualquier página web, y HTML ofrece una variedad de etiquetas para dar formato y enriquecer el contenido textual. Estas etiquetas permiten resaltar, enfatizar o dar diferentes estilos a partes del texto, lo que mejora tanto la legibilidad como la comprensión del contenido. En este capítulo, exploraremos las etiquetas más comunes para formatear y enriquecer el texto, como `<em>, <strong>, <mark>, <b>, <i>`, entre otras.

## `<em>` – Énfasis

La etiqueta `<em>` (énfasis) se utiliza para resaltar palabras o frases que necesitan un énfasis semántico. En muchos navegadores, se muestra en cursiva, pero su función principal es semántica: indicar que el texto tiene una importancia particular.

```html
<p>Es muy importante <em>seguir las instrucciones</em> al pie de la letra.</p>
```

Este tipo de marcado mejora la accesibilidad, ya que los lectores de pantalla dan mayor énfasis a este contenido, y es semánticamente más adecuado que simplemente cambiar el estilo visual.

## `<strong>` – Importancia

`<strong>` indica que un texto es de gran importancia o relevancia. Al igual que `<em>`, es una etiqueta semántica y, por defecto, se presenta en negrita en la mayoría de los navegadores.

```html
<p>Es <strong>crucial</strong> mantener las medidas de seguridad.</p>
```

La etiqueta `<strong>` no solo destaca visualmente, sino que también proporciona significado adicional, siendo útil para SEO y accesibilidad.

## `<mark>` – Resaltado

La etiqueta `<mark>` se utiliza para resaltar texto, simulando un marcador o subrayado resaltado en papel. Es útil para destacar información clave o relevante en un texto.

```html
<p>Los cambios más recientes en la política son <mark>importantes</mark>.</p>
```

El texto resaltado por `<mark>` se suele mostrar con un fondo amarillo en los navegadores, lo que lo hace visualmente llamativo.

## `<i>` – Texto en Cursiva

La etiqueta `<i>` se utiliza para mostrar texto en cursiva. Tradicionalmente, se usaba para términos en otros idiomas o para nombres de obras (como libros o películas), pero hoy en día se recomienda usar `<em>` cuando se busca indicar énfasis semántico.

```html
<p>El título del libro es <i>Orgullo y Prejuicio</i>.</p>
```

Aunque `<i>` solo define un estilo visual, sigue siendo útil para aplicaciones específicas, como nombres o términos especializados.

## `<b>` – Negrita

La etiqueta `<b>` se utiliza para mostrar texto en negrita sin darle un significado semántico adicional. A diferencia de `<strong>`, solo aplica un estilo visual sin indicar que el texto tiene mayor importancia.

```html
<p>
  Este es un <b>aviso importante</b>, pero no tiene un significado semántico
  adicional.
</p>
```

Usar `<b>` es adecuado cuando el propósito es simplemente aplicar negrita sin implicar mayor relevancia en el contenido.

## `<u>` – Subrayado

La etiqueta `<u>` se utiliza para subrayar texto. Al igual que `<b>` y `<i>`, no tiene un significado semántico adicional, sino que solo define un estilo visual.

```html
<p>Este es un <u>término importante</u> para recordar.</p>
```

Aunque su uso ha disminuido debido a que los enlaces suelen estar subrayados, `<u>` sigue siendo útil para textos que requieren distinción visual.

## `<del>` – Texto Eliminado

La etiqueta `<del>` muestra texto que ha sido eliminado o tachado. En la mayoría de los navegadores, se muestra con una línea cruzada.

```html
<p>Este es el <del>precio antiguo</del> del producto.</p>
```

`<del>` es útil cuando quieres mostrar cambios o revisiones en el contenido, especialmente en documentos o textos colaborativos.

## `<ins>` – Texto Insertado

La etiqueta `<ins>` indica texto insertado o agregado, y se suele mostrar con un subrayado en los navegadores.

```html
<p>El nuevo precio es <ins>$49.99</ins>.</p>
```

`<ins>` se utiliza para indicar claramente las modificaciones o adiciones a un texto.

## `<small>` – Texto en tamaño reducido

Muestra el texto en un tamaño más pequeño, lo que se utiliza comúnmente para notas al pie o aclaraciones.

```html
<p>Este es un texto normal. <small>Esta es una nota al pie.</small></p>
```

## `<sub>` y `<sup>` – Subíndice y Superíndice

`<sub>` se utiliza para subíndices (como en fórmulas químicas), mientras que `<sup>` se usa para superíndices (como exponentes).

```html
<p>H<sub>2</sub>O es la fórmula del agua.</p>
<p>El número pi es aproximadamente 3.14<sup>1</sup>.</p>
```

## `<span>` – Contenedor en Línea

La etiqueta `<span>` es un contenedor en línea sin estilo por defecto. Se utiliza principalmente para aplicar estilos o manipulaciones con CSS o JavaScript a un segmento específico del texto sin alterar su estructura. A diferencia de las etiquetas como `<em>` o `<strong>`, no tiene un significado semántico propio.

```html
<p>
  Este es un texto normal con una

  <span *style*="color: blue;">palabra en azul</span>.
</p>
```
