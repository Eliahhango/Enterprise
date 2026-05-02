import Link from "next/link";

import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo/metadata";
import { serviceCards } from "@/lib/service-cards";

const values = [
  {
    title: "Clarity",
    body: "We believe good work starts with a clear understanding of the problem, the objective, and the path forward.",
  },
  {
    title: "Professionalism",
    body: "Communication, preparation, and presentation matter as much as technical capability when trust is on the line.",
  },
  {
    title: "Quality",
    body: "We focus on thoughtful execution, refined detail, and work that reflects care rather than rushed output.",
  },
  {
    title: "Integrity",
    body: "Recommendations are shaped around what is useful, supportable, and practical for the client rather than what sounds impressive.",
  },
  {
    title: "Coordination",
    body: "Our advantage is not only breadth of capability, but the ability to bring several disciplines together under one standard.",
  },
];

export const metadata = createPageMetadata({
  title: "About",
  path: "/about",
  description:
    "Learn how [Company Name] brings together cybersecurity, web development, graphics and design, and civil engineering under one professional standard.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About [Company Name]"
        title="A multi-disciplinary company built around quality, structure, and trust."
        body="[Company Name] brings together cybersecurity, web development, graphics and design, and civil engineering under one professional standard so organizations can solve complex needs with greater clarity and confidence."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
        panelTitle="Why clients work with us"
        panelItems={[
          "Integrated expertise across digital, visual, security, and engineering workstreams.",
          "Structured project delivery with clearer communication and stronger accountability.",
          "A premium quality bar designed to support serious organizations and high-trust engagements.",
        ]}
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <SectionHeading
              eyebrow="Company Overview"
              title="One company. Multiple disciplines. One standard of delivery."
              body="We built [Company Name] around a simple idea: clients should not have to choose between technical capability, strong communication, and refined execution."
            />
            <div className="grid gap-5 md:grid-cols-2">
              <Card tone="light" className="border-brand-slate/14">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-copper">
                  Mission
                </p>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                  To help organizations build, protect, present, and deliver with greater confidence through integrated services shaped by discipline, precision, and trust.
                </p>
              </Card>
              <Card tone="light" className="border-brand-slate/14">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-copper">
                  Vision
                </p>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                  To be recognized as a trusted multi-disciplinary partner for organizations that value high standards, clear thinking, and dependable execution.
                </p>
              </Card>
              <Card tone="light" className="border-brand-slate/14 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-copper">
                  What makes the model stronger
                </p>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                  Clients often face fragmented delivery across several vendors, uneven quality standards, and communication that breaks down between disciplines. [Company Name] offers a more coordinated alternative built for clarity, trust, and commercially credible outcomes.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="What Guides Our Work"
            title="The principles behind every engagement."
            body="These values help keep the business broad in capability without becoming scattered in how it delivers."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title}>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ivory">
                  {value.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-stone/76 md:text-base">
                  {value.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Areas of Expertise"
              title="Four service lines designed to work independently or together."
              body="Whether the need is a stronger digital presence, better security posture, more credible visual communication, or structured engineering support, the delivery standard stays consistent."
            />
            <Link className="text-sm font-semibold text-brand-gold transition hover:text-brand-ivory" href="/services">
              View all services /
            </Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {serviceCards.map((service) => (
              <Card key={service.title} className="border-white/12">
                <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${service.accent}`}>
                  {service.marker}
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ivory">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-stone/76 md:text-base">
                  {service.summary}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Looking for a partner that values precision, trust, and professional standards?"
        body="We would be glad to review your requirements, understand the scope, and recommend the right path forward."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/how-we-work", label: "How We Work" }}
        note="Consultation-led and structured to give serious clients a clearer next step."
      />
    </>
  );
}
