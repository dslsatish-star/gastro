import React from 'react';
import { PhoneCall, MapPin, CheckCircle2, ShieldCheck, HeartHandshake, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DiyaIcon, GoldDivider } from '../components/VedicDecorativeElements';
import { CallToActionBanner } from '../components/CallToActionBanner';

import { Locale } from "../data/i18n";

interface AboutPageProps {
  locale?: Locale;
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, locale = "en" as Locale }) => {
  return (
    <div>
      <SEOHead locale={locale}
        title="About Sri Krishna Jyotish | Sri Gayathri Astrology | 88852 88817"
        description="Learn about Sri Gayathri Astrology and Sri Krishna Jyotish in Kurnool. Traditional Vedic astrology consultation grounded in clarity, ethics, and classical principles."
        canonicalPath="/about"
        schemaType="AboutPage"
      />

      <Breadcrumbs items={[{ label: 'About Sri Gayathri Astrology' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FAF5EC] via-[#FDFBF7] to-[#FAF7F0] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/8 border border-[#58111A]/15 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-4">
            <DiyaIcon className="w-4 h-4" />
            <span>Sri Gayathri Astrology • Kurnool</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#221F1F] font-heading mb-6 leading-tight">
            About Sri Krishna Jyotish
          </h1>

          <p className="text-base sm:text-xl text-[#524B4B] leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            Providing personalized traditional Vedic astrology guidance in Kurnool, Andhra Pradesh for individuals, couples, and families navigating important life choices.
          </p>

          <a
            href="tel:8885288817"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-base shadow-md transition-all border border-[#7A1926]"
          >
            <PhoneCall className="w-5 h-5 text-[#F5E6AB]" />
            <span>Call 88852 88817</span>
          </a>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-12">
          
          {/* Section 1: Client First Philosophy */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E8DFC9] shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mb-4">
              Traditional Guidance Grounded in Client Needs
            </h2>
            <div className="space-y-4 text-base text-[#524B4B] leading-relaxed">
              <p>
                <strong>Sri Gayathri Astrology</strong> was established with a singular focus: to offer authentic, respectful, and clear Vedic astrology consultation to clients seeking guidance about significant chapters of their lives.
              </p>
              <p>
                Too often, individuals searching for astrological consultation encounter either overly technical academic language or sensationalized fear-based predictions. <strong>Sri Krishna Jyotish</strong> believes that genuine Jyotish Shastra should bring clarity, composure, and self-understanding.
              </p>
              <p>
                Every consultation begins with your specific question—whether that involves marriage timing, Kundali matching, career decisions, business timing, family transitions, or understanding your birth chart.
              </p>
            </div>
          </div>

          {/* Section 2: Core Principles */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] font-heading mb-3">
                Our Consultation Principles
              </h2>
              <p className="text-sm sm:text-base text-[#5C5555]">
                What you can expect when you consult Sri Krishna Jyotish:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-[#FFFDF9] border border-[#E8DFC9]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF4E8] flex items-center justify-center text-[#58111A]">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#221F1F]">No Fear-Based Marketing</h3>
                </div>
                <p className="text-sm text-[#5C5555] leading-relaxed">
                  We strictly reject doom-mongering or using fear around astrological combinations. Planetary configurations are explained in their true context with balance.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FFFDF9] border border-[#E8DFC9]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF4E8] flex items-center justify-center text-[#58111A]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#221F1F]">No Unrealistic Guarantees</h3>
                </div>
                <p className="text-sm text-[#5C5555] leading-relaxed">
                  We believe in honesty. Astrology provides guidance, timing trends, and dispositional insights—it does not claim to replace personal responsibility or professional advice.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FFFDF9] border border-[#E8DFC9]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF4E8] flex items-center justify-center text-[#58111A]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#221F1F]">Authentic Vedic Shastra</h3>
                </div>
                <p className="text-sm text-[#5C5555] leading-relaxed">
                  Interpretation relies on classical Jyotish foundations: accurate astronomical calculations (Panchanga), Lagna, Rashi, Bhava lords, Dasha systems, and transits.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#FFFDF9] border border-[#E8DFC9]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FAF4E8] flex items-center justify-center text-[#58111A]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#221F1F]">Complete Confidentiality</h3>
                </div>
                <p className="text-sm text-[#5C5555] leading-relaxed">
                  Your birth information, relationship discussions, and personal life questions are kept with the utmost privacy and professional respect.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Location Info */}
          <div className="bg-[#FAF5EC] rounded-2xl p-8 border border-[#E8DFC9] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-bold text-[#58111A] uppercase tracking-wider mb-1">
                Consultation Location
              </div>
              <h3 className="text-xl font-bold text-[#221F1F] font-heading mb-2">
                Based in Kurnool, Andhra Pradesh
              </h3>
              <p className="text-sm text-[#5C5555]">
                Serving clients across Kurnool district, Andhra Pradesh, and through direct phone consultations across India.
              </p>
            </div>
            <a
              href="tel:8885288817"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-sm shrink-0 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-[#F5E6AB]" />
              <span>Call 88852 88817</span>
            </a>
          </div>

        </div>
      </section>

      <CallToActionBanner
        headline="Ready to Discuss Your Questions?"
        supportingText="Speak directly with Sri Krishna Jyotish to arrange your consultation."
        onNavigateServices={() => onNavigate('/astrology-services')}
      />
    </div>
  );
};
