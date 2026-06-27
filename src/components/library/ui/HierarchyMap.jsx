import React from 'react';
import { motion } from 'framer-motion';

export function HierarchyMap({ activeLoka, onSelectLoka }) {
  const LOKAS = [
    { id: 'satyaloka', name: 'Satyaloka', type: 'upper' },
    { id: 'tapoloka', name: 'Tapoloka', type: 'upper' },
    { id: 'janaloka', name: 'Janaloka', type: 'upper' },
    { id: 'maharloka', name: 'Maharloka', type: 'upper' },
    { id: 'svarloka', name: 'Svarloka', type: 'upper' },
    { id: 'bhuvarloka', name: 'Bhuvarloka', type: 'upper' },
    { id: 'bhuloka', name: 'Bhūloka', type: 'middle' },
    { id: 'atala', name: 'Atala', type: 'lower' },
    { id: 'vitala', name: 'Vitala', type: 'lower' },
    { id: 'sutala', name: 'Sutala', type: 'lower' },
    { id: 'talatala', name: 'Talātala', type: 'lower' },
    { id: 'mahatala', name: 'Mahātala', type: 'lower' },
    { id: 'rasatala', name: 'Rasātala', type: 'lower' },
    { id: 'patala', name: 'Pātāla', type: 'lower' },
  ];

  return (
    <div className="w-full h-full bg-[#1A1A18] text-[#E9E2D4] p-6 sticky top-8 rounded-sm shadow-xl flex flex-col max-h-[90vh] overflow-y-auto custom-scrollbar">
      <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 text-center block">
        COSMIC HIERARCHY
      </span>
      
      <div className="relative flex flex-col gap-1 items-center">
        {/* Central Axis Line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#C58B52]/20" />
        
        {LOKAS.map((loka, idx) => {
          const isActive = activeLoka === loka.id;
          
          let colorClass = "text-[#E9E2D4]/70 border-[#E9E2D4]/10 hover:border-[#C58B52]/50 hover:text-[#E9E2D4]";
          if (isActive) {
            colorClass = "text-[#0D0D0C] bg-[#C58B52] border-[#C58B52] font-medium";
          }

          return (
            <div key={loka.id} className="relative z-10 w-full flex justify-center py-1">
              <button
                onClick={() => onSelectLoka(loka.id)}
                className={`w-3/4 py-2 px-4 rounded-full border transition-all duration-300 font-cormorant text-lg text-center backdrop-blur-sm ${colorClass}`}
              >
                {loka.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
