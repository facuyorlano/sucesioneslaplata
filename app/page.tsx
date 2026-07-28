import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, CheckIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SITE, homeFaqs, seoPages, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Abogados de Sucesiones en La Plata y Provincia de Buenos Aires",
  description:
    "Asesoramiento jurídico claro y humano para sucesiones, declaratoria de herederos, inscripción de bienes y tracto abreviado en La Plata y toda la Provincia.",
  alternates: { canonical: "/" },
};

const services = [
  { slug: "declaratoria-de-herederos", title: "Declaratoria de herederos", text: "Reconocimiento judicial de herederos y continuidad del trámite." },
  { slug: "sucesion-sin-testamento", title: "Sucesiones sin testamento", text: "Identificación de herederos, vínculos, patrimonio y competencia." },
  { slug: "sucesion-con-testamento", title: "Sucesiones testamentarias", text: "Revisión del testamento, su alcance y los derechos involucrados." },
  { slug: "tracto-abreviado", title: "Tracto abreviado", text: "Coordinación del expediente para vender un inmueble heredado." },
  { slug: "inscripcion-de-bienes-heredados", title: "Inscripción de bienes", text: "Regularización registral de inmuebles, automotores y otros activos." },
  { slug: "conflictos-entre-herederos", title: "Conflictos entre herederos", text: "Estrategia ante desacuerdos por administración, uso o partición." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${SITE.url}/#legalservice`,
      name: SITE.name,
      url: SITE.url,
      telephone: SITE.phoneInternational,
      email: SITE.email,
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Provincia de Buenos Aires",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "La Plata",
        addressRegion: "Buenos Aires",
        addressCountry: "AR",
      },
      knowsAbout: [
        "Derecho sucesorio",
        "Declaratoria de herederos",
        "Sucesiones testamentarias",
        "Tracto abreviado",
        "Inscripción de bienes heredados",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "es-AR",
      publisher: { "@id": `${SITE.url}/#legalservice` },
    },
    {
      "@type": "FAQPage",
      mainEntity: homeFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Derecho sucesorio · Provincia de Buenos Aires</p>
            <h1>Abogados de sucesiones en La Plata y Provincia de Buenos Aires</h1>
            <p className="hero-lead">
              Una sucesión no debería sumar más incertidumbre. Brindamos asesoramiento jurídico claro y humano para iniciar, ordenar y avanzar.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl()} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Consultar por WhatsApp
              </a>
              <a className="button button-outline" href="#contacto">Contanos tu caso</a>
            </div>
          </div>
          <div className="hero-image" role="img" aria-label="Documentos ordenados sobre una mesa en un ambiente cálido" />
          <div className="location-strip">
            <PinIcon />
            <span>Atención en La Plata y toda la Provincia de Buenos Aires</span>
          </div>
        </section>

        <section className="intro-section section">
          <div className="section-kicker">Empezar por entender</div>
          <div className="intro-grid">
            <h2>Cada familia llega con una historia distinta. El trámite también lo es.</h2>
            <div>
              <p>
                A veces hay acuerdo, pero faltan documentos. Otras veces los bienes están claros y lo difícil es decidir qué hacer con ellos. También puede haber urgencia por vender, cobrar fondos o proteger un inmueble.
              </p>
              <p>
                Antes de prometer respuestas rápidas, ordenamos el problema: quiénes intervienen, qué patrimonio existe, dónde corresponde iniciar y cuál es el resultado que necesitás.
              </p>
              <a className="text-link" href={whatsappUrl("Hola. Quisiera saber cómo iniciar una sucesión.")} target="_blank" rel="noreferrer">
                Consultar cómo empezar <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="services-section section" id="servicios">
          <div className="section-heading">
            <div>
              <p className="section-kicker">En qué podemos ayudarte</p>
              <h2>Asesoramiento durante todo el proceso sucesorio</h2>
            </div>
            <p>Desde la primera revisión de documentos hasta la inscripción o venta de los bienes.</p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <Link className="service-card" href={`/${service.slug}`} key={service.slug}>
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ArrowIcon />
              </Link>
            ))}
          </div>
        </section>

        <section className="process-section section" id="como-trabajamos">
          <div className="process-copy">
            <p className="section-kicker">Cómo trabajamos</p>
            <h2>Claridad antes de avanzar</h2>
            <p>La primera conversación sirve para entender el escenario y definir qué información falta. Luego proponemos un recorrido concreto para el caso.</p>
            <a className="button button-light" href={whatsappUrl()} target="_blank" rel="noreferrer">Hablar sobre mi caso</a>
          </div>
          <ol className="process-list">
            <li><span>1</span><div><h3>Escuchamos la situación</h3><p>Qué ocurrió, quiénes intervienen y qué necesitás resolver.</p></div></li>
            <li><span>2</span><div><h3>Revisamos la información</h3><p>Vínculos, documentos, bienes, domicilio y posibles obstáculos.</p></div></li>
            <li><span>3</span><div><h3>Definimos una estrategia</h3><p>Etapas, prioridades y alcance del trabajo profesional.</p></div></li>
            <li><span>4</span><div><h3>Acompañamos el trámite</h3><p>Seguimiento comprensible y decisiones informadas en cada etapa.</p></div></li>
          </ol>
        </section>

        <section className="guide-section section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Información para decidir mejor</p>
              <h2>Guías sobre sucesiones en Provincia</h2>
            </div>
            <p>Respuestas directas, sin cifras ni plazos genéricos que pueden no corresponder a tu situación.</p>
          </div>
          <div className="guide-grid">
            {seoPages.slice(6).map((page) => (
              <Link href={`/${page.slug}`} key={page.slug} className="guide-card">
                <span>{page.eyebrow}</span>
                <h3>{page.title}</h3>
                <p>{page.answer}</p>
                <b>Leer la guía <ArrowIcon /></b>
              </Link>
            ))}
          </div>
        </section>

        <section className="coverage-section">
          <div className="coverage-inner">
            <div>
              <p className="section-kicker">Alcance provincial</p>
              <h2>Base en La Plata. Atención en toda la Provincia de Buenos Aires.</h2>
            </div>
            <div className="coverage-copy">
              <p>
                Analizamos sucesiones que tramitan en los distintos departamentos judiciales bonaerenses. La competencia depende, como regla, del último domicilio de la persona fallecida.
              </p>
              <div className="location-cloud" aria-label="Algunas localidades atendidas">
                {["La Plata", "Berisso", "Ensenada", "Quilmes", "Lomas de Zamora", "San Isidro", "Morón", "Mar del Plata", "Bahía Blanca", "Junín", "Azul", "Dolores"].map((place) => <span key={place}>{place}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section section" id="preguntas">
          <div>
            <p className="section-kicker">Preguntas frecuentes</p>
            <h2>Una primera respuesta para orientarte</h2>
            <p>La información es general. La respuesta definitiva depende de los vínculos, los bienes y el estado del trámite.</p>
          </div>
          <FaqList items={homeFaqs} />
        </section>

        <section className="contact-section section" id="contacto">
          <div className="contact-copy">
            <p className="section-kicker">Contanos tu caso</p>
            <h2>El primer paso es ordenar la situación</h2>
            <p>Podés escribir por WhatsApp o completar el formulario. No hace falta que tengas toda la documentación reunida para realizar la consulta.</p>
            <ul>
              <li><CheckIcon /> Atención en toda la Provincia</li>
              <li><CheckIcon /> Explicaciones en lenguaje claro</li>
              <li><CheckIcon /> Presupuesto según el caso</li>
            </ul>
            <a className="direct-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer">
              <WhatsAppIcon /><span><small>Escribinos por WhatsApp</small>{SITE.phoneDisplay}</span>
            </a>
          </div>
          <ContactForm />
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
