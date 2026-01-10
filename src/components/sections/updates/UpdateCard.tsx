import { ArrowRight } from 'lucide-react';

interface UpdateCardProps {
  date: string;
  headline: string;
  blurb?: string;
  fullContent?: {
    subheadline?: string;
    paragraphs?: string[];
    list?: {
      intro?: string;
      items: string[];
    };
    closing?: string[];
  };
  imageUrl?: string;
  imageAlt?: string;
  href?: string;
  isHero?: boolean;
}

/**
 * UpdateCard
 * 
 * A warm, story-driven card for displaying individual updates.
 * Features soft shadows, rounded corners, and gentle hover effects
 * to feel like a scrapbook/journal entry rather than a corporate blog.
 * 
 * Supports hero variant for featured/lead articles with larger styling.
 */
export const UpdateCard = ({ 
  date, 
  headline, 
  blurb, 
  fullContent,
  imageUrl, 
  imageAlt,
  href,
  isHero = false
}: UpdateCardProps) => {
  const CardWrapper = href ? 'a' : 'article';
  const cardProps = href ? { href, className: 'group block' } : { className: 'group' };

  const hasFullContent = !!fullContent;

  return (
    <CardWrapper {...cardProps}>
      <article 
        className={`relative overflow-hidden transition-all duration-300 ease-out ${
          isHero 
            ? 'rounded-3xl group-hover:shadow-2xl group-hover:-translate-y-1' 
            : 'rounded-2xl group-hover:shadow-lg group-hover:-translate-y-1'
        }`}
        style={{
          background: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(139, 74, 92, 0.08)',
          boxShadow: isHero 
            ? '0 8px 32px rgba(139, 74, 92, 0.08), 0 4px 16px rgba(139, 74, 92, 0.04)' 
            : '0 2px 16px rgba(139, 74, 92, 0.05), 0 1px 4px rgba(139, 74, 92, 0.03)',
        }}
      >
        {/* Subtle inner glow for warmth */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, hsl(344 35% 92% / 0.4) 0%, transparent 70%)',
          }}
        />

        <div className={`relative flex ${isHero ? 'flex-col lg:flex-row' : 'flex-col md:flex-row'}`}>
          {/* Image Section (optional) */}
          {imageUrl && (
            <div className={`${isHero ? 'lg:w-96 xl:w-[28rem] h-64 lg:h-auto' : 'md:w-56 lg:w-64'} flex-shrink-0 overflow-hidden`}>
              <div 
                className={`${isHero ? 'h-64 lg:h-full min-h-[256px]' : 'h-48 md:h-full min-h-[180px]'} relative overflow-hidden`}
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
                  className={`absolute inset-0 pointer-events-none ${isHero ? 'hidden lg:block' : 'hidden md:block'}`}
                  style={{
                    background: 'linear-gradient(to right, transparent 70%, rgba(255, 255, 255, 0.4) 100%)',
                  }}
                />
              </div>
            </div>
          )}

          {/* Content Section */}
          <div className={`flex-1 flex flex-col ${isHero ? 'p-8 md:p-10 lg:p-12' : 'p-6 md:p-8'} ${hasFullContent ? 'justify-start' : 'justify-center'}`}>
            {/* Date - subtle, secondary */}
            <time 
              className={`${isHero ? 'text-xs md:text-sm' : 'text-[11px] md:text-xs'} font-sans uppercase tracking-[0.2em] text-primary/50 font-medium mb-3`}
              dateTime={date}
            >
              {formatDate(date)}
            </time>

            {/* Headline - warm, human */}
            <h3 
              className={`font-serif text-foreground font-normal leading-snug mb-3 group-hover:text-primary/90 transition-colors duration-200 ${
                isHero 
                  ? 'text-2xl md:text-3xl lg:text-4xl' 
                  : 'text-[clamp(1.125rem,2.5vw,1.375rem)]'
              }`}
            >
              {headline}
            </h3>

            {/* Subheadline (for hero/full content) */}
            {fullContent?.subheadline && (
              <p className={`font-serif text-foreground/75 leading-relaxed mb-6 ${
                isHero ? 'text-lg md:text-xl' : 'text-base'
              }`}>
                {fullContent.subheadline}
              </p>
            )}

            {/* Full Content */}
            {hasFullContent ? (
              <div className="space-y-6">
                {/* Paragraphs */}
                {fullContent.paragraphs?.map((paragraph, index) => (
                  <p 
                    key={index}
                    className={`text-foreground/70 leading-relaxed ${
                      isHero ? 'text-base md:text-lg' : 'text-[0.9375rem]'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}

                {/* List */}
                {fullContent.list && (
                  <div className="space-y-3">
                    {fullContent.list.intro && (
                      <p className={`text-foreground/70 font-medium ${
                        isHero ? 'text-base md:text-lg' : 'text-[0.9375rem]'
                      }`}>
                        {fullContent.list.intro}
                      </p>
                    )}
                    <ul className={`space-y-2 ${isHero ? 'pl-6 md:pl-8' : 'pl-5'}`}>
                      {fullContent.list.items.map((item, index) => (
                        <li 
                          key={index}
                          className={`text-foreground/70 leading-relaxed ${
                            isHero ? 'text-base md:text-lg' : 'text-[0.9375rem]'
                          }`}
                          style={{ listStyleType: 'disc' }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Closing paragraphs */}
                {fullContent.closing?.map((paragraph, index) => (
                  <p 
                    key={index}
                    className={`text-foreground/70 leading-relaxed ${
                      isHero ? 'text-base md:text-lg' : 'text-[0.9375rem]'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              /* Supporting blurb (for regular cards) */
              <p className={`text-foreground/60 leading-relaxed mb-4 ${isHero ? 'text-base md:text-lg' : 'text-[0.9375rem] line-clamp-2'}`}>
                {blurb}
              </p>
            )}

            {/* Subtle arrow affordance */}
            {href && (
              <div className="flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors duration-200 mt-4">
                <span className={`${isHero ? 'text-sm' : 'text-[0.8125rem]'} font-medium tracking-wide`}>Read more</span>
                <ArrowRight 
                  className={`${isHero ? 'w-5 h-5' : 'w-4 h-4'} transition-transform duration-200 group-hover:translate-x-1`} 
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
