import { CTASection } from "@/components/sections/cta-section";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo/metadata";

const processSteps = [
  {
    title: "Discovery",
    body: "We begin by understanding the goals, constraints, stakeholders, and the real context behind the request.",
  },
  {
    title: "Assessment",
    body: "The current situation is reviewed so priorities, gaps, and delivery realities become clearer before execution begins.",
  },
  {
    title: "Strategy",
    body: "Recommendations are translated into a practical plan with clearer scope, responsibilities, and expected outcomes.",
  },
  {
    title: "Execution",
    body: "Work is delivered with attention to quality, communication rhythm, and the commercial reality of the project.",
  },
  {
    title: "Support",
    body: "Where needed, the engagement continues through follow-through, handover, refinement, or ongoing support.",
  },
];

const principles = [
  {
    title: "Clarity before complexity",
    body: "We work to make requirements, risks, and priorities understandable before adding process weight or technical noise.",
  },
  {
    title: "Communication that reduces friction",
    body: "Clients should never have to guess where the work stands or what the next decision depends on.",
  },
  {
    title: "Scope with discipline",
    body: "The delivery model stays stronger when expectations, boundaries, and outcomes are defined early and revisited clearly.",
  },
  {
    title: "Quality that supports trust",
    body: "From design detail to engineering communication, the standard should feel dependable at every touchpoint.",
  },
];

export const metadata = createPageMetadata({
  title: "How We Work",
  path: "/how-we-work",
  description:
    "Understand the process, delivery principles, and engagement structure behind how [Company Name] works with clients.",
});

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="Clear process, professional delivery, and a calmer experience for serious clients."
        body="Process is one of the strongest trust signals on the site. It shows that the business is not only capable, but disciplined in how it turns scope into delivery."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
        panelTitle="What the process is meant to create"
        panelItems={[
          "Better visibility into what happens next and what success should look like.",
          "Less uncertainty across digital, design, security, and engineering engagements.",
          "A delivery rhythm that feels structured enough for enterprise expectations without becoming heavy or confusing.",
        ]}
      />

      <ProcessSteps
        eyebrow="Process"
        title="The five-step engagement model used to keep work clear, coordinated, and accountable."
        body="The exact scope changes by service, but the underlying structure stays consistent so clients always know how the work moves forward."
        items={processSteps}
        cta={{ href: "/contact", label: "Request Consultation" }}
      />

      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Delivery Principles"
            title="How we protect quality while keeping the process practical."
            body="A premium process should create confidence, not bureaucracy. These principles help keep the experience disciplined and usable at the same time."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle) => (
              <Card key={principle.title} tone="light" className="border-brand-slate/14">
                <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ink">
                  {principle.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                  {principle.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Want a consultation process that feels clear, measured, and commercially useful from the start?"
        body="We can begin with the right conversation, define the scope carefully, and recommend the most practical route forward."
        primaryCta={{ href: "/contact", label: "Request Consultation" }}
        secondaryCta={{ href: "/about", label: "About [Company Name]" }}
        note="Good process is one of the clearest ways a multi-service company earns trust early."
      />
    </>
  );
}
