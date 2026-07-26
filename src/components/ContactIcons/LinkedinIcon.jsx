import React from "react";

export default function LinkedinIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width="100%" 
      height="100%"
    >
      <defs>
        <linearGradient id="liGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A66C2" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#004182" stopOpacity="0.4" />
        </linearGradient>
        <filter id="glowLi" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Base */}
      <circle cx="50" cy="50" r="40" fill="url(#liGrad)" filter="url(#glowLi)" />
      
      {/* Glass Split */}
      <path d="M50 10 A40 40 0 0 1 50 90 Z" fill="#002D54" opacity="0.6" />

      {/* LinkedIn 'i' and dot */}
      <circle cx="34" cy="34" r="5" fill="#FFFFFF" opacity="0.95" />
      <rect x="29" y="44" width="10" height="28" fill="#FFFFFF" opacity="0.95" />
      
      {/* LinkedIn 'n' */}
      <path 
        d="M45,44 H54.5 V47.5 C56.5,44.5 60,43.5 63.5,43.5 C70,43.5 74,47.5 74,55.5 V72 H64 V57 C64,53 62.5,51 59,51 C55.5,51 54,53.5 54,57 V72 H45 V44 Z" 
        fill="#FFFFFF" 
        opacity="0.95"
      />
    </svg>
  );
}