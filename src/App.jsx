import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LenisProvider } from '@/hooks/useLenis';
import ScrollToTop from '@/components/ScrollToTop';

// Lazy loading route components (named exports require mapping to default)
const HomePage = React.lazy(() => import('@/pages/HomePage').then(m => ({ default: m.HomePage })));
const InquiryArchivePage = React.lazy(() => import('@/pages/InquiryArchivePage').then(m => ({ default: m.InquiryArchivePage })));
const InquiryDetailPlaceholder = React.lazy(() => import('@/pages/InquiryDetailPlaceholder').then(m => ({ default: m.InquiryDetailPlaceholder })));
const TattvaLibraryPage = React.lazy(() => import('@/pages/TattvaLibraryPage').then(m => ({ default: m.TattvaLibraryPage })));
const LibraryDetailPlaceholder = React.lazy(() => import('@/pages/LibraryDetailPlaceholder').then(m => ({ default: m.LibraryDetailPlaceholder })));
const HowTimeFlowsArticle = React.lazy(() => import('@/pages/library/HowTimeFlowsArticle').then(m => ({ default: m.HowTimeFlowsArticle })));
const TheArchitectureOfTheCosmos = React.lazy(() => import('@/pages/library/TheArchitectureOfTheCosmos').then(m => ({ default: m.TheArchitectureOfTheCosmos })));
const SrstiArticle = React.lazy(() => import('@/pages/library/SrstiArticle').then(m => ({ default: m.SrstiArticle })));
const SatyaMithyaPage = React.lazy(() => import('@/pages/SatyaMithyaPage').then(m => ({ default: m.SatyaMithyaPage })));
const SatyaMithyaCase001 = React.lazy(() => import('@/pages/SatyaMithyaCase001').then(m => ({ default: m.SatyaMithyaCase001 })));
const SatyaMithyaCase002 = React.lazy(() => import('@/pages/SatyaMithyaCase002').then(m => ({ default: m.SatyaMithyaCase002 })));
const SatyaMithyaCase003 = React.lazy(() => import('@/pages/SatyaMithyaCase003').then(m => ({ default: m.SatyaMithyaCase003 })));
const SatyaMithyaCase004 = React.lazy(() => import('@/pages/SatyaMithyaCase004').then(m => ({ default: m.SatyaMithyaCase004 })));
const SatyaMithyaCase005 = React.lazy(() => import('@/pages/SatyaMithyaCase005').then(m => ({ default: m.SatyaMithyaCase005 })));
const SatyaMithyaPlaceholder = React.lazy(() => import('@/pages/SatyaMithyaPlaceholder').then(m => ({ default: m.SatyaMithyaPlaceholder })));
const TheOriginPage = React.lazy(() => import('@/pages/TheOriginPage').then(m => ({ default: m.TheOriginPage })));

/**
 * Elegant Loader — Premium, minimalist fallback screen during route transition.
 */
function ElegantLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0D0D0C] text-[#E9E2D4]">
      {/* Subtle fine noise overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('data:image/svg+xml;utf8,<svg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2280%22_height=%2280%22><filter_id=%22f%22><feTurbulence_type=%22fractalNoise%22_baseFrequency=%220.6%22_numOctaves=%223%22_stitchTiles=%22stitch%22/></filter><rect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23f)%22/></svg>')] bg-repeat"
      />
      <div className="flex flex-col items-center animate-pulse duration-1000">
        <span
          style={{
            fontFamily: 'Cormorant, serif',
            fontSize: '14px',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            fontWeight: 300,
            color: '#E9E2D4',
            opacity: 0.65
          }}
        >
          TATTVA
        </span>
        <div className="w-12 h-[1px] bg-[#C58B52]/40 mt-4" />
      </div>
    </div>
  );
}

/**
 * App — root entry.
 * Wraps everything in the Lenis smooth-scroll context.
 * Defines all routes under Suspense.
 */
function App() {
  return (
    <LenisProvider>
      <ScrollToTop />
      <Suspense fallback={<ElegantLoader />}>
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
          <Route path="/the-origin" element={<TheOriginPage />} />
        </Routes>
      </Suspense>
    </LenisProvider>
  );
}

export default App;
