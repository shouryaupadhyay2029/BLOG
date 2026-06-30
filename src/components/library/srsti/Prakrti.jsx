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

/* ─── Faint Balanced Streams Visualizer with Scroll Interaction ── */
function BalancedStreams() {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // At the end of scroll range, start subtle orbital movement to symbolize transition
  const orbitSpeed = useTransform(scrollYProgress, [0.65, 0.9], [0, 1.2]);

  const streamNames = ['Sattva', 'Rajas', 'Tamas'];

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center py-20 relative select-none"
    >
      <div className="relative w-72 h-32 flex justify-around items-center max-w-lg mx-auto">
        {/* Three Parallel Streams (Horizontal) */}
        {[
          { color: 'rgba(96, 165, 250, 0.55)', name: 'Sattva' }, // Sattva (Blue)
          { color: 'rgba(251, 191, 36, 0.65)', name: 'Rajas' },  // Rajas (Gold)
          { color: 'rgba(239, 68, 68, 0.50)', name: 'Tamas' },   // Tamas (Crimson)
        ].map((stream, idx) => {
          return (
            <div
              key={idx}
              className="relative flex flex-col items-center cursor-default group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Suspended glowing node */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  boxShadow: [
                    `0 0 10px ${stream.color}`,
                    `0 0 20px ${stream.color}`,
                    `0 0 10px ${stream.color}`,
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4 + idx,
                  ease: 'easeInOut',
                }}
                style={{
                  backgroundColor: stream.color,
                }}
                className="w-4 h-4 rounded-full"
              />

              {/* Suspended line */}
              <div className="w-[1px] h-12 bg-gradient-to-b from-[#C58B52]/10 via-[#C58B52]/20 to-transparent mt-2" />

              {/* Name tooltip appears on hover */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-10 font-general text-[9px] uppercase tracking-[0.25em] text-[#0D0D0C] font-semibold"
                  >
                    {stream.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
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

/* ─── Interactive Verse Revelation Deck (Bhagavad Gītā 13.20) ── */
function VersePrakrtiDeck() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      label: 'Sanskrit',
      title: 'Bhagavad Gītā — Verse 13.20',
      content: (
        <div className="text-center py-6 md:py-10">
          <p
            className="font-cormorant text-[#0D0D0C] leading-[2.0] font-light"
            style={{ fontSize: 'clamp(20px, 3.2vw, 34px)' }}
          >
            प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि ।
            <br />
            विकारांश्च गुणांश्चैव विद्धि प्रकृतिसम्भवान् ॥
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
            prakṛtiṃ puruṣaṃ caiva viddhy anādī ubhāv api |
            <br />
            vikārāṃś ca guṇāṃś caiva viddhi prakṛti-sambhavān ||
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
              { word: 'prakṛtim', meaning: 'material nature / primordial potential' },
              { word: 'puruṣam', meaning: 'individual soul / consciousness' },
              { word: 'ca', meaning: 'and' },
              { word: 'eva', meaning: 'certainly / indeed' },
              { word: 'viddhi', meaning: 'know / understand' },
              { word: 'anādī', meaning: 'without beginning' },
              { word: 'ubhau', meaning: 'both' },
              { word: 'api', meaning: 'also' },
              { word: 'vikārān', meaning: 'modifications / physical forms' },
              { word: 'ca', meaning: 'and' },
              { word: 'guṇān', meaning: 'the three qualities / attributes' },
              { word: 'ca', meaning: 'and' },
              { word: 'eva', meaning: 'indeed' },
              { word: 'viddhi', meaning: 'know' },
              { word: 'prakṛti-sambhavān', meaning: 'arisen from primordial nature' },
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
            "Know that both material nature (Prakṛti) and spirit (Puruṣa) are without beginning.
            Know also that all physical modifications and the three attributes (Guṇas) arise from material nature."
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
            "Recognize that both Nature and Consciousness are endless and without origin.
            Remember too that all visible forms and the three threads of qualities
            are woven out of Nature itself."
          </p>
          <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52]/60 block mt-3">
            — Bhagavad Gītā 13.19 (or 13.20 in common counting)
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
                layoutId="activeVersePrakrtiTabLine"
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

/* ─── Expandable Comparison Cards ───────────────────────────── */
function PrakrtiComparison() {
  const [activeTab, setActiveTab] = useState(0);

  const perspectives = [
    {
      id: 0,
      name: 'Sāṅkhya',
      tag: 'Scripture / Philosophy',
      desc: 'In Sāṅkhya, Prakṛti (also called Mūla-prakṛti or Pradhāna) is the independent, uncaused, eternal material cause of the universe. It is active but unconscious. Creation occurs when the perfect equilibrium of its three attributes (Guṇas) is disturbed near Puruṣa (consciousness).',
    },
    {
      id: 1,
      name: 'Advaita',
      tag: 'Interpretation',
      desc: 'Advaita Vedānta redefines Prakṛti as Māyā—the dependent, illusory power of Brahman. It is not an independent entity, but a conceptual matrix through which the singular consciousness appears as the diverse material world.',
    },
    {
      id: 2,
      name: 'Viśiṣṭādvaita',
      tag: 'Later commentary',
      desc: 'Qualified non-dualism explains Prakṛti as a real entity, but treats it as the body or instrument of the supreme Lord (Īśvara). It is dependent on Him and changes its modes under His conscious guidance during the cosmic cycle.',
    },
    {
      id: 3,
      name: 'Dvaita',
      tag: 'Later commentary',
      desc: 'Dualist Vedānta treats Prakṛti as a real, eternal material substance that is completely distinct from individual souls and God. It acts as the clay that God shapes into the universe, serving as the passive material cause under His active agency.',
    },
    {
      id: 4,
      name: 'Modern Academic',
      tag: 'Academic perspective',
      desc: 'Scholars point out that the conceptualization of Prakṛti represents a move towards structural evolutionary models. It explains the diversity of the universe from a single underlying substance, prefiguring modern conservation laws and cosmological models.',
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
function MythVsScriptureFive() {
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
              "Prakṛti is just another word for regular nature."
            </p>
          </div>
          
          <div className="md:col-span-1">
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] block">
              Verdict
            </span>
            <span className="inline-block mt-2 px-3 py-1 border border-[#C58B52]/30 bg-[#C58B52]/5 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]">
              Partially Supported
            </span>
          </div>

          <div className="md:col-span-2 border-l border-[#C58B52]/10 pl-4 md:pl-6">
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#0D0D0C]/45 block">
              Explanation
            </span>
            <p className="font-cormorant text-base text-[#0D0D0C]/75 leading-relaxed mt-1">
              While colloquially used to mean the physical environment (trees, forests, mountains), in philosophical systems Prakṛti has a precise metaphysical definition: it refers to the unmanifest material cause of the universe—the root potential containing the three Guṇas in perfect balance.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Main Section Export ───────────────────────────────────── */
export function Prakrti() {
  return (
    <div className="relative w-full bg-[#E9E2D4] pt-12">
      
      {/* ══════════════════════════════════════════════
          VI.1  OPENING HERO
      ══════════════════════════════════════════════ */}
      <section className="w-full min-h-[45vh] flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <h2
            className="font-cormorant text-[#0D0D0C] leading-none mb-4 select-none"
            style={{ fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 300 }}
          >
            Prakṛti
          </h2>
          <p className="font-instrument italic text-xl md:text-2xl text-[#C58B52] tracking-wide">
            The Silent Potential of Creation
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VI.2  BALANCED STREAMS VISUALIZATION
      ══════════════════════════════════════════════ */}
      <BalancedStreams />

      {/* ══════════════════════════════════════════════
          VI.3  NARRATIVE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <span className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52] mb-4 block">
            SECTION VI
          </span>
          <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-[#0D0D0C]/75 mb-6">
            Imagine a perfectly calm lake.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            No ripples. No wind. No movement. The water is deep, holding inside itself endless possibilities—waves, currents, reflection. Yet, for now, nothing has begun.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            Many Hindu philosophical systems describe the primordial state of creation in exactly this way. It is not empty space, and it is not chaotic movement. It is a state of absolute, perfect balance.
          </p>
          <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C] italic">
            This balance is called Prakṛti—unmanifest potential.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VI.4  SCRIPTURAL FOUNDATION (Bhagavad Gita)
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <VersePrakrtiDeck />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VI.5  EDITORIAL EXPLANATION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-4">The Unmanifest Matrix</h4>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed mb-6">
            Prakṛti is not yet the physical universe. It is the unmanifest root (*Mūla-prakṛti*) that precedes all manifest objects. Within it, the three fundamental attributes—Sattva, Rajas, and Tamas—exist in perfect equilibrium. As long as this balance is maintained, there is stillness.
          </p>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed">
            Different traditions (Sāṅkhya, Advaita, Viśiṣṭādvaita, Dvaita) explain how this balance is disrupted to initiate the evolution of physical matter, highlighting distinct relationships between material nature and consciousness.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VI.6  INTERACTIVE COMPARISON
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <PrakrtiComparison />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VI.7  THINK ABOUT IT REFLECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <div className="border-l border-[#C58B52]/30 pl-6 my-6">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
              Contemplative Inquiry
            </span>
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C] leading-relaxed italic mb-4">
              Can perfect stillness contain infinite possibility?
            </p>
            <p className="font-cormorant text-base text-[#0D0D0C]/60 leading-relaxed">
              If the seed contains the tree, stillness is not empty—it is dense with potential. In Prakṛti, creation is not made from nothing; it is simply allowed to emerge from stillness.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VI.8  MYTH VS SCRIPTURE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <MythVsScriptureFive />
      </section>

      {/* ══════════════════════════════════════════════
          VI.9  TRANSITION TO NEXT SECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full border-t border-[#C58B52]/10 py-24 flex flex-col items-center text-center px-6">
        <Reveal className="max-w-2xl" y={12}>
          <p
            className="font-instrument text-[#0D0D0C]/55 leading-snug mb-2"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            The silent equilibrium of nature begins to stir…
          </p>
          <p
            className="font-instrument text-[#0D0D0C] leading-snug"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            the three suspended threads begin their cosmic dance.
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

        {/* "The Three Guṇas" teaser */}
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
            The Three Guṇas
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
