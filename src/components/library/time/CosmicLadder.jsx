import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';

// --- DATA STRUCTURE FOR THE 4 REALMS ---

const TIMELINE_ITEMS = [
  // REALM 1: HUMAN REALM
  { type: 'realm-title', title: 'REALM I', subtitle: 'THE HUMAN REALM', desc: 'The moments that shape every human life.' },
  { type: 'card', realm: 1, name: 'Truṭi', eng: 'The Atomic Moment', duration: '≈ 30 microseconds', context: 'Historically calculated as the time required for a needle to pierce a single lotus petal.', philosophy: 'Even the smallest, almost imperceptible instant was worthy of measurement in a universe that is constantly vibrating.', scriptures: 'Bhāgavata Purāṇa (3.11.4)' },
  { type: 'card', realm: 1, name: 'Tatpara', eng: 'A Fraction of a Glance', duration: '≈ 3 milliseconds', context: 'Defined as the time it takes for a blinking eye to first begin closing.', philosophy: 'A reminder that reality is continuously unfolding, frame by fleeting frame.', scriptures: 'Bhāgavata Purāṇa' },
  { type: 'card', realm: 1, name: 'Nimeṣa', eng: 'The Blink of an Eye', duration: '≈ 0.2 seconds', context: 'The most common base unit for human temporal experience across ancient texts.', philosophy: 'Life is measured not merely in years, but in the fleeting blinks of consciousness.', scriptures: 'Manusmṛti (1.64)' },
  { type: 'card', realm: 1, name: 'Kāṣṭhā', eng: 'A Brief Pause', duration: '≈ 3.2 seconds', context: 'Calculated as exactly 15 Nimeṣas (blinks).', philosophy: 'The length of a sudden, profound realization.', scriptures: 'Manusmṛti' },
  { type: 'card', realm: 1, name: 'Kalā', eng: 'The Breath', duration: '≈ 1.6 minutes', context: '30 Kāṣṭhās. Crucial for regulating the breath during early yogic practices.', philosophy: 'Breath is the bridge between the physical body and the eternal flow of time.', scriptures: 'Manusmṛti' },
  { type: 'card', realm: 1, name: 'Muhūrta', eng: 'The Sacred Hour', duration: '48 minutes', context: '30 Kalās. The standard measure for determining auspicious times for daily rituals.', philosophy: 'Every passing hour holds a different quality of cosmic energy.', scriptures: 'Sūrya Siddhānta' },
  { type: 'card', realm: 1, name: 'Ahorātra', eng: 'Day & Night', duration: '24 hours', context: '30 Muhūrtas. One complete cycle of the sun rising, setting, and returning.', philosophy: 'The foundational rhythm of human waking, striving, and dreaming.', scriptures: 'Sūrya Siddhānta' },
  
  { type: 'transition', lines: ['We began with the blink of an eye.', 'Now we leave the human scale behind.'] },
  
  // REALM 2: CALENDAR OF LIFE
  { type: 'realm-title', title: 'REALM II', subtitle: 'THE CALENDAR OF LIFE', desc: 'The rhythms that governed civilization.' },
  { type: 'card', realm: 2, name: 'Pakṣa', eng: 'The Lunar Fortnight', duration: '14-15 days', context: 'Half of a lunar cycle, divided into the waxing (Śukla) and waning (Kṛṣṇa) phases.', philosophy: 'A reminder that light and darkness take turns ruling the sky.', scriptures: 'Sūrya Siddhānta' },
  { type: 'card', realm: 2, name: 'Māsa', eng: 'The Month', duration: '≈ 30 days', context: 'Two Pakṣas. According to the Purāṇas, one human month is exactly one day and night for the ancestors (Pitṛs).', philosophy: 'As we experience a month, those who came before us experience a single passing day.', scriptures: 'Manusmṛti (1.66)' },
  { type: 'card', realm: 2, name: 'Ṛtu', eng: 'The Season', duration: '2 months', context: 'The traditional calendar divides the year into six distinct seasons (Vasanta, Grīṣma, Varṣā, Śarad, Hemanta, Śiśira).', philosophy: 'Nature does not move in a straight line, but dances through eternal seasons.', scriptures: 'Taittirīya Saṃhitā' },
  { type: 'card', realm: 2, name: 'Ayana', eng: 'The Solar Journey', duration: '6 months', context: 'Three Ṛtus. The northward (Uttarāyaṇa) or southward (Dakṣiṇāyana) journey of the sun.', philosophy: 'Even the sun must follow a cosmic path of ascension and descent.', scriptures: 'Sūrya Siddhānta' },
  { type: 'card', realm: 2, name: 'Saṃvatsara', eng: 'The Year', duration: '365 days', context: 'Two Ayanas. One full cycle of human agriculture, astronomy, and earthly existence.', philosophy: 'While it is a long year for humanity, it is merely a single day and night for the gods (Devas).', scriptures: 'Manusmṛti (1.67)' },
  
  { type: 'transition', lines: ['Time expands.', 'Generations become mere seasons.', 'History becomes a fraction of the cosmos.'] },
  
  // REALM 3: COSMIC AGES
  { type: 'realm-title', title: 'REALM III', subtitle: 'THE COSMIC AGES', desc: 'Where history becomes cosmic.' },
  { type: 'card', realm: 3, name: 'Kali Yuga', eng: 'The Age of Iron', duration: '432,000 human years', context: 'The current era, characterized by spiritual decline, conflict, and a disconnect from Dharma.', philosophy: 'Even in the darkest age, the cycle guarantees that light will eventually return.', scriptures: 'Mahābhārata, Bhāgavata Purāṇa' },
  { type: 'card', realm: 3, name: 'Dvāpara Yuga', eng: 'The Age of Bronze', duration: '864,000 human years', context: 'The age where virtue begins to fracture and the sacred texts must be written down rather than intuitively memorized.', philosophy: 'The era of profound transition, ending with the departure of Śrī Kṛṣṇa.', scriptures: 'Bhāgavata Purāṇa' },
  { type: 'card', realm: 3, name: 'Tretā Yuga', eng: 'The Age of Silver', duration: '1,296,000 human years', context: 'The age defined by rigorous ritualism and the events of the Rāmāyaṇa.', philosophy: 'Humanity still holds deeply to duty, though the innate perfection of the past is fading.', scriptures: 'Viṣṇu Purāṇa' },
  { type: 'card', realm: 3, name: 'Satya Yuga', eng: 'The Age of Gold', duration: '1,728,000 human years', context: 'The era of supreme truth and innate spiritual perfection, where Dharma stands firmly on four legs.', philosophy: 'The pristine state of consciousness, before the illusions of material existence take hold.', scriptures: 'Mahābhārata' },
  { type: 'card', realm: 3, name: 'Mahāyuga', eng: 'The Great Cycle', duration: '4.32 million years', context: 'The combined duration of all four Yugas, representing one complete rise and fall of human civilization.', philosophy: 'A staggering reminder that everything humanity has ever built will rise and fall repeatedly.', scriptures: 'Sūrya Siddhānta' },

  { type: 'transition', lines: ['Earthly history is complete.', 'We now enter the scales of creation itself.'] },
  
  // REALM 4: BEYOND HUMAN IMAGINATION
  { type: 'realm-title', title: 'REALM IV', subtitle: 'BEYOND HUMAN IMAGINATION', desc: 'Time no longer belongs to humanity.' },
  { type: 'card', realm: 4, name: 'Manvantara', eng: 'Age of a Cosmic Ruler', duration: '306.72 million years', context: 'Exactly 71 Mahāyugas. The lifespan of one Manu, a cosmic progenitor who oversees humanity across massive ages.', philosophy: 'The Earth is periodically reshaped, governed by different cosmic custodians.', scriptures: 'Bhāgavata Purāṇa' },
  { type: 'card', realm: 4, name: 'Kalpa', eng: 'A Day of Brahmā', duration: '4.32 billion years', context: '14 Manvantaras. A mere 12 hours for the Creator.', philosophy: 'The entire 4-billion-year lifespan of a planet is just a single day in the life of its architect.', scriptures: 'Viṣṇu Purāṇa' },
  { type: 'card', realm: 4, name: 'Night of Brahmā', eng: 'The Cosmic Slumber', duration: '4.32 billion years', context: 'When the Creator sleeps, the universe is temporarily submerged in an unmanifest state (Pralaya).', philosophy: 'Even the universe must rest. Creation is an exhalation; dissolution is an inhalation.', scriptures: 'Bhāgavata Purāṇa' },
  { type: 'card', realm: 4, name: 'Year of Brahmā', eng: 'The Divine Year', duration: '3.11 trillion human years', context: '360 Days and Nights of Brahmā.', philosophy: 'The numbers begin to surpass the capability of the human mind to even visualize.', scriptures: 'Sūrya Siddhānta' },
  { type: 'card', realm: 4, name: 'Mahā Kalpa', eng: 'Lifetime of Brahmā', duration: '311.04 trillion years', context: 'Exactly 100 Years of Brahmā. The absolute boundary of measurable existence in our universe.', philosophy: 'The longest mathematically defined unit of time in ancient human history.', scriptures: 'Viṣṇu Purāṇa' },
  { type: 'card', realm: 4, name: 'Mahāpralaya', eng: 'The Great Dissolution', duration: 'Timeless', context: 'The end of Brahmā’s life. The entire universe, including space and time itself, dissolves back into the ultimate reality (Brahman).', philosophy: 'When the universe ends, it does not disappear. It simply waits to be dreamed again.', scriptures: 'Śiva Purāṇa' },
  
  { type: 'transition', lines: ['Creation. Preservation. Dissolution.', 'The eternal breath of the cosmos.'] }
];


