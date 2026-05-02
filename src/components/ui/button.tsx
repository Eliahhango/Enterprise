import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gold text-brand-ink shadow-[0_18px_50px_rgba(200,155,60,0.18)] hover:bg-[#b88b2d] focus-visible:ring-brand-gold/40",
  secondary:
    "border border-white/14 bg-white/4 text-brand-ivory hover:border-brand-gold/40 hover:bg-white/8 focus-visible:ring-brand-gold/30",
  ghost:
    "border border-brand-stone/40 bg-brand-ivory text-brand-ink hover:border-brand-gold/50 hover:bg-white focus-visible:ring-brand-gold/25",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-7 text-sm md:text-[0.95rem]",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold tracking-[0.01em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-60",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses({ variant, size, className })}
      type={type}
      {...props}
    />
  );
}
