/* Small heart icon for cards */
const HeartAccent = () => (
  <svg 
    className="w-3 h-3 flex-shrink-0" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-hidden="true"
    style={{ color: '#B87B83' }}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

interface CardProps {
  title: string;
  children: React.ReactNode;
}

/* Card component with white background and shadow */
const Card = ({ title, children }: CardProps) => (
  <article 
    className="bg-white p-6 md:p-8 rounded-lg shadow-sm"
    style={{
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    }}
  >
    <div className="flex items-start gap-3 mb-4">
      <HeartAccent />
      <h3 
        className="font-sans font-bold text-lg md:text-xl"
        style={{ color: '#4A3C39' }}
      >
        {title}
      </h3>
    </div>
    
    <p 
      className="text-base md:text-[1.0625rem] leading-relaxed"
      style={{ color: '#6B5D5B' }}
    >
      {children}
    </p>
  </article>
);

export const WhereTheHeartComesIn = () => {
  return (
    <section 
      id="where-the-heart-comes-in"
      data-section="where-the-heart-comes-in"
      className="w-full pt-16 md:pt-24 pb-16 md:pb-20 bg-background"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="space-y-8 md:space-y-10">
          {/* Centered header section */}
          <div className="text-center space-y-4 md:space-y-6">
            {/* OUR PURPOSE subtitle */}
            <span 
              className="inline-block text-xs md:text-sm font-sans uppercase tracking-wider font-medium"
              style={{ color: '#B87B83' }}
            >
              Our Purpose
            </span>
            
            {/* Main heading */}
            <h2 
              className="font-serif font-bold leading-tight"
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                color: '#4A3C39'
              }}
            >
              Where the Heart Comes In
            </h2>
            
            {/* Sub-description */}
            <p 
              className="text-base md:text-lg font-sans leading-relaxed max-w-2xl mx-auto"
              style={{ color: '#6B5D5B' }}
            >
              Care that shows up on Christmas — and stays for the other 364 days.
            </p>
            
            {/* Decorative divider with three dots */}
            <div className="flex items-center justify-center pt-2 relative" style={{ width: '200px', margin: '0 auto' }}>
              {/* Horizontal line */}
              <div 
                className="absolute w-full h-px"
                style={{ 
                  backgroundColor: '#E8D4D6',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
              {/* Dots on the line */}
              <div className="relative flex items-center justify-center gap-3">
                <div 
                  className="rounded-full"
                  style={{ 
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#D4A5AB'
                  }}
                />
                <div 
                  className="rounded-full"
                  style={{ 
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#B87B83'
                  }}
                />
                <div 
                  className="rounded-full"
                  style={{ 
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#D4A5AB'
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Two cards side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-4">
            <Card title="More Than Gifts">
              Joy Drop exists to make sure every child feels seen, valued, and confident — not just on Christmas morning, but in the days that follow, with fresh back-to-school clothes and experiences that help them feel included among their peers.
            </Card>
            
            <Card title="Meeting Real Needs">
              We want to ensure children's needs are met on the other 364 days of the year. Toy donations help make that possible by freeing up our small budget for essentials like hygiene items, warm clothing, and properly fitting shoes — so children can feel prepared, included, and cared for all year long.
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

