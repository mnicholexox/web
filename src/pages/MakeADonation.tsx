import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Heart, Gift, Lock, Recycle, Sparkles, ShieldCheck, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import { cn } from "@/lib/utils";
import { PreLovedImpact } from "@/components/sections";
import { NewsletterSignupModal } from "@/components/sections/newsletter";

/** Satin ribbons sweeping in from both sides of the page header. */
const HeaderRibbons = () => (
  <>
    <svg
      className="pointer-events-none absolute left-0 top-0 h-28 w-[40%] max-w-[420px] md:top-[38%] md:h-48 md:w-[30%]"
      viewBox="0 0 420 200"
      preserveAspectRatio="xMinYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="donate-header-left" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#e8a3ae" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#f3c3cb" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path d="M-10 40 C 90 30, 160 90, 240 120 C 300 142, 360 150, 430 150 L 430 166 C 350 168, 290 160, 230 136 C 150 106, 90 50, -10 60 Z" fill="url(#donate-header-left)" />
    </svg>
    <svg
      className="pointer-events-none absolute right-0 top-[14%] h-36 w-[42%] max-w-[420px] md:top-[18%] md:h-56 md:w-[30%]"
      viewBox="0 0 420 220"
      preserveAspectRatio="xMaxYMid meet"
      fill="none"
      stroke="#e48a9e"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        d="M20 210 C 120 190, 220 150, 280 110 C 250 86, 220 50, 240 30 C 256 14, 276 24, 280 42 C 286 20, 312 12, 326 30 C 344 54, 308 84, 280 110 C 330 100, 380 84, 430 66"
        strokeWidth="5"
        opacity="0.8"
      />
    </svg>
  </>
);

/** Satin ribbons framing the Cash Donations header. */
const CashRibbons = () => (
  <>
    <svg
      className="pointer-events-none absolute left-0 top-0 h-24 w-[34%] max-w-[460px] md:h-40"
      viewBox="0 0 460 160"
      preserveAspectRatio="xMinYMin meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cash-ribbon-left" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#e8a3ae" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f3c3cb" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <path
        d="M-10 120 C 80 60, 200 90, 290 50 C 340 28, 370 8, 400 -10 L 430 -10 C 390 22, 350 50, 300 72 C 210 112, 90 86, -10 150 Z"
        fill="url(#cash-ribbon-left)"
      />
    </svg>
    <svg
      className="pointer-events-none absolute right-0 top-2 h-24 w-[36%] max-w-[420px] md:h-40 md:w-[30%]"
      viewBox="0 0 420 160"
      preserveAspectRatio="xMaxYMin meet"
      fill="none"
      stroke="#e48a9e"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        d="M10 150 C 90 140, 170 110, 220 80 C 200 60, 170 30, 190 14 C 206 2, 224 14, 226 30 C 232 12, 256 4, 268 20 C 284 42, 248 64, 220 80 C 280 72, 350 50, 430 30"
        strokeWidth="5"
        opacity="0.75"
      />
    </svg>
  </>
);

/** Soft ribbon waves along the bottom of the donation card. */
const CardRibbon = () => (
  <svg
    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full"
    viewBox="0 0 600 100"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="cash-card-ribbon" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#d4607a" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#e88ea0" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    <path d="M0 70 C 120 30, 220 100, 340 70 C 440 45, 520 40, 600 60 V 100 H 0 Z" fill="url(#cash-card-ribbon)" opacity="0.55" />
    <path d="M0 88 C 140 60, 260 110, 400 82 C 480 66, 550 72, 600 82" fill="none" stroke="#f3a9b8" strokeOpacity="0.5" strokeWidth="2" />
  </svg>
);

