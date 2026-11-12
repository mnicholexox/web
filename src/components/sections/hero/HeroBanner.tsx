import { Heart } from "lucide-react";
import heroBannerImage from "./hero-banner-4.webp";

const scrollToSection = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
  const section = document.getElementById(id);
  if (section) {
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const HeroBanner = () => {
  return (
    <section
      id="hero-banner"
      data-section="hero-banner"
      className="relative w-full min-h-[600px] md:min-h-[640px] flex items-center pt-20 md:pt-16"
      style={{
        backgroundImage: `url('${heroBannerImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Mobile overlay - crimson wash so the text stays readable over the photo */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(110, 22, 40, 0.75) 0%, rgba(110, 22, 40, 0.6) 55%, rgba(110, 22, 40, 0.25) 100%)",
        }}
      />

      {/* Desktop overlay - left to right, blends into the image's own red fade */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(120, 26, 44, 0.85) 0%, rgba(120, 26, 44, 0.55) 25%, rgba(120, 26, 44, 0) 45%)",
        }}
      />

      {/* Desktop background position override - keep the top of the photo in view */}
      <style>{`
        @media (min-width: 768px) {
          #hero-banner {
            background-position: left top !important;
          }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[560px] md:max-w-[500px] text-white">
          {/* Eyebrow */}
          <p className="font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.14em] text-white/90">
            A community-powered Christmas drive
          </p>

          {/* Headline */}
          <h1
            className="mt-4 font-serif text-white text-[44px] sm:text-[60px] lg:text-[68px] leading-[1.02] tracking-tight"
            style={{ textShadow: "0 2px 12px rgba(60, 8, 20, 0.35)" }}
          >
            Make Christmas morning magic.
          </h1>

          {/* Supporting copy */}
          <p className="mt-5 font-sans text-base sm:text-lg leading-relaxed text-white/90 max-w-[460px]">
            Choose a child's wish list, donate a gift, or lend a hand. Every act of kindness helps a
            family feel seen.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-start gap-6">
            <a
              href="#how-you-can-help"
              onClick={scrollToSection("how-you-can-help")}
              className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-sans text-base sm:text-lg font-medium uppercase tracking-wide text-white shadow-lg transition-colors hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              style={{ backgroundColor: "#7a1a2c" }}
            >
              <Heart className="h-5 w-5" strokeWidth={2} />
              See ways to help
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
