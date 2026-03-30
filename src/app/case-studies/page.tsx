import Link from "next/link";

import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies, featuredCaseStudy, supportingCaseStudies } from "@/lib/case-studies";
import { createPageMetadata } from "@/lib/seo/metadata";
import { serviceMap } from "@/lib/services";

export const metadata = createPageMetadata({
  title: "Case Studies",
  path: "/case-studies",
  description:
    "Review selected case studies and representative delivery patterns across security, digital platforms, design, and engineering support.",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Selected work that reflects clarity, structure, and dependable standards."
        body="Our work is shaped around real business and project needs. Where named case studies are still being prepared, we show representative delivery patterns honestly rather than filling the site with vague claims."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
        panelTitle="What these case studies are here to do"
        panelItems={[
          "Show how the work solves problems rather than just listing capabilities.",
          "Make the delivery model more believable for buyers who need proof before they inquire.",
          "Create a foundation for fuller named case studies as the content library grows.",
        ]}
      />

      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <Card className="border-brand-gold/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-brand-gold/20 bg-brand-gold/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                  Featured Work
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-stone/66">
                  {featuredCaseStudy.sector}
                </div>
              </div>
              <h2 className="mt-6 max-w-3xl font-display text-3xl font-semibold tracking-[-0.04em] text-brand-ivory">
                {featuredCaseStudy.title}
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-brand-stone/76 md:text-base">
                {featuredCaseStudy.summary}
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-stone/55">Challenge</p>
                  <p className="mt-3 text-sm leading-7 text-brand-stone/76 md:text-base">
                    {featuredCaseStudy.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-stone/55">Outcome</p>
                  <p className="mt-3 text-sm leading-7 text-brand-stone/76 md:text-base">
                    {featuredCaseStudy.resultSummary}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {featuredCaseStudy.services.map((slug) => (
                  <span
                    key={slug}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-stone/72"
                  >
                    {serviceMap[slug].name}
                  </span>
                ))}
              </div>
              <Link
                className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-brand-ivory transition hover:text-brand-gold"
                href={`/case-studies/${featuredCaseStudy.slug}`}
              >
                View Case Study
                <span className="text-brand-gold">/</span>
              </Link>
            </Card>

            <div className="grid gap-5">
              {supportingCaseStudies.map((caseStudy) => (
                <Card key={caseStudy.slug}>
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-stone/66">
                    {caseStudy.sector}
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ivory">
                    {caseStudy.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-brand-stone/74 md:text-base">
                    {caseStudy.summary}
                  </p>
                  <p className="mt-4 border-l border-brand-gold/25 pl-4 text-sm leading-7 text-brand-stone/78 md:text-base">
                    {caseStudy.resultSummary}
                  </p>
                  <Link
                    className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-brand-ivory transition hover:text-brand-gold"
                    href={`/case-studies/${caseStudy.slug}`}
                  >
                    View Case Study
                    <span className="text-brand-gold">/</span>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Why Proof Matters"
            title="Case studies make the service model believable."
            body="For a multi-service company, proof is one of the strongest ways to reduce doubt, support premium pricing, and help clients picture how the work would translate to their own context."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <Card key={caseStudy.slug} tone="light" className="border-brand-slate/14">
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ink">
                  {caseStudy.industry}
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                  {caseStudy.resultSummary}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Want to discuss work similar to your own project or operational challenge?"
        body="We can review the context, share how a comparable engagement would be structured, and recommend the right next step."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/industries", label: "View Industries" }}
        note="Representative examples today, stronger proof library over time, and always clear communication about what is real and supportable."
      />
    </>
  );
}
