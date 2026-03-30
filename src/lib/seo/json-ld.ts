import { serviceCards } from "@/lib/service-cards";
import { getAbsoluteUrl, getSiteUrl, siteConfig } from "@/lib/seo/site";

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: getSiteUrl(),
    description: siteConfig.description,
    email: "[Email Address]",
    telephone: "[Phone Number]",
    knowsAbout: serviceCards.map((service) => service.title),
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: getSiteUrl(),
    description: siteConfig.description,
    inLanguage: "en",
  };
}

export function buildServiceCatalogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteConfig.name} service lines`,
    itemListElement: serviceCards.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: getAbsoluteUrl(service.href),
      description: service.summary,
    })),
  };
}
