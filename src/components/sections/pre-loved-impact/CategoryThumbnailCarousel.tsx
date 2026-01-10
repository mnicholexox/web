import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselSlide {
  id: string;
  label: string;
  image?: string;
  icon?: string;
  bgColor?: string;
}

interface CategoryThumbnailCarouselProps {
  slides: CarouselSlide[];
}

export const CategoryThumbnailCarousel = ({
  slides,
}: CategoryThumbnailCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div className="flex flex-col">
      {/* Image Container */}
      <div
        className="h-[100px] md:h-[110px] rounded-lg overflow-hidden border border-border/20 flex items-center justify-center relative group"
        style={{
          background: currentSlide.image ? undefined : currentSlide.bgColor,
          boxShadow: "0 2px 8px hsl(344 35% 50% / 0.08)",
        }}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {slide.image ? (
              <img
                src={slide.image}
                alt={slide.label}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: slide.bgColor }}
              >
                <span className="text-4xl">{slide.icon}</span>
              </div>
            )}
          </div>
        ))}

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 flex items-center justify-center text-foreground/70 hover:bg-white hover:text-foreground transition-all shadow-sm opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-3 h-3" strokeWidth={2.5} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/80 backdrop-blur-sm border border-white/40 flex items-center justify-center text-foreground/70 hover:bg-white hover:text-foreground transition-all shadow-sm opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-3 h-3" strokeWidth={2.5} />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {slides.length > 1 && (
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white/90 w-2.5"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Category Label - Changes based on current slide */}
      <span
        className="mt-2 text-[10px] md:text-[11px] font-serif tracking-[0.08em] text-foreground/60 uppercase text-center"
        style={{ fontVariant: "small-caps" }}
      >
        {currentSlide.label}
      </span>
    </div>
  );
};
