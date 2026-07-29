import Link from "next/link";
import { SITE, whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label={`${SITE.name}, inicio`}>
          <span className="brand-mark" aria-hidden="true">A</span>
          <span className="brand-copy">
            <strong>Abogados de Sucesiones</strong>
            <small>en La Plata</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link href="/">Inicio</Link>
          <Link href="/#servicios">Sucesiones</Link>
          <Link href="/#como-trabajamos">Cómo trabajamos</Link>
          <Link href="/guias-de-sucesiones">Guías</Link>
          <Link href="/#contacto">Contacto</Link>
        </nav>

        <a className="button button-outline header-cta" href={whatsappUrl()} target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          Consultar por WhatsApp
        </a>

        <details className="mobile-menu">
          <summary aria-label="Abrir menú"><span /><span /><span /></summary>
          <nav aria-label="Navegación móvil">
            <Link href="/">Inicio</Link>
            <Link href="/#servicios">Sucesiones</Link>
            <Link href="/#como-trabajamos">Cómo trabajamos</Link>
            <Link href="/guias-de-sucesiones">Guías</Link>
            <Link href="/#preguntas">Preguntas</Link>
            <Link href="/#contacto">Contacto</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
