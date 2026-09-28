import React from 'react';
import { PhoneCall, ArrowRight, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { servicesData } from '../data/servicesData';
import { DiyaIcon } from '../components/VedicDecorativeElements';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { Locale, translations, buildLocalizedPath } from '../data/i18n';
import { TwoWayConsultationSelector } from '../components/TwoWayConsultationSelector';

interface AllServicesPageProps {
  onNavigate: (path: string) => void;
  locale?: Locale;
  currentLocationPath?: string;
  activeServiceSlug?: string;
}

export const AllServicesPage: React.FC<AllServicesPageProps> = ({ 
  onNavigate, 
  locale = 'en',
  currentLocationPath,
  activeServiceSlug 
}) => {
  const t = translations[locale] || translations.en;
  const serviceList = Object.values(servicesData);

  const canonical = locale === 'en' ? '/services' : `/${locale}/services`;

  return (
    <div>
      <SEOHead
        title={locale === 'te'
          ? "జ్యోతిష్య సేవలు | శ్రీ కృష్ణ జ్యోతిష్ | కర్నూలు | 88852 88817"
          : locale === 'hi'
          ? "ज्योतिष सेवाएं | श्री कृष्ण ज्योतिष | कुरनूल | 88852 88817"
          : "Astrology Services in Kurnool | Sri Krishna Jyotish | 88852 88817"}
        description="Explore traditional Vedic astrology services in Kurnool by Sri Krishna Jyotish. Marriage astrology, Kundali matching, horoscope, career, Muhurtham & numerology. Call 88852 88817."
        canonicalPath={canonical}
        schemaType="Service"
      />

      <Breadcrumbs 
        items={[
          { label: t.nav.services }
        ]} 
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FAF5EC] via-[#FDFBF7] to-[#FAF7F0] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/8 border border-[#58111A]/15 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-4">
            <DiyaIcon className="w-4 h-4" />
            <span>Sri Gayathri Astrology • Kurnool</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#221F1F] font-heading mb-6 leading-tight">
            {t.home.popularServicesHeading}
          </h1>

          <p className="text-base sm:text-xl text-[#524B4B] leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            Personalized, client-first Jyotish consultations by <strong className="text-[#221F1F]">Sri Krishna Jyotish</strong> in Kurnool, Andhra Pradesh. Organized around your life decisions and questions.
          </p>

          <a
            href="tel:8885288817"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-base shadow-md transition-all border border-[#7A1926]"
          >
            <PhoneCall className="w-5 h-5 text-[#F5E6AB]" />
            <span>88852 88817</span>
          </a>
        </div>
      </section>

      {/* TWO-WAY STATEFUL SELECTOR (Location + Service Independent Variables) */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto -mt-6 mb-4 relative z-20">
        <TwoWayConsultationSelector
          onNavigate={onNavigate}
          locale={locale}
          currentLocationPath={currentLocationPath}
          activeServiceSlug={activeServiceSlug}
          onLocationChange={(p) => {
            const query = activeServiceSlug ? `?service=${activeServiceSlug}` : '';
            onNavigate(buildLocalizedPath(`/locations${p}${query}`, locale));
          }}
          onServiceChange={(s) => {
            if (currentLocationPath) {
              onNavigate(buildLocalizedPath(`/locations${currentLocationPath}?service=${s}`, locale));
            } else {
              onNavigate(buildLocalizedPath(`/services/${s}`, locale));
            }
          }}
        />
      </div>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service) => {
            const isSelected = activeServiceSlug === service.slug;
            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl p-7 border transition-all flex flex-col justify-between shadow-2xs ${
                  isSelected ? 'border-2 border-[#D4AF37] ring-2 ring-[#D4AF37]/20 bg-[#FAF7F0]' : 'border-[#E8DFC9] hover:border-[#D4AF37] hover:shadow-md'
                }`}
              >
                <div>
                  <span className="text-xs font-bold text-[#8C7A58] uppercase tracking-wider block mb-2">
                    {service.shortTag}
                  </span>
                  <h2 className="text-xl font-bold text-[#221F1F] font-heading mb-3">
                    {service.title}
                  </h2>
                  <p className="text-sm text-[#554E4E] leading-relaxed mb-6">
                    {service.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0E8D8] flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (currentLocationPath) {
                        onNavigate(buildLocalizedPath(`/locations${currentLocationPath}?service=${service.slug}`, locale));
                      } else {
                        onNavigate(buildLocalizedPath(`/${service.slug}`, locale));
                      }
                    }}
                    className="text-xs font-bold text-[#58111A] hover:underline flex items-center gap-1"
                  >
                    <span>{isSelected ? 'Currently Selected' : 'Explore Consultation'}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  </button>
                  <a
                    href="tel:8885288817"
                    className="text-xs font-bold text-[#C59B27] hover:text-[#58111A]"
                  >
                    88852 88817
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CallToActionBanner
        headline="Have Questions About an Upcoming Milestone?"
        supportingText="Speak with Sri Krishna Jyotish to discuss which consultation is right for you."
        onNavigateServices={() => onNavigate(buildLocalizedPath('/services', locale))}
      />
    </div>
  );
};
