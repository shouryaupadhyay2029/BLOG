import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LenisProvider } from '@/hooks/useLenis';
import ScrollToTop from '@/components/ScrollToTop';

import { HomePage } from '@/pages/HomePage';
import { InquiryArchivePage } from '@/pages/InquiryArchivePage';
import { InquiryDetailPlaceholder } from '@/pages/InquiryDetailPlaceholder';

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
      </Routes>
    </LenisProvider>
  );
}

export default App;
