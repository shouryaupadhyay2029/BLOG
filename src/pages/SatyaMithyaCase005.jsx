import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import useScrollSpy from '@/hooks/useScrollSpy';

const EASE_EXPO = [0.16, 1, 0.3, 1];

const CheckIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ChevronRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const CrossIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ScaleIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7h12m-9 3h6m-3 1v5m-9-3h18" />
  </svg>
);

const ClockIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MapIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
  </svg>
);

const DiamondIcon = ({ className = "w-1.5 h-1.5 rotate-45 bg-[#C58B52] inline-block shrink-0" }) => (
  <span className={className} />
);

const BulletDot = ({ className = "w-1 h-1 rounded-full bg-[#C58B52]/50 inline-block align-middle mx-2" }) => (
  <span className={className} />
);

const StarRating = ({ count }) => (
  <div className="flex gap-0.5 justify-center items-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-2.5 h-2.5 ${i < count ? 'text-[#C58B52]' : 'text-[#C58B52]/10'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const renderIcon = (type) => {
  switch (type) {
    case 'language':
      return (
        <svg className="w-3.5 h-3.5 text-[#C58B52]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c-.006.314-.016.626-.03.937M12.751 5a11.237 11.237 0 00-2.336-1.5" />
        </svg>
      );
    case 'vedas':
      return (
        <svg className="w-3.5 h-3.5 text-[#C58B52]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'philology':
      return (
        <svg className="w-3.5 h-3.5 text-[#C58B52]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    case 'later_scriptures':
      return (
        <svg className="w-3.5 h-3.5 text-[#C58B52]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    case 'legal':
      return <ScaleIcon className="w-3.5 h-3.5 text-[#C58B52]" />;
    case 'history':
      return <ClockIcon className="w-3.5 h-3.5 text-[#C58B52]" />;
    case 'regional':
      return <MapIcon className="w-3.5 h-3.5 text-[#C58B52]" />;
    case 'scholarship':
      return (
        <svg className="w-3.5 h-3.5 text-[#C58B52]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
        </svg>
      );
    case 'overall':
      return <DiamondIcon className="w-2 h-2 rotate-45 border border-[#C58B52] bg-[#C58B52]/10 inline-block align-middle" />;
    default:
      return <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#C58B52]" />;
  }
};


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

export function SatyaMithyaCase005() {
  const [expandedStoryNote, setExpandedStoryNote] = useState(false);
  const [activeVedicTab, setActiveVedicTab] = useState(0);
  const [expandedCompareRow, setExpandedCompareRow] = useState(null);
  
  // Later Scriptures states
  const [expandedTimelineStage, setExpandedTimelineStage] = useState(null);
  const [activeMedhatithiTab, setActiveMedhatithiTab] = useState(0);
  const [activeSmritisCol, setActiveSmritisCol] = useState(null);

  // Historical Development states
  const [expandedHistTimeline, setExpandedHistTimeline] = useState(null);
  const [activeHistRegion, setActiveHistRegion] = useState('Rajasthan');
  const [expandedEranCard, setExpandedEranCard] = useState(false);
  const [expandedRegionCard, setExpandedRegionCard] = useState(null);

  // Why Did Sati Spread states
  const [expandedScholarlyCard, setExpandedScholarlyCard] = useState(null);
  const [expandedFactorRow, setExpandedFactorRow] = useState(null);
  const [activeScholarPerspTab, setActiveScholarPerspTab] = useState(0);

  // Case Studies states
  const [activeMadriTab, setActiveMadriTab] = useState(0);
  const [expandedJauharRow, setExpandedJauharRow] = useState(null);

  // Modern Scholarship states
  const [expandedAgreeCard, setExpandedAgreeCard] = useState(null);
  const [expandedDebateCard, setExpandedDebateCard] = useState(null);
  const [expandedScholarRow, setExpandedScholarRow] = useState(null);

  const spySections = useMemo(() => [
    { id: 'section-hero', label: 'Claim Defined' },
    { id: 'section-language', label: 'Language Investigation' },
    { id: 'section-vedic', label: 'Vedic Investigation' },
    { id: 'section-later-scriptures', label: 'Later Scriptures' },
    { id: 'section-historical-development', label: 'Historical Development' },
    { id: 'section-why-spread', label: 'Why Did Sati Spread?' },
    { id: 'section-case-studies', label: 'Case Studies' },
    { id: 'section-modern-scholarship', label: 'Modern Scholarship' },
    { id: 'section-final-verdict', label: 'Final Verdict' }
  ], []);

  const activeSection = useScrollSpy(spySections, { rootMargin: '-20% 0px -60% 0px' });

  const otherCases = [
    { number: '#001', title: 'Does the Bhagavad Gītā Teach War?', id: 'does-gita-teach-war' },
    { number: '#002', title: 'Are There Really 33 Crore Gods?', id: 'are-there-really-33-crore-gods' },
    { number: '#003', title: 'Hinduism Worships Idols?', id: 'hinduism-worships-idols' },
    { number: '#004', title: 'Does the Gītā Support Caste?', id: 'does-bhagavad-gita-support-caste' }
  ];

  const sidebarSteps = [
    { label: 'Claim Identified', checked: true, active: activeSection === 'Claim Defined' },
    {
      label: 'Language Investigation',
      checked: ['Language Investigation', 'Vedic Investigation', 'Later Scriptures', 'Historical Development', 'Why Did Sati Spread?', 'Case Studies', 'Modern Scholarship', 'Final Verdict'].includes(activeSection),
      active: activeSection === 'Language Investigation'
    },
    {
      label: 'Vedic Investigation',
      checked: ['Vedic Investigation', 'Later Scriptures', 'Historical Development', 'Why Did Sati Spread?', 'Case Studies', 'Modern Scholarship', 'Final Verdict'].includes(activeSection),
      active: activeSection === 'Vedic Investigation'
    },
    {
      label: 'Later Scriptures',
      checked: ['Later Scriptures', 'Historical Development', 'Why Did Sati Spread?', 'Case Studies', 'Modern Scholarship', 'Final Verdict'].includes(activeSection),
      active: activeSection === 'Later Scriptures'
    },
    {
      label: 'Historical Development',
      checked: ['Historical Development', 'Why Did Sati Spread?', 'Case Studies', 'Modern Scholarship', 'Final Verdict'].includes(activeSection),
      active: activeSection === 'Historical Development'
    },
    {
      label: 'Why Did Sati Spread?',
      checked: ['Why Did Sati Spread?', 'Case Studies', 'Modern Scholarship', 'Final Verdict'].includes(activeSection),
      active: activeSection === 'Why Did Sati Spread?'
    },
    {
      label: 'Case Studies',
      checked: ['Case Studies', 'Modern Scholarship', 'Final Verdict'].includes(activeSection),
      active: activeSection === 'Case Studies'
    },
    {
      label: 'Modern Scholarship',
      checked: ['Modern Scholarship', 'Final Verdict'].includes(activeSection),
      active: activeSection === 'Modern Scholarship'
    },
    {
      label: 'Final Verdict',
      checked: activeSection === 'Final Verdict',
      active: activeSection === 'Final Verdict'
    }
  ];

  const roadmapStages = [
    { name: 'Language Investigation', desc: 'Sanskrit etymology of the word Satī' },
    { name: 'Vedic Investigation', desc: 'Rigvedic funeral mantras and translations' },
    { name: 'Later Scriptures', desc: 'Smṛtis, Epics, and Purāṇic accounts' },
    { name: 'Historical Development', desc: 'Archaeological and epigraphical records' },
    { name: 'Why Did Sati Spread?', desc: 'Geopolitical, social, and economic factors' },
    { name: 'Historical Case Studies', desc: 'Documented occurrences across regions' },
    { name: 'Modern Scholarship', desc: 'Philologists, historians, and debates' },
    { name: 'Final Verdict', desc: 'Evidence-based conclusion on Sati' }
  ];

  const commonClaims = [
    { claim: 'The Vedas command widow burning.', text: 'This claim asserts that early Vedic hymns contain explicit mandates for widows to self-immolate on their husband\'s funeral pyre.' },
    { claim: 'Sati has always existed since the Vedic age.', text: 'This claim holds that widow immolation was a continuous, widespread social practice in ancient India.' },
    { claim: 'The Goddess Satī created the custom.', text: 'This claim suggests that the mythological self-immolation of Sati in the Purāṇas served as the divine model for widow burning.' },
    { claim: 'Every Hindu widow was expected to perform Sati.', text: 'This claim asserts that the practice was a mandatory religious duty for all Hindu widows across all periods.' },
    { claim: 'The British invented the story of Sati.', text: 'This claim argues that widow immolation was either nonexistent or extremely rare, and was fabricated or exaggerated for colonial justification.' }
  ];

  const principles = [
    { num: '01', title: 'Primary Sanskrit sources before modern opinion.', desc: 'Reading original texts directly in Sanskrit to evaluate linguistic context rather than relying solely on secondary translations.' },
    { num: '02', title: 'Historical evidence before assumptions.', desc: 'Prioritizing inscriptions, memorial stones (Sati stones), and traveler records over modern generalizations.' },
    { num: '03', title: 'Separate scripture from historical practice.', desc: 'Distinguishing what prescriptive texts recommend from what communities actually practiced.' },
    { num: '04', title: 'Separate prescriptive texts from descriptive narratives.', desc: 'Differentiating between codifying legal manuals (Dharmashāstras) and narrative histories (Epics and Purāṇas).' },
    { num: '05', title: 'Acknowledge scholarly disagreement openly.', desc: 'Transparently presenting conflicting arguments among historians, Indologists, and traditional commentators.' },
    { num: '06', title: 'Draw conclusions only after all evidence has been examined.', desc: 'Reserving judgment until every dimension of the scriptural and historical record is thoroughly investigated.' }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#0D0D0C] text-[#E9E2D4] font-sans antialiased overflow-x-hidden pb-32 selection:bg-[#C58B52]/30 selection:text-[#E9E2D4]">
      <GrainCanvas />

      {/* HORIZONTAL NAVIGATION BAR */}
      <nav className="absolute top-9 left-9 md:top-11 md:left-13 z-50 flex flex-wrap items-center gap-6 md:gap-12 lg:gap-16 select-none">
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
                    color: '#E9E2D4',
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
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#E9E2D4]/50 group-hover:text-[#C58B52]"
          >
            INQUIRY ARCHIVE
          </span>
        </Link>

        <Link to="/library" className="group flex items-center">
          <span 
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#E9E2D4]/50 group-hover:text-[#C58B52]"
          >
            TATTVA LIBRARY
          </span>
        </Link>

        <Link to="/satya-mithya" className="group flex items-center">
          <span 
            className="font-general text-[10px] uppercase tracking-[0.4em] transition-colors duration-500 text-[#C58B52]"
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
      <aside className="hidden lg:flex flex-col fixed right-12 top-40 w-64 border-l border-[#C58B52]/10 pl-6 z-20 select-none">
        <span className="font-general text-[9px] uppercase tracking-[0.25em] text-[#C58B52] block mb-4">
          Evidence Tracker
        </span>
        <div className="border border-[#C58B52]/20 bg-[#161615] p-5 shadow-lg flex flex-col gap-3">
          <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#E9E2D4]/40">
            Case File #005 Status
          </span>
          <div className="flex flex-col gap-2.5">
            {sidebarSteps.map((step, idx) => {
              return (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className={`text-[10px] ${step.checked ? 'text-emerald-500' : 'text-[#E9E2D4]/20'}`}>
                    {step.checked ? <CheckIcon className="w-3 h-3 text-emerald-500 inline-block align-middle" /> : <span className="w-2 h-2 rounded-full border border-[#E9E2D4]/20 inline-block align-middle" />}
                  </span>
                  <span className={`font-cormorant text-xs transition-colors duration-300 ${
                    step.active ? 'text-[#C58B52] font-bold' : step.checked ? 'text-[#E9E2D4]/70' : 'text-[#E9E2D4]/40'
                  }`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="border-t border-[#C58B52]/15 pt-3 mt-2 flex flex-col gap-2">
            <div className="flex justify-between items-center text-[8.5px] font-general uppercase tracking-wider">
              <span className="text-[#E9E2D4]/30">Active Phase:</span>
              <span className="text-[#C58B52] font-bold">
                {activeSection}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-3">
            Archived Cases
          </span>
          <div className="flex flex-col gap-3">
            {otherCases.map((c, i) => (
              <Link key={i} to={`/satya-mithya/${c.id}`} className="group block">
                <span className="font-general text-[7px] text-[#C58B52]/50 block">
                  {c.number}
                </span>
                <span className="font-instrument text-xs text-[#E9E2D4]/60 group-hover:text-[#E9E2D4] transition-colors leading-tight block">
                  {c.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </aside>

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-3xl mx-auto px-6 pt-44 relative z-10 flex flex-col">
        
        {/* ══════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════ */}
        <section id="section-hero" className="mb-16">
          <motion.div
            className="flex flex-col text-center mb-12"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: EASE_EXPO }}
          >
            <span className="font-general text-[10px] uppercase tracking-[0.45em] text-[#C58B52] mb-4 font-bold">
              SATYA / MITHYĀ
            </span>
            <h1 className="font-instrument text-4xl md:text-6xl text-[#E9E2D4] tracking-tight leading-none mb-4">
              Case File #005
            </h1>
            <div className="w-16 h-[1px] bg-[#C58B52]/20 mx-auto mt-4" />
          </motion.div>

          <Reveal>
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 relative shadow-xl rounded-sm">
              <div className="absolute -top-3 left-6 bg-[#C58B52]/20 text-[#E9E2D4] border border-[#C58B52]/40 px-3 py-1 font-general text-[8px] uppercase tracking-[0.2em]">
                CLAIM UNDER REVIEW
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2 mb-6 border-b border-[#C58B52]/10 pb-6">
                <div>
                  <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#E9E2D4]/40 block mb-1">
                    Subject of Inquiry
                  </span>
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1.2 }}
                    className="font-instrument text-2xl md:text-3xl text-[#E9E2D4] font-semibold leading-tight"
                  >
                    "Hinduism Commands Sati (Widow Immolation)."
                  </motion.h2>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.05, 0.95] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="w-2 h-2 rounded-full bg-[#E05A47]"
                  />
                  <span className="font-general text-[9px] uppercase tracking-[0.15em] text-[#E05A47] font-bold">
                    🔍 UNDER INVESTIGATION
                  </span>
                </div>
              </div>

              <p className="font-cormorant text-lg text-[#E9E2D4]/85 leading-relaxed font-light mb-4">
                Some believe Sati was a universal religious command. Others argue it had no connection to Hindu tradition at all. Historical evidence presents a far more complex picture.
              </p>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/60 leading-relaxed font-light italic">
                This investigation examines language, scripture, legal texts, archaeology, historical practice and modern scholarship before reaching any conclusion.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            WHY THIS INVESTIGATION IS DIFFERENT
        ══════════════════════════════════════════════ */}
        <section className="mb-16">
          <Reveal>
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-3 font-bold">
                Editorial Scope
              </span>
              <h3 className="font-instrument text-xl md:text-2xl text-[#E9E2D4] font-bold mb-4">
                Why This Investigation Is More Complex Than It Appears
              </h3>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/75 leading-relaxed font-light mb-6">
                Many public discussions merge several completely different subjects into one. Readers often hear the word "Sati" without realizing that it may refer to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                {[
                  { term: 'The Goddess Satī', desc: 'A mythological figure in Purāṇic literature whose self-immolation occurred in protest of her father\'s insult to Shiva, not as a widow.' },
                  { term: 'Widow Immolation', desc: 'The act of a widow burning herself on her husband\'s funeral pyre.' },
                  { term: 'Sahagamana', desc: 'The act of "going along with" the deceased husband on the pyre.' },
                  { term: 'Anumarana', desc: 'The act of self-immolation at a later date when the husband\'s death occurred elsewhere.' },
                  { term: 'Jauhar', desc: 'Collective self-immolation practiced by women of royal households to avoid capture during military defeats.' },
                  { term: 'Vedic Funeral Rituals', desc: 'Specific mantras in the Ṛgveda detailing cremation and widowhood.' },
                  { term: 'Medieval Historical Practices', desc: 'Documented cases of widow immolation in specific regions and centuries.' },
                  { term: 'Colonial Debates', desc: 'Legal and administrative debates in 19th-century Bengal leading to the Sati Regulation Act of 1829.' }
                ].map((item, idx) => (
                  <div key={idx} className="border border-[#C58B52]/10 bg-white/[0.02] p-4 flex flex-col gap-1">
                    <span className="font-instrument text-sm text-[#C58B52] font-semibold">
                      <BulletDot /> {item.term}
                    </span>
                    <p className="font-cormorant text-xs text-[#E9E2D4]/60 leading-normal font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#C58B52]/10 mt-6 pt-4">
                <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/50 leading-relaxed italic text-center">
                  Treating all of these as though they were the same creates confusion before the investigation even begins. This case file separates each subject and investigates it independently.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            HOW THIS INVESTIGATION WORKS
        ══════════════════════════════════════════════ */}
        <section className="mb-16">
          <Reveal className="mb-8">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block text-center font-bold">
              Verification Standards
            </span>
            <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold text-center mt-2">
              How This Investigation Works
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {principles.map((pr, idx) => (
              <Reveal key={idx}>
                <div className="border border-[#C58B52]/10 bg-[#161615]/70 p-5 rounded-sm flex items-start gap-4 h-full">
                  <span className="font-general text-xs text-[#C58B52] font-bold mt-1">
                    {pr.num}
                  </span>
                  <div>
                    <h4 className="font-instrument text-sm font-semibold text-[#E9E2D4] mb-1.5">
                      {pr.title}
                    </h4>
                    <p className="font-cormorant text-xs text-[#E9E2D4]/60 leading-relaxed font-light">
                      {pr.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            ROADMAP
        ══════════════════════════════════════════════ */}
        <section className="mb-16">
          <Reveal className="mb-10 text-center">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block font-bold">
              Investigation Roadmap
            </span>
            <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mt-2">
              What Will Be Investigated
            </h3>
          </Reveal>

          <div className="relative border-l border-[#C58B52]/20 ml-4 md:ml-6 space-y-8 select-none">
            {roadmapStages.map((stage, idx) => (
              <Reveal key={idx}>
                <div className="relative pl-6 md:pl-8 group">
                  <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full border border-[#C58B52] bg-[#0D0D0C] group-hover:bg-[#C58B52] transition-colors duration-300" />
                  <span className="font-general text-[8px] uppercase tracking-wider text-[#C58B52] block mb-1">
                    Stage {idx + 1}
                  </span>
                  <h4 className="font-instrument text-base font-semibold text-[#E9E2D4]">
                    {stage.name}
                  </h4>
                  <p className="font-cormorant text-xs text-[#E9E2D4]/50 mt-1 font-light">
                    {stage.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            COMMON CLAIMS
        ══════════════════════════════════════════════ */}
        <section className="mb-16">
          <Reveal className="mb-8 text-center">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block font-bold">
              Popular Axioms
            </span>
            <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mt-2">
              Common Claims Under Review
            </h3>
          </Reveal>

          <div className="space-y-4">
            {commonClaims.map((item, idx) => (
              <Reveal key={idx}>
                <div className="border border-[#C58B52]/15 bg-[#161615]/40 p-5 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-general text-[7px] text-[#C58B52] uppercase block tracking-widest mb-1">Claim Statement</span>
                    <h4 className="font-instrument text-lg text-[#E9E2D4] font-semibold mb-2">
                      "{item.claim}"
                    </h4>
                    <p className="font-cormorant text-xs text-[#E9E2D4]/60 leading-normal font-light">
                      {item.text}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-1.5 border border-[#C58B52]/30 bg-[#C58B52]/5 px-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C58B52] opacity-60" />
                    <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] font-semibold">
                      Pending
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            EDITORIAL NOTE
        ══════════════════════════════════════════════ */}
        <section className="mb-16">
          <Reveal>
            <div className="border border-[#C58B52]/10 bg-[#161615] p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-emerald-500 block mb-3 font-bold">
                Editorial Stance
              </span>
              <h3 className="font-instrument text-xl md:text-2xl text-[#E9E2D4] font-bold mb-4">
                Before We Begin
              </h3>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/75 leading-relaxed font-light">
                This investigation does not begin with a conclusion. Instead, every major claim will be examined individually through language, primary texts, historical records, inscriptional evidence and modern academic research. Only after reviewing all available evidence will the final verdict be presented.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            TRANSITION & NEXT SECTION CTA
        ══════════════════════════════════════════════ */}
        <section className="border-t border-[#C58B52]/10 pt-16 text-center max-w-xl mx-auto mb-16">
          <Reveal>
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/75 leading-relaxed mb-6">
              Before exploring historical records or scriptural statements, we must first understand the terms themselves. What does the word "Satī" actually mean?
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#C58B52] font-semibold">
              Language Investigation
            </h4>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION II: LANGUAGE INVESTIGATION
        ══════════════════════════════════════════════ */}
        <section id="section-language" className="py-16 border-b border-[#C58B52]/10">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
              SECTION II <BulletDot /> TERMINOLOGY
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#E9E2D4] mb-4">
              Language Investigation
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              What does the word "Satī" actually mean?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/80 leading-relaxed font-light mb-8">
              Few words in Indian history have accumulated as much historical, religious and emotional weight as "Satī." Today, the word is often used almost exclusively to describe widow immolation. However, its original Sanskrit meaning, its use in religious literature and its later historical application are not identical. Before investigating the historical practice, we must first understand the language.
            </p>
          </Reveal>

          {/* THE WORD "SATĪ" CARD */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm shadow-md">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 font-bold">
                Etymological Root
              </span>
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-4">
                What Does "Satī" Mean?
              </h3>
              <p className="font-cormorant text-base text-[#E9E2D4]/85 leading-relaxed font-light mb-6">
                The Sanskrit word <strong>"Satī" (सती)</strong> is the feminine form of <strong>"Sat" (सत्)</strong>. In Sanskrit grammar and philosophy, "Sat" carries rich, positive meanings that denote fundamental principles of character and reality:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { word: 'Truth (Satya)', desc: 'Alignment with ultimate reality and honesty.' },
                  { word: 'Virtue (Dharma)', desc: 'Moral goodness and righteousness.' },
                  { word: 'Goodness', desc: 'Inner excellence and benevolence.' },
                  { word: 'One who is True', desc: 'A person who embodies fidelity and integrity.' }
                ].map((item, idx) => (
                  <div key={idx} className="border border-[#C58B52]/10 bg-white/[0.01] p-4 text-center rounded-sm">
                    <span className="font-instrument text-base text-[#C58B52] font-semibold block mb-1">
                      {item.word}
                    </span>
                    <p className="font-cormorant text-xs text-[#E9E2D4]/50 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p className="font-cormorant text-base text-[#E9E2D4]/85 leading-relaxed font-light mb-6">
                In its earliest classical usage, the word <em>Satī</em> described a virtuous, noble, or faithful woman. It denoted character and moral integrity rather than any specific ritual, custom, or practice.
              </p>

              {/* TRANSLATION GRID */}
              <div className="border border-[#C58B52]/15 bg-black/30 p-5 rounded-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block mb-1">Original Sanskrit</span>
                    <span className="font-instrument text-xl text-[#E9E2D4] font-bold">सती</span>
                  </div>
                  <div>
                    <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block mb-1">IAST</span>
                    <span className="font-instrument text-lg text-[#C58B52] font-semibold">satī</span>
                  </div>
                  <div>
                    <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block mb-1">Literal Meaning</span>
                    <span className="font-cormorant text-sm text-[#E9E2D4]/80 italic">"A virtuous, true, or faithful woman"</span>
                  </div>
                  <div>
                    <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block mb-1">Classical Usage</span>
                    <span className="font-cormorant text-xs text-[#E9E2D4]/70 leading-normal">Refers to character and moral integrity (not a custom)</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* THE GODDESS SATĪ CARD */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm shadow-md">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 font-bold">
                Purāṇic Narrative
              </span>
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-4">
                The Goddess Satī (Dakṣāyaṇī)
              </h3>
              <p className="font-cormorant text-base text-[#E9E2D4]/85 leading-relaxed font-light mb-6">
                In the Purāṇic theological tradition, the word <em>Satī</em> is also the name of a specific deity—the daughter of Dakṣa and the first consort of Shiva. 
              </p>
              <p className="font-cormorant text-base text-[#E9E2D4]/85 leading-relaxed font-light mb-6">
                According to the well-known <em>Dakṣa Yajña</em> narrative, her father Dakṣa organized a grand sacrifice but deliberately insulted Shiva by not inviting him and mocking him in public. Deeply humiliated by her father's disrespect toward her husband, Satī self-immolated by generating her inner yogic fire (Yogāgni).
              </p>

              <div className="border border-[#C58B52]/10 bg-white/[0.02] p-5 rounded-sm mb-6">
                <p className="font-cormorant text-base text-[#E9E2D4] leading-relaxed font-light">
                  <strong>Crucial distinction:</strong> The Goddess Satī's self-sacrifice was not an act of a widow immolating herself upon her husband's funeral pyre. Shiva was, in fact, alive and intact. Her act was a protest against insult and a demonstration of theological/yogic power. 
                </p>
              </div>

              {/* EXPANDABLE PANEL */}
              <div className="border border-[#C58B52]/15 bg-black/20 rounded-sm">
                <button
                  onClick={() => setExpandedStoryNote(!expandedStoryNote)}
                  className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="font-instrument text-sm font-semibold text-[#E9E2D4]/90">
                    Why This Story Is Frequently Misunderstood
                  </span>
                  <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52]">
                    {expandedStoryNote ? '[ COLLAPSE ]' : '[ EXPAND DETAILS ]'}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedStoryNote && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE_EXPO }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 border-t border-[#C58B52]/10 bg-[#000000]/40">
                        <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/75 leading-relaxed font-light">
                          Confusing the Purāṇic goddess's protest of yogic self-sacrifice with the later, historical custom of widow immolation is one of the most common errors in popular discussions. The Goddess Satī was not a widow; she immolated herself while Shiva was fully alive, in response to her father's insults. The two events belong to entirely different conceptual and theological categories.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          {/* TERMINOLOGY COMPARISON GRID */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Conceptual Distinctions
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { term: 'Satī', meaning: 'Original Sanskrit term meaning a virtuous, noble, or faithful woman. Refers to character and integrity.' },
                { term: 'Goddess Satī', meaning: 'The daughter of Dakṣa and consort of Shiva, who self-immolated in yogic fire as a protest against her father\'s insults.' },
                { term: 'Sahagamana', desc: 'Going along with', meaning: 'The Sanskrit scriptural term literally meaning "going along with" or accompanying one\'s husband on the funeral pyre.' },
                { term: 'Anumaraṇa', desc: 'Following in death', meaning: 'The Sanskrit scriptural term referring to a widow\'s self-immolation at a later date when the husband has died elsewhere.' },
                { term: 'Widow Immolation', meaning: 'The modern descriptive historical term used to categorize the practice of burning a widow on her husband\'s pyre.' },
                { term: 'Jauhar', meaning: 'Collective self-immolation practiced by royal women to prevent captivity, rape, and enslavement during military siege. Historically distinct from individual Sati.' }
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-[#161615]/50 p-5 rounded-sm flex flex-col justify-between">
                  <div>
                    <span className="font-instrument text-lg text-[#C58B52] font-semibold block mb-2">
                      {item.term}
                    </span>
                    {item.desc && (
                      <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block mb-2 leading-none">
                        {item.desc}
                      </span>
                    )}
                    <p className="font-cormorant text-xs text-[#E9E2D4]/75 leading-relaxed font-light">
                      {item.meaning}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* EDITORIAL NOTE */}
          <Reveal className="my-10">
            <div className="border-l-2 border-[#C58B52] bg-[#161615] p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-3 font-bold">
                Editorial Clarity
              </span>
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-bold mb-3">
                Why These Distinctions Matter
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/75 leading-relaxed font-light">
                Many modern discussions use the word "Satī" to refer simultaneously to a goddess, a moral virtue and a historical practice. These meanings developed in different contexts and should not automatically be treated as identical. Throughout this investigation, each meaning will therefore be examined independently.
              </p>
            </div>
          </Reveal>

          {/* TIMELINE */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Etymological Timeline
            </span>
            <div className="border border-[#C58B52]/15 bg-[#161615]/30 p-6 rounded-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative select-none">
                {[
                  { step: 'Sat (Virtue)', desc: 'The fundamental root meaning truth and goodness.' },
                  { step: 'Satī (Virtuous Woman)', desc: 'Feminine form denoting a noble or faithful character.' },
                  { step: 'Goddess Satī', desc: 'Mythological name of Dakṣa\'s daughter in Purāṇic texts.' },
                  { step: 'Later Historical Use', desc: 'Applied to the custom of Sahagamana/Anumaraṇa.' },
                  { step: 'Modern Usage', desc: 'Used almost exclusively to refer to widow immolation.' }
                ].map((t, idx) => (
                  <div key={idx} className="flex-1 text-center relative z-10">
                    <span className="font-instrument text-sm text-[#C58B52] font-semibold block mb-1">
                      {t.step}
                    </span>
                    <p className="font-cormorant text-xs text-[#E9E2D4]/50 leading-tight max-w-[120px] mx-auto font-light">
                      {t.desc}
                    </p>
                    {idx < 4 && (
                      <span className="hidden md:block absolute top-3 -right-2 text-[#C58B52]/30 text-xs">
                        <ChevronRightIcon className="w-3 h-3 inline-block" />
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="border-t border-[#C58B52]/10 mt-6 pt-4 text-center">
                <p className="font-cormorant text-xs text-[#E9E2D4]/40">
                  The meaning of words can evolve significantly across centuries, morphing from abstract qualities of character into specific social custom tags.
                </p>
              </div>
            </div>
          </Reveal>

          {/* DID YOU KNOW */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 rounded-sm">
              <div className="flex items-center gap-2 mb-4">
                <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#C58B52] inline-block align-middle" />
                <span className="font-general text-[8.5px] uppercase tracking-widest text-[#C58B52] font-bold">
                  Did You Know?
                </span>
              </div>
              <ul className="space-y-3.5">
                {[
                  'The word Satī originally described character rather than a ritual.',
                  'The Goddess Satī was not a widow (Shiva was fully alive during her yogic self-sacrifice).',
                  'Jauhar and widow immolation are historically different events with different motivations and scopes.',
                  'Modern historical terminology often differs significantly from classical Sanskrit usage.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#C58B52] shrink-0 mt-1.5" />
                    <p className="font-cormorant text-sm text-[#E9E2D4]/80 leading-normal font-light">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* MYTH VS LANGUAGE */}
          <Reveal className="my-16">
            <div className="border border-[#C58B52]/20 bg-[#161615]/60 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Myth vs. Language
              </span>
              <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block">Claim Statement</span>
                <span className="font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border border-red-700 bg-red-700/5 text-red-700 font-bold">
                  🔴 Not Supported
                </span>
              </div>
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-semibold mb-4">
                "The word 'Satī' has always meant widow burning."
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/70 leading-relaxed font-light">
                Historical and linguistic evidence shows that the word originally referred to a virtuous woman and only later became associated with the historical practice of widow immolation.
              </p>
            </div>
          </Reveal>

          {/* THINK ABOUT IT */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-3 font-bold">
              Think About It
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#E9E2D4]/80 leading-relaxed">
              "Can we fairly investigate history if we begin by assuming that a word has always carried its modern meaning?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/20 mx-auto mt-6" />
          </Reveal>

          {/* TRANSITION & NEXT SECTION CTA */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/75 leading-relaxed mb-6">
              Understanding the terminology is only the first step. The next question is even more critical: Do the earliest Hindu scriptures actually command widow immolation?
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#C58B52] font-semibold">
              The Vedic Investigation
            </h4>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION III: THE VEDIC INVESTIGATION
        ══════════════════════════════════════════════ */}
        <section id="section-vedic" className="py-16 border-b border-[#C58B52]/10">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2">
              SECTION III <BulletDot /> EARLIEST SCRIPTURES
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#E9E2D4] mb-4">
              The Vedic Investigation
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              Do the Vedas actually command widow immolation?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/80 leading-relaxed font-light mb-8">
              One of the most repeated claims in modern discussions is that the Vedas themselves command widows to enter the funeral fire. If true, this would place the practice at the foundation of Hindu scripture. If false, it would fundamentally change how the historical development of Sati should be understood. The investigation therefore begins with the oldest surviving Hindu texts.
            </p>
          </Reveal>

          {/* EDITORIAL WARNING */}
          <Reveal className="my-6">
            <div className="border border-red-900/30 bg-red-950/15 p-6 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#E05A47] block mb-2 font-bold">
                Methodological Note
              </span>
              <h4 className="font-instrument text-lg text-[#E9E2D4] font-bold mb-2">
                One Verse Does Not Decide Everything
              </h4>
              <p className="font-cormorant text-sm text-[#E9E2D4]/70 leading-relaxed font-light">
                Much of the public debate focuses on a single passage of the Ṛgveda (10.18.7). However, responsible textual study requires reading surrounding verses, comparing manuscripts, examining philology and consulting modern scholarship before drawing conclusions.
              </p>
            </div>
          </Reveal>

          {/* SECTION ONE: ṚGVEDA 10.18.7 */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm shadow-lg">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 font-bold">
                Rigvedic Textual Evidence
              </span>
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-6">
                Ṛgveda 10.18.7
              </h3>

              {/* SANSKRIT & TRANS */}
              <div className="space-y-4 mb-6 border-b border-[#C58B52]/10 pb-6">
                <div className="text-center">
                  <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block mb-1">Original Sanskrit</span>
                  <p className="font-instrument text-lg md:text-xl text-[#E9E2D4] leading-relaxed tracking-wide">
                    इमा नारीरविधवाः सुपत्नीराञ्जनेन सर्पिषा संविशन्तु ।<br />
                    अनश्रवोऽनमीवाः सुरत्ना आ रोहन्तु जनयो योनिमग्रे ॥
                  </p>
                </div>
                <div className="text-center">
                  <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block mb-1">IAST</span>
                  <p className="font-cormorant text-sm text-[#C58B52] italic">
                    imā nārīr avidhavāḥ supatnīr āñjanena sarpiṣā saṃviśantu |<br />
                    anaśravo’namīvāḥ suratnā ā rohantu janayo yonim agre ||
                  </p>
                </div>
                <div className="text-center">
                  <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block mb-1">Accurate English Translation</span>
                  <p className="font-cormorant text-base text-[#E9E2D4]/90 leading-relaxed max-w-xl mx-auto italic font-light">
                    "Let these women, who are not widows and who have good husbands, enter with collyrium and butter. Tearless, without disease, well-adorned, let the wives first go up to the dwelling."
                  </p>
                </div>
              </div>

              {/* WORD BY WORD */}
              <div className="mb-8 bg-black/30 p-5 rounded-sm">
                <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-3 font-bold">Word-by-word Analysis</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-cormorant">
                  {[
                    { w: 'imāḥ', m: 'these' },
                    { w: 'nārīḥ', m: 'women' },
                    { w: 'avidhavāḥ', m: 'not widows' },
                    { w: 'supatnīḥ', m: 'with good husbands' },
                    { w: 'āñjanena', m: 'with collyrium/ointment' },
                    { w: 'sarpiṣā', m: 'with clarified butter' },
                    { w: 'saṃviśantu', m: 'let them enter/come forward' },
                    { w: 'anaśravaḥ', m: 'tearless' },
                    { w: 'anamīvāḥ', m: 'without disease' },
                    { w: 'suratnāḥ', m: 'well-adorned/jeweled' },
                    { w: 'ā rohantu', m: 'let them ascend/go up to' },
                    { w: 'janayaḥ', m: 'wives/mothers' },
                    { w: 'yonim', m: 'dwelling/house/source' },
                    { w: 'agre', m: 'first/in front' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2 border-b border-[#C58B52]/5 pb-1">
                      <span className="text-[#C58B52] font-semibold">{item.w}</span>
                      <span className="text-[#E9E2D4]/50 flex items-center gap-1.5"><ChevronRightIcon className="w-2.5 h-2.5 text-[#C58B52]/50 shrink-0" /> {item.m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* EXPANDABLE TABS */}
              <div className="border border-[#C58B52]/15 bg-black/20 rounded-sm">
                <div className="flex border-b border-[#C58B52]/15 overflow-x-auto text-[9px] font-general uppercase tracking-wider select-none">
                  {['Context', 'Philology', 'Interpretation', 'Why This Matters'].map((tab, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveVedicTab(idx)}
                      className={`flex-1 py-3 px-4 text-center border-r border-[#C58B52]/15 last:border-none focus:outline-none transition-colors duration-300 ${
                        activeVedicTab === idx ? 'bg-[#C58B52]/10 text-[#C58B52] font-bold' : 'text-[#E9E2D4]/50 hover:text-[#E9E2D4]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="p-5 font-cormorant text-sm leading-relaxed text-[#E9E2D4]/85 font-light">
                  {activeVedicTab === 0 && (
                    <p>
                      This verse is situated in Ṛgveda Maṇḍala 10, Hymn 18, which is a classical funeral hymn. Rather than addressing widows whose husbands have died, this specific verse explicitly addresses women who are <em>not</em> widows (<em>avidhavāḥ</em>) and whose husbands are alive (<em>supatnīḥ</em>), inviting them to step forward and participate in the cremation ritual as representatives of life and continuity.
                    </p>
                  )}
                  {activeVedicTab === 1 && (
                    <p>
                      The final word of this verse is <em>agre</em> ("first" or "in front"). Critical editions of the Ṛgveda, including those of Max Müller and the Harvard Oriental Series, preserve <em>agre</em> based on the consensus of surviving manuscripts. The philological debate is not about a competing manuscript tradition containing another word, but about how later texts cited and interpreted this verse.
                    </p>
                  )}
                  {activeVedicTab === 2 && (
                    <p>
                      Traditional commentators (like Sāyaṇa) and modern Western philologists agree that the verse describes a ritual invitation to living, married women to lead a procession. Sāyaṇa glosses <em>yonim agre</em> as entering the house first, which has no connection to self-immolation. Historically, some later commentators attempted to read it differently, but primary philological evidence shows the text describes a ritual of life.
                    </p>
                  )}
                  {activeVedicTab === 3 && (
                    <p>
                      In the medieval and early modern periods, this verse became the central battleground for debating the scriptural validity of Sati. If the final word is read as <em>agneh</em> ("of fire") rather than <em>agre</em> ("first"), the meaning of the second line changes from "let the wives first go up to the dwelling" to "let the wives ascend to the seat of fire." Understanding this debate requires examining the specific philological evidence of the reading.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* SECTION TWO: THE "AGRE vs AGNEH" FORENSIC COMPARISON */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Forensic Comparison
            </span>
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm">
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-8 text-center">
                The "agre vs agneh" Reading
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#C58B52]/10 rounded-sm">
                {/* COLUMN ONE: AGRE */}
                <div className="bg-[#1a1a19] p-6 border-b md:border-b-0 md:border-r border-[#C58B52]/10">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-general text-[8.5px] text-[#C58B52] uppercase tracking-widest font-bold">Original Reading</span>
                    <span className="font-instrument text-lg text-emerald-500 font-bold">agre</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-emerald-500 shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Meaning:</strong> "first", "in front", or "prior".
                      </p>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-emerald-500 shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Context:</strong> Addresses married women whose husbands are alive, inviting them to lead the ritual procession.
                      </p>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-emerald-500 shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Critical Editions:</strong> Max Müller, Poona critical edition, and Western Indological scholarship consistently reconstruct <em>agre</em> as the oldest, well-attested reading.
                      </p>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-emerald-500 shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Philology:</strong> Fits the grammar and metrical flow of the verse perfectly.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* COLUMN TWO: AGNEH */}
                <div className="bg-[#121211] p-6">
                  <div className="flex justify-between items-baseline mb-4">
                    <span className="font-general text-[8.5px] text-[#E05A47] uppercase tracking-widest font-bold">Later Citation</span>
                    <span className="font-instrument text-lg text-[#E05A47] font-bold">agneh</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#E05A47] shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Meaning:</strong> "of fire" or "into the fire".
                      </p>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#E05A47] shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Context:</strong> Changes the destination of the women's ascent from the home/dwelling (<em>yonim</em>) to the fire (<em>agneh</em>).
                      </p>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#E05A47] shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Modern Scholarly Consensus:</strong> Historians generally identify this shift as appearing in later medieval citations or local regional variants. Modern scholars treat it as a citation-level variation rather than a reading preserved in the primary Rigvedic manuscript tradition.
                      </p>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#E05A47] shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Philology:</strong> Alters the metrical consistency of the classical Rigvedic metre.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-[#C58B52]/10 mt-6 pt-4">
                <p className="font-cormorant italic text-xs text-[#E9E2D4]/50 max-w-2xl mx-auto leading-relaxed text-center">
                  Scholars examine how small phonological shifts (from "r" to "n") in transcription or pronunciation influenced later scriptural citations. These differences underscore why direct manuscript research is vital in historical investigation.
                </p>
              </div>
            </div>
          </Reveal>

          {/* SECTION THREE: ṚGVEDA 10.18.8 */}
          <Reveal className="my-16">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm shadow-lg">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 font-bold">
                Contextual Verse
              </span>
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-6">
                Ṛgveda 10.18.8
              </h3>

              {/* SANSKRIT & TRANS */}
              <div className="space-y-4 mb-6 border-b border-[#C58B52]/10 pb-6">
                <div className="text-center">
                  <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block mb-1">Original Sanskrit</span>
                  <p className="font-instrument text-lg md:text-xl text-[#E9E2D4] leading-relaxed tracking-wide">
                    उदीर्ष्व नार्यभि जीवलोकं गतासुमेतमुप शेष एहि ।<br />
                    हस्तग्राभस्य दिधिषोस्तवेदं पत्युर्जनित्वमभि सम्बभूथ ॥
                  </p>
                </div>
                <div className="text-center">
                  <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block mb-1">IAST</span>
                  <p className="font-cormorant text-sm text-[#C58B52] italic">
                    udīrṣva nāry abhi jīvalokaṃ gatāsum etam upa śeṣa ehi |<br />
                    hastagrābhasya didhiṣos tavedaṃ patyur janitvam abhi sambabhūtha ||
                  </p>
                </div>
                <div className="text-center">
                  <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block mb-1">English Translation</span>
                  <p className="font-cormorant text-base text-[#E9E2D4]/90 leading-relaxed max-w-xl mx-auto italic font-light">
                    "Rise up, O woman, into the world of the living. Come away from him whose life is gone, by whose side you lie. You have entered into this wifehood of the husband who held your hand and sought you."
                  </p>
                </div>
              </div>

              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/80 leading-relaxed font-light mb-4">
                <strong>Why this verse immediately follows:</strong> In the cremation ceremony, the widow lay down symbolically beside her deceased husband on the unlit funeral pyre. Verse 10.18.8 is the direct command spoken to her by a relative or priest, instructing her to rise from the pyre and return to the living community.
              </p>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/80 leading-relaxed font-light">
                <strong>Scholarly interpretation:</strong> Historians and Indologists emphasize that isolating verse 7 while ignoring verse 8 is a major methodological error. Taken together, the funeral hymn describes a transition from death back to life, not a mandate for self-destruction.
              </p>
            </div>
          </Reveal>

          {/* SECTION FOUR: ATHARVAVEDA */}
          <Reveal className="my-16">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm shadow-md">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 font-bold">
                Additional Vedic Literature
              </span>
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-4">
                Do Other Vedic Funeral Texts Mention Widow Immolation?
              </h3>
              <p className="font-cormorant text-base text-[#E9E2D4]/85 leading-relaxed font-light mb-6">
                Beyond the Ṛgveda, other early texts include similar funeral litanies:
              </p>

              <div className="space-y-4">
                <div className="border border-[#C58B52]/10 bg-white/[0.01] p-5 rounded-sm">
                  <h4 className="font-instrument text-lg text-[#C58B52] font-semibold mb-2">Atharvaveda 18.3.1</h4>
                  <p className="font-cormorant text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                    The Atharvaveda mentions the widow lying down beside her husband on the pyre as an ancient custom (<em>dharma-purāṇa</em>), but it is immediately followed by instructions to lead her away. In Vedic texts, this "symbolic lying down" represents the boundary of marriage before the widow is officially recalled to the living world.
                  </p>
                </div>
                <div className="border border-[#C58B52]/10 bg-white/[0.01] p-5 rounded-sm">
                  <h4 className="font-instrument text-lg text-[#C58B52] font-semibold mb-2">Silence on Literal Immolation</h4>
                  <p className="font-cormorant text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                    The funeral hymns of the Atharvaveda and Yajurveda do not contain commands for literal widow immolation. Rather than mandating self-destruction, they focus on property inheritance, mourning rituals, and reintegrating the widow into her family.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* SCRIPTURE COMPARISON TABLE */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Scripture Comparison
            </span>
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm">
              <h4 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-6 text-center">
                Vedic Funeral Passages Comparison
              </h4>
              <div className="border border-[#C58B52]/15 rounded-sm overflow-hidden select-none">
                {/* Headers */}
                <div className="grid grid-cols-3 bg-[#1d1d1c] p-4 text-center font-general text-[8px] uppercase tracking-wider text-[#C58B52] font-bold">
                  <div>Ṛgveda 10.18.7</div>
                  <div>Ṛgveda 10.18.8</div>
                  <div>Atharvaveda 18.3.1</div>
                </div>

                {/* Rows */}
                {[
                  {
                    rowId: 'Context',
                    title: 'Context',
                    cols: [
                      'Funeral hymn addressing living women participating in the ritual.',
                      'Funeral hymn addressing the widow lying beside her deceased husband.',
                      'Funeral hymn detailing ancient cremation and mourning customs.'
                    ]
                  },
                  {
                    rowId: 'Tradition',
                    title: 'Traditional Interpretation',
                    cols: [
                      'Sāyaṇa and classical commentators gloss "yonim agre" as entering the home first.',
                      'Instructs the widow to leave the pyre and return to the living community.',
                      'Describes symbolic lying beside the husband as an ancient boundary rite.'
                    ]
                  },
                  {
                    rowId: 'Philology',
                    title: 'Modern Philology',
                    cols: [
                      'Manuscripts preserve "agre" (first). "Agneh" is treated as a later variation.',
                      'Direct command (udīrṣva) to return to the world of the living (jīvalokam).',
                      'Identifies the lying down as a symbolic ritual, not a physical command to burn.'
                    ]
                  },
                  {
                    rowId: 'History',
                    title: 'Historical Relevance',
                    cols: [
                      'Became the primary text cited in medieval debates to support or challenge Sati.',
                      'Cited by reformers (like Ram Mohan Roy) as scriptural proof against Sati.',
                      'Cited to show that early Vedic funeral practices were non-immolational.'
                    ]
                  }
                ].map((row, ri) => {
                  const isExpanded = expandedCompareRow === row.rowId;
                  return (
                    <div key={ri} className="border-b border-[#C58B52]/15 last:border-none">
                      <button
                        onClick={() => setExpandedCompareRow(isExpanded ? null : row.rowId)}
                        className="w-full bg-[#161615] hover:bg-[#1a1a19] p-4 text-left flex justify-between items-center transition-colors focus:outline-none"
                      >
                        <span className="font-instrument text-xs font-semibold text-[#E9E2D4]">{row.title}</span>
                        <span className="font-general text-[7px] text-[#C58B52]">
                          {isExpanded ? '[ COLLAPSE ]' : '[ VIEW DETAILS ]'}
                        </span>
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: EASE_EXPO }}
                            className="overflow-hidden bg-[#000000]/40 border-t border-[#C58B52]/10"
                          >
                            <div className="grid grid-cols-3 gap-4 p-4 font-cormorant text-xs md:text-sm text-[#E9E2D4]/75 font-light leading-relaxed">
                              {row.cols.map((colText, ci) => (
                                <div key={ci} className={ci < 2 ? 'border-r border-[#C58B52]/10 pr-2' : ''}>
                                  {colText}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* SCHOLAR NOTE */}
          <Reveal className="my-10">
            <div className="border-l-2 border-[#C58B52] bg-[#161615] p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-3 font-bold">
                Scholar Note
              </span>
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-bold mb-3">
                Why Philology Matters
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/75 leading-relaxed font-light">
                Small differences in translation, grammar or manuscript transmission can significantly influence how ancient texts are understood. For this reason, historians compare multiple editions, traditional commentaries and modern philological research before drawing conclusions.
              </p>
            </div>
          </Reveal>

          {/* COMMON MISUSE */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Misconceptions Review
            </span>
            <div className="space-y-4">
              {[
                {
                  claim: 'The Vedas explicitly command every widow to enter the fire.',
                  expl: 'Historians analyze the surrounding verses (like 10.18.8) and primary manuscript evidence before evaluating this assertion. The base text explicitly invites married women who are not widows to step forward, and commands widows to return to the living world.'
                },
                {
                  claim: 'One verse alone proves the entire history of Sati.',
                  expl: 'Historical investigation requires examining scriptures alongside archaeological records, legal literature, epigraphical memorials, and dynamic regional social customs together rather than isolating single lines.'
                }
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-[#161615]/40 p-5 rounded-sm">
                  <span className="font-general text-[7px] text-[#C58B52] uppercase block tracking-widest mb-1">Claim Statement</span>
                  <h4 className="font-instrument text-lg text-[#E9E2D4] font-semibold mb-2">
                    "{item.claim}"
                  </h4>
                  <p className="font-cormorant text-xs text-[#E9E2D4]/60 leading-normal font-light">
                    {item.expl}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* MYTH VS EVIDENCE */}
          <Reveal className="my-16">
            <div className="border border-[#C58B52]/20 bg-[#161615]/60 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Myth vs. Evidence
              </span>
              <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block">Claim Statement</span>
                <span className="font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border border-[#C58B52]/30 bg-[#C58B52]/5 text-[#C58B52] font-bold">
                  🔍 Investigation Ongoing
                </span>
              </div>
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-semibold mb-4">
                "The Vedas clearly prescribe widow immolation."
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/70 leading-relaxed font-light">
                The Vedic evidence must be read alongside later legal literature (Dharmashāstras) and historical developments before reaching a final verdict.
              </p>
            </div>
          </Reveal>

          {/* KEY OBSERVATIONS */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Key Observations
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'The investigation begins with the earliest available texts.',
                'The debate surrounding Ṛgveda 10.18.7 is primarily philological.',
                'Ṛgveda 10.18.8 is essential context.',
                'Modern critical editions preserve the reading "agre".',
                'Historical conclusions require more than one verse.'
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/10 bg-[#161615]/30 p-5 rounded-sm flex items-start gap-2.5">
                  <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#C58B52] shrink-0 mt-1.5" />
                  <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-normal font-light">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* THINK ABOUT IT */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-3 font-bold">
              Think About It
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#E9E2D4]/80 leading-relaxed">
              "Should a historical claim be judged from one isolated line—or from the complete textual and historical context?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/20 mx-auto mt-6" />
          </Reveal>

          {/* TRANSITION & NEXT SECTION CTA */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/75 leading-relaxed mb-6">
              The Vedas provide the earliest textual evidence. The next question is equally important: How did later Hindu legal and religious literature discuss widow immolation?
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#C58B52] font-semibold">
              Later Scriptures
            </h4>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION IV: LATER SCRIPTURES
        ══════════════════════════════════════════════ */}
        <section id="section-later-scriptures" className="py-16 border-b border-[#C58B52]/10">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2 font-bold">
              SECTION IV <BulletDot /> EVOLUTION OF LITERATURE
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#E9E2D4] mb-4">
              Later Scriptures
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              Did later Hindu texts begin supporting Sati?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/80 leading-relaxed font-light mb-8">
              Unlike the Vedas, later Hindu literature developed across many centuries. Different legal authors, commentators and regional traditions addressed widowhood in different ways. Rather than presenting one uniform position, the textual evidence reveals an ongoing internal debate. This investigation examines that evolution chronologically.
            </p>
          </Reveal>

          {/* EDITORIAL NOTE: CATEGORIES */}
          <Reveal className="my-6">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-2 font-bold">
                Scriptural Hierarchy
              </span>
              <h4 className="font-instrument text-lg text-[#E9E2D4] font-bold mb-2">
                Not All Hindu Texts Have Equal Authority
              </h4>
              <p className="font-cormorant text-sm text-[#E9E2D4]/70 leading-relaxed font-light">
                Hindu literature includes multiple genres with distinct roles: the primary Vedas and Upanishads, the Epics (Itihāsa), and the later legal codes (Smṛtis, Dharmashāstras, and Purāṇas). These texts were written in different periods, for different purposes, and are not treated as equally authoritative by every Hindu tradition. Understanding the debate surrounding widow immolation requires identifying which genre of text is being discussed before drawing conclusions.
              </p>
            </div>
          </Reveal>

          {/* TEXTUAL TIMELINE */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Chronological Textual Evolution
            </span>
            <div className="border border-[#C58B52]/10 bg-[#121211] p-5 rounded-sm">
              {/* Horizontal line representation */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-2 border-b border-[#C58B52]/15 pb-4 mb-4 overflow-x-auto">
                {[
                  { id: 'vedas', l: 'Vedas' },
                  { id: 'epics', l: 'Epics' },
                  { id: 'early-ds', l: 'Early Dharmashastra' },
                  { id: 'medhatithi', l: 'Medhatithi' },
                  { id: 'vijnaneshvara', l: 'Vijnaneshvara' },
                  { id: 'later-smritis', l: 'Later Smritis' },
                  { id: 'puranas', l: 'Certain Puranas' }
                ].map((stage, idx) => (
                  <button
                    key={idx}
                    onClick={() => setExpandedTimelineStage(expandedTimelineStage === stage.id ? null : stage.id)}
                    className={`py-2 px-3 text-[10px] font-general uppercase tracking-wider rounded-sm focus:outline-none transition-colors border ${
                      expandedTimelineStage === stage.id
                        ? 'bg-[#C58B52]/15 border-[#C58B52] text-[#C58B52] font-bold'
                        : 'border-[#C58B52]/10 hover:border-[#C58B52]/40 text-[#E9E2D4]/60'
                    }`}
                  >
                    {stage.l}
                  </button>
                ))}
              </div>

              {/* Explanations container */}
              <div className="min-h-[100px] bg-black/20 p-4 rounded-sm">
                {expandedTimelineStage === null && (
                  <p className="font-cormorant text-sm italic text-[#E9E2D4]/40 text-center py-4">
                    [ Click on any stage in the timeline above to expand its historical and textual details ]
                  </p>
                )}
                <AnimatePresence mode="wait">
                  {expandedTimelineStage === 'vedas' && (
                    <motion.div
                      key="vedas"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">The Vedas (Earliest Layer)</h5>
                      <p>
                        The primary and highest authority in Hindu scriptural hierarchy. As demonstrated by critical philological research, the Vedic cremation hymns contain no commands for literal widow immolation and explicitly command the widow to rise and return to the community of the living.
                      </p>
                    </motion.div>
                  )}
                  {expandedTimelineStage === 'epics' && (
                    <motion.div
                      key="epics"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">The Epics (Mahābhārata & Rāmāyaṇa)</h5>
                      <p>
                        These are narrative compositions containing regional legends. Portions of the Mahābhārata (such as the death of Mādrī) describe instances of self-immolation in specific war settings. However, historians emphasize that these represent narrative descriptions of events rather than universal legal prescriptions.
                      </p>
                    </motion.div>
                  )}
                  {expandedTimelineStage === 'early-ds' && (
                    <motion.div
                      key="early-ds"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">Early Dharmashastra Codes</h5>
                      <p>
                        Early legal literature (such as the early Dharmasūtras of Gautama, Āpastamba, or Baudhāyana) describes mourning, widow inheritance, and ascetic life in detail, but does not prescribe or even mention widow immolation.
                      </p>
                    </motion.div>
                  )}
                  {expandedTimelineStage === 'medhatithi' && (
                    <motion.div
                      key="medhatithi"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">Medhātithi (9th–10th Century)</h5>
                      <p>
                        The preeminent classical commentator on the Manusmṛti. He strongly opposed widow immolation, declaring it to be a form of suicide (which is forbidden by primary Vedic law) and comparing it to prohibited black magic rituals.
                      </p>
                    </motion.div>
                  )}
                  {expandedTimelineStage === 'vijnaneshvara' && (
                    <motion.div
                      key="vijnaneshvara"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">Vijñāneśvara (11th–12th Century)</h5>
                      <p>
                        Author of the highly influential legal commentary <em>Mitākṣarā</em> on the Yājñavalkya Smṛti. He offered a different legal view, interpreting Smṛti verses as permitting widow immolation under voluntary conditions, though still maintaining that a life of celibate asceticism was spiritually superior.
                      </p>
                    </motion.div>
                  )}
                  {expandedTimelineStage === 'later-smritis' && (
                    <motion.div
                      key="later-smritis"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">Later Smṛti Compendiums</h5>
                      <p>
                        Later legal codes (such as Aṅgiras or Vyāsa Smṛti) began to praise the practice within specific limits. However, other contemporary Smṛtis (such as Paiṭhīnasi) prohibited the practice for Brahmana women or altogether, reflecting ongoing regional divisions.
                      </p>
                    </motion.div>
                  )}
                  {expandedTimelineStage === 'puranas' && (
                    <motion.div
                      key="puranas"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">Certain Purāṇic Texts</h5>
                      <p>
                        Purāṇic texts contain diverse regional segments. Portions of later Purāṇas (like the Garuḍa Purāṇa) contain verses praising Sahagamana, while other Purāṇic legends depict it negatively or treat it as a localized military custom.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <p className="font-cormorant italic text-[11px] text-[#E9E2D4]/50 mt-3 text-center">
                Timeline highlights how interpretations shifted across historical periods.
              </p>
            </div>
          </Reveal>

          {/* SECTION ONE: THE EPICS */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm shadow-md">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 font-bold">
                Narrative vs. Prescriptive Law
              </span>
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-4">
                The Epics (Itihāsa)
              </h3>
              <p className="font-cormorant text-base text-[#E9E2D4]/85 leading-relaxed font-light mb-4">
                In the epics (the <em>Mahābhārata</em> and the <em>Rāmāyaṇa</em>), we encounter narrative accounts of self-immolation. For instance, the Mahābhārata describes Mādrī, the consort of Pāṇḍu, entering her husband's funeral fire.
              </p>
              <p className="font-cormorant text-base text-[#E9E2D4]/85 leading-relaxed font-light">
                <strong>Crucial Distinction:</strong> Textual scholars emphasize the difference between a <em>descriptive narrative</em> (an account of what happened in a story) and a <em>universal religious command</em> (what is prescribed as a general code of conduct). Stories within epic poetry do not function as code-level legal mandates.
              </p>
            </div>
          </Reveal>

          {/* SECTION TWO: EARLY DHARMASHASTRA */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm shadow-md">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 font-bold">
                Early Legal Literature
              </span>
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-4">
                Early Dharmashāstra Compendiums
              </h3>
              <p className="font-cormorant text-base text-[#E9E2D4]/85 leading-relaxed font-light mb-4">
                The early legal treatises, written in the form of prose aphorisms (Dharmasūtras), focus heavily on the duties of different social groups, family rights, and rituals. They discuss the life of a widow in detail—focusing on mourning periods, property inheritance, ascetic practices, and even custom-based remarriage (<em>Niyoga</em>).
              </p>
              <p className="font-cormorant text-base text-[#E9E2D4]/85 leading-relaxed font-light">
                <strong>Findings:</strong> Early legal authors do not present a unanimous position on widowhood, and the practice of widow immolation is absent from the earliest layers of these codes. The development of rules surrounding the practice appeared only in later centuries.
              </p>
            </div>
          </Reveal>

          {/* SECTION THREE: MEDHATITHI */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm shadow-lg">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 font-bold">
                Legal Commentators
              </span>
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-2">
                Medhātithi
              </h3>
              <p className="font-instrument italic text-base text-[#C58B52] mb-6">
                A Voice Against Widow Immolation
              </p>
              <p className="font-cormorant text-base text-[#E9E2D4]/85 leading-relaxed font-light mb-6">
                Medhātithi (circa 9th–10th century CE) wrote the oldest surviving and most authoritative commentary on the <em>Manusmṛti</em> (the Manubhāṣya). When discussing the rules of widowhood, he addressed the practice of widow immolation directly.
              </p>

              {/* MEDHATITHI TABS */}
              <div className="border border-[#C58B52]/15 bg-black/20 rounded-sm">
                <div className="flex border-b border-[#C58B52]/15 overflow-x-auto text-[9px] font-general uppercase tracking-wider select-none">
                  {['Context', 'Reasoning', 'Historical Importance'].map((tab, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMedhatithiTab(idx)}
                      className={`flex-1 py-3 px-4 text-center border-r border-[#C58B52]/15 last:border-none focus:outline-none transition-colors duration-300 ${
                        activeMedhatithiTab === idx ? 'bg-[#C58B52]/10 text-[#C58B52] font-bold' : 'text-[#E9E2D4]/50 hover:text-[#E9E2D4]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="p-5 font-cormorant text-sm leading-relaxed text-[#E9E2D4]/85 font-light">
                  {activeMedhatithiTab === 0 && (
                    <p>
                      Commenting on Manusmṛti 5.156 (which mandates that a widow should lead a life of pure ascetic restraint), Medhātithi introduces the practice of Sahagamana. He notes that while some popular traditions recommend it, he must evaluate its scriptural validity.
                    </p>
                  )}
                  {activeMedhatithiTab === 1 && (
                    <p>
                      Medhātithi explicitly rejects widow immolation, calling it a form of suicide (<em>ātmahatyā</em>). He references the foundational Vedic injunction <em>"tasmād u ha na purāyuṣaḥ preyāt"</em> ("one should not depart before the span of life is full"), arguing that taking one's own life is a direct violation of scripture. He compares Sati to the <em>Syena</em> sacrifice—a black magic ritual for harming enemies. Although described in Vedic texts, the Syena is forbidden because its goal is destructive and sinful. Therefore, even if Sati is praised in minor texts, it is prohibited by the primary Vedic prohibition against suicide.
                    </p>
                  )}
                  {activeMedhatithiTab === 2 && (
                    <p>
                      Medhātithi’s analysis is vital because it proves that opposition to Sati did not originate from modern Western or colonial reform movements. Internal scriptural debate existed among the highest traditional authorities of orthodox Hindu law centuries before the modern era, using primary Vedic principles to condemn the practice.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* SECTION FOUR: VIJNANESHVARA */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm shadow-md">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 font-bold">
                Alternative Commentary
              </span>
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-2">
                Vijñāneśvara
              </h3>
              <p className="font-instrument italic text-base text-[#C58B52] mb-4">
                A Different Legal Interpretation
              </p>
              <p className="font-cormorant text-base text-[#E9E2D4]/85 leading-relaxed font-light mb-4">
                Vijñāneśvara (circa 11th–12th century CE) wrote the <em>Mitākṣarā</em>, a commentary on the <em>Yājñavalkya Smṛti</em> that became the dominant legal framework in many parts of India.
              </p>
              <p className="font-cormorant text-base text-[#E9E2D4]/85 leading-relaxed font-light mb-4">
                <strong>His Interpretation:</strong> Unlike Medhātithi, Vijñāneśvara argued that Sahagamana (accompanying the husband in death) was permissible. He claimed that the Vedic injunction against suicide applied only to those seeking worldly goals, whereas a widow performing Sati did so as a selfless act of devotion.
              </p>
              <p className="font-cormorant text-base text-[#E9E2D4]/85 leading-relaxed font-light">
                <strong>Context:</strong> While Vijñāneśvara permitted the practice under specific voluntary conditions, he still maintained that leading a life of pure celibate asceticism (Brahmacarya) was spiritually superior. His work represents one influential legal view within the Smṛti tradition, rather than a universal command representing all Hindu thought.
              </p>
            </div>
          </Reveal>

          {/* SECTION FIVE: LATER SMRITIS AND PURANAS */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Later Textual Divergence
            </span>
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm">
              <h4 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-6 text-center">
                Smṛtis and Purāṇas Divergence
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#C58B52]/10 rounded-sm">
                {/* Column 1 */}
                <div className="bg-[#1a1a19] p-5 border-b md:border-b-0 md:border-r border-[#C58B52]/10">
                  <h5 className="font-instrument text-sm text-[#C58B52] font-semibold mb-4 border-b border-[#C58B52]/10 pb-2">
                    Praising Sati in particular contexts
                  </h5>
                  <p className="font-cormorant text-xs text-[#E9E2D4]/75 leading-relaxed font-light">
                    Texts like the <em>Aṅgiras Smṛti</em> or sections of the later <em>Garuḍa Purāṇa</em> praise Sahagamana, presenting it as an act of absolute wifely devotion that cleanses the ancestral karma of both spouses.
                  </p>
                </div>

                {/* Column 2 */}
                <div className="bg-[#141413] p-5 border-b md:border-b-0 md:border-r border-[#C58B52]/10">
                  <h5 className="font-instrument text-sm text-amber-500/80 font-semibold mb-4 border-b border-[#C58B52]/10 pb-2">
                    Remaining silent
                  </h5>
                  <p className="font-cormorant text-xs text-[#E9E2D4]/75 leading-relaxed font-light">
                    The primary <em>Manusmṛti</em>, the <em>Yājñavalkya Smṛti</em>, and the earliest Dharmasūtras outline the rules for widowhood (mourning, ascetic restraint, property inheritance) without mentioning or prescribing widow immolation.
                  </p>
                </div>

                {/* Column 3 */}
                <div className="bg-[#0f0f0e] p-5">
                  <h5 className="font-instrument text-sm text-[#E05A47] font-semibold mb-4 border-b border-[#C58B52]/10 pb-2">
                    Discouraging or limiting
                  </h5>
                  <p className="font-cormorant text-xs text-[#E9E2D4]/75 leading-relaxed font-light">
                    Classical authors (like Bāṇabhaṭṭa in his <em>Kādambarī</em>) criticized the practice, and legal texts like the <em>Paiṭhīnasi Smṛti</em> explicitly prohibited Sahagamana for women of the Brahmana community, limiting its scope.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#C58B52]/10 mt-6 pt-4 text-center">
                <span className="font-general text-[7px] text-[#C58B52] uppercase block tracking-widest mb-2 font-bold">Linguistic Distinctions</span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[10px] font-cormorant text-[#E9E2D4]/70">
                  <div><strong>Prescriptive Recommendation:</strong> An ideal state suggested by a specific legal author.</div>
                  <div><strong>Historical Description:</strong> An observation of what occurred in specific regions.</div>
                  <div><strong>Religious Praise:</strong> Eulogizing an act without making it a mandatory law.</div>
                  <div><strong>Legal Obligation:</strong> A mandatory requirement (never applied to Sati).</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* THE INTERNAL DEBATE: VISUAL CENTERPIECE */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              The Forensic Debate
            </span>
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm">
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-2 text-center">
                One Tradition, Many Legal Opinions
              </h3>
              <p className="font-cormorant text-xs text-[#E9E2D4]/50 mb-8 text-center max-w-md mx-auto">
                Surviving commentaries reveal that the classical legal tradition did not speak with a single voice on widowhood.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#C58B52]/10 rounded-sm">
                {/* MEDHATITHI COLUMN */}
                <div className="bg-[#1a1a19] p-6 border-b md:border-b-0 md:border-r border-[#C58B52]/10">
                  <h4 className="font-instrument text-lg text-[#C58B52] font-bold mb-4">Medhātithi</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-red-500 shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Stance:</strong> Opposition to widow immolation.
                      </p>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-red-500 shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Reasoning:</strong> Declares self-immolation to be suicide (<em>ātmahatyā</em>), which is forbidden by general Vedic principles. Compares Sati to the forbidden <em>Syena</em> black magic sacrifice.
                      </p>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-red-500 shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Scriptural Basis:</strong> Primary Vedic injunctions prohibiting premature death and self-harm.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* VIJNANESHVARA COLUMN */}
                <div className="bg-[#121211] p-6">
                  <h4 className="font-instrument text-lg text-emerald-500 font-bold mb-4">Vijñāneśvara</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-emerald-500 shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Stance:</strong> Conditional approval.
                      </p>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-emerald-500 shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Reasoning:</strong> Argues that Sahagamana is not a sin if performed voluntarily without desire for worldly gain (though it was still considered inferior to leading a life of celibate asceticism).
                      </p>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-emerald-500 shrink-0 mt-1.5" />
                      <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                        <strong>Legal Basis:</strong> Select Smṛti verses praising Sahagamana, which he interpreted as exceptions to the general prohibition on suicide.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-[#C58B52]/10 mt-6 pt-4 text-center">
                <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-2 font-bold">
                  Editorial Observation
                </span>
                <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/70 leading-relaxed max-w-xl mx-auto">
                  The historical evidence shows that influential Hindu legal scholars themselves disagreed about widow immolation. This internal debate is essential for understanding the later textual tradition.
                </p>
              </div>
            </div>
          </Reveal>

          {/* SCHOLAR NOTE */}
          <Reveal className="my-10">
            <div className="border-l-2 border-[#C58B52] bg-[#161615] p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-3 font-bold">
                Scholar Note
              </span>
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-bold mb-3">
                Prescriptive Texts vs Historical Reality
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/75 leading-relaxed font-light">
                Legal literature often describes how society ought to function according to particular authors. Historians distinguish these prescriptive discussions from evidence showing how communities actually lived. The existence of a legal recommendation does not automatically demonstrate universal historical practice.
              </p>
            </div>
          </Reveal>

          {/* COMMON MISCONCEPTIONS */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Misconceptions Review
            </span>
            <div className="space-y-4">
              {[
                {
                  claim: 'Every Hindu scripture supported Sati.',
                  status: 'Evidence does not support a single unanimous textual position.',
                  expl: 'Surviving texts include strong opposition (like Medhātithi), absolute silence (the primary early codes), and regional praise (later Smṛtis).'
                },
                {
                  claim: 'Manusmriti alone defines Hinduism.',
                  status: 'Oversimplified.',
                  expl: 'Hindu traditions recognize multiple scriptural genres, regional commentators, and varying local practices, rather than a single codex.'
                },
                {
                  claim: 'If one later text praises Sati, then all Hindu traditions accepted it.',
                  status: 'Oversimplified.',
                  expl: 'Specific regional praise was often countered by textual bans for Brahmana women or complete scriptural opposition by major commentators.'
                }
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-[#161615]/40 p-5 rounded-sm">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-general text-[7px] text-[#C58B52] uppercase block tracking-widest">Claim Statement</span>
                    <span className="font-general text-[7.5px] text-[#E05A47] uppercase tracking-wider font-bold">Status: {item.status}</span>
                  </div>
                  <h4 className="font-instrument text-lg text-[#E9E2D4] font-semibold mb-2">
                    "{item.claim}"
                  </h4>
                  <p className="font-cormorant text-xs text-[#E9E2D4]/60 leading-normal font-light">
                    {item.expl}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* MYTH VS EVIDENCE */}
          <Reveal className="my-16">
            <div className="border border-[#C58B52]/20 bg-[#161615]/60 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Myth vs. Evidence
              </span>
              <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block">Claim Statement</span>
                <span className="font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border border-red-700 bg-red-700/5 text-red-700 font-bold">
                  🔴 Not Supported
                </span>
              </div>
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-semibold mb-4">
                "Later Hindu scriptures speak with one unanimous voice about Sati."
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/70 leading-relaxed font-light">
                Surviving legal and religious literature reflects multiple, often conflicting viewpoints rather than complete textual unanimity.
              </p>
            </div>
          </Reveal>

          {/* KEY OBSERVATIONS */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Key Observations
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Later Hindu literature developed over many centuries.',
                'Legal scholars did not always agree on widow immolation.',
                'Different genres of texts served different regional purposes.',
                'Prescriptive texts are different from historical evidence.',
                'Internal debate existed within the orthodox tradition itself.'
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/10 bg-[#161615]/30 p-5 rounded-sm flex items-start gap-2.5">
                  <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#C58B52] shrink-0 mt-1.5" />
                  <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-normal font-light">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* THINK ABOUT IT */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-3 font-bold">
              Think About It
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#E9E2D4]/80 leading-relaxed">
              "If respected legal scholars within the same tradition disagreed, can the tradition itself honestly be described as having one unquestioned position?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/20 mx-auto mt-6" />
          </Reveal>

          {/* TRANSITION & NEXT SECTION CTA */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/75 leading-relaxed mb-6">
              The textual investigation reveals that ideas evolved. The next question is historical: When did widow immolation actually begin appearing in historical records?
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#C58B52] font-semibold">
              Historical Development
            </h4>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION V: HISTORICAL DEVELOPMENT
        ══════════════════════════════════════════════ */}
        <section id="section-historical-development" className="py-16 border-b border-[#C58B52]/10">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2 font-bold">
              SECTION V <BulletDot /> MATERIAL EVIDENCE
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#E9E2D4] mb-4">
              Historical Development
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              When did Sati actually appear in Indian history?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/80 leading-relaxed font-light mb-8">
              A religious text and a historical practice are not always the same thing. Even when later texts discuss an institution, historians still ask a different question: {"\""}When do we first find evidence that people actually practiced it?{"\""} To answer that, we move from scripture to archaeology, inscriptions, and historical records.
            </p>
          </Reveal>

          {/* EDITORIAL NOTE */}
          <Reveal className="my-6">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-2 font-bold">
                Methodology Note
              </span>
              <h4 className="font-instrument text-lg text-[#E9E2D4] font-bold mb-2">
                Texts vs. Historical Evidence
              </h4>
              <p className="font-cormorant text-sm text-[#E9E2D4]/70 leading-relaxed font-light">
                Ancient texts describe ideas and ideals. History investigates what actually occurred in practice. This section therefore relies primarily on archaeology, inscriptions, physical monuments, and modern historical scholarship rather than theological interpretation.
              </p>
            </div>
          </Reveal>

          {/* INTERACTIVE HISTORICAL TIMELINE */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Timeline of Historical Practice
            </span>
            <div className="border border-[#C58B52]/10 bg-[#121211] p-5 rounded-sm">
              {/* Horizontal line representation */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-2 border-b border-[#C58B52]/15 pb-4 mb-4 overflow-x-auto">
                {[
                  { id: 'vedic-p', l: 'Vedic Period' },
                  { id: 'epic-p', l: 'Epic Period' },
                  { id: 'gupta-p', l: 'Gupta Period' },
                  { id: 'early-med', l: 'Early Medieval' },
                  { id: 'rajput-k', l: 'Rajput Kingdoms' },
                  { id: 'mughal-p', l: 'Mughal Period' },
                  { id: 'colonial-i', l: 'Colonial India' }
                ].map((period, idx) => (
                  <button
                    key={idx}
                    onClick={() => setExpandedHistTimeline(expandedHistTimeline === period.id ? null : period.id)}
                    className={`py-2 px-3 text-[10px] font-general uppercase tracking-wider rounded-sm focus:outline-none transition-colors border ${
                      expandedHistTimeline === period.id
                        ? 'bg-[#C58B52]/15 border-[#C58B52] text-[#C58B52] font-bold'
                        : 'border-[#C58B52]/10 hover:border-[#C58B52]/40 text-[#E9E2D4]/60'
                    }`}
                  >
                    {period.l}
                  </button>
                ))}
              </div>

              {/* Explanations container */}
              <div className="min-h-[100px] bg-black/20 p-4 rounded-sm">
                {expandedHistTimeline === null && (
                  <p className="font-cormorant text-sm italic text-[#E9E2D4]/40 text-center py-4">
                    [ Click on any period in the timeline above to expand its historical and material details ]
                  </p>
                )}
                <AnimatePresence mode="wait">
                  {expandedHistTimeline === 'vedic-p' && (
                    <motion.div
                      key="vedic-p"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">Vedic Period (Earliest Era)</h5>
                      <p>
                        No confirmed physical evidence of widow immolation has been found in archaeological excavations, contemporary regional inscriptions, or contemporary administrative/tax records. No surviving evidence demonstrates the historical practice of the custom during this period.
                      </p>
                    </motion.div>
                  )}
                  {expandedHistTimeline === 'epic-p' && (
                    <motion.div
                      key="epic-p"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">Epic Period (Heroic Poetry Context)</h5>
                      <p>
                        While legends such as the self-immolation of Mādrī are detailed in epic literature, literary narratives represent narrative accounts rather than verified archaeological proof. Material evidence does not demonstrate widespread social practice matching these narratives during this period.
                      </p>
                    </motion.div>
                  )}
                  {expandedHistTimeline === 'gupta-p' && (
                    <motion.div
                      key="gupta-p"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">Gupta Period (Earliest Inscription)</h5>
                      <p>
                        The earliest widely accepted inscriptional evidence of the practice appears in the early 6th century CE. The Eran Inscription (510 CE) in Madhya Pradesh records that the wife of the general Goparāja self-immolated after his death in battle.
                      </p>
                    </motion.div>
                  )}
                  {expandedHistTimeline === 'early-med' && (
                    <motion.div
                      key="early-med"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">Early Medieval India (Memorial Stones)</h5>
                      <p>
                        Between the 7th and 12th centuries CE, the practice becomes increasingly visible in local records. This period saw the emergence of dedicated memorial stones (Sati stones), particularly in central and southern India, showing a clear regional rather than national concentration.
                      </p>
                    </motion.div>
                  )}
                  {expandedHistTimeline === 'rajput-k' && (
                    <motion.div
                      key="rajput-k"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">Rajput Kingdoms (Royal Households & Siege)</h5>
                      <p>
                        Between the 12th and 16th centuries CE, the practice became prominent among royal households and warrior families. Driven by political instability, warfare, and prestige, the practice was highly localized. Indologists differentiate between individual Sati and <em>Jauhar</em> (mass self-immolation by women to avoid capture during sieges).
                      </p>
                    </motion.div>
                  )}
                  {expandedHistTimeline === 'mughal-p' && (
                    <motion.div
                      key="mughal-p"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">Mughal Period (Regional Customs)</h5>
                      <p>
                        Mughal-era records document regional continuation alongside administrative interventions (such as under Akbar, who issued decrees prohibiting forced Sati). Historians note significant variation in frequency and enforcement across provinces.
                      </p>
                    </motion.div>
                  )}
                  {expandedHistTimeline === 'colonial-i' && (
                    <motion.div
                      key="colonial-i"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="font-cormorant text-sm text-[#E9E2D4]/85 leading-relaxed"
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-1 font-semibold">Colonial India (Statistical Records)</h5>
                      <p>
                        British administrative records in the late 18th and early 9th century documented Sati occurrences, showing high concentration in specific regions like the Calcutta division of Bengal. Modern historians analyze these records while evaluating the limitations, biases, and structural factors of colonial data gathering.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          {/* THE ERAN INSCRIPTION PROFILE */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm shadow-lg">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 font-bold">
                Epigraphical Highlight
              </span>
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-2">
                The Eran Inscription
              </h3>
              <p className="font-instrument italic text-base text-[#C58B52] mb-6">
                The Earliest Widely Accepted Inscriptional Evidence
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3 font-cormorant text-xs md:text-sm text-[#E9E2D4]/80">
                  <div className="flex justify-between border-b border-[#C58B52]/10 pb-1">
                    <span className="text-[#C58B52]">Date:</span>
                    <span>510 CE (Gupta Era)</span>
                  </div>
                  <div className="flex justify-between border-b border-[#C58B52]/10 pb-1">
                    <span className="text-[#C58B52]">Location:</span>
                    <span>Eran, Sagar district, Madhya Pradesh</span>
                  </div>
                  <div className="flex justify-between border-b border-[#C58B52]/10 pb-1">
                    <span className="text-[#C58B52]">Context:</span>
                    <span>General Goparāja falls in battle; his wife immolates</span>
                  </div>
                </div>
                <div className="p-4 bg-black/30 rounded-sm">
                  <span className="font-general text-[7px] text-[#C58B52] uppercase block tracking-widest mb-2 font-bold">
                    Translation Summary
                  </span>
                  <p className="font-cormorant text-xs text-[#E9E2D4]/70 leading-relaxed italic font-light">
                    "His devoted, beloved, and heroic wife, accompanying him, entered into the mass of fire (pyre) after he had fought a great battle and departed to heaven."
                  </p>
                </div>
              </div>

              <button
                onClick={() => setExpandedEranCard(!expandedEranCard)}
                className="w-full bg-[#C58B52]/10 border border-[#C58B52]/20 hover:border-[#C58B52]/40 text-[#C58B52] py-2.5 px-4 font-general text-[8.5px] uppercase tracking-widest focus:outline-none transition-colors rounded-sm font-bold"
              >
                {expandedEranCard ? 'Collapse Historical Importance' : 'Expand Historical Importance'}
              </button>

              <AnimatePresence>
                {expandedEranCard && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE_EXPO }}
                    className="overflow-hidden bg-black/40 border-t border-[#C58B52]/15 mt-4 p-4"
                  >
                    <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light">
                      The Eran pillar inscription represents a critical anchor point. Unlike literary texts, which can undergo editing and copy-level variations over centuries, this stone monument is a contemporary, dated physical record. It demonstrates that by 510 CE, the custom was practiced within royal military households in Central India. Historians refer to this as the earliest clear physical documentation of the practice.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* EVIDENCE MAP */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Interactive Regional Evidence Map
            </span>
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm">
              <h4 className="font-instrument text-xl md:text-2xl text-[#E9E2D4] font-bold mb-4 text-center">
                Regional Concentrations of Material Evidence
              </h4>
              <p className="font-cormorant text-xs text-[#E9E2D4]/50 mb-8 text-center max-w-md mx-auto leading-relaxed">
                Material evidence is not spread uniformly across the subcontinent. Click on the regional buttons below to view inscriptional and historical distributions.
              </p>

              {/* Map Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Region selector buttons representing map positions */}
                <div className="md:col-span-4 flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 select-none">
                  {[
                    { id: 'Rajasthan', label: 'Rajasthan (West)' },
                    { id: 'Bengal', label: 'Bengal (East)' },
                    { id: 'Karnataka', label: 'Karnataka (South)' },
                    { id: 'Central India', label: 'Central India' }
                  ].map((reg) => (
                    <button
                      key={reg.id}
                      onClick={() => setActiveHistRegion(reg.id)}
                      className={`w-full py-3 px-4 text-left font-general text-[9px] uppercase tracking-wider border rounded-sm focus:outline-none transition-colors ${
                        activeHistRegion === reg.id
                          ? 'bg-[#C58B52]/15 border-[#C58B52] text-[#C58B52] font-bold'
                          : 'border-[#C58B52]/10 hover:border-[#C58B52]/30 text-[#E9E2D4]/60'
                      }`}
                    >
                      {reg.label}
                    </button>
                  ))}
                </div>

                {/* Simulated map graphic + details */}
                <div className="md:col-span-8 bg-black/30 p-6 rounded-sm min-h-[220px]">
                  <AnimatePresence mode="wait">
                    {activeHistRegion === 'Rajasthan' && (
                      <motion.div
                        key="raj"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 font-cormorant"
                      >
                        <h5 className="font-instrument text-base text-[#C58B52] font-bold">Rajasthan (West)</h5>
                        <p className="text-xs text-[#E9E2D4]/80 leading-relaxed font-light">
                          <strong>Known Evidence:</strong> Extensive collections of royal Sati monuments, chhatris (cenotaphs), and regional warrior family records.
                        </p>
                        <p className="text-xs text-[#E9E2D4]/80 leading-relaxed font-light">
                          <strong>Chronology:</strong> Heaviest concentration between the 12th and 18th centuries CE, matching periods of intense military conflict and political division.
                        </p>
                        <p className="text-xs text-[#E9E2D4]/80 leading-relaxed font-light">
                          <strong>Historical Notes:</strong> Intimately tied to courtly notions of honor, warrior class prestige, and the distinct military siege ritual of Jauhar.
                        </p>
                      </motion.div>
                    )}
                    {activeHistRegion === 'Bengal' && (
                      <motion.div
                        key="ben"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 font-cormorant"
                      >
                        <h5 className="font-instrument text-base text-[#C58B52] font-bold">Bengal (East)</h5>
                        <p className="text-xs text-[#E9E2D4]/80 leading-relaxed font-light">
                          <strong>Known Evidence:</strong> British administrative tallies, missionary diaries, and early local press accounts.
                        </p>
                        <p className="text-xs text-[#E9E2D4]/80 leading-relaxed font-light">
                          <strong>Chronology:</strong> Peak recorded frequency occurs in the late 18th and early 19th centuries CE.
                        </p>
                        <p className="text-xs text-[#E9E2D4]/80 leading-relaxed font-light">
                          <strong>Historical Notes:</strong> Highly concentrated around the Calcutta division. Historians link this late surge to property inheritance customs (the Dayabhaga legal system which gave widows property rights) and economic changes rather than ancient mandates.
                        </p>
                      </motion.div>
                    )}
                    {activeHistRegion === 'Karnataka' && (
                      <motion.div
                        key="kar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 font-cormorant"
                      >
                        <h5 className="font-instrument text-base text-[#C58B52] font-bold">Karnataka (South)</h5>
                        <p className="text-xs text-[#E9E2D4]/80 leading-relaxed font-light">
                          <strong>Known Evidence:</strong> Numerous local Sati memorial stones (commonly called <em>Masti-kallu</em>), which feature carved reliefs of a raised arm representing the blessing widow.
                        </p>
                        <p className="text-xs text-[#E9E2D4]/80 leading-relaxed font-light">
                          <strong>Chronology:</strong> Widely scattered across the 9th to 14th centuries CE.
                        </p>
                        <p className="text-xs text-[#E9E2D4]/80 leading-relaxed font-light">
                          <strong>Historical Notes:</strong> Shows highly localized occurrences, often commemorating women from rural, agricultural, or local defense communities, rather than standard elite court households.
                        </p>
                      </motion.div>
                    )}
                    {activeHistRegion === 'Central India' && (
                      <motion.div
                        key="cen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3 font-cormorant"
                      >
                        <h5 className="font-instrument text-base text-[#C58B52] font-bold">Central India (Madhya Pradesh & Chhattisgarh)</h5>
                        <p className="text-xs text-[#E9E2D4]/80 leading-relaxed font-light">
                          <strong>Known Evidence:</strong> The Eran Inscription (510 CE) and early medieval memorial tablets.
                        </p>
                        <p className="text-xs text-[#E9E2D4]/80 leading-relaxed font-light">
                          <strong>Chronology:</strong> From the 6th century CE onward.
                        </p>
                        <p className="text-xs text-[#E9E2D4]/80 leading-relaxed font-light">
                          <strong>Historical Notes:</strong> Home to the earliest physical records. These carvings frequently represent single, isolated occurrences associated with battlefield casualties.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="border-t border-[#C58B52]/10 mt-6 pt-4 text-center bg-black/10 p-4 rounded-sm">
                <span className="font-general text-[8px] uppercase tracking-widest text-[#E05A47] block mb-2 font-bold">
                  Important Historical Caveat
                </span>
                <p className="font-cormorant text-xs text-[#E9E2D4]/60 leading-relaxed max-w-xl mx-auto font-light">
                  The evidence shows that Sati was not a uniform, national custom. Large regions of India—including much of the South, East, and West—contain little to no historical evidence of the practice, demonstrating significant regional diversity.
                </p>
              </div>
            </div>
          </Reveal>

          {/* REGIONAL DIVERSITY COMPARISON CARDS */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Regional Diversity Matrix
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: 'raj-c',
                  region: 'Rajasthan',
                  earliest: '12th Century CE',
                  freq: 'Moderate (mostly warrior elite)',
                  char: 'Royal chhatris, prestige, linked to war casualties',
                  obs: 'Associated with defense of Rajput status during regional political fragmentation'
                },
                {
                  id: 'ben-c',
                  region: 'Bengal',
                  earliest: 'Late 18th Century CE (documented records)',
                  freq: 'High (specifically near Calcutta in late colonial era)',
                  char: 'Dayabhaga property laws, merchant/Brahmana class concentration',
                  obs: 'Statistical peaks are historically connected to local property laws rather than ancient customs'
                },
                {
                  id: 'kar-c',
                  region: 'Karnataka',
                  earliest: '9th Century CE',
                  freq: 'Low (localized pockets)',
                  char: 'Masti-kallu memorial carvings in rural regions',
                  obs: 'Commemorates women of varying local social classes'
                },
                {
                  id: 'cen-c',
                  region: 'Central India',
                  earliest: '510 CE (Eran)',
                  freq: 'Low (isolated occurrences)',
                  char: 'Battle memorial pillars (Gupta era)',
                  obs: 'Acts as the earliest dated starting point for physical evidence'
                }
              ].map((item) => (
                <div key={item.id} className="border border-[#C58B52]/15 bg-[#161615] p-5 rounded-sm">
                  <h4 className="font-instrument text-lg text-[#C58B52] font-semibold mb-3 border-b border-[#C58B52]/10 pb-2">
                    {item.region}
                  </h4>
                  <ul className="space-y-2 font-cormorant text-xs text-[#E9E2D4]/75">
                    <li className="flex justify-between">
                      <span className="text-[#C58B52]">Earliest Material Evidence:</span>
                      <span>{item.earliest}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[#C58B52]">Estimated Frequency:</span>
                      <span>{item.freq}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-[#C58B52]">Key Characteristics:</span>
                      <span className="text-right max-w-[200px] truncate-none">{item.char}</span>
                    </li>
                    <li className="border-t border-[#C58B52]/10 pt-2 mt-2">
                      <span className="text-[9px] font-general uppercase block text-[#C58B52] mb-1 font-bold">Scholar Observation</span>
                      <p className="italic font-light leading-normal">{item.obs}</p>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          {/* EDITORIAL VISUALIZATION: FLOW */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Evolution of the Practice
            </span>
            <div className="border border-[#C58B52]/15 bg-[#161615] p-6 md:p-8 rounded-sm text-center">
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-bold mb-8">
                The Historical Trajectory of Widow Immolation
              </h4>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-xl mx-auto mb-6 text-[10px] font-general uppercase tracking-widest">
                <div className="border border-[#C58B52]/20 px-3 py-2 rounded-sm bg-black/40 w-full md:w-auto">Literary Narratives</div>
                <div className="text-[#C58B52]">➔</div>
                <div className="border border-[#C58B52]/20 px-3 py-2 rounded-sm bg-black/40 w-full md:w-auto">Legal Discussions</div>
                <div className="text-[#C58B52]">➔</div>
                <div className="border border-[#C58B52]/20 px-3 py-2 rounded-sm bg-black/40 w-full md:w-auto">Earliest Inscriptions</div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-xl mx-auto mb-8 text-[10px] font-general uppercase tracking-widest">
                <div className="border border-[#C58B52]/20 px-3 py-2 rounded-sm bg-black/40 w-full md:w-auto">Regional Expansion</div>
                <div className="text-[#C58B52]">➔</div>
                <div className="border border-[#C58B52]/20 px-3 py-2 rounded-sm bg-black/40 w-full md:w-auto">Colonial Documentation</div>
                <div className="text-[#C58B52]">➔</div>
                <div className="border border-red-700 bg-red-700/5 text-red-700 px-3 py-2 rounded-sm w-full md:w-auto font-bold">Modern Prohibition</div>
              </div>

              <p className="font-cormorant text-sm text-[#E9E2D4]/70 max-w-md mx-auto leading-relaxed font-light">
                Historical institutions often evolve gradually rather than appearing fully formed at one single moment. Distinguishing between legend, law, and physical records is vital for understanding this history.
              </p>
            </div>
          </Reveal>

          {/* SCHOLAR NOTE */}
          <Reveal className="my-10">
            <div className="border-l-2 border-[#C58B52] bg-[#161615] p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-3 font-bold">
                Scholar Note
              </span>
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-bold mb-3">
                Absence of Evidence
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/75 leading-relaxed font-light mb-4">
                The absence of surviving evidence is not identical to proof that something never existed. Historians therefore distinguish between these distinct stages:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center text-xs font-general uppercase tracking-wider text-[#C58B52] select-none">
                <div className="border border-[#C58B52]/20 p-3 rounded-sm bg-black/20">No Surviving Evidence</div>
                <div className="border border-[#C58B52]/20 p-3 rounded-sm bg-black/20">Earliest Available Evidence</div>
                <div className="border border-[#C58B52]/20 p-3 rounded-sm bg-black/20">Well-Documented Practice</div>
              </div>
            </div>
          </Reveal>

          {/* COMMON MISCONCEPTIONS */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Misconceptions Review
            </span>
            <div className="space-y-4">
              {[
                {
                  claim: 'Sati existed unchanged since the Vedic age.',
                  status: 'Evidence does not currently support this.',
                  expl: 'Surviving archaeological and inscriptional evidence appears only in the early 6th century CE, indicating a post-Vedic development.'
                },
                {
                  claim: 'The British invented the practice.',
                  status: 'Evidence does not support this.',
                  expl: 'Inscriptional evidence and medieval accounts prove that the custom predates British rule in the subcontinent by many centuries.'
                },
                {
                  claim: 'Sati was practiced equally across all of India.',
                  status: 'Oversimplified.',
                  expl: 'Archaeological monuments and local records show strong regional variation, with large parts of India showing little to no evidence of the practice.'
                }
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-[#161615]/40 p-5 rounded-sm">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-general text-[7px] text-[#C58B52] uppercase block tracking-widest">Claim Statement</span>
                    <span className="font-general text-[7.5px] text-[#E05A47] uppercase tracking-wider font-bold">Status: {item.status}</span>
                  </div>
                  <h4 className="font-instrument text-lg text-[#E9E2D4] font-semibold mb-2">
                    "{item.claim}"
                  </h4>
                  <p className="font-cormorant text-xs text-[#E9E2D4]/60 leading-normal font-light">
                    {item.expl}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* MYTH VS HISTORY */}
          <Reveal className="my-16">
            <div className="border border-[#C58B52]/20 bg-[#161615]/60 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Myth vs. History
              </span>
              <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block">Claim Statement</span>
                <span className="font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border border-red-700 bg-red-700/5 text-red-700 font-bold">
                  🔴 Not Supported
                </span>
              </div>
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-semibold mb-4">
                "Sati remained exactly the same throughout Indian history."
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/70 leading-relaxed font-light">
                Available physical and written evidence demonstrates clear chronological and regional evolution rather than one static, unchanging institution.
              </p>
            </div>
          </Reveal>

          {/* KEY OBSERVATIONS */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Key Observations
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Historical evidence of the practice develops gradually over time.',
                'The earliest widely accepted inscriptional evidence is post-Vedic (510 CE).',
                'Regional variation in occurrence was highly significant across India.',
                'Archaeology and inscriptions complement and sometimes challenge literary sources.',
                'Historical practice evolved across centuries based on political and economic conditions.'
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/10 bg-[#161615]/30 p-5 rounded-sm flex items-start gap-2.5">
                  <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#C58B52] shrink-0 mt-1.5" />
                  <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-normal font-light">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* THINK ABOUT IT */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-3 font-bold">
              Think About It
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#E9E2D4]/80 leading-relaxed">
              "Can a historical institution spanning more than a thousand years be understood without examining when, where and how it actually developed?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/20 mx-auto mt-6" />
          </Reveal>

          {/* TRANSITION & NEXT SECTION CTA */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/75 leading-relaxed mb-6">
              History tells us when the practice became visible. The next question is perhaps the most important historical question of all: Why did Sati become more common in some regions and periods than others?
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#C58B52] font-semibold">
              Why Did Sati Spread?
            </h4>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION VI: WHY DID SATI SPREAD?
        ══════════════════════════════════════════════ */}
        <section id="section-why-spread" className="py-16 border-b border-[#C58B52]/10">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2 font-bold">
              SECTION VI <BulletDot /> CAUSAL ANALYSIS
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#E9E2D4] mb-4">
              Why Did Sati Spread?
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              If the earliest Vedic texts do not clearly command Sati, why did the practice later become more visible?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/80 leading-relaxed font-light mb-8">
              Historical practices rarely emerge because of a single cause. Modern historians generally explain the spread of Sati through multiple interacting social, legal, political and economic factors. No single explanation accounts for every region or every historical period. This investigation examines the major scholarly theories individually.
            </p>
          </Reveal>

          {/* EDITORIAL NOTE */}
          <Reveal className="my-6">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-2 font-bold">
                Analytical Framework
              </span>
              <h4 className="font-instrument text-lg text-[#E9E2D4] font-bold mb-2">
                One Cause Is Not Enough
              </h4>
              <p className="font-cormorant text-sm text-[#E9E2D4]/70 leading-relaxed font-light">
                The spread of Sati cannot be explained by one verse, one king, or one event. Instead, historians study legal developments, property rights, social expectations, regional customs, warfare, and changing religious literature together. Each factor is examined separately below.
              </p>
            </div>
          </Reveal>

          {/* SCHOLARLY MODELS */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Scholarly Explanatory Models
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Property and Inheritance',
                  subtitle: 'Economic Incentives & Legal Systems',
                  summary: 'In Bengal, the Dayabhaga system of law gave widows the right to inherit their husband\'s property in the absence of male heirs. Historians note that this economic incentive may have motivated relatives to coerce widows into Sati to prevent the partition of family property. While statistics show a strong correlation between property rights and Sati in early 19th-century Bengal, historians distinguish this correlation from direct, universal causation across other regions.'
                },
                {
                  title: 'Social Prestige and Family Honour',
                  subtitle: 'Cultural Status & Memorial Shrines',
                  summary: 'In certain regional communities, a widow who performed Sati was commemorated as a figure of ultimate devotion and purity. Her act was believed to cleanse ancestral sins and bring divine blessings to both families. This elevated the family\'s social prestige, resulting in Sati stones and shrines that became focal points of local worship. The degree to which these social incentives influenced families varied significantly by region and caste.'
                },
                {
                  title: 'Warrior Culture',
                  subtitle: 'Military Codes & Political Instability',
                  summary: 'Among Rajput clans and other warrior groups, Sati was closely tied to courtly codes of honor and loyalty. In periods of intense conflict, self-immolation represented the ultimate refusal of capture, enslavement, or political submission. Historians emphasize that this elite warrior household tradition represents a specific cultural context distinct from ordinary agrarian village society, and should not be merged with Jauhar (mass immolation during active military siege to prevent capture).'
                },
                {
                  title: 'Religious Merit',
                  subtitle: 'Later Commentaries & Puranic Eulogies',
                  summary: 'Later medieval legal digests (Smṛti nibandhas) and regional Purāṇic verses began promising massive spiritual rewards, such as millions of years of heavenly union for the widow and her husband. However, textual scholars clarify that these passages represent specific regional, late interpretive traditions rather than a single, ancient, or unanimous Hindu theological doctrine.'
                },
                {
                  title: 'Changing Legal Traditions',
                  subtitle: 'Evolution of Commentaries',
                  summary: 'The Dharmashāstra tradition evolved gradually over more than a millennium. Different legal commentators in different centuries responded to local conditions by modifying the rules of inheritance and ascetic widowhood. As the texts show, legal opinion shifted from the early silence of the Dharmasūtras to the outright opposition of Medhātithi, and later to the conditional permission of Vijñāneśvara, reflecting dynamic internal debate.'
                },
                {
                  title: 'Regional Customs',
                  subtitle: 'Customary Law vs. Sanskrit Texts',
                  summary: 'Indian history is marked by deep regional variation. Customary laws (ācāra) often held greater practical authority than written Sanskrit codes. Consequently, Sati remained completely absent or extremely rare in many large regions (such as Kashmir, Kerala, or Maharashtra), while recording higher frequencies in specific pockets, demonstrating that regional custom was the primary determinant.'
                }
              ].map((model, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-[#161615] p-5 rounded-sm flex flex-col justify-between">
                  <div>
                    <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-widest mb-1 font-bold">Model 0{idx + 1}</span>
                    <h4 className="font-instrument text-lg text-[#E9E2D4] font-bold mb-1">{model.title}</h4>
                    <p className="font-instrument italic text-xs text-[#C58B52] mb-3">{model.subtitle}</p>
                    
                    <AnimatePresence>
                      {expandedScholarlyCard === idx && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-relaxed font-light mt-3 border-t border-[#C58B52]/10 pt-3"
                        >
                          {model.summary}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <button
                    onClick={() => setExpandedScholarlyCard(expandedScholarlyCard === idx ? null : idx)}
                    className="w-full bg-[#C58B52]/5 hover:bg-[#C58B52]/10 text-[#C58B52] mt-4 py-1.5 px-3 border border-[#C58B52]/15 text-[8px] font-general uppercase tracking-widest focus:outline-none transition-colors rounded-sm font-bold"
                  >
                    {expandedScholarlyCard === idx ? 'Collapse Model Analysis' : 'Expand Model Analysis'}
                  </button>
                </div>
              ))}
            </div>
          </Reveal>

          {/* INTERACTIVE COMPARISON TABLE */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Interactive Factor Evaluation
            </span>
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm">
              <h4 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-6 text-center">
                Comparison of Historical Influences
              </h4>
              <div className="border border-[#C58B52]/15 rounded-sm overflow-hidden select-none">
                {/* Headers */}
                <div className="grid grid-cols-3 bg-[#1d1d1c] p-4 text-center font-general text-[8px] uppercase tracking-wider text-[#C58B52] font-bold">
                  <div>Historical Factor</div>
                  <div>Supporting Evidence</div>
                  <div>Evidence Strength</div>
                </div>

                {/* Rows */}
                {[
                  {
                    rowId: 'Property',
                    title: 'Property & Inheritance',
                    evidence: 'Statistical peaks in Dayabhaga-governed Bengal.',
                    strength: 'Strong in late 18th/early 19th century Bengal; weak/absent elsewhere.',
                    debate: 'Whether property rights were the primary cause or a secondary trigger utilized by families during economic distress.'
                  },
                  {
                    rowId: 'Warrior',
                    title: 'Warrior Culture',
                    evidence: 'Royal monuments and clan chronicles in Rajasthan.',
                    strength: 'Highly documented among ruling elites and warrior classes.',
                    debate: 'How far the warrior ideal was voluntarily embraced by women versus enforced as a tool of courtly prestige.'
                  },
                  {
                    rowId: 'Literature',
                    title: 'Religious Literature',
                    evidence: 'Verses in later Smṛti digests and Garuḍa Purāṇa.',
                    strength: 'Well-attested textually in later medieval periods.',
                    debate: 'The degree of practical influence these Sanskrit texts had on non-literate regional populations.'
                  },
                  {
                    rowId: 'Tradition',
                    title: 'Regional Tradition',
                    evidence: 'Sati stones (Masti-kallu) in specific pockets of Karnataka/Central India.',
                    strength: 'Solid archaeological and localized inscriptional backing.',
                    debate: 'Why certain districts accumulated hundreds of stones while neighboring areas with identical religions had none.'
                  },
                  {
                    rowId: 'Instability',
                    title: 'Political Instability',
                    evidence: 'Peaks in Sati occurrences during military invasions and transition states.',
                    strength: 'Moderately supported by regional chronicles.',
                    debate: 'Whether Sati was a defensive response to war or a product of internal courtly consolidation.'
                  },
                  {
                    rowId: 'Prestige',
                    title: 'Social Prestige',
                    evidence: 'Epigraphical records of families claiming elevated status after a Sati event.',
                    strength: 'Strong in local epigraphy and clan genealogies.',
                    debate: 'Evaluating the relative roles of family pride versus coercion by the wider community.'
                  }
                ].map((row, ri) => {
                  const isExpanded = expandedFactorRow === row.rowId;
                  return (
                    <div key={ri} className="border-b border-[#C58B52]/15 last:border-none">
                      <button
                        onClick={() => setExpandedFactorRow(isExpanded ? null : row.rowId)}
                        className="w-full bg-[#161615] hover:bg-[#1a1a19] p-4 text-left flex justify-between items-center transition-colors focus:outline-none"
                      >
                        <span className="font-instrument text-xs font-semibold text-[#E9E2D4]">{row.title}</span>
                        <span className="font-cormorant text-xs text-[#E9E2D4]/70">{row.evidence}</span>
                        <span className="font-general text-[7px] text-[#C58B52]">
                          {isExpanded ? '[ COLLAPSE ]' : '[ VIEW DEBATE ]'}
                        </span>
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: EASE_EXPO }}
                            className="overflow-hidden bg-black/40 border-t border-[#C58B52]/10"
                          >
                            <div className="grid grid-cols-3 gap-4 p-4 font-cormorant text-xs md:text-sm text-[#E9E2D4]/75 font-light leading-relaxed">
                              <div>
                                <strong className="text-[#C58B52] block mb-1">Evidence Summary:</strong>
                                {row.evidence}
                              </div>
                              <div className="border-l border-[#C58B52]/10 pl-4 pr-2">
                                <strong className="text-[#C58B52] block mb-1">Evidence Strength:</strong>
                                {row.strength}
                              </div>
                              <div className="border-l border-[#C58B52]/10 pl-4">
                                <strong className="text-[#C58B52] block mb-1">Areas of Debate:</strong>
                                {row.debate}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* SCHOLAR PERSPECTIVES */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Scholarly Perspectives
            </span>
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm">
              <h4 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-6 text-center">
                Modern Historiography Stance
              </h4>
              
              <div className="flex border-b border-[#C58B52]/15 overflow-x-auto text-[9px] font-general uppercase tracking-wider select-none mb-6">
                {['Agreement', 'Competing Interpretations', 'Questions Debated'].map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScholarPerspTab(idx)}
                    className={`flex-1 py-3 px-4 text-center border-r border-[#C58B52]/15 last:border-none focus:outline-none transition-colors duration-300 ${
                      activeScholarPerspTab === idx ? 'bg-[#C58B52]/10 text-[#C58B52] font-bold' : 'text-[#E9E2D4]/50 hover:text-[#E9E2D4]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="min-h-[120px] bg-black/20 p-5 rounded-sm font-cormorant text-sm leading-relaxed text-[#E9E2D4]/85 font-light">
                <AnimatePresence mode="wait">
                  {activeScholarPerspTab === 0 && (
                    <motion.div
                      key="agr"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-2 font-semibold">Broad Scholarly Agreement</h5>
                      <p>
                        Modern historians agree that Sati cannot be explained by a single cause. There is broad consensus that the practice was highly concentrated regionally, variable across castes, and that its occurrence in the late 18th and early 19th centuries was influenced by property inheritance systems and colonial administrative changes.
                      </p>
                    </motion.div>
                  )}
                  {activeScholarPerspTab === 1 && (
                    <motion.div
                      key="comp"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-2 font-semibold">Competing Interpretations</h5>
                      <p>
                        Debates continue between scholars who prioritize material/economic factors (such as property inheritance in Bengal) and those who emphasize cultural/ideological factors (such as the internalization of patriarchal ideals of wifely devotion). Most scholars recognize both elements but weigh their relative importance differently.
                      </p>
                    </motion.div>
                  )}
                  {activeScholarPerspTab === 2 && (
                    <motion.div
                      key="qst"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h5 className="font-instrument text-base text-[#C58B52] mb-2 font-semibold">Questions Still Debated</h5>
                      <p>
                        Key questions remain under active study, including: How common was the practice among non-elite social groups prior to the medieval period? To what extent did the transition to British rule inadvertently alter local custom reporting? And how did regional oral traditions differ from the written Sanskrit commentaries?
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="border-t border-[#C58B52]/10 mt-6 pt-4 text-center">
                <p className="font-cormorant italic text-xs text-[#E9E2D4]/50 max-w-xl mx-auto">
                  By refusing to simplify the historiography, we allow readers to evaluate the complex socio-economic realities of the past.
                </p>
              </div>
            </div>
          </Reveal>

          {/* EDITORIAL OBSERVATION */}
          <Reveal className="my-10">
            <div className="border-l-2 border-[#C58B52] bg-[#161615] p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-3 font-bold">
                Editorial Observation
              </span>
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-bold mb-3">
                Historical Institutions Are Usually Multi-Causal
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/75 leading-relaxed font-light">
                Modern historians rarely explain complex social institutions through a single cause. The available evidence suggests that Sati developed through multiple interacting influences rather than one universal explanation.
              </p>
            </div>
          </Reveal>

          {/* COMMON MISCONCEPTIONS */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Misconceptions Review
            </span>
            <div className="space-y-4">
              {[
                {
                  claim: 'Sati spread because of only one religious command.',
                  status: 'Oversimplified.',
                  expl: 'Textual evidence shows multiple legal and Purāṇic traditions that disagreed, meaning the spread cannot be attributed to a single command.'
                },
                {
                  claim: 'Sati spread only because of economics.',
                  status: 'Oversimplified.',
                  expl: 'While property customs in Bengal played a major role, other factors like warrior culture and social prestige dominated in western and southern India.'
                },
                {
                  claim: 'Sati spread only because of warfare.',
                  status: 'Oversimplified.',
                  expl: 'Warfare influenced Rajput royal practices, but non-combat regions with different inheritance patterns require different explanations.'
                },
                {
                  claim: 'One explanation fits every region.',
                  status: 'Not Supported.',
                  expl: 'Historiographical research proves that Sati was regionally diverse and driven by varying social and economic configurations.'
                }
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-[#161615]/40 p-5 rounded-sm">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-general text-[7px] text-[#C58B52] uppercase block tracking-widest">Claim Statement</span>
                    <span className="font-general text-[7.5px] text-[#E05A47] uppercase tracking-wider font-bold">Status: {item.status}</span>
                  </div>
                  <h4 className="font-instrument text-lg text-[#E9E2D4] font-semibold mb-2">
                    "{item.claim}"
                  </h4>
                  <p className="font-cormorant text-xs text-[#E9E2D4]/60 leading-normal font-light">
                    {item.expl}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* MYTH VS EVIDENCE */}
          <Reveal className="my-16">
            <div className="border border-[#C58B52]/20 bg-[#161615]/60 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Myth vs. Evidence
              </span>
              <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest block">Claim Statement</span>
                <span className="font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border border-red-700 bg-red-700/5 text-red-700 font-bold">
                  🔴 Not Supported
                </span>
              </div>
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-semibold mb-4">
                "There was one single reason why Sati spread."
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/70 leading-relaxed font-light">
                The historical evidence indicates a complex interaction of legal, social, political, economic and regional factors rather than one simplistic cause.
              </p>
            </div>
          </Reveal>

          {/* KEY OBSERVATIONS */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Key Observations
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Multiple historical factors interacted to influence the custom.',
                'Regional variation remained highly significant across kingdoms.',
                'Legal commentaries and regional literature evolved over time.',
                'Property and inheritance laws may have influenced cases in certain regions.',
                'Warrior culture explains the practice only within specific elite contexts.',
                'Historians continue to debate the relative importance of each causal factor.'
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/10 bg-[#161615]/30 p-5 rounded-sm flex items-start gap-2.5">
                  <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#C58B52] shrink-0 mt-1.5" />
                  <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-normal font-light">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* THINK ABOUT IT */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-3 font-bold">
              Think About It
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#E9E2D4]/80 leading-relaxed">
              "Can a historical institution that existed across many centuries and different kingdoms really be explained by only one cause?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/20 mx-auto mt-6" />
          </Reveal>

          {/* TRANSITION & NEXT SECTION CTA */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/75 leading-relaxed mb-6">
              Historical patterns explain how the practice evolved. Individual stories, however, often shape public memory far more than historical statistics. The next investigation examines the historical and scriptural figures most frequently cited in discussions about Sati.
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#C58B52] font-semibold">
              Case Studies
            </h4>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION VII: CASE STUDIES
        ══════════════════════════════════════════════ */}
        <section id="section-case-studies" className="py-16 border-b border-[#C58B52]/10">

          {/* HEADER */}
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2 font-bold">
              SECTION VII <BulletDot /> CASE STUDIES
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#E9E2D4] mb-4">
              Case Studies
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              What do the famous stories actually tell us?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/80 leading-relaxed font-light mb-4">
              For many readers, understanding Sati begins not with legal texts or inscriptions, but with famous stories. Some narratives are drawn from epics. Others come from medieval history. Some have become symbols of sacrifice, while others remain subjects of historical debate. Each example must therefore be investigated independently.
            </p>
            <div className="flex flex-wrap gap-3 mt-4 mb-8 font-general text-[7.5px] uppercase tracking-widest">
              {['Literary Narrative', 'Historical Record', 'Religious Prescription', 'Social Custom', 'Modern Interpretation'].map((tag, i) => (
                <span key={i} className="border border-[#C58B52]/25 text-[#C58B52]/70 px-3 py-1 rounded-sm">{tag}</span>
              ))}
            </div>
          </Reveal>

          {/* ── CASE 1: MĀDRĪ ─────────────────────────────────────────── */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/20 bg-[#161615] rounded-sm overflow-hidden">
              <div className="bg-[#1a1a18] px-6 py-4 flex justify-between items-baseline border-b border-[#C58B52]/10">
                <div>
                  <span className="font-general text-[7px] text-[#C58B52] uppercase tracking-widest font-bold block mb-0.5">Case Study 01 <BulletDot /> Epic</span>
                  <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold">Mādrī</h3>
                </div>
                <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest">Source: Mahābhārata</span>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-[#C58B52]/10 overflow-x-auto select-none">
                {['Narrative', 'Historical Context', 'Scholarly Interpretation', 'Why It Matters'].map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMadriTab(idx)}
                    className={`flex-1 min-w-[100px] py-3 px-4 text-center font-general text-[8px] uppercase tracking-wider border-r border-[#C58B52]/10 last:border-none focus:outline-none transition-colors duration-300 ${
                      activeMadriTab === idx ? 'bg-[#C58B52]/10 text-[#C58B52] font-bold' : 'text-[#E9E2D4]/40 hover:text-[#E9E2D4]/80'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6 min-h-[180px] font-cormorant text-sm md:text-base text-[#E9E2D4]/80 leading-relaxed font-light">
                <AnimatePresence mode="wait">
                  {activeMadriTab === 0 && (
                    <motion.div key="t0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                      <p>
                        In the Mahābhārata, King Pāṇḍu dies after touching his wife Mādrī despite a curse prohibiting physical contact. Overcome with grief and guilt—believing herself responsible for Pāṇḍu's death through her own desire—Mādrī chooses to die on his funeral pyre, asking Kuntī to raise the five Pāṇḍava children in her place. The text frames this not as a religious obligation but as Mādrī's personal, grief-stricken choice driven by guilt and loyalty.
                      </p>
                    </motion.div>
                  )}
                  {activeMadriTab === 1 && (
                    <motion.div key="t1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                      <p>
                        The Mahābhārata is a literary epic composed and revised across several centuries, not a legal code. Scholars date its core narrative to approximately the 4th century BCE, while recognizing layers of later additions. The episode of Mādrī reflects a narrative moment of personal sacrifice rather than a systematic ritual institution. Inscriptional and archaeological evidence does not confirm that Sati was practiced as a widespread custom at the time the core narrative is believed to have been composed.
                      </p>
                    </motion.div>
                  )}
                  {activeMadriTab === 2 && (
                    <motion.div key="t2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                      <p>
                        Most historians treat Mādrī's act as a literary episode rather than prescriptive evidence of a universal legal institution. The Mahābhārata simultaneously depicts Kuntī remaining alive as a widow who raises her children, which the same text presents without condemnation. This demonstrates that the epic does not prescribe widow immolation as a duty. Scholars like P. V. Kane noted that narratives of individual acts cannot be extrapolated into universal religious commands.
                      </p>
                    </motion.div>
                  )}
                  {activeMadriTab === 3 && (
                    <motion.div key="t3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                      <p>
                        The Mādrī episode is important precisely because it coexists with Kuntī's alternative choice in the same text. If the Mahābhārata endorsed Sati as a universal religious obligation, Kuntī's decision to live would be presented as morally deficient. The fact that both responses appear without opposing condemnation suggests the epic presents widow immolation as a personal, situational act rather than a commanded universal practice.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="px-6 pb-4 border-t border-[#C58B52]/10 pt-3">
                <p className="font-general text-[7px] uppercase tracking-widest text-[#C58B52]/50">
                  Classification: <span className="text-[#C58B52]">Literary Narrative <BulletDot /> Personal Decision <BulletDot /> Not a Universal Command</span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── CASE 2: KUNTĪ ─────────────────────────────────────────── */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/20 bg-[#161615] rounded-sm overflow-hidden">
              <div className="bg-[#1a1a18] px-6 py-4 border-b border-[#C58B52]/10">
                <span className="font-general text-[7px] text-[#C58B52] uppercase tracking-widest font-bold block mb-0.5">Case Study 02 <BulletDot /> Epic</span>
                <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold">Kuntī</h3>
                <p className="font-instrument italic text-sm text-[#C58B52] mt-1">The Widow Who Did Not Commit Sati</p>
              </div>
              <div className="p-6 font-cormorant text-sm md:text-base text-[#E9E2D4]/80 leading-relaxed font-light">
                <p className="mb-4">
                  After Pāṇḍu's death, Kuntī chose to remain alive. She continued to live through the Pāṇḍavas' forest exile, their period of anonymity, the Kurukṣetra War, and into old age. The Mahābhārata presents her life as one of devotion, resilience and maternal sacrifice—without any suggestion that her choice to live was improper, shameful or religiously deficient.
                </p>
                <p>
                  Kuntī's story is one of the most important counter-examples in the entire epic tradition. It proves that the Mahābhārata itself does not prescribe widow immolation as an obligation. If the text required widows to die on the funeral pyre, Kuntī's long widowhood would require justification or condemnation. It receives neither.
                </p>
              </div>

              {/* Comparison */}
              <div className="mx-6 mb-6 border border-[#C58B52]/15 rounded-sm overflow-hidden">
                <div className="grid grid-cols-3 bg-[#1d1d1c] p-3 font-general text-[7.5px] uppercase tracking-wider text-[#C58B52]/70 text-center font-bold">
                  <div>Aspect</div>
                  <div>Mādrī</div>
                  <div>Kuntī</div>
                </div>
                {[
                  ['Choice Made', 'Died on funeral pyre', 'Remained alive as widow'],
                  ['Reason Given in Text', 'Guilt, grief, personal devotion', 'Maternal duty to the Pāṇḍavas'],
                  ['Textual Framing', 'Personal, situational act', 'Long, honoured widowhood'],
                  ['Presented as Obligation?', 'No explicit command', 'No condemnation for living'],
                  ['Historical Implication', 'One narrative example', 'Direct counter-example to universal command'],
                ].map(([aspect, madri, kunti], ri) => (
                  <div key={ri} className="grid grid-cols-3 border-t border-[#C58B52]/10 text-center">
                    <div className="p-3 font-general text-[7.5px] text-[#E9E2D4]/50 uppercase tracking-wider bg-[#1a1a18] flex items-center justify-center">{aspect}</div>
                    <div className="p-3 font-cormorant text-xs text-[#E9E2D4]/75 flex items-center justify-center border-l border-[#C58B52]/10">{madri}</div>
                    <div className="p-3 font-cormorant text-xs text-[#E9E2D4]/75 flex items-center justify-center border-l border-[#C58B52]/10">{kunti}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── CASE 3: GĀNDHĀRĪ ───────────────────────────────────────── */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/20 bg-[#161615] rounded-sm p-6">
              <div className="mb-4">
                <span className="font-general text-[7px] text-[#C58B52] uppercase tracking-widest font-bold block mb-0.5">Case Study 03 <BulletDot /> Epic</span>
                <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold">Gāndhārī</h3>
              </div>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/80 leading-relaxed font-light mb-4">
                After the Kurukṣetra War, Gāndhārī—wife of the blind king Dhṛtarāṣṭra—did not immediately immolate herself. She lived on for years alongside her husband and Kuntī, retreating to the forest for an extended period of ascetic practice. Her death, along with Dhṛtarāṣṭra and Kuntī, is described in the Mahābhārata as occurring in a forest fire during their ascetic retreat—not as a ritual act of widow immolation.
              </p>
              <div className="border border-[#C58B52]/10 bg-black/30 p-4 rounded-sm">
                <span className="font-general text-[7px] uppercase tracking-widest text-[#C58B52] block mb-2 font-bold">Critical Distinction</span>
                <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/75 leading-relaxed font-light">
                  Gāndhārī's death in an accidental forest fire during voluntary ascetic retirement is fundamentally different from the ritual of widow immolation on a husband's funeral pyre. Categorizing Gāndhārī's death as Sati represents a significant historiographical error. The Mahābhārata itself does not frame it as such.
                </p>
              </div>
              <p className="font-general text-[7px] uppercase tracking-widest text-[#C58B52]/50 mt-4">
                Classification: <span className="text-[#C58B52] flex items-center gap-1">Ascetic Death <BulletDot /> Not Sati <BulletDot /> Different Institution</span>
              </p>
            </div>
          </Reveal>

          {/* ── CASE 4: MANDODARĪ ─────────────────────────────────────── */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/20 bg-[#161615] rounded-sm p-6">
              <div className="mb-4">
                <span className="font-general text-[7px] text-[#C58B52] uppercase tracking-widest font-bold block mb-0.5">Case Study 04 <BulletDot /> Epic</span>
                <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold">Mandodarī</h3>
              </div>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/80 leading-relaxed font-light mb-4">
                Mandodarī was the principal wife of Rāvaṇa. After his death in the Rāmāyaṇa, she mourns intensely and delivers one of the epic's most philosophically significant laments. However, the Vālmīki Rāmāyaṇa does not narrate Mandodarī performing widow immolation. She survives Rāvaṇa's death. In some later textual traditions, she is said to have subsequently married Vibhīṣaṇa at Rāma's instruction—which would have been impossible had she committed Sati.
              </p>
              <div className="border border-[#C58B52]/10 bg-black/30 p-4 rounded-sm">
                <span className="font-general text-[7px] uppercase tracking-widest text-[#C58B52] block mb-2 font-bold">Investigative Finding</span>
                <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/75 leading-relaxed font-light">
                  The Vālmīki Rāmāyaṇa does not record Mandodarī committing Sati. Her narrative is one of grief, widowhood and survival—not immolation.
                </p>
              </div>
              <p className="font-general text-[7px] uppercase tracking-widest text-[#C58B52]/50 mt-4">
                Classification: <span className="text-[#C58B52] flex items-center gap-1">No Sati in Primary Source <BulletDot /> Survival Narrative</span>
              </p>
            </div>
          </Reveal>

          {/* ── CASE 5: TĀRĀ ──────────────────────────────────────────── */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/20 bg-[#161615] rounded-sm p-6">
              <div className="mb-4">
                <span className="font-general text-[7px] text-[#C58B52] uppercase tracking-widest font-bold block mb-0.5">Case Study 05 <BulletDot /> Epic</span>
                <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold">Tārā</h3>
              </div>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/80 leading-relaxed font-light mb-4">
                Tārā was the wife of Vāli, the Kiṣkindhā king slain by Rāma. After Vāli's death, Tārā mourns at length in the Vālmīki Rāmāyaṇa with some of its most moving verses. She does not commit Sati. The Rāmāyaṇa subsequently narrates that she later becomes the wife of Sugrīva. As with Mandodarī, her survival and remarriage—recorded in the primary text—directly contradict any claim that the epic prescribed widow immolation as an obligation for queens.
              </p>
              <div className="border border-[#C58B52]/10 bg-black/30 p-4 rounded-sm">
                <span className="font-general text-[7px] uppercase tracking-widest text-[#C58B52] block mb-2 font-bold">Investigative Finding</span>
                <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/75 leading-relaxed font-light">
                  Tārā's narrative in the primary Rāmāyaṇa does not include Sati. Her survival and later remarriage within the same text is itself evidence that the epic tradition did not treat widow immolation as a universal law.
                </p>
              </div>
              <p className="font-general text-[7px] uppercase tracking-widest text-[#C58B52]/50 mt-4">
                Classification: <span className="text-[#C58B52]">No Sati in Primary Source <BulletDot /> Survival and Remarriage Narrative</span>
              </p>
            </div>
          </Reveal>

          {/* ── CASE 6: RAJPUT SATI ────────────────────────────────────── */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/20 bg-[#161615] rounded-sm p-6">
              <div className="mb-4">
                <span className="font-general text-[7px] text-[#C58B52] uppercase tracking-widest font-bold block mb-0.5">Case Study 06 <BulletDot /> Historical</span>
                <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold">Rajput Sati</h3>
              </div>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/80 leading-relaxed font-light mb-5">
                The Rajput warrior clans of northwestern India produced some of the most historically documented cases of widow immolation, concentrated primarily in royal and elite military households between the 7th and 18th centuries CE. Sati stones and memorial shrines (<em>chhatris</em>) erected for royal widows became focal points of dynastic identity and ancestral veneration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {[
                  { label: 'Historical Evidence', text: 'Inscriptional Sati stones (particularly in Rajasthan), court chronicles, and accounts from medieval travellers document elite cases.' },
                  { label: 'Political Context', text: 'Closely tied to Rajput codes of martial honour. The act conferred prestige on the family and was commemorated as a dynastic event rather than a universal religious ceremony.' },
                  { label: 'Memorial Traditions', text: 'Sati stones (Devīsthan or chhatri markers) became shrines where later generations performed ancestor veneration, giving the practice an ongoing ritual afterlife.' },
                  { label: 'Critical Clarification', text: 'Rajput Sati is a historically documented regional elite practice. It is not an instruction found in the Vedas, nor a commandment applicable to all Hindus across all periods.' },
                ].map((item, i) => (
                  <div key={i} className="border border-[#C58B52]/10 bg-black/20 p-4 rounded-sm">
                    <strong className="font-general text-[7.5px] text-[#C58B52] uppercase tracking-widest block mb-2">{item.label}</strong>
                    <p className="font-cormorant text-xs text-[#E9E2D4]/70 leading-relaxed font-light">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="font-general text-[7px] uppercase tracking-widest text-[#C58B52]/50 mt-2">
                Classification: <span className="text-[#C58B52] flex items-center gap-1">Historical Practice <BulletDot /> Elite & Regional <BulletDot /> Not a Vedic Command</span>
              </p>
            </div>
          </Reveal>

          {/* ── CASE 7: JAUHAR ─────────────────────────────────────────── */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/20 bg-[#161615] rounded-sm overflow-hidden">
              <div className="bg-[#1a1a18] px-6 py-5 border-b border-[#C58B52]/10">
                <span className="font-general text-[7px] text-[#C58B52] uppercase tracking-widest font-bold block mb-0.5">Case Study 07 <BulletDot /> Historical</span>
                <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold">Jauhar</h3>
                <p className="font-instrument italic text-sm text-[#C58B52] mt-1">A Distinct Historical Institution</p>
              </div>
              <div className="p-6">
                <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/80 leading-relaxed font-light mb-5">
                  Jauhar refers to the collective self-immolation of women—primarily in Rajput royal households—during or immediately before a military siege, when defeat and capture by an opposing army were imminent. The most historically documented instances occurred during Mughal-era military campaigns. Jauhar and Sati are often conflated in popular discussion, but they are historically, socially and ritually distinct institutions.
                </p>

                {/* Comparison Table */}
                <div className="border border-[#C58B52]/15 rounded-sm overflow-hidden mb-4">
                  <div className="grid grid-cols-3 bg-[#1d1d1c] p-3 font-general text-[7.5px] uppercase tracking-wider text-[#C58B52]/70 text-center font-bold">
                    <div>Dimension</div>
                    <div>Jauhar</div>
                    <div>Sati</div>
                  </div>
                  {[
                    ['When', 'During or immediately before an active military siege', 'Upon a husband\'s death, in peacetime or wartime'],
                    ['Who', 'Women of royal households en masse', 'Individual widow on husband\'s funeral pyre'],
                    ['Context', 'Military defeat; prevention of capture and enslavement', 'Grief, devotion, family pressure, or social expectation'],
                    ['Purpose', 'Collective prevention of capture; preservation of honour', 'Personal act of loyalty or sacrifice; religious merit'],
                    ['Historical Setting', 'Rajput fort sieges; Mughal-era warfare', 'Royal, elite and in some regions ordinary households'],
                    ['Religious Meaning', 'Primarily a martial-political act', 'Sometimes framed in later texts as spiritually meritorious'],
                  ].map(([dim, jauhar, sati], ri) => (
                    <div key={ri} className="grid grid-cols-3 border-t border-[#C58B52]/10">
                      <div className="p-3 font-general text-[7.5px] text-[#E9E2D4]/50 uppercase tracking-wider bg-[#1a1a18] flex items-center">{dim}</div>
                      <div className="p-3 font-cormorant text-xs text-[#E9E2D4]/75 leading-relaxed border-l border-[#C58B52]/10">{jauhar}</div>
                      <div className="p-3 font-cormorant text-xs text-[#E9E2D4]/75 leading-relaxed border-l border-[#C58B52]/10">{sati}</div>
                    </div>
                  ))}
                </div>
                <p className="font-general text-[7px] uppercase tracking-widest text-[#C58B52]/50">
                  Classification: <span className="text-[#C58B52] flex items-center gap-1">Distinct Institution <BulletDot /> Siege Context <BulletDot /> Not Widow Immolation</span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── CASE 8: RAJA RAM MOHAN ROY ────────────────────────────── */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/20 bg-[#161615] rounded-sm p-6">
              <div className="mb-5">
                <span className="font-general text-[7px] text-[#C58B52] uppercase tracking-widest font-bold block mb-0.5">Case Study 08 <BulletDot /> Reform</span>
                <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold">Raja Ram Mohan Roy</h3>
              </div>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/80 leading-relaxed font-light mb-5">
                Raja Ram Mohan Roy (1772–1833) was among the most prominent Indian reformers who campaigned against the practice of Sati in Bengal during the early 19th century. He employed scriptural arguments from within the Hindu tradition itself, citing texts that prohibited suicide and emphasizing the voluntary ascetic path of widowhood as the higher religious ideal. His arguments drew directly on the Medhātithi tradition of Dharmashāstra opposition.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {[
                  { label: 'Scriptural Strategy', text: 'Roy argued from within Hindu scripture, citing Smṛti passages that described the ascetic widow\'s path as the spiritually superior alternative. He challenged the authority of the texts used to justify Sati.' },
                  { label: 'Key Arguments', text: 'He contended that most Sati cases in Bengal were not voluntary but coerced. He cited legal and moral traditions within Hinduism itself that opposed self-destruction.' },
                  { label: 'Historical Influence', text: 'Roy\'s writings and campaigning built the intellectual and public case that eventually led Governor-General William Bentinck to enact Regulation XVII in 1829.' },
                  { label: 'Scholarly Caveat', text: 'Roy was not the sole reason for the abolition. Internal Indian reformers, legislative pressure, changing colonial administration, and indigenous opposition across multiple regions all contributed.' },
                ].map((item, i) => (
                  <div key={i} className="border border-[#C58B52]/10 bg-black/20 p-4 rounded-sm">
                    <strong className="font-general text-[7.5px] text-[#C58B52] uppercase tracking-widest block mb-2">{item.label}</strong>
                    <p className="font-cormorant text-xs text-[#E9E2D4]/70 leading-relaxed font-light">{item.text}</p>
                  </div>
                ))}
              </div>
              <p className="font-general text-[7px] uppercase tracking-widest text-[#C58B52]/50 mt-2">
                Classification: <span className="text-[#C58B52] flex items-center gap-1">Reform Figure <BulletDot /> Scriptural Argument <BulletDot /> 19th-Century Bengal</span>
              </p>
            </div>
          </Reveal>

          {/* ── CASE 9: THE 1829 ABOLITION ───────────────────────────── */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/20 bg-[#161615] rounded-sm p-6">
              <div className="mb-5">
                <span className="font-general text-[7px] text-[#C58B52] uppercase tracking-widest font-bold block mb-0.5">Case Study 09 <BulletDot /> Legal History</span>
                <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold">The 1829 Abolition</h3>
              </div>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/80 leading-relaxed font-light mb-5">
                On 4 December 1829, Governor-General Lord William Bentinck enacted Regulation XVII under the Bengal Presidency, declaring Sati illegal and punishable as culpable homicide. The legislation followed years of public debate, statistical documentation by the colonial administration, campaigning by Indian reformers, and opposition from orthodox religious groups.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {[
                  { label: 'Regulation XVII (1829)', text: 'Declared all forms of Sati—whether voluntary or involuntary—illegal. Extended beyond Bengal to other presidencies in 1830.' },
                  { label: 'Indian Reform Movement', text: 'Ram Mohan Roy and other reformers submitted petitions and published pamphlets that shaped the public discourse leading to the regulation.' },
                  { label: 'Orthodox Response', text: 'Orthodox Hindu leaders submitted counter-petitions to London arguing the regulation interfered with religious freedom. The Privy Council upheld the abolition.' },
                ].map((item, i) => (
                  <div key={i} className="border border-[#C58B52]/10 bg-black/20 p-4 rounded-sm">
                    <strong className="font-general text-[7.5px] text-[#C58B52] uppercase tracking-widest block mb-2">{item.label}</strong>
                    <p className="font-cormorant text-xs text-[#E9E2D4]/70 leading-relaxed font-light">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="border border-[#C58B52]/10 bg-black/30 p-4 rounded-sm">
                <span className="font-general text-[7px] uppercase tracking-widest text-[#C58B52] block mb-2 font-bold">Modern Scholarship Note</span>
                <p className="font-cormorant text-xs text-[#E9E2D4]/70 leading-relaxed font-light">
                  Historians including Lata Mani have argued that colonial debates around Sati were partly shaped by British administrative interests and that women's voices were often absent from both the orthodox defence and the reformist campaign. The 1829 abolition is therefore understood both as a genuine humanitarian measure and as a complex colonial act with its own political dimensions.
                </p>
              </div>
              <p className="font-general text-[7px] uppercase tracking-widest text-[#C58B52]/50 mt-4">
                Classification: <span className="text-[#C58B52] flex items-center gap-1">Legal History <BulletDot /> Colonial Administration <BulletDot /> Reform Movement</span>
              </p>
            </div>
          </Reveal>

          {/* ── VISUAL CENTREPIECE ─────────────────────────────────────── */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-2 text-center font-bold">
              Visual Summary
            </span>
            <h4 className="font-instrument text-2xl md:text-3xl text-[#E9E2D4] text-center mb-8 font-bold">
              One Word. Many Different Stories.
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: 'Mādrī', tag: 'Narrative', color: '#C58B52' },
                { name: 'Kuntī', tag: 'Alternative Narrative', color: '#7A9E7E' },
                { name: 'Mandodarī', tag: 'No Sati', color: '#7A9E7E' },
                { name: 'Tārā', tag: 'No Sati', color: '#7A9E7E' },
                { name: 'Rajput Sati', tag: 'Historical Practice', color: '#C58B52' },
                { name: 'Jauhar', tag: 'Siege Tradition', color: '#8C7B6E' },
                { name: '1829', tag: 'Legal Abolition', color: '#6E8CA0' },
                { name: 'Gāndhārī', tag: 'Ascetic Death', color: '#8C7B6E' },
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-[#161615]/60 p-5 rounded-sm text-center">
                  <h4 className="font-instrument text-lg text-[#E9E2D4] font-bold mb-2">{item.name}</h4>
                  <span
                    className="font-general text-[7px] uppercase tracking-widest px-2 py-0.5 border rounded-sm font-bold"
                    style={{ color: item.color, borderColor: `${item.color}40`, backgroundColor: `${item.color}0D` }}
                  >
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── EDITORIAL NOTE ─────────────────────────────────────────── */}
          <Reveal className="my-10">
            <div className="border-l-2 border-[#C58B52] bg-[#161615] p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-3 font-bold">
                Editorial Note
              </span>
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-bold mb-3">
                Stories Are Not Universal Laws
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/75 leading-relaxed font-light">
                Individual narratives help us understand how different communities remembered, interpreted and responded to widowhood. However, historians distinguish between literary narrative, historical evidence, legal prescription and religious doctrine. One story cannot define an entire civilization.
              </p>
            </div>
          </Reveal>

          {/* ── COMMON MISCONCEPTIONS ─────────────────────────────────── */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Misconceptions Review
            </span>
            <div className="space-y-4">
              {[
                {
                  claim: 'Every famous widow in Hindu literature performed Sati.',
                  status: 'Not Supported.',
                  expl: 'Kuntī, Mandodarī, Tārā and Gāndhārī—all prominent epic widows—did not commit Sati in the primary texts. Multiple textual responses to widowhood coexist in the same traditions.'
                },
                {
                  claim: 'Jauhar and Sati are exactly the same.',
                  status: 'Not Supported.',
                  expl: 'Jauhar is a collective act of self-immolation during active military siege to prevent capture. Sati is an individual act of widow immolation on a husband\'s funeral pyre. They differ in context, ritual, participants and historical origin.'
                },
                {
                  claim: 'Mādrī proves that Sati was a universal religious law.',
                  status: 'Oversimplified.',
                  expl: 'The Mahābhārata presents Mādrī\'s act as a personal, grief-driven choice. The same text simultaneously presents Kuntī\'s long widowhood without condemnation, which directly contradicts the idea that the epic prescribes widow immolation as a universal command.'
                }
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-[#161615]/40 p-5 rounded-sm">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-general text-[7px] text-[#C58B52] uppercase block tracking-widest">Claim Statement</span>
                    <span className="font-general text-[7.5px] text-[#E05A47] uppercase tracking-wider font-bold">Status: {item.status}</span>
                  </div>
                  <h4 className="font-instrument text-lg text-[#E9E2D4] font-semibold mb-2">"{item.claim}"</h4>
                  <p className="font-cormorant text-xs text-[#E9E2D4]/60 leading-normal font-light">{item.expl}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── KEY OBSERVATIONS ──────────────────────────────────────── */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Key Observations
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Epic narratives present multiple and contrasting responses to widowhood within the same texts.',
                'Historical practice documented in inscriptions differs substantially from literary narrative.',
                'Jauhar and Sati are distinct historical institutions with different contexts, participants, and meanings.',
                'Regional history and local custom shaped the occurrence of Sati far more than any universal scriptural law.',
                'Individual stories—however famous—cannot replace broader inscriptional and historical evidence.',
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/10 bg-[#161615]/30 p-5 rounded-sm flex items-start gap-2.5">
                  <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#C58B52] shrink-0 mt-1.5" />
                  <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-normal font-light">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── THINK ABOUT IT ────────────────────────────────────────── */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-3 font-bold">Think About It</span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#E9E2D4]/80 leading-relaxed">
              "Can one story—or even one famous historical event—represent the beliefs and practices of an entire civilization across thousands of years?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/20 mx-auto mt-6" />
          </Reveal>

          {/* ── TRANSITION ────────────────────────────────────────────── */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/75 leading-relaxed mb-6">
              Stories preserve memory. Historical scholarship evaluates evidence. The final investigation now turns to modern historians, Sanskrit scholars and contemporary academic research.
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#C58B52] font-semibold">Modern Scholarship</h4>
          </Reveal>

        </section>

        {/* ══════════════════════════════════════════════
            SECTION VIII: MODERN SCHOLARSHIP
        ══════════════════════════════════════════════ */}
        <section id="section-modern-scholarship" className="py-16 border-b border-[#C58B52]/10">

          {/* HEADER */}
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-2 font-bold">
              SECTION VIII <BulletDot /> SCHOLARLY REVIEW
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#E9E2D4] mb-4">
              Modern Scholarship
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              What do historians and Sanskrit scholars conclude today?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/80 leading-relaxed font-light mb-8">
              Historical research continues to evolve as new manuscripts, inscriptions and analytical methods become available. Rather than speaking with one voice, modern scholarship often distinguishes between questions that are well established, questions that remain debated and questions for which evidence is still incomplete. This section summarizes that scholarly landscape.
            </p>
          </Reveal>

          {/* EDITORIAL NOTE */}
          <Reveal className="my-6">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-2 font-bold">Editorial Note</span>
              <h4 className="font-instrument text-lg text-[#E9E2D4] font-bold mb-2">How This Section Reads Scholarship</h4>
              <p className="font-cormorant text-sm text-[#E9E2D4]/70 leading-relaxed font-light">
                Academic history is built on evidence rather than certainty. Where historians broadly agree, this investigation says so. Where respected scholars disagree, those disagreements are presented openly. The purpose is not to eliminate complexity but to understand it.
              </p>
            </div>
          </Reveal>

          {/* ── SECTION ONE: BROAD AGREEMENT ──────────────────────────── */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 font-bold">Section One</span>
            <h3 className="font-instrument text-2xl text-[#E9E2D4] mb-6">Areas of Broad Agreement</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'The Vedic Texts Do Not Clearly Prescribe Widow Immolation',
                  evidence: 'Ṛgveda 10.18.7 critical editions overwhelmingly support the reading agre ("first / forward"), not agneh ("of fire"). Verse 10.18.8 explicitly commands the widow to rise and return to the living.',
                  support: 'P. V. Kane (History of Dharmaśāstra), A. A. Macdonell, Michael Witzel, and the critical Pune edition of the Ṛgveda.',
                  why: 'The manuscript consensus, combined with metrical analysis, makes the agre reading the scholarly default. Interpreting this verse as a command to immolate requires the minority textual variant.'
                },
                {
                  title: 'The Practice Developed Gradually After the Vedic Period',
                  evidence: 'The earliest widely accepted physical evidence (Eran inscription, 510 CE) post-dates the Vedic corpus by more than a millennium. Literary references in Epics and early Smṛtis describe the practice inconsistently.',
                  support: 'Julia Leslie (Roles and Rituals for Hindu Women), Lata Mani (Contentious Traditions), David Brick (Dharmaśāstra on Widow Burning).',
                  why: 'The absence of early archaeological evidence and the silence of the oldest Dharmasūtras on Sati as an institution indicate gradual rather than ancient origin.'
                },
                {
                  title: 'The Practice Varied Significantly Across Regions and Periods',
                  evidence: 'British administrative records from 1815–1828 show extreme concentration in Bengal. Karnataka has Masti-kallu memorial stones. Kashmir, Kerala and Maharashtra have very few documented cases.',
                  support: 'Andrea Major (Pious Flames), Anand Yang (Whose Sati?), Romila Thapar (A History of India).',
                  why: 'Regional variation is documented by multiple independent bodies of evidence—inscriptions, legal records and colonial statistics—making it one of the most firmly supported conclusions in the field.'
                },
                {
                  title: 'Later Legal Literature Contains Significant Internal Debate',
                  evidence: 'Medhātithi (9th century) explicitly prohibited widow immolation as forbidden suicide. Vijñāneśvara (11th–12th century) conditionally permitted it only as a voluntary act of extreme devotion. These represent genuinely opposing legal opinions within the Dharmashāstra tradition.',
                  support: 'P. V. Kane, David Brick, Patrick Olivelle.',
                  why: 'Both commentaries survive in manuscript and have been critically edited. Their direct contradiction proves there was no unanimous legal doctrine supporting Sati.'
                },
                {
                  title: 'Jauhar and Sati Are Historically Distinct Institutions',
                  evidence: 'Jauhar is documented in siege contexts as a collective, politically motivated act. Sati is an individual widow immolation on a husband\'s funeral pyre in non-siege conditions.',
                  support: 'Lindsey Harlan (Religion and Rajput Women), Norman Ziegler (Action, Power and Service in Rajasthani Culture).',
                  why: 'The distinction is supported by the different ritual contexts, participants, and motivations described in the historical sources themselves.'
                }
              ].map((card, idx) => {
                const open = expandedAgreeCard === idx;
                return (
                  <div key={idx} className="border border-[#C58B52]/15 bg-[#161615] rounded-sm overflow-hidden">
                    <button
                      onClick={() => setExpandedAgreeCard(open ? null : idx)}
                      className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-[#1a1a18] transition-colors"
                    >
                      <span className="font-instrument text-base text-[#E9E2D4] font-semibold pr-4">{card.title}</span>
                      <span className="font-general text-[7px] text-[#C58B52] shrink-0">{open ? '[ COLLAPSE ]' : '[ EXPAND ]'}</span>
                    </button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE_EXPO }}
                          className="overflow-hidden border-t border-[#C58B52]/10"
                        >
                          <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-black/20 p-4 rounded-sm">
                              <strong className="font-general text-[7.5px] text-[#C58B52] uppercase tracking-widest block mb-2">Evidence</strong>
                              <p className="font-cormorant text-xs text-[#E9E2D4]/75 leading-relaxed font-light">{card.evidence}</p>
                            </div>
                            <div className="bg-black/20 p-4 rounded-sm">
                              <strong className="font-general text-[7.5px] text-[#C58B52] uppercase tracking-widest block mb-2">Supporting Scholarship</strong>
                              <p className="font-cormorant text-xs text-[#E9E2D4]/75 leading-relaxed font-light">{card.support}</p>
                            </div>
                            <div className="bg-black/20 p-4 rounded-sm">
                              <strong className="font-general text-[7.5px] text-[#C58B52] uppercase tracking-widest block mb-2">Why Historians Accept It</strong>
                              <p className="font-cormorant text-xs text-[#E9E2D4]/75 leading-relaxed font-light">{card.why}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* ── SECTION TWO: CONTINUING DEBATES ───────────────────────── */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 font-bold">Section Two</span>
            <h3 className="font-instrument text-2xl text-[#E9E2D4] mb-6">Continuing Debates</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Property Rights vs. Religious Motivation',
                  debate: 'Scholars disagree on whether economic factors (inheritance rights under the Dayabhaga system) or ideological factors (religious merit and patriarchal devotion ideals) were the primary driver of Sati in Bengal.',
                  why: 'Both sets of evidence are real. Bengali Sati cases correlate strongly with Dayabhaga property law, yet women sometimes left written statements citing religious motivation. Neither explanation eliminates the other.'
                },
                {
                  title: 'The Role of Colonial Administration in Shaping Statistics',
                  debate: 'Historians including Lata Mani argue that British administrative interest in classifying and counting Sati cases may have influenced how the practice was documented and debated, making pre-colonial prevalence difficult to assess.',
                  why: 'Colonial census methods were selective, and many historical regions produced no comparable pre-colonial counts. The absence of pre-colonial statistics makes any claim about long-term national trends speculative.'
                },
                {
                  title: 'Dating of Key Textual Developments',
                  debate: 'The precise dates of several important Smṛti nibandha commentaries that discuss Sati remain subjects of scholarly disagreement. Later dates for some texts would significantly affect interpretations of their historical influence.',
                  why: 'Sanskrit legal literature often circulated anonymously or under attributed names, and manuscript colophons are not always reliable indicators of original composition dates.'
                },
                {
                  title: 'Relative Importance of Social, Legal and Political Factors',
                  debate: 'No consensus exists on whether legal commentaries, social prestige norms, or political instability was the single most important driver of the practice across all regions and periods.',
                  why: 'Regional variation itself is the evidence that no single factor dominated everywhere. This is why multi-causal explanations are standard in the field but the precise weightings are still argued.'
                },
                {
                  title: 'Voluntariness and Coercion',
                  debate: 'Historical sources rarely provide direct testimony from widows themselves. Colonial records, reform pamphlets, and orthodox defences each had interests in representing the practice as either freely chosen or coerced.',
                  why: 'Without direct widow testimony, historians work with externally produced sources. Lata Mani\'s research highlights that women\'s voices were largely absent from both the orthodox and reformist debates of the 19th century.'
                }
              ].map((card, idx) => {
                const open = expandedDebateCard === idx;
                return (
                  <div key={idx} className="border border-[#C58B52]/15 bg-[#161615] rounded-sm overflow-hidden">
                    <button
                      onClick={() => setExpandedDebateCard(open ? null : idx)}
                      className="w-full flex justify-between items-center p-5 text-left focus:outline-none hover:bg-[#1a1a18] transition-colors"
                    >
                      <span className="font-instrument text-base text-[#E9E2D4] font-semibold pr-4">{card.title}</span>
                      <span className="font-general text-[7px] text-[#C58B52] shrink-0">{open ? '[ COLLAPSE ]' : '[ EXPAND ]'}</span>
                    </button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: EASE_EXPO }}
                          className="overflow-hidden border-t border-[#C58B52]/10"
                        >
                          <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-black/20 p-4 rounded-sm">
                              <strong className="font-general text-[7.5px] text-[#C58B52] uppercase tracking-widest block mb-2">The Debate</strong>
                              <p className="font-cormorant text-xs text-[#E9E2D4]/75 leading-relaxed font-light">{card.debate}</p>
                            </div>
                            <div className="bg-black/20 p-4 rounded-sm">
                              <strong className="font-general text-[7.5px] text-[#C58B52] uppercase tracking-widest block mb-2">Why It Persists</strong>
                              <p className="font-cormorant text-xs text-[#E9E2D4]/75 leading-relaxed font-light">{card.why}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* ── SECTION THREE: OPEN QUESTIONS ─────────────────────────── */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 font-bold">Section Three</span>
            <h3 className="font-instrument text-2xl text-[#E9E2D4] mb-6">Questions That Remain Open</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { q: 'Exact Origin of the Practice', why: 'No single inscription or text provides an unambiguous first record. Mādrī in the Mahābhārata represents a literary precedent, not a dated historical event.' },
                { q: 'Earliest Undocumented Forms', why: 'The Eran inscription (510 CE) is the earliest widely accepted physical evidence. Earlier cases may have existed without leaving inscriptional records, but this cannot be confirmed.' },
                { q: 'Precise Historical Spread Across Non-Elite Groups', why: 'Most surviving evidence concerns royal and elite households. How common the practice was among non-elite groups across different centuries remains poorly documented.' },
                { q: 'Relative Influence of Different Legal Traditions', why: 'It is unclear whether the Mitākṣarā or Dayabhaga traditions had measurably different effects on regional Sati rates given the current state of the evidence.' },
                { q: 'Pre-Colonial Regional Prevalence', why: 'Without systematic pre-colonial administrative records comparable to British statistical surveys, earlier prevalence estimates remain approximate.' },
                { q: 'Oral and Folk Traditions', why: 'Written Sanskrit commentaries represent only one layer of the tradition. How oral customs, local goddesses, and non-textual practices interacted with written law remains understudied.' },
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/10 bg-[#161615]/30 p-5 rounded-sm">
                  <h5 className="font-instrument text-sm text-[#E9E2D4] font-semibold mb-2">{item.q}</h5>
                  <p className="font-cormorant text-xs text-[#E9E2D4]/65 leading-relaxed font-light">{item.why}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── SCHOLAR COMPARISON TABLE ───────────────────────────────── */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">Scholar Comparison</span>
            <div className="border border-[#C58B52]/20 bg-[#161615] rounded-sm overflow-hidden">
              <div className="grid grid-cols-4 bg-[#1d1d1c] p-4 font-general text-[7.5px] uppercase tracking-wider text-[#C58B52]/70 text-center font-bold">
                <div>Topic</div>
                <div>Broad Agreement</div>
                <div>Evidence Strength</div>
                <div>Remaining Questions</div>
              </div>
              {[
                {
                  rowId: 'Vedic',
                  topic: 'Vedic Mandate',
                  agree: 'No clear Vedic command. Minority textual variant required to read immolation into 10.18.7.',
                  strength: 5,
                  open: 'Exact scope of variant manuscript traditions across all extant manuscripts.'
                },
                {
                  rowId: 'Origin',
                  topic: 'Historical Origin',
                  agree: 'Post-Vedic. Earliest physical evidence: 510 CE (Eran inscription). Gradual development.',
                  strength: 4,
                  open: 'Whether non-inscribed earlier forms existed among non-elite groups.'
                },
                {
                  rowId: 'Regional',
                  topic: 'Regional Variation',
                  agree: 'Highly significant. Rajasthan, Bengal, and parts of Karnataka had more documented cases. Kashmir, Kerala, Maharashtra far fewer.',
                  strength: 5,
                  open: 'Under-documented regions due to absence of equivalent colonial administrative surveys.'
                },
                {
                  rowId: 'Legal',
                  topic: 'Legal Unanimity',
                  agree: 'No unanimous Dharmashāstra doctrine. Medhātithi opposed; Vijñāneśvara conditionally permitted.',
                  strength: 5,
                  open: 'Extent of practical enforcement or influence of written codes on village-level custom.'
                },
                {
                  rowId: 'Colonial',
                  topic: 'Colonial Role',
                  agree: 'Administrative documentation shaped how the practice was statistically represented. 1829 abolition had both humanitarian and colonial political dimensions.',
                  strength: 4,
                  open: 'The degree to which colonial documentation altered actual practice versus simply revealing it.'
                },
              ].map((row) => {
                const open = expandedScholarRow === row.rowId;
                return (
                  <div key={row.rowId} className="border-t border-[#C58B52]/10">
                    <button
                      onClick={() => setExpandedScholarRow(open ? null : row.rowId)}
                      className="w-full grid grid-cols-4 p-4 text-left hover:bg-[#1a1a18] transition-colors focus:outline-none"
                    >
                      <span className="font-instrument text-xs font-semibold text-[#E9E2D4]">{row.topic}</span>
                      <span className="font-cormorant text-xs text-[#E9E2D4]/65 px-2">{row.agree}</span>
                      <span className="flex justify-center items-center"><StarRating count={row.strength} /></span>
                      <span className="font-general text-[7px] text-[#C58B52] text-right">{open ? '[ COLLAPSE ]' : '[ EXPAND ]'}</span>
                    </button>
                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: EASE_EXPO }}
                          className="overflow-hidden border-t border-[#C58B52]/10 bg-black/30"
                        >
                          <div className="p-5">
                            <strong className="font-general text-[7.5px] text-[#C58B52] uppercase tracking-widest block mb-2">Remaining Questions</strong>
                            <p className="font-cormorant text-xs text-[#E9E2D4]/70 leading-relaxed font-light">{row.open}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* ── MISUSE OF SOURCES ─────────────────────────────────────── */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">Source Methodology</span>
            <div className="border border-[#C58B52]/20 bg-[#161615] rounded-sm p-6 md:p-8">
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-2 text-center">How Historical Sources Are Commonly Misused</h3>
              <p className="font-cormorant text-sm text-[#E9E2D4]/60 text-center mb-8 font-light">Modern historians identify these as recurring methodological errors.</p>
              <div className="space-y-4">
                {[
                  {
                    error: 'Using one isolated verse to explain an entire civilization.',
                    why: 'A single verse from one of hundreds of ancient texts cannot represent the beliefs of a tradition spanning millennia, dozens of regional schools, and hundreds of millions of practitioners across different centuries.'
                  },
                  {
                    error: 'Confusing literary narrative with legal prescription.',
                    why: 'Epic stories describe events; legal texts prescribe obligations. Mādrī\'s act in the Mahābhārata is a narrative description of a personal choice, not a legal rule binding on all widows.'
                  },
                  {
                    error: 'Treating every Hindu text as equally authoritative.',
                    why: 'The Ṛgveda, a Purāṇa, a regional Smṛti nibandha, and a colonial administrative register are fundamentally different types of sources. Each requires different interpretive standards.'
                  },
                  {
                    error: 'Confusing Jauhar with Sati.',
                    why: 'Jauhar is a collective siege act motivated by prevention of capture. Sati is an individual widow immolation at a funeral. Conflating them misrepresents both and inflates apparent historical frequency.'
                  },
                  {
                    error: 'Ignoring regional variation.',
                    why: 'Treating India as a culturally uniform entity is a primary methodological error. What was rare in Kerala may have been more common in certain Rajput households. Generalization conceals the actual complexity.'
                  },
                  {
                    error: 'Presenting colonial statistics without discussing their limitations.',
                    why: 'British administrative counts of Sati (1815–1828) reflect the reporting methods, jurisdictional limits, and administrative interests of the East India Company. They do not provide a transparent window onto pre-colonial prevalence.'
                  },
                  {
                    error: 'Using famous quotations without verifying primary sources.',
                    why: 'Widely circulated quotations—including some attributed to colonial officials or historical figures—have been shown to lack primary source verification or to have been mistranslated. Historians always trace claims to their earliest identifiable source.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border border-[#C58B52]/10 bg-black/20 p-5 rounded-sm">
                    <div className="flex gap-3 items-start">
                      <CrossIcon className="text-[#E05A47] w-3 h-3 mt-0.5 shrink-0" />
                      <div>
                        <h5 className="font-instrument text-sm text-[#E9E2D4] font-semibold mb-2">{item.error}</h5>
                        <p className="font-cormorant text-xs text-[#E9E2D4]/65 leading-relaxed font-light">{item.why}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── EDITORIAL TRANSPARENCY ────────────────────────────────── */}
          <Reveal className="my-16">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">Editorial Transparency</span>
              <h3 className="font-instrument text-2xl text-[#E9E2D4] font-bold mb-2 text-center">Evidence Classification</h3>
              <p className="font-cormorant text-sm text-[#E9E2D4]/55 text-center mb-8 font-light">How claims have been classified throughout this investigation.</p>
              <div className="space-y-3">
                {[
                  { level: 'Established Evidence', stars: 5, desc: 'Supported by manuscript consensus, multiple independent lines of evidence, or consistent scholarly agreement across decades of critical study.' },
                  { level: 'Strong Evidence', stars: 4, desc: 'Supported by significant archaeological, inscriptional, or textual evidence. Minor gaps or interpretive nuances remain, but the core finding is well-supported.' },
                  { level: 'Probable Interpretation', stars: 3, desc: 'Supported by real evidence but debated among scholars. The interpretation is plausible and historically consistent but not yet a consensus conclusion.' },
                  { level: 'Open Historical Question', stars: 2, desc: 'Evidence exists but is incomplete, contested, or insufficiently documented to draw firm conclusions. Presented here to reflect the genuine state of the field.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 items-center border border-[#C58B52]/10 bg-black/20 p-4 rounded-sm">
                    <div className="text-center shrink-0 w-28">
                      <div className="mb-2"><StarRating count={item.stars} /></div>
                      <div className="font-general text-[7px] uppercase tracking-widest text-[#E9E2D4]/50">{item.level}</div>
                    </div>
                    <p className="font-cormorant text-xs text-[#E9E2D4]/70 leading-relaxed font-light border-l border-[#C58B52]/10 pl-5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── WHAT SCHOLARS GENERALLY AGREE ON ─────────────────────── */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">Summary of Scholarly Consensus</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Historical development of the practice was gradual, not traceable to a single moment.',
                'Textual interpretation always requires philological context, manuscript comparison and chronological awareness.',
                'Later legal traditions were not unanimous: significant opposition existed within the Dharmashāstra corpus itself.',
                'Regional diversity was significant and must be considered when evaluating any general claim.',
                'Evidence should be evaluated chronologically: later sources cannot be read back onto earlier periods.',
                'Modern public debates often oversimplify historical complexity in ways that serious scholarship consistently cautions against.',
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/10 bg-[#161615]/30 p-5 rounded-sm flex items-start gap-2.5">
                  <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#C58B52] shrink-0 mt-1.5" />
                  <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/80 leading-normal font-light">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── MYTH VS SCHOLARSHIP ───────────────────────────────────── */}
          <Reveal className="my-16">
            <div className="border border-[#C58B52]/20 bg-[#161615]/60 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">Myth vs. Scholarship</span>
              <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                <span className="font-general text-[7px] text-[#E9E2D4]/40 uppercase tracking-widest">Claim Statement</span>
                <span className="font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border border-red-700 bg-red-700/5 text-red-700 font-bold">🔴 Not Supported</span>
              </div>
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-semibold mb-4">
                "Historians have already answered every question about Sati."
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/70 leading-relaxed font-light">
                Many important questions have strong, well-established evidence. Others remain actively debated. Several cannot be resolved with currently available sources. Serious scholarship acknowledges all three categories openly and does not manufacture false certainty.
              </p>
            </div>
          </Reveal>

          {/* ── THINK ABOUT IT ────────────────────────────────────────── */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-3 font-bold">Think About It</span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#E9E2D4]/80 leading-relaxed">
              "Is good history about defending conclusions—or following evidence wherever it leads?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/20 mx-auto mt-6" />
          </Reveal>

          {/* ── TRANSITION ────────────────────────────────────────────── */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/75 leading-relaxed mb-6">
              The investigation has now examined language, scripture, legal literature, history, archaeology, historical narratives and modern scholarship. One final task remains: what conclusion does all of this evidence support?
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Final Phase</span>
            <h4 className="font-instrument text-2xl text-[#C58B52] font-semibold">Final Verdict</h4>
          </Reveal>

        </section>

        {/* ══════════════════════════════════════════════
            SECTION IX: FINAL VERDICT
        ══════════════════════════════════════════════ */}
        <section id="section-final-verdict" className="py-20">

          {/* ── ARCHIVE CLOSING ANIMATION ──────────────────────────────── */}
          <Reveal className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_EXPO }}
              viewport={{ once: true }}
            >
              <span className="font-general text-[7px] uppercase tracking-[0.4em] text-[#C58B52]/50 block mb-6 font-bold">
                TATTVA <BulletDot /> SATYA / MITHYĀ
              </span>
              <div className="border border-[#C58B52]/20 bg-[#161615] inline-block px-10 py-4 rounded-sm mb-8">
                <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#C58B52] font-bold flex items-center justify-center gap-2">
                  <CheckIcon className="w-3.5 h-3.5 text-[#C58B52]" /> INVESTIGATION COMPLETE
                </span>
              </div>
              <p className="font-cormorant text-sm md:text-base text-[#E9E2D4]/55 font-light max-w-xl mx-auto leading-relaxed mb-10">
                The conclusion below reflects the strongest interpretation supported by the available linguistic, scriptural, historical, archaeological and scholarly evidence examined throughout this investigation.
              </p>
              <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#C58B52] block mb-4 font-bold">Section IX <BulletDot /> Final Verdict</span>
              <h2 className="font-instrument text-4xl md:text-5xl text-[#E9E2D4] font-bold mb-3">
                Final Verdict
              </h2>
              <p className="font-instrument italic text-base md:text-lg text-[#C58B52]">
                What conclusion does the complete body of evidence support?
              </p>
            </motion.div>
          </Reveal>

          {/* ── THE CLAIM ─────────────────────────────────────────────── */}
          <Reveal className="my-12 max-w-2xl mx-auto text-center">
            <span className="font-general text-[7px] uppercase tracking-widest text-[#E9E2D4]/40 block mb-3">The Claim Under Investigation</span>
            <h3 className="font-instrument text-2xl md:text-3xl text-[#E9E2D4]/90 font-semibold leading-snug">
              "Hinduism Commands Sati (Widow Immolation)."
            </h3>
          </Reveal>

          {/* ── VERDICT CARD ──────────────────────────────────────────── */}
          <Reveal className="my-16">
            <div className="border border-[#C58B52]/30 bg-[#161615] rounded-sm overflow-hidden">
              {/* Header bar */}
              <div className="bg-[#1a1a18] px-8 py-6 border-b border-[#C58B52]/10 flex flex-wrap items-center gap-4">
                <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] font-bold">Overall Verdict</span>
                <span className="ml-auto font-general text-[9px] uppercase tracking-wider px-3 py-1.5 border border-[#C58B52]/60 bg-[#C58B52]/8 text-[#C58B52] font-bold rounded-sm">
                  🟠 MISLEADING
                </span>
              </div>
              {/* Body */}
              <div className="p-8 space-y-4">
                <p className="font-cormorant text-base md:text-lg text-[#E9E2D4]/85 leading-relaxed font-light">
                  The investigation does not support the claim that Hinduism universally commands widow immolation.
                </p>
                <p className="font-cormorant text-base text-[#E9E2D4]/75 leading-relaxed font-light">
                  The earliest Vedic literature does not clearly prescribe Sati as a universal religious obligation. The historical practice developed over time and became associated with particular regions, communities and historical periods.
                </p>
                <p className="font-cormorant text-base text-[#E9E2D4]/75 leading-relaxed font-light">
                  Some later legal and religious texts praised or recommended the practice under certain circumstances, while other influential commentators rejected or questioned it. Historical evidence also demonstrates considerable regional variation rather than one uniform religious practice.
                </p>
                <div className="border-l-2 border-[#C58B52]/50 pl-5 py-1">
                  <p className="font-cormorant text-base text-[#E9E2D4]/80 italic leading-relaxed font-light">
                    The available evidence therefore supports a far more complex historical picture than the popular claim suggests.
                  </p>
                </div>
              </div>
              {/* Why Misleading — not True or False */}
              <div className="border-t border-[#C58B52]/10 bg-black/20 px-8 py-4">
                <p className="font-general text-[7.5px] uppercase tracking-widest text-[#E9E2D4]/40 font-bold">
                  Why "Misleading" rather than "True" or "False"
                </p>
                <p className="font-cormorant text-xs text-[#E9E2D4]/55 leading-relaxed font-light mt-1">
                  The practice did occur historically in certain communities. But characterizing it as a universal Vedic command misrepresents the primary sources, the legal tradition's internal disagreements, the regional evidence and the historical development of the practice.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ── NINE EVIDENCE CARDS ───────────────────────────────────── */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-8 text-center font-bold">Why This Verdict?</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  label: 'Language',
                  icon: 'language',
                  body: 'The original Sanskrit word "Satī" referred to a virtuous woman before becoming associated with the later historical practice. The conflation of word and ritual is itself a historical development.'
                },
                {
                  label: 'Vedas',
                  icon: 'vedas',
                  body: 'The earliest surviving Vedic texts do not clearly prescribe widow immolation as a universal religious command. The critical edition of the Ṛgveda instructs the widow to rise and return to the living.'
                },
                {
                  label: 'Philology',
                  icon: 'philology',
                  body: 'Interpretation of key Vedic passages requires careful linguistic analysis, manuscript comparison and metrical study — not isolated quotations extracted from their textual context.'
                },
                {
                  label: 'Later Scriptures',
                  icon: 'later_scriptures',
                  body: 'Later Smṛti and Purāṇic literature presents multiple viewpoints rather than one unanimous position. Significant opposition coexists with conditional acceptance in the same legal tradition.'
                },
                {
                  label: 'Legal Tradition',
                  icon: 'legal',
                  body: 'Influential legal scholars disagreed regarding widow immolation. Medhātithi explicitly condemned it as prohibited suicide. No uniform Dharmashāstra doctrine commanded it universally.'
                },
                {
                  label: 'History',
                  icon: 'history',
                  body: 'Historical evidence demonstrates gradual development across many centuries. The earliest widely accepted inscription dates to 510 CE — more than a millennium after the Ṛgveda.'
                },
                {
                  label: 'Regional Practice',
                  icon: 'regional',
                  body: 'The practice varied significantly between different parts of India. Kashmir, Kerala, and much of India have minimal documented cases. Regional diversity contradicts any claim of universal command.'
                },
                {
                  label: 'Scholarship',
                  icon: 'scholarship',
                  body: 'Modern historians distinguish rigorously between scripture, legal texts and historical practice — categories that popular discourse frequently and consequentially conflates.'
                },
                {
                  label: 'Overall',
                  icon: 'overall',
                  body: 'The evidence does not support reducing this complex history to the statement: "Hinduism commands Sati." The full historical picture is more nuanced than any single claim can capture.'
                },
              ].map((card, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-[#161615] p-5 rounded-sm">
                  <div className="flex items-center gap-2.5 mb-3">
                    {renderIcon(card.icon)}
                    <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] font-bold">{card.label}</span>
                  </div>
                  <p className="font-cormorant text-xs md:text-sm text-[#E9E2D4]/70 leading-relaxed font-light">{card.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── ONE-MINUTE ANSWER ─────────────────────────────────────── */}
          <Reveal className="my-16">
            <div className="border-l-2 border-[#C58B52] bg-[#161615] p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-3 font-bold">One-Minute Answer</span>
              <h4 className="font-instrument text-xl text-[#E9E2D4] font-bold mb-5">Does Hinduism command Sati?</h4>
              <div className="space-y-3 font-cormorant text-sm md:text-base text-[#E9E2D4]/75 leading-relaxed font-light">
                <p>The available evidence suggests that the answer cannot be reduced to a simple yes or no.</p>
                <p>The earliest Vedic scriptures do not clearly prescribe widow immolation as a universal religious duty. Historical evidence shows that the practice emerged later, evolved over many centuries and varied considerably across regions.</p>
                <p>Some later legal and religious texts praised the practice in particular contexts, while other influential scholars opposed or questioned it.</p>
                <p>Modern historical scholarship therefore studies Sati as the result of interacting religious, legal, political and social developments rather than a single timeless command.</p>
              </div>
            </div>
          </Reveal>

          {/* ── WHAT WE LEARNED ───────────────────────────────────────── */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">What We Learned</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Language changes over time.',
                'Words and practices are not always identical.',
                'Early and later scriptures must be distinguished.',
                'Historical institutions evolve.',
                'Legal traditions can contain internal debate.',
                'Regional diversity matters.',
                'Archaeology complements literature.',
                'Serious history avoids simple slogans.',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 border border-[#C58B52]/10 bg-[#161615]/30 p-4 rounded-sm">
                  <CheckIcon className="text-[#7A9E7E] w-3 h-3 shrink-0 mt-0.5" />
                  <p className="font-cormorant text-sm text-[#E9E2D4]/80 leading-normal font-light">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── EDITORIAL TRANSPARENCY (EXPANDABLE) ───────────────────── */}
          <Reveal className="my-16">
            {(() => {
              const [open, setOpen] = React.useState(false);
              return (
                <div className="border border-[#C58B52]/20 bg-[#161615] rounded-sm overflow-hidden">
                  <button
                    onClick={() => setOpen(!open)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-[#1a1a18] transition-colors"
                  >
                    <div>
                      <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-1 font-bold">Editorial Transparency</span>
                      <span className="font-instrument text-lg text-[#E9E2D4] font-semibold">Why TATTVA Chose "Misleading"</span>
                    </div>
                    <span className="font-general text-[7px] text-[#C58B52] shrink-0 ml-4">{open ? '[ COLLAPSE ]' : '[ EXPAND ]'}</span>
                  </button>
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE_EXPO }}
                        className="overflow-hidden border-t border-[#C58B52]/10"
                      >
                        <div className="p-6 space-y-3 font-cormorant text-sm text-[#E9E2D4]/70 leading-relaxed font-light">
                          <p>This investigation deliberately avoids presenting the claim as either completely true or completely false.</p>
                          <p>The evidence shows that widow immolation became part of certain historical Hindu communities and later textual traditions. At the same time, the earliest foundational scriptures do not clearly establish it as a universal religious command, and influential legal authorities themselves differed in interpretation.</p>
                          <p>The verdict therefore reflects the complete historical record rather than isolated quotations or isolated events. A verdict of "True" would ignore the philological and legal evidence. A verdict of "False" would erase the documented historical practice. "Misleading" most accurately reflects the full weight of the available evidence.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })()}
          </Reveal>

          {/* ── CONFIDENCE PANEL ──────────────────────────────────────── */}
          <Reveal className="my-16">
            <div className="border border-[#C58B52]/20 bg-[#161615] p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-6 text-center font-bold">Investigation Confidence</span>
              <div className="space-y-3 mb-6">
                {[
                  { label: 'Language Evidence',      stars: 5 },
                  { label: 'Scriptural Evidence',    stars: 5 },
                  { label: 'Philological Evidence',  stars: 5 },
                  { label: 'Historical Evidence',    stars: 5 },
                  { label: 'Archaeological Evidence',stars: 4 },
                  { label: 'Modern Scholarship',     stars: 5 },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center gap-4 border border-[#C58B52]/10 bg-black/20 p-3 rounded-sm">
                    <span className="font-general text-[7.5px] uppercase tracking-widest text-[#E9E2D4]/50 w-44 shrink-0">{row.label}</span>
                    <span className="flex items-center"><StarRating count={row.stars} /></span>
                  </div>
                ))}
                <div className="flex items-center gap-4 border border-[#C58B52]/20 bg-[#C58B52]/5 p-3 rounded-sm">
                  <span className="font-general text-[7.5px] uppercase tracking-widest text-[#C58B52] w-44 shrink-0 font-bold">Editorial Confidence</span>
                  <span className="font-instrument text-sm text-[#C58B52] font-semibold">Very High</span>
                </div>
              </div>
              <p className="font-cormorant text-xs text-[#E9E2D4]/50 leading-relaxed font-light text-center">
                This confidence reflects the consistency of the evidence examined throughout the investigation while acknowledging that some historical questions remain debated.
              </p>
            </div>
          </Reveal>

          {/* ── FINAL REFLECTION ──────────────────────────────────────── */}
          <Reveal className="my-24 text-center max-w-2xl mx-auto">
            <div className="w-10 h-[1px] bg-[#C58B52]/20 mx-auto mb-12" />
            <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block mb-8 font-bold">Final Reflection</span>
            <div className="space-y-3 font-cormorant text-base md:text-lg text-[#E9E2D4]/65 leading-relaxed font-light italic mb-12">
              <p>History is rarely simple.</p>
              <p>Ancient texts require context.</p>
              <p>Historical institutions evolve.</p>
              <p>Languages change.</p>
              <p>Interpretations differ.</p>
              <p>Responsible scholarship follows evidence rather than assumptions.</p>
            </div>
            <div className="w-10 h-[1px] bg-[#C58B52]/20 mx-auto mb-12" />
            <p className="font-instrument text-xl md:text-2xl text-[#E9E2D4]/80 italic leading-relaxed">
              "Should an entire civilization be understood through one isolated verse—
              <br className="hidden md:block" />
              or through the complete body of historical evidence?"
            </p>
            <div className="w-10 h-[1px] bg-[#C58B52]/20 mx-auto mt-12" />
          </Reveal>

          {/* ── CONTINUE EXPLORING ────────────────────────────────────── */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">Continue Exploring</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { status: 'Completed', num: '#001', title: 'Does the Bhagavad Gītā Teach War?',          id: 'does-gita-teach-war' },
                { status: 'Completed', num: '#002', title: 'Are There Really 33 Crore Gods?',             id: 'are-there-really-33-crore-gods' },
                { status: 'Completed', num: '#003', title: 'Hinduism Worships Idols?',                    id: 'hinduism-worships-idols' },
                { status: 'Completed', num: '#004', title: 'Was the Caste System Created by Hinduism?',   id: 'does-bhagavad-gita-support-caste' },
                { status: 'Coming Soon', num: '#006', title: 'Do the Rāmāyaṇa and Mahābhārata Count as History?', id: null },
                { status: 'Coming Soon', num: '#007', title: 'Does Karma Mean Everything Is Predetermined?',       id: null },
              ].map((c, i) => (
                <div
                  key={i}
                  className={`border p-5 rounded-sm ${c.id ? 'border-[#C58B52]/20 bg-[#161615] hover:bg-[#1a1a18] cursor-pointer transition-colors' : 'border-[#C58B52]/8 bg-[#161615]/30 opacity-60'}`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-general text-[7px] uppercase tracking-widest text-[#C58B52]/60 font-bold">{c.num}</span>
                    <span className={`font-general text-[7px] uppercase tracking-widest px-2 py-0.5 rounded-sm font-bold ${c.status === 'Completed' ? 'text-[#7A9E7E] border border-[#7A9E7E]/30 bg-[#7A9E7E]/5' : 'text-[#E9E2D4]/30 border border-[#E9E2D4]/10'}`}>
                      {c.status}
                    </span>
                  </div>
                  <p className="font-instrument text-sm text-[#E9E2D4]/80 font-semibold leading-snug">{c.title}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── KNOWLEDGE CONNECTIONS ─────────────────────────────────── */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">Knowledge Connections</span>
            <p className="font-cormorant text-sm text-[#E9E2D4]/50 text-center mb-6 font-light">Related topics in the TATTVA Library that directly informed this investigation.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { topic: 'Dharma',                   rel: 'The concept of dharma shaped how legal commentators framed the obligations of widowhood in Dharmashāstra literature.' },
                { topic: 'Karma',                    rel: 'Karmic frameworks were sometimes invoked in later texts to interpret or rationalize a widow\'s choice of immolation.' },
                { topic: 'Manusmṛti',                rel: 'One of the foundational Smṛti texts whose interpretation of widowhood was cited by both sides of the historical debate.' },
                { topic: 'Vedas',                    rel: 'The Ṛgveda passages 10.18.7–8 are the central philological evidence examined in this investigation.' },
                { topic: 'Mahābhārata',              rel: 'The epic presents both Mādrī\'s act and Kuntī\'s long widowhood without prescribing one as the universal norm.' },
                { topic: 'Rāmāyaṇa',                rel: 'Mandodarī and Tārā survive as widows without committing Sati in the Vālmīki Rāmāyaṇa, contradicting any universal obligation.' },
                { topic: 'History of Hindu Law',     rel: 'The Dharmashāstra tradition — including the crucial Medhātithi–Vijñāneśvara disagreement — is central to this investigation.' },
                { topic: 'Women in Ancient India',   rel: 'The broader social and legal position of women across different Indian historical periods provides essential context for understanding Sati.' },
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/10 bg-[#161615]/30 p-4 rounded-sm flex gap-3 items-start">
                  <DiamondIcon className="w-1.5 h-1.5 rotate-45 bg-[#C58B52] shrink-0 mt-1.5" />
                  <div>
                    <strong className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-1.5">{item.topic}</strong>
                    <p className="font-cormorant text-xs text-[#E9E2D4]/60 leading-relaxed font-light">{item.rel}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── INVESTIGATION TRACKER (ANIMATED CLOSE) ────────────────── */}
          <Reveal className="my-20">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">Investigation Tracker</span>
            <div className="max-w-md mx-auto">
              <div className="border border-[#C58B52]/20 bg-[#161615] rounded-sm overflow-hidden mb-6">
                {[
                  'Claim Identified',
                  'Language Investigation',
                  'Vedic Investigation',
                  'Later Scriptures',
                  'Historical Development',
                  'Why Did Sati Spread?',
                  'Case Studies',
                  'Modern Scholarship',
                  'Final Verdict',
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07, duration: 0.4, ease: EASE_EXPO }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 border-b border-[#C58B52]/10 last:border-none"
                  >
                    <CheckIcon className="text-[#7A9E7E] w-3.5 h-3.5 shrink-0" />
                    <span className="font-general text-[8px] uppercase tracking-wider text-[#E9E2D4]/70">{step}</span>
                  </motion.div>
                ))}
              </div>

              {/* Archive stamp */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75, duration: 0.6, ease: EASE_EXPO }}
                viewport={{ once: true }}
                className="border border-[#C58B52]/15 bg-[#111110] py-6 px-8 rounded-sm text-center"
              >
                <div className="font-general text-[7px] uppercase tracking-[0.35em] text-[#C58B52]/40 mb-2 font-bold">TATTVA <BulletDot /> INVESTIGATIVE ARCHIVE</div>
                <div className="font-instrument text-lg text-[#E9E2D4]/50 mb-1">SATYA / MITHYĀ</div>
                <div className="font-general text-[8px] uppercase tracking-widest text-[#C58B52]/50 mb-3">Case File #005</div>
                <div className="w-8 h-[1px] bg-[#C58B52]/20 mx-auto mb-3" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="font-general text-[9px] uppercase tracking-[0.3em] text-[#C58B52] font-bold">
                    CASE FILE #005 ARCHIVED
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </Reveal>

        </section>

      </div>
    </div>
  );
}
