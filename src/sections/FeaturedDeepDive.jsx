import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE_EXPO = [0.16, 1, 0.3, 1];

/* ─────────────────────────────────────────────────────────────────
   CREAM GRAIN CANVAS
   Repeated here for module independence, maintaining the tactile
   paper feel.
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
   ABSTRACT VISUAL ANCHOR
   A faint, minimal circular form providing atmospheric depth
   without competing with the typography.
   ──────────────────────────────────────────────────────────────── */
function AbstractAnchor() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 0.04, scale: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 2.5, ease: 'easeOut' }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[80px]"
      style={{ backgroundColor: '#1A1A1A' }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────
   FEATURED DEEP-DIVE SECTION
   ──────────────────────────────────────────────────────────────── */
export function FeaturedDeepDive() {
  return (
    <section 
      id="featured-deep-dive" 
      aria-label="Featured Inquiry Deep Dive"
      className="relative w-full min-h-screen overflow-hidden flex items-center"
      style={{
        backgroundColor: '#E9E2D4',
        paddingTop: 'clamp(6rem, 10vw, 10rem)',
        paddingBottom: 'clamp(6rem, 10vw, 10rem)'
      }}
    >
      <CreamGrainCanvas />
      
      <div className="layout-container relative z-10 w-full flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center gap-10">
        
        {/* Left Column: Context, Label, and Actions */}
        <div className="w-full lg:col-span-4 flex flex-col gap-6 lg:gap-10 lg:pl-4 items-center lg:items-start text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <span
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#666666',
              }}
            >
              Featured Inquiry
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.1 }}
            className="flex flex-col gap-4 lg:gap-6"
          >
            <p
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: 'clamp(0.85rem, 1vw, 1rem)',
                lineHeight: 1.6,
                color: '#2A2A2A',
                fontWeight: 400,
                maxWidth: '45ch'
              }}
            >
              An exploration into the mechanics of action, consequence, and cosmic justice. Before finding resolution, we must confront the architecture of suffering and its place within the fabric of Dharma.
            </p>

            <span
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: '#666666',
                opacity: 0.8
              }}
            >
              CONTEXT: KARMA • DHARMA
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.2 }}
          >
            <Link 
              to="/inquiry/why-do-innocent-people-suffer"
              className="group relative inline-flex items-center gap-3 cursor-pointer"
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#1A1A1A'
              }}
            >
              <span className="relative z-10 transition-opacity duration-500 group-hover:opacity-70">
                Begin Exploration
              </span>
              
              {/* Subtle underline extension on hover */}
              <div 
                className="absolute -bottom-2 left-0 h-[1px] w-full bg-[#C58B52]/40 origin-left transform scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" 
              />
            </Link>
          </motion.div>
          
        </div>

        {/* Right Column: Featured Question */}
        <div className="w-full lg:col-span-8 relative flex justify-center lg:justify-start">
          <AbstractAnchor />
          
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.6, ease: EASE_EXPO, delay: 0.3 }}
            style={{
              fontFamily: 'Cormorant, serif',
              fontSize: 'clamp(2.2rem, 5vw, 6.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#0A0A0A',
              letterSpacing: '-0.02em',
              position: 'relative',
              zIndex: 10
            }}
            className="text-center lg:text-left"
          >
            Why do innocent<br />
            <span className="italic opacity-90" style={{ paddingRight: '0.1em' }}>people</span> suffer?
          </motion.h2>
        </div>

      </div>
    </section>
  );
}
