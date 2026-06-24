import React, { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────
   TATTVA — Hero Section (Premium Manuscript Engine)
   ──────────────────────────────────────────────────────────────── */

const QUOTES = [
  {
    sanskrit_l1: 'न जायते म्रियते वा',
    sanskrit_l2: 'कदाचित्',
    transliteration: 'na jāyate mriyate vā kadācit',
    translation: 'It is never born,\nnor does it ever die.',
    source: 'Bhagavad Gita',
    sourceRef: '2.20',
  },
  {
    sanskrit_l1: 'ईशावास्यमिदं सर्वं',
    sanskrit_l2: 'यत्किञ्च जगत्यां जगत्',
    transliteration: 'īśāvāsyamidaṁ sarvaṁ yatkiñca jagatyāṁ jagat',
    translation: 'All this, whatever moves in this moving world,\nis enveloped by God.',
    source: 'Isha Upanishad',
    sourceRef: '1',
  },
  {
    sanskrit_l1: 'असतो मा सद्गमय',
    sanskrit_l2: 'तमसो मा ज्योतिर्गमय',
    transliteration: 'asato mā sadgamaya, tamaso mā jyotirgamaya',
    translation: 'Lead me from the unreal to the real,\nlead me from darkness to light.',
    source: 'Brihadaranyaka',
    sourceRef: '1.3.28',
  },
  {
    sanskrit_l1: 'कर्मण्येवाधिकारस्ते',
    sanskrit_l2: 'मा फलेषु कदाचन',
    transliteration: 'karmaṇyevādhikāraste mā phaleṣu kadācana',
    translation: 'You have a right to perform your prescribed duty,\nbut you are not entitled to the fruits of action.',
    source: 'Bhagavad Gita',
    sourceRef: '2.47',
  },
  {
    sanskrit_l1: 'स य एषोऽणिमैतदात्म्यमिदं',
    sanskrit_l2: 'सर्वं तत्सत्यं स आत्मा तत्त्वमसि',
    transliteration: 'sa ya eṣo\'ṇimaitadātmyamidaṁ sarvaṁ tat satyaṁ sa ātmā tat tvam asi',
    translation: 'That which is the subtle essence,\nin it all that exists has its self.\nIt is the True. It is the Self, and thou art that.',
    source: 'Chandogya',
    sourceRef: '6.8.7',
  },
  {
    sanskrit_l1: 'सत्यमेव जयते नानृतं',
    sanskrit_l2: 'सत्येन पन्था विततो देवयानः',
    transliteration: 'satyameva jayate nānṛtaṁ satyena panthā vitato devayānaḥ',
    translation: 'Truth alone triumphs; not falsehood.\nThrough truth the divine path is spread out.',
    source: 'Mundaka',
    sourceRef: '3.1.6',
  },
  {
    sanskrit_l1: 'उद्धरेदात्मनात्मानं',
    sanskrit_l2: 'नात्मानमवसादयेत्',
    transliteration: 'uddharedātmanātmānaṁ nātmānamavasādayet',
    translation: 'Let a man lift himself by his own Self alone;\nlet him not degrade himself.',
    source: 'Bhagavad Gita',
    sourceRef: '6.5',
  },
  {
    sanskrit_l1: 'उत्तिष्ठत जाग्रत',
    sanskrit_l2: 'प्राप्य वरान्निबोधत',
    transliteration: 'uttiṣṭhata jāgrata prāpya varānnibodhata',
    translation: 'Arise, awake, and learn\nby approaching the exalted ones.',
    source: 'Katha Upanishad',
    sourceRef: '1.3.14',
  },
];

// ── Easing ────────────────────────────────────────────────────
// A very calm, expensive exponential ease (no bounce)
const EASE_EXPO = [0.16, 1, 0.3, 1];

// Base initial load variants for the surrounding non-rotating items
const fadeUpBlur = (delay = 0, y = 16, blur = 4) => ({
  hidden: { opacity: 0, y, filter: `blur(${blur}px)` },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.4, ease: EASE_EXPO, delay },
  },
});

const fadeInBlur = (delay = 0, duration = 1.6, blur = 4) => ({
  hidden: { opacity: 0, filter: `blur(${blur}px)` },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration, ease: EASE_EXPO, delay },
  },
});

/* ─────────────────────────────────────────────────────────────────
   GRAIN LAYERS (Static)
   ──────────────────────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────────
   VIGNETTE
   ──────────────────────────────────────────────────────────────── */
function Vignette() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(10,10,10,0.85) 100%)',
      }} />
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to left, rgba(14,14,14,0.6) 0%, transparent 55%)',
      }} />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 50% at 28% 52%, rgba(20,20,20,0.3) 0%, transparent 65%)',
      }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ABSTRACT FORMS
   ──────────────────────────────────────────────────────────────── */
