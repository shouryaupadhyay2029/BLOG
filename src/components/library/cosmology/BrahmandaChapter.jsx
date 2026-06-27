import React from 'react';
import { motion } from 'framer-motion';
import { QuickFactsPanel } from '@/components/library/ui/QuickFactsPanel';
import { AnatomyCutaway } from '@/components/library/ui/AnatomyCutaway';
import { AccordionFAQ } from '@/components/library/ui/AccordionFAQ';
import { CosmicWatersFlowchart } from '@/components/library/ui/CosmicWatersFlowchart';
import { CosmologyTimeline } from '@/components/library/ui/CosmologyTimeline';
import { ComparisonTable } from '@/components/library/ui/ComparisonTable';
import { MythVsScriptureCard } from '@/components/library/ui/MythVsScriptureCard';
import { ScholarNote } from '@/components/library/ui/ScholarNote';

const EASE_EXPO = [0.16, 1, 0.3, 1];

const QUICK_FACTS = {
  title: "Brahmāṇḍa (The Cosmic Egg)",
  facts: [
    { label: "Sanskrit", value: "ब्रह्माण्ड" },
    { label: "IAST", value: "Brahmāṇḍa" },
    { label: "Literal Translation", value: "The Egg of Brahmā / Cosmic Egg" },
    { label: "Primary Scriptures", value: "Bhāgavata, Viṣṇu, Liṅga Purāṇas" },
    { label: "Associated Deities", value: "Mahā Viṣṇu, Brahmā, Śiva" },
    { label: "Research Difficulty", value: "Advanced" }
  ]
};

const TIMELINE_EVENTS = [
  { period: "Ṛgveda (c. 1500 BCE)", title: "Hiraṇyagarbha", desc: "The 'Golden Womb' is introduced as the source of creation floating in primordial waters. Not yet described as an 'egg'." },
  { period: "Śatapatha Brāhmaṇa (c. 800 BCE)", title: "The Egg Metaphor", desc: "Explicitly states that Prajāpati (the creator) emerged from a golden egg (Aṇḍa) that floated in the waters for a year." },
  { period: "Chāndogya Upaniṣad (c. 600 BCE)", title: "Metaphysical Splitting", desc: "The egg splits in two. The silver half becomes earth, the golden half becomes heaven. Outer membranes become mountains and clouds." },
  { period: "Manusmṛti (c. 200 BCE)", title: "Systematization", desc: "Brahman places a seed in the waters, which becomes the golden egg. Brahmā is born within and splits the egg." },
  { period: "Classical Purāṇas (c. 500 CE+)", title: "Detailed Anatomy", desc: "The concept explodes into a highly detailed structure featuring 14 Lokas, Mount Meru, and Seven Exponential Coverings." }
];

const ANATOMY_LAYERS = [
  { name: "The Egg Shell", sanskrit: "Aṇḍa-Kaṭāha", description: "The impenetrable outer boundary of the universe, separating the physical cosmos from the infinite Causal Ocean (Kāraṇodaka) beyond." },
  { name: "The Upper Lokas", sanskrit: "Ūrdhva Loka", description: "The seven higher planetary systems (including Bhū, Bhuva, Sva, Mahar, Jana, Tapa, Satya/Brahmaloka). Regions of elevating consciousness and subtle bodies." },
  { name: "Mount Meru & Bhū-maṇḍala", sanskrit: "Meru / Bhū", description: "The golden central axis of the universe and the flat earthly plane of karmic action (where human life exists)." },
  { name: "The Lower Lokas", sanskrit: "Adho Loka / Pātāla", description: "The seven subterranean realms. Not 'hells' (which are Narakas), but highly opulent, materialistic realms inhabited by Nāgas, Daityas, and Asuras." },
  { name: "The Inner Cosmic Ocean", sanskrit: "Garbhodaka", description: "The waters filling the lower half of the Brahmāṇḍa. Garbhodakaśāyī Viṣṇu reclines here, supporting the planetary systems." }
];

