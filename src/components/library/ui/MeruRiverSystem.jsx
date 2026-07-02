import React from 'react';

export function MeruRiverSystem() {
  return (
    <div className="w-full bg-[#1A1A18] p-8 md:p-12 border border-[#C58B52]/20 my-12 relative overflow-hidden flex flex-col items-center">
      
      <div className="text-center mb-12 relative z-10">
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block">HYDROLOGICAL DESCENT</span>
        <h3 className="font-instrument text-4xl text-[#E9E2D4] tracking-tight mb-4">The Four Rivers of Meru</h3>
        <p className="font-cormorant text-xl text-[#E9E2D4]/70 max-w-2xl mx-auto">
          The cosmic Gaṅgā descends from the spiritual sky onto the summit of Mount Meru (Brahmapurī), where it divides into four mighty streams flowing in the cardinal directions.
        </p>
      </div>

      <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center mb-8">
        
        {/* Center Meru */}
        <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#C58B52] to-[#8C5D30] rounded-full z-20 shadow-[0_0_30px_rgba(197,139,82,0.4)] md:shadow-[0_0_50px_rgba(197,139,82,0.4)] flex items-center justify-center border-4 border-[#1A1A18]">
          <span className="font-instrument text-lg md:text-2xl text-[#1A1A18] font-bold">MERU</span>
        </div>

        {/* Central Drop */}
        <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-blue-300 rounded-full z-30 animate-ping" />

        {/* North River (Bhadra) */}
        <div className="absolute top-[10%] bottom-[50%] left-[50%] w-1 bg-gradient-to-t from-blue-400/80 to-transparent -translate-x-1/2 z-10" />
        <div className="absolute top-[2%] md:top-[5%] left-[50%] -translate-x-1/2 text-center w-32">
          <span className="font-cormorant text-base md:text-xl text-blue-300 block">Bhadra</span>
          <span className="font-general text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-[#E9E2D4]/50">North (Uttara Kuru)</span>
        </div>

        {/* South River (Alakananda) */}
        <div className="absolute top-[50%] bottom-[10%] left-[50%] w-1 bg-gradient-to-b from-blue-400/80 to-transparent -translate-x-1/2 z-10" />
        <div className="absolute bottom-[2%] md:bottom-[5%] left-[50%] -translate-x-1/2 text-center w-32">
          <span className="font-cormorant text-base md:text-xl text-blue-300 block">Alakanandā</span>
          <span className="font-general text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-[#E9E2D4]/50">South (Bhārata)</span>
        </div>

        {/* East River (Sita) */}
        <div className="absolute left-[50%] right-[10%] top-[50%] h-1 bg-gradient-to-r from-blue-400/80 to-transparent -translate-y-1/2 z-10" />
        <div className="absolute right-0 md:right-[5%] top-[50%] -translate-y-1/2 text-left w-24 md:w-32 pl-2 md:pl-4">
          <span className="font-cormorant text-base md:text-xl text-blue-300 block">Sītā</span>
          <span className="font-general text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-[#E9E2D4]/50">East (Bhadrāśva)</span>
        </div>

        {/* West River (Caksu) */}
        <div className="absolute right-[50%] left-[10%] top-[50%] h-1 bg-gradient-to-l from-blue-400/80 to-transparent -translate-y-1/2 z-10" />
        <div className="absolute left-0 md:left-[5%] top-[50%] -translate-y-1/2 text-right w-24 md:w-32 pr-2 md:pr-4">
          <span className="font-cormorant text-base md:text-xl text-blue-300 block">Cakṣu</span>
          <span className="font-general text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-[#E9E2D4]/50">West (Ketumāla)</span>
        </div>

      </div>

    </div>
  );
}
