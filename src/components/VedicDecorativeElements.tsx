import React from 'react';

export const DiyaIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Flame */}
    <path 
      d="M24 4C24 4 19 12 19 18C19 21.3137 21.2386 24 24 24C26.7614 24 29 21.3137 29 18C29 12 24 4 24 4Z" 
      fill="url(#flameGrad)" 
    />
    <path 
      d="M24 9C24 9 21.5 14 21.5 17.5C21.5 19.5 22.6 21 24 21C25.4 21 26.5 19.5 26.5 17.5C26.5 14 24 9 24 9Z" 
      fill="#FFF4D0" 
    />
    {/* Diya Base */}
    <path 
      d="M10 24C10 24 8 30 14 36C20 42 28 42 34 36C40 30 38 24 38 24C38 24 24 28 10 24Z" 
      fill="url(#goldGrad)" 
      stroke="#7A5806" 
      strokeWidth="1.5" 
    />
    {/* Stand */}
    <path 
      d="M18 39H30V43C30 43.5523 29.5523 44 29 44H19C18.4477 44 18 43.5523 18 43V39Z" 
      fill="#C59B27" 
    />
    <defs>
      <linearGradient id="flameGrad" x1="24" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF7A00" />
        <stop offset="0.6" stopColor="#FFB800" />
        <stop offset="1" stopColor="#FFE600" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="10" y1="24" x2="38" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5E6AB" />
        <stop offset="0.5" stopColor="#D4AF37" />
        <stop offset="1" stopColor="#8B6508" />
      </linearGradient>
    </defs>
  </svg>
);

export const KundaliChartIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer Square */}
    <rect x="4" y="4" width="40" height="40" stroke="#D4AF37" strokeWidth="2" fill="none" />
    {/* Diagonal cross */}
    <line x1="4" y1="4" x2="44" y2="44" stroke="#D4AF37" strokeWidth="1.5" />
    <line x1="4" y1="44" x2="44" y2="4" stroke="#D4AF37" strokeWidth="1.5" />
    {/* Inner Diamond */}
    <polygon points="24,4 44,24 24,44 4,24" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
  </svg>
);

export const MandalaOrnament: React.FC<{ className?: string }> = ({ className = "w-16 h-16 opacity-20" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="45" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" />
    <circle cx="50" cy="50" r="35" stroke="#D4AF37" strokeWidth="1" />
    <circle cx="50" cy="50" r="20" stroke="#D4AF37" strokeWidth="1.5" />
    <circle cx="50" cy="50" r="6" fill="#D4AF37" />
    {/* 8 rays */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 50 50)`}>
        <path d="M50 15 C47 25 53 25 50 35" stroke="#D4AF37" strokeWidth="1" fill="none" />
        <circle cx="50" cy="8" r="2" fill="#D4AF37" />
      </g>
    ))}
  </svg>
);

export const GoldDivider: React.FC<{ className?: string }> = ({ className = "my-6" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
    <div className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#58111A]" />
    <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]" />
    <div className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#58111A]" />
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
  </div>
);
