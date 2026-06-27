import React from 'react';
import { motion } from 'framer-motion';
import { QuickFactsPanel } from '@/components/library/ui/QuickFactsPanel';
import { MeruRiverSystem } from '@/components/library/ui/MeruRiverSystem';
import { MeruPhysicalModel } from '@/components/library/ui/MeruPhysicalModel';
import { ScholarNote } from '@/components/library/ui/ScholarNote';

const EASE_EXPO = [0.16, 1, 0.3, 1];

const QUICK_FACTS = {
  title: "Mount Meru (Sumeru)",
  facts: [
    { label: "Sanskrit", value: "मेरु / सुमेरु" },
    { label: "IAST", value: "Meru / Sumeru" },
    { label: "Literal Meaning", value: "Excellent Mountain" },
    { label: "Role", value: "Axis Mundi / Cosmic Center" },
    { label: "Primary Scriptures", value: "Bhāgavata, Viṣṇu Purāṇa, Sūrya Siddhānta" },
    { label: "Height", value: "100,000 Yojanas (Purāṇic)" }
  ]
};

export function MeruChapter() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 pb-32 flex flex-col gap-32 border-t border-[#C58B52]/20 pt-32 mt-32 relative">
      
      {/* Internal Navigation Shell - to be fully wired up in Phase 2 */}
      <div className="hidden xl:block absolute left-[-250px] h-full top-0 pt-32">
        <div className="sticky top-32 w-48 h-fit space-y-4 font-general text-[10px] uppercase tracking-[0.2em] text-[#0D0D0C]/40">
          <div className="text-[#C58B52] font-bold">1. Hero Experience</div>
          <div>2. Physical Model</div>
          <div>3. River System</div>
          <div>4. Astronomy (Pending)</div>
          <div>5. Cities (Pending)</div>
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
          CHAPTER IV
        </span>
        <h2 className="font-instrument text-5xl md:text-7xl text-[#0D0D0C] tracking-tight mb-8 text-center leading-[1.1]">
          Mount Meru:<br/>The Cosmic Axis
        </h2>
        
        <div className="prose-custom pt-8">
          <p className="font-cormorant text-2xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6 italic text-center max-w-3xl mx-auto">
            Imagine approaching the absolute center of creation.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
            Rising beyond the capacity of human imagination is a mountain made entirely of solid gold. Its base penetrates deep into the subterranean realms, while its summit pierces the highest heavens.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
            This is Mount Meru. It is not merely a mountain; it is the structural spine of the universe. The Sun, Moon, and stars revolve around it. Celestial rivers cascade down its slopes. For millennia, temple architects across Asia have attempted to build earthly replicas of this singular, magnificent peak.
          </p>
        </div>
      </motion.section>

      {/* 2. QUICK FACTS */}
      <QuickFactsPanel data={QUICK_FACTS} />

      {/* 3. ETYMOLOGY & MEANING */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          The Axis Mundi
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          The concept of an <em>Axis Mundi</em> (World Axis) is nearly universal in ancient cosmologies, but nowhere is it detailed with such staggering mathematical precision and theological weight as in Sanātana Dharma.
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          Often called <strong>Sumeru</strong> (the "Excellent Meru"), it functions simultaneously as a physical anchor for the planetary systems, a spiritual destination for elevated souls, and a psychological map for yogis (where the human spine itself is referred to as the <em>Merudaṇḍa</em>).
        </p>
      </motion.section>

      {/* 4. PHYSICAL MODEL */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <MeruPhysicalModel />
        
        <ScholarNote 
          title="The Inverted Cone Geometry"
          content="Unlike earthly mountains which are wide at the base and narrow at the top, the Purāṇas explicitly describe Meru as an inverted cone (or lotus seed-cup). It is 16,000 Yojanas wide at the base, but 32,000 Yojanas wide at the summit. This defies earthly physics but perfectly aligns with the metaphysical concept of a 'spiritual mountain' where higher dimensions contain more 'space' than lower ones."
        />
      </motion.section>

      {/* 5. RIVER SYSTEM */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          The Descent of the Gaṅgā
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          According to the Bhāgavata Purāṇa, the sacred river Gaṅgā originates from the spiritual world (from the toe of Lord Viṣṇu). When it penetrates the shell of the Brahmāṇḍa, it falls onto the summit of Mount Meru in Brahmapurī.
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          Unable to withstand the force of the cosmic waters, the peak of Meru divides the river into four immense streams that flow outward in the four cardinal directions to nourish the entire universe.
        </p>
        
        <MeruRiverSystem />
      </motion.section>

    </div>
  );
}
