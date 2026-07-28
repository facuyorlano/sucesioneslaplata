import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, CheckIcon, WhatsAppIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { getSeoPage, seoPages, SITE, whatsappUrl } from "@/lib/site";

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: `/${page.slug}`,
      type: "article",
      modifiedTime: `${SITE.updated}T12:00:00-03:00`,
    },
  };
}

export default async function SeoContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) notFound();

  const related = page.related.map(getSeoPage).filter(Boolean);
  const message = `Hola. Quisiera consultar por ${page.eyebrow.toLowerCase()} en la Provincia de Buenos Aires.`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: page.title,
        description: page.description,
        datePublished: "2026-07-28",
        dateModified: SITE.updated,
        inLanguage: "es-AR",
        mainEntityOfPage: `${SITE.url}/${page.slug}`,
        author: { "@type": "Organization", name: SITE.name, url: SITE.url },
        publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
        about: { "@type": "Thing", name: page.eyebrow },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.url },
          { "@type": "ListItem", position: 2, name: page.eyebrow, item: `${SITE.url}/${page.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main>
        <article>
          <header className="article-hero">
            <div className="article-hero-inner">
              <nav className="breadcrumbs" aria-label="Migas de pan">
                <Link href="/">Inicio</Link><span>/</span><span>{page.eyebrow}</span>
              </nav>
              <p className="eyebrow">{page.eyebrow} · Provincia de Buenos Aires</p>
              <h1>{page.title}</h1>
              <p className="article-lead">{page.intro}</p>
              <a className="button button-primary" href={whatsappUrl(message)} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Consultar por WhatsApp
              </a>
            </div>
          </header>

          <div className="article-layout section">
            <div className="article-main">
              <section className="direct-answer" aria-label="Respuesta breve">
                <span>Respuesta breve</span>
                <p>{page.answer}</p>
              </section>

              {page.sections.map((section) => (
                <section className="article-section" key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => <li key={bullet}><CheckIcon />{bullet}</li>)}
                    </ul>
                  )}
                </section>
              ))}

              <section className="article-note">
                <h2>Una aclaración importante</h2>
                <p>
                  Esta guía ofrece información general y fue revisada el 28 de julio de 2026. La solución aplicable depende de los vínculos, los bienes, la documentación y el estado de cada expediente.
                </p>
              </section>

              <section className="article-faq">
                <p className="section-kicker">Preguntas frecuentes</p>
                <h2>Sobre {page.eyebrow.toLowerCase()}</h2>
                <FaqList items={page.faqs} />
              </section>

              <section className="sources">
                <h2>Fuentes normativas y judiciales</h2>
                <p>Contenido elaborado a partir de fuentes públicas oficiales:</p>
                <ul>
                  <li><a href="https://www.argentina.gob.ar/normativa/nacional/235975/texto" target="_blank" rel="noreferrer">Código Civil y Comercial de la Nación</a></li>
                  <li><a href="https://normas.gba.gob.ar/documentos/BOa6XTk0.html" target="_blank" rel="noreferrer">Ley 14.967 de honorarios profesionales de la Provincia</a></li>
                  <li><a href="https://www.scba.gov.ar/" target="_blank" rel="noreferrer">Suprema Corte de Justicia de la Provincia de Buenos Aires</a></li>
                </ul>
              </section>
            </div>

            <aside className="article-aside">
              <div className="aside-card">
                <p className="section-kicker">¿Necesitás orientación?</p>
                <h2>Revisemos tu situación</h2>
                <p>Contanos qué necesitás resolver y qué documentación tenés disponible.</p>
                <a className="button button-primary button-full" href={whatsappUrl(message)} target="_blank" rel="noreferrer">
                  <WhatsAppIcon /> Escribir por WhatsApp
                </a>
                <a className="aside-email" href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </aside>
          </div>
        </article>

        <section className="related-section section">
          <div className="section-heading">
            <div><p className="section-kicker">También puede interesarte</p><h2>Seguir entendiendo el proceso</h2></div>
          </div>
          <div className="related-grid">
            {related.map((item) => item && (
              <Link href={`/${item.slug}`} key={item.slug}>
                <span>{item.eyebrow}</span><h3>{item.title}</h3><ArrowIcon />
              </Link>
            ))}
          </div>
        </section>

        <section className="article-contact section" id="contacto">
          <div>
            <p className="section-kicker">Consulta sobre tu caso</p>
            <h2>No hace falta que tengas todo resuelto para empezar</h2>
            <p>Completá el formulario con la información disponible. Te responderemos para indicarte cómo continuar.</p>
          </div>
          <ContactForm compact />
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}

