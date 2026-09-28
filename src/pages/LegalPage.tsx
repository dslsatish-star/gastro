import React from 'react';
import { ShieldCheck, PhoneCall, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

import { Locale } from "../data/i18n";

interface LegalPageProps {
  locale?: Locale;
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate, locale = "en" as Locale }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div>
      <SEOHead locale={locale}
        title={isPrivacy ? "Privacy Policy | Sri Gayathri Astrology | 88852 88817" : "Terms & Disclaimer | Sri Gayathri Astrology | 88852 88817"}
        description="Important legal, privacy, and professional disclaimer information for Sri Gayathri Astrology in Kurnool by Sri Krishna Jyotish."
        canonicalPath={isPrivacy ? "/privacy-policy" : "/terms-disclaimer"}
      />

      <Breadcrumbs items={[{ label: isPrivacy ? 'Privacy Policy' : 'Terms & Professional Disclaimer' }]} />

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E8DFC9] shadow-xs space-y-8 text-sm sm:text-base text-[#4A4242] leading-relaxed">
          
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#221F1F] font-heading mb-4">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Service & Professional Disclaimer'}
            </h1>
            <div className="text-xs text-[#8C827A]">
              Sri Gayathri Astrology • Sri Krishna Jyotish • Kurnool, Andhra Pradesh
            </div>
          </div>

          {/* Mandatory Professional Disclaimer Highlight */}
          <div className="p-6 rounded-xl bg-[#FAF5EC] border border-[#D4AF37] text-[#2D070D]">
            <div className="flex items-center gap-2 font-bold text-base mb-2">
              <ShieldCheck className="w-5 h-5 text-[#58111A]" />
              <span>Professional Disclaimer</span>
            </div>
            <p className="text-sm font-medium leading-relaxed">
              Astrology is a traditional belief and interpretive practice. Consultations are intended for spiritual, cultural and personal guidance and should not replace qualified medical, psychological, legal, financial or other professional advice.
            </p>
          </div>

          {isPrivacy ? (
            <div className="space-y-6">
              <section>
                <h2 className="text-lg font-bold text-[#221F1F] mb-2">1. Client Confidentiality</h2>
                <p>
                  Sri Gayathri Astrology respects your privacy. Any personal information provided during consultations—including date of birth, birth time, place of birth, family names, relationship questions, or career notes—is treated with strict confidentiality.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#221F1F] mb-2">2. Information Collection</h2>
                <p>
                  We only receive birth details and contact information that you voluntarily share via telephone (88852 88817), WhatsApp, or inquiry forms for the explicit purpose of conducting your astrological consultation. We do not sell, rent, or share client details with third parties.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#221F1F] mb-2">3. Direct Contact</h2>
                <p>
                  If you have questions regarding data privacy, you may contact Sri Krishna Jyotish directly at 88852 88817.
                </p>
              </section>
            </div>
          ) : (
            <div className="space-y-6">
              <section>
                <h2 className="text-lg font-bold text-[#221F1F] mb-2">1. Interpretive Nature & No Guaranteed Outcomes</h2>
                <p>
                  Vedic Jyotish Shastra provides interpretive guidance based on traditional principles. Sri Gayathri Astrology does not claim or promise guaranteed marriage, guaranteed relationship outcomes, guaranteed employment, guaranteed wealth, or guaranteed medical cures.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#221F1F] mb-2">2. Ethical Practice & No Fear Marketing</h2>
                <p>
                  We are committed to ethical Jyotish consultations. We do not utilize fear-based marketing or make distressing proclamations regarding inevitable catastrophes. Consultations are designed to provide constructive perspective, encouragement, and traditional cultural alignment.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#221F1F] mb-2">3. Non-Substitution for Professional Services</h2>
                <p>
                  Consultation insights do not substitute for certified legal counsel, medical diagnoses, psychological therapy, or licensed financial planning. Clients are urged to exercise independent judgment and consult qualified professionals for critical medical, legal, and investment decisions.
                </p>
              </section>
            </div>
          )}

          <div className="pt-6 border-t border-[#E8DFC9] flex items-center justify-between">
            <button
              onClick={() => onNavigate('/')}
              className="text-xs font-bold text-[#58111A] hover:underline"
            >
              ← Return to Home
            </button>
            <a
              href="tel:8885288817"
              className="text-xs font-bold text-[#58111A] hover:underline"
            >
              Call 88852 88817
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};
