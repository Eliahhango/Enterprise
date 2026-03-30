import type { ServiceContentItem, ServicePageData } from "@/lib/services";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type ProofStripProps = {
  service: ServicePageData;
  items: ServiceContentItem[];
};

export function ProofStrip({ service, items }: ProofStripProps) {
  return (
    <Section tone="light">
      <Container>
        <SectionHeading
          eyebrow="Proof and Evidence"
          title={`Selected proof points for ${service.name.toLowerCase()}.`}
          body="Proof matters because it helps clients see how the service translates into clearer delivery, stronger outcomes, and a more trustworthy engagement experience."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <Card
              key={item.title}
              tone="light"
              className={`border-brand-slate/14 border-t-2 ${service.theme.borderClass}`}
            >
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
  );
}
