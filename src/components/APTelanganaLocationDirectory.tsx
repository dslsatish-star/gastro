import React, { useState } from 'react';
import { 
  MapPin, 
  Search, 
  ChevronRight, 
  ArrowRight, 
  Building2, 
  Layers, 
  PhoneCall, 
  CheckCircle2 
} from 'lucide-react';
import { Locale, buildLocalizedPath } from '../data/i18n';
import { 
  locationsData, 
  getStates, 
  getDistrictsByState, 
  getChildLocations, 
  getLocationHierarchy 
} from '../data/locationsData';
import { AppLocation } from '../types';

interface APTelanganaLocationDirectoryProps {
  onNavigate: (path: string) => void;
  locale?: Locale;
  activeServiceSlug?: string;
}

export const APTelanganaLocationDirectory: React.FC<APTelanganaLocationDirectoryProps> = ({
  onNavigate,
  locale = 'en',
  activeServiceSlug
}) => {
  const [selectedStateId, setSelectedStateId] = useState<'ap' | 'tg'>('ap');
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>('ap-kurnool');
  const [selectedMandalId, setSelectedMandalId] = useState<string>('ap-kurnool-adoni');
  const [searchQuery, setSearchQuery] = useState('');

  const serviceQuery = activeServiceSlug ? `?service=${activeServiceSlug}` : '';

  const handleNavigateLocation = (targetPath: string) => {
    let clean = targetPath.trim();
    while (clean.startsWith('/locations')) {
      clean = clean.replace(/^\/locations/, '');
    }
    if (!clean.startsWith('/')) clean = '/' + clean;
    onNavigate(buildLocalizedPath(`/locations${clean}${serviceQuery}`, locale));
  };

  const states = getStates();
  const currentDistricts = getDistrictsByState(selectedStateId);
  const currentMandals = selectedDistrictId ? getChildLocations(selectedDistrictId) : [];
  const currentVillages = selectedMandalId ? getChildLocations(selectedMandalId) : [];

  const searchResults = searchQuery.trim().length > 1
    ? locationsData.filter(l =>
        (l.village && l.village.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (l.mandal && l.mandal.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (l.district && l.district.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 10)
    : [];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#FFFDF9] border-b border-[#E8DFC9] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#58111A]/8 border border-[#58111A]/20 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Complete Administrative Hierarchy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#221F1F] font-heading mb-4 leading-tight">
            Astrology Consultation Across Andhra Pradesh & Telangana
          </h2>
          <p className="text-base sm:text-lg text-[#554E4E] leading-relaxed">
            From our headquarters in Kurnool, Sri Krishna Jyotish provides personalized traditional consultations across all 26 districts of Andhra Pradesh and 33 districts of Telangana.
          </p>
        </div>

        {/* Global Instant Search */}
        <div className="max-w-2xl mx-auto mb-12 relative">
          <div className="relative">
            <Search className="w-5 h-5 text-[#8C7A58] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search your village, mandal, or district (e.g. Arekal, Adoni, Kallur, Banjara Hills)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#D4AF37]/50 focus:border-[#58111A] bg-white text-[#221F1F] shadow-xs outline-none text-sm placeholder-[#8C7A58]"
            />
          </div>

          {searchQuery.trim().length > 1 && (
            <div className="absolute top-full left-0 w-full bg-white border border-[#E8DFC9] rounded-xl mt-2 shadow-xl z-50 max-h-72 overflow-y-auto">
              {searchResults.length > 0 ? (
                searchResults.map(res => {
                  const hierarchy = getLocationHierarchy(res);
                  const pathString = hierarchy.map(h => h.village || h.mandal || h.district || h.state).join(' → ');
                  return (
                    <button
                      key={res.id}
                      onClick={() => handleNavigateLocation(res.path)}
                      className="w-full px-4 py-3 hover:bg-[#FAF4E8] text-sm border-b border-[#F0E8D8] last:border-0 flex items-center justify-between text-left transition-colors"
                    >
                      <div>
                        <span className="text-xs font-bold text-[#58111A] uppercase mr-2">[{res.level}]</span>
                        <span className="font-semibold text-[#221F1F]">{res.village || res.mandal || res.district}</span>
                        <span className="text-xs text-[#8C7A58] block mt-0.5">{pathString}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#C59B27] shrink-0" />
                    </button>
                  );
                })
              ) : (
                <div className="p-4 text-xs text-[#8C7A58] text-center">
                  No direct record matching &quot;{searchQuery}&quot;. Telephone consultations are active for all towns in AP & Telangana at 88852 88817.
                </div>
              )}
            </div>
          )}
        </div>

        {/* State Toggle Bar & Main Directory Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl border border-[#E8DFC9] shadow-2xs">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                setSelectedStateId('ap');
                setSelectedDistrictId('ap-kurnool');
                setSelectedMandalId('ap-kurnool-adoni');
              }}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                selectedStateId === 'ap'
                  ? 'bg-[#58111A] text-white shadow-xs'
                  : 'bg-[#FAF7F0] text-[#58111A] hover:bg-[#F2E8D2]'
              }`}
            >
              <span>Andhra Pradesh</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-black/20">26 Districts</span>
            </button>

            <button
              onClick={() => {
                setSelectedStateId('tg');
                setSelectedDistrictId('tg-hyderabad');
                setSelectedMandalId('tg-hyderabad-ameerpet');
              }}
              className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                selectedStateId === 'tg'
                  ? 'bg-[#58111A] text-white shadow-xs'
                  : 'bg-[#FAF7F0] text-[#58111A] hover:bg-[#F2E8D2]'
              }`}
            >
              <span>Telangana</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-black/20">33 Districts</span>
            </button>
          </div>

          <div className="w-full sm:w-auto text-right">
            <button
              onClick={() => handleNavigateLocation(selectedStateId === 'ap' ? '/andhra-pradesh' : '/telangana')}
              className="text-xs font-bold text-[#58111A] hover:underline inline-flex items-center gap-1.5"
            >
              <span>View Full {selectedStateId === 'ap' ? 'Andhra Pradesh' : 'Telangana'} State Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive 3-Column Drilldown (District → Mandal → Village) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          
          {/* Column 1: Districts */}
          <div className="bg-white rounded-2xl p-5 border border-[#E8DFC9] shadow-2xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F0E8D8]">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#58111A]" />
                <span className="text-sm font-bold text-[#221F1F] font-heading">
                  1. Select District
                </span>
              </div>
              <span className="text-xs text-[#8C7A58] font-semibold">
                {currentDistricts.length} Available
              </span>
            </div>

            <div className="max-h-80 overflow-y-auto space-y-1 pr-1">
              {currentDistricts.map(dist => (
                <div
                  key={dist.id}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                    selectedDistrictId === dist.id
                      ? 'bg-[#58111A] text-white font-bold'
                      : 'hover:bg-[#FAF4E8] text-[#332E2E]'
                  }`}
                  onClick={() => {
                    setSelectedDistrictId(dist.id);
                    const childM = getChildLocations(dist.id);
                    setSelectedMandalId(childM[0]?.id || '');
                  }}
                >
                  <span className="truncate">{dist.district}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigateLocation(dist.path);
                      }}
                      title="View District Page"
                      className={`p-1 rounded hover:bg-black/10 text-[10px] uppercase font-bold underline ${
                        selectedDistrictId === dist.id ? 'text-[#F5E6AB]' : 'text-[#8C7A58]'
                      }`}
                    >
                      Page
                    </button>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Mandals */}
          <div className="bg-white rounded-2xl p-5 border border-[#E8DFC9] shadow-2xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F0E8D8]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#58111A]" />
                <span className="text-sm font-bold text-[#221F1F] font-heading">
                  2. Select Mandal
                </span>
              </div>
              <span className="text-xs text-[#8C7A58] font-semibold">
                {currentMandals.length} Shown
              </span>
            </div>

            <div className="max-h-80 overflow-y-auto space-y-1 pr-1">
              {currentMandals.length > 0 ? (
                currentMandals.map(mandal => (
                  <div
                    key={mandal.id}
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                      selectedMandalId === mandal.id
                        ? 'bg-[#D4AF37] text-[#2D070D] font-bold'
                        : 'hover:bg-[#FAF4E8] text-[#332E2E]'
                    }`}
                    onClick={() => setSelectedMandalId(mandal.id)}
                  >
                    <span className="truncate">{mandal.mandal}</span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigateLocation(mandal.path);
                        }}
                        title="View Mandal Page"
                        className="p-1 rounded hover:bg-black/10 text-[10px] uppercase font-bold underline text-[#58111A]"
                      >
                        Page
                      </button>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center text-xs text-[#8C7A58]">
                  Phone consultations active for all mandals in this district.
                  <a
                    href="tel:8885288817"
                    className="block mt-2 font-bold text-[#58111A] hover:underline"
                  >
                    Call 88852 88817
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Column 3: Villages / Localities */}
          <div className="bg-white rounded-2xl p-5 border border-[#E8DFC9] shadow-2xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F0E8D8]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#58111A]" />
                <span className="text-sm font-bold text-[#221F1F] font-heading">
                  3. Village / Locality
                </span>
              </div>
              <span className="text-xs text-[#8C7A58] font-semibold">
                {currentVillages.length} Listed
              </span>
            </div>

            <div className="max-h-80 overflow-y-auto space-y-1.5 pr-1">
              {currentVillages.length > 0 ? (
                currentVillages.map(vil => (
                  <button
                    key={vil.id}
                    onClick={() => handleNavigateLocation(vil.path)}
                    className="w-full px-3.5 py-3 rounded-xl text-xs font-semibold bg-[#FAF7F0] hover:bg-[#F2E8D2] text-[#221F1F] hover:text-[#58111A] flex items-center justify-between border border-[#E8DFC9] transition-all group"
                  >
                    <span>{vil.village}</span>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-[#58111A] group-hover:translate-x-0.5 transition-transform">
                      <span>View</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                ))
              ) : (
                <div className="p-6 text-center text-xs text-[#8C7A58]">
                  All villages and localities in this mandal are supported via phone consultations.
                  <div className="mt-3">
                    <a
                      href="tel:8885288817"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#58111A] hover:underline"
                    >
                      <PhoneCall className="w-3 h-3" />
                      <span>Inquire 88852 88817</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Location Disclaimer & State Links */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E8DFC9] text-xs text-[#665E5E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>
              Sri Gayathri Astrology is based in Kurnool and serves all villages and mandals across Andhra Pradesh & Telangana through structured telephone consultations.
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 font-bold text-[#58111A]">
            <button 
              onClick={() => handleNavigateLocation('/andhra-pradesh')}
              className="hover:underline"
            >
              AP Directory
            </button>
            <span>•</span>
            <button 
              onClick={() => handleNavigateLocation('/telangana')}
              className="hover:underline"
            >
              TG Directory
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
