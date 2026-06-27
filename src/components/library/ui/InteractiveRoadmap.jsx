import React from 'react';
import { motion } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1];

export function InteractiveRoadmap({ steps }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-16 relative">
      <div className="absolute left-8 top-8 bottom-8 w-[1px] bg-[#C58B52]/30" />
      
      <div className="flex flex-col gap-12">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: EASE_EXPO }}
            className="relative flex items-start gap-8"
          >
            <div className="relative z-10 w-16 h-16 shrink-0 bg-[#0D0D0C] border border-[#C58B52] rounded-full flex items-center justify-center shadow-lg">
              <span className="font-instrument text-2xl text-[#E9E2D4]">{step.icon}</span>
            </div>
            
            <div className="flex flex-col pt-2">
              <h4 className="font-instrument text-2xl md:text-3xl text-[#0D0D0C] mb-2">
                {step.title}
              </h4>
              <p className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed mb-3">
                {step.desc}
              </p>
              <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52]">
                EST. READING TIME: {step.time}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
