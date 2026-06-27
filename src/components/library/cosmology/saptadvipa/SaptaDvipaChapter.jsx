import React from 'react';
import { motion } from 'framer-motion';
import { QuickFactsPanel } from '@/components/library/ui/QuickFactsPanel';
import { InteractiveCosmicAtlas } from '@/components/library/cosmology/saptadvipa/InteractiveCosmicAtlas';
import { DvipaComparisonTable } from '@/components/library/ui/DvipaComparisonTable';
import { PriyavrataGenealogy } from '@/components/library/ui/PriyavrataGenealogy';

const EASE_EXPO = [0.16, 1, 0.3, 1];

const QUICK_FACTS = {
  title: "Sapta Dvīpas & Sapta Samudras",
  facts: [
    { label: "Sanskrit", value: "सप्तद्वीप / सप्तसमुद्र" },
    { label: "IAST", value: "Sapta Dvīpa / Sapta Samudra" },
    { label: "Meaning", value: "Seven Island-Continents & Seven Oceans" },
    { label: "Location", value: "Expanding outward from Mount Meru" },
    { label: "Primary Scriptures", value: "Bhāgavata (Canto 5), Viṣṇu Purāṇa" },
    { label: "Creator", value: "King Priyavrata" }
  ]
};

const TABLE_DATA = [
  { dvipa: 'Jambūdvīpa', width: '100,000', ocean: 'Salt Water (Lavaṇa)', ruler: 'Āgnīdhra', tree: 'Jambu (Rose-Apple)' },
  { dvipa: 'Plakṣadvīpa', width: '200,000', ocean: 'Sugarcane Juice (Ikṣu)', ruler: 'Idhmajihva', tree: 'Plakṣa (Fig)' },
  { dvipa: 'Śālmaladvīpa', width: '400,000', ocean: 'Wine/Liquor (Surā)', ruler: 'Yajñabāhu', tree: 'Śālmali (Silk Cotton)' },
  { dvipa: 'Kuśadvīpa', width: '800,000', ocean: 'Clarified Butter (Ghṛta)', ruler: 'Hiraṇyaretā', tree: 'Kuśa (Sacred Grass)' },
  { dvipa: 'Krauñcadvīpa', width: '1,600,000', ocean: 'Milk/Curd (Dadhi)', ruler: 'Ghṛtapṛṣṭha', tree: 'Krauñca (Mountain)' },
  { dvipa: 'Śākadvīpa', width: '3,200,000', ocean: 'Milk (Kṣīra)', ruler: 'Medhātithi', tree: 'Śāka (Teak)' },
  { dvipa: 'Puṣkaradvīpa', width: '6,400,000', ocean: 'Sweet Water (Jala)', ruler: 'Vītihotra', tree: 'Puṣkara (Lotus)' },
];

export function SaptaDvipaChapter() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 pb-32 flex flex-col gap-32 border-t border-[#C58B52]/20 pt-32 mt-32 relative">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 block text-center">
          CHAPTER VI
        </span>
        <h2 className="font-instrument text-5xl md:text-7xl text-[#0D0D0C] tracking-tight mb-8 text-center leading-[1.1]">
          The Sapta Dvīpas:<br/>The Cosmic Atlas
        </h2>
        
        <div className="prose-custom pt-8">
          <p className="font-cormorant text-2xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6 italic text-center max-w-3xl mx-auto">
            Imagine standing high above Mount Meru.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
            Spreading endlessly outward in every direction is a breathtaking geometry of concentric landmasses. Each cosmic continent (Dvīpa) is twice as large as the one before it, and each is perfectly ringed by an ocean of a different, unimaginable substance: salt, sugarcane juice, wine, clarified butter, curd, milk, and sweet water.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
            This is not a map of our physical Earth. This is the grand architecture of the cosmic plane, filled with divine beings, mythical mountains, and sacred trees.
          </p>
        </div>
      </motion.section>

      {/* 2. QUICK FACTS */}
      <QuickFactsPanel data={QUICK_FACTS} />

      {/* 3. PRIYAVRATA & ORIGINS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <PriyavrataGenealogy />
      </motion.section>

      {/* 4. COMPARISON TABLE */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          The Grand Dimensions
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          The mathematics of the Sapta Dvīpas are entirely exponential. Starting from the central continent of Jambūdvīpa (100,000 Yojanas), each subsequent ocean and continent is exactly twice the width of the previous one.
        </p>
        <DvipaComparisonTable rows={TABLE_DATA} />
      </motion.section>

      {/* 5. INTERACTIVE ATLAS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <InteractiveCosmicAtlas />
      </motion.section>

    </div>
  );
}
