import { DataTile } from './DataTile';
import { ImageTile } from './ImageTile';

export const WhatThisIsAbout = () => {
  return (
    <section 
      id="what-this-is-about"
      data-section="what-this-is-about"
      className="w-full py-20 md:py-32 bg-card"
    >
      {/* Editorial Headline Block */}
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <span className="inline-block text-[11px] md:text-xs font-sans uppercase tracking-[0.25em] text-muted-foreground/70 font-medium mb-6 md:mb-8">
            Introducing Joy Drop
          </span>
          
          {/* Primary Editorial Headline */}
          <h2 className="font-serif text-foreground font-normal leading-[1.2] md:leading-[1.15] tracking-normal"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            A community-led holiday program built to help children feel supported, confident, and cared for.
          </h2>
          
        </div>
      </div>

      {/* Decorative Ribbon - Full width, outside container */}
      <div className="relative w-full mt-16 md:mt-24">
        {/* Large decorative ribbon - flowing from left edge of section */}
        <div className="absolute left-0 top-0 w-full pointer-events-none hidden md:block" style={{ transform: 'translateY(-9%)' }}>
          <img
            src="/ribbon_3.png"
            alt=""
            aria-hidden="true"
            style={{
              width: '55%',
              height: 'auto',
              minHeight: '120px',
              opacity: 0.9,
              objectFit: 'contain',
              objectPosition: 'left center',
            }}
          />
        </div>
        {/* Mobile version */}
        <div className="relative md:hidden px-6" style={{ marginBottom: '-20px' }}>
          <img
            src="/ribbon_3.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none"
            style={{
              width: '100%',
              height: 'auto',
              minHeight: '80px',
              opacity: 0.7,
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Impact Proof Points */}
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative z-10">
          <DataTile 
            value="500+" 
            label="Children Served" 
          />
          <DataTile 
            value="200+" 
            label="Volunteers" 
          />
          <DataTile 
            value="$50K" 
            label="Gifts Donated" 
          />
          <ImageTile 
            value="100%" 
            label="Community Love" 
            imageSrc="/present-image.png"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

