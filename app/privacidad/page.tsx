import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Información sobre el tratamiento de datos enviados desde sucesioneslaplata.com.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <article>
          <p className="eyebrow">Privacidad</p>
          <h1>Política de privacidad</h1>
          <p className="updated">Última actualización: 28 de julio de 2026.</p>
          <h2>Datos que se reciben</h2>
          <p>El formulario solicita nombre, teléfono, localidad y una descripción breve de la consulta. No se requiere enviar documentación sensible desde el sitio.</p>
          <h2>Finalidad</h2>
          <p>Los datos se utilizan exclusivamente para analizar el contacto y responder la consulta. El envío del formulario no crea por sí mismo una relación profesional.</p>
          <h2>Conservación y terceros</h2>
          <p>La información puede ser procesada por los servicios técnicos necesarios para recibir el formulario y el correo electrónico. Se conserva durante el tiempo razonablemente necesario para gestionar el contacto y cumplir obligaciones aplicables.</p>
          <h2>Contacto</h2>
          <p>Para consultar, actualizar o solicitar la eliminación de los datos enviados, escribí a <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
          <h2>Información jurídica</h2>
          <p>Los contenidos publicados son generales y no sustituyen el análisis de los hechos y documentos de un caso concreto.</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
