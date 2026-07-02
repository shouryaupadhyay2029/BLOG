import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import useScrollSpy from '@/hooks/useScrollSpy';

function GrainCanvas() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9998] noise-fine"
        style={{ mixBlendMode: 'overlay', opacity: 0.65 }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9999] noise-coarse"
        style={{ mixBlendMode: 'soft-light', opacity: 0.45 }}
      />
    </>
  );
}

const EASE_EXPO = [0.16, 1, 0.3, 1];

function DharmaChakraWatermark() {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] pointer-events-none z-0"
      style={{ opacity: 0.03 }}
      viewBox="0 0 100 100"
      fill="none"
      stroke="#E9E2D4"
      strokeWidth="0.5"
    >
      <circle cx="50" cy="50" r="45" />
      <circle cx="50" cy="50" r="38" />
      <circle cx="50" cy="50" r="8" />
      {[...Array(24)].map((_, i) => (
        <line
          key={i}
          x1="50" y1="50" x2="50" y2="12"
          transform={`rotate(${i * 15} 50 50)`}
        />
      ))}
    </svg>
  );
}

const SECTIONS = [
  { id: 'intro', label: '00 The Question' },
  { id: 'sec-1', label: '01 Empathy' },
  { id: 'sec-2', label: '02 History' },
  { id: 'sec-3', label: '03 Clichés' },
  { id: 'sec-4', label: '04 Introduction' },
  { id: 'sec-5', label: '05 The Soul' },
  { id: 'sec-6', label: '06 Karma' },
  { id: 'sec-7', label: '07 Suffering' },
  { id: 'sec-8', label: '08 Vision' },
  { id: 'sec-9', label: '09 Compassion' },
  { id: 'sec-10', label: '10 Misconceptions' },
  { id: 'sec-11', label: '11 Philosophy' },
  { id: 'sec-12', label: '12 Consensus' },
  { id: 'sec-13', label: '13 Today' },
  { id: 'sec-14', label: '14 For You' },
  { id: 'sec-15', label: '15 Reflection' }
];

