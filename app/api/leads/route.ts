import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL ?? "https://yohbgqgscbpbbfeqivts.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY ?? "sb_publishable_mg8dYdOzV1ZwofMAGcrrTg_OKMzJzsJ";

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    if (clean(body.company, 100)) return NextResponse.json({ ok: true });

    const name = clean(body.name, 120);
    const phone = clean(body.phone, 40);
    const locality = clean(body.locality, 160);
    const message = clean(body.message, 4000);
    const sourcePage = clean(body.sourcePage, 500);
    const sourceQuery = clean(body.sourceQuery, 1000);
    const referrer = clean(body.referrer, 1000);
    const contactConsent = body.contactConsent === "yes";

    if (name.length < 2 || phone.length < 6 || message.length < 10 || !contactConsent) {
      return NextResponse.json({ ok: false, error: "Revisá los datos obligatorios y el consentimiento." }, { status: 400 });
    }

    const response = await fetch(`${SUPABASE_URL}/rest/v1/website_leads`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        name,
        phone,
        email: null,
        practice_area: "Sucesiones",
        message: locality ? `Localidad: ${locality}\n\n${message}` : message,
        source: "sucesioneslaplata_web",
        status: "nuevo",
        how_found: null,
        source_page: sourcePage || null,
        source_query: sourceQuery || null,
        landing_page: sourcePage || null,
        referrer: referrer || null,
        contact_consent: contactConsent,
        marketing_consent: false,
        user_agent: clean(request.headers.get("user-agent"), 500) || null,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Supabase succession lead insert failed", response.status, await response.text());
      return NextResponse.json({ ok: false, error: "No pudimos guardar la consulta. Probá por WhatsApp." }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Succession lead endpoint error", error);
    return NextResponse.json({ ok: false, error: "No pudimos procesar la consulta." }, { status: 500 });
  }
}
