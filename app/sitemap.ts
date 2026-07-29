import type { MetadataRoute } from "next";
import { SITE, seoPages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(SITE.updated),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/privacidad`,
      lastModified: new Date(SITE.updated),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE.url}/criterios-editoriales`,
      lastModified: new Date(SITE.updated),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE.url}/guias-de-sucesiones`,
      lastModified: new Date(SITE.updated),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...seoPages.map((page) => ({
      url: `${SITE.url}/${page.slug}`,
      lastModified: new Date(SITE.updated),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
