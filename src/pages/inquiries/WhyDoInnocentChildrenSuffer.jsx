import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useScrollSpy from '@/hooks/useScrollSpy';

function CreamGrainCanvas() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9998] noise-fine"
        style={{ mixBlendMode: 'multiply', opacity: 0.12 }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9999] noise-coarse"
        style={{ mixBlendMode: 'color-burn', opacity: 0.08 }}
      />
    </>
  );
}

const EASE_EXPO = [0.16, 1, 0.3, 1];

const SECTIONS = [
  { id: 'intro', label: '00 Introduction' },
  { id: 'sec-1', label: '01 The Soul' },
  { id: 'sec-2', label: '02 Saṃsāra' },
  { id: 'sec-3', label: '03 Karma' },
  { id: 'sec-4', label: '04 Dharma' },
  { id: 'sec-5', label: '05 Free Will' },
  { id: 'sec-6', label: '06 Mokṣa' },
  { id: 'sec-7', label: '07 Consensus' },
  { id: 'sec-8', label: '08 Evidence' },
  { id: 'sec-9', label: '09 Misconceptions' },
  { id: 'sec-10', label: '10 Philosophy' },
  { id: 'sec-11', label: '11 Ethics' },
  { id: 'sec-12', label: '12 Reflection' }
];

