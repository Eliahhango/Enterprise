import Link from "next/link";

import { buttonClasses } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

type HeroStat = {
  label: string;
  value: string;
};

type HeroHighlight = {
  title: string;
  detail: string;
};

type HeroSplitProps = {
  eyebrow: string;
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
  trustLine: string;
  stats: HeroStat[];
  highlights: HeroHighlight[];
};

export function HeroSplit({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
  trustLine,
  stats,
  highlights,
}: HeroSplitProps) {
  return (
    <Section className="relative overflow-hidden pb-10 pt-16 md:pb-14 md:pt-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
              {eyebrow}
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-brand-ivory sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-brand-stone/78 md:text-xl">
              {body}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link className={buttonClasses({ size: "lg" })} href={primaryCta.href}>
                {primaryCta.label}
              </Link>
              <Link
                className={buttonClasses({ size: "lg", variant: "secondary" })}
                href={secondaryCta.href}
              >
                {secondaryCta.label}
              </Link>
            </div>
            <p className="mt-8 max-w-xl border-l border-brand-gold/35 pl-4 text-sm leading-7 text-brand-stone/72">
              {trustLine}
            </p>
            <dl className="mt-12 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs uppercase tracking-[0.2em] text-brand-stone/55">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-brand-ivory md:text-base">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <Card className="relative overflow-hidden border-brand-gold/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-0">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/55 to-transparent" />
            <div className="grid gap-5 p-7 md:p-8">
              <div className="rounded-[18px] border border-white/10 bg-brand-ink/78 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-stone/55">
                  Integrated Positioning
                </p>
                <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ivory">
                  One disciplined standard across security, digital, design, and engineering.
                </p>
              </div>
              <div className="grid gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={highlight.title}
                    className="grid gap-4 rounded-[18px] border border-white/8 bg-white/[0.03] p-5 sm:grid-cols-[52px_minmax(0,1fr)] sm:items-start"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] border border-white/8 bg-white/[0.03] font-display text-sm font-semibold text-brand-gold">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ivory">
                        {highlight.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-brand-stone/76 md:text-base">
                        {highlight.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
