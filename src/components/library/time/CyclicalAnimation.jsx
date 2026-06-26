import React from 'react';
import { motion } from 'framer-motion';

const PHASES = [
  { name: 'Sṛṣṭi', desc: 'Creation', angle: 0 },
  { name: 'Sthiti', desc: 'Preservation', angle: 90 },
  { name: 'Pralaya', desc: 'Dissolution', angle: 180 },
  { name: 'Śūnyatā', desc: 'Cosmic Silence', angle: 270 }
];

export function CyclicalAnimation() {
  return (
    <div className="relative w-full py-32 flex items-center justify-center overflow-hidden">
      
      {/* Outer rotating wheel */}
      <motion.div 
        className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-[#C58B52]/30 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {PHASES.map((phase, i) => {
          // Position items around the circle
          const radius = '50%';
          return (
            <div 
              key={i}
              className="absolute flex flex-col items-center justify-center text-center"
              style={{
                transform: `rotate(${phase.angle}deg) translate(0, -${radius}) rotate(-${phase.angle}deg)`,
                top: '50%',
                left: '50%',
                marginTop: '-30px',
                marginLeft: '-50px',
                width: '100px'
              }}
            >
              <div className="w-3 h-3 rounded-full bg-[#C58B52] mb-4 shadow-[0_0_15px_rgba(197,139,82,0.5)]" />
              {/* Note: since the parent rotates, this text would rotate too. 
                  To keep text upright, we counter-rotate it in another motion div */}
            </div>
          );
        })}
      </motion.div>

      {/* Static text overlay to prevent text spinning upside down */}
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] pointer-events-none">
        {PHASES.map((phase, i) => {
          // Counter-calculate positions for static text
          const radians = (phase.angle - 90) * (Math.PI / 180);
          const radiusX = window.innerWidth < 768 ? 150 : 250;
          const radiusY = window.innerWidth < 768 ? 150 : 250;
          
          const x = Math.cos(radians) * radiusX;
          const y = Math.sin(radians) * radiusY;

          return (
            <div 
              key={i}
              className="absolute flex flex-col items-center text-center w-[120px]"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <h4 className="font-instrument text-2xl text-[#0D0D0C] bg-[#E9E2D4] px-2">{phase.name}</h4>
              <span className="font-general text-[10px] uppercase tracking-widest text-[#C58B52] bg-[#E9E2D4] px-2 mt-1">
                {phase.desc}
              </span>
            </div>
          );
        })}
      </div>

      {/* Center piece */}
      <div className="absolute flex flex-col items-center">
        <motion.div 
          className="w-16 h-16 rounded-full border-2 border-[#C58B52] flex items-center justify-center bg-[#E9E2D4] z-10"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-8 rounded-full bg-[#C58B52]/20" />
        </motion.div>
        <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#0D0D0C]/50 mt-6 text-center max-w-[200px]">
          The Eternal Loop
        </span>
      </div>

    </div>
  );
}
