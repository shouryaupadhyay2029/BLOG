import React from 'react';
import { motion } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1];

const RATINGS = [
  { stars: 5, label: 'Explicit Scripture', desc: 'Direct, unambiguous statements found in primary Śruti or major Smṛti texts.' },
  { stars: 4, label: 'Multiple Scriptural Consensus', desc: 'Agreed upon across various Purāṇas, Itihāsas, or Siddhāntas without major contradiction.' },
  { stars: 3, label: 'Traditional Commentary', desc: 'Interpretations provided by classical Ācāryas (e.g., Śaṅkara, Rāmānuja, Madhva).' },
  { stars: 2, label: 'Scholarly Reconstruction', desc: 'Academic or historical models pieced together from linguistic and archaeological context.' },
  { stars: 1, label: 'Popular Belief', desc: 'Widely held cultural traditions that may lack direct primary textual basis.' }
];

export function EvidenceRatingSystem() {
  return (
    <div className="w-full max-w-3xl mx-auto my-16 bg-[#E9E2D4] border border-[#C58B52]/30 p-8 md:p-12 shadow-sm rounded-sm">
      <h3 className="font-instrument text-3xl text-[#0D0D0C] mb-8 text-center tracking-tight">
        Evidence Hierarchy
      </h3>
      <div className="flex flex-col gap-6">
        {RATINGS.map((rating, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: EASE_EXPO }}
            className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6 border-b border-[#0D0D0C]/10 pb-6 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-1 shrink-0 w-32">
              {[...Array(5)].map((_, starIndex) => (
                <svg 
                  key={starIndex} 
                  className={`w-4 h-4 ${starIndex < rating.stars ? 'text-[#C58B52] fill-[#C58B52]' : 'text-[#C58B52]/20 fill-transparent'}`}
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="font-cormorant text-xl font-medium text-[#0D0D0C] mb-1">
                {rating.label}
              </span>
              <span className="font-cormorant text-lg font-light text-[#0D0D0C]/70 leading-relaxed">
                {rating.desc}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
