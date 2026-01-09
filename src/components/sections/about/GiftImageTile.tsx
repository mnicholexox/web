import { cn } from "@/lib/utils";
import giftImage from "./gift final.png";

export interface GiftImageTileProps {
  className?: string;
}

export const GiftImageTile = ({ className }: GiftImageTileProps) => {
  return (
    <div
      className={cn(
        // Base structure - fixed height for the gift tile
        "relative flex items-center justify-center",
        // Height: serves as the reference for data tiles (data tiles are 1.5x shorter)
        "h-[200px] md:h-[260px] lg:h-[300px]",
        className
      )}
    >
      {/* Gift image container - fills available space */}
      <div className="relative flex items-center justify-center h-full w-full">
        {/* Subtle grounding shadow - soft ellipse beneath the gift for natural depth */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[8px] rounded-[50%] bg-foreground/[0.06] blur-[6px]"
          aria-hidden="true"
        />
        
        {/* Centered gift image - stretches to fill available height */}
        <img
          src={giftImage}
          alt="Gift box illustration"
          className="relative z-10 w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
        />

        {/* Text overlay - centered on top of the gift image, shifted down */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pt-10 md:pt-14">
          {/* Headline */}
          <p className="font-serif text-base md:text-lg lg:text-xl font-semibold text-[#55111c] leading-tight">
            Every Donation
          </p>
          
          {/* Sub-headline */}
          <p className="font-serif text-base md:text-lg lg:text-xl font-semibold text-[#55111c] leading-tight">
            Hand Delivered
          </p>
          
          {/* Supporting text - smallest, muted */}
          <p className="font-sans text-xs md:text-sm text-[#55111c]/70 mt-2 md:mt-3 leading-relaxed">
            From a Shared<br />
            Commitment to be<br />
            of Service, Every Year
          </p>
        </div>
      </div>
    </div>
  );
};
