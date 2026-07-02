import React from 'react';
import { motion } from 'framer-motion';
import { ArticleHero } from '@/components/library/ui/ArticleHero';
import { EvidenceRatingSystem } from '@/components/library/ui/EvidenceRatingSystem';
import { TerminologyPrimer } from '@/components/library/ui/TerminologyPrimer';
import { InteractiveRoadmap } from '@/components/library/ui/InteractiveRoadmap';
import { CreationBeforeCreation } from '@/components/library/cosmology/CreationBeforeCreation';
import { BrahmandaChapter } from '@/components/library/cosmology/BrahmandaChapter';
import { FourteenLokasChapter } from '@/components/library/cosmology/FourteenLokasChapter';
import { MeruChapter } from '@/components/library/cosmology/meru/MeruChapter';
import { BhumandalaChapter } from '@/components/library/cosmology/bhumandala/BhumandalaChapter';
import { SaptaDvipaChapter } from '@/components/library/cosmology/saptadvipa/SaptaDvipaChapter';
import { CosmicTimeChapter } from '@/components/library/cosmology/time/CosmicTimeChapter';
import { CosmicCreationChapter } from '@/components/library/cosmology/creation/CosmicCreationChapter';
import { CosmologyAppendices } from '@/components/library/cosmology/appendices/CosmologyAppendices';

const EASE_EXPO = [0.16, 1, 0.3, 1];

const ROADMAP_STEPS = [
  { icon: 'I', title: 'The Origin of Everything', desc: 'From the unmanifest Brahman to the first vibration of existence.', time: '4 MIN' },
  { icon: 'II', title: 'The Cosmic Egg (Brahmāṇḍa)', desc: 'The golden sphere that contains all space, time, and matter.', time: '5 MIN' },
  { icon: 'III', title: 'The Fourteen Lokas', desc: 'The vertical hierarchy of planetary systems and states of consciousness.', time: '8 MIN' },
  { icon: 'IV', title: 'Mount Meru & Bhū-maṇḍala', desc: 'The golden axis of the universe and the earthly plane of action.', time: '7 MIN' },
  { icon: 'V', title: 'The Cosmic Oceans', desc: 'The vast rings of matter separating the seven island continents.', time: '5 MIN' },
  { icon: 'VI', title: 'Pralaya', desc: 'The inevitable dissolution and the eternal cycle of rebirth.', time: '6 MIN' },
];

const TERMINOLOGY = [
  { sanskrit: 'Brahman', iast: 'brahman', meaning: 'The Ultimate Reality', pronunciation: 'bruh-muhn', desc: 'The formless, infinite, and unchanging source of all existence. Not to be confused with Brahmā (the creator).' },
  { sanskrit: 'Brahmāṇḍa', iast: 'brahmāṇḍa', meaning: 'The Cosmic Egg', pronunciation: 'brah-mahn-duh', desc: 'A single universe. According to the Purāṇas, countless Brahmāṇḍas float in the causal ocean.' },
  { sanskrit: 'Loka', iast: 'loka', meaning: 'World / Realm', pronunciation: 'loh-kuh', desc: 'A plane of existence or planetary system. Not strictly a physical planet, but a dimension of consciousness and experience.' },
  { sanskrit: 'Kalpa', iast: 'kalpa', meaning: 'An Aeon', pronunciation: 'kull-puh', desc: 'A period equal to 4.32 billion human years, representing a single daytime for the creator deity.' },
];

