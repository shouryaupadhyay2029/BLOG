import React from 'react';
import { motion } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1];

/**
 * RouteTransitionWrapper provides a premium editorial transition for page routes.
 * It animates content with a soft fade and blur reveal to prevent sudden jumps
 * or flickering when lazy-loaded route chunks resolve.
 */
export function RouteTransitionWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
      transition={{ duration: 1.0, ease: EASE_EXPO }}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export default RouteTransitionWrapper;
