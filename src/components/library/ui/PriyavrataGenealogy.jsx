import React from 'react';

export function PriyavrataGenealogy() {
  return (
    <div className="w-full bg-[#1A1A18] text-[#E9E2D4] p-8 md:p-12 border border-[#C58B52]/20 my-12 flex flex-col items-center overflow-x-auto custom-scrollbar">
      
      <div className="text-center mb-12">
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block">ROYAL LINEAGE</span>
        <h3 className="font-instrument text-4xl tracking-tight mb-4">King Priyavrata's Division</h3>
        <p className="font-cormorant text-xl text-[#E9E2D4]/70 max-w-2xl mx-auto">
          According to the Bhāgavata Purāṇa, the seven continents were formed by the wheels of King Priyavrata's chariot as he drove around Mount Meru seven times, attempting to bring light to the night. He appointed seven of his sons to rule these newly formed lands.
        </p>
      </div>

      <div className="min-w-[800px] flex flex-col items-center">
        {/* Root Node */}
        <div className="border border-[#C58B52] p-4 bg-[#C58B52]/10 mb-8 rounded-sm">
          <span className="font-instrument text-2xl">King Priyavrata</span>
        </div>

        {/* Connecting Lines */}
        <div className="w-[700px] h-px bg-[#C58B52]/30 relative mb-8">
          <div className="absolute top-0 left-[350px] w-px h-8 bg-[#C58B52]/30 -translate-y-full" />
          <div className="absolute top-0 left-0 w-px h-8 bg-[#C58B52]/30" />
          <div className="absolute top-0 left-[116px] w-px h-8 bg-[#C58B52]/30" />
          <div className="absolute top-0 left-[233px] w-px h-8 bg-[#C58B52]/30" />
          <div className="absolute top-0 left-[350px] w-px h-8 bg-[#C58B52]/30" />
          <div className="absolute top-0 left-[466px] w-px h-8 bg-[#C58B52]/30" />
          <div className="absolute top-0 left-[583px] w-px h-8 bg-[#C58B52]/30" />
          <div className="absolute top-0 right-0 w-px h-8 bg-[#C58B52]/30" />
        </div>

        {/* Sons Row */}
        <div className="flex w-[700px] justify-between text-center font-cormorant text-lg">
          <div className="w-24">
            <span className="text-[#C58B52] block mb-2">Āgnīdhra</span>
            <span className="text-[14px] text-[#E9E2D4]/50">Jambūdvīpa</span>
          </div>
          <div className="w-24">
            <span className="text-[#C58B52] block mb-2">Idhmajihva</span>
            <span className="text-[14px] text-[#E9E2D4]/50">Plakṣadvīpa</span>
          </div>
          <div className="w-24">
            <span className="text-[#C58B52] block mb-2">Yajñabāhu</span>
            <span className="text-[14px] text-[#E9E2D4]/50">Śālmaladvīpa</span>
          </div>
          <div className="w-24">
            <span className="text-[#C58B52] block mb-2">Hiraṇyaretā</span>
            <span className="text-[14px] text-[#E9E2D4]/50">Kuśadvīpa</span>
          </div>
          <div className="w-24">
            <span className="text-[#C58B52] block mb-2">Ghṛtapṛṣṭha</span>
            <span className="text-[14px] text-[#E9E2D4]/50">Krauñcadvīpa</span>
          </div>
          <div className="w-24">
            <span className="text-[#C58B52] block mb-2">Medhātithi</span>
            <span className="text-[14px] text-[#E9E2D4]/50">Śākadvīpa</span>
          </div>
          <div className="w-24">
            <span className="text-[#C58B52] block mb-2">Vītihotra</span>
            <span className="text-[14px] text-[#E9E2D4]/50">Puṣkaradvīpa</span>
          </div>
        </div>

      </div>
    </div>
  );
}
