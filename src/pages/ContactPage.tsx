import React, { useState } from 'react';
import { PhoneCall, MapPin, MessageCircle, Send, CheckCircle2, Calendar, Clock, User, HelpCircle } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DiyaIcon } from '../components/VedicDecorativeElements';
import { PreparationChecklist } from '../components/PreparationChecklist';

import { Locale } from "../data/i18n";

interface ContactPageProps {
  locale?: Locale;
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, locale = "en" as Locale }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    language: 'English',
    service: 'Marriage & Kundali Matching',
    dob: '',
    birthTime: '',
    birthPlace: '',
    message: '',
    preferredMethod: 'Phone Call'
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Sri Krishna Jyotish, My name is ${form.name || 'Client'}. I would like to inquire about ${form.service}. 
Language: ${form.language}
Method: ${form.preferredMethod}
DOB: ${form.dob || 'N/A'}, Time: ${form.birthTime || 'N/A'}, Place: ${form.birthPlace || 'N/A'}. 
Details: ${form.message}`;
    const whatsappUrl = `https://wa.me/918885288817?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
    setSentSuccess(true);
  };

  return (
    <div>
      {/* 40. CONTACT PAGE SEO */}
      <SEOHead locale={locale}
        title="Contact Sri Gayathri Astrology | Kurnool | 88852 88817"
        description="Have a question about marriage, career, horoscope or Muhurtham? Contact Sri Gayathri Astrology by Sri Krishna Jyotish in Kurnool. Call 88852 88817."
        canonicalPath="/contact"
        schemaType="ContactPage"
      />

      <Breadcrumbs items={[{ label: 'Contact Us' }]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#FAF5EC] via-[#FDFBF7] to-[#FAF7F0] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#E8DFC9]">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#58111A]/8 border border-[#58111A]/15 text-[#58111A] text-xs font-bold uppercase tracking-wider mb-4">
            <DiyaIcon className="w-4 h-4" />
            <span>Sri Gayathri Astrology • Kurnool</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#221F1F] font-heading mb-6 leading-tight">
            Talk to Sri Krishna Jyotish
          </h1>

          <p className="text-base sm:text-xl text-[#524B4B] leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            Have a question about marriage, career, your horoscope or another important area of life? Contact Sri Gayathri Astrology to discuss the type of traditional astrology consultation that may be appropriate for you.
          </p>

          <a
            href="tel:8885288817"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-lg shadow-md transition-all border border-[#7A1926]"
          >
            <PhoneCall className="w-5 h-5 text-[#F5E6AB]" />
            <span>Call 88852 88817 Now</span>
          </a>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Card & Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Official Business Card */}
            <div className="bg-[#2D070D] rounded-2xl p-8 text-white border-2 border-[#D4AF37] shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#58111A] flex items-center justify-center mb-5 border border-[#D4AF37]/50">
                <DiyaIcon className="w-7 h-7" />
              </div>

              <div className="space-y-1 mb-6">
                <h2 className="text-2xl font-bold text-white font-heading">
                  Sri Gayathri Astrology
                </h2>
                <div className="text-sm font-semibold text-[#F5E6AB]">
                  Sri Krishna Jyotish
                </div>
                <div className="text-xs text-[#C8B8B0] flex items-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Kurnool, Andhra Pradesh, India</span>
                </div>
              </div>

              <div className="py-5 border-y border-white/15 mb-6">
                <div className="text-xs text-[#C8B8B0] uppercase tracking-wider mb-1">
                  Primary Phone Number
                </div>
                <a
                  href="tel:8885288817"
                  className="text-2xl sm:text-3xl font-bold text-[#F5E6AB] hover:text-white transition-colors tracking-wide block"
                >
                  88852 88817
                </a>
                <div className="text-xs text-[#A69389] mt-1">
                  Click to call directly from your device
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="tel:8885288817"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#E5C252] text-[#2D070D] font-bold text-sm transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Now: 88852 88817</span>
                </a>

                <a
                  href="https://wa.me/918885288817?text=Hello%20Sri%20Krishna%20Jyotish,%20I%20would%20like%20to%20inquire%20about%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Preparation helper checklist */}
            <PreparationChecklist />

          </div>

          {/* Right Column: Pre-Consultation Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E8DFC9] shadow-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-lg bg-[#FAF4E8] text-[#58111A]">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#221F1F] font-heading">
                    Send Consultation Inquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5C5555]">
                    Share your birth specifics and concern to quickly connect via phone or WhatsApp.
                  </p>
                </div>
              </div>

              {sentSuccess ? (
                <div className="p-6 rounded-xl bg-[#FAF7F0] border border-[#D4AF37] text-center">
                  <CheckCircle2 className="w-10 h-10 text-[#58111A] mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-[#221F1F] mb-1">
                    Inquiry Prepared!
                  </h3>
                  <p className="text-sm text-[#554E4E] mb-4">
                    Your details have been pre-formatted for direct consultation. You can also call directly anytime.
                  </p>
                  <a
                    href="tel:8885288817"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#58111A] text-white font-bold text-sm"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call 88852 88817</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#332E2E] uppercase mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C9B8] text-sm text-[#221F1F] focus:outline-none focus:ring-2 focus:ring-[#58111A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#332E2E] uppercase mb-1.5">
                        Your Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C9B8] text-sm text-[#221F1F] focus:outline-none focus:ring-2 focus:ring-[#58111A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#332E2E] uppercase mb-1.5">
                        Preferred Language
                      </label>
                      <select
                        value={form.language}
                        onChange={(e) => setForm({ ...form, language: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C9B8] text-sm text-[#221F1F] focus:outline-none focus:ring-2 focus:ring-[#58111A] bg-white"
                      >
                        <option>English</option>
                        <option>Telugu (తెలుగు)</option>
                        <option>Hindi (हिन्दी)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#332E2E] uppercase mb-1.5">
                        Preferred Method
                      </label>
                      <select
                        value={form.preferredMethod}
                        onChange={(e) => setForm({ ...form, preferredMethod: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C9B8] text-sm text-[#221F1F] focus:outline-none focus:ring-2 focus:ring-[#58111A] bg-white"
                      >
                        <option>Phone Call</option>
                        <option>WhatsApp Chat</option>
                        <option>In-Person (Kurnool)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#332E2E] uppercase mb-1.5">
                      Consultation Type / Topic
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C9B8] text-sm text-[#221F1F] focus:outline-none focus:ring-2 focus:ring-[#58111A] bg-white"
                    >
                      <option>Marriage & Kundali Matching</option>
                      <option>Horoscope (Janma Kundali) Consultation</option>
                      <option>Career & Job Guidance</option>
                      <option>Love & Relationship Guidance</option>
                      <option>Business & Professional Decisions</option>
                      <option>Muhurtham (Auspicious Time)</option>
                      <option>Numerology Consultation</option>
                      <option>Traditional Dosha Analysis</option>
                      <option>Education & Student Guidance</option>
                      <option>Family & Personal Matters</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#332E2E] uppercase mb-1.5">
                        Date of Birth
                      </label>
                      <input
                        type="text"
                        placeholder="DD/MM/YYYY"
                        value={form.dob}
                        onChange={(e) => setForm({ ...form, dob: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C9B8] text-sm text-[#221F1F] focus:outline-none focus:ring-2 focus:ring-[#58111A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#332E2E] uppercase mb-1.5">
                        Birth Time (if known)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 06:45 AM"
                        value={form.birthTime}
                        onChange={(e) => setForm({ ...form, birthTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C9B8] text-sm text-[#221F1F] focus:outline-none focus:ring-2 focus:ring-[#58111A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#332E2E] uppercase mb-1.5">
                        Place of Birth
                      </label>
                      <input
                        type="text"
                        placeholder="City, State"
                        value={form.birthPlace}
                        onChange={(e) => setForm({ ...form, birthPlace: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C9B8] text-sm text-[#221F1F] focus:outline-none focus:ring-2 focus:ring-[#58111A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#332E2E] uppercase mb-1.5">
                      Your Question / Specific Context
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe what you would like guidance about..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C9B8] text-sm text-[#221F1F] focus:outline-none focus:ring-2 focus:ring-[#58111A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#58111A] hover:bg-[#721C24] text-white font-bold text-base transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry & Open WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
