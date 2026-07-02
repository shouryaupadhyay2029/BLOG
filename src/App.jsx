import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LenisProvider } from '@/hooks/useLenis';
import ScrollToTop from '@/components/ScrollToTop';
import RouteTransitionWrapper from '@/components/RouteTransitionWrapper';

// Resilient dynamic loader helper
const lazyWithRetry = (importFunc) => {
  return React.lazy(() =>
    importFunc().catch((error) => {
      console.warn("Dynamic import failed, retrying session once...", error);
      const storageKey = `retry-import-${error.message || 'unknown'}`;
      const hasRetried = window.sessionStorage.getItem(storageKey);
      if (!hasRetried) {
        window.sessionStorage.setItem(storageKey, 'true');
        window.location.reload();
      }
      throw error;
    })
  );
};

// Lazy loading route components with retry mechanics
const HomePage = lazyWithRetry(() => import('@/pages/HomePage').then(m => ({ default: m.HomePage })));
const InquiryArchivePage = lazyWithRetry(() => import('@/pages/InquiryArchivePage').then(m => ({ default: m.InquiryArchivePage })));
const InquiryDetailPlaceholder = lazyWithRetry(() => import('@/pages/InquiryDetailPlaceholder').then(m => ({ default: m.InquiryDetailPlaceholder })));
const TattvaLibraryPage = lazyWithRetry(() => import('@/pages/TattvaLibraryPage').then(m => ({ default: m.TattvaLibraryPage })));
const LibraryDetailPlaceholder = lazyWithRetry(() => import('@/pages/LibraryDetailPlaceholder').then(m => ({ default: m.LibraryDetailPlaceholder })));
const HowTimeFlowsArticle = lazyWithRetry(() => import('@/pages/library/HowTimeFlowsArticle').then(m => ({ default: m.HowTimeFlowsArticle })));
const TheArchitectureOfTheCosmos = lazyWithRetry(() => import('@/pages/library/TheArchitectureOfTheCosmos').then(m => ({ default: m.TheArchitectureOfTheCosmos })));
const SrstiArticle = lazyWithRetry(() => import('@/pages/library/SrstiArticle').then(m => ({ default: m.SrstiArticle })));
const SatyaMithyaPage = lazyWithRetry(() => import('@/pages/SatyaMithyaPage').then(m => ({ default: m.SatyaMithyaPage })));
const SatyaMithyaCase001 = lazyWithRetry(() => import('@/pages/SatyaMithyaCase001').then(m => ({ default: m.SatyaMithyaCase001 })));
const SatyaMithyaCase002 = lazyWithRetry(() => import('@/pages/SatyaMithyaCase002').then(m => ({ default: m.SatyaMithyaCase002 })));
const SatyaMithyaCase003 = lazyWithRetry(() => import('@/pages/SatyaMithyaCase003').then(m => ({ default: m.SatyaMithyaCase003 })));
const SatyaMithyaCase004 = lazyWithRetry(() => import('@/pages/SatyaMithyaCase004').then(m => ({ default: m.SatyaMithyaCase004 })));
const SatyaMithyaCase005 = lazyWithRetry(() => import('@/pages/SatyaMithyaCase005').then(m => ({ default: m.SatyaMithyaCase005 })));
const SatyaMithyaPlaceholder = lazyWithRetry(() => import('@/pages/SatyaMithyaPlaceholder').then(m => ({ default: m.SatyaMithyaPlaceholder })));
const TheOriginPage = lazyWithRetry(() => import('@/pages/TheOriginPage').then(m => ({ default: m.TheOriginPage })));
const NotFoundPage = lazyWithRetry(() => import('@/pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

/**
 * Elegant Loader — Adaptive premium fallback screen that shifts themes depending
 * on the destination path to prevent layout flashing.
 */
function ElegantLoader() {
  const path = window.location.pathname;
  const isLight = path.startsWith('/library') || path.startsWith('/satya-mithya');
  
  const bgColor = isLight ? '#E9E2D4' : '#0D0D0C';
  const textColor = isLight ? '#0D0D0C' : '#E9E2D4';

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Texture Shaders adapted to target theme background */}
      {isLight ? (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-[0] noise-fine opacity-12"
            style={{ mixBlendMode: 'multiply' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-[0] noise-coarse opacity-8"
            style={{ mixBlendMode: 'color-burn' }}
          />
        </>
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-[0] noise-fine opacity-[0.03] bg-[url('data:image/svg+xml;utf8,<svg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2280%22_height=%2280%22><filter_id=%22f%22><feTurbulence_type=%22fractalNoise%22_baseFrequency=%220.6%22_numOctaves=%223%22_stitchTiles=%22stitch%22/></filter><rect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23f)%22/></svg>')] bg-repeat"
          />
        </>
      )}
      
      <div className="flex flex-col items-center animate-pulse duration-1000 z-10">
        <span
          style={{
            fontFamily: 'Cormorant, serif',
            fontSize: '14px',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            fontWeight: 300,
            color: textColor,
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
 * Defines all routes under Suspense with page transition wrappers.
 */
function App() {
  return (
    <LenisProvider>
      <ScrollToTop />
      <Suspense fallback={<ElegantLoader />}>
        <Routes>
          <Route path="/" element={<RouteTransitionWrapper><HomePage /></RouteTransitionWrapper>} />
          <Route path="/inquiry" element={<RouteTransitionWrapper><InquiryArchivePage /></RouteTransitionWrapper>} />
          <Route path="/inquiry/:slug" element={<RouteTransitionWrapper><InquiryDetailPlaceholder /></RouteTransitionWrapper>} />
          <Route path="/library" element={<RouteTransitionWrapper><TattvaLibraryPage /></RouteTransitionWrapper>} />
          <Route path="/library/how-time-flows-in-sanatana-dharma" element={<RouteTransitionWrapper><HowTimeFlowsArticle /></RouteTransitionWrapper>} />
          <Route path="/library/the-architecture-of-the-cosmos" element={<RouteTransitionWrapper><TheArchitectureOfTheCosmos /></RouteTransitionWrapper>} />
          <Route path="/library/srsthi" element={<RouteTransitionWrapper><SrstiArticle /></RouteTransitionWrapper>} />
          <Route path="/library/:slug" element={<RouteTransitionWrapper><LibraryDetailPlaceholder /></RouteTransitionWrapper>} />
          <Route path="/satya-mithya" element={<RouteTransitionWrapper><SatyaMithyaPage /></RouteTransitionWrapper>} />
          <Route path="/satya-mithya/does-gita-teach-war" element={<RouteTransitionWrapper><SatyaMithyaCase001 /></RouteTransitionWrapper>} />
          <Route path="/satya-mithya/are-there-really-33-crore-gods" element={<RouteTransitionWrapper><SatyaMithyaCase002 /></RouteTransitionWrapper>} />
          <Route path="/satya-mithya/hinduism-worships-idols" element={<RouteTransitionWrapper><SatyaMithyaCase003 /></RouteTransitionWrapper>} />
          <Route path="/satya-mithya/does-bhagavad-gita-support-caste" element={<RouteTransitionWrapper><SatyaMithyaCase004 /></RouteTransitionWrapper>} />
          <Route path="/satya-mithya/hinduism-commands-sati" element={<RouteTransitionWrapper><SatyaMithyaCase005 /></RouteTransitionWrapper>} />
          <Route path="/satya-mithya/:slug" element={<RouteTransitionWrapper><SatyaMithyaPlaceholder /></RouteTransitionWrapper>} />
          <Route path="/the-origin" element={<RouteTransitionWrapper><TheOriginPage /></RouteTransitionWrapper>} />
          <Route path="*" element={<RouteTransitionWrapper><NotFoundPage /></RouteTransitionWrapper>} />
        </Routes>
      </Suspense>
    </LenisProvider>
  );
}

export default App;
