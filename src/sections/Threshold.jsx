import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────
   CREAM GRAIN CANVAS
   Adapted for the warm, light editorial background.
   Uses multiply and color-burn to sit organically in the cream.
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

export function Threshold() {
  const containerRef = useRef(null);
  
  // Track scroll progress through this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax mappings
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  
  // Elegant, expensive easing curve
  const EASE_EXPO = [0.16, 1, 0.3, 1];

  // Soft fade in, upward reveal, blur reduction
  const fadeUpBlur = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.6, ease: EASE_EXPO }
    }
  };

  return (
    <section
      ref={containerRef}
      id="threshold"
      aria-label="Threshold statement"
      className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden"
      style={{
        // A massive gradient that gives a smooth, continuous crossfade as it scrolls up.
        // The top 25% fades from transparent (showing the dark hero) into the warm cream.
        background: 'linear-gradient(to bottom, transparent 0%, #E9E2D4 30%, #E9E2D4 100%)',
      }}
    >
      {/* 
        This absolute div holds the cream paper grain and soft tonal vignette.
        It fades in perfectly in sync with the gradient to prevent a harsh line. 
      */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          // Maps opacity from 0 -> 1 as the first 30% of the section scrolls into view
          opacity: useTransform(scrollYProgress, [0, 0.3], [0, 1]),
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 80%)',
        }}
      >
        <CreamGrainCanvas />
      </motion.div>

      <motion.div 
        style={{ y }} 
        className="layout-container relative z-10 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-15%" }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <div className="grid grid-cols-12 gap-6 items-center">
          
          <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 xl:col-start-4">
            
            {/* Archival Label */}
            <motion.div variants={fadeUpBlur} className="mb-8 md:mb-12">
              <span 
                style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '9.5px',
                  letterSpacing: '0.38em',
                  textTransform: 'uppercase',
                  color: '#1A1A1A', // Deep charcoal
                  opacity: 0.5
                }}
              >
                Threshold 01
              </span>
            </motion.div>

            {/* Main Philosophical Statement */}
            <motion.h2 
              variants={fadeUpBlur}
              style={{
                fontFamily: 'Cormorant, serif',
                fontSize: 'clamp(2.6rem, 5vw, 4.8rem)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                lineHeight: 1.15,
                color: '#0A0A0A', // Near black for maximum premium contrast
                whiteSpace: 'pre-line'
              }}
            >
              {'Not a religion.\nNot a doctrine.\nA search for what is true.'}
            </motion.h2>

            {/* Subtle Muted Divider */}
            <motion.div 
              variants={{
                hidden: { scaleX: 0, opacity: 0 },
                visible: { scaleX: 1, opacity: 1, transition: { duration: 1.8, ease: EASE_EXPO } }
              }}
              style={{
                height: '1px',
                width: '4rem',
                // Using the requested Muted Shadow Tone (#CFC6B7) for the rule
                background: 'linear-gradient(to right, rgba(207,198,183,0.8), transparent)',
                transformOrigin: 'left',
                marginTop: 'clamp(2rem, 4vw, 3.5rem)',
                marginBottom: 'clamp(2rem, 4vw, 3.5rem)'
              }}
            />

            {/* Supporting Line */}
            <motion.p 
              variants={fadeUpBlur}
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
                fontWeight: 300,
                letterSpacing: '0.02em',
                lineHeight: 1.8,
                color: '#2A2A2A', // Soft charcoal
                maxWidth: '42ch'
              }}
            >
              Every civilization asks questions. Few remain willing to sit with them in disciplined thought.
            </motion.p>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}
