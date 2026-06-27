import React from 'react';
import { motion } from 'framer-motion';
import { SanskritVerseBox } from '@/components/library/ui/SanskritVerseBox';
import { ScholarNote } from '@/components/library/ui/ScholarNote';
import { ReflectionBox } from '@/components/library/ui/ReflectionBox';
import { MythVsScriptureCard } from '@/components/library/ui/MythVsScriptureCard';
import { ComparisonTable } from '@/components/library/ui/ComparisonTable';
import { CosmologyTimeline } from '@/components/library/ui/CosmologyTimeline';

const EASE_EXPO = [0.16, 1, 0.3, 1];

const NASADIYA_VERSES = [
  {
    title: "NĀSADĪYA SŪKTA – VERSE 1",
    devanagari: "नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत् ।\nकिमावरीवः कुह कस्य शर्मन्नम्भः किमासीद्गहनं गभीरम् ॥",
    iast: "nāsad āsīn no sad āsīt tadānīṃ nāsīd rajo no vyomā paro yat |\nkim āvarīvaḥ kuha kasya śarmann ambhaḥ kim āsīd gahanaṃ gabhīram ||",
    wordByWord: "na (not) asat (non-existence) āsīt (was) no (nor) sat (existence) āsīt (was) tadānīṃ (then); na āsīt (there was not) rajaḥ (the realm/space) no (nor) vyomā (the sky/heaven) paraḥ yat (which is beyond). kim (what) āvarīvaḥ (covered/concealed)? kuha (where)? kasya (whose) śarman (in protection)? ambhaḥ (water) kim (what) āsīt (was there), gahanaṃ (unfathomable) gabhīram (deep)?",
    literalTranslation: "Then there was neither non-existence nor existence. There was no realm of space, nor the sky which is beyond. What covered it? Where? In whose protection? Was there water, unfathomably deep?",
    smoothTranslation: "At that time, there was neither non-existence nor existence. There was no physical space, nor the sky beyond it. What was concealing everything? Where? Under whose protection? Was there an unfathomable cosmic water?",
    context: "This opening verse systematically negates all human categories of understanding. By saying neither 'sat' (existence) nor 'asat' (non-existence) existed, the Ṛṣi points to a state that is completely beyond binary logic."
  },
  {
    title: "NĀSADĪYA SŪKTA – VERSE 2",
    devanagari: "न मृत्युरासीदमृतं न तर्हि न रात्र्या अह्न आसीत्प्रकेतः ।\nआनीदवातमस्वधया तदेकं तस्माद्धान्यन्न परः किञ्चनास ॥",
    iast: "na mṛtyur āsīd amṛtaṃ na tarhi na rātryā ahna āsīt praketaḥ |\nānīd avātaṃ svadhayā tad ekaṃ tasmād dhānyan na paraḥ kiñcanāsa ||",
    wordByWord: "na (not) mṛtyuḥ (death) āsīt (was) amṛtaṃ (immortality) na (not) tarhi (then); na (not) rātryāḥ (of night) ahnaḥ (of day) āsīt (was) praketaḥ (distinction/sign). ānīt (breathed) avātaṃ (without wind/breath) svadhayā (by its own power) tat ekam (that One); tasmāt (than that) ha anyat (indeed other) na paraḥ kiñcana āsa (nothing else was beyond).",
    literalTranslation: "There was neither death nor immortality then. There was no distinguishing sign of night or day. That One breathed, windless, by its own impulse. Other than that, there was nothing beyond.",
    smoothTranslation: "Death did not exist, nor did immortality. There was no sign to distinguish night from day. 'That One' (Tat Ekam) breathed without wind, sustained by its own inner power. Beyond that, absolutely nothing existed.",
    context: "Here we see the introduction of 'Tat Ekam' (That One), an early formulation of the concept of Brahman. The paradox of 'breathing without breath' illustrates a state of pure potentiality before physical forces existed."
  },
  {
    title: "NĀSADĪYA SŪKTA – VERSE 3",
    devanagari: "तम आसीत्तमसा गूहळमग्रे प्रकेतं सलिलं सर्वमा इदम् ।\nतुच्छ्येनाभ्वपिहितं यदासीत्तपसस्तन्महिनाजायतैकम् ॥",
    iast: "tama āsīt tamasā gūhaḷam agre apraketaṃ salilaṃ sarvam ā idam |\ntucchyenābhv apihitaṃ yad āsīt tapasas tan mahinājāyataikam ||",
    wordByWord: "tamaḥ (darkness) āsīt (was) tamasā (by darkness) gūhaḷam (hidden) agre (in the beginning); apraketaṃ (undistinguished) salilaṃ (water/chaos) sarvam ā idam (all this). tucchyena (by the void) ābhu (the coming into being) apihitaṃ (covered) yat āsīt (which was); tapasaḥ (of heat/austerity) tat (that) mahinā (by the greatness) ajāyata (was born) ekam (the One).",
    literalTranslation: "Darkness was hidden by darkness in the beginning. All this was an undistinguished ocean. That which was coming into being, covered by the void, that One was born through the power of heat (Tapas).",
    smoothTranslation: "In the beginning, there was only darkness concealed within darkness. All of this was an indistinguishable cosmic ocean. That unmanifest One, enveloped by the void, finally emerged through the sheer power of its own Tapas (spiritual heat/concentration).",
    context: "The concept of 'Tapas' here is critical. It implies that the universe was not created through mechanical action, but through an intense concentration or brooding heat of consciousness."
  }
];

