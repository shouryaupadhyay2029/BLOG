import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AccordionFAQ({ categories = [], faqs = [] }) {
  const [activeCategory, setActiveCategory] = useState(0);

  // 1. If flat faqs are provided, render without category tabs
  if (faqs && Array.isArray(faqs) && faqs.length > 0) {
    return (
      <div className="w-full flex flex-col gap-4">
        {faqs.map((q, idx) => (
          <FAQItem key={idx} question={q.question} answer={q.answer} />
        ))}
      </div>
    );
  }

  // 2. If no valid categories exist, render gracefully
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return null;
  }

  // 3. Prevent crashing if activeCategory is somehow out of bounds
  const currentCategory = categories[activeCategory];
  if (!currentCategory || !Array.isArray(currentCategory.questions)) {
    return null;
  }

  return (
    <div className="w-full my-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-8 border-b border-[#C58B52]/20 pb-4">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(idx)}
            className={`font-general text-[10px] uppercase tracking-[0.2em] px-4 py-2 transition-colors duration-300 ${activeCategory === idx ? 'text-[#C58B52] border-b-2 border-[#C58B52]' : 'text-[#0D0D0C]/50 hover:text-[#0D0D0C]'}`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* FAQ List for Active Category */}
      <div className="flex flex-col gap-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4"
          >
            {currentCategory.questions.map((q, idx) => (
              <FAQItem key={idx} question={q.question} answer={q.answer} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#0D0D0C]/10 bg-white/40 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-[#C58B52]/5 transition-colors duration-300"
      >
        <span className="font-instrument text-2xl text-[#0D0D0C] pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#C58B52] shrink-0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="p-6 pt-0 border-t border-[#0D0D0C]/5 font-cormorant text-lg font-light text-[#0D0D0C]/80 leading-relaxed mt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
