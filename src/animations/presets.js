/**
 * Reusable Framer Motion animation presets and transition configurations
 * designed for premium visual movement.
 */

// Premium transition curves
export const TRANSITION_SPRING = {
  type: 'spring',
  stiffness: 70,
  damping: 18,
  mass: 0.8,
};

export const TRANSITION_SMOOTH = {
  type: 'tween',
  ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
  duration: 0.8,
};

export const TRANSITION_EXPO = {
  type: 'tween',
  ease: [0.16, 1, 0.3, 1], // easeOutExpo
  duration: 1.2,
};

// Reusable viewport trigger defaults
export const VIEWPORT_ONCE = {
  once: true,
  margin: '-10% 0px -15% 0px', // Triggers when 15% in view for a polished flow
};

// Animation Variants
export const fade = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      ...TRANSITION_SMOOTH,
      delay: custom.delay || 0,
      duration: custom.duration || 0.8,
    },
  }),
};

export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...TRANSITION_SPRING,
      delay: custom.delay || 0,
    },
  }),
};

export const slideDown = {
  hidden: { opacity: 0, y: -30 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...TRANSITION_SPRING,
      delay: custom.delay || 0,
    },
  }),
};

export const slideLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      ...TRANSITION_SPRING,
      delay: custom.delay || 0,
    },
  }),
};

export const slideRight = {
  hidden: { opacity: 0, x: -30 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      ...TRANSITION_SPRING,
      delay: custom.delay || 0,
    },
  }),
};

// Text reveal masks (slides lines up out of clip-paths)
export const textReveal = {
  hidden: { y: '105%' },
  visible: (custom = {}) => ({
    y: 0,
    transition: {
      ...TRANSITION_EXPO,
      delay: custom.delay || 0,
    },
  }),
};

// Stagger parent containers
export const staggerContainer = {
  hidden: {},
  visible: (custom = {}) => ({
    transition: {
      staggerChildren: custom.stagger || 0.1,
      delayChildren: custom.delay || 0,
    },
  }),
};

// Scale presets for cards/buttons
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...TRANSITION_SPRING,
      delay: custom.delay || 0,
    },
  }),
};
