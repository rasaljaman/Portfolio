import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer.
 * Returns a ref to attach to the element and a boolean indicating visibility.
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    once = true,
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}

/**
 * Custom hook for SVG draw animation — triggers when element scrolls into view.
 */
export function useSVGDraw(options = {}) {
  const { threshold = 0.3, rootMargin = '0px' } = options;
  const ref = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, shouldAnimate];
}

/**
 * Custom hook for scroll-linked progress (0 to 1) over a section.
 */
export function useScrollProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementHeight = rect.height;

    const start = windowHeight;
    const end = -elementHeight;
    const current = start - elementTop;
    const total = start - end;

    setProgress(Math.min(1, Math.max(0, current / total)));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return [ref, progress];
}
