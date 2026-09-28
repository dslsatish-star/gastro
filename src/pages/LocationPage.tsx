import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  ChevronRight,
  HeartHandshake,
  Compass,
  Briefcase,
  Users,
  Clock,
  Building2,
  Calendar,
  Layers,
  Search,
  BookOpen,
  Filter
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { DiyaIcon, GoldDivider, KundaliChartIcon } from '../components/VedicDecorativeElements';
import { Locale, translations, buildLocalizedPath } from '../data/i18n';
import { 
  locationsData, 
  getLocationHierarchy, 
  getChildLocations, 
  getStates, 
  getDistrictsByState 
} from '../data/locationsData';
import { servicesData } from '../data/servicesData';
import { AppLocation, ServiceItem } from '../types';
import { TwoWayConsultationSelector } from '../components/TwoWayConsultationSelector';
import { InvalidCombinationNotice } from '../components/InvalidCombinationNotice';
import { LoadTimeCTAPopup } from '../components/LoadTimeCTAPopup';
import { APTelanganaLocationDirectory } from '../components/APTelanganaLocationDirectory';

interface LocationPageProps {
  onNavigate: (path: string) => void;
  locale?: Locale;
  location?: AppLocation;
  initialServiceSlug?: string;
  onServiceChange?: (serviceSlug: string) => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ 
  onNavigate, 
  locale = 'en', 
  location,
  initialServiceSlug = '',
  onServiceChange
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeServiceSlug, setActiveServiceSlug] = useState<string>(initialServiceSlug);

  useEffect(() => {
    setActiveServiceSlug(initialServiceSlug || '');
  }, [initialServiceSlug]);

  // Master consultation categories list
  const allCategories = [
    { slug: 'marriage-astrology', label: 'Marriage Astrology', icon: HeartHandshake },
    { slug: 'kundali-matching', label: 'Kundali Matching', icon: Users },
    { slug: 'career-astrology', label: 'Career Astrology', icon: Briefcase },
    { slug: 'business-astrology', label: 'Business Astrology', icon: Building2 },
    { slug: 'horoscope-consultation', label: 'Horoscope Reading', icon: Compass },
    { slug: 'muhurtham', label: 'Muhurtham', icon: Calendar },
    { slug: 'education-astrology', label: 'Education Astrology', icon: Clock },
    { slug: 'relationship-astrology', label: 'Relationship Guidance', icon: HeartHandshake },
    { slug: 'family-astrology', label: 'Family Astrology', icon: Users },
    { slug: 'child-horoscope', label: 'Child Horoscope', icon: Sparkles },
    { slug: 'dosha-analysis', label: 'Dosha Analysis', icon: ShieldCheck },
    { slug: 'dasha-analysis', label: 'Dasha Analysis', icon: Clock },
    { slug: 'gochara', label: 'Transit (Gochara)', icon: Compass },
    { slug: 'numerology', label: 'Numerology', icon: Sparkles },
    { slug: 'prashna', label: 'Prashna Astrology', icon: HelpCircle },
    { slug: 'vedic-astrology', label: 'Vedic Astrology', icon: Sparkles }
  ];

  // Helper to change category while STRICTLY staying at the current location
  const handleCategoryChange = (slug: string) => {
    setActiveServiceSlug(slug);
    if (onServiceChange) {
      onServiceChange(slug);
    }
    const query = slug ? `?service=${slug}` : '';
    if (location) {
      let cleanLoc = location.path.trim();
      while (cleanLoc.startsWith('/locations')) {
        cleanLoc = cleanLoc.replace(/^\/locations/, '');
      }
      if (!cleanLoc.startsWith('/')) cleanLoc = '/' + cleanLoc;
      onNavigate(buildLocalizedPath(`/locations${cleanLoc}${query}`, locale));
    } else {
      onNavigate(buildLocalizedPath(`/locations${query}`, locale));
    }
  };

  // Helper to change location while STRICTLY preserving the active category
  const handleLocationChange = (targetPath: string) => {
    let clean = targetPath.trim();
    while (clean.startsWith('/locations')) {
      clean = clean.replace(/^\/locations/, '');
    }
    if (!clean.startsWith('/')) clean = '/' + clean;
    const query = activeServiceSlug ? `?service=${activeServiceSlug}` : '';
    onNavigate(buildLocalizedPath(`/locations${clean}${query}`, locale));
  };

  // -------------------------------------------------------------
  // 1. ROOT DIRECTORY (/locations)
  // -------------------------------------------------------------
  if (!location) {
    const states = getStates();
    const searchResults = searchTerm.trim().length > 1
      ? locationsData.filter(l => 
          (l.village && l.village.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (l.mandal && l.mandal.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (l.district && l.district.toLowerCase().includes(searchTerm.toLowerCase())) ||
          l.state.toLowerCase().includes(searchTerm.toLowerCase())
        ).slice(0, 15)
      : [];

    return (
      <div className="bg-[#FDFBF7]">
        <SEOHead
          title="Vedic Astrology Consultation Locations | AP & Telangana | Sri Gayathri Astrology"
          description="Explore Vedic astrology consultation locations across all 26 districts of Andhra Pradesh and 33 districts of Telangana. Sri Gayathri Astrology by Sri Krishna Jyotish. Call 88852 88817."
          canonicalPath={buildLocalizedPath('/locations', locale)}
          locale={locale}
        />
        
        <Breadcrumbs items={[{ label: 'Locations' }]} />

        {/* Directory Hero */}
        <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF5EC] to-[#FDFBF7] border-b border-[#E8DFC9] px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/8 border border-[#58111A]/20 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Authoritative Location Directory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#221F1F] font-heading mb-4">
              Vedic Astrology Across Andhra Pradesh & Telangana
            </h1>
            <p className="text-base sm:text-lg text-[#524B4B] max-w-2xl mx-auto mb-8">
              Sri Gayathri Astrology by Sri Krishna Jyotish provides personalized traditional consultations for individuals and families across both Telugu states.
            </p>

            {/* Live Search Input */}
            <div className="relative max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C7A58]" />
                <input
                  type="text"
                  placeholder="Search village, mandal, district or state (e.g., Arekal, Adoni, Kurnool, Hyderabad)..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-[#D4AF37]/50 focus:border-[#58111A] bg-white shadow-sm outline-none text-[#221F1F]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Search dropdown */}
              {searchTerm.trim().length > 1 && (
                <div className="absolute top-full left-0 w-full bg-white border border-[#E8DFC9] rounded-xl mt-2 shadow-xl z-50 text-left max-h-80 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    searchResults.map(loc => {
                      const hierarchy = getLocationHierarchy(loc);
                      const label = hierarchy.map(h => h.village || h.mandal || h.district || h.state).join(' → ');
                      return (
                        <button
                          key={loc.id}
                          onClick={() => handleLocationChange(loc.path)}
                          className="w-full px-4 py-3 hover:bg-[#FAF4E8] text-sm border-b border-[#F0E8D8] last:border-0 flex items-center justify-between transition-colors text-left"
                        >
                          <div>
                            <span className="font-bold text-[#58111A] capitalize">{loc.level}: </span>
                            <span className="text-[#221F1F] font-medium">{label}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-[#C59B27] shrink-0" />
                        </button>
                      );
                    })
                  ) : (
                    <div className="px-4 py-4 text-sm text-[#8C7A58] text-center">
                      No matching location found. Phone consultations are available statewide at 88852 88817.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* INTERACTIVE CATEGORY SELECTOR BAR (PRESERVES SELECTED CATEGORY ON ROOT) */}
        <section className="bg-white border-b border-[#E8DFC9] sticky top-16 z-30 shadow-2xs py-3 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 text-xs font-bold text-[#58111A] uppercase tracking-wider shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Consultation Type:</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleCategoryChange('')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  !activeServiceSlug
                    ? 'bg-[#58111A] text-white shadow-2xs'
                    : 'bg-[#FAF7F0] text-[#554E4E] hover:bg-[#F2E8D2] border border-[#E8DFC9]'
                }`}
              >
                All Services
              </button>

              {allCategories.map(cat => {
                const isActive = activeServiceSlug === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => handleCategoryChange(cat.slug)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#D4AF37] text-[#2D070D] font-bold shadow-2xs'
                        : 'bg-[#FAF7F0] text-[#403838] hover:bg-[#F2E8D2] hover:text-[#58111A] border border-[#E8DFC9]'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* TWO-WAY STATEFUL SELECTOR ON ROOT */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto -mt-6 mb-6 relative z-20">
          <TwoWayConsultationSelector
            onNavigate={onNavigate}
            locale={locale}
            activeServiceSlug={activeServiceSlug}
            onLocationChange={handleLocationChange}
            onServiceChange={handleCategoryChange}
          />
        </div>

        {/* INLINE MULTI-STEP LOCATION SELECTOR (Part 21) */}
        {(() => {
          const activeLoc = null;
          const districtLoc = null;
          const mandalLoc = null;
          const breadcrumbItems = [{ label: 'Locations' }];
          
          return (
            <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-2xl border border-[#E8DFC9] shadow-xs">
                <h2 className="text-xl font-bold text-[#221F1F] font-heading mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#D4AF37]" />
                  <span>Hierarchical Location Navigator</span>
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* 1. State Selector */}
                  <div>
                    <label className="block text-[10px] font-bold text-[#8C7A58] uppercase mb-1.5 ml-1">1. State</label>
                    <select 
                      className="w-full p-3 rounded-xl border border-[#DDD3C2] focus:border-[#58111A] outline-none text-sm bg-[#FAF7F0] font-medium"
                      value={'ap'}
                      onChange={(e) => handleLocationChange(e.target.value === 'tg' ? '/telangana' : '/andhra-pradesh')}
                    >
                      <option value="ap">Andhra Pradesh</option>
                      <option value="tg">Telangana</option>
                    </select>
                  </div>

                  {/* 2. District Selector */}
                  <div>
                    <label className="block text-[10px] font-bold text-[#8C7A58] uppercase mb-1.5 ml-1">2. District</label>
                    <select 
                      className="w-full p-3 rounded-xl border border-[#DDD3C2] focus:border-[#58111A] outline-none text-sm bg-white disabled:opacity-50"
                      value={''}
                      onChange={(e) => {
                        if (e.target.value) {
                          const stateSlug = 'andhra-pradesh';
                          handleLocationChange(`/${stateSlug}/${e.target.value}`);
                        }
                      }}
                    >
                      <option value="">Select District</option>
                      {getDistrictsByState('ap').map(d => (
                        <option key={d.id} value={d.slug}>{d.district}</option>
                      ))}
                    </select>
                  </div>

                  {/* 3. Mandal Selector */}
                  <div>
                    <label className="block text-[10px] font-bold text-[#8C7A58] uppercase mb-1.5 ml-1">3. Mandal / City</label>
                    <select 
                      className="w-full p-3 rounded-xl border border-[#DDD3C2] focus:border-[#58111A] outline-none text-sm bg-white disabled:opacity-50"
                      disabled={true}
                      value={''}
                    >
                      <option value="">Select Mandal</option>
                    </select>
                  </div>

                  {/* 4. Village Selector */}
                  <div>
                    <label className="block text-[10px] font-bold text-[#8C7A58] uppercase mb-1.5 ml-1">4. Village / Locality</label>
                    <select 
                      className="w-full p-3 rounded-xl border border-[#DDD3C2] focus:border-[#58111A] outline-none text-sm bg-white disabled:opacity-50"
                      disabled={true}
                      value={''}
                    >
                      <option value="">Select Village</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>
          );
        })()}

        {/* Full Hierarchical Location Directory (State > District > Mandal > Village) */}
        <APTelanganaLocationDirectory
          onNavigate={onNavigate}
          locale={locale}
          activeServiceSlug={activeServiceSlug}
        />

        <CallToActionBanner
          headline="Consult with Sri Krishna Jyotish"
          supportingText="Clients from every town and village across AP & Telangana can consult via direct telephone."
          onNavigateServices={() => onNavigate(buildLocalizedPath('/services', locale))}
        />
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. DYNAMIC LOCATION (STATE / DISTRICT / MANDAL / VILLAGE)
  // -------------------------------------------------------------
  const activeLoc = location;
  const hierarchy = getLocationHierarchy(activeLoc);
  const children = getChildLocations(activeLoc.id);

  // Exact names
  const locName = activeLoc.village || activeLoc.mandal || activeLoc.district || activeLoc.state;
  const stateLoc = hierarchy.find(h => h.level === 'state');
  const districtLoc = hierarchy.find(h => h.level === 'district');
  const mandalLoc = hierarchy.find(h => h.level === 'mandal');

  // Active Category details (if a category is selected)
  const activeServiceItem: ServiceItem | undefined = activeServiceSlug 
    ? (servicesData[activeServiceSlug] || servicesData['horoscope']) 
    : undefined;

  // Page Title conforming strictly to Part 26
  let pageTitle = '';
  let metaDesc = '';
  let h1Text = '';

  const servicePrefix = activeServiceItem ? `${activeServiceItem.title} in ` : 'Vedic Astrology Consultant in ';

  if (activeLoc.level === 'state') {
    pageTitle = `${servicePrefix}${activeLoc.state} | Sri Gayathri Astrology | 88852 88817`;
    metaDesc = `Vedic astrology consultation across ${activeLoc.state} by Sri Krishna Jyotish. Personalized Janma Kundali, marriage matching, career & Muhurtham guidance. Call 88852 88817.`;
    h1Text = `${servicePrefix}${activeLoc.state}`;
  } else if (activeLoc.level === 'district') {
    pageTitle = `${servicePrefix}${activeLoc.district}, ${stateLoc?.state || ''} | Sri Gayathri Astrology | 88852 88817`;
    metaDesc = `Traditional Vedic astrology consultation for clients in ${activeLoc.district}, ${stateLoc?.state || ''} by Sri Krishna Jyotish. Phone consultations at 88852 88817.`;
    h1Text = `${servicePrefix}${activeLoc.district}, ${stateLoc?.state || ''}`;
  } else if (activeLoc.level === 'mandal') {
    pageTitle = `${servicePrefix}${activeLoc.mandal}, ${districtLoc?.district || ''} | Sri Gayathri Astrology | 88852 88817`;
    metaDesc = `Vedic astrology consultation for clients in ${activeLoc.mandal} mandal, ${districtLoc?.district || ''}. Consult Sri Krishna Jyotish at 88852 88817.`;
    h1Text = `${servicePrefix}${activeLoc.mandal}, ${districtLoc?.district || ''}, ${stateLoc?.state || ''}`;
  } else {
    // Village
    pageTitle = `${servicePrefix}${activeLoc.village}, ${districtLoc?.district || ''} | Sri Gayathri Astrology | 88852 88817`;
    metaDesc = `Astrology consultation for clients in ${activeLoc.village}, ${mandalLoc?.mandal || ''}, ${districtLoc?.district || ''} by Sri Krishna Jyotish. Call 88852 88817.`;
    h1Text = `${servicePrefix}${activeLoc.village}, ${mandalLoc?.mandal || ''}, ${districtLoc?.district || ''}, ${stateLoc?.state || ''}`;
  }

  // Breadcrumbs items
  const breadcrumbItems: { label: string; href?: string; onClick?: () => void }[] = [
    { 
      label: 'Locations', 
      onClick: () => onNavigate(buildLocalizedPath('/locations', locale)) 
    }
  ];
  hierarchy.forEach((h, index) => {
    const isLast = index === hierarchy.length - 1 && !activeServiceSlug;
    const label = h.village || h.mandal || h.district || h.state;
    if (isLast) {
      breadcrumbItems.push({ label });
    } else {
      breadcrumbItems.push({
        label,
        onClick: () => handleLocationChange(h.path)
      });
    }
  });

  if (activeServiceItem) {
    breadcrumbItems.push({
      label: activeServiceItem.title
    });
  }

  // Services dynamic tailored to the location
  const tailoredServices = [
    {
      title: `Marriage Astrology in ${locName}`,
      slug: 'marriage-astrology',
      desc: `Traditional horoscope guidance for families and individuals in ${locName} regarding marriage timing, compatibility, and family alignment.`,
      icon: HeartHandshake
    },
    {
      title: `Kundali Matching in ${locName}`,
      slug: 'kundali-matching',
      desc: `Comprehensive birth chart matching, Ashtakoota Guna Milan, and 7th house evaluation for marriage alliances in ${locName}.`,
      icon: Users
    },
    {
      title: `Career Astrology in ${locName}`,
      slug: 'career-astrology',
      desc: `Astrological vocational timing and career guidance evaluating 10th house indicators and active Mahadasha cycles for residents of ${locName}.`,
      icon: Briefcase
    },
    {
      title: `Business Astrology in ${locName}`,
      slug: 'business-astrology',
      desc: `Traditional Jyotish guidance for business ventures, partnership compatibility, and commercial timing decisions for entrepreneurs in ${locName}.`,
      icon: Building2
    },
    {
      title: `Horoscope Consultation in ${locName}`,
      slug: 'horoscope-consultation',
      desc: `Personalized Janma Kundali evaluation covering Lagna, Rashi, active Dashas, and planetary transits for clients in ${locName}.`,
      icon: Compass
    },
    {
      title: `Muhurtham Consultation in ${locName}`,
      slug: 'muhurtham',
      desc: `Auspicious Panchanga timing calculations for weddings, Griha Pravesham, and commercial inaugurations for residents of ${locName}.`,
      icon: Calendar
    },
    {
      title: `Education Astrology in ${locName}`,
      slug: 'education-astrology',
      desc: `Academic inclination and competitive examination guidance based on 4th and 5th house configurations for students in ${locName}.`,
      icon: Clock
    },
    {
      title: `Dosha Analysis in ${locName}`,
      slug: 'dosha-analysis',
      desc: `Calm, classical evaluation of Kuja, Rahu-Ketu, and planetary configurations with practical traditional perspective for clients in ${locName}.`,
      icon: ShieldCheck
    },
    {
      title: `Prashna Astrology in ${locName}`,
      slug: 'prashna',
      desc: `Traditional horary chart cast for the exact moment of your question, providing immediate clarity when birth times are unknown.`,
      icon: HelpCircle
    }
  ];

  // Specific FAQs adhering to Master Prompt Parts 14 & 27
  const locationFAQs = [
    {
      q: `Who is Sri Krishna Jyotish?`,
      a: `Sri Krishna Jyotish is the traditional Vedic astrologer at Sri Gayathri Astrology. Based in Kurnool, Andhra Pradesh, he provides personalized astrology consultations for clients across Andhra Pradesh and Telangana.`
    },
    {
      q: `Can clients in ${locName} consult Sri Gayathri Astrology?`,
      a: `Yes. Sri Gayathri Astrology serves clients in ${locName} through direct telephone consultations and scheduled appointments. You can call 88852 88817 directly.`
    },
    {
      q: `What information is required for a horoscope consultation in ${locName}?`,
      a: `To cast and analyze your traditional Janma Kundali, you should provide your date of birth, exact time of birth, and place of birth.`
    },
    {
      q: `Is there a physical office in ${locName}?`,
      a: activeLoc.district === 'Kurnool' && activeLoc.level === 'district'
        ? `Sri Gayathri Astrology is headquartered in Kurnool, Andhra Pradesh, offering both in-person visits and telephone consultations.`
        : `Sri Gayathri Astrology is based in Kurnool, Andhra Pradesh, and serves clients in ${locName} via scheduled phone consultations, ensuring authentic Vedic guidance without requiring long travel.`
    }
  ];

  return (
    <div className="bg-[#FDFBF7]">
      <LoadTimeCTAPopup 
        location={activeLoc} 
        serviceTitle={activeServiceSlug ? servicesData[activeServiceSlug]?.title : undefined} 
        locale={locale} 
        onOpenLocationSelector={() => document.querySelector('.relative.z-20')?.scrollIntoView({ behavior: 'smooth' })} 
      />
      <SEOHead
        title={pageTitle}
        description={metaDesc}
        canonicalPath={buildLocalizedPath(`/locations${activeLoc.path}`, locale)}
        locale={locale}
        schemaType="AboutPage"
        extraSchema={{
          '@type': 'Place',
          'name': locName,
          'containedInPlace': {
            '@type': 'AdministrativeArea',
            'name': activeLoc.district || activeLoc.state
          }
        }}
      />

      {/* Breadcrumb component */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-12 sm:py-18 bg-gradient-to-b from-[#FAF5EC] to-[#FDFBF7] border-b border-[#E8DFC9] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Administrative Hierarchy Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/8 border border-[#58111A]/20 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>
              {activeLoc.level.toUpperCase()} • {hierarchy.map(h => h.village || h.mandal || h.district || h.state).join(' → ')}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#221F1F] font-heading mb-4 leading-tight">
            {h1Text}
          </h1>

          {/* Location Claim Rule (Part 16): Honest service assertion without fake physical branches */}
          <p className="text-base sm:text-lg text-[#524B4B] leading-relaxed mb-6">
            {activeServiceItem 
              ? `Sri Krishna Jyotish provides specialized ${activeServiceItem.title} consultations for individuals and families in ${locName} via telephone and arranged Jyotish sessions.`
              : (activeLoc.district === 'Kurnool' && activeLoc.level === 'district'
                ? 'Sri Gayathri Astrology by Sri Krishna Jyotish is headquartered in Kurnool, providing trusted Vedic astrology consultations for local families and visitors.'
                : `Sri Gayathri Astrology serves clients in ${locName} through dedicated telephone consultations and arranged Jyotish sessions, bringing classical Vedic guidance directly to your home.`)}
          </p>

          {/* Quick CTA cluster */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="tel:8885288817"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-base shadow-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#F5E6AB]" />
              <span>Call 88852 88817</span>
            </a>

            <button
              onClick={() => onNavigate(buildLocalizedPath('/contact', locale))}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-base shadow-sm transition-all"
            >
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Service Availability indicator */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#7A6F6F] font-medium bg-white px-3.5 py-1.5 rounded-lg border border-[#E8DFC9]">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
            <span>{activeLoc.serviceAvailability || 'Direct phone consultations available across AP & Telangana'}</span>
          </div>
        </div>
      </section>

      {/* TWO-WAY STATEFUL SELECTOR (Location + Service Independent Variables) */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto -mt-6 mb-4 relative z-20">
        <TwoWayConsultationSelector
          onNavigate={onNavigate}
          locale={locale}
          currentLocationPath={activeLoc.path}
          activeServiceSlug={activeServiceSlug}
          onLocationChange={handleLocationChange}
          onServiceChange={handleCategoryChange}
        />
      </div>

      {/* INVALID COMBINATION HANDLING (Master Prompt Section 8) */}
      {activeServiceSlug && !servicesData[activeServiceSlug] && (
        <div className="px-4">
          <InvalidCombinationNotice
            location={activeLoc}
            serviceSlug={activeServiceSlug}
            onNavigate={onNavigate}
            locale={locale}
            onChangeService={() => handleCategoryChange('')}
            onChangeLocation={() => handleLocationChange('/andhra-pradesh/kurnool')}
          />
        </div>
      )}

      {/* INTERACTIVE CATEGORY SELECTOR BAR (STRICTLY PRESERVES LOCATION) */}
      <section className="bg-white border-b border-[#E8DFC9] sticky top-16 z-30 shadow-2xs py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 text-xs font-bold text-[#58111A] uppercase tracking-wider shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Category:</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleCategoryChange('')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                !activeServiceSlug
                  ? 'bg-[#58111A] text-white shadow-2xs'
                  : 'bg-[#FAF7F0] text-[#554E4E] hover:bg-[#F2E8D2] border border-[#E8DFC9]'
              }`}
            >
              All Services
            </button>

            {allCategories.map(cat => {
              const isActive = activeServiceSlug === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#2D070D] font-bold shadow-2xs'
                      : 'bg-[#FAF7F0] text-[#403838] hover:bg-[#F2E8D2] hover:text-[#58111A] border border-[#E8DFC9]'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOCUSED SERVICE VIEW (SHOWN WHEN A CATEGORY IS ACTIVATED) */}
      {activeServiceItem && (
        <section className="py-10 bg-[#FAF7F0] border-b border-[#E8DFC9] px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white p-7 sm:p-10 rounded-2xl border-2 border-[#D4AF37]/60 shadow-xs">
            <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[#F0E8D8]">
              <div>
                <span className="text-xs font-extrabold text-[#58111A] uppercase tracking-wider bg-[#58111A]/8 px-3 py-1 rounded-full">
                  Focused Consultation
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mt-2">
                  {activeServiceItem.title} in {locName}
                </h2>
              </div>
              <button
                onClick={() => handleCategoryChange('')}
                className="text-xs font-bold text-[#8C7A58] hover:text-[#58111A] underline shrink-0"
              >
                Reset to All Services
              </button>
            </div>

            <p className="text-base text-[#524B4B] leading-relaxed mb-6">
              {activeServiceItem.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#E8DFC9]">
                <h3 className="font-bold text-sm text-[#58111A] uppercase mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Key Points We Evaluate:</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#554E4E]">
                  {activeServiceItem.whatWeDiscuss?.slice(0, 4).map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#E8DFC9]">
                <h3 className="font-bold text-sm text-[#58111A] uppercase mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Information Required:</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-[#554E4E]">
                  {activeServiceItem.whatYouMayNeed?.map((need, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#58111A] shrink-0 mt-2" />
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#58111A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-[#F5E6AB]">
                  Direct Consultation for {locName}
                </div>
                <div className="text-xs text-[#E6D5D5] mt-0.5">
                  Speak with Sri Krishna Jyotish directly by phone
                </div>
              </div>
              <a
                href="tel:8885288817"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-xs shadow-xs transition-colors shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call 88852 88817</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Exact Location Panel (Part 14 B) */}
      <section className="py-8 bg-white border-b border-[#E8DFC9] px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#E8DFC9]">
            <h2 className="text-sm font-bold text-[#8C7A58] uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#58111A]" />
              <span>Exact Location Context</span>
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="bg-white p-3.5 rounded-xl border border-[#EDE4D4]">
                <div className="text-xs text-[#8C7A58] uppercase font-semibold">State</div>
                <div className="font-bold text-[#221F1F] mt-0.5">{stateLoc?.state || '—'}</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-[#EDE4D4]">
                <div className="text-xs text-[#8C7A58] uppercase font-semibold">District</div>
                <div className="font-bold text-[#221F1F] mt-0.5">{districtLoc?.district || '—'}</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-[#EDE4D4]">
                <div className="text-xs text-[#8C7A58] uppercase font-semibold">Mandal / Sub-District</div>
                <div className="font-bold text-[#221F1F] mt-0.5">{mandalLoc?.mandal || '—'}</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-[#EDE4D4]">
                <div className="text-xs text-[#8C7A58] uppercase font-semibold">Village / Locality</div>
                <div className="font-bold text-[#221F1F] mt-0.5">{activeLoc.village || '—'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Child Locations Explorer (PRESERVES THE ACTIVE CATEGORY) */}
      {children.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mb-2">
              {activeLoc.level === 'state' && `Districts in ${activeLoc.state}`}
              {activeLoc.level === 'district' && `Mandals & Regions in ${activeLoc.district}`}
              {activeLoc.level === 'mandal' && `Villages & Localities in ${activeLoc.mandal}`}
            </h2>
            <p className="text-sm text-[#665E5E]">
              {activeServiceSlug
                ? `Switch location while keeping ${activeServiceItem?.title || 'active category'} selected`
                : 'Select a sub-location to view localized consultation information'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {children.map(child => (
              <button
                key={child.id}
                onClick={() => handleLocationChange(child.path)}
                className="p-4 rounded-xl bg-white border border-[#E8DFC9] hover:border-[#D4AF37] hover:bg-[#FAF7F0] transition-all text-left flex items-center justify-between group shadow-2xs"
              >
                <div>
                  <div className="text-xs text-[#8C7A58] uppercase font-semibold">{child.level}</div>
                  <div className="font-bold text-[#221F1F] text-sm group-hover:text-[#58111A]">
                    {child.village || child.mandal || child.district}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#8C7A58] group-hover:text-[#58111A] transition-transform group-hover:translate-x-0.5 shrink-0" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Parent Administrative Links (PRESERVES THE ACTIVE CATEGORY) */}
      <section className="py-6 px-4 bg-[#FAF7F0] border-y border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3 text-sm">
          <span className="font-bold text-[#58111A]">Administrative Hierarchy:</span>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onNavigate(buildLocalizedPath(`/locations${activeServiceSlug ? `?service=${activeServiceSlug}` : ''}`, locale))}
              className="text-[#8C7A58] hover:text-[#58111A] underline font-medium"
            >
              All Locations
            </button>
            {stateLoc && (
              <>
                <span className="text-[#DDD3C2]">/</span>
                <button
                  onClick={() => handleLocationChange(stateLoc.path)}
                  className="text-[#8C7A58] hover:text-[#58111A] underline font-medium"
                >
                  {stateLoc.state}
                </button>
              </>
            )}
            {districtLoc && districtLoc.id !== activeLoc.id && (
              <>
                <span className="text-[#DDD3C2]">/</span>
                <button
                  onClick={() => handleLocationChange(districtLoc.path)}
                  className="text-[#8C7A58] hover:text-[#58111A] underline font-medium"
                >
                  {districtLoc.district} District
                </button>
              </>
            )}
            {mandalLoc && mandalLoc.id !== activeLoc.id && (
              <>
                <span className="text-[#DDD3C2]">/</span>
                <button
                  onClick={() => handleLocationChange(mandalLoc.path)}
                  className="text-[#8C7A58] hover:text-[#58111A] underline font-medium"
                >
                  {mandalLoc.mandal} Mandal
                </button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Tailored Services in this location (Part 15) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mb-2">
            Astrology Consultation Services in {locName}
          </h2>
          <p className="text-sm text-[#665E5E] max-w-2xl mx-auto">
            Click any service to view focused guidance for {locName} without losing your location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tailoredServices.map((srv, idx) => {
            const Icon = srv.icon;
            const isSelected = activeServiceSlug === srv.slug;
            return (
              <div 
                key={idx}
                className={`p-6 rounded-2xl bg-white border transition-all flex flex-col justify-between shadow-2xs ${
                  isSelected ? 'border-2 border-[#D4AF37] ring-2 ring-[#D4AF37]/20 bg-[#FAF7F0]' : 'border-[#E8DFC9] hover:border-[#D4AF37]'
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#58111A]/8 flex items-center justify-center text-[#58111A] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#221F1F] font-heading mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-[#524B4B] leading-relaxed mb-4">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0E8D8] flex items-center justify-between">
                  <button
                    onClick={() => handleCategoryChange(srv.slug)}
                    className="text-xs font-bold text-[#58111A] hover:underline flex items-center gap-1"
                  >
                    <span>{isSelected ? 'Currently Viewing' : 'View in This Location'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="tel:8885288817"
                    className="text-xs font-bold text-[#D4AF37] hover:text-[#58111A] flex items-center gap-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>88852 88817</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How Consultation Works from this location (Part 7, Part 14 E) */}
      <section className="py-14 bg-white border-y border-[#E8DFC9] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mb-2">
              How Astrology Consultation Works from {locName}
            </h2>
            <p className="text-sm text-[#665E5E]">
              Simple, transparent steps to connect with Sri Krishna Jyotish
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#E8DFC9]">
              <div className="text-xs font-extrabold text-[#58111A] mb-2 uppercase">Step 01</div>
              <h3 className="font-bold text-[#221F1F] text-base mb-1">Call 88852 88817</h3>
              <p className="text-xs sm:text-sm text-[#524B4B]">Reach out directly to Sri Krishna Jyotish to discuss your consultation needs.</p>
            </div>
            <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#E8DFC9]">
              <div className="text-xs font-extrabold text-[#58111A] mb-2 uppercase">Step 02</div>
              <h3 className="font-bold text-[#221F1F] text-base mb-1">Explain Your Questions</h3>
              <p className="text-xs sm:text-sm text-[#524B4B]">Share what you would like to discuss: marriage, career, business, or horoscope.</p>
            </div>
            <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#E8DFC9]">
              <div className="text-xs font-extrabold text-[#58111A] mb-2 uppercase">Step 03</div>
              <h3 className="font-bold text-[#221F1F] text-base mb-1">Provide Birth Details</h3>
              <p className="text-xs sm:text-sm text-[#524B4B]">Share date of birth, exact time of birth, and place of birth.</p>
            </div>
            <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#E8DFC9]">
              <div className="text-xs font-extrabold text-[#58111A] mb-2 uppercase">Step 04</div>
              <h3 className="font-bold text-[#221F1F] text-base mb-1">Horoscope Analysis</h3>
              <p className="text-xs sm:text-sm text-[#524B4B]">Relevant traditional Vedic charts (Rashi, Navamsha, Dashas) are examined.</p>
            </div>
            <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#E8DFC9]">
              <div className="text-xs font-extrabold text-[#58111A] mb-2 uppercase">Step 05</div>
              <h3 className="font-bold text-[#221F1F] text-base mb-1">Consultation</h3>
              <p className="text-xs sm:text-sm text-[#524B4B]">The interpretation is explained clearly in Telugu, English, or Hindi.</p>
            </div>
            <div className="p-5 rounded-xl bg-[#FAF7F0] border border-[#E8DFC9]">
              <div className="text-xs font-extrabold text-[#58111A] mb-2 uppercase">Step 06</div>
              <h3 className="font-bold text-[#221F1F] text-base mb-1">Ask Follow-up Questions</h3>
              <p className="text-xs sm:text-sm text-[#524B4B]">Discuss any specific questions with total patience and clarity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location FAQs (Part 14 G) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mb-2">
            Frequently Asked Questions for {locName}
          </h2>
          <p className="text-sm text-[#665E5E]">
            Clear answers regarding consultation arrangements and Vedic astrology services
          </p>
        </div>

        <div className="space-y-4">
          {locationFAQs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white border border-[#E8DFC9] shadow-2xs">
              <h3 className="text-base sm:text-lg font-bold text-[#221F1F] mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm sm:text-base text-[#524B4B] leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Traditional Astrology Disclaimer (Part 40) */}
      <section className="py-6 px-4 bg-[#FAF7F0] border-t border-[#E8DFC9] text-center text-xs text-[#7A6F6F] max-w-4xl mx-auto rounded-xl my-6">
        <p>
          <strong>Disclaimer:</strong> Astrology is a traditional belief and interpretive practice. Astrology consultations are intended for personal, cultural and spiritual guidance and should not replace qualified medical, psychological, legal, financial or other professional advice. Specific outcomes cannot be guaranteed.
        </p>
      </section>

      {/* Bottom CTA Banner */}
      <CallToActionBanner
        headline={`Consult Sri Krishna Jyotish from ${locName}`}
        supportingText="Direct telephone consultations available daily. Call 88852 88817 to schedule your session."
        onNavigateServices={() => onNavigate(buildLocalizedPath('/services', locale))}
      />
    </div>
  );
};
