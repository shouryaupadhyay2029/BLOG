import React from 'react';
import { motion } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1];

export function TerminologyPrimer({ terms }) {
  return (
    <div className="w-full max-w-4xl mx-auto my-16">
      <h3 className="font-instrument text-3xl md:text-4xl text-[#0D0D0C] mb-8 tracking-tight text-center">
        Terminology Primer
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {terms.map((term, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: EASE_EXPO }}
            className="bg-[#E9E2D4] border border-[#C58B52]/20 p-6 shadow-sm flex flex-col relative overflow-hidden group hover:border-[#C58B52]/50 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#C58B52]/10 to-transparent pointer-events-none" />
            
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-general text-[10px] uppercase tracking-[0.3em] text-[#C58B52]">
                {term.iast}
              </span>
              <span className="font-cormorant text-xl text-[#0D0D0C]/40 italic">
                {term.pronunciation}
              </span>
            </div>
            
            <h4 className="font-instrument text-3xl text-[#0D0D0C] mb-1">
              {term.sanskrit}
            </h4>
            
            <span className="font-cormorant text-xl font-medium text-[#0D0D0C]/80 mb-4">
              "{term.meaning}"
            </span>
            
            <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed">
              {term.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
