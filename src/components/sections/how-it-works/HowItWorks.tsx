import { ClipboardList, ShoppingBag, Gift } from "lucide-react";
import { StepCard } from "./StepCard";

export const HowItWorks = () => {
  const steps = [
    {
      stepNumber: "01",
      icon: (
        <ClipboardList
          className="w-7 h-7 sm:w-8 sm:h-8 text-primary/80"
          strokeWidth={1.5}
        />
      ),
      title: "Choose a Wishlist",
      description:
        "After receiving an invite to the Joy Drop app, browse children's wishlists and select the one(s) you're ready to fulfill.",
    },
    {
      stepNumber: "02",
      icon: (
        <ShoppingBag
          className="w-7 h-7 sm:w-8 sm:h-8 text-primary/80"
          strokeWidth={1.5}
        />
      ),
      title: "Fulfill",
      description:
        "Easily find wishlist items in the app, shop online if you prefer, and mark each item as purchased.",
    },
    {
      stepNumber: "03",
      icon: (
        <Gift
          className="w-7 h-7 sm:w-8 sm:h-8 text-primary/80"
          strokeWidth={1.5}
        />
      ),
      title: "Drop",
      description:
        "Don't have time to wrap? Simply drop off your items, and our volunteers will wrap, prepare, and deliver each gift with care.",
    },
  ];

  return (
    <section
      id="how-it-works"
      data-section="how-it-works"
      className="relative w-full py-20 sm:py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-24 w-48 h-48 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* Eyebrow label */}
          <span className="inline-block text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-primary/60 mb-4">
            Simple Steps
          </span>

          {/* Main headline */}
          <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] lg:text-5xl text-foreground leading-tight tracking-tight mb-4 sm:mb-6">
            How It Works
          </h2>

          {/* Subheadline */}
          <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Bringing joy to a child is easy. Follow these three simple steps to make a difference.
          </p>
        </div>

        {/* Steps Grid with soft dividers */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <StepCard
                stepNumber={step.stepNumber}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
              
              {/* Soft vertical divider between steps (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-border/50 to-transparent" />
              )}
              
              {/* Soft horizontal divider between steps (mobile only) */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-5 w-32 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
