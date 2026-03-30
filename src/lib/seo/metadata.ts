import type { Metadata } from "next";

import { getAbsoluteUrl, getSiteUrl, siteConfig } from "@/lib/seo/site";

type CreatePageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
};

export function createRootMetadata(): Metadata {
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: `${siteConfig.name} | ${siteConfig.title}`,
      template: `%s | ${siteConfig.name}`,
    },
    applicationName: siteConfig.name,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: getAbsoluteUrl("/"),
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    openGraph: {
      title: `${siteConfig.name} | ${siteConfig.title}`,
      description: siteConfig.description,
      url: getAbsoluteUrl("/"),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: getAbsoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} | ${siteConfig.title}`,
      description: siteConfig.description,
      images: [getAbsoluteUrl("/opengraph-image")],
    },
  };
}

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  noIndex = false,
  keywords,
}: CreatePageMetadataOptions = {}): Metadata {
  const resolvedTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.title}`;
  const url = getAbsoluteUrl(path);

  return {
    metadataBase: new URL(getSiteUrl()),
    ...(title ? { title } : {}),
    description,
    keywords: keywords ?? siteConfig.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: getAbsoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [getAbsoluteUrl("/opengraph-image")],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}
