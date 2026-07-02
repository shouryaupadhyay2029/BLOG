import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE_EXPO = [0.16, 1, 0.3, 1];

function CreamGrainCanvas() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2280%22_height=%2280%22><filter_id=%22f%22><feTurbulence_type=%22fractalNoise%22_baseFrequency=%220.6%22_numOctaves=%223%22_stitchTiles=%22stitch%22/></filter><rect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23f)%22/></svg>')] bg-repeat"
    />
  );
}

function Reveal({ children, delay = 0, y = 16, className = '' }) {
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

const ChevronDownIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const BulletDot = () => (
  <span className="w-1 h-1 rounded-full bg-[#C58B52]/50 inline-block align-middle mx-2" />
);

export function TheOriginPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#F4EFE6] text-[#1C1C1A] font-sans antialiased overflow-x-hidden pb-44">
      <CreamGrainCanvas />

      {/* HORIZONTAL NAVIGATION BAR */}
      <nav className="absolute top-6 left-6 md:top-11 md:left-13 z-50 flex flex-wrap items-center gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-2 max-w-[calc(100%-48px)] select-none">
        <Link to="/" className="block">
          <div className="cursor-default">
            <div className="relative flex flex-col justify-center items-center" style={{ width: '130px', height: '40px' }}>
              <div className="relative w-full h-full flex items-center justify-center">
                <span
                  style={{
                    position: 'absolute',
                    fontFamily: 'Cormorant, serif',
                    fontSize: '13px',
                    letterSpacing: '0.45em',
                    textTransform: 'uppercase',
                    fontWeight: 300,
                    color: '#1C1C1A',
                    opacity: 0.6
                  }}
                  className="hover:opacity-100 transition-opacity duration-600"
                >
                  TATTVA
                </span>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/inquiry" className="group flex items-center">
          <span className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#1C1C1A]/50 group-hover:text-[#C58B52]">
            INQUIRY ARCHIVE
          </span>
        </Link>

        <Link to="/library" className="group flex items-center">
          <span className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#1C1C1A]/50 group-hover:text-[#C58B52]">
            TATTVA LIBRARY
          </span>
        </Link>

        <Link to="/satya-mithya" className="group flex items-center">
          <span className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#1C1C1A]/50 group-hover:text-[#C58B52]">
            SATYA & MITHYĀ
          </span>
        </Link>

        <Link to="/the-origin" className="group flex items-center">
          <span className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#9E2A2B]">
            THE ORIGIN
          </span>
        </Link>
      </nav>

      {/* HERO SECTION */}
      <div className="w-full max-w-4xl mx-auto px-6 pt-44 relative z-10 flex flex-col">
        <motion.div
          className="mb-24 flex flex-col"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
        >
          <span className="font-general text-[10px] uppercase tracking-[0.45em] text-[#C58B52] mb-5 font-bold">
            EDITORIAL ARCHIVE
          </span>
          <h1 className="font-instrument text-5xl md:text-7xl lg:text-8xl text-[#1C1C1A] tracking-tighter leading-none mb-10 select-none">
            The Origin
          </h1>
          <p className="font-cormorant text-2xl md:text-3xl font-light italic text-[#1C1C1A]/80 max-w-2xl leading-relaxed mb-12">
            Behind every investigation is not a conclusion—
            <br className="hidden md:block" />
            but a question.
          </p>

          <div className="w-12 h-[1px] bg-[#C58B52]/30 mb-12" />

          <p className="font-cormorant text-lg md:text-xl text-[#1C1C1A]/70 max-w-2xl leading-relaxed font-light mb-6">
            TATTVA was created from a simple observation. Many discussions about Sanātana Dharma begin with conclusions rather than evidence.
          </p>
          <p className="font-cormorant text-lg md:text-xl text-[#1C1C1A]/70 max-w-2xl leading-relaxed font-light mb-6">
            Verses are quoted without context. History is simplified. Translations are repeated without verification. This project exists to investigate before believing.
          </p>
        </motion.div>

        {/* SECTION: WHO BUILT TATTVA */}
        <section className="py-16 border-t border-[#C58B52]/15">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2 font-bold">
              WHO BUILT TATTVA?
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-8 font-semibold">
              Who I Am
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-8">
            <div className="md:col-span-2 space-y-6 font-cormorant text-base md:text-lg text-[#1C1C1A]/75 leading-relaxed font-light">
              <Reveal>
                <p>
                  My name is <strong>Shourya</strong>. I am an independent researcher and developer, and I built TATTVA alone.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  I do not claim academic credentials, nor do I describe myself as a traditional scholar. Instead, I am someone driven by curiosity and a commitment to understanding primary sources before accepting widely repeated assertions.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  TATTVA represents this commitment. Every line of code, every manuscript translation scan, and every comparative analysis is compiled, cross-referenced, and structured to provide a transparent, accessible repository for seekers of historical and scriptural clarity.
                </p>
              </Reveal>
            </div>

            <Reveal className="border border-[#C58B52]/25 bg-[#161615]/5 p-6 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                A Note on Responsibility
              </span>
              <p className="font-cormorant text-sm italic text-[#1C1C1A]/80 leading-relaxed font-light">
                "I do not claim to know every answer. My responsibility is to investigate honestly, compare evidence carefully and present the strongest conclusions supported by available sources."
              </p>
            </Reveal>
          </div>
        </section>

        {/* SECTION: WHY I BUILT THIS */}
        <section className="py-16 border-t border-[#C58B52]/15">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2 font-bold">
              WHY I BUILT THIS
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-8 font-semibold">
              The Question That Started Everything
            </h2>
          </Reveal>

          <div className="max-w-2xl space-y-6 font-cormorant text-base md:text-lg text-[#1C1C1A]/75 leading-relaxed font-light">
            <Reveal>
              <p>
                The origin of this project lies in a pattern I repeatedly observed across social spaces, books, and debates.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                People argued passionately about texts they had never read in full. Ancient scriptures were reduced to decontextualized screenshots, translations were copied blindly without checking lexical roots, and sweeping claims spread far faster than the evidence supporting them.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Rather than choosing a side in these debates, I decided to investigate the claims themselves. I wanted to see if the original manuscripts actually said what they were claimed to say—and, equally, if the criticisms or defenses were historically justified.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p>
                That single decision to look beyond popular summaries and seek the primary source eventually grew, inquiry by inquiry, into TATTVA.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SECTION: HOW EVERY INVESTIGATION IS CREATED */}
        <section className="py-16 border-t border-[#C58B52]/15">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2 font-bold">
              METHODOLOGY
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-2 font-semibold">
              How Every Investigation Is Created
            </h2>
            <p className="font-instrument italic text-base md:text-lg text-[#C58B52] mb-8">
              Every investigation follows the same evidence-first process before publication.
            </p>
          </Reveal>

          <Reveal className="max-w-2xl mb-12">
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/70 leading-relaxed font-light">
              Every investigation begins with a question—not an answer. From there, sources are collected, evidence is compared, historical context is examined and conclusions are reached only after careful review. The process is designed to follow evidence rather than assumptions.
            </p>
          </Reveal>

          {/* MAIN FEATURE: TIMELINE */}
          <Reveal className="max-w-xl mx-auto my-16">
            <div className="flex flex-col items-center">
              {[
                { title: 'Question', desc: 'Identify an unresolved or widely repeated historical claim.' },
                { title: 'Primary Sources', desc: 'Read original scriptures and historical texts.' },
                { title: 'Cross-Reference', desc: 'Compare translations, commentaries and independent sources.' },
                { title: 'Historical Context', desc: 'Study chronology, culture and academic research.' },
                { title: 'Review', desc: 'Organize evidence, identify disagreements and verify conclusions.' },
                { title: 'Publish', desc: 'Present findings with transparency and clearly distinguish evidence from interpretation.' }
              ].map((step, idx) => (
                <div key={idx} className="w-full flex flex-col items-center">
                  <div className="border border-[#C58B52]/20 bg-white/40 p-5 rounded-sm w-full text-center hover:border-[#C58B52]/50 transition-colors duration-300">
                    <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.2em] mb-1 font-bold">
                      Stage 0{idx + 1}
                    </span>
                    <h4 className="font-instrument text-base text-[#1C1C1A] font-semibold mb-2">
                      {step.title}
                    </h4>
                    <p className="font-cormorant text-xs md:text-sm text-[#1C1C1A]/60 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                  {idx < 5 && (
                    <ChevronDownIcon className="w-3.5 h-3.5 text-[#C58B52]/40 my-4" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* EDITORIAL PRINCIPLES */}
          <div className="py-12 border-t border-[#C58B52]/10 my-12">
            <Reveal>
              <span className="font-general text-[8.5px] uppercase tracking-[0.25em] text-[#C58B52] block mb-8 text-center font-bold">
                Editorial Principles
              </span>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                'Scripture before opinion.',
                'Context before quotation.',
                'Evidence before certainty.',
                'Questions before conclusions.',
                'Transparency before persuasion.',
                'Understanding before judgment.'
              ].map((principle, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="border-l border-[#C58B52]/30 pl-4 py-2 bg-white/[0.01]">
                    <span className="font-general text-[9px] uppercase tracking-wider text-[#1C1C1A]/40 font-bold block mb-1">
                      Principle 0{idx + 1}
                    </span>
                    <p className="font-instrument text-sm md:text-base text-[#1C1C1A]/90 font-medium">
                      {principle}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* EDITORIAL NOTE HIGHLIGHT CARD */}
          <Reveal className="my-16 max-w-md mx-auto">
            <div className="border border-[#C58B52]/25 bg-[#161615]/5 p-6 rounded-sm text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#C58B52]/35" />
              <span className="font-general text-[7.5px] uppercase tracking-widest text-[#C58B52] block mb-3 font-bold">
                Why This Matters
              </span>
              <p className="font-cormorant text-sm italic text-[#1C1C1A]/85 leading-relaxed font-light">
                The goal of every investigation is not to prove a belief or disprove one. It is to understand what the available evidence actually supports.
              </p>
            </div>
          </Reveal>
        </section>

        {/* SECTION: NEXT PHASE FADE-IN */}
        <section className="py-24 border-t border-[#C58B52]/15 text-center">
          <Reveal className="max-w-md mx-auto opacity-50">
            <span className="font-general text-[7px] uppercase tracking-[0.3em] text-[#C58B52] block mb-4 font-bold">
              COMING NEXT
            </span>
            <h3 className="font-instrument text-2xl text-[#1C1C1A]/70 font-semibold mb-2">
              Research Standards
            </h3>
            <p className="font-cormorant text-xs text-[#1C1C1A]/40 italic">
              Not every source carries the same historical weight.
            </p>
          </Reveal>
        </section>

      </div>
    </div>
  );
}
