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

/* ─── Scroll-Linked Intertwining Visualizer ────────────────── */
function GunasWeaveVisual() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Calculate rotation and intersection of the three streams on scroll
  const rotation = useTransform(scrollYProgress, [0.1, 0.8], [0, 180]);
  const latticeOpacity = useTransform(scrollYProgress, [0.35, 0.75], [0, 0.85]);
  const coreRadiance = useTransform(scrollYProgress, [0.4, 0.8], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center py-24 relative select-none overflow-hidden"
    >
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Weaving Orbiting Streams */}
        <motion.div
          style={{ rotate: rotation }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {/* Blue stream */}
          <div className="absolute w-44 h-44 border-t border-blue-400/35 rounded-full" />
          {/* Gold stream */}
          <div className="absolute w-40 h-40 border-b border-amber-400/40 rounded-full" />
          {/* Crimson stream */}
          <div className="absolute w-36 h-36 border-l border-red-500/30 rounded-full" />
        </motion.div>

        {/* Luminous Geometric Lattice (Mahat emerging) */}
        <motion.svg
          style={{ opacity: latticeOpacity }}
          viewBox="0 0 200 200"
          className="absolute w-56 h-56 pointer-events-none z-10"
        >
          {/* Sacred geometry lattice */}
          <polygon
            points="100,20 169,60 169,140 100,180 31,140 31,60"
            fill="none"
            stroke="rgba(197, 139, 82, 0.45)"
            strokeWidth="0.8"
          />
          <polygon
            points="100,45 147,73 147,127 100,155 53,127 53,73"
            fill="none"
            stroke="rgba(197, 139, 82, 0.35)"
            strokeWidth="0.8"
            strokeDasharray="2,2"
          />
          <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(197, 139, 82, 0.25)" strokeWidth="0.5" />
          <line x1="31" y1="60" x2="169" y2="140" stroke="rgba(197, 139, 82, 0.25)" strokeWidth="0.5" />
          <line x1="31" y1="140" x2="169" y2="60" stroke="rgba(197, 139, 82, 0.25)" strokeWidth="0.5" />
        </motion.svg>

        {/* Central Soft Glow */}
        <motion.div
          style={{ opacity: coreRadiance }}
          className="absolute w-20 h-20 rounded-full bg-[#C58B52]/10 blur-xl pointer-events-none"
        />
      </div>
    </div>
  );
}

