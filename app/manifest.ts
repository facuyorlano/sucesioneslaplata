import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abogados de Sucesiones en La Plata",
    short_name: "Sucesiones La Plata",
    description: "Asesoramiento jurídico en sucesiones en la Provincia de Buenos Aires.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f0e7",
    theme_color: "#5a2430",
    lang: "es-AR",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

