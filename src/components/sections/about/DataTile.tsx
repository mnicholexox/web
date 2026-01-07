import { cn } from "@/lib/utils";

export interface DataTileProps {
  value: string;
  label: string;
  className?: string;
}

export const DataTile = ({ value, label, className }: DataTileProps) => {
  return (
    <div
      className={cn(
        // Base structure - matches ImageTile exactly
        "relative flex flex-col items-center justify-center",
        // Consistent sizing across all tiles
        "aspect-square",
        // Padding - matches ImageTile
        "p-8 md:p-10 lg:p-12",
        // Border radius - matches ImageTile
        "rounded-2xl",
        "text-center",
        "overflow-hidden",
        // Transitions
        "transition-all duration-300 ease-out",
        className
      )}
    >
      {/* Gradient background layer - proportionate fade from top color to background */}
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(to bottom, #d0b8a7 0%, #d0b8a7 10%, hsl(var(--background)) 100%)"
        }}
      />
      
      {/* Radial highlight behind content - anchors numeric values */}
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 45%, #d0b8a7 0%, rgba(208, 184, 167, 0.4) 60%, transparent 100%)"
        }}
      />
      
      {/* Top edge definition - clear horizontal line for grounded feel */}
      <div 
        className="absolute inset-x-2 top-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(var(--border) / 0.6) 15%, hsl(var(--border) / 0.7) 50%, hsl(var(--border) / 0.6) 85%, transparent 100%)"
        }}
      />
      
      {/* Side borders - maintain structure at top, soften toward bottom */}
      <div 
        className="absolute top-0 left-0 w-px h-full rounded-l-2xl"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--border) / 0.55) 0%, hsl(var(--border) / 0.45) 60%, hsl(var(--border) / 0.2) 85%, transparent 100%)"
        }}
      />
      <div 
        className="absolute top-0 right-0 w-px h-full rounded-r-2xl"
        style={{
          background: "linear-gradient(to bottom, hsl(var(--border) / 0.55) 0%, hsl(var(--border) / 0.45) 60%, hsl(var(--border) / 0.2) 85%, transparent 100%)"
        }}
      />

      {/* Numeric value - dominant visual focus */}
      <span className="relative font-serif text-5xl md:text-6xl lg:text-7xl text-primary font-normal tracking-tight leading-none">
        {value}
      </span>
      
      {/* Supporting label - subdued and secondary */}
      <span className="relative mt-5 md:mt-6 font-sans text-[10px] md:text-xs text-muted-foreground/70 uppercase tracking-[0.2em]">
        {label}
      </span>
    </div>
  );
};

