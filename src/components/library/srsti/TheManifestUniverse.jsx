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

/* ─── Elegant Cosmic Eggs (Brahmāṇḍas) Visualization ────────── */
function EggCosmosVisual() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Slowly rotate and float the group of cosmic eggs
  const yShift = useTransform(scrollYProgress, [0.1, 0.9], [-20, 20]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#0D0D0C] py-20 px-6 relative select-none overflow-hidden flex flex-col items-center justify-center min-h-[340px]"
    >
      {/* Background grain overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(25,25,24,0.3)_0%,rgba(13,13,12,0.95)_100%)] z-0" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2280%22_height=%2280%22><filter_id=%22f%22><feTurbulence_type=%22fractalNoise%22_baseFrequency=%220.6%22_numOctaves=%223%22_stitchTiles=%22stitch%22/></filter><rect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23f)%22/></svg>')] z-0 pointer-events-none" />

      <span className="font-general text-[8px] uppercase tracking-[0.4em] text-[#C58B52]/40 block absolute top-6 z-10">
        Countless Brahmāṇḍas (Universes Floating in the Void)
      </span>

      {/* Floating Egg Nodes */}
      <motion.div style={{ y: yShift }} className="flex flex-wrap gap-8 justify-center items-center max-w-xl z-10">
        {[1.2, 0.95, 0.75, 1.1, 0.85].map((scaleVal, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [0, -6 * scaleVal, 0],
              opacity: [0.35, 0.75, 0.35],
              boxShadow: [
                '0 0 10px rgba(197, 139, 82, 0.08), inset 0 0 8px rgba(197, 139, 82, 0.1)',
                '0 0 25px rgba(197, 139, 82, 0.25), inset 0 0 15px rgba(197, 139, 82, 0.3)',
                '0 0 10px rgba(197, 139, 82, 0.08), inset 0 0 8px rgba(197, 139, 82, 0.1)',
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + idx,
              ease: 'easeInOut',
            }}
            style={{
              scale: scaleVal,
            }}
            className="w-16 h-24 rounded-[50%/60%_60%_40%_40%] border border-[#C58B52]/30 flex items-center justify-center"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#C58B52]/30 animate-pulse" />
          </motion.div>
        ))}
      </motion.div>

      <span className="font-cormorant italic text-xs text-[#C58B52]/40 block absolute bottom-6 z-10 text-center">
        Each egg represents a complete shell holding an entire differentiated cosmos
      </span>
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

/* ─── Interactive Verse Revelation Deck (Bhāgavatam 2.10.1) ──── */
function VerseManifestDeck() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      label: 'Sanskrit',
      title: 'Śrīmad Bhāgavatam — Verse 2.10.1',
      content: (
        <div className="text-center py-6 md:py-10">
          <p
            className="font-cormorant text-[#0D0D0C] leading-[2.0] font-light"
            style={{ fontSize: 'clamp(20px, 3.2vw, 34px)' }}
          >
            अत्र सर्गो विसर्गश्च स्थानं पोषणमूतयः ।
            <br />
            मन्वन्तरेशानुकथा निरोधो मुक्तिराश्रयः ॥
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
            atra sargo visargaś ca sthānaṃ poṣaṇam ūtayaḥ |
            <br />
            manvantareśānukathā nirodho muktir āśrayaḥ ||
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
              { word: 'atra', meaning: 'here (in this scripture)' },
              { word: 'sargaḥ', meaning: 'primary creation / elemental division' },
              { word: 'visargaḥ', meaning: 'secondary creation / population / diversity' },
              { word: 'ca', meaning: 'and' },
              { word: 'sthānam', meaning: 'planetary systems / sustenance' },
              { word: 'poṣanam', meaning: 'nourishment / protection' },
              { word: 'ūtayaḥ', meaning: 'impetus for action / desires' },
              { word: 'manvantara', meaning: 'cosmic epochs / reigns of Manus' },
              { word: 'iśa-anukathā', meaning: 'narratives of the Lord and seers' },
              { word: 'nirodhaḥ', meaning: 'dissolution / cosmic rest' },
              { word: 'muktiḥ', meaning: 'liberation / release' },
              { word: 'āśrayaḥ', meaning: 'the ultimate basis / shelter' },
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
            "In this scripture (Bhāgavata Purāṇa), ten subjects are described: primary creation (Sarga),
            secondary creation (Visarga), sustenance (Sthāna), nourishment (Poṣaṇa), impetus for action (Ūti),
            cosmic epochs (Manvantara), divine histories (Īśānukathā), dissolution (Nirodha), liberation (Mukti),
            and the ultimate shelter (Āśraya)."
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
            "Within this cosmology ten phases are mapped: sarga, the primary sowing of principles,
            and visarga, the secondary shaping of forms, planetary shelter, Epochs of Manus,
            dissolution, and the supreme anchor of all existence."
          </p>
          <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52]/60 block mt-3">
            — Śrīmad Bhāgavatam 2.10.1
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
                layoutId="activeVerseManifestTabLine"
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

