import { cn } from "@/lib/utils";

export interface ImageTileProps {
  value: string;
  label: string;
  imageSrc: string;
  className?: string;
}

export const ImageTile = ({ value, label, imageSrc, className }: ImageTileProps) => {
  return (
    <div
      className={cn(
        // Base structure - matches DataTile exactly
        "relative flex flex-col items-center justify-center",
        // Consistent sizing across all tiles
        "aspect-square",
        // Padding - matches DataTile
        "p-8 md:p-10 lg:p-12",
        // Warm accent background
        "bg-gradient-to-br from-primary/[0.04] via-background to-accent/[0.06]",
        // Border radius - matches DataTile
        "rounded-2xl",
        // Border and shadow - system-wide consistency
        "border border-primary/10",
        "shadow-[0_1px_2px_rgba(0,0,0,0.02)]",
        "text-center",
        "overflow-hidden",
        // Transitions
        "transition-all duration-300 ease-out",
        // Hover state
        "hover:shadow-[0_2px_6px_rgba(0,0,0,0.03)]",
        "hover:border-primary/15",
        className
      )}
    >
      {/* Background image - more visible as visual accent */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.18]"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      
      {/* Soft warm overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Numeric value - burgundy, matching DataTile scale */}
        <span className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary font-normal tracking-tight leading-none">
          {value}
        </span>
        
        {/* Label - matching DataTile style */}
        <span className="mt-5 md:mt-6 block font-sans text-[10px] md:text-xs text-muted-foreground/70 uppercase tracking-[0.2em]">
          {label}
        </span>
      </div>
    </div>
  );
};

