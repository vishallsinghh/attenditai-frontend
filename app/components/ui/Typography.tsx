import { ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

export function Title({ children, className = "" }: Props) {
  return (
    <h1 className={`text-[44px] sm:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.02] text-[#0F172A] ${className}`}>
      {children}
    </h1>
  );
}

export function Heading({ children, className = "" }: Props) {
  return (
    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] leading-[1.1] text-[#0F172A] ${className}`}>
      {children}
    </h2>
  );
}

export function Subheading({ children, className = "" }: Props) {
  return (
    <h3 className={`text-xl sm:text-2xl font-semibold tracking-[-0.01em] leading-snug text-[#1E293B] ${className}`}>
      {children}
    </h3>
  );
}

export function Paragraph({ children, className = "" }: Props) {
  return (
    <p className={`text-base sm:text-lg leading-relaxed text-[#64748B] ${className}`}>
      {children}
    </p>
  );
}

export function Eyebrow({ children, className = "" }: Props) {
  return (
    <span className={`text-xs font-medium tracking-[0.14em] uppercase text-[#64748B] ${className}`}>
      {children}
    </span>
  );
}