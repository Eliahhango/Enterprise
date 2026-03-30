import Link from "next/link";

import { buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type CTASectionProps = {
  title: string;
  body: string;
  primaryCta: {
    href: string;
    label: string;
  };
  secondaryCta: {
    href: string;
    label: string;
  };
  note: string;
};

export function CTASection({
  title,
  body,
  primaryCta,
  secondaryCta,
  note,
}: CTASectionProps) {
  return (
    <Section className="pt-0">
      <Container>
        <Card className="border-brand-gold/18 bg-gradient-to-br from-brand-ink to-brand-navy">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
                Consultation CTA
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-[-0.04em] text-brand-ivory sm:text-4xl">
                {title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-brand-stone/76">
                {body}
              </p>
            </div>
            <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-6">
              <div className="flex flex-col gap-3">
                <Link className={buttonClasses({ className: "w-full" })} href={primaryCta.href}>
                  {primaryCta.label}
                </Link>
                <Link
                  className={buttonClasses({ variant: "secondary", className: "w-full" })}
                  href={secondaryCta.href}
                >
                  {secondaryCta.label}
                </Link>
              </div>
              <p className="mt-5 text-sm leading-7 text-brand-stone/72">{note}</p>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
