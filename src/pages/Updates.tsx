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
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 sm:pb-20 md:pb-28">
        {/* Page Header */}
        <header className="relative mb-6 sm:mb-12">
          {/* Ribbon sweeping in from the top-right (phones) */}
          <svg
            className="pointer-events-none absolute -right-4 -top-10 h-28 w-[60%] sm:hidden"
            viewBox="0 0 240 110"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path d="M20 4 C 70 10, 110 60, 160 82 C 195 98, 220 96, 250 84" stroke="#efb9c3" strokeWidth="12" strokeLinecap="round" strokeOpacity="0.6" />
          </svg>
          <span className="block font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#a2465a]">
            JoyDrop Journal
          </span>
          <h1
            className="relative mt-2 sm:mt-3 font-serif text-[#3a2420] leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(3.25rem, 7vw, 5rem)" }}
          >
            Updates
          </h1>
          <p className="relative mt-3 sm:mt-5 font-sans text-[15px] sm:text-xl leading-snug sm:leading-relaxed text-foreground/85">
            Milestones, announcements, and moments from Joy Drop.
          </p>
          <p className="relative mt-1 font-sans text-[15px] sm:text-lg leading-snug sm:leading-relaxed text-foreground/75">
            Thanks for following Joy Drop&rsquo;s journey. Here&rsquo;s what we&rsquo;ve been up to recently.
          </p>
          <div className="mt-5 sm:mt-8 h-px bg-[#c98a96]/70" aria-hidden="true" />
        </header>

        {/* Updates List */}
        <UpdatesSection />
      </div>
    </main>
  );
};

export default Updates;
