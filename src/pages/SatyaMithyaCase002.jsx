import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import useScrollSpy from '@/hooks/useScrollSpy';

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

export function SatyaMithyaCase002() {
  // Page states for active stages
  const [isBottomReached, setIsBottomReached] = useState(false);

  // SECTION 1 (Linguistic Explorer)
  const [activeLexMeaningIdx, setActiveLexMeaningIdx] = useState(null);
  const [meaningsExplored, setMeaningsExplored] = useState(new Set());
  const [lexicalDisclosureOpen, setLexicalDisclosureOpen] = useState(false);

  // SECTION 2 (Vedic Evidence Timeline)
  const [activeVedicTimelineIdx, setActiveVedicTimelineIdx] = useState(0);
  const [evidenceStepsViewed, setEvidenceStepsViewed] = useState(new Set([0]));
  const [evidenceCardExpanded, setEvidenceCardExpanded] = useState(false);

  // SECTION 3 (Cosmic Council Devas Grid)
  const [selectedCouncilGroup, setSelectedCouncilGroup] = useState(null);
  const [devasExplored, setDevasExplored] = useState(new Set());

  // SECTION 4 (Historical Evolution Roadmap)
  const [activeEvolutionIdx, setActiveEvolutionIdx] = useState(0);
  const [evolutionStepsViewed, setEvolutionStepsViewed] = useState(new Set([0]));

  // SECTION 5 (Philosophy & Brahman Manifestations)
  const [activePhilCard, setActivePhilCard] = useState('Advaita');
  const [activePluralityExplored, setActivePluralityExplored] = useState(false);

  // SECTION 6 (Misconceptions)
  const [expandedMisconception, setExpandedMisconception] = useState(null);

  // SECTION 7 (Verdict Drawer)
  const [verdictTab, setVerdictTab] = useState('Linguistic');

  // Scrollspy active section
  const spySections = useMemo(() => [
    { id: 'section-hero', label: 'Claim Identified' },
    { id: 'section-word', label: 'Language Investigated' },
    { id: 'section-vedic', label: 'Scriptural Evidence' },
    { id: 'section-devas', label: 'Cosmic Administration' },
    { id: 'section-evolution', label: 'Historical Development' },
    { id: 'section-plurality', label: 'Philosophical Context' },
    { id: 'section-misconceptions', label: 'Common Misconceptions' },
    { id: 'section-scholars', label: 'Scholar Perspectives' },
    { id: 'section-verdict', label: 'Final Verdict' },
    { id: 'section-reflection', label: 'Final Reflection' }
  ], []);

  const activeSection = useScrollSpy(spySections, { rootMargin: '-20% 0px -60% 0px' });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const reached = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 180;
          setIsBottomReached(reached);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section 1 Lexicon Meanings
  const lexicalMeanings = [
    {
      title: 'Category / Class (Varga / Prakāra)',
      sktMeaning: 'भेद (Bheda) or वर्ग (Varga)',
      lexiconRef: 'Amarakośa 3.3.18, Medinī Kośa',
      explanation: 'Refers to systemic classifications or categories of elements. Historically used in listing systems to segregate different classes of cosmic forces. In this context, "trayas-triṃśati koṭi" designates the thirty-three structural categories of divine administration, not thirty-three million distinct individual deities.',
      isScripturalIdeal: true
    },
    {
      title: 'Ten Million (Crore / Mathematical Value)',
      sktMeaning: 'दश-लक्षाः (10^7 Value)',
      lexiconRef: 'Śrīdhara Saṃhitā, Līlāvatī (Bhāskarācārya)',
      explanation: 'The standard numerical representation of 10,000,000. While this mathematical definition is standard in classical arithmetic and post-Vedic texts, translating it as such in the earliest Vedic contexts creates a structural contradiction with the actual enumerated lists.',
      isScripturalIdeal: false
    },
    {
      title: 'Peak / Summit / Extremity',
      sktMeaning: 'शिखर (Śikhara) or अग्र (Agra)',
      lexiconRef: 'Śabda-Kalpa-Druma, Vācaspatyam',
      explanation: 'The physical edge or absolute summit of an object, such as the curved edge of a bow (Dhanuṣ-koṭi), the tip of a sword, or the peak of a sacred mountain. Represents ultimate height or completion.',
      isScripturalIdeal: false
    },
    {
      title: 'Highest Point of Excellence',
      sktMeaning: 'पराकोटि (Parā-koṭi)',
      lexiconRef: 'Medinī Kośa, Halāyudha Kosha',
      explanation: 'Used metaphorically to indicate the supreme peak of a quality, realization, or logical argument. For example, Jñāna-koṭi refers to the absolute summit of spiritual wisdom.',
      isScripturalIdeal: false
    }
  ];

  const handleLexClick = (idx) => {
    setActiveLexMeaningIdx(idx);
    const newExplored = new Set(meaningsExplored);
    newExplored.add(idx);
    setMeaningsExplored(newExplored);
  };

  // Section 2 Chronological Timeline of Vedic Evidence
  const scripturalEvidenceTimeline = [
    {
      label: 'Ṛgveda',
      era: 'c. 1500–1200 BCE (Early Vedic Layer)',
      verse: 'ये देवासो दिव्येकादश स्थ पृथिव्यामध्येकादश स्थ ।\nअप्सुक्षितो महिनैकादश स्थ ते देवासो यज्ञमिमं जुषध्वम् ॥',
      iast: 'ye devāso divy ekādaśa stha pṛthivyām adhy ekādaśa stha |\napsukṣito mahinaikādaśa stha te devāso yajñam imaṃ juṣadhvam ||',
      translation: '"O ye eleven gods in heaven, ye eleven on earth, and ye eleven dwelling in the waters, accept this sacrifice with joy."',
      citation: 'Ṛgveda Saṃhitā 1.139.11',
      classification: 'Primary Scripture (Śruti)',
      explanation: 'This represents the earliest classification of devas in Sanskrit literature. It divides the divine entities strictly into three cosmic zones of eleven each: heaven (dyu), earth (pṛthivī), and mid-space/waters (antarikṣa). The total sum is explicitly enumerated as thirty-three.',
      significance: 'Establishes the base number thirty-three centuries before any concept of millions entered the textual tradition. There is no mention of "Koṭi" in this early layer.'
    },
    {
      label: 'Yajurveda',
      era: 'c. 1200–1000 BCE (Middle Vedic Layer)',
      verse: 'त्रयस्त्रिंशता स्तुवत परमेष्ठी देवोऽभवत् ।',
      iast: 'trayas-triṃśatā stuvata parameṣṭhī devo \'bhavat |',
      translation: '"By thirty-three [devas] they praised, and the Supreme Sovereign (Parameṣṭhī) became the ruler."',
      citation: 'Vājasaneyi Saṃhitā 14.31',
      classification: 'Primary Scripture (Śruti)',
      explanation: 'Reconfirms the sacred collective of thirty-three as a unified liturgical group associated with cosmic order and ritual sacrifice.',
      significance: 'Shows that the number thirty-three was not a fluid estimation, but a fixed, formalized administrative number associated with the organization of the cosmos.'
    },
    {
      label: 'Atharvaveda',
      era: 'c. 1000–800 BCE (Late Vedic Layer)',
      verse: 'यस्य त्रयस्त्रिंशद् देवा अङ्गे गात्रा विलेगिरे ।',
      iast: 'yasya trayastriṃśad devā aṅge gātrā vilegire |',
      translation: '"He in whose body all thirty-three gods are contained as limbs."',
      citation: 'Atharvaveda Saṃhitā 10.7.13',
      classification: 'Primary Scripture (Śruti)',
      explanation: 'Explains the thirty-three devas not as separate, independent cosmic entities, but as structural limbs contained within the single cosmic pillar (Skambha) representing the Supreme Reality.',
      significance: 'Marks the transition from administrative groupings to monistic philosophy, clarifying that the 33 are expressions of a single, unified cosmic body.'
    },
    {
      label: 'Śatapatha Brāhmaṇa',
      era: 'c. 800–600 BCE (Brāhmaṇa Prose Layer)',
      verse: 'अष्टौ वसवः एकादश रुद्राः द्वादशादित्याः प्रजापतिश्च त्रयस्त्रिंशत्तमः ।',
      iast: 'aṣṭau vasavaḥ ekādaśa rudrāḥ dvādaśādityāḥ prajāpatiś ca trayastriṃśattamaḥ |',
      translation: '"There are eight Vasus, eleven Rudras, twelve Ādityas, and Prajāpati is the thirty-third."',
      citation: 'Śatapatha Brāhmaṇa 4.5.7.2',
      classification: 'Later Vedic Prose (Brāhmaṇa)',
      explanation: 'This is the most critical text for identifying who the thirty-three actually are. It lists them explicitly: 8 Vasus (elemental abodes), 11 Rudras (vital breaths), 12 Ādityas (solar principles), and Prajāpati (the creator/sovereign force) as the thirty-third.',
      significance: 'Provides the definitive structural list. By detailing each category, it leaves no mathematical room for millions; the enumeration equals exactly thirty-three.'
    },
    {
      label: 'Bṛhadāraṇyaka Upaniṣad',
      era: 'c. 700–500 BCE (Upaniṣadic Layer)',
      verse: 'त्रयश्च त्री च शता त्रयश्च त्री च सहस्रेति । कतमे ते इति । महिमान एवैषामेते त्रयस्त्रिंशत्त्वेव देवा इति ।',
      iast: 'trayaś ca trī ca śatā trayaś ca trī ca sahasreti | katame te iti | mahimāna evaiṣāmete trayastriṃśattveva devā iti |',
      translation: '"He replied: \'Three thousand and three hundred and three, and three and thirty.\' Yājñavalkya said: \'Those are only their majestic manifestations (mahimānaḥ); in reality, there are only thirty-three gods.\'"',
      citation: 'Bṛhadāraṇyaka Upaniṣad 3.9.1',
      classification: 'Upaniṣad Philosophy (Śruti)',
      explanation: 'In this famous dialogue, Śākalya asks Yājñavalkya how many gods exist. Yājñavalkya starts with 3,306, but when pushed, explains that these are merely manifestations of the core thirty-three, which are then systematically reduced to One Ultimate Reality (Brahman).',
      significance: 'Definitively explains that any larger numbers (thousands or millions) are not independent entities, but reflections of the core thirty-three, which themselves are manifestations of the One.'
    }
  ];

  const handleVedicTimelineClick = (idx) => {
    setActiveVedicTimelineIdx(idx);
    const newSteps = new Set(evidenceStepsViewed);
    newSteps.add(idx);
    setEvidenceStepsViewed(newSteps);
  };

  // Section 3 Cosmic Devas Details
  const devasCouncil = [
    {
      title: '12 Ādityas',
      count: 12,
      subtitle: 'Solar Principles of Order and Time',
      scriptureRef: 'Ṛgveda 10.72.8, Bṛhadāraṇyaka Upaniṣad 3.9.5',
      desc: 'The Ādityas represent solar aspects, corresponding to the twelve months of the year. They govern the natural cycles of time, seasonal progression, and cosmic ethics.',
      elements: ['Mitra (Harmony)', 'Varuṇa (Universal Law)', 'Dhātṛ (Sustenance)', 'Aryaman (Chivalry/Friendship)', 'Aṃśa (Distribution)', 'Bhaga (Prosperity)', 'Vivasvat (Social Order)', 'Āditya/Savitṛ (Vitality/Light)', 'Indra/Śakra (Power)', 'Pūṣan (Nourishment)', 'Tvaṣṭṛ (Creation/Form)', 'Viṣṇu (Pervasive Space)'],
      cosmicPrinciple: 'Temporal progression (Kāla). The structural movement of solar energy through the calendar year that supports physical life cycles.'
    },
    {
      title: '11 Rudras',
      count: 11,
      subtitle: 'Vital Breaths and Inner Transformation',
      scriptureRef: 'Bṛhadāraṇyaka Upaniṣad 3.9.4',
      desc: 'The Rudras represent the vital forces (Prāṇas) within the human body and the cosmic equivalents. In Upanishadic philosophy, they are the ten sensory/motor breaths and the mind as the eleventh.',
      elements: ['Prāṇa (Inhalation)', 'Apāna (Exhalation)', 'Vyāna (Circulation)', 'Samāna (Digestion)', 'Udāna (Ascent)', 'Nāga (Eructation)', 'Kūrma (Blinking)', 'Krkala (Sneeze)', 'Devadatta (Yawn)', 'Dhanañjaya (Assimilation)', 'Manas (Mind - 11th)'],
      cosmicPrinciple: 'Biological animation and decay. When these eleven forces leave the body, they cause weeping (Rodayanti), connecting them to Rudra (the transformer/howler).'
    },
    {
      title: '8 Vasus',
      count: 8,
      subtitle: 'Elemental Abodes of Material Existence',
      scriptureRef: 'Bṛhadāraṇyaka Upaniṣad 3.9.3',
      desc: 'The Vasus are the elemental deities representing the physical abodes where all living beings dwell (Vāsayanti). They form the physical matrix of the universe.',
      elements: ['Agni (Fire/Energy)', 'Pṛthivī (Earth/Solid matter)', 'Vāyu (Air/Wind)', 'Antarikṣa (Space/Atmosphere)', 'Āditya (Sun/Solar heat)', 'Dyaus (Sky/Outer space)', 'Candra (Moon/Tides)', 'Nakṣatra (Stars/Constellations)'],
      cosmicPrinciple: 'Physical matter and environment. The basic atomic, thermal, and spatial elements that host and support organic consciousness.'
    },
    {
      title: '2 Aśvins',
      count: 2,
      subtitle: 'Twin Sovereigns / Creative Balancers',
      scriptureRef: 'Śatapatha Brāhmaṇa 4.5.7.2, Upaniṣads',
      desc: 'In the Brāhmaṇas, the final two are sometimes represented as the Aśvins (divine physicians of transition, dawn/dusk), or alternatively as Indra (the thunderbolt representing force) and Prajāpati (the sacrifice representing creative agency).',
      elements: ['Alternatively: Indra (Sovereign Force / Thunderbolt)', 'Alternatively: Prajāpati (Creative Agency / Sacrifice)', 'Aśvin 1: Dawn / Energy', 'Aśvin 2: Dusk / Matter'],
      cosmicPrinciple: 'Equilibrium (Sandhi). The critical transition points between dualities (light/dark, energy/matter, life/death) that sustain cosmic balance.'
    }
  ];

  const handleCouncilClick = (idx) => {
    setSelectedCouncilGroup(idx);
    const newDevas = new Set(devasExplored);
    newDevas.add(idx);
    setDevasExplored(newDevas);
  };

  // Section 4 Historical Roadmap Stages
  const historicalEvolutionRoadmap = [
    {
      title: 'Vedic Era',
      span: 'c. 1500–800 BCE',
      transition: 'Scriptural precision',
      details: 'Strict emphasis on the thirty-three cosmic categories. Vedic mantras invoke natural elements and administrative forces. The number is mathematically fixed to 33 in Śruti.',
      whyChanged: 'Zero mention of millions. Devas are understood as functional representations of one cosmic order (Skambha).'
    },
    {
      title: 'Brāhmaṇa & Upaniṣadic Era',
      span: 'c. 800–500 BCE',
      transition: 'Cosmic consolidation',
      details: 'The Prose Brāhmaṇas detail the explicit lists (Vasus, Rudras, Ādityas). Upaniṣads shift the focus inward, explaining that all 33 resolve into the single life-breath (Prāṇa) and ultimately Brahman.',
      whyChanged: 'Larger numbers (e.g. 3,306) are introduced as "glories" (mahimā) of the core 33, preserving structural hierarchy.'
    },
    {
      title: 'Epic & Purāṇic Era',
      span: 'c. 500 BCE–1000 CE',
      transition: 'Devotional expansion',
      details: 'The introduction of personal Bhakti. Countless regional, lineage, and local deities are integrated into the text corpus. The Sanskrit word "Koṭi" is frequently used in Purāṇic hyperbole to indicate vast numbers.',
      whyChanged: 'The language shifted. Popular storytelling merged localized deities under regional avatars, popularizing the term Koṭi as a numerical value.'
    },
    {
      title: 'Medieval & Vernacular Era',
      span: 'c. 1000–1800 CE',
      transition: 'Vernacular translation',
      details: 'Sanskrit works are translated into regional dialects. The word "Koṭi" in vernacular languages is translated strictly as "crore" (ten million), losing its original Vedic secondary meaning of "category/class".',
      whyChanged: 'Linguistic compression. The mathematical definition of Koṭi became absolute in common speech, leading to the phrase "33 crore gods".'
    },
    {
      title: 'Modern Era',
      span: 'c. 1800 CE–Present',
      transition: 'Literal popular consensus',
      details: 'Colonial scholars translate the texts literally as "330 million gods" to characterize Hinduism as polytheistic. Modern popular culture and textbooks copy this literalism without reviewing the Sanskrit lexicons.',
      whyChanged: 'Mass publication. The literal translation is repeated in media, textbooks, and debates until it becomes assumed consensus.'
    }
  ];

  const handleEvolutionClick = (idx) => {
    setActiveEvolutionIdx(idx);
    const newSteps = new Set(evolutionStepsViewed);
    newSteps.add(idx);
    setEvolutionStepsViewed(newSteps);
  };

  // Section 6 Misconceptions List
  const misconceptions = [
    {
      claim: '"Hinduism has exactly 330 million separate gods."',
      verdict: 'MISLEADING',
      verdictColor: 'text-amber-600 bg-amber-50 border-amber-300',
      reasoning: 'While popular devotional culture lists countless divine manifestations, this specific numerical census is a linguistic mistranslation of "33 Koṭi" (which originally meant 33 categories/types of devas in the oldest Vedic scriptures).'
    },
    {
      claim: '"The early Vedas literally mention 33 crore (330M) deities."',
      verdict: 'NOT SUPPORTED',
      verdictColor: 'text-red-600 bg-red-50 border-red-300',
      reasoning: 'The earliest scriptures (Ṛgveda, Yajurveda, Atharvaveda, Śatapatha Brāhmaṇa) repeatedly list exactly thirty-three devas. The term "crore" or "million" does not exist in any early Vedic layer in connection with the devas.'
    },
    {
      claim: '"Every single deva is a completely separate, competing supreme God."',
      verdict: 'NOT SUPPORTED',
      verdictColor: 'text-red-600 bg-red-50 border-red-300',
      reasoning: 'Vedic and Upaniṣadic philosophy views devas as administrative limbs of a single cosmic order (Ṛta) and expressions of the One Ultimate Reality (Brahman). They are not separate competing gods like in Greek mythology.'
    },
    {
      claim: '"The word Koṭi can mean class or category as well as ten million."',
      verdict: 'SUPPORTED',
      verdictColor: 'text-green-600 bg-green-50 border-green-300',
      reasoning: 'Classical Sanskrit lexicons (like the Amarakośa and Medinī Kośa) define Koṭi as varga (category/class) as well as the mathematical figure of ten million. The meaning depends entirely on the literary context.'
    }
  ];

  const tattvaPrinciples = [
    'Read the original source.',
    'Understand the historical context.',
    'Study the language carefully.',
    'Distinguish scripture from later tradition.',
    'Recognize diversity within Hindu thought.',
    'Allow evidence—not assumptions—to shape conclusions.'
  ];

  const relatedTattvaCards = [
    {
      pill: 'Inquiry Archive',
      title: 'Free Will vs Destiny',
      desc: 'Understanding the laws of Karma and cosmic governance explains the functional roles designated to administrative devas.',
      link: '/inquiry'
    },
    {
      pill: 'TATTVA Library',
      title: 'Time in Sanātana Dharma',
      desc: 'The twelve Ādityas correspond structurally to the solar cycles and months that define Vedic cosmic chronology.',
      link: '/library'
    },
    {
      pill: 'TATTVA Library',
      title: 'Structure of the Universe',
      desc: 'Visualizes the spatial lokas and zones occupied by the elemental Vasus, Rudras, and celestial deities.',
      link: '/library/the-architecture-of-the-cosmos'
    },
    {
      pill: 'TATTVA Library',
      title: 'Creation (Sṛṣṭi)',
      desc: 'Investigates how the primary elements (Vasus) emerge from the absolute Brahman to form the physical universe.',
      link: '/library/srsthi'
    }
  ];

  const finalKnowledgeNetwork = [
    { number: 'Case File 001', title: 'Bhagavad Gītā & War', status: 'completed' },
    { number: 'Case File 002', title: '33 Crore Gods', status: 'current' },
    { number: 'Case File 003', title: 'Ṛgveda & Viṣṇu', status: 'coming' },
    { number: 'Case File 004', title: 'Itihāsa vs Mythology', status: 'coming' },
    { number: 'Case File 005', title: 'Gītā & Caste', status: 'coming' },
    { number: 'Case File 006', title: 'Karma = Fate?', status: 'coming' }
  ];

  const hasLanguage = meaningsExplored.size >= 3;
  const hasScripture = evidenceStepsViewed.size >= 3;
  const hasDevas = devasExplored.size >= 3;
  const hasEvolution = evolutionStepsViewed.size >= 3;
  const isCaseFullyResolved = hasLanguage && hasScripture && hasDevas && hasEvolution;

  return (
    <div className="relative w-full min-h-screen bg-[#F4EFE6] text-[#1C1C1A] font-sans antialiased overflow-x-hidden pb-32">
      <GrainCanvas />

      {/* HORIZONTAL NAVIGATION BAR */}
      <nav className="absolute top-6 left-6 md:top-11 md:left-13 z-50 flex flex-wrap items-center gap-x-4 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-2 max-w-[calc(100%-48px)] select-none">
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
            className="tattva-nav-link transition-colors duration-500 text-[#1C1C1A]/50 group-hover:text-[#C58B52]"
          >
            INQUIRY ARCHIVE
          </span>
        </Link>

        <Link to="/library" className="group flex items-center">
          <span
            className="tattva-nav-link transition-colors duration-500 text-[#1C1C1A]/50 group-hover:text-[#C58B52]"
          >
            TATTVA LIBRARY
          </span>
        </Link>

        <Link to="/satya-mithya" className="group flex items-center">
          <span
            className="tattva-nav-link transition-colors duration-500 text-[#9E2A2B]"
          >
            SATYA & MITHYĀ
          </span>
        </Link>

        <Link to="/the-origin" className="group flex items-center">
          <span
            className="tattva-nav-link transition-colors duration-500 text-[#E9E2D4]/50 group-hover:text-[#C58B52]"
          >
            THE ORIGIN
          </span>
        </Link>
      </nav>

      {/* STICKY EVIDENCE SIDEBAR PANEL */}
      <AnimatePresence>
        {!isBottomReached && (
          <motion.aside
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="hidden lg:flex flex-col fixed right-12 top-40 w-64 border-l border-[#C58B52]/20 pl-6 z-20"
          >
            <span className="font-general text-[9px] uppercase tracking-[0.25em] text-[#C58B52] block mb-4 font-bold">
              Evidence Tracker
            </span>
            <div className="border border-[#C58B52]/30 bg-white/50 p-4 shadow-sm flex flex-col gap-3">
              <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#1C1C1A]/50 font-bold">
                Case File #002 Status
              </span>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: 'Claim Identified', checked: true },
                  { label: 'Language Investigated', checked: hasLanguage },
                  { label: 'Scriptural Evidence', checked: hasScripture },
                  { label: 'Cosmic Administration', checked: hasDevas },
                  { label: 'Historical Development', checked: hasEvolution },
                  { label: 'Philosophical Context', checked: activePluralityExplored },
                  { label: 'Common Misconceptions', checked: expandedMisconception !== null },
                  { label: 'Final Verdict', checked: isCaseFullyResolved }
                ].map((step, idx) => {
                  const isActive = activeSection === step.label;
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
                  <span className="text-[#9E2A2B] font-bold truncate max-w-[120px]">
                    {activeSection}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-3 font-bold">
                Archived Cases
              </span>
              <div className="flex flex-col gap-3">
                <Link to="/satya-mithya/does-gita-teach-war" className="group block">
                  <span className="font-general text-[7px] text-[#9E2A2B] block">CASE FILE 001</span>
                  <span className="font-instrument text-xs text-[#1C1C1A]/70 group-hover:text-[#1C1C1A] transition-colors block leading-tight">
                    Does the Bhagavad Gītā Teach War?
                  </span>
                </Link>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <div className="w-full max-w-3xl mx-auto px-6 pt-44 relative z-10 flex flex-col">

        {/* HERO SECTION */}
        <section id="section-hero" className="mb-12 border-b border-[#C58B52]/20 pb-16">
          <motion.div
            className="flex flex-col text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: EASE_EXPO }}
          >
            <span className="font-general text-[10px] uppercase tracking-[0.45em] text-[#9E2A2B] mb-4">
              INVESTIGATIVE ARCHIVE
            </span>
            <h1 className="font-instrument text-5xl md:text-7xl lg:text-8xl text-[#1C1C1A] tracking-tight leading-none mb-6">
              33 Crore Gods?
            </h1>
            <p className="font-cormorant text-lg md:text-xl font-light italic text-[#1C1C1A]/60 max-w-xl mx-auto leading-relaxed mb-8">
              Investigating one of the most repeated statements about Sanātana Dharma.
            </p>
          </motion.div>

          <Reveal>
            <div className="border border-[#C58B52]/30 bg-white/40 p-6 md:p-8 relative mt-6">
              <span className="absolute -top-3 left-6 bg-[#9E2A2B] text-white px-3 py-0.5 font-general text-[7.5px] uppercase tracking-[0.2em] font-bold">
                CASE FILE #002
              </span>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2 mb-6">
                <div>
                  <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#1C1C1A]/40 block mb-1">
                    Claim Under Review
                  </span>
                  <h2 className="font-instrument text-2xl md:text-3xl text-[#1C1C1A] font-semibold leading-tight">
                    "Hinduism teaches that there are literally 33 crore (330 million) gods."
                  </h2>
                </div>
                <div className="flex items-center gap-2 border border-[#9E2A2B]/30 bg-[#9E2A2B]/5 px-3 py-1 shrink-0">
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]"
                  />
                  <span className="font-general text-[8.5px] uppercase tracking-wider text-[#9E2A2B] font-bold">
                    UNVERIFIED
                  </span>
                </div>
              </div>
              <p className="font-cormorant text-lg text-[#1C1C1A]/85 leading-relaxed font-light mb-4">
                This statement has been printed in textbooks, discussed in debates, and repeated for generations. Critics cite it as proof of polytheism, while devotional teachers embrace it to show divine infinity. But does early scripture support it?
              </p>
              <div className="border-t border-[#C58B52]/20 pt-4 mt-4 flex justify-between items-center text-[10px] font-general uppercase tracking-wider text-[#1C1C1A]/45">
                <span>ESTIMATED READING: 24 MIN</span>
                <span>RESEARCH CONFIDENCE: VERY HIGH</span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 1: THE WORD THAT STARTED IT ALL
        ══════════════════════════════════════════════ */}
        <section id="section-word" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION I • LINGUISTICS
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              The Word That Started It All
            </h2>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              At the center of this controversy lies a single Sanskrit word found in the ancient texts: <strong>कोटि (Koṭi)</strong>. In contemporary Indian languages, *Koṭi* is translated exclusively as the numerical value "crore" (ten million). However, classical Sanskrit is a highly contextual, multi-layered language where one word holds diverse semantic categories.
            </p>
          </Reveal>

          {/* SANSKRIT WORD DISPLAY CARD */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-white/40 p-8 text-center max-w-lg mx-auto rounded-sm">
              <span className="font-general text-[7px] text-[#C58B52] block tracking-widest uppercase mb-1">Original Sanskrit</span>
              <div className="font-instrument text-5xl md:text-6xl text-[#9E2A2B] font-bold my-4">
                कोटि
              </div>
              <div className="font-general text-[10px] text-[#1C1C1A]/50 uppercase tracking-widest flex justify-center gap-6 mt-2">
                <span>IAST: koṭi</span>
                <span>PRONUNCIATION: koh-tee</span>
              </div>
              <div className="w-12 h-[1px] bg-[#C58B52]/40 mx-auto my-4" />
              <p className="font-cormorant text-sm text-[#1C1C1A]/70 leading-relaxed italic">
                Derived from the root <strong>कुट् (Kuṭ)</strong>, meaning to curve, bend, or divide.
              </p>
            </div>
          </Reveal>

          {/* INTERACTIVE MEANING EXPLORER */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-6">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 font-bold text-center">
                Interactive Lexical Explorer: The Meaning of Koṭi
              </span>
              <p className="font-cormorant text-xs text-[#1C1C1A]/60 text-center mb-6 max-w-md mx-auto">
                Click each semantic definition to investigate how different traditional lexicons translate the term.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {lexicalMeanings.map((meaning, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLexClick(idx)}
                    className={`p-4 border transition-all duration-300 text-left focus:outline-none ${activeLexMeaningIdx === idx
                        ? 'border-[#9E2A2B] bg-[#9E2A2B]/5'
                        : 'border-[#C58B52]/20 bg-white/40 hover:border-[#C58B52]/60'
                      }`}
                  >
                    <span className="font-general text-[7.5px] text-[#C58B52] block uppercase tracking-widest mb-1">
                      Definition 0{idx + 1}
                    </span>
                    <span className="font-instrument text-sm text-[#1C1C1A] font-bold block leading-tight">
                      {meaning.title}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeLexMeaningIdx !== null && (
                  <motion.div
                    key={activeLexMeaningIdx}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4 }}
                    className="border-t border-[#C58B52]/25 pt-4 px-2"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-instrument text-sm text-[#9E2A2B] font-bold">
                        Sanskrit equivalent: {lexicalMeanings[activeLexMeaningIdx].sktMeaning}
                      </span>
                      <span className="font-general text-[8px] text-[#1C1C1A]/40 uppercase tracking-widest font-semibold">
                        Lexicon: {lexicalMeanings[activeLexMeaningIdx].lexiconRef}
                      </span>
                    </div>
                    <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                      {lexicalMeanings[activeLexMeaningIdx].explanation}
                    </p>

                    {lexicalMeanings[activeLexMeaningIdx].isScripturalIdeal && (
                      <div className="mt-3 bg-green-50 border border-green-200 px-3 py-1.5 text-[10px] text-green-800 font-general uppercase tracking-wider">
                        ✓ Contextual target for Vedic administrative classifications.
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* SCHOLAR PERSPECTIVE NOTE */}
          <Reveal className="my-8">
            <div className="border-l-2 border-[#C58B52] pl-6 py-1 bg-white/20">
              <span className="font-general text-[7.5px] uppercase tracking-wider text-[#C58B52] font-bold block mb-1">
                Scholar Note • Dr. Radhakrishnan
              </span>
              <p className="font-cormorant text-xs text-[#1C1C1A]/70 leading-relaxed italic">
                "Sanskrit terms must never be translated as static algebraic values. Words like Koṭi function within semantic networks. Translating Koṭi as 'crore' in the Vedas is an anachronism; early Vedic literature lacks the decimal concept of 330 million entirely."
              </p>
            </div>
          </Reveal>

          {/* MYTH VS SCRIPTURE PANEL */}
          <Reveal className="my-8">
            <div className="border border-[#9E2A2B]/30 bg-[#9E2A2B]/2 p-6">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#9E2A2B] block mb-3 font-bold">
                Myth vs Scripture
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <span className="font-general text-[7.5px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-1">The Popular Belief</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed">
                    "Hinduism teaches that there are exactly 330 million individual personal gods operating in a vast celestial census."
                  </p>
                </div>
                <div>
                  <span className="font-general text-[7.5px] text-[#9E2A2B] uppercase tracking-widest block mb-1 font-bold">The Scriptural Reality</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed">
                    "The word Koṭi in the early Vedic layer designates structural classifications (categories) of celestial functions, establishing exactly thirty-three groups under a single order."
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* REFLECTION AND TRANSITION */}
          <Reveal className="my-12 text-center max-w-lg mx-auto">
            <p className="font-instrument italic text-lg text-[#1C1C1A]/70 leading-relaxed mb-6">
              "If one Sanskrit word can change the meaning of an entire tradition, how carefully should ancient texts be translated?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/40 mx-auto" />
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 2: THE VEDIC EVIDENCE
        ══════════════════════════════════════════════ */}
        <section id="section-vedic" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION II • SCRIPTURE
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              The Vedic Evidence
            </h2>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              This investigation now steps out of linguistics to search the earliest scriptures themselves. If Hinduism is fundamentally defined by 330 million gods, this massive numerical census should be detailed in the oldest layers of Vedic literature.
            </p>
          </Reveal>

          {/* CHRONOLOGICAL TIMELINE NAVIGATION */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-white/40 p-5 md:p-8">
              <span className="font-general text-[8px] md:text-[9px] uppercase tracking-widest text-[#C58B52] block mb-6 text-center font-bold">
                Vedic Chronological Timeline
              </span>
              
              {/* Timeline Navigation: horizontally scrollable on mobile, justified on desktop */}
              <div className="flex overflow-x-auto no-scrollbar md:overflow-visible gap-8 md:gap-0 md:justify-between border-b border-[#C58B52]/20 pb-2 mb-8 select-none whitespace-nowrap -mx-5 px-5 md:mx-0 md:px-0">
                {scripturalEvidenceTimeline.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleVedicTimelineClick(idx)}
                    className={`font-general text-[10px] md:text-[9px] uppercase tracking-wider pb-2 focus:outline-none transition-colors duration-300 flex-shrink-0 ${activeVedicTimelineIdx === idx
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
                  key={activeVedicTimelineIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col"
                >
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline mb-5 gap-2 md:gap-0">
                    <span className="font-general text-[9px] text-[#9E2A2B] border border-[#9E2A2B]/20 bg-[#9E2A2B]/5 px-2 py-1 font-bold uppercase tracking-wider inline-block">
                      {scripturalEvidenceTimeline[activeVedicTimelineIdx].classification}
                    </span>
                    <span className="font-cormorant text-sm md:text-xs text-[#1C1C1A]/50 italic">
                      Era: {scripturalEvidenceTimeline[activeVedicTimelineIdx].era}
                    </span>
                  </div>

                  <div className="border border-[#C58B52]/15 bg-[#F4EFE6] p-6 md:p-8 mb-6">
                    <pre className="font-instrument text-lg md:text-xl text-[#9E2A2B] font-semibold text-center whitespace-pre-wrap leading-relaxed">
                      {scripturalEvidenceTimeline[activeVedicTimelineIdx].verse}
                    </pre>
                    <div className="w-8 h-[1px] bg-[#C58B52]/30 mx-auto my-4" />
                    <pre className="font-instrument text-[12px] md:text-[11px] text-[#1C1C1A]/60 text-center whitespace-pre-wrap leading-relaxed italic">
                      {scripturalEvidenceTimeline[activeVedicTimelineIdx].iast}
                    </pre>
                  </div>

                  <p className="font-cormorant text-lg md:text-base text-[#1C1C1A] leading-relaxed font-light mb-6">
                    <strong className="font-semibold">Translation:</strong> {scripturalEvidenceTimeline[activeVedicTimelineIdx].translation}
                  </p>

                  <div className="bg-white/40 p-5 md:p-4 border border-[#C58B52]/10 mb-6">
                    <span className="font-general text-[8.5px] md:text-[7.5px] uppercase tracking-wider text-[#C58B52] block mb-2">
                      Context & Significance
                    </span>
                    <p className="font-cormorant text-sm md:text-xs text-[#1C1C1A]/80 md:text-[#1C1C1A]/70 leading-relaxed font-light">
                      {scripturalEvidenceTimeline[activeVedicTimelineIdx].explanation}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline mt-2 gap-3 md:gap-0">
                    <span className="font-general text-[8.5px] md:text-[7.5px] text-[#1C1C1A]/50 md:text-[#1C1C1A]/40 uppercase tracking-widest font-semibold">
                      Source: {scripturalEvidenceTimeline[activeVedicTimelineIdx].citation}
                    </span>
                    <button
                      onClick={() => setEvidenceCardExpanded(!evidenceCardExpanded)}
                      className="font-general text-[9px] md:text-[7.5px] text-[#9E2A2B] uppercase tracking-widest hover:underline focus:outline-none p-2 md:p-0 -ml-2 md:ml-0"
                    >
                      {evidenceCardExpanded ? 'Collapse Academic Note ▲' : 'Read Academic Note ▼'}
                    </button>
                  </div>

                  {evidenceCardExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="border-t border-[#C58B52]/20 mt-4 pt-5 md:pt-4 text-sm md:text-xs font-cormorant text-[#1C1C1A]/75 md:text-[#1C1C1A]/65 leading-relaxed font-light"
                    >
                      <strong className="font-semibold">Scholar Interpretation:</strong> {scripturalEvidenceTimeline[activeVedicTimelineIdx].significance}
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* CROSS REFERENCE */}
          <Reveal className="my-8">
            <div className="bg-[#C58B52]/5 border border-[#C58B52]/20 p-5 md:p-4 flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-0">
              <div>
                <span className="font-general text-[8.5px] md:text-[7.5px] text-[#C58B52] uppercase block tracking-wider mb-1.5 md:mb-1 font-bold">
                  Connected Library Path
                </span>
                <span className="font-instrument text-base md:text-sm text-[#1C1C1A] font-semibold block">
                  Sṛṣṭi — How the Universe Emerges
                </span>
              </div>
              <Link
                to="/library/srsthi"
                className="font-general text-[10px] md:text-[8px] uppercase tracking-widest text-[#9E2A2B] border border-[#9E2A2B] px-4 py-2.5 md:px-3 md:py-1 hover:bg-[#9E2A2B] hover:text-white transition-colors duration-300 font-bold text-center w-full md:w-auto"
              >
                Read Article
              </Link>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 3: THE THIRTY-THREE DEVAS
        ══════════════════════════════════════════════ */}
        <section id="section-devas" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION III • COSMOLOGY
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              The Thirty-three Devas
            </h2>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              Rather than an arbitrary compilation, the group of thirty-three represents a carefully structured classification of cosmic principles. They are not competing, independent rulers of different sectors, but the administrative expressions of a single cosmic system.
            </p>
          </Reveal>

          {/* COSMIC DEVAS ACCORDION GRID */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-white/40 p-6">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-4 text-center font-bold">
                Vedic Cosmic Assembly (33 Devas)
              </span>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 select-none">
                {devasCouncil.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCouncilClick(idx)}
                    className={`p-4 border text-center transition-all duration-300 focus:outline-none ${selectedCouncilGroup === idx
                        ? 'border-[#9E2A2B] bg-[#9E2A2B]/5'
                        : 'border-[#C58B52]/20 bg-white/40 hover:border-[#C58B52]/50'
                      }`}
                  >
                    <span className="font-instrument text-2xl font-bold text-[#9E2A2B] block">
                      {item.count}
                    </span>
                    <span className="font-general text-[9px] text-[#1C1C1A] uppercase tracking-widest block mt-1 font-semibold">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {selectedCouncilGroup !== null ? (
                  <motion.div
                    key={selectedCouncilGroup}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="border-t border-[#C58B52]/25 pt-4 px-2"
                  >
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="font-instrument text-lg text-[#1C1C1A] font-bold">
                        {devasCouncil[selectedCouncilGroup].subtitle}
                      </h4>
                      <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest font-semibold">
                        Ref: {devasCouncil[selectedCouncilGroup].scriptureRef}
                      </span>
                    </div>
                    <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light mb-4">
                      {devasCouncil[selectedCouncilGroup].desc}
                    </p>

                    <div className="bg-[#F4EFE6] p-4 border border-[#C58B52]/15 mb-4">
                      <span className="font-general text-[7.5px] uppercase tracking-wider text-[#9E2A2B] block mb-2 font-bold">
                        Associated cosmic principle
                      </span>
                      <p className="font-cormorant text-xs text-[#1C1C1A]/75 leading-relaxed font-light">
                        {devasCouncil[selectedCouncilGroup].cosmicPrinciple}
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-general text-[7.5px] uppercase tracking-wider text-[#C58B52] block mb-2">
                        Deity Enumeration
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {devasCouncil[selectedCouncilGroup].elements.map((el, index) => (
                          <span
                            key={index}
                            className="bg-white/80 border border-[#C58B52]/10 px-2 py-0.5 font-cormorant text-[11px] text-[#1C1C1A]/85 rounded-sm"
                          >
                            {el}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center py-6">
                    <p className="font-cormorant text-sm italic text-[#1C1C1A]/55">
                      Select one of the cosmic groups to inspect their names, attributes, and administrative roles.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* COSMIC ADMINISTRATION EXPLANATION PANEL */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/20 bg-white/20 p-6 text-center">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-2 font-bold">
                Vedic Governance Model
              </span>
              <p className="font-cormorant text-sm text-[#1C1C1A]/85 leading-relaxed font-light max-w-xl mx-auto">
                Just as a single state administration features multiple specialized ministries (finance, environment, health) to coordinate national operations under one unified constitution, the Vedic seers understood these thirty-three devas as divine ministries executing structural departments of the cosmos under the ultimate law of <strong>Ṛta</strong> (Universal Order) originating from <strong>Brahman</strong>.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 4: THE EVOLUTION OF A BELIEF
        ══════════════════════════════════════════════ */}
        <section id="section-evolution" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION IV • HISTORY
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              The Evolution of a Belief
            </h2>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              If the early scriptures explicitly state and enumerate exactly thirty-three, how did millions of seekers and observers come to believe in 33 crore (330 million) deities? This historical roadmap shows how linguistic translations, storytelling, and cultural developments gradually influenced public consensus.
            </p>
          </Reveal>

          {/* HISTORICAL TIMELINE DISPLAY */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/20 bg-white/40 p-4">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
                Chronological Development Roadmap
              </span>

              <div className="flex border-b border-[#C58B52]/20 pb-2 mb-6 justify-between select-none">
                {historicalEvolutionRoadmap.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleEvolutionClick(idx)}
                    className={`font-general text-[9px] uppercase tracking-wider pb-2 focus:outline-none transition-colors duration-300 ${activeEvolutionIdx === idx
                        ? 'text-[#9E2A2B] border-b border-[#9E2A2B] font-bold'
                        : 'text-[#1C1C1A]/40 hover:text-[#1C1C1A]'
                      }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEvolutionIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col"
                >
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52]/60 font-semibold">
                      Phase span: {historicalEvolutionRoadmap[activeEvolutionIdx].span}
                    </span>
                    <span className="font-general text-[7.5px] text-[#9E2A2B] border border-[#9E2A2B]/20 bg-[#9E2A2B]/5 px-2 py-0.5 font-bold uppercase tracking-wider">
                      {historicalEvolutionRoadmap[activeEvolutionIdx].transition}
                    </span>
                  </div>

                  <h4 className="font-instrument text-lg text-[#1C1C1A] font-bold mb-2">
                    {historicalEvolutionRoadmap[activeEvolutionIdx].title} details
                  </h4>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/85 leading-relaxed font-light mb-4">
                    {historicalEvolutionRoadmap[activeEvolutionIdx].details}
                  </p>

                  <div className="bg-[#F4EFE6] p-4 border border-[#C58B52]/15">
                    <span className="font-general text-[7.5px] uppercase tracking-wider text-[#C58B52] block mb-1">
                      Verification Standard: Did scripture change?
                    </span>
                    <p className="font-cormorant text-xs text-[#1C1C1A]/70 leading-relaxed font-light">
                      {historicalEvolutionRoadmap[activeEvolutionIdx].whyChanged}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          {/* HISTORICAL CONTEXT SIDE PANEL */}
          <Reveal className="my-8">
            <div className="bg-[#9E2A2B]/2 border border-[#9E2A2B]/20 p-6">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#9E2A2B] block mb-2 font-bold">
                Historical Context • The Colonial Impact
              </span>
              <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                When colonial Indologists translated Vedic Sanskrit in the 19th century, they frequently opted for literal translations of words like *Koṭi* to present a highly polytheistic representation of Hinduism. This aligned with the comparative mythologies of the era (Roman and Greek), and the simplified translation was gradually absorbed into public databases without verifying the Sanskrit semantic codes.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 5: ONE REALITY. MANY MANIFESTATIONS.
        ══════════════════════════════════════════════ */}
        <section id="section-plurality" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION V • PHILOSOPHY
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              One Reality. Many Manifestations.
            </h2>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              To understand the final piece of evidence, it is necessary to examine the philosophical structure of Sanātana Dharma. The coexistence of unity and diversity is not a theological conflict, but a basic design feature of Hindu metaphysics.
            </p>
          </Reveal>

          {/* COSMIC HIERARCHY FLOW VISUALIZATION */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-white/40 p-6 select-none">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-6 text-center font-bold">
                Metaphysical Hierarchy Matrix
              </span>

              <div className="flex flex-col gap-4 max-w-sm mx-auto text-center">
                <div className="border border-[#9E2A2B] bg-[#9E2A2B]/5 p-3">
                  <span className="font-general text-[7px] text-[#9E2A2B] block uppercase tracking-widest">01 • Source</span>
                  <span className="font-instrument text-base font-bold text-[#1C1C1A]">BRAHMAN (Ultimate Reality)</span>
                  <span className="font-cormorant text-[10px] text-[#1C1C1A]/60 block mt-0.5">Infinite, uncaused, formless consciousness</span>
                </div>
                <div className="text-xs text-[#C58B52]/50">↓</div>
                <div className="border border-[#C58B52]/40 bg-white/50 p-3">
                  <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-widest">02 • Governor</span>
                  <span className="font-instrument text-base font-bold text-[#1C1C1A]">ĪŚVARA (Personal Lord / Cosmic Director)</span>
                  <span className="font-cormorant text-[10px] text-[#1C1C1A]/60 block mt-0.5">Brahman with attributes (Saguṇa) governing cosmos</span>
                </div>
                <div className="text-xs text-[#C58B52]/50">↓</div>
                <div className="border border-[#C58B52]/20 bg-white/50 p-3">
                  <span className="font-general text-[7px] text-[#1C1C1A]/40 block uppercase tracking-widest">03 • Administrators</span>
                  <span className="font-instrument text-base font-bold text-[#1C1C1A]">DEVAS (Administrative Powers)</span>
                  <span className="font-cormorant text-[10px] text-[#1C1C1A]/60 block mt-0.5">The Thirty-three categories of cosmic elements</span>
                </div>
                <div className="text-xs text-[#C58B52]/50">↓</div>
                <div className="border border-[#1C1C1A]/10 bg-white/30 p-3">
                  <span className="font-general text-[7px] text-[#1C1C1A]/30 block uppercase tracking-widest">04 • Devotional Forms</span>
                  <span className="font-instrument text-base font-bold text-[#1C1C1A]">MŪRTI / LIVING TRADITION</span>
                  <span className="font-cormorant text-[10px] text-[#1C1C1A]/60 block mt-0.5">Local, regional forms facilitating individual devotion</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* DIVERGENT COMMENTATOR VIEWS */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/20 p-6 bg-white/40">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-4 text-center font-bold">
                Philosophical School Perspectives (Darśana)
              </span>

              <div className="flex border-b border-[#C58B52]/20 pb-2 mb-4 justify-between select-none">
                {['Advaita', 'Viśiṣṭādvaita', 'Dvaita'].map((school) => (
                  <button
                    key={school}
                    onClick={() => {
                      setActivePhilCard(school);
                      setActivePluralityExplored(true);
                    }}
                    className={`font-general text-[9px] uppercase tracking-wider pb-2 focus:outline-none transition-colors duration-300 ${activePhilCard === school
                        ? 'text-[#9E2A2B] border-b border-[#9E2A2B] font-bold'
                        : 'text-[#1C1C1A]/40 hover:text-[#1C1C1A]'
                      }`}
                  >
                    {school}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhilCard}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col py-2"
                >
                  {activePhilCard === 'Advaita' && (
                    <>
                      <h4 className="font-instrument text-base font-bold text-[#1C1C1A] mb-2">Advaita Vāda (Non-dualism)</h4>
                      <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                        Advaita, articulated by Śaṅkarācārya, explains that the devas and the universe are relative manifestations of the single Brahman. Devas represent qualified forms (Saguṇa) facilitating meditation for seekers who are not yet prepared to comprehend the absolute formless (Nirguṇa) truth. Ultimately, the self (Atman) and Brahman are non-dual.
                      </p>
                    </>
                  )}
                  {activePhilCard === 'Viśiṣṭādvaita' && (
                    <>
                      <h4 className="font-instrument text-base font-bold text-[#1C1C1A] mb-2">Viśiṣṭādvaita Vāda (Qualified Non-dualism)</h4>
                      <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                        Viśiṣṭādvaita, articulated by Rāmānujācārya, asserts that Brahman is personal (governed as Viṣṇu) and possesses infinite glorious attributes. The devas are real, individual conscious souls (Jīvas) executing cosmic administrative roles under the direction of the Supreme Lord, who exists as the inner soul of both the universe and the devas.
                      </p>
                    </>
                  )}
                  {activePhilCard === 'Dvaita' && (
                    <>
                      <h4 className="font-instrument text-base font-bold text-[#1C1C1A] mb-2">Dvaita Vāda (Dualism)</h4>
                      <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                        Dvaita, articulated by Madhvācārya, asserts a strict, eternal distinction between the Supreme Lord (Paramātman), individual souls (Jīvas), and matter. The devas are real, subordinate deities positioned at different levels of a strict spiritual hierarchy. They execute cosmic duties under the absolute command of the sovereign Supreme Lord.
                      </p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 6: COMMON MISCONCEPTIONS
        ══════════════════════════════════════════════ */}
        <section id="section-misconceptions" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION VI • POPULAR CRITIQUE
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              Common Misconceptions
            </h2>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              Several widely-encountered popular assertions are now subjected to direct evidentiary cross-examination under TATTVA standards.
            </p>
          </Reveal>

          {/* MISCONCEPTION INTERACTIVE LIST */}
          <div className="flex flex-col gap-4 select-none">
            {misconceptions.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="border border-[#C58B52]/20 bg-white/40">
                  <button
                    onClick={() => setExpandedMisconception(expandedMisconception === idx ? null : idx)}
                    className="w-full p-5 flex justify-between items-center text-left focus:outline-none"
                  >
                    <div className="flex flex-col">
                      <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-1">Inquiry statement 0{idx + 1}</span>
                      <span className="font-instrument text-base text-[#1C1C1A] font-semibold">{item.claim}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border ${item.verdictColor} font-bold`}>
                        {item.verdict}
                      </span>
                      <span className="text-[#C58B52]/50 text-xs">{expandedMisconception === idx ? '▲' : '▼'}</span>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedMisconception === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-[#C58B52]/10 p-5 bg-white/30 text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light"
                      >
                        <strong>Verification analysis:</strong> {item.reasoning}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 7: SCHOLAR PERSPECTIVES
        ══════════════════════════════════════════════ */}
        <section id="section-scholars" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION VII • SCHOLARS
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              Scholar Perspectives
            </h2>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              How do traditional commentators, modern Indologists, and contemporary Sanskrit scholars address the numerical assertion?
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <div className="border border-[#C58B52]/20 bg-white/40 p-5 flex flex-col h-full">
                <span className="font-general text-[7.5px] uppercase tracking-wider text-[#9E2A2B] block mb-3 font-bold">Traditional Commentators</span>
                <p className="font-cormorant text-xs text-[#1C1C1A]/70 leading-relaxed font-light">
                  Seers like Yāska (Nirukta) and Sāyaṇa (Vedic commentator) assert that the devas represent diverse classifications of one cosmic self (Atman). They maintain the count of thirty-three as a literal framework of cosmic administration, classifying them by zones.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border border-[#C58B52]/20 bg-white/40 p-5 flex flex-col h-full">
                <span className="font-general text-[7.5px] uppercase tracking-wider text-[#C58B52] block mb-3 font-bold">Modern Indologists</span>
                <p className="font-cormorant text-xs text-[#1C1C1A]/70 leading-relaxed font-light">
                  Western Indologists (e.g. Max Müller, Macdonell) initially translated "33 Koṭi" literally as 330 million to validate concepts of primitive polytheism. Later scholars recognized that the numeric value crore is an anachronism when applied to the earliest Vedic literature.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="border border-[#C58B52]/20 bg-white/40 p-5 flex flex-col h-full">
                <span className="font-general text-[7.5px] uppercase tracking-wider text-[#1C1C1A]/40 block mb-3 font-bold">Contemporary Scholars</span>
                <p className="font-cormorant text-xs text-[#1C1C1A]/70 leading-relaxed font-light">
                  Linguistic and Sanskrit academic researchers confirm that *Koṭi* was translated as category in early catalogs. They attribute the popular consensus strictly to medieval linguistic drift and regional dialect translations.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 8: FINAL VERDICT
        ══════════════════════════════════════════════ */}
        <section id="section-verdict" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION VIII • VERDICT
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              Final Verdict
            </h2>
          </Reveal>

          {/* REDESIGNED VERDICT CARD */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/30 bg-white/40 p-8 relative">
              <span className="absolute -top-3 left-6 bg-[#9E2A2B] text-white px-4 py-0.5 font-general text-[8px] uppercase tracking-widest font-bold">
                OFFICIAL VERDICT REGISTRY
              </span>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 mt-2">
                <div>
                  <span className="font-general text-[9px] uppercase tracking-widest text-[#1C1C1A]/45">Subject Claim</span>
                  <h3 className="font-instrument text-xl text-[#1C1C1A] font-bold leading-tight mt-1">
                    "Hinduism teaches that there are literally 33 crore (330 million) gods."
                  </h3>
                </div>
                <div className="border border-amber-600 bg-amber-50 px-4 py-2 text-center shrink-0">
                  <span className="font-general text-[7.5px] text-amber-600 block tracking-widest uppercase">Verdict</span>
                  <span className="font-instrument text-xl font-bold text-amber-600">MISLEADING</span>
                </div>
              </div>

              {/* TABBED EVIDENCE EXAMINED */}
              <div className="border border-[#C58B52]/20 bg-[#F4EFE6]/50 p-4 rounded-sm">
                <div className="flex border-b border-[#C58B52]/15 pb-2 mb-4 justify-between select-none">
                  {['Linguistic', 'Scriptural', 'Historical', 'Conclusion'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setVerdictTab(tab)}
                      className={`font-general text-[8.5px] uppercase tracking-wider pb-2 focus:outline-none transition-colors duration-300 ${verdictTab === tab
                          ? 'text-[#9E2A2B] border-b border-[#9E2A2B] font-bold'
                          : 'text-[#1C1C1A]/40 hover:text-[#1C1C1A]'
                        }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={verdictTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xs font-cormorant text-[#1C1C1A]/85 leading-relaxed font-light py-1"
                  >
                    {verdictTab === 'Linguistic' && (
                      <p>
                        <strong>Language Analysis:</strong> The Sanskrit word *Koṭi* has multiple lexical meanings. In early Vedic registers, it is used to designate structural subdivisions, classes, or categories (Varga). Translating it exclusively as the mathematical figure crore (ten million) ignores this original semantic classification.
                      </p>
                    )}
                    {verdictTab === 'Scriptural' && (
                      <p>
                        <strong>Scriptural Analysis:</strong> The earliest scriptures (Ṛgveda, Yajurveda, Atharvaveda, Śatapatha Brāhmaṇa) repeatedly list exactly thirty-three devas, detailing their individual names and cosmic roles. There is no scriptural mention of millions in any early Śruti layer in connection with the devas.
                      </p>
                    )}
                    {verdictTab === 'Historical' && (
                      <p>
                        <strong>Historical Development:</strong> The popular statement "33 crore gods" emerged later through medieval vernacular translations where *Koṭi* was translated strictly as crore, and was subsequently reinforced by literal colonial translations to classify Hinduism as polytheistic.
                      </p>
                    )}
                    {verdictTab === 'Conclusion' && (
                      <p>
                        <strong>Evidentiary Conclusion:</strong> The claim contains a factual base (the name 33 Devas exists) but mistranslates the linguistic qualifier to construct a simplified numerical census. Therefore, the statement is classified as misleading.
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-between items-center border-t border-[#C58B52]/20 pt-4 mt-6 text-[9px] font-general uppercase tracking-wider text-[#1C1C1A]/45">
                <span>Confidence index: High (5/5)</span>
                <span>TATTVA CASE REGISTRY #002</span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 9: FINAL REFLECTION
        ══════════════════════════════════════════════ */}
        <section id="section-reflection" className="py-16 mt-12">
          <Reveal>
            <h2 className="font-instrument text-4xl text-[#1C1C1A] mb-2 text-center">
              Final Reflection
            </h2>
            <p className="font-instrument italic text-lg text-[#C58B52] mb-12 text-center">
              Understanding begins when assumptions are examined.
            </p>
          </Reveal>

          {/* THREE SILENT STATEMENTS */}
          <div className="flex flex-col gap-12 my-16 text-center max-w-xl mx-auto">
            <Reveal delay={0.2}>
              <p className="font-instrument text-2xl text-[#1C1C1A]/85 italic">
                "Not every popular belief begins in scripture."
              </p>
            </Reveal>

            <Reveal delay={0.8}>
              <p className="font-instrument text-2xl text-[#9E2A2B] italic">
                "Not every ancient word carries only one meaning."
              </p>
            </Reveal>

            <Reveal delay={1.4}>
              <p className="font-instrument text-2xl text-[#1C1C1A]/85 italic">
                "And not every simple answer can explain a civilization thousands of years old."
              </p>
            </Reveal>
          </div>

          {/* THE GREATER LESSON */}
          <Reveal className="my-12">
            <div className="max-w-xl mx-auto border-l border-[#C58B52]/30 pl-6 my-8">
              <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/85 leading-relaxed font-light mb-4">
                Ancient traditions are rarely understood through isolated quotations or simplified numbers. Language evolves, interpretations develop, and religious practice expands over centuries.
              </p>
              <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/85 leading-relaxed font-light">
                The task of a careful investigator is not to reject tradition—nor to accept every popular claim without question—but to patiently distinguish <strong>scripture</strong>, <strong>history</strong>, <strong>philosophy</strong>, and <strong>living tradition</strong>. That is the purpose of every SATYA / MITHYĀ investigation.
              </p>
            </div>
          </Reveal>

          {/* THE TATTVA PRINCIPLE */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/30 bg-white/40 p-6 md:p-8 max-w-xl mx-auto">
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

          {/* A FINAL QUESTION */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-4">
              Inquiry
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#1C1C1A]/85 leading-relaxed">
              If one Sanskrit word can reshape how millions understand a tradition... how many other beliefs deserve the same careful investigation?
            </p>
          </Reveal>

          {/* RELATED TATTVA KNOWLEDGE */}
          <div className="w-full my-12 border-t border-[#C58B52]/10 pt-12">
            <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#9E2A2B] block mb-8 text-center font-bold">
              Continue Exploring Connected Paths
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedTattvaCards.map((c, idx) => (
                <Link
                  key={idx}
                  to={c.link}
                  className="border border-[#C58B52]/15 bg-white/40 p-6 flex flex-col justify-between group transition-all duration-300 hover:border-[#C58B52]/35 hover:-translate-y-0.5"
                >
                  <div>
                    <span className="font-general text-[7px] text-[#C58B52] block uppercase mb-1">
                      {c.pill}
                    </span>
                    <h4 className="font-instrument text-lg text-[#1C1C1A] font-semibold group-hover:text-[#9E2A2B] transition-colors leading-tight mb-2">
                      {c.title}
                    </h4>
                    <p className="font-cormorant text-xs text-[#1C1C1A]/70 leading-relaxed font-light">
                      {c.desc}
                    </p>
                  </div>
                  <span className="font-general text-[7px] uppercase tracking-widest text-[#9E2A2B] block mt-4 font-bold">
                    Explore Pillar →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* KNOWLEDGE NETWORK GRAPH */}
          <div className="w-full my-12 border-t border-[#C58B52]/10 pt-12">
            <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#C58B52] block mb-8 text-center font-bold">
              SATYA / MITHYĀ Knowledge Map
            </span>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 relative select-none">
              {finalKnowledgeNetwork.map((node, idx) => (
                <React.Fragment key={idx}>
                  <div className={`p-4 border transition-all duration-500 text-center min-w-[130px] ${node.status === 'current'
                      ? 'border-[#9E2A2B] bg-[#9E2A2B]/5 shadow-sm'
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
                  {idx < finalKnowledgeNetwork.length - 1 && (
                    <span className="text-[#C58B52]/30 text-xs rotate-90 md:rotate-0">
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* THE CLOSING MOMENT & BUTTON */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-instrument text-2xl md:text-3xl text-[#1C1C1A]/85 leading-tight tracking-tight mb-8">
              "Truth is not discovered by repeating a claim.<br />
              It is discovered by investigating it."
            </p>

            <Link
              to="/satya-mithya"
              className="inline-block px-6 py-2.5 border border-[#9E2A2B] text-[#9E2A2B] font-general text-[9px] uppercase tracking-widest font-bold hover:bg-[#9E2A2B] hover:text-white transition-colors duration-500 mt-4"
            >
              Begin Another Investigation
            </Link>
          </Reveal>
        </section>

      </div>
    </div>
  );
}
