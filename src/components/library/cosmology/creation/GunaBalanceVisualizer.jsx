import React from 'react';
import { motion } from 'framer-motion';

export function GunaBalanceVisualizer() {
  return (
    <div className="w-full bg-[#1A1A18] border border-[#C58B52]/20 p-8 md:p-12 my-12 flex flex-col items-center">
      
      <div className="text-center mb-12">
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block">THE THREE MODES OF NATURE</span>
        <h3 className="font-instrument text-4xl text-[#E9E2D4] tracking-tight mb-4">The Agitation of the Guṇas</h3>
        <p className="font-cormorant text-xl text-[#E9E2D4]/70 max-w-2xl mx-auto">
          Before creation, material nature (Prakṛti) rests in a state of perfect equilibrium. The three Guṇas (qualities) are perfectly balanced. When Time (Kāla) agitates this balance, creation begins.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        
        {/* Sattva */}
        <div className="flex-1 flex flex-col items-center text-center p-6 border border-[#E9E2D4]/20 bg-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <h4 className="font-instrument text-3xl text-[#E9E2D4] mb-2 z-10">Sattva</h4>
          <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52] mb-4 z-10">Goodness / Purity</span>
          <p className="font-cormorant text-[#E9E2D4]/80 z-10">
            Illuminating and free from disease. Binds the soul by attachment to happiness and knowledge. Predominant in the creation of the mind and senses.
          </p>
        </div>

        {/* Rajas */}
        <div className="flex-1 flex flex-col items-center text-center p-6 border border-[#C58B52]/40 bg-[#C58B52]/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#C58B52]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <h4 className="font-instrument text-3xl text-[#E9E2D4] mb-2 z-10">Rajas</h4>
          <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52] mb-4 z-10">Passion / Action</span>
          <p className="font-cormorant text-[#E9E2D4]/80 z-10">
            Born of unlimited desires and longings. Binds the soul to material fruitive actions. The active, kinetic force required to construct the universe.
          </p>
        </div>

        {/* Tamas */}
        <div className="flex-1 flex flex-col items-center text-center p-6 border border-black/40 bg-black/40 relative overflow-hidden group">
          <div className="absolute inset-0 bg-black/60 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <h4 className="font-instrument text-3xl text-[#E9E2D4] mb-2 z-10">Tamas</h4>
          <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52] mb-4 z-10">Ignorance / Inertia</span>
          <p className="font-cormorant text-[#E9E2D4]/80 z-10">
            Born of ignorance, causing delusion, madness, indolence, and sleep. The static, heavy force predominant in the creation of gross physical matter (Mahābhūtas).
          </p>
        </div>

      </div>
    </div>
  );
}
