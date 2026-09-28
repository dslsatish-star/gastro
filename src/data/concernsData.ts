import { ClientConcern } from '../types';

export const clientConcerns: ClientConcern[] = [
  {
    id: 'marriage',
    category: 'Marriage',
    icon: 'HeartHandshake',
    title: 'Marriage',
    description: 'Marriage-related horoscope consultation, timing and traditional compatibility analysis.',
    ctaText: 'Marriage Astrology',
    targetSlug: 'marriage-astrology',
    commonQuestions: [
      "I'm considering marriage timing.",
      "I have questions about delay in marriage.",
      "I want to explore marital prospects in my chart."
    ]
  },
  {
    id: 'kundali-matching',
    category: 'Kundali Matching',
    icon: 'HeartHandshake',
    title: 'Kundali Matching',
    description: 'Traditional horoscope matching and Guna Milan analysis for prospective bride and groom.',
    ctaText: 'Kundali Matching',
    targetSlug: 'kundali-matching',
    commonQuestions: [
      "I want Kundali matching for a marriage proposal.",
      "I want to check Ashtakoota Guna Milan points.",
      "I want to evaluate 7th house and Venus compatibility."
    ]
  },
  {
    id: 'career',
    category: 'Career',
    icon: 'Briefcase',
    title: 'Career',
    description: 'Traditional horoscope consultation relating to career and professional questions.',
    ctaText: 'Career Astrology',
    targetSlug: 'career-astrology',
    commonQuestions: [
      "I'm unsure about my career direction.",
      "I'm considering a job change or transfer.",
      "I want to know favorable periods for promotion."
    ]
  },
  {
    id: 'business',
    category: 'Business',
    icon: 'Building2',
    title: 'Business',
    description: 'Traditional Jyotish consultation for business-related questions and timing.',
    ctaText: 'Business Astrology',
    targetSlug: 'business-astrology',
    commonQuestions: [
      "I'm starting a new commercial venture.",
      "I want partnership compatibility evaluation.",
      "I need auspicious timing for business expansion."
    ]
  },
  {
    id: 'education',
    category: 'Education',
    icon: 'GraduationCap',
    title: 'Education',
    description: 'Traditional horoscope consultation relating to education and academic matters.',
    ctaText: 'Education Astrology',
    targetSlug: 'education-astrology',
    commonQuestions: [
      "We are choosing an academic stream for our child.",
      "I'm preparing for competitive examinations.",
      "I want to understand intellectual tendencies in the chart."
    ]
  },
  {
    id: 'relationships',
    category: 'Relationships',
    icon: 'Heart',
    title: 'Relationships',
    description: 'Traditional relationship and compatibility consultation based on Moon and Venus dispositions.',
    ctaText: 'Relationship Astrology',
    targetSlug: 'relationship-astrology',
    commonQuestions: [
      "I have questions about relationship alignment.",
      "I want to understand emotional communication patterns.",
      "I want perspective on long-term harmony."
    ]
  },
  {
    id: 'family',
    category: 'Family',
    icon: 'Home',
    title: 'Family',
    description: 'Traditional consultation concerning family-related questions and domestic peace.',
    ctaText: 'Family Astrology',
    targetSlug: 'family-astrology',
    commonQuestions: [
      "We have important family decisions to navigate.",
      "I want guidance on domestic harmony and alignment.",
      "We are planning family milestones."
    ]
  },
  {
    id: 'muhurtham',
    category: 'Muhurtham',
    icon: 'Clock',
    title: 'Muhurtham',
    description: 'Traditional auspicious-time consultation for weddings, housewarmings, and beginnings.',
    ctaText: 'Muhurtham',
    targetSlug: 'muhurtham',
    commonQuestions: [
      "I need an auspicious wedding date and Muhurtham.",
      "I need a Griha Pravesha (Housewarming) window.",
      "I need a Sumuhurtham for an inauguration."
    ]
  },
  {
    id: 'horoscope',
    category: 'Horoscope',
    icon: 'Compass',
    title: 'Horoscope',
    description: 'Personalized traditional birth-chart interpretation of Janma Kundali and active Dashas.',
    ctaText: 'Horoscope Consultation',
    targetSlug: 'horoscope-consultation',
    commonQuestions: [
      "I want to understand my full Janma Kundali.",
      "What is my Lagna, Rashi, and active Mahadasha?",
      "I want an objective overview of current life cycles."
    ]
  },
  {
    id: 'numerology',
    category: 'Numerology',
    icon: 'Hash',
    title: 'Numerology',
    description: 'Numerology consultation based on birth date and name syllables where genuinely offered.',
    ctaText: 'Numerology',
    targetSlug: 'numerology',
    commonQuestions: [
      "I want an auspicious name for a newborn baby.",
      "I want to evaluate my name vibration or business name.",
      "I want to understand my Life Path number."
    ]
  },
  {
    id: 'dosha',
    category: 'Dosha',
    icon: 'ShieldAlert',
    title: 'Dosha',
    description: 'Traditional analysis and explanation of relevant Dosha concepts without fear-based narratives.',
    ctaText: 'Dosha Analysis',
    targetSlug: 'dosha-analysis',
    commonQuestions: [
      "I want to understand traditional Kuja (Mangal) Dosha.",
      "Are there classical cancellations for my Dosha?",
      "I need an ethical, scripture-based explanation."
    ]
  }
];

export const clientQuestionsList = [
  { question: "I'm considering marriage.", slug: "marriage-astrology" },
  { question: "I want Kundali matching.", slug: "kundali-matching" },
  { question: "I have questions about my relationship.", slug: "love-astrology" },
  { question: "I'm unsure about my career direction.", slug: "career-astrology" },
  { question: "I'm considering a job change.", slug: "career-astrology" },
  { question: "I'm starting a business.", slug: "business-astrology" },
  { question: "I want to understand my horoscope.", slug: "horoscope" },
  { question: "I need an auspicious time for an important event.", slug: "muhurtham" },
  { question: "I want to understand a traditional Dosha.", slug: "dosha-analysis" },
  { question: "I want numerology guidance.", slug: "numerology" },
  { question: "I have another personal question.", slug: "contact" }
];