const MakeADonation = () => {
  const location = useLocation();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState("");

  // Scroll to hash anchor on page load, accounting for fixed header
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          const headerHeight = 64; // h-16 = 64px fixed header
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - headerHeight,
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, [location.hash]);

  // Open newsletter modal if navigated from SponsorAChild
  useEffect(() => {
    const state = location.state as { openNewsletter?: boolean } | null;
    if (state?.openNewsletter) {
      // Small delay to ensure page has rendered
      setTimeout(() => {
        setIsNewsletterModalOpen(true);
        // Clear the state to prevent reopening on re-render
        window.history.replaceState({}, '');
      }, 300);
    }
  }, [location.state]);
  const donationExamples = [
    {
      icon: <Gift className="h-5 w-5" strokeWidth={1.6} />,
      title: "Essentials",
      description: "Warm clothing, shoes, and winter gear that every child needs",
    },
    {
      icon: <Sparkles className="h-5 w-5" strokeWidth={1.6} />,
      title: "Seasonal Needs",
      description: "Holiday meals, celebration supplies, and festive touches",
    },
    {
      icon: <Heart className="h-5 w-5" strokeWidth={1.6} />,
      title: "Uncovered Items",
      description: "Gifts for children added late or items beyond wishlists",
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

      {/* Page Header */}
      <header className="relative overflow-hidden">
        <HeaderRibbons />
        <div className="relative mx-auto max-w-[1200px] px-4 pt-4 pb-10 text-center sm:px-6 sm:pt-6 sm:pb-12 md:px-8">
          <span className="block font-sans text-sm font-medium uppercase tracking-[0.3em] text-[#a2283f]">
            Joy Drop
          </span>
          <h1
            className="mt-2 font-serif text-[#5e1022] leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(3.25rem, 6vw, 4.5rem)" }}
          >
            Make a Donation
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-sans text-base sm:text-lg leading-relaxed text-foreground/75">
            Your generosity fills the gaps beyond wishlists &mdash; ensuring every child feels seen,
            valued, and remembered during the holiday season.
          </p>
          <a
            href="#cash-donations"
            onClick={(e) => {
              const target = document.getElementById("cash-donations");
              if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
              }
            }}
            className="mt-7 inline-flex items-center gap-3 rounded-full px-9 py-4 font-sans text-sm sm:text-base font-semibold uppercase tracking-[0.16em] text-white shadow-[0_14px_28px_-12px_rgba(110,20,40,0.7)] transition-[filter] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98a96] focus-visible:ring-offset-2"
            style={{ background: "linear-gradient(180deg, #8a1f38 0%, #6e1428 100%)" }}
          >
            <Heart className="h-5 w-5" strokeWidth={2} />
            Donate today
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Why donate - crimson band */}
      <section aria-label="Why donate" className="relative text-white">
        <svg className="block h-10 w-full sm:h-14" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 60 V 30 C 240 0, 480 50, 760 34 C 1020 18, 1220 0, 1440 22 V 60 Z" fill="#6e1428" />
        </svg>
        <div style={{ background: "linear-gradient(180deg, #6e1428 0%, #5e1022 100%)" }}>
          <ul className="mx-auto grid max-w-[1200px] grid-cols-3 px-2 py-5 sm:px-6 sm:py-8 md:px-8">
            {[
              { icon: <Gift className="h-7 w-7" strokeWidth={1.5} />, title: "Give Pre-Loved Items", text: "Help children feel special with quality, cared-for gifts." },
              { icon: <Recycle className="h-7 w-7" strokeWidth={1.5} />, title: "Support Sustainability", text: "Keep great items in use and out of landfills." },
              { icon: <Users className="h-7 w-7" strokeWidth={1.5} />, title: "Make a Local Impact", text: "Directly support children and families in our community." },
            ].map((item, i) => (
              <li
                key={item.title}
                className={cn(
                  "flex flex-col items-center gap-2 px-2 text-center md:flex-row md:justify-center md:gap-4 md:px-6 md:text-left",
                  i > 0 && "border-l border-white/20"
                )}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f8e4e6] text-[#8a1f38] [&>svg]:h-6 [&>svg]:w-6 md:h-16 md:w-16 md:[&>svg]:h-7 md:[&>svg]:w-7">
                  {item.icon}
                </span>
                <div>
                  <h2 className="font-serif text-[15px] leading-tight text-white md:text-xl">{item.title}</h2>
                  <p className="mt-1 max-w-[240px] font-sans text-[11px] leading-snug text-white/85 md:mt-0.5 md:text-sm">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <svg className="block h-10 w-full sm:h-14" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0 V 26 C 260 56, 520 10, 780 26 C 1040 42, 1240 58, 1440 30 V 0 Z" fill="#5e1022" />
          <path d="M0 26 C 260 56, 520 10, 780 26 C 1040 42, 1240 58, 1440 30" fill="none" stroke="#c4566a" strokeOpacity="0.55" strokeWidth="6" />
        </svg>
      </section>

      {/* Pre-Loved Impact Section */}
      <PreLovedImpact />

      {/* Cash Donations Section */}
      <section
        id="cash-donations"
        data-section="cash-donations"
        className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24"
        style={{
          background:
            "radial-gradient(ellipse at 15% 0%, rgba(246, 223, 226, 0.6) 0%, transparent 40%), radial-gradient(ellipse at 90% 10%, rgba(246, 223, 226, 0.5) 0%, transparent 35%), #fcf6f3",
        }}
      >
        <CashRibbons />

        {/* Section Header */}
        <div className="relative mx-auto max-w-[1200px] px-4 text-center sm:px-6 md:px-8">
          <span className="block font-sans text-sm font-medium uppercase tracking-[0.3em] text-[#a2283f]">
            Joy Drop
          </span>
          <h2
            className="mt-2 font-serif text-[#3a2420] leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Cash Donations
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-sans text-base sm:text-lg text-foreground/75">
            Help bring comfort, confidence, and joy to children in our community.
          </p>
        </div>

        {/* Main Content */}
        <div className="relative mx-auto mt-6 max-w-[1200px] px-4 sm:mt-12 sm:px-6 md:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left Column - Donation card */}
            <div
              className="relative overflow-hidden rounded-3xl px-5 pt-7 pb-10 text-white shadow-[0_24px_50px_-24px_rgba(80,10,25,0.7)] sm:px-10 sm:pt-10 sm:pb-12"
              style={{ background: "linear-gradient(160deg, #7a1a32 0%, #6a1429 55%, #5a0f22 100%)" }}
            >
              <CardRibbon />

              <div className="relative">
                <div className="text-center sm:text-left">
                <span className="block font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/80">
                  Every amount makes a difference
                </span>
                <h3
                  className="mt-3 font-serif text-white leading-[1.05] tracking-tight"
                  style={{ fontSize: "clamp(2rem, 3.4vw, 2.75rem)" }}
                >
                  Give What Feels Right
                </h3>
                <p className="mx-auto mt-3 max-w-md font-sans text-base sm:mx-0 sm:text-lg leading-snug text-white/85">
                  There&rsquo;s no minimum, no pressure &mdash; just the chance to help where it&rsquo;s
                  needed most.
                </p>
                </div>

                {/* Suggested Amounts */}
                <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-7 sm:gap-4" role="radiogroup" aria-label="Suggested amounts">
                  {[25, 50, 100].map((amount) => {
                    const active = selectedAmount === amount;
                    return (
                      <button
                        key={amount}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={cn(
                          "rounded-2xl border py-3.5 font-sans text-lg sm:text-xl font-medium transition-colors",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                          active
                            ? "border-[#fbe3e6] bg-[#fbe3e6] text-[#6e1428]"
                            : "border-white/70 text-white hover:bg-white/10"
                        )}
                      >
                        ${amount}
                      </button>
                    );
                  })}
                </div>

                <div className="my-5 flex items-center gap-4" aria-hidden="true">
                  <span className="h-px flex-1 bg-white/30" />
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/75">or</span>
                  <span className="h-px flex-1 bg-white/30" />
                </div>

                {/* Custom Amount */}
                <label htmlFor="custom-amount" className="block font-sans text-base text-white/90">
                  Enter a custom amount
                </label>
                <div className="relative mt-2">
                  <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 font-sans text-lg font-semibold text-[#3a2420]">
                    $
                  </span>
                  <input
                    id="custom-amount"
                    type="number"
                    inputMode="decimal"
                    min="1"
                    placeholder="Any amount helps"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="h-14 w-full rounded-xl border border-transparent bg-[#fdf8f5] pl-11 pr-4 font-sans text-base sm:text-lg text-foreground placeholder:text-[#9b8a88] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  />
                </div>

                {/* Primary CTA */}
                <button
                  type="button"
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#fbe3e6] py-4 font-sans text-lg font-medium text-[#6e1428] shadow-md transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <Heart className="h-5 w-5" strokeWidth={2} />
                  Donate with Heart
                  <ArrowRight className="h-5 w-5" />
                </button>

                <p className="mt-4 flex items-center justify-center gap-2 font-sans text-sm text-white/80">
                  <Lock className="h-4 w-4" />
                  Secure payment processing
                </p>
              </div>
            </div>

            {/* Right Column - Impact & Reassurance */}
            <div className="flex flex-col gap-6">
              {/* Where Your Gift Goes */}
              <div className="rounded-3xl border border-[#f0dcdc] bg-[#fffcfa]/90 p-6 shadow-[0_16px_40px_-26px_rgba(110,20,40,0.35)] sm:p-8">
                <h3 className="font-serif text-[28px] sm:text-[32px] leading-tight text-[#3a2420]">
                  Where Your Gift Goes
                </h3>
                <p className="mt-2 font-sans text-base leading-snug text-foreground/75">
                  Donations help us respond to real needs as they arise &mdash; from last-minute
                  enrollments to unexpected requests.
                </p>

                <ul className="mt-5 space-y-4">
                  {donationExamples.map((example) => (
                    <li key={example.title} className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f8e4e6] text-[#8a1f38]">
                        {example.icon}
                      </span>
                      <div>
                        <h4 className="font-sans text-base font-semibold text-[#3a2420]">{example.title}</h4>
                        <p className="font-sans text-sm sm:text-[15px] leading-snug text-foreground/70">
                          {example.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Promise */}
              <div className="flex flex-1 flex-row items-center gap-4 rounded-3xl border border-[#f0d6d9] bg-[#f8e7e8] p-5 shadow-[0_16px_40px_-26px_rgba(110,20,40,0.35)] sm:gap-7 sm:p-8">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f3d3d8] text-[#8a1f38] sm:h-20 sm:w-20">
                  <ShieldCheck className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={1.5} />
                </span>
                <div className="border-l border-[#c46a7d] pl-4 sm:border-[#e3b9c0] sm:pl-7">
                  <h3 className="font-serif text-[23px] sm:text-[28px] leading-tight text-[#5e1022]">
                    Our Promise to You
                  </h3>
                  <p className="mt-1.5 font-sans text-[15px] sm:text-base leading-snug text-foreground/80">
                    Every dollar is handled with care. We&rsquo;re committed to transparency &mdash; your
                    contribution goes directly toward supporting children and families in our community.
                    No overhead, no surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gentle Note */}
          <p className="mx-auto mt-8 max-w-md text-center font-sans text-sm sm:text-base leading-snug text-foreground/75">
            Not ready to give today? That&rsquo;s <strong className="font-semibold text-foreground">okay.</strong> You can also{" "}
            <Link
              to={ROUTES.SPONSOR_A_CHILD}
              className="font-semibold text-[#a2283f] underline underline-offset-2 hover:text-[#6e1428]"
            >
              sponsor a child&rsquo;s wishlist
            </Link>{" "}
            or share Joy Drop with someone who might want to help.
          </p>
        </div>
      </section>

      {/* Newsletter Signup Modal */}
      <NewsletterSignupModal
        open={isNewsletterModalOpen}
        onOpenChange={setIsNewsletterModalOpen}
      />
    </main>
  );
};

export default MakeADonation;
