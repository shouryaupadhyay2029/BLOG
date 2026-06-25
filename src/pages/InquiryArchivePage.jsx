import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const INQUIRIES = [
  { id: 'why-do-innocent-people-suffer', number: '01', title: 'Why do innocent people suffer?', category: 'KARMA • DHARMA' },
  { id: 'does-consciousness-survive-death', number: '02', title: 'Does consciousness survive death?', category: 'ĀTMAN • DEATH' },
  { id: 'what-is-dharma', number: '03', title: 'What is Dharma?', category: 'ACTION • TRUTH' },
  { id: 'is-free-will-an-illusion', number: '04', title: 'Is free will an illusion?', category: 'FREE WILL • KARMA' },
  { id: 'can-science-and-spirituality-coexist', number: '05', title: 'Can science and spirituality coexist?', category: 'SCIENCE • SPIRITUALITY' },
  { id: 'why-does-evil-exist', number: '06', title: 'Why does evil exist?', category: 'DUALITY • KARMA' },
  { id: 'what-is-karma', number: '07', title: 'What is Karma?', category: 'ACTION • CONSEQUENCE' },
  { id: 'what-happens-after-death', number: '08', title: 'What happens after death?', category: 'MOKṢA • REBIRTH' },
  { id: 'why-do-we-fear-death', number: '09', title: 'Why do we fear death?', category: 'ATTACHMENT • EGO' },
  { id: 'can-god-be-experienced', number: '10', title: 'Can God be experienced?', category: 'DEVOTION • REALIZATION' },
  { id: 'why-are-there-many-religions', number: '11', title: 'Why are there many religions?', category: 'TRUTH • PATHS' },
  { id: 'is-liberation-possible-in-kali-yuga', number: '12', title: 'Is liberation possible in Kali Yuga?', category: 'BHAKTI • TIME' }
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

function QuestionRow({ index, id, number, title, category }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/inquiry/${id}`} className="block w-full">
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

export function InquiryArchivePage() {
  return (
    <div className="relative w-full min-h-screen bg-[#0D0D0C] text-[#E9E2D4] font-sans antialiased">
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
          <span className="font-general text-[10px] tracking-[0.4em] uppercase text-[#C58B52]">
            INQUIRY ARCHIVE
          </span>
        </div>

        {/* Right: Existing Navigation / Menu Space */}
        <div className="flex-1 flex justify-end">
          {/* Preserved for identical spacing and alignment as requested */}
        </div>
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
            ARCHIVE I
          </span>
          <h1 className="font-instrument text-6xl md:text-8xl lg:text-9xl text-[#E9E2D4] tracking-tighter leading-none mb-12">
            Inquiry Archive
          </h1>
          <p className="font-cormorant text-xl md:text-2xl font-light italic text-[#E9E2D4]/70 max-w-2xl leading-relaxed">
            Every civilization has asked questions.<br />
            Some sought belief. Others sought certainty.<br />
            This archive preserves the questions that continue to shape humanity's search for truth.
          </p>
          
          <div className="w-full h-[1px] bg-[#C58B52]/30 mt-20" />
        </motion.div>

        {/* The Archive List */}
        <div className="flex flex-col w-full">
          {INQUIRIES.map((item, index) => (
            <QuestionRow key={item.id} index={index} {...item} />
          ))}
        </div>

      </div>
    </div>
  );
}
