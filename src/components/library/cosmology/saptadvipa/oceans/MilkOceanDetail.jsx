import React from 'react';
import { QuickFactsPanel } from '@/components/library/ui/QuickFactsPanel';

const QUICK_FACTS = {
  title: "The Ocean of Milk",
  facts: [
    { label: "Sanskrit", value: "क्षीरसागर" },
    { label: "IAST", value: "Kṣīrasāgara" },
    { label: "Meaning", value: "Ocean of Milk" },
    { label: "Position", value: "Surrounds Śākadvīpa" },
    { label: "Famous Event", value: "Samudra Manthana (Churning of the Ocean)" },
    { label: "Associated Deity", value: "Lord Viṣṇu (Śvetadvīpa)" }
  ]
};

export function MilkOceanDetail() {
  return (
    <div className="w-full flex flex-col gap-12 animate-fade-in pb-32">
      <div className="text-left">
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block">THE SIXTH COSMIC OCEAN</span>
        <h3 className="font-instrument text-5xl text-[#0D0D0C] tracking-tight mb-6">Kṣīrasāgara</h3>
        <p className="font-cormorant text-xl text-[#0D0D0C]/80 leading-relaxed mb-6">
          The Ocean of Milk (Kṣīrasāgara) is perhaps the most famous of all the cosmic oceans in Hindu literature. It surrounds the continent of Śākadvīpa and is itself surrounded by Puṣkaradvīpa. 
        </p>
      </div>

      <QuickFactsPanel data={QUICK_FACTS} />

      <div>
        <h4 className="font-instrument text-3xl text-[#0D0D0C] tracking-tight mb-4 border-b border-[#C58B52]/20 pb-4">Samudra Manthana</h4>
        <p className="font-cormorant text-xl text-[#0D0D0C]/80 leading-relaxed mb-6">
          This ocean is the site of one of the most pivotal events in Purāṇic history: the Samudra Manthana (Churning of the Ocean). The Devas and Asuras united to churn the Milk Ocean using Mount Mandara as a churning rod and the serpent Vāsuki as a rope, extracting the nectar of immortality (Amṛta).
        </p>
      </div>

      <div>
        <h4 className="font-instrument text-3xl text-[#0D0D0C] tracking-tight mb-4 border-b border-[#C58B52]/20 pb-4">Śvetadvīpa</h4>
        <p className="font-cormorant text-xl text-[#0D0D0C]/80 leading-relaxed mb-6">
          Within the Ocean of Milk lies Śvetadvīpa (the White Island). It is the transcendental abode of Lord Kṣīrodakaśāyī Viṣṇu, who reclines upon the serpent Ananta Śeṣa. This is where Brahmā and the demigods go to seek Viṣṇu's audience when the universe is in crisis.
        </p>
      </div>

    </div>
  );
}
