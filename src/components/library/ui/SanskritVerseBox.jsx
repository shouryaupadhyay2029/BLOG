import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SanskritVerseBox({ 
  title, 
  devanagari, 
  iast, 
  wordByWord, 
  literalTranslation, 
  smoothTranslation,
  context
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-[#E9E2D4] border border-[#C58B52]/30 rounded-sm overflow-hidden my-8 shadow-sm">
      {/* Header / Summary */}
      <div 
        className="p-6 md:p-8 cursor-pointer hover:bg-[#C58B52]/5 transition-colors duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start mb-4">
          <span className="font-general text-[10px] uppercase tracking-[0.3em] text-[#C58B52]">
            {title}
          </span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-[#C58B52]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
        
        <p className="font-instrument text-2xl md:text-3xl text-[#0D0D0C] leading-relaxed mb-4 text-center">
          {devanagari}
        </p>
        <p className="font-cormorant text-xl text-[#0D0D0C]/70 italic text-center mb-6">
          {iast}
        </p>
        <p className="font-cormorant text-lg md:text-xl font-medium text-[#0D0D0C]/90 text-center border-t border-[#C58B52]/20 pt-6">
          {smoothTranslation}
        </p>
      </div>

      {/* Expandable Deep Analysis */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-[#0D0D0C] text-[#E9E2D4]"
          >
            <div className="p-6 md:p-8 border-t border-[#C58B52]/20">
              <div className="mb-8">
                <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] block mb-3">
                  WORD-BY-WORD
                </span>
                <p className="font-cormorant text-lg font-light leading-relaxed opacity-90">
                  {wordByWord}
                </p>
              </div>

              <div className="mb-8">
                <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] block mb-3">
                  LITERAL TRANSLATION
                </span>
                <p className="font-cormorant text-lg font-light leading-relaxed opacity-90">
                  {literalTranslation}
                </p>
              </div>

              {context && (
                <div>
                  <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] block mb-3">
                    CONTEXT & GRAMMAR
                  </span>
                  <p className="font-cormorant text-lg font-light leading-relaxed opacity-80">
                    {context}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
