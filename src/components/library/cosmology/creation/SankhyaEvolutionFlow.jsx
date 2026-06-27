import React from 'react';

const ELEMENTS = [
  { step: "1", name: "Prakṛti", meaning: "Unmanifest Material Nature", desc: "The root cause of the material world. It contains the three Guṇas in perfect equilibrium." },
  { step: "2", name: "Mahat", meaning: "Cosmic Intelligence", desc: "The first transformation of Prakṛti when agitated by Time. The universal principle of intellect and existence." },
  { step: "3", name: "Ahaṅkāra", meaning: "False Ego / I-ness", desc: "The principle of individuation. It divides into three modes (Sāttvika, Rājasa, Tāmasa) to create the rest of the elements." },
  { step: "4", name: "Mind & Senses", meaning: "Manas, Jñānendriyas, Karmendriyas", desc: "From Sāttvika Ahaṅkāra comes the Mind (Manas). From Rājasa comes the 5 knowledge-acquiring senses and 5 working senses." },
  { step: "5", name: "Tanmātras", meaning: "The 5 Subtle Elements", desc: "From Tāmasa Ahaṅkāra evolve the subtle objects of sense: Sound, Touch, Form, Taste, and Smell." },
  { step: "6", name: "Pañca Mahābhūtas", meaning: "The 5 Gross Elements", desc: "The Tanmātras condense into the physical building blocks of the universe: Ether (Space), Air, Fire, Water, and Earth." },
];

export function SankhyaEvolutionFlow() {
  return (
    <div className="w-full my-12 border border-[#C58B52]/20 p-8 md:p-12 relative">
      
      <div className="text-center mb-16">
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block">PRIMARY CREATION (SARGA)</span>
        <h3 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-4">The Evolution of Matter</h3>
        <p className="font-cormorant text-xl text-[#0D0D0C]/70 max-w-2xl mx-auto">
          According to Sāṅkhya philosophy and the Purāṇas, the physical universe does not appear instantly. It evolves methodically from subtle intelligence down to gross physical matter across 24 distinct elements.
        </p>
      </div>

      <div className="max-w-2xl mx-auto relative pl-8 md:pl-0">
        
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-[#C58B52]/30 md:-translate-x-1/2" />

        {/* Elements */}
        {ELEMENTS.map((el, index) => (
          <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            
            {/* Center Node */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#C58B52] border-4 border-[#E9E2D4] -translate-x-1/2 shadow-lg z-10" />
            
            {/* Content Box */}
            <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
              <div className="bg-white/60 p-6 border border-[#C58B52]/20 hover:border-[#C58B52] transition-colors duration-300 shadow-sm">
                <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52] mb-2 block">Step {el.step}</span>
                <h4 className="font-instrument text-2xl text-[#0D0D0C] mb-1">{el.name}</h4>
                <span className="font-cormorant text-sm italic text-[#0D0D0C]/60 mb-3 block">{el.meaning}</span>
                <p className="font-cormorant text-[#0D0D0C]/80 leading-relaxed">
                  {el.desc}
                </p>
              </div>
            </div>

          </div>
        ))}
        
      </div>
    </div>
  );
}
