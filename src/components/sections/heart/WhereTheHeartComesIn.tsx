const CRIMSON = "#6e1428";

const STEPS = [
  {
    number: "01",
    title: "Gifts arrive",
    description: "Our community provides toys and fulfills holiday wishes.",
    offset: "",
    connector: "w-3 sm:w-7 lg:w-16",
  },
  {
    number: "02",
    title: "Resources stretch further",
    description: "Donated gifts allow limited funds to support needs beyond Christmas.",
    offset: "ml-0 sm:ml-7 lg:ml-16",
    connector: "w-2 sm:w-5 lg:w-10",
  },
  {
    number: "03",
    title: "Care continues",
    description: "Children receive support that helps them feel comfortable, confident, and included.",
    offset: "ml-0 sm:ml-12 lg:ml-[104px]",
  },
];

/* ---------- Line icons for the year-round care list ---------- */

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-9 w-9 sm:h-11 sm:w-11",
  "aria-hidden": true,
};

const ShirtIcon = () => (
  <svg {...iconProps}>
    <path d="M17 7 L8 12 L4 21 L11 24 L13 20 V41 H35 V20 L37 24 L44 21 L40 12 L31 7 C30 10 27.5 12 24 12 C20.5 12 18 10 17 7 Z" />
  </svg>
);

const SoapIcon = () => (
  <svg {...iconProps}>
    <path d="M20 4 H30 M25 4 V9 M21 9 H29 V14 H21 Z" />
    <rect x="15" y="14" width="20" height="30" rx="4" />
    <path d="M25 34 C21 31 19.5 29 19.5 27 C19.5 25 21 24 22.5 24 C23.6 24 24.4 24.6 25 25.5 C25.6 24.6 26.4 24 27.5 24 C29 24 30.5 25 30.5 27 C30.5 29 29 31 25 34 Z" />
  </svg>
);

const ShoeIcon = () => (
  <svg {...iconProps}>
    <path d="M4 34 C4 30 5 27 7 25 L15 24 C19 23 22 20 24 16 L28 17 C30 21 34 24 40 26 C43 27 45 29 45 32 V34 Z" />
    <path d="M4 34 V37 C4 38 5 39 6 39 H43 C44 39 45 38 45 37 V34" />
    <path d="M22 19 L25 21 M20 22 L23 24 M18 24 L21 26" />
  </svg>
);

const PeopleIcon = () => (
  <svg {...iconProps}>
    <path d="M24 3 V7 M15 6 L17 9 M33 6 L31 9" />
    <circle cx="24" cy="16" r="4" />
    <circle cx="12" cy="20" r="3.5" />
    <circle cx="36" cy="20" r="3.5" />
    <path d="M16 40 V32 C16 27.5 19.5 24 24 24 C28.5 24 32 27.5 32 32 V40" />
    <path d="M5 40 V33 C5 29.5 8 27 11.5 27 C13 27 14.3 27.4 15.4 28.2" />
    <path d="M43 40 V33 C43 29.5 40 27 36.5 27 C35 27 33.7 27.4 32.6 28.2" />
  </svg>
);

const CARE_ITEMS = [
  { icon: <ShirtIcon />, label: "Clothing that fits" },
  { icon: <SoapIcon />, label: "Personal-care essentials" },
  { icon: <ShoeIcon />, label: "Properly fitting shoes" },
  { icon: <PeopleIcon />, label: "Confidence-building experiences" },
];

/* ---------- Decorative ribbon tied into a heart ---------- */

