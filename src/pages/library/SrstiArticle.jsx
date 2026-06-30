import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TheGreatQuestion } from '@/components/library/srsti/TheGreatQuestion';
import { TheFirstVoice } from '@/components/library/srsti/TheFirstVoice';
import { TadEkam } from '@/components/library/srsti/TadEkam';
import { TheFirstStirring } from '@/components/library/srsti/TheFirstStirring';
import { Hiranyagarbha } from '@/components/library/srsti/Hiranyagarbha';
import { Prakrti } from '@/components/library/srsti/Prakrti';
import { TheThreeGunas } from '@/components/library/srsti/TheThreeGunas';
import { Mahat } from '@/components/library/srsti/Mahat';
import { FromIntelligenceToMatter } from '@/components/library/srsti/FromIntelligenceToMatter';
import { TheManifestUniverse } from '@/components/library/srsti/TheManifestUniverse';
import { WhyCreationRepeats } from '@/components/library/srsti/WhyCreationRepeats';
import { SrstiEpilogue } from '@/components/library/srsti/SrstiEpilogue';

const EASE_EXPO = [0.16, 1, 0.3, 1];

/* ─── Particle Layer ─────────────────────────────────────────── */
function CosmicParticles({ scrollProgress }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialise particles — brighter than before
    const COUNT = 200;
    particlesRef.current = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.12 + 0.04,
      drift: (Math.random() - 0.5) * 0.06,
      opacity: Math.random() * 0.32 + 0.12,   // raised base brightness
      gold: Math.random() > 0.82,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scroll = scrollProgress.get ? scrollProgress.get() : 0;
      const awakening = Math.min(scroll * 4, 1);

      particlesRef.current.forEach(p => {
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -4) p.y = canvas.height + 4;
        if (p.x < -4) p.x = canvas.width + 4;
        if (p.x > canvas.width + 4) p.x = -4;

        const baseOpacity = p.opacity;
        const boostedOpacity = baseOpacity + awakening * (p.gold ? 0.45 : 0.20);

        if (p.gold) {
          ctx.fillStyle = `rgba(197, 139, 82, ${Math.min(boostedOpacity, 0.80)})`;
        } else {
          ctx.fillStyle = `rgba(230, 222, 208, ${Math.min(boostedOpacity, 0.52)})`;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1]"
    />
  );
}

/* ─── Reveal Sequence ────────────────────────────────────────── */
const PHRASES = [
  'Before there was time\u2026',
  'Before there was space\u2026',
  'Before there was existence itself\u2026',
  'What was there?',
];

