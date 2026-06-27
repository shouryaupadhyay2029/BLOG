import React from 'react';
import { LokaDataCard } from '@/components/library/ui/LokaDataCard';
import { AccordionFAQ } from '@/components/library/ui/AccordionFAQ';
import { MythVsScriptureCard } from '@/components/library/ui/MythVsScriptureCard';

const PATALA_FAQS = [
  {
    title: "Pātāla Mechanics",
    questions: [
      { question: "Is Pātāla Hell?", answer: "No. Hell is Naraka (a place of temporary punishment). Pātāla is the lowest of the subterranean heavens (Bila-svarga). It is incredibly beautiful and opulent." },
      { question: "Who lives in Pātāla?", answer: "It is the realm of the great Nāgas (divine serpents) such as Vāsuki, Śaṅkha, Kulika, and Śveta." },
      { question: "Why do Nāgas live there?", answer: "They reside there enjoying immense material wealth, comfortable palaces, and beautiful environments, completely free from the anxieties of the upper worlds." },
      { question: "Is there sunlight in Pātāla?", answer: "No. The subterranean realms do not receive light from the Sun or Moon. However, there is no darkness." },
      { question: "How is it illuminated?", answer: "The entire realm is brilliantly illuminated by the glowing, radiant jewels (Maṇi) atop the hoods of the giant Nāgas." },
      { question: "Is there suffering in Pātāla?", answer: "There is no disease, old age, or poverty. The only suffering comes from the fear of Viṣṇu's Sudarśana Chakra (time), which occasionally reminds the demons and serpents of their mortality." },
      { question: "What is at the very bottom of Pātāla?", answer: "At the base of Pātāla rests Lord Ananta Śeṣa (the thousand-headed serpent), who holds the entire universe upon his hoods." },
      { question: "Do humans go to Pātāla?", answer: "Generally, no. Human souls go to Svarga (heaven) or Naraka (hell) based on karma. Pātāla is a specific destination for powerful beings like Asuras and Nāgas." },
      { question: "Who rules Pātāla?", answer: "The great Nāga kings, specifically Vāsuki, rule the region." },
      { question: "Is Pātāla underground?", answer: "In literal texts, it is described as beneath the Earth. Cosmologically, it represents the lower, material-heavy dimensional frequencies of the universe." }
    ]
  }
];

export function PatalaDetail() {
  return (
    <div className="w-full flex flex-col gap-12 animate-fade-in pb-16">
      
      <LokaDataCard 
        name="Pātāla" 
        iast="Pātāla-loka" 
        meaning="The Lowest Realm" 
        deities="Vāsuki, Ananta Śeṣa" 
        scriptures="Bhāgavata Purāṇa (Canto 5, Chapter 24)" 
      />

      <section>
        <h3 className="font-instrument text-4xl text-[#0D0D0C] mb-6">Geography & Appearance</h3>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          Pātāla is the lowest of the seven subterranean realms (Adho Lokas). Together, these seven realms are called <strong>Bila-svarga</strong> (the subterranean heavens). 
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
          The Bhāgavata Purāṇa explicitly states that Pātāla is more beautiful than the heavenly planets (Svarga) of the demigods. It contains magnificent palaces built by the demonic architect Maya Dānava, lakes filled with clear water and lotus flowers, and gardens that surpass those of the upper worlds. Because the sun does not shine here, time is not measured by days and nights, and the residents have no fear of passing time (until the end of the universe). The realm is bathed in the beautiful, soft light emanating from the jewels on the hoods of the Nāgas.
        </p>
      </section>

      <section>
        <h3 className="font-instrument text-4xl text-[#0D0D0C] mb-6">Inhabitants: The Realm of Serpents</h3>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          Pātāla is the primary residence of the Nāgas—the divine, multi-headed serpent beings. Kings like Vāsuki, Śaṅkha, and Mahāpadma live here in extreme opulence. 
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
          At the absolute base of Pātāla lies <strong>Ananta Śeṣa</strong>, the infinite thousand-headed serpent expansion of Lord Viṣṇu. It is said that the entire Brahmāṇḍa (the universe) rests on one of his hoods like a tiny mustard seed. When Ananta Śeṣa wishes to destroy the universe at the end of time, the destructive fire (Saṅkarṣaṇa) emanates from his mouths.
        </p>
      </section>

      <section>
        <MythVsScriptureCard 
          myth="Pātāla is the Hindu equivalent of Hell, where sinners are tortured in darkness."
          scripture="Pātāla is a subterranean heaven (Bila-svarga) of extreme wealth, beauty, and sensual pleasure, devoid of disease or old age. Hell is a completely separate location called Naraka, situated beneath Pātāla."
          source="Bhāgavata Purāṇa (5.24.8)"
        />
      </section>

      <section>
        <h3 className="font-instrument text-4xl text-[#0D0D0C] mb-6 border-b border-[#C58B52]/20 pb-4">
          Exhaustive Inquiry (FAQ)
        </h3>
        <AccordionFAQ categories={PATALA_FAQS} />
      </section>

    </div>
  );
}
