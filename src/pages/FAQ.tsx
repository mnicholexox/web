import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/sections/faq";
import { ROUTES } from "@/constants";

/**
 * FAQ Page
 *
 * Displays frequently asked questions in an accordion format
 * with a soft watercolor aesthetic matching the Joy Drop brand.
 */
const FAQ = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Watercolor Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 10%, hsl(344 35% 85% / 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 80% 20%, hsl(280 30% 88% / 0.35) 0%, transparent 45%),
            radial-gradient(ellipse 70% 55% at 50% 80%, hsl(344 35% 88% / 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 10% 60%, hsl(280 25% 90% / 0.25) 0%, transparent 40%),
            linear-gradient(180deg, hsl(38 67% 97%) 0%, hsl(340 30% 96%) 50%, hsl(38 67% 97%) 100%)
          `,
        }}
      />

      {/* Subtle Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content Container - pt accounts for fixed header */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-28">
        {/* Header Section */}
        <header className="text-center mb-12 sm:mb-16">
          {/* Main Headline */}
          <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[48px] text-foreground leading-tight tracking-tight mb-6">
            Frequently Asked Questions
          </h1>

          {/* Supporting Copy */}
          <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We know you might have questions about how Joy Drop works.
            <br className="hidden sm:block" />
            Here are answers to some of the things people ask us most. 💗
          </p>
        </header>

        {/* FAQ Panel */}
        <section
          className="relative rounded-3xl p-4 sm:p-6 md:p-8"
          style={{
            background: "rgba(255, 255, 255, 0.45)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(139, 74, 92, 0.08)",
            boxShadow: "0 4px 24px rgba(139, 74, 92, 0.06)",
          }}
        >
          <FAQAccordion />
        </section>

        {/* CTA Section */}
        <footer className="text-center mt-12 sm:mt-16">
          <p className="text-foreground/70 text-base sm:text-lg mb-6">
            If you don't see your question here, we'd love to hear from you.
          </p>
          <Link to={`${ROUTES.HOME}#contact`}>
            <Button
              size="lg"
              className="px-8 py-3 font-medium transition-transform duration-200 hover:scale-[1.02]"
            >
              Contact Us
            </Button>
          </Link>
        </footer>
      </div>
    </main>
  );
};

export default FAQ;
