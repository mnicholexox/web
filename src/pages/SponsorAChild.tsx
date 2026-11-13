import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, CalendarHeart, Gift, Heart, Minus, Plus, Search, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants";
import { cn } from "@/lib/utils";
import { NewsletterSignupModal } from "@/components/sections/newsletter";
import { FulfillWishSteps } from "@/components/sections/how-it-works";

/** Clipboard with a heart on it. */
const ClipboardHeartIcon = () => (
  <svg
    className="h-6 w-6 sm:h-8 sm:w-8"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="6" y="6" width="20" height="23" rx="3" />
    <rect x="11.5" y="3" width="9" height="5" rx="1.5" />
    <path d="M16 23.5 C 13 21.3 11 19.5 11 17.3 C 11 15.8 12.1 14.8 13.4 14.8 C 14.5 14.8 15.4 15.4 16 16.3 C 16.6 15.4 17.5 14.8 18.6 14.8 C 19.9 14.8 21 15.8 21 17.3 C 21 19.5 19 21.3 16 23.5 Z" />
  </svg>
);

const FAQS = [
  {
    icon: <ClipboardHeartIcon />,
    question: "Can I fulfill more than one wish list?",
    answer:
      "Absolutely. You can choose one or several wish lists based on what feels manageable for you.",
  },
  {
    icon: <Search className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={1.8} />,
    question: "What if an item is unavailable?",
    answer:
      "Please contact Joy Drop before choosing a substitute. We'll help you find an approved alternative that still fits the child's request.",
  },
];

