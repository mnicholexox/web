import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface IllustratedStepCardProps {
  stepNumber: string;
  stepLabel: string;
  illustration: ReactNode;
  title: string;
  description: string;
  className?: string;
}

/**
 * Step card with illustrated visual at top
 * Used for the story-driven "How Sponsorship Works" section
 */
export const IllustratedStepCard = ({
  stepNumber,
  stepLabel,
  illustration,
  title,
  description,
  className,
}: IllustratedStepCardProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center text-center bg-card/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-card/70",
        className
      )}
    >
      {/* Illustration at top, centered */}
      <div className="mb-5 flex items-center justify-center min-h-[100px]">
        {illustration}
      </div>

      {/* Step label: "02 — Fulfill" */}
      <span className="font-serif text-[11px] sm:text-xs tracking-[0.15em] text-primary/50 mb-3">
        {stepNumber} — {stepLabel}
      </span>

      {/* Title - serif font */}
      <h3 className="font-serif text-[19px] sm:text-[21px] text-foreground mb-3 leading-snug tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-[0.9375rem] text-foreground/60 leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>
  );
};
