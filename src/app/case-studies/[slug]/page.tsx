import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudyMap, caseStudies, isCaseStudySlug } from "@/lib/case-studies";
import { createPageMetadata } from "@/lib/seo/metadata";
import { serviceMap } from "@/lib/services";

type CaseStudyPageRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageRouteProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isCaseStudySlug(slug)) {
    return {};
  }

  const caseStudy = caseStudyMap[slug];

  return createPageMetadata({
    title: caseStudy.title,
    description: caseStudy.metaDescription,
    path: `/case-studies/${caseStudy.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageRouteProps) {
  const { slug } = await params;

  if (!isCaseStudySlug(slug)) {
    notFound();
  }

  const caseStudy = caseStudyMap[slug];

  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title={caseStudy.title}
        body={caseStudy.summary}
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/case-studies", label: "Back to Case Studies" }}
        panelTitle="Engagement snapshot"
        panelItems={[
          `Sector: ${caseStudy.sector}`,
          `Industry fit: ${caseStudy.industry}`,
          `Related services: ${caseStudy.services.map((service) => serviceMap[service].name).join(", ")}`,
        ]}
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Card tone="light" className="border-brand-slate/14">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-copper">
                Challenge
              </p>
              <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                {caseStudy.challenge}
              </p>
            </Card>
            <Card tone="light" className="border-brand-slate/14">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-copper">
                Solution
              </p>
              <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                {caseStudy.solution}
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <SectionHeading
              eyebrow="Outcome"
              title="What the engagement was designed to improve."
              body={caseStudy.resultSummary}
            />
            <Card>
              <div className="grid gap-4">
                {caseStudy.results.map((result, index) => (
                  <div
                    key={result}
                    className="grid gap-4 rounded-[18px] border border-white/8 bg-white/[0.03] p-5 sm:grid-cols-[48px_minmax(0,1fr)] sm:items-start"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.04] font-display text-sm font-semibold text-brand-ivory">
                      0{index + 1}
                    </div>
                    <p className="text-sm leading-7 text-brand-stone/76 md:text-base">{result}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <SectionHeading
            eyebrow="Related Services"
            title="The service lines most relevant to this engagement."
            body="These links make it easy to move from proof into the service pages that explain outcomes, process, and next-step engagement more directly."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {caseStudy.services.map((slug) => (
              <Card key={slug}>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ivory">
                  {serviceMap[slug].name}
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-stone/76 md:text-base">
                  {serviceMap[slug].metaDescription}
                </p>
                <Link
                  className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-brand-ivory transition hover:text-brand-gold"
                  href={`/services/${slug}`}
                >
                  View Service
                  <span className="text-brand-gold">/</span>
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Need a similar outcome shaped around your own business or project context?"
        body="We can discuss your goals, clarify the constraints, and recommend a service path that fits the actual requirement."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
        note="Every project is scoped around real needs, but the delivery principles remain clear, structured, and quality-focused."
      />
    </>
  );
}