export function WhyDoInnocentChildrenSuffer() {
  const spySections = useMemo(() => SECTIONS, []);
  const activeSection = useScrollSpy(spySections, { rootMargin: '-10% 0px -50% 0px' });

  return (
    <div className="relative w-full min-h-screen bg-[#E9E2D4] text-[#0D0D0C] flex flex-col items-center font-sans antialiased overflow-x-hidden">
      <CreamGrainCanvas />

      {/* HORIZONTAL NAVIGATION BAR */}
      <nav className="absolute top-6 left-6 md:top-11 md:left-13 z-50 flex flex-wrap items-center gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-2 max-w-[calc(100%-48px)]">
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
                    color: '#0D0D0C',
                    opacity: 0.5
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
          <span
            className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#C58B52]"
          >
            INQUIRY ARCHIVE
          </span>
        </Link>

        <Link to="/library" className="group flex items-center">
          <span
            className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#0D0D0C]/50 group-hover:text-[#C58B52]"
          >
            TATTVA LIBRARY
          </span>
        </Link>

        <Link to="/satya-mithya" className="group flex items-center">
          <span
            className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#0D0D0C]/50 group-hover:text-[#C58B52]"
          >
            SATYA & MITHYĀ
          </span>
        </Link>
      </nav>

      {/* FLOATING PROGRESS NAVIGATION (Desktop Only) */}
      <div className="hidden xl:flex fixed left-12 top-1/2 -translate-y-1/2 z-40 flex-col gap-4">
        {SECTIONS.map((sec, i) => {
          const isActive = activeSection === sec.id;
          const isPast = SECTIONS.findIndex(s => s.id === activeSection) > i;

          let textColor = 'text-[#0D0D0C]/20';
          if (isActive) textColor = 'text-[#0D0D0C]';
          else if (isPast) textColor = 'text-[#0D0D0C]/40';

          return (
            <div key={sec.id} className="flex items-center gap-4">
              <span className={`font-general text-[9px] uppercase tracking-[0.2em] transition-colors duration-700 ${textColor}`}>
                {sec.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="w-full max-w-4xl px-6 pt-48 pb-32 relative z-10 flex flex-col items-center">

        {/* PAGE HEADER */}
        <motion.div
          id="intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
          className="relative w-full mb-16 pt-16 pb-8"
        >
          <div className="relative z-10 flex flex-col items-center">
            <span className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-[#C58B52] mb-6 block text-center">
              INQUIRY II
            </span>
            <h1 className="font-instrument text-5xl md:text-7xl lg:text-8xl text-[#0D0D0C] tracking-tight mb-8 text-center leading-none">
              Why do innocent<br />children suffer?
            </h1>
            <p className="font-cormorant italic text-2xl text-[#0D0D0C]/70 max-w-2xl mx-auto text-center leading-relaxed mb-12">
              What karma can explain—and what it cannot.
            </p>
            <div className="w-[120px] h-[1px] bg-[#C58B52]/40" />
          </div>
        </motion.div>

        {/* INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.1 }}
          className="mb-32 w-full max-w-3xl"
        >
          <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C]/80 leading-relaxed mx-auto">
            A child is born into suffering.<br />
            A loving parent watches their child endure inexplicable pain.<br />
            Families are fractured by hardship that no one seems to deserve.<br />
            Of all the questions humanity has hurled at the heavens, the most piercing has always been:<br />
            <span className="italic">Why does innocence suffer?</span>
            <br /><br />
            Sanātana Dharma does not shy away from this question, nor does it offer comforting platitudes. It answers it through the profound frameworks of the eternal Ātman, the vast cycles of Saṃsāra, the impersonal law of karma, and the ultimate freedom of Mokṣa. More importantly, it answers it through the immediate, uncompromising demand of Dharma and free will.
          </p>
        </motion.div>

        {/* SHORT ANSWER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.2 }}
          className="mb-48 w-full md:w-[100vw] max-w-full md:max-w-none md:relative md:left-1/2 md:right-1/2 md:-translate-x-1/2 py-16 px-6 md:px-16 border-y border-[#C58B52]/20 bg-[#C58B52]/[0.03] flex justify-center"
        >
          <div className="max-w-4xl flex flex-col items-center">
            <p className="font-cormorant text-3xl md:text-4xl text-[#0D0D0C] leading-relaxed text-center font-light mb-12">
              According to Sanātana Dharma, suffering is neither random nor mere divine punishment. The soul (Ātman) is eternal, and life spans many births. A child may be born into hardship due to complex causes—past karma, family circumstances, or collective conditions—none of which can be fully known to outsiders. Crucially, the tradition emphasizes that this understanding should lead to humility and compassion, not judgment. Scripture teaches that our duty is to respond with compassion, selfless service, and wisdom.
            </p>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40" />
          </div>
        </motion.div>

        {/* ARTICLE SECTIONS */}
        <div className="space-y-48 w-full max-w-3xl">

          {/* Section 1 */}
          <motion.section
            id="sec-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              1. The Soul Is Eternal (Ātman)
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              The foundation of Sanātana Dharma’s answer is the eternity of the self. The Ātman is not created at physical birth, nor is it destroyed at physical death. The Bhagavad Gītā (2.20) declares: <span className="italic">"It is never born, nor does it ever die."</span> What we perceive as a single, tragic lifetime is merely a single frame in an infinitely long motion picture. The suffering, while intensely real to the mind and body, does not touch the essential purity and indestructibility of the true Self.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            id="sec-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              2. Saṃsāra — The Cycle of Births
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              We cannot understand the suffering of an innocent child if we assume that their existence began in the womb. Saṃsāra is the continuous cycle of birth, death, and rebirth. As the Gītā (2.22) explains, just as one discards old clothes for new ones, the soul discards old bodies for new ones. Therefore, present suffering often has roots extending far beyond the current lifetime, rendering any attempt to judge someone based purely on their present "innocence" fundamentally incomplete.
            </p>
          </motion.section>

          {/* Section 3 */}
          <motion.section
            id="sec-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              3. Karma — Complex Causes, Not Blunt Fate
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
              Karma is not a system of divine revenge; it is an impersonal, universal law of cause and effect. It operates in three main streams: Sañcita (the vast reservoir of past actions), Prārabdha (the specific actions ripening in this lifetime), and Kriyāmāṇa (the new actions generated in the present).
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              Because this web of action and consequence spans multiple lives and intersects with the collective karma of families, nations, and nature, not every instance of suffering can be neatly mapped to a single, visible moral failure. It is a profound error to look at a suffering child and coldly conclude they are simply "paying for a past sin." Karma is a mechanism of spiritual evolution, not a weapon of blunt fate.
            </p>
          </motion.section>

          {/* Section 4 */}
          <motion.section
            id="sec-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              4. Dharma, Compassion, and Ethical Response
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
              Knowledge of karma must never paralyze our humanity; it must be balanced by Dharma. When confronted with the suffering of the innocent, the correct spiritual posture is never apathy.
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              The tradition places the highest premium on Ahimsa (non-injury), compassion, and active service (Seva). If you witness a child in pain, your immediate Dharma—your present karmic duty—is to alleviate that pain. To use the philosophy of karma as an excuse to withhold help is an egregious violation of spiritual law.
            </p>
          </motion.section>

          {/* Section 5 */}
          <motion.section
            id="sec-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              5. Free Will and Present Action
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              Sanātana Dharma explicitly rejects fatalism. While past karma sets the stage—determining the conditions into which one is born—it does not write the script of present choices. Even amidst severe suffering, the capacity for free will (Kriyāmāṇa Karma) remains. How one responds to their condition, how families support each other, and how society protects its vulnerable are all active choices that forge new, elevated destinies.
            </p>
          </motion.section>

          {/* Section 6 */}
          <motion.section
            id="sec-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              6. Mokṣa — Ultimate Freedom
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              The ultimate resolution to the problem of suffering is not found within Saṃsāra, but in transcending it. Liberation (Mokṣa) is the final release from the cycles of pain and rebirth. As the Gītā (18.66) states, absolute surrender leads to liberation from all karmic bonds. The profound peace of the tradition lies in the assurance that suffering is temporary, but the soul's destination—infinite bliss and freedom—is eternal.
            </p>
          </motion.section>

          {/* Section 7 */}
          <motion.section
            id="sec-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              7. Scriptural Consensus
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-16" />

            <div className="w-full border-t border-[#0D0D0C]/10">
              {[
                { title: "Bhagavad Gītā", desc: "Establishes the eternity of the soul, the mechanics of rebirth, and the mandate of selfless action (Karmayoga)." },
                { title: "Upaniṣads", desc: "Detail the journey of the Ātman across lifetimes and the law of cause and effect." },
                { title: "Mahābhārata", desc: "Illustrates through sweeping epics how cosmic destiny and personal Dharma intertwine in moments of profound tragedy." },
                { title: "Śrīmad Bhāgavatam", desc: "Shows how devotion and surrender (Bhakti) transcend the painful mathematics of karma." },
                { title: "Viṣṇu & Garuḍa Purāṇas", desc: "Provide cosmological context for the soul's journey through various realms based on actions." },
                { title: "Dharma Śāstras", desc: "Mandate strict ethical responsibility to protect the vulnerable and alleviate suffering." },
                { title: "Vedānta", desc: "Philosophically resolves the tension between the reality of worldly pain and the supreme bliss of Brahman." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row py-10 border-b border-[#0D0D0C]/10 gap-8">
                  <div className="w-full md:w-1/3 flex items-start gap-4">
                    <span className="text-[#C58B52] font-serif opacity-70 text-sm">✦</span>
                    <span className="font-general text-[11px] uppercase tracking-widest text-[#C58B52] mt-1">{item.title}</span>
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 8 */}
          <motion.section
            id="sec-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              8. Levels of Certainty
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-16" />

            <div className="w-full border-t border-[#0D0D0C]/10">
              <div className="flex flex-col md:flex-row py-10 border-b border-[#0D0D0C]/10 gap-8">
                <div className="w-full md:w-1/3">
                  <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#0D0D0C]/50">Explicit Scripture</span>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">The soul is eternal; rebirth is a reality; karma governs action and consequence; Dharma demands compassion.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row py-10 border-b border-[#0D0D0C]/10 gap-8">
                <div className="w-full md:w-1/3">
                  <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#0D0D0C]/50">Strong Traditional Inference</span>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">Suffering often acts as a purificatory fire to exhaust past karmas or sever deep material attachments.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row py-10 border-b border-[#0D0D0C]/10 gap-8">
                <div className="w-full md:w-1/3">
                  <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#0D0D0C]/50">Philosophical Inference</span>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">From the absolute standpoint, the suffering of the ego is fundamentally illusory, though intensely real in the empirical state.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row py-10 border-b border-[#0D0D0C]/10 gap-8">
                <div className="w-full md:w-1/3">
                  <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#0D0D0C]/50">Not Supported</span>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">The idea that one can confidently diagnose the precise past-life sin that caused a specific present-day tragedy.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row py-10 border-b border-[#0D0D0C]/10 gap-8">
                <div className="w-full md:w-1/3">
                  <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52]">Contradicted by Scripture</span>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">The belief that witnessing suffering justifies apathy, or that God creates souls purely to punish them for His amusement.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 9 */}
          <motion.section
            id="sec-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              9. What the Scriptures Do Not Say
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <ul className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed space-y-6 list-none">
              <li className="flex gap-6"><span className="text-[#C58B52]">—</span> Not every suffering is a divine punishment.</li>
              <li className="flex gap-6"><span className="text-[#C58B52]">—</span> Not every victim "deserves" what happened to them in a simplistic moral sense.</li>
              <li className="flex gap-6"><span className="text-[#C58B52]">—</span> Karma does not mean fatalism.</li>
              <li className="flex gap-6"><span className="text-[#C58B52]">—</span> Compassion is never invalidated by karma.</li>
              <li className="flex gap-6"><span className="text-[#C58B52]">—</span> We cannot confidently judge another person’s karma.</li>
              <li className="flex gap-6"><span className="text-[#C58B52]">—</span> Suffering is not meaningless, but we do not know the whole pattern.</li>
            </ul>
          </motion.section>

          {/* Section 10 */}
          <motion.section
            id="sec-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              10. Different Philosophical Perspectives
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <div className="space-y-12 pl-4 border-l border-[#C58B52]/30">
              <div className="pl-6">
                <span className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] block mb-3">Advaita Vedānta</span>
                <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">Suffering is real within the realm of relative existence (vyāvahārika), but from the absolute perspective (pāramārthika), only the non-dual Brahman exists, and the Ātman is forever untouched by pain.</p>
              </div>
              <div className="pl-6">
                <span className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] block mb-3">Viśiṣṭādvaita</span>
                <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">The soul is a real, distinct part of the Divine body. Suffering is a profound reality within creation that drives the soul toward deep surrender (Prapatti) to the Supreme Lord.</p>
              </div>
              <div className="pl-6">
                <span className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] block mb-3">Dvaita</span>
                <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">The soul is eternally distinct from God. Suffering arises from beginningless karma and is ultimately resolved only through pure devotion and divine grace.</p>
              </div>
            </div>
          </motion.section>

          {/* Section 11 */}
          <motion.section
            id="sec-11"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              11. Practical Ethics and Compassion
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
              The highest spiritual understanding requires action. Knowing about karma should not make one passive; it should transform one into a Karmayogi—someone who works relentlessly for the welfare of the world (Lokasaṃgraha) without attachment to the results.
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              We are mandated to serve and protect the innocent, care for children, and help the suffering. To walk past a person in pain while citing karma is an abandonment of Dharma. Compassion is the greatest karmic action you can perform in the present moment.
            </p>
          </motion.section>

          {/* Section 12 */}
          <motion.section
            id="sec-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
            className="pt-16"
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12 text-center">
              12. Reflection
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-16 mx-auto" />
            <p className="font-cormorant text-2xl md:text-3xl font-light text-[#0D0D0C]/90 leading-relaxed max-w-3xl italic text-center mx-auto">
              Sanātana Dharma does not offer a glib explanation for suffering.<br />
              It asks us to withhold judgment, grow in humility, and respond with love.<br />
              Even when we cannot fully explain why someone suffers, the right response is always:
            </p>
            <p className="font-instrument text-5xl md:text-6xl text-[#C58B52] mt-16 text-center tracking-tight">
              Dharma. Compassion. Service.
            </p>
          </motion.section>

        </div>

        {/* REFERENCE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mt-48 w-full max-w-3xl"
        >
          <div className="w-full border-t border-b border-[#0D0D0C]/10 py-16 flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <span className="font-general text-[10px] uppercase tracking-[0.3em] text-[#0D0D0C]/50 block">
                Primary References
              </span>
            </div>
            <div className="w-full md:w-2/3">
              <ul className="font-cormorant text-2xl font-light text-[#0D0D0C]/80 space-y-6">
                <li>Bhagavad Gītā</li>
                <li>Bṛhadāraṇyaka Upaniṣad</li>
                <li>Kaṭha Upaniṣad</li>
                <li>Chāndogya Upaniṣad</li>
                <li>Mahābhārata</li>
                <li>Śrīmad Bhāgavatam</li>
                <li>Viṣṇu Purāṇa</li>
                <li>Garuḍa Purāṇa</li>
                <li>Dharma Śāstras</li>
                <li className="pt-6 mt-6 border-t border-[#0D0D0C]/10 opacity-70 italic">Vedānta commentaries</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* PREMIUM ENDING */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="mt-64 mb-32 flex flex-col items-center"
        >
          <span className="font-cormorant text-xl tracking-[0.5em] uppercase text-[#0D0D0C]/30 mb-6">
            Tattva
          </span>
          <span className="font-cormorant italic text-lg text-[#C58B52]/70">
            "A Search Beyond Certainty"
          </span>
        </motion.div>

      </div>
    </div>
  );
}
