import React from 'react';
import { UserCheck, BookOpen, ShieldCheck, HeartHandshake, PhoneCall, MapPin, Sparkles } from 'lucide-react';

interface WhyChooseUsProps {
  onNavigateContact?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigateContact }) => {
  const trustCards = [
    {
      title: 'Personalized',
      desc: 'Consultation considers the individual’s relevant birth details and specific life question.',
      icon: UserCheck
    },
    {
      title: 'Traditional',
      desc: 'Based on authentic, traditional Vedic Jyotish principles passed down through classical Shastras.',
      icon: BookOpen
    },
    {
      title: 'Clear',
      desc: 'Explains relevant astrology concepts in language ordinary clients can understand, without heavy jargon.',
      icon: Sparkles
    },
    {
      title: 'Respectful',
      desc: 'Treats all personal consultation details with strict confidentiality, care, and compassion.',
      icon: ShieldCheck
    },
    {
      title: 'Convenient',
      desc: 'Direct, easy phone contact at 88852 88817 to discuss your schedule and consultation requirements.',
      icon: PhoneCall
    },
    {
      title: 'Kurnool Based',
      desc: 'Serving clients seeking trusted traditional Vedic astrology consultation in Kurnool, Andhra Pradesh.',
      icon: MapPin
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section 8: Not sure what you need banner */}
      <div className="mb-20 bg-gradient-to-r from-[#58111A] via-[#661520] to-[#4A0E17] rounded-2xl p-8 sm:p-12 text-white shadow-lg border border-[#7A1926] relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-wider uppercase text-[#F5E6AB] bg-white/10 px-3 py-1 rounded-full mb-3">
            First-Time Astrology Clients
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading mb-4 text-white">
            Not Sure Which Consultation Is Right for You?
          </h2>
          <p className="text-base sm:text-lg text-[#F2DFDF] leading-relaxed mb-6">
            You don't need to know astrology terminology before contacting us. Simply explain what you would like guidance about, and Sri Krishna Jyotish can help you understand which type of consultation may be appropriate.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:8885288817"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-base transition-colors shadow-md"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Call 88852 88817</span>
            </a>
            {onNavigateContact && (
              <button
                onClick={onNavigateContact}
                className="px-5 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-colors"
              >
                Send Consultation Message
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Section 10: Why Sri Gayathri Astrology */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#58111A]/5 border border-[#58111A]/15 text-[#58111A] text-xs font-semibold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Integrity & Craft</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#221F1F] mb-4">
            Traditional Guidance, Explained Clearly
          </h2>
          <p className="text-base sm:text-lg text-[#5C5555]">
            Built on genuine respect for ancient Jyotish principles, ethical guidance, and complete client comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-[#E8DFC9] hover:border-[#D4AF37]/80 hover:shadow-xs transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-[#FAF4E8] border border-[#E3D4B6] flex items-center justify-center text-[#58111A] mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#221F1F] mb-2 font-heading">
                  {card.title}
                </h3>
                <p className="text-sm text-[#5C5555] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
