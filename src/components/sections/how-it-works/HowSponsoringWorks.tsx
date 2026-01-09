import { ClipboardList, ShoppingBag, Gift } from "lucide-react";
import { StepCard } from "./StepCard";

const step01 = {
  stepNumber: "01",
  icon: <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7 text-primary/60" strokeWidth={1.25} />,
  title: "Choose a Wishlist",
  description: "After receiving an invite to the Joy Drop app, browse children's wishlists and select the one(s) you're ready to fulfill.",
};

const step02 = {
  stepNumber: "02",
  icon: <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 text-primary/60" strokeWidth={1.25} />,
  title: "Fulfill",
  description: "Easily find wishlist items in the app, shop online if you prefer, and mark each item as purchased.",
};

const step03 = {
  stepNumber: "03",
  icon: <Gift className="w-6 h-6 sm:w-7 sm:h-7 text-primary/60" strokeWidth={1.25} />,
  title: "Drop",
  description: "Don't have time to wrap? Simply drop off your items, and our volunteers will wrap, prepare, and deliver each gift with care.",
};

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
          <StepCard
            stepNumber={step01.stepNumber}
            icon={step01.icon}
            title={step01.title}
            description={step01.description}
          />

          <StepCard
            stepNumber={step02.stepNumber}
            icon={step02.icon}
            title={step02.title}
            description={step02.description}
          />

          <StepCard
            stepNumber={step03.stepNumber}
            icon={step03.icon}
            title={step03.title}
            description={step03.description}
          />
        </div>
      </div>
    </section>
  );
};
