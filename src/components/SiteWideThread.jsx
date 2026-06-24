import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const YUGA_NODES = [
  {
    id: 'satya',
    name: 'Satya Yuga',
    duration: '1,728,000 years',
    x: 85,
    y: 72,
    events: [
      { 
        id: 'matsya-avatar', 
        name: 'Matsya Avatāra', 
        subtitle: 'The Preservation of Sacred Knowledge',
        narrative: 'During the cosmic dissolution (Pralaya), Bhagavān Viṣṇu manifested as Matsya Avatāra to protect the Vedas and guide King Satyavrata through the flood that marked the end of a cosmic cycle. The king was instructed to gather sages, seeds, and living beings within a great vessel. Matsya then guided the vessel through the waters until creation could begin anew.',
        significance: 'Matsya Avatāra symbolizes divine guidance during periods of chaos and transition. The narrative teaches that sacred knowledge survives even when entire worlds dissolve, and that dharma remains protected by Bhagavān across all cycles of creation.',
        sources: ['Matsya Purāṇa', 'Śrīmad Bhāgavatam 8.24', 'Mahābhārata Śānti Parva'] 
      },
      { 
        id: 'kurma-avatar', 
        name: 'Kūrma Avatāra', 
        subtitle: 'The Foundation of Cosmic Churning',
        narrative: 'When the devas and asuras united to churn the ocean of milk (Samudra Manthana) for the nectar of immortality (Amṛta), they used Mount Mandara as the churning rod. As the mountain began to sink into the ocean floor, Viṣṇu incarnated as a massive tortoise, Kūrma, to support the mountain on his impenetrable shell, allowing the churning to continue.',
        significance: 'Kūrma Avatāra represents absolute stability and the foundational support required for spiritual endeavor. It illustrates that the quest for divine nectar (immortality and truth) demands an unshakeable base, provided only by the grace of the Supreme.',
        sources: ['Kūrma Purāṇa', 'Śrīmad Bhāgavatam 8.7', 'Viṣṇu Purāṇa 1.9'] 
      },
      { 
        id: 'varaha-avatar', 
        name: 'Varāha Avatāra', 
        subtitle: 'The Rescue of the Earth',
        narrative: 'When the demon Hiraṇyākṣa dragged the earth goddess (Bhūdevī) into the depths of the cosmic ocean, Viṣṇu assumed the form of a magnificent boar, Varāha. Plunging into the dark waters, Varāha engaged in a cataclysmic battle with the demon, ultimately slaying him and lifting the earth safely upon his massive tusks, restoring her to her rightful orbit.',
        significance: 'Varāha Avatāra demonstrates the fierce protective nature of the Divine toward creation. It is a powerful allegory for the upliftment of the soul and the material world from the dark depths of ignorance (avidyā) back into the light of dharma.',
        sources: ['Varāha Purāṇa', 'Śrīmad Bhāgavatam 3.13', 'Taittirīya Saṃhitā'] 
      },
      { 
        id: 'narasimha-avatar', 
        name: 'Narasiṁha Avatāra', 
        subtitle: 'The Fierce Protector of Devotion',
        narrative: 'The tyrant Hiraṇyakaśipu obtained a boon making him nearly invincible, unable to be killed by man or beast, inside or outside, by day or night. To protect his greatest devotee, the child Prahlāda, Viṣṇu burst forth from a pillar as Narasiṁha—half-man, half-lion. At twilight, upon the threshold of a courtyard, he vanquished the tyrant, perfectly satisfying the conditions of the boon.',
        significance: 'Narasiṁha embodies the terrifying yet profoundly compassionate aspect of the Divine. It proves that Bhagavān is omnipresent—existing even within inanimate pillars—and will transcend all natural laws to protect a true bhakta (devotee).',
        sources: ['Viṣṇu Purāṇa', 'Śrīmad Bhāgavatam 7.8', 'Narasiṁha Purāṇa'] 
      },
      { 
        id: 'prahlada', 
        name: 'Prahlāda', 
        subtitle: 'The Embodiment of Unshakeable Devotion',
        narrative: 'Born to the greatest enemy of the devas, the child Prahlāda was instinctively devoted to Nārāyaṇa. Despite enduring extreme torture, assassination attempts, and psychological warfare from his own father, Hiraṇyakaśipu, Prahlāda remained completely serene. He constantly perceived the presence of Nārāyaṇa everywhere, turning poisons to nectar and fire to a cooling breeze.',
        significance: 'Prahlāda represents the zenith of Śuddha Bhakti (pure devotion). His life establishes that spiritual enlightenment and divine grace are entirely independent of lineage, circumstance, or external environment, depending solely on inner surrender.',
        sources: ['Śrīmad Bhāgavatam 7.4', 'Viṣṇu Purāṇa 1.15'] 
      }
    ]
  },
  {
    id: 'treta',
    name: 'Treta Yuga',
    duration: '1,296,000 years',
    x: 75,
    y: 80,
    events: [
      { 
        id: 'vamana-avatar', 
        name: 'Vāmana Avatāra', 
        subtitle: 'The Divine Beggar Reclaiming the Worlds',
        narrative: 'Daitya-rāja Bali became ruler of the three worlds through his power and sacrifice. To restore cosmic balance, Bhagavān Viṣṇu appeared as Vāmana, a young brāhmaṇa dwarf. During Bali\'s great sacrifice, Vāmana requested three steps of land. He then expanded into a cosmic form, covering earth and heaven in two steps. Bali offered his own head for the third step and was granted Sutala-loka while retaining divine favor.',
        sources: ['Śrīmad Bhāgavatam Skandha 8', 'Viṣṇu Purāṇa', 'Vāmana Purāṇa'] 
      },
      { 
        id: 'parashurama-avatar', 
        name: 'Paraśurāma Avatāra', 
        subtitle: 'The Warrior Sage Cleansing Corruption',
        narrative: 'Bhagavān Viṣṇu appeared as Paraśurāma, son of Maharṣi Jamadagni and Reṇukā. During this age many kṣatriya rulers had become oppressive and abandoned dharma. After the murder of his father, Paraśurāma launched campaigns against corrupt rulers. Scriptures describe him restoring balance between spiritual authority and political power. Unlike many avatāras, Paraśurāma continues to appear in later Yuga narratives.',
        sources: ['Mahābhārata', 'Viṣṇu Purāṇa', 'Śrīmad Bhāgavatam'] 
      },
      { 
        id: 'hanuman-janma', 
        name: 'Hanumān Janma', 
        subtitle: 'The Birth of Rudra\'s Incarnation',
        narrative: 'Hanumān was born to Añjanā and Kesari through the blessings of Vāyu Deva. From childhood he displayed extraordinary strength and divine abilities. Ancient accounts describe him leaping toward the Sun, mistaking it for a fruit. Various devas granted him blessings and protections. Hanumān would later become the greatest ally of Śrī Rāma and a central figure of the Rāmāyaṇa.',
        sources: ['Vālmīki Rāmāyaṇa', 'Various Purāṇas'] 
      },
      { 
        id: 'sri-rama-janma', 
        name: 'Śrī Rāma Janma', 
        subtitle: 'The Descent of the Perfect Sovereign',
        narrative: 'King Daśaratha performed the Putrakāmeṣṭi Yajña seeking heirs. As a result, Rāma, Bharata, Lakṣmaṇa, and Śatrughna were born. Śrī Rāma grew under the guidance of Sage Vasiṣṭha and later accompanied Sage Viśvāmitra to protect sacred rituals. His early life culminated in the breaking of Lord Śiva\'s bow and marriage to Sītā Devī.',
        sources: ['Vālmīki Rāmāyaṇa', 'Adhyātma Rāmāyaṇa'] 
      },
      { 
        id: 'ramayana', 
        name: 'Rāmāyaṇa', 
        subtitle: 'The Eternal Epic of Dharma',
        narrative: 'The Rāmāyaṇa narrates the life and journey of Śrī Rāma. Following fourteen years of exile, Sītā Devī was abducted by Rāvaṇa, ruler of Laṅkā. Hanumān discovered her location and carried Rāma\'s message across the ocean. A great alliance was formed and a bridge to Laṅkā was constructed. The resulting war ended with the defeat of Rāvaṇa and the return of Rāma to Ayodhyā, where Rāma-rājya was established.',
        sources: ['Vālmīki Rāmāyaṇa', 'Adhyātma Rāmāyaṇa'] 
      },
      { 
        id: 'lava-kusha-janma', 
        name: 'Lava-Kuśa Janma', 
        subtitle: 'The Birth of the Twin Heirs',
        narrative: 'Lava and Kuśa were born in the āśrama of Maharṣi Vālmīki. They received education in scriptures, warfare, and sacred traditions. Under Vālmīki\'s guidance they learned the Rāmāyaṇa and became its earliest reciters. Their story forms one of the concluding chapters of the Treta Yuga narrative and preserves the legacy of Śrī Rāma for future generations.',
        sources: ['Uttara Kāṇḍa', 'Vālmīki Rāmāyaṇa'] 
      }
    ]
  },
  {
    id: 'dvapara',
    name: 'Dvapara Yuga',
    duration: '864,000 years',
    x: 85,
    y: 88,
    events: [
      { 
        id: 'mahabharata', 
        name: 'Mahābhārata', 
        subtitle: 'The Great Epic of Lineage and Duty',
        narrative: 'The longest epic poem ever written, the Mahābhārata details the intense dynastic struggle between the Pāṇḍava and Kaurava cousins for the throne of Hastināpura. Woven with profound philosophical discourses, complex moral dilemmas, and intricate statecraft, it captures the entirety of human experience, culminating in the devastating Kurukṣetra war.',
        significance: 'As the "fifth Veda," the Mahābhārata states: "What is found here may be found elsewhere, but what is not found here is found nowhere." It is the ultimate exploration of dharma in its most ambiguous, conflicting, and realistic forms.',
        sources: ['Vyāsa Mahābhārata'] 
      },
      { 
        id: 'bhagavad-gita', 
        name: 'Bhagavad Gītā', 
        subtitle: 'The Ultimate Discourse on Action and Liberation',
        narrative: 'Spoken on the precipice of a devastating war, the Bhagavad Gītā is a dialogue between the despondent warrior Arjuna and his charioteer, Śrī Kṛṣṇa. Over eighteen chapters, Kṛṣṇa dispels Arjuna\'s grief by revealing the immortal nature of the soul, the cosmic structure of the universe, and the paths of knowledge (Jñāna), action (Karma), and devotion (Bhakti).',
        significance: 'The Gītā is the spiritual synthesis of Vedic thought. It teaches that one can attain supreme liberation not by abandoning the world, but by performing one\'s duties with a detached, dedicated mind, offering all outcomes to the Divine.',
        sources: ['Mahābhārata (Bhīṣma Parva)'] 
      },
      { 
        id: 'sri-krishna', 
        name: 'Śrī Kṛṣṇa', 
        subtitle: 'The Supreme Architect of Cosmic Balance',
        narrative: 'Unlike previous Avatāras who operated within boundaries, Śrī Kṛṣṇa is Pūrṇāvatāra—the complete, unbounded manifestation of the Supreme. From his enchanting childhood pastimes in Vṛndāvana to his role as a master diplomat, warrior, and spiritual guide in Dvārakā, Kṛṣṇa navigated the extreme complexities of the changing age, orchestrating the re-establishment of dharma.',
        significance: 'Śrī Kṛṣṇa represents the ultimate synthesis of love and law. He demonstrates that divinity is deeply intimate, accessible through pure love (mādhurya bhava), yet simultaneously the supreme intellect governing the mechanics of the cosmos.',
        sources: ['Śrīmad Bhāgavatam Canto 10', 'Mahābhārata', 'Harivaṃśa'] 
      },
      { 
        id: 'kurukshetra-war', 
        name: 'Kurukṣetra War', 
        subtitle: 'The Battlefield of Dharma Versus Adharma',
        narrative: 'The catastrophic eighteen-day war at Kurukṣetra involved millions of warriors and the greatest kings of the era. It was a crucible of moral testing where loyalties were divided, ancient oaths were broken, and the cost of righteousness was measured in blood. Guided by Kṛṣṇa, the Pāṇḍavas emerged victorious, but the victory was heavily steeped in sorrow.',
        significance: 'Kurukṣetra is both a historical event and an eternal psychological metaphor. It represents the perpetual inner conflict between righteous tendencies and egoistic desires within the human heart, demanding the ruthless sacrifice of lower attachments for higher truth.',
        sources: ['Mahābhārata (Various Parvas)'] 
      }
    ]
  },
  {
    id: 'kali',
    name: 'Kali Yuga',
    duration: '432,000 years',
    x: 75,
    y: 96,
    events: [
      { 
        id: 'kali-yuga-start', 
        name: 'Beginning of Kali Yuga', 
        subtitle: 'The Onset of the Dark Age',
        narrative: 'With the physical departure of Śrī Kṛṣṇa to his eternal abode, the protective spiritual canopy over the earth receded, marking the official beginning of Kali Yuga. This age is characterized by a rapid decline in truth, compassion, austerity, and purity. Materialism, conflict, and spiritual ignorance become the dominant forces guiding human civilization.',
        significance: 'While Kali Yuga is the age of darkness, it offers a unique spiritual advantage: because the environment is so adverse, spiritual progress requires vastly less effort. A single moment of sincere devotion in Kali Yuga yields the same result as centuries of meditation in Satya Yuga.',
        sources: ['Śrīmad Bhāgavatam 1.15', 'Viṣṇu Purāṇa 4.24'] 
      },
      { 
        id: 'dharma-preservation', 
        name: 'Preservation of Dharma', 
        subtitle: 'The Silent Continuity of the Sacred',
        narrative: 'As societal structures and spiritual institutions degrade, dharma survives not through empires, but through the quiet, unbroken transmission of knowledge. Sages, scholars, and unseen masters carefully preserve the Vedas, the Upaniṣads, and sacred traditions, passing them down through rigorous lineages (Paramparā) hidden amidst the chaos of the world.',
        significance: 'This continuous preservation guarantees that the eternal truth (Sanātana Dharma) cannot be extinguished. It emphasizes that true spiritual power does not rely on external validation, existing robustly in the hearts and minds of dedicated practitioners.',
        sources: ['Manusmṛti', 'Various Āgamas and Tantras'] 
      },
      { 
        id: 'bhakti-movement', 
        name: 'Bhakti Movement', 
        subtitle: 'The Rise of Absolute, Ecstatic Devotion',
        narrative: 'As complex rituals and deep philosophical study became inaccessible to the masses in the dark age, a massive spiritual revolution swept across the subcontinent. Saints, mystics, and poets bypassed institutional religion entirely, demonstrating that God is realized immediately through pure, ecstatic love. They sang, danced, and composed profound poetry in vernacular languages.',
        significance: 'The Bhakti movement democratized salvation. It proved that liberation (Mokṣa) is independent of caste, gender, or scholarly qualification, relying entirely on the intensity of one\'s emotional connection (Bhāva) to the Divine.',
        sources: ['Padma Purāṇa', 'Works of the Āḻvārs and Nāyaṉmārs', 'Caitanya Caritāmṛta'] 
      },
      { 
        id: 'current-age', 
        name: 'Current Age', 
        subtitle: 'The Epoch of Rapid Spiritual Decline',
        narrative: 'We are currently situated within the first few millennia of Kali Yuga. While technological and material advancements reach unprecedented heights, the internal spiritual condition of humanity continues to fragment. Attention spans shorten, authentic truth becomes difficult to discern, and society grows increasingly disconnected from the natural and divine orders.',
        significance: 'The current era tests the individual soul\'s resolve. Amidst endless distraction and illusion (Māyā), the conscious choice to seek inner stillness and connect with the eternal becomes an act of profound spiritual rebellion and clarity.',
        sources: ['Śrīmad Bhāgavatam Canto 12', 'Liṅga Purāṇa'] 
      },
      { 
        id: 'kalki-avatar', 
        name: 'Kalki Avatāra', 
        subtitle: 'The Prophesied Restorer of the Golden Age',
        narrative: 'As Kali Yuga reaches its absolute nadir, when dharma is entirely forgotten and humanity descends into complete barbarism, it is prophesied that Bhagavān will descend for the final time in this cycle as Kalki. Riding a brilliant white horse and wielding a blazing sword, he will obliterate the corrupt order, cleanse the earth, and re-establish the pristine purity of Satya Yuga.',
        significance: 'Kalki represents the inevitable cosmic reset. His arrival promises that evil and ignorance are strictly temporary anomalies within the vast spans of time, and that the divine order will always brutally correct the imbalance to birth a new era of truth.',
        sources: ['Kalki Purāṇa', 'Śrīmad Bhāgavatam 12.2', 'Viṣṇu Purāṇa 4.24'] 
      }
    ]
  }
];

