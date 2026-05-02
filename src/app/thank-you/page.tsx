import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getServiceLabel } from "@/lib/validation/contact";

type ThankYouPageProps = {
  searchParams: Promise<{
    service?: string;
  }>;
};

export const metadata = createPageMetadata({
  title: "Thank You",
  path: "/thank-you",
  noIndex: true,
  description:
    "Confirmation page for successful contact and consultation requests submitted through [Company Name].",
});

export default async function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const { service } = await searchParams;
  const serviceLabel = service ? getServiceLabel(service) : "Inquiry";

  return (
    <>
      <PageHero
        eyebrow="Thank You"
        title={`Your ${serviceLabel.toLowerCase()} request has been received.`}
        body="Our team will review the information you sent and respond with a clear next step as soon as possible. If the matter is time-sensitive, you can also reach out directly using the contact details on the site."
        primaryCta={{ href: "/", label: "Return Home" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
        panelTitle="What happens next"
        panelItems={[
          "Your inquiry is reviewed against the service area, scope, and context you provided.",
          "The next response is aimed at clarifying the path forward rather than sending generic follow-up.",
          "If more detail is needed, we will ask for it directly and keep the conversation focused.",
        ]}
      />

      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Next Steps"
            title="While you wait, here are the most useful directions back into the site."
            body="The thank-you experience should feel complete, not like a dead end. These links help visitors continue exploring without losing the sense that the inquiry was received properly."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Card tone="light" className="border-brand-slate/14">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ink">
                Review Services
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                Revisit the four core service lines and the outcomes each one is built to support.
              </p>
              <Link className={buttonClasses({ variant: "ghost", className: "mt-6" })} href="/services">
                View Services
              </Link>
            </Card>
            <Card tone="light" className="border-brand-slate/14">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ink">
                Explore Case Studies
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                See representative work and proof patterns across digital, design, security, and engineering support.
              </p>
              <Link className={buttonClasses({ variant: "ghost", className: "mt-6" })} href="/case-studies">
                View Case Studies
              </Link>
            </Card>
            <Card tone="light" className="border-brand-slate/14">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ink">
                Understand the Process
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                Learn how engagements move from discovery and assessment through delivery and follow-through.
              </p>
              <Link className={buttonClasses({ variant: "ghost", className: "mt-6" })} href="/how-we-work">
                How We Work
              </Link>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
