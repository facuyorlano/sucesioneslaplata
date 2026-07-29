"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon, WhatsAppIcon } from "./icons";

type Guide = {
  slug: string;
  title: string;
  eyebrow: string;
};

type Intent = {
  label: string;
  keywords: string[];
  guides: string[];
};

type Category = {
  id: string;
  label: string;
  prompt: string;
  intents: Intent[];
};

const guideBySlug: Record<string, Guide> = {
  "documentos-para-iniciar-una-sucesion": {
    slug: "documentos-para-iniciar-una-sucesion",
    title: "Documentos para iniciar una sucesión",
    eyebrow: "Documentación",
  },
  "declaratoria-de-herederos": {
    slug: "declaratoria-de-herederos",
    title: "Declaratoria de herederos",
    eyebrow: "Primeras etapas",
  },
  "sucesion-sin-testamento": {
    slug: "sucesion-sin-testamento",
    title: "Sucesión sin testamento",
    eyebrow: "Sucesión intestada",
  },
  "sucesion-con-testamento": {
    slug: "sucesion-con-testamento",
    title: "Sucesión con testamento",
    eyebrow: "Testamento",
  },
  "costo-de-una-sucesion-en-provincia-de-buenos-aires": {
    slug: "costo-de-una-sucesion-en-provincia-de-buenos-aires",
    title: "Costo de una sucesión en Provincia",
    eyebrow: "Costos",
  },
  "cuanto-tarda-una-sucesion-en-provincia-de-buenos-aires": {
    slug: "cuanto-tarda-una-sucesion-en-provincia-de-buenos-aires",
    title: "Cuánto tarda una sucesión",
    eyebrow: "Etapas y duración",
  },
  "renunciar-a-una-herencia": {
    slug: "renunciar-a-una-herencia",
    title: "Renunciar a una herencia",
    eyebrow: "Renuncia",
  },
  "cesion-de-derechos-hereditarios": {
    slug: "cesion-de-derechos-hereditarios",
    title: "Cesión de derechos hereditarios",
    eyebrow: "Cesión",
  },
  "derechos-del-conyuge-viudo-en-una-sucesion": {
    slug: "derechos-del-conyuge-viudo-en-una-sucesion",
    title: "Derechos del cónyuge viudo",
    eyebrow: "Cónyuge",
  },
  "conviviente-hereda-en-argentina": {
    slug: "conviviente-hereda-en-argentina",
    title: "¿El conviviente hereda?",
    eyebrow: "Unión convivencial",
  },
  "sucesion-sin-hijos-quienes-heredan": {
    slug: "sucesion-sin-hijos-quienes-heredan",
    title: "Sucesión sin hijos: quiénes heredan",
    eyebrow: "Orden sucesorio",
  },
  "herencia-entre-hermanos-y-sobrinos": {
    slug: "herencia-entre-hermanos-y-sobrinos",
    title: "Herencia entre hermanos y sobrinos",
    eyebrow: "Parientes colaterales",
  },
  "sucesion-con-herederos-menores-de-edad": {
    slug: "sucesion-con-herederos-menores-de-edad",
    title: "Herederos menores de edad",
    eyebrow: "Protección de menores",
  },
  "heredero-omitido-ampliacion-declaratoria": {
    slug: "heredero-omitido-ampliacion-declaratoria",
    title: "Heredero omitido y ampliación",
    eyebrow: "Heredero omitido",
  },
  "heredero-con-domicilio-desconocido": {
    slug: "heredero-con-domicilio-desconocido",
    title: "Heredero con domicilio desconocido",
    eyebrow: "Localización",
  },
  "sucesion-con-herederos-en-el-extranjero": {
    slug: "sucesion-con-herederos-en-el-extranjero",
    title: "Herederos que viven en el extranjero",
    eyebrow: "Herederos en el exterior",
  },
  "particion-de-bienes-hereditarios": {
    slug: "particion-de-bienes-hereditarios",
    title: "Partición de bienes hereditarios",
    eyebrow: "Partición",
  },
  "bienes-propios-y-gananciales-en-una-sucesion": {
    slug: "bienes-propios-y-gananciales-en-una-sucesion",
    title: "Bienes propios y gananciales",
    eyebrow: "Patrimonio matrimonial",
  },
  "donaciones-en-vida-y-colacion-hereditaria": {
    slug: "donaciones-en-vida-y-colacion-hereditaria",
    title: "Donaciones en vida y colación",
    eyebrow: "Donaciones",
  },
  "inscripcion-de-bienes-heredados": {
    slug: "inscripcion-de-bienes-heredados",
    title: "Inscripción de bienes heredados",
    eyebrow: "Inscripción",
  },
  "tracto-abreviado": {
    slug: "tracto-abreviado",
    title: "Tracto abreviado en una sucesión",
    eyebrow: "Venta directa",
  },
  "vender-inmueble-en-una-sucesion": {
    slug: "vender-inmueble-en-una-sucesion",
    title: "Vender un inmueble en una sucesión",
    eyebrow: "Venta de inmueble",
  },
  "sucesion-de-automotores-en-provincia-de-buenos-aires": {
    slug: "sucesion-de-automotores-en-provincia-de-buenos-aires",
    title: "Sucesión de automotores",
    eyebrow: "Vehículos",
  },
  "cuentas-bancarias-y-plazos-fijos-en-una-sucesion": {
    slug: "cuentas-bancarias-y-plazos-fijos-en-una-sucesion",
    title: "Cuentas bancarias y plazos fijos",
    eyebrow: "Fondos bancarios",
  },
  "conflictos-entre-herederos": {
    slug: "conflictos-entre-herederos",
    title: "Conflictos entre herederos",
    eyebrow: "Desacuerdos",
  },
  "heredero-no-quiere-firmar-sucesion": {
    slug: "heredero-no-quiere-firmar-sucesion",
    title: "Un heredero no quiere firmar",
    eyebrow: "Falta de firma",
  },
  "heredero-ocupa-inmueble-sucesion": {
    slug: "heredero-ocupa-inmueble-sucesion",
    title: "Un heredero ocupa el inmueble",
    eyebrow: "Ocupación",
  },
  "sucesion-con-deudas": {
    slug: "sucesion-con-deudas",
    title: "Sucesión con deudas",
    eyebrow: "Pasivo sucesorio",
  },
  "sucesion-con-bienes-en-otras-provincias-o-exterior": {
    slug: "sucesion-con-bienes-en-otras-provincias-o-exterior",
    title: "Bienes en otras provincias o en el exterior",
    eyebrow: "Otras jurisdicciones",
  },
};

