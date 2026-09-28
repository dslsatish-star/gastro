import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { LocationPage } from './pages/LocationPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AllServicesPage } from './pages/AllServicesPage';
import { FAQPage } from './pages/FAQPage';
import { GuidesPage } from './pages/GuidesPage';
import { GuideDetailPage } from './pages/GuideDetailPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AstrologyConsultationPage } from './pages/AstrologyConsultationPage';
import { servicesData } from './data/servicesData';
import { guideArticles } from './data/guidesData';
import { parsePathLocale, buildLocalizedPath } from './data/i18n';
import { 
  getLocationByPath, 
  validateLocationHierarchy 
} from './data/locationsData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return (window.location.pathname + window.location.search) || '/';
  });

  // Persistent storage for selected location and service
  const [persistedLocationPath, setPersistedLocationPath] = useState<string>(() => {
    try {
      return localStorage.getItem('sri_gayathri_loc') || '/andhra-pradesh/kurnool';
    } catch {
      return '/andhra-pradesh/kurnool';
    }
  });

  const [persistedServiceSlug, setPersistedServiceSlug] = useState<string>(() => {
    try {
      return localStorage.getItem('sri_gayathri_srv') || '';
    } catch {
      return '';
    }
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath((window.location.pathname + window.location.search) || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    let cleanPath = path;
    if (!cleanPath.startsWith('/')) {
      cleanPath = '/' + cleanPath;
    }
    window.history.pushState({}, '', cleanPath);
    setCurrentPath(cleanPath);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const { locale, purePath, queryString } = parsePathLocale(currentPath);
  const searchParams = new URLSearchParams(queryString || '');
  const serviceQueryParam = searchParams.get('service') || searchParams.get('category') || '';

  // Derive active location directly from URL whenever on a location page
  const activeLocationPath = useMemo(() => {
    let clean = purePath.toLowerCase().replace(/\/+$/, '') || '/';
    while (clean.startsWith('/locations')) {
      clean = clean.replace(/^\/locations/, '');
    }
    const reserved = ['/services', '/about', '/contact', '/faq', '/guides', '/astrology-guide', '/astrology-consultation', '/privacy-policy', '/terms', '/disclaimer'];
    const isReserved = reserved.some(r => clean === r || clean.startsWith(`${r}/`));
    if (clean && clean !== '/' && !isReserved) {
      const loc = getLocationByPath(clean);
      if (loc) return loc.path;
    }
    return '';
  }, [purePath]);

  // Keep persistent state in sync with URL
  useEffect(() => {
    // 1. Save language preference when URL contains a supported locale
    if (locale) {
      try {
        localStorage.setItem('sri_gayathri_lang', locale);
      } catch {}
    }
  }, [locale]);

  useEffect(() => {
    // 2. On mount: if URL is English default, check if user has a previously saved non-English preference
    const { locale: urlLocale } = parsePathLocale(window.location.pathname);
    if (!urlLocale || urlLocale === 'en') {
      try {
        const savedLocale = localStorage.getItem('sri_gayathri_lang');
        const activeLocales = ['te', 'hi', 'kn', 'mr'];
        if (savedLocale && activeLocales.includes(savedLocale)) {
          const localized = buildLocalizedPath(currentPath, savedLocale);
          navigateTo(localized);
        }
      } catch {}
    }
  }, []);

  useEffect(() => {
    if (activeLocationPath) {
      setPersistedLocationPath(activeLocationPath);
      try {
        localStorage.setItem('sri_gayathri_loc', activeLocationPath);
      } catch {}
    }
  }, [activeLocationPath]);

  useEffect(() => {
    if (serviceQueryParam) {
      setPersistedServiceSlug(serviceQueryParam);
      try {
        localStorage.setItem('sri_gayathri_srv', serviceQueryParam);
      } catch {}
    } else {
      // Check if purePath is an individual service page
      const clean = purePath.toLowerCase().replace(/\/+$/, '').replace(/^\/services\//, '').replace(/^\//, '');
      if (servicesData[clean]) {
        setPersistedServiceSlug(clean);
        try {
          localStorage.setItem('sri_gayathri_srv', clean);
        } catch {}
      }
    }
  }, [serviceQueryParam, purePath]);

  const effectiveLocationPath = activeLocationPath || persistedLocationPath;
  const effectiveServiceSlug = serviceQueryParam || persistedServiceSlug;

  const handleServiceChange = (slug: string) => {
    setPersistedServiceSlug(slug);
    try {
      localStorage.setItem('sri_gayathri_srv', slug);
    } catch {}
  };

  const handleLocationChange = (locPath: string) => {
    setPersistedLocationPath(locPath);
    try {
      localStorage.setItem('sri_gayathri_loc', locPath);
    } catch {}
  };

  // Route Resolution based on purePath
  const renderCurrentPage = () => {
    const normalizedPath = purePath.toLowerCase().replace(/\/+$/, '') || '/';

    // 1. Home (/, /te/, /hi/)
    if (normalizedPath === '/') {
      return (
        <HomePage 
          onNavigate={navigateTo} 
          locale={locale} 
          activeServiceSlug={effectiveServiceSlug}
          currentLocationPath={effectiveLocationPath}
        />
      );
    }

    // 2. About (/about, /te/about, /hi/about)
    if (normalizedPath === '/about') {
      return <AboutPage onNavigate={navigateTo} locale={locale} />;
    }

    // 3. Astrology Consultation (/astrology-consultation)
    if (normalizedPath === '/astrology-consultation') {
      return <AstrologyConsultationPage onNavigate={navigateTo} locale={locale} />;
    }

    // 4. Contact (/contact)
    if (normalizedPath === '/contact') {
      return <ContactPage onNavigate={navigateTo} locale={locale} />;
    }

    // 5. Locations Directory Root (/locations)
    if (normalizedPath === '/locations') {
      return (
        <LocationPage 
          onNavigate={navigateTo} 
          locale={locale} 
          initialServiceSlug={effectiveServiceSlug}
          onServiceChange={handleServiceChange}
        />
      );
    }

    // 6. Hierarchical Location Routing (Part 20)
    if (
      normalizedPath.startsWith('/locations/') ||
      normalizedPath === '/locations/andhra-pradesh' ||
      normalizedPath === '/locations/telangana' ||
      normalizedPath.startsWith('/andhra-pradesh') ||
      normalizedPath.startsWith('/telangana')
    ) {
      let cleanLocPath = normalizedPath;
      while (cleanLocPath.startsWith('/locations')) {
        cleanLocPath = cleanLocPath.replace(/^\/locations/, '');
      }
      if (!cleanLocPath.startsWith('/')) cleanLocPath = '/' + cleanLocPath;
      
      const loc = getLocationByPath(cleanLocPath);
      if (loc) {
        return (
          <LocationPage 
            location={loc} 
            onNavigate={navigateTo} 
            locale={locale} 
            initialServiceSlug={effectiveServiceSlug}
            onServiceChange={handleServiceChange}
          />
        );
      }

      const parts = cleanLocPath.replace(/^\//, '').split('/').filter(Boolean);
      const [stateSlug, districtSlug, mandalSlug, villageSlug] = parts;
      const validatedLoc = validateLocationHierarchy(stateSlug, districtSlug, mandalSlug, villageSlug);
      if (validatedLoc) {
        return (
          <LocationPage 
            location={validatedLoc} 
            onNavigate={navigateTo} 
            locale={locale} 
            initialServiceSlug={effectiveServiceSlug}
            onServiceChange={handleServiceChange}
          />
        );
      }

      // Invalid parent-child hierarchy strictly returns 404 per Part 20
      return <NotFoundPage onNavigate={navigateTo} />;
    }

    // Legacy Location Redirects/Matches
    if (
      normalizedPath === '/astrologer/kurnool' ||
      normalizedPath === '/locations/astrologer-kurnool' ||
      normalizedPath === '/astrologer-kurnool'
    ) {
      const kurnoolLoc = getLocationByPath('/andhra-pradesh/kurnool');
      if (kurnoolLoc) {
        return (
          <LocationPage 
            location={kurnoolLoc} 
            onNavigate={navigateTo} 
            locale={locale} 
            initialServiceSlug={effectiveServiceSlug}
            onServiceChange={handleServiceChange}
          />
        );
      }
    }

    // 7. Services Hub (/services, /astrology-services)
    if (
      normalizedPath === '/services' ||
      normalizedPath === '/astrology-services'
    ) {
      return (
        <AllServicesPage 
          onNavigate={navigateTo} 
          locale={locale} 
          currentLocationPath={effectiveLocationPath}
          activeServiceSlug={effectiveServiceSlug}
        />
      );
    }

    // 8. Individual Service Pages via /services/:slug
    if (normalizedPath.startsWith('/services/')) {
      const cleanSlug = normalizedPath.replace('/services/', '');
      if (servicesData[cleanSlug]) {
        return (
          <ServicePage 
            service={servicesData[cleanSlug]} 
            onNavigate={navigateTo} 
            locale={locale} 
            currentLocationPath={effectiveLocationPath}
            onLocationChange={handleLocationChange}
          />
        );
      }
      return <NotFoundPage onNavigate={navigateTo} />;
    }

    // 9. FAQ (/faq)
    if (normalizedPath === '/faq') {
      return <FAQPage onNavigate={navigateTo} locale={locale} />;
    }

    // 10. Guides Hub (/guides, /astrology-guide, /blog)
    if (
      normalizedPath === '/guides' ||
      normalizedPath === '/astrology-guide' ||
      normalizedPath === '/blog'
    ) {
      return <GuidesPage onNavigate={navigateTo} locale={locale} />;
    }

    // 11. Individual Guide Detail (/guides/:slug or /astrology-guide/:slug)
    if (normalizedPath.startsWith('/guides/')) {
      const guideSlug = normalizedPath.replace('/guides/', '');
      const article = guideArticles.find((a) => a.slug === guideSlug);
      if (article) {
        return <GuideDetailPage article={article} onNavigate={navigateTo} />;
      }
      return <NotFoundPage onNavigate={navigateTo} />;
    }
    if (normalizedPath.startsWith('/astrology-guide/')) {
      const guideSlug = normalizedPath.replace('/astrology-guide/', '');
      const article = guideArticles.find((a) => a.slug === guideSlug);
      if (article) {
        return <GuideDetailPage article={article} onNavigate={navigateTo} />;
      }
      return <NotFoundPage onNavigate={navigateTo} />;
    }

    // 12. Legal Pages (/privacy-policy, /terms-disclaimer, /terms, /disclaimer)
    if (normalizedPath === '/privacy-policy') {
      return <LegalPage type="privacy" onNavigate={navigateTo} locale={locale} />;
    }
    if (normalizedPath === '/terms-disclaimer' || normalizedPath === '/terms') {
      return <LegalPage type="terms" onNavigate={navigateTo} locale={locale} />;
    }
    if (normalizedPath === '/disclaimer') {
      return <LegalPage type="terms" onNavigate={navigateTo} locale={locale} />;
    }

    // 13. Direct Service Pages (e.g. /marriage-astrology, /kundali-matching, /career-astrology, /business-astrology, /horoscope-consultation, /horoscope, /numerology, /muhurtham, /dosha-analysis, /vedic-astrology)
    const cleanSlug = normalizedPath.replace(/^\//, '');
    if (servicesData[cleanSlug]) {
      return (
        <ServicePage 
          service={servicesData[cleanSlug]} 
          onNavigate={navigateTo} 
          locale={locale} 
          currentLocationPath={effectiveLocationPath}
          onLocationChange={handleLocationChange}
        />
      );
    }

    // 14. Fallback: Direct Location Access (e.g. /kurnool or /hyderabad without /locations)
    const fallbackLoc = getLocationByPath(normalizedPath);
    if (fallbackLoc) {
      return (
        <LocationPage 
          location={fallbackLoc} 
          onNavigate={navigateTo} 
          locale={locale} 
          initialServiceSlug={effectiveServiceSlug}
          onServiceChange={handleServiceChange}
        />
      );
    }

    // 15. 404 Not Found
    return <NotFoundPage onNavigate={navigateTo} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#221F1F]">
      {/* Top Header with Multi-language and persistent location/category support */}
      <Header 
        currentPath={currentPath} 
        onNavigate={navigateTo} 
        locale={locale} 
        currentLocationPath={effectiveLocationPath}
        activeServiceSlug={effectiveServiceSlug}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} locale={locale} />

      {/* Mobile Sticky Call CTA */}
      <MobileStickyCTA />
    </div>
  );
}