export function WhyDoInnocentPeopleSuffer() {
  const spySections = useMemo(() => SECTIONS, []);
  const activeSection = useScrollSpy(spySections, { rootMargin: '-10% 0px -50% 0px' });

  return (
    <div className="relative w-full min-h-screen bg-[#0D0D0C] text-[#E9E2D4] flex flex-col items-center font-sans antialiased overflow-x-hidden">
      <GrainCanvas />

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
                    color: '#E9E2D4',
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
          <span className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#C58B52]">
            INQUIRY ARCHIVE
          </span>
        </Link>

        <Link to="/library" className="group flex items-center">
          <span className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#E9E2D4]/50 group-hover:text-[#C58B52]">
            TATTVA LIBRARY
          </span>
        </Link>

        <Link to="/satya-mithya" className="group flex items-center">
          <span className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#E9E2D4]/50 group-hover:text-[#C58B52]">
            SATYA & MITHYĀ
          </span>
        </Link>
      </nav>

      {/* FLOATING PROGRESS NAVIGATION (Desktop Only) */}
      <div className="hidden xl:flex fixed left-12 top-1/2 -translate-y-1/2 z-40 flex-col gap-4">
        {SECTIONS.map((sec, i) => {
          const isActive = activeSection === sec.id;
          const isPast = SECTIONS.findIndex(s => s.id === activeSection) > i;

          let textColor = 'text-[#E9E2D4]/20';
          if (isActive) textColor = 'text-[#E9E2D4]';
          else if (isPast) textColor = 'text-[#E9E2D4]/40';

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
          <DharmaChakraWatermark />

          <div className="relative z-10 flex flex-col items-center">
            <span className="font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-[#C58B52] mb-6 block text-center">
              INQUIRY I
            </span>
            <h1 className="font-instrument text-5xl md:text-7xl lg:text-8xl text-[#E9E2D4] tracking-tight mb-8 text-center leading-none">
              Why do innocent<br />people suffer?
            </h1>
            <p className="font-cormorant italic text-2xl text-[#E9E2D4]/70 max-w-2xl mx-auto text-center leading-relaxed mb-12">
              Sanātana Dharma’s answer to the problem of innocent suffering
            </p>

            {/* READING METADATA */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-b border-[#C58B52]/20 py-4 w-full max-w-2xl">
              <div className="flex flex-col items-center">
                <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#C58B52]/60 mb-1">READING TIME</span>
                <span className="font-general text-[10px] uppercase tracking-widest text-[#E9E2D4]/80">14 MIN</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#C58B52]/60 mb-1">TRADITION</span>
                <span className="font-general text-[10px] uppercase tracking-widest text-[#E9E2D4]/80">VEDĀNTA</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#C58B52]/60 mb-1">PRIMARY SOURCES</span>
                <span className="font-general text-[10px] uppercase tracking-widest text-[#E9E2D4]/80">8 SCRIPTURES</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-general text-[8px] uppercase tracking-[0.3em] text-[#C58B52]/60 mb-1">LEVEL</span>
                <span className="font-general text-[10px] uppercase tracking-widest text-[#E9E2D4]/80">INTERMEDIATE</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 1. HUMAN OPENING */}
        <motion.section
          id="intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mb-32 w-full max-w-3xl text-center"
        >
          <p className="font-cormorant text-2xl md:text-3xl font-light text-[#E9E2D4]/90 leading-relaxed mx-auto italic mb-12">
            A father waits outside an operation theatre.<br />
            A mother loses her only child.<br />
            Someone who has always lived honestly suddenly loses everything.
          </p>
          <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed mx-auto mb-8">
            In moments like these, philosophy is rarely the first thing people seek.
          </p>
          <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed mx-auto mb-8">
            They ask only one question.
          </p>
          <p className="font-instrument text-5xl md:text-6xl text-[#E9E2D4] tracking-tight mb-8">
            "Why?"
          </p>
          <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed mx-auto">
            Not as scholars.<br />
            Not as philosophers.<br />
            As human beings.
          </p>
        </motion.section>

        {/* 2. BEFORE WE OPEN THE SCRIPTURES */}
        <motion.section
          id="sec-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mb-32 w-full max-w-3xl"
        >
          <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12 text-center">
            Before we open the scriptures
          </h2>
          <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12 mx-auto" />
          <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed text-center mx-auto mb-8">
            Before we discuss karma, destiny, or suffering, something deeply important must be acknowledged.
          </p>
          <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed text-center mx-auto mb-8">
            If someone has just lost a loved one, simply saying <em>"It is your karma"</em> is not compassion. It is not how Sanātana Dharma teaches wisdom.
          </p>
          <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed text-center mx-auto">
            True understanding never removes empathy. Philosophy should never be used to silence grief.
          </p>
        </motion.section>

        {/* 3. WHY THIS QUESTION HAS ALWAYS EXISTED */}
        <motion.section
          id="sec-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mb-32 w-full max-w-3xl"
        >
          <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12 text-center">
            A timeless sorrow
          </h2>
          <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12 mx-auto" />
          <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed text-center mx-auto mb-8">
            This question is not unique to modern times.
          </p>
          <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed text-center mx-auto">
            Across thousands of years, parents, kings, sages, and seekers have all struggled with the same agonizing mystery. The scriptures preserve these profound questions because they recognize them as deeply human. The sages did not write answers to dismiss our pain, but to elevate it.
          </p>
        </motion.section>

        {/* 4. WHAT PEOPLE COMMONLY HEAR */}
        <motion.section
          id="sec-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mb-32 w-full max-w-3xl"
        >
          <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12 text-center">
            What we are often told
          </h2>
          <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12 mx-auto" />
          <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed text-center mx-auto mb-8">
            When tragedy strikes, people are often offered well-meaning but hollow clichés:
          </p>
          <ul className="font-cormorant text-2xl font-light text-[#C58B52] leading-relaxed space-y-4 mb-12 text-center italic">
            <li>"It is karma."</li>
            <li>"It was God's will."</li>
            <li>"Everything happens for a reason."</li>
            <li>"It was destiny."</li>
          </ul>
          <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed text-center mx-auto mb-8">
            But...
          </p>
          <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed text-center mx-auto">
            do the scriptures actually say these things in this way?
          </p>
        </motion.section>

        {/* EXISTING INTRODUCTION & SHORT ANSWER */}
        <motion.section
          id="sec-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mb-48 w-full md:w-[100vw] max-w-full md:max-w-none md:relative md:left-1/2 md:right-1/2 md:-translate-x-1/2 py-16 px-6 md:px-16 border-y border-[#C58B52]/20 bg-[#C58B52]/[0.02] flex flex-col items-center"
        >
          <div className="w-full max-w-3xl text-center mb-16">
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#E9E2D4]/80 leading-relaxed mx-auto">
              A child is born into suffering.<br />
              A kind person loses everything.<br />
              The dishonest sometimes seem to prosper.<br />
              Across civilizations, humanity has always asked the same question:<br />
              <span className="italic">Why do innocent people suffer?</span>
              <br /><br />
              Sanātana Dharma does not dismiss this question.<br />
              It answers it through scripture, philosophy, and a deep understanding of the soul, karma, rebirth, dharma, and liberation.
            </p>
          </div>

          <div className="max-w-4xl flex flex-col items-center pt-8 border-t border-[#C58B52]/20">
            <p className="font-cormorant text-3xl md:text-4xl text-[#E9E2D4] leading-relaxed text-center font-light mt-8 mb-12">
              According to Sanātana Dharma, suffering is not random, and it is not simply divine punishment. The soul is eternal, life extends beyond one birth, and present conditions may arise from karma, free will, collective causes, and cosmic law. At the same time, the tradition does not justify cruelty or apathy. It insists that the wise respond to suffering with compassion, dharma, and selfless action.
            </p>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40" />
          </div>
        </motion.section>

        <div className="space-y-48 w-full max-w-3xl">

          {/* Section 5: The Soul */}
          <motion.section
            id="sec-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12">
              The soul is eternal
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed mb-16">
              The fundamental truth established in the Bhagavad Gītā and the Upaniṣads is that the true self, the Ātman, is indestructible. It is never born, nor does it ever die. The suffering experienced by a living being, however profound and agonizing, belongs to the realm of the body, the mind, and Saṃsāra (the cycle of worldly existence). Because the Ātman traverses across countless lifetimes, the narrative of one's existence is far broader than a single birth. What appears as a cruel and abrupt injustice in the frame of a single lifetime is recognized as merely one brief chapter in the eternal journey of the soul.
            </p>

            <div className="border border-[#C58B52]/20 bg-[#121212] p-12 my-16 flex flex-col items-center text-center w-full">
              <span className="font-general text-[10px] uppercase tracking-widest text-[#C58B52]/70 block mb-8">Bhagavad Gītā 2.20</span>
              <p className="font-sanskrit text-3xl md:text-4xl text-[#E9E2D4] mb-6 leading-relaxed font-light">न जायते म्रियते वा कदाचित्</p>
              <p className="font-general text-sm tracking-widest text-[#E9E2D4]/50 mb-10 italic">na jāyate mriyate vā kadācit</p>
              <p className="font-cormorant text-2xl text-[#E9E2D4]/90 italic">"It is never born, nor does it ever die."</p>
            </div>
          </motion.section>

          {/* Section 6: Karma (with Storytelling Expansion) */}
          <motion.section
            id="sec-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12">
              Karma is real, but it is not simplistic
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed mb-8">
              Karma is frequently misunderstood as fatalism or divine spite. In reality, it is a universal law of cause and effect. It operates across three distinct modalities: Sañcita Karma (the accumulated storehouse of past actions), Prārabdha Karma (the specific portion of past actions bearing fruit in the present life), and Kriyāmāṇa Karma (the actions actively being created right now through free will).
            </p>

            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed mb-12">
              To understand the staggering complexity of Sañcita Karma, the Mahābhārata offers the story of Sage Māṇḍavya. The great ascetic was once falsely accused of theft and wrongly impaled by a king. Surviving through his spiritual power, he later confronted Dharma (the god of justice) to ask what sin could possibly justify such agony. Dharma revealed it was because, as a small boy, Māṇḍavya had pierced insects with a blade of grass.
            </p>
            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed mb-8">
              Māṇḍavya was outraged. He argued that the actions of an ignorant child should not dictate the fate of a conscious man, fundamentally reforming the cosmic laws of accountability. This story beautifully illustrates that because these interwoven layers span lifetimes and generations, reducing someone's present tragedy to a simple "they must have done something bad" is not only unscriptural, it is a gross oversimplification. Not every instance of suffering can be neatly traced to a single, visible karmic cause.
            </p>

            <div className="w-full flex flex-col items-center justify-center py-16">
              <div className="w-[40px] h-[1px] bg-[#C58B52]/40 mb-16" />
              <p className="font-cormorant text-3xl md:text-5xl text-[#C58B52] leading-tight text-center italic">
                "We cannot judge another person's karma.<br />We can only choose our own Dharma."
              </p>
              <div className="w-[40px] h-[1px] bg-[#C58B52]/40 mt-16" />
            </div>
          </motion.section>

          {/* Section 7: Suffering */}
          <motion.section
            id="sec-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12">
              Suffering is not always punishment
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">
              Sanātana Dharma strictly rejects the theology that every painful event is an active, wrathful punishment from a vindictive God. Suffering is an inherent mechanism of Saṃsāra—part of a vast, complex cosmological and moral order. Sometimes suffering occurs due to collective karma, sometimes as a spiritual catalyst to sever deep attachments, and sometimes as the natural turbulence of the material modes of nature (Guṇas). It is a feature of the grand cosmic design, designed not to break the soul, but ultimately to turn it toward liberation (Mokṣa).
            </p>
          </motion.section>

          {/* Section 8: Human Vision */}
          <motion.section
            id="sec-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12">
              Human beings cannot see the whole picture
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed mb-8">
              We operate from a profound deficit of vision. Human perception is confined to the infinitesimally small slice of reality we call the present lifetime. We cannot see the origins of a soul, the intricate web of past debts, or the spiritual destination toward which it is traveling.
            </p>
            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">
              Because of this blindness, we are entirely unqualified to judge the destiny or the karmic burden of another person. It requires deep humility to admit that while cosmic justice exists, its mechanisms remain vast and opaque to the ordinary human eye.
            </p>
          </motion.section>

          {/* Section 9: Compassion */}
          <motion.section
            id="sec-9"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12">
              The scriptures also speak about compassion
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed mb-8">
              Understanding karma should never curdle into spiritual arrogance or apathy. A true understanding of Dharma does not allow one to look at a suffering child and coldly declare, "It is just their karma."
            </p>
            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">
              Instead, the realization that all beings share the same divine Ātman mandates radical compassion (Karuṇā). If another is suffering, your immediate Dharma—your Kriyāmāṇa Karma—is to alleviate it through Seva (selfless service). To weaponize the philosophy of karma as an excuse for indifference is considered a grave violation of Dharma itself.
            </p>
          </motion.section>

          {/* Section 10: Misconceptions */}
          <motion.section
            id="sec-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12">
              What the tradition does not say
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <ul className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed space-y-6 list-none">
              <li className="flex gap-6"><span className="text-[#C58B52]">—</span> Not every suffering is a punishment.</li>
              <li className="flex gap-6"><span className="text-[#C58B52]">—</span> Not every victim "deserves" what happened to them in a simplistic moral sense.</li>
              <li className="flex gap-6"><span className="text-[#C58B52]">—</span> Karma does not mean fatalism; free will remains the instrument to rewrite destiny.</li>
              <li className="flex gap-6"><span className="text-[#C58B52]">—</span> Compassion never becomes invalid because of karma.</li>
              <li className="flex gap-6"><span className="text-[#C58B52]">—</span> We cannot confidently identify or judge another person's karmic ledger.</li>
            </ul>
          </motion.section>

          {/* Section 11: Philosophy */}
          <motion.section
            id="sec-11"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12">
              Different philosophical lenses
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed mb-12">
              Various schools (Darśanas) of Vedānta address suffering through distinct metaphysical lenses:
            </p>
            <div className="space-y-12 pl-4 border-l border-[#C58B52]/20">
              <div className="pl-6">
                <span className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] block mb-3">Advaita (Non-Dualism)</span>
                <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">Suggests that from the highest perspective of absolute reality (Paramārthika), suffering and the individual ego are part of cosmic illusion (Māyā). Only the non-dual Brahman is real.</p>
              </div>
              <div className="pl-6">
                <span className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] block mb-3">Viśiṣṭādvaita (Qualified Non-Dualism)</span>
                <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">Views the soul as a real fragment of the Divine. Suffering is a real experience within creation, meant to purify the soul and foster deep surrender (Prapatti) to Nārāyaṇa.</p>
              </div>
              <div className="pl-6">
                <span className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] block mb-3">Dvaita (Dualism)</span>
                <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">Maintains an absolute distinction between the soul and Bhagavān. Suffering is the result of the soul's beginningless karma, alleviated only through pure devotion (Bhakti) and divine grace.</p>
              </div>
            </div>
          </motion.section>

          {/* Section 12: Consensus */}
          <motion.section
            id="sec-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12">
              Scriptural consensus
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-16" />

            <div className="w-full border-t border-[#E9E2D4]/10">
              <div className="flex flex-col md:flex-row py-10 border-b border-[#E9E2D4]/10 gap-8">
                <div className="w-full md:w-1/3 flex items-start gap-4">
                  <span className="text-[#C58B52] font-serif opacity-50 text-sm">✦</span>
                  <span className="font-general text-[11px] uppercase tracking-widest text-[#C58B52] mt-1">Bhagavad Gītā</span>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">Establishes the eternity of the Ātman, declaring that the self is unaffected by physical destruction, and emphasizes doing one's duty without attachment to the fruits of action.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row py-10 border-b border-[#E9E2D4]/10 gap-8">
                <div className="w-full md:w-1/3 flex items-start gap-4">
                  <span className="text-[#C58B52] font-serif opacity-50 text-sm">✦</span>
                  <span className="font-general text-[11px] uppercase tracking-widest text-[#C58B52] mt-1">Upaniṣads</span>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">Map the mechanics of karma and rebirth, explaining how desire and action shape the soul's trajectory across lifetimes until ultimate knowledge is achieved.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row py-10 border-b border-[#E9E2D4]/10 gap-8">
                <div className="w-full md:w-1/3 flex items-start gap-4">
                  <span className="text-[#C58B52] font-serif opacity-50 text-sm">✦</span>
                  <span className="font-general text-[11px] uppercase tracking-widest text-[#C58B52] mt-1">Mahābhārata</span>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">Explores the immense complexity of Dharma through narratives where even the most righteous and innocent endure unimaginable hardships, illustrating cosmic destiny.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row py-10 border-b border-[#E9E2D4]/10 gap-8">
                <div className="w-full md:w-1/3 flex items-start gap-4">
                  <span className="text-[#C58B52] font-serif opacity-50 text-sm">✦</span>
                  <span className="font-general text-[11px] uppercase tracking-widest text-[#C58B52] mt-1">Śrīmad Bhāgavatam</span>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">Provides profound solace by showing how supreme devotion (Bhakti) transcends karma, where suffering often becomes the fire that purifies the devotee's surrender.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row py-10 border-b border-[#E9E2D4]/10 gap-8">
                <div className="w-full md:w-1/3 flex items-start gap-4">
                  <span className="text-[#C58B52] font-serif opacity-50 text-sm">✦</span>
                  <span className="font-general text-[11px] uppercase tracking-widest text-[#C58B52] mt-1">Dharma Literature</span>
                </div>
                <div className="w-full md:w-2/3">
                  <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">Mandates absolute moral responsibility, declaring that charity, compassion, and the alleviation of another's pain are the highest forms of righteous living.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 13. WHAT DOES THIS MEAN TODAY? */}
          <motion.section
            id="sec-13"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12">
              What does this mean today?
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed mb-8">
              Whether you are losing a loved one, enduring an unexpected tragedy, watching innocent people suffer, or feeling an overwhelming sense of helplessness and anger—the scriptures do not ask you to suppress your grief.
            </p>
            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed mb-8">
              Questioning God, feeling angry at the silence of the cosmos, or weeping at injustice are deeply human experiences, recognized by every tradition of Vedānta.
            </p>
            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">
              However, the tradition teaches that we must not remain paralyzed there. Grief, in time, may gradually transform into compassion for others who hurt, wisdom about the temporary nature of the world, and a profound responsibility to uphold Dharma.
            </p>
          </motion.section>

          {/* 14. IF YOU ARE ASKING THIS BECAUSE... */}
          <motion.section
            id="sec-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12">
              If you are asking this...
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-12" />
            <div className="space-y-12">
              <div>
                <p className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] mb-3">...because you recently lost someone,</p>
                <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">
                  Know that your sorrow is honored. Do not force philosophy onto your pain before you are ready; simply breathe, remember their eternal Ātman, and take the time you need to heal.
                </p>
              </div>
              <div>
                <p className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] mb-3">...because you are questioning God,</p>
                <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">
                  The tradition holds space for your doubt. Searching for justice in a painful world is a profound spiritual act that often leads directly into the deepest truths of the Upaniṣads.
                </p>
              </div>
              <div>
                <p className="font-general text-[12px] uppercase tracking-widest text-[#C58B52] mb-3">...because you are simply searching for truth,</p>
                <p className="font-cormorant text-xl font-light text-[#E9E2D4]/80 leading-relaxed">
                  Let this philosophy become a call to action. The realization of cosmic law should never make us passive observers, but fiercely active protectors of the vulnerable.
                </p>
              </div>
            </div>
          </motion.section>

          {/* 15. BEFORE YOU LEAVE (Reflection) */}
          <motion.section
            id="sec-15"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: EASE_EXPO }}
            className="pt-16"
          >
            <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12 text-center">
              Before You Leave...
            </h2>
            <div className="w-[60px] h-[1px] bg-[#C58B52]/40 mb-16 mx-auto" />
            <p className="font-cormorant text-2xl md:text-3xl font-light text-[#E9E2D4]/90 leading-relaxed max-w-3xl italic text-center mx-auto mb-16">
              Sanātana Dharma does not ask us to become cold, unfeeling judges of another person’s pain.<br />
              It asks us to become more compassionate, more responsible, and more awake.
            </p>
            <p className="font-cormorant text-2xl font-light text-[#E9E2D4]/70 leading-relaxed max-w-2xl text-center mx-auto">
              Even when we cannot fully explain the vast geometry of destiny or why innocence is broken, we still retain our most profound freedom—the freedom to choose how we respond.
            </p>
            <p className="font-instrument text-5xl md:text-6xl text-[#C58B52] mt-24 text-center tracking-tight">
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
          <div className="w-full border-t border-b border-[#E9E2D4]/10 py-16 flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/3">
              <span className="font-general text-[10px] uppercase tracking-[0.3em] text-[#E9E2D4]/50 block">
                Primary Scriptures
              </span>
            </div>
            <div className="w-full md:w-2/3">
              <ul className="font-cormorant text-2xl font-light text-[#E9E2D4]/80 space-y-6">
                <li>Bhagavad Gītā</li>
                <li>Upaniṣads <span className="text-lg opacity-50 italic">(Bṛhadāraṇyaka, Kaṭha, Chāndogya)</span></li>
                <li>Mahābhārata</li>
                <li>Śrīmad Bhāgavatam</li>
                <li>Purāṇas <span className="text-lg opacity-50 italic">(Viṣṇu Purāṇa)</span></li>
                <li className="pt-6 mt-6 border-t border-[#E9E2D4]/10 opacity-70">Dharma literature on karma and duty</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CONTINUE YOUR INQUIRY */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="mt-48 w-full max-w-3xl flex flex-col items-center"
        >
          <span className="font-general text-[10px] uppercase tracking-[0.3em] text-[#C58B52] mb-16 block text-center">
            Continue Your Inquiry
          </span>
          <div className="flex flex-col w-full">
            <Link to="/inquiry/free-will-or-destiny" className="group flex items-center justify-between py-8 border-b border-[#E9E2D4]/10 w-full">
              <span className="font-cormorant text-3xl font-light text-[#E9E2D4]/80 group-hover:text-[#E9E2D4] transition-colors duration-500">
                Do we truly have free will?
              </span>
              <span className="text-[#C58B52] transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500">→</span>
            </Link>
            <Link to="/inquiry/does-consciousness-survive-death" className="group flex items-center justify-between py-8 border-b border-[#E9E2D4]/10 w-full">
              <span className="font-cormorant text-3xl font-light text-[#E9E2D4]/80 group-hover:text-[#E9E2D4] transition-colors duration-500">
                Does Consciousness Survive Death?
              </span>
              <span className="text-[#C58B52] transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500">→</span>
            </Link>
            <Link to="/library" className="group flex items-center justify-between py-8 border-b border-[#E9E2D4]/10 w-full">
              <span className="font-cormorant text-3xl font-light text-[#E9E2D4]/80 group-hover:text-[#E9E2D4] transition-colors duration-500">
                How Time Flows in Sanātana Dharma
              </span>
              <span className="text-[#C58B52] transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500">→</span>
            </Link>
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
          <span className="font-cormorant text-xl tracking-[0.5em] uppercase text-[#E9E2D4]/30 mb-6">
            Tattva
          </span>
          <span className="font-cormorant italic text-lg text-[#C58B52]/50">
            "A Search Beyond Certainty"
          </span>
        </motion.div>

      </div>
    </div>
  );
}
