import React from 'react';

export function DvipaComparisonTable({ rows }) {
  return (
    <div className="w-full my-12 overflow-x-auto pb-4">
      <table className="w-full text-left border-collapse min-w-[800px] border border-[#C58B52]/30">
        <thead>
          <tr className="bg-[#1A1A18] text-[#E9E2D4]">
            <th className="py-5 px-6 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]">Dvīpa (Continent)</th>
            <th className="py-5 px-6 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]">Width (Yojanas)</th>
            <th className="py-5 px-6 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]">Surrounding Ocean</th>
            <th className="py-5 px-6 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]">Ruler (Son of Priyavrata)</th>
            <th className="py-5 px-6 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52]">Sacred Tree</th>
          </tr>
        </thead>
        <tbody className="bg-white/40">
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#0D0D0C]/10 hover:bg-[#C58B52]/5 transition-colors duration-300">
              <td className="py-6 px-6 font-cormorant text-lg font-medium text-[#0D0D0C]">{row.dvipa}</td>
              <td className="py-6 px-6 font-cormorant text-lg font-light text-[#0D0D0C]/80">{row.width}</td>
              <td className="py-6 px-6 font-cormorant text-lg font-light text-[#0D0D0C]/80">{row.ocean}</td>
              <td className="py-6 px-6 font-cormorant text-lg font-light text-[#0D0D0C]/80">{row.ruler}</td>
              <td className="py-6 px-6 font-cormorant text-lg font-light text-[#0D0D0C]/80">{row.tree}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
