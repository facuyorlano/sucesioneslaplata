import Link from "next/link";
import { SITE } from "@/lib/site";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  return (
    <form
      className={`contact-form${compact ? " contact-form-compact" : ""}`}
      action={`https://formsubmit.co/${SITE.email}`}
      method="POST"
    >
      <input type="hidden" name="_subject" value="Nueva consulta desde sucesioneslaplata.com" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={`${SITE.url}/gracias`} />
      <input className="honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="field-row">
        <label>
          Nombre
          <input name="nombre" type="text" autoComplete="name" required placeholder="¿Cómo te llamás?" />
        </label>
        <label>
          WhatsApp
          <input name="telefono" type="tel" autoComplete="tel" required placeholder="Código de área y número" />
        </label>
      </div>
      <label>
        ¿En qué localidad se tramitaría?
        <input name="localidad" type="text" autoComplete="address-level2" placeholder="Ej.: La Plata, Quilmes, Mar del Plata" />
      </label>
      <label>
        Contanos brevemente tu situación
        <textarea name="consulta" required rows={compact ? 4 : 5} placeholder="Qué necesitás resolver y qué documentación tenés" />
      </label>
      <label className="consent">
        <input type="checkbox" name="consentimiento" required />
        <span>Acepto que estos datos sean utilizados únicamente para responder mi consulta, según la <Link href="/privacidad">política de privacidad</Link>.</span>
      </label>
      <button className="button button-primary" type="submit">Enviar consulta</button>
      <p className="form-note">No envíes documentación sensible hasta recibir respuesta.</p>
    </form>
  );
}
