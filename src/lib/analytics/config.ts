export function getAnalyticsConfig() {
  return {
    gaId: process.env.NEXT_PUBLIC_GA_ID?.trim() || "",
    clarityId: process.env.NEXT_PUBLIC_CLARITY_ID?.trim() || "",
  };
}
