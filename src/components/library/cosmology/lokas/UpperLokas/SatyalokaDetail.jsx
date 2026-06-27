import React from 'react';
import { LokaDataCard } from '@/components/library/ui/LokaDataCard';
import { AccordionFAQ } from '@/components/library/ui/AccordionFAQ';
import { MythVsScriptureCard } from '@/components/library/ui/MythVsScriptureCard';

const SATYALOKA_FAQS = [
  {
    title: "Satyaloka Mechanics",
    questions: [
      { question: "Who lives in Satyaloka?", answer: "Brahmā (the creator deity) and the most highly elevated, liberated sages (like the Kumāras and Vasiṣṭha) who have transcended all material desires." },
      { question: "Is Satyaloka eternal?", answer: "No. While it lasts for the entire lifespan of Brahmā (311 trillion years), it is still within the material universe (Brahmāṇḍa) and is ultimately dissolved during Mahā-pralaya." },
      { question: "How does time work here?", answer: "Time in Satyaloka is vastly dilated. What feels like one day to Brahmā (a Kalpa) is equal to 4.32 billion human years on Earth." },
      { question: "Is there suffering in Satyaloka?", answer: "There is no physical pain, disease, hunger, or lamentation. However, there is a subtle anxiety regarding the eventual dissolution of the universe at the end of time." },
      { question: "Can anyone travel to Satyaloka?", answer: "No physical spaceship or material technology can reach it. It is only attainable through immense spiritual austerities (Tapas) or perfect execution of one's Dharma over countless lifetimes." },
      { question: "Do residents of Satyaloka return to Earth?", answer: "Typically, no. Most residents achieve 'Krama-Mukti' (gradual liberation). When the universe dissolves, they are liberated along with Brahmā and merge into the Supreme." },
      { question: "Where is it located physically?", answer: "It is the absolute highest planetary system within the Brahmāṇḍa, situated millions of Yojanas above the earthly plane, near the very top of the cosmic egg." },
      { question: "What does it look like?", answer: "Scriptures describe it as devoid of sorrow, illuminated not by the sun, but by the natural effulgence of its spiritually advanced inhabitants." },
      { question: "Is Satyaloka the same as Vaikuṇṭha?", answer: "No. Satyaloka is the highest material realm. Vaikuṇṭha is the eternal, spiritual realm existing completely outside the Brahmāṇḍa." },
      { question: "Who rules Satyaloka?", answer: "Lord Brahmā is the presiding deity and ruler of this realm." }
    ]
  }
];

export function SatyalokaDetail() {
  return (
    <div className="w-full flex flex-col gap-12 animate-fade-in pb-16">
      
      <LokaDataCard 
        name="Satyaloka" 
        iast="Satya-loka" 
        meaning="The Realm of Truth" 
        deities="Brahmā, Sarasvatī" 
        scriptures="Bhāgavata Purāṇa (Canto 2 & 5), Viṣṇu Purāṇa" 
      />

      <section>
        <h3 className="font-instrument text-4xl text-[#0D0D0C] mb-6">Geography & Appearance</h3>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          Satyaloka (also known as Brahmaloka) is the zenith of the material universe. Situated millions of Yojanas above the earthly plane, it is untouched by the lower modes of nature (ignorance and passion). It is a realm of pure Sattva (goodness).
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
          The environment does not require the sun or moon for illumination. The Bhāgavata Purāṇa describes that the realm is brilliantly illuminated by the spiritual effulgence emanating from the bodies of its highly realized inhabitants. There is no grief, no old age, no death (until the end of the universe), and no fear.
        </p>
      </section>

      <section>
        <h3 className="font-instrument text-4xl text-[#0D0D0C] mb-6">Inhabitants & Karma</h3>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          This realm is exclusively reserved for the most advanced souls in the universe. It is populated by great Prajāpatis, celestial sages (like the four Kumāras, Nārada, and Bhṛgu), and souls who have achieved nearly perfect liberation.
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
          <strong>How does one reach Satyaloka?</strong> It cannot be reached by good deeds (Puṇya) alone—ordinary good karma only elevates a soul to Svarga (heaven), from which they must eventually fall back to Earth. Satyaloka is reached through immense, lifelong Yogic austerities, total renunciation of material desires, and profound realization of Brahman.
        </p>
      </section>

      <section>
        <MythVsScriptureCard 
          myth="Satyaloka is the permanent, eternal heaven of Hinduism."
          scripture="Satyaloka is temporary. At the end of Brahmā's life (Mahā-pralaya), Satyaloka and all its inhabitants are destroyed. Permanent liberation (Mokṣa) requires leaving the Brahmāṇḍa entirely."
          source="Bhagavad Gītā (8.16): 'Ā-brahma-bhuvanāl lokāḥ punar āvartino’rjuna' (From the highest planet of Brahmā down to the lowest, all are places of misery wherein repeated birth and death take place)."
        />
      </section>

      <section>
        <h3 className="font-instrument text-4xl text-[#0D0D0C] mb-6 border-b border-[#C58B52]/20 pb-4">
          Exhaustive Inquiry (FAQ)
        </h3>
        <AccordionFAQ categories={SATYALOKA_FAQS} />
      </section>

    </div>
  );
}
