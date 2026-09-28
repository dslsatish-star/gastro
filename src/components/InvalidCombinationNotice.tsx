import React from 'react';
import { AlertCircle, ArrowRight, PhoneCall, RefreshCw, MapPin, Sparkles } from 'lucide-react';
import { Locale, buildLocalizedPath } from '../data/i18n';
import { AppLocation } from '../types';

interface InvalidCombinationNoticeProps {
  location?: AppLocation;
  serviceSlug?: string;
  onNavigate: (path: string) => void;
  locale?: Locale;
  onChangeService?: () => void;
  onChangeLocation?: () => void;
}

export const InvalidCombinationNotice: React.FC<InvalidCombinationNoticeProps> = ({
  location,
  serviceSlug,
  onNavigate,
  locale = 'en',
  onChangeService,
  onChangeLocation
}) => {
  const locName = location 
    ? (location.village || location.mandal || location.district || location.state)
    : 'this location';

  return (
    <div className="bg-[#FFFDF9] border-2 border-amber-300 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto my-8 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
          <AlertCircle className="w-6 h-6" />
        </div>

        <div className="flex-1">
          <span className="text-xs font-bold text-amber-900 uppercase tracking-wider bg-amber-200/60 px-2.5 py-0.5 rounded-full">
            Contextual Notice
          </span>

          <h3 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading mt-2 mb-2">
            Consultation Option Status for {locName}
          </h3>

          <p className="text-sm sm:text-base text-[#524B4B] leading-relaxed mb-6">
            This consultation option is not currently published as a dedicated package for {locName}. Please choose another service or location, or consult Sri Krishna Jyotish directly by telephone at 88852 88817.
          </p>

          {/* Action cluster preserving state */}
          <div className="flex flex-wrap items-center gap-3">
            {onChangeService && (
              <button
                onClick={onChangeService}
                className="px-4 py-2 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F5E6AB]" />
                <span>Change Service</span>
              </button>
            )}

            {onChangeLocation && (
              <button
                onClick={onChangeLocation}
                className="px-4 py-2 rounded-xl bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Change Location</span>
              </button>
            )}

            {location && (
              <button
                onClick={() => onNavigate(buildLocalizedPath(`/locations${location.path}`, locale))}
                className="px-4 py-2 rounded-xl bg-[#FAF7F0] hover:bg-[#F2E8D2] text-[#58111A] font-bold text-xs border border-[#E8DFC9] transition-colors"
              >
                <span>View {locName} Directory</span>
              </button>
            )}

            <button
              onClick={() => onNavigate(buildLocalizedPath('/services', locale))}
              className="px-4 py-2 rounded-xl bg-[#FAF7F0] hover:bg-[#F2E8D2] text-[#58111A] font-bold text-xs border border-[#E8DFC9] transition-colors"
            >
              <span>View Available Services</span>
            </button>

            <a
              href="tel:8885288817"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#FAF4E8] text-[#58111A] font-bold text-xs border border-[#58111A]/30 transition-colors ml-auto"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Contact Consultant (88852 88817)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
