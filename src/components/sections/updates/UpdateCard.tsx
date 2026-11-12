import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface UpdateContent {
  subheadline?: string;
  paragraphs?: string[];
  list?: {
    intro?: string;
    items: string[];
  };
  closing?: string[];
}

export interface UpdateCardProps {
  date: string;
  headline: string;
  /** Short teaser shown on the card. */
  summary: string;
  /** Highlight pills (featured card only). */
  tags?: string[];
  images: string[];
  /** Full story shown in the reading dialog. */
  fullContent: UpdateContent;
  featured?: boolean;
}

const CRIMSON = "#6e1428";

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

/** Image slideshow with arrows and dots when there is more than one image. */
const ImageCarousel = ({
  images,
  alt,
  className,
  imageClassName,
}: {
  images: string[];
  alt: string;
  className?: string;
  imageClassName?: string;
}) => {
  const [index, setIndex] = useState(0);
  const hasMany = images.length > 1;

  const go = (delta: number) => setIndex((i) => (i + delta + images.length) % images.length);

  return (
    <div className={cn("group/carousel relative overflow-hidden", className)}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === index ? alt : ""}
          aria-hidden={i !== index}
          loading={i === 0 ? "eager" : "lazy"}
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-500",
            i === index ? "opacity-100" : "opacity-0",
            imageClassName
          )}
        />
      ))}

      {hasMany && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#6e1428] shadow-md transition-opacity hover:bg-white focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98a96] md:opacity-0 md:group-hover/carousel:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#6e1428] shadow-md transition-opacity hover:bg-white focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98a96] md:opacity-0 md:group-hover/carousel:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/25 px-2.5 py-1.5 backdrop-blur-sm">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/60 hover:bg-white/80"
                )}
                aria-label={`Show image ${i + 1} of ${images.length}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

/** Full story in a scrollable reading dialog. */
const StoryDialog = ({
  open,
  onOpenChange,
  date,
  headline,
  images,
  fullContent,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  date: string;
  headline: string;
  images: string[];
  fullContent: UpdateContent;
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-h-[92vh] w-[95vw] max-w-3xl overflow-y-auto rounded-3xl border-[#f0d9dc] bg-[#fffcfa] p-0">
      {images.length > 0 && (
        <ImageCarousel
          images={images}
          alt={headline}
          className="h-[45vh] min-h-[260px] w-full bg-[#f3e4e4]"
          imageClassName="object-contain"
        />
      )}

      <div className="px-6 pb-8 pt-6 sm:px-10 sm:pb-10">
        <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#a2465a]">
          {formatDate(date)}
        </p>
        <DialogTitle className="mt-3 text-[28px] sm:text-[34px] leading-tight text-[#3a2420]">
          {headline}
        </DialogTitle>
        {fullContent.subheadline ? (
          <DialogDescription className="mt-3 font-sans text-lg leading-relaxed text-foreground/80">
            {fullContent.subheadline}
          </DialogDescription>
        ) : (
          <DialogDescription className="sr-only">Full update</DialogDescription>
        )}

        <div className="mt-6 space-y-4 font-sans text-base sm:text-[17px] leading-relaxed text-foreground/75">
          {fullContent.paragraphs?.map((p) => <p key={p}>{p}</p>)}

          {fullContent.list && (
            <div>
              {fullContent.list.intro && (
                <p className="font-medium text-foreground/85">{fullContent.list.intro}</p>
              )}
              <ul className="mt-3 space-y-2">
                {fullContent.list.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#a2465a]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {fullContent.closing?.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

/**
 * UpdateCard
 *
 * Featured: large image beside the headline, highlight pills and a solid button.
 * Default: compact image + text row with an underlined "Read Update" link.
 * Both open the full story in a reading dialog.
 */
export const UpdateCard = ({
  date,
  headline,
  summary,
  tags,
  images,
  fullContent,
  featured = false,
}: UpdateCardProps) => {
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  return (
    <article
      className={cn(
        "grid gap-6 border border-[#efdcdc] bg-[#fffcfa]/90 shadow-[0_16px_40px_-24px_rgba(110,20,40,0.3)]",
        featured
          ? "rounded-[28px] p-5 sm:p-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:items-center md:gap-8 lg:gap-10"
          : "rounded-3xl p-5 sm:grid-cols-[minmax(0,240px)_1fr] sm:items-center sm:p-6 md:grid-cols-[minmax(0,290px)_1fr] md:gap-9"
      )}
    >
      {images.length > 0 && (
        <ImageCarousel
          images={images}
          alt={headline}
          className={cn(
            "w-full rounded-2xl bg-[#f3e4e4]",
            featured ? "aspect-[5/7]" : "aspect-[16/11] sm:aspect-[11/10]"
          )}
          imageClassName={featured ? "object-cover" : "object-cover object-top"}
        />
      )}

      <div className={cn(featured ? "md:py-2" : "")}>
        <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#a2465a]">
          {formatDate(date)}
        </p>
        <h3
          className={cn(
            "mt-3 font-serif leading-[1.1] tracking-tight text-[#3a2420]",
            featured ? "" : "text-2xl sm:text-[28px] md:text-[30px]"
          )}
          style={featured ? { fontSize: "clamp(1.875rem, 3.2vw, 2.75rem)" } : undefined}
        >
          {headline}
        </h3>
        <p
          className={cn(
            "mt-4 font-sans leading-relaxed text-foreground/80",
            featured ? "text-base sm:text-lg lg:text-xl" : "text-base sm:text-lg"
          )}
        >
          {summary}
        </p>

        {featured && tags && tags.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2.5" aria-label="Highlights">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[#f8e4e6] px-4 py-1.5 font-sans text-sm text-[#6e1428]"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {featured ? (
          <button
            type="button"
            onClick={() => setIsStoryOpen(true)}
            className="mt-8 inline-flex items-center gap-3 rounded-xl px-8 py-4 font-sans text-base sm:text-lg font-medium text-white shadow-[0_10px_24px_-10px_rgba(110,20,40,0.6)] transition-[filter] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98a96] focus-visible:ring-offset-2"
            style={{ background: `linear-gradient(180deg, #7a1a30 0%, ${CRIMSON} 100%)` }}
          >
            Read Entire Story
            <ArrowRight className="h-5 w-5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsStoryOpen(true)}
            className="mt-5 inline-flex items-center gap-2.5 border-b-2 border-current pb-1 font-sans text-base sm:text-lg font-semibold transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98a96] focus-visible:ring-offset-2"
            style={{ color: CRIMSON }}
          >
            Read Update
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>

      <StoryDialog
        open={isStoryOpen}
        onOpenChange={setIsStoryOpen}
        date={date}
        headline={headline}
        images={images}
        fullContent={fullContent}
      />
    </article>
  );
};
