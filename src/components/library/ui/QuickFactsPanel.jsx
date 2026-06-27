import React from 'react';

export function QuickFactsPanel({ data }) {
  return (
    <div className="w-full bg-[#0D0D0C] text-[#E9E2D4] p-8 md:p-12 my-12 border-t-4 border-[#C58B52] shadow-2xl">
      <div className="mb-12 border-b border-[#C58B52]/20 pb-6 flex items-end justify-between">
        <div>
          <span className="font-general text-[10px] uppercase tracking-[0.3em] text-[#C58B52] block mb-2">QUICK FACTS</span>
          <h3 className="font-instrument text-3xl md:text-5xl text-[#E9E2D4] tracking-tight">{data.title}</h3>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        {data.facts.map((fact, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] mb-2">{fact.label}</span>
            <span className="font-cormorant text-xl font-light text-[#E9E2D4]/90">{fact.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
