import { HeroBanner, WhatThisIsAbout, Mission, WhoJoyDropIsFor } from "@/components/sections";

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
 * 3. Mission Section
 *    - Component: Mission
 *    - File: src/components/sections/mission/Mission.tsx
 *    - ID: #mission
 *    - Data attribute: data-section="mission"
 *    - Description: Mission statement with "Who Joy Drop Is For" and "Meeting Real Needs" content
 * 
 * 4. Who Joy Drop Is For Section
 *    - Component: WhoJoyDropIsFor
 *    - File: src/components/sections/roles/WhoJoyDropIsFor.tsx
 *    - ID: #who-joy-drop-is-for
 *    - Data attribute: data-section="who-joy-drop-is-for"
 *    - Description: Grid of role tiles (Sponsors, Donors, Volunteers, Our Commitment)
 */

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* SECTION: Hero Banner */}
      <HeroBanner />
      
      {/* SECTION: What This Is All About */}
      <WhatThisIsAbout />
      
      {/* SECTION: Mission */}
      <Mission />
      
      {/* SECTION: Who Joy Drop Is For */}
      <WhoJoyDropIsFor />
    </main>
  );
};

export default Index;
