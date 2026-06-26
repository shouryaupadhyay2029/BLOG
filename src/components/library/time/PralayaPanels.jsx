import React from 'react';
import { motion } from 'framer-motion';

const PRALAYAS = [
  {
    name: 'Nitya Pralaya',
    subtitle: 'The Daily Rest',
    desc: 'The constant, unseen dissolution happening every moment. It is the end of a single day, the shedding of dead cells, and the peaceful descent into deep, dreamless sleep every night where the ego dissolves temporarily.'
  },
  {
    name: 'Naimittika Pralaya',
    subtitle: 'The Night of Brahmā',
    desc: 'Occurs at the end of a Kalpa. The lower planetary systems are submerged in cosmic waters while the Creator sleeps. The souls resting here are not destroyed; they are held in suspended animation, waiting for the morning.'
  },
  {
    name: 'Mahā Pralaya',
    subtitle: 'The Great Dissolution',
    desc: 'Occurs at the end of Brahmā’s 100-year lifespan. The entire universe, including the Creator himself, dissolves back into unmanifested nature (Prakṛti). Everything rests in absolute equilibrium for a period equal to Brahmā’s life.'
  },
  {
    name: 'Ātyantika Pralaya',
    subtitle: 'The Final Liberation',
    desc: 'This is not a cosmic event, but a deeply personal one. It is Mokṣa. When a soul attains ultimate realization, its personal universe of ignorance dissolves forever. The soul merges with the eternal, never to be bound by the cycles of time again.'
  }
];

export function PralayaPanels() {
  return (
    <div className="w-full max-w-5xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
      {PRALAYAS.map((pralaya, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#E9E2D4] border border-[#0D0D0C]/10 p-10 hover:border-[#C58B52]/40 transition-colors duration-500 flex flex-col"
        >
          <div className="w-8 h-8 rounded-full bg-[#0D0D0C]/5 flex items-center justify-center mb-8">
            <div className="w-2 h-2 rounded-full bg-[#C58B52]" />
          </div>
          
          <h3 className="font-instrument text-3xl md:text-4xl text-[#0D0D0C] mb-2">
            {pralaya.name}
          </h3>
          <span className="font-general text-[10px] uppercase tracking-widest text-[#0D0D0C]/50 mb-6">
            {pralaya.subtitle}
          </span>
          
          <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed mt-auto">
            {pralaya.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
