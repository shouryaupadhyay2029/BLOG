import React from 'react';
import { motion } from 'framer-motion';

export function YugaCycleWheel() {
  return (
    <div className="w-full bg-[#1A1A18] border border-[#C58B52]/20 p-8 md:p-12 my-12 flex flex-col items-center">
      
      <div className="text-center mb-12">
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block">THE MAHĀYUGA</span>
        <h3 className="font-instrument text-4xl text-[#E9E2D4] tracking-tight mb-4">The 4:3:2:1 Degradation</h3>
        <p className="font-cormorant text-xl text-[#E9E2D4]/70 max-w-2xl mx-auto">
          A single Mahāyuga (Great Age) lasts 4.32 million human years. It is divided into four smaller Yugas in a strict 4:3:2:1 ratio, representing the gradual degradation of Dharma, human lifespan, and physical stature.
        </p>
      </div>

      <div className="relative w-full max-w-xl aspect-square rounded-full border border-[#C58B52]/30 flex items-center justify-center p-8">
        
        {/* CSS visualization of the 4:3:2:1 ratio using conic-gradients could go here, but for React we'll build a layered structure or explicit blocks to ensure compatibility and layout stability */}
        <div className="w-full h-full rounded-full relative flex items-center justify-center border border-[#C58B52]/10 overflow-hidden">
          
          {/* Satya Yuga (40%) */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 border-l border-b border-[#1A1A18] bg-[#E9E2D4]/20 flex items-center justify-center p-4 text-center">
            <div>
              <span className="block font-instrument text-2xl text-[#E9E2D4]">Satya Yuga</span>
              <span className="block font-cormorant text-[#E9E2D4]/70 text-sm">4 parts (1,728,000 yrs)</span>
            </div>
          </div>
          
          {/* Treta Yuga (30%) - Approximated visually as quadrants for simplicity in this MVP, but labeled correctly */}
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-l border-t border-[#1A1A18] bg-[#E9E2D4]/15 flex items-center justify-center p-4 text-center">
            <div>
              <span className="block font-instrument text-2xl text-[#E9E2D4]">Tretā Yuga</span>
              <span className="block font-cormorant text-[#E9E2D4]/70 text-sm">3 parts (1,296,000 yrs)</span>
            </div>
          </div>
          
          {/* Dvapara Yuga (20%) */}
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-r border-t border-[#1A1A18] bg-[#E9E2D4]/10 flex items-center justify-center p-4 text-center">
            <div>
              <span className="block font-instrument text-2xl text-[#E9E2D4]">Dvāpara Yuga</span>
              <span className="block font-cormorant text-[#E9E2D4]/70 text-sm">2 parts (864,000 yrs)</span>
            </div>
          </div>
          
          {/* Kali Yuga (10%) */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 border-r border-b border-[#1A1A18] bg-[#E9E2D4]/5 flex items-center justify-center p-4 text-center">
            <div>
              <span className="block font-instrument text-2xl text-[#C58B52]">Kali Yuga</span>
              <span className="block font-cormorant text-[#C58B52]/70 text-sm">1 part (432,000 yrs)</span>
            </div>
          </div>

          {/* Central Hub */}
          <div className="absolute w-32 h-32 bg-[#1A1A18] rounded-full flex flex-col items-center justify-center border border-[#C58B52]/30 shadow-2xl">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52]">Total</span>
            <span className="font-instrument text-xl text-[#E9E2D4]">4.32M</span>
            <span className="font-cormorant text-xs text-[#E9E2D4]/50">Years</span>
          </div>

        </div>

      </div>
    </div>
  );
}
