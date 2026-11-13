const CRIMSON = "#6e1428";

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "relative h-12 w-12 md:h-14 md:w-14",
  "aria-hidden": true,
};

const ClipboardChecklistIcon = () => (
  <svg {...iconProps}>
    <rect x="10" y="8" width="28" height="36" rx="4" />
    <rect x="18" y="4" width="12" height="7" rx="2" />
    <path d="M15 20 l2.5 2.5 l4 -4.5 M25 20 H 33" />
    <path d="M15 28 l2.5 2.5 l4 -4.5 M25 28 H 33" />
    <path d="M15 36 l2.5 2.5 l4 -4.5 M25 36 H 33" />
  </svg>
);

const BagCheckIcon = () => (
  <svg {...iconProps}>
    <path d="M17 16 V 12 a7 7 0 0 1 14 0 V 16" />
    <rect x="9" y="16" width="30" height="28" rx="5" />
    <path d="M18 30 l4.5 4.5 l8 -9" />
  </svg>
);

const GiftInHandIcon = () => (
  <svg {...iconProps}>
    {/* Gift */}
    <rect x="16" y="13" width="22" height="7" rx="1.5" />
    <path d="M18 20 V 29 H 36 V 20 M27 13 V 29" />
    <path d="M27 13 C 24 7, 18 8, 20.5 11.5 C 21.8 13, 27 13, 27 13 C 27 13, 32.2 13, 33.5 11.5 C 36 8, 30 7, 27 13" />
    {/* Sparkle dashes */}
    <path d="M9 9 L 12 11 M7 16 H 11 M10 4 L 12 7" />
    {/* Open hand underneath */}
    <path d="M4 38 L 12 33 C 14 32, 16 32, 18 33 L 24 35 C 26 35.6, 26 38, 24 38.2 L 18 38.5" />
    <path d="M18 38.5 L 29 38 L 40 32.5 C 42.5 31.3, 44.5 34, 42.5 35.8 L 32 43 C 30.5 44, 28.5 44.5, 26.5 44.2 L 13 42.5 L 6 44.5" />
  </svg>
);

const STEPS = [
  {
    number: "01",
    icon: <ClipboardChecklistIcon />,
    title: "Choose a Wish List",
    description:
      "Once you receive your Joy Drop invitation, browse children's wish lists and select the one—or several—you'd like to fulfill.",
  },
  {
    number: "02",
    icon: <BagCheckIcon />,
    title: "Shop & Mark Purchased",
    description:
      "Buy items through the app or from your preferred retailer, then mark each gift as purchased.",
  },
  {
    number: "03",
    icon: <GiftInHandIcon />,
    title: "Drop Off Your Gifts",
    description:
      "Bring your items to the designated drop-off. Our volunteers will wrap, prepare, and hand-deliver each gift with care.",
  },
];

/** Soft ribbon loops drifting behind the panel content. */
const PanelRibbons = () => (
  <svg
    className="absolute inset-0 h-full w-full pointer-events-none"
    viewBox="0 0 1440 800"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <g fill="none" stroke="#b03a58" strokeOpacity="0.35" strokeLinecap="round">
      {/* Left sweep */}
      <path d="M-40 120 C 150 120, 260 220, 300 420 M-40 600 C 80 520, 170 470, 260 450" strokeWidth="18" />
      {/* Right loop */}
      <path
        d="M1080 470 C 1200 400, 1300 330, 1320 230 C 1340 130, 1260 80, 1210 130 C 1150 190, 1220 330, 1300 400 C 1360 450, 1420 480, 1480 520"
        strokeWidth="18"
      />
    </g>
  </svg>
);

export const FulfillWishSteps = () => {
  return (
    <section aria-labelledby="fulfill-wish-heading" className="pt-0 md:pt-20 pb-16 sm:pb-20">
      <div
        className="relative overflow-hidden px-4 pt-0 pb-14 sm:px-6 md:py-20 lg:px-8"
        style={{
          background:
            "radial-gradient(ellipse at 30% 0%, rgba(160, 40, 70, 0.55) 0%, transparent 55%), linear-gradient(180deg, #7a1a32 0%, #6a1429 55%, #5e1022 100%)",
        }}
      >
        <PanelRibbons />

        <div className="relative mx-auto max-w-6xl">
          {/* Header - sits on cream above a wavy edge on phones, inside the crimson panel from md up */}
          <div className="relative z-10 -mx-4 bg-background px-4 pb-6 pt-8 text-center sm:-mx-6 sm:px-6 md:mx-0 md:bg-transparent md:p-0 md:text-white">
            <span className="block font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-[#a2283f] md:text-white/85">
              Three simple steps
            </span>
            <h2
              id="fulfill-wish-heading"
              className="mt-3 md:mt-4 font-serif text-[#2e1a17] md:text-white leading-[1.02] md:leading-[1.05] tracking-tight text-[44px] md:text-[clamp(2.25rem,4.5vw,3.75rem)]"
            >
              How Fulfilling a Wish Works
            </h2>
            <p className="mx-auto mt-3 max-w-[340px] font-sans text-base sm:text-lg md:max-w-none md:text-xl text-foreground/80 md:text-white/90">
              Choose a wish. Shop with ease. We&rsquo;ll take care of the final handoff.
            </p>

            {/* Wavy cream edge dipping into the crimson panel (phones only) */}
            <svg
              className="absolute inset-x-0 top-full h-10 w-full text-background md:hidden"
              viewBox="0 0 400 40"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 0 H400 V10 C 330 -6, 270 34, 200 30 C 130 26, 80 4, 0 18 Z" fill="currentColor" />
            </svg>
          </div>

          {/* Steps */}
          <ol className="relative mt-16 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
            {/* Thin line linking the number badges across the cards */}
            <span
              className="absolute left-[16%] right-[16%] top-0 hidden h-px bg-[#f3c9d0]/60 md:block"
              aria-hidden="true"
            />

            {STEPS.map((step) => (
              <li
                key={step.number}
                className="relative flex flex-row items-center gap-3.5 rounded-2xl bg-gradient-to-b from-[#fdf6f5] to-[#f9e8ea] px-4 pt-9 pb-6 text-left shadow-[0_20px_40px_-20px_rgba(30,0,10,0.6)] sm:px-6 md:flex-col md:gap-0 md:px-8 md:pt-12 md:pb-10 md:text-center"
              >
                <span
                  className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#f3c9d0]/70 bg-[#fbe6e9] font-serif text-xl md:-top-8 md:h-16 md:w-16 md:text-2xl"
                  style={{ color: CRIMSON }}
                >
                  {step.number}
                </span>

                {/* Icon with soft blush halo */}
                <span className="relative flex h-20 w-20 shrink-0 items-center justify-center md:mt-2" style={{ color: CRIMSON }}>
                  <span className="absolute inset-0 rounded-full bg-[#f6dfe2] md:inset-2" aria-hidden="true" />
                  {step.icon}
                </span>

                <div className="min-w-0 md:contents">
                  <h3
                    className="font-serif text-[22px] min-[400px]:text-[24px] leading-tight text-foreground sm:text-[28px] md:mt-4 md:text-[24px] lg:text-[27px] xl:text-[30px]"
                  >
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-[340px] font-sans text-[15px] sm:text-base leading-snug text-foreground/75 md:mt-3 md:leading-relaxed lg:text-lg">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
