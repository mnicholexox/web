import { UpdateCard, type UpdateCardProps } from './UpdateCard';

// Import Back to School images
import backToSchool1 from '@/components/sections/back to school1.jpg';
import backToSchool2 from '@/components/sections/back to school2.jpg';
import backToSchool3 from '@/components/sections/back to school3.jpg';
import backToSchool4 from '@/components/sections/back to school4.jpg';

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
const SAMPLE_UPDATES: (Omit<UpdateCardProps, 'featured'> & { id: string })[] = [
  {
    id: '0',
    date: '2026-07-23',
    headline: 'Before the First Bell — Two Girls, Fully Prepared for School',
    summary: "Just before school began, JoyDrop helped two local girls—one entering Pre-K and one beginning sixth grade—start the year with fully stocked backpacks, complete school supplies, and a little extra joy.",
    tags: ['2 girls', 'Pre-K & 6th grade', 'Every list checked off'],
    images: [backToSchool1, backToSchool2, backToSchool3, backToSchool4],
    fullContent: {
      paragraphs: [
        "Just before the new school year began, JoyDrop learned of two local girls in urgent need of school supplies—one entering Pre-K and the other beginning sixth grade.",
        "With their school lists in hand, we got to work. By July 23, both girls had everything they needed: backpacks, notebooks, folders, pencils, crayons, markers, colored pencils, highlighters, glue, erasers, headphones, classroom supplies, and more. We also included a few fun extras chosen just for them, because every child deserves to feel excited about their first day.",
        "Starting school prepared may sound simple, but it can make an enormous difference. These supplies meant both girls could walk into their classrooms feeling confident, included, and ready to learn—and their family had one less worry to carry during an already difficult season.",
        "This effort came together because our community saw a need and immediately stepped forward to shop, organize, pack, and deliver. Their generosity transformed two long school-supply lists into two fully stocked backpacks before the first bell rang.",
        "At JoyDrop, moments like this are why we do what we do. Community care doesn’t always have to be complicated. Sometimes, it looks like showing up quickly, checking every box, and making sure two girls begin the year knowing they are supported.",
      ],
    },
  },
  {
    id: '1',
    date: '2025-12-22',
    headline: 'Every Checklist Fulfilled — Because Our Community Showed Up',
    summary: 'This holiday season, something truly special happened in Georgia. Thanks to an incredible outpouring of generosity, all 18 children in our Angel Tree initiative had their wishlists fully completed.',
    tags: ['18 children', 'Every wishlist fulfilled', 'Community delivered'],
    images: [checklist1, checklist2, checklist3, checklist4, endOfYearSuccess],
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
    summary: 'Because of your generosity, the remaining 10 wishlists can now be fulfilled—meaning more children will feel warm, cared for, and confident this Christmas.',
    images: [moneyRaised1, moneyRaised2],
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
    summary: 'With just 8 days until Christmas, 10 out of 18 children still have unmet needs—and your kindness can help close these final gaps.',
    images: [needDonations],
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
    summary: 'Santa, Mrs. Claus and a surprise visit from the Grinch brought Twin Lakes together for an evening of crafts, photos and giving back.',
    images: [angelTree1, angelTree2, angelTree3],
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
    summary: 'In December, our Angel Tree effort came full circle as volunteers delivered every gift prepared through Santa\'s Workshop—ensuring children in our community felt seen, supported, and celebrated.',
    images: [angelTree4, angelTree5],
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
    summary: 'After weeks of organizing and three days of wrapping, gifts are now ready to bring joy to local families.',
    images: [angelTree6, angelTree7],
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
 * The newest update is featured at the top; the rest are listed
 * under "More from Joy Drop".
 */
export const UpdatesSection = () => {
  const [featured, ...rest] = SAMPLE_UPDATES;

  return (
    <section id="updates-list" data-section="updates-list" className="relative w-full">
      <UpdateCard key={featured.id} {...featured} featured />

      {rest.length > 0 && (
        <>
          {/* Ribbon trailing off to the right (phones) */}
          <svg
            className="pointer-events-none absolute right-0 mt-6 h-16 w-[55%] sm:hidden"
            viewBox="0 0 220 60"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path d="M0 52 C 60 58, 120 30, 170 18 C 195 12, 210 14, 230 20" stroke="#efb9c3" strokeWidth="7" strokeLinecap="round" strokeOpacity="0.7" />
          </svg>
          <h2
            className="relative mt-10 sm:mt-16 font-serif leading-tight tracking-tight text-[#3a2420]"
            style={{ fontSize: "clamp(1.875rem, 3.4vw, 2.75rem)" }}
          >
            More from Joy Drop
          </h2>
          <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-6">
            {rest.map(({ id, ...update }) => (
              <UpdateCard key={id} {...update} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
