import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE_EXPO = [0.16, 1, 0.3, 1];

function Reveal({ children, delay = 0, y = 16, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 1.2, delay, ease: EASE_EXPO }}
    >
      {children}
    </motion.div>
  );
}

function GrainCanvas() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2280%22_height=%2280%22><filter_id=%22f%22><feTurbulence_type=%22fractalNoise%22_baseFrequency=%220.6%22_numOctaves=%223%22_stitchTiles=%22stitch%22/></filter><rect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23f)%22/></svg>')] bg-repeat"
      />
    </>
  );
}

export function SatyaMithyaCase003() {
  const [scholarNoteExpanded, setScholarNoteExpanded] = useState(false);
  const [activeLexMeaningIdx, setActiveLexMeaningIdx] = useState(null);
  const [historyBackgroundExpanded, setHistoryBackgroundExpanded] = useState(false);
  const [translationNoteExpanded, setTranslationNoteExpanded] = useState(false);

  // Scriptural Timeline State
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);
  const [timelineNoteExpanded, setTimelineNoteExpanded] = useState(false);
  const [scriptureUpanishadScholarNoteOpen, setScriptureUpanishadScholarNoteOpen] = useState(false);

  // Philosophical State
  const [activePhilCard, setActivePhilCard] = useState('Advaita');
  const [philScholarNoteOpen, setPhilScholarNoteOpen] = useState(false);

  // Temple Tradition State
  const [activeJourneyIdx, setActiveJourneyIdx] = useState(0);
  const [activeTempleQuestionIdx, setActiveTempleQuestionIdx] = useState(null);
  const [templeOriginExpanded, setTempleOriginExpanded] = useState(false);
  const [templeScholarNoteOpen, setTempleScholarNoteOpen] = useState(false);

  // Historical Timeline State
  const [activeHistoryIdx, setActiveHistoryIdx] = useState(0);
  const [historyScholarNoteOpen, setHistoryScholarNoteOpen] = useState(false);

  // Verdict Transparency State
  const [transparencyExpanded, setTransparencyExpanded] = useState(false);

  // Final Reflection State
  const [trackerVisible, setTrackerVisible] = useState(true);
  const [showClosingButton, setShowClosingButton] = useState(false);

  const sidebarSteps = [
    { label: 'Claim Identified', checked: true },
    { label: 'Language Investigation', checked: true },
    { label: 'Scriptural Evidence', checked: true },
    { label: 'Philosophical Investigation', checked: true },
    { label: 'Temple Tradition', checked: true },
    { label: 'Historical Development', checked: true },
    { label: 'Final Verdict', checked: true }
  ];

  const investigationQuestions = [
    {
      num: 'Question 1',
      text: 'Do Hindus worship physical objects?',
      status: 'Under Investigation'
    },
    {
      num: 'Question 2',
      text: 'Do Hindus believe the stone itself is God?',
      status: 'Under Investigation'
    },
    {
      num: 'Question 3',
      text: 'Is "idol" an accurate translation of Sanskrit words like Mūrti and Pratimā?',
      status: 'Under Investigation'
    },
    {
      num: 'Question 4',
      text: 'What do the earliest scriptures describe?',
      status: 'Under Investigation'
    },
    {
      num: 'Question 5',
      text: 'How did temple image worship develop?',
      status: 'Under Investigation'
    },
    {
      num: 'Question 6',
      text: 'How do different Hindu philosophical schools understand sacred images?',
      status: 'Under Investigation'
    }
  ];

  const sanskritVocabulary = [
    {
      sanskrit: 'मूर्ति',
      iast: 'Mūrti',
      literal: 'Form • Embodiment • Manifestation',
      usage: 'Represents a visible manifestation or embodied form of a cosmic principle.',
      whyDiffers: 'Unlike "idol" which denotes a substitute object of worship, Mūrti denotes the active embodiment of a principle or consciousness, serving as a medium, not the end target.'
    },
    {
      sanskrit: 'प्रतिमा',
      iast: 'Pratimā',
      literal: 'Likeness • Representation • Counterpart',
      usage: 'Creating a visual reflection, likeness, or similarity.',
      whyDiffers: 'It functions as an analog or symbol of that which is formless, serving as a reflection (Pratibimba), whereas "idol" historically implies a separate, localized false deity.'
    },
    {
      sanskrit: 'विग्रह',
      iast: 'Vigraha',
      literal: 'Distinct Form • Embodied Form',
      usage: 'Used to describe the physical focus or structure of a deity.',
      whyDiffers: 'Vigraha implies a body chosen by or configured for a divine energy (as in the temple Vigraha), representing a reception vessel rather than a mere inanimate statue.'
    },
    {
      sanskrit: 'अर्चा',
      iast: 'Arcā',
      literal: 'Worshipful Form • Object of Reverence',
      usage: 'Specifies the form of the supreme Lord designated for worship and personal relation (Arcā-vigraha).',
      whyDiffers: 'It emphasizes the relationship and reverence exchange between the devotee and the form, rather than characterizing the object as a false rival to a true god.'
    },
    {
      sanskrit: 'बिम्ब',
      iast: 'Bimba',
      literal: 'Reflection • Image • Resemblance',
      usage: 'The original source (Bimba) reflecting its form in a mirror or water (Pratibimba).',
      whyDiffers: 'Bimba refers directly to the source that projects the image, emphasizing that the physical representation is merely a reflection pointing back to the ultimate reality.'
    }
  ];

  const scripturalTimeline = [
    {
      label: 'Vedas',
      heading: 'The Earliest Layer',
      classification: 'Vedas Saṃhitās (Śruti)',
      verse: 'यज्ञेन यज्ञमयजन्त देवास्तानि धर्माणि प्रथमान्यासन् ।\nते ह नाकं महिमानः सचन्त यत्र पूर्वे साध्याः सन्ति देवाः ॥',
      iast: 'yajñena yajñam ayajanta devās tāni dharmāṇi prathamāny āsan |\nte ha nākaṃ mahimānaḥ sacanta yatra pūrve sādhyāḥ santi devāḥ ||',
      translation: '"By means of sacrifice, the gods offered sacrifice to the sacrifice; these were the first establishers of Dharma. These mighty forces reached the heavens, where the ancient gods and beings dwell."',
      citation: 'Ṛgveda Saṃhitā 1.164.50',
      desc: 'The earliest Vedic tradition centred primarily around yajña (sacrificial worship), sacred fire (Agni), mantra, and offerings. There is no developed system of temple image worship in the earliest Vedic Saṁhitās.',
      finding: 'The earliest Vedic tradition primarily approaches the divine through sacred sound, fire, and ritual—not through permanent temple icons.',
      whyMatters: 'Demonstrates that early Vedic worship was based on dynamic sacrificial exchange (yajña) and sacred action, rather than concrete visual icons housed in temples. However, we avoid absolute statements such as "the Vedas never mention images", since representations are sometimes alluded to poetically.'
    },
    {
      label: 'Upanishads',
      heading: 'From Ritual to Realisation',
      classification: 'Upanishads (Śruti)',
      verse: 'यत्तदद्रेश्यमग्राह्यमगोत्रमवर्णमचक्षुःश्रोत्रं तदपाणिपादम् ।\nनित्यं विभुं सर्वगतं सुसूक्ष्मं तदव्ययं यद्भूतयोनिं परिपश्यन्ति धीराः ॥',
      iast: 'yat tad adreśyam agrāhyam agotram avarṇam acakṣuḥ-śrotraṃ tad apāṇi-pādam |\nnityaṃ vibhuṃ sarva-gataṃ susūkṣmaṃ tad avyayaṃ yad bhūta-yoniṃ paripaśyanti dhīrāḥ ||',
      translation: '"That which is invisible, ungraspable, without lineage, without caste, without eyes or ears, without hands or feet; which is eternal, all-pervading, omnipresent, exceedingly subtle; that is the imperishable source of all creation which the wise perceive."',
      citation: 'Muṇḍaka Upaniṣad 1.1.6',
      desc: 'The Upanishads increasingly emphasize the nature of Brahman, the Self (Ātman), and the formless Absolute (Nirguṇa Brahman). They focus primarily on philosophical realization rather than prescribing temple worship.',
      finding: 'The Upanishadic layer shifts emphasis away from physical action and outer rituals toward deep meditative contemplation of the formless Supreme.',
      whyMatters: 'Shifts focus from physical objects or outer actions to meditative realization of the formless supreme essence. The Upanishads do not present a detailed theology of image worship, nor do they explicitly prohibit it.'
    },
    {
      label: 'Bhagavad Gītā',
      heading: 'The Personal and the Formless',
      classification: 'Itihāsa / Smṛti',
      verse: 'क्लेशोऽधिकतरस्तेषामव्यक्तासक्तचेतसाम् ।\nअव्यक्ता हि गतिर्दुःखं देहवद्भिरवाप्यते ॥',
      iast: 'kleśo \'dhikataras teṣām avyaktāsakta-cetasām |\navyaktā hi gatir duḥkhaṃ dehavadbhir avāpyate ||',
      translation: '"For those whose minds are attached to the unmanifest, the struggle is greater; for the path of the unmanifest is difficult to attain for embodied beings."',
      citation: 'Bhagavad Gītā 12.5',
      desc: 'The Bhagavad Gītā introduces an important balance. Krishna acknowledges both the worship of the unmanifest (Avyakta) and devotion directed toward the personal Divine (Saguṇa), validating both paths.',
      finding: 'Krishna describes the path of the unmanifest as more difficult for embodied humans, affirming the psychological utility of focusing on a manifest, personal form.',
      whyMatters: 'Acknowledges both formless and personal worship as valid but highlights that focusing on a manifest personal form is more accessible for human psychology. Kṛṣṇa does not reject one in favor of the other.'
    },
    {
      label: 'Āgamas',
      heading: 'The Temple Tradition Emerges',
      classification: 'Āgamas / Tantras',
      verse: 'मूर्तिकल्पना च कर्तव्या देवस्यावयवैः सह ।\nतत्तच्छास्त्रोक्तमार्गेण कल्पयेत्तु विधानतः ॥',
      iast: 'mūrtikalpanā ca kartavyā devasyāvayavaiḥ saha |\ntattacchāstroktamārgeṇa kalpayettu vidhānataḥ ||',
      translation: '"One should construct the forms (Mūrti) of the deity with all their limbs, in strict accordance with the rules laid down in the scriptures (Śāstras)."',
      citation: 'Kāraṇa Āgama, Kriyā Pāda 11.2',
      desc: 'Unlike the Vedas, the Āgamas explicitly systematize temple worship, sacred architecture, iconography (Pratimā-lakṣaṇa), daily rituals, and consecrated images.',
      finding: 'The Āgamas serve as the practical and ritual manuals that codify how cosmic energy is consecrated (Prāṇa Pratiṣṭhā) into visual stone or metal mediums.',
      whyMatters: 'These texts became the core manuals governing Hindu temple construction and daily liturgy. They bridge abstract philosophy and physical ritual practice.'
    },
    {
      label: 'Purāṇas',
      heading: 'Devotion Becomes Accessible',
      classification: 'Purāṇas (Smṛti)',
      verse: 'मनोमयः प्राणमयः सङ्कल्पो यस्य रूपिणः ।\nतस्य ध्यानं प्रकुर्वीत मूर्तीनां च प्रपूजनम् ॥',
      iast: 'manomayaḥ prāṇamayaḥ saṅkalpo yasya rūpiṇaḥ |\ntasya dhyānaṃ prakurvīta mūrtīnāṃ ca prapūjanam ||',
      translation: '"He who is the embodiment of mind, breath, and will—of that Divine, one should perform meditation and offer worship to His sacred forms (Mūrtīs)."',
      citation: 'Bhāgavata Purāṇa 11.27.12',
      desc: 'The Purāṇas popularize devotion (Bhakti), pilgrimage (Tīrtha), temple worship, festivals, and sacred narratives, integrating image worship deeply into lived everyday practice.',
      finding: 'Purāṇic texts democratized worship by making personal connection through sacred images accessible to all members of society.',
      whyMatters: 'They present image worship as a highly effective, emotional path to the Divine, but never state it is the only legitimate form of spiritual practice.'
    }
  ];

  const philosophySchools = [
    {
      id: 'Advaita',
      title: 'Advaita Vedānta',
      summary: 'Non-dualistic realization of formless Absolute.',
      explanation: 'Ultimate reality is Nirguṇa Brahman—devoid of attributes, name, or form. In this school, Mūrti worship is accepted as a valuable practical aid (Sādhana) for concentration, mind purification, and spiritual growth. The visual representation serves as a step to focus human consciousness, ultimately leading toward the realization of the identity of the inner Self (Ātman) with the formless, infinite Brahman.'
    },
    {
      id: 'Visistadvaita',
      title: 'Viśiṣṭādvaita',
      summary: 'Qualified non-dualism where the Divine truly manifests.',
      explanation: 'The Divine (Īśvara/Viṣṇu) is characterized by infinite qualities (Saguṇa Brahman). Consecrated forms are not mere symbolic representations; rather, the Divine truly manifests through them. The Arcā (sacred image) is understood as a genuine and gracious mode of manifestation (Arcāvatāra) through which the infinite Lord becomes physically accessible out of compassion for the devotee.'
    },
    {
      id: 'Dvaita',
      title: 'Dvaita',
      summary: 'Eternally distinct Devotion to the Transcendent Lord.',
      explanation: 'God (Hari) and the individual souls (Jīvas) remain eternally distinct and separate. Devotion (Bhakti) is the sole path of liberation. Sacred temple images serve as authentic, scripture-mandated focal points to direct love, service, and meditation to the transcendent Lord, who resides within the image as a guide while remaining distinct from the material structure.'
    },
    {
      id: 'Shaiva',
      title: 'Śaiva Traditions',
      summary: 'Immanent and Transcendent presence of Śiva.',
      explanation: 'Across various Śaiva schools (like Śaiva Siddhānta or Kashmir Śaivism), the sacred image (such as the Śivaliṅga or Natarāja) is understood as a direct means of divine presence, recognition, or transmission of grace (Anugraha). The physical image acts as a channel that bridges the manifest (Saguṇa) and unmanifest (Nirguṇa) dimensions of Paramāśiva.'
    },
    {
      id: 'Shakta',
      title: 'Śākta Traditions',
      summary: 'Sacredness of all manifest energy (Śakti).',
      explanation: 'The Divine Mother (Devī/Śakti) is the ultimate reality and dynamic creator of the universe. She is worshipped through anthropomorphic images, natural elements, or highly sophisticated geometric diagrams called Yantras (such as the Śrī Yantra). This approach emphasizes that all physical forms are expressions of Her dynamic energy, validating manifestation itself as sacred.'
    }
  ];

  const templeJourney = [
    {
      stage: '1. Stone',
      title: 'Raw Material Selection',
      desc: 'Sthapatis (traditional architects/sculptors) select stone based on resonance, density, and structural parameters detailed in the Śilpa Śāstras.'
    },
    {
      stage: '2. Sculpture',
      title: 'Aesthetic Carving',
      desc: 'The stone is carved to align its dimensions with strict geometric grids (Tālamāna). At this stage, it is an artistic object, not a sacred icon.'
    },
    {
      stage: '3. Consecration',
      title: 'Prāṇa Pratiṣṭhā',
      desc: 'Through a multi-day ceremony of purifications, mantras, fire offerings (Homa), and opening of the eyes (Netronmīlana), the Divine presence is invoked into the form.'
    },
    {
      stage: '4. Temple Ritual',
      title: 'Sacred Placement',
      desc: 'The Mūrti is installed in the Garbhagṛha (sanctum sanctorum), which is designed as a miniature representation of the cosmos.'
    },
    {
      stage: '5. Daily Worship',
      title: 'Nitya Pūjā',
      desc: 'Ongoing rituals (bathing, dressing, offering food) maintain the consecrated status, treating the form as a living, revered guest.'
    },
    {
      stage: '6. Festival Processions',
      title: 'Utsava Manifestation',
      desc: 'Mobile metal counterparts (Utsava-mūrtis) exit the temple sanctuary to bless and interact with the wider public in chariot festivals (Rathayātrās).'
    },
    {
      stage: '7. Retirement / Visarjana',
      title: 'De-consecration',
      desc: 'If a form is damaged, or during seasonal festivals, de-consecration is performed, dissolving the temporary vessel back into the formless source.'
    }
  ];

  const templeInvestigation = [
    {
      q: 'Do Hindus believe every statue is sacred?',
      a: 'No. Traditional Hindu theology strictly differentiates between ordinary decorative sculpture, museum artworks, unfinished images, and ritually consecrated temple Mūrtis. A statue only holds sacred status within temple practice after completing the rigorous Prāṇa Pratiṣṭhā consecration.'
    },
    {
      q: 'Why are Mūrtis consecrated?',
      a: 'The consecration ceremonies are meant to prepare the physical form as an active conduit or reception vessel for divine energy, aligning the micro-elements of the statue with the macro-elements of the cosmos, allowing the infinite to become manifest in a localized space.'
    },
    {
      q: 'Can a Mūrti stop being worshipped?',
      a: 'Yes. If a permanent stone Mūrti becomes chipped or broken, the Agamas state that the divine presence must be ritually withdrawn (de-consecrated). The damaged physical vessel is then retired, often by immersion in water. Similarly, temporary clay Mūrtis used in festivals are explicitly de-consecrated via Visarjana and dissolved back into nature.'
    },
    {
      q: 'Why are daily rituals performed?',
      a: 'Temple traditions understand ritual (Pūjā) as an ongoing expression of relationship and reverence. Rather than merely pleading for boons, the rituals represent hospitality—treating the manifest presence with food, water, clothing, and music. Different schools offer distinct theological justifications for these practices.'
    }
  ];

  const historicalTimeline = [
    {
      label: 'Ancient India',
      title: 'Diverse Local Coexistence',
      desc: 'Within early India, different forms of worship coexisted dynamically. Fire sacrifice (yajña) and mantra recitation formed the liturgical core of early texts, while meditation, household offerings, and regional pilgrimage networks developed alongside them. There was no single universal practice or single uniform term for visual representations.'
    },
    {
      label: 'Cross-Cultural Contacts',
      title: 'First Foreign Records',
      desc: 'Early travellers from Greece, Rome, China, and elsewhere documented unfamiliar visual and physical representations. Lacking equivalent vocabulary in their own native tongues, they translated these practices using approximate domestic terms like "statues of the gods", mapping unfamiliar conceptual schemas to their home categories.'
    },
    {
      label: 'Islamic Period',
      title: 'Semitic Categorization',
      desc: 'Persian and Arabic chroniclers documenting India encountered temple practices. Translators frequently translated the Sanskrit word "Mūrti" to equivalent terms like "but" or "ṣanam" (historically referencing statues or figures in Semitic languages). This mapped the practice to local theological descriptions of physical imagery.'
    },
    {
      label: 'European Travellers',
      title: 'Occidental Terminology',
      desc: 'Portuguese, French, and English merchants and travelers documented temple images. In early Western theological systems, the term "idol" was standard to describe any sacred image used outside Abrahamic traditions. This term was applied broadly to Mūrtis, introducing an evaluative frame.'
    },
    {
      label: 'Colonial Scholarship',
      title: 'Textual Translation Standardization',
      desc: 'Scholars in the 18th and 19th centuries translated Sanskrit texts into Western languages. For linguistic convenience, Mūrti and Pratimā were translated as "idol" in bilingual dictionaries and editions, standardizing the vocabulary for future academic and popular references.'
    },
    {
      label: 'Modern Textbooks',
      title: 'Institutional Shorthand',
      desc: 'Simplified translations and institutional shorthand entered school curricula, popular encyclopedias, and historical surveys. The phrase "idol worship" became a standard descriptive label, bypassing Sanskrit semantic context in popular education.'
    },
    {
      label: 'Internet & Media',
      title: 'Unexamined Repeating',
      desc: 'In modern television, digital forums, debates, and search engine summaries, the description is repeated as a literal fact. Most contemporary users repeat the shorthand without reviewing the etymology of "idol" or the theological categories of the original tradition.'
    }
  ];

  // Verdict details
  const whyVerdictCards = [
    { title: 'Language', desc: 'There is no exact Sanskrit equivalent of the English theological word "idol."' },
    { title: 'Scripture', desc: 'Different scriptural layers describe worship in different ways, from Vedic ritual to later temple traditions.' },
    { title: 'Philosophy', desc: 'Hindu schools do not all explain sacred images in the same way.' },
    { title: 'Temple Practice', desc: 'Temple traditions distinguish between ordinary material objects and ritually consecrated Mūrtis.' },
    { title: 'History', desc: 'The modern expression developed through centuries of translation, cultural interaction and popular repetition.' },
    { title: 'Overall', desc: 'The phrase captures only a small part of a much larger and more nuanced tradition.' }
  ];

  const whatWeLearned = [
    'Translation shapes understanding.',
    'Sanskrit concepts cannot always be reduced to one English word.',
    'Hindu scriptures developed across many centuries.',
    'Different philosophical schools interpret sacred images differently.',
    'Temple worship is rooted in ritual theology rather than simple object worship.',
    'Context is essential before drawing conclusions.'
  ];

  const tattvaPrinciples = [
    'Read the original source.',
    'Understand the historical context.',
    'Study the language carefully.',
    'Distinguish scripture from later tradition.',
    'Recognize diversity within Hindu thought.',
    'Allow evidence—not assumptions—to shape conclusions.'
  ];

  const finalKnowledgeNetwork = [
    { number: 'Case File 001', title: 'Bhagavad Gītā & War', status: 'completed' },
    { number: 'Case File 002', title: '33 Crore Gods', status: 'completed' },
    { number: 'Case File 003', title: 'Hinduism Worships Idols?', status: 'current' },
    { number: 'Case File 004', title: 'Ṛgveda & Viṣṇu', status: 'coming' },
    { number: 'Case File 005', title: 'Karma = Fate?', status: 'coming' },
    { number: 'Case File 006', title: 'Gītā & Caste', status: 'coming' }
  ];

  const archivedCases = [
    { number: 'CASE FILE 001', title: 'Does the Bhagavad Gītā Teach War?', id: 'does-gita-teach-war' },
    { number: 'CASE FILE 002', title: 'Are There Really 33 Crore Gods?', id: 'are-there-really-33-crore-gods' }
  ];

  const relatedTattvaCards = [
    {
      pill: 'TATTVA Library',
      title: 'Structure of the Universe',
      desc: 'Visualizes the spatial lokas and structural levels governed by cosmic deities.',
      link: '/library/the-architecture-of-the-cosmos'
    },
    {
      pill: 'TATTVA Library',
      title: 'Creation (Sṛṣṭi)',
      desc: 'Investigates how form emerges from the infinite formless absolute Brahman.',
      link: '/library/srsthi'
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#F4EFE6] text-[#1C1C1A] font-sans antialiased overflow-x-hidden pb-32">
      <GrainCanvas />

      {/* HORIZONTAL NAVIGATION BAR */}
      <nav className="absolute top-9 left-9 md:top-11 md:left-13 z-50 flex items-center gap-12 lg:gap-16 select-none">
        <Link to="/" className="block">
          <div className="cursor-default">
            <div className="relative flex flex-col justify-center items-center" style={{ width: '130px', height: '40px' }}>
              <div className="relative w-full h-full flex items-center justify-center">
                <span
                  style={{
                    position: 'absolute',
                    fontFamily: 'Cormorant, serif',
                    fontSize: '13px',
                    letterSpacing: '0.45em',
                    textTransform: 'uppercase',
                    fontWeight: 300,
                    color: '#1C1C1A',
                    opacity: 0.6
                  }}
                  className="hover:opacity-100 transition-opacity duration-600"
                >
                  TATTVA
                </span>
              </div>
            </div>
          </div>
        </Link>
        
        <Link to="/inquiry" className="group flex items-center">
          <span 
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#1C1C1A]/50 group-hover:text-[#C58B52]"
          >
            INQUIRY ARCHIVE
          </span>
        </Link>

        <Link to="/library" className="group flex items-center">
          <span 
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#1C1C1A]/50 group-hover:text-[#C58B52]"
          >
            TATTVA LIBRARY
          </span>
        </Link>

        <Link to="/satya-mithya" className="group flex items-center">
          <span 
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#9E2A2B]"
          >
            SATYA & MITHYĀ
          </span>
        </Link>

<Link to="/the-origin" className="group flex items-center">
  <span 
    className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#E9E2D4]/50 group-hover:text-[#C58B52]"
  >
    THE ORIGIN
  </span>
</Link>
      </nav>

      {/* STICKY EVIDENCE SIDEBAR PANEL */}
      <aside className={`hidden lg:flex flex-col fixed right-12 top-40 w-64 border-l border-[#C58B52]/20 pl-6 z-20 transition-all duration-1000 ${trackerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
        <span className="font-general text-[9px] uppercase tracking-[0.25em] text-[#C58B52] block mb-4 font-bold">
          Evidence Tracker
        </span>
        <div className="border border-[#C58B52]/30 bg-white/50 p-4 shadow-sm flex flex-col gap-3">
          <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#1C1C1A]/50 font-bold">
            Case File #003 Status
          </span>
          <div className="flex flex-col gap-2.5">
            {sidebarSteps.map((step, idx) => {
              const isActive = idx === 6; // Final Verdict is active/completed
              return (
                <div key={idx} className={`flex items-center gap-2 ${step.checked || isActive ? 'opacity-100' : 'opacity-45'}`}>
                  <span className={`text-xs ${isActive ? 'text-[#9E2A2B] font-bold' : step.checked ? 'text-[#9E2A2B] font-bold' : 'text-[#1C1C1A]/30'}`}>
                    {step.checked ? '✓' : isActive ? '●' : '□'}
                  </span>
                  <span className={`font-cormorant text-xs ${isActive ? 'text-[#9E2A2B] font-bold scale-105 origin-left' : 'text-[#1C1C1A]/70'}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="border-t border-[#C58B52]/20 pt-3 mt-2 flex flex-col gap-2">
            <div className="flex justify-between items-center text-[8px] font-general uppercase tracking-wider">
              <span className="text-[#1C1C1A]/40">Active Phase:</span>
              <span className="text-[#9E2A2B] font-bold truncate">
                Final Verdict
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-3 font-bold">
            Archived Cases
          </span>
          <div className="flex flex-col gap-3">
            {archivedCases.map((c, i) => (
              <Link key={i} to={`/satya-mithya/${c.id}`} className="group block">
                <span className="font-general text-[7px] text-[#9E2A2B] block">
                  {c.number}
                </span>
                <span className="font-instrument text-xs text-[#1C1C1A]/70 group-hover:text-[#1C1C1A] transition-colors leading-tight block">
                  {c.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </aside>

      <div className="w-full max-w-3xl mx-auto px-6 pt-44 relative z-10 flex flex-col">
        
        {/* HERO SECTION */}
        <section id="section-hero" className="mb-12 border-b border-[#C58B52]/20 pb-16">
          <motion.div
            className="flex flex-col text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: EASE_EXPO }}
          >
            <span className="font-general text-[10px] uppercase tracking-[0.45em] text-[#9E2A2B] mb-4 font-bold">
              INVESTIGATIVE ARCHIVE
            </span>
            <h1 className="font-instrument text-5xl md:text-7xl lg:text-8xl text-[#1C1C1A] tracking-tight leading-none mb-6">
              Hinduism Worships Idols?
            </h1>
            <p className="font-cormorant text-lg md:text-xl font-light italic text-[#1C1C1A]/60 max-w-xl mx-auto leading-relaxed mb-8">
              Investigating one of the oldest and most misunderstood claims about Sanātana Dharma.
            </p>
          </motion.div>

          <Reveal>
            <div className="border border-[#C58B52]/30 bg-white/40 p-6 md:p-8 relative mt-6">
              <span className="absolute -top-3 left-6 bg-[#9E2A2B] text-white px-3 py-0.5 font-general text-[7.5px] uppercase tracking-[0.2em] font-bold">
                CASE FILE #003
              </span>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2 mb-6">
                <div>
                  <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#1C1C1A]/40 block mb-1">
                    Claim Under Review
                  </span>
                  <h2 className="font-instrument text-2xl md:text-3xl text-[#1C1C1A] font-semibold leading-tight">
                    "Hinduism Worships Idols."
                  </h2>
                </div>
                <div className="flex items-center gap-2 border border-[#9E2A2B]/30 bg-[#9E2A2B]/5 px-3 py-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  <span className="font-general text-[8.5px] uppercase tracking-wider text-green-700 font-bold">
                    RESOLVED
                  </span>
                </div>
              </div>
              <p className="font-cormorant text-lg text-[#1C1C1A]/85 leading-relaxed font-light mb-4">
                For centuries, one statement has been repeated across books, debates, documentaries and everyday conversations: "Hindus worship idols." To some people, the statement sounds obvious. To others, it sounds offensive. But before asking whether it is true or false, we must first ask a more fundamental question.
              </p>
              <p className="font-cormorant text-lg text-[#1C1C1A]/85 leading-relaxed font-light">
                What exactly does the word "idol" mean? And is that the same idea conveyed by the Sanskrit texts and traditions? This investigation does not begin with belief. It begins with language, history, scripture and evidence.
              </p>
            </div>
          </Reveal>
        </section>

        {/* SECTION I: BREAKING THE CLAIM */}
        <section id="section-breaking" className="py-12 border-b border-[#C58B52]/20">
          <Reveal>
            <h3 className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] mb-3 block font-bold">
              INVESTIGATION METHODOLOGY
            </h3>
            <h2 className="font-instrument text-3xl text-[#1C1C1A] mb-8">
              Breaking the Claim
            </h2>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              To investigate this statement objectively, we cannot treat it as a single, simple concept. Instead, we must decompose the claim into six core investigation targets.
            </p>
          </Reveal>

          {/* Six Investigation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 select-none">
            {investigationQuestions.map((q, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="border border-[#C58B52]/20 bg-white/40 p-5 flex flex-col justify-between min-h-[140px]">
                  <div>
                    <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-widest mb-1.5 font-bold">
                      {q.num}
                    </span>
                    <h4 className="font-instrument text-base font-semibold text-[#1C1C1A] leading-tight">
                      {q.text}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                    <span className="font-general text-[8px] uppercase tracking-wider text-green-700 font-bold">
                      RESOLVED
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* SCHOLAR NOTE */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-5">
              <button
                onClick={() => setScholarNoteExpanded(!scholarNoteExpanded)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#9E2A2B] text-xs">◆</span>
                  <span className="font-instrument text-base font-bold text-[#1C1C1A]">
                    Scholar Note • Why Definitions Matter
                  </span>
                </div>
                <span className="font-general text-[8.5px] uppercase tracking-widest text-[#C58B52]">
                  {scholarNoteExpanded ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                </span>
              </button>

              <AnimatePresence>
                {scholarNoteExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-[#C58B52]/20 mt-3 pt-3 text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light"
                  >
                    Many disagreements begin because people use the same word to mean different things. The English word "idol" carries historical and theological meanings that may not perfectly correspond to Sanskrit terms such as Mūrti, Pratimā, Vigraha or Arcā. Before investigating Hindu worship, we must first investigate the language itself.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </section>

        {/* SECTION II: THE LANGUAGE INVESTIGATION */}
        <section id="section-word" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION I • LINGUISTICS
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              The Language Investigation
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              Does Sanskrit even contain a word equivalent to the English word "idol"?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              Imagine translating an ancient civilization using modern vocabulary. One incorrect translation can completely reshape how an entire tradition is understood. That is why this investigation begins with language. The English word "idol" has a long history and carries specific religious assumptions. Ancient Sanskrit literature, however, uses several different words—each with its own meaning, context and philosophical depth. Before investigating worship itself, it is necessary to examine the words.
            </p>
          </Reveal>

          {/* THE WORD IDOL DISPLAY CARD */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-white/40 p-8 text-center max-w-lg mx-auto rounded-sm">
              <span className="font-general text-[7px] text-[#C58B52] block tracking-widest uppercase mb-1">English Term</span>
              <div className="font-instrument text-5xl text-[#9E2A2B] font-bold my-4">
                Idol
              </div>
              <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed mb-4 text-left">
                The English word "idol" derives from the Greek word <strong>eidōlon</strong>, meaning image, appearance or representation. Over time, especially in Jewish, Christian and Islamic theological literature, the word acquired a much narrower meaning. It came to describe the worship of false gods or mistaken objects of devotion. This historical meaning is important because it already carries a theological judgement before any investigation begins.
              </p>
              
              <div className="border-t border-[#C58B52]/20 pt-4 text-left">
                <button
                  onClick={() => setHistoryBackgroundExpanded(!historyBackgroundExpanded)}
                  className="font-general text-[8px] uppercase tracking-widest text-[#9E2A2B] hover:underline focus:outline-none"
                >
                  {historyBackgroundExpanded ? '[ Collapse Historical Background ]' : '[ Expand Historical Background ]'}
                </button>

                <AnimatePresence>
                  {historyBackgroundExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 text-xs font-cormorant text-[#1C1C1A]/65 leading-relaxed font-light"
                    >
                      Historically, the Greek term <em>eidōlon</em> designated any phantom, mental image, or reflection. In the translation of theological texts into Western languages, the term was chosen to translate Semitic words referencing forbidden representations. Consequently, the word "idol" became synonymous with spiritual error and false representation, acquiring an evaluative charge rather than remaining a neutral descriptive term.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          {/* THE SANSKRIT VOCABULARY FIVE CARDS */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Sanskrit Concept Repository
            </span>
            
            <div className="flex flex-col gap-4 max-w-xl mx-auto select-none">
              {sanskritVocabulary.map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/20 bg-white/40">
                  <button
                    onClick={() => setActiveLexMeaningIdx(activeLexMeaningIdx === idx ? null : idx)}
                    className="w-full p-5 flex justify-between items-center text-left focus:outline-none"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="font-instrument text-2xl text-[#9E2A2B] font-bold leading-none">
                        {item.sanskrit}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-general text-[10px] uppercase tracking-wider text-[#1C1C1A] font-bold">
                          {item.iast}
                        </span>
                        <span className="font-cormorant text-xs text-[#1C1C1A]/60 italic mt-0.5">
                          {item.literal}
                        </span>
                      </div>
                    </div>
                    <span className="text-[#C58B52]/50 text-xs">
                      {activeLexMeaningIdx === idx ? '▲' : '▼'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {activeLexMeaningIdx === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-[#C58B52]/10 p-5 bg-[#F4EFE6]/30 text-xs font-cormorant leading-relaxed"
                      >
                        <div className="mb-3">
                          <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-widest mb-1">Traditional Usage</span>
                          <p className="text-[#1C1C1A]/80 font-light">{item.usage}</p>
                        </div>
                        <div>
                          <span className="font-general text-[7px] text-[#9E2A2B] block uppercase tracking-widest mb-1 font-bold">Why it differs from "idol"</span>
                          <p className="text-[#1C1C1A]/80 font-light">{item.whyDiffers}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Reveal>

          {/* LANGUAGE COMPARISON */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/20 bg-white/30 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-6 text-center font-bold">
                Linguistic Comparison Framework
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {/* English Column */}
                <div className="flex flex-col text-center">
                  <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest mb-1">English Stack</span>
                  <span className="font-instrument text-2xl font-bold text-[#1C1C1A] mb-3">Idol</span>
                  <div className="text-xs text-[#C58B52]/40 mb-3">↓</div>
                  <div className="flex flex-col gap-2 font-cormorant text-sm text-[#1C1C1A]/75 font-light">
                    <div className="py-1 border-b border-[#C58B52]/5">Often implies a false deity</div>
                    <div className="py-1 border-b border-[#C58B52]/5">Associated with mistaken worship</div>
                    <div className="py-1">Carries a pre-conceived theological judgement</div>
                  </div>
                </div>

                {/* Sanskrit Column */}
                <div className="flex flex-col text-center border-t md:border-t-0 md:border-l border-[#C58B52]/20 pt-6 md:pt-0 md:pl-8">
                  <span className="font-general text-[7px] text-[#9E2A2B] uppercase tracking-widest mb-1 font-bold">Sanskrit Stack</span>
                  <span className="font-instrument text-2xl font-bold text-[#9E2A2B] mb-3">Mūrti</span>
                  <div className="text-xs text-[#9E2A2B]/30 mb-3">↓</div>
                  <div className="flex flex-col gap-2 font-cormorant text-sm text-[#1C1C1A]/75 font-light">
                    <div className="py-1 border-b border-[#C58B52]/5">Means physical form or manifestation</div>
                    <div className="py-1 border-b border-[#C58B52]/5">Indicates active divine embodiment</div>
                    <div className="py-1">Serves as a visible representation of formless Brahman</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#C58B52]/10 pt-4 mt-6 text-center">
                <p className="font-cormorant text-[11px] text-[#1C1C1A]/50 italic">
                  Note: Neither language is superior. Words from different civilizations simply carry distinct historical assumptions and cultural contexts.
                </p>
              </div>
            </div>
          </Reveal>

          {/* TRANSLATION SCHOLAR NOTE */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-5">
              <button
                onClick={() => setTranslationNoteExpanded(!translationNoteExpanded)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#9E2A2B] text-xs">◆</span>
                  <span className="font-instrument text-base font-bold text-[#1C1C1A]">
                    Editorial Note • Why Translation Matters
                  </span>
                </div>
                <span className="font-general text-[8.5px] uppercase tracking-widest text-[#C58B52]">
                  {translationNoteExpanded ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                </span>
              </button>

              <AnimatePresence>
                {translationNoteExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-[#C58B52]/20 mt-3 pt-3 text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light"
                  >
                    No single English word perfectly captures the full meaning of every Sanskrit concept. Words such as Dharma, Karma, Yoga, Ātman and Mūrti all require careful contextual translation. Reducing Mūrti to "idol" without explanation risks losing important philosophical and ritual distinctions.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* MYTH VS LANGUAGE PANEL */}
          <Reveal className="my-8">
            <div className="border border-[#9E2A2B]/30 bg-[#9E2A2B]/2 p-6">
              <div className="flex justify-between items-baseline mb-4">
                <span className="font-general text-[8.5px] uppercase tracking-wider text-[#9E2A2B] font-bold">
                  Myth vs Language
                </span>
                <span className="font-general text-[7px] text-[#9E2A2B] border border-[#9E2A2B]/20 bg-[#9E2A2B]/5 px-2 py-0.5 font-bold uppercase tracking-wider">
                  🟠 Under Investigation
                </span>
              </div>
              
              <div className="mb-4">
                <span className="font-general text-[7.5px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-1">Claim under review</span>
                <p className="font-instrument text-lg text-[#1C1C1A] font-semibold">
                  "Mūrti simply means idol."
                </p>
              </div>

              <div className="border-t border-[#C58B52]/10 pt-4">
                <span className="font-general text-[7.5px] text-[#9E2A2B] uppercase block tracking-wider mb-1 font-bold">Evidence Collected So Far</span>
                <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                  The Sanskrit vocabulary contains several distinct terms (Mūrti, Pratimā, Vigraha, Arcā, Bimba) with different etymological paths and philosophical meanings. Whether "idol" is an accurate translation cannot yet be determined. The investigation continues.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION III: THE SCRIPTURAL INVESTIGATION */}
        <section id="section-vedic" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION II • SCRIPTURE
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              The Scriptural Investigation
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              What do the sacred texts of Sanātana Dharma actually describe?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              Sanātana Dharma was not revealed through a single book. Its understanding developed across many centuries through different categories of scripture. To understand image worship, it is not sufficient to quote a single verse. The progression of the tradition must be observed across time. This investigation therefore begins with the earliest layer of scripture and gradually moves forward.
            </p>
          </Reveal>

          {/* SCRIPTURAL TIMELINE NAVIGATION */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-white/40 p-4">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
                Scriptural Evolution Timeline
              </span>

              <div className="flex flex-wrap border-b border-[#C58B52]/20 pb-2 mb-6 justify-between select-none">
                {scripturalTimeline.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTimelineIdx(idx)}
                    className={`font-general text-[9px] uppercase tracking-wider pb-2 focus:outline-none transition-colors duration-300 ${
                      activeTimelineIdx === idx
                        ? 'text-[#9E2A2B] border-b border-[#9E2A2B] font-bold'
                        : 'text-[#1C1C1A]/40 hover:text-[#1C1C1A]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* ACTIVE TIMELINE CARD */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTimelineIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col"
                >
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-general text-[9px] text-[#9E2A2B] border border-[#9E2A2B]/20 bg-[#9E2A2B]/5 px-2 py-0.5 font-bold uppercase tracking-wider">
                      {scripturalTimeline[activeTimelineIdx].classification}
                    </span>
                    <span className="font-instrument text-base text-[#1C1C1A] font-bold">
                      {scripturalTimeline[activeTimelineIdx].heading}
                    </span>
                  </div>

                  <p className="font-cormorant text-base text-[#1C1C1A]/85 leading-relaxed font-light mb-6">
                    {scripturalTimeline[activeTimelineIdx].desc}
                  </p>

                  <div className="border border-[#C58B52]/15 bg-[#F4EFE6] p-6 mb-4">
                    <pre className="font-instrument text-base md:text-lg text-[#9E2A2B] font-semibold text-center whitespace-pre-wrap leading-relaxed">
                      {scripturalTimeline[activeTimelineIdx].verse}
                    </pre>
                    <div className="w-8 h-[1px] bg-[#C58B52]/30 mx-auto my-3" />
                    <pre className="font-instrument text-[11px] text-[#1C1C1A]/60 text-center whitespace-pre-wrap leading-relaxed italic">
                      {scripturalTimeline[activeTimelineIdx].iast}
                    </pre>
                  </div>

                  <p className="font-cormorant text-sm text-[#1C1C1A] leading-relaxed mb-4">
                    <strong>Translation:</strong> {scripturalTimeline[activeTimelineIdx].translation}
                  </p>

                  {/* Highlighted Finding Panel */}
                  <div className="border-l-2 border-[#9E2A2B] pl-4 py-1.5 my-4 bg-[#9E2A2B]/2">
                    <span className="font-general text-[7.5px] uppercase tracking-wider text-[#9E2A2B] block mb-1 font-bold">
                      Investigation Finding
                    </span>
                    <p className="font-cormorant text-xs text-[#1C1C1A]/80 leading-relaxed italic font-light">
                      {scripturalTimeline[activeTimelineIdx].finding}
                    </p>
                  </div>

                  <div className="flex justify-between items-baseline mt-4 border-t border-[#C58B52]/10 pt-4">
                    <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest font-semibold">
                      Source: {scripturalTimeline[activeTimelineIdx].citation}
                    </span>
                    <button
                      onClick={() => setTimelineNoteExpanded(!timelineNoteExpanded)}
                      className="font-general text-[7.5px] text-[#C58B52] uppercase tracking-widest hover:underline focus:outline-none font-bold"
                    >
                      {timelineNoteExpanded ? '[ Collapse Analysis ]' : '[ Expand Analysis ]'}
                    </button>
                  </div>

                  {timelineNoteExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="border-t border-[#C58B52]/10 mt-4 pt-4 text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light"
                    >
                      <strong>Why it matters:</strong> {scripturalTimeline[activeTimelineIdx].whyMatters}
                    </motion.div>
                  )}

                  {/* SPECIAL UPANISHAD NOTE */}
                  {activeTimelineIdx === 1 && (
                    <div className="border border-[#C58B52]/20 bg-[#F4EFE6] p-4 mt-6">
                      <button
                        onClick={() => setScriptureUpanishadScholarNoteOpen(!scriptureUpanishadScholarNoteOpen)}
                        className="w-full flex justify-between items-center text-left focus:outline-none"
                      >
                        <span className="font-instrument text-xs font-bold text-[#1C1C1A]">
                          Scholar Note • The Upanishadic Position
                        </span>
                        <span className="font-general text-[7.5px] uppercase text-[#C58B52]">
                          {scriptureUpanishadScholarNoteOpen ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                        </span>
                      </button>
                      {scriptureUpanishadScholarNoteOpen && (
                        <p className="font-cormorant text-xs text-[#1C1C1A]/75 leading-relaxed mt-2 font-light">
                          The Upanishads do not present a detailed theology of image worship, nor do they explicitly prohibit it. They focus on the core reality that transcends physical characteristics, noting that external visual structures are starting points for mind focus.
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* SCRIPTURAL EVOLUTION VISUALIZATION */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/20 bg-white/40 p-6 md:p-8 rounded-sm select-none">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
                Evolution of Scriptural Focus
              </span>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center max-w-xl mx-auto">
                {[
                  { title: 'Early Vedas', desc: 'Sacrifice & Ritual' },
                  { title: 'Upanishads', desc: 'Meditation & Jnana' },
                  { title: 'Gita', desc: 'Devotion & Action' },
                  { title: 'Agamas', desc: 'Temple Architecture' },
                  { title: 'Puranas', desc: 'Lived Devotional Tradition' }
                ].map((node, idx) => (
                  <React.Fragment key={idx}>
                    <div className="p-3 border border-[#C58B52]/20 bg-white/50 min-w-[100px]">
                      <span className="font-instrument text-xs font-bold text-[#1C1C1A] block">
                        {node.title}
                      </span>
                      <span className="font-cormorant text-[10px] text-[#1C1C1A]/60 block mt-0.5">
                        {node.desc}
                      </span>
                    </div>
                    {idx < 4 && (
                      <span className="text-[#C58B52]/30 text-xs rotate-90 md:rotate-0">
                        →
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="border-t border-[#C58B52]/10 pt-4 mt-6 text-center">
                <p className="font-cormorant text-[11px] text-[#1C1C1A]/60 max-w-md mx-auto leading-relaxed">
                  Important: This represents a broad historical development of theological emphasis across centuries, not a literal replacement of earlier scriptures.
                </p>
              </div>
            </div>
          </Reveal>

          {/* MYTH VS EVIDENCE PANEL */}
          <Reveal className="my-8">
            <div className="border border-[#9E2A2B]/30 bg-[#9E2A2B]/2 p-6">
              <div className="flex justify-between items-baseline mb-4">
                <span className="font-general text-[8.5px] uppercase tracking-wider text-[#9E2A2B] font-bold">
                  Myth vs Evidence
                </span>
                <span className="font-general text-[7px] text-[#9E2A2B] border border-[#9E2A2B]/20 bg-[#9E2A2B]/5 px-2 py-0.5 font-bold uppercase tracking-wider">
                  🟠 Oversimplified
                </span>
              </div>
              
              <div className="mb-4">
                <span className="font-general text-[7.5px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-1">Claim under review</span>
                <p className="font-instrument text-lg text-[#1C1C1A] font-semibold">
                  "The Vedas teach the same fully developed temple worship found in later Hinduism."
                </p>
              </div>

              <div className="border-t border-[#C58B52]/10 pt-4">
                <span className="font-general text-[7.5px] text-[#9E2A2B] uppercase block tracking-wider mb-1 font-bold">Evidentiary Reality</span>
                <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                  The scriptural record shows a gradual development. Early Vedic religion focused on sacrificial fire (yajña) and mantra liturgy, while later scriptural traditions (Agamas and Puranas) increasingly developed elaborate temple architecture, iconography, and image worship.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION IV: PHILOSOPHY & MANIFESTATIONS */}
        <section id="section-philosophy" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION III • PHILOSOPHY
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              One Reality. Many Ways of Approaching It.
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              If the Divine is ultimately beyond form, why do Hindu traditions worship forms?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              Imagine trying to understand the ocean. One person studies the waves. Another studies the currents. Another studies the water itself. Each is looking at the same ocean from a different perspective. Many Hindu philosophical traditions approach the Divine in a similar way. Some emphasize the formless Absolute. Others emphasize the personal Divine. Many embrace both. The question is not whether one is correct and the other is wrong. The question is how each tradition understands the relationship between form and the infinite.
            </p>
          </Reveal>

          {/* THE CENTRAL VISUAL: BRAHMAN TO DEVOTIONAL PRACTICE */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/20 bg-white/30 p-6 md:p-8 rounded-sm select-none">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-8 text-center font-bold">
                Metaphysical Pathway Flow
              </span>

              <div className="flex flex-col items-center justify-center gap-4 relative">
                {/* Center Node */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-4 border-2 border-[#9E2A2B] bg-[#9E2A2B]/5 shadow-sm text-center min-w-[160px] z-10"
                >
                  <span className="font-general text-[7px] text-[#C58B52] block mb-1 uppercase tracking-widest font-bold">Ultimate Reality</span>
                  <span className="font-instrument text-lg text-[#1C1C1A] font-bold">BRAHMAN</span>
                </motion.div>

                {/* Vertical arrow */}
                <div className="text-[#C58B52]/40 text-xs">↓</div>

                {/* Sub Nodes layout */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full text-center">
                  {[
                    { label: 'Nirguṇa Brahman', sub: 'Absolute Formless Essence' },
                    { label: 'Saguṇa Brahman', sub: 'Divine with attributes/qualities' },
                    { label: 'Personal Deity', sub: 'Focused cosmic governor' },
                    { label: 'Mūrti / Icon', sub: 'Consecrated physical medium' }
                  ].map((node, idx) => (
                    <div key={idx} className="p-4 border border-[#C58B52]/20 bg-white/45 flex flex-col justify-center">
                      <span className="font-instrument text-sm font-bold text-[#1C1C1A] block leading-tight">
                        {node.label}
                      </span>
                      <span className="font-cormorant text-[10px] text-[#1C1C1A]/60 block mt-1 leading-snug">
                        {node.sub}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Vertical arrow */}
                <div className="text-[#C58B52]/40 text-xs">↓</div>

                {/* Bottom Node */}
                <div className="px-6 py-3 border border-[#C58B52]/20 bg-white/50 text-center min-w-[160px]">
                  <span className="font-general text-[7px] text-[#C58B52] block uppercase mb-1">Human Interface</span>
                  <span className="font-instrument text-sm font-bold text-[#1C1C1A]">Devotional Practice</span>
                </div>
              </div>

              <div className="border-t border-[#C58B52]/10 pt-4 mt-6 text-center">
                <p className="font-cormorant text-[11px] text-[#1C1C1A]/50 italic">
                  Note: This diagram visualizes different ways of approaching one ultimate Reality, without implying that every school interprets this hierarchy identically.
                </p>
              </div>
            </div>
          </Reveal>

          {/* FIVE PHILOSOPHICAL COMPARISON CARDS */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Comparative Philosophy Grid
            </span>

            <div className="flex flex-col gap-4 max-w-xl mx-auto select-none">
              {philosophySchools.map((school) => (
                <div
                  key={school.id}
                  className={`border transition-colors duration-300 ${
                    activePhilCard === school.id
                      ? 'border-[#9E2A2B] bg-[#9E2A2B]/2'
                      : 'border-[#C58B52]/20 bg-white/40'
                  }`}
                >
                  <button
                    onClick={() => setActivePhilCard(activePhilCard === school.id ? '' : school.id)}
                    className="w-full p-5 flex justify-between items-center text-left focus:outline-none"
                  >
                    <div>
                      <h4 className="font-instrument text-lg text-[#1C1C1A] font-bold">
                        {school.title}
                      </h4>
                      <span className="font-cormorant text-xs text-[#1C1C1A]/60 italic mt-0.5 block">
                        {school.summary}
                      </span>
                    </div>
                    <span className="text-[#C58B52]/50 text-xs">
                      {activePhilCard === school.id ? '▲' : '▼'}
                    </span>
                  </button>

                  <AnimatePresence>
                    {activePhilCard === school.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-[#C58B52]/10 p-5 bg-[#F4EFE6]/30 text-xs font-cormorant text-[#1C1C1A]/75 leading-relaxed font-light"
                      >
                        {school.explanation}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Reveal>

          {/* COMMON GROUND */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/30 bg-white/45 p-6 md:p-8 max-w-xl mx-auto">
              <span className="font-general text-[8.5px] uppercase tracking-widest text-[#9E2A2B] block mb-4 font-bold text-center">
                What Do Most Traditions Share?
              </span>
              <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed text-center font-light">
                Although Hindu philosophical schools differ significantly, most distinguish between <strong>the material object</strong> (stone, wood, metal), <strong>the consecrated sacred form</strong> (the Mūrti), and <strong>the Divine Reality</strong> that the form represents or manifests. The exact relationship differs among traditions, but the distinction itself is important.
              </p>
            </div>
          </Reveal>

          {/* VISUAL ANALOGIES */}
          <Reveal className="my-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { analogy: 'Light', steps: ['White Light', 'Prism', 'Colours'] },
                { analogy: 'Ocean', steps: ['Ocean', 'Waves', 'Water'] },
                { analogy: 'Sun', steps: ['Sun', 'Rays', 'Light'] }
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-white/20 p-5 text-center flex flex-col justify-between">
                  <span className="font-general text-[7px] text-[#C58B52] uppercase block tracking-widest mb-3 font-bold">
                    Analogy: {item.analogy}
                  </span>
                  
                  <div className="flex flex-col items-center gap-1 my-3">
                    <span className="font-instrument text-sm text-[#1C1C1A] font-bold">{item.steps[0]}</span>
                    <span className="text-[#C58B52]/40 text-xs">↓</span>
                    <span className="font-instrument text-sm text-[#1C1C1A] font-bold">{item.steps[1]}</span>
                    <span className="text-[#C58B52]/40 text-xs">↓</span>
                    <span className="font-instrument text-sm text-[#9E2A2B] font-bold">{item.steps[2]}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="font-cormorant text-[10px] text-[#1C1C1A]/40 italic">
                Note: These are explanatory teaching analogies only, not scriptural definitions.
              </p>
            </div>
          </Reveal>

          {/* PHILOSOPHY SCHOLAR NOTE */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-5">
              <button
                onClick={() => setPhilScholarNoteOpen(!philScholarNoteOpen)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#9E2A2B] text-xs">◆</span>
                  <span className="font-instrument text-base font-bold text-[#1C1C1A]">
                    Scholar Note • Why Different Schools Matter
                  </span>
                </div>
                <span className="font-general text-[8.5px] uppercase tracking-widest text-[#C58B52]">
                  {philScholarNoteOpen ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                </span>
              </button>

              <AnimatePresence>
                {philScholarNoteOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-[#C58B52]/20 mt-3 pt-3 text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light"
                  >
                    Sanātana Dharma is not a single uniform theological system. Advaita, Viśiṣṭādvaita, Dvaita, Śaiva and Śākta traditions each explain sacred images differently. A complete investigation must therefore present multiple viewpoints rather than reducing them to one answer.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* MYTH VS EVIDENCE PANEL */}
          <Reveal className="my-8">
            <div className="border border-[#9E2A2B]/30 bg-[#9E2A2B]/2 p-6">
              <div className="flex justify-between items-baseline mb-4">
                <span className="font-general text-[8.5px] uppercase tracking-wider text-[#9E2A2B] font-bold">
                  Myth vs Evidence
                </span>
                <span className="font-general text-[7px] text-[#9E2A2B] border border-[#9E2A2B]/20 bg-[#9E2A2B]/5 px-2 py-0.5 font-bold uppercase tracking-wider">
                  🔴 Not Supported
                </span>
              </div>
              
              <div className="mb-4">
                <span className="font-general text-[7.5px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-1">Claim under review</span>
                <p className="font-instrument text-lg text-[#1C1C1A] font-semibold">
                  "All Hindus believe exactly the same thing about sacred images."
                </p>
              </div>

              <div className="border-t border-[#C58B52]/10 pt-4">
                <span className="font-general text-[7.5px] text-[#9E2A2B] uppercase block tracking-wider mb-1 font-bold">Evidentiary Reality</span>
                <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                  The philosophical traditions of Hinduism contain significant diversity regarding the nature and role of Mūrti worship, while still sharing broad theological themes. Some see them as temporal cognitive aids; others view them as genuine incarnations of divine presence.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION V: TEMPLE TRADITION & CONSECRATION */}
        <section id="section-temple" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION IV • TEMPLE TRADITION
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              Inside the Temple
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              What actually happens when a Mūrti is installed and worshipped?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              Imagine walking into a traditional Hindu temple. At first glance, you may see what appears to be a carved stone image. But according to the temple tradition itself, the object is not regarded as sacred merely because it is carved. Something else is believed to occur before worship begins. That process is called <strong>Prāṇa Pratiṣṭhā</strong>. Understanding this idea is essential to understanding why Hindu traditions distinguish between an ordinary object and a consecrated Mūrti.
            </p>
          </Reveal>

          {/* THE TEMPLE JOURNEY PROCESS DIAGRAM */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/25 bg-white/40 p-6 md:p-8 rounded-sm select-none">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
                The Consecration & Life-Cycle of a Mūrti
              </span>

              <div className="flex flex-col gap-3 max-w-lg mx-auto">
                {templeJourney.map((step, idx) => (
                  <div key={idx} className="border border-[#C58B52]/15 bg-[#F4EFE6]/40">
                    <button
                      onClick={() => setActiveJourneyIdx(activeJourneyIdx === idx ? null : idx)}
                      className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
                    >
                      <div className="flex gap-4 items-baseline">
                        <span className="font-general text-[9px] uppercase tracking-wider text-[#9E2A2B] font-bold">
                          {step.stage}
                        </span>
                        <span className="font-instrument text-sm font-semibold text-[#1C1C1A]">
                          {step.title}
                        </span>
                      </div>
                      <span className="text-[#C58B52]/50 text-xs">
                        {activeJourneyIdx === idx ? '▲' : '▼'}
                      </span>
                    </button>

                    <AnimatePresence>
                      {activeJourneyIdx === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-[#C58B52]/10 p-4 text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light"
                        >
                          {step.desc}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* CENTRAL CARD: WHAT IS PRANA PRATISHTHA? */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-6 max-w-xl mx-auto text-center">
              <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-widest mb-1.5 font-bold">
                Core Concept
              </span>
              <h3 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-4">
                What is Prāṇa Pratiṣṭhā?
              </h3>
              <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light text-left">
                Prāṇa Pratiṣṭhā is the ritual of consecration through which a sacred image is ceremonially established for worship according to the Āgamic and temple traditions. Within these traditions, the ritual is understood not as "creating God," but as preparing a sacred locus for divine presence, worship, and devotion. Different traditions explain this process differently, with some emphasizing personal devotion and others highlighting elaborate ritual consecration.
              </p>
            </div>
          </Reveal>

          {/* TEMPLE INVESTIGATION QUESTIONS */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Practice Examination
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templeInvestigation.map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/20 bg-white/40 p-5 flex flex-col justify-between">
                  <div>
                    <button
                      onClick={() => setActiveTempleQuestionIdx(activeTempleQuestionIdx === idx ? null : idx)}
                      className="w-full flex justify-between items-baseline text-left focus:outline-none"
                    >
                      <span className="font-instrument text-base font-bold text-[#9E2A2B] leading-tight pr-4">
                        {item.q}
                      </span>
                      <span className="text-[#C58B52]/50 text-xs shrink-0">
                        {activeTempleQuestionIdx === idx ? '▲' : '▼'}
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {activeTempleQuestionIdx === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-[#C58B52]/10 mt-3 pt-3 text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light"
                        >
                          {item.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* SCRIPTURAL FOUNDATIONS */}
          <Reveal className="my-8 font-cormorant">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-5">
              <button
                onClick={() => setTempleOriginExpanded(!templeOriginExpanded)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#9E2A2B] text-xs font-bold">◆</span>
                  <span className="font-instrument text-base font-bold text-[#1C1C1A]">
                    Where does temple worship come from?
                  </span>
                </div>
                <span className="font-general text-[8.5px] uppercase tracking-widest text-[#C58B52]">
                  {templeOriginExpanded ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                </span>
              </button>

              <AnimatePresence>
                {templeOriginExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-[#C58B52]/20 mt-3 pt-3 text-xs text-[#1C1C1A]/70 leading-relaxed font-light"
                  >
                    The systems of temple architecture, iconography, consecration, and daily rituals derive primarily from the **Āgamas**, **Tantras**, and specialized medieval **temple manuals** (like the *Śilpa Śāstras*). These texts provide highly detailed criteria for everything from selecting raw stone to coordinating complex seasonal festivals, ensuring ritual consistency across generations.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* TEMPLE SCHOLAR NOTE */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-5">
              <button
                onClick={() => setTempleScholarNoteOpen(!templeScholarNoteOpen)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#9E2A2B] text-xs">◆</span>
                  <span className="font-instrument text-base font-bold text-[#1C1C1A]">
                    Scholar Note • Ritual and Theology
                  </span>
                </div>
                <span className="font-general text-[8.5px] uppercase tracking-widest text-[#C58B52]">
                  {templeScholarNoteOpen ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                </span>
              </button>

              <AnimatePresence>
                {templeScholarNoteOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-[#C58B52]/20 mt-3 pt-3 text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light"
                  >
                    Modern observers often focus on the physical image. Traditional temple theology, however, focuses on the relationship between consecration, sacred space, ritual intention, and divine presence. Understanding that distinction is essential before evaluating the practice.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* MYTH VS EVIDENCE PANEL */}
          <Reveal className="my-8">
            <div className="border border-[#9E2A2B]/30 bg-[#9E2A2B]/2 p-6">
              <div className="flex justify-between items-baseline mb-4">
                <span className="font-general text-[8.5px] uppercase tracking-wider text-[#9E2A2B] font-bold">
                  Myth vs Evidence
                </span>
                <span className="font-general text-[7px] text-[#9E2A2B] border border-[#9E2A2B]/20 bg-[#9E2A2B]/5 px-2 py-0.5 font-bold uppercase tracking-wider">
                  🔴 Oversimplified
                </span>
              </div>
              
              <div className="mb-4">
                <span className="font-general text-[7.5px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-1">Claim under review</span>
                <p className="font-instrument text-lg text-[#1C1C1A] font-semibold">
                  "Hindus simply worship stones."
                </p>
              </div>

              <div className="border-t border-[#C58B52]/10 pt-4">
                <span className="font-general text-[7.5px] text-[#9E2A2B] uppercase block tracking-wider mb-1 font-bold">Evidentiary Reality</span>
                <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                  Temple traditions distinguish clearly between ordinary objects and ritually consecrated Mūrtis. Consecration rituals are meant to make the form an active vessel of communication, meaning temple theology does not treat the raw material itself as the target of devotion, but as a consecrated locus.
                </p>
              </div>
            </div>
          </Reveal>

          {/* DID YOU KNOW PREMIUM PANEL */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/30 bg-[#F4EFE6] p-6 md:p-8">
              <span className="font-general text-[9px] uppercase tracking-[0.25em] text-[#9E2A2B] block mb-4 font-bold text-center">
                Did You Know?
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                <div className="flex gap-2">
                  <span className="text-[#C58B52]">•</span>
                  <span>Not every Hindu worships through images. Several sects prioritize meditation, mantra recitation, or homa (fire rituals) without icons.</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#C58B52]">•</span>
                  <span>Home shrines and temples follow completely different liturgical manuals, with home shrines prioritizing simplified family traditions.</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#C58B52]">•</span>
                  <span>Many Hindu philosophical schools accept both image-based (sākāra) and image-free (nirākāra) forms of spiritual practice as valid paths.</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[#C58B52]">•</span>
                  <span>Mūrtis are retired respectfully through Visarjana when damaged, emphasizing that the physical form is temporary and not the eternal divine itself.</span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION VI: THE HISTORY BEHIND THE PHRASE */}
        <section id="section-history" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION V • HISTORY
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              The History Behind the Phrase
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              How did one of the world's most repeated descriptions of Hinduism become so widespread?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              Every civilization develops its own religious vocabulary. Problems often arise when words from one tradition are translated directly into another without preserving their original meaning. Over many centuries, Sanskrit concepts such as Mūrti and Arcā entered discussions written in Persian, Arabic, Portuguese and English. Each language brought its own assumptions. The result was not necessarily intentional distortion—but often simplification. Understanding that historical process helps explain why the phrase "Hindus worship idols" became so common.
            </p>
          </Reveal>

          {/* HISTORICAL TIMELINE */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-white/40 p-4 select-none">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
                Chronological Development of a Label
              </span>

              <div className="flex flex-wrap border-b border-[#C58B52]/20 pb-2 mb-6 justify-between text-center">
                {historicalTimeline.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHistoryIdx(idx)}
                    className={`font-general text-[9px] uppercase tracking-wider pb-2 focus:outline-none transition-colors duration-300 ${
                      activeHistoryIdx === idx
                        ? 'text-[#9E2A2B] border-b border-[#9E2A2B] font-bold'
                        : 'text-[#1C1C1A]/40 hover:text-[#1C1C1A]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* ACTIVE HISTORICAL STEP CONTENT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHistoryIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col"
                >
                  <h4 className="font-instrument text-lg text-[#9E2A2B] font-bold mb-3">
                    {historicalTimeline[activeHistoryIdx].title}
                  </h4>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                    {historicalTimeline[activeHistoryIdx].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* HISTORICAL OBSERVATION CARD */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/20 bg-white/45 p-6 md:p-8 max-w-xl mx-auto text-center">
              <span className="font-general text-[7px] text-[#C58B52] block uppercase mb-1.5 tracking-wider font-bold">
                Historical Observation
              </span>
              <h3 className="font-instrument text-2xl text-[#1C1C1A] font-bold mb-3">
                Ideas Change As They Travel
              </h3>
              <p className="font-cormorant text-sm text-[#1C1C1A]/75 leading-relaxed font-light text-left">
                When religious ideas move between languages and cultures, translation often becomes interpretation. A single translated word can gradually shape how millions of people understand an entire civilization, replacing context-dependent Sanskrit systems with simplified categories.
              </p>
            </div>
          </Reveal>

          {/* HISTORY SCHOLAR NOTE */}
          <Reveal className="my-8 font-cormorant">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-5">
              <button
                onClick={() => setHistoryScholarNoteOpen(!historyScholarNoteOpen)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#9E2A2B] text-xs font-bold">◆</span>
                  <span className="font-instrument text-base font-bold text-[#1C1C1A]">
                    Scholar Note • Translation and Historical Context
                  </span>
                </div>
                <span className="font-general text-[8.5px] uppercase tracking-widest text-[#C58B52]">
                  {historyScholarNoteOpen ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                </span>
              </button>

              <AnimatePresence>
                {historyScholarNoteOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-[#C58B52]/20 mt-3 pt-3 text-xs text-[#1C1C1A]/70 leading-relaxed font-light"
                  >
                    Modern historians generally encourage readers to understand religious traditions using their own terminology whenever possible before applying external labels. This approach improves historical accuracy, preserves conceptual precision, and reduces cultural misunderstanding.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* MYTH VS HISTORY PANEL */}
          <Reveal className="my-8">
            <div className="border border-[#9E2A2B]/30 bg-[#9E2A2B]/2 p-6">
              <div className="flex justify-between items-baseline mb-4">
                <span className="font-general text-[8.5px] uppercase tracking-wider text-[#9E2A2B] font-bold">
                  Myth vs History
                </span>
                <span className="font-general text-[7px] text-[#9E2A2B] border border-[#9E2A2B]/20 bg-[#9E2A2B]/5 px-2 py-0.5 font-bold uppercase tracking-wider">
                  🔴 Not Supported
                </span>
              </div>
              
              <div className="mb-4">
                <span className="font-general text-[7.5px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-1">Claim under review</span>
                <p className="font-instrument text-lg text-[#1C1C1A] font-semibold">
                  "The phrase 'idol worship' has always been the traditional description used within Hindu scriptures."
                </p>
              </div>

              <div className="border-t border-[#C58B52]/10 pt-4">
                <span className="font-general text-[7.5px] text-[#9E2A2B] uppercase block tracking-wider mb-1 font-bold">Evidentiary Reality</span>
                <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                  The terminology commonly used in English developed through later historical interactions, translations, and western encounters. Ancient Sanskrit scriptures employ their own distinct vocabulary, context-specific semantic rules, and theological categories.
                </p>
              </div>
            </div>
          </Reveal>

          {/* TIMELINE SUMMARY VISUAL FLOW */}
          <Reveal className="my-12 select-none">
            <div className="border border-[#C58B52]/20 bg-white/40 p-6 md:p-8 rounded-sm text-center">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 font-bold">
                Historical Development Flow
              </span>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
                {[
                  'Sanskrit Concepts',
                  'Translation',
                  'Cross-Cultural Interpretation',
                  'Popular Usage',
                  'Modern Misconception'
                ].map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="p-3 border border-[#C58B52]/15 bg-white/45 min-w-[110px]">
                      <span className="font-instrument text-xs font-semibold text-[#1C1C1A] block leading-tight">
                        {step}
                      </span>
                    </div>
                    {idx < 4 && (
                      <span className="text-[#C58B52]/30 text-xs rotate-90 md:rotate-0">
                        →
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION VII: FINAL VERDICT
        ══════════════════════════════════════════════ */}
        <section id="section-verdict" className="py-16 border-b border-[#C58B52]/20">
          <Reveal className="text-center mb-12">
            <span className="font-general text-[8.5px] uppercase tracking-[0.25em] text-[#9E2A2B] block mb-4 font-bold">
              INVESTIGATION COMPLETE
            </span>
            <h2 className="font-instrument text-4xl text-[#1C1C1A] mb-4">
              Final Verdict
            </h2>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/70 max-w-lg mx-auto leading-relaxed font-light">
              Every conclusion below is derived from the linguistic, scriptural, philosophical, ritual and historical evidence examined throughout this investigation.
            </p>
          </Reveal>

          {/* VERDICT SUMMARY CARD */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/30 bg-[#F4EFE6] p-8 max-w-xl mx-auto text-center relative shadow-sm">
              <span className="absolute -top-3 left-6 bg-[#9E2A2B] text-white px-3 py-0.5 font-general text-[7.5px] uppercase tracking-[0.2em] font-bold">
                OFFICIAL VERDICT REGISTRY
              </span>
              
              <div className="mb-6 pt-2">
                <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase block mb-1">Claim under review</span>
                <span className="font-instrument text-xl text-[#1C1C1A] font-semibold italic">"Hinduism Worships Idols."</span>
              </div>

              <div className="w-16 h-[1px] bg-[#C58B52]/30 mx-auto my-6" />

              <div className="flex items-center justify-center gap-3 mb-6 select-none">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="font-general text-[13px] uppercase tracking-widest text-[#1C1C1A] font-bold">
                  Verdict: <span className="text-amber-600">MISLEADING</span>
                </span>
              </div>

              <p className="font-cormorant text-sm text-[#1C1C1A]/85 leading-relaxed text-left font-light mb-4">
                The investigation found that the English expression "Hinduism worships idols" does not accurately represent the full complexity of Hindu traditions. 
              </p>
              <p className="font-cormorant text-sm text-[#1C1C1A]/85 leading-relaxed text-left font-light">
                The Sanskrit vocabulary contains multiple concepts that cannot be reduced to a single English word. The scriptures reveal a gradual development of worship across different textual layers. Temple traditions distinguish between ordinary objects and consecrated Mūrtis. Different philosophical schools understand sacred images in different ways. The popular phrase therefore oversimplifies a diverse and historically evolving religious tradition.
              </p>
            </div>
          </Reveal>

          {/* WHY THIS VERDICT - 6 CARDS */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Evidentiary Pillars
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto select-none">
              {whyVerdictCards.map((card, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-white/40 p-5">
                  <span className="font-general text-[7.5px] text-[#9E2A2B] block uppercase tracking-widest mb-1.5 font-bold">
                    {card.title}
                  </span>
                  <p className="font-cormorant text-xs text-[#1C1C1A]/80 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ONE MINUTE ANSWER */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/25 bg-white/45 p-6 md:p-8 max-w-xl mx-auto rounded-sm">
              <span className="font-general text-[8.5px] uppercase tracking-widest text-[#9E2A2B] block mb-4 font-bold text-center">
                If Someone Asked You in One Minute
              </span>

              <div className="mb-4">
                <span className="font-general text-[7.5px] text-[#1C1C1A]/40 uppercase block mb-1">Question</span>
                <p className="font-instrument text-base font-bold text-[#1C1C1A]">"Do Hindus worship idols?"</p>
              </div>

              <div className="border-t border-[#C58B52]/10 pt-4 font-cormorant text-sm leading-relaxed text-[#1C1C1A]/85 font-light">
                <span className="font-general text-[7.5px] text-[#9E2A2B] uppercase block tracking-wider mb-1 font-bold">Answer Summary</span>
                <p className="mb-3">
                  The answer depends on what is meant by the word <strong>"idol."</strong>
                </p>
                <p className="mb-3">
                  If the word refers to the English theological concept of worshipping a false deity or believing a material object itself is God, that does not accurately describe the mainstream understanding presented in Hindu scriptures and philosophical traditions.
                </p>
                <p className="mb-3">
                  If the discussion concerns the use of consecrated sacred images (Mūrtis) as focal points for devotion, meditation and worship, many Hindu traditions do practice this, though they explain its meaning in different ways.
                </p>
                <p>
                  Therefore, the simple statement "Hinduism worships idols" is too broad and misleading to accurately describe the tradition.
                </p>
              </div>
            </div>
          </Reveal>

          {/* WHAT WE LEARNED - 6 CARDS */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Core Lessons Documented
            </span>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto select-none">
              {whatWeLearned.map((val, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-white/20 p-4 flex gap-2.5 items-start">
                  <span className="text-green-700 text-[10px] font-bold mt-0.5">✓</span>
                  <span className="font-cormorant text-xs text-[#1C1C1A]/80 leading-relaxed font-light">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* CONFIDENCE PANEL */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/30 bg-[#F4EFE6] p-6 md:p-8 max-w-md mx-auto text-center rounded-sm">
              <span className="font-general text-[8.5px] uppercase tracking-[0.2em] text-[#C58B52] block mb-4 font-bold">
                Evidence Confidence Matrix
              </span>

              <div className="flex flex-col gap-2 font-cormorant text-xs text-[#1C1C1A]/80 mb-6 text-left max-w-xs mx-auto">
                {[
                  { label: 'Language Investigation', stars: '★★★★★' },
                  { label: 'Scriptural Investigation', stars: '★★★★★' },
                  { label: 'Historical Investigation', stars: '★★★★☆' },
                  { label: 'Philosophical Investigation', stars: '★★★★★' },
                  { label: 'Temple Tradition', stars: '★★★★★' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-[#C58B52]/10 py-1">
                    <span className="font-light">{item.label}</span>
                    <span className="text-[#9E2A2B] font-mono tracking-wider">{item.stars}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-2 text-[10px] font-general uppercase font-bold text-[#9E2A2B]">
                  <span>Editorial Confidence</span>
                  <span>Very High</span>
                </div>
              </div>

              <p className="font-cormorant text-[10.5px] text-[#1C1C1A]/50 italic max-w-xs mx-auto leading-relaxed">
                This verdict reflects the strongest conclusion supported by the available linguistic, scriptural, philosophical and historical evidence examined throughout this investigation.
              </p>
            </div>
          </Reveal>

          {/* EDITORIAL TRANSPARENCY DRAWER */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-5">
              <button
                onClick={() => setTransparencyExpanded(!transparencyExpanded)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#9E2A2B] text-xs">◆</span>
                  <span className="font-instrument text-base font-bold text-[#1C1C1A]">
                    Editorial Transparency • Why TATTVA Chose "Misleading"
                  </span>
                </div>
                <span className="font-general text-[8.5px] uppercase tracking-widest text-[#C58B52]">
                  {transparencyExpanded ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                </span>
              </button>

              <AnimatePresence>
                {transparencyExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-[#C58B52]/20 mt-3 pt-3 text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light"
                  >
                    This investigation deliberately avoids simplistic labels such as "True" or "False." The phrase contains elements related to real Hindu practices, but it compresses diverse traditions, philosophical ideas and historical developments into one oversimplified statement. The verdict therefore evaluates the complete claim rather than isolated words.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>


          {/* FINAL REFLECTION SECTION TRIGGER */}
          <motion.div
            onViewportEnter={() => {
              setTrackerVisible(false);
            }}
            onViewportLeave={() => {
              setTrackerVisible(true);
            }}
            viewport={{ amount: 0.1 }}
            className="w-full"
          >
            {/* SECTION TITLE */}
            <div className="text-center py-16 mt-8">
              <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-3 font-bold">
                FINAL REFLECTION
              </span>
              <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
                Final Reflection
              </h2>
              <p className="font-instrument italic text-base text-[#C58B52] max-w-md mx-auto leading-relaxed">
                Sometimes understanding begins by questioning the words we use.
              </p>
            </div>

            {/* OPENING EXPERIENCE: STAGGERED STATEMENTS */}
            <div className="flex flex-col items-center gap-8 my-20 text-center select-none">
              {[
                "Words carry history.",
                "Translations carry assumptions.",
                "And understanding requires context."
              ].map((statement, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: idx * 1.2, ease: EASE_EXPO }}
                  className="font-instrument italic text-xl md:text-2xl text-[#1C1C1A]/85"
                >
                  {statement}
                </motion.p>
              ))}
            </div>

            {/* THE GREATER LESSON */}
            <Reveal className="my-16 max-w-xl mx-auto text-center font-cormorant text-lg text-[#1C1C1A]/85 leading-relaxed font-light">
              <p className="mb-6">
                This investigation was never about deciding whether sacred images are good or bad. It was about asking whether a widely repeated phrase accurately represents one of the world's oldest living traditions.
              </p>
              <p className="mb-6">
                The investigation showed that language, scripture, philosophy, ritual and history each contribute part of the answer. No single paragraph, no single translation, and no single practice can fully describe Sanātana Dharma.
              </p>
              <p className="font-semibold italic text-[#9E2A2B]">
                Careful investigation always requires examining ideas within their own intellectual and historical context.
              </p>
            </Reveal>

            {/* THE TATTVA PRINCIPLE */}
            <Reveal className="my-16">
              <div className="border border-[#C58B52]/30 bg-white/40 p-6 md:p-8 max-w-xl mx-auto shadow-sm">
                <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block mb-6 text-center font-bold">
                  HOW TATTVA INVESTIGATES EVERY CLAIM
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tattvaPrinciples.map((val, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2 border-b border-[#C58B52]/10">
                      <span className="text-[#9E2A2B] text-xs">◆</span>
                      <span className="font-instrument text-sm text-[#1C1C1A] font-semibold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* KEY TAKEAWAYS */}
            <Reveal className="my-16">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
                Key Takeaways
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 select-none">
                {whatWeLearned.map((takeaway, idx) => (
                  <div key={idx} className="border border-[#C58B52]/15 bg-white/20 p-5 flex gap-3 items-start">
                    <span className="text-green-700 text-xs font-bold mt-0.5">✓</span>
                    <span className="font-cormorant text-xs text-[#1C1C1A]/80 leading-relaxed font-light">
                      {takeaway}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* RELATED INVESTIGATIONS */}
            <Reveal className="my-20">
              <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#9E2A2B] block mb-8 text-center font-bold">
                Related Investigations
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto select-none">
                {/* Completed 001 */}
                <Link
                  to="/satya-mithya/does-gita-teach-war"
                  className="border border-[#C58B52]/15 bg-white/40 p-6 flex flex-col justify-between group transition-all duration-300 hover:border-[#C58B52]/35 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-general text-[7px] text-[#C58B52] uppercase">
                        Case File 001 • Completed
                      </span>
                      <span className="font-general text-[6px] text-green-700 font-bold uppercase tracking-widest">
                        ✓ Misleading
                      </span>
                    </div>
                    <h4 className="font-instrument text-base font-semibold text-[#1C1C1A] group-hover:text-[#9E2A2B] transition-colors leading-tight mb-2">
                      Does the Bhagavad Gītā Teach War?
                    </h4>
                    <p className="font-cormorant text-xs text-[#1C1C1A]/60 leading-relaxed font-light">
                      Investigating whether the Gītā's battlefield setting advocates literal warfare or a deeper inner struggle.
                    </p>
                  </div>
                  <span className="font-general text-[7px] uppercase tracking-widest text-[#9E2A2B] block mt-4 font-bold">
                    Re-open Case →
                  </span>
                </Link>

                {/* Completed 002 */}
                <Link
                  to="/satya-mithya/are-there-really-33-crore-gods"
                  className="border border-[#C58B52]/15 bg-white/40 p-6 flex flex-col justify-between group transition-all duration-300 hover:border-[#C58B52]/35 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-general text-[7px] text-[#C58B52] uppercase">
                        Case File 002 • Completed
                      </span>
                      <span className="font-general text-[6px] text-green-700 font-bold uppercase tracking-widest">
                        ✓ Misleading
                      </span>
                    </div>
                    <h4 className="font-instrument text-base font-semibold text-[#1C1C1A] group-hover:text-[#9E2A2B] transition-colors leading-tight mb-2">
                      Are There Really 33 Crore Gods?
                    </h4>
                    <p className="font-cormorant text-xs text-[#1C1C1A]/60 leading-relaxed font-light">
                      Tracing the linguistic shift from Vedic 'Koti' (classifications) to the popular interpretation of 'crores'.
                    </p>
                  </div>
                  <span className="font-general text-[7px] uppercase tracking-widest text-[#9E2A2B] block mt-4 font-bold">
                    Re-open Case →
                  </span>
                </Link>

                {/* Coming Soon */}
                {[
                  { title: 'Does Karma Mean Everything Is Predetermined?', desc: 'Investigating fate, agency, free will and dynamic cause-and-effect systems.' },
                  { title: 'Did the Ṛgveda Say Viṣṇu Created the Universe?', desc: 'Exploring early cosmological layers and the development of major Vaishnava theology.' },
                  { title: 'Are the Rāmāyaṇa and Mahābhārata Just Mythology?', desc: 'Analysing the historical and philosophical category of Itihāsa versus Western myth structures.' },
                  { title: 'Did the Bhagavad Gītā Create the Caste System?', desc: 'Investigating the social stratification claims, Varṇa verses, and their original scriptural contexts.' }
                ].map((c, i) => (
                  <div key={i} className="border border-[#1C1C1A]/10 bg-white/10 opacity-55 p-6 flex flex-col justify-between">
                    <div>
                      <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase block mb-2">
                        Future Investigation • Coming Soon
                      </span>
                      <h4 className="font-instrument text-base font-semibold text-[#1C1C1A] leading-tight mb-2">
                        {c.title}
                      </h4>
                      <p className="font-cormorant text-xs text-[#1C1C1A]/60 leading-relaxed font-light">
                        {c.desc}
                      </p>
                    </div>
                    <span className="font-general text-[7px] uppercase tracking-widest text-[#1C1C1A]/40 block mt-4">
                      Archived Pending Review
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* RELATED TATTVA LIBRARY (Continue Learning) */}
            <Reveal className="my-20">
              <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#C58B52] block mb-4 text-center font-bold">
                CONTINUE LEARNING
              </span>
              <h3 className="font-instrument text-2xl text-center text-[#1C1C1A] mb-8">
                Related TATTVA Library Volumes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 select-none">
                {[
                  {
                    title: 'The Structure of the Universe',
                    desc: 'Connects because the visual, localized hierarchies of spatial lokas and devas provide the cosmology inhabited by personal forms of the Divine.',
                    link: '/library/the-architecture-of-the-cosmos'
                  },
                  {
                    title: 'Creation (Sṛṣṭi)',
                    desc: 'Explains the metaphysical mechanism of how concrete visual forms emerge from the infinite, formless absolute Brahman.',
                    link: '/library/srsthi'
                  },
                  {
                    title: 'Time in Sanātana Dharma',
                    desc: 'Connects temporal cycles to the manifest lifecycle, daily liturgy, and eventual respectful retirement (Visarjana) of sacred images.',
                    link: '/library/time-cycles'
                  },
                  {
                    title: 'Bhakti',
                    desc: 'Explores the emotional and experiential path of personal connection, love, and service directed through the consecrated Mūrti.',
                    link: '/library/bhakti-pathways'
                  },
                  {
                    title: 'Temple Architecture',
                    desc: 'Detail on how temple spaces are built as three-dimensional geometric models of the cosmic body.',
                    link: '/library/temple-architecture'
                  },
                  {
                    title: 'Philosophy of Brahman',
                    desc: 'Explains the dual, qualified non-dual, and non-dual theological models reconciling form and formlessness.',
                    link: '/library/philosophy-of-brahman'
                  }
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    className="border border-[#C58B52]/15 bg-white/45 p-5 flex flex-col justify-between group transition-all duration-300 hover:border-[#C58B52]/35 hover:-translate-y-0.5 text-left"
                  >
                    <div>
                      <span className="font-general text-[7px] text-[#C58B52] block uppercase mb-1">
                        TATTVA Library
                      </span>
                      <h4 className="font-instrument text-base font-semibold text-[#1C1C1A] group-hover:text-[#9E2A2B] transition-colors leading-tight mb-2">
                        {item.title}
                      </h4>
                      <p className="font-cormorant text-xs text-[#1C1C1A]/70 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                    <span className="font-general text-[7px] uppercase tracking-widest text-[#9E2A2B] block mt-4 font-bold">
                      Read Volume →
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>

            {/* SATYA / MITHYĀ KNOWLEDGE GRAPH */}
            <div className="w-full my-20 border-t border-[#C58B52]/10 pt-12">
              <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#C58B52] block mb-8 text-center font-bold">
                SATYA / MITHYĀ Knowledge Map
              </span>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 relative select-none">
                {[
                  { number: 'Case File 001', title: 'Bhagavad Gītā & War', status: 'completed' },
                  { number: 'Case File 002', title: '33 Crore Gods', status: 'completed' },
                  { number: 'Case File 003', title: 'Hinduism Worships Idols?', status: 'current' },
                  { number: 'Case File 004', title: 'Karma Means Fate?', status: 'coming' },
                  { number: 'Case File 005', title: 'Ṛgveda & Viṣṇu', status: 'coming' },
                  { number: 'Case File 006', title: 'Itihāsa vs Mythology', status: 'coming' },
                  { number: 'Case File 007', title: 'Bhagavad Gītā & Caste', status: 'coming' }
                ].map((node, idx) => (
                  <React.Fragment key={idx}>
                    <div className={`p-4 border transition-all duration-500 text-center min-w-[130px] ${
                      node.status === 'current'
                        ? 'border-[#9E2A2B] bg-[#9E2A2B]/10 shadow-[0_0_15px_rgba(158,42,43,0.18)] scale-105'
                        : node.status === 'completed'
                        ? 'border-[#C58B52]/30 bg-white/45'
                        : 'border-[#1C1C1A]/10 bg-white/10 opacity-40'
                    }`}>
                      <span className="font-general text-[7px] text-[#C58B52] block mb-1 uppercase">
                        {node.number}
                      </span>
                      <span className="font-instrument text-xs text-[#1C1C1A] font-semibold block leading-tight">
                        {node.title}
                      </span>
                      {node.status === 'completed' && (
                        <span className="font-general text-[6px] text-green-700 font-bold block mt-1 uppercase tracking-widest">
                          ✓ Completed
                        </span>
                      )}
                    </div>
                    {idx < 6 && (
                      <span className="text-[#C58B52]/30 text-xs rotate-90 md:rotate-0">
                        →
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* FINAL REFLECTION OPEN QUESTION */}
            <Reveal className="my-20 text-center max-w-lg mx-auto">
              <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-3 font-bold">
                Final Reflection
              </span>
              <p className="font-instrument italic text-xl md:text-2xl text-[#1C1C1A]/85 leading-relaxed mb-6">
                "When studying a civilization thousands of years old, should inquiry begin with inherited assumptions—or begin by asking how that civilization understands itself?"
              </p>
              <div className="w-12 h-[1px] bg-[#C58B52]/40 mx-auto" />
            </Reveal>

            {/* THE CLOSING MOMENT */}
            <div className="my-20 text-center max-w-xl mx-auto select-none">
              <p className="font-instrument text-2xl md:text-3xl text-[#1C1C1A]/85 leading-tight tracking-tight mb-8">
                "Truth is rarely hidden.<br />
                More often, it is waiting beneath oversimplified explanations."
              </p>

              <div className="h-16 flex items-center justify-center">
                <AnimatePresence>
                  {showClosingButton && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: EASE_EXPO }}
                    >
                      <Link
                        to="/satya-mithya"
                        className="inline-block px-6 py-2.5 border border-[#9E2A2B] text-[#9E2A2B] font-general text-[9px] uppercase tracking-widest font-bold hover:bg-[#9E2A2B] hover:text-white transition-colors duration-500"
                      >
                        Begin Another Investigation
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
