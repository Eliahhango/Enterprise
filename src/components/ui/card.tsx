import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: "dark" | "light";
};

export function Card({
  children,
  className,
  tone = "dark",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[20px] border p-6 shadow-[0_18px_60px_rgba(7,14,26,0.18)] backdrop-blur-0 md:p-8",
        tone === "dark"
          ? "border-white/10 bg-white/[0.04] text-brand-ivory"
          : "border-brand-slate/12 bg-white text-brand-ink shadow-[0_18px_60px_rgba(7,14,26,0.08)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
