import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AnatomyCutaway({ layers }) {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <div className="w-full my-16 bg-[#1A1A18] text-[#E9E2D4] p-8 rounded-sm shadow-xl flex flex-col md:flex-row gap-8">
      {/* Interactive Visualizer */}
      <div className="w-full md:w-1/2 aspect-square relative flex items-center justify-center p-4">
        {layers.map((layer, idx) => {
          const size = 100 - (idx * (100 / layers.length));
          const isActive = idx === activeLayer;
          
          return (
            <motion.div
              key={idx}
              className={`absolute rounded-full border-2 transition-colors duration-500 cursor-pointer flex items-center justify-center ${isActive ? 'bg-[#C58B52]/20 border-[#C58B52]' : 'border-[#E9E2D4]/10 hover:border-[#C58B52]/50'}`}
              style={{ width: `${size}%`, height: `${size}%`, zIndex: layers.length - idx }}
              onClick={() => setActiveLayer(idx)}
              whileHover={{ scale: 1.02 }}
            >
              {idx === layers.length - 1 && (
                <div className="w-2 h-2 bg-[#C58B52] rounded-full shadow-[0_0_10px_#C58B52]" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Description Panel */}
      <div className="w-full md:w-1/2 flex flex-col justify-center border-l border-[#C58B52]/20 pl-8 min-h-[300px]">
        <span className="font-general text-[10px] uppercase tracking-[0.3em] text-[#C58B52] mb-2 block">
          LAYER {activeLayer + 1} OF {layers.length}
        </span>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLayer}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-instrument text-3xl md:text-4xl text-[#E9E2D4] mb-2">{layers[activeLayer].name}</h4>
            <span className="font-cormorant text-lg text-[#C58B52] italic block mb-6">{layers[activeLayer].sanskrit}</span>
            <p className="font-cormorant text-xl font-light text-[#E9E2D4]/70 leading-relaxed">
              {layers[activeLayer].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
