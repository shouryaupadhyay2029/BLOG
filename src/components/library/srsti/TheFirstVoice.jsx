import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1];
const EASE_SOFT = [0.25, 0.46, 0.45, 0.94];

/* ─── Reveal wrapper ─────────────────────────────────────────── */
function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 1.4, delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Cinematic opening sentence pair ────────────────────────── */
function OpeningLine({ children, large = false }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 1.4, ease: EASE_EXPO }}
      className={`font-cormorant font-light leading-relaxed text-center ${
        large
          ? 'text-xl md:text-3xl text-[#0D0D0C]/80'
          : 'text-lg md:text-2xl text-[#0D0D0C]/55'
      }`}
      style={{ letterSpacing: '0.01em' }}
    >
      {children}
    </motion.p>
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

/* ─── EXISTENCE / NON-EXISTENCE visualization ────────────────── */
function DualityViz() {
  return (
    <div className="w-full py-16 flex flex-col items-center gap-0 select-none overflow-hidden">
      {/* The two poles */}
      <div className="flex items-center gap-12 md:gap-24 mb-10">
        <motion.span
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
          className="font-instrument text-[#0D0D0C]/30 text-xl md:text-4xl tracking-widest"
        >
          EXISTENCE
        </motion.span>

        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2, delay: 0.4, ease: EASE_EXPO }}
          className="font-cormorant text-[#C58B52] text-4xl md:text-6xl font-light"
          style={{ lineHeight: 1 }}
        >
          ?
        </motion.span>

        <motion.span
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
          className="font-instrument text-[#0D0D0C]/30 text-xl md:text-4xl tracking-widest text-right"
        >
          NON-<br />EXISTENCE
        </motion.span>
      </div>

      {/* Horizontal thin rule */}
      <motion.div
        className="w-[1px] bg-[#C58B52]/25"
        initial={{ height: 0 }}
        whileInView={{ height: 40 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: EASE_EXPO }}
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-8%' }}
        transition={{ duration: 1.2, delay: 0.3, ease: EASE_EXPO }}
        className="font-cormorant italic text-lg md:text-xl text-[#0D0D0C]/55 mt-4 text-center max-w-lg leading-relaxed"
      >
        Neither concept fully describes the primordial state.
      </motion.p>
    </div>
  );
}

/* ─── Expandable Scholar Note ────────────────────────────────── */
function ScholarNote() {
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
            How the Nāsadīya Sūkta Has Been Interpreted
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
                The Nāsadīya Sūkta (Ṛgveda 10.129) is among the most discussed hymns in Sanskrit
                literature. It has generated profoundly different readings across traditions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    school: 'Traditional Vedānta',
                    view:
                      'Commentators such as Sāyaṇa (14th century CE) interpret the hymn within a theistic framework, reading "the One" as Brahman—the Supreme Absolute from which all manifestation arises.',
                  },
                  {
                    school: 'Sāṅkhya',
                    view:
                      'The Sāṅkhya school reads the primordial state as Prakṛti in equilibrium—unmanifest material nature before the first agitation of the Guṇas. The "One" is identified with this undifferentiated matter.',
                  },
                  {
                    school: 'Modern Indology',
                    view:
                      'Scholars such as A. A. Macdonell and more recently Stephanie Jamison treat the hymn as one of the world\'s earliest examples of philosophical speculation, noting its refusal to assert any single cosmogonic certainty.',
                  },
                  {
                    school: 'Contemporary Philosophy',
                    view:
                      'Thinkers such as Wendy Doniger and B. K. Matilal have explored the hymn\'s use of negation as a philosophical method, comparing it to apophatic traditions in other world philosophies.',
                  },
                ].map((entry, i) => (
                  <div key={i} className="border-l border-[#C58B52]/25 pl-4">
                    <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52] block mb-2">
                      {entry.school}
                    </span>
                    <p className="font-cormorant text-base text-[#0D0D0C]/70 leading-relaxed">
                      {entry.view}
                    </p>
                  </div>
                ))}
              </div>
              <p className="font-cormorant text-base italic text-[#0D0D0C]/50 mt-8 border-t border-[#C58B52]/10 pt-6">
                TATTVA presents the hymn itself before any interpretive tradition. We will explore
                these readings in dedicated articles on Vedānta, Sāṅkhya, and comparative
                philosophy.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Did You Know card ──────────────────────────────────────── */
