import { useState, useEffect, useRef } from "react";
import { Sparkles, Package, RefreshCw, Clock, Pencil, AlertCircle, X } from "lucide-react";
import { LadiesCraftCrewCard } from "./LadiesCraftCrewCard";
import { useAdminMode } from "@/hooks";
import {
  loadThumbnailImage,
  saveThumbnailImage,
  removeThumbnailImage,
  StoredImage,
} from "@/lib/adminStorage";
import legoSetsImage from "@/components/sections/mission/LEGO Sets.png";
import dollsStuffiesImage from "@/components/sections/mission/Dolls and stuffies.png";
import boardGamesImage from "@/components/sections/how-it-works/board games.png";
import makeupSetImage from "@/components/sections/how-it-works/Too-Faced-Gingerbread-Lane.JPG";
import dollHouse1 from "@/components/sections/how-it-works/1.png";
import dollHouse2 from "@/components/sections/how-it-works/2.png";
import dollHouse3 from "@/components/sections/how-it-works/3.png";
import miniAirHockeyImage from "@/components/sections/donated items 4.png";
import { CategoryThumbnailCarousel, CarouselSlide } from "./CategoryThumbnailCarousel";

/* Decorative divider with sparkles */
const SparklesDivider = () => (
  <div className="flex items-center justify-center gap-3 py-4 md:py-5">
    <div className="w-14 h-px bg-[#a2283f]/50" />
    <Sparkles className="w-4 h-4 text-[#a2283f]" strokeWidth={1.5} />
    <div className="w-14 h-px bg-[#a2283f]/50" />
  </div>
);

/* Little burst lines either side of the needed items */
const Rays = ({ side }: { side: "left" | "right" }) => (
  <svg
    className={`block h-10 w-5 shrink-0 text-[#6e1428] sm:h-14 sm:w-8 ${side === "right" ? "-scale-x-100" : ""}`}
    viewBox="0 0 32 56"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M18 10 L 28 16 M6 28 H 24 M18 46 L 28 40" />
  </svg>
);

/* Admin Pill Component */
const AdminPill = ({ onLogout }: { onLogout: () => void }) => (
  <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
    <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800 border border-amber-200">
      Admin
    </span>
    <button
      onClick={onLogout}
      className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
    >
      Log out
    </button>
  </div>
);

interface CategoryThumbnail {
  id: string;
  label: string;
  bgColor: string;
  icon: string;
  defaultImage?: string;
}

interface CategoryThumbnailImageProps {
  thumbnail: CategoryThumbnail;
  isAdmin: boolean;
  uploadedImage: StoredImage | null;
  onUpload: (categoryId: string, file: File) => Promise<void>;
  onRemove: (categoryId: string) => void;
}

/* Category thumbnail placeholder with icon and styling */
const CategoryThumbnailImage = ({
  thumbnail,
  isAdmin,
  uploadedImage,
  onUpload,
  onRemove,
}: CategoryThumbnailImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setIsUploading(true);

    try {
      await onUpload(thumbnail.id, file);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove(thumbnail.id);
    setError(null);
  };

  return (
    <div className="relative">
      <div
        className="h-[78px] min-[400px]:h-[88px] sm:h-[110px] md:h-[130px] rounded-xl overflow-hidden border border-border/20 flex items-center justify-center relative group"
        style={{
          background: uploadedImage ? undefined : thumbnail.bgColor,
          boxShadow: "0 2px 8px hsl(344 35% 50% / 0.08)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {uploadedImage ? (
          <>
            <img
              src={uploadedImage.dataUrl}
              alt={thumbnail.label}
              className="w-full h-full object-cover"
            />
            {/* Admin Remove Button on uploaded images */}
            {isAdmin && isHovered && (
              <button
                onClick={handleRemove}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/90 hover:bg-red-600 text-white flex items-center justify-center shadow-lg transition-all z-10"
                aria-label="Remove image"
                title="Remove this image"
              >
                <X className="w-3.5 h-3.5" strokeWidth={2.5} />
              </button>
            )}
          </>
        ) : thumbnail.defaultImage ? (
          <img
            src={thumbnail.defaultImage}
            alt={thumbnail.label}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-4xl">{thumbnail.icon}</span>
        )}

        {/* Admin Upload Button (hover overlay) */}
        {isAdmin && isHovered && (
          <button
            onClick={handleUploadClick}
            disabled={isUploading}
            className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity"
            title="Upload image"
          >
            <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white/90 text-foreground shadow-sm">
              <Pencil className="w-3.5 h-3.5" />
              {isUploading ? "Uploading..." : uploadedImage ? "Replace" : "Upload"}
            </span>
          </button>
        )}

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Error message */}
      {error && (
        <div className="absolute -bottom-6 left-0 right-0 flex items-center justify-center gap-1 text-[10px] text-red-600">
          <AlertCircle className="w-3 h-3" />
          <span className="truncate">{error}</span>
        </div>
      )}
    </div>
  );
};

