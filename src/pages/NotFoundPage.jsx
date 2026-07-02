import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1];

const NAV_LINKS = [
  { label: 'Home', to: '/', desc: 'Return to the source' },
  { label: 'Inquiry Archive', to: '/inquiry', desc: 'Questions without certainty' },
  { label: 'Satya / Mithyā', to: '/satya-mithya', desc: 'Truth from misconception' },
  { label: 'Tattva Library', to: '/library', desc: 'Foundations of knowledge' },
  { label: 'The Origin', to: '/the-origin', desc: 'Before time, before Yugas' },
];

function GrainCanvas() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[0] noise-fine"
        style={{ mixBlendMode: 'overlay', opacity: 0.55 }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[0] noise-coarse"
        style={{ mixBlendMode: 'soft-light', opacity: 0.35 }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[0] noise-heavy"
        style={{ mixBlendMode: 'color-dodge', opacity: 0.12 }}
      />
    </>
  );
}

function NavLink({ label, to, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: EASE_EXPO, delay: 0.6 + index * 0.08 }}
    >
      <Link
        to={to}
        className="group flex items-center justify-between w-full py-5 border-b border-[#EAE4D9]/08 hover:border-[#C58B52]/40 transition-colors duration-500"
      >
        <div className="flex flex-col">
          <span
            className="font-instrument text-xl text-[#EAE4D9]/70 group-hover:text-[#EAE4D9] transition-colors duration-500 tracking-tight"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            {label}
          </span>
          <span
            className="font-cormorant text-sm italic text-[#EAE4D9]/35 group-hover:text-[#C58B52]/70 transition-colors duration-500 mt-0.5"
            style={{ fontFamily: 'Cormorant, serif' }}
          >
            {desc}
          </span>
        </div>
        <motion.span
          className="text-[#C58B52]/40 group-hover:text-[#C58B52] transition-colors duration-500 font-light text-lg"
          initial={{ x: 0 }}
          whileHover={{ x: 6 }}
          transition={{ duration: 0.4, ease: EASE_EXPO }}
        >
          →
        </motion.span>
      </Link>
    </motion.div>
  );
}

export function NotFoundPage() {
  const location = useLocation();
  const attemptedPath = location.pathname;

  return (
    <div className="relative w-full min-h-screen bg-[#0A0A0A] text-[#EAE4D9] font-sans antialiased overflow-hidden flex flex-col items-center justify-center px-6">
      <GrainCanvas />

      {/* Ambient pulsing radial aura — the "unmanifest source" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <motion.div
          className="rounded-full"
          style={{
            width: '60vmax',
            height: '60vmax',
            background: 'radial-gradient(circle, rgba(197,139,82,0.06) 0%, rgba(197,139,82,0.02) 35%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '30vmax',
            height: '30vmax',
            background: 'radial-gradient(circle, rgba(197,139,82,0.08) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Top Navigation Bar */}
      <nav className="absolute top-6 left-6 md:top-11 md:left-12 z-50 flex flex-wrap items-center gap-x-8 gap-y-2 max-w-[calc(100%-48px)]">
        <Link to="/" className="block">
          <span
            style={{
              fontFamily: 'Cormorant, serif',
              fontSize: '13px',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              fontWeight: 300,
              color: '#E9E2D4',
              opacity: 0.5,
            }}
            className="hover:opacity-100 transition-opacity duration-500"
          >
            TATTVA
          </span>
        </Link>
      </nav>

      {/* Core Content */}
      <div className="relative z-10 w-full max-w-xl flex flex-col items-center text-center">
        {/* 404 Numeral */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
        >
          <span
            className="block leading-none tracking-tighter text-[#C58B52]/25 select-none mb-4"
            style={{
              fontFamily: 'Cormorant, serif',
              fontSize: 'clamp(6rem, 20vw, 14rem)',
              fontWeight: 300,
            }}
          >
            404
          </span>
        </motion.div>

        {/* Category label */}
        <motion.span
          className="font-general text-[10px] uppercase tracking-[0.45em] text-[#C58B52] mb-5 block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: EASE_EXPO, delay: 0.3 }}
        >
          Page Not Found
        </motion.span>

        {/* Divider */}
        <motion.div
          className="w-12 h-[1px] bg-[#C58B52]/35 mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.4 }}
          style={{ transformOrigin: 'center' }}
        />

        {/* Poetic editorial message */}
        <motion.p
          className="font-cormorant text-xl md:text-2xl font-light italic text-[#EAE4D9]/55 leading-relaxed mb-4"
          style={{ fontFamily: 'Cormorant, serif' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.45 }}
        >
          You have wandered into the unmanifest.
        </motion.p>
        <motion.p
          className="font-cormorant text-base md:text-lg font-light text-[#EAE4D9]/35 leading-relaxed mb-12 max-w-sm"
          style={{ fontFamily: 'Cormorant, serif' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.55 }}
        >
          The path you seek has either dissolved back into the source, or has not yet emerged from the Yugas.
        </motion.p>

        {/* Attempted path note */}
        {attemptedPath && attemptedPath !== '/' && (
          <motion.div
            className="font-general text-[8.5px] uppercase tracking-widest text-[#EAE4D9]/20 mb-12 border border-[#EAE4D9]/10 px-4 py-2 rounded-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE_EXPO, delay: 0.65 }}
          >
            Requested: <span className="text-[#C58B52]/50 font-mono">{attemptedPath}</span>
          </motion.div>
        )}
      </div>

      {/* Navigation Paths */}
      <motion.div
        className="relative z-10 w-full max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE_EXPO, delay: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-2">
          <div className="h-[1px] flex-1 bg-[#EAE4D9]/08" />
          <span className="font-general text-[8.5px] uppercase tracking-[0.35em] text-[#C58B52]/50">
            Continue the inquiry
          </span>
          <div className="h-[1px] flex-1 bg-[#EAE4D9]/08" />
        </div>
        {NAV_LINKS.map((link, i) => (
          <NavLink key={link.to} {...link} index={i} />
        ))}
      </motion.div>
    </div>
  );
}

export default NotFoundPage;