function DidYouKnow() {
  return (
    <Reveal className="my-8">
      <div className="flex gap-4 border border-[#0D0D0C]/10 p-6 bg-white/30">
        <div className="shrink-0 mt-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C58B52]" />
        </div>
        <div>
          <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#C58B52] block mb-2">
            Did You Know?
          </span>
          <p className="font-cormorant text-lg text-[#0D0D0C]/80 leading-relaxed">
            The Nāsadīya Sūkta is unusual among ancient creation hymns because its final verse
            openly questions whether anyone — including the highest divine being — fully knows how
            the universe came to be. The hymn ends not with revelation, but with a question.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ─── Main Section Export ───────────────────────────────────── */
export function TheFirstVoice() {
  return (
    <div className="relative w-full bg-[#E9E2D4]">

      {/* ══════════════════════════════════════════════
          II.1  CINEMATIC OPENING SENTENCES
      ══════════════════════════════════════════════ */}
      <section className="w-full border-t border-[#C58B52]/10">

        {/* First sentence */}
        <div className="w-full min-h-[35vh] flex items-center justify-center px-8 py-10 border-b border-[#C58B52]/8">
          <div className="max-w-3xl">
            <OpeningLine>
              The oldest surviving reflection on creation does not begin with certainty.
            </OpeningLine>
          </div>
        </div>

        {/* Second sentence */}
        <div className="w-full min-h-[35vh] flex items-center justify-center px-8 py-10">
          <div className="max-w-3xl">
            <OpeningLine large>
              It begins with a question.
            </OpeningLine>
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════════════════
          II.2  SECTION HEADING
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 pt-16 pb-10">
        <Reveal>
          <div className="w-[1px] h-12 bg-[#C58B52]/20 mb-8" />
          <span className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52] mb-4 block">
            SECTION II
          </span>
          <h2
            className="font-instrument text-[#0D0D0C] mb-2 leading-[1.05]"
            style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
          >
            The First Voice
          </h2>
          <p className="font-cormorant italic text-lg md:text-xl text-[#0D0D0C]/50 tracking-wide">
            Ṛgveda 10.129 — The Nāsadīya Sūkta
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          II.3  VERSE I — SCROLL-LINKED LAYERED PRESENTATION
      ══════════════════════════════════════════════ */}
      <ScrollLinkedVerse />

      {/* ══════════════════════════════════════════════
          II.4  EDITORIAL COMMENTARY
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-16 border-t border-[#C58B52]/10">
        <Reveal className="mb-10">
          <p className="font-cormorant text-lg md:text-xl font-light text-[#0D0D0C]/75 leading-relaxed mb-6">
            Most people expect ancient creation stories to begin with absolute certainty.
          </p>
          <p className="font-cormorant text-lg md:text-xl font-light text-[#0D0D0C] leading-relaxed mb-6">
            "In the beginning, God created the heavens and the earth."
          </p>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/65 leading-relaxed mb-6">
            But the Ṛgveda does something astonishingly different.
          </p>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/75 leading-relaxed">
            It refuses to begin with certainty. Instead, it questions the very language we use to
            discuss origins. The words existence and non-existence — the most fundamental binary in
            all of human thought — are themselves placed under examination.
          </p>
        </Reveal>

        {/* Staggered key concepts */}
        <div className="flex flex-col gap-2 mb-10 pl-4">
          {['Existence.', 'Non-existence.', 'Before.', 'After.', 'Creation.'].map((word, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: EASE_EXPO }}
              className="font-instrument text-xl md:text-3xl text-[#0D0D0C]/40"
            >
              {word}
            </motion.p>
          ))}
        </div>

        <Reveal>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed">
            Even these words, the hymn implies, may not be adequate to describe what was before
            the beginning. The Ṛṣis were not being evasive. They were being honest about the limits
            of language when applied to a state that preceded the very conditions language requires
            to function.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          II.5  EXISTENCE / NON-EXISTENCE VISUALIZATION
      ══════════════════════════════════════════════ */}
      <section className="w-full border-t border-b border-[#C58B52]/10">
        <DualityViz />
      </section>

      {/* ══════════════════════════════════════════════
          II.6  SCHOLAR NOTE & DID YOU KNOW
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-24">
        <ScholarNote />
        <DidYouKnow />
      </section>

      {/* ══════════════════════════════════════════════
          II.7  CLOSING REFLECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full border-t border-[#C58B52]/10 py-24 flex flex-col items-center text-center px-6">
        <Reveal className="max-w-2xl" y={12}>
          <p
            className="font-instrument text-[#0D0D0C]/55 leading-snug mb-2"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            If existence and non-existence cannot fully explain the beginning…
          </p>
          <p
            className="font-instrument text-[#0D0D0C] leading-snug"
            style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
          >
            what can?
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

        {/* "The One" teaser — barely visible, growing in presence */}
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
            The One
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

