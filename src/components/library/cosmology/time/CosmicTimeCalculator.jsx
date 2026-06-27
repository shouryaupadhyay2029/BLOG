import React, { useState } from 'react';

const MULTIPLIERS = {
  devaYears: 1 / 360,
  yugas: 1 / 4320000,
  kalpas: 1 / 4320000000
};

export function CosmicTimeCalculator() {
  const [humanYears, setHumanYears] = useState(4320000);

  const handleSliderChange = (e) => {
    setHumanYears(Number(e.target.value));
  };

  const formatNumber = (num) => {
    if (num < 0.0001) return num.toExponential(2);
    if (num % 1 !== 0) return num.toFixed(4);
    return num.toLocaleString();
  };

  return (
    <div className="w-full border border-[#C58B52]/30 bg-white/40 p-8 my-12 flex flex-col items-center">
      
      <div className="text-center mb-8">
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block">INTERACTIVE CALCULATOR</span>
        <h4 className="font-instrument text-3xl text-[#0D0D0C] mb-4">Purāṇic Time Conversion</h4>
        <p className="font-cormorant text-lg text-[#0D0D0C]/70 max-w-xl mx-auto">
          The foundation of Purāṇic time scaling is that 1 year for a human equals exactly 1 day for the Devas (gods). Therefore, a 360-day Deva year is equal to 360 human years.
        </p>
      </div>

      <div className="w-full max-w-2xl flex flex-col gap-8">
        
        {/* Input */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end border-b border-[#0D0D0C]/20 pb-2">
            <span className="font-general text-[12px] uppercase tracking-[0.2em] text-[#0D0D0C]/50">Input: Human Years</span>
            <span className="font-instrument text-3xl text-[#0D0D0C]">{humanYears.toLocaleString()}</span>
          </div>
          <input 
            type="range" 
            min="360" 
            max="4320000000" 
            step="360"
            value={humanYears}
            onChange={handleSliderChange}
            className="w-full accent-[#C58B52]"
          />
          <div className="flex justify-between text-xs font-cormorant text-[#0D0D0C]/50">
            <span>360 (1 Deva Year)</span>
            <span>4.32B (1 Kalpa)</span>
          </div>
        </div>

        {/* Outputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="bg-[#1A1A18] p-6 border border-[#C58B52]/20 flex flex-col items-center justify-center text-center">
            <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52] mb-2">Deva Years</span>
            <span className="font-instrument text-2xl text-[#E9E2D4]">{formatNumber(humanYears * MULTIPLIERS.devaYears)}</span>
          </div>
          
          <div className="bg-[#1A1A18] p-6 border border-[#C58B52]/20 flex flex-col items-center justify-center text-center">
            <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52] mb-2">Mahāyugas</span>
            <span className="font-instrument text-2xl text-[#E9E2D4]">{formatNumber(humanYears * MULTIPLIERS.yugas)}</span>
          </div>
          
          <div className="bg-[#1A1A18] p-6 border border-[#C58B52]/20 flex flex-col items-center justify-center text-center">
            <span className="font-general text-[10px] uppercase tracking-[0.2em] text-[#C58B52] mb-2">Kalpas (Day of Brahmā)</span>
            <span className="font-instrument text-2xl text-[#E9E2D4]">{formatNumber(humanYears * MULTIPLIERS.kalpas)}</span>
          </div>

        </div>
      </div>
    </div>
  );
}
