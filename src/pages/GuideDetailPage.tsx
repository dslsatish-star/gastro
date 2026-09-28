import React from 'react';
import { Clock, PhoneCall, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { GuideArticle } from '../types';
import { servicesData } from '../data/servicesData';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DiyaIcon } from '../components/VedicDecorativeElements';
import { CallToActionBanner } from '../components/CallToActionBanner';

interface GuideDetailPageProps {
  article: GuideArticle;
  onNavigate: (path: string) => void;
}

export const GuideDetailPage: React.FC<GuideDetailPageProps> = ({ article, onNavigate }) => {
  return (
    <div>
      <SEOHead
        title={`${article.title} | Sri Krishna Jyotish | 88852 88817`}
        description={`${article.summary} Read traditional Vedic insights from Sri Gayathri Astrology in Kurnool.`}
        canonicalPath={`/guides/${article.slug}`}
        schemaType="Article"
      />

      <Breadcrumbs
        items={[
          { label: 'Guides', href: '/guides', onClick: () => onNavigate('/guides') },
          { label: article.title }
        ]}
      />

      {/* Article Header */}
      <section className="bg-gradient-to-b from-[#FAF5EC] via-[#FDFBF7] to-[#FAF7F0] py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/8 border border-[#58111A]/15 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{article.category}</span>
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
            <span className="text-[#665E5E]">{article.readTime}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#221F1F] font-heading mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#554E4E] leading-relaxed max-w-2xl mx-auto">
            {article.summary}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E8DFC9] shadow-xs space-y-6 text-base sm:text-lg text-[#3D3636] leading-relaxed">
          {article.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Related Services */}
        {article.relatedServices.length > 0 && (
          <div className="mt-12 bg-[#FAF7F0] rounded-2xl p-6 sm:p-8 border border-[#E2D6BC]">
            <h2 className="text-lg sm:text-xl font-bold text-[#221F1F] font-heading mb-4">
              Related Consultations by Sri Krishna Jyotish
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {article.relatedServices.map((slug) => {
                const srv = servicesData[slug];
                if (!srv) return null;
                return (
                  <button
                    key={srv.id}
                    onClick={() => onNavigate(`/${srv.slug}`)}
                    className="p-4 rounded-xl bg-white hover:bg-[#FAF4E8] border border-[#DDD3C2] text-left transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-sm font-bold text-[#221F1F] group-hover:text-[#58111A]">
                        {srv.title}
                      </div>
                      <div className="text-xs text-[#665E5E] line-clamp-1">{srv.shortTag}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#C59B27] group-hover:translate-x-1 transition-transform" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </section>

      <CallToActionBanner
        headline="Looking for Personalized Guidance on Your Chart?"
        supportingText="Speak with Sri Krishna Jyotish to discuss how these principles apply to your birth details."
        onNavigateServices={() => onNavigate('/astrology-services')}
      />
    </div>
  );
};
