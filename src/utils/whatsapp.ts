import { Locale } from '../data/i18n';

export interface WhatsAppMessageOptions {
  path?: string;
  locale?: Locale;
  serviceTitle?: string;
  guideTitle?: string;
  customTopic?: string;
  clientName?: string;
  dob?: string;
  birthTime?: string;
  birthPlace?: string;
  clientContext?: string;
  locationName?: string;
  languageName?: string;
}

export const ASTROLOGER_PHONE = '918885288817';
export const DISPLAY_PHONE = '88852 88817';

/**
 * Generates an advanced, context-aware pre-filled WhatsApp message
 * depending on the user's current page, language locale, and topic.
 */
export function generateWhatsAppMessage(options: WhatsAppMessageOptions = {}): string {
  const {
    path = '/',
    locale = 'en',
    serviceTitle,
    guideTitle,
    customTopic,
    clientName,
    dob,
    birthTime,
    birthPlace,
    clientContext,
    locationName,
    languageName
  } = options;

  const normalized = path.toLowerCase().replace(/\/+$/, '') || '/';

  // 1. Language-based greetings & sign-offs
  let greeting = 'Hello Sri Gayathri Astrology,';
  if (locale === 'te') {
    greeting = 'నమస్కారం శ్రీ గాయత్రి జ್ಯోతిష్యాలయం,';
  } else if (locale === 'hi') {
    greeting = 'नमस्ते श्री गायत्री ज्योतिषालय,';
  } else if (locale === 'kn') {
    greeting = 'ನಮಸ್ಕಾರ ಶ್ರೀ ಗಾಯತ್ರಿ ಜ್ಯೋತಿಷ್ಯಾಲಯ,';
  } else if (locale === 'mr') {
    greeting = 'नमस्कार श्री गायत्री ज्योतिषालय,';
  }

  // 2. Page / Topic / Location specific intent formulation
  let mainIntent = '';

  if (locationName) {
    const sName = serviceTitle || 'Astrology';
    const lang = languageName || (locale === 'te' ? 'తెలుగు' : locale === 'hi' ? 'हिंदी' : locale === 'kn' ? 'ಕನ್ನಡ' : locale === 'mr' ? 'मराठी' : 'English');
    
    if (locale === 'te') {
      mainIntent = `నేను ${locationName} కొరకు '${sName}' జ్యోతిష్య సంప్రదింపుల విషయమై ${lang} భాషలో సంప్రదించాలనుకుంటున్నాను.`;
    } else if (locale === 'hi') {
      mainIntent = `मैं ${locationName} के लिए '${sName}' ज्योतिष परामर्श के संबंध में ${lang} भाषा में संपर्क करना चाहता/चाहती हूँ।`;
    } else if (locale === 'kn') {
      mainIntent = `ನಾನು ${locationName} ಗಾಗಿ '${sName}' ಜ್ಯೋತಿಷ್ಯ ಸಮಾಲೋಚನೆಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ${lang} ಭಾಷೆಯಲ್ಲಿ ಸಂಪರ್ಕಿಸಲು ಬಯಸುತ್ತೇನೆ.`;
    } else if (locale === 'mr') {
      mainIntent = `मी ${locationName} साठी '${sName}' ज्योतिष सल्ल्याच्या संदर्भात ${lang} भाषेत संपर्क साधू इच्छितो/इच्छिते.`;
    } else {
      mainIntent = `I would like to enquire about ${sName} consultation for ${locationName} in ${lang}.`;
    }
  } else if (customTopic) {
    if (locale === 'te') {
      mainIntent = `నేను ${customTopic} విషయమై మీ వైదిక జ్యోతిష్య సలహా తీసుకోవాలనుకుంటున్నాను.`;
    } else if (locale === 'hi') {
      mainIntent = `मैं ${customTopic} के विषय में आपका वैदिक ज्योतिषीय परामर्श लेना चाहता/चाहती हूँ।`;
    } else {
      mainIntent = `I would like to consult with you regarding ${customTopic}.`;
    }
  } else if (serviceTitle) {
    if (locale === 'te') {
      mainIntent = `నేను '${serviceTitle}' కొరకు శ్రీ గాయత్రి జ్యోతిష్యాలయం సంప్రదింపుల వివరాలు తెలుసుకోవాలనుకుంటున్నాను.`;
    } else if (locale === 'hi') {
      mainIntent = `मैं '${serviceTitle}' के संबंध में श्री गायत्री ज्योतिषालय से परामर्श जानकारी चाहता/चाहती हूँ।`;
    } else {
      mainIntent = `I am interested in a Vedic astrology consultation regarding '${serviceTitle}'.`;
    }
  } else if (normalized.includes('astrologer-kurnool') || normalized.includes('locations')) {
    if (locale === 'te') {
      mainIntent = `నేను కర్నూలు (ఆంధ్రప్రదేశ్) కేంద్రంలో ప్రత్యక్ష లేదా ఫోన్ జ్యోతిష్య సంప్రదింపుల సమయం తెలుసుకోవాలనుకుంటున్నాను.`;
    } else if (locale === 'hi') {
      mainIntent = `मैं कुरनूल (आंध्र प्रदेश) केंद्र में प्रत्यक्ष या फोन ज्योतिषीय परामर्श के बारे में जानकारी चाहता/चाहती हूँ।`;
    } else {
      mainIntent = `I am inquiring about an in-person or phone Vedic astrology consultation at your Kurnool center (Andhra Pradesh).`;
    }
  } else if (normalized.includes('marriage-astrology')) {
    if (locale === 'te') {
      mainIntent = `వివాహ జ్యోతిష్యం, వివాహ కాల నిర్ణయం మరియు సంబంధాల పరిశీలన కొరకు మీ సలహా కావలెను.`;
    } else if (locale === 'hi') {
      mainIntent = `विवाह ज्योतिष, विवाह समय निर्धारण और संबंध विश्लेषण के लिए मार्गदर्शन चाहिए।`;
    } else {
      mainIntent = `I would like guidance regarding Marriage Astrology (Vivaha Jyotish), marriage timing and chart analysis.`;
    }
  } else if (normalized.includes('kundali-matching')) {
    if (locale === 'te') {
      mainIntent = `వధూవరుల కుండలి గుణమేళనం (అష్టకూట మేళనం, గోత్రం & దోష పరిశీలన) కొరకు మీ సంప్రదింపులు కావలెను.`;
    } else if (locale === 'hi') {
      mainIntent = `वर-वधू की जन्म पत्रिका मिलान (अष्टकूट गुण मिलान व दोष विश्लेषण) के लिए परामर्श चाहिए।`;
    } else {
      mainIntent = `I am seeking Kundali Matching (Horoscope matching & Ashtakoota Milan) for marriage compatibility.`;
    }
  } else if (normalized.includes('career-astrology')) {
    if (locale === 'te') {
      mainIntent = `ఉద్యోగ మార్పు, కెరీర్ ఎదుగుదల మరియు దశల ఆధారిత జ్యోతిష్య సలహా కొరకు సంప్రదిస్తున్నాను.`;
    } else if (locale === 'hi') {
      mainIntent = `नौकरी परिवर्तन, करियर विकास व दशा विश्लेषण के लिए परामर्श चाहिए।`;
    } else {
      mainIntent = `I would like astrological guidance regarding Career growth, job transitions, and Dasha period analysis.`;
    }
  } else if (normalized.includes('business-astrology')) {
    if (locale === 'te') {
      mainIntent = `నూతన వ్యాపార ప్రారంభం, వ్యాపార భాగస్వామ్యం మరియు అనుకూల సమయాల కొరకు మీ జ్యోతిష్య సలహా కావలెను.`;
    } else if (locale === 'hi') {
      mainIntent = `नए व्यापार प्रारंभ, व्यापारिक साझेदारी और व्यावसायिक मार्गदर्शन के लिए संपर्क कर रहा/रही हूँ।`;
    } else {
      mainIntent = `I would like to consult regarding Business Astrology, enterprise timing, partnerships, and trade prospects.`;
    }
  } else if (normalized.includes('horoscope')) {
    if (locale === 'te') {
      mainIntent = `నా జన్మ కుండలి (జాతక చక్రం), మహాదశ మరియు గ్రహ స్థితుల సమగ్ర పరిశీలన కొరకు సంప్రదిస్తున్నాను.`;
    } else if (locale === 'hi') {
      mainIntent = `मेरी जन्म पत्रिका (कुंडली), महादशा और ग्रह स्थिति के विस्तृत विश्लेषण के लिए परामर्श चाहिए।`;
    } else {
      mainIntent = `I would like a detailed Janma Kundali (birth horoscope) and active Mahadasha reading.`;
    }
  } else if (normalized.includes('muhurtham')) {
    if (locale === 'te') {
      mainIntent = `గృహప్రవేశం / వివాహం / నామకరణం / నూతన కార్యాల కొరకు శుభ ముహూర్తం నిర్ణయించవలెను.`;
    } else if (locale === 'hi') {
      mainIntent = `गृह प्रवेश / विवाह / नामकरण / नए कार्य के लिए शुभ मुहूर्त की गणना करवानी है।`;
    } else {
      mainIntent = `I need classical Panchangam-based Muhurtham calculation for an auspicious upcoming event (Housewarming / Marriage / Venture).`;
    }
  } else if (normalized.includes('numerology')) {
    if (locale === 'te') {
      mainIntent = `శిశువు నామకరణం / పేరు సంఖ్యాశాస్త్రం (న్యూమరాలజీ) సరిచూడటం కొరకు సంప్రదిస్తున్నాను.`;
    } else if (locale === 'hi') {
      mainIntent = `शिशु नामकरण / नाम वर्तनी अंकशास्त्र (न्यूमरोलॉजी) परामर्श के लिए संपर्क कर रहा/रही हूँ।`;
    } else {
      mainIntent = `I would like a traditional Numerology consultation for baby naming / name spelling harmony.`;
    }
  } else if (normalized.includes('dosha-analysis')) {
    if (locale === 'te') {
      mainIntent = `జాతకంలో కుజ దోషం / సర్ప దోషం వంటి గ్రహ స్థితిగతుల శాస్త్రీయ వివరణ కొరకు సంప్రదిస్తున్నాను.`;
    } else if (locale === 'hi') {
      mainIntent = `कुंडली में कुज दोष / मांगलिक विचार आदि के वैदिक विश्लेषण हेतु परामर्श चाहिए।`;
    } else {
      mainIntent = `I would like a balanced, classical Vedic analysis of planetary doshas (Mangal/Kuja Dosha, etc.).`;
    }
  } else if (normalized.includes('guides')) {
    if (guideTitle) {
      mainIntent = `I was reading your astrology article on "${guideTitle}" on Sri Gayathri Astrology and have a question.`;
    } else {
      mainIntent = `I was exploring the Vedic astrology guides on Sri Gayathri Astrology and would like to consult.`;
    }
  } else if (normalized.includes('contact')) {
    if (locale === 'te') {
      mainIntent = `ఆంధ్రప్రదేశ్ & తెలంగాణ ప్రజల కోసం మీతో జ్యోతిష్య సంప్రదింపుల సమయాన్ని తెలుసుకోవాలనుకుంటున్నాను.`;
    } else if (locale === 'hi') {
      mainIntent = `आंध्र प्रदेश व तेलंगाना के लिए आपके साथ ज्योतिषीय परामर्श का समय तय करना चाहता/चाहती हूँ।`;
    } else {
      mainIntent = `I would like to schedule a direct Vedic astrology consultation with you.`;
    }
  } else {
    // Default Home / General AP & Telangana
    if (locale === 'te') {
      mainIntent = `శ్రీ గాయత్రి జ్యోతిష్యాలయం (ఆంధ్రప్రదేశ్ & తెలంగాణ) ద్వారా వైదిక జ్యోతిష్య సలహా కొరకు సంప్రదిస్తున్నాను.`;
    } else if (locale === 'hi') {
      mainIntent = `श्री गायत्री ज्योतिषालय (आंध्र प्रदेश व तेलंगाना) के माध्यम से वैदिक ज्योतिषीय परामर्श लेना चाहता/चाहती हूँ।`;
    } else {
      mainIntent = `I would like to inquire about a traditional Vedic astrology consultation (Serving Andhra Pradesh & Telangana).`;
    }
  }

  // 3. Assemble optional client birth specifics
  const detailsParts: string[] = [];
  if (clientName) detailsParts.push(`Name: ${clientName}`);
  if (dob) detailsParts.push(`DOB: ${dob}`);
  if (birthTime) detailsParts.push(`Time: ${birthTime}`);
  if (birthPlace) detailsParts.push(`Place: ${birthPlace}`);
  if (clientContext) detailsParts.push(`Question: ${clientContext}`);

  let detailsBlock = '';
  if (detailsParts.length > 0) {
    detailsBlock = `\n\n[Birth Details]:\n${detailsParts.join('\n')}`;
  }

  const closing = locale === 'te' 
    ? '\n\nదయచేసి సంప్రదింపుల వివరాలు తెలియజేయగలరు. ధన్యవాదాలు.'
    : locale === 'hi'
    ? '\n\nकृपया परामर्श का समय व विवरण बताएं। धन्यवाद।'
    : '\n\nPlease let me know the available time for consultation. Thank you.';

  return `${greeting}\n\n${mainIntent}${detailsBlock}${closing}`;
}

