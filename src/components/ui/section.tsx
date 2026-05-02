import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionTone = "transparent" | "deep" | "light";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  tone?: SectionTone;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

const toneClasses: Record<SectionTone, string> = {
  transparent: "bg-transparent",
  deep: "bg-brand-ink/65",
  light: "bg-brand-ivory text-brand-ink",
};

export function Section<T extends ElementType = "section">({
  as,
  tone = "transparent",
  className,
  children,
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component className={cn("py-20 md:py-28", toneClasses[tone], className)} {...props}>
      {children}
    </Component>
  );
}
