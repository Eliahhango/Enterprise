export type ServiceCardData = {
  title: string;
  summary: string;
  bullets: string[];
  href: string;
  accent: string;
  marker: string;
};

export const serviceCards: ServiceCardData[] = [
  {
    title: "Cybersecurity",
    summary:
      "Protect systems, reduce exposure, and strengthen operational confidence with practical security support.",
    bullets: [
      "Security assessments and vulnerability reviews",
      "Hardening guidance for customer-facing systems",
      "Risk-focused recommendations for real business environments",
    ],
    href: "/services/cybersecurity",
    accent: "bg-brand-teal/16 text-brand-teal",
    marker: "CS",
  },
  {
    title: "Web Development",
    summary:
      "Build modern websites and digital platforms that look credible, perform well, and support growth.",
    bullets: [
      "Premium corporate websites and landing pages",
      "Responsive implementation with strong UX hierarchy",
      "Performance-conscious technical foundations",
    ],
    href: "/services/web-development",
    accent: "bg-brand-stone/12 text-brand-stone",
    marker: "WD",
  },
  {
    title: "Graphics & Design",
    summary:
      "Create refined brand systems and business visuals that improve consistency across every touchpoint.",
    bullets: [
      "Brand identity systems and campaign visuals",
      "Corporate documents, presentations, and collateral",
      "Digital-first assets aligned with the wider brand",
    ],
    href: "/services/graphics-design",
    accent: "bg-brand-copper/16 text-brand-copper",
    marker: "GD",
  },
  {
    title: "Civil Engineering",
    summary:
      "Support projects with technically grounded engineering input, disciplined planning, and clearer coordination.",
    bullets: [
      "Project planning and technical documentation support",
      "Coordination-minded engineering consultation",
      "Structured delivery expectations from the outset",
    ],
    href: "/services/civil-engineering",
    accent: "bg-brand-gold/16 text-brand-gold",
    marker: "CE",
  },
];
