import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, PhoneCall, X, ChevronUp, Sparkles, Send, MapPin, CheckCircle } from 'lucide-react';
import { Locale } from '../data/i18n';
import { 
  getWhatsAppUrl, 
  generateWhatsAppMessage, 
  quickConsultationTopics, 
  DISPLAY_PHONE, 
  ASTROLOGER_PHONE 
} from '../utils/whatsapp';
import { DiyaIcon } from './VedicDecorativeElements';

interface FloatingWhatsAppWidgetProps {
  currentPath: string;
  locale?: Locale;
}

export const FloatingWhatsAppWidget: React.FC<FloatingWhatsAppWidgetProps> = ({
  currentPath,
  locale = 'en'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [clientName, setClientName] = useState('');
  const [hasUnreadPulse, setHasUnreadPulse] = useState(true);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Determine current page context title
  const getContextTitle = () => {
    const clean = currentPath.toLowerCase().replace(/\/+$/, '') || '/';
    if (clean.includes('marriage-astrology')) return 'Marriage Astrology';
    if (clean.includes('kundali-matching')) return 'Kundali Matching';
    if (clean.includes('career-astrology')) return 'Career Astrology';
    if (clean.includes('business-astrology')) return 'Business Astrology';
    if (clean.includes('horoscope')) return 'Horoscope & Dasha';
    if (clean.includes('muhurtham')) return 'Muhurtham Calculation';
    if (clean.includes('numerology')) return 'Numerology';
    if (clean.includes('dosha-analysis')) return 'Dosha Analysis';
    if (clean.includes('astrologer-kurnool') || clean.includes('locations')) return 'Kurnool Astrology';
    if (clean.includes('contact')) return 'Consultation Inquiry';
    return 'AP & Telangana Consultation';
  };

  const currentTopicName = selectedTopic || getContextTitle();

  const generatedMessage = generateWhatsAppMessage({
    path: currentPath,
    locale: locale as Locale,
    customTopic: selectedTopic || undefined,
    clientName: clientName.trim() || undefined
  });

  const whatsappUrl = `https://wa.me/${ASTROLOGER_PHONE}?text=${encodeURIComponent(generatedMessage)}`;

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setHasUnreadPulse(false);
  };

  return (
    <div 
      ref={widgetRef} 
      className="hidden sm:block fixed bottom-6 right-6 z-50 font-sans"
    >
      {/* Expanded Interactive Card */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border-2 border-[#D4AF37]/60 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Card Header */}
          <div className="bg-gradient-to-r from-[#58111A] via-[#450C13] to-[#2D070D] p-4 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full text-[#E8DCD4] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp card"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-[#FAF5EC] text-[#58111A] border-2 border-[#D4AF37] flex items-center justify-center font-heading font-bold text-lg shadow-sm">
                  <DiyaIcon className="w-7 h-7" />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#25D366] border-2 border-white" />
              </div>

              <div>
                <div className="font-bold text-base text-[#FAF5EC] font-heading leading-tight flex items-center gap-1.5">
                  <span>Sri Krishna Jyotish</span>
                </div>
                <div className="text-xs text-[#E5D2BA] flex items-center gap-1 mt-0.5">
                  <span>Sri Gayathri Astrology</span>
                  <span>•</span>
                  <span>AP & Telangana</span>
                </div>
                <div className="text-[11px] text-[#25D366] font-medium flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" />
                  <span>Available for Direct WhatsApp / Phone</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-4 space-y-3.5 bg-[#FAF8F3]">
            
            {/* Context Badge */}
            <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#FAF4E8] border border-[#E8DFC9] text-xs">
              <span className="text-[#8C7A58] font-medium">Topic:</span>
              <span className="font-bold text-[#58111A] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                {currentTopicName}
              </span>
            </div>

            {/* Quick Topic Chips */}
            <div>
              <div className="text-[11px] font-bold text-[#6E6464] uppercase tracking-wider mb-1.5">
                Select Consultation Focus:
              </div>
              <div className="grid grid-cols-2 gap-1.5 max-h-28 overflow-y-auto pr-1">
                {quickConsultationTopics.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedTopic(item.topic)}
                    className={`text-left text-xs p-1.5 rounded-md border transition-all flex items-center gap-1.5 ${
                      selectedTopic === item.topic
                        ? 'bg-[#58111A] text-white border-[#58111A] font-semibold'
                        : 'bg-white hover:bg-[#FAF4E8] text-[#332E2E] border-[#E8DFC9]'
                    }`}
                  >
                    <span className="text-xs">{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Name field */}
            <div>
              <input
                type="text"
                placeholder="Your Name (Optional)"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-3 py-1.5 text-xs bg-white rounded-lg border border-[#D5C9B8] text-[#221F1F] focus:outline-none focus:ring-1 focus:ring-[#58111A]"
              />
            </div>

            {/* Live Prefilled Message Preview */}
            <div className="bg-white rounded-xl p-3 border border-[#E8DFC9] text-xs">
              <div className="text-[10px] font-bold uppercase text-[#8C7A58] mb-1 flex items-center justify-between">
                <span>WhatsApp Message Preview:</span>
                <span className="text-[#25D366] font-bold">Ready to Send</span>
              </div>
              <div className="bg-[#ECE5DD]/40 rounded-lg p-2.5 text-[#2C2727] whitespace-pre-line max-h-24 overflow-y-auto font-mono text-[11px] leading-relaxed border border-[#E0D5C1]">
                {generatedMessage}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Start WhatsApp Consultation</span>
              </a>

              <a
                href="tel:8885288817"
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white hover:bg-[#FAF4E8] text-[#58111A] font-semibold text-xs border border-[#D5C9B8] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#58111A]" />
                <span>Or Call Astrologer: {DISPLAY_PHONE}</span>
              </a>
            </div>

          </div>

          {/* Footer Note */}
          <div className="bg-[#FAF2E1] px-4 py-2 border-t border-[#E8DFC9] text-[11px] text-[#7A6B53] flex items-center justify-between">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-[#25D366]" />
              <span>Authentic Vedic Shastra</span>
            </span>
            <span>Kurnool • AP & Telangana</span>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <div className="flex items-center gap-2">
        {/* Subtle hover tooltip banner when closed */}
        {!isOpen && (
          <button
            onClick={handleToggle}
            className="hidden lg:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg border border-[#D4AF37]/50 text-xs font-bold text-[#2D070D] hover:bg-[#FAF4E8] transition-all hover:scale-105"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Consult on WhatsApp: <strong>{getContextTitle()}</strong></span>
          </button>
        )}

        <button
          onClick={handleToggle}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 border-2 border-white"
          aria-label="Open WhatsApp Consultation Options"
          title="Chat with Sri Krishna Jyotish on WhatsApp"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 fill-current" />
              {hasUnreadPulse && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#D4AF37] text-[9px] font-extrabold text-[#2D070D] items-center justify-center border border-white">
                    1
                  </span>
                </span>
              )}
            </>
          )}
        </button>
      </div>
    </div>
  );
};
