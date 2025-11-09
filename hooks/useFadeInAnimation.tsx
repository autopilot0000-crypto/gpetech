import { useState, useEffect, RefObject } from 'react';

const useFadeInAnimation = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px' }
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      // We only want to set it to true, and never back to false
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element); // Disconnect after animation
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, options]);

  return isVisible;
};

export default useFadeInAnimation;
