import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";

interface WishlistSelectionProps {
  /** Whether wishlists are currently available for selection */
  wishlistsAvailable?: boolean;
}

export const WishlistSelection = ({ wishlistsAvailable = false }: WishlistSelectionProps) => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-[26px] sm:text-[32px] md:text-[36px] text-foreground leading-tight tracking-tight mb-4">
            What You'll See in a Wishlist
          </h2>

          <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
            Every wishlist is thoughtfully curated to help you understand how you can make a difference.
          </p>
        </div>

        {/* Two-Column Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Left Card: What a Wishlist Includes */}
          <div className="bg-card/60 rounded-2xl border border-border/20 p-6 sm:p-8 flex flex-col">
            <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-5">
              What a Wishlist Includes
            </h3>
            
            <ul className="space-y-3 mb-6 flex-grow">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                <span className="text-foreground/80 text-[0.9375rem] leading-relaxed">
                  Age and general interests
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                <span className="text-foreground/80 text-[0.9375rem] leading-relaxed">
                  Clothing sizes and seasonal needs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                <span className="text-foreground/80 text-[0.9375rem] leading-relaxed">
                  A few personal wishes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                <span className="text-foreground/80 text-[0.9375rem] leading-relaxed">
                  Notes from caregivers (reviewed by Joy Drop)
                </span>
              </li>
            </ul>

            {/* Privacy note */}
            <div className="flex items-start gap-2 pt-4 border-t border-border/30">
              <ShieldCheck className="w-4 h-4 text-primary/50 mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground text-[0.8125rem] leading-relaxed">
                Children's names, photos, and personal details are protected. Access is granted only after you commit to sponsoring.
              </p>
            </div>
          </div>

          {/* Right Card: Call to Action or Coming Soon */}
          <div className="bg-card/60 rounded-2xl border border-border/20 p-6 sm:p-8 flex flex-col items-center justify-center text-center">
            <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">
              Browse Available Wishlists
            </h3>
            
            <p className="text-foreground/70 text-[0.9375rem] leading-relaxed mb-6">
              {wishlistsAvailable 
                ? "Invites are managed by your local coordinator."
                : "When wishlists become available, you'll be able to browse and choose one to sponsor."
              }
            </p>

            {/* Primary Button - disabled when wishlists not available */}
            {wishlistsAvailable ? (
              <Button
                asChild
                className="bg-primary text-primary-foreground rounded-full px-6 sm:px-8 py-3 min-h-[44px] font-medium text-sm sm:text-[0.9375rem] transition-all duration-200 hover:scale-[1.03] hover:bg-primary/90 shadow-sm hover:shadow-md hover:shadow-primary/20 mb-4"
              >
                <Link to={ROUTES.SPONSOR_A_CHILD}>
                  View Available Wishlists
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            ) : (
              <Button
                disabled
                className="bg-primary/50 text-primary-foreground rounded-full px-6 sm:px-8 py-3 min-h-[44px] font-medium text-sm sm:text-[0.9375rem] mb-4 cursor-not-allowed"
              >
                View Available Wishlists
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}

            {/* Helper text when wishlists not available */}
            {!wishlistsAvailable && (
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                <Clock className="w-4 h-4" />
                <span>Wishlists will be available soon.</span>
              </div>
            )}

            {/* Secondary Link */}
            <Link 
              to={ROUTES.MAKE_A_DONATION}
              className="text-primary text-sm hover:underline underline-offset-4 transition-colors inline-flex items-center gap-1"
            >
              Learn How Donations Help Fill the Gaps
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
