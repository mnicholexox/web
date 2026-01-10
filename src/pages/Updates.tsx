import { UpdatesSection } from "@/components/sections/updates";

/**
 * Updates Page
 *
 * A warm, story-driven page displaying milestones, announcements,
 * and moments from Joy Drop. Designed to feel like a scrapbook,
 * journal, or community timeline — not a corporate blog.
 */
const Updates = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Watercolor Background - soft blush and cream tones */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 50% at 10% 20%, hsl(344 35% 88% / 0.35) 0%, transparent 50%),
            radial-gradient(ellipse 70% 60% at 90% 15%, hsl(38 50% 90% / 0.4) 0%, transparent 45%),
            radial-gradient(ellipse 80% 55% at 30% 75%, hsl(344 30% 90% / 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 60% 45% at 85% 80%, hsl(38 60% 92% / 0.35) 0%, transparent 40%),
            radial-gradient(ellipse 50% 40% at 50% 50%, hsl(344 25% 92% / 0.2) 0%, transparent 60%),
            linear-gradient(180deg, hsl(38 67% 97%) 0%, hsl(340 25% 96%) 40%, hsl(38 50% 96%) 70%, hsl(38 67% 97%) 100%)
          `,
        }}
      />

      {/* Paper-like Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content Container - pt accounts for fixed header */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-28">
        {/* Page Header */}
        <header className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* Decorative element above title */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-px bg-primary/20" />
              <svg 
                className="w-3 h-3 text-primary/30" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <div className="w-6 h-px bg-primary/20" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-[36px] sm:text-[44px] md:text-[52px] text-foreground leading-tight tracking-tight mb-5">
            Updates
          </h1>

          {/* Subheading */}
          <p 
            className="font-serif text-foreground/70 leading-relaxed mb-4"
            style={{ fontSize: 'clamp(1.0625rem, 2.5vw, 1.25rem)' }}
          >
            Milestones, announcements, and moments from Joy Drop.
          </p>

          {/* Human context line */}
          <p className="text-foreground/55 text-[0.9375rem] sm:text-base max-w-xl mx-auto leading-relaxed">
            Thanks for following Joy Drop's journey. Here's what we've been up to recently.
          </p>

          {/* Decorative divider */}
          <div className="flex justify-center mt-8 sm:mt-10">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-primary/30" />
              <div className="w-2 h-2 rounded-full bg-accent/50" />
              <div className="w-1 h-1 rounded-full bg-primary/30" />
            </div>
          </div>
        </header>

        {/* Updates List */}
        <UpdatesSection />
      </div>
    </main>
  );
};

export default Updates;
