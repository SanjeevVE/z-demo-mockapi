import { useState, useCallback } from 'react';

interface UseCarouselReturn {
  currentIndex: number;
  next: () => void;
  previous: () => void;
  goTo: (index: number) => void;
}

export const useCarousel = (totalItems: number): UseCarouselReturn => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  }, [totalItems]);

  const previous = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  }, [totalItems]);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < totalItems) {
      setCurrentIndex(index);
    }
  }, [totalItems]);

  return {
    currentIndex,
    next,
    previous,
    goTo,
  };
};
