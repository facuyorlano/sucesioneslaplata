import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, WhatsAppIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consulta enviada",
  description: "Confirmación de envío de consulta.",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <>
      <SiteHeader />
      <main className="status-page">
        <div>
          <p className="eyebrow">Consulta enviada</p>
          <h1>Gracias por contarnos tu situación</h1>
          <p>Recibimos los datos del formulario. Si necesitás agregar información, también podés escribirnos por WhatsApp.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon />Abrir WhatsApp</a>
            <Link className="button button-outline" href="/">Volver al inicio <ArrowIcon /></Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

