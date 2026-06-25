import React from 'react';
import { TattvaHero } from '@/sections/TattvaHero';
import { Threshold } from '@/sections/Threshold';
import { InquiryArchive } from '@/sections/InquiryArchive';
import { FeaturedDeepDive } from '@/sections/FeaturedDeepDive';
import { CosmicTimeline } from '@/sections/CosmicTimeline';
import { ReflectionLibrary } from '@/sections/ReflectionLibrary';
import { SiteWideThread } from '@/components/SiteWideThread';

export function HomePage() {
  return (
    <>
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
