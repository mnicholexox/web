import { Button } from "@/components/ui/button";

export const HeroBanner = () => {
  return (
    <section 
      id="hero-banner"
      data-section="hero-banner"
      className="relative w-full min-h-[500px] md:min-h-[600px] flex items-start md:items-center pt-20 md:pt-0"
      style={{
        backgroundImage: `url('/Hero Banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Mobile gradient overlay - left to right for consistency */}
      <div 
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 35%)',
        }}
      />
      {/* Desktop gradient overlay - left to right, 30-35% width */}
      <div 
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 35%)',
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Identity Statement */}
          <div className="lg:col-span-5 space-y-4 md:space-y-5">
            {/* Main headline with ribbon */}
            <div className="relative">
              {/* Decorative ribbon - height: 96-120px, width: 1100-1300px, opacity: 0.35-0.45, no border/shadow */}
              <img 
                src="/ribbon.png" 
                alt=""
                aria-hidden="true"
                className="absolute pointer-events-none h-[96px] md:h-[120px]"
                style={{
                  width: 'clamp(1100px, 100%, 1300px)',
                  opacity: 0.4,
                  top: '50%',
                  left: '0',
                  transform: 'translateY(-50%)',
                  objectFit: 'cover',
                  border: 'none',
                  boxShadow: 'none',
                }}
              />
              <h1 
                className="relative font-serif text-white drop-shadow-lg text-left flex flex-col"
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)',
                  maxWidth: '500px',
                }}
              >
                {/* Context line - 80% of primary */}
                <span className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-tight tracking-tight">
                  When a Community
                </span>
                {/* Primary headline - largest */}
                <span className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] leading-tight tracking-tight">
                  Comes Together,
                </span>
                {/* Memorable finish - 90% with letter-spacing */}
                <span className="text-[27px] sm:text-[31px] md:text-[36px] lg:text-[45px] leading-tight tracking-wide">
                  Magic Happens
                </span>
              </h1>
            </div>
            
            {/* CTA Button */}
            <Button 
              className="text-white font-semibold px-6 py-3 text-base md:text-lg shadow-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#a33d3f' }}
            >
              Learn How You Can Help
            </Button>
          </div>

          {/* Right Column - Placeholder for "More Than Gifts" content */}
          <div className="lg:col-span-7">
            {/* This space is reserved for the right column content */}
          </div>
        </div>
      </div>
    </section>
  );
};

