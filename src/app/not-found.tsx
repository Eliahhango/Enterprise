import Link from "next/link";

import { PageHero } from "@/components/sections/page-hero";
import { buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Page not found."
        body="The page you were trying to reach may have moved, no longer exist, or the link may be incorrect."
        primaryCta={{ href: "/", label: "Go to Homepage" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
        panelTitle="Helpful next steps"
        panelItems={[
          "Return to the homepage and re-enter through the main navigation.",
          "Explore the service pages to find the right discipline directly.",
          "Use the contact page if you need help getting to the correct next step.",
        ]}
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <Card tone="light" className="border-brand-slate/14">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ink">
                Services
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                Review cybersecurity, web development, graphics and design, and civil engineering.
              </p>
              <Link className={buttonClasses({ variant: "ghost", className: "mt-6" })} href="/services">
                View Services
              </Link>
            </Card>
            <Card tone="light" className="border-brand-slate/14">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ink">
                Case Studies
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                Explore representative work and proof patterns across the main service lines.
              </p>
              <Link className={buttonClasses({ variant: "ghost", className: "mt-6" })} href="/case-studies">
                View Case Studies
              </Link>
            </Card>
            <Card tone="light" className="border-brand-slate/14">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ink">
                Contact
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                Reach out directly if you want help finding the right service path or next step.
              </p>
              <Link className={buttonClasses({ variant: "ghost", className: "mt-6" })} href="/contact">
                Contact Us
              </Link>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
