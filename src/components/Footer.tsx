import React from 'react';
import { Phone, MapPin, Mail, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';
import { DiyaIcon, GoldDivider } from './VedicDecorativeElements';
import { Locale, translations, buildLocalizedPath, getEnabledLanguages, parsePathLocale } from '../data/i18n';

interface FooterProps {
  onNavigate: (path: string) => void;
  locale?: Locale;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, locale = 'en' }) => {
  const t = translations[locale] || translations.en;

  const coreConsultations = [
    { label: t.nav.marriage, path: '/marriage-astrology' },
    { label: t.nav.kundali, path: '/kundali-matching' },
    { label: t.nav.horoscope, path: '/horoscope' },
    { label: t.nav.career, path: '/career-astrology' },
    { label: t.nav.business, path: '/business-astrology' },
    { label: t.nav.muhurtham, path: '/muhurtham' },
    { label: t.nav.numerology, path: '/numerology' },
    { label: 'Dosha Analysis', path: '/dosha-analysis' }
  ];

  const knowledgeLinks = [
    { label: 'Locations', path: '/locations' },
    { label: 'Andhra Pradesh', path: '/locations/andhra-pradesh' },
    { label: 'Telangana', path: '/locations/telangana' },
    { label: 'Kurnool Center', path: '/locations/andhra-pradesh/kurnool' },
    { label: t.nav.about, path: '/about' },
    { label: 'Astrology Consultation', path: '/astrology-consultation' },
    { label: 'Educational Guides', path: '/guides' },
    { label: t.nav.faq, path: '/faq' },
    { label: t.nav.contact, path: '/contact' }
  ];

  return (
    <footer className="bg-[#2D070D] text-[#E8DCD4] border-t-4 border-[#D4AF37] pt-16 pb-28 sm:pb-16 relative overflow-hidden">
      {/* Background mandala accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Identity */}
          <div>
            <div 
              onClick={() => onNavigate(buildLocalizedPath('/', locale))}
              className="flex items-center gap-3 cursor-pointer mb-4"
            >
              <div className="w-10 h-10 rounded-lg bg-[#58111A] border border-[#D4AF37]/60 flex items-center justify-center">
                <DiyaIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white tracking-wide">
                  Sri Gayathri Astrology
                </h3>
                <p className="text-xs text-[#D4AF37] font-medium">Sri Krishna Jyotish</p>
              </div>
            </div>

            <p className="text-sm text-[#C8B8B0] leading-relaxed mb-6">
              Traditional Vedic astrology and horoscope guidance in Kurnool, Andhra Pradesh. Dedicated to clarity, compassion, and authentic Jyotish Shastra principles for individuals and families.
            </p>

            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5 text-[#E6D8D0]">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <span>Kurnool, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a 
                  href="tel:8885288817"
                  className="font-bold text-[#F5E6AB] hover:text-white transition-colors tracking-wide text-base"
                >
                  88852 88817
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Core Consultations */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>{t.home.popularServicesHeading}</span>
            </h4>
            <ul className="space-y-2 text-sm text-[#C8B8B0]">
              {coreConsultations.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => onNavigate(buildLocalizedPath(item.path, locale))}
                    className="hover:text-[#F5E6AB] transition-colors flex items-center gap-1.5 text-left py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]/70" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Knowledge & Local */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Guides & Locations</span>
            </h4>
            <ul className="space-y-2 text-sm text-[#C8B8B0]">
              {knowledgeLinks.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => onNavigate(buildLocalizedPath(item.path, locale))}
                    className="hover:text-[#F5E6AB] transition-colors flex items-center gap-1.5 text-left py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]/70" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Call Box */}
          <div className="bg-[#400910] p-6 rounded-xl border border-[#7A1926]/80 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
                Personalized Jyotish Guidance
              </div>
              <h4 className="text-lg font-bold text-white mb-2 font-heading">
                Speak with Sri Krishna Jyotish
              </h4>
              <p className="text-xs text-[#D5C2BA] leading-relaxed mb-4">
                Have an urgent decision or upcoming milestone? Call to check consultation availability.
              </p>
            </div>

            <div>
              <a
                href="tel:8885288817"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-sm tracking-wide transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>88852 88817</span>
              </a>
              <div className="text-center text-[11px] text-[#A69389] mt-2">
                Click to call directly • Kurnool, AP
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Ethical Disclaimer (Section 36 & 55) */}
        <div className="py-6 border-b border-white/10 text-xs text-[#B8A69E] leading-relaxed">
          <div className="flex items-start gap-2.5 max-w-4xl mx-auto text-center justify-center">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 hidden sm:block" />
            <p>
              <strong className="text-[#E6D8D0]">Astrology Disclaimer:</strong> Astrology is a traditional belief and interpretive practice. Astrology consultations are intended for personal, cultural and spiritual guidance and should not replace qualified medical, psychological, legal, financial or other professional advice. Specific outcomes cannot be guaranteed.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A69389] gap-4">
          <div>
            © {new Date().getFullYear()} <strong className="text-white font-medium">Sri Gayathri Astrology</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate(buildLocalizedPath('/privacy-policy', locale))}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
            <button 
              onClick={() => onNavigate(buildLocalizedPath('/terms-disclaimer', locale))}
              className="hover:text-white transition-colors"
            >
              Terms & Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
