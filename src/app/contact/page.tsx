import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { createPageMetadata } from "@/lib/seo/metadata";

const contactMethods = [
  {
    title: "Email",
    value: "[Email Address]",
    body: "Use email when you need to share project context, service requirements, or a clear consultation request.",
  },
  {
    title: "Phone",
    value: "[Phone Number]",
    body: "Best for direct conversation when the project or issue benefits from immediate discussion.",
  },
  {
    title: "Office",
    value: "[Office Location]",
    body: "Location details can support formal engagement, project coordination, and in-person consultation where needed.",
  },
  {
    title: "Business Hours",
    value: "Monday to Friday, 8:00 AM to 5:00 PM",
    body: "Serious inquiries are reviewed promptly with clear next-step guidance wherever possible.",
  },
];

const expectations = [
  {
    title: "Professional and confidential handling",
    body: "We treat inquiries with care and keep the first conversation focused, useful, and commercially appropriate.",
  },
  {
    title: "Clear communication from the start",
    body: "You should expect a direct response, a sensible next step, and guidance that matches the actual requirement.",
  },
  {
    title: "Service-aware recommendations",
    body: "Requests are reviewed in context so they can be routed toward the right service line or a coordinated solution if several areas overlap.",
  },
];

export const metadata = createPageMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Contact [Company Name] to discuss cybersecurity, web development, graphics and design, civil engineering, or a broader consultation request.",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your project, service need, or consultation request."
        body="Whether you need cybersecurity support, a new digital platform, professional design work, or civil engineering consultation, we are ready to understand the requirement and guide the next step clearly."
        primaryCta={{ href: "#contact-form", label: "Go to Inquiry Form" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
        panelTitle="What you can expect"
        panelItems={[
          "Professional and confidential handling of your inquiry.",
          "Clear communication from the first conversation.",
          "Service-specific guidance based on your goals, scope, and priorities.",
        ]}
      />

      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Contact Methods"
            title="Start the conversation with confidence."
            body="Share the goals, current challenges, or project scope, and we will help define the most suitable next step."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {contactMethods.map((item) => (
              <Card key={item.title} tone="light" className="border-brand-slate/14">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-copper">
                  {item.title}
                </p>
                <h2 className="mt-4 font-display text-xl font-semibold tracking-[-0.04em] text-brand-ink">
                  {item.value}
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-ink/72 md:text-base">
                  {item.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="contact-form">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Request a Consultation"
                title="Tell us a bit about the project, service need, or challenge."
                body="Provide as much relevant detail as you can. That helps us route the inquiry well and respond with a more useful next step."
              />
              <div className="mt-8 grid gap-5">
                {expectations.map((item) => (
                  <Card key={item.title} className="border-white/12">
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-brand-ivory">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-brand-stone/76 md:text-base">
                      {item.body}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="border-brand-gold/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
                Inquiry Form
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-brand-ivory">
                Request a consultation or send a project inquiry.
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-stone/72 md:text-base">
                The form is designed to keep the first contact focused, clear, and easy to route across the right service area.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
