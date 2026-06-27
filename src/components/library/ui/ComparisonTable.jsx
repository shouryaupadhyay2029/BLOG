import React from 'react';

export function ComparisonTable({ headers, rows }) {
  return (
    <div className="w-full my-12 overflow-x-auto pb-4">
      <table className="w-full text-left border-collapse min-w-[800px]">
        <thead>
          <tr className="border-b-2 border-[#C58B52]">
            {headers.map((header, i) => (
              <th key={i} className="py-4 px-6 font-general text-[9px] uppercase tracking-[0.2em] text-[#C58B52] whitespace-nowrap bg-[#0D0D0C]/5">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#0D0D0C]/10 hover:bg-[#C58B52]/5 transition-colors duration-300">
              {row.map((cell, j) => (
                <td key={j} className={`py-6 px-6 font-cormorant text-lg text-[#0D0D0C]/80 ${j === 0 ? 'font-medium text-[#0D0D0C]' : 'font-light'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
