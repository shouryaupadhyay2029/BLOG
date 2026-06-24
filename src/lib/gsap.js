import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Re-export GSAP and ScrollTrigger for local convenience
export { gsap, ScrollTrigger };

/**
 * Reusable animation helper for simple scroll-triggered animations.
 * 
 * NOTE: When using GSAP in React, it is highly recommended to run animations
 * inside the `useGSAP` hook from `@gsap/react` to ensure automatic memory cleanup
 * and scoping.
 * 
 * Example:
 * useGSAP(() => {
 *   animateOnScroll('.fade-el', { opacity: 1, y: 0 });
 * }, { scope: containerRef });
 * 
 * @param {gsap.DOMTarget} target - Target element or selector
 * @param {gsap.TweenVars} vars - GSAP tween options
 * @param {ScrollTrigger.Vars} scrollTriggerVars - Custom ScrollTrigger configurations
 * @returns {gsap.core.Tween}
 */
export const animateOnScroll = (target, vars = {}, scrollTriggerVars = {}) => {
  const {
    duration = 1,
    ease = 'power3.out',
    delay = 0,
    ...animationVars
  } = vars;

  return gsap.to(target, {
    ...animationVars,
    duration,
    ease,
    delay,
    scrollTrigger: {
      trigger: target,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
      ...scrollTriggerVars,
    },
  });
};

/**
 * Creates a reusable scroll-driven timeline.
 * 
 * @param {ScrollTrigger.Vars} scrollTriggerVars - ScrollTrigger configurations
 * @param {gsap.TimelineVars} timelineVars - GSAP Timeline options
 * @returns {gsap.core.Timeline}
 */
export const createScrollTimeline = (scrollTriggerVars = {}, timelineVars = {}) => {
  return gsap.timeline({
    ...timelineVars,
    scrollTrigger: {
      scrub: 1,
      start: 'top top',
      end: 'bottom bottom',
      ...scrollTriggerVars,
    },
  });
};
