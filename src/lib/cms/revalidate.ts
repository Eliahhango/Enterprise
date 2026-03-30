export type RevalidateContentType =
  | "siteSettings"
  | "homepage"
  | "service"
  | "caseStudy"
  | "industry"
  | "testimonial"
  | "page";

export type RevalidateRequest = {
  type: RevalidateContentType;
  slug?: string;
};

const siteWidePaths = [
  "/",
  "/about",
  "/services",
  "/industries",
  "/case-studies",
  "/how-we-work",
  "/contact",
];

export function getPathsForRevalidation({ type, slug }: RevalidateRequest) {
  switch (type) {
    case "siteSettings":
      return siteWidePaths;
    case "homepage":
      return ["/"];
    case "service":
      return slug ? ["/services", `/services/${slug}`] : ["/services"];
    case "caseStudy":
      return slug ? ["/case-studies", `/case-studies/${slug}`] : ["/case-studies"];
    case "industry":
      return ["/industries"];
    case "testimonial":
      return ["/", "/case-studies", "/about"];
    case "page":
      return slug ? [slugToPagePath(slug)] : siteWidePaths;
    default:
      return siteWidePaths;
  }
}

export function getTagsForRevalidation({ type, slug }: RevalidateRequest) {
  return [
    `cms:${type}`,
    slug ? `cms:${type}:${slug}` : null,
  ].filter(Boolean) as string[];
}

function slugToPagePath(slug: string) {
  if (slug === "home") {
    return "/";
  }

  return `/${slug}`;
}
