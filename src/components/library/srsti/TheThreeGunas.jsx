import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1];
const EASE_SOFT = [0.25, 0.46, 0.45, 0.94];

function Reveal({ children, delay = 0, y = 16, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 1.2, delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Scroll-Linked Equilibrium Break Visualizer ─────────────── */
function GunasOpeningVisual() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Faint parallel nodes (perfect balance) initially,
  // then they begin to shift and rotate around each other as you scroll
  const shiftSattvaY = useTransform(scrollYProgress, [0.2, 0.6], [0, -40]);
  const shiftRajasX = useTransform(scrollYProgress, [0.2, 0.6], [0, 45]);
  const shiftTamasY = useTransform(scrollYProgress, [0.2, 0.6], [0, 30]);
  const lineOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0.25]);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center py-20 relative select-none"
    >
      <div className="relative w-72 h-56 flex items-center justify-center">
        {/* Connecting lines between the nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <motion.line
            x1="96" y1="112" x2="240" y2="112"
            stroke="rgba(197, 139, 82, 0.25)"
            strokeWidth="1"
            style={{ opacity: lineOpacity }}
          />
        </svg>

        {/* Sattva node */}
        <motion.div
          style={{ y: shiftSattvaY }}
          className="absolute left-8 w-6 h-6 rounded-full bg-blue-400/40 border border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.4)] flex items-center justify-center z-10"
        >
          <span className="font-general text-[7px] text-[#0D0D0C]/80 mt-8 font-semibold">Sattva</span>
        </motion.div>

        {/* Rajas node */}
        <motion.div
          style={{ x: shiftRajasX }}
          className="absolute w-6 h-6 rounded-full bg-amber-400/50 border border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)] flex items-center justify-center z-10"
        >
          <span className="font-general text-[7px] text-[#0D0D0C]/80 mt-8 font-semibold">Rajas</span>
        </motion.div>

        {/* Tamas node */}
        <motion.div
          style={{ y: shiftTamasY }}
          className="absolute right-8 w-6 h-6 rounded-full bg-red-500/40 border border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)] flex items-center justify-center z-10"
        >
          <span className="font-general text-[7px] text-[#0D0D0C]/80 mt-8 font-semibold">Tamas</span>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Interactive Guṇa Hover Experiment Playground ──────────── */
