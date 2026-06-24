import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { textReveal, staggerContainer, VIEWPORT_ONCE } from '@/animations/presets';

/**
 * AnimatedText splits a string into words and applies a high-end mask-reveal
 * staggered entrance animation. It uses Framer Motion elements.
 */
export const AnimatedText = ({
  text,
  className,
  as: Component = 'p',
  delay = 0,
  stagger = 0.03,
  ...props
}) => {
  if (!text) return null;
  const words = text.split(' ');

  return (
    <Component 
      className={cn("flex flex-wrap items-center", className)}
      {...props}
    >
      <motion.span
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        custom={{ delay, stagger }}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <span 
            key={index} 
            className="relative inline-block overflow-hidden mr-[0.25em] pb-[0.05em] -mb-[0.05em]"
          >
            <motion.span
              variants={textReveal}
              className="inline-block origin-bottom-left"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
};

export default AnimatedText;
