import { cn } from "@/lib/utils";

export interface GiftBoxTileProps {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
}

export const GiftBoxTile = ({ title, subtitle, description, className }: GiftBoxTileProps) => {
  return (
    <div
      className={cn(
        // Base structure
        "relative flex flex-col items-center justify-end overflow-hidden",
        // Match height with other tiles
        "min-h-[200px] md:min-h-[240px]",
        "text-center",
        // Transitions
        "transition-all duration-300 ease-out",
        className
      )}
    >
      {/* Gift box image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/gift2-icon.png"
          alt="Gift box with ribbon"
          className="w-full h-full object-cover"
        />
        
        {/* Text overlay on the gift box */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-2">
          {/* Title */}
          <span className="font-serif text-base md:text-lg lg:text-xl text-primary font-medium leading-tight">
            {title}
          </span>
          
          {/* Subtitle */}
          <span className="mt-1 font-sans text-xs md:text-sm text-muted-foreground/80">
            {subtitle}
          </span>
          
          {/* Description */}
          <span className="mt-2 font-sans text-[10px] md:text-xs text-muted-foreground/60 leading-relaxed max-w-[90%]">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};
