import React from 'react';

export const SendIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
);

export const PortalIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    fill="none" 
    className={className}
  >
    <defs>
       {/* Living Light Gradient */}
      <radialGradient id="sphere-light" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />      {/* Core */}
        <stop offset="30%" stopColor="#FEF3C7" stopOpacity="0.9" />   {/* Inner Glow */}
        <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.5" />   {/* Body */}
        <stop offset="100%" stopColor="#B45309" stopOpacity="0" />    {/* Edge Fade */}
      </radialGradient>
      
      {/* Outer Halo Gradient */}
      <radialGradient id="halo-light" cx="50%" cy="50%" r="50%">
        <stop offset="60%" stopColor="#FCD34D" stopOpacity="0" />
        <stop offset="90%" stopColor="#FCD34D" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FCD34D" stopOpacity="0" />
      </radialGradient>

      <filter id="soft-sphere-glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <g filter="url(#soft-sphere-glow)">
      {/* Outer pulsing halo */}
      <circle cx="50" cy="50" r="40" fill="url(#halo-light)">
         <animate attributeName="r" values="35;42;35" dur="3s" repeatCount="indefinite" />
         <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* The Main Sphere */}
      <circle cx="50" cy="50" r="25" fill="url(#sphere-light)">
        <animate attributeName="r" values="24;26;24" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Inner bright core */}
      <circle cx="50" cy="50" r="10" fill="#FFFFFF" opacity="0.8">
         <animate attributeName="opacity" values="0.6;0.9;0.6" dur="0.5s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

export const TravelerIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    fill="none" 
    className={className}
  >
    <defs>
      <radialGradient id="soul-nebula" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" /> 
        <stop offset="20%" stopColor="#E0E7FF" />
        <stop offset="50%" stopColor="#818CF8" /> 
        <stop offset="100%" stopColor="#4C1D95" stopOpacity="0" />
      </radialGradient>
      
      <filter id="soul-shine">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    <g filter="url(#soul-shine)">
      {/* Core Soul Spark */}
      <circle cx="50" cy="50" r="30" fill="url(#soul-nebula)">
         <animate attributeName="r" values="28;32;28" dur="4s" repeatCount="indefinite" />
         <animate attributeName="opacity" values="0.8;1;0.8" dur="4s" repeatCount="indefinite" />
      </circle>
      
      {/* Star shape inside */}
      <path d="M50 20 L55 45 L80 50 L55 55 L50 80 L45 55 L20 50 L45 45 Z" fill="#FFFFFF" opacity="0.9">
         <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite" />
      </path>
    </g>
  </svg>
);

export const WingedEyeIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 300 200" 
    className={className}
    fill="none"
  >
    <defs>
      <linearGradient id="geo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FCD34D" />
        <stop offset="50%" stopColor="#B45309" />
        <stop offset="100%" stopColor="#78350F" />
      </linearGradient>
      
      <radialGradient id="geo-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
      </radialGradient>

      <filter id="sacred-blur">
        <feGaussianBlur stdDeviation="1" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>

    <g transform="translate(150, 100)">
      
      {/* Background Sacred Geometry Grid (Seed of Life fragments) */}
      <g stroke="#B45309" strokeWidth="0.5" opacity="0.3">
        <circle cx="0" cy="0" r="80" />
        <circle cx="0" cy="-40" r="40" />
        <circle cx="0" cy="40" r="40" />
        <circle cx="-35" cy="-20" r="40" />
        <circle cx="35" cy="-20" r="40" />
        <circle cx="-35" cy="20" r="40" />
        <circle cx="35" cy="20" r="40" />
      </g>

      {/* Main Vesica Piscis (The Eye Shape) */}
      {/* Formed by two intersecting circles */}
      <path d="M-70 0 Q 0 -60 70 0 Q 0 60 -70 0 Z" stroke="url(#geo-gold)" strokeWidth="2" fill="url(#geo-glow)" />
      
      {/* Inner Geometry Lines */}
      <g stroke="url(#geo-gold)" strokeWidth="0.8">
         {/* Triangle pointing up */}
         <path d="M0 -45 L39 22 L-39 22 Z" fill="none" opacity="0.6"/>
         {/* Triangle pointing down */}
         <path d="M0 45 L-39 -22 L39 -22 Z" fill="none" opacity="0.6"/>
         
         {/* Connecting lines */}
         <line x1="-70" y1="0" x2="70" y2="0" opacity="0.4" />
         <line x1="0" y1="-60" x2="0" y2="60" opacity="0.4" />
      </g>

      {/* Iris Geometry */}
      <circle cx="0" cy="0" r="28" stroke="url(#geo-gold)" strokeWidth="1.5" fill="#261D07" />
      <circle cx="0" cy="0" r="24" stroke="#D4AF37" strokeWidth="0.5" opacity="0.5" />
      
      {/* Geometric Pupil (Hexagon/Diamond) */}
      <g transform="rotate(0)">
        <path d="M0 -12 L10 -6 L10 6 L0 12 L-10 6 L-10 -6 Z" fill="#FCD34D" />
        <path d="M0 -6 L5 -3 L5 3 L0 6 L-5 3 L-5 -3 Z" fill="#FFFFFF" />
      </g>

      {/* Orbital Rings */}
      <ellipse rx="90" ry="30" stroke="#FCD34D" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 4" transform="rotate(-10)" />
      <ellipse rx="90" ry="30" stroke="#FCD34D" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 4" transform="rotate(10)" />

    </g>
  </svg>
);

export const SparklesIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM6.97 15.03a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm9.75 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm-9.75 5.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
  </svg>
);