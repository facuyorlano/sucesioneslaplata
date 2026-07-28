import Link from "next/link";
import { SITE, seoPages, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="footer-brand">Abogados de Sucesiones <span>en La Plata</span></Link>
          <p>Asesoramiento jurídico en sucesiones para La Plata y toda la Provincia de Buenos Aires.</p>
        </div>
        <div>
          <h2>Trámites</h2>
          {seoPages.slice(0, 5).map((page) => (
            <Link href={`/${page.slug}`} key={page.slug}>{page.eyebrow}</Link>
          ))}
        </div>
        <div>
          <h2>Guías</h2>
          {seoPages.slice(5).map((page) => (
            <Link href={`/${page.slug}`} key={page.slug}>{page.eyebrow}</Link>
          ))}
        </div>
        <div>
          <h2>Contacto</h2>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp {SITE.phoneDisplay}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span>Provincia de Buenos Aires</span>
        </div>
      </div>
      <div className="footer-legal">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <p><Link href="/criterios-editoriales">Criterios editoriales</Link> · <Link href="/privacidad">Privacidad</Link> · Contenido informativo general.</p>
      </div>
    </footer>
  );
}