const COMPARISON_ROWS = [
  ["Bhāgavata Purāṇa", "500 million Yojanas", "Very detailed inner geography", "Infinite bubbles from Mahā Viṣṇu"],
  ["Viṣṇu Purāṇa", "500 million Yojanas", "Focus on the Seven Coverings", "Countless eggs like bubbles in water"],
  ["Liṅga Purāṇa", "1 billion Yojanas", "Śiva as the ultimate source", "Countless eggs born from Prakṛti"],
  ["Sūrya Siddhānta", "Calculated based on planetary orbits", "Mathematical/Astronomical model", "Focuses on our single observable universe"]
];

const FAQ_CATEGORIES = [
  {
    title: "Origin & Structure",
    questions: [
      { question: "What exactly is a Brahmāṇḍa?", answer: "It is a single, self-contained universe, shaped like an egg, containing all space, time, matter, and the 14 planetary systems (Lokas)." },
      { question: "Did Brahmāṇḍa simply mean 'Earth'?", answer: "No. The Earth (or the plane of Earthly action) is referred to as Bhū-maṇḍala or Bhūmi. The Brahmāṇḍa encompasses the entire universe, including the heavens and subterranean realms." },
      { question: "Who created the Brahmāṇḍa?", answer: "In the Purāṇic model, the supreme unmanifest reality (Brahman, personalized as Mahā Viṣṇu or Para Śiva) provides the raw material (Prakṛti). Brahmā is born inside the egg to act as the architect/assembler." },
      { question: "What is the shell of the egg made of?", answer: "The shell is composed of the fundamental elements (Earth, Water, Fire, Air, Ether, Ego, and Mahat) in unmixed, primordial states, forming the Seven Coverings." },
      { question: "Is the universe physical or spiritual?", answer: "The Brahmāṇḍa is strictly material (Prakṛti), governed by the three Guṇas (modes of nature) and time (Kāla). Spiritual realms (like Vaikuṇṭha) exist outside and beyond it." },
      { question: "Are the 14 Lokas physical planets?", answer: "Not in the modern astronomical sense of giant rocks. They are dimensional planes of existence corresponding to different levels of consciousness and karmic experience." },
      { question: "Where is Mount Meru located?", answer: "Mount Meru forms the central golden axis of the universe, piercing through the Bhū-maṇḍala. It acts as the structural and spiritual spine of the cosmos." },
      { question: "Does the egg float in space?", answer: "No, it floats in the Kāraṇodaka (Causal Ocean)—a metaphysical ocean of spiritual water that exists beyond material space." }
    ]
  },
  {
    title: "Infinite Universes",
    questions: [
      { question: "Is ours the only universe?", answer: "Absolutely not. The Purāṇas explicitly state there are countless (Ananta) Brahmāṇḍas floating in the causal ocean, like dust motes in a sunbeam." },
      { question: "Does every universe have a Brahmā?", answer: "Yes. Every single universe has its own Brahmā (creator), Viṣṇu (maintainer), and Śiva (destroyer) to manage its specific lifecycle." },
      { question: "Are all universes the same size?", answer: "No. Texts like the Caitanya Caritāmṛta describe universes of varying sizes, with Brahmās possessing different numbers of heads depending on the size of their universe." },
      { question: "Can we travel to other universes?", answer: "Not physically. The Seven Coverings of the egg are impenetrable by material means. Only liberated souls or supreme deities can cross the boundary." },
      { question: "Do the universes collide?", answer: "They do not. They are suspended in the Causal Ocean and managed by the supreme will of Mahā Viṣṇu." },
      { question: "How long does a universe last?", answer: "One lifespan of Brahmā, which equals 311.04 trillion human years. After this, the universe undergoes Mahā-pralaya (complete dissolution) and is absorbed back into Mahā Viṣṇu." },
      { question: "Are new universes being created right now?", answer: "Yes. Every time Mahā Viṣṇu exhales, new universes emerge. When he inhales, old ones are destroyed. This cycle is eternal." },
      { question: "Does modern science agree with this?", answer: "Modern Multiverse theory (like eternal inflation) posits infinite universes, but one must be careful not to force ancient metaphysics to perfectly match modern physics." }
    ]
  },
  {
    title: "Deities & Roles",
    questions: [
      { question: "What is Mahā Viṣṇu's role?", answer: "Mahā Viṣṇu (Kāraṇodakaśāyī Viṣṇu) is the source of all universes. He lies outside the eggs, generating them through his breathing." },
      { question: "What is Garbhodakaśāyī Viṣṇu's role?", answer: "He is the expansion of Viṣṇu who enters into a specific Brahmāṇḍa, fills the bottom half with water, and sprouts the lotus from which Brahmā is born." },
      { question: "What is Kṣīrodakaśāyī Viṣṇu's role?", answer: "He is the further expansion who enters into every single atom and the heart of every living being as the Supersoul (Paramātmā) within the universe." },
      { question: "Is Brahmā immortal?", answer: "No. Brahmā lives for 100 'Brahmā years' (311.04 trillion human years). When he dies, the universe dies with him." },
      { question: "Where is Śiva in this model?", answer: "Inside the universe, Śiva (Rudra) acts as the agent of dissolution (Pralaya). In Śaiva traditions, Para Śiva is the ultimate source replacing/equaling Mahā Viṣṇu." },
      { question: "Where is Devī in this model?", answer: "In Śākta traditions (like the Devī Bhāgavata Purāṇa), the Supreme Mother (Bhuvaneshvari) is the ultimate reality from whom even Brahmā, Viṣṇu, and Śiva are born." },
      { question: "Can a human become Brahmā?", answer: "Yes. 'Brahmā' is a cosmic post, an office. A soul (Jīva) with immense, nearly perfect karma from previous cycles can be appointed to the post of Brahmā." },
      { question: "Where does Brahmā live?", answer: "He lives in Satyaloka (also called Brahmaloka), the highest and purest material planetary system at the very top of the Brahmāṇḍa." }
    ]
  },
  {
    title: "Beyond the Egg",
    questions: [
      { question: "What lies outside the shell of the Brahmāṇḍa?", answer: "First, the Seven Coverings. Beyond them is the Kāraṇodaka (Causal Ocean). Beyond that is the Paravyoma (Spiritual Sky) and Vaikuṇṭha." },
      { question: "What are the Seven Coverings?", answer: "They are concentric layers of elemental matter (Earth, Water, Fire, Air, Ether, Ego, Mahat) that encase the universe. Each layer is ten times thicker than the previous one." },
      { question: "Is Vaikuṇṭha inside the Brahmāṇḍa?", answer: "No. Vaikuṇṭha, Goloka, and Kailāsa (in its supreme form) are eternal, spiritual realms existing completely outside the material universes." },
      { question: "Do the laws of karma apply outside?", answer: "No. Karma, time (as a degrading force), and the three Guṇas only operate within the material Brahmāṇḍas." },
      { question: "If God is everywhere, is He outside the egg?", answer: "Yes. The Upanishads state Brahman is both immanent (inside every atom) and transcendent (beyond all universes)." },
      { question: "What happens to souls during dissolution?", answer: "Unliberated souls merge into an unmanifest state within Mahā Viṣṇu, retaining their karmic seeds, waiting to be injected into the next newly created Brahmāṇḍa." }
    ]
  }
];