// Internal mapping for event images
const IMAGE_MAPPING = {
  'Matsya Avatāra': 'matsya-avatar.webp',
  'Kūrma Avatāra': 'kurma-avatar.webp',
  'Varāha Avatāra': 'varaha-avatar.webp',
  'Narasiṁha Avatāra': 'narasimha-avatar.webp',
  'Prahlāda': 'prahlada.webp',
  'Vāmana Avatāra': 'Vāmana Avatāra.png',
  'Paraśurāma Avatāra': 'Paraśurāma Avatāra.png',
  'Hanumān Janma': 'Hanumān Janma.png',
  'Śrī Rāma Janma': 'Śrī Rāma Janma.png',
  'Rāmāyaṇa': 'Rāmāyaṇa.png',
  'Lava-Kuśa Janma': 'Lava-Kuśa Janma.png'
};

// Power3 easing
const EASE_POWER3 = [0.215, 0.61, 0.355, 1];

function EventItem({ event, isActive, onHoverStart, onHoverEnd }) {
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      const panelWidth = Math.min(window.innerWidth * 0.35, 500); // Max 500px, 35vw
      const panelLeft = window.innerWidth * 0.08; 
      const panelRightEdge = panelLeft + panelWidth;
      
      const gapToCard = 40; 
      const gapToText = 24; 

      const lineLeft = panelRightEdge + gapToCard;
      const lineRight = rect.left - gapToText;
      const lineWidth = Math.max(0, lineRight - lineLeft);

      onHoverStart({
        event,
        centerY: rect.top + (rect.height / 2),
        panelLeft,
        panelWidth,
        lineLeft,
        lineWidth
      });
    }
  };

  return (
    <div 
      className="flex flex-col items-end cursor-pointer group w-full relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onHoverEnd}
    >
      <span 
        ref={textRef}
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontSize: '1.4rem',
          color: isActive ? '#C58B52' : '#1A1A1A',
          lineHeight: 1.2,
          transition: 'color 0.4s ease'
        }}
      >
        {event.name}
      </span>
    </div>
  );
}

