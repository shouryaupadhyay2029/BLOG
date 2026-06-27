import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ScholarNote({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full border border-[#0D0D0C]/15 bg-white/50 p-6 my-8 shadow-sm">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-[#0D0D0C] flex items-center justify-center shrink-0">
            <span className="font-instrument text-lg text-[#E9E2D4]">i</span>
          </div>
          <div>
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] block mb-1">
              SCHOLAR NOTE
            </span>
            <span className="font-cormorant text-xl font-medium text-[#0D0D0C]">
              {title}
            </span>
          </div>
        </div>
        
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#0D0D0C]/60"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-6 mt-4 border-t border-[#0D0D0C]/10 prose-custom font-cormorant text-lg font-light text-[#0D0D0C]/80 leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