export function BrahmandaChapter() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 pb-32 flex flex-col gap-32 border-t border-[#C58B52]/20 pt-32 mt-32">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 block text-center">
          CHAPTER II
        </span>
        <h2 className="font-instrument text-5xl md:text-7xl text-[#0D0D0C] tracking-tight mb-8 text-center leading-[1.1]">
          Brahmāṇḍa:<br/>The Cosmic Egg
        </h2>
        
        <div className="prose-custom pt-8">
          <p className="font-cormorant text-2xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6 italic text-center max-w-3xl mx-auto">
            Imagine floating outside of everything that exists.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
            Suddenly, before you, countless luminous, golden spheres drift through an endless, dark causal ocean. Like bubbles rising from the depths, they expand, hover, and eventually burst, only to be replaced by millions more.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
            Each one of these spheres is a <strong>Brahmāṇḍa</strong>. Each one contains an entire universe. Each one possesses its own creator, its own dimensions of heaven and hell, and its own timeline. You are about to enter one.
          </p>
        </div>
      </motion.section>

      {/* 2. QUICK FACTS */}
      <QuickFactsPanel data={QUICK_FACTS} />

      {/* 3. ETYMOLOGY */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          What Does Brahmāṇḍa Mean?
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          The word is a Sanskrit compound (Sandhi) of two terms:
        </p>
        <ul className="list-disc pl-6 font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/80 space-y-4 mb-8">
          <li><strong>Brahma:</strong> Referring either to Brahman (the Ultimate Reality) or Brahmā (the specific creator deity of our universe).</li>
          <li><strong>Aṇḍa:</strong> Literally meaning "Egg" or "Sphere."</li>
        </ul>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          It is critical to understand that a Brahmāṇḍa is <em>not</em> simply "the physical Earth." It is the entire closed system of the universe, encapsulating all physical planets, stars, subterranean realms, and higher heavenly dimensions. To the ancient Ṛṣis, the universe was not an infinite, open vacuum, but a highly structured, contained sphere floating in a greater metaphysical reality.
        </p>
      </motion.section>

      {/* 4. EVOLUTION OF CONCEPT */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-2 text-center">
          The Evolution of the Cosmic Egg
        </h2>
        <CosmologyTimeline events={TIMELINE_EVENTS} />
      </motion.section>

      {/* 5. IS IT LITERAL? */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          Is the Brahmāṇḍa Literal?
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          When approaching Hindu cosmology, the modern reader often asks: <em>"Did they literally believe the universe was shaped like a giant egg?"</em> The answer depends entirely on the tradition you consult.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="border border-[#C58B52]/30 p-6 bg-white/40">
            <h4 className="font-instrument text-2xl mb-2 text-[#0D0D0C]">Literal Interpretation</h4>
            <p className="font-cormorant text-lg font-light text-[#0D0D0C]/80">Many orthodox Purāṇic traditions view the descriptions as absolute physical reality, though existing in dimensions currently inaccessible to human senses.</p>
          </div>
          <div className="border border-[#C58B52]/30 p-6 bg-white/40">
            <h4 className="font-instrument text-2xl mb-2 text-[#0D0D0C]">Meditative (Tantric) Interpretation</h4>
            <p className="font-cormorant text-lg font-light text-[#0D0D0C]/80">The macrocosm is the microcosm. The Brahmāṇḍa is the human body. Mount Meru is the spine. The 14 Lokas are the Chakras. It is a map for inner ascension.</p>
          </div>
          <div className="border border-[#C58B52]/30 p-6 bg-white/40">
            <h4 className="font-instrument text-2xl mb-2 text-[#0D0D0C]">Academic Interpretation</h4>
            <p className="font-cormorant text-lg font-light text-[#0D0D0C]/80">The "Egg" is an archetype. It perfectly encapsulates the idea of a self-contained, incubating system from which complex life slowly develops and eventually breaks free.</p>
          </div>
        </div>
      </motion.section>

      {/* 6. ANATOMY CUTAWAY */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-2">
          Anatomy of a Brahmāṇḍa
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-2">
          Interact with the layers below to explore the internal architecture of the universe as described in the Bhāgavata Purāṇa.
        </p>
        <AnatomyCutaway layers={ANATOMY_LAYERS} />
      </motion.section>

      {/* 7. SEVEN COVERINGS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          The Seven Coverings (Āvaraṇas)
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          The universe is not directly exposed to the infinite Causal Ocean. It is encased within seven concentric shells, made of the fundamental material elements. What is staggering is their exponential thickness.
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-8">
          The first layer (Earth) is 10 times thicker than the universe itself. The next layer (Water) is 10 times thicker than the Earth layer, and so on. To escape the material universe, a soul must pierce through:
        </p>
        
        <div className="flex flex-col gap-2 font-cormorant text-lg text-[#0D0D0C]/90 mb-8 pl-6 border-l-2 border-[#C58B52]/40">
          <p>1. <strong>Earth</strong> (Pṛthvī)</p>
          <p>2. <strong>Water</strong> (Jala) — 10x thicker</p>
          <p>3. <strong>Fire</strong> (Agni) — 100x thicker</p>
          <p>4. <strong>Air</strong> (Vāyu) — 1,000x thicker</p>
          <p>5. <strong>Ether/Space</strong> (Ākāśa) — 10,000x thicker</p>
          <p>6. <strong>False Ego</strong> (Ahaṅkāra) — 100,000x thicker</p>
          <p>7. <strong>Cosmic Intelligence</strong> (Mahat-tattva) — 1,000,000x thicker</p>
        </div>

        <ScholarNote 
          title="Exponential Symbolism"
          content="Because a true 10x exponential scale is physically impossible to render on a screen or canvas (the final layer would be millions of times larger than the core), ancient art always rendered these symbolically as equal-sized rings. Metaphysically, this represents how immensely difficult it is for a soul bound by ego (Ahaṅkāra) to break free from the material world."
        />
      </motion.section>

      {/* 8. DIMENSIONS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          Dimensions of the Universe
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          The Purāṇas measure cosmic distances using the <strong>Yojana</strong> (approx. 8-9 miles, though interpretations vary wildly). Here is how different texts measure the diameter of our Brahmāṇḍa:
        </p>
        <ComparisonTable 
          headers={["Scripture", "Diameter", "Focus", "Multiverse Stance"]}
          rows={COMPARISON_ROWS}
        />
      </motion.section>

      {/* 9. INFINITE UNIVERSES */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          Infinite Universes (The Multiverse)
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          One of the most striking features of Hindu cosmology is that it never claimed Earth or our universe was the only one. 
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          According to Vaiṣṇava texts, Mahā Viṣṇu lies in the Causal Ocean. As he exhales in his cosmic sleep (Yoga Nidrā), millions of Brahmāṇḍas emerge from the pores of his skin. They expand and exist for the duration of his breath. When he inhales, they are all drawn back into him, undergoing total dissolution (Mahā-pralaya). 
        </p>
        <MythVsScriptureCard 
          myth="Ancient people believed the Earth was the only world and the center of all creation."
          scripture="Every major Purāṇa explicitly states there are countless (Ananta) universes. The Caitanya Caritāmṛta even describes a moment when Brahmā visits Kṛṣṇa, only to realize he is surrounded by millions of other Brahmās from different universes."
          source="Bhāgavata Purāṇa (6.16.37) / Caitanya Caritāmṛta (Madhya 21.65)"
        />
      </motion.section>

      {/* 10. COSMIC WATERS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <CosmicWatersFlowchart />
      </motion.section>

      {/* 11. FAQ SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 block text-center">
          EXHAUSTIVE INQUIRY
        </span>
        <h2 className="font-instrument text-5xl text-[#0D0D0C] tracking-tight mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="font-cormorant text-xl font-light text-[#0D0D0C]/70 text-center max-w-2xl mx-auto mb-12">
          Explore over 30 deeply researched answers resolving the most complex contradictions, mechanisms, and spiritual mechanics of the Brahmāṇḍa.
        </p>
        <AccordionFAQ categories={FAQ_CATEGORIES} />
      </motion.section>

    </div>
  );
}
