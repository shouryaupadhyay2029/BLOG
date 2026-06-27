import React from 'react';

export function TimeComparisonTable({ rows }) {
  return (
    <div className="w-full my-12 overflow-x-auto pb-4">
      <table className="w-full text-left border-collapse min-w-[800px] border border-[#C58B52]/30">
        <thead>
          <tr className="bg-[#1A1A18] text-[#E9E2D4]">
            <th className="py-5 px-6 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]">Loka</th>
            <th className="py-5 px-6 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]">Typical Lifespan</th>
            <th className="py-5 px-6 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]">Time Scale</th>
            <th className="py-5 px-6 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]">Residents</th>
            <th className="py-5 px-6 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]">Spiritual Level</th>
          </tr>
        </thead>
        <tbody className="bg-white/40">
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#0D0D0C]/10 hover:bg-[#C58B52]/5 transition-colors duration-300">
              <td className="py-6 px-6 font-cormorant text-lg font-medium text-[#0D0D0C]">{row.loka}</td>
              <td className="py-6 px-6 font-cormorant text-lg font-light text-[#0D0D0C]/80">{row.lifespan}</td>
              <td className="py-6 px-6 font-cormorant text-lg font-light text-[#0D0D0C]/80">{row.scale}</td>
              <td className="py-6 px-6 font-cormorant text-lg font-light text-[#0D0D0C]/80">{row.residents}</td>
              <td className="py-6 px-6 font-cormorant text-lg font-light text-[#0D0D0C]/80">{row.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
