import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1];

const SCALES = [
  {
    title: "The Human Realm",
    desc: "Our experience of time. Days, months, and years governed by the Sun and Moon. A human year passes in what feels like a blink to higher beings."
  },
  {
    title: "The Realm of Pitṛs (Ancestors)",
    desc: "One human month equals a single day for the ancestors. The dark fortnight is their day, and the bright fortnight is their night. Their perception of change is slower, more vast."
  },
  {
    title: "The Realm of Devas (Gods)",
    desc: "One entire human year is just one day and night for the Devas. The six months of Uttarāyaṇa (Northern movement of the sun) is their day. Dakṣiṇāyana is their night."
  },
  {
    title: "The Realm of Brahmā",
    desc: "The creator's time is staggering. 4.32 billion human years make up just twelve hours—a single daytime—for Brahmā. In his realm, entire solar systems are born and die in the span of an afternoon."
  }
];

function TimeScaleItem({ scale, i, scrollYProgress }) {
  // We create a cascading activation based on scroll progress
  const start = i * 0.25;
  const fullyActive = Math.min(start + 0.15, 0.99);
  const end = Math.min(fullyActive + 0.15, 1);
  
  // Transform values
  const opacity = useTransform(scrollYProgress, [start, fullyActive, end], [0.2, 1, 1]);
  const scaleTransform = useTransform(scrollYProgress, [start, fullyActive], [0.8, 1]);
  const yOffset = useTransform(scrollYProgress, [start, fullyActive], [50, 0]);

  return (
    <motion.div 
      style={{ opacity, scale: scaleTransform, y: yOffset }}
      className="relative w-full max-w-2xl bg-[#E9E2D4] border border-[#0D0D0C]/10 p-12 my-12 z-10 text-center"
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#E9E2D4] border border-[#C58B52] rotate-45" />
      <h3 className="font-instrument text-3xl md:text-5xl text-[#0D0D0C] mb-6">{scale.title}</h3>
      <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed">
        {scale.desc}
      </p>
    </motion.div>
  );
}

export function TimeScaleHierarchy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <div ref={containerRef} className="relative w-full py-32 flex flex-col items-center">
      
      {/* Central Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#C58B52]/20 -translate-x-1/2" />
      
      {SCALES.map((scale, i) => (
        <TimeScaleItem key={i} scale={scale} i={i} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}