function ScrollLinkedVerse() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      label: 'Sanskrit',
      title: 'Devanāgarī',
      content: (
        <div className="text-center py-6 md:py-10">
          <p
            className="font-cormorant text-[#0D0D0C] leading-[2.0] font-light"
            style={{ fontSize: 'clamp(20px, 3.2vw, 34px)' }}
          >
            नासदासीन्नो सदासीत्तदानीं
            <br />
            नासीद्रजो नो व्योमा परो यत् ।
            <br />
            किमावरीवः कुह कस्य शर्मन्न
            <br />
            म्भः किमासीद्गहनं गभीरम् ॥
          </p>
        </div>
      )
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
            nāsad āsīn no sad āsīt tadānīṃ
            <br />
            nāsīd rajo no vyomā paro yat |
            <br />
            kim āvarīvaḥ kuha kasya śarmann
            <br />
            ambhaḥ kim āsīd gahanaṃ gabhīram ||
          </p>
        </div>
      )
    },
    {
      id: 2,
      label: 'Word by Word',
      title: 'Term Analysis (Hover for meaning)',
      content: (
        <div className="py-4 max-w-2xl mx-auto">
          <div className="flex flex-wrap gap-x-3 gap-y-3 justify-center">
            {[
              { word: 'nāsat', meaning: 'not non-existent' },
              { word: 'āsīt', meaning: 'was (past tense of "to be")' },
              { word: 'no', meaning: 'nor' },
              { word: 'sat', meaning: 'existent / being' },
              { word: 'tadānīm', meaning: 'at that time / then' },
              { word: 'nāsīt', meaning: 'was not' },
              { word: 'rajaḥ', meaning: 'air-space / atmosphere / material realm' },
              { word: 'vyomā', meaning: 'sky / firmament / heaven' },
              { word: 'paro yat', meaning: 'beyond which' },
              { word: 'kim', meaning: 'what?' },
              { word: 'āvarīvaḥ', meaning: 'stirred / enveloped / covered (intensive)' },
              { word: 'kuha', meaning: 'where?' },
              { word: 'kasya', meaning: 'whose?' },
              { word: 'śarman', meaning: 'shelter / protection / refuge' },
              { word: 'ambhaḥ', meaning: 'water / primal matter' },
              { word: 'gahanam', meaning: 'deep / impenetrable / unfathomable' },
              { word: 'gabhīram', meaning: 'profound / bottomless' },
            ].map((w, i) => (
              <WordChip key={i} word={w.word} meaning={w.meaning} />
            ))}
          </div>
        </div>
      )
    },
    {
      id: 3,
      label: 'Literal Translation',
      title: 'Word-for-Word Literal Prose',
      content: (
        <div className="text-center py-6 md:py-10 max-w-2xl mx-auto">
          <p className="font-cormorant text-lg md:text-xl font-light text-[#0D0D0C]/80 leading-relaxed italic">
            "Not non-existent was it, nor existent then.
            There was not the realm of space, nor the sky beyond.
            What stirred? Where? Under whose shelter?
            Was water there, the deep unfathomable abyss?"
          </p>
        </div>
      )
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
            "In the beginning, there was neither existence nor non-existence.
            Neither the realm of space nor the heavens beyond.
            What moved? And where? Who sheltered it?
            Was there water — fathomless, unfathomable?"
          </p>
          <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52]/60 block mt-3">
            — Ṛgveda 10.129.1
          </span>
        </div>
      )
    }
  ];

  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-6">
      {/* Container Card */}
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
                  layoutId="activeVerseTabLine"
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
    </section>
  );
}

