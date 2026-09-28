import React from 'react';
import { PhoneCall, Calendar, Sparkles, MessageSquare, CheckCircle2, HelpCircle } from 'lucide-react';

export const ConsultationProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Contact',
      subtitle: 'Call 88852 88817',
      desc: 'Call the consultant directly to initiate your request and check availability.',
      icon: PhoneCall,
      highlight: true
    },
    {
      num: '02',
      title: 'Explain Your Question',
      subtitle: 'Identify Your Concern',
      desc: 'Tell the consultant what specific areas of life (marriage, career, etc.) you would like to discuss.',
      icon: MessageSquare,
      highlight: false
    },
    {
      num: '03',
      title: 'Provide Birth Details',
      subtitle: 'Essential Information',
      desc: 'Provide your Date of Birth, exact Time of Birth, and Place of Birth for accurate chart casting.',
      icon: Calendar,
      highlight: false
    },
    {
      num: '04',
      title: 'Horoscope Analysis',
      subtitle: 'Vedic Shastra Review',
      desc: 'Sri Krishna Jyotish evaluates the relevant traditional factors including Dasha and transits.',
      icon: Sparkles,
      highlight: false
    },
    {
      num: '05',
      title: 'Consultation',
      subtitle: 'Understandable Language',
      desc: 'The findings are explained to you in clear, understandable language with a traditional perspective.',
      icon: CheckCircle2,
      highlight: false
    },
    {
      num: '06',
      title: 'Questions',
      subtitle: 'Clarification',
      desc: 'You can discuss relevant follow-up questions to gain complete clarity on the guidance.',
      icon: HelpCircle,
      highlight: false
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F7F2E7] border-y border-[#E8DFC9]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#58111A]/10 text-[#58111A] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Consultation Steps</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#221F1F] mb-4 font-heading">
            How Astrology Consultation Works
          </h2>
          <p className="text-base sm:text-lg text-[#5C5555]">
            We prioritize clarity and traditional integrity throughout your consultation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className={`relative bg-white rounded-xl p-6 border transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between ${
                  item.highlight ? 'border-[#D4AF37] ring-1 ring-[#D4AF37]/30' : 'border-[#E5DCB7]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl font-bold text-[#58111A]/30">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#FAF4E8] flex items-center justify-center text-[#58111A]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#221F1F] mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#58111A] mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-sm text-[#5C5555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {item.highlight && (
                  <div className="mt-6 pt-4 border-t border-[#F0E8D8]">
                    <a
                      href="tel:8885288817"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#58111A] hover:bg-[#721C24] text-white text-xs font-bold transition-colors shadow-xs"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-[#F5E6AB]" />
                      <span>Call 88852 88817</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom reassure bar */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#665E5E]">
            Have a question before calling? Reach out to <strong className="text-[#221F1F]">Sri Krishna Jyotish</strong> at <a href="tel:8885288817" className="font-bold text-[#58111A] hover:underline">88852 88817</a>.
          </p>
        </div>
      </div>
    </section>
  );
};
