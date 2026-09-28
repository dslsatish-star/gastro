import React from 'react';
import { PhoneCall, Calendar, Sparkles, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ConsultationProcessSection } from '../components/ConsultationProcessSection';
import { DiyaIcon } from '../components/VedicDecorativeElements';
import { Locale, translations, buildLocalizedPath } from '../data/i18n';

interface AstrologyConsultationPageProps {
  onNavigate: (path: string) => void;
  locale?: Locale;
}

export const AstrologyConsultationPage: React.FC<AstrologyConsultationPageProps> = ({ onNavigate, locale = 'en' }) => {
  const t = translations[locale] || translations.en;

  return (
    <div>
      <SEOHead
        title="Vedic Astrology Consultation | Sri Krishna Jyotish | 88852 88817"
        description="Traditional Vedic astrology consultation with Sri Krishna Jyotish. Learn how a birth chart is used, what information is required, and how to contact us."
        canonicalPath={buildLocalizedPath('/astrology-consultation', locale)}
        schemaType="Service"
        locale={locale}
      />

      <Breadcrumbs
        items={[
          { label: 'Astrology Consultation', href: buildLocalizedPath('/astrology-consultation', locale) }
        ]}
      />

      <section className="relative bg-gradient-to-b from-[#FDFBF7] to-[#FAF5EC] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#58111A]/8 border border-[#58111A]/20 text-[#58111A] text-xs font-bold uppercase tracking-widest mb-6">
            <DiyaIcon className="w-4 h-4" />
            <span>Sri Krishna Jyotish</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#221F1F] font-heading mb-6 leading-tight">
            Vedic Astrology Consultation with Sri Krishna Jyotish
          </h1>

          <p className="text-base sm:text-xl text-[#524B4B] leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            A consultation is a traditional, interpretive conversation where your Janma Kundali (birth chart) is examined to provide clarity on life's path, timing, and important decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8885288817"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#58111A] text-white font-bold text-lg shadow-md hover:bg-[#721C24] transition-all"
            >
              <PhoneCall className="w-5 h-5 text-[#F5E6AB]" />
              <span>Call 88852 88817</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-stone max-w-none text-[#4A4242]">
            <h2 className="text-2xl font-bold text-[#221F1F] mb-4">What is a Consultation?</h2>
            <p className="mb-6">
              In the Vedic tradition, a consultation (Jyotish Paramarsha) is more than a prediction. It is an instrument for self-knowledge and alignment with natural cosmic rhythms. We use the positions of the Grahas (planets) at the time of your birth to understand inherent traits, current life phases (Dashas), and favorable timing for future actions.
            </p>

            <h2 className="text-2xl font-bold text-[#221F1F] mb-4">How a Birth Chart is Used Traditionally</h2>
            <ul className="list-disc pl-5 mb-8 space-y-2">
              <li><strong>Lagna (Ascendant):</strong> To understand your outer persona and general health.</li>
              <li><strong>Rashi (Moon Sign):</strong> To evaluate mental disposition and emotional needs.</li>
              <li><strong>Dashas (Planetary Periods):</strong> To identify the current chapters of your life.</li>
              <li><strong>Bhavas (Houses):</strong> To analyze specific areas like marriage, career, and family.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#221F1F] mb-4">What Information is Required?</h2>
            <div className="bg-[#FAF7F0] p-6 rounded-xl border border-[#EDE4D4] mb-8">
              <p className="font-bold text-[#58111A] mb-3">To cast an accurate Janma Kundali, please prepare:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Exact Date of Birth</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Exact Time of Birth (with AM/PM)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Place of Birth (City/Town, District, State)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[#221F1F] mb-4">What You Can Discuss</h2>
            <p className="mb-6">
              Clients consult Sri Krishna Jyotish for a variety of concerns, including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Marriage Timing & Compatibility', 'Career Changes & Vocational Alignment', 'Business Ventures & Expansion', 'Academic Path & Educational Focus', 'Family Harmony & Property Transitions', 'Personal Well-being & General Horoscope'].map(item => (
                <div key={item} className="flex items-center gap-2 p-3 rounded-lg border border-[#E8DFC9] bg-[#FFFDF9]">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-[#2D070D] text-white text-center">
              <h3 className="text-xl font-bold mb-4">Schedule Your Consultation</h3>
              <p className="text-[#E6D5D5] mb-6">Call directly to discuss your questions or find a suitable time for a detailed review.</p>
              <a href="tel:8885288817" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#D4AF37] text-[#2D070D] font-bold text-lg">
                <PhoneCall className="w-5 h-5" />
                <span>88852 88817</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <ConsultationProcessSection />

      <section className="py-16 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs text-[#7A6F6F] italic">
            Disclaimer: Astrology is a traditional belief and interpretive practice. Specific outcomes cannot be guaranteed. Consultations should not replace qualified professional advice.
          </p>
        </div>
      </section>
    </div>
  );
};
