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

/* ─── Scroll-Driven Primordial Ripple Visual ────────────────── */
function CosmicRipple() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Calculate ripple scale and opacity linked directly to scroll progress
  // Ripple starts small and thin, expands outward and fades away
  const scale = useTransform(scrollYProgress, [0.2, 0.6], [0.8, 3.5]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.6], [0, 0.4, 0]);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center py-24 relative select-none"
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Core point from previous section */}
        <div className="w-2.5 h-2.5 rounded-full bg-[#C58B52] z-10" />

        {/* Dynamic expanding ripple */}
        <motion.div
          style={{ scale, opacity }}
          className="absolute w-24 h-24 rounded-full border border-[#C58B52]/40 pointer-events-none"
        />

        {/* Faint secondary ripple */}
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0.25, 0.65], [0.8, 3.2]),
            opacity: useTransform(scrollYProgress, [0.25, 0.4, 0.65], [0, 0.25, 0]),
          }}
          className="absolute w-24 h-24 rounded-full border border-[#C58B52]/20 border-dashed pointer-events-none"
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
function VerseThreeDeck() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      label: 'Sanskrit',
      title: 'Verse IV — Devanāgarī',
      content: (
        <div className="text-center py-6 md:py-10">
          <p
            className="font-cormorant text-[#0D0D0C] leading-[2.0] font-light"
            style={{ fontSize: 'clamp(20px, 3.2vw, 34px)' }}
          >
            कामस्तदग्रे समवर्तताधि
            <br />
            मनसो रेत: प्रथमं यदासीत् ।
            <br />
            सतो बन्धुमसति निरविन्दन्
            <br />
            हृदि प्रतीष्या कवयो मनीषा ॥
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
            kāmas tad agre sam avartatādhi
            <br />
            manaso retaḥ prathamaṃ yad āsīt |
            <br />
            sato bandhum asati nir avindan
            <br />
            hṛdi pratīṣyā kavayo manīṣā ||
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
              { word: 'kāmaḥ', meaning: 'desire / creative intent / will' },
              { word: 'tat', meaning: 'that / there' },
              { word: 'agre', meaning: 'in the beginning / at first' },
              { word: 'sam avartata', meaning: 'arose / manifested' },
              { word: 'adhi', meaning: 'upon / over' },
              { word: 'manasaḥ', meaning: 'of the mind' },
              { word: 'retaḥ', meaning: 'seed / germ / primal energy' },
              { word: 'prathamam', meaning: 'first' },
              { word: 'yad', meaning: 'which' },
              { word: 'āsīt', meaning: 'was' },
              { word: 'sataḥ', meaning: 'of the existent / of being' },
              { word: 'bandhum', meaning: 'bond / relation / kinship' },
              { word: 'asati', meaning: 'in the non-existent / in non-being' },
              { word: 'nir avindan', meaning: 'discovered / found' },
              { word: 'hṛdi', meaning: 'in the heart / within the core' },
              { word: 'pratīṣyā', meaning: 'having searched / looking inside' },
              { word: 'kavayaḥ', meaning: 'poets / sages / seers' },
              { word: 'manīṣā', meaning: 'by wisdom / through intellect' },
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
            "Desire arose in the beginning upon that,
            which was the first seed of mind.
            Sages, searching in their hearts with wisdom,
            found the bond of the existent in the non-existent."
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
            "Then, in the beginning, creative intent arose,
            the first seed and quickening germ of mind.
            Seers, looking deep within their hearts with wisdom,
            found the secret thread binding what is to what is not."
          </p>
          <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52]/60 block mt-3">
            — Ṛgveda 10.129.4
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
                layoutId="activeVerseThreeTabLine"
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

