import React from 'react';
import { motion } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1];

/* ─────────────────────────────────────────────────────────────────
   CREAM GRAIN CANVAS
   ──────────────────────────────────────────────────────────────── */
function CreamGrainCanvas() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[0] noise-fine"
        style={{ mixBlendMode: 'multiply', opacity: 0.12 }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[0] noise-coarse"
        style={{ mixBlendMode: 'color-burn', opacity: 0.08 }}
      />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ROOT COSMIC TIMELINE
   ──────────────────────────────────────────────────────────────── */
export function CosmicTimeline() {
  return (
    <section 
      id="cosmic-timeline" 
      aria-label="Cosmic Timeline of Yugas"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: '#E9E2D4',
        // The height ensures there's enough space for the global SiteWideThread to render 
        // its absolute textual content and finish drawing the SVG path before hitting the footer.
        height: '250vh'
      }}
    >
      <CreamGrainCanvas />

      {/* Header Label placed at the very top of this section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
        className="absolute top-[5%] w-full flex justify-start pl-8 md:pl-16 lg:pl-24 z-10"
      >
        <span
          style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: '10px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#1A1A1A',
            opacity: 0.6
          }}
        >
          Cosmic Architecture
        </span>
      </motion.div>

      {/* 
        NOTE: The actual Yuga text content, glowing nodes, and hover interactions 
        are perfectly anchored and rendered globally inside src/components/SiteWideThread.jsx 
        so they can perfectly align mathematically with the scrolling SVG line.
      */}
      
    </section>
  );
}
