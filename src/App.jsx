import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LenisProvider } from '@/hooks/useLenis';
import ScrollToTop from '@/components/ScrollToTop';

import { HomePage } from '@/pages/HomePage';
import { InquiryArchivePage } from '@/pages/InquiryArchivePage';
import { InquiryDetailPlaceholder } from '@/pages/InquiryDetailPlaceholder';
import { TattvaLibraryPage } from '@/pages/TattvaLibraryPage';
import { LibraryDetailPlaceholder } from '@/pages/LibraryDetailPlaceholder';
import { HowTimeFlowsArticle } from '@/pages/library/HowTimeFlowsArticle';
import { TheArchitectureOfTheCosmos } from '@/pages/library/TheArchitectureOfTheCosmos';
import { SrstiArticle } from '@/pages/library/SrstiArticle';
import { SatyaMithyaPage } from '@/pages/SatyaMithyaPage';
import { SatyaMithyaCase001 } from '@/pages/SatyaMithyaCase001';
import { SatyaMithyaCase002 } from '@/pages/SatyaMithyaCase002';
import { SatyaMithyaCase003 } from '@/pages/SatyaMithyaCase003';
import { SatyaMithyaCase004 } from '@/pages/SatyaMithyaCase004';
import { SatyaMithyaCase005 } from '@/pages/SatyaMithyaCase005';
import { SatyaMithyaPlaceholder } from '@/pages/SatyaMithyaPlaceholder';

/**
 * App — root entry.
 * Wraps everything in the Lenis smooth-scroll context.
 * Defines all routes.
 */
function App() {
  return (
    <LenisProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inquiry" element={<InquiryArchivePage />} />
        <Route path="/inquiry/:slug" element={<InquiryDetailPlaceholder />} />
        <Route path="/library" element={<TattvaLibraryPage />} />
        <Route path="/library/how-time-flows-in-sanatana-dharma" element={<HowTimeFlowsArticle />} />
        <Route path="/library/the-architecture-of-the-cosmos" element={<TheArchitectureOfTheCosmos />} />
        <Route path="/library/srsthi" element={<SrstiArticle />} />
        <Route path="/library/:slug" element={<LibraryDetailPlaceholder />} />
        <Route path="/satya-mithya" element={<SatyaMithyaPage />} />
        <Route path="/satya-mithya/does-gita-teach-war" element={<SatyaMithyaCase001 />} />
        <Route path="/satya-mithya/are-there-really-33-crore-gods" element={<SatyaMithyaCase002 />} />
        <Route path="/satya-mithya/hinduism-worships-idols" element={<SatyaMithyaCase003 />} />
        <Route path="/satya-mithya/does-bhagavad-gita-support-caste" element={<SatyaMithyaCase004 />} />
        <Route path="/satya-mithya/hinduism-commands-sati" element={<SatyaMithyaCase005 />} />
        <Route path="/satya-mithya/:slug" element={<SatyaMithyaPlaceholder />} />
      </Routes>
    </LenisProvider>
  );
}

export default App;