/* ─── Scriptural Comparison Cards ───────────────────────────── */
function ScripturalComparison() {
  const [activeTab, setActiveTab] = useState(0);

  const traditions = [
    {
      id: 0,
      name: 'Ṛgveda Context',
      tag: 'Scripture',
      desc: 'In the original Vedic text, Kāma represents the cosmic spark of desire or creative volition. It is not personal or emotional, but the structural bridge (bandhu) connecting the unmanifest (asat) to the manifest (sat) through the mind.',
    },
    {
      id: 1,
      name: 'Upaniṣadic Views',
      tag: 'Interpretation',
      desc: 'The Upaniṣads (such as Bṛhadāraṇyaka) expand on this by stating that the absolute originally felt alone and desired to multiply ("May I become many"). Desire is thus framed as the metaphysical driver behind cosmic diversity.',
    },
    {
      id: 2,
      name: 'Advaita Vedānta',
      tag: 'Later Philosophy',
      desc: 'Non-dualists interpret Kāma here as the first movement of Māyā (illusory power). It is the projection of creative consciousness that creates the appearance of duality without changing the true underlying nature of Brahman.',
    },
    {
      id: 3,
      name: 'Sāṅkhya Dualism',
      tag: 'Later Philosophy',
      desc: 'Sāṅkhya replaces divine desire with the inherent teleology of nature (Prakṛti). Manifestation begins when the perfect equilibrium of the three qualities (Guṇas) is disturbed, driven by the structural need to serve Puruṣa (consciousness).',
    },
    {
      id: 4,
      name: 'Purāṇic Myth',
      tag: 'Later Philosophy',
      desc: 'Later Purāṇic mythology personifies this principle as Kāmadeva (the god of desire). However, philosophers strictly distinguish this mythological figure, who uses flower arrows to spark emotional desires, from the primordial cosmic intent of the Vedas.',
    },
  ];

  return (
    <div className="w-full my-8">
      {/* Tab Selectors */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        {traditions.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-4 py-3 border text-left transition-all duration-300 flex flex-col justify-between min-h-[72px] ${
              activeTab === t.id
                ? 'border-[#C58B52] bg-[#C58B52]/5'
                : 'border-[#0D0D0C]/10 bg-white/20 hover:border-[#0D0D0C]/30'
            }`}
          >
            <span
              className={`font-general text-[8px] uppercase tracking-[0.2em] ${
                activeTab === t.id ? 'text-[#C58B52]' : 'text-[#0D0D0C]/40'
              }`}
            >
              {t.tag}
            </span>
            <span className="font-instrument text-xs text-[#0D0D0C] font-medium leading-tight">
              {t.name}
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
                {traditions[activeTab].tag}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#C58B52]/40" />
              <span className="font-general text-[10px] uppercase tracking-[0.15em] text-[#0D0D0C]/60">
                {traditions[activeTab].name}
              </span>
            </div>
            <p className="font-cormorant text-lg md:text-xl text-[#0D0D0C]/80 leading-relaxed font-light">
              {traditions[activeTab].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Myth vs Scripture Card ─────────────────────────────────── */
function MythVsScriptureThree() {
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
              "The first thing created in cosmic history was matter."
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
              Vedic and subsequent philosophical models uniformly describe subtle metaphysical principles—such as *intent* (Kāma), *mind* (Manas), *heat/incubation* (Tapas), or *intellect* (Mahat)—manifesting prior to the crystallization of gross physical matter (Bhūta).
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Main Section Export ───────────────────────────────────── */
export function TheFirstStirring() {
  return (
    <div className="relative w-full bg-[#E9E2D4] pt-12">
      
      {/* ══════════════════════════════════════════════
          IV.1  OPENING Sanskrit Words
      ══════════════════════════════════════════════ */}
      <section className="w-full min-h-[45vh] flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <h2
            className="font-cormorant text-[#0D0D0C] leading-none mb-4 select-none"
            style={{ fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 300 }}
          >
            काम
          </h2>
          <p className="font-instrument italic text-xl md:text-2xl text-[#C58B52] tracking-wide">
            Kāma
          </p>
          <span className="font-general text-[8px] uppercase tracking-[0.4em] text-[#0D0D0C]/40 block mt-2">
            "The First Desire"
          </span>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IV.2  PRIMORDIAL RIPPLE VISUALIZATION
      ══════════════════════════════════════════════ */}
      <CosmicRipple />

      {/* ══════════════════════════════════════════════
          IV.3  NARRATIVE SECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <span className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52] mb-4 block">
            SECTION IV
          </span>
          <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-[#0D0D0C]/75 mb-6">
            Every action begins with an intention.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            Before an architect builds a temple, there is an idea. Before a sculptor carves stone, there is imagination. Before a poem is written, there is inspiration. Without that initial quickening, the world remains inert.
          </p>
          <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/70 mb-6">
            The Ṛṣis, looking at the stillness of the unmanifest universe, asked: Could creation itself also have begun with an inner impulse? A subtle shift from static potential into active will?
          </p>
          <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C] italic">
            This first stirring they named Kāma—primordial desire.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IV.4  VERSE DECK (VERSE IV)
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-6">
        <Reveal>
          <VerseThreeDeck />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IV.5  EDITORIAL EXPLANATION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-4">Intentional Emergence</h4>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed mb-6">
            The Kāma described in the Nāsadīya Sūkta is not emotional or biological desire. It is the metaphysical *will to exist* and *will to manifest*. It represents the bridge between non-being and being, which the seers located "within their hearts through wisdom."
          </p>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed">
            This distinguishes the cosmological concept of Vedic Kāma from later cultural personifications or purely physical ideas of desire, framing the universe's origin as fundamentally mental or intentional.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IV.6  SCRIPTURAL COMPARISON
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <ScripturalComparison />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IV.7  THINK ABOUT IT REFLECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <Reveal>
          <div className="border-l border-[#C58B52]/30 pl-6 my-6">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
              Contemplative Inquiry
            </span>
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C] leading-relaxed italic mb-4">
              If every creation begins with intention... what does that suggest about the universe itself?
            </p>
            <p className="font-cormorant text-base text-[#0D0D0C]/60 leading-relaxed">
              If intention precedes matter, it implies the cosmos is not a random collision of particles, but the expression of a primordial consciousness seeking self-discovery.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          IV.8  MYTH VS SCRIPTURE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12">
        <MythVsScriptureThree />
      </section>

      {/* ══════════════════════════════════════════════
          IV.9  TRANSITION
      ══════════════════════════════════════════════ */}
      <section className="w-full border-t border-[#C58B52]/10 py-24 flex flex-col items-center text-center px-6">
        <Reveal className="max-w-2xl" y={12}>
          <p
            className="font-instrument text-[#0D0D0C]/55 leading-snug mb-2"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            As the cosmic ripple expands, potential quickens...
          </p>
          <p
            className="font-instrument text-[#0D0D0C] leading-snug"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            incubating the spark of visible form.
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

        {/* "The Golden Embryo" teaser */}
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
            The Golden Embryo
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