export function SiteWideThread() {
  const containerRef = useRef(null);
  const beginningRef = useRef(null);
  const [dim, setDim] = useState({ w: 0, h: 0, startY: 0 });

  const { scrollYProgress } = useScroll();
  const [activeNodes, setActiveNodes] = useState({});
  const [hoveredYuga, setHoveredYuga] = useState(null);
  
  // Global state for the active hovered incident
  const [activeIncident, setActiveIncident] = useState(null);
  const [imgError, setImgError] = useState(false);

  // Reset image error when incident changes
  useEffect(() => {
    setImgError(false);
  }, [activeIncident?.event?.id]);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const updateDimensions = () => {
      if (!containerRef.current || !beginningRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dotRect = beginningRef.current.getBoundingClientRect();
      
      const relativeY = (dotRect.top - rect.top) + (dotRect.height / 2);

      setDim({
        w: rect.width,
        h: rect.height,
        startY: relativeY
      });
    };

    const obs = new ResizeObserver(updateDimensions);
    obs.observe(containerRef.current);
    updateDimensions();

    return () => obs.disconnect();
  }, []);

  const pathD = useMemo(() => {
    if (dim.w === 0 || dim.h === 0) return '';
    const px = (x) => (x / 100) * dim.w;
    const py = (y) => (y / 100) * dim.h;
    
    return `
      M ${px(85)} ${dim.startY} 
      C ${px(85)} ${py(20)}, ${px(75)} ${py(35)}, ${px(75)} ${py(50)} 
      C ${px(75)} ${py(60)}, ${px(85)} ${py(65)}, ${px(85)} ${py(72)}
      C ${px(85)} ${py(75)}, ${px(75)} ${py(77)}, ${px(75)} ${py(80)}
      C ${px(75)} ${py(83)}, ${px(85)} ${py(85)}, ${px(85)} ${py(88)}
      C ${px(85)} ${py(91)}, ${px(75)} ${py(93)}, ${px(75)} ${py(96)}
    `;
  }, [dim.w, dim.h, dim.startY]);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setActiveNodes({
      satya: latest >= 0.72,
      treta: latest >= 0.80,
      dvapara: latest >= 0.88,
      kali: latest >= 0.96
    });
  });

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-[100] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* GLOBAL KNOWLEDGE ARCHIVE PANEL */}
      <AnimatePresence>
        {activeIncident && (
          <div className="fixed inset-0 pointer-events-none z-[200]">
            
            {/* The Connecting Line */}
            <motion.div 
              className="absolute h-[1px] bg-[#C58B52]"
              style={{ 
                left: activeIncident.lineLeft, 
                top: activeIncident.centerY,
                width: activeIncident.lineWidth,
                transformOrigin: 'right' 
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.8, ease: EASE_POWER3 }}
            />

            {/* The Dedicated Left Panel */}
            <div 
              className="absolute transform -translate-y-1/2"
              style={{ 
                left: activeIncident.panelLeft, 
                top: activeIncident.centerY, 
                width: activeIncident.panelWidth 
              }}
            >
              <div className="w-full text-left relative flex flex-col max-h-[85vh] overflow-y-auto pr-4 pointer-events-auto custom-scrollbar">
                 
                 {/* Image Fade & Blur */}
                 <div className="w-full min-h-[220px] aspect-[4/3] mb-6 overflow-hidden border border-[#C58B52]/20 shrink-0 relative bg-[#E9E2D4]">
                   <AnimatePresence mode="wait">
                     <motion.div 
                        key={activeIncident.event.id}
                        initial={{ opacity: 0, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, filter: 'blur(8px)' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute inset-0"
                     >
                        {!imgError ? (
                          <img 
                            src={encodeURI(`/${IMAGE_MAPPING[activeIncident.event.name] || activeIncident.event.name + '.jpg'}`)} 
                            alt={activeIncident.event.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              console.error('Failed to load image:', e.target.src);
                              setImgError(true);
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="font-instrument italic text-[#C58B52]/50 text-xl">Archive Entry Missing</span>
                          </div>
                        )}
                     </motion.div>
                   </AnimatePresence>
                 </div>

                 {/* Title, Subtitle, Narrative, Sources */}
                 <AnimatePresence mode="wait">
                   <motion.div
                      key={activeIncident.event.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="flex flex-col shrink-0"
                   >
                     {/* Title and Subtitle */}
                     <div className="mb-6">
                        <h3 className="font-instrument text-4xl text-[#1A1A1A] leading-none mb-2 tracking-tight">
                          {activeIncident.event.name}
                        </h3>
                        <span className="block font-general text-[10px] tracking-widest uppercase text-[#C58B52]">
                          {activeIncident.event.subtitle}
                        </span>
                     </div>

                     {/* Detailed Narrative */}
                     <div className="mb-6">
                        <p className="font-cormorant text-[1.2rem] font-light text-[#333333] leading-relaxed">
                          {activeIncident.event.narrative}
                        </p>
                     </div>

                     {/* Sources */}
                     <div className="border-t border-[#C58B52]/20 pt-6 mt-2 pb-8">
                        <h4 className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] mb-3">Scriptural Sources</h4>
                        <ul className="flex flex-col gap-1">
                          {activeIncident.event.sources.map((src, i) => (
                            <li key={i} className="font-instrument text-lg text-[#1A1A1A]">{src}</li>
                          ))}
                        </ul>
                     </div>
                   </motion.div>
                 </AnimatePresence>




              </div>
            </div>

          </div>
        )}
      </AnimatePresence>


      {dim.w > 0 && dim.h > 0 && (
        <svg 
          width={dim.w} 
          height={dim.h} 
          className="absolute inset-0"
        >
          <motion.path
            d={pathD}
            fill="none"
            stroke="#C58B52"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              pathLength: smoothProgress,
              filter: 'drop-shadow(0px 0px 6px rgba(197,139,82,0.9))'
            }}
          />
        </svg>
      )}

      {/* BEGINNING ORIGIN */}
      <div 
        ref={beginningRef}
        className="absolute"
        style={{ top: 'clamp(5rem, 10vw, 8rem)', left: '85%', transform: 'translate(-50%, -50%)' }} 
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute right-6 flex flex-col items-end pt-1 whitespace-nowrap">
            <span 
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '9px',
                letterSpacing: '0.4em',
                color: '#C58B52',
                textTransform: 'uppercase'
              }}
            >
              Beginning
            </span>
            <span
              style={{
                fontFamily: 'Cormorant, serif',
                fontSize: '12px',
                fontStyle: 'italic',
                color: '#666666'
              }}
            >
              The search begins.
            </span>
          </div>

          <div className="relative w-[10px] h-[10px] flex items-center justify-center">
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-[-10px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(197,139,82,0.4) 0%, transparent 70%)' }}
            />
            <div 
              className="w-[5px] h-[5px] rounded-full relative z-10"
              style={{ 
                backgroundColor: '#C58B52',
                boxShadow: '0 0 10px rgba(197,139,82,1)'
              }}
            />
          </div>
        </div>
      </div>

      {/* TIMELINE NODES AND ANNOTATION HUBS */}
      {YUGA_NODES.map((node) => {
        const isActive = activeNodes[node.id];
        // The node is considered active if we are hovering any of its incidents, or hovering the node itself
        const isNodeHovered = hoveredYuga === node.id || (activeIncident && YUGA_NODES.find(n => n.events.includes(activeIncident.event))?.id === node.id);
        const isDimmed = (hoveredYuga !== null || activeIncident !== null) && !isNodeHovered;

        return (
          <div
            key={node.id}
            className="absolute pointer-events-auto"
            style={{
              top: `${node.y}%`,
              left: `${node.x}%`,
            }}
            onMouseEnter={() => setHoveredYuga(node.id)}
            onMouseLeave={() => setHoveredYuga(null)}
          >
            {/* The Mathematical Node exactly on the path */}
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="relative w-[16px] h-[16px] flex items-center justify-center">
                {/* Active Halo Pulse - Intensifies on hover */}
                <motion.div
                  animate={{
                    scale: isActive ? (isNodeHovered ? [1, 1.8, 1] : [1, 1.6, 1]) : 0,
                    opacity: isActive ? (isNodeHovered ? [0.7, 1, 0.7] : [0.6, 0.9, 0.6]) : 0
                  }}
                  transition={{
                    duration: isActive ? (isNodeHovered ? 1.5 : 2.5) : 0.4,
                    ease: "easeInOut",
                    repeat: isActive ? Infinity : 0
                  }}
                  className="absolute inset-[-12px] rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(197,139,82,0.5) 0%, transparent 70%)' }}
                />
                
                {/* Physical Dot */}
                <motion.div
                  animate={{ 
                    scale: isActive ? 1.4 : 1,
                    backgroundColor: isActive ? '#C58B52' : 'transparent',
                    borderColor: isActive ? '#C58B52' : 'rgba(197,139,82,0.4)',
                    boxShadow: isActive ? '0 0 12px rgba(197,139,82,1)' : 'none'
                  }}
                  transition={{ duration: 0.6, ease: EASE_POWER3 }}
                  className="w-[6px] h-[6px] rounded-full relative z-10 border"
                />
              </div>
            </div>

            {/* Editorial Annotation Bracket & Event List */}
            <motion.div 
              animate={{ opacity: isDimmed ? 0.2 : 1 }}
              transition={{ duration: 0.8, ease: EASE_POWER3 }}
              className="absolute right-[30px] top-0 transform -translate-y-1/2 pr-[24px] w-[300px] flex flex-col items-end gap-6 border-r border-[#C58B52]/30"
            >
              {/* Horizontal Connector Line pointing to the dot */}
              <div className="absolute right-[-30px] top-1/2 w-[30px] h-[1px] bg-[#C58B52]/30" />

              {/* Yuga Title */}
              <div className="flex flex-col items-end">
                <span 
                  style={{
                    fontFamily: '"General Sans", sans-serif',
                    fontSize: '9.5px',
                    fontWeight: 500,
                    letterSpacing: '0.5em',
                    textTransform: 'uppercase',
                    color: '#BA7A3A',
                    marginBottom: '4px'
                  }}
                >
                  {node.duration}
                </span>
                <h3
                  style={{
                    fontFamily: 'Cormorant, serif',
                    fontSize: '2.5rem',
                    fontWeight: 300,
                    lineHeight: 1,
                    color: isActive ? '#0A0A0A' : '#666666',
                    letterSpacing: '-0.02em',
                    transition: 'color 1s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {node.name}
                </h3>
              </div>

              {/* Event List */}
              <div className="flex flex-col items-end gap-3 w-full">
                {node.events.map((evt, i) => (
                  <EventItem 
                    key={i} 
                    event={evt} 
                    isActive={activeIncident?.event?.id === evt.id}
                    onHoverStart={setActiveIncident}
                    onHoverEnd={() => setActiveIncident(null)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
