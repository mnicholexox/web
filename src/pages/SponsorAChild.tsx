import { useState } from "react";
import { ArrowLeft, ArrowRight, Gift, Heart, Sparkles, ShoppingBag, Star, CheckCircle2, Clock, Package, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import { cn } from "@/lib/utils";
import { NewsletterSignupModal } from "@/components/sections/newsletter";

const SponsorAChild = () => {
  // TODO: This would come from your data source (API, context, etc.)
  const wishlistsAvailable = false;
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const howItWorksSteps = [
    {
      number: "01",
      icon: <Heart className="w-6 h-6 text-primary/70" strokeWidth={1.5} />,
      title: "Choose a Child",
      description: "Browse available wishlists and select a child whose story resonates with you.",
    },
    {
      number: "02",
      icon: <ShoppingBag className="w-6 h-6 text-primary/70" strokeWidth={1.5} />,
      title: "Shop Their Wishlist",
      description: "Purchase items from their personalized wishlist — every item is meaningful.",
    },
    {
      number: "03",
      icon: <Package className="w-6 h-6 text-primary/70" strokeWidth={1.5} />,
      title: "Drop Off or Ship",
      description: "Bring wrapped gifts to our collection point or ship directly to our team.",
    },
    {
      number: "04",
      icon: <Sparkles className="w-6 h-6 text-primary/70" strokeWidth={1.5} />,
      title: "Spread Joy",
      description: "We ensure every gift reaches the right child, wrapped with care and love.",
    },
  ];

  const giftCategories = [
    {
      icon: <Gift className="w-5 h-5 text-primary/70" strokeWidth={1.5} />,
      title: "Something They Want",
      description: "A special toy, game, or item they've been dreaming about",
    },
    {
      icon: <Star className="w-5 h-5 text-primary/70" strokeWidth={1.5} />,
      title: "Something They Need",
      description: "Practical essentials like clothing, shoes, or school supplies",
    },
    {
      icon: <Heart className="w-5 h-5 text-primary/70" strokeWidth={1.5} />,
      title: "Something to Wear",
      description: "A warm jacket, cozy pajamas, or an outfit that makes them feel special",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary/70" strokeWidth={1.5} />,
      title: "Something to Read",
      description: "Books that spark imagination and open doors to new worlds",
    },
  ];

  const sampleChildren = [
    {
      initial: "E",
      age: 7,
      interests: ["Dinosaurs", "Building blocks", "Art"],
      itemsNeeded: 4,
      color: "from-primary/10 to-accent/10",
    },
    {
      initial: "M",
      age: 10,
      interests: ["Soccer", "Reading", "Animals"],
      itemsNeeded: 3,
      color: "from-accent/10 to-primary/10",
    },
    {
      initial: "S",
      age: 5,
      interests: ["Princesses", "Puzzles", "Music"],
      itemsNeeded: 5,
      color: "from-primary/8 to-secondary/10",
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
          {/* Main headline - single page-level title */}
          <h1 className="font-serif text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] text-foreground leading-tight tracking-tight mb-6">
            Sponsor a Child
          </h1>

          {/* Subheadline */}
          <p className="text-foreground/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Choose a wishlist and bring joy to a child who needs it most. 
            Every gift you give is a message of care that lasts far beyond the holiday season.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-primary/60 mb-3">
              Simple Steps
            </span>
            <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] text-foreground leading-tight tracking-tight">
              How Sponsorship Works
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "relative p-6 sm:p-8",
                  "bg-card/60 rounded-2xl",
                  "border border-border/20",
                  "transition-all duration-300",
                  "hover:shadow-lg hover:shadow-primary/5",
                  "hover:border-primary/20"
                )}
              >
                {/* Step Number */}
                <span className="absolute top-4 right-4 font-serif text-[0.8125rem] text-primary/30 tracking-wide">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/8 mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl text-foreground mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Children Preview Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          {wishlistsAvailable ? (
            <>
              {/* Section Header */}
              <div className="text-center mb-10 sm:mb-14">
                <span className="inline-block text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-primary/60 mb-3">
                  Preview
                </span>
                <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] text-foreground leading-tight tracking-tight mb-4">
                  Children You Can Sponsor
                </h2>
                <p className="text-foreground/70 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                  Each child has a unique story and wishlist. When wishlists become available, 
                  you'll be able to choose someone to support this holiday season.
                </p>
              </div>

              {/* Child Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                {sampleChildren.map((child, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative p-6 sm:p-8",
                      "bg-background rounded-2xl",
                      "border border-border/30",
                      "transition-all duration-300",
                      "hover:shadow-xl hover:shadow-primary/8",
                      "hover:border-primary/30",
                      "hover:-translate-y-1",
                      "cursor-pointer group"
                    )}
                  >
                    {/* Child Avatar/Initial */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className={cn(
                        "flex items-center justify-center",
                        "w-14 h-14 rounded-full",
                        "bg-gradient-to-br",
                        child.color,
                        "border border-primary/10"
                      )}>
                        <span className="font-serif text-2xl text-foreground/80">
                          {child.initial}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Age {child.age}</p>
                        <p className="text-sm text-muted-foreground">
                          {child.itemsNeeded} items on wishlist
                        </p>
                      </div>
                    </div>

                    {/* Interests */}
                    <div className="mb-5">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Interests
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {child.interests.map((interest, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-primary/8 text-foreground/80"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full mt-2",
                        "rounded-full",
                        "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 group-hover:border-primary/50"
                      )}
                    >
                      View Wishlist
                    </Button>
                  </div>
                ))}
              </div>

              {/* View All CTA */}
              <div className="text-center">
                <Button
                  className={cn(
                    "rounded-full",
                    "px-8 py-6",
                    "font-medium text-base",
                    "bg-primary text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90 shadow-sm hover:shadow-md hover:shadow-primary/20"
                  )}
                >
                  <Heart className="w-4 h-4 mr-2" strokeWidth={2} />
                  Browse All Children
                </Button>
                <p className="text-muted-foreground text-sm mt-4">
                  New children are added regularly as families are referred to our program.
                </p>
              </div>
            </>
          ) : (
            /* Off-Season State */
            <div className="text-center max-w-lg mx-auto py-8 sm:py-12">
              <span className="inline-block text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-primary/60 mb-4">
                Opening October 2026
              </span>
              <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] text-foreground leading-tight tracking-tight mb-4">
                Wishlist sponsorship will be available soon.
              </h2>
              <button 
                onClick={() => setIsNewsletterModalOpen(true)}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm sm:text-base font-medium transition-colors"
              >
                Get notified when wishlists open
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* What You'll Provide Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <span className="inline-block text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-primary/60 mb-3">
                The Gift of Giving
              </span>
              <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] text-foreground leading-tight tracking-tight mb-4">
                What You'll Provide
              </h2>
              <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-8">
                Each wishlist is thoughtfully curated to include a mix of items that 
                bring both joy and practical support. When you sponsor a child, you're 
                giving them a complete holiday experience.
              </p>

              {/* Gift Categories */}
              <div className="space-y-4">
                {giftCategories.map((category, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 items-start p-4 rounded-xl bg-card/40 border border-border/10"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm sm:text-[0.9375rem] mb-1">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Reassurance Card */}
            <div className="space-y-6">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10 p-6 sm:p-8">
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-4">
                  Your Commitment
                </h3>
                <ul className="space-y-3">
                  {[
                    "Spend approximately $75-150 on wishlist items",
                    "Shop at your convenience within the deadline",
                    "Wrap gifts with love (we provide tags!)",
                    "Drop off at our collection location",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary/60 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-foreground/80 text-sm sm:text-[0.9375rem] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline Note */}
              <div className="flex gap-4 items-start p-5 rounded-xl bg-card/60 border border-border/20">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm mb-1">
                    Important Timeline
                  </h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Wishlists open in early November. All gifts must be received by 
                    December 10th to ensure timely delivery to families.
                  </p>
                </div>
              </div>

              {/* Gentle Note */}
              <p className="text-center text-muted-foreground text-sm px-4">
                Can't sponsor a full wishlist?{" "}
                <Link 
                  to={ROUTES.MAKE_A_DONATION} 
                  className="text-primary hover:text-primary/80 underline underline-offset-2"
                >
                  Make a donation
                </Link>{" "}
                to help cover items for children who need extra support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-[800px] mx-auto px-6 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] text-foreground leading-tight tracking-tight mb-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Can I sponsor more than one child?",
                answer: "Absolutely! Many sponsors choose to adopt multiple children, especially families or groups who want to spread extra joy.",
              },
              {
                question: "What if I can't find an item on the wishlist?",
                answer: "That's okay! Choose a similar alternative or reach out to us — we're happy to help find substitutes that the child will love.",
              },
              {
                question: "Can I include a personal note?",
                answer: "Yes! We encourage sponsors to include a heartfelt card or note. It means so much to children knowing someone thought of them specifically.",
              },
            ].map((faq, index) => (
              <div 
                key={index}
                className="p-5 sm:p-6 rounded-xl bg-background border border-border/30"
              >
                <h3 className="font-medium text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              to={ROUTES.FAQ}
              className="text-primary hover:text-primary/80 underline underline-offset-2 text-sm"
            >
              View all frequently asked questions →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[600px] mx-auto px-6 md:px-8 text-center">
          <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] text-foreground leading-tight tracking-tight mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
            Every sponsored child is a reminder that they are seen, loved, and valued. 
            Your generosity creates ripples of hope that extend far beyond the holiday season.
          </p>
          <Button
            disabled={!wishlistsAvailable}
            className={cn(
              "rounded-full",
              "px-10 py-6",
              "font-medium text-base",
              wishlistsAvailable
                ? "bg-primary text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90 shadow-sm hover:shadow-md hover:shadow-primary/20"
                : "bg-primary/50 text-primary-foreground cursor-not-allowed"
            )}
          >
            <Heart className="w-4 h-4 mr-2" strokeWidth={2} />
            Choose a Child to Sponsor
          </Button>

          {/* Helper text when wishlists not available */}
          {!wishlistsAvailable && (
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mt-4">
              <Info className="w-4 h-4" />
              <span>Wishlists will be available soon.</span>
            </div>
          )}
        </div>
      </section>

      {/* Closing Statement */}
      <div className="border-t border-border/20">
        <p className="text-center text-muted-foreground text-[0.8125rem] font-light tracking-wide py-12 sm:py-16">
          One wishlist. One child. One moment of pure joy.
        </p>
      </div>

      {/* Newsletter Signup Modal */}
      <NewsletterSignupModal
        open={isNewsletterModalOpen}
        onOpenChange={setIsNewsletterModalOpen}
      />
    </main>
  );
};

export default SponsorAChild;
