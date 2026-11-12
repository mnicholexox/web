import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl">
          {/* Header Section */}
          <header className="mb-10 sm:mb-14">
            <h1
              className="font-serif text-[#3a2420] leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)" }}
            >
              Frequently Asked Questions
            </h1>
            <p className="mt-5 max-w-3xl font-sans text-lg sm:text-xl leading-relaxed text-foreground/65">
              We know you might have questions about how Joy Drop works.
              <br className="hidden sm:block" /> Here are answers to some of the things people ask us most.
            </p>
          </header>

          {/* FAQ list */}
          <section aria-label="Questions and answers">
            <FAQAccordion />
          </section>
        </div>

        {/* CTA Banner */}
        <aside
          aria-labelledby="faq-cta-heading"
          className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl px-6 py-8 text-white shadow-[0_18px_40px_-22px_rgba(80,10,25,0.7)] sm:mt-16 sm:px-10 md:flex md:items-center md:gap-8 md:py-7 lg:pl-[170px]"
          style={{ background: "linear-gradient(100deg, #5e1222 0%, #6a1a2c 55%, #7d3347 100%)" }}
        >
          {/* Faint speech bubbles tucked into the left edge */}
          <svg
            className="pointer-events-none absolute -left-4 top-1 hidden h-[110%] w-auto text-white/15 lg:block"
            viewBox="0 0 130 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M42 8 C 70 8, 92 22, 92 40 C 92 58, 70 72, 42 72 C 34 72, 27 71, 20 68 L 10 78 L 12 64 C 4 58, -6 50, -6 40 C -6 22, 14 8, 42 8 Z" />
            <path d="M98 44 C 112 48, 120 58, 120 68 C 120 76, 115 83, 108 87 L 110 98 L 98 91 C 94 92, 90 92, 86 92 C 70 92, 56 86, 50 77" />
          </svg>

          <div className="relative flex-1">
            <h2
              id="faq-cta-heading"
              className="font-serif text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.875rem, 3vw, 2.5rem)" }}
            >
              Still have a question?
            </h2>
            <p className="mt-1 font-sans text-base sm:text-lg text-white/90">
              If you don&rsquo;t see your question here, we&rsquo;d love to hear from you.
            </p>
          </div>

          <Link
            to={`${ROUTES.HOME}#contact`}
            className="relative mt-6 inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#fdf8f4] px-8 py-3.5 font-sans text-lg font-medium text-[#6e1428] shadow-md transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#6a1a2c] md:mt-0 lg:px-10 lg:text-xl"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" />
          </Link>
        </aside>
      </div>
    </main>
  );
};

export default FAQ;
