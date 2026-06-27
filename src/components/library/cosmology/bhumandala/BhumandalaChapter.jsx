import React from 'react';
import { motion } from 'framer-motion';
import { QuickFactsPanel } from '@/components/library/ui/QuickFactsPanel';
import { CosmicHierarchyNesting } from '@/components/library/ui/CosmicHierarchyNesting';
import { BhumandalaEarthComparison } from '@/components/library/ui/BhumandalaEarthComparison';
import { ReflectionBox } from '@/components/library/ui/ReflectionBox';

const EASE_EXPO = [0.16, 1, 0.3, 1];

const QUICK_FACTS = {
  title: "Bhū-maṇḍala",
  facts: [
    { label: "Sanskrit", value: "भूमण्डल" },
    { label: "IAST", value: "Bhū-maṇḍala" },
    { label: "Literal Meaning", value: "The Earthly Disc / Cosmic Plane" },
    { label: "Location", value: "The exact middle of the Brahmāṇḍa" },
    { label: "Primary Scriptures", value: "Bhāgavata (Canto 5), Viṣṇu Purāṇa" },
    { label: "Diameter", value: "500 million Yojanas" }
  ]
};

export function BhumandalaChapter() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 pb-32 flex flex-col gap-32 border-t border-[#C58B52]/20 pt-32 mt-32 relative">
      
      {/* Internal Navigation Shell - to be fully wired up in Phase 2 */}
      <div className="hidden xl:block absolute left-[-250px] h-full top-0 pt-32">
        <div className="sticky top-32 w-48 h-fit space-y-4 font-general text-[10px] uppercase tracking-[0.2em] text-[#0D0D0C]/40">
          <div className="text-[#C58B52] font-bold">1. Hero Experience</div>
          <div>2. What does it mean?</div>
          <div>3. Position & Nesting</div>
          <div>4. Bhū-maṇḍala vs Earth</div>
          <div>5. Astronomy (Pending)</div>
          <div>6. 40 FAQs (Pending)</div>
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
          CHAPTER V
        </span>
        <h2 className="font-instrument text-5xl md:text-7xl text-[#0D0D0C] tracking-tight mb-8 text-center leading-[1.1]">
          Bhū-maṇḍala:<br/>The Cosmic Plane
        </h2>
        
        <div className="prose-custom pt-8">
          <p className="font-cormorant text-2xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6 italic text-center max-w-3xl mx-auto">
            Imagine viewing the universe from above.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
            Spreading out before you is an immense, unfathomable disc, four billion miles across. At its absolute center stands the golden peak of Mount Meru. Expanding outward in massive concentric rings are seven distinct island-continents, separated by cosmic oceans of milk, wine, and sweet water.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
            This is Bhū-maṇḍala. It is not our tiny blue planet. It is the vast, multi-dimensional theater in which all earthly and celestial action unfolds.
          </p>
        </div>
      </motion.section>

      {/* 2. QUICK FACTS */}
      <QuickFactsPanel data={QUICK_FACTS} />

      {/* 3. WHAT DOES IT MEAN? */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          What is Bhū-maṇḍala?
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          To understand Bhū-maṇḍala, we must separate two words that are routinely confused in modern translations: <strong>Bhū-gola</strong> and <strong>Bhū-maṇḍala</strong>.
        </p>
        <ul className="list-disc pl-6 font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 space-y-4 mb-6">
          <li><strong>Bhū-gola:</strong> Literally "Earth-Sphere." This is the physical globe of Earth, suspended in space, calculated precisely by ancient astronomers like Āryabhaṭa.</li>
          <li><strong>Bhū-maṇḍala:</strong> Literally "Earth-Disc" or "Earth-Plane." This is the overarching cosmic, horizontal plane that cuts through the middle of the Brahmāṇḍa (Cosmic Egg). It represents the entire solar system and the path of the planets (the ecliptic plane).</li>
        </ul>
        <ReflectionBox>
          "When colonial-era translators read 'Bhū-maṇḍala' and translated it as 'the Earth,' they erroneously concluded that Hindus believed the Earth was a flat disc surrounded by oceans of milk. They conflated a localized physical globe (Bhū-gola) with an immense cosmic, dimensional map (Bhū-maṇḍala)."
        </ReflectionBox>
      </motion.section>

      {/* 4. SPATIAL NESTING */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <CosmicHierarchyNesting />
      </motion.section>

      {/* 5. RELATIONSHIP WITH EARTH */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          Bhū-maṇḍala vs. Planet Earth
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          If Bhū-maṇḍala is four billion miles wide, where exactly is human civilization? According to the scriptural nesting, our entire observable world falls within a tiny sub-region called <strong>Bhārata-varṣa</strong>, located on the central island of Jambūdvīpa. 
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          Review the comparison below to understand how the multi-dimensional Purāṇic map differs from our physical, observable globe.
        </p>
        
        <BhumandalaEarthComparison />
      </motion.section>

    </div>
  );
}
