import Link from "next/link";
import { SITE, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="footer-brand">Abogados de Sucesiones <span>en La Plata</span></Link>
          <p>Asesoramiento jurídico en sucesiones para La Plata y toda la Provincia de Buenos Aires.</p>
          <a href="https://estudiojuridicoyorlano.com.ar" target="_blank" rel="noopener noreferrer">Sitio institucional de Yorlano &amp; Asociados</a>
        </div>
        <div>
          <h2>Trámites</h2>
          <Link href="/declaratoria-de-herederos">Declaratoria de herederos</Link>
          <Link href="/sucesion-sin-testamento">Sucesión sin testamento</Link>
          <Link href="/particion-de-bienes-hereditarios">Partición hereditaria</Link>
          <Link href="/inscripcion-de-bienes-heredados">Inscripción de bienes</Link>
        </div>
        <div>
          <h2>Información</h2>
          <Link href="/guias-de-sucesiones">Todas las guías</Link>
          <Link href="/guias-de-sucesiones#quienes-heredan">Quiénes heredan</Link>
          <Link href="/guias-de-sucesiones#bienes">Bienes y partición</Link>
          <Link href="/guias-de-sucesiones#conflictos">Conflictos sucesorios</Link>
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
