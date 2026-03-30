import type { ServiceSlug } from "@/lib/services";

export type IndustryData = {
  slug: string;
  title: string;
  summary: string;
  challenge: string;
  fit: string;
  services: ServiceSlug[];
};

export const industries: IndustryData[] = [
  {
    slug: "growing-businesses",
    title: "Growing Businesses",
    summary:
      "For companies that need stronger websites, better branding, and dependable partner support as they scale.",
    challenge:
      "Growth often exposes weak brand presentation, inconsistent digital execution, and fragmented vendor relationships.",
    fit:
      "We help growing businesses build trust faster with clearer service communication, stronger digital foundations, and a more coordinated delivery partner.",
    services: ["web-development", "graphics-design", "cybersecurity"],
  },
  {
    slug: "corporate-teams",
    title: "Corporate Teams",
    summary:
      "For organizations that expect professionalism, cleaner project structure, and higher trust across delivery.",
    challenge:
      "Internal teams often need external support that aligns with formal workflows, stakeholder expectations, and commercial accountability.",
    fit:
      "The delivery model is structured to support clear communication, premium presentation, and dependable execution across multiple disciplines.",
    services: ["cybersecurity", "web-development", "graphics-design"],
  },
  {
    slug: "institutions",
    title: "Institutions",
    summary:
      "For schools, NGOs, healthcare groups, and associations that need clarity, reliability, and formal presentation.",
    challenge:
      "Institutional work usually needs stronger communication, careful stakeholder trust, and a disciplined approach to delivery quality.",
    fit:
      "We support institutions with professional digital presence, better brand clarity, and structured project support that feels appropriate to formal environments.",
    services: ["web-development", "graphics-design", "cybersecurity"],
  },
  {
    slug: "property-and-infrastructure",
    title: "Property and Infrastructure Stakeholders",
    summary:
      "For developers, contractors, and project-led teams that need technically grounded engineering coordination.",
    challenge:
      "Project environments can lose momentum quickly when planning, technical communication, and coordination standards are weak.",
    fit:
      "Our approach supports clearer documentation, more dependable planning, and engineering-aware communication across stakeholders.",
    services: ["civil-engineering", "graphics-design"],
  },
  {
    slug: "professional-services",
    title: "Professional Service Firms",
    summary:
      "For businesses whose market trust depends on clear communication, premium digital presence, and strong brand systems.",
    challenge:
      "Professional firms are often judged fast on presentation quality, clarity, and the confidence their digital presence creates.",
    fit:
      "We help firms improve first impressions, sharpen service communication, and create a more credible market-facing presence.",
    services: ["web-development", "graphics-design", "cybersecurity"],
  },
  {
    slug: "multi-project-organizations",
    title: "Multi-Project Organizations",
    summary:
      "For teams that benefit from one partner capable of bridging technical, design, digital, and planning demands.",
    challenge:
      "When multiple workstreams run at once, fragmented suppliers can create avoidable communication gaps and inconsistent standards.",
    fit:
      "Our multi-service model works best where organizations need coordinated thinking across several critical functions without lowering quality.",
    services: ["cybersecurity", "web-development", "graphics-design", "civil-engineering"],
  },
];
