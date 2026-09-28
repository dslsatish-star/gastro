import React, { useState } from 'react';
import { PhoneCall, Search, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { masterFAQs } from '../data/faqData';
import { DiyaIcon } from '../components/VedicDecorativeElements';
import { CallToActionBanner } from '../components/CallToActionBanner';

import { Locale } from "../data/i18n";

interface FAQPageProps {
  locale?: Locale;
  onNavigate: (path: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate, locale = "en" as Locale }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General Consultation', 'Marriage & Compatibility', 'Horoscope Basics', 'Auspicious Timing', 'Traditional Jyotish', 'Numerology', 'Location Specific'];

  const filteredFAQs = masterFAQs.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = !searchTerm.trim() || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <SEOHead locale={locale}
        title="Astrology FAQs | Sri Gayathri Astrology | 88852 88817"
        description="Frequently asked questions about Vedic astrology consultations in Kurnool with Sri Krishna Jyotish. Kundali matching, horoscope, birth details, and appointment info."
        canonicalPath="/faq"
        schemaType="FAQPage"
      />

      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FAF5EC] via-[#FDFBF7] to-[#FAF7F0] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/8 border border-[#58111A]/15 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-4">
            <DiyaIcon className="w-4 h-4" />
            <span>Questions & Answers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#221F1F] font-heading mb-6 leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-base sm:text-xl text-[#524B4B] leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            Everything you need to know about preparing for and participating in a traditional Vedic astrology consultation with Sri Krishna Jyotish.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-[#8C827A] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search your question (e.g. birth time, matching, marriage)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#D5C9B8] bg-white text-base text-[#221F1F] shadow-xs focus:outline-none focus:ring-2 focus:ring-[#58111A]"
            />
          </div>
        </div>
      </section>

      {/* Category Pills & FAQ List */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#58111A] text-white'
                  : 'bg-white text-[#554E4E] border border-[#DDD3C2] hover:bg-[#FAF4E8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <details
              key={faq.id}
              className="group bg-white rounded-xl border border-[#E8DFC9] p-6 transition-all open:border-[#D4AF37] open:shadow-xs"
            >
              <summary className="font-bold text-base sm:text-lg text-[#221F1F] cursor-pointer flex items-center justify-between gap-4 list-none group-hover:text-[#58111A] select-none">
                <span>{faq.question}</span>
                <span className="w-6 h-6 rounded-full bg-[#FAF4E8] text-[#58111A] flex items-center justify-center shrink-0 text-sm font-bold group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#F0E8D8] text-sm sm:text-base text-[#554E4E] leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl border border-[#E8DFC9]">
              <HelpCircle className="w-10 h-10 text-[#8C827A] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#221F1F] mb-1">No matches found</h3>
              <p className="text-sm text-[#5C5555] mb-4">Have a specific question not listed here? Call Sri Krishna Jyotish directly.</p>
              <a
                href="tel:8885288817"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#58111A] text-white font-bold text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call 88852 88817</span>
              </a>
            </div>
          )}
        </div>
      </section>

      <CallToActionBanner
        headline="Still Have a Question?"
        supportingText="Speak directly with Sri Krishna Jyotish for clear, personalized answers."
        onNavigateServices={() => onNavigate('/astrology-services')}
      />
    </div>
  );
};
