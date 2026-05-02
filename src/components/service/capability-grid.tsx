import type { ServiceContentItem, ServicePageData } from "@/lib/services";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type CapabilityGridProps = {
  service: ServicePageData;
  items: ServiceContentItem[];
};

export function CapabilityGrid({ service, items }: CapabilityGridProps) {
  return (
    <Section tone="light">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title={`${service.name} services shaped around business and project reality.`}
          body="These are framed as outcomes-oriented capabilities rather than a flat list of tasks."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
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
  );
}
