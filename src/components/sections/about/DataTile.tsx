import { cn } from "@/lib/utils";

export interface DataTileProps {
  value: string;
  label: string;
  description: string;
  className?: string;
  showDivider?: boolean;
}

export const DataTile = ({ value, label, description, className, showDivider = true }: DataTileProps) => {
  return (
    <div
      className={cn(
        // Base structure - fixed height (1.5x shorter than gift tile)
        // Gift tile: 200px/260px/300px → Data tile: 133px/173px/200px
        "relative flex flex-col items-center justify-start",
        "h-[133px] md:h-[173px] lg:h-[200px]",
        // Padding - more top padding to position numbers consistently
        "px-4 pt-6 pb-4 md:px-6 md:pt-8 md:pb-6",
        // Clean background with subtle shadow
        "bg-background/80",
        "rounded-xl",
        // Subtle border and shadow
        "border border-border/40",
        "shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
        "text-center",
        // Transitions
        "transition-all duration-300 ease-out",
        className
      )}
    >
      {/* Numeric value - large serif */}
      <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#55111c] font-normal tracking-tight leading-none">
        {value}
      </span>
      
      {/* Primary label */}
      {label && (
        <span className="mt-3 md:mt-4 font-sans text-sm md:text-base text-[#55111c]">
          {label}
        </span>
      )}
      
      {/* Horizontal divider */}
      {label && showDivider && (
        <div className="w-full max-w-[80%] h-px bg-border/50 my-0.5" />
      )}
      
      {/* Secondary description */}
      <span className={cn(
        "font-sans text-xs md:text-sm text-muted-foreground leading-relaxed",
        !label && "mt-3 md:mt-4"
      )}>
        {description}
      </span>
    </div>
  );
};

