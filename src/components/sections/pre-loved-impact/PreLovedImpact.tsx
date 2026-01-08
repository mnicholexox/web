import { Sparkles, Package, RefreshCw, Clock } from "lucide-react";

/* Decorative divider with sparkles */
const SparklesDivider = () => (
  <div className="flex items-center justify-center gap-3 py-4 md:py-6">
    <div className="w-12 h-px bg-primary/20" />
    <Sparkles className="w-4 h-4 text-primary/40" strokeWidth={1.5} />
    <div className="w-12 h-px bg-primary/20" />
  </div>
);

interface CategoryThumbnail {
  label: string;
  bgColor: string;
  icon: string;
}

interface ImpactColumnProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  label: string;
  thumbnails: [CategoryThumbnail, CategoryThumbnail];
}

/* Category thumbnail placeholder with icon and styling */
const CategoryThumbnailImage = ({ thumbnail }: { thumbnail: CategoryThumbnail }) => (
  <div 
    className="h-[140px] md:h-[150px] rounded-lg overflow-hidden border border-border/20 flex items-center justify-center"
    style={{
      background: thumbnail.bgColor,
      boxShadow: '0 2px 8px hsl(344 35% 50% / 0.08)',
    }}
  >
    <span className="text-4xl">{thumbnail.icon}</span>
  </div>
);

const ImpactColumn = ({ icon, title, value, label, thumbnails }: ImpactColumnProps) => (
  <div className="flex flex-col items-center text-center">
    {/* Column Header with Icon */}
    <div className="flex items-center gap-2 mb-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-medium text-foreground/80">{title}</span>
    </div>
    
    {/* Large Number */}
    <div className="font-serif text-[42px] sm:text-[52px] md:text-[60px] text-foreground leading-none tracking-tight mb-2">
      {value}
    </div>
    
    {/* Label Under Number */}
    <p className="text-sm text-muted-foreground font-medium mb-6">
      {label}
    </p>
    
    {/* Two Thumbnails Side by Side */}
    <div className="w-full">
      <div className="grid grid-cols-2 gap-3">
        {thumbnails.map((thumbnail, idx) => (
          <div key={idx} className="flex flex-col">
            <CategoryThumbnailImage thumbnail={thumbnail} />
            {/* Category Label - Small Caps Serif Style */}
            <span 
              className="mt-2 text-[10px] md:text-[11px] font-serif tracking-[0.08em] text-foreground/60 uppercase"
              style={{ fontVariant: 'small-caps' }}
            >
              {thumbnail.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const PreLovedImpact = () => {
  const impactData = [
    {
      icon: <Package className="w-4 h-4 text-primary/70" strokeWidth={1.5} />,
      title: "Pre-Loved Items Collected",
      value: "1,234",
      label: "Items donated this season",
      thumbnails: [
        { label: "LEGO Sets", bgColor: "linear-gradient(135deg, hsl(45 80% 90%) 0%, hsl(35 70% 85%) 100%)", icon: "🧱" },
        { label: "Dolls & Figures", bgColor: "linear-gradient(135deg, hsl(330 60% 92%) 0%, hsl(340 50% 88%) 100%)", icon: "🪆" },
      ] as [CategoryThumbnail, CategoryThumbnail],
    },
    {
      icon: <RefreshCw className="w-4 h-4 text-primary/70" strokeWidth={1.5} />,
      title: "Items Restored & Ready",
      value: "892",
      label: "Clean, wrapped & matched",
      thumbnails: [
        { label: "Board Games", bgColor: "linear-gradient(135deg, hsl(200 60% 90%) 0%, hsl(210 50% 85%) 100%)", icon: "🎲" },
        { label: "Art & Coloring", bgColor: "linear-gradient(135deg, hsl(280 50% 92%) 0%, hsl(290 40% 88%) 100%)", icon: "🎨" },
      ] as [CategoryThumbnail, CategoryThumbnail],
    },
    {
      icon: <Clock className="w-4 h-4 text-primary/70" strokeWidth={1.5} />,
      title: "Still In Progress",
      value: "342",
      label: "Being prepared with care",
      thumbnails: [
        { label: "Art & Coloring", bgColor: "linear-gradient(135deg, hsl(140 50% 90%) 0%, hsl(150 40% 85%) 100%)", icon: "✏️" },
        { label: "Misc Items", bgColor: "linear-gradient(135deg, hsl(25 60% 90%) 0%, hsl(35 50% 85%) 100%)", icon: "🧸" },
      ] as [CategoryThumbnail, CategoryThumbnail],
    },
  ];

  return (
    <section 
      id="pre-loved-impact"
      data-section="pre-loved-impact"
      className="relative w-full py-20 sm:py-28 overflow-hidden"
    >
      {/* Full-width soft pink watercolor background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, hsl(344 35% 95% / 0.6) 0%, hsl(38 67% 97%) 100%)',
        }}
      />
      
      {/* Gentle vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, hsl(344 35% 90% / 0.15) 100%)',
        }}
      />
      
      {/* Subtle decorative watercolor blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-10 left-[10%] w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'hsl(344 35% 80% / 0.15)' }}
        />
        <div 
          className="absolute bottom-10 right-[10%] w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'hsl(38 65% 80% / 0.15)' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'hsl(344 35% 85% / 0.1)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header - Centered */}
        <div className="text-center mb-8 sm:mb-10">
          {/* Eyebrow label */}
          <span className="inline-block text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-primary/60 mb-4">
            Pre-Loved Impact
          </span>

          {/* Main headline */}
          <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] lg:text-5xl text-foreground leading-tight tracking-tight mb-4 sm:mb-6">
            Your Pre-Loved Items Making an Impact
          </h2>

          {/* Subheadline */}
          <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every donated item is restored, matched, and delivered with care.
          </p>
        </div>

        {/* Decorative divider with sparkles */}
        <SparklesDivider />

        {/* Frosted Glass Card Container */}
        <div 
          className="rounded-2xl border border-white/40 p-6 sm:p-8 md:p-10"
          style={{
            background: 'linear-gradient(135deg, hsl(0 0% 100% / 0.7) 0%, hsl(0 0% 100% / 0.5) 100%)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px hsl(344 35% 50% / 0.08), 0 2px 8px hsl(0 0% 0% / 0.04)',
          }}
        >
          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
            {impactData.map((item, index) => (
              <ImpactColumn
                key={index}
                icon={item.icon}
                title={item.title}
                value={item.value}
                label={item.label}
                thumbnails={item.thumbnails}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
