import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const INQUIRIES = [
  {
    id: 'why-do-innocent-people-suffer',
    number: '01',
    question: 'Why do innocent people suffer?',
    tags: 'KARMA • DHARMA',
  },
  {
    id: 'does-consciousness-survive-death',
    number: '02',
    question: 'Does consciousness survive death?',
    tags: 'ATMAN • DEATH',
  },
  {
    id: 'is-free-will-an-illusion',
    number: '03',
    question: 'Is free will an illusion?',
    tags: 'KARMA • AGENCY',
  },
  {
    id: 'why-are-there-many-religions',
    number: '04',
    question: 'Why are there many religions?',
    tags: 'DEVOTION • PHILOSOPHY',
  },
  {
    id: 'can-truth-be-known',
    number: '05',
    question: 'Can truth be known?',
    tags: 'EPISTEMOLOGY • DHARMA',
  },
];

const EASE_EXPO = [0.16, 1, 0.3, 1];

/* ─────────────────────────────────────────────────────────────────
   CREAM GRAIN CANVAS
   Repeated here so the section acts as an independent module
   but continues the exact same tactile paper feel.
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
   INQUIRY ITEM (Interactive List Entry)
   ──────────────────────────────────────────────────────────────── */
function InquiryItem({ item, index }) {
  return (
    <Link to={`/inquiry/${item.id}`} className="block">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        whileHover="hover"
        className="group relative flex flex-col gap-4 py-10 cursor-pointer"
      >
        <div className="flex gap-8 items-start">
          {/* 1. Number (Reveals first) */}
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: EASE_EXPO, delay: index * 0.1 } }
            }}
            style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: '18px',
              color: '#666666',
              marginTop: '0.6rem' // Optical alignment with the massive serif heading
            }}
          >
            {item.number}
          </motion.span>

          {/* 2. Question (Reveals second) */}
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.4, ease: EASE_EXPO, delay: index * 0.1 + 0.15 } },
              // Hover: Slight horizontal drift
              hover: { x: 12, transition: { duration: 0.8, ease: EASE_EXPO } }
            }}
            style={{
              fontFamily: 'Cormorant, serif',
              fontSize: 'clamp(2rem, 4vw, 3.8rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: '#0A0A0A',
              letterSpacing: '-0.01em'
            }}
          >
            {item.question}
          </motion.h3>
        </div>

        {/* 3. Category Tags (Reveals third) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 5 },
            visible: { opacity: 0.5, y: 0, transition: { duration: 1.2, ease: EASE_EXPO, delay: index * 0.1 + 0.3 } },
            // Hover: Opacity increase
            hover: { opacity: 1, x: 12, transition: { duration: 0.8, ease: EASE_EXPO } }
          }}
          style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: '10px',
            letterSpacing: '0.25em',
            // Matches the gap width (8 = 2rem = 32px) + number width (~20px) = ~52px
            marginLeft: '52px', 
            color: '#2A2A2A'
          }}
        >
          {item.tags}
        </motion.div>

        {/* Base divider line (Subtle paper crease tone) */}
        <div
          className="absolute bottom-0 left-0 h-[1px] w-full pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(207,198,183,0.5), transparent)',
          }}
        />

        {/* Hover Reveal Details (Right side, fades in) */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 0 },
            hover: { opacity: 1, transition: { duration: 0.6, ease: EASE_EXPO } }
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2"
        >
          <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52]">
            Read Entry
          </span>
        </motion.div>

      </motion.div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ROOT INQUIRY ARCHIVE
   ──────────────────────────────────────────────────────────────── */
export function InquiryArchive() {
  return (
    <section 
      id="inquiry-archive" 
      aria-label="Inquiry Archive"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        // Solid continuation of the cream background from Threshold
        backgroundColor: '#E9E2D4',
        paddingTop: 'clamp(6rem, 10vw, 10rem)',
        paddingBottom: 'clamp(8rem, 12vw, 12rem)'
      }}
    >
      <CreamGrainCanvas />
      
      <div className="layout-container relative z-10 w-full grid grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: Archival Label */}
        <div className="col-span-12 lg:col-span-3">
          <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mb-24 flex items-center gap-4"
        >
          <div className="w-12 h-[1px] bg-[#0A0A0A] opacity-20" />
          <Link to="/inquiry" className="group">
            <span
              className="transition-colors duration-500 group-hover:text-[#C58B52]"
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '10px',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: '#0A0A0A',
                opacity: 0.6
              }}
            >
              Inquiry Archive
            </span>
          </Link>
        </motion.div>
        </div>

        {/* Right Column: Question List */}
        <div className="col-span-12 lg:col-span-8 flex flex-col">
          {/* Top bounding line to close the list design */}
          <div
            className="h-[1px] w-full mb-4"
            style={{
              background: 'linear-gradient(to right, rgba(207,198,183,0.5), transparent)',
            }}
          />
          
          {INQUIRIES.map((item, index) => (
            <InquiryItem key={item.number} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
