import React from 'react';
import { LenisProvider } from '@/hooks/useLenis';
import { TattvaHero } from '@/sections/TattvaHero';
import { Threshold } from '@/sections/Threshold';
import { InquiryArchive } from '@/sections/InquiryArchive';

/**
 * App — root entry.
 * Wraps everything in the Lenis smooth-scroll context.
 */
function App() {
  return (
    <LenisProvider>
      <div
        className="relative w-full bg-tattva-obsidian text-tattva-cream font-sans antialiased"
        style={{ overflowX: 'hidden' }}
      >
        <TattvaHero />
        <Threshold />
        <InquiryArchive />
        {/* Future sections mount here */}
      </div>
    </LenisProvider>
  );
}

export default App;