const categories: Category[] = [
  {
    id: "start",
    label: "Quiero iniciar o entender el trámite",
    prompt: "¿Qué necesitás saber para empezar?",
    intents: [
      {
        label: "No hay testamento",
        keywords: ["sin testamento", "no hay testamento", "fallecio sin testar", "intestada"],
        guides: ["sucesion-sin-testamento", "documentos-para-iniciar-una-sucesion", "declaratoria-de-herederos"],
      },
      {
        label: "Hay un testamento",
        keywords: ["hay testamento", "dejo testamento", "testamento", "testamentaria"],
        guides: ["sucesion-con-testamento", "donaciones-en-vida-y-colacion-hereditaria", "declaratoria-de-herederos"],
      },
      {
        label: "Quiero saber qué documentos necesito",
        keywords: ["documentos", "documentacion", "papeles", "partidas", "requisitos para iniciar"],
        guides: ["documentos-para-iniciar-una-sucesion", "declaratoria-de-herederos", "sucesion-sin-testamento"],
      },
      {
        label: "Quiero conocer costos o etapas",
        keywords: ["costo", "cuanto cuesta", "honorarios", "gastos", "cuanto tarda", "demora", "plazo", "etapas"],
        guides: ["costo-de-una-sucesion-en-provincia-de-buenos-aires", "cuanto-tarda-una-sucesion-en-provincia-de-buenos-aires", "documentos-para-iniciar-una-sucesion"],
      },
      {
        label: "Quiero renunciar o ceder mi parte",
        keywords: ["renunciar", "renuncia", "no quiero heredar", "ceder", "cesion", "vender mi parte"],
        guides: ["renunciar-a-una-herencia", "cesion-de-derechos-hereditarios", "sucesion-con-deudas"],
      },
    ],
  },
  {
    id: "heirs",
    label: "No sé quién hereda",
    prompt: "¿Qué vínculo o situación necesitás analizar?",
    intents: [
      {
        label: "Cónyuge viudo",
        keywords: ["conyuge", "esposo", "esposa", "viudo", "viuda", "casado", "casada"],
        guides: ["derechos-del-conyuge-viudo-en-una-sucesion", "bienes-propios-y-gananciales-en-una-sucesion", "sucesion-sin-hijos-quienes-heredan"],
      },
      {
        label: "Pareja conviviente",
        keywords: ["conviviente", "concubino", "concubina", "pareja", "union convivencial"],
        guides: ["conviviente-hereda-en-argentina", "sucesion-con-testamento", "bienes-propios-y-gananciales-en-una-sucesion"],
      },
      {
        label: "La persona fallecida no tenía hijos",
        keywords: ["sin hijos", "no tenia hijos", "no hay hijos"],
        guides: ["sucesion-sin-hijos-quienes-heredan", "derechos-del-conyuge-viudo-en-una-sucesion", "herencia-entre-hermanos-y-sobrinos"],
      },
      {
        label: "Hermanos, sobrinos u otros parientes",
        keywords: ["hermano", "hermana", "sobrino", "sobrina", "primo", "prima", "tio", "tia"],
        guides: ["herencia-entre-hermanos-y-sobrinos", "sucesion-sin-hijos-quienes-heredan", "sucesion-sin-testamento"],
      },
      {
        label: "Hay menores de edad",
        keywords: ["menor", "menores", "hijo menor", "niño", "niña", "adolescente"],
        guides: ["sucesion-con-herederos-menores-de-edad", "particion-de-bienes-hereditarios", "vender-inmueble-en-una-sucesion"],
      },
      {
        label: "Un heredero no fue incluido",
        keywords: ["omitido", "no me incluyeron", "me dejaron afuera", "ampliar declaratoria", "heredero desconocido"],
        guides: ["heredero-omitido-ampliacion-declaratoria", "declaratoria-de-herederos", "heredero-con-domicilio-desconocido"],
      },
    ],
  },
  {
    id: "assets",
    label: "Tengo que resolver bienes",
    prompt: "¿Qué bien o decisión necesitás resolver?",
    intents: [
      {
        label: "Dividir o adjudicar los bienes",
        keywords: ["partir", "particion", "dividir bienes", "repartir", "adjudicar", "quedarse con"],
        guides: ["particion-de-bienes-hereditarios", "conflictos-entre-herederos", "inscripcion-de-bienes-heredados"],
      },
      {
        label: "Vender una casa o departamento",
        keywords: ["vender casa", "vender inmueble", "venta inmueble", "departamento", "propiedad", "tracto"],
        guides: ["vender-inmueble-en-una-sucesion", "tracto-abreviado", "inscripcion-de-bienes-heredados"],
      },
      {
        label: "Resolver un auto o vehículo",
        keywords: ["auto", "automotor", "vehiculo", "camioneta", "moto", "registro automotor"],
        guides: ["sucesion-de-automotores-en-provincia-de-buenos-aires", "inscripcion-de-bienes-heredados", "particion-de-bienes-hereditarios"],
      },
      {
        label: "Cobrar una cuenta o plazo fijo",
        keywords: ["cuenta bancaria", "banco", "plazo fijo", "dinero", "saldo", "dolares", "caja de ahorro"],
        guides: ["cuentas-bancarias-y-plazos-fijos-en-una-sucesion", "sucesion-con-deudas", "declaratoria-de-herederos"],
      },
      {
        label: "Distinguir bienes propios y gananciales",
        keywords: ["ganancial", "bien propio", "matrimonio", "comprado durante", "comunidad"],
        guides: ["bienes-propios-y-gananciales-en-una-sucesion", "derechos-del-conyuge-viudo-en-una-sucesion", "particion-de-bienes-hereditarios"],
      },
      {
        label: "Hubo donaciones en vida",
        keywords: ["donacion", "donado", "colacion", "adelanto de herencia", "legitima"],
        guides: ["donaciones-en-vida-y-colacion-hereditaria", "particion-de-bienes-hereditarios", "sucesion-con-testamento"],
      },
      {
        label: "Hay bienes en otro lugar",
        keywords: ["otra provincia", "exterior", "otro pais", "uruguay", "españa", "italia", "estados unidos"],
        guides: ["sucesion-con-bienes-en-otras-provincias-o-exterior", "sucesion-con-herederos-en-el-extranjero", "inscripcion-de-bienes-heredados"],
      },
    ],
  },
  {
    id: "conflict",
    label: "Hay un conflicto o una dificultad",
    prompt: "¿Cuál es el principal problema?",
    intents: [
      {
        label: "Un heredero no quiere firmar",
        keywords: ["no quiere firmar", "no firma", "se niega", "no quiere hacer la sucesion", "no participa"],
        guides: ["heredero-no-quiere-firmar-sucesion", "conflictos-entre-herederos", "particion-de-bienes-hereditarios"],
      },
      {
        label: "Un heredero ocupa el inmueble",
        keywords: ["vive en la casa", "ocupa la casa", "ocupa el inmueble", "no se quiere ir", "uso exclusivo", "alquiler"],
        guides: ["heredero-ocupa-inmueble-sucesion", "conflictos-entre-herederos", "particion-de-bienes-hereditarios"],
      },
      {
        label: "Hay desacuerdo sobre los bienes",
        keywords: ["conflicto", "pelea", "desacuerdo", "no nos ponemos de acuerdo", "problema entre herederos"],
        guides: ["conflictos-entre-herederos", "particion-de-bienes-hereditarios", "heredero-no-quiere-firmar-sucesion"],
      },
      {
        label: "La sucesión tiene deudas",
        keywords: ["deuda", "acreedor", "prestamo", "tarjeta", "embargo", "hipoteca", "impuestos adeudados"],
        guides: ["sucesion-con-deudas", "renunciar-a-una-herencia", "particion-de-bienes-hereditarios"],
      },
      {
        label: "No encontramos a un heredero",
        keywords: ["no encontramos", "domicilio desconocido", "no sabemos donde vive", "desaparecido", "sin contacto"],
        guides: ["heredero-con-domicilio-desconocido", "heredero-no-quiere-firmar-sucesion", "declaratoria-de-herederos"],
      },
    ],
  },
  {
    id: "special",
    label: "Es una situación especial",
    prompt: "¿Qué característica tiene el caso?",
    intents: [
      {
        label: "Un heredero vive en el extranjero",
        keywords: ["heredero en el exterior", "vive afuera", "vive en otro pais", "poder desde el exterior", "apostilla"],
        guides: ["sucesion-con-herederos-en-el-extranjero", "sucesion-con-bienes-en-otras-provincias-o-exterior", "documentos-para-iniciar-una-sucesion"],
      },
      {
        label: "Hay bienes fuera de la Provincia o del país",
        keywords: ["bienes afuera", "inmueble en otra provincia", "bien en el exterior", "cuenta en el exterior"],
        guides: ["sucesion-con-bienes-en-otras-provincias-o-exterior", "inscripcion-de-bienes-heredados", "sucesion-con-herederos-en-el-extranjero"],
      },
      {
        label: "Intervienen menores de edad",
        keywords: ["heredero menor", "menores de edad", "hijos menores"],
        guides: ["sucesion-con-herederos-menores-de-edad", "particion-de-bienes-hereditarios", "vender-inmueble-en-una-sucesion"],
      },
      {
        label: "Apareció un heredero después",
        keywords: ["aparecio un heredero", "heredero nuevo", "ya hicieron la sucesion", "declaratoria ya hecha"],
        guides: ["heredero-omitido-ampliacion-declaratoria", "declaratoria-de-herederos", "conflictos-entre-herederos"],
      },
    ],
  },
];