/* ─── Interactive Geometry Hover Playground ─────────────────── */
function MahatGeometryPlayground() {
  const [activeHover, setActiveHover] = useState(null);

  const hoverZones = [
    {
      id: 'order',
      label: 'Order',
      coord: { x: '50%', y: '16%' },
      desc: 'Order (Niyama) represents the cosmic blueprint. It is the mathematical predictability that prevents creation from decaying into random chaos.',
    },
    {
      id: 'pattern',
      label: 'Pattern',
      coord: { x: '82%', y: '34%' },
      desc: 'Pattern (Rupa) is the replication of intelligence across scales. It dictates that structural laws governing the macrocosm operate identically inside the microcosm.',
    },
    {
      id: 'harmony',
      label: 'Harmony',
      coord: { x: '82%', y: '68%' },
      desc: 'Harmony (Samanvaya) is the co-existence of different elements. It represents how diverse parts align, allowing complexity to emerge without conflict.',
    },
    {
      id: 'potential',
      label: 'Potential',
      coord: { x: '50%', y: '84%' },
      desc: 'Potential (Śakti) is the latent power waiting to manifest. It is the unexpressed force that drives the evolution of subsequent layers.',
    },
  ];

  return (
    <div className="border border-[#C58B52]/20 bg-white/30 p-6 md:p-10 relative overflow-hidden flex flex-col items-center">
      <span className="font-general text-[8px] uppercase tracking-[0.4em] text-[#C58B52]/50 block text-center mb-10">
        Mahat Lattice Experiment (Hover points to explore organizing principles)
      </span>

      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Static Background Lattice */}
        <svg viewBox="0 0 200 200" className="absolute w-full h-full pointer-events-none stroke-[#C58B52]/20 fill-none stroke-[0.8]">
          <polygon points="100,20 169,60 169,140 100,180 31,140 31,60" />
          <line x1="100" y1="20" x2="100" y2="180" />
          <line x1="31" y1="60" x2="169" y2="140" />
          <line x1="31" y1="140" x2="169" y2="60" />
        </svg>

        {/* Hover Nodes */}
        {hoverZones.map((zone) => (
          <button
            key={zone.id}
            onMouseEnter={() => setActiveHover(zone)}
            onMouseLeave={() => setActiveHover(null)}
            style={{ left: zone.coord.x, top: zone.coord.y }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-[#C58B52] bg-[#E9E2D4] hover:bg-[#C58B52] transition-colors duration-300 z-20 flex items-center justify-center"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#C58B52]/50 hover:bg-white transition-colors" />
          </button>
        ))}

        {/* Tooltip Overlay inside the visualizer */}
        <AnimatePresence>
          {activeHover && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: EASE_EXPO }}
              className="absolute bottom-2 left-2 right-2 bg-[#E9E2D4]/95 border border-[#C58B52]/30 p-4 shadow-lg z-30 pointer-events-none text-center"
            >
              <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block mb-1">
                {activeHover.label}
              </span>
              <p className="font-cormorant text-xs md:text-sm text-[#0D0D0C]/85 leading-relaxed">
                {activeHover.desc}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
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

/* ─── Interactive Verse Revelation Deck (Sāṅkhya Kārikā 22) ──── */
function VerseMahatDeck() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      label: 'Sanskrit',
      title: 'Sāṅkhya Kārikā — Verse 22',
      content: (
        <div className="text-center py-6 md:py-10">
          <p
            className="font-cormorant text-[#0D0D0C] leading-[2.0] font-light"
            style={{ fontSize: 'clamp(20px, 3.2vw, 34px)' }}
          >
            प्रकृतेर्महांस्ततोऽहङ्कारस्तस्माद्गणश्च षोडशकः ।
            <br />
            तस्मादपि षोडशकात् पञ्चभ्यः पञ्च भूतानि ॥
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
            prakṛter mahāṃs tato \'haṅkāras tasmād gaṇaś ca ṣoḍaśakaḥ |
            <br />
            tasmād api ṣoḍaśakāt pañcabhiyaḥ pañca bhūtāni ||
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
              { word: 'prakṛteḥ', meaning: 'from material nature (Prakṛti)' },
              { word: 'mahān', meaning: 'the Great Principle (Mahat / Intellect)' },
              { word: 'tataḥ', meaning: 'then / therefrom' },
              { word: 'ahaṅkāraḥ', meaning: 'individual ego / I-ness' },
              { word: 'tasmāt', meaning: 'from that / therefrom' },
              { word: 'gaṇaḥ', meaning: 'group / collection' },
              { word: 'ca', meaning: 'and' },
              { word: 'ṣoḍaśakaḥ', meaning: 'consisting of sixteen (elements)' },
              { word: 'tasmāt api', meaning: 'and also from that' },
              { word: 'ṣoḍaśakāt', meaning: 'from the group of sixteen' },
              { word: 'pañcabhyaḥ', meaning: 'from five (subtle elements)' },
              { word: 'pañca', meaning: 'five' },
              { word: 'bhūtāni', meaning: 'physical elements (Mahābhūtas)' },
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
            "From Prakṛti arises Mahat (Intellect), from therefrom arises Ego (Ahaṅkāra), and from therefrom arises the group of sixteen. And also from the group of sixteen, from five arise the five physical elements."
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
            "Out of Nature emerges the Great Intellect, and out of Intellect emerges Individuality.
            From Individuality unfolds the sixteenfold group, and from five within that group arise the five great physical elements."
          </p>
          <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52]/60 block mt-3">
            — Sāṅkhya Kārikā 22
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
                layoutId="activeVerseMahatTabLine"
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
function MahatComparison() {
  const [activeTab, setActiveTab] = useState(0);

  const perspectives = [
    {
      id: 0,
      name: 'Sāṅkhya',
      tag: 'Classical Philosophy',
      desc: 'In Sāṅkhya, Mahat is the first evolutionary product (evolute) of Prakṛti. It represents cosmic intellect, containing the blueprint of the cosmos. At the macrocosmic level it is Mahat (Great Principle); at the microcosmic level, it operates as Buddhi (human intellect).',
    },
    {
      id: 1,
      name: 'Yoga',
      tag: 'Classical Philosophy',
      desc: 'Classical Yoga identifies Mahat as the source of Chitta (mind-stuff). Yoga practices focus on cleaning and clarifying this intelligence so that it reflects the true nature of Puruṣa without distortion.',
    },
    {
      id: 2,
      name: 'Advaita Vedānta',
      tag: 'Vedāntic Interpretation',
      desc: 'Advaita equates Mahat with the subtle universe or Hiraṇyagarbha. Rather than an independent material evolute, it is seen as the collective mind of Ishvara through which Brahman projects the universe.',
    },
    {
      id: 3,
      name: 'Viśiṣṭādvaita',
      tag: 'Later Commentary',
      desc: 'Viśiṣṭādvaita interprets Mahat as a real instrument of material manifestation. It is the first cosmic change of material nature (Acit) that serves as the medium for Lord Nārāyaṇa to organize the subsequent creation.',
    },
    {
      id: 4,
      name: 'Dvaita',
      tag: 'Later Commentary',
      desc: 'In dualist philosophy, Mahat is a distinct material entity that God brings forth from Prakṛti. It operates as the passive material intellect, which God activates to structure the physical universe.',
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
function MythVsScriptureSeven() {
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
              "Mahat is simply another name for Brahman."
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
              Sāṅkhya and standard schools distinguish them carefully. Brahman is pure, unchanging, unmanifest consciousness (Purusha), whereas Mahat is the first material product of nature (Prakṛti). Mahat is dynamic and unconscious, representing the physical lattice of order and intelligence, not consciousness itself.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Main Section Export ───────────────────────────────────── */
export function Mahat() {
  return (
    <div className="relative w-full bg-[#E9E2D4] pt-12">
      
      {/* ══════════════════════════════════════════════
          VIII.1  OPENING HERO
      ══════════════════════════════════════════════ */}
      <section className="w-full min-h-[45vh] flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <h2
            className="font-cormorant text-[#0D0D0C] leading-none mb-4 select-none"
            style={{ fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 300 }}
          >
            Mahat
          </h2>
          <p className="font-instrument italic text-xl md:text-2xl text-[#C58B52] tracking-wide">
            The Birth of Cosmic Intelligence
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VIII.2  GUNAS WEAVING VISUALIZATION
      ══════════════════════════════════════════════ */}
      <GunasWeaveVisual />

      {/* ══════════════════════════════════════════════
          VIII.3  NARRATIVE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <span className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52] mb-4 block">
            SECTION VIII
          </span>
          <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-[#0D0D0C]/75 mb-6">
            Imagine constructing a magnificent temple.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            What appears first? The stone? The pillars? The carvings? No. Before any physical material exists, there must be order. A blueprint. An organizing intelligence.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            Ancient Hindu philosophy makes a remarkably similar claim about the universe. Before matter, comes order. Before physical structure, there must be intelligence to guide its unfolding.
          </p>
          <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C] italic">
            This primordial organizing intelligence is called Mahat—the Great Principle.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VIII.4  GEOMETRY INTERACTIVE PLAYGROUND
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <MahatGeometryPlayground />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VIII.5  SCRIPTURAL FOUNDATION (Verse Deck)
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <VerseMahatDeck />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VIII.6  EDITORIAL EXPLANATION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-4">Cosmic vs Human Intellect</h4>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed mb-6">
            In Sāṅkhya philosophy, Mahat represents intellect on a cosmic scale. It is not a brain or individual thought, but the objective framework of physical laws and logical relationships that allows creation to be intelligible. When it manifests inside an individual human, it is experienced as *Buddhi* (rational intellect).
          </p>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed">
            By analyzing Mahat as the first evolute of Prakṛti, classical systems describe a universe that evolves through structural logic rather than arbitrary random events.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VIII.7  COMPARISON PANEL
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <MahatComparison />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VIII.8  THINK ABOUT IT REFLECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <div className="border-l border-[#C58B52]/30 pl-6 my-6">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
              Contemplative Inquiry
            </span>
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C] leading-relaxed italic mb-4">
              If intelligence appears before matter... does that change how we think about the universe?
            </p>
            <p className="font-cormorant text-base text-[#0D0D0C]/60 leading-relaxed">
              If physical laws are the product of primordial intelligence, matter is not the source of intelligence—it is its shadow.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VIII.9  MYTH VS SCRIPTURE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <MythVsScriptureSeven />
      </section>

      {/* ══════════════════════════════════════════════
          VIII.10  CROSS REFERENCES
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6 border-t border-b border-[#C58B52]/10 my-12 text-center">
        <Reveal>
          <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-4">
            Related TATTVA Articles
          </span>
          <div className="flex flex-wrap gap-4 justify-center">
            {['Three Gunas', 'Prakrti', 'Sankhya Philosophy', 'Panca Mahabhutas (Future)'].map((label, idx) => (
              <span
                key={idx}
                className="px-4 py-2 border border-[#0D0D0C]/10 bg-white/20 font-cormorant text-sm text-[#0D0D0C]/75 cursor-default hover:border-[#C58B52] transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          VIII.11  TRANSITION TO NEXT SECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full border-t border-[#C58B52]/10 py-24 flex flex-col items-center text-center px-6">
        <Reveal className="max-w-2xl" y={12}>
          <p
            className="font-instrument text-[#0D0D0C]/55 leading-snug mb-2"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            As cosmic intelligence differentiates, a central focus forms…
          </p>
          <p
            className="font-instrument text-[#0D0D0C] leading-snug"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            and the sense of individuality slowly awakens.
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

        {/* "Ahaṅkāra" teaser */}
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
            Ahaṅkāra
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
