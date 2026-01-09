import { Gift, Heart, Users } from "lucide-react";
import { ActionCard } from "./ActionCard";
import { ROUTES } from "@/constants";

export const HowYouCanHelp = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const actions = [
    {
      number: "01",
      icon: (
        <Gift 
          className="w-7 h-7 sm:w-8 sm:h-8 text-primary/80" 
          strokeWidth={1.5}
        />
      ),
      title: "Sponsor a Child",
      description:
        "Choose a wishlist and bring joy to a child who needs it most. Every gift you give is a message of care.",
      ctaText: "Choose a Child",
      to: ROUTES.SPONSOR_A_CHILD,
    },
    {
      number: "02",
      icon: (
        <Heart 
          className="w-7 h-7 sm:w-8 sm:h-8 text-primary/80" 
          strokeWidth={1.5}
        />
      ),
      title: "Give What You Can",
      description:
        "Your contribution helps fill gaps, cover essentials, and ensure no child is left without a gift.",
      ctaText: "Make a Donation",
      to: ROUTES.MAKE_A_DONATION,
    },
    {
      number: "03",
      icon: (
        <Users 
          className="w-7 h-7 sm:w-8 sm:h-8 text-primary/80" 
          strokeWidth={1.5}
        />
      ),
      title: "Volunteer Your Time",
      description:
        "Lend your time and talents to help prepare, wrap, and deliver gifts. Every helping hand matters.",
      ctaText: "Volunteer With Joy Drop",
      onCtaClick: scrollToContact,
    },
  ];

  return (
    <section 
      id="how-you-can-help"
      data-section="how-you-can-help"
      className="relative w-full pt-12 sm:pt-16 md:pt-20 pb-20 sm:pb-24 md:pb-32 bg-background overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* Eyebrow label */}
          <span className="inline-block text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-primary/60 mb-4">
            Make a Difference
          </span>

          {/* Main headline */}
          <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] lg:text-5xl text-foreground leading-tight tracking-tight mb-4 sm:mb-6">
            How You Can Help
          </h2>

          {/* Subheadline */}
          <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every act of kindness creates a ripple — and it starts with one simple step. 
            Choose the way that feels right to you.
          </p>
        </div>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {actions.map((action, index) => (
            <ActionCard
              key={index}
              number={action.number}
              icon={action.icon}
              title={action.title}
              description={action.description}
              ctaText={action.ctaText}
              to={action.to}
              onCtaClick={action.onCtaClick}
            />
          ))}
        </div>

        {/* Warm closing note */}
        <p className="text-center text-muted-foreground text-sm sm:text-[0.9375rem] mt-12 sm:mt-16 max-w-xl mx-auto">
          Not sure where to start? <span className="text-foreground/80 font-medium">That's okay.</span>{" "}
          Reach out and we'll help you find the perfect way to get involved.
        </p>
      </div>
    </section>
  );
};

