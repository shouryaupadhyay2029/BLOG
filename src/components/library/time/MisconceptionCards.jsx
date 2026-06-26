import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MISCONCEPTIONS = [
  {
    myth: "Kali Yuga is the end of the world.",
    verdict: "Misunderstanding",
    evidence: "Bhāgavata Purāṇa 12.2.34",
    explanation: "Kali Yuga is not an apocalypse; it is merely the winter of the cosmic cycle. When it concludes, it is followed not by absolute destruction, but by the rebirth of Satya Yuga (the Golden Age), where Dharma is fully restored."
  },
  {
    myth: "Time repeats identically (Groundhog Day style).",
    verdict: "Oversimplification",
    evidence: "Yoga Vāsiṣṭha",
    explanation: "While the overarching structure (the sequence of Yugas) repeats, the specific events and actions of individual souls (Jīvas) do not repeat identically. Karma guarantees that free will is exercised differently in each cycle."
  },
  {
    myth: "Brahmā created everything exactly once.",
    verdict: "Inaccurate",
    evidence: "Śvetāśvatara Upaniṣad 5.3",
    explanation: "Creation is not a singular event in the past. It is an ongoing, rhythmic process of expansion and contraction. God projects the universe and withdraws it, over and over, like a spider weaving and retracting its web."
  },
  {
    myth: "Mahāpralaya destroys everything forever.",
    verdict: "Misunderstanding",
    evidence: "Viṣṇu Purāṇa 6.4",
    explanation: "Nothing in Sanātana Dharma is truly 'destroyed.' Mahāpralaya (Great Dissolution) is simply the universe entering a state of dormant potential (Prakṛti returning to equilibrium). It rests until it is time to expand again."
  },
  {
    myth: "We are currently living at the very end of creation.",
    verdict: "Numerically Incorrect",
    evidence: "Sūrya Siddhānta",
    explanation: "While we are in Kali Yuga, we are only in the 51st year of Brahmā, in the first day of his second half of life. From a cosmic perspective, this universe still has trillions of human years left before Mahāpralaya."
  }
];

export function MisconceptionCards() {
  return (
    <div className="w-full max-w-4xl mx-auto py-16 flex flex-col gap-6">
      {MISCONCEPTIONS.map((item, i) => (
        <ExpandableCard key={i} item={item} index={i} />
      ))}
    </div>
  );
}

function ExpandableCard({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border border-[#0D0D0C]/10 bg-[#E9E2D4] cursor-pointer group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6 md:p-8 flex items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <span className="font-general text-[10px] uppercase tracking-widest text-[#C58B52]">
            MYTH {index + 1}
          </span>
          <h4 className="font-instrument text-2xl md:text-3xl text-[#0D0D0C] group-hover:text-[#C58B52] transition-colors duration-300">
            "{item.myth}"
          </h4>
        </div>
        <div className="flex-shrink-0 ml-4">
          <motion.div 
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-8 h-8 rounded-full border border-[#0D0D0C]/20 flex items-center justify-center"
          >
            <span className="text-[#0D0D0C]/50 font-light">+</span>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="p-6 md:p-8 pt-0 border-t border-[#0D0D0C]/5 mt-2 flex flex-col gap-6">
              
              <div className="flex gap-12 mt-4">
                <div>
                  <span className="font-general text-[9px] uppercase tracking-widest text-[#0D0D0C]/40 block mb-2">Verdict</span>
                  <span className="font-cormorant text-lg text-[#0D0D0C]">{item.verdict}</span>
                </div>
                <div>
                  <span className="font-general text-[9px] uppercase tracking-widest text-[#0D0D0C]/40 block mb-2">Evidence</span>
                  <span className="font-cormorant text-lg text-[#C58B52] italic">{item.evidence}</span>
                </div>
              </div>

              <div>
                <span className="font-general text-[9px] uppercase tracking-widest text-[#0D0D0C]/40 block mb-2">Explanation</span>
                <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
                  {item.explanation}
                </p>
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
