import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Heart, 
  Briefcase, 
  Building2, 
  Compass, 
  Home as HomeIcon, 
  GraduationCap, 
  Clock, 
  Hash, 
  ShieldAlert, 
  PhoneCall, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  Search
} from 'lucide-react';
import { clientConcerns, clientQuestionsList } from '../data/concernsData';

interface ConcernSelectorProps {
  onNavigate: (slug: string) => void;
}

export const ConcernSelector: React.FC<ConcernSelectorProps> = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#58111A]" />;
      case 'Heart': return <Heart className="w-6 h-6 text-[#58111A]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#58111A]" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-[#58111A]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#58111A]" />;
      case 'Home': return <HomeIcon className="w-6 h-6 text-[#58111A]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#58111A]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#58111A]" />;
      case 'Hash': return <Hash className="w-6 h-6 text-[#58111A]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-[#58111A]" />;
      default: return <Sparkles className="w-6 h-6 text-[#58111A]" />;
    }
  };

  const filteredConcerns = clientConcerns.filter(concern => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      concern.title.toLowerCase().includes(query) ||
      concern.description.toLowerCase().includes(query) ||
      concern.commonQuestions.some(q => q.toLowerCase().includes(query))
    );
  });

  return (
    <section id="concern-selector" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/5 border border-[#58111A]/15 text-[#58111A] text-xs font-semibold tracking-wider uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Client-First Guidance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#221F1F] mb-4 font-heading">
          What Can You Consult an Astrologer About?
        </h2>
        <p className="text-base sm:text-lg text-[#554E4E] leading-relaxed">
          Select the area of life you wish to discuss. Sri Krishna Jyotish provides personalized, traditional Vedic astrology consultations tailored to your specific question.
        </p>

        {/* Quick Filter Search */}
        <div className="mt-6 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-[#8C827A] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Type your concern (e.g. marriage, job change, business)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#D5C9B8] bg-white text-sm text-[#221F1F] placeholder-[#8C827A] focus:outline-none focus:ring-2 focus:ring-[#58111A] focus:border-transparent transition-all shadow-xs"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredConcerns.map((concern) => (
          <div
            key={concern.id}
            onClick={() => onNavigate(concern.targetSlug)}
            className="group relative bg-[#FFFDF9] rounded-xl p-6 border border-[#E8DFC9] hover:border-[#D4AF37] hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#FAF4E8] border border-[#E3D4B6] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(concern.icon)}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#58111A]/5 text-[#58111A] uppercase tracking-wide">
                  {concern.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#221F1F] mb-2 group-hover:text-[#58111A] transition-colors">
                {concern.title}
              </h3>
              <p className="text-sm text-[#5C5555] leading-relaxed mb-4">
                {concern.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#F0E8D8] flex items-center justify-between text-sm font-semibold text-[#58111A] group-hover:text-[#7A1926]">
              <span>{concern.ctaText}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}

        {/* Something Else / Other Card */}
        <div className="bg-gradient-to-br from-[#58111A] to-[#3D0A11] text-white rounded-xl p-6 border border-[#7A1926] shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-[#F5E6AB]" />
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/15 text-[#F5E6AB] uppercase tracking-wide">
                Direct Help
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-heading">
              Something Else?
            </h3>
            <p className="text-sm text-[#E6D5D5] leading-relaxed mb-4">
              Not sure which service fits your question? Simply call Sri Krishna Jyotish and explain what is on your mind.
            </p>
          </div>

          <div className="pt-3 border-t border-white/15">
            <a
              href="tel:8885288817"
              className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-sm tracking-wide transition-colors shadow-xs"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call 88852 88817</span>
            </a>
          </div>
        </div>
      </div>

      {/* Natural Client Question Matcher Section (Section 7) */}
      <div className="mt-16 sm:mt-20 pt-12 border-t border-[#E8DFC9]">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] mb-2">
            What Brings You Here?
          </h2>
          <p className="text-sm sm:text-base text-[#5C5555]">
            Click any question to see how traditional Vedic Jyotish addresses it:
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
          {clientQuestionsList.map((item, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(item.slug)}
              className="px-4 py-2.5 rounded-full bg-white hover:bg-[#FAF4E8] border border-[#DDD3C2] hover:border-[#D4AF37] text-xs sm:text-sm font-medium text-[#332E2E] hover:text-[#58111A] transition-all text-left shadow-2xs hover:shadow-xs flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>"{item.question}"</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8C827A] group-hover:text-[#58111A]" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
