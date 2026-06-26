import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const YUGAS = [
  {
    name: 'Satya Yuga',
    subtitle: 'The Golden Age',
    duration: '1,728,000 human years',
    qualities: 'Absolute purity, truth, and profound spiritual vision.',
    dharma: 'Stands on all four legs: Truth, Compassion, Austerity, Purity.',
    practice: 'Meditation (Dhyāna) is effortless and natural.',
    opacity: 1 // Full brightness
  },
  {
    name: 'Tretā Yuga',
    subtitle: 'The Age of Sacrifice',
    duration: '1,296,000 human years',
    qualities: 'Materialism surfaces. Kings become conquerors.',
    dharma: 'Stands on three legs. Purity is lost.',
    practice: 'Elaborate fire sacrifices (Yajña).',
    opacity: 0.8
  },
  {
    name: 'Dvāpara Yuga',
    subtitle: 'The Age of Doubt',
    duration: '864,000 human years',
    qualities: 'Hypocrisy and disease enter society. Lifespans shorten.',
    dharma: 'Stands on two legs. Compassion is lost.',
    practice: 'Elaborate temple worship (Arcana).',
    opacity: 0.5
  },
  {
    name: 'Kali Yuga',
    subtitle: 'The Age of Iron',
    duration: '432,000 human years',
    qualities: 'Conflict, superficiality, greed, and spiritual blindness.',
    dharma: 'Stands on only one leg: Truth. And even that is crippled.',
    practice: 'Chanting the Holy Names (Nāma-saṅkīrtana).',
    opacity: 0.2
  }
];

function YugaTimelineItem({ yuga, i, scrollYProgress }) {
  const start = i * 0.25;
  const end = start + 0.25;

  const activeOpacity = useTransform(scrollYProgress, [start, start + 0.1, end], [0.1, 1, 0.3]);
  const yOffset = useTransform(scrollYProgress, [start, start + 0.1], [50, 0]);

  return (
    <motion.div 
      style={{ opacity: activeOpacity, y: yOffset }}
      className={`relative flex flex-col md:flex-row md:items-center ${i % 2 === 0 ? 'md:text-right md:justify-end' : 'md:text-left md:justify-start'}`}
    >
      {/* Dot on the timeline */}
      <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-3 h-3 bg-[#E9E2D4] border-2 border-[#C58B52] rounded-full -translate-x-[5px] md:-translate-x-1/2 md:-translate-y-1/2 z-10" />

      <div className={`pl-12 md:pl-0 w-full md:w-5/12 flex flex-col gap-4 ${i % 2 === 0 ? 'md:pr-16 md:items-end' : 'md:pl-16 md:items-start md:ml-auto'}`}>
        
        <div>
          <h3 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] mb-1" style={{ opacity: yuga.opacity }}>
            {yuga.name}
          </h3>
          <span className="font-cormorant text-xl text-[#C58B52] italic">{yuga.subtitle}</span>
        </div>

        <div className="text-[#0D0D0C]/80 font-cormorant text-lg font-light flex flex-col gap-2">
          <p><span className="font-general text-[9px] uppercase tracking-widest text-[#0D0D0C]/40 block mb-1">Duration</span> {yuga.duration}</p>
          <p><span className="font-general text-[9px] uppercase tracking-widest text-[#0D0D0C]/40 block mb-1">Qualities</span> {yuga.qualities}</p>
          <p><span className="font-general text-[9px] uppercase tracking-widest text-[#0D0D0C]/40 block mb-1">Dharma</span> {yuga.dharma}</p>
          <p><span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-1">Spiritual Path</span> {yuga.practice}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function YugaTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <div ref={containerRef} className="relative w-full py-24 flex flex-col items-center">
      
      {/* Central Line fading out */}
      <motion.div 
        className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-1/2"
        style={{
          background: 'linear-gradient(to bottom, rgba(197,139,82,1) 0%, rgba(197,139,82,0.1) 100%)'
        }}
      />

      <div className="w-full max-w-3xl flex flex-col gap-32 px-6">
        {YUGAS.map((yuga, i) => (
          <YugaTimelineItem key={i} yuga={yuga} i={i} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}
