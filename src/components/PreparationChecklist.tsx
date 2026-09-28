import React, { useState } from 'react';
import { CheckSquare, Square, Info, Sparkles, PhoneCall } from 'lucide-react';

export const PreparationChecklist: React.FC = () => {
  const [items, setItems] = useState({
    dob: true,
    birthTime: true,
    birthPlace: true,
    question: true,
    partnerDetails: false
  });

  const toggle = (key: keyof typeof items) => {
    setItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 border border-[#E8DFC9] shadow-xs">
      <div className="flex items-start gap-3 mb-6">
        <div className="p-2.5 rounded-lg bg-[#FAF4E8] border border-[#E3D4B6] text-[#58111A]">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#221F1F] font-heading">
            What Information Do I Need Before Calling?
          </h3>
          <p className="text-xs sm:text-sm text-[#5C5555] mt-0.5">
            Use this quick checklist to get ready for your consultation with Sri Krishna Jyotish.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div 
          onClick={() => toggle('dob')}
          className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF7F0] border border-[#EDE4D4] cursor-pointer hover:bg-[#F5EFE4] transition-colors"
        >
          {items.dob ? <CheckSquare className="w-5 h-5 text-[#58111A] shrink-0 mt-0.5" /> : <Square className="w-5 h-5 text-[#8C827A] shrink-0 mt-0.5" />}
          <div>
            <div className="text-sm font-semibold text-[#221F1F]">1. Date of Birth</div>
            <div className="text-xs text-[#665E5E]">Day, month, and year (e.g., 14 August 1992).</div>
          </div>
        </div>

        <div 
          onClick={() => toggle('birthTime')}
          className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF7F0] border border-[#EDE4D4] cursor-pointer hover:bg-[#F5EFE4] transition-colors"
        >
          {items.birthTime ? <CheckSquare className="w-5 h-5 text-[#58111A] shrink-0 mt-0.5" /> : <Square className="w-5 h-5 text-[#8C827A] shrink-0 mt-0.5" />}
          <div>
            <div className="text-sm font-semibold text-[#221F1F]">2. Exact Birth Time (If Known)</div>
            <div className="text-xs text-[#665E5E]">Hours, minutes, and AM/PM. If unknown, Chandra Kundali guidance is still possible.</div>
          </div>
        </div>

        <div 
          onClick={() => toggle('birthPlace')}
          className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF7F0] border border-[#EDE4D4] cursor-pointer hover:bg-[#F5EFE4] transition-colors"
        >
          {items.birthPlace ? <CheckSquare className="w-5 h-5 text-[#58111A] shrink-0 mt-0.5" /> : <Square className="w-5 h-5 text-[#8C827A] shrink-0 mt-0.5" />}
          <div>
            <div className="text-sm font-semibold text-[#221F1F]">3. Place of Birth</div>
            <div className="text-xs text-[#665E5E]">Town/City, District, and State (e.g., Kurnool, Andhra Pradesh).</div>
          </div>
        </div>

        <div 
          onClick={() => toggle('question')}
          className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF7F0] border border-[#EDE4D4] cursor-pointer hover:bg-[#F5EFE4] transition-colors"
        >
          {items.question ? <CheckSquare className="w-5 h-5 text-[#58111A] shrink-0 mt-0.5" /> : <Square className="w-5 h-5 text-[#8C827A] shrink-0 mt-0.5" />}
          <div>
            <div className="text-sm font-semibold text-[#221F1F]">4. Your Main Question or Concern</div>
            <div className="text-xs text-[#665E5E]">Marriage, job change, business timing, family, Muhurtham, or general chart study.</div>
          </div>
        </div>

        <div 
          onClick={() => toggle('partnerDetails')}
          className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF7F0] border border-[#EDE4D4] cursor-pointer hover:bg-[#F5EFE4] transition-colors"
        >
          {items.partnerDetails ? <CheckSquare className="w-5 h-5 text-[#58111A] shrink-0 mt-0.5" /> : <Square className="w-5 h-5 text-[#8C827A] shrink-0 mt-0.5" />}
          <div>
            <div className="text-sm font-semibold text-[#221F1F]">5. Partner / Matching Details (If Applicable)</div>
            <div className="text-xs text-[#665E5E]">For Kundali matching or business partnerships, have the other party’s birth data handy.</div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#E8DFC9] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-[#665E5E]">
          <Info className="w-4 h-4 text-[#C59B27] shrink-0" />
          <span>All consultation details are treated with strict confidentiality.</span>
        </div>
        <a
          href="tel:8885288817"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#58111A] hover:bg-[#721C24] text-white text-xs font-bold transition-colors"
        >
          <PhoneCall className="w-3.5 h-3.5 text-[#F5E6AB]" />
          <span>Ready? Call 88852 88817</span>
        </a>
      </div>
    </div>
  );
};
