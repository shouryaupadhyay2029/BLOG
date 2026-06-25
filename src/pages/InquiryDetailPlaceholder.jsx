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

export function InquiryDetailPlaceholder() {
  const { slug } = useParams();

  // Convert slug to a readable format
  const title = slug ? slug.replace(/-/g, ' ') : 'Archive Entry';

  return (
    <div className="relative w-full min-h-screen bg-[#0D0D0C] text-[#E9E2D4] flex flex-col items-center justify-center font-sans antialiased px-6 text-center">
      <GrainCanvas />

      {/* HORIZONTAL NAVIGATION BAR */}
      <nav className="absolute top-9 left-9 right-9 md:top-11 md:left-13 md:right-13 z-50 flex justify-between items-center">
        {/* Left: TATTVA Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="group flex flex-col justify-center items-center relative" style={{ width: '130px', height: '40px' }}>
            <span className="font-cormorant text-[13px] tracking-[0.45em] uppercase font-light text-[#E9E2D4]/50 group-hover:text-[#E9E2D4] transition-colors duration-600">
              TATTVA
            </span>
          </Link>
        </div>

        {/* Center: Active Page */}
        <div className="flex-1 flex justify-center">
          <Link to="/inquiry" className="group">
            <span className="font-general text-[10px] tracking-[0.4em] uppercase text-[#C58B52]/70 group-hover:text-[#C58B52] transition-colors duration-500">
              INQUIRY ARCHIVE
            </span>
          </Link>
        </div>

        {/* Right: Existing Navigation / Menu Space */}
        <div className="flex-1 flex justify-end">
          {/* Preserved for identical spacing and alignment as requested */}
        </div>
      </nav>
      
      <motion.div 
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="font-general text-[10px] uppercase tracking-widest text-[#C58B52] mb-6">
          Manuscript Entry
        </span>
        <h1 className="font-instrument text-4xl md:text-6xl text-[#E9E2D4] tracking-tight capitalize mb-12">
          {title}?
        </h1>
        <p className="font-cormorant italic text-xl text-[#E9E2D4]/50 max-w-lg leading-relaxed mb-16">
          This philosophical inquiry is currently being transcribed into the archive.
        </p>
      </motion.div>
    </div>
  );
}
