import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type ServiceItem = {
  title: string;
  summary: string;
  bullets: string[];
  href: string;
  accent: string;
  marker: string;
};

type ServiceGridProps = {
  eyebrow: string;
  title: string;
  body: string;
  items: ServiceItem[];
};

export function ServiceGrid({
  eyebrow,
  title,
  body,
  items,
}: ServiceGridProps) {
  return (
    <Section id="services">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} body={body} />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {items.map((service) => (
            <Card
              key={service.title}
              className="group transition duration-300 hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.055]"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${service.accent}`}
                  >
                    {service.marker}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ivory">
                    {service.title}
                  </h3>
                </div>
                <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.04] text-xs font-semibold uppercase tracking-[0.14em] text-brand-stone/72">
                  {service.marker}
                </div>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-7 text-brand-stone/78 md:text-base">
                {service.summary}
              </p>
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-brand-stone/72">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Link
                className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-brand-ivory transition hover:text-brand-gold"
                href={service.href}
              >
                View Service
                <span className="text-brand-gold">/</span>
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
