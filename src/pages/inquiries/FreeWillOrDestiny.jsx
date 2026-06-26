import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
  { id: 'sec-1', label: '01 Destiny' },
  { id: 'sec-2', label: '02 Free Will' },
  { id: 'sec-3', label: '03 Types of Karma' },
  { id: 'sec-4', label: '04 Changeable' },
  { id: 'sec-5', label: '05 Unchangeable' },
  { id: 'sec-6', label: '06 Gītā on Action' },
  { id: 'sec-7', label: '07 Krishna & Arjuna' },
  { id: 'sec-8', label: '08 Misconceptions' },
  { id: 'sec-9', label: '09 Philosophy' },
  { id: 'sec-10', label: '10 Consensus' },
  { id: 'sec-11', label: '11 Reflection' }
];

export function FreeWillOrDestiny() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      let current = 'intro';
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#E9E2D4] text-[#0D0D0C] flex flex-col items-center font-sans antialiased overflow-x-hidden">
      <CreamGrainCanvas />

      {/* HORIZONTAL NAVIGATION BAR */}
      <nav className="absolute top-9 left-9 md:top-11 md:left-13 z-50 flex items-center gap-12 lg:gap-16">
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
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#C58B52]"
          >
            INQUIRY ARCHIVE
          </span>
        </Link>

        <Link to="/library" className="group flex items-center">
          <span 
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#0D0D0C]/50 group-hover:text-[#C58B52]"
          >
            TATTVA LIBRARY
          </span>
        </Link>

        <Link to="/satya-mithya" className="group flex items-center">
          <span 
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#0D0D0C]/50 group-hover:text-[#C58B52]"
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
            <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 block text-center">
              INQUIRY III
            </span>
            <h1 className="font-instrument text-5xl md:text-7xl lg:text-8xl text-[#0D0D0C] tracking-tight mb-4 text-center leading-none">
              Do we truly have free will?
            </h1>
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C]/80 tracking-tight mb-8 text-center leading-none">
              Or is everything already destined?
            </h2>
            <p className="font-cormorant italic text-2xl text-[#0D0D0C]/70 max-w-2xl mx-auto text-center leading-relaxed mb-12">
              Sanātana Dharma's answer to destiny, karma and human freedom.
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
            This section will explore the paradox of human agency within the vast mechanisms of karma. It will introduce the tension between feeling like the author of one's life and the realization that many circumstances are beyond our control. The introduction will set the stage for how Sanātana Dharma resolves this apparent contradiction.
          </p>
        </motion.div>

        {/* SHORT ANSWER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.2 }}
          className="mb-48 w-[100vw] py-16 px-8 md:px-16 border-y border-[#C58B52]/20 bg-[#C58B52]/[0.03] flex justify-center"
        >
          <div className="max-w-4xl flex flex-col items-center">
            <p className="font-cormorant text-3xl md:text-4xl text-[#0D0D0C] leading-relaxed text-center font-light mb-12">
              This short answer section will concisely summarize that neither absolute fatalism nor absolute free will is the complete truth. It will briefly outline how past karma creates the boundaries of our present situation (destiny), while our conscious choices within those boundaries represent our free will.
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
              1. What is Destiny?
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              This section will explore how Sanātana Dharma defines destiny not as the arbitrary will of a supreme being, but as the accumulated result of our own past actions (karma) ripening in the present.
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
              2. What is Free Will?
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              This section will articulate the concept of human agency. It will explain how consciousness grants us the capacity to choose our responses, frame our attitudes, and initiate new actions despite the constraints of our circumstances.
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
              3. The Three Types of Karma
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              This section will detail Sañcita (accumulated), Prārabdha (fructifying), and Kriyāmāṇa (current) karma, providing a framework for how the past, present, and future intersect.
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
              4. What Can Be Changed?
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              This section will focus on Kriyāmāṇa karma—the domain where human effort (Puruṣārtha) reigns supreme, allowing us to forge new pathways and mitigate the effects of past actions.
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
              5. What Cannot Be Changed?
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              This section will discuss Prārabdha karma—the arrow already released from the bow. It will explain how certain major life events or inherent conditions must be experienced and exhausted.
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
              6. Bhagavad Gītā on Action
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              This section will examine the core teachings of Karmayoga. It will explore the mandate to perform one's duty without attachment to the fruits, illuminating the balance between effort and surrender.
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
              7. Why Krishna Still Told Arjuna To Fight
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              This section will analyze the paradox in the Mahābhārata where Krishna reveals that the cosmic outcome is already decided, yet still commands Arjuna to arise and engage in the battle as an instrument of Dharma.
            </p>
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
              8. Common Misconceptions
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              This section will address misunderstandings, such as the idea that karma promotes passivity or that trusting in destiny means abandoning personal responsibility.
            </p>
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
              9. Different Philosophical Perspectives
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              This section will briefly outline how different Vedāntic schools view the interplay of human will and divine grace.
            </p>
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
              10. Scriptural Consensus
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-16" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              This section will feature the editorial table summarizing the contributions of the Gītā, Upaniṣads, and Epics on the subject of destiny and free will.
            </p>
          </motion.section>

          {/* Section 11 */}
          <motion.section
            id="sec-11"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
            className="pt-16"
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12 text-center">
              11. Reflection
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-16 mx-auto" />
            <p className="font-cormorant text-2xl md:text-3xl font-light text-[#0D0D0C]/90 leading-relaxed max-w-3xl italic text-center mx-auto">
              This section will provide a contemplative conclusion, summarizing how one should live balancing the acceptance of destiny with the fierce exercise of Dharma.
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
              <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed italic">
                A comprehensive list of primary texts and scriptures will be inserted here following the research phase.
              </p>
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
