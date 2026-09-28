export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTag: string;
  summary: string;
  heroHeadline: string;
  heroSupportingText: string;
  isThisForYouQuestions: string[];
  aboutContent: string[];
  whatWeDiscuss: string[];
  whatYouMayNeed: string[];
  howItWorksSteps: { step: string; title: string; desc: string }[];
  relatedServiceSlugs: string[];
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoDescription: string;
  iconName: string;
}

export interface ClientConcern {
  id: string;
  category: string;
  icon: string;
  title: string;
  description: string;
  ctaText: string;
  targetSlug: string;
  commonQuestions: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  serviceSlug?: string;
}

export interface GuideArticle {
  slug: string;
  title: string;
  readTime: string;
  category: string;
  summary: string;
  content: string[];
  relatedServices: string[];
}

export interface AppLocation {
  id: string;
  state: string;
  district: string;
  mandal?: string;
  village?: string;
  exactSourceName?: string;
  slug: string;
  path: string; // e.g. /andhra-pradesh/kurnool/adoni/arekal
  level: 'state' | 'district' | 'mandal' | 'village';
  parentId?: string;
  childIds?: string[];
  canonicalUrl?: string;
  indexability?: boolean;
  sitemapStatus?: boolean;
  contentStatus?: string;
  serviceAvailability?: string;
  language?: string;
  lastModified?: string;
}
