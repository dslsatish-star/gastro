import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, X, Sparkles } from 'lucide-react';
import { Locale, languageConfig } from '../data/i18n';
import { AppLocation } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface LoadTimeCTAPopupProps {
  location?: AppLocation;
  serviceTitle?: string;
  locale?: Locale;
  onOpenLocationSelector?: () => void;
}

export const LoadTimeCTAPopup: React.FC<LoadTimeCTAPopupProps> = ({
  location,
  serviceTitle,
  locale = 'en',
  onOpenLocationSelector
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const locId = location?.id || 'general';
  const locName = location 
    ? (location.village || location.mandal || location.district || location.state)
    : 'Andhra Pradesh & Telangana';

  const storageKey = `cta_seen_${locId}`;

  useEffect(() => {
    // Session / preference check: Show once per location page
    const hasSeen = localStorage.getItem(storageKey);
    if (!hasSeen) {
      // Delay slightly for a gentle user experience
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [storageKey]);

  if (!isOpen) return null;

  const handleClose = () => {
    localStorage.setItem(storageKey, 'true');
    setIsOpen(false);
  };

  const currentLangName = languageConfig.find(l => l.language_code === locale)?.native_name || 'English';

  const whatsappMessageUrl = getWhatsAppUrl({
    locale,
    serviceTitle,
    locationName: locName,
    languageName: currentLangName
  });

  // Localized Copy
  const getLocalizedContent = () => {
    switch (locale) {
      case 'te':
        return {
          title: `${locName} లో వైదిక జ్యోతిష్య సంప్రదింపులు కావలెనా?`,
          sub: 'శ్రీ గాయత్రి జ్యోతిష్యాలయం — శ్రీ కృష్ణ జ್ಯోతిష్',
          desc: 'పెళ్లి, జాతక చక్రం, కుండలి గుణమేళనం, ఉద్యోగ, వ్యాపార సమస్యలపై స్పష్టమైన వైదిక జ్యోతిష్య సలహా కొరకు అనుభవజ్ఞులైన శ్రీ కృష్ణ జ್ಯోతిష్ గారిని ఫోన్ ద్వారా సంప్రదించండి.',
          callBtn: 'కాల్ చేయండి',
          whatsappBtn: 'వాట్సాప్ మెసేజ్',
          chooseBtn: 'ప్రాంతాన్ని మార్చండి 📍',
          closeBtn: 'మూసివేయి',
          badge: 'ప్రత్యేక సంప్రదింపులు'
        };
      case 'hi':
        return {
          title: `क्या आपको ${locName} में वैदिक ज्योतिष परामर्श की आवश्यकता है?`,
          sub: 'श्री गायत्री ज्योतिषालय — श्री कृष्ण ज्योतिष',
          desc: 'विवाह, जन्म कुंडली विश्लेषण, कुंडली मिलान, करियर एवं व्यवसाय मार्गदर्शन के लिए श्री कृष्ण ज्योतिष जी से सीधे फोन या व्हाट्सएप पर संपर्क करें।',
          callBtn: 'अभी कॉल करें',
          whatsappBtn: 'व्हाट्सएप चैट',
          chooseBtn: 'स्थान बदलें 📍',
          closeBtn: 'बंद करें',
          badge: 'विशेष परामर्श'
        };
      case 'kn':
        return {
          title: `ನಿಮಗೆ ${locName} ನಲ್ಲಿ ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ ಸಮಾಲೋಚನೆ ಬೇಕೇ?`,
          sub: 'ಶ್ರೀ ಗಾಯತ್ರಿ ಜ್ಯೋತಿಷ್ಯಾಲಯ — ಶ್ರೀ ಕೃಷ್ಣ ಜ್ಯೋತಿಷ್',
          desc: 'ಮದುವೆ, ಜನ್ಮ ಜಾತಕ ವಿಶ್ಲೇಷಣೆ, ಕುಂಡಲಿ ಹೊಂದಾಣಿಕೆ, ವೃತ್ತಿ ಮತ್ತು ವ್ಯವಹಾರದ ಸಮಸ್ಯೆಗಳ ಬಗ್ಗೆ ಶ್ರೀ ಕೃಷ್ಣ ಜ್ಯೋತಿಷ್ ಅವರಿಂದ ನೇರ ಫೋನ್ ಸಲಹೆ ಪಡೆಯಿರಿ.',
          callBtn: 'ಈಗ ಕರೆ ಮಾಡಿ',
          whatsappBtn: 'ವಾಟ್ಸಾಪ್ ಚಾಟ್',
          chooseBtn: 'ಸ್ಥಳ ಬದಲಾಯಿಸಿ 📍',
          closeBtn: 'ಮುಚ್ಚಿ',
          badge: 'ವಿಶೇಷ ಸಮಾಲೋಚನೆ'
        };
      case 'mr':
        return {
          title: `तुम्हाला ${locName} मध्ये वैदिक ज्योतिष सल्ल्याची गरज आहे का?`,
          sub: 'श्री गायत्री ज्योतिषालय — श्री कृष्ण ज्योतिष',
          desc: 'लग्न, जन्म पत्रिका, कुंडली मिलान, करिअर आणि व्यवसाय विषयक अडचणींवर अचूक वैदिक ज्योतिष सल्ल्यासाठी श्री कृष्ण ज्योतिष यांच्याशी संपर्क साधा.',
          callBtn: 'आत्ताच कॉल करा',
          whatsappBtn: 'व्हाट्सएप चॅट',
          chooseBtn: 'स्थान बदला 📍',
          closeBtn: 'बंद करा',
          badge: 'विशेष सल्ला'
        };
      default:
        return {
          title: `Need Vedic Astrology Consultation in ${locName}?`,
          sub: 'Sri Gayathri Astrology — Sri Krishna Jyotish',
          desc: 'Consult Sri Krishna Jyotish for personalized traditional Vedic astrology guidance regarding marriage matching, career growth, business timing, horoscope, Muhurtham and family wellbeing.',
          callBtn: 'Call 88852 88817',
          whatsappBtn: 'WhatsApp Consultation',
          chooseBtn: 'Choose Location 📍',
          closeBtn: 'Close',
          badge: 'Astrology Consultation'
        };
    }
  };

  const text = getLocalizedContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-[#D4AF37] relative overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Subtle Decorative Background */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none" />
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#FAF4E8] text-[#58111A] transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#58111A]/8 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{text.badge}</span>
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading leading-tight mb-2 pr-6">
            {text.title}
          </h3>

          <div className="text-sm font-bold text-[#8C7A58] mb-4">
            {text.sub}
          </div>

          <p className="text-sm text-[#554E4E] leading-relaxed mb-6">
            {text.desc}
          </p>

          {/* Action Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <a
              href="tel:+918885288817"
              onClick={handleClose}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-sm shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F5E6AB] fill-current" />
              <span>{text.callBtn}</span>
            </a>

            <a
              href={whatsappMessageUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClose}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{text.whatsappBtn}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs pt-2">
            {onOpenLocationSelector && (
              <button
                onClick={() => {
                  handleClose();
                  onOpenLocationSelector();
                }}
                className="font-bold text-[#58111A] hover:underline flex items-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{text.chooseBtn}</span>
              </button>
            )}

            <button
              onClick={handleClose}
              className="font-semibold text-[#8C7A58] hover:text-[#58111A]"
            >
              {text.closeBtn}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
