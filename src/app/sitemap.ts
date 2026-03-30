import type { MetadataRoute } from "next";

import { caseStudies } from "@/lib/case-studies";
import { services } from "@/lib/services";
import { getAbsoluteUrl } from "@/lib/seo/site";

type SitemapEntry = MetadataRoute.Sitemap[number];

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/industries",
  "/case-studies",
  "/how-we-work",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: SitemapEntry[] = staticRoutes.map((path) => ({
    url: getAbsoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.8,
  }));

  const serviceEntries: SitemapEntry[] = services.map((service) => ({
    url: getAbsoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const caseStudyEntries: SitemapEntry[] = caseStudies.map((caseStudy) => ({
    url: getAbsoluteUrl(`/case-studies/${caseStudy.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...caseStudyEntries];
}
