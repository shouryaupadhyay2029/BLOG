import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LIBRARY_TOPICS = [
  { id: 'how-time-flows-in-sanatana-dharma', number: '01', title: 'How Time Flows in Sanātana Dharma', category: 'TIME' },
  { id: 'the-architecture-of-the-cosmos', number: '02', title: 'The Architecture of the Cosmos', category: 'COSMOLOGY' },
  { id: 'srsthi', number: '03', title: 'Sṛṣṭi — How the Universe Comes Into Existence', category: 'CREATION' },
  { id: 'science-and-spirituality', number: '04', title: 'Science & Spirituality', category: 'PHILOSOPHY' },
  { id: 'understanding-karma', number: '05', title: 'Understanding Karma', category: 'DHARMA' }
];

const EASE_EXPO = [0.16, 1, 0.3, 1];

function CreamGrainCanvas() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9998] noise-fine"
        style={{ mixBlendMode: 'multiply', opacity: 0.15 }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9999] noise-coarse"
        style={{ mixBlendMode: 'color-burn', opacity: 0.1 }}
      />
    </>
  );
}

function LibraryRow({ index, id, number, title, category }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/library/${id}`} className="block w-full">
      <motion.div
        className="relative flex items-center justify-between w-full py-12 border-b border-[#0D0D0C]/10 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO, delay: index * 0.05 }}
      >
        {/* The thin golden line growing from left on hover */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C58B52]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isHovered ? 1 : 0 }}
          style={{ originY: 0.5 }}
          transition={{ duration: 0.6, ease: EASE_EXPO }}
        />

        <div className="flex gap-4 sm:gap-8 md:gap-12 items-baseline pl-4 sm:pl-8 md:pl-12">
          <span className="font-instrument text-xl md:text-2xl text-[#0D0D0C]/40">
            {number}
          </span>
          <div className="flex flex-col">
            <h3 className="font-instrument text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#0D0D0C]/70 transition-colors duration-500 ease-out group-hover:text-[#0D0D0C] tracking-tight">
              {title}
            </h3>
            <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52]/70 mt-3 sm:mt-4 transition-colors duration-500 group-hover:text-[#C58B52]">
              {category}
            </span>
          </div>
        </div>

        {/* Minimal Arrow */}
        <motion.div
          className="pr-4 sm:pr-8 md:pr-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
          initial={{ x: -10 }}
          animate={{ x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.8, ease: EASE_EXPO }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C58B52" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </motion.div>
    </Link>
  );
}

export function TattvaLibraryPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#E9E2D4] text-[#0D0D0C] font-sans antialiased">
      <CreamGrainCanvas />

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
                    color: '#0D0D0C',
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
            className="tattva-nav-link transition-colors duration-500 text-[#0D0D0C]/50 group-hover:text-[#C58B52]"
          >
            INQUIRY ARCHIVE
          </span>
        </Link>

        <Link to="/library" className="group flex items-center">
          <span
            className="tattva-nav-link transition-colors duration-500 text-[#C58B52]"
          >
            TATTVA LIBRARY
          </span>
        </Link>

        <Link to="/satya-mithya" className="group flex items-center">
          <span
            className="tattva-nav-link transition-colors duration-500 text-[#0D0D0C]/50 group-hover:text-[#C58B52]"
          >
            SATYA & MITHYĀ
          </span>
        </Link>

        <Link to="/the-origin" className="group flex items-center">
          <span
            className="tattva-nav-link transition-colors duration-500 text-[#0D0D0C]/50 group-hover:text-[#C58B52]"
          >
            THE ORIGIN
          </span>
        </Link>
      </nav>

      <div className="w-full max-w-7xl mx-auto px-6 pt-48 pb-32 relative z-10">

        {/* Header Section */}
        <motion.div
          className="mb-24 flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
        >
          <span className="tattva-nav-link text-[#C58B52] mb-6">
            LIBRARY I
          </span>
          <h1 className="tattva-hero-title text-[#0D0D0C] mb-12">
            Tattva Library
          </h1>
          <p className="tattva-hero-desc text-[#0D0D0C]/70 max-w-2xl">
            Understanding begins before belief.<br />
            Explore the foundational principles, cosmology, philosophy and scriptures of Sanātana Dharma through carefully organized knowledge rooted in authentic sources.
          </p>

          <div className="w-full h-[1px] bg-[#C58B52]/30 mt-20" />
        </motion.div>

        {/* The Library Index */}
        <div className="flex flex-col w-full mb-32">
          {LIBRARY_TOPICS.map((item, index) => (
            <LibraryRow key={item.id} index={index} {...item} />
          ))}
        </div>

        {/* Editorial Message */}
        <motion.div
          className="w-full max-w-3xl pt-16 border-t border-[#0D0D0C]/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <h4 className="font-cormorant text-2xl font-medium text-[#0D0D0C] mb-6">
            Library Under Continuous Expansion
          </h4>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/60 leading-relaxed max-w-2xl">
            TATTVA is a living knowledge library dedicated to Sanātana Dharma.<br /><br />
            Every article is researched individually using primary scriptures, classical commentaries and careful editorial review before publication.<br /><br />
            Rather than publishing unfinished material, new entries are added only after they meet rigorous research standards.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
