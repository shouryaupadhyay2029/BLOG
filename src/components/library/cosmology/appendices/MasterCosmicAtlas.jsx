import React from 'react';
import { motion } from 'framer-motion';

const HIERARCHY = [
  { level: 1, name: "The Absolute", desc: "Brahman (Nirguṇa & Saguṇa)", type: "Metaphysical" },
  { level: 2, name: "The Universe", desc: "Brahmāṇḍa (The Cosmic Egg)", type: "Macrocosm" },
  { level: 3, name: "The 14 Lokas", desc: "The Planetary Systems (Satyaloka to Pātāla)", type: "Cosmography" },
  { level: 4, name: "The Cosmic Plane", desc: "Bhū-maṇḍala (The Disc of the Universe)", type: "Geography" },
  { level: 5, name: "The Axis Mundi", desc: "Mount Meru (The Golden Mountain)", type: "Axis" },
  { level: 6, name: "The 7 Continents", desc: "Sapta Dvīpas (Jambūdvīpa to Puṣkara)", type: "Geography" },
  { level: 7, name: "The 7 Oceans", desc: "Sapta Samudras (Salt, Milk, Wine, etc.)", type: "Geography" },
];

export function MasterCosmicAtlas() {
  return (
    <div className="w-full bg-[#1A1A18] border border-[#C58B52]/20 p-8 md:p-12 my-12">
      <div className="text-center mb-12">
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block">NAVIGATION ATLAS</span>
        <h3 className="font-instrument text-4xl text-[#E9E2D4] tracking-tight mb-4">The Hierarchy of Existence</h3>
        <p className="font-cormorant text-xl text-[#E9E2D4]/70 max-w-2xl mx-auto">
          A visual roadmap of the cosmos as described in the Purāṇas. From the infinite metaphysical absolute down to the very oceans that surround the earthly plane.
        </p>
      </div>

      <div className="flex flex-col gap-4 max-w-3xl mx-auto relative">
        {/* Connecting Line */}
        <div className="absolute top-8 bottom-8 left-6 w-px bg-[#C58B52]/20 z-0" />

        {HIERARCHY.map((node, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative z-10 flex items-center gap-6 p-4 border border-[#C58B52]/10 bg-black/40 hover:bg-[#C58B52]/5 transition-colors cursor-pointer group"
          >
            {/* Node Dot */}
            <div className="w-3 h-3 rounded-full bg-[#1A1A18] border-2 border-[#C58B52] group-hover:bg-[#C58B52] transition-colors shadow-[0_0_10px_rgba(197,139,82,0.5)]" />
            
            <div className="flex-1 flex justify-between items-center">
              <div>
                <h4 className="font-instrument text-2xl text-[#E9E2D4] group-hover:text-[#C58B52] transition-colors">{node.name}</h4>
                <span className="font-cormorant text-[#E9E2D4]/60">{node.desc}</span>
              </div>
              <span className="hidden md:block font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52]/50 border border-[#C58B52]/20 px-2 py-1 rounded-sm">
                {node.type}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
