import React from 'react';
import { QuickFactsPanel } from '@/components/library/ui/QuickFactsPanel';
import { AccordionFAQ } from '@/components/library/ui/AccordionFAQ';

const QUICK_FACTS = {
  title: "Jambūdvīpa",
  facts: [
    { label: "Sanskrit", value: "जम्बूद्वीप" },
    { label: "IAST", value: "Jambūdvīpa" },
    { label: "Meaning", value: "Island of the Rose-Apple Tree" },
    { label: "Position", value: "The Central Continent" },
    { label: "Ruler", value: "Āgnīdhra" },
    { label: "Width", value: "100,000 Yojanas" }
  ]
};

const FAQS = [
  {
    question: "Is Jambūdvīpa modern Asia?",
    answer: "No. While early Orientalists attempted to map Jambūdvīpa to Asia (or Eurasia), the Purāṇic dimensions (100,000 Yojanas or 800,000 miles wide) clearly describe a cosmic, multi-dimensional realm, not a terrestrial continent."
  },
  {
    question: "Where is Mount Meru located?",
    answer: "Mount Meru is situated exactly in the center of Ilāvṛta-varṣa, which is the central region of Jambūdvīpa."
  }
];

export function JambudvipaDetail() {
  return (
    <div className="w-full flex flex-col gap-12 animate-fade-in pb-32">
      <div className="text-left">
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-4 block">THE CENTRAL CONTINENT</span>
        <h3 className="font-instrument text-5xl text-[#0D0D0C] tracking-tight mb-6">Jambūdvīpa</h3>
        <p className="font-cormorant text-xl text-[#0D0D0C]/80 leading-relaxed mb-6">
          Situated at the absolute center of the cosmic plane (Bhū-maṇḍala) is Jambūdvīpa. It is a massive circular island, 100,000 Yojanas (approx. 800,000 miles) in diameter, acting as the anchor for the entire planetary system.
        </p>
      </div>

      <QuickFactsPanel data={QUICK_FACTS} />

      <div>
        <h4 className="font-instrument text-3xl text-[#0D0D0C] tracking-tight mb-4 border-b border-[#C58B52]/20 pb-4">The Nine Varṣas</h4>
        <p className="font-cormorant text-xl text-[#0D0D0C]/80 leading-relaxed mb-6">
          Jambūdvīpa is divided into nine distinct regions (Varṣas) by massive boundary mountains. At its core is Ilāvṛta-varṣa, containing Mount Meru. To the extreme south is Bhārata-varṣa, the region corresponding to our observable Earth.
        </p>
      </div>

      <div>
        <h4 className="font-instrument text-3xl text-[#0D0D0C] tracking-tight mb-4 border-b border-[#C58B52]/20 pb-4">The Sacred Jambu Tree</h4>
        <p className="font-cormorant text-xl text-[#0D0D0C]/80 leading-relaxed mb-6">
          The continent gets its name from a colossal Jambu (Rose-Apple) tree that stands on the summit of Mount Mandara. According to the Bhāgavata Purāṇa, the fruits of this tree are as large as elephants. When they fall and shatter, their juice forms the Jambū River, whose waters grant immunity to fatigue, disease, and old age.
        </p>
      </div>

      <div>
        <h4 className="font-instrument text-3xl text-[#0D0D0C] tracking-tight mb-6">Frequently Asked Questions</h4>
        <AccordionFAQ faqs={FAQS} />
      </div>

    </div>
  );
}
