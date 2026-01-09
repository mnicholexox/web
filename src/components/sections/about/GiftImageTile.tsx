import { cn } from "@/lib/utils";
import giftImage from "./gift final.png";

export interface GiftImageTileProps {
  className?: string;
}

export const GiftImageTile = ({ className }: GiftImageTileProps) => {
  return (
    <div
      className={cn(
        // Base structure - matches DataTile exactly
        "relative flex items-center justify-center",
        // Padding - matches DataTile
        "px-6 py-8 md:px-8 md:py-10",
        // Clean background - matches DataTile
        "bg-background/80",
        "rounded-xl",
        // Subtle border and shadow - matches DataTile
        "border border-border/40",
        "shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
        // Transitions
        "transition-all duration-300 ease-out",
        className
      )}
    >
      {/* Gift image container with grounding shadow */}
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Subtle grounding shadow - soft ellipse beneath the gift */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[8px] rounded-[50%] bg-foreground/[0.06] blur-[3px]"
          aria-hidden="true"
        />
        
        {/* Centered gift image - focal visual element */}
        <img
          src={giftImage}
          alt="Gift box illustration"
          className="relative z-10 w-auto h-auto object-contain max-h-[200px] md:max-h-[250px] max-w-full"
        />
      </div>
    </div>
  );
};
