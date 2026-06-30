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

/* ─── Scroll-Linked Golden Embryo Visualizer ────────────────── */
function GoldenEmbryoVisual() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Grow the sphere as scroll progress advances through the section
  const sphereScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [1, 2.2, 1.4]);
  // Fade in the three internal gunas lights at the end of the scroll range
  const streamOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 0.6]);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center py-28 relative select-none overflow-hidden"
    >
      <div className="relative w-48 h-48 flex items-center justify-center">
        {/* Core Embryo Sphere */}
        <motion.div
          style={{ scale: sphereScale }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(197, 139, 82, 0.15), inset 0 0 15px rgba(197, 139, 82, 0.2)',
              '0 0 45px rgba(197, 139, 82, 0.35), inset 0 0 30px rgba(197, 139, 82, 0.4)',
              '0 0 20px rgba(197, 139, 82, 0.15), inset 0 0 15px rgba(197, 139, 82, 0.2)',
            ],
            background: [
              'radial-gradient(circle, rgba(197,139,82,0.12) 0%, rgba(5,5,4,0) 70%)',
              'radial-gradient(circle, rgba(197,139,82,0.22) 20%, rgba(5,5,4,0) 80%)',
              'radial-gradient(circle, rgba(197,139,82,0.12) 0%, rgba(5,5,4,0) 70%)',
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full border border-[#C58B52]/30 flex items-center justify-center"
        >
          {/* Subtle internal ripples/gradients */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#C58B52]/5 via-transparent to-[#C58B52]/10 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-6 rounded-full bg-gradient-to-bl from-[#C58B52]/5 via-transparent to-[#C58B52]/8 animate-spin" style={{ animationDuration: '14s', animationDirection: 'reverse' }} />
        </motion.div>

        {/* Layered Three Guṇas streams - revealed as user scrolls towards the end of Section V */}
        <motion.div
          style={{ opacity: streamOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {/* Blue stream (Sattva) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            className="absolute w-28 h-28 border-t-2 border-blue-400/40 rounded-full filter blur-[1px]"
          />
          {/* Gold stream (Rajas) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            className="absolute w-24 h-24 border-b-2 border-amber-400/50 rounded-full filter blur-[1px]"
          />
          {/* Crimson stream (Tamas) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 11, ease: 'linear' }}
            className="absolute w-20 h-20 border-l-2 border-red-500/35 rounded-full filter blur-[1px]"
          />
        </motion.div>
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

/* ─── Interactive Verse Revelation Deck ─────────────────────── */
function VerseHiranyaDeck() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      label: 'Sanskrit',
      title: 'Hiraṇyagarbha Sūkta — Verse I',
      content: (
        <div className="text-center py-6 md:py-10">
          <p
            className="font-cormorant text-[#0D0D0C] leading-[2.0] font-light"
            style={{ fontSize: 'clamp(20px, 3.2vw, 34px)' }}
          >
            हिरण्यगर्भः समवर्तताग्रे भूतस्य जातः पतिरेक आसीत् ।
            <br />
            स दाधार पृथिवीं द्यामुतेमां कस्मै देवाय हविषा विधेम ॥
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
            hiraṇyagarbhaḥ samavartatāgre bhūtasya jātaḥ patir eka āsīt |
            <br />
            sa dādhāra pṛthivīṃ dyām utemāṃ kasmai devāya haviṣā vidhema ||
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
              { word: 'hiraṇya-garbhaḥ', meaning: 'golden embryo / golden source of light' },
              { word: 'samavartata', meaning: 'arose / manifested' },
              { word: 'agre', meaning: 'in the beginning' },
              { word: 'bhūtasya', meaning: 'of what has come to be / of creation' },
              { word: 'jātaḥ', meaning: 'born / brought forth' },
              { word: 'patiḥ', meaning: 'lord / sustainer' },
              { word: 'ekaḥ', meaning: 'sole / one' },
              { word: 'āsīt', meaning: 'was' },
              { word: 'saḥ', meaning: 'he / that one' },
              { word: 'dādhāra', meaning: 'supported / upheld' },
              { word: 'pṛthivīm', meaning: 'the earth' },
              { word: 'dyām', meaning: 'the heavens / sky' },
              { word: 'uta', meaning: 'and / also' },
              { word: 'imām', meaning: 'this' },
              { word: 'kasmai', meaning: 'to whom? / to the unknown god' },
              { word: 'devāya', meaning: 'deity / divine power' },
              { word: 'haviṣā', meaning: 'with offering / oblation' },
              { word: 'vidhema', meaning: 'we worship / pay homage' },
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
            "In the beginning the Golden Embryo arose; once born, he was the sole lord of creation.
            He supported this earth and the heavens. To what deity shall we offer our worship?"
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
            "In the beginning arose the Golden Womb, the sole lord of all that exists.
            Upholding the earth below and the starry dome above.
            Who is the unknown God to whom we bring our offering?"
          </p>
          <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52]/60 block mt-3">
            — Ṛgveda 10.121.1
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
                layoutId="activeVerseHiranyaTabLine"
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

/* ─── Expandable Interpretation Explorer ─────────────────────── */
function HiranyaExplorer() {
  const [activeTab, setActiveTab] = useState(0);

  const perspectives = [
    {
      id: 0,
      name: 'Ṛgvedic Context',
      tag: 'Scripture',
      desc: 'In the Ṛgveda, Hiraṇyagarbha is the primordial entity that arises at the very beginning of the creative cycle. He acts as the sole lord (pati) and support of the newly differentiated earth and sky, posing a structural question: "To what deity shall we offer worship?"',
    },
    {
      id: 1,
      name: 'Upaniṣadic Thought',
      tag: 'Interpretation',
      desc: 'The Upaniṣads (such as Chāndogya) describe the cosmic egg splitting open. The silver half becomes the earth, the golden half becomes the sky, and Hiraṇyagarbha is understood as the cosmic intelligence (Mahat) or collective mind that animates the entire universe.',
    },
    {
      id: 2,
      name: 'Purāṇic Evolution',
      tag: 'Purāṇic Development',
      desc: 'The Purāṇas synthesize the older Vedic embryo with the creator deity Brahmā. Hiraṇyagarbha is described as emerging from the lotus growing from the navel of Garbhodakaśāyī Viṣṇu, initiating the second-tier creation (Visarga) of physical systems.',
    },
    {
      id: 3,
      name: 'Vedāntic Perspectives',
      tag: 'Interpretation',
      desc: 'In Advaita Vedānta, Hiraṇyagarbha represents the first manifestation of Saguna Brahman (Brahman with qualities) or the subtle universe. He is the cosmic soul or collective intellect that projects the world, operating at the macrocosmic level.',
    },
    {
      id: 4,
      name: 'Modern Indology',
      tag: 'Scholarly Views',
      desc: 'Academic analysis treats the Hiraṇyagarbha Sūkta as an early monotheistic or henotheistic speculation. By asking "to which god do we make offerings?", the poet questions older pantheons, seeking a singular, abstract, biological origin of all existence.',
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

/* ─── Side Panel Drawer for Connections ─────────────────────── */
function ConnectionDrawer({ open, onClose, topic }) {
  const data = {
    nasadiya: {
      title: 'Nāsadīya Sūkta',
      text: 'The Hymn of Creation (Ṛgveda 10.129). It represents the absolute beginning, preceding even Hiraṇyagarbha, asking metaphysical questions about the unmanifest void. Hiraṇyagarbha belongs to a slightly later stage where potential begins to acquire form.',
    },
    purusa: {
      title: 'Puruṣa Sūkta',
      text: 'The Hymn of the Cosmic Man (Ṛgveda 10.90). It describes creation through the metaphorical sacrifice of the cosmic giant Puruṣa. While Hiraṇyagarbha represents biological growth and unfolding, Puruṣa Sūkta describes creation as a divine sacrifice and organic division of one whole into social and cosmic layers.',
    },
    chandogya: {
      title: 'Chāndogya Upaniṣad',
      text: 'Features the famous story of the cosmic egg (Aṇḍa) incubating for a year before splitting into the silver earth and golden sky. It explains how non-being arose, turned into being, and crystallized into Hiraṇyagarbha as the active force of manifestation.',
    },
    brihadaranyaka: {
      title: 'Bṛhadāraṇyaka Upaniṣad',
      text: 'Focuses on the primordial state where the universe was unmanifested (Avyākṛta). It describes the Self appearing in the form of Puruṣa, desiring to multiply. It bridges "Tad Ekam" and "Hiraṇyagarbha" by exploring the emergence of creative consciousness.',
    },
  };

  const selected = data[topic] || { title: '', text: '' };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050504] z-[100] cursor-pointer"
          />
          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#E9E2D4] border-l border-[#C58B52]/25 shadow-2xl z-[101] p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center border-b border-[#C58B52]/10 pb-4 mb-6">
                <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52]">
                  Scriptural Connection
                </span>
                <button
                  onClick={onClose}
                  className="font-general text-[10px] text-[#0D0D0C]/40 hover:text-[#0D0D0C] transition-colors"
                >
                  [ CLOSE ]
                </button>
              </div>
              <h3 className="font-instrument text-3xl text-[#0D0D0C] mb-4">
                {selected.title}
              </h3>
              <p className="font-cormorant text-lg text-[#0D0D0C]/80 leading-relaxed font-light">
                {selected.text}
              </p>
            </div>
            <div className="font-general text-[8px] uppercase tracking-[0.2em] text-[#0D0D0C]/35">
              TATTVA Cross-Reference Engine
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─── Myth vs Scripture ──────────────────────────────────────── */
function MythVsScriptureFour() {
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
              "Hiraṇyagarbha and Brahmā are identical."
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
              While later Purāṇic literature and Vedāntic schools often equate Hiraṇyagarbha with the creator Brahmā, early Vedic scriptures keep them separate. Hiraṇyagarbha is a neuter, biological concept of a "golden embryo" representing collective potential, whereas Brahmā is a masculine, personified deity who executes secondary creation.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Main Section Export ───────────────────────────────────── */
export function Hiranyagarbha() {
  const [drawerTopic, setDrawerTopic] = useState(null);

  return (
    <div className="relative w-full bg-[#E9E2D4] pt-12">
      
      {/* ══════════════════════════════════════════════
          V.1  OPENING HERO
      ══════════════════════════════════════════════ */}
      <section className="w-full min-h-[45vh] flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <h2
            className="font-cormorant text-[#0D0D0C] leading-none mb-4 select-none"
            style={{ fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 300 }}
          >
            Hiraṇyagarbha
          </h2>
          <p className="font-instrument italic text-xl md:text-2xl text-[#C58B52] tracking-wide">
            The Golden Embryo of Creation
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          V.2  GOLDEN EMBRYO VISUAL
      ══════════════════════════════════════════════ */}
      <GoldenEmbryoVisual />

      {/* ══════════════════════════════════════════════
          V.3  NARRATIVE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <span className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52] mb-4 block">
            SECTION V
          </span>
          <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-[#0D0D0C]/75 mb-6">
            Before a tree, there is a seed. Before a child, there is an embryo. Before a civilization, there is an idea.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            The Vedic seers did not imagine the universe as a machine that was suddenly switched on. They did not picture a dramatic explosion or a structure built by a builder. Instead, they imagined creation as an organic, living process—like a cosmic embryo growing within the darkness of a womb.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            In the Ṛgveda, this golden source of light, life, and heat is called Hiraṇyagarbha. It represents the point where potential starts to take shape, incubating the structure of the cosmos before it becomes visible.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          V.4  SCRIPTURAL PRESENTATION (VERSE I)
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <VerseHiranyaDeck />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          V.5  EDITORIAL EXPLANATION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-4">Biological Metaphor over Mechanics</h4>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed mb-6">
            The Sanskrit term *Garbha* translates both to "womb" and "embryo." By prefixing it with *Hiraṇya* (golden), the seers describe a golden incubation vessel. The choice of biological imagery rather than mechanical or architecture terms highlights emergence and gradual growth.
          </p>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed">
            The universe is not constructed from parts. It is hatched from a seed. It unfolds from within itself, driven by the inner potential of the absolute source.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          V.6  INTERACTIVE EXPLORER
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <HiranyaExplorer />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          V.7  SCRIPTURAL CONNECTIONS (Expandable drawers)
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6 border-t border-b border-[#C58B52]/10 my-12">
        <Reveal>
          <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-4">
            Scriptural Connections (Click to inspect)
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: 'nasadiya', label: 'Nāsadīya Sūkta' },
              { id: 'purusa', label: 'Puruṣa Sūkta' },
              { id: 'chandogya', label: 'Chāndogya Upaniṣad' },
              { id: 'brihadaranyaka', label: 'Bṛhadāraṇyaka' },
            ].map((cross) => (
              <button
                key={cross.id}
                onClick={() => setDrawerTopic(cross.id)}
                className="py-3 border border-[#0D0D0C]/10 bg-white/20 hover:border-[#C58B52] hover:bg-[#C58B52]/5 transition-all text-center font-cormorant text-base text-[#0D0D0C] font-medium"
              >
                {cross.label}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Connection slide-out drawer */}
      <ConnectionDrawer
        open={drawerTopic !== null}
        onClose={() => setDrawerTopic(null)}
        topic={drawerTopic}
      />

      {/* ══════════════════════════════════════════════
          V.8  THINK ABOUT IT REFLECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <div className="border-l border-[#C58B52]/30 pl-6 my-6">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
              Contemplative Inquiry
            </span>
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C] leading-relaxed italic mb-4">
              Why might ancient sages have chosen an embryo instead of a machine, explosion, or object to describe creation?
            </p>
            <p className="font-cormorant text-base text-[#0D0D0C]/60 leading-relaxed">
              Biological structures imply that the end state is contained within the seed from the beginning. It frames evolution not as accretion of external parts, but as differentiation of an originally unified potential.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          V.9  MYTH VS SCRIPTURE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <MythVsScriptureFour />
      </section>

      {/* ══════════════════════════════════════════════
          V.10 TRANSITION TO NEXT SECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full border-t border-[#C58B52]/10 py-24 flex flex-col items-center text-center px-6">
        <Reveal className="max-w-2xl" y={12}>
          <p
            className="font-instrument text-[#0D0D0C]/55 leading-snug mb-2"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            The embryo becomes translucent, its potential ready to divide...
          </p>
          <p
            className="font-instrument text-[#0D0D0C] leading-snug"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            revealing the three fundamental forces that weave reality.
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
