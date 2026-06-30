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

/* ─── Faint Golden Point Reacting to Scroll ─────────────────── */
function PulsingCosmicPoint() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Scale point size and opacity slightly as the user scrolls through the section
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.8, 1.4, 0.8]);
  const glowOpacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.2, 0.6, 0.2]);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center py-20 relative select-none"
    >
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Core point */}
        <motion.div
          style={{ scale }}
          className="w-2.5 h-2.5 rounded-full bg-[#C58B52] shadow-[0_0_10px_#C58B52]"
        />
        {/* Pulsing ring outer glow */}
        <motion.div
          style={{ scale, opacity: glowOpacity }}
          animate={{
            boxShadow: [
              '0 0 15px rgba(197, 139, 82, 0.2)',
              '0 0 35px rgba(197, 139, 82, 0.5)',
              '0 0 15px rgba(197, 139, 82, 0.2)',
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full border border-[#C58B52]/20 pointer-events-none"
        />
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
function VerseTwoDeck() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      label: 'Sanskrit',
      title: 'Verse II — Devanāgarī',
      content: (
        <div className="text-center py-6 md:py-10">
          <p
            className="font-cormorant text-[#0D0D0C] leading-[2.0] font-light"
            style={{ fontSize: 'clamp(20px, 3.2vw, 34px)' }}
          >
            न मृत्युरासीदमृतं न तर्हि
            <br />
            न रात्रिया अह्न आसीत्प्रकेतः ।
            <br />
            आनीदवातं स्वधया तदेकं
            <br />
            तस्माद्धान्यन्न परः किंचनास ॥
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
            na mṛtyur āsīd amṛtaṃ na tarhi
            <br />
            na rātriyā ahna āsīt praketaḥ |
            <br />
            ānīd avātaṃ svadhayā tad ekam
            <br />
            tasmād dhānyan na paraḥ kiṃ canāsa ||
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
              { word: 'na', meaning: 'not / neither' },
              { word: 'mṛtyuḥ', meaning: 'death' },
              { word: 'āsīt', meaning: 'was' },
              { word: 'amṛtam', meaning: 'immortality / deathlessness' },
              { word: 'tarhi', meaning: 'then / at that time' },
              { word: 'rātriyāḥ', meaning: 'of night' },
              { word: 'ahnaḥ', meaning: 'of day' },
              { word: 'praketaḥ', meaning: 'beacon / indicator / distinction' },
              { word: 'ānīt', meaning: 'breathed / vibrated' },
              { word: 'avātam', meaning: 'breathless / without air' },
              { word: 'svadhayā', meaning: 'by its own power / self-sustaining force' },
              { word: 'tat', meaning: 'that' },
              { word: 'ekam', meaning: 'one' },
              { word: 'tasmāt', meaning: 'from that / than that' },
              { word: 'ha', meaning: 'indeed / surely' },
              { word: 'anyat', meaning: 'other' },
              { word: 'na', meaning: 'not' },
              { word: 'paraḥ', meaning: 'beyond / supreme' },
              { word: 'kiṃ cana', meaning: 'anything whatsoever' },
              { word: 'āsa', meaning: 'existed / was' },
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
            "Neither death was there nor immortality then.
            No sign was there of night or of day.
            Breathed breathless by its own self-sustaining power, That One.
            Other than that, there was nothing whatsoever beyond."
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
            "There was neither death nor immortality then,
            No beacon of night, no boundary of day.
            Breathed, without breath, by its own sheer power, That One.
            Beyond it, nothing else existed."
          </p>
          <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52]/60 block mt-3">
            — Ṛgveda 10.129.2
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
                layoutId="activeVerseTwoTabLine"
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

/* ─── Interpretation Explorer ───────────────────────────────── */
function InterpretationExplorer() {
  const [activeTab, setActiveTab] = useState(0);

  const perspectives = [
    {
      id: 0,
      name: 'Vedic Reading',
      tag: 'Scripture',
      desc: 'The original context treats "Tad Ekam" as an uncharacterized source, deliberately refusing to attribute gender, form, or anthropomorphic qualities. It is described neutrally as "That One"—the raw source code of existence before differentiation.',
    },
    {
      id: 1,
      name: 'Advaita Vedānta',
      tag: 'Interpretation',
      desc: 'Non-dualistic philosophy reads "Tad Ekam" as Nirguṇa Brahman—the ultimate, qualityless, unmanifest consciousness. In this view, "breathing without air" refers to consciousness remaining self-contained and active without any subject-object duality.',
    },
    {
      id: 2,
      name: 'Viśiṣṭādvaita',
      tag: 'Interpretation',
      desc: 'Qualified non-dualism identifies "The One" as the primordial, supreme person (Para-Brahman or Nārāyaṇa) in a state of absolute equilibrium. All souls and matter exist in a potential state within Him, waiting to unfold.',
    },
    {
      id: 3,
      name: 'Dvaita',
      tag: 'Later Philosophy',
      desc: 'Dualistic traditions interpret "Tad Ekam" as the supreme personal deity, distinct from matter and individual souls. The One is the independent agent who remains untouched by the dissolution (Pralaya) that destroys everything else.',
    },
    {
      id: 4,
      name: 'Modern Academic',
      tag: 'Academic Perspective',
      desc: 'Indologists point out that the neuter phrase "Tad Ekam" represents a transitional phase in early Indian thought. It moves away from the multi-deity mythology of the early hymns towards the monistic, metaphysical systems later crystallized in the Upaniṣads.',
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

/* ─── Scholar Note ──────────────────────────────────────────── */
function ScholarNoteTwo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#C58B52]/25 bg-[#C58B52]/3 my-8" style={{ background: 'rgba(197,139,82,0.025)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#C58B52]/5 transition-colors duration-300 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#C58B52]">
            Scholar Note
          </span>
          <span className="font-cormorant text-lg text-[#0D0D0C]">
            Tad Ekam vs Later Ontological Concepts
          </span>
        </div>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.4, ease: EASE_SOFT }}
          className="text-[#C58B52] shrink-0 ml-6"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE_EXPO }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-[#C58B52]/15 pt-4">
              <p className="font-cormorant text-lg text-[#0D0D0C]/75 leading-relaxed mb-6">
                To prevent collapsing ancient layers of thought into a singular theological idea,
                it is helpful to map how "The One" relates to later philosophical formulations:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    concept: 'Tad Ekam (तदेकम्)',
                    source: 'Ṛgveda 10.129',
                    desc: 'A non-anthropomorphic, gender-neutral concept of absolute primordial state. It breathes without air, possesses self-contained potential (svadhā), and precedes existence and non-existence.',
                  },
                  {
                    concept: 'Nirguṇa Brahman',
                    source: 'Upaniṣads & Vedānta',
                    desc: 'The qualityless Ultimate Reality. It represents transcendental consciousness that is unchanging, infinite, and attribute-free. It does not perform active creation directly.',
                  },
                  {
                    concept: 'Īśvara / Saguna Brahman',
                    source: 'Sūtras & Purāṇas',
                    desc: 'The personal creator deity possessing attributes (attributes/qualities). Unlike Tad Ekam, Īśvara represents the conscious agent who actively projects and governs the material universe.',
                  },
                ].map((entry, i) => (
                  <div key={i} className="border-l border-[#C58B52]/25 pl-4">
                    <span className="font-instrument text-base text-[#C58B52] block font-semibold mb-1">
                      {entry.concept}
                    </span>
                    <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#0D0D0C]/40 block mb-2">
                      {entry.source}
                    </span>
                    <p className="font-cormorant text-base text-[#0D0D0C]/70 leading-relaxed">
                      {entry.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Myth vs Scripture Card ─────────────────────────────────── */
function MythVsScriptureTwo() {
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
              "The Ṛgveda explicitly states Viṣṇu created the universe."
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
              The Nāsadīya Sūkta deliberately uses universal, non-sectarian terminology like "Tad Ekam" (That One). Rather than attributing creation to a specific personal deity like Viṣṇu, Śiva, or Brahmā, it represents a state where even deities themselves did not yet exist (as subsequent verses state they came later in the cycle).
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Main Section Export ───────────────────────────────────── */
export function TadEkam() {
  return (
    <div className="relative w-full bg-[#E9E2D4] pt-12">
      
      {/* ══════════════════════════════════════════════
          III.1  OPENING HERO SILENCE
      ══════════════════════════════════════════════ */}
      <section className="w-full min-h-[45vh] flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <h2
            className="font-cormorant text-[#0D0D0C] leading-none mb-4 select-none"
            style={{ fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 300 }}
          >
            Tad Ekam
          </h2>
          <p className="font-instrument italic text-xl md:text-2xl text-[#C58B52] tracking-wide">
            "The One"
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          III.2  COSMIC POINT VISUALIZATION
      ══════════════════════════════════════════════ */}
      <PulsingCosmicPoint />

      {/* ══════════════════════════════════════════════
          III.3  NARRATIVE REFLECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <span className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52] mb-4 block">
            SECTION III
          </span>
          <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-[#0D0D0C]/75 mb-6">
            Imagine standing before the first sunrise.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            You have no language, no science, no religion, no philosophy. How would you describe the source of everything? How would you define the boundary between what is and what is not?
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            The Ṛṣis chose extraordinary restraint. They did not assign a name. They did not describe a form. They did not categorize it as a deity, a force, or an concept.
          </p>
          <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-[#0D0D0C] italic">
            They simply said: That One.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          III.4  SCRIPTURAL PRESENTATION (VERSE II)
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <VerseTwoDeck />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          III.5  EDITORIAL EXPLANATION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-4">The Restraint of Negation</h4>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed mb-6">
            The phrase "Tad Ekam" is intentionally minimal. By choosing the neuter pronoun "Tad" (That) and the number "Ekam" (One), the Ṛgveda avoids limiting the ultimate source with premature definitions. The moment a name or specific quality is given, boundaries are drawn.
          </p>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed">
            Later philosophical systems and schools of Vedānta look back at this foundational verse to build their structures. Yet, they interpret it in radically different directions.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          III.6  INTERPRETATION EXPLORER
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <InterpretationExplorer />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          III.7  THINK ABOUT IT REFLECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <div className="border-l border-[#C58B52]/30 pl-6 my-6">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
              Contemplative Inquiry
            </span>
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C] leading-relaxed italic mb-4">
              Why would one of humanity's oldest philosophical texts intentionally avoid giving a detailed description of the ultimate source?
            </p>
            <p className="font-cormorant text-base text-[#0D0D0C]/60 leading-relaxed">
              Perhaps it was a realization that any description of the absolute before creation would require qualities (like shape, color, location) that only come into existence *after* creation begins.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          III.8  SCHOLAR NOTE & MYTH VS SCRIPTURE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <ScholarNoteTwo />
        <MythVsScriptureTwo />
      </section>

      {/* ══════════════════════════════════════════════
          III.9  TRANSITION TO NEXT SECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full border-t border-[#C58B52]/10 py-24 flex flex-col items-center text-center px-6">
        <Reveal className="max-w-2xl" y={12}>
          <p
            className="font-instrument text-[#0D0D0C]/55 leading-snug mb-2"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            If "The One" existed before everything…
          </p>
          <p
            className="font-instrument text-[#0D0D0C] leading-snug"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            how did the first movement toward creation begin?
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

        {/* "The First Stirring" teaser — barely visible, growing in presence */}
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
            The First Stirring
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
