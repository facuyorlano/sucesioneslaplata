"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { whatsappUrl } from "@/lib/site";

type State = "idle" | "submitting" | "success" | "error";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("sourcePage", window.location.pathname);
    data.set("sourceQuery", window.location.search);
    data.set("referrer", document.referrer);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error || "No pudimos enviar la consulta.");
      form.reset();
      setState("success");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "No pudimos enviar la consulta.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="contact-form form-success" role="status">
        <h3>Recibimos tu consulta</h3>
        <p>Vamos a revisar la información para definir si podemos ayudarte. El envío no implica todavía la aceptación profesional del caso.</p>
        <a className="button button-primary" href={whatsappUrl("Hola. Acabo de enviar una consulta desde sucesioneslaplata.com.")} target="_blank" rel="noreferrer">Continuar por WhatsApp</a>
      </div>
    );
  }

  return (
    <form className={`contact-form${compact ? " contact-form-compact" : ""}`} onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          Nombre
          <input name="name" type="text" autoComplete="name" required minLength={2} maxLength={120} placeholder="¿Cómo te llamás?" />
        </label>
        <label>
          WhatsApp
          <input name="phone" type="tel" autoComplete="tel" required minLength={6} maxLength={40} placeholder="Código de área y número" />
        </label>
      </div>
      <label>
        ¿En qué localidad se tramitaría?
        <input name="locality" type="text" autoComplete="address-level2" maxLength={160} placeholder="Ej.: La Plata, Quilmes, Mar del Plata" />
      </label>
      <label>
        Contanos brevemente tu situación
        <textarea name="message" required minLength={10} maxLength={4000} rows={compact ? 4 : 5} placeholder="Qué necesitás resolver y qué documentación tenés" />
      </label>
      <input className="honeypot" type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="consent">
        <input type="checkbox" name="contactConsent" value="yes" required />
        <span>Acepto que estos datos sean utilizados únicamente para responder mi consulta, según la <Link href="/privacidad">política de privacidad</Link>.</span>
      </label>
      {state === "error" && <p className="form-note" role="alert">{error}</p>}
      <button className="button button-primary" type="submit" disabled={state === "submitting"}>{state === "submitting" ? "Enviando…" : "Enviar consulta"}</button>
      <p className="form-note">No envíes documentación sensible hasta recibir respuesta.</p>
    </form>
  );
}
