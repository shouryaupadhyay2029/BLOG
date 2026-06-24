import React from 'react';
import { cn } from '@/utils/cn';

/**
 * GridBackground renders a modern tech-inspired interactive visual grid
 * overlay to add depth and architectural structure to portfolio panels.
 */
export const GridBackground = ({ className, opacity = 0.04 }) => {
  return (
    <div 
      className={cn(
        "absolute inset-0 pointer-events-none z-0 interactive-grid",
        className
      )}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
};

export default GridBackground;
