import React from 'react';
import { motion } from 'framer-motion';
import { MasterCosmicAtlas } from '@/components/library/cosmology/appendices/MasterCosmicAtlas';
import { MythVsScriptureConsolidated } from '@/components/library/cosmology/appendices/MythVsScriptureConsolidated';
import { MasterFAQ } from '@/components/library/cosmology/appendices/MasterFAQ';
import { MasterGlossary } from '@/components/library/cosmology/appendices/MasterGlossary';
import { Bibliography } from '@/components/library/cosmology/appendices/Bibliography';
import { FinalReaderJourney } from '@/components/library/cosmology/appendices/FinalReaderJourney';

const EASE_EXPO = [0.16, 1, 0.3, 1];

export function CosmologyAppendices() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 pb-32 flex flex-col gap-16 border-t border-[#C58B52]/20 pt-32 mt-32 relative">
      
      {/* Internal Navigation Shell */}
      <div className="hidden xl:block absolute left-[-250px] h-full top-0 pt-32">
        <div className="sticky top-32 w-48 h-fit space-y-4 font-general text-[10px] uppercase tracking-[0.2em] text-[#0D0D0C]/40">
          <div className="text-[#C58B52] font-bold">APPENDICES</div>
          <div>1. Cosmic Atlas</div>
          <div>2. Myth vs. Scripture</div>
          <div>3. 100-Question FAQ</div>
          <div>4. Master Glossary</div>
          <div>5. Bibliography</div>
          <div>6. Final Journey</div>
        </div>
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 block text-center">
          REFERENCE APPENDICES
        </span>
        <h2 className="font-instrument text-5xl md:text-7xl text-[#0D0D0C] tracking-tight mb-8 text-center leading-[1.1]">
          The Structure of the Universe
        </h2>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <MasterCosmicAtlas />
      </motion.section>

      <MythVsScriptureConsolidated />
      <MasterFAQ />
      <MasterGlossary />
      <Bibliography />
      <FinalReaderJourney />

    </div>
  );
}
