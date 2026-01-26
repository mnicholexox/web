import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const handleContactClick = () => {
    // Scroll to contact form or open contact modal
    // For now, we'll just log - this can be connected to a contact form later
    console.log("Contact Us clicked");
  };

  return (
    <section
      id="contact"
      data-section="contact"
      className="relative w-full pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-32 overflow-hidden"
      style={{
        background: "hsl(348 30% 96%)", // Light pink/blush background
      }}
    >
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(348 40% 30%) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Decorative ribbons - top left */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none opacity-30">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 Q30,40 60,50 T120,45 T180,60 Q200,70 200,90 Q200,110 180,120 Q160,130 140,125 Q120,120 100,130 Q80,140 60,135 Q40,130 20,140 Q0,150 0,130 Z"
            fill="hsl(348 45% 55%)"
            opacity="0.6"
          />
          <path
            d="M0,100 Q20,70 50,80 T110,75 T170,90 Q190,100 190,120 Q190,140 170,150 Q150,160 130,155 Q110,150 90,160 Q70,170 50,165 Q30,160 10,170 Q-10,180 -10,160 Z"
            fill="hsl(348 50% 60%)"
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Decorative ribbons - top right */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none opacity-25">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200,70 Q170,30 140,40 T80,35 T20,50 Q0,60 0,80 Q0,100 20,110 Q40,120 60,115 Q80,110 100,120 Q120,130 140,125 Q160,120 180,130 Q200,140 200,120 Z"
            fill="hsl(348 45% 55%)"
            opacity="0.5"
          />
          <path
            d="M200,90 Q180,60 150,70 T90,65 T30,80 Q10,90 10,110 Q10,130 30,140 Q50,150 70,145 Q90,140 110,150 Q130,160 150,155 Q170,150 190,160 Q210,170 210,150 Z"
            fill="hsl(348 50% 60%)"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-8 text-center">
        {/* Heading */}
        <h2 
          className="font-serif text-[32px] sm:text-[40px] md:text-[48px] leading-tight tracking-tight mb-4"
          style={{ color: "hsl(348 55% 22%)" }} // Dark reddish-brown
        >
          Ready to Volunteer?
        </h2>

        {/* Heart icon below heading */}
        <div className="flex justify-center mb-6">
          <Heart 
            className="w-5 h-5 sm:w-6 sm:h-6" 
            style={{ color: "hsl(348 50% 70%)" }} // Light pink
            fill="currentColor"
            strokeWidth={0}
          />
        </div>

        {/* Explanatory text */}
        <p 
          className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12"
          style={{ color: "hsl(348 55% 22%)" }} // Dark reddish-brown
        >
          Tell us how you'd like to help and we'll get back to you with next steps.
        </p>

        {/* Contact Us button */}
        <div className="flex justify-center mb-6">
          <Button
            onClick={handleContactClick}
            size="lg"
            className={cn(
              "px-8 sm:px-12 py-6 sm:py-7",
              "rounded-2xl",
              "font-serif text-lg sm:text-xl font-normal tracking-wide",
              "shadow-[0_4px_20px_-4px_rgba(85,17,28,0.3)]",
              "transition-all duration-300",
              "hover:shadow-[0_8px_30px_-6px_rgba(85,17,28,0.4)]",
              "hover:scale-[1.02]",
              "active:scale-[0.98]",
              "relative overflow-hidden"
            )}
            style={{
              background: "linear-gradient(135deg, hsl(348 60% 25%) 0%, hsl(348 55% 35%) 50%, hsl(348 50% 40%) 100%)",
              color: "hsl(36 50% 95%)", // Light off-white/cream
              border: "none",
            }}
          >
            {/* Subtle texture overlay on button */}
            <div 
              className="absolute inset-0 opacity-[0.1] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, hsl(348 30% 20%) 1px, transparent 0)`,
                backgroundSize: "8px 8px",
              }}
            />
            <span className="relative z-10">Contact Us</span>
          </Button>
        </div>

        {/* Heart icon below button */}
        <div className="flex justify-center">
          <Heart 
            className="w-5 h-5 sm:w-6 sm:h-6" 
            style={{ color: "hsl(348 50% 70%)" }} // Light pink
            fill="currentColor"
            strokeWidth={0}
          />
        </div>
      </div>
    </section>
  );
};