const COMPARISON_ROWS = [
  ["Ṛgveda (Nāsadīya)", "Tat Ekam (That One)", "Tapas (Heat/Desire)", "Non-linear / Unclear", "Not explicitly mentioned", "Not explicitly mentioned", "Not explicitly mentioned", "Not mentioned", "Desire arising in the Void", "Philosophical Inquiry"],
  ["Puruṣa Sūkta", "Cosmic Puruṣa", "Sacrifice of Puruṣa", "Cyclical", "Not yet personified", "Not yet personified", "Not yet personified", "Not mentioned", "Cosmic Sacrifice (Yajña)", "Sacrificial / Symbolic"],
  ["Upaniṣads", "Brahman (Sat)", "Manifestation of Space (Ākāśa)", "Secondary to Brahman", "Often equates to Hiraṇyagarbha", "Sometimes equated to Supreme", "Sometimes equated to Supreme", "Sometimes Maya", "Emanation / Projection", "Metaphysical Non-Duality"],
  ["Viṣṇu Purāṇa", "Mahā Viṣṇu", "Mahat (Cosmic Intelligence)", "Eternal aspect of Viṣṇu", "Born from Viṣṇu's navel", "The Supreme Source", "Agent of Dissolution", "Lakṣmī (Energy)", "Yoga Nidrā & Awakening", "Narrative / Devotional"],
  ["Śiva Purāṇa", "Sadāśiva / Para Śiva", "Śakti", "Controlled by Mahākāla", "Agent of Creation", "Agent of Preservation", "The Supreme Source", "Inseparable dynamic half", "Will of Śiva", "Narrative / Devotional"]
];

const TIMELINE_EVENTS = [
  { period: "Early Vedic (c. 1500–1200 BCE)", title: "The Age of Inquiry", desc: "Focus on symbolic sacrifice, the elements, and deep philosophical questioning (e.g., Nāsadīya Sūkta). No rigid cosmography yet." },
  { period: "Upaniṣadic Era (c. 800–500 BCE)", title: "The Shift to Metaphysics", desc: "The focus shifts from external rituals to the internal realization of Brahman. Creation is seen as a projection of a singular consciousness." },
  { period: "Epic Era (c. 400 BCE–400 CE)", title: "The Synthesis", desc: "Mahābhārata and Rāmāyaṇa begin systematizing time cycles (Yugas) and cosmic ages while introducing the Tri-mūrti." },
  { period: "Purāṇic Era (c. 300–1000 CE)", title: "The Great Narratives", desc: "The abstract Brahman is personified. Detailed geographies (Mount Meru, Lokas, Dvīpas) and vast time scales (Kalpas) are meticulously charted." },
  { period: "Siddhāntic Era (c. 400–1200 CE)", title: "Mathematical Astronomy", desc: "Texts like the Sūrya Siddhānta apply rigorous mathematics to calculate eclipses, planetary orbits, and the exact duration of the Yugas." }
];

