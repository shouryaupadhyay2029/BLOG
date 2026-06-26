import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ZOOM_LEVELS = [
  { label: "One Blink", desc: "(Nimeṣa) The time it takes to blink an eye." },
  { label: "One Breath", desc: "(Prāṇa) The time of one human respiration." },
  { label: "One Muhūrta", desc: "48 human minutes. The standard unit of daily ritual." },
  { label: "One Day", desc: "A full cycle of the sun. The basic unit of human experience." },
  { label: "One Month", desc: "The cycle of the moon. One day for the ancestors." },
  { label: "One Year", desc: "The cycle of seasons. One day for the gods." },
  { label: "Divine Year", desc: "360 human years. A year in the realm of the Devas." },
  { label: "The Yugas", desc: "Thousands of divine years. The rise and fall of human consciousness." },
  { label: "Mahāyuga", desc: "4.32 million human years. One complete cycle of four Yugas." },
  { label: "Manvantara", desc: "71 Mahāyugas. The lifespan of a cosmic ruler (Manu)." },
  { label: "Kalpa", desc: "1,000 Mahāyugas. One daytime of Brahmā (4.32 billion years)." },
  { label: "Lifetime of Brahmā", desc: "311 trillion human years. The total lifespan of this universe." }
];

export function CosmicZoom() {
  const containerRef = useRef(null);
  
  // Create a very tall container so we have room to scroll through 12 items
  const containerHeight = `${ZOOM_LEVELS.length * 70}vh`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} style={{ height: containerHeight }} className="relative w-full">
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Subtle background circles that zoom out */}
        <motion.div 
          className="absolute rounded-full border border-[#C58B52]/10"
          style={{
            width: '100vw',
            height: '100vw',
            scale: useTransform(scrollYProgress, [0, 1], [0.1, 10]),
            opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
          }}
        />

        {ZOOM_LEVELS.map((level, i) => {
          const step = 1 / ZOOM_LEVELS.length;
          const start = i * step;
          const end = (i + 1) * step;
          const peak = start + (step / 2);

          // Animate opacity: fade in, hold briefly, fade out
          const opacity = useTransform(scrollYProgress, 
            [start, start + 0.02, end - 0.02, end], 
            [0, 1, 1, 0]
          );

          // Animate scale: continuously zooming out to give the feeling of expanding outward
          const scale = useTransform(scrollYProgress,
            [start, end],
            [1.5, 0.8]
          );

          return (
            <motion.div 
              key={i}
              style={{ opacity, scale }}
              className="absolute flex flex-col items-center text-center px-6"
            >
              <h2 className="font-instrument text-5xl md:text-8xl text-[#0D0D0C] tracking-tight mb-6">
                {level.label}
              </h2>
              <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C]/70 italic max-w-xl">
                {level.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
