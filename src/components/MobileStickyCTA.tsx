import React, { useState } from 'react';
import { Phone, MessageCircle, ChevronUp, X, Sparkles, Send, MapPin } from 'lucide-react';
import { Locale } from '../data/i18n';
import { 
  generateWhatsAppMessage, 
  quickConsultationTopics, 
  ASTROLOGER_PHONE,
  DISPLAY_PHONE 
} from '../utils/whatsapp';

interface MobileStickyCTAProps {
  currentPath?: string;
  locale?: Locale;
  serviceTitle?: string;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({
  currentPath = '/',
  locale = 'en',
  serviceTitle
}) => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  // Generate dynamic contextual message for mobile WhatsApp CTA
  const activeMessage = generateWhatsAppMessage({
    path: currentPath,
    locale: locale as Locale,
    serviceTitle,
    customTopic: selectedTopic || undefined
  });

  const whatsappDirectUrl = `https://wa.me/${ASTROLOGER_PHONE}?text=${encodeURIComponent(activeMessage)}`;

  const handleLocationClick = () => {
    // Smooth scroll to the stateful selector container if present, or go to locations directory
    const selector = document.querySelector('.bg-white.border-2.border-\\[\\#D4AF37\\/50\\]');
    if (selector) {
      selector.scrollIntoView({ behavior: 'smooth' });
    } else {
      const selectorAlt = document.querySelector('.bg-white.border-2.border-\\[\\#D4AF37\\]');
      if (selectorAlt) {
        selectorAlt.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 350, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Mobile Quick-Topic Sheet */}
      {sheetOpen && (
        <div className="sm:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-end animate-in fade-in duration-200">
          <div className="bg-white rounded-t-2xl p-5 border-t-2 border-[#D4AF37] max-h-[80vh] overflow-y-auto shadow-2xl">
            
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E8DFC9]">
              <div>
                <div className="text-xs font-bold text-[#8C7A58] uppercase">WhatsApp Quick Consult</div>
                <div className="text-base font-bold text-[#221F1F] font-heading">
                  Sri Krishna Jyotish
                </div>
              </div>
              <button
                onClick={() => setSheetOpen(false)}
                className="p-2 rounded-full bg-[#FAF4E8] text-[#58111A]"
                aria-label="Close sheet"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-[#554E4E] mb-3">
              Select your consultation focus for automatic WhatsApp formatting:
            </div>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {quickConsultationTopics.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedTopic(item.topic)}
                  className={`text-left p-2.5 rounded-xl border text-xs flex items-center gap-2 transition-all ${
                    selectedTopic === item.topic
                      ? 'bg-[#58111A] text-white font-bold border-[#58111A]'
                      : 'bg-[#FAF7F0] text-[#332E2E] border-[#E8DFC9]'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Message Preview */}
            <div className="bg-[#FAF7F0] p-3 rounded-xl border border-[#E8DFC9] mb-4 text-xs">
              <div className="text-[10px] font-bold text-[#8C7A58] uppercase mb-1">
                Prefilled WhatsApp Message:
              </div>
              <div className="text-[#332E2E] text-[11px] font-mono whitespace-pre-line max-h-24 overflow-y-auto leading-relaxed">
                {activeMessage}
              </div>
            </div>

            {/* Direct Open WhatsApp Button */}
            <div className="space-y-2">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSheetOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-md active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send WhatsApp Message</span>
              </a>

              <a
                href="tel:8885288817"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FAF4E8] text-[#58111A] font-bold text-xs border border-[#E8DFC9]"
              >
                <Phone className="w-4 h-4" />
                <span>Call {DISPLAY_PHONE} Instead</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Persistent Mobile Bottom CTA Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#2D070D]/95 backdrop-blur-md border-t-2 border-[#D4AF37] px-3 py-2 shadow-2xl">
        <div className="flex items-center gap-1.5 max-w-md mx-auto">
          
          {/* Primary Call Action */}
          <a
            href="tel:8885288817"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C252] text-[#2D070D] font-bold text-xs shadow-md active:scale-95 transition-all"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span className="truncate">Call</span>
          </a>

          {/* Quick WhatsApp Button with Contextual Message */}
          <a
            href={whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md active:scale-95 transition-all"
            aria-label="Direct WhatsApp Consultation"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span className="truncate">WhatsApp</span>
          </a>

          {/* Quick Location Action */}
          <button
            onClick={handleLocationClick}
            className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2.5 rounded-xl bg-white border border-[#DDD3C2] text-[#58111A] font-bold text-xs shadow-md active:scale-95 transition-all"
            aria-label="Find or Choose Location"
            title="Choose Location"
          >
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="truncate">Location</span>
          </button>

          {/* Quick Options Sheet Opener */}
          <button
            onClick={() => setSheetOpen(!sheetOpen)}
            className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#F5E6AB] border border-white/20 active:scale-95 transition-all"
            aria-label="Consultation Topic Options"
            title="Choose Topic"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </>
  );
};
