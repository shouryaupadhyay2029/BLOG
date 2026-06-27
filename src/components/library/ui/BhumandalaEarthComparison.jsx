import React from 'react';
import { MythVsScriptureCard } from '@/components/library/ui/MythVsScriptureCard';

export function BhumandalaEarthComparison() {
  return (
    <div className="w-full flex flex-col gap-8 my-12">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Modern Globe */}
        <div className="bg-white/40 border border-[#C58B52]/30 p-8 flex flex-col">
          <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-2">MODERN OBSERVATION</span>
          <h4 className="font-instrument text-3xl text-[#0D0D0C] mb-6 border-b border-[#C58B52]/20 pb-4">Planet Earth</h4>
          
          <ul className="flex flex-col gap-4 font-cormorant text-lg text-[#0D0D0C]/80">
            <li className="flex gap-4">
              <span className="text-[#C58B52] font-bold">•</span>
              A spherical globe floating in outer space.
            </li>
            <li className="flex gap-4">
              <span className="text-[#C58B52] font-bold">•</span>
              Diameter of approximately 7,917 miles.
            </li>
            <li className="flex gap-4">
              <span className="text-[#C58B52] font-bold">•</span>
              Contains 7 modern continents (Asia, Africa, etc.) and global oceans.
            </li>
            <li className="flex gap-4">
              <span className="text-[#C58B52] font-bold">•</span>
              Operates on standard physical laws and observable biology.
            </li>
          </ul>
        </div>

        {/* Bhumandala */}
        <div className="bg-[#1A1A18] border border-[#C58B52]/30 p-8 flex flex-col text-[#E9E2D4]">
          <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-2">PURĀṆIC GEOGRAPHY</span>
          <h4 className="font-instrument text-3xl text-[#E9E2D4] mb-6 border-b border-[#C58B52]/20 pb-4">Bhū-maṇḍala</h4>
          
          <ul className="flex flex-col gap-4 font-cormorant text-lg text-[#E9E2D4]/80">
            <li className="flex gap-4">
              <span className="text-[#C58B52] font-bold">•</span>
              An immense, flat-plane stereographic or dimensional map.
            </li>
            <li className="flex gap-4">
              <span className="text-[#C58B52] font-bold">•</span>
              Diameter of 500 million Yojanas (approx. 4 billion miles).
            </li>
            <li className="flex gap-4">
              <span className="text-[#C58B52] font-bold">•</span>
              Contains 7 cosmic islands and oceans of milk, ghee, and wine.
            </li>
            <li className="flex gap-4">
              <span className="text-[#C58B52] font-bold">•</span>
              Operates on multi-dimensional laws of Karma; inhabited by divine beings alongside humans.
            </li>
          </ul>
        </div>

      </div>

      <MythVsScriptureCard 
        myth="Because the Purāṇas describe Bhū-maṇḍala as a flat disc, ancient Hindus thought the planet Earth was flat."
        scripture="Bhū-maṇḍala is NOT the planet Earth; it is the entire horizontal plane of the solar system/universe. Ancient Indian astronomers (like Āryabhaṭa and Bhāskara) explicitly calculated the Earth (Bhū-gola) as a sphere suspended in space. The Purāṇic Bhū-maṇḍala is a cosmic, dimensional map, not a terrestrial globe."
        source="Sūrya Siddhānta (12.32) & Siddhānta Śiromaṇi"
      />

    </div>
  );
}
