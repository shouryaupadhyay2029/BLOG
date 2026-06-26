import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { CosmicLadder } from '@/components/library/time/CosmicLadder';
import { CyclicalAnimation } from '@/components/library/time/CyclicalAnimation';
import { CosmicAddress } from '@/components/library/time/CosmicAddress';
import { PralayaPanels } from '@/components/library/time/PralayaPanels';
import { ScienceComparison } from '@/components/library/time/ScienceComparison';
import { MisconceptionCards } from '@/components/library/time/MisconceptionCards';

const EASE_EXPO = [0.16, 1, 0.3, 1];

function CreamGrainCanvas() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9998] noise-fine"
        style={{ mixBlendMode: 'multiply', opacity: 0.15 }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9999] noise-coarse"
        style={{ mixBlendMode: 'color-burn', opacity: 0.1 }}
      />
    </>
  );
}

export function HowTimeFlowsArticle() {
  return (
    <div className="relative w-full min-h-screen bg-[#E9E2D4] text-[#0D0D0C] font-sans antialiased selection:bg-[#C58B52]/30">
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
          <span className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#0D0D0C]/50 group-hover:text-[#C58B52]">
            INQUIRY ARCHIVE
          </span>
        </Link>

        <Link to="/library" className="group flex items-center">
          <span className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#C58B52]">
            TATTVA LIBRARY
          </span>
        </Link>
      </nav>

      {/* ARTICLE CONTENT */}
      <main className="w-full max-w-4xl mx-auto px-6 pt-48 pb-48 relative z-10">
        
        {/* HERO / OPENING */}
        <motion.div 
          className="mb-32 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
        >
          <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-8">
            LIBRARY 01
          </span>
          <h1 className="font-instrument text-6xl md:text-8xl text-[#0D0D0C] tracking-tighter leading-[0.9] mb-12 max-w-3xl">
            How Time Flows in Sanātana Dharma
          </h1>
          
          <div className="w-[1px] h-[80px] bg-[#C58B52]/40 mb-16" />

          <p className="font-cormorant text-2xl md:text-3xl font-light text-[#0D0D0C]/80 leading-relaxed max-w-2xl text-left italic">
            "Close your eyes for a moment. Imagine the oldest mountain on Earth. Now imagine it appearing and disappearing hundreds of times."
          </p>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed max-w-2xl text-left mt-8">
            According to Sanātana Dharma, even that immense, unimaginable span of time would barely register within the lifetime of the Creator. We are not just living in time; we are moving through a breathing, conscious cosmic rhythm.
          </p>
        </motion.div>

        {/* SECTION 1: WHAT IS TIME? */}
        <motion.section 
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-8">
            1. What Exactly Is Time?
          </h2>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
            Before we count years or trace the movement of stars, we must ask a deeper question: What is time itself? Is it merely something that clocks measure? Or is time a force that actively shapes existence?
          </p>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
            Think about your own life. Why does a single hour outside a hospital operating room feel endless, while the entire decade of your twenties seems to vanish in a breath? Why does the sudden loss of someone we love make us painfully aware of a ticking clock?
          </p>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-12">
            We experience time not as numbers, but as change. As impermanence. In Sanātana Dharma, this relentless, all-consuming force of change is called <span className="font-medium text-[#C58B52]">Kāla</span>. Kāla is not a passive backdrop to the universe; it is the great devourer, the unstoppable momentum that brings all things into existence, ages them, and eventually consumes them.
          </p>
          
          <div className="bg-[#0D0D0C]/5 border-l border-[#C58B52]/30 p-8 my-12">
            <p className="font-cormorant text-2xl font-light text-[#0D0D0C] italic leading-relaxed text-center">
              "kālo ’smi loka-kṣaya-kṛt pravṛddho<br />lokān samāhartum iha pravṛttaḥ"
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/70 mt-6 text-center">
              "Time I am, the great destroyer of the worlds, and I have come here to destroy all people."
            </p>
            <p className="font-general text-[10px] uppercase tracking-widest text-[#C58B52] mt-6 text-center">— Bhagavad Gītā 11.32</p>
          </div>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
            When Śrī Kṛṣṇa reveals His terrifying cosmic form to Arjuna, He does not introduce Himself as love or creation in that moment—He introduces Himself as Time. He reveals that time is not separate from the Divine; it is the Divine in motion, ensuring that no physical form lasts forever, thus driving the soul to seek the eternal.
          </p>
        </motion.section>

        {/* SECTION 2: SCALES OF TIME */}
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-8">
            2. The Relativity of Time
          </h2>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-4">
            Could it be that time flows differently depending on the consciousness experiencing it?
          </p>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
            Thousands of years before modern physics proposed the relativity of time, the Purāṇas declared that time is completely relative to the observer. What feels like a grueling lifetime of struggle for a human being might be less than a single breath for a cosmic entity.
          </p>
        </motion.section>

        {/* SECTION 4: THE COMPLETE COSMIC LADDER (UNIFIED) */}
        <motion.section 
          className="mt-32 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-8">
            3. The Complete Hierarchy
          </h2>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed max-w-2xl mx-auto">
            If we zoom out from the human perspective, the measurements of reality stretch into proportions that defy imagination. Scroll slowly, and watch as the scale of existence physically expands outward—from the blink of an eye to the dissolution of the universe itself.
          </p>
        </motion.section>

        <div className="w-screen relative left-1/2 -translate-x-1/2">
          <CosmicLadder />
        </div>

        {/* SECTION 5: WHERE ARE WE TODAY? */}
        <motion.section 
          className="mt-48 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-8 text-center">
            4. So... Where Are We Today?
          </h2>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed max-w-3xl mx-auto text-center">
            According to traditional reckoning, we are currently navigating the turbulence of Kali Yuga. While scholars distinguish ancient scripture from later chronological calculations, the traditional "Cosmic Address" of humanity places us precisely here within the Creator's vast lifespan:
          </p>
        </motion.section>

        <CosmicAddress />

        {/* SECTION 8: PRALAYA */}
        <motion.section 
          className="mt-48 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-8">
              8. Pralaya: The Cosmic Sleep
            </h2>
            <p className="font-cormorant text-2xl font-light text-[#0D0D0C]/80 leading-relaxed mb-6 italic">
              "Does everything eventually end? Or does everything simply sleep?"
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              The word "dissolution" often inspires fear. We imagine destruction and tragic endings. But Pralaya is simply rest. It is the deep, dreamless sleep the universe needs before it can wake up and bloom again. The scriptures describe four distinct types of dissolution:
            </p>
          </div>
          <PralayaPanels />
        </motion.section>

        {/* SECTION 9: SCIENCE */}
        <motion.section 
          className="mt-48 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-8">
              9. Time and Modern Science
            </h2>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              It is tempting to try and prove the validity of Sanātana Dharma by comparing its immense timescales to the findings of modern physics. However, they are two entirely different systems of inquiry. They sit side by side—one mapping the external physical universe, the other mapping the internal journey of the soul.
            </p>
          </div>
          <ScienceComparison />
        </motion.section>

        {/* SECTION 10: MISCONCEPTIONS */}
        <motion.section 
          className="mt-48 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-8">
              10. Common Misconceptions
            </h2>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              When dealing with numbers this large and concepts this vast, misunderstandings naturally arise. Let us clarify the most common myths regarding Hindu time.
            </p>
          </div>
          <MisconceptionCards />
        </motion.section>

        {/* FINAL SECTION: REFLECTION */}
        <motion.section 
          className="mt-48 pb-[50vh] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <p className="font-cormorant text-2xl font-light text-[#0D0D0C]/70 leading-loose max-w-2xl mx-auto mb-16">
            We spend our lives racing against deadlines. <br/>
            We count our birthdays. <br/>
            We watch our parents age. <br/>
            We watch our children grow. <br/>
            And underneath it all runs the quiet, constant fear of running out of time.
          </p>

          <p className="font-cormorant text-3xl font-medium text-[#C58B52] leading-relaxed max-w-2xl mx-auto italic mt-32">
            If time is not merely something we pass through...<br/>
            ...what if time itself has been guiding us all along?
          </p>
        </motion.section>

      </main>
    </div>
  );
}
