import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import { cn } from "@/lib/utils";

export const ReadyToVolunteer = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    // Navigate to home page with contact section hash
    navigate(`${ROUTES.HOME}#contact`);
    // Scroll to contact section after a brief delay to allow navigation
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section
      className={cn(
        "relative w-full py-16 sm:py-20 md:py-24 overflow-hidden",
        "flex items-center justify-center"
      )}
      style={{
        background: "linear-gradient(180deg, hsl(344 25% 96%) 0%, hsl(344 20% 97%) 100%)",
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 30%, hsl(344 50% 35%) 0%, transparent 50%),
                            radial-gradient(ellipse at 80% 70%, hsl(344 50% 35%) 0%, transparent 50%)`,
        }}
      />

      {/* Decorative ribbons - top corners */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left ribbon */}
        <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-48 md:w-64 opacity-60">
          <img
            src="/ribbon_3.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain"
            style={{
              transform: "rotate(-15deg) scaleX(-1)",
            }}
          />
        </div>
        {/* Top right ribbon */}
        <div className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-48 md:w-64 opacity-60">
          <img
            src="/ribbon_3.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto object-contain"
            style={{
              transform: "rotate(15deg)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-8 text-center">
        {/* Heading */}
        <h2
          className="font-serif text-[32px] sm:text-[40px] md:text-[48px] leading-tight tracking-tight mb-4"
          style={{ color: "hsl(344 45% 25%)" }}
        >
          Ready to Volunteer?
        </h2>

        {/* Heart icon below heading */}
        <div className="flex justify-center mb-6">
          <Heart
            className="w-5 h-5 sm:w-6 sm:h-6"
            style={{ color: "hsl(344 30% 70%)" }}
            fill="currentColor"
            strokeWidth={0}
          />
        </div>

        {/* Explanatory text */}
        <p
          className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto"
          style={{ color: "hsl(344 45% 25%)" }}
        >
          Tell us how you'd like to help and we'll get back to you with next steps.
        </p>

        {/* Contact Us button */}
        <div className="flex justify-center mb-6">
          <Button
            onClick={scrollToContact}
            className={cn(
              "px-8 py-6 sm:px-10 sm:py-7",
              "rounded-xl",
              "font-serif text-base sm:text-lg font-normal tracking-wide",
              "shadow-[0_4px_20px_-4px_rgba(85,17,28,0.3)]",
              "transition-all duration-300",
              "hover:shadow-[0_8px_32px_-6px_rgba(85,17,28,0.4)]",
              "hover:scale-[1.02]",
              "active:scale-[0.98]"
            )}
            style={{
              background: "linear-gradient(180deg, hsl(348 55% 35%) 0%, hsl(348 60% 28%) 50%, hsl(348 55% 32%) 100%)",
              color: "hsl(36 50% 96%)",
            }}
          >
            Contact Us
          </Button>
        </div>

        {/* Heart icon below button */}
        <div className="flex justify-center">
          <Heart
            className="w-5 h-5 sm:w-6 sm:h-6"
            style={{ color: "hsl(344 30% 70%)" }}
            fill="currentColor"
            strokeWidth={0}
          />
        </div>
      </div>
    </section>
  );
};
