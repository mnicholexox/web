import { UpdateCard } from './UpdateCard';

// Import End of Year Announcement images for carousel
import checklist1 from '@/components/sections/checklist1.png';
import checklist2 from '@/components/sections/checklist2.png';
import checklist3 from '@/components/sections/checklist3.png';
import checklist4 from '@/components/sections/checklist4.png';
import endOfYearSuccess from '@/components/sections/End of Year Success.png';

// Import Goal Reached images for carousel
import moneyRaised1 from '@/components/sections/moneyraised1of2.PNG';
import moneyRaised2 from '@/components/sections/moneyraised2of2.PNG';

// Import Need Donations image
import needDonations from '@/components/sections/need donations.PNG';

// Import Angel Tree images for Grinch article
import angelTree1 from '@/components/sections/angel tree1.png';
import angelTree2 from '@/components/sections/angel tree2.png';
import angelTree3 from '@/components/sections/angel tree3.png';

// Import Angel Tree images for Deliveries Complete article
import angelTree4 from '@/components/sections/angel tree4.jpg';
import angelTree5 from '@/components/sections/angel tree5.jpg';

// Import Angel Tree images for Deliveries Ready article
import angelTree6 from '@/components/sections/angel tree6.jpg';
import angelTree7 from '@/components/sections/angel tree7.jpg';

/**
 * Sample updates data
 * In a real application, this would come from a CMS or database
 */