function PhilosophyReveal({ onComplete }) {
  const [phase, setPhase] = useState(-1); // -1 = silence

  useEffect(() => {
    const timers = [];
    // 1.5 s silence, then each phrase 2 s apart
    timers.push(setTimeout(() => setPhase(0), 1500));
    timers.push(setTimeout(() => setPhase(1), 3500));
    timers.push(setTimeout(() => setPhase(2), 5500));
    timers.push(setTimeout(() => setPhase(3), 7500));
    timers.push(setTimeout(() => { onComplete && onComplete(); }, 9500));
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {phase >= 0 && phase <= 3 && (
        <motion.p
          key={phase}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 1.6, ease: EASE_EXPO }}
          className={`font-cormorant text-center select-none pointer-events-none ${
            phase === 3
              ? 'text-3xl md:text-4xl font-light text-[#C58B52]'
              : 'text-2xl md:text-3xl font-light text-white/55'
          }`}
          style={{ letterSpacing: '0.04em' }}
        >
          {PHRASES[phase]}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

/* ─── Main Hero Page ─────────────────────────────────────────── */
export function SrstiArticle() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  // Track scroll across the entire page
  const { scrollY } = useScroll();

  // Track scroll within the hero section only for parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // ── Background transition: dark void → cream paper ──
  // Starts fading cream in once the user has scrolled 60 % past the hero
  const creamOpacity = useTransform(scrollYProgress, [0.55, 1.0], [0, 1]);

  // Hero title subtle parallax
  const bgOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.7]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ fontFamily: 'inherit' }}
    >
      {/* ── DEEP VOID BACKGROUND (fixed, fades out as cream appears) ── */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ opacity: bgOpacity }}
      >
        {/* Base black */}
        <div className="absolute inset-0 bg-[#050504]" />

        {/* Near-invisible cosmic texture — radial vignette giving "depth" */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30,22,12,0.6) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 20% 70%, rgba(12,8,4,0.4) 0%, transparent 60%),
              radial-gradient(ellipse 40% 40% at 80% 30%, rgba(12,8,4,0.4) 0%, transparent 60%)
            `,
          }}
        />

        {/* Faint grain overlay */}
        <div
          aria-hidden
          className="absolute inset-0 noise-fine"
          style={{ mixBlendMode: 'screen', opacity: 0.04 }}
        />
      </motion.div>

      {/* ── PARTICLES ── */}
      <CosmicParticles scrollProgress={scrollYProgress} />

      {/* ── TOP NAV — barely visible, respects darkness ── */}
      <nav className="fixed top-9 left-9 z-50 flex items-center gap-10">
        <Link to="/">
          <span
            className="font-cormorant uppercase tracking-[0.45em] text-[13px] font-light text-white/25 hover:text-white/70 transition-colors duration-700"
          >
            TATTVA
          </span>
        </Link>
        <Link to="/library">
          <span className="font-general text-[10px] uppercase tracking-[0.4em] text-white/20 hover:text-[#C58B52]/70 transition-colors duration-700">
            Library
          </span>
        </Link>
      </nav>

      {/* ── HERO SECTION (measured for scroll progress) ── */}
      <section ref={heroRef} className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-6">

        {/* PHILOSOPHY REVEAL (before title) */}
        <AnimatePresence>
          {!revealed && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              exit={{ opacity: 0, transition: { duration: 1.2 } }}
            >
              <PhilosophyReveal onComplete={() => setRevealed(true)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN TITLE — appears after reveal sequence */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              className="flex flex-col items-center text-center"
              style={{ y: titleY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.0, ease: EASE_EXPO }}
            >
              {/* Library badge */}
              <motion.span
                className="font-general text-[10px] uppercase tracking-[0.5em] text-[#C58B52]/60 mb-10 block"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: EASE_EXPO }}
              >
                TATTVA LIBRARY · III
              </motion.span>

              {/* Sanskrit title */}
              <motion.h1
                className="text-white leading-none tracking-[-0.02em] mb-6 select-none"
                style={{
                  fontFamily: 'Cormorant, serif',
                  fontWeight: 300,
                  fontSize: 'clamp(96px, 18vw, 200px)',
                  letterSpacing: '-0.02em',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.5, ease: EASE_EXPO }}
              >
                Sṛṣṭi
              </motion.h1>

              {/* Thin gold rule */}
              <motion.div
                className="w-[1px] bg-[#C58B52]/30 mb-8"
                initial={{ height: 0 }}
                animate={{ height: 56 }}
                transition={{ duration: 1.0, delay: 1.0, ease: EASE_EXPO }}
              />

              {/* English subtitle */}
              <motion.p
                className="font-instrument text-xl md:text-2xl font-light text-white/40 tracking-wide mb-12 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.2, ease: EASE_EXPO }}
              >
                How the Universe Comes Into Existence According to Sanātana Dharma
              </motion.p>

              {/* Explanatory paragraph */}
              <motion.p
                className="font-cormorant text-lg md:text-xl font-light text-white/30 leading-relaxed max-w-2xl italic"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.5, ease: EASE_EXPO }}
              >
                Every civilization has asked how the universe began.
                The sages of Sanātana Dharma asked an even deeper question:
                What existed before the beginning itself?
              </motion.p>

              {/* Scroll invitation */}
              <motion.div
                className="flex flex-col items-center gap-3 mt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 2.2, ease: EASE_EXPO }}
              >
                {/* Animated chevron */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                  className="text-[#C58B52]/40 text-2xl font-light"
                >
                  ↓
                </motion.div>
                <span className="font-general text-[9px] uppercase tracking-[0.45em] text-white/20">
                  Scroll to witness creation
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* ── SCROLL SPACER inside the hero measurement zone ── */}
      <div ref={null} className="relative z-10 h-[30vh]" />

      {/* ══════════════════════════════════════════════
          CREAM CROSSFADE OVERLAY
          Sits above the fixed black void but below the
          content, fading in as user passes the hero.
      ══════════════════════════════════════════════ */}
      <motion.div
        aria-hidden
        className="fixed inset-0 bg-[#E9E2D4] pointer-events-none z-[2]"
        style={{ opacity: creamOpacity }}
      />

      {/* ══════════════════════════════════════════════
          SECTIONS — Rendered in document flow, above the crossfade overlay.
      ══════════════════════════════════════════════ */}
      <div className="relative z-[3]">
        <TheGreatQuestion />
        <TheFirstVoice />
        <TadEkam />
        <TheFirstStirring />
        <Hiranyagarbha />
        <Prakrti />
        <TheThreeGunas />
        <Mahat />
        <FromIntelligenceToMatter />
        <TheManifestUniverse />
        <WhyCreationRepeats />
        <SrstiEpilogue />
      </div>

    </div>
  );
}
