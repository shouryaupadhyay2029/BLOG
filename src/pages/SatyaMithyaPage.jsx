import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const EASE_EXPO = [0.16, 1, 0.3, 1];

const ALL_CASES = [
  {
    number: 'CASE 001',
    title: 'Does the Bhagavad Gītā Teach War?',
    categoryLabel: 'Ethics • Bhagavad Gītā',
    categories: ['Bhagavad Gītā', 'Philosophy', 'Ethics'],
    status: 'Completed',
    verdict: 'Misleading',
    readingTime: '18 min',
    id: 'does-gita-teach-war',
    desc: 'Investigating whether the Gītā commands literal battlefield violence or teaches context-specific duty and selfless action.'
  },
  {
    number: 'CASE 002',
    title: 'Are There Really 33 Crore Gods?',
    categoryLabel: 'Vedas • Philosophy',
    categories: ['Vedas', 'Philosophy', 'Language'],
    status: 'Completed',
    verdict: 'Misleading',
    readingTime: '24 min',
    id: 'are-there-really-33-crore-gods',
    desc: 'Evaluating linguistic roots of the Sanskrit word "Koti" and the structural grouping of the cosmic Vedic council.'
  },
  {
    number: 'CASE 003',
    title: 'Did the Ṛgveda Say Viṣṇu Created the Universe?',
    categoryLabel: 'Vedas • Cosmology',
    categories: ['Vedas', 'Cosmology'],
    status: 'Research in Progress',
    id: 'did-rgveda-say-vishnu-created-universe',
    desc: 'Investigating whether the earliest Vedic mantras identify a personal creator deity or describe a unified cosmic order.'
  },
  {
    number: 'CASE 004',
    title: 'Does Karma Mean Everything Is Predetermined?',
    categoryLabel: 'Karma • Philosophy',
    categories: ['Philosophy', 'Upanishads'],
    status: 'Planned',
    id: 'does-karma-mean-fate',
    desc: 'Examining scriptural descriptions of agency, causality, and moral responsibility vs popular fatalistic definitions.'
  },
  {
    number: 'CASE 005',
    title: 'Are the Rāmāyaṇa and Mahābhārata Just Mythology?',
    categoryLabel: 'Itihāsa',
    categories: ['Itihāsa'],
    status: 'Planned',
    id: 'are-ramayana-mahabharata-mythology',
    desc: 'Unfolding what the scriptures claim about historical recording and the traditional concept of Itihāsa.'
  },
  {
    number: 'CASE 006',
    title: 'Does the Bhagavad Gītā Support the Caste System?',
    categoryLabel: 'Gītā • Society',
    categories: ['Bhagavad Gītā', 'Society'],
    status: 'Planned',
    id: 'does-bhagavad-gita-support-caste',
    desc: 'Analyzing scriptural descriptions of varṇa-dharma based on qualities vs modern hereditary caste structures.'
  },
  {
    number: 'CASE 007',
    title: 'Did Draupadī Really Laugh at Duryodhana?',
    categoryLabel: 'Itihāsa • Society',
    categories: ['Itihāsa', 'Society'],
    status: 'Planned',
    id: 'did-draupadi-really-laugh-at-duryodhana',
    desc: 'Tracing popular narrative lore of the palace of illusions back to Sanskrit critical editions of the Mahābhārata.'
  },
  {
    number: 'CASE 008',
    title: 'Do the Upanishads Reject Ritualism Entirely?',
    categoryLabel: 'Upanishads • Philosophy',
    categories: ['Upanishads', 'Philosophy'],
    status: 'Planned',
    id: 'do-upanishads-reject-ritualism',
    desc: 'Deconstructing the relationship between the ritualistic section (Karma-kanda) and knowledge section (Jnana-kanda).'
  },
  {
    number: 'CASE 009',
    title: 'Is the Word "Hindu" Found in Ancient Scriptures?',
    categoryLabel: 'Language • Society',
    categories: ['Language', 'Society'],
    status: 'Planned',
    id: 'word-hindu-in-scriptures',
    desc: 'Investigating the geographical, historical, and etymological roots of the word "Hindu" in Sanskrit texts.'
  },
  {
    number: 'CASE 010',
    title: 'Did Sītā Walk Into the Fire Out of Submission?',
    categoryLabel: 'Itihāsa • Society',
    categories: ['Itihāsa', 'Society'],
    status: 'Planned',
    id: 'sita-fire-trial-context',
    desc: 'Analyzing the ethical and administrative context of the Agni Parīkṣā in Vālmīki\'s Rāmāyaṇa.'
  },
  {
    number: 'CASE 011',
    title: 'Does the Ṛgveda Contain Advanced Modern Science?',
    categoryLabel: 'Vedas • Cosmology',
    categories: ['Vedas', 'Cosmology'],
    status: 'Planned',
    id: 'rigveda-and-modern-science',
    desc: 'Critically reviewing claims of advanced physics, speed of light, and cosmology inside early Vedic mantras.'
  },
  {
    number: 'CASE 012',
    title: 'Is Idol Worship (Mūrti Pūjā) Forbidden in the Vedas?',
    categoryLabel: 'Vedas • Philosophy',
    categories: ['Vedas', 'Philosophy'],
    status: 'Planned',
    id: 'idol-worship-in-vedas',
    desc: 'Investigating representations of the formless supreme (Nirguna) vs worship through physical symbols (Saguna).'
  },
  {
    number: 'CASE 013',
    title: 'Did Kṛṣṇa Have 16,000 Wives Literally?',
    categoryLabel: 'Itihāsa • Society',
    categories: ['Itihāsa', 'Society'],
    status: 'Planned',
    id: 'krishna-sixteen-thousand-wives',
    desc: 'Reviewing the narrative context of the liberation of captive women from Narakāsura\'s fortress.'
  },
  {
    number: 'CASE 014',
    title: 'Does Manu Smṛti Govern Modern Hindu Practice?',
    categoryLabel: 'Society',
    categories: ['Society'],
    status: 'Planned',
    id: 'manu-smriti-status',
    desc: 'Investigating the canonical authority of Smṛti literature vs Śruti in modern living traditions.'
  },
  {
    number: 'CASE 015',
    title: 'Is Hell (Naraka) Eternal in Hinduism?',
    categoryLabel: 'Cosmology • Philosophy',
    categories: ['Cosmology', 'Philosophy'],
    status: 'Planned',
    id: 'is-hell-eternal',
    desc: 'Evaluating scriptural descriptions of temporary cleansing lokas vs concepts of eternal damnation.'
  },
  {
    number: 'CASE 016',
    title: 'Did the Buddha Initiate the Decline of Vedic Tradition?',
    categoryLabel: 'Philosophy • Society',
    categories: ['Philosophy', 'Society'],
    status: 'Planned',
    id: 'buddhism-and-vedic-traditions',
    desc: 'Examining historical and philosophical debates between Buddhist logicians and early Mimamsa scholars.'
  },
  {
    number: 'CASE 017',
    title: 'Was the Bhagavad Gītā Interpolated Into the Epic Later?',
    categoryLabel: 'Gītā • Itihāsa',
    categories: ['Bhagavad Gītā', 'Itihāsa'],
    status: 'Planned',
    id: 'gita-interpolation-claims',
    desc: 'Analyzing linguistic meters and structural continuity of the Gītā within the Bhīṣma Parva.'
  },
  {
    number: 'CASE 018',
    title: 'Are All Sanskrit Mantras Mystical Sound Keys?',
    categoryLabel: 'Language • Upanishads',
    categories: ['Language', 'Upanishads'],
    status: 'Planned',
    id: 'sanskrit-mantras-sound-keys',
    desc: 'Deconstructing language theory in Vedic speech (Vak) vs modern psychological interpretations.'
  },
  {
    number: 'CASE 019',
    title: 'Did Chanakya Author the Entire Arthashastra?',
    categoryLabel: 'Ethics • Society',
    categories: ['Ethics', 'Society'],
    status: 'Planned',
    id: 'chanakya-arthashastra-authorship',
    desc: 'Evaluating textual layers and historic codifications of ancient statecraft and political ethics.'
  },
  {
    number: 'CASE 020',
    title: 'Does Hinduism Prohibit Crossing the Oceans?',
    categoryLabel: 'Society',
    categories: ['Society'],
    status: 'Planned',
    id: 'kalapani-ocean-crossing-myth',
    desc: 'Investigating dynamic medieval rules on purity (Kala Pani) vs ancient active maritime trade routes.'
  },
  {
    number: 'CASE 021',
    title: 'Is Advaita the Only Authentic Upaniṣadic Philosophy?',
    categoryLabel: 'Upanishads • Philosophy',
    categories: ['Upanishads', 'Philosophy'],
    status: 'Planned',
    id: 'advaita-only-upanishadic-philosophy',
    desc: 'Reviewing non-dualism alongside qualified non-dualism (Viśiṣṭādvaita) and dualism (Dvaita) scriptural bases.'
  },
  {
    number: 'CASE 022',
    title: 'Does the Rigveda Mandate Cow Sacrifice (Gomedha)?',
    categoryLabel: 'Vedas • Ethics',
    categories: ['Vedas', 'Ethics'],
    status: 'Planned',
    id: 'gomedha-vedic-sacrifice',
    desc: 'Examining semantic interpretations of "Gomedha" and "Aghnya" in early Vedic liturgical layers.'
  },
  {
    number: 'CASE 023',
    title: 'Did Vyāsa Author Every Purāṇa Personally?',
    categoryLabel: 'Philosophy • Itihāsa',
    categories: ['Philosophy', 'Itihāsa'],
    status: 'Planned',
    id: 'vyasa-purana-authorship',
    desc: 'Investigating the traditional role of Vyāsa as compiler vs regional authorship expansions.'
  },
  {
    number: 'CASE 024',
    title: 'Is Reincarnation Taught in the Earliest Vedas?',
    categoryLabel: 'Vedas • Philosophy',
    categories: ['Vedas', 'Philosophy'],
    status: 'Planned',
    id: 'reincarnation-in-rigveda',
    desc: 'Tracing how concepts of transmigration develop from early Vedic hymns to complete Upanishadic declarations.'
  }
];

