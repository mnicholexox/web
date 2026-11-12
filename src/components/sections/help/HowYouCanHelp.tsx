import { ArrowRight, Gift, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants";

const CRIMSON = "#6e1428";

type Variant = "crimson" | "outline" | "blush";

interface HelpOption {
  badge: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  to: string;
  variant: Variant;
}

/** Two raised hands with a small heart above them. */
const RAISED_HAND =
  "M21 44 C 15 41 10 35 8 28 L 5 20 C 4.2 18 5 16.6 6.4 16.2 C 7.8 15.8 9 16.6 9.6 18 L 11.5 23 " +
  "M11.5 24 V 10.5 C 11.5 9 12.5 8 13.75 8 C 15 8 16 9 16 10.5 V 22 " +
  "M16 21 V 8 C 16 6.5 17 5.5 18.25 5.5 C 19.5 5.5 20.5 6.5 20.5 8 V 22 " +
  "M20.5 22 V 10.5 C 20.5 9 21.5 8 22.6 8 C 23.7 8 24.6 9 24.6 10.5 V 30 C 24.6 36 23.5 40 21 44";

const HandsUpIcon = () => (
  <svg
    className="h-12 w-12"
    viewBox="0 0 52 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <g transform="translate(-1 2)">
      <path d={RAISED_HAND} />
    </g>
    <g transform="translate(53 2) scale(-1 1)">
      <path d={RAISED_HAND} />
    </g>
    <path d="M26 11 C 23 8.6 21.5 7 21.5 5.2 C 21.5 3.6 22.7 2.5 24 2.5 C 24.9 2.5 25.6 3 26 3.7 C 26.4 3 27.1 2.5 28 2.5 C 29.3 2.5 30.5 3.6 30.5 5.2 C 30.5 7 29 8.6 26 11 Z" />
  </svg>
);

const OPTIONS: HelpOption[] = [
  {
    badge: "Most direct",
    icon: <Gift className="h-11 w-11" strokeWidth={1.5} />,
    title: "Fulfill a Wish",
    description: "Choose a child's wish list and shop for the gifts they're hoping for.",
    ctaText: "Choose a wish list",
    to: ROUTES.SPONSOR_A_CHILD,
    variant: "crimson",
  },
  {
    badge: "Most flexible",
    icon: <HandHeart className="h-11 w-11" strokeWidth={1.5} />,
    title: "Fund What's Needed",
    description:
      "Help cover unclaimed wishes, clothing, personal-care essentials, and last-minute needs.",
    ctaText: "Make a donation",
    to: `${ROUTES.MAKE_A_DONATION}#pre-loved-impact`,
    variant: "outline",
  },
  {
    badge: "Hands-on",
    icon: <HandsUpIcon />,
    title: "Give Your Time",
    description:
      "Help collect, organize, wrap, or deliver gifts alongside the Joy Drop community.",
    ctaText: "Volunteer with us",
    to: ROUTES.VOLUNTEER,
    variant: "blush",
  },
];

const VARIANT_STYLES: Record<
  Variant,
  { card: string; badge: string; iconCircle: string; rays: string; title: string; body: string; button: string }
> = {
  crimson: {
    card: "text-white shadow-xl",
    badge: "bg-[#f3d3d8] text-[#6e1428]",
    iconCircle: "bg-[#f6dfe2] text-[#6e1428]",
    rays: "text-white/70",
    title: "text-white",
    body: "text-white/90",
    button: "bg-white text-[#6e1428] hover:bg-[#fbeef0]",
  },
  outline: {
    card: "bg-[#fffdfb] border border-[#c98a96] shadow-sm",
    badge: "bg-[#f6dfe2] text-[#6e1428]",
    iconCircle: "bg-[#f6dfe2] text-[#6e1428]",
    rays: "text-[#c98a96]",
    title: "text-foreground",
    body: "text-foreground/75",
    button: "bg-[#8a2e45] text-white hover:bg-[#7a2238]",
  },
  blush: {
    card: "bg-[#f6dfe0] shadow-sm",
    badge: "bg-white text-[#6e1428]",
    iconCircle: "bg-white text-[#6e1428]",
    rays: "text-[#c98a96]",
    title: "text-foreground",
    body: "text-foreground/75",
    button: "bg-[#8a2e45] text-white hover:bg-[#7a2238]",
  },
};

/** Little burst lines on either side of the icon circle. */
const Rays = ({ side }: { side: "left" | "right" }) => (
  <svg
    className={`h-10 w-6 ${side === "right" ? "-scale-x-100" : ""}`}
    viewBox="0 0 24 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M14 8 L20 13 M4 20 H18 M14 32 L20 27" />
  </svg>
);

/** Satin ribbon curling across the top-left corner of the featured card. */
const CornerRibbon = () => (
  <svg
    className="absolute left-0 top-0 h-48 w-48 pointer-events-none"
    viewBox="0 0 200 200"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="help-ribbon" x1="1" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#e7889b" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#b8435c" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    <path
      d="M170 -10 C 150 50, 90 60, 50 90 C 20 112, 5 150, -5 200 L -5 240 C 10 170, 40 128, 75 105 C 115 80, 170 60, 200 -10 Z"
      fill="url(#help-ribbon)"
      opacity="0.75"
    />
  </svg>
);

const HelpCard = ({ option }: { option: HelpOption }) => {
  const styles = VARIANT_STYLES[option.variant];

  return (
    <article
      className={`relative flex flex-col items-center overflow-hidden rounded-3xl px-6 pt-16 pb-8 text-center sm:px-8 lg:px-6 xl:px-8 ${styles.card}`}
      style={
        option.variant === "crimson"
          ? { background: `linear-gradient(160deg, #7a1a30 0%, ${CRIMSON} 60%, #5e1022 100%)` }
          : undefined
      }
    >
      {option.variant === "crimson" && <CornerRibbon />}

      <span
        className={`absolute right-6 top-6 rounded-full px-4 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] ${styles.badge}`}
      >
        {option.badge}
      </span>

      <div className="relative mt-4 flex items-center gap-2">
        <span className={styles.rays}>
          <Rays side="left" />
        </span>
        <span className={`flex h-24 w-24 items-center justify-center rounded-full ${styles.iconCircle}`}>
          {option.icon}
        </span>
        <span className={styles.rays}>
          <Rays side="right" />
        </span>
      </div>

      <h3 className={`relative mt-6 font-serif text-[30px] leading-tight sm:text-[34px] ${styles.title}`}>
        {option.title}
      </h3>
      <p className={`relative mt-3 max-w-[300px] font-sans text-base leading-relaxed sm:text-lg ${styles.body}`}>
        {option.description}
      </p>

      {/* Spacer keeps buttons aligned along the bottom when cards share a row */}
      <div className="min-h-8 flex-1" aria-hidden="true" />

      <Link
        to={option.to}
        className={`relative inline-flex w-full max-w-[340px] items-center justify-center gap-3 rounded-full px-6 py-4 whitespace-nowrap font-sans text-sm font-semibold uppercase tracking-[0.14em] lg:px-4 lg:text-[13px] lg:tracking-[0.1em] xl:px-6 xl:text-base xl:tracking-[0.14em] shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98a96] focus-visible:ring-offset-2 sm:text-base lg:text-[13px] xl:text-base ${styles.button}`}
      >
        {option.ctaText}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
};

export const HowYouCanHelp = () => {
  const scrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const contact = document.getElementById("contact");
    if (contact) {
      event.preventDefault();
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="how-you-can-help"
      data-section="how-you-can-help"
      className="w-full py-14 md:py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span
            className="block font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.3em]"
            style={{ color: "#a2465a" }}
          >
            Make a difference
          </span>
          <h2
            className="mt-4 font-serif text-foreground leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Choose how you&rsquo;ll show up.
          </h2>
          <p className="mt-4 mx-auto max-w-2xl font-sans text-base sm:text-lg leading-relaxed text-foreground/70">
            Whether you shop, give, or volunteer, every contribution helps a child feel remembered.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 md:mt-14 grid gap-6 mx-auto max-w-xl lg:max-w-none lg:grid-cols-3 lg:gap-6 xl:gap-7">
          {OPTIONS.map((option) => (
            <HelpCard key={option.title} option={option} />
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="font-sans text-sm sm:text-base text-foreground/65">
            Not sure where to begin? We&rsquo;ll help you find the right fit.
          </p>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="mt-2 inline-flex items-center gap-2 border-b border-current pb-0.5 font-sans text-sm font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-80"
            style={{ color: CRIMSON }}
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
