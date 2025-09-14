import Image from 'next/image';
import { HERO_IMAGES } from '@/constants';
import { useCarousel } from '@/hooks/useCarousel';

interface HeroProps {
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

export const Hero = ({ currentIndex, onPrevious, onNext, onGoToSlide }: HeroProps) => {
  return (
    <div className="relative mb-20 sm:mb-16">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <Image
          src={HERO_IMAGES[currentIndex].src}
          alt={HERO_IMAGES[currentIndex].alt}
          width={1200}
          height={500}
          className="w-full h-64 sm:h-[28rem] object-cover"
          priority={currentIndex === 0}
        />

        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white text-sm sm:text-lg font-semibold drop-shadow-lg">
          {HERO_IMAGES[currentIndex].alt}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={onPrevious}
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg sm:text-xl transition-all duration-200"
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          onClick={onNext}
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg sm:text-xl transition-all duration-200"
          aria-label="Next image"
        >
          ›
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => onGoToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
