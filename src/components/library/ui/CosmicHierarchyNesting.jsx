import React from 'react';
import { motion } from 'framer-motion';

export function CosmicHierarchyNesting() {
  return (
    <div className="w-full bg-[#1A1A18] p-8 md:p-12 border border-[#C58B52]/20 my-12 overflow-hidden flex flex-col items-center">
      
      <div className="text-center mb-12">
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block">SPATIAL NESTING</span>
        <h3 className="font-instrument text-4xl text-[#E9E2D4] tracking-tight mb-4">Where is the Earth?</h3>
        <p className="font-cormorant text-xl text-[#E9E2D4]/70 max-w-2xl mx-auto">
          To locate human civilization in Hindu cosmology, one must zoom in through multiple concentric layers of reality, from the entire universe down to our specific region.
        </p>
      </div>

      <div className="relative w-full max-w-3xl flex flex-col items-center gap-4">
        
        {/* Layer 1: Brahmāṇḍa */}
        <div className="w-full p-2 sm:p-3 md:p-6 border border-[#C58B52]/20 bg-[#E9E2D4]/5 rounded-sm flex flex-col items-center text-center">
          <span className="font-instrument text-xl md:text-2xl text-[#E9E2D4] mb-1 md:mb-2">1. Brahmāṇḍa</span>
          <span className="font-general text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#C58B52] mb-2 md:mb-4">The Entire Cosmic Egg</span>
          
          {/* Layer 2: Bhūloka */}
          <div className="w-[97%] md:w-11/12 p-2 sm:p-3 md:p-6 border border-[#C58B52]/30 bg-[#E9E2D4]/10 rounded-sm flex flex-col items-center text-center">
            <span className="font-instrument text-xl md:text-2xl text-[#E9E2D4] mb-1 md:mb-2">2. Bhūloka</span>
            <span className="font-general text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#C58B52] mb-2 md:mb-4">The Middle Dimensional Plane (vs Heavens/Underworld)</span>
            
            {/* Layer 3: Bhū-maṇḍala */}
            <div className="w-[97%] md:w-11/12 p-2 sm:p-3 md:p-6 border border-[#C58B52]/40 bg-[#E9E2D4]/10 rounded-sm flex flex-col items-center text-center">
              <span className="font-instrument text-xl md:text-2xl text-[#E9E2D4] mb-1 md:mb-2">3. Bhū-maṇḍala</span>
              <span className="font-general text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#C58B52] mb-2 md:mb-4">The Great Earthly Disc (4 Billion Miles Wide)</span>
              
              {/* Layer 4: Sapta Dvīpa */}
              <div className="w-[97%] md:w-11/12 p-2 sm:p-3 md:p-6 border border-[#C58B52]/50 bg-[#E9E2D4]/10 rounded-sm flex flex-col items-center text-center">
                <span className="font-instrument text-xl md:text-2xl text-[#E9E2D4] mb-1 md:mb-2">4. Sapta Dvīpas</span>
                <span className="font-general text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#C58B52] mb-2 md:mb-4">The Seven Concentric Island-Continents</span>
                
                {/* Layer 5: Jambudvipa */}
                <div className="w-[97%] md:w-11/12 p-2 sm:p-3 md:p-6 border border-[#C58B52]/60 bg-[#E9E2D4]/10 rounded-sm flex flex-col items-center text-center">
                  <span className="font-instrument text-xl md:text-2xl text-[#E9E2D4] mb-1 md:mb-2">5. Jambūdvīpa</span>
                  <span className="font-general text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#C58B52] mb-2 md:mb-4">The Central Island (containing Mount Meru)</span>
                  
                  {/* Layer 6: Bharata-varsa */}
                  <div className="w-[97%] md:w-11/12 p-3 sm:p-4 md:p-6 border border-[#C58B52]/80 bg-[#C58B52]/20 rounded-sm flex flex-col items-center text-center">
                    <span className="font-instrument text-xl md:text-2xl text-[#E9E2D4] mb-1 md:mb-2 font-bold">6. Bhārata-varṣa</span>
                    <span className="font-general text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#E9E2D4] mb-2">The Southernmost Region of Jambūdvīpa</span>
                    <p className="font-cormorant text-[13px] md:text-sm text-[#E9E2D4]/90 text-center max-w-sm italic mt-1 md:mt-2">
                      Modern scholars and traditional astronomers map our observable Planet Earth (and the strict realm of human Karma) entirely within this specific sub-region.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
