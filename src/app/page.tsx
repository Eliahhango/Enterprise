import type { Metadata } from "next";

import { CaseStudyPreviewGrid } from "@/components/sections/case-study-preview-grid";
import { CTASection } from "@/components/sections/cta-section";
import { HeroSplit } from "@/components/sections/hero-split";
import { IndustryGrid } from "@/components/sections/industry-grid";
import { ProblemSolutionBlock } from "@/components/sections/problem-solution-block";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ServiceGrid } from "@/components/sections/service-grid";
import { TestimonialBlock } from "@/components/sections/testimonial-block";
import { TrustBar } from "@/components/sections/trust-bar";
import { ValuePillars } from "@/components/sections/value-pillars";
import { featuredCaseStudy, supportingCaseStudies } from "@/lib/case-studies";
import { industries } from "@/lib/industries";
import { buildServiceCatalogJsonLd } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { serviceCards } from "@/lib/service-cards";
import { JsonLd } from "@/components/seo/json-ld";

const trustItems = [
  "Consultation-Led Engagements",
  "Structured Delivery",
  "Multi-Disciplinary Expertise",
  "Security-Conscious Execution",
  "Premium Quality Standards",
  "Business-Focused Solutions",
];

const valuePillars = [
  {
    title: "Integrated Expertise",
    body: "Clients get one coordinated standard across security, digital platforms, brand execution, and engineering support.",
  },
  {
    title: "Structured Delivery",
    body: "Every engagement is shaped around scope, process, communication rhythm, and clearly defined next steps.",
  },
  {
    title: "High-Trust Standards",
    body: "The experience is built to feel dependable, commercially aware, and appropriate for serious organizations.",
  },
  {
    title: "Outcome-Focused Thinking",
    body: "Work is framed around risk reduction, credibility, project clarity, and business performance rather than activity alone.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    body: "We start by understanding your priorities, constraints, goals, and the stakeholders involved.",
  },
  {
    title: "Assessment",
    body: "We review the current situation, identify gaps, and define the most appropriate engagement path.",
  },
  {
    title: "Strategy",
    body: "Recommendations are translated into a clear plan with practical scope, deliverables, and execution logic.",
  },
  {
    title: "Execution",
    body: "Delivery stays structured, quality-controlled, and aligned with the agreed objectives.",
  },
];

const testimonials = [
  {
    quote:
      "[Company Name] brought structure and clarity to the engagement from the beginning. Their communication was professional, and the outcome reflected real care in the details.",
    name: "Client Placeholder",
    role: "Operations Lead, Business Services",
  },
  {
    quote:
      "What stood out was their ability to understand both the technical side and the business context. The process felt organized and dependable throughout.",
    name: "Client Placeholder",
    role: "Director, Institutional Team",
  },
  {
    quote:
      "They helped us move from fragmented execution toward a cleaner, more credible presentation of the business.",
    name: "Client Placeholder",
    role: "Managing Partner, Consulting Firm",
  },
];

export const metadata: Metadata = createPageMetadata({
  path: "/",
  description:
    "Premium multi-service company website for organizations seeking cybersecurity, web development, graphics and design, and civil engineering support.",
});

