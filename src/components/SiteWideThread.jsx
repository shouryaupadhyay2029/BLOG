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
        id: 'sri-krishna-janma', 
        name: 'Śrī Kṛṣṇa Janma', 
        subtitle: 'The Descent of the Supreme Architect',
        narrative: 'Śrī Kṛṣṇa, the eighth avatāra of Bhagavān Viṣṇu, was born to Devakī and Vasudeva in the prison of Mathurā during the reign of King Kaṁsa. A divine prophecy foretold that Devakī\'s eighth son would end Kaṁsa\'s tyranny. On the night of His birth, Vasudeva carried the newborn across the Yamunā River to Gokula, where He was raised by Nanda Mahārāja and Yaśodā, ensuring His safety while fulfilling the divine plan.',
        sources: ['Śrīmad Bhāgavatam (Skandha 10)', 'Harivaṁśa', 'Viṣṇu Purāṇa'] 
      },
      { 
        id: 'childhood-krishna', 
        name: 'Childhood of Śrī Kṛṣṇa', 
        subtitle: 'The Divine Pastimes in Vṛndāvana',
        narrative: 'During His childhood in Gokula and Vṛndāvana, Śrī Kṛṣṇa performed many celebrated līlās. He protected the people from numerous dangers by defeating demons such as Pūtanā, Tṛṇāvarta, Bakāsura and Aghāsura. He subdued Kāliya in the Yamunā River and lifted Govardhana Hill to shelter the people of Vraja from Indra\'s storm. These events established Him as the divine protector of Vraja while revealing His extraordinary nature.',
        sources: ['Śrīmad Bhāgavatam (Skandha 10)', 'Harivaṁśa', 'Viṣṇu Purāṇa'] 
      },
      { 
        id: 'mahabharata', 
        name: 'Mahābhārata', 
        subtitle: 'The Great Epic of Lineage and Duty',
        narrative: 'The Mahābhārata recounts the conflict between the Pāṇḍavas and the Kauravas over the rightful rule of Hastināpura. Years of political rivalry, exile, broken agreements and failed peace negotiations culminated in the Kurukṣetra War. Guided by Śrī Kṛṣṇa, the Pāṇḍavas ultimately prevailed, restoring lawful rule and bringing one of the greatest epics of Sanātana Dharma to its conclusion.',
        sources: ['Mahābhārata', 'Harivaṁśa'] 
      },
      { 
        id: 'bhagavad-gita', 
        name: 'Bhagavad Gītā', 
        subtitle: 'The Ultimate Discourse on Action and Liberation',
        narrative: 'On the battlefield of Kurukṣetra, Arjuna became overwhelmed with grief and hesitation before the war began. Śrī Kṛṣṇa then delivered the Bhagavad Gītā, a dialogue explaining dharma, karma, yoga, bhakti and the nature of the Self. This sacred teaching prepared Arjuna to fulfill his duty and has remained one of the most influential spiritual texts in the world.',
        sources: ['Mahābhārata — Bhīṣma Parva', 'Bhagavad Gītā'] 
      },
      { 
        id: 'departure-krishna', 
        name: 'Departure of Śrī Kṛṣṇa', 
        subtitle: 'The Ascension and the Dawn of Kali Yuga',
        narrative: 'After the conclusion of the Yādava dynasty\'s final events, Śrī Kṛṣṇa withdrew His earthly manifestation. While resting in the forest, He was struck by the hunter Jarā, who mistook His foot for a deer. With His departure, Dvāpara Yuga came to an end and Kali Yuga began according to the traditional chronology preserved in the Purāṇas.',
        sources: ['Śrīmad Bhāgavatam (Skandha 11)', 'Mahābhārata — Mausala Parva', 'Viṣṇu Purāṇa'] 
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
        id: 'kali-yuga-begins', 
        name: 'Kali Yuga Begins', 
        subtitle: 'The Onset of the Dark Age',
        narrative: 'Kali Yuga traditionally begins immediately after the departure of Śrī Kṛṣṇa from the earthly realm, marking the conclusion of Dvāpara Yuga. According to traditional Hindu chronology, this transition is dated to approximately 3102 BCE. Scriptures describe this as the beginning of the age in which dharma gradually declines and the influence of Kali increases among humanity.',
        sources: ['Mahābhārata', 'Viṣṇu Purāṇa', 'Śrīmad Bhāgavatam 12', 'Traditional Yuga chronology'] 
      },
      { 
        id: 'compilation-puranas', 
        name: 'Compilation of the Purāṇas', 
        subtitle: 'The Preservation of Sacred Knowledge',
        narrative: 'Recognizing that humanity in Kali Yuga would possess shorter lifespans, weaker memory and reduced spiritual capacity, Maharṣi Vedavyāsa organized the Vedas into four divisions and is traditionally credited with composing or compiling the Mahābhārata and the eighteen Mahāpurāṇas. These works preserved Vedic wisdom in forms that would remain accessible to future generations throughout Kali Yuga.',
        sources: ['Mahābhārata', 'Viṣṇu Purāṇa', 'Śrīmad Bhāgavatam', 'Traditional accounts of Vedavyāsa'] 
      },
      { 
        id: 'bhakti-movement', 
        name: 'Bhakti Movement', 
        subtitle: 'The Path of Devotion',
        narrative: 'Throughout Kali Yuga, devotion (Bhakti) became one of the most accessible spiritual paths. Across different regions of Bhārata, saints, ācāryas and devotees revitalized devotion to Bhagavān through kīrtana, temple worship, scriptural teaching and personal devotion. Their efforts helped preserve Sanātana Dharma and made spiritual practice accessible to people from all backgrounds.',
        sources: ['Bhāgavata Purāṇa', 'Various Bhakti traditions', 'Traditional Vaiṣṇava literature'] 
      },
      { 
        id: 'present-age', 
        name: 'Present Age', 
        subtitle: 'The Current Epoch',
        narrative: 'According to traditional Hindu understanding, humanity is presently living in the early portion of Kali Yuga. Scriptures describe this age as one in which truthfulness, compassion, purity and memory gradually diminish while conflict, material attachment and adharma increase. Despite these challenges, the scriptures repeatedly emphasize that sincere devotion, remembrance of Bhagavān and study of sacred texts remain powerful means of spiritual progress during this age.',
        sources: ['Śrīmad Bhāgavatam 12.2', 'Mahābhārata', 'Viṣṇu Purāṇa'] 
      },
      { 
        id: 'kalki-avatara', 
        name: 'Kalki Avatāra (Future)', 
        subtitle: 'The Prophesied Restorer',
        narrative: 'The Purāṇas describe Kalki as the future and final avatāra of Bhagavān Viṣṇu who will appear near the end of Kali Yuga when adharma has reached its peak. Born in Śambhala to the brāhmaṇa Viṣṇuyaśas, Kalki is described as restoring righteousness, removing entrenched evil, and inaugurating the beginning of a new Satya Yuga, continuing the eternal cycle of cosmic time.',
        sources: ['Śrīmad Bhāgavatam 12.2', 'Kalki Purāṇa', 'Viṣṇu Purāṇa'] 
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
  'Lava-Kuśa Janma': 'Lava-Kuśa Janma.png',
  'Śrī Kṛṣṇa Janma': 'Śrī Kṛṣṇa Janma.png',
  'Childhood of Śrī Kṛṣṇa': 'Childhood of Śrī Kṛṣṇa.png',
  'Mahābhārata': 'Mahābhārata.png',
  'Bhagavad Gītā': 'Bhagavad Gītā.png',
  'Departure of Śrī Kṛṣṇa': 'Departure of Śrī Kṛṣṇa.png',
  'Kali Yuga Begins': 'Kali Yuga Begins.png',
  'Compilation of the Purāṇas': 'Compilation of the Purāṇas.png',
  'Bhakti Movement': 'Bhakti Movement.png',
  'Present Age': 'Present Age.png',
  'Kalki Avatāra (Future)': 'Kalki Avatāra.png'
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
  const pathRef = useRef(null);
  
  const [dim, setDim] = useState({ w: 0, h: 0, startY: 0 });
  const [nodePositions, setNodePositions] = useState(null);
  const [triggers, setTriggers] = useState({
    vishnu: 0.05,
    brahma: 0.25,
    satya: 0.72,
    treta: 0.80,
    dvapara: 0.88,
    kali: 0.94,
    kalki: 0.96,
    mahapralaya: 0.98,
    mahadeva: 0.999
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const [activeNodes, setActiveNodes] = useState({});
  const [hoveredYuga, setHoveredYuga] = useState(null);
  
  // Global state for the active hovered incident
  const [activeIncident, setActiveIncident] = useState(null);
  const [imgError, setImgError] = useState(false);

  const [isCycleCompleting, setIsCycleCompleting] = useState(false);
  const [cycleFinished, setCycleFinished] = useState(false);
  const [timelineCompleted, setTimelineCompleted] = useState(false);

  useEffect(() => {
    let timer;
    if (activeNodes.mahadevaStage && !isCycleCompleting && !cycleFinished) {
      timer = setTimeout(() => {
        setIsCycleCompleting(true);
      }, 1800);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [activeNodes.mahadevaStage, isCycleCompleting, cycleFinished]);

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

  useEffect(() => {
    if (!pathRef.current || dim.w === 0 || dim.h === 0) return;
    
    // We use a small timeout to let the browser draw the path before measuring
    const timeout = setTimeout(() => {
      if (!pathRef.current) return;
      const path = pathRef.current;
      const totalLength = path.getTotalLength();
      
      const extraSpace = window.innerHeight * 0.5; // 50vh added
      const baseH = Math.max(0, dim.h - extraSpace);

      const findLenForY = (targetY) => {
        let low = 0, high = totalLength, best = 0;
        for (let i = 0; i < 30; i++) {
          const mid = (low + high) / 2;
          if (path.getPointAtLength(mid).y < targetY) low = mid;
          else high = mid;
          best = mid;
        }
        return best;
      };

      const l_vishnu = findLenForY(window.innerHeight * 0.65); // 65vh
      const l_brahma = findLenForY(baseH * 0.31);
      const l_satya = findLenForY(baseH * 0.72);
      const l_treta = findLenForY(baseH * 0.80);
      const l_dvapara = findLenForY(baseH * 0.88);
      const l_kali = findLenForY(baseH * 0.94);

      const l_kalki = findLenForY(baseH + extraSpace * 0.08);
      const l_mahapralaya = findLenForY(baseH + extraSpace * 0.22);
      const l_mahadeva = totalLength;

      setNodePositions({
        brahmanda: path.getPointAtLength(0),
        vishnu: path.getPointAtLength(l_vishnu),
        brahma: path.getPointAtLength(l_brahma),
        satya: path.getPointAtLength(l_satya),
        treta: path.getPointAtLength(l_treta),
        dvapara: path.getPointAtLength(l_dvapara),
        kali: path.getPointAtLength(l_kali),
        kalki: path.getPointAtLength(l_kalki),
        mahapralaya: path.getPointAtLength(l_mahapralaya),
        mahadeva: path.getPointAtLength(l_mahadeva)
      });

      setTriggers({
        vishnu: l_vishnu / totalLength,
        brahma: l_brahma / totalLength,
        satya: l_satya / totalLength,
        treta: l_treta / totalLength,
        dvapara: l_dvapara / totalLength,
        kali: l_kali / totalLength,
        kalki: l_kalki / totalLength,
        mahapralaya: l_mahapralaya / totalLength,
        mahadeva: l_mahadeva / totalLength
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [dim.w, dim.h, dim.startY]);

  const pathD = useMemo(() => {
    if (dim.w === 0 || dim.h === 0) return '';
    const extraSpace = window.innerHeight * 0.5; // 50vh added
    const baseH = Math.max(0, dim.h - extraSpace);

    const px = (x) => (x / 100) * dim.w;
    const py = (y) => (y / 100) * baseH;
    const pyExtra = (y) => py(100) + (y / 100) * extraSpace;
    
    return `
      M ${px(85)} ${dim.startY} 
      C ${px(85)} ${py(20)}, ${px(75)} ${py(35)}, ${px(75)} ${py(50)} 
      C ${px(75)} ${py(60)}, ${px(85)} ${py(65)}, ${px(85)} ${py(72)}
      C ${px(85)} ${py(75)}, ${px(75)} ${py(77)}, ${px(75)} ${py(80)}
      C ${px(75)} ${py(83)}, ${px(85)} ${py(85)}, ${px(85)} ${py(88)}
      C ${px(85)} ${py(91)}, ${px(75)} ${py(93)}, ${px(75)} ${py(94)}
      C ${px(75)} ${py(97)}, ${px(85)} ${py(100)}, ${px(85)} ${pyExtra(20)}
      C ${px(85)} ${pyExtra(30)}, ${px(75)} ${pyExtra(35)}, ${px(75)} ${pyExtra(45)}
    `;
  }, [dim.w, dim.h, dim.startY]);

  const loopPathD = useMemo(() => {
    if (dim.w === 0 || dim.h === 0) return '';
    const extraSpace = window.innerHeight * 0.5;
    const baseH = Math.max(0, dim.h - extraSpace);

    const px = (x) => (x / 100) * dim.w;
    const py = (y) => (y / 100) * baseH;
    const pyExtra = (y) => py(100) + (y / 100) * extraSpace;
    
    return `
      M ${px(75)} ${pyExtra(45)}
      C ${px(75)} ${pyExtra(60)}, ${px(50)} ${pyExtra(80)}, ${px(10)} ${pyExtra(80)}
      C ${px(5)} ${pyExtra(80)}, ${px(5)} ${pyExtra(50)}, ${px(5)} ${py(90)}
      L ${px(5)} ${dim.startY + 400}
      C ${px(5)} ${dim.startY}, ${px(40)} ${dim.startY - 50}, ${px(85)} ${dim.startY}
    `;
  }, [dim.w, dim.h, dim.startY]);

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (timelineCompleted || isCycleCompleting) return;
    setActiveNodes({
      vishnuStage: latest >= triggers.vishnu,
      brahmaStage: latest >= triggers.brahma,
      satya: latest >= triggers.satya,
      treta: latest >= triggers.treta,
      dvapara: latest >= triggers.dvapara,
      kali: latest >= triggers.kali,
      kalkiStage: latest >= triggers.kalki,
      mahapralayaStage: latest >= triggers.mahapralaya,
      mahadevaStage: latest >= triggers.mahadeva
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
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="#C58B52"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              pathLength: (timelineCompleted || isCycleCompleting) ? 1 : smoothProgress,
              filter: 'drop-shadow(0px 0px 6px rgba(197,139,82,0.9))'
            }}
          />
          <motion.path
            d={loopPathD}
            fill="none"
            stroke="#C58B52"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isCycleCompleting ? 1 : 0 }}
            transition={{ duration: 7, ease: [0.4, 0.0, 0.2, 1] }}
            style={{
              filter: 'drop-shadow(0px 0px 6px rgba(197,139,82,0.9))'
            }}
            onAnimationComplete={() => {
              if (isCycleCompleting && !cycleFinished && !timelineCompleted) {
                setCycleFinished(true);
                setTimelineCompleted(true);
                setTimeout(() => setCycleFinished(false), 4000);
              }
            }}
          />
        </svg>
      )}

      {/* BEGINNING ORIGIN */}
      <div 
        ref={beginningRef}
        className="absolute"
        style={nodePositions ? { top: nodePositions.brahmanda.y, left: nodePositions.brahmanda.x, transform: 'translate(-50%, -50%)' } : { top: 'clamp(5rem, 10vw, 8rem)', left: '85%', transform: 'translate(-50%, -50%)' }} 
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute right-6 flex flex-col items-end pt-1 w-[320px]">
            {/* Future Compatibility Sequence container */}
            <div className="flex flex-col items-end mb-4">
              <img 
                src="/om_sacred_symbol_transparent.png" 
                alt="Sacred Om Symbol" 
                className="w-[55px] md:w-[65px] object-contain opacity-80"
              />
              {/* Future elements (Vishnu, Lotus, Brahma) can be sequentially added here */}
            </div>

            <span 
              style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '9px',
                letterSpacing: '0.4em',
                color: '#C58B52',
                textTransform: 'uppercase'
              }}
            >
              Brahmāṇḍa
            </span>
            <span
              className="text-right mt-3 leading-relaxed"
              style={{
                fontFamily: 'Cormorant, serif',
                fontSize: '14px',
                fontStyle: 'italic',
                color: '#888888'
              }}
            >
              The unmanifest source from which creation emerges.<br/>
              Before time, before matter, before the Yugas, existence rests in the Supreme.
            </span>
          </div>

          <div className="relative w-[10px] h-[10px] flex items-center justify-center">
            <motion.div
              animate={
                cycleFinished 
                  ? { opacity: [0.3, 1, 0.3], scale: [1.5, 3, 1.5] } 
                  : { opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }
              }
              transition={
                cycleFinished
                  ? { duration: 3, ease: 'easeOut' }
                  : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }
              className="absolute inset-[-10px] rounded-full"
              style={{ background: cycleFinished ? 'radial-gradient(circle, rgba(255,230,180,0.8) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(197,139,82,0.4) 0%, transparent 70%)' }}
            />
            <motion.div 
              className="w-[5px] h-[5px] rounded-full relative z-10"
              animate={{
                backgroundColor: cycleFinished ? '#FFE6B4' : '#C58B52',
                boxShadow: cycleFinished ? '0 0 20px rgba(255,230,180,1)' : '0 0 10px rgba(197,139,82,1)'
              }}
              transition={{ duration: 3, ease: 'easeOut' }}
            />
          </div>
        </div>
      </div>

      {/* SRI VISHNU STAGE (0.05 Progress) */}
      <AnimatePresence>
        {activeNodes.vishnuStage && nodePositions && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute"
            style={{ top: nodePositions.vishnu.y, left: nodePositions.vishnu.x, transform: 'translate(-50%, -50%)' }} 
          >
            <div className="relative flex items-center justify-center">
              
              <div className="absolute right-8 flex flex-row items-center gap-10 w-[600px] justify-end">
                
                {/* Text Block */}
                <div className="flex flex-col items-end text-right max-w-[320px]">
                  <span className="font-general text-[11px] uppercase tracking-widest text-[#C58B52] mb-3">
                    Śrī Viṣṇu
                  </span>
                  <span className="font-cormorant text-[15px] italic text-[#999999] leading-relaxed">
                    Reclining upon Ādiśeṣa in the infinite Kāraṇodaka, Śrī Viṣṇu remains in perfect stillness before manifestation. Within Him rest all future worlds in their unmanifest state.
                  </span>
                  <span className="font-general text-[8.5px] uppercase tracking-widest text-[#C58B52]/60 mt-5">
                    Viṣṇu Purāṇa • Śrīmad Bhāgavatam • Brahma-saṁhitā
                  </span>
                </div>

                {/* Illustration */}
                <img 
                  src="/sri_vishnu_figure_transparent.png" 
                  alt="Śrī Viṣṇu" 
                  className="w-[200px] object-contain opacity-85"
                />

              </div>

              {/* Node Dot on Timeline */}
              <div className="relative w-[10px] h-[10px] flex items-center justify-center">
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-[-8px] rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(197,139,82,0.3) 0%, transparent 70%)' }}
                />
                <div 
                  className="w-[4px] h-[4px] rounded-full relative z-10"
                  style={{ backgroundColor: '#BA7A3A' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PADMA UDBHAVA STAGE (0.25 Progress) */}
      <AnimatePresence>
        {activeNodes.brahmaStage && nodePositions && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute"
            style={{ top: nodePositions.brahma.y, left: nodePositions.brahma.x, transform: 'translate(-50%, -50%)' }} 
          >
            <div className="relative flex items-center justify-center">
              
              <div className="absolute right-8 flex flex-row items-center gap-10 w-[600px] justify-end">
                
                {/* Text Block */}
                <div className="flex flex-col items-end text-right max-w-[320px]">
                  <span className="font-general text-[11px] uppercase tracking-widest text-[#C58B52] mb-3">
                    Padma Udbhava
                  </span>
                  <span className="font-cormorant text-[15px] italic text-[#2A2A2A]/80 leading-relaxed">
                    From the Nābhi of Śrī Viṣṇu arose the divine Padma. Upon that eternal lotus appeared Śrī Brahmā, the first embodied being, who received the responsibility of manifesting the fourteen worlds according to the will of the Supreme.
                  </span>
                  <span className="font-general text-[8.5px] uppercase tracking-widest text-[#2A2A2A]/60 mt-5">
                    Viṣṇu Purāṇa • Śrīmad Bhāgavatam • Brahma-saṁhitā
                  </span>
                </div>

                {/* Illustration */}
                <img 
                  src="/sri_brahma_figure_transparent.png" 
                  alt="Padma and Śrī Brahmā" 
                  className="w-[200px] object-contain opacity-80"
                />

              </div>

              {/* Node Dot on Timeline */}
              <div className="relative w-[10px] h-[10px] flex items-center justify-center">
                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-[-8px] rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(197,139,82,0.3) 0%, transparent 70%)' }}
                />
                <div 
                  className="w-[4px] h-[4px] rounded-full relative z-10"
                  style={{ backgroundColor: '#BA7A3A' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TIMELINE NODES AND ANNOTATION HUBS */}
      {nodePositions && YUGA_NODES.map((node) => {
        const isActive = activeNodes[node.id];
        // The node is considered active if we are hovering any of its incidents, or hovering the node itself
        const isNodeHovered = hoveredYuga === node.id || (activeIncident && YUGA_NODES.find(n => n.events.includes(activeIncident.event))?.id === node.id);
        const isDimmed = (hoveredYuga !== null || activeIncident !== null) && !isNodeHovered;

        return (
          <div
            key={node.id}
            className="absolute pointer-events-auto"
            style={{
              top: nodePositions[node.id].y,
              left: nodePositions[node.id].x,
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

      {/* KALKI AVATĀRA STAGE */}
      <AnimatePresence>
        {activeNodes.kalkiStage && nodePositions && (
          <div 
            className="absolute pointer-events-none"
            style={{ top: nodePositions.kalki.y, left: nodePositions.kalki.x }} 
          >
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative flex items-center justify-center"
              >
                {/* Node Dot on Timeline */}
                <div className="relative w-[10px] h-[10px] flex items-center justify-center">
                  <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.3, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-[-8px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(197,139,82,0.3) 0%, transparent 70%)' }} />
                  <div className="w-[4px] h-[4px] rounded-full relative z-10" style={{ backgroundColor: '#BA7A3A' }} />
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* MAHĀPRALAYA STAGE */}
      <AnimatePresence>
        {activeNodes.mahapralayaStage && nodePositions && (
          <div 
            className="absolute pointer-events-none"
            style={{ top: nodePositions.mahapralaya.y, left: nodePositions.mahapralaya.x }} 
          >
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative flex items-center justify-center"
              >
                {/* Node Dot on Timeline */}
                <div className="relative w-[10px] h-[10px] flex items-center justify-center">
                  <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.3, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-[-8px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(197,139,82,0.3) 0%, transparent 70%)' }} />
                  <div className="w-[4px] h-[4px] rounded-full relative z-10" style={{ backgroundColor: '#BA7A3A' }} />
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ŚRĪ MAHĀDEVA STAGE */}
      <AnimatePresence>
        {activeNodes.mahadevaStage && nodePositions && (
          <div 
            className="absolute pointer-events-none"
            style={{ top: nodePositions.mahadeva.y, left: nodePositions.mahadeva.x }} 
          >
            <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative flex items-center justify-center"
              >
                <div className="absolute right-8 flex flex-row items-center gap-10 w-[600px] justify-end">
                  {/* Text Block */}
                  <div className="flex flex-col items-end text-right max-w-[320px]">
                    <span className="font-general text-[11px] uppercase tracking-widest text-[#C58B52] mb-3">
                      Śrī Mahādeva <span className="opacity-70 normal-case tracking-normal">— Saṁhāra</span>
                    </span>
                    <span className="font-cormorant text-[15px] italic text-[#2A2A2A]/80 leading-relaxed">
                      Beyond creation and preservation stands Śrī Mahādeva, the eternal principle of Saṁhāra. As the cosmic cycle concludes, He presides over dissolution—not as destruction born of wrath, but as the sacred return of all existence into stillness, making way for the next manifestation of the universe.
                    </span>
                    <span className="font-general text-[8.5px] uppercase tracking-widest text-[#2A2A2A]/60 mt-5">
                      Śiva Purāṇa • Liṅga Purāṇa • Kūrma Purāṇa
                    </span>
                  </div>
                  {/* Illustration */}
                  <img 
                    src="/Shiva_transparent.png" 
                    alt="Śrī Mahādeva" 
                    className="w-[200px] object-contain opacity-80 pointer-events-auto"
                  />
                </div>

                {/* End Dot on Timeline */}
                <div className="relative w-[16px] h-[16px] flex items-center justify-center pointer-events-auto">
                  <motion.div
                    animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.6, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-[-12px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(197,139,82,0.5) 0%, transparent 70%)' }}
                  />
                  <motion.div
                    animate={{ 
                      scale: 1.4,
                      backgroundColor: '#C58B52',
                      borderColor: '#C58B52',
                      boxShadow: '0 0 12px rgba(197,139,82,1)'
                    }}
                    transition={{ duration: 0.6, ease: EASE_POWER3 }}
                    className="w-[6px] h-[6px] rounded-full relative z-10 border"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