/* ─── Interactive Vertical Creation Sequence ───────────────── */
function ManifestSequenceTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const sequence = [
    {
      id: 0,
      title: 'Mahāviṣṇu (Kāraṇodakaśāyī)',
      desc: 'The macrocosmic avatar of divinity resting on the Causal Ocean. He is described as the source from whose skin pores countless universes emerge during His breathing cycle, representing the potential limit of space-time bubbles.',
    },
    {
      id: 1,
      title: 'Countless Brahmāṇḍas',
      desc: 'Universes floating as golden shells in the unmanifest causal dark. Each egg represents an isolated physical container containing its own dimensional space, element sequence, and localized timeline.',
    },
    {
      id: 2,
      title: 'Garbhodakaśāyī Viṣṇu',
      desc: 'The personal divine presence entering a single Brahmāṇḍa. He fills the lower half of the cosmic egg with His sweat (the Garbha Ocean) and rests upon Ananta Śeṣa, establishing local planetary stabilization.',
    },
    {
      id: 3,
      title: 'The Lotus (Kamala)',
      desc: 'An organic stem growing from the navel of Garbhodakaśāyī Viṣṇu. It represents the emergence of potential life and planetary orbits out of the stabilizing ocean, acting as a biological coordinate axis.',
    },
    {
      id: 4,
      title: 'Brahmā',
      desc: 'The first individual soul born atop the lotus. He is not the absolute source, but the conscious architect who performs secondary creation (Visarga) under divine guidance after meditating on the seed syllables.',
    },
    {
      id: 5,
      title: 'Sarga',
      desc: 'Primary creation—the sowing of elemental principles, the five elements, the senses, and the material qualities by the supreme source before Brahmā is born.',
    },
    {
      id: 6,
      title: 'Visarga',
      desc: 'Secondary creation—the assembly of bodies, plant life, animal species, human structures, and local realms executed by Brahmā using the raw materials of Sarga.',
    },
  ];

  return (
    <div className="w-full my-8">
      {/* Horizontal List Selectors */}
      <div className="flex flex-wrap gap-2 justify-center border-b border-[#C58B52]/10 pb-4 mb-6">
        {sequence.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setActiveStep(item.id)}
            className={`px-3 py-1.5 border font-general text-[8px] uppercase tracking-wider transition-all duration-300 ${
              activeStep === item.id
                ? 'border-[#C58B52] bg-[#C58B52]/10 text-[#C58B52]'
                : 'border-[#0D0D0C]/10 bg-white/20 text-[#0D0D0C]/50 hover:text-[#0D0D0C]'
            }`}
          >
            Stage 0{idx + 1}
          </button>
        ))}
      </div>

      {/* Details Box */}
      <div className="border border-[#C58B52]/20 bg-white/30 p-6 md:p-8 min-h-[140px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.35, ease: EASE_EXPO }}
          >
            <span className="font-general text-[9px] uppercase tracking-[0.25em] text-[#C58B52] block mb-2">
              Sequence Phase: 0{activeStep + 1}
            </span>
            <h4 className="font-instrument text-lg md:text-xl text-[#0D0D0C] font-semibold mb-2">
              {sequence[activeStep].title}
            </h4>
            <p className="font-cormorant text-base md:text-lg text-[#0D0D0C]/75 leading-relaxed font-light">
              {sequence[activeStep].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Sarga vs Visarga Comparison Cards ──────────────────────── */
function SargaVisargaComparison() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {/* Sarga Card */}
      <div className="border border-[#C58B52]/20 bg-white/20 p-6 flex flex-col justify-between min-h-[220px]">
        <div>
          <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block mb-2">
            PRIMARY CREATION
          </span>
          <h4 className="font-instrument text-xl text-[#0D0D0C] mb-3">Sarga (सर्ग)</h4>
          <p className="font-cormorant text-base text-[#0D0D0C]/70 leading-relaxed font-light">
            The initial manifest sowing of cosmic principles. It is executed directly by the supreme source (Brahman/Viṣṇu) and includes the creation of space, elements, sensory potentials, qualities, and the structural laws of nature.
          </p>
        </div>
        <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#0D0D0C]/35 block mt-4">
          Framework: Raw Materials of Reality
        </span>
      </div>

      {/* Visarga Card */}
      <div className="border border-[#C58B52]/20 bg-white/20 p-6 flex flex-col justify-between min-h-[220px]">
        <div>
          <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block mb-2">
            SECONDARY CREATION
          </span>
          <h4 className="font-instrument text-xl text-[#0D0D0C] mb-3">Visarga (विसर्ग)</h4>
          <p className="font-cormorant text-base text-[#0D0D0C]/70 leading-relaxed font-light">
            The assembly and differentiation of individual forms. Executed by the creator Brahmā, this phase details the generation of diverse realms, plant and animal kingdoms, species, timelines, and social orders using the raw Sarga materials.
          </p>
        </div>
        <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#0D0D0C]/35 block mt-4">
          Framework: Architectural Population
        </span>
      </div>
    </div>
  );
}