interface StatColumnProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  label: string;
}

const StatColumn = ({
  icon,
  title,
  value,
  label,
}: StatColumnProps) => (
  <div className="flex flex-col items-center px-2 text-center md:px-6">
    {/* Column Header with Icon */}
    <div className="flex items-center gap-2 mb-2 text-left sm:gap-3 sm:mb-3">
      <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#f8e4e6] text-[#8a1f38] flex items-center justify-center">
        {icon}
      </div>
      <span className="font-sans text-[13px] leading-tight sm:text-base font-semibold text-[#3a2420]">{title}</span>
    </div>

    {/* Large Number */}
    <div className="font-serif text-[52px] sm:text-[60px] md:text-[68px] text-[#5e1022] leading-none tracking-tight mb-2">
      {value}
    </div>

    {/* Label Under Number */}
    <p className="font-sans text-[13px] leading-snug sm:text-sm text-foreground/70">{label}</p>
  </div>
);

export const PreLovedImpact = () => {
  const { isAdmin, disableAdmin } = useAdminMode();
  const [uploadedThumbnails, setUploadedThumbnails] = useState<{
    [categoryId: string]: StoredImage | null;
  }>({});

  // Define all category IDs for thumbnails
  const allCategoryIds = [
    "lego-sets",
    "dolls-figures",
    "art-coloring-1",
    "misc-items",
  ];

  // Load uploaded thumbnails on mount
  useEffect(() => {
    const loaded: { [categoryId: string]: StoredImage | null } = {};
    allCategoryIds.forEach((id) => {
      loaded[id] = loadThumbnailImage(id);
    });
    setUploadedThumbnails(loaded);
  }, []);

  const handleThumbnailUpload = async (categoryId: string, file: File) => {
    const stored = await saveThumbnailImage(categoryId, file);
    setUploadedThumbnails((prev) => ({
      ...prev,
      [categoryId]: stored,
    }));
  };

  const handleThumbnailRemove = (categoryId: string) => {
    removeThumbnailImage(categoryId);
    setUploadedThumbnails((prev) => ({
      ...prev,
      [categoryId]: null,
    }));
  };

  const statsData = [
    {
      icon: <Package className="w-5 h-5" strokeWidth={1.6} />,
      title: "Pre-Loved Items Collected",
      value: "6",
      label: "Items donated this season",
    },
    // Hidden for now: Items Restored & Ready section
    // {
    //   icon: <RefreshCw className="w-4 h-4 text-primary/70" strokeWidth={1.5} />,
    //   title: "Items Restored & Ready",
    //   value: "892",
    //   label: "Clean, wrapped & matched",
    // },
    {
      icon: <Clock className="w-5 h-5" strokeWidth={1.6} />,
      title: "Still In Progress",
      value: "4",
      label: "Being cleaned, refurbished, & wrapped with care",
    },
  ];

  // Doll Houses carousel slides (first item in first row)
  const dollHousesCarouselSlides: CarouselSlide[] = [
    {
      id: "doll-house-1",
      label: "Doll Houses",
      image: dollHouse1,
    },
    {
      id: "doll-house-2",
      label: "Doll Houses",
      image: dollHouse2,
    },
    {
      id: "doll-house-3",
      label: "Doll Houses",
      image: dollHouse3,
    },
  ];

  // Regular category thumbnails (first row - items 2-3)
  const regularThumbnailsData: CategoryThumbnail[] = [
    {
      id: "art-coloring-1",
      label: "Art & Coloring",
      bgColor:
        "linear-gradient(135deg, hsl(280 50% 92%) 0%, hsl(290 40% 88%) 100%)",
      icon: "🎨",
    },
  ];

  // Carousel slides for the MISC category (4th item in first row)
  const miscCarouselSlides: CarouselSlide[] = [
    {
      id: "board-games-carousel",
      label: "Board Games",
      image: boardGamesImage,
    },
    {
      id: "makeup-set",
      label: "Makeup Set",
      image: makeupSetImage,
    },
    {
      id: "mini-air-hockey",
      label: "Mini Air Hockey",
      image: miniAirHockeyImage,
    },
    {
      id: "misc-items",
      label: "Misc Items",
      bgColor:
        "linear-gradient(135deg, hsl(25 60% 90%) 0%, hsl(35 50% 85%) 100%)",
      icon: "🧸",
    },
  ];

  // "Needed" category thumbnails (second row with special styling)
  const neededThumbnailsData: CategoryThumbnail[] = [
    {
      id: "lego-sets",
      label: "LEGO Sets",
      bgColor:
        "linear-gradient(135deg, hsl(45 80% 90%) 0%, hsl(35 70% 85%) 100%)",
      icon: "🧱",
      defaultImage: legoSetsImage,
    },
    {
      id: "dolls-figures",
      label: "Dolls & Stuffies",
      bgColor:
        "linear-gradient(135deg, hsl(330 60% 92%) 0%, hsl(340 50% 88%) 100%)",
      icon: "🪆",
      defaultImage: dollsStuffiesImage,
    },
  ];

  return (
    <section
      id="pre-loved-impact"
      data-section="pre-loved-impact"
      className="relative w-full pt-6 sm:pt-8 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* Admin Pill */}
      {isAdmin && <AdminPill onLogout={disableAdmin} />}

      {/* Full-width soft pink watercolor background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(344 35% 95% / 0.6) 0%, hsl(38 67% 97%) 100%)",
        }}
      />

      {/* Gentle vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, hsl(344 35% 90% / 0.15) 100%)",
        }}
      />

      {/* Subtle decorative watercolor blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-10 left-[10%] w-64 h-64 rounded-full blur-3xl"
          style={{ background: "hsl(344 35% 80% / 0.15)" }}
        />
        <div
          className="absolute bottom-10 right-[10%] w-80 h-80 rounded-full blur-3xl"
          style={{ background: "hsl(38 65% 80% / 0.15)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "hsl(344 35% 85% / 0.1)" }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section Header - Centered */}
        <div className="text-center">
          <h2
            className="font-serif text-[#5e1022] leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(1.875rem, 3.6vw, 2.75rem)" }}
          >
            Your Pre-Loved Items Making an Impact
          </h2>

          {/* Subheadline */}
          <p className="mt-2 font-sans text-foreground/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every donated item is restored, matched, and delivered with care.
          </p>
        </div>

        {/* Decorative divider with sparkles */}
        <SparklesDivider />

        {/* 4-Column Layout: Stats Card (3 cols) + Feature Card (1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Frosted Glass Card Container - spans 3 columns */}
          <div
            className="lg:col-span-3 rounded-3xl border border-[#f0dcdc] bg-[#fffcfa]/95 px-3 pt-6 pb-7 sm:px-8 sm:pt-7 sm:pb-8 md:px-10 shadow-[0_18px_44px_-26px_rgba(110,20,40,0.35)]"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 divide-x divide-[#ecd3d7] mb-7 sm:mb-8">
              {statsData.map((item, index) => (
                <StatColumn
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  value={item.value}
                  label={item.label}
                />
              ))}
            </div>

            {/* Thumbnails Grid - First row: centered */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {/* Doll Houses Carousel - 1st item */}
              <div>
                <CategoryThumbnailCarousel slides={dollHousesCarouselSlides} />
              </div>
              {regularThumbnailsData.map((thumbnail) => (
                <div key={thumbnail.id} className="flex flex-col">
                  <CategoryThumbnailImage
                    thumbnail={thumbnail}
                    isAdmin={isAdmin}
                    uploadedImage={uploadedThumbnails[thumbnail.id] || null}
                    onUpload={handleThumbnailUpload}
                    onRemove={handleThumbnailRemove}
                  />
                  {/* Category label pill */}
                  <span className="relative z-10 -mt-4 mx-auto rounded-full bg-white whitespace-nowrap px-2 py-1 sm:px-4 sm:py-1.5 font-sans text-[9px] sm:text-xs font-semibold uppercase tracking-[0.04em] sm:tracking-[0.12em] text-[#6e1428] shadow-[0_6px_14px_-8px_rgba(110,20,40,0.5)] text-center">
                    {thumbnail.label}
                  </span>
                </div>
              ))}
              {/* MISC Carousel - 3rd item */}
              <div>
                <CategoryThumbnailCarousel slides={miscCarouselSlides} />
              </div>
            </div>

            {/* "These items are needed" Header */}
            <div className="mt-8 mb-4 flex items-center gap-4">
              <span className="h-px flex-1 bg-[#e3b9c0]" aria-hidden="true" />
              <span className="rounded-full bg-[#f8e1e4] px-5 py-1.5 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] text-[#8a1f38]">
                These items are needed
              </span>
              <span className="h-px flex-1 bg-[#e3b9c0]" aria-hidden="true" />
            </div>

            {/* Thumbnails Grid - Second row: Needed items with special styling */}
            <div className="flex items-center justify-center gap-3 sm:gap-5">
              <Rays side="left" />
              <div className="grid flex-1 grid-cols-2 gap-3 max-w-[300px] sm:max-w-[420px] sm:gap-5">
              {neededThumbnailsData.map((thumbnail) => (
                <div key={thumbnail.id} className="flex flex-col">
                  {/* Wrapper with dashed border and soft pink fill */}
                  <div className="rounded-2xl border-2 border-dashed border-[#e3a9b4] bg-[#fbe9eb] p-2 pb-1.5">
                    <CategoryThumbnailImage
                      thumbnail={thumbnail}
                      isAdmin={isAdmin}
                      uploadedImage={uploadedThumbnails[thumbnail.id] || null}
                      onUpload={handleThumbnailUpload}
                      onRemove={handleThumbnailRemove}
                    />
                    <span className="relative z-10 -mt-3.5 mx-auto rounded-full bg-white whitespace-nowrap px-2 py-1 sm:px-4 sm:py-1.5 font-sans text-[9px] sm:text-xs font-semibold uppercase tracking-[0.04em] sm:tracking-[0.12em] text-[#6e1428] shadow-[0_6px_14px_-8px_rgba(110,20,40,0.5)] text-center block w-fit">
                      {thumbnail.label}
                    </span>
                  </div>
                </div>
              ))}
              </div>
              <Rays side="right" />
            </div>
          </div>

          {/* Ladies Craft Crew Feature Card - 4th column */}
          <div className="lg:col-span-1">
            <LadiesCraftCrewCard isAdmin={isAdmin} />
          </div>
        </div>
      </div>
    </section>
  );
};
