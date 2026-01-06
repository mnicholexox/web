import { ClipboardList, Package, HandHeart, CheckCheck, Heart } from "lucide-react";
import { RoleTile } from "./RoleTile";

export const WhoJoyDropIsFor = () => {
  const roles = [
    {
      icon: (
        <div className="relative">
          <ClipboardList 
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary/70" 
            strokeWidth={1.5}
          />
          <Heart 
            className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary/50" 
            fill="currentColor"
            strokeWidth={0}
          />
        </div>
      ),
      title: "Sponsors",
      description:
        "Choose to fulfill a child's wishlist, knowing exactly what's needed and where it's going.",
    },
    {
      icon: (
        <div className="relative">
          <Package 
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary/70" 
            strokeWidth={1.5}
          />
          <Heart 
            className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary/50" 
            fill="currentColor"
            strokeWidth={0}
          />
        </div>
      ),
      title: "Donors",
      description:
        "Contribute funds or gifts to help fill gaps and ensure no child is missed.",
    },
    {
      icon: (
        <HandHeart 
          className="w-5 h-5 sm:w-6 sm:h-6 text-primary/70" 
          strokeWidth={1.5}
        />
      ),
      title: "Volunteers",
      description:
        "Give time behind the scenes, restoring items and preparing each gift with care.",
    },
    {
      icon: (
        <div className="relative">
          <CheckCheck 
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary/70" 
            strokeWidth={1.5}
          />
          <Heart 
            className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary/50" 
            fill="currentColor"
            strokeWidth={0}
          />
        </div>
      ),
      title: "Our Commitment",
      description:
        "Every wishlist is reviewed, every gift is tracked, and every child is treated with dignity.",
    },
  ];

  return (
    <section 
      id="who-joy-drop-is-for"
      data-section="who-joy-drop-is-for"
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-card/50"
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Identity Statement */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10">
            {/* Eyebrow label */}
            <div>
              <span className="text-xs md:text-sm font-sans uppercase tracking-[0.15em] text-foreground/60">
                Who This Is For
              </span>
            </div>

            {/* Main headline - reduced size on mobile */}
            <h2 className="font-serif text-[28px] sm:text-[32px] md:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight">
              Who Joy Drop Is For
            </h2>
          </div>

          {/* Right Column - Role Tiles Grid */}
          <div className="lg:col-span-7">
            {/* Mobile: 1-column or 2-column depending on width, with increased spacing */}
            {/* Tablet/Desktop: 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 md:gap-0 border border-border/8 rounded-lg overflow-hidden bg-card/10">
              {roles.map((role, index) => (
                <RoleTile
                  key={index}
                  icon={role.icon}
                  title={role.title}
                  description={role.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

