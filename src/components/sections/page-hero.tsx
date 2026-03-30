import Link from "next/link";

import { buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta?: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
  panelTitle?: string;
  panelItems?: string[];
};

export function PageHero({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
  panelTitle,
  panelItems = [],
}: PageHeroProps) {
  const hasPanel = panelTitle && panelItems.length > 0;

  return (
    <Section className="relative overflow-hidden pb-12 pt-16 md:pb-16 md:pt-24">
      <Container>
        <div className={`grid gap-12 ${hasPanel ? "lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)] lg:items-end" : "max-w-4xl"}`}>
          <div>
            <div className="inline-flex rounded-full bg-brand-gold/14 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              {eyebrow}
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-brand-ivory sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-stone/78 md:text-xl">
              {body}
            </p>
            {primaryCta || secondaryCta ? (
              <div className="mt-10 flex flex-wrap gap-4">
                {primaryCta ? (
                  <Link className={buttonClasses({ size: "lg" })} href={primaryCta.href}>
                    {primaryCta.label}
                  </Link>
                ) : null}
                {secondaryCta ? (
                  <Link
                    className={buttonClasses({ size: "lg", variant: "secondary" })}
                    href={secondaryCta.href}
                  >
                    {secondaryCta.label}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>

          {hasPanel ? (
            <Card className="border-brand-gold/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-stone/55">{panelTitle}</p>
              <div className="mt-6 grid gap-4">
                {panelItems.map((item, index) => (
                  <div
                    key={item}
                    className="grid gap-4 rounded-[18px] border border-white/8 bg-white/[0.03] p-5 sm:grid-cols-[48px_minmax(0,1fr)] sm:items-start"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.04] font-display text-sm font-semibold text-brand-ivory">
                      0{index + 1}
                    </div>
                    <p className="text-sm leading-7 text-brand-stone/76 md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
