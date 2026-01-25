import { Link, useLocation, useNavigate } from "react-router-dom";
import { Facebook, Mail, Heart } from "lucide-react";
import { ROUTES } from "@/constants";

/**
 * Footer component
 * 
 * Site footer with links, social media, copyright, etc.
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

  const scrollToContact = () => {
    scrollToSection("contact");
  };

  return (
    <footer className="w-full bg-muted/30 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="bg-card rounded-2xl shadow-sm p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1: Joy Drop */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-foreground">Joy Drop</h2>
              <p className="text-sm text-foreground/80 leading-relaxed">
                A community-led holiday program created to help children feel supported, confident, and cared for — not just on Christmas, but all year long. Every gift is delivered with dignity, love, and intention.
              </p>
            </div>

            {/* Column 2: Get Involved */}
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-foreground">Get Involved</h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  to={ROUTES.SPONSOR_A_CHILD}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  Sponsor a Child
                </Link>
                <Link
                  to={ROUTES.MAKE_A_DONATION}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  Make a Donation
                </Link>
                <button
                  onClick={scrollToContact}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors text-left"
                >
                  Volunteer
                </button>
                <button
                  onClick={() => scrollToSection("how-you-can-help")}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors text-left"
                >
                  Ways to Help
                </button>
              </nav>
            </div>

            {/* Column 3: Learn More */}
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-foreground">Learn More</h3>
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("what-this-is-about")}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors text-left"
                >
                  About Joy Drop
                </button>
                <Link
                  to={ROUTES.FAQ}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  to={ROUTES.UPDATES}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  News & Updates
                </Link>
                <button
                  onClick={scrollToContact}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors text-left"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Column 4: Connect With Us */}
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-foreground">Connect With Us</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Follow along as we share stories, milestones, and moments of joy from our community.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://facebook.com/profile.php?id=61586823822277"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@joydrop.org"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label="Send us an email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Thank You Message */}
          <div className="mt-8 pt-8 border-t border-border/50">
            <p className="text-center text-sm text-foreground/80 font-medium">
              Support that carries children forward, long after the season passes.
            </p>
          </div>
        </div>

        {/* Separator with Heart */}
        <div className="relative flex items-center justify-center py-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-primary/20"></div>
          </div>
          <div className="relative flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary/40 fill-primary/20" />
            <div className="absolute -left-2 w-2 h-2 rounded-full bg-primary/20"></div>
            <div className="absolute -right-2 w-2 h-2 rounded-full bg-primary/20"></div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="text-center space-y-2">
          <div className="text-sm text-foreground/70">
            <span>©2028 Joy Drop</span>
            <span className="mx-2">|</span>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // TODO: Add privacy policy page/route
              }}
            >
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // TODO: Add terms of use page/route
              }}
            >
              Terms of Use
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            A community initiative with a passion for serving underprivileged families.
          </p>
        </div>
      </div>
    </footer>
  );
};

