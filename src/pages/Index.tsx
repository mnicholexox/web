import { HeroBanner } from "@/components/HeroBanner";
import { Mission } from "@/components/Mission";
import { WhoJoyDropIsFor } from "@/components/WhoJoyDropIsFor";

/**
 * PAGE SECTIONS REFERENCE
 * 
 * Use these identifiers to easily locate and update specific sections:
 * 
 * 1. Hero Banner Section
 *    - Component: HeroBanner
 *    - File: src/components/HeroBanner.tsx
 *    - ID: #hero-banner
 *    - Data attribute: data-section="hero-banner"
 *    - Description: Main hero section with background image and headline
 * 
 * 2. Mission Section
 *    - Component: Mission
 *    - File: src/components/Mission.tsx
 *    - ID: #mission
 *    - Data attribute: data-section="mission"
 *    - Description: Mission statement with "Who Joy Drop Is For" and "Meeting Real Needs" content
 * 
 * 3. Who Joy Drop Is For Section
 *    - Component: WhoJoyDropIsFor
 *    - File: src/components/WhoJoyDropIsFor.tsx
 *    - ID: #who-joy-drop-is-for
 *    - Data attribute: data-section="who-joy-drop-is-for"
 *    - Description: Grid of role tiles (Sponsors, Donors, Volunteers, Our Commitment)
 */

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* SECTION: Hero Banner */}
      <HeroBanner />
      
      {/* SECTION: Mission */}
      <Mission />
      
      {/* SECTION: Who Joy Drop Is For */}
      <WhoJoyDropIsFor />
    </main>
  );
};

export default Index;

