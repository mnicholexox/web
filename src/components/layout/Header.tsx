import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/constants";
import { Button } from "@/components/ui/button";

/**
 * Header component
 *
 * Site header with navigation links.
 */

interface NavItem {
  label: string;
  href: string;
  scrollTo?: string; // Optional section ID to scroll to
}

const navItems: NavItem[] = [
  { label: "Home", href: ROUTES.HOME },
  { label: "Ways to Help", href: ROUTES.HOME, scrollTo: "how-you-can-help" },
  { label: "FAQ", href: ROUTES.FAQ },
  { label: "News", href: ROUTES.UPDATES },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Track which section is currently visible using Intersection Observer
  useEffect(() => {
    // Only observe sections when on the homepage
    if (location.pathname !== ROUTES.HOME) {
      setActiveSection(null);
      return;
    }

    // Get all sections that nav items can scroll to
    const sectionIds = navItems
      .filter((item) => item.scrollTo)
      .map((item) => item.scrollTo!);

    const observers: IntersectionObserver[] = [];

    const observerCallback = (sectionId: string) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
        }
      });
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      sectionIds.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const observer = new IntersectionObserver(observerCallback(sectionId), {
            rootMargin: "-20% 0px -60% 0px", // Trigger when section is in upper portion of viewport
            threshold: 0,
          });
          observer.observe(element);
          observers.push(observer);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [location.pathname]);

  // Clear active section when scrolled to top (for "Home" to be active)
  useEffect(() => {
    if (location.pathname !== ROUTES.HOME) return;

    const handleScroll = () => {
      // If scrolled near the top, clear the active section so "Home" is highlighted
      if (window.scrollY < 200) {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isActive = (href: string, scrollTo?: string) => {
    // For scroll-to items, check if that section is currently visible
    if (scrollTo) {
      return activeSection === scrollTo;
    }
    // For Home, it's active when on homepage AND no section is active
    if (href === ROUTES.HOME) {
      return location.pathname === href && !activeSection;
    }
    return location.pathname.startsWith(href);
  };

  const handleNavClick = (
    e: React.MouseEvent,
    item: NavItem,
    closeMobileMenu?: boolean
  ) => {
    if (closeMobileMenu) {
      setMobileMenuOpen(false);
    }

    // Handle "Home" link - scroll to top when already on homepage
    if (item.href === ROUTES.HOME && !item.scrollTo) {
      if (location.pathname === ROUTES.HOME) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection(null);
      }
      return;
    }

    if (item.scrollTo) {
      e.preventDefault();
      
      const scrollToSection = () => {
        const section = document.getElementById(item.scrollTo!);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

      // If already on the homepage, just scroll
      if (location.pathname === ROUTES.HOME) {
        scrollToSection();
      } else {
        // Navigate to homepage first, then scroll after a brief delay
        navigate(ROUTES.HOME);
        setTimeout(scrollToSection, 100);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link
            to={ROUTES.HOME}
            className="font-serif text-xl sm:text-2xl text-primary hover:text-primary/80 transition-colors"
          >
            Joy Drop
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive(item.href, item.scrollTo)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link to={ROUTES.LOGIN} className="ml-2">
              <Button variant="default" size="default">
                Login
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out",
          mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="px-4 pb-4 pt-2 space-y-1 bg-background/95 backdrop-blur-md border-b border-border/50">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={(e) => handleNavClick(e, item, true)}
              className={cn(
                "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive(item.href, item.scrollTo)
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to={ROUTES.LOGIN}
            onClick={() => setMobileMenuOpen(false)}
            className="block mt-2"
          >
            <Button variant="default" size="default" className="w-full">
              Login
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

