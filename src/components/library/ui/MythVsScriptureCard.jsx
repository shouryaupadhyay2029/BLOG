import React from 'react';
import { motion } from 'framer-motion';

export function MythVsScriptureCard({ myth, scripture, source }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full grid grid-cols-1 md:grid-cols-2 shadow-lg my-12 rounded-sm overflow-hidden"
    >
      <div className="bg-[#1A1A18] p-8 md:p-12 text-[#E9E2D4]">
        <span className="font-general text-[10px] uppercase tracking-[0.3em] text-[#C58B52] mb-4 block">
          MODERN MISCONCEPTION
        </span>
        <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed opacity-90">
          "{myth}"
        </p>
      </div>
      <div className="bg-[#E9E2D4] p-8 md:p-12 text-[#0D0D0C] border border-[#C58B52]/20">
        <span className="font-general text-[10px] uppercase tracking-[0.3em] text-[#C58B52] mb-4 block">
          SCRIPTURAL REALITY
        </span>
        <p className="font-cormorant text-xl md:text-2xl font-medium leading-relaxed mb-6">
          {scripture}
        </p>
        <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#0D0D0C]/40 border-t border-[#0D0D0C]/10 pt-4 block">
          SOURCE: {source}
        </span>
      </div>
    </motion.div>
  );
}
