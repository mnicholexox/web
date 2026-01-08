import { Heart, ShoppingBag, Package } from "lucide-react";
import { StepCard } from "./StepCard";

const steps = [
  {
    stepNumber: "01",
    icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-primary/60" strokeWidth={1.25} />,
    title: "Choose a Wishlist",
    description: "After receiving an invite to the Joy Drop app, browse children's wishlists and select the one(s) you're ready to fulfill. Each wishlist represents a real child and real needs, thoughtfully reviewed by our team.",
  },
  {
    stepNumber: "02",
    icon: <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 text-primary/60" strokeWidth={1.25} />,
    title: "Shop Their Wishlist",
    description: "Purchase items from their personalized wishlist — every item is meaningful and chosen with care.",
  },
  {
    stepNumber: "03",
    icon: <Package className="w-6 h-6 sm:w-7 sm:h-7 text-primary/60" strokeWidth={1.25} />,
    title: "Drop Off or Ship",
    description: "Bring wrapped gifts to our collection point or ship directly to our team.",
  },
];

export const HowSponsoringWorks = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          {/* Section Eyebrow */}
          <span className="inline-block text-[11px] sm:text-xs uppercase tracking-[0.2em] text-primary/70 font-medium mb-4">
            Simple Steps
          </span>

          {/* Section title */}
          <h2 className="font-serif text-[26px] sm:text-[32px] md:text-[36px] text-foreground leading-tight tracking-tight mb-4">
            How Sponsorship Works
          </h2>

          {/* Subtitle */}
          <p className="text-foreground/65 text-base sm:text-lg leading-relaxed">
            A simple, thoughtful process — designed to make sure no child is overlooked.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 lg:gap-6">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              stepNumber={step.stepNumber}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
