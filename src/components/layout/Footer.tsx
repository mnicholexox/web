import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Facebook, Mail } from "lucide-react";
import { ROUTES } from "@/constants";

const FACEBOOK_URL = "https://facebook.com/profile.php?id=61586823822277";
const EMAIL = "hello@joydrop.app";

const linkClasses =
  "font-sans text-lg text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:underline text-left";

const headingClasses =
  "font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#e8a3ae]";

/** Satin ribbon curling down the right edge of the footer. */
const FooterRibbon = ({ mobile = false }: { mobile?: boolean }) => (
  <svg
    className={
      mobile
        ? "absolute right-0 top-[26%] h-[calc(74%-126px)] w-[78%] pointer-events-none md:hidden"
        : "absolute right-0 top-0 hidden h-full w-[38%] max-w-[560px] pointer-events-none md:block"
    }
    viewBox="0 0 560 520"
    preserveAspectRatio={mobile ? "none" : "xMaxYMin meet"}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id={mobile ? "footer-ribbon-m" : "footer-ribbon"} x1="0" x2="1" y1="1" y2="0">
        <stop offset="0%" stopColor="#a8344f" stopOpacity="0.15" />
        <stop offset="45%" stopColor="#b8435c" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#c9566f" stopOpacity="0.85" />
      </linearGradient>
    </defs>
    {/* Ribbon sweeps in from the bottom, loops at the right edge and exits at the top */}
    <path
      d="M40 520 C 160 430, 300 360, 450 330 C 530 314, 590 300, 560 250
         C 520 190, 440 150, 470 80 C 490 35, 530 15, 580 0
         L 580 22 C 545 35, 508 55, 492 92 C 466 150, 545 190, 580 250
         C 612 310, 540 340, 455 355 C 310 382, 180 445, 80 520 Z"
      fill={mobile ? "url(#footer-ribbon-m)" : "url(#footer-ribbon)"}
    />
    {/* Highlight along the outer edge for a satin sheen */}
    <path
      d="M40 520 C 160 430, 300 360, 450 330"
      fill="none"
      stroke="#e48a9e"
      strokeOpacity="0.35"
      strokeWidth="1.5"
    />
  </svg>
);

/**
 * Footer component
 *
 * Site footer with brand statement, call to action, links, social links and legal row.
 */
export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const scrollToElement = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    // If already on the homepage, just scroll
    if (location.pathname === ROUTES.HOME) {
      scrollToElement();
    } else {
      // Navigate to homepage first, then scroll after a brief delay
      navigate(ROUTES.HOME);
      setTimeout(scrollToElement, 100);
    }
  };

  return (
    <footer
      className="relative w-full overflow-hidden text-white"
      style={{ background: "linear-gradient(180deg, #5e0d1f 0%, #560b1c 100%)" }}
    >
      <FooterRibbon />
      <FooterRibbon mobile />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand + call to action */}
        <div className="flex flex-col gap-5 pt-10 pb-7 sm:gap-10 sm:pt-14 sm:pb-10 md:pt-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p
              className="font-serif text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 6vw, 4.75rem)" }}
            >
              Joy Drop
            </p>
            <p className="mt-3 font-sans text-lg sm:mt-5 sm:text-[22px] leading-snug sm:leading-relaxed text-white/85">
              A community-powered Christmas drive helping children feel remembered&mdash;during the
              holidays and beyond.
            </p>
          </div>

          <div className="lg:mt-8 lg:pr-[8%]">
            <p className={headingClasses}>Ready to make a little joy?</p>
            <Link
              to={ROUTES.SPONSOR_A_CHILD}
              className="mt-3 inline-flex items-center gap-4 rounded-md bg-[#fbf3ec] px-7 py-3.5 sm:mt-4 sm:px-8 sm:py-4 font-sans text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-[#5e0d1f] shadow-lg transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#5e0d1f]"
            >
              Choose a wish list
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="h-px bg-[#e8a3ae]/30" aria-hidden="true" />

        {/* Link columns */}
        <div className="grid gap-6 py-6 sm:gap-10 sm:py-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] lg:py-12">
          <nav aria-label="Get involved">
            <h3 className={headingClasses}>Get involved</h3>
            <ul className="mt-2 space-y-0.5 sm:mt-5 sm:space-y-2.5">
              <li>
                <Link to={ROUTES.SPONSOR_A_CHILD} className={linkClasses}>
                  Fulfill a Wish
                </Link>
              </li>
              <li>
                <Link to={ROUTES.MAKE_A_DONATION} className={linkClasses}>
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link to={ROUTES.VOLUNTEER} className={linkClasses}>
                  Volunteer
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection("how-you-can-help")} className={linkClasses}>
                  Ways to Help
                </button>
              </li>
            </ul>
          </nav>

          <nav aria-label="Learn more">
            <h3 className={headingClasses}>Learn more</h3>
            <ul className="mt-2 space-y-0.5 sm:mt-5 sm:space-y-2.5">
              <li>
                <button onClick={() => scrollToSection("what-this-is-about")} className={linkClasses}>
                  About Joy Drop
                </button>
              </li>
              <li>
                <Link to={ROUTES.FAQ} className={linkClasses}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={ROUTES.UPDATES} className={linkClasses}>
                  News &amp; Updates
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className={linkClasses}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className={headingClasses}>Connect</h3>
            <ul className="mt-3 space-y-3 sm:mt-5 sm:space-y-4">
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-5 font-sans text-base sm:text-lg text-white/90 transition-colors hover:text-white"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 transition-colors group-hover:bg-white/10">
                    <Facebook className="h-5 w-5" />
                  </span>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-5 font-sans text-base sm:text-lg text-white/90 transition-colors hover:text-white"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 transition-colors group-hover:bg-white/10">
                    <Mail className="h-5 w-5" />
                  </span>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal row */}
      <div className="relative border-t border-[#e8a3ae]/25 bg-[#4a0917]/70">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-3 px-4 py-6 text-center font-sans text-sm sm:text-base text-white/80 sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <span>&copy; {new Date().getFullYear()} Joy Drop</span>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="transition-colors hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                // TODO: Add privacy policy page/route
              }}
            >
              Privacy Policy
            </a>
            <span aria-hidden="true">|</span>
            <a
              href="#"
              className="transition-colors hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                // TODO: Add terms of use page/route
              }}
            >
              Terms of Use
            </a>
          </div>
          <span>Every gift given with dignity, care, and intention.</span>
        </div>
      </div>
    </footer>
  );
};
