import React from 'react';
import { LenisProvider } from '@/hooks/useLenis';
import NoiseOverlay from './NoiseOverlay';
import { cn } from '@/utils/cn';

/**
 * PageContainer is the top-level layout wrapper that initializes the smooth scroll context,
 * overlays visual shaders (like noise), and standardizes background/text color tokens.
 */
export const PageContainer = ({ children, className }) => {
  return (
    <LenisProvider>
      <div 
        className={cn(
          "relative min-h-screen w-full bg-background text-primary font-sans antialiased selection:bg-accent selection:text-background",
          className
        )}
      >
        {/* Visual texture shader */}
        <NoiseOverlay />
        
        {/* Main page content wrapper */}
        <main id="main-content" className="relative w-full">
          {children}
        </main>
      </div>
    </LenisProvider>
  );
};

export default PageContainer;
