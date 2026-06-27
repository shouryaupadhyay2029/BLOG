import React from 'react';
import { motion } from 'framer-motion';

export function ReflectionBox({ children }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-2xl mx-auto my-12 py-12 px-8 border-y border-[#C58B52]/30 text-center relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E9E2D4] px-4">
        <span className="font-general text-[9px] uppercase tracking-[0.4em] text-[#C58B52]">
          PAUSE & REFLECT
        </span>
      </div>
      <div className="font-cormorant text-2xl md:text-3xl font-light text-[#0D0D0C]/90 italic leading-relaxed">
        {children}
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#E9E2D4] px-4">
        <div className="w-2 h-2 rotate-45 bg-[#C58B52]" />
      </div>
    </motion.div>
  );
}
