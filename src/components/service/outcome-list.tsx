import type { ServicePageData } from "@/lib/services";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type OutcomeListProps = {
  service: ServicePageData;
  items: string[];
};

export function OutcomeList({ service, items }: OutcomeListProps) {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <SectionHeading
            eyebrow="Outcomes"
            title={`What stronger ${service.name.toLowerCase()} support helps you achieve.`}
            body="This section translates the service into operational or commercial value so the page sells outcomes rather than activity."
          />
          <Card className={`border ${service.theme.borderClass}`}>
            <ul className="grid gap-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span
                    className={`mt-2 inline-flex h-2 w-2 rounded-full ${service.theme.dotClass}`}
                  />
                  <span className="text-sm leading-7 text-brand-stone/78 md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