function GunasPlayground() {
  const [activeHover, setActiveHover] = useState(null);

  // Dynamic values based on hover state
  const getAmbientBg = () => {
    if (activeHover === 'Sattva') return 'rgba(255, 255, 255, 0.4)';
    if (activeHover === 'Rajas') return 'rgba(197, 139, 82, 0.05)';
    if (activeHover === 'Tamas') return 'rgba(5, 5, 4, 0.15)';
    return 'transparent';
  };

  return (
    <div
      style={{ backgroundColor: getAmbientBg() }}
      className="border border-[#C58B52]/20 p-6 md:p-10 transition-colors duration-700 relative overflow-hidden"
    >
      {/* Dynamic movement layer for Rajas */}
      <AnimatePresence>
        {activeHover === 'Rajas' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C58B52]/40 to-transparent animate-pulse" />
            <div className="absolute top-2/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C58B52]/60 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C58B52]/40 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
          </motion.div>
        )}
      </AnimatePresence>

      <span className="font-general text-[8px] uppercase tracking-[0.4em] text-[#C58B52]/50 block text-center mb-6">
        Guṇa Playground (Hover cards to experiment)
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {/* Sattva Card */}
        <div
          onMouseEnter={() => setActiveHover('Sattva')}
          onMouseLeave={() => setActiveHover(null)}
          className={`border p-6 transition-all duration-500 cursor-default flex flex-col justify-between min-h-[220px] ${
            activeHover === 'Sattva'
              ? 'border-blue-400/40 bg-white/70 shadow-[0_0_20px_rgba(96,165,250,0.15)]'
              : 'border-[#0D0D0C]/10 bg-white/20'
          }`}
        >
          <div>
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-blue-500 block mb-2">
              Sattva (सत्त्व)
            </span>
            <h5 className="font-instrument text-lg text-[#0D0D0C] mb-3">Clarity & Harmony</h5>
            <p className="font-cormorant text-base text-[#0D0D0C]/75 leading-relaxed">
              Responsible for knowledge, equilibrium, truth, and illumination. It is the quality that allows light to shine through, creating consciousness, intelligibility, and peace.
            </p>
          </div>
          <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#0D0D0C]/40">
            Ontological thread: Illumination
          </span>
        </div>

        {/* Rajas Card */}
        <div
          onMouseEnter={() => setActiveHover('Rajas')}
          onMouseLeave={() => setActiveHover(null)}
          className={`border p-6 transition-all duration-500 cursor-default flex flex-col justify-between min-h-[220px] ${
            activeHover === 'Rajas'
              ? 'border-amber-400/40 bg-white/70 shadow-[0_0_20px_rgba(251,191,36,0.15)]'
              : 'border-[#0D0D0C]/10 bg-white/20'
          }`}
        >
          <div>
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-amber-600 block mb-2">
              Rajas (रजस)
            </span>
            <h5 className="font-instrument text-lg text-[#0D0D0C] mb-3">Energy & Action</h5>
            <p className="font-cormorant text-base text-[#0D0D0C]/75 leading-relaxed">
              The quality of movement, passion, transformation, and activity. It is the kinetic force that drives evolution—without Rajas, Sattva and Tamas remain inert.
            </p>
          </div>
          <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#0D0D0C]/40">
            Ontological thread: Kinetic Drive
          </span>
        </div>

        {/* Tamas Card */}
        <div
          onMouseEnter={() => setActiveHover('Tamas')}
          onMouseLeave={() => setActiveHover(null)}
          className={`border p-6 transition-all duration-500 cursor-default flex flex-col justify-between min-h-[220px] ${
            activeHover === 'Tamas'
              ? 'border-red-400/40 bg-white/70 shadow-[0_0_20px_rgba(239,68,68,0.15)]'
              : 'border-[#0D0D0C]/10 bg-white/20'
          }`}
        >
          <div>
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-red-500 block mb-2">
              Tamas (तमस)
            </span>
            <h5 className="font-instrument text-lg text-[#0D0D0C] mb-3">Inertia & Structure</h5>
            <p className="font-cormorant text-base text-[#0D0D0C]/75 leading-relaxed">
              Provides resistance, stability, mass, and form. It is the heavy materializing force that allows potential to freeze into physical objects, offering stability and gravity.
            </p>
          </div>
          <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#0D0D0C]/40">
            Ontological thread: Materialization
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Word-by-word chip ──────────────────────────────────────── */
function WordChip({ word, meaning }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative inline-flex flex-col items-center cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="font-cormorant text-lg md:text-xl text-[#0D0D0C] italic px-1">
        {word}
      </span>
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full mt-2 z-10 font-general text-[9px] uppercase tracking-[0.25em] text-white bg-[#0D0D0C] px-3 py-1.5 whitespace-nowrap shadow-lg"
          >
            {meaning}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Interactive Verse Revelation Deck (BG 14.5) ────────────── */
function VerseGunasDeck() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      label: 'Sanskrit',
      title: 'Bhagavad Gītā — Verse 14.5',
      content: (
        <div className="text-center py-6 md:py-10">
          <p
            className="font-cormorant text-[#0D0D0C] leading-[2.0] font-light"
            style={{ fontSize: 'clamp(20px, 3.2vw, 34px)' }}
          >
            सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः ।
            <br />
            निबध्नन्ति महाबाहो देहे देहिनमव्ययम् ॥
          </p>
        </div>
      ),
    },
    {
      id: 1,
      label: 'Transliteration',
      title: 'IAST Transliteration',
      content: (
        <div className="text-center py-6 md:py-10">
          <p
            className="font-cormorant italic text-[#0D0D0C]/80 leading-[2.2] font-light"
            style={{ fontSize: 'clamp(15px, 2.0vw, 20px)' }}
          >
            sattvaṃ rajas tama iti guṇāḥ prakṛti-sambhavāḥ |
            <br />
            nibadhnanti mahā-bāho dehe dehinam avyayam ||
          </p>
        </div>
      ),
    },
    {
      id: 2,
      label: 'Word by Word',
      title: 'Term Analysis (Hover for meaning)',
      content: (
        <div className="py-4 max-w-2xl mx-auto">
          <div className="flex flex-wrap gap-x-3 gap-y-3 justify-center">
            {[
              { word: 'sattvam', meaning: 'sattva / purity / light' },
              { word: 'rajaḥ', meaning: 'rajas / passion / action' },
              { word: 'tamaḥ', meaning: 'tamas / inertia / darkness' },
              { word: 'iti', meaning: 'thus / these' },
              { word: 'guṇāḥ', meaning: 'the attributes / qualities' },
              { word: 'prakṛti-sambhavāḥ', meaning: 'born of material nature' },
              { word: 'nibadhnanti', meaning: 'bind / tie down' },
              { word: 'mahā-bāho', meaning: 'O mighty-armed one (Arjuna)' },
              { word: 'dehe', meaning: 'in the body' },
              { word: 'dehinam', meaning: 'the embodied soul' },
              { word: 'avyayam', meaning: 'imperishable / immutable' },
            ].map((w, i) => (
              <WordChip key={i} word={w.word} meaning={w.meaning} />
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 3,
      label: 'Literal Translation',
      title: 'Word-for-Word Literal Prose',
      content: (
        <div className="text-center py-6 md:py-10 max-w-2xl mx-auto">
          <p className="font-cormorant text-lg md:text-xl font-light text-[#0D0D0C]/80 leading-relaxed italic">
            "Sattva, Rajas, and Tamas—these three attributes born of material nature (Prakṛti)—bind
            the imperishable embodied soul within the body, O mighty-armed one."
          </p>
        </div>
      ),
    },
    {
      id: 4,
      label: 'Literary Translation',
      title: 'TATTVA Literary Rendition',
      content: (
        <div className="py-6 max-w-2xl mx-auto border-l border-[#C58B52]/30 pl-6 md:pl-8">
          <p
            className="font-cormorant font-light text-[#0D0D0C] leading-relaxed"
            style={{ fontSize: 'clamp(18px, 2.4vw, 26px)' }}
          >
            "Sattva, Rajas, and Tamas are the three qualities born of Nature.
            They bind the eternal conscious observer within the boundaries of physical form."
          </p>
          <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52]/60 block mt-3">
            — Bhagavad Gītā 14.5
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="border border-[#C58B52]/20 bg-white/30 p-6 md:p-10 relative flex flex-col min-h-[400px] justify-between">
      {/* Step Navigation Headers */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center border-b border-[#C58B52]/10 pb-4 mb-6">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`font-general text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative py-1 ${
              activeStep === step.id
                ? 'text-[#C58B52]'
                : 'text-[#0D0D0C]/40 hover:text-[#0D0D0C]/70'
            }`}
          >
            {step.label}
            {activeStep === step.id && (
              <motion.div
                layoutId="activeVerseGunasTabLine"
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C58B52]"
                transition={{ duration: 0.4, ease: EASE_EXPO }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content Viewer with animation */}
      <div className="flex-1 flex flex-col justify-center my-2">
        <span className="font-general text-[8px] uppercase tracking-[0.4em] text-[#C58B52]/50 block text-center mb-4">
          {steps[activeStep].title}
        </span>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE_EXPO }}
            className="w-full"
          >
            {steps[activeStep].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stepper Footer Action */}
      <div className="flex justify-between items-center border-t border-[#C58B52]/10 pt-4 mt-4">
        <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#0D0D0C]/35">
          Layer {activeStep + 1} of 5
        </span>
        <button
          onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
          className="font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52] hover:text-[#0D0D0C] transition-colors flex items-center gap-2 group"
        >
          {activeStep === 4 ? 'Return to Sanskrit' : 'Next Layer'}
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>
    </div>
  );
}

/* ─── Interactive Comparison Panel ──────────────────────────── */
function GunasComparison() {
  const [activeTab, setActiveTab] = useState(0);

  const perspectives = [
    {
      id: 0,
      name: 'Sāṅkhya',
      tag: 'Classical philosophy',
      desc: 'In Sāṅkhya, the Guṇas are the actual constituent components of Prakṛti. They are real material substances that exist in equal weight during dissolution (Pralaya). Creation begins when this balance is disturbed.',
    },
    {
      id: 1,
      name: 'Yoga',
      tag: 'Classical philosophy',
      desc: 'Classical Yoga treats the Guṇas as states of mind (Chitta-bhūmis) reflecting our spiritual state. Realizing Puruṣa requires refining the mind so Sattva dominates over Rajas and Tamas, ultimately leading to pure liberation.',
    },
    {
      id: 2,
      name: 'Advaita',
      tag: 'Later commentary',
      desc: 'Advaita Vedānta regards the Guṇas as qualities that belong strictly to the level of Māyā (relative reality). They define the empirical world, but are completely absent in the absolute reality of Brahman (Nirguṇa).',
    },
    {
      id: 3,
      name: 'Viśiṣṭādvaita',
      tag: 'Later commentary',
      desc: 'Qualified non-dualism describes the Guṇas as attributes of material nature (Acit) that are under the control of Lord Nārāyaṇa. They serve as the clay that He shapes to provide bodies and environments for individual souls.',
    },
    {
      id: 4,
      name: 'Dvaita',
      tag: 'Later commentary',
      desc: 'Dualistic philosophy treats the Guṇas as eternal material attributes that are distinct from both individual souls and God. The Lord uses the Guṇas as the material basis to build the physical cosmos, while remaining completely transcendent.',
    },
  ];

  return (
    <div className="w-full my-8">
      {/* Tab Selectors */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        {perspectives.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveTab(p.id)}
            className={`px-4 py-3 border text-left transition-all duration-300 flex flex-col justify-between min-h-[72px] ${
              activeTab === p.id
                ? 'border-[#C58B52] bg-[#C58B52]/5'
                : 'border-[#0D0D0C]/10 bg-white/20 hover:border-[#0D0D0C]/30'
            }`}
          >
            <span
              className={`font-general text-[8px] uppercase tracking-[0.2em] ${
                activeTab === p.id ? 'text-[#C58B52]' : 'text-[#0D0D0C]/40'
              }`}
            >
              {p.tag}
            </span>
            <span className="font-instrument text-xs text-[#0D0D0C] font-medium leading-tight">
              {p.name}
            </span>
          </button>
        ))}
      </div>

      {/* Detail Card */}
      <div className="border border-[#C58B52]/20 bg-white/30 p-6 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 6 }}
            transition={{ duration: 0.3, ease: EASE_EXPO }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="font-general text-[9px] uppercase tracking-[0.25em] text-[#C58B52] font-semibold">
                {perspectives[activeTab].tag}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#C58B52]/40" />
              <span className="font-general text-[10px] uppercase tracking-[0.15em] text-[#0D0D0C]/60">
                {perspectives[activeTab].name}
              </span>
            </div>
            <p className="font-cormorant text-lg md:text-xl text-[#0D0D0C]/80 leading-relaxed font-light">
              {perspectives[activeTab].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Myth vs Scripture Card ─────────────────────────────────── */
function MythVsScriptureSix() {
  return (
    <Reveal className="my-8">
      <div className="border border-[#C58B52]/30 bg-[#C58B52]/4 p-8 relative" style={{ background: 'rgba(197,139,82,0.04)' }}>
        {/* Decorative corner */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C58B52]/50" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C58B52]/50" />

        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block">
          MYTH VS SCRIPTURE
        </span>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
          <div className="md:col-span-1">
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#0D0D0C]/45 block">
              Common Claim
            </span>
            <p className="font-instrument text-lg text-[#0D0D0C] font-semibold mt-1">
              "Sattva is good, Rajas is bad, and Tamas is evil."
            </p>
          </div>
          
          <div className="md:col-span-1">
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] block">
              Verdict
            </span>
            <span className="inline-block mt-2 px-3 py-1 border border-[#C58B52]/30 bg-[#C58B52]/5 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]">
              Not Supported
            </span>
          </div>

          <div className="md:col-span-2 border-l border-[#C58B52]/10 pl-4 md:pl-6">
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#0D0D0C]/45 block">
              Explanation
            </span>
            <p className="font-cormorant text-base text-[#0D0D0C]/75 leading-relaxed mt-1">
              The Guṇas are not moral categories, but ontological principles. Creation requires all three: without Tamas nothing could take stable physical form; without Rajas nothing could move or transform; without Sattva nothing could be consciously observed or understood.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Main Section Export ───────────────────────────────────── */
export function TheThreeGunas() {
  return (
    <div className="relative w-full bg-[#E9E2D4] pt-12">
      
      {/* ══════════════════════════════════════════════
          VII.1  OPENING HERO
      ══════════════════════════════════════════════ */}
      <section className="w-full min-h-[45vh] flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <h2
            className="font-cormorant text-[#0D0D0C] leading-none mb-4 select-none"
            style={{ fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 300 }}
          >
            The Three Guṇas
          </h2>
          <p className="font-instrument italic text-xl md:text-2xl text-[#C58B52] tracking-wide">
            The Forces That Set Creation in Motion
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VII.2  EQUILIBRIUM BREAK SHIFT VISUAL
      ══════════════════════════════════════════════ */}
      <GunasOpeningVisual />

      {/* ══════════════════════════════════════════════
          VII.3  NARRATIVE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <span className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52] mb-4 block">
            SECTION VII
          </span>
          <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-[#0D0D0C]/75 mb-6">
            Imagine a perfectly balanced mobile sculpture.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            Every piece hangs in complete harmony. Touch one tiny part, and the entire structure begins moving in complex, shifting patterns.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            Many Hindu traditions describe the start of creation in exactly this way. The universe does not begin because something appears from nowhere. It begins because the perfect, silent equilibrium of Prakṛti gives way to a dynamic, evolving balance of three fundamental tendencies: the Guṇas.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VII.4  HOVER EXPERIMENT PLAYGROUND
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <GunasPlayground />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VII.5  SCRIPTURAL FOUNDATION (Verse Deck)
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <VerseGunasDeck />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VII.6  COMPARISON PANEL
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <GunasComparison />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VII.7  THINK ABOUT IT REFLECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <div className="border-l border-[#C58B52]/30 pl-6 my-6">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
              Contemplative Inquiry
            </span>
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C] leading-relaxed italic mb-4">
              If the entire universe is woven from three fundamental tendencies... might they also be operating within our own minds?
            </p>
            <p className="font-cormorant text-base text-[#0D0D0C]/60 leading-relaxed">
              Vedic psychology suggests that our thoughts, moods, and actions are shaped by the same three forces that build stars and shape galaxies. The cosmos outside and the consciousness inside are governed by the same code.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VII.8  MYTH VS SCRIPTURE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <MythVsScriptureSix />
      </section>

      {/* ══════════════════════════════════════════════
          VII.9  TRANSITION TO NEXT SECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full border-t border-[#C58B52]/10 py-24 flex flex-col items-center text-center px-6">
        <Reveal className="max-w-2xl" y={12}>
          <p
            className="font-instrument text-[#0D0D0C]/55 leading-snug mb-2"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            As the three threads continue their dance, patterns emerge…
          </p>
          <p
            className="font-instrument text-[#0D0D0C] leading-snug"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            forming the first layer of cosmic intelligence.
          </p>
        </Reveal>

        {/* Silence gap */}
        <div className="h-12" />

        {/* Gold line extending downward */}
        <motion.div
          className="w-px bg-gradient-to-b from-[#C58B52]/50 to-[#C58B52]/5"
          initial={{ height: 0 }}
          whileInView={{ height: 80 }}
          viewport={{ once: true, margin: '-5%' }}
          transition={{ duration: 1.6, ease: EASE_EXPO }}
        />

        {/* "Mahat" teaser */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-5%' }}
          transition={{ duration: 1.4, delay: 0.4, ease: EASE_EXPO }}
          className="flex flex-col items-center gap-3 mt-8"
        >
          <span className="font-general text-[9px] uppercase tracking-[0.45em] text-[#0D0D0C]/20">
            Coming next
          </span>
          <h3
            className="font-instrument text-[#0D0D0C]/35"
            style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}
          >
            Mahat
          </h3>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="text-[#C58B52]/35 text-lg"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
