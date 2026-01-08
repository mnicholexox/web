import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface StepCardProps {
  stepNumber: string;
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const StepCard = ({
  stepNumber,
  icon,
  title,
  description,
  className,
}: StepCardProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col bg-card/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:bg-card/70",
        className
      )}
    >
      {/* Step number in top corner */}
      <span className="absolute top-5 right-5 text-[11px] sm:text-xs font-medium text-primary/40 tracking-wide">
        {stepNumber}
      </span>

      {/* Icon at top */}
      <div className="mb-5">
        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/[0.06]">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-sans font-semibold text-[17px] sm:text-lg text-foreground mb-2.5 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-[0.9375rem] text-foreground/60 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
