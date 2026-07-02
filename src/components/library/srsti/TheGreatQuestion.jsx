import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1];

/* ─── The five scroll-trigger questions ─────────────────────── */
const QUESTIONS = [
  'What existed before the universe?',
  'Could time exist before time itself?',
  'Can there be space before space?',
  'Can something emerge from absolute nothing?',
  'What does "before" even mean if time had not yet begun?',
];

/* ─── Civilisations timeline data ───────────────────────────── */
const CIVILISATIONS = [
  {
    name: 'Egypt',
    period: 'c. 3100 BCE',
    description:
      'Egyptian cosmogony described a primordial ocean of infinite darkness called Nun, from which the creator god Atum emerged and began the act of creation through speech.',
  },
  {
    name: 'Mesopotamia',
    period: 'c. 2500 BCE',
    description:
      'The Babylonian Enuma Eliš tells of two primordial waters—Apsu (fresh) and Tiamat (salt)—whose mingling gave rise to the first gods and, eventually, the heavens and the earth.',
  },
  {
    name: 'Greece',
    period: 'c. 700 BCE',
    description:
      'Hesiod\'s Theogony describes Chaos as the first thing to exist—a gaping void from which Gaia (Earth), Tartarus, and Eros gradually emerged.',
  },
  {
    name: 'China',
    period: 'c. 300 BCE',
    description:
      'Daoist cosmogony describes the Dao (the Way) as the formless source from which the One emerged, then the Two, then the Ten Thousand Things—a process of unfolding from the unnameable.',
  },
  {
    name: 'Modern Cosmology',
    period: '20th Century CE',
    description:
      'Contemporary physics posits that the universe began in an extremely hot, dense state approximately 13.8 billion years ago. What existed "before"—or whether "before" even applies—remains an open question.',
  },
  {
    name: 'Vedic India',
    period: 'c. 1500 BCE onward',
    description:
      'The Ṛgveda opens by questioning whether existence or non-existence can adequately describe the primordial state. It does not assert certainty; it enshrines the question itself as the beginning of inquiry.',
  },
];

/* ─── Single scroll-pinned question ────────────────────────── */
function ScrollQuestion({ question }) {
  return (
    <section className="w-full py-12 md:py-20 flex items-center justify-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-10% 0px -10% 0px' }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
        className="font-instrument text-center text-[#0D0D0C] leading-snug select-none"
        style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', maxWidth: '720px' }}
      >
        {question}
      </motion.p>
    </section>
  );
}

/* ─── Civilisation card ─────────────────────────────────────── */
function CivilisationCard({ civ }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col gap-2 cursor-default group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent bar */}
      <motion.div
        className="h-[1px] bg-[#C58B52]/30 w-full origin-left"
        animate={{ scaleX: hovered ? 1 : 0.3, backgroundColor: hovered ? 'rgba(197,139,82,0.7)' : 'rgba(197,139,82,0.3)' }}
        transition={{ duration: 0.5, ease: EASE_EXPO }}
      />

      {/* Name */}
      <h4
        className="font-instrument text-xl transition-colors duration-500"
        style={{ color: hovered ? '#C58B52' : '#0D0D0C' }}
      >
        {civ.name}
      </h4>

      {/* Period */}
      <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#0D0D0C]/40">
        {civ.period}
      </span>

      {/* Description — reveals on hover */}
      <motion.p
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, height: hovered ? 'auto' : 0 }}
        transition={{ duration: 0.5, ease: EASE_EXPO }}
        className="font-cormorant text-base leading-relaxed text-[#0D0D0C]/70 overflow-hidden"
      >
        {civ.description}
      </motion.p>
    </div>
  );
}