// --- ANIMATION COMPONENTS ---

function CosmicLadderItem({ item, i, scrollYProgress, totalSteps }) {
  const stepSize = 1 / totalSteps;
  const start = i * stepSize;
  
  // Safe bounding to ensure strictly ascending WAAPI offsets [0,1]
  const in1 = Math.min(start, 0.97);
  const in2 = Math.min(in1 + (stepSize * 0.15), 0.98); 
  const in3 = Math.min(in1 + stepSize, 0.99); 
  const in4 = Math.min(in3 + (stepSize * 1.5), 1.0); 

  const isLast = i === totalSteps - 1;

  const springConfig = { stiffness: 80, damping: 20, mass: 1 };
  const fastSpring = { stiffness: 120, damping: 25, mass: 1 };

  // Shared Entry/Exit Opacity
  const opacityRaw = useTransform(scrollYProgress, [in1, in2, in3, in4], [0, 1, 1, isLast ? 1 : 0]);
  const opacity = useSpring(opacityRaw, springConfig);

  const yRaw = useTransform(scrollYProgress, [in1, in2, in3, in4], [60, 0, 0, -80]);
  const y = useSpring(yRaw, springConfig);

  const zRaw = useTransform(scrollYProgress, [in1, in2, in3, in4], [0, 0, 0, -400]);
  const z = useSpring(zRaw, springConfig);


  // ==========================================
  // RENDER: REALM TITLE
  // ==========================================
  if (item.type === 'realm-title') {
    return (
      <motion.div
        style={{ opacity, y, z, zIndex: i }}
        className="absolute flex flex-col items-center justify-center text-center w-full px-6"
      >
        <span className="font-general text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#C58B52] mb-6">
          {item.title}
        </span>
        <h2 className="font-instrument text-5xl md:text-7xl text-[#E9E2D4] tracking-tight mb-8">
          {item.subtitle}
        </h2>
        <div className="w-[1px] h-[40px] bg-[#C58B52]/50 mb-8 mx-auto" />
        <p className="font-cormorant text-2xl md:text-3xl text-[#E9E2D4]/70 italic font-light max-w-xl mx-auto">
          {item.desc}
        </p>
      </motion.div>
    );
  }

  // ==========================================
  // RENDER: TRANSITION PARAGRAPH
  // ==========================================
  if (item.type === 'transition') {
    return (
      <motion.div
        style={{ opacity, y, z, zIndex: i }}
        className="absolute flex flex-col items-center justify-center text-center w-full px-6"
      >
        {item.lines.map((line, idx) => (
          <p key={idx} className="font-cormorant text-2xl md:text-4xl text-[#E9E2D4]/90 font-light mb-6 last:mb-0 leading-relaxed max-w-2xl mx-auto">
            {line}
          </p>
        ))}
      </motion.div>
    );
  }

  // ==========================================
  // RENDER: ARCHIVAL CARD (3D STACK)
  // ==========================================

  const scaleRaw = useTransform(scrollYProgress, [in1, in2, in3, in4], [0.96, 1, 1, 1]);
  const scale = useSpring(scaleRaw, fastSpring);

  const blurRaw = useTransform(scrollYProgress, [in1, in2, in3, in4], [8, 0, 0, 4]);
  const blur = useSpring(blurRaw, fastSpring);
  
  const brightnessRaw = useTransform(scrollYProgress, [in1, in2, in3, in4], [1, 1, 1, 0.4]);
  const brightness = useSpring(brightnessRaw, fastSpring);

  const filter = useMotionTemplate`blur(${blur}px) brightness(${brightness})`;

  const glowAlphaRaw = useTransform(scrollYProgress, [in1, in2, in3, in4], [0, 0.15, 0.15, 0]);
  const glowAlpha = useSpring(glowAlphaRaw, fastSpring);
  const boxShadow = useMotionTemplate`0 10px 40px rgba(13, 13, 12, 0.2), 0 0 100px rgba(197, 139, 82, ${glowAlpha})`;

  // Stagger Text Offsets
  const getStagger = (delayIndex) => {
    const offset = delayIndex * 0.002;
    const s1 = Math.min(in1 + offset, 0.975);
    const s2 = Math.min(in2 + offset, 0.985);
    return [s1, Math.max(s1 + 0.001, s2), Math.max(s2 + 0.002, in3), in4];
  };

  const getSpringOpacity = (delay) => useSpring(useTransform(scrollYProgress, getStagger(delay), [0, 1, 1, isLast ? 1 : 0]), springConfig);
  const getSpringY = (delay) => useSpring(useTransform(scrollYProgress, getStagger(delay), [15, 0, 0, 0]), springConfig);

  const labelOp = getSpringOpacity(1);
  const titleOp = getSpringOpacity(2);
  const titleY = getSpringY(2);
  const durOp = getSpringOpacity(3);
  const durY = getSpringY(3);
  const divOp = getSpringOpacity(4);
  const divScale = useSpring(useTransform(scrollYProgress, getStagger(4), [0, 1, 1, 1]), springConfig);
  const contextOp = getSpringOpacity(5);
  const contextY = getSpringY(5);
  const philOp = getSpringOpacity(6);
  const philY = getSpringY(6);

  // Styling logic based on Realm identity (preserves cream paper aesthetic but varies details)
  const isRealm2 = item.realm === 2;
  const isRealm3 = item.realm === 3;
  const isRealm4 = item.realm === 4;

  let cardClasses = "absolute flex flex-col items-center justify-center bg-[#E9E2D4] border border-[#C58B52]/30 p-8 md:p-14 shadow-2xl w-full max-w-[85vw] md:max-w-2xl";
  
  if (isRealm2) cardClasses += " rounded-sm"; // Subtle geometric feel
  if (isRealm3) cardClasses += " border-t-4 border-t-[#C58B52]"; // Heavier top border
  if (isRealm4) cardClasses += " rounded-3xl border-[#C58B52]/10 bg-opacity-95"; // Modern, vast feel

  return (
    <motion.div
      style={{ opacity, y, z, scale, filter, boxShadow, zIndex: i }}
      className={cardClasses}
    >
      {/* Realm 2 Geometric Corners */}
      {isRealm2 && (
        <>
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#C58B52]/40" />
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#C58B52]/40" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#C58B52]/40" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#C58B52]/40" />
        </>
      )}

      {/* Infinite Breathing Diamond */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 border ${isRealm3 ? 'bg-[#C58B52] border-[#0D0D0C]' : 'bg-[#0D0D0C] border-[#C58B52]'}`}
      />
      
      {/* Scriptural Source & Name */}
      <motion.div style={{ opacity: labelOp }} className="flex flex-col items-center mb-4">
        <span className="font-general text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#C58B52]/80 mb-2">
          {item.scriptures}
        </span>
        <span className="font-general text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#C58B52] font-semibold">
          {item.name}
        </span>
      </motion.div>
      
      <motion.h3 
        style={{ opacity: titleOp, y: titleY }}
        className="font-instrument text-4xl md:text-5xl lg:text-6xl text-[#0D0D0C] tracking-tight mb-2 text-center"
      >
        {item.eng}
      </motion.h3>
      
      <motion.p 
        style={{ opacity: durOp, y: durY }}
        className="font-cormorant text-xl md:text-2xl text-[#0D0D0C]/60 italic mb-6 text-center"
      >
        {item.duration}
      </motion.p>
      
      {/* Breathing Divider */}
      <motion.div style={{ opacity: divOp, scaleY: divScale }} className="mb-6 h-[40px] origin-top">
        <motion.div 
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          className="w-[1px] h-full bg-[#C58B52]" 
        />
      </motion.div>
      
      <motion.p 
        style={{ opacity: contextOp, y: contextY }}
        className="font-cormorant text-lg md:text-xl font-medium text-[#0D0D0C]/90 text-center max-w-[500px] leading-relaxed mb-4"
      >
        {item.context}
      </motion.p>

      <motion.p 
        style={{ opacity: philOp, y: philY }}
        className="font-cormorant text-lg md:text-xl font-light text-[#0D0D0C]/70 italic text-center max-w-[480px] leading-relaxed"
      >
        {item.philosophy}
      </motion.p>
    </motion.div>
  );
}


// --- MAIN COMPONENT ---

export function CosmicLadder() {
  const containerRef = useRef(null);
  
  // Track scroll across the entire massive sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Global Cinematic Camera Zoom (Very subtle breathing over the huge scroll)
  const globalScaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [1.0, 1.02, 1.0]);
  const globalScale = useSpring(globalScaleRaw, { stiffness: 40, damping: 20 });

  // Golden Connecting Line (grows down as user scrolls)
  const lineScaleYRaw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineScaleY = useSpring(lineScaleYRaw, { stiffness: 60, damping: 20 });

  // Render height based on number of items to ensure comfortable scroll speed
  const totalItems = TIMELINE_ITEMS.length;
  // 100vh per item gives enough breathing room
  const scrollHeight = `${totalItems * 100}vh`;

  return (
    <div ref={containerRef} className="relative w-full bg-[#0D0D0C]" style={{ height: scrollHeight }}>
      
      <div 
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#0D0D0C]" 
        style={{ perspective: '1200px' }} 
      >
        
        {/* Ambient Volumetric Dust & Light Environment */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-60"
          animate={{
            background: [
              'radial-gradient(circle at 40% 40%, rgba(197, 139, 82, 0.08) 0%, rgba(13, 13, 12, 0) 50%)',
              'radial-gradient(circle at 60% 60%, rgba(197, 139, 82, 0.12) 0%, rgba(13, 13, 12, 0) 60%)',
              'radial-gradient(circle at 40% 40%, rgba(197, 139, 82, 0.08) 0%, rgba(13, 13, 12, 0) 50%)'
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Global Golden Connecting Line */}
        <motion.div 
          style={{ scaleY: lineScaleY }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[50vh] bg-gradient-to-b from-[#C58B52]/0 via-[#C58B52]/40 to-[#C58B52]/0 origin-top z-0"
        />

        {/* Global Camera Container */}
        <motion.div 
          style={{ scale: globalScale, transformStyle: 'preserve-3d' }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {TIMELINE_ITEMS.map((item, i) => (
            <CosmicLadderItem 
              key={i} 
              item={item} 
              i={i} 
              scrollYProgress={scrollYProgress} 
              totalSteps={totalItems} 
            />
          ))}
        </motion.div>

      </div>
    </div>
  );
}
