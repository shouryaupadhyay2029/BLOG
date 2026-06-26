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
  { id: 'intro', label: '00 The Moment' },
  { id: 'sec-1', label: '01 The Pause' },
  { id: 'sec-2', label: '02 History' },
  { id: 'sec-3', label: '03 Our Questions' },
  { id: 'sec-4', label: '04 Introduction' },
  { id: 'sec-5', label: '05 The Freedom We Already Possess' },
  { id: 'sec-6', label: '06 The Circumstances We Never Chose' },
  { id: 'sec-7', label: '07 Every Choice Leaves an Echo' },
  { id: 'sec-8', label: '08 What Can Still Change?' },
  { id: 'sec-9', label: '09 What We Inherit' },
  { id: 'sec-10', label: '10 The Day Arjuna Put Down His Bow' },
  { id: 'sec-11', label: '11 Philosophy' },
  { id: 'sec-12', label: '12 Consensus' },
  { id: 'sec-13', label: '13 Evidence Map' },
  { id: 'sec-14', label: '14 Not Asked' },
  { id: 'sec-15', label: '15 Living With Destiny' },
  { id: 'sec-16', label: '16 For You' },
  { id: 'sec-17', label: '17 Before You Leave' }
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
          <span className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#C58B52]">
            INQUIRY ARCHIVE
          </span>
        </Link>

        <Link to="/library" className="group flex items-center">
          <span className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#0D0D0C]/50 group-hover:text-[#C58B52]">
            TATTVA LIBRARY
          </span>
        </Link>

        <Link to="/satya-mithya" className="group flex items-center">
          <span className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#0D0D0C]/50 group-hover:text-[#C58B52]">
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
              Understanding Karma, Destiny, Human Choice and Liberation in Sanātana Dharma.
            </p>
            
            {/* Metadata Row */}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 pt-8 border-t border-[#C58B52]/20">
              <div className="flex flex-col items-center">
                <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#0D0D0C]/40 mb-1">READING TIME</span>
                <span className="font-general text-[10px] tracking-widest text-[#C58B52]">≈10–12 MIN</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#0D0D0C]/40 mb-1">TRADITION</span>
                <span className="font-general text-[10px] tracking-widest text-[#C58B52]">VEDĀNTA</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#0D0D0C]/40 mb-1">PRIMARY SOURCES</span>
                <span className="font-general text-[10px] tracking-widest text-[#C58B52] text-center max-w-[200px]">UPANIṢADS • BHAGAVAD GĪTĀ • BRAHMA SŪTRAS • MAHĀBHĀRATA</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#0D0D0C]/40 mb-1">LEVEL</span>
                <span className="font-general text-[10px] tracking-widest text-[#C58B52]">INTERMEDIATE</span>
              </div>
            </div>

            <div className="w-[120px] h-[1px] bg-[#C58B52]/40 mt-12" />
          </div>
        </motion.div>

        {/* 1. THE HUMAN MOMENT */}
        <motion.section
          id="intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mb-32 w-full max-w-3xl text-center"
        >
          <p className="font-cormorant text-2xl font-light text-[#0D0D0C]/90 leading-relaxed mx-auto italic mb-12">
            Every single day...<br />
            we make choices.
          </p>
          <p className="font-cormorant text-2xl font-light text-[#0D0D0C]/90 leading-relaxed mx-auto mb-12">
            Some disappear by tomorrow.<br />
            Some quietly change the rest of our lives.
          </p>
          <p className="font-cormorant text-2xl font-light text-[#0D0D0C]/90 leading-relaxed mx-auto mb-12">
            Choosing a career.<br />
            Forgiving someone.<br />
            Walking away.<br />
            Speaking the truth.<br />
            Remaining silent.<br />
            Helping a stranger.<br />
            Hurting someone we love.
          </p>
          <p className="font-cormorant text-2xl font-light text-[#0D0D0C]/90 leading-relaxed mx-auto mb-12">
            Years later...<br />
            many of us look back and ask only one question.
          </p>
          <p className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mx-auto mb-12 italic">
            "Did I really choose this...<br />
            or was it always going to happen?"
          </p>
        </motion.section>

        {/* 2. BEFORE WE DECIDE THE ANSWER */}
        <motion.section
          id="sec-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mb-32 w-full max-w-3xl"
        >
          <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12 text-center">
            Before we decide...
          </h2>
          <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12 mx-auto" />
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed text-center mx-auto mb-12">
            Before deciding whether everything is already destined, consider something.
          </p>
          <p className="font-cormorant text-2xl font-light text-[#C58B52] leading-relaxed text-center mx-auto mb-12 italic">
            If every decision has already been made...<br />
            why do we regret our mistakes?<br />
            Why do parents teach children?<br />
            Why do teachers encourage students?<br />
            Why do courts exist?<br />
            Why does Dharma ask us to choose righteousness?
          </p>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed text-center mx-auto mb-6">
            And perhaps the most important question...
          </p>
          <p className="font-cormorant text-2xl font-light text-[#0D0D0C]/90 leading-relaxed text-center mx-auto italic">
            Why did Śrī Kṛṣṇa spend eighteen chapters teaching Arjuna...<br />
            instead of simply saying, "The war is already destined."
          </p>
        </motion.section>

        {/* 3. WHY THIS QUESTION HAS NEVER DISAPPEARED */}
        <motion.section
          id="sec-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mb-32 w-full max-w-3xl"
        >
          <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12 text-center">
            The eternal question
          </h2>
          <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12 mx-auto" />
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed text-center mx-auto mb-8">
            Every civilization has struggled with this question.
          </p>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed text-center mx-auto">
            Within Sanātana Dharma, the question appears repeatedly because Dharma itself assumes moral responsibility. This has challenged kings, warriors, sages, philosophers, and ordinary people alike. The tension between divine orchestration and human action forms the very heart of spiritual inquiry.
          </p>
        </motion.section>

        {/* 4. QUESTIONS WE QUIETLY ASK OURSELVES */}
        <motion.section
          id="sec-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mb-48 w-full max-w-3xl"
        >
          <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12 text-center">
            Questions we quietly ask
          </h2>
          <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12 mx-auto" />
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed text-center mx-auto mb-8">
            The debate over destiny is not merely an intellectual exercise. It surfaces in our most intimate moments of doubt:
          </p>
          <ul className="font-cormorant text-2xl font-light text-[#C58B52] leading-relaxed space-y-4 text-center italic">
            <li>Did I ruin my own life?</li>
            <li>Could I have saved that relationship?</li>
            <li>Was I meant to meet this person?</li>
            <li>Can prayer still change anything?</li>
            <li>If God already knows the future... do my choices matter?</li>
          </ul>
        </motion.section>

        {/* 5. EXISTING INTRODUCTION & SHORT ANSWER */}
        <motion.section
          id="sec-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mb-48 w-[100vw] py-16 px-8 md:px-16 border-y border-[#C58B52]/20 bg-[#C58B52]/[0.03] flex flex-col items-center"
        >
          <div className="w-full max-w-3xl text-center mb-16">
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C]/80 leading-relaxed mx-auto mb-8">
              "If everything is already written, why should we strive?"
            </p>
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C]/80 leading-relaxed mx-auto mb-8">
              "If destiny governs life, do our choices truly matter?"
            </p>
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C]/80 leading-relaxed mx-auto mb-8">
              "Why did Śrī Kṛṣṇa urge Arjuna to fight if the outcome was already known?"
            </p>
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C]/80 leading-relaxed mx-auto">
              This question has been debated for thousands of years. Sanātana Dharma offers a nuanced answer that rejects both absolute fatalism and unlimited free will, viewing human agency as a profound journey of spiritual responsibility.
            </p>
          </div>
          
          <div className="max-w-4xl flex flex-col items-center pt-8 border-t border-[#C58B52]/20">
            <p className="font-cormorant text-3xl md:text-4xl text-[#0D0D0C] leading-relaxed text-center font-light mt-8 mb-12">
              Sanātana Dharma rejects both absolute determinism and absolute free will. Human beings inherit circumstances through past karma (Prārabdha), yet retain meaningful freedom to think, choose and act in the present. These present choices become future karma and shape one's spiritual journey. The highest freedom is not unlimited worldly choice but Mokṣa, where the Ātman realizes its true nature beyond ignorance and karmic bondage.
            </p>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40" />
          </div>
        </motion.section>

        <div className="space-y-48 w-full max-w-3xl">
          
          {/* Section 6: Free Will */}
          <motion.section
            id="sec-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              1. The Freedom We Already Possess
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
              In modern discourse, freedom is often defined as the absence of all constraints—the unrestricted ability to do whatever we desire at any moment. But Sanātana Dharma views such "freedom" as merely another form of bondage. True freedom is not the ability to act on every impulse; it is the mastery over those impulses.
            </p>
            <div className="bg-[#C58B52]/5 border-l border-[#C58B52]/30 p-8 my-10 max-w-2xl mx-auto">
              <p className="font-cormorant text-2xl font-light text-[#0D0D0C] italic leading-relaxed text-center">
                "A person who is not disturbed by the incessant flow of desires—that enter like rivers into the ocean, which is ever being filled but is always still—can alone achieve peace, and not the man who strives to satisfy such desires."
              </p>
              <p className="font-general text-[10px] uppercase tracking-widest text-[#C58B52] mt-6 text-center">— Bhagavad Gītā 2.70</p>
            </div>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              The freedom we already possess is the freedom to observe, to deliberate, and to choose Dharma over our conditioning. Even when external circumstances are severely restricted, the quiet space between stimulus and response belongs entirely to us. This internal agency is the foundation of all spiritual evolution.
            </p>
          </motion.section>

          {/* Section 7: Destiny */}
          <motion.section
            id="sec-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              2. The Circumstances We Never Chose
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
              We are not born onto a blank canvas. We are born into specific families, inherit specific temperaments, and face certain unavoidable events. In Sanātana Dharma, this framework of predetermined circumstances is often called destiny, or <span className="italic">daiva</span>.
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-12">
              However, destiny is fundamentally misunderstood when equated with absolute fatalism. Destiny is simply the momentum of our own past actions (karma) ripening in the present. It sets the stage, but it does not write the script.
            </p>
            <p className="font-cormorant text-2xl font-light text-[#C58B52] leading-relaxed mb-12 italic text-center mx-auto max-w-xl">
              "Destiny may shape the road.<br />Dharma shapes the traveller."
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              Just as a farmer cannot change the soil he has inherited, but retains complete agency over what seeds he chooses to plant today, we cannot alter the circumstances that have already arrived, but we retain total command over how we respond to them.
            </p>
          </motion.section>

          {/* Section 8: Karma */}
          <motion.section
            id="sec-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              3. Every Choice Leaves an Echo
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-10">
              To understand the delicate balance between what is fixed and what is free, we must understand the mechanics of action. Every thought, word, and deed leaves a subtle imprint on consciousness. Over time, these imprints weave the fabric of our future. Classical traditions classify this into three elegant categories:
            </p>
            <ul className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed space-y-8 mb-12 pl-6 border-l border-[#C58B52]/20">
              <li>
                <span className="text-[#C58B52] font-medium block mb-2">Sañcita Karma (The Accumulated Past)</span>
                The vast, dormant reservoir of all past actions gathered over countless lifetimes. It is the warehouse of seeds not yet ready to sprout.
              </li>
              <li>
                <span className="text-[#C58B52] font-medium block mb-2">Prārabdha Karma (The Unfolding Present)</span>
                The specific portion of past karma that has ripened and is actively manifesting in this lifetime. This forms our unchangeable circumstances—our genetics, our initial predispositions, and the major inevitable events of life. Like an arrow already released from the bow, it cannot be recalled.
              </li>
              <li>
                <span className="text-[#C58B52] font-medium block mb-2">Kriyāmāṇa / Āgāmi Karma (The Freedom to Create)</span>
                The karma we are actively generating right now through conscious choices and intentional acts. This is where our true free will resides. It is the new arrow we are fitting to the string.
              </li>
            </ul>
            <div className="bg-[#C58B52]/10 border-l-2 border-[#C58B52] p-6 mt-8">
              <p className="font-general text-[10px] uppercase tracking-widest text-[#C58B52] mb-2">IMPORTANT</p>
              <p className="font-cormorant text-lg text-[#0D0D0C]/80 leading-relaxed">
                Mention clearly that these classifications are explained systematically in later Vedānta traditions while their principles arise from the broader scriptural tradition.
              </p>
            </div>
          </motion.section>

          {/* Section 9: What Can Change? */}
          <motion.section
            id="sec-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              4. What Can Still Change?
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-6">
              Almost everything about tomorrow. By applying fierce self-effort (<span className="italic">puruṣārtha</span>) through discipline, devotion, and ethical action, we actively override the momentum of the past. The scriptures insist that human agency is a potent force capable of altering the trajectory of the soul.
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              When we consciously choose Dharma over our automatic conditioning, we do not just change our external circumstances; we dissolve the internal ignorance that binds us. 
            </p>
          </motion.section>

          {/* Section 10: What Cannot Be Changed? */}
          <motion.section
            id="sec-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              5. What We Inherit
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-6">
              There are events in life that arrive like a storm, completely outside our control. These are the manifestations of <span className="italic">Prārabdha Karma</span>—the arrows already in flight. Illness, unexpected loss, natural disasters, or being born into a specific family in a specific era.
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              We inherit these circumstances without the immediate power to erase them. But while the event itself cannot be changed, our interpretation of it and our response to it are entirely unfettered. The event is destiny; the response is free will.
            </p>
          </motion.section>
        </div>

        {/* FULL SCREEN EDITORIAL DIVIDER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.5, ease: EASE_EXPO }}
          className="w-[100vw] min-h-[80vh] flex flex-col justify-center items-center py-32 px-8 text-center bg-[#E9E2D4]"
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-instrument text-4xl md:text-6xl text-[#0D0D0C] tracking-tight leading-tight mb-12 italic">
              "If everything were already decided...<br />why did Śrī Kṛṣṇa teach?"
            </h2>
            <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52]">
              THE QUESTION THAT CHANGES EVERYTHING
            </span>
          </div>
        </motion.div>

        <div className="space-y-48 w-full max-w-3xl mt-48">
          
          {/* Section 11: The Gāṇḍīva Bow (Expanded Arjuna Story) */}
          <motion.section
            id="sec-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              6. The Day Arjuna Put Down His Bow
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
              The air on the battlefield of Kurukṣetra was thick with the deafening sound of conch shells and war drums. Millions of warriors stood in formation, waiting for the signal that would begin the greatest war of their age.
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
              In the center of it all, standing in a golden chariot, the greatest archer in the world broke down. 
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
              Arjuna looked across the lines and saw his own teachers, his grandfathers, his cousins. Overwhelmed by a profound moral crisis, his hands trembled. The legendary divine bow, the Gāṇḍīva, slipped from his grasp. With tears in his eyes, he declared that he would rather live as a beggar than rule a kingdom soaked in the blood of his kin. He sat down in the chariot. He fell completely silent.
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-12">
              At that exact moment, Śrī Kṛṣṇa, who knows the entirety of the past, present, and future, was sitting right beside him.
            </p>
            <div className="bg-[#C58B52]/5 border-l border-[#C58B52]/30 p-8 my-12 mx-auto max-w-2xl text-center">
              <p className="font-cormorant text-2xl font-light text-[#0D0D0C] italic leading-relaxed">
                If the future were already fixed in stone... if Arjuna were merely a helpless puppet... why did Śrī Kṛṣṇa not simply tell him to stand aside? Why did He not say, "The war will happen regardless of what you do. Sit quietly, for your choices mean nothing"?
              </p>
            </div>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
              Instead, Śrī Kṛṣṇa paused. For eighteen profound chapters, He reasoned with Arjuna. He explained the eternal nature of the soul, the intricate mechanics of action, the psychology of human attachment, and the vast cosmic order of Dharma. He answered every doubt, dismantled every excuse, and illuminated the path of selfless action.
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              And at the very climax of this magnificent discourse, having revealed the ultimate truth of the universe, Śrī Kṛṣṇa did not issue a command. He looked at Arjuna and said:
            </p>
            <div className="my-10 text-center">
              <p className="font-cormorant text-2xl font-medium text-[#C58B52] leading-relaxed italic">
                "vimṛśyaitadaśeṣeṇa yathecchasi tathā kuru"
              </p>
              <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mt-4 italic">
                "Reflect fully on what I have told you, and then do as you choose." <br />
                <span className="text-[14px] text-[#0D0D0C]/50 not-italic mt-2 block">— Bhagavad Gītā 18.63</span>
              </p>
            </div>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              That breathtaking invitation—<span className="italic">do as you choose</span>—proves that even in the presence of God Himself, human agency is sacred. Responsibility, duty, and spiritual growth only possess meaning because we genuinely hold the power to choose.
            </p>
          </motion.section>

          {/* Section 12: Philosophy */}
          <motion.section
            id="sec-11"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              7. Different Philosophical Perspectives
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            
            <div className="space-y-12 pl-4 border-l border-[#C58B52]/30">
              <div className="pl-6">
                <span className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] block mb-3">Advaita Vedānta</span>
                <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">In the empirical reality (vyāvahārika), free will and karma are entirely real and govern human experience. However, from the ultimate standpoint (pāramārthika), the true Self (Ātman) is neither a doer nor an experiencer, transcending both karma and destiny entirely.</p>
              </div>
              <div className="pl-6">
                <span className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] block mb-3">Viśiṣṭādvaita</span>
                <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">Individual souls possess real agency, granted by the Supreme Lord. However, this freedom is dependent and relational. God acts as the inner controller (Antaryāmin), but respects the soul's moral choices, allowing karma to unfold according to one's actions.</p>
              </div>
              <div className="pl-6">
                <span className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] block mb-3">Dvaita</span>
                <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">The soul's agency is real and eternal, though eternally subordinate to God. Individual effort is necessary for liberation, and moral responsibility lies squarely with the individual, even though God is the ultimate enabler of all action.</p>
              </div>
              <div className="pl-6">
                <span className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] block mb-3">Sāṅkhya & Yoga</span>
                <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">Bondage occurs when pure consciousness (Puruṣa) falsely identifies with nature (Prakṛti) and its mechanical laws of cause and effect. Freedom is not about making better worldly choices, but realizing one's complete independence from the machinery of karma.</p>
              </div>
              <div className="pl-6">
                <span className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] block mb-3">Nyāya & Mīmāṃsā</span>
                <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">Nyāya strictly defends logical moral agency, asserting that without free will, the concept of justice collapses. Mīmāṃsā emphasizes that ritual and ethical duties (Dharma) are meaningless unless humans have the genuine capacity to intentionally perform them.</p>
              </div>
            </div>
          </motion.section>

          {/* Section 13: Consensus */}
          <motion.section
            id="sec-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              8. Scriptural Consensus
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-16" />
            
            <div className="w-full border-t border-[#0D0D0C]/10">
              {[
                { title: "Bhagavad Gītā", desc: "Consistently emphasizes self-effort. Declares that one must uplift oneself by oneself and never degrade oneself, for the self alone is one's friend, and the self alone is one's enemy (BG 6.5)." },
                { title: "Principal Upaniṣads", desc: "State that a person is shaped by their deepest desires. As is their desire, so is their resolve; as is their resolve, so is their deed; and as is their deed, so they become (Bṛhadāraṇyaka 4.4.5)." },
                { title: "Brahma Sūtras", desc: "Affirms that the individual soul is an active agent (kartā), not a passive object. This agency is necessary for scriptural injunctions and ethical living to hold any meaning (B.S. 2.3.33)." },
                { title: "Mahābhārata", desc: "Through the profound dialogue between Bhīṣma and Yudhiṣṭhira in the Anuśāsana Parva, it firmly concludes that human effort (puruṣārtha) is superior to destiny, for destiny itself is nothing but the result of past effort." },
                { title: "Śrīmad Bhāgavatam", desc: "Focuses on the liberating power of devotion (Bhakti). It teaches that while the laws of karma are binding, sincere surrender and divine grace can burn away accumulated destiny like fire reducing wood to ashes." },
                { title: "Classical Vedānta", desc: "Agrees across its various schools that while the initial circumstances of life are set by Prārabdha Karma, the present moment always demands active ethical and spiritual choice, paving the way to Mokṣa." }
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

          {/* Section 14: Evidence Map */}
          <motion.section
            id="sec-13"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              9. Evidence Map
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-16" />
            
            <div className="w-full border-t border-[#0D0D0C]/10">
              {[
                { claim: "Human beings possess inherent moral responsibility for their actions.", assessment: "Explicit Scriptural Teaching", color: "text-[#0D0D0C]/50" },
                { claim: "Past karma shapes the specific circumstances of our present life.", assessment: "Explicit Scriptural Teaching", color: "text-[#0D0D0C]/50" },
                { claim: "Present conscious choices create the architecture of our future.", assessment: "Explicit Scriptural Teaching", color: "text-[#0D0D0C]/50" },
                { claim: "Categorization of karma into Sañcita, Prārabdha, and Āgāmi.", assessment: "Classical Vedānta Framework", color: "text-[#0D0D0C]/50" },
                { claim: "Every single event in life is predestined and unchangeable.", assessment: "Not Supported", color: "text-[#0D0D0C]/50" },
                { claim: "Karma is identical to the Western concept of deterministic Fate.", assessment: "Oversimplification", color: "text-[#0D0D0C]/50" },
                { claim: "Humans are merely helpless puppets acting out a divine script.", assessment: "Not Supported", color: "text-[#0D0D0C]/50" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row py-10 border-b border-[#0D0D0C]/10 gap-8">
                  <div className="w-full md:w-1/3">
                    <span className={`font-general text-[10px] uppercase tracking-[0.2em] ${item.color}`}>{item.assessment}</span>
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">{item.claim}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 15: What The Scriptures Never Ask You To Believe */}
          <motion.section
            id="sec-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              10. What the scriptures never ask you to believe
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
              There is a profound difference between acknowledging the weight of our past and surrendering to helplessness. The scriptures do not explicitly teach that everything is already written in stone. They do not say that humans are merely puppets, that karma removes moral responsibility, that destiny replaces effort, or that God forces every decision we make.
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              Instead, they consistently elevate the opposite: conscious action, self-effort (Puruṣārtha), taking moral responsibility for one's life, and fiercely choosing Dharma even when the odds seem overwhelmingly predetermined. 
            </p>
          </motion.section>

          {/* Section 16: What Does This Mean Today? */}
          <motion.section
            id="sec-15"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              11. Living With Destiny
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
              Centuries remove us from the battlefield of Kurukṣetra, yet the fundamental crisis of agency remains identical. Today, this tension does not unfold on chariots, but in the silent turning points of modern life.
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-8">
              It appears in the agonizing over career decisions, when we wonder if we missed our true calling. It surfaces in the heartache of a broken relationship, haunting us with questions of what we could have done differently. It emerges when a child struggles despite our best parenting, or when a business collapses despite relentless effort. In our darkest moments, we are tempted to surrender everything to fate to soothe the sting of failure.
            </p>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-12">
              Sanātana Dharma asks us to hold two profound truths simultaneously. Yes, the sudden illness, the economic crash, the unexpected loss—these are the unfolding of past momentum. But how you stand within the wreckage is entirely up to you. 
            </p>
            <div className="bg-[#C58B52]/5 border-l border-[#C58B52]/30 p-8 my-12 mx-auto max-w-2xl text-center">
              <p className="font-cormorant text-2xl font-light text-[#C58B52] italic leading-relaxed">
                "The future is influenced by the past,<br />but it is not imprisoned by it."
              </p>
            </div>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
              When someone betrays you, that is an inherited circumstance. But whether you respond with enduring bitterness or quiet forgiveness is your active choice. That very choice is the chisel carving out your future. By consciously aligning our responses with Dharma, we slowly unbind ourselves from compulsive emotional cycles, transforming blind destiny into spiritual freedom.
            </p>
          </motion.section>

          {/* Section 17: If You Are Reading This Because... */}
          <motion.section
            id="sec-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12">
              If you are reading this...
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            
            <div className="space-y-12">
              <div>
                <p className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] mb-3">...because you regret a decision,</p>
                <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
                  Understand that Sanātana Dharma teaches responsibility without hopelessness. The past influences us deeply, but it does not imprison us. Your recognition of the mistake is itself the first act of new, conscious karma.
                </p>
              </div>
              <div>
                <p className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] mb-3">...because you feel trapped by destiny,</p>
                <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
                  The scriptures never encourage helplessness. They encourage fierce effort, discipline, self-transformation, and Dharma. Whatever walls destiny has built around you, your response remains yours to command.
                </p>
              </div>
              <div>
                <p className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] mb-3">...because you simply seek truth,</p>
                <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
                  Welcome. Some of the greatest conversations in the Upaniṣads, the Mahābhārata, and the Bhagavad Gītā began precisely because someone was willing to sit down and ask these difficult questions.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 18: Before You Leave... */}
          <motion.section
            id="sec-17"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
            className="pt-16"
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12 text-center">
              Before You Leave...
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-16 mx-auto" />
            <p className="font-cormorant text-2xl md:text-3xl font-light text-[#0D0D0C]/90 leading-relaxed max-w-3xl italic text-center mx-auto mb-16">
              Perhaps destiny is not a prison.<br />
              Perhaps it is simply the stage upon which life begins.
            </p>
            <p className="font-cormorant text-2xl font-light text-[#0D0D0C]/80 leading-relaxed max-w-2xl text-center mx-auto mb-16">
              The scriptures suggest that while we do not choose every circumstance into which we are born, we are constantly invited to choose how we respond.
            </p>
            <p className="font-cormorant text-2xl font-light text-[#C58B52] leading-relaxed max-w-2xl text-center mx-auto italic mb-16">
              Truth or falsehood.<br />
              Compassion or indifference.<br />
              Courage or fear.<br />
              Dharma or Adharma.
            </p>
            <p className="font-cormorant text-2xl font-light text-[#0D0D0C]/80 leading-relaxed max-w-2xl text-center mx-auto">
              And perhaps...<br />
              that invitation itself<br />
              is the deepest expression of human freedom.
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
                Primary Sources
              </span>
            </div>
            <div className="w-full md:w-2/3">
              <ul className="font-cormorant text-2xl font-light text-[#0D0D0C]/80 space-y-6">
                <li>Bhagavad Gītā</li>
                <li>Principal Upaniṣads</li>
                <li>Brahma Sūtras</li>
                <li>Mahābhārata</li>
                <li>Śrīmad Bhāgavatam</li>
                <li className="pt-6 mt-6 border-t border-[#0D0D0C]/10 opacity-70 italic">Classical Vedānta Commentaries</li>
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
