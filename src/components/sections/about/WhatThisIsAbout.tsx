const STATS = [
  { eyebrow: "Since", value: "2022", label: "A growing tradition of giving" },
  { value: "232", label: "Children supported" },
  { value: "$2,800+", label: "Directed to gifts & essentials" },
];

/** Soft, translucent ribbon that flows across the bottom of the stats panel. */
const RibbonWaves = () => (
  <svg
    className="absolute inset-x-0 bottom-0 h-[30%] md:h-[60%] w-full pointer-events-none"
    viewBox="0 0 1200 240"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ribbon-fade" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#f3b7c0" stopOpacity="0.25" />
        <stop offset="50%" stopColor="#f3b7c0" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#f3b7c0" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    {/* Lower ribbon - a band of fine strands reads as satin */}
    {Array.from({ length: 14 }).map((_, i) => (
      <path
        key={`low-${i}`}
        d={`M-20 ${70 + i * 3} C 220 ${40 + i * 5}, 330 ${210 - i * 4}, 600 ${150 - i * 2} S 980 ${60 + i * 4}, 1220 ${110 + i * 3}`}
        fill="none"
        stroke="url(#ribbon-fade)"
        strokeWidth="2"
      />
    ))}
    {/* Upper-right ribbon sweeping up and out of the panel */}
    {Array.from({ length: 10 }).map((_, i) => (
      <path
        key={`high-${i}`}
        d={`M760 ${240 - i * 3} C 900 ${170 - i * 4}, 980 ${-10 + i * 3}, 1220 ${-30 + i * 4}`}
        fill="none"
        stroke="url(#ribbon-fade)"
        strokeWidth="2"
      />
    ))}
  </svg>
);

/** Ribbon tied into a heart, used on the promise card. */
const RibbonHeart = () => (
  <svg
    className="absolute right-0 bottom-0 h-full w-[55%] pointer-events-none"
    viewBox="0 0 200 180"
    preserveAspectRatio="xMaxYMax meet"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="heart-ribbon" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#c76b7c" />
        <stop offset="100%" stopColor="#e8a3ae" />
      </linearGradient>
    </defs>
    <path
      d="M150 92 C 120 74, 102 52, 112 34 C 120 20, 140 22, 148 38 C 154 22, 176 18, 184 32 C 194 50, 176 74, 150 92 Z"
      fill="none"
      stroke="url(#heart-ribbon)"
      strokeWidth="4"
      strokeLinejoin="round"
      opacity="0.85"
    />
    <path
      d="M150 92 C 166 104, 186 96, 210 84 M150 92 C 128 116, 96 140, 40 178"
      fill="none"
      stroke="url(#heart-ribbon)"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

export const WhatThisIsAbout = () => {
  return (
    <section
      id="what-this-is-about"
      data-section="what-this-is-about"
      className="w-full py-14 md:py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro: headline + supporting copy */}
        <div className="xl:px-12">
          <span className="block font-sans text-[11px] md:text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground/80">
            Why Joy Drop
          </span>

          <div className="mt-5 md:mt-7 grid gap-6 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,320px)] lg:gap-10 lg:items-center">
            <h2
              className="font-serif text-foreground leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2rem, 3.4vw, 3rem)" }}
            >
              A wish list is more than a list.{" "}
              <br className="hidden lg:block" />
              It&rsquo;s a child feeling remembered.
            </h2>
            <div className="hidden lg:block w-px self-stretch bg-foreground/15" aria-hidden="true" />
            <p className="font-sans text-base md:text-lg leading-relaxed text-muted-foreground">
              Since 2022, our community has come together to fulfill real wishes for children who
              deserve to feel celebrated, supported, and cared for.
            </p>
          </div>
        </div>

        {/* Impact panel */}
        <div className="relative mt-10 md:mt-14 xl:mb-8">
          <div
            className="relative overflow-hidden rounded-3xl px-6 pt-10 pb-24 sm:px-10 md:pb-28 xl:pr-[24%]"
            style={{ background: "linear-gradient(135deg, #7a2335 0%, #6a1a2b 55%, #5e1626 100%)" }}
          >
            <RibbonWaves />

            <div className="relative z-10 grid gap-10 md:grid-cols-3 md:gap-0 text-center">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center justify-end md:px-6 ${
                    i > 0 ? "md:border-l md:border-white/20" : ""
                  }`}
                >
                  {stat.eyebrow && (
                    <span className="font-sans text-xs md:text-sm uppercase tracking-[0.35em] text-white/80">
                      {stat.eyebrow}
                    </span>
                  )}
                  <p className="mt-1 font-serif text-white leading-none text-[56px] sm:text-[60px] lg:text-[72px] xl:text-[76px] tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-3 font-sans text-base md:text-lg text-white/90 xl:whitespace-nowrap">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Promise card - overlaps the panel's corner on extra-wide screens, sits below it otherwise */}
          <aside
            className="relative -mt-12 mx-4 sm:mx-8 overflow-hidden rounded-2xl p-6 pr-24 shadow-xl md:mx-auto md:max-w-md xl:absolute xl:mx-0 xl:mt-0 xl:-right-6 xl:-bottom-8 xl:w-[340px] xl:max-w-none xl:p-7 xl:pr-24"
            style={{ backgroundColor: "#f6dfe0" }}
          >
            <RibbonHeart />
            <span className="relative block font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Our promise
            </span>
            <p className="relative mt-3 font-sans text-base md:text-lg leading-snug text-foreground">
              Every contribution becomes a thoughtfully chosen gift, wrapped with care and
              hand-delivered.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};
