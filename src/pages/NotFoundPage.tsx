import React from 'react';
import { PhoneCall, ArrowRight, Home } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { DiyaIcon } from '../components/VedicDecorativeElements';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
      <SEOHead
        title="Page Not Found | Sri Gayathri Astrology | 88852 88817"
        description="The page you are looking for could not be found. Consult Sri Gayathri Astrology by Sri Krishna Jyotish in Kurnool. Call 88852 88817."
      />

      <div className="w-16 h-16 rounded-2xl bg-[#58111A] text-[#F5E6AB] flex items-center justify-center mx-auto mb-6">
        <DiyaIcon className="w-10 h-10" />
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold text-[#221F1F] font-heading mb-4">
        Page Not Found
      </h1>

      <p className="text-base sm:text-lg text-[#554E4E] leading-relaxed mb-8">
        The requested astrology consultation or guide page may have moved. You can return to our homepage or reach out directly to Sri Krishna Jyotish.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => onNavigate('/')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#58111A] text-white font-bold text-sm shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>

        <a
          href="tel:8885288817"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#D5C9B8] text-[#58111A] font-bold text-sm"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call 88852 88817</span>
        </a>
      </div>
    </div>
  );
};
