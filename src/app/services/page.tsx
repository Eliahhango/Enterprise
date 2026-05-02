import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceGrid } from "@/components/sections/service-grid";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo/metadata";
import { serviceCards } from "@/lib/service-cards";

const serviceModel = [
  {
    title: "Single-service engagements",
    body: "Clients can engage one discipline directly when the need is specific and clearly defined.",
  },
  {
    title: "Cross-service coordination",
    body: "Where projects overlap, we align web, design, security, and engineering work under a more coherent delivery model.",
  },
  {
    title: "Consultation-led scoping",
    body: "We use early conversations to clarify the real requirement before recommending the scope, route, or service mix.",
  },
];

export const metadata = createPageMetadata({
  title: "Services",
  path: "/services",
  description:
    "Explore the cybersecurity, web development, graphics and design, and civil engineering services offered by [Company Name].",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four expert service lines. One coordinated standard of delivery."
        body="Our services are organized to make the business easy to understand, easy to trust, and easier to engage whether the need is digital, visual, security-related, or engineering-led."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/case-studies", label: "View Case Studies" }}
        panelTitle="What the service model is built to do"
        panelItems={[
          "Make a broad business feel structured instead of scattered.",
          "Support premium positioning with clearer service definitions and stronger trust signals.",
          "Give clients a direct route into the right conversation based on real needs.",
        ]}
      />

      <ServiceGrid
        eyebrow="Service Lines"
        title="Capability areas designed for modern business, project, and infrastructure needs."
        body="Each service page goes deeper into outcomes, process, proof, and the value of working with [Company Name] in that area."
        items={serviceCards}
      />

      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="How The Model Works"
            title="The advantage is not only what we offer, but how the offer is coordinated."
            body="A multi-service business becomes more credible when the structure behind it is disciplined, commercially aware, and easy for clients to navigate."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {serviceModel.map((item) => (
              <Card key={item.title} tone="light" className="border-brand-slate/14">
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ink">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                  {item.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Need help deciding which service line fits your project best?"
        body="We can review your goals, current constraints, and scope, then guide you toward the right service path or combination of services."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/about", label: "Why [Company Name]" }}
        note="Clear scoping is part of the service experience, not an afterthought."
      />
    </>
  );
}
