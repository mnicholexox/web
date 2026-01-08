import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";

const SponsorAChild = () => {
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
            Make a Difference
          </span>

          {/* Main headline */}
          <h1 className="font-serif text-[32px] sm:text-[42px] md:text-[48px] lg:text-[56px] text-foreground leading-tight tracking-tight mb-6">
            Sponsor a Child
          </h1>

          {/* Subheadline */}
          <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
            Choose a wishlist and bring joy to a child who needs it most. 
            Every gift you give is a message of care.
          </p>
        </div>
      </div>

      {/* Content Placeholder */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 pb-20">
        <div className="bg-card/60 rounded-2xl border border-border/20 p-8 sm:p-12 text-center">
          <p className="text-muted-foreground">
            Child selection interface coming soon.
          </p>
        </div>
      </div>
    </main>
  );
};

export default SponsorAChild;

