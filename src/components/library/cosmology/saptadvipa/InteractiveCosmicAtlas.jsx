import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JambudvipaDetail } from '@/components/library/cosmology/saptadvipa/continents/JambudvipaDetail';
import { MilkOceanDetail } from '@/components/library/cosmology/saptadvipa/oceans/MilkOceanDetail';

export function InteractiveCosmicAtlas() {
  const [activeEntity, setActiveEntity] = useState('jambudvipa');

  const renderActiveDetail = () => {
    switch (activeEntity) {
      case 'jambudvipa':
        return <JambudvipaDetail />;
      case 'milk_ocean':
        return <MilkOceanDetail />;
      default:
        return (
          <div className="w-full p-8 border border-[#C58B52]/20 bg-[#1A1A18] text-[#E9E2D4] text-center">
            <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52]">SECTION PENDING</span>
            <p className="font-cormorant text-lg mt-4">
              This detailed section is currently being compiled in Phase 2.
            </p>
          </div>
        );
    }
  };

  return (
    <>
      {/* DESKTOP LAYOUT (Unchanged) */}
      <div className="hidden md:flex w-full flex-col xl:flex-row gap-12 my-12 border-t border-[#C58B52]/20 pt-12">
        
        {/* LEFT PANE: The Map */}
        <div className="w-full xl:w-1/3 flex flex-col gap-6 sticky top-32 h-fit">
          <div className="text-left">
            <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-2 block">INTERACTIVE MAP</span>
            <h4 className="font-instrument text-2xl text-[#0D0D0C]">The Cosmic Plane</h4>
            <p className="font-cormorant text-sm text-[#0D0D0C]/60 mt-2">
              Click on any continent or ocean to explore its Purāṇic geography.
            </p>
          </div>

          {/* Dummy Visual Map for Phase 1 - In reality this would be an SVG or complex CSS */}
          <div className="w-full aspect-square bg-[#1A1A18] rounded-full border border-[#C58B52]/30 flex items-center justify-center relative overflow-hidden group cursor-pointer p-4">
            
            <div className="text-[#E9E2D4] text-center z-10 flex flex-col gap-2">
              <button 
                onClick={() => setActiveEntity('milk_ocean')}
                className={`px-4 py-2 text-sm border transition-colors ${activeEntity === 'milk_ocean' ? 'border-[#C58B52] text-[#C58B52] bg-[#C58B52]/10' : 'border-[#C58B52]/30 hover:border-[#C58B52]'}`}
              >
                Ocean of Milk
              </button>
              <button 
                onClick={() => setActiveEntity('jambudvipa')}
                className={`px-4 py-2 text-sm border transition-colors ${activeEntity === 'jambudvipa' ? 'border-[#C58B52] text-[#C58B52] bg-[#C58B52]/10' : 'border-[#C58B52]/30 hover:border-[#C58B52]'}`}
              >
                Jambūdvīpa
              </button>
              <button 
                onClick={() => setActiveEntity('plaksa')}
                className={`px-4 py-2 text-sm border transition-colors ${activeEntity === 'plaksa' ? 'border-[#C58B52] text-[#C58B52] bg-[#C58B52]/10' : 'border-[#C58B52]/30 hover:border-[#C58B52]'}`}
              >
                Plakṣadvīpa (Pending)
              </button>
            </div>
            
            {/* Decorative Rings */}
            <div className="absolute inset-0 border-[40px] border-[#C58B52]/5 rounded-full pointer-events-none" />
            <div className="absolute inset-[40px] border-[30px] border-[#C58B52]/10 rounded-full pointer-events-none" />
            <div className="absolute inset-[70px] border-[20px] border-[#C58B52]/20 rounded-full pointer-events-none" />
            
          </div>
        </div>

        {/* RIGHT PANE: The Content */}
        <div className="w-full xl:w-2/3 min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEntity}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {renderActiveDetail()}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* MOBILE LAYOUT (Reflowed) */}
      <div className="flex md:hidden w-full flex-col gap-10 my-12 border-t border-[#C58B52]/20 pt-12 relative z-0">
        
        {/* Heading & Intro */}
        <div className="text-center">
          <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-3 block">INTERACTIVE MAP</span>
          <h4 className="font-instrument text-3xl text-[#0D0D0C]">The Cosmic Plane</h4>
          <p className="font-cormorant text-base text-[#0D0D0C]/70 mt-3 max-w-sm mx-auto">
            Click on any continent or ocean to explore its Purāṇic geography.
          </p>
        </div>

        {/* Centered Map (75% width) */}
        <div className="w-[75%] mx-auto aspect-square bg-[#1A1A18] rounded-full border border-[#C58B52]/30 flex items-center justify-center relative overflow-hidden p-4 my-2">
          
          <div className="text-[#E9E2D4] text-center z-10 flex flex-col gap-3 w-full max-w-[140px]">
            <button 
              onClick={() => setActiveEntity('milk_ocean')}
              className={`w-full px-3 py-2 text-[11px] border transition-colors ${activeEntity === 'milk_ocean' ? 'border-[#C58B52] text-[#C58B52] bg-[#C58B52]/10' : 'border-[#C58B52]/30 active:border-[#C58B52]'}`}
            >
              Ocean of Milk
            </button>
            <button 
              onClick={() => setActiveEntity('jambudvipa')}
              className={`w-full px-3 py-2 text-[11px] border transition-colors ${activeEntity === 'jambudvipa' ? 'border-[#C58B52] text-[#C58B52] bg-[#C58B52]/10' : 'border-[#C58B52]/30 active:border-[#C58B52]'}`}
            >
              Jambūdvīpa
            </button>
            <button 
              onClick={() => setActiveEntity('plaksa')}
              className={`w-full px-3 py-2 text-[11px] border transition-colors ${activeEntity === 'plaksa' ? 'border-[#C58B52] text-[#C58B52] bg-[#C58B52]/10' : 'border-[#C58B52]/30 active:border-[#C58B52]'}`}
            >
              Plakṣadvīpa
            </button>
          </div>
          
          {/* Decorative Rings - Scaled down for mobile */}
          <div className="absolute inset-0 border-[20px] sm:border-[24px] border-[#C58B52]/5 rounded-full pointer-events-none" />
          <div className="absolute inset-[20px] sm:inset-[24px] border-[16px] sm:border-[18px] border-[#C58B52]/10 rounded-full pointer-events-none" />
          <div className="absolute inset-[36px] sm:inset-[42px] border-[12px] sm:border-[12px] border-[#C58B52]/20 rounded-full pointer-events-none" />
          
        </div>

        {/* Dynamic Content Panel (Now below the map) */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEntity}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderActiveDetail()}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </>
  );
}
