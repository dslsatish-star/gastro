import React, { useState } from 'react';
import { 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  ShieldCheck, 
  MessageCircle,
  Search,
  Filter
} from 'lucide-react';
import { ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';
import { locationsData, getLocationByPath } from '../data/locationsData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PreparationChecklist } from '../components/PreparationChecklist';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { DiyaIcon, GoldDivider } from '../components/VedicDecorativeElements';
import { Locale, translations, buildLocalizedPath } from '../data/i18n';
import { TwoWayConsultationSelector } from '../components/TwoWayConsultationSelector';

interface ServicePageProps {
  service: ServiceItem;
  onNavigate: (path: string) => void;
  locale?: Locale;
  currentLocationPath?: string;
  onLocationChange?: (path: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ 
  service, 
  onNavigate, 
  locale = 'en',
  currentLocationPath,
  onLocationChange
}) => {
  const [locationSearch, setLocationSearch] = useState('');
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const t = translations[locale] || translations.en;
  const relatedServices = service.relatedServiceSlugs
    .map(slug => servicesData[slug])
    .filter(Boolean);

  const activeLoc = currentLocationPath ? getLocationByPath(currentLocationPath) : undefined;
  const locName = activeLoc ? (activeLoc.village || activeLoc.mandal || activeLoc.district || activeLoc.state) : '';

  const canonical = locale === 'en' ? `/${service.slug}` : `/${locale}/${service.slug}`;

  // Filtered locations for the picker
  const filteredLocations = locationSearch.trim().length > 1
    ? locationsData.filter(l => 
        (l.village && l.village.toLowerCase().includes(locationSearch.toLowerCase())) ||
        (l.mandal && l.mandal.toLowerCase().includes(locationSearch.toLowerCase())) ||
        (l.district && l.district.toLowerCase().includes(locationSearch.toLowerCase())) ||
        l.state.toLowerCase().includes(locationSearch.toLowerCase())
      ).slice(0, 8)
    : [];

  const handleSelectLocation = (locPath: string) => {
    let clean = locPath.trim();
    while (clean.startsWith('/locations')) {
      clean = clean.replace(/^\/locations/, '');
    }
    if (!clean.startsWith('/')) clean = '/' + clean;

    if (onLocationChange) {
      onLocationChange(clean);
    }
    setShowLocationPicker(false);
    setLocationSearch('');
    // Keep service constant, switch to selected location
    onNavigate(buildLocalizedPath(`/locations${clean}?service=${service.slug}`, locale));
  };

  const handleServiceChange = (newServiceSlug: string) => {
    if (currentLocationPath) {
      let clean = currentLocationPath.trim();
      while (clean.startsWith('/locations')) {
        clean = clean.replace(/^\/locations/, '');
      }
      if (!clean.startsWith('/')) clean = '/' + clean;
      // Keep location constant, switch to new service
      onNavigate(buildLocalizedPath(`/locations${clean}?service=${newServiceSlug}`, locale));
    } else {
      onNavigate(buildLocalizedPath(`/services/${newServiceSlug}`, locale));
    }
  };

  return (
    <div>
      {/* Inner-Page SEO with Title including Phone Number */}
      <SEOHead
        title={locName ? `${service.title} in ${locName} | Sri Krishna Jyotish | 88852 88817` : service.seoTitle}
        description={locName 
          ? `Personalized ${service.title.toLowerCase()} for clients in ${locName} by Sri Krishna Jyotish. Call 88852 88817 for traditional Vedic astrology consultation.`
          : service.seoDescription}
        canonicalPath={canonical}
        schemaType="Service"
        extraSchema={{
          '@type': 'Service',
          'name': service.title,
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Sri Gayathri Astrology',
            'telephone': '+918885288817'
          },
          'areaServed': locName ? `${locName}, Andhra Pradesh & Telangana` : 'Andhra Pradesh & Telangana',
          'description': service.summary
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: t.nav.services, href: buildLocalizedPath('/services', locale), onClick: () => onNavigate(buildLocalizedPath('/services', locale)) },
          ...(activeLoc ? [{ label: locName, onClick: () => onNavigate(buildLocalizedPath(`/locations${activeLoc.path}`, locale)) }] : []),
          { label: service.title }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FAF5EC] via-[#FDFBF7] to-[#FAF7F0] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/8 border border-[#58111A]/15 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-4">
            <DiyaIcon className="w-4 h-4" />
            <span>Sri Gayathri Astrology • Sri Krishna Jyotish</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#221F1F] font-heading mb-5 leading-tight">
            {locName ? `${service.title} in ${locName}` : service.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-[#554E4E] leading-relaxed max-w-3xl mx-auto mb-8">
            {locName 
              ? `Personalized ${service.title.toLowerCase()} for clients in ${locName}. ${service.heroSupportingText}`
              : service.heroSupportingText}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8885288817"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-base shadow-md transition-all border border-[#7A1926]"
            >
              <PhoneCall className="w-5 h-5 text-[#F5E6AB]" />
              <span>Call 88852 88817 for Consultation</span>
            </a>

            <a
              href={`https://wa.me/918885288817?text=Hello%20Sri%20Krishna%20Jyotish,%20I%20am%20interested%20in%20a%20consultation%20regarding%20${encodeURIComponent(service.title)}${locName ? `%20in%20${encodeURIComponent(locName)}` : ''}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#126b34] font-semibold text-base transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* TWO-WAY STATEFUL SELECTOR (Location + Service Independent Variables) */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto -mt-6 mb-4 relative z-20">
        <TwoWayConsultationSelector
          onNavigate={onNavigate}
          locale={locale}
          currentLocationPath={activeLoc?.path || currentLocationPath}
          activeServiceSlug={service.slug}
          onLocationChange={handleSelectLocation}
          onServiceChange={handleServiceChange}
        />
      </div>

      {/* LOCATION CONTEXT & SWITCHER BAR */}
      <section className="bg-white border-b border-[#E8DFC9] py-3.5 px-4 shadow-2xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#58111A]" />
            <span className="text-[#665E5E]">Consultation Area:</span>
            {activeLoc ? (
              <span className="font-bold text-[#58111A] bg-[#FAF4E8] px-2.5 py-1 rounded-md border border-[#E8DFC9]">
                {locName} ({activeLoc.state})
              </span>
            ) : (
              <span className="font-semibold text-[#221F1F]">
                All Andhra Pradesh & Telangana
              </span>
            )}
          </div>

          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setShowLocationPicker(!showLocationPicker)}
              className="w-full sm:w-auto px-3.5 py-1.5 rounded-lg bg-[#FAF7F0] hover:bg-[#F2EADB] text-[#58111A] font-bold border border-[#E8DFC9] flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>{activeLoc ? 'Change Location (Keep Service)' : 'Select Your Town / District'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* Quick Location Picker Dropdown */}
            {showLocationPicker && (
              <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white border border-[#E8DFC9] rounded-xl shadow-xl z-50 p-3 text-left">
                <div className="relative mb-2">
                  <Search className="w-3.5 h-3.5 text-[#8C7A58] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Type village, mandal, district..."
                    value={locationSearch}
                    onChange={(e) => setLocationSearch(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md border border-[#DDD3C2] outline-none focus:border-[#58111A]"
                    autoFocus
                  />
                </div>

                <div className="max-h-48 overflow-y-auto space-y-1">
                  {filteredLocations.length > 0 ? (
                    filteredLocations.map(l => (
                      <button
                        key={l.id}
                        onClick={() => handleSelectLocation(l.path)}
                        className="w-full px-2.5 py-1.5 text-xs rounded hover:bg-[#FAF4E8] text-left flex items-center justify-between text-[#221F1F]"
                      >
                        <span className="truncate">{l.village || l.mandal || l.district || l.state}</span>
                        <span className="text-[10px] text-[#8C7A58] capitalize ml-1">{l.level}</span>
                      </button>
                    ))
                  ) : (
                    <div className="p-2 text-[11px] text-[#8C7A58] text-center">
                      {locationSearch.trim().length > 1
                        ? 'No match found'
                        : 'Sample: Hyderabad, Kurnool, Adoni, Arekal, Tirupati, Warangal...'}
                    </div>
                  )}
                </div>

                <div className="pt-2 mt-2 border-t border-[#F0E8D8] flex items-center justify-between">
                  <button
                    onClick={() => {
                      setShowLocationPicker(false);
                      onNavigate(buildLocalizedPath(`/locations?service=${service.slug}`, locale));
                    }}
                    className="text-[11px] font-bold text-[#58111A] hover:underline"
                  >
                    Browse All Locations Directory
                  </button>
                  <button
                    onClick={() => setShowLocationPicker(false)}
                    className="text-[11px] text-[#8C7A58] hover:text-[#221F1F]"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left / Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. "Is This What You're Looking For?" */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC9] shadow-2xs">
              <div className="flex items-center gap-2.5 mb-4">
                <HelpCircle className="w-5 h-5 text-[#58111A]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading">
                  Is This What You're Looking For?
                </h2>
              </div>
              <p className="text-sm text-[#5C5555] mb-5">
                Clients frequently reach out to Sri Krishna Jyotish with the following questions and situations:
              </p>
              <ul className="space-y-3">
                {service.isThisForYouQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#332E2E]">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 2. About This Consultation */}
            <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#E8DFC9]">
              <div className="flex items-center gap-2.5 mb-4">
                <Sparkles className="w-5 h-5 text-[#58111A]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading">
                  About This Consultation
                </h2>
              </div>
              <div className="space-y-4 text-sm sm:text-base text-[#4D4545] leading-relaxed">
                {service.aboutContent.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* 3. What We Discuss */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC9]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading mb-4">
                What We Discuss During the Consultation
              </h2>
              <p className="text-sm text-[#5C5555] mb-5">
                Every consultation is tailored to your unique birth chart and questions. Common areas of discussion include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.whatWeDiscuss.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#FAF7F0] border border-[#EDE4D4] flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#58111A] mt-2 shrink-0" />
                    <span className="text-sm font-medium text-[#221F1F]">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. What Information May Be Required */}
            <section className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#E8DFC9]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading mb-4">
                Information That May Be Helpful
              </h2>
              <div className="space-y-3">
                {service.whatYouMayNeed.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#4D4545]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. How It Works */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC9]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading mb-6">
                Consultation Process
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {service.howItWorksSteps.map((step, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#FAF7F0] border border-[#EDE4D4]">
                    <div className="text-xs font-bold text-[#58111A] mb-1 uppercase tracking-wider">
                      Step {step.step}
                    </div>
                    <div className="text-base font-bold text-[#221F1F] mb-2">
                      {step.title}
                    </div>
                    <div className="text-xs sm:text-sm text-[#554E4E]">
                      {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Service-Specific FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <section className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DFC9]">
                <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading mb-6">
                  {service.title} FAQs
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#FAF7F0] border border-[#EDE4D4]">
                      <h3 className="text-sm sm:text-base font-bold text-[#221F1F] mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#554E4E] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Right Column: Sticky Consultation Call Card & Related Services */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Call Action Box */}
            <div className="sticky top-24 bg-gradient-to-b from-[#58111A] to-[#3D0A11] rounded-2xl p-6 sm:p-7 text-white shadow-lg border border-[#7A1926]">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <DiyaIcon className="w-7 h-7" />
              </div>

              <div className="text-xs font-bold text-[#F5E6AB] uppercase tracking-wider mb-1">
                Direct Astrologer Consultation
              </div>

              <h3 className="text-xl font-bold text-white font-heading mb-2">
                Sri Krishna Jyotish
              </h3>

              <p className="text-xs text-[#E8DCD4] leading-relaxed mb-6">
                Consult regarding {service.title.toLowerCase()} or other traditional Jyotish questions.
              </p>

              <a
                href="tel:8885288817"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-base transition-all shadow-md active:scale-95"
              >
                <PhoneCall className="w-5 h-5 fill-current" />
                <span>Call 88852 88817</span>
              </a>

              <div className="mt-3 text-center text-[11px] text-[#D5C2BA]">
                Sri Gayathri Astrology • Kurnool, AP
              </div>

              <div className="mt-6 pt-5 border-t border-white/15 space-y-2 text-xs text-[#E8DCD4]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Strictly confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Traditional Vedic principles</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>No fear-based predictions</span>
                </div>
              </div>
            </div>

            {/* Preparation helper */}
            <PreparationChecklist />

            {/* Related Services Internal Links (PRESERVES LOCATION) */}
            {relatedServices.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-[#E8DFC9]">
                <h3 className="text-base font-bold text-[#221F1F] font-heading mb-4">
                  Related Consultations
                </h3>
                <div className="space-y-2.5">
                  {relatedServices.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => handleServiceChange(rel.slug)}
                      className="w-full p-3 rounded-xl bg-[#FAF7F0] hover:bg-[#F2EADB] transition-colors text-left flex items-center justify-between group text-xs sm:text-sm font-semibold text-[#221F1F]"
                    >
                      <span>{rel.title}</span>
                      <ChevronRight className="w-4 h-4 text-[#C59B27] group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* Call To Action Banner */}
      <CallToActionBanner
        headline={`Speak with Sri Krishna Jyotish about ${service.title}`}
        supportingText={locName 
          ? `Serving clients in ${locName} and across Andhra Pradesh & Telangana through personalized telephone consultations.`
          : 'Providing clear, traditional Vedic guidance for families and individuals across Andhra Pradesh and Telangana.'}
        onNavigateServices={() => onNavigate(buildLocalizedPath('/services', locale))}
      />
    </div>
  );
};
