import { ArrowLeft, Gift, Package, Printer, Box, Megaphone, Hammer, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import { cn } from "@/lib/utils";
import { ContactSection } from "@/components/sections";
import marketplaceImage from "./marketplace.png";
import threeDPrintImage from "./3D print.png";

const Volunteer = () => {
  const whereYoullHelp = [
    {
      icon: <img src={marketplaceImage} alt="Marketplace" className="w-32 h-32 sm:w-40 sm:h-40 object-contain" />,
      title: "Marketplace Movers",
      description: "Find and pick up free items from online marketplaces to add to children's wishlists.",
    },
    {
      icon: <img src={threeDPrintImage} alt="3D printer" className="w-32 h-32 sm:w-40 sm:h-40 object-contain" />,
      title: "3D Printer Volunteers",
      description: "Use a 3D printer to create custom toys tailored to specific wishlist interests (like Legos or Minecraft-themed items).",
    },
    {
      icon: <Megaphone className="w-28 h-28 sm:w-36 sm:h-36 text-primary/70" strokeWidth={1.5} />,
      title: "Word Spreaders",
      description: "Help spread the word about Joy Drop by sharing posts and stories that raise awareness for our Angel Tree program.",
    },
    {
      icon: <img src="/wrapping presents.png" alt="Wrapping supplies" className="w-28 h-28 sm:w-36 sm:h-36 object-contain" />,
      title: "Wrap & Prep Night",
      description: "Help wrap gifts, label bags, organize wishlists, and prep deliveries.",
    },
    {
      icon: <img src="/inventory.png" alt="Sorting and inventory" className="w-28 h-28 sm:w-36 sm:h-36 object-contain" />,
      title: "Sorting & Inventory",
      description: "Check donated items, match to wishlists, and keep everything organized.",
    },
    {
      icon: <img src="/delivery.png" alt="Delivery support" className="w-28 h-28 sm:w-36 sm:h-36 object-contain" />,
      title: "Delivery Support",
      description: "Help drop off gifts with care (or assist behind the scenes if you prefer).",
    },
  ];

  const volunteerRoles = [
    {
      icon: <Gift className="w-5 h-5 text-primary/70" strokeWidth={1.5} />,
      title: "Sorters/Wrappers/Delivery Coordinators",
      description: "Help organize, wrap, & coordinate gift pickups and deliveries.",
    },
    {
      icon: <Printer className="w-5 h-5 text-primary/70" strokeWidth={1.5} />,
      title: "3D Printer Volunteers",
      description: "Use a 3D printer to create custom toys tailored to specific wishlist interests (like Legos or Minecraft-themed items).",
    },
    {
      icon: <Box className="w-5 h-5 text-primary/70" strokeWidth={1.5} />,
      title: "Marketplace Movers",
      description: "Find and pick up free items from online marketplaces to add to children's wishlists.",
    },
    {
      icon: <Megaphone className="w-5 h-5 text-primary/70" strokeWidth={1.5} />,
      title: "Word Spreaders",
      description: "Help spread the word about Joy Drop by sharing posts and stories that raise awareness for our Angel Tree program.",
    },
    {
      icon: <Hammer className="w-5 h-5 text-primary/70" strokeWidth={1.5} />,
      title: "Craft Crew",
      description: "Refurbish and repair donated toys (like dollhouses), making them feel brand new for the children who receive them.",
    },
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Contact Us",
      description: "Tell us what kind of help feels right, and we'll connect you with the perfect opportunity.",
    },
    {
      number: "02",
      title: "Get Matched",
      description: "We'll connect you with a volunteer day based on needs + your schedule.",
    },
    {
      number: "03",
      title: "Show Up With Heart",
      description: "Bring your helping hands— we'll guide you through everything.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 pt-20 sm:pt-24 pb-6">
        <Link to={ROUTES.HOME}>
          <Button
            variant="ghost"
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Page Header */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto">
          {/* Main headline */}
          <h1 className="font-serif text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] text-foreground leading-tight tracking-tight mb-6">
            Volunteer Your Time
          </h1>

          {/* Subheadline */}
          <p className="text-foreground/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-4">
            Lend your time and talents to help prepare, wrap, and deliver gifts.
          </p>

          {/* Descriptive text */}
          <p className="text-foreground/60 text-sm sm:text-base">
            Every helping hand matters.
          </p>
        </div>
      </div>

      {/* Decorative Ribbon - Full width, outside container */}
      <div className="relative w-full mt-6 md:mt-24">
        {/* Large decorative ribbon - flowing from left edge of section */}
        <div className="absolute left-0 top-0 w-full pointer-events-none hidden md:block" style={{ transform: 'translateY(calc(-9% - 70px))' }}>
          <img
            src="/ribbon_3.png"
            alt=""
            aria-hidden="true"
            style={{
              width: '60%',
              height: 'auto',
              minHeight: '240px',
              opacity: 0.9,
              objectFit: 'contain',
              objectPosition: 'left center',
            }}
          />
        </div>
        {/* Mobile version */}
        <div className="relative md:hidden px-6 mb-3 md:mb-2" style={{ marginTop: '-70px' }}>
          <img
            src="/ribbon_3.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none"
            style={{
              width: '200%',
              height: 'auto',
              minHeight: '160px',
              opacity: 0.7,
              objectFit: 'contain',
            }}
          />
        </div>
      </div>

      {/* Where You'll Help Most Section */}
      <section id="where-youll-help" data-section="where-youll-help" className="pb-20 sm:pb-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] lg:text-5xl text-foreground leading-tight tracking-tight mb-4">
              Where You'll Help Most
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you have one hour or a full afternoon, there's a place for you here.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {whereYoullHelp.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex flex-col items-center text-center",
                  "p-6 sm:p-8 md:p-10",
                  "bg-card/60 rounded-2xl",
                  "border border-border/20",
                  "transition-all duration-300",
                  "hover:shadow-lg hover:shadow-primary/5",
                  "hover:border-primary/20",
                  "hover:-translate-y-1"
                )}
              >
                {/* Icon container */}
                <div className="relative mb-5 sm:mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl scale-150" />
                  <div className={cn(
                    "relative flex items-center justify-center rounded-full bg-gradient-to-br from-primary/8 to-accent/8 border border-primary/10",
                    (item.title === "Marketplace Movers" || item.title === "3D Printer Volunteers" || item.title === "Word Spreaders" || item.title === "Wrap & Prep Night" || item.title === "Sorting & Inventory" || item.title === "Delivery Support")
                      ? "w-32 h-32 sm:w-40 sm:h-40" 
                      : "w-16 h-16 sm:w-20 sm:h-20"
                  )}>
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-[0.9375rem] text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles Section */}
      <section id="volunteer-roles" data-section="volunteer-roles" className="pb-20 sm:pb-28 bg-card/20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex-1 h-px bg-border/30" />
              <h2 className="font-sans text-sm sm:text-base uppercase tracking-[0.2em] text-primary/60 px-4">
                Volunteer Roles
              </h2>
              <div className="flex-1 h-px bg-border/30" />
            </div>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {volunteerRoles.map((role, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-4 items-start",
                  "p-6 sm:p-8",
                  "bg-card/60 rounded-2xl",
                  "border border-border/20",
                  "transition-all duration-300",
                  "hover:shadow-lg hover:shadow-primary/5",
                  "hover:border-primary/20"
                )}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/8 flex items-center justify-center">
                  {role.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-lg sm:text-xl text-foreground mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm sm:text-[0.9375rem] text-foreground/70 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Volunteering Works Section */}
      <section id="how-volunteering-works" data-section="how-volunteering-works" className="pb-20 sm:pb-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex-1 h-px bg-border/30" />
              <h2 className="font-sans text-lg sm:text-xl text-foreground px-4">
                How Volunteering Works
              </h2>
              <div className="flex-1 h-px bg-border/30" />
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="font-serif text-xl sm:text-2xl text-primary/70">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-[0.9375rem] text-foreground/70 leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 pb-20 sm:pb-28">
        <p className="text-center text-foreground/70 text-base sm:text-lg">
          One small act of kindness can become someone's whole season.{" "}
          <Heart className="w-4 h-4 inline-block text-primary/60" fill="currentColor" strokeWidth={0} />
        </p>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
};

export default Volunteer;