const allIntents = categories.flatMap((category) => category.intents);

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9ñ\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function guidesForSlugs(slugs: string[]) {
  return slugs.map((slug) => guideBySlug[slug]).filter(Boolean);
}

function classifyQuery(query: string) {
  const normalizedQuery = normalize(query);
  const ranked = allIntents
    .map((intent) => ({
      intent,
      score: intent.keywords.reduce((score, keyword) => {
        const normalizedKeyword = normalize(keyword);
        if (!normalizedQuery.includes(normalizedKeyword)) return score;
        return score + Math.max(2, normalizedKeyword.split(" ").length);
      }, 0),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const slugs: string[] = [];
  for (const item of ranked.slice(0, 3)) {
    for (const slug of item.intent.guides) {
      if (!slugs.includes(slug)) slugs.push(slug);
      if (slugs.length === 3) return guidesForSlugs(slugs);
    }
  }
  return guidesForSlugs(slugs);
}

function whatsappLink(summary: string, guides: Guide[]) {
  const topics = guides.map((guide) => guide.title).join(", ");
  const message = [
    "Hola. Usé el orientador de sucesiones del sitio.",
    `Mi situación: ${summary}.`,
    topics ? `Me recomendó estas guías: ${topics}.` : "",
    "Quisiera hacer una consulta.",
  ]
    .filter(Boolean)
    .join("\n");
  return `https://wa.me/5492212023887?text=${encodeURIComponent(message)}`;
}

export function SuccessionAssistant() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"start" | "category" | "result">("start");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [query, setQuery] = useState("");
  const [summary, setSummary] = useState("");
  const [recommendations, setRecommendations] = useState<Guide[]>([]);
  const [message, setMessage] = useState("");
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  function reset() {
    setView("start");
    setSelectedCategory(null);
    setQuery("");
    setSummary("");
    setRecommendations([]);
    setMessage("");
  }

  function chooseCategory(category: Category) {
    setSelectedCategory(category);
    setMessage("");
    setView("category");
  }

  function showResult(guides: Guide[], resultSummary: string) {
    setRecommendations(guides);
    setSummary(resultSummary);
    setMessage("");
    setView("result");
  }

  function submitQuery(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanQuery = query.trim();
    if (cleanQuery.length < 8) {
      setMessage("Contame un poco más o elegí una de las opciones.");
      return;
    }
    const matches = classifyQuery(cleanQuery);
    if (matches.length === 0) {
      setMessage("No pude identificar el tema con seguridad. Elegí una categoría para orientarte mejor.");
      return;
    }
    showResult(matches, cleanQuery);
  }

  return (
    <>
      <button
        className="assistant-launcher"
        type="button"
        aria-expanded={open}
        aria-controls="succession-assistant"
        onClick={() => setOpen(true)}
      >
        <span className="assistant-launcher-icon" aria-hidden="true">✦</span>
        <span className="assistant-launcher-copy">
          <small>¿No sabés por dónde empezar?</small>
          Orientador de sucesiones
        </span>
      </button>

      {open && (
        <>
          <button className="assistant-overlay" type="button" aria-label="Cerrar orientador" onClick={() => setOpen(false)} />
          <section
            className="assistant-panel"
            id="succession-assistant"
            role="dialog"
            aria-modal="true"
            aria-labelledby="assistant-title"
          >
            <header className="assistant-header">
              <div>
                <span aria-hidden="true">✦</span>
                <div>
                  <small>Orientación general</small>
                  <h2 id="assistant-title">Orientador de sucesiones</h2>
                </div>
              </div>
              <button
                className="assistant-close"
                ref={closeButtonRef}
                type="button"
                aria-label="Cerrar"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
            </header>

            <div className="assistant-body">
              {view === "start" && (
                <>
                  <div className="assistant-message">
                    <p>Contame brevemente qué necesitás o elegí una categoría.</p>
                    <small>El orientador no emite asesoramiento jurídico ni guarda lo que escribís.</small>
                  </div>
                  <form className="assistant-form" onSubmit={submitQuery}>
                    <label htmlFor="assistant-query">Tu situación</label>
                    <textarea
                      className="assistant-query"
                      id="assistant-query"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      rows={3}
                      maxLength={500}
                      placeholder="Ej.: Mi hermano vive en la casa y no quiere firmar la sucesión."
                    />
                    <button className="assistant-submit" type="submit">
                      Buscar orientación <ArrowIcon />
                    </button>
                  </form>
                  {message && <p className="assistant-feedback" role="status">{message}</p>}
                  <div className="assistant-divider"><span>o elegí el tema</span></div>
                  <div className="assistant-options">
                    {categories.map((category) => (
                      <button
                        className="assistant-option"
                        type="button"
                        key={category.id}
                        onClick={() => chooseCategory(category)}
                      >
                        <span>{category.label}</span><ArrowIcon />
                      </button>
                    ))}
                  </div>
                </>
              )}

              {view === "category" && selectedCategory && (
                <>
                  <button className="assistant-back" type="button" onClick={() => setView("start")}>← Volver</button>
                  <div className="assistant-message">
                    <p>{selectedCategory.prompt}</p>
                    <small>Elegí la opción más parecida. Después podés consultar tu caso particular.</small>
                  </div>
                  <div className="assistant-options assistant-options-detailed">
                    {selectedCategory.intents.map((intent) => (
                      <button
                        className="assistant-option"
                        type="button"
                        key={intent.label}
                        onClick={() => showResult(guidesForSlugs(intent.guides), intent.label)}
                      >
                        <span>{intent.label}</span><ArrowIcon />
                      </button>
                    ))}
                  </div>
                </>
              )}

              {view === "result" && (
                <>
                  <button className="assistant-back" type="button" onClick={reset}>← Nueva orientación</button>
                  <div className="assistant-message assistant-result-intro">
                    <p>Estas guías pueden ayudarte a entender los próximos pasos.</p>
                    <small>La recomendación es informativa y se basa únicamente en lo que seleccionaste o escribiste.</small>
                  </div>
                  <div className="assistant-results">
                    {recommendations.map((guide) => (
                      <Link
                        className="assistant-result"
                        href={`/${guide.slug}`}
                        key={guide.slug}
                        onClick={() => setOpen(false)}
                      >
                        <small>{guide.eyebrow}</small>
                        <strong>{guide.title}</strong>
                        <ArrowIcon />
                      </Link>
                    ))}
                  </div>
                  <a
                    className="button button-primary assistant-whatsapp"
                    href={whatsappLink(summary, recommendations)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon /> Consultar este caso
                  </a>
                  <Link className="assistant-all-guides" href="/guias-de-sucesiones" onClick={() => setOpen(false)}>
                    Ver todas las guías
                  </Link>
                </>
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
}
