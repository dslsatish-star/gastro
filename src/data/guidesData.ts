import { GuideArticle } from '../types';

export const guideArticles: GuideArticle[] = [
  {
    slug: 'vedic-astrology',
    title: 'What Is Vedic Astrology (Jyotisha)? The Science of Light',
    readTime: '5 min read',
    category: 'Vedic Foundations',
    summary: 'A foundational overview of traditional Indian Jyotish, its astronomical basis, and how it differs from Western astrology.',
    content: [
      'Vedic astrology, historically called Jyotisha ("the science of light"), is an ancient limb of the Vedas (Vedanga). It maps the celestial geometries of planets, stars, and zodiacal signs to understand human consciousness and life cycles.',
      'Unlike Western tropical astrology which is tied to the seasons, Vedic astrology uses the Sidereal Zodiac (Nirayana), reflecting actual physical astronomical constellations through precision calculation (Ayanamsha).',
      'The purpose of Jyotisha is not fatalistic prediction, but illuminated self-awareness, allowing individuals to make informed decisions in tune with natural cosmic timing.'
    ],
    relatedServices: ['vedic-astrology', 'horoscope-consultation', 'janma-kundali']
  },
  {
    slug: 'kundali',
    title: 'What Is a Kundali? Reading the Vedic Birth Chart',
    readTime: '4 min read',
    category: 'Horoscope Fundamentals',
    summary: 'Understand the traditional Vedic birth chart as an astronomical map of your birth moment rather than a mysterious puzzle.',
    content: [
      'In Vedic Jyotish, your Janma Kundali (birth chart) is the foundational snapshot of the sky at the exact second, minute, and geographical coordinate of your birth.',
      'The chart divides the cosmos into 12 distinct segments called Bhavas (houses) and 12 Rashi signs. Each house reflects a facet of human existence—from physical vitality and identity (1st house) to wealth, family, relationships, career, and inner peace.',
      'Knowing your Janma Kundali helps you navigate life with greater patience and self-awareness, showing natural talents and favorable timing cycles.'
    ],
    relatedServices: ['horoscope-consultation', 'janma-kundali', 'vedic-astrology']
  },
  {
    slug: 'lagna',
    title: 'What Is Lagna (Ascendant)? The Anchor of Your Horoscope',
    readTime: '4 min read',
    category: 'Chart Anatomy',
    summary: 'Why your rising sign is the most personal and fast-changing element in your entire horoscope.',
    content: [
      'Lagna (the Ascendant) is the specific zodiac sign that was ascending on the eastern horizon at the exact minute you were born.',
      'Because the Earth rotates once every 24 hours, a new zodiac sign ascends roughly every two hours. This makes Lagna the most sensitive, individualized timing point in Vedic astrology.',
      'Your Lagna defines your 1st house—your physical constitution, disposition, vitality, and primary orientation toward the world.'
    ],
    relatedServices: ['horoscope-consultation', 'janma-kundali']
  },
  {
    slug: 'rashi',
    title: 'What Is Rashi? The Role of the Moon Sign in Vedic Astrology',
    readTime: '4 min read',
    category: 'Chart Anatomy',
    summary: 'Explore why your Moon Sign (Chandra Rashi) governs emotional balance, mindset, and daily transits in Indian astrology.',
    content: [
      'In Indian astrology, your primary "zodiac sign" is almost always your Chandra Rashi (Moon sign), representing the constellation the Moon was traversing at birth.',
      'The Moon governs the mind (Manas), emotional resilience, subconscious memories, and sensory perception. Understanding your Rashi provides direct insight into how you process stress, relationships, and life events.',
      'All planetary transits (Gochara) and marriage matching calculations (Ashtakoota) take your birth Moon sign as their primary benchmark.'
    ],
    relatedServices: ['horoscope-consultation', 'kundali-matching']
  },
  {
    slug: 'nakshatra',
    title: 'What Is a Nakshatra? The 27 Lunar Constellations',
    readTime: '4 min read',
    category: 'Vedic Concepts',
    summary: 'The 27 lunar mansions that reveal psychological traits, life purpose, and planetary timing cycles.',
    content: [
      'Beyond the 12 sun-signs, Vedic astrology relies deeply on the 27 Nakshatras (lunar mansions). As the Moon orbits the Earth every ~27.3 days, it spends roughly one day in each Nakshatra.',
      'Each Nakshatra is 13° 20\' of the zodiac and is further divided into 4 Padas (quarters). Your Janma Nakshatra (birth star) determines your Vimshottari Mahadasha timeline and auspicious naming syllables.',
      'Nakshatra qualities provide a much finer, more nuanced portrait of human temperament than broad zodiac signs alone.'
    ],
    relatedServices: ['child-horoscope', 'muhurtham', 'horoscope-consultation']
  },
  {
    slug: 'navagraha',
    title: 'What Are the Navagraha? The Nine Cosmic Influences',
    readTime: '5 min read',
    category: 'Planetary Principles',
    summary: 'Understand the traditional nine planetary archetypes—Surya, Chandra, Mangala, Budha, Guru, Shukra, Shani, Rahu, and Ketu.',
    content: [
      'In Vedic Jyotish, the word "Graha" does not merely mean an astronomical planet; it translates to "that which seizes or holds sway over consciousness."',
      'The Navagraha consist of seven visible bodies (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn) and two lunar calculation nodes: Rahu (North Node) and Ketu (South Node).',
      'Each Graha governs specific psychological tendencies, organs, relationships, and societal archetypes, acting as agents through which individual Karma unfolds.'
    ],
    relatedServices: ['vedic-astrology', 'horoscope-consultation', 'dosha-analysis']
  },
  {
    slug: 'planets',
    title: 'Planets in Vedic Astrology: Dignity, Strength, and Influence',
    readTime: '4 min read',
    category: 'Planetary Principles',
    summary: 'How planetary exaltation, debilitation, combust status, and Shadbala determine the impact of a Graha.',
    content: [
      'A planet’s ability to deliver constructive outcomes depends on its Dignity (Avastha). In Vedic astrology, planets can be exalted (Uchha), in their own home (Swakshetra), friendly, enemy, or debilitated (Neecha).',
      'Classical Jyotish utilizes Shadbala (six-fold strength) to evaluate planetary potency rather than superficial single-factor judgments.',
      'Even a traditionally difficult planet can become a Yogakaraka (producer of fortune) when situated favorably for specific rising signs.'
    ],
    relatedServices: ['horoscope-consultation', 'dasha-analysis']
  },
  {
    slug: 'houses',
    title: 'The 12 Bhavas (Houses): The Map of Human Life',
    readTime: '5 min read',
    category: 'Chart Anatomy',
    summary: 'A detailed walkthrough of all 12 houses from Tanu Bhava (Identity) to Moksha Bhava (Spiritual Liberation).',
    content: [
      'The Janma Kundali divides human existence into 12 Bhavas (houses), each representing a cardinal domain of life:',
      '1st: Body, Vitality; 2nd: Wealth, Speech, Family; 3rd: Courage, Siblings; 4th: Mother, Home, Inner Comfort; 5th: Intelligence, Children, Purva Punya; 6th: Debts, Health, Service.',
      '7th: Partnerships, Marriage; 8th: Longevity, Transformations; 9th: Dharma, Father, Guru; 10th: Career, Public Reputation; 11th: Gains, Aspirations; 12th: Expenses, Foreign Travel, Moksha.'
    ],
    relatedServices: ['career-astrology', 'marriage-astrology', 'business-astrology']
  },
  {
    slug: 'dashas',
    title: 'What Are Dashas? The Planetary Timing System of Vedic Astrology',
    readTime: '5 min read',
    category: 'Timing Systems',
    summary: 'Why Vedic astrology excels in timing events through the 120-year Vimshottari Dasha system.',
    content: [
      'The Dasha system is the crowning jewel of Vedic astrology. While transits reflect the weather outside, Dashas reflect the internal psychological and karmic season you are currently experiencing.',
      'The most widely applied system, Vimshottari Dasha, spans 120 years across all 9 planets based on your Moon’s exact Nakshatra degree at birth.',
      'Understanding your active Mahadasha and Antardasha helps clarify why certain periods are effortless for professional advancement, while others call for introspective patience.'
    ],
    relatedServices: ['dasha-analysis', 'career-astrology', 'horoscope-consultation']
  },
  {
    slug: 'yogas',
    title: 'What Are Yogas? Classical Combinations for Prosperity and Purpose',
    readTime: '4 min read',
    category: 'Special Combinations',
    summary: 'How classical alignments between Kendra and Trikona houses create Raja Yogas and Dhana Yogas.',
    content: [
      'In Sanskrit, "Yoga" means union. In Jyotish, a Yoga occurs when specific planets form auspicious relationships by conjunction, aspect, or house exchange.',
      'The most famous yogas include Raja Yogas (combinations connecting angular Kendra houses of action with trinal Trikona houses of grace) and Dhana Yogas (wealth indicators).',
      'Sri Krishna Jyotish evaluates whether a Yoga is truly energized by looking at planetary strength and timing Dashas.'
    ],
    relatedServices: ['horoscope-consultation', 'business-astrology']
  },
  {
    slug: 'doshas',
    title: 'What Are Doshas? Dispel Fear and Understand Traditional Imbalances',
    readTime: '4 min read',
    category: 'Traditional Jyotish',
    summary: 'Why traditional combinations like Kuja Dosha or Rahu-Ketu placements call for calm perspective rather than anxiety.',
    content: [
      'In classical Shastra, "Dosha" denotes a specific imbalance or energetic friction requiring conscious awareness. It is not a curse or irreversible fate.',
      'Combinations like Kuja (Mangal) Dosha have dozens of classical mitigating factors (Bhangas), including placement in friendly signs, aspect from Jupiter, or mutual compatibility with a partner having similar placements.',
      'Our consultations focus on rational, reassuring, and scripture-aligned guidance that dispels superstition and fosters peace of mind.'
    ],
    relatedServices: ['dosha-analysis', 'marriage-astrology', 'kundali-matching']
  },
  {
    slug: 'gochara',
    title: 'What Is Gochara? Understanding Planetary Transits',
    readTime: '4 min read',
    category: 'Timing Systems',
    summary: 'How daily planetary movements through the zodiac interact with your natal Moon and birth chart.',
    content: [
      'Gochara refers to the continuous movement of planets through the constellations relative to your natal Moon sign.',
      'Major transits of slow-moving planets like Jupiter (Guru Gochara, lasting ~1 year per sign), Saturn (Shani Gochara, lasting ~2.5 years per sign), and Rahu/Ketu (~1.5 years) set overarching societal and personal themes.',
      'Transits never override your natal chart and active Mahadasha; they act as catalysts triggering promises already indicated in the birth chart.'
    ],
    relatedServices: ['gochara', 'horoscope-consultation']
  },
  {
    slug: 'panchanga',
    title: 'What Is the Panchanga? The Five Cosmic Pillars of Time',
    readTime: '4 min read',
    category: 'Auspicious Timing',
    summary: 'Explore Tithi, Vaara, Nakshatra, Yoga, and Karana—the five foundational elements of traditional Indian calendars.',
    content: [
      'The word Panchanga literally means "five limbs" (Pancha Anga). It is the sacred astronomical calendar measuring time based on the Sun and Moon’s dynamic relationship:',
      '1. Tithi (Lunar day); 2. Vaara (Solar day of the week); 3. Nakshatra (Lunar constellation); 4. Yoga (Angular sum of Sun and Moon); 5. Karana (Half of a lunar day).',
      'The Panchanga helps identify auspicious days (Shubha Dina) and avoids conflicting windows (such as Rahu Kalam or Varjyam) for meaningful undertakings.'
    ],
    relatedServices: ['muhurtham', 'vedic-astrology']
  },
  {
    slug: 'muhurtham',
    title: 'What Is Muhurtham? Choosing Auspicious Times for Beginnings',
    readTime: '4 min read',
    category: 'Auspicious Timing',
    summary: 'How aligning major ventures with supportive cosmic intervals ensures peace, focus, and smooth execution.',
    content: [
      'A Muhurtham is a carefully selected moment in time (traditionally approximately 48 minutes) where cosmic forces align harmoniously for a specific undertaking.',
      'Whether laying the foundation of a home (Shanku Sthapana), celebrating a marriage, inaugurating a business, or performing Namakarana, selecting a supportive Muhurtham minimizes friction.',
      'Sri Krishna Jyotish evaluates the Panchanga, participants’ Janma Nakshatras, and planetary ascendant to determine the most auspicious time window.'
    ],
    relatedServices: ['muhurtham', 'marriage-astrology', 'business-astrology']
  }
];