export function CreationBeforeCreation() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 pb-32 flex flex-col gap-32">
      
      {/* 1. CINEMATIC OPENING */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 block text-center">
          CHAPTER I
        </span>
        <h2 className="font-instrument text-5xl md:text-7xl text-[#0D0D0C] tracking-tight mb-8 text-center leading-[1.1]">
          Creation Before Creation
        </h2>
        
        <div className="prose-custom pt-8">
          <p className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6 italic text-center max-w-3xl mx-auto">
            Imagine a state where absolutely nothing you understand to be real exists.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
            Before there were galaxies, before there were stars, before there was a physical earth to stand upon, what was there? Go further back. Before space existed to hold those galaxies. Before time existed to measure their movement. Before the concepts of "life" and "death" even had meaning.
          </p>
          <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80">
            For thousands of years, ancient Ṛṣis (seers) sat in the Himalayas, closed their eyes, and attempted to witness the absolute beginning. What they documented was not a simplistic story of a man in the sky building the world in a few days. They documented a terrifying, beautiful, and profoundly complex metaphysical state. They documented the state of <strong>Creation before Creation</strong>.
          </p>
        </div>
      </motion.section>

      {/* 2. THE FUNDAMENTAL QUESTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          The Fundamental Question
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          Nearly every ancient civilization possesses a creation myth. They usually begin with a primordial sea, a chaotic monster, or a pantheon of gods battling for supremacy. Hindu scriptures are entirely unique in their approach: rather than mandating a single dogmatic story, they preserve multiple independent, deeply philosophical investigations into the nature of origins.
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-8">
          The Upaniṣads ask: If everything has a cause, what is the uncaused cause? Did time itself exist before the universe, or was time created along with it? If the Ultimate Reality (Brahman) is perfect and complete, why did it desire to create anything at all?
        </p>
        
        <ReflectionBox>
          "If time did not exist before the universe began, then the phrase 'before the universe' is fundamentally meaningless. The Ṛṣis recognized this paradox thousands of years before modern theoretical physics."
        </ReflectionBox>
      </motion.section>

      {/* 3. NĀSADĪYA SŪKTA DEEP ANALYSIS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          The Nāsadīya Sūkta (The Hymn of Creation)
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          Found in the 10th Maṇḍala of the Ṛgveda (RV 10.129), the Nāsadīya Sūkta is widely considered one of the greatest philosophical texts in human history. Composed over 3,000 years ago, it does not offer comforting mythological answers. Instead, it systematically strips away every human assumption about existence.
        </p>
        
        <div className="flex flex-col gap-2">
          {NASADIYA_VERSES.map((verse, idx) => (
            <SanskritVerseBox key={idx} {...verse} />
          ))}
        </div>

        <ScholarNote 
          title="The Paradox of the Final Verse" 
          content={
            <>
              <p className="mb-4">
                The most famous line of the Nāsadīya Sūkta is its conclusion: <em>"He from whom this creation arose, whether he made it or did not make it, the highest seer in the highest heaven, surely he knows... or perhaps even he does not know."</em> (RV 10.129.7)
              </p>
              <p>
                Modern secular scholars often interpret this as early agnosticism or skepticism. However, traditional commentators like Sāyaṇa argue that this is not a statement of ignorance, but a profound theological point: Brahman is so entirely beyond the duality of subject/object knowledge that to say "God knows" limits God to the realm of human cognition. It is an expression of radical transcendence.
              </p>
            </>
          }
        />
      </motion.section>

      {/* 4. HIRANYAGARBHA & PURUSA SUKTA */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-instrument text-3xl text-[#0D0D0C] mb-4">Hiraṇyagarbha</h3>
            <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/80 mb-4">
              Literally translating to the "Golden Embryo" or "Golden Womb," this concept (RV 10.121) describes the universe originating from a singular, radiant source floating in the primordial waters. 
            </p>
            <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/80">
              In later Purāṇic traditions, this directly evolves into the concept of the <strong>Brahmāṇḍa</strong> (the Cosmic Egg) from which the creator deity Brahmā emerges.
            </p>
          </div>
          <div>
            <h3 className="font-instrument text-3xl text-[#0D0D0C] mb-4">The Puruṣa Sūkta</h3>
            <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/80 mb-4">
              Found in RV 10.90, this hymn describes the universe as the result of a cosmic sacrifice (Yajña) of a primordial being (Puruṣa) who has thousands of heads, eyes, and feet.
            </p>
            <p className="font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/80">
              It is heavily symbolic. The "sacrifice" represents the transformation of the unmanifest One into the manifest Many. The moon is born from his mind, the sun from his eyes, and space from his navel.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 5. THE UPANISADIC VIEW */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          The Upaniṣadic View: From Myth to Metaphysics
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          The Upaniṣads move away from the external sacrifices of the Vedas and internalize the cosmos. They state that the ultimate reality is <strong>Brahman</strong>—infinite, non-dual consciousness.
        </p>
        <ul className="list-disc pl-6 font-cormorant text-lg font-light leading-relaxed text-[#0D0D0C]/80 space-y-4 mb-8">
          <li><strong>Chāndogya Upaniṣad:</strong> "In the beginning, my dear, this was Being (Sat) alone, one only without a second." (6.2.1) It explicitly refutes the idea that something could come from nothing (Asat).</li>
          <li><strong>Taittirīya Upaniṣad:</strong> Describes creation as a sequence of emanations: From Brahman came space (Ākāśa), from space came air, from air came fire, from fire came water, and from water came earth.</li>
          <li><strong>Bṛhadāraṇyaka Upaniṣad:</strong> "In the beginning this was Self alone, in the shape of a person (Puruṣa)." Out of loneliness and desire, it split into two, beginning the duality of creation.</li>
        </ul>
      </motion.section>

      {/* 6. THE PURANIC VIEW */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          The Purāṇic View: The Cosmos Personified
        </h2>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          While the Upaniṣads speak in abstract metaphysics, the Purāṇas translate these principles into sweeping, visually stunning narratives. The unmanifest Brahman is personalized as Mahā Viṣṇu, Sadāśiva, or the Supreme Devī, depending on the text.
        </p>
        <p className="font-cormorant text-xl font-light leading-relaxed text-[#0D0D0C]/80 mb-6">
          Before a universe is born, Mahā Viṣṇu lies in a state of cosmic slumber (<strong>Yoga Nidrā</strong>) upon the causal ocean (Garbhodaka). From his pores, countless universes exhale like bubbles. When he breathes back in, they dissolve. Within each bubble, a creator (Brahmā) is born to architect the specific planetary systems. 
        </p>
      </motion.section>

      {/* 7. COMPARISON TABLE */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-6">
          Comparison Between Traditions
        </h2>
        <ComparisonTable 
          headers={["Scripture", "Ultimate Reality", "First Manifestation", "Role of Time", "Role of Brahmā", "Role of Viṣṇu", "Role of Śiva", "Role of Devī", "Mechanism", "Cosmology Type"]}
          rows={COMPARISON_ROWS}
        />
      </motion.section>

      {/* 8. TIMELINE OF THOUGHT */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-2 text-center">
          The Evolution of Cosmological Thought
        </h2>
        <CosmologyTimeline events={TIMELINE_EVENTS} />
      </motion.section>

      {/* 9. COMMON MISCONCEPTIONS */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE_EXPO }}
      >
        <h2 className="font-instrument text-4xl text-[#0D0D0C] tracking-tight mb-2">
          Common Misconceptions
        </h2>
        
        <MythVsScriptureCard 
          myth="Hinduism has a single, definitive creation story that all Hindus must believe."
          scripture="Sanātana Dharma preserves multiple independent creation models (Nāsadīya, Hiraṇyagarbha, Purāṇic, Sāṅkhya). They are viewed as different perspectives of the same incomprehensible truth, not dogmatic competitors."
          source="Ṛgveda (1.164.46) 'Ekam Sat Viprā Bahudhā Vadanti' (Truth is One, the wise call it by many names)."
        />
        
        <MythVsScriptureCard 
          myth="Brahmā is the supreme God who created everything from nothing."
          scripture="Brahmā does not create from nothing. He is an architect (Demiurge) who assembles the universe using pre-existing materials (Prakṛti) provided by the supreme unmanifest reality (Brahman / Viṣṇu / Śiva)."
          source="Bhāgavata Purāṇa (Canto 3)"
        />
      </motion.section>

    </div>
  );
}
