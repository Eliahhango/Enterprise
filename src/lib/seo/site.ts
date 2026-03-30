export const siteConfig = {
  name: "[Company Name]",
  shortName: "[Company Name]",
  title: "Premium Multi-Service Company",
  description:
    "Premium multi-service company spanning cybersecurity, web development, graphics and design, and civil engineering.",
  locale: "en_US",
  keywords: [
    "cybersecurity",
    "web development",
    "graphics design",
    "civil engineering",
    "multi-service company",
    "enterprise website",
    "digital transformation",
    "brand design",
    "engineering support",
  ],
};

export function getSiteUrl() {
  const value =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim();

  if (!value) {
    return "https://example.com";
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  if (value.startsWith("localhost:") || value.startsWith("127.0.0.1:")) {
    return `http://${value}`;
  }

  return `https://${value}`;
}

export function getAbsoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}
