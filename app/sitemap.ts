import type { MetadataRoute } from "next";
import { featuredProjectOrder, projects } from "@/data/portfolio";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = featuredProjectOrder.map((key) => ({
    url: `${siteConfig.url}/projects/${projects[key].slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
  ];
}
