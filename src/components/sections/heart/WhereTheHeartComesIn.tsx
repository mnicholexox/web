/* Small heart icon for editorial callouts */
const HeartAccent = () => (
  <svg 
    className="w-3 h-3 text-primary/30 flex-shrink-0 mt-[0.35em]" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

/* Delicate divider between editorial callouts */
const EditorialDivider = () => (
  <div className="flex items-center justify-center gap-1.5 py-2 md:py-3">
    <div className="w-1 h-1 rounded-full bg-primary/35" />
    <div className="w-[7px] h-[7px] rounded-full bg-accent/65" />
    <div className="w-1 h-1 rounded-full bg-primary/35" />
  </div>
);

interface EditorialCalloutProps {
  title: string;
  children: React.ReactNode;
}

/* Soft editorial callout block */
const EditorialCallout = ({ title, children }: EditorialCalloutProps) => (
  <article 
    className="relative pl-6 md:pl-7 py-6 md:py-8 pr-4 md:pr-6 rounded-sm"
    style={{
      background: 'linear-gradient(135deg, hsl(var(--primary) / 0.03) 0%, hsl(var(--accent) / 0.02) 100%)',
      borderLeft: '1px solid hsl(var(--primary) / 0.08)',
    }}
  >
    {/* Subtle inner glow for warmth */}
    <div 
      className="absolute inset-0 rounded-sm pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at 0% 0%, hsl(var(--primary) / 0.04) 0%, transparent 60%)',
      }}
    />
    
    <div className="relative">
      {/* Subheading with icon */}
      <div className="flex items-start gap-3 mb-4 md:mb-5">
        <HeartAccent />
        <h3 
          className="font-serif font-normal tracking-wide leading-snug"
          style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: '#4c3838' }}
        >
          {title}
        </h3>
      </div>
      
      {/* Content with gentle left margin to align with heading text */}
      <div className="pl-6">
        <p className="text-foreground/65 leading-[1.9] md:leading-[2] text-base md:text-[1.0625rem]">
          {children}
        </p>
      </div>
    </div>
  </article>
);

export const WhereTheHeartComesIn = () => {
  return (
    <section 
      id="where-the-heart-comes-in"
      data-section="where-the-heart-comes-in"
      className="w-full py-28 md:py-40 bg-background relative overflow-hidden"
    >
      {/* Subtle decorative background element */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--accent)) 0%, transparent 40%)',
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 relative">
        {/* Left-aligned editorial content with comfortable reading width */}
        <div className="max-w-2xl space-y-10 md:space-y-12">
          {/* Headline block */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <span className="inline-block text-[11px] md:text-xs font-sans uppercase tracking-[0.3em] text-primary/70 font-medium">
              Our Purpose
            </span>
            
            {/* Primary Editorial Headline */}
            <h2 
              className="font-serif text-foreground font-normal leading-[1.25] md:leading-[1.2] tracking-normal"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            >
              Where the Heart Comes In
            </h2>
            
            {/* Narrative bridge sub-line */}
            <p className="text-[0.8125rem] md:text-sm text-foreground/45 font-sans tracking-wide leading-relaxed">
              Care that shows up on Christmas — and stays for the other 364 days.
            </p>
          </div>
          
          {/* Delicate decorative divider after headline */}
          <div className="flex items-center gap-2 py-2">
            <div className="w-8 h-px bg-primary/20" />
            <div className="w-1 h-1 rounded-full bg-primary/35" />
            <div className="w-[7px] h-[7px] rounded-full bg-accent/65" />
            <div className="w-1 h-1 rounded-full bg-primary/35" />
          </div>
          
          {/* Editorial callout blocks */}
          <div className="space-y-1 md:space-y-2">
            {/* Block 1: More Than Gifts */}
            <EditorialCallout title="More Than Gifts">
              Joy Drop exists to make sure every child feels seen, valued, and confident — not just on Christmas morning, but in the days that follow, with fresh back-to-school clothes and experiences that help them feel included among their peers.
            </EditorialCallout>
            
            {/* Delicate visual separator */}
            <EditorialDivider />
            
            {/* Block 2: Meeting Real Needs */}
            <EditorialCallout title="Meeting Real Needs">
              We want to ensure children's needs are met on the other 364 days of the year. Toy donations help make that possible by freeing up our small budget for essentials like hygiene items, warm clothing, and properly fitting shoes — so children can feel prepared, included, and cared for all year long.
            </EditorialCallout>
          </div>
          
          {/* Closing breath - editorial tagline */}
          <div className="pt-10 md:pt-14 space-y-6">
            <p 
              className="font-serif italic text-foreground/50 leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}
            >
              Support that carries children forward, long after the season passes.
            </p>
            
            {/* Closing decorative element */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-primary/10" />
              <svg 
                className="w-3.5 h-3.5 text-primary/20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <div className="w-6 h-px bg-primary/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

