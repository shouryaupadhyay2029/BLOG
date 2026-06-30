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

/* ─── Animated Circular Visualization: The Great Cycle ───────── */
function TheGreatCycleVisual() {
  const steps = [
    { label: 'Sṛṣṭi', phase: 'Creation', angle: 0 },
    { label: 'Sthiti', phase: 'Existence', angle: 72 },
    { label: 'Pariṇāma', phase: 'Transformation', angle: 144 },
    { label: 'Laya', phase: 'Dissolution', angle: 216 },
    { label: 'Śūnyatā', phase: 'Stillness', angle: 288 },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-16 relative select-none">
      <span className="font-general text-[8px] uppercase tracking-[0.4em] text-[#C58B52]/50 block text-center mb-12">
        The Great Cycle (The Eternal Breath of Cosmos)
      </span>

      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Orbit Path Circle */}
        <div className="absolute inset-0 rounded-full border border-[#C58B52]/10 pointer-events-none" />

        {/* Slow Pulsing Core Indicator */}
        <motion.div
          animate={{
            scale: [0.92, 1.08, 0.92],
            opacity: [0.25, 0.55, 0.25],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'easeInOut',
          }}
          className="w-24 h-24 rounded-full bg-[#C58B52]/5 absolute z-0 pointer-events-none flex items-center justify-center"
        >
          <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#C58B52]/40">Kāla</span>
        </motion.div>

        {/* Rotating Pointer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <div className="w-2 h-2 rounded-full bg-[#C58B52] absolute left-1/2 transform -translate-x-1/2 -top-1 shadow-[0_0_8px_#C58B52]" />
        </motion.div>

        {/* Labels at angles */}
        {steps.map((s, idx) => {
          const rad = (s.angle * Math.PI) / 180;
          const radius = 100; // px distance from center
          const x = radius * Math.sin(rad);
          const y = -radius * Math.cos(rad);

          return (
            <div
              key={idx}
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 text-center"
            >
              <span className="font-instrument text-xs md:text-sm text-[#0D0D0C] font-semibold">
                {s.label}
              </span>
              <span className="font-general text-[7px] uppercase tracking-wider text-[#0D0D0C]/40">
                {s.phase}
              </span>
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

/* ─── Interactive Verse Revelation Deck (BG 8.18) ────────────── */
function VerseRepeatsDeck() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      label: 'Sanskrit',
      title: 'Bhagavad Gītā — Verse 8.18',
      content: (
        <div className="text-center py-6 md:py-10">
          <p
            className="font-cormorant text-[#0D0D0C] leading-[2.0] font-light"
            style={{ fontSize: 'clamp(20px, 3.2vw, 34px)' }}
          >
            अव्यक्ताद्व्यक्तयः सर्वाः प्रभवन्त्यहरागमे ।
            <br />
            रात्र्यागमे प्रलीयन्ते तत्रैवाव्यक्तसञ्ज्ञके ॥
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
            avyaktād vyaktayaḥ sarvāḥ prabhavanty ahar-āgame |
            <br />
            rātry-āgame pralīyante tatraivāvyakta-saṃjñake ||
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
              { word: 'avyaktāt', meaning: 'from the unmanifest' },
              { word: 'vyaktayaḥ', meaning: 'manifest beings / forms' },
              { word: 'sarvāḥ', meaning: 'all' },
              { word: 'prabhavanti', meaning: 'emerge / arise' },
              { word: 'ahaḥ-āgame', meaning: 'at the dawn of day (of Brahmā)' },
              { word: 'rātri-āgame', meaning: 'at the arrival of night' },
              { word: 'pralīyante', meaning: 'merge / dissolve' },
              { word: 'tatra eva', meaning: 'into that very same' },
              { word: 'avyakta-saṃjñake', meaning: 'which is named the unmanifest' },
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
            "With the arrival of day, all manifest things emerge from the unmanifest.
            With the arrival of night, they dissolve back into that very state called the unmanifest."
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
            "At the dawn of the cosmic Day, all physical forms emerge from the unmanifest void.
            When the cosmic Night falls, they dissolve back into the silence of the unmanifest source."
          </p>
          <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52]/60 block mt-3">
            — Bhagavad Gītā 8.18
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
                layoutId="activeVerseRepeatsTabLine"
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

/* ─── Expandable Explanation Cards ──────────────────────────── */
function ComparisonExplainer() {
  const [activeTab, setActiveTab] = useState(0);

  const perspectives = [
    {
      id: 0,
      name: 'Vedāntic View',
      tag: 'Traditional Interpretation',
      desc: 'Vedānta focuses on the concept of Līlā (divine play). Creation is not driven by necessity or lack, but represents the spontaneous, joyful overflow of the absolute Brahman. The cyclic rhythm represents the natural respiration of absolute consciousness.',
    },
    {
      id: 1,
      name: 'Sāṅkhya Inference',
      tag: 'Classical Philosophy',
      desc: 'Sāṅkhya explains the cycle through the preservation of conservation laws. The material cause (Prakṛti) constantly transitions between unmanifest equilibrium (Sāmyāvasthā) and manifest differentiation (Vaikṛta), driven by Puruṣa\'s presence.',
    },
    {
      id: 2,
      name: 'Purāṇic Sequencing',
      tag: 'Explicit Scripture',
      desc: 'The Purāṇas map cyclical creation to the breathing cycle of Mahāviṣṇu and the lifespan of Brahmā (consisting of Kalpas and Pralayas). It answers the "why" by detailing a nested structure of recurring epochs to facilitate soul development.',
    },
  ];

  return (
    <div className="w-full my-8">
      {/* Tab Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
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
function MythVsScriptureTen() {
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
              "Hinduism teaches that creation happened only once."
            </p>
          </div>
          
          <div className="md:col-span-1">
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] block">
              Verdict
            </span>
            <span className="inline-block mt-2 px-3 py-1 border border-[#C58B52]/30 bg-[#C58B52]/5 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]">
              Contradicted
            </span>
          </div>

          <div className="md:col-span-2 border-l border-[#C58B52]/10 pl-4 md:pl-6">
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#0D0D0C]/45 block">
              Explanation
            </span>
            <p className="font-cormorant text-base text-[#0D0D0C]/75 leading-relaxed mt-1">
              All major scriptural texts (Vedas, Bhagavad Gītā, Purāṇas) describe creation as a repeating, eternal cycle. The cosmos is periodically projected, sustained, and then dissolved (*Pralaya*) back into an unmanifest rest phase, followed by a new manifestation.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Connecting the Libraries Panel ────────────────────────── */
function ContinueJourneyCards() {
  const cards = [
    {
      tag: 'Library Volume I',
      title: 'Time in Sanātana Dharma',
      desc: 'Understanding when creation unfolds—exploring the immense, repeating epochs, Kalpas, and yugas.',
      link: '/library/time',
    },
    {
      tag: 'Library Volume II',
      title: 'Structure of the Universe',
      desc: 'Understanding what creation looks like—mapping the geometry, layers, and multi-dimensional lokas.',
      link: '/library/structure',
    },
    {
      tag: 'Library Volume IV',
      title: 'Pralaya (Coming Next)',
      desc: 'Understanding how creation returns to the unmanifest void, completing the breath of the absolute.',
      link: '#',
    },
  ];

  return (
    <div className="w-full my-12 border-t border-[#C58B52]/15 pt-12">
      <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#C58B52] block mb-8 text-center">
        Continue the Journey
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div
            key={i}
            className="border border-[#C58B52]/20 bg-white/20 p-6 flex flex-col justify-between min-h-[200px]"
          >
            <div>
              <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
                {c.tag}
              </span>
              <h4 className="font-instrument text-lg text-[#0D0D0C] font-semibold mb-2">
                {c.title}
              </h4>
              <p className="font-cormorant text-sm text-[#0D0D0C]/70 leading-relaxed font-light">
                {c.desc}
              </p>
            </div>
            {c.link !== '#' ? (
              <span className="font-general text-[8px] uppercase tracking-wider text-[#C58B52] mt-4 block">
                Read Volume →
              </span>
            ) : (
              <span className="font-general text-[8px] uppercase tracking-wider text-[#0D0D0C]/35 mt-4 block">
                Future volume
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Final Fade To Silence Visualizer (Mirroring Hero) ──────── */
function FadeToSilenceVisual() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  // Fade from cream paper background down to absolute black void
  const voidBgOpacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 0.95]);

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[45vh] flex flex-col items-center justify-center text-center relative py-16 overflow-hidden"
    >
      {/* Black void backdrop growing on scroll */}
      <motion.div
        style={{ opacity: voidBgOpacity }}
        className="absolute inset-0 bg-[#050504] z-0 pointer-events-none"
      />
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2280%22_height=%2280%22><filter_id=%22f%22><feTurbulence_type=%22fractalNoise%22_baseFrequency=%220.6%22_numOctaves=%223%22_stitchTiles=%22stitch%22/></filter><rect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23f)%22/></svg>')] z-0 pointer-events-none" />

      <div className="max-w-2xl px-6 relative z-10">
        <motion.p
          style={{
            color: useTransform(scrollYProgress, [0.1, 0.8], ['#0D0D0C', '#E9E2D4']),
          }}
          className="font-instrument italic text-xl md:text-2xl leading-relaxed mb-4"
        >
          "One breath completes, returning all things to stillness..."
        </motion.p>
        <motion.p
          style={{
            color: useTransform(scrollYProgress, [0.1, 0.8], ['rgba(13,13,12,0.5)', 'rgba(233,226,212,0.4)']),
          }}
          className="font-general text-[9px] uppercase tracking-[0.45em]"
        >
          Waiting for the next dawn
        </motion.p>
      </div>
    </div>
  );
}

/* ─── Main Section Export ───────────────────────────────────── */
export function WhyCreationRepeats() {
  return (
    <div className="relative w-full bg-[#E9E2D4] pt-12">
      
      {/* ══════════════════════════════════════════════
          XI.1  OPENING HERO
      ══════════════════════════════════════════════ */}
      <section className="w-full min-h-[45vh] flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <h2
            className="font-cormorant text-[#0D0D0C] leading-none mb-4 select-none"
            style={{ fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 300 }}
          >
            Why Does Creation Repeat?
          </h2>
          <p className="font-instrument italic text-xl md:text-2xl text-[#C58B52] tracking-wide">
            Creation is not a single event. It is an eternal rhythm.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XI.2  THE GREAT CYCLE VISUAL
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <TheGreatCycleVisual />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XI.3  NARRATIVE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <span className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52] mb-4 block">
            SECTION XI
          </span>
          <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-[#0D0D0C]/75 mb-6">
            Imagine standing beside the ocean.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            A wave rises, reaches its peak, and disappears back into the water. Moments later, another wave rises. The ocean has not ended—only one localized wave has.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            Many Hindu scriptures describe the universe in exactly this way. Universes arise, universes dissolve, and universes arise again in an eternal rhythm. There is no absolute beginning and no final end.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XI.4  SCRIPTURAL FOUNDATION (Verse Deck)
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <VerseRepeatsDeck />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XI.5  EDITORIAL EXPLANATION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-4">The Purpose of the Rhythm</h4>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed mb-6">
            Cyclical creation maps how the manifest universe mirrors the basic rhythms of nature. Day becomes night, winter becomes spring, inhalation becomes exhalation. Sages inferred that the universe itself operates on this same breathing rhythm.
          </p>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed">
            Different traditions explain the ultimate "why" behind this cycle, ranging from Sāṅkhya's equilibrium transitions to Vedāntic descriptions of divine play (*Līlā*), ensuring that souls have infinite opportunities for evolution.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XI.6  COMPARISON PANEL
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <ComparisonExplainer />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XI.7  THINK ABOUT IT REFLECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <div className="border-l border-[#C58B52]/30 pl-6 my-6">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
              Contemplative Inquiry
            </span>
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C] leading-relaxed italic mb-4">
              If creation is a cycle rather than a one-time event... how should that change the way we think about beginnings and endings?
            </p>
            <p className="font-cormorant text-base text-[#0D0D0C]/60 leading-relaxed">
              If endings are simply potential returning to rest before a new beginning, fear of destruction dissolves into trust in the rhythm.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XI.8  MYTH VS SCRIPTURE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <MythVsScriptureTen />
      </section>

      {/* ══════════════════════════════════════════════
          XI.9  CROSS-LIBRARY LINKS
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <ContinueJourneyCards />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XI.10 FINAL FADE TO SILENCE (BACK TO HERO VOID)
      ══════════════════════════════════════════════ */}
      <FadeToSilenceVisual />

    </div>
  );
}
