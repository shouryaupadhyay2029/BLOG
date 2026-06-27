import React from 'react';

export function LokaDataCard({ name, iast, meaning, deities, scriptures }) {
  return (
    <div className="w-full bg-[#1A1A18] border border-[#C58B52]/20 text-[#E9E2D4] p-8 md:p-12 shadow-lg relative overflow-hidden mb-12">
      <div className="absolute top-0 right-0 p-8 opacity-10 font-instrument text-9xl">
        {name[0]}
      </div>
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex-1">
          <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block">LOKA DIRECTORY</span>
          <h2 className="font-instrument text-5xl md:text-6xl text-[#E9E2D4] tracking-tight mb-2">{name}</h2>
          <p className="font-cormorant text-2xl text-[#C58B52] italic mb-2">{iast}</p>
          <p className="font-cormorant text-lg font-light text-[#E9E2D4]/70 tracking-wide">"{meaning}"</p>
        </div>
        
        <div className="flex-1 flex flex-col gap-6 border-t md:border-t-0 md:border-l border-[#C58B52]/20 pt-6 md:pt-0 md:pl-8 justify-center">
          <div>
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]/70 mb-1 block">PRESIDING DEITIES</span>
            <span className="font-cormorant text-xl text-[#E9E2D4]/90">{deities}</span>
          </div>
          <div>
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]/70 mb-1 block">PRIMARY SCRIPTURES</span>
            <span className="font-cormorant text-xl text-[#E9E2D4]/90">{scriptures}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