const FILTERS = [
  'All',
  'Completed',
  'Research',
  'Planned',
  'Vedas',
  'Upanishads',
  'Bhagavad Gītā',
  'Itihāsa',
  'Cosmology',
  'Society',
  'Language',
  'Philosophy'
];

function CreamGrainCanvas() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2280%22_height=%2280%22><filter_id=%22f%22><feTurbulence_type=%22fractalNoise%22_baseFrequency=%220.6%22_numOctaves=%223%22_stitchTiles=%22stitch%22/></filter><rect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23f)%22/></svg>')] bg-repeat"
      />
    </>
  );
}

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

function ArchiveRow({ index, number, title, categoryLabel, status, verdict, readingTime, id, desc }) {
  const [isHovered, setIsHovered] = useState(false);
  const isAvailable = status === 'Completed';

  return (
    <Link to={`/satya-mithya/${id}`} className="block w-full">
      <motion.div
        className="relative flex flex-col md:flex-row md:items-center justify-between w-full py-10 border-b border-[#C58B52]/15 cursor-pointer group pl-6 pr-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-5%' }}
        transition={{ duration: 1.1, ease: EASE_EXPO, delay: index * 0.05 }}
      >
        {/* The thin golden vertical line growing on hover */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[2.5px] bg-[#C58B52]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isHovered ? 1 : 0 }}
          style={{ originY: 0.5 }}
          transition={{ duration: 0.6, ease: EASE_EXPO }}
        />

        <div className="flex gap-8 md:gap-12 items-baseline">
          <span className="font-instrument text-sm text-[#1C1C1A]/40 font-semibold select-none leading-none">
            {number}
          </span>
          <div className="flex flex-col">
            <h3 className="font-instrument text-2xl md:text-3xl text-[#1C1C1A]/75 transition-colors duration-500 group-hover:text-[#1C1C1A] tracking-tight leading-tight">
              {title}
            </h3>
            <p className="font-cormorant text-xs md:text-sm text-[#1C1C1A]/55 mt-2 font-light italic max-w-xl group-hover:text-[#1C1C1A]/75 transition-colors duration-500">
              {desc}
            </p>
            <span className="font-general text-[8.5px] uppercase tracking-[0.2em] text-[#C58B52]/70 mt-3 transition-colors duration-500 group-hover:text-[#C58B52]">
              {categoryLabel}
            </span>
          </div>
        </div>

        {/* Right Side Stats & badges */}
        <div className="flex items-center gap-6 mt-4 md:mt-0 select-none">
          {status === 'Completed' ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 border border-[#9E2A2B]/30 bg-[#9E2A2B]/5 px-2 py-0.5">
                <span className="w-1 h-1 rounded-full bg-[#9E2A2B]" />
                <span className="font-general text-[8px] uppercase tracking-wider text-[#9E2A2B] font-bold">
                  Completed
                </span>
              </div>
              
              {verdict && (
                <div className="flex flex-col text-right">
                  <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest leading-none">Verdict</span>
                  <span className="font-instrument text-xs font-bold text-[#9E2A2B] mt-0.5">{verdict}</span>
                </div>
              )}

              {readingTime && (
                <span className="font-general text-[8px] text-[#1C1C1A]/50 border border-[#1C1C1A]/10 px-1.5 py-0.5 rounded-sm">
                  {readingTime}
                </span>
              )}
            </div>
          ) : status === 'Research in Progress' ? (
            <div className="flex items-center gap-2 border border-[#C58B52]/35 bg-[#C58B52]/5 px-2 py-0.5">
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 rounded-full bg-[#C58B52]"
              />
              <span className="font-general text-[8px] uppercase tracking-wider text-[#C58B52] font-semibold">
                Researching
              </span>
            </div>
          ) : (
            <span className="font-general text-[8px] uppercase tracking-widest text-[#1C1C1A]/35">
              Planned
            </span>
          )}

          {/* Minimal Arrow */}
          <motion.div
            className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ x: -8 }}
            animate={{ x: isHovered ? 0 : -8 }}
            transition={{ duration: 0.8, ease: EASE_EXPO }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C58B52"
              strokeWidth="1.25"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}

export function SatyaMithyaPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Dynamic values
  const currentMonthYear = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const totalPlanned = ALL_CASES.length;
  const publishedCount = ALL_CASES.filter(c => c.status === 'Completed').length;
  const upcomingCount = totalPlanned - publishedCount;

  // Filter logic
  const filteredCases = ALL_CASES.filter((c) => {
    // Status/Category Filters
    let matchesFilter = true;
    if (selectedFilter === 'Completed') {
      matchesFilter = c.status === 'Completed';
    } else if (selectedFilter === 'Research') {
      matchesFilter = c.status === 'Research in Progress';
    } else if (selectedFilter === 'Planned') {
      matchesFilter = c.status === 'Planned';
    } else if (selectedFilter !== 'All') {
      matchesFilter = c.categories.includes(selectedFilter);
    }

    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const exploreRandomCase = () => {
    const completed = ALL_CASES.filter(c => c.status === 'Completed');
    if (completed.length > 0) {
      const randomCase = completed[Math.floor(Math.random() * completed.length)];
      navigate(`/satya-mithya/${randomCase.id}`);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#F4EFE6] text-[#1C1C1A] font-sans antialiased overflow-x-hidden pb-32">
      <CreamGrainCanvas />

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
      </nav>

      <div className="w-full max-w-6xl mx-auto px-6 pt-44 relative z-10 flex flex-col">
        
        {/* HERO SECTION */}
        <motion.div
          className="mb-12 flex flex-col"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
        >
          <span className="font-general text-[10px] uppercase tracking-[0.45em] text-[#9E2A2B] mb-5 font-bold">
            INVESTIGATIVE ARCHIVE
          </span>
          <h1 className="font-instrument text-6xl md:text-8xl lg:text-9xl text-[#1C1C1A] tracking-tighter leading-none mb-10 select-none">
            SATYA / MITHYĀ
          </h1>
          <p className="font-cormorant text-xl md:text-2xl font-light italic text-[#1C1C1A]/70 max-w-2xl leading-relaxed mb-12">
            Separating scriptural truth from popular misconception through evidence, scripture, language, history and philosophy.
          </p>

          {/* EDITORIAL STATISTICS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[#C58B52]/25 py-6 gap-6 md:gap-0 mt-4 select-none">
            <div className="flex flex-col md:border-r border-[#C58B52]/15 md:px-6">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#1C1C1A]/40 mb-1.5 block">
                Published Investigations
              </span>
              <span className="font-instrument text-3xl text-[#1C1C1A] font-bold">
                {publishedCount}
              </span>
            </div>
            <div className="flex flex-col md:border-r border-[#C58B52]/15 md:px-6">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#1C1C1A]/40 mb-1.5 block">
                Planned Investigations
              </span>
              <span className="font-instrument text-3xl text-[#1C1C1A] font-bold">
                18
              </span>
            </div>
            <div className="flex flex-col md:border-r border-[#C58B52]/15 md:px-6">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#1C1C1A]/40 mb-1.5 block">
                Research Status
              </span>
              <span className="font-instrument text-3xl text-[#9E2A2B] font-bold">
                Active
              </span>
            </div>
            <div className="flex flex-col md:px-6">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#1C1C1A]/40 mb-1.5 block">
                Last Updated
              </span>
              <span className="font-instrument text-xl text-[#1C1C1A] font-bold mt-1">
                {currentMonthYear}
              </span>
            </div>
          </div>
        </motion.div>

        {/* INTRODUCTION BLOCK */}
        <section className="my-16 max-w-3xl">
          <Reveal>
            <p className="font-cormorant text-lg md:text-xl text-[#1C1C1A]/80 leading-relaxed font-light mb-6">
              Every civilization carries beliefs that become accepted through repetition. Some are rooted directly in scripture. Others emerge through translation, historical evolution, commentary, or popular storytelling.
            </p>
            <p className="font-cormorant text-lg md:text-xl text-[#1C1C1A]/80 leading-relaxed font-light">
              SATYA / MITHYĀ investigates these claims using the same rigorous editorial methodology applied throughout TATTVA. We seek neither to defend nor to attack, but to clarify the boundary between original scriptural sources and later popular traditions.
            </p>
          </Reveal>
        </section>

        {/* METHODOLOGY ANIMATED PROCESS FLOW */}
        <section className="py-12 border-t border-[#C58B52]/15 my-12">
          <Reveal>
            <span className="font-general text-[9px] uppercase tracking-[0.25em] text-[#C58B52] block mb-4 font-bold text-center">
              Our Research Process
            </span>
            <h2 className="font-instrument text-3xl text-[#1C1C1A] mb-12 text-center">
              How Every Investigation Works
            </h2>
          </Reveal>

          {/* Horizontal stages flow */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative select-none">
            {[
              { label: 'Claim', desc: 'Identify popular belief under review.' },
              { label: 'Language', desc: 'Examine original Sanskrit lexical definitions.' },
              { label: 'Scripture', desc: 'Review earliest chronological textual references.' },
              { label: 'History', desc: 'Trace the development of belief across eras.' },
              { label: 'Philosophy', desc: 'Assess traditional commentators & systems.' },
              { label: 'Verdict', desc: 'Publish final evidence-based conclusion.' }
            ].map((stage, idx) => (
              <Reveal key={stage.label} delay={idx * 0.1} y={12} className="relative group">
                <div className="border border-[#C58B52]/20 bg-white/40 p-5 flex flex-col items-center text-center hover:border-[#9E2A2B]/40 transition-colors duration-300">
                  <span className="font-general text-[8px] uppercase tracking-widest text-[#9E2A2B] font-bold mb-2">
                    Stage 0{idx + 1}
                  </span>
                  <span className="font-instrument text-lg text-[#1C1C1A] font-semibold mb-2">
                    {stage.label}
                  </span>
                  <p className="font-cormorant text-xs text-[#1C1C1A]/60 leading-tight">
                    {stage.desc}
                  </p>
                </div>
                {idx < 5 && (
                  <span className="hidden md:block absolute top-[50%] right-[-14px] text-[#C58B52]/40 text-xs">
                    →
                  </span>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        {/* FEATURED INVESTIGATION CARD */}
        <section className="my-12">
          <Reveal>
            <div className="border border-[#C58B52]/30 bg-white/40 p-8 relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="absolute -top-3 left-6 bg-[#9E2A2B] text-white px-3 py-0.5 font-general text-[7px] uppercase tracking-[0.2em] font-bold">
                Featured Investigation
              </div>
              <div className="flex-1 mt-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-general text-[7.5px] uppercase tracking-widest px-2 py-0.5 bg-[#9E2A2B]/5 border border-[#9E2A2B]/20 text-[#9E2A2B] font-bold">
                    Editor's Pick
                  </span>
                  <span className="font-general text-[7.5px] uppercase tracking-widest px-2 py-0.5 border border-[#1C1C1A]/10 text-[#1C1C1A]/40">
                    Recently Updated
                  </span>
                </div>
                <h3 className="font-instrument text-3xl text-[#1C1C1A] font-bold mb-4">
                  Are There Really 33 Crore Gods?
                </h3>
                <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/85 leading-relaxed font-light">
                  A comprehensive scan of Vedic scriptures and linguistic roots to investigate the source of Hinduism's most famous numerical assertion.
                </p>
              </div>
              <div className="flex items-center select-none">
                <Link
                  to="/satya-mithya/are-there-really-33-crore-gods"
                  className="px-6 py-2 border border-[#9E2A2B] text-[#9E2A2B] font-general text-[9px] uppercase tracking-widest font-bold hover:bg-[#9E2A2B] hover:text-white transition-colors duration-500 whitespace-nowrap"
                >
                  Open Investigation
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CONTROLS (SEARCH & FILTERS) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-16 mb-8 border-b border-[#C58B52]/10 pb-8">
          
          {/* SEARCH FIELD */}
          <div className="relative w-full md:max-w-xs select-none">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search investigations..."
              className="w-full bg-white/20 border border-[#C58B52]/20 px-4 py-2 font-cormorant text-sm text-[#1C1C1A] placeholder-[#1C1C1A]/40 focus:outline-none focus:border-[#9E2A2B] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-[#1C1C1A]/50 hover:text-[#9E2A2B]"
              >
                ✕
              </button>
            )}
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 select-none">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`font-general text-[9px] uppercase tracking-widest transition-colors focus:outline-none ${
                  selectedFilter === filter
                    ? 'text-[#9E2A2B] font-bold border-b border-[#9E2A2B]'
                    : 'text-[#1C1C1A]/50 hover:text-[#1C1C1A]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* STATISTICS COUNTER ROW */}
        <div className="flex items-center gap-8 mb-6 border-b border-[#C58B52]/10 pb-4 select-none">
          <div className="flex items-baseline gap-2">
            <span className="font-instrument text-2xl text-[#1C1C1A] font-bold leading-none">
              {totalPlanned}
            </span>
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#1C1C1A]/40 font-bold">
              Total Planned
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-instrument text-2xl text-[#1C1C1A] font-bold leading-none">
              {publishedCount}
            </span>
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#1C1C1A]/40 font-bold">
              Published
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-instrument text-2xl text-[#1C1C1A] font-bold leading-none">
              {upcomingCount}
            </span>
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#1C1C1A]/40 font-bold">
              Upcoming
            </span>
          </div>
          {filteredCases.length !== ALL_CASES.length && (
            <span className="font-cormorant text-xs text-[#9E2A2B] italic ml-auto">
              Showing {filteredCases.length} matches
            </span>
          )}
        </div>

        {/* INVESTIGATION ARCHIVE ROW LIST */}
        <div className="flex flex-col w-full mb-20">
          <AnimatePresence mode="wait">
            {filteredCases.length > 0 ? (
              filteredCases.map((c, index) => (
                <ArchiveRow key={c.id} index={index} {...c} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                className="py-16 text-center"
              >
                <p className="font-cormorant text-lg italic text-[#1C1C1A]/70">
                  No cases matched your search query. Try clearing filters or search parameters.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* EXPLORE RANDOM CASE TRIGGER */}
        <div className="flex justify-center select-none mb-24">
          <button
            onClick={exploreRandomCase}
            className="px-6 py-3 border border-[#C58B52]/30 text-[#C58B52] font-general text-[9px] uppercase tracking-widest font-bold hover:border-[#9E2A2B] hover:text-[#9E2A2B] transition-colors duration-300"
          >
            Explore Another Investigation
          </button>
        </div>

        {/* FUTURE ROADMAP / RESEARCH TIMELINE */}
        <section className="py-12 border-t border-[#C58B52]/15 my-12">
          <Reveal>
            <span className="font-general text-[8.5px] uppercase tracking-[0.25em] text-[#C58B52] block mb-4 font-bold text-center">
              Development Roadmap
            </span>
            <h2 className="font-instrument text-3xl text-[#1C1C1A] mb-12 text-center">
              Research Timeline
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Completed */}
            <div className="border border-[#C58B52]/20 bg-white/40 p-6 flex flex-col">
              <span className="font-general text-[8px] uppercase tracking-wider text-green-700 font-bold mb-4 block">
                ✓ Completed
              </span>
              <div className="flex flex-col gap-3 font-instrument text-sm text-[#1C1C1A] font-semibold">
                <div className="pb-2 border-b border-[#C58B52]/10">Bhagavad Gītā & War</div>
                <div>33 Crore Gods</div>
              </div>
            </div>

            {/* Currently Researching */}
            <div className="border border-[#C58B52]/20 bg-[#C58B52]/5 p-6 flex flex-col">
              <span className="font-general text-[8px] uppercase tracking-wider text-[#C58B52] font-bold mb-4 block">
                ⏳ Researching
              </span>
              <div className="flex flex-col gap-3 font-instrument text-sm text-[#1C1C1A] font-semibold">
                <div className="pb-2 border-b border-[#C58B52]/10">Rigveda & Viṣṇu</div>
                <div>Cosmological Creation</div>
              </div>
            </div>

            {/* Upcoming */}
            <div className="border border-[#C58B52]/20 bg-white/40 p-6 flex flex-col opacity-60">
              <span className="font-general text-[8px] uppercase tracking-wider text-[#1C1C1A]/40 font-bold mb-4 block">
                Upcoming
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-cormorant text-[#1C1C1A]/70 italic">
                <span>Karma,</span>
                <span>Rāmāyaṇa,</span>
                <span>Caste System,</span>
                <span>Mahābhārata,</span>
                <span>Mythology</span>
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL CONSTITUTION */}
        <section className="my-12">
          <Reveal>
            <div className="border border-[#C58B52]/20 bg-white/40 p-8 max-w-xl mx-auto text-center">
              <span className="font-general text-[8.5px] uppercase tracking-[0.3em] text-[#C58B52] block mb-4 font-bold">
                Editorial Constitution
              </span>
              <p className="font-cormorant text-sm text-[#1C1C1A]/75 leading-relaxed font-light mb-6">
                Every investigation on TATTVA is bound by architectural credibility guidelines:
              </p>
              <div className="grid grid-cols-2 gap-3 text-left max-w-md mx-auto font-instrument text-xs text-[#1C1C1A] font-semibold">
                <div className="flex items-center gap-2">
                  <span className="text-[#9E2A2B]">◆</span> Primary Scripture
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#9E2A2B]">◆</span> Linguistic Analysis
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#9E2A2B]">◆</span> Historical Context
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#9E2A2B]">◆</span> Traditional Commentary
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#9E2A2B]">◆</span> Academic Comparison
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#9E2A2B]">◆</span> Editorial Transparency
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* KNOWLEDGE CONNECTIONS */}
        <section className="py-12 border-t border-[#C58B52]/15 my-12">
          <Reveal>
            <span className="font-general text-[8.5px] uppercase tracking-[0.25em] text-[#9E2A2B] block mb-4 font-bold text-center">
              Cross-disciplinary Links
            </span>
            <h2 className="font-instrument text-3xl text-[#1C1C1A] mb-8 text-center">
              Knowledge Connections
            </h2>
            <p className="font-cormorant text-center text-sm text-[#1C1C1A]/60 max-w-md mx-auto mb-12">
              Discover how our investigations link back to cosmic principles, temporal layers, and philosophical models in the Library.
            </p>
          </Reveal>

          {/* Connection cards network flow */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative select-none">
            {[
              { title: '33 Crore Gods', type: 'Investigation', path: '/satya-mithya/are-there-really-33-crore-gods' },
              { title: 'Architecture of Universe', type: 'Library', path: '/library/the-architecture-of-the-cosmos' },
              { title: 'Creation (Sṛṣṭi)', type: 'Library', path: '/library/srsthi' },
              { title: 'Time Cycles', type: 'Library', path: '/library/how-time-flows-in-sanatana-dharma' },
              { title: 'Free Will', type: 'Inquiry', path: '/inquiry' }
            ].map((node, idx) => (
              <React.Fragment key={node.title}>
                <Link
                  to={node.path}
                  className="p-4 border border-[#C58B52]/30 bg-white/45 min-w-[150px] text-center hover:border-[#9E2A2B] transition-colors duration-300"
                >
                  <span className="font-general text-[6.5px] text-[#9E2A2B] block mb-1 uppercase tracking-widest">
                    {node.type}
                  </span>
                  <span className="font-instrument text-xs text-[#1C1C1A] font-bold block leading-tight">
                    {node.title}
                  </span>
                </Link>
                {idx < 4 && (
                  <span className="text-[#C58B52]/40 text-xs rotate-90 md:rotate-0">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
