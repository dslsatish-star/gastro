import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown, Globe, MapPin, Sparkles } from 'lucide-react';
import { DiyaIcon } from './VedicDecorativeElements';
import { Locale, translations, buildLocalizedPath, parsePathLocale, getEnabledLanguages } from '../data/i18n';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  locale?: Locale;
  currentLocationPath?: string;
  activeServiceSlug?: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentPath, 
  onNavigate, 
  locale = 'en',
  currentLocationPath,
  activeServiceSlug
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = translations[locale] || translations.en;

  // Exact site tree navigation paths matching user requirement
  const mainNavItems = [
    { label: t.nav.home, path: buildLocalizedPath('/', locale) },
    { label: 'Astrology Consultation', path: buildLocalizedPath('/astrology-consultation', locale) },
    { 
      label: t.nav.services, 
      path: buildLocalizedPath('/services', locale),
      hasDropdown: true,
      dropdownItems: [
        { label: 'All Services', path: buildLocalizedPath('/services', locale) },
        { label: 'Marriage Astrology', path: buildLocalizedPath('/marriage-astrology', locale), serviceSlug: 'marriage-astrology' },
        { label: 'Kundali Matching', path: buildLocalizedPath('/kundali-matching', locale), serviceSlug: 'kundali-matching' },
        { label: 'Career Astrology', path: buildLocalizedPath('/career-astrology', locale), serviceSlug: 'career-astrology' },
        { label: 'Business Astrology', path: buildLocalizedPath('/business-astrology', locale), serviceSlug: 'business-astrology' },
        { label: 'Education Astrology', path: buildLocalizedPath('/education-astrology', locale), serviceSlug: 'education-astrology' },
        { label: 'Horoscope Reading', path: buildLocalizedPath('/horoscope-consultation', locale), serviceSlug: 'horoscope-consultation' },
        { label: 'Muhurtham', path: buildLocalizedPath('/muhurtham', locale), serviceSlug: 'muhurtham' },
        { label: 'Dosha Analysis', path: buildLocalizedPath('/dosha-analysis', locale), serviceSlug: 'dosha-analysis' },
        { label: 'Numerology', path: buildLocalizedPath('/numerology', locale), serviceSlug: 'numerology' }
      ]
    },
    { label: 'Marriage & Kundali', path: buildLocalizedPath('/marriage-astrology', locale), serviceSlug: 'marriage-astrology' },
    { label: t.nav.career, path: buildLocalizedPath('/career-astrology', locale), serviceSlug: 'career-astrology' },
    { label: t.nav.horoscope, path: buildLocalizedPath('/horoscope-consultation', locale), serviceSlug: 'horoscope-consultation' },
    { label: 'Locations', path: buildLocalizedPath('/locations', locale) },
    { label: t.nav.faq, path: buildLocalizedPath('/faq', locale) },
    { label: t.nav.about, path: buildLocalizedPath('/about', locale) },
    { label: t.nav.contact, path: buildLocalizedPath('/contact', locale) }
  ];

  const handleNavClick = (path: string, serviceSlug?: string) => {
    // 1. Determine effective location: from prop, or directly from current URL if on a location page
    let activeLocPath = currentLocationPath || '';
    if (!activeLocPath) {
      const { purePath } = parsePathLocale(currentPath);
      let clean = purePath.toLowerCase().replace(/\/+$/, '') || '/';
      while (clean.startsWith('/locations')) {
        clean = clean.replace(/^\/locations/, '');
      }
      const reservedPrefixes = ['/services', '/about', '/contact', '/faq', '/guides', '/astrology-guide', '/astrology-consultation', '/privacy-policy', '/terms', '/disclaimer'];
      const isReserved = reservedPrefixes.some(r => clean === r || clean.startsWith(`${r}/`));
      if (clean && clean !== '/' && !isReserved) {
        activeLocPath = clean;
      }
    }

    if (activeLocPath) {
      while (activeLocPath.startsWith('/locations')) {
        activeLocPath = activeLocPath.replace(/^\/locations/, '');
      }
      if (!activeLocPath.startsWith('/')) {
        activeLocPath = '/' + activeLocPath;
      }
    }

    // If a service/category was clicked and user has an active location:
    // IT MUST NOT GO TO HOMEPAGE OR CHANGE LOCATION; IT MUST STAY AT THAT LOCATION!
    if (serviceSlug) {
      if (activeLocPath && activeLocPath !== '/') {
        onNavigate(buildLocalizedPath(`/locations${activeLocPath}?service=${serviceSlug}`, locale));
      } else {
        onNavigate(buildLocalizedPath(`/services/${serviceSlug}`, locale));
      }
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      setLangDropdownOpen(false);
      return;
    }

    // If "Locations" nav item clicked:
    if (path.includes('/locations')) {
      const query = activeServiceSlug ? `?service=${activeServiceSlug}` : '';
      if (activeLocPath && activeLocPath !== '/' && path.replace(/\/+$/, '').endsWith('/locations')) {
        onNavigate(buildLocalizedPath(`/locations${activeLocPath}${query}`, locale));
      } else {
        onNavigate(buildLocalizedPath(`${path}${query}`, locale));
      }
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      setLangDropdownOpen(false);
      return;
    }

    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setLangDropdownOpen(false);
  };

  const handleLanguageSwitch = (targetLocale: Locale) => {
    const newPath = buildLocalizedPath(currentPath, targetLocale);
    onNavigate(newPath);
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const enabledLanguages = getEnabledLanguages();
  const currentLangObj = enabledLanguages.find((l) => l.language_code === locale) || enabledLanguages[0];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#E8DFC9] shadow-2xs">
      {/* Top micro bar with location, phone & language picker */}
      <div className="bg-[#58111A] text-[#F9F4EB] text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="font-medium tracking-wide">Traditional Vedic Astrology • Sri Krishna Jyotish</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Quick Language switch buttons on topbar */}
            <div className="flex items-center gap-1 text-[11px]">
              <span className="text-[#C8B8B0] hidden md:inline">Language:</span>
              {enabledLanguages.map((l, index) => (
                <React.Fragment key={l.language_code}>
                  <button 
                    onClick={() => handleLanguageSwitch(l.language_code)}
                    className={`px-1.5 py-0.5 rounded transition-colors ${locale === l.language_code ? 'bg-[#D4AF37] text-[#58111A] font-bold' : 'text-[#E6D5D5] hover:text-white'}`}
                  >
                    {l.language_code === 'en' ? 'EN' : l.native_name}
                  </button>
                  {index < enabledLanguages.length - 1 && <span className="text-[#8C6D70]">|</span>}
                </React.Fragment>
              ))}
            </div>

            <span className="hidden lg:flex items-center gap-1 text-[#E6D5D5] pl-2 border-l border-[#7A2B35]">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span>Kurnool, Andhra Pradesh</span>
            </span>
            <a 
              href="tel:8885288817" 
              className="flex items-center gap-1.5 font-bold text-[#F5E6AB] hover:text-white transition-colors pl-2 border-l border-[#7A2B35]"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>88852 88817</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Name */}
          <div 
            onClick={() => handleNavClick(buildLocalizedPath('/', locale))}
            className="flex items-center gap-3 cursor-pointer group select-none py-1"
          >
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#58111A] to-[#400910] border border-[#D4AF37]/50 flex items-center justify-center shadow-xs group-hover:border-[#D4AF37] transition-all">
              <DiyaIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#58111A] group-hover:text-[#721C24] transition-colors leading-tight">
                Sri Gayathri Astrology
              </div>
              <div className="text-xs font-semibold text-[#8C7A58] flex items-center gap-1.5">
                <span>Sri Krishna Jyotish</span>
                <span className="w-1 h-1 rounded-full bg-[#C59B27]" />
                <span className="text-[#6B6161]">Kurnool</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-[#403838]">
            {mainNavItems.map((item) => {
              const { purePath: activePure } = parsePathLocale(currentPath);
              const { purePath: itemPure } = parsePathLocale(item.path);
              const isActive = activePure === itemPure || (itemPure !== '/' && activePure.startsWith(itemPure));
              
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className={`px-3 py-2 rounded-md transition-colors flex items-center gap-1 ${
                        isActive ? 'text-[#58111A] font-bold bg-[#58111A]/5' : 'hover:text-[#58111A] hover:bg-[#FAF4E8]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-[#8C827A] group-hover:rotate-180 transition-transform duration-200" />
                    </button>

                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-lg border border-[#E8DFC9] py-2 z-50 animate-in fade-in-50 duration-150">
                        {item.dropdownItems?.map((drop) => (
                          <button
                            key={drop.path}
                            onClick={() => handleNavClick(drop.path, drop.serviceSlug)}
                            className="w-full text-left px-4 py-2 text-xs font-medium text-[#403838] hover:text-[#58111A] hover:bg-[#FAF4E8] transition-colors flex items-center justify-between"
                          >
                            <span>{drop.label}</span>
                            {currentPath === drop.path && <span className="w-1.5 h-1.5 rounded-full bg-[#58111A]" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path, item.serviceSlug)}
                  className={`px-3 py-2 rounded-md transition-colors ${
                    isActive ? 'text-[#58111A] font-bold bg-[#58111A]/5' : 'hover:text-[#58111A] hover:bg-[#FAF4E8]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Action: Primary Phone Call Button & Language selector */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language dropdown button */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-2.5 py-2 rounded-lg border border-[#DDD3C2] text-xs font-semibold text-[#58111A] hover:bg-[#FAF4E8] transition-colors"
                title="Change Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#8C7A58]" />
                <span>{currentLangObj.native_name}</span>
                <ChevronDown className="w-3 h-3 text-[#8C827A]" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-lg shadow-lg border border-[#E8DFC9] py-1 z-50">
                  {enabledLanguages.map((l) => (
                    <button
                      key={l.language_code}
                      onClick={() => handleLanguageSwitch(l.language_code)}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-[#FAF4E8] transition-colors ${
                        locale === l.language_code ? 'font-bold text-[#58111A] bg-[#FAF4E8]' : 'text-[#332E2E]'
                      }`}
                    >
                      <span>{l.native_name}</span>
                      <span className="text-[10px] text-[#8C827A] uppercase">{l.language_code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:8885288817"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-sm shadow-xs transition-all duration-150 hover:scale-[1.02] border border-[#7A1926]"
            >
              <Phone className="w-4 h-4 text-[#F5E6AB]" />
              <span>Call 88852 88817</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="tel:8885288817"
              className="p-2.5 rounded-lg bg-[#58111A] text-white sm:hidden"
              aria-label="Call Sri Gayathri Astrology"
            >
              <Phone className="w-4 h-4 text-[#F5E6AB]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-[#DDD3C2] text-[#58111A] hover:bg-[#FAF4E8]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E8DFC9] px-4 pt-2 pb-6 max-h-[85vh] overflow-y-auto">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-[#FAF7F0] border border-[#E8DFC9] mb-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#58111A]">
              <Globe className="w-4 h-4" />
              <span>{t.nav.switchLang}:</span>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              {enabledLanguages.map((l) => (
                <button
                  key={l.language_code}
                  onClick={() => handleLanguageSwitch(l.language_code)}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${
                    locale === l.language_code ? 'bg-[#58111A] text-white' : 'bg-white text-[#332E2E] border border-[#DDD3C2]'
                  }`}
                >
                  {l.native_name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => handleNavClick(item.path, item.serviceSlug)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold flex items-center justify-between ${
                    currentPath === item.path ? 'bg-[#58111A] text-white' : 'text-[#332E2E] hover:bg-[#FAF4E8]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>

                {item.dropdownItems && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-[#FAF7F0] rounded-lg my-1">
                    {item.dropdownItems.map((drop) => (
                      <button
                        key={drop.path}
                        onClick={() => handleNavClick(drop.path, drop.serviceSlug)}
                        className={`w-full text-left px-3 py-2 text-xs font-medium rounded-md ${
                          currentPath === drop.path ? 'text-[#58111A] font-bold bg-[#E8DFC9]/50' : 'text-[#554E4E]'
                        }`}
                      >
                        {drop.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#E8DFC9]">
            <a
              href="tel:8885288817"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[#58111A] text-white font-bold text-base shadow-sm"
            >
              <Phone className="w-5 h-5 text-[#F5E6AB]" />
              <span>Call 88852 88817</span>
            </a>
            <div className="mt-3 text-center text-xs text-[#7A6F6F]">
              Kurnool, Andhra Pradesh • Sri Krishna Jyotish
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
