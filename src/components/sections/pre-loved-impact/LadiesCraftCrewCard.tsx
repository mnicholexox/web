import { useState, useEffect, useRef, useMemo } from "react";
import { ImageCarousel, CarouselImageItem } from "./ImageCarousel";
import { Plus, AlertCircle } from "lucide-react";
import {
  loadCarouselImages,
  addCarouselImage,
  removeCarouselImage,
  CarouselImage,
} from "@/lib/adminStorage";

// Import Ladies Craft Crew images
import ladiesCraftCrew1 from "@/components/sections/mission/Ladies Craft Crew1.jpeg";
import ladiesCraftCrew2 from "@/components/sections/mission/Ladies Craft Crew2.JPEG";
import ladiesCraftCrew3 from "@/components/sections/mission/Ladies Craft Crew3.JPG";
import ladiesCraftCrew4 from "@/components/sections/mission/Ladies Craft Crew4.JPG";
import ladiesCraftCrew5 from "@/components/sections/mission/Ladies Craft Crew5.jpeg";

// Default images for the carousel
const defaultCarouselImages: CarouselImageItem[] = [
  {
    src: ladiesCraftCrew1,
    alt: "Ladies Craft Crew working on crafts together",
  },
  {
    src: ladiesCraftCrew2,
    alt: "Ladies Craft Crew in matching pajamas by the fireplace",
  },
  {
    src: ladiesCraftCrew3,
    alt: "Ladies Craft Crew assembling wooden houses",
  },
  {
    src: ladiesCraftCrew4,
    alt: "Ladies Craft Crew fun photoshoot with pumpkins",
  },
  {
    src: ladiesCraftCrew5,
    alt: "Ladies Craft Crew with completed dollhouses",
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
  const allImages: CarouselImageItem[] = useMemo(() => {
    // Convert uploaded images to CarouselImageItem format
    const uploadedItems: CarouselImageItem[] = uploadedImages.map((img) => ({
      id: img.id,
      src: img.src,
      alt: img.alt,
    }));
    
    // If there are uploaded images, show them. Otherwise, show defaults.
    return uploadedItems.length > 0 ? uploadedItems : defaultCarouselImages;
  }, [uploadedImages]);

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
    <div className="relative h-full overflow-hidden rounded-3xl border border-[#f0d6d9] bg-gradient-to-b from-[#fdf4f4] to-[#f9e6e8] px-5 pt-6 pb-7 sm:px-12 sm:pb-8 shadow-[0_18px_44px_-26px_rgba(110,20,40,0.35)] lg:flex lg:flex-col lg:px-8 lg:pt-7">
      {/* Ribbon curling along the bottom edge */}
      <svg
        className="pointer-events-none absolute bottom-0 right-0 hidden h-20 w-[85%] lg:block"
        viewBox="0 0 300 80"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path d="M0 78 C 80 60, 140 76, 200 50 C 240 32, 270 20, 300 6" stroke="#e48a9e" strokeOpacity="0.7" strokeWidth="4" strokeLinecap="round" />
      </svg>

      {/* Location Tag */}
      <span className="relative block font-sans text-[11px] sm:text-xs lg:text-[10px] xl:text-[11px] font-medium uppercase tracking-[0.2em] lg:tracking-[0.1em] text-[#8a1f38]">
        Twin Lakes, Hoschton, GA
      </span>

      {/* Title */}
      <h3 className="relative mt-2 mb-4 font-serif text-[26px] sm:text-[30px] text-[#5e1022] leading-[1.08] tracking-tight">
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

      {/* Photos beside the story on smaller screens, stacked in the narrow desktop column */}
      <div className="relative grid grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] items-center gap-5 sm:gap-8 lg:flex lg:flex-1 lg:flex-col lg:items-stretch lg:gap-0">
      {/* Image Carousel */}
      <div className="overflow-visible lg:mb-4">
        <ImageCarousel
          images={allImages}
          className=""
          isAdmin={isAdmin}
          onRemoveImage={isAdmin ? handleRemoveImage : undefined}
        />
      </div>

      {/* Description */}
      <p className="font-sans text-sm sm:text-base text-foreground/80 leading-snug sm:leading-relaxed lg:mt-auto lg:pb-6">
        Once a month, our crew gathers to restore and upcycle high-ticket
        donations — like dollhouses and play kitchens — so they feel brand new
        for the children who receive them.
      </p>
      </div>
    </div>
  );
};
