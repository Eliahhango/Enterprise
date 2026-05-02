import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTASection } from "@/components/sections/cta-section";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CapabilityGrid } from "@/components/service/capability-grid";
import { OutcomeList } from "@/components/service/outcome-list";
import { ProblemGrid } from "@/components/service/problem-grid";
import { ProofStrip } from "@/components/service/proof-strip";
import { ServiceHero } from "@/components/service/service-hero";
import { WhyChooseUsGrid } from "@/components/service/why-choose-us-grid";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ServicePageData } from "@/lib/services";

type ServicePageProps = {
  service: ServicePageData;
};

export function ServicePage({ service }: ServicePageProps) {
  return (
    <>
      <ServiceHero service={service} />
      <ProblemGrid items={service.problems} service={service} />
      <CapabilityGrid items={service.capabilities} service={service} />
      <OutcomeList items={service.outcomes} service={service} />
      <ProcessSteps
        eyebrow="Process"
        title={`${service.name} engagements follow a clear, structured delivery model.`}
        body="Visible process helps reduce uncertainty and supports premium positioning, especially for services where trust and coordination matter."
        items={service.process}
        cta={{ href: "/contact", label: service.primaryCtaLabel }}
      />
      <WhyChooseUsGrid items={service.whyChooseUs} serviceName={service.name} />
      <ProofStrip items={service.proof} service={service} />
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <SectionHeading
              eyebrow="FAQ"
              title={`${service.name} questions answered clearly.`}
              body="These are the questions buyers most often ask before moving into a consultation, scope discussion, or service engagement."
            />
            <Card className={`border ${service.theme.borderClass}`}>
              <FAQAccordion items={service.faqs} />
            </Card>
          </div>
        </Container>
      </Section>
      <CTASection
        title={service.finalCtaTitle}
        body={service.finalCtaBody}
        primaryCta={{ href: "/contact", label: service.primaryCtaLabel }}
        secondaryCta={{ href: "/services", label: "All Services" }}
        note="Consultation-led, service-specific, and shaped around clearer next steps for serious clients."
      />
    </>
  );
}
