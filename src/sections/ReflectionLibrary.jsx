import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const TOPICS = [
  {
    title: "How time flows in Sanātana Dharma",
    description: "A cyclical view of existence where creation, preservation, and dissolution repeat endlessly."
  },
  {
    title: "Science and spirituality",
    description: "Two ways of looking at reality that can coexist without canceling each other."
  },
  {
    title: "Karma and free will",
    description: "A study of action, consequence, and human agency."
  },
  {
    title: "Consciousness and the Self",
    description: "What the scriptures suggest about awareness beyond the body."
  },
  {
    title: "Trimūrti and cosmic functions",
    description: "Understanding the unified principles behind manifestation, sustenance, and withdrawal."
  },
  {
    title: "Yugas and cosmic decline",
    description: "The spiritual physics of time and the inevitable entropy of Dharma."
  }
];

const EASE_EXPO = [0.16, 1, 0.3, 1];

function TopicItem({ index, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative flex flex-col py-8 cursor-pointer border-b border-[#E9E2D4]/10 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, ease: EASE_EXPO, delay: index * 0.1 }}
    >
      <div className="flex flex-row items-baseline justify-between w-full">
        <h3 className="font-instrument text-3xl md:text-5xl tracking-tight text-[#E9E2D4]/80 transition-colors duration-500 ease-out group-hover:text-[#E9E2D4]">
          {title}
        </h3>
        <span className="font-general text-[10px] uppercase tracking-widest text-[#C58B52]/0 transition-all duration-500 ease-out group-hover:text-[#C58B52]/100 ml-4 whitespace-nowrap">
          Explore
        </span>
      </div>

      <motion.div 
        className="overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isHovered ? 'auto' : 0, 
          opacity: isHovered ? 1 : 0 
        }}
        transition={{ duration: 0.6, ease: EASE_EXPO }}
      >
        <p className="font-cormorant text-lg md:text-xl font-light italic text-[#E9E2D4]/60 pt-4 max-w-3xl leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Hover Line Accent */}
      <motion.div 
        className="absolute bottom-[-1px] left-0 h-[1px] bg-[#C58B52]"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : '0%' }}
        transition={{ duration: 0.8, ease: EASE_EXPO }}
      />
    </motion.div>
  );
}

export function ReflectionLibrary() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#0D0D0C] text-[#E9E2D4] py-32 md:py-48 z-10 flex flex-col items-center border-t border-[#C58B52]/10"
    >
      <div className="w-full max-w-6xl px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <motion.div 
          className="mb-24 md:mb-32 flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
        >
          <span className="font-general text-[11px] uppercase tracking-[0.3em] text-[#C58B52] mb-6 block">
            Endless Cycle
          </span>
          <h2 className="font-instrument text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-8 text-[#E9E2D4]">
            REFLECTION LIBRARY
          </h2>
          <p className="font-cormorant text-xl md:text-2xl font-light italic text-[#E9E2D4]/70 max-w-2xl leading-relaxed">
            The timeline is only a frame. True understanding comes from reflection on the eternal principles that govern creation, preservation, and dissolution.
          </p>
        </motion.div>

        {/* List of Topics */}
        <div className="flex flex-col w-full">
          {TOPICS.map((topic, index) => (
            <TopicItem key={index} index={index} {...topic} />
          ))}
        </div>

      </div>

      {/* FINAL CONCLUSION SECTION */}
      <div className="w-full flex flex-col items-center justify-center mt-[35vh] pb-[20vh] relative">
        
        {/* Massive Typography Watermark */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-end pb-[10vh] pointer-events-none select-none z-0 overflow-hidden"
        >
          <span 
            className="font-instrument text-[#E9E2D4] leading-none text-center"
            style={{ 
              fontSize: '28vw', 
              opacity: 0.03, 
              letterSpacing: '-0.02em',
              transform: 'translateY(15%)'
            }}
          >
            TATTVA
          </span>
        </div>

        <motion.div 
          className="relative z-10 flex flex-col items-center text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
        >
          {/* Top Label */}
          <span className="font-general text-[9px] uppercase tracking-[0.4em] text-[#C58B52] mb-12">
            The Journey Continues
          </span>

          {/* Main Quote */}
          <h2 className="font-instrument text-4xl md:text-6xl lg:text-7xl text-[#E9E2D4] leading-tight max-w-4xl tracking-tight mb-8">
            "There is no final answer.<br />
            <span className="italic opacity-80">Only deeper questions.</span>"
          </h2>

          {/* Secondary Text */}
          <p className="font-cormorant text-lg md:text-xl font-light italic text-[#E9E2D4]/50 mb-16 max-w-md leading-relaxed">
            The search does not end here.<br />
            It begins again with every question.
          </p>

          {/* Divider */}
          <div className="w-[90px] h-[1px] bg-[#C58B52]/40 mb-16" />

          {/* Signature */}
          <div className="flex flex-col items-center">
            <span className="font-general text-[11px] uppercase tracking-[0.3em] text-[#E9E2D4]/70 mb-2">
              TATTVA
            </span>
            <span className="font-cormorant text-sm italic text-[#E9E2D4]/40">
              A Search Beyond Certainty
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
