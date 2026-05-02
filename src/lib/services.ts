export type ServiceSlug =
  | "cybersecurity"
  | "web-development"
  | "graphics-design"
  | "civil-engineering";

export type ServiceTheme = {
  badgeClass: string;
  dotClass: string;
  borderClass: string;
  surfaceClass: string;
};

export type ServiceContentItem = {
  title: string;
  body: string;
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServicePageData = {
  slug: ServiceSlug;
  name: string;
  metaDescription: string;
  eyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPanelTitle: string;
  heroPanelItems: string[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  theme: ServiceTheme;
  problems: ServiceContentItem[];
  capabilities: ServiceContentItem[];
  outcomes: string[];
  process: ServiceContentItem[];
  whyChooseUs: ServiceContentItem[];
  proof: ServiceContentItem[];
  faqs: ServiceFaqItem[];
  finalCtaTitle: string;
  finalCtaBody: string;
};

export const services: ServicePageData[] = [
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    metaDescription:
      "Structured cybersecurity support for organizations that need clearer visibility, stronger defenses, and practical risk reduction.",
    eyebrow: "Cybersecurity",
    heroTitle:
      "Practical cybersecurity for organizations that need clearer risk control and stronger operational confidence.",
    heroBody:
      "[Company Name] helps organizations identify vulnerabilities, strengthen defenses, and improve security readiness through structured, business-aware cybersecurity support.",
    heroPanelTitle: "What this service strengthens",
    heroPanelItems: [
      "Visibility into the current security posture",
      "Prioritized hardening and remediation decisions",
      "Confidence in customer-facing systems and operations",
    ],
    primaryCtaLabel: "Request Security Consultation",
    secondaryCtaLabel: "Review Security Priorities",
    theme: {
      badgeClass: "bg-brand-teal/16 text-brand-teal",
      dotClass: "bg-brand-teal",
      borderClass: "border-brand-teal/20",
      surfaceClass: "bg-brand-teal/10",
    },
    problems: [
      {
        title: "Limited visibility into risk",
        body: "Organizations often know security matters, but lack a clear view of where exposure actually sits and what should be addressed first.",
      },
      {
        title: "Customer-facing systems that feel exposed",
        body: "Websites and applications can undermine trust quickly when common weaknesses are left unreviewed or unresolved.",
      },
      {
        title: "Unclear remediation priorities",
        body: "Teams can become stuck between technical findings and business reality without a structured way to sequence improvements.",
      },
      {
        title: "Weak readiness for ongoing improvement",
        body: "Security gains often fail to hold when there is no practical path for follow-through, review, and continued hardening.",
      },
    ],
    capabilities: [
      {
        title: "Security Assessments",
        body: "Identify weaknesses, understand exposure, and create a clearer picture of what requires attention.",
      },
      {
        title: "Website and Application Reviews",
        body: "Review customer-facing systems for visible weaknesses and strengthen the foundations that support digital trust.",
      },
      {
        title: "Security Hardening Guidance",
        body: "Improve baseline protections across configurations, access models, and operational practices.",
      },
      {
        title: "Risk-Focused Recommendations",
        body: "Translate findings into practical next steps that technical and non-technical stakeholders can act on.",
      },
      {
        title: "Readiness and Advisory Support",
        body: "Support a more sustainable security posture through structured review, prioritization, and improvement planning.",
      },
    ],
    outcomes: [
      "Better visibility into security priorities and weak points",
      "Reduced exposure to preventable threats",
      "Stronger trust in business operations and customer-facing systems",
      "Clearer decision-making for leadership and technical teams",
      "Improved readiness for ongoing security improvement",
    ],
    process: [
      {
        title: "Initial Consultation",
        body: "We clarify business context, risk concerns, and the systems or environments that matter most.",
      },
      {
        title: "Assessment and Scope Review",
        body: "The engagement is shaped around realistic scope, practical priorities, and the right review depth.",
      },
      {
        title: "Findings and Recommendations",
        body: "Results are documented clearly, with emphasis on risk, priority, and actionable guidance.",
      },
      {
        title: "Implementation Support",
        body: "Where needed, we help translate recommendations into concrete remediation or hardening activity.",
      },
      {
        title: "Follow-Through",
        body: "Ongoing review or advisory support keeps the work from ending at a static report.",
      },
    ],
    whyChooseUs: [
      {
        title: "Business-aware security thinking",
        body: "Recommendations are shaped around operational realities, not generic technical checklists alone.",
      },
      {
        title: "Clear communication",
        body: "Findings are presented in a way leadership and technical stakeholders can both use effectively.",
      },
      {
        title: "Practical structure",
        body: "The work is organized around assessment, prioritization, and next-step clarity.",
      },
      {
        title: "Integrated perspective",
        body: "Security advice aligns well with the wider digital and brand systems the business depends on.",
      },
    ],
    proof: [
      {
        title: "Security posture reviews",
        body: "Representative engagements focused on identifying visible weaknesses and turning findings into clearer action plans.",
      },
      {
        title: "Customer-facing platform hardening",
        body: "Support for websites and applications that need stronger resilience and higher trust from first contact onward.",
      },
      {
        title: "Advisory-led remediation paths",
        body: "Structured recommendations that help teams move from uncertainty to practical improvement.",
      },
    ],
    faqs: [
      {
        question: "What kinds of organizations do you support?",
        answer:
          "We work with businesses, institutions, and teams that need more visibility, clearer priorities, and practical support for improving their security posture.",
      },
      {
        question: "Can you review our existing website or application?",
        answer:
          "Yes. We can assess customer-facing systems, identify visible risks, and recommend improvements that strengthen trust and resilience.",
      },
      {
        question: "Do you offer one-time assessments or continued support?",
        answer:
          "Both are possible. The right model depends on your scope, internal capacity, and whether you need one-time visibility or ongoing improvement support.",
      },
      {
        question: "Will the output be understandable for non-technical decision-makers?",
        answer:
          "Yes. Findings are structured so leadership and operational stakeholders can understand what matters, what the risks are, and what the next steps should be.",
      },
    ],
    finalCtaTitle:
      "Need a clearer view of your security risks, weak points, and next priorities?",
    finalCtaBody:
      "Let's review your environment, understand the stakes, and define the most practical path toward stronger protection and confidence.",
  },
  {
    slug: "web-development",
    name: "Web Development",
    metaDescription:
      "Modern websites and digital platforms built for credibility, performance, and business growth.",
    eyebrow: "Web Development",
    heroTitle:
      "Modern websites and digital platforms built for credibility, performance, and growth.",
    heroBody:
      "[Company Name] designs and develops high-quality web experiences that strengthen trust, support business goals, and perform cleanly across devices and user journeys.",
    heroPanelTitle: "What this service improves",
    heroPanelItems: [
      "First impressions and digital credibility",
      "Conversion flow, usability, and content structure",
      "Performance foundations for long-term growth",
    ],
    primaryCtaLabel: "Start Your Web Project",
    secondaryCtaLabel: "Review Web Priorities",
    theme: {
      badgeClass: "bg-brand-stone/12 text-brand-stone",
      dotClass: "bg-brand-gold",
      borderClass: "border-brand-stone/20",
      surfaceClass: "bg-brand-stone/8",
    },
    problems: [
      {
        title: "Low-trust digital presence",
        body: "Many businesses operate with websites that do not reflect the actual quality of the organization behind them.",
      },
      {
        title: "Weak conversion structure",
        body: "Visitors lose confidence when messaging, layout, and calls to action do not guide them clearly toward the next step.",
      },
      {
        title: "Poor mobile and performance experience",
        body: "Slow, inconsistent, or awkward experiences damage trust quickly, especially on mobile devices.",
      },
      {
        title: "Disconnected visual and technical execution",
        body: "A site can fail commercially when branding, UX, content hierarchy, and development decisions are not aligned.",
      },
    ],
    capabilities: [
      {
        title: "Corporate Websites",
        body: "Build polished digital platforms that present the business with clarity, confidence, and structure.",
      },
      {
        title: "Service and Landing Pages",
        body: "Support campaigns, offers, and lead generation goals through focused conversion journeys.",
      },
      {
        title: "CMS-Driven Builds",
        body: "Create platforms that support content updates without sacrificing design quality or layout discipline.",
      },
      {
        title: "Responsive Frontend Development",
        body: "Deliver experiences that feel intentional across desktop, tablet, and mobile devices.",
      },
      {
        title: "Performance and SEO Foundations",
        body: "Support speed, discoverability, and long-term maintainability through stronger technical implementation choices.",
      },
    ],
    outcomes: [
      "Stronger digital credibility from the first visit",
      "Improved user experience across devices and screen sizes",
      "Clearer conversion paths and service communication",
      "A better foundation for content growth and search visibility",
      "Longer-term maintainability without sacrificing quality",
    ],
    process: [
      {
        title: "Discovery and Goals Alignment",
        body: "We define the role the website should play, who it needs to persuade, and what success should look like.",
      },
      {
        title: "UX Structure and Planning",
        body: "The information architecture and conversion flow are mapped before visuals are pushed forward.",
      },
      {
        title: "UI Direction",
        body: "Visual language is refined so the interface feels premium, coherent, and aligned with the business.",
      },
      {
        title: "Development and QA",
        body: "Implementation is handled with attention to performance, responsiveness, and interaction quality.",
      },
      {
        title: "Launch and Support",
        body: "Delivery continues through handoff, review, and future support where needed.",
      },
    ],
    whyChooseUs: [
      {
        title: "Strategy-led builds",
        body: "The work is shaped by business goals and user experience logic, not page assembly alone.",
      },
      {
        title: "Premium visual standards",
        body: "Interfaces are designed to feel composed, credible, and commercially strong.",
      },
      {
        title: "Cross-disciplinary alignment",
        body: "Brand, UX, technical implementation, and trust-building decisions work together rather than in isolation.",
      },
      {
        title: "Longer-term thinking",
        body: "The platform is built to support future growth, content evolution, and continued refinement.",
      },
    ],
    proof: [
      {
        title: "Corporate web foundations",
        body: "Representative builds aimed at strengthening trust, service clarity, and digital presentation quality.",
      },
      {
        title: "Conversion-aware service pages",
        body: "Layouts structured to improve understanding, confidence, and the quality of incoming inquiries.",
      },
      {
        title: "Brand-aligned digital execution",
        body: "Web experiences designed to feel consistent with the wider business identity rather than visually disconnected.",
      },
    ],
    faqs: [
      {
        question: "Do you build custom websites?",
        answer:
          "Yes. The goal is to create a digital platform aligned with your positioning, audience, and business needs rather than forcing the business into a generic pattern.",
      },
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. We can assess the current platform, identify what is limiting trust or performance, and rebuild it around stronger structure and presentation.",
      },
      {
        question: "Will the website be mobile-friendly and performance-conscious?",
        answer:
          "Yes. Responsive behavior and performance foundations are part of the delivery standard, not an afterthought.",
      },
      {
        question: "Can the site support content updates after launch?",
        answer:
          "Yes. Where needed, the build can be structured to make ongoing content management easier while preserving quality and consistency.",
      },
    ],
    finalCtaTitle:
      "Planning a website that needs to look credible, perform well, and support real growth?",
    finalCtaBody:
      "Let's define the right structure, design direction, and technical approach for a stronger digital presence.",
  },
  {
    slug: "graphics-design",
    name: "Graphics & Design",
    metaDescription:
      "Strategic design support for stronger brand credibility, better communication, and more consistent business presentation.",
    eyebrow: "Graphics & Design",
    heroTitle:
      "Strategic design that strengthens brand credibility and business communication.",
    heroBody:
      "[Company Name] creates refined visual systems and design assets that help businesses present themselves with greater clarity, consistency, and professionalism.",
    heroPanelTitle: "What this service improves",
    heroPanelItems: [
      "Brand consistency across digital and offline touchpoints",
      "Professional quality of business-facing materials",
      "Clearer communication through better visual structure",
    ],
    primaryCtaLabel: "Discuss Your Brand Needs",
    secondaryCtaLabel: "Review Design Priorities",
    theme: {
      badgeClass: "bg-brand-copper/16 text-brand-copper",
      dotClass: "bg-brand-copper",
      borderClass: "border-brand-copper/20",
      surfaceClass: "bg-brand-copper/10",
    },
    problems: [
      {
        title: "Inconsistent visual identity",
        body: "Brand presentation often weakens when design choices are scattered across materials and channels without a system.",
      },
      {
        title: "Low-quality business materials",
        body: "Proposals, presentations, brochures, and company profiles can undermine trust if they do not look refined and coherent.",
      },
      {
        title: "Weak communication hierarchy",
        body: "Good-looking layouts still fail when information is not prioritized clearly for the intended audience.",
      },
      {
        title: "Disconnect between online and offline assets",
        body: "Businesses lose consistency when digital, print, and corporate materials feel like they came from different organizations.",
      },
    ],
    capabilities: [
      {
        title: "Brand Identity Systems",
        body: "Create a more consistent and recognizable foundation for how the business presents itself.",
      },
      {
        title: "Corporate and Marketing Materials",
        body: "Design business-facing assets that improve professionalism in proposals, presentations, brochures, and profiles.",
      },
      {
        title: "Campaign and Digital Assets",
        body: "Support marketing activity with visuals that are polished, aligned, and usable in real workflows.",
      },
      {
        title: "Branded Templates",
        body: "Equip teams with repeatable assets that maintain consistency after the initial engagement.",
      },
      {
        title: "Web-Aligned Visual Direction",
        body: "Ensure the digital presence and wider brand system feel connected rather than visually fragmented.",
      },
    ],
    outcomes: [
      "Stronger professional impression across brand touchpoints",
      "More consistent business communication and presentation",
      "Higher quality support for sales, marketing, and stakeholder materials",
      "Better alignment between digital and offline brand expression",
      "A more refined, trustworthy market presence",
    ],
    process: [
      {
        title: "Discovery and Brand Understanding",
        body: "We clarify how the business should be perceived and where current design gaps are creating friction.",
      },
      {
        title: "Direction and Concept Development",
        body: "A clear visual direction is shaped before expanding into broader asset production.",
      },
      {
        title: "System Refinement",
        body: "Design choices are tightened into a more coherent structure that can scale across touchpoints.",
      },
      {
        title: "Asset Production",
        body: "The necessary deliverables are produced with business relevance, consistency, and quality control.",
      },
      {
        title: "Handover and Ongoing Support",
        body: "The work can continue through templates, support, or coordinated rollout where needed.",
      },
    ],
    whyChooseUs: [
      {
        title: "Commercially grounded design thinking",
        body: "The work is driven by how the business needs to communicate and be trusted, not visual trends alone.",
      },
      {
        title: "Refined execution",
        body: "Design output is shaped to feel polished, structured, and professionally credible.",
      },
      {
        title: "Cross-channel consistency",
        body: "Digital, print, and corporate materials are handled with one visual logic rather than disconnected treatments.",
      },
      {
        title: "Alignment with web and business systems",
        body: "Design work fits into the wider digital and operational context of the business.",
      },
    ],
    proof: [
      {
        title: "Identity and collateral systems",
        body: "Representative work focused on making businesses feel more coherent, refined, and trustworthy.",
      },
      {
        title: "Presentation and profile design",
        body: "Business-facing materials improved through stronger hierarchy, cleaner layout, and more intentional brand language.",
      },
      {
        title: "Cross-touchpoint design alignment",
        body: "Visual direction carried more consistently across digital assets, print deliverables, and internal business tools.",
      },
    ],
    faqs: [
      {
        question: "Do you offer branding or only graphic design support?",
        answer:
          "Both are possible. Some engagements focus on broader brand structure, while others focus on the specific business materials and assets you need right now.",
      },
      {
        question: "Can you create corporate materials like profiles and presentations?",
        answer:
          "Yes. That is a strong use case for this service, especially where professionalism and clarity matter to sales or stakeholder communication.",
      },
      {
        question: "Do you support digital and print deliverables?",
        answer:
          "Yes. The aim is to keep the visual system consistent across both digital and physical applications.",
      },
      {
        question: "Can design work align with a website project?",
        answer:
          "Yes. The service structure is designed to support stronger alignment between brand design and web execution.",
      },
    ],
    finalCtaTitle:
      "Need a sharper, more credible visual presence for your business?",
    finalCtaBody:
      "Let's define the design direction, asset needs, and system improvements that will elevate how your organization is seen.",
  },
  {
    slug: "civil-engineering",
    name: "Civil Engineering",
    metaDescription:
      "Civil engineering support focused on project clarity, technical discipline, and dependable coordination.",
    eyebrow: "Civil Engineering",
    heroTitle:
      "Civil engineering support delivered with precision, structure, and professional discipline.",
    heroBody:
      "[Company Name] provides engineering support shaped around clear planning, technical rigor, dependable communication, and better project coordination.",
    heroPanelTitle: "What this service improves",
    heroPanelItems: [
      "Project clarity from planning through support stages",
      "Technical documentation and communication quality",
      "Confidence in coordination and delivery structure",
    ],
    primaryCtaLabel: "Request Engineering Consultation",
    secondaryCtaLabel: "Review Project Priorities",
    theme: {
      badgeClass: "bg-brand-gold/16 text-brand-gold",
      dotClass: "bg-brand-gold",
      borderClass: "border-brand-gold/20",
      surfaceClass: "bg-brand-gold/10",
    },
    problems: [
      {
        title: "Unclear project scope",
        body: "Engineering work suffers when stakeholders are not aligned on requirements, constraints, and practical priorities early enough.",
      },
      {
        title: "Weak planning and documentation flow",
        body: "Projects become harder to coordinate when technical information is incomplete, unclear, or poorly structured.",
      },
      {
        title: "Coordination friction across stakeholders",
        body: "Developers, contractors, institutions, and project teams often need clearer communication support to keep work moving confidently.",
      },
      {
        title: "Low confidence in delivery structure",
        body: "Technical work can lose momentum when there is no disciplined framework for planning, support, and follow-through.",
      },
    ],
    capabilities: [
      {
        title: "Project and Site Assessment",
        body: "Clarify existing conditions, project needs, and the technical issues that should shape the next decisions.",
      },
      {
        title: "Planning and Technical Documentation",
        body: "Support coordination with clearer documentation, structure, and communication around technical requirements.",
      },
      {
        title: "Engineering Consultation",
        body: "Provide technically grounded input that supports better planning and more informed execution choices.",
      },
      {
        title: "Coordination Support",
        body: "Help stakeholders work with stronger alignment through clearer communication and more disciplined project flow.",
      },
      {
        title: "Implementation Support",
        body: "Assist with delivery-stage structure, follow-through, or oversight support where appropriate to scope.",
      },
    ],
    outcomes: [
      "Better project clarity from the outset",
      "More dependable planning and technical documentation",
      "Reduced coordination friction between stakeholders",
      "Stronger confidence in engineering-related decisions",
      "A more structured path from planning toward delivery",
    ],
    process: [
      {
        title: "Project Consultation",
        body: "We begin with the project context, scope discussion, stakeholder needs, and practical priorities.",
      },
      {
        title: "Scope and Technical Review",
        body: "Requirements, constraints, and documentation needs are clarified before work expands.",
      },
      {
        title: "Planning and Structuring",
        body: "Technical information is organized into a clearer delivery or coordination framework.",
      },
      {
        title: "Support Through Execution",
        body: "Where appropriate, support continues through coordination and delivery-stage engagement.",
      },
      {
        title: "Follow-Through",
        body: "The work stays tied to communication, accountability, and clearer next steps rather than ending abruptly.",
      },
    ],
    whyChooseUs: [
      {
        title: "Structured engineering thinking",
        body: "The work is framed around clarity, discipline, and stronger decision support rather than vague technical output.",
      },
      {
        title: "Dependable communication",
        body: "Stakeholders benefit from cleaner documentation and more understandable project communication.",
      },
      {
        title: "Project-aware delivery",
        body: "Support is shaped around the realities of coordination, timing, and multiple stakeholder needs.",
      },
      {
        title: "Integrated business perspective",
        body: "Engineering support sits alongside wider organizational presentation, planning, and delivery needs when relevant.",
      },
    ],
    proof: [
      {
        title: "Planning support and technical clarity",
        body: "Representative work focused on making projects easier to coordinate and easier to progress with confidence.",
      },
      {
        title: "Documentation and communication improvement",
        body: "Support that strengthens how technical information is organized and shared across project stakeholders.",
      },
      {
        title: "Coordination-minded engineering input",
        body: "Work shaped to reduce friction, improve understanding, and support more dependable project movement.",
      },
    ],
    faqs: [
      {
        question: "What kinds of engineering projects do you support?",
        answer:
          "Support depends on the actual scope, but the focus is on project clarity, technical planning, documentation, and stronger coordination across delivery needs.",
      },
      {
        question: "Can you assist at early planning stages?",
        answer:
          "Yes. Early-stage involvement is often where clearer structure and better communication can create the most value.",
      },
      {
        question: "Do you work with contractors, developers, or institutions directly?",
        answer:
          "Yes. The engagement can be shaped around different stakeholder groups depending on the project context and support needed.",
      },
      {
        question: "What is usually needed to begin?",
        answer:
          "A project consultation, background context, scope discussion, and any available technical or planning material are typically enough to begin productively.",
      },
    ],
    finalCtaTitle:
      "Need structured engineering input for a project that requires precision and confidence?",
    finalCtaBody:
      "Let's review the scope, clarify the project priorities, and define the most practical next step for stronger technical support.",
  },
];

export const serviceMap: Record<ServiceSlug, ServicePageData> = services.reduce(
  (accumulator, service) => {
    accumulator[service.slug] = service;
    return accumulator;
  },
  {} as Record<ServiceSlug, ServicePageData>,
);

export function isServiceSlug(value: string): value is ServiceSlug {
  return value in serviceMap;
}
