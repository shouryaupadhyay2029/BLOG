import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HierarchyMap } from '@/components/library/ui/HierarchyMap';

// Placeholder for dynamically loaded Loka components
// In a real app with code-splitting, these could be React.lazy()
import { SatyalokaDetail } from '@/components/library/cosmology/lokas/UpperLokas/SatyalokaDetail';
import { BhulokaDetail } from '@/components/library/cosmology/lokas/MiddleLoka/BhulokaDetail';
import { PatalaDetail } from '@/components/library/cosmology/lokas/LowerLokas/PatalaDetail';

// Temporary fallback for unimplemented Lokas
const ComingSoonLoka = ({ name }) => (
  <div className="p-12 text-center border border-[#C58B52]/30 bg-white/40 my-12">
    <h3 className="font-instrument text-3xl text-[#0D0D0C] mb-4">{name}</h3>
    <p className="font-cormorant text-xl font-light text-[#0D0D0C]/80">Detailed encyclopedic entry is currently being compiled from scriptural sources.</p>
  </div>
);

export function InteractiveLokaAtlas() {
  const [activeLoka, setActiveLoka] = useState('satyaloka');

  const renderLokaContent = () => {
    switch(activeLoka) {
      case 'satyaloka': return <SatyalokaDetail />;
      case 'bhuloka': return <BhulokaDetail />;
      case 'patala': return <PatalaDetail />;
      default: return <ComingSoonLoka name={activeLoka.toUpperCase()} />;
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-12 my-16">
      {/* Sidebar Hierarchy Navigator */}
      <div className="w-full md:w-1/4">
        <HierarchyMap activeLoka={activeLoka} onSelectLoka={setActiveLoka} />
      </div>
      
      {/* Main Dynamic Content Pane */}
      <div className="w-full md:w-3/4 min-h-[800px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLoka}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderLokaContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
