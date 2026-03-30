import Link from "next/link";

import { CTASection } from "@/components/sections/cta-section";
import { IndustryGrid } from "@/components/sections/industry-grid";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { industries } from "@/lib/industries";
import { createPageMetadata } from "@/lib/seo/metadata";
import { serviceMap } from "@/lib/services";

export const metadata = createPageMetadata({
  title: "Industries",
  path: "/industries",
  description:
    "See how [Company Name] supports growing businesses, institutions, corporate teams, and project-led organizations across multiple sectors.",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Supporting organizations across multiple sectors without losing focus."
        body="Our services are designed for businesses, institutions, and project-led teams that need a capable partner, clear communication, and dependable standards across every engagement."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
        panelTitle="What industry relevance improves"
        panelItems={[
          "Helps visitors recognize that the business understands their environment and decision pressures.",
          "Creates stronger trust by connecting services to real business and project contexts.",
          "Supports more qualified conversations because the fit is clearer from the start.",
        ]}
      />

      <IndustryGrid
        eyebrow="Who We Serve"
        title="A broad client profile, presented with discipline."
        body="Industry relevance matters most when it helps a visitor say, this company understands the kind of work we are trying to get done."
        items={industries.map((industry) => ({
          title: industry.title,
          summary: industry.summary,
        }))}
        cta={{ href: "/contact", label: "Discuss Your Sector" }}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Where The Fit Is Strongest"
            title="How the service model adapts across different client types."
            body="Each sector brings a different balance of urgency, trust requirements, internal complexity, and delivery expectations."
          />
          <div className="mt-12 grid gap-5 xl:grid-cols-2">
            {industries.map((industry) => (
              <Card key={industry.slug}>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="rounded-full border border-brand-gold/20 bg-brand-gold/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                    {industry.title}
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-brand-stone/76 md:text-base">
                  {industry.challenge}
                </p>
                <p className="mt-4 border-l border-brand-gold/25 pl-4 text-sm leading-7 text-brand-stone/78 md:text-base">
                  {industry.fit}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {industry.services.map((slug) => (
                    <Link
                      key={slug}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-stone/72 transition hover:border-brand-gold/30 hover:text-brand-ivory"
                      href={`/services/${slug}`}
                    >
                      {serviceMap[slug].name}
                    </Link>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Need a service partner that understands your sector and its delivery pressures?"
        body="We can discuss your environment, priorities, and project requirements, then recommend the most effective way to engage."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/case-studies", label: "View Case Studies" }}
        note="Built to support serious organizations with clearer fit, better communication, and more dependable standards."
      />
    </>
  );
}
