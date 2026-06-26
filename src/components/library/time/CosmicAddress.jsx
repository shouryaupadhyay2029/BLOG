import React from 'react';
import { motion } from 'framer-motion';

const ADDRESS_LINES = [
  { label: 'Current Yuga', value: 'Kali Yuga', desc: '(Began ~3102 BCE)' },
  { label: 'Mahāyuga Cycle', value: '28th Mahāyuga', desc: '(Out of 71 in this Manvantara)' },
  { label: 'Current Manu', value: '7th Manvantara', desc: '(Vaivasvata Manu)' },
  { label: 'Current Day', value: 'Śveta Vārāha Kalpa', desc: '(The first day of the second half of life)' },
  { label: 'Creator’s Age', value: '51st Year of Brahmā', desc: '(Out of 100 divine years)' }
];

export function CosmicAddress() {
  return (
    <div className="w-full max-w-4xl mx-auto py-24 flex flex-col items-center">
      <div className="w-[1px] h-[60px] bg-[#C58B52]/40 mb-12" />
      
      <div className="flex flex-col w-full gap-4 relative">
        {/* Decorative background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-[#C58B52]/5 rounded-full pointer-events-none" />
        
        {ADDRESS_LINES.map((line, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col items-center text-center p-6 bg-[#E9E2D4] border border-[#0D0D0C]/5 z-10 w-full max-w-[90%] md:max-w-[70%] mx-auto shadow-sm`}
            style={{ marginLeft: i % 2 === 0 ? 'auto' : '0', marginRight: i % 2 === 0 ? '0' : 'auto' }} // Zig-zag slight stagger
          >
            <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52] mb-3">
              {line.label}
            </span>
            <h3 className="font-instrument text-3xl md:text-5xl text-[#0D0D0C] tracking-tight mb-2">
              {line.value}
            </h3>
            <span className="font-cormorant text-lg text-[#0D0D0C]/60 italic">
              {line.desc}
            </span>
          </motion.div>
        ))}
      </div>
      
      <div className="w-[1px] h-[60px] bg-[#C58B52]/40 mt-12" />
    </div>
  );
}
