import { UpdateCard } from './UpdateCard';

/**
 * Sample updates data
 * In a real application, this would come from a CMS or database
 */
const SAMPLE_UPDATES = [
  {
    id: '1',
    date: '2025-12-15',
    headline: 'Every Checklist Fulfilled — Because Our Community Showed Up',
    imageUrl: '/placeholder-update-1.jpg',
    fullContent: {
      subheadline: 'This holiday season, something truly special happened in Twin Lakes.',
      paragraphs: [
        'Thanks to an incredible outpouring of generosity, all 18 children in our Angel Tree initiative had their wishlists fully completed. Every gift was thoughtfully purchased, wrapped, and hand-delivered directly to families—ensuring warmth, dignity, and care reached exactly where it was needed.',
      ],
      list: {
        intro: 'Because of your support, children received:',
        items: [
          'Warm winter clothing and properly fitting shoes',
          'Multiple versatile outfits for school and everyday life',
          'Essential items like toiletries and winter accessories',
          'Thoughtful toys, books, and creative activities',
          'Special surprises that brought genuine joy',
        ],
      },
      closing: [
        'Many of these wishlists weren\'t about toys at all. They focused on necessities—jackets, shoes, and clothing that help children feel confident, comfortable, and cared for.',
        'Seeing every checklist marked complete is a powerful reminder of what can happen when neighbors rally together.',
        'This effort required countless hours of donating, shopping, organizing, wrapping, and delivering—and it was only possible because of the many residents who stepped up without hesitation.',
        'To everyone who gave in any way: thank you. Your generosity turned need into relief, uncertainty into comfort, and wishlists into fulfilled promises.',
        '💚 All gift checklists: fulfilled. Twin Lakes showed up—and made a lasting difference.',
      ],
    },
  },
  {
    id: '2',
    date: '2025-11-28',
    headline: 'Thank You to Our Volunteer Gift Wrappers',
    blurb: 'A heartfelt thank you to the 24 volunteers who spent their Saturday wrapping gifts with care. Your attention to detail and loving touches made each present feel extra special.',
  },
  {
    id: '3',
    date: '2025-11-15',
    headline: 'New Partnership with Local Schools Announced',
    blurb: 'We\'re thrilled to announce partnerships with three additional elementary schools, allowing us to reach more children in need. This expansion means more families will have access to support during the holiday season and beyond.',
    imageUrl: '/placeholder-update-2.jpg',
  },
  {
    id: '4',
    date: '2025-10-20',
    headline: 'Wishlist Collection Begins',
    blurb: 'Our annual wishlist collection has officially begun! We\'re working with school counselors and family advocates to gather thoughtful wishes from children in our community.',
  },
  {
    id: '5',
    date: '2025-09-08',
    headline: 'Back-to-School Success: 45 Kids Ready for Class',
    blurb: 'This fall, Joy Drop provided back-to-school essentials for 45 children, including backpacks, school supplies, and new outfits for the first day. Every child deserves to start the year feeling prepared and confident.',
    imageUrl: '/placeholder-update-3.jpg',
  },
  {
    id: '6',
    date: '2025-07-12',
    headline: 'Summer Program Recap: Joy in Every Package',
    blurb: 'Our summer care packages brought smiles to 30 families, including books, activity kits, and summer essentials. Thank you to everyone who helped make summer a little brighter for our community.',
  },
];

/**
 * UpdatesSection
 * 
 * The main content section for the Updates page.
 * Displays a vertically stacked list of update cards with
 * generous spacing and a soft, story-driven visual rhythm.
 */
export const UpdatesSection = () => {
  return (
    <section 
      id="updates-list"
      data-section="updates-list"
      className="w-full"
    >
      {/* Update Cards List */}
      <div className="space-y-6 md:space-y-8">
        {SAMPLE_UPDATES.map((update, index) => {
          const isHero = index === 0;
          return (
            <div 
              key={update.id} 
              className={isHero ? 'mb-8 md:mb-12' : ''}
            >
              <div 
                className={isHero ? 'w-[130%] -ml-[15%] md:w-[130%] md:-ml-[15%]' : ''}
              >
                <UpdateCard
                  date={update.date}
                  headline={update.headline}
                  blurb={update.blurb}
                  fullContent={update.fullContent}
                  imageUrl={update.imageUrl}
                  isHero={isHero}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Gentle closing element */}
      <div className="flex justify-center pt-12 md:pt-16">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-primary/15" />
          <svg 
            className="w-4 h-4 text-primary/25" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <div className="w-8 h-px bg-primary/15" />
        </div>
      </div>

      {/* Soft closing text */}
      <p className="text-center text-muted-foreground/70 text-[0.8125rem] font-light tracking-wide pt-6 pb-4">
        Thank you for being part of our journey.
      </p>
    </section>
  );
};
