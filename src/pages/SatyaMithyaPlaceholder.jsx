import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function GrainCanvas() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9998] noise-fine"
        style={{ mixBlendMode: 'overlay', opacity: 0.65 }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9999] noise-coarse"
        style={{ mixBlendMode: 'soft-light', opacity: 0.45 }}
      />
    </>
  );
}

const EASE_EXPO = [0.16, 1, 0.3, 1];

export function SatyaMithyaPlaceholder() {
  const { slug } = useParams();

  // Convert slug to a readable format
  const title = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Archive Entry';

  return (
    <div className="relative w-full min-h-screen bg-[#0D0D0C] text-[#E9E2D4] flex flex-col items-center font-sans antialiased">
      <GrainCanvas />

      {/* HORIZONTAL NAVIGATION BAR */}
      <nav className="absolute top-6 left-6 md:top-11 md:left-13 z-50 flex flex-wrap items-center gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-2 max-w-[calc(100%-48px)]">
        <Link to="/" className="block">
          <div className="cursor-default">
            <div className="relative flex flex-col justify-center items-center" style={{ width: '130px', height: '40px' }}>
              <div className="relative w-full h-full flex items-center justify-center">
                <span
                  style={{
                    position: 'absolute',
                    fontFamily: 'Cormorant, serif',
                    fontSize: '13px',
                    letterSpacing: '0.45em',
                    textTransform: 'uppercase',
                    fontWeight: 300,
                    color: '#E9E2D4',
                    opacity: 0.5
                  }}
                  className="hover:opacity-100 transition-opacity duration-600"
                >
                  TATTVA
                </span>
              </div>
            </div>
          </div>
        </Link>
        
        <Link to="/inquiry" className="group flex items-center">
          <span 
            className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#E9E2D4]/50 group-hover:text-[#C58B52]"
          >
            INQUIRY ARCHIVE
          </span>
        </Link>

        <Link to="/library" className="group flex items-center">
          <span 
            className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#E9E2D4]/50 group-hover:text-[#C58B52]"
          >
            TATTVA LIBRARY
          </span>
        </Link>

        <Link to="/satya-mithya" className="group flex items-center">
          <span 
            className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#C58B52]/70 group-hover:text-[#C58B52]"
          >
            SATYA & MITHYĀ
          </span>
        </Link>

<Link to="/the-origin" className="group flex items-center">
  <span 
    className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#E9E2D4]/50 group-hover:text-[#C58B52]"
  >
    THE ORIGIN
  </span>
</Link>
      </nav>
      
      <div className="w-full max-w-4xl px-6 pt-48 pb-32 relative z-10 flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
          className="mb-24"
        >
          <span className="font-general text-[10px] uppercase tracking-widest text-[#C58B52] mb-6 block text-center">
            Contextual Archive
          </span>
          <h1 className="font-instrument text-4xl md:text-6xl text-[#E9E2D4] tracking-tight mb-12 text-center">
            {title}
          </h1>
          <div className="w-full h-[1px] bg-[#C58B52]/30 mt-16" />
        </motion.div>

        {/* 1. Popular Narrative */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="font-instrument text-2xl md:text-3xl text-[#E9E2D4] tracking-tight mb-6">
            1. Popular Narrative
          </h2>
          <p className="font-cormorant text-lg md:text-xl font-light italic text-[#E9E2D4]/60 leading-relaxed max-w-3xl">
            This section summarizes the widely accepted, often dramatized or simplified version of the story as it appears in modern retellings, television adaptations, and popular culture.
          </p>
        </motion.section>

        {/* 2. Scriptural Context */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="font-instrument text-2xl md:text-3xl text-[#E9E2D4] tracking-tight mb-6">
            2. Scriptural Context
          </h2>
          <p className="font-cormorant text-lg md:text-xl font-light italic text-[#E9E2D4]/60 leading-relaxed max-w-3xl">
            This section provides the original historical and textual context. It examines what is actually written in the primary texts, shedding light on the philosophical nuance and removing later interpolations or misinterpretations.
          </p>
        </motion.section>

        {/* 3. Primary References */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.3 }}
        >
          <h2 className="font-instrument text-2xl md:text-3xl text-[#E9E2D4] tracking-tight mb-6">
            3. Primary References
          </h2>
          <ul className="font-general text-[12px] uppercase tracking-widest text-[#C58B52]/70 space-y-4">
            <li>Mahābhārata (Critical Edition)</li>
            <li>Śrīmad Bhāgavatam</li>
            <li>Traditional Commentaries</li>
          </ul>
        </motion.section>

      </div>
    </div>
  );
}
