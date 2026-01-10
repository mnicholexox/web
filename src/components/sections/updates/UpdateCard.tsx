import { ArrowRight } from 'lucide-react';

interface UpdateCardProps {
  date: string;
  headline: string;
  blurb: string;
  imageUrl?: string;
  imageAlt?: string;
  href?: string;
}

/**
 * UpdateCard
 * 
 * A warm, story-driven card for displaying individual updates.
 * Features soft shadows, rounded corners, and gentle hover effects
 * to feel like a scrapbook/journal entry rather than a corporate blog.
 */
export const UpdateCard = ({ 
  date, 
  headline, 
  blurb, 
  imageUrl, 
  imageAlt,
  href 
}: UpdateCardProps) => {
  const CardWrapper = href ? 'a' : 'article';
  const cardProps = href ? { href, className: 'group block' } : { className: 'group' };

  return (
    <CardWrapper {...cardProps}>
      <article 
        className="relative rounded-2xl overflow-hidden transition-all duration-300 ease-out group-hover:shadow-lg group-hover:-translate-y-1"
        style={{
          background: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(139, 74, 92, 0.08)',
          boxShadow: '0 2px 16px rgba(139, 74, 92, 0.05), 0 1px 4px rgba(139, 74, 92, 0.03)',
        }}
      >
        {/* Subtle inner glow for warmth */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, hsl(344 35% 92% / 0.4) 0%, transparent 70%)',
          }}
        />

        <div className="relative flex flex-col md:flex-row">
          {/* Image Section (optional) */}
          {imageUrl && (
            <div className="md:w-56 lg:w-64 flex-shrink-0 overflow-hidden">
              <div 
                className="h-48 md:h-full min-h-[180px] relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, hsl(344 35% 92% / 0.5) 0%, hsl(38 67% 94% / 0.5) 100%)',
                }}
              >
                <img
                  src={imageUrl}
                  alt={imageAlt || headline}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Soft edge overlay for blending */}
                <div 
                  className="absolute inset-0 pointer-events-none hidden md:block"
                  style={{
                    background: 'linear-gradient(to right, transparent 70%, rgba(255, 255, 255, 0.4) 100%)',
                  }}
                />
              </div>
            </div>
          )}

          {/* Content Section */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
            {/* Date - subtle, secondary */}
            <time 
              className="text-[11px] md:text-xs font-sans uppercase tracking-[0.2em] text-primary/50 font-medium mb-3"
              dateTime={date}
            >
              {formatDate(date)}
            </time>

            {/* Headline - warm, human */}
            <h3 
              className="font-serif text-foreground font-normal leading-snug mb-3 group-hover:text-primary/90 transition-colors duration-200"
              style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)' }}
            >
              {headline}
            </h3>

            {/* Supporting blurb */}
            <p className="text-foreground/60 text-[0.9375rem] leading-relaxed mb-4 line-clamp-2">
              {blurb}
            </p>

            {/* Subtle arrow affordance */}
            {href && (
              <div className="flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors duration-200">
                <span className="text-[0.8125rem] font-medium tracking-wide">Read more</span>
                <ArrowRight 
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                  strokeWidth={1.5}
                />
              </div>
            )}
          </div>
        </div>
      </article>
    </CardWrapper>
  );
};

/**
 * Format a date string into a friendly, human-readable format
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
