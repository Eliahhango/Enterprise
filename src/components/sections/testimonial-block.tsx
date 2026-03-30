import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type TestimonialBlockProps = {
  eyebrow: string;
  title: string;
  body: string;
  featured: Testimonial;
  items: Testimonial[];
};

export function TestimonialBlock({
  eyebrow,
  title,
  body,
  featured,
  items,
}: TestimonialBlockProps) {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} body={body} />
        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <Card className="border-brand-gold/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
            <p className="text-2xl leading-10 text-brand-ivory/94 md:text-[1.95rem] md:leading-[1.55]">
              "{featured.quote}"
            </p>
            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="font-semibold text-brand-ivory">{featured.name}</p>
              <p className="mt-1 text-sm text-brand-stone/70">{featured.role}</p>
            </div>
          </Card>
          <div className="grid gap-5">
            {items.map((item) => (
              <Card key={item.name}>
                <p className="text-base leading-8 text-brand-stone/76">"{item.quote}"</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-brand-ivory">{item.name}</p>
                  <p className="mt-1 text-sm text-brand-stone/70">{item.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
