import { DataTile } from './DataTile';
import { GiftBoxTile } from './GiftBoxTile';

export const WhatThisIsAbout = () => {
  return (
    <section 
      id="what-this-is-about"
      data-section="what-this-is-about"
      className="w-full pt-20 md:pt-32 pb-12 md:pb-16 bg-card"
    >
      {/* Editorial Headline Block */}
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <span className="inline-block text-[11px] md:text-xs font-sans uppercase tracking-[0.25em] text-muted-foreground/70 font-medium mb-6 md:mb-8">
            What This Is All About
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
              transform: 'translateY(-60px)',
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
              transform: 'translateY(-60px)',
            }}
          />
        </div>

        {/* Impact Proof Points */}
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 relative z-10">
            <DataTile 
              value="2022" 
              label="" 
              description="Started Sharing"
            />
            <DataTile 
              value="232" 
              label="Children supported" 
              description="Wishlists Fulfilled with Care"
            />
            <DataTile 
              value="$2,800" 
              label="Donation Dollars Directed Toward Gifts & Essentials" 
            />
            <GiftBoxTile 
              title="Every Donation"
              subtitle="Hand-delivered"
              description="from a shared commitment to be of service, every year"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

