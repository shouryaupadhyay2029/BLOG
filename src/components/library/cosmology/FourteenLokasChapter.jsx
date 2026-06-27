import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveLokaAtlas } from '@/components/library/ui/InteractiveLokaAtlas';
import { ReflectionBox } from '@/components/library/ui/ReflectionBox';

const EASE_EXPO = [0.16, 1, 0.3, 1];

export function FourteenLokasChapter() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 pb-32 flex flex-col gap-32 border-t border-[#C58B52]/20 pt-32 mt-32">
      
      {/* 1. HERO EXPERIENCE */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
        className="max-w-4xl mx-auto"
      >
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 block text-center">
          CHAPTER III
        </span>
        <h2 className="font-instrument text-5xl md:text-7xl text-[#0D0D0C] tracking-tight mb-8 text-center leading-[1.1]">
          The Fourteen Lokas
        </h2>
        
        <div className="prose-custom pt-8">
          <p className="font-cormorant text-2xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6 italic text-center max-w-3xl mx-auto">
            Imagine standing at the exact center of the universe, beside the golden slopes of Mount Meru.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6 text-center">
            Above you, ascending into the infinite void, rise six celestial worlds of blinding light, inhabited by beings of pure consciousness, vibrating at frequencies far beyond human perception.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6 text-center">
            Below your feet, descending into the deep, lie seven mysterious subterranean realms. These are not dark hells, but opulent, materialistic dimensions lit by the glowing jewels on the hoods of immense cosmic serpents.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 text-center">
            You are standing on Bhūloka, the earthly plane. You are in the middle. Welcome to the living cosmic atlas of Sanātana Dharma.
          </p>
        </div>
      </motion.section>

      {/* 2. WHAT IS A LOKA? */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          What is a Loka?
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          The Sanskrit word <strong>Loka</strong> (लोक) originates from the root <em>'lok'</em> meaning "to see," "to perceive," or "to illuminate." Therefore, a Loka is primarily a "field of experience" or a dimension of perception.
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          Translating Loka simply as "planet" is highly inaccurate and often leads to confusion when attempting to reconcile Purāṇic texts with modern astronomy. While the Lokas certainly possess physical (though sometimes subtle) geography, they are better understood as <strong>planes of existence</strong> governed by specific laws of karma, time, and consciousness.
        </p>
        
        <ReflectionBox>
          "A being in Satyaloka does not experience time or matter the way a human does. To them, our entire Earthly history might pass in the blink of an eye. A Loka is not just a place you go; it is a state of being you achieve."
        </ReflectionBox>
      </motion.section>

      {/* 3. THE INTERACTIVE ATLAS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
        className="w-full"
      >
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block text-center">
          THE COSMIC ENCYCLOPEDIA
        </span>
        <h2 className="font-instrument text-5xl text-[#0D0D0C] tracking-tight mb-4 text-center">
          Interactive Loka Atlas
        </h2>
        <p className="font-cormorant text-xl font-light text-[#0D0D0C]/70 text-center max-w-2xl mx-auto mb-12">
          Select a dimension from the cosmic hierarchy below to load its exhaustive scriptural breakdown, including geography, inhabitants, karma, and time.
        </p>
        
        <InteractiveLokaAtlas />
        
      </motion.section>

    </div>
  );
}
