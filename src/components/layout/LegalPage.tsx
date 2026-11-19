import type { ReactNode } from "react";
import { useEffect } from "react";

interface LegalPageProps {
  title: string;
  effectiveDate: string;
  intro?: ReactNode;
  children: ReactNode;
}

/**
 * Shared layout for the Privacy Policy and Terms of Service pages.
 * Uses the same watercolor background and heading typography as the FAQ page.
 */
export const LegalPage = ({ title, effectiveDate, intro, children }: LegalPageProps) => {
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} | Joy Drop`;
    return () => {
      document.title = previous;
    };
  }, [title]);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Watercolor Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 10%, hsl(344 35% 85% / 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 80% 20%, hsl(280 30% 88% / 0.35) 0%, transparent 45%),
            radial-gradient(ellipse 70% 55% at 50% 80%, hsl(344 35% 88% / 0.3) 0%, transparent 50%),
            linear-gradient(180deg, hsl(38 67% 97%) 0%, hsl(340 30% 96%) 50%, hsl(38 67% 97%) 100%)
          `,
        }}
      />

      {/* Content Container - pt accounts for fixed header */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-20 md:pb-28">
        <div className="mx-auto max-w-3xl">
          <header className="mb-8 sm:mb-12">
            <h1 className="font-serif text-[#2e1a17] leading-[1.05] tracking-tight text-[38px] min-[400px]:text-[42px] sm:text-[clamp(2.25rem,4.6vw,3.75rem)]">
              {title}
            </h1>
            <p className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-[#c4566a]">
              Effective date: {effectiveDate}
            </p>
            {intro && (
              <div className="mt-5 font-sans text-base leading-relaxed text-foreground/75 sm:text-lg [&_p]:text-base sm:[&_p]:text-lg [&_a]:text-[#a8344f] [&_a]:underline [&_a]:underline-offset-2 [&_a]:break-words">
                {intro}
              </div>
            )}
          </header>

          <article
            className="space-y-8 font-sans text-base leading-relaxed text-foreground/80 sm:text-lg
              [&_h2]:font-serif [&_h2]:text-[#2e1a17] [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:leading-tight [&_h2]:mb-3
              [&_h3]:font-sans [&_h3]:font-semibold [&_h3]:text-[#2e1a17] [&_h3]:mt-4 [&_h3]:mb-1
              [&_p]:mt-3 [&_p]:text-base sm:[&_p]:text-lg [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1.5
              [&_a]:text-[#a8344f] [&_a]:underline [&_a]:underline-offset-2 [&_a]:break-words hover:[&_a]:text-[#6e1428]"
          >
            {children}
          </article>
        </div>
      </div>
    </main>
  );
};
