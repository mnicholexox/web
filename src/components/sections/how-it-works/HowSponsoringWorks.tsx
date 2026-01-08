import { ClipboardList, Gift, Heart, Truck } from "lucide-react";
import { StepCard } from "./StepCard";

const steps = [
  {
    stepNumber: "1",
    icon: <ClipboardList className="w-7 h-7 sm:w-8 sm:h-8 text-primary/70" strokeWidth={1.5} />,
    title: "Browse Wishlists",
    description: "Each wishlist represents a child in need. Take your time to find one that speaks to you.",
  },
  {
    stepNumber: "2",
    icon: <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-primary/70" strokeWidth={1.5} />,
    title: "Choose to Sponsor",
    description: "Select the wishlist you'd like to fulfill. There's no pressure — choose when you're ready.",
  },
  {
    stepNumber: "3",
    icon: <Gift className="w-7 h-7 sm:w-8 sm:h-8 text-primary/70" strokeWidth={1.5} />,
    title: "Shop the Items",
    description: "Purchase the items on the wishlist at your own pace. Every gift, big or small, matters.",
  },
  {
    stepNumber: "4",
    icon: <Truck className="w-7 h-7 sm:w-8 sm:h-8 text-primary/70" strokeWidth={1.5} />,
    title: "We Handle the Rest",
    description: "Drop off or ship your gifts to us. We'll make sure they reach the right hands, wrapped with care.",
  },
];

export const HowSponsoringWorks = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-card/30">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          {/* Section title - medium serif, smaller than page title */}
          <h2 className="font-serif text-[26px] sm:text-[32px] md:text-[36px] text-foreground leading-tight tracking-tight mb-4">
            How Sponsoring a Wishlist Works
          </h2>

          {/* Subtitle */}
          <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
            A simple, thoughtful process — designed to make sure no child is overlooked.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-4">
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

        {/* Reassuring note */}
        <p className="text-center text-muted-foreground text-sm sm:text-[0.9375rem] mt-12 sm:mt-16 max-w-xl mx-auto">
          Have questions about how this works?{" "}
          <span className="text-foreground/80">We're here to help at every step.</span>
        </p>
      </div>
    </section>
  );
};
