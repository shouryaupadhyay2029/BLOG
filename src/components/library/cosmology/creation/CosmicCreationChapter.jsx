import React from 'react';
import { motion } from 'framer-motion';
import { QuickFactsPanel } from '@/components/library/ui/QuickFactsPanel';
import { GunaBalanceVisualizer } from '@/components/library/cosmology/creation/GunaBalanceVisualizer';
import { SankhyaEvolutionFlow } from '@/components/library/cosmology/creation/SankhyaEvolutionFlow';

const EASE_EXPO = [0.16, 1, 0.3, 1];

const QUICK_FACTS = {
  title: "Cosmic Manifestation (Sṛṣṭi)",
  facts: [
    { label: "Sanskrit", value: "सृष्टि / सर्ग / विसर्ग" },
    { label: "IAST", value: "Sṛṣṭi / Sarga / Visarga" },
    { label: "Meaning", value: "Emanation / Projection / Creation" },
    { label: "Primary Creation", value: "Sarga (by the Supreme Lord)" },
    { label: "Secondary Creation", value: "Visarga (by Brahmā)" },
    { label: "Key Elements", value: "24 Elements of Sāṅkhya" }
  ]
};

export function CosmicCreationChapter() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 pb-32 flex flex-col gap-32 border-t border-[#C58B52]/20 pt-32 mt-32 relative">
      
      {/* Internal Navigation Shell */}
      <div className="hidden xl:block absolute left-[-250px] h-full top-0 pt-32">
        <div className="sticky top-32 w-48 h-fit space-y-4 font-general text-[10px] uppercase tracking-[0.2em] text-[#0D0D0C]/40">
          <div className="text-[#C58B52] font-bold">1. Hero Experience</div>
          <div>2. What is Sṛṣṭi?</div>
          <div>3. Role of Brahman</div>
          <div>4. The Three Guṇas</div>
          <div>5. Evolution of Matter</div>
          <div>6. Visarga (Pending)</div>
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
          CHAPTER VIII
        </span>
        <h2 className="font-instrument text-5xl md:text-7xl text-[#0D0D0C] tracking-tight mb-8 text-center leading-[1.1]">
          Sarga & Visarga:<br/>The Doctrine of Creation
        </h2>
        
        <div className="prose-custom pt-8">
          <p className="font-cormorant text-2xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6 italic text-center max-w-3xl mx-auto">
            The universe has dissolved. Nothing material remains.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
            Only the Supreme Reality exists. Without warning, Time (Kāla) awakens. Unmanifest material nature (Prakṛti) begins to stir. The three Guṇas, previously locked in perfect equilibrium, begin to move and clash.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
            From this metaphysical friction, Cosmic Intelligence (Mahat) appears. Matter slowly unfolds from the unmanifest. Stars have not yet formed. The planets do not exist. Even Brahmā, the architectural creator, has not yet been born. This is the incredible, step-by-step process of Sṛṣṭi.
          </p>
        </div>
      </motion.section>

      {/* 2. QUICK FACTS */}
      <QuickFactsPanel data={QUICK_FACTS} />

      {/* 3. WHAT IS SRISTI? */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          Emanation vs. Creation
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          The English word "creation" implies making something entirely new out of nothing (<em>creatio ex nihilo</em>). However, Sanātana Dharma rejects this concept. 
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          The Sanskrit word <strong>Sṛṣṭi</strong> (from the root <em>sṛj</em>) means "to let go," "to emit," or "to project." The universe is not created from nothing; it is projected outward from a latent, unmanifest state into a manifest, physical state, much like a spider spinning a web from its own body.
        </p>
      </motion.section>

      {/* 4. THE GUNAS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <GunaBalanceVisualizer />
      </motion.section>

      {/* 5. EVOLUTION OF MATTER */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <SankhyaEvolutionFlow />
      </motion.section>

    </div>
  );
}