function AbstractForms() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      <motion.div
        variants={fadeInBlur(0.8, 3, 8)}
        className="absolute top-0 right-0"
        style={{
          width: '50vw',
          height: '50vh',
          background: 'radial-gradient(ellipse at 80% 20%, rgba(234,228,217,0.02) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        variants={fadeInBlur(1.2, 4, 12)}
        className="absolute bottom-[-10%] right-[-5%]"
        style={{
          width: '60vw',
          height: '70vh',
          background: 'radial-gradient(ellipse at 60% 70%, rgba(20,18,15,0.7) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   WORDMARK
   ──────────────────────────────────────────────────────────────── */
function Wordmark() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInBlur(0.2, 1.8, 2)}
      className="absolute top-9 left-9 md:top-11 md:left-13 z-20 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex flex-col justify-center items-center" style={{ width: '130px', height: '40px' }}>
        <motion.div 
           className="absolute inset-0 pointer-events-none"
           initial={{ opacity: 0 }}
           animate={{ opacity: isHovered ? 1 : 0 }}
           transition={{ duration: 0.7, ease: EASE_EXPO }}
           style={{
             background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 60%)',
             filter: 'blur(12px)',
             transform: 'scale(1.4)',
           }}
        />
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence>
            {!isHovered ? (
              <motion.span
                key="english"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.6, ease: EASE_EXPO }}
                style={{
                  position: 'absolute',
                  fontFamily: 'Cormorant, serif',
                  fontSize: '13px',
                  letterSpacing: '0.45em',
                  textTransform: 'uppercase',
                  fontWeight: 300,
                  color: 'var(--text-muted)',
                }}
              >
                TATTVA
              </motion.span>
            ) : (
              <motion.span
                key="sanskrit"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.6, ease: EASE_EXPO }}
                style={{
                  position: 'absolute',
                  fontFamily: 'Cormorant, serif',
                  fontSize: '15px',
                  letterSpacing: '0.45em',
                  fontWeight: 300,
                  color: 'var(--text-primary)',
                }}
              >
                तत्त्व
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <motion.div
           className="absolute bottom-1 left-0 h-[1px]"
           initial={{ width: 0, opacity: 0 }}
           animate={{ width: isHovered ? '100%' : 0, opacity: isHovered ? 1 : 0 }}
           transition={{ duration: 0.6, ease: EASE_EXPO }}
           style={{
             background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.25), transparent)',
             transformOrigin: 'left',
           }}
        />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ARCHIVAL COUNTER
   ──────────────────────────────────────────────────────────────── */
function ArchivalCounter({ index, total }) {
  const currentStr = String(index + 1).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');
  
  return (
    <motion.div 
      variants={fadeInBlur(0.4, 2, 2)}
      className="absolute top-9 right-9 md:top-11 md:right-13 z-20 flex items-baseline gap-[6px]"
    >
      <div className="relative" style={{ width: '18px', height: '18px' }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={currentStr}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.8, ease: EASE_EXPO }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: '"Instrument Serif", serif',
              fontSize: '15px',
              fontStyle: 'italic',
              color: 'var(--text-primary)',
            }}
          >
            {currentStr}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        style={{
          fontFamily: '"Cormorant SC", serif',
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: 'var(--text-faint)',
          transform: 'translateY(-2px)'
        }}
      >
        / {totalStr}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PREMIUM MANUSCRIPT QUOTE ENGINE
   ──────────────────────────────────────────────────────────────── */
const sanskritVariants = {
  enter: { opacity: 0, y: -12, filter: 'blur(8px)' },
  center: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 2, ease: EASE_EXPO, delay: 0 } },
  // Sanskrit exits last
  exit: { opacity: 0, y: -12, filter: 'blur(8px)', transition: { duration: 1.6, ease: EASE_EXPO, delay: 0.6 } },
};

const translitVariants = {
  enter: { opacity: 0, filter: 'blur(4px)' },
  center: { opacity: 1, filter: 'blur(0px)', transition: { duration: 1.6, ease: EASE_EXPO, delay: 0.6 } },
  // Translit exits second
  exit: { opacity: 0, transition: { duration: 1, ease: EASE_EXPO, delay: 0.3 } },
};

const englishVariants = {
  enter: { opacity: 0, y: 8, filter: 'blur(4px)' },
  center: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.6, ease: EASE_EXPO, delay: 1.0 } },
  // English exits first
  exit: { opacity: 0, transition: { duration: 0.8, ease: EASE_EXPO, delay: 0 } },
};

