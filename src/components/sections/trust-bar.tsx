import { Container } from "@/components/ui/container";

type TrustBarProps = {
  items: string[];
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <div className="border-y border-white/10 bg-brand-ink/45">
      <Container>
        <div className="grid gap-3 py-5 md:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-[14px] border border-white/8 bg-white/[0.03] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-stone/72"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
