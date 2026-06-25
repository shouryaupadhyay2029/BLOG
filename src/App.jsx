import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LenisProvider } from '@/hooks/useLenis';
import ScrollToTop from '@/components/ScrollToTop';

import { HomePage } from '@/pages/HomePage';
import { InquiryArchivePage } from '@/pages/InquiryArchivePage';
import { InquiryDetailPlaceholder } from '@/pages/InquiryDetailPlaceholder';
import { TattvaLibraryPage } from '@/pages/TattvaLibraryPage';
import { LibraryDetailPlaceholder } from '@/pages/LibraryDetailPlaceholder';
import { SatyaMithyaPage } from '@/pages/SatyaMithyaPage';
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
        <Route path="/library/:slug" element={<LibraryDetailPlaceholder />} />
        <Route path="/satya-mithya" element={<SatyaMithyaPage />} />
        <Route path="/satya-mithya/:slug" element={<SatyaMithyaPlaceholder />} />
      </Routes>
    </LenisProvider>
  );
}

export default App;
