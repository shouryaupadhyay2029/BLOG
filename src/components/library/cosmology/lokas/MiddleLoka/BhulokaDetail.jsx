import React from 'react';
import { LokaDataCard } from '@/components/library/ui/LokaDataCard';
import { AccordionFAQ } from '@/components/library/ui/AccordionFAQ';
import { MythVsScriptureCard } from '@/components/library/ui/MythVsScriptureCard';

const BHULOKA_FAQS = [
  {
    title: "Bhūloka Mechanics",
    questions: [
      { question: "Is Bhūloka just the planet Earth?", answer: "No. While it includes the planet Earth, Bhūloka refers to the entire earthly dimensional plane where humans, animals, and certain subtle beings reside. It is often synonymous with the Bhū-maṇḍala (the earthly disk/solar system)." },
      { question: "What is the purpose of Bhūloka?", answer: "It is the 'Karma-Bhūmi' (the realm of action). Unlike higher or lower Lokas where souls only burn off past karma, Bhūloka is the only place where new karma can be generated." },
      { question: "Can you achieve liberation (Mokṣa) from here?", answer: "Yes! In fact, it is the best place to achieve it. Even gods in Svarga must eventually return to Bhūloka as humans to attain final liberation." },
      { question: "Who rules Bhūloka?", answer: "Various earthly kings (Chakravartins), Manus, and ultimately presiding deities like Bhūdevī (Mother Earth)." },
      { question: "Where is it located?", answer: "It is exactly in the middle of the Brahmāṇḍa, separating the seven higher heavenly realms from the seven lower subterranean realms." },
      { question: "What is Bhārata-varṣa?", answer: "It is a specific region within Bhūloka. Historically it refers to the Indian subcontinent, but cosmologically it refers to the specific dimension where the strictest laws of karma apply." },
      { question: "Do avatars visit other Lokas?", answer: "While Viṣṇu's avatars (like Matsya or Vāmana) traverse the cosmos, the most significant Lilas (divine plays) of Rāma and Kṛṣṇa take place specifically on Bhūloka." },
      { question: "Is time linear here?", answer: "Yes. Bhūloka operates on standard human time, governed by the sun and moon, transitioning through the four Yugas (Satya, Treta, Dvapara, Kali)." },
      { question: "Who lives here?", answer: "Humans, animals, plants, and subtle entities like Yakṣas, Rakṣasas (in certain ages), and wandering spirits (Bhūtas)." },
      { question: "What happens when you die here?", answer: "Depending on your accumulated karma, your subtle body is transferred either to a higher Loka (Svarga) for reward, a Naraka for purification, or you are immediately reincarnated back into Bhūloka." }
    ]
  }
];

export function BhulokaDetail() {
  return (
    <div className="w-full flex flex-col gap-12 animate-fade-in pb-16">
      
      <LokaDataCard 
        name="Bhūloka" 
        iast="Bhū-loka" 
        meaning="The Earthly Plane" 
        deities="Bhūdevī, Manus" 
        scriptures="Bhāgavata Purāṇa (Canto 5), Mahābhārata" 
      />

      <section>
        <h3 className="font-instrument text-4xl text-[#0D0D0C] mb-6">Geography & Appearance</h3>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          Bhūloka is the middle plane of the universe. Visually, the Purāṇas describe it as an immense disk (Bhū-maṇḍala) featuring seven concentric island-continents (Sapta Dvīpas), separated by seven cosmic oceans of different liquids (salt water, sugarcane juice, wine, ghee, milk, yogurt, and sweet water).
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
          At the absolute center of this disk stands Mount Meru. Jambūdvīpa is the central island containing Bhārata-varṣa. While early translators tried to map this literally to the globe of Earth, modern scholars and traditional astronomers (like Bhāskarācārya) understand this as a stereographic projection of the solar system and celestial sphere.
        </p>
      </section>

      <section>
        <h3 className="font-instrument text-4xl text-[#0D0D0C] mb-6">The Importance of Karma-Bhūmi</h3>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          Of all fourteen Lokas, Bhūloka is arguably the most important for the spiritual journey. It is designated as the <strong>Karma-Bhūmi</strong> (the realm of action). 
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
          In the higher heavens (Svarga) and the lower realms (Pātāla), souls are merely "spending" their karma. They are experiencing the rewards or punishments of their past actions. They cannot generate new karma. Once their spiritual bank account is empty, they fall back to Bhūloka. Only here, in the human form, wrapped in a mix of suffering and joy, can a soul exercise free will, generate new karma, and achieve ultimate liberation (Mokṣa).
        </p>
      </section>

      <section>
        <MythVsScriptureCard 
          myth="Bhūloka simply means the planet Earth."
          scripture="Bhūloka is the entire dimension of human-like experience. The physical globe of Earth is just one small manifestation within the vast Bhū-maṇḍala."
          source="Sūrya Siddhānta & Bhāgavata Purāṇa (Canto 5)"
        />
      </section>

      <section>
        <h3 className="font-instrument text-4xl text-[#0D0D0C] mb-6 border-b border-[#C58B52]/20 pb-4">
          Exhaustive Inquiry (FAQ)
        </h3>
        <AccordionFAQ categories={BHULOKA_FAQS} />
      </section>

    </div>
  );
}
