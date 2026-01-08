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
        "flex flex-col items-center text-center px-4 sm:px-6 md:px-8",
        className
      )}
    >
      {/* Soft circular icon container */}
      <div className="relative mb-5 sm:mb-6">
        {/* Subtle glow behind icon */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-accent/8 rounded-full blur-xl scale-150" />
        <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
          {icon}
        </div>
      </div>

      {/* Step number */}
      <span className="font-serif text-sm sm:text-base text-primary/50 tracking-wide mb-2">
        Step {stepNumber}
      </span>

      {/* Title */}
      <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-[0.9375rem] text-foreground/70 leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>
  );
};
