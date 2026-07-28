import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Criterios editoriales y fuentes jurídicas",
  description:
    "Cómo elaboramos, revisamos y actualizamos las guías sobre sucesiones en La Plata y la Provincia de Buenos Aires.",
  alternates: { canonical: "/criterios-editoriales" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Criterios editoriales y fuentes jurídicas",
  url: `${SITE.url}/criterios-editoriales`,
  description:
    "Metodología de elaboración y actualización del contenido jurídico publicado por Abogados de Sucesiones en La Plata.",
  inLanguage: "es-AR",
  dateModified: SITE.updated,
  reviewedBy: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  isPartOf: {
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
  },
};

export default function EditorialCriteriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main className="legal-page editorial-page">
        <article>
          <p className="eyebrow">Transparencia del contenido</p>
          <h1>Criterios editoriales</h1>
          <p className="updated">Última revisión: 28 de julio de 2026</p>

          <p>
            Las guías de este sitio buscan ofrecer una primera orientación comprensible sobre sucesiones en La Plata y la Provincia de Buenos Aires. Son elaboradas y revisadas por el equipo de Abogados de Sucesiones en La Plata, sin atribuir experiencias, resultados ni credenciales a una persona inexistente.
          </p>

          <h2>Cómo elaboramos cada guía</h2>
          <p>
            Partimos de preguntas concretas que suelen aparecer antes o durante un proceso sucesorio. Separamos la respuesta breve, los factores que pueden modificarla y las decisiones que requieren analizar documentación. Los ejemplos son siempre hipotéticos y están identificados como tales.
          </p>

          <h2>Fuentes que priorizamos</h2>
          <p>
            Utilizamos legislación publicada en sitios oficiales, textos actualizados de la Provincia de Buenos Aires, información de la Suprema Corte bonaerense y documentación del Registro de la Propiedad. Cada guía enlaza las fuentes especialmente relacionadas con su tema.
          </p>
          <ul className="editorial-links">
            <li>
              <a href="https://www.argentina.gob.ar/normativa/nacional/235975/texto" target="_blank" rel="noreferrer">
                Código Civil y Comercial de la Nación
              </a>
            </li>
            <li>
              <a href="https://normas.gba.gob.ar/documentos/VrQlgSOB.html" target="_blank" rel="noreferrer">
                Código Procesal Civil y Comercial de la Provincia de Buenos Aires
              </a>
            </li>
            <li>
              <a href="https://www.scba.gov.ar/" target="_blank" rel="noreferrer">
                Suprema Corte de Justicia de la Provincia de Buenos Aires
              </a>
            </li>
            <li>
              <a href="https://www.rpba.gov.ar/" target="_blank" rel="noreferrer">
                Registro de la Propiedad de la Provincia de Buenos Aires
              </a>
            </li>
          </ul>

          <h2>Actualización y correcciones</h2>
          <p>
            Revisamos el contenido cuando cambia una norma relevante, un criterio institucional o un procedimiento que pueda alterar la orientación brindada. La fecha visible indica la última revisión general. Si detectás un enlace roto o una imprecisión, podés escribir a <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>

          <h2>Límites de la información</h2>
          <p>
            El contenido no reemplaza el análisis jurídico de un caso concreto. No prometemos resultados, gratuidad ni tiempos determinados. Los vínculos familiares, el patrimonio, la documentación, la jurisdicción y la existencia de conflictos pueden modificar la respuesta.
          </p>

          <p className="editorial-back"><Link href="/">Volver al inicio</Link></p>
        </article>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
