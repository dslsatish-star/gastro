import React from 'react';
import { MapPin, PhoneCall, CheckCircle2, ShieldCheck, Compass, Users, MessageCircle } from 'lucide-react';
import { DiyaIcon } from './VedicDecorativeElements';
import { Locale, translations } from '../data/i18n';
import { getWhatsAppUrl, DISPLAY_PHONE } from '../utils/whatsapp';

interface RegionalReachSectionProps {
  locale?: Locale;
  onNavigateKurnool: () => void;
}

export const RegionalReachSection: React.FC<RegionalReachSectionProps> = ({ locale = 'en', onNavigateKurnool }) => {
  const t = translations[locale] || translations.en;

  const telanganaCities = [
    'Hyderabad',
    'Secunderabad',
    'Warangal',
    'Karimnagar',
    'Nizamabad',
    'Khammam',
    'Nalgonda',
    'Mahbubnagar',
    'Adilabad',
    'Siddipet',
    'Ramagundam',
    'Suryapet'
  ];

  const andhraCities = [
    'Kurnool (Head Center)',
    'Vijayawada',
    'Visakhapatnam',
    'Tirupati',
    'Guntur',
    'Anantapur',
    'Kadapa (YSR)',
    'Nellore',
    'Rajahmundry',
    'Kakinada',
    'Ongole',
    'Chittoor',
    'Eluru',
    'Machilipatnam'
  ];

  const telanganaWhatsAppUrl = getWhatsAppUrl({
    path: '/',
    locale: locale as Locale,
    customTopic: locale === 'te' 
      ? 'తెలంగాణ (హైదరాబాద్ / వరంగల్) నుండి జ్యోతిష్య సంప్రదింపుల' 
      : locale === 'hi' 
      ? 'तेलंगाना (हैदराबाद / वारंगल) से ज्योतिषीय परामर्श' 
      : 'Vedic astrology consultation for Telangana (Hyderabad / Secunderabad / Warangal)'
  });

  const andhraWhatsAppUrl = getWhatsAppUrl({
    path: '/',
    locale: locale as Locale,
    customTopic: locale === 'te' 
      ? 'ఆంధ్రప్రదేశ్ (కర్నూలు / విజయవాడ / తిరుపతి / వైజాగ్) నుండి జ్యోతిష్య సంప్రదింపుల' 
      : locale === 'hi' 
      ? 'आंध्र प्रदेश (कुरनूल / विजयवाड़ा / तिरुपति / विशाखापट्टनम) से ज्योतिषीय परामर्श' 
      : 'Vedic astrology consultation for Andhra Pradesh (Kurnool / Vijayawada / Tirupati / Vizag)'
  });

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FDFBF7] px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#58111A]/8 border border-[#58111A]/20 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-4">
            <DiyaIcon className="w-4 h-4" />
            <span>{t.home.regionBadge}</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#221F1F] font-heading mb-4 leading-tight">
            {t.home.regionHeading}
          </h2>
          
          <p className="text-base sm:text-lg text-[#554E4E] leading-relaxed font-normal">
            {t.home.regionSubtitle}
          </p>
        </div>

        {/* 2-Column Grid: Telangana & Andhra Pradesh */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Telangana Card */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-[#E8DFC9] shadow-2xs flex flex-col justify-between hover:border-[#D4AF37] transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#F0E8D8]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#58111A]/10 text-[#58111A] flex items-center justify-center font-bold font-heading text-lg">
                    TG
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#221F1F] font-heading">
                      {t.home.tgHeading}
                    </h3>
                    <p className="text-xs text-[#8C7A58] font-medium">
                      Direct Phone & Online Consultations
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#FAF4E8] text-[#58111A] border border-[#E8DFC9]">
                  Telangana
                </span>
              </div>

              <p className="text-sm text-[#554E4E] leading-relaxed mb-6">
                Consultations for families and professionals in Hyderabad, Secunderabad, Warangal and across Telangana for marriage matching, career transitions, business expansion, and Muhurtham timing according to authentic Telugu traditions.
              </p>

              {/* City chips */}
              <div className="mb-6">
                <div className="text-xs font-bold text-[#332E2E] uppercase tracking-wider mb-2.5">
                  Frequently Consulted Regions:
                </div>
                <div className="flex flex-wrap gap-2">
                  {telanganaCities.map((city) => (
                    <span 
                      key={city}
                      className="px-2.5 py-1 rounded-lg bg-[#FAF7F0] border border-[#E8DFC9] text-xs font-medium text-[#403838]"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F0E8D8] flex flex-wrap items-center justify-between gap-3">
              <a
                href={telanganaWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Telangana Desk</span>
              </a>

              <a
                href="tel:8885288817"
                className="text-xs font-bold text-[#58111A] hover:underline flex items-center gap-1"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call {DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Andhra Pradesh Card */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-[#E8DFC9] shadow-2xs flex flex-col justify-between hover:border-[#D4AF37] transition-all">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#F0E8D8]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C59B27]/20 text-[#58111A] flex items-center justify-center font-bold font-heading text-lg">
                    AP
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#221F1F] font-heading">
                      {t.home.apHeading}
                    </h3>
                    <p className="text-xs text-[#8C7A58] font-medium">
                      In-Person (Kurnool) & Direct Phone (All AP)
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#FAF4E8] text-[#58111A] border border-[#E8DFC9]">
                  Andhra Pradesh
                </span>
              </div>

              <p className="text-sm text-[#554E4E] leading-relaxed mb-6">
                Consult with Sri Krishna Jyotish in-person in Kurnool or by phone across Rayalaseema, Coastal Andhra, and Uttarandhra. Specialized guidance on Telugu Gothram, Kundali matching, and Dosha analysis.
              </p>

              {/* City chips */}
              <div className="mb-6">
                <div className="text-xs font-bold text-[#332E2E] uppercase tracking-wider mb-2.5">
                  Frequently Consulted Regions:
                </div>
                <div className="flex flex-wrap gap-2">
                  {andhraCities.map((city) => (
                    <span 
                      key={city}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                        city.includes('Kurnool')
                          ? 'bg-[#58111A] text-white font-bold'
                          : 'bg-[#FAF7F0] border border-[#E8DFC9] text-[#403838]'
                      }`}
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F0E8D8] flex flex-wrap items-center justify-between gap-3">
              <a
                href={andhraWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp AP Desk</span>
              </a>

              <button
                onClick={onNavigateKurnool}
                className="text-xs font-bold text-[#58111A] hover:underline flex items-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Kurnool Center Details</span>
              </button>
            </div>
          </div>

        </div>

        {/* Quick Consultation Notice for both states */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#58111A] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5 text-[#F5E6AB]" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#F5E6AB]">
                {t.home.regionCallText}
              </div>
              <div className="text-xs text-[#E6D5D5] mt-0.5">
                Telugu Panchangam • Janma Kundali • Muhurtham • Kundali Matching
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:8885288817"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-sm shadow-sm transition-all whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 fill-current" />
              <span>Call 88852 88817</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
