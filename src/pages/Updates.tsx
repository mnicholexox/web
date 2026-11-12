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
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-28">
        {/* Page Header */}
        <header className="mb-10 sm:mb-12">
          <span className="block font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#a2465a]">
            JoyDrop Journal
          </span>
          <h1
            className="mt-3 font-serif text-[#3a2420] leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
          >
            Updates
          </h1>
          <p className="mt-5 font-sans text-lg sm:text-xl leading-relaxed text-foreground/85">
            Milestones, announcements, and moments from Joy Drop.
          </p>
          <p className="mt-1 font-sans text-base sm:text-lg leading-relaxed text-foreground/75">
            Thanks for following Joy Drop&rsquo;s journey. Here&rsquo;s what we&rsquo;ve been up to recently.
          </p>
          <div className="mt-8 h-px bg-[#c98a96]/70" aria-hidden="true" />
        </header>

        {/* Updates List */}
        <UpdatesSection />
      </div>
    </main>
  );
};

export default Updates;
