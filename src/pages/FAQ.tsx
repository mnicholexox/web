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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-20 md:pb-28">
        <div className="mx-auto max-w-5xl">
          {/* Header Section */}
          <header className="relative mb-5 text-center sm:mb-14 sm:text-left">
            {/* Ribbon swooping in from the top-left corner (phones) */}
            <svg
              className="pointer-events-none absolute -left-4 -top-8 h-24 w-28 sm:hidden"
              viewBox="0 0 120 100"
              aria-hidden="true"
            >
              <path d="M-10 100 C 10 60, 40 30, 120 6 L 120 22 C 50 40, 22 70, 6 104 Z" fill="#eaa5b2" opacity="0.8" />
            </svg>
            <h1
              className="relative font-serif text-[#2e1a17] leading-[1.02] tracking-tight text-[38px] min-[400px]:text-[42px] sm:leading-[1.05] sm:text-[clamp(2.25rem,4.6vw,3.75rem)]"
            >
              Frequently Asked <br className="sm:hidden" />
              Questions
            </h1>
            <p className="mx-auto mt-3 max-w-[340px] font-sans text-base leading-snug text-foreground/70 sm:mx-0 sm:mt-5 sm:max-w-3xl sm:text-xl sm:leading-relaxed sm:text-foreground/65">
              We know you might have questions about how Joy Drop works.
              <br className="hidden sm:block" /> Here are answers to some of the things people ask us most.
            </p>
            {/* Sparkle divider (phones) */}
            <div className="mt-4 flex items-center justify-center gap-4 sm:hidden" aria-hidden="true">
              <span className="h-px w-10 bg-[#c4566a]" />
              <svg className="h-5 w-5 text-[#c4566a]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2 C 12.8 8, 16 11.2, 22 12 C 16 12.8, 12.8 16, 12 22 C 11.2 16, 8 12.8, 2 12 C 8 11.2, 11.2 8, 12 2 Z" />
              </svg>
              <span className="h-px w-10 bg-[#c4566a]" />
            </div>
          </header>

          {/* FAQ list */}
          <section aria-label="Questions and answers">
            <FAQAccordion />
          </section>
        </div>

        {/* CTA Banner */}
        <aside
          aria-labelledby="faq-cta-heading"
          className="relative mx-auto mt-8 max-w-5xl overflow-hidden rounded-3xl px-6 pt-6 pb-6 text-white sm:py-8 shadow-[0_18px_40px_-22px_rgba(80,10,25,0.7)] sm:mt-16 sm:px-10 md:flex md:items-center md:gap-8 md:py-7 lg:pl-[170px]"
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

          {/* Ribbon loop on the right (phones) */}
          <svg
            className="pointer-events-none absolute right-0 top-0 h-[78%] w-[48%] sm:hidden"
            viewBox="0 0 180 160"
            fill="none"
            stroke="#c4566a"
            strokeLinecap="round"
            strokeOpacity="0.75"
            aria-hidden="true"
          >
            <path d="M10 160 C 60 120, 110 90, 130 60 C 150 30, 130 6, 112 18 C 92 32, 120 80, 190 100" strokeWidth="9" />
          </svg>

          <div className="relative flex-1">
            <h2
              id="faq-cta-heading"
              className="font-serif text-white leading-tight tracking-tight"
              style={{ fontSize: "clamp(1.875rem, 3vw, 2.5rem)" }}
            >
              Still have a question?
            </h2>
            <p className="mt-1 max-w-[280px] font-sans text-base sm:max-w-none sm:text-lg text-white/90">
              If you don&rsquo;t see your question here, we&rsquo;d love to hear from you.
            </p>
          </div>

          <Link
            to={`${ROUTES.HOME}#contact`}
            className="relative mt-5 flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#fdf8f4] px-8 py-3.5 sm:mt-6 sm:inline-flex sm:w-auto sm:rounded-xl font-sans text-lg font-medium text-[#6e1428] shadow-md transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#6a1a2c] md:mt-0 lg:px-10 lg:text-xl"
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
