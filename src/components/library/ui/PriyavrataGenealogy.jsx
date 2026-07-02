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

      {/* DESKTOP GENEALOGY (Unchanged) */}
      <div className="hidden md:flex min-w-[800px] flex-col items-center">
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

      {/* MOBILE GENEALOGY (Reflowed) */}
      <div className="flex md:hidden flex-col items-center w-full relative">
        {/* Root Node */}
        <div className="border border-[#C58B52] p-3 bg-[#C58B52]/10 mb-8 rounded-sm z-10">
          <span className="font-instrument text-xl">King Priyavrata</span>
        </div>

        {/* Mobile Sons Tree */}
        <div className="flex flex-col w-full max-w-[280px] gap-8 relative pb-4">
          {/* Central Trunk */}
          <div className="absolute left-1/2 top-[-32px] bottom-8 w-px bg-[#C58B52]/30 -translate-x-1/2 z-0" />
          
          <div className="flex justify-between w-full relative z-10">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[100px] h-px bg-[#C58B52]/30 -z-10" />
            <div className="w-24 text-center bg-[#1A1A18] py-1">
              <span className="text-[#C58B52] block mb-1 font-cormorant text-lg">Āgnīdhra</span>
              <span className="text-[10px] text-[#E9E2D4]/50 uppercase tracking-[0.1em]">Jambūdvīpa</span>
            </div>
            <div className="w-24 text-center bg-[#1A1A18] py-1">
              <span className="text-[#C58B52] block mb-1 font-cormorant text-lg">Idhmajihva</span>
              <span className="text-[10px] text-[#E9E2D4]/50 uppercase tracking-[0.1em]">Plakṣadvīpa</span>
            </div>
          </div>
          
          <div className="flex justify-between w-full relative z-10">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[100px] h-px bg-[#C58B52]/30 -z-10" />
            <div className="w-24 text-center bg-[#1A1A18] py-1">
              <span className="text-[#C58B52] block mb-1 font-cormorant text-lg">Yajñabāhu</span>
              <span className="text-[10px] text-[#E9E2D4]/50 uppercase tracking-[0.1em]">Śālmaladvīpa</span>
            </div>
            <div className="w-24 text-center bg-[#1A1A18] py-1">
              <span className="text-[#C58B52] block mb-1 font-cormorant text-lg">Hiraṇyaretā</span>
              <span className="text-[10px] text-[#E9E2D4]/50 uppercase tracking-[0.1em]">Kuśadvīpa</span>
            </div>
          </div>
          
          <div className="flex justify-between w-full relative z-10">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[100px] h-px bg-[#C58B52]/30 -z-10" />
            <div className="w-24 text-center bg-[#1A1A18] py-1">
              <span className="text-[#C58B52] block mb-1 font-cormorant text-lg">Ghṛtapṛṣṭha</span>
              <span className="text-[10px] text-[#E9E2D4]/50 uppercase tracking-[0.1em]">Krauñcadvīpa</span>
            </div>
            <div className="w-24 text-center bg-[#1A1A18] py-1">
              <span className="text-[#C58B52] block mb-1 font-cormorant text-lg">Medhātithi</span>
              <span className="text-[10px] text-[#E9E2D4]/50 uppercase tracking-[0.1em]">Śākadvīpa</span>
            </div>
          </div>
          
          <div className="flex justify-center w-full relative z-10">
            <div className="w-24 text-center bg-[#1A1A18] py-1">
              <span className="text-[#C58B52] block mb-1 font-cormorant text-lg">Vītihotra</span>
              <span className="text-[10px] text-[#E9E2D4]/50 uppercase tracking-[0.1em]">Puṣkaradvīpa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
