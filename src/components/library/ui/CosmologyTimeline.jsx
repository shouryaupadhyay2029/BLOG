import React from 'react';
import { motion } from 'framer-motion';

const EASE_EXPO = [0.16, 1, 0.3, 1];

export function CosmologyTimeline({ events }) {
  return (
    <div className="w-full max-w-4xl mx-auto my-16 relative py-12">
      {/* Central Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#C58B52]/30 -translate-x-1/2" />
      
      <div className="flex flex-col gap-24 relative z-10">
        {events.map((event, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: EASE_EXPO }}
              className={`flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 flex flex-col ${isLeft ? 'items-end pr-12 text-right' : 'items-start pl-12 text-left'}`}>
                <span className="font-general text-[10px] uppercase tracking-[0.3em] text-[#C58B52] mb-2">
                  {event.period}
                </span>
                <h4 className="font-instrument text-3xl md:text-4xl text-[#0D0D0C] mb-4">
                  {event.title}
                </h4>
                <p className="font-cormorant text-lg font-light text-[#0D0D0C]/80 leading-relaxed max-w-sm">
                  {event.desc}
                </p>
              </div>

              {/* Node Marker */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#E9E2D4] border-2 border-[#C58B52] rotate-45 shadow-sm" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
