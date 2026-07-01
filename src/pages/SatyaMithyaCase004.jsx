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

export function SatyaMithyaCase004() {
  const [activeLexMeaningIdx, setActiveLexMeaningIdx] = useState(null);
  const [expandedHistoricalOrigin, setExpandedHistoricalOrigin] = useState(false);
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);
  const [activeVerseTabs, setActiveVerseTabs] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 });
  const [activeHistoryIdx, setActiveHistoryIdx] = useState(0);
  const [expandedCompareRow, setExpandedCompareRow] = useState(null);
  const [expandedQuestionIdx, setExpandedQuestionIdx] = useState(null);
  const [activeScholarTab, setActiveScholarTab] = useState(0);
  const [activeThinkerIdx, setActiveThinkerIdx] = useState(0);
  const [expandedReformRow, setExpandedReformRow] = useState(null);
  const [expandedVerdictNote, setExpandedVerdictNote] = useState(false);
  const [expandedAccessCard, setExpandedAccessCard] = useState(null);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState(null);
  const [expandedScholarPanel, setExpandedScholarPanel] = useState(false);

  const spySections = useMemo(() => [
    { id: 'section-hero', label: 'Claim Defined' },
    { id: 'section-language', label: 'Language Investigation' },
    { id: 'section-scripture', label: 'Scriptural Investigation' },
    { id: 'section-gita', label: 'Bhagavad Gītā Investigation' },
    { id: 'section-history', label: 'Historical Development' },
    { id: 'section-access', label: 'Duties, Rights and Access' },
    { id: 'section-casestudies', label: 'Case Studies' },
    { id: 'section-distinction', label: 'Varṇa, Jāti and Untouchability' },
    { id: 'section-reformers', label: 'Reformers and Modern Scholarship' },
    { id: 'section-verdict', label: 'Final Verdict' },
  ], []);

  const activeSection = useScrollSpy(spySections, { rootMargin: '-20% 0px -60% 0px' });

  const sidebarSteps = [
    { label: 'Claim Identified', checked: true, active: activeSection === 'Claim Defined' },
    { label: 'Language Investigation', checked: true, active: activeSection === 'Language Investigation' },
    { label: 'Scriptural Investigation', checked: true, active: activeSection === 'Scriptural Investigation' },
    { label: 'Bhagavad Gītā Investigation', checked: true, active: activeSection === 'Bhagavad Gītā Investigation' },
    { label: 'Historical Development', checked: true, active: activeSection === 'Historical Development' },
    { label: 'Duties & Access', checked: true, active: activeSection === 'Duties, Rights and Access' },
    { label: 'Case Studies', checked: true, active: activeSection === 'Case Studies' },
    { label: 'Varṇa vs Jāti', checked: true, active: activeSection === 'Varṇa, Jāti and Untouchability' },
    { label: 'Reformers & Scholarship', checked: true, active: activeSection === 'Reformers and Modern Scholarship' },
    { label: 'Final Verdict', checked: activeSection === 'Final Verdict', active: activeSection === 'Final Verdict' }
  ];

  const archivedCases = [
    { number: 'CASE FILE 001', title: 'Does the Bhagavad Gītā Teach War?', id: 'does-gita-teach-war' },
    { number: 'CASE FILE 002', title: 'Are There Really 33 Crore Gods?', id: 'are-there-really-33-crore-gods' },
    { number: 'CASE FILE 003', title: 'Hinduism Worships Idols?', id: 'hinduism-worships-idols' }
  ];

  const thinkersData = [
    {
      name: 'Ādi Śaṅkarācārya',
      era: 'c. 8th Century CE',
      bio: 'One of the most influential philosophers of Advaita Vedānta, who synthesized and consolidated Upanishadic teachings across the Indian subcontinent.',
      works: 'Prasthānatrayī Commentaries (Bhāṣyas on Upanishads, Bhagavad Gita, Brahma Sutras), and independent tracts like Manīṣā Pañcakam.',
      varnaView: 'Understood Varṇa as a relative category belonging only to the material body and mind (Upādhis), asserting that the absolute Self (Ātman) has no Varṇa or social attributes.',
      reformView: 'Maintained traditional scriptural duties at the transactional level (Vyavahāra), but established that absolute liberation (Mokṣa) and spiritual realization completely transcend all social boundaries.',
      quote: '"Whether one is a Brahmana or an outcast, if he has realized the oneness of the Self, he is my spiritual teacher. This is my firm conviction."',
      influence: 'Established monastic centers that structured intellectual Advaita thought; shifted discussions of ultimate human identity away from physical and social markers to formless consciousness.'
    },
    {
      name: 'Rāmānuja',
      era: 'c. 1017 – 1137 CE',
      bio: 'The great theologian of Viśiṣṭādvaita (qualified non-dualism) and Sri Vaishnavism, who opened spiritual paths to marginalized groups in South India.',
      works: 'Śrī Bhāṣya, Gītā Bhāṣya, Vedārtha Saṅgraha.',
      varnaView: 'Viewed Varṇa as a functional classification of embodied souls, but declared that devotion (Bhakti) to Vishnu bypasses all social boundaries.',
      reformView: 'Actively initiated marginalized groups into the Vaishnava fold, giving them the status of "Thirukulathár" (noble family of Lakshmi), allowing them temple entry on specific festival days, and declaring that a devotee of God must be respected regardless of birth.',
      quote: '"The devotee of Vishnu, even if born of a low class, is superior to a Brahmana who is devoid of devotion."',
      influence: 'Democratized spiritual access in South India, inspiring later Bhakti movements across the subcontinent.'
    },
    {
      name: 'Madhvācārya',
      era: 'c. 1238 – 1317 CE',
      bio: 'The founder of Dvaita (dualistic) Vedānta and the Tattvavāda school, who synthesized Vaishnava theology with strict realism.',
      works: 'Brahma Sūtra Bhāṣya, Gītā Bhāṣya, Anuvyākhyāna.',
      varnaView: 'Interpreted Varṇa as an eternal classification based on the innate nature (Svarūpa) of individual souls rather than mere physical birth.',
      reformView: 'Maintained traditional social structures at the transactional level but asserted that all souls, regardless of social class, have the capacity for devotion and spiritual progress under the grace of Vishnu.',
      quote: '"Even the outcast, if he has devotion to Vishnu, is to be respected. Devotion is the true measure of proximity to God."',
      influence: 'Consolidated Vaishnava realism, establishing devotion as the central criterion for spiritual eligibility.'
    },
    {
      name: 'Basava',
      era: 'c. 1131 – 1167 CE',
      bio: 'A philosopher, statesman, and social reformer in Karnataka who founded the Virashaiva (Lingayat) movement.',
      works: 'Vachanas (devotional poetry in Kannada).',
      varnaView: 'Completely rejected the fourfold Varṇa hierarchy and the notion of birth-based purity or pollution.',
      reformView: 'Established the "Anubhava Mantapa" (Hall of Experience), an egalitarian parliament where men and women from all social classes discussed philosophy. He replaced caste identity with the wearing of the Ishtalinga.',
      quote: '"The temple priest worships a stone; the true devotee makes their own body the temple. What is birth? Only conduct determines who is noble."',
      influence: 'Created a major anti-caste devotional community in Karnataka that championed occupational equality and rejected hereditary hierarchies.'
    },
    {
      name: 'Kabir',
      era: 'c. 15th Century CE',
      bio: 'A mystic poet-saint of Northern India who challenged both orthodox Hindu and Islamic social and ritual conventions.',
      works: 'Bijak, Kabir Granthavali (songs and couplets/Sakhis).',
      varnaView: 'Dismissed the theoretical claims of birth-based superiority as empty intellectual pride, rejecting both Varṇa and Jāti categories.',
      reformView: 'Emphasized direct, personal, inward experience of the Divine (Rāma/Hari) without the mediation of priests, rituals, or social hierarchies.',
      quote: '"If you say you were born a Brahmana by birth from a Brahmana mother, why did you not come by some other way? Birth is the same for all."',
      influence: 'Became one of the most celebrated voices of the Sant Mat and Bhakti tradition, appealing to marginalized communities across northern India.'
    },
    {
      name: 'Swami Vivekananda',
      era: 'c. 1863 – 1902 CE',
      bio: 'A key disciple of Sri Ramakrishna and a pioneer who represented Vedanta globally, advocating for social reform and education.',
      works: 'Raja Yoga, Karma Yoga, Jnana Yoga, Lectures from Colombo to Almora.',
      varnaView: 'Defined Varṇa as a natural psychological division of labor based on qualities (Guṇa), but strongly condemned modern hereditary caste as a stagnation that corrupted the original scriptural principles.',
      reformView: 'Argued that caste was a social institution, not a religious one, and that it must be dismantled to allow everyone equal access to education and material progress. He advocated for "uplifting" the masses by teaching Vedantic self-realization.',
      quote: '"Caste is a social custom, and all our great preachers have tried to break it down. From Buddhism downwards, every sect has preached against caste."',
      influence: 'Energized modern Hindu reform movements, linking spiritual realization with social work, education, and national rejuvenation.'
    },
    {
      name: 'Dayananda Saraswati',
      era: 'c. 1824 – 1883 CE',
      bio: 'The founder of the Arya Samaj, who advocated for a return to the authority of the Vedas and rejected post-Vedic texts.',
      works: 'Satyarth Prakash (The Light of Truth), Rigvedadi Bhashya Bhumika.',
      varnaView: 'Argued that Varṇa is strictly merit-based, determined by education, character, and capabilities rather than family birth.',
      reformView: 'Opposed birth-based untouchability, supported education for women and lower classes, and introduced the Shuddhi movement to readmit individuals to Vedic studies.',
      quote: '"The classification of Varṇa must be based on qualities, actions, and temperament, and not on the accident of birth."',
      influence: 'Popularized a highly structured, merit-based interpretation of Vedic social organization, driving significant educational reforms in Northern India.'
    },
    {
      name: 'Mahatma Gandhi',
      era: 'c. 1869 – 1948 CE',
      bio: 'The leader of India\'s independence movement, who combined political activism with ethical and religious self-purification.',
      works: 'Hind Swaraj, Young India, Harijan (weekly journal).',
      varnaView: 'Defended the idealized scriptural concept of Varṇa as a non-competitive, cooperative division of labor, but fiercely opposed untouchability and hereditary discrimination.',
      reformView: 'Campaigned extensively against untouchability, renaming marginalized groups as "Harijan" (children of God), and advocated for the equality of all labor, but believed that preserving ancestral occupations (ideological Varṇa) would prevent materialist greed.',
      quote: '"Untouchability is a soul-destroying sin. If untouchability lives, Hinduism dies. But Varṇa-dharma is a natural law of cooperative division of labor."',
      influence: 'Mobilized millions against untouchability, making social reform a central pillar of India\'s nationalist struggle.'
    },
    {
      name: 'Dr. B. R. Ambedkar',
      era: 'c. 1891 – 1956 CE',
      bio: 'The chief architect of the Indian Constitution, an economist, jurist, and social reformer who dedicated his life to the annihilation of caste.',
      works: 'Annihilation of Caste, Who Were the Shudras?, The Untouchables.',
      varnaView: 'Analyzed Varṇa as the parent of the rigid caste system, arguing that the theoretical fourfold division naturally degenerates into a hereditary hierarchy of graded inequality.',
      reformView: 'Completely rejected the authority of Hindu scriptures (like Manusmṛti) as inherently discriminatory. He advocated for legal safeguards, representation, education, and political empowerment, eventually leading millions of his followers to convert to Buddhism.',
      quote: '"Caste is not a division of labor. It is a division of laborers. You cannot build anything on the foundations of caste. You cannot build a nation."',
      influence: 'Transformed modern Indian law and politics, establishing constitutional rights, reservations, and inspiring ongoing global movements for social equality.'
    }
  ];

  const reformComparisonRows = [
    {
      thinker: 'Ādi Śaṅkarācārya',
      scripture: 'Prasthānatrayī (Vedas & Upanishads)',
      varna: 'Transactional body-bound category (Vyavahāra); non-existent in absolute reality.',
      jati: 'Accepted as local social structure for worldly duties.',
      equality: 'Absolute spiritual equality of all souls (Ātman) in Brahman.',
      reform: 'Focused on philosophical transcendence rather than social restructuring.'
    },
    {
      thinker: 'Rāmānuja',
      scripture: 'Prasthānatrayī & Pancharatra Agamas',
      varna: 'Embodied classification, but secondary to devotion (Bhakti).',
      jati: 'Maintained, but subordinate to spiritual fellowship.',
      equality: 'Universal spiritual equality and equal eligibility for divine grace.',
      reform: 'Initiated marginalized groups, granting them status as devotees.'
    },
    {
      thinker: 'Madhvācārya',
      scripture: 'Vedas, Puranas, & Dvaita Agamas',
      varna: 'Reflected soul\'s eternal innate nature (Svarūpa) rather than birth.',
      jati: 'Viewed as a worldly birth-identity.',
      equality: 'Distinct soul hierarchy, but equal access to path of devotion.',
      reform: 'Maintained traditional duties while asserting devotional access.'
    },
    {
      thinker: 'Basava',
      scripture: 'Rejected ritual texts; emphasized direct experience',
      varna: 'Completely rejected as an artificial hierarchy.',
      jati: 'Completely rejected; replaced Jāti with Linga initiation.',
      equality: 'Complete social, economic, and gender equality in local society.',
      reform: 'Built an egalitarian community, rejecting caste and priestly privilege.'
    },
    {
      thinker: 'Kabir',
      scripture: 'Rejected scriptural authority in favor of direct realization',
      varna: 'Completely dismissed as empty intellectual pride.',
      jati: 'Rejected as an artificial birth-based illusion.',
      equality: 'Universal spiritual equality; the Divine dwells within all equally.',
      reform: 'Mystical poetry criticizing both Hindu and Islamic hierarchies.'
    },
    {
      thinker: 'Swami Vivekananda',
      scripture: 'Upanishads & Vedānta',
      varna: 'Natural psychological division of labor (merit/qualities).',
      jati: 'Condemned hereditary Jāti as a stagnant social custom.',
      equality: 'Universal equality based on divinity of all human beings.',
      reform: 'Advocated for education, social work, and dismantling of privilege.'
    },
    {
      thinker: 'Dayananda Saraswati',
      scripture: 'Four Vedas only',
      varna: 'Strictly merit-based, determined by education and capability.',
      jati: 'Completely rejected hereditary Jāti as post-Vedic corruption.',
      equality: 'Equality of opportunity to learn and perform Vedic study.',
      reform: 'Arya Samaj educational reforms, opposing untouchability.'
    },
    {
      thinker: 'Mahatma Gandhi',
      scripture: 'Bhagavad Gita & Devotional literature',
      varna: 'Idealized cooperative division of labor (non-competitive).',
      jati: 'Opposed hereditary caste discrimination and hierarchy.',
      equality: 'Absolute equality of all labor, occupations, and human dignity.',
      reform: 'Extensive political campaigning and moral persuasion against untouchability.'
    },
    {
      thinker: 'Dr. B. R. Ambedkar',
      scripture: 'Analyzed scriptures as sources of caste hierarchy',
      varna: 'Rejected as the parent of the rigid hereditary system.',
      jati: 'Condemned as a system of graded inequality that must be annihilated.',
      equality: 'Complete social, political, and economic equality guaranteed by law.',
      reform: 'Constitutional rights, legal safeguards, political empowerment, and conversion to Buddhism.'
    }
  ];

  const compareRows = [
    {
      metric: 'Primary Meaning',
      varna: 'Four theoretical classifications based on cosmic and psychological archetypes.',
      jati: 'Thousands of concrete endogamous birth-based communities.',
      untouchability: 'A social practice of exclusion and discrimination based on concepts of pollution.'
    },
    {
      metric: 'Historical Development',
      varna: 'Remained conceptually stable as a theoretical grid across millennia.',
      jati: 'Evolved dynamically from trade guilds, regional tribes, and occupational divisions.',
      untouchability: 'Developed during late antiquity and early medieval periods as a distinct social boundary.'
    },
    {
      metric: 'Scriptural Discussion',
      varna: 'Extensively discussed in early Vedas, Upanishads, Mahabharata, and Gita.',
      jati: 'Rarely mentioned in philosophical texts; occupies focus in later legal manuals.',
      untouchability: 'Lacks sanction in core philosophical texts; criticized by many spiritual teachers.'
    },
    {
      metric: 'Regional Variation',
      varna: 'Conceptually uniform across the entire Indian subcontinent.',
      jati: 'Extremely diverse, localized, and context-dependent by region.',
      untouchability: 'Manifested differently depending on regional kingdoms and social customs.'
    },
    {
      metric: 'Relationship to Occupation',
      varna: 'Linked theoretically to individual qualities (Guṇa) and actions (Karma).',
      jati: 'Historically mapped directly to hereditary occupations and professional guilds.',
      untouchability: 'Assigned to specific ritualized, marginalized sanitary or handling duties.'
    },
    {
      metric: 'Relationship to Birth',
      varna: 'Philosophically independent of birth, though practically associated with it.',
      jati: 'Strictly hereditary; determined exclusively by birth lineage.',
      untouchability: 'Strictly hereditary; inherited automatically by birth within specific groups.'
    },
    {
      metric: 'Modern Usage',
      varna: 'Used mostly in scriptural study, spiritual discourse, and philosophy.',
      jati: 'Forms the core operational reality of modern caste groups and identities.',
      untouchability: 'Legally abolished in 1950; remains a major focus for social justice reform.'
    }
  ];

  const commonQuestions = [
    {
      question: 'Did every Jāti belong neatly to one Varṇa?',
      answer: 'No. While scriptural theory attempts to fit every group into the fourfold Varṇa schema, in practice, many regional Jātis occupied ambiguous positions. For instance, many agrarian communities were classified differently in different regions or times, and tribal groups entering the fold created unique social classifications that did not align with the standard scriptural categories.'
    },
    {
      question: 'Did every region follow exactly the same social structure?',
      answer: 'No. Regional social structures varied significantly. In South India, for example, the classical Kshatriya and Vaishya Varṇas were virtually absent in many regions, leaving a social landscape dominated by Brahmanas and a vast, diverse category of non-Brahmanas subdivided into thousands of localized Jātis.'
    },
    {
      question: 'Is Untouchability simply another name for Varṇa?',
      answer: 'No. Varṇa is the scriptural fourfold framework (Priest, Warrior, Merchant, Laborer). Untouchability emerged historically as a separate practice of social exclusion targeting communities outside (or at the bottom of) this hierarchy. While the institutions became deeply interconnected in practice, they represent different sociological developments.'
    },
    {
      question: 'Why do modern discussions often combine these concepts?',
      answer: 'Modern discussions often merge these concepts due to historical shifts, linguistic shortcuts, and colonial census policies. The English word "caste" was used as a single blanket label for both Varṇa and Jāti. Over time, political discourse and educational simplifications consolidated these separate historical developments into one uniform system.'
    }
  ];

  const scholarPerspectives = [
    {
      group: 'Traditional Scholars',
      summary: 'Analyze Varṇa as an eternal, cosmic order of functional classification, criticizing hereditary discrimination as a corruption of original scriptural principles.'
    },
    {
      group: 'Colonial Historians',
      summary: 'Often viewed caste as a single, rigid, scripturally-determined code that governed all of Indian life uniformly across centuries, emphasizing textual dictation.'
    },
    {
      group: 'Modern Historians',
      summary: 'Analyze caste as a dynamic, changing set of localized political and economic negotiations, highlighting that lived Jātis were far more important than textual Varṇa.'
    },
    {
      group: 'Contemporary Social Scientists',
      summary: 'Focus on caste as a source of political mobilization, inequality, and democratic interests in modern India, analyzing how ancient categories adapt to modern state systems.'
    }
  ];

  const historyTimeline = [
    {
      label: 'Early Vedic Period',
      heading: 'Kinship & Emerging Specialization',
      era: 'c. 1500 BCE – 1000 BCE',
      desc: 'The available evidence suggests a pastoral and semi-nomadic society organized around kinship, tribes (vis), rituals, and emerging occupational specialization. Varṇa was not yet a rigid hereditary caste system; it referred to broad divisions (like priesthood, nobility, and commoners) and was characterized by occupational fluidity.',
      evidence: 'Hymns of the Rigveda describe individuals carrying out different occupations within the same family (e.g., "I am a composer of hymns, my father is a physician, my mother grinds corn..."). Social classes existed as functional categories rather than endogamous birth groups.',
      scholarlyInterpretation: 'Scholars broadly agree that the Rigvedic society lacked hereditary restrictions on intermarriage, dining, or occupation, which are the defining traits of modern caste. The boundaries between groups were flexible, centered on ritual and military functions.'
    },
    {
      label: 'Later Vedic Period',
      heading: 'Settlement & Ritual Specialization',
      era: 'c. 1000 BCE – 600 BCE',
      desc: 'With the transition from pastoralism to settled agriculture in the Gangetic plain, social structures became increasingly complex. Ritual specialization grew, and references to the four Varṇas became more frequent and consolidated in texts like the Yajurveda and Brahmanas.',
      evidence: 'Texts from this era describe elaborate ritual hierarchies and categorize society into Brāhmaṇa, Rājanya, Vaiśya, and Śūdra. The concept of hereditary succession begins to gain prominence in administrative and priestly roles, though fluidity remained.',
      scholarlyInterpretation: 'Historians argue that the consolidation of agricultural settlements and state-like polities required a more organized division of labor. Scholars debate whether this consolidation already represented a rigid class structure or an idealized text-based hierarchy.'
    },
    {
      label: 'Epic Period',
      heading: 'Social Ideals & Dialogue',
      era: 'c. 600 BCE – 200 CE',
      desc: 'The Mahābhārata and Rāmāyaṇa reflect a period of significant political expansion, urbanization, and philosophical debate. These texts serve as windows into both evolving social ideals and historical realities, preserving a complex picture of social order.',
      evidence: 'The epics contain contradictory evidence: they document rigid birth-based expectations (e.g., the rejection of Karṇa due to his lineage) alongside explicit declarations that virtue, character, and conduct override birth (e.g., Yudhiṣṭhira\'s dialogues).',
      scholarlyInterpretation: 'Scholars interpret the epics as representing a transitional phase where the hereditary model was actively contested. The texts preserve the ongoing debate between hereditary privilege and character-based status, indicating that the system was not static.'
    },
    {
      label: 'Classical India',
      heading: 'Urbanization & Guilds (Jātis)',
      era: 'c. 200 CE – 600 CE',
      desc: 'This period witnessed the growth of large kingdoms, urbanization, and extensive trade. The emergence of powerful merchant and artisan guilds (śreṇīs) led to the rise and increasing importance of Jātis (hereditary occupational communities).',
      evidence: 'Inscriptions and texts from the Gupta era document self-governing guilds of weavers, potters, and oil-pressers. These guilds slowly evolved into endogamous, hereditary groups (Jātis) that managed their own internal codes.',
      scholarlyInterpretation: 'Scholars continue to debate the relationship between scriptural Varṇa (the 4-class ideal) and lived Jātis (thousands of local groups). Most historians agree that Jātis arose from economic and occupational guilds, which then mapped themselves onto the theoretical framework of Varṇa to negotiate social status.'
    },
    {
      label: 'Early Medieval India',
      heading: 'Regional Kingdoms & Temple Economies',
      era: 'c. 600 CE – 1200 CE',
      desc: 'The fragmentation of large empires into regional kingdoms led to decentralized political power and the rise of temple-centered economies. Local social structures became highly regionalized, influenced by local rulers and sectarian movements.',
      evidence: 'Royal land grants (copper plate inscriptions) to Brahmanas and temples created local administrative networks. Local Jātis negotiated their status by offering services to temples or claiming patron lineages from regional kings.',
      scholarlyInterpretation: 'Historians emphasize that caste was highly dynamic and region-specific during this era. Groups could elevate their status through land ownership, military service to kings, or participation in sectarian movements (like early Bhakti), which challenged temple-ritual exclusivity.'
    },
    {
      label: 'Late Medieval India',
      heading: 'Political Interactions & Fluidity',
      era: 'c. 1200 CE – 1750 CE',
      desc: 'Under the rule of various Islamic sultanates, the Vijayanagara Empire, and the Mughal Empire, Indian society interacted with new political systems. Local occupational and sectarian groups retained significant mobility and self-governance.',
      evidence: 'Administrative records and literature from this era describe peasant warrior groups (such as the Marathas or Jats) successfully rising to royal status. Sectarian communities (e.g., the Sikh Panth or Bhakti networks) created egalitarian social spaces.',
      scholarlyInterpretation: 'Modern historians argue that caste was not a single, centralized system during this period. Power and royal patronage remained the primary arbiters of social status; castes were flexible, localized, and constantly negotiating their positions.'
    },
    {
      label: 'Colonial India',
      heading: 'Census Classifications & Codification',
      era: 'c. 1750 CE – 1947 CE',
      desc: 'The British colonial administration sought to understand and govern Indian society by codifying its laws and categorizing its population. This led to the administrative merging of flexible local Jātis into rigid, statewide legal categories.',
      evidence: 'The decennial censuses (particularly Herbert Risley\'s 1901 census) classified thousands of Jātis based on a theoretical scale of "social precedence" linked to Varṇa. Colonial courts codified Hindu law based on specific Brahmanical texts, applying local norms as rigid statutory laws.',
      scholarlyInterpretation: 'Scholars agree that British administration did not invent caste, as hierarchy and discrimination existed long before. However, they argue that colonial classification solidified and politicized previously flexible, fluid local identities, making caste status a matter of state representation and legal rights.'
    },
    {
      label: 'Modern India',
      heading: 'Constitutional Reform & Challenges',
      era: '1947 CE – Present',
      desc: 'Following independence, the Indian Constitution legally abolished untouchability and established framework structures for social justice, including affirmative action (reservations) for historically marginalized groups. Today, caste remains active in social, political, and democratic negotiations.',
      evidence: 'Article 17 of the Constitution abolished "Untouchability." Special quotas for Scheduled Castes (SCs), Scheduled Tribes (STs), and Other Backward Classes (OBCs) were implemented. Ongoing social realities document both progress in representation and persistent discrimination.',
      scholarlyInterpretation: 'Sociologists describe how modern democracy has transformed caste from a ritual hierarchy into a political interest group. Caste associations lobby for economic and educational opportunities, making it a key element of democratic mobilization and identity politics.'
    }
  ];



  const gitaVerses = [
    {
      ref: 'Bhagavad Gītā 4.13',
      verse: 'चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः ।\nतस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम् ॥',
      iast: 'cātur-varṇyaṃ mayā sṛṣtaṃ guṇa-karma-vibhāgaśaḥ |\ntasya kartāram api māṃ viddhy akartāram avyayam ||',
      translation: '"The fourfold order was created by Me according to the divisions of quality (Guṇa) and active conduct (Karma). Though I am its creator, know Me to be the non-doer and eternal."',
      wordByWord: [
        { s: 'चातुर्-वर्ण्यम्', t: 'cātur-varṇyam', m: 'the four categories / classes' },
        { s: 'मया', t: 'mayā', m: 'by Me' },
        { s: 'सृष्टम्', t: 'sṛṣṭam', m: 'created' },
        { s: 'गुण-कर्म-विभागशः', t: 'guṇa-karma-vibhāgaśaḥ', m: 'according to divisions of quality and action' },
        { s: 'तस्य', t: 'tasya', m: 'of that' },
        { s: 'कर्तारम्', t: 'kartāram', m: 'the author / creator' },
        { s: 'अपि', t: 'api', m: 'although' },
        { s: 'माम्', t: 'mām', m: 'Me' },
        { s: 'विद्धि', t: 'viddhi', m: 'know' },
        { s: 'अकर्तारम्', t: 'akartāram', m: 'non-doer' },
        { s: 'अव्ययम्', t: 'avyayam', m: 'unchanging / eternal' }
      ],
      tabs: [
        {
          title: 'Context',
          content: 'Krishna explains the divine order of creation and cosmic structure. After describing how various paths lead back to Him, He notes that human society is naturally differentiated based on psychological qualities (Guṇa) and functional duties (Karma), not to enforce social discrimination but to establish that the Divine remains untouched by these divisions (as the "non-doer").'
        },
        {
          title: 'Traditional Commentaries',
          content: '• Śaṅkarācārya (Advaita): Focuses on the psychological classification. He defines Guṇa as the dominance of Sattva, Rajas, or Tamas, and Karma as corresponding duties (e.g., control of mind for Brahmanas). He emphasizes that since the self (Ātman) is not the doer, this classification belongs only to the material body, not the soul.\n\n• Rāmānuja (Viśiṣṭādvaita): Argues that the creation of the four Varṇas is a means to support the progress of individual souls. He links qualities directly to past-life karma, viewing the classification as an organic structure designed to help beings perform their Svadharma and achieve liberation.\n\n• Madhva (Dvaita): Interprets the classification as an eternal spiritual grouping based on the innate nature (Svarūpa) of the soul. He asserts that the four divisions exist at a spiritual level based on the dominant guṇa of each soul, executed under the sovereign command of Vishnu.'
        },
        {
          title: 'Modern Scholarship',
          content: 'Academic scholars note that this verse is descriptive of a philosophical schema rather than a hereditary legal injunction. It represents an attempt to ground the fourfold social structure in metaphysical principles (Guṇa and Karma) rather than simple birth. However, scholars also debate whether this philosophical ideal was used historically to rationalize and stabilize existing hereditary hierarchies.'
        },
        {
          title: 'Why It Matters',
          content: 'This verse is the absolute epicenter of the Gītā-caste debate. Proponents of a flexible, merit-based system highlight that the verse explicitly names quality (Guṇa) and action (Karma) as the criteria—omitting birth (Janma). Proponents of a birth-based system argue that in historical practice, quality and action were assumed to be inherited through lineage.'
        }
      ]
    },
    {
      ref: 'Bhagavad Gītā 18.41–44',
      verse: 'ब्राह्मणक्षत्रियविशां शूद्राणां च परन्तप ।\nकर्माणि प्रविभक्तानि स्वभावप्रभवैर्गुणैः ॥\nशमो दमस्तपः शौचं क्षान्तिरार्जवमेव च ।\nज्ञानं विज्ञानमास्तिक्यं ब्रह्मकर्म स्वभावजम् ॥',
      iast: 'brāhmaṇa-kṣatriya-viśāṃ śūdrāṇāṃ ca parantapa |\nkarmaṇi pravibhaktāni svabhāva-prabhavair guṇaiḥ ||\nśamo damas tapaḥ śaucaṃ kṣāntir ārjavam eva ca |\njñānaṃ vijñānam āstikyaṃ brahma-karma svabhāvajam ||',
      translation: '"The duties of Brāhmaṇas, Kṣatriyas, Vaiśyas, and Śūdras, O chastiser of the enemy, are distributed according to the qualities born of their own nature (Svabhāva). Serenity, self-control, austerity, purity, tolerance, honesty, knowledge, wisdom, and faith—these are the duties of the Brāhmaṇas, born of their own nature."',
      wordByWord: [
        { s: 'कर्माणि', t: 'karmaṇi', m: 'duties / actions' },
        { s: 'प्रविभक्तानि', t: 'pravibhaktāni', m: 'are distributed / divided' },
        { s: 'स्वभाव-प्रभवैः', t: 'svabhāva-prabhavaiḥ', m: 'born of their own nature' },
        { s: 'गुणैः', t: 'guṇaiḥ', m: 'by qualities' },
        { s: 'शमः', t: 'śamaḥ', m: 'serenity / mental peace' },
        { s: 'दमः', t: 'damaḥ', m: 'self-control' },
        { s: 'तपः', t: 'tapaḥ', m: 'austerity' }
      ],
      tabs: [
        {
          title: 'Context',
          content: 'Occurring in the final chapter of the Gītā, these verses summarize the practical application of Svadharma. Krishna details the specific ethical and functional responsibilities of each group, tying them directly to individual psychological nature (Svabhāva).'
        },
        {
          title: 'Traditional Commentaries',
          content: 'Commentators generally agree that these verses define the ethical codes (duties) necessary for spiritual purification. Śaṅkarācārya and Rāmānuja emphasize that performing the duties aligned with one\'s Svabhāva (innate temperament) is the most effective path to spiritual maturity, as forcing oneself into another\'s role (Paradharma) creates psychological friction and moral hazard.'
        },
        {
          title: 'Modern Scholarship',
          content: 'Historians analyze whether these verses describe an idealized functional division of labor (intellectual, administrative, mercantile, labor) or reflect the historical realities of social stratification in ancient India. Some scholars argue that Svabhāva refers to an inherent, unchangeable birth-disposition, while others interpret it as dynamic personality traits that can evolve.'
        },
        {
          title: 'Why It Matters',
          content: 'These verses define the explicit qualitative requirements for each class. For instance, a Brahmana is defined by serenity and wisdom, not by family tree. If a person born to Brahmana parents lacks self-control or knowledge, these verses raise the question of whether they can logically be classified as a Brahmana according to the Gītā.'
        }
      ]
    },
    {
      ref: 'Bhagavad Gītā 5.18',
      verse: 'विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि ।\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः ॥',
      iast: 'vidyā-vinaya-sampanne brāhmaṇe gavi hastini |\nśuni caiva śvapāke ca paṇḍitāḥ sama-darśinaḥ ||',
      translation: '"The wise look with equal vision upon a Brāhmaṇa endowed with learning and humility, a cow, an elephant, a dog, and an outcast (Śvapāka)."',
      wordByWord: [
        { s: 'विद्या-विनय-सम्पन्ने', t: 'vidyā-vinaya-sampanne', m: 'endowed with learning and humility' },
        { s: 'ब्राह्मणे', t: 'brāhmaṇe', m: 'upon a Brahmana' },
        { s: 'गवि', t: 'gavi', m: 'upon a cow' },
        { s: 'हस्तिनि', t: 'hastini', m: 'upon an elephant' },
        { s: 'शुनि', t: 'śuni', m: 'upon a dog' },
        { s: 'श्वपाके', t: 'śvapāke', m: 'upon an outcast / dog-cooker' },
        { s: 'पण्डिताः', t: 'paṇḍitāḥ', m: 'the wise / learned' },
        { s: 'सम-दर्शिनः', t: 'sama-darśinaḥ', m: 'look with equal vision' }
      ],
      tabs: [
        {
          title: 'Context',
          content: 'Krishna describes the state of spiritual realization (Jñāna). A person who has realized the ultimate truth sees the same divine spark (Ātman) residing in all living beings, transcending outer physical forms and social conventions.'
        },
        {
          title: 'Traditional Commentaries',
          content: 'All major traditional schools (Advaita, Viśiṣṭādvaita, Dvaita) agree that "equal vision" (Sama-darśana) refers to recognizing the identical spiritual essence (Ātman/Paramātman) in all bodies. However, they clarify that equal vision does not mean identical external treatment in worldly transactions (Vyavahāra)—for instance, one does not feed grass to an elephant and a dog in the exact same manner, but one respects the life force in both equally.'
        },
        {
          title: 'Modern Scholarship',
          content: 'Scholars frequently cite this verse as proof that the Gītā contains a powerful message of universal spiritual equality. It demonstrates that social stratifications (like the outcast or the priest) are treated as transient physical identities that are completely irrelevant to the true, eternal nature of the Self.'
        },
        {
          title: 'Why It Matters',
          content: 'It presents the ultimate spiritual antidote to caste-based discrimination, asserting that anyone who harbors feelings of superiority or treats others as spiritually inferior has failed to attain true wisdom (Paṇḍitya).'
        }
      ]
    },
    {
      ref: 'Bhagavad Gītā 9.32',
      verse: 'मां हि पार्थ व्यपाश्रित्य येऽपि स्युः पापयोनयः ।\nस्त्रियो वैश्यास्तथा शूद्रास्तेऽपि यान्ति परां गतिम् ॥',
      iast: 'māṃ hi pārtha vyapāśritya ye\'pi syuḥ pāpa-yonayaḥ |\nstriyo vaiśyās tathā śūdrās te\'pi yānti parāṃ gatim ||',
      translation: '"O son of Pṛthā, those who take refuge in Me, even if they be of sinful birth, women, Vaiśyas, or Śūdras, they also attain the supreme destination."',
      wordByWord: [
        { s: 'व्यपाश्रित्य', t: 'vyapāśritya', m: 'taking shelter' },
        { s: 'ये अपि स्युः', t: 'ye api syuḥ', m: 'whoever they may be' },
        { s: 'पाप-योनयः', t: 'pāpa-yonayaḥ', m: 'born of sin / low birth' },
        { s: 'स्त्रियः', t: 'striyaḥ', m: 'women' },
        { s: 'वैश्याः', t: 'vaiśyāḥ', m: 'merchants' },
        { s: 'शूद्राः', t: 'śūdrāḥ', m: 'laborers' },
        { s: 'ते अपि', t: 'te api', m: 'even they' },
        { s: 'यान्ति', t: 'yānti', m: 'attain' },
        { s: 'पराम् गतिम्', t: 'parām gatim', m: 'the supreme destination' }
      ],
      tabs: [
        {
          title: 'Context',
          content: 'Krishna explains the power of devotion (Bhakti). He declares that spiritual liberation is not the exclusive monopoly of elite males (Brahmanas and Kshatriyas) but is universally accessible to all segments of society.'
        },
        {
          title: 'Traditional Commentaries',
          content: 'Traditional commentators interpret "sinful birth" (Pāpa-yonayaḥ) as referring to births resulting from unfavorable past karma (often associated with animal bodies or marginalized social groups in ancient societies). They emphasize the redemptive power of Bhakti, which purifies and elevates any soul regardless of bodily circumstances.'
        },
        {
          title: 'Modern Scholarship',
          content: 'Scholars analyze this verse from sociological and historical perspectives. Some point out that grouping women, Vaiśyas, and Śūdras together reflects the social prejudices and restrictions of the era in which the text was consolidated. Others emphasize that the verse is revolutionary for its time, explicitly dismantling spiritual barriers and offering absolute salvation to disenfranchised groups.'
        },
        {
          title: 'Why It Matters',
          content: 'This verse is interpreted both as an inclusionary spiritual declaration ("all can attain liberation") and as a reflection of ancient social hierarchies. The debate centers on whether the phrase "sinful birth" is an endorsement of social inequality or a description of existing worldly beliefs that the text seeks to spiritually override.'
        }
      ]
    },
    {
      ref: 'Bhagavad Gītā 13.27–28',
      verse: 'समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम् ।\nविनश्यत्स्वविनश्यन्तं यः पश्यति स पश्यति ॥\nसमं पश्यन् हि सर्वत्र समवस्थितमीश्वरम् ।\nन हिनस्त्यात्मनात्मानं ततो याति परां गतिम् ॥',
      iast: 'samaṃ sarveṣu bhūteṣu tiṣṭhantaṃ parameśvaram |\nvinaśyatsv avinaśyantaṃ yaḥ paśyati sa paśyati ||\nsamaṃ paśyan hi sarvatra samavasthitam īśvaram |\nna hinasty ātmanātmānaṃ tato yāti parāṃ gatim ||',
      translation: '"He who sees the Supreme Lord residing equally in all beings—the imperishable within the perishable—he truly sees. Seeing the Lord present everywhere equally, he does not degrade himself by his mind, and thus attains the supreme goal."',
      wordByWord: [
        { s: 'समम्', t: 'samam', m: 'equally' },
        { s: 'सर्वेषु भूतेषु', t: 'sarveṣu bhūteṣu', m: 'in all living beings' },
        { s: 'तिष्ठन्तम्', t: 'tiṣṭhantam', m: 'residing' },
        { s: 'परम-ईश्वरम्', t: 'parama-ईśvaram', m: 'the Supreme Lord' },
        { s: 'विनश्यत्सु', t: 'vinaśyatsu', m: 'among the destructible' },
        { s: 'अविनाश्यन्तम्', t: 'avināśyantam', m: 'the indestructible' },
        { s: 'यः पश्यति', t: 'yaḥ paśyati', m: 'whoever sees' },
        { s: 'स पश्यति', t: 'sa paśyati', m: 'he indeed sees' }
      ],
      tabs: [
        {
          title: 'Context',
          content: 'Krishna explains the nature of knowledge (Jñāna) and the field of experience. He describes the spiritual vision required to perceive the underlying unity of existence behind the apparent diversity of material forms.'
        },
        {
          title: 'Traditional Commentaries',
          content: 'Commentators focus on the metaphysical identity of the soul. Śaṅkarācārya notes that seeing the Supreme Lord in all beings destroys the ignorance of duality, leading directly to liberation. Rāmānuja explains that despite differences in physical bodies (whether human, animal, or social class), the essential nature of the soul is identical and divine.'
        },
        {
          title: 'Modern Scholarship',
          content: 'Scholars describe these verses as the philosophical foundation of Hindu ethics. By recognizing the same Divine presence in others as in oneself, the basis for exploitation or discrimination is eliminated, as hurting another becomes equivalent to hurting oneself.'
        },
        {
          title: 'Why It Matters',
          content: 'These verses provide a powerful metaphysical argument against hereditary discrimination, establishing that any social system that enforces degradation or dehumanization directly violates the spiritual truth of the shared divine presence.'
        }
      ]
    }
  ];



  const scripturalTimeline = [
    {
      label: 'Rigveda',
      heading: 'The Earliest Vedic Layer',
      classification: 'Vedas Saṃhitā (Śruti)',
      desc: 'The Rigveda is the oldest surviving Vedic text and contains hymns composed over many centuries. Its primary focus is ritual, cosmology, poetry and devotion. It does not present a fully developed, rigid social code comparable to later legal literature.',
      citation: 'Rigveda Saṃhitā',
      verse: 'भद्रं नो अपि वातय मनः ।',
      iast: 'bhadraṃ no api vātaya manaḥ |',
      translation: '"Inspire our minds toward that which is noble and auspicious."',
      citationRef: 'Ṛgveda 10.20.1',
      context: 'Early Vedic hymns approach the cosmos as a unified, living organism. Worship centers around fire sacrifices, natural elements, and chants. Social categories are mentioned occasionally but without hereditary restrictions or notions of purity/pollution.',
      whyMatters: 'Demonstrates that the oldest layer of Hindu thought focuses on cosmic order (Ṛta) and spiritual alignment rather than detailed hereditary social legislation.'
    },
    {
      label: 'Purusha Sukta',
      heading: 'The Metaphor of the Cosmic Body',
      classification: 'Ṛgveda 10.90 (Late Layer)',
      desc: 'This hymn has become one of the most discussed passages regarding Varṇa, describing the emergence of the cosmos from the sacrifice of the primordial cosmic being (Puruṣa). Scholars differ regarding the date, purpose, and interpretation of this hymn.',
      citation: 'Ṛgveda Saṃhitā 10.90.12',
      verse: 'ब्राह्मणोऽस्य मुखमासीद् बाहू राजन्यः कृतः ।\nऊरू तदस्य यद्वैश्यः पद्भ्यां शूद्रो अजायत ॥',
      iast: 'brāhmaṇo\'sya mukham āsīd bāhū rājanyaḥ kṛtaḥ |\nūrū tad asya yad vaiśyaḥ padbhyāṃ śūdro ajāyata ||',
      translation: '"His mouth became the Brāhmaṇa; his arms were made the Rājanya (Kṣatriya); his thighs became the Vaiśya; and from his feet the Śūdra was born."',
      context: 'Traditional commentators view this as a divine cosmic blueprint, describing organic social interdependence. Modern scholars point out that it is the only hymn in the entire Rigveda mentioning the four classes together, likely representing a late addition or a poetic metaphor for the collective human body rather than a legislative code of social segregation.',
      scholarlyDebate: 'Scholarly disagreement: Some Indologists interpret the passage as the birth of a rigid hierarchy, while others view it as an organic metaphor emphasizing unity—just as a body requires a mouth, arms, thighs, and feet to function, society requires intellectual, protective, commercial, and labor forces working in harmony. Traditional Mimamsa schools analyze it as a creation narrative rather than a legal injunction.',
      whyMatters: 'It establishes the earliest textual mention of the four classes, but presents them as organic parts of a single cosmic body, emphasizing interdependence over discrimination.'
    },
    {
      label: 'Upanishads',
      heading: 'The Philosophical Shift',
      classification: 'Upanishads (Śruti)',
      desc: 'The Upanishads increasingly focus on Brahman (the absolute reality), Ātman (the Self), and spiritual realization rather than constructing detailed social legislation. They emphasize the shared spiritual essence of all existence.',
      citation: 'Chāndogya Upaniṣad 6.8.7',
      verse: 'स य एषोऽणिमैतदात्म्यमिदं सर्वं तत्सत्यं स आत्मा तत्त्वमसि ॥',
      iast: 'sa ya eṣo\'ṇimaitadātmyam idaṃ sarvaṃ tat satyaṃ sa ātmā tat tvam asi ||',
      translation: '"That which is the subtle essence—in that all this has its existence. That is the Truth. That is the Self. Tat Tvam Asi—That thou art."',
      context: 'The spiritual path of realization in the Upanishads is fundamentally open to anyone seeking knowledge. Passages like this establish that at the deepest metaphysical level, all distinctions of body, social class, and birth are ultimately transcended in the realization of the absolute Self.',
      whyMatters: 'Demonstrates that Hindu philosophy\'s peak layer (Vedānta) teaches absolute spiritual equality and the shared divine essence of all living beings, relativizing social divisions.'
    },
    {
      label: 'Mahabharata',
      heading: 'Conduct vs. Birth',
      classification: 'Itihāsa / Smṛti',
      desc: 'The Mahabharata contains numerous discussions about Dharma, conduct, duty and social identity. It presents a complex, balanced picture: acknowledging the social realities of the time while recording major debates where character, conduct and virtue override birth.',
      citation: 'Mahābhārata, Vana Parva 180.21, 26',
      verse: 'शूद्रे तु यद् भवेल्लक्ष्म द्विजे तच्च न विद्यते ।\nन वै शूद्रो भवेच्छूद्रो ब्राह्मणो न च ब्राह्मणः ॥\nयत्रैतल्लक्ष्यते सर्प वृत्तं स ब्राह्मणः स्मृतः ।\nयत्रैतन्न भवेत् सर्प तं शूद्रमिति निर्दिशेत् ॥',
      iast: 'śūdre tu yad bhavel lakṣma dvije tac ca na vidyate |\nna vai śūdro bhavech śūdro brāhmaṇo na ca brāhmaṇaḥ ||\nyatraitad lakṣyate sarpa vṛttaṃ sa brāhmaṇaḥ smṛtaḥ |\nyatraitan na bhavet sarpa taṃ śūdram iti nirdiśet ||',
      translation: '"If the characteristics [of virtue] are present in a Śūdra and absent in a twice-born (Brāhmaṇa), then that Śūdra is not a Śūdra, and that Brāhmaṇa is not a Brāhmaṇa. O serpent, where this virtuous conduct is present, he is known as a Brāhmaṇa; where it is absent, he must be designated as a Śūdra."',
      context: 'Spoken by Yudhiṣṭhira in dialogue with the Nahuṣa (serpent), this passage is one of several instances where birth-based identity is explicitly rejected in favor of ethical conduct. However, the epic also contains passages reflecting rigid caste expectations (such as the exclusion of Karṇa or Ekalavya), presenting a complex social and ethical dialogue.',
      whyMatters: 'Shows that the text itself preserves debates questioning hereditary privilege, establishing that character and conduct (Vṛtta) are the true measures of a human being.'
    },
    {
      label: 'Bhagavad Gītā',
      heading: 'Coming Next: Guṇa & Karma',
      classification: 'Smṛti / Gītā Upaniṣad',
      desc: 'The Bhagavad Gītā discusses Varṇa, Guṇa, Karma and equality in several important verses. Rather than linking social categories to hereditary birth, Krishna defines Varṇa by individual quality (Guṇa) and active conduct (Karma). These verses require a dedicated investigation of their own.',
      isIntroOnly: true,
      nextPhase: 'The Bhagavad Gītā Investigation'
    },
    {
      label: 'Dharmashastra',
      heading: 'Legal Codes and Norms',
      classification: 'Smṛti / Dharmashāstra',
      desc: 'Texts such as Manusmṛti belong to the Dharmashastra tradition and discuss law, social duties and normative conduct. They represent a different literary genre from the Vedas and Upanishads. Different Hindu traditions have historically assigned different levels of authority to these texts.',
      citation: 'Manusmṛti',
      verse: 'धर्मो हतो हन्ति धर्मो रक्षति रक्षितः ।',
      iast: 'dharmo hato hanti dharmo rakṣati rakṣitaḥ |',
      translation: '"Dharma, when destroyed, destroys; Dharma, when protected, protects."',
      citationRef: 'Manusmṛti 8.15',
      context: 'Unlike the eternal revelation (Śruti) of the Vedas and Upanishads, Dharmashastras are Smṛti (remembered traditions) intended for specific historical periods and social contexts. Many Hindu commentators historically updated or replaced these codes, and not every Hindu community accepts their legal authority equally.',
      whyMatters: 'Clarifies that legal codes are human-authored, context-specific manuals that do not carry the same absolute metaphysical authority as the Vedas and Upanishads.'
    },
    {
      label: 'Purāṇas',
      heading: 'Devotion and Universality',
      classification: 'Purāṇas (Smṛti)',
      desc: 'The Purāṇas primarily emphasize devotion, ethics, sacred narratives and theology. Different Purāṇas reflect different historical contexts and devotional traditions, often declaring that devotion (Bhakti) to the Divine completely transcends all social divisions and birth requirements.',
      citation: 'Śrīmad Bhāgavata Purāṇa 11.14.21',
      verse: 'भक्त्याहमेकया ग्राह्यः श्रद्धयात्मा प्रियः सताम् ।',
      iast: 'bhaktyāham ekayā grāhyaḥ śraddhayātmā priyaḥ satām |',
      translation: '"I am attained only through pure devotion and faith. The Self, dear to the wise, is reached by devotion alone."',
      context: 'Across the Puranic literature, devotion is described as a universal path open to all. The texts contain narratives where devotees born into marginalized positions are elevated as spiritual teachers, showing that the inner relationship with the Divine is independent of social hierarchy.',
      whyMatters: 'Demonstrates how the path of devotion (Bhakti) democratized spirituality, asserting that love of the divine supersedes all ritualistic or social hierarchies.'
    }
  ];

  const sanskritVocabulary = [
    {
      sanskrit: 'वर्ण',
      iast: 'Varṇa',
      literal: 'Colour / Class',
      category: 'Broad Social Classification',
      explain: 'The term has multiple meanings depending on context (such as choice, classification, or light frequency) and should not automatically be equated with modern hereditary caste systems.'
    },
    {
      sanskrit: 'जाति',
      iast: 'Jāti',
      literal: 'Birth / Community',
      category: 'Localized Lineage',
      explain: 'Jāti historically refers to thousands of localized social communities, kinship networks, and hereditary occupations that developed regionally across India, not merely the fourfold theoretical Varṇa model.'
    },
    {
      sanskrit: 'गुण',
      iast: 'Guṇa',
      literal: 'Quality / Attribute',
      category: 'Metaphysical Disposition',
      explain: 'Refers to the internal traits and psychological tendencies (Sattva, Rajas, Tamas) of an individual, carrying primary philosophical importance in scriptural descriptions of human classification.'
    },
    {
      sanskrit: 'कर्म',
      iast: 'Karma',
      literal: 'Action / Deed / Conduct',
      category: 'Universal Causality',
      explain: 'Refers fundamentally to individual action, mental intent, and their inevitable moral consequences, not to inherited social status or birth rank.'
    },
    {
      sanskrit: 'स्वधर्म',
      iast: 'Svadharma',
      literal: "One's Own Duty",
      category: 'Personal Responsibility',
      explain: "Refers to one's unique moral, ethical, and civic responsibility, which is broader than occupation alone and varies depending on a person's life stage, circumstances, and disposition."
    },
    {
      sanskrit: 'अस्पृश्यता',
      iast: 'Aspṛśyatā (Untouchability)',
      literal: 'Untouchability',
      category: 'Later Social Practice',
      explain: 'A discriminatory practice of physical exclusion that developed in later historical periods, which is distinct from the original philosophical definitions of Varṇa or Jāti.'
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
      <aside
        style={{ opacity: activeSection === 'Final Verdict' ? 0.15 : 1 }}
        className="hidden lg:flex flex-col fixed right-12 top-40 w-64 border-l border-[#C58B52]/20 pl-6 z-20 transition-all duration-1000"
      >
        <span className="font-general text-[9px] uppercase tracking-[0.25em] text-[#C58B52] block mb-4 font-bold">
          Evidence Tracker
        </span>
        <div className="border border-[#C58B52]/30 bg-white/50 p-4 shadow-sm flex flex-col gap-3">
          <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#1C1C1A]/50 font-bold">
            Case File #004 Status
          </span>
          <div className="flex flex-col gap-2.5">
            {sidebarSteps.map((step, idx) => {
              const isActive = step.active;
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
              Gītā & Caste System
            </h1>
            <p className="font-cormorant text-lg md:text-xl font-light italic text-[#1C1C1A]/60 max-w-xl mx-auto leading-relaxed mb-8">
              Does the Bhagavad Gītā Support the Caste System?
            </p>
          </motion.div>

          {/* EDITORIAL NOTICE */}
          <Reveal className="mb-10">
            <div className="border-l-2 border-[#9E2A2B] bg-[#9E2A2B]/[0.02] p-8 shadow-sm">
              <span className="font-general text-[8.5px] uppercase tracking-[0.25em] text-[#9E2A2B] block mb-3 font-bold">
                Editorial Notice
              </span>
              <p className="font-instrument text-[#1C1C1A] text-lg font-semibold leading-snug mb-4">
                This investigation examines one of the most sensitive subjects in the study of Sanātana Dharma.
              </p>
              <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-4">
                The discussion involves religion, history, social hierarchy, discrimination, philosophy, law, and lived human experiences.
              </p>
              <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-4">
                The purpose of this investigation is neither to justify nor condemn any community, scripture, or historical tradition.
              </p>
              <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-3">
                Instead, it distinguishes between:
              </p>
              <ul className="list-none pl-0 mb-6 space-y-2">
                {[
                  'Primary scriptural sources',
                  'Historical developments',
                  'Social practices',
                  'Modern scholarship',
                  'Popular claims'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-cormorant text-base md:text-lg text-[#1C1C1A]/85 font-light">
                    <span className="text-[#9E2A2B]/60 text-xs">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-4">
                Where scholars disagree, those disagreements are presented transparently.
              </p>
              <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/90 leading-relaxed font-normal">
                Readers are encouraged to evaluate the evidence carefully and draw informed conclusions.
              </p>
            </div>
          </Reveal>

          {/* CLAIM BOX */}
          <Reveal>
            <div className="border border-[#C58B52]/30 bg-white/40 p-6 md:p-8 relative mt-6">
              <span className="absolute -top-3 left-6 bg-[#9E2A2B] text-white px-3 py-0.5 font-general text-[7.5px] uppercase tracking-[0.2em] font-bold">
                CASE FILE #004
              </span>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
                <div>
                  <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#1C1C1A]/40 block mb-1">
                    Claim Under Review
                  </span>
                  <h2 className="font-instrument text-2xl md:text-3xl text-[#1C1C1A] font-semibold leading-tight">
                    "The Bhagavad Gītā created and supports the rigid, hereditary Caste System."
                  </h2>
                </div>
                <div className="flex items-center gap-2 border border-[#C58B52]/30 bg-[#C58B52]/5 px-3 py-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 animate-pulse" />
                  <span className="font-general text-[8.5px] uppercase tracking-wider text-yellow-700 font-bold animate-pulse">
                    UNDER INVESTIGATION
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SECTION II: THE LANGUAGE INVESTIGATION */}
        <section id="section-language" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION I • LINGUISTICS
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              The Language Investigation
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              Before investigating history, we must first understand the words.
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              Few subjects in the study of Indian civilization create more confusion than the vocabulary surrounding social organization. Modern discussions often use the words "caste", "Varṇa" and "Jāti" as though they mean exactly the same thing. Ancient Sanskrit literature, however, uses multiple terms that developed across different periods and carry different meanings. Before asking whether Hinduism created the caste system, we must first determine whether everyone is even talking about the same thing.
            </p>
          </Reveal>

          {/* THE WORD "CASTE" CARD */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/25 bg-white/40 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[7px] text-[#C58B52] block tracking-widest uppercase mb-1">Etymology</span>
              <h3 className="font-instrument text-2xl text-[#9E2A2B] font-bold mt-1 mb-4">
                Where Did The Word "Caste" Come From?
              </h3>
              <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-6">
                The English word "caste" did not originate in Sanskrit. It derives from the Portuguese word <strong>"casta"</strong>, meaning lineage, breed, or lineage-based classification. European travellers and colonial administrators later used this word as a broad label to describe many different social structures they encountered in India. As a result, one foreign word gradually came to represent several distinct indigenous concepts. This distinction is important because ancient Hindu scriptures do not use the English word "caste."
              </p>

              {/* Expandable Historical Origin */}
              <div className="border-t border-[#C58B52]/10 pt-4">
                <button
                  onClick={() => setExpandedHistoricalOrigin(!expandedHistoricalOrigin)}
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="font-instrument text-sm font-bold text-[#1C1C1A] flex items-center gap-2">
                    <span className="text-[#9E2A2B]">◆</span> Historical Origin of the Word
                  </span>
                  <span className="font-general text-[8.5px] uppercase tracking-widest text-[#C58B52]">
                    {expandedHistoricalOrigin ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedHistoricalOrigin && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-3 text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light"
                    >
                      Portuguese travelers in the 15th and 16th centuries first used "casta" to describe the complex kinship groups (Jātis) they observed. In the 18th and 19th centuries, British colonial administrators formalized and standardized these groups for census categorization, merging distinct Varṇa and Jāti concepts under the single legal umbrella of "Caste."
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>

          {/* THE SANSKRIT VOCABULARY CARD GRID */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Sanskrit Concept Repository
            </span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 select-none">
              {sanskritVocabulary.map((item, idx) => {
                const isOpen = activeLexMeaningIdx === idx;
                return (
                  <div key={idx} className="border border-[#C58B52]/20 bg-white/40 flex flex-col justify-between transition-all duration-300">
                    <button
                      onClick={() => setActiveLexMeaningIdx(isOpen ? null : idx)}
                      className="w-full p-5 flex justify-between items-center text-left focus:outline-none"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-instrument text-2xl text-[#9E2A2B] font-bold leading-none">
                          {item.sanskrit}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-general text-[10px] uppercase tracking-wider text-[#1C1C1A] font-bold">
                            {item.iast}
                          </span>
                          <span className="font-cormorant text-xs text-[#1C1C1A]/60 italic mt-0.5">
                            Literal: {item.literal}
                          </span>
                        </div>
                      </div>
                      <span className="text-[#C58B52]/50 text-xs">
                        {isOpen ? '▲' : '▼'}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-[#C58B52]/10 p-5 bg-[#F4EFE6]/30 text-xs font-cormorant leading-relaxed"
                        >
                          <div className="mb-2">
                            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-widest mb-1">Category</span>
                            <p className="text-[#1C1C1A]/90 font-bold">{item.category}</p>
                          </div>
                          <div>
                            <span className="font-general text-[7px] text-[#9E2A2B] block uppercase tracking-widest mb-1 font-bold">Explanation</span>
                            <p className="text-[#1C1C1A]/80 font-light">{item.explain}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* THE COMPARISON TABLE / PANEL */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Conceptual Comparison
            </span>
            <div className="border border-[#C58B52]/20 bg-white/40 p-6 md:p-8 rounded-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {/* Column 1 */}
                <div className="border-b md:border-b-0 md:border-r border-[#C58B52]/15 pb-6 md:pb-0 md:pr-6">
                  <span className="font-general text-[8px] text-[#C58B52] uppercase block tracking-widest mb-2 font-bold">Concept 01</span>
                  <h4 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-3">Varṇa</h4>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                    Broad scriptural social classification. Describes a fourfold division of qualities and duties (Brahmana, Kshatriya, Vaishya, Shudra) based on individual temperament and actions.
                  </p>
                </div>
                {/* Column 2 */}
                <div className="border-b md:border-b-0 md:border-r border-[#C58B52]/15 py-6 md:py-0 md:px-6">
                  <span className="font-general text-[8px] text-[#C58B52] uppercase block tracking-widest mb-2 font-bold">Concept 02</span>
                  <h4 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-3">Jāti</h4>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                    Localized hereditary communities that developed historically in many regions. Governs daily kinship, local marriage networks, and regional occupational groupings.
                  </p>
                </div>
                {/* Column 3 */}
                <div className="pt-6 md:pt-0 md:pl-6">
                  <span className="font-general text-[8px] text-[#C58B52] uppercase block tracking-widest mb-2 font-bold">Concept 03</span>
                  <h4 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-3">Modern Caste</h4>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                    A broad English label often used to describe many different Indian social realities. A product of colonial administrative merging of Varṇa and Jāti categories into a rigid legal taxonomy.
                  </p>
                </div>
              </div>

              {/* Overlap Note */}
              <div className="border-t border-[#C58B52]/15 mt-8 pt-4 text-center">
                <span className="font-cormorant italic text-xs text-[#1C1C1A]/60">
                  Note: These concepts overlap in some historical contexts but are not identical.
                </span>
              </div>
            </div>
          </Reveal>

          {/* SCHOLAR NOTE */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#9E2A2B] text-xs">◆</span>
                <span className="font-instrument text-base font-bold text-[#1C1C1A]">
                  Scholar Note • Why Definitions Matter
                </span>
              </div>
              <p className="text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light">
                Many public debates become confusing because participants unknowingly use different meanings for the same words. A careful investigation must first define its terminology before evaluating historical or scriptural claims. Throughout this investigation, each concept will therefore be examined independently rather than treated as interchangeable.
              </p>
            </div>
          </Reveal>

          {/* DID YOU KNOW */}
          <Reveal className="my-12">
            <div className="border border-[#9E2A2B]/20 bg-[#9E2A2B]/5 p-6 md:p-8">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#9E2A2B] block mb-4 font-bold">
                Did You Know?
              </span>
              <ul className="list-none pl-0 space-y-3 font-cormorant text-base md:text-lg text-[#1C1C1A]/85 font-light">
                {[
                  'Ancient Sanskrit texts never use the English word "caste."',
                  'Thousands of Jātis have existed across the Indian subcontinent.',
                  'Different regions historically organized society differently.',
                  'The relationship between Varṇa and Jāti remains one of the most debated subjects in Indian history.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-baseline gap-3">
                    <span className="text-[#9E2A2B] text-xs">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* MYTH VS LANGUAGE */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/30 bg-white/40 p-6 md:p-8">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Myth vs. Language
              </span>
              <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-1">Claim Statement</span>
                <span className="font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border border-red-700 bg-red-700/5 text-red-700 font-bold">
                  🔴 Not Supported
                </span>
              </div>
              <h4 className="font-instrument text-xl text-[#1C1C1A] font-semibold mb-4">
                "Varṇa, Jāti and caste all mean exactly the same thing."
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/70 leading-relaxed font-light">
                The investigation shows that these terms developed in different languages, historical periods and contexts. Although they may overlap in some situations, they cannot be treated as perfect synonyms.
              </p>
            </div>
          </Reveal>

          {/* THINK ABOUT IT */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-3 font-bold">
              Think About It
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#1C1C1A]/85 leading-relaxed">
              "Can we fairly investigate a historical claim if the key words themselves have different meanings?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/40 mx-auto mt-6" />
          </Reveal>

          {/* TRANSITION & NEXT SECTION CTA */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/75 leading-relaxed mb-6">
              Understanding the language is only the first step. Now we turn to the primary scriptures themselves. What do the earliest Hindu texts actually say about social organization?
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#1C1C1A]/55 font-light">
              The Scriptural Investigation
            </h4>
          </Reveal>
        </section>

        {/* SECTION III: THE SCRIPTURAL INVESTIGATION */}
        <section id="section-scripture" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION II • SCRIPTURAL ANALYSIS
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              The Scriptural Investigation
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              What do the primary Hindu scriptures actually say?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              The Hindu scriptural tradition was not written as one book at one point in history. It developed over many centuries through different literary traditions, philosophical schools and religious contexts. Therefore, understanding social organization requires examining multiple scriptural layers rather than relying on a single quotation. Throughout this section we investigate what the texts actually say, how they are traditionally interpreted, and where scholarly discussions continue.
            </p>
          </Reveal>

          {/* SCRIPTURAL TIMELINE SELECTOR */}
          <Reveal className="my-8">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 text-center font-bold">
              Scriptural Chronological Timeline
            </span>
            <div className="flex flex-nowrap overflow-x-auto gap-4 md:gap-6 border-b border-[#C58B52]/20 pb-2 mb-6 scrollbar-none select-none">
              {scripturalTimeline.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTimelineIdx(idx)}
                  className={`font-general text-[9px] uppercase tracking-wider pb-2 focus:outline-none transition-colors duration-300 whitespace-nowrap ${
                    activeTimelineIdx === idx ? 'border-b-2 border-[#9E2A2B] text-[#9E2A2B] font-bold' : 'text-[#1C1C1A]/40 hover:text-[#1C1C1A]/75'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Active Scriptural Layer Details */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-white/40 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] text-[#C58B52] uppercase block tracking-widest mb-1 font-bold">
                {scripturalTimeline[activeTimelineIdx].classification}
              </span>
              <h3 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-4">
                {scripturalTimeline[activeTimelineIdx].heading}
              </h3>
              <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/85 leading-relaxed font-light mb-6">
                {scripturalTimeline[activeTimelineIdx].desc}
              </p>

              {scripturalTimeline[activeTimelineIdx].isIntroOnly ? (
                /* Bhagavad Gita Intro Card */
                <div className="border border-dashed border-[#9E2A2B]/40 bg-[#9E2A2B]/2 p-6 text-center mt-4">
                  <span className="font-general text-[7.5px] text-[#9E2A2B] uppercase block tracking-wider mb-2 font-bold">Coming Next</span>
                  <h4 className="font-instrument text-2xl text-[#1C1C1A] font-semibold mb-2">
                    {scripturalTimeline[activeTimelineIdx].nextPhase}
                  </h4>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/60 max-w-md mx-auto">
                    The verses of the Gītā require a dedicated, comprehensive investigation of their own. We will examine them in the next section.
                  </p>
                </div>
              ) : (
                /* Standard Scripture Panel */
                <div className="flex flex-col gap-6">
                  {/* Sanskrit Box */}
                  {scripturalTimeline[activeTimelineIdx].verse && (
                    <div className="bg-[#0D0D0C]/5 border border-[#C58B52]/20 p-5 md:p-6 my-4 select-text">
                      <p className="font-sans text-base md:text-lg text-[#1C1C1A] text-center leading-relaxed whitespace-pre-line mb-3 font-semibold">
                        {scripturalTimeline[activeTimelineIdx].verse}
                      </p>
                      <p className="font-sans italic text-xs md:text-sm text-[#1C1C1A]/60 text-center leading-relaxed whitespace-pre-line mb-4 font-light">
                        {scripturalTimeline[activeTimelineIdx].iast}
                      </p>
                      <div className="w-8 h-[1px] bg-[#C58B52]/30 mx-auto mb-4" />
                      <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/80 text-center leading-relaxed font-light italic">
                        {scripturalTimeline[activeTimelineIdx].translation}
                      </p>
                      <span className="font-general text-[7px] text-[#9E2A2B] uppercase block tracking-widest text-center mt-4 font-bold">
                        — {scripturalTimeline[activeTimelineIdx].citationRef || scripturalTimeline[activeTimelineIdx].classification}
                      </span>
                    </div>
                  )}

                  {/* Scholarly Debate Panel for Purusha Sukta */}
                  {scripturalTimeline[activeTimelineIdx].scholarlyDebate && (
                    <div className="border-l-2 border-[#C58B52]/30 bg-[#C58B52]/5 p-5 my-4">
                      <span className="font-general text-[7.5px] text-[#C58B52] uppercase block tracking-wider mb-2 font-bold">Scholarly Dialogue</span>
                      <p className="font-cormorant text-xs md:text-sm text-[#1C1C1A]/70 leading-relaxed font-light">
                        {scripturalTimeline[activeTimelineIdx].scholarlyDebate}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <span className="font-general text-[7.5px] text-[#C58B52] block uppercase tracking-widest mb-1.5 font-bold">Context</span>
                      <p className="font-cormorant text-sm text-[#1C1C1A]/70 leading-relaxed font-light">
                        {scripturalTimeline[activeTimelineIdx].context}
                      </p>
                    </div>
                    <div>
                      <span className="font-general text-[7.5px] text-[#9E2A2B] block uppercase tracking-widest mb-1.5 font-bold">Why It Matters</span>
                      <p className="font-cormorant text-sm text-[#1C1C1A]/70 leading-relaxed font-light">
                        {scripturalTimeline[activeTimelineIdx].whyMatters}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          {/* SCRIPTURAL OBSERVATION */}
          <Reveal className="my-16">
            <div className="border border-[#C58B52]/20 bg-white/40 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Scriptural Observation
              </span>
              <h4 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-4">
                One Tradition. Many Texts.
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/80 leading-relaxed font-light">
                The investigation shows that Hindu scripture is not a single uniform document. Different texts serve different purposes. Some focus on ritual. Some on philosophy. Some on law. Some on devotion. Understanding social organization therefore requires reading each text within its own literary and historical context.
              </p>
            </div>
          </Reveal>

          {/* SCHOLAR NOTE */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#9E2A2B] text-xs">◆</span>
                <span className="font-instrument text-base font-bold text-[#1C1C1A]">
                  Scholar Note • Reading Scripture Responsibly
                </span>
              </div>
              <p className="text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light">
                Interpreting ancient texts requires attention to genre, chronology and historical context. Extracting one verse without considering the wider textual tradition often produces misleading conclusions.
              </p>
            </div>
          </Reveal>

          {/* MYTH VS SCRIPTURE */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/30 bg-white/40 p-6 md:p-8">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Myth vs. Scripture
              </span>
              <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-1">Claim Statement</span>
                <span className="font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border border-amber-600 bg-amber-600/5 text-amber-700 font-bold">
                  🟠 Oversimplified
                </span>
              </div>
              <h4 className="font-instrument text-xl text-[#1C1C1A] font-semibold mb-4">
                "Hindu scripture presents one single, uniform teaching about social organization."
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/70 leading-relaxed font-light">
                The scriptural tradition contains multiple genres written across many centuries. Their purposes and discussions differ significantly.
              </p>
            </div>
          </Reveal>

          {/* THINK ABOUT IT */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-3 font-bold">
              Think About It
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#1C1C1A]/85 leading-relaxed">
              "Can a civilization with thousands of years of literature be understood by quoting only one verse?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/40 mx-auto mt-6" />
          </Reveal>

          {/* TRANSITION & NEXT SECTION CTA */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/75 leading-relaxed mb-6">
              Understanding the language is only the first step. Now we turn to the primary scriptures themselves. What do the earliest Hindu texts actually say about social organization?
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#1C1C1A]/55 font-light">
              The Scriptural Investigation
            </h4>
          </Reveal>
        </section>

        {/* SECTION IV: THE BHAGAVAD GITA INVESTIGATION */}
        <section id="section-gita" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION III • TEXTUAL CORNERSTONE
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              The Bhagavad Gītā Investigation
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              What does the Bhagavad Gītā actually teach about Varṇa, Guṇa and Karma?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              Among all Hindu scriptures, no text is quoted more frequently in discussions about caste than the Bhagavad Gītā. Some readers argue that the Gītā establishes a rigid hereditary caste system. Others argue that it teaches a society organized according to qualities and actions rather than birth. Both interpretations frequently appeal to the same verses. This investigation therefore examines those verses in their full textual and philosophical context.
            </p>
          </Reveal>

          {/* HOW THIS INVESTIGATION READS THE GITA */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/25 bg-white/40 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 font-bold">
                Methodological Standard
              </span>
              <h4 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-6">
                How This Investigation Reads the Gītā
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  'Read every verse within its chapter.',
                  'Compare multiple verses rather than isolating one.',
                  'Present Sanskrit, translation and context.',
                  'Compare traditional commentaries.',
                  'Compare modern scholarship.',
                  'Distinguish description from prescription.'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 py-1.5 border-b border-[#C58B52]/10 last:border-b-0">
                    <span className="text-[#9E2A2B] text-xs mt-0.5">◆</span>
                    <span className="font-cormorant text-base text-[#1C1C1A]/85 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* VERSE INVESTIGATION PANELS */}
          <div className="my-12 flex flex-col gap-8">
            {gitaVerses.map((v, idx) => (
              <Reveal key={idx}>
                <div className="border border-[#C58B52]/25 bg-white/40 p-6 md:p-8 rounded-sm">
                  <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-2 font-bold">
                    Verse 0{idx + 1}
                  </span>
                  <h3 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-4">
                    {v.ref}
                  </h3>

                  {/* Sanskrit Box */}
                  <div className="bg-[#0D0D0C]/5 border border-[#C58B52]/20 p-5 md:p-6 my-4 select-text">
                    <p className="font-sans text-base md:text-lg text-[#1C1C1A] text-center leading-relaxed whitespace-pre-line mb-3 font-semibold">
                      {v.verse}
                    </p>
                    <p className="font-sans italic text-xs md:text-sm text-[#1C1C1A]/60 text-center leading-relaxed whitespace-pre-line mb-4 font-light">
                      {v.iast}
                    </p>
                    <div className="w-8 h-[1px] bg-[#C58B52]/30 mx-auto mb-4" />
                    <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/80 text-center leading-relaxed font-light italic">
                      {v.translation}
                    </p>
                  </div>

                  {/* Word-by-word meaning */}
                  <div className="my-4">
                    <span className="font-general text-[7px] text-[#C58B52] uppercase block tracking-widest mb-2 font-bold">Word-by-word Translation</span>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 select-none">
                      {v.wordByWord.map((w, wIdx) => (
                        <div key={wIdx} className="text-xs bg-[#C58B52]/5 px-2.5 py-1 border border-[#C58B52]/10 flex flex-col items-center">
                          <span className="font-sans font-bold text-[#9E2A2B]">{w.s}</span>
                          <span className="font-cormorant text-[10px] text-[#1C1C1A]/50 italic">{w.t}</span>
                          <span className="font-cormorant text-[10px] text-[#1C1C1A]/80 mt-0.5">{w.m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tabs for details */}
                  <div className="mt-6 border-t border-[#C58B52]/20 pt-6">
                    <div className="flex flex-wrap gap-2 mb-4 select-none">
                      {v.tabs.map((tab, tIdx) => {
                        const isTabActive = activeVerseTabs[idx] === tIdx;
                        return (
                          <button
                            key={tIdx}
                            onClick={() => setActiveVerseTabs({ ...activeVerseTabs, [idx]: tIdx })}
                            className={`font-general text-[8.5px] uppercase tracking-wider px-3 py-1 border transition-all duration-300 ${
                              isTabActive ? 'bg-[#9E2A2B] text-white border-[#9E2A2B]' : 'bg-[#F4EFE6]/50 text-[#1C1C1A]/60 border-[#C58B52]/20 hover:border-[#C58B52]/55'
                            }`}
                          >
                            {tab.title}
                          </button>
                        );
                      })}
                    </div>

                    <div className="bg-[#F4EFE6]/30 p-5 border border-[#C58B52]/10 min-h-[120px]">
                      <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light whitespace-pre-line">
                        {v.tabs[activeVerseTabs[idx]].content}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* COMPARISON PANEL */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Evidentiary Synthesis
            </span>
            <div className="border border-[#C58B52]/20 bg-white/40 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[7px] text-[#C58B52] uppercase block tracking-widest mb-1.5">Central Question</span>
              <h4 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-6">
                Does the Bhagavad Gītā explicitly state that Varṇa is determined only by birth?
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {/* Column A */}
                <div className="border-b md:border-b-0 md:border-r border-[#C58B52]/15 pb-6 md:pb-0 md:pr-8">
                  <span className="font-general text-[8.5px] text-red-700 uppercase block tracking-wider mb-3 font-bold">Arguments In Favour</span>
                  <ul className="list-none pl-0 space-y-3 font-cormorant text-sm text-[#1C1C1A]/80 font-light">
                    <li className="flex gap-2">
                      <span className="text-[#9E2A2B]">◆</span>
                      <span><strong>Birth as the default vehicle:</strong> In historical context, Svadharma and family lineage were practically linked, and birth was considered the natural indicator of one's Guṇa and Karma.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#9E2A2B]">◆</span>
                      <span><strong>Social duties:</strong> The Gītā emphasizes maintaining order and warns against the mixture of families (Varṇa-saṅkara) in the opening chapter.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#9E2A2B]">◆</span>
                      <span><strong>Stability of roles:</strong> The text advises against changing occupations or Svadharma, even if done imperfectly, which could imply a fixed hereditary allocation.</span>
                    </li>
                  </ul>
                </div>

                {/* Column B */}
                <div className="pt-6 md:pt-0 md:pl-8">
                  <span className="font-general text-[8.5px] text-green-700 uppercase block tracking-wider mb-3 font-bold">Arguments Against</span>
                  <ul className="list-none pl-0 space-y-3 font-cormorant text-sm text-[#1C1C1A]/80 font-light">
                    <li className="flex gap-2">
                      <span className="text-green-700">◆</span>
                      <span><strong>Explicit criteria:</strong> Verse 4.13 explicitly names Guṇa (qualities) and Karma (actions) as the sole creators of Varṇa, completely omitting birth (Janma).</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-700">◆</span>
                      <span><strong>Ethical definitions:</strong> Verses 18.42–44 define classes by psychological attributes (peace, self-control, wisdom) rather than family lineage.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-700">◆</span>
                      <span><strong>Universal accessibility:</strong> Verses like 9.32 and 5.18 assert absolute spiritual equality and accessibility for all, bypassing social divisions.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Assessment Panel */}
              <div className="border-t border-[#C58B52]/15 mt-8 pt-6">
                <span className="font-general text-[7px] text-[#9E2A2B] uppercase block tracking-widest mb-2 font-bold">Evidence Assessment</span>
                <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/80 leading-relaxed font-light">
                  The text of the Bhagavad Gītā does not explicitly state that Varṇa is determined solely by birth. The criteria stated in the verses are individual qualities (Guṇa) and actions (Karma). However, traditional commentaries and historical practices have frequently assumed a strong link between birth lineage and qualities, leading to differing interpretations in modern debates.
                </p>
              </div>
            </div>
          </Reveal>

          {/* SCHOLAR NOTE */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#9E2A2B] text-xs">◆</span>
                <span className="font-instrument text-base font-bold text-[#1C1C1A]">
                  Scholar Note • Why One Verse Is Never Enough
                </span>
              </div>
              <p className="text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light">
                Ancient philosophical texts develop ideas across entire chapters. Interpreting one isolated verse without considering surrounding verses, literary context and traditional commentary often produces incomplete conclusions.
              </p>
            </div>
          </Reveal>

          {/* MYTH VS SCRIPTURE */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/30 bg-white/40 p-6 md:p-8">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Myth vs. Scripture
              </span>
              <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-1">Claim Statement</span>
                <span className="font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border border-amber-600 bg-amber-600/5 text-amber-700 font-bold">
                  🟠 Oversimplified
                </span>
              </div>
              <h4 className="font-instrument text-xl text-[#1C1C1A] font-semibold mb-4">
                "The Bhagavad Gītā clearly establishes a fixed hereditary caste system in one simple verse."
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/70 leading-relaxed font-light">
                The investigation shows that the relevant verses have been interpreted in different ways by traditional commentators and modern scholars. Understanding them requires examining context, language and the broader philosophical teaching of the text.
              </p>
            </div>
          </Reveal>

          {/* KEY OBSERVATIONS GRID */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Key Observations
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 select-none">
              {[
                'The Bhagavad Gītā discusses Varṇa in several places, not only one verse.',
                'Guṇa and Karma are central concepts in the discussion.',
                'Traditional commentators do not always agree completely.',
                'Modern scholarship also presents multiple interpretations.',
                'Context changes how verses are understood.',
                'No single isolated quotation adequately represents the Gītā\'s complete teaching.'
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-white/20 p-5 flex items-start gap-3">
                  <span className="text-[#9E2A2B] text-xs mt-0.5">◆</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/85 leading-relaxed font-light">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* THINK ABOUT IT */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-3 font-bold">
              Think About It
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#1C1C1A]/85 leading-relaxed">
              "Can one philosophical text be understood fairly by quoting only the verse that supports our existing opinion?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/40 mx-auto mt-6" />
          </Reveal>

          {/* TRANSITION & NEXT SECTION CTA */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/75 leading-relaxed mb-6">
              The scriptures describe ideas. History shows how societies change. To understand today's caste system, we must now investigate how Indian society evolved across different historical periods.
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#9E2A2B] font-semibold">
              Historical Development
            </h4>
          </Reveal>
        </section>

        {/* SECTION V: THE HISTORICAL DEVELOPMENT */}
        <section id="section-history" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION IV • CHRONOLOGICAL EVOLUTION
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              The Historical Development
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              Did the social system remain the same throughout Indian history?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              One of the biggest misconceptions surrounding caste is the assumption that the social structure of India remained unchanged for thousands of years. Historical evidence suggests a far more complex picture. Across different kingdoms, regions and centuries, social organization continued to evolve. Some ideas remained remarkably stable. Others changed significantly. Understanding this historical evolution is essential before attributing every later social practice to the earliest scriptures.
            </p>
          </Reveal>

          {/* HISTORICAL TIMELINE SELECTOR */}
          <Reveal className="my-8">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-4 text-center font-bold">
              Historical Timeline
            </span>
            <div className="flex flex-nowrap overflow-x-auto gap-4 md:gap-6 border-b border-[#C58B52]/20 pb-2 mb-6 scrollbar-none select-none">
              {historyTimeline.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveHistoryIdx(idx)}
                  className={`font-general text-[9px] uppercase tracking-wider pb-2 focus:outline-none transition-colors duration-300 whitespace-nowrap ${
                    activeHistoryIdx === idx ? 'border-b-2 border-[#9E2A2B] text-[#9E2A2B] font-bold' : 'text-[#1C1C1A]/40 hover:text-[#1C1C1A]/75'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Active Historical Period Card */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/25 bg-white/40 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[8px] text-[#C58B52] uppercase block tracking-widest mb-1.5 font-bold">
                {historyTimeline[activeHistoryIdx].era}
              </span>
              <h3 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-4">
                {historyTimeline[activeHistoryIdx].heading}
              </h3>
              <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/85 leading-relaxed font-light mb-6">
                {historyTimeline[activeHistoryIdx].desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-[#C58B52]/10">
                <div>
                  <span className="font-general text-[7.5px] text-[#C58B52] block uppercase tracking-widest mb-1.5 font-bold">Historical Evidence</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/70 leading-relaxed font-light">
                    {historyTimeline[activeHistoryIdx].evidence}
                  </p>
                </div>
                <div>
                  <span className="font-general text-[7.5px] text-[#9E2A2B] block uppercase tracking-widest mb-1.5 font-bold">Scholarly Interpretation</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/70 leading-relaxed font-light">
                    {historyTimeline[activeHistoryIdx].scholarlyInterpretation}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* EDITORIAL VISUALIZATION */}
          <Reveal className="my-16">
            <div className="border border-[#C58B52]/20 bg-[#F4EFE6]/50 p-6 md:p-8 rounded-sm text-center">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 font-bold">
                Historical Development Flow
              </span>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 select-none">
                {[
                  { label: 'Varṇa', sub: 'Theoretical ideal' },
                  { label: 'Regional Diversity', sub: 'Geographic variation' },
                  { label: 'Occupational Communities', sub: 'Guilds & assemblies' },
                  { label: 'Thousands of Jātis', sub: 'Lived kinship networks' },
                  { label: 'Colonial Classification', sub: 'Codification & rigidity' },
                  { label: 'Modern Social Reality', sub: 'Democracy & lobby groups' }
                ].map((item, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="bg-white/60 border border-[#C58B52]/30 px-4 py-3 rounded-sm min-w-[140px] shadow-sm">
                      <span className="font-sans font-bold text-xs text-[#9E2A2B] block">{item.label}</span>
                      <span className="font-cormorant text-[9px] text-[#1C1C1A]/50 block mt-0.5">{item.sub}</span>
                    </div>
                    {idx < arr.length - 1 && (
                      <span className="text-[#C58B52] font-sans text-xs my-1 md:my-0">
                        {/* Right arrow for desktop, Down arrow for mobile */}
                        <span className="hidden md:inline">→</span>
                        <span className="inline md:hidden">↓</span>
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="border-t border-[#C58B52]/15 mt-6 pt-4">
                <p className="font-cormorant italic text-[11px] text-[#1C1C1A]/60 max-w-lg mx-auto">
                  This visualization illustrates one historical model discussed by many scholars. Historical interpretations continue to be debated.
                </p>
              </div>
            </div>
          </Reveal>

          {/* SCHOLAR PERSPECTIVES (Expandable Comparison) */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Scholarly Perspectives
            </span>
            <div className="border border-[#C58B52]/20 bg-white/40 p-6 md:p-8 rounded-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {/* Column A */}
                <div className="border-b md:border-b-0 md:border-r border-[#C58B52]/15 pb-6 md:pb-0 md:pr-8">
                  <span className="font-general text-[8.5px] text-green-700 uppercase block tracking-wider mb-3 font-bold">Areas of Broad Agreement</span>
                  <ul className="list-none pl-0 space-y-3 font-cormorant text-sm text-[#1C1C1A]/80 font-light">
                    <li className="flex gap-2">
                      <span className="text-green-700">◆</span>
                      <span>Caste was not static; it changed over time and varied significantly by region.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-700">◆</span>
                      <span>Lived social organization was based on Jātis (occupational groups) rather than the theoretical 4 Varṇa categories.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-700">◆</span>
                      <span>Colonial administration census policies solidified previously fluid social identities into rigid administrative lists.</span>
                    </li>
                  </ul>
                </div>

                {/* Column B */}
                <div className="pt-6 md:pt-0 md:pl-8">
                  <span className="font-general text-[8.5px] text-[#9E2A2B] uppercase block tracking-wider mb-3 font-bold">Areas of Differing Interpretation</span>
                  <ul className="list-none pl-0 space-y-3 font-cormorant text-sm text-[#1C1C1A]/80 font-light">
                    <li className="flex gap-2">
                      <span className="text-[#9E2A2B]">◆</span>
                      <span><strong>Origin of hierarchy:</strong> Some scholars emphasize ideological factors (religious concepts of purity/pollution), while others focus on material factors (land ownership, political power, labor control).</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#9E2A2B]">◆</span>
                      <span><strong>Scope of mobility:</strong> There is ongoing debate over how much upward mobility actually existed for lower Jātis in pre-colonial times.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* SCHOLAR NOTE */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#9E2A2B] text-xs">◆</span>
                <span className="font-instrument text-base font-bold text-[#1C1C1A]">
                  Scholar Note • History Is Rarely Static
                </span>
              </div>
              <p className="text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light">
                Ancient civilizations changed continuously. Understanding social institutions requires distinguishing between early textual ideals, historical practice and later political developments.
              </p>
            </div>
          </Reveal>

          {/* MYTH VS HISTORY */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/30 bg-white/40 p-6 md:p-8">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Myth vs. History
              </span>
              <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-1">Claim Statement</span>
                <span className="font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border border-red-700 bg-red-700/5 text-red-700 font-bold">
                  🔴 Not Supported
                </span>
              </div>
              <h4 className="font-instrument text-xl text-[#1C1C1A] font-semibold mb-4">
                "The caste system existed in exactly the same form throughout all of Indian history."
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/70 leading-relaxed font-light">
                Historical evidence indicates significant regional, political and chronological variation. The relationship between Varṇa, Jāti and lived social practice evolved over many centuries.
              </p>
            </div>
          </Reveal>

          {/* KEY OBSERVATIONS GRID */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Key Observations
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 select-none">
              {[
                'Indian society changed across different historical periods.',
                'Regional diversity played a major role.',
                'Jāti became increasingly important historically.',
                'Political and economic changes influenced social organization.',
                'Colonial administration affected documentation and classification.',
                'Modern caste realities cannot automatically be projected backwards into every ancient period.'
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-white/20 p-5 flex items-start gap-3">
                  <span className="text-[#9E2A2B] text-xs mt-0.5">◆</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/85 leading-relaxed font-light">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* THINK ABOUT IT */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-3 font-bold">
              Think About It
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#1C1C1A]/85 leading-relaxed">
              "Can a civilization spanning more than three thousand years be understood as though its social institutions never changed?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/40 mx-auto mt-6" />
          </Reveal>

          {/* TRANSITION & NEXT SECTION CTA */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/75 leading-relaxed mb-6">
              Lived history shows continuous evolution. But what were the practical rules governing daily life? How did different social groups access religious education, rituals and duties?
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#9E2A2B] font-semibold">
              Duties, Rights and Religious Access
            </h4>
          </Reveal>
        </section>

        {/* NEW SECTION: DUTIES, RIGHTS AND RELIGIOUS ACCESS */}
        <section id="section-access" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION V • DUTIES, RIGHTS & ACCESS
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              Duties, Rights and Religious Access
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              Did different social groups have different religious duties and privileges?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              One of the most common questions readers ask is whether different social groups had different rights, duties and access to religious life. Some historical texts describe distinct responsibilities for different Varṇas. Other texts emphasize the spiritual potential of all human beings. Historical practice also changed across regions and centuries. Understanding these differences requires careful investigation rather than simple generalizations.
            </p>
          </Reveal>

          {/* EXPANDABLE INVESTIGATION PANELS */}
          <div className="my-10 space-y-4 select-none">
            {[
              {
                q: "Did some texts assign different duties to different Varṇas?",
                ans: "Yes. Texts like the Bhagavad Gītā (18.41–44) outline functional duties based on qualities (Guṇas) and actions (Karma), while Dharmashāstra manuals codify these into legalistic categories. However, different literary genres serve different purposes. While Dharmashāstras operate as prescriptive social-legal manuals representing the ideals of specific priestly schools, philosophical texts like the Gītā focus on inner qualities, and narrative Epics (Itihāsa) frequently record exceptions of individuals transcending their traditional roles."
              },
              {
                q: "Were Vedic study and recitation discussed differently for different Varṇas?",
                ans: "Yes. Traditional initiation (Upanayana) and formal Sanskrit Vedic study were historically prescribed for the twice-born (Dvija) classes, with legal commentators arguing that Vedic recitation required specific ritual purification. However, Hindu traditions also declared that the Epics (Itihāsa) and Purāṇas were specifically composed to make the highest spiritual knowledge accessible to everyone, regardless of Varṇa or gender. In practice, spiritual knowledge was shared widely through vernacular translations, oral storytelling, and folk arts."
              },
              {
                q: "Were yajñas and major rituals restricted in some traditions?",
                ans: "Yes. Large-scale public sacrifices (Śrauta Yajñas) required specific initiation, wealthy royal patronage, and specialized priests, which restricted direct participation. However, domestic rituals (Gṛhya acts) and temple-based devotional worship (Pūjā) allowed much broader regional participation. Lived history shows that daily religious practice for the vast majority of communities centered on localized shrines and community ceremonies rather than grand Vedic sacrifices."
              },
              {
                q: "Did all Hindu traditions follow the same rules?",
                ans: "No. The Hindu tradition is highly decentralized and diverse. Bhakti movements openly rejected ritualistic exclusions, declaring that direct devotion to the Divine transcends all social classes. Tantric traditions explicitly opened initiation (Dīkṣā) and advanced spiritual practice to everyone, asserting that spiritual capacity depends on spiritual initiation, not birth. Additionally, all Sannyāsa (ascetic) orders required renouncing Varṇa and caste identity completely."
              }
            ].map((card, idx) => {
              const isOpen = expandedAccessCard === idx;
              return (
                <Reveal key={idx}>
                  <div className="border border-[#C58B52]/25 bg-white/40 p-6 rounded-sm transition-all duration-300">
                    <button
                      onClick={() => setExpandedAccessCard(isOpen ? null : idx)}
                      className="w-full flex justify-between items-center text-left focus:outline-none"
                    >
                      <span className="font-instrument text-base md:text-lg font-bold text-[#1C1C1A] pr-4">
                        {card.q}
                      </span>
                      <span className="font-general text-[8.5px] uppercase tracking-widest text-[#C58B52] shrink-0">
                        {isOpen ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-[#C58B52]/10">
                            <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/85 leading-relaxed font-light whitespace-pre-line">
                              {card.ans}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* SCRIPTURE VS HISTORY COMPARISON */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Comparative Analysis
            </span>
            <div className="border border-[#C58B52]/20 bg-white/40 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[7px] text-[#C58B52] uppercase block tracking-widest mb-1.5 text-center">Synthesis Model</span>
              <h4 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-6 text-center">
                Scripture vs. Lived History
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {/* Column 1 */}
                <div className="border-b md:border-b-0 md:border-r border-[#C58B52]/15 pb-6 md:pb-0 md:pr-6">
                  <span className="font-general text-[8.5px] text-[#9E2A2B] uppercase block tracking-wider mb-3 font-bold">Scriptural Prescriptions</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                    Normative, theoretical frameworks written by priestly scholars (e.g., Dharmashāstras). They describe an idealized social and ritual order, outlining what the authors believed society <em>ought</em> to do under cosmic law.
                  </p>
                </div>
                {/* Column 2 */}
                <div className="border-b md:border-b-0 md:border-r border-[#C58B52]/15 py-6 md:py-0 md:px-6">
                  <span className="font-general text-[8.5px] text-[#9E2A2B] uppercase block tracking-wider mb-3 font-bold">Historical Practice</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                    Empirical evidence from stone inscriptions, copper plates, travelers' diaries, and court records. These show individuals regularly changing professions, performing rituals outside standard rules, and negotiating social status.
                  </p>
                </div>
                {/* Column 3 */}
                <div className="pt-6 md:pt-0 md:pl-6">
                  <span className="font-general text-[8.5px] text-[#9E2A2B] uppercase block tracking-wider mb-3 font-bold">Regional Variation</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                    Local adaptations across the vast Indian subcontinent. Rules widely accepted in one kingdom or geographic zone were often completely unknown, modified, or rejected in others, reflecting a highly decentralized society.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#C58B52]/15 mt-8 pt-4 text-center">
                <p className="font-cormorant italic text-xs text-[#1C1C1A]/60 max-w-xl mx-auto leading-relaxed">
                  <strong>Why these must not be treated as identical:</strong> Prescriptive manuals represent the ideals of their authors rather than a direct transcription of lived daily life. Conflating scriptural theory with historical reality overlooks the rich diversity of actual practices.
                </p>
              </div>
            </div>
          </Reveal>

          {/* SCHOLAR NOTE */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/25 bg-[#F4EFE6] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#9E2A2B] text-xs">◆</span>
                <span className="font-instrument text-base font-bold text-[#1C1C1A]">
                  Scholar Note • Prescriptive Texts and Historical Reality
                </span>
              </div>
              <p className="text-xs font-cormorant text-[#1C1C1A]/70 leading-relaxed font-light">
                Many ancient legal and ritual texts describe how society ought to function according to their authors. Historians distinguish these prescriptive texts from evidence showing how people actually lived in different regions and historical periods. Understanding this distinction is essential for responsible historical analysis.
              </p>
            </div>
          </Reveal>

          {/* MYTH VS EVIDENCE */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/30 bg-white/40 p-6 md:p-8">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Myth vs. Evidence
              </span>
              <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-1">Claim Statement</span>
                <span className="font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border border-red-700 bg-red-700/5 text-red-700 font-bold">
                  🔴 Not Supported
                </span>
              </div>
              <h4 className="font-instrument text-xl text-[#1C1C1A] font-semibold mb-4">
                "Every Hindu community throughout history followed exactly the same religious restrictions."
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/70 leading-relaxed font-light">
                Historical evidence demonstrates considerable variation across time, region and tradition. Tantric movements, Bhakti saints, and regional customary laws regularly challenged or operated entirely outside the strict boundaries described in standard Dharmashāstra texts.
              </p>
            </div>
          </Reveal>

          {/* KEY OBSERVATIONS */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Key Observations
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 select-none">
              {[
                'Different texts assign different social duties.',
                'Literary genres serve different purposes.',
                'Prescriptive texts are not identical to historical reality.',
                'Regional practice varied considerably.',
                'Bhakti and other traditions often expanded devotional participation.',
                'Modern scholarship emphasizes distinguishing textual ideals from lived history.'
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-white/20 p-5 flex items-start gap-3">
                  <span className="text-[#9E2A2B] text-xs mt-0.5">◆</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/85 leading-relaxed font-light">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* THINK ABOUT IT */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-3 font-bold">
              Think About It
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#1C1C1A]/85 leading-relaxed">
              "How can we understand a civilization's spiritual history by looking only at its legal manuals while ignoring its devotional songs?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/40 mx-auto mt-6" />
          </Reveal>

          {/* TRANSITION & NEXT SECTION CTA */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/75 leading-relaxed mb-6">
              Distinguishing ideals from practice opens a further question. What do the actual narratives of the tradition reveal? Do scriptural and historical examples support one single understanding?
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#9E2A2B] font-semibold">
              Case Studies from Scripture and Tradition
            </h4>
          </Reveal>
        </section>

        {/* NEW SECTION: CASE STUDIES FROM SCRIPTURE AND TRADITION */}
        <section id="section-casestudies" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION VI • HISTORICAL CASE STUDIES
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              Case Studies from Scripture and Tradition
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              Do historical and scriptural examples support one single understanding of caste?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              Historical traditions are often understood through individual stories. Some narratives appear to reinforce existing social structures. Others appear to challenge them. Readers frequently encounter isolated examples used to support opposite conclusions — some citing evidence of social mobility, others citing evidence of exclusion. Examining both types of examples together prevents selective reading of the tradition.
            </p>
          </Reveal>

          {/* SIX EXPANDABLE CASE STUDY CARDS */}
          <Reveal className="my-4">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Primary Case Studies
            </span>
          </Reveal>
          <div className="space-y-4 select-none mb-16">
            {[
              {
                tag: 'CHĀNDOGYA UPANIṢAD',
                name: 'Satyakāma Jābāla',
                summary: 'A narrative frequently cited in discussions about truth, eligibility and the nature of spiritual education.',
                body: `The Chāndogya Upaniṣad (4.4–9) records the story of Satyakāma Jābāla, a young student who wished to pursue formal Vedic education under the sage Gautama. When Gautama asked about his lineage, Satyakāma reported that his mother Jābālā did not know his father's identity, as she had served in many households. Gautama accepted him as a student, stating that one who speaks such truth could only be a Brāhmaṇa.\n\nTraditional interpretation: This passage has been cited by commentators such as Ādi Śaṅkarācārya as evidence that spiritual knowledge was accessible to those who demonstrated truthfulness and sincerity, independent of documented birth lineage.\n\nModern scholarly interpretation: Historians note that this narrative appears in a philosophical dialogue, not a legal manual. Some scholars read it as a deliberate challenge to ritualistic purity norms, while others observe it reflects an earlier period before later Dharmashāstric restrictions became codified. The narrative does not resolve wider historical questions about access to education.`
              },
              {
                tag: 'BHAKTI TRADITION',
                name: 'Vālmīki',
                summary: 'Traditional biography of the author of the Rāmāyaṇa, frequently referenced in discussions about transformation and spiritual attainment.',
                body: `Traditional accounts describe Vālmīki as having lived a life of wrongdoing before undergoing a profound spiritual transformation, ultimately composing the Rāmāyaṇa after receiving instruction from the sage Nārada. Some traditional narratives associate him with low birth or outcast communities, presenting his transformation as evidence that spiritual attainment transcends social origin.\n\nImportant distinction: These accounts represent hagiographical biography — pious traditional narration — rather than verifiable historical documentation. Modern scholarship does not have independent historical evidence about Vālmīki's actual life, background, or social status.\n\nWhy this narrative is cited: Bhakti and reform traditions have frequently invoked Vālmīki's story as evidence that devoted spiritual practice can transcend social origin. However, responsible interpretation must distinguish traditional narrative from historical claim.`
              },
              {
                tag: 'VEDIC TRADITION',
                name: 'Vedavyāsa',
                summary: 'The traditional compiler of the Vedas and author of the Mahābhārata, whose lineage is cited in discussions about the relationship between birth and intellectual attainment.',
                body: `According to tradition, Vedavyāsa — considered the compiler of the four Vedas, author of the Mahābhārata, and founder of the Purāṇic tradition — was born to Satyavatī, a fisherwoman, and the wandering sage Parāśara. This parentage places his birth outside typical Brāhmaṇa lineage conventions.\n\nWhy this is frequently cited: His traditional role as the foremost intellectual and spiritual authority in the Hindu canon, combined with mixed genealogy according to the texts themselves, is regularly cited as evidence that scriptural authority was not determined exclusively by birth in earlier traditions.\n\nScholarly caution: Historians note that Vedavyāsa is likely a composite attribution representing centuries of editorial and authorial activity across multiple traditions. Drawing direct social conclusions from a figure who may be as much literary construction as historical individual requires considerable methodological care.`
              },
              {
                tag: 'MAHĀBHĀRATA',
                name: 'Vidura',
                summary: 'A figure in the Mahābhārata known for wisdom and counsel, whose social background is referenced in discussions about merit and position.',
                body: `Vidura appears in the Mahābhārata as the half-brother of Dhṛtarāṣṭra and Pāṇḍu, and serves as chief minister (Mahāmātra) of Hastināpura. According to the text, his birth was to a Śūdra mother and a sage father, placing him outside conventional Kṣatriya lineage. Yet he is consistently portrayed as the voice of ethical wisdom, whose counsel is sought by kings and who embodies the principle that knowledge and dharmic discernment transcend social origin.\n\nTraditional reading: Vidura is cited in classical commentary as an exemplar of wisdom, demonstrating that qualities of understanding and right conduct are not determined by birth status.\n\nMahābhārata context: This narrative exists within an epic that itself repeatedly interrogates the relationship between lineage, quality and duty. The Mahābhārata as a literary tradition does not present a single uniform position on caste.`
              },
              {
                tag: 'MAHĀBHĀRATA — MOST DEBATED',
                name: 'Ekalavya',
                summary: 'One of the most frequently debated episodes in discussions about social exclusion, talent and systemic hierarchy. Multiple conflicting interpretations exist.',
                body: `The Mahābhārata describes Ekalavya as a young Niṣāda prince who wished to learn archery from the renowned teacher Droṇācārya. When Droṇa refused to accept him as a student — the text suggests because Droṇa had pledged to make Arjuna the greatest archer — Ekalavya taught himself by creating a clay image of Droṇa and practising before it. He attained extraordinary skill. When Droṇa later encountered Ekalavya and demanded his right thumb as guru-dakṣiṇā (the customary gift to a teacher), Ekalavya gave it.\n\nInterpretation divergence: This is genuinely one of the most debated episodes in discussions about caste and social exclusion.\n\n• Traditional interpretation: Some classical commentators read this as Droṇa recognising a deeper spiritual connection and Ekalavya fulfilling his dharmic obligation of gratitude.\n\n• Reform and critical interpretation: Modern readers and reform traditions widely read this as an episode illustrating how institutional access to education and mentorship was restricted along lines of social origin, and how exceptional ability was systematically suppressed.\n\n• Neither interpretation is universally accepted. The text itself does not offer a single moral resolution. The Mahābhārata presents the episode and allows readers to evaluate it.\n\nHistorical significance: The episode's continued presence in scholarly and public debate reflects genuine unresolved questions about how social access functioned in practice across different historical periods.`
              },
              {
                tag: 'BHAKTI MOVEMENT',
                name: 'Nandanar',
                summary: 'A Tamil Nāyaṉār saint from the Bhakti tradition, cited in discussions about devotional access beyond social boundaries.',
                body: `Nandanar (also called Thirunaḷaiyār Nandanar) is revered as one of the 63 Nāyaṉār saints of the Tamil Śaiva tradition. According to the hagiographical literature of the Periya Purāṇam, Nandanar was born into a Dalit community traditionally associated with drumming and funerary duties. Despite facing rejection at temple sites due to his social origin, his intense devotion to Śiva eventually led, according to the tradition, to a miraculous transformation that granted him access to the sacred space of Chidambaram.\n\nWhy this narrative matters: The Bhakti traditions of South India repeatedly produced saints, poets and mystics from across the social spectrum, many of whom explicitly challenged the authority of ritual specialists to control access to the divine. These traditions are significant evidence of internal dissent within Hindu civilization.\n\nHistorical note: Hagiographies are devotional literature that preserve the memory of saints as understood by their community of practice. They provide evidence of how communities understood and contested social boundaries, even if the miraculous elements are understood differently by traditional believers and modern historians.`
              }
            ].map((cs, idx) => {
              const isOpen = expandedCaseStudy === idx;
              return (
                <Reveal key={idx}>
                  <div className={`border bg-white/40 transition-all duration-300 ${isOpen ? 'border-[#9E2A2B]/40' : 'border-[#C58B52]/25'}`}>
                    <button
                      onClick={() => setExpandedCaseStudy(isOpen ? null : idx)}
                      className="w-full p-6 flex items-start justify-between text-left focus:outline-none group"
                    >
                      <div className="flex-1 pr-4">
                        <span className="font-general text-[7.5px] uppercase tracking-[0.25em] text-[#C58B52] block mb-1.5 font-bold">{cs.tag}</span>
                        <h4 className="font-instrument text-xl md:text-2xl text-[#1C1C1A] font-bold mb-1">{cs.name}</h4>
                        <p className="font-cormorant text-sm text-[#1C1C1A]/60 leading-relaxed font-light">{cs.summary}</p>
                      </div>
                      <div className="shrink-0 mt-1">
                        <span className={`font-general text-[8px] uppercase tracking-widest font-bold transition-colors ${isOpen ? 'text-[#9E2A2B]' : 'text-[#C58B52]'}`}>
                          {isOpen ? '[ COLLAPSE ]' : '[ INVESTIGATE ]'}
                        </span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-[#C58B52]/15 pt-5">
                            {cs.body.split('\n\n').map((para, pi) => (
                              <p key={pi} className={`font-cormorant text-sm md:text-base text-[#1C1C1A]/80 leading-relaxed font-light mb-4 last:mb-0 ${para.startsWith('•') ? 'ml-4' : ''}`}>
                                {para}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* THREE-COLUMN CLASSIFICATION PANEL */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Comparative Classification
            </span>
            <div className="border border-[#C58B52]/20 bg-white/40 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[7px] text-[#C58B52] uppercase block tracking-widest mb-1.5 text-center">Examples Often Cited</span>
              <h4 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-8 text-center">
                How These Narratives Have Been Interpreted
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#C58B52]/15">
                {[
                  {
                    label: 'Supporting Rigid Hierarchy',
                    color: 'text-[#9E2A2B]',
                    bg: 'bg-[#9E2A2B]/5',
                    items: ["Drona refusal of Ekalavya as a formal student", "Dharmashastra prescriptions assigning ritual roles by Varna", "Temple entry restrictions documented in some historical periods", "Textual prohibitions on Shudra Vedic study in Manusmriti"]
                  },
                  {
                    label: 'Challenging Rigid Hierarchy',
                    color: 'text-emerald-700',
                    bg: 'bg-emerald-700/5',
                    items: ["Satyakama accepted on grounds of truthfulness rather than lineage", "Vedavyasa authority despite mixed genealogy", "Vidura wisdom transcending his social origin", "Bhakti saints across the social spectrum achieving revered status"]
                  },
                  {
                    label: 'Historically Debated',
                    color: 'text-[#C58B52]',
                    bg: 'bg-[#C58B52]/5',
                    items: ["Ekalavya episode: multiple valid traditional and modern readings", "Valmiki biography: hagiography vs. historical claim", "What acceptance meant in specific historical contexts", "Whether Epics reflect descriptive or prescriptive social norms"]
                  }
                ].map((col, ci) => (
                  <div key={ci} className={`${col.bg} p-6 ${ci < 2 ? 'border-b md:border-b-0 md:border-r' : ''} border-[#C58B52]/15`}>
                    <span className={`font-general text-[8.5px] uppercase block tracking-wider mb-4 font-bold ${col.color}`}>{col.label}</span>
                    <ul className="space-y-3">
                      {col.items.map((item, ii) => (
                        <li key={ii} className="flex items-start gap-2">
                          <span className={`text-xs mt-0.5 shrink-0 ${col.color}`}>◆</span>
                          <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#C58B52]/15 mt-6 pt-4">
                <p className="font-cormorant italic text-xs text-[#1C1C1A]/60 max-w-2xl mx-auto leading-relaxed text-center">
                  Different narratives have been interpreted differently by traditional schools, reform movements and modern scholars. The same text can carry different meanings in different interpretive contexts.
                </p>
              </div>
            </div>
          </Reveal>

          {/* EDITORIAL NOTE */}
          <Reveal className="my-10">
            <div className="border-l-2 border-[#9E2A2B] bg-[#F4EFE6] p-6 md:p-8">
              <span className="font-general text-[8px] uppercase tracking-widest text-[#9E2A2B] block mb-3 font-bold">Editorial Note</span>
              <h4 className="font-instrument text-xl text-[#1C1C1A] font-bold mb-3">One Story Is Not an Entire Civilization</h4>
              <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/75 leading-relaxed font-light">
                Individual narratives are valuable historical and literary sources, but they should not automatically be treated as universal descriptions of every community, every period or every tradition. A civilization spanning several thousand years across a vast and diverse subcontinent contains far more evidence than any single story can represent. Responsible historical investigation considers both individual examples and the broader linguistic, scriptural and historical record.
              </p>
            </div>
          </Reveal>

          {/* EXPANDABLE SCHOLAR PERSPECTIVES */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/25 bg-white/40">
              <button
                onClick={() => setExpandedScholarPanel(!expandedScholarPanel)}
                className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
              >
                <div>
                  <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] block mb-1 font-bold">Scholar Perspectives</span>
                  <span className="font-instrument text-base font-bold text-[#1C1C1A]">How do historians and Indologists interpret these narratives?</span>
                </div>
                <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] shrink-0 ml-4">
                  {expandedScholarPanel ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                </span>
              </button>
              <AnimatePresence>
                {expandedScholarPanel && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-[#C58B52]/15 pt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <span className="font-general text-[8px] uppercase tracking-widest text-emerald-700 block mb-3 font-bold">Areas of Broad Agreement</span>
                        <ul className="space-y-3">
                          {[
                            'Individual scriptural narratives cannot be treated as universal social descriptions.',
                            'Epics and Upaniṣads are not legal codes; they serve different literary and philosophical purposes.',
                            'Hagiographical accounts preserve community memory but require careful historical evaluation.',
                            'The Bhakti tradition produced documented evidence of trans-boundary devotional participation.',
                            'The same narrative frequently carries different meanings across different interpretive traditions.'
                          ].map((pt, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-emerald-700 text-xs mt-0.5 shrink-0">◆</span>
                              <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">{pt}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="font-general text-[8px] uppercase tracking-widest text-[#9E2A2B] block mb-3 font-bold">Areas of Continuing Debate</span>
                        <ul className="space-y-3">
                          {[
                            'Whether the Ekalavya episode reflects a descriptive reality or a deliberate moral challenge.',
                            'How much social mobility actually existed in practice across different historical periods.',
                            'Whether Bhakti traditions represented genuine social transformation or devotional exception within existing hierarchies.',
                            'The historical relationship between textual exception and lived social practice.',
                            'How narrative authority was constructed and contested within different traditions.'
                          ].map((pt, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#9E2A2B] text-xs mt-0.5 shrink-0">◆</span>
                              <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">{pt}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* MYTH VS EVIDENCE */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/30 bg-white/40 p-6 md:p-8">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Myth vs. Evidence
              </span>
              <div className="flex flex-wrap justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2 gap-2">
                <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest block">Claim Statement</span>
                <span className="font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border border-red-700 bg-red-700/5 text-red-700 font-bold">
                  🔴 Not Supported
                </span>
              </div>
              <h4 className="font-instrument text-xl text-[#1C1C1A] font-semibold mb-4">
                "One story is enough to explain the entire history of caste."
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/70 leading-relaxed font-light">
                Individual narratives illuminate important aspects of the tradition, but they cannot substitute for the broader linguistic, scriptural and historical evidence examined throughout this investigation. A civilization spanning thousands of years across a continent-sized subcontinent requires correspondingly broad evidence to evaluate responsibly.
              </p>
            </div>
          </Reveal>

          {/* KEY OBSERVATIONS */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Key Observations
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 select-none">
              {[
                'Scriptural narratives are diverse and serve multiple literary purposes.',
                'Some stories appear to reinforce existing social structures.',
                'Others explicitly question or transcend those structures.',
                'Traditional interpretations of the same narrative frequently differ.',
                'Modern scholarship continues to debate many of these narratives.',
                'No single example can explain the entire historical development of caste.'
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-white/20 p-5 flex items-start gap-3">
                  <span className="text-[#9E2A2B] text-xs mt-0.5">◆</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/85 leading-relaxed font-light">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* THINK ABOUT IT */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-3 font-bold">
              Think About It
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#1C1C1A]/85 leading-relaxed">
              "Can one civilization spanning thousands of years be understood through only one story?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/40 mx-auto mt-6" />
          </Reveal>

          {/* TRANSITION & NEXT SECTION CTA */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/75 leading-relaxed mb-6">
              Individual stories provide valuable insight into how communities understood themselves and their traditions. The broader conceptual question, however, still requires investigation. How do the core categories of Varṇa, Jāti and Untouchability actually relate to each other?
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#9E2A2B] font-semibold">
              Varṇa, Jāti and Untouchability
            </h4>
          </Reveal>
        </section>

        {/* SECTION VII: VARNA, JATI AND UNTOUCHABILITY */}
        <section id="section-distinction" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION VII • CONCEPTUAL DISTINCTIONS
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              Varṇa, Jāti and Untouchability
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              Three Different Concepts. One Common Misunderstanding.
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              Modern discussions often use the words Varṇa, Jāti, and Untouchability interchangeably. However, these ideas emerged in different contexts, serve different purposes, and developed differently across history. Understanding these distinctions is essential before evaluating broader claims about Hindu society.
            </p>
          </Reveal>

          {/* THE THREE COLUMNS */}
          <Reveal className="my-10">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Conceptual Core
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 select-none">
              {/* Column 1 */}
              <div className="border border-[#C58B52]/25 bg-white/40 p-6 flex flex-col justify-between">
                <div>
                  <span className="font-general text-[8px] text-[#9E2A2B] uppercase tracking-widest block mb-2 font-bold">Concept 01</span>
                  <h4 className="font-instrument text-2xl text-[#1C1C1A] font-bold mb-4">Varṇa</h4>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/75 leading-relaxed font-light mb-4">
                    Appears primarily in scriptural literature. Represents a broad cosmic framework discussed in texts such as the Bhagavad Gītā and other scriptures. Frequently connected with ideas such as Guṇa, Karma and social function. Different traditions interpret it differently.
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="border border-[#C58B52]/25 bg-white/40 p-6 flex flex-col justify-between">
                <div>
                  <span className="font-general text-[8px] text-[#9E2A2B] uppercase tracking-widest block mb-2 font-bold">Concept 02</span>
                  <h4 className="font-instrument text-2xl text-[#1C1C1A] font-bold mb-4">Jāti</h4>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/75 leading-relaxed font-light mb-4">
                    Historically refers to thousands of localized hereditary communities. Often associated with occupation, region, family, custom, and social organization. Its historical development is far more complex than the fourfold Varṇa framework.
                  </p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="border border-[#C58B52]/25 bg-[#9E2A2B]/5 p-6 flex flex-col justify-between">
                <div>
                  <span className="font-general text-[8px] text-[#9E2A2B] uppercase tracking-widest block mb-2 font-bold">Concept 03</span>
                  <h4 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-4">Untouchability</h4>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/75 leading-relaxed font-light mb-4">
                    A historical practice of exclusion and discrimination experienced by many communities. Discussed here as a distinct social institution. Historians continue to investigate its origins and evolution. It cannot be oversimplified into either Varṇa or Jāti.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* COMPARISON TABLE */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Evidentiary Matrix
            </span>
            <div className="border border-[#C58B52]/25 bg-white/40 rounded-sm overflow-hidden select-none">
              <div className="grid grid-cols-4 bg-[#F4EFE6] px-4 py-3 border-b border-[#C58B52]/25 text-left font-general text-[9px] uppercase tracking-wider font-bold">
                <div>Metric</div>
                <div>Varṇa</div>
                <div>Jāti</div>
                <div>Untouchability</div>
              </div>

              <div className="divide-y divide-[#C58B52]/15">
                {compareRows.map((row, idx) => {
                  const isExpanded = expandedCompareRow === idx;
                  return (
                    <div key={idx} className="flex flex-col">
                      <div
                        onClick={() => setExpandedCompareRow(isExpanded ? null : idx)}
                        className="grid grid-cols-4 px-4 py-4 cursor-pointer hover:bg-[#F4EFE6]/30 transition-colors text-left"
                      >
                        <div className="font-sans font-bold text-xs text-[#9E2A2B] flex items-center gap-1.5">
                          <span>{isExpanded ? '▼' : '▶'}</span>
                          <span>{row.metric}</span>
                        </div>
                        <div className="font-cormorant text-xs md:text-sm text-[#1C1C1A]/70 truncate pr-4">{row.varna}</div>
                        <div className="font-cormorant text-xs md:text-sm text-[#1C1C1A]/70 truncate pr-4">{row.jati}</div>
                        <div className="font-cormorant text-xs md:text-sm text-[#1C1C1A]/70 truncate pr-4">{row.untouchability}</div>
                      </div>

                      {isExpanded && (
                        <div className="bg-[#F4EFE6]/10 px-6 py-4 grid grid-cols-4 text-xs md:text-sm font-cormorant text-[#1C1C1A]/80 leading-relaxed font-light border-t border-b border-[#C58B52]/10">
                          <div className="font-sans text-[10px] text-[#9E2A2B] uppercase tracking-wider pt-0.5">Details</div>
                          <div className="pr-4 whitespace-pre-line">{row.varna}</div>
                          <div className="pr-4 whitespace-pre-line">{row.jati}</div>
                          <div className="pr-4 whitespace-pre-line">{row.untouchability}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* EDITORIAL NOTE */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/20 bg-white/40 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Editorial Note
              </span>
              <h4 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-4">
                Why These Distinctions Matter
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/80 leading-relaxed font-light">
                Many public discussions become polarized because different concepts are treated as though they were identical. Separating them does not deny historical discrimination. Instead, it allows each institution to be investigated according to its own historical and textual evidence.
              </p>
            </div>
          </Reveal>

          {/* COMMON QUESTIONS ACCORDION */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Common Questions Under Review
            </span>
            <div className="flex flex-col gap-4">
              {commonQuestions.map((q, idx) => {
                const isOpen = expandedQuestionIdx === idx;
                return (
                  <div key={idx} className="border border-[#C58B52]/20 bg-white/40 rounded-sm overflow-hidden select-none">
                    <div
                      onClick={() => setExpandedQuestionIdx(isOpen ? null : idx)}
                      className="px-6 py-4 cursor-pointer hover:bg-[#F4EFE6]/30 flex justify-between items-center transition-colors"
                    >
                      <h4 className="font-instrument text-base md:text-lg text-[#1C1C1A] font-bold">
                        {q.question}
                      </h4>
                      <span className="text-[#9E2A2B] text-xs font-bold font-sans">
                        {isOpen ? 'Close' : 'Expand'}
                      </span>
                    </div>

                    {isOpen && (
                      <div className="px-6 pb-6 border-t border-[#C58B52]/10 pt-4 bg-[#F4EFE6]/20">
                        <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/75 leading-relaxed font-light whitespace-pre-line">
                          {q.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* SCHOLAR PERSPECTIVES PANEL */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Scholarly Perspectives
            </span>
            <div className="border border-[#C58B52]/25 bg-white/40 p-6 md:p-8 rounded-sm select-none">
              <div className="flex flex-wrap gap-2 mb-6 border-b border-[#C58B52]/20 pb-4">
                {scholarPerspectives.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScholarTab(idx)}
                    className={`font-general text-[8.5px] uppercase tracking-wider px-3 py-1 border transition-all duration-300 ${
                      activeScholarTab === idx ? 'bg-[#9E2A2B] text-white border-[#9E2A2B]' : 'bg-[#F4EFE6]/50 text-[#1C1C1A]/60 border-[#C58B52]/20 hover:border-[#C58B52]/55'
                    }`}
                  >
                    {item.group}
                  </button>
                ))}
              </div>

              <div className="bg-[#F4EFE6]/20 p-5 border border-[#C58B52]/10 min-h-[100px]">
                <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/85 leading-relaxed font-light">
                  {scholarPerspectives[activeScholarTab].summary}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-[#C58B52]/10">
                <div>
                  <span className="font-general text-[7.5px] text-green-700 block uppercase tracking-widest mb-1.5 font-bold">Where Agreement Exists</span>
                  <p className="font-cormorant text-xs text-[#1C1C1A]/70 leading-relaxed font-light">
                    Scholars across these categories broadly agree that Jātis arose primarily from professional guilds and kinship groupings rather than a top-down scriptural decree, and that colonial policies solidified social categories into modern legal registers.
                  </p>
                </div>
                <div>
                  <span className="font-general text-[7.5px] text-[#9E2A2B] block uppercase tracking-widest mb-1.5 font-bold">Where Debates Remain</span>
                  <p className="font-cormorant text-xs text-[#1C1C1A]/70 leading-relaxed font-light">
                    Significant debates continue regarding the exact age and structural rigidity of pre-colonial untouchability, and how much textual rules influenced lived practices vs local political dominance.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* DID YOU KNOW PANEL */}
          <Reveal className="my-12">
            <div className="border border-[#9E2A2B]/20 bg-[#9E2A2B]/5 p-6 md:p-8">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#9E2A2B] block mb-4 font-bold">
                Did You Know?
              </span>
              <ul className="list-none pl-0 space-y-3 font-cormorant text-base md:text-lg text-[#1C1C1A]/85 font-light">
                {[
                  'Thousands of Jātis have existed across the Indian subcontinent.',
                  'Different regions often organized communities differently.',
                  'Historical evidence does not suggest one perfectly uniform caste system across every kingdom and every century.',
                  'Modern scholarship continues to debate the precise historical relationship between Varṇa and Jāti.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-baseline gap-3">
                    <span className="text-[#9E2A2B] text-xs">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* MYTH VS EVIDENCE */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/30 bg-white/40 p-6 md:p-8">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Myth vs. Evidence
              </span>
              <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-1">Claim Statement</span>
                <span className="font-general text-[8.5px] uppercase tracking-wider px-2 py-0.5 border border-red-700 bg-red-700/5 text-red-700 font-bold">
                  🔴 Not Supported
                </span>
              </div>
              <h4 className="font-instrument text-xl text-[#1C1C1A] font-semibold mb-4">
                "Varṇa, Jāti and Untouchability are simply three different words for the same thing."
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/70 leading-relaxed font-light">
                Although these concepts became interconnected in many historical settings, they developed differently, appear in different contexts, and cannot be treated as perfect synonyms.
              </p>
            </div>
          </Reveal>

          {/* KEY OBSERVATIONS GRID */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Key Observations
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 select-none">
              {[
                'Varṇa is primarily a scriptural classification.',
                'Jāti developed as thousands of localized social communities.',
                'Untouchability emerged as a distinct historical practice of exclusion.',
                'The relationship between these concepts changed over time.',
                'Different regions followed different social patterns.',
                'Serious historical study requires examining each concept independently before drawing conclusions.'
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-white/20 p-5 flex items-start gap-3">
                  <span className="text-[#9E2A2B] text-xs mt-0.5">◆</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/85 leading-relaxed font-light">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* THINK ABOUT IT */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-3 font-bold">
              Think About It
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#1C1C1A]/85 leading-relaxed">
              "Can complex historical institutions be understood fairly if different concepts are merged into a single label?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/40 mx-auto mt-6" />
          </Reveal>

          {/* TRANSITION & NEXT SECTION CTA */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/75 leading-relaxed mb-6">
              Understanding historical institutions is only part of the story. Across different centuries, many philosophers, saints, social reformers, and modern thinkers re-examined these questions and reached different conclusions.
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#9E2A2B] font-semibold">
              Reformers and Modern Scholarship
            </h4>
          </Reveal>
        </section>

        {/* SECTION VIII: VOICES ACROSS HISTORY */}
        <section id="section-reformers" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION VIII • VOICES ACROSS HISTORY
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              Voices Across History
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              How did philosophers, saints and reformers understand Varṇa, Jāti and social equality?
            </p>
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-8">
              One of the defining characteristics of Indian intellectual history is continuous dialogue. Across centuries, philosophers, saints, poets and reformers revisited earlier scriptures, questioned prevailing customs and proposed new interpretations. Rather than presenting one unanimous voice, the tradition contains a wide spectrum of perspectives. Understanding this diversity is essential before drawing conclusions about Hinduism as a whole.
            </p>
          </Reveal>

          {/* INTERACTIVE TIMELINE OF THINKERS */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Chronological Spectrum of Thinkers
            </span>
            <div className="border border-[#C58B52]/25 bg-white/40 p-4 md:p-6 rounded-sm select-none">
              {/* Timeline selector */}
              <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-[#C58B52]/15 pb-6">
                {thinkersData.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveThinkerIdx(idx)}
                    className={`font-general text-[8.5px] uppercase tracking-wider px-3 py-1.5 border transition-all duration-300 ${
                      activeThinkerIdx === idx ? 'bg-[#9E2A2B] text-white border-[#9E2A2B]' : 'bg-[#F4EFE6]/50 text-[#1C1C1A]/60 border-[#C58B52]/20 hover:border-[#C58B52]/55'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>

              {/* Individual Research Card */}
              {(() => {
                const currentThinker = thinkersData[activeThinkerIdx];
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Bio and metadata */}
                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <div className="flex justify-between items-baseline mb-2">
                          <h4 className="font-instrument text-2xl md:text-3xl text-[#9E2A2B] font-bold">
                            {currentThinker.name}
                          </h4>
                          <span className="font-general text-[8px] uppercase tracking-widest text-[#1C1C1A]/40">
                            {currentThinker.era}
                          </span>
                        </div>
                        <p className="font-cormorant text-base text-[#1C1C1A]/85 leading-relaxed font-light">
                          {currentThinker.bio}
                        </p>
                      </div>

                      <div className="border-t border-[#C58B52]/15 pt-4">
                        <span className="font-general text-[7.5px] uppercase tracking-widest text-[#C58B52] block mb-1.5 font-bold">Primary Works & Contributions</span>
                        <p className="font-cormorant text-sm text-[#1C1C1A]/70 leading-relaxed font-light">
                          {currentThinker.works}
                        </p>
                      </div>

                      <div className="border-t border-[#C58B52]/15 pt-4">
                        <span className="font-general text-[7.5px] uppercase tracking-widest text-[#C58B52] block mb-1.5 font-bold">Concept of Varṇa & Social Structure</span>
                        <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                          {currentThinker.varnaView}
                        </p>
                      </div>

                      <div className="border-t border-[#C58B52]/15 pt-4">
                        <span className="font-general text-[7.5px] uppercase tracking-widest text-[#C58B52] block mb-1.5 font-bold">Spiritual Eligibility & Reform Approach</span>
                        <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light">
                          {currentThinker.reformView}
                        </p>
                      </div>
                    </div>

                    {/* Quote and influence panel */}
                    <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-[#C58B52]/20 lg:pl-8">
                      <div className="bg-[#9E2A2B]/5 p-6 border border-[#9E2A2B]/15">
                        <span className="font-general text-[7px] text-[#9E2A2B] block uppercase tracking-[0.2em] mb-3 font-bold">Key Statement</span>
                        <blockquote className="font-instrument italic text-lg text-[#1C1C1A]/85 leading-relaxed">
                          {currentThinker.quote}
                        </blockquote>
                      </div>

                      <div>
                        <span className="font-general text-[7.5px] uppercase tracking-widest text-[#C58B52] block mb-1.5 font-bold">Historical Influence</span>
                        <p className="font-cormorant text-xs md:text-sm text-[#1C1C1A]/70 leading-relaxed font-light">
                          {currentThinker.influence}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </Reveal>

          {/* COMPARISON PANEL */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Evidentiary Spectrum Matrix
            </span>
            <div className="border border-[#C58B52]/25 bg-white/40 rounded-sm overflow-hidden select-none">
              <div className="grid grid-cols-6 bg-[#F4EFE6] px-4 py-3 border-b border-[#C58B52]/25 text-left font-general text-[8.5px] uppercase tracking-wider font-bold">
                <div>Thinker</div>
                <div>Scriptural Emphasis</div>
                <div>View of Varṇa</div>
                <div>View of Jāti</div>
                <div>Social Equality</div>
                <div>Approach to Reform</div>
              </div>

              <div className="divide-y divide-[#C58B52]/15">
                {reformComparisonRows.map((row, idx) => {
                  const isExpanded = expandedReformRow === idx;
                  return (
                    <div key={idx} className="flex flex-col">
                      <div
                        onClick={() => setExpandedReformRow(isExpanded ? null : idx)}
                        className="grid grid-cols-6 px-4 py-4 cursor-pointer hover:bg-[#F4EFE6]/30 transition-colors text-left"
                      >
                        <div className="font-sans font-bold text-xs text-[#9E2A2B] flex items-center gap-1.5">
                          <span>{isExpanded ? '▼' : '▶'}</span>
                          <span>{row.thinker}</span>
                        </div>
                        <div className="font-cormorant text-xs text-[#1C1C1A]/70 truncate pr-4">{row.scripture}</div>
                        <div className="font-cormorant text-xs text-[#1C1C1A]/70 truncate pr-4">{row.varna}</div>
                        <div className="font-cormorant text-xs text-[#1C1C1A]/70 truncate pr-4">{row.jati}</div>
                        <div className="font-cormorant text-xs text-[#1C1C1A]/70 truncate pr-4">{row.equality}</div>
                        <div className="font-cormorant text-xs text-[#1C1C1A]/70 truncate pr-4">{row.reform}</div>
                      </div>

                      {isExpanded && (
                        <div className="bg-[#F4EFE6]/10 px-6 py-4 grid grid-cols-6 text-xs md:text-sm font-cormorant text-[#1C1C1A]/80 leading-relaxed font-light border-t border-b border-[#C58B52]/10">
                          <div className="font-sans text-[10px] text-[#9E2A2B] uppercase tracking-wider pt-0.5">Details</div>
                          <div className="pr-4 whitespace-pre-line">{row.scripture}</div>
                          <div className="pr-4 whitespace-pre-line">{row.varna}</div>
                          <div className="pr-4 whitespace-pre-line">{row.jati}</div>
                          <div className="pr-4 whitespace-pre-line">{row.equality}</div>
                          <div className="pr-4 whitespace-pre-line">{row.reform}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* MODERN SCHOLARSHIP */}
          <Reveal className="my-16">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2 text-center font-bold">
              ACADEMIC LANDSCAPE
            </span>
            <h3 className="font-instrument text-2xl md:text-3xl text-center text-[#1C1C1A] mb-8">
              What Do Modern Historians and Indologists Say?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start select-none">
              {/* Areas of Agreement */}
              <div className="border border-green-700/20 bg-green-700/5 p-6 rounded-sm">
                <span className="font-general text-[8.5px] uppercase tracking-widest text-green-700 block mb-4 font-bold">
                  Major Areas of Consensus
                </span>
                <ul className="list-none pl-0 space-y-4 font-cormorant text-sm md:text-base text-[#1C1C1A]/85 font-light">
                  <li>
                    <strong className="font-sans text-xs text-green-700 block mb-1">Concept Distinction</strong>
                    Varṇa (the scriptural theory) and Jāti (the lived hereditary communities) operate in different spheres and should not automatically be treated as identical synonyms.
                  </li>
                  <li>
                    <strong className="font-sans text-xs text-green-700 block mb-1">Historical Evolution</strong>
                    The Indian social structure was never static. It changed continuously across the Vedic, Classical, Medieval, and Colonial eras.
                  </li>
                  <li>
                    <strong className="font-sans text-xs text-green-700 block mb-1">Regional Diversity</strong>
                    Different regions within the subcontinent organized their social hierarchies differently, with some areas lacking specific classical Varṇas altogether.
                  </li>
                  <li>
                    <strong className="font-sans text-xs text-green-700 block mb-1">Evidentiary Complexity</strong>
                    Understanding these social institutions requires analyzing multiple textual traditions, epigraphical inscriptions, and regional historical records simultaneously.
                  </li>
                </ul>
              </div>

              {/* Areas of Disagreement */}
              <div className="border border-[#9E2A2B]/20 bg-[#9E2A2B]/5 p-6 rounded-sm">
                <span className="font-general text-[8.5px] uppercase tracking-widest text-[#9E2A2B] block mb-4 font-bold">
                  Major Areas of Ongoing Debate
                </span>
                <ul className="list-none pl-0 space-y-4 font-cormorant text-sm md:text-base text-[#1C1C1A]/85 font-light">
                  <li>
                    <strong className="font-sans text-xs text-[#9E2A2B] block mb-1">Origins of Jāti</strong>
                    Scholars continue to debate the precise timeline and processes by which tribal, occupational, and regional groups consolidated into endogamous Jātis.
                  </li>
                  <li>
                    <strong className="font-sans text-xs text-[#9E2A2B] block mb-1">Scripture vs. Lived Practice</strong>
                    Historians debate to what extent scriptural manuals (like Dharmashastras) dictated everyday social behavior versus reflecting post-facto rationalizations of local power dynamics.
                  </li>
                  <li>
                    <strong className="font-sans text-xs text-[#9E2A2B] block mb-1">Rigidity Timeline</strong>
                    There are conflicting views regarding when social hierarchy became rigidly hereditary and how much colonial codification transformed flexible practices into absolute legal categories.
                  </li>
                  <li>
                    <strong className="font-sans text-xs text-[#9E2A2B] block mb-1">Interpretation of Key Verses</strong>
                    Scholars continue to debate the translation and hermeneutic intentions of key verses in ancient texts regarding birth, duty, and spiritual access.
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* EDITORIAL NOTE */}
          <Reveal className="my-10">
            <div className="border border-[#C58B52]/20 bg-white/40 p-6 md:p-8 rounded-sm">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-4 font-bold">
                Editorial Note
              </span>
              <h4 className="font-instrument text-2xl text-[#9E2A2B] font-bold mb-4">
                Disagreement Is Part of Scholarship
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/80 leading-relaxed font-light">
                Scholarly disagreement does not necessarily indicate weak evidence. It often reflects the complexity of interpreting ancient texts, historical records, and evolving social institutions. Presenting multiple perspectives allows readers to appreciate that serious scholarship rarely produces simplistic answers.
              </p>
            </div>
          </Reveal>

          {/* COMMON CLAIMS INVESTIGATION CARDS */}
          <Reveal className="my-12">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Common Claims Under Review
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 select-none">
              {/* Claim 1 */}
              <div className="border border-[#C58B52]/25 bg-white/40 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                    <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest">Claim Statement</span>
                    <span className="font-general text-[8px] uppercase tracking-wider px-2 py-0.5 border border-red-700 bg-red-700/5 text-red-700 font-bold">
                      🔴 Not Supported
                    </span>
                  </div>
                  <h4 className="font-instrument text-lg text-[#1C1C1A] font-bold mb-4">"All Hindu thinkers defended caste."</h4>
                  <p className="font-cormorant text-xs md:text-sm text-[#1C1C1A]/75 leading-relaxed font-light">
                    Historical record shows numerous thinkers—including Basava, Kabir, Vivekananda, and Dayananda Saraswati—who actively challenged or rejected birth-based hierarchies and untouchability.
                  </p>
                </div>
              </div>

              {/* Claim 2 */}
              <div className="border border-[#C58B52]/25 bg-white/40 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                    <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest">Claim Statement</span>
                    <span className="font-general text-[8px] uppercase tracking-wider px-2 py-0.5 border border-red-700 bg-red-700/5 text-red-700 font-bold">
                      🔴 Not Supported
                    </span>
                  </div>
                  <h4 className="font-instrument text-lg text-[#1C1C1A] font-bold mb-4">"Every reformer rejected all earlier scripture."</h4>
                  <p className="font-cormorant text-xs md:text-sm text-[#1C1C1A]/75 leading-relaxed font-light">
                    While some (like Dr. Ambedkar) rejected scriptural authority, others (like Dayananda Saraswati and Vivekananda) invoked the early Vedas and Upanishads to argue that hereditary caste was a post-Vedic corruption.
                  </p>
                </div>
              </div>

              {/* Claim 3 */}
              <div className="border border-[#C58B52]/25 bg-white/40 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                    <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest">Claim Statement</span>
                    <span className="font-general text-[8px] uppercase tracking-wider px-2 py-0.5 border border-red-700 bg-red-700/5 text-red-700 font-bold">
                      🔴 Not Supported
                    </span>
                  </div>
                  <h4 className="font-instrument text-lg text-[#1C1C1A] font-bold mb-4">"Hindu thought has always spoken with one voice on caste."</h4>
                  <p className="font-cormorant text-xs md:text-sm text-[#1C1C1A]/75 leading-relaxed font-light">
                    The tradition is marked by ongoing debate and differing views, ranging from strict scriptural duty at the transactional level to the complete annihilation of hereditary classification.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* KEY OBSERVATIONS GRID */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Key Observations
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 select-none">
              {[
                'Hindu intellectual history contains multiple viewpoints.',
                'Reform movements emerged from different motivations.',
                'Philosophers interpreted scripture differently.',
                'Saints often emphasized spiritual equality.',
                'Modern scholars continue to debate historical development.',
                'Diversity of interpretation is itself part of the tradition.'
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-white/20 p-5 flex items-start gap-3">
                  <span className="text-[#9E2A2B] text-xs mt-0.5">◆</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/85 leading-relaxed font-light">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* THINK ABOUT IT */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-3 font-bold">
              Think About It
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#1C1C1A]/85 leading-relaxed">
              "Can a civilization be accurately represented by only one thinker or one interpretation?"
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/40 mx-auto mt-6" />
          </Reveal>

          {/* TRANSITION & NEXT SECTION CTA */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/75 leading-relaxed mb-6">
              The investigation has now examined language, scripture, philosophy, history and scholarship. One final task remains. Can all of this evidence answer the original claim?
            </p>
            <span className="font-general text-[7px] text-[#C58B52] block uppercase tracking-[0.25em] mb-2 font-bold">Next Phase</span>
            <h4 className="font-instrument text-2xl text-[#9E2A2B] font-semibold">
              Final Verdict
            </h4>
          </Reveal>
        </section>

        {/* SECTION IX: FINAL VERDICT */}
        <section id="section-verdict" className="py-16 border-b border-[#C58B52]/20">
          <Reveal>
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2">
              SECTION IX • CONCLUSION
            </span>
            <h2 className="font-instrument text-3xl md:text-4xl text-[#1C1C1A] mb-4">
              Final Verdict
            </h2>
            <p className="font-instrument italic text-base text-[#C58B52] mb-6">
              After examining language, scripture, history and scholarship, what conclusion does the evidence support?
            </p>
          </Reveal>

          {/* OPENING ARCHIVAL DOCUMENT */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/30 bg-white/40 p-8 md:p-12 text-center rounded-sm max-w-2xl mx-auto relative select-none">
              <span className="font-general text-[10px] uppercase tracking-[0.3em] text-[#9E2A2B] block mb-4 font-bold">
                INVESTIGATION COMPLETE
              </span>
              <div className="w-16 h-[1px] bg-[#9E2A2B]/40 mx-auto mb-6" />
              <p className="font-cormorant text-base text-[#1C1C1A]/75 leading-relaxed font-light mb-8">
                The conclusion below reflects the strongest interpretation supported by the available linguistic, scriptural, historical and scholarly evidence examined throughout this investigation.
              </p>

              {/* CLAIM PANEL */}
              <div className="bg-[#F4EFE6] p-6 border border-[#C58B52]/25 mb-6">
                <span className="font-general text-[7px] text-[#1C1C1A]/40 uppercase tracking-widest block mb-2">Claim Under Review</span>
                <h3 className="font-instrument text-xl md:text-2xl text-[#1C1C1A] font-bold">
                  "The Caste System Was Created by Hinduism."
                </h3>
              </div>

              {/* VERDICT CARD */}
              <div className="border border-[#C58B52]/30 bg-white/60 p-6 md:p-8 rounded-sm text-left">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#C58B52]/15">
                  <span className="font-general text-[8.5px] uppercase tracking-widest text-[#1C1C1A]/55 font-bold">Official Verdict</span>
                  <span className="font-general text-[9px] uppercase tracking-wider px-3 py-1 border border-[#C58B52] bg-[#C58B52]/5 text-[#C58B52] font-bold">
                    🟠 OVERSIMPLIFIED
                  </span>
                </div>

                <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/85 leading-relaxed font-light mb-6">
                  The investigation shows that the modern idea commonly described as "the caste system" cannot be attributed to a single source, a single scripture, or a single historical moment. The evidence indicates that several different factors contributed to its historical development:
                </p>

                <ul className="list-none pl-0 space-y-2.5 font-cormorant text-xs md:text-sm text-[#1C1C1A]/80 font-light">
                  <li className="flex items-baseline gap-2">
                    <span className="text-[#9E2A2B] text-xs">◆</span>
                    <span>Scriptural discussions of Varṇa</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-[#9E2A2B] text-xs">◆</span>
                    <span>Historical development of Jāti communities</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-[#9E2A2B] text-xs">◆</span>
                    <span>Regional customs and diversity</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-[#9E2A2B] text-xs">◆</span>
                    <span>Political and economic change</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-[#9E2A2B] text-xs">◆</span>
                    <span>Legal traditions (Dharmashastras)</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-[#9E2A2B] text-xs">◆</span>
                    <span>Medieval social evolution</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-[#9E2A2B] text-xs">◆</span>
                    <span>Colonial administrative classification</span>
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="text-[#9E2A2B] text-xs">◆</span>
                    <span>Modern social and political developments</span>
                  </li>
                </ul>

                <p className="font-cormorant text-xs md:text-sm text-[#1C1C1A]/70 leading-relaxed font-light mt-6 border-t border-[#C58B52]/10 pt-4">
                  Reducing this complex historical process to the statement "Hinduism created caste" does not accurately represent the evidence.
                </p>
              </div>
            </div>
          </Reveal>

          {/* WHY THIS VERDICT? (8 premium evidence cards) */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Evidentiary Summary
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 select-none">
              {[
                { title: 'Language', desc: 'The English word "caste" is not a Sanskrit term. It became a broad label applied to several different indigenous concepts.' },
                { title: 'Scripture', desc: 'Primary Hindu scriptures discuss Varṇa, but they do not present one single uniform social system.' },
                { title: 'Bhagavad Gītā', desc: 'The relevant verses continue to be interpreted differently by traditional commentators and modern scholars.' },
                { title: 'History', desc: 'Indian society changed across many centuries. Social organization evolved over time.' },
                { title: 'Jāti', desc: 'Thousands of localized communities developed across different regions. Their history is more complex than the fourfold Varṇa model.' },
                { title: 'Untouchability', desc: 'Untouchability developed as a distinct historical institution and should not automatically be treated as identical to Varṇa.' },
                { title: 'Scholarship', desc: 'Modern historians broadly agree that the relationship between scripture, Varṇa, Jāti and caste is historically complex. Many questions remain debated.' },
                { title: 'Overall', desc: 'The evidence supports a far more nuanced understanding than the popular claim suggests.' }
              ].map((card, idx) => (
                <div key={idx} className="border border-[#C58B52]/25 bg-white/40 p-5 flex flex-col justify-between">
                  <div>
                    <span className="font-general text-[8px] text-[#9E2A2B] uppercase tracking-widest block mb-2 font-bold">{card.title}</span>
                    <p className="font-cormorant text-xs md:text-sm text-[#1C1C1A]/75 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ONE-MINUTE ANSWER */}
          <Reveal className="my-12">
            <div className="border border-[#9E2A2B]/20 bg-[#9E2A2B]/5 p-6 md:p-8 max-w-xl mx-auto rounded-sm">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#9E2A2B] block mb-3 font-bold text-center">
                One-Minute Answer
              </span>
              <h4 className="font-instrument text-lg text-[#1C1C1A] font-bold text-center mb-4">
                Did Hinduism create the caste system?
              </h4>
              <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/80 leading-relaxed font-light text-center">
                The investigation suggests that the answer cannot be reduced to a simple "yes" or "no." Ancient Hindu scriptures discuss concepts such as Varṇa. Historical Indian society developed thousands of Jāti communities. Over many centuries, political, economic, regional and legal developments shaped how these institutions functioned. The modern system commonly called "caste" reflects this long historical evolution rather than one single scriptural command or one historical event.
              </p>
            </div>
          </Reveal>

          {/* WHAT WE LEARNED (8 Takeaway Cards) */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Key Lessons
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 select-none">
              {[
                'Language matters.',
                'Varṇa and Jāti are not identical concepts.',
                'Hindu scriptures are diverse rather than uniform.',
                'The Bhagavad Gītā deserves contextual reading.',
                'Social institutions evolved historically.',
                'Different thinkers interpreted the tradition differently.',
                'Modern scholarship contains both agreement and debate.',
                'Simplifying thousands of years of history into one sentence rarely produces an accurate conclusion.'
              ].map((item, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-white/20 p-5 flex items-start gap-3">
                  <span className="text-[#C58B52] text-xs mt-0.5">✓</span>
                  <p className="font-cormorant text-xs md:text-sm text-[#1C1C1A]/85 leading-relaxed font-light">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* EDITORIAL TRANSPARENCY CARD */}
          <Reveal className="my-12">
            <div className="border border-[#C58B52]/25 bg-white/40 rounded-sm overflow-hidden select-none max-w-xl mx-auto">
              <div
                onClick={() => setExpandedVerdictNote(!expandedVerdictNote)}
                className="px-6 py-4 cursor-pointer hover:bg-[#F4EFE6]/30 flex justify-between items-center transition-colors"
              >
                <h4 className="font-instrument text-base md:text-lg text-[#1C1C1A] font-bold">
                  Why TATTVA Chose "Oversimplified"
                </h4>
                <span className="text-[#9E2A2B] text-xs font-bold font-sans">
                  {expandedVerdictNote ? 'Close' : 'Expand'}
                </span>
              </div>

              {expandedVerdictNote && (
                <div className="px-6 pb-6 border-t border-[#C58B52]/10 pt-4 bg-[#F4EFE6]/20">
                  <p className="font-cormorant text-sm md:text-base text-[#1C1C1A]/75 leading-relaxed font-light">
                    This investigation deliberately avoids presenting the claim as entirely true or entirely false. Historical evidence indicates that scriptural ideas, social evolution, regional diversity, political change, and later historical developments all contributed to the institutions commonly described today as the caste system. The investigation therefore evaluates the complete historical process rather than isolated texts or isolated events.
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          {/* CONFIDENCE PANEL */}
          <Reveal className="my-16 max-w-lg mx-auto">
            <div className="border border-[#C58B52]/25 bg-white/40 p-6 md:p-8 rounded-sm select-none">
              <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
                Evidence Evaluation
              </span>

              <div className="space-y-4 font-sans text-xs text-[#1C1C1A]/80">
                {[
                  { label: 'Language Evidence', val: '★★★★★' },
                  { label: 'Scriptural Evidence', val: '★★★★★' },
                  { label: 'Historical Evidence', val: '★★★★☆' },
                  { label: 'Philosophical Evidence', val: '★★★★★' },
                  { label: 'Academic Consensus', val: '★★★★☆' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-[#C58B52]/10 pb-2">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-[#9E2A2B] tracking-widest text-sm">{item.val}</span>
                  </div>
                ))}

                <div className="flex justify-between items-center pt-4 text-sm">
                  <span className="font-bold uppercase tracking-wider text-[#C58B52]">Editorial Confidence</span>
                  <span className="font-bold text-green-700 uppercase">Very High</span>
                </div>
              </div>

              <p className="font-cormorant text-xs text-[#1C1C1A]/60 leading-relaxed font-light mt-6 text-center">
                This confidence reflects the quality and breadth of the evidence examined throughout the investigation, while acknowledging that some historical questions remain actively debated.
              </p>
            </div>
          </Reveal>

          {/* FINAL REFLECTION */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-3 font-bold">
              Final Reflection
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#1C1C1A]/85 leading-relaxed mb-6">
              "History is rarely simple. Ancient civilizations evolve. Religious traditions evolve. Societies evolve. Languages evolve. Understanding them requires patience, context and evidence rather than slogans."
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/40 mx-auto mt-8 mb-8" />
            <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light">
              When studying a civilization that has developed over thousands of years, should we judge it through a single modern label—or investigate how its ideas changed across time?
            </p>
          </Reveal>

          {/* CONTINUE EXPLORING (6 navigation cards) */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Continue Exploring
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 select-none">
              {/* Completed Case 1 */}
              <Link to="/satya-mithya/does-gita-teach-war" className="border border-[#C58B52]/25 bg-white/40 p-6 block hover:border-[#9E2A2B]/40 transition-colors group">
                <span className="font-general text-[8px] text-green-700 block uppercase tracking-widest mb-2 font-bold">Completed • Case File 001</span>
                <h4 className="font-instrument text-lg text-[#1C1C1A] font-bold group-hover:text-[#9E2A2B] transition-colors mb-2">
                  Does the Bhagavad Gītā Teach War?
                </h4>
                <p className="font-cormorant text-xs text-[#1C1C1A]/60 leading-relaxed">
                  An investigation into the context and philosophical structure of the Gita's teachings on battlefield action.
                </p>
              </Link>

              {/* Completed Case 2 */}
              <Link to="/satya-mithya/are-there-really-33-crore-gods" className="border border-[#C58B52]/25 bg-white/40 p-6 block hover:border-[#9E2A2B]/40 transition-colors group">
                <span className="font-general text-[8px] text-green-700 block uppercase tracking-widest mb-2 font-bold">Completed • Case File 002</span>
                <h4 className="font-instrument text-lg text-[#1C1C1A] font-bold group-hover:text-[#9E2A2B] transition-colors mb-2">
                  Are There Really 33 Crore Gods?
                </h4>
                <p className="font-cormorant text-xs text-[#1C1C1A]/60 leading-relaxed">
                  Exploring Vedic grammar, translation history, and the evolution of the term 'Koti'.
                </p>
              </Link>

              {/* Completed Case 3 */}
              <Link to="/satya-mithya/hinduism-worships-idols" className="border border-[#C58B52]/25 bg-white/40 p-6 block hover:border-[#9E2A2B]/40 transition-colors group">
                <span className="font-general text-[8px] text-green-700 block uppercase tracking-widest mb-2 font-bold">Completed • Case File 003</span>
                <h4 className="font-instrument text-lg text-[#1C1C1A] font-bold group-hover:text-[#9E2A2B] transition-colors mb-2">
                  Hinduism Worships Idols?
                </h4>
                <p className="font-cormorant text-xs text-[#1C1C1A]/60 leading-relaxed">
                  Investigating translation filters, Sanskrit terminology, and the theology of Murti worship.
                </p>
              </Link>

              {/* Coming Soon Case 1 */}
              <div className="border border-[#C58B52]/15 bg-white/10 p-6 opacity-60">
                <span className="font-general text-[8px] text-[#1C1C1A]/40 block uppercase tracking-widest mb-2">Coming Soon • Case File 005</span>
                <h4 className="font-instrument text-lg text-[#1C1C1A] font-bold mb-2">
                  Does Karma Mean Everything Is Predetermined?
                </h4>
                <p className="font-cormorant text-xs text-[#1C1C1A]/60 leading-relaxed">
                  Analyzing Purushartha, free will, and the dynamic causality of action in Hindu philosophy.
                </p>
              </div>

              {/* Coming Soon Case 2 */}
              <div className="border border-[#C58B52]/15 bg-white/10 p-6 opacity-60">
                <span className="font-general text-[8px] text-[#1C1C1A]/40 block uppercase tracking-widest mb-2">Coming Soon • Case File 006</span>
                <h4 className="font-instrument text-lg text-[#1C1C1A] font-bold mb-2">
                  Are the Rāmāyaṇa and Mahābhārata Just Mythology?
                </h4>
                <p className="font-cormorant text-xs text-[#1C1C1A]/60 leading-relaxed">
                  Investigating the genre of Itihasa, narrative structures, and historical memory.
                </p>
              </div>

              {/* Coming Soon Case 3 */}
              <div className="border border-[#C58B52]/15 bg-white/10 p-6 opacity-60">
                <span className="font-general text-[8px] text-[#1C1C1A]/40 block uppercase tracking-widest mb-2">Coming Soon • Case File 007</span>
                <h4 className="font-instrument text-lg text-[#1C1C1A] font-bold mb-2">
                  Did the Ṛgveda Say Viṣṇu Created the Universe?
                </h4>
                <p className="font-cormorant text-xs text-[#1C1C1A]/60 leading-relaxed">
                  Tracing cosmological hymns, Vedic deities, and the evolution of the Vaishnava tradition.
                </p>
              </div>
            </div>
          </Reveal>

          {/* KNOWLEDGE CONNECTIONS */}
          <Reveal className="my-16">
            <span className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52] block mb-6 text-center font-bold">
              Knowledge Connections
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 select-none">
              {[
                { title: 'Creation (Sṛṣṭi)', link: '/library/creation', note: 'Relates to cosmic models and Purusha Sukta metaphors.' },
                { title: 'Time in Sanātana Dharma', link: '/library/time', note: 'Traces the chronological periods of historical change.' },
                { title: 'Structure of the Universe', link: '/library/cosmology', note: 'Provides context for early organic hierarchy analogies.' },
                { title: 'Dharma', link: '/library/dharma', note: 'Explores the foundational concept of righteousness and duty.' },
                { title: 'Karma', link: '/library/karma', note: 'Explains the actions that govern individual qualities (Guṇa).' },
                { title: 'Bhagavad Gītā', link: '/library/gita', note: 'Analyses the central verses on Varṇa and Svadharma.' },
                { title: 'Vedas', link: '/library/vedas', note: 'Investigates the earliest layers of social framework hymnal records.' }
              ].map((item, idx) => (
                <Link key={idx} to={item.link} className="border border-[#C58B52]/20 bg-white/40 p-4 block hover:border-[#9E2A2B]/40 transition-all text-center group">
                  <h5 className="font-instrument text-xs md:text-sm text-[#1C1C1A] font-bold group-hover:text-[#9E2A2B] transition-colors mb-1.5">{item.title}</h5>
                  <p className="font-cormorant text-[10px] text-[#1C1C1A]/65 leading-snug">{item.note}</p>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

      </div>
    </div>
  );
}
