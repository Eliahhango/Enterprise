import type { ServiceSlug } from "@/lib/services";

export type CaseStudySlug =
  | "integrated-digital-foundation"
  | "professional-firm-brand-refresh"
  | "civil-delivery-coordination";

export type CaseStudyData = {
  slug: CaseStudySlug;
  title: string;
  sector: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  resultSummary: string;
  results: string[];
  services: ServiceSlug[];
  metaDescription: string;
};

export const caseStudies: CaseStudyData[] = [
  {
    slug: "integrated-digital-foundation",
    title: "Integrated Website, Brand, and Security Foundation for a Growth-Stage Company",
    sector: "Multi-Service Delivery",
    industry: "Growing Businesses",
    summary:
      "A representative engagement shaped around digital credibility, clearer service communication, and a more security-aware implementation baseline.",
    challenge:
      "The client needed a more credible front-facing presence, stronger structural clarity across service communication, and a cleaner foundation for future growth.",
    solution:
      "We reframed the digital experience around sharper messaging, clearer hierarchy, and a more disciplined implementation approach so the business looked more established and easier to trust.",
    resultSummary:
      "Created a stronger front-facing brand presence and a clearer technical foundation that improved confidence for both internal stakeholders and prospective clients.",
    results: [
      "Sharpened the brand and website around a more premium first impression",
      "Improved service clarity so prospective clients could understand the offer faster",
      "Introduced a more security-conscious implementation mindset across the build",
    ],
    services: ["web-development", "graphics-design", "cybersecurity"],
    metaDescription:
      "Representative case study showing how integrated web, design, and security thinking can improve credibility and delivery confidence.",
  },
  {
    slug: "professional-firm-brand-refresh",
    title: "Brand and Web Refresh for a Professional Firm",
    sector: "Professional Services",
    industry: "Professional Service Firms",
    summary:
      "A trust-focused refresh designed to improve first impressions, tighten business communication, and create a more coherent digital presence.",
    challenge:
      "The firm had capable service delivery, but its website and business materials did not reflect that quality clearly enough to support strong conversion conversations.",
    solution:
      "We aligned the visual system, service messaging, and digital layout around clarity, professionalism, and a more controlled buyer journey.",
    resultSummary:
      "Reframed the brand system and digital experience around trust, clarity, and better service communication.",
    results: [
      "Improved first-impression credibility across key client touchpoints",
      "Created stronger alignment between brand presentation and actual service quality",
      "Made the website easier to navigate for high-intent visitors",
    ],
    services: ["web-development", "graphics-design"],
    metaDescription:
      "Representative case study focused on improving digital credibility and business presentation for a professional services firm.",
  },
  {
    slug: "civil-delivery-coordination",
    title: "Project Coordination Support for Civil Delivery",
    sector: "Infrastructure Support",
    industry: "Property and Infrastructure Stakeholders",
    summary:
      "A coordination-led engagement focused on improving planning structure, documentation flow, and project communication.",
    challenge:
      "Stakeholders needed clearer planning structure, better documentation flow, and stronger coordination support to keep the workstream moving with confidence.",
    solution:
      "We supported the engagement with more disciplined documentation logic, clearer communication patterns, and delivery support that reduced ambiguity across the project.",
    resultSummary:
      "Improved project confidence with more disciplined documentation and clearer communication across the workstream.",
    results: [
      "Reduced friction caused by unclear documentation and scattered communication",
      "Supported more dependable coordination between project stakeholders",
      "Strengthened confidence in the delivery process through clearer structure",
    ],
    services: ["civil-engineering"],
    metaDescription:
      "Representative civil engineering support case study focused on planning clarity, documentation quality, and coordination confidence.",
  },
];

export const caseStudyMap: Record<CaseStudySlug, CaseStudyData> = caseStudies.reduce(
  (accumulator, caseStudy) => {
    accumulator[caseStudy.slug] = caseStudy;
    return accumulator;
  },
  {} as Record<CaseStudySlug, CaseStudyData>,
);

export const featuredCaseStudy = caseStudies[0];
export const supportingCaseStudies = caseStudies.slice(1);

export function isCaseStudySlug(value: string): value is CaseStudySlug {
  return value in caseStudyMap;
}
