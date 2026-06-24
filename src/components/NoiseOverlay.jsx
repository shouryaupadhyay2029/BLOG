import React from 'react';

/**
 * NoiseOverlay adds a premium, subtle film grain/noise texture overlay 
 * over the entire viewport to elevate the visual aesthetic of the portfolio.
 */
export const NoiseOverlay = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[9999] noise-bg"
      style={{ mixBlendMode: 'overlay' }}
      aria-hidden="true"
    />
  );
};

export default NoiseOverlay;
