import { useState, useEffect, useRef } from "react";
import { ImageCarousel, CarouselImageItem } from "./ImageCarousel";
import { Plus, AlertCircle } from "lucide-react";
import {
  loadCarouselImages,
  addCarouselImage,
  removeCarouselImage,
  CarouselImage,
} from "@/lib/adminStorage";

// Default placeholder images for the carousel
const defaultCarouselImages: CarouselImageItem[] = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    alt: "Craft crew working on dollhouse restoration",
  },
  {
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
    alt: "Volunteers painting and decorating toys",
  },
  {
    src: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop",
    alt: "Restored play kitchen ready for a new home",
  },
];

interface LadiesCraftCrewCardProps {
  isAdmin?: boolean;
}

export const LadiesCraftCrewCard = ({ isAdmin = false }: LadiesCraftCrewCardProps) => {
  const [uploadedImages, setUploadedImages] = useState<CarouselImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load uploaded images on mount
  useEffect(() => {
    const stored = loadCarouselImages();
    setUploadedImages(stored);
  }, []);

  // Combine uploaded images with defaults (uploaded images come first)
  const allImages: CarouselImageItem[] = [
    ...uploadedImages,
    ...(uploadedImages.length === 0 ? defaultCarouselImages : []),
  ];

  const handleAddPhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setError(null);
    setIsUploading(true);

    try {
      // Process all selected files
      for (const file of Array.from(files)) {
        const newImage = await addCarouselImage(file);
        setUploadedImages((prev) => [...prev, newImage]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload image");
    } finally {
      setIsUploading(false);
      // Reset input so same file can be selected again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleRemoveImage = (imageId: string | number) => {
    if (typeof imageId === "string") {
      removeCarouselImage(imageId);
      setUploadedImages((prev) => prev.filter((img) => img.id !== imageId));
    }
    setError(null);
  };

  return (
    <div
      className="rounded-2xl border border-white/40 p-6 sm:p-8 h-full flex flex-col"
      style={{
        background:
          "linear-gradient(135deg, hsl(0 0% 100% / 0.7) 0%, hsl(0 0% 100% / 0.5) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow:
          "0 8px 32px hsl(344 35% 50% / 0.08), 0 2px 8px hsl(0 0% 0% / 0.04)",
      }}
    >
      {/* Location Tag */}
      <span className="inline-block self-start text-[10px] md:text-[11px] font-sans uppercase tracking-[0.15em] text-primary/50 mb-2">
        Hoschton
      </span>

      {/* Title */}
      <h3 className="font-serif text-lg md:text-xl text-foreground leading-tight tracking-tight mb-4">
        Meet the Ladies Craft Crew
      </h3>

      {/* Admin Add Photo Button */}
      {isAdmin && (
        <div className="mb-3">
          <button
            onClick={handleAddPhotoClick}
            disabled={isUploading}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="w-3.5 h-3.5" strokeWidth={2} />
            {isUploading ? "Uploading..." : "Add Photo"}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-3 flex items-center gap-2 px-3 py-2 text-xs text-red-600 bg-red-50 border border-red-200 rounded-md">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Image Carousel */}
      <ImageCarousel
        images={allImages}
        className="mb-4"
        isAdmin={isAdmin}
        onRemoveImage={isAdmin ? handleRemoveImage : undefined}
      />

      {/* Description */}
      <p className="text-sm text-foreground/70 leading-relaxed mt-auto">
        Once a month, our crew gathers to restore and upcycle high-ticket
        donations — like dollhouses and play kitchens — so they feel brand new
        for the children who receive them.
      </p>
    </div>
  );
};
