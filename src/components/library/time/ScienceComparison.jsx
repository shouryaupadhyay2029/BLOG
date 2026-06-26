import React from 'react';
import { motion } from 'framer-motion';

export function ScienceComparison() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 flex flex-col md:flex-row gap-12 md:gap-0 relative">
      
      {/* Central Divider (Desktop only) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#0D0D0C]/10 -translate-x-1/2" />
      
      {/* Scriptural Cosmology Column */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-1/2 md:pr-16 flex flex-col gap-12"
      >
        <div className="text-center md:text-right">
          <span className="font-general text-[10px] uppercase tracking-widest text-[#C58B52] mb-4 block">
            The Inner Telescope
          </span>
          <h3 className="font-instrument text-4xl text-[#0D0D0C] mb-8">
            Scriptural Cosmology
          </h3>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed italic">
            Focuses on why consciousness is bound by time and how it can escape.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:text-right">
          <div>
            <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-2">Age of the Current Universe</h4>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/70">One Day of Brahmā (4.32 billion years)</p>
          </div>
          <div>
            <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-2">Origin</h4>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/70">Cyclical projection from the Divine (Sṛṣṭi). An ongoing rhythm.</p>
          </div>
          <div>
            <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-2">End State</h4>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/70">Mahāpralaya. Absolute dissolution and rest before the next cycle.</p>
          </div>
        </div>
      </motion.div>

      {/* Modern Cosmology Column */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-1/2 md:pl-16 flex flex-col gap-12"
      >
        <div className="text-center md:text-left">
          <span className="font-general text-[10px] uppercase tracking-widest text-[#0D0D0C]/40 mb-4 block">
            The Outer Telescope
          </span>
          <h3 className="font-instrument text-4xl text-[#0D0D0C] mb-8">
            Modern Cosmology
          </h3>
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed italic">
            Focuses on how matter and energy behave over vast physical scales.
          </p>
        </div>

        <div className="flex flex-col gap-8 text-center md:text-left">
          <div>
            <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-2">Age of the Earth</h4>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/70">~4.54 billion years</p>
          </div>
          <div>
            <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-2">Origin</h4>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/70">The Big Bang. A singular expansion from a high-density state.</p>
          </div>
          <div>
            <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-2">End State</h4>
            <p className="font-cormorant text-xl font-light text-[#0D0D0C]/70">Heat Death or Big Crunch. Complete entropy or gravitational collapse.</p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
