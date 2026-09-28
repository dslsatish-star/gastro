import React, { useEffect } from 'react';
import { Locale, getIndexableLanguages, buildLocalizedPath, parsePathLocale } from '../data/i18n';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schemaType?: 'WebSite' | 'Service' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'Article';
  extraSchema?: object;
  locale?: Locale;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  schemaType = 'WebSite',
  extraSchema,
  locale = 'en'
}) => {
  useEffect(() => {
    // 0. Update HTML Lang Attribute
    document.documentElement.lang = locale;

    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update OG tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // 4. Update Canonical
    if (canonicalPath) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      // Assuming absolute URL or just the path for now (usually needs absolute origin in real prod)
      canonicalLink.setAttribute('href', `https://srigayathriastrology.in${canonicalPath}`);
    }

    // 5. Update hreflangs
    const indexableLangs = getIndexableLanguages();
    
    // Remove existing hreflang links first
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

    if (canonicalPath) {
      // Create hreflang for each indexable language based on pure path
      // Extract pure path from canonicalPath (it might already be pure if passed from some places, but let's assume it's the localized path, actually canonicalPath should be exactly what we want)
      
      // Let's rely on the current window path to get pure path, then build localized links
      // Or we assume `canonicalPath` is already the purePath? Wait, previously canonicalPath was localized.
      // E.g., `canonicalPath = locale === 'en' ? '/' : \`/${locale}/\`;`
      // So let's extract the pure path:
      // Actually `canonicalPath` might just be what we want as canonical.
      
      // Let's create an x-default as well.
      // But the pure path is needed to generate for all langs.
      // The parent usually passes `canonicalPath` as the localized path.
    }

    // We can do this cleaner: let's build the hreflangs in the component body and append them, but since we are doing DOM manipulation:
    const { purePath } = parsePathLocale(window.location.pathname);
    
    indexableLangs.forEach(langConf => {
      const href = `https://srigayathriastrology.in${buildLocalizedPath(purePath, langConf.language_code)}`;
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', langConf.language_code);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    });
    
    // Add x-default
    const xDefaultHref = `https://srigayathriastrology.in${buildLocalizedPath(purePath, 'en')}`;
    const xDefaultLink = document.createElement('link');
    xDefaultLink.setAttribute('rel', 'alternate');
    xDefaultLink.setAttribute('hreflang', 'x-default');
    xDefaultLink.setAttribute('href', xDefaultHref);
    document.head.appendChild(xDefaultLink);

    // 6. Update or inject JSON-LD schema
    const baseSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': 'https://srigayathriastrology.in/#business',
          'name': 'Sri Gayathri Astrology',
          'alternateName': 'Sri Gayathri Vedic Astrology',
          'description': 'Traditional Vedic Astrology Guidance in Kurnool by Sri Krishna Jyotish.',
          'telephone': '+918885288817',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Kurnool',
            'addressRegion': 'Andhra Pradesh',
            'addressCountry': 'IN'
          },
          'founder': {
            '@type': 'Person',
            'name': 'Sri Krishna Jyotish',
            'jobTitle': 'Vedic Astrologer'
          },
          'priceRange': '₹₹',
          'areaServed': {
            '@type': 'AdministrativeArea',
            'name': 'Kurnool, Andhra Pradesh'
          }
        },
        ...(extraSchema ? [extraSchema] : [])
      ]
    };

    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(baseSchema);

    // Scroll to top on page transition
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, canonicalPath, schemaType, extraSchema, locale]);

  return null;
};
