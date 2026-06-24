import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';

const LenisContext = createContext(null);

/**
 * LenisProvider initializes and manages Lenis smooth scrolling globally.
 * It coordinates Lenis with GSAP's ScrollTrigger and updates the ticker loop.
 */
export const LenisProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Prevent initializing on server side if SSR is used
    if (typeof window === 'undefined') return;

    // Create Lenis instance with premium scroll characteristics
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential ease
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenisInstance;
    setLenis(lenisInstance);

    // Sync Lenis scroll events with GSAP ScrollTrigger updates
    lenisInstance.on('scroll', ScrollTrigger.update);

    // Update ScrollTrigger scroll function to read from Lenis
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenisInstance.scrollTo(value, { immediate: true });
        }
        return lenisInstance.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // Add Lenis to GSAP ticker for synchronized requestAnimationFrame triggers
    const updateGsap = (time) => {
      lenisInstance.raf(time * 1000); // GSAP time is in seconds, Lenis wants ms
    };
    gsap.ticker.add(updateGsap);
    
    // Disable GSAP lag smoothing to avoid scrolling jitter
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateGsap);
      lenisInstance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
};

/**
 * Access the global Lenis smooth scrolling instance.
 * Allows components to register scroll hooks or callscrollTo methods.
 */
export const useLenis = () => {
  return useContext(LenisContext);
};
