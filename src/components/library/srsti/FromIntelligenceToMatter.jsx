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

/* ─── Master Visualization Scroll-Linked SVG Panel ───────────── */
function MasterCosmicUnfolding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Interpolate creation stages across scroll progress
  // Stages:
  // 0.0 -> 0.2: Geometry / Blueprint (Mahat)
  // 0.2 -> 0.4: Subtle Energy / Individuality (Ahaṅkāra)
  // 0.4 -> 0.6: Sensory Waves / Potentials (Tanmātras)
  // 0.6 -> 1.0: Physical Elements (Space, Air, Fire, Water, Earth)
  const geomOpacity = useTransform(scrollYProgress, [0.0, 0.25, 0.35], [0.8, 0.8, 0]);
  const waveOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.55, 0.65], [0, 0.8, 0.8, 0]);
  const spaceOpacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.82], [0, 0.8, 0.8, 0.2]);
  const elementsOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 0.95]);

  return (
    <div
      ref={containerRef}
      className="w-full border border-[#C58B52]/10 bg-white/20 p-6 md:p-10 relative overflow-hidden flex flex-col items-center min-h-[360px] justify-center select-none"
    >
      <span className="font-general text-[8px] uppercase tracking-[0.4em] text-[#C58B52]/50 block absolute top-6">
        Master Visualization (Scroll to witness unfolding)
      </span>

      {/* Layer 1: Golden Geometry (Mahat) */}
      <motion.svg
        style={{ opacity: geomOpacity }}
        viewBox="0 0 200 200"
        className="absolute w-44 h-44 pointer-events-none stroke-[#C58B52]/30 fill-none stroke-[0.8]"
      >
        <polygon points="100,20 169,60 169,140 100,180 31,140 31,60" />
        <circle cx="100" cy="100" r="50" />
        <line x1="100" y1="20" x2="100" y2="180" />
      </motion.svg>

      {/* Layer 2: Subtle Energy / Waves (Ahaṅkāra / Tanmātras) */}
      <motion.div
        style={{ opacity: waveOpacity }}
        className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none"
      >
        <svg viewBox="0 0 200 60" className="w-56 stroke-[#C58B52]/40 fill-none stroke-[0.8]">
          <motion.path
            d="M 10,30 Q 30,10 50,30 T 90,30 T 130,30 T 170,30 T 190,30"
            animate={{ d: [
              "M 10,30 Q 30,10 50,30 T 90,30 T 130,30 T 170,30 T 190,30",
              "M 10,30 Q 30,50 50,30 T 90,30 T 130,30 T 170,30 T 190,30",
              "M 10,30 Q 30,10 50,30 T 90,30 T 130,30 T 170,30 T 190,30"
            ]}}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          />
          <motion.path
            d="M 10,30 Q 30,50 50,30 T 90,30 T 130,30 T 170,30 T 190,30"
            animate={{ d: [
              "M 10,30 Q 30,50 50,30 T 90,30 T 130,30 T 170,30 T 190,30",
              "M 10,30 Q 30,10 50,30 T 90,30 T 130,30 T 170,30 T 190,30",
              "M 10,30 Q 30,50 50,30 T 90,30 T 130,30 T 170,30 T 190,30"
            ]}}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="stroke-[#C58B52]/20"
          />
        </svg>
      </motion.div>

      {/* Layer 3: Expanding Space / Ether (Ākāśa) */}
      <motion.div
        style={{ opacity: spaceOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-36 h-36 border border-[#C58B52]/25 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute w-20 h-20 border border-[#C58B52]/15 rounded-full animate-ping" style={{ animationDuration: '6s' }} />
      </motion.div>

      {/* Layer 4: Gross Elements (Air, Fire, Water, Earth) */}
      <motion.div
        style={{ opacity: elementsOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="text-center">
          <span className="font-general text-[7px] uppercase tracking-[0.25em] text-[#C58B52] block mb-2">Matter Materialized</span>
          {/* Faint earth circle */}
          <div className="w-24 h-24 rounded-full border border-[#C58B52]/30 flex items-center justify-center bg-gradient-to-b from-[#C58B52]/5 to-[#C58B52]/15 relative">
            {/* Water ripples inside */}
            <div className="absolute inset-2 border border-blue-400/20 rounded-full" />
            {/* Fire flame indicator */}
            <div className="w-2 h-4 bg-amber-400/30 rounded-t-full filter blur-[1px] absolute top-4" />
            <span className="font-instrument italic text-xs text-[#0D0D0C]/70">Pṛthvī</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

/* ─── Interactive Stepper Timeline ──────────────────────────── */
function CreationFlowTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: 'Mahat',
      subtitle: 'Cosmic Intelligence',
      content: (
        <div>
          <p className="font-cormorant text-base text-[#0D0D0C]/70 leading-relaxed mb-4">
            The first evolute from Prakṛti. It represents the structural framework, natural laws,
            and cosmic blueprint that ensures creation follows ordered patterns rather than chaotic accidents.
          </p>
          <span className="font-general text-[8px] uppercase tracking-[0.15em] text-[#C58B52]">
            Ontological Level: Cosmic Intellect
          </span>
        </div>
      ),
    },
    {
      id: 1,
      title: 'Ahaṅkāra',
      subtitle: 'Individuality Principle',
      content: (
        <div>
          <p className="font-cormorant text-base text-[#0D0D0C]/70 leading-relaxed mb-4">
            The Principle of Individuality. The stage where unified cosmic intelligence begins to differentiate, drawing boundaries between "I" and "not I." This forms the basis of subjective experience.
          </p>
          <span className="font-general text-[8px] uppercase tracking-[0.15em] text-[#C58B52]">
            Ontological Level: Subjective Differentiator
          </span>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Tanmātras',
      subtitle: 'Sensory Potentials',
      content: (
        <div>
          <p className="font-cormorant text-base text-[#0D0D0C]/70 leading-relaxed mb-4">
            The five subtle potentials of sensory experience: Sound, Touch, Form, Taste, and Smell.
            They are the qualities of objects that bridge subjectivity to the gross material world.
          </p>
          <span className="font-general text-[8px] uppercase tracking-[0.15em] text-[#C58B52]">
            Ontological Level: Qualitative Blueprints
          </span>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Pañca Mahābhūtas',
      subtitle: 'Gross Physical Elements',
      content: (
        <div>
          <p className="font-cormorant text-base text-[#0D0D0C]/70 leading-relaxed mb-4">
            The five elements that constitute our experience of the physical world: Space (Ākāśa),
            Air (Vāyu), Fire (Agni), Water (Āpas), and Earth (Pṛthvī). They represent the final condensation of potential into matter.
          </p>
          <span className="font-general text-[8px] uppercase tracking-[0.15em] text-[#C58B52]">
            Ontological Level: Physical Realization
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full my-8">
      {/* Horizontal Nav */}
      <div className="flex justify-around items-center border-b border-[#C58B52]/10 pb-4 mb-6 select-none">
        {steps.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setActiveStep(s.id)}
            className="flex flex-col items-center group relative py-2 px-1"
          >
            <span
              className={`font-instrument text-base md:text-lg transition-colors ${
                activeStep === s.id ? 'text-[#C58B52]' : 'text-[#0D0D0C]/40 hover:text-[#0D0D0C]/70'
              }`}
            >
              {s.title}
            </span>
            <span className="font-general text-[7px] uppercase tracking-widest text-[#0D0D0C]/35 scale-90">
              Stage 0{idx + 1}
            </span>
            {activeStep === s.id && (
              <motion.div
                layoutId="activeFlowTabLine"
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C58B52]"
                transition={{ duration: 0.4, ease: EASE_EXPO }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Expanded Content */}
      <div className="border border-[#C58B52]/20 bg-white/30 p-6 md:p-8 min-h-[160px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: EASE_EXPO }}
          >
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] block mb-1">
              {steps[activeStep].subtitle}
            </span>
            {steps[activeStep].content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Ahaṅkāra Details Card ──────────────────────────────────── */
function AhankaraCard() {
  return (
    <div className="border border-[#C58B52]/25 bg-white/20 p-6 md:p-8 my-8 relative">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-cormorant text-2xl font-light text-[#0D0D0C]">अहङ्कार</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#C58B52]/40" />
            <span className="font-instrument italic text-lg text-[#C58B52]">Ahaṅkāra</span>
          </div>
          <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#0D0D0C]/40 block mb-4">
            The Principle of Individuality
          </span>
          <p className="font-cormorant text-lg text-[#0D0D0C]/75 leading-relaxed font-light mb-4">
            Ahaṅkāra represents the point where unified cosmic potential begins to draw borders, separating subject from object. It is not personal pride or arrogance in the colloquial sense, but the structural division of reality into individual centers of experience.
          </p>
          <p className="font-cormorant text-base text-[#0D0D0C]/65 leading-relaxed font-light">
            Once this boundary is drawn, the universe is capable of subjective observation—creating the conditions for sensory experience and physical forms.
          </p>
        </div>

        {/* Scholar Note Embedded */}
        <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-[#C58B52]/10 pt-6 md:pt-0 md:pl-6 flex flex-col justify-between">
          <div>
            <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block mb-2">
              SCHOLAR NOTE
            </span>
            <p className="font-cormorant text-xs md:text-sm text-[#0D0D0C]/70 leading-relaxed">
              In later philosophical systems, Ahaṅkāra is translated as the "ego." In cosmological texts, however, it remains an objective category representing the division of Prakṛti into individual units, preceding the development of human minds or individual personalities.
            </p>
          </div>
          <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#0D0D0C]/30 block mt-4">
            Source: Sāṅkhya Kārikā 24
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Tanmātras Sensory Potentials Panel ──────────────────────── */
function TanmatrasPanel() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const potentials = [
    { name: 'Sound', skt: 'Śabda (शब्द)', desc: 'The potential behind hearing, associated with Ākāśa (Space).' },
    { name: 'Touch', skt: 'Sparśa (स्पर्श)', desc: 'The potential behind feeling, associated with Vāyu (Air).' },
    { name: 'Form', skt: 'Rūpa (रूप)', desc: 'The potential behind sight, associated with Agni (Fire).' },
    { name: 'Taste', skt: 'Rasa (रस)', desc: 'The potential behind tasting, associated with Āpas (Water).' },
    { name: 'Smell', skt: 'Gandha (गन्ध)', desc: 'The potential behind smelling, associated with Pṛthvī (Earth).' },
  ];

  return (
    <div className="border border-[#C58B52]/20 bg-white/30 p-6 md:p-8 my-8">
      <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#C58B52] block mb-6 text-center">
        Tanmātras — Sensory Potentials
      </span>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {potentials.map((p, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`border p-4 transition-all duration-300 flex flex-col justify-between min-h-[140px] cursor-default text-center ${
              hoveredIdx === idx
                ? 'border-[#C58B52] bg-[#C58B52]/5 shadow-md'
                : 'border-[#0D0D0C]/10 bg-white/20'
            }`}
          >
            <div>
              {/* Minimal Line Icon Indicator */}
              <div className="w-8 h-8 rounded-full border border-[#C58B52]/40 flex items-center justify-center mx-auto mb-3">
                <span className="font-general text-[9px] text-[#C58B52] font-semibold">0{idx + 1}</span>
              </div>
              <span className="font-instrument text-sm text-[#0D0D0C] font-semibold block">
                {p.name}
              </span>
              <span className="font-cormorant text-xs text-[#C58B52] block mt-1">
                {p.skt}
              </span>
            </div>
            
            <AnimatePresence>
              {hoveredIdx === idx && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="font-cormorant text-xs text-[#0D0D0C]/80 leading-relaxed mt-2"
                >
                  {p.desc}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Pañca Mahābhūtas element deck ──────────────────────────── */
function MahabhutasDeck() {
  const [expandedIdx, setExpandedIdx] = useState(0);

  const elements = [
    {
      skt: 'आकाश',
      trans: 'Ākāśa',
      name: 'Ether / Space',
      role: 'The primary container element. It provides the canvas, dimension, and empty space in which all physical manifestations exist.',
      tanmatra: 'Sound (Śabda)',
      organ: 'Ear (Śrotra)',
      scripture: 'Taittirīya Upaniṣad 2.1: "From Brahman arose space..."',
      bgGradients: 'from-[#C58B52]/5 to-[#C58B52]/10',
    },
    {
      skt: 'वायु',
      trans: 'Vāyu',
      name: 'Air',
      role: 'The principle of movement and motion. It represents kinetic energy, gaseous states, and dynamic currents within material nature.',
      tanmatra: 'Touch (Sparśa)',
      organ: 'Skin (Tvak)',
      scripture: 'Taittirīya Upaniṣad 2.1: "From space arose air..."',
      bgGradients: 'from-[#C58B52]/10 to-[#C58B52]/15',
    },
    {
      skt: 'अग्नि',
      trans: 'Agni / Tejas',
      name: 'Fire',
      role: 'The principle of heat, metabolism, and transformation. It converts forms, governs temperatures, and creates visible light.',
      tanmatra: 'Form (Rūpa)',
      organ: 'Eye (Cakṣus)',
      scripture: 'Taittirīya Upaniṣad 2.1: "From air arose fire..."',
      bgGradients: 'from-[#C58B52]/15 to-[#C58B52]/20',
    },
    {
      skt: 'आपस्',
      trans: 'Āpas / Jala',
      name: 'Water',
      role: 'The principle of cohesion and liquidity. It binds distinct elements, providing hydration, fluid flow, and chemical cohesion.',
      tanmatra: 'Taste (Rasa)',
      organ: 'Tongue (Rasanā)',
      scripture: 'Taittirīya Upaniṣad 2.1: "From fire arose water..."',
      bgGradients: 'from-[#C58B52]/20 to-[#C58B52]/25',
    },
    {
      skt: 'पृथिवी',
      trans: 'Pṛthvī',
      name: 'Earth',
      role: 'The principle of solidity, gravity, and stability. It provides weight, solid form, structure, and physical boundary.',
      tanmatra: 'Smell (Gandha)',
      organ: 'Nose (Ghrāṇa)',
      scripture: 'Taittirīya Upaniṣad 2.1: "From water arose earth..."',
      bgGradients: 'from-[#C58B52]/25 to-[#C58B52]/30',
    },
  ];

  return (
    <div className="w-full my-8">
      <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#C58B52] block mb-6 text-center">
        Pañca Mahābhūtas — Five Gross Elements
      </span>

      <div className="flex flex-col gap-4">
        {elements.map((el, idx) => {
          const isExpanded = expandedIdx === idx;
          return (
            <div
              key={idx}
              className={`border border-[#C58B52]/20 transition-all duration-500 overflow-hidden bg-gradient-to-r ${el.bgGradients}`}
            >
              {/* Header Accordion Clickable */}
              <button
                onClick={() => setExpandedIdx(idx)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <span className="font-general text-[10px] text-[#C58B52] font-semibold">0{idx + 1}</span>
                  <span className="font-cormorant text-xl font-light text-[#0D0D0C]">{el.skt}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C58B52]/40" />
                  <span className="font-instrument italic text-base text-[#0D0D0C]/80">{el.trans}</span>
                </div>
                <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52]">
                  {isExpanded ? '[ COLLAPSE ]' : '[ INSPECT ]'}
                </span>
              </button>

              {/* Collapsible Body */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE_EXPO }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-[#C58B52]/10 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
                          Philosophical Role
                        </span>
                        <p className="font-cormorant text-lg text-[#0D0D0C]/75 leading-relaxed font-light">
                          {el.role}
                        </p>
                        
                        <div className="mt-4 border-t border-[#C58B52]/10 pt-4 flex gap-8">
                          <div>
                            <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#0D0D0C]/40 block mb-1">
                              Related Tanmātra
                            </span>
                            <span className="font-instrument text-xs text-[#0D0D0C]/85 font-semibold">
                              {el.tanmatra}
                            </span>
                          </div>
                          <div>
                            <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#0D0D0C]/40 block mb-1">
                              Related Sense Organ
                            </span>
                            <span className="font-instrument text-xs text-[#0D0D0C]/85 font-semibold">
                              {el.organ}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t md:border-t-0 md:border-l border-[#C58B52]/10 pt-6 md:pt-0 md:pl-6 flex flex-col justify-between">
                        <div>
                          <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
                            Scriptural Anchor
                          </span>
                          <p className="font-cormorant text-xs text-[#0D0D0C]/70 leading-relaxed italic">
                            {el.scripture}
                          </p>
                        </div>
                        
                        {/* Miniature Interactive graphic */}
                        <div className="w-full h-12 bg-white/20 border border-[#C58B52]/10 rounded flex items-center justify-center mt-4">
                          <div className="w-3 h-3 rounded-full bg-[#C58B52] animate-ping" />
                          <span className="font-general text-[8px] uppercase tracking-widest text-[#0D0D0C]/40 ml-3">
                            Resonant
                          </span>
                        </div>
                      </div>
                    </div>
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

/* ─── Myth vs Scripture Card ─────────────────────────────────── */
function MythVsScriptureEight() {
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
              "The five elements are simply ancient chemistry."
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
              The Pañca Mahābhūtas are not equivalents of elements on the modern periodic table. They represent philosophical principles that categorize how we experience materiality (solidity, fluidity, heat, movement, space). Reducing them to ancient chemistry fails to capture their epistemological and phenomenological role.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Main Section Export ───────────────────────────────────── */
export function FromIntelligenceToMatter() {
  return (
    <div className="relative w-full bg-[#E9E2D4] pt-12">
      
      {/* ══════════════════════════════════════════════
          IX.1  OPENING HERO
      ══════════════════════════════════════════════ */}
      <section className="w-full min-h-[45vh] flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <h2
            className="font-cormorant text-[#0D0D0C] leading-none mb-4 select-none"
            style={{ fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 300 }}
          >
            From Intelligence to Matter
          </h2>
          <p className="font-instrument italic text-xl md:text-2xl text-[#C58B52] tracking-wide">
            How the Universe Gradually Unfolds
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IX.2  MASTER VISUALIZATION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <MasterCosmicUnfolding />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IX.3  NARRATIVE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <span className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52] mb-4 block">
            SECTION IX
          </span>
          <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-[#0D0D0C]/75 mb-6">
            Imagine designing an entire city.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            First comes the vision. Then the plan. Then the blueprints. Only afterward, when all the subtle organizing structures are laid out, do bricks, concrete, roads, buildings, and physical people appear.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            Many Hindu traditions describe creation in a remarkably similar way. Physical reality does not materialize instantaneously from nothing. It unfolds step by step, progressing logically from abstract, subtle intelligence down to physical matter.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IX.4  THE CREATION FLOW TIMELINE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <CreationFlowTimeline />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IX.5  AHAṄKĀRA CARD
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <AhankaraCard />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IX.6  TANMĀTRAS sensory potential grid
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <TanmatrasPanel />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IX.7  PAÑCA MAHĀBHŪTAS ELEMENT DECK
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <MahabhutasDeck />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IX.8  THINK ABOUT IT REFLECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <div className="border-l border-[#C58B52]/30 pl-6 my-6">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
              Contemplative Inquiry
            </span>
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C] leading-relaxed italic mb-4">
              What if the physical world is only the final chapter of creation, rather than its beginning?
            </p>
            <p className="font-cormorant text-base text-[#0D0D0C]/60 leading-relaxed">
              If physical reality is the most condensed, final state of cosmic evolution, it implies that the subtle layers (desire, intellect, senses) are much more fundamental than the physical matter we touch.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IX.9  MYTH VS SCRIPTURE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <MythVsScriptureEight />
      </section>

      {/* ══════════════════════════════════════════════
          IX.10 TRANSITION TO THE MANIFEST UNIVERSE
      ══════════════════════════════════════════════ */}
      <section className="w-full border-t border-[#C58B52]/10 py-24 flex flex-col items-center text-center px-6">
        <Reveal className="max-w-2xl" y={12}>
          <p
            className="font-instrument text-[#0D0D0C]/55 leading-snug mb-2"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            With Earth materialized, the camera pulls back…
          </p>
          <p
            className="font-instrument text-[#0D0D0C] leading-snug"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            revealing the macrocosmic architecture of the manifest universe.
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

        {/* "The Manifest Universe" teaser */}
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
          {/* Subtle representation of golden lotus */}
          <div className="w-6 h-6 border border-[#C58B52]/20 rounded-full flex items-center justify-center mb-1">
            <div className="w-2.5 h-2.5 rounded-full bg-[#C58B52]/30 animate-pulse" />
          </div>
          <h3
            className="font-instrument text-[#0D0D0C]/35"
            style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}
          >
            The Manifest Universe
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
