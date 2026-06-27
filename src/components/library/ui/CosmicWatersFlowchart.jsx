import React from 'react';
import { motion } from 'framer-motion';

export function CosmicWatersFlowchart() {
  return (
    <div className="w-full bg-[#0D0D0C] p-8 md:p-12 my-12 text-[#E9E2D4] flex flex-col items-center border border-[#C58B52]/30 rounded-sm">
      <h3 className="font-instrument text-3xl mb-12 tracking-wide text-center">The Cosmic Oceans</h3>
      
      <div className="flex flex-col items-center w-full max-w-2xl relative">
        
        {/* Kāraṇodaka (Causal Ocean) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="w-full border border-[#C58B52] bg-[#1A1A18] p-6 text-center shadow-[0_0_20px_rgba(197,139,82,0.1)] relative z-10"
        >
          <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">SOURCE OF ALL UNIVERSES</span>
          <h4 className="font-instrument text-3xl mb-2 text-[#E9E2D4]">Kāraṇodaka</h4>
          <p className="font-cormorant text-lg text-[#E9E2D4]/70 italic mb-4">The Causal Ocean</p>
          <p className="font-cormorant text-md font-light text-[#E9E2D4]/80">Mahā Viṣṇu lies here in Yoga Nidrā. Countless Brahmāṇḍas emerge from his pores during his exhalation.</p>
        </motion.div>

        {/* Connecting Line */}
        <div className="w-[1px] h-12 bg-[#C58B52]/50" />

        {/* Garbhodaka */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="w-5/6 border border-[#C58B52]/60 bg-[#1A1A18] p-6 text-center relative z-10"
        >
          <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]/80 block mb-2">INSIDE EACH UNIVERSE</span>
          <h4 className="font-instrument text-2xl mb-2 text-[#E9E2D4]">Garbhodaka</h4>
          <p className="font-cormorant text-lg text-[#E9E2D4]/70 italic mb-4">The Inner Universe Ocean</p>
          <p className="font-cormorant text-md font-light text-[#E9E2D4]/80">Fills the bottom half of the Brahmāṇḍa. Garbhodakaśāyī Viṣṇu resides here, from whose navel a lotus sprouts carrying Brahmā.</p>
        </motion.div>

        {/* Connecting Line */}
        <div className="w-[1px] h-12 bg-[#C58B52]/30" />

        {/* Kṣīroda */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="w-2/3 border border-[#C58B52]/30 bg-[#1A1A18] p-6 text-center relative z-10"
        >
          <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]/60 block mb-2">WITHIN THE LOKAS</span>
          <h4 className="font-instrument text-xl mb-2 text-[#E9E2D4]">Kṣīroda</h4>
          <p className="font-cormorant text-lg text-[#E9E2D4]/70 italic mb-4">The Ocean of Milk</p>
          <p className="font-cormorant text-md font-light text-[#E9E2D4]/80">Located within the planetary systems (Śvetadvīpa). Kṣīrodakaśāyī Viṣṇu resides here, acting as the Supersoul (Paramātmā) in every atom.</p>
        </motion.div>
        
      </div>
    </div>
  );
}
