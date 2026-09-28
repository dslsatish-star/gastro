import React from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { guideArticles } from '../data/guidesData';
import { DiyaIcon } from '../components/VedicDecorativeElements';
import { CallToActionBanner } from '../components/CallToActionBanner';
import { navagrahas, rashis, nakshatras } from '../data/knowledgeData';

import { Locale, buildLocalizedPath } from "../data/i18n";

interface GuidesPageProps {
  locale?: Locale;
  onNavigate: (path: string) => void;
}

export const GuidesPage: React.FC<GuidesPageProps> = ({ onNavigate, locale = "en" as Locale }) => {
  return (
    <div>
      <SEOHead locale={locale}
        title="Vedic Astrology Guides | Sri Gayathri Astrology | 88852 88817"
        description="Educational guides by Sri Gayathri Astrology in Kurnool. Understand Janma Kundali, Nakshatras, Lagna vs Rashi, Kundali Matching, and Muhurtham in plain language."
        canonicalPath="/guides"
        schemaType="WebSite"
      />

      <Breadcrumbs items={[{ label: 'Vedic Astrology Guides' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FAF5EC] via-[#FDFBF7] to-[#FAF7F0] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/8 border border-[#58111A]/15 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-4">
            <DiyaIcon className="w-4 h-4" />
            <span>Client-First Knowledge</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#221F1F] font-heading mb-6 leading-tight">
            Vedic Astrology Guides & Concepts
          </h1>

          <p className="text-base sm:text-xl text-[#524B4B] leading-relaxed max-w-3xl mx-auto mb-4 font-normal">
            Clear, client-friendly explanations of core Jyotish concepts—written to inform rather than confuse.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideArticles.map((article) => (
            <div
              key={article.slug}
              onClick={() => onNavigate(`/guides/${article.slug}`)}
              className="bg-white rounded-2xl p-7 border border-[#E8DFC9] hover:border-[#D4AF37] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#8C7A58] mb-3">
                  <span className="font-bold uppercase tracking-wider">{article.category}</span>
                  <span className="flex items-center gap-1 text-[#665E5E]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-[#221F1F] font-heading mb-3 group-hover:text-[#58111A] transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-sm text-[#554E4E] leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0E8D8] flex items-center justify-between text-xs font-bold text-[#58111A]">
                <span>Read Full Guide</span>
                <ChevronRight className="w-4 h-4 text-[#C59B27] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Knowledge Sections */}
      <section className="py-16 bg-[#FAF7F0] border-y border-[#E8DFC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navagraha */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] mb-6 font-heading text-center">Navagraha: The Nine Celestial Influences</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {navagrahas.map(p => (
                <div key={p.name} className="p-6 bg-white rounded-xl border border-[#E8DFC9]">
                  <h3 className="font-bold text-[#58111A] text-lg mb-1">{p.name} ({p.title})</h3>
                  <p className="text-sm text-[#5C5555]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rashis */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] mb-6 font-heading text-center">The 12 Rashis (Zodiac Signs)</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {rashis.map(r => (
                <div key={r.name} className="px-5 py-3 bg-white rounded-lg border border-[#E8DFC9] text-sm font-semibold text-[#332E2E]">
                  {r.name} • {r.title}
                </div>
              ))}
            </div>
          </div>

          {/* Nakshatras */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#221F1F] mb-6 font-heading text-center">The 27 Nakshatras (Lunar Mansions)</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {nakshatras.map(n => (
                <span key={n} className="px-3 py-1.5 bg-[#58111A]/5 text-[#58111A] border border-[#58111A]/10 rounded-full text-xs font-bold">
                  {n}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CallToActionBanner
        headline="Have Questions on Your Own Chart?"
        supportingText="Speak with Sri Krishna Jyotish for a personalized reading tailored to your birth details."
        onNavigateServices={() => onNavigate(buildLocalizedPath('/services', locale))}
      />
    </div>
  );
};