const RibbonHeart = () => (
  <svg
    className="absolute inset-x-0 bottom-0 w-full h-auto pointer-events-none sm:left-auto sm:w-[60%] md:w-[44%] lg:inset-x-0 lg:w-full"
    viewBox="0 0 400 200"
    preserveAspectRatio="xMidYMax meet"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="purpose-ribbon" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#c4455f" stopOpacity="0.55" />
        <stop offset="60%" stopColor="#d9607a" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#c4455f" stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {/* Ribbon sweeping in from the left, looping into a heart, then out to the right */}
    <path
      d="M-10 20 C 80 40, 150 110, 230 150 C 280 175, 320 165, 330 130
         C 345 90, 360 45, 345 30 C 330 15, 305 25, 300 50
         C 290 25, 262 25, 258 50 C 252 85, 300 130, 330 160
         C 350 180, 380 190, 410 196"
      fill="none"
      stroke="url(#purpose-ribbon)"
      strokeWidth="9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Soft highlight along the ribbon for a satin feel */}
    <path
      d="M-10 18 C 80 38, 150 108, 230 148"
      fill="none"
      stroke="#f3a9b8"
      strokeOpacity="0.35"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/* ---------- Section ---------- */

export const WhereTheHeartComesIn = () => {
  return (
    <section
      id="where-the-heart-comes-in"
      data-section="where-the-heart-comes-in"
      className="w-full pt-4 pb-14 md:py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          {/* Left: purpose statement card */}
          <div
            className="relative overflow-hidden rounded-3xl px-7 pt-7 pb-44 sm:px-10 sm:pt-16 sm:pb-56 lg:pb-52"
            style={{ background: `linear-gradient(160deg, #7a1a30 0%, ${CRIMSON} 55%, #5e1022 100%)` }}
          >
            <span className="relative block font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-white/85">
              Our purpose
            </span>
            <h2
              className="relative mt-3 sm:mt-6 font-serif text-white leading-[1.05] tracking-tight text-[36px] min-[400px]:text-[40px] sm:text-[clamp(2.25rem,4vw,3.5rem)]"
            >
              Christmas is one morning. Feeling cared for should last all year.
            </h2>
            <p className="relative mt-4 sm:mt-6 font-sans text-[15px] sm:text-lg leading-snug sm:leading-relaxed text-white/85">
              Toy donations do more than fill a wish list. They help stretch limited funds so Joy Drop
              can respond to the everyday needs that shape a child&rsquo;s confidence, comfort, and
              well-being.
            </p>
            <RibbonHeart />
          </div>

          {/* Right: ripple effect timeline + year-round care */}
          <div className="flex flex-col lg:pt-10">
            <span
              className="font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.2em]"
              style={{ color: "#a2465a" }}
            >
              The ripple effect
            </span>

            <ol className="mt-4 sm:mt-6">
              {STEPS.map((step, i) => {
                const isLast = i === STEPS.length - 1;
                return (
                  <li key={step.number} className={`relative flex gap-4 sm:gap-6 pb-6 sm:pb-10 ${step.offset}`}>
                    {/* Curved connector to the next step's circle */}
                    {step.connector && (
                      <svg
                        className={`absolute left-6 top-12 h-[calc(100%-3rem)] sm:left-8 sm:top-16 sm:h-[calc(100%-4rem)] overflow-visible ${step.connector}`}
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M0 0 C -30 55, 100 45, 100 100"
                          fill="none"
                          stroke={CRIMSON}
                          strokeWidth="1.5"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    )}

                    {/* Final step trails down to a heart */}
                    {isLast && (
                      <svg
                        className="absolute left-[19px] top-12 h-10 w-6 sm:left-8 sm:top-16 sm:h-12 overflow-visible"
                        viewBox="0 0 24 48"
                        aria-hidden="true"
                      >
                        <path d="M0 0 C 2 12, 10 18, 10 32" fill="none" stroke={CRIMSON} strokeWidth="1.5" />
                        <path
                          d="M10 46 C 4 41 1 38 1 35 C 1 32.5 3 31 5 31 C 7 31 8.5 32 10 34 C 11.5 32 13 31 15 31 C 17 31 19 32.5 19 35 C 19 38 16 41 10 46 Z"
                          fill={CRIMSON}
                        />
                      </svg>
                    )}

                    <span
                      className="relative z-10 flex h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-full font-serif text-xl sm:text-2xl"
                      style={{ backgroundColor: "#f6dfe2", color: CRIMSON }}
                    >
                      {step.number}
                    </span>
                    <div className="sm:pt-1">
                      <h3
                        className="font-serif leading-tight text-[23px] min-[400px]:text-[26px] sm:text-[34px] lg:text-[38px]"
                        style={{ color: CRIMSON }}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-1 sm:mt-2 font-sans text-base sm:text-lg leading-snug sm:leading-relaxed text-foreground/85">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Year-round care */}
            <div className="mt-2 sm:mt-4 rounded-2xl px-4 py-6 sm:px-8 sm:py-7" style={{ backgroundColor: "#f7e4e5" }}>
              <span
                className="block font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.2em]"
                style={{ color: "#a2465a" }}
              >
                Year-round care can include
              </span>
              <ul className="mt-5 sm:mt-6 grid grid-cols-4 gap-y-8 lg:grid-cols-2 xl:grid-cols-4">
                {CARE_ITEMS.map((item, i) => (
                  <li
                    key={item.label}
                    className={`flex flex-col items-center gap-3 px-1 sm:px-3 text-center border-[#d9a9b1] ${
                      i > 0 ? "border-l" : ""
                    } ${i === 2 ? "lg:border-l-0 xl:border-l" : ""}`}
                  >
                    <span style={{ color: CRIMSON }}>{item.icon}</span>
                    <span className="font-sans text-[13px] min-[400px]:text-sm sm:text-base leading-snug text-foreground/85 max-sm:[hyphens:auto]" lang="en">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
