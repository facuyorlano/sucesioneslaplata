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
    ...seoPages.map((page) => ({
      url: `${SITE.url}/${page.slug}`,
      lastModified: new Date(SITE.updated),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