/** Red envelope of wishlist tags tied with a satin bow. */
const OpeningSoonIllustration = () => (
  <svg
    className="mx-auto block w-full max-w-[290px] lg:max-w-[320px]"
    viewBox="0 0 340 300"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="os-env" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#b8263f" />
        <stop offset="100%" stopColor="#8a1428" />
      </linearGradient>
      <linearGradient id="os-ribbon" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#f3a3ad" />
        <stop offset="55%" stopColor="#e07a88" />
        <stop offset="100%" stopColor="#c4566a" />
      </linearGradient>
      <filter id="os-shadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#6e1428" floodOpacity="0.22" />
      </filter>
    </defs>

    {/* Sparkles */}
    <g fill="#e1a24f">
      <path d="M290 16 l3 9 l9 3 l-9 3 l-3 9 l-3 -9 l-9 -3 l9 -3 Z" />
      <path d="M306 46 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 Z" />
      <path d="M62 86 l2.5 7 l7 2.5 l-7 2.5 l-2.5 7 l-2.5 -7 l-7 -2.5 l7 -2.5 Z" />
      <path d="M40 118 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 Z" />
    </g>

    {/* Pine sprigs and berries */}
    <g stroke="#4d6b3a" strokeWidth="2" strokeLinecap="round" fill="none">
      <path d="M92 250 L 40 196 M80 238 l-14 -2 M80 238 l-2 -14 M68 225 l-14 -2 M68 225 l-2 -14 M56 212 l-13 -2 M56 212 l-2 -13" />
      <path d="M248 250 L 300 196 M260 238 l14 -2 M260 238 l2 -14 M272 225 l14 -2 M272 225 l2 -14 M284 212 l13 -2 M284 212 l2 -13" />
    </g>
    <g fill="#c62a3a">
      <circle cx="78" cy="252" r="5" /><circle cx="68" cy="246" r="4.5" /><circle cx="74" cy="262" r="4" />
      <circle cx="264" cy="252" r="5" /><circle cx="274" cy="246" r="4.5" /><circle cx="268" cy="262" r="4" />
    </g>

    <g filter="url(#os-shadow)">
      {/* Envelope back */}
      <path d="M88 132 L 170 104 L 252 132 V 270 H 88 Z" fill="#9a1a30" />

      {/* Wishlist tags peeking out */}
      <g fill="#fbf1e6" stroke="#e7d3c3" strokeWidth="1.5">
        <path d="M100 82 l18 -14 h28 l14 14 v96 h-60 Z" transform="rotate(-10 130 120)" />
        <path d="M144 52 l14 -14 h24 l14 14 v124 h-52 Z" />
        <path d="M188 82 l14 -14 h28 l18 14 v96 h-60 Z" transform="rotate(10 210 120)" />
      </g>
      <g stroke="#c43a4f" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <path d="M156 78 l4 4 l8 -9 M174 78 h14 M156 98 l4 4 l8 -9 M174 98 h14" />
        <path d="M112 116 l4 4 l7 -8 M128 112 l14 -4 M116 136 l4 4 l7 -8 M132 132 l12 -3" transform="rotate(-10 130 120)" />
        <path d="M200 112 l14 4 M204 130 l12 3" transform="rotate(10 210 120)" />
      </g>
      {/* Tag strings with little bows */}
      <g stroke="#d4465c" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <circle cx="170" cy="46" r="4" />
        <path d="M170 42 C 160 28, 150 26, 156 20 C 162 16, 168 30, 170 38 C 172 30, 178 16, 184 20 C 190 26, 180 28, 170 42" />
        <path d="M118 70 C 110 58, 102 58, 106 52 C 110 48, 116 60, 118 66 C 120 60, 126 48, 130 52 C 134 58, 126 58, 118 70" />
        <path d="M222 70 C 214 58, 206 58, 210 52 C 214 48, 220 60, 222 66 C 224 60, 230 48, 234 52 C 238 58, 230 58, 222 70" />
      </g>

      {/* Envelope front */}
      <path d="M88 150 L 170 206 L 252 150 V 270 H 88 Z" fill="url(#os-env)" />
      <path d="M88 270 L 152 214 M252 270 L 188 214" stroke="#7a1022" strokeOpacity="0.35" strokeWidth="1.5" />

      {/* Ribbon band and bow */}
      <rect x="88" y="190" width="164" height="18" fill="url(#os-ribbon)" />
      <path d="M170 198 C 140 168, 112 172, 118 194 C 122 210, 150 206, 170 198 Z" fill="url(#os-ribbon)" />
      <path d="M170 198 C 200 168, 228 172, 222 194 C 218 210, 190 206, 170 198 Z" fill="url(#os-ribbon)" />
      <path d="M164 204 L 146 250 L 156 246 L 160 258 L 170 210 Z" fill="#d76a7b" />
      <path d="M176 204 L 190 246 L 180 244 L 178 256 L 168 210 Z" fill="#c95a6c" />
      <ellipse cx="170" cy="199" rx="10" ry="9" fill="#e98a97" />

      {/* Opening soon tag */}
      <g transform="rotate(14 230 236)">
        <path d="M196 214 h64 l12 12 v24 l-12 12 h-64 Z" fill="#fbf1e6" stroke="#d9bfa8" strokeWidth="1.5" />
        <circle cx="204" cy="238" r="3.5" fill="#6e1428" />
        <text x="236" y="234" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="14" fill="#5a1a24" letterSpacing="1">OPENING</text>
        <text x="236" y="251" textAnchor="middle" fontFamily="DM Serif Display, serif" fontSize="14" fill="#5a1a24" letterSpacing="1">SOON</text>
      </g>
    </g>
  </svg>
);

