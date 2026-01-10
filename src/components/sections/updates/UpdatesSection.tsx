import { UpdateCard } from './UpdateCard';

/**
 * Sample updates data
 * In a real application, this would come from a CMS or database
 */
const SAMPLE_UPDATES = [
  {
    id: '1',
    date: '2025-12-15',
    headline: 'Our Biggest Season Yet: 89 Children Supported This Year',
    blurb: 'Thanks to the incredible generosity of our community, we were able to fulfill wishlists for 89 children this holiday season — our largest year to date. Every child received something from their wishlist, plus essentials to start the new year feeling confident.',
    imageUrl: '/placeholder-update-1.jpg',
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
        {SAMPLE_UPDATES.map((update) => (
          <UpdateCard
            key={update.id}
            date={update.date}
            headline={update.headline}
            blurb={update.blurb}
            imageUrl={update.imageUrl}
          />
        ))}
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
