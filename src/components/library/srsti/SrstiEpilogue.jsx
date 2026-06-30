import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1];

function Reveal({ children, delay = 0, y = 12, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 1.2, delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.div>
  );
}

/* ─── TATTVA Knowledge Graph Map ────────────────────────────── */
function KnowledgeMap() {
  const nodes = [
    { label: 'Time', active: true, desc: 'Epochs & Kalpas' },
    { label: 'Structure', active: true, desc: 'Cosmic Architecture' },
    { label: 'Creation', current: true, active: true, desc: 'The Sṛṣṭi Unfolding' },
    { label: 'Pralaya', active: false, desc: 'Cosmic Dissolution' },
    { label: 'Karma', active: false, desc: 'Action & Balance' },
    { label: 'Rebirth', active: false, desc: 'Cycle of Transmigration' },
    { label: 'Mokṣa', active: false, desc: 'Absolute Liberation' },
  ];

  return (
    <div className="w-full py-8 border-t border-[#C58B52]/10 mt-16 select-none">
      <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#C58B52] block text-center mb-8">
        TATTVA Cosmology & Philosophy Knowledge System
      </span>

      <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 md:gap-2 max-w-4xl mx-auto px-4">
        {nodes.map((n, idx) => (
          <React.Fragment key={idx}>
            {/* Node */}
            <div
              className={`p-4 border text-center transition-all duration-300 w-full md:w-32 flex flex-col justify-between min-h-[80px] ${
                n.current
                  ? 'border-[#C58B52] bg-[#C58B52]/10 shadow-[0_0_12px_rgba(197,139,82,0.2)]'
                  : n.active
                  ? 'border-[#0D0D0C]/20 bg-white/20'
                  : 'border-[#0D0D0C]/5 bg-transparent opacity-30'
              }`}
            >
              <span className="font-general text-[8px] uppercase tracking-wider text-[#0D0D0C]/35">
                Vol 0{idx + 1}
              </span>
              <span className="font-instrument text-xs font-semibold text-[#0D0D0C] leading-tight block mt-1">
                {n.label}
              </span>
              <span className="font-cormorant text-[10px] text-[#0D0D0C]/55 block mt-1 leading-none">
                {n.desc}
              </span>
            </div>

            {/* Connecting arrow */}
            {idx < nodes.length - 1 && (
              <span className="text-[#C58B52]/30 text-xs my-1 md:my-0 md:mx-1 rotate-90 md:rotate-0">
                →
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Section Export ───────────────────────────────────── */
export function SrstiEpilogue() {
  const [showPralayaBtn, setShowPralayaBtn] = useState(false);

  useEffect(() => {
    // Reveal dissolution transition trigger button after a delay
    const timer = setTimeout(() => {
      setShowPralayaBtn(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const exploredPoints = [
    'What existed before creation?',
    'The oldest questions of humanity.',
    'The Nāsadīya Sūkta.',
    'Tad Ekam.',
    'The first stirring.',
    'Hiraṇyagarbha.',
    'Prakṛti.',
    'The Three Guṇas.',
    'Mahat.',
    'The unfolding of reality.',
    'The birth of the universe.',
    'The eternal rhythm of creation.',
  ];

  return (
    <div className="relative w-full bg-[#E9E2D4] pt-12">
      
      {/* ══════════════════════════════════════════════
          XII.1  FINAL PROGRESSIVE REFLECTION
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-16 text-center">
        <Reveal delay={0.1}>
          <p className="font-instrument text-xl md:text-3xl font-light text-[#0D0D0C]/80 leading-relaxed mb-6">
            "Every beginning carries the memory of a previous ending."
          </p>
        </Reveal>
        <Reveal delay={0.6}>
          <p className="font-instrument text-lg md:text-2xl font-light text-[#0D0D0C]/65 leading-relaxed mb-6">
            "The universe you have just witnessed is not a singular event."
          </p>
        </Reveal>
        <Reveal delay={1.2}>
          <p className="font-instrument text-xl md:text-3xl font-light text-[#C58B52] leading-relaxed">
            "It is one breath in an eternal rhythm."
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XII.2  TALKING TO THE READER (REFLECTIVE PASSAGE)
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-2xl mx-auto px-6 py-12 text-center">
        <Reveal>
          <p className="font-cormorant text-lg md:text-xl text-[#0D0D0C]/75 leading-relaxed font-light mb-4">
            Every sunrise. Every season. Every heartbeat. Every birth. Every ending.
          </p>
          <p className="font-cormorant text-lg md:text-xl text-[#0D0D0C]/75 leading-relaxed font-light">
            Perhaps they are not isolated events. Perhaps they are quiet reminders that existence itself moves in cycles. The rhythm of breathing out is always followed by the rhythm of breathing in.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XII.3  EDITORIAL SIGNATURE: WHAT WE EXPLORED
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-12">
        <Reveal>
          <div className="border border-[#C58B52]/20 bg-white/20 p-8 md:p-10">
            <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#C58B52] block mb-6 text-center">
              What We Explored
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {exploredPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 border-b border-[#C58B52]/10">
                  <span className="text-[#C58B52] font-general text-[10px]">✓</span>
                  <span className="font-cormorant text-base text-[#0D0D0C]/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XII.4  SCRIPTURAL QUOTE
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12 text-center">
        <Reveal>
          <span className="font-general text-[8px] uppercase tracking-[0.4em] text-[#C58B52]/60 block mb-4">
            Scriptural Anchor
          </span>
          <p className="font-cormorant text-lg md:text-xl text-[#0D0D0C] leading-relaxed italic mb-4 max-w-xl mx-auto">
            "सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम् ।
            कल्पक्षये पुनस्तानि कल्पादौ विसृजाम्यहम् ॥"
          </p>
          <p className="font-cormorant text-base text-[#0D0D0C]/70 italic mb-2">
            "sarva-bhūtāni kaunteya prakṛtiṃ yānti māmikām |
            kalpa-kṣaye punas tāni kalpādau visṛjāmy aham ||"
          </p>
          <p className="font-cormorant text-sm text-[#0D0D0C]/60 leading-relaxed max-w-md mx-auto">
            "O son of Kuntī, at the end of the kalpa all material entities dissolve back into My nature, and at the beginning of the next kalpa, I bring them forth again."
          </p>
          <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#C58B52]/60 block mt-4">
            — Bhagavad Gītā 9.7
          </span>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XII.5  CONTINUE EXPLORING NEXT JOURNEY
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-12">
        <Reveal>
          <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#C58B52] block mb-8 text-center">
            Continue Exploring
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'TIME',
                desc: 'Revisit the mathematics of eternity.',
              },
              {
                title: 'STRUCTURE OF THE UNIVERSE',
                desc: 'Explore the architecture of existence.',
              },
              {
                title: 'PRALAYA',
                desc: 'Coming Next. How does everything return to the unmanifest?',
              },
            ].map((card, i) => (
              <div key={i} className="border border-[#C58B52]/20 bg-white/20 p-6 flex flex-col justify-between min-h-[160px]">
                <div>
                  <h5 className="font-instrument text-base text-[#0D0D0C] font-semibold mb-2">
                    {card.title}
                  </h5>
                  <p className="font-cormorant text-xs md:text-sm text-[#0D0D0C]/65 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
                <span className="font-general text-[8px] uppercase tracking-wider text-[#C58B52] block mt-4">
                  Chapter 0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XII.6  KNOWLEDGE GRAPH SYSTEM
      ══════════════════════════════════════════════ */}
      <section className="w-full max-w-4xl mx-auto px-6 py-6">
        <Reveal>
          <KnowledgeMap />
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════
          XII.7  FINAL FADE BACK TO SILENCE (THE VOID)
      ══════════════════════════════════════════════ */}
      <section className="w-full min-h-[50vh] bg-[#050504] flex flex-col items-center justify-center text-center px-6 relative mt-16 overflow-hidden">
        {/* Particle dust texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2280%22_height=%2280%22><filter_id=%22f%22><feTurbulence_type=%22fractalNoise%22_baseFrequency=%220.6%22_numOctaves=%223%22_stitchTiles=%22stitch%22/></filter><rect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23f)%22/></svg>')] pointer-events-none" />

        <div className="max-w-xl z-10">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.85 }}
            viewport={{ once: true }}
            transition={{ duration: 2.0, ease: EASE_EXPO }}
            className="font-instrument text-[#E9E2D4] leading-snug mb-8 select-none"
            style={{ fontSize: 'clamp(20px, 3.2vw, 36px)', fontWeight: 300 }}
          >
            "Every creation eventually returns to silence."
          </motion.h4>

          {/* Delayed dissolution trigger button */}
          <div className="min-h-[44px]">
            <AnimatePresence>
              {showPralayaBtn && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: EASE_EXPO }}
                  className="px-6 py-2 border border-[#C58B52]/40 bg-[#C58B52]/5 hover:bg-[#C58B52]/15 text-[#C58B52] font-general text-[10px] uppercase tracking-[0.2em] transition-all"
                >
                  Begin the Journey of Dissolution · PRALAYA
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

    </div>
  );
}
