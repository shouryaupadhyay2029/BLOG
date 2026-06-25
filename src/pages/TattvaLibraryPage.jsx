import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LIBRARY_TOPICS = [
  { id: 'how-time-flows-in-sanatana-dharma', number: '01', title: 'How Time Flows in Sanātana Dharma', category: 'TIME' },
  { id: 'science-and-spirituality', number: '02', title: 'Science & Spirituality', category: 'PHILOSOPHY' },
  { id: 'understanding-karma', number: '03', title: 'Understanding Karma', category: 'DHARMA' },
  { id: 'dharma-explained', number: '04', title: 'Dharma Explained', category: 'DHARMA' },
  { id: 'the-four-yugas', number: '05', title: 'The Four Yugas', category: 'TIME' },
  { id: 'trimurti', number: '06', title: 'Trimūrti', category: 'COSMOLOGY' },
  { id: 'creation-of-the-universe', number: '07', title: 'Creation of the Universe', category: 'COSMOLOGY' },
  { id: 'atman-and-consciousness', number: '08', title: 'Ātman and Consciousness', category: 'CONSCIOUSNESS' },
  { id: 'moksa', number: '09', title: 'Mokṣa', category: 'PHILOSOPHY' },
  { id: 'the-four-vedas', number: '10', title: 'The Four Vedas', category: 'SCRIPTURE' },
  { id: 'upanisads', number: '11', title: 'Upaniṣads', category: 'SCRIPTURE' },
  { id: 'lokas-and-cosmic-structure', number: '12', title: 'Lokas and Cosmic Structure', category: 'COSMOLOGY' },
  { id: 'avataras', number: '13', title: 'Avatāras', category: 'PHILOSOPHY' },
  { id: 'pralaya', number: '14', title: 'Pralaya', category: 'COSMOLOGY' },
  { id: 'sacred-symbols', number: '15', title: 'Sacred Symbols', category: 'PHILOSOPHY' },
  { id: 'meditation-and-yoga', number: '16', title: 'Meditation and Yoga', category: 'YOGA' }
];

const EASE_EXPO = [0.16, 1, 0.3, 1];

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
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9999] noise-heavy"
        style={{ mixBlendMode: 'color-dodge', opacity: 0.18 }}
      />
    </>
  );
}

function LibraryRow({ index, id, number, title, category }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/library/${id}`} className="block w-full">
      <motion.div
        className="relative flex items-center justify-between w-full py-12 border-b border-[#E9E2D4]/10 cursor-pointer group"
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

        <div className="flex gap-12 items-baseline pl-8 md:pl-12">
          <span className="font-instrument text-2xl text-[#E9E2D4]/40">
            {number}
          </span>
          <div className="flex flex-col">
            <h3 className="font-instrument text-3xl md:text-5xl lg:text-6xl text-[#E9E2D4]/70 transition-colors duration-500 ease-out group-hover:text-[#E9E2D4] tracking-tight">
              {title}
            </h3>
            <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52]/70 mt-4 transition-colors duration-500 group-hover:text-[#C58B52]">
              {category}
            </span>
          </div>
        </div>

        {/* Minimal Arrow */}
        <motion.div 
          className="pr-8 md:pr-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
          initial={{ x: -10 }}
          animate={{ x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.8, ease: EASE_EXPO }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C58B52" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>
      </motion.div>
    </Link>
  );
}

export function TattvaLibraryPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#0D0D0C] text-[#E9E2D4] font-sans antialiased">
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
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#E9E2D4]/50 group-hover:text-[#C58B52]"
          >
            INQUIRY ARCHIVE
          </span>
        </Link>

        <Link to="/library" className="group flex items-center">
          <span 
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#C58B52]"
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

      <div className="w-full max-w-7xl mx-auto px-6 pt-48 pb-32 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          className="mb-24 flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
        >
          <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6">
            LIBRARY I
          </span>
          <h1 className="font-instrument text-6xl md:text-8xl lg:text-9xl text-[#E9E2D4] tracking-tighter leading-none mb-12">
            Tattva Library
          </h1>
          <p className="font-cormorant text-xl md:text-2xl font-light italic text-[#E9E2D4]/70 max-w-2xl leading-relaxed">
            Understanding begins before belief.<br />
            Explore the foundational principles, cosmology, philosophy and scriptures of Sanātana Dharma through carefully organized knowledge rooted in authentic sources.
          </p>
          
          <div className="w-full h-[1px] bg-[#C58B52]/30 mt-20" />
        </motion.div>

        {/* The Library Index */}
        <div className="flex flex-col w-full">
          {LIBRARY_TOPICS.map((item, index) => (
            <LibraryRow key={item.id} index={index} {...item} />
          ))}
        </div>

      </div>
    </div>
  );
}
