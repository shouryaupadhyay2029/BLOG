import React from 'react';
import { motion } from 'framer-motion';
import { QuickFactsPanel } from '@/components/library/ui/QuickFactsPanel';
import { CosmicTimeCalculator } from '@/components/library/cosmology/time/CosmicTimeCalculator';
import { YugaCycleWheel } from '@/components/library/cosmology/time/YugaCycleWheel';
import { ReflectionBox } from '@/components/library/ui/ReflectionBox';

const EASE_EXPO = [0.16, 1, 0.3, 1];

const QUICK_FACTS = {
  title: "Cosmic Time (Kāla)",
  facts: [
    { label: "Sanskrit", value: "काल" },
    { label: "IAST", value: "Kāla" },
    { label: "Literal Meaning", value: "Time / The Destroyer" },
    { label: "Smallest Unit", value: "Truṭi (approx. 1/33,750 of a second)" },
    { label: "Largest Unit", value: "Maha-Kalpa (Lifespan of Brahmā)" },
    { label: "Primary Scriptures", value: "Bhāgavata Purāṇa (Canto 3), Sūrya Siddhānta" }
  ]
};

export function CosmicTimeChapter() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 pb-32 flex flex-col gap-32 border-t border-[#C58B52]/20 pt-32 mt-32 relative">
      
      {/* Internal Navigation Shell - to be fully wired up in Phase 2 */}
      <div className="hidden xl:block absolute left-[-250px] h-full top-0 pt-32">
        <div className="sticky top-32 w-48 h-fit space-y-4 font-general text-[10px] uppercase tracking-[0.2em] text-[#0D0D0C]/40">
          <div className="text-[#C58B52] font-bold">1. Hero Experience</div>
          <div>2. What is Kāla?</div>
          <div>3. The 4 Yugas</div>
          <div>4. Time Conversion</div>
          <div>5. Manvantaras (Pending)</div>
          <div>6. Pralayas (Pending)</div>
          <div>7. 60 FAQs (Pending)</div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 block text-center">
          CHAPTER VII
        </span>
        <h2 className="font-instrument text-5xl md:text-7xl text-[#0D0D0C] tracking-tight mb-8 text-center leading-[1.1]">
          Kāla:<br/>The Architecture of Time
        </h2>
        
        <div className="prose-custom pt-8">
          <p className="font-cormorant text-2xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6 italic text-center max-w-3xl mx-auto">
            Imagine watching the birth and death of stars.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
            Entire civilizations rise and disappear in the blink of an eye. Continents form and vanish. Even the gods—Indra, Agni, Varuṇa—experience the crushing weight of old age. In Sanātana Dharma, the universe is not a static creation; it is a breathing organism, governed by relentless, cyclical mathematics.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
            This is Kāla (Time). It scales from the vibration of an atom (the Truṭi) all the way up to the lifespan of Brahmā (311 trillion years). And yet, beyond all these cycles, exists a reality entirely untouched by time.
          </p>
        </div>
      </motion.section>

      {/* 2. QUICK FACTS */}
      <QuickFactsPanel data={QUICK_FACTS} />

      {/* 3. WHAT IS KALA? */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          The Cosmic Destroyer
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          In Western thought, time is linear—an arrow moving from Genesis to Apocalypse. In Hindu cosmology, time is cyclical. It is a wheel (Kāla-cakra) that continuously turns, repeating the processes of creation (Sṛṣṭi), maintenance (Sthiti), and dissolution (Pralaya) infinitely.
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          According to the Bhāgavata Purāṇa, time is not merely a measurement; it is the impersonal force of the Supreme Lord Himself, pushing the material energy into action and eventually destroying everything that is built.
        </p>
        <ReflectionBox>
          "I am Time, the great destroyer of the worlds, and I have come here to destroy all people."<br/>— Lord Kṛṣṇa, Bhagavad Gītā (11.32)
        </ReflectionBox>
      </motion.section>

      {/* 4. THE 4 YUGAS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <YugaCycleWheel />
      </motion.section>

      {/* 5. TIME CONVERSION CALCULATOR */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          The Mathematics of Relativity
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          Long before modern physics proposed the relativity of time, the Purāṇas explicitly stated that time moves differently for different beings. A year for a human is only a single day and night for the Devas (gods). A millennium for the Devas is merely a fraction of a second for Brahmā.
        </p>
        <CosmicTimeCalculator />
      </motion.section>

    </div>
  );
}
