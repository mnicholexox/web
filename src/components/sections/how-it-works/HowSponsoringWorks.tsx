import { ClipboardList } from "lucide-react";
import { StepCard } from "./StepCard";
import { IllustratedStepCard } from "./IllustratedStepCard";
import { Step02FulfillIllustration } from "./Step02FulfillIllustration";
import { Step03DropIllustration } from "./Step03DropIllustration";

const step01 = {
  stepNumber: "01",
  icon: <ClipboardList className="w-6 h-6 sm:w-7 sm:h-7 text-primary/60" strokeWidth={1.25} />,
  title: "Choose a Wishlist",
  description: "After receiving an invite to the Joy Drop app, browse children's wishlists and select the one(s) you're ready to fulfill.",
};

const step02 = {
  stepNumber: "02",
  stepLabel: "Fulfill",
  illustration: <Step02FulfillIllustration />,
  title: "Fulfill",
  description: "Easily find wishlist items in the app, shop online if you prefer, and mark each item as purchased.",
};

const step03 = {
  stepNumber: "03",
  stepLabel: "Drop",
  illustration: <Step03DropIllustration />,
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
          {/* Step 01 - Standard card */}
          <StepCard
            stepNumber={step01.stepNumber}
            icon={step01.icon}
            title={step01.title}
            description={step01.description}
          />

          {/* Step 02 - Illustrated card with refined design */}
          <IllustratedStepCard
            stepNumber={step02.stepNumber}
            stepLabel={step02.stepLabel}
            illustration={step02.illustration}
            title={step02.title}
            description={step02.description}
          />

          {/* Step 03 - Illustrated card with hands holding gift */}
          <IllustratedStepCard
            stepNumber={step03.stepNumber}
            stepLabel={step03.stepLabel}
            illustration={step03.illustration}
            title={step03.title}
            description={step03.description}
          />
        </div>
      </div>
    </section>
  );
};
