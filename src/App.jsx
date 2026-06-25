import React from 'react';
import { LenisProvider } from '@/hooks/useLenis';
import { TattvaHero } from '@/sections/TattvaHero';
import { Threshold } from '@/sections/Threshold';
import { InquiryArchive } from '@/sections/InquiryArchive';
import { FeaturedDeepDive } from '@/sections/FeaturedDeepDive';
import { CosmicTimeline } from '@/sections/CosmicTimeline';
import { ReflectionLibrary } from '@/sections/ReflectionLibrary';
import { SiteWideThread } from '@/components/SiteWideThread';

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
        <SiteWideThread />
        <TattvaHero />
        <Threshold />
        <InquiryArchive />
        <FeaturedDeepDive />
        <CosmicTimeline />
      </div>
      <ReflectionLibrary />
    </LenisProvider>
  );
}

export default App;
