// Import images for cards
import meetingNeedsImage from "@/components/sections/meeting needs.png";
import meetingNeeds2Image from "@/components/sections/meeting needs2.png";

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

interface BulletPointProps {
  children: React.ReactNode;
  isSub?: boolean;
  className?: string;
}

const BulletPoint = ({ children, isSub = false, className = '' }: BulletPointProps) => (
  <li className={`flex items-start gap-3 mb-3 ${className}`}>
    <div 
      className="rounded-full flex-shrink-0 mt-1.5"
      style={{ 
        width: isSub ? '6px' : '8px',
        height: isSub ? '6px' : '8px',
        backgroundColor: isSub ? '#D4A5AB' : '#B87B83'
      }}
    />
    <div 
      className="text-base leading-relaxed flex-1"
      style={{ color: '#4A3C39' }}
    >
      {children}
    </div>
  </li>
);

interface SubBulletListProps {
  children: React.ReactNode;
}

const SubBulletList = ({ children }: SubBulletListProps) => (
  <ul className="list-none mt-2 ml-4 space-y-2">
    {children}
  </ul>
);

interface CardProps {
  title: string;
  mainTitle: string;
  children: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  imagePlaceholder?: 'worn' | 'new';
}

/* Card component with white background and shadow */
const Card = ({ title, mainTitle, children, imageUrl, imageAlt, imagePlaceholder }: CardProps) => (
  <article 
    className="bg-white p-6 md:p-8 rounded-lg relative overflow-hidden"
    style={{
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    }}
  >
    {/* Text content - bottom bullets may need pr-[35%] md:pr-[42%] to clear the image */}
    <div className="relative z-10">
      <div className="flex items-start gap-3 mb-4">
        <HeartAccent />
        <h3 
          className="font-sans font-bold text-lg md:text-xl"
          style={{ color: '#B87B83' }}
        >
          {title}
        </h3>
      </div>
      
      <h4 
        className="font-serif font-bold text-xl md:text-2xl mb-4"
        style={{ color: '#4A3C39' }}
      >
        {mainTitle}
      </h4>
      
      <ul className="list-none space-y-2">
        {children}
      </ul>
    </div>
    
    {/* Image positioned at bottom-right, overlapping slightly */}
    {imageUrl ? (
      <div 
        className="absolute right-0 bottom-0 w-1/3 md:w-2/5 h-2/5 md:h-1/2 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <img 
          src={imageUrl}
          alt={imageAlt || ''}
          className="w-full h-full object-cover object-center rounded-br-lg"
        />
      </div>
    ) : imagePlaceholder === 'worn' ? (
      <div 
        className="absolute right-0 bottom-0 w-1/3 md:w-2/5 h-2/5 md:h-1/2 pointer-events-none flex items-center justify-center rounded-br-lg"
        style={{ 
          zIndex: 1,
          background: 'linear-gradient(135deg, #D4C4B0 0%, #C4B5A0 50%, #B8A890 100%)',
        }}
      >
        <div className="text-center p-4 opacity-60">
          <div className="text-xs text-gray-700 font-sans">Image: Worn items</div>
        </div>
      </div>
    ) : imagePlaceholder === 'new' ? (
      <div 
        className="absolute right-0 bottom-0 w-1/3 md:w-2/5 h-2/5 md:h-1/2 pointer-events-none flex items-center justify-center rounded-br-lg"
        style={{ 
          zIndex: 1,
          background: 'linear-gradient(135deg, #E8F4F8 0%, #D0E8F0 50%, #B8DCE8 100%)',
        }}
      >
        <div className="text-center p-4 opacity-60">
          <div className="text-xs text-gray-700 font-sans">Image: New items</div>
        </div>
      </div>
    ) : null}
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
              style={{ color: '#2A2A2A' }}
            >
              Care that shows up on Christmas — and stays for the other 364 days.
            </p>
            
            {/* Decorative divider with three dots */}
            <div className="flex items-center justify-center pt-2 gap-2">
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
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#B87B83'
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
            </div>
          </div>
          
          {/* Two cards side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-4">
            <Card 
              title="The Problem" 
              mainTitle="The Need Doesn't End After Christmas"
              imageUrl={meetingNeedsImage}
              imageAlt="Worn backpack, notebook, and shoes showing the ongoing need for basic necessities"
            >
              <BulletPoint>
                Christmas may be when some kids feel truly seen and included.
              </BulletPoint>
              <BulletPoint>
                After the holidays, many face challenges:
                <SubBulletList>
                  <BulletPoint isSub>Outgrown clothes</BulletPoint>
                  <BulletPoint isSub>Worn shoes</BulletPoint>
                  <BulletPoint isSub>Feeling left out</BulletPoint>
                </SubBulletList>
              </BulletPoint>
              <BulletPoint className="pr-[35%] md:pr-[42%]">
                Without essentials or confidence-boosting experiences, it's hard for these kids to thrive at school and in friendships.
              </BulletPoint>
            </Card>
            
            <Card 
              title="Solution" 
              mainTitle="Meeting Real Needs"
              imageUrl={meetingNeeds2Image}
              imageAlt="Essential items including clothing, shoes, and hygiene products showing the real needs being met"
            >
              <BulletPoint>
                Joy Drop makes sure <strong>children</strong> feel valued beyond just Christmas morning.
              </BulletPoint>
              <BulletPoint>
                Toy donations let us redirect limited funds to provide year-round essentials like:
                <SubBulletList>
                  <BulletPoint isSub>Clothing</BulletPoint>
                  <BulletPoint isSub>Hygiene items</BulletPoint>
                  <BulletPoint isSub>Properly fitting shoes</BulletPoint>
                </SubBulletList>
              </BulletPoint>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

