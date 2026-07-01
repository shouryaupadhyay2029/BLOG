import { useEffect, useState, useRef } from 'react';

/**
 * useScrollSpy — native IntersectionObserver hook for high-performance scroll-spy.
 * Avoids continuous scroll event coordinates checks (which cause layout reflow).
 * 
 * @param {Array<{id: string, label: string}>} sections 
 * @param {Object} options 
 * @returns {string} activeLabel
 */
export function useScrollSpy(sections, options = {}) {
  const [activeLabel, setActiveLabel] = useState(sections[0]?.label || '');
  const activeLabelRef = useRef(activeLabel);

  useEffect(() => {
    activeLabelRef.current = activeLabel;
  }, [activeLabel]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observerOptions = {
      rootMargin: options.rootMargin || '-20% 0px -50% 0px',
      threshold: options.threshold || 0
    };

    // Track intersection state of each section
    const visibleSections = new Map();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        visibleSections.set(entry.target.id, entry.isIntersecting);
      });

      // Find the first intersecting section based on original sections order
      let currentLabel = activeLabelRef.current;
      for (const section of sections) {
        if (visibleSections.get(section.id)) {
          currentLabel = section.label;
          break;
        }
      }

      if (currentLabel && currentLabel !== activeLabelRef.current) {
        setActiveLabel(currentLabel);
      }
    }, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          observer.unobserve(el);
        }
      });
      observer.disconnect();
    };
  }, [sections, options.rootMargin, options.threshold]);

  return activeLabel;
}

export default useScrollSpy;
