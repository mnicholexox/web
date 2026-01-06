export const Mission = () => {
  return (
    <section 
      id="mission"
      data-section="mission"
      className="relative w-full py-20 md:py-28 lg:py-32 bg-background overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8">
        {/* Ribbon background layer - positioned in vertical middle of content */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-full">
            {/* Ribbon image with low opacity and slight blur */}
            <div 
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[200px] md:h-[250px] lg:h-[300px]"
              style={{
                backgroundImage: `url('/ribbon.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.1,
                filter: 'blur(0.5px)',
              }}
            />
            {/* Left fade gradient */}
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[15%] md:w-[12%] h-[200px] md:h-[250px] lg:h-[300px] pointer-events-none"
              style={{
                background: 'linear-gradient(to right, hsl(var(--background)) 0%, transparent 100%)',
              }}
            />
            {/* Right fade gradient */}
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[15%] md:w-[12%] h-[200px] md:h-[250px] lg:h-[300px] pointer-events-none"
              style={{
                background: 'linear-gradient(to left, hsl(var(--background)) 0%, transparent 100%)',
              }}
            />
          </div>
        </div>

        {/* Two value blocks with generous spacing */}
        <div className="relative z-10 space-y-16 md:space-y-20 lg:space-y-24">
          {/* First Value Block: Who Joy Drop Is For */}
          <div className="space-y-4 md:space-y-5">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight tracking-tight">
              Who Joy Drop Is For
            </h2>
            <p className="font-sans text-base md:text-lg text-foreground/90 leading-relaxed max-w-3xl">
              A community-led holiday program built to help children{" "}
              <span className="block sm:inline">feel supported, confident, and cared for.</span>
            </p>
          </div>

          {/* Subtle divider - small dots */}
          <div className="flex items-center justify-center py-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-primary/20" />
              <div className="w-1 h-1 rounded-full bg-primary/30" />
              <div className="w-1 h-1 rounded-full bg-primary/20" />
            </div>
          </div>

          {/* Second Value Block: Meeting Real Needs */}
          <div className="space-y-4 md:space-y-5">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight tracking-tight">
              Meeting Real Needs
            </h2>
            <p className="font-sans text-base md:text-lg text-foreground/90 leading-relaxed max-w-3xl">
              We step in knowing we don't always see what life looks like for these children the other days of the year.
              <span className="block mt-3 md:mt-4">
                That's why essentials matter just as much as wishes.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