const SAMPLE_UPDATES = [
  {
    id: '1',
    date: '2025-12-22',
    headline: 'Every Checklist Fulfilled — Because Our Community Showed Up',
    imageUrls: [checklist1, checklist2, checklist3, checklist4, endOfYearSuccess],
    fullContent: {
      subheadline: 'This holiday season, something truly special happened in Georgia.',
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
    date: '2025-12-18',
    headline: 'Goal Reached: $800+ Raised. 8 out of 18 Children Supported This Season.',
    imageUrls: [moneyRaised1, moneyRaised2],
    fullContent: {
      subheadline: 'Because of your generosity, the remaining 10 wishlists can now be fulfilled—meaning more children will feel warm, cared for, and confident this Christmas.',
      paragraphs: [
        'With just 7 days until Christmas, our community showed up in an incredible way. Thanks to your generosity, we raised over $800 to support the remaining Angel Tree children this season.',
      ],
      list: {
        intro: 'Because of you, all 18 local children will receive:',
        items: [
          'Warm winter coats and seasonal accessories',
          '2–3 versatile outfits for everyday wear',
          'Properly fitting shoes',
          'Essential hygiene items',
        ],
      },
      closing: [
        'And, if funds allow, a small toy to bring a little extra joy.',
        'This support helps ensure every child feels warm, cared for, and confident during the winter months. We don\'t always know what these kids have access to during the other 364 days of the year—but today, we can rest a little easier knowing they\'re stocked with what they need for a while.',
        'That peace of mind is something you made possible.',
      ],
    },
  },
  {
    id: '2.5',
    date: '2024-12-17',
    headline: 'Only 8 Days Left: 10 Children Still in Need This Christmas',
    imageUrls: [needDonations],
    fullContent: {
      subheadline: 'With just 8 days until Christmas, 10 out of 18 children still have unmet needs—and your kindness can help close these final gaps.',
      paragraphs: [
        'With only 8 days left until Christmas, our Angel Tree program is supporting 18 local children right here in Twin Lakes—and while many needs have already been met, there is still important work to do.',
        'Thanks to the generosity of our neighbors, several wishlists have been fulfilled—but 10 children still have unclaimed items. Many of these lists aren\'t focused on toys. Instead, they include essentials like warm winter jackets, properly fitting shoes, and school-ready clothing—items that directly impact a child\'s comfort, confidence, and well-being.',
        'Every contribution helps close these final gaps. A $35 donation can go a long way toward completing a wishlist item and ensuring a child feels supported, seen, and cared for this Christmas.',
      ],
      closing: [
        'We know this time of year can be financially demanding, and we are deeply grateful for any form of support—whether that\'s donating, sharing this message, or simply keeping these families in your thoughts. Together, small acts of kindness add up to something truly meaningful.',
        '💛 Thank you for helping our neighborhood children feel warm, confident, and remembered this Christmas.',
      ],
    },
  },
  {
    id: '3',
    date: '2024-12-11',
    headline: '🎄 The Grinch Stole Twin Lakes: A Holiday Community Celebration',
    imageUrls: [angelTree1, angelTree2, angelTree3],
    fullContent: {
      subheadline: 'Event Date: December 7, 2024 • Location: Twin Lakes Community',
      paragraphs: [
        'Our December holiday event brought Twin Lakes together for an evening full of laughter, memories, and meaningful giving. Families gathered to enjoy festive activities, capture holiday photos, and support neighbors in need—all in one joyful celebration.',
        'Santa and Mrs. Claus made a special appearance, joined by a surprise guest: the Grinch himself! Children (and pets!) had the chance to take photos, decorate ornaments, and enjoy creative crafts throughout the event. Activities were thoughtfully scheduled so everyone had time to participate while keeping the evening flowing smoothly.',
        'Beyond the fun, the heart of the night was giving back. Guests were invited to support our Angel Tree and Food Drive—helping ensure local families had both gifts and essentials this season. Thanks to the generosity of our community, donations poured in to support children and middle school students in need.',
      ],
      closing: [
        'We\'re incredibly grateful to everyone who attended, donated, volunteered, and helped make the night possible. Seeing families come together—sharing joy, kindness, and generosity—is exactly what Joy Drop is all about.',
        '✨ Thank you for helping us make the season brighter for our community.',
      ],
    },
  },
  {
    id: '4',
    date: '2023-12-18',
    headline: '🎁 Angel Tree Deliveries Complete',
    blurb: 'In December, our Angel Tree effort came full circle as volunteers delivered every gift prepared through Santa\'s Workshop—ensuring children in our community felt seen, supported, and celebrated.',
    imageUrls: [angelTree4, angelTree5],
    fullContent: {
      subheadline: '8 children · 6 families · One unforgettable Christmas',
      paragraphs: [
        'In December, our Angel Tree effort came full circle as volunteers delivered every gift prepared through Santa\'s Workshop—ensuring children in our community felt seen, supported, and celebrated.',
        'Together with dedicated coordinators and counselors, Joy Drop helped fulfill the holiday wishlists of 8 children across 6 families, turning weeks of planning, organizing, and wrapping into moments of real joy.',
        'This delivery marked more than the end of a project—it reflected what happens when a community shows up with intention. Every gift was thoughtfully prepared, carefully tracked, and delivered with dignity and care.',
      ],
      closing: [
        'A special thank-you to Kaetlyn Porter for leading coordination efforts and working closely with school counselors and adopters to make this possible. We\'re proud to continue building this partnership and look forward to growing this tradition in the years ahead.',
        '💛 Because when care is shared, joy travels far.',
      ],
    },
  },
  {
    id: '4.5',
    date: '2023-12-18',
    headline: '🎁 Angel Tree Deliveries Ready: 14 Children, One Beautiful Christmas',
    imageUrls: [angelTree6, angelTree7],
    fullContent: {
      subheadline: 'After weeks of organizing and three days of wrapping, gifts are now ready to bring joy to local families.',
      paragraphs: [
        'This year, 14 children in our community are waking up to a brighter Christmas morning thanks to our Angel Tree program. 😇🎄',
        'After weeks of organizing, shopping, and three full days of wrapping, these thoughtfully chosen gifts are now ready to be delivered to parents—ensuring elementary and middle school students feel celebrated, supported, and deeply cared for.',
        'Being part of this effort is a powerful reminder of what community truly means. Watching neighbors show up, give generously, and support children they may never meet is something we will never take for granted. ❤️',
      ],
      closing: [
        'A heartfelt thank-you to everyone who made this possible:',
        '📣 Thank you to all the neighbors who donated gifts',
        '📣 Thank you to Mary Elizabeth Couch and Claire Betz Melancon for stepping in to help wrap when things got wild 😂',
        '📣 Thank you to Kaetlyn Porter for organizing and working alongside us every step of the way ❤️',
        'Because of you, joy will be unwrapped tomorrow morning.',
      ],
    },
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
                  imageUrls={update.imageUrls}
                  isHero={isHero}
                  truncateAt={isHero ? 'Special surprises that brought genuine joy' : undefined}
                  imagePlacement={update.id === '2' ? 'full-width' : (update.id === '3' || update.id === '4' || update.id === '4.5') ? 'hero-top' : 'sidebar'}
                  hideClosingByDefault={update.id === '2.5'}
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
