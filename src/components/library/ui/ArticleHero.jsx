import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1];

export function ArticleHero({ 
  title, 
  subtitle, 
  readingTime, 
  difficulty, 
  scripturesCount, 
  versesCount,
  badges 
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative w-full min-h-screen bg-[#0D0D0C] flex flex-col items-center justify-center overflow-hidden pt-32 pb-24 px-6">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-40 mix-blend-screen"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(197, 139, 82, 0.15) 0%, rgba(13, 13, 12, 0) 60%)',
              'radial-gradient(circle at 50% 45%, rgba(197, 139, 82, 0.2) 0%, rgba(13, 13, 12, 0) 65%)',
              'radial-gradient(circle at 50% 50%, rgba(197, 139, 82, 0.15) 0%, rgba(13, 13, 12, 0) 60%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 noise-fine opacity-20 mix-blend-overlay" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        <span className="font-general text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#C58B52] mb-12">
          LIBRARY // COSMOLOGY
        </span>

        <h1 className="font-instrument text-5xl md:text-7xl lg:text-8xl text-[#E9E2D4] tracking-tighter leading-[1.1] mb-8 max-w-4xl">
          {title}
        </h1>

        <p className="font-cormorant text-2xl md:text-3xl lg:text-4xl text-[#E9E2D4]/70 font-light italic mb-16 max-w-3xl leading-relaxed">
          {subtitle}
        </p>

        {/* Article Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-b border-[#C58B52]/20 py-8 mb-16 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="font-instrument text-3xl text-[#E9E2D4] mb-2">{readingTime}</span>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52]">Reading Time</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-instrument text-3xl text-[#E9E2D4] mb-2">{difficulty}</span>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52]">Difficulty Level</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-instrument text-3xl text-[#E9E2D4] mb-2">{scripturesCount}</span>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52]">Primary Scriptures</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-instrument text-3xl text-[#E9E2D4] mb-2">{versesCount}</span>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52]">Sanskrit Verses</span>
          </div>
        </div>

        {/* Interactive Badges */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
          {badges.map((badge, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + (i * 0.1), ease: EASE_EXPO }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#C58B52]/30 bg-[#1A1A18]/50 backdrop-blur-sm"
            >
              <svg className="w-3 h-3 text-[#C58B52]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#E9E2D4]/90">
                {badge}
              </span>
            </motion.div>
          ))}
        </div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="font-general text-[8px] uppercase tracking-[0.4em] text-[#C58B52]/60">
          BEGIN EXPEDITION
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C58B52]/60 to-transparent" />
      </motion.div>
    </div>
  );
}
