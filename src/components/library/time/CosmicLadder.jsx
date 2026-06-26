import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LADDER_STEPS = [
  { name: 'Kṣaṇa', eng: 'Human Second', duration: 'A fraction of a moment.', desc: 'The smallest measurable unit of human consciousness.' },
  { name: 'Prāṇa', eng: 'One Breath', duration: '4 seconds', desc: 'The rhythm of a resting human life.' },
  { name: 'Muhūrta', eng: 'A Cosmic Hour', duration: '48 minutes', desc: 'The standard measure for rituals and human focus.' },
  { name: 'Ahorātra', eng: 'Day & Night', duration: '24 hours', desc: 'A complete cycle of the sun.' },
  { name: 'Māsa', eng: 'Month', duration: '30 days', desc: 'One entire day for the ancestors (Pitṛs).' },
  { name: 'Saṃvatsara', eng: 'Year', duration: '365 days', desc: 'One entire day for the gods (Devas).' },
  { name: 'Divya Varṣa', eng: 'Divine Year', duration: '360 human years', desc: 'The scale where recorded history begins to look like a fleeting moment.' },
  { name: 'Mahāyuga', eng: 'The Great Cycle', duration: '4.32 million years', desc: 'The complete rise and fall of human civilization and consciousness.' },
  { name: 'Manvantara', eng: 'Age of a Cosmic Ruler', duration: '306.72 million years', desc: 'The lifespan of a Manu, who oversees humanity across ages.' },
  { name: 'Kalpa', eng: 'Day of Brahmā', duration: '4.32 billion years', desc: 'A mere 12 hours for the Creator.' },
  { name: 'Mahā Kalpa', eng: 'Lifetime of Brahmā', duration: '311.04 trillion years', desc: 'The absolute boundary of measurable existence.' }
];

function CosmicLadderItem({ step, i, scrollYProgress, totalSteps }) {
  const stepSize = 1 / totalSteps;
  const start = i * stepSize;
  const end = start + stepSize;
  const fadeOutStart = end + 0.05;
  const fadeOutEnd = end + 0.1;

  let inputRange, outputRange;
  
  if (i === totalSteps - 1) {
    // For the last item, it stays visible until the very end
    inputRange = [start, start + 0.02, 1];
    outputRange = [0, 1, 1];
  } else {
    // Normal fade in and out
    inputRange = [start, start + 0.02, end, fadeOutEnd];
    outputRange = [0, 1, 1, 0];
  }

  const opacity = useTransform(scrollYProgress, inputRange, outputRange);

  const y = useTransform(
    scrollYProgress,
    [start, start + 0.1],
    [50, 0]
  );

  // Calculate a physical scale for the card. 
  // Early items are small, later items grow massive.
  const progressFactor = i / (totalSteps - 1); // 0 to 1
  const baseScale = 0.5 + (progressFactor * 2.5); // 0.5 for first, 3.0 for last

  // We also want a slight zoom effect as the user scrolls THROUGH the active phase
  const activeScale = useTransform(
    scrollYProgress,
    [start, end],
    [baseScale, baseScale * 1.05]
  );

  return (
    <motion.div
      style={{ opacity, y, scale: activeScale }}
      className="absolute flex flex-col items-center justify-center bg-[#E9E2D4] border border-[#C58B52]/30 p-8 md:p-12 shadow-2xl"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#0D0D0C] rotate-45 border border-[#C58B52]" />
      
      <span className="font-general text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-[#C58B52] mb-4">
        {step.name}
      </span>
      
      <h3 className="font-instrument text-3xl md:text-5xl text-[#0D0D0C] tracking-tight mb-2 text-center whitespace-nowrap">
        {step.eng}
      </h3>
      
      <p className="font-cormorant text-xl md:text-2xl text-[#0D0D0C]/60 italic mb-6 text-center">
        {step.duration}
      </p>
      
      <div className="w-[1px] h-[30px] bg-[#0D0D0C]/10 mb-6" />
      
      <p className="font-cormorant text-lg md:text-xl font-light text-[#0D0D0C]/80 text-center max-w-[400px] leading-relaxed">
        {step.desc}
      </p>
    </motion.div>
  );
}

export function CosmicLadder() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full bg-[#0D0D0C]" style={{ height: `${LADDER_STEPS.length * 80}vh` }}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* We map over each step, and animate it based on scroll progress */}
        {LADDER_STEPS.map((step, i) => (
          <CosmicLadderItem 
            key={i} 
            step={step} 
            i={i} 
            scrollYProgress={scrollYProgress} 
            totalSteps={LADDER_STEPS.length} 
          />
        ))}
      </div>
    </div>
  );
}
