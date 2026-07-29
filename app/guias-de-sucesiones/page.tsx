import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, WhatsAppIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { getSeoPage, guideCategories, SITE, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guías de sucesiones en Provincia de Buenos Aires",
  description:
    "Guías claras sobre herederos, trámites, bienes, partición y conflictos sucesorios en La Plata y la Provincia de Buenos Aires.",
  alternates: { canonical: "/guias-de-sucesiones" },
};

const allGuides = guideCategories.flatMap((category) =>
  category.slugs.map((slug) => getSeoPage(slug)).filter(Boolean),
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE.url}/guias-de-sucesiones#collection`,
      name: "Guías de sucesiones en Provincia de Buenos Aires",
      description:
        "Información jurídica general sobre trámites, herederos, bienes y conflictos sucesorios.",
      url: `${SITE.url}/guias-de-sucesiones`,
      inLanguage: "es-AR",
      isPartOf: { "@id": `${SITE.url}/#website` },
    },
    {
      "@type": "ItemList",
      itemListElement: allGuides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide?.title,
        url: `${SITE.url}/${guide?.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guías de sucesiones",
          item: `${SITE.url}/guias-de-sucesiones`,
        },
      ],
    },
  ],
};

export default function GuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main>
        <header className="guides-hero">
          <div>
            <nav className="breadcrumbs" aria-label="Migas de pan">
              <Link href="/">Inicio</Link><span>/</span><span>Guías de sucesiones</span>
            </nav>
            <p className="eyebrow">Biblioteca jurídica · Provincia de Buenos Aires</p>
            <h1>Guías de sucesiones para entender qué hacer</h1>
            <p>
              Respuestas organizadas por etapa y problema. Elegí el tema más parecido a tu situación
              y revisá qué información conviene reunir antes de avanzar.
            </p>
            <a
              className="button button-primary"
              href={whatsappUrl("Hola. Estuve leyendo las guías y quisiera consultar por una sucesión.")}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon /> Consultar por WhatsApp
            </a>
          </div>
        </header>

        <nav className="guide-index section" aria-label="Categorías de guías">
          {guideCategories.map((category) => (
            <a href={`#${category.id}`} key={category.id}>
              <span>{category.slugs.length} guías</span>
              <strong>{category.title}</strong>
            </a>
          ))}
        </nav>

        <div className="guide-library section">
          {guideCategories.map((category) => (
            <section className="guide-category" id={category.id} key={category.id}>
              <div className="guide-category-heading">
                <div>
                  <p className="section-kicker">Guías por temática</p>
                  <h2>{category.title}</h2>
                </div>
                <p>{category.description}</p>
              </div>
              <div className="guide-list">
                {category.slugs.map((slug) => {
                  const guide = getSeoPage(slug);
                  if (!guide) return null;
                  return (
                    <Link href={`/${guide.slug}`} key={guide.slug}>
                      <span>{guide.eyebrow}</span>
                      <h3>{guide.title}</h3>
                      <p>{guide.answer}</p>
                      <b>Leer guía <ArrowIcon /></b>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
