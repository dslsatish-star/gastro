import React from 'react';
import { PhoneCall, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { DiyaIcon } from './VedicDecorativeElements';
import { Locale } from '../data/i18n';
import { getWhatsAppUrl, DISPLAY_PHONE } from '../utils/whatsapp';

interface CallToActionBannerProps {
  headline?: string;
  supportingText?: string;
  onNavigateServices?: () => void;
  currentPath?: string;
  locale?: Locale;
  serviceTitle?: string;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  headline = "Have a Question You'd Like to Discuss?",
  supportingText = "Speak with Sri Krishna Jyotish about the type of traditional astrology consultation that may be appropriate for your question.",
  onNavigateServices,
  currentPath = '/',
  locale = 'en',
  serviceTitle
}) => {
  const whatsappUrl = getWhatsAppUrl({
    path: currentPath,
    locale: locale as Locale,
    serviceTitle
  });

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-[#58111A] via-[#4A0E17] to-[#2D070D] rounded-2xl p-8 sm:p-12 lg:p-16 text-white text-center shadow-xl border-2 border-[#D4AF37]/50 relative overflow-hidden">
        
        {/* Background Decorative rings */}
        <div className="absolute left-1/2 -top-24 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-white/10 border border-[#D4AF37]/40 flex items-center justify-center mx-auto mb-5 shadow-xs">
            <DiyaIcon className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#F5E6AB] bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-white/10">
            Sri Gayathri Astrology • AP & Telangana
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading mb-4 text-white">
            {headline}
          </h2>

          <p className="text-base sm:text-lg text-[#F0DFDF] leading-relaxed mb-8 max-w-2xl mx-auto">
            {supportingText}
          </p>

          {/* Primary Clickable Call Display */}
          <div className="mb-8">
            <a
              href="tel:8885288817"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C252] text-[#2D070D] font-bold text-xl sm:text-2xl hover:scale-105 active:scale-95 transition-all shadow-lg border border-[#F5E6AB]"
            >
              <PhoneCall className="w-6 h-6 fill-current animate-bounce" />
              <span>{DISPLAY_PHONE}</span>
            </a>
            <div className="text-xs text-[#E6D5D5] mt-2 font-medium">
              Direct Phone Consultation with Sri Krishna Jyotish
            </div>
          </div>

          {/* Secondary Options with Dynamic WhatsApp CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white transition-all shadow-md active:scale-95 border border-white/20"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp Consultation (Prefilled Details)</span>
            </a>

            {onNavigateServices && (
              <button
                onClick={onNavigateServices}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-[#F5E6AB] transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
