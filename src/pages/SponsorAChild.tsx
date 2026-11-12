import { useState } from "react";
import { ArrowLeft, ArrowRight, Gift, Heart, Sparkles, Star, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import { cn } from "@/lib/utils";
import { NewsletterSignupModal } from "@/components/sections/newsletter";
import { FulfillWishSteps } from "@/components/sections/how-it-works";

const SponsorAChild = () => {
  // TODO: This would come from your data source (API, context, etc.)
  const wishlistsAvailable = false;
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState("");

  // The inline email field hands off to the full signup modal, prefilled
  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterModalOpen(true);
  };
  const navigate = useNavigate();
  const giftCategories = [
    {
      icon: <Gift className="w-5 h-5 text-primary/50" strokeWidth={1.5} />,
      title: "Something They Want",
      description: "A special toy, game, or item they've been dreaming about.",
    },
    {
      icon: <Star className="w-5 h-5 text-primary/50" strokeWidth={1.5} />,
      title: "Something They Need",
      description: "Practical essentials like clothing, shoes, or school supplies.",
    },
    {
      icon: <Heart className="w-5 h-5 text-primary/50" strokeWidth={1.5} />,
      title: "Something to Wear",
      description: "A warm jacket, cozy pajamas, or an outfit that makes them feel special.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary/50" strokeWidth={1.5} />,
      title: "Something to Read",
      description: "Books that spark imagination and open doors to new worlds.",
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

      {/* Coming Soon Notice */}
      {!wishlistsAvailable && (
        <section aria-labelledby="wishlists-opening-heading" className="px-4 sm:px-6 md:px-8 pb-4">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#efe1de] bg-[#fdf7f5] px-6 py-10 shadow-[0_18px_50px_-24px_rgba(110,20,40,0.25)] sm:px-12 sm:py-14 lg:px-20">
            <div className="flex items-center justify-between gap-10">
              <div className="w-full max-w-[720px]">
                <span className="inline-block rounded-full bg-[#f6dfe2] px-5 py-2 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#8a1f38]">
                  Opening November 2026
                </span>
                <h2
                  id="wishlists-opening-heading"
                  className="mt-5 font-serif text-foreground leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
                >
                  Wish lists are opening soon.
                </h2>
                <p className="mt-4 max-w-[480px] font-sans text-base sm:text-lg leading-relaxed text-foreground/75">
                  Join the notification list and we&rsquo;ll let you know when children&rsquo;s wish lists
                  are ready to fulfill.
                </p>

                <form onSubmit={handleNotifySubmit} className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <label htmlFor="wishlist-notify-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="wishlist-notify-email"
                    type="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    className="h-14 w-full rounded-xl border border-[#cfc2bf] bg-white px-5 font-sans text-base text-foreground placeholder:text-[#8f817f] transition-colors focus-visible:border-[#b8556b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8556b]/25 sm:max-w-[360px]"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-14 flex-shrink-0 items-center justify-center gap-3 rounded-full bg-[#7e2139] px-9 font-sans text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-white shadow-md transition-colors hover:bg-[#6e1830] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8556b] focus-visible:ring-offset-2"
                  >
                    Notify me
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>

              {/* Checklist with heart illustration */}
              <svg
                className="hidden md:block h-auto w-40 lg:w-52 flex-shrink-0 text-[#c4687c]"
                viewBox="0 0 120 120"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M72 108 H 18 a4 4 0 0 1 -4 -4 V 10 a4 4 0 0 1 4 -4 H 80 a4 4 0 0 1 4 4 V 64" />
                <path d="M26 28 l5 6 l9 -12 M48 30 H 72" />
                <path d="M26 52 l5 6 l9 -12 M48 54 H 72" />
                <path d="M26 76 l5 6 l9 -12 M48 78 H 58" />
                <path d="M94 118 C 76 104 66 95 66 84 C 66 76.5 71.5 71 78 71 C 83 71 87 73.6 94 80 C 101 73.6 105 71 110 71 C 116.5 71 122 76.5 122 84 C 122 95 112 104 94 118 Z" transform="translate(-6 -6)" />
              </svg>
            </div>
          </div>
        </section>
      )}

      {/* How Fulfilling a Wish Works */}
      <FulfillWishSteps />

      {/* Available Children Preview Section - Only shown when wishlists are available */}
      {wishlistsAvailable && (
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8">
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
          </div>
        </section>
      )}

      {/* What You'll Provide Section */}
      <section className="py-20 sm:py-24 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Content */}
            <div>
              <span className="inline-block text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-primary/60 mb-3">
                The Gift of Giving
              </span>
              <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] text-foreground leading-tight tracking-tight mb-4">
                What You'll Provide
              </h2>
              <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-10">
                Each wishlist is thoughtfully curated to include a mix of items that 
                bring both joy and practical support. When you sponsor a child, you're 
                giving them a complete holiday experience.
              </p>

              {/* Gift Categories - Single Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-card/40 border border-border/20">
                <div className="space-y-4">
                  {giftCategories.map((category, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "flex gap-4 items-start",
                        index !== giftCategories.length - 1 && "pb-4 border-b border-border/15"
                      )}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center">
                        {category.icon}
                      </div>
                      <div className="pt-0.5">
                        <h3 className="font-medium text-foreground text-sm sm:text-[0.9375rem] mb-1.5">
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
            </div>

            {/* Right Column - Reassurance Cards */}
            <div>
              {/* Decorative image above the card */}
              <div className="flex justify-center">
                <img 
                  src="/sponsorship-icon.png" 
                  alt=""
                  aria-hidden="true"
                  className="w-80 h-80 object-contain pointer-events-none opacity-90 drop-shadow-sm"
                  style={{
                    filter: 'saturate(0.9) brightness(1.02)',
                  }}
                />
              </div>
              
              {/* Timeline Note */}
              <div className="flex gap-5 items-start pt-5 pb-5 px-5 sm:pt-6 sm:pb-6 sm:px-6 rounded-2xl bg-card/50 -mt-16">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted/80 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-foreground/40" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm mb-1.5">
                      Important Timeline
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      Wishlists open in early November. All gifts must be received by 
                      December 10th to ensure timely delivery to families.
                    </p>
                  </div>
              </div>

              {/* Gentle Note */}
              <p className="text-center text-muted-foreground text-sm pt-3 px-4">
                Can't sponsor a full wishlist?{" "}
                <button
                  onClick={() => {
                    navigate(ROUTES.MAKE_A_DONATION, { state: { openNewsletter: true } });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-primary font-medium hover:text-primary/80 transition-colors underline underline-offset-2"
                >
                  Make a donation
                </button>{" "}
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
        initialEmail={notifyEmail.trim()}
      />
    </main>
  );
};

export default SponsorAChild;
