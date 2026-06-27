import React from 'react';
import { motion } from 'framer-motion';

export function MeruPhysicalModel() {
  return (
    <div className="w-full bg-[#1A1A18] text-[#E9E2D4] p-8 border border-[#C58B52]/20 my-12 relative">
      <h3 className="font-instrument text-3xl mb-8 border-b border-[#C58B52]/20 pb-4">Physical Dimensions</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center items-center h-64 border-2 border-dashed border-[#C58B52]/30 relative">
          {/* Conceptual shape: Inverted cone as described in some texts (wider at top) */}
          <div className="w-48 h-4 bg-[#C58B52]" />
          <div className="w-0 h-0 border-l-[96px] border-l-transparent border-r-[96px] border-r-transparent border-t-[160px] border-t-[#C58B52]/20 relative">
             {/* Center Axis */}
             <div className="absolute left-0 top-[-160px] w-[1px] h-[160px] bg-[#C58B52]/50" />
          </div>
          <div className="w-16 h-4 bg-[#C58B52]" />
          
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-right">
            <span className="block font-cormorant text-xl text-[#C58B52]">100,000 Yojanas</span>
            <span className="block font-general text-[9px] uppercase tracking-[0.2em] text-[#E9E2D4]/50">Total Height</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 justify-center">
          <div>
            <h4 className="font-instrument text-2xl text-[#C58B52]">Shape</h4>
            <p className="font-cormorant text-lg font-light text-[#E9E2D4]/80">
              Described as an inverted cone (wider at the summit, narrow at the base) like the seed-cup of a lotus.
            </p>
          </div>
          <div>
            <h4 className="font-instrument text-2xl text-[#C58B52]">Composition</h4>
            <p className="font-cormorant text-lg font-light text-[#E9E2D4]/80">
              Solid gold. Its four sides are said to possess different colors in some Purāṇas: White (East), Yellow (South), Black (West), and Red (North).
            </p>
          </div>
          <div>
            <h4 className="font-instrument text-2xl text-[#C58B52]">Root</h4>
            <p className="font-cormorant text-lg font-light text-[#E9E2D4]/80">
              16,000 Yojanas penetrate underground into the earth, while 84,000 Yojanas rise above the surface of Ilāvṛta-varṣa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