/* ─── Main Section Export ───────────────────────────────────── */
export function TheGreatQuestion() {
  return (
    <div className="relative w-full bg-[#E9E2D4]">
      {/* ── Subtle grain overlay identical to other TATTVA pages ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[9998] noise-fine"
        style={{ mixBlendMode: 'multiply', opacity: 0.13 }}
      />

      {/* ══════════════════════════════════════════════
          I.1  OPENING — THE GREAT QUESTION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <span className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52] mb-4 block">
            SECTION I
          </span>

          <h2
            className="font-instrument text-[#0D0D0C] mb-6 leading-[1.05]"
            style={{ fontSize: 'clamp(36px, 5.5vw, 68px)' }}
          >
            The Great Question
          </h2>

          <div className="w-[1px] h-10 bg-[#C58B52]/25 mb-8" />

          <p className="font-cormorant text-lg md:text-xl font-light leading-relaxed text-[#0D0D0C]/75 mb-4">
            Every civilization has looked toward the heavens and asked the same question.
          </p>
          <p className="font-cormorant text-lg md:text-xl font-light leading-relaxed text-[#0D0D0C]/75 mb-4">
            Where did all of this come from?
          </p>
          <p className="font-cormorant text-base md:text-lg font-light leading-relaxed text-[#0D0D0C]/65 mb-4">
            The stars. The galaxies. The oceans. Life. Consciousness. Even the laws that govern
            reality itself.
          </p>
          <p className="font-cormorant text-lg md:text-xl font-light leading-relaxed text-[#0D0D0C]/80">
            But hidden inside that familiar question is a deeper one that most people never pause
            to ask.
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          I.2  SCROLL QUESTIONS — one per viewport
      ══════════════════════════════════════════════ */}
      <div className="w-full border-t border-[#C58B52]/10">
        {QUESTIONS.map((q, i) => (
          <div key={i} className="border-b border-[#C58B52]/10">
            <ScrollQuestion question={q} />
          </div>
        ))}
      </div>

      {/* ══════════════════════════════════════════════
          I.3  MENTAL EXPERIMENT
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <span className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52] mb-4 block">
            A THOUGHT EXPERIMENT
          </span>
          <h3 className="font-instrument text-3xl md:text-4xl text-[#0D0D0C] mb-6 leading-tight">
            Picture absolute nothingness.
          </h3>
        </motion.div>

        {/* Instruction list — staggered reveal */}
        <div className="flex flex-col gap-3 mb-10 pl-0">
          {[
            'Close your eyes.',
            'Remove the Earth.',
            'Remove the stars.',
            'Remove every galaxy.',
            'Remove every atom.',
            'Remove light.',
            'Remove darkness.',
            'Remove empty space.',
            'Remove time.',
            'Remove even the idea of "before."',
          ].map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.8, delay: i * 0.04, ease: EASE_EXPO }}
              className="font-cormorant text-lg md:text-xl font-light text-[#0D0D0C]/75 flex items-start gap-3"
            >
              <span className="text-[#C58B52]/40 shrink-0 mt-1 font-general text-[10px] tracking-widest">
                ·
              </span>
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 1.0, ease: EASE_EXPO }}
          className="border-t border-[#C58B52]/20 pt-6"
        >
          <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C] leading-relaxed mb-4 italic">
            Can you still imagine something?
          </p>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed">
            Or have you reached the outer edge of what human thought can contain? Most people,
            attempting this exercise honestly, find that they cannot truly imagine pure nothingness.
            Something always lingers. Some faint residue of awareness. Some sense of a space in
            which emptiness exists.
          </p>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed mt-4">
            That residue — that irreducible remainder — is exactly where ancient Indian philosophy
            begins its inquiry.
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          I.4  MISCONCEPTION CALLOUT
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="border border-[#C58B52]/30 bg-[#C58B52]/4 p-8 md:p-10 relative"
          style={{ background: 'rgba(197,139,82,0.04)' }}
        >
          {/* Decorative corner */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#C58B52]/50" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#C58B52]/50" />

          <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block">
            A COMMON MISCONCEPTION
          </span>
          <p className="font-cormorant text-lg md:text-xl font-light text-[#0D0D0C] leading-relaxed mb-4">
            Most people imagine creation as something appearing inside empty space — like an object
            placed into a room.
          </p>
          <p className="font-cormorant text-base md:text-lg font-light text-[#0D0D0C]/70 leading-relaxed">
            But according to many Hindu philosophical traditions, even empty space — the void
            itself — is a part of creation. Space did not pre-exist the universe; it arose with it.
            This is one of the reasons ancient Indian cosmology asks a fundamentally different
            question from many other origin narratives. It does not begin by asking what filled the
            emptiness. It begins by asking what the emptiness itself emerged from.
          </p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          I.5  HUMANITY'S SEARCH — civilisation timeline
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-5xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mb-10"
        >
          <span className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52] mb-4 block">
            HUMANITY'S SEARCH
          </span>
          <h3 className="font-instrument text-3xl md:text-4xl text-[#0D0D0C] leading-tight mb-4">
            Every culture began here.
          </h3>
          <p className="font-cormorant text-lg font-light text-[#0D0D0C]/65 leading-relaxed max-w-2xl">
            The question of origins is not a modern one, nor is it unique to any single tradition.
            Across every civilisation that left written records, the same inquiry appears.{' '}
            <em>Hover over any tradition below.</em>
          </p>
        </motion.div>

        {/* Grid of cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
          {CIVILISATIONS.map((civ, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 1.0, delay: i * 0.07, ease: EASE_EXPO }}
            >
              <CivilisationCard civ={civ} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          I.6  CLOSING — TRANSITION TO NASADIYA
      ══════════════════════════════════════════════ */}
      <section className="w-full border-t border-[#C58B52]/15 py-24 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
          className="max-w-2xl"
        >
          <p
            className="font-instrument text-[#0D0D0C]/75 leading-relaxed mb-0"
            style={{ fontSize: 'clamp(22px, 3vw, 38px)' }}
          >
            Over three thousand years ago…
          </p>
          <p
            className="font-instrument text-[#0D0D0C] leading-relaxed mt-1"
            style={{ fontSize: 'clamp(22px, 3vw, 38px)' }}
          >
            the Ṛṣis asked the same question.
          </p>
          <p
            className="font-instrument text-[#0D0D0C]/50 leading-relaxed mt-2"
            style={{ fontSize: 'clamp(18px, 2.5vw, 30px)' }}
          >
            But instead of rushing toward certainty…
          </p>
          <p
            className="font-instrument text-[#C58B52] leading-relaxed mt-1"
            style={{ fontSize: 'clamp(18px, 2.5vw, 30px)' }}
          >
            they began with doubt.
          </p>
        </motion.div>

        {/* Scroll invitation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: EASE_EXPO }}
          className="flex flex-col items-center gap-2 mt-12"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="text-[#C58B52]/50 text-xl"
          >
            ↓
          </motion.div>
          <span className="font-general text-[9px] uppercase tracking-[0.45em] text-[#0D0D0C]/30">
            Scroll to hear the oldest surviving reflection on creation
          </span>
        </motion.div>
      </section>
    </div>
  );
}