const SponsorAChild = () => {
  const [openFaqs, setOpenFaqs] = useState<number[]>(() => FAQS.map((_, i) => i));
  const toggleFaq = (index: number) =>
    setOpenFaqs((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  // TODO: This would come from your data source (API, context, etc.)
  const wishlistsAvailable = false;
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [notifyMethod, setNotifyMethod] = useState<"email" | "text">("text");
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyPhone, setNotifyPhone] = useState("");
  const [textConsent, setTextConsent] = useState(false);

  // The inline form hands off to the full signup modal, prefilled
  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterModalOpen(true);
  };

  // Shows the phone as (555) 123-4567 while typing
  const formatUsPhone = (value: string) => {
    const d = value.replace(/\D/g, "").slice(0, 10);
    if (d.length <= 3) return d;
    if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  };
  const navigate = useNavigate();
  const giftCategories = [
    {
      icon: <Gift className="h-7 w-7" strokeWidth={1.6} />,
      title: "Something They Want",
      description: "A special toy, game, or item they've been dreaming about.",
    },
    {
      icon: <Star className="h-7 w-7" strokeWidth={1.6} />,
      title: "Something They Need",
      description: "Practical essentials such as school supplies or personal-care items.",
    },
    {
      icon: <Heart className="h-7 w-7" strokeWidth={1.6} />,
      title: "Something to Wear",
      description: "A warm jacket, cozy pajamas, or an outfit that makes them feel special.",
    },
    {
      icon: <BookOpen className="h-7 w-7" strokeWidth={1.6} />,
      title: "Something to Read",
      description: "A book that sparks imagination and opens the door to a new world.",
    },
  ];

  const sampleChildren = [
    {
      initial: "E",
      age: 7,
      interests: ["Dinosaurs", "Building blocks", "Art"],
      itemsNeeded: 4,
      color: "from-primary/10 to-accent/10",
    },
    {
      initial: "M",
      age: 10,
      interests: ["Soccer", "Reading", "Animals"],
      itemsNeeded: 3,
      color: "from-accent/10 to-primary/10",
    },
    {
      initial: "S",
      age: 5,
      interests: ["Princesses", "Puzzles", "Music"],
      itemsNeeded: 5,
      color: "from-primary/8 to-secondary/10",
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

      {/* Coming Soon Notice */}
      {!wishlistsAvailable && (
        <section aria-labelledby="wishlists-opening-heading" className="px-4 sm:px-6 md:px-8 pb-4">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[#efdcd9] bg-[#fdf4f2] px-5 py-8 shadow-[0_18px_50px_-24px_rgba(110,20,40,0.22)] sm:px-12 sm:py-12 lg:px-16">
            <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)] xl:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
              {/* On phones the copy, illustration and form stack in that order */}
              <div className="contents lg:block">
                <div className="order-1 text-center sm:text-left lg:order-none">
                <span className="inline-block rounded-full bg-[#f6d9de] px-5 py-2 font-sans text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-[#8a1f38]">
                  Opening November 2026
                </span>
                <h2
                  id="wishlists-opening-heading"
                  className="mt-5 font-serif text-[#3a2420] leading-[1.02] tracking-tight text-[33px] min-[400px]:text-[36px] sm:text-[clamp(2.25rem,4.6vw,3.75rem)]"
                >
                  Angel Tree wishlists <br />
                  are opening soon.
                </h2>
                <p className="mx-auto mt-3 max-w-[300px] font-sans text-lg sm:mx-0 sm:max-w-none md:text-xl text-foreground/75 sm:text-foreground/80">
                  Choose how you&rsquo;d like to be notified when they go live.
                </p>
                </div>

                <form onSubmit={handleNotifySubmit} className="order-3 lg:order-none lg:mt-6">
                  <fieldset>
                    <legend className="font-sans text-base sm:text-lg text-foreground/85">Send updates by</legend>
                    <div className="mt-2 flex flex-wrap gap-x-12 gap-y-2">
                      {(["email", "text"] as const).map((method) => (
                        <label key={method} className="flex cursor-pointer items-center gap-3 font-sans text-base sm:text-lg text-foreground">
                          <input
                            type="radio"
                            name="notify-method"
                            value={method}
                            checked={notifyMethod === method}
                            onChange={() => setNotifyMethod(method)}
                            className="h-6 w-6 cursor-pointer accent-[#8a1f38]"
                          />
                          {method === "email" ? "Email" : "Text message"}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <label
                    htmlFor={notifyMethod === "email" ? "wishlist-notify-email" : "wishlist-notify-phone"}
                    className="mt-5 block font-sans text-base sm:text-lg text-foreground/85"
                  >
                    {notifyMethod === "email" ? "Email address" : "Mobile phone number"}
                  </label>
                  <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-5">
                    {notifyMethod === "email" ? (
                      <input
                        id="wishlist-notify-email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="you@example.com"
                        value={notifyEmail}
                        onChange={(e) => setNotifyEmail(e.target.value)}
                        className="h-14 w-full rounded-xl border border-[#e0bcc3] bg-white px-5 font-sans text-base sm:text-lg text-foreground placeholder:text-[#a6878d] transition-colors focus-visible:border-[#b8556b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8556b]/25 sm:max-w-[400px]"
                      />
                    ) : (
                      <div className="flex h-14 w-full items-center rounded-xl border border-[#e0bcc3] bg-white transition-colors focus-within:border-[#b8556b] focus-within:ring-2 focus-within:ring-[#b8556b]/25 sm:max-w-[400px]">
                        <span className="flex h-8 items-center border-r border-[#e0bcc3] px-5 font-sans text-base sm:text-lg font-semibold text-[#6e1428]" aria-hidden="true">
                          +1
                        </span>
                        <input
                          id="wishlist-notify-phone"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel-national"
                          required
                          pattern="\(\d{3}\) \d{3}-\d{4}"
                          title="Enter a 10-digit US phone number"
                          placeholder="(555) 123-4567"
                          value={notifyPhone}
                          onChange={(e) => setNotifyPhone(formatUsPhone(e.target.value))}
                          className="h-full w-full min-w-0 rounded-r-xl bg-transparent px-4 font-sans text-base sm:text-lg text-foreground placeholder:text-[#a6878d] focus-visible:outline-none"
                        />
                      </div>
                    )}
                    <button
                      type="submit"
                      className="inline-flex h-14 flex-shrink-0 items-center justify-center rounded-xl px-8 font-sans text-sm sm:text-base font-medium uppercase tracking-[0.18em] text-white shadow-md transition-[filter] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8556b] focus-visible:ring-offset-2"
                      style={{ background: "linear-gradient(180deg, #8a1f38 0%, #6e1428 100%)" }}
                    >
                      {notifyMethod === "email" ? "Email me updates" : "Text me updates"}
                    </button>
                  </div>

                  {notifyMethod === "text" && (
                    <div className="mt-5">
                      <label className="flex cursor-pointer items-start gap-3 font-sans text-base sm:text-lg text-foreground">
                        <input
                          type="checkbox"
                          required
                          checked={textConsent}
                          onChange={(e) => setTextConsent(e.target.checked)}
                          className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#8a1f38]"
                        />
                        I agree to receive text updates from JoyDrop.
                      </label>
                      <p className="mt-1.5 pl-8 font-sans text-sm sm:text-base text-[#a2283f]">
                        Message &amp; data rates may apply. Reply STOP to unsubscribe.
                      </p>
                    </div>
                  )}
                </form>
              </div>

              <div className="order-2 sm:hidden lg:block lg:order-none">
                <OpeningSoonIllustration />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How Fulfilling a Wish Works */}
      <FulfillWishSteps />

      {/* Available Children Preview Section - Only shown when wishlists are available */}
      {wishlistsAvailable && (
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-[1200px] mx-auto px-6 md:px-8">
            {/* Section Header */}
            <div className="text-center mb-10 sm:mb-14">
              <span className="inline-block text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-primary/60 mb-3">
                Preview
              </span>
              <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] text-foreground leading-tight tracking-tight mb-4">
                Children You Can Sponsor
              </h2>
              <p className="text-foreground/70 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Each child has a unique story and wishlist. When wishlists become available, 
                you'll be able to choose someone to support this holiday season.
              </p>
            </div>

            {/* Child Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {sampleChildren.map((child, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative p-6 sm:p-8",
                    "bg-background rounded-2xl",
                    "border border-border/30",
                    "transition-all duration-300",
                    "hover:shadow-xl hover:shadow-primary/8",
                    "hover:border-primary/30",
                    "hover:-translate-y-1",
                    "cursor-pointer group"
                  )}
                >
                  {/* Child Avatar/Initial */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={cn(
                      "flex items-center justify-center",
                      "w-14 h-14 rounded-full",
                      "bg-gradient-to-br",
                      child.color,
                      "border border-primary/10"
                    )}>
                      <span className="font-serif text-2xl text-foreground/80">
                        {child.initial}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Age {child.age}</p>
                      <p className="text-sm text-muted-foreground">
                        {child.itemsNeeded} items on wishlist
                      </p>
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="mb-5">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Interests
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {child.interests.map((interest, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-primary/8 text-foreground/80"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full mt-2",
                      "rounded-full",
                      "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 group-hover:border-primary/50"
                    )}
                  >
                    View Wishlist
                  </Button>
                </div>
              ))}
            </div>

            {/* View All CTA */}
            <div className="text-center">
              <Button
                className={cn(
                  "rounded-full",
                  "px-8 py-6",
                  "font-medium text-base",
                  "bg-primary text-primary-foreground transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90 shadow-sm hover:shadow-md hover:shadow-primary/20"
                )}
              >
                <Heart className="w-4 h-4 mr-2" strokeWidth={2} />
                Browse All Children
              </Button>
              <p className="text-muted-foreground text-sm mt-4">
                New children are added regularly as families are referred to our program.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* The Gift of Giving */}
      <section aria-labelledby="wish-list-contents-heading" className="pt-10 pb-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:gap-10 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12 lg:items-start">
            {/* Left column (its pieces reorder around the basket below desktop width) */}
            <div className="contents lg:block">
              <div className="order-1 text-center sm:text-left lg:order-none">
              <span className="block font-sans text-xs sm:text-sm font-semibold sm:font-medium uppercase tracking-[0.3em] text-[#a2465a]">
                The Gift of Giving
              </span>
              <h2
                id="wish-list-contents-heading"
                className="mt-2 sm:mt-4 font-serif text-foreground leading-[1.02] sm:leading-[1.05] tracking-tight text-[44px] sm:text-[clamp(2.5rem,4.1vw,3.75rem)]"
              >
                What&rsquo;s on a <br className="sm:hidden" />
                Wish List
              </h2>
              <p className="mx-auto mt-3 max-w-[560px] font-sans text-base sm:text-lg leading-snug sm:leading-relaxed text-foreground/75 sm:mx-0 sm:mt-5 sm:text-foreground/70">
                Every wish list is thoughtfully created to balance delight with everyday support. By
                fulfilling one, you&rsquo;re helping create a holiday that feels joyful, personal, and
                complete.
              </p>
              </div>

              <ul className="order-3 -mx-1 grid grid-cols-2 gap-2 sm:mx-0 sm:gap-5 lg:order-none lg:mt-10">
                {giftCategories.map((category) => (
                  <li
                    key={category.title}
                    className="flex items-start gap-2 rounded-2xl border border-[#f1e6e3] bg-white/80 py-3 pl-2.5 pr-2 sm:block sm:p-6 xl:p-7 shadow-[0_10px_30px_-20px_rgba(110,20,40,0.25)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f6dfe2] text-[#8a1f38] [&>svg]:h-[18px] [&>svg]:w-[18px] sm:h-16 sm:w-16 sm:[&>svg]:h-7 sm:[&>svg]:w-7">
                      {category.icon}
                    </span>
                    <div>
                    <h3 className="font-serif text-[17px] leading-[1.05] sm:mt-4 sm:text-[22px] lg:text-[20px] xl:text-[21px] 2xl:text-2xl leading-tight text-foreground xl:whitespace-nowrap">
                      {category.title}
                    </h3>
                    <p className="mt-1 font-sans text-[12.5px] leading-[1.35] text-foreground/75 sm:mt-2 sm:text-base sm:leading-relaxed sm:text-foreground/70">
                      {category.description}
                    </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column */}
            <div className="contents lg:flex lg:flex-col">
              {/* Basket illustration with soft halo and hand-drawn accents */}
              <div className="relative order-2 mx-auto w-full max-w-[400px] py-3 sm:py-0 sm:max-w-[560px] lg:order-none">
                <div
                  className="absolute left-1/2 top-1/2 aspect-square w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fbe9eb] sm:w-[85%]"
                  aria-hidden="true"
                />
                <svg
                  className="absolute inset-0 h-full w-full pointer-events-none text-[#c4687c]"
                  viewBox="0 0 560 380"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M88 20 L 104 42 M58 56 L 84 66 M50 98 L 76 94" />
                  <path d="M520 118 C 510 104 500 96 500 86 C 500 79 505 75 510 75 C 514 75 517 78 520 83 C 523 78 526 75 530 75 C 535 75 540 79 540 86 C 540 96 530 104 520 118 Z" />
                  <path d="M496 150 L 484 176 M518 172 L 498 192" />
                </svg>
                <img
                  src="/sponsorship-icon.png"
                  alt="A woven basket holding a wrapped gift, storybooks, colored pencils, cozy socks and a scarf, beside a pair of sneakers"
                  className="relative mx-auto w-[88%] drop-shadow-[0_14px_18px_rgba(80,40,30,0.18)]"
                />
              </div>

              {/* Key dates */}
              <div className="order-4 rounded-2xl border border-[#f1e6e3] bg-white/80 p-3 sm:p-7 shadow-[0_10px_30px_-20px_rgba(110,20,40,0.25)] lg:order-none lg:mt-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#f6dfe2] text-[#8a1f38]">
                    <CalendarHeart className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-sans text-sm sm:text-base font-semibold uppercase tracking-[0.3em] text-[#8a1f38]">
                    Key dates
                  </h3>
                </div>

                <dl className="mt-3 grid grid-cols-2 rounded-xl bg-[#fbf1f0] sm:mt-5 sm:gap-4 sm:rounded-none sm:bg-transparent lg:grid-cols-1 xl:grid-cols-2">
                  {[
                    { date: "November 2026", label: "Wish lists open." },
                    { date: "December 10", label: "Gift drop-off deadline." },
                  ].map((item, i) => (
                    <div
                      key={item.date}
                      className={cn(
                        "flex items-center gap-1.5 px-2 py-3.5 sm:gap-3 sm:rounded-xl sm:bg-[#fbf1f0] sm:p-4 xl:gap-4 xl:p-5",
                        i > 0 && "border-l border-[#ebd2d6] sm:border-l-0"
                      )}
                    >
                      <span className="flex h-8 w-8 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#f6dfe2] text-[#8a1f38]">
                        <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.6} />
                      </span>
                      <div>
                        <dt className="font-serif text-[15px] min-[400px]:text-[17px] sm:text-xl xl:text-2xl leading-tight text-foreground whitespace-nowrap">{item.date}</dt>
                        <dd className="mt-0.5 sm:mt-1 font-sans text-[12.5px] sm:text-base leading-snug text-foreground/75 sm:text-foreground/70">{item.label}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Gentle note */}
              <p className="order-5 px-4 text-center font-sans text-base leading-snug sm:leading-relaxed text-foreground/80 sm:text-foreground/70 lg:order-none lg:mt-6">
                Can&rsquo;t fulfill a complete wish list?{" "}
                <button
                  onClick={() => {
                    navigate(ROUTES.MAKE_A_DONATION, { state: { openNewsletter: true } });
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="font-medium text-[#8a1f38] underline underline-offset-4 transition-colors hover:text-[#6e1428]"
                >
                  Make a Donation
                </button>{" "}
                to help cover remaining gifts and essentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Need to Know (FAQ preview) */}
      <section
        aria-labelledby="need-to-know-heading"
        className="relative overflow-hidden pt-10 pb-14 sm:py-20 lg:py-24"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(243, 211, 216, 0.55) 0%, transparent 45%), radial-gradient(ellipse at 0% 100%, rgba(246, 223, 226, 0.6) 0%, transparent 40%), #fdf8f6",
        }}
      >
        <div className="relative mx-auto grid max-w-7xl gap-4 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] lg:items-center lg:gap-12 lg:px-8 xl:gap-16">
          {/* Intro */}
          <div className="relative text-center sm:text-left">
            <span className="block font-sans text-sm font-medium uppercase tracking-[0.25em] text-[#8a1f38] sm:tracking-[0.3em] sm:text-[#a2465a]">
              Need to know
            </span>
            <h2
              id="need-to-know-heading"
              className="mt-3 font-serif text-foreground leading-[1.05] tracking-tight text-[42px] min-[400px]:text-[46px] sm:mt-4 sm:text-[clamp(2.5rem,4vw,3.75rem)]"
            >
              Questions <br className="sm:hidden" />
              <span className="sm:whitespace-nowrap">Before You Begin?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-[320px] font-sans text-lg leading-snug text-foreground/75 sm:mx-0 sm:mt-5 sm:max-w-md sm:text-xl sm:leading-relaxed">
              A few quick answers to help you fulfill a wish with confidence.
            </p>
            <Link
              to={ROUTES.FAQ}
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#8a1f38] px-8 py-4 sm:mt-8 font-sans text-sm sm:text-base font-semibold tracking-[0.16em] text-white shadow-[0_10px_24px_-10px_rgba(110,20,40,0.6)] transition-colors hover:bg-[#7a1a30] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98a96] focus-visible:ring-offset-2"
            >
              EXPLORE ALL FAQs
              <ArrowRight className="h-5 w-5" />
            </Link>

            {/* Heart doodle - under the button on phones, beside the questions on wide screens */}
            <svg
              className="pointer-events-none mx-auto -mt-1 block h-[84px] w-[156px] text-[#e3aab4] sm:hidden"
              viewBox="0 0 260 140"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 130 C 70 150, 140 135, 175 95 C 200 68, 205 45, 190 40 C 178 36, 172 50, 172 58 C 168 46, 155 40, 148 50 C 138 65, 160 85, 175 95" />
              <path d="M200 12 L 196 28 M222 26 L 210 36 M226 54 H 212" />
            </svg>
            <svg
              className="pointer-events-none absolute -bottom-24 right-[8%] hidden h-36 w-64 text-[#e3aab4] xl:block"
              viewBox="0 0 260 140"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10 130 C 70 150, 140 135, 175 95 C 200 68, 205 45, 190 40 C 178 36, 172 50, 172 58 C 168 46, 155 40, 148 50 C 138 65, 160 85, 175 95" />
              <path d="M200 12 L 196 28 M222 26 L 210 36 M226 54 H 212" />
            </svg>
          </div>

          {/* Questions */}
          <div className="space-y-4 sm:space-y-6">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqs.includes(index);
              const panelId = `need-to-know-answer-${index}`;
              return (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-[#f0d3d8] bg-white/90 px-5 shadow-[0_12px_36px_-20px_rgba(110,20,40,0.3)] sm:px-8"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center gap-4 py-4 text-left sm:gap-6 sm:py-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98a96] focus-visible:ring-offset-2 rounded-2xl"
                    >
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fbe9eb] text-[#8a1f38] sm:h-16 sm:w-16">
                        {faq.icon}
                      </span>
                      <span className="flex-1 font-serif text-[21px] leading-tight text-foreground sm:font-sans sm:text-2xl sm:font-medium sm:leading-snug lg:text-xl xl:text-2xl">
                        {faq.question}
                      </span>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fbe9eb] text-[#8a1f38] sm:h-14 sm:w-14">
                        {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                      </span>
                    </button>
                  </h3>
                  <div id={panelId} hidden={!isOpen} className="border-t border-[#f3dfe2] pt-4 pb-5 sm:py-7">
                    <p className="font-sans text-base sm:text-lg leading-snug sm:leading-relaxed text-foreground/75 sm:text-foreground/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <div className="border-t border-border/20">
        <p className="text-center text-muted-foreground text-[0.8125rem] font-light tracking-wide py-12 sm:py-16">
          One wishlist. One child. One moment of pure joy.
        </p>
      </div>

      {/* Newsletter Signup Modal */}
      <NewsletterSignupModal
        open={isNewsletterModalOpen}
        onOpenChange={setIsNewsletterModalOpen}
        initialEmail={notifyMethod === "email" ? notifyEmail.trim() : undefined}
        initialPhone={notifyMethod === "text" ? notifyPhone.replace(/\D/g, "") : undefined}
        initialPreference={notifyMethod}
      />
    </main>
  );
};

export default SponsorAChild;
