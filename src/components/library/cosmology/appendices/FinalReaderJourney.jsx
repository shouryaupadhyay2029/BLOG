import React from 'react';

export function FinalReaderJourney() {
  return (
    <div className="w-full bg-[#C58B52]/5 border-t border-b border-[#C58B52]/20 py-20 px-6 my-24 text-center">
      <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 block">THE JOURNEY CONTINUES</span>
      <h2 className="font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-8">
        Beyond the Architecture
      </h2>
      <p className="font-cormorant text-2xl font-light leading-relaxed text-[#0D0D0C]/80 max-w-3xl mx-auto mb-12">
        You have now explored the structural framework of the universe according to Sanātana Dharma. But a house is not a home without its inhabitants. The universe is teeming with life, consciousness, administrative deities, and the intricate laws of Karma.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        
        <div className="border border-[#C58B52]/30 p-6 bg-white/40 hover:bg-[#C58B52]/10 transition-colors cursor-pointer flex flex-col items-center">
          <span className="font-instrument text-xl text-[#0D0D0C] mb-2">The Tridev</span>
          <span className="font-general text-[9px] uppercase tracking-[0.1em] text-[#0D0D0C]/50">Next Volume</span>
        </div>
        
        <div className="border border-[#C58B52]/30 p-6 bg-white/40 hover:bg-[#C58B52]/10 transition-colors cursor-pointer flex flex-col items-center">
          <span className="font-instrument text-xl text-[#0D0D0C] mb-2">Law of Karma</span>
          <span className="font-general text-[9px] uppercase tracking-[0.1em] text-[#0D0D0C]/50">Future Volume</span>
        </div>
        
        <div className="border border-[#C58B52]/30 p-6 bg-white/40 hover:bg-[#C58B52]/10 transition-colors cursor-pointer flex flex-col items-center">
          <span className="font-instrument text-xl text-[#0D0D0C] mb-2">The Jīva</span>
          <span className="font-general text-[9px] uppercase tracking-[0.1em] text-[#0D0D0C]/50">Future Volume</span>
        </div>

        <div className="border border-[#C58B52]/30 p-6 bg-white/40 hover:bg-[#C58B52]/10 transition-colors cursor-pointer flex flex-col items-center">
          <span className="font-instrument text-xl text-[#0D0D0C] mb-2">Mokṣa</span>
          <span className="font-general text-[9px] uppercase tracking-[0.1em] text-[#0D0D0C]/50">Final Destination</span>
        </div>

      </div>
    </div>
  );
}
