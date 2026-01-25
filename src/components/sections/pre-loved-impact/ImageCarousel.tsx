import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface CarouselImageItem {
  id?: string;
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImageItem[];
  className?: string;
  isAdmin?: boolean;
  onRemoveImage?: (imageId: string | number) => void;
}

export const ImageCarousel = ({ 
  images, 
  className = "", 
  isAdmin = false,
  onRemoveImage,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleRemove = (e: React.MouseEvent, imageId: string | number) => {
    e.stopPropagation();
    if (onRemoveImage) {
      onRemoveImage(imageId);
      // If we're removing the current slide and it's the last one, go back
      if (currentIndex >= images.length - 1 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  if (images.length === 0) return null;

  return (
    <div className={`relative flex items-center gap-2 ${className}`}>
      {/* Navigation Arrows - Outside */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 flex items-center justify-center text-foreground/70 hover:bg-white hover:text-foreground transition-all shadow-sm z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={2} />
          </button>
        </>
      )}

      {/* Image Container */}
      <div className="relative flex-1 h-[180px] md:h-[200px] rounded-lg overflow-hidden group">
        {images.map((image, index) => (
          <div
            key={image.id || index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            
            {/* Admin Remove Button */}
            {isAdmin && index === currentIndex && onRemoveImage && (
              <button
                onClick={(e) => handleRemove(e, image.id || index)}
                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500/90 hover:bg-red-600 text-white flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Remove image"
                title="Remove this image"
              >
                <X className="w-4 h-4" strokeWidth={2.5} />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Outside */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToNext}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 flex items-center justify-center text-foreground/70 hover:bg-white hover:text-foreground transition-all shadow-sm z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-3">
          {images.map((image, index) => (
            <button
              key={image.id || index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary/70 w-3"
                  : "bg-primary/25 hover:bg-primary/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