export default function Home() {
  return (
    <>
      <JsonLd data={buildServiceCatalogJsonLd()} />
      <HeroSplit
        eyebrow="Integrated Solutions for Modern Business"
        title="Secure systems. Stronger brands. Better digital platforms. Dependable engineering."
        body="[Company Name] helps organizations strengthen security, build high-performing digital platforms, improve brand presentation, and support engineering delivery with structure and precision."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
        trustLine="Built for businesses, institutions, and project stakeholders that value trust, clarity, and disciplined execution."
        stats={[
          { label: "Service Lines", value: "Cybersecurity, web, design, and engineering" },
          { label: "Positioning", value: "Premium, modern, and enterprise-ready" },
          { label: "Engagement Style", value: "Consultation-led and outcome-focused" },
        ]}
        highlights={[
          {
            title: "Secure what matters",
            detail:
              "Cybersecurity support shaped around practical risk reduction, better confidence, and clearer priorities.",
          },
          {
            title: "Build with structure",
            detail:
              "Digital platforms, design systems, and engineering work aligned to one professional quality bar.",
          },
        ]}
      />

      <TrustBar items={trustItems} />

      <ServiceGrid
        eyebrow="What We Do"
        title="Four expert service lines. One professional standard."
        body="We bring together technical, creative, and infrastructure expertise under one brand so clients can work with a partner that values consistency, precision, and results."
        items={serviceCards}
      />

      <ValuePillars
        eyebrow="Why [Company Name]"
        title="Built for clients who need more than a vendor."
        body="We work with organizations that need a partner capable of thinking clearly, communicating professionally, and delivering to a consistently high standard across multiple disciplines."
        items={valuePillars}
      />

      <ProblemSolutionBlock
        eyebrow="What We Help Solve"
        title="Practical solutions for complex business and project needs."
        body="Many organizations struggle with fragmented vendors, inconsistent delivery, weak digital credibility, avoidable security risks, or poorly coordinated execution. We bring those needs together through a more disciplined approach."
        problems={[
          "Disconnected vendors creating uneven quality and communication gaps",
          "Digital experiences that do not reflect the real quality of the organization",
          "Brand systems and business materials that feel inconsistent or underdeveloped",
          "Security concerns without a clear priority framework",
          "Project work that suffers from poor coordination or weak documentation flow",
        ]}
        outcomes={[
          "Stronger trust across digital and physical touchpoints",
          "More consistent communication and presentation standards",
          "Clearer delivery structure from assessment through execution",
          "Better alignment between business goals and implementation choices",
        ]}
        cta={{ href: "/contact", label: "Discuss Your Requirements" }}
      />

      <ProcessSteps
        eyebrow="How We Work"
        title="Clear process. Professional delivery."
        body="We approach every engagement with structure and transparency so clients understand what comes next, what success looks like, and how the work moves forward."
        items={processSteps}
        cta={{ href: "/how-we-work", label: "See Our Process" }}
      />

      <CaseStudyPreviewGrid
        eyebrow="Selected Work"
        title="Work that reflects precision, clarity, and professional standards."
        body="We believe results matter more than claims. These case studies and representative delivery examples show how we help clients improve trust, presentation, digital performance, and project confidence."
        featured={{
          title: featuredCaseStudy.title,
          sector: featuredCaseStudy.sector,
          challenge: featuredCaseStudy.challenge,
          result: featuredCaseStudy.resultSummary,
          href: `/case-studies/${featuredCaseStudy.slug}`,
        }}
        items={supportingCaseStudies.map((caseStudy) => ({
          title: caseStudy.title,
          sector: caseStudy.sector,
          challenge: caseStudy.challenge,
          result: caseStudy.resultSummary,
          href: `/case-studies/${caseStudy.slug}`,
        }))}
        cta={{ href: "/case-studies", label: "View Case Studies" }}
      />

      <IndustryGrid
        eyebrow="Who We Serve"
        title="Supporting organizations across multiple sectors."
        body="Our services are built for businesses, institutions, and project-driven organizations that need capable partners, clear communication, and dependable standards."
        items={industries.map((industry) => ({
          title: industry.title,
          summary: industry.summary,
        }))}
        cta={{ href: "/industries", label: "See Industry Solutions" }}
      />

      <TestimonialBlock
        eyebrow="Client Confidence"
        title="Trusted for professionalism, clarity, and dependable standards."
        body="We build long-term trust by delivering work that is well planned, well communicated, and aligned with real business goals."
        featured={testimonials[0]}
        items={testimonials.slice(1)}
      />

      <CTASection
        title="Need a partner that can deliver across security, digital, design, and engineering?"
        body="Let's discuss your goals, priorities, and project requirements, then define the right next step with a clear and professional approach."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
        note="Consultation-led, service-aware, and structured around the needs of serious organizations."
      />
    </>
  );
}
