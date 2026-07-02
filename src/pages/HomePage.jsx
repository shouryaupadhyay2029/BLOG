import React from 'react';
import { TattvaHero } from '@/sections/TattvaHero';
import { Threshold } from '@/sections/Threshold';
import { InquiryArchive } from '@/sections/InquiryArchive';
import { FeaturedDeepDive } from '@/sections/FeaturedDeepDive';
import { CosmicTimeline } from '@/sections/CosmicTimeline';
import { ReflectionLibrary } from '@/sections/ReflectionLibrary';
import { SiteWideThread } from '@/components/SiteWideThread';
import { PremiumHeader } from '@/components/PremiumHeader';

export function HomePage() {
  return (
    <>
      {/* PremiumHeader lives at the page root so its fixed overlay is never
          clipped by overflow:hidden or CSS-transform stacking contexts */}
      <PremiumHeader theme="dark" activeLink="home" />
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
    </>
  );
}
