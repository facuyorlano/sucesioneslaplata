# Abogados de Sucesiones en La Plata

Sitio completo para `sucesioneslaplata.com`, orientado a conversión, SEO local y visibilidad en resultados generativos.

## Datos configurados

- Identidad: Abogados de Sucesiones en La Plata
- Cobertura: Provincia de Buenos Aires
- WhatsApp: 221 202-3887
- Correo: yorlanoabogados@gmail.com
- Dominio canónico: https://sucesioneslaplata.com

Los datos centrales se modifican en `lib/site.ts`.

## Desarrollo local

Requiere Node.js 22.13 o superior.

```bash
npm ci
npm run dev
```

## Control antes de publicar

```bash
npm run lint
npm run build
```

## Formulario

El formulario utiliza FormSubmit y entrega las consultas en `yorlanoabogados@gmail.com`.

La primera vez que se envíe una consulta real, FormSubmit enviará un correo de activación a esa casilla. Es necesario confirmar ese mensaje una sola vez para que comiencen a llegar las consultas.

## Migración del dominio existente

El dominio ya tuvo páginas indexadas. Antes de reemplazar la versión actual:

1. Registrar las URLs actualmente publicadas.
2. Conservar las que sigan siendo útiles.
3. Crear redirecciones permanentes 301 para toda URL reemplazada.
4. Evitar cadenas de redirecciones y múltiples versiones canónicas.
5. Publicar `https://sucesioneslaplata.com/sitemap.xml`.
6. Comprobar la versión HTTPS y el dominio preferido en Search Console.
7. Solicitar validación de los problemas previos de redirecciones y páginas canónicas alternativas.

## SEO y GEO incluidos

- Metadatos únicos y URLs canónicas.
- `robots.txt` y sitemap.
- Datos estructurados `LegalService`, `WebSite`, `Article`, `BreadcrumbList` y `FAQPage`.
- Páginas separadas por intención de búsqueda.
- Respuestas breves, preguntas frecuentes y fuentes públicas oficiales.
- Diseño responsive y accesible.
- Imagen social Open Graph.
- Política de privacidad y página de confirmación.

No se incluyó `llms.txt`: Google indica expresamente que no es necesario para aparecer en sus funciones generativas.

## Revisión profesional previa

La identidad se implementó sin nombre personal, según la especificación recibida. Antes de publicar, conviene revisar esa decisión frente al artículo 18 de las Normas de Ética Profesional de la Provincia de Buenos Aires y los criterios del Colegio departamental aplicable sobre publicidad profesional.

## Contenido

El contenido jurídico es informativo y fue revisado al 28 de julio de 2026. Debe revalidarse cuando cambie la normativa, los requisitos registrales o los criterios operativos.
