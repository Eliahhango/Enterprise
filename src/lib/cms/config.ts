export const cmsConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01",
  useCdn: (process.env.NEXT_PUBLIC_SANITY_USE_CDN ?? "true") === "true",
};

export function isCmsConfigured() {
  return Boolean(cmsConfig.projectId && cmsConfig.dataset && cmsConfig.apiVersion);
}

export function getCmsStatusSummary() {
  return {
    configured: isCmsConfigured(),
    projectId: cmsConfig.projectId || "missing",
    dataset: cmsConfig.dataset || "missing",
    apiVersion: cmsConfig.apiVersion || "missing",
    useCdn: cmsConfig.useCdn,
  };
}
