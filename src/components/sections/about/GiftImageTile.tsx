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
          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[50%] h-[6px] rounded-[50%] bg-foreground/[0.05] blur-[4px]"
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
          {/* Headline - largest, bold serif */}
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#55111c] leading-tight tracking-tight">
            Every Donation
          </p>
          
          {/* Sub-headline - prominent but smaller */}
          <p className="font-serif text-lg md:text-xl lg:text-2xl font-semibold text-[#55111c] mt-1 md:mt-2 leading-tight">
            Hand Delivered
          </p>
          
          {/* Supporting text - smallest, muted */}
          <p className="font-sans text-xs md:text-sm text-[#55111c]/70 mt-2 md:mt-3 leading-relaxed">
            From a shared<br />
            commitment to be<br />
            of service, every year
          </p>
        </div>
      </div>
    </div>
  );
};
