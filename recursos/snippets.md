<h1 align='center'>Snippets</h1>

<h2>📑 Contenido</h2>

- [Markdown](#markdown)
- [HTML](#html)

## Markdown

```json
	 "Print Base": {
	 	"prefix": "md-base",
	 	"body": [
	 		"<h1 align='center'>$1</h1>\n",
	 		"<h2>📑 Contenido</h2>\n",
	 		"- [$2](#contenido)\n",
	 		"## $2",
	 	],
	 	"description": "Imprimir estructura principal para comenzar apuntes."
	 }
```

## HTML

```json
{
  //* Meta Tags
  "SEO Meta Tags-Basics": {
    "prefix": "mt-seo",
    "body": [
      "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
      "<meta name=\"description\" content=\"${1:Descripción breve de la página con las palabras clave principales.}\">",
      "<meta name=\"keywords\" content=\"${2:palabra clave 1, palabra clave 2, palabra clave 3}\">",
      "<meta name=\"author\" content=\"${3:Nombre del autor o empresa}\">"
    ],
    "description": "Snippet para SEO Meta Tags Básicas"
  },
  "Open Graph Meta Tags": {
    "prefix": "mt-og",
    "body": [
      "<meta property=\"og:title\" content=\"${1:Título optimizado para redes sociales}\">",
      "<meta property=\"og:description\" content=\"${2:Descripción atractiva para compartir en redes sociales}\">",
      "<meta property=\"og:image\" content=\"${3:URL de la imagen destacada para compartir}\">",
      "<meta property=\"og:url\" content=\"${4:URL de la página actual}\">",
      "<meta property=\"og:type\" content=\"${5:website}\">"
    ],
    "description": "Snippet para Open Graph Meta Tags"
  },
  "Twitter Card Meta Tags": {
    "prefix": "mt-twitter",
    "body": [
      "<meta name=\"twitter:card\" content=\"${1:summary_large_image}\">",
      "<meta name=\"twitter:title\" content=\"${2:Título optimizado para Twitter}\">",
      "<meta name=\"twitter:description\" content=\"${3:Descripción optimizada para Twitter}\">",
      "<meta name=\"twitter:image\" content=\"${4:URL de la imagen destacada para Twitter}\">"
    ],
    "description": "Snippet para Twitter Card Meta Tags"
  },
  "Meta Tag Robots": {
    "prefix": "mt-robots",
    "body": ["<meta name=\"robots\" content=\"${1:index, follow}\">"],
    "description": "Snippet para Meta Tag de Robots"
  }
}
```
