import { ArrowLeft, Heart, Gift, Sparkles, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import { cn } from "@/lib/utils";

const MakeADonation = () => {
  const donationExamples = [
    {
      icon: <Gift className="w-5 h-5 text-primary/70" strokeWidth={1.5} />,
      title: "Essentials",
      description: "Warm clothing, shoes, and winter gear that every child needs",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary/70" strokeWidth={1.5} />,
      title: "Seasonal Needs",
      description: "Holiday meals, celebration supplies, and festive touches",
    },
    {
      icon: <Heart className="w-5 h-5 text-primary/70" strokeWidth={1.5} />,
      title: "Uncovered Items",
      description: "Gifts for children added late or items beyond wishlists",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-6">
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
          {/* Eyebrow label */}
          <span className="inline-block text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-primary/60 mb-4">
            Give What You Can
          </span>

          {/* Main headline */}
          <h1 className="font-serif text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] text-foreground leading-tight tracking-tight mb-6">
            Make a Donation
          </h1>

          {/* Subheadline */}
          <p className="text-foreground/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Your generosity fills the gaps beyond wishlists — ensuring every child 
            feels seen, valued, and remembered during the holiday season.
          </p>
        </div>
      </div>

      {/* Cash Donations Section */}
      <section id="cash-donations" data-section="cash-donations" className="pb-20 sm:pb-28">
        {/* Section Header */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 mb-12 sm:mb-16">
          <div className="text-center">
            {/* Eyebrow label */}
            <span className="inline-block text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-primary/60 mb-4">
              Make a Difference
            </span>

            {/* Main headline */}
            <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] lg:text-5xl text-foreground leading-tight tracking-tight">
              Cash Donations
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column - Donation Options */}
            <div className="space-y-6">
              {/* Donation Card */}
              <div className="bg-card/60 rounded-2xl border border-border/20 p-6 sm:p-8">
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-2">
                  Every Amount Makes a Difference
                </h3>
              <p className="text-foreground/70 text-sm sm:text-[0.9375rem] leading-relaxed mb-6">
                There's no minimum, no pressure — just the chance to help where it's needed most. 
                Choose what feels right for you.
              </p>

              {/* Suggested Amounts */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {["$25", "$50", "$100"].map((amount) => (
                  <button
                    key={amount}
                    className={cn(
                      "py-3 px-4 rounded-xl",
                      "border border-border/30 bg-background/50",
                      "font-medium text-foreground",
                      "transition-all duration-200",
                      "hover:border-primary/40 hover:bg-primary/5",
                      "focus:outline-none focus:ring-2 focus:ring-primary/30"
                    )}
                  >
                    {amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="mb-8">
                <label className="block text-sm text-muted-foreground mb-2">
                  Or enter a custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/60">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="Any amount helps"
                    className={cn(
                      "w-full py-3 pl-8 pr-4 rounded-xl",
                      "border border-border/30 bg-background/50",
                      "text-foreground placeholder:text-muted-foreground/60",
                      "transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40"
                    )}
                  />
                </div>
              </div>

              {/* Primary CTA */}
              <Button
                className={cn(
                  "w-full",
                  "bg-primary text-primary-foreground",
                  "rounded-full",
                  "py-6",
                  "font-medium text-base",
                  "transition-all duration-200",
                  "hover:scale-[1.02] hover:bg-primary/90",
                  "shadow-sm hover:shadow-md hover:shadow-primary/20"
                )}
              >
                <Heart className="w-4 h-4 mr-2" strokeWidth={2} />
                Donate with Heart
              </Button>

              <p className="text-center text-muted-foreground text-xs mt-4">
                Secure payment processing • Tax-deductible contribution
              </p>
            </div>
          </div>

          {/* Right Column - Impact & Reassurance */}
          <div className="space-y-6">
            {/* What Donations Support */}
            <div className="bg-card/40 rounded-2xl border border-border/10 p-6 sm:p-8">
              <h3 className="font-serif text-lg sm:text-xl text-foreground mb-4">
                Where Your Gift Goes
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                Donations help us respond to real needs as they arise — 
                from last-minute enrollments to unexpected requests.
              </p>

              <div className="space-y-4">
                {donationExamples.map((example, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center">
                      {example.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-0.5">
                        {example.title}
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {example.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stewardship Reassurance */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 p-6 sm:p-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    Our Promise to You
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Every dollar is handled with care. We're committed to transparency — 
                    your contribution goes directly toward supporting children and families 
                    in our community. No overhead, no surprises.
                  </p>
                </div>
              </div>
            </div>

            {/* Gentle Note */}
            <p className="text-center text-muted-foreground text-sm px-4">
              Not ready to give today? <span className="text-foreground/80">That's okay.</span>{" "}
              You can also{" "}
              <Link 
                to={ROUTES.SPONSOR_A_CHILD} 
                className="text-primary hover:text-primary/80 underline underline-offset-2"
              >
                sponsor a child's wishlist
              </Link>{" "}
              or share Joy Drop with someone who might want to help.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Closing Statement */}
      <div className="border-t border-border/20">
        <p className="text-center text-muted-foreground text-[0.8125rem] font-light tracking-wide py-12 sm:py-16">
          Thank you for being part of something meaningful.
        </p>
      </div>
    </main>
  );
};

export default MakeADonation;
