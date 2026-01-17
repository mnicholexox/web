import { useState, Fragment } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface UpdateCardProps {
  date: string;
  headline: string;
  blurb?: string;
  fullContent?: {
    subheadline?: string;
    paragraphs?: string[];
    list?: {
      intro?: string;
      items: string[];
    };
    closing?: string[];
  };
  imageUrl?: string;
  imageUrls?: string[];
  imageAlt?: string;
  href?: string;
  isHero?: boolean;
  truncateAt?: string; // Text to truncate content at (for list items)
  imagePlacement?: 'sidebar' | 'full-width' | 'hero-top'; // How images should be displayed
  hideClosingByDefault?: boolean; // Hide closing section by default with expand button
}

/**
 * UpdateCard
 * 
 * A warm, story-driven card for displaying individual updates.
 * Features soft shadows, rounded corners, and gentle hover effects
 * to feel like a scrapbook/journal entry rather than a corporate blog.
 * 
 * Supports hero variant for featured/lead articles with larger styling.
 */
export const UpdateCard = ({ 
  date, 
  headline, 
  blurb, 
  fullContent,
  imageUrl, 
  imageUrls,
  imageAlt,
  href,
  isHero = false,
  truncateAt,
  imagePlacement = 'sidebar',
  hideClosingByDefault = false
}: UpdateCardProps) => {
  const CardWrapper = href ? 'a' : 'article';
  
  const articleClassName = `relative overflow-hidden transition-all duration-300 ease-out ${
    isHero 
      ? 'rounded-3xl group-hover:shadow-2xl group-hover:-translate-y-1' 
      : 'rounded-2xl group-hover:shadow-lg group-hover:-translate-y-1'
  }`;
  
  const articleStyle = {
    background: 'rgba(255, 255, 255, 0.65)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(139, 74, 92, 0.08)',
    boxShadow: isHero 
      ? '0 8px 32px rgba(139, 74, 92, 0.08), 0 4px 16px rgba(139, 74, 92, 0.04)' 
      : '0 2px 16px rgba(139, 74, 92, 0.05), 0 1px 4px rgba(139, 74, 92, 0.03)',
  };

  const cardProps = href 
    ? { href, className: `group block ${articleClassName}`, style: articleStyle } 
    : { className: `group ${articleClassName}`, style: articleStyle };

  const hasFullContent = !!fullContent;
  
  // State for expanded content
  const [isExpanded, setIsExpanded] = useState(false);
  // State for closing section expansion
  const [isClosingExpanded, setIsClosingExpanded] = useState(false);
  
  // Determine if content should be truncated
  const shouldTruncate = truncateAt && fullContent?.list?.items;
  const truncateIndex = shouldTruncate 
    ? fullContent.list.items.findIndex(item => item === truncateAt)
    : -1;
  const shouldShowTruncated = truncateIndex >= 0 && !isExpanded;
  const displayedListItems = shouldShowTruncated
    ? fullContent.list.items.slice(0, truncateIndex + 1) // Include the truncateAt item
    : fullContent?.list?.items || [];
  
  // Use imageUrls array if provided, otherwise fall back to single imageUrl
  const images = imageUrls && imageUrls.length > 0 ? imageUrls : (imageUrl ? [imageUrl] : []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  
  const goToPrevious = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const goToNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const goToSlide = (index: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex(index);
  };

  // Modal carousel controls
  const goToPreviousModal = () => {
    setModalImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  const goToNextModal = () => {
    setModalImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  
  const goToSlideModal = (index: number) => {
    setModalImageIndex(index);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setModalImageIndex(currentImageIndex);
    setIsImageModalOpen(true);
  };

  // Render image carousel component
  // 
  // PADDING RULE: All sidebar images (left side) must have left padding that matches
  // the right padding used for full-width images (right side). This ensures visual
  // consistency across all article layouts:
  // - Hero articles: pl-8 md:pl-10 lg:pl-12 (matches content section's right padding)
  // - Regular articles: pl-6 md:pl-8 (matches content section's right padding)
  const renderImageCarousel = (isFullWidth: boolean = false, inFlexContainer: boolean = false) => {
    if (images.length === 0) return null;

    const containerClasses = isFullWidth && !inFlexContainer
      ? 'w-full -mx-6 md:-mx-8 lg:-mx-10 xl:-mx-12 my-8'
      : isFullWidth && inFlexContainer
      ? 'w-full'
      : `${isHero ? 'w-full lg:w-96 xl:w-[28rem] h-96 lg:h-auto pt-6 md:pt-10 lg:pt-12' : 'md:w-56 lg:w-64 pt-6 md:pt-8'} flex-shrink-0 overflow-hidden ${!isFullWidth ? (isHero ? 'px-6 md:px-10 lg:px-0 lg:pl-12' : 'pl-6 md:pl-8') : ''}`;

    const imageContainerClasses = isFullWidth && !inFlexContainer
      ? 'w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden rounded-lg'
      : isFullWidth && inFlexContainer
      ? 'w-full h-[350px] md:h-[450px] lg:h-[500px] relative overflow-hidden rounded-lg'
      : `${isHero ? 'h-96 lg:h-full min-h-[500px] lg:min-h-[600px]' : 'h-48 md:h-full min-h-[180px]'} relative overflow-hidden`;

    return (
      <div className={containerClasses}>
        <div 
          className={imageContainerClasses}
          style={!isFullWidth ? {
            background: 'linear-gradient(135deg, hsl(344 35% 92% / 0.5) 0%, hsl(38 67% 94% / 0.5) 100%)',
          } : {}}
        >
          {images.length > 1 ? (
            <>
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out cursor-pointer ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  onClick={handleImageClick}
                >
                  <img
                    src={img}
                    alt={`${imageAlt || headline} - Image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
              
              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center text-foreground/70 hover:bg-white hover:text-foreground transition-all shadow-lg z-10 ${
                  isFullWidth ? 'opacity-70 hover:opacity-100' : 'opacity-70 md:opacity-0 md:group-hover:opacity-100'
                }`}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={2} />
              </button>
              <button
                onClick={goToNext}
                className={`absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center text-foreground/70 hover:bg-white hover:text-foreground transition-all shadow-lg z-10 ${
                  isFullWidth ? 'opacity-70 hover:opacity-100' : 'opacity-70 md:opacity-0 md:group-hover:opacity-100'
                }`}
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={2} />
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => goToSlide(index, e)}
                    className={`transition-all rounded-full ${
                      index === currentImageIndex
                        ? 'bg-white/90 w-2.5 h-2.5'
                        : 'bg-white/50 hover:bg-white/70 w-2 h-2'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <img
              src={images[0]}
              alt={imageAlt || headline}
              className="w-full h-full object-contain cursor-pointer"
              onClick={handleImageClick}
            />
          )}
          
          {/* Soft edge overlay for blending - only for sidebar */}
          {!isFullWidth && (
            <div 
              className={`absolute inset-0 pointer-events-none ${isHero ? 'hidden lg:block' : 'hidden md:block'}`}
              style={{
                background: 'linear-gradient(to right, transparent 70%, rgba(255, 255, 255, 0.4) 100%)',
              }}
            />
          )}
        </div>
      </div>
    );
  };

  const WrapperComponent = CardWrapper as keyof JSX.IntrinsicElements;
  
  return (
    <Fragment>
      <WrapperComponent {...cardProps}>
        {/* Subtle inner glow for warmth */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, hsl(344 35% 92% / 0.4) 0%, transparent 70%)',
          }}
        />

        <div className={`relative ${imagePlacement === 'full-width' ? 'flex flex-col' : 'flex flex-col'}`}>
          {/* Header Section (Date + Headline) - Full Width */}
          <div className={`flex-1 flex flex-col ${isHero ? 'p-6 md:p-10 lg:p-12 pb-0 -mb-4 md:-mb-8' : 'p-6 md:p-8 pb-0'}`}>
            {/* Date - subtle, secondary */}
            <time 
              className={`${isHero ? 'text-xs md:text-sm' : 'text-[11px] md:text-xs'} font-sans uppercase tracking-[0.2em] text-primary/50 font-medium ${isHero ? 'mb-2 md:mb-3' : 'mb-3'}`}
              dateTime={date}
            >
              {formatDate(date)}
            </time>

            {/* Headline - warm, human */}
            {/* Note: mb-0 ensures minimal spacing between headline and subheadline */}
            <h3 
              className={`font-serif text-foreground font-normal mb-0 group-hover:text-primary/90 transition-colors duration-200 ${
                isHero 
                  ? 'text-xl leading-tight md:text-3xl md:leading-snug lg:text-4xl' 
                  : 'text-[clamp(1.125rem,2.5vw,1.375rem)] leading-snug'
              }`}
            >
              {headline}
            </h3>
          </div>

          {/* Hero-top images - placed right after headline/date, before body text */}
          {images.length > 0 && imagePlacement === 'hero-top' && (
            <div className={`w-full ${isHero ? 'px-6 md:px-10 lg:px-12 pb-4 md:pb-8' : 'px-6 md:px-8 pb-4 md:pb-6'}`}>
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden rounded-lg">
                {images.length > 1 ? (
                  <>
                    {images.map((img, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out cursor-pointer ${
                          index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                        onClick={handleImageClick}
                      >
                        <img
                          src={img}
                          alt={`${imageAlt || headline} - Image ${index + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={goToPrevious}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center text-foreground/70 hover:bg-white hover:text-foreground transition-all shadow-lg z-10 opacity-70 hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" strokeWidth={2} />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center text-foreground/70 hover:bg-white hover:text-foreground transition-all shadow-lg z-10 opacity-70 hover:opacity-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" strokeWidth={2} />
                    </button>
                    
                    {/* Dots Indicator */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => goToSlide(index, e)}
                          className={`transition-all rounded-full ${
                            index === currentImageIndex
                              ? 'bg-white/90 w-2.5 h-2.5'
                              : 'bg-white/50 hover:bg-white/70 w-2 h-2'
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <img
                    src={images[0]}
                    alt={imageAlt || headline}
                    className="w-full h-full object-contain cursor-pointer"
                    onClick={handleImageClick}
                  />
                )}
              </div>
            </div>
          )}

          {/* Content Section with Image (if sidebar) or Full Content (if full-width) */}
          <div className={`relative flex ${imagePlacement === 'full-width' ? 'flex-col' : (isHero ? 'flex-col lg:flex-row items-start' : 'flex-col md:flex-row items-start')} ${isHero ? '-mt-4 md:-mt-8' : ''}`}>
            {/* Image Section (sidebar placement) */}
            {images.length > 0 && imagePlacement === 'sidebar' && renderImageCarousel(false)}

            {/* Content Section */}
            <div className={`flex-1 flex flex-col ${isHero ? 'p-6 md:p-10 lg:p-12 pt-0 max-w-full' : 'p-6 md:p-8 pt-0'} ${hasFullContent ? 'justify-start' : 'justify-center'}`}>
              {/* Subheadline (for hero/full content) */}
              {/* Note: -mt-8 negative margin pulls subheadline closer to headline for reduced spacing */}
              {fullContent?.subheadline && (
                <p className={`font-serif text-foreground/75 leading-relaxed ${
                  isHero ? 'text-base md:text-xl -mt-4 md:-mt-8 mb-4 md:mb-6' : 'text-base -mt-8 mb-6'
                }`}>
                  {fullContent.subheadline}
                </p>
              )}

            {/* Full Content */}
            {hasFullContent ? (
              <div className={`${isHero ? 'space-y-4 md:space-y-6' : 'space-y-6'}`}>
                {/* Paragraphs - exclude last one when hideClosingByDefault is true */}
                {fullContent.paragraphs?.map((paragraph, index) => {
                  const isLastParagraph = index === (fullContent.paragraphs?.length ?? 0) - 1;
                  // Skip last paragraph if it should be hidden (it will be in expandable section)
                  if (hideClosingByDefault && isLastParagraph) {
                    return null;
                  }
                  
                  return (
                    <p 
                      key={index}
                      className={`text-foreground/70 leading-relaxed ${
                        isHero ? 'text-sm md:text-lg' : 'text-[0.9375rem]'
                      }`}
                    >
                      {paragraph}
                    </p>
                  );
                })}
                
                {/* Button and expandable section for last paragraph + closing (non-list, non-sidebar) */}
                {hideClosingByDefault && fullContent.paragraphs && fullContent.paragraphs.length > 0 && 
                 !fullContent.list && !(imagePlacement === 'sidebar' && images.length > 0) && (
                  <>
                    {/* Read Entire Story / Show Less button */}
                    {fullContent.closing && fullContent.closing.length > 0 && (
                      <div className={`flex justify-end ${isHero ? '-mt-3 md:-mt-5 mb-1 md:mb-2' : '-mt-5 mb-2'}`}>
                        <Button
                          size={isHero ? "lg" : "default"}
                          className="group/btn text-white hover:opacity-90"
                          style={{ backgroundColor: '#55111c' }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsClosingExpanded(!isClosingExpanded);
                            if (!isClosingExpanded) {
                              setTimeout(() => {
                                const card = e.currentTarget.closest('article');
                                if (card) {
                                  const expandableSection = card.querySelector('[data-expandable-last-paragraph]');
                                  if (expandableSection) {
                                    expandableSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                                  }
                                }
                              }, 300);
                            }
                          }}
                        >
                          <span>{isClosingExpanded ? 'Show Less' : 'Read Entire Story'}</span>
                          {!isClosingExpanded && (
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                          )}
                        </Button>
                      </div>
                    )}
                    {/* Last paragraph and closing section - expandable together */}
              <div 
                data-expandable-last-paragraph
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  !isClosingExpanded 
                    ? 'max-h-0 opacity-0' 
                    : 'max-h-[2000px] opacity-100'
                }`}
              >
                <div className={`${isHero ? 'space-y-4 md:space-y-6' : 'space-y-6'}`}>
                        {/* Last paragraph */}
                        {fullContent.paragraphs[fullContent.paragraphs.length - 1] && (
                          <p 
                            className={`text-foreground/70 leading-relaxed ${
                              isHero ? 'text-sm md:text-lg' : 'text-[0.9375rem]'
                            }`}
                          >
                            {fullContent.paragraphs[fullContent.paragraphs.length - 1]}
                          </p>
                        )}
                        {/* Closing section for non-list, non-sidebar layouts */}
                        {fullContent.closing?.map((paragraph, index) => (
                          <p 
                            key={index}
                            className={`text-foreground/70 leading-relaxed ${
                              isHero ? 'text-sm md:text-lg' : 'text-[0.9375rem]'
                            }`}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                
                {/* Last paragraph - expandable (for list or sidebar layouts, button is in closing section) */}
                {hideClosingByDefault && fullContent.paragraphs && fullContent.paragraphs.length > 0 && 
                 (fullContent.list || (imagePlacement === 'sidebar' && images.length > 0)) && (
                  <div 
                    data-expandable-last-paragraph
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      !isClosingExpanded 
                        ? 'max-h-0 opacity-0' 
                        : 'max-h-[2000px] opacity-100'
                    }`}
                  >
                    <div className={`${isHero ? 'space-y-4 md:space-y-6' : 'space-y-6'}`}>
                      {/* Last paragraph */}
                      {fullContent.paragraphs[fullContent.paragraphs.length - 1] && (
                        <p 
                          className={`text-foreground/70 leading-relaxed ${
                            isHero ? 'text-sm md:text-lg' : 'text-[0.9375rem]'
                          }`}
                        >
                          {fullContent.paragraphs[fullContent.paragraphs.length - 1]}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* List */}
                {fullContent.list && (
                  <div className={imagePlacement === 'full-width' && images.length > 0 ? `flex flex-col md:flex-row ${isHero ? 'gap-4 md:gap-8' : 'gap-6 md:gap-8'} items-start` : `${isHero ? 'space-y-2 md:space-y-3' : 'space-y-3'}`}>
                    <div className={`flex-1 ${isHero ? 'space-y-2 md:space-y-3' : 'space-y-3'}`}>
                      {fullContent.list.intro && (
                        <p className={`text-foreground/70 font-medium text-left ${
                          isHero ? 'text-sm md:text-lg' : 'text-[0.9375rem]'
                        }`}>
                          {fullContent.list.intro}
                        </p>
                      )}
                      <ul className={`${isHero ? 'space-y-1.5 md:space-y-2' : 'space-y-2'} text-left ${isHero ? 'pl-6 md:pl-8' : 'pl-5'}`}>
                        {displayedListItems.map((item, index) => (
                          <li 
                            key={index}
                            className={`text-foreground/70 leading-relaxed ${
                              isHero ? 'text-sm md:text-lg' : 'text-[0.9375rem]'
                            }`}
                            style={{ listStyleType: 'disc' }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      {/* All closing paragraphs in left column when images are present */}
                      {!shouldShowTruncated && imagePlacement === 'full-width' && images.length > 0 && (
                        <>
                          {/* Read Entire Story / Show Less button for full-width layouts */}
                          {hideClosingByDefault && fullContent.closing && fullContent.closing.length > 0 && (
                            <div className={`flex justify-end ${isHero ? '-mt-3 md:-mt-5 mb-1 md:mb-2' : '-mt-5 mb-2'}`}>
                              <Button
                                size={isHero ? "lg" : "default"}
                                className="group/btn text-white hover:opacity-90"
                                style={{ backgroundColor: '#55111c' }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setIsClosingExpanded(!isClosingExpanded);
                                  // Smooth scroll to show expanded content
                                  if (!isClosingExpanded) {
                                    setTimeout(() => {
                                      const card = e.currentTarget.closest('article');
                                      if (card) {
                                        const closingSection = card.querySelector('[data-closing-section-fullwidth]');
                                        if (closingSection) {
                                          closingSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                                        }
                                      }
                                    }, 300);
                                  }
                                }}
                              >
                                <span>{isClosingExpanded ? 'Show Less' : 'Read Entire Story'}</span>
                                {!isClosingExpanded && (
                                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                                )}
                              </Button>
                            </div>
                          )}
                          {hideClosingByDefault && !isClosingExpanded ? null : (
                            <div 
                              data-closing-section-fullwidth
                              className={`${isHero ? 'space-y-3 md:space-y-4' : 'space-y-4'} overflow-hidden transition-all duration-500 ease-in-out ${
                                hideClosingByDefault && !isClosingExpanded 
                                  ? 'max-h-0 opacity-0' 
                                  : 'max-h-[2000px] opacity-100'
                              }`}
                            >
                              {fullContent.closing?.map((paragraph, index) => (
                                <p 
                                  key={index}
                                  className={`text-foreground/70 leading-relaxed text-left ${
                                    isHero ? 'text-sm md:text-lg' : 'text-[0.9375rem]'
                                  }`}
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    {/* Images to the right of list when full-width placement */}
                    {imagePlacement === 'full-width' && images.length > 0 && (
                      <div className="flex-shrink-0 w-full md:w-80 lg:w-96">
                        {renderImageCarousel(true, true)}
                      </div>
                    )}
                  </div>
                )}

                {/* Full-width image when there's no list */}
                {!fullContent.list && imagePlacement === 'full-width' && images.length > 0 && (
                  <div className="w-full">
                    {renderImageCarousel(true, false)}
                  </div>
                )}

                {/* Closing paragraphs - only show when NOT in full-width mode with images, or when full-width but no list, AND NOT sidebar with images (those render full-width below) */}
                {/* Exclude when hideClosingByDefault is true and there's no list and no sidebar (already in expandable section) */}
                {!shouldShowTruncated && 
                 !(imagePlacement === 'full-width' && images.length > 0 && fullContent.list) && 
                 !(imagePlacement === 'sidebar' && images.length > 0) && 
                 !(hideClosingByDefault && !fullContent.list && !(imagePlacement === 'sidebar' && images.length > 0)) && (
                  <>
                    {fullContent.closing?.map((paragraph, index) => (
                      <p 
                        key={index}
                        className={`text-foreground/70 leading-relaxed ${
                          isHero ? 'text-sm md:text-lg' : 'text-[0.9375rem]'
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </>
                )}
              </div>
            ) : (
              /* Supporting blurb (for regular cards) */
              <p className={`text-foreground/60 leading-relaxed ${isHero ? 'mb-3 md:mb-4' : 'mb-4'} ${isHero ? 'text-base md:text-lg' : 'text-[0.9375rem] line-clamp-2'}`}>
                {blurb}
              </p>
            )}

            {/* Subtle arrow affordance */}
            {href && !shouldShowTruncated && (
              <div className={`flex items-center gap-2 text-primary/60 group-hover:text-primary transition-colors duration-200 ${isHero ? 'mt-3 md:mt-4' : 'mt-4'}`}>
                <span className={`${isHero ? 'text-sm' : 'text-[0.8125rem]'} font-medium tracking-wide`}>Read more</span>
                <ArrowRight 
                  className={`${isHero ? 'w-5 h-5' : 'w-4 h-4'} transition-transform duration-200 group-hover:translate-x-1`} 
                  strokeWidth={1.5}
                />
              </div>
            )}
            
            {/* Read Entire Story button (when truncated) */}
            {shouldShowTruncated && (
              <div className={`flex justify-end ${isHero ? 'mt-4 md:mt-6' : 'mt-6'}`}>
                <Button
                  size={isHero ? "lg" : "default"}
                  className="group/btn text-white hover:opacity-90"
                  style={{ backgroundColor: '#55111c' }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsExpanded(true);
                    // Scroll to top of card to show full content
                    const card = e.currentTarget.closest('article');
                    if (card) {
                      setTimeout(() => {
                        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }, 100);
                    }
                  }}
                >
                  <span>Read Entire Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Button>
              </div>
            )}
          </div>
          </div>
          
          {/* Full-width closing section for sidebar image layouts */}
          {!shouldShowTruncated && imagePlacement === 'sidebar' && images.length > 0 && fullContent?.closing && fullContent.closing.length > 0 && (
            <div className={`w-full ${isHero ? 'px-6 md:px-10 lg:px-12 pt-0 pb-4 md:pb-10 lg:pb-12' : 'px-6 md:px-8 pt-0 pb-6 md:pb-8'}`}>
              {/* Read Entire Story / Show Less button for sidebar layouts */}
              {hideClosingByDefault && (
                <div className={`flex justify-end ${isHero ? '-mt-4 md:-mt-6 mb-1 md:mb-2' : '-mt-6 mb-2'}`}>
                  <Button
                    size={isHero ? "lg" : "default"}
                    className="group/btn text-white hover:opacity-90"
                    style={{ backgroundColor: '#55111c' }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsClosingExpanded(!isClosingExpanded);
                      // Smooth scroll to show expanded content
                      if (!isClosingExpanded) {
                        setTimeout(() => {
                          const card = e.currentTarget.closest('article');
                          if (card) {
                            const closingSection = card.querySelector('[data-closing-section]');
                            if (closingSection) {
                              closingSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                            }
                          }
                        }, 300);
                      }
                    }}
                  >
                    <span>{isClosingExpanded ? 'Show Less' : 'Read Entire Story'}</span>
                    {!isClosingExpanded && (
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    )}
                  </Button>
                </div>
              )}
              <div 
                data-closing-section
                className={`${isHero ? 'space-y-3 md:space-y-4' : 'space-y-4'} overflow-hidden transition-all duration-500 ease-in-out ${
                  hideClosingByDefault && !isClosingExpanded 
                    ? 'max-h-0 opacity-0' 
                    : 'max-h-[2000px] opacity-100'
                }`}
              >
                {fullContent.closing.map((paragraph, index) => (
                  <p 
                    key={index}
                    className={`text-foreground/70 leading-relaxed ${
                      isHero ? 'text-sm md:text-lg' : 'text-[0.9375rem]'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </WrapperComponent>

      <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 border-none" style={{ backgroundColor: '#ded4d2' }}>
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Carousel Images */}
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                  index === modalImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img
                  src={img}
                  alt={`${imageAlt || headline} - Image ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}

            {/* Navigation Arrows - only show if multiple images */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPreviousModal}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center text-foreground/70 hover:bg-white hover:text-foreground transition-all shadow-lg z-20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" strokeWidth={2} />
                </button>
                <button
                  onClick={goToNextModal}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 flex items-center justify-center text-foreground/70 hover:bg-white hover:text-foreground transition-all shadow-lg z-20"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" strokeWidth={2} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlideModal(index)}
                      className={`transition-all rounded-full ${
                        index === modalImageIndex
                          ? 'bg-white/90 w-3 h-3'
                          : 'bg-white/50 hover:bg-white/70 w-2.5 h-2.5'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Image Counter (if multiple images) */}
            {images.length > 1 && (
              <div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 text-foreground/70 text-sm font-medium z-20">
                {modalImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

/**
 * Format a date string into a friendly, human-readable format
 */
function formatDate(dateString: string): string {
  // Parse date string (YYYY-MM-DD) to avoid timezone issues
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
