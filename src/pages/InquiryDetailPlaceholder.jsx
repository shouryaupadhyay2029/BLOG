import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WhyDoInnocentPeopleSuffer } from './inquiries/WhyDoInnocentPeopleSuffer';
import { WhyDoInnocentChildrenSuffer } from './inquiries/WhyDoInnocentChildrenSuffer';
import { FreeWillOrDestiny } from './inquiries/FreeWillOrDestiny';

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

  // Route to the dedicated article if the slug matches
  if (slug === 'why-do-innocent-people-suffer') {
    return <WhyDoInnocentPeopleSuffer />;
  }
  if (slug === 'why-do-innocent-children-suffer') {
    return <WhyDoInnocentChildrenSuffer />;
  }
  if (slug === 'free-will-or-destiny') {
    return <FreeWillOrDestiny />;
  }

  // Convert slug to a readable format
  const title = slug ? slug.replace(/-/g, ' ') : 'Archive Entry';

  return (
    <div className="relative w-full min-h-screen bg-[#0D0D0C] text-[#E9E2D4] flex flex-col items-center justify-center font-sans antialiased px-6 text-center">
      <GrainCanvas />

      {/* HORIZONTAL NAVIGATION BAR */}
      <nav className="absolute top-9 left-9 md:top-11 md:left-13 z-50 flex items-center gap-12 lg:gap-16">
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
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#C58B52]/70 group-hover:text-[#C58B52]"
          >
            INQUIRY ARCHIVE
          </span>
        </Link>

        <Link to="/library" className="group flex items-center">
          <span 
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#E9E2D4]/50 group-hover:text-[#C58B52]"
          >
            TATTVA LIBRARY
          </span>
        </Link>

        <Link to="/satya-mithya" className="group flex items-center">
          <span 
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#E9E2D4]/50 group-hover:text-[#C58B52]"
          >
            SATYA & MITHYĀ
          </span>
        </Link>
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
