import React from 'react';
import { 
  PhoneCall, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  HeartHandshake, 
  Compass, 
  Briefcase, 
  Building2, 
  Clock, 
  Hash, 
  ShieldCheck,
  UserCheck,
  HelpCircle,
  BookOpen,
  Calendar,
  MessageCircle,
  Baby,
  GraduationCap
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConcernSelector } from '../components/ConcernSelector';
import { ConsultationProcessSection } from '../components/ConsultationProcessSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { RegionalReachSection } from '../components/RegionalReachSection';
import { APTelanganaLocationDirectory } from '../components/APTelanganaLocationDirectory';
import { DiyaIcon, GoldDivider, KundaliChartIcon } from '../components/VedicDecorativeElements';
import { masterFAQs } from '../data/faqData';
import { servicesData } from '../data/servicesData';
import { guideArticles } from '../data/guidesData';
import { Locale, translations, buildLocalizedPath } from '../data/i18n';
import { getWhatsAppUrl, DISPLAY_PHONE } from '../utils/whatsapp';
import { TwoWayConsultationSelector } from '../components/TwoWayConsultationSelector';

interface HomePageProps {
  onNavigate: (path: string) => void;
  locale?: Locale;
  activeServiceSlug?: string;
  currentLocationPath?: string;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate, 
  locale = 'en',
  activeServiceSlug,
  currentLocationPath 
}) => {
  const t = translations[locale] || translations.en;

  const homepageFAQs = masterFAQs.slice(0, 8);
  const canonical = locale === 'en' ? '/' : `/${locale}/`;

  // List of all 17 services adhering to Master Prompt Part 5
  const masterServicesList = [
    {
      key: 'vedic-astrology',
      title: 'Vedic Astrology Consultation',
      who: 'Individuals seeking deep life-direction and root-level Jyotish perspective',
      need: 'Date, exact time, and city of birth'
    },
    {
      key: 'horoscope-consultation',
      title: 'Horoscope Consultation',
      who: 'Anyone wishing to analyze their full Janma Kundali across major life areas',
      need: 'Exact birth date, accurate time to the minute, and birth location'
    },
    {
      key: 'janma-kundali',
      title: 'Janma Kundali Consultation',
      who: 'People needing chart casting, Lagna, Rashi, and house analysis',
      need: 'Birth date, exact birth time, and birth place'
    },
    {
      key: 'marriage-astrology',
      title: 'Marriage Astrology',
      who: 'Families and individuals navigating marriage timing and prospective alliances',
      need: 'Birth details for bride and/or groom'
    },
    {
      key: 'kundali-matching',
      title: 'Kundali Matching',
      who: 'Prospective brides, grooms, and parents evaluating marriage proposals',
      need: 'Date, time, and birth places for both prospective partners'
    },
    {
      key: 'career-astrology',
      title: 'Career Astrology',
      who: 'Professionals contemplating job change, promotion timing, or career path',
      need: 'Birth details and current professional questions'
    },
    {
      key: 'business-astrology',
      title: 'Business Astrology',
      who: 'Entrepreneurs, partners, and business owners evaluating ventures and timing',
      need: 'Birth details of founders and nature of business'
    },
    {
      key: 'education-astrology',
      title: 'Education Astrology',
      who: 'Students and parents choosing academic fields and competitive exam timing',
      need: 'Student birth details and academic questions'
    },
    {
      key: 'relationship-astrology',
      title: 'Relationship Astrology',
      who: 'Couples and individuals seeking emotional alignment and communication clarity',
      need: 'Birth data for both individuals'
    },
    {
      key: 'family-astrology',
      title: 'Family Astrology',
      who: 'Families seeking domestic harmony, property timing, and milestone alignment',
      need: 'Family members’ birth dates and key questions'
    },
    {
      key: 'child-horoscope',
      title: 'Child Horoscope Consultation',
      who: 'Parents welcoming newborns seeking Namakarana naming syllables and chart casting',
      need: 'Exact date, minute, and hospital/city of birth'
    },
    {
      key: 'muhurtham',
      title: 'Muhurtham Consultation',
      who: 'Families planning weddings, Griha Pravesham, and auspicious inaugurations',
      need: 'Janma Nakshatras of key participants and target date range'
    },
    {
      key: 'numerology',
      title: 'Numerology',
      who: 'Individuals seeking name spelling alignment, baby name selection, or brand vibration',
      need: 'Full birth date and current name spelling'
    },
    {
      key: 'dosha-analysis',
      title: 'Dosha Analysis',
      who: 'Anyone seeking calm, scripture-aligned review of Kuja, Rahu, or Ketu factors',
      need: 'Birth details for comprehensive chart analysis'
    },
    {
      key: 'dasha-analysis',
      title: 'Dasha Analysis',
      who: 'People wanting to understand their active Mahadasha, Antardasha, and life chapter',
      need: 'Exact birth data to calculate accurate Vimshottari timelines'
    },
    {
      key: 'gochara',
      title: 'Gochara / Transit Analysis',
      who: 'Individuals evaluating current Jupiter, Saturn (Sade Sati), or Rahu-Ketu transits',
      need: 'Birth Moon sign (Rashi) and natal horoscope'
    },
    {
      key: 'prashna',
      title: 'Prashna / Horary Astrology',
      who: 'Inquirers with an urgent specific question or unverified birth times',
      need: 'Specific question stated clearly at the time of inquiry'
    }
  ];

  return (
    <div>
      {/* Homepage SEO - Rule: Title MUST NOT contain phone number */}
      <SEOHead
        title="Vedic Astrology Consultant in Andhra Pradesh & Telangana | Sri Gayathri Astrology"
        description="Sri Gayathri Astrology by Sri Krishna Jyotish offers traditional Vedic astrology consultations across Andhra Pradesh and Telangana for marriage, career, business, horoscope and Muhurtham."
        canonicalPath={canonical}
        schemaType="WebSite"
        locale={locale}
      />

      {/* HOMEPAGE HERO (Master Prompt Parts 3 & 4) */}
      <section className="relative bg-gradient-to-b from-[#FDFBF7] via-[#FAF5EC] to-[#F7EFE2] pt-12 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9] overflow-hidden">
        
        {/* Subtle decorative Vedic accents */}
        <div className="absolute left-1/2 -top-16 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-8 right-8 opacity-10 hidden lg:block pointer-events-none">
          <KundaliChartIcon className="w-48 h-48" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#58111A]/8 border border-[#58111A]/20 text-[#58111A] text-xs font-bold tracking-widest uppercase mb-6 shadow-2xs">
            <DiyaIcon className="w-4 h-4" />
            <span>Traditional Vedic Astrology Consultation</span>
          </div>

          {/* H1 Headline (Part 3) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#221F1F] tracking-tight leading-[1.15] mb-6 font-heading">
            Vedic Astrology Consultant in Andhra Pradesh & Telangana
          </h1>

          {/* Supporting Headline (Part 3) */}
          <div className="text-lg sm:text-2xl font-bold text-[#58111A] mb-4">
            Traditional Vedic Astrology Consultation by Sri Krishna Jyotish
          </div>

          {/* Supporting Text (Part 4) */}
          <p className="text-base sm:text-xl text-[#524B4B] leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            Traditional Vedic Astrology consultation for personal, marriage, career, business, horoscope, Kundali and other relevant Jyotish questions.
          </p>

          {/* Call-to-action buttons (Part 4) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {/* Primary CTA */}
            <a
              href="tel:8885288817"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-lg shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 border border-[#7A1926]"
            >
              <PhoneCall className="w-5 h-5 text-[#F5E6AB]" />
              <span>Call 88852 88817</span>
            </a>

            {/* Secondary CTA */}
            <button
              onClick={() => onNavigate(buildLocalizedPath('/contact', locale))}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-base shadow-md transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>Request a Consultation</span>
            </button>

            {/* Third CTA */}
            <button
              onClick={() => onNavigate(buildLocalizedPath('/locations', locale))}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-[#FAF4E8] text-[#332E2E] font-semibold text-base border border-[#DDD3C2] hover:border-[#D4AF37] shadow-2xs transition-all"
            >
              <MapPin className="w-4 h-4 text-[#58111A]" />
              <span>Find Your Location</span>
            </button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#7A6F6F] font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.home.trust1}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.home.trust2}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C59B27]" />
              <span>{t.home.trust3}</span>
            </span>
          </div>
        </div>
      </section>

      {/* TWO-WAY STATEFUL SELECTOR (Location + Service Independent Variables) */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto -mt-10 mb-8 relative z-20">
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

      {/* AEO / AI SEARCH ANSWER BLOCK (Part 27) */}
      <section className="py-12 bg-white border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-7 sm:p-9 rounded-2xl bg-[#FAF7F0] border-2 border-[#D4AF37]/50 shadow-xs">
            <div className="flex items-center gap-2.5 text-xs font-bold text-[#58111A] uppercase tracking-wider mb-2">
              <DiyaIcon className="w-4 h-4" />
              <span>About Sri Krishna Jyotish</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mb-4">
              Traditional Vedic Astrology for Andhra Pradesh & Telangana
            </h2>

            <p className="text-base sm:text-lg text-[#3D3636] leading-relaxed mb-6">
              Sri Krishna Jyotish provides personalized traditional Vedic astrology consultations for clients across Andhra Pradesh and Telangana. Headquartered in Kurnool, Andhra Pradesh, Sri Gayathri Astrology conducts direct telephone consultations and arranged in-person sessions with authentic Vedic principles, clear explanations, and respectful guidance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8DFC9] text-sm">
              <div className="bg-white p-3.5 rounded-xl border border-[#EDE4D4]">
                <div className="text-xs font-bold text-[#8C7A58] uppercase">Base Location</div>
                <div className="font-semibold text-[#221F1F] mt-0.5">Kurnool, Andhra Pradesh</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-[#EDE4D4]">
                <div className="text-xs font-bold text-[#8C7A58] uppercase">Consultant</div>
                <div className="font-semibold text-[#221F1F] mt-0.5">Sri Krishna Jyotish</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-[#EDE4D4]">
                <div className="text-xs font-bold text-[#8C7A58] uppercase">Direct Phone</div>
                <a href="tel:8885288817" className="font-bold text-[#58111A] hover:underline mt-0.5 block">
                  88852 88817
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE CONSULTATION SERVICES (Master Prompt Part 5) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/5 border border-[#58111A]/15 text-[#58111A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Consultation Disciplines</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#221F1F] mb-4 font-heading">
            Astrology Consultation Services
          </h2>
          <p className="text-base sm:text-lg text-[#5C5555]">
            Explore each specialized consultation offering to prepare your birth details and understand how Sri Krishna Jyotish can assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {masterServicesList.map((item, idx) => {
            const service = servicesData[item.key] || servicesData['horoscope'];
            return (
              <div
                key={idx}
                className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#E8DFC9] hover:border-[#D4AF37] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#221F1F] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5555] leading-relaxed mb-4">
                    {service?.summary || 'Traditional Vedic Jyotish consultation tailored to your specific questions.'}
                  </p>

                  <div className="space-y-2 mb-5 text-xs text-[#524B4B] bg-[#FAF7F0] p-3 rounded-xl border border-[#EDE4D4]">
                    <div>
                      <strong className="text-[#58111A]">Who May Seek: </strong>
                      <span>{item.who}</span>
                    </div>
                    <div>
                      <strong className="text-[#8C7A58]">Information Required: </strong>
                      <span>{item.need}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F0E8D8] flex items-center justify-between text-xs font-bold">
                  <button
                    onClick={() => onNavigate(buildLocalizedPath(`/services/${service?.slug || item.key}`, locale))}
                    className="text-[#58111A] hover:underline flex items-center gap-1"
                  >
                    <span>Full Service Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href="tel:8885288817"
                    className="text-[#D4AF37] hover:text-[#58111A] flex items-center gap-1 font-bold"
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

      {/* WHAT CAN YOU CONSULT AN ASTROLOGER ABOUT? (Master Prompt Part 6) */}
      <ConcernSelector 
        onNavigate={(slug) => {
          if (currentLocationPath) {
            let clean = currentLocationPath.trim();
            while (clean.startsWith('/locations')) clean = clean.replace(/^\/locations/, '');
            if (!clean.startsWith('/')) clean = '/' + clean;
            onNavigate(buildLocalizedPath(`/locations${clean}?service=${slug}`, locale));
          } else {
            onNavigate(buildLocalizedPath(`/${slug}`, locale));
          }
        }} 
      />

      {/* HOW ASTROLOGY CONSULTATION WORKS (Master Prompt Part 7) */}
      <ConsultationProcessSection />

      {/* AP + TELANGANA LOCATION DIRECTORY (Master Prompt Part 8) */}
      <APTelanganaLocationDirectory 
        onNavigate={onNavigate} 
        locale={locale} 
        activeServiceSlug={activeServiceSlug} 
      />

      {/* DEDICATED REGIONAL REACH (AP & TELANGANA CONTACT DESKS) */}
      <RegionalReachSection 
        locale={locale} 
        onNavigateKurnool={() => onNavigate(buildLocalizedPath('/locations/andhra-pradesh/kurnool', locale))} 
      />

      {/* EDUCATIONAL ASTROLOGY GUIDES PREVIEW (Master Prompt Part 24) */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E8DFC9] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/5 border border-[#58111A]/15 text-[#58111A] text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Educational Knowledge</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mb-3">
              Traditional Vedic Astrology Guides
            </h2>
            <p className="text-sm sm:text-base text-[#665E5E]">
              Explore authentic traditional concepts—from Janma Kundali and Nakshatras to Dashas and Muhurtham.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guideArticles.slice(0, 8).map(guide => (
              <div
                key={guide.slug}
                onClick={() => onNavigate(buildLocalizedPath(`/guides/${guide.slug}`, locale))}
                className="p-5 rounded-2xl bg-[#FAF7F0] border border-[#E8DFC9] hover:border-[#D4AF37] cursor-pointer flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="text-xs font-bold text-[#8C7A58] uppercase mb-1.5">{guide.category}</div>
                  <h3 className="font-bold text-[#221F1F] text-base group-hover:text-[#58111A] transition-colors mb-2 font-heading">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[#554E4E] leading-relaxed line-clamp-3 mb-4">
                    {guide.summary}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-[#EDE4D4] text-xs font-semibold text-[#58111A]">
                  <span>Read Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate(buildLocalizedPath('/guides', locale))}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FAF4E8] hover:bg-[#F2E8D2] text-[#58111A] font-bold text-sm border border-[#E3D4B6] transition-colors"
            >
              <span>Explore All Astrology Guides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SRI GAYATHRI ASTROLOGY */}
      <WhyChooseUs onNavigateContact={() => onNavigate(buildLocalizedPath('/contact', locale))} />

      {/* HOMEPAGE FAQs */}
      <section className="py-16 sm:py-20 bg-[#FAF7F0] px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#665E5E]">
              Clear answers to common questions about Vedic astrology consultation with Sri Krishna Jyotish.
            </p>
          </div>

          <div className="space-y-4">
            {homepageFAQs.map((faq) => (
              <div
                key={faq.id}
                className="p-6 rounded-xl bg-white border border-[#E8DFC9] hover:border-[#D4AF37] transition-colors shadow-2xs"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#221F1F] mb-3 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#58111A] mt-2 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm sm:text-base text-[#524B4B] leading-relaxed pl-4 border-l-2 border-[#D4AF37]/50">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate(buildLocalizedPath('/faq', locale))}
              className="text-sm font-bold text-[#58111A] hover:underline inline-flex items-center gap-1"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Traditional Astrology Disclaimer (Part 40) */}
      <section className="py-8 px-4 bg-white border-b border-[#E8DFC9] text-center text-xs text-[#7A6F6F]">
        <div className="max-w-4xl mx-auto">
          <p>
            <strong>Astrology Disclaimer:</strong> Astrology is a traditional belief and interpretive practice. Astrology consultations are intended for personal, cultural and spiritual guidance and should not replace qualified medical, psychological, legal, financial or other professional advice. Specific outcomes cannot be guaranteed.
          </p>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <CallToActionBanner
        headline="Looking for Clarity on Important Life Questions?"
        supportingText="Connect with Sri Krishna Jyotish to discuss marriage, career, business, or auspicious Muhurtham across Andhra Pradesh & Telangana."
        onNavigateServices={() => onNavigate(buildLocalizedPath('/services', locale))}
      />
    </div>
  );
};
