import { ArrowRight, Heart } from "lucide-react";
import heroBannerImage from "./hero-banner-4.webp";

const scrollToSection = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
  const section = document.getElementById(id);
  if (section) {
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const EYEBROW = "A community-powered Christmas drive";
const HEADLINE = "Make Christmas morning magic.";
const SUPPORTING =
  "Choose a child's wish list, donate a gift, or lend a hand. Every act of kindness helps a family feel seen.";

/** Phone layout: rounded photo card sitting over a crimson panel with centered copy. */
const MobileHero = () => (
  <div className="md:hidden pt-[72px]">
    <div
      className="relative"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, transparent 150px, #7a1d33 150px, #6e1a30 60%, #6a182d 100%)",
      }}
    >
      {/* Photo card */}
      <div className="px-3">
        <div className="relative overflow-hidden rounded-3xl shadow-[0_18px_36px_-18px_rgba(60,8,20,0.55)]">
          <img
            src={heroBannerImage}
            alt="Children in Christmas pajamas opening gifts by the tree"
            className="aspect-[8/5] w-full object-cover object-[86%_center]"
          />
        </div>
      </div>

      {/* Copy */}
      <div className="px-6 pb-14 pt-9 text-center text-white">
        <p className="font-sans text-[11px] min-[400px]:text-xs font-medium uppercase tracking-[0.16em] text-white/90">{EYEBROW}</p>
        <h1
          className="mt-4 font-serif text-white text-[44px] min-[400px]:text-[48px] leading-[1.02] tracking-tight"
          style={{ textShadow: "0 2px 10px rgba(40, 4, 14, 0.35)" }}
        >
          {HEADLINE}
        </h1>
        <p className="mx-auto mt-5 max-w-[360px] font-sans text-base leading-relaxed text-white/90">
          {SUPPORTING}
        </p>

        <a
          href="#how-you-can-help"
          onClick={scrollToSection("how-you-can-help")}
          className="mx-auto mt-8 flex w-full max-w-[340px] items-center justify-center gap-4 rounded-2xl border border-[#c9566f]/70 px-6 py-4 font-sans text-base font-semibold uppercase tracking-wide text-white shadow-[0_12px_24px_-12px_rgba(30,0,10,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          style={{ background: "linear-gradient(180deg, #8a1a30 0%, #761428 100%)" }}
        >
          <Heart className="h-6 w-6" strokeWidth={2} />
          See ways to help
        </a>

        <a
          href="#what-this-is-about"
          onClick={scrollToSection("what-this-is-about")}
          className="mt-8 inline-flex items-center gap-4 font-sans text-sm font-medium uppercase tracking-[0.24em] text-white/95 focus-visible:outline-none focus-visible:underline"
        >
          How Joy Drop works
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
);

export const HeroBanner = () => {
  return (
    <section id="hero-banner" data-section="hero-banner" className="relative w-full">
      <MobileHero />

      {/* Tablet and desktop layout */}
      <div
        className="relative hidden w-full min-h-[640px] items-center pt-16 md:flex"
        style={{
          backgroundImage: `url('${heroBannerImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left-to-right overlay, blends into the image's own red fade */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "linear-gradient(to right, rgba(120, 26, 44, 0.85) 0%, rgba(120, 26, 44, 0.55) 25%, rgba(120, 26, 44, 0) 45%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-[500px] text-white">
            <p className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-white/90">{EYEBROW}</p>
            <h1
              className="mt-4 font-serif text-white text-[60px] lg:text-[68px] leading-[1.02] tracking-tight"
              style={{ textShadow: "0 2px 12px rgba(60, 8, 20, 0.35)" }}
            >
              {HEADLINE}
            </h1>
            <p className="mt-5 font-sans text-lg leading-relaxed text-white/90 max-w-[460px]">{SUPPORTING}</p>

            <div className="mt-8 flex flex-col items-start gap-6">
              <a
                href="#how-you-can-help"
                onClick={scrollToSection("how-you-can-help")}
                className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-sans text-lg font-medium uppercase tracking-wide text-white shadow-lg transition-colors hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                style={{ backgroundColor: "#7a1a2c" }}
              >
                <Heart className="h-5 w-5" strokeWidth={2} />
                See ways to help
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
