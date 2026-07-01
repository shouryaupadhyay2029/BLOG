import React, { useState, useEffect } from 'react';
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

export function SatyaMithyaCase001() {
  const [methodologyOpen, setMethodologyOpen] = useState(false);

  // Section II (Timeline) State
  const [viewedEvents, setViewedEvents] = useState(new Set());
  const [expandedEventIdx, setExpandedEventIdx] = useState(null);
  const [learnMoreOpenIdx, setLearnMoreOpenIdx] = useState(null);

  // Section III (Arjuna's Crisis) State
  const [expandedReasons, setExpandedReasons] = useState(new Set());
  const [activeVerseIdx, setActiveVerseIdx] = useState(0);

  // Section IV (Kṛṣṇa's Response) State
  const [activePanelIdx, setActivePanelIdx] = useState(0);
  const [activeEvidenceVerseIdx, setActiveEvidenceVerseIdx] = useState(0);

  // Section V (Evidence Review) State
  const [expandedEvidenceIdx, setExpandedEvidenceIdx] = useState(null);

  // Section VI (Final Verdict) State
  const [expandedVerdictCardIdx, setExpandedVerdictCardIdx] = useState(null);
  const [transparencyOpen, setTransparencyOpen] = useState(false);

  // Scrollspy Active Section State
  const [activeSection, setActiveSection] = useState('Claim Defined');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'section-hero', label: 'Claim Defined' },
        { id: 'section-timeline', label: 'Historical Context' },
        { id: 'section-crisis', label: 'Arjuna\'s Crisis' },
        { id: 'section-response', label: 'Kṛṣṇa\'s Response' },
        { id: 'section-evidence', label: 'Evidence Reviewed' },
        { id: 'section-verdict', label: 'Final Verdict' },
      ];

      let current = 'Claim Defined';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold to match user's reading viewport
          if (rect.top <= 260) {
            current = section.label;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const otherCases = [
    { number: '#002', title: 'Are there really 33 crore gods?', id: 'are-there-really-33-crore-gods' },
    { number: '#003', title: 'Does Karma Mean Fate?', id: 'does-karma-mean-fate' },
    { number: '#004', title: 'Did Draupadī laugh at Duryodhana?', id: 'did-draupadi-really-laugh-at-duryodhana' },
  ];

  const timelineEvents = [
    {
      title: 'The Kingdom is Divided',
      short: 'The ancestral kingdom of Kurujangala was split, granting the barren wilderness of Khāṇḍavaprastha to the Pāṇḍavas. They built Indraprastha from nothing, only to excite the jealousy of Duryodhana.',
      whyMatters: 'Establishes that the conflict was not born overnight but grew from systemic territorial inequity and political rivalry.',
      scripture: 'Mahābhārata, Ādi Parva Chapter 200',
      learnMore: 'The Pāṇḍavas accepted a hostile, arid tract to prevent civil war, successfully transforming it into a prosperous capital, which intensified Kurus\' envy.'
    },
    {
      title: 'The Dice Game',
      short: 'Duryodhana invited Yudhiṣṭhira to a rigged game of dice. Driven by a code of honor that forbade refusing a royal invitation, Yudhiṣṭhira gambled away his kingdom, wealth, brothers, and himself.',
      whyMatters: 'The Kurus used deception rather than battlefield combat to dispossess the Pāṇḍavas of their sovereignty.',
      scripture: 'Mahābhārata, Sabhā Parva Chapter 58',
      learnMore: 'The game was masterminded by Śakuni, Duryodhana\'s maternal uncle, using loaded dice to exploit Yudhiṣṭhira\'s adherence to royal protocol.'
    },
    {
      title: 'Draupadī\'s Humiliation',
      short: 'Having lost everything, Yudhiṣṭhira staked and lost Draupadī, the Pāṇḍavas\' queen. Dragged into the open assembly, Duryodhana\'s brother attempted to strip her publicly while the elders sat in silent complicity.',
      whyMatters: 'Represents the absolute moral breakdown of the Kuru court, making future armed resistance a question of justice rather than merely political territory.',
      scripture: 'Mahābhārata, Sabhā Parva Chapter 65',
      learnMore: 'The event marked the irreversible point of moral decay. Bhīṣma, Droṇa, and Dhṛtarāṣṭra\'s silence established their moral complicity in Kuru crimes.'
    },
    {
      title: 'The Thirteen-Year Exile',
      short: 'To avoid immediate conflict, a compromise was reached: the Pāṇḍavas accepted a twelve-year forest exile followed by a thirteenth year in complete disguise. If discovered in the final year, the cycle would repeat.',
      whyMatters: 'Highlights the Pāṇḍavas\' extreme patience and adherence to their word, choosing exile over starting a civil war.',
      scripture: 'Mahābhārata, Vana Parva Chapter 1',
      learnMore: 'During these thirteen years, the Pāṇḍavas lived in severe austerity, honoring the agreement in full, while Duryodhana consolidated his military alliances.'
    },
    {
      title: 'Repeated Peace Attempts',
      short: 'Upon returning from exile and fulfilling every condition, the Pāṇḍavas sent envoys asking for their rightful share of the kingdom. They sought to reclaim their land peacefully.',
      whyMatters: 'Proves that the Pāṇḍavas exhaustively sought diplomatic resolution before mobilizing any armies.',
      scripture: 'Mahābhārata, Udyoga Parva Chapter 1',
      learnMore: 'The Pāṇḍavas\' first envoy was the aged priest of King Drupada, who appealed to righteousness and treaties, but was dismissed by Duryodhana.'
    },
    {
      title: 'Kṛṣṇa\'s Peace Mission',
      short: 'Recognizing the looming catastrophe, Kṛṣṇa personally journeyed to Hastināpura as a peace ambassador, pleading to the Kuru court to prevent global destruction.',
      whyMatters: 'Shows that the speaker of the Gītā exhaustively tried to prevent the war before Arjuna laid down his weapons.',
      scripture: 'Mahābhārata, Udyoga Parva Chapter 83',
      learnMore: 'Kṛṣṇa was offered royal hospitality by Duryodhana, which He refused, choosing to stay with Vidura, and pleaded for peace in the open assembly.',
      isSpecial: true
    },
    {
      title: 'The Offer of Five Villages',
      short: 'In a final act of compromise, Kṛṣṇa, representing Yudhiṣṭhira, asked Duryodhana to grant the Pāṇḍavas only five villages to govern, relinquishing all claim to the empire.',
      whyMatters: 'Confirms the Pāṇḍavas were willing to live in complete obscurity to avoid the slaughter of millions.',
      scripture: 'Mahābhārata, Udyoga Parva Chapter 31',
      learnMore: 'The five villages requested were Aviṣṭhala, Vṛkasthala, Mākandī, Vāraṇāvata, and one other, representing minimal land to fulfill their kṣatriya duty of governance.',
      isSpecial: true
    },
    {
      title: 'Duryodhana Refuses',
      short: 'Infuriated by the request, Duryodhana declared that he would not yield even as much land as could be pierced by the tip of a needle. He attempted to bind Kṛṣṇa when confronted.',
      whyMatters: 'Represents the total failure of diplomacy, demonstrating that the Kurus left no alternative other than total submission or armed resistance.',
      scripture: 'Mahābhārata, Udyoga Parva Chapter 127',
      learnMore: 'Dhṛtarāṣṭra was warned by the elders, but Duryodhana\'s greed and pride overrode all warnings, sealing the fate of the royal line.'
    },
    {
      title: 'Kurukṣetra Becomes Inevitable',
      short: 'With diplomacy dead, both sides mobilized their armies on the holy field of Kurukṣetra, preparing for a war that would decide the political and moral future of Bharatavarsha.',
      whyMatters: 'Establishes the setting where the Gītā begins: the battlefield of Kurukṣetra.',
      scripture: 'Mahābhārata, Udyoga Parva Chapter 150',
      learnMore: 'The battle involved eighteen Akṣauhiṇī armies (millions of soldiers), drawing allies from across the entire subcontinent.'
    },
    {
      title: 'The Bhagavad Gītā Begins',
      short: 'The armies face each other. Drums are beaten. Arjuna requests Kṛṣṇa to draw his chariot between the two forces, only to be overcome with grief when seeing his relatives.',
      whyMatters: 'The Gītā is spoken in the critical gap between diplomacy and the first strike—a response to an active moral breakdown.',
      scripture: 'Bhagavad Gītā Chapter 1',
      learnMore: 'The discourse occupies the brief stillness when the archers have raised their weapons but have not yet fired.'
    }
  ];

  const handleEventClick = (idx) => {
    setExpandedEventIdx(expandedEventIdx === idx ? null : idx);
    const newViewed = new Set(viewedEvents);
    newViewed.add(idx);
    setViewedEvents(newViewed);
  };

  const isContextCompleted = viewedEvents.has(5) && viewedEvents.has(6);

  // Arjuna's Four Reasons
  const arjunaReasons = [
    {
      id: 0,
      title: 'Love for Family (Sva-jana)',
      subtitle: 'Arjuna cannot separate duty from affection',
      desc: 'Arjuna looks at both sides and realizes that the opposing army consists of his own cousins, childhood companions, and elders. The boundary between state justice and kinship dissolves, leaving him paralyzed by personal affection (sva-jana-sneha).',
      whyMatters: 'Demonstrates that Arjuna\'s paralysis is not based on fear of death, but on the profound grief of destroying his own family unit.',
      verseRef: 'BG 1.28'
    },
    {
      id: 1,
      title: 'Respect for Teachers (Gurus)',
      subtitle: 'He cannot raise weapons against those who shaped him',
      desc: 'Bhīṣma, the grandfather who raised him, and Droṇa, the military preceptor who taught him archery, stand on the opposing line. Scriptural law forbids raising weapons against one\'s teacher or grandfather—even if they are on the side of injustice.',
      whyMatters: 'Highlights the collision of two valid codes: the kṣatriya duty to fight injustice vs the eternal duty to honor and respect one\'s elders and mentors.',
      verseRef: 'BG 2.4'
    },
    {
      id: 2,
      title: 'Fear of Social Collapse',
      subtitle: 'The long-term ethical consequences of war',
      desc: 'Arjuna argues that the destruction of families leads to the decay of moral traditions, giving rise to chaos, the corruption of family lines (varṇa-saṅkara), and the abandonment of social duties. He is looking beyond the battle to the generation that must inherit a broken society.',
      whyMatters: 'Arjuna acts as a systemic thinker, analyzing the social collapse and trauma that outlasts battlefield victories.',
      verseRef: 'BG 1.40'
    },
    {
      id: 3,
      title: 'A Hollow Victory',
      subtitle: 'What is the value of a kingdom built on blood?',
      desc: 'Arjuna asks what joy could possibly remain in conquering the empire if those for whom they seek that prosperity are slaughtered in the process. A victory achieved through the genocide of family members is worse than living as a beggar.',
      whyMatters: 'This represents the absolute climax of his ethical crisis: the means (total war) destroy the very ends (prosperous family/kingdom) they are meant to secure.',
      verseRef: 'BG 1.32'
    }
  ];

  const handleReasonClick = (idx) => {
    const nextSet = new Set(expandedReasons);
    if (nextSet.has(idx)) {
      nextSet.delete(idx);
    } else {
      nextSet.add(idx);
    }
    setExpandedReasons(nextSet);
  };

  const isCrisisExplored = expandedReasons.size >= 3;

  // Arjuna's Verses evidence
  const arjunaVerses = [
    {
      id: 0,
      label: 'BG 1.28',
      sanskrit: 'दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम् ।\nसीदन्ति मम गात्राणि मुखं च परिशुष्यति ॥',
      iast: 'dṛṣṭvemaṃ sva-janaṃ kṛṣṇa yuyutsuṃ samupasthitam |\nsīdanti mama gātrāṇi mukhaṃ ca pariśuṣyti ||',
      trans: '"O Kṛṣṇa, seeing my own kinsmen gathered here eager to fight, my limbs give way and my mouth is parched."',
      context: 'Arjuna has driven his chariot between the armies and is observing the opposing ranks.',
      whyMatters: 'Verifies that physical shock is his reaction to the emotional trauma of fighting his own kin.'
    },
    {
      id: 1,
      label: 'BG 1.29',
      sanskrit: 'वेपथुश्च शरीरे मे रोमहर्षश्च जायते ।\nगाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते ॥',
      iast: 'vepathuś ca śarīre me roma-harṣaś ca jāyate |\ngāṇḍīvaṃ sraṃsate hastāt tvak caiva paridahyate ||',
      trans: '"My body trembles, my hair stands on end, my bow Gāṇḍīva slips from my hand, and my skin burns all over."',
      context: 'Follows immediately after seeing his grandfathers and teachers ready for combat.',
      whyMatters: 'Demonstrates that the greatest warrior of his age is completely paralyzed by an ethical crisis rather than fear.'
    },
    {
      id: 2,
      label: 'BG 1.32',
      sanskrit: 'न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च ।\nकिं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा ॥',
      iast: 'na kāṅkṣe vijayaṃ kṛṣṇa na ca rājyaṃ sukhāni ca |\nkiṃ no rājyena govinda kiṃ bhogair jīvitena vā ||',
      trans: '"I do not desire victory, O Kṛṣṇa, nor kingdom, nor pleasures. Of what use is kingdom to us, O Govinda, or luxury, or even life itself?"',
      context: 'Arjuna questions the material gains of war when the people who would share them are dead.',
      whyMatters: 'Counters the myth that Arjuna is fighting for personal power or royal greed; he is willing to surrender all claims.'
    },
    {
      id: 3,
      label: 'BG 1.40',
      sanskrit: 'कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः ।\nधर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत ॥',
      iast: 'kula-kṣaye praṇaśyanti kula-dharmāḥ sanātanāḥ |\ndharme naṣṭe kulaṃ kṛtsnam adharmo \'bhibhavaty uta ||',
      trans: '"With the destruction of the family, its ancient moral traditions perish. When traditions are lost, chaos and lawlessness overcome the remaining house."',
      context: 'Arjuna details the long-term societal breakdown resulting from the death of family heads.',
      whyMatters: 'Exposes his concern for social integrity and generational morality, presenting a rational sociological argument.'
    },
    {
      id: 4,
      label: 'BG 2.4',
      sanskrit: 'कथं भीष्ममहं सङ्ख्ये द्रोणं च मधुसूदन ।\nइषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन ॥',
      iast: 'kathaṃ bhīṣmam ahaṃ saṅkhye droṇaṃ ca madhusūdana |\niṣubhiḥ pratiyotsyāmi pūjārhāv ari-sūdana ||',
      trans: '"How can I attack Bhīṣma and Droṇa with arrows on the battlefield, O Madhusūdana, when they are worthy of my deepest worship?"',
      context: 'Spoken at the beginning of Chapter 2, before Kṛṣṇa begins His instruction.',
      whyMatters: 'Identifies the precise conflict of duties: the code of warfare vs the code of spiritual and familial honor.'
    },
    {
      id: 5,
      label: 'BG 2.9',
      sanskrit: 'एवमुक्त्वा हृषीकेशं गुडाकेशः परन्तप ।\nन योत्स्य इति गोविन्दमुक्त्वा तूष्णीं बभूव ह ॥',
      iast: 'evam uktvā hṛṣīkeśaṃ guḍākeśaḥ parantapa |\nna yotsya iti govindam uktvā tūṣṇīm babhūva ha ||',
      trans: '"Having spoken thus to Hṛṣīkeśa, Arjuna, the conqueror of sleep, declared: \'I will not fight,\' and fell silent."',
      context: 'The absolute conclusion of Arjuna\'s arguments, immediately before Krishna speaks.',
      whyMatters: 'Shows that the Gītā arises not because Arjuna is eager to fight, but because he has officially resigned and surrendered.'
    }
  ];

  // Section IV (Kṛṣṇa's Response) Panels
  const responsePanels = [
    {
      id: 0,
      title: 'Did Kṛṣṇa immediately command Arjuna to fight?',
      verdict: 'NO',
      desc: 'Kṛṣṇa does not open with a military demand. Instead, He patiently stands as a silent witness throughout Chapter 1, allowing Arjuna to exhaust every argument, question, and release his grief. Only when Arjuna surrenders completely in Chapter 2 does Kṛṣṇa speak.',
      scriptureLink: 'Bhagavad Gītā 1.47 - 2.10'
    },
    {
      id: 1,
      title: 'What is Kṛṣṇa\'s first correction?',
      verdict: 'IMMORTALITY OF SELF',
      desc: 'Kṛṣṇa begins by detailing the absolute distinction between the physical, transient body (deha) and the eternal, indestructible observer (Ātman). He explains that physical destruction does not destroy the essential consciousness. This is presented as metaphysical truth to dissolve grief, not as a license for violence.',
      scriptureLink: 'Bhagavad Gītā 2.11 - 2.30'
    },
    {
      id: 2,
      title: 'Why does Kṛṣṇa discuss Dharma?',
      verdict: 'CONTEXT-SPECIFIC DUTY (SVADHARMA)',
      desc: 'Kṛṣṇa reminds Arjuna of his Svadharma—his context-specific role as a protector (Kṣatriya) standing on a field where defensive battle is necessary to protect society. Kṛṣṇa differentiates between universal ethics (sādhāraṇa-dharma) and Arjuna\'s specific civic responsibility in a systemic crisis.',
      scriptureLink: 'Bhagavad Gītā 2.31 - 2.38'
    },
    {
      id: 3,
      title: 'Why does Kṛṣṇa reject Arjuna\'s withdrawal?',
      verdict: 'CONFUSION, NOT ENLIGHTENMENT',
      desc: 'Kṛṣṇa diagnoses Arjuna\'s desire to flee as arising from confusion, grief, and attachment (moha), rather than a stable realization of non-violence. Leaving the field under emotional collapse is not pacifism—it is a betrayal of duty dressed in the language of morality.',
      scriptureLink: 'Bhagavad Gītā 2.2 - 2.3'
    },
    {
      id: 4,
      title: 'Does Kṛṣṇa glorify war?',
      verdict: 'PRELIMINARY FINDING: NO',
      desc: 'Nowhere in the Gītā does Kṛṣṇa praise conflict, expansionism, or conquest. The battlefield is treated as a tragic, final necessity because all diplomacy failed. The focus of the text remains entirely on the inner attitude of the actor rather than the glorification of external violence.',
      scriptureLink: 'Bhagavad Gītā (Entire Text)'
    },
    {
      id: 5,
      title: 'What does Kṛṣṇa repeatedly emphasize?',
      verdict: 'DETACHED ACTION',
      desc: 'Instead of war strategies, Kṛṣṇa spends eighteen chapters mapping path systems: Karma Yoga (acting without desire for personal reward), Jñāna (self-knowledge), and Bhakti (devotion). The battlefield is the setting to demonstrate that spiritual realization is achieved within active duty, not just in forest isolation.',
      scriptureLink: 'Bhagavad Gītā Chapters 3 - 18'
    }
  ];

  // Section IV key verses evidence
  const responseVerses = [
    {
      id: 0,
      label: 'BG 2.11',
      sanskrit: 'श्रीभगवानुवाच\nअशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे ।\nगतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ॥',
      iast: 'śrī-bhagavān uvāca\naśocyān anvaśocas tvaṃ prajñā-vādāṃś ca bhāṣase |\ngatāsūn agatāsūṃś ca nānuśocanti paṇḍitāḥ ||',
      trans: '"The Supreme Lord said: While speaking learned words, you are mourning for that which is not worthy of grief. The wise mourn neither for the living nor for the dead."',
      context: 'Kṛṣṇa\'s very first spoken words in response to Arjuna\'s collapse.',
      misinterpretation: 'That Kṛṣṇa is indifferent to death and human suffering.',
      truth: 'He is correcting Arjuna\'s perspective, explaining that grief arises from mistaking the transient body for the eternal self.'
    },
    {
      id: 1,
      label: 'BG 2.19',
      sanskrit: 'य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम् ।\nउभौ तौ न विजानीतो नायं हन्ति न हन्यते ॥',
      iast: 'ya enaṃ vetti hantāraṃ yaś cainaṃ manyate hatam |\nubhau tau na vijānīto nāyaṃ hanti na hanyate ||',
      trans: '"He who thinks the Self is the killer, and he who thinks the Self is killed, both fail to understand. The Self neither kills nor is killed."',
      context: 'Teaching on the eternal nature of consciousness (Ātman).',
      misinterpretation: 'Used by critics to claim the Gita excuses physical violence.',
      truth: 'This is a metaphysical description of pure consciousness (the observer), which remains unaffected by physical changes. It is not an ethical justification for physical killing.'
    },
    {
      id: 2,
      label: 'BG 2.47',
      sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
      iast: 'karmaṇy-evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo \'stv akarmaṇi ||',
      trans: '"You have a right to perform your prescribed duty, but you are never entitled to the fruits of action. Never consider yourself the cause of the results, and never be attached to inaction."',
      context: 'Introduction to Karma Yoga (the path of detached action).',
      misinterpretation: 'That one should act blindly without caring about quality or moral outcomes.',
      truth: 'Teaches how to act with complete presence and duty, removing the anxiety of personal gain, ego, and future expectations.'
    },
    {
      id: 3,
      label: 'BG 3.35',
      sanskrit: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥',
      iast: 'śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt |\nsva-dharme nidhanaṃ śreyaḥ para-dharmo bhayāvahaḥ ||',
      trans: '"It is far better to perform one\'s own duty, even if imperfectly, than to master the duty of another. Destruction in the course of performing one\'s own duty is better; to follow another\'s path is dangerous."',
      context: 'Kṛṣṇa explaining why Arjuna must act according to his nature.',
      misinterpretation: 'Used to justify rigid, unchangeable caste separations.',
      truth: 'Emphasizes that a person must act in alignment with their intrinsic nature and civic duty (Svadharma) rather than copying another\'s role out of fear or social mimicry.'
    },
    {
      id: 4,
      label: 'BG 18.63',
      sanskrit: 'इति ते ज्ञानमाख्यातं गुह्याद्गुह्यतरं मया ।\nविमृश्यैतदशेषेण यथेच्छसि तथा कुरु ॥',
      iast: 'iti te jñānam ākhyātaṃ guhyād guhyataraṃ mayā |\nvimṛśyaitad aśeṣeṇa yathecchasi tathā kuru ||',
      trans: '"Thus, I have explained to you this knowledge, which is the secret of all secrets. Reflect upon it fully, and then act as you wish."',
      context: 'Spoken by Kṛṣṇa at the very end of His instruction.',
      misinterpretation: 'That the Gita demands blind obedience or mechanical compliance.',
      truth: 'Confirms the primacy of individual free will and reason. Kṛṣṇa does not force Arjuna; He demands that Arjuna use his own intellect to evaluate the teaching before acting.'
    }
  ];

  // Section V: Evidence Review Board Panels
  const evidenceBoard = [
    {
      id: 0,
      title: 'Does Kṛṣṇa ask Arjuna to fight?',
      status: 'SUPPORTED',
      statusColor: 'text-green-600 border-green-600 bg-green-50',
      evidence: 'Multiple verses throughout the text (e.g. BG 2.18, 2.38, 18.73) contain direct, grammatical commands for Arjuna to stand up and fight.',
      findings: 'Kṛṣṇa explicitly instructs Arjuna to engage in the battle. There is no linguistic or textual ambiguity in this directive.',
      analysis: 'This is an explicit instruction within the narrative framework of the text, spoken directly to resolve Arjuna\'s battlefield paralysis.'
    },
    {
      id: 1,
      title: 'Does Kṛṣṇa ask every human being to fight wars?',
      status: 'NOT SUPPORTED',
      statusColor: 'text-red-600 border-red-600 bg-red-50',
      evidence: 'The instruction is directed strictly toward Arjuna, a designated kṣatriya warrior standing on a literal battlefield immediately before combat begins.',
      findings: 'No verse in the Bhagavad Gītā generalizes this command into a universal physical obligation for all of humanity.',
      analysis: 'The command is context-specific, bound to Arjuna\'s unique civic responsibilities (Svadharma) as a protector of justice in a defensive war.'
    },
    {
      id: 2,
      title: 'Does the Bhagavad Gītā glorify violence?',
      status: 'MISLEADING CLAIM',
      statusColor: 'text-amber-600 border-amber-600 bg-amber-50',
      evidence: 'Over 90% of the Gita discusses self-mastery, detached action (Karma Yoga), meditation, devotion (Bhakti), and spiritual liberation.',
      findings: 'The text frames the conflict as a tragic necessity rather than an objective to be celebrated. Compassion, equanimity, and peace are repeatedly praised.',
      analysis: 'The primary emphasis is not on violence, but on performing one\'s duty without selfish attachment or personal hatred.'
    },
    {
      id: 3,
      title: 'Was war presented as the first solution?',
      status: 'NOT SUPPORTED',
      statusColor: 'text-red-600 border-red-600 bg-red-50',
      evidence: 'The Mahābhārata details 13 years of exile, multiple peace embassies, and Kṛṣṇa\'s personal journey to negotiate a compromise of only five villages, all rejected by the Kurus.',
      findings: 'The war occurs only as a final, tragic recourse when all diplomatic avenues for peace were exhausted.',
      analysis: 'War is presented as a structural failure of Kuru statecraft, not as the preferred first-resort option.'
    },
    {
      id: 4,
      title: 'Is the battlefield merely symbolic?',
      status: 'PARTIALLY SUPPORTED',
      statusColor: 'text-blue-600 border-blue-600 bg-blue-50',
      evidence: 'The epic presents Kurukṣetra as a physical battlefield. However, traditional and modern commentators (e.g. Gandhi) also draw symbolic meanings, viewing it as the inner struggle between virtue and vice.',
      findings: 'The text functions on both levels. The narrative is set on a physical battlefield, but its philosophical content is designed to be applied to inner ethical struggles.',
      analysis: 'Allegorical interpretations are highly influential and valid, but they do not erase the historical and narrative settings of the epic.'
    },
    {
      id: 5,
      title: 'Does the Bhagavad Gītā teach Dharma more than warfare?',
      status: 'SUPPORTED',
      statusColor: 'text-green-600 border-green-600 bg-green-50',
      evidence: 'Out of 700 verses, fewer than 50 deal directly with battlefield commands, while the remainder focus entirely on spiritual paths and ethics.',
      findings: 'The overwhelming majority of teachings concern the stabilization of the mind, self-realization, and devotion.',
      analysis: 'The text is a manual of spiritual life and duty set within a crisis, not a military handbook.'
    }
  ];

  // Scriptural vs Popular Belief Comparison
  const popularVsScripture = [
    {
      pop: 'The Gītā is a manual for physical warfare.',
      skt: 'The Gītā is a manual for detached action (Karma Yoga) set within a political crisis.'
    },
    {
      pop: 'Kṛṣṇa encourages Arjuna to fight out of anger and revenge.',
      skt: 'Kṛṣṇa commands Arjuna to fight without anger, hatred, or desire for personal reward.'
    },
    {
      pop: 'Arjuna is a pacifist arguing for absolute non-violence.',
      skt: 'Arjuna\'s refusal is based on family attachment and grief, not a universal doctrine of non-violence.'
    },
    {
      pop: 'The Gītā calls for violence against non-believers.',
      skt: 'The conflict is entirely political and familial (Dharma vs Adharma), not religious or sectarian.'
    },
    {
      pop: 'The text says killing is fine because souls are immortal.',
      skt: 'The soul\'s immortality is taught to dissolve Arjuna\'s personal grief, not to excuse arbitrary violence.'
    },
    {
      pop: 'Kṛṣṇa forces Arjuna to obey His commands blindly.',
      skt: 'Kṛṣṇa tells Arjuna to reflect fully and act according to his own free will (yathecchasi tathā kuru).'
    }
  ];

  // Section VI (Final Verdict) Cards
  const verdictDetails = [
    {
      id: 0,
      title: 'Why not "Supported"?',
      desc: 'Because the Bhagavad Gītā is not instructing all people to wage war. The physical command is context-specific, bound strictly to Arjuna\'s civic duties on a physical battlefield after every peace attempt failed. Generalizing it into a universal license for violence contradicts the text\'s structural setting.'
    },
    {
      id: 1,
      title: 'Why not "Not Supported"?',
      desc: 'Because Kṛṣṇa unquestionably instructs Arjuna to stand up and fight. Declaring the claim entirely "not supported" would require ignoring multiple direct commands (e.g. tasmād yudhyasva bhārata). TATTVA must acknowledge the literal command to maintain absolute textual integrity.'
    },
    {
      id: 2,
      title: 'Why "Misleading"?',
      desc: 'The claim contains a factual element (the command exists) but removes it from its narrative, historical, and ethical context to draw an inaccurate general conclusion. Removing the context makes it appear as a universal call to conflict, which is a complete misrepresentation.'
    },
    {
      id: 3,
      title: 'What is the Gītā actually teaching?',
      desc: 'The text stands as a treatise on self-knowledge, spiritual discipline (yoga), moral responsibility, and detached action. It teaches that spiritual liberation is achieved not by escaping one\'s duties, but by performing them without personal ego or attachment.'
    }
  ];

  const whatWeLearned = [
    'Context changes meaning.',
    'Peace was attempted first.',
    'Arjuna initially refused to fight.',
    'Kṛṣṇa teaches before commanding.',
    'Duty is central.',
    'The Gītā cannot be reduced to a slogan.'
  ];

  // Section VII (Continue the Investigation) Cases
  const relatedCases = [
    {
      id: 'are-there-really-33-crore-gods',
      number: 'CASE FILE 002',
      title: 'Are there really 33 crore gods?',
      status: 'Available',
      desc: 'Many people believe Hinduism teaches that there are literally 330 million deities. Does scripture support this?'
    },
    {
      id: 'does-karma-mean-fate',
      number: 'CASE FILE 003',
      title: 'Does Karma Mean Fate?',
      status: 'Available',
      desc: 'Many people believe Karma means everything is already predetermined. Does scripture actually support that?'
    },
    {
      id: 'did-rgveda-say-vishnu-created-universe',
      number: 'CASE FILE 004',
      title: 'Did the Ṛgveda Say Viṣṇu Created the Universe?',
      status: 'Coming Soon',
      desc: 'One of the most common claims on social media. Does the earliest Vedic literature actually identify a personal creator deity?'
    },
    {
      id: 'are-ramayana-mahabharata-mythology',
      number: 'CASE FILE 005',
      title: 'Are the Rāmāyaṇa and Mahābhārata Just Mythology?',
      status: 'Coming Soon',
      desc: 'What do the scriptures themselves claim? What does "Itihāsa" actually mean?'
    }
  ];

  const tattvaPrinciples = [
    'Read before concluding.',
    'Context before quotation.',
    'Scripture before opinion.',
    'Evidence before certainty.',
    'Questions before assumptions.',
    'Understanding before judgment.'
  ];

  const knowledgeNetwork = [
    { id: '001', title: 'The Gītā teaches war', status: 'current', desc: 'Case File 001' },
    { id: '002', title: '33 Crore Deities?', status: 'faded', desc: 'Case File 002' },
    { id: '003', title: 'Karma Means Fate?', status: 'faded', desc: 'Case File 003' },
    { id: '004', title: 'Ṛgveda and Creator Deity', status: 'faded', desc: 'Case File 004' },
    { id: '005', title: 'Everything is Symbolic?', status: 'faded', desc: 'Case File 005' }
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#F4EFE6] text-[#1C1C1A] font-sans antialiased overflow-x-hidden pb-20">
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
      </nav>

      {/* STICKY EVIDENCE SIDEBAR PANEL WITH SCROLL-SPY ACTIVE STAGES */}
      <aside className="hidden lg:flex flex-col fixed right-12 top-40 w-64 border-l border-[#C58B52]/20 pl-6 z-20">
        <span className="font-general text-[9px] uppercase tracking-[0.25em] text-[#C58B52] block mb-4">
          Evidence Tracker
        </span>
        <div className="border border-[#C58B52]/30 bg-white/55 p-4 shadow-sm flex flex-col gap-3">
          <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#1C1C1A]/50">
            Case File #001 Status
          </span>
          <div className="flex flex-col gap-2.5">
            {[
              { id: 'section-hero', label: 'Claim Defined' },
              { id: 'section-timeline', label: 'Historical Context' },
              { id: 'section-crisis', label: 'Arjuna\'s Crisis' },
              { id: 'section-response', label: 'Kṛṣṇa\'s Response' },
              { id: 'section-evidence', label: 'Evidence Reviewed' },
              { id: 'section-verdict', label: 'Final Verdict' }
            ].map((step, idx) => {
              const isActive = activeSection === step.label;
              return (
                <div key={idx} className="flex items-center gap-2.5 transition-colors duration-300">
                  <span className={`text-xs font-semibold ${isActive ? 'text-[#9E2A2B]' : 'text-[#1C1C1A]/30'}`}>
                    {isActive ? '●' : '○'}
                  </span>
                  <span className={`font-cormorant text-xs transition-all duration-300 ${
                    isActive ? 'text-[#9E2A2B] font-bold scale-105 origin-left' : 'text-[#1C1C1A]/60'
                  }`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="border-t border-[#C58B52]/20 pt-3 mt-2 flex flex-col gap-2">
            <div className="flex justify-between items-center text-[8.5px] font-general uppercase tracking-wider">
              <span className="text-[#1C1C1A]/40">Active Phase:</span>
              <span className="text-[#9E2A2B] font-bold">
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
        
        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section id="section-hero" className="mb-16">
          <motion.div
            className="flex flex-col text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: EASE_EXPO }}
          >
            <span className="font-general text-[10px] uppercase tracking-[0.45em] text-[#9E2A2B] mb-4">
              Investigative Archive
            </span>
            <h1 className="font-instrument text-5xl md:text-7xl lg:text-8xl text-[#1C1C1A] tracking-tight leading-none mb-6">
              SATYA / MITHYĀ
            </h1>
            <p className="font-cormorant text-lg md:text-xl font-light italic text-[#1C1C1A]/60 max-w-xl mx-auto leading-relaxed">
              Separating Scriptural Truth from Popular Misconception
            </p>
            <div className="w-24 h-[1px] bg-[#C58B52]/40 mx-auto mt-8 mb-12" />
          </motion.div>

          <Reveal>
            <div className="border border-[#C58B52]/30 bg-white/40 p-8 relative shadow-sm">
              <div className="absolute -top-3 left-6 bg-[#9E2A2B] text-white px-3 py-1 font-general text-[8px] uppercase tracking-[0.2em]">
                CASE FILE #001
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2 mb-6">
                <div>
                  <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#1C1C1A]/40 block mb-1">
                    Subject of Inquiry
                  </span>
                  <h2 className="font-instrument text-2xl md:text-3xl text-[#1C1C1A] font-semibold leading-tight">
                    "The Bhagavad Gītā teaches people to fight wars."
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="w-2.5 h-2.5 rounded-full bg-[#9E2A2B]"
                  />
                  <span className="font-general text-[10px] uppercase tracking-[0.15em] text-[#9E2A2B] font-bold">
                    🔍 UNDER INVESTIGATION
                  </span>
                </div>
              </div>

              <p className="font-cormorant text-lg text-[#1C1C1A]/85 leading-relaxed font-light mb-4">
                Millions of people—both critics and admirers—claim that the Bhagavad Gītā promotes violence or encourages war. But is that what the text actually teaches? Or has one of the world's most influential spiritual works been misunderstood through selective quotation and missing context?
              </p>
              <p className="font-cormorant text-base text-[#1C1C1A]/70 leading-relaxed font-light italic">
                This investigation examines the evidence.
              </p>
            </div>
          </Reveal>

          {/* METHODOLOGY ACCORDION */}
          <Reveal className="my-6">
            <div className="border border-[#C58B52]/20 bg-white/30">
              <button
                onClick={() => setMethodologyOpen(!methodologyOpen)}
                className="w-full p-5 flex justify-between items-center text-left focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#9E2A2B] font-general text-[10px]">▼</span>
                  <span className="font-instrument text-base font-semibold text-[#1C1C1A]">
                    How This Investigation Works
                  </span>
                </div>
                <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52]">
                  {methodologyOpen ? '[ COLLAPSE ]' : '[ EXPAND METHODOLOGY ]'}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {methodologyOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE_EXPO }}
                    className="border-t border-[#C58B52]/10 p-6 bg-white/40"
                  >
                    <p className="font-cormorant text-base text-[#1C1C1A]/70 leading-relaxed mb-4">
                      Every case in SATYA / MITHYĀ is subjected to a rigorous, multi-tiered verification standard. No conclusions are made based on popular consensus or modern translation shortcuts.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-7 gap-2 text-center mt-6">
                      {[
                        { step: '01', title: 'Claim' },
                        { step: '02', title: 'Primary Scriptures' },
                        { step: '03', title: 'Historical Context' },
                        { step: '04', title: 'Traditional Commentaries' },
                        { step: '05', title: 'Modern Scholarship' },
                        { step: '06', title: 'Evidence Review' },
                        { step: '07', title: 'Verdict' },
                      ].map((step, idx) => (
                        <div key={idx} className="p-3 border border-[#C58B52]/10 bg-[#F4EFE6]/30">
                          <span className="font-general text-[8px] text-[#C58B52] block mb-1">
                            {step.step}
                          </span>
                          <span className="font-instrument text-xs text-[#1C1C1A] block font-semibold leading-tight">
                            {step.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION II: THE STORY BEFORE THE GĪTĀ
        ══════════════════════════════════════════════ */}
        <section id="section-timeline" className="py-16 border-t border-[#C58B52]/20">
          <Reveal>
            <h2 className="font-instrument text-4xl text-[#1C1C1A] mb-2">
              The Story Before the Gītā
            </h2>
            <p className="font-instrument italic text-lg text-[#C58B52] mb-8">
              The Bhagavad Gītā did not begin the conflict. It entered one.
            </p>
          </Reveal>

          {/* Interactive Timeline Cards */}
          <div className="w-full flex flex-col gap-5 my-8">
            {timelineEvents.map((event, idx) => {
              const isExpanded = expandedEventIdx === idx;
              const hasViewed = viewedEvents.has(idx);
              const isSpecial = event.isSpecial;

              return (
                <div
                  key={idx}
                  className={`border transition-all duration-300 p-5 ${
                    isExpanded 
                      ? 'border-[#9E2A2B] bg-white shadow-sm' 
                      : isSpecial 
                        ? 'border-[#C58B52]/60 bg-[#C58B52]/5 hover:border-[#9E2A2B]' 
                        : 'border-[#C58B52]/20 bg-white/20 hover:border-[#9E2A2B]/40'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-general text-[8px] text-[#C58B52] font-semibold">
                        PHASE 0{idx + 1}
                      </span>
                      {hasViewed && (
                        <span className="text-[7.5px] font-general text-[#9E2A2B] uppercase tracking-wider">
                          ✓ Investigated
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleEventClick(idx)}
                      className="font-general text-[8px] uppercase tracking-widest text-[#C58B52] hover:text-[#9E2A2B] transition-colors focus:outline-none"
                    >
                      {isExpanded ? '[ COLLAPSE ]' : '[ INVESTIGATE ]'}
                    </button>
                  </div>

                  <h3 className="font-instrument text-lg font-semibold text-[#1C1C1A] mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="font-cormorant text-base text-[#1C1C1A]/80 leading-relaxed font-light">
                    {event.short}
                  </p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE_EXPO }}
                        className="mt-4 border-t border-[#C58B52]/10 pt-4 flex flex-col gap-4 text-xs"
                      >
                        <div>
                          <span className="font-general text-[7px] uppercase tracking-[0.1em] text-[#C58B52] block mb-1">
                            Primary Scriptural Source
                          </span>
                          <span className="font-instrument text-sm text-[#1C1C1A] font-semibold">
                            {event.scripture}
                          </span>
                        </div>

                        <div>
                          <span className="font-general text-[7px] uppercase tracking-[0.1em] text-[#9E2A2B] block mb-1">
                            Why it matters to the case file
                          </span>
                          <p className="font-cormorant text-sm text-[#1C1C1A]/70 leading-relaxed">
                            {event.whyMatters}
                          </p>
                        </div>

                        <div className="border-t border-[#C58B52]/10 pt-3">
                          <button
                            onClick={() => setLearnMoreOpenIdx(learnMoreOpenIdx === idx ? null : idx)}
                            className="font-general text-[8px] uppercase tracking-wider text-[#9E2A2B] focus:outline-none"
                          >
                            {learnMoreOpenIdx === idx ? 'Collapse Dossier Details ▲' : 'Open Dossier Details ▼'}
                          </button>
                          {learnMoreOpenIdx === idx && (
                            <p className="font-cormorant text-xs text-[#1C1C1A]/60 mt-2 bg-[#F4EFE6]/40 p-3 border-l border-[#C58B52] leading-relaxed">
                              {event.learnMore}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <Reveal className="mt-8">
            <div className="border-l border-[#9E2A2B]/40 bg-[#9E2A2B]/4 p-5">
              <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#9E2A2B] block mb-2">
                Contextual Analysis
              </span>
              <p className="font-cormorant text-base text-[#1C1C1A]/80 leading-relaxed font-light">
                These historical milestones verify that war was not the preferred first-resort option. Over thirteen years of exile, repeated compromise packages, and personal peace journeys from Kṛṣṇa were flatly rejected. Combat was initiated only after all diplomatic channels broke down completely.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION III: ARJUNA'S CRISIS
        ══════════════════════════════════════════════ */}
        <section id="section-crisis" className="py-16 border-t border-[#C58B52]/20">
          <Reveal>
            <h2 className="font-instrument text-4xl text-[#1C1C1A] mb-2">
              Arjuna's Crisis
            </h2>
            <p className="font-instrument italic text-lg text-[#C58B52] mb-8">
              The Bhagavad Gītā begins with a warrior who refuses to fight.
            </p>
          </Reveal>

          {/* Cinematic Intro */}
          <Reveal>
            <div className="w-full h-40 bg-gradient-to-r from-[#0d0d0c]/5 via-[#c58b52]/10 to-[#0d0d0c]/5 border border-[#C58B52]/20 flex flex-col justify-center items-center text-center p-6 relative overflow-hidden select-none mb-12">
              <span className="font-general text-[8px] uppercase tracking-[0.4em] text-[#C58B52] block mb-2">
                Kurukṣetra Battle Line
              </span>
              <p className="font-instrument text-lg text-[#1c1c1a]/70 font-light mb-1">
                "The conches have sounded. The arrows are raised."
              </p>
              <p className="font-cormorant italic text-sm text-[#9E2A2B]">
                Yet, the greatest archer lowers his bow.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#C58B52]/30 to-transparent" />
            </div>
          </Reveal>

          {/* Arjuna's Four Reasons */}
          <div className="w-full my-8">
            <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block mb-6 text-center">
              The Four Claims of Hesitation (Select to expand)
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {arjunaReasons.map((reason, idx) => {
                const isExpanded = expandedReasons.has(idx);
                return (
                  <div
                    key={reason.id}
                    onClick={() => handleReasonClick(idx)}
                    className={`border p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[140px] ${
                      isExpanded
                        ? 'border-[#9E2A2B] bg-white shadow-sm'
                        : 'border-[#C58B52]/25 bg-white/20 hover:border-[#9E2A2B]/40'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-general text-[8.5px] uppercase tracking-wider text-[#9E2A2B] font-bold">
                          Reason 0{idx + 1} · {reason.verseRef}
                        </span>
                        <span className="text-xs text-[#1C1C1A]/40">{isExpanded ? '▲' : '▼'}</span>
                      </div>
                      <h4 className="font-instrument text-base text-[#1C1C1A] font-semibold leading-tight">
                        {reason.title}
                      </h4>
                      <span className="font-cormorant text-xs text-[#1C1C1A]/50 block mt-0.5">
                        {reason.subtitle}
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-3 border-t border-[#C58B52]/10 pt-3 text-xs"
                        >
                          <p className="font-cormorant text-sm text-[#1C1C1A]/70 leading-relaxed">
                            {reason.desc}
                          </p>
                          <p className="font-cormorant text-xs text-[#9E2A2B]/85 mt-2 italic leading-relaxed">
                            <strong>Dossier Analysis:</strong> {reason.whyMatters}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scriptural Evidence Exhibit Deck */}
          <div className="w-full my-12 border border-[#C58B52]/20 bg-white/30 p-6 md:p-8 flex flex-col min-h-[380px] justify-between">
            {/* Step Navigation Headers */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center border-b border-[#C58B52]/10 pb-4 mb-6 select-none">
              {arjunaVerses.map((v, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveVerseIdx(idx)}
                  className={`font-general text-[9px] uppercase tracking-[0.2em] transition-all duration-300 relative py-1 ${
                    activeVerseIdx === idx
                      ? 'text-[#9E2A2B] font-bold'
                      : 'text-[#1C1C1A]/40 hover:text-[#1C1C1A]/70'
                  }`}
                >
                  {v.label}
                  {activeVerseIdx === idx && (
                    <motion.div
                      layoutId="activeVerseLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E2A2B]"
                      transition={{ duration: 0.4, ease: EASE_EXPO }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Verse Display */}
            <div className="flex-1 flex flex-col justify-center my-2 text-center">
              <span className="font-general text-[7px] uppercase tracking-[0.4em] text-[#C58B52] block mb-4">
                SANSKRIT PRIMARY EXHIBIT · {arjunaVerses[activeVerseIdx].label}
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVerseIdx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: EASE_EXPO }}
                  className="w-full"
                >
                  <p className="font-cormorant text-[#1C1C1A] leading-[1.8] font-light text-lg md:text-xl whitespace-pre-line mb-4">
                    {arjunaVerses[activeVerseIdx].sanskrit}
                  </p>
                  <p className="font-cormorant italic text-xs md:text-sm text-[#1C1C1A]/60 whitespace-pre-line mb-4">
                    {arjunaVerses[activeVerseIdx].iast}
                  </p>
                  <div className="max-w-xl mx-auto border-t border-[#C58B52]/10 pt-4 flex flex-col gap-4 text-left">
                    <div>
                      <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#C58B52] block mb-0.5">
                        Translation
                      </span>
                      <p className="font-cormorant text-sm text-[#1C1C1A]/85 italic leading-relaxed">
                        {arjunaVerses[activeVerseIdx].trans}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#1C1C1A]/40 block mb-0.5">
                          Narrative Context
                        </span>
                        <p className="font-cormorant text-xs text-[#1C1C1A]/70 leading-relaxed">
                          {arjunaVerses[activeVerseIdx].context}
                        </p>
                      </div>
                      <div>
                        <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#9E2A2B] block mb-0.5">
                          Why it matters to investigation
                        </span>
                        <p className="font-cormorant text-xs text-[#9E2A2B]/85 leading-relaxed">
                          {arjunaVerses[activeVerseIdx].whyMatters}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between items-center border-t border-[#C58B52]/10 pt-4 mt-6">
              <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#1C1C1A]/35">
                Exhibit {activeVerseIdx + 1} of {arjunaVerses.length}
              </span>
              <button
                onClick={() => setActiveVerseIdx((prev) => (prev + 1) % arjunaVerses.length)}
                className="font-general text-[9px] uppercase tracking-[0.2em] text-[#9E2A2B] hover:text-[#1C1C1A] transition-colors flex items-center gap-2 group"
              >
                Next Exhibit
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>

          {/* Myth vs Scripture */}
          <Reveal>
            <div className="border border-[#9E2A2B]/20 bg-white/20 p-6 flex flex-col gap-2.5">
              <span className="font-general text-[8.5px] uppercase tracking-[0.25em] text-[#9E2A2B] font-bold">
                Myth vs. Scripture Checkpoint
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                <div>
                  <span className="font-general text-[8px] uppercase text-[#1C1C1A]/40">Popular Consensus</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light mt-1">
                    Arjuna is an absolute pacifist who objects to warfare on universal humanitarian principles, believing that physical violence is always wrong.
                  </p>
                </div>
                <div>
                  <span className="font-general text-[8px] uppercase text-[#9E2A2B]">Scriptural Reality</span>
                  <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-light mt-1">
                    Arjuna's refusal to fight arises specifically when he sees family members (sva-jana) on the opposing side. He has fought many military campaigns before and does not object to warfare as a state tool, but breaks down because of personal attachments.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION IV: KRISHNA'S RESPONSE
        ══════════════════════════════════════════════ */}
        <section id="section-response" className="py-16 border-t border-[#C58B52]/20">
          <Reveal>
            <h2 className="font-instrument text-4xl text-[#1C1C1A] mb-2">
              Kṛṣṇa's Response
            </h2>
            <p className="font-instrument italic text-lg text-[#C58B52] mb-8">
              Did Kṛṣṇa teach war... or something much deeper?
            </p>
          </Reveal>

          {/* Opening Experience */}
          <Reveal>
            <div className="w-full h-44 bg-gradient-to-r from-[#0d0d0c]/5 via-[#c58b52]/8 to-[#0d0d0c]/5 border border-[#C58B52]/20 flex flex-col justify-center items-center text-center p-6 relative overflow-hidden select-none mb-12">
              <span className="font-general text-[8px] uppercase tracking-[0.4em] text-[#C58B52] block mb-2">
                The Dialogue Opens
              </span>
              <p className="font-instrument text-xl text-[#1c1c1a]/70 font-light mb-1">
                "Kṛṣṇa does not begin by commanding."
              </p>
              <p className="font-cormorant italic text-sm text-[#9E2A2B]">
                He begins by teaching.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#C58B52]/30 to-transparent" />
            </div>
          </Reveal>

          {/* Six Investigation Panels Accordion System */}
          <div className="w-full my-8">
            <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block mb-6 text-center">
              The Six Investigation Panels (Select to inspect layers of reasoning)
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {responsePanels.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePanelIdx(idx)}
                  className={`p-5 border text-left transition-all duration-300 flex flex-col justify-between min-h-[110px] ${
                    activePanelIdx === idx
                      ? 'border-[#9E2A2B] bg-[#9E2A2B]/5 shadow-sm'
                      : 'border-[#1C1C1A]/10 bg-white/20 hover:border-[#C58B52]/40'
                  }`}
                >
                  <div className="flex justify-between w-full mb-2">
                    <span className="font-general text-[7px] text-[#C58B52] uppercase tracking-wider">
                      Layer 0{idx + 1}
                    </span>
                    <span className="font-general text-[7px] text-[#9E2A2B] uppercase tracking-widest font-bold">
                      VERDICT: {p.verdict}
                    </span>
                  </div>
                  <h4 className="font-instrument text-sm font-semibold text-[#1C1C1A] leading-tight">
                    {p.title}
                  </h4>
                </button>
              ))}
            </div>

            {/* Panel Details Display */}
            <div className="border border-[#9E2A2B]/20 bg-white/40 p-6 md:p-8 min-h-[160px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePanelIdx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: EASE_EXPO }}
                >
                  <div className="flex justify-between items-baseline mb-4 border-b border-[#C58B52]/10 pb-2">
                    <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#9E2A2B] font-bold">
                      EXAMINING LAYER 0{activePanelIdx + 1} · {responsePanels[activePanelIdx].verdict}
                    </span>
                    <span className="font-general text-[8px] uppercase tracking-widest text-[#1C1C1A]/40 font-bold">
                      {responsePanels[activePanelIdx].scriptureLink}
                    </span>
                  </div>
                  <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/85 leading-relaxed font-light">
                    {responsePanels[activePanelIdx].desc}
                  </p>

                  {/* Panel 6 Special Sub-Cards showing focus details */}
                  {activePanelIdx === 5 && (
                    <div className="flex flex-wrap gap-2 mt-6 border-t border-[#C58B52]/10 pt-4">
                      {['Dharma', 'Karma Yoga', 'Detached Action', 'Self-control', 'Knowledge', 'Devotion', 'Liberation'].map((val, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 border border-[#C58B52]/30 bg-white/50 font-general text-[8px] uppercase tracking-widest text-[#1C1C1A] hover:bg-[#C58B52]/5 transition-colors"
                        >
                          {val}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Key Verses Evidence Deck System */}
          <div className="w-full my-12 border border-[#C58B52]/20 bg-white/30 p-6 md:p-8 flex flex-col min-h-[440px] justify-between">
            {/* Step Navigation Headers */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center border-b border-[#C58B52]/10 pb-4 mb-6 select-none">
              {responseVerses.map((v, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveEvidenceVerseIdx(idx)}
                  className={`font-general text-[9px] uppercase tracking-[0.2em] transition-all duration-300 relative py-1 ${
                    activeEvidenceVerseIdx === idx
                      ? 'text-[#9E2A2B] font-bold'
                      : 'text-[#1C1C1A]/40 hover:text-[#1C1C1A]/70'
                  }`}
                >
                  {v.label}
                  {activeEvidenceVerseIdx === idx && (
                    <motion.div
                      layoutId="activeResponseVerseLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E2A2B]"
                      transition={{ duration: 0.4, ease: EASE_EXPO }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Verse Display */}
            <div className="flex-1 flex flex-col justify-center my-2 text-center">
              <span className="font-general text-[7px] uppercase tracking-[0.4em] text-[#C58B52] block mb-4">
                Case Exhibit: {responseVerses[activeEvidenceVerseIdx].label}
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeEvidenceVerseIdx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: EASE_EXPO }}
                  className="w-full"
                >
                  <p className="font-cormorant text-[#1C1C1A] leading-[1.8] font-light text-lg md:text-xl whitespace-pre-line mb-4">
                    {responseVerses[activeEvidenceVerseIdx].sanskrit}
                  </p>
                  <p className="font-cormorant italic text-xs md:text-sm text-[#1C1C1A]/60 whitespace-pre-line mb-4">
                    {responseVerses[activeEvidenceVerseIdx].iast}
                  </p>
                  <div className="max-w-xl mx-auto border-t border-[#C58B52]/10 pt-4 flex flex-col gap-4 text-left">
                    <div>
                      <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#C58B52] block mb-0.5">
                        Translation
                      </span>
                      <p className="font-cormorant text-sm text-[#1C1C1A]/85 italic leading-relaxed">
                        {responseVerses[activeEvidenceVerseIdx].trans}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#1C1C1A]/40 block mb-0.5">
                          Immediate Context
                        </span>
                        <p className="font-cormorant text-xs text-[#1C1C1A]/70 leading-relaxed">
                          {responseVerses[activeEvidenceVerseIdx].context}
                        </p>
                      </div>
                      <div>
                        <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#9E2A2B] block mb-0.5">
                          Common Misinterpretation
                        </span>
                        <p className="font-cormorant text-xs text-[#9E2A2B]/85 leading-relaxed">
                          {responseVerses[activeEvidenceVerseIdx].misinterpretation}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-[#C58B52]/10 pt-3">
                      <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#1C1C1A] block mb-0.5">
                        What the verse actually teaches
                      </span>
                      <p className="font-cormorant text-xs text-[#1C1C1A]/70 leading-relaxed font-semibold">
                        {responseVerses[activeEvidenceVerseIdx].truth}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between items-center border-t border-[#C58B52]/10 pt-4 mt-6">
              <span className="font-general text-[9px] uppercase tracking-[0.2em] text-[#1C1C1A]/35">
                Exhibit {activeEvidenceVerseIdx + 1} of {responseVerses.length}
              </span>
              <button
                onClick={() => setActiveEvidenceVerseIdx((prev) => (prev + 1) % responseVerses.length)}
                className="font-general text-[9px] uppercase tracking-[0.2em] text-[#9E2A2B] hover:text-[#1C1C1A] transition-colors flex items-center gap-2 group"
              >
                Next Exhibit
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION V: THE EVIDENCE REVIEW
        ══════════════════════════════════════════════ */}
        <section id="section-evidence" className="py-16 border-t border-[#C58B52]/20">
          <Reveal>
            <h2 className="font-instrument text-4xl text-[#1C1C1A] mb-2">
              The Evidence Review
            </h2>
            <p className="font-instrument italic text-lg text-[#C58B52] mb-8">
              What does the evidence actually support?
            </p>
          </Reveal>

          {/* Opening Dialogue Card */}
          <Reveal>
            <div className="w-full h-36 bg-gradient-to-r from-[#0d0d0c]/5 via-[#c58b52]/10 to-[#0d0d0c]/5 border border-[#C58B52]/20 flex flex-col justify-center items-center text-center p-6 relative overflow-hidden select-none mb-12">
              <span className="font-general text-[8px] uppercase tracking-[0.4em] text-[#C58B52] block mb-2">
                Dossier Rule
              </span>
              <p className="font-instrument text-xl text-[#1c1c1a]/70 font-light mb-1">
                "In every investigation... claims are not accepted."
              </p>
              <p className="font-cormorant italic text-sm text-[#9E2A2B]">
                They are tested.
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#C58B52]/30 to-transparent" />
            </div>
          </Reveal>

          {/* Interactive Evidence Board Accordions */}
          <div className="w-full my-8">
            <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block mb-6 text-center font-bold">
              The Evidence Board (Select claims to verify)
            </span>

            <div className="flex flex-col gap-4">
              {evidenceBoard.map((item, idx) => {
                const isExpanded = expandedEvidenceIdx === idx;
                return (
                  <div
                    key={item.id}
                    className={`border transition-all duration-300 ${
                      isExpanded
                        ? 'border-[#9E2A2B] bg-white shadow-sm'
                        : 'border-[#C58B52]/20 bg-white/20 hover:border-[#9E2A2B]'
                    }`}
                  >
                    {/* Header */}
                    <button
                      onClick={() => setExpandedEvidenceIdx(isExpanded ? null : idx)}
                      className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                    >
                      <div>
                        <span className={`inline-block px-2 py-0.5 border text-[7px] font-general uppercase tracking-widest font-semibold mr-3 mb-1 ${item.statusColor}`}>
                          {item.status}
                        </span>
                        <h4 className="font-instrument text-base text-[#1C1C1A] font-semibold mt-1">
                          {item.title}
                        </h4>
                      </div>
                      <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52]">
                        {isExpanded ? '[ COLLAPSE ]' : '[ REVIEW EVIDENCE ]'}
                      </span>
                    </button>

                    {/* Content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: EASE_EXPO }}
                          className="px-5 pb-5 pt-1 border-t border-[#C58B52]/10 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mt-3 animate-fade-in"
                        >
                          <div>
                            <span className="font-general text-[7px] uppercase tracking-[0.1em] text-[#C58B52] block mb-1">
                              Evidence Examined
                            </span>
                            <p className="font-cormorant text-sm text-[#1C1C1A]/75 leading-relaxed font-light mb-3">
                              {item.evidence}
                            </p>
                            <span className="font-general text-[7px] uppercase tracking-[0.1em] text-[#C58B52] block mb-1">
                              Scriptural Findings
                            </span>
                            <p className="font-cormorant text-sm text-[#1C1C1A]/80 leading-relaxed font-semibold italic">
                              {item.findings}
                            </p>
                          </div>

                          <div className="border-t md:border-t-0 md:border-l border-[#C58B52]/10 pt-4 md:pt-0 md:pl-4">
                            <span className="font-general text-[7px] uppercase tracking-[0.1em] text-[#9E2A2B] block mb-1">
                              Editorial Analysis
                            </span>
                            <p className="font-cormorant text-xs text-[#1C1C1A]/70 leading-relaxed">
                              {item.analysis}
                            </p>
                            
                            <span className="inline-block mt-4 px-2 py-0.5 border border-[#C58B52]/30 bg-[#C58B52]/5 font-general text-[7px] uppercase tracking-wider text-[#C58B52]">
                              Status: Preliminary Finding Locked
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scriptural vs Popular Belief Comparison */}
          <div className="w-full my-12 border border-[#C58B52]/25 bg-white/20 p-6 md:p-8">
            <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block mb-6 text-center font-bold">
              Textual Reference vs Popular Statements
            </span>

            <div className="flex flex-col gap-4">
              {popularVsScripture.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3 border-b border-[#C58B52]/10 text-xs md:text-sm">
                  <div>
                    <span className="font-general text-[7px] uppercase tracking-[0.15em] text-[#9E2A2B] block mb-1 font-semibold">
                      Popular Statement
                    </span>
                    <p className="font-instrument text-[#1C1C1A] font-semibold italic">
                      "{item.pop}"
                    </p>
                  </div>
                  <div className="border-t md:border-t-0 md:border-l border-[#C58B52]/10 pt-2 md:pt-0 md:pl-4">
                    <span className="font-general text-[7px] uppercase tracking-[0.15em] text-[#C58B52] block mb-1 font-semibold">
                      What the Text Actually Says
                    </span>
                    <p className="font-cormorant text-[#1C1C1A]/70 leading-relaxed">
                      "{item.skt}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Confidence Scale meter */}
          <div className="w-full my-8 border border-[#C58B52]/25 bg-[#C58B52]/5 p-6 flex flex-col gap-4">
            <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block text-center font-bold">
              Dossier Verification Confidence Scale
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { title: 'Explicit Scripture', score: '★★★★★' },
                { title: 'Historical Context', score: '★★★★★' },
                { title: 'Traditional Commentary', score: '★★★★☆' },
                { title: 'Modern Scholarly Consensus', score: '★★★★☆' },
              ].map((c, i) => (
                <div key={i} className="p-3 border border-[#C58B52]/10 bg-white/40">
                  <span className="font-general text-[8px] text-[#1C1C1A]/40 block uppercase mb-1">
                    {c.title}
                  </span>
                  <span className="text-[#9E2A2B] font-bold text-sm tracking-widest block">
                    {c.score}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION VI: FINAL VERDICT
        ══════════════════════════════════════════════ */}
        <section id="section-verdict" className="py-16 border-t border-[#C58B52]/20">
          <Reveal>
            <h2 className="font-instrument text-4xl text-[#1C1C1A] mb-2">
              Final Verdict
            </h2>
            <p className="font-instrument italic text-lg text-[#C58B52] mb-8">
              After examining the evidence... what conclusion can honestly be reached?
            </p>
          </Reveal>

          {/* Opening Silence Card */}
          <Reveal>
            <div className="w-full h-36 bg-gradient-to-r from-[#0d0d0c]/5 via-[#c58b52]/10 to-[#0d0d0c]/5 border border-[#C58B52]/20 flex flex-col justify-center items-center text-center p-6 relative overflow-hidden select-none mb-12">
              <span className="font-general text-[8px] uppercase tracking-[0.4em] text-[#C58B52] block mb-2">
                Investigation Complete
              </span>
              <p className="font-instrument text-xl text-[#1c1c1a]/70 font-light mb-1">
                "Every conclusion is based upon the evidence reviewed."
              </p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#C58B52]/30 to-transparent" />
            </div>
          </Reveal>

          {/* Premium Verdict Box */}
          <Reveal className="mb-12">
            <div className="border border-[#C58B52]/30 bg-white/40 p-8 relative shadow-sm">
              <div className="absolute -top-3.5 left-6 bg-[#C58B52] text-white px-3 py-1 font-general text-[8px] uppercase tracking-[0.2em] font-semibold">
                OFFICIAL VERDICT
              </div>

              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-3">
                  <span className="font-general text-[9px] uppercase tracking-[0.25em] text-[#1C1C1A]/40">
                    Target Claim:
                  </span>
                  <span className="font-cormorant text-base text-[#1C1C1A] italic">
                    "The Bhagavad Gītā teaches people to fight wars."
                  </span>
                </div>

                {/* Verdict Badge */}
                <div className="flex items-center gap-3 my-2">
                  <span className="inline-block px-3 py-1 border border-amber-600 bg-amber-50 font-general text-xs uppercase tracking-widest text-amber-600 font-bold">
                    🟠 MISLEADING
                  </span>
                </div>

                <p className="font-cormorant text-lg text-[#1C1C1A]/85 leading-relaxed font-light">
                  The Bhagavad Gītā does contain Kṛṣṇa\'s instruction for Arjuna to fight. However, the evidence does not support the claim that the Gītā teaches war as a universal principle or encourages violence for its own sake.
                </p>
                <p className="font-cormorant text-base text-[#1C1C1A]/70 leading-relaxed font-light">
                  Rather, its central teachings concern **Dharma, Svadharma, Karma Yoga, Detached Action, Self-Knowledge, and Liberation**. The instruction to fight is given within a specific historical, moral, and narrative context after repeated attempts at peace have failed.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Why This Verdict Expandable Cards */}
          <div className="w-full my-8">
            <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block mb-6 text-center font-bold">
              Verdict Rationales (Select cards to expand)
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {verdictDetails.map((card, idx) => {
                const isExpanded = expandedVerdictCardIdx === idx;
                return (
                  <div
                    key={card.id}
                    className={`border transition-all duration-300 p-5 cursor-pointer flex flex-col justify-between min-h-[120px] ${
                      isExpanded
                        ? 'border-[#9E2A2B] bg-white shadow-sm'
                        : 'border-[#C58B52]/20 bg-white/20 hover:border-[#9E2A2B]'
                    }`}
                    onClick={() => setExpandedVerdictCardIdx(isExpanded ? null : idx)}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#C58B52] font-bold">
                          {card.title}
                        </span>
                        <span className="text-xs text-[#1C1C1A]/30">
                          {isExpanded ? '▲' : '▼'}
                        </span>
                      </div>
                      
                      <AnimatePresence initial={false}>
                        {isExpanded ? (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 0.8 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="font-cormorant text-sm text-[#1C1C1A] leading-relaxed mt-2"
                          >
                            {card.desc}
                          </motion.p>
                        ) : (
                          <span className="font-cormorant text-xs text-[#1C1C1A]/40 italic block mt-1">
                            Click to review rationale...
                          </span>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* The One-Minute Answer Box */}
          <div className="w-full my-12 border-2 border-[#9E2A2B]/40 bg-[#9E2A2B]/2 p-6 md:p-8 relative">
            <div className="absolute -top-3.5 left-6 bg-[#9E2A2B] text-white px-3 py-1 font-general text-[8px] uppercase tracking-[0.2em] font-semibold">
              THE ONE-MINUTE ANSWER
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <div>
                <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#1C1C1A]/40 block">
                  Question
                </span>
                <span className="font-instrument text-lg text-[#1C1C1A] font-semibold block mt-1">
                  "Does the Bhagavad Gītā promote war?"
                </span>
              </div>

              <div>
                <span className="font-general text-[8px] uppercase tracking-[0.1em] text-[#9E2A2B] block">
                  Answer Verdict
                </span>
                <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/85 leading-relaxed font-bold mt-1">
                  No—not as a universal teaching.
                </p>
                <p className="font-cormorant text-sm text-[#1C1C1A]/70 leading-relaxed font-light mt-1">
                  The Gītā records Kṛṣṇa instructing Arjuna, a warrior facing an extraordinary moral crisis after every peaceful option had failed, to fulfill his duty without hatred, selfish desire, or attachment. Its primary concern is Dharma and righteous action—not the glorification of war.
                </p>
              </div>
            </div>
          </div>

          {/* What We Learned Checklist */}
          <div className="w-full my-8 bg-white/20 border border-[#C58B52]/10 p-6 md:p-8">
            <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block mb-6 text-center font-bold">
              Key Lessons of Investigation
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatWeLearned.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 border-b border-[#C58B52]/10">
                  <span className="text-[#9E2A2B] font-semibold text-xs">✓</span>
                  <span className="font-cormorant text-sm text-[#1C1C1A]/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Confidence Assessment Panel */}
          <div className="w-full my-8 border border-[#C58B52]/25 bg-white/30 p-6">
            <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block text-center mb-4 font-bold">
              Dossier Confidence Assessment
            </span>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {[
                { title: 'Primary Scriptures', score: '★★★★★' },
                { title: 'Narrative Context', score: '★★★★★' },
                { title: 'Traditional Commentaries', score: '★★★★☆' },
                { title: 'Modern Scholarship', score: '★★★★☆' },
                { title: 'Editorial Confidence', score: 'VERY HIGH' },
              ].map((c, i) => (
                <div key={i} className="p-3 border border-[#C58B52]/10 bg-white/40">
                  <span className="font-general text-[7px] text-[#1C1C1A]/40 block uppercase mb-1">
                    {c.title}
                  </span>
                  <span className="text-[#9E2A2B] font-bold text-xs tracking-wider block">
                    {c.score}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-cormorant text-xs text-[#1C1C1A]/60 leading-relaxed text-center mt-4 max-w-md mx-auto">
              This verdict reflects the strongest conclusion supported by the available scriptural and historical evidence reviewed in this investigation.
            </p>
          </div>

          {/* Collapsible Editorial Transparency Section */}
          <div className="w-full my-6 border border-[#C58B52]/20 bg-white/30">
            <button
              onClick={() => setTransparencyOpen(!transparencyOpen)}
              className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
            >
              <span className="font-instrument text-sm font-semibold text-[#1C1C1A]">
                Why TATTVA Chose "Misleading"
              </span>
              <span className="font-general text-[8px] uppercase tracking-widest text-[#C58B52]">
                {transparencyOpen ? '[ COLLAPSE ]' : '[ REVIEW TRANSPARENCY NOTE ]'}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {transparencyOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE_EXPO }}
                  className="border-t border-[#C58B52]/10 p-5 bg-white/40"
                >
                  <p className="font-cormorant text-sm text-[#1C1C1A]/70 leading-relaxed">
                    The editorial team deliberately avoided simple tags like "True" or "False" because complex claims often contain a grain of truth but become highly inaccurate once removed from context. The claim that the Gita teaches war has a factual foundation (the instruction exists), but the conclusion drawn is misleading. The verdict evaluates the claim as a whole, rather than isolating individual words or verses.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION VII: CONTINUE THE INVESTIGATION
        ══════════════════════════════════════════════ */}
        <section className="py-16 border-t border-[#C58B52]/20">
          <Reveal>
            <h2 className="font-instrument text-4xl text-[#1C1C1A] mb-2">
              Continue the Investigation
            </h2>
            <p className="font-instrument italic text-lg text-[#C58B52] mb-8">
              One investigation often leads to another.
            </p>
          </Reveal>

          {/* Related Case Files Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            {relatedCases.map((c, idx) => {
              const isAvailable = c.status === 'Available';
              const targetPath = c.id === 'does-gita-teach-war' ? '/satya-mithya' : `/satya-mithya/${c.id}`;
              
              const CardContent = (
                <>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-general text-[8px] uppercase tracking-wider text-[#9E2A2B] font-semibold">
                        {c.number}
                      </span>
                      <span className={`font-general text-[7px] uppercase tracking-widest px-2 py-0.5 border ${
                        isAvailable ? 'text-green-600 border-green-600 bg-green-50' : 'text-[#1C1C1A]/40 border-[#1C1C1A]/20'
                      }`}>
                        {c.status}
                      </span>
                    </div>
                    <h4 className="font-instrument text-base text-[#1C1C1A] font-semibold">
                      {c.title}
                    </h4>
                    <p className="font-cormorant text-xs text-[#1C1C1A]/65 leading-relaxed mt-2">
                      {c.desc}
                    </p>
                  </div>
                  {isAvailable && (
                    <span className="font-general text-[8px] uppercase tracking-wider text-[#9E2A2B] mt-4 block font-bold">
                      Open Case Dossier →
                    </span>
                  )}
                </>
              );

              if (isAvailable) {
                return (
                  <Link
                    key={idx}
                    to={targetPath}
                    className="border border-[#9E2A2B]/40 bg-white/30 cursor-pointer hover:border-[#9E2A2B] shadow-sm p-6 flex flex-col justify-between min-h-[160px] transition-all duration-300"
                  >
                    {CardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={idx}
                  className="border border-[#1C1C1A]/10 bg-[#1c1c1a]/5 opacity-60 cursor-not-allowed p-6 flex flex-col justify-between min-h-[160px]"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>

          {/* Related TATTVA Content (Explore volume sequence) */}
          <div className="w-full my-12 border-t border-b border-[#C58B52]/10 py-12">
            <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#C58B52] block mb-8 text-center font-bold">
              Continue Exploring Connected Paths
            </span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  tag: 'Inquiry Archive',
                  title: 'Free Will vs Destiny',
                  desc: 'Explores the metaphysical boundary of choice, providing vital context for the Gītā\'s call to action.'
                },
                {
                  tag: 'TATTVA Library',
                  title: 'Creation (Vol 03)',
                  desc: 'Unfolds how elements materialize, providing context for the physical arena of duty.'
                },
                {
                  tag: 'TATTVA Library',
                  title: 'Karma (Coming Soon)',
                  desc: 'Systematically maps the mechanics of cause, effect, and moral responsibility.'
                },
                {
                  tag: 'TATTVA Library',
                  title: 'Dharma (Coming Soon)',
                  desc: 'Explores civic responsibility and context-specific duty (Svadharma).'
                }
              ].map((card, idx) => (
                <div key={idx} className="border border-[#C58B52]/15 bg-white/20 p-4 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <span className="font-general text-[7px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-2 font-bold">
                      {card.tag}
                    </span>
                    <h5 className="font-instrument text-sm text-[#1C1C1A] font-semibold mb-2 leading-tight">
                      {card.title}
                    </h5>
                    <p className="font-cormorant text-xs text-[#1C1C1A]/65 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                  <span className="font-general text-[7px] uppercase tracking-wider text-[#C58B52] block mt-4">
                    Chapter 0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Research Standard Box */}
          <div className="border border-[#C58B52]/20 bg-white/30 p-8 my-8 text-center max-w-xl mx-auto">
            <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#C58B52] block mb-4 font-bold">
              TATTVA's Research Standard
            </span>
            <p className="font-cormorant text-base text-[#1C1C1A]/85 leading-relaxed font-light mb-6">
              Every investigation on TATTVA follows the same method. The process begins with the claim, examines primary scripture, establishes historical context, distinguishes scripture from later commentary, and separates evidence from personal opinion. Only then is a conclusion reached.
            </p>
            <div className="w-12 h-[1px] bg-[#C58B52]/40 mx-auto" />
          </div>

          {/* Reader Invitation Card */}
          <div className="border border-[#9E2A2B]/30 bg-[#9E2A2B]/2 p-6 md:p-8 text-center max-w-xl mx-auto my-8">
            <h4 className="font-instrument text-lg text-[#1C1C1A] font-semibold mb-3">
              Have you heard another claim about Sanātana Dharma that you\'d like investigated?
            </h4>
            <p className="font-cormorant text-sm text-[#1C1C1A]/70 leading-relaxed font-light">
              Future Case Files are selected based on questions repeatedly asked by readers and commonly encountered misconceptions. Readers are invited to send in claims to be analyzed objectively.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION VIII: FINAL REFLECTION
        ══════════════════════════════════════════════ */}
        <section className="py-16 border-t border-[#C58B52]/20 mt-12">
          <Reveal>
            <h2 className="font-instrument text-4xl text-[#1C1C1A] mb-2 text-center">
              Final Reflection
            </h2>
            <p className="font-instrument italic text-lg text-[#C58B52] mb-12 text-center">
              Truth is rarely discovered through a single quotation.
            </p>
          </Reveal>

          {/* Three silent statements */}
          <div className="my-12 text-center flex flex-col gap-4 max-w-lg mx-auto">
            <Reveal delay={0.2}>
              <p className="font-instrument text-xl text-[#1C1C1A]/90 font-light animate-fade-in">
                "The purpose of an investigation is not to confirm pre-existing beliefs."
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="font-instrument text-xl text-[#1C1C1A]/90 font-light animate-fade-in">
                "It is to discover what the evidence actually supports."
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <p className="font-cormorant italic text-lg text-[#9E2A2B] animate-fade-in">
                "Sometimes... those two are not the same."
              </p>
            </Reveal>
          </div>

          {/* Greater Lesson */}
          <Reveal className="my-12">
            <div className="max-w-xl mx-auto border-l border-[#C58B52]/30 pl-6 my-8">
              <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light mb-4">
                Imagine hearing one sentence from a two-hour conversation. Would that one sentence tell you what the entire conversation meant? Probably not.
              </p>
              <p className="font-cormorant text-base md:text-lg text-[#1C1C1A]/80 leading-relaxed font-light">
                Ancient scriptures deserve the same fairness. Their meaning often emerges not from a single verse, but from their context, their audience, their purpose, and the dialogue as a whole. This is the principle that guides every investigation within TATTVA.
              </p>
            </div>
          </Reveal>

          {/* TATTVA Principle Card */}
          <Reveal className="my-8">
            <div className="border border-[#C58B52]/30 bg-white/40 p-6 md:p-8 max-w-xl mx-auto">
              <span className="font-general text-[8px] uppercase tracking-[0.25em] text-[#C58B52] block mb-6 text-center font-bold">
                THE TATTVA PRINCIPLE
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

          {/* A Final Question */}
          <Reveal className="my-16 text-center max-w-lg mx-auto">
            <span className="font-general text-[8px] uppercase tracking-[0.2em] text-[#9E2A2B] block mb-4">
              Inquiry
            </span>
            <p className="font-instrument italic text-xl md:text-2xl text-[#1C1C1A]/85 leading-relaxed">
              How many beliefs are carried... simply because they have never been investigated?
            </p>
          </Reveal>

          {/* Knowledge Network Visual Map */}
          <div className="w-full my-12 border-t border-[#C58B52]/10 pt-12">
            <span className="font-general text-[9px] uppercase tracking-[0.35em] text-[#C58B52] block mb-8 text-center font-bold">
              SATYA / MITHYĀ Knowledge Map
            </span>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 relative">
              {knowledgeNetwork.map((node, idx) => (
                <React.Fragment key={idx}>
                  <div className={`p-4 border transition-all duration-500 text-center min-w-[130px] ${
                    node.status === 'current'
                      ? 'border-[#9E2A2B] bg-[#9E2A2B]/5 shadow-sm'
                      : 'border-[#1C1C1A]/10 bg-white/10 opacity-40'
                  }`}>
                    <span className="font-general text-[7px] text-[#C58B52] block mb-1 uppercase">
                      {node.desc}
                    </span>
                    <span className="font-instrument text-xs text-[#1C1C1A] font-semibold block leading-tight">
                      {node.title}
                    </span>
                  </div>
                  {idx < knowledgeNetwork.length - 1 && (
                    <span className="text-[#C58B52]/30 text-xs rotate-90 md:rotate-0">
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* The Closing Moment & Button */}
          <Reveal className="my-16 text-center max-w-xl mx-auto">
            <p className="font-instrument text-2xl md:text-3xl text-[#1C1C1A] tracking-tight leading-relaxed mb-10 font-semibold italic">
              "Every claim deserves scrutiny. <br />
              Every scripture deserves context. <br />
              Every seeker deserves the truth."
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1.5 }}
              className="mt-6"
            >
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-6 py-2.5 border border-[#9E2A2B] text-[#9E2A2B] hover:bg-[#9E2A2B] hover:text-white transition-colors duration-500 font-general text-[9px] uppercase tracking-widest font-bold"
              >
                Begin Another Investigation
              </button>
            </motion.div>
          </Reveal>
        </section>

      </div>
    </div>
  );
}