/* ─── Myth vs Scripture Card ─────────────────────────────────── */
function MythVsScriptureNine() {
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
              "Brahmā created everything from absolute nothingness."
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
              Scripturally, Brahmā is never described as creating from absolute nothingness. He is born into an already stabilized cosmic container (the shell of the Brahmāṇḍa) containing the raw elements (Space, Air, Fire, Water, Earth) created during Sarga. Brahmā functions as a secondary architect, not the primary material source.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Main Section Export ───────────────────────────────────── */
export function TheManifestUniverse() {
  return (
    <div className="relative w-full bg-[#E9E2D4] pt-12">
      
      {/* ══════════════════════════════════════════════
          X.1  OPENING HERO
      ══════════════════════════════════════════════ */}
      <section className="w-full min-h-[45vh] flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <h2
            className="font-cormorant text-[#0D0D0C] leading-none mb-4 select-none"
            style={{ fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 300 }}
          >
            The Manifest Universe
          </h2>
          <p className="font-instrument italic text-xl md:text-2xl text-[#C58B52] tracking-wide">
            When Creation Finally Becomes a Cosmos
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          X.2  COSMIC EGGS VISUAL
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <EggCosmosVisual />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          X.3  NARRATIVE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <span className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52] mb-4 block">
            SECTION X
          </span>
          <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-[#0D0D0C]/75 mb-6">
            Imagine reading the blueprint of a magnificent city.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            You now understand every material, every principle, and every structural rule. But the physical city itself has not yet appeared. It remains a concept in the mind of the architect.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            Purāṇic cosmology describes the exact transition point where those raw principles are shaped into a structured, populated universe. It moves us from the abstract realms of metaphysics into the visible, multi-dimensional cosmos.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          X.4  THE CREATION SEQUENCE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-4 text-center">
            Purāṇic Creation Sequence (Select stages to inspect)
          </span>
          <ManifestSequenceTimeline />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          X.5  SCRIPTURAL FOUNDATION (Bhagavatam)
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <VerseManifestDeck />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          X.6  SARGA VS VISARGA
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <SargaVisargaComparison />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          X.7  THINK ABOUT IT REFLECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <div className="border-l border-[#C58B52]/30 pl-6 my-6">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
              Contemplative Inquiry
            </span>
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C] leading-relaxed italic mb-4">
              Why do the Purāṇas describe creation as an ordered unfolding rather than a single instantaneous event?
            </p>
            <p className="font-cormorant text-base text-[#0D0D0C]/60 leading-relaxed">
              It reflects the ancient Indian realization that reality is developmental and cyclical. Instancy belongs to machines; organic cycles belong to nature.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          X.8  MYTH VS SCRIPTURE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <MythVsScriptureNine />
      </section>

      {/* ══════════════════════════════════════════════
          X.9  EDITORIAL NOTE ON INTEGRITY
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6 border-t border-b border-[#C58B52]/10 my-12">
        <Reveal>
          <div className="flex gap-4 border border-[#0D0D0C]/10 p-6 bg-white/30">
            <div className="shrink-0 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C58B52]" />
            </div>
            <div>
              <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#C58B52] block mb-2">
                TATTVA Editorial Policy Note
              </span>
              <p className="font-cormorant text-base text-[#0D0D0C]/80 leading-relaxed">
                The Vedas, Upaniṣads, Sāṅkhya, and Purāṇas emphasize different dimensions of the origin story. Rather than seeing these as contradictions, TATTVA documents each tradition faithfully as responding to distinct philosophical questions—ranging from the absolute negation of the Nāsadīya Sūkta to the structural evolution of Sāṅkhya and the rich cosmological sequencing of the Purāṇas.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          X.10 TRANSITION TO THE LIVING COSMOS
      ══════════════════════════════════════════════ */}
      <section className="w-full border-t border-[#C58B52]/10 py-24 flex flex-col items-center text-center px-6">
        <Reveal className="max-w-2xl" y={12}>
          <p
            className="font-instrument text-[#0D0D0C]/55 leading-snug mb-2"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            The physical canvas is complete, the dimensions stabilized…
          </p>
          <p
            className="font-instrument text-[#0D0D0C] leading-snug"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            and life prepare to populate the new cosmic shell.
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

        {/* "The Living Cosmos" teaser */}
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
            The Living Cosmos
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
