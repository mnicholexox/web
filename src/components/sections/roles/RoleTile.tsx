import { cn } from "@/lib/utils";

export interface RoleTileProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export const RoleTile = ({ icon, title, description, index }: RoleTileProps) => {
  // For 2x2 grid: 0=top-left, 1=top-right, 2=bottom-left, 3=bottom-right
  const isTopRow = index < 2;
  const isLeftColumn = index % 2 === 0;
  const isLastItem = index === 3;

  return (
    <div
      className={cn(
        "flex flex-col items-start",
        "p-5 sm:p-6 md:p-7 lg:p-8",
        "space-y-3 sm:space-y-3.5",
        "bg-transparent",
        "transition-colors duration-200 ease-out",
        "hover:bg-card/15",
        // Mobile (1-col): bottom border on all except last
        !isLastItem && "border-b border-border/8 sm:border-b-0",
        // Tablet/Desktop (2-col): grid borders
        isTopRow && "sm:border-b border-border/8",
        isLeftColumn && "sm:border-r border-border/8"
      )}
    >
      {/* Icon - smaller on mobile to avoid dominating */}
      <div className="text-primary/50 mb-1 sm:mb-1.5">
        <div className="[&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
          {icon}
        </div>
      </div>

      {/* Title in muted burgundy */}
      <h3 className="font-sans font-medium text-sm sm:text-base text-primary/75">
        {title}
      </h3>

      {/* Supportive sentence */}
      <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

