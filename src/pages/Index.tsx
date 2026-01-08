import { HeroBanner, WhatThisIsAbout, WhereTheHeartComesIn, Mission, WhoJoyDropIsFor, HowYouCanHelp, ContactSection } from "@/components/sections";

/**
 * PAGE SECTIONS REFERENCE
 * 
 * Use these identifiers to easily locate and update specific sections:
 * 
 * 1. Hero Banner Section
 *    - Component: HeroBanner
 *    - File: src/components/sections/hero/HeroBanner.tsx
 *    - ID: #hero-banner
 *    - Data attribute: data-section="hero-banner"
 *    - Description: Main hero section with background image and headline
 * 
 * 2. What This Is All About Section
 *    - Component: WhatThisIsAbout
 *    - File: src/components/sections/about/WhatThisIsAbout.tsx
 *    - ID: #what-this-is-about
 *    - Data attribute: data-section="what-this-is-about"
 *    - Description: Introduction to Joy Drop as a community-led holiday program
 * 
 * 3. Where the Heart Comes In Section
 *    - Component: WhereTheHeartComesIn
 *    - File: src/components/sections/heart/WhereTheHeartComesIn.tsx
 *    - ID: #where-the-heart-comes-in
 *    - Data attribute: data-section="where-the-heart-comes-in"
 *    - Description: Purpose-driven editorial section about why Joy Drop exists and its values
 * 
 * 4. Mission Section
 *    - Component: Mission
 *    - File: src/components/sections/mission/Mission.tsx
 *    - ID: #mission
 *    - Data attribute: data-section="mission"
 *    - Description: Mission statement with "Who Joy Drop Is For" and "Meeting Real Needs" content
 * 
 * 5. Who Joy Drop Is For Section
 *    - Component: WhoJoyDropIsFor
 *    - File: src/components/sections/roles/WhoJoyDropIsFor.tsx
 *    - ID: #who-joy-drop-is-for
 *    - Data attribute: data-section="who-joy-drop-is-for"
 *    - Description: Grid of role tiles (Sponsors, Donors, Volunteers, Our Commitment)
 * 
 * 6. How You Can Help Section
 *    - Component: HowYouCanHelp
 *    - File: src/components/sections/help/HowYouCanHelp.tsx
 *    - ID: #how-you-can-help
 *    - Data attribute: data-section="how-you-can-help"
 *    - Description: Three action cards inviting participation (Sponsor, Donate, Volunteer)
 * 
 * 7. Contact Section
 *    - Component: ContactSection
 *    - File: src/components/sections/contact/ContactSection.tsx
 *    - ID: #contact
 *    - Data attribute: data-section="contact"
 *    - Description: Contact form for questions, volunteer interest, or general inquiries
 */

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* SECTION: Hero Banner */}
      <HeroBanner />
      
      {/* SECTION: What This Is All About */}
      <WhatThisIsAbout />
      
      {/* SECTION: Where the Heart Comes In */}
      <WhereTheHeartComesIn />
      
      {/* SECTION: Mission */}
      <Mission />
      
      {/* SECTION: Who Joy Drop Is For */}
      <WhoJoyDropIsFor />
      
      {/* SECTION: How You Can Help */}
      <HowYouCanHelp />
      
      {/* SECTION: Contact */}
      <ContactSection />
      
      {/* Closing Statement */}
      <p className="text-center text-muted-foreground text-[0.8125rem] font-light tracking-wide py-16 md:py-20">
        Support that carries children forward, long after the season passes.
      </p>
    </main>
  );
};

export default Index;