export function TheArchitectureOfTheCosmos() {
  return (
    <div className="w-full min-h-screen bg-[#E9E2D4] text-[#0D0D0C] font-sans antialiased selection:bg-[#C58B52]/30">

      {/* 1. HERO SECTION */}
      <ArticleHero
        title="The Architecture of the Cosmos"
        subtitle="Before the first sunrise... Before galaxies... Before space itself... Ancient scriptures describe an astonishing vision of reality."
        readingTime="45 Min"
        difficulty="Advanced"
        scripturesCount="12+"
        versesCount="24"
        badges={[
          "Primary Scriptures",
          "Neutral Research",
          "Sanskrit Included",
          "Multiple Traditions",
          "Historical Sources"
        ]}
      />

      {/* ARTICLE CONTENT */}
      <div className="w-full max-w-4xl mx-auto px-6 py-32 flex flex-col gap-32">

        {/* 2. WHY THIS TOPIC MATTERS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 block">
            THE FOUNDATION
          </span>
          <h2 className="font-instrument text-4xl md:text-5xl lg:text-6xl text-[#0D0D0C] tracking-tight mb-8">
            Why This Topic Matters
          </h2>
          <div className="prose-custom">
            <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
              Hindu cosmology is widely regarded as one of the most sophisticated, vast, and philosophically rigorous cosmological systems ever developed in the ancient world. Yet, it is also one of the most misunderstood.
            </p>
            <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
              For centuries, colonial translators and later modern interpreters viewed these descriptions as primitive myths or purely literal geography. Today, another extreme exists: attempting to force ancient poetic verses to perfectly match modern quantum physics. Both approaches fail to grasp the true genius of the texts.
            </p>
            <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
              In Sanātana Dharma, cosmology is never just physical. It is an inseparable union of <strong>astronomy, metaphysics, theology, and consciousness</strong>. When a text describes a mountain of gold or an ocean of milk, it is speaking the language of profound symbolism, charting not just the geography of the stars, but the geography of the human soul.
            </p>
          </div>
        </motion.section>

        {/* 3. WHAT READERS WILL DISCOVER */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 block text-center">
            THE EXPEDITION
          </span>
          <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-4 text-center">
            What You Will Discover
          </h2>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/70 text-center max-w-2xl mx-auto mb-16">
            This article is not a simple list of planets. It is a curated journey through the structure of existence itself.
          </p>
          <InteractiveRoadmap steps={ROADMAP_STEPS} />
        </motion.section>

        {/* 4. QUICK SUMMARY */}
        <motion.section
          className="bg-[#0D0D0C] text-[#E9E2D4] p-12 md:p-16 rounded-sm shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          {/* Subtle noise/texture */}
          <div className="absolute inset-0 noise-fine opacity-20 mix-blend-overlay pointer-events-none" />

          <h2 className="font-instrument text-3xl md:text-5xl text-[#E9E2D4] tracking-tight mb-12 border-b border-[#C58B52]/20 pb-8 relative z-10">
            The Executive Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h4 className="font-cormorant text-2xl font-medium text-[#C58B52] mb-3">What is Brahmāṇḍa?</h4>
              <p className="font-cormorant text-lg font-light text-[#E9E2D4]/80 leading-relaxed">
                The literal translation is "Cosmic Egg." It refers to a single, self-contained universe. The texts state that an infinite number of these universes exist, bubbling up and dissolving like foam on the ocean of consciousness.
              </p>
            </div>
            <div>
              <h4 className="font-cormorant text-2xl font-medium text-[#C58B52] mb-3">What are Lokas?</h4>
              <p className="font-cormorant text-lg font-light text-[#E9E2D4]/80 leading-relaxed">
                Lokas are the fourteen "worlds" or planes of existence within our universe. Seven are higher (heavenly) and seven are lower (subterranean). They represent different frequencies of experience and spiritual elevation.
              </p>
            </div>
            <div>
              <h4 className="font-cormorant text-2xl font-medium text-[#C58B52] mb-3">What is Mount Meru?</h4>
              <p className="font-cormorant text-lg font-light text-[#E9E2D4]/80 leading-relaxed">
                The golden, central axis of the universe. Just as the spine is the central channel of the human body, Meru is the central structural and spiritual pillar around which all planetary systems revolve.
              </p>
            </div>
            <div>
              <h4 className="font-cormorant text-2xl font-medium text-[#C58B52] mb-3">What is Bhū-maṇḍala?</h4>
              <p className="font-cormorant text-lg font-light text-[#E9E2D4]/80 leading-relaxed">
                The great "Earthly disk." This does not merely mean the physical globe of Earth (Bhūmi), but rather the entire plane of the solar system where human-like, karma-bound action takes place.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 5. BEFORE WE BEGIN (SOURCES) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-8">
            Before We Begin: The Sources
          </h2>
          <div className="prose-custom">
            <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
              Hindu cosmology is not contained within a single definitive book. It is a vast, evolving tradition of thought that developed over thousands of years.
            </p>
            <ul className="flex flex-col gap-4 font-cormorant text-xl font-light text-[#0D0D0C]/80 mb-8 pl-4 border-l-2 border-[#C58B52]/30">
              <li><strong>The Vedas & Upaniṣads:</strong> Provide the ultimate metaphysical foundation (the nature of Brahman and creation).</li>
              <li><strong>The Purāṇas (e.g., Bhāgavata, Viṣṇu, Śiva):</strong> Provide the vivid, detailed geography, scales, and narratives of the Lokas and time cycles.</li>
              <li><strong>The Siddhāntas (e.g., Sūrya Siddhānta):</strong> Provide the rigorous mathematical and astronomical frameworks.</li>
              <li><strong>Classical Commentaries:</strong> Reconcile the poetic descriptions with observed astronomy.</li>
            </ul>
            <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
              Because of this vast diversity, <strong>minor differences naturally exist</strong> between texts (such as exact distances between planets). This article does not attempt to force them into artificial agreement, but rather presents the most widely accepted Puranic model, noting variations where significant.
            </p>
          </div>
        </motion.section>

        {/* 6. RESEARCH METHODOLOGY */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
        >
          <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 block text-center">
            ACADEMIC RIGOR
          </span>
          <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-4 text-center">
            Research Methodology
          </h2>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/70 text-center max-w-3xl mx-auto mb-16">
            Every TATTVA article is constructed utilizing a rigorous, transparent methodology designed to separate authentic scripture from popular modern myth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <h4 className="font-instrument text-3xl text-[#0D0D0C] mb-4 flex items-center gap-4">
                <span className="text-[#C58B52] text-xl">01</span> Primary Scriptures First
              </h4>
              <p className="font-cormorant text-lg font-light text-[#0D0D0C]/80 leading-relaxed">
                All claims are traced back to original Sanskrit source texts. This research prioritizes original verses over secondary modern summaries.
              </p>
            </div>
            <div>
              <h4 className="font-instrument text-3xl text-[#0D0D0C] mb-4 flex items-center gap-4">
                <span className="text-[#C58B52] text-xl">02</span> Sectarian Neutrality
              </h4>
              <p className="font-cormorant text-lg font-light text-[#0D0D0C]/80 leading-relaxed">
                Vaiṣṇava, Śaiva, and Śākta cosmological perspectives are presented without declaring one tradition as the exclusive "truth" of Hinduism.
              </p>
            </div>
            <div>
              <h4 className="font-instrument text-3xl text-[#0D0D0C] mb-4 flex items-center gap-4">
                <span className="text-[#C58B52] text-xl">03</span> Linguistic Analysis
              </h4>
              <p className="font-cormorant text-lg font-light text-[#0D0D0C]/80 leading-relaxed">
                This methodology distinguishes between literal terms (e.g., measuring distance) and poetic/symbolic terms that were never meant to be taken literally.
              </p>
            </div>
            <div>
              <h4 className="font-instrument text-3xl text-[#0D0D0C] mb-4 flex items-center gap-4">
                <span className="text-[#C58B52] text-xl">04</span> Source Criticism
              </h4>
              <p className="font-cormorant text-lg font-light text-[#0D0D0C]/80 leading-relaxed">
                A clear distinction is drawn between claims found in ancient Vedas versus claims popularized in 19th-century colonial interpretations.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 7. EVIDENCE RATING SYSTEM */}
        <EvidenceRatingSystem />

        {/* 8. READING GUIDE */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: EASE_EXPO }}
          className="bg-[#E9E2D4] border-t-4 border-[#C58B52] p-12 shadow-xl relative"
        >
          <div className="absolute top-0 right-12 w-[1px] h-32 bg-[#C58B52]" />

          <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-8">
            How to Read TATTVA
          </h2>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mb-12">
            This article utilizes interactive components to help you distinguish between scripture, commentary, and scholarly analysis. Look out for the following elements as you read:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-[#0D0D0C]/10 p-6 bg-[#0D0D0C]/[0.02]">
              <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] mb-2 block">UI ELEMENT</span>
              <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-2">Sanskrit Verse Boxes</h4>
              <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70">Displays Devanagari, IAST, word-by-word meaning, and literal translation of primary sources.</p>
            </div>
            <div className="border border-[#0D0D0C]/10 p-6 bg-[#0D0D0C]/[0.02]">
              <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] mb-2 block">UI ELEMENT</span>
              <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-2">Scholar Notes</h4>
              <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70">Expandable insights offering historical or linguistic context from modern academia.</p>
            </div>
            <div className="border border-[#0D0D0C]/10 p-6 bg-[#0D0D0C]/[0.02]">
              <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] mb-2 block">UI ELEMENT</span>
              <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-2">Myth vs. Scripture</h4>
              <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70">Highlights common modern misconceptions and corrects them with textual evidence.</p>
            </div>
            <div className="border border-[#0D0D0C]/10 p-6 bg-[#0D0D0C]/[0.02]">
              <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] mb-2 block">UI ELEMENT</span>
              <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-2">Timelines & Data Tables</h4>
              <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70">Visual charts mapping complex scales of time, dimensions, and planetary hierarchies.</p>
            </div>
          </div>
        </motion.section>

        {/* 9. TERMINOLOGY PRIMER */}
        <TerminologyPrimer terms={TERMINOLOGY} />

      </div>

      {/* --- CHAPTER I: CREATION BEFORE CREATION --- */}
      <CreationBeforeCreation />

      {/* --- CHAPTER II: BRAHMANDA (THE COSMIC EGG) --- */}
      <BrahmandaChapter />

      {/* --- CHAPTER III: THE FOURTEEN LOKAS --- */}
      <FourteenLokasChapter />

      {/* --- CHAPTER IV: MOUNT MERU --- */}
      <MeruChapter />

      {/* --- CHAPTER V: BHU-MANDALA --- */}
      <BhumandalaChapter />

      {/* --- CHAPTER VI: SAPTA DVIPAS --- */}
      <SaptaDvipaChapter />

      {/* --- CHAPTER VII: COSMIC TIME --- */}
      <CosmicTimeChapter />

      {/* --- CHAPTER VIII: COSMIC CREATION --- */}
      <CosmicCreationChapter />

      {/* --- APPENDICES & CONCLUSION --- */}
      <CosmologyAppendices />

    </div>
  );
}