function QuoteEngine() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % QUOTES.length);
    }, 10000); // 10s rotation
    return () => clearInterval(timer);
  }, [isPaused]);

  const quote = QUOTES[currentIndex];

  return (
    <>
      <ArchivalCounter index={currentIndex} total={QUOTES.length} />

      {/* Wrapping container traps the hover pause */}
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
      >
        <AnimatePresence mode="wait">
          <motion.div key={currentIndex} className="flex flex-col">
            
            {/* Gold Divider Line Animation */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.8, delay: 1.0 } }}
              transition={{ duration: 1.8, ease: EASE_EXPO }}
              style={{
                height: '1px',
                width: '3rem',
                background: 'linear-gradient(to right, rgba(212,175,55,0.45), transparent)',
                marginBottom: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                transformOrigin: 'left',
              }}
            />

            {/* Sanskrit */}
            <div style={{ marginBottom: 'clamp(1.6rem, 3vw, 2.8rem)' }}>
              <motion.div variants={sanskritVariants} initial="enter" animate="center" exit="exit" style={{ display: 'block' }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: '"Tiro Devanagari Sanskrit", serif',
                    fontSize: 'clamp(2.4rem, 5vw, 4.8rem)',
                    fontWeight: 400,
                    lineHeight: 1.25,
                    letterSpacing: '0',
                    color: 'var(--text-primary)',
                  }}
                  lang="sa"
                >
                  {quote.sanskrit_l1}
                </span>
                {quote.sanskrit_l2 && (
                  <span
                    style={{
                      display: 'block',
                      fontFamily: '"Tiro Devanagari Sanskrit", serif',
                      fontSize: 'clamp(2.4rem, 5vw, 4.8rem)',
                      fontWeight: 400,
                      lineHeight: 1.25,
                      letterSpacing: '0',
                      paddingLeft: 'clamp(1.8rem, 3.5vw, 3.8rem)',
                      color: 'var(--text-primary)',
                    }}
                    lang="sa"
                  >
                    {quote.sanskrit_l2}
                  </span>
                )}
              </motion.div>
            </div>

            {/* Transliteration */}
            <div style={{ marginBottom: 'clamp(1.2rem, 2.2vw, 2rem)' }}>
              <motion.p
                variants={translitVariants} initial="enter" animate="center" exit="exit"
                lang="sa-Latn"
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: 'clamp(1rem, 1.6vw, 1.25rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  letterSpacing: '0.05em',
                  color: '#C58B52',
                  textShadow: '0 0 12px rgba(197,139,82,0.08)',
                  lineHeight: 1.5,
                }}
              >
                {quote.transliteration}
              </motion.p>
            </div>

            {/* Translation & Source Group */}
            <motion.div variants={englishVariants} initial="enter" animate="center" exit="exit">
              <div style={{ marginBottom: 'clamp(1.4rem, 2.5vw, 2.2rem)' }}>
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: 'clamp(0.78rem, 1.1vw, 0.9rem)',
                    fontWeight: 300,
                    letterSpacing: '0.018em',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                    whiteSpace: 'pre-line',
                    maxWidth: '35ch',
                  }}
                >
                  {quote.translation}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span
                  style={{
                    fontFamily: '"Cormorant SC", serif',
                    fontSize: '10px',
                    fontWeight: 400,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}
                >
                  {quote.source}
                </span>
                <span style={{ color: 'var(--rule)', fontSize: '10px' }}>·</span>
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '11px',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {quote.sourceRef}
                </span>
              </div>
            </motion.div>

          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   TAGLINE
   ──────────────────────────────────────────────────────────────── */
function Tagline() {
  return (
    <motion.p
      variants={fadeUpBlur(1.6, 10, 2)}
      style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: 'clamp(0.72rem, 1vw, 0.82rem)',
        fontWeight: 300,
        letterSpacing: '0.06em',
        color: 'var(--text-muted)',
        maxWidth: '42ch',
        lineHeight: 1.8,
        whiteSpace: 'pre-line',
      }}
    >
      {'A space for reflection,\nwisdom and inquiry.'}
    </motion.p>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SCROLL CUE
   ──────────────────────────────────────────────────────────────── */
function ScrollCue() {
  return (
    <motion.div
      variants={fadeInBlur(2.0, 2, 2)}
      className="absolute bottom-9 left-9 md:bottom-11 md:left-13 z-10 cursor-pointer"
      style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
      whileHover={{ y: 3, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE_EXPO }}
    >
      <div
        style={{
          position: 'relative',
          height: '2.5rem',
          width: '1px',
          background: 'var(--text-muted)',
          opacity: 0.5,
          transition: 'opacity 0.6s',
        }}
        className="group-hover:opacity-100"
      />
      <span
        style={{
          fontFamily: '"General Sans", sans-serif',
          fontSize: '8.5px',
          letterSpacing: '0.34em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          fontWeight: 400,
          transition: 'color 0.6s',
        }}
      >
        Scroll to enter
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   ROOT HERO
   ──────────────────────────────────────────────────────────────── */
export function TattvaHero() {
  const shouldReduce = useReducedMotion();
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduce ? 0 : 0 },
    },
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      aria-label="Tattva — hero introduction"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        backgroundColor: 'var(--background)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <GrainCanvas />
      <Vignette />
      
      <motion.div 
        style={{ y, opacity, width: '100%', height: '100%' }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <AbstractForms />
        <Wordmark />

        <div className="layout-container" style={{ position: 'relative', zIndex: 10 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              alignItems: 'center',
              minHeight: '100svh',
              paddingTop: 'clamp(5rem, 10vw, 8rem)',
              paddingBottom: 'clamp(5rem, 10vw, 8rem)',
            }}
          >
            <div
              style={{
                gridColumn: 'span 12',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(2rem, 4vw, 3.5rem)',
              }}
              className="lg:col-span-7 xl:col-span-6"
            >
              <QuoteEngine />
              <Tagline />
            </div>
          </div>
        </div>

        <ScrollCue />
      </motion.div>
    </section>
  );
}

export default TattvaHero;
