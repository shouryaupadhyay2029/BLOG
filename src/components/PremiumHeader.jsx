import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function PremiumHeader({ theme = 'light', activeLink = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const isDark = theme === 'dark';
  const menuItems = [
    { label: 'Inquiry Archive', path: '/inquiry', id: 'inquiry' },
    { label: 'Tattva Library', path: '/library', id: 'library' },
    { label: 'Satya & Mithyā', path: '/satya-mithya', id: 'satya-mithya' },
    { label: 'The Origin', path: '/the-origin', id: 'the-origin' },
  ];

  const EASE_EXPO = [0.16, 1, 0.3, 1];

  // ── Mobile overlay portal ──────────────────────────────────────────────────
  // Rendered into document.body to escape any CSS transform / filter stacking
  // context created by RouteTransitionWrapper or any animated ancestor.
  const overlay = typeof document !== 'undefined'
    ? createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                backgroundColor: '#0D0D0C',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '4rem 1.5rem',
                overflowY: 'auto',
              }}
            >
              {/* Radial ambient glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background: 'radial-gradient(circle at 50% 50%, rgba(197,139,82,0.05) 0%, transparent 70%)',
                }}
              />

              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  width: '2rem',
                  height: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  zIndex: 10,
                }}
              >
                <span style={{ display: 'block', width: '1.5rem', height: '1.5px', backgroundColor: '#E9E2D4', transform: 'rotate(45deg) translateY(0px)' }} />
                <span style={{ display: 'block', width: '1.5rem', height: '1.5px', backgroundColor: '#E9E2D4', transform: 'rotate(-45deg) translateY(-1.5px)' }} />
              </button>

              {/* Editorial content */}
              <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                {/* TATTVA wordmark inside overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  style={{ marginBottom: '0.5rem' }}
                >
                  <span style={{ fontFamily: 'Cormorant, serif', fontSize: '11px', letterSpacing: '0.5em', textTransform: 'uppercase', fontWeight: 300, color: '#C58B52' }}>
                    TATTVA
                  </span>
                </motion.div>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.25 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: EASE_EXPO }}
                  style={{ width: '3rem', height: '1px', backgroundColor: '#C58B52' }}
                />

                {/* Navigation links */}
                <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', width: '100%' }}>
                  {menuItems.map((item, index) => {
                    const isActive = activeLink === item.id;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + index * 0.08, duration: 0.6, ease: EASE_EXPO }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
                        >
                          <span style={{ display: 'block', fontFamily: '"General Sans", sans-serif', fontSize: '8px', letterSpacing: '0.3em', color: '#C58B52', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                            0{index + 1}
                          </span>
                          <span style={{
                            display: 'block',
                            fontFamily: 'Cormorant, serif',
                            fontSize: '1.75rem',
                            fontWeight: 300,
                            letterSpacing: '0.02em',
                            color: isActive ? '#C58B52' : '#E9E2D4',
                            lineHeight: 1.2,
                          }}>
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Bottom divider */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 0.25 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: EASE_EXPO }}
                  style={{ width: '3rem', height: '1px', backgroundColor: '#C58B52' }}
                />

                {/* Scripture note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  transition={{ duration: 0.8, delay: 0.55 }}
                  style={{ fontFamily: 'Cormorant, serif', fontSize: '10px', fontStyle: 'italic', color: '#E9E2D4', textAlign: 'center', lineHeight: 1.7, maxWidth: '220px' }}
                >
                  "Tattva is the enquiry into the nature of reality."
                </motion.p>

              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )
    : null;

  return (
    <>
      {/* ── Shared header bar (desktop nav + mobile hamburger) ────────────── */}
      <header
        className="fixed top-0 left-0 w-screen z-[200] px-6 py-5 md:py-9 flex items-center select-none pointer-events-auto"
      >

        {/* LOGO */}
        <Link to="/" className="relative z-[110] flex-shrink-0">
          <div style={{ width: '130px', height: '40px', display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: 'Cormorant, serif',
                fontSize: '13px',
                letterSpacing: '0.45em',
                textTransform: 'uppercase',
                fontWeight: 300,
                color: isDark ? '#E9E2D4' : '#0D0D0C',
              }}
            >
              TATTVA
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION — left-aligned directly after the logo */}
        <nav className="hidden lg:flex items-center gap-12 xl:gap-16 ml-10 xl:ml-14">
          {menuItems.map((item) => {
            const isActive = activeLink === item.id;
            return (
              <Link key={item.id} to={item.path} className="group relative py-1">
                <span
                  className={`tattva-nav-link transition-colors duration-500 ${
                    isActive
                      ? 'text-[#C58B52]'
                      : isDark
                        ? 'text-[#E9E2D4]/50 group-hover:text-[#C58B52]'
                        : 'text-[#0D0D0C]/50 group-hover:text-[#C58B52]'
                  }`}
                >
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C58B52] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            );
          })}
        </nav>

        {/* MOBILE HAMBURGER — ml-auto pushes it to the far right on mobile only */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden ml-auto relative z-[110] flex flex-col items-center justify-center w-8 h-8 focus:outline-none"
          aria-label="Open navigation menu"
        >
          <span
            className={`block w-6 h-[1.5px] -translate-y-1 transition-colors duration-300 ${isDark ? 'bg-[#E9E2D4]' : 'bg-[#0D0D0C]'}`}
          />
          <span
            className={`block w-6 h-[1.5px] mt-1 translate-y-0 transition-colors duration-300 ${isDark ? 'bg-[#E9E2D4]' : 'bg-[#0D0D0C]'}`}
          />
        </button>
      </header>

      {/* Portal-rendered overlay lives here in the React tree for state, but
          mounts into document.body in the DOM to escape stacking contexts */}
      {overlay}
    </>
  );
}
