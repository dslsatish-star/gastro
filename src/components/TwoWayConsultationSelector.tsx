import React, { useState, useRef, useEffect } from 'react';
import { 
  MapPin, 
  Sparkles, 
  ChevronDown, 
  Search, 
  Check, 
  PhoneCall, 
  X, 
  Filter, 
  Building2, 
  Layers, 
  ArrowRight,
  ArrowLeft,
  HeartHandshake,
  Users,
  Briefcase,
  Compass,
  Calendar,
  Clock,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';
import { Locale, buildLocalizedPath } from '../data/i18n';
import { AppLocation } from '../types';
import { 
  locationsData, 
  getLocationByPath, 
  getStates, 
  getDistrictsByState,
  getLocationHierarchy,
  getDynamicLocation
} from '../data/locationsData';
import { servicesData } from '../data/servicesData';
import { rawHierarchicalLocations } from '../data/rawHierarchicalLocations';

// Helper to capital-case a slug (e.g. "ysr-kadapa" -> "YSR Kadapa", "atlur" -> "Atlur", "yerraballe" -> "Yerraballe")
const capitalizeSlug = (slug: string): string => {
  return slug
    .split('-')
    .map(word => {
      if (word === 'ysr') return 'YSR';
      if (word === 'ap') return 'AP';
      if (word === 'tg') return 'TG';
      if (word === 'rtc') return 'RTC';
      if (word === 'ngo') return 'NGO';
      if (word === 'lbs') return 'LBS';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

interface TwoWayConsultationSelectorProps {
  onNavigate: (path: string) => void;
  locale?: Locale;
  currentLocationPath?: string;
  activeServiceSlug?: string;
  variant?: 'banner' | 'bar' | 'compact';
  onLocationChange?: (path: string) => void;
  onServiceChange?: (slug: string) => void;
}

export const TwoWayConsultationSelector: React.FC<TwoWayConsultationSelectorProps> = ({
  onNavigate,
  locale = 'en',
  currentLocationPath = '',
  activeServiceSlug = '',
  variant = 'bar',
  onLocationChange,
  onServiceChange
}) => {
  // Resolve current active location (moved to the top of the component so it's defined before useEffects)
  let cleanLocPath = currentLocationPath ? currentLocationPath.trim() : '';
  while (cleanLocPath.startsWith('/locations')) {
    cleanLocPath = cleanLocPath.replace(/^\/locations/, '');
  }
  if (cleanLocPath && !cleanLocPath.startsWith('/')) {
    cleanLocPath = '/' + cleanLocPath;
  }

  const activeLoc: AppLocation | undefined = cleanLocPath 
    ? getLocationByPath(cleanLocPath) 
    : undefined;

  const locDisplayName = activeLoc 
    ? (activeLoc.village || activeLoc.mandal || activeLoc.district || activeLoc.state) 
    : 'All Andhra Pradesh & Telangana';

  const locContextName = activeLoc
    ? (activeLoc.level === 'village' && activeLoc.mandal && activeLoc.district
        ? `${activeLoc.village}, ${activeLoc.mandal} (${activeLoc.district})`
        : activeLoc.level === 'mandal' && activeLoc.district
        ? `${activeLoc.mandal} (${activeLoc.district} Dist)`
        : activeLoc.level === 'district'
        ? `${activeLoc.district}, ${activeLoc.state}`
        : activeLoc.state)
    : 'Select Location';

  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [locationSearch, setLocationSearch] = useState('');
  const [stateTab, setStateTab] = useState<'ap' | 'tg'>('ap');

  // Drill-down location flow states
  const [modalDistrict, setModalDistrict] = useState<string | null>(null);
  const [modalMandal, setModalMandal] = useState<string | null>(null);

  useEffect(() => {
    if (locationModalOpen) {
      if (activeLoc) {
        const stateSlug = activeLoc.state.toLowerCase().includes('telangana') ? 'telangana' : 'andhra-pradesh';
        setStateTab(stateSlug === 'telangana' ? 'tg' : 'ap');
        
        const hierarchy = getLocationHierarchy(activeLoc);
        const districtLoc = hierarchy.find(h => h.level === 'district');
        const mandalLoc = hierarchy.find(h => h.level === 'mandal');

        if (districtLoc) {
          setModalDistrict(districtLoc.slug);
        } else {
          setModalDistrict(null);
        }

        if (mandalLoc) {
          setModalMandal(mandalLoc.slug);
        } else {
          setModalMandal(null);
        }
      } else {
        setModalDistrict(null);
        setModalMandal(null);
      }
    }
  }, [locationModalOpen, activeLoc]);

  // Geolocation states
  const [detecting, setDetecting] = useState(false);
  const [detectedLoc, setDetectedLoc] = useState<AppLocation | null>(null);
  const [detectedRawName, setDetectedRawName] = useState<string>('');
  const [detectError, setDetectError] = useState<string>('');

  const getLocMsg = () => {
    const raw = detectedRawName || (detectedLoc ? (detectedLoc.village || detectedLoc.mandal || detectedLoc.district || detectedLoc.state) : '');
    switch(locale) {
      case 'te':
        return {
          detectBtn: "నా ప్రస్తుత స్థానాన్ని కనుగొను 📍",
          detecting: "మీ ప్రాంతాన్ని గుర్తిస్తున్నాము...",
          detectedTitle: "ప్రాంతం కనుగొనబడింది!",
          detectedText: `మేము మీ ప్రాంతాన్ని "${raw}" సమీపంలో గుర్తించాము. "${detectedLoc?.village || detectedLoc?.mandal || detectedLoc?.district || detectedLoc?.state}" కోసం జ್ಯోతిಷ್ಯ సేవలను చూడాలనుకుంటున్నారా?`,
          confirmBtn: "అవును, చూడండి",
          cancelBtn: "మరొక ప్రాంతాన్ని ఎంచుకోండి",
          deniedText: "స్థాన అనుమతి నిರಾకరించబడింది. దಯచేసి వెతకండి లేదా క్రింది జిల్లాల నుండి ఎంచుకోండి.",
          failedText: "స్థానాన్ని గుర్తించలేకపోयाము. దయచేసి మ్యానువల్‌గా ఎంచుకోండి.",
          outsideText: "మీరు ఆంధ్రప్రదేశ్ లేదా తెలంగాణ వెలుపల ఉన్నట్లు గుర్తించాము. మేము ప్రధానంగా ఏపీ & తెలంగాణలలో సేవలు అందిస్తాము! దయచేసి ఒక ప్రాంతాన్ని ఎంచుకోండి.",
          chooseTitle: "లేదా మీ ప్రాంతాన్ని ఎంచుకోండి:"
        };
      case 'hi':
        return {
          detectBtn: "मेरा स्थान खोजें 📍",
          detecting: "आपका स्थान खोजा जा रहा है...",
          detectedTitle: "स्थान मिल गया!",
          detectedText: `हमने "${raw}" के पास आपका स्थान पाया है। क्या आप "${detectedLoc?.village || detectedLoc?.mandal || detectedLoc?.district || detectedLoc?.state}" के लिए ज्योतिष सेवाएं देखना चाहते हैं?`,
          confirmBtn: "हाँ, देखें",
          cancelBtn: "दूसरा स्थान चुनें",
          deniedText: "स्थान अनुमति अस्वीकृत कर दी गई। कृपया खोजें या नीचे से जिला चुनें।",
          failedText: "स्थान का पता नहीं चल सका। कृपया मैन्युअल रूप से चुनें।",
          outsideText: "हमने आपका स्थान आंध्र प्रदेश और तेलंगाना से बाहर पाया है। हम मुख्य रूप से एपी और तेलंगाना में सेवाएं प्रदान करते हैं! कृपया स्थान चुनें।",
          chooseTitle: "या अपना स्थान चुनें:"
        };
      case 'kn':
        return {
          detectBtn: "ನನ್ನ ಸ್ಥಳ ಪತ್ತೆಮಾಡಿ 📍",
          detecting: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಪತ್ತೆಹಚ್ಚಲಾಗುತ್ತಿದೆ...",
          detectedTitle: "ಸ್ಥಳ ಪತ್ತೆಯಾಗಿದೆ!",
          detectedText: `ನಾವು ನಿಮ್ಮ ಸ್ಥಳವನ್ನು "${raw}" ಸಮೀಪ ಪತ್ತೆಹಚ್ಚಿದ್ದೇವೆ. "${detectedLoc?.village || detectedLoc?.mandal || detectedLoc?.district || detectedLoc?.state}" ಗಾಗಿ ಜ್ಯೋತಿಷ್ಯ ಸೇವೆಗಳನ್ನು ವೀಕ್ಷಿಸಲು ಬಯಸುವಿರಾ?`,
          confirmBtn: "ಹೌದು, ವೀಕ್ಷಿಸಿ",
          cancelBtn: "ಬೇರೆ ಸ್ಥಳ ಆಯ್ಕೆಮಾಡಿ",
          deniedText: "ಸ್ಥಳದ ಅನುಮತಿಯನ್ನು ನಿರಾಕರಿಸಲಾಗಿದೆ. ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಜಿಲ್ಲೆಗಳಿಂದ ಆಯ್ಕೆಮಾಡಿ.",
          failedText: "ಸ್ಥಳವನ್ನು ಪತ್ತೆಹಚ್ಚಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮ್ಯಾನ್ಯುವಲ್ ಆಗಿ ಆಯ್ಕೆ ಮಾಡಿ.",
          outsideText: "ನಾವು ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಎಪಿ ಮತ್ತು ತೆಲಂಗಾಣದ ಹೊರಗೆ ಪತ್ತೆಹಚ್ಚಿದ್ದೇವೆ. ನಾವು ಆಂಧ್ರಪ್ರದೇಶ ಮತ್ತು ತೆಲಂಗಾಣದಲ್ಲಿ ಸೇವೆ ನೀಡುತ್ತೇವೆ! ದಯವಿಟ್ಟು ಸ್ಥಳ ಆಯ್ಕೆ ಮಾಡಿ.",
          chooseTitle: "ಅಥವಾ ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಆಯ್ಕೆಮಾಡಿ:"
        };
      case 'mr':
        return {
          detectBtn: "माझे स्थान शोधा 📍",
          detecting: "तुमचे स्थान शोधत आहे...",
          detectedTitle: "स्थान सापडले!",
          detectedText: `आम्हाला तुमचे स्थान "${raw}" जवळ सापडले आहे. तुम्ही "${detectedLoc?.village || detectedLoc?.mandal || detectedLoc?.district || detectedLoc?.state}" साठी ज्योतिष सेवा पाहू इच्छिता?`,
          confirmBtn: "होय, पहा",
          cancelBtn: "दुसरे स्थान निवडा",
          deniedText: "स्थान परवानगी नाकारली गेली. कृपया खालील जिल्ह्यांमधून निवडा.",
          failedText: "स्थान शोधता आले नाही. कृपया स्वतः स्थान निवडा.",
          outsideText: "आम्हाला तुमचे स्थान एपी आणि तेलंगणाच्या बाहेर आढळले आहे. आम्ही प्रामुण्याने आंध्र प्रदेश आणि तेलंगणामध्ये सेवा देतो! कृपया स्थान निवडा.",
          chooseTitle: "किंवा तुमचे स्थान निवडा:"
        };
      default:
        return {
          detectBtn: "Detect My Location 📍",
          detecting: "Detecting your location...",
          detectedTitle: "Location Detected!",
          detectedText: `We detected your location near "${raw}". View astrology services for "${detectedLoc?.village || detectedLoc?.mandal || detectedLoc?.district || detectedLoc?.state}"?`,
          confirmBtn: "Yes, View Location",
          cancelBtn: "Choose Another Location",
          deniedText: "Location permission was denied. Please use the search box or select a district below.",
          failedText: "Could not determine your location. Please select manually.",
          outsideText: "We detected your location outside AP & Telangana. We specialize in Andhra Pradesh & Telangana! Please select a location manually.",
          chooseTitle: "Or choose your location manually:"
        };
    }
  };

  const handleDetectLocation = () => {
    setDetecting(true);
    setDetectError('');
    setDetectedLoc(null);

    if (!navigator.geolocation) {
      setDetectError('not-supported');
      setDetecting(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
          );
          if (!response.ok) throw new Error('Failed to reverse geocode');
          const data = await response.json();
          const address = data.address || {};
          const state = address.state || '';
          const stateDistrict = address.state_district || address.county || address.district || '';
          const city = address.city || address.town || address.village || address.suburb || '';

          const isAP = state.toLowerCase().includes('andhra pradesh');
          const isTG = state.toLowerCase().includes('telangana');

          if (!isAP && !isTG) {
            setDetectError('outside');
            setDetecting(false);
            return;
          }

          // Search in locationsData
          let match: AppLocation | undefined = undefined;

          // 1. Try to match city/town/village
          if (city) {
            const cleanCity = city.toLowerCase().trim();
            match = locationsData.find(
              l => (l.level === 'village' && l.village?.toLowerCase() === cleanCity) ||
                   (l.level === 'mandal' && l.mandal?.toLowerCase() === cleanCity)
            );
          }

          // 2. Try to match state district
          if (!match && stateDistrict) {
            const cleanDist = stateDistrict.toLowerCase().replace(/district/gi, '').trim();
            match = locationsData.find(
              l => l.level === 'district' && l.district.toLowerCase() === cleanDist
            );
          }

          // 3. Fall back to state
          if (!match) {
            if (isAP) {
              match = locationsData.find(l => l.id === 'ap');
            } else if (isTG) {
              match = locationsData.find(l => l.id === 'tg');
            }
          }

          if (match) {
            setDetectedLoc(match);
            setDetectedRawName(city || stateDistrict || (isAP ? 'Andhra Pradesh' : 'Telangana'));
          } else {
            setDetectError('no-match');
          }
        } catch (err) {
          console.error(err);
          setDetectError('failed');
        } finally {
          setDetecting(false);
        }
      },
      (error) => {
        console.error(error);
        if (error.code === error.PERMISSION_DENIED) {
          setDetectError('denied');
        } else {
          setDetectError('failed');
        }
        setDetecting(false);
      },
      { timeout: 8000 }
    );
  };

  // Master consultation categories list
  const allServices = [
    { slug: 'marriage-astrology', label: 'Marriage Astrology', icon: HeartHandshake, desc: 'Horoscope timing, compatibility & marriage alignment' },
    { slug: 'kundali-matching', label: 'Kundali Matching', icon: Users, desc: '36-Guna Milan, Ashtakoota & 7th house analysis' },
    { slug: 'career-astrology', label: 'Career Astrology', icon: Briefcase, desc: '10th house, promotions, job transitions & timing' },
    { slug: 'business-astrology', label: 'Business Astrology', icon: Building2, desc: 'Commercial ventures, partnerships & financial stability' },
    { slug: 'horoscope-consultation', label: 'Horoscope Consultation', icon: Compass, desc: 'Complete Janma Kundali, Lagna, Rashi & Dasha review' },
    { slug: 'muhurtham', label: 'Muhurtham Guidance', icon: Calendar, desc: 'Auspicious Panchanga timing for weddings & Griha Pravesh' },
    { slug: 'education-astrology', label: 'Education Astrology', icon: Clock, desc: 'Academic focus, competitive exams & stream choices' },
    { slug: 'relationship-astrology', label: 'Relationship Guidance', icon: HeartHandshake, desc: 'Mutual chart harmony, communication & understanding' },
    { slug: 'family-astrology', label: 'Family Astrology', icon: Users, desc: 'Domestic peace, family harmony & child wellbeing' },
    { slug: 'child-horoscope', label: 'Child Horoscope', icon: Sparkles, desc: 'Namakarana, birth star qualities & health indications' },
    { slug: 'dosha-analysis', label: 'Dosha Analysis', icon: ShieldCheck, desc: 'Calm, classical remedies for Kuja & Rahu-Ketu doshas' },
    { slug: 'dasha-analysis', label: 'Dasha Analysis', icon: Clock, desc: 'Mahadasha & Antardasha planetary timeline evaluation' },
    { slug: 'gochara', label: 'Transit (Gochara)', icon: Compass, desc: 'Current Jupiter, Saturn & Rahu-Ketu planetary transits' },
    { slug: 'numerology', label: 'Numerology', icon: Sparkles, desc: 'Vedic numerology for name vibration & life path number' },
    { slug: 'prashna', label: 'Prashna Astrology', icon: HelpCircle, desc: 'Horary chart answering immediate questions without birth time' },
    { slug: 'vedic-astrology', label: 'Vedic Astrology', icon: Sparkles, desc: 'Foundational Parashari principles & comprehensive life guidance' }
  ];

  // Resolve current active service
  const activeServiceObj = allServices.find(s => s.slug === activeServiceSlug) || (activeServiceSlug ? {
    slug: activeServiceSlug,
    label: servicesData[activeServiceSlug]?.title || activeServiceSlug,
    icon: Sparkles,
    desc: 'Personalized Vedic astrology consultation'
  } : undefined);

  // -------------------------------------------------------------
  // TWO-WAY STATEFUL HANDLERS
  // -------------------------------------------------------------
  // 1. Changing Location STRICTLY PRESERVES active Service
  const handleSelectLocation = (loc: AppLocation) => {
    let clean = loc.path.trim();
    while (clean.startsWith('/locations')) {
      clean = clean.replace(/^\/locations/, '');
    }
    if (!clean.startsWith('/')) clean = '/' + clean;

    if (onLocationChange) {
      onLocationChange(clean);
    }
    setLocationModalOpen(false);
    setLocationSearch('');

    const query = activeServiceSlug ? `?service=${activeServiceSlug}` : '';
    onNavigate(buildLocalizedPath(`/locations${clean}${query}`, locale));
  };

  // 2. Changing Service STRICTLY PRESERVES active Location
  const handleSelectService = (slug: string) => {
    if (onServiceChange) {
      onServiceChange(slug);
    }
    setServiceModalOpen(false);

    const query = slug ? `?service=${slug}` : '';
    if (activeLoc) {
      let clean = activeLoc.path.trim();
      while (clean.startsWith('/locations')) {
        clean = clean.replace(/^\/locations/, '');
      }
      if (!clean.startsWith('/')) clean = '/' + clean;
      onNavigate(buildLocalizedPath(`/locations${clean}${query}`, locale));
    } else {
      onNavigate(buildLocalizedPath(`/locations${query}`, locale));
    }
  };

  // Filtered search results for location modal
  const filteredSearchResults = locationSearch.trim().length > 1
    ? locationsData.filter(l =>
        (l.village && l.village.toLowerCase().includes(locationSearch.toLowerCase())) ||
        (l.mandal && l.mandal.toLowerCase().includes(locationSearch.toLowerCase())) ||
        (l.district && l.district.toLowerCase().includes(locationSearch.toLowerCase())) ||
        l.state.toLowerCase().includes(locationSearch.toLowerCase())
      ).slice(0, 16)
    : [];

  const stateDistricts = getDistrictsByState(stateTab);

  return (
    <>
      {/* TWO-WAY STATEFUL SELECTOR BAR */}
      <div className="bg-white border-2 border-[#D4AF37]/50 rounded-2xl p-4 sm:p-5 shadow-sm max-w-5xl mx-auto my-6">
        
        {/* Top Header Label */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#F0E8D8] text-xs">
          <div className="flex items-center gap-2 font-bold text-[#58111A] uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Two-Way Stateful Consultation Selector</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#6B6161]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Independent Variables (Location & Service preserved on change)</span>
          </div>
        </div>

        {/* The Two Control Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* CONTROL 1: LOCATION SELECTOR */}
          <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#E8DFC9] hover:border-[#D4AF37] transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-[#8C7A58] uppercase tracking-wide flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#58111A]" />
                <span>Selected Location:</span>
              </span>
              <span className="text-[10px] text-[#8C7A58] font-semibold bg-white px-2 py-0.5 rounded border border-[#E8DFC9]">
                {activeLoc ? activeLoc.level.toUpperCase() : 'ALL REGION'}
              </span>
            </div>

            <button
              onClick={() => setLocationModalOpen(true)}
              className="w-full py-2.5 px-3.5 rounded-lg bg-white border border-[#DDD3C2] hover:border-[#58111A] text-left flex items-center justify-between transition-all group shadow-2xs"
            >
              <div className="truncate pr-2">
                <div className="text-sm font-bold text-[#221F1F] group-hover:text-[#58111A] truncate">
                  {locDisplayName}
                </div>
                <div className="text-xs text-[#6B6161] truncate">
                  {locContextName}
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#58111A] shrink-0 bg-[#FAF7F0] px-2.5 py-1 rounded-md border border-[#E8DFC9] group-hover:bg-[#58111A] group-hover:text-white transition-colors">
                <span>Change</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          {/* CONTROL 2: SERVICE / CATEGORY SELECTOR */}
          <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#E8DFC9] hover:border-[#D4AF37] transition-all">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-[#8C7A58] uppercase tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Selected Service / Category:</span>
              </span>
              <span className="text-[10px] text-[#58111A] font-bold bg-[#D4AF37]/20 px-2 py-0.5 rounded border border-[#D4AF37]/40">
                {activeServiceObj ? 'FOCUSED' : 'ALL SERVICES'}
              </span>
            </div>

            <button
              onClick={() => setServiceModalOpen(true)}
              className="w-full py-2.5 px-3.5 rounded-lg bg-white border border-[#DDD3C2] hover:border-[#58111A] text-left flex items-center justify-between transition-all group shadow-2xs"
            >
              <div className="truncate pr-2">
                <div className="text-sm font-bold text-[#221F1F] group-hover:text-[#58111A] truncate">
                  {activeServiceObj ? activeServiceObj.label : 'All Consultation Services'}
                </div>
                <div className="text-xs text-[#6B6161] truncate">
                  {activeServiceObj ? activeServiceObj.desc : 'Click to select a focused consultation category'}
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#58111A] shrink-0 bg-[#FAF7F0] px-2.5 py-1 rounded-md border border-[#E8DFC9] group-hover:bg-[#58111A] group-hover:text-white transition-colors">
                <span>Change</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

        </div>

        {/* Current Active Context Badge & Quick Actions */}
        <div className="mt-3.5 pt-3 border-t border-[#F0E8D8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#4A4242]">
            <span className="font-semibold text-[#58111A]">Viewing:</span>
            <span className="font-bold text-[#221F1F]">
              {activeServiceObj ? activeServiceObj.label : 'All Services'}
            </span>
            <span className="text-[#8C7A58]">in</span>
            <span className="font-bold text-[#58111A]">
              {locDisplayName}
            </span>
            {activeServiceObj && (
              <button
                onClick={() => handleSelectService('')}
                className="text-[11px] font-bold text-[#8C7A58] hover:text-[#58111A] underline ml-2"
                title="Reset Service to All"
              >
                Reset Service
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href="tel:8885288817"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-xs shadow-xs transition-colors shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F5E6AB]" />
              <span>Call 88852 88817</span>
            </a>
          </div>
        </div>

      </div>

      {/* -------------------------------------------------------- */}
      {/* 1. LOCATION MODAL (PRESERVES SERVICE STRICTLY) */}
      {/* -------------------------------------------------------- */}
      {locationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border-2 border-[#D4AF37] overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#FAF5EC] to-white border-b border-[#E8DFC9] flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#58111A] uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Choose Location</span>
                </div>
                <h3 className="text-lg font-bold text-[#221F1F] font-heading">
                  Select Town, Mandal, or District
                </h3>
                <p className="text-xs text-[#6B6161]">
                  {activeServiceObj 
                    ? `Switch location while keeping "${activeServiceObj.label}" selected`
                    : 'Browse authoritative administrative locations of AP & Telangana'}
                </p>
              </div>
              <button
                onClick={() => setLocationModalOpen(false)}
                className="p-2 rounded-lg hover:bg-[#FAF4E8] text-[#58111A] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Instant Search Bar */}
            <div className="p-4 border-b border-[#E8DFC9] bg-[#FAF7F0]">
              <div className="relative">
                <Search className="w-4 h-4 text-[#8C7A58] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search village, mandal, district (e.g., Arekal, Adoni, Kurnool, Hyderabad, Warangal)..."
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DDD3C2] focus:border-[#58111A] bg-white text-sm text-[#221F1F] outline-none shadow-2xs"
                  autoFocus
                />
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 overflow-y-auto flex-1">
              
              {/* Geolocation Section */}
              <div className="mb-5 p-4 rounded-xl bg-[#FAF5EC] border-2 border-[#D4AF37]/40 shadow-2xs">
                {detecting ? (
                  <div className="flex flex-col items-center justify-center py-3 text-center">
                    <span className="w-8 h-8 rounded-full border-4 border-[#58111A] border-t-transparent animate-spin mb-2" />
                    <span className="text-sm font-semibold text-[#58111A]">
                      {getLocMsg().detecting}
                    </span>
                  </div>
                ) : detectedLoc ? (
                  <div className="text-center py-2 animate-in fade-in zoom-in-95 duration-150">
                    <div className="inline-flex items-center gap-1 text-emerald-800 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                      <Check className="w-3.5 h-3.5" />
                      <span>{getLocMsg().detectedTitle}</span>
                    </div>
                    <p className="text-sm text-[#221F1F] font-medium leading-relaxed max-w-md mx-auto mb-4">
                      {getLocMsg().detectedText}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => {
                          handleSelectLocation(detectedLoc);
                          setDetectedLoc(null);
                        }}
                        className="px-4 py-2 rounded-lg bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-xs shadow-xs transition-colors"
                      >
                        {getLocMsg().confirmBtn.replace(/{location}/g, detectedLoc.village || detectedLoc.mandal || detectedLoc.district || detectedLoc.state)}
                      </button>
                      <button
                        onClick={() => {
                          setDetectedLoc(null);
                          setDetectedRawName('');
                        }}
                        className="px-4 py-2 rounded-lg bg-white border border-[#DDD3C2] text-[#4A4242] font-semibold hover:bg-gray-50 text-xs transition-colors"
                      >
                        {getLocMsg().cancelBtn}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-bold text-[#58111A]">
                          {locale === 'te' ? 'స్వయంచాలక ప్రాంత గుర్తింపు' : locale === 'hi' ? 'स्वचालित स्थान पहचान' : locale === 'kn' ? 'ಸ್ವಯಂಚಾಲಿತ ಸ್ಥಳ ಪತ್ತೆಹಚ್ಚುವಿಕೆ' : locale === 'mr' ? 'स्वयंचलित स्थान ओळख' : 'Automatic Location Detection'}
                        </h4>
                        <p className="text-xs text-[#6B6161] mt-0.5 max-w-sm">
                          {locale === 'te' 
                            ? 'జియోలೊకేషన్ ద్వారా మీ సమీపంలోని ఏపీ/తెలంగాణ ప్రాంతాన్ని సులಭంగా కనుగొనండి.' 
                            : locale === 'hi'
                            ? 'जियोलोकेशन द्वारा अपने नजदीकी एपी/तेलंगाना स्थान को आसानी से खोजें।'
                            : locale === 'kn'
                            ? 'ಜಿಯೋಲೋಕೇಶನ್ ಮೂಲಕ ನಿಮ್ಮ ಹತ್ತಿರದ ಎಪಿ/ತೆಲಂಗಾಣ ಸ್ಥಳವನ್ನು ಸುಲಭವಾಗಿ ಪತ್ತೆಹಚ್ಚಿ.'
                            : locale === 'mr'
                            ? 'जिओलोकेशनद्वारे तुमच्या जवळचे एपी/तेलंगणा स्थान सहज शोधा.'
                            : 'Quickly match your near-by AP or Telangana location using browser geolocation.'}
                        </p>
                      </div>
                      <button
                        onClick={handleDetectLocation}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border-2 border-[#D4AF37] hover:bg-[#FAF4E8] text-[#58111A] font-bold text-xs transition-colors shadow-2xs shrink-0"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{getLocMsg().detectBtn}</span>
                      </button>
                    </div>

                    {detectError && (
                      <div className="mt-3 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                        {detectError === 'denied' && getLocMsg().deniedText}
                        {detectError === 'outside' && getLocMsg().outsideText}
                        {detectError === 'failed' && getLocMsg().failedText}
                        {detectError === 'not-supported' && (locale === 'te' ? 'మీ బ్రೌజర్ స్థానాన్ని సపోర్ట్ చేయదు.' : 'Browser does not support geolocation.')}
                        {detectError === 'no-match' && (locale === 'te' ? 'మీ సమీప ప్రాంతం ఏపీ లేదా తెలంగాణ డేటాబేస్ లో సరిపోలలేదు. దయచేసి క్రింద ఎంచుకోండి.' : 'Could not match detected location with our AP/Telangana database. Please select manually.')}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="text-xs font-bold text-[#8C7A58] uppercase mb-3 pb-1.5 border-b border-[#F0E8D8]">
                {getLocMsg().chooseTitle}
              </div>

              {/* If Searching, show search results */}
              {locationSearch.trim().length > 1 ? (
                <div>
                  <div className="text-xs font-bold text-[#8C7A58] uppercase mb-2">
                    Matching Locations ({filteredSearchResults.length}):
                  </div>
                  {filteredSearchResults.length > 0 ? (
                    <div className="space-y-1.5">
                      {filteredSearchResults.map((l) => {
                        const hier = getLocationHierarchy(l);
                        const label = hier.map(h => h.village || h.mandal || h.district || h.state).join(' → ');
                        const isCurrent = activeLoc?.id === l.id;
                        return (
                          <button
                            key={l.id}
                            onClick={() => handleSelectLocation(l)}
                            className={`w-full p-3 rounded-xl text-left border flex items-center justify-between text-xs transition-colors ${
                              isCurrent 
                                ? 'bg-[#58111A] text-white border-[#58111A] font-bold'
                                : 'bg-[#FFFDF9] hover:bg-[#FAF4E8] border-[#E8DFC9] text-[#221F1F]'
                            }`}
                          >
                            <div>
                              <span className={`text-[10px] uppercase font-bold mr-1.5 px-1.5 py-0.5 rounded ${isCurrent ? 'bg-white/20' : 'bg-[#58111A]/10 text-[#58111A]'}`}>
                                {l.level}
                              </span>
                              <span className="font-bold text-sm">
                                {l.village || l.mandal || l.district || l.state}
                              </span>
                              <div className={`text-[11px] mt-0.5 ${isCurrent ? 'text-white/80' : 'text-[#8C7A58]'}`}>
                                {label}
                              </div>
                            </div>
                            {isCurrent && <Check className="w-4 h-4 text-[#F5E6AB]" />}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-xs text-[#8C7A58]">
                      No matching records found for &quot;{locationSearch}&quot;.
                      <div className="mt-2 text-[#58111A] font-semibold">
                        Telephone consultations are available statewide at 88852 88817.
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Drill-Down Hierarchical Location Flow */
                <div>
                  {/* Breadcrumb Indicator */}
                  <div className="flex items-center gap-1.5 flex-wrap text-xs font-semibold text-[#8C7A58] mb-4 bg-[#FAF7F0] p-2.5 rounded-lg border border-[#E8DFC9]/60">
                    <button 
                      onClick={() => { setModalDistrict(null); setModalMandal(null); }}
                      className={`hover:underline hover:text-[#58111A] ${!modalDistrict ? 'text-[#58111A] font-bold' : ''}`}
                    >
                      {stateTab === 'ap' ? 'Andhra Pradesh' : 'Telangana'}
                    </button>
                    
                    {modalDistrict && (
                      <>
                        <span className="text-[#DDD3C2] font-normal">/</span>
                        <button 
                          onClick={() => { setModalMandal(null); }}
                          className={`hover:underline hover:text-[#58111A] ${modalDistrict && !modalMandal ? 'text-[#58111A] font-bold' : ''}`}
                        >
                          {capitalizeSlug(modalDistrict)}
                        </button>
                      </>
                    )}

                    {modalMandal && (
                      <>
                        <span className="text-[#DDD3C2] font-normal">/</span>
                        <span className="text-[#58111A] font-bold">
                          {capitalizeSlug(modalMandal)}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Level 1: State & District Selector */}
                  {!modalDistrict && (
                    <div>
                      {/* State Tabs */}
                      <div className="flex items-center gap-2 mb-4">
                        <button
                          onClick={() => setStateTab('ap')}
                          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                            stateTab === 'ap'
                              ? 'bg-[#58111A] text-white shadow-2xs'
                              : 'bg-[#FAF7F0] text-[#554E4E] hover:bg-[#F2EADB] border border-[#E8DFC9]'
                          }`}
                        >
                          <Building2 className="w-3.5 h-3.5" />
                          <span>Andhra Pradesh</span>
                        </button>
                        <button
                          onClick={() => setStateTab('tg')}
                          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                            stateTab === 'tg'
                              ? 'bg-[#58111A] text-white shadow-2xs'
                              : 'bg-[#FAF7F0] text-[#554E4E] hover:bg-[#F2EADB] border border-[#E8DFC9]'
                          }`}
                        >
                          <Building2 className="w-3.5 h-3.5" />
                          <span>Telangana</span>
                        </button>
                      </div>

                      {/* District Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {stateDistricts.map((d) => {
                          const isCurrent = activeLoc?.district.toLowerCase() === d.district.toLowerCase() && !activeLoc.mandal;
                          return (
                            <button
                              key={d.id}
                              onClick={() => {
                                setModalDistrict(d.slug);
                                setModalMandal(null);
                              }}
                              className={`p-2.5 rounded-lg border text-left text-xs transition-colors flex items-center justify-between ${
                                isCurrent
                                  ? 'bg-[#58111A] text-white border-[#58111A] font-bold'
                                  : 'bg-[#FFFDF9] hover:bg-[#FAF4E8] border-[#E8DFC9] text-[#221F1F]'
                              }`}
                            >
                              <span className="truncate">{d.district}</span>
                              <ChevronDown className="w-3 h-3 text-[#8C7A58] -rotate-90 shrink-0 ml-1" />
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Level 2: Mandal & City Selector within Selected District */}
                  {modalDistrict && !modalMandal && (() => {
                    const currentStSlug = stateTab === 'ap' ? 'andhra-pradesh' : 'telangana';
                    const distId = `${stateTab}-${modalDistrict}`;

                    // 1. Get static mandals from locationsData
                    const staticMandals = locationsData.filter(l => l.level === 'mandal' && l.parentId === distId);
                    const staticItems = staticMandals.map(l => ({
                      slug: l.slug,
                      name: l.mandal || l.exactSourceName || l.slug,
                      type: 'mandal'
                    }));

                    // 2. Get dynamic mandals from rawHierarchicalLocations
                    const dData = rawHierarchicalLocations[currentStSlug]?.districts[modalDistrict];
                    const citiesObj = dData?.cities || {};
                    const dynamicItems = dData ? [
                      ...Object.keys(dData.mandals || {}).map(slug => ({ slug, name: dData.mandals[slug].name, type: 'mandal' })),
                      ...Object.keys(citiesObj).map(slug => ({ slug, name: citiesObj[slug].name, type: 'city' }))
                    ] : [];

                    // 3. Merge and deduplicate by slug
                    const seenSlugs = new Set<string>();
                    const mandalsAndCities = [];
                    for (const item of [...staticItems, ...dynamicItems]) {
                      if (!seenSlugs.has(item.slug)) {
                        seenSlugs.add(item.slug);
                        mandalsAndCities.push(item);
                      }
                    }

                    const staticDist = locationsData.find(l => l.id === distId);
                    const distLocObj = staticDist || getDynamicLocation(currentStSlug, modalDistrict);

                    return (
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <button 
                            onClick={() => setModalDistrict(null)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#58111A] hover:underline"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Back to Districts</span>
                          </button>
                          <span className="text-xs text-[#8C7A58] font-bold uppercase">
                            Choose Mandal or City
                          </span>
                        </div>

                        {/* Quick Action: Select Whole District */}
                        {distLocObj && (
                          <button
                            onClick={() => handleSelectLocation(distLocObj)}
                            className="w-full mb-3 p-3 rounded-xl bg-[#58111A]/5 border-2 border-[#58111A]/20 text-[#58111A] hover:bg-[#58111A]/10 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>Select Entire {capitalizeSlug(modalDistrict)} District</span>
                          </button>
                        )}

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[300px] overflow-y-auto pr-1">
                          {mandalsAndCities.map((item) => {
                            const isCurrent = activeLoc?.mandal?.toLowerCase() === item.name.toLowerCase() && !activeLoc.village;
                            return (
                              <button
                                key={item.slug}
                                onClick={() => setModalMandal(item.slug)}
                                className={`p-2.5 rounded-lg border text-left text-xs transition-colors flex items-center justify-between ${
                                  isCurrent
                                    ? 'bg-[#58111A] text-white border-[#58111A] font-bold'
                                    : 'bg-[#FFFDF9] hover:bg-[#FAF4E8] border-[#E8DFC9] text-[#221F1F]'
                                }`}
                              >
                                <span className="truncate">{item.name}</span>
                                <ChevronDown className="w-3 h-3 text-[#8C7A58] -rotate-90 shrink-0 ml-1" />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Level 3: Village & Locality Selector within Selected Mandal/City */}
                  {modalDistrict && modalMandal && (() => {
                    const currentStSlug = stateTab === 'ap' ? 'andhra-pradesh' : 'telangana';
                    const mandalId = `${stateTab}-${modalDistrict}-${modalMandal}`;

                    // 1. Get static villages from locationsData
                    const staticVillages = locationsData.filter(l => l.level === 'village' && l.parentId === mandalId);
                    const staticVillageNames = staticVillages.map(l => l.village || l.exactSourceName);

                    // 2. Get dynamic villages from rawHierarchicalLocations
                    const dData = rawHierarchicalLocations[currentStSlug]?.districts[modalDistrict];
                    const mData = dData?.mandals?.[modalMandal] || dData?.cities?.[modalMandal];
                    const dynamicLocalities = mData?.localities || [];

                    // 3. Merge and deduplicate by name (case-insensitive)
                    const seenNames = new Set<string>();
                    const localities: string[] = [];
                    for (const name of [...staticVillageNames, ...dynamicLocalities]) {
                      if (!name) continue;
                      const norm = name.toLowerCase().trim();
                      if (!seenNames.has(norm)) {
                        seenNames.add(norm);
                        localities.push(name);
                      }
                    }

                    const staticMandalObj = locationsData.find(l => l.id === mandalId);
                    const mandalLocObj = staticMandalObj || getDynamicLocation(currentStSlug, modalDistrict, modalMandal);

                    return (
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <button 
                            onClick={() => setModalMandal(null)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#58111A] hover:underline"
                          >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Back to Mandals</span>
                          </button>
                          <span className="text-xs text-[#8C7A58] font-bold uppercase">
                            Choose Town or Village
                          </span>
                        </div>

                        {/* Quick Action: Select Whole Mandal/City */}
                        {mandalLocObj && (
                          <button
                            onClick={() => handleSelectLocation(mandalLocObj)}
                            className="w-full mb-3 p-3 rounded-xl bg-[#58111A]/5 border-2 border-[#58111A]/20 text-[#58111A] hover:bg-[#58111A]/10 text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>Select Entire {capitalizeSlug(modalMandal)} Mandal/City</span>
                          </button>
                        )}

                        {localities.length > 0 ? (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[250px] overflow-y-auto pr-1">
                            {localities.map((villageName) => {
                              const vSlug = villageName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                              const isCurrent = activeLoc?.village?.toLowerCase() === villageName.toLowerCase();
                              return (
                                <button
                                  key={vSlug}
                                  onClick={() => {
                                    const staticVillageObj = locationsData.find(
                                      l => l.level === 'village' && 
                                           l.parentId === mandalId && 
                                           l.slug === vSlug
                                    );
                                    const villageLoc = staticVillageObj || getDynamicLocation(currentStSlug, modalDistrict, modalMandal, vSlug);
                                    if (villageLoc) {
                                      handleSelectLocation(villageLoc);
                                    }
                                  }}
                                  className={`p-2.5 rounded-lg border text-left text-xs transition-colors flex items-center justify-between ${
                                    isCurrent
                                      ? 'bg-[#58111A] text-white border-[#58111A] font-bold'
                                      : 'bg-[#FFFDF9] hover:bg-[#FAF4E8] border-[#E8DFC9] text-[#221F1F]'
                                  }`}
                                >
                                  <span className="truncate">{villageName}</span>
                                  {isCurrent && <Check className="w-3.5 h-3.5 text-[#F5E6AB] shrink-0 ml-1" />}
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="p-6 text-center text-xs text-[#8C7A58]">
                            No sub-localities found. You can select the entire Mandal above.
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-3.5 bg-[#FAF7F0] border-t border-[#E8DFC9] flex items-center justify-between text-xs">
              <button
                onClick={() => {
                  setLocationModalOpen(false);
                  const query = activeServiceSlug ? `?service=${activeServiceSlug}` : '';
                  onNavigate(buildLocalizedPath(`/locations${query}`, locale));
                }}
                className="font-bold text-[#58111A] hover:underline"
              >
                Open Full Locations Directory
              </button>
              <button
                onClick={() => setLocationModalOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-white border border-[#DDD3C2] text-[#4A4242] font-semibold hover:bg-[#F2E8D2]"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* -------------------------------------------------------- */}
      {/* 2. SERVICE MODAL (PRESERVES LOCATION STRICTLY) */}
      {/* -------------------------------------------------------- */}
      {serviceModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border-2 border-[#D4AF37] overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#FAF5EC] to-white border-b border-[#E8DFC9] flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#58111A] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Choose Consultation Service</span>
                </div>
                <h3 className="text-lg font-bold text-[#221F1F] font-heading">
                  Select Astrology Consultation Category
                </h3>
                <p className="text-xs text-[#6B6161]">
                  Location will stay strictly at: <strong className="text-[#58111A]">{locDisplayName}</strong>
                </p>
              </div>
              <button
                onClick={() => setServiceModalOpen(false)}
                className="p-2 rounded-lg hover:bg-[#FAF4E8] text-[#58111A] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Services List */}
            <div className="p-4 overflow-y-auto flex-1 space-y-2">
              {/* Option to clear service */}
              <button
                onClick={() => handleSelectService('')}
                className={`w-full p-3 rounded-xl text-left border flex items-center justify-between text-xs transition-colors ${
                  !activeServiceSlug 
                    ? 'bg-[#58111A] text-white border-[#58111A] font-bold'
                    : 'bg-[#FFFDF9] hover:bg-[#FAF4E8] border-[#E8DFC9] text-[#221F1F]'
                }`}
              >
                <div>
                  <div className="font-bold text-sm">All Services Overview</div>
                  <div className={`text-[11px] ${!activeServiceSlug ? 'text-white/80' : 'text-[#8C7A58]'}`}>
                    View all consultation categories for {locDisplayName}
                  </div>
                </div>
                {!activeServiceSlug && <Check className="w-4 h-4 text-[#F5E6AB]" />}
              </button>

              {allServices.map((srv) => {
                const Icon = srv.icon;
                const isCurrent = activeServiceSlug === srv.slug;
                return (
                  <button
                    key={srv.slug}
                    onClick={() => handleSelectService(srv.slug)}
                    className={`w-full p-3 rounded-xl text-left border flex items-center justify-between text-xs transition-colors ${
                      isCurrent
                        ? 'bg-[#D4AF37] text-[#2D070D] border-[#C59B27] font-bold shadow-2xs'
                        : 'bg-[#FFFDF9] hover:bg-[#FAF4E8] border-[#E8DFC9] text-[#221F1F]'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                        isCurrent ? 'bg-black/10' : 'bg-[#58111A]/8 text-[#58111A]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">{srv.label}</div>
                        <div className={`text-[11px] ${isCurrent ? 'text-[#3D0A11]' : 'text-[#6B6161]'}`}>
                          {srv.desc}
                        </div>
                      </div>
                    </div>
                    {isCurrent && <Check className="w-4 h-4 text-[#2D070D] shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-3.5 bg-[#FAF7F0] border-t border-[#E8DFC9] flex items-center justify-between text-xs">
              <span className="text-[11px] text-[#6B6161]">
                Changes only the consultation category without modifying your location.
              </span>
              <button
                onClick={() => setServiceModalOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-white border border-[#DDD3C2] text-[#4A4242] font-semibold hover:bg-[#F2E8D2]"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
