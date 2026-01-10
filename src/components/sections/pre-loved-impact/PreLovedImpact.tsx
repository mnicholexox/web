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

/* Decorative divider with sparkles */
const SparklesDivider = () => (
  <div className="flex items-center justify-center gap-3 py-4 md:py-6">
    <div className="w-12 h-px bg-primary/20" />
    <Sparkles className="w-4 h-4 text-primary/40" strokeWidth={1.5} />
    <div className="w-12 h-px bg-primary/20" />
  </div>
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
        className="h-[140px] md:h-[150px] rounded-lg overflow-hidden border border-border/20 flex items-center justify-center relative group"
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
    <p className="text-sm text-muted-foreground font-medium">{label}</p>
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
    "board-games",
    "art-coloring-1",
    "art-coloring-2",
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
      icon: <Package className="w-4 h-4 text-primary/70" strokeWidth={1.5} />,
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
      icon: <Clock className="w-4 h-4 text-primary/70" strokeWidth={1.5} />,
      title: "Still In Progress",
      value: "4",
      label: "Being cleaned, refurbished, & wrapped with care",
    },
  ];

  const thumbnailsData: CategoryThumbnail[] = [
    {
      id: "lego-sets",
      label: "LEGO Sets",
      bgColor:
        "linear-gradient(135deg, hsl(45 80% 90%) 0%, hsl(35 70% 85%) 100%)",
      icon: "🧱",
    },
    {
      id: "dolls-figures",
      label: "Dolls & Figures",
      bgColor:
        "linear-gradient(135deg, hsl(330 60% 92%) 0%, hsl(340 50% 88%) 100%)",
      icon: "🪆",
    },
    {
      id: "board-games",
      label: "Board Games",
      bgColor:
        "linear-gradient(135deg, hsl(200 60% 90%) 0%, hsl(210 50% 85%) 100%)",
      icon: "🎲",
    },
    {
      id: "art-coloring-1",
      label: "Art & Coloring",
      bgColor:
        "linear-gradient(135deg, hsl(280 50% 92%) 0%, hsl(290 40% 88%) 100%)",
      icon: "🎨",
    },
    {
      id: "art-coloring-2",
      label: "Art & Coloring",
      bgColor:
        "linear-gradient(135deg, hsl(140 50% 90%) 0%, hsl(150 40% 85%) 100%)",
      icon: "✏️",
    },
    {
      id: "misc-items",
      label: "Misc Items",
      bgColor:
        "linear-gradient(135deg, hsl(25 60% 90%) 0%, hsl(35 50% 85%) 100%)",
      icon: "🧸",
    },
  ];

  return (
    <section
      id="pre-loved-impact"
      data-section="pre-loved-impact"
      className="relative w-full pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden"
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
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-xl sm:text-2xl md:text-[28px] lg:text-[32px] text-foreground leading-tight tracking-tight mb-4">
            Your Pre-Loved Items Making an Impact
          </h2>

          {/* Subheadline */}
          <p className="text-foreground/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every donated item is restored, matched, and delivered with care.
          </p>
        </div>

        {/* Decorative divider with sparkles */}
        <SparklesDivider />

        {/* 4-Column Layout: Stats Card (3 cols) + Feature Card (1 col) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Frosted Glass Card Container - spans 3 columns */}
          <div
            className="lg:col-span-3 rounded-2xl border border-white/40 px-6 pt-6 sm:px-8 sm:pt-8 md:px-10 md:pt-10 pb-[11px]"
            style={{
              background:
                "linear-gradient(135deg, hsl(0 0% 100% / 0.7) 0%, hsl(0 0% 100% / 0.5) 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow:
                "0 8px 32px hsl(344 35% 50% / 0.08), 0 2px 8px hsl(0 0% 0% / 0.04)",
            }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-10 mb-8">
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

            {/* Thumbnails Row - 6 columns */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {thumbnailsData.map((thumbnail) => (
                <div key={thumbnail.id} className="flex flex-col">
                  <CategoryThumbnailImage
                    thumbnail={thumbnail}
                    isAdmin={isAdmin}
                    uploadedImage={uploadedThumbnails[thumbnail.id] || null}
                    onUpload={handleThumbnailUpload}
                    onRemove={handleThumbnailRemove}
                  />
                  {/* Category Label - Small Caps Serif Style */}
                  <span
                    className="mt-2 text-[10px] md:text-[11px] font-serif tracking-[0.08em] text-foreground/60 uppercase text-center"
                    style={{ fontVariant: "small-caps" }}
                  >
                    {thumbnail.label}
                  </span>
                </div>
              ))}
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
