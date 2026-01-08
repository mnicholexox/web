import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ActionCardProps {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  ctaText: string;
  to?: string;
  onCtaClick?: () => void;
  className?: string;
}

export const ActionCard = ({
  number,
  icon,
  title,
  description,
  ctaText,
  to,
  onCtaClick,
  className,
}: ActionCardProps) => {
  const cardClasses = cn(
    "relative flex flex-col items-center text-center",
    "p-6 sm:p-8 md:p-10",
    "bg-card/60 rounded-2xl",
    "border border-border/20",
    "transition-all duration-300",
    "hover:shadow-lg hover:shadow-primary/5",
    "hover:border-primary/20",
    "hover:-translate-y-1",
    to && "cursor-pointer",
    className
  );

  const cardContent = (
    <>
      {/* Numbered indicator */}
      <span className="absolute top-4 left-4 sm:top-5 sm:left-5 font-serif text-[0.8125rem] text-primary/40 tracking-wide">
        {number}
      </span>

      {/* Icon container with warm glow effect */}
      <div className="relative mb-5 sm:mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl scale-150" />
        <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/8 to-accent/8 border border-primary/10">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-[0.9375rem] text-foreground/70 leading-relaxed mb-6 sm:mb-8 max-w-[280px]">
        {description}
      </p>

      {/* CTA Button */}
      {to ? (
        <span
          className={cn(
            "mt-auto inline-flex items-center justify-center",
            "bg-primary text-primary-foreground",
            "rounded-full",
            "px-6 sm:px-8 py-3",
            "min-h-[44px]",
            "font-medium text-sm sm:text-[0.9375rem]",
            "transition-all duration-200",
            "group-hover:scale-[1.03] group-hover:bg-primary/90",
            "shadow-sm group-hover:shadow-md group-hover:shadow-primary/20"
          )}
        >
          {ctaText}
        </span>
      ) : (
        <Button
          onClick={onCtaClick}
          className={cn(
            "mt-auto",
            "bg-primary text-primary-foreground",
            "rounded-full",
            "px-6 sm:px-8 py-3",
            "min-h-[44px]",
            "font-medium text-sm sm:text-[0.9375rem]",
            "transition-all duration-200",
            "hover:scale-[1.03] hover:bg-primary/90",
            "shadow-sm hover:shadow-md hover:shadow-primary/20"
          )}
        >
          {ctaText}
        </Button>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cn(cardClasses, "group")}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      {cardContent}
    </div>
  );
};