/**
 * Builds the complete https://wa.me/ URL with encoded text
 */
export function getWhatsAppUrl(options: WhatsAppMessageOptions = {}): string {
  const message = generateWhatsAppMessage(options);
  return `https://wa.me/${ASTROLOGER_PHONE}?text=${encodeURIComponent(message)}`;
}

export interface QuickTopicItem {
  id: string;
  label: string;
  topic: string;
  icon: string;
  pathSlug: string;
}

export const quickConsultationTopics: QuickTopicItem[] = [
  {
    id: 'marriage',
    label: 'Marriage & Vivaha',
    topic: 'Marriage Astrology & Vivaha Muhurtham',
    icon: '💍',
    pathSlug: '/marriage-astrology'
  },
  {
    id: 'kundali',
    label: 'Kundali Matching',
    topic: 'Kundali Matching & Guna Milan',
    icon: '❤️',
    pathSlug: '/kundali-matching'
  },
  {
    id: 'horoscope',
    label: 'Janma Kundali / Dasha',
    topic: 'Janma Kundali & Dasha Reading',
    icon: '⭐',
    pathSlug: '/horoscope'
  },
  {
    id: 'career',
    label: 'Career & Job Guidance',
    topic: 'Career Astrology & Job Transition',
    icon: '💼',
    pathSlug: '/career-astrology'
  },
  {
    id: 'business',
    label: 'Business & Vyapar',
    topic: 'Business Timing & Auspicious Muhurtham',
    icon: '🏢',
    pathSlug: '/business-astrology'
  },
  {
    id: 'muhurtham',
    label: 'Muhurtham (Gruhapravesham/Events)',
    topic: 'Muhurtham Calculation for Auspicious Event',
    icon: '🗓️',
    pathSlug: '/muhurtham'
  },
  {
    id: 'numerology',
    label: 'Numerology / Baby Name',
    topic: 'Numerology & Baby Naming Guidance',
    icon: '🔢',
    pathSlug: '/numerology'
  },
  {
    id: 'kurnool',
    label: 'Kurnool Center Visit',
    topic: 'In-person / Phone Consultation at Kurnool Center',
    icon: '📍',
    pathSlug: '/locations/astrologer-kurnool'
  }
];
